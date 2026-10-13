/* maths/reasonable-answers-with-decimals
   Grade 7 · maths · unit 2. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 REWRITTEN 2026-10-13 (Sonnet, checked by Opus) after Kolten said the lessons
   don't explain anything. Paul: "explain it to a 12-year-old."
   The 2026-10-05 version assumed he could round prices on sight, named the
   four-step plan in one sentence without showing it, used "estimate" and
   "reasonable" as if they were known, never showed a single step of the
   rounding or the comparing, and gave him nothing to try. This one: the shopping
   claim, the four steps in plain words, a short rounding recap with a walk,
   the estimate worked line by line, the comparison (with WHY rounding can only
   be off by about a dollar, drawn as a walk), the exact answer, three other
   claims judged in a walk, and a Your Turn with two checks of his own.

   ⚠️ THE WORLD IS THE BOOK'S OWN OPENING, KEPT: a shopping trip with a fixed
   budget and a claim about what's left over. The numbers are ours ($70, two
   hoodies at $24.99, two hats at $9.50) so the estimate lands on about nothing
   left, the same shape as the book's. These are the example on the homework
   sheet's how-to box, not one of its problems. Your Turn uses $40, 2 books at
   $11.95, a $7.10 poster, and 4.8 x 7.2, none of which is a problem on the sheet.
   Unit 1 Lesson 4 (determine-reasonable-answers) uses other worlds.

   ⚠️ NO ADDED FACTS. The "off by about a dollar" in the lesson is the
   lesson's own arithmetic ($70 estimate against the exact $68.98).
   ⚠️ NO SCRIPTURE. Paul's call, in the review queue. */
