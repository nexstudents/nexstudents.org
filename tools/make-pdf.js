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
 *
 * 🚨 WHY THIS SERVES OVER HTTP INSTEAD OF PRINTING THE FILE DIRECTLY.
 * Every page links its CSS root-absolute: /assets/ns.css. Under file:// that
 * resolves to the drive root, D:/assets/ns.css, which does not exist, so
 * Chrome printed a completely unstyled page and said nothing about it. Three
 * worksheet PDFs shipped in Times New Roman that way and the Download button
 * handed them out for weeks. So the site root is served on a throwaway local
 * port and the page is printed over http, where /assets resolves.
 *
 * The Times New Roman check at the end is the guard against that ever being
 * silently true again: the site's font stack cannot reach Times, so finding
 * it embedded means the stylesheet did not load.
 */
"use strict";
const fs = require("fs");
const path = require("path");
const http = require("http");
const { execFile } = require("child_process");

const CANDIDATES = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
];

const TYPES = {
  ".html": "text/html", ".css": "text/css", ".js": "text/javascript",
  ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png",
  ".webp": "image/webp", ".svg": "image/svg+xml", ".woff2": "font/woff2",
};

/* --query=<querystring> is passed through to the page. The flashcards sheet
   uses it (?print=all) to lay every week out at once, so the download is the
   whole year while the page's own Print button stays a single sheet. */
const args = process.argv.slice(2);
const queryArg = args.find((a) => a.startsWith("--query="));
const query = queryArg ? "?" + queryArg.slice(8) : "";
const rest = args.filter((a) => !a.startsWith("--"));

const src = rest[0];
if (!src) { console.error("usage: make-pdf.js <worksheet index.html> [out.pdf] [--query=k=v]"); process.exit(1); }
const abs = path.resolve(src);
if (!fs.existsSync(abs)) { console.error("no such file: " + abs); process.exit(1); }

const chrome = CANDIDATES.find((c) => fs.existsSync(c));
if (!chrome) { console.error("Chrome or Edge not found in the usual places."); process.exit(1); }

/* The site root is the nearest parent holding assets/ns.css. Found rather than
   passed in, so the command stays one argument long. */
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
if (!root) {
  console.error("FAIL: no assets/ns.css in any parent of " + abs +
                " - cannot find the site root, and printing without it would " +
                "produce an unstyled PDF.");
  process.exit(1);
}

// Default name: the folder name, which is already the slug.
const out = path.resolve(
  rest[1] || path.join(path.dirname(abs), path.basename(path.dirname(abs)) + ".pdf")
);

const server = http.createServer((req, res) => {
  const rel = decodeURIComponent(req.url.split("?")[0]);
  const file = path.join(root, rel);
  /* Never serve outside the root, however the URL is written. */
  if (!file.startsWith(root)) { res.writeHead(403).end(); return; }
  fs.readFile(file, (err, buf) => {
    if (err) { res.writeHead(404).end(); return; }
    res.writeHead(200, { "content-type": TYPES[path.extname(file).toLowerCase()] || "application/octet-stream" });
    res.end(buf);
  });
});

server.listen(0, "127.0.0.1", () => {
  const url = "http://127.0.0.1:" + server.address().port + "/" +
              path.relative(root, abs).replace(/\\/g, "/") + query;

  execFile(chrome, [
    "--headless=new",
    "--disable-gpu",
    "--no-pdf-header-footer",     // no browser URL/date furniture on the sheet
    "--print-to-pdf=" + out,
    url,
  ], (err) => {
    server.close();
    if (err && !fs.existsSync(out)) { console.error(err.message); process.exit(1); }
    if (!fs.existsSync(out)) { console.error("Chrome reported no error but wrote nothing."); process.exit(1); }

    /* The stylesheet either loaded or it did not. Times New Roman is not in
       any font stack on this site, so its presence means it did not. */
    if (fs.readFileSync(out).includes("TimesNewRoman")) {
      console.error("FAIL: " + path.basename(out) + " came out in Times New Roman, " +
                    "which means the stylesheet did not load. The PDF is unstyled - " +
                    "do not ship it.");
      process.exit(1);
    }
    console.log(`${path.basename(out)}  ${(fs.statSync(out).size / 1024).toFixed(0)} KB`);
  });
});
