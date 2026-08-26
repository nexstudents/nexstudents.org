/* ─────────────────────────────────────────────────────────────────────────
   MATH LESSON DATA. One entry per lesson.

   A math lesson is NOT the history shape. Paul, 2026-08-26: he does not want
   word problems about division, he wants the actual division bracket with
   rows he types into and shows his work in.

   `demo` is the worked example the page walks through step by step. It stays
   fixed on purpose, so the explanation is the same one every time.

   `practice` is a SPEC, not a list. Paul, 2026-08-26: "retesting yourself with
   the same questions doesn't help improve." The page rolls its own set from
   this, seeded by the date, so today is the same set all day and tomorrow is
   a different one. New problems reseeds on demand.

   practice:
     count          how many problems on the page
     digits         how many digits in the dividend (and so in the quotient)
     divisors       which divisors are allowed
     allowZeroDigit whether a 0 is allowed inside the quotient. Off for the
                    first lesson: "how many 3s fit into 2" is its own idea and
                    belongs in a lesson of its own.
   ───────────────────────────────────────────────────────────────────────── */

const MATH = [
{
  id: "maths/long-division",
  slug: "long-division",
  title: "Long Division",
  unit: "Foundations &middot; Unit 0 &middot; Lesson 1",
  dek: "Divide, multiply, subtract, bring down. Four steps, over and over, until the digits run out.",
  demo: { dividend: 564, divisor: 3 },
  practice: {
    count: 5,
    digits: 3,
    divisors: [3, 4, 5, 6, 7, 8, 9],
    allowZeroDigit: false,
  },
},
];

module.exports = { MATH };
