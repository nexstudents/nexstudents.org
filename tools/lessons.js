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
  require('./content/grade-7/history/unit-1/roads-and-the-roman-army'),
  require('./content/grade-7/history/unit-1/conquest-and-city-life'),
  require('./content/grade-7/history/unit-1/class-and-daily-life'),
  require('./content/grade-7/history/unit-1/judea-under-rome'),
  require('./content/grade-7/history/unit-1/jesus-and-the-first-christians'),
  require('./content/grade-7/history/unit-1/paul-and-the-early-church'),
  require('./content/grade-7/history/unit-1/fall-of-the-west'),
  require('./content/grade-7/history/unit-1/unit-1-review'),
  require('./content/grade-7/history/unit-2/constantinople'),
  require('./content/grade-7/history/unit-2/justinian'),
  require('./content/grade-7/science/unit-1/what-makes-something-alive'),
  require('./content/grade-7/science/unit-1/life-only-comes-from-life'),
  require('./content/grade-7/science/unit-1/how-we-know-what-we-know'),
  require('./content/grade-7/science/unit-1/science-you-use-every-day'),
  require('./content/grade-7/science/unit-1/unit-1-review'),
  require('./content/grade-7/science/unit-2/cells-the-building-blocks-of-life'),
  require('./content/grade-7/science/unit-2/inside-a-cell-part-by-part'),
  require('./content/grade-7/science/unit-2/from-cells-to-tissues-to-organs'),
  require('./content/grade-7/science/unit-2/organ-transplants-and-the-questions-they-raise'),
  require('./content/grade-7/science/unit-2/unit-2-review'),
  require('./content/grade-7/maths/unit-1/a-plan-for-problem-solving'),
  require('./content/grade-7/maths/unit-1/estimation-using-rounding'),
  require('./content/grade-7/maths/unit-1/estimation-using-patterns'),
  require('./content/grade-7/maths/unit-1/determine-reasonable-answers'),
  require('./content/grade-7/maths/unit-1/choose-the-method-of-computation'),
  require('./content/grade-7/maths/unit-1/classify-information'),
  require('./content/grade-7/maths/unit-1/order-of-operations'),
  require('./content/grade-7/maths/unit-1/variables-and-expressions'),
  require('./content/grade-7/maths/unit-1/powers-and-exponents'),
  require('./content/grade-7/maths/unit-1/solving-equations-mentally'),
  require('./content/grade-7/maths/unit-1/unit-1-review'),
  require('./content/grade-7/maths/unit-2/comparing-and-ordering-decimals'),
  require('./content/grade-7/maths/unit-2/rounding-decimals'),
  require('./content/grade-7/maths/unit-2/estimating-with-decimals'),
  require('./content/grade-7/maths/unit-2/multiplying-decimals'),
  require('./content/grade-7/maths/unit-2/powers-of-ten'),
  require('./content/grade-7/maths/unit-2/scientific-notation'),
  require('./content/grade-7/english/unit-1/kinds-of-sentences'),
  require('./content/grade-7/english/unit-1/writing-good-sentences'),
  require('./content/grade-7/english/unit-1/finding-the-subject'),
  require('./content/grade-7/english/unit-1/conjunctions'),
  require('./content/grade-7/english/unit-1/fragments-and-run-ons'),
  require('./content/grade-7/english/unit-1/forming-compound-and-complex-sentences'),
  require('./content/grade-7/english/unit-1/unit-1-review'),
  require('./content/grade-7/english/unit-2/kinds-of-nouns'),
  require('./content/grade-7/english/unit-2/collective-and-compound-nouns'),
  require('./content/grade-7/science/unit-3/what-living-things-are-made-of'),
  require('./content/grade-7/science/unit-3/how-things-get-in-and-out-of-a-cell'),
  require('./content/grade-7/science/unit-3/where-a-cell-gets-its-energy'),
  require('./content/grade-7/science/unit-3/what-we-throw-away'),
  require('./content/grade-7/science/unit-3/unit-3-review'),
  require('./content/grade-7/science/unit-4/how-a-cell-grows-and-divides'),
  require('./content/grade-7/science/unit-4/two-parents-and-how-traits-combine'),
  require('./content/grade-7/science/unit-4/dna-the-instructions-inside'),
  require('./content/grade-7/science/unit-4/engineering-living-things'),
];

module.exports = { LESSONS };
