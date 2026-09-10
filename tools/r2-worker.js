/* r2-worker.js — the public face of the media bucket, and the private door in
   front of the paid files. ROADMAP 27.
   ─────────────────────────────────────────────────────────────────────────
   NOT part of the site build. This file is DEPLOYED TO CLOUDFLARE, once, and
   then left alone. It lives here so it is versioned with the code that writes
   the bucket rather than existing only in a dashboard textarea.

   🚨 WHY A WORKER AND NOT THE r2.dev URL.
   Cloudflare gives every bucket a free pub-<hash>.r2.dev address, and their own
   docs say it is rate-limited, is NOT cached at the edge, and "should only be
   used for development purposes". That is not something to put in front of a
   student mid-lesson. A Worker on the free *.workers.dev subdomain is cached,
   is not rate-limited that way, and costs nothing.

   ⭐ AND IT AVOIDS TOUCHING DNS. Attaching media.nexstudents.org to a bucket
   requires the whole nexstudents.org zone to be hosted at Cloudflare, which
   means moving nameservers off Squarespace. This Worker gives a production-
   grade URL with no DNS change at all. When Paul does want the branded name
   later, it points at this same Worker and only MEDIA_BASE changes.

   ── DEPLOY ───────────────────────────────────────────────────────────────
   Dashboard route (no tooling needed):
     Workers & Pages -> Create -> Worker -> paste this -> Deploy
     Settings -> Bindings -> R2 bucket -> variable name MEDIA, pick the bucket
   The URL is then https://<worker-name>.<account>.workers.dev/
   Set that, with a trailing slash, as MEDIA_BASE when running bake-voice.js.

   ⚠️ THE BINDING MUST BE NAMED `MEDIA`. It is `env.MEDIA` below. A binding
   named anything else returns "Cannot read properties of undefined", which
   reads like a Worker bug and is a two-word fix.

   ── TWO MORE VARS, FOR PAID DOWNLOADS ────────────────────────────────────
     SUPABASE_URL   https://ztoglvzrmkedwmzxxpsq.supabase.co
     SUPABASE_KEY   the PUBLISHABLE key. Not the secret one.
   Settings -> Variables and Secrets -> add both as plain text.
   ⚠️ The publishable key is correct here and is not a shortcut. This Worker
   only ever calls redeem_download(), which is `security definer` and granted to
   anon precisely so an unauthenticated caller can exchange a token it already
   holds. Putting the SECRET key in a Worker would hand the whole database to
   anything that ever finds a bug in this file.
   ───────────────────────────────────────────────────────────────────────── */

/* ── DEPLOYED 2026-09-07, version 393e2800 ────────────────────────────────
   Worker: nexstudents-media · https://nexstudents-media.nexedgetech.workers.dev
   Binding MEDIA -> R2 bucket nexstudents-media (was already correct).
   SUPABASE_URL and SUPABASE_KEY added as Text vars, publishable key.

   Verified live straight after deploying:
     /                                    200  "nexstudents media"
     /paid/us-history-semester-1.pdf      404  <- the guard that matters
     /download?t=garbage                  404  deny text
     /download?t=<well-formed unknown>    404  deny text

   🚨 THE BUCKET IS SERVING NOTHING TODAY, AND THAT IS WORTH KNOWING BEFORE
   ANYONE DEBUGS IT. All 268 lesson mp3s are committed to the repo and served
   by GitHub Pages - live check returns 200 audio/mp3 - and NO built page
   references this workers.dev host at all. bake-voice.js was run without
   MEDIA_BASE, so the audio never moved to R2.
   ⚠️ So this deploy could not break playback: nothing was pointed here. It also
   means the media half of this Worker has never actually been exercised in
   production. Do not assume it works because it deployed.

   ⚠️ THE EDITOR MANGLES A CLIPBOARD PASTE FROM clip.exe. The emoji in these
   comments came through as mojibake ("=fU") because clip.exe converts to the
   Windows codepage. PowerShell Set-Clipboard round-trips UTF-8 intact - use
   that. And Ctrl+A in the dashboard editor selects the PAGE, not the code:
   click into the code, then ctrl+End followed by ctrl+shift+Home.
   ───────────────────────────────────────────────────────────────────────── */

/* ── REDEPLOYED 2026-09-09, version c4329f76 ──────────────────────────────
   The checkout and PayPal routes above went live in this deploy. Verified on
   the real hostname straight after:
     /                                    200
     /paid/animal-cell.pdf                404  <- the guard that matters
     /download?t=garbage                  404
     POST /stripe-webhook  (no signature) 400  <- signature check working
     POST /checkout {"slug":"animal-cell"} returns a real cs_test_ clientSecret

   🚨 DEPLOYED WITH WRANGLER, NOT THE DASHBOARD EDITOR, AND THAT IS NOW THE ONLY
   WAY. The dashboard code editor accepts mouse clicks but ignores synthesised
   keyboard events, so a 700-line paste is impossible to automate there - typing
   a test string produced nothing. Recipe, from a folder OUTSIDE the repo:
     npm i wrangler
     wrangler.json: { name, main, compatibility_date, r2_buckets:[MEDIA],
                      observability:{enabled:true, logs:{enabled:true}} }
     CLOUDFLARE_API_TOKEN=<Edit Cloudflare Workers template token>
     CLOUDFLARE_ACCOUNT_ID=b5e0c3ee9540dbe359de9ee1829128ba
     wrangler deploy --keep-vars
   ⚠️ `--keep-vars` IS NOT OPTIONAL. Without it the deploy wipes every variable
   and secret set in the dashboard.
   ⚠️ AND DECLARE `observability` IN THE CONFIG. The first deploy left it out and
   silently turned Worker logs OFF - the config replaces remote settings whether
   or not you mentioned them. Fixed in c4329f76.

   🚨 DO NOT READ AN API KEY OFF THE STRIPE DASHBOARD'S TEXT. The accessibility
   tree exposes a MASKED rendering of the secret key that looks exactly like a
   real one - right prefix, plausible length - and Stripe answers "Invalid API
   Key provided". That cost a deploy and a confusing 503. Click the copy button
   and read the clipboard instead; the real key was 107 chars, the masked one
   100.

   ── VARS THIS WORKER NOW NEEDS ───────────────────────────────────────────
     SUPABASE_URL · SUPABASE_KEY        as before, publishable key
     STRIPE_SECRET_KEY                  secret
     STRIPE_WEBHOOK_SECRET              secret, from the webhook destination
     PURCHASE_SECRET                    secret, must EQUAL webhook_config.purchase_secret
     PAYPAL_CLIENT_ID · PAYPAL_SECRET   not set yet, PayPal routes 503 until they are
     PAYPAL_API                         sandbox hostname while testing
   ───────────────────────────────────────────────────────────────────────── */

