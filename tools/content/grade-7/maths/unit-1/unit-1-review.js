/* maths/unit-1-review
   Grade 7 · maths · unit 1. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 A REVIEW IS A DIAGNOSTIC, NOT A TEST. Same rule as the science and history
   reviews: every hint names the lesson to go back to, so a wrong answer sends
   him somewhere.

   ⚠️ DRAFT PROSE, MINE, 2026-09-24. Written on Opus from the ten Unit 1 lessons
   and Glencoe Course 2 Chapter 1 Study Guide and Review, pp42-43. /natural has
   run over it once.

   ⚠️ The Luke 14 tower is a CALLBACK to Paul's own verse in U1-L5, not a new
   scripture choice. If he'd rather the review carry none, cut that one line.

   ⚠️ 9 cards against 5 vocabulary questions WARNS and does not fail. A unit
   review gathers words from ten lessons; do not invent questions to match. */
'use strict';
module.exports = {
  id: "maths/unit-1-review",
  slug: "unit-1-review",
  title: "Unit 1 Review: Tools for Problem Solving",
  unit: "Math 7 &middot; U1-L11",
  seq: { unit: 1, unitTitle: "Tools for Problem Solving", n: 11 },
  natural: "2026-09-24",

  /* ── /teach-plan, 2026-09-24. Glencoe Course 2, Chapter 1 Study Guide and
        Review pp42-43. ── */
  plan: {
    objective: "Place each Unit 1 tool in the step of the four-step plan where it's used, and use it on a problem.",
    markers: [
      "QUOTED, Self Assessment: 'Upon completing this chapter, you should be able to:' then one line per lesson, 1-1 to 1-10.",
      "QUOTED, 1-1: 'The four steps are Explore, Plan, Solve and Examine.'",
      "QUOTED, 1-2: 'Estimate 8,324 + 6,936.' worked as 8,000 + 7,000 = 15,000.",
      "QUOTED, 1-3: 'Estimate 1,457 ÷ 33.' worked as 1,500 ÷ 30 = 50.",
      "QUOTED, 1-8: 'Evaluate 6x - xy + y if x = 10, y = 3.' worked to 33.",
      "QUOTED, 1-10: 'Solve 3s = 36. You know that 3 · 12 = 36. So, the value of s is 12.'",
      "QUOTED, Communicating Mathematics 6: 'In your own words, explain what should be done during the examine step of the four-step plan.'",
    ],
    method: "THE FOUR-STEP PLAN FROM U1-L1 IS THE FRAME. The book's review lists the lessons one by one. This one files each tool under the step where it gets used: classifying under Explore; choosing a method, rounding and patterns under Plan; the order of operations, variables, powers and equations under Solve; reasonable answers under Examine. Ten lessons become one plan, which is what the unit title claims.",
    exampleOnly: [
      "WORLD: the unit's own examples, reused on purpose so recognising them is the recall. The Orlando trip, the youth group, Mark's fund-raiser, the Gjøvik cavern, Jordan's raise, the two students and 8 + 4 x 2, Tammy, Marcus's floor.",
      "The book's own review numbers are used where they exist: 8,324 + 6,936, 1,457 ÷ 33, 3 + 7 x 4 - 6, 6x - xy + y, 2⁵, 3s = 36.",
    ],
    digitize: "Reading engine, no new mechanic. Every hint names the lesson to reopen.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Math",
    blurb: "Ten lessons, one plan. Every tool from the unit, filed under the step of the four-step plan where you actually use it.",
    contains: [
      "Explore: sorting what you know from what you need",
      "Plan: choosing a method, rounding and patterns",
      "Solve: order of operations, variables, powers and equations",
      "Examine: catching an answer that can't be right",
    ] },
  eyebrow: ["Math 7", "U1-L11", "Tools for Problem Solving"],
  dek: "Ten lessons can feel like ten separate tricks. They aren't; every one of them fits into the plan from the very first lesson.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Bring the ten Unit 1 lessons together under the four-step plan from U1-L1, check which tools hold, and find the ones that need a second read.",
        "This is a diagnostic, not a test. Every question's hint names the lesson to reopen, so a wrong answer is a pointer rather than a grade."
      ]},
      { h: "How to Use It", p: [
        "Read the review through once, then do the questions. For every miss, open the lesson the hint names and read just the section it points to, then come back.",
        "If the student misses two or more questions from the same step, that step is the one to re-teach before Unit 2 starts."
      ]},
      { h: "Where Students Get Stuck", p: [
        "🚨 The two most common misses in this unit are reading 3⁴ as 3 x 4, and doing addition before multiplication in an expression like 3 + 7 x 4 - 6. Both come from working left to right without checking the order.",
        "The Examine step gets skipped more than any other. If the student gets an answer and stops, ask what it should have been about, before looking at the answer key."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Ten Lessons, One Plan", s: [
      "This unit handed you a lot of tools: rounding, patterns, a hierarchy for operations, letters that stand for numbers, small raised numbers, and equations you can solve in your head.",
      "Laid out in a row, that looks like ten separate tricks to remember, but it isn't.",
      "The very first lesson gave you a plan with four steps, Explore, Plan, Solve and Examine, and every tool since then belongs to one of them.",
      "So where does each one go?"
    ]},

    { title: "Explore: What Do I Know?", s: [
      "The plan started with a trip from Saint Louis to Orlando, and a question nobody had written down for you.",
      "Before any arithmetic, Explore asks two things: what do I know, and what am I trying to find?",
      "Classify Information is Explore with a sorting tray, because when the youth group's trip arrived as one lump of facts, starting with the twelve students going, the first job was to sort them into what you know and what you're being asked.",
      "A problem that only looks hard usually stops looking hard once the facts are in two piles."
    ]},

    { title: "Plan: How, and About How Much?", s: [
      "Plan is where you decide how to work the problem and roughly what the answer should be, before you work it.",
      "Choose the Method of Computation opened with the man in Luke 14 who sits down first and counts the cost of his tower, and that's this step exactly: estimate, mental math, paper and pencil, or a calculator, picked before you start.",
      "Rounding gets you that rough answer fast, the way it did for Mark's fund-raiser, and the book's own review asks the same kind of thing.",
      "",
      "[ex] 8,324 + 6,936",
      "[ex] 8,000 + 7,000 = 15,000",
      "",
      "Patterns do the same job for bigger multiplying and dividing.",
      "The Gjøvik cavern took 29,000 truckloads of about 5 cubic yards each, which is 3 x 5 with some zeros attached, so about 150,000 cubic yards.",
      "Division works the same way once you round the divisor and swap the dividend for a number that divides evenly.",
      "",
      "[ex] 1,457 ÷ 33",
      "[ex] 1,500 ÷ 30 = 50"
    ]},

    { title: "Solve: One Problem, One Answer", s: [
      "Solve is where the rest of the unit lives, and every one of these tools exists so that a problem has one answer and not two.",
      "The two students who got 24 and 16 from 8 + 4 x 2 were the reason for the order of operations, and the review asks for the same care.",
      "",
      "[ex] 3 + 7 x 4 - 6",
      "[ex] 3 + 28 - 6   (multiply first)",
      "[ex] = 25   (then left to right)",
      "",
      "Tammy couldn't quote a price until the night was over, so a letter held the place of the hours.",
      "To evaluate an expression like hers, you hand each letter its number and then fall back on the order of operations.",
      "",
      "[ex] 6x - xy + y   when x = 10 and y = 3",
      "[ex] 6(10) - (10)(3) + 3",
      "[ex] 60 - 30 + 3 = 33",
      "",
      "Marcus's bathroom floor showed where squared comes from, and an exponent counts how many times the base is used as a factor.",
      "Powers also earned their own level in the order, right after grouping symbols.",
      "",
      "[ex] 2⁵ = 2 x 2 x 2 x 2 x 2 = 32",
      "",
      "Then Tammy had the answer and needed the number, and an equation turned that into a sentence you could make true.",
      "Some of those you can solve from a fact you already know, with no guessing at all.",
      "",
      "[ex] 3s = 36",
      "[ex] You know 3 x 12 = 36, so s is 12."
    ]},

    { title: "Examine: Can That Be Right?", s: [
      "Examine is the step people skip, and it's the one that catches everything the other three let through.",
      "Jordan's calculator said a raise of $0.35 an hour over 12 hours was worth $42.00 a week.",
      "Round it and 35 cents times 12 is about $4, so $42 is ten times too big, and the calculator only did what his fingers told it to.",
      "Solving an equation even has its own Examine built in, because when Tammy decided the answer was 7 hours, she put the 7 back into 2n = 14 before she believed it, and a true sentence was her check."
    ]},

    { title: "Every Tool Has a Step", s: [
      "Go back to the row of ten tricks, and file each one where it belongs.",
      "Sorting the facts is Explore, choosing a method and estimating are Plan, the order of operations, variables, powers and equations are Solve, and asking whether the answer can be right is Examine.",
      "It was one plan the whole time, and every lesson in this unit added a tool to one of its four steps."
    ]}
  ],

  words: [
    ["Explore", "Step one: what do I know, and what am I trying to find?", 5],
    ["Examine", "Step four: does my answer make sense? Check it against your estimate.", 35],
    ["Estimate", "A quick, rounded answer that tells you roughly where the real one should land.", 10],
    ["Reasonable", "Close enough to your estimate that the answer is probably right.", 37],
    ["Order of Operations", "The agreed hierarchy that tells us which operations to do first.", 19],
    ["Variable", "A letter that holds the place of a number that can change or is not known yet.", 23],
    ["Exponent", "The small raised number that counts how many times the base is used as a factor.", 28],
    ["Equation", "A math sentence with an equals sign in it. It can be true or false.", 31],
    ["Solution", "The number that makes an equation true.", 38]
  ],

  findsAt: 42,
  questions: [
    { tag: "Explore", q: "What is the first step of the four-step plan?",
      find: [2, 5],
      hint: "Go back to A Plan for Problem Solving.",
      choices: [
        "Solve.",
        "Examine.",
        "Explore.",
        "Plan."
      ], right: 2 },

    { tag: "Explore", q: "A word problem arrives with every fact packed into one lump. What should you do before trying to answer it?",
      find: [6],
      hint: "Go back to Classify Information.",
      choices: [
        "Sort the facts into what you know and what you need to find.",
        "Add up every number in it.",
        "Reach for a calculator straight away.",
        "Skip to the last sentence."
      ], right: 0 },

    { tag: "Plan", q: "Estimate 8,324 + 6,936 by rounding.",
      find: [11, 12],
      hint: "Round each number to the thousands. Go back to Estimation Strategy: Using Rounding.",
      choices: [
        "About 1,500",
        "About 14,000",
        "About 15,000",
        "About 16,000"
      ], right: 2 },

    { tag: "Plan", q: "Estimate 1,457 ÷ 33 using patterns.",
      find: [15, 16, 17],
      hint: "Round the divisor, then pick a dividend that divides evenly. Go back to Estimation Strategy: Using Patterns.",
      choices: [
        "About 5",
        "About 50",
        "About 500",
        "About 45"
      ], right: 1 },

    { tag: "Solve", q: "Evaluate 3 + 7 x 4 - 6.",
      find: [20, 21, 22],
      hint: "Multiplication comes before addition and subtraction. Go back to Order of Operations.",
      choices: [
        "34",
        "40",
        "22",
        "25"
      ], right: 3 },

    { tag: "Solve", q: "Evaluate 6x - xy + y if x = 10 and y = 3.",
      find: [23, 25, 26, 27],
      hint: "Replace each letter first, then use the order of operations. Go back to Variables and Expressions.",
      choices: [
        "33",
        "57",
        "63",
        "27"
      ], right: 0 },

    { tag: "Solve", q: "What is 2⁵?",
      find: [28, 30],
      hint: "Write the 2 down five times and multiply. Go back to Powers and Exponents.",
      choices: [
        "10",
        "25",
        "32",
        "7"
      ], right: 2 },

    { tag: "Solve", q: "Solve 3s = 36.",
      find: [33, 34],
      hint: "Which times table fact gives 36? Go back to Solving Equations Mentally.",
      choices: [
        "33",
        "12",
        "39",
        "108"
      ], right: 1 },

    { tag: "Examine", q: "Jordan's calculator said a $0.35 raise over 12 hours was worth $42.00. Why isn't that reasonable?",
      find: [36, 37],
      hint: "Estimate 35 cents times 12 first. Go back to Determine Reasonable Answers.",
      choices: [
        "Calculators are never right.",
        "Raises are always less than a dollar.",
        "12 hours is too many to work.",
        "The estimate is about $4, so $42 is ten times too big."
      ], right: 3 },

    { tag: "Examine", q: "How did Tammy check that 7 was the solution of 2n = 14?",
      find: [38],
      hint: "Go back to Solving Equations Mentally, the last section.",
      choices: [
        "She put 7 back in for n and saw the sentence was true.",
        "She asked the parents.",
        "She guessed a bigger number.",
        "She rounded 14 to 10."
      ], right: 0 }
  ],

  vocabQuestions: [
    { q: "What happens during the <i>Examine</i> step?",
      choices: [
        "You decide what math to use.",
        "You check whether your answer makes sense.",
        "You read the problem for the first time.",
        "You do the arithmetic."
      ], right: 1 },
    { q: "What is an <i>estimate</i>?",
      choices: [
        "The exact answer.",
        "A guess with no numbers in it.",
        "A quick, rounded answer that shows roughly where the real one should land.",
        "The last step of the plan."
      ], right: 2 },
    { q: "In 3⁴, what is the 4 called?",
      choices: [
        "The exponent.",
        "The base.",
        "The solution.",
        "The variable."
      ], right: 0 },
    { q: "What is a <i>variable</i>?",
      choices: [
        "A number that never changes.",
        "The answer to an equation.",
        "A kind of times sign.",
        "A letter that holds the place of a number that can change or is not known yet."
      ], right: 3 },
    { q: "What is the <i>solution</i> of an equation?",
      choices: [
        "The equals sign.",
        "The number that makes it true.",
        "The biggest number in it.",
        "The first step of the plan."
      ], right: 1 }
  ],

  todo: { title: "What To Do Now", s: [
      "Every tool in this unit turned out to belong to one of four steps, and the questions are filed the same way, Explore first and Examine last.",
      "{c} word cards sit at the top of the page, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "Every hint names a lesson, so a wrong answer isn't a dead end; it's an address.",
      "When you miss one, open the lesson it names, read the section it points to, and then come back and try again.",
      "If two misses land in the same step, tell whoever is teaching you, because that step is the one to go over before Unit 2.",
      "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] }
};
