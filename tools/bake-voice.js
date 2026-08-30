#!/usr/bin/env node
/* ─────────────────────────────────────────────────────────────────────────
   BAKE THE READING VOICE INTO STATIC FILES.

   🚨 THIS IS THE FIX FOR MOBILE. Paul, 2026-08-29: the studio voice needs a
   Google TTS key, the key lives in localStorage, and localStorage is per
   device AND per origin. His PC has it; his S26 never has, so the phone falls
   back to the Samsung device voice - the robotic one students dislike. iPhone is
   no better: Safari only exposes a restricted voice set to web pages, and the
   good Siri voices are not among them.

   ⭐ SO THE VOICE IS GENERATED ONCE, HERE, AND SHIPPED AS FILES. After that
   every visitor gets the UK voice with no key, no account and no device TTS -
   the same on a phone, a tablet, a school Chromebook. Generation is a one-time
   cost per lesson; listening is free forever.

   The player already knows how to use this. `AUDIO`, `hasStudio()` and
   `engine = "baked"` have been sitting in lesson-template.html the whole time
   with nothing to populate them.

   ── USAGE ────────────────────────────────────────────────────────────────
     PowerShell:  $env:GOOGLE_TTS_KEY = "your-key"
     Git Bash:    export GOOGLE_TTS_KEY="your-key"
     then:        node tools/bake-voice.js .
                  node tools/bake-voice.js . --only english/verbs-action-and-being
                  node tools/bake-voice.js . --force        (re-bake everything)

   🚨 THE KEY IS READ FROM THE ENVIRONMENT AND IS NEVER WRITTEN ANYWHERE.
   It is not stored in the repo, not in the output, not in a config file. The
   generated files contain audio and timings only.

   ── WHAT IT WRITES ───────────────────────────────────────────────────────
     lessons/<id>/voice/000.mp3 ...     one clip per sentence
     lessons/<id>/voice.json            { voice, rate, clips:[{src,marks}] }

   `marks` is a start time per word, from Google's SSML timepoints - the same
   data the live fetch uses, which is what drives the word-by-word highlight.

   ⚠️ Only re-bakes what CHANGED. Each clip records a hash of its sentence, so
   editing one line in a lesson re-generates one clip, not the whole site. That
   matters: this costs money per character, and a careless rebuild of every
   lesson every time would make it expensive for no reason.
   ───────────────────────────────────────────────────────────────────────── */
"use strict";
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const ROOT = process.argv[2] || ".";
const ARGS = process.argv.slice(3);
const FORCE = ARGS.includes("--force");
const ONLY = (() => { const i = ARGS.indexOf("--only"); return i >= 0 ? ARGS[i + 1] : null; })();

/* The site standard, set by Paul 2026-08-29. Not a per-lesson choice.
   Two voices, same family: switching changes the speaker, not the style. */
const TRACKS = [
  { id: "male",   label: "NexVoice (Male)",   voice: "en-GB-Neural2-B" },
  { id: "female", label: "NexVoice (Female)", voice: "en-GB-Neural2-A" },
];
/* Baked at NATURAL speed. The player applies Slow / Normal / Fast with
   playbackRate, so one file serves all three - see playClip(). Baking at 0.85
   would stack two rate changes and make Fast wrong. */
const RATE = 1.0;

const KEY = process.env.GOOGLE_TTS_KEY || "";

/* ⚠️ HTTP REFERRER RESTRICTION. A key restricted to a website sends
   "Requests from referer <empty> are blocked" when a script calls it, because
   a script has no referrer. That restriction is worth keeping - it is what
   stops anyone else spending the key from their own page - so instead of
   asking for it to be removed, this sends the site own referer, which is the
   thing the key is already permitted for.
   Override with --referer if the allowed pattern is different. */
const REFERER = (() => {
  const i = process.argv.indexOf("--referer");
  return i >= 0 ? process.argv[i + 1] : "https://nexstudents.org/";
})();

function fail(msg) { console.error("FAIL: " + msg); process.exit(1); }

if (!KEY) {
  console.error("");
  console.error("  No GOOGLE_TTS_KEY in the environment.");
  console.error("");
  console.error("  PowerShell:  $env:GOOGLE_TTS_KEY = \"your-key\"");
  console.error("  Git Bash:    export GOOGLE_TTS_KEY=\"your-key\"");
  console.error("");
  console.error("  The key is read from the environment and never written to disk.");
  console.error("");
  process.exit(1);
}

