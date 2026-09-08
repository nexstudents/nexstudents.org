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

const LESSONS = [
  require('./lessons/history--republic-to-empire.js'),
  require('./lessons/history--roman-government.js'),
  require('./lessons/science--what-makes-something-alive.js'),
  require('./lessons/science--life-only-comes-from-life.js'),
  require('./lessons/science--how-we-know-what-we-know.js'),
  require('./lessons/science--science-you-use-every-day.js'),
  require('./lessons/maths--a-plan-for-problem-solving.js'),
  require('./lessons/maths--estimation-using-rounding.js'),
  require('./lessons/maths--estimation-using-patterns.js'),
  require('./lessons/maths--determine-reasonable-answers.js'),
  require('./lessons/english--kinds-of-sentences.js'),
  require('./lessons/english--writing-good-sentences.js'),
];

module.exports = { LESSONS };
