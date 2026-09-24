/* maths/multiplying-decimals
   Grade 7 · maths · unit 2. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, MINE, 2026-09-24. Written on Opus from Glencoe Course 2
   pp60-62 (the 2-4A decimal-model lab and Lesson 2-4), read on the borrowed
   copy the same evening. /natural pass run and stamped.

   READING SHAPE.

   ⚠️ THE WORLD IS THE BOOK'S OWN OPENING, KEPT: music, A at 440 vibrations a
   second, and one half step up multiplying by about 1.06. The true ratio is
   1.0595 (the twelfth root of 2), so the book's 466.4 for A-sharp is close,
   not exact; the prose says "about 1.06" and "about 466" for that reason.
   The snail and the bank account are left out as other worlds.

   ⚠️ NO SCRIPTURE. Paul's call, in the review queue. */
'use strict';
module.exports = {
  id: "maths/multiplying-decimals",
  slug: "multiplying-decimals",
  title: "Multiplying Decimals",
  unit: "Math 7 &middot; U2-L4",
  seq: { unit: 2, unitTitle: "Applications with Decimals", n: 4 },
  natural: "2026-09-24",

  /* ── /teach-plan, 2026-09-24. Glencoe Course 2 pp60-62. ── */
  plan: {
    objective: "Multiply decimals, and put the decimal point in the right place by estimating or by counting decimal places.",
    markers: [
      "QUOTED, 2-4A lab: 'Model 0.4 X 0.6 by shading 4 tenths and 6 tenths.' then 'How does the number of decimal places in a product relate to the number of decimal places in the factors?'",
      "QUOTED, Objective box: 'Multiply decimals.'",
      "QUOTED: 'Use estimation to help place the decimal point in the product.'",
      "QUOTED: 'The number of decimal places in the product is the sum of the number of decimal places in the factors.'",
      "QUOTED, Checking for Understanding: 'Tell in your own words why the number of decimal places in the product of two decimals is equal to the sum of the decimal places in the factors.'",
    ],
    method: "MULTIPLY AS IF THERE WERE NO DECIMALS, THEN PLACE THE POINT. Two ways to place it, and the book teaches both: an estimate tells you roughly how big the answer is, and counting decimal places tells you exactly. The lab's shaded grid shows WHY the counting works: tenths times tenths lands in hundredths.",
    exampleOnly: [
      "Middle A at 440, A-sharp, B, the piano tuner. WORLD: one piano, the book's own music opening.",
      "The shaded 10-by-10 grid for 0.4 x 0.6 is the book's lab model, kept.",
      "Left out on purpose: the snail, the bank account, the tortoise.",
    ],
    digitize: "Reading engine. The grid is described in words; ⚠️ a drawn grid would help and is a visual the site doesn't have yet.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Math",
    blurb: "Every key on a piano is the one below it times about 1.06. Multiplying decimals, and two ways to know where the point goes.",
    contains: [
      "Multiplying as if the decimal points weren't there",
      "Placing the point with an estimate",
      "Placing the point by counting decimal places",
      "Why tenths times tenths lands in hundredths",
    ] },
  eyebrow: ["Math 7", "U2-L4", "Applications with Decimals"],
  dek: "Multiplying decimals is multiplying you already know how to do. The only new question is where the point goes.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "By the end of this lesson your student should be able to multiply two decimals and place the decimal point correctly, either by estimating or by counting the decimal places in the factors."
      ]},
      { h: "Where Students Get Stuck", p: [
        "🚨 Lining up the decimal points, the way you do for addition. Multiplication doesn't line them up; you multiply as whole numbers and place the point at the end.",
        "Counting places from the wrong end. Count from the right of the product, and add zeros on the left if you run out of digits, as in 0.005 x 0.5 = 0.0025."
      ]},
      { h: "Teaching Suggestion", p: [
        "Draw a 10-by-10 grid, shade 4 columns one way and 6 rows the other, and count the overlap: 24 small squares out of 100, so 0.24. That picture is the reason the counting rule works, and it's worth doing once by hand."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Every Key Is the One Before It, Times a Bit", s: [
      "When a piano tuner sets the A above middle C, she tunes the string to vibrate 440 times every second, and every other key is worked out from that one note.",
      "Each key one step up, called a half step, vibrates about 1.06 times as fast as the key below it, so the next key, A-sharp, is 440 x 1.06.",
      "That's a whole number times a decimal, and the answer is going to have a decimal point in it somewhere.",
      "So where does the point go?"
    ]},

    { title: "Multiply First, Place the Point Last", s: [
      "Start by ignoring the decimal point completely and multiplying the digits as if they were whole numbers, which you already know how to do.",
      "",
      "[ex] 440 x 106 = 46640",
      "",
      "Those digits are right, but 46640 is not the answer, because the point has to go back in somewhere.",
      "The first way to place it is to estimate, since 1.06 is a little more than 1, so 440 x 1.06 should be a little more than 440.",
      "The only place the point can go and give a number a little over 440 is right after the 466, so A-sharp vibrates about 466 times a second.",
      "",
      "[ex] 440 x 1.06 = 466.40"
    ]},

    { title: "Counting the Places", s: [
      "An estimate works well when the numbers are easy to round, but there's also a rule that works every time.",
      "The book's own table shows where it comes from, so watch what happens to the decimal places row by row.",
      "",
      "[ex] 5 x 0.7 = 3.5",
      "[ex] 0.5 x 0.7 = 0.35",
      "[ex] 0.5 x 0.07 = 0.035",
      "",
      "Count the decimal places in the two factors and add them, and you get the number of decimal places in the product: zero and one make one, one and one make two, and one and two make three.",
      "So in 440 x 1.06 the factors have zero places and two places, which means the product needs two, and counting two places in from the right of 46640 gives 466.40, the same answer the estimate gave."
    ]},

    { title: "Why the Rule Works", s: [
      "The counting rule can feel like a trick until you see it on a grid of 100 small squares, the kind the book's lab uses.",
      "Shade 4 of the 10 columns to show 0.4, then shade 6 of the 10 rows to show 0.6, and the squares shaded both ways are the product.",
      "",
      "[ex] 0.4 x 0.6 = 0.24",
      "",
      "Twenty-four of the hundred squares are shaded twice, which is 24 hundredths, so tenths times tenths lands in hundredths.",
      "That's the whole reason one decimal place plus one decimal place makes two."
    ]},

    { title: "When You Run Out of Digits", s: [
      "Sometimes counting the places asks for more digits than the product has, and then you write zeros on the left to make room.",
      "Take 0.005 x 0.5, which is really 5 x 5 with four places to count.",
      "",
      "[ex] 0.005 x 0.5",
      "[ex] 5 x 5 = 25",
      "[ex] 3 places + 1 place = 4 places",
      "[ex] 0.0025",
      "",
      "Four places from the right of 25 means adding two zeros in front, and a tiny number times a number less than one gives an even tinier one, which is exactly what the estimate would tell you too."
    ]},

    { title: "One More Step Up the Keyboard", s: [
      "Go back to the piano, where the tuner now needs B, one half step above A-sharp.",
      "She takes the answer she just found and multiplies it by 1.06 again.",
      "",
      "[ex] 466.4 x 1.06 = 494.384",
      "",
      "The factors have one place and two places, so the product has three, and B vibrates about 494 times a second.",
      "Every key on the keyboard comes from multiplying by about 1.06 again, which means the tuner is multiplying decimals the whole way up."
    ]}
  ],

  words: [
    ["Factor", "A number being multiplied. In 0.4 x 0.6, both 0.4 and 0.6 are factors.", 15],
    ["Product", "The answer to a multiplication problem.", 15],
    ["Decimal Places", "The digits to the right of the decimal point. 0.035 has three.", 15],
    ["Estimate", "A quick, rounded answer that tells you roughly how big the exact one should be.", 7]
  ],

  findsAt: 34,
  questions: [
    { tag: "The Method", q: "What's the first step in multiplying 440 x 1.06?",
      find: [4, 5],
      hint: "Read Multiply First, Place the Point Last.",
      choices: [
        "Line up the decimal points.",
        "Round both numbers to whole numbers and stop.",
        "Multiply the digits as if they were whole numbers.",
        "Add the two numbers."
      ], right: 2 },

    { tag: "Estimate", q: "How does an estimate help place the point in 440 x 1.06?",
      find: [7, 8, 9],
      hint: "1.06 is a little more than 1.",
      choices: [
        "It shows the answer should be a little more than 440.",
        "It shows the answer should be about 4.4.",
        "It shows the answer should be about 44,000.",
        "It doesn't help at all."
      ], right: 0 },

    { tag: "Counting", q: "How many decimal places does the product of 0.5 x 0.07 have?",
      find: [14, 15],
      hint: "Add the decimal places in the two factors.",
      choices: ["One", "Two", "Four", "Three"], right: 3 },

    { tag: "Counting", q: "What is 0.5 x 0.7?",
      find: [13, 15],
      hint: "5 x 7 is 35. Now count the places.",
      choices: ["3.5", "0.35", "35", "0.035"], right: 1 },

    { tag: "Why It Works", q: "On a 100-square grid, 0.4 x 0.6 shades how many squares twice?",
      find: [18, 19, 20],
      hint: "4 columns and 6 rows overlap.",
      choices: ["10", "46", "24", "240"], right: 2 },

    { tag: "Zeros", q: "What is 0.005 x 0.5?",
      find: [24, 25, 26, 27],
      hint: "5 x 5 is 25, and the product needs four places.",
      choices: ["0.0025", "0.025", "2.5", "0.25"], right: 0 },

    { tag: "Why It Works", q: "Why does tenths times tenths give hundredths?",
      find: [20, 21],
      hint: "Think about the shaded grid.",
      choices: [
        "Because tenths are bigger than hundredths.",
        "Because the calculator says so.",
        "Because you always add a zero.",
        "Because the overlap is counted in squares that are each one hundredth of the grid."
      ], right: 3 },

    { tag: "Put It Together", q: "The factors in 466.4 x 1.06 have one place and two places. How many places does the product have?",
      find: [31, 32],
      hint: "Add them.",
      choices: ["Two", "Three", "One", "Four"], right: 1 }
  ],

  vocabQuestions: [
    { q: "What is a <i>factor</i>?",
      choices: ["The answer to a multiplication problem.", "A number being multiplied.", "A decimal point.", "A kind of estimate."], right: 1 },
    { q: "What is the <i>product</i> of 0.4 and 0.6?",
      choices: ["0.24", "1.0", "2.4", "0.024"], right: 0 },
    { q: "How many <i>decimal places</i> does 0.035 have?",
      choices: ["One", "Two", "Four", "Three"], right: 3 },
    { q: "What does an <i>estimate</i> tell you when multiplying decimals?",
      choices: ["The exact answer.", "How many zeros to add.", "Roughly how big the answer should be.", "Which number is the factor."], right: 2 }
  ],

  todo: { title: "What To Do Now", s: [
      "Every key on a piano is the key below it times about 1.06, and working out any one of them means multiplying and then placing the point.",
      "{c} word cards sit at the top of the page, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "For every product, multiply the digits first and place the point last, then check it against an estimate before you pick an answer.",
      "If the counting questions trip you up, read Counting the Places again, and look at the table.",
      "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] }
};
