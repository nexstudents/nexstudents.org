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

const MATH = [
{
  id: "maths/long-division",
  slug: "long-division",
  title: "Long Division",
  unit: "Foundations &middot; Unit 0 &middot; Lesson 1",
  /* Maths starts in grade 6 on purpose: the foundations unit is the catch-up
     set that grade 7 leans on. See tools/curriculum/. */
  shelf: { grades: [4, 5], subject: "Maths",
    blurb: "Divide, multiply, subtract, bring down. Worked through one digit at a time.",
    contains: [
      "A worked example that fills the bracket in step by step, read aloud",
      "Back a step and next step, so a step can be replayed as often as needed",
      "Five problems in a real division bracket, new ones every day",
      "Every row typed in: the quotient, the multiply, the subtract",
    ] },
  dek: "Divide, multiply, subtract, bring down. Four steps, over and over, until the digits run out.",
  demo: { dividend: 564, divisor: 3 },
  /* 🚨 Paul, 2026-08-29: "in long division you say what they need to do like
     answer all 10 questions or what ever amount." The count below is 5 and it
     has to STAY in step with practice.count - build-math.js checks that. */
  todo: { title: "What To Do Now", s: [
      "That is the whole method. Now it is your turn.",
      "Underneath the worked example there are five problems to solve.",
      "You type every row yourself. The answer digit on top, then the number you multiply, then the number that is left after you subtract.",
      "Practice mode checks each digit as you type it, so you find a mistake straight away. Test mode checks nothing until you ask it to, the way a real paper works.",
      "Do all five. Start in practice, and move to test when you stop needing to be told.",
      "If a digit will not go in, go back one step instead of guessing at that one. A subtract that will not work is almost always a multiply that went wrong before it."
  ] },
  practice: {
    count: 5,
    digits: 3,
    divisors: [3, 4, 5, 6, 7, 8, 9],
    allowZeroDigit: false,
  },
},
{
  id: "maths/long-division-remainders",
  slug: "long-division-remainders",
  title: "Long Division With Remainders",
  unit: "Foundations &middot; Unit 0 &middot; Lesson 2",
  /* Grade 4 only. Paul, 2026-08-30: don't shelve the same lesson to two
     grades - a 5th grade version needs its own 2-digit-divisor content, not
     this same problem set relisted. See the note in build-math.js's check()
     comment for why that is a bigger lift than swapping the divisors list. */
  shelf: { grades: [4], subject: "Maths",
    blurb: "Divide, multiply, subtract, bring down — and this time something is left over at the end.",
    contains: [
      "A worked example where the division does not come out even, read aloud",
      "Back a step and next step, so a step can be replayed as often as needed",
      "Five problems in a real division bracket, new ones every day",
      "Every row typed in, remainder included",
    ] },
  dek: "Divide, multiply, subtract, bring down. This time it does not come out even, and you write what is left over.",
  demo: { dividend: 587, divisor: 3 },
  /* 587 / 3 = 195 remainder 2. Three digits both sides, same as the first
     lesson's demo - build-math.js still enforces that the quotient fills the
     top row exactly, remainder or not. */
  todo: { title: "What To Do Now", s: [
      "Now try it with a number that does not divide evenly.",
      "Underneath the worked example there are five problems to solve.",
      "You work every row the same way as before: divide, multiply, subtract, bring down. The only difference is the very last subtract does not reach zero.",
      "Whatever is left after the last subtraction is your remainder. Write that in the last box on top, next to the quotient.",
      "Practice mode checks each digit as you type it. Test mode checks nothing until you press Check my work.",
      "Do all five. If the remainder ends up bigger than the divisor, go back - that means a divide step earlier was too small."
  ] },
  practice: {
    count: 5,
    digits: 3,
    divisors: [3, 4, 5, 6, 7, 8, 9],
    allowZeroDigit: false,
    allowRemainder: true,
  },
},
];

module.exports = { MATH };
