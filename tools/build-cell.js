#!/usr/bin/env node
/*
 * build-cell.js - the Animal Cell labelling sheet and its answer key.
 *
 * ONE array drives BOTH pages. The worksheet box and the key box for a part
 * share the same slot and the same anchor, so a number can never point at one
 * structure on page 1 and a different one on page 2. That is exactly the bug
 * the ChatGPT-made PDF had, twice.
 *
 * Coordinates are in the diagram's own pixel space: the source PNG is
 * 1254x1254 and sits at 0,0. Anything outside that box is margin for labels.
 */
"use strict";
const fs = require("fs");
const path = require("path");

/* 🚨 THE OUTPUT NEVER LANDS IN THE REPO. animal-cell is a PAID sheet, and
   GitHub Pages serves any file the repo holds. build-worksheets.js fails the
   build if it finds a PDF beside a paid page, so write the HTML somewhere
   else and print it from there:
     node tools/build-cell.js "<out dir>"
   The finished PDF goes to R2, behind the redeem_download worker.

   animal-cell-src.png is Paul's plain diagram, background levelled to pure
   white so it does not print as a faint grey box. It is the SOURCE art, not
   the product - the product is this file's output. */
const OUT = process.argv[2] || ".";
const SRC = path.join(__dirname, "animal-cell-src.png");
const IMG = "data:image/png;base64," + fs.readFileSync(SRC).toString("base64");

/* n, name, anchor on the diagram, and the slot the label box hangs from.
   side says which edge of the box the leader line leaves from. */
const PARTS = [
  { n: 1,  name: "Centrosome",                    anchor: [355, 330],  slot: [-40, 430],  side: "left"  },
  { n: 2,  name: "Centriole",                     anchor: [440, 270],  slot: [-40, 300],  side: "left"  },
  { n: 3,  name: "Lysosome",                      anchor: [622, 215],  slot: [520, -170], side: "top"   },
  { n: 4,  name: "Ribosomes",                     anchor: [785, 245],  slot: [900, -170], side: "top"   },
  { n: 5,  name: "Cilium",                        anchor: [1010, 95],  slot: [1330, 120], side: "right" },
  { n: 6,  name: "Cell membrane",                 anchor: [1120, 400], slot: [1330, 330], side: "right" },
  { n: 7,  name: "Rough endoplasmic reticulum",   anchor: [960, 450],  slot: [1330, 500], side: "right" },
  { n: 8,  name: "Nucleolus",                     anchor: [675, 590],  slot: [1330, 640], side: "right" },
  { n: 9,  name: "Nucleoplasm",                   anchor: [770, 640],  slot: [1330, 770], side: "right" },
  { n: 10, name: "Nuclear envelope",              anchor: [840, 690],  slot: [1330, 900], side: "right" },
  { n: 11, name: "Smooth endoplasmic reticulum",  anchor: [880, 950],  slot: [1330, 1080],side: "right" },
  { n: 12, name: "Cytoplasm",                     anchor: [620, 1000], slot: [-40, 1130], side: "left"  },
  { n: 13, name: "Secretory vesicles",            anchor: [505, 945],  slot: [-40, 990],  side: "left"  },
  { n: 14, name: "Golgi apparatus",               anchor: [300, 820],  slot: [-40, 850],  side: "left"  },
  { n: 15, name: "Mitochondrion",                 anchor: [305, 565],  slot: [-40, 700],  side: "left"  },
  { n: 16, name: "Peroxisome",                    anchor: [285, 395],  slot: [-40, 560],  side: "left"  },
];

/* Wide enough for the KEY page's boxes, which carry a name as well as a
   number. The worksheet's narrow boxes sit in the same slots, so both pages
   share this frame and the diagram lands at the same size on each. */
const VIEW = "-390 -270 2180 1560";

/* Box geometry differs between the two pages - the key has to fit a name -
   but the slot and the anchor do not, so the leader line is identical. */
function boxRect(p, w, h) {
  const [sx, sy] = p.slot;
  if (p.side === "left")  return [sx - w, sy - h / 2];
  if (p.side === "right") return [sx, sy - h / 2];
  if (p.side === "top")   return [sx - w / 2, sy - h];
  return [sx - w / 2, sy];
}

function diagram(withNames) {
  const h = 76;
  const out = [`<image x="0" y="0" width="1254" height="1254" href="${IMG}"/>`];
  for (const p of PARTS) {
    const w = withNames ? (p.name.length > 20 ? 400 : 330) : 190;
    const [bx, by] = boxRect(p, w, h);
    const [ax, ay] = p.anchor;
    const [sx, sy] = p.slot;
    out.push(`<line x1="${sx}" y1="${sy}" x2="${ax}" y2="${ay}"/>`);
    out.push(`<circle cx="${ax}" cy="${ay}" r="11"/>`);
    out.push(`<rect x="${bx}" y="${by}" width="${w}" height="${h}" rx="10"/>`);
    if (withNames) {
      out.push(`<text class="num key" x="${bx + 26}" y="${by + h / 2}">${p.n}</text>`);
      const lines = p.name.length > 20 ? p.name.split(" endoplasmic ").length > 1
        ? [p.name.split(" endoplasmic ")[0] + " endoplasmic", "reticulum"] : [p.name] : [p.name];
      if (lines.length === 2) {
        out.push(`<text class="nm" x="${bx + 78}" y="${by + h / 2 - 16}">${lines[0]}</text>`);
        out.push(`<text class="nm" x="${bx + 78}" y="${by + h / 2 + 16}">${lines[1]}</text>`);
      } else {
        out.push(`<text class="nm" x="${bx + 78}" y="${by + h / 2}">${p.name}</text>`);
      }
    } else {
      out.push(`<text class="num" x="${bx + w / 2}" y="${by + h / 2}">${p.n}</text>`);
    }
  }
  return `<svg class="dia" viewBox="${VIEW}" xmlns="http://www.w3.org/2000/svg">${out.join("")}</svg>`;
}