/* 🚨 EVERYTHING UNDER THIS PREFIX IS PAID AND IS NOT PUBLIC.
   The plain media route below refuses it outright. It is reachable only through
   /download?t=<token>, and only after Postgres has confirmed the purchase. */
const PAID = "paid/";

export default {
  /* ── KEEPING SUPABASE AWAKE ────────────────────────────────────────────────
     🚨 A FREE SUPABASE PROJECT PAUSES AFTER ABOUT A WEEK OF INACTIVITY, and a
     paused database means a stranger's login just fails. Pausing is triggered
     by inactivity, not by the tier, so one cheap request resets the clock.

     ⚠️ IT MUST NOT DEPEND ON PAUL BEING HERE. The obvious idea was to ping on a
     Claude session start, but the week that would actually pause the project is
     the week nobody opens a session - a holiday, a busy stretch at work, a new
     baby. A cron trigger runs whether either of us shows up or not.

     ⚠️ RUN IT MORE THAN ONCE A WEEK. On an exactly-seven-day schedule a single
     failed run costs the project. Twice weekly gives a free retry.
     Schedule set in the dashboard: Settings -> Triggers -> Cron. Suggested
     "0 12 * * 1,4" (Mondays and Thursdays, midday UTC).

     ⚠️ It reads the CATALOGUE, not a person's data - `products` has a public
     read policy, so this needs no privileged key and touches nothing private.
     A failure is logged and swallowed: a keep-alive must never throw. */
  async scheduled(event, env, ctx) {
    if (!env.SUPABASE_URL || !env.SUPABASE_KEY) {
      console.error("[keepalive] SUPABASE_URL / SUPABASE_KEY not bound");
      return;
    }
    try {
      const r = await fetch(
        env.SUPABASE_URL + "/rest/v1/products?select=slug&limit=1",
        { headers: { apikey: env.SUPABASE_KEY,
                     Authorization: "Bearer " + env.SUPABASE_KEY } });
      console.log("[keepalive] " + r.status);
    } catch (e) {
      console.error("[keepalive] " + e.message);
    }
  },

  async fetch(request, env) {
    const url = new URL(request.url);

    /* ── THE TWO CHECKOUT ROUTES, AND WHY THEY LIVE HERE ────────────────────
       Paul, 2026-09-09: "I want it embedded into the checkout." Embedded
       Checkout renders Stripe's card form in an iframe ON the worksheet page,
       so the buyer never leaves nexstudents.org. It costs a server, because
       the Checkout Session must be created with a secret key and a secret key
       can never sit in a static page on GitHub Pages.

       ⭐ THIS WORKER IS ALREADY THAT SERVER. It is deployed, it already talks
       to Supabase, and it already guards the paid files. Adding a second host
       to run two endpoints would mean two deploys, two sets of secrets and two
       things to remember. These routes are POST, so they cannot collide with
       an object key, which is always fetched with GET.

       They are matched BEFORE the GET/HEAD guard below, which would otherwise
       405 them. */
    if (url.pathname === "/checkout")      return checkout(request, env);
    if (url.pathname === "/free-receipt")  return freeReceipt(request, env);
    if (url.pathname === "/admin-file")    return adminFile(request, env, url);
    if (url.pathname === "/stripe-webhook") return stripeWebhook(request, env);

    /* ── AND THE SAME TWO THINGS FOR PAYPAL ─────────────────────────────────
       Paul, 2026-09-09: "I think i like the option to just give a choice
       regardless i gotta deal with two different options."

       He is right that the bookkeeping cost is already paid: the PayPal
       business account exists either way. So the buyer picks card or PayPal and
       BOTH land in the same purchases table through record_purchase(). The
       stockroom, the ledger and the thank-you page never learn which one it
       was, which is the whole reason adding this was cheap. */
    if (url.pathname === "/paypal/create")  return paypalCreate(request, env);
    if (url.pathname === "/paypal/capture") return paypalCapture(request, env);

    /* Audio is fetched with GET and probed with HEAD by some browsers. Nothing
       else is ever legitimate here - this bucket is written by bake-voice.js
       over the S3 API, never over this hostname. */
    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response("Method not allowed", { status: 405 });
    }

    if (url.pathname === "/download") return download(url, env, request);

    const key = decodeURIComponent(url.pathname.replace(/^\/+/, ""));
    if (!key) return new Response("nexstudents media\n", { status: 200 });

    /* 🚨 Refuse traversal outright rather than trusting R2 to normalise it.
       R2 keys are opaque strings, so "../" is not special to it - but it is
       special to anything that later mirrors these keys onto a filesystem. */
    if (key.includes("..")) return new Response("Bad request", { status: 400 });

    /* 🚨 THE LINE THAT MAKES THE BUCKET SAFE TO SHARE. Without it the paid
       files sit at a guessable public URL on this very Worker and every gate
       below is decoration. 404, not 403 - a 403 confirms the key exists. */
    if (key.startsWith(PAID)) return new Response("Not found", { status: 404 });

    const obj = await env.MEDIA.get(key);
    if (!obj) return new Response("Not found", { status: 404 });

    const headers = new Headers();
    obj.writeHttpMetadata(headers);
    headers.set("etag", obj.httpEtag);

    /* 🚨 IMMUTABLE, AND THAT IS CORRECT HERE, NOT JUST CONVENIENT.
       A clip's key encodes its lesson, track and sentence position, and its
       content is pinned by the sentence hash in voice.json. Editing a lesson
       produces a NEW clip, never a changed one - the same reason the service
       worker is allowed to cache audio hard while HTML must always come from
       the network. See the service-worker rule in ROADMAP.md item 27. */
    headers.set("cache-control", "public, max-age=31536000, immutable");

    /* The site is served from nexstudents.org and the audio from here, so this
       is a cross-origin request. Without CORS the browser blocks it and the
       lesson silently falls back to a device voice - which looks like "the bake
       didn't work" rather than a header problem. */
    headers.set("access-control-allow-origin", "*");

    return new Response(request.method === "HEAD" ? null : obj.body, { headers });
  },
};

