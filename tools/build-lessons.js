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
const { navMarkup, navScript, modeBoot, faviconTags, lessonHead } = require("./nav.js");
/* 🚨 partsFor() prepends the shared "how to use this page" and appends the
   lesson's OWN closing instructions. bake-voice.js calls the same function, so
   the audio cannot read something the page does not show. */
const { partsFor, requireTodo } = require("./lesson-instructions.js");

const ROOT = process.argv[2];
const TPL = process.argv[3];
if (!ROOT || !TPL) { console.error("usage: build-lessons.js <site root> <template html>"); process.exit(1); }
const template = fs.readFileSync(TPL, "utf8");

/* Labels for the back link. K has no ordinal, so it gets its own word. */
const ORDINAL = { 0: "Kindergarten", 1: "1st", 2: "2nd", 3: "3rd", 4: "4th",
                  5: "5th", 6: "6th", 7: "7th", 8: "8th" };
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

/* deterministic PRNG so a rebuild never reshuffles a student's answers */
function seeded(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
  return () => { h ^= h << 13; h ^= h >>> 17; h ^= h << 5; return ((h >>> 0) % 100000) / 100000; };
}
/* 🚨 THE ANSWER POSITIONS ARE DEALT, NOT ROLLED. Paul, 2026-09-03: "cold you make a
   shuffler?" after Lesson 3 came out A:1 B:1 C:2 D:4 - D correct half the time, so a
   student who always picks D scores 50% without reading. Lesson 1 was worse, A:4 B:0
   C:4 D:0, and had been left alone because re-seeding moved the other lessons too.

   Shuffling each question on its own seed is what causes it: four independent rolls
   across eight questions clump exactly the way four coin flips do. Fixing the seed
   only moves WHICH lesson is lopsided.

   So the correct answer's SLOT is decided for the whole lesson at once: deal
   0,1,2,3,0,1,2,3 across the questions, shuffle that deal, then break any two-in-a-row.
   Every lesson is now balanced to within one, by construction rather than by luck.
   This is `mixOrder()` from build-integers.js, which already solved the same problem
   for the sign combinations.

   ⚠️ STILL FULLY DETERMINISTIC. Seeded off the lesson id, so a rebuild never moves an
   answer under a student - the reason the original was seeded at all.
   ⚠️ The DISTRACTORS are shuffled too, on their own seed. Placing the correct answer
   without moving the others would leave the wrong ones in registry order, which is its
   own pattern to learn. */
function dealPositions(counts, seed) {
  const rnd = seeded(seed);
  const out = new Array(counts.length);
  const pools = {};
  counts.forEach((c, i) => { (pools[c] = pools[c] || []).push(i); });
  Object.keys(pools).forEach((key) => {
    const k = Number(key), idxs = pools[key];
    const seq = idxs.map((_, j) => j % k);          /* the round-robin deal */
    for (let i = seq.length - 1; i > 0; i--) {      /* then a seeded shuffle of the deal */
      const j = Math.floor(rnd() * (i + 1));
      [seq[i], seq[j]] = [seq[j], seq[i]];
    }
    /* Break runs. Balanced still allows D,D back to back, and two in a row is the
       pattern a bored student notices first. Swap forward with a slot that does not
       create a new run where it lands. */
    for (let i = 1; i < seq.length; i++) {
      if (seq[i] !== seq[i - 1]) continue;
      for (let j = i + 1; j < seq.length; j++) {
        if (seq[j] === seq[i - 1]) continue;
        if (j + 1 < seq.length && seq[j + 1] === seq[i]) continue;
        if (seq[j - 1] === seq[i]) continue;
        [seq[i], seq[j]] = [seq[j], seq[i]];
        break;
      }
    }
    idxs.forEach((qi, j) => { out[qi] = seq[j]; });
  });
  return out;
}

function placeAnswer(choices, rightIdx, target, seed) {
  const rnd = seeded(seed);
  const others = choices.filter((_, i) => i !== rightIdx);
  for (let i = others.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [others[i], others[j]] = [others[j], others[i]];
  }
  others.splice(target, 0, choices[rightIdx]);
  return { choices: others, right: target };
}