/* The word list is the SAME 16 names, sorted, so it cannot fall out of step
   with the diagram either. Three columns, balanced by count. */
const NAMES = PARTS.map((p) => p.name).sort((a, b) => a.localeCompare(b));
function wordList() {
  const cols = [NAMES.slice(0, 6), NAMES.slice(6, 11), NAMES.slice(11)];
  return `<div class="wl">${cols.map((c) =>
    `<ul>${c.map((n) => `<li><span class="blank"></span>${n}</li>`).join("")}</ul>`
  ).join("")}</div>`;
}
function keyList() {
  const by = PARTS.slice().sort((a, b) => a.n - b.n);
  const cols = [by.slice(0, 6), by.slice(6, 11), by.slice(11)];
  return `<div class="wl kl">${cols.map((c) =>
    `<ul>${c.map((p) => `<li><span class="kn">${p.n}</span>${p.name}</li>`).join("")}</ul>`
  ).join("")}</div>`;
}

const CSS = `
  @page { size: letter; margin: 0; }
  * { box-sizing: border-box; }
  body { margin: 0; font-family: "Trebuchet MS", "Segoe UI", Arial, sans-serif; color: #111; }
  .page { width: 8.5in; height: 11in; padding: 0.5in 0.55in; display: flex;
          flex-direction: column; page-break-after: always; position: relative; }
  .page:last-child { page-break-after: auto; }
  .nd { display: flex; gap: 26px; font-size: 15pt; align-items: flex-end; margin-bottom: 4px; }
  .nd b { font-weight: 600; }
  .nd i { display: inline-block; border-bottom: 1.6px solid #111; height: 20px; }
  .nd .n { flex: 1.4; } .nd .d { flex: 1; }
  h1 { font-size: 32pt; text-align: center; margin: 2px 0 0; letter-spacing: -0.5px; }
  .ak { text-align: center; font-size: 17pt; font-weight: 700; color: #c0121f;
        letter-spacing: 2px; margin: 0 0 2px; }
  .dir { font-size: 11.5pt; text-align: center; margin: 4px 26px 0; line-height: 1.35; }
  .dir b { font-weight: 700; }
  .dia { display: block; width: 100%; flex: 1; min-height: 0; margin: 2px 0; }
  .dia line { stroke: #111; stroke-width: 4; }
  .dia circle { fill: #111; }
  .dia rect { fill: #fff; stroke: #111; stroke-width: 4; }
  .dia text { dominant-baseline: central; font-family: "Trebuchet MS", Arial, sans-serif; }
  .dia .num { text-anchor: middle; font-size: 44px; font-weight: 700; }
  .dia .num.key { text-anchor: middle; fill: #c0121f; }
  .dia .nm { text-anchor: start; font-size: 30px; }
  .wl { display: flex; gap: 18px; border: 2.5px solid #2f7dc4; border-radius: 12px;
        background: #f4f9fe; padding: 12px 16px; }
  .wl ul { list-style: none; margin: 0; padding: 0; flex: 1; }
  .wl li { font-size: 11pt; line-height: 1.5; display: flex; align-items: baseline; gap: 8px; }
  .blank { display: inline-block; width: 52px; border-bottom: 1.4px solid #111; flex: none; }
  .kl { }
  .kl .kn { display: inline-block; width: 34px; text-align: right; font-weight: 700;
            color: #c0121f; flex: none; }
  .kl li { font-size: 11.5pt; }
  .foot { text-align: right; font-size: 9.5pt; color: #333; margin-top: 6px; }
`;

const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><title>Animal Cell</title><style>${CSS}</style></head>
<body>
<div class="page">
  <div class="nd"><span class="n"><b>Name:</b> <i style="width:78%"></i></span>
                  <span class="d"><b>Date:</b> <i style="width:74%"></i></span></div>
  <h1>Animal Cell</h1>
  <p class="dir"><b>Directions:</b> Look at the diagram of the animal cell. Each part of the cell
     is numbered. Write the number of each part next to its name in the list below.</p>
  ${diagram(false)}
  ${wordList()}
  <div class="foot">nexstudents.org</div>
</div>
<div class="page">
  <h1>Animal Cell</h1>
  <p class="ak">ANSWER KEY</p>
  ${diagram(true)}
  ${keyList()}
  <div class="foot">nexstudents.org</div>
</div>
</body></html>`;

const dest = path.join(OUT, "animal-cell.html");
fs.writeFileSync(dest, html);
console.log("wrote " + dest + "  parts=" + PARTS.length + "  names=" + NAMES.length);