/* ── /download?t=<token> ────────────────────────────────────────────────────
   Paul, 2026-09-06: "what we can do is send them a confirmation and the file
   downloads off the site." So the email carries a link, never a file, and this
   is what the link resolves to.

   🚨 THE WORKER DECIDES NOTHING. It asks Postgres, which owns the answer. This
   file can be redeployed by anyone with the dashboard; the purchase table
   cannot be talked into a different reply. */
async function download(url, env, request) {
  const token = (url.searchParams.get("t") || "").trim();

  /* Shape-check before spending a round trip. A uuid is the only thing
     access_token can be, so anything else is a scan, not a customer. */
  if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(token)) {
    return deny();
  }
  if (!env.SUPABASE_URL || !env.SUPABASE_KEY) {
    /* ⚠️ Half-configured must FAIL CLOSED. A missing variable here with a
       permissive fallback would serve every paid file to everyone. */
    console.error("[download] SUPABASE_URL / SUPABASE_KEY not bound");
    return new Response("Downloads are temporarily unavailable.", { status: 503 });
  }

  let rows;
  try {
    const r = await fetch(env.SUPABASE_URL + "/rest/v1/rpc/redeem_download", {
      method: "POST",
      headers: {
        "apikey": env.SUPABASE_KEY,
        "Authorization": "Bearer " + env.SUPABASE_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ p_token: token }),
    });
    if (!r.ok) throw new Error("rpc " + r.status);
    rows = await r.json();
  } catch (e) {
    /* ⚠️ An outage is a 503, never a 404. Telling a paying customer their link
       is invalid when the database is simply down is the worse of the two. */
    console.error("[download] " + e.message);
    return new Response("Downloads are temporarily unavailable.", { status: 503 });
  }

  if (!Array.isArray(rows) || !rows.length) return deny();

  const slug = String(rows[0].product || "");
  /* The slug came from our own database, but it is about to become an object
     key, so it is checked anyway. Defence in depth costs one line. */
  if (!/^[a-z0-9-]+$/.test(slug)) return deny();

  const obj = await env.MEDIA.get(PAID + slug + ".pdf");
  if (!obj) {
    /* 🚨 A VALID PURCHASE WITH NO FILE IS OUR BUG, NOT THEIRS. It must not
       render as "invalid link" or the customer is told they did not buy the
       thing they bought. Log it loudly and say so honestly. */
    console.error("[download] paid object missing for " + slug);
    return new Response(
      "Your purchase is valid but the file is not ready yet. " +
      "Email support@nexedgestudios.com and we will send it straight over.",
      { status: 503, headers: { "content-type": "text/plain; charset=utf-8" } }
    );
  }

  const filename = slug + ".pdf";
  const headers = new Headers();
  obj.writeHttpMetadata(headers);
  headers.set("content-type", "application/pdf");
  headers.set("content-disposition", 'attachment; filename="' + filename + '"');

  /* 🚨 NEVER CACHE THIS. The public media above is immutable and cached for a
     year; this response is personal to one token. `private, no-store` keeps it
     out of the Cloudflare edge, out of any proxy, and out of the browser's
     disk cache. Copying the cache-control line from above would put a paid
     file in a shared cache keyed on a URL. */
  headers.set("cache-control", "private, no-store");
  headers.set("access-control-allow-origin", "https://nexstudents.org");

  return new Response(request.method === "HEAD" ? null : obj.body, { headers });
}

/* One reply for every failure mode: bad token, unknown token, bad slug. Telling
   the difference apart is exactly what a scanner wants. */
