#!/usr/bin/env node
/*
 * make-cover.js — render a worksheet's own printed page as its thumb.jpg.
 *
 *   node make-cover.js "<path to worksheet index.html>" [out.jpg]
 *
 * For a BLANK sheet the cover is the sheet. There is no art to show and none
 * is wanted: what the parent is deciding on the shelf is whether this paper is
 * the paper they need, so the honest cover is a picture of the paper. Because
 * it is rendered from the page itself, it cannot drift from what prints.
 *
 * How it works: the page is served over http for the same reason make-pdf.js
 * does it (root-absolute /assets links do not resolve under file://), loaded
 * with the print rules forced on and the sheet framed at exactly 8.5x11 in at
 * 96dpi, screenshotted, then cropped to the page and scaled to 700px wide -
 * matching the existing history thumbs.
 *
 * Needs ffmpeg on PATH for the crop and the JPEG encode. NOT `convert`: on
 * Windows that is system32\convert.exe, the filesystem utility.
 */
"use strict";
const fs = require("fs");
const path = require("path");
const http = require("http");
const { execFile } = require("child_process");
const os = require("os");

const CANDIDATES = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
];

const TYPES = {
  ".html": "text/html", ".css": "text/css", ".js": "text/javascript",
  ".jpg": "image/jpeg", ".png": "image/png", ".webp": "image/webp",
  ".svg": "image/svg+xml", ".woff2": "font/woff2",
};

/* Letter at 96dpi, with the same 14mm margin the print rules use. */
const PAGE_W = 816, PAGE_H = 1056, PAD = 53;
const WIN_W = PAGE_W + 44, WIN_H = PAGE_H + 64;
const OFF_X = (WIN_W - PAGE_W) / 2, OFF_Y = 20;

/* The print rules live in a @media print block, which a screenshot never
   triggers. This is that block, forced on, plus a white page frame. */
const PROOF_CSS = `
body{background:#555;display:flex;justify-content:center;padding:${OFF_Y}px 0;margin:0}
.bar{display:none!important}
nav,.ns-nav{display:none!important}
.page{width:${PAGE_W}px;height:${PAGE_H}px;background:#fff;padding:${PAD}px;
  box-sizing:border-box;overflow:hidden}
.sheet{max-width:none;margin:0;border:0;border-radius:0;padding:0;background:#fff;
  color:#000;font-size:11pt;line-height:1.5}
.sheet h1{font-size:19pt}
.sheet h2,.eyebrow,.dek,.note,.passage,.key .kv{color:#000}
.sheet h2,.head,.key{border-color:#000}
.lines i,.namebar u,.vocab u,.words li u,.bonus .row u,.pts u{border-bottom:1px solid #000}
.namebar{border-bottom:1px solid #000}
.bonus{border-color:#000}
.bonus h3,.bonus .why,.notes b,.pts,.words li b,.bonus .row b{color:#000}
.signoff{border-top-color:#000;color:#000}
.weekpick,.head.is-flash,.allyear{display:none}
.teach{border-color:#000}
.teach h3,.teach>p,.teach>p b,.keys li,.keys li b,.eg{color:#000}
.cards,.fc{border-color:#000}
.fc.label{background:transparent}
.fc>span,.fc.label b,.wkhead,.fc.label span,.fc.is-bonus em,.cutnote,.wkfocus{color:#000}
`;

/* 🚨 THE ABOVE IS A COPY OF THE @media print RULES, NOT THE RULES THEMSELVES.
   A screenshot never triggers print media, and headless Chrome cannot be told
   to emulate it without driving the debug protocol, so the print block is
   restated here. That means it can fall behind: a new sheet type whose print
   rules are not repeated above renders in its SCREEN colours and the cover
   shows something that will not come out of a printer. It has already
   happened once, with the flashcard label card, which is a dark tile on
   screen and plain paper in print.
   ⚠️ Add a new sheet type's print rules here at the same time you add them to
   worksheet.css. */

const src = process.argv[2];
if (!src) { console.error("usage: make-cover.js <worksheet index.html> [out.jpg]"); process.exit(1); }
const abs = path.resolve(src);
if (!fs.existsSync(abs)) { console.error("no such file: " + abs); process.exit(1); }

const chrome = CANDIDATES.find((c) => fs.existsSync(c));
if (!chrome) { console.error("Chrome or Edge not found in the usual places."); process.exit(1); }

