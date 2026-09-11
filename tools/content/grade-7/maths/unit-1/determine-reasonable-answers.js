/* maths/determine-reasonable-answers
   Grade 7 · maths · unit 1. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry. */
'use strict';
module.exports = {
  id: "maths/determine-reasonable-answers",
  slug: "determine-reasonable-answers",
  title: "Problem-Solving Strategy: Determine Reasonable Answers",
  unit: "Math &middot; U1-L4",
  seq: { unit: 1, unitTitle: "Tools for Problem Solving", n: 4 },
  shelf: { grades: [7], subject: "Math",
    blurb: "A calculator can be wrong. Estimating first is how you catch it.",
    contains: [
      "Jordan's raise, checked against an estimate before trusting the calculator",
      "Two calculator answers that turn out to check out, and one that doesn't",
      "A grocery trip where rounding decides how much cash to bring",
      "Twelve questions built to catch the same kind of mistake a calculator can't",
    ] },
  eyebrow: ["Math", "U1-L4", "Tools for Problem Solving"],
  dek: "A calculator gives you an answer instantly. It won't tell you if that answer is wrong.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will use estimation to decide whether a calculated answer is reasonable, catching the kind of mistake a calculator itself cannot catch."
      ]},
      { h: "Key Concepts", p: [
        "Build a rough estimate the same way earlier lessons did, by rounding and using patterns, then compare it to the real answer. Close means reasonable; far off means something in the real calculation went wrong."
      ]},
      { h: "Where Students Get Stuck", p: [
        "Jordan's problem is the trap: the calculation itself was set up wrong, since 12 times $0.35 does not equal $42.00, and only the estimate catches it, because the calculator will confidently repeat any mistake it's given."
      ]},
      { h: "Teaching Suggestion", p: [
        "Type a wrong calculation into a calculator on purpose, in front of him, and have him estimate first to catch it before you reveal the calculator's answer."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "A Raise That Doesn't Add Up", s: [
      "Jordan earns $4.25 an hour working weekends as a waiter at The Sundae Shop.",
      "After six months on the job, his manager gave him a $0.35 an hour raise.",
      "Jordan used a calculator to figure out that if he works 12 hours a week, his weekly pay will increase by $42.00.",
      "Is that answer reasonable?"
    ]},

    { title: "Why A Calculator Can Be Wrong", s: [
      "A calculator is a fast, simple way to do the arithmetic.",
      "But hitting the wrong key, entering a number wrong, or doing the steps in the wrong order can all cause an error.",
      "The calculator has no way of knowing any of that happened.",
      "Being able to tell whether an answer is reasonable is its own skill, separate from doing the math.",
      "You can use estimation to check it.",
      "If your estimate is close to the calculator's answer, the calculator's answer is probably right."
    ]},

    { title: "Checking Jordan's Raise", s: [
      "Estimate the amount Jordan's raise should add to his pay each week.",
      "Since you're finding a product, a pattern is the right way to estimate it.",
      "Round 12 hours to 10.",
      "Round $0.35 to $0.40.",
      "10 times 4 is 40, so 10 times 0.4 is 4.",
      "Jordan's raise should increase his pay by about $4 a week.",
      "His calculator's answer of $42.00 is not reasonable."
    ]},

    { title: "A Division That Checks Out", s: [
      "Simone divided 4,182 by 680 on her calculator and got 6.15.",
      "Is that answer reasonable?",
      "Round 680 to 700.",
      "Round 4,182 to 4,200.",
      "Look for a pattern: 42 divided by 7 is 6, 420 divided by 70 is 6, and 4,200 divided by 700 is 6.",
      "Yes, 6.15 is a reasonable answer."
    ]},

    { title: "A Shopping Trip That Checks Out Too", s: [
      "Maya bought a pair of sunglasses, two rolls of film, and a bottle of sunscreen for her vacation.",
      "The sunglasses were $15.79, the film was $2.29 a roll, and the sunscreen was $3.69.",
      "The cashier asked her for $24.06.",
      "Is that total reasonable?",
      "Round each price to the nearest dollar: $15.79 to $16, both rolls of film to $2 each, and $3.69 to $4.",
      "$16 plus $2 plus $2 plus $4 is $24.",
      "$24.06 is close to $24, so yes, the cashier's total is reasonable."
    ]}
  ],

  words: [
    ["Reasonable", "Close enough to your estimate that the answer is probably right, not a mistake."],
    ["Estimate", "A quick, rounded answer used to test whether a real answer makes sense."],
    ["Calculator Error", "A wrong answer caused by hitting the wrong key, entering a number wrong, or doing steps out of order, not by the calculator itself being wrong."],
    ["Check", "Comparing a real answer against your estimate to catch a mistake before it goes any further."]
  ],

  /* 30 story sentences; the finds below were verified against that count. */
  findsAt: 30,
  questions: [
    { tag: "The Raise",
      q: "Jordan's calculator said his raise would add $42.00 a week. What does the estimate say?",
      find: [14, 15],
      choices: ["About $4 a week.", "About $40 a week.", "About $42 a week.", "About $400 a week."], right: 0 },

    { tag: "The Raise",
      q: "The estimate is about $4 and the calculator said $42.00. What should Jordan conclude?",
      find: [16],
      choices: [
        "His calculator's answer is not reasonable.",
        "His calculator's answer is reasonable.",
        "The estimate must be wrong.",
        "Both numbers are correct."
      ], right: 0 },

    { tag: "Why It Happens",
      q: "The lesson gives three ways a calculator answer can go wrong. Which one is NOT one of them?",
      find: [5],
      choices: [
        "The calculator's battery being low.",
        "Hitting the wrong key.",
        "Entering a number incorrectly.",
        "Doing the steps in the wrong order."
      ], right: 0 },

    { tag: "The Rule",
      q: "If your estimate and your calculator's answer are close, what does that tell you?",
      find: [9],
      choices: [
        "The calculator's answer is probably right.",
        "The calculator's answer is definitely exact.",
        "You should redo the estimate.",
        "Nothing, they're unrelated numbers."
      ], right: 0 },

    { tag: "Simone's Division",
      q: "Simone's calculator gave 6.15 for 4,182 divided by 680. What estimate confirms it's reasonable?",
      find: [19, 20, 21],
      choices: [
        "4,200 divided by 700 is about 6.",
        "4,182 divided by 6 is about 700.",
        "680 divided by 4,182 is about 6.",
        "4,200 times 700 is about 6."
      ], right: 0 },

    { tag: "Maya's Shopping",
      q: "Maya's total came to $24.06 for sunglasses, two rolls of film, and sunscreen. What's the rounded estimate?",
      find: [27, 28],
      choices: ["$24.", "$20.", "$28.", "$16."], right: 0 },

    { tag: "Maya's Shopping",
      q: "Since $24.06 is close to the $24 estimate, what can Maya conclude about the cashier's total?",
      find: [29],
      choices: [
        "It's reasonable.",
        "It's a mistake.",
        "It needs to be recounted.",
        "It's impossible to tell."
      ], right: 0 },

    { tag: "Apply It",
      q: "You need to buy 3 cans of tuna fish at 69 cents each, a box of crackers at $1.99, and a gallon of milk at $2.19 for dinner tonight. Should you take $5.00 or $10.00 to the store?",
      choices: [
        "$10.00, since three cans alone are about $2, plus crackers and milk push it over $5.",
        "$5.00, since the total rounds to about $4.",
        "$5.00, since tuna is nearly free.",
        "Neither, the total is under $1."
      ], right: 0,
      why: "3 cans at about 70 cents is about $2, plus about $2 for crackers and milk, comes to around $6, which is over $5." }
  ],

  vocabQuestions: [
    { q: "An answer is <i>reasonable</i> when it's...",
      choices: ["Close to your estimate.", "Written in pencil."], right: 0 },
    { q: "An <i>estimate</i> is used to...",
      choices: ["Test whether a real answer makes sense.", "Replace the real answer entirely."], right: 0 },
    { q: "A <i>calculator error</i> is caused by...",
      choices: ["A wrong key, a bad entry, or steps done out of order.", "The calculator's internal math being wrong."], right: 0 },
    { q: "To <i>check</i> an answer means to...",
      choices: ["Compare it against your estimate.", "Write it down twice."], right: 0 }
  ],

  todo: { title: "What To Do Now", s: [
      "{Q} questions about the lesson, then {c} word cards with {v} more questions under them. {T} questions in all.",
      "For each question, build the estimate first, the same way Jordan's raise and Simone's division were checked above.",
      "If a calculator answer and your estimate don't agree, trust the estimate and look for where the calculation went wrong.",
      "The tuna and crackers question at the end isn't a trick.",
      "Round every price first, then decide which amount of money is actually enough."
  ] }
};
