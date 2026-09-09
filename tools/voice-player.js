/* ─────────────────────────────────────────────────────────────────────────
   THE READING PLAYER, IN ONE PLACE.

   🚨 THIS FILE EXISTS BECAUSE I BUILT THE PLAYER THREE TIMES AND GOT IT WRONG
   THREE TIMES. Math got its own stepped narrator, the states game got a bad
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

/* The engine slice must contain NO lesson content. This is the control for the
   bug that shipped on 2026-08-29, when a maths lesson read out Roman history:
   if any per-lesson literal has drifted back below the settings marker, the
   slice picks it up and every other subject inherits it. Fail loudly instead. */
function checkNoLessonData(js) {
  for (const name of ["PARTS", "WORDS", "QUESTIONS", "ART", "VISUALS", "WORK",
                      "LESSON_ID", "LESSON_TITLE", "LESSON_UNIT"]) {
    const rx = new RegExp("^\\s*var\\s+" + name + "\\s*=", "m");
    if (rx.test(js)) {
      fail("the player engine slice contains `var " + name + "` — a per-lesson\n" +
           "  literal has moved BELOW the settings marker in lesson-template.html.\n" +
           "  Move it back into the data block at the top of that script, or every\n" +
           "  subject inherits this lesson's content (that is the 2026-08-29 bug).");
    }
  }
}


/* ── THE VISUAL PANEL ────────────────────────────────────────────────────────
   The pinned frame that follows the reading and shows an example on the frame it
   belongs to. Paul, 2026-09-05: "we should just call it the visual panel."

   🚨 IT IS SLICED, NOT COPIED, for the same reason the player is. The panel's
   ENGINE already travels inside playerScript, so a template that pastes its own
   markup would fork the two apart the first time either changed. Until 2026-09-08
   only lesson-template.html had the markup, which is why the panel worked on
   history and science and silently did nothing anywhere else: VISUALS declared,
   engine present, no #dbox to paint into and no error to say so. */
function panelCss() {
  const src = read();
  const css = between(src,
    "/* ---------- the explainer ----------",
    "/* ---------- the worked problems ----------",
    "visual panel CSS");
  for (const must of [".dbox", ".dbox-line", ".dbox-note", ".dbox-mark"]) {
    if (!css.includes(must)) fail("visual panel CSS is missing " + must);
  }
  return css;
}

function panelMarkup() {
  const src = read();
  const a = src.indexOf('<div class="dbox is-blank" id="dbox" hidden>');
  if (a < 0) fail("the visual panel markup is gone from lesson-template.html");
  /* Walk the divs so the slice ends at the panel's OWN close, not the first one. */
  let i = a, depth = 0;
  for (;;) {
    const o = src.indexOf("<div", i), c = src.indexOf("</div>", i);
    if (c < 0) fail("the visual panel markup has no closing tag");
    if (o !== -1 && o < c) { depth++; i = o + 4; }
    else { depth--; i = c + 6; if (depth === 0) break; }
  }
  const markup = src.slice(a, i);
  for (const must of ['id="dbox"', "dbox-sent", "dbox-kind", "dbox-line", "dbox-note"]) {
    if (!markup.includes(must)) fail("visual panel markup is missing " + must);
  }
  return markup;
}

/* Saved settings, the palettes, the story builder and the whole read-aloud
   engine. Stops before the word cards, which are history-only. */
function playerScript() {
  const src = read();
  /* 🚨 THE SLICE MUST NOT SWALLOW THE LESSON DATA. This used to be TWO slices
     with the data cut out of the middle, because PARTS / WORDS / QUESTIONS sat
     BETWEEN the settings block and the story builder. A single slice carried the
     Roman history content into every subject, and it shipped: a maths lesson
     narrated "For almost five hundred years, Rome had no king." Caught
     2026-08-29 by the sentence count disagreeing with the caption count.

     ⚠️ 2026-09-08: every per-lesson `var` moved into ONE block at the TOP of the
     template's script, above the settings marker, so the engine below it is now
     contiguous AND identical for every lesson. That is what lets the build lift
     the engine into a shared /assets/ file instead of inlining ~200 KB per page.
     One slice is correct again — but only while the data stays above. If a `var`
     ever drifts back down here, this slice starts carrying it and the old bug
     returns, so `checkNoLessonData` below refuses that outright. */
  const js = between(src,
    "/* ---------- saved settings and progress ----------",
    "/* ---------- word cards ---------- */",
    "player engine");
  checkNoLessonData(js);

  /* 🚨 THE HOST TEMPLATE MAY NOT DEFINE EVERY DATA VAR THIS SLICE TOUCHES, and a
     "use strict" engine throws ReferenceError on the first one it cannot see —
     killing the whole script, so the page renders and then does nothing.
     That shipped on 2026-09-08: moving the per-lesson block to the top of
     lesson-template.html took `var WORK` out of this slice, and long-division
     died on `if (!WORK ...)` with a blank Teacher Notes and no reading player.
     `var` hoists, so declaring here is safe: a template that defines its own
     value still wins, and one that does not gets an empty default instead of a
     crash. ⚠️ Add to this list, never remove from it. */
  const defaults =
    "/* Defaults for hosts that do not define these. See voice-player.js. */\n" +
    "if (typeof ART === 'undefined')      { var ART = {}; }\n" +
    "if (typeof VISUALS === 'undefined')  { var VISUALS = []; }\n" +
    "if (typeof WORK === 'undefined')     { var WORK = []; }\n" +
    "if (typeof WORDS === 'undefined')    { var WORDS = []; }\n" +
    "if (typeof QUESTIONS === 'undefined'){ var QUESTIONS = []; }\n\n";
  /* ⚠️ Do NOT return here. The leak guards below are what make this cut
     trustworthy, and an early return would silently skip every one of them. */

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
  return defaults + js;   /* the guarded defaults must ship WITH the engine */
}

module.exports = { playerCss, fieldCss, playerMarkup, playerScript, panelCss, panelMarkup };
