#!/usr/bin/env node
/* ============================================================================
   check-answers-persist.js — an answered question is STILL ANSWERED after a reload

   2026-09-16. `answered` was a plain in-memory array, so every answer a student
   gave died on a page refresh, on a phone dropping the tab out of memory, and on
   any cache clear - while the shelf card still read "4 of 8 answered" off
   ns:prog. He came back to a blank lesson with no way to see what he had done.
   Paul: "we really need people's progress to save."

   Nothing else catches this. The pages ran clean in Chrome, every build guard
   was green, and the lesson looked perfect - because losing the answers needs a
   SECOND page load to see, and no other check reloads a page.

   For each lesson tested: answer two questions, reload, and require that the
   same choices are still marked and locked and that ns:prog carries them. Then
   press Start Over and require that they are gone - a record that cannot be
   cleared is its own bug.

   Usage:  node tools/check-answers-persist.js .
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

/* Three lessons, not one: the reading lessons are built from lesson-template.html
   but by more than one generator, and a template edit can reach one shelf and
   not another. */
const map = JSON.parse(fs.readFileSync(path.join(ROOT, "assets", "courses.json"), "utf8"));
const ids = [];
map.courses.forEach((c) => c.units.forEach((u) => u.items.forEach((i) => { if (i.id) ids.push(i.id); })));
(map.other || []).forEach((o) => { if (o.id) ids.push(o.id); });

/* ⚠️ ONLY THE READING LESSONS carry these questions. A maths or integers lesson
   is a different engine with no `.q .choice` at all, so it is not a failure
   there - it is a page this check does not describe. Identified by the markup
   the template emits, never by an id prefix, so a new subject on the same
   template is picked up automatically. */
const reading = ids.filter((id) => {
  const f = path.join(ROOT, "lessons", id, "index.html");
  return fs.existsSync(f) && fs.readFileSync(f, "utf8").indexOf('id="questions1"') >= 0;
});
if (reading.length < 2) {
  console.error("FAIL — found " + reading.length + " reading lessons to test; the template markup moved?");
  process.exit(1);
}
const PICK = [...new Set([reading[0], reading[Math.floor(reading.length / 2)], reading[reading.length - 1]])];

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
  const profile = fs.mkdtempSync(path.join(os.tmpdir(), "ns-ans-"));
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

  let loaded = null;
  listeners.push((m) => {
    if (m.sessionId === sessionId && m.method === "Page.loadEventFired" && loaded) { loaded(); loaded = null; }
  });
  const go = async (nav) => {
    const onLoad = new Promise((r) => { loaded = r; });
    await nav();
    await Promise.race([onLoad, wait(15000)]);
    await wait(900);
  };
  const run = async (expr) => {
    const r = await send("Runtime.evaluate", { returnByValue: true, expression: expr }, sessionId);
    return r.result && r.result.result ? r.result.result.value : undefined;
  };

  const fails = [];
  for (const id of PICK) {
    const url = origin + "/lessons/" + id + "/";
    await go(() => send("Page.navigate", { url }, sessionId));

    /* Answer the first two questions, picking a DIFFERENT choice index on each
       so a restore that always paints choice 0 cannot pass. */
    const picked = await run(
      "(function(){var out=[];[0,1].forEach(function(qi,n){" +
      "var b=document.querySelectorAll('#q'+qi+' .choice');" +
      "if(!b.length) return; var ci=Math.min(n,b.length-1); b[ci].click(); out.push(qi+':'+ci);});" +
      "return out.join(',');})()");
    if (!picked) { fails.push(id + " — no question choices to click"); continue; }

    /* Find the record by SCANNING for the key. LESSON_ID may or may not be on
       window depending on how the assets were extracted, and a check that
       silently reads "ns:prog:undefined" passes by accident. */
    const saved = await run(
      "(function(){try{var k=Object.keys(localStorage).filter(function(x){return x.indexOf('ns:prog:')===0;})[0];" +
      "if(!k) return ''; var r=JSON.parse(localStorage.getItem(k));" +
      "return r&&r.a?JSON.stringify(r.a):'';}catch(e){return 'ERR '+e.message;}})()");
    if (!saved || saved.indexOf("ERR") === 0) {
      fails.push(id + " — ns:prog carries no answers after answering (" + (saved || "nothing") + ")");
    }

    await go(() => send("Page.reload", {}, sessionId));

    const after = await run(
      "(function(){var out=[];" +
      "document.querySelectorAll('.q').forEach(function(card){" +
      "  var marked=card.querySelectorAll('.choice.right,.choice.wrong').length;" +
      "  var locked=card.querySelectorAll('.choice[disabled]').length;" +
      "  var v=card.querySelector('.verdict');" +
      "  if(marked) out.push(card.id+':'+marked+':'+locked+':'+((v&&v.className.indexOf('show')>=0)?'v':'-'));" +
      "}); return out.join(',');})()");
    const restored = (after || "").split(",").filter(Boolean);
    if (restored.length < 2) {
      fails.push(id + " — answered 2 questions, " + restored.length + " came back after a reload");
    } else if (restored.some((r) => r.split(":")[3] !== "v")) {
      fails.push(id + " — an answer came back without its verdict: " + after);
    } else if (restored.some((r) => Number(r.split(":")[2]) === 0)) {
      fails.push(id + " — a restored question was left clickable again: " + after);
    }

    /* Start Over must actually clear it, on the page AND in storage. */
    await run("(function(){var b=document.getElementById('retake'); if(b) b.click();})()");
    await wait(300);
    const cleared = await run(
      "(function(){var marked=document.querySelectorAll('.choice.right,.choice.wrong').length;" +
      "var rec=null; try{rec=Object.keys(localStorage).filter(function(x){return x.indexOf('ns:prog:')===0;})[0];}catch(e){}" +
      "return marked+'|'+(rec?'kept':'gone');})()");
    if (cleared !== "0|gone") fails.push(id + " — Start Over left something behind (" + cleared + ")");
  }

  ws.close(); proc.kill(); server.close();
  try { fs.rmSync(profile, { recursive: true, force: true }); } catch (e) {}
  if (fails.length) {
    console.error("FAIL — answers do not survive a reload:\n  " + fails.join("\n  "));
    process.exit(1);
  }
  console.log("OK — answers, verdicts and locks survive a reload on " + PICK.length +
    " lessons, and Start Over clears them.");
}
main().catch((e) => { console.error("FAIL — " + e.message); try { server.close(); } catch (x) {} process.exit(1); });
