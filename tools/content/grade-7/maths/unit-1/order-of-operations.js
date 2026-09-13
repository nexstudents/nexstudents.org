/* maths/order-of-operations
   Grade 7 · maths · unit 1. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 THE PROSE IN `parts` IS A DRAFT, NOT PAUL'S VOICE. Built 2026-09-13.

   ⚠️ READING SHAPE, and this one is a JUDGEMENT CALL worth recording. Unlike
   1-1 to 1-6 this lesson does contain arithmetic, so it could argue for the
   bracket engine. It is built as a reading because the SKILL is knowing which
   operation happens first - a rule you apply, not work you show. The drilling
   half belongs in a generator that does not exist yet → ROADMAP 37. */
'use strict';
module.exports = {
  id: "maths/order-of-operations",
  slug: "order-of-operations",
  title: "Order of Operations",
  unit: "Math 7 &middot; U1-L7",
  seq: { unit: 1, unitTitle: "Tools for Problem Solving", n: 7 },

  /* ── /teach-plan, 2026-09-13. Read off Glencoe Course 2 p24. ── */
  plan: {
    objective: "Work out an expression in the right order, so it has only one possible value.",
    markers: [
      "QUOTED, Objective box: 'Evaluate expressions using the order of operations.'",
      "QUOTED, Words to Learn: order of operations",
      "QUOTED, the rule box: '1. Do all operations within grouping symbols first. 2. Do multiplication and division from left to right. 3. Do addition and subtraction from left to right.'",
      "QUOTED: 'To make sure that expressions like 2 x 36 + 3 x 24 have only one value, mathematicians have agreed on the following order of operations.'",
      "QUOTED, Calculator Hint: 'To see whether your calculator follows the order of operations, enter 2 + 5 x 3. If your calculator displays 17, your calculator follows the order of operations.'",
    ],
    method: "SHOW THE DISAGREEMENT FIRST, THEN THE RULE THAT SETTLES IT. The book does not open with the rule. It opens with two students typing the SAME keystrokes into two different calculators and getting 144 and 1800. Then it asks which is right - and the thing that decides it is the ESTIMATE they made before touching either calculator. The order of operations arrives as the fix for a real ambiguity the student has just watched happen, not as a rule to memorise.",
    exampleOnly: [
      "the school yearbook, rolls of film, 36 and 24 exposures — WORLD: a middle school yearbook. One world.",
    ],
    digitize: "The existing reading engine carries the teaching half well, because the lesson IS an argument. ⚠️ The drilling half - evaluate twenty expressions - needs the missing expressions generator (ROADMAP 37) and is not here. Flagged, not faked.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Math",
    blurb: "Two calculators, the same buttons, two different answers. Only one of them is right, and there is a rule for why.",
    contains: [
      "Two students who get 144 and 1800 from identical keystrokes",
      "The estimate from Lesson 1-2 deciding which one is correct",
      "The three rules, in the order they apply",
      "A test you can run on your own calculator in five seconds",
    ] },
  eyebrow: ["Math 7", "U1-L7", "Tools for Problem Solving"],
  dek: "If two people work out the same expression and get different answers, one of them is wrong. Deciding which is what this rule is for.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will evaluate an expression using the order of operations, and understand that the rule exists to give an expression one value rather than several."
      ]},
      { h: "Key Concepts", p: [
        "The order of operations: do everything inside grouping symbols first, then multiplication and division from left to right, then addition and subtraction from left to right.",
        "Grouping symbols such as parentheses exist to CHANGE that order. They are not decoration."
      ]},
      { h: "Where Students Get Stuck", p: [
        "🚨 Reading rule 2 as “multiplication before division”. It is not. Multiplication and division rank equally and are done left to right, whichever comes first. The same trap is in rule 3 with addition and subtraction.",
        "The other common slip is trusting a calculator. A simple four-function calculator often works strictly left to right and will confidently give the wrong answer, which is exactly what happens to Erick in the reading."
      ]},
      { h: "Teaching Suggestion", p: [
        "Do the calculator test from the book, for real, on whatever is in the house. Enter 2 + 5 x 3. A calculator that shows 17 follows the order of operations; one that shows 21 does not. Phone calculators and cheap desk calculators often disagree with each other, and seeing that is worth more than being told it.",
        "This lesson leans on Lesson 1-2 and Lesson 1-5. The estimate is what catches the wrong answer, so if estimating is shaky, go back there first."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Two Calculators, Two Answers", s: [
      "Sarah and Erick work on the middle school yearbook.",
      "",
      "Erick finds film in the supply cabinet.",
      "There are 2 rolls with 36 exposures each, and 3 rolls with 24 exposures each.",
      "How many photos can they take before they have to buy more film?",
      "",
      "Before working it out exactly, they estimate.",
      "2 times 36 is close to 2 times 40, which is 80.",
      "3 times 24 is close to 3 times 20, which is 60.",
      "So the answer should be somewhere near 80 plus 60, or about 140 photos.",
      "",
      "Then they each reach for a calculator to get the exact number.",
      "They use different calculators.",
      "",
      "Sarah's calculator gives 144.",
      "Erick's calculator gives 1800.",
      "",
      "Same numbers, same buttons, two answers."
    ]},

    { title: "Which One Is Right?", s: [
      "Stop and think about how you would settle this without being told.",
      "",
      "Sarah reasons that 144 must be correct, because it is close to the estimate of 140.",
      "",
      "That is the whole of Lesson 1-4 doing its job.",
      "The estimate did not give the answer.",
      "It caught the wrong one.",
      "",
      "So what went wrong inside Erick's calculator?",
      "",
      "It worked strictly left to right.",
      "2 times 36 is 72.",
      "Then it added 3, giving 75.",
      "Then it multiplied by 24, giving 1800.",
      "",
      "It never did anything unreasonable.",
      "It just made a different decision about what order to work in.",
      "",
      "And that is the real problem.",
      "If an expression can be worked in more than one order, it has more than one value, and then it does not really mean anything at all."
    ]},

    { title: "The Agreement", s: [
      "To make sure an expression has only one value, mathematicians agreed on a fixed order.",
      "",
      "This is the order of operations.",
      "",
      "First, do all operations within grouping symbols.",
      "Second, do multiplication and division in order from left to right.",
      "Third, do addition and subtraction in order from left to right.",
      "",
      "Read the second rule again, carefully.",
      "",
      "It does not say multiplication before division.",
      "It says multiplication and division rank equally, and you work through them left to right in whatever order they appear.",
      "",
      "The third rule works the same way for addition and subtraction.",
      "",
      "Almost everybody gets this wrong the first time, because the rule is usually taught as a list of four things in a fixed sequence."
    ]},

    { title: "Doing It On Sarah's Sum", s: [
      "Take the film problem and apply the rules.",
      "",
      "The expression is 2 times 36 plus 3 times 24.",
      "",
      "There are no grouping symbols, so rule 1 has nothing to do.",
      "",
      "Rule 2 says do the multiplication first, left to right.",
      "2 times 36 is 72.",
      "3 times 24 is 72.",
      "",
      "Rule 3 says do the addition last.",
      "72 plus 72 is 144.",
      "",
      "Sarah was right, and her estimate of 140 was close enough to prove it."
    ]},

    { title: "What Parentheses Are For", s: [
      "Grouping symbols, such as parentheses, are used to change the order of operations.",
      "",
      "That is their entire job.",
      "",
      "Look at 5 plus 4 divided by 3.",
      "Rule 2 comes before rule 3, so the division happens first.",
      "4 divided by 3 is not a whole number, and the answer comes out awkward.",
      "",
      "Now look at the same numbers written as an expression with 5 plus 4 inside parentheses, all divided by 3.",
      "Rule 1 applies now.",
      "Add 5 and 4 first, because they are inside the parentheses, which gives 9.",
      "Then divide by 3, which gives 3.",
      "",
      "Same three numbers, same three symbols, different answer.",
      "The parentheses are what changed it."
    ]},

    { title: "Test Your Own Calculator", s: [
      "Here is something you can do in five seconds.",
      "",
      "Find any calculator and enter 2 plus 5 times 3.",
      "",
      "If it shows 17, it follows the order of operations.",
      "It did the multiplication first, getting 15, then added 2.",
      "",
      "If it shows 21, it does not.",
      "It worked left to right, adding 2 and 5 to get 7, then multiplying by 3.",
      "",
      "Neither calculator is broken.",
      "The cheaper one simply was not programmed with the agreement.",
      "",
      "Try it on a phone and on a plain desk calculator and see whether they agree with each other.",
      "",
      "This is also why Lesson 1-4 mattered.",
      "A calculator will hand you a wrong answer with complete confidence, and an estimate is the only thing standing between you and believing it."
    ]}
  ],

  words: [
    ["Order of operations", "The agreed order for working out an expression: grouping symbols, then multiplication and division left to right, then addition and subtraction left to right."],
    ["Expression", "A combination of numbers and operations, such as 2 times 36 plus 3 times 24."],
    ["Evaluate", "To work out the single value of an expression."],
    ["Grouping symbols", "Symbols such as parentheses, used to change the order in which operations are done."]
  ],

  findsAt: 68,
  questions: [
    { tag: "The Problem", q: "How did Sarah know that 144 was the correct answer and 1800 was not?",
      find: [14],
      hint: "She did something before touching a calculator at all.",
      choices: [
        "Because it was close to the estimate she made first.",
        "Because her calculator was more expensive.",
        "Because 144 is an even number.",
        "Because she worked it out a second time."
      ], right: 0 },

    { tag: "The Problem", q: "What did Erick's calculator actually do?",
      find: [19],
      hint: "It was not broken. It made a different decision.",
      choices: [
        "It multiplied everything together.",
        "It worked strictly left to right.",
        "It ignored the second roll of film.",
        "It rounded the numbers first."
      ], right: 1 },

    { tag: "The Rule", q: "What comes FIRST in the order of operations?",
      find: [29],
      hint: "Before any multiplying or adding happens at all.",
      choices: [
        "Multiplication.",
        "Addition.",
        "Everything inside grouping symbols.",
        "Division."
      ], right: 2 },

    { tag: "The Rule", q: "Does rule 2 mean you always do multiplication before division?",
      find: [33, 34],
      hint: "The reading says almost everybody gets this wrong the first time.",
      choices: [
        "Yes, multiplication always comes first.",
        "Yes, unless there are parentheses.",
        "Only when the numbers are large.",
        "No. They rank equally and you work left to right."
      ], right: 3 },

    { tag: "Parentheses", q: "What are grouping symbols such as parentheses for?",
      find: [46, 47],
      hint: "The reading says it is their entire job.",
      choices: [
        "To change the order of operations.",
        "To make an expression easier to read.",
        "To show which numbers are most important.",
        "To mark where an expression ends."
      ], right: 0 },

    { tag: "The Test", q: "You enter 2 plus 5 times 3 and the calculator shows 21. What does that tell you?",
      find: [61],
      hint: "17 means one thing. What does 21 mean?",
      choices: [
        "The calculator is broken.",
        "It does not follow the order of operations, and worked left to right.",
        "The batteries are low.",
        "It followed the order of operations correctly."
      ], right: 1 },

    { tag: "The Big Idea", q: "Why did mathematicians agree on an order at all?",
      find: [27],
      hint: "Think about what happens to an expression that can be worked more than one way.",
      choices: [
        "To make arithmetic faster.",
        "To make calculators cheaper to build.",
        "So an expression has only one value, instead of meaning several different things.",
        "Because multiplication is more important than addition."
      ], right: 2 }
  ],

  vocabQuestions: [
    { q: "What is the <i>order of operations</i>?",
      choices: [
        "The agreed order for working out an expression.",
        "The order you press buttons on a calculator.",
        "A way of estimating an answer.",
        "The order of the four-step plan."
      ], right: 0 },
    { q: "What does it mean to <i>evaluate</i> an expression?",
      choices: [
        "To decide whether it is useful.",
        "To work out its single value.",
        "To round it to the nearest ten.",
        "To rewrite it with parentheses."
      ], right: 1 },
    { q: "What are <i>grouping symbols</i>?",
      choices: [
        "Symbols that show multiplication.",
        "Symbols that mark the end of a problem.",
        "Symbols such as parentheses, used to change the order operations are done in.",
        "Symbols used only in estimation."
      ], right: 2 },
    { q: "What is an <i>expression</i>?",
      choices: [
        "The answer to a problem.",
        "A question written in words.",
        "A single number.",
        "A combination of numbers and operations."
      ], right: 3 }
  ],

  todo: { title: "What To Do Now", s: [
      "That is the reading done.",
      "There are {q} questions below, and the answers are all in the reading above.",
      "The one people miss is whether multiplication always comes before division.",
      "Read The Agreement again before you answer that one.",
      "Then the word cards, {v} of them, and the check underneath.",
      "Last, go and find a calculator.",
      "Enter 2 plus 5 times 3 and write down what it says.",
      "Then do it on a different calculator, or a phone, and write that down too.",
      "If the two disagree, you have just seen the exact problem this whole lesson exists to fix."
  ] }
};
