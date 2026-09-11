#!/usr/bin/env node
/* ─────────────────────────────────────────────────────────────────────────
   build-review.js — the end-of-batch review queue. Questions, and his answers.

       node tools/build-review.js .          build review/index.html
       node tools/build-review.js . --serve  serve it on Tailscale + loopback

   🚨 WHY THIS EXISTS. Paul, 2026-09-11, and he called it the most important
   part: "don't sprinkle 'please check this' through coding chatter. Collect
   everything that needs my judgment into one end-of-batch review queue ... I
   want to come back to 'what's done' and 'what needs me now', not reconstruct
   the session."

   🚨 IT ASKS, AND IT TAKES THE ANSWER BACK. He taps an option on his phone and
   it is written into review-queue.json. Next session reads the answers. That is
   what makes it hands-off: he answers without typing anything to me, and
   nothing is lost between sessions.
   "you can just give me options and I'll tell you or click what works best ...
   or I can write my own response" — so every question takes a free-text reply
   as well as its options, because the right answer is often none of mine.

   ❌ NO IFRAMES, NO SITE. The first version framed live pages, which meant this
   server had to serve the whole site - and a URL without /review/ landed him on
   NexStudents itself: "I just seen my students website and not your review."
   He then asked for options only. So it serves ONE page and nothing else, which
   is simpler AND safer.

   ⚠️ NEVER DEPLOYED. `review/` is gitignored; check-links skips it.
   ⚠️ Generated from tools/review-queue.json, never hand-written.
   ───────────────────────────────────────────────────────────────────────── */
'use strict';
const fs = require('fs');
const path = require('path');
const http = require('http');
const os = require('os');

const ROOT = process.argv[2] || '.';
const SERVE = process.argv.includes('--serve');
const QUEUE = path.join(ROOT, 'tools', 'review-queue.json');
const OUTDIR = path.join(ROOT, 'review');
const OUT = path.join(OUTDIR, 'index.html');

const esc = s => String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const readQueue = () => JSON.parse(fs.readFileSync(QUEUE, 'utf8'));

