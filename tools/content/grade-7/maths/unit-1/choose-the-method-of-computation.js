/* maths/choose-the-method-of-computation
   Grade 7 · maths · unit 1. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 THIS IS A PROBLEM-SOLVING STRATEGY LESSON, SO IT IS THE READING SHAPE, NOT
   THE BRACKET. Lessons 1-1 to 1-4 are all built this way for the same reason:
   nothing here is computed. The whole skill is DECIDING, before any arithmetic
   happens. CLAUDE.md's "do not build a maths lesson with build-lessons.js" is
   about COMPUTATION lessons - long division, integers - where Paul's rule is
   "math is about showing your work not about just reading". That rule does not
   reach this lesson, because there is no work to show.

   🚨 THE PROSE IN `parts` IS A DRAFT, NOT PAUL'S VOICE. Built 2026-09-13.

   🔑 PAUL REDIRECTED MATH ONTO THIS LESSON, 2026-09-13: "the math is more like
   mental math problem solving ... the main idea of choosing a method of
   computation is to show examples and figure out the best way to solve them.
   this is basically word problems and trying to get the answer from the question
   presented." He named the Max/markers example at the top of p19 himself. */
'use strict';
module.exports = {
  id: "maths/choose-the-method-of-computation",
  slug: "choose-the-method-of-computation",
  title: "Problem-Solving Strategy: Choose the Method of Computation",
  unit: "Math 7 &middot; U1-L5",
  seq: { unit: 1, unitTitle: "Tools for Problem Solving", n: 5 },

  /* ── /teach-plan, 2026-09-13. Read off Glencoe Course 2 pp17-19,
        archive.org/details/mathematicscours0000unse. ── */
  plan: {
    objective: "Look at a problem and decide HOW to work it out - estimate, mental math, paper and pencil, or calculator - before doing any arithmetic.",
    markers: [
      "QUOTED, Objective box: 'Solve problems by choosing estimation, mental math, paper and pencil, or calculator.'",
      "QUOTED, the opening: 'Which method of computation would you use to solve this problem? You can use estimation, mental math, pencil and paper, or calculator.'",
      "QUOTED, Plan: 'Use the chart below to help you decide which method of computation to use.'",
      "QUOTED, Checking for Understanding 1: 'Tell how to use the chart to help you choose a method of computation.'",
      "QUOTED, Checking for Understanding 2: 'Write a sentence explaining how you know when estimation is an acceptable method for solving a problem.'",
      "QUOTED, Guided Practice: 'Read each situation. Write exact if the number must be figured exactly and estimate if the number can be approximate.'",
      "QUOTED, Problem Solving heading, p19: 'Choose the method of computation. Then solve.'",
      "QUOTED, p19 #10 (the example Paul named): 'Max needs to buy four markers to make posters for a social studies project. He has $4. Does he have enough money if each marker is 89 cents?'",
    ],
    method: "A DECISION TREE WITH ONE GATE QUESTION. The chart on p17 asks 'Do you need an exact answer?' FIRST. No means estimate, and you are finished - no arithmetic at all. Only if the answer is yes do three branches open: a pattern or number fact means mental math, simple calculations mean paper and pencil, large numbers or many calculations mean a calculator. 🚨 The lesson is the CHART, not the arithmetic. The book proves it by making Guided Practice 4-9 nothing but the gate question on its own: read a situation, write exact or estimate.",
    exampleOnly: [
      "Ms. Meadows' five-digit puzzle, Max's markers, the Des Moines trip, the student council hotels, the campaign donations, the Mediterranean Sea — WORLD: mixed, and DELIBERATELY so. A strategy lesson has to show the same decision landing differently across unrelated situations, or the student learns the situation instead of the decision.",
      "🚨 NOTE THE EXCEPTION: the one-world rule is about a lesson whose examples wander for no reason. Here the variety IS the content.",
    ],
    digitize: "The existing reading engine (build-lessons.js), same as Lessons 1-1 to 1-4. Nothing is computed, so no generator is needed - which is why this lesson could be built today and 2-1/2-2 could not. The chart is taught in `parts` and every question asks WHICH METHOD rather than for an answer; the answer-hunt points at the branch of the chart that decides it.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Math",
    blurb: "Four ways to work out an answer, and one question that tells you which one to use.",
    contains: [
      "The chart the whole lesson turns on, walked through one branch at a time",
      "Ms. Meadows' five-digit puzzle, solved the way the book solves it",
      "Max and his markers, where the right move is not to calculate at all",
      "Eight questions that ask which method, never for the answer",
    ] },
  eyebrow: ["Math 7", "U1-L5", "Tools for Problem Solving"],
  dek: "Before you work anything out, you have to pick how. Sometimes the fastest correct move is not to calculate at all.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will choose between estimation, mental math, paper and pencil, and a calculator by asking one question first: does this answer have to be exact?"
      ]},
      { h: "Key Concepts", p: [
        "Computation is the work of getting an answer. A method is simply a way of doing it, and there are four: estimation, mental math, paper and pencil, and a calculator.",
        "The chart is a decision tree and the first question does most of the work. If the answer does not have to be exact, estimate and stop. If it does, then look at the numbers: a pattern or a known fact means mental math, simple calculations mean paper and pencil, and large numbers or a lot of calculations mean a calculator."
      ]},
      { h: "Where Students Get Stuck", p: [
        "🚨 The common instinct is to start calculating immediately, because that is what every previous math lesson rewarded. This lesson rewards stopping first. Max's markers is the clearest case: the question is only whether $4 is enough, so four times ninety cents is $3.60 and the exact $3.56 is never needed.",
        "Students also assume a calculator is always the best method. It is the slowest choice for 256 times $100, which is a number fact they already know."
      ]},
      { h: "Teaching Suggestion", p: [
        "Do the shopping version out loud. Walking the aisles you estimate the running total; at the register the amount has to be exact. Same trip, same numbers, two different methods, and the reason is the question being asked.",
        "The book ends this lesson with a family activity worth doing: for one day, keep a list of every time someone in the house uses each of the four methods. Which one came up most often?"
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Ms. Meadows' Problem", s: [
      "Ms. Meadows gave her class this problem.",
      "",
      "Choose five digits.",
      "Use all five digits to make a two-digit number and a three-digit number that when multiplied have the greatest product possible.",
      "",
      "Before you touch a pencil, stop and answer a different question.",
      "Which method of computation would you use to solve this problem?",
      "",
      "You can use estimation, mental math, pencil and paper, or a calculator.",
      "That choice is what this whole lesson is about."
    ]},

    { title: "Four Ways to Get an Answer", s: [
      "Computation is the work of getting an answer out of a math problem.",
      "A method is just a way of doing something.",
      "So a method of computation is a way of getting that answer.",
      "",
      "There are four of them.",
      "",
      "Estimation gives you an answer that is close enough, without being exact.",
      "Mental math is doing it in your head, with nothing written down.",
      "Paper and pencil is writing it out, which is what you need when there is regrouping to keep track of.",
      "A calculator does the arithmetic for you.",
      "",
      "None of these is the best one.",
      "Sometimes one way is easier or faster than another, and which one that is depends entirely on the problem in front of you."
    ]},

    { title: "The Question That Decides It", s: [
      "The book gives you a chart for choosing, and the chart starts with one question.",
      "",
      "Do you need an exact answer?",
      "",
      "Answer that honestly and half the work disappears.",
      "",
      "If the answer is no, you estimate, and you are finished.",
      "You do not do the arithmetic at all.",
      "",
      "That feels like cheating the first few times.",
      "It is not.",
      "If nobody needs the exact number, working it out exactly is wasted effort."
    ]},

    { title: "When It Does Have to Be Exact", s: [
      "If you do need an exact answer, the chart opens into three branches.",
      "Now you stop looking at the question and start looking at the numbers.",
      "",
      "Do you see a pattern or a number fact?",
      "Then use mental math.",
      "",
      "Are there simple calculations to do?",
      "Then use paper and pencil.",
      "",
      "Are there large numbers, or a lot of calculations?",
      "Then use a calculator.",
      "",
      "Notice that the numbers decide this, not the subject and not how hard the problem sounds."
    ]},

    { title: "Back to Ms. Meadows", s: [
      "Run her problem through the chart.",
      "",
      "Do you need an exact answer?",
      "Yes, because you are comparing products to find the greatest one, and close is not good enough for a comparison.",
      "",
      "Then look at the numbers.",
      "You have to multiply every pair you can make, and those are three-digit numbers times two-digit numbers.",
      "That is a lot of calculations with large numbers.",
      "",
      "So use a calculator.",
      "",
      "Choosing the digits 1, 2, 3, 4 and 5, and putting the 5 and 4 in the greatest place-value positions, the products come out like this.",
      "521 times 43 is 22,403.",
      "531 times 42 is 22,302.",
      "431 times 52 is 22,412.",
      "",
      "The greatest product comes from 431 and 52.",
      "",
      "Check it by trying the 5 and the 4 in the same number.",
      "541 times 32 is 17,312, which is smaller than every product above."
    ]},

    { title: "Max and the Markers", s: [
      "Here is the one worth slowing down on.",
      "",
      "Max needs to buy four markers to make posters for a social studies project.",
      "He has $4.",
      "Does he have enough money if each marker is 89 cents?",
      "",
      "Start where you always start.",
      "Do you need an exact answer?",
      "",
      "Read the question again.",
      "It does not ask what the markers cost.",
      "It asks whether he has enough.",
      "",
      "So no, you do not need an exact answer, and you can estimate.",
      "",
      "Round 89 cents up to 90 cents.",
      "Four markers at 90 cents each is $3.60.",
      "$3.60 is less than $4, so Max has enough.",
      "",
      "You never worked out that the real total is $3.56, and you never needed to.",
      "Rounding UP is what makes this safe: if he can afford the rounded-up price, he can certainly afford the real one."
    ]},

    { title: "Exact, or Close Enough?", s: [
      "Most of the time the situation itself tells you which you need.",
      "",
      "The change you get back from a purchase has to be exact.",
      "The amount of cash you take to the store does not.",
      "",
      "A grocery bill as you drop things in the cart can be an estimate.",
      "The same bill at the register cannot.",
      "",
      "Attendance at a baseball game gets announced as a round number.",
      "The money earned for babysitting does not get rounded.",
      "",
      "The numbers did not change in any of those pairs.",
      "The question being asked did."
    ]}
  ],

  words: [
    ["Computation", "The work of getting an answer out of a math problem."],
    ["Method", "A way of doing something. A method of computation is a way of getting the answer."],
    ["Estimate", "An answer that is close enough without being exact."],
    ["Exact answer", "The precise number, with nothing rounded."]
  ],

  findsAt: 72,
  questions: [
    { tag: "The Chart", q: "According to the chart, what is the first question you ask?",
      find: [17, 18],
      hint: "It comes before you look at the numbers at all.",
      choices: [
        "Do you need an exact answer?",
        "Are the numbers large?",
        "Do you have a calculator?",
        "Is this addition or multiplication?"
      ], right: 0 },

    { tag: "The Chart", q: "If you do NOT need an exact answer, what does the chart tell you to do?",
      find: [20, 21],
      hint: "The chart ends right there. There is no second step.",
      choices: [
        "Use paper and pencil to be safe.",
        "Estimate, and you are finished.",
        "Use a calculator anyway.",
        "Work it out exactly and then round it."
      ], right: 1 },

    { tag: "Max's Markers", q: "Max has $4 and needs four markers at 89 cents each. Which method should he use?",
      find: [55, 56, 57],
      hint: "Read what the question actually asks him to find out.",
      choices: [
        "A calculator, because money must always be exact.",
        "Paper and pencil, to multiply 4 by 0.89.",
        "Mental math, to get $3.56.",
        "Estimation, because the question only asks whether he has enough."
      ], right: 3 },

    { tag: "Max's Markers", q: "Why is it safe to round 89 cents UP to 90 cents here?",
      find: [58, 62],
      hint: "Think about what rounding up does to the total he is checking against.",
      choices: [
        "Because rounding up is always more accurate.",
        "Because 90 is easier to multiply than 89.",
        "Because if he can afford the rounded-up price, he can certainly afford the real one.",
        "Because the markers might go up in price."
      ], right: 2 },

    { tag: "Ms. Meadows", q: "Why does Ms. Meadows' five-digit problem need a calculator?",
      find: [36, 39, 40],
      hint: "Two things have to be true: the first chart question, and then what the numbers look like.",
      choices: [
        "Because the answer does not need to be exact.",
        "Because there is an obvious number fact to use.",
        "Because it is a multiplication problem, and those always need calculators.",
        "Because you need exact answers AND there are many calculations with large numbers."
      ], right: 3 },

    { tag: "Reading the Numbers", q: "You need an exact answer and you spot a pattern or a number fact. Which method?",
      find: [27, 28],
      hint: "This is the first of the three branches.",
      choices: [
        "Mental math.",
        "A calculator.",
        "Paper and pencil.",
        "Estimation."
      ], right: 0 },

    { tag: "Exact or Close", q: "Which of these has to be figured EXACTLY?",
      find: [64],
      hint: "One of these is money somebody hands back to you.",
      choices: [
        "Attendance at a baseball game.",
        "The change you get back from a purchase.",
        "Your grocery bill as you put items in the cart.",
        "The average number of cars produced in five years."
      ], right: 1 },

    { tag: "The Big Idea", q: "In the pairs at the end of the lesson, what actually changed between needing an estimate and needing an exact number?",
      find: [70, 71],
      hint: "It was not the numbers.",
      choices: [
        "The prices went up.",
        "One had larger numbers than the other.",
        "The question being asked changed.",
        "A calculator became available."
      ], right: 2 }
  ],

  vocabQuestions: [
    { q: "What is <i>computation</i>?",
      choices: [
        "The work of getting an answer out of a math problem.",
        "A machine that does arithmetic.",
        "An answer that is close enough.",
        "The first step of the four-step plan."
      ], right: 0 },
    { q: "What is a <i>method</i>?",
      choices: [
        "A kind of number.",
        "A way of doing something.",
        "A rule that must be followed exactly.",
        "The answer to a problem."
      ], right: 1 },
    { q: "What is an <i>estimate</i>?",
      choices: [
        "A wrong answer.",
        "A guess with no thought behind it.",
        "An answer that is close enough without being exact.",
        "The exact answer, rounded afterwards."
      ], right: 2 },
    { q: "When is estimation an acceptable method?",
      choices: [
        "Whenever the numbers are large.",
        "Only when you have no calculator.",
        "Never, in real math.",
        "When the answer does not have to be exact."
      ], right: 3 }
  ],

  todo: { title: "What To Do Now", s: [
      "That is the reading done.",
      "Now the questions, and read them carefully, because not one of them asks you for an answer.",
      "Every question asks which METHOD you would use, which is a different thing.",
      "If one is hard, go back to The Question That Decides It and walk the chart from the top.",
      "Then the word cards and the check underneath them.",
      "Last, try the book's own family activity.",
      "For one day, keep a list of every time someone in your house uses one of the four methods.",
      "Estimation, mental math, paper and pencil, calculator.",
      "Which one came up the most?"
  ] }
};
