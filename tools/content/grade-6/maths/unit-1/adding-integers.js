/* maths/adding-integers
   Grade 6 · maths · unit 1. Its home is this folder.
   Built by tools/integers-lessons.js. Edit the lesson here, not in the registry. */
/* ════════════ Integers · Unit 1 · Lesson 1 — Adding Integers ════════════ */
'use strict';
module.exports = {
  id: "maths/adding-integers",
  slug: "adding-integers",
  title: "Adding Integers",
  unit: "Integers &middot; Unit 1 &middot; Lesson 1",
  eyebrow: ["Math", "Unit 1 &middot; Lesson 1", "Integers"],
  dek: "Two rules cover every addition. Which one you use depends on whether the signs match.",
  /* ⚠️ GRADE 6, not 7, and the reasoning is worth keeping because the
     standard disagrees.

     Common Core puts adding and subtracting integers at 7.NS.A.1. Sixth
     grade (6.NS.C) covers what a negative number IS - number line, ordering,
     absolute value - without operating on them. By the book this is a 7th
     grade lesson, and Spectrum Math Grade 7 opens on it.

     But plenty of curricula teach the operations a year earlier, which is
     where Kolten met them. Paul, 2026-08-30: "let's move adding and subtract
     integers lessons to 6th grade instead since Kolten said he learned it
     last year." Shelved at 6 because it is commonly taught at 6, NOT because
     of one student - the rule is still that grades come from the skill.

     🚨 7th grade maths is pre-algebra: 7.EE two-step equations, 7.RP
     proportions and percent, 7.G circles and scale. That is what belongs on
     the grade 7 shelf, and it is currently empty of it. */
  shelf: { grades: [6], subject: "Math",
    blurb: "Two rules cover every case. Which one you use depends on whether the signs match.",
    contains: [
      "Teacher Notes: the exact mistake to watch for, and what to say",
      "Two examples walked through a step at a time, read aloud",
      "The sign rules as a chart you can check an answer against",
      "Fifteen problems, new ones every day, in practice and test modes",
    ] },

  ground: {
    whatItIs:
      "Just adding, except either number can be negative. The thing to get across early: the minus " +
      "sign belongs to the number, it is not telling you to subtract. The sign says which way from " +
      "zero, the digits say how far.",

    whyItMatters:
      "This is the gate to algebra, so it is worth going slowly. Every equation they ever solve " +
      "means moving terms across an equals sign, each one carrying a sign. And if they are shaky " +
      "here they will not tell you - they will just quietly get equations wrong for a year, and it " +
      "will look like they cannot do algebra.",

    commonMistake:
      "Watch for \"two negatives make a positive.\" It is probably what you were taught, and it is " +
      "wrong for adding: -3 + (-5) is -8. It IS true for multiplying, and for subtracting a " +
      "negative, which is why it sticks around. So if they answer positive, they are not being " +
      "careless - they are following a rule somebody gave them. Fix the rule.",

    whenStuck: [
      "Start with: \"Are the signs the same or different?\" That one question picks the rule, and it is honestly the whole lesson.",
      "If they match: \"Add them and keep the sign you already had.\" Two negatives stay negative.",
      "If they differ: \"Which one is further from zero? Subtract, and that one decides the sign.\"",
      "If -3 + (-5) keeps coming out positive, drop the maths and talk money. \"You owe 3, then you owe 5 more. Do you owe more or less?\" Nobody gets that wrong.",
      "When they are right, ask which rule they used. If they cannot say, they guessed.",
    ],
  },

  /* ⚠️ THE RULE IS A REFERENCE CARD, NOT A SECOND LESSON.
     Paul, 2026-08-30: the long version was "over shadowing the walk through
     considering you have teacher notes and then the walk through", and he set
     the division of labour: *"the teacher notes is the explaination for the
     techer to help and the walk through is for the student."* So the teaching
     happens once, in the walkthrough. This is the short thing you glance back
     at while working the questions - which is why it sits BELOW the
     walkthrough on the page, not above it. There is no `long` any more; do
     not add one back. */
  rule: {
    short: "Same signs, add them and the answer keeps that sign. Different signs, subtract, and the answer follows whichever number is further from zero.",
    test:
      "You can work out the sign before you do any arithmetic. Ask which number is further from " +
      "zero, and that tells you whether the answer is above or below zero. So if you add two " +
      "negatives and get a positive, you already know it is wrong without checking the digits.",
  },

  signTable: {
    caption: "The two rules",
    head: ["Signs", "What you do", "Sign of the answer"],
    rows: [
      ["Same: + and +, or - and -", "add", "the sign they already had"],
      ["Different: + and -, or - and +", "subtract", "sign of the one further from zero"],
    ],
  },

  /* One of each case. Two examples is enough to show both rules; a third
     would be padding, and the drill below is where the reps happen. */
  demo: [ { a: -4, b: -9 }, { a: -9, b: 4 } ],

  todo: { title: "What The Questions Ask", s: [
      "There are fifteen problems below. Each one gives you two numbers to add, and either of them can be negative.",
      "Look at the signs first and decide which rule you need before you work out any digits.",
      "Type your answer in the box, with a minus sign in front if it is below zero. On the easier ones you can click the number line instead.",
      "Practice checks your answer as you type it. Test won't check anything until you press Check my work.",
  ] },

  /* ⭐ EASY FIRST. Paul, 2026-08-30: "you are doing double digit questions and
     it might be easier to do single digit at first. spectrum does this. i
     would also if you are going to do more digits make it simple like 10 or 15
     plus 5 or somthing. mix simple and add a few more complex ones."
     Spectrum's own 1.4 opens on 2 + 6 and 10 + (-1), not on 41 + (-40). */
  practice: {
    count: 15, kind: "add", mix: ["pp", "nn", "pn", "np"],
    /* ⚠️ NOTHING BIG. Paul, 2026-08-30: "i told you you didnt need to make big
       problems right now" and, on a 50 + (-18) that got through, "probabbly
       too large." Nothing here goes past 20. The point of this lesson is the
       SIGN, not the arithmetic - a student who can do 6 + 9 can do 60 + 90,
       and making them carry big numbers only hides whether the sign rule
       stuck. Keep it this way unless he asks. */
    tiers: [
      /* Single digit both sides - exactly the size the walkthrough teaches. */
      { n: 9, aMax: 9, bMax: 9 },
      /* A two-digit number and a single digit. Paul, 2026-08-30: "if you want
         do like 25 + -4". Never two-digit against two-digit. */
      { n: 6, aRound: [10, 12, 15, 18, 20, 25, 30], bMax: 9 },
    ],
  },
};
