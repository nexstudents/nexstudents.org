/* maths/powers-and-exponents
   Grade 7 · maths · unit 1. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, MINE, 2026-09-24. Written on Opus from Glencoe Course 2
   pp32-33, read on the borrowed copy the same evening. Not Paul's rewrite; he
   has not seen it. /natural has run over it once.

   READING SHAPE, same call as U1-L7 and U1-L8.

   ⚠️ THE WORLD IS MINE, NOT THE BOOK'S. The book opens on junk mail and
   saving 150,000 trees, which is a fact about paper, not about powers. The
   lesson is set on one tiled floor instead, because a square of tiles is
   where the word "squared" actually comes from and a cube of boxes is where
   "cubed" does. That is the method made visible, so it earned the swap. The
   book's own numbers (3^4, 2^5, 5^3, x^3, a^4, n^4 with n = 3, 10^5) are kept.

   ⚠️ SUPERSCRIPT DIGITS (² ³ ⁴ ⁵) are real Unicode characters. Listen to the
   baked voice on them before shipping: it should say "squared", "cubed", "to
   the fourth". If it says "three two", the voice lines need spelling out.

   ⚠️ NO SCRIPTURE. Paul's call, in the review queue. */
'use strict';
module.exports = {
  id: "maths/powers-and-exponents",
  slug: "powers-and-exponents",
  title: "Powers and Exponents",
  unit: "Math 7 &middot; U1-L9",
  seq: { unit: 1, unitTitle: "Tools for Problem Solving", n: 9 },
  natural: "2026-09-24",

  /* ── /teach-plan, 2026-09-24. Glencoe Course 2 pp32-33. ── */
  plan: {
    objective: "Write a repeated multiplication as a power, write a power out as a product, and work out its value.",
    markers: [
      "QUOTED, Objective box: 'Use powers and exponents in expressions.'",
      "QUOTED, Words to Learn: factors, exponent, base, powers, cubed, squared",
      "QUOTED: 'When two or more numbers are multiplied, these numbers are called factors of the product. When the same factor is used, you may use an exponent to simplify the notation.'",
      "QUOTED: 'The common factor is called the base. Numbers expressed using exponents are called powers.'",
      "QUOTED, the new rule box: '1. Do all operations within grouping symbols first. 2. Evaluate all powers before other operations. 3. Do multiplication and division from left to right. 4. Do addition and subtraction from left to right.'",
      "QUOTED, Checking for Understanding: 'Tell, in your own words, what powers are. Use the terms factor, base, and exponent.'",
    ],
    method: "LONG FORM FIRST, THEN THE SHORTHAND, BOTH DIRECTIONS. The book writes 100,000 out as five 10s multiplied, then collapses it to 10 with a small 5, and labels the base and the exponent on that one example. Its worked examples run the trip both ways (power to product, product to power) and then evaluate. The last move adds powers as a new level in the order of operations, which is U1-L7 growing a step.",
    exampleOnly: [
      "Marcus, the bathroom floor, the square tiles and the boxes stacked into a cube. WORLD: one tiling job. Mine, see the header.",
      "The book's own numbers are kept: 3^4, 2x2x2x2x2, 5^3, x^3, a^4, n^4 with n = 3, and 10^5 = 100,000.",
      "Left out on purpose: the junk mail and 150,000 trees, the calculator key hint.",
    ],
    digitize: "Reading engine. Every product and every power is an [ex] line. ⚠️ No generator for 'write this as a power' drills; the questions carry the practice for now.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Math",
    blurb: "Why a number times itself is called squared, found on a bathroom floor, and the small raised number that saves you writing it out.",
    contains: [
      "A square of tiles, and where the word squared comes from",
      "Base, exponent and power, named on one example",
      "Writing a power out as a product, and a product as a power",
      "Where powers go in the order of operations",
    ] },
  eyebrow: ["Math 7", "U1-L9", "Tools for Problem Solving"],
  dek: "A number multiplied by itself over and over gets long fast. A small raised number fixes that, and a tiled floor explains its name.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "By the end of this lesson your student should be able to read 5³ as 5 used as a factor three times, write it out as 5 x 5 x 5, write a repeated product the other way as a power, and work out the value.",
        "The lesson also adds a step to the order of operations from U1-L7: powers come right after grouping symbols and before multiplication."
      ]},
      { h: "Start With Something Square", p: [
        "If you have any square tiles, sticky notes or crackers, lay out a 3 by 3 square before reading. Ask how many there are and how the student got the number.",
        "Then stack a cube if you can. The words squared and cubed stop being strange the moment the student has made each shape with his hands."
      ]},
      { h: "Where Students Get Stuck", p: [
        "🚨 The biggest trap is multiplying the base by the exponent. 3⁴ is not 3 x 4 = 12, it is 3 x 3 x 3 x 3 = 81. Have the student write the product out every time until the mistake stops.",
        "The second trap is in the order of operations. In 2 + 3², the power goes first, so the answer is 11. Adding first and then squaring gives 25, which is wrong.",
        "It also helps to say the exponent is a count, not a number being multiplied. It counts how many times the base appears."
      ]},
      { h: "Teaching Suggestion", p: [
        "Point at the small raised number and ask 'how many times?' Point at the big number and ask 'how many times what?' Those two questions carry the whole lesson.",
        "For 10 to a power, have the student count the zeros. 10⁵ has five zeros, and that pattern is the reason the book opened on 100,000."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Nine Tiles on the Floor", s: [
      "Marcus is helping his uncle tile a small bathroom floor, and the tiles are perfect squares, each one exactly a foot on every side.",
      "He sets down three in a row, then a second row of three under it and a third under that, until he's made a bigger square.",
      "",
      "[ex] 3 x 3 = 9",
      "",
      "That's nine tiles, and he didn't have to count them one at a time, because three rows of three is 3 times 3.",
      "Any square patch works the same way, since a square always has as many rows as it has tiles in each row.",
      "The floor needs a bigger patch than that, so he lays out five rows of five.",
      "",
      "[ex] 5 x 5 = 25",
      "",
      "His uncle glances over and says that's five squared, twenty-five.",
      "Marcus has heard the word squared his whole life, but he's never once wondered why a number would be called that."
    ]},

    { title: "A Shorter Way to Write It", s: [
      "When numbers are multiplied, each of them is called a factor, so in 5 x 5 the 5 is a factor twice.",
      "When the same factor shows up again and again, math has a shorter way to write it.",
      "",
      "[ex] 5 x 5 = 5²",
      "",
      "The big number is the base, the factor being multiplied, and the small raised number is the exponent, which counts how many times the base is used as a factor.",
      "A number written with an exponent, like 5², is called a power.",
      "So 5² means 5 used as a factor twice, and you can read it as five to the second power or, the way Marcus's uncle said it, five squared."
    ]},

    { title: "So Why Squared?", s: [
      "Look back at the floor, where five rows of five tiles made a square, and 5² is the number of tiles in that square.",
      "That's the whole reason, and it was sitting on the floor the entire time: a number times itself is the count of a square.",
      "Then the tile delivery shows up, and the boxes happen to be cubes, so Marcus stacks them three wide, three deep and three high, making a cube out of smaller cubes.",
      "",
      "[ex] 3 x 3 x 3 = 3³ = 27",
      "",
      "That's 27 boxes, and 3³ is read as three to the third power or, because of the shape it makes, three cubed."
    ]},

    { title: "Past the Third Power", s: [
      "A fourth power has no shape you can stack on a floor, but the idea doesn't need one, because the exponent still counts how many times the base is used as a factor.",
      "",
      "[ex] 3⁴ = 3 x 3 x 3 x 3 = 81",
      "",
      "Here's the mistake almost everybody makes once: 3⁴ is not 3 x 4.",
      "The 4 isn't being multiplied at all; it's counting, and it says to write the 3 down four times.",
      "The trip works backwards too, so when you see the same factor over and over, count them, and that count becomes the exponent.",
      "",
      "[ex] 2 x 2 x 2 x 2 x 2 = 2⁵ = 32",
      "",
      "Powers of 10 are the easiest ones to check, because the exponent tells you how many zeros to write.",
      "Five tens make five zeros, and a line that needed four times signs now fits in three characters.",
      "",
      "[ex] 10⁵ = 10 x 10 x 10 x 10 x 10 = 100,000"
    ]},

    { title: "Letters Can Have Powers Too", s: [
      "In the last lesson a letter stood in for a number, and a letter can carry an exponent just as easily.",
      "",
      "[ex] x³ = x · x · x",
      "[ex] a · a · a · a = a⁴",
      "",
      "Notice the raised dot in those lines, which is another way to write multiply.",
      "It keeps the times sign from being mistaken for the letter x, and here the x is sitting right there.",
      "To evaluate a power with a letter in it, you hand the letter its number first, the same way you did with 2n.",
      "",
      "[ex] n⁴ when n = 3",
      "[ex] 3⁴   (replace n with 3)",
      "[ex] 3 x 3 x 3 x 3 = 81"
    ]},

    { title: "One More Level in the Order", s: [
      "Powers need a place in the order of operations, and they get one near the top, right after grouping symbols.",
      "",
      "[ex] First: grouping symbols, like parentheses",
      "[ex] Second: powers",
      "[ex] Third: multiplication and division, from left to right",
      "[ex] Fourth: addition and subtraction, from left to right",
      "",
      "To see why it matters, work this one with the power first.",
      "",
      "[ex] 2 + 3²",
      "[ex] 2 + 9   (the power first)",
      "[ex] = 11",
      "",
      "If you added first, you'd get 5², which is 25, and that's a completely different number from the same problem.",
      "It's the same argument the two students had over 8 + 4 x 2, and the fix is the same: an agreed order, so the problem has one answer."
    ]}
  ],

  words: [
    ["Factors", "Numbers that are multiplied together.", 9],
    ["Base", "The factor that is being multiplied over and over.", 12],
    ["Exponent", "The small raised number that counts how many times the base is used as a factor.", 12],
    ["Power", "A number written with an exponent, like 5² or 10⁵.", 13],
    ["Squared", "Raised to the second power, like the number of tiles in a square.", 15],
    ["Cubed", "Raised to the third power, like the number of blocks in a cube.", 19]
  ],

  findsAt: 49,
  questions: [
    { tag: "Naming the Parts", q: "In 3⁴, which number is the base?",
      find: [12, 21],
      hint: "The base is the factor being multiplied, not the one doing the counting.",
      choices: [
        "4",
        "3",
        "12",
        "81"
      ], right: 1 },

    { tag: "Naming the Parts", q: "What does the exponent tell you?",
      find: [12, 20],
      hint: "It's a count, not a number being multiplied.",
      choices: [
        "What to add to the base.",
        "How many times the base is used as a factor.",
        "How many zeros the answer has, every time.",
        "Which number to divide by."
      ], right: 1 },

    { tag: "Where the Word Comes From", q: "Why is 5 x 5 called five squared?",
      find: [4, 15, 16],
      hint: "Think about what five rows of five tiles look like on the floor.",
      choices: [
        "Because 5 is a square number on every calculator.",
        "Because it's the number of tiles in a square five tiles on a side.",
        "Because squared means doubled.",
        "Because the answer ends in 5."
      ], right: 1 },

    { tag: "Write It Out", q: "What is 3⁴ written as a product?",
      find: [21, 22, 23],
      hint: "Write the base down as many times as the exponent says.",
      choices: [
        "3 x 4",
        "4 x 4 x 4",
        "3 x 3 x 3 x 3",
        "3 + 3 + 3 + 3"
      ], right: 2 },

    { tag: "Write It Short", q: "How do you write 2 x 2 x 2 x 2 x 2 using an exponent?",
      find: [24, 25],
      hint: "Count how many 2s there are.",
      choices: [
        "5²",
        "2 x 5",
        "2⁵",
        "10"
      ], right: 2 },

    { tag: "Evaluate It", q: "What is 10⁵?",
      find: [26, 28],
      hint: "The exponent tells you how many zeros.",
      choices: [
        "50",
        "1,000",
        "10,000",
        "100,000"
      ], right: 3 },

    { tag: "Evaluate It", q: "Evaluate n⁴ if n = 3.",
      find: [34, 35, 36, 37],
      hint: "Hand the letter its number, then write the base out four times.",
      choices: [
        "12",
        "7",
        "64",
        "81"
      ], right: 3 },

    { tag: "The New Level", q: "Evaluate 2 + 3².",
      find: [44, 45, 46, 47],
      hint: "Powers come before addition.",
      choices: [
        "25",
        "11",
        "10",
        "8"
      ], right: 1 }
  ],

  vocabQuestions: [
    { q: "What are <i>factors</i>?",
      choices: [
        "Numbers that are added together.",
        "Numbers that are multiplied together.",
        "The answer to a division problem.",
        "Numbers with a zero on the end."
      ], right: 1 },
    { q: "In 5², which number is the <i>exponent</i>?",
      choices: [
        "5",
        "25",
        "2",
        "10"
      ], right: 2 },
    { q: "What is a <i>power</i>?",
      choices: [
        "A number written with an exponent.",
        "Any number bigger than 100.",
        "The answer to an addition problem.",
        "A kind of calculator key."
      ], right: 0 },
    { q: "What does <i>cubed</i> mean?",
      choices: [
        "Multiplied by 3.",
        "Raised to the second power.",
        "Divided into three parts.",
        "Raised to the third power."
      ], right: 3 },
    { q: "What is the <i>base</i> in 10⁵?",
      choices: [
        "5",
        "10",
        "50",
        "100,000"
      ], right: 1 }
  ],

  todo: { title: "What To Do Now", s: [
      "A square of tiles gave the word squared its meaning, and a small raised number turned five tens into something you can write in three characters.",
      "{c} word cards sit at the top of the page, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "Some ask you to name the base or the exponent, some ask you to write a power out or shrink a product down, and some ask you to work one out.",
      "Before you work out any power, write it out as a product first, because that one line stops the most common mistake.",
      "The mistake is reading 3⁴ as 3 times 4, and if that's the one you picked, read Past the Third Power again.",
      "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] }
};
