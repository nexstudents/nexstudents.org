/* maths/range-and-scales
   Grade 7 · maths · unit 3. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 REWRITTEN 2026-10-13 (Sonnet, checked by Opus) after Kolten said the lessons
   don't explain anything. The 2026-10-05 version said "start below the least,
   end above the greatest, make equal steps" in words and [ex] lines and never
   DREW a number line, so he had nothing to picture. This one draws every number
   line as text (├ ┼ ┤ ticks, ● for each data value, numbers underneath) in a
   Watch It Worked: find the range from the sorted list, pick a scale and draw
   it, plot the data, see what an 8-to-12 scale cuts off, see what intervals of
   10 do (every dot piles up), then the second data set on a 0-to-50 line.
   Then a Your Turn (range of a new set, and counting the steps and marks on a
   scale). Word cards stay at four.

   ⚠️ THE WORLD IS THE BOOK'S OWN OPENING, KEPT BUT MADE OURS: a survey of how
   many hours a week eleven classmates spend on the phone. The book's own
   numbers (11.5 to 17 hours) are not copied; THE ELEVEN NUMBERS HERE ARE MADE
   UP FOR PRACTICE, and the reading says so. The eleven are the example in the
   homework sheet's how-to box, not one of its problems. The second set
   (21, 35, 18, 40, 27) is ours. Your Turn uses 14, 9, 22, 17, 11 and a 0-to-40
   scale by 5s, which are not on the sheet.

   ⚠️ NO ADDED FACTS. NO SCRIPTURE. Paul's call, in the review queue. */