function findRoot(from) {
  let dir = path.dirname(from);
  for (let i = 0; i < 12; i++) {
    if (fs.existsSync(path.join(dir, "assets/ns.css"))) return dir;
    const up = path.dirname(dir);
    if (up === dir) break;
    dir = up;
  }
  return null;
}

const root = findRoot(abs);
if (!root) { console.error("FAIL: no assets/ns.css above " + abs); process.exit(1); }

/* A printable in <sheet>/print/ still gets its thumb in <sheet>/. */
const sheetDir = path.basename(path.dirname(abs)) === "print"
  ? path.dirname(path.dirname(abs)) : path.dirname(abs);
const out = path.resolve(process.argv[3] || path.join(sheetDir, "thumb.jpg"));

/* The proof page is built in memory and served from one URL. Nothing is
   written beside the worksheet, so a stale proof file cannot be left behind
   and cannot be published by accident. */
const PROOF_URL = "/__cover__.html";
const proof = fs.readFileSync(abs, "utf8")
  .replace("</head>", "<style>" + PROOF_CSS + "</style>\n</head>")
  .replace('<div class="sheet">', '<div class="page"><div class="sheet">')
  .replace(/<\/div>\s*<\/body>/, "</div></div></body>");

const server = http.createServer((req, res) => {
  const rel = decodeURIComponent(req.url.split("?")[0]);
  if (rel === PROOF_URL) {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(proof);
    return;
  }
  const file = path.join(root, rel);
  if (!file.startsWith(root)) { res.writeHead(403).end(); return; }
  fs.readFile(file, (err, buf) => {
    if (err) { res.writeHead(404).end(); return; }
    res.writeHead(200, { "content-type": TYPES[path.extname(file).toLowerCase()] || "application/octet-stream" });
    res.end(buf);
  });
});

const shot = path.join(os.tmpdir(), "ns-cover-" + process.pid + ".png");

/* 🚨 --screenshot WRITES NOTHING IN CHROME 152, so this drives the browser
   over CDP instead - the same connection check-pages-run.js uses since the
   stderr handshake died. Three of Chrome's convenience flags expired at once
   on 2026-09-17: --headless=new, the "DevTools listening" line, and this.
   ⚠️ The port is polled, never parsed out of stderr. Randomised so two covers
   can be made at the same time. */