/* Proves the deal actually worked rather than trusting that it did. Fails the build on
   a spread that could be guessed - the exact thing this replaced. */
function checkSpread(L, qs) {
  const n = {};
  qs.forEach((q) => { n[q.right] = (n[q.right] || 0) + 1; });
  const counts = Object.values(n);
  const most = Math.max.apply(null, counts);
  const slots = Math.max.apply(null, qs.map((q) => q.choices.length));
  const fewest = counts.length < slots ? 0 : Math.min.apply(null, counts);
  if (most - fewest > 1) {
    console.error("FAIL: " + L.id + ": answers land " + JSON.stringify(n) + " across " +
      qs.length + " questions. A dealt spread is even to within one; this is not,\n" +
      "      so dealPositions() did not do its job.");
    process.exit(1);
  }
}

const esc = (s) => String(s).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
const jsArr = (a) => "[\n    " + a.map((x) => '"' + esc(x) + '"').join(",\n    ") + "\n  ]";

/* 🚨 EVERY QUESTION IS COLLECTED FIRST, THEN THE POSITIONS ARE DEALT ACROSS ALL OF
   THEM AT ONCE. It used to shuffle each question the moment it was built, which is
   precisely why the spread clumped - see dealPositions(). Day 1 and Day 2 are dealt
   TOGETHER, because a student sits the whole lesson, not one half of it. */
function buildQuestions(L) {
  const raw = [];

  // Day 1 — findable in the text
  L.questions.forEach((q) => {
    raw.push({ day: 1, q: q.q, find: q.find, hint: q.hint, choices: q.choices, right: q.right });
  });

  /* Day 2 — vocabulary.
     🚨 HAND-WRITTEN WINS. If the lesson carries `vocabQuestions` those are used
     verbatim; the generator below is the FALLBACK for lessons that have none.
     Why it matters: the generated version uses the other three definitions from
     the same lesson as the wrong answers, so every distractor reads like a
     definition and the odd one out is guessable from shape alone. A hand-written
     distractor ("the study of microscopes") is a real wrong idea and a fairer
     test. First used on science/life-only-comes-from-life, Paul, 2026-09-03. */
  if (L.vocabQuestions && L.vocabQuestions.length) {
    /* 🚨 MORE QUESTIONS THAN CARDS IS AN ERROR; FEWER IS ONLY A WARNING.
       This started as a strict one-per-card check and Lesson 3 broke it the same day:
       Paul defined FIVE words and wrote FOUR checks, leaving Observation without one.
       Failing there would have meant either dropping a word he teaches in the story or
       writing his fifth question for him, and inventing content is the worse of the two
       → [[feedback-never-auto-generate]]. So it warns, loudly, and builds.
       A question with no card behind it is different - that is a check on something the
       student was never given - so that still fails. */
    if (L.vocabQuestions.length > L.words.length) {
      console.error("FAIL: " + L.id + ": " + L.vocabQuestions.length + " vocabQuestions for only " +
        L.words.length + " word cards. A check with no card behind it asks about a word the\n" +
        "      student was never shown.");
      process.exit(1);
    }
    if (L.vocabQuestions.length < L.words.length) {
      console.warn("  note: " + L.id + " has " + L.words.length + " word cards but " +
        L.vocabQuestions.length + " vocabulary questions - " +
        (L.words.length - L.vocabQuestions.length) + " card(s) are not checked.");
    }
    L.vocabQuestions.forEach((q) => {
      raw.push({
        day: 2, q: q.q, find: null,
        note: "Vocabulary. Use the word cards above, not the story.",
        choices: q.choices, right: q.right
      });
    });
  } else {
    L.words.forEach((w, i) => {
      const [term, def] = w;
      const others = L.words.filter((_, k) => k !== i).map((x) => x[1]);
      raw.push({
        day: 2, q: "What does <i>" + term.toLowerCase() + "</i> mean?", find: null,
        note: "Vocabulary. Use the word cards above, not the story.",
        choices: [def, ...others], right: 0
      });
    });
  }

  const targets = dealPositions(raw.map((q) => q.choices.length), L.id + ":deal");
  const out = raw.map((q, i) => {
    const s = placeAnswer(q.choices, q.right, targets[i], L.id + ":opts:" + i);
    const built = { day: q.day, q: q.q, find: q.find, choices: s.choices, right: s.right };
    if (q.hint) built.hint = q.hint;
    if (q.note) built.note = q.note;
    return built;
  });
  checkSpread(L, out);
  return out;
}

