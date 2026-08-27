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

const out = path.resolve(process.argv[3] || path.join(path.dirname(abs), "thumb.jpg"));

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

server.listen(0, "127.0.0.1", () => {
  const url = "http://127.0.0.1:" + server.address().port + PROOF_URL;
  execFile(chrome, [
    "--headless=new", "--disable-gpu", "--hide-scrollbars",
    "--window-size=" + WIN_W + "," + WIN_H,
    "--screenshot=" + shot,
    url,
  ], (err) => {
    server.close();
    if (!fs.existsSync(shot)) { console.error("Chrome wrote no screenshot. " + (err ? err.message : "")); process.exit(1); }
    execFile("ffmpeg", [
      "-y", "-loglevel", "error", "-i", shot,
      "-vf", `crop=${PAGE_W}:${PAGE_H}:${OFF_X}:${OFF_Y},scale=700:-2`,
      "-q:v", "4", out,
    ], (err2) => {
      fs.unlinkSync(shot);
      if (err2 || !fs.existsSync(out)) { console.error("ffmpeg failed: " + (err2 ? err2.message : "no output")); process.exit(1); }
      console.log(`${path.basename(out)}  ${(fs.statSync(out).size / 1024).toFixed(0)} KB`);
    });
  });
});
