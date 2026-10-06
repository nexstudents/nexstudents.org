/* voice-run.js — NexVoice for the lessons that still need it, inside the free tier.

     node tools/voice-run.js plan      what WOULD be voiced, and its billable characters. Free.
     node tools/voice-run.js bake      voice only those lessons (needs GOOGLE_TTS_KEY in the env)
     node tools/voice-run.js upload    move the new clips to R2, then point the manifests at it

   🚨 WHY THIS EXISTS. There are no R2 S3 keys on this machine, so a plain
   `bake-voice.js .` cannot reuse clips that live only in R2 and re-voices EVERY
   lesson. That used the whole month's quota on 2026-09-24. This runs bake-voice
   with `--only <id>` for just the lessons whose clips are missing, and stops at CAP.

   🚨 BILLING (Google's pricing page, checked 2026-10-05): Neural2 gives 1M free
   characters a month. SSML counts EXCEPT <mark>, so the per-word marks are free
   but `'` escaped to `&apos;` is six characters. `plan` counts it that way.
   Paul, 2026-10-05: no bakes until the monthly reset once the free tier is used.

   The key: `$env:GOOGLE_TTS_KEY = (Get-Clipboard | Out-String).Trim()`, never echoed.
   Upload uses wrangler (logged in as nexedgetech@gmail.com), three at a time,
   because ten in parallel got rate-limited on 2026-09-15. */
"use strict";
const fs = require("fs"), path = require("path"), { spawnSync, spawn } = require("child_process");

const TOOLS = __dirname;
const SITE = path.join(TOOLS, "..");
const BASE = "https://nexstudents-media.nexedgetech.workers.dev/";
const WRANGLER = path.join(process.env.APPDATA || "", "npm", "node_modules", "wrangler", "bin", "wrangler.js");
const CAP = 700000;   /* plain-text characters per run, as bake-voice.js reports them */

/* bake-voice.js runs on load, so borrow its own sentence and reuse logic by
   loading everything above main(). The plan can then never disagree with the bake. */