/* 🚨 `find` IS A POSITION IN THE FLAT SENTENCE LIST, and nothing used to check it.
   Rewrite one sentence out of a story and every index after it points at the wrong
   line; add enough and `SENT[k].el` is undefined and the answer hunt throws on the
   student, in the browser, with no build error. That is exactly what happened when
   Lesson 2 was rewritten on 2026-09-03 - all four questions went stale at once.
   ⚠️ Count the same way the PAGE counts: partsFor(), and a blank string is a
   PARAGRAPH BREAK that never enters SENT. Both rules live in three places now
   (here, lesson-template.html, bake-voice.js) - change one, change all three. */
function checkFinds(L) {
  let n = 0;
  partsFor(L).forEach((p) => (p.s || []).forEach((t) => { if (String(t).trim()) n++; }));

  /* 🚨 THE RANGE CHECK BELOW IS NOT ENOUGH ON ITS OWN, and it took a real edit to
     show it. Paul merged two sentences into one on 2026-09-03; the story got four
     shorter, and question 4's find [35,36,37,38] kept 38 - still a VALID index, now
     pointing at the first line of the next paragraph. In range, and wrong. The hunt
     would have highlighted the wrong sentence with no error anywhere.
     So `findsAt` records how many STORY sentences the indexes were verified against.
     Edit the story at all and the count moves, the build stops, and the indexes get
     re-checked against the numbered list rather than assumed to have survived.
     ⚠️ STORY ONLY - the todo is appended after it, so a todo edit cannot renumber a
     find and should not fail the build.
     ⚠️ It is a tripwire, not a proof: an edit that swaps one sentence for another
     keeps the count identical and slips through. Nothing cheap catches that, so
     re-read the finds whenever you touch a section a question points into. */
  let story = 0;
  (L.parts || []).forEach((p) => (p.s || []).forEach((t) => { if (String(t).trim()) story++; }));
  if (typeof L.findsAt === "number" && L.findsAt !== story) {
    console.error("FAIL: " + L.id + ": the story now has " + story + " sentences, but the\n" +
      "      question `find` indexes were last verified against " + L.findsAt + ".\n" +
      "      Re-check every find against the numbered list, then set findsAt: " + story + ".");
    process.exit(1);
  }
  (L.questions || []).forEach((q, i) => {
    (q.find || []).forEach((k) => {
      if (!Number.isInteger(k) || k < 0 || k >= n) {
        console.error("FAIL: " + L.id + ": question " + (i + 1) + " has find index " + k +
          ", but the lesson has " + n + " sentences (0-" + (n - 1) + ").\n" +
          "      The story was almost certainly edited without renumbering `find`.");
        process.exit(1);
      }
    });
  });
}

/* ── teacher notes ────────────────────────────────────────────────────────
   Ported 2026-09-03 from tools/integers/template.html and tools/english/template.html,
   which already had "For the teacher" behind a native <details>. This pipeline - every
   science and history lesson - had nowhere to put them at all.
   🚨 THE ANSWER KEY DOES NOT GO IN HERE. A <details> a student can open is not a lock,
   and these pages are public with no login. Teacher notes leaking costs nothing; the
   answer key does. It stays in the printable until item 23's accounts give it a real
   gate, at which point this same block is what gets role-gated - see ROADMAP item 23. */
/* 🚨 `ground` IS A LIST OF SECTIONS, NOT A FIXED SET OF FIELDS. It started as
   goal/teaching/vocab/biblical after Lesson 2, and Lesson 3 arrived the next hour with
   Goal / Key Concepts / Teaching Suggestion and no biblical heading at all - the point
   about creation was a closing paragraph instead. Fixed fields would have meant either
   losing a heading Paul wrote or inventing one he did not.
   So a section is { h, p } - a heading and its paragraphs - and the ORDER IS HIS.
   ⚠️ Do not add "required" headings. A lesson's notes say what that lesson needs. */
