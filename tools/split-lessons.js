/* ─────────────────────────────────────────────────────────────────────────
   SPLIT LESSONS — the ones where the student divides a sentence in two.

   A different shape from `english-lessons.js`, which is find-the-verb then
   name-its-kind. Here Part A asks WHERE the sentence splits and Part B asks
   WHICH half is which, so the data carries a `split` index rather than a verb.
   That is why it has its own registry and its own generator rather than being
   bolted onto build-english.js, whose validators are verb-specific end to end.

   One lesson, one file, filed under its own grade / subject / unit.
   Add a lesson by dropping a file in the right folder and listing it here.
   ───────────────────────────────────────────────────────────────────────── */
'use strict';

const SPLIT = [
  require('./content/grade-7/english/unit-1/complete-subjects-and-predicates'),
];

module.exports = { SPLIT };