'use strict';
module.exports = {
  id: "maths/reasonable-answers-with-decimals",
  slug: "reasonable-answers-with-decimals",
  title: "Determine Reasonable Answers",
  unit: "Math 7 &middot; U2-L10",
  seq: { unit: 2, unitTitle: "Applications with Decimals", n: 10 },
  natural: "2026-10-13",

  /* ── /teach-plan, rewritten 2026-10-13. Glencoe Course 2 pp81-82. ── */
  plan: {
    objective: "Use an estimate to decide whether an answer to a word problem is reasonable, inside the four-step plan (Explore, Plan, Solve, Examine).",
    markers: [
      "BOOK (paraphrased), Objective box: determine whether answers are reasonable.",
      "BOOK (paraphrased), opening: a shopper has $80, plans to buy two pairs of jeans and two belts, and believes she'll have $10 left; rounding the prices shows about $80 spent, so nothing is left and her claim is not reasonable.",
      "BOOK (paraphrased): the four-step plan is Explore, Plan, Solve, Examine, and checking reasonableness happens in the Examine step.",
      "BOOK (paraphrased), Checking for Understanding: write a problem whose stated answer is not reasonable.",
    ],
    method: "ROUND EACH AMOUNT TO AN EASY NUMBER, ESTIMATE THE RESULT, AND COMPARE IT TO THE CLAIMED ANSWER. If the two disagree by more than rounding could explain, the claim is wrong. Examine is the step where this happens.",
    exampleOnly: [
      "The shopping trip: $70, two hoodies at $24.99, two hats at $9.50. WORLD: one shopping trip, the book's own opening, with our numbers.",
    ],
    digitize: "Reading engine. Six Watch It Worked walkthroughs (round, estimate, compare, exact check, judge three claims) and a Your Turn with two checks of its own.",
    unclear: "",
  },

  /* The practice half, on paper (tools/math-homework.js). subject is the FOLDER, "maths". */
  sheet: { slug: "reasonable-answers-with-decimals-homework", subject: "maths",
    note: "Print it and work every problem on paper. No multiple choice this time." },

  shelf: { grades: [7], subject: "Math",
    blurb: "Marcus has $70, thinks he'll have $15 left after shopping, and a quick round-and-add says otherwise. How to use an estimate to catch an answer that can't be right.",
    contains: [
      "The four-step plan in plain words, and why the last step matters",
      "A quick recap of rounding prices to easy numbers",
      "Estimating, comparing and checking, one line at a time",
      "Judging claims that are too big, too small or have the point in the wrong place",
      "Your Turn: two checks of your own",
    ] },
  eyebrow: ["Math 7", "U2-L10", "Applications with Decimals"],
  dek: "Before you trust an answer, ask whether it could even be true. A quick estimate is usually enough to tell you.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Your student uses an estimate to judge whether a stated answer to a decimal word problem is reasonable, which is the Examine step of the four-step plan."
      ]},
      { h: "Key Concepts", p: [
        "Round each number to an easy one, work the estimate in your head, and compare it with the claim. If they are farther apart than rounding could explain, the claim is not reasonable.",
        "Rounding can only shift a price by up to about 50 cents, so a few prices together are off by about a dollar or two, never by fifteen."
      ]},
      { h: "Where Students Get Stuck", p: [
        "🚨 Estimating and then doing nothing with it. The estimate only matters when it's compared with the claim, so have him say aloud whether the two are close.",
        "Stopping at the total. In a leftover-money problem you still have to subtract the estimated total from the budget."
      ]},
      { h: "Teaching Suggestion", p: [
        "Make up claims that are wrong in different ways: too big, too small, and a decimal point in the wrong place. Having him spot all three builds the habit better than checking right answers."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "A Claim at the Register", s: [
      "Marcus walks into a store with $70 and plans to buy two hoodies at $24.99 each and two baseball caps at $9.50 each.",
      "Halfway to the register he tells his brother that he'll have about $15 left over for lunch.",
      "His brother glances at the price tags, frowns, and says that doesn't sound right, without doing any arithmetic at all.",
      "How could he know, and what would it take for you to know it too?"
    ]},

    { title: "Four Steps, and the Last One Counts", s: [
      "When you solve a word problem, it helps to follow the {{four-step plan}}, which is Explore, Plan, Solve and Examine.",
      "Explore means figuring out what you know and what you're being asked, which here is $70, the four prices, and how much is left.",
      "Plan means choosing how to solve it, and Solve means doing it, so you'd add up the four items and subtract the total from $70.",
      "The last step, {{Examine}}, is where you stop and ask whether your answer makes sense.",
      "That's the step people skip, and it's the step this lesson is about."
    ]},

    { title: "Round to Easy Numbers", s: [
      "To check an answer without a calculator, you {{round}} each price to an easy number, which means swapping it for a nearby number that's simple to work with.",
      "The rule is to look at the digit right next to the place you're keeping, and if it's 5 or more, the kept digit goes up by one.",
      "",
      "[walk] Round $24.99 and $9.50 to the nearest dollar.",
      "[step] For $24.99, keep the 24 and look at the 9 next door, which is 5 or more, so the 24 goes up to 25. || $24.99  →  $25",
      "[step] For $9.50, keep the 9 and look at the 5 next door, which is 5 or more, so the 9 goes up to 10. || $9.50  →  $10",
      "",
      "Now the prices are $25 and $10, and those are numbers you can work with in your head.",
      "Rounding doesn't give you the exact price, but it's close enough to catch a big mistake."
    ]},

    { title: "Make the Estimate", s: [
      "An {{estimate}} is a quick, rough answer that tells you about how big the real answer should be.",
      "Now use the easy prices to estimate how much Marcus spends and how much he has left.",
      "",
      "[walk] Estimate what Marcus has left from his $70.",
      "[step] Two hoodies at about $25 each cost about $50. || 2 × 25 = 50",
      "[step] Two caps at about $10 each cost about $20. || 2 × 10 = 20",
      "[step] Add them to estimate the total spent. || 50 + 20 = 70",
      "[step] Subtract the total from the $70 Marcus started with. || 70 − 70 = 0",
      "",
      "The estimate says Marcus will spend about $70, which leaves him with about nothing.",
      "That took four short lines and no calculator, which is why an estimate is such a handy check."
    ]},

    { title: "Compare the Estimate With the Claim", s: [
      "Now put the two side by side, because Marcus claimed about $15 left and the estimate says about $0.",
      "The question is whether rounding could explain a gap that big.",
      "",
      "[walk] Decide whether rounding explains the gap.",
      "[step] Each price moved only a little when we rounded, because $24.99 moved by one cent and $9.50 moved by fifty cents. || 24.99 → 25   (+ $0.01)\n9.50 → 10    (+ $0.50)",
      "[step] With two of each, the whole estimate is off by about a dollar at most. || 2 × 0.01 + 2 × 0.50 = $1.02",
      "[step] The claim and the estimate are $15 apart, and a dollar of rounding can't make up $15. || gap of $15  >  about $1 of rounding",
      "",
      "That's the test, and it's the same every time: if the claim and the estimate are farther apart than rounding could explain, the claim isn't {{reasonable}}.",
      "His brother had done exactly this in his head, which is how he knew without a calculator."
    ]},

    { title: "The Exact Answer Agrees", s: [
      "To be sure, you can do the exact arithmetic and see that it lines up with the estimate.",
      "This time you use the real prices, so nothing gets rounded.",
      "",
      "[walk] Find exactly how much Marcus has left.",
      "[step] Two hoodies at $24.99 each. || 2 × 24.99 = 49.98",
      "[step] Two caps at $9.50 each. || 2 × 9.50 = 19.00",
      "[step] Add them to get the total spent. || 49.98 + 19.00 = 68.98",
      "[step] Subtract from the $70. || 70 − 68.98 = 1.02",
      "",
      "Marcus will have about a dollar left, not fifteen, and the estimate told us that before we added a single price.",
      "The exact answer of $1.02 is right next to the estimate of $0, which is what a reasonable answer looks like."
    ]},

    { title: "Judging Other Claims", s: [
      "The same estimate lets you judge any claim about this shopping trip, so try three.",
      "Each one takes only a few seconds once you have the estimate.",
      "",
      "[walk] Judge three claims about what the four items cost, using the estimate of about $70.",
      "[step] Someone says they cost about $69, which sits right next to $70, so it's reasonable. || $69  vs  $70   →  reasonable",
      "[step] Someone says they cost $6.90, but the hoodies alone are about $50, so the decimal point is in the wrong place. || $6.90  vs  $70   →  not reasonable",
      "[step] Someone says they cost $125, which is more than Marcus's whole $70, so it can't be right. || $125  vs  $70   →  not reasonable",
      "",
      "An answer that's too big, too small or has its decimal point in the wrong place gets caught the same way, by the Examine step.",
      "So a minute of estimating can save you from paying, or believing, a number that was never right."
    ]}
  ],

  words: [
    ["Reasonable", "Making sense: close enough to an estimate that the answer could be right.", 31],
    ["Estimate", "A quick, rough answer that tells you about how big the exact one should be.", 16],
    ["Examine", "The last step of the four-step plan, where you check that your answer makes sense.", 7],
    ["Four-Step Plan", "Explore, Plan, Solve and Examine, the steps for solving a word problem.", 4],
    ["Round", "To swap a number for a nearby easy number, using the digit next door to decide.", 9]
  ],

  findsAt: 50,
  questions: [
    { tag: "The Claim", q: "How could Marcus's brother tell the claim of $15 left over wasn't right without doing the exact arithmetic?",
      find: [2,23], hint: "Read A Claim at the Register.",
      choices: ["He knew Marcus always misjudges prices", "He rounded the prices in his head and saw the total was about $70", "He asked the cashier", "He added the hoodies and forgot the caps"], right: 1,
      why: "Rounding the prices gives about $70 spent out of $70." },

    { tag: "The Plan", q: "In the four-step plan, which step is the one where you check whether an answer makes sense?",
      find: [7], hint: "Read Four Steps, and the Last One Counts.",
      choices: ["Explore", "Plan", "Solve", "Examine"], right: 3,
      why: "Examine is the last step, where you ask whether the answer makes sense." },

    { tag: "Rounding", q: "How is $9.50 rounded to the nearest dollar?",
      find: [13], hint: "Keep the 9 and look at the 5 next door.",
      choices: ["To $9", "To $10", "To $8", "To $95"], right: 1,
      why: "The 5 next door is 5 or more, so the 9 goes up to 10." },

    { tag: "The Estimate", q: "Using $25 for a hoodie and $10 for a cap, what does the estimate say Marcus spends on two of each?",
      find: [19,20,21], hint: "2 × 25 plus 2 × 10.",
      choices: ["About $50", "About $90", "About $70", "About $15"], right: 2,
      why: "50 + 20 = 70." },

    { tag: "Comparing", q: "Why can't rounding explain a gap of $15 between the claim and the estimate?",
      find: [28,29,30], hint: "Read Compare the Estimate With the Claim.",
      choices: ["Rounding changed the budget", "Rounding makes every price exactly right", "Rounding only shifts the total by about a dollar, and $15 is much more", "Rounding doesn't change anything"], right: 2,
      why: "The four prices moved by only about $1.02 in all." },

    { tag: "Exact", q: "How much does Marcus actually have left?",
      find: [39,40,41], hint: "$70 minus $68.98.",
      choices: ["$1.02", "$15.00", "$10.20", "$21.02"], right: 0,
      why: "70 − 68.98 = 1.02." },

    { tag: "Judging", q: "Which claim about the total cost of the four items is reasonable?",
      find: [45], hint: "It has to sit close to $70.",
      choices: ["About $6.90", "About $125", "About $15", "About $69"], right: 3,
      why: "$69 is right next to the estimate of $70." },

    { tag: "Judging", q: "Someone says the four items cost $6.90. What's wrong with that claim?",
      find: [46], hint: "The hoodies alone cost about $50.",
      choices: ["The decimal point is in the wrong place", "It's more than the budget", "It's too close to the estimate", "Nothing, it's reasonable"], right: 0,
      why: "$6.90 is ten times too small. It should be about $69." },

    { tag: "Spot the Mistake", q: "A student estimates the shopping at $70 and says Marcus will have about $70 left. What did the student skip?",
      find: [22,23], hint: "Marcus started with $70.",
      choices: ["Subtracting the total from the $70 he started with", "Rounding the prices", "Adding the caps", "Nothing, the student is right"], right: 0,
      why: "70 − 70 = 0, so about nothing is left." }
  ],

  vocabQuestions: [
    { q: "What does it mean for an answer to be <i>reasonable</i>?",
      choices: ["It's a whole number", "It's the exact answer", "It makes sense and is close to an estimate", "It's a rounded price"], right: 2 },
    { q: "What is an <i>estimate</i>?",
      choices: ["A rounded answer that tells you roughly how big the exact one should be", "The exact answer", "A claim someone makes", "A decimal point"], right: 0 },
    { q: "What do you do in the <i>Examine</i> step?",
      choices: ["Round the prices", "Choose a way to solve", "Check that your answer makes sense", "Find out what you know"], right: 2 },
    { q: "What are the steps of the <i>four-step plan</i>?",
      choices: ["Read, Write, Add, Check", "Round, Add, Subtract, Stop", "Guess, Test, Fix, Finish", "Explore, Plan, Solve, Examine"], right: 3 },
    { q: "What does it mean to <i>round</i> a price?",
      choices: ["Make it a circle", "Add a zero to it", "Swap it for a nearby easy number", "Double it"], right: 2 }
  ],

  work: [
    { title: "Books and a Poster",
      ask: "Lena has $40. She buys 2 books at $11.95 each and a poster for $7.10, and she says she'll have about $19 left. Check her claim with an estimate.",
      steps: [
        { ask: "Round $11.95 to the nearest dollar.", answer: 12,
          hint: "$11.95 is just under $12.",
          why: "The 9 next door tells the 11 to go up, so it rounds to $12." },
        { ask: "Round $7.10 to the nearest dollar, then estimate the total: 2 books plus the poster. What's 2 × 12 + 7?", answer: 31, calc: "2*12+7",
          hint: "Two books at $12 is $24, and then add $7.",
          why: "2 × 12 + 7 = 31, so about $31 is spent." },
        { ask: "Estimate what's left from $40. What's 40 − 31?", answer: 9, calc: "40-31",
          hint: "Subtract the estimated total from the $40.",
          why: "40 − 31 = 9, so about $9 is left." },
        { ask: "Lena claimed about $19 left. Is that reasonable? Type 1 for yes or 2 for no.", answer: 2,
          hint: "Is $19 close to $9, or farther apart than rounding could explain?",
          why: "$19 is $10 away from the estimate, and rounding can't explain that, so it isn't reasonable. The exact amount left is $9.00." },
      ] },
    { title: "A Calculator Product",
      ask: "A calculator says 4.8 × 7.2 = 345.6. Check it with an estimate.",
      steps: [
        { ask: "Round 4.8 to the nearest whole number.", answer: 5,
          hint: "Keep the 4. The 8 next door is 5 or more.",
          why: "The 4 goes up to 5." },
        { ask: "Round 7.2 to the nearest whole number.", answer: 7,
          hint: "Keep the 7. The 2 next door is 4 or less.",
          why: "The 7 stays 7." },
        { ask: "Estimate the product: what is 5 × 7?", answer: 35, calc: "5*7",
          hint: "Multiply the easy numbers.",
          why: "5 × 7 = 35." },
        { ask: "Is 345.6 reasonable next to an estimate of 35? Type 1 for yes or 2 for no.", answer: 2,
          hint: "How many times bigger is 345.6 than 35?",
          why: "345.6 is about ten times too big, so the decimal point is in the wrong place. The real product is 34.56." },
      ] },
  ],

  todo: { title: "What To Do Now", s: [
      "A shopper told his brother he'd have $15 left, and a quick round-and-add said otherwise, and now it's your turn to judge claims the same way.",
      "First work through Your Turn below the reading, typing each answer.",
      "Then come {c} word cards, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "For every claim, round the amounts to easy numbers, estimate, and say out loud whether the claim and the estimate are close.",
      "If the judging questions trip you up, read Compare the Estimate With the Claim again.",
      "Last, open the Homework Sheet with the button at the bottom of the page, and work every problem on paper."
  ] }
};
