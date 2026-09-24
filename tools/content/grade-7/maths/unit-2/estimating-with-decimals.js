/* maths/estimating-with-decimals
   Grade 7 · maths · unit 2. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, MINE, 2026-09-24. Written on Opus from Glencoe Course 2
   pp54-55, read on the borrowed copy the same evening. /natural pass run and
   stamped (THE PASS, all seven steps).

   READING SHAPE.

   ⚠️ THE WORLD IS ONE GROCERY TRIP, MINE. The book opens on airport passenger
   counts and hops to a homework calculator, a product and a division. The
   book's own best idea is the calculator check in Example 3 (Latricia adds six
   numbers and gets an answer clustering proves wrong), so that is the hook,
   and every estimate in the lesson happens in the same store.

   ⚠️ NO SCRIPTURE. Paul's call, in the review queue. */
'use strict';
module.exports = {
  id: "maths/estimating-with-decimals",
  slug: "estimating-with-decimals",
  title: "Estimating with Decimals",
  unit: "Math 7 &middot; U2-L3",
  seq: { unit: 2, unitTitle: "Applications with Decimals", n: 3 },
  natural: "2026-09-24",

  /* ── /teach-plan, 2026-09-24. Glencoe Course 2 pp54-55. ── */
  plan: {
    objective: "Estimate a sum, difference, product or quotient of decimals, and use the estimate to catch a wrong calculator answer.",
    markers: [
      "QUOTED, Objective box: 'Estimate with decimals.' Words to Learn: clustering",
      "QUOTED: 'To estimate by rounding, round each addend to its greatest place-value position. Then complete the operation.'",
      "QUOTED: 'Clustering is used in addition situations if the numbers seem to be clustered around a common quantity.'",
      "QUOTED, Example 3: 'She added 32.8, 29.7, 34.1, 30.9, 27.5, and 33.6 and got 157.9. Check the reasonableness of her answer using clustering.'",
      "QUOTED: 'You can use patterns to estimate quotients.'",
      "QUOTED, Checking for Understanding: 'Write a sentence describing when it makes sense to use the clustering method to estimate a sum.'",
    ],
    method: "THREE TOOLS, ONE JOB. Rounding to the greatest place value handles sums, differences and products; clustering handles a sum of numbers that all sit near the same value; patterns handle a quotient. Every one ends the same way the book's Example 3 does: compare the estimate with the real answer and ask whether it can be right. The lesson carries the U1-L2 and U1-L3 tools over to decimals rather than teaching them new.",
    exampleOnly: [
      "Latricia, her aunt, the grocery store, the six bags, the $5 bills. WORLD: one grocery trip, mine.",
      "The book's six numbers in Example 3 are kept as six grocery bags: 32.8, 29.7, 34.1, 30.9, 27.5 and 33.6, with the wrong total 157.9.",
      "Left out on purpose: the airport passenger counts, a second world.",
    ],
    digitize: "Reading engine, every estimate as [ex] lines. ⚠️ No estimate-then-check generator.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Math",
    blurb: "A self-checkout total that's off by more than twenty dollars, and the ten-second estimate that catches it.",
    contains: [
      "Rounding each decimal before you add, subtract or multiply",
      "Clustering, when every number sits near the same value",
      "Estimating a quotient with patterns",
      "Using an estimate to catch a calculator mistake",
    ] },
  eyebrow: ["Math 7", "U2-L3", "Applications with Decimals"],
  dek: "The screen says one thing and your head says another. A quick estimate tells you which one to trust.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "By the end of this lesson your student should be able to estimate with decimals by rounding, by clustering and by patterns, and use the estimate to decide whether an exact answer is reasonable.",
        "None of the three tools is new. Rounding and patterns came in U1-L2 and U1-L3 with whole numbers, and this lesson carries them over to decimals."
      ]},
      { h: "Where Students Get Stuck", p: [
        "🚨 Students round every number to the nearest whole number out of habit. The book's rule is the greatest place value: 34.9 rounds to 30, not 35, when you're estimating a product.",
        "Clustering only works when the numbers really do sit near one value. Six numbers between 27 and 35 cluster around 30; a list with 3 and 300 in it doesn't cluster at all."
      ]},
      { h: "Teaching Suggestion", p: [
        "Give the student a real receipt and a calculator. Have him estimate the total first, then check it, and talk about how close the two came.",
        "Then deliberately mistype one price and see whether the estimate catches it. That's the whole reason for the lesson."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "A Total That Can't Be Right", s: [
      "Latricia is helping her aunt at the store, and they fill six bags that each cost about thirty dollars, so she rings them up on the self-checkout while her aunt looks for the coupon.",
      "The six bags come to $32.80, $29.70, $34.10, $30.90, $27.50 and $33.60, and the screen shows a total of $157.90.",
      "Her aunt glances at it and says that seems low, but she hasn't added anything, and neither has Latricia.",
      "How do you check a total like that in your head, standing at the register, without adding six decimals?"
    ]},

    { title: "When Every Number Sits Near the Same Value", s: [
      "Look at those six prices again and you'll notice something: every one of them is close to 30.",
      "When a list of numbers bunches up around one value like that, you can estimate the sum by pretending they all equal that value, and it's called clustering.",
      "",
      "[ex] 32.80, 29.70, 34.10, 30.90, 27.50, 33.60",
      "[ex] six numbers near 30",
      "[ex] 30 x 6 = 180",
      "",
      "The six bags should cost about $180, and the screen says $157.90, which is more than twenty dollars short.",
      "That's too far off to be rounding, so something went in wrong, and when Latricia scrolls back through the list she finds one bag that rang up at $2.90 instead of $33.60.",
      "Clustering only works when the numbers really do bunch together, though, because a list with a $3 item and a $300 item in it has no single value to cluster around."
    ]},

    { title: "Rounding: Sums and Differences", s: [
      "Most lists don't cluster, and for those you round each number to its greatest place value, then do the operation with the rounded numbers.",
      "The greatest place value is the place of the first digit on the left, so 5.82 rounds to 6 and 34.90 rounds to 30.",
      "Latricia's aunt also needs a few things from the aisle by the door.",
      "",
      "[ex] 5.82 + 2.19 + 8.10 + 6.05",
      "[ex] 6 + 2 + 8 + 6 = 22",
      "",
      "Those four items come to about $22, and differences work exactly the same way.",
      "If her aunt pays for a $23.90 order with a coupon worth $11.40, the rounded version tells her what's left before the register does."
    ]},

    { title: "Rounding: Products", s: [
      "Products are where estimating saves the most time, because multiplying two decimals by hand is slow and a slip in one digit changes everything.",
      "The deli sells cheese by the pound, and her aunt asks for 3.8 pounds at $4.19 a pound.",
      "",
      "[ex] 3.8 x 4.19",
      "[ex] 4 x 4 = 16",
      "",
      "The cheese should cost about $16, so if the label ever says $1.60 or $160, the decimal point landed in the wrong place.",
      "Round both factors to their greatest place value and the multiplying becomes a fact you already know."
    ]},

    { title: "Patterns: Quotients", s: [
      "Division borrows the pattern trick from Estimation Strategy: Using Patterns, where you round the divisor and then pick a nearby dividend that divides evenly.",
      "At the end of the trip Latricia wants to know about how many $0.59 packs of gum her last $2.30 will buy.",
      "",
      "[ex] 2.30 ÷ 0.59",
      "[ex] 2.4 ÷ 0.6 = 4",
      "",
      "Rounding 0.59 to 0.6 and 2.30 to 2.4 makes a pair that divides cleanly, and the answer is about four packs."
    ]},

    { title: "Why Bother Estimating?", s: [
      "Go back to the self-checkout, where the machine added perfectly and still gave the wrong answer, because a machine can only add what it's given.",
      "Latricia's estimate took about ten seconds, and it was worth more than twenty dollars.",
      "An estimate isn't a lazy answer; it's the answer you should expect, so you can tell when the exact one has gone wrong."
    ]}
  ],

  words: [
    ["Estimate", "A quick, rounded answer that tells you roughly what the exact answer should be.", 32],
    ["Clustering", "Estimating a sum by treating numbers that all sit near one value as if they equal that value.", 5],
    ["Greatest Place Value", "The place of the first digit on the left, which is where you round to when you estimate.", 13],
    ["Reasonable", "Close enough to your estimate that the exact answer is probably right.", 9]
  ],

  findsAt: 33,
  questions: [
    { tag: "Clustering", q: "The six bags cost $32.80, $29.70, $34.10, $30.90, $27.50 and $33.60. About how much should they cost in all?",
      find: [4, 5, 6, 7, 8],
      hint: "Every price is close to the same value. Multiply that value by the number of bags.",
      choices: ["About $60", "About $180", "About $157", "About $300"], right: 1 },

    { tag: "Clustering", q: "Why was the $157.90 total not reasonable?",
      find: [9, 10],
      hint: "Compare it with the clustering estimate.",
      choices: [
        "It was more than twenty dollars below the estimate of about $180.",
        "Totals should always end in zero.",
        "Self-checkouts never make mistakes.",
        "It was higher than the estimate."
      ], right: 0 },

    { tag: "Clustering", q: "When does clustering work?",
      find: [11],
      hint: "Think about the $3 item and the $300 item.",
      choices: [
        "For any list of numbers.",
        "Only for multiplication.",
        "When the numbers all sit near one value.",
        "Only when the numbers are whole."
      ], right: 2 },

    { tag: "Rounding", q: "Estimate 5.82 + 2.19 + 8.10 + 6.05.",
      find: [15, 16],
      hint: "Round each one to its greatest place value, then add.",
      choices: ["About 22", "About 20", "About 25", "About 14"], right: 0 },

    { tag: "Rounding", q: "Estimate 3.8 x 4.19.",
      find: [21, 22],
      hint: "Round both factors, then multiply.",
      choices: ["About 1.6", "About 160", "About 8", "About 16"], right: 3 },

    { tag: "Rounding", q: "The cheese label says $1.60 for 3.8 pounds at $4.19 a pound. What does the estimate tell you?",
      find: [23],
      hint: "The estimate was about $16.",
      choices: [
        "The label is right.",
        "The decimal point landed in the wrong place.",
        "Cheese is always cheap.",
        "You can't estimate a product."
      ], right: 1 },

    { tag: "Patterns", q: "Estimate 2.30 ÷ 0.59.",
      find: [27, 28, 29],
      hint: "Round the divisor to 0.6, then pick a nearby dividend that divides evenly.",
      choices: ["About 40", "About 0.4", "About 4", "About 1"], right: 2 },

    { tag: "Why Estimate", q: "Why did the self-checkout give a wrong total even though it added correctly?",
      find: [30],
      hint: "Read Why Bother Estimating? again.",
      choices: [
        "Machines can't add decimals.",
        "The coupon was wrong.",
        "It rounded every price.",
        "One bag was scanned at the wrong price, and a machine only adds what it's given."
      ], right: 3 }
  ],

  vocabQuestions: [
    { q: "What is an <i>estimate</i>?",
      choices: [
        "The exact answer.",
        "A quick, rounded answer that tells you roughly what the exact answer should be.",
        "A guess with no numbers.",
        "The answer on a calculator."
      ], right: 1 },
    { q: "What is <i>clustering</i>?",
      choices: [
        "Rounding every number to 10.",
        "Adding numbers in groups of two.",
        "Treating numbers that sit near one value as if they equal that value.",
        "Dividing by the number of items."
      ], right: 2 },
    { q: "What is the <i>greatest place value</i> of 16.295?",
      choices: ["The tens place", "The ones place", "The tenths place", "The thousandths place"], right: 0 },
    { q: "When is an answer <i>reasonable</i>?",
      choices: [
        "When it's a whole number.",
        "When a calculator gave it.",
        "When it's bigger than the estimate.",
        "When it's close enough to your estimate that it's probably right."
      ], right: 3 }
  ],

  todo: { title: "What To Do Now", s: [
      "Latricia's ten-second estimate caught a twenty-dollar mistake, and every question here asks you to make that same kind of estimate.",
      "{c} word cards sit at the top of the page, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "Before you answer one, decide which tool fits: clustering when the numbers bunch together, rounding for sums, differences and products, and patterns for a quotient.",
      "If the clustering questions trip you up, read When Every Number Sits Near the Same Value again.",
      "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] }
};