function requireGround(L) {
  const g = L.ground;
  if (!g) return;                       /* optional - most lessons have none yet */
  if (!Array.isArray(g.sections) || !g.sections.length) {
    console.error("FAIL: " + L.id + ": ground needs `sections`, a list of { h, p } blocks");
    process.exit(1);
  }
  g.sections.forEach((s, i) => {
    if (!s.h) { console.error("FAIL: " + L.id + ": ground section " + i + " has no heading"); process.exit(1); }
    /* A vocabulary section renders itself from `words` and carries no prose of its own. */
    if (s.vocab) {
      if (s.p) {
        console.error("FAIL: " + L.id + ': ground section "' + s.h + '" is vocab:true and also\n' +
          "      carries paragraphs. It renders the word cards; it holds no text.");
        process.exit(1);
      }
      return;
    }
    if (!Array.isArray(s.p) || !s.p.length) {
      console.error("FAIL: " + L.id + ': ground section "' + s.h + '" has no paragraphs');
      process.exit(1);
    }
  });
  /* 🚨 The vocabulary in the teacher notes is RENDERED FROM `words`. Storing it twice
     is how a definition gets fixed in one place and left wrong in the other. */
  if (g.vocab || g.words || g.vocabulary) {
    console.error("FAIL: " + L.id + ": ground carries its own vocabulary list. Delete it.\n" +
      "      A vocabulary section is { h: \"Key Vocabulary\", vocab: true } and renders the\n" +
      "      word cards, so there is one copy of each definition and it cannot drift out\n" +
      "      of step with the student page.");
    process.exit(1);
  }
}

function groundMarkup(L) {
  const g = L.ground;
  if (!g) return "";
  const body = g.sections.map((s) =>
    "      <h3>" + s.h + "</h3>\n      " + (s.vocab
      ? "<dl>" + L.words.map(([t, d]) => "<dt>" + t + "</dt><dd>" + d + "</dd>").join("") + "</dl>"
      : s.p.map((t) => "<p>" + t + "</p>").join("\n      "))
  ).join("\n");
  return '<details class="ground">\n' +
    '    <summary><span class="who">For the teacher</span> Teacher Notes</summary>\n' +
    '    <div class="gbody">\n' + body + "\n    </div>\n  </details>";
}

