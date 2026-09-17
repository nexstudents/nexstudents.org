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
/* 2026-09-10: a free sheet's printable lives at <sheet>/print/index.html, and
   <sheet>/index.html is its product page. The PDF still belongs in <sheet>/,
   named after <sheet>, so step up out of print/. */
const sheetDir = path.basename(path.dirname(abs)) === "print"
  ? path.dirname(path.dirname(abs)) : path.dirname(abs);
const out = path.resolve(
  rest[1] || path.join(sheetDir, path.basename(sheetDir) + ".pdf")
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

  /* 🚨 --print-to-pdf PRINTED CHROME’S ERROR PAGE. Found 2026-09-17: Paul could
     not open one of these in three different viewers. The files were VALID
     PDFs - right header, xref, trailer - which is why every check passed. The
     tell was /Count 1 on a three-page sheet, and a /Title of "127.0.0.1:PORT"
     instead of the worksheet name. Chrome had rendered its own "site can’t be
     reached" page and printed that.
     The one-shot flag gives Chrome no way to report a failed load: it exits 0,
     the file exists, and nothing downstream can tell. So drive it over CDP,
     wait for the page, CHECK IT LOADED, then print from the open page. */
  (async () => {
    const cdp = 9700 + Math.floor(Math.random() * 300);
    const profile = fs.mkdtempSync(path.join(require("os").tmpdir(), "ns-pdf-"));
    const proc = require("child_process").spawn(chrome, ["--headless","--disable-gpu",
      "--no-first-run","--no-default-browser-check",
      "--remote-debugging-port=" + cdp, "--user-data-dir=" + profile, "about:blank"], { stdio: "ignore" });
    const nap = (ms) => new Promise((r) => setTimeout(r, ms));
    let ws = ""; const until = Date.now() + 20000;
    while (Date.now() < until && !ws) {
      try { const r = await fetch("http://127.0.0.1:" + cdp + "/json");
        if (r.ok) { const l = await r.json();
          const pg = (l||[]).find(t => t.type === "page" && t.webSocketDebuggerUrl);
          ws = pg ? pg.webSocketDebuggerUrl : ""; } } catch (e) {}
      if (!ws) await nap(200);
    }
    if (!ws) { proc.kill(); server.close(); console.error("Chrome did not open its debugging port"); process.exit(1); }
    const sock = new WebSocket(ws); let id = 0; const pend = new Map();
    await new Promise((ok,no) => { sock.onopen = ok; sock.onerror = () => no(new Error("socket")); });
    sock.onmessage = (m) => { const d = JSON.parse(m.data); if (d.id && pend.has(d.id)) { pend.get(d.id)(d.result||{}); pend.delete(d.id); } };
    const send = (me,pa) => new Promise(ok => { const n = ++id; pend.set(n, ok); sock.send(JSON.stringify({id:n,method:me,params:pa||{}})); });
    await send("Page.enable");
    await send("Page.navigate", { url });
    await nap(3500);
    /* ⭐ PROVE IT LOADED. The error page carries the host as its title. */
    const t = await send("Runtime.evaluate", { expression: "document.title", returnByValue: true });
    const title = (t && t.result && t.result.value) || "";
    if (!title || /^[0-9]+.[0-9]+.[0-9]+.[0-9]+/.test(title)) {
      sock.close(); proc.kill(); server.close();
      console.error("the page did not load; Chrome title was: " + title); process.exit(1);
    }
    const r = await send("Page.printToPDF", { printBackground: true, preferCSSPageSize: true });
    sock.close(); proc.kill();
    if (!r || !r.data) { server.close(); console.error("Chrome returned no PDF"); process.exit(1); }
    fs.writeFileSync(out, Buffer.from(r.data, "base64"));
    ((err) => {
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
  })();
  })().catch(e => { try { server.close(); } catch(x){} console.error(e.message); process.exit(1); });
});
