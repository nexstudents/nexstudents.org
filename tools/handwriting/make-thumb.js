#!/usr/bin/env node
/*
 * make-thumb.js — the SQUARE shelf thumbnail for the handwriting sheet.
 *
 *   node make-thumb.js "<out.jpg>"
 *
 * 🚨 WHY THIS EXISTS RATHER THAN make-cover.js.
 * make-cover renders the printed PAGE, which is Letter-shaped. The site's cards
 * are square - Paul, 2026-08-26: "we can redo all of the images and make them
 * all squares both inside the content and the thumbnail on the outside" - and a
 * portrait page cropped square loses 45% of itself, which is exactly the bug
 * that ate the Lewis and Clark title.
 *
 * Because these letters are drawn from data rather than screenshotted, the
 * square does not have to be a crop of anything. It is COMPOSED for the shape:
 * four letters big enough to read at card size, arrows and all, on ruled paper.
 * A card that shows six rows of tiny grey letters says nothing at 300px.
 *
 * No lettering is baked in. The card prints its own title underneath in real
 * text, so a painted-on title would be duplicated and would be the first thing
 * a crop eats.
 *
 * Needs ffmpeg on PATH for the JPEG encode. NOT `convert` - on Windows that is
 * system32\convert.exe, the filesystem utility.
 */
"use strict";
const fs = require("fs");
const path = require("path");
const os = require("os");
const { execFile } = require("child_process");
const HW = require("./build-handwriting.js");

const OUT = process.argv[2];
if (!OUT) { console.error("usage: node make-thumb.js <out.jpg>"); process.exit(1); }

const SIZE = 1200;
const CHROMES = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
];
const chrome = CHROMES.find((p) => fs.existsSync(p));
if (!chrome) { console.error("No Chrome or Edge found"); process.exit(1); }

/* Two rows of two letters. Each pair is the model with its arrows beside the
   faded copy, which is the whole idea of the sheet in one glance. */
/* THREE rows of one pair each, not a 2x2 of four. A cell is 140x182, so four
   cells across and two down is a wide, short block that left a third of the
   square empty top and bottom. Four across and THREE down comes out 1080 x 1053
   - near enough square to fill the frame. */
const PAIRS = [["A", "a"], ["B", "b"], ["C", "c"]];

const cellFor = (ch) => ch === ch.toUpperCase()
  ? HW.UPPER[ch] : HW.LOWER[ch];

const pair = ([U, l]) => `<div class="pair">
  ${HW.glyph(cellFor(U), "model")}${HW.glyph(cellFor(l), "model")}
  ${HW.glyph(cellFor(U), "trace")}${HW.glyph(cellFor(l), "trace")}
</div>`;

const html = `<!doctype html><meta charset="utf-8"><style>
  html,body{margin:0;padding:0;background:#fff}
  body{width:${SIZE}px;height:${SIZE}px;display:flex;align-items:center;
       justify-content:center}
  /* the letters carry their own palette; force the paper values because the
     page has no site theme around it */
  .wrap{--fg:#161b21;--bg:#ffffff;--line:#b9c6d4;
        display:flex;flex-direction:column;gap:0}
  ${HW.LETTER_CSS}
  .hw .cell{width:270px;height:351px}
  .pair{display:flex}
</style>
<div class="wrap hw">
  ${PAIRS.map(pair).join("\n")}
</div>`;

const tmp = path.join(os.tmpdir(), "ns-hw-thumb-" + Date.now());
fs.mkdirSync(tmp, { recursive: true });
const page = path.join(tmp, "t.html");
const shot = path.join(tmp, "shot.png");
fs.writeFileSync(page, html, "utf8");

execFile(chrome, [
  "--headless=new", "--disable-gpu", "--hide-scrollbars",
  "--window-size=" + SIZE + "," + SIZE,
  "--screenshot=" + shot,
  "--default-background-color=FFFFFFFF",
  "file:///" + page.replace(/\\/g, "/"),
], (err) => {
  if (!fs.existsSync(shot)) {
    console.error("Chrome wrote no screenshot. " + (err ? err.message : ""));
    process.exit(1);
  }
  execFile("ffmpeg", ["-y", "-v", "error", "-i", shot,
    "-vf", "crop=" + SIZE + ":" + SIZE + ":0:0", "-q:v", "3", OUT], (err2) => {
    if (err2 || !fs.existsSync(OUT)) {
      console.error("ffmpeg failed: " + (err2 ? err2.message : "no output"));
      process.exit(1);
    }
    const kb = Math.round(fs.statSync(OUT).size / 1024);
    fs.rmSync(tmp, { recursive: true, force: true });
    console.log(path.basename(OUT) + "  " + SIZE + "x" + SIZE + "  " + kb + " KB");
  });
});
