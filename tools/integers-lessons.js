/* ─────────────────────────────────────────────────────────────────────────
   INTEGERS LESSON DATA. One entry per lesson.

   ⭐ RULES FIRST, ON PURPOSE.
   Paul, 2026-08-30, comparing how he learned this in the 1990s with how
   Spectrum Math Grade 7 teaches it: *"i like that way then because we should
   get things quicker so lets do that approach if possible. we should nto over
   complicate it."* Spectrum builds the number line across five lessons and
   lets the rules emerge at the end. We state the rule, walk through two
   examples, then drill. It collapses to two lessons, because subtraction
   becomes a conversion into addition rather than its own skill.

   ⚠️ THE FAST ROUTE MUST NOT STATE THE RULE LOOSELY. "Two negatives make a
   positive" is FALSE for addition: -3 + (-5) is -8. build-integers.js refuses
   to build a lesson whose short rule matches that phrasing. Keep the full
   conditional.

   ⭐ NO DUPLICATED EXPLANATION. Paul, same day: *"i think you doubled up the
   sign part of the number and the lesson"* and *"it doesnt need to be so long
   you know."* The rule is stated ONCE in `rule`, summarised ONCE in
   `signTable`, and then DEMONSTRATED in `demo`. There is no prose section
   restating it a third time. Do not add one back.

   SHAPE
     ground     the teaching half for the PARENT, which workbooks leave out
     rule       short / long / test
     signTable  the chart, as data
     demo       the worked examples the walkthrough steps through
     practice   a SPEC, not a list - problems reseed daily
     todo       what the questions involve and what to do

   🚨 PUBLIC SITE. No student's name, no aviation framing. Settled 2026-08-29,
   and it is what lets this same page be the one Kolten is graded on in HG.

   practice spec:
     count  how many problems   kind  "add" or "subtract"
     max    largest absolute value    mix   sign combinations, all must appear
   ───────────────────────────────────────────────────────────────────────── */

const INTEGERS = [

/* ════════════ Integers · Unit 1 · Lesson 1 — Adding Integers ════════════ */
{
  id: "maths/adding-integers",
  slug: "adding-integers",
  title: "Adding Integers",
  unit: "Integers &middot; Unit 1 &middot; Lesson 1",
  eyebrow: ["Maths", "Unit 1 &middot; Lesson 1", "Integers"],
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
  shelf: { grades: [6], subject: "Maths",
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
},

/* ══════════ Integers · Unit 1 · Lesson 2 — Subtracting Integers ══════════ */
{
  id: "maths/subtracting-integers",
  slug: "subtracting-integers",
  title: "Subtracting Integers",
  unit: "Integers &middot; Unit 1 &middot; Lesson 2",
  eyebrow: ["Maths", "Unit 1 &middot; Lesson 2", "Integers"],
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
  shelf: { grades: [6], subject: "Maths",
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
},
];

module.exports = { INTEGERS };
