/* maths/choose-the-method-of-computation
   Grade 7 · maths · unit 1. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 THIS IS A PROBLEM-SOLVING STRATEGY LESSON, SO IT IS THE READING SHAPE, NOT
   THE BRACKET. Lessons 1-1 to 1-4 are all built this way for the same reason:
   nothing here is computed for its own sake. The whole skill is DECIDING, before
   any arithmetic happens. CLAUDE.md's "do not build a maths lesson with
   build-lessons.js" is about COMPUTATION lessons - long division, integers -
   where Paul's rule is "math is about showing your work not about just reading".
   That rule does not reach this lesson, because there is no work to show.

   ✅ THE PROSE IN `parts` IS PAUL'S, REBUILT FROM HIS DOC 2026-09-14.
   Source: docs.google.com/document/d/1qNhJpdJpb06sJ809l94lPQpTPDyOEG0PPwcJbRXKSk0
   This is a REWRITE, not an edit. My 2026-09-13 draft is gone. What changed and
   why it matters:
     - THE CHART IS GONE. My draft taught the book's four-branch decision tree and
       made the chart the content. Paul teaches TWO QUESTIONS instead: what am I
       trying to find, and do I need an exact answer? The branches are then just
       common sense about the numbers. Simpler, and it survives outside this book.
     - ONE WORLD, NOT SIX. My draft defended its scattered examples (Ms. Meadows,
       Max, Des Moines, hotels, the Mediterranean) as deliberate variety. Paul's
       version is church and community throughout - a dinner, a picnic, a food
       drive, a family trip. Caleb's 198+103 chairs then come BACK as an exact
       count, and Noah's notebooks come back as exact change. THE SAME NUMBERS
       ASKED A DIFFERENT WAY is the whole lesson, and it only lands because the
       situation repeats. Ms. Meadows and Max's markers are both cut.
     - LUKE 14:28 OPENS IT. The man who counts the cost before building the tower.
       My draft had no biblical connection at all.
     - SEVEN WORDS, NOT FOUR. Paper and Pencil and Calculator are now defined, and
       Mental Math is its own card instead of a line inside another definition.
   ⚠️ `vocabQuestions` is 4 against 7 words. That WARNS and does not fail, and it
   is correct: Paul wrote four checks. Do not invent the other three. */