const CDP_PORT = 9800 + Math.floor(Math.random() * 400);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function capture(url) {
  const profile = fs.mkdtempSync(path.join(os.tmpdir(), "ns-cover-"));
  const proc = require("child_process").spawn(chrome, [
    "--headless", "--disable-gpu", "--no-first-run", "--no-default-browser-check",
    "--hide-scrollbars", "--window-size=" + WIN_W + "," + WIN_H,
    "--remote-debugging-port=" + CDP_PORT, "--user-data-dir=" + profile, "about:blank",
  ], { stdio: "ignore" });

  let ws = "";
  const deadline = Date.now() + 20000;
  while (Date.now() < deadline && !ws) {
    try {
      /* 🚨 /json/version IS THE BROWSER ENDPOINT, AND Page.* DOES NOT EXIST
         THERE. Page commands need a PAGE target, which is what /json lists.
         Attaching to the browser socket connects fine and then returns no
         image, with no error - exactly what happened on the first run. */
      const r = await fetch("http://127.0.0.1:" + CDP_PORT + "/json");
      if (r.ok) {
        const list = await r.json();
        const pg = (list || []).find((t) => t.type === "page" && t.webSocketDebuggerUrl);
        ws = pg ? pg.webSocketDebuggerUrl : "";
      }
    } catch (e) { /* not up yet */ }
    if (!ws) await sleep(200);
  }
  if (!ws) { try { proc.kill(); } catch (e) {} throw new Error("Chrome did not open its debugging port"); }

  const sock = new WebSocket(ws);
  let id = 0;
  const pending = new Map();
  await new Promise((ok, no) => { sock.onopen = ok; sock.onerror = () => no(new Error("CDP socket failed")); });
  sock.onmessage = (m) => {
    const d = JSON.parse(m.data);
    if (d.id && pending.has(d.id)) { pending.get(d.id)(d.result || {}); pending.delete(d.id); }
  };
  const send = (method, params) => new Promise((ok) => {
    const n = ++id; pending.set(n, ok);
    sock.send(JSON.stringify({ id: n, method, params: params || {} }));
  });

  await send("Page.enable");
  await send("Page.navigate", { url });
  /* Give webfonts and the stylesheet time to land; a cover of unstyled text is
     worse than no cover, and there is no error to tell us apart. */
  await sleep(3500);
  /* 🚨 RENDER AS THE PRINTER SEES IT. The /print/ page carries the site nav,
     the Print/Download bar, a dark body and a footer - all hidden by
     @media print and none of which belong on a cover. Screenshotting the WEB
     page is why every cover was cropped wrong and ended mid-sentence:
     make-cover was cutting a fixed box out of a layout it could not predict.
     Paul, 2026-09-17: "you should make these sheets fit inside of a square on
     the site. you have the bottom cut off." */
  await send("Emulation.setEmulatedMedia", { media: "print" });
  /* 🚨 AND HIDE WHATEVER PRINT CSS MISSES. A dark strip still came through at
     the top of the first cover - site chrome that @media print does not catch
     in this context. A cover must be the SHEET and nothing else, so rather
     than chase each stray element, show .sheet and hide its siblings. */
  await send("Runtime.evaluate", { expression: "(function(){" +
    "var st=document.createElement('style');" +
    "st.textContent='body>*:not(.sheet){display:none!important}'+" +
    "'html,body{background:#fff!important;margin:0!important;padding:0!important}'+" +
    "'.sheet{margin:0!important;box-shadow:none!important;border:0!important}';" +
    "document.head.appendChild(st);" +
    "var s=document.querySelector('.sheet');" +
    "if(s&&s.parentElement&&s.parentElement!==document.body){" +
      "document.body.appendChild(s);" +
    "}" +
  "})()" });
  await sleep(1200);
  /* One Letter page is 816x1056 at 96dpi. Capture at that WIDTH and let the
     height run; the crop below takes the first page off the top. */
  const met = await send("Page.getLayoutMetrics");
  const full = Math.min(Math.ceil((met.cssContentSize && met.cssContentSize.height) || PAGE_H), 16000);
  await send("Emulation.setDeviceMetricsOverride", { width: PAGE_W, height: full, deviceScaleFactor: 2, mobile: false });
  await sleep(500);
  const shotRes = await send("Page.captureScreenshot", { format: "png", captureBeyondViewport: true });
  try { sock.close(); } catch (e) {}
  try { proc.kill(); } catch (e) {}
  if (!shotRes || !shotRes.data) throw new Error("CDP returned no image");
  fs.writeFileSync(shot, Buffer.from(shotRes.data, "base64"));
}

server.listen(0, "127.0.0.1", () => {
  const url = "http://127.0.0.1:" + server.address().port + PROOF_URL;
  capture(url).then(() => {
    server.close();
    if (!fs.existsSync(shot)) { console.error("Chrome wrote no screenshot."); process.exit(1); }
    execFile("ffmpeg", [
      "-y", "-loglevel", "error", "-i", shot,
      /* 🚨 PAGE ONE, WHOLE, IN A SQUARE.
         · crop  the first page off the top. At deviceScaleFactor 2 every
           dimension is doubled, hence the x2. No x/y offset is guessed any
           more - print media puts the sheet at the origin.
         · pad   a white margin around it, because @page margins exist only in
           real pagination and never appear in a screenshot. Without this the
           text runs to the very edge and the cover looks trimmed.
         · scale to FIT 800x800 without distorting, then pad the remainder
           white so every card on the shelf is the same square. */
      "-vf", `crop=${PAGE_W * 2}:${PAGE_H * 2}:0:0,` +
             `pad=${PAGE_W * 2 + 96}:${PAGE_H * 2 + 96}:48:48:white,` +
             /* 🚨 8.5x11, NOT A SQUARE. Paul, 2026-09-17: "you could just make
                the preview for all the worksheets 8.5x11 ... so in the shopping
                it would all look good for the preview." A worksheet IS a page.
                A square either crops it or floats it in white; page-shaped, the
                whole thing fits and every card matches. Letter is 0.7727 wide
                to tall and 800x1035 is that ratio, so nothing stretches. */
             `scale=800:1035`,
      "-q:v", "4", out,
    ], (err2) => {
      fs.unlinkSync(shot);
      if (err2 || !fs.existsSync(out)) { console.error("ffmpeg failed: " + (err2 ? err2.message : "no output")); process.exit(1); }
      console.log(`${path.basename(out)}  ${(fs.statSync(out).size / 1024).toFixed(0)} KB`);
    });
  }).catch((e) => { server.close(); console.error(e.message); process.exit(1); });
});
