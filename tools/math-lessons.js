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
  shelf: { grades: [4], subject: "Maths",
    blurb: "Divide, multiply, subtract, bring down. Worked through one digit at a time.",
    contains: [
      "A worked example that fills the bracket in step by step, read aloud",
      "Back a step and next step, so you can replay a step as often as you need",
      "Five problems in a real division bracket, new ones every day",
      "Every row typed in: the answer, the multiplication, the subtraction",
    ] },
  dek: "Divide, multiply, subtract, bring down. Four steps, over and over, until you run out of digits.",
  demo: { dividend: 564, divisor: 3 },
  /* 🚨 Paul, 2026-08-29: "in long division you say what they need to do like
     answer all 10 questions or what ever amount." The count below is 5 and it
     has to STAY in step with practice.count - build-math.js checks that. */
  todo: { title: "What To Do Now", s: [
      "That's the whole method. Now it's your turn.",
      "There are five problems below this one.",
      "You type every row yourself: the answer digit on top, then the number you multiply, then what's left after you subtract.",
      "Practice mode checks each digit as you type it, so you catch a mistake straight away. Test mode won't check anything until you ask, the way a real test works.",
      "Do all five. Start in practice, then move to test once you stop needing the hints.",
      "If a digit won't go in, go back a step instead of guessing. A subtraction that won't work is almost always a multiplication that went wrong just before it."
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
    blurb: "Divide, multiply, subtract, bring down. This time something's left over at the end.",
    contains: [
      "A worked example that doesn't come out even, read aloud",
      "Back a step and next step, so you can replay a step as often as you need",
      "Five problems in a real division bracket, new ones every day",
      "Every row typed in, remainder included",
    ] },
  dek: "Divide, multiply, subtract, bring down. This time it doesn't come out even, and you write down what's left over.",
  demo: { dividend: 587, divisor: 3 },
  /* 587 / 3 = 195 remainder 2. Three digits both sides, same as the first
     lesson's demo - build-math.js still enforces that the quotient fills the
     top row exactly, remainder or not. */
  todo: { title: "What To Do Now", s: [
      "Now you try one that doesn't divide evenly.",
      "There are five problems below this one.",
      "Work every row the same way you just did: divide, multiply, subtract, bring down. The only difference is that the very last subtraction doesn't reach zero.",
      "Whatever is left after the last subtraction is your remainder. Write that in the last box on top, next to your answer.",
      "Practice mode checks each digit as you type it. Test mode won't check anything until you press Check my work.",
      "Do all five. If your remainder comes out bigger than the divisor, go back. That means one of your divide steps was too small."
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
