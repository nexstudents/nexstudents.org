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
const { partsFor, requireTodo, checkTodoCounts, checkOneSentence } = require("./lesson-instructions.js");

const ROOT = process.argv[2];
const TPL = process.argv[3];
if (!ROOT || !TPL) { console.error("usage: build-lessons.js <site root> <template html>"); process.exit(1); }
const template = fs.readFileSync(TPL, "utf8");

/* 🚨 NO TWO GENERATORS MAY CLAIM THE SAME LESSON FOLDER.
   Every generator writes to lessons/<subject>/<slug>/, and the subject comes from
   the id prefix - so a `maths/...` id in lessons.js lands in exactly the folder
   build-math.js or build-integers.js writes. Whichever runs LAST wins, silently,
   and the loser's page is simply gone with no error anywhere.
   CLAUDE.md carried a blanket "keep maths OUT of lessons.js" because of this. That
   rule was really protecting against the collision, not against the subject: a
   maths lesson that is genuinely a reading-and-reasoning lesson (Glencoe 1-1 is
   the four-step problem-solving method) belongs on this generator, and the ones
   that are a division bracket belong on build-math.js. So the collision is
   checked directly instead, and the two shapes can live side by side. */
(function noSlugCollisions() {
  const claimed = {};
  const add = (file, list) => (list || []).forEach((x) => {
    const id = x && (x.id || x.slug);
    if (!id) return;
    (claimed[id] = claimed[id] || []).push(file);
  });
  const load = (mod) => { try { return require(mod); } catch (e) { return null; } };
  const pick = (m) => (m ? (m.LESSONS || Object.values(m).find(Array.isArray)) : null);

  add("lessons.js", LESSONS);
  add("math-lessons.js", pick(load("./math-lessons.js")));
  add("integers-lessons.js", pick(load("./integers-lessons.js")));

  const clash = Object.keys(claimed).filter((id) => claimed[id].length > 1);
  if (clash.length) {
    console.error("FAIL: two generators claim the same lesson folder, and the second one\n" +
      "      to run would overwrite the first with no error:\n");
    clash.forEach((id) => console.error("  lessons/" + id + "/   claimed by " + claimed[id].join(" and ")));
    console.error("\n      Rename one, or move the lesson so a single generator owns it.");
    process.exit(1);
  }
})();

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
/* 🚨 THE SPREAD IS JUDGED PER OPTION COUNT, NOT ACROSS THE WHOLE LESSON.
   It used to measure every question against the LARGEST choices.length in the
   lesson, which is correct only while every question has the same number of
   options. It broke on english/kinds-of-sentences, 2026-09-04: Paul wrote the
   four vocabulary checks with TWO options each and the ten lesson questions with
   four, so the two-option answers can only ever land at 0 or 1 and slots 2 and 3
   were always short. The build failed a lesson that was correctly dealt.

   ⚠️ THE GUARD WAS RIGHT TO FAIL, AND IT IS STILL RIGHT NOW. It just has to
   compare like with like: a 4-option question spreads across 4, a 2-option
   question across 2. A clumped set inside either group still stops the build.
   ⚠️ A two-option question has a 50% guessing floor whatever the spread does -
   that is a content matter, not a build one, and it is noted in BEHAVIOR.md
   under the verbs Part B rule. */
function checkSpread(L, qs) {
  const groups = {};
  qs.forEach((q) => {
    const k = q.choices.length;
    (groups[k] = groups[k] || []).push(q);
  });
  for (const k of Object.keys(groups)) {
    const slots = Number(k);
    const set = groups[k];
    const n = {};
    set.forEach((q) => { n[q.right] = (n[q.right] || 0) + 1; });
    const counts = Object.values(n);
    const most = Math.max.apply(null, counts);
    const fewest = counts.length < slots ? 0 : Math.min.apply(null, counts);
    if (most - fewest > 1) {
      console.error("FAIL: " + L.id + ": among its " + set.length + " questions with " +
        slots + " options, answers land " + JSON.stringify(n) + ".\n" +
        "      A dealt spread is even to within one; this is not, so dealPositions()\n" +
        "      did not do its job for that group.");
      process.exit(1);
    }
  }
}

const esc = (s) => String(s).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
const jsArr = (a) => "[\n    " + a.map((x) => '"' + esc(x) + '"').join(",\n    ") + "\n  ]";