'use strict';
module.exports = {
  id: "maths/choose-the-method-of-computation",
  slug: "choose-the-method-of-computation",
  title: "Problem-Solving Strategy: Choose the Method of Computation",
  unit: "Math 7 &middot; U1-L5",
  seq: { unit: 1, unitTitle: "Tools for Problem Solving", n: 5 },

  /* ── /teach-plan, 2026-09-13, re-checked against Paul's rewrite 2026-09-14.
        The book is Glencoe Course 2 pp17-19,
        archive.org/details/mathematicscours0000unse. The MARKERS below are still
        the book's, because the objective did not move. The METHOD did: Paul
        replaced the chart with the two questions. Where they disagree, his
        rewrite wins - it is the prose that shipped. ── */
  plan: {
    objective: "Look at a problem and decide HOW to work it out - estimate, mental math, paper and pencil, or calculator - before doing any arithmetic.",
    markers: [
      "QUOTED, Objective box: 'Solve problems by choosing estimation, mental math, paper and pencil, or calculator.'",
      "QUOTED, the opening: 'Which method of computation would you use to solve this problem? You can use estimation, mental math, pencil and paper, or calculator.'",
      "QUOTED, Plan: 'Use the chart below to help you decide which method of computation to use.'",
      "QUOTED, Checking for Understanding 1: 'Tell how to use the chart to help you choose a method of computation.'",
      "QUOTED, Checking for Understanding 2: 'Write a sentence explaining how you know when estimation is an acceptable method for solving a problem.'",
      "QUOTED, Guided Practice: 'Read each situation. Write exact if the number must be figured exactly and estimate if the number can be approximate.'",
      "QUOTED, Problem Solving heading, p19: 'Choose the method of computation. Then solve.'",
    ],
    method: "TWO QUESTIONS, ASKED IN ORDER, BEFORE ANY ARITHMETIC. First: what am I trying to find? Second: do I need an exact answer, or will an estimate answer the question? Only after those two does the student look at the numbers and pick a tool - easy numbers mean mental math, regrouping or several steps mean paper and pencil, long or complicated arithmetic means a calculator. 🚨 THE PROOF IS THAT THE SITUATION REPEATS. Caleb's chairs are estimated and then counted exactly; Noah's notebooks are estimated and then figured to the penny. Same numbers both times. The method changed because the QUESTION changed, and that is the only thing this lesson is trying to teach.",
    exampleOnly: [
      "Caleb's chairs, the youth picnic, the community event, the food drive, Noah's notebooks, the road trip, the meal boxes - WORLD: church and community, held steady on purpose.",
      "🚨 THE REPEATS ARE NOT PADDING AND MUST NOT BE TRIMMED. Chairs appear twice and notebooks appear twice, and both times the second pass is the point being made. Cutting either one for length removes the lesson and leaves the arithmetic.",
    ],
    digitize: "The existing reading engine (build-lessons.js), same as Lessons 1-1 to 1-4. Nothing is computed for its own sake, so no generator is needed. Every question asks WHICH METHOD or WHAT CHANGED rather than for an answer, and the answer-hunt points at the sentence that decides it.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Math",
    blurb: "Two questions to ask before you touch the numbers, and why the same problem can need two different answers.",
    contains: [
      "The man who counted the cost before he built the tower, from Luke 14",
      "Caleb's 301 chairs, estimated once and counted exactly once",
      "Noah's notebooks, where the answer changes because the question did",
      "Eight questions that ask which method, never for the answer",
    ] },
  eyebrow: ["Math 7", "U1-L5", "Tools for Problem Solving", 10],
  dek: "Before you work anything out, you have to pick how. Sometimes the fastest correct move is not to calculate at all.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will learn to understand a word problem before calculating. They should ask: what am I trying to find? Do I need an exact answer, or is an estimate enough? Then they can choose a useful method: estimation, mental math, paper and pencil, or a calculator."
      ]},
      { h: "Key Concepts", p: [
        "The main idea is simple: think first, then calculate. The situation determines what kind of answer is needed.",
        "If a close answer is enough, students can round and estimate. If the answer must be exact, students should look at the numbers. Easy numbers may be solved with mental math. Problems with several steps or regrouping may be easier on paper. Long or complicated calculations may be easier with a calculator.",
        "The method is a tool, not a rule. Students are learning to choose a tool that fits the problem."
      ]},
      { h: "Where Students Get Stuck", p: [
        "🚨 Students may begin calculating as soon as they see numbers. Slow them down. Ask: what does the problem actually want to know?",
        "Students may also think that estimation means guessing. Remind them that an estimate is a reasonable answer based on the numbers.",
        "They may also assume that money always requires an exact answer. It depends on the situation. Estimating whether you have enough money is different from finding the exact change you should receive."
      ]},
      { h: "Teaching Suggestion", p: [
        "Use one situation and change the question. For example: four notebooks cost 98 cents each, and you have $5. Do you have enough? Round up, $1 times 4 is $4, and an estimate answers the question.",
        "Then ask: you paid with $5, so exactly how much money should you have left? Now the student needs an exact answer. This helps students see that the same numbers can require different methods depending on what they need to know.",
        "Connect this idea to Luke 14:28. Jesus used the example of a man who first sat down and counted the cost before building a tower. The lesson is not that Jesus was teaching arithmetic, but the example reinforces a useful habit: understand what you are doing before you begin."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Think Before You Calculate", s: [
      "Math is not only about getting the right answer.",
      "It is also about knowing how to approach a problem.",
      "",
      "Jesus once gave the example of someone planning to build a tower.",
      "",
      "[verse] \"For which of you, intending to build a tower, sitteth not down first, and counteth the cost...\"",
      "[verse] Luke 14:28",
      "",
      "Jesus was teaching about the cost of following Him, but notice the example He used.",
      "The builder did not begin without thinking.",
      "He first considered what the job would require.",
      "",
      "Word problems require that same kind of thinking.",
      "Before you start calculating, understand the situation and decide what you actually need to know."
    ]},

    /* ⚠️ THIS SECTION IS MINE, ADDED 2026-09-14, AND IT IS HERE FOR ONE REASON:
       every word card now has to be findable in the story. Paul asked for the
       cards to send the student to the sentence that explains the word, and five
       of the seven had no such sentence - "computation" did not appear in his
       prose at all, while its own vocabulary question asks what it means.
       🚨 DEFINITIONS ONLY. No new example, no new situation, nothing that
       competes with his teaching. It defines the words and gets out of the way.
       → [[feedback-tweak-pauls-lesson-structure]] */
    { title: "Four Ways to Work It Out", s: [
      "Computation is the process of using math to find an answer.",
      "Any time you add, subtract, multiply or divide to get a number, that is computation.",
      "",
      "A method is a way of doing something.",
      "So a method of computation is just a way of getting to the answer.",
      "",
      "You have four of them, and choosing between them is what this lesson is about.",
      "",
      "Estimation rounds the numbers first and accepts close instead of perfect.",
      "",
      "Mental math is solving a math problem in your head without writing out the steps.",
      "",
      "Paper and pencil means writing out the math so you can keep track of each step.",
      "",
      "A calculator is a tool that performs calculations.",
      "It does the arithmetic for you, but it does not tell you which arithmetic to do.",
      "",
      "An exact answer is the precise answer to a problem, without rounding.",
      "Some situations need one and some do not, and telling those two apart is the whole job."
    ]},

    { title: "Start With the Problem", s: [
      "Caleb is helping set up chairs for a church dinner.",
      "One room has 198 chairs and another has 103.",
      "",
      "Someone asks, \"Do we have about 300 chairs altogether?\"",
      "",
      "Caleb does not need to know the exact number.",
      "A few extra chairs will not hurt.",
      "He only needs to know whether they have about 300.",
      "",
      "So he rounds the numbers to make the problem easier.",
      "198 is about 200.",
      "103 is about 100.",
      "",
      "Then he can use mental math.",
      "",
      "[ex] 200 + 100 = 300",
      "",
      "Yes, they have about 300 chairs.",
      "",
      "This is called estimation.",
      "An estimate is a reasonable answer that is close to the exact answer.",
      "",
      "Caleb did not avoid solving the problem.",
      "He chose a simpler way to solve the problem because an exact answer was not necessary."
    ]},

    { title: "What If You Need the Exact Number?", s: [
      "Now change the situation.",
      "",
      "Caleb needs to write down exactly how many chairs the church owns.",
      "",
      "This time, \"about 300\" is not good enough.",
      "He needs an exact answer.",
      "",
      "The numbers have not changed.",
      "The question has.",
      "",
      "He could write the problem down and solve it with paper and pencil.",
      "",
      "[ex] 198 + 103 = 301",
      "",
      "There are exactly 301 chairs.",
      "",
      "That is why understanding a word problem comes before doing the arithmetic.",
      "The situation helps you decide what kind of answer you need."
    ]},

    { title: "Sometimes Mental Math Is Enough", s: [
      "Needing an exact answer does not always mean you need paper, pencil, or a calculator.",
      "",
      "Suppose 200 people attend a community event in the afternoon and another 300 arrive that evening.",
      "How many people attended altogether?",
      "",
      "The answer needs to be exact, but the numbers are easy to work with.",
      "",
      "[ex] 200 + 300 = 500",
      "",
      "You can probably solve that in your head.",
      "That is mental math.",
      "",
      "Now suppose 329 cans were collected for a food drive and 189 were given away.",
      "How many remain?",
      "",
      "You still need an exact answer, but there is more to keep track of.",
      "",
      "[ex] 329 - 189 = 140",
      "",
      "Writing the problem down can make the regrouping easier to follow.",
      "For longer problems with many calculations, a calculator may also be useful.",
      "",
      "The goal is not to make easy math harder.",
      "Choose a method that helps you solve the problem correctly."
    ]},

    { title: "Let the Situation Guide You", s: [
      "Suppose Noah has $5 and wants to buy four notebooks for 98 cents each.",
      "",
      "He wants to know, \"Do I have enough money?\"",
      "",
      "He could find the exact cost, but he does not need to.",
      "Round 98 cents up to $1.",
      "",
      "[ex] $1 x 4 = $4",
      "",
      "Even at the higher estimated price, the notebooks would cost only $4.",
      "Noah has $5, so he knows he has enough.",
      "",
      "But after buying them, suppose Noah wants to know exactly how much money he has left.",
      "",
      "Now he needs the real cost.",
      "",
      "[ex] $0.98 x 4 = $3.92",
      "",
      "Then take that from his $5.",
      "",
      "[ex] $5.00 - $3.92 = $1.08",
      "",
      "Same notebooks.",
      "Same prices.",
      "Different question.",
      "",
      "That is what problem solving is about."
    ]},

    /* ⚠️ THE TWO SECTIONS BELOW ARE MINE, NOT PAUL'S, ADDED 2026-09-14.
       Everything above this point is his doc, untouched. These exist because
       three of his own questions asked about situations the story never showed:
       the road trip (Q6, Q7) and the meal boxes (Q8). His numbers, his shape,
       kept as short as they can be. Paul: "i want to keep the similar story so
       dont over due rewriting it."
       🚨 THE ROAD TRIP EARNS ITS PLACE BY TEACHING THE ROUNDING. Q6's answer is
       250 + 350, which is rounding to the nearest FIFTY, and every other example
       in the lesson rounds to a hundred. Without this section the right answer
       has no source on the page. */
    { title: "Rounding to a Number You Can Hold", s: [
      "Rounding does not always mean rounding to the nearest hundred.",
      "You round to whatever makes the numbers easy while keeping the estimate close.",
      "",
      "A family is planning a road trip.",
      "The first part of the trip is 247 miles and the second part is 354 miles.",
      "Dad wants to know about how far they will travel so he can plan ahead.",
      "",
      "247 is close to 250.",
      "354 is close to 350.",
      "",
      "[ex] 250 + 350 = 600",
      "",
      "The trip is about 600 miles, and Dad can plan around that.",
      "",
      "Later the family fills out a travel record, and that record needs the real number.",
      "",
      "[ex] 247 + 354 = 601",
      "",
      "The estimate was one mile off.",
      "That is what a good estimate does.",
      "It is not the exact answer, but it is close enough to be useful."
    ]},

    { title: "When About Is the Best You Can Get", s: [
      "Sometimes an exact answer would not help you even if you worked it out.",
      "",
      "A church is ordering meals for 96 people.",
      "The meals come in boxes, and each box feeds about 10 people.",
      "",
      "Read that again.",
      "Each box feeds about 10 people, not exactly 10.",
      "The box itself is not exact, so your answer cannot be more exact than the box is.",
      "",
      "So treat 96 as about 100.",
      "Then ask how many groups of 10 are in 100.",
      "",
      "[ex] 100 divided by 10 is 10.",
      "",
      "They should plan on about 10 boxes, then check the real serving information before ordering."
    ]},

    { title: "Think, Then Calculate", s: [
      "When you read a word problem, do not immediately start working with the numbers.",
      "",
      "First ask: what am I trying to find?",
      "",
      "Then decide: do I need an exact answer, or will an estimate answer the question?",
      "",
      "Finally, look at the numbers and choose a sensible way to work with them.",
      "You might round and estimate, solve it mentally, write it down, or use a calculator when the arithmetic becomes long or complicated.",
      "",
      "There is not one method that is best for every problem.",
      "",
      "A good problem solver understands the situation first and then chooses the math that fits it."
    ]}
  ],

  words: [
    ["Computation", "The process of using math to find an answer.", 10],
    ["Method", "A way of doing something.", 12],
    ["Mental Math", "Solving a math problem in your head without writing out the steps.", 16],
    ["Estimate", "A reasonable answer that is close to the exact answer.", 35],
    ["Exact Answer", "The precise answer to a problem, without rounding.", 20],
    ["Paper and Pencil", "Writing out the math so you can keep track of each step.", 17],
    ["Calculator", "A tool that performs calculations. You still have to decide what calculation to use.", 18]
  ],

  findsAt: 111,
  questions: [
    { tag: "The Picnic", q: "A youth group expects 198 people from one group and 103 from another, and wants to know about how many bottles of water to have ready. What is the best way to begin?",
      find: [28, 29, 30, 31],
      hint: "Read what they asked for. The word 'about' is doing the work.",
      choices: [
        "Add 198 + 103 exactly with paper and pencil.",
        "Round the numbers to 200 and 100, then use mental math.",
        "Use a calculator because the numbers have three digits.",
        "Subtract 103 from 198."
      ], right: 1 },

    { tag: "Mental Math", q: "A school has 200 students in the seventh grade and 300 in the eighth. How many students are in the two grades altogether, and which method makes the most sense?",
      find: [52, 53, 54, 55],
      hint: "The answer has to be exact. That does not settle which tool you reach for.",
      choices: [
        "Estimation.",
        "Mental math, because the answer needs to be exact but the numbers are simple.",
        "A calculator.",
        "Round both numbers first."
      ], right: 1 },

    { tag: "The Food Drive", q: "A food pantry collected 329 cans and gave out 189. The workers need to record exactly how many remain. Which method would help?",
      find: [58, 59, 60],
      hint: "Exact answer, and there is something to keep track of while you subtract.",
      choices: [
        "Estimate 329 as 300 and 189 as 200.",
        "Guess that about 100 remain.",
        "Use paper and pencil to subtract exactly.",
        "Round both numbers to the nearest hundred."
      ], right: 2 },

    { tag: "Noah's Notebooks", q: "Noah has $5 and wants four notebooks that cost 98 cents each. He only wants to know whether $5 is enough. Which approach makes the most sense?",
      find: [66, 67, 68],
      hint: "He is not asking what they cost. He is asking whether he can afford them.",
      choices: [
        "Round 98 cents up to $1 and multiply mentally.",
        "Find the exact cost and exact change.",
        "Round 98 cents down to 50 cents.",
        "Use a calculator because the problem involves money."
      ], right: 0 },

    { tag: "Noah's Notebooks", q: "Noah has now bought the four notebooks at 98 cents each and wants to know exactly how much of his $5 is left. What changed?",
      find: [71, 72, 75],
      hint: "Compare the two questions, not the two sets of numbers.",
      choices: [
        "He can still estimate because the numbers are the same.",
        "He now needs an exact answer because he wants to know exactly how much money remains.",
        "He should round each notebook to $2.",
        "Money problems should always be estimated."
      ], right: 1 },

    { tag: "The Road Trip", q: "A trip is 247 miles and then 354 miles, and Dad wants to know about how far they will travel so he can plan ahead. Which is the most useful calculation?",
      find: [80, 81, 85, 86, 87],
      hint: "He said 'about'. Pick the numbers that are easiest to hold in your head.",
      choices: [
        "247 + 354",
        "200 + 300",
        "250 + 350",
        "354 - 247"
      ], right: 2 },

    { tag: "The Road Trip", q: "The same family is filling out a travel record and must put down exactly how many miles the two parts cover. What should they calculate?",
      find: [89, 90],
      hint: "Same trip as the question before. The paperwork is what changed.",
      choices: [
        "250 + 350",
        "200 + 400",
        "247 + 354",
        "About 600 miles"
      ], right: 2 },

    { tag: "The Meal Boxes", q: "A church is ordering meals for 96 people, and each box feeds about 10. Before ordering, someone wants a quick idea of how many boxes are needed. What is the most useful way to think about it?",
      find: [98, 99, 100, 101],
      hint: "The box itself only feeds 'about' 10, so an exact answer cannot be more accurate than that.",
      choices: [
        "Treat 96 as about 100 and think about how many groups of 10 are in 100.",
        "Use a calculator immediately because 96 is a two-digit number.",
        "Round 96 down to 50.",
        "Find an exact answer even though each box only feeds about 10 people."
      ], right: 0 }
  ],

  vocabQuestions: [
    { q: "What is <i>computation</i>?",
      choices: [
        "A guess about what an answer might be.",
        "The process of using math to find an answer.",
        "A tool used only for multiplication.",
        "Rounding every number in a problem."
      ], right: 1 },
    { q: "What is an <i>estimate</i>?",
      choices: [
        "An answer chosen without thinking.",
        "An answer that must always be exact.",
        "A reasonable answer that is close to the exact answer.",
        "An incorrect answer."
      ], right: 2 },
    { q: "What is <i>mental math</i>?",
      choices: [
        "Solving a problem in your head without writing out the steps.",
        "Using a calculator without showing your work.",
        "Rounding every number before solving.",
        "Guessing which operation to use."
      ], right: 0 },
    { q: "When is an <i>exact answer</i> important?",
      choices: [
        "Whenever the numbers are larger than 100.",
        "Only when using a calculator.",
        "When the situation requires the precise amount rather than a close answer.",
        "Exact answers are never necessary in word problems."
      ], right: 2 }
  ],

  /* ⚠️ NO BLANK LINES IN A `todo`. requireTodo() fails any line under 12
     characters and it counts the "" paragraph breaks too, so the break that is
     legal in `parts` kills the build here. Cost one failed build 2026-09-14. */
  todo: { title: "Now Solve the Situation", s: [
      "That is the reading done, and the questions are waiting.",
      "For every one of them, pay attention to more than the numbers.",
      "Think about what the person actually needs to know.",
      "Ask yourself what the lesson asked: does the answer have to be exact, and could rounding make the problem easier?",
      "Then ask whether you can solve it in your head, or whether writing it down would help.",
      "Choose your method because it fits the problem, not simply because it is the first method that comes to mind.",
      "If one of them is hard, go back to Think, Then Calculate and start from the top.",
      /* ⚠️ THE CARDS ARE AT THE TOP NOW, so this line cannot say "underneath".
         It said exactly that until the words block moved on 2026-09-14, which is
         the same stale-instruction trap as the old "write it in the booklet"
         note. 🚨 THIRTEEN OTHER LESSONS STILL SAY IT. See the review queue. */
      "Last, scroll back up to the word cards and answer the check at the bottom of the page."
  ] }
};
