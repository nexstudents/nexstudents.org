#!/usr/bin/env node
/* check-audio-unlock.js — NexVoice must stay playable on a PHONE.
   node tools/check-audio-unlock.js .

   🚨 WHY THIS EXISTS. On 2026-09-15 NexVoice played the first sentence of a
   lesson and then read the rest in the phone's own voice. Paul heard it and
   the page insisted nothing was wrong: "i still cant get the nexvoice to play
   on mobile ... it isnt the correct voice. i think its defaulting to my phone
   ai."

   The cause was `audioEl = new Audio(src)` once per sentence. A phone grants
   playback permission to an ELEMENT, not to the page, so only the element the
   tap created may play. The one built inside onended for sentence 2 has no
   gesture behind it, play() is rejected, and the catch falls back to the
   device voice.

   🚨 NO OTHER CHECK CAN SEE THIS. It is invisible on a desktop, which has no
   gesture rule at all - four rounds of desktop testing said it worked. It
   needs a real phone or this file. So the rules are asserted on the SOURCE:

     1. exactly ONE `new Audio(` in the template, and it lives in sharedAudio()
     2. unlockAudio() is the FIRST statement of every handler that can start
        the reading, because the gesture is spent as soon as anything async
        runs and fetching a clip is async

   ⚠️ Comments are stripped FIRST. The template explains this trap in prose and
   names `new Audio()` while doing so; without stripping, the warning would
   satisfy the check it exists to describe. Same reasoning as check-nav-css. */

const fs = require("fs");
const path = require("path");

const ROOT = process.argv[2] || ".";
const FILE = path.join(ROOT, "tools", "lesson-template.html");

if (!fs.existsSync(FILE)) {
  console.error("check-audio-unlock: cannot find " + FILE);
  process.exit(1);
}

const raw = fs.readFileSync(FILE, "utf8");

/* Strip /* *​/ and // comments. Crude but this file is ours and has no regex
   literals or strings containing these pairs on the lines that matter. */
const src = raw
  .replace(/\/\*[\s\S]*?\*\//g, "")
  .replace(/^\s*\/\/.*$/gm, "");

const fail = [];

/* ── 1. one construction, in the right place ─────────────────────────────── */
const makes = [...src.matchAll(/new\s+Audio\s*\(/g)];
if (makes.length !== 1) {
  fail.push(
    "expected exactly ONE `new Audio(` in lesson-template.html, found " +
      makes.length +
      ".\n  A second one means a per-sentence element, which is the bug this " +
      "check exists for:\n  the phone will play sentence 1 and read the rest " +
      "in its own voice."
  );
} else {
  const fn = src.indexOf("function sharedAudio");
  const at = makes[0].index;
  const end = fn >= 0 ? src.indexOf("\n}", fn) : -1;
  if (fn < 0 || at < fn || (end >= 0 && at > end)) {
    fail.push(
      "`new Audio(` is not inside sharedAudio().\n  The single element must be " +
        "created there so the unlock the first tap earned is kept."
    );
  }
}

/* ── 2. every way to start the reading unlocks first ──────────────────────── */
const STARTERS = [
  { name: "the play button", re: /playBtn\.addEventListener\("click",\s*function\s*\(\)\s*\{\s*([^\n]*)/ },
  { name: "tapping a sentence", re: /if\s*\(isNaN\(i\)\)\s*return;\s*([^\n]*)/ },
  { name: "the back arrow", re: /var t = Math\.max\(0, idx - 1\);\s*([^\n]*)/ },
  { name: "the forward arrow", re: /var t = Math\.min\(SENT\.length - 1, idx \+ 1\);\s*([^\n]*)/ },
];

for (const s of STARTERS) {
  const m = src.match(s.re);
  if (!m) {
    fail.push(
      "could not find the handler for " + s.name + ".\n  It was rewritten or " +
        "renamed - re-point this check rather than deleting it."
    );
  } else if (m[1].indexOf("unlockAudio()") < 0) {
    fail.push(
      "unlockAudio() is not the first statement in " + s.name + "'s handler.\n" +
        "  Found instead: " + m[1].trim().slice(0, 60) + "\n" +
        "  It must come first: the gesture is spent as soon as anything async runs."
    );
  }
}

if (fail.length) {
  console.error("\ncheck-audio-unlock FAILED\n");
  fail.forEach((f) => console.error("  - " + f + "\n"));
  console.error("  See the ONE Audio ELEMENT note in Projects/nexstudents/CLAUDE.md.\n");
  process.exit(1);
}

console.log("OK — one shared Audio element, and every start path unlocks it first.");
