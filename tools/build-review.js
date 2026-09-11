#!/usr/bin/env node
/* ─────────────────────────────────────────────────────────────────────────
   build-review.js — the end-of-batch review queue, as a page Paul can look at.

       node tools/build-review.js .          build review/index.html
       node tools/build-review.js . --serve  build it and serve it, print the URL

   🚨 WHY THIS EXISTS. Paul, 2026-09-11, and he called it the most important
   part: "don't sprinkle 'please check this' through coding chatter. Collect
   everything that needs my judgment into one end-of-batch review queue ... For
   visuals or interactives, put it on the local server as a review page. I want
   to come back to 'what's done' and 'what needs me now', not reconstruct the
   session."

   He is juggling a newborn, Kolten and video editing. A question buried in a
   build log is a question he has to go find.

   🚨 A QUESTION ABOUT A PICTURE CANNOT BE ANSWERED IN TEXT. That is the whole
   reason this is a page and not a markdown file: each item SHOWS the thing,
   live, at phone and desktop width.

   ⚠️ NEVER DEPLOYED. `review/` is in .gitignore, so it cannot reach the repo
   and Pages cannot serve it. It is a workbench. It also carries a noindex, so
   that if it ever does escape, it does not get indexed.

   ⚠️ GENERATED FROM `tools/review-queue.json`, never hand-written — or it goes
   stale the first time a lesson ships without being added, which is the failure
   the nav, the footer and the grade picker each had here.
   ───────────────────────────────────────────────────────────────────────── */
'use strict';
const fs = require('fs');
const path = require('path');
const http = require('http');

const ROOT = process.argv[2] || '.';
const SERVE = process.argv.includes('--serve');
const QUEUE = path.join(ROOT, 'tools', 'review-queue.json');
const OUTDIR = path.join(ROOT, 'review');
const OUT = path.join(OUTDIR, 'index.html');

const esc = s => String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

if (!fs.existsSync(QUEUE)) {
    console.error(`FAIL: ${path.relative(ROOT, QUEUE)} does not exist.\n` +
        `      The batch writes it. See the shape in tools/review-queue.example.json`);
    process.exit(1);
}
const q = JSON.parse(fs.readFileSync(QUEUE, 'utf8'));
const done = Array.isArray(q.done) ? q.done : [];
const needs = Array.isArray(q.needs) ? q.needs : [];

/* ── one item that needs him ──────────────────────────────────────────────
   The DECISION is the headline. The background is one line under it, at most.
   Everything else he already has: the session log, the roadmap, the commits. */
function needItem(n, i) {
    const kind = n.kind || (n.src ? 'image' : n.href ? 'page' : 'text');
    let shown = '';

    if (kind === 'page' && n.href) {
        /* Both widths, because "does it fit on a phone" is the question that
           cost an entire evening on 2026-09-11 and text cannot answer it. */
        shown = `<div class="views">
        <figure><figcaption>Phone · 390</figcaption>
          <iframe src="${esc(n.href)}" width="390" height="620" loading="lazy"
                  title="${esc(n.title)} at phone width"></iframe></figure>
        <figure class="wide"><figcaption>Desktop</figcaption>
          <iframe src="${esc(n.href)}" width="1100" height="620" loading="lazy"
                  title="${esc(n.title)} at desktop width"></iframe></figure>
      </div>
      <p class="open"><a href="${esc(n.href)}" target="_blank">Open it full size &rarr;</a></p>`;
    } else if (kind === 'image' && n.src) {
        shown = `<div class="shot"><img src="${esc(n.src)}" alt="${esc(n.title)}" loading="lazy"></div>`;
    } else if (n.code) {
        shown = `<pre class="code">${esc(n.code)}</pre>`;
    }

    /* Options make a decision answerable in one word instead of a paragraph. */
    const opts = Array.isArray(n.options) && n.options.length
        ? `<ul class="opts">${n.options.map(o => `<li>${esc(o)}</li>`).join('')}</ul>` : '';

    return `<section class="need" id="n${i + 1}">
      <p class="tag">Needs you</p>
      <h3>${esc(n.decision || n.title)}</h3>
      ${n.title && n.decision ? `<p class="where">${esc(n.title)}</p>` : ''}
      ${n.note ? `<p class="note">${esc(n.note)}</p>` : ''}
      ${opts}
      ${shown}
    </section>`;
}

const doneRows = done.map(d => `<li>
      <b>${esc(d.label || '')}</b> ${esc(d.title)}
      ${d.href ? `<a href="${esc(d.href)}" target="_blank">look</a>` : ''}
      ${d.note ? `<span class="dnote">${esc(d.note)}</span>` : ''}
    </li>`).join('\n    ');

/* 🚨 An empty queue is the BEST result and should look like it - one line, not
   an empty section with a heading standing over nothing. */
const needsBlock = needs.length
    ? needs.map(needItem).join('\n    ')
    : `<p class="allclear">Nothing needs you. ${done.length} built, all checks green.</p>`;

