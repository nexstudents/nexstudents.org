/* lesson-back.js — where a lesson's back link goes. ONE rule, four builders.
   ─────────────────────────────────────────────────────────────────────────
   🚨 THIS EXISTS BECAUSE THE SAME BUG SHIPPED FOUR TIMES.

   Paul, 2026-09-02: "I don't know why you keep trying to combine all of the
   sheets together? this doesn't feel like a proper site with you doing that.
   the tab back should be the proper tab back. like 4th grade / 4th grade
   worksheets or 4th grade lessons / then inside those individual lessons or
   sheets."

   The history: lesson-template.html hardcoded /history/ so every lesson said
   History (fixed 2026-08-31). build-worksheets.js hardcoded
   /<subject>/worksheets/ in all six of its builders (fixed 2026-09-02). And
   math/template.html, integers/template.html and english/template.html each
   hardcoded /maths/ or /english/, so eight single-grade lessons pointed at a
   subject root instead of the shelf the student came from.

   ⭐ A NAV TARGET WRITTEN AS A LITERAL WILL BE WRONG FOR SOME PAGE. Derive it
   from the item's own data, keep it in one place, and fail the build when the
   target does not exist.

   The rule:
     one grade   ->  /grade-<n>/<subject>/lessons/   "4th Grade Maths"
     many grades ->  /<subject>/lessons/             "Maths"
     L.back      ->  overrides both, for the rare lesson that needs it

   ⚠️ Multi-grade genuinely has no single shelf to return to. The subject
   LESSONS page is the honest answer - not the subject root, which is a
   different page and was what the old templates pointed at.
   ───────────────────────────────────────────────────────────────────────── */
"use strict";
const fs = require("fs");
const path = require("path");

const ORDINAL = { 1: "1st", 2: "2nd", 3: "3rd" };
const ordinal = (g) => (g === "K" || g === "k")
  ? "Kindergarten"
  : (ORDINAL[g] || g + "th") + " Grade";

const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

/* L        the lesson, needs L.shelf.grades and optionally L.back
   subject  url segment, lowercase - "maths", "english", "science", "history"
   ROOT     site root, so the target can be proved to exist
   who      identifier for the failure message                              */
function backFor(L, subject, ROOT, who) {
  const shelf = L.shelf || {};
  const grades = shelf.grades || [];
  const one = grades.length === 1 ? grades[0] : null;

  const href = L.back ? L.back.href
    : one != null ? "/grade-" + String(one).toLowerCase() + "/" + subject + "/lessons/"
    : "/" + subject + "/lessons/";

  const label = L.back ? L.back.label
    : one != null ? ordinal(one) + " " + (shelf.subject || cap(subject))
    : (shelf.subject || cap(subject));

  /* 🚨 A back link to nowhere is worse than no back link, so this is fatal
     rather than a warning. grade-7/science/ has no index.html - the shelf is
     grade-7/science/lessons/ - and that is exactly the mistake this catches. */
  const rel = href.replace(/^\/|\/$/g, "");
  if (!fs.existsSync(path.join(ROOT, rel, "index.html"))) {
    console.error("FAIL: " + (who || L.id || "lesson") + " back link points at " +
      href + ", which has no index.html. Point it at a page that exists.");
    process.exit(1);
  }
  return { href, label };
}

module.exports = { backFor, ordinal };
