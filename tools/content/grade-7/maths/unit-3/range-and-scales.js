/* maths/range-and-scales
   Grade 7 · maths · unit 3. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-10-05. Written on Sonnet from Glencoe Course 2
   pp98-100 (Lesson 3-3, Range and Scales), via the week 6-7 packet (paraphrased
   notes) and the teach-plan. /natural pass run and stamped.

   ⚠️ THE WORLD IS THE BOOK'S OWN OPENING, KEPT BUT MADE OURS: a survey of how
   many hours a week eleven classmates spend on the phone. The book's own
   numbers (11.5 to 17 hours) are not copied; THE ELEVEN NUMBERS HERE ARE MADE
   UP FOR PRACTICE, and the reading says so. The telecommunications career note
   and Susan's name are left out.

   ⚠️ THE PACKET WAS THIN on the book's exercise list, so the second set of
   numbers (21, 35, 18, 40, 27) is ours.

   ⚠️ THE NUMBER LINES ARE DESCRIBED IN WORDS. The site doesn't draw a number
   line yet, and a drawn one would help.

   ⚠️ NO SCRIPTURE. Paul's call, in the review queue. */
'use strict';
module.exports = {
  id: "maths/range-and-scales",
  slug: "range-and-scales",
  title: "Range and Scales",
  unit: "Math 7 &middot; U3-L3",
  seq: { unit: 3, unitTitle: "Statistics and Data Analysis", n: 3 },
  natural: "2026-10-05",

  /* ── /teach-plan, 2026-10-05. Glencoe Course 2 pp98-100. ── */
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
    method: "RANGE = GREATEST MINUS LEAST. SCALE: A NUMBER LINE THAT RUNS FROM BELOW THE LEAST TO ABOVE THE GREATEST. INTERVAL: EQUAL STEPS, SIZED TO THE SPREAD. More than one choice can be right, so the test is whether every piece of data fits and the steps are even.",
    exampleOnly: [
      "The eleven classmates and their phone hours. WORLD: a class survey, the book's own opening, with our own made-up numbers. The title and objective don't name it.",
      "The second set (21, 35, 18, 40, 27) is ours, since the packet was thin on the book's exercises.",
    ],
    digitize: "Reading engine. Number lines are described in words and as [ex] lines of scale marks. A drawn number line would help, and the site doesn't have that visual yet.",
    unclear: "",
  },

  /* The practice half, on paper (tools/math-homework.js). subject is the FOLDER, "maths". */
  sheet: { slug: "range-and-scales-homework", subject: "maths",
    note: "Print it and work every problem on paper. No multiple choice this time." },

  shelf: { grades: [7], subject: "Math",
    blurb: "Eleven students report the hours they spend on the phone. How far apart the numbers are, and how to draw a number line that fits every one of them.",
    contains: [
      "Finding the range",
      "Choosing a scale that holds all the data",
      "Choosing equal intervals",
      "Why more than one answer can be right",
    ] },
  eyebrow: ["Math 7", "U3-L3", "Statistics and Data Analysis"],
  dek: "Before you can graph anything you have to decide how big the number line is. Pick wrong and half your data falls off the edge.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "By the end of this lesson your student should be able to find the range of a data set, choose a scale that includes all the data, choose equal intervals that suit the spread, and explain why more than one scale can be right."
      ]},
      { h: "Where Students Get Stuck", p: [
        "🚨 A scale that cuts off the data. If the scale runs from 8 to 12 and a value is 6.5, that value has nowhere to go, so check both ends against the least and the greatest.",
        "Uneven intervals. Every step on the number line has to be the same size, or the picture lies about how far apart the numbers are."
      ]},
      { h: "Teaching Suggestion", p: [
        "The eleven numbers are made up for practice. Have the student collect eight or ten real numbers, like the temperatures over a week, and draw two different number lines for them on paper.",
        "The site can't draw a number line yet, so each one is described in words. Sketching them from the description is the practice."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Eleven Phones", s: [
      "A student asks eleven classmates how many hours a week they spend on the phone, and the answers come back as a jumble of whole numbers and halves.",
      "Before anyone can make a graph of them, there's a decision to make that has nothing to do with the numbers themselves: how big should the number line be?",
      "The eleven answers are made up for practice, but the decision is real, because every graph you'll ever draw begins with it.",
      "So how do you build a number line that fits all eleven answers and still shows them clearly?"
    ]},

    { title: "How Spread Out Is It?", s: [
      "The eleven answers are listed below in the order they were collected.",
      "The first thing to find is the least number and the greatest number, which are 6.5 and 13, and the gap between them is called the {{range}}.",
      "To find it, subtract the least from the greatest, and the range is 13 minus 6.5, which is 6.5 hours.",
      "The range tells you how far the data is spread, and it's the first number you need for deciding how big the number line has to be.",
      "",
      "[ex] 6.5, 9, 7.5, 13, 8, 10.5, 9.5, 11, 7, 8.5, 10",
      "[ex] range = 13 - 6.5 = 6.5"
    ]},

    { title: "A Scale That Holds Everything", s: [
      "A {{scale}} is the set of numbers along a graph's number line, and the rule for choosing one is simple: it has to include all of the data.",
      "That means starting below the least number and ending above the greatest, so for these answers a scale from 6 to 14 works, since 6 is below 6.5 and 14 is above 13.",
      "A scale from 8 to 12 might look neat, but four of the answers would have nowhere to go, and a graph with missing data is worse than no graph, because it looks finished.",
      "",
      "[ex] a scale from 8 to 12 cuts off 6.5, 7, 7.5 and 13",
      "[ex] a scale from 6 to 14 holds all eleven answers"
    ]},

    { title: "Equal Steps", s: [
      "Once you have the scale, you split it into equal parts, and each part is an {{interval}}.",
      "On a number line from 6 to 14, intervals of 1 give you eight steps, and every one of the eleven answers lands close to a mark.",
      "The size of the interval should fit the spread, because intervals that are too big squeeze all the data into one lump, and intervals that are too small spread a few points across a hundred marks.",
      "Intervals of 10 on this number line would put marks at 0, 10 and 20, and all eleven answers would crowd in between the first two marks, so data that sit close together call for a small interval.",
      "",
      "[ex] 6, 7, 8, 9, 10, 11, 12, 13, 14"
    ]},

    { title: "More Than One Right Answer", s: [
      "There's no single correct scale for a data set, and that surprises students who expect math to have exactly one answer.",
      "A number line from 6 to 14 with intervals of 1 is a good choice for the phone hours, and a number line from 0 to 14 with intervals of 2 is a good choice too, though it spreads the data a little less.",
      "What makes a choice right is not that it matches the book but that every piece of data fits and every step is the same size.",
      "Try a new set: five numbers, 21, 35, 18, 40 and 27, with a range of 40 minus 18, which is 22, and a scale from 0 to 50 with intervals of 5 holds them all."
    ]},

    { title: "Examine the Number Line", s: [
      "The last step is the one that catches the mistakes, so run three checks before you draw a thing.",
      "Is the least number inside the scale, and is the greatest number inside it, and are all the steps the same size?",
      "If the answer to all three is yes, then your number line is a fair one, whether it matches somebody else's or not, and that's how you answer the question the lesson began with."
    ]}
  ],

  words: [
    ["Range", "The difference between the greatest number and the least number in a data set.", 5],
    ["Scale", "The set of numbers along a graph's number line. It has to include all the data.", 10],
    ["Interval", "One of the equal parts a scale is split into.", 15],
    ["Data set", "A collection of numbers you've gathered, like the hours from a survey.", 0]
  ],

  findsAt: 27,
  questions: [
    { tag: "Range", q: "What are the least and the greatest answers in the phone survey?",
      find: [5],
      hint: "Read How Spread Out Is It?",
      choices: ["6 and 14", "6.5 and 13", "7 and 11", "8 and 12"], right: 1 },

    { tag: "Range", q: "How do you find the range of a set of numbers?",
      find: [6],
      hint: "Read How Spread Out Is It?",
      choices: [
        "Add the least and the greatest.",
        "Subtract the greatest from the least.",
        "Subtract the least from the greatest.",
        "Divide the greatest by the least."
      ], right: 2 },

    { tag: "Range", q: "What is the range of the phone hours?",
      find: [9],
      hint: "Greatest minus least.",
      choices: ["19.5", "6.5", "13", "9.75"], right: 1 },

    { tag: "Scale", q: "What's the rule for choosing a scale?",
      find: [10],
      hint: "Read A Scale That Holds Everything.",
      choices: [
        "It has to start at zero.",
        "It has to include all of the data.",
        "It has to end at 10.",
        "It has to use whole numbers only."
      ], right: 1 },

    { tag: "Scale", q: "Why doesn't a scale from 8 to 12 work for the phone hours?",
      find: [13],
      hint: "Compare the ends of the scale with the least and the greatest.",
      choices: [
        "It's too wide.",
        "Some of the answers fall outside it.",
        "It uses whole numbers.",
        "It's the wrong color."
      ], right: 1 },

    { tag: "Interval", q: "What is an interval?",
      find: [15],
      hint: "Read Equal Steps.",
      choices: [
        "The biggest number in the data.",
        "One of the equal parts a scale is split into.",
        "The gap between the least and the greatest.",
        "The title of a graph."
      ], right: 1 },

    { tag: "Interval Size", q: "What would intervals of 10 do to the phone-hours number line from 6 to 14?",
      find: [18],
      hint: "Read Equal Steps.",
      choices: [
        "They'd spread the data out nicely.",
        "They'd pile every answer into one lump.",
        "They'd cut off the greatest answer.",
        "They'd make the range bigger."
      ], right: 1 },

    { tag: "Right Answers", q: "Which statement about choosing a scale is true?",
      find: [20],
      hint: "Read More Than One Right Answer.",
      choices: [
        "Only one scale can ever be right.",
        "More than one scale can be right if all the data fits and the steps are equal.",
        "A scale must always start at zero.",
        "The scale must match the one in the book."
      ], right: 1 },

    { tag: "A New Set", q: "A set of numbers is 21, 35, 18, 40 and 27. What's its range?",
      find: [23],
      hint: "Find the greatest and the least.",
      choices: ["22", "19", "40", "18"], right: 0 },

    { tag: "Examine", q: "Which of these is NOT one of the three checks before drawing a number line?",
      find: [25],
      hint: "Read Examine the Number Line.",
      choices: [
        "Is the least number inside the scale?",
        "Is the greatest number inside the scale?",
        "Are all the steps the same size?",
        "Is the number line exactly the one in the book?"
      ], right: 3 }
  ],

  vocabQuestions: [
    { q: "What is the <i>range</i> of a data set?",
      choices: [
        "The difference between the greatest and the least number.",
        "The sum of all the numbers.",
        "The most common number.",
        "The middle number."
      ], right: 0 },
    { q: "What is a <i>scale</i> on a graph?",
      choices: [
        "A tool for weighing the data.",
        "The title of the graph.",
        "The set of numbers along the number line, which must include all the data.",
        "The color of the bars."
      ], right: 2 },
    { q: "What is an <i>interval</i>?",
      choices: [
        "The greatest number.",
        "A break in the survey.",
        "The title of a table.",
        "One of the equal parts a scale is split into."
      ], right: 3 },
    { q: "What is a <i>data set</i>?",
      choices: [
        "A collection of numbers you've gathered.",
        "A graph with two colors.",
        "A single number.",
        "A scale from zero to ten."
      ], right: 0 }
  ],

  todo: { title: "What To Do Now", s: [
      "A number line is a promise that every piece of data has a place on it, and the questions check that you can keep it.",
      "{c} word cards sit at the top of the page, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "Whenever you need a scale, find the least and the greatest first, then pick a start below one and an end above the other.",
      "If the interval questions trip you up, read Equal Steps again.",
      "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] }
};
