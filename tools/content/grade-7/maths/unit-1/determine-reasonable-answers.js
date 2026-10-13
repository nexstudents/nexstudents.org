/* maths/determine-reasonable-answers
   Grade 7 · maths · unit 1. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 REWRITTEN 2026-10-13 (Sonnet, checked by Opus) after Kolten said the lessons
   don't explain anything. Paul: "explain it to a 12-year-old."
   (Filed under unit-1. The unit-2 lesson with a similar title,
   reasonable-answers-with-decimals, was not touched.)
   The old version assumed he could round without being shown, used the word
   "pattern" ("a pattern is the right way to estimate it") without ever saying
   what one is, had a calculator-error paragraph that contradicted itself ("that
   is a calculator error, and notice that none of it is the calculator being
   wrong"), and listed the steps of each check as bare lines with nothing to try.
   This one: why a calculator answer can be wrong (fixed: the calculator does
   exactly what it's told, so the mistake is the person's), what an estimate is,
   a short rounding recap with one worked example, what a pattern is (the zero
   pattern for dividing and the slide pattern for multiplying by 10, each drawn
   as a short walk), then three Watch It Worked checks (Jordan's raise, Simone's
   division, Maya's total) and a Your Turn with two checks of its own.

   ⚠️ KEPT: Jordan, Simone and Maya, with all their numbers (the lesson's own).
   The tuna-and-crackers question stays as the last question.
   ⚠️ ADDED, ARITHMETIC ONLY: 12 x 3.5 = 42, so Jordan probably typed 3.5 for the
   raise (said as "probably"); the exact raise is 12 x 0.35 = 4.20.
   ⚠️ THE ZERO PATTERN (take the same number of zeros off both numbers) is
   standard arithmetic, not from the first draft's text.
   Word cards: 4 before, 5 now (Reasonable, Calculator Error, Estimate, Round,
   Pattern; "Check" was dropped because it is an ordinary word). */