/* Replace the ONE line that starts with `marker`. Fails loudly on none or on
   several: a swap that silently matched nothing ships the template's own
   placeholder data to a student, which is the failure __NEXTNAV__ and __GROUND__
   each already have their own guard against. */
function replaceLine(html, marker, line, slug) {
  const rx = new RegExp("^[ \\t]*" + marker.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ".*$", "gm");
  const hits = html.match(rx);
  if (!hits || hits.length !== 1) {
    console.error("FAIL: " + slug + ": expected exactly one `" + marker + "` line, found " +
      (hits ? hits.length : 0));
    process.exit(1);
  }
  return html.replace(rx, () => line);
}

/* A compare box, written into the page's PARTS literal beside the sentences it
   quotes. Hand-written rather than JSON.stringify'd so it escapes by the same
   `esc` every other string on this page goes through - two escaping rules for one
   literal is how a stray quote ends up closing the script tag. */
const boxLiteral = (b) =>
  '{ title: "' + esc(b.title) + '"' +
  (b.lead ? ', lead: "' + esc(b.lead) + '"' : "") +
  ", cols: [" + b.cols.map((c) =>
    '{ label: "' + esc(c.label) + '", s: "' + esc(c.s) + '", why: "' + esc(c.why) + '" }'
  ).join(", ") + "]" +
  ', test: "' + esc(b.test) + '" }';

/* 🚨 EVERY QUESTION IS COLLECTED FIRST, THEN THE POSITIONS ARE DEALT ACROSS ALL OF
   THEM AT ONCE. It used to shuffle each question the moment it was built, which is
   precisely why the spread clumped - see dealPositions(). Day 1 and Day 2 are dealt
   TOGETHER, because a student sits the whole lesson, not one half of it. */
