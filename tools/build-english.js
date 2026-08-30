#!/usr/bin/env node
/* Renders every entry in english-lessons.js into /lessons/<id>/index.html.
 *
 *   node tools/build-english.js .
 *
 * An English lesson is its own template, not the history one and not the
 * maths one. History teaches by story and asks questions answerable from the
 * text; maths teaches by worked example and makes you show your work. A rule
 * is neither: it has to be stated, demonstrated, and then applied to a
 * sentence the student has never seen.
 *
 * ⭐ THE GUARD IS THE POINT OF THIS FILE.
 *
 * `practice[].answer` is an index into the sentence split on spaces, and it is
 * written by hand in the data file. Get it wrong by one and the page marks a
 * correct answer wrong — the single worst bug this site could ship, because a
 * student who is already behind will believe the page over himself.
 *
 * So the index is RECOMPUTED here from `practice[].verb` and the build FAILS
 * on any mismatch. Same principle as the states game refusing to build when a
 * capital projects outside its own state: the guard is the only reason the
 * data can be trusted, and it has to run every time rather than once.
 *
 * The build also refuses a lesson whose Ground Control block is incomplete.
 * That block is the whole reason a parent would use this instead of a
 * workbook, and a lesson that quietly shipped without it would look finished.
 */
"use strict";
const fs = require("fs");
const path = require("path");
const { ENGLISH } = require("./english-lessons.js");
const { navMarkup, navScript, modeBoot, faviconTags } = require("./nav.js");
/* 🚨 ONE PLAYER, EVERY LESSON TYPE. The reading voice is not re-implemented
   here; it is sliced out of lesson-template.html so English, maths, history
   and later science all run the identical engine. Paul, 2026-08-29: "i want
   you to match the way we made the voice exactly like the history lessons
   even with the bar to go back so he can repeat. this is the standard for all
   future lessons we will have on the entire site." */
const player = require("./voice-player.js");

const ROOT = process.argv[2] || ".";
const TPL = path.join(__dirname, "english", "template.html");
const template = fs.readFileSync(TPL, "utf8");

function fail(msg) { console.error("FAIL: " + msg); process.exit(1); }

/* The five palettes are DEFINED in the history template and lifted from it,
   so the three lesson types can never drift apart on colour. Copied from
   build-math.js on purpose — one source of truth, two readers. */
function themesBlock() {
  const src = fs.readFileSync(path.join(__dirname, "lesson-template.html"), "utf8");
  const a = src.indexOf("var THEMES = {");
  const b = src.indexOf("\n};", a);
  if (a < 0 || b < 0) fail("could not lift THEMES out of lesson-template.html");
  const block = src.slice(a, b + 3);
  for (const key of ["forest", "ocean", "ember", "graphite"]) {
    if (!block.includes(key + ":")) fail("THEMES block is missing " + key);
  }
  return block;
}

/* Strip punctuation so "cleared." matches the verb "cleared". Apostrophes stay
   because they are inside words, not around them. */