'use strict';
module.exports = {
  id: "maths/determine-reasonable-answers",
  slug: "determine-reasonable-answers",
  title: "Problem-Solving Strategy: Determine Reasonable Answers",
  unit: "Math 7 &middot; U1-L4",
  seq: { unit: 1, unitTitle: "Tools for Problem Solving", n: 4 },
  natural: "2026-10-13",

  /* ── /teach-plan, rewritten 2026-10-13. ── */
  plan: {
    objective: "Estimate first, compare the estimate with the exact answer, and decide whether the answer is reasonable.",
    markers: [
      "A calculator answer can be wrong when the person pressed a wrong key, typed a number wrong, or did the steps in the wrong order.",
      "Method: round to easy numbers, use a pattern to work the estimate in your head, and compare it with the answer.",
      "Worlds already in the lesson: Jordan's raise, Simone's division, Maya's shopping total, and the tuna-and-crackers question.",
    ],
    method: "ROUND TO EASY NUMBERS, ESTIMATE IN YOUR HEAD WITH A PATTERN, COMPARE. About the same size as the answer means reasonable; far apart (like ten times) means something went wrong. A quick rounding recap and two short patterns (zeros in a division, sliding the point when you multiply by 10) come first, because the estimate needs them.",
    exampleOnly: [
      "Jordan's raise, Simone's division and Maya's shopping total. WORLD: three short everyday checks.",
    ],
    digitize: "Reading engine. Walk-throughs for rounding 680, the zero pattern, and each of the three checks (the estimate and the compare drawn line by line), plus a Your Turn with typed answers.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Math",
    blurb: "A calculator can be wrong, because it only does what you tell it. Estimate first, compare, and you can catch a mistake before it costs you.",
    contains: [
      "Why a calculator answer can be wrong, and who made the mistake",
      "A quick recap of rounding to easy numbers",
      "Two patterns that make estimating easy in your head",
      "Jordan's raise, Simone's division and Maya's shopping total, checked step by step",
      "Your Turn: two checks of your own",
    ] },
  eyebrow: ["Math 7", "U1-L4", "Tools for Problem Solving"],
  dek: "A calculator gives you an answer instantly, but it can't tell you if the answer makes sense. A quick estimate can.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Your student estimates an answer first, compares it with the exact answer, and decides whether the answer is reasonable, which catches the kind of mistake a calculator can't."
      ]},
      { h: "Key Concepts", p: [
        "Round each number to an easy one, work the estimate in your head with a pattern, and compare. About the same size means reasonable, and far apart, like ten times bigger, means something went wrong.",
        "A calculator does exactly what it is told, so a wrong answer is a pressed key or a typed number that was wrong, and the calculator never warns you."
      ]},
      { h: "Where Students Get Stuck", p: [
        "Jordan's problem is the trap: the answer is off by a factor of ten, and only the estimate catches it, because the calculator will confidently repeat any mistake it's given.",
        "Rounding. If your student is rusty, put a finger on the place being kept and look at the digit next door: 5 or more goes up, 4 or less stays."
      ]},
      { h: "Teaching Suggestion", p: [
        "Type a wrong calculation into a calculator on purpose, in front of your student, and have him estimate first to catch it before you reveal the calculator's answer."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "A Raise That Doesn't Add Up", s: [
      "Jordan earns $4.25 an hour working weekends as a waiter at The Sundae Shop.",
      "After six months on the job, his manager gives him a raise of $0.35 an hour.",
      "Jordan works 12 hours a week, and he uses his calculator to figure out how much more he'll earn each week.",
      "The calculator says $42.00 more every week.",
      "Before Jordan gets excited, he should ask whether that answer is {{reasonable}}, which just means whether it makes sense."
    ]},

    { title: "Why a Calculator Can Be Wrong", s: [
      "A calculator is fast, but it only does exactly what you tell it to do.",
      "If you press a wrong key, type a number in wrong, or do the steps in the wrong order, it gives you a wrong answer and doesn't warn you.",
      "That's called a {{calculator error}}, and the mistake is yours, not the calculator's, because it has no way of knowing what you meant.",
      "So you can't just trust a calculator's answer, and you need a way to catch mistakes.",
      "The way to catch them is to make an {{estimate}}, which is a quick, rough answer that you can work out in your head.",
      "If your estimate and the calculator's answer are about the same size, the answer is probably right, and if they're far apart, something went wrong."
    ]},

    { title: "Easy Numbers: A Quick Rounding Recap", s: [
      "To estimate in your head, you {{round}} each number, which means swapping it for a nearby easy number.",
      "An easy number usually has just one digit that isn't a zero, like 10, 700 or $0.40.",
      "You've learned the rounding rule already: find the place you're keeping, and look at the digit right next to it.",
      "If that next-door digit is 5 or more, the digit you're keeping goes up by one, and if it's 4 or less, the digit stays the same.",
      "",
      "[walk] Round 680 to the nearest hundred.",
      "[step] The place you're keeping is the hundreds place, so that's the 6. || 680  →  keep the 6",
      "[step] The digit next door is the 8, and 8 is 5 or more, so the 6 goes up by one. || 6 + 1 = 7",
      "[step] Every digit after it turns into a zero. || 680  →  700",
      "",
      "Money works the same way, so $0.35 rounds to $0.40, because the 5 next door tells the 3 to go up."
    ]},

    { title: "Two Patterns That Make It Easy", s: [
      "Once the numbers are easy, you need a quick way to do the math in your head, and that's where a {{pattern}} helps.",
      "A pattern is something that repeats the same way every time, so you can count on it.",
      "Here's the first one, for dividing: if you add a zero to both numbers in a division, the answer doesn't change.",
      "",
      "[walk] Find 4,200 ÷ 700 with the zero pattern.",
      "[step] Start with a fact you already know. || 42 ÷ 7 = 6",
      "[step] Add a zero to both numbers, and the answer is still 6. || 420 ÷ 70 = 6",
      "[step] Add another zero to both, and it's still 6. || 4,200 ÷ 700 = 6",
      "",
      "So to divide big round numbers, you cover the same number of zeros on both, do the small fact, and the answer is the same.",
      "Here's the second pattern, for multiplying: multiplying by 10 slides the decimal point one place to the right.",
      "",
      "[walk] Find 10 × 0.4 with the slide pattern.",
      "[step] Multiplying by 10 slides the decimal point one place to the right. || 0.4  →  4.",
      "[step] So the answer is 4. || 10 × 0.4 = 4"
    ]},

    { title: "Checking Jordan's Raise", s: [
      "Now you can check Jordan's calculator, one step at a time.",
      "",
      "[walk] Estimate Jordan's weekly raise, and compare it with the calculator's $42.00.",
      "[step] The raise is 12 hours times $0.35, and that's the math to estimate. || 12 × 0.35",
      "[step] Round 12 hours to 10. || 12  →  10",
      "[step] Round $0.35 to $0.40, because the 5 next door tells the 3 to go up. || 0.35  →  0.40",
      "[step] Use the slide pattern, because 10 × 0.4 is 4. || 10 × 0.4 = 4",
      "[step] Compare the estimate with the calculator's answer. || estimate    about $4\ncalculator  $42.00",
      "[step] $42.00 is about ten times bigger than $4, so the answer is not reasonable. || NOT reasonable",
      "",
      "The exact answer is $4.20, and 12 times 3.5 is 42, so Jordan probably typed 3.5 instead of 0.35, which is a calculator error.",
      "Close means about the same size, so $4 and $4.20 are close, but $4 and $42 are ten times apart."
    ]},

    { title: "A Division That Checks Out", s: [
      "Simone divided 4,182 by 680 on her calculator and got 6.15.",
      "",
      "[walk] Is 6.15 a reasonable answer for 4,182 ÷ 680?",
      "[step] Round 680 to 700, because the 8 next door tells the 6 to go up. || 680  →  700",
      "[step] Round 4,182 to 4,200, because the 8 next door tells the 1 to go up. || 4,182  →  4,200",
      "[step] Use the zero pattern, because 4,200 ÷ 700 is the same as 42 ÷ 7. || 42 ÷ 7 = 6",
      "[step] Compare the estimate with Simone's answer. || estimate    about 6\ncalculator  6.15",
      "[step] 6.15 is about the same size as 6, so the answer is reasonable. || reasonable",
      "",
      "A reasonable answer isn't a guarantee that it's exactly right, but it tells you that no big mistake got in."
    ]},

    { title: "A Shopping Trip That Checks Out Too", s: [
      "Maya bought a pair of sunglasses for $15.79, two rolls of film at $2.29 a roll, and a bottle of sunscreen for $3.69.",
      "The cashier asked her for $24.06.",
      "",
      "[walk] Is $24.06 a reasonable total for Maya?",
      "[step] Round each price to the nearest dollar, which makes the sunglasses $16, each roll of film $2, and the sunscreen $4. || 15.79  →  16\n2.29  →  2   (two rolls)\n3.69  →  4",
      "[step] Add the easy numbers. || 16 + 2 + 2 + 4 = 24",
      "[step] Compare the estimate with the cashier's total. || estimate  about $24\ncashier   $24.06",
      "[step] $24.06 is very close to $24, so the cashier's total is reasonable. || reasonable"
    ]}
  ],

  words: [
    ["Reasonable", "Close enough to your estimate that the answer makes sense and is probably right.", 4],
    ["Calculator Error", "A wrong answer caused by pressing a wrong key, typing a number wrong, or doing the steps out of order. The calculator did what it was told.", 7],
    ["Estimate", "A quick, rough answer you work out in your head to test whether the real answer makes sense.", 9],
    ["Round", "To swap a number for a nearby easy number, using the digit next door to decide.", 11],
    ["Pattern", "Something that repeats the same way every time, like 42 ÷ 7, 420 ÷ 70 and 4,200 ÷ 700 all giving 6.", 20]
  ],

  findsAt: 57,
  questions: [
    { tag: "The Raise", q: "Jordan's calculator said his raise would add $42.00 a week. What does the estimate say?",
      find: [37,38], hint: "Round 12 to 10 and $0.35 to $0.40, then use the slide pattern.",
      choices: ["About $4 a week", "About $40 a week", "About $42 a week", "About $400 a week"], right: 0,
      why: "10 × 0.4 = 4, so the estimate is about $4." },

    { tag: "The Raise", q: "The estimate is about $4, and the calculator said $42.00. What should Jordan decide?",
      find: [39], hint: "Are the two numbers about the same size?",
      choices: ["The calculator's answer is reasonable", "The calculator's answer is not reasonable", "The estimate must be wrong", "Both numbers are right"], right: 1,
      why: "$42.00 is about ten times bigger than $4, so it isn't reasonable." },

    { tag: "Calculator Error", q: "A calculator shows a wrong answer because someone typed a number in wrong. Whose mistake is it?",
      find: [6,7], hint: "Read Why a Calculator Can Be Wrong.",
      choices: ["The person's, because the calculator did what it was told", "The calculator's, because it did the math wrong", "Nobody's", "The estimate's"], right: 0,
      why: "A calculator does exactly what it's told, so a typed mistake is the person's." },

    { tag: "Spot the Mistake", q: "A student rounds 680 to the nearest hundred and gets 600. What did the student miss?",
      find: [16,17], hint: "Look at the digit next door to the 6.",
      choices: ["The 8 next door is 5 or more, so the 6 goes up to 7 and the answer is 700", "Nothing, 600 is right", "680 rounds to 680", "The answer should be 800"], right: 0,
      why: "The next-door digit is 8, which is 5 or more, so the 6 goes up: 700." },

    { tag: "The Pattern", q: "Which small fact does the zero pattern use to find 4,200 ÷ 700?",
      find: [27,46], hint: "Cover the same number of zeros on both numbers.",
      choices: ["42 ÷ 7", "4 ÷ 7", "420 ÷ 7", "42 ÷ 70"], right: 0,
      why: "Cover two zeros on each number and you get 42 ÷ 7 = 6." },

    { tag: "Simone's Division", q: "Simone's calculator gave 6.15 for 4,182 ÷ 680, and the estimate is 6. What can she conclude?",
      find: [47,48], hint: "Are 6.15 and 6 about the same size?",
      choices: ["Her answer is reasonable", "Her answer is not reasonable", "She pressed a wrong key", "The estimate is wrong"], right: 0,
      why: "6.15 is about the same size as 6, so it's reasonable." },

    { tag: "Maya's Shopping", q: "Maya's total came to $24.06. What's the rounded estimate for sunglasses, two rolls of film and sunscreen?",
      find: [53,54,56], hint: "Round each price to the nearest dollar, then add.",
      choices: ["$24", "$20", "$28", "$16"], right: 0,
      why: "16 + 2 + 2 + 4 = 24." },

    { tag: "The Rule", q: "When is an answer reasonable?",
      find: [10,41], hint: "Compare it with your estimate.",
      choices: ["When it's about the same size as your estimate", "When it has a decimal point", "When it's a whole number", "When the calculator shows it"], right: 0,
      why: "An answer about the same size as the estimate makes sense." },

    { tag: "Apply It",
      q: "You need to buy 3 cans of tuna fish at 69 cents each, a box of crackers at $1.99, and a gallon of milk at $2.19 for dinner tonight. Should you take $5.00 or $10.00 to the store?",
      choices: [
        "$10.00, since three cans alone are about $2, plus crackers and milk push it over $5",
        "$5.00, since the total rounds to about $4",
        "$5.00, since tuna is nearly free",
        "Neither, the total is under $1"
      ], right: 0,
      why: "3 cans at about 70 cents is about $2, plus about $2 for crackers and milk, comes to around $6, which is over $5." }
  ],

  vocabQuestions: [
    { q: "An answer is <i>reasonable</i> when it's...",
      choices: ["About the same size as your estimate", "Written in pencil", "A whole number", "Exactly what the calculator shows"], right: 0 },
    { q: "A <i>calculator error</i> is caused by...",
      choices: ["The calculator's inside math being wrong", "A wrong key, a bad entry, or steps done out of order", "A dead battery", "Using an estimate"], right: 1 },
    { q: "An <i>estimate</i> is used to...",
      choices: ["Replace the real answer entirely", "Make the numbers bigger", "Test whether a real answer makes sense", "Show your work"], right: 2 },
    { q: "To <i>round</i> a number means to...",
      choices: ["Make it a circle", "Add a zero to it", "Double it", "Swap it for a nearby easy number"], right: 3 },
    { q: "What is a <i>pattern</i>?",
      choices: ["Something that repeats the same way every time", "A wrong answer", "A kind of calculator", "A rounded price"], right: 0 }
  ],

  work: [
    { title: "Batteries for the Camera",
      ask: "Dad buys 3 packs of batteries at $4.95 a pack, and the calculator shows $148.50. Check it with an estimate.",
      steps: [
        { ask: "Round $4.95 to the nearest dollar.", answer: 5,
          hint: "$4.95 is just under $5.",
          why: "The 9 next door tells the 4 to go up, so it rounds to $5." },
        { ask: "Now estimate the total: what is 3 × 5?", answer: 15, calc: "3*5",
          hint: "Three packs at about $5 each.",
          why: "3 × 5 = 15, so the estimate is about $15." },
        { ask: "Is $148.50 about the same size as $15? Type 1 for yes or 2 for no.", answer: 2,
          hint: "How many times bigger is 148.50 than 15?",
          why: "$148.50 is about ten times bigger than $15, so it's not reasonable. The exact total is $14.85." },
      ] },
    { title: "A Division to Check",
      ask: "A calculator says 2,850 ÷ 480 = 5.94. Check it with an estimate.",
      steps: [
        { ask: "Round 480 to the nearest hundred.", answer: 500,
          hint: "Keep the 4. The 8 next door is 5 or more.",
          why: "The 4 goes up to 5, so 480 rounds to 500." },
        { ask: "Round 2,850 to the nearest thousand.", answer: 3000,
          hint: "Keep the 2. The 8 next door is 5 or more.",
          why: "The 2 goes up to 3, so 2,850 rounds to 3,000." },
        { ask: "Use the zero pattern: what is 3,000 ÷ 500?", answer: 6, calc: "3000/500",
          hint: "Cover two zeros on each number and do 30 ÷ 5.",
          why: "30 ÷ 5 = 6, so 3,000 ÷ 500 = 6." },
        { ask: "Is 5.94 about the same size as 6? Type 1 for yes or 2 for no.", answer: 1,
          hint: "Compare 5.94 with your estimate of 6.",
          why: "5.94 is very close to 6, so the answer is reasonable." },
      ] },
  ],

  todo: { title: "What To Do Now", s: [
      "Jordan's raise, Simone's division and Maya's total were each checked with an estimate, and now it's your turn to do the same.",
      "First work through Your Turn below the reading, typing each answer.",
      "Then come {c} word cards, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "For every question, build the estimate first, then compare it with the answer and ask whether they're about the same size.",
      "If a calculator answer and your estimate don't agree, trust the estimate and look for where the calculation went wrong.",
      "The tuna and crackers question at the end isn't a trick, so round every price first, then decide which amount of money is actually enough."
  ] }
};
