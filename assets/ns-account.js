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
  /* 2026-09-10: the fragment now arrives from the CONFIRM-YOUR-EMAIL link
     (type=signup) and the FORGOT-PASSWORD link (type=recovery). A recovery
     session is real but must go straight to "choose a new password", so it is
     flagged for the account page to act on. */
  var recovery = false;
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
    recovery = p.get("type") === "recovery";
    write(SESSION_KEY, session);
    history.replaceState(null, "", location.pathname + location.search);
    return true;
  }
  function setSession(d) {
    session = { access_token: d.access_token, refresh_token: d.refresh_token,
                expires_at: Date.now() + (d.expires_in || 3600) * 1000 };
    write(SESSION_KEY, session);
    document.dispatchEvent(new CustomEvent("ns:auth", { detail: { user: d.user || null } }));
  }
  /* Supabase's own error words are written for developers. These are for a
     parent at a kitchen table. Unknown ones fall through unchanged. */
  function friendly(e, fallback) {
    var m = (e && (e.msg || e.error_description || e.message)) || "";
    if (/invalid login credentials/i.test(m)) return "That email and password do not match. Check both, or use Forgot password.";
    if (/email not confirmed/i.test(m)) return "Confirm your email first. The link is in the email we sent when you signed up.";
    if (/already registered|already been registered/i.test(m)) return "That email already has an account. Log in instead, or use Forgot password.";
    if (/password should be at least|weak password/i.test(m)) return "Pick a longer password: at least 8 characters.";
    if (/rate limit|too many/i.test(m)) return "Too many tries in a row. Wait a minute and try again.";
    return m || fallback;
  }
  function authCall(path, body, fallback) {
    return fetch(AUTH + path, { method: "POST", headers: headers(false), body: JSON.stringify(body) })
      .then(function (r) {
        return r.json().catch(function () { return {}; }).then(function (d) {
          if (!r.ok) throw new Error(friendly(d, fallback));
          return d;
        });
      });
  }
  var clean = function (email) { return String(email || "").trim().toLowerCase(); };

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

  /* ── EMAIL AND PASSWORD (2026-09-10) ──────────────────────────────────────
     Paul: "there is an email but no password to login. i dont like it. it just
     sends a verification to click to sign in through your email." The email
     link sign-in is GONE. This is the account every other site has:
       logIn        email + password                  -> signed in
       signUp       email + password                  -> "confirm your email" sent
       forgot       email                             -> reset link sent
       newPassword  (from the reset link's session)   -> password changed
     The confirm and reset emails come from NexStudents <accounts@nexstudents.org>
     through Resend (Supabase custom SMTP, set 2026-09-10). */
  function logIn(email, password) {
    return authCall("/token?grant_type=password",
      { email: clean(email), password: String(password || "") }, "Could not log in.")
      .then(function (d) { write(PICK_KEY, true); write(WHO_KEY, "parent"); setSession(d); return d.user; });
  }
  function signUp(email, password, first, last) {
    /* redirect_to is where the CONFIRM link lands: /account/, which picks the
       session out of the fragment and shows the account, already signed in.
       The name rides in user_metadata. Paul: "after you login it should show
       your name and profile." */
    return authCall("/signup?redirect_to=" + encodeURIComponent(location.origin + "/account/"),
      { email: clean(email), password: String(password || ""),
        data: { first_name: String(first || "").trim(), last_name: String(last || "").trim() } },
      "Could not make the account.")
      .then(function (d) {
        /* With email confirmation on there is no session yet, only a user.
           ⚠️ Supabase answers an EXISTING email the same way on purpose, so a
           stranger cannot test which emails have accounts. The page says the
           same thing either way: check your email. */
        if (d && d.access_token) setSession(d);
        return !!(d && d.access_token);
      });
  }
  /* Resend the confirm-your-email link. Paul, 2026-09-10: "she also has an
     email verification system" - hers offers Resend Verification Email, and a
     lost first email must not strand anyone. */
  function resendConfirm(email) {
    return authCall("/resend?redirect_to=" + encodeURIComponent(location.origin + "/account/"),
      { type: "signup", email: clean(email) }, "Could not resend the email.").then(function () { return true; });
  }
  function forgot(email) {
    return authCall("/recover?redirect_to=" + encodeURIComponent(location.origin + "/account/"),
      { email: clean(email) }, "Could not send the reset email.").then(function () { return true; });
  }
  /* Profile: the name lives in the user's own user_metadata, which only that
     signed-in user can change. */
  function updateProfile(first, last) {
    return refreshIfNeeded().then(function (s) {
      if (!s) throw new Error("Please sign in again.");
      return fetch(AUTH + "/user", { method: "PUT", headers: headers(true),
        body: JSON.stringify({ data: { first_name: String(first || "").trim(), last_name: String(last || "").trim() } }) })
        .then(function (r) {
          return r.json().catch(function () { return {}; }).then(function (d) {
            if (!r.ok) throw new Error(friendly(d, "Could not save your name."));
            return d;
          });
        });
    });
  }
  /* The ACCOUNT HOLDER'S theme (2026-09-11). They have no profile row, so it
     lives in their own user_metadata beside the name. Paul: "i think the
     parent needs a theme also." null = the default red box, no accent.
     ⚠️ Supabase MERGES `data` into user_metadata, so this leaves the name alone. */
  function saveMyTheme(theme) { return saveMyMeta({ theme: theme || null }); }
  /* Reading settings for the account holder (migration 016 keeps a student's
     on their row). Same merge into user_metadata. */
  function saveMySettings(settings) { return saveMyMeta({ settings: settings || {} }); }
  function saveMyMeta(data) {
    return refreshIfNeeded().then(function (s) {
      if (!s) throw new Error("Please sign in again.");
      return fetch(AUTH + "/user", { method: "PUT", headers: headers(true),
        body: JSON.stringify({ data: data }) })
        .then(function (r) {
          return r.json().catch(function () { return {}; }).then(function (d) {
            if (!r.ok) throw new Error(friendly(d, "Could not save your color."));
            return d;
          });
        });
    });
  }
  function newPassword(password) {
    return refreshIfNeeded().then(function (s) {
      if (!s) throw new Error("That reset link has expired. Ask for a new one.");
      return fetch(AUTH + "/user", { method: "PUT", headers: headers(true),
                                     body: JSON.stringify({ password: String(password || "") }) })
        .then(function (r) {
          return r.json().catch(function () { return {}; }).then(function (d) {
            if (!r.ok) throw new Error(friendly(d, "Could not change the password."));
            recovery = false;
            return true;
          });
        });
    });
  }

  /* CHANGE EMAIL (2026-09-10). Paul: "i cant change the email ... we can also
     verify the email like on lizzie website." Supabase does not switch the
     address here: it emails a confirm link (the NexStudents "email change"
     template) and the account keeps the OLD address until that link is
     pressed. The link lands on /account/, which opens the account panel.
     ⚠️ With Supabase's "secure email change" on, the OLD address gets a link
     too and both must be pressed. The panel's message says to check the inbox,
     not which one, so it stays true either way. */
  function changeEmail(email) {
    return refreshIfNeeded().then(function (s) {
      if (!s) throw new Error("Please sign in again.");
      return fetch(AUTH + "/user?redirect_to=" + encodeURIComponent(location.origin + "/account/"),
        { method: "PUT", headers: headers(true), body: JSON.stringify({ email: clean(email) }) })
        .then(function (r) {
          return r.json().catch(function () { return {}; }).then(function (d) {
            if (!r.ok) throw new Error(friendly(d, "Could not change the email."));
            return d;
          });
        });
    });
  }

  /* ── STUDENT PROFILES AND THE PIN (2026-09-11, migration 013) ─────────────
     Paul: "should feel a bit like Netflix accounts ... a parent or teacher pin."
     One login (the parent's), students as profiles under it, and the PIN
     guarding the parent side. WHO is on the device is a per-device choice,
     like Netflix's, so it lives here: ns:who = "parent" or a student id.
     ⚠️ ns:who IS A HOUSEHOLD SETTING, NOT A PERMISSION. The session is the
     parent's either way; the database never sees ns:who. Anything that must be
     enforced against a child needs a server rule (ROADMAP 56/57).
     ns:pickwho is set by a fresh sign-in, so the next page shows the
     "Who's learning?" picker once. */
  var WHO_KEY = "ns:who", PICK_KEY = "ns:pickwho";
  function who() { return read(WHO_KEY, "parent"); }
  function setWho(id) {
    write(WHO_KEY, id || "parent");
    document.dispatchEvent(new CustomEvent("ns:who", { detail: { who: id || "parent" } }));
  }
  function wantsPicker() { return !!session && read(PICK_KEY, false) === true; }
  function pickerShown() { drop(PICK_KEY); }

  function rest(method, path, body, fallback) {
    return refreshIfNeeded().then(function (s) {
      if (!s) throw new Error("Please sign in again.");
      var h = headers(true);
      if (method !== "GET") h["Prefer"] = "return=representation";
      return fetch(REST + path, { method: method, headers: h, body: body == null ? undefined : JSON.stringify(body) })
        .then(function (r) {
          return r.text().then(function (t) {
            var d = null; try { d = t ? JSON.parse(t) : null; } catch (e) {}
            if (!r.ok) { var e2 = new Error(pinWords(d) || fallback); e2.raw = d; throw e2; }
            return d;
          });
        });
    });
  }
  /* Postgres raises in developer words. These are for a parent. */
  function pinWords(d) {
    var m = (d && (d.message || d.msg)) || "";
    var lock = /pin locked until (\S+)/.exec(m);
    if (lock) {
      var mins = Math.max(1, Math.ceil((new Date(lock[1]) - Date.now()) / 60000));
      return "Too many wrong tries. The PIN is locked for " + mins + " more minute" + (mins === 1 ? "" : "s") + ".";
    }
    if (/current pin is wrong/.test(m)) return "That's not your current PIN.";
    if (/pin must be 4 digits/.test(m)) return "The PIN is 4 numbers.";
    if (/students_name_len/.test(m)) return "Give the profile a name, 30 letters at most.";
    if (/profile limit: 10 students/.test(m)) return "An account can have up to 10 student profiles.";
    if (/profile limit: 2 parents/.test(m)) return "An account can have up to 2 parent profiles.";
    if (/birthday is in the future|students_birthday_ok/.test(m)) return "Check the birthday. It can't be in the future.";
    if (/students_about_ok/.test(m)) return "That About Me is too long. Shorten an answer and try again.";
    return "";
  }
  /* 2026-09-11, migration 014: a profile row is a STUDENT or the SECOND PARENT
     (kind). The account holder is parent 1 and has no row. */
  /* `theme` is ONE of the eight lesson palettes and colours both the profile
     box and that profile's lessons. */
  var STUDENT_COLS = "id,kind,name,grade,theme,birthday,gender,about,settings,created_at";
  function profileBody(f) {
    return { name: String(f.name || "").trim(), grade: f.grade || null, theme: f.theme || "ocean",
             birthday: f.birthday || null, gender: f.gender || null };
  }
  function students() {
    return rest("GET", "/students?select=" + STUDENT_COLS + "&order=created_at.asc", null, "Could not load profiles.")
      .then(function (rows) {
        rows = rows || [];
        /* A profile deleted on another device must not stay the active one here. */
        var w = who();
        if (w !== "parent" && !rows.some(function (r) { return r.id === w; })) write(WHO_KEY, "parent");
        return rows;
      });
  }
  function addStudent(f) {
    var b = profileBody(f); b.kind = f.kind === "parent" ? "parent" : "student";
    return rest("POST", "/students?select=" + STUDENT_COLS, b,
      "Could not add that profile.").then(function (d) { return d && d[0]; });
  }
  /* kind is never sent on an update: the database refuses a change anyway. */
  function updateStudent(id, f) {
    return rest("PATCH", "/students?id=eq." + encodeURIComponent(id) + "&select=" + STUDENT_COLS, profileBody(f),
      "Could not save that profile.").then(function (d) { return d && d[0]; });
  }
  /* A student's OWN edits (migration 015): only the fields named here are
     sent, so saving an About Me can never touch the parent-only settings. */
  function saveOwn(id, f) {
    var b = {};
    if (f.about) b.about = f.about;
    if (f.theme) b.theme = f.theme;
    if (f.settings) b.settings = f.settings;
    return rest("PATCH", "/students?id=eq." + encodeURIComponent(id) + "&select=" + STUDENT_COLS, b,
      "Could not save that.").then(function (d) { return d && d[0]; });
  }
  /* 🚨 Deleting a profile deletes its progress too (on delete cascade). The
     panel asks twice before calling this. */
  function deleteStudent(id) {
    return rest("DELETE", "/students?id=eq." + encodeURIComponent(id), null, "Could not delete that profile.")
      .then(function () { if (who() === id) write(WHO_KEY, "parent"); return true; });
  }
  /* Each parent has their own PIN (migration 014). `profile` is the second
     parent's row id, or null for the account holder. pinMap() answers which
     parents have one: {owner: true, "<id>": true}. */
  function pinMap() { return rest("POST", "/rpc/pin_map", {}, "Could not check the PIN."); }
  function checkPin(pin, profile) {
    return rest("POST", "/rpc/check_pin", { pin: String(pin || ""), profile: profile || null }, "Could not check the PIN.");
  }
  function setPin(pin, old, profile) {
    return rest("POST", "/rpc/set_pin", { new_pin: String(pin || ""), old_pin: old == null ? null : String(old),
      profile: profile || null }, "Could not save the PIN.");
  }

  function signOut() {
    session = null; drop(SESSION_KEY); drop(WHO_KEY); drop(PICK_KEY); drop("ns:accent"); drop("ns:meicon");
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
      /* ⚠️ ONE AT A TIME, NOT Promise.all. Migration 012 numbers orders with a
         trigger: a free row joins the order its email opened a moment ago. Rows
         written in parallel cannot see each other yet, so one cart would come
         out as several order numbers. */
      return refreshIfNeeded().then(function () {
        var out = [];
        return items.reduce(function (chain, slug) {
          return chain.then(function () {
            return fetch(REST + "/rpc/checkout_free", {
              method: "POST", headers: headers(true),
              body: JSON.stringify({ p_slug: slug, p_email: email })
            }).then(function (r) {
              if (!r.ok) return r.json().then(function (e) {
                throw new Error(e.message || ("Could not check out " + slug));
              });
              return r.json();
            }).then(function (row) { out.push(row); });
          });
        }, Promise.resolve()).then(function () { return out; });
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

  /* ── downloading again (2026-09-10) ───────────────────────────────────────
     Paul: "a link that can confirm it was purchased by this user if they are
     logged in or through their cache if they are not."
     SIGNED IN  -> my_downloads() (migration 008): every paid row that is theirs,
                   including guest purchases made with the same email earlier.
     NOT SIGNED -> what the thank-you page remembered on THIS device.
     🚨 A token is a bearer credential, the same one the receipt email carries.
     Keeping it in localStorage puts it exactly where the buyer's own browser
     already had it; it never leaves the device from here. */
  var OWNED_KEY = "ns:owned";
  function owned() { return read(OWNED_KEY, []); }
  function rememberOwned(rows) {
    var list = owned();
    (rows || []).forEach(function (r) {
      if (!r || !r.product || !r.token) return;
      if (list.some(function (o) { return o.product === r.product && o.token === r.token; })) return;
      /* amount_cents rides along when known, so a FREE item is offered as Open
         (its sheet page) rather than Download (the Worker, which holds only
         paid files). */
      list.push({ product: r.product, title: r.title || r.product, token: r.token,
                  amount_cents: r.amount_cents == null ? null : r.amount_cents });
    });
    write(OWNED_KEY, list);
  }
  function myDownloads() {
    return refreshIfNeeded().then(function (s) {
      if (!s) return [];
      return fetch(REST + "/rpc/my_downloads", { method: "POST", headers: headers(true), body: "{}" })
        .then(function (r) { return r.ok ? r.json() : []; })
        .catch(function () { return []; });
    });
  }

  /* ── ADMIN (2026-09-10, migration 011) ────────────────────────────────────
     Paul: "have buttons to print worksheets myself without paying for them
     ... I can also see things on guest mode and admin mode."
     🚨 THIS ONLY DECIDES WHAT TO SHOW. The role is read from the login token's
     app_metadata, which no browser can write, and every admin POWER is checked
     again on the server: the Worker's /admin-file asks Supabase who the token
     belongs to, and admin database calls go through is_admin(). A console edit
     here shows buttons that then refuse to work.
     ⚠️ A login from before migration 011 carries no role. Sign out and in. */
  var WORKER = "https://nexstudents-media.nexedgetech.workers.dev";
  var VIEW_KEY = "ns:viewas";
  function claims() {
    try {
      var p = session.access_token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
      return JSON.parse(decodeURIComponent(escape(atob(p))));
    } catch (e) { return null; }
  }
  function isAdmin() {
    var c = session && claims();
    return !!(c && c.app_metadata && c.app_metadata.role === "admin");
  }
  function viewAs() { return read(VIEW_KEY, "admin"); }
  function adminMode() { return isAdmin() && viewAs() === "admin"; }
  /* A paid PDF, fetched with the login token and opened in a new tab where the
     browser's own viewer can print or save it. */
  function adminFile(slug) {
    var win = window.open("", "_blank");
    return refreshIfNeeded().then(function (s) {
      if (!s) throw new Error("Sign in again.");
      return fetch(WORKER + "/admin-file?slug=" + encodeURIComponent(slug),
                   { headers: { "Authorization": "Bearer " + s.access_token } });
    }).then(function (r) {
      if (!r.ok) throw new Error("Not available");
      return r.blob();
    }).then(function (b) {
      var u = URL.createObjectURL(b);
      if (win) win.location = u; else location.href = u;
    }).catch(function (e) { if (win) win.close(); throw e; });
  }

  /* The pill: bottom left, on every page that loads this file, for the admin
     only. It flips Admin view and Guest view and links the admin page. */
  function adminPill() {
    if (!isAdmin() || document.getElementById("nsAdminPill")) return;
    var guest = viewAs() !== "admin";
    var d = document.createElement("div");
    d.id = "nsAdminPill";
    d.setAttribute("style", "position:fixed;left:14px;bottom:14px;z-index:900;display:flex;gap:6px;" +
      "font:700 12px/1 Archivo,system-ui,sans-serif;letter-spacing:.06em;text-transform:uppercase");
    var b = "border:0;border-radius:999px;padding:9px 13px;cursor:pointer;";
    d.innerHTML =
      '<button type="button" id="nsAdminFlip" style="' + b + (guest ? "background:#f1f3f5;color:#1b2229" : "background:#c62828;color:#fff") + '">' +
        (guest ? "Guest View" : "Admin View") + '</button>';
    /* ⚠️ The /admin/ help page (look up a parent, reset progress, unlock an
       item) is step 5. Its link joins this pill the day the page exists. */
    document.body.appendChild(d);
    document.getElementById("nsAdminFlip").onclick = function () {
      write(VIEW_KEY, guest ? "admin" : "guest");
      location.reload();
    };
  }
  /* Product pages: Print and Download, paid included, in Admin view. The page
     marks itself with data-slug / data-paid / data-print / data-pdf. */
  function adminBar() {
    var p = document.querySelector(".product[data-slug]");
    if (!p || !adminMode()) return;
    var slug = p.getAttribute("data-slug"), paid = p.getAttribute("data-paid") === "1";
    var bar = document.createElement("div");
    bar.className = "admin-bar";
    bar.innerHTML = '<span>Admin</span>' +
      (paid
        ? '<button type="button" data-a="open">Print or Download</button>'
        : '<a href="' + p.getAttribute("data-print") + '">Print</a>' +
          (p.getAttribute("data-pdf") ? '<a href="' + p.getAttribute("data-pdf") + '" download>Download</a>' : ""));
    var info = p.querySelector(".p-info");
    info.insertBefore(bar, info.firstChild);
    var btn = bar.querySelector('[data-a="open"]');
    if (btn) btn.onclick = function () {
      btn.textContent = "Opening...";
      adminFile(slug).then(function () { btn.textContent = "Print or Download"; })
        .catch(function () { btn.textContent = "Not available. Sign out and back in."; });
    };
  }
  function adminBoot() { adminPill(); adminBar(); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", adminBoot);
  else adminBoot();

  captureFromUrl();

  window.NSAccount = {
    isAdmin: isAdmin, adminMode: adminMode, viewAs: viewAs, adminFile: adminFile,
    owned: owned, rememberOwned: rememberOwned, myDownloads: myDownloads,
    logIn: logIn, signUp: signUp, forgot: forgot, resendConfirm: resendConfirm, newPassword: newPassword, updateProfile: updateProfile, saveMyTheme: saveMyTheme, saveMySettings: saveMySettings, changeEmail: changeEmail,
    isRecovery: function () { return recovery; },
    signOut: signOut, getUser: getUser,
    who: who, setWho: setWho, wantsPicker: wantsPicker, pickerShown: pickerShown,
    students: students, addStudent: addStudent, updateStudent: updateStudent, deleteStudent: deleteStudent, saveOwn: saveOwn,
    pinMap: pinMap, checkPin: checkPin, setPin: setPin,
    isSignedIn: function () { return !!session; },
    cart: cart, cartAdd: cartAdd, cartRemove: cartRemove, cartClear: cartClear,
    cartThumb: cartThumb, cartHref: cartHref,
    priceList: priceList, checkoutFree: checkoutFree, myPurchases: myPurchases
  };
})();
