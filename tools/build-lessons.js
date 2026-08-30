#!/usr/bin/env node
/*
 * build-lessons.js — render every interactive lesson from lessons.js, using the
 * existing Republic to Empire page as the template for all the machinery
 * (read-aloud, themes, answer hunt, printable answer sheet).
 *
 *   node build-lessons.js "<site root>" "<template html>"
 *
 * Two things it fixes that hand-authoring got wrong:
 *
 * 1. ANSWER POSITION. Every correct answer was written first, so the whole
 *    quiz could be passed by always choosing A. Choices are shuffled here with
 *    a seed derived from the lesson id and question number, so the order is
 *    varied but STABLE across rebuilds - a student cannot learn a pattern, and
 *    a rebuild does not silently move the answers under him.
 *
 * 2. THE TWO-DAY SPLIT. Day 1 is the story and the questions whose answers are
 *    findable in the text. Day 2 is the word cards and a vocabulary check whose
 *    wrong options are the other three definitions from the same lesson.
 */
"use strict";
const fs = require("fs");
const path = require("path");
const { LESSONS } = require("./lessons.js");
/* The same nav every other page has. Paul, 2026-08-26. */
const { navMarkup, navScript, modeBoot, faviconTags } = require("./nav.js");
/* 🚨 partsFor() prepends the shared "how to use this page" and appends the
   lesson's OWN closing instructions. bake-voice.js calls the same function, so
   the audio cannot read something the page does not show. */
const { partsFor, requireTodo } = require("./lesson-instructions.js");

const ROOT = process.argv[2];
const TPL = process.argv[3];
if (!ROOT || !TPL) { console.error("usage: build-lessons.js <site root> <template html>"); process.exit(1); }
const template = fs.readFileSync(TPL, "utf8");

/* deterministic PRNG so a rebuild never reshuffles a student's answers */
function seeded(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
  return () => { h ^= h << 13; h ^= h >>> 17; h ^= h << 5; return ((h >>> 0) % 100000) / 100000; };
}
function shuffle(choices, rightIdx, seed) {
  const rnd = seeded(seed);
  const arr = choices.map((c, i) => ({ c, correct: i === rightIdx }));
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return { choices: arr.map((a) => a.c), right: arr.findIndex((a) => a.correct) };
}

const esc = (s) => String(s).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
const jsArr = (a) => "[\n    " + a.map((x) => '"' + esc(x) + '"').join(",\n    ") + "\n  ]";

function buildQuestions(L) {
  const out = [];

  // Day 1 — findable in the text
  L.questions.forEach((q, i) => {
    const s = shuffle(q.choices, q.right, L.id + ":d1:" + i);
    out.push({ day: 1, q: q.q, find: q.find, hint: q.hint, choices: s.choices, right: s.right });
  });

  // Day 2 — vocabulary, wrong options are the other definitions
  L.words.forEach((w, i) => {
    const [term, def] = w;
    const others = L.words.filter((_, k) => k !== i).map((x) => x[1]);
    const s = shuffle([def, ...others], 0, L.id + ":d2:" + i);
    out.push({
      day: 2, q: "What does <i>" + term.toLowerCase() + "</i> mean?", find: null,
      note: "Vocabulary. Use the word cards above, not the story.",
      choices: s.choices, right: s.right
    });
  });

  return out;
}

function serialise(L) {
  requireTodo(L, L.id);
  const parts = "var PARTS = [\n" + partsFor(L).map((p) =>
    '  { title: "' + esc(p.title) + '", s: ' + jsArr(p.s) + ' }').join(",\n") + "\n];";

  const words = "var WORDS = [\n" + L.words.map(([t, d]) =>
    '  ["' + esc(t) + '", "' + esc(d) + '"]').join(",\n") + "\n];";

  const qs = buildQuestions(L);
  const questions = "var QUESTIONS = [\n" + qs.map((q) =>
    "  {\n" +
    '    day: ' + q.day + ",\n" +
    '    q: "' + esc(q.q) + '",\n' +
    "    find: " + (q.find ? "[" + q.find.join(", ") + "]" : "null") + ",\n" +
    (q.hint ? '    hint: "' + esc(q.hint) + '",\n' : "") +
    (q.note ? '    note: "' + esc(q.note) + '",\n' : "") +
    "    choices: " + jsArr(q.choices) + ",\n" +
    "    right: " + q.right + "\n  }").join(",\n") + "\n];";

  return { parts, words, questions, qs };
}

