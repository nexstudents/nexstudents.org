#!/usr/bin/env node
/*
 * make-pdf.js — render a worksheet page to a real PDF with headless Chrome.
 *
 * Why a real file: on a phone, window.print() opens the print dialog and some
 * Android builds never offer "Save as PDF" as a destination. A plain download
 * link always works, on every device, with no library in the page.
 *
 *   node make-pdf.js "<path to worksheet index.html>" [out.pdf]
 *
 * The page's own @media print rules decide what lands in the PDF, so the site
 * chrome drops out and the answer key keeps its own page - same as printing.
 */
"use strict";
const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const CANDIDATES = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
];

const src = process.argv[2];
if (!src) { console.error("usage: make-pdf.js <worksheet index.html> [out.pdf]"); process.exit(1); }
const abs = path.resolve(src);
if (!fs.existsSync(abs)) { console.error("no such file: " + abs); process.exit(1); }

const chrome = CANDIDATES.find((c) => fs.existsSync(c));
if (!chrome) { console.error("Chrome or Edge not found in the usual places."); process.exit(1); }

// Default name: the folder name, which is already the slug.
const out = path.resolve(
  process.argv[3] || path.join(path.dirname(abs), path.basename(path.dirname(abs)) + ".pdf")
);

execFileSync(chrome, [
  "--headless=new",
  "--disable-gpu",
  "--no-pdf-header-footer",     // no browser URL/date furniture on the sheet
  "--print-to-pdf=" + out,
  "file:///" + abs.replace(/\\/g, "/"),
], { stdio: ["ignore", "ignore", "pipe"] });

if (!fs.existsSync(out)) { console.error("Chrome reported no error but wrote nothing."); process.exit(1); }
console.log(`${path.basename(out)}  ${(fs.statSync(out).size / 1024).toFixed(0)} KB`);
