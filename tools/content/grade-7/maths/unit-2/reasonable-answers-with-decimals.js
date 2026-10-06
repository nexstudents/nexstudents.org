/* maths/reasonable-answers-with-decimals
   Grade 7 · maths · unit 2. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-10-05. Written on Sonnet from Glencoe Course 2
   pp81-82 (Lesson 2-10), via the week 6-7 packet (paraphrased notes) and the
   teach-plan. /natural pass run and stamped.

   🚨 SLUG NOTE. The row is titled "Determine Reasonable Answers", the same as
   Unit 1 Lesson 4, and the plan's slug (maths/determine-reasonable-answers) is
   already taken by that lesson. This one is filed as reasonable-answers-with-
   decimals so the two don't collide. Paul may want a different slug or title,
   it's one line in the unit file.

   READING SHAPE.

   ⚠️ THE WORLD IS THE BOOK'S OWN OPENING, KEPT: a shopping trip with a fixed
   budget and a claim about what's left over. The numbers are ours ($70, two
   hoodies at $24.99, two hats at $9.50) so the estimate lands on about nothing
   left, the same shape as the book's. Unit 1 Lesson 4 uses other worlds, and
   this one keeps to the four-step plan and to decimals.

   ⚠️ NO SCRIPTURE. Paul's call, in the review queue. */
