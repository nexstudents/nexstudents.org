/* maths/unit-2-review
   Grade 7 · maths · unit 2. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 A REVIEW IS A DIAGNOSTIC, NOT A TEST. Same rule as the Unit 1 Review and
   the science and history reviews: every hint names the lesson to go back to,
   so a wrong answer sends him somewhere.

   🚨 REWRITTEN 2026-10-13 (Sonnet, checked by Opus) after Kolten said the lessons
   don't explain anything. The 2026-10-05 version crammed ten lessons into
   paragraphs of three tools each, so a review of a tool he'd forgotten
   explained it in one run-on sentence. This one re-shows each of the ten tools
   ONCE, as a short Watch It Worked with one tiny example (compare, round,
   estimate, multiply, powers of ten, scientific notation, divide, round the
   quotient, metric, reasonable), sorted by when you use them (before, while,
   after), then a Your Turn that mixes them. The questions are unchanged in
   what they ask; their finds were recomputed. Word cards cut from 8 to 6.

   ⚠️ ONE WORLD: a running club's results board and treasury. All the numbers are
   made up for practice. No scripture, which is Paul's call and sits in the
   review queue. Walk and Your Turn numbers (8.6 vs 8.57, 52.38, 6.1 x 3.9,
   0.4 x 0.08, 2.75 x 100, 7,200,000, 3.6 / 0.4, $25 / 3, 4,300 g, the
   $19.95 jerseys; $26 / 3, 2.5 km x 4, 62,000) are not on the homework sheet.
   ⚠️ NO ADDED FACTS. */
