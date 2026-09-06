#!/usr/bin/env node
/*
 * make-game-thumb.js — render a game's own opening screen as its card art.
 *
 *   node make-game-thumb.js "<site root>" <game-slug> [more slugs...]
 *
 * Same argument as make-cover.js: for a playable game the honest thumbnail is a
 * picture of the game. It is rendered FROM the page, so it cannot drift from
 * what the student actually gets, and nothing has to be drawn by hand.
 *
 * Why a sibling of make-cover.js rather than a flag on it: that one exists to
 * force the PRINT rules on and frame a sheet at 8.5x11. A game is a screen, not
 * paper, and mixing the two would mean a script whose whole body is an if.
 *
 * How it works, and every step is lifted from make-cover.js on purpose:
 *  - the site root is served over http, because root-absolute /assets links do
 *    NOT resolve under file:// and Chrome will cheerfully shoot an unstyled page
 *  - headless Chrome at exactly 1280x800, which IS 16:10, the `.gart` ratio, so
 *    the card crops nothing
 *  - ffmpeg for the scale and the JPEG encode. NOT `convert`: on Windows that is
 *    system32\convert.exe, the filesystem utility.
 *
 * 🚨 IT REFUSES A BLANK SHOT. A game that has not painted yet renders as one
 * flat colour, which looks like a deliberate plain tile rather than a failure.
 * The variance check below is the only thing standing between that and shipping
 * four identical grey rectangles.
 */
"use strict";
const fs = require("fs");
const path = require("path");
const http = require("http");
const os = require("os");
const { execFile, execFileSync } = require("child_process");

const CANDIDATES = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
];
const TYPES = {
  ".html": "text/html", ".css": "text/css", ".js": "text/javascript",
  ".jpg": "image/jpeg", ".png": "image/png", ".webp": "image/webp",
  ".svg": "image/svg+xml", ".woff2": "font/woff2", ".json": "application/json",
};

/* 1280x800 is 16:10 exactly — the `.gart` aspect ratio. Shipped at 800px wide,
   which matches the 700-800px the worksheet thumbs use. */
const WIN_W = 1280, WIN_H = 800, OUT_W = 800;

const ROOT = path.resolve(process.argv[2] || ".");
const SLUGS = process.argv.slice(3);
if (!SLUGS.length) {
  console.error("usage: node make-game-thumb.js <site root> <game-slug> [...]");
  process.exit(1);
}
const chrome = CANDIDATES.find(p => fs.existsSync(p));
if (!chrome) { console.error("FAIL: no Chrome or Edge found"); process.exit(1); }

const server = http.createServer((q, s) => {
  let u = decodeURIComponent(q.url.split("?")[0]);
  let f = path.join(ROOT, u);
  try { if (fs.statSync(f).isDirectory()) f = path.join(f, "index.html"); } catch (e) {}
  fs.readFile(f, (e, d) => {
    if (e) { s.writeHead(404); return s.end("404"); }
    s.writeHead(200, { "Content-Type": TYPES[path.extname(f).toLowerCase()] || "application/octet-stream" });
    s.end(d);
  });
});

const run = (bin, args) => new Promise((res, rej) =>
  execFile(bin, args, { maxBuffer: 1 << 26 }, (e, so, se) => e ? rej(new Error(se || e.message)) : res(so)));

/* A flat image is a failed render, not a minimal one. ffmpeg's signalstats
   gives the luma variance; a real game screen is far above this floor. */
function looksBlank(file) {
  const out = execFileSync("ffmpeg", ["-v", "error", "-i", file, "-vf",
    "signalstats,metadata=print:key=lavfi.signalstats.YDIF", "-f", "null", "-"],
    { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] });
  const stat = execFileSync("ffmpeg", ["-v", "error", "-i", file,
    "-vf", "cropdetect=limit=0.02:round=2", "-frames:v", "1", "-f", "null", "-"],
    { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] });
  return { out, stat };
}

(async () => {
  await new Promise(r => server.listen(0, r));
  const port = server.address().port;
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "ns-game-"));
  const made = [];
  try {
    for (const slug of SLUGS) {
      const dir = path.join(ROOT, "games", slug);
      if (!fs.existsSync(path.join(dir, "index.html"))) {
        console.error("FAIL: no page at games/" + slug + "/index.html");
        process.exit(1);
      }
      const shot = path.join(tmp, slug + ".png");
      await run(chrome, [
        "--headless=new", "--disable-gpu", "--hide-scrollbars",
        "--force-device-scale-factor=1",
        "--virtual-time-budget=4000",
        "--window-size=" + WIN_W + "," + WIN_H,
        "--screenshot=" + shot,
        "http://127.0.0.1:" + port + "/games/" + slug + "/",
      ]);
      if (!fs.existsSync(shot)) { console.error("FAIL: no screenshot for " + slug); process.exit(1); }

      const outDir = path.join(ROOT, "assets", "games");
      fs.mkdirSync(outDir, { recursive: true });
      const out = path.join(outDir, slug + ".jpg");
      await run("ffmpeg", ["-y", "-i", shot,
        "-vf", "scale=" + OUT_W + ":-2:flags=lanczos", "-q:v", "4", out]);

      /* 🚨 THE BLANK GUARD. A game that never painted gives one flat colour, and
         a flat tile is indistinguishable from a design choice on the shelf. */
      const px = execFileSync("ffmpeg", ["-v", "error", "-i", out, "-vf",
        "scale=8:5,format=gray", "-f", "rawvideo", "-"], { maxBuffer: 1 << 20 });
      const vals = Array.from(px);
      const min = Math.min(...vals), max = Math.max(...vals);
      if (max - min < 12) {
        console.error("FAIL: " + slug + " rendered flat (luma spread " + (max - min) +
          "). The page probably had not painted. Raise --virtual-time-budget.");
        process.exit(1);
      }
      const kb = Math.round(fs.statSync(out).size / 1024);
      made.push({ slug: slug, out: "/assets/games/" + slug + ".jpg", kb: kb, lumaSpread: max - min });
    }
    console.log(JSON.stringify({ made: made }, null, 1));
  } finally {
    server.close();
    fs.rmSync(tmp, { recursive: true, force: true });
  }
})().catch(e => { console.error("FAIL: " + e.message); process.exit(1); });
