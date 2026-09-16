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

/* 🚨 fillTodo LIVES HERE SO THE PAGE AND THE AUDIO CANNOT DISAGREE.
   The todo is written with {a} and {b} placeholders and the real counts come
   from the data, so that typing "seven sentences" can never tell the student to
   stop early. build-split.js filled them; bake-voice.js did not, and on
   2026-09-15 the first split bake recorded the voice literally saying
   "Part A has open brace a close brace sentences". The textHash then did not
   match the page, the lesson refused its own audio, and it read in a device
   voice instead - which is the failure the hash exists to cause rather than
   play the wrong words.
   ⚠️ It is exported from the DATA file, not from build-split.js, because
   requiring that generator runs a build. Any new consumer of a split lesson's
   sentences must call this first. */
const NUMW = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
  'eight', 'nine', 'ten', 'eleven', 'twelve'];
const numWord = (n) => NUMW[n] || String(n);

function fillTodo(L) {
  const a = numWord(L.practice.length), b = numWord(L.sort.length);
  return Object.assign({}, L, {
    todo: {
      title: L.todo.title,
      s: L.todo.s.map((line) => String(line).replace(/\{a\}/g, a).replace(/\{b\}/g, b))
    }
  });
}

module.exports = { SPLIT, fillTodo, numWord };
