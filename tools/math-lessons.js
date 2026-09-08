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
     allowRemainder whether the dividend is allowed to NOT divide evenly.
                    Off by default. build-math.js REFUSES a remainder on
                    purpose unless this is set - see the long-division-
                    remainders lesson below for the one place it is on.
   ───────────────────────────────────────────────────────────────────────── */

/* One lesson, one file, filed under its own grade / subject / unit.
   Add a lesson by dropping a file in the right folder and listing it here. */
const MATH = [
  require('./content/grade-4/maths/unit-0/long-division'),
  require('./content/grade-4/maths/unit-0/long-division-remainders'),
];

module.exports = { MATH };