function deny() {
  return new Response(
    "This download link is not valid. If you bought this, sign in at " +
    "https://nexstudents.org/account/ with the email you used and it will be there.",
    { status: 404, headers: { "content-type": "text/plain; charset=utf-8" } }
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   EMBEDDED CHECKOUT
   Added 2026-09-09. Paul: "I want it embedded into the checkout."
   ══════════════════════════════════════════════════════════════════════════ */

/* The only origin allowed to start a checkout. A wildcard here would let any
   site mount our payment form and bill our account for the Stripe fees. */
const SITE = "https://nexstudents.org";

function cors(extra) {
  const h = new Headers(extra || {});
  h.set("access-control-allow-origin", SITE);
  h.set("access-control-allow-methods", "POST, OPTIONS");
  h.set("access-control-allow-headers", "content-type");
  h.set("vary", "origin");
  return h;
}

function jsonOut(obj, status) {
  return new Response(JSON.stringify(obj),
    { status: status || 200, headers: cors({ "content-type": "application/json" }) });
}

/* ── POST /checkout  {slug} -> {clientSecret} ───────────────────────────────
   🚨 THE PRICE IS READ FROM POSTGRES, NEVER FROM THE REQUEST. This is the same
   rule checkout_free() enforces, and for the same reason: the browser may ask
   for any slug it likes, but what that slug costs is not the browser's to say.
   A client-supplied amount is how a $14 bundle gets bought for one cent.

   ⚠️ It also refuses anything FREE. A zero-price item has its own path through
   checkout_free(), which records the download without touching Stripe. Sending
   a free item here would create a Stripe session for $0, which Stripe rejects
   anyway - its one-time minimum is 50 cents. Fail with a clear reason instead
   of passing a doomed request to Stripe. */
async function checkout(request, env) {
  if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: cors() });
  if (request.method !== "POST") return jsonOut({ error: "Method not allowed" }, 405);

  if (!env.STRIPE_SECRET_KEY || !env.SUPABASE_URL || !env.SUPABASE_KEY) {
    console.error("[checkout] not configured");
    return jsonOut({ error: "Checkout is temporarily unavailable." }, 503);
  }

  /* 🛒 A CART, NOT ONE SHEET (ROADMAP 37, 2026-09-10). The body is
     {slugs:[...], email} from /cart/. {slug} alone is still accepted, so a page
     cached from before the change cannot break. */
  let slugs, email;
  try {
    const body = await request.json();
    slugs = Array.isArray(body && body.slugs) ? body.slugs : [body && body.slug];
    slugs = [...new Set(slugs.map((s) => String(s || "").trim()))];
    email = String((body && body.email) || "").trim();
  } catch (e) {
    return jsonOut({ error: "Bad request" }, 400);
  }
  /* ⚠️ TWENTY IS A CEILING FOR STRIPE METADATA, not a shop rule. Every slug and
     price rides in one 500-character metadata value, below. */
  if (!slugs.length || slugs.length > 20 || !slugs.every((s) => /^[a-z0-9-]{1,80}$/.test(s))) {
    return jsonOut({ error: "Bad request" }, 400);
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) email = "";

  /* The catalogue is publicly readable, so the publishable key is right here.
     Nothing secret is being fetched - this is the shop window. */
  let products;
  try {
    const r = await fetch(env.SUPABASE_URL + "/rest/v1/products?slug=in.(" +
                          slugs.map(encodeURIComponent).join(",") + ")&select=slug,title,price_cents,active",
      { headers: { apikey: env.SUPABASE_KEY, Authorization: "Bearer " + env.SUPABASE_KEY } });
    if (!r.ok) throw new Error("products " + r.status);
    products = await r.json();
  } catch (e) {
    console.error("[checkout] " + e.message);
    return jsonOut({ error: "Checkout is temporarily unavailable." }, 503);
  }

  /* 🚨 EVERY SLUG MUST BE A LIVE, PAID PRODUCT, or nothing is charged. A cart
     that quietly dropped the one bad item would take money for a different
     order than the buyer saw. Free items go through checkout_free() from the
     cart BEFORE this is called, so one arriving here is a bug. */
  const bySlug = Object.fromEntries((products || []).map((p) => [p.slug, p]));
  for (const s of slugs) {
    const p = bySlug[s];
    if (!p || p.active === false) return jsonOut({ error: "No such product: " + s }, 404);
    if (!(p.price_cents > 0)) return jsonOut({ error: "This item is free. Use the free checkout." }, 400);
  }

  /* ⚠️ ui_mode `embedded_page` is the current name. Accounts pinned to an older
     API version want the earlier value `embedded` - if Stripe answers with
     "invalid value for ui_mode", that rename is the reason, and it is a one
     word fix here. */
  const form = new URLSearchParams();
  form.set("ui_mode", "embedded_page");
  form.set("mode", "payment");
  slugs.forEach((s, i) => {
    const p = bySlug[s];
    form.set(`line_items[${i}][quantity]`, "1");
    form.set(`line_items[${i}][price_data][currency]`, "usd");
    form.set(`line_items[${i}][price_data][unit_amount]`, String(p.price_cents));
    form.set(`line_items[${i}][price_data][product_data][name]`, p.title || s);
  });
  /* `n` tells the thank-you page how many rows to wait for. The webhook writes
     them one at a time, and the page must not show one of two and stop. */
  form.set("return_url", SITE + "/thank-you/?n=" + slugs.length + "&session_id={CHECKOUT_SESSION_ID}");
  /* The address typed in the cart, so the buyer does not type it twice. */
  if (email) form.set("customer_email", email);
  /* 🚨 WHAT WAS BOUGHT MUST RIDE ON THE SESSION. The webhook receives a session,
     not a shopping cart. `items` is "slug:cents,slug:cents": the PRICE travels
     too, so each purchase row records what that sheet cost rather than the
     whole bill. Stripe caps a metadata value at 500 characters. */
  const items = slugs.map((s) => s + ":" + bySlug[s].price_cents).join(",");
  if (items.length > 500) return jsonOut({ error: "Too many items for one checkout" }, 400);
  form.set("metadata[items]", items);

  let session;
  try {
    const r = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + env.STRIPE_SECRET_KEY,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: form.toString(),
    });
    session = await r.json();
    if (!r.ok) throw new Error((session.error && session.error.message) || ("stripe " + r.status));
  } catch (e) {
    console.error("[checkout] " + e.message);
    return jsonOut({ error: "Checkout is temporarily unavailable." }, 503);
  }

  return jsonOut({ clientSecret: session.client_secret });
}

/* ── POST /stripe-webhook ───────────────────────────────────────────────────
   🚨 THIS IS THE ONLY THING THAT MAY CREATE A PURCHASE, and the signature check
   below is the whole reason it can be trusted. Without it this endpoint is an
   open door that grants anyone any product: it is a public URL that writes to
   the purchases table.

   ⚠️ FULFILL FROM THE WEBHOOK, NOT FROM THE RETURN PAGE. Stripe's own guidance,
   and it matters here: the buyer can close the tab the instant the card clears
   and never load the thank-you page. The webhook still arrives.

   ⚠️ ALWAYS ANSWER 200 ONCE THE SIGNATURE IS VALID, even for an event we ignore.
   A non-2xx makes Stripe retry for days and eventually disable the endpoint. */
