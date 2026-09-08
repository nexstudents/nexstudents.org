/* maths/subtracting-integers
   Grade 6 · maths · unit 1. Its home is this folder.
   Built by tools/integers-lessons.js. Edit the lesson here, not in the registry. */
/* ══════════ Integers · Unit 1 · Lesson 2 — Subtracting Integers ══════════ */
'use strict';
module.exports = {
  id: "maths/subtracting-integers",
  slug: "subtracting-integers",
  title: "Subtracting Integers",
  unit: "Integers &middot; Unit 1 &middot; Lesson 2",
  eyebrow: ["Math", "Unit 1 &middot; Lesson 2", "Integers"],
  dek: "No new arithmetic. Turn every subtraction into an addition, then use the rules you already have.",
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
    blurb: "No new arithmetic. Turn it into an addition, then use the rules you already have.",
    contains: [
      "Teacher Notes: why this is one step and not two",
      "Two examples walked through a step at a time, read aloud",
      "Keep, Change, Change, with the rewrite typed before the answer",
      "Fifteen problems, new ones every day, in practice and test modes",
    ] },

  ground: {
    whatItIs:
      "Good news: nothing new to learn. Subtracting a number is the same as adding its opposite, so " +
      "8 - 3 and 8 + (-3) are the same question written two ways. Once they can do that swap, every " +
      "subtraction becomes an addition they already know.",

    whyItMatters:
      "It makes this one skill instead of two. If they have the adding rules they already have every " +
      "subtraction here - the rewrite is the only new part. It comes back in algebra, where treating " +
      "the minus as part of the term is the only way to collect like terms without dropping a sign.",

    commonMistake:
      "Changing only half of it. Keep, Change, Change means the operation changes AND the second " +
      "number flips, and they very often do the first and forget the second: 5 - 3 becomes 5 + 3, " +
      "giving 8 instead of 2. Watch that first box rather than only the final answer - you can see " +
      "it happen there.",

    whenStuck: [
      "Say it plainly: \"Two things change, not one. The sign in the middle, and the sign of the number after it.\"",
      "Point at their rewrite: \"Did that second number change sign? If it looks the same, you only did half of it.\"",
      "For 5 - (-3): \"Taking away something you owe leaves you better off.\" Cancelling a debt of 3 is gaining 3.",
      "If they can rewrite but stall on the adding, that is the last lesson talking. Go back and drill those two rules alone.",
      "When they get one right, have them say the three words out loud. Once they can chant it while working, it has stuck.",
    ],
  },

  /* A reference card, not a second lesson - see the note in the adding
     lesson. The teaching happens once, in the walkthrough. */
  rule: {
    short: "Keep, Change, Change. Keep the first number, change the minus to a plus, change the sign of the second number. Then add.",
    test:
      "Check your rewrite before you add. If a minus is still sitting between the two numbers, you " +
      "have not finished - a done rewrite always has a plus in the middle.",
  },

  /* ⚠️ The three STEPS, not four worked examples. The walkthrough already
     works examples; a table of more of them would be the duplication Paul
     called out on the adding lesson. This is the glanceable card you check
     against while answering, matching the two-row chart over there. */
  signTable: {
    caption: "Keep, Change, Change",
    head: ["Step", "What it means"],
    rows: [
      ["Keep", "the first number does not change"],
      ["Change", "the minus in the middle becomes a plus"],
      ["Change", "the second number flips to its opposite"],
    ],
  },

  /* Subtracting a positive, then subtracting a negative - the second is the
     case that looks wrong and is the whole reason this lesson exists. */
  demo: [ { a: 8, b: 3 }, { a: 5, b: -3 } ],

  todo: { title: "What The Questions Ask", s: [
      "There are fifteen problems below, and each one gives you two boxes instead of one.",
      "In the first box, write what the second number becomes once you change its sign. In the second box, write your answer.",
      "Splitting it that way means you can see which half went wrong when you get one wrong.",
      "Practice checks your answer as you type it. Test won't check anything until you press Check my work.",
  ] },

  /* Easy first, same as the adding lesson. Paul, 2026-08-30. */
  practice: {
    count: 15, kind: "subtract", mix: ["pp", "nn", "pn", "np"],
    /* ⚠️ NOTHING BIG - same reasoning as the adding lesson. Paul, 2026-08-30:
       "i told you you didnt need to make big problems right now." This lesson
       is about the rewrite, not the arithmetic. */
    tiers: [
      /* Single digit both sides - exactly the size the walkthrough teaches. */
      { n: 9, aMax: 9, bMax: 9 },
      /* A two-digit number and a single digit, never two-digit against
         two-digit. Paul: "if you want do like 25 + -4" / "or 30 plus -8". */
      { n: 6, aRound: [10, 12, 15, 18, 20, 25, 30], bMax: 9 },
    ],
  },
};
