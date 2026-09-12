#!/usr/bin/env node
/* ============================================================================
   check-pages-run.js — every lesson and key page RUNS without an error

   2026-09-11, twice in one night, a page was broken while all 16 checks were
   green, because none of them ran a page:
   - the account panel script had a SyntaxError (a regex escape eaten by a
     template literal) - dead on every page;
   - every maths, integers and English lesson threw on load (applyTheme read
     HIGHLIGHTS before it existed) - no problems drawn at all.
   Paul had asked for exactly this: "actually do some lessons and see if they
   actually are tracking correctly", then "we need this solid and it doesnt
   break." So a real Chrome now opens the pages at build time.

   For each page: serve the built site on a throwaway port, open it in headless
   Chrome over the DevTools protocol, collect every uncaught exception, and on
   a lesson also require that it DREW something (problems or question choices).
   A saved reading highlight and lesson palette are set first, so the paths
   that broke tonight are exercised, not skipped.

   Usage:  node tools/check-pages-run.js .
   ============================================================================ */
"use strict";
const fs = require("fs"), path = require("path"), http = require("http"), os = require("os");
const { spawn } = require("child_process");

const ROOT = path.resolve(process.argv[2] || ".");
const CANDIDATES = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
];
const chrome = CANDIDATES.find((c) => fs.existsSync(c));
if (!chrome) { console.error("FAIL — Chrome or Edge not found; cannot run the pages."); process.exit(1); }
if (typeof WebSocket !== "function") { console.error("FAIL — this Node has no WebSocket (needs Node 22+)."); process.exit(1); }

const TYPES = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript", ".json": "application/json",
  ".jpg": "image/jpeg", ".png": "image/png", ".webp": "image/webp", ".svg": "image/svg+xml", ".woff2": "font/woff2",
  ".mp3": "audio/mpeg" };

/* ── the pages ─────────────────────────────────────────────────────────── */
const map = JSON.parse(fs.readFileSync(path.join(ROOT, "assets", "courses.json"), "utf8"));
const lessonIds = new Set();
map.courses.forEach((c) => c.units.forEach((u) => u.items.forEach((i) => { if (i.id) lessonIds.add(i.id); })));
(map.other || []).forEach((o) => lessonIds.add(o.id));
const PAGES = [
  ...[...lessonIds].map((id) => ({ url: "/lessons/" + id + "/", lesson: true })),
  { url: "/" }, { url: "/grade-7/" }, { url: "/grade-7/science/lessons/" }, { url: "/account/" },
  { url: "/cart/" }, { url: "/about/" }, { url: "/worksheets/science/plant-cell/" }
];

/* ── a throwaway static server ─────────────────────────────────────────── */
const server = http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split("?")[0]);
  let f = path.join(ROOT, p);
  if (!f.startsWith(ROOT)) { res.writeHead(403); return res.end(); }
  if (fs.existsSync(f) && fs.statSync(f).isDirectory()) f = path.join(f, "index.html");
  if (!fs.existsSync(f)) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { "Content-Type": TYPES[path.extname(f)] || "application/octet-stream" });
  fs.createReadStream(f).pipe(res);
});

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

async function main() {
  await new Promise((r) => server.listen(0, "127.0.0.1", r));
  const origin = "http://127.0.0.1:" + server.address().port;
  const profile = fs.mkdtempSync(path.join(os.tmpdir(), "ns-run-"));
  const proc = spawn(chrome, ["--headless=new", "--disable-gpu", "--no-first-run", "--no-default-browser-check",
    "--remote-debugging-port=0", "--user-data-dir=" + profile, "about:blank"], { stdio: ["ignore", "ignore", "pipe"] });

  const wsUrl = await new Promise((resolve, reject) => {
    let buf = "";
    const t = setTimeout(() => reject(new Error("Chrome did not open its debugging port")), 20000);
    proc.stderr.on("data", (d) => {
      buf += d; const m = /DevTools listening on (ws:\/\/\S+)/.exec(buf);
      if (m) { clearTimeout(t); resolve(m[1]); }
    });
  });

  const ws = new WebSocket(wsUrl);
  await new Promise((r, j) => { ws.onopen = r; ws.onerror = j; });
  let nextId = 1; const pending = new Map(), listeners = [];
  ws.onmessage = (ev) => {
    const msg = JSON.parse(ev.data);
    if (msg.id && pending.has(msg.id)) { pending.get(msg.id)(msg); pending.delete(msg.id); }
    else listeners.forEach((fn) => fn(msg));
  };
  const send = (method, params = {}, sessionId) => new Promise((r) => {
    const id = nextId++; pending.set(id, r);
    ws.send(JSON.stringify(sessionId ? { id, method, params, sessionId } : { id, method, params }));
  });

  const { result: { targetId } } = await send("Target.createTarget", { url: "about:blank" });
  const { result: { sessionId } } = await send("Target.attachToTarget", { targetId, flatten: true });
  await send("Page.enable", {}, sessionId);
  await send("Runtime.enable", {}, sessionId);
  await send("Page.addScriptToEvaluateOnNewDocument", { source:
    "try{localStorage.setItem('ns:highlight','green');localStorage.setItem('ns:theme','teal');}catch(e){}" }, sessionId);

  let errors = [], loaded = null;
  listeners.push((m) => {
    if (m.sessionId !== sessionId) return;
    if (m.method === "Runtime.exceptionThrown") {
      const d = m.params.exceptionDetails;
      errors.push(((d.exception && d.exception.description) || d.text || "exception").split("\n")[0] +
        (d.url ? " @ " + d.url.replace(origin, "") + ":" + d.lineNumber : ""));
    }
    if (m.method === "Page.loadEventFired" && loaded) { loaded(); loaded = null; }
  });

  const fails = [];
  for (const pg of PAGES) {
    errors = [];
    const onLoad = new Promise((r) => { loaded = r; });
    await send("Page.navigate", { url: origin + pg.url }, sessionId);
    await Promise.race([onLoad, wait(15000)]);
    await wait(1200);
    let drew = true;
    if (pg.lesson) {
      const r = await send("Runtime.evaluate", { returnByValue: true, expression:
        "(function(){var p=document.getElementById('problems');return (p?p.children.length:0)+document.querySelectorAll('.q .choice').length;})()" },
        sessionId);
      drew = r.result && r.result.result && r.result.result.value > 0;
    }
    if (errors.length) fails.push(pg.url + "\n      " + [...new Set(errors)].join("\n      "));
    else if (!drew) fails.push(pg.url + "\n      drew no problems and no questions");
  }

  ws.close(); proc.kill(); server.close();
  try { fs.rmSync(profile, { recursive: true, force: true }); } catch (e) {}
  if (fails.length) {
    console.error("FAIL — " + fails.length + " page(s) broke when actually run:\n  " + fails.join("\n  "));
    process.exit(1);
  }
  console.log("OK — " + PAGES.length + " pages ran in Chrome with no errors (" + lessonIds.size + " lessons, each drew its work).");
}
main().catch((e) => { console.error("FAIL — " + e.message); try { server.close(); } catch (x) {} process.exit(1); });