function bakeInternals() {
  let src = fs.readFileSync(path.join(TOOLS, "bake-voice.js"), "utf8");
  src = src.slice(0, src.indexOf("(async function main()")).replace(/^#!.*/, "");
  src = src.split('require("./').join("require(" + JSON.stringify(TOOLS + path.sep) + " + \"");
  src += "\nmodule.exports = { lessons, sha, xmlEsc, TRACKS, RATE };";
  const m = { exports: {} };
  const key = process.env.GOOGLE_TTS_KEY;
  process.env.GOOGLE_TTS_KEY = key || "plan-only";   /* its no-key exit sits above main() */
  new Function("module", "require", "process", "__dirname", src)(m, require, process, TOOLS);
  if (key) process.env.GOOGLE_TTS_KEY = key; else delete process.env.GOOGLE_TTS_KEY;
  return m.exports;
}

function plan() {
  const { lessons, sha, xmlEsc, TRACKS, RATE } = bakeInternals();
  const out = [];
  for (const L of lessons()) {
    const dir = path.join(SITE, "lessons", ...L.id.split("/"));
    if (!fs.existsSync(dir)) continue;
    let prev = null;
    try { prev = JSON.parse(fs.readFileSync(path.join(dir, "voice.json"), "utf8")); } catch (e) {}
    let text = 0, billed = 0;
    for (const T of TRACKS) {
      const p = prev && prev.tracks ? prev.tracks.find((x) => x.id === T.id) : null;
      for (const s of L.sentences) {
        const h = sha(T.voice + "|" + RATE + "|" + s);
        if (p && p.clips && p.clips.find((c) => c && c.hash === h)) continue;
        text += s.length;
        billed += ("<speak>" + s.split(" ").map(xmlEsc).join(" ") + "</speak>").length;
      }
    }
    if (text) out.push({ id: L.id, text, billed });
  }
  return out;
}

function bake() {
  if (!process.env.GOOGLE_TTS_KEY) { console.log("FAIL: no GOOGLE_TTS_KEY in the environment"); process.exit(1); }
  const todo = plan();
  if (!todo.length) { console.log("nothing to voice"); return; }
  let billed = 0;
  for (const { id } of todo) {
    const r = spawnSync(process.execPath, ["tools/bake-voice.js", ".", "--only", id],
      { cwd: SITE, env: process.env, encoding: "utf8" });
    const out = (r.stdout || "") + (r.stderr || "");
    const m = out.match(/(\d+) characters billed/);
    if (r.status !== 0 || !m) { console.log("FAIL " + id + "\n" + out.slice(-600)); process.exit(1); }
    billed += +m[1];
    console.log(id + "  +" + m[1] + "  total " + billed);
    if (billed > CAP) { console.log("STOP: over the " + CAP + " cap"); process.exit(1); }
  }
  console.log("BAKE DONE, " + billed + " characters. Next: node tools/voice-run.js upload");
}

function put(key, file) {
  return new Promise((res) => {
    const p = spawn(process.execPath, [WRANGLER, "r2", "object", "put", "nexstudents-media/" + key,
      "--file", file, "--content-type", "audio/mpeg", "--remote"], { cwd: SITE });
    let err = "";
    p.stderr.on("data", (d) => (err += d));
    p.on("close", (code) => res(code === 0 ? null : err.slice(-300)));
  });
}
async function live(key) {
  try { return (await fetch(BASE + key, { method: "HEAD" })).status === 200; } catch (e) { return false; }
}

/* A clip with a src starting "/" was written to disk by a non-R2 bake and is not
   on R2 yet. The manifest is only rewritten after EVERY clip is confirmed up, so
   a half-finished upload never points a lesson at missing audio. */
function pendingManifests() {
  const found = [];
  (function walk(d) {
    for (const it of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, it.name);
      if (it.isDirectory() && it.name !== "voice") walk(p);
      else if (it.name === "voice.json" && /"src": *"\//.test(fs.readFileSync(p, "utf8"))) found.push(p);
    }
  })(path.join(SITE, "lessons"));
  return found;
}

async function upload() {
  const files = pendingManifests();
  const jobs = [];
  for (const f of files) {
    const doc = JSON.parse(fs.readFileSync(f, "utf8"));
    for (const t of doc.tracks) for (const c of t.clips)
      if (c.src.startsWith("/")) jobs.push({ key: c.src.slice(1), file: path.join(SITE, c.src.slice(1)) });
  }
  console.log(files.length + " lessons, " + jobs.length + " clips to upload");
  let done = 0; const fails = [];
  async function worker() {
    while (jobs.length) {
      const j = jobs.shift();
      if (await live(j.key)) { done++; continue; }
      let e = null;
      for (let a = 0; a < 5 && (e = await put(j.key, j.file)); a++)
        await new Promise((r) => setTimeout(r, 2000 * (a + 1)));
      if (e) fails.push(j.key + " :: " + e); else done++;
      if (done % 200 === 0) console.log("  " + done + " up");
    }
  }
  await Promise.all([worker(), worker(), worker()]);
  console.log("uploaded or present " + done + ", failed " + fails.length);
  if (fails.length) { console.log(fails.slice(0, 5).join("\n")); process.exit(1); }
  for (const f of files) {
    const doc = JSON.parse(fs.readFileSync(f, "utf8"));
    for (const t of doc.tracks) for (const c of t.clips) if (c.src.startsWith("/")) c.src = c.src.slice(1);
    doc.base = BASE;
    fs.writeFileSync(f, JSON.stringify(doc, null, 1));
  }
  console.log("MANIFESTS POINTED AT R2. Commit lessons/*/voice.json only; voice/ stays gitignored.");
}

const cmd = process.argv[2];
if (cmd === "plan") {
  const p = plan();
  p.forEach((x) => console.log(x.id + "  " + x.billed));
  const t = p.reduce((a, x) => a + x.billed, 0);
  console.log(p.length + " lessons, " + t + " billable characters (free tier 1,000,000 a month)");
} else if (cmd === "bake") bake();
else if (cmd === "upload") upload();
else console.log("usage: node tools/voice-run.js plan | bake | upload");