'use strict';
module.exports = {
  id: "maths/range-and-scales",
  slug: "range-and-scales",
  title: "Range and Scales",
  unit: "Math 7 &middot; U3-L3",
  seq: { unit: 3, unitTitle: "Statistics and Data Analysis", n: 3 },
  natural: "2026-10-13",

  /* ── /teach-plan, rewritten 2026-10-13. Glencoe Course 2 pp98-100. ── */
  plan: {
    objective: "Find the range of a data set and choose a scale and equal intervals that fit all the data.",
    markers: [
      "BOOK (paraphrased), Objective box: choose appropriate scales and intervals for data.",
      "BOOK (paraphrased), opening: a student surveys 11 classmates on how many hours they spend on the phone, and the answers run from a least to a greatest.",
      "BOOK (paraphrased), rule: the range is the greatest number minus the least number.",
      "BOOK (paraphrased), rule: the scale has to include all of the data, and the intervals split the scale into equal parts, so close data call for a small interval.",
      "BOOK (paraphrased): more than one scale and interval can be correct.",
      "BOOK (paraphrased), Checking for Understanding: find the range of a set of numbers and draw two number lines for it with different scales.",
    ],
    method: "RANGE = GREATEST MINUS LEAST. SCALE: A NUMBER LINE THAT RUNS FROM BELOW THE LEAST TO ABOVE THE GREATEST. INTERVAL: EQUAL STEPS, SIZED TO THE SPREAD. More than one choice can be right, so the test is whether every piece of data fits and the steps are even. Every number line is drawn.",
    exampleOnly: [
      "The eleven classmates and their phone hours. WORLD: a class survey, the book's own opening, with our own made-up numbers. The title and objective don't name it.",
      "The second set (21, 35, 18, 40, 27) is ours, since the packet was thin on the book's exercises.",
    ],
    digitize: "Reading engine. Number lines are drawn as text in Watch It Worked walkthroughs (ticks, dots for data, numbers underneath), and a Your Turn has typed answers.",
    unclear: "",
  },

  /* The practice half, on paper (tools/math-homework.js). subject is the FOLDER, "maths". */
  sheet: { slug: "range-and-scales-homework", subject: "maths",
    note: "Print it and work every problem on paper. No multiple choice this time." },

  shelf: { grades: [7], subject: "Math",
    blurb: "Eleven students report the hours they spend on the phone. How far apart the numbers are, and how to draw a number line that fits every one of them, with each line drawn out.",
    contains: [
      "Finding the range, step by step",
      "Choosing a scale that holds all the data, drawn as a number line",
      "Choosing equal intervals, and what happens when they're too big",
      "Why more than one answer can be right",
      "Your Turn: find a range and count the steps on a scale",
    ] },
  eyebrow: ["Math 7", "U3-L3", "Statistics and Data Analysis"],
  dek: "Before you can graph anything you have to decide how big the number line is. Pick wrong and half your data falls off the edge.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Your student finds the range of a data set, chooses a scale that includes all the data, chooses equal intervals that suit the spread, and explains why more than one scale can be right."
      ]},
      { h: "Where Students Get Stuck", p: [
        "🚨 A scale that cuts off the data. If the scale runs from 8 to 12 and a value is 6.5, that value has nowhere to go, so check both ends against the least and the greatest.",
        "Uneven intervals. Every step on the number line has to be the same size, or the picture lies about how far apart the numbers are."
      ]},
      { h: "Teaching Suggestion", p: [
        "The eleven numbers are made up for practice. Have your student collect eight or ten real numbers, like the temperatures over a week, and draw two different number lines for them on paper."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Eleven Phones", s: [
      "A student asks eleven classmates how many hours a week they spend on the phone, and the answers come back as a jumble of whole numbers and halves.",
      "Before anyone can make a graph of them, there's a decision to make that has nothing to do with the numbers themselves, which is how big the number line should be.",
      "The eleven answers are made up for practice, but the decision is real, because every graph you'll ever draw begins with it.",
      "So how do you build a number line that fits all eleven answers and still shows them clearly?"
    ]},

    { title: "How Spread Out Is It?", s: [
      "A set of numbers you've gathered is called a {{data set}}, and the first thing to find is how spread out it is.",
      "The gap between the least number and the greatest number is called the {{range}}, and it tells you how long the number line has to be.",
      "",
      "[walk] Find the range of the eleven phone hours: 6.5, 9, 7.5, 13, 8, 10.5, 9.5, 11, 7, 8.5, 10.",
      "[step] Put the numbers in order from least to greatest, so the ends are easy to see. || 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 13",
      "[step] The first number is the least, 6.5 hours, and the last is the greatest, 13 hours. || least    6.5\ngreatest 13",
      "[step] Subtract the least from the greatest. || 13 − 6.5 = 6.5",
      "[step] So the range is 6.5 hours. || range = 6.5 hours",
      "",
      "The range is the first number you need, because it tells you how much room the data takes up."
    ]},

    { title: "A Scale That Holds Everything", s: [
      "A {{scale}} is the set of numbers along a graph's number line, and the rule for choosing one is simple, which is that it has to include all of the data.",
      "That means starting below the least number and ending above the greatest, and a graph with missing data is worse than no graph, because it looks finished.",
      "",
      "[walk] Draw a scale that holds all eleven phone hours.",
      "[step] The least is 6.5 and the greatest is 13, so start at 6, which is below 6.5, and end at 14, which is above 13. || scale: 6 to 14",
      "[step] Draw the number line with a tick at every whole number. || ├─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤\n6     7     8     9     10    11    12    13    14",
      "[step] Put a dot above the line for each of the eleven answers. ||    ●  ●  ●  ●  ●  ●  ●  ●  ●  ●           ●\n├─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤\n6     7     8     9     10    11    12    13    14",
      "[step] Check that every dot sits on the line, which means the scale holds all the data. || 11 answers, 11 dots, none missing",
      "",
      "[walk] See what goes wrong with a scale from 8 to 12.",
      "[step] Draw the number line from 8 to 12 and try to place the answers. || ●  ●  ●  ●  ●  ●  ●\n├─────┼─────┼─────┼─────┤\n8     9     10    11    12",
      "[step] The answers 6.5, 7 and 7.5 are below 8, and 13 is above 12, so four answers have nowhere to go. || off the left edge:  6.5, 7, 7.5\noff the right edge: 13",
      "",
      "A scale from 8 to 12 might look neat, but it only shows seven of the eleven answers."
    ]},

    { title: "Equal Steps", s: [
      "Once you have the scale, you split it into equal parts, and each part is an {{interval}}.",
      "The size of the interval should fit the spread of the data, because the steps have to be the same size all the way along the line.",
      "",
      "[walk] See what happens when the intervals are too big.",
      "[step] Use intervals of 10 on a number line from 0 to 20, which puts marks only at 0, 10 and 20. || ├───────────┼───────────┤\n0           10          20",
      "[step] Now try to place the eleven answers, which all land between 6.5 and 13. ||         ●●●●●●  ●\n├───────────┼───────────┤\n0           10          20",
      "[step] The dots pile into one lump, and you can't see how different the answers really are. || crowded:  too big an interval",
      "",
      "Intervals that are too small do the opposite, by spreading a few points across a hundred marks, so data that sit close together call for a small interval.",
      "For the phone hours, intervals of 1 are a good fit, because every answer lands close to a mark."
    ]},

    { title: "More Than One Right Answer", s: [
      "There's no single correct scale for a data set, and that surprises people who expect math to have exactly one answer.",
      "A number line from 6 to 14 with intervals of 1 is a good choice for the phone hours, and a number line from 0 to 14 with intervals of 2 is a good choice too, though it spreads the data a little less.",
      "What makes a choice right is not that it matches somebody else's but that every piece of data fits and every step is the same size.",
      "",
      "[walk] Build a number line for a new set: 21, 35, 18, 40 and 27.",
      "[step] Find the least and the greatest, which are 18 and 40. || least    18\ngreatest 40",
      "[step] Subtract to find the range. || 40 − 18 = 22",
      "[step] Choose a scale from 0 to 50, which holds everything, with intervals of 5. || ├────┼────┼────┼────┼────┼────┼────┼────┼────┼────┤\n0    5    10   15   20   25   30   35   40   45   50",
      "[step] Plot the five answers as dots. ||                   ●  ●     ●       ●    ●\n├────┼────┼────┼────┼────┼────┼────┼────┼────┼────┤\n0    5    10   15   20   25   30   35   40   45   50",
      "",
      "Every dot fits and every step is 5, so this is a fair number line, even though a line from 15 to 45 would work too."
    ]},

    { title: "Examine the Number Line", s: [
      "The last step is the one that catches the mistakes, so run three checks before you draw a thing.",
      "Is the least number inside the scale, and is the greatest number inside it, and are all the steps the same size?",
      "If the answer to all three is yes, then your number line is a fair one, whether it matches somebody else's or not, and that's how you answer the question the lesson began with."
    ]}
  ],

  words: [
    ["Data set", "A collection of numbers you've gathered, like the hours from a survey.", 4],
    ["Range", "The difference between the greatest number and the least number in a data set.", 5],
    ["Scale", "The set of numbers along a graph's number line. It has to include all the data.", 12],
    ["Interval", "One of the equal parts a scale is split into.", 23]
  ],

  findsAt: 43,
  questions: [
    { tag: "Range", q: "What are the least and the greatest answers in the phone survey?",
      find: [7,8], hint: "Read How Spread Out Is It?",
      choices: ["6 and 14", "6.5 and 13", "7 and 11", "8 and 12"], right: 1,
      why: "Sorted from least to greatest, the first is 6.5 and the last is 13." },

    { tag: "Range", q: "How do you find the range of a set of numbers?",
      find: [9], hint: "Read How Spread Out Is It?",
      choices: ["Add the least and the greatest", "Subtract the greatest from the least", "Subtract the least from the greatest", "Divide the greatest by the least"], right: 2,
      why: "Range is greatest minus least." },

    { tag: "Range", q: "What is the range of the phone hours?",
      find: [10], hint: "Greatest minus least.",
      choices: ["19.5", "6.5", "13", "9.75"], right: 1,
      why: "13 − 6.5 = 6.5." },

    { tag: "Scale", q: "What's the rule for choosing a scale?",
      find: [12,13], hint: "Read A Scale That Holds Everything.",
      choices: ["It has to start at zero", "It has to include all of the data", "It has to end at 10", "It has to use whole numbers only"], right: 1,
      why: "A scale that leaves out data makes the graph wrong." },

    { tag: "Scale", q: "Why doesn't a scale from 8 to 12 work for the phone hours?",
      find: [21,22], hint: "Compare the ends of the scale with the least and the greatest.",
      choices: ["It's too wide", "Some of the answers fall outside it", "It uses whole numbers", "It's the wrong color"], right: 1,
      why: "6.5, 7, 7.5 and 13 have nowhere to go." },

    { tag: "Interval", q: "What is an interval?",
      find: [23], hint: "Read Equal Steps.",
      choices: ["The biggest number in the data", "One of the equal parts a scale is split into", "The gap between the least and the greatest", "The title of a graph"], right: 1,
      why: "An interval is one equal step of the scale." },

    { tag: "Interval Size", q: "What would intervals of 10 do to the phone-hours number line?",
      find: [27,28], hint: "Look at the drawing with marks only at 0, 10 and 20.",
      choices: ["They'd spread the data out nicely", "They'd pile every answer into one lump", "They'd cut off the greatest answer", "They'd make the range bigger"], right: 1,
      why: "All eleven dots would crowd between the same two marks." },

    { tag: "Right Answers", q: "Which statement about choosing a scale is true?",
      find: [31,33], hint: "Read More Than One Right Answer.",
      choices: ["Only one scale can ever be right", "More than one scale can be right if all the data fits and the steps are equal", "A scale must always start at zero", "The scale must match the one your teacher drew"], right: 1,
      why: "What matters is that all the data fits and the steps are equal." },

    { tag: "A New Set", q: "A set of numbers is 21, 35, 18, 40 and 27. What's its range?",
      find: [35,36], hint: "Find the greatest and the least.",
      choices: ["22", "19", "40", "18"], right: 0,
      why: "40 − 18 = 22." }
  ],

  vocabQuestions: [
    { q: "What is a <i>data set</i>?",
      choices: ["A collection of numbers you've gathered", "A graph with two colors", "A single number", "A scale from zero to ten"], right: 0 },
    { q: "What is the <i>range</i> of a data set?",
      choices: ["The difference between the greatest and the least number", "The sum of all the numbers", "The most common number", "The middle number"], right: 0 },
    { q: "What is a <i>scale</i> on a graph?",
      choices: ["A tool for weighing the data", "The title of the graph", "The set of numbers along the number line, which must include all the data", "The color of the bars"], right: 2 },
    { q: "What is an <i>interval</i>?",
      choices: ["The greatest number", "A break in the survey", "The title of a table", "One of the equal parts a scale is split into"], right: 3 }
  ],

  work: [
    { title: "A New Range",
      ask: "A student counts the books on five shelves and gets 14, 9, 22, 17 and 11. Find the range.",
      steps: [
        { ask: "What is the least number?", answer: 9,
          hint: "Look for the smallest.",
          why: "9 is the least." },
        { ask: "What is the greatest number?", answer: 22,
          hint: "Look for the biggest.",
          why: "22 is the greatest." },
        { ask: "What is the range?", answer: 13, calc: "22-9",
          hint: "Subtract the least from the greatest.",
          why: "22 − 9 = 13." },
      ] },
    { title: "Count the Steps",
      ask: "A scale runs from 0 to 40 with intervals of 5.",
      steps: [
        { ask: "How many equal steps are there from 0 to 40?", answer: 8, calc: "(40-0)/5",
          hint: "Divide the length of the scale by the size of one step.",
          why: "40 ÷ 5 = 8 steps." },
        { ask: "How many marks are there, counting both ends?", answer: 9, calc: "(40-0)/5+1",
          hint: "There's one more mark than there are steps.",
          why: "8 steps have 9 marks, because both ends get a mark." },
        { ask: "The data value 38 needs a place on this scale. What is the next mark above it?", answer: 40,
          hint: "The marks go 35, 40, so look between them.",
          why: "38 sits between 35 and 40, so the next mark above it is 40." },
      ] },
  ],

  todo: { title: "What To Do Now", s: [
      "A number line is a promise that every piece of data has a place on it, and now you get to draw some and check that you can keep it.",
      "First work through Your Turn below the reading, typing each answer.",
      "Then come {c} word cards, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "Whenever you need a scale, find the least and the greatest first, then pick a start below one and an end above the other.",
      "If the interval questions trip you up, read Equal Steps again.",
      "Last, open the Homework Sheet with the button at the bottom of the page, and work every problem on paper."
  ] }
};