function render(q) {
    const done = Array.isArray(q.done) ? q.done : [];
    const needs = Array.isArray(q.needs) ? q.needs : [];
    const open = needs.filter(n => !n.answer);
    const answered = needs.filter(n => n.answer);

    const question = (n, i) => `<section class="q" data-i="${i}">
      <p class="tag">Needs you</p>
      <h3>${esc(n.decision || n.title)}</h3>
      ${n.title && n.decision ? `<p class="where">${esc(n.title)}</p>` : ''}
      ${n.note ? `<p class="note">${esc(n.note)}</p>` : ''}
      ${/* 🚨 WHAT IS STUCK BEHIND THIS ANSWER. Paul, 2026-09-11: "so if you have a
            question what to do about something I can actually see what still needs
            done." The question on its own does not tell him the cost of leaving it.
            "3 lessons parked" does, and it lets him triage: answer the one holding
            up real work first and leave the rest for later. */
        Array.isArray(n.blocks) && n.blocks.length
          ? `<div class="blocks"><p class="blab">Waiting on this</p><ul>${
              n.blocks.map(b => `<li>${esc(b)}</li>`).join('')}</ul></div>`
          : ''}
      <div class="opts">
        ${(n.options || []).map(o =>
            `<button type="button" class="opt" data-i="${i}" data-v="${esc(o)}">${esc(o)}</button>`).join('')}
      </div>
      <div class="own">
        <input type="text" placeholder="or write your own answer" data-i="${i}" autocomplete="off">
        <button type="button" class="send" data-i="${i}">Send</button>
      </div>
    </section>`;

    const answeredRow = n => `<li><b>${esc(n.answer)}</b> ${esc(n.decision || n.title)}</li>`;

    return `<!doctype html>
<html lang="en"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,nofollow">
<title>Review · ${esc(q.batch || 'batch')}</title>
<style>
  :root{color-scheme:dark}
  *{box-sizing:border-box}
  body{margin:0;background:#0f1216;color:#f1f3f5;
    font:16px/1.55 "Segoe UI",system-ui,sans-serif}
  .wrap{max-width:640px;margin:0 auto;padding:24px 16px 70px}
  header{border-bottom:1px solid #262c34;padding-bottom:14px;margin-bottom:22px}
  h1{margin:0 0 4px;font-size:1.35rem;letter-spacing:-.02em}
  .sub{margin:0;color:#98a1ab;font-size:.84rem}
  h2{font-size:.68rem;letter-spacing:.14em;text-transform:uppercase;color:#98a1ab;
    margin:30px 0 12px}
  .q{background:#161a1f;border:1px solid #262c34;border-radius:12px;
    padding:16px 16px 14px;margin:0 0 16px}
  .tag{margin:0 0 6px;font-size:.6rem;letter-spacing:.14em;text-transform:uppercase;
    color:#facc15;font-weight:800}
  .q h3{margin:0 0 6px;font-size:1.1rem;letter-spacing:-.01em;line-height:1.3}
  .where{margin:0 0 8px;color:#98a1ab;font-size:.82rem}
  .note{margin:0 0 12px;color:#c8ced5;font-size:.9rem}
  /* What is stuck behind the answer. Amber, because it is a cost, not a detail. */
  .blocks{border-left:2px solid #facc15;padding:2px 0 2px 12px;margin:0 0 14px}
  .blab{margin:0 0 3px;font-size:.6rem;letter-spacing:.13em;text-transform:uppercase;
    color:#facc15;font-weight:800}
  .blocks ul{margin:0;padding:0}
  .blocks li{border:0;padding:1px 0;color:#c8ced5;font-size:.86rem}
  /* 🚨 TAP TARGETS, NOT LINKS. He answers these on a phone, one-handed,
     often holding a baby. 44px minimum and full width when it wraps. */
  .opts{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px}
  .opt{flex:1 1 auto;min-height:46px;min-width:130px;padding:10px 14px;
    background:#1d232b;color:#f1f3f5;border:1px solid #323a45;border-radius:9px;
    font:inherit;font-size:.92rem;cursor:pointer;text-align:left}
  .opt:active{background:#27313f}
  @media(hover:hover){ .opt:hover{border-color:#4ade80;color:#4ade80} }
  .own{display:flex;gap:8px}
  .own input{flex:1;min-height:46px;padding:10px 12px;background:#0f1216;
    color:#f1f3f5;border:1px solid #323a45;border-radius:9px;font:inherit;font-size:.92rem}
  .send{min-height:46px;padding:10px 18px;background:#4ade80;color:#052e16;
    border:0;border-radius:9px;font:inherit;font-weight:800;cursor:pointer}
  .allclear{background:#132018;border:1px solid #1f3b28;color:#4ade80;
    border-radius:10px;padding:14px 16px;margin:0;font-weight:600}
  ul{list-style:none;margin:0;padding:0}
  ul li{padding:8px 0;border-bottom:1px solid #1c2128;font-size:.9rem}
  ul b{color:#4ade80;font-weight:700;margin-right:8px}
  .dnote{color:#98a1ab;font-size:.8rem;margin-left:8px}
  footer{margin-top:40px;color:#5d6874;font-size:.76rem;border-top:1px solid #1c2128;
    padding-top:14px}
  .saved{position:fixed;left:0;right:0;bottom:0;background:#4ade80;color:#052e16;
    text-align:center;padding:12px;font-weight:800;transform:translateY(100%);
    transition:transform .18s ease}
  .saved.on{transform:none}
</style></head>
<body><div class="wrap">
<header>
  <h1>${esc(q.batch || 'Review')}</h1>
  <p class="sub">${done.length} done &middot; ${open.length} need${open.length === 1 ? 's' : ''} you${
    q.generated ? ' &middot; ' + esc(q.generated) : ''}</p>
</header>

<h2>What needs you now</h2>
${open.length ? open.map((n) => question(n, needs.indexOf(n))).join('\n    ')
    : `<p class="allclear">Nothing needs you. ${done.length} built, all checks green.</p>`}

${answered.length ? `<h2>Answered</h2>\n<ul>${answered.map(answeredRow).join('')}</ul>` : ''}

<h2>What&rsquo;s done</h2>
${done.length ? `<ul>${done.map(d => `<li><b>${esc(d.label || '')}</b>${esc(d.title)}${
    d.note ? `<span class="dnote">${esc(d.note)}</span>` : ''}</li>`).join('')}</ul>`
    : '<p class="sub">Nothing built this batch.</p>'}

<footer>${esc(q.budget || '')} Local only, never deployed.</footer>
</div>
<div class="saved" id="saved">Saved</div>
<script>
(function(){
  var flash = document.getElementById("saved");
  function send(i, v){
    if (!v) return;
    fetch("/answer", { method:"POST", headers:{"content-type":"application/json"},
      body: JSON.stringify({ i: i, answer: v }) })
      .then(function(r){ return r.ok ? r.text() : Promise.reject(); })
      .then(function(){
        flash.textContent = "Saved: " + v;
        flash.classList.add("on");
        setTimeout(function(){ location.reload(); }, 700);
      })
      .catch(function(){ flash.textContent = "Could not save"; flash.classList.add("on"); });
  }
  document.addEventListener("click", function(e){
    var o = e.target.closest(".opt");
    if (o) { send(+o.dataset.i, o.dataset.v); return; }
    var s = e.target.closest(".send");
    if (s) {
      var box = document.querySelector('input[data-i="' + s.dataset.i + '"]');
      send(+s.dataset.i, box && box.value.trim());
    }
  });
  /* Enter sends, because a phone keyboard's go key is right there. */
  document.addEventListener("keydown", function(e){
    if (e.key === "Enter" && e.target.matches("input[data-i]")) {
      send(+e.target.dataset.i, e.target.value.trim());
    }
  });
})();
</script>
</body></html>`;
}