async function stripeWebhook(request, env) {
  if (request.method !== "POST") return new Response("Method not allowed", { status: 405 });

  if (!env.STRIPE_WEBHOOK_SECRET || !env.SUPABASE_URL || !env.SUPABASE_KEY ||
      !env.PURCHASE_SECRET) {
    console.error("[webhook] not configured");
    return new Response("not configured", { status: 503 });
  }

  /* The raw text, byte for byte. Parsing first and re-serialising would change
     key order and whitespace, and the signature is over the exact bytes. */
  const raw = await request.text();
  const sig = request.headers.get("stripe-signature") || "";

  if (!(await verifyStripeSignature(raw, sig, env.STRIPE_WEBHOOK_SECRET))) {
    console.error("[webhook] bad signature");
    return new Response("bad signature", { status: 400 });
  }

  let event;
  try { event = JSON.parse(raw); } catch (e) { return new Response("bad json", { status: 400 }); }

  if (event.type !== "checkout.session.completed") {
    return new Response("ignored", { status: 200 });
  }

  const s = event.data && event.data.object ? event.data.object : {};
  /* `payment_status` is the field that means money actually moved. A completed
     session with an async payment method can still be `unpaid`. */
  if (s.payment_status !== "paid") return new Response("not paid yet", { status: 200 });

  /* 🛒 ONE ROW PER ITEM. `items` is "slug:cents,..." from a cart checkout;
     a session started before 2026-09-10 carries only `slug`, and its one row
     costs the whole session total. Both are read so neither can be orphaned. */
  const md = s.metadata || {};
  let items;
  if (md.items) {
    items = String(md.items).split(",").map((pair) => {
      const i = pair.lastIndexOf(":");
      return { slug: pair.slice(0, i), cents: Number(pair.slice(i + 1)) };
    });
  } else {
    items = [{ slug: String(md.slug || ""), cents: Number(s.amount_total || 0) }];
  }
  const email = String(s.customer_details && s.customer_details.email || "");
  if (!email || !items.length ||
      !items.every((it) => /^[a-z0-9-]{1,80}$/.test(it.slug) && Number.isFinite(it.cents))) {
    console.error("[webhook] missing items or email on " + s.id);
    return new Response("nothing to record", { status: 200 });
  }

  const tokens = {};
  try {
    /* ⚠️ ONE AT A TIME, IN ORDER. If the second fails, the 500 below makes Stripe
       replay the WHOLE session, and record_purchase hands back the first row's
       existing token instead of granting it twice. */
    for (const it of items) {
      const r = await fetch(env.SUPABASE_URL + "/rest/v1/rpc/record_purchase", {
        method: "POST",
        headers: {
          apikey: env.SUPABASE_KEY,
          Authorization: "Bearer " + env.SUPABASE_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          p_secret: env.PURCHASE_SECRET,
          p_slug: it.slug,
          p_email: email,
          p_session: String(s.id || ""),
          p_amount: it.cents,
        }),
      });
      if (!r.ok) throw new Error("rpc " + it.slug + " " + r.status + " " + (await r.text()).slice(0, 200));
      /* record_purchase returns the access token as a bare JSON string. */
      try { tokens[it.slug] = String(await r.json()); } catch (e) { /* receipt goes without that link */ }
    }
  } catch (e) {
    /* 🚨 A 500 HERE IS CORRECT AND IS NOT A BUG. The money is taken but the
       purchase is unrecorded, so we WANT Stripe to retry. record_purchase is
       idempotent on (session, product) since migration 007, so a retry cannot
       double-grant. */
    console.error("[webhook] " + e.message);
    return new Response("retry please", { status: 500 });
  }

  /* 📧 THE RECEIPT (ROADMAP 39). Sent only AFTER every row is recorded, and
     🚨 NEVER ALLOWED TO FAIL THE WEBHOOK: the purchase is already safe, and a
     500 here would make Stripe replay a finished order. Logged and dropped. */
  try {
    await sendReceipt(env, {
      email, session: String(s.id || ""), items, tokens,
      worker: new URL(request.url).origin,
    });
  } catch (e) {
    console.error("[receipt] " + e.message);
  }

  return new Response("ok", { status: 200 });
}

/* ── THE RECEIPT EMAIL, VIA RESEND ──────────────────────────────────────────
   Paul, 2026-09-09: "send them a confirmation and the file downloads off the
   site." 🚨 EMAIL IS THE RECEIPT, NEVER THE DELIVERY. The download already
   appeared on the thank-you page; the links here are a convenience that point
   back at THIS Worker, so the file still only ever comes from us.
   ⚠️ FROM onboarding@resend.dev UNTIL THE DOMAIN IS VERIFIED. Resend's test
   sender delivers to the account owner's own address and refuses the rest.
   nexstudents.org was added to Resend on 2026-09-10 (DKIM resend._domainkey,
   CNAMEs send + rsend at Squarespace). Once it shows Verified, the Worker
   secret RECEIPT_FROM = "NexStudents <receipts@nexstudents.org>"; no code
   change. Squarespace's Email Security preset (spf -all, DMARC p=reject,
   strict) STAYS: Resend's DKIM signs as nexstudents.org, which aligns.
   ⚠️ Idempotency-Key is the Stripe session, so a replayed webhook cannot send a
   second copy (Resend holds the key for 24 hours).
   🚨 NO EM DASHES IN THE COPY. Paul: "it's very easy to tell that it's AI." */
/* ── POST /free-receipt  {ids, email} ──────────────────────────────────────
   The cart calls this after checkout_free() succeeds, with the purchase ids it
   got back. 🚨 THE WORKER DOES NOT DECIDE WHETHER TO SEND. claim_free_receipt()
   (migration 009) returns rows only for those ids, that email, free, placed in
   the last 15 minutes, and never receipted - and marks them as it returns. So
   this route cannot be used to mail a stranger, or to mail anyone twice.
   ⚠️ Always answers 200 {ok:true}. The page has already shown the sheets, and
   whether an email went out tells a caller nothing they are owed. */