const bare = (w) => w.replace(/[^A-Za-z']/g, "").toLowerCase();

/* ── the guard ──────────────────────────────────────────────────────────── */
function verifyPractice(L) {
  L.practice.forEach((p, n) => {
    const where = L.slug + " practice[" + n + "]";
    const words = p.sentence.split(" ");

    const hits = [];
    words.forEach((w, i) => { if (bare(w) === bare(p.verb)) hits.push(i); });

    if (hits.length === 0)
      fail(where + ': the verb "' + p.verb + '" does not appear in "' + p.sentence + '"');
    if (hits.length > 1)
      fail(where + ': the verb "' + p.verb + '" appears ' + hits.length + " times in \"" + p.sentence +
           '" — the click target is ambiguous, reword the sentence');
    if (hits[0] !== p.answer)
      fail(where + ': answer is ' + p.answer + ' ("' + words[p.answer] + '") but the verb "' +
           p.verb + '" is at index ' + hits[0] + ' — this page would mark a correct answer wrong');

    if (!p.why || p.why.length < 20)
      fail(where + ": every answer needs a why, and it has to say more than 'correct'");
  });

  /* ⭐ POSITION SPREAD. The first draft of the verbs lesson put eight of ten
     verbs at index 2, so "always click the third word" scored 80% without
     understanding anything — the sentence-level version of writing every
     correct answer first in a multiple choice. Vary the SUBJECT length to fix
     it, never the verb. */
  const spread = {};
  L.practice.forEach((p) => { spread[p.answer] = (spread[p.answer] || 0) + 1; });
  const worst = Object.keys(spread).reduce((a, b) => (spread[a] > spread[b] ? a : b));
  const share = spread[worst] / L.practice.length;
  if (share > 0.4)
    fail(L.slug + ": " + spread[worst] + " of " + L.practice.length + " verbs sit at word " +
         worst + " (" + Math.round(share * 100) + "%). A student can score that high by " +
         "clicking the same position every time. Vary the length of the subjects.");
}

/* A worked example whose underlined word is not in its own sentence would
   render as plain text with nothing marked, and look like an oversight rather
   than a bug. */
function verifyExamples(L) {
  L.examples.forEach(([sentence, verb, why], n) => {
    const where = L.slug + " examples[" + n + "]";
    const hit = sentence.split(" ").findIndex((w) => bare(w) === bare(verb));
    if (hit < 0) fail(where + ': "' + verb + '" does not appear in "' + sentence + '"');
    if (!why || why.length < 20) fail(where + ": needs a real explanation");
  });
}

function verifyGround(L) {
  const g = L.ground || {};
  for (const k of ["whatItIs", "whyItMatters", "commonMistake"]) {
    if (!g[k] || g[k].length < 60)
      fail(L.slug + ": ground." + k + " is missing or too thin. This block is the reason the " +
           "lesson exists — a workbook already has the exercises.");
  }
  if (!Array.isArray(g.whenStuck) || g.whenStuck.length < 2)
    fail(L.slug + ': ground.whenStuck needs at least two things to actually SAY, not "review the material"');
}

/* ── rendering ──────────────────────────────────────────────────────────── */
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function groundHtml(g) {
  return [
    '<h4>What it is</h4><p>' + g.whatItIs + '</p>',
    '<h4>Why it matters</h4><p>' + g.whyItMatters + '</p>',
    '<h4>What he will get wrong</h4><p>' + g.commonMistake + '</p>',
    '<h4>What to say when he is stuck</h4><ul>' +
      g.whenStuck.map((s) => "<li>" + s + "</li>").join("") + '</ul>'
  ].join("\n");
}

function partsHtml(parts) {
  return parts.map((p) =>
    '<div class="part">\n  <h3>' + p.title + '</h3>\n' +
    p.s.map((line) => "  <p>" + esc(line) + "</p>").join("\n") +
    "\n</div>"
  ).join("\n");
}

function examplesHtml(examples) {
  return examples.map(([sentence, verb, why]) => {
    const marked = sentence.split(" ").map((w) =>
      bare(w) === bare(verb) ? "<u>" + esc(w) + "</u>" : esc(w)).join(" ");
    return '<div class="ex">\n  <p class="sent">' + marked + '</p>\n' +
           '  <p class="why">' + esc(why) + "</p>\n</div>";
  }).join("\n");
}

const written = [];
for (const L of ENGLISH) {
  verifyGround(L);
  verifyExamples(L);
  verifyPractice(L);

  /* The page only ever needs the sentence, the index and the why. Shipping
     `verb` too would put the answer in plain sight in the page source. */
  const practiceForPage = L.practice.map((p) => ({
    sentence: p.sentence, answer: p.answer, why: p.why
  }));

  let h = template
    .replace(/__TITLE__/g, L.title)
    .replace(/__DEK__/g, L.dek)
    .replace(/__ID__/g, L.id)
    .replace("__GROUND__", groundHtml(L.ground))
    .replace("__RULE_SHORT__", L.rule.short)
    .replace("__RULE_LONG__", L.rule.long)
    .replace("__RULE_TEST__", L.rule.test
      ? '<p class="ruletest"><b>Run this test.</b> ' + L.rule.test + "</p>" : "")
    .replace("__PLAYER_CSS__", player.playerCss)
    .replace("__FIELD_CSS__", player.fieldCss)
    .replace("__PLAYER_MARKUP__", player.playerMarkup)
    .replace("__PLAYER_JS__", player.playerScript)
    .replace("__EXAMPLES_HTML__", examplesHtml(L.examples))
    .replace("__PRACTICE_NOTE__", L.practiceNote ||
      "Ten sentences. Click the verb in each one. A wrong click tells you why it is wrong and lets you try again, so nothing here counts against you.")
    .replace("__PARTS__", JSON.stringify(L.parts))
    .replace("__PRACTICE__", JSON.stringify(practiceForPage))
    .replace("__THEMES__", themesBlock)
    .replace("__CANONICAL__", '<link rel="canonical" href="https://nexstudents.org/lessons/' + L.id + '/">')
    .replace("__MODEBOOT__", modeBoot)
    .replace("__FAVICON__", faviconTags)
    .replace("__NAV__", () => navMarkup(null, "navbtn"))
    .replace("__NAVSCRIPT__", navScript);

  for (const slot of ["__TITLE__", "__DEK__", "__ID__", "__GROUND__", "__RULE_SHORT__",
                      "__RULE_LONG__", "__RULE_TEST__", "__PARTS_HTML__", "__EXAMPLES_HTML__",
                      "__PRACTICE_NOTE__", "__PARTS__", "__PRACTICE__", "__THEMES__",
                      "__PLAYER_CSS__", "__FIELD_CSS__", "__PLAYER_MARKUP__", "__PLAYER_JS__",
                      "__CANONICAL__", "__MODEBOOT__", "__FAVICON__", "__NAV__", "__NAVSCRIPT__"]) {
    if (h.includes(slot)) fail("unfilled slot " + slot + " in " + L.slug);
  }

  const dir = path.join(ROOT, "lessons", ...L.id.split("/"));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), h, "utf8");

  written.push({
    id: L.id,
    parts: L.parts.length,
    examples: L.examples.length,
    practice: L.practice.length,
    answerSpread: L.practice.reduce((m, p) => { m[p.answer] = (m[p.answer] || 0) + 1; return m; }, {})
  });
}
console.log(JSON.stringify(written, null, 1));
