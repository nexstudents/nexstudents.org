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

/* 🚨 EVERYTHING UNDER THIS PREFIX IS PAID AND IS NOT PUBLIC.
   The plain media route below refuses it outright. It is reachable only through
   /download?t=<token>, and only after Postgres has confirmed the purchase. */
const PAID = "paid/";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

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
      "Email hello@nexstudents.org and we will send it straight over.",
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
