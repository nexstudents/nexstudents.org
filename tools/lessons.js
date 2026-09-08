/* ─────────────────────────────────────────────────────────────────────────
   INTERACTIVE LESSON CONTENT — one entry per Leif lesson.

   Two-day shape, per Paul:
     Day 1  the story, then the four questions whose answers are in the text
     Day 2  the word cards, then question 2, which is the vocabulary one

   That split falls out of the material rather than being imposed on it: the
   booklets always make question 2 a vocabulary question and never define the
   words anywhere except the answer key.

   `vocabQ` is the index (0-based) of the question that belongs to Day 2.
   ───────────────────────────────────────────────────────────────────────── */

/* One lesson, one file, filed under its own grade / subject / unit.
   Add a lesson by dropping a file in the right folder and listing it here. */
const LESSONS = [
  require('./content/grade-7/history/unit-1/republic-to-empire'),
  require('./content/grade-7/history/unit-1/roman-government'),
  require('./content/grade-7/science/unit-1/what-makes-something-alive'),
  require('./content/grade-7/science/unit-1/life-only-comes-from-life'),
  require('./content/grade-7/science/unit-1/how-we-know-what-we-know'),
  require('./content/grade-7/science/unit-1/science-you-use-every-day'),
  require('./content/grade-7/maths/unit-1/a-plan-for-problem-solving'),
  require('./content/grade-7/maths/unit-1/estimation-using-rounding'),
  require('./content/grade-7/maths/unit-1/estimation-using-patterns'),
  require('./content/grade-7/maths/unit-1/determine-reasonable-answers'),
  require('./content/grade-7/english/unit-1/kinds-of-sentences'),
  require('./content/grade-7/english/unit-1/writing-good-sentences'),
];

module.exports = { LESSONS };
