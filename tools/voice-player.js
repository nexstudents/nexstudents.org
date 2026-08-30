/* ─────────────────────────────────────────────────────────────────────────
   THE READING PLAYER, IN ONE PLACE.

   🚨 THIS FILE EXISTS BECAUSE I BUILT THE PLAYER THREE TIMES AND GOT IT WRONG
   THREE TIMES. Maths got its own stepped narrator, the states game got a bad
   device voice, and the first English lesson got a bare speechSynthesis loop.
   Paul, 2026-08-29: "i also dont understand why you dont use the same ai voice
   model that we have been using for the history lesson in our english lessons?
   you did the same before with the math until i told you to fix it."

   `Projects/nexstudents/CLAUDE.md` had already called it, on 2026-08-26:
   "Next lesson type: pull it into one shared partial injected by both
   builders, the way THEMES already is, rather than copying it a third time."
   That is what this is. It should have existed before the English lesson did.

   HOW IT WORKS: nothing is re-implemented here. The player is SLICED out of
   lesson-template.html at build time, between its own section markers, exactly
   the way build-math.js already lifts the THEMES literal. There is one
   implementation and every lesson type reads it, so they physically cannot
   drift apart again.

   ⚠️ THE MARKERS ARE LOAD-BEARING. lesson-template.html must keep its
   its `---------- player ----------` style section comments in place and in
   order. If one is renamed, this fails the build loudly rather than silently
   shipping a lesson with no voice.

   WHAT A HOST TEMPLATE MUST PROVIDE:
     - a `<div id="story">` for the reader to render into
     - a `var PARTS = [{ title, s:[sentence, ...] }, ...]` before the script
     - a `var LESSON_ID = "..."` (used for the resume position key)
     - the nav's five palettes, via THEMES, which the script also expects
   Everything else - the markup, the CSS, the engine - comes from here.

   THE STANDARD, set by Paul 2026-08-29 and not to be re-litigated per lesson:
     graphite is the default theme
     en-GB-Neural2-B, UK male, is the default voice
     back / play / forward centred, with a scrub bar under it
     one player, every lesson type
   ───────────────────────────────────────────────────────────────────────── */
"use strict";
const fs = require("fs");
const path = require("path");

const SRC = path.join(__dirname, "lesson-template.html");

function fail(msg) {
  console.error("FAIL: voice-player.js — " + msg);
  process.exit(1);
}

function read() {
  if (!fs.existsSync(SRC)) fail("cannot find lesson-template.html, the one source of the player");
  return fs.readFileSync(SRC, "utf8");
}

/* Slice from one section marker up to the next. Both must exist. */
function between(src, startMarker, endMarker, what) {
  const a = src.indexOf(startMarker);
  if (a < 0) fail("marker missing: " + startMarker + " (needed for " + what + ")");
  const b = src.indexOf(endMarker, a + startMarker.length);
  if (b < 0) fail("end marker missing: " + endMarker + " (needed for " + what + ")");
  const out = src.slice(a, b);
  if (!out.trim()) fail(what + " sliced empty");
  return out;
}

/* ── the pieces ─────────────────────────────────────────────────────────── */

/* Player chrome + the sentence/word styles the highlighting needs. Stops at
   the word-card styles, which belong to the history lesson only. */
function playerCss() {
  const src = read();
  const css = between(src,
    "/* ---------- player ---------- */",
    "/* ---------- words ---------- */",
    "player CSS");
  for (const must of [".player", ".pcontrols", ".scrub", ".sent", ".w"]) {
    if (!css.includes(must)) fail("player CSS is missing " + must);
  }
  return css;
}

/* The field, arrow and key-panel rules live at the end of the stylesheet,
   after the originals they deliberately override. Order matters: these must
   come last or the old dark-filled control rules win. That exact bug shipped
   on 2026-08-29 when the block landed in the wrong <style> tag. */
function fieldCss() {
  const src = read();
  const a = src.indexOf("/* ── FORM FIELDS ─");
  if (a < 0) fail("the FORM FIELDS block is gone from lesson-template.html");
  const b = src.indexOf("</style>", a);
  if (b < 0) fail("FORM FIELDS block has no closing style tag");
  return src.slice(a, b);
}

function playerMarkup() {
  const src = read();
  const a = src.indexOf('<div class="player" id="player">');
  if (a < 0) fail("player markup not found");
  const end = src.indexOf('<p class="nospeech" id="nospeech">', a);
  if (end < 0) fail("player markup end not found");
  const close = src.indexOf("</div>", end);
  const markup = src.slice(a, close + 6);
  for (const must of ['id="back"', 'id="play"', 'id="fwd"', 'id="scrub"', 'id="rate"', 'id="keyToggle"']) {
    if (!markup.includes(must)) fail("player markup is missing " + must);
  }
  return markup;
}

/* Saved settings, the palettes, the story builder and the whole read-aloud
   engine. Stops before the word cards, which are history-only. */
function playerScript() {
  const src = read();
  /* 🚨 THE SLICE MUST NOT SWALLOW THE LESSON DATA. In lesson-template.html the
     PARTS / WORDS / QUESTIONS literals sit BETWEEN the settings block and the
     story builder, so a single slice from "saved settings" to "word cards"
     carries the Roman history content with it. That shipped: the maths lesson
     rendered "For almost five hundred years, Rome had no king." Caught
     2026-08-29 by the sentence count disagreeing with the caption count.

     So it is two slices with the data cut out of the middle: the settings and
     palettes, then the story builder and the engine. */
  const head = between(src,
    "/* ---------- saved settings and progress ----------",
    "var PARTS = [",
    "player settings");
  const body = between(src,
    "/* ---------- build the story ---------- */",
    "/* ---------- word cards ---------- */",
    "player engine");
  const js = head + String.fromCharCode(10) + body;

  /* The guard that makes the cut trustworthy: the engine must arrive with no
     lesson content in it at all. */
  for (const leak of ["var PARTS = [", "var WORDS = [", "var QUESTIONS = [", "Rome"]) {
    if (js.includes(leak))
      fail("the player slice picked up lesson data (" + leak + "). It must carry the " +
           "engine only — every lesson supplies its own PARTS.");
  }
  for (const must of ["en-GB-Neural2-B", "function resume", "function keyboard", "var SENT"]) {
    if (!js.includes(must)) fail("player script is missing " + must);
  }
  /* The standard, asserted rather than assumed. */
  if (!js.includes('load("theme", "graphite")'))
    fail("graphite is no longer the default theme — that is the site standard, set 2026-08-29");
  return js;
}

module.exports = { playerCss, fieldCss, playerMarkup, playerScript };
