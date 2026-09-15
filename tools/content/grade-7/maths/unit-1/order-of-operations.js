/* maths/order-of-operations
   Grade 7 · maths · unit 1. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   ⚠️ READING SHAPE, and this one is a JUDGEMENT CALL worth recording. Unlike
   1-1 to 1-6 this lesson does contain arithmetic, so it could argue for the
   bracket engine. It is built as a reading because the SKILL is knowing which
   operation happens first - a rule you apply, not work you show. The drilling
   half belongs in a generator that does not exist yet → ROADMAP 37.

   ✅ THE PROSE IN `parts` IS PAUL'S, REBUILT FROM HIS DOC 2026-09-14.
   Source: docs.google.com/document/d/1Wr2txzrQ6eTXM-tp2AdUxkiTRN59mg8rVxYjUpxFbTQ
   A REWRITE, not an edit. What changed from my 2026-09-13 draft:
     - THE YEARBOOK IS GONE. My draft used the book's rolls of film and two
       calculators. Paul uses two STUDENTS disagreeing over 8 + 4 x 2, one
       getting 24 and one getting 16. The method is the same - show the
       disagreement, then the rule that settles it - but his version needs no
       calculator and no props, so the argument is about the math alone.
     - THE HIERARCHY IS TAUGHT AS THREE LEVELS, one section each, and every
       level is shown twice: once on its own and once inside the final problem
       that uses all three.
     - 🚨 HIS OPENING PROBLEM RETURNS AT THE END. "Why This Matters" reruns
       8 + 4 x 2 and names 16 as the answer. That is the lesson closing its own
       loop and must not be trimmed as a repeat.
     - THE BIBLICAL CONNECTION IS A TEACHER NOTE, NOT STUDENT PROSE. His doc
       puts 1 Corinthians 14:33 and 14:40 under Teacher Notes, so it is in
       `ground` and there is no [verse] block in the story. That is his call,
       not an omission.
   ⚠️ MY ADDITIONS ARE TWO SENTENCES, marked inline: definitions of EVALUATE and
   MATH SENTENCE. Both have word cards, the questions use "Evaluate" as an
   instruction four times, and neither word appeared anywhere in his prose.
   → [[feedback-tweak-pauls-lesson-structure]] */
