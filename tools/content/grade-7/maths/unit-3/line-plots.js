/* maths/line-plots
   Grade 7 · maths · unit 3. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-10-11. Written on Sonnet from Glencoe Course 2
   pp101-103 (Lesson 3-4) via the week 8-9 packet (paraphrased notes). Shape copied
   from the pilot, maths/mean-median-and-mode. The video (Mr. J, whole numbers) was
   read for its teaching order: sort first, find the least and greatest, number line,
   one X per value.

   ⚠️ ONE WORLD: Eli's class counting how much they read. Our numbers, never the
   book's (Meredith's 20 classmates and the voter turnout are left out). */
'use strict';

/* draws a line plot as rows of X over a number line; counts[i] is the number of Xs over lo + i*step */
const plot = (counts, lo, step) => {
  const h = Math.max(...counts), rows = [];
  for (let r = h; r >= 1; r--) rows.push(counts.map((c) => (c >= r ? "X" : " ").padEnd(3)).join("").trimEnd());
  rows.push(counts.map((_, i) => String(lo + i * step).padEnd(3)).join("").trimEnd());
  return rows.join("\n");
};

module.exports = {
  id: "maths/line-plots",
  slug: "line-plots",
  title: "Line Plots",
  unit: "Math 7 &middot; U3-L4",
  seq: { unit: 3, unitTitle: "Statistics and Data Analysis", n: 4 },
  natural: "2026-10-11",

  /* ── /teach-plan, 2026-10-11. Glencoe Course 2 pp101-103. ── */
  plan: {
    objective: "Build a line plot from a data set (find the range, choose a scale and an interval, put one X over each value) and read outliers and clusters off it.",
    markers: [
      "BOOK (paraphrased), Objective box: construct line plots.",
      "BOOK (paraphrased), steps: find the range, choose a scale and an interval, draw the number line, then put an X above the number for every data value.",
      "BOOK (paraphrased), observations: the most frequent value, an outlier far from the rest, and a cluster where the data bunch together.",
      "BOOK (paraphrased), Example 1: unlike a line graph, a line plot does not need to start at zero.",
      "BOOK (paraphrased), Checking for Understanding: the advantage of a line plot over a table, defining an outlier, and drawing a plot on a given scale.",
    ],
    method: "RANGE FIRST, THEN THE NUMBER LINE. Sort the data. Range = greatest minus least. Draw a number line that covers least to greatest, with every number on it, even the ones nobody picked. Put one X over the number for each data value, stacking repeats. Then read it: the tallest stack is the mode, a lone X far away is an outlier, and a bunch of Xs together is a cluster.",
    exampleOnly: [
      "Eli's class counting books read last month, and then minutes read last night. WORLD: one class, our numbers.",
      "Left out on purpose: the book's survey of twenty classmates and the voter turnout percentages (two more worlds).",
    ],
    digitize: "Reading engine. Two Watch It Worked walkthroughs that draw the plot row by row (whole-number steps, then an interval of five), one Your Turn typed step by step, a video behind a button, and the homework sheet.",
    unclear: "",
  },

  sheet: { slug: "line-plots-homework", subject: "maths",
    note: "Do it on screen or print it. Your score shows here once you check it." },

  video: { id: "c3qiERbLAuQ", title: "Creating a Line Plot with Whole Numbers", channel: "Math with Mr. J",
    why: "A different teacher builds a line plot from a messy list, in the same order you just used. Watch it once before Your Turn, or again if the empty numbers on the number line felt strange." },

  shelf: { grades: [7], subject: "Math",
    blurb: "Fifteen kids, fifteen answers, and one list nobody can read. A line plot turns it into a picture in about a minute.",
    contains: [
      "Two worked examples that draw the plot one row at a time",
      "Choosing a number line and an interval that fit the data",
      "Reading a plot for the mode, a cluster and an outlier",
      "A Your Turn problem you work and type one step at a time",
    ] },
  eyebrow: ["Math 7", "U3-L4", "Statistics and Data Analysis"],
  dek: "Eli's class turned in fifteen numbers, and nobody could tell anything from the list. Put them on a number line and the answer jumps out.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "By the end of this lesson your student should be able to build a line plot from a list of data, choose a number line that fits it, and point out the mode, a cluster and an outlier."
      ]},
      { h: "Where Students Get Stuck", p: [
        "🚨 Leaving numbers off the number line because nobody picked them. The empty spots are part of the picture, and they are how an outlier shows up.",
        "Putting one X over a value that appears three times. Every data value gets its own X, so repeats stack up.",
        "Skipping the sort, then losing track of which values have been drawn."
      ]},
      { h: "Teaching Suggestion", p: [
        "Have the student cross each number off the list as he draws its X. A finished plot should have exactly as many Xs as the list had numbers, and counting them is the best check there is."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "A List Nobody Can Read", s: [
      "Eli asked the fifteen kids in his class how many books each of them read last month, and wrote down whatever each one said as it came.",
      "His list came out as 4, 2, 3, 2, 5, 3, 2, 4, 3, 12, 3, 2, 4, 3 and 1, which is every answer and also nothing you can learn from at a glance.",
      "Was it a reading class or a class that barely reads, and did one kid do something strange?",
      "A line plot answers those questions in a single look, because it puts every number from the list on one number line where you can see them pile up."
    ]},

    { title: "Step One: Sort, Then Find the Range", s: [
      "A {{line plot}} is a picture of data on a number line, with one X above the number for every time that number shows up in the list.",
      "Before you draw anything, put the list in order from least to greatest, because a sorted list keeps you from drawing a number twice or forgetting one.",
      "Then find the range, which is the greatest number minus the least number, and which tells you how long your number line has to be.",
      "",
      "[walk] Get Eli's fifteen answers ready to plot.",
      "[step] Put the answers in order from least to greatest, with each repeat written out. || 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 5, 12",
      "[step] Pick out the least and the greatest, since the number line has to hold both of them. || Least = 1, greatest = 12",
      "[step] Subtract the least from the greatest to get the range. || Range = 12 - 1 = 11",
      "[step] Choose a number line that runs a little past each end and counts by 1, because 11 is small enough to count by ones. || Number line: 0, 1, 2, 3, ... 12",
      "",
      "Notice what the number line includes: every single number from 0 to 12, even 6, 7, 8, 9, 10 and 11, which nobody picked.",
      "Those empty spots stay on the line, and a lot of people erase them without thinking, which is the most common way to wreck a line plot."
    ]},

    { title: "Step Two: One X for Every Kid",
      s: [
      "Now you draw the plot, and the rule is as simple as it sounds: for every number in the sorted list, put one X above that number on the line.",
      "A number that shows up four times gets four Xs stacked one on top of the other, and a number that shows up once gets a single X.",
      "The easy way to keep track is to cross each answer off the list the moment you draw its X, so nothing gets drawn twice or skipped.",
      "",
      "[walk] Draw the plot of Eli's fifteen answers, number by number.",
      "[step] Start with 1, which shows up once, so it gets a single X. || " + plot([0,1,0,0,0,0,0,0,0,0,0,0,0], 0, 1),
      "[step] Add the 2s next, and since there are four of them, stack four Xs over the 2. || " + plot([0,1,4,0,0,0,0,0,0,0,0,0,0], 0, 1),
      "[step] Then the 3s, five of them, then the three 4s and the single 5. || " + plot([0,1,4,5,3,1,0,0,0,0,0,0,0], 0, 1),
      "[step] Last comes the 12, far away from everyone else, and the numbers between 5 and 12 stay empty. || " + plot([0,1,4,5,3,1,0,0,0,0,0,0,1], 0, 1),
      "[step] Count the Xs to check your work, because a finished plot has exactly as many Xs as the list had numbers. || 1 + 4 + 5 + 3 + 1 + 1 = 15 Xs, and the list had 15 answers",
      "",
      "That picture answers Eli's questions at a glance: most of his class read 2, 3 or 4 books, and one kid read 12.",
      "The book calls the bunch in the middle a {{cluster}}, which is a group of values that sit close together, and the lone X way out at 12 an {{outlier}}, a value that sits far away from the rest.",
      "The tallest tower, at 3, is the mode you met in the last lesson, so a line plot hands you the mode for free."
    ]},

    { title: "When the Numbers Get Bigger",
      s: [
      "Counting by ones works when the numbers are small, but if Eli's class reports how many minutes they read last night, the answers run into the sixties.",
      "A number line with sixty marks would be silly, so you pick an interval, which is the amount you count by, and you choose one that lands on most of the data.",
      "The nine answers were 30, 25, 40, 30, 20, 60, 25, 35 and 30, and the plot below counts by fives.",
      "",
      "[walk] A plot of nine reading times, counting by fives.",
      "[step] Sort the answers and find the range, which is the greatest minus the least. || 20, 25, 25, 30, 30, 30, 35, 40, 60\nRange = 60 - 20 = 40",
      "[step] A range of 40 split into jumps of 5 gives a short line, so count by 5 from the least to the greatest. || Number line: 20, 25, 30, 35, 40, 45, 50, 55, 60",
      "[step] Put one X over each answer, and leave the empty numbers on the line. || " + plot([1,2,3,1,1,0,0,0,1], 20, 5),
      "",
      "Nothing says the line has to start at zero, which is a difference from the line graphs you've already made, so this one starts at 20 because nobody read for less than that.",
      "Here the cluster runs from 25 to 35 and the outlier is the kid who read for 60 minutes."
    ]},

    { title: "Read the Plot, Then Trust It", s: [
      "A finished line plot is only worth the time if you read it, so ask the same three things every time.",
      "Where is the tallest stack, which is the mode, where is the bunch, which is the cluster, and is anything sitting far away from the rest, which is an outlier.",
      "An outlier isn't a mistake, and the 12-book reader may be the best reader in the class, but you should always notice it because one outlier can drag a mean far from where most of the data sit.",
      "Before you call a finished plot done, count the Xs one last time, because one missing X means one answer from the list never made it onto the line."
    ]}
  ],

  words: [
    ["Line plot", "A picture of data on a number line, with one X above the number for each time it appears.", 4],
    ["Cluster", "A group of values that sit close together on a line plot.", 24],
    ["Outlier", "A value that sits far away from the rest of the data.", 24],
    ["Interval", "The amount you count by on a number line.", 27],
  ],

  findsAt: 39,
  questions: [
    { tag: "The Setup", q: "Why is a line plot easier to read than Eli's list of fifteen answers?",
      find: [0, 3],
      hint: "Read A List Nobody Can Read.",
      choices: [
        "It puts the answers on a number line, so the piles show up at a glance.",
        "It leaves out the answers that are repeated.",
        "It adds up the answers for you.",
        "It puts the biggest number first."
      ], right: 0 },

    { tag: "The First Step", q: "What should you do with the list before you draw anything?",
      find: [5],
      hint: "Read Step One.",
      choices: [
        "Put the numbers in order from least to greatest.",
        "Add up all the numbers.",
        "Cross out the repeats.",
        "Divide by how many numbers there are."
      ], right: 0 },

    { tag: "Use It", q: "A class's answers run from 4 to 19. What is the range?",
      find: [6],
      hint: "Greatest minus least.",
      choices: ["23", "15", "19", "14"], right: 1 },

    { tag: "Use It", q: "A set of data has a least of 6 and a greatest of 14. Which number line covers it?",
      find: [11, 12],
      hint: "The line has to hold both ends and every number between.",
      choices: ["0 to 10", "6 to 8", "10 to 20", "5 to 15"], right: 3 },

    { tag: "Use It", q: "A plot has 2 Xs over 1, 5 Xs over 2, 3 Xs over 3 and 1 X over 4. How many answers were collected?",
      find: [15],
      hint: "Every X is one answer.",
      choices: ["11", "10", "4", "5"], right: 0 },

    { tag: "Use It", q: "In the data 7, 8, 8, 9, 8, 7, 31, which value is the outlier?",
      find: [24],
      hint: "Which one sits far from the rest?",
      choices: ["8", "7", "31", "9"], right: 2 },

    { tag: "Careful", q: "Eli's data was 5, 5, 5, 9. A friend draws a single X over the 5. What did he do wrong?",
      find: [15],
      hint: "Every data value gets its own X.",
      choices: [
        "He should have put the Xs over 9.",
        "He should have put three Xs over the 5, one for each time it showed up.",
        "He should have drawn the line from zero.",
        "Nothing, repeats only get one X."
      ], right: 1 },

    { tag: "Careful", q: "A friend erases 6, 7, 8, 9, 10 and 11 from Eli's number line because nobody picked them. Why is that a mistake?",
      find: [12, 13],
      hint: "Read Step One again.",
      choices: [
        "Those numbers are needed for the mean.",
        "The empty spots are part of the picture, and they show how far away the outlier is.",
        "It makes the Xs too tall.",
        "The line has to have exactly thirteen numbers."
      ], right: 1 }
  ],

  vocabQuestions: [
    { q: "What is a <i>line plot</i>?",
      choices: ["A table of totals.", "A picture of data on a number line, with one X for each value.", "A graph that must start at zero.", "A list of the middle numbers."], right: 1 },
    { q: "What is an <i>outlier</i>?",
      choices: ["The most common value.", "The middle value.", "A value that sits far away from the rest.", "The sum of the values."], right: 2 },
    { q: "What is a <i>cluster</i>?",
      choices: ["A group of values that sit close together.", "The tallest stack.", "The greatest value.", "A mistake in the data."], right: 0 },
    { q: "What is the <i>interval</i> on a number line?",
      choices: ["The greatest value.", "The amount you count by.", "The number of Xs.", "The range."], right: 1 }
  ],

  /* ⭐ YOUR TURN: a fresh set in the same world, every step typed and checked. */
  work: [
    { title: "Another Class, Another Plot",
      ask: "Ten kids in Mia's class told Eli how many books they read: 4, 1, 3, 4, 2, 4, 3, 9, 4, 3. Get the data ready and read the plot, one step at a time.",
      steps: [
        { ask: "Put the ten answers in order from least to greatest. Type them with commas between.",
          answer: [1, 2, 3, 3, 3, 4, 4, 4, 4, 9],
          hint: "Start with the smallest and keep going up. Every repeat gets written out.",
          why: "Right. Now it's easy to see which numbers repeat." },
        { ask: "What's the range?", answer: 8, calc: "9-1",
          hint: "Greatest minus least.",
          why: "9 minus 1 is 8, so a number line from 1 to 9, counting by ones, is plenty." },
        { ask: "How many Xs go over the number 4?", answer: 4,
          hint: "Count how many times 4 appears in your sorted list.",
          why: "Four Xs, stacked, which makes 4 the tallest tower." },
        { ask: "Which value is the outlier?", answer: 9,
          hint: "Which number sits far from the bunch?",
          why: "9 is the lone X way out past the others." },
        { ask: "How many Xs will the finished plot have in all?", answer: 10,
          hint: "It's one X for every answer on the list.",
          why: "Ten Xs, because there were ten answers. If your count of Xs doesn't match the list, you missed one." },
      ] },
  ],

  todo: { title: "What To Do Now", s: [
      "Eli's list of fifteen numbers turned into a picture, and the rest of this page is your turn to make one yourself.",
      "First work through Your Turn below the reading, typing each step, and watch the video if the empty numbers on the number line still feel strange.",
      "Then come {c} word cards, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "Last, open the Homework Sheet with the button at the bottom of the page, and either fill it out right on the screen or print it and do it on paper."
  ] }
};
