/* maths/unit-2-review
   Grade 7 · maths · unit 2. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 A REVIEW IS A DIAGNOSTIC, NOT A TEST. Same rule as the Unit 1 Review and
   the science and history reviews: every hint names the lesson to go back to,
   so a wrong answer sends him somewhere.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-10-05. Written on Sonnet from the ten Unit 2
   lessons already in this folder and Glencoe Course 2 Chapter 2 Study Guide and
   Review, pp83-86, via the week 6-7 packet (paraphrased notes). /natural pass
   run and stamped.

   ⚠️ THE PACKET WAS THIN on the exact exercise ranges in the book's review, so
   every number here is our own. The book's review blocks (order, round,
   estimate, multiply and divide, powers of ten, scientific notation, round
   quotients, metric, reasonable answers) set the order of the sections.

   ⚠️ ONE WORLD: a running club's results board and treasury. All the numbers are
   made up for practice. No scripture, which is Paul's call and sits in the
   review queue. */
'use strict';
module.exports = {
  id: "maths/unit-2-review",
  slug: "unit-2-review",
  title: "Unit 2 Review: Applications with Decimals",
  unit: "Math 7 &middot; U2-L11",
  seq: { unit: 2, unitTitle: "Applications with Decimals", n: 11 },
  natural: "2026-10-05",

  /* ── /teach-plan, 2026-10-05. Glencoe Course 2, Chapter 2 Study Guide and
        Review pp83-86, and the ten built Unit 2 lessons. ── */
  plan: {
    objective: "Place each Unit 2 tool where it's used when you work with a decimal: before you calculate, while you calculate, and after you have an answer.",
    markers: [
      "BOOK (paraphrased), Study Guide and Review, Communicating Mathematics: choose the term or number that completes each statement about decimals.",
      "BOOK (paraphrased), Objectives and Examples with Review Exercises, one block per lesson: order and compare decimals, round decimals, estimate sums, differences, products and quotients.",
      "BOOK (paraphrased), blocks 2-4 to 2-7: multiply and divide decimals, including by powers of ten, and write numbers in scientific notation and back.",
      "BOOK (paraphrased), blocks 2-8 to 2-10: round quotients, change metric units, and decide whether an answer is reasonable.",
      "BOOK (paraphrased), p86 review exercises: word problems that multiply a rate by a time and divide a total into equal shares.",
    ],
    method: "TEN LESSONS, THREE MOMENTS. Some tools get used before you calculate (compare, round, estimate), some while you calculate (multiply, powers of ten, scientific notation, divide, round the quotient), and some after (metric units, reasonable answers). Filing them by moment turns ten lessons into one habit.",
    exampleOnly: [
      "WORLD: a running club's results board and treasury. Every number is made up for practice, and nothing in the lesson depends on the club.",
      "The book's own review numbers are not copied, since the packet only sampled that page.",
    ],
    digitize: "Reading engine, no new mechanic. Every hint names the lesson to reopen.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Math",
    blurb: "Ten lessons, one habit. Every decimal tool from the unit, filed under the moment you use it: before you calculate, while you calculate, and after.",
    contains: [
      "Before: comparing, rounding and estimating",
      "During: multiplying, powers of ten, scientific notation, dividing and rounding a quotient",
      "After: metric units and checking whether an answer is reasonable",
      "A review with a hint that names the lesson to reopen",
    ] },
  eyebrow: ["Math 7", "U2-L11", "Applications with Decimals"],
  dek: "Decimals can feel like ten separate rules. They're really one habit: size it up, work it out, then check it.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Bring the ten Unit 2 lessons together, check which tools hold, and find the ones that need a second read before Unit 3 starts.",
        "This is a diagnostic, not a test. Every question's hint names the lesson to reopen, so a wrong answer is a pointer and not a grade."
      ]},
      { h: "How to Use It", p: [
        "Read the review once, then do the questions. For every miss, open the lesson the hint names and read just the section it points to, then come back.",
        "If the student misses two questions from the same moment of the habit (before, during or after), that moment is the one to re-teach."
      ]},
      { h: "Where Students Get Stuck", p: [
        "🚨 Moving only one decimal point when dividing, and rounding money down when sharing a cost. The first changes the problem and the second leaves the bill unpaid.",
        "Skipping the last step. A student who gets an answer and stops should be asked what it was supposed to be about, before looking at the key."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "A Board Full of Decimals", s: [
      "A running club posts its results on a board every Saturday, and almost every number on it is a decimal: race times to the hundredth of a second, distances in kilometers, entry fees, even the price of a water bottle.",
      "Somebody has to compare those numbers, round them, add them up and divide the prize money, and nobody wants to get one wrong in front of the whole club.",
      "You spent ten lessons collecting tools for exactly that job, and it can feel like a drawer of ten unrelated gadgets.",
      "So when a decimal lands on your desk, which tool do you reach for first?"
    ]},

    { title: "Before You Calculate", s: [
      "The first three tools all size a number up before you do anything to it, and they save you from the most common mistakes later.",
      "Comparing and Ordering Decimals taught you to line up the decimal points and compare place by place from the left, and the trap is that a longer decimal isn't a bigger one.",
      "Rounding Decimals added the habit of looking at the digit just to the right of the place you want, so a time of 64.77 seconds rounds to 64.8 at the tenths place.",
      "Estimating with Decimals then rounded every number to something easy so you could do the arithmetic in your head and know about where the answer should land.",
      "None of these gives you the final answer, but all three tell you what the final answer ought to look like.",
      "",
      "[ex] 12.4 is greater than 12.38, because 4 tenths beat 3 tenths.",
      "[ex] 3.9 + 5.1 + 2.04 is about 4 + 5 + 2 = 11"
    ]},

    { title: "While You Calculate", s: [
      "Now the real work starts, and the first move for multiplying decimals is to multiply as though the decimal points weren't there and put the point back at the end.",
      "You count the decimal places in both factors and give the product that many, which is why 0.6 times 0.07 comes out with three places.",
      "Powers of Ten gave you a shortcut for the easiest multiplication there is, since multiplying by 10, 100 or 1,000 only slides the point to the right one, two or three places.",
      "Scientific Notation took that idea and wrote very large numbers with one digit in front of the point, times a power of ten, so five million three hundred thousand becomes something you can actually read.",
      "Every one of those is the same discipline: do the digits first, then decide where the decimal point lives.",
      "",
      "[ex] 6 x 7 = 42, so 0.6 x 0.07 = 0.042",
      "[ex] 3.45 x 100 = 345",
      "[ex] 5,300,000 = 5.3 x 10⁶"
    ]},

    { title: "Divide, Then Round the Answer", s: [
      "Division turned up two tools, and the first is the one that makes a decimal divisor stop looking scary: move the divisor's point right until it's whole, and move the dividend's point the same number of places.",
      "Both numbers got multiplied by the same power of ten, so the quotient doesn't change, and the problem is now plain whole-number division.",
      "Then Rounding Quotients covered what to do when a division won't end, and the one rule that matters most is that a cost shared among people rounds up to the next cent so the bill is covered.",
      "Three friends splitting a $20.50 bill each owe $6.8333 and so on, and rounding that down to $6.83 would leave the club a cent short, so each one pays $6.84.",
      "",
      "[ex] 2.4 ÷ 0.6 = 24 ÷ 6 = 4",
      "[ex] $20.50 ÷ 3 = $6.8333... which rounds up to $6.84"
    ]},

    { title: "Measure It, Then Check It", s: [
      "The Metric System gave you a different kind of move, because changing units is multiplying or dividing by 10, 100 or 1,000.",
      "To a smaller unit you multiply and the point slides right, and to a larger unit you divide and the point slides left, so 2,500 milliliters of water is 2.5 liters.",
      "",
      "[ex] 2,500 mL ÷ 1,000 = 2.5 L",
      "",
      "The last tool of the unit wasn't really a calculation at all, because Determine Reasonable Answers is the Examine step of the plan from Unit 1 working on decimals.",
      "Suppose the club treasurer has $60, buys two jerseys at $19.95 and two caps at $9.89, and announces that $15 is left over.",
      "Round those prices and you get about $20, $20, $10 and $10, which is $60 spent and about nothing left, so $15 left over can't be right.",
      "Which of those three moments, before, during or after, is the one people skip?"
    ]},

    { title: "One Habit", s: [
      "Look back at the drawer of ten gadgets, and you can see they were never separate.",
      "Compare, round and estimate come before the calculating, and multiplying, powers of ten, scientific notation, dividing and rounding the quotient are the calculating, while metric units and reasonable answers belong to the checking that comes after.",
      "The question about the skipped step has the answer you'd expect, and it's the last one, since a decimal answer nobody has checked is only a guess with a point in it.",
      "The questions below ask for each tool, and each hint tells you which lesson to reopen if one slips."
    ]}
  ],

  words: [
    ["Estimate", "A quick, rounded answer that shows roughly where the real one should land.", 7],
    ["Decimal places", "The digits to the right of the decimal point. A product has as many as its two factors have together.", 12],
    ["Power of Ten", "A number like 10, 100 or 1,000 made by multiplying 10 by itself.", 13],
    ["Scientific notation", "A way to write a number as one digit in front of the point times a power of ten.", 14],
    ["Divisor", "The number you divide by.", 19],
    ["Quotient", "The answer to a division problem.", 20],
    ["Prefix", "The part at the front of a metric unit, like kilo or milli, that tells you the place value.", 25],
    ["Reasonable", "Close enough to your estimate that the answer is probably right.", 30]
  ],

  findsAt: 36,
  questions: [
    { tag: "Before", q: "Which of these is greater, 7.5 or 7.48?",
      find: [9],
      hint: "Line up the points and compare place by place. Go back to Comparing and Ordering Decimals.",
      choices: [
        "7.5, because 5 tenths is more than 4 tenths.",
        "7.48, because it has more digits.",
        "They're equal.",
        "7.48, because 8 hundredths is more than 5."
      ], right: 0 },

    { tag: "Before", q: "Round 64.77 seconds to the nearest tenth.",
      find: [6],
      hint: "Look at the digit just to the right of the tenths place. Go back to Rounding Decimals.",
      choices: ["64.7", "64.8", "65", "64.78"], right: 1 },

    { tag: "Before", q: "Which estimate is closest for 4.8 x 2.1?",
      find: [10],
      hint: "Round each factor to an easy number. Go back to Estimating with Decimals.",
      choices: ["About 1", "About 100", "About 10", "About 6"], right: 2 },

    { tag: "During", q: "What is 0.6 x 0.07?",
      find: [16],
      hint: "Multiply the digits, then count the decimal places in both factors. Go back to Multiplying Decimals.",
      choices: ["0.42", "0.042", "4.2", "0.0042"], right: 1 },

    { tag: "During", q: "What is 3.45 x 100?",
      find: [17],
      hint: "The point slides right once for each zero. Go back to Powers of Ten.",
      choices: ["0.0345", "34.5", "345", "3,450"], right: 2 },

    { tag: "During", q: "Which is 5,300,000 written in scientific notation?",
      find: [18],
      hint: "One digit in front of the point, then a power of ten. Go back to Scientific Notation.",
      choices: ["5.3 x 10⁶", "53 x 10⁵", "5.3 x 10⁵", "0.53 x 10⁷"], right: 0 },

    { tag: "During", q: "What is 2.4 ÷ 0.6?",
      find: [23],
      hint: "Move both points one place to the right. Go back to Dividing Decimals.",
      choices: ["0.4", "40", "14", "4"], right: 3 },

    { tag: "During", q: "Three friends share a $20.50 bill equally. What does each one pay?",
      find: [22],
      hint: "A shared cost rounds up so the bill is covered. Go back to Rounding Quotients.",
      choices: ["$6.83", "$6.84", "$6.80", "$7.50"], right: 1 },

    { tag: "After", q: "How many liters is 2,500 milliliters?",
      find: [27],
      hint: "Going to a larger unit means dividing. Go back to The Metric System.",
      choices: ["0.25 L", "25 L", "2.5 L", "2,500,000 L"], right: 2 },

    { tag: "After", q: "The treasurer has $60 and buys two $19.95 jerseys and two $9.89 caps, then says $15 is left. Why isn't that reasonable?",
      find: [30],
      hint: "Round each price and add. Go back to Determine Reasonable Answers.",
      choices: [
        "Treasurers can't be trusted.",
        "The estimate is about $60 spent, so almost nothing is left.",
        "Caps always cost more than jerseys.",
        "The answer should be a whole number."
      ], right: 1 }
  ],

  vocabQuestions: [
    { q: "What is an <i>estimate</i>?",
      choices: [
        "The exact answer.",
        "A quick, rounded answer that shows roughly where the real one should land.",
        "The last digit of a number.",
        "A zero added to a decimal."
      ], right: 1 },
    { q: "What do you get when you multiply 0.5 by 0.5, and how many <i>decimal places</i> does it have?",
      choices: [
        "0.25, with two decimal places.",
        "0.25, with one decimal place.",
        "2.5, with one decimal place.",
        "0.025, with three decimal places."
      ], right: 0 },
    { q: "What is <i>scientific notation</i>?",
      choices: [
        "A number with the most digits.",
        "A way to write a number as one digit in front of the point times a power of ten.",
        "A rounded estimate.",
        "A metric prefix."
      ], right: 1 },
    { q: "In 7.2 ÷ 0.9, which number is the <i>divisor</i>?",
      choices: ["7.2", "8", "0.9", "72"], right: 2 },
    { q: "What does the <i>prefix</i> in a metric unit tell you?",
      choices: [
        "Whether it measures length or mass.",
        "The place value, such as thousand or thousandth.",
        "How many people share the unit.",
        "Nothing, it's only a label."
      ], right: 1 }
  ],

  todo: { title: "What To Do Now", s: [
      "Every tool in this unit turned out to belong to one moment of the habit, and the questions come in the same order: before, during and after.",
      "{c} word cards sit at the top of the page, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "Every hint names a lesson, so a wrong answer isn't a dead end; it's an address.",
      "When you miss one, open the lesson it names, read the section it points to, and then come back and try again.",
      "If two misses land in the same moment, tell whoever is teaching you, because that moment is the one to go over before Unit 3.",
      "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] }
};