function serialise(L) {
  requireTodo(L, L.id);
  checkFinds(L);
  requireGround(L);
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
  /* 🚨 ALL THREE eyebrow slots, not just the middle one. Only eyebrow[1] was ever
     replaced, so <span id="eyebrow0"> shipped the template's literal word "Subject"
     and the third span shipped "Ancient Rome" on EVERY lesson - all four science
     pages were labelled Ancient Rome. Nothing wrote to eyebrow0 at build time or in
     the browser; the id was a hook nobody ever connected. Found 2026-09-03 by looking
     at the rendered page, which is the only way this kind of bug shows up.
     ⚠️ The id is kept so the template still parses as the Rome page it was sliced
     from, but the VALUE always comes from the lesson now. */
  h = h.replace(/<span id="eyebrow0">[^<]*<\/span>/, '<span id="eyebrow0">' + L.eyebrow[0] + "</span>");
  h = h.replace(/<span>Unit 1 &middot; Lesson \d<\/span>/, "<span>" + L.eyebrow[1] + "</span>");
  h = h.replace(/<span>Ancient Rome<\/span>/, "<span>" + L.eyebrow[2] + "</span>");
  ["Subject", "Ancient Rome"].forEach((stale) => {
    if (new RegExp("<span[^>]*>" + stale + "</span>").test(h) && L.eyebrow.indexOf(stale) === -1) {
      console.error("FAIL: " + L.slug + ": the eyebrow still says \"" + stale + "\" from the template");
      process.exit(1);
    }
  });
  /* ⚠️ Function form, not a string. A `$&` or `$'` inside Paul's prose would be read
     as a replacement pattern and silently eat text. Same reason __NAV__ uses one. */
  h = h.replace("__GROUND__", () => groundMarkup(L));
  if (h.includes("__GROUND__")) { console.error("FAIL: " + L.slug + ": __GROUND__ slot not filled"); process.exit(1); }

  /* Subject comes from the id prefix ("history/..." , "maths/...") so a new
     subject needs no change here, only an id. */
  const subject = L.id.split("/")[0];

  /* 🚨 THE BACK LINK USED TO BE HARDCODED TO "/history/" in the template, so
     the science lesson sent Kolten back to the History shelf. Paul, 2026-08-31:
     "this lesson says history in the back button. you needs to send this stuff
     to the back to the 7th grade science page."

     It now comes from the lesson. The default is the subject shelf, which is
     what every history lesson already had. A lesson that sits on ONE grade's
     shelf goes back to that grade's shelf instead, because that is the page the
     student actually came from. `L.back` overrides both if a lesson ever needs
     to point somewhere else. ⚠️ The href must be a real page — grade-7/science/
     has no index.html, the shelf is grade-7/science/lessons/. */
  const backHref = L.back ? L.back.href
    : (L.shelf && L.shelf.grades && L.shelf.grades.length === 1
        ? "/grade-" + L.shelf.grades[0] + "/" + subject + "/lessons/"
        : "/" + subject + "/");
  const backLabel = L.back ? L.back.label
    : (L.shelf && L.shelf.grades && L.shelf.grades.length === 1
        ? ORDINAL[L.shelf.grades[0]] + " Grade " + (L.shelf.subject || cap(subject))
        : cap(subject));
  {
    const rel = backHref.replace(/^\/|\/$/g, "");
    if (!fs.existsSync(path.join(ROOT, rel, "index.html"))) {
      console.error("FAIL: " + L.slug + " back link points at " + backHref +
                    ", which has no index.html. Point it at a page that exists.");
      process.exit(1);
    }
  }
  h = h.replace("__BACKHREF__", backHref).replace("__BACKLABEL__", backLabel);

  /* Canonical + share card + breadcrumb, all from nav.js so the four lesson
     generators cannot drift. It is filled HERE rather than with the other
     slots because the breadcrumb needs the back link, which is derived a
     hundred lines further down than __CANONICAL__ used to be replaced. */
  h = h.replace("__CANONICAL__", () => lessonHead({
    id: L.id, title: L.title, desc: L.dek,
    backLabel, backHref,
    image: L.shelf && L.shelf.thumb ? "https://nexstudents.org/lessons/" + L.id + "/thumb.jpg" : null,
  }));

  /* ══ THE UNIT STRIP ══
     Paul, 2026-08-31: "i would like to have a way inside to switch to the next
     one." Until now the only way out of a finished lesson was backwards.

     Prev and next are the neighbours by `seq` inside the same subject and unit.
     ⚠️ A lesson with no `seq` gets an EMPTY STRING, not a strip with dead
     arrows - history and maths keep exactly the page they had. The slot must
     still be replaced either way or `__NEXTNAV__` ships visible on the page. */
  const sib = (n) => LESSONS.find((o) => o.seq && L.seq &&
    o.id.split("/")[0] === subject && o.seq.unit === L.seq.unit && o.seq.n === n);
  let nav = "";
  if (L.seq) {
    const prev = sib(L.seq.n - 1), next = sib(L.seq.n + 1);
    const card = (l, dir, label) =>
      '<a class="' + dir + '" href="/lessons/' + l.id + '/">' +
      "<em>" + label + "</em><b>" + esc(l.title) + "</b></a>";
    const parts = [];
    if (prev) parts.push(card(prev, "back", "&larr; Lesson " + prev.seq.n));
    if (next) parts.push(card(next, "fwd", "Lesson " + next.seq.n + " &rarr;"));
    /* The last lesson in a unit says so, rather than ending on nothing. */
    if (!next) parts.push('<p class="unitdone">That is the last lesson in ' +
      esc(L.seq.unitTitle || ("Unit " + L.seq.unit)) + ".</p>");
    nav = '<nav class="unitnav" aria-label="Unit navigation">' + parts.join("") + "</nav>";
  }
  h = h.replace("__NEXTNAV__", nav);
  if (h.includes("__NEXTNAV__")) { console.error("FAIL: " + L.slug + ": __NEXTNAV__ slot not filled"); process.exit(1); }

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
