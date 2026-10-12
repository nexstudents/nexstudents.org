/* maths/making-predictions
   Grade 7 · maths · unit 3. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-10-11. Written on Sonnet from Glencoe Course 2
   pp112-115 (Lab 3-7A, Lesson 3-7) via the week 8-9 packet (paraphrased notes).
   Shape copied from the pilot, maths/mean-median-and-mode. The video (Andrew
   Armstead, a store's sales line graph with a dashed prediction line) was read for
   its order: describe the trend first, then extend it.

   ⚠️ ONE WORLD: Eli training for the school mile, one time a week. Our numbers,
   never the book's (Yoko's walking times, the Epcot poll and the restaurant orders
   are left out). The poll-bar-graph half of the book's lesson is a question or two
   on new numbers, not a second story. */
'use strict';
module.exports = {
  id: "maths/making-predictions",
  slug: "making-predictions",
  title: "Making Predictions",
  unit: "Math 7 &middot; U3-L7",
  seq: { unit: 3, unitTitle: "Statistics and Data Analysis", n: 7 },
  natural: "2026-10-11",

  /* ── /teach-plan, 2026-10-11. Glencoe Course 2 pp112-115. ── */
  plan: {
    objective: "Use the trend in a graph or table to predict, and say when a prediction can't be trusted.",
    markers: [
      "BOOK (paraphrased), Objective box: make predictions from graphs.",
      "BOOK (paraphrased), the idea: use a graph of what people said to guess how similar people would answer, and use a line graph to guess a future value.",
      "BOOK (paraphrased), Example 1: a walker's times slope downward across ten days, so the next days can be predicted, but the times can't keep falling forever.",
      "BOOK (paraphrased), Example 2: a manager reads a graph to see when to schedule extra help.",
      "BOOK (paraphrased), Checking for Understanding: name ways graphs can be used to predict, and say what a prediction leaves out.",
    ],
    method: "READ THE TREND, EXTEND IT, THEN CHECK IT. Describe which way the data is going. Find the change per step: last value minus first value, divided by the number of steps (gaps) between them. Add that change once for every step you move past the data. Then ask whether the trend can really keep going, because it can't forever.",
    exampleOnly: [
      "Eli training for the school mile, one time a week. WORLD: one runner, our numbers.",
      "Left out on purpose: Yoko's walking times, the Epcot poll and the restaurant orders (three more worlds).",
    ],
    digitize: "Reading engine. Two Watch It Worked walkthroughs (extend a trend, then find where the trend breaks), one Your Turn typed step by step, a video behind a button, and the homework sheet.",
    unclear: "",
  },

  sheet: { slug: "making-predictions-homework", subject: "maths",
    note: "Do it on screen or print it. Your score shows here once you check it." },

  video: { id: "2L72K16bzOc", title: "Making Predictions from Line Graphs", channel: "Andrew Armstead",
    why: "A line graph of a store's sales with a dashed line for the prediction. It's the same move you use here, describe the trend and then extend it, on a different graph." },

  shelf: { grades: [7], subject: "Math",
    blurb: "Eli can run the mile a bit faster every week, so how fast will he be by week 8? And why can't it go on forever? Reading a trend and extending it.",
    contains: [
      "Describing a trend in words",
      "Finding the change per step, and the step-counting trap",
      "Two worked examples that extend a trend",
      "When a prediction can't be trusted",
      "A Your Turn problem you work and type one step at a time",
    ] },
  eyebrow: ["Math 7", "U3-L7", "Statistics and Data Analysis"],
  dek: "Eli's mile time drops a little every week. A graph can tell you where it's heading, and it can also tell you where it can't go.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "By the end of this lesson your student should be able to describe a trend, find the change per step, extend the trend to make a prediction, and explain when a prediction can't be trusted."
      ]},
      { h: "Where Students Get Stuck", p: [
        "🚨 Dividing by the number of data points instead of the number of steps between them. Five weeks of data only has four steps.",
        "Forgetting the sign. A time that is falling has a negative change, and adding it moves the prediction down.",
        "Trusting a prediction a long way out. A trend is only a guide, and a runner can't reach a mile time of zero."
      ]},
      { h: "Teaching Suggestion", p: [
        "Have the student say the prediction as a sentence with the word about in it. A prediction is a good guess from a pattern, so it should never sound like a fact."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Where Will He Be by Week Eight?", s: [
      "Eli is training for the school mile, and every Saturday his dad times him on the track behind the church.",
      "In week 1 he ran it in 12 minutes, and he's gotten a little quicker every week since, so he asked his dad a question that sounded simple.",
      "How fast will I be by week 8, and how fast by the end of the school year?",
      "You can answer the first question with a graph and a bit of arithmetic, and the second one turns out to be a trap, which is why this lesson has two halves."
    ]},

    { title: "Read the Trend First", s: [
      "A {{trend}} is the direction a set of data is heading, and you can usually see it before you do any math, because the line on a graph goes up, goes down or stays flat.",
      "Eli's first five weeks were 12, 11.5, 11, 10.5 and 10 minutes, so his times are falling, and they're falling by the same amount each week.",
      "Describing the trend in words is always the first step, because a {{prediction}} that points the wrong way is worse than no prediction.",
      "",
      "[walk] Describe the trend in Eli's first five weeks.",
      "[step] Put the times in a table, one for each week. || Week   1    2    3    4    5\nTime  12  11.5  11  10.5  10",
      "[step] Look at which way the numbers move from one week to the next. || 12 → 11.5 → 11 → 10.5 → 10, so the times are going down",
      "[step] Say it in a sentence, with a number if you can. || Eli's mile time is dropping about half a minute every week"
    ]},

    { title: "Extend the Trend",
      s: [
      "To predict, you find how much the data changes each step, and then you {{extend}} the pattern by adding that change again, as far as you want to go.",
      "The {{change per step}} is the last value minus the first value, divided by the number of steps between them, and the part people trip on is that last number.",
      "Five weeks of data only has four steps between them, since steps are the gaps and not the points, so you divide by 4 and not by 5.",
      "",
      "[walk] Predict Eli's time in week 8.",
      "[step] Subtract the first time from the last time, since the last time is the one you are moving from. || 10 - 12 = -2 minutes over the five weeks",
      "[step] Divide by the number of steps between week 1 and week 5, which is 4 and not 5. || -2 ÷ 4 = -0.5 minutes per week",
      "[step] Keep adding that change, one week at a time, until you reach the week you want. || Week 6: 10 - 0.5 = 9.5\nWeek 7: 9.5 - 0.5 = 9\nWeek 8: 9 - 0.5 = 8.5",
      "[step] Say the prediction with the word about, because it's a good guess and not a fact. || Eli will run about 8.5 minutes in week 8",
      "",
      "A negative change isn't scary, it just tells you the numbers are going down, and adding a negative moves you down.",
      "You can also jump straight to a week without writing every one in between, because week 8 is 3 steps past week 5, and 3 times -0.5 is -1.5, which takes 10 down to 8.5."
    ]},

    { title: "The Trend Can't Go On Forever",
      s: [
      "Now for the second question, how fast will Eli be at the end of the school year, which is about week 30.",
      "The arithmetic works exactly the same way, but the answer will tell you something is wrong.",
      "",
      "[walk] Predict Eli's time in week 30.",
      "[step] Week 30 is 25 steps past week 5, so add 25 changes of -0.5 to the week 5 time. || 10 + 25 × (-0.5)",
      "[step] Multiply first, then add. || 25 × (-0.5) = -12.5, so 10 - 12.5 = -2.5",
      "[step] Ask whether the answer makes sense, because a mile time of -2.5 minutes is not possible. || Time can't be negative, so the trend can't last until week 30",
      "[step] Find the week where the trend would hit zero, by dividing the time left by the change per week. || 10 ÷ 0.5 = 20 weeks past week 5, which is week 25",
      "",
      "A runner gets faster fast at the start, and then it gets harder and harder, so the real line bends and flattens out long before it hits zero.",
      "That's the second half of the lesson: a prediction a short way past the data is usually good, and one a long way out can be nonsense, so always check it against what's possible."
    ]},

    { title: "What Else Could Change It?", s: [
      "A prediction only uses the pattern in the numbers, and it knows nothing else about Eli's life.",
      "If he catches a cold in week 6, or the track floods, or he decides to train twice as hard, the real time won't match the line.",
      "That doesn't make predicting useless, because a store uses the same trick to guess how many people will come in, and a doctor uses it to guess how fast a child will grow.",
      "It just means you say about, you keep the prediction close to the data, and you ask what else might change before you trust it."
    ]}
  ],

  words: [
    ["Trend", "The direction a set of data is heading, such as going up, going down or staying flat.", 4],
    ["Prediction", "A good guess about a value you don't have yet, made from the pattern in the data you do have.", 6],
    ["Extend", "To keep a pattern going past the data you have, by adding the same change again.", 11],
    ["Change per step", "How much the data goes up or down from one step to the next.", 12],
  ],

  findsAt: 34,
  questions: [
    { tag: "The Setup", q: "What is the first thing to do before you make a prediction from a graph or table?",
      find: [4, 6],
      hint: "Read Read the Trend First.",
      choices: [
        "Describe which way the data is heading.",
        "Add all the values together.",
        "Find the mode.",
        "Round every value to the nearest ten."
      ], right: 0 },

    { tag: "Use It", q: "The times in a table go 14, 13, 12, 11. What is the trend?",
      find: [9],
      hint: "Look at which way the numbers move.",
      choices: ["Going down", "Going up", "Staying flat", "Jumping around"], right: 0 },

    { tag: "Use It", q: "A plant measures 4, 7, 10 and 13 centimeters on days 1 to 4. How much does it grow per day?",
      find: [12, 13],
      hint: "Four days of data have three steps between them.",
      choices: ["3", "9", "4", "13"], right: 0 },

    { tag: "Use It", q: "The plant above grows the same amount each day. About how tall will it be on day 6?",
      find: [17, 20],
      hint: "Day 6 is two steps past day 4, and each step adds 3.",
      choices: ["16", "19", "18", "15"], right: 1 },

    { tag: "Use It", q: "A runner goes from 15 minutes to 12 minutes in 3 weeks, falling steadily. What is the change per week?",
      find: [15, 16],
      hint: "Last minus first, then divide by the number of steps.",
      choices: ["-1", "3", "-3", "1"], right: 0 },

    { tag: "Careful", q: "Five weeks of data are in a table. A student finds the change per week by dividing by 5. What did he do wrong?",
      find: [13],
      hint: "Read Extend the Trend.",
      choices: [
        "Five weeks of data have four steps, so he should divide by 4.",
        "He should have multiplied instead of dividing.",
        "He should have divided by 6.",
        "Nothing, dividing by the number of weeks is right."
      ], right: 0 },

    { tag: "Careful", q: "A trend says a runner's mile time will be -2.5 minutes in week 30. What does that tell you?",
      find: [26, 29],
      hint: "Read The Trend Can't Go On Forever.",
      choices: [
        "The runner will be incredibly fast.",
        "The trend can't keep going that far, because a time can't be negative.",
        "The data was copied wrong.",
        "Every prediction is wrong."
      ], right: 1 },

    { tag: "Which One", q: "In a poll of 50 students, 20 chose pizza. About how many of 200 students from the same school would you predict choose it?",
      find: [32],
      hint: "200 is four times as many students as 50.",
      choices: ["40", "20", "80", "100"], right: 2 }
  ],

  vocabQuestions: [
    { q: "What is a <i>trend</i>?",
      choices: ["A very high value.", "The direction a set of data is heading.", "The middle value.", "A mistake in a table."], right: 1 },
    { q: "What is a <i>prediction</i>?",
      choices: ["A fact you looked up.", "A value you measured yourself.", "A good guess about a value you don't have yet, made from a pattern.", "The sum of all the data."], right: 2 },
    { q: "What does it mean to <i>extend</i> a trend?",
      choices: ["To erase the oldest data.", "To keep the pattern going past the data you have.", "To round the data.", "To find the mode."], right: 1 },
    { q: "What is the <i>change per step</i> in 5, 8, 11, 14?",
      choices: ["1", "5", "9", "3"], right: 3 }
  ],

  /* ⭐ YOUR TURN: a fresh set in the same world, every step typed and checked. */
  work: [
    { title: "Noah Joins the Mile",
      ask: "Noah, a friend of Eli's, ran the mile in 15 minutes in week 1, 13.5 in week 2, 12 in week 3 and 10.5 in week 4. Predict his time and test the trend, one step at a time.",
      steps: [
        { ask: "How many steps are there between week 1 and week 4?", answer: 3,
          hint: "Steps are the gaps between the weeks, not the weeks themselves.",
          why: "Three steps, which is one fewer than the four data points." },
        { ask: "What's the change per week? Use a negative number because his time is falling.", answer: -1.5, calc: "(10.5-15)/3",
          hint: "Last time minus first time, then divide by the number of steps.",
          why: "Noah drops 1.5 minutes every week." },
        { ask: "Predict his time in week 6.", answer: 7.5, calc: "10.5+2*(-1.5)",
          hint: "Week 6 is two steps past week 4. Add the change twice to 10.5.",
          why: "About 7.5 minutes, if the trend holds." },
        { ask: "At this rate, in which week would his time reach zero minutes?", answer: 11, calc: "10+1",
          hint: "He starts at 15 and loses 1.5 a week. How many weeks to lose all 15? Then add that to week 1.",
          why: "Ten weeks of dropping takes him from week 1 to week 11, and a mile time of zero is impossible, so the trend must stop before that." },
      ] },
  ],

  todo: { title: "What To Do Now", s: [
      "Eli's mile times gave you two skills, extending a trend and noticing when it breaks, and the rest of this page is your turn to use both.",
      "First work through Your Turn below the reading, typing each step, and watch the video if finding the change per step still feels slippery.",
      "Then come {c} word cards, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "Last, open the Homework Sheet with the button at the bottom of the page, and either fill it out right on the screen or print it and do it on paper."
  ] }
};