/* ── the sentences, exactly as the page builds them ──────────────────────
   The page does PARTS.forEach(part => part.s.forEach(...)), so the order here
   must match that exactly or every clip would be off by one and the wrong
   audio would play for the highlighted line. */
function sentencesOf(parts) {
  const out = [];
  /* 🚨 An empty string is a PARAGRAPH BREAK in the page, not a sentence, and it
     never enters SENT there. Skip it here by the same rule or every clip after
     the first break plays against the wrong line. Both rules are "is it blank
     after trimming" - keep them identical. */
  parts.forEach((p) => (p.s || []).forEach((t) => { if (String(t).trim()) out.push(t); }));
  return out;
}

function lessons() {
  const list = [];
  const push = (id, parts) => { if (parts && parts.length) list.push({ id, sentences: sentencesOf(parts) }); };
  /* 🚨 partsFor(), never L.parts. The closing instructions are appended by that
     function, so reading L.parts here would bake audio that stops before the
     student is told what to do. */
  const { partsFor } = require("./lesson-instructions.js");
  try { require("./lessons.js").LESSONS.forEach((L) => push(L.id, partsFor(L))); } catch (e) { fail("lessons.js: " + e.message); }
  try { require("./english-lessons.js").ENGLISH.forEach((L) => push(L.id, partsFor(L))); } catch (e) { fail("english-lessons.js: " + e.message); }
  /* Maths used to be impossible to bake: its sentences were computed in the
     browser and existed nowhere on disk. tools/math-captions.js moved that
     arithmetic into the build, so the narration can be read here and spoken in
     the same order the page will say it. */
  try {
    const { sentencesFor } = require("./math-captions.js");
    require("./math-lessons.js").MATH.forEach((L) => {
      if (L.demo) list.push({ id: L.id, sentences: sentencesFor(L.demo, L) });
    });
  } catch (e) { fail("math-lessons.js: " + e.message); }
  return list;
}

const sha = (s) => crypto.createHash("sha1").update(s, "utf8").digest("hex").slice(0, 16);

/* ⚠️ NOT sha1. This one has a twin, nsTextHash() in lesson-template.html, that
   runs in the browser with no crypto available. FNV-1a over UTF-16 code units,
   written the same way in both files. Change one and you must change the other,
   or every lesson silently loses its baked voice. */
function textHash(list) {
  let h = 2166136261;
  const s = list.join("\n");
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = (h + ((h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24))) >>> 0;
  }
  return ("0000000" + h.toString(16)).slice(-8);
}
const xmlEsc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;").replace(/'/g, "&apos;");

/* One sentence -> MP3 + a start time per word. Identical request shape to the
   live fetch in the player, so baked and live audio are the same thing. */
async function synth(text, VOICE) {
  const words = text.split(" ");
  const ssml = "<speak>" + words.map((w, k) => '<mark name="w' + k + '"/>' + xmlEsc(w)).join(" ") + "</speak>";
  const res = await fetch("https://texttospeech.googleapis.com/v1beta1/text:synthesize?key=" + encodeURIComponent(KEY), {
    method: "POST",
    headers: { "Content-Type": "application/json", "Referer": REFERER },
    body: JSON.stringify({
      input: { ssml },
      voice: { languageCode: VOICE.slice(0, 5), name: VOICE },
      audioConfig: { audioEncoding: "MP3", speakingRate: RATE },
      enableTimePointing: ["SSML_MARK"],
    }),
  });
  const j = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(j.error ? j.error.message : "HTTP " + res.status);
  const marks = new Array(words.length).fill(0);
  (j.timepoints || []).forEach((tp) => {
    const n = parseInt(String(tp.markName).slice(1), 10);
    if (!isNaN(n) && n < marks.length) marks[n] = tp.timeSeconds;
  });
  return { audio: Buffer.from(j.audioContent, "base64"), marks };
}

