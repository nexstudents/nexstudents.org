/* maths/stem-and-leaf-plots
   Grade 7 · maths · unit 3. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-10-11. Written on Sonnet from Glencoe Course 2
   pp109-111 (Lesson 3-6) via the week 8-9 packet (paraphrased notes). Shape copied
   from the pilot, maths/mean-median-and-mode. The video (Mr. J, two-digit data)
   was read for its teaching order; it sorts the data first, the book builds the rows
   first and sorts the leaves after, and this lesson follows the book and says so.

   ⚠️ ONE WORLD: a field day, jumping rope for one minute. Our numbers, never the
   book's (the presidents' ages and the March temperatures are left out). */
'use strict';
module.exports = {
  id: "maths/stem-and-leaf-plots",
  slug: "stem-and-leaf-plots",
  title: "Stem-and-Leaf Plots",
  unit: "Math 7 &middot; U3-L6",
  seq: { unit: 3, unitTitle: "Statistics and Data Analysis", n: 6 },
  natural: "2026-10-11",

  /* ── /teach-plan, 2026-10-11. Glencoe Course 2 pp109-111. ── */
  plan: {
    objective: "Make a stem-and-leaf plot from a data set (tens digits are the stems, ones digits are the leaves, leaves in order, a key) and read it.",
    markers: [
      "BOOK (paraphrased), Objective box: construct stem-and-leaf plots.",
      "BOOK (paraphrased), steps: find the least and greatest, write the stems down the left, a leaf for every value on the right, rewrite each row in order, and add a key.",
      "BOOK (paraphrased), Example 1: a stem with no leaves stays on the plot, and a single-digit number has a stem of 0.",
      "BOOK (paraphrased), reading the plot: the mode, the median and the outliers can all be read straight off it.",
      "BOOK (paraphrased), Checking for Understanding: choose the stems for a list of numbers, including three-digit numbers.",
    ],
    method: "FIND THE STEMS, THEN DROP IN THE LEAVES. Least and greatest give the stems. For every value, the tens digit is the stem and the ones digit is the leaf, with a leaf for every repeat. Then rewrite each row from least to greatest, add the key, and read it. An empty stem stays on the plot.",
    exampleOnly: [
      "A field day jump-rope contest: sixteen kids, then a short second round. WORLD: one field day, our numbers.",
      "Left out on purpose: the presidents' ages and the March temperatures (two more worlds).",
    ],
    digitize: "Reading engine. Two Watch It Worked walkthroughs that build the plot row by row, one Your Turn typed step by step, a video behind a button, and the homework sheet.",
    unclear: "",
  },

  sheet: { slug: "stem-and-leaf-plots-homework", subject: "maths",
    note: "Do it on screen or print it. Your score shows here once you check it." },


  shelf: { grades: [7], subject: "Math",
    blurb: "Sixteen kids jumped rope for a minute. A stem-and-leaf plot shows every score and the shape of the whole group in one little picture.",
    contains: [
      "Two worked examples that build the plot one row at a time",
      "Splitting a number into a stem and a leaf",
      "Keeping an empty stem, and writing the key",
      "A Your Turn problem you work and type one step at a time",
    ] },
  eyebrow: ["Math 7", "U3-L6", "Statistics and Data Analysis"],
  dek: "Sixteen kids jumped rope for one minute, and the scores are all over the place. A stem-and-leaf plot sorts them and draws them at the same time.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "By the end of this lesson your student should be able to build a stem-and-leaf plot from a list of numbers, keep empty stems, write the key, and read the mode, the median and the spread off the finished plot."
      ]},
      { h: "Where Students Get Stuck", p: [
        "🚨 Skipping a stem because it has no leaves. A gap in the stems is part of the picture, and leaving it out squeezes the plot.",
        "Dropping a leaf when a number repeats. Every value gets its own leaf, so 38 showing up three times makes three 8s.",
        "Forgetting the key, or leaving the leaves in the order they came from the list instead of putting them in order."
      ]},
      { h: "Teaching Suggestion", p: [
        "Have the student count the leaves on the finished plot and compare that with the count of the original list. If the two numbers differ, a leaf went missing."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Sixteen Scores", s: [
      "At the school field day, sixteen kids jumped rope for one minute while Eli's mom counted their jumps and wrote each number down as the kid finished.",
      "The list she handed back was 34, 47, 52, 38, 45, 41, 52, 29, 38, 44, 61, 38, 47, 33, 52 and 46.",
      "Who won is easy to see, but what was a typical score, and did most kids land close together or spread out?",
      "A stem-and-leaf plot answers both, and it does it by splitting every number into two pieces."
    ]},

    { title: "Splitting a Number in Two", s: [
      "In a {{stem-and-leaf plot}}, every number is cut into its tens digit and its ones digit, and the tens digit becomes the {{stem}} while the ones digit becomes the {{leaf}}.",
      "The number 34 has a 3 in the tens place and a 4 in the ones place, so its stem is 3 and its leaf is 4.",
      "The number 61 has a stem of 6 and a leaf of 1, and a number like 8, which has no tens digit at all, gets a stem of 0 and a leaf of 8.",
      "A good way to picture it is a plant: the stem is the tall part that holds the leaves up, and every leaf hangs off the stem it belongs to."
    ]},

    { title: "Build the Plot", s: [
      "The first move is to look at the least and the greatest number on the list, because those tell you which stems you need.",
      "Here the least score is 29 and the greatest is 61, so the stems run from 2 up to 6, and you write them in a column with a line down the right side.",
      "Then you go through the list in order and drop each number's leaf onto its stem, which is quick because you never have to sort the list first.",
      "",
      "[walk] Build the plot of the sixteen jump-rope scores.",
      "[step] Find the least and the greatest score, because they decide which stems you need. || Least = 29, greatest = 61, so the stems are 2, 3, 4, 5 and 6",
      "[step] Write the stems in a column from least to greatest and draw a line to their right. || 2 |\n3 |\n4 |\n5 |\n6 |",
      "[step] Go down the list and write each score's ones digit next to its tens digit, in the order they appear, giving every repeat its own leaf. || 2 | 9\n3 | 4 8 8 8 3\n4 | 7 5 1 4 7 6\n5 | 2 2 2\n6 | 1",
      "[step] Now rewrite each row with its leaves in order from least to greatest. || 2 | 9\n3 | 3 4 8 8 8\n4 | 1 4 5 6 7 7\n5 | 2 2 2\n6 | 1",
      "[step] Add a key, which tells the reader how to turn a stem and a leaf back into a number. || Key: 4 | 1 means 41",
      "[step] Count the leaves to check your work, since a finished plot has exactly one leaf for every score on the list. || 1 + 5 + 6 + 3 + 1 = 16 leaves, and there were 16 scores",
      "",
      "The {{key}} matters more than it looks, because without it a reader can't tell whether 4 | 1 means 41 or 4.1 or 401.",
      "Skipping the sorted rewrite is the other common slip, and it's worth the extra minute, because the next section only works when the leaves are in order."
    ]},

    { title: "Reading the Plot", s: [
      "A finished plot is a table and a graph at once, since turning it on its side gives you the same shape as a bar graph, but every score is still there in the leaves.",
      "The row with the most leaves shows where most of the kids landed, and here that's the 40s, with six leaves.",
      "Because the leaves are in order, the mode is easy to see, since it's the leaf that repeats on one stem, and here three 8s on the 30s row make 38 a mode while three 2s on the 50s row make 52 a mode too, so this list has two modes, 38 and 52.",
      "The median is the middle score, so count in from both ends until you reach the middle of the leaves.",
      "",
      "[walk] Read the median off the jump-rope plot.",
      "[step] There are 16 leaves, which is an even number, so there will be two in the middle. || 16 scores, so the 8th and 9th are the middle pair",
      "[step] Count in from the top of the plot, one leaf at a time, until you reach the 8th and the 9th. || 29, 33, 34, 38, 38, 38, 41, [44], [45], 46, 47, 47, 52, 52, 52, 61",
      "[step] The median is halfway between the two middle scores. || Median = (44 + 45) ÷ 2 = 44.5",
      "",
      "The range comes straight off the plot too, since it's the greatest minus the least, and here that's 61 minus 29, which is 32."
    ]},

    { title: "Keep the Empty Stems",
      s: [
      "Sometimes a stem has no leaves at all, and the rule is that you write it anyway.",
      "After the first round, a second round of the contest had nine scores, and two kids tripped early and finished with a single-digit score.",
      "The scores were 41, 8, 23, 47, 22, 9, 25, 24 and 22, and the plot below has a stem of 0 for the two tripped kids and two stems with nothing on them.",
      "",
      "[walk] Build the plot of the nine second-round scores.",
      "[step] The least is 8 and the greatest is 47, so the stems run from 0 up to 4, including the 0 for single-digit scores. || Stems: 0, 1, 2, 3, 4",
      "[step] Drop each leaf onto its stem and then put the leaves in order, giving the repeated 22 two leaves. || 0 | 8 9\n1 |\n2 | 2 2 3 4 5\n3 |\n4 | 1 7",
      "[step] Leave the empty stems 1 and 3 on the plot, because they show a gap, and then add the key. || Key: 4 | 1 means 41",
      "",
      "Those two empty rows aren't wasted space, they're the picture, because they show that nobody scored in the teens or the thirties and that the two tripped kids sit apart from the rest.",
      "That makes 8 and 9 outliers, the same word you used for the lone X on a line plot, and a stem-and-leaf plot shows them just as clearly."
    ]}
  ],

  words: [
    ["Stem-and-leaf plot", "A way to show data by splitting each number into a stem, the tens digit, and a leaf, the ones digit.", 4],
    ["Stem", "The tens digit of a number in a stem-and-leaf plot. All the numbers with that tens digit share one row.", 4],
    ["Leaf", "The ones digit of a number in a stem-and-leaf plot. Every data value gets its own leaf.", 4],
    ["Key", "A note on the plot that shows how to read it, such as 4 | 1 means 41.", 18],
  ],

  findsAt: 38,
  questions: [
    { tag: "The Setup", q: "What does a stem-and-leaf plot show that a plain list of scores doesn't?",
      find: [20],
      hint: "Read Reading the Plot.",
      choices: [
        "The shape of the data, with every score still in it.",
        "Only the highest and lowest scores.",
        "The mean, without any adding.",
        "A guess at the next score."
      ], right: 0 },

    { tag: "Use It", q: "What are the stem and the leaf of the number 47?",
      find: [5],
      hint: "The tens digit is the stem and the ones digit is the leaf.",
      choices: ["Stem 7, leaf 4", "Stem 4, leaf 7", "Stem 47, leaf 0", "Stem 4, leaf 4"], right: 1 },

    { tag: "Use It", q: "A key says 2 | 5 means 25. What number does the row entry 7 | 1 mean?",
      find: [16, 18],
      hint: "The stem is the tens digit and the leaf is the ones digit.",
      choices: ["8", "17", "71", "7.1"], right: 2 },

    { tag: "Use It", q: "Which stems do you need for the data 12, 35, 48 and 27?",
      find: [9],
      hint: "Look at the tens digit of the least and of the greatest, and include everything in between.",
      choices: ["1, 2 and 4", "1, 2, 3 and 4", "12, 27, 35 and 48", "2, 3 and 4"], right: 1 },

    { tag: "Use It", q: "The data is 8, 21, 24, 35 and 52. Which stems have no leaves but still have to be written?",
      find: [35, 36],
      hint: "The stems run from 0 to 5.",
      choices: ["1 and 4", "None, empty stems are left out.", "0 and 5", "2 and 3"], right: 0 },

    { tag: "Careful", q: "The numbers 38, 38 and 38 all show up in a list. How many leaves go on the 3 stem for them?",
      find: [14],
      hint: "Every data value gets its own leaf.",
      choices: ["One", "Three", "Eight", "Two"], right: 1 },

    { tag: "Careful", q: "One row of a plot reads 4 | 7 2 9 3 when it is first built. How should that row end up?",
      find: [15, 19],
      hint: "The last step is to put the leaves in order.",
      choices: ["4 | 9 7 3 2", "4 | 2 3 7 9", "4 | 7 2 9 3", "4 | 2 3 7"], right: 1 },

    { tag: "Careful", q: "Why does a stem-and-leaf plot need a key?",
      find: [18],
      hint: "Read Build the Plot, just after the steps.",
      choices: [
        "So the reader knows how a stem and leaf make a number, such as 4 | 1 meaning 41.",
        "So the leaves stay in order.",
        "So the plot has a title.",
        "So you know how many stems there are."
      ], right: 0 }
  ],

  vocabQuestions: [
    { q: "What is a <i>stem-and-leaf plot</i>?",
      choices: ["A graph made with a line.", "A way to show data by splitting each number into a tens digit and a ones digit.", "A list of the middle numbers.", "A picture with Xs over a number line."], right: 1 },
    { q: "In a stem-and-leaf plot, what is the <i>stem</i> of 63?",
      choices: ["3", "6", "63", "9"], right: 1 },
    { q: "In a stem-and-leaf plot, what is the <i>leaf</i> of 63?",
      choices: ["3", "6", "63", "0"], right: 0 },
    { q: "What does the <i>key</i> on a stem-and-leaf plot tell you?",
      choices: ["How many data values there are.", "How to turn a stem and a leaf back into a number.", "Which value is the mode.", "Where the outlier is."], right: 1 }
  ],

  /* ⭐ YOUR TURN: a fresh set in the same world, every step typed and checked. */
  work: [
    { title: "Mia's Jump-Rope Team",
      ask: "Ten kids on Mia's team jumped these scores: 43, 28, 51, 36, 28, 44, 39, 28, 47, 52. Build the plot and read it, one step at a time.",
      steps: [
        { ask: "Which stems do you need? Type them with commas between.",
          answer: [2, 3, 4, 5],
          hint: "The least score is 28 and the greatest is 52. What are their tens digits?",
          why: "Right. Stems 2 through 5, and none of them is empty." },
        { ask: "How many leaves go on the 2 stem?", answer: 3,
          hint: "Which scores start with a 2? Remember that every repeat gets its own leaf.",
          why: "Three, because 28 shows up three times." },
        { ask: "Write the leaves of the 4 stem in order from least to greatest, with commas between.", answer: [3, 4, 7],
          hint: "The scores in the 40s are 43, 44 and 47. Take the ones digits.",
          why: "The row reads 4 | 3 4 7." },
        { ask: "What is the mode?", answer: 28,
          hint: "Which score appears more than once?",
          why: "28 is the only score with a repeat, and the three 8s on the first row show it." },
        { ask: "There are ten scores, so two are in the middle. What is the median?", answer: 41, calc: "(39+43)/2",
          hint: "In order, the 5th score is 39 and the 6th is 43. Find halfway between them.",
          why: "Halfway between 39 and 43 is 41, which isn't one of the scores." },
      ] },
  ],

  todo: { title: "What To Do Now", s: [
      "Sixteen jump-rope scores turned into one tidy picture, and the rest of this page is your turn to build one yourself.",
      "First work through Your Turn below the reading, typing each step.",
      "Then come {c} word cards, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "Last, open the Homework Sheet with the button at the bottom of the page, and either fill it out right on the screen or print it and do it on paper."
  ] }
};