'use strict';
module.exports = {
  id: "maths/reasonable-answers-with-decimals",
  slug: "reasonable-answers-with-decimals",
  title: "Determine Reasonable Answers",
  unit: "Math 7 &middot; U2-L10",
  seq: { unit: 2, unitTitle: "Applications with Decimals", n: 10 },
  natural: "2026-10-05",

  /* ── /teach-plan, 2026-10-05. Glencoe Course 2 pp81-82. ── */
  plan: {
    objective: "Use estimation to decide whether an answer to a word problem is reasonable, inside the four-step plan (Explore, Plan, Solve, Examine).",
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
    digitize: "Reading engine. Questions give claimed answers and ask the student to judge each as reasonable or not, and why.",
    unclear: "",
  },

  /* The practice half, on paper (tools/math-homework.js). subject is the FOLDER, "maths". */
  sheet: { slug: "reasonable-answers-with-decimals-homework", subject: "maths",
    note: "Print it and work every problem on paper. No multiple choice this time." },

  shelf: { grades: [7], subject: "Math",
    blurb: "Marcus has $70, thinks he'll have $15 left after shopping, and a quick round-and-add says otherwise. Using an estimate to catch an answer that can't be right.",
    contains: [
      "The four-step plan: Explore, Plan, Solve, Examine",
      "Rounding prices to easy numbers",
      "Comparing an estimate with a claimed answer",
      "Telling a reasonable answer from one that can't be true",
    ] },
  eyebrow: ["Math 7", "U2-L10", "Applications with Decimals"],
  dek: "Before you trust an answer, ask whether it could even be true. A quick estimate is usually enough to tell you.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "By the end of this lesson your student should be able to use the Examine step of the four-step plan to judge whether a stated answer to a decimal word problem is reasonable, by comparing it with a rounded estimate."
      ]},
      { h: "Where Students Get Stuck", p: [
        "🚨 Estimating and then doing nothing with it. The estimate only matters when it's compared with the claim, so have the student say aloud whether the two are close.",
        "Rounding everything the same direction. Rounding a price like $24.99 up and $9.50 up is fine, but the student should know the estimate can be a little off, and ask whether the gap between estimate and claim is bigger than that."
      ]},
      { h: "Teaching Suggestion", p: [
        "Make up claims that are wrong in different ways: too big, too small, and a decimal point in the wrong place. Having the student spot all three builds the habit better than checking right answers."
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
      "The four-step plan for solving a word problem is Explore, Plan, Solve and Examine, and each step has a job.",
      "Explore means finding out what you know and what you're being asked, which here is $70, the four prices and the leftover amount.",
      "Plan means choosing a way to get there, and Solve means doing it, so you'd add up the four items and subtract from $70.",
      "The last step, Examine, is where you ask whether the answer makes sense, and that's the step people skip and the step this lesson is about."
    ]},

    { title: "Round to Easy Numbers", s: [
      "You don't have to do the exact arithmetic to Examine an answer, because rounding each price to an easy number gets you close enough.",
      "The hoodie at $24.99 is almost $25, and the cap at $9.50 rounds up to $10.",
      "",
      "[ex] 2 x $25 + 2 x $10 = $70",
      "",
      "Two $25 hoodies are $50 and two $10 caps are $20, so the shopping comes to about $70, which means Marcus will have about nothing left."
    ]},

    { title: "Compare the Estimate With the Claim", s: [
      "Now put the two side by side: Marcus claimed about $15 left over, and the estimate says about $0.",
      "Rounding can only shift each price by a few cents or half a dollar, so the four prices together are off by about a dollar at most, and a gap of $15 is far too big to blame on rounding.",
      "That's the test, and it's the same every time: if the estimate and the claim disagree by more than rounding could explain, the claim isn't reasonable.",
      "His brother had done exactly this in his head, which is how he knew without a calculator."
    ]},

    { title: "The Exact Answer Agrees", s: [
      "To be sure, do the exact arithmetic, and notice how it lines up with the estimate.",
      "Two hoodies cost $49.98 and two caps cost $19.00, so the total is $68.98, and $70 minus $68.98 leaves $1.02.",
      "",
      "[ex] 2 x 24.99 = 49.98",
      "[ex] 2 x 9.50 = 19.00",
      "[ex] 70 - 68.98 = 1.02",
      "",
      "Marcus will have about a dollar left, not fifteen, and the estimate told us that before we added a single price."
    ]},

    { title: "Judging Other Claims", s: [
      "The same estimate lets you judge any claim about this shopping trip, so try a few.",
      "If someone says the four items cost about $69, that's reasonable, because it sits right next to the estimate of $70.",
      "If someone says they cost $6.90, the decimal point is in the wrong place, since the hoodies alone are about $50, and if someone says they cost $125, that's more than the whole budget and can't be right either.",
      "Whenever an answer is too big, too small or has its decimal point in the wrong place, the Examine step is what catches it."
    ]}
  ],

  words: [
    ["Reasonable", "Making sense: close enough to an estimate that the answer could be right.", 14],
    ["Estimate", "A quick, rounded answer that tells you roughly how big the exact one should be.", 13],
    ["Examine", "The last step of the four-step plan, where you check that your answer makes sense.", 7],
    ["Four-Step Plan", "Explore, Plan, Solve and Examine, the steps for solving a word problem.", 4]
  ],

  findsAt: 26,
  questions: [
    { tag: "The Claim", q: "How could Marcus's brother tell the claim of $15 left over wasn't right without doing the exact arithmetic?",
      find: [2, 15],
      hint: "Read A Claim at the Register.",
      choices: [
        "He knew Marcus always misjudges prices.",
        "He rounded the prices in his head and saw the total was about $70.",
        "He asked the cashier.",
        "He added the hoodies and forgot the caps."
      ], right: 1 },

    { tag: "The Plan", q: "In the four-step plan, which step is the one where you check whether an answer makes sense?",
      find: [7],
      hint: "Read Four Steps, and the Last One Counts.",
      choices: ["Explore", "Plan", "Solve", "Examine"], right: 3 },

    { tag: "Rounding", q: "How was $24.99 rounded to make the estimate?",
      find: [9],
      hint: "It's almost a whole number of dollars.",
      choices: ["To $20", "To $25", "To $30", "To $24"], right: 1 },

    { tag: "The Estimate", q: "What does the estimate say Marcus will spend?",
      find: [11, 10],
      hint: "Two $25 hoodies and two $10 caps.",
      choices: ["About $50", "About $90", "About $70", "About $15"], right: 2 },

    { tag: "Comparing", q: "Why can't rounding explain a gap of $15 between the claim and the estimate?",
      find: [13, 14],
      hint: "Read Compare the Estimate With the Claim.",
      choices: [
        "Rounding changed the budget.",
        "Rounding makes every price exactly right.",
        "Rounding only shifts the total by about a dollar, and $15 is much more.",
        "Rounding doesn't change anything."
      ], right: 2 },

    { tag: "Exact", q: "How much does Marcus actually have left?",
      find: [17, 20],
      hint: "$70 minus $68.98.",
      choices: ["$1.02", "$15.00", "$10.20", "$21.02"], right: 0 },

    { tag: "Judging", q: "Which claim about the total cost of the four items is reasonable?",
      find: [23],
      hint: "It has to sit close to $70.",
      choices: [
        "About $6.90",
        "About $125",
        "About $15",
        "About $69"
      ], right: 3 },

    { tag: "Judging", q: "Someone says the four items cost $6.90. What's wrong with that claim?",
      find: [24],
      hint: "The hoodies alone cost about $50.",
      choices: [
        "The decimal point is in the wrong place.",
        "It's more than the budget.",
        "It's too close to the estimate.",
        "Nothing, it's reasonable."
      ], right: 0 }
  ],

  vocabQuestions: [
    { q: "What does it mean for an answer to be <i>reasonable</i>?",
      choices: ["It's a whole number.", "It's the exact answer.", "It makes sense and is close to an estimate.", "It's a rounded price."], right: 2 },
    { q: "What is an <i>estimate</i>?",
      choices: ["A rounded answer that tells you roughly how big the exact one should be.", "The exact answer.", "A claim someone makes.", "A decimal point."], right: 0 },
    { q: "What do you do in the <i>Examine</i> step?",
      choices: ["Round the prices.", "Choose a way to solve.", "Check that your answer makes sense.", "Find out what you know."], right: 2 },
    { q: "What are the steps of the <i>four-step plan</i>?",
      choices: ["Read, Write, Add, Check.", "Round, Add, Subtract, Stop.", "Guess, Test, Fix, Finish.", "Explore, Plan, Solve, Examine."], right: 3 }
  ],

  todo: { title: "What To Do Now", s: [
      "A shopper told his brother he'd have $15 left, and a quick round-and-add said otherwise, and the questions below ask you to judge claims the same way.",
      "{c} word cards sit at the top of the page, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "For every claim, round the amounts to easy numbers, estimate, and say out loud whether the claim and the estimate are close.",
      "If the judging questions trip you up, read Compare the Estimate With the Claim again.",
      "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] }
};