(async function main() {
  const all = lessons().filter((L) => !ONLY || L.id === ONLY);
  if (!all.length) fail(ONLY ? "no lesson with id " + ONLY : "no lessons found");

  let made = 0, kept = 0, chars = 0;

  for (const L of all) {
    const dir = path.join(ROOT, "lessons", ...L.id.split("/"));
    if (!fs.existsSync(dir)) { console.log("skip (not built): " + L.id); continue; }

    const manifestPath = path.join(dir, "voice.json");
    let prevDoc = null;
    try { prevDoc = JSON.parse(fs.readFileSync(manifestPath, "utf8")); } catch (e) {}

    const tracks = [];
    for (const T of TRACKS) {
    const VOICE = T.voice;
    const outDir = path.join(dir, "voice", T.id);
    fs.mkdirSync(outDir, { recursive: true });
    /* previous clips for THIS track, so a re-bake of one voice does not
       invalidate the other */
    const prev = prevDoc && prevDoc.tracks
      ? prevDoc.tracks.filter(function(x){ return x.id === T.id; })[0]
      : null;

    const clips = [];
    for (let i = 0; i < L.sentences.length; i++) {
      const text = L.sentences[i];
      const hash = sha(VOICE + "|" + RATE + "|" + text);
      const file = String(i).padStart(3, "0") + ".mp3";
      const abs = path.join(outDir, file);
      /* look for this exact sentence anywhere in the previous manifest, not
         just at the same index */
      const old = prev && prev.clips && prev.clips.find((c) => c && c.hash === hash);

      if (!FORCE && old && fs.existsSync(path.join(ROOT, old.src.slice(1)))) {
        /* reuse the audio, but under this sentence position */
        const reusedFile = path.basename(old.src);
        if (reusedFile !== file) {
          fs.copyFileSync(path.join(ROOT, old.src.slice(1)), abs);
        }
        clips.push({ src: "/lessons/" + L.id + "/voice/" + T.id + "/" + file, marks: old.marks, hash });
        kept++; continue;
      }

      process.stdout.write("  " + L.id + " " + T.id + " [" + (i + 1) + "/" + L.sentences.length + "] ");
      let got;
      try { got = await synth(text, VOICE); }
      catch (e) { console.log("ERROR"); fail(L.id + " sentence " + i + ": " + e.message); }
      fs.writeFileSync(abs, got.audio);
      chars += text.length;
      made++;
      console.log(Math.round(got.audio.length / 1024) + "kb");
      clips.push({ src: "/lessons/" + L.id + "/voice/" + T.id + "/" + file, marks: got.marks, hash });
    }
    tracks.push({ id: T.id, label: T.label, voice: VOICE, clips: clips });
    }

    /* 🚨 The fingerprint of the text this was baked FROM. The page computes the
       same hash over the sentences it renders and REFUSES the audio if they
       differ, because a lesson edited after baking would otherwise play the old
       words under the new text - and a matching sentence COUNT does not catch
       that. It nearly shipped on 2026-08-29: the history lessons swapped a
       six-line opening block for a six-line closing one, so the count was
       identical and every clip was against the wrong line.
       ⚠️ nsTextHash() in lesson-template.html must stay identical to this. */
    fs.writeFileSync(manifestPath, JSON.stringify(
      { rate: RATE, textHash: textHash(L.sentences), tracks: tracks }, null, 1));
    console.log("wrote " + L.id + "/voice.json  (" +
      tracks.map(function(t){ return t.id + ": " + t.clips.length; }).join(", ") + ")");
  }

  /* what is on disk in total, so the trend is visible every run */
  let bytes = 0, files = 0;
  (function walk(dir){
    let items = [];
    try { items = fs.readdirSync(dir, { withFileTypes: true }); } catch (e) { return; }
    for (const it of items) {
      const p = path.join(dir, it.name);
      if (it.isDirectory()) walk(p);
      else if (it.name.endsWith(".mp3")) { bytes += fs.statSync(p).size; files++; }
    }
  })(path.join(ROOT, "lessons"));
  const mb = bytes / 1048576;

  console.log("");
  console.log("generated " + made + " clips, reused " + kept + ", " + chars + " characters billed this run.");
  console.log("audio on disk: " + files + " clips, " + mb.toFixed(1) + " MB total.");
  if (mb > 200) {
    console.log("");
    console.log("⚠️  Over 200 MB of audio. GitHub Pages serves from the repo and git keeps");
    console.log("    every version of every clip forever, so this only goes up. Worth moving");
    console.log("    the audio out of the repo before it becomes painful to clone.");
  }
  if (!made) console.log("nothing changed - no API calls were made.");
})();