function buildQuestions(L) {
  const raw = [];

  // Day 1 — findable in the text
  L.questions.forEach((q) => {
    raw.push({ day: 1, q: q.q, find: q.find, hint: q.hint, choices: q.choices, right: q.right,
               /* 🚨 CARRY `why` THROUGH. The verdict box explains the answer now, and
                  without this the explanation is silently dropped between the data and
                  the page - the box renders with the bare Correct/Incorrect line and
                  nothing else. Found live on 2026-09-04 testing Question 10. */
               why: q.why });
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
        choices: q.choices, right: q.right, why: q.why
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
    if (q.why) built.why = q.why;
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

/* 🚨 A COMPARE BOX MAY ONLY QUOTE THE LESSON'S OWN STORY.
   `box` on a part draws a silent side-by-side panel for the place where two things
   look identical and are not. Paul asked for one on Kinds of Sentences, where an
   imperative and an exclamatory sentence can both end with "!".
   The whole reason it is safe to add is that it invents NOTHING: every quoted
   sentence already exists in the lesson, word for word, so the student is
   re-reading rather than being handed a new example nobody wrote. This function is
   what makes that a fact instead of an intention - a box that quotes a line the
   story does not contain FAILS THE BUILD.
   It also catches the slow version of the same failure: reword a sentence in the
   story six weeks from now and the box stops matching, so the build stops too
   instead of quietly showing a comparison against text that is no longer there.
   ⚠️ Only `s` is checked, and deliberately. `why` and `test` are the explanation
   AROUND the quotes and are free prose; requiring those to be verbatim too would
   mean a box could only ever restate whole sentences, which is not a box, it is a
   paragraph. The QUOTES are the claim about the lesson; the gloss is not. */
function requireBoxes(L) {
  const story = [];
  (L.parts || []).forEach((p) => (p.s || []).forEach((s) => {
    if (String(s).trim()) story.push(String(s).trim());
  }));

  (L.parts || []).forEach((p, i) => {
    const b = p.box;
    if (!b) return;
    const where = L.id + ": part " + i + " box";
    if (!b.title) { console.error("FAIL: " + where + " has no title"); process.exit(1); }
    if (!b.test) {
      console.error("FAIL: " + where + " has no `test`.\n" +
        "      The test is the line that resolves the comparison. Two columns with\n" +
        "      nothing telling the student how to choose between them is the same\n" +
        "      confusion, laid out more neatly.");
      process.exit(1);
    }
    if (!Array.isArray(b.cols) || b.cols.length < 2) {
      console.error("FAIL: " + where + " needs at least two `cols`. One column compares nothing.");
      process.exit(1);
    }
    b.cols.forEach((c, k) => {
      if (!c.label || !c.s || !c.why) {
        console.error("FAIL: " + where + " column " + k + " needs label, s and why");
        process.exit(1);
      }
      if (story.indexOf(String(c.s).trim()) === -1) {
        console.error("FAIL: " + where + " column " + k + ' quotes a sentence that is\n' +
          "      NOT in this lesson's story:\n" +
          "        " + c.s + "\n" +
          "      A box re-reads the lesson. It does not add examples to it. Either\n" +
          "      quote a line the student has already read, or write that line into\n" +
          "      the story first.");
        process.exit(1);
      }
    });
  });
}

/* 🚨 THE EXPLAINER. A visual walkthrough driven by the sentence being READ.
   Paul, 2026-09-04: "i wanted you to make like explaining how these sentences
   worked as it was reading it to you ... use a visual way of explaining along
   with the text so the youth can see how these sentences are changing and what
   they mean. just like how you explained with the math problem."
   It is the maths demo applied to grammar, and it hangs off the very same
   window.nsOnSentence(idx) hook the division bracket uses, so the player needed
   no change at all.

   A visual is { when, kind, body, ghost?, mark?, note? } or { when, blank:true }.
   🚨 `when` IS THE TRIGGER SENTENCE, WRITTEN OUT IN FULL, and the build resolves
   it to an index. It is deliberately NOT a number like `find` uses. A hand
   counted index is the one thing in this file that has gone stale twice, and
   findsAt exists only because an index can stay in range while being wrong. A
   sentence cannot drift: either it is still in the lesson or the build stops.
   ⚠️ `body` and `ghost` are DRAWN, so they may be shaped for the diagram - the
   understood "(You)" of an imperative is not in Paul's prose because the whole
   point is that the writer left it out. `when` is the part that must be his. */
function requireVisuals(L) {
  const V = L.visuals;
  if (!V) return;                       /* optional - most lessons have none */
  const story = [];
  (L.parts || []).forEach((p) => (p.s || []).forEach((s) => {
    if (String(s).trim()) story.push(String(s).trim());
  }));

  if (!Array.isArray(V) || !V.length) {
    console.error("FAIL: " + L.id + ": `visuals` is present but empty. Remove it or fill it.");
    process.exit(1);
  }

  let last = -1;
  V.forEach((v, i) => {
    const where = L.id + ": visual " + i;
    if (!v.when) { console.error("FAIL: " + where + " has no `when`"); process.exit(1); }
    const at = story.indexOf(String(v.when).trim());
    if (at === -1) {
      console.error("FAIL: " + where + " is triggered by a sentence that is NOT in\n" +
        "      this lesson's story:\n        " + v.when + "\n" +
        "      The explainer follows the reading, so it can only be hung off a\n" +
        "      sentence the student is actually going to hear.");
      process.exit(1);
    }
    /* 🚨 An ambiguous trigger silently picks the FIRST match, which puts the
       picture in the wrong paragraph with nothing on screen saying so. */
    if (story.indexOf(String(v.when).trim(), at + 1) !== -1) {
      console.error("FAIL: " + where + " is triggered by a sentence that appears more\n" +
        "      than once in this lesson:\n        " + v.when + "\n" +
        "      Pick a line that occurs only once, or the explainer fires on whichever\n" +
        "      copy comes first.");
      process.exit(1);
    }
    /* 🚨 IN ORDER. paintDemo() walks the list and stops at the first entry past
       the current sentence, which is only correct on a sorted list. Sorting them
       here instead would hide a genuine mistake: visuals written out of order
       usually means two of them were meant for different paragraphs. */
    if (at <= last) {
      console.error("FAIL: " + where + " is triggered at sentence " + at +
        ", which is not after the previous visual at " + last + ".\n" +
        "      Visuals must be listed in reading order.");
      process.exit(1);
    }
    last = at;
    v.at = at;
    if (v.blank) return;                /* a deliberate empty frame */
    /* 🚨 A NAMED DRAWING MUST EXIST. `art` points at a key in ART in
       lesson-template.html. A typo would otherwise render nothing at all - the
       frame would look merely plain rather than broken, which is the silent
       failure this repo keeps hitting. Read out of the template so the list
       cannot drift from the drawings actually shipped. */
    if (v.art) {
      const lib = /var ART = \{([\s\S]*?)\n\};/.exec(template);
      const names = lib ? (lib[1].match(/^\s{2}([a-zA-Z0-9_]+):/gm) || [])
        .map((x) => x.trim().replace(":", "")) : [];
      if (names.indexOf(v.art) === -1) {
        console.error("FAIL: " + where + ' names a drawing that is not in ART: "' + v.art + '"\n' +
          "      Drawings available: " + (names.length ? names.join(", ") : "(none found)") + "\n" +
          "      Add it to ART in lesson-template.html, or fix the name.");
        process.exit(1);
      }
    }
    /* `seq` is a staged reveal that supplies its own words, so it stands in for
       `body`. Everything else still needs one. */
    if (!v.kind || (!v.body && !(v.seq && v.seq.length))) {
      console.error("FAIL: " + where + " needs `kind` plus `body` or `seq`, or `blank: true`");
      process.exit(1);
    }
    /* 🚨 A VERSE CARRIES NO GRAMMAR FURNITURE. `mark` puts a highlighter on the
       end punctuation and `ghost` draws an understood subject - both are claims
       about the sentence being a worked grammar example. On Proverbs 25:11 they
       would be pointing at the wrong thing entirely. */
    if (v.verse && (v.mark || v.ghost)) {
      console.error("FAIL: " + where + " is a verse and also carries " +
        (v.mark ? "`mark`" : "`ghost`") + ".\n" +
        "      A verse is quoted, not diagrammed. Drop it, or drop `verse`.");
      process.exit(1);
    }
  });
}

function visualsLiteral(V) {
  if (!V || !V.length) return "[]";
  return "[\n" + V.map((v) =>
    "  { at: " + v.at +
    (v.blank ? ", blank: true" :
      ', kind: "' + esc(v.kind) + '"' +
      (v.verse ? ", verse: true" : "") +
      (v.shout ? ", shout: true" : "") +
      (v.art ? ', art: "' + esc(v.art) + '"' : "") +
      (v.seq ? ", seq: [" + v.seq.map(function(w){return '"' + esc(w) + '"';}).join(", ") + "]" : "") +
      (v.ghost ? ', ghost: "' + esc(v.ghost) + '"' : "") +
      ', body: "' + esc(v.body) + '"' +
      (v.mark ? ', mark: "' + esc(v.mark) + '"' : "") +
      (v.note ? ', note: "' + esc(v.note) + '"' : "")
    ) + " }"
  ).join(",\n") + "\n]";
}

/* 🚨 A WORKED PROBLEM MUST BE ARITHMETICALLY TRUE, AND THE BUILD CHECKS IT.
   `work` carries the four Glencoe steps with every number typed by the student.
   The answers are written in the lesson, so they can be wrong - and a maths
   lesson that marks a correct answer wrong is worse than no lesson. So the build
   evaluates each expression and compares it to the answer beside it.
   🚨 IT ALSO CHECKS THE ESTIMATE ACTUALLY BRACKETS THE ANSWER. That is the whole
   mechanic: the student commits to a range before he computes. A range that does
   not contain the answer teaches him to distrust his own estimate, which is the
   exact opposite of the lesson. */
function requireWork(L) {
  const W = L.work;
  if (!W) return;
  if (!Array.isArray(W) || !W.length) {
    console.error("FAIL: " + L.id + ": `work` is present but empty"); process.exit(1);
  }
  /* Only the four operators the book uses here, and only on plain numbers -
     this is a checker, not an expression language. */
  const evalExpr = (raw) => {
    const t = String(raw).replace(/[,\s]/g, "")
      .replace(/×/g, "*").replace(/÷/g, "/").replace(/−/g, "-");
    if (!/^-?\d+(\.\d+)?[+\-*/]-?\d+(\.\d+)?$/.test(t)) return null;
    const m = /^(-?\d+(?:\.\d+)?)([+\-*/])(-?\d+(?:\.\d+)?)$/.exec(t);
    const a = parseFloat(m[1]), b = parseFloat(m[3]);
    return m[2] === "+" ? a + b : m[2] === "-" ? a - b : m[2] === "*" ? a * b : a / b;
  };

  W.forEach((w, i) => {
    const at = L.id + ": work[" + i + "]";
    ["title", "ask", "estimate", "solve", "examine"].forEach((k) => {
      if (!w[k]) { console.error("FAIL: " + at + " has no `" + k + "`"); process.exit(1); }
    });
    if (!Array.isArray(w.given) || !w.given.length) {
      console.error("FAIL: " + at + " has no `given`. Explore is the step where a student\n" +
        "      decides which numbers matter; with nothing listed there is nothing to decide.");
      process.exit(1);
    }
    ["solve", "examine"].forEach((k) => {
      const s = w[k];
      if (!s.expr || typeof s.answer !== "number" || !s.why) {
        console.error("FAIL: " + at + "." + k + " needs `expr`, a numeric `answer` and a `why`");
        process.exit(1);
      }
      const got = evalExpr(s.expr);
      if (got === null) {
        console.error("FAIL: " + at + "." + k + ': cannot check "' + s.expr + '".\n' +
          "      Write it as one operation on two plain numbers, e.g. 1000 ÷ 65.");
        process.exit(1);
      }
      const tol = s.tol == null ? 0.01 : s.tol;
      if (Math.abs(got - s.answer) > tol) {
        console.error("FAIL: " + at + "." + k + " does not add up.\n" +
          "        " + s.expr + " = " + got + "\n" +
          "        but the lesson says " + s.answer + " (tolerance " + tol + ")");
        process.exit(1);
      }
    });
    const e = w.estimate;
    if (typeof e.lo !== "number" || typeof e.hi !== "number" || !e.why) {
      console.error("FAIL: " + at + ".estimate needs numeric `lo` and `hi` and a `why`");
      process.exit(1);
    }
    if (e.lo >= e.hi) {
      console.error("FAIL: " + at + ".estimate: lo (" + e.lo + ") is not below hi (" + e.hi + ")");
      process.exit(1);
    }
    if (w.solve.answer < e.lo || w.solve.answer > e.hi) {
      console.error("FAIL: " + at + ": the estimate does not contain the answer.\n" +
        "        estimate " + e.lo + " to " + e.hi + ", answer " + w.solve.answer + "\n" +
        "      The whole mechanic is committing to a range BEFORE computing. A range\n" +
        "      that misses teaches the student to distrust his own estimate.");
      process.exit(1);
    }
  });
}

function workLiteral(W) {
  if (!W || !W.length) return "[]";
  const step = (s) =>
    '{ expr: "' + esc(s.expr) + '", answer: ' + s.answer +
    (s.tol != null ? ", tol: " + s.tol : "") +
    (s.unit ? ', unit: "' + esc(s.unit) + '"' : "") +
    (s.intro ? ', intro: "' + esc(s.intro) + '"' : "") +
    (s.hint ? ', hint: "' + esc(s.hint) + '"' : "") +
    ', why: "' + esc(s.why) + '" }';
  return "[\n" + W.map((w) =>
    '  { title: "' + esc(w.title) + '", ask: "' + esc(w.ask) + '",\n' +
    "    given: [" + w.given.map((g) => '["' + esc(g[0]) + '", "' + esc(g[1]) + '"]').join(", ") + "],\n" +
    "    estimate: { lo: " + w.estimate.lo + ", hi: " + w.estimate.hi +
      (w.estimate.tol != null ? ", tol: " + w.estimate.tol : "") +
      (w.estimate.unit ? ', unit: "' + esc(w.estimate.unit) + '"' : "") +
      (w.estimate.intro ? ', intro: "' + esc(w.estimate.intro) + '"' : "") +
      (w.estimate.hint ? ', hint: "' + esc(w.estimate.hint) + '"' : "") +
      ', why: "' + esc(w.estimate.why) + '" },\n' +
    "    solve: " + step(w.solve) + ",\n" +
    "    examine: " + step(w.examine) + " }"
  ).join(",\n") + "\n]";
}

function groundMarkup(L) {
  const g = L.ground;
  if (!g) return "";
  const body = g.sections.map((s) =>
    "      <h3>" + s.h + "</h3>\n      " + (s.vocab
      ? "<dl>" + L.words.map(([t, d]) => "<dt>" + t + "</dt><dd>" + d + "</dd>").join("") + "</dl>"
      : s.p.map((t) => "<p>" + t + "</p>").join("\n      "))
  ).join("\n");
  /* 🚨 NO "FOR THE TEACHER" EYEBROW. Paul, 2026-09-04: "the teahcer note For the
     teacher in front of it looks really wrong just call this box and center the
     title simply Teacher Notes."
     The eyebrow said the same thing the title says, in smaller capitals, on the
     same line - two labels for one box. The box is titled and centred now. */
  /* 🚨 THE SCORE AND THE RESET LIVE IN THE TEACHER BOX. Paul, 2026-09-04:
     "the teacher notes shows the percentage score at the top and if the teacher
     can reset the test for the student to try again otherwise the answers are
     locked to that percentage ... this would allow the teacher / parent to see
     the score directly at the top."

     Both halves matter. The score belongs where the PARENT looks, not buried at
     the foot of the questions, and the reset has to be somewhere a student will
     not casually hit - a lesson he can re-roll at will records nothing.
     ⚠️ The lock itself already existed: answer() returns early once a question
     is answered. This surfaces the state rather than creating it.
     ⚠️ Filled in by script; the fallback text carries no number so it is never
     wrong before the script runs. */
  const scoreBlock =
    '      <div class="gscore" id="gscore">\n' +
    '        <p class="gscore-line" id="gscoreline">Not started yet.</p>\n' +
    '        <button class="btn ghost" type="button" id="greset" hidden>Reset Test</button>\n' +
    "      </div>\n";
  return '<details class="ground">\n' +
    '    <summary>Teacher Notes</summary>\n' +
    '    <div class="gbody">\n' + scoreBlock + body + "\n    </div>\n  </details>";
}

function serialise(L) {
  requireTodo(L, L.id);
  checkTodoCounts(L, L.id);
  checkOneSentence(L, L.id);
  checkFinds(L);
  requireGround(L);
  requireBoxes(L);
  requireVisuals(L);
  requireWork(L);
  const work = "var WORK = " + workLiteral(L.work) + ";";
  const visuals = "var VISUALS = " + visualsLiteral(L.visuals) + ";";
  const parts = "var PARTS = [\n" + partsFor(L).map((p) =>
    '  { title: "' + esc(p.title) + '", s: ' + jsArr(p.s) +
    (p.box ? ", box: " + boxLiteral(p.box) : "") + ' }').join(",\n") + "\n];";

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
    /* The one-line reason the answer is right. The verdict box prints it after
       Correct or Incorrect, so a student is told WHY rather than just whether.
       Optional - lessons written before 2026-09-04 have none and fall back to
       the bare verdict. */
    (q.why ? '    why: "' + esc(q.why) + '",\n' : "") +
    "    choices: " + jsArr(q.choices) + ",\n" +
    "    right: " + q.right + "\n  }").join(",\n") + "\n];";

  return { parts, words, questions, qs, visuals, work };
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
  /* 🚨 VISUALS is swapped by its own single-line marker, not by swapBlock: the
     literal it writes contains newlines and a "]" of its own, so a block swap
     hunting for the next "\n];" would stop in the wrong place. */
  h = replaceLine(h, "var VISUALS = ", S.visuals, L.slug);
  h = replaceLine(h, "var WORK = ", S.work, L.slug);
  h = swapBlock(h, "var WORDS = [", "\n];", S.words);
  h = swapBlock(h, "var QUESTIONS = [", "\n];", S.questions);

  h = h.replace("__MODEBOOT__", modeBoot);
  h = h.replace("__FAVICON__", faviconTags);
  h = h.replace("__NAV__", () => navMarkup(null, "navbtn"));
  h = h.replace("__NAVSCRIPT__", navScript);
  h = h.replace(/var LESSON_ID = "[^"]*";/, 'var LESSON_ID = "' + L.id + '";');
  h = h.replace(/var LESSON_TITLE = "[^"]*";/, 'var LESSON_TITLE = "' + esc(L.title) + '";');
  h = h.replace(/var LESSON_UNIT\s*= "[^"]*";/, 'var LESSON_UNIT  = "' + L.unit.replace(/&middot;/g, "·") + '";');
  h = h.replace(/<title>[^<]*<\/title>/, "<title>" + L.title + " | NexStudents</title>");
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