'use strict';
module.exports = {
  id: "maths/unit-2-review",
  slug: "unit-2-review",
  title: "Unit 2 Review: Applications with Decimals",
  unit: "Math 7 &middot; U2-L11",
  seq: { unit: 2, unitTitle: "Applications with Decimals", n: 11 },
  natural: "2026-10-13",

  /* ── /teach-plan, rewritten 2026-10-13. Glencoe Course 2, Chapter 2 Study Guide and
        Review pp83-86, and the ten built Unit 2 lessons. ── */
  plan: {
    objective: "Place each Unit 2 tool where it's used when you work with a decimal: before you calculate, while you calculate, and after you have an answer.",
    markers: [
      "BOOK (paraphrased), Study Guide and Review, Communicating Mathematics: choose the term or number that completes each statement about decimals.",
      "BOOK (paraphrased), Objectives and Examples with Review Exercises, one block per lesson: order and compare decimals, round decimals, estimate sums, differences, products and quotients.",
      "BOOK (paraphrased), blocks 2-4 to 2-7: multiply and divide decimals, including by powers of ten, and write numbers in scientific notation and back.",
      "BOOK (paraphrased), blocks 2-8 to 2-10: round quotients, change metric units, and decide whether an answer is reasonable.",
    ],
    method: "TEN TOOLS, THREE MOMENTS, ONE TINY EXAMPLE EACH. Before you calculate (compare, round, estimate), while you calculate (multiply, powers of ten, scientific notation, divide, round the quotient), and after (metric units, reasonable answers). Each tool is re-shown once as a short walkthrough, not re-taught.",
    exampleOnly: [
      "WORLD: a running club's results board and treasury. Every number is made up for practice, and nothing in the lesson depends on the club.",
      "The book's own review numbers are not copied, since the packet only sampled that page.",
    ],
    digitize: "Reading engine. Ten short Watch It Worked walkthroughs, one per tool, and a Your Turn with typed answers that mixes them. Every hint names the lesson to reopen.",
    unclear: "",
  },

  /* The practice half, on paper (tools/math-homework.js). subject is the FOLDER, "maths". */
  sheet: { slug: "unit-2-review-homework", subject: "maths",
    note: "Print it and work every problem on paper. No multiple choice this time." },

  shelf: { grades: [7], subject: "Math",
    blurb: "Ten lessons, one habit. Every decimal tool from the unit shown once with a tiny worked example, filed under the moment you use it: before you calculate, while you calculate, and after.",
    contains: [
      "Before: comparing, rounding and estimating, one worked example each",
      "During: multiplying, powers of ten, scientific notation, dividing and rounding a quotient",
      "After: metric units and checking whether an answer is reasonable",
      "Your Turn: three mixed problems, and a review with a hint that names the lesson to reopen",
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
        "If your student misses two questions from the same moment of the habit (before, during or after), that moment is the one to re-teach."
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
      "A running club posts its results on a board every Saturday, and almost every number on it is a decimal, like race times, distances and entry fees.",
      "Somebody has to compare those numbers, round them, multiply them and divide the prize money, and nobody wants to get one wrong in front of the whole club.",
      "You've spent ten lessons collecting tools for that job, and this lesson shows each tool one time, so you can see which ones feel shaky.",
      "The tools sort into three moments, which are before you calculate, while you calculate, and after you have an answer."
    ]},

    { title: "Before You Calculate", s: [
      "The first three tools size a number up before you do anything to it, and they save you from the most common mistakes later.",
      "Each one gets a quick example, using made-up numbers from the club.",
      "",
      "[walk] Compare 8.6 and 8.57 to see which is greater.",
      "[step] Line up the decimal points, and add a zero to 8.6 so both have two decimal places. || 8.60\n8.57",
      "[step] Compare place by place from the left, where the ones are both 8 but the tenths are 6 and 5. || 6 tenths  >  5 tenths",
      "[step] So 8.6 is greater than 8.57, even though 8.57 has more digits. || 8.6  >  8.57",
      "",
      "[walk] Round a race time of 52.38 seconds to the nearest tenth.",
      "[step] The tenths place is the 3, so that's the digit you're keeping. || 52.38  →  keep the 3",
      "[step] The digit next door is the 8, which is 5 or more, so the 3 goes up by one. || 3 + 1 = 4",
      "[step] Everything after it drops off. || 52.4 seconds",
      "",
      "An {{estimate}} is a quick, rough answer that tells you about where the real answer should land, and you get it by rounding to easy numbers.",
      "That's why rounding comes first, because easy numbers let you do the math in your head.",
      "",
      "[walk] Estimate 6.1 × 3.9.",
      "[step] Round each number to an easy one. || 6.1  →  6\n3.9  →  4",
      "[step] Multiply the easy numbers. || 6 × 4 = 24",
      "[step] So the real answer should land near 24. || about 24",
      "",
      "None of these three gives you the final answer, but all three tell you what the final answer ought to look like."
    ]},

    { title: "While You Calculate", s: [
      "Now the real work starts, and the main rule for multiplying decimals is to multiply the digits first and put the point back at the end.",
      "You count the {{decimal places}}, which are the digits to the right of the point, in both numbers, and the answer gets that many.",
      "",
      "[walk] Multiply 0.4 × 0.08.",
      "[step] Ignore the points and multiply the digits. || 4 × 8 = 32",
      "[step] Count the decimal places, where 0.4 has one and 0.08 has two, so the answer has three. || 1 + 2 = 3 places",
      "[step] Count three places in from the right of 32, adding a zero to make room. || 0.032",
      "",
      "A {{power of ten}} is a number like 10, 100 or 1,000, and multiplying by one just slides the decimal point to the right.",
      "It's the quickest multiplication there is, because there's no arithmetic, only a slide.",
      "",
      "[walk] Multiply 2.75 × 100.",
      "[step] The number 100 has two zeros, so slide the point two places to the right. || 2.75  →  27.5  →  275.",
      "[step] So 2.75 × 100 is 275. || 2.75 × 100 = 275",
      "",
      "{{Scientific notation}} writes a very big number as one digit in front of the point, times a power of ten.",
      "It keeps a number with lots of zeros short enough to read at a glance.",
      "",
      "[walk] Write 7,200,000 in scientific notation.",
      "[step] Put the point after the first digit, which gives 7.2. || 7.2",
      "[step] Count how many places the point moved from the end of 7,200,000, which is six. || 7,200,000.  →  7.2   (6 places)",
      "[step] So 7,200,000 is 7.2 times 10 to the sixth power. || 7.2 × 10⁶",
      "",
      "To divide by a decimal, the {{divisor}}, which is the number you divide by, has to become a whole number first.",
      "Once it's whole, the division turns into plain whole-number division.",
      "",
      "[walk] Divide 3.6 ÷ 0.4.",
      "[step] Slide the divisor's point one place right to make it a whole number. || 0.4  →  4",
      "[step] Slide the other number's point the same one place. || 3.6  →  36",
      "[step] Now divide plain whole numbers. || 36 ÷ 4 = 9",
      "",
      "Sometimes a division never ends, and when a cost is shared among people, you round up so the bill gets paid.",
      "",
      "[walk] Three friends share a $25 bill, so find what each pays to the cent.",
      "[step] Divide to split it evenly. || 25 ÷ 3 = 8.3333…",
      "[step] Rounding to the nearest cent would give $8.33, but three of those make only $24.99, which is a cent short. || 3 × 8.33 = 24.99",
      "[step] Round up to $8.34, and the bill is covered. || 3 × 8.34 = 25.02"
    ]},

    { title: "After You Have an Answer", s: [
      "The last two tools are for finishing the job, and the first is changing units, because the metric system moves in tens.",
      "To a bigger unit the number gets smaller and you divide, and to a smaller unit the number gets bigger and you multiply.",
      "",
      "[walk] Change 4,300 grams into kilograms.",
      "[step] A kilogram is bigger than a gram, so the number gets smaller and you divide. || g  →  kg   (bigger unit)\ndivide",
      "[step] Kilo is three rungs up the ladder, so you divide by 1,000 and the point slides three places left. || 4300  →  4.3",
      "[step] So 4,300 grams is 4.3 kilograms. || 4,300 g = 4.3 kg",
      "",
      "The very last tool is checking, because an answer is {{reasonable}} when it's about the same size as your estimate.",
      "The club treasurer has $60, buys two jerseys at $19.95 and two caps at $9.89, and announces that $15 is left over.",
      "",
      "[walk] Decide whether $15 left over is reasonable.",
      "[step] Round the prices to easy numbers, which are $20, $20, $10 and $10. || 19.95 → 20\n9.89 → 10",
      "[step] Add them to estimate the total spent. || 20 + 20 + 10 + 10 = 60",
      "[step] Subtract from the $60 the treasurer started with. || 60 − 60 = 0",
      "[step] The estimate says about nothing is left, so $15 left over can't be right. || NOT reasonable"
    ]},

    { title: "One Habit", s: [
      "Look back at the ten tools, and you can see they were never separate.",
      "Compare, round and estimate come before the calculating, and multiplying, powers of ten, scientific notation, dividing and rounding the quotient are the calculating, while metric units and reasonable answers belong to the checking that comes after.",
      "A decimal answer nobody has checked is only a guess with a point in it.",
      "The questions below ask for each tool, and each hint tells you which lesson to reopen if one slips."
    ]}
  ],

  words: [
    ["Estimate", "A quick, rounded answer that shows roughly where the real one should land.", 14],
    ["Decimal places", "The digits to the right of the decimal point. A product has as many as its two factors have together.", 22],
    ["Power of Ten", "A number like 10, 100 or 1,000 made by multiplying 10 by itself.", 27],
    ["Scientific notation", "A way to write a number as one digit in front of the point times a power of ten.", 32],
    ["Divisor", "The number you divide by.", 38],
    ["Reasonable", "Close enough to your estimate that the answer is probably right.", 55]
  ],

  findsAt: 66,
  questions: [
    { tag: "Before", q: "Which of these is greater, 7.5 or 7.48?",
      find: [8, 9],
      hint: "Line up the points and compare place by place. Go back to Comparing and Ordering Decimals.",
      choices: [
        "7.5, because 5 tenths is more than 4 tenths.",
        "7.48, because it has more digits.",
        "They're equal.",
        "7.48, because 8 hundredths is more than 5."
      ], right: 0 },

    { tag: "Before", q: "Round 64.77 seconds to the nearest tenth.",
      find: [12],
      hint: "Look at the digit just to the right of the tenths place. Go back to Rounding Decimals.",
      choices: ["64.7", "64.8", "65", "64.78"], right: 1 },

    { tag: "Before", q: "Which estimate is closest for 4.8 x 2.1?",
      find: [17, 18],
      hint: "Round each factor to an easy number. Go back to Estimating with Decimals.",
      choices: ["About 1", "About 100", "About 10", "About 6"], right: 2 },

    { tag: "During", q: "What is 0.6 x 0.07?",
      find: [25, 26],
      hint: "Multiply the digits, then count the decimal places in both factors. Go back to Multiplying Decimals.",
      choices: ["0.42", "0.042", "4.2", "0.0042"], right: 1 },

    { tag: "During", q: "What is 3.45 x 100?",
      find: [30],
      hint: "The point slides right once for each zero. Go back to Powers of Ten.",
      choices: ["0.0345", "34.5", "345", "3,450"], right: 2 },

    { tag: "During", q: "Which is 5,300,000 written in scientific notation?",
      find: [36, 37],
      hint: "One digit in front of the point, then a power of ten. Go back to Scientific Notation.",
      choices: ["5.3 x 10⁶", "53 x 10⁵", "5.3 x 10⁵", "0.53 x 10⁷"], right: 0 },

    { tag: "During", q: "What is 2.4 ÷ 0.6?",
      find: [41, 42, 43],
      hint: "Move both points one place to the right. Go back to Dividing Decimals.",
      choices: ["0.4", "40", "14", "4"], right: 3 },

    { tag: "During", q: "Three friends share a $20.50 bill equally. What does each one pay?",
      find: [47, 48],
      hint: "A shared cost rounds up so the bill is covered. Go back to Rounding Quotients.",
      choices: ["$6.83", "$6.84", "$6.80", "$7.50"], right: 1 },

    { tag: "After", q: "How many liters is 2,500 milliliters?",
      find: [52, 53],
      hint: "Going to a larger unit means dividing. Go back to The Metric System.",
      choices: ["0.25 L", "25 L", "2.5 L", "2,500,000 L"], right: 2 },

    { tag: "After", q: "The treasurer has $60 and buys two $19.95 jerseys and two $9.89 caps, then says $15 is left. Why isn't that reasonable?",
      find: [59, 60, 61],
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
    { q: "Which of these is a <i>power of ten</i>?",
      choices: ["12", "100", "25", "7.5"], right: 1 },
    { q: "What is <i>scientific notation</i>?",
      choices: [
        "A number with the most digits.",
        "A way to write a number as one digit in front of the point times a power of ten.",
        "A rounded estimate.",
        "A metric prefix."
      ], right: 1 },
    { q: "In 7.2 ÷ 0.9, which number is the <i>divisor</i>?",
      choices: ["7.2", "8", "0.9", "72"], right: 2 },
    { q: "When is an answer <i>reasonable</i>?",
      choices: [
        "When it's a whole number.",
        "When it's about the same size as your estimate.",
        "When the calculator shows it.",
        "When it has a decimal point."
      ], right: 1 }
  ],

  work: [
    { title: "Prize Money",
      ask: "The club has $26 in prize money to share evenly among 3 runners, and the shares must cover all of it. 26 ÷ 3 = 8.6666…",
      steps: [
        { ask: "Round 8.6666… to the nearest cent, which is the hundredth.", answer: 8.67,
          hint: "Keep the second digit after the point, a 6. The 6 next door is 5 or more.",
          why: "The kept 6 goes up to 7, so each share is $8.67." },
        { ask: "Check it: what is 3 × 8.67?", answer: 26.01, calc: "3*8.67",
          hint: "Multiply 8.67 by 3.",
          why: "$26.01 covers the $26 with a cent to spare." },
      ] },
    { title: "A Race Weekend",
      ask: "A 2.5 km race is run 4 times, and a runner says the total is 100 km. Check it.",
      steps: [
        { ask: "How many kilometers is 4 × 2.5?", answer: 10, calc: "4*2.5",
          hint: "Four laps of 2.5 km each.",
          why: "4 × 2.5 = 10 km." },
        { ask: "How many meters is that? Multiply by 1,000.", answer: 10000, calc: "10*1000",
          hint: "Kilometers to meters is three rungs, so the point slides right three places.",
          why: "10 km = 10,000 m." },
        { ask: "How many times bigger is the runner's 100 km than the real 10 km?", answer: 10, calc: "100/10",
          hint: "Divide 100 by 10.",
          why: "100 is ten times too big, so the decimal point is in the wrong place and the claim isn't reasonable." },
      ] },
    { title: "A Packed Stadium",
      ask: "A stadium has 62,000 seats, and you want 62,000 in scientific notation, 6.2 × 10 to some power.",
      steps: [
        { ask: "How many places does the point slide from the end of 62,000 to sit after the 6?", answer: 4,
          hint: "62,000. becomes 6.2000, so count the jumps.",
          why: "The point moves 4 places, so the power of ten is 10⁴." },
        { ask: "Check it: what is 6.2 × 10,000?", answer: 62000, calc: "6.2*10000",
          hint: "Multiplying by 10,000 slides the point four places right.",
          why: "6.2 × 10,000 = 62,000, so 62,000 = 6.2 × 10⁴." },
      ] },
  ],

  todo: { title: "What To Do Now", s: [
      "Every tool in this unit belongs to one moment of the habit, and the questions come in the same order: before, during and after.",
      "First work through Your Turn below the reading, typing each answer.",
      "Then come {c} word cards, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "Every hint names a lesson, so a wrong answer isn't a dead end; it's an address.",
      "When you miss one, open the lesson it names, read the section it points to, and then come back and try again.",
      "Last, open the Homework Sheet with the button at the bottom of the page, and work every problem on paper."
  ] }
};