function build() {
    const q = readQueue();
    fs.mkdirSync(OUTDIR, { recursive: true });
    fs.writeFileSync(OUT, render(q), 'utf8');
    const open = (q.needs || []).filter(n => !n.answer).length;
    console.log(`review: ${(q.done || []).length} done, ${open} needing Paul -> ${path.relative(ROOT, OUT)}`);
    return q;
}

build();

if (SERVE) {
    const srv = http.createServer((req, res) => {
        /* 🚨 HIS ANSWER GOES STRAIGHT INTO THE QUEUE FILE. That file is committed,
           so an answer given from his phone survives to the next session without
           him repeating it to me. */
        if (req.method === 'POST' && req.url === '/answer') {
            let body = '';
            req.on('data', c => { body += c; if (body.length > 4096) req.destroy(); });
            req.on('end', () => {
                try {
                    const { i, answer } = JSON.parse(body);
                    const q = readQueue();
                    if (!q.needs || !q.needs[i]) { res.writeHead(400).end('no such question'); return; }
                    q.needs[i].answer = String(answer).slice(0, 300);
                    q.needs[i].answeredAt = new Date().toISOString().slice(0, 16).replace('T', ' ');
                    fs.writeFileSync(QUEUE, JSON.stringify(q, null, 2), 'utf8');
                    build();
                    res.writeHead(200).end('ok');
                    console.log(`  ANSWERED: ${q.needs[i].decision} -> ${q.needs[i].answer}`);
                } catch (e) { res.writeHead(400).end('bad request'); }
            });
            return;
        }
        /* One page. Everything else comes back to it — no site, nothing to get lost in. */
        if (req.url.split('?')[0] !== '/review/index.html' && req.url.split('?')[0] !== '/review/') {
            if (req.url === '/' || req.url === '/review' || req.url === '/index.html') {
                res.writeHead(302, { location: '/review/' }); res.end(); return;
            }
            res.writeHead(404).end('this server serves the review page only');
            return;
        }
        res.writeHead(200, { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' });
        res.end(fs.readFileSync(OUT));
    });

    /* 🚨 TAILSCALE, BECAUSE HE READS THIS FROM HIS PHONE. Never 0.0.0.0 — that
       would put it on the local network too. → [[feedback-remote-means-tailscale]] */
    const ts = Object.values(os.networkInterfaces()).flat()
        .find(n => n && n.family === 'IPv4' && n.address.startsWith('100.'));
    const hosts = ts ? [ts.address, '127.0.0.1'] : ['127.0.0.1'];
    const handler = srv.listeners('request')[0];
    hosts.forEach((h, idx) => {
        const s = idx === 0 ? srv : http.createServer(handler);
        s.listen(4321, h, () => {
            console.log(`  http://${h}:4321/${h.startsWith('100.') ? '   <- open this on your phone' : ''}`);
        }).on('error', e => console.log(`  (could not bind ${h}: ${e.code})`));
    });
    if (!ts) console.log('  ⚠️ no Tailscale address found — phone access will not work');
    console.log('\n  answers are written straight into tools/review-queue.json. ctrl-c to stop');
}