async function freeReceipt(request, env) {
  if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: cors() });
  if (request.method !== "POST") return jsonOut({ error: "Method not allowed" }, 405);
  let ids, email;
  try {
    const b = await request.json();
    ids = (Array.isArray(b && b.ids) ? b.ids : []).map(String)
      .filter((x) => /^[0-9a-f-]{36}$/i.test(x)).slice(0, 20);
    email = String((b && b.email) || "").trim();
  } catch (e) { return jsonOut({ ok: true }); }
  if (!ids.length || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return jsonOut({ ok: true });

  try {
    const r = await fetch(env.SUPABASE_URL + "/rest/v1/rpc/claim_free_receipt", {
      method: "POST",
      headers: { apikey: env.SUPABASE_KEY, Authorization: "Bearer " + env.SUPABASE_KEY,
                 "Content-Type": "application/json" },
      body: JSON.stringify({ p_ids: ids, p_email: email }),
    });
    const rows = r.ok ? await r.json() : [];
    if (Array.isArray(rows) && rows.length) {
      await sendReceipt(env, {
        email, free: true, session: "free-" + ids.slice().sort().join("-").slice(0, 60),
        items: rows.map((x) => ({ slug: x.product, cents: 0 })),
        tokens: Object.fromEntries(rows.filter((x) => x.token).map((x) => [x.product, String(x.token)])),
        titles: Object.fromEntries(rows.map((x) => [x.product, x.title])),
        worker: new URL(request.url).origin,
      });
    }
  } catch (e) {
    console.error("[free-receipt] " + e.message);
  }
  return jsonOut({ ok: true });
}

/* ── GET /admin-file?slug=  (Authorization: Bearer <login token>) ──────────
   Paul, 2026-09-10: "have buttons to print worksheets myself without paying
   for them." A paid PDF for the ADMIN only.
   🚨 THE WORKER DOES NOT TRUST THE TOKEN'S OWN CLAIM. It hands the token to
   Supabase's /auth/v1/user, which validates it and returns the real user, and
   only then reads app_metadata.role (set by migration 011, writable by no
   browser). Anything else is a 404, the same answer as a bad download token.
   ⚠️ private, no-store: the file must never sit in a shared cache. */
async function adminFile(request, env, url) {
  /* ⚠️ Set AFTER cors(): it writes its own POST-only methods and headers over
     anything passed in, which would fail the browser's preflight here. */
  const h = cors();
  h.set("access-control-allow-headers", "content-type, authorization");
  h.set("access-control-allow-methods", "GET, OPTIONS");
  if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: h });
  const slug = String(url.searchParams.get("slug") || "");
  const auth = request.headers.get("authorization") || "";
  if (!/^[a-z0-9-]{1,80}$/.test(slug) || !/^Bearer\s+\S+/.test(auth)) return new Response("Not found", { status: 404, headers: h });
  let user = null;
  try {
    const r = await fetch(env.SUPABASE_URL + "/auth/v1/user", { headers: { apikey: env.SUPABASE_KEY, Authorization: auth } });
    if (r.ok) user = await r.json();
  } catch (e) { /* treated as not admin */ }
  if (!user || !user.app_metadata || user.app_metadata.role !== "admin") {
    return new Response("Not found", { status: 404, headers: h });
  }
  const obj = await env.MEDIA.get(PAID + slug + ".pdf");
  if (!obj) return new Response("Not found", { status: 404, headers: h });
  h.set("content-type", "application/pdf");
  h.set("cache-control", "private, no-store");
  h.set("content-disposition", 'inline; filename="' + slug + '.pdf"');
  return new Response(obj.body, { status: 200, headers: h });
}

async function sendReceipt(env, o) {
  if (!env.RESEND_API_KEY) { console.error("[receipt] RESEND_API_KEY not set"); return; }

  /* Titles come from the catalogue, the same place the price did. A free
     receipt already has them from claim_free_receipt(). */
  let titles = o.titles || {};
  if (!o.titles) try {
    const r = await fetch(env.SUPABASE_URL + "/rest/v1/products?slug=in.(" +
      o.items.map((it) => encodeURIComponent(it.slug)).join(",") + ")&select=slug,title",
      { headers: { apikey: env.SUPABASE_KEY, Authorization: "Bearer " + env.SUPABASE_KEY } });
    if (r.ok) for (const p of await r.json()) titles[p.slug] = p.title;
  } catch (e) { /* fall back to the slug below */ }

  const esc = (x) => String(x).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const money = (c) => "$" + (Number(c || 0) / 100).toFixed(2);
  const total = o.items.reduce((n, it) => n + Number(it.cents || 0), 0);
  const ref = o.session.slice(-8).toUpperCase();

  const rows = o.items.map((it) => {
    const name = esc(titles[it.slug] || it.slug);
    return `<tr><td style="padding:12px 0;border-bottom:1px solid #e3e7ec">${name}</td>
      <td style="padding:12px 0;border-bottom:1px solid #e3e7ec;text-align:right;vertical-align:top">${money(it.cents)}</td></tr>`;
  }).join("");

  /* 🔗 ONE BUTTON, BACK TO THE SITE. Paul, 2026-09-10: "instead of delivering
     to the email it can just forward them to the page to download their item
     again." /order/ lists the order with Open or Download buttons, so the file
     still only ever comes from nexstudents.org. Tokens are the same bearer
     links the thank-you page uses, one per item. */
  const toks = o.items.map((it) => o.tokens[it.slug]).filter(Boolean);
  const orderUrl = toks.length ? `${SITE}/order/?t=${toks.map(encodeURIComponent).join(",")}` : `${SITE}/account/`;
  const button = `<p style="margin:22px 0 0"><a href="${orderUrl}" style="display:inline-block;background:#1b2229;color:#ffffff;text-decoration:none;font-weight:bold;padding:12px 22px;border-radius:6px">View Your Order</a></p>`;

  const html = `<div style="font-family:Arial,Helvetica,sans-serif;max-width:520px;margin:0 auto;color:#1b2229">
  <h1 style="font-size:22px;margin:0 0 6px">Thank you for your order.</h1>
  <p style="margin:0 0 20px;color:#5d6874">Order ${esc(ref)}</p>
  <table style="width:100%;border-collapse:collapse;font-size:15px">${rows}
    <tr><td style="padding:14px 0;font-weight:bold">Total</td>
      <td style="padding:14px 0;font-weight:bold;text-align:right">${money(total)}</td></tr>
  </table>
  ${button}
  <p style="font-size:14px;line-height:1.6;color:#5d6874;margin:20px 0 0">That button opens your order on nexstudents.org, where you can ${o.free ? "open" : "download"} ${o.items.length > 1 ? "your items" : "it"} again any time. You can also sign in at <a href="${SITE}/account/" style="color:#1b2229">nexstudents.org</a> with this email to see everything you have.</p>
  <p style="font-size:14px;line-height:1.6;color:#5d6874;margin:12px 0 0">Questions? Reach us through the <a href="${SITE}/contact/" style="color:#1b2229">contact page</a>.</p>
</div>`;

  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + env.RESEND_API_KEY,
      "Content-Type": "application/json",
      "Idempotency-Key": "receipt-" + o.session,
    },
    body: JSON.stringify({
      from: env.RECEIPT_FROM || "NexStudents <onboarding@resend.dev>",
      /* The sending address has no mailbox. A buyer who presses Reply reaches
         a person at the support address instead. Paul, 2026-09-10. */
      reply_to: env.RECEIPT_REPLY_TO || "support@nexedgestudios.com",
      to: [o.email],
      /* 🚨 ONE SUBJECT PER ORDER. Every receipt used to say "Your NexStudents
         receipt", so Gmail stacked the second one INSIDE the first thread and
         Paul reported it missing (2026-09-10). The order number makes each
         subject unique, and X-Entity-Ref-ID is the header Gmail honours to
         keep otherwise-alike messages out of one conversation. */
      subject: "Your NexStudents receipt, order " + ref,
      headers: { "X-Entity-Ref-ID": o.session },
      html,
    }),
  });
  if (!r.ok) throw new Error("resend " + r.status + " " + (await r.text()).slice(0, 200));
}

