/* ============================================================================
   NexStudents · accounts, cart and checkout
   Depends on assets/supabase-config.js being loaded first.

   🚨 NO LIBRARY, ON PURPOSE. The official supabase-js is ~40KB from a CDN, and
   this file runs on the SIGN-IN page. A third-party script there can read the
   session token of every customer, and the rest of this site carries no external
   dependencies at all. The REST and auth endpoints are plain HTTP, so `fetch`
   does the job with nothing to trust but Supabase itself.
   ⚠️ The trade is that token refresh is ours to handle. See refreshIfNeeded().

   🚨 EVERY WRITE THAT MATTERS HAPPENS IN THE DATABASE, NOT HERE. This file can
   be edited by anyone with a browser console. It is a convenience layer, never
   a security boundary: the price of a product, whether an item is free, and who
   owns a purchase are all decided by Postgres. See tools/supabase-*.sql.
   ============================================================================ */
(function () {
  "use strict";

  var CFG = window.NS_SUPABASE;
  if (!CFG || !CFG.url || !CFG.publishableKey) {
    console.error("[ns-account] supabase-config.js missing or incomplete");
    return;
  }

  var AUTH = CFG.url + "/auth/v1";
  var REST = CFG.url + "/rest/v1";
  var SESSION_KEY = "ns:session";
  var CART_KEY = "ns:cart";
  var THUMB_KEY = "ns:cartthumbs";
  /* ⚠️ A SECOND DISPLAY HINT, SAME RULES AS THE THUMBNAIL. The confirmation
     after checkout has to link each sheet somewhere, and `products` holds only
     slug, title and price - it has no idea where a sheet lives on the site.
     Storing the href when it goes into the cart is the cheapest way to know.
     Cosmetic, so a tampered value is a wrong link and nothing worse. */
  var HREF_KEY = "ns:carthrefs";

  /* ── storage helpers ──────────────────────────────────────────────────────
     ⚠️ Every localStorage call is wrapped. Private mode and "block site data"
     make these THROW rather than return null, and an exception here would take
     the whole page down, not just the cart. */
  function read(key, fallback) {
    try { var v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }
    catch (e) { return fallback; }
  }
  function write(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); return true; }
    catch (e) { return false; }
  }
  function drop(key) { try { localStorage.removeItem(key); } catch (e) {} }

  /* ── session ────────────────────────────────────────────────────────────── */
  var session = read(SESSION_KEY, null);

  function headers(withAuth) {
    var h = { "apikey": CFG.publishableKey, "Content-Type": "application/json" };
    /* ⚠️ Without a user token, Postgres treats the request as the `anon` role.
       That is correct for a guest, and RLS still applies -- anon simply matches
       far fewer rows. Never send the publishable key AS the bearer token. */
    h["Authorization"] = "Bearer " + (withAuth && session ? session.access_token
                                                          : CFG.publishableKey);
    return h;
  }

  /* Supabase returns the session in the URL FRAGMENT after a magic link.
     🚨 It must be cleared from the address bar immediately. A fragment is not
     sent to the server, but it stays in history, in a screenshot, and in
     anything the user pastes to ask for help. */
  function captureFromUrl() {
    if (!location.hash || location.hash.indexOf("access_token") < 0) return false;
    var p = new URLSearchParams(location.hash.slice(1));
    var at = p.get("access_token"), rt = p.get("refresh_token");
    if (!at) return false;
    session = {
      access_token: at,
      refresh_token: rt,
      expires_at: Date.now() + (parseInt(p.get("expires_in"), 10) || 3600) * 1000
    };
    write(SESSION_KEY, session);
    history.replaceState(null, "", location.pathname + location.search);
    return true;
  }

  /* ⚠️ Refreshed a minute EARLY. A token that expires mid-request fails the
     request, not the next one, and the user sees a random error rather than a
     login prompt. */
  function refreshIfNeeded() {
    if (!session) return Promise.resolve(null);
    if (Date.now() < session.expires_at - 60000) return Promise.resolve(session);
    if (!session.refresh_token) { signOut(); return Promise.resolve(null); }
    return fetch(AUTH + "/token?grant_type=refresh_token", {
      method: "POST", headers: headers(false),
      body: JSON.stringify({ refresh_token: session.refresh_token })
    }).then(function (r) { return r.ok ? r.json() : null; })
      .then(function (d) {
        if (!d || !d.access_token) { signOut(); return null; }
        session = { access_token: d.access_token, refresh_token: d.refresh_token,
                    expires_at: Date.now() + (d.expires_in || 3600) * 1000 };
        write(SESSION_KEY, session);
        return session;
      }).catch(function () { return null; });
  }

  function signIn(email) {
    /* Magic link. `create_user: true` means signing in and signing up are the
       same action -- there is no separate register form to get wrong. */
    return fetch(AUTH + "/otp", {
      method: "POST", headers: headers(false),
      body: JSON.stringify({
        email: String(email || "").trim().toLowerCase(),
        create_user: true,
        options: { email_redirect_to: location.origin + "/account/" }
      })
    }).then(function (r) {
      if (!r.ok) return r.json().then(function (e) { throw new Error(e.msg || e.error_description || "Could not send the link"); });
      return true;
    });
  }

  function signOut() {
    session = null; drop(SESSION_KEY);
    document.dispatchEvent(new CustomEvent("ns:auth", { detail: { user: null } }));
  }

  function getUser() {
    return refreshIfNeeded().then(function (s) {
      if (!s) return null;
      return fetch(AUTH + "/user", { headers: headers(true) })
        .then(function (r) { return r.ok ? r.json() : null; })
        .catch(function () { return null; });
    });
  }

  /* ── cart ─────────────────────────────────────────────────────────────────
     🚨 THE CART IS NOT A DATABASE TABLE. Paul, 2026-09-06: even free items go
     through it. It lives here until checkout because a cart nobody has paid for
     is not worth storing, and a signed-out visitor has no row to attach one to.
     ⚠️ Slugs only. Never keep a price in the cart -- the price is read from the
     `products` table at checkout, or a console edit becomes a discount. */
  function cart() { return read(CART_KEY, []); }

  /* ⚠️ DISPLAY HINTS, AND ONLY THE PICTURE. A thumbnail path is cosmetic: the
     worst a tampered one does is show the wrong image. Titles and prices are
     NEVER read from here — they come back from the `products` table on every
     paint, because a price the browser can edit is a discount code. Kept in a
     separate key so the cart itself stays a clean list of slugs. */
  function cartThumb(slug) { return read(THUMB_KEY, {})[slug] || ""; }
  function rememberThumb(slug, url) {
    if (!url) return;
    var m = read(THUMB_KEY, {});
    m[slug] = url;
    write(THUMB_KEY, m);
  }

  function cartHref(slug) { return read(HREF_KEY, {})[slug] || ""; }
  function rememberHref(slug, url) {
    if (!url) return;
    var m = read(HREF_KEY, {});
    m[slug] = url;
    write(HREF_KEY, m);
  }

  /* `added` tells the drawer whether to OPEN. A removal repaints it where it
     already is, and cartClear() at checkout must not pop it back up over the
     confirmation. Adding is the only event a reader needs confirmed. */
  function fire(items, added) {
    document.dispatchEvent(new CustomEvent("ns:cart", {
      detail: { items: items, added: !!added }
    }));
  }

  function cartAdd(slug, meta) {
    var c = cart();
    if (c.indexOf(slug) < 0) { c.push(slug); write(CART_KEY, c); }
    if (meta && meta.thumb) rememberThumb(slug, meta.thumb);
    if (meta && meta.href) rememberHref(slug, meta.href);
    fire(c, true);
    return c;
  }
  function cartRemove(slug) {
    var c = cart().filter(function (s) { return s !== slug; });
    write(CART_KEY, c);
    fire(c, false);
    return c;
  }
  /* 🚨 THE CONFIRMATION NEEDS THE HINTS AFTER THE CART IS GONE. cartClear runs
     inside checkoutFree, before the page can draw a receipt, so anything the
     confirmation wants must be READ FIRST and held by the caller. See the cart
     page, which snapshots titles and links before checking out. */
  function cartClear() {
    drop(CART_KEY);
    drop(THUMB_KEY);
    drop(HREF_KEY);
    fire([], false);
  }

  /* Reads the real prices so the cart can be totalled honestly. */
  function priceList(slugs) {
    if (!slugs.length) return Promise.resolve([]);
    var q = REST + "/products?select=slug,title,price_cents&slug=in.(" +
            slugs.map(encodeURIComponent).join(",") + ")";
    return fetch(q, { headers: headers(true) })
      .then(function (r) { return r.ok ? r.json() : []; })
      .catch(function () { return []; });
  }

  /* ── checkout ─────────────────────────────────────────────────────────────
     Free items are recorded by the database function, which re-checks the price
     and refuses anything that is not zero. Paid items are NOT handled here --
     they need Stripe, and a purchase row may only ever be written by the webhook
     holding the secret key. */
  /* `only` (2026-09-10): a MIXED cart records its free items here first, then
     sends the paid ones to Stripe. With `only`, the cart is NOT cleared - the
     paid items are still owed, and the thank-you page removes each one once
     Postgres confirms it was bought. */
  function checkoutFree(email, only) {
    var items = only || cart();
    if (!items.length) return Promise.reject(new Error("The cart is empty"));
    return priceList(items).then(function (rows) {
      var paid = rows.filter(function (r) { return r.price_cents > 0; });
      if (paid.length) {
        throw new Error("Paid items need checkout: " +
                        paid.map(function (r) { return r.title; }).join(", "));
      }
      return refreshIfNeeded().then(function () {
        return Promise.all(items.map(function (slug) {
          return fetch(REST + "/rpc/checkout_free", {
            method: "POST", headers: headers(true),
            body: JSON.stringify({ p_slug: slug, p_email: email })
          }).then(function (r) {
            if (!r.ok) return r.json().then(function (e) {
              throw new Error(e.message || ("Could not check out " + slug));
            });
            return r.json();
          });
        }));
      });
    }).then(function (rows) {
      if (only) only.forEach(function (s) { cartRemove(s); }); else cartClear();
      return rows;
    });
  }

  /* What this person owns. Works signed in; a guest sees nothing here and uses
     the link emailed to them instead. */
  function myPurchases() {
    return refreshIfNeeded().then(function (s) {
      if (!s) return [];
      return fetch(REST + "/purchases?select=product,bought_at,amount_cents&order=bought_at.desc",
                   { headers: headers(true) })
        .then(function (r) { return r.ok ? r.json() : []; })
        .catch(function () { return []; });
    });
  }

  captureFromUrl();

  window.NSAccount = {
    signIn: signIn, signOut: signOut, getUser: getUser,
    isSignedIn: function () { return !!session; },
    cart: cart, cartAdd: cartAdd, cartRemove: cartRemove, cartClear: cartClear,
    cartThumb: cartThumb, cartHref: cartHref,
    priceList: priceList, checkoutFree: checkoutFree, myPurchases: myPurchases
  };
})();