function swapBlock(html, startMarker, endLine, replacement) {
  const a = html.indexOf(startMarker);
  if (a === -1) throw new Error("marker not found: " + startMarker);
  const b = html.indexOf(endLine, a);
  if (b === -1) throw new Error("end not found for: " + startMarker);
  return html.slice(0, a) + replacement + html.slice(b + endLine.length);
}

const written = [];
for (const L of LESSONS) {
  let h = template;
  const S = serialise(L);

  h = swapBlock(h, "var PARTS = [", "\n];", S.parts);
  h = swapBlock(h, "var WORDS = [", "\n];", S.words);
  h = swapBlock(h, "var QUESTIONS = [", "\n];", S.questions);

  h = h.replace("__CANONICAL__", '<link rel="canonical" href="https://nexstudents.org/lessons/' + L.id + '/">');
  h = h.replace("__MODEBOOT__", modeBoot);
  h = h.replace("__FAVICON__", faviconTags);
  h = h.replace("__NAV__", () => navMarkup(null, "navbtn"));
  h = h.replace("__NAVSCRIPT__", navScript);
  h = h.replace(/var LESSON_ID = "[^"]*";/, 'var LESSON_ID = "' + L.id + '";');
  h = h.replace(/var LESSON_TITLE = "[^"]*";/, 'var LESSON_TITLE = "' + esc(L.title) + '";');
  h = h.replace(/var LESSON_UNIT\s*= "[^"]*";/, 'var LESSON_UNIT  = "' + L.unit.replace(/&middot;/g, "·") + '";');
  h = h.replace(/<title>[^<]*<\/title>/, "<title>" + L.title + " — NexStudents</title>");
  h = h.replace(/<h1>[^<]*<\/h1>/, "<h1>" + L.title + "</h1>");
  h = h.replace(/<p class="dek">[\s\S]*?<\/p>/, '<p class="dek">' + L.dek + "</p>");
  h = h.replace(/<span>Unit 1 &middot; Lesson \d<\/span>/, "<span>" + L.eyebrow[1] + "</span>");

  /* Subject comes from the id prefix ("history/..." , "maths/...") so a new
     subject needs no change here, only an id. */
  const subject = L.id.split("/")[0];
  const dir = path.join(ROOT, "lessons", subject, L.slug);
  fs.mkdirSync(dir, { recursive: true });
  /* The template contains "undefined" as a JS keyword, so only the GENERATED
     data and the swapped headings are checked. */
  const gen = S.parts + S.words + S.questions;
  if (gen.includes("undefined")) { console.error("FAIL: undefined in generated data for " + L.slug); process.exit(1); }
  for (const must of [L.title, L.id]) {
    if (!h.includes(must)) { console.error("FAIL: " + L.slug + " missing " + must); process.exit(1); }
  }
  fs.writeFileSync(path.join(dir, "index.html"), h, "utf8");

  const d1 = S.qs.filter((q) => q.day === 1), d2 = S.qs.filter((q) => q.day === 2);
  const spread = {};
  S.qs.forEach((q) => { spread[q.right] = (spread[q.right] || 0) + 1; });
  written.push({ slug: L.slug, day1: d1.length, day2: d2.length,
                 answerSpread: "A:" + (spread[0]||0) + " B:" + (spread[1]||0) + " C:" + (spread[2]||0) + " D:" + (spread[3]||0) });
}
console.log(JSON.stringify(written, null, 1));
