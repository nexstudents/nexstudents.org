/* ─────────────────────────────────────────────────────────────────────────
   MATH LESSON DATA. One entry per lesson.

   A math lesson is NOT the history shape. Paul, 2026-08-26: he does not want
   word problems about division, he wants the actual division bracket with
   rows he types into and shows his work in.

   So: `demo` is the worked example the page walks through step by step, and
   `problems` are the ones he solves himself. No remainders yet, on purpose.
   ───────────────────────────────────────────────────────────────────────── */

const MATH = [
{
  id: "maths/long-division",
  slug: "long-division",
  title: "Long Division",
  unit: "Foundations &middot; Unit 0 &middot; Lesson 1",
  dek: "Divide, multiply, subtract, bring down. Four steps, over and over, until the digits run out.",
  demo: { dividend: 564, divisor: 3 },
  problems: [
    { dividend: 852, divisor: 4 },
    { dividend: 738, divisor: 6 },
    { dividend: 917, divisor: 7 },
    { dividend: 675, divisor: 5 },
    { dividend: 968, divisor: 8 },
  ],
},
];

module.exports = { MATH };