/* Stripe signs `<timestamp>.<raw body>` with HMAC-SHA256 and sends it as
   `t=<ts>,v1=<hex>`. There is no Stripe SDK in a Worker, so this is done with
   Web Crypto directly - it is about twenty lines and no dependency. */
async function verifyStripeSignature(raw, header, secret) {
  const parts = {};
  for (const bit of header.split(",")) {
    const i = bit.indexOf("=");
    if (i > 0) {
      const k = bit.slice(0, i).trim();
      /* v1 can legitimately appear more than once while a secret is being
         rotated. Keep the first; any one matching is a valid signature. */
      if (!(k in parts)) parts[k] = bit.slice(i + 1).trim();
    }
  }
  const ts = parts.t, given = parts.v1;
  if (!ts || !given) return false;

  /* ⚠️ REPLAY WINDOW. Without it a captured webhook body stays valid forever,
     and re-sending it would re-grant the product. Five minutes is Stripe's own
     default tolerance. */
  const age = Math.abs(Math.floor(Date.now() / 1000) - Number(ts));
  if (!Number.isFinite(age) || age > 300) return false;

  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw", enc.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const mac = await crypto.subtle.sign("HMAC", key, enc.encode(ts + "." + raw));
  const hex = [...new Uint8Array(mac)].map((b) => b.toString(16).padStart(2, "0")).join("");

  /* Constant time. A plain === leaks how much of the signature was right, one
     byte at a time, which is enough to forge one given enough attempts. */
  if (hex.length !== given.length) return false;
  let diff = 0;
  for (let i = 0; i < hex.length; i++) diff |= hex.charCodeAt(i) ^ given.charCodeAt(i);
  return diff === 0;
}

/* ══════════════════════════════════════════════════════════════════════════
   PAYPAL
   Added 2026-09-09, beside Stripe rather than instead of it.

   🚨 WHY THERE IS NO PAYPAL WEBHOOK HERE, AND WHY THAT IS NOT A SHORTCUT.
   The Stripe flow needs one because Stripe tells us about the payment out of
   band. PayPal's does not: THIS WORKER performs the capture itself and reads
   the result in the reply. There is no second party to wait for and nothing to
   verify a signature against, because we made the call.
   ⚠️ The one case it does not cover is a buyer who approves in the popup and
   then closes the tab before the capture fires. PayPal voids an uncaptured
   authorisation on its own, so no money is taken and nothing is owed. If that
   ever needs catching, a webhook on PAYMENT.CAPTURE.COMPLETED is the fix.
   ══════════════════════════════════════════════════════════════════════════ */

/* Live and sandbox are different hostnames. PAYPAL_API is set in the Worker so
   sandbox testing never needs a code change:
     sandbox  https://api-m.sandbox.paypal.com
     live     https://api-m.paypal.com */
function paypalBase(env) {
  return (env.PAYPAL_API || "https://api-m.paypal.com").replace(/\/+$/, "");
}

/* ⚠️ A fresh token per request. PayPal's tokens last hours and could be cached,
   but a Worker isolate is not a safe place to keep one - it may be reused
   across requests or destroyed between them with no warning. The extra call is
   cheaper than the class of bug where a stale token starts failing checkouts. */