const html = `<!doctype html>
<html lang="en"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,nofollow">
<title>Review · ${esc(q.batch || 'batch')}</title>
<style>
  :root{color-scheme:dark}
  *{box-sizing:border-box}
  body{margin:0;background:#0f1216;color:#f1f3f5;
    font:15px/1.55 "Segoe UI",system-ui,sans-serif}
  .wrap{max-width:1180px;margin:0 auto;padding:26px 18px 70px}
  header{border-bottom:1px solid #262c34;padding-bottom:16px;margin-bottom:26px}
  h1{margin:0 0 4px;font-size:1.5rem;letter-spacing:-.02em}
  .sub{margin:0;color:#98a1ab;font-size:.85rem}
  h2{font-size:.7rem;letter-spacing:.14em;text-transform:uppercase;color:#98a1ab;
    margin:34px 0 12px}
  ul.done{list-style:none;margin:0;padding:0}
  ul.done li{padding:8px 0;border-bottom:1px solid #1c2128;font-size:.92rem}
  ul.done b{color:#4ade80;font-weight:700;margin-right:8px;font-size:.78rem;
    letter-spacing:.04em}
  ul.done a{color:#98a1ab;margin-left:8px;font-size:.8rem}
  .dnote{color:#98a1ab;font-size:.8rem;margin-left:8px}
  .allclear{background:#132018;border:1px solid #1f3b28;color:#4ade80;
    border-radius:10px;padding:14px 16px;margin:0;font-weight:600}
  .need{background:#161a1f;border:1px solid #262c34;border-radius:12px;
    padding:18px 18px 14px;margin:0 0 18px}
  .tag{margin:0 0 6px;font-size:.62rem;letter-spacing:.14em;text-transform:uppercase;
    color:#facc15;font-weight:800}
  .need h3{margin:0 0 6px;font-size:1.12rem;letter-spacing:-.01em;line-height:1.3}
  .where{margin:0 0 8px;color:#98a1ab;font-size:.82rem}
  .note{margin:0 0 10px;color:#c8ced5;font-size:.9rem}
  .opts{margin:0 0 12px;padding-left:18px;color:#c8ced5;font-size:.9rem}
  .opts li{margin-bottom:3px}
  .views{display:flex;gap:16px;flex-wrap:wrap;align-items:flex-start}
  figure{margin:0}
  figcaption{color:#98a1ab;font-size:.66rem;letter-spacing:.1em;
    text-transform:uppercase;margin-bottom:6px}
  iframe{border:1px solid #262c34;border-radius:8px;background:#0f1216;max-width:100%}
  .wide{flex:1;min-width:320px}
  .wide iframe{width:100%}
  .shot img{max-width:100%;border:1px solid #262c34;border-radius:8px;display:block}
  .code{background:#0b0e11;border:1px solid #262c34;border-radius:8px;padding:12px;
    overflow-x:auto;font-size:.82rem;color:#c8ced5;margin:0}
  .open{margin:10px 0 0;font-size:.82rem}
  .open a{color:#4ade80}
  footer{margin-top:44px;color:#5d6874;font-size:.76rem;border-top:1px solid #1c2128;
    padding-top:14px}
</style></head>
<body><div class="wrap">
<header>
  <h1>${esc(q.batch || 'Review')}</h1>
  <p class="sub">${done.length} done &middot; ${needs.length} need${needs.length === 1 ? 's' : ''} you${
    q.generated ? ' &middot; ' + esc(q.generated) : ''}</p>
</header>

<h2>What needs you now</h2>
${needsBlock}

<h2>What&rsquo;s done</h2>
${done.length ? `<ul class="done">\n    ${doneRows}\n  </ul>` : '<p class="sub">Nothing built this batch.</p>'}

<footer>Generated by <code>tools/build-review.js</code> from
<code>tools/review-queue.json</code>. Local only &mdash; never deployed.
${esc(q.budget || '')}</footer>
</div></body></html>`;

fs.mkdirSync(OUTDIR, { recursive: true });
fs.writeFileSync(OUT, html, 'utf8');
console.log(`review: ${done.length} done, ${needs.length} needing Paul -> ${path.relative(ROOT, OUT)}`);

/* ⚠️ It MUST be served, not opened from disk. Every page it frames links
   /assets/... root-absolute, which under file:// resolves to the drive root and
   silently loads nothing - the same trap that shipped three history PDFs in
   Times New Roman. See CLAUDE.md. */
if (SERVE) {
    const TYPES = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript',
        '.jpg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp',
        '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.json': 'application/json',
        '.pdf': 'application/pdf', '.mp3': 'audio/mpeg' };
    const srv = http.createServer((req, res) => {
        let p = decodeURIComponent(req.url.split('?')[0]);
        if (p.endsWith('/')) p += 'index.html';
        const f = path.join(ROOT, p);
        if (!f.startsWith(path.resolve(ROOT))) { res.writeHead(403).end(); return; }
        fs.readFile(f, (err, buf) => {
            if (err) { res.writeHead(404).end('not found'); return; }
            res.writeHead(200, { 'content-type': TYPES[path.extname(f).toLowerCase()] || 'application/octet-stream' });
            res.end(buf);
        });
    });
    srv.listen(4321, '127.0.0.1', () => {
        console.log('\n  open this:  http://127.0.0.1:4321/review/\n  ctrl-c to stop');
    });
}
