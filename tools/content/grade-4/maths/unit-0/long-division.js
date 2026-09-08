/* maths/long-division
   Grade 4 · maths · unit 0. Its home is this folder.
   Built by tools/math-lessons.js. Edit the lesson here, not in the registry. */
'use strict';
module.exports = {
  id: "maths/long-division",
  slug: "long-division",
  title: "Long Division",
  unit: "Foundations &middot; Unit 0 &middot; Lesson 1",
  /* Math starts in grade 6 on purpose: the foundations unit is the catch-up
     set that grade 7 leans on. See tools/curriculum/. */
  shelf: { grades: [4], subject: "Math",
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
};