async function paypalToken(env) {
  const auth = btoa(env.PAYPAL_CLIENT_ID + ":" + env.PAYPAL_SECRET);
  const r = await fetch(paypalBase(env) + "/v1/oauth2/token", {
    method: "POST",
    headers: {
      Authorization: "Basic " + auth,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });
  const d = await r.json();
  if (!r.ok || !d.access_token) throw new Error("paypal auth " + r.status);
  return d.access_token;
}

/* The catalogue lookup both PayPal routes need. Same rule as /checkout: the
   price comes from Postgres, never from the browser. */
async function paidProduct(env, slug) {
  const r = await fetch(env.SUPABASE_URL + "/rest/v1/products?slug=eq." +
                        encodeURIComponent(slug) + "&select=slug,title,price_cents,active",
    { headers: { apikey: env.SUPABASE_KEY, Authorization: "Bearer " + env.SUPABASE_KEY } });
  if (!r.ok) throw new Error("products " + r.status);
  const rows = await r.json();
  const p = Array.isArray(rows) && rows.length ? rows[0] : null;
  if (!p || p.active === false || !(p.price_cents > 0)) return null;
  return p;
}

function paypalReady(env) {
  return env.PAYPAL_CLIENT_ID && env.PAYPAL_SECRET &&
         env.SUPABASE_URL && env.SUPABASE_KEY && env.PURCHASE_SECRET;
}

/* ── POST /paypal/create  {slug} -> {id} ────────────────────────────────────
   Creates the order. The buyer approves it in PayPal's popup, over our page. */
async function paypalCreate(request, env) {
  if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: cors() });
  if (request.method !== "POST") return jsonOut({ error: "Method not allowed" }, 405);
  if (!paypalReady(env)) {
    console.error("[paypal] not configured");
    return jsonOut({ error: "PayPal is temporarily unavailable." }, 503);
  }

  let slug;
  try {
    const body = await request.json();
    slug = String((body && body.slug) || "").trim();
  } catch (e) { return jsonOut({ error: "Bad request" }, 400); }
  if (!/^[a-z0-9-]{1,80}$/.test(slug)) return jsonOut({ error: "Bad request" }, 400);

  try {
    const product = await paidProduct(env, slug);
    if (!product) return jsonOut({ error: "No such product" }, 404);

    const token = await paypalToken(env);
    const r = await fetch(paypalBase(env) + "/v2/checkout/orders", {
      method: "POST",
      headers: { Authorization: "Bearer " + token, "Content-Type": "application/json" },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [{
          /* 🚨 THE SLUG RIDES ALONG, same reason as the Stripe metadata: the
             capture below must know what was bought without trusting the
             browser to tell it a second time. */
          custom_id: slug,
          description: (product.title || slug).slice(0, 127),
          amount: {
            currency_code: "USD",
            /* PayPal wants a decimal string, not cents. */
            value: (product.price_cents / 100).toFixed(2),
          },
        }],
        application_context: {
          brand_name: "NexStudents",
          shipping_preference: "NO_SHIPPING",
          user_action: "PAY_NOW",
        },
      }),
    });
    const d = await r.json();
    if (!r.ok || !d.id) throw new Error("paypal create " + r.status);
    return jsonOut({ id: d.id });
  } catch (e) {
    console.error("[paypal] " + e.message);
    return jsonOut({ error: "PayPal is temporarily unavailable." }, 503);
  }
}

/* ── POST /paypal/capture  {orderID} -> {ok, token} ─────────────────────────
   🚨 THE AMOUNT IS RE-READ FROM PAYPAL'S OWN REPLY, NOT FROM THE BROWSER, and
   the slug comes from custom_id, which only we ever set. The browser hands us
   an order id and nothing else that is trusted. */
async function paypalCapture(request, env) {
  if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: cors() });
  if (request.method !== "POST") return jsonOut({ error: "Method not allowed" }, 405);
  if (!paypalReady(env)) return jsonOut({ error: "PayPal is temporarily unavailable." }, 503);

  let orderID;
  try {
    const body = await request.json();
    orderID = String((body && body.orderID) || "").trim();
  } catch (e) { return jsonOut({ error: "Bad request" }, 400); }
  if (!/^[A-Z0-9]{5,40}$/i.test(orderID)) return jsonOut({ error: "Bad request" }, 400);

  let cap;
  try {
    const token = await paypalToken(env);
    const r = await fetch(paypalBase(env) + "/v2/checkout/orders/" + orderID + "/capture", {
      method: "POST",
      headers: { Authorization: "Bearer " + token, "Content-Type": "application/json" },
    });
    cap = await r.json();
    /* ⚠️ 422 with ORDER_ALREADY_CAPTURED is a DOUBLE CLICK, not a failure. The
       purchase is real and record_purchase is idempotent, so fall through and
       let the lookup below find it rather than telling a paying customer no. */
    if (!r.ok && !(cap && JSON.stringify(cap).indexOf("ORDER_ALREADY_CAPTURED") >= 0)) {
      throw new Error("paypal capture " + r.status);
    }
  } catch (e) {
    console.error("[paypal] " + e.message);
    return jsonOut({ error: "We could not complete that payment." }, 502);
  }

  if (cap.status && cap.status !== "COMPLETED") {
    return jsonOut({ error: "Payment not completed." }, 402);
  }

  const unit  = (cap.purchase_units && cap.purchase_units[0]) || {};
  const capt  = (unit.payments && unit.payments.captures && unit.payments.captures[0]) || {};
  const slug  = String(unit.custom_id || capt.custom_id || "");
  const email = String((cap.payer && cap.payer.email_address) || "");
  const cents = Math.round(Number((capt.amount && capt.amount.value) || 0) * 100);

  if (!/^[a-z0-9-]{1,80}$/.test(slug) || !email) {
    console.error("[paypal] captured but missing slug or email on " + orderID);
    return jsonOut({ error: "Payment taken but we could not file it. Email support@nexedgestudios.com." }, 500);
  }

  try {
    const r = await fetch(env.SUPABASE_URL + "/rest/v1/rpc/record_purchase", {
      method: "POST",
      headers: {
        apikey: env.SUPABASE_KEY,
        Authorization: "Bearer " + env.SUPABASE_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        p_secret: env.PURCHASE_SECRET,
        p_slug: slug,
        p_email: email,
        /* 🚨 PREFIXED so a PayPal id can never collide with a Stripe session id
           in the same unique column, and so the ledger says which processor
           took the money without needing a second field. */
        p_session: "paypal_" + (capt.id || orderID),
        p_amount: cents,
      }),
    });
    if (!r.ok) throw new Error("rpc " + r.status + " " + (await r.text()).slice(0, 200));
    const token = await r.json();
    /* The token IS the download. Handing it straight back means PayPal buyers
       never wait on a webhook the way card buyers briefly do. */
    return jsonOut({ ok: true, token: token });
  } catch (e) {
    /* 🚨 THE MONEY IS TAKEN. Never imply otherwise. */
    console.error("[paypal] captured but rpc failed: " + e.message);
    return jsonOut({
      ok: true, token: null,
      error: "Your payment went through. The download is still being prepared - " +
             "sign in at nexstudents.org/account/ with your PayPal email.",
    }, 200);
  }
}
