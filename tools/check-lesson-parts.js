#!/usr/bin/env node
/* tools/check-lesson-parts.js — EVERY LESSON ENDS THE SAME WAY
   ============================================================
   Run it LAST, with the other checks:  node tools/check-lesson-parts.js .

   🚨 WHY. Paul found the bottom of a lesson wrong three times in one day, and
   each time the cause was the same: five templates, five different endings, and
   no way to see the difference without opening all thirty-seven pages. Moving
   Finding the Subject from one engine to another silently dropped its homework
   button, because the engine it moved to had never had one.

   A guard that reads the BUILT PAGES is the only kind that can catch this. The
   data was right every time; the page was not.

   Two tiers, on purpose:

   FAIL — the pieces tools/lesson-footer.js emits for every engine. If one of
          these is missing, a generator has stopped calling the shared module and
          the drift has started again. There is no reason for it ever to fail.

   OWED — the pieces each engine has to build for itself, because it scores its
          own work: the student-facing Print Answer Sheet and Retake. Reading and
          English have them; maths, integers and split do not yet. These are
          LISTED, not failed, so the gap is visible on every build instead of
          being rediscovered by Paul. Delete a line from OWED_KNOWN the day that
          engine grows the button, and the guard starts failing if it regresses.

   ⚠️ Add a new lesson type and it is covered automatically: the walk is over
   whatever is under lessons/, not a list kept by hand. */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = process.argv[2] || '.';
const DIR = path.join(ROOT, 'lessons');

/* The shared pieces. Kept in lesson-footer.js so one list serves the module and
   this guard, and they cannot disagree. */
const footer = require('./lesson-footer.js');
const { REQUIRED } = footer;

/* The homework button is on EVERY lesson, with no exceptions: a lesson without a
   sheet still says so. */
const SHARED = REQUIRED.filter(([n]) => /Homework/.test(n));

/* 🚨 THE ARROWS ARE REQUIRED ONLY WHERE THERE IS A SEQUENCE TO WALK.
   A lesson with no `seq` is not in a numbered unit - the four maths and integers
   lessons are shelved as standalone slots - so it has no neighbour to point at
   and printing one would be inventing a unit. Checking the DATA for `seq` rather
   than keeping a hand-written exception list means a lesson that joins a unit
   later is covered the same day, with nothing to remember. */
const NAV_RE = REQUIRED.find(([n]) => /prev/.test(n))[1];
const HAS_SEQ = new Set(footer.allLessons().map((L) => L.id));
const ENGINE = [
  ['Teacher Notes',      /class="ground"|id="ground"/],
  ['results / score',    /id="score"|id="scorebar"/],
  ['Print Answer Sheet', /id="printKey"/],
  ['Retake',             /id="retake"/],
];

/* 🚨 EVERY LINE HERE IS A DEBT, NOT AN EXEMPTION, and it is dated so it cannot
   quietly become permanent. These five lessons run on engines that score typed
   work rather than multiple choice, so their Print Answer Sheet and Retake have
   to be written against that engine - it is not a slot that can be filled. */
const OWED_KNOWN = {
  'maths/long-division':            ['Print Answer Sheet', 'Retake'],
  'maths/long-division-remainders': ['Print Answer Sheet', 'Retake'],
  'maths/adding-integers':          ['Print Answer Sheet', 'Retake'],
  'maths/subtracting-integers':     ['Print Answer Sheet', 'Retake'],
  'english/complete-subjects-and-predicates': ['Print Answer Sheet', 'Retake'],

  /* 🚨 CONTENT DEBT, NOT STRUCTURE, found by this guard on the day it was written
     (2026-09-19) and confirmed by Paul: "i think sonet forgot to put the teacher
     notes and visual panel in once." These are the two OLDEST lessons on the
     site and they predate `ground` existing at all. Teacher Notes are written
     per lesson - goal, key concepts, where a student gets stuck - so they cannot
     be filled by a slot. They are listed here rather than failed so a
     two-lesson gap from August does not block every build made since. */
  'history/republic-to-empire': ['Teacher Notes'],
  'history/roman-government':   ['Teacher Notes'],
};

if (!fs.existsSync(DIR)) {
  console.error('check-lesson-parts: no lessons/ under ' + ROOT);
  process.exit(1);
}

const pages = [];
for (const sub of fs.readdirSync(DIR)) {
  const subDir = path.join(DIR, sub);
  if (!fs.statSync(subDir).isDirectory()) continue;
  for (const slug of fs.readdirSync(subDir)) {
    const f = path.join(subDir, slug, 'index.html');
    if (fs.existsSync(f)) pages.push({ id: sub + '/' + slug, file: f });
  }
}

const failures = [];
const owedNow = [];
const surprises = [];

for (const p of pages) {
  const html = fs.readFileSync(p.file, 'utf8');
  for (const [name, re] of SHARED) {
    if (!re.test(html)) failures.push(p.id + ' is missing its ' + name);
  }
  if (HAS_SEQ.has(p.id) && !NAV_RE.test(html)) {
    failures.push(p.id + ' is in a numbered unit but has no prev / next arrows');
  }
  const known = OWED_KNOWN[p.id] || [];
  for (const [name, re] of ENGINE) {
    if (re.test(html)) {
      /* 🚨 THE POSITIVE SIDE OF THE DEBT LIST. A lesson that GAINS a piece it was
         excused from means the list is stale, and a stale excuse is how a real
         regression hides later. */
      if (known.includes(name)) surprises.push(p.id + ' now has ' + name +
        ' - delete it from OWED_KNOWN in this file');
      continue;
    }
    if (known.includes(name)) owedNow.push(p.id + ' - ' + name);
    else failures.push(p.id + ' is missing its ' + name);
  }
}

console.log('check-lesson-parts: ' + pages.length + ' built lessons checked.');

if (owedNow.length) {
  console.log('\nOWED (known, not a regression):');
  for (const o of owedNow) console.log('  - ' + o);
}
if (surprises.length) {
  console.log('\nSTALE DEBT LIST:');
  for (const s of surprises) console.log('  - ' + s);
}

if (failures.length) {
  console.error('\nFAIL: the lesson endings have drifted apart again.');
  for (const f of failures) console.error('  - ' + f);
  console.error('\n  Every one of these comes from tools/lesson-footer.js. A generator\n' +
    '  that stopped filling __LESSONFOOT__ / __FOOTCSS__ is the usual cause.');
  process.exit(1);
}

console.log('\nOK - every lesson carries the shared ending.');