'use strict';
module.exports = {
  id: "maths/order-of-operations",
  slug: "order-of-operations",
  title: "Order of Operations",
  unit: "Math 7 &middot; U1-L7",
  seq: { unit: 1, unitTitle: "Tools for Problem Solving", n: 7 },

  /* ── /teach-plan, 2026-09-13, re-checked against Paul's rewrite 2026-09-14.
        Glencoe Course 2 p24. The markers are still the book's; the METHOD line
        below now describes his example, because his is what shipped. ── */
  plan: {
    objective: "Work out an expression in the right order, so it has only one possible value.",
    markers: [
      "QUOTED, Objective box: 'Evaluate expressions using the order of operations.'",
      "QUOTED, Words to Learn: order of operations",
      "QUOTED, the rule box: '1. Do all operations within grouping symbols first. 2. Do multiplication and division from left to right. 3. Do addition and subtraction from left to right.'",
      "QUOTED: 'To make sure that expressions like 2 x 36 + 3 x 24 have only one value, mathematicians have agreed on the following order of operations.'",
    ],
    method: "SHOW THE DISAGREEMENT FIRST, THEN THE RULE THAT SETTLES IT. The lesson does not open with the hierarchy. It opens with two students working 8 + 4 x 2 and reaching 24 and 16, and then asks how the same problem can give two answers. The rule arrives as the fix for an ambiguity the student has just watched happen. 🚨 THE TWO EQUAL-LEVEL PAIRS ARE THE PART THAT ACTUALLY GETS TAUGHT WRONG. Paul writes it out twice in the negative - multiplication does NOT always come before division, addition does NOT automatically come before subtraction - because the acronym version of this rule teaches exactly that error.",
    exampleOnly: [
      "8 + 4 x 2 and its bracketed variants, 24 / 6 x 2, 15 - 5 + 3, and 6 + 3 x (8 - 4) - WORLD: bare arithmetic, deliberately. This is the one lesson with no situation at all, because the subject IS the notation.",
      "🚨 THE OPENING PROBLEM IS REUSED AT THE END ON PURPOSE. 8 + 4 x 2 opens the lesson as a disagreement and closes it as a settled answer. Cutting the second appearance as a duplicate removes the payoff.",
    ],
    digitize: "The existing reading engine carries the teaching half well, because the lesson IS an argument. Every worked line is marked [ex] so the arithmetic reads as arithmetic rather than as prose. ⚠️ The drilling half - evaluate twenty expressions - needs the missing expressions generator (ROADMAP 37) and is not here. Flagged, not faked.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Math",
    blurb: "Two students, one problem, two different answers. The order of operations is what settles the argument.",
    contains: [
      "8 + 4 x 2 worked two ways, reaching 24 and 16",
      "The three levels, one section each, with the parentheses moved to show what changes",
      "Why multiplication does not always come before division",
      "One problem that uses all three levels, walked through a level at a time",
    ] },
  eyebrow: ["Math 7", "U1-L7", "Tools for Problem Solving"],
  dek: "If two people can work the same problem and get different answers, something is missing. This is the thing that was missing.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Teach students why the order of operations exists before asking them to use it. The main idea is simple: if two people can look at the same math problem and get different answers because they worked in a different order, we have a problem. Mathematics needs an agreed order so the same problem has the same answer.",
        "By the end of the lesson, students should understand this hierarchy: parentheses first, then multiplication and division from left to right, then addition and subtraction from left to right.",
        "The goal is not simply to memorize those three lines. Students should understand why the hierarchy is needed and how to work through it."
      ]},
      { h: "Start With the Problem the Rule Solves", p: [
        "Before explaining the order, show the student why we need one. Write 8 + 4 x 2, and tell the student that two students tried to solve the same problem.",
        "The first simply started on the left: 8 + 4 is 12, then 12 x 2 is 24. The second did the multiplication first: 4 x 2 is 8, then 8 + 8 is 16.",
        "Ask your student: how can the same math problem give us two different answers? That question gives you the reason for the entire lesson. Mathematicians use an agreed order so everyone knows what should happen first, and using that order the correct answer is 16, because multiplication comes before addition."
      ]},
      { h: "Where Students Get Stuck", p: [
        "🚨 Students may assume that every problem should simply be worked from left to right. The opening example shows why that does not work.",
        "They may also think multiplication always comes before division, or addition always comes before subtraction. Keep returning to the hierarchy: parentheses first; multiplication and division are together, left to right; addition and subtraction are together, left to right."
      ]},
      { h: "Teaching Suggestion", p: [
        "Before the student calculates anything, ask what has to happen first. Have the student identify the first operation before solving it.",
        "On 6 + 3 x (8 - 4), ask what has to happen first. There are parentheses, so begin there: 8 - 4 is 4. Now the problem is 6 + 3 x 4. Ask again. Multiplication comes before addition, so 3 x 4 is 12, and 6 + 12 is 18.",
        "As you teach, keep asking the student why each step comes next. That turns the order of operations into a thinking process instead of a rule the student repeats from memory."
      ]},
      { h: "Biblical Connection", p: [
        "The Bible repeatedly shows us that God values order rather than confusion. 1 Corinthians 14:33 says that God is not the author of confusion but of peace, and 1 Corinthians 14:40 says to let all things be done decently and in order.",
        "These verses are speaking about order within the church, not giving us a rule for mathematics. But they remind us of something we can see throughout creation: we serve a God of order, not disorder. Mathematics helps us recognize and describe some of that order.",
        "Numbers also appear repeatedly throughout Scripture. Numbers such as 3, 7, 12 and 40 occur again and again in biblical events and patterns. We do not need to invent hidden meanings for every number to recognize that Scripture regularly uses numbers, measurements, quantities, days, years, generations, distances and groups of people.",
        "Math is not separate from God's creation. It is one of the tools we use to understand and describe the orderly world He made."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Why Does Order Matter?", s: [
      "Two students are working on the same math problem.",
      "",
      "[ex] 8 + 4 x 2",
      "",
      "The first student starts on the left.",
      "",
      "[ex] 8 + 4 = 12",
      "[ex] 12 x 2 = 24",
      "",
      "He writes down 24.",
      "",
      "The second student looks at the same problem but does the multiplication first.",
      "",
      "[ex] 4 x 2 = 8",
      "[ex] 8 + 8 = 16",
      "",
      "She writes down 16.",
      "",
      "Now we have a problem.",
      "They started with the same numbers and the same operation signs, but they ended with two different answers.",
      "They cannot both be correct.",
      "",
      "So how do we decide what happens first?",
      "",
      "That is why we have the order of operations.",
      "Mathematicians use an agreed hierarchy that tells us which part of a math problem to handle first.",
      "That way, two people who follow the same order should arrive at the same answer.",
      /* ⚠️ MINE, two sentences. Both words carry a card, and four of his own
         questions use "Evaluate" as the instruction, but neither word appears
         anywhere in his prose. Placed where the lesson first has both to hand. */
      "A math sentence is numbers and operations written together to say something, the way 8 + 4 x 2 does.",
      "To evaluate one is to work through it and determine its value.",
      "",
      "For our problem, multiplication comes before addition.",
      "",
      "[ex] 4 x 2 = 8",
      "[ex] 8 + 8 = 16",
      "",
      "The correct answer is 16."
    ]},

    { title: "The Hierarchy", s: [
      "Here is the order we will use.",
      "",
      "[ex] First: parentheses",
      "[ex] Second: multiplication and division, from left to right",
      "[ex] Third: addition and subtraction, from left to right",
      "",
      "Think of it as three levels.",
      "Finish the higher level before moving down to the next one.",
      "",
      "Let us work through each level so you can see why it matters."
    ]},

    { title: "First: Parentheses", s: [
      "Whenever you see parentheses, look inside them first.",
      "It does not matter whether the parentheses are on the left, in the middle, or on the right.",
      "If they are there, deal with what is inside them before moving on.",
      "",
      "Look at this one.",
      "",
      "[ex] 8 + (4 x 2)",
      "",
      "The parentheses are on the right, but they still come first.",
      "",
      "[ex] 4 x 2 = 8",
      "[ex] 8 + 8 = 16",
      "",
      "Now look at what happens when we move the parentheses.",
      "",
      "[ex] (8 + 4) x 2",
      "",
      "This time the parentheses tell us to add first.",
      "",
      "[ex] 8 + 4 = 12",
      "[ex] 12 x 2 = 24",
      "",
      "Notice what happened.",
      "We used the same numbers and the same addition and multiplication signs, but the parentheses changed what we were told to do first.",
      "That changed the answer.",
      "",
      "That is the job of parentheses.",
      "They tell you to do this part first."
    ]},

    { title: "What If There Are Two Sets of Parentheses?", s: [
      "Sometimes a math problem contains more than one group.",
      "",
      "[ex] (8 + 4) + (3 + 2)",
      "",
      "Do not mix the two groups together.",
      "Work through what is inside each set of parentheses.",
      "",
      "[ex] 8 + 4 = 12",
      "[ex] 3 + 2 = 5",
      "",
      "Now the original problem has become 12 + 5.",
      "",
      "[ex] 12 + 5 = 17",
      "",
      "The answer is 17.",
      "",
      "Finish what is inside the parentheses first.",
      "Then continue with the rest of the problem."
    ]},

    { title: "Second: Multiplication and Division", s: [
      "Once the parentheses are finished, the next level is multiplication and division.",
      "",
      "Here is something important that is easy to misunderstand.",
      "Multiplication does not always come before division.",
      "",
      "Multiplication and division are on the same level.",
      "When both appear, work from left to right.",
      "",
      "[ex] 24 ÷ 6 x 2",
      "",
      "Start on the left.",
      "The first operation you reach is division.",
      "",
      "[ex] 24 ÷ 6 = 4",
      "[ex] 4 x 2 = 8",
      "",
      "The answer is 8.",
      "",
      "We did not jump ahead and multiply 6 x 2.",
      "Division and multiplication are equal in the hierarchy, so we worked from left to right."
    ]},

    { title: "Third: Addition and Subtraction", s: [
      "After multiplication and division are finished, move to addition and subtraction.",
      "",
      "These two are also on the same level.",
      "That means addition does not automatically come before subtraction.",
      "",
      "[ex] 15 - 5 + 3",
      "",
      "Start on the left.",
      "",
      "[ex] 15 - 5 = 10",
      "[ex] 10 + 3 = 13",
      "",
      "The answer is 13.",
      "",
      "We did the subtraction first because subtraction and addition are on the same level, and the subtraction appeared first as we moved from left to right."
    ]},

    { title: "Now Put the Hierarchy Together", s: [
      "Let us work through a problem that uses all three levels.",
      "",
      "[ex] 6 + 3 x (8 - 4)",
      "",
      "Do not rush into calculating.",
      "Look at the whole problem and ask what has to happen first.",
      "",
      "Check the hierarchy.",
      "First comes parentheses.",
      "",
      "[ex] 8 - 4 = 4",
      "",
      "Now the problem becomes 6 + 3 x 4.",
      "",
      "Check the hierarchy again.",
      "Second comes multiplication and division.",
      "",
      "[ex] 3 x 4 = 12",
      "",
      "Now the problem becomes 6 + 12.",
      "",
      "Check the hierarchy one more time.",
      "Third comes addition and subtraction.",
      "",
      "[ex] 6 + 12 = 18",
      "",
      "The answer is 18.",
      "",
      "We did not guess which operation to use first.",
      "We worked through the hierarchy one level at a time."
    ]},

    { title: "Why This Matters", s: [
      "Remember where we started.",
      "",
      "[ex] 8 + 4 x 2",
      "",
      "One student got 24.",
      "Another student got 16.",
      "",
      "The order of operations tells us that multiplication happens before addition, so the correct answer is 16.",
      "",
      "The rule is not there just to give you something else to memorize.",
      "It solves a real problem.",
      "It gives us an agreed way to read and solve the same math problem.",
      "",
      "When you see a problem with several operations, do not rush.",
      "Look at the whole problem and ask what has to happen first.",
      "Then work your way through the hierarchy."
    ]}
  ],

  words: [
    ["Order of Operations", "The agreed hierarchy that tells us which operations to do first.", 15],
    ["Math Sentence", "Numbers and mathematical operations written together to communicate a mathematical idea or calculation.", 17],
    ["Evaluate", "To work through a math problem and determine its value.", 18],
    ["Parentheses", "Grouping symbols that tell you to handle what is inside them first.", [46, 47]]
  ],

  findsAt: 110,
  questions: [
    { tag: "Why the Rule Exists", q: "Why do we need an order of operations?",
      find: [11, 12, 14, 16],
      hint: "Look at what went wrong for the two students at the start.",
      choices: [
        "To make math problems longer.",
        "So the same math problem has one agreed answer.",
        "Because multiplication is always more important.",
        "So we can use more symbols."
      ], right: 1 },

    { tag: "The Hierarchy", q: "What is first in the hierarchy?",
      find: [24, 30],
      hint: "Whatever is inside them gets handled before anything else.",
      choices: [
        "Addition.",
        "Multiplication.",
        "Parentheses.",
        "Subtraction."
      ], right: 2 },

    { tag: "The Hierarchy", q: "What is second in the hierarchy?",
      find: [25, 59, 62],
      hint: "Two operations share this level, and neither one outranks the other.",
      choices: [
        "Multiplication and division.",
        "Addition and subtraction.",
        "Addition only.",
        "Division only."
      ], right: 0 },

    { tag: "The Hierarchy", q: "What is third in the hierarchy?",
      find: [26, 72, 73],
      hint: "The last level, and it also holds two operations of equal rank.",
      choices: [
        "Parentheses.",
        "Multiplication and division.",
        "Addition and subtraction.",
        "Multiplication only."
      ], right: 2 },

    { tag: "Evaluate It", q: "Evaluate 8 + 4 x 2.",
      find: [19, 20, 21, 22],
      hint: "This is the problem the two students disagreed about. Which one was right?",
      choices: [
        "24",
        "16",
        "20",
        "12"
      ], right: 1 },

    { tag: "Evaluate It", q: "Evaluate 24 ÷ 6 x 2.",
      find: [64, 67, 68, 69],
      hint: "Both operations are on the same level, so the order you read in decides.",
      choices: [
        "2",
        "8",
        "12",
        "24"
      ], right: 1 },

    { tag: "Equal Levels", q: "Why is division done first in 24 ÷ 6 x 2?",
      find: [62, 63, 71],
      hint: "It is not because division outranks multiplication.",
      choices: [
        "Division is always more important than multiplication.",
        "Division and multiplication have equal priority, and division appears first from the left.",
        "Division is easier.",
        "Multiplication must always be last."
      ], right: 1 },

    { tag: "All Three Levels", q: "Evaluate 6 + 3 x (8 - 4).",
      find: [87, 91, 95, 96],
      hint: "Three levels, one at a time, starting with what is inside the parentheses.",
      choices: [
        "18",
        "24",
        "36",
        "12"
      ], right: 0 }
  ],

  vocabQuestions: [
    { q: "What is the <i>order of operations</i>?",
      choices: [
        "The agreed hierarchy that tells us which operations to do first.",
        "The order the numbers were written.",
        "A way to estimate.",
        "The order you press calculator buttons."
      ], right: 0 },
    { q: "What does it mean to <i>evaluate</i> a math problem?",
      choices: [
        "To guess the answer.",
        "To work through it and determine its value.",
        "To put everything in parentheses.",
        "To rewrite the numbers."
      ], right: 1 },
    { q: "What do <i>parentheses</i> tell you?",
      choices: [
        "Skip that part of the problem.",
        "Do what is inside them first.",
        "Multiply everything inside them.",
        "Save that part for last."
      ], right: 1 },
    { q: "When multiplication and division both appear at the same level, what should you do?",
      choices: [
        "Always multiply first.",
        "Always divide first.",
        "Work from left to right.",
        "Choose whichever looks easier."
      ], right: 2 }
  ],

  todo: { title: "What To Do Now", s: [
      "Two people can work the same expression honestly and get different answers, which is exactly why the rule you just read exists.",
      "{c} word cards sit at the top of the page, then {Q} questions, then {v} more questions about those words. {T} questions in all.",
      "Some of them ask you to name a level in the hierarchy and some ask you to work a problem out.",
      "Before you work any of them out, ask the question the lesson keeps asking: what has to happen first?",
      "Check the hierarchy, do that level, then look again.",
      "The one people get wrong is why division comes first in 24 divided by 6 times 2.",
      "It is not because division outranks multiplication.",
      "Read Second: Multiplication and Division again if that one is hard.",
      "Last, the word cards at the top and the check at the bottom of the page."
  ] }
};
