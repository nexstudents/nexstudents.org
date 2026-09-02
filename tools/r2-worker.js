/* r2-worker.js — the public face of the media bucket. ROADMAP 27.
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
   ───────────────────────────────────────────────────────────────────────── */

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const key = decodeURIComponent(url.pathname.replace(/^\/+/, ""));

    /* Audio is fetched with GET and probed with HEAD by some browsers. Nothing
       else is ever legitimate here - this bucket is written by bake-voice.js
       over the S3 API, never over this hostname. */
    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response("Method not allowed", { status: 405 });
    }
    if (!key) return new Response("nexstudents media\n", { status: 200 });

    /* 🚨 Refuse traversal outright rather than trusting R2 to normalise it.
       R2 keys are opaque strings, so "../" is not special to it - but it is
       special to anything that later mirrors these keys onto a filesystem. */
    if (key.includes("..")) return new Response("Bad request", { status: 400 });

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
