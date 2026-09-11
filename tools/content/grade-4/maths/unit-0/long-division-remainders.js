/* maths/long-division-remainders
   Grade 4 · maths · unit 0. Its home is this folder.
   Built by tools/math-lessons.js. Edit the lesson here, not in the registry. */
'use strict';
module.exports = {
  id: "maths/long-division-remainders",
  slug: "long-division-remainders",
  title: "Long Division With Remainders",
  unit: "Foundations &middot; U0-L2",
  /* Grade 4 only. Paul, 2026-08-30: don't shelve the same lesson to two
     grades - a 5th grade version needs its own 2-digit-divisor content, not
     this same problem set relisted. See the note in build-math.js's check()
     comment for why that is a bigger lift than swapping the divisors list. */
  shelf: { grades: [4], subject: "Math",
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
};
