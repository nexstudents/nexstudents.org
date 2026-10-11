/* maths/misleading-statistics
   Grade 7 · maths · unit 3. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-10-11. Written on Sonnet from Glencoe Course 2
   pp116-119 (Lesson 3-8) via the week 8-9 packet (paraphrased notes). Shape copied
   from the pilot, maths/mean-median-and-mode. The video (TED-Ed, Lea Gaslowitz)
   was read for its pictures: a truck-reliability bar graph whose scale only runs
   from 95 to 100, then the same bars from 0. This lesson uses its own bakery
   numbers and its own pictures.

   ⚠️ ONE WORLD: a corner bakery (a bar graph of loaves sold, a help-wanted sign
   with an average pay, and a flyer with a poll). Our numbers, never the book's
   (Barnie's Music Barn, Mr. Eckert's salary table and the weight-loss program are
   left out). No scripture; Proverbs 11:1 is a candidate for Paul in the review queue. */
'use strict';
module.exports = {
  id: "maths/misleading-statistics",
  slug: "misleading-statistics",
  title: "Misleading Statistics",
  unit: "Math 7 &middot; U3-L8",
  seq: { unit: 3, unitTitle: "Statistics and Data Analysis", n: 8 },
  natural: "2026-10-11",

  /* ── /teach-plan, 2026-10-11. Glencoe Course 2 pp116-119. ── */
  plan: {
    objective: "Spot a misleading graph (a scale that doesn't start at zero) and a misleading average (an outlier pulling the mean), ask who was counted, and name the better number.",
    markers: [
      "BOOK (paraphrased), Objective box: recognize when statistics and graphs are misleading.",
      "BOOK (paraphrased), the opening idea: a table of the best results, with no starting weights or time frame, is an incomplete picture.",
      "BOOK (paraphrased), Example 1: two line graphs of the same sales; the one whose vertical scale doesn't start at zero is misleading.",
      "BOOK (paraphrased), Example 2: a job seeker is told the mean salary, but a few very high salaries (outliers) make the mean a poor description, and the median would be better.",
      "BOOK (paraphrased), Guided Practice: a poll of 50 students leaving the gym may not reflect all students.",
    ],
    method: "THREE QUESTIONS, EVERY TIME. (1) Where does the scale start? A scale that doesn't start at zero stretches small differences. (2) Is there an outlier? One very large or very small value pulls the mean, so compare the mean with the median. (3) Who was counted? A poll of only some people may not speak for everyone.",
    exampleOnly: [
      "A corner bakery: loaves sold per day, the pay on a help-wanted sign, and a flyer's poll. WORLD: one bakery, our numbers.",
      "Left out on purpose: Barnie's Music Barn, Mr. Eckert's salary table and the weight-loss program (three more worlds).",
    ],
    digitize: "Reading engine. Two Watch It Worked walkthroughs (the axis start, then a mean pulled by an outlier against the median), one Your Turn typed step by step, a video behind a button, and the homework sheet.",
    unclear: "",
  },

  sheet: { slug: "misleading-statistics-homework", subject: "maths",
    note: "Do it on screen or print it. Your score shows here once you check it." },

  video: { id: "E91bGT9BjYk", title: "How to spot a misleading graph", channel: "TED-Ed",
    why: "A different set of misleading graphs, including bars that start at the wrong place. It builds on the first check in this lesson and adds a few more tricks." },

  shelf: { grades: [7], subject: "Math",
    blurb: "A bakery sign says the average pay is $49,000, and nobody who works there makes that much. How numbers and graphs can tell the truth and still mislead.",
    contains: [
      "A bar graph whose scale starts in the wrong place",
      "A mean pulled up by one outlier, and the median that tells the truth",
      "Asking who was counted in a poll",
      "A Your Turn problem you work and type one step at a time",
    ] },
  eyebrow: ["Math 7", "U3-L8", "Statistics and Data Analysis"],
  dek: "A bakery's sign says the average pay is $49,000 a year, and every worker there earns less. Nobody lied, and the sign is still misleading.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "By the end of this lesson your student should be able to check where a graph's scale starts, compare the mean with the median when a data set has an outlier, ask who was counted, and say which number gives the fairest picture."
      ]},
      { h: "Where Students Get Stuck", p: [
        "🚨 Believing that a misleading statistic must be a lie. Every number in this lesson is true, and the picture it leaves in your head is the problem.",
        "Judging a bar graph by how tall the bars look and not by the numbers on the side.",
        "Thinking the mean is always the best average. With an outlier in the data, the median is usually fairer."
      ]},
      { h: "Teaching Suggestion", p: [
        "Have the student bring in one ad or one graph from a magazine or a website and run it through the three questions. Finding a real one is the surest way to make the habit stick."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Help Wanted", s: [
      "A corner bakery has a sign in its window that says Help Wanted, Average Pay $49,000 a Year.",
      "Eli's cousin Noah is looking for a job, and he stopped to read it, and then he asked a worker inside what the bakers there actually make.",
      "The worker laughed and said nobody who isn't the owner makes anywhere near that.",
      "The sign isn't a lie, and by the end of this lesson you'll know exactly how a number can be true and still send you the wrong way."
    ]},

    { title: "Check Where the Scale Starts",
      s: [
      "A {{misleading}} graph or statistic is one that leaves you with the wrong idea even though the numbers in it are real.",
      "The first thing to check on any graph is the {{axis}}, the number line down the side, and in particular where it starts.",
      "The bakery sold 96 loaves a day last year and 100 loaves a day this year, and the owner wants a bar graph that makes the shop look like it's booming.",
      "",
      "[walk] Check where the scale starts on the bakery's two graphs.",
      "[step] Look at the numbers down the side of the first graph, and notice that the scale starts at 94 and not at 0. || Axis: 94 to 100",
      "[step] Measure how far each bar rises above the starting line, since that's all the picture shows. || Last year: 96 - 94 = 2\nThis year: 100 - 94 = 6",
      "[step] Compare the two bar heights, and the new bar looks three times as tall as the old one. || 6 ÷ 2 = 3 times as tall",
      "[step] Compare the real numbers, and the shop sold only 4 more loaves a day, a gain of about 4 percent. || 100 - 96 = 4 loaves, and 4 ÷ 96 is about 0.04",
      "[step] Redraw the bars from zero, one block for every 4 loaves, and the picture looks completely different. || Zoomed in: Last year ██  This year ██████\nFrom zero: Last year ████████████████████████ 96\n                This year █████████████████████████ 100",
      "",
      "Both graphs are drawn from the same two numbers, and the only thing that changed is where the scale starts.",
      "A bar graph is especially easy to bend this way, because your eye compares the sizes of the bars and not the numbers beside them, so a bar graph should start at zero."
    ]},

    { title: "Check for an Outlier",
      s: [
      "Now back to the help-wanted sign, where the number on the window is a mean, and a mean can be pulled a long way by one number that doesn't belong with the rest.",
      "That kind of number is an {{outlier}}, a value far from all the others, and you met it on line plots and stem-and-leaf plots.",
      "The bakery has eight people on the payroll, seven who work there and the owner, and the pay is listed here in thousands of dollars a year.",
      "",
      "[walk] Find the mean and the median of the bakery's pay.",
      "[step] Put the eight pay amounts in order, with the owner's at the end. || 24, 26, 28, 28, 30, 32, 34, 190",
      "[step] Add them all together. || 24 + 26 + 28 + 28 + 30 + 32 + 34 + 190 = 392",
      "[step] Divide by how many people there are, which is 8. || Mean = 392 ÷ 8 = 49, so $49,000",
      "[step] Look at the data and notice that seven of the eight people make less than the mean, and the lowest of them is only $24,000. || 7 of 8 earn less than 49",
      "[step] Find the median by taking the number halfway between the two middle values. || Median = (28 + 30) ÷ 2 = 29, so $29,000",
      "",
      "The owner's 190 is the outlier, and a single value that large drags the mean from the high 20s all the way up to 49.",
      "The median barely noticed the owner, because it only cares which pay is in the middle, and that's why $29,000 describes a typical worker far better.",
      "The rule that comes out of it is simple: when there's an outlier, don't trust the mean alone, and look at the median too."
    ]},

    { title: "Ask Who Was Counted", s: [
      "The third check isn't about arithmetic at all, because a number is only as good as the people it came from.",
      "The bakery also hands out a flyer that says 9 out of 10 customers say our bread is the best in town.",
      "Then you find out that the owner's {{sample}} was ten people stopped as they walked out the door with a bag of bread in their hands.",
      "Those ten people had already chosen the bakery, so of course they said yes, and nobody asked the people who walked past, which is called leaving out part of the group.",
      "A fair poll asks a mix of people, tells you how many it asked and how it picked them, and says when it was done."
    ]},

    { title: "Three Questions to Ask Every Time", s: [
      "Whenever a graph or an average is trying to convince you of something, run it through the same three questions.",
      "First, where does the scale start, and if it doesn't start at zero, how much is the picture stretching a small difference.",
      "Second, is there an outlier, and if there is, what does the median say compared with the mean.",
      "Third, who was counted, how many were asked, and who was left out.",
      "Nobody has to be lying for a graph to mislead you, and asking those three questions takes about ten seconds."
    ]}
  ],

  words: [
    ["Misleading", "Giving the wrong idea even though the numbers are real, such as a graph with a stretched scale.", 4],
    ["Axis", "The number line along the side or bottom of a graph. Check where it starts.", 5],
    ["Outlier", "A value that sits far away from the rest of the data, such as the owner's pay.", 16],
    ["Sample", "The group of people who were asked or counted. A fair one is big and mixed.", 29],
  ],

  findsAt: 37,
  questions: [
    { tag: "The Setup", q: "The bakery sign says the average pay is $49,000, and no worker makes that much. How is that possible?",
      find: [24, 25],
      hint: "Read Check for an Outlier.",
      choices: [
        "The owner's very large pay pulls the mean up.",
        "The sign added the numbers wrong.",
        "The average is always bigger than every worker's pay.",
        "Workers lied about what they earn."
      ], right: 0 },

    { tag: "The First Check", q: "What should you look at first on a bar graph?",
      find: [5, 8],
      hint: "Read Check Where the Scale Starts.",
      choices: [
        "The color of the bars.",
        "Where the scale starts.",
        "The title of the graph.",
        "How many bars there are."
      ], right: 1 },

    { tag: "Use It", q: "A graph's scale starts at 70, and the bars show 80 and 100, so the bars rise 10 and 30 above the start. How many times taller does the second bar look?",
      find: [10],
      hint: "Compare the heights above the start, 30 and 10.",
      choices: ["3", "1.25", "20", "10"], right: 0 },

    { tag: "Use It", q: "What is the mean of 10, 12, 14 and 64?",
      find: [20, 21],
      hint: "Add all four, then divide by four.",
      choices: ["25", "13", "100", "12"], right: 0 },

    { tag: "Use It", q: "What is the median of 10, 12, 14 and 64?",
      find: [23],
      hint: "Find the number halfway between the two middle values.",
      choices: ["25", "13", "12", "14"], right: 1 },

    { tag: "Which One", q: "A set of data has one huge outlier. Which number gives a fairer picture of a typical value?",
      find: [25, 26],
      hint: "Read Check for an Outlier.",
      choices: ["The mean", "The median", "The biggest value", "The sum"], right: 1 },

    { tag: "Careful", q: "A flyer says 9 out of 10 customers love the bread, and the owner asked ten people leaving the bakery. What is wrong with that poll?",
      find: [29, 30],
      hint: "Read Ask Who Was Counted.",
      choices: [
        "It only asked people who had already chosen the bakery.",
        "Ten is too many people to ask.",
        "The poll was done in the morning.",
        "Nothing, it's a fair poll."
      ], right: 0 },

    { tag: "Careful", q: "Why can a graph mislead you even when every number in it is true?",
      find: [14],
      hint: "Read Check Where the Scale Starts.",
      choices: [
        "Because the colors are too bright.",
        "Because your eye compares the size of the picture and not the numbers beside it.",
        "Because true numbers can't be graphed.",
        "Because graphs always lie."
      ], right: 1 }
  ],

  vocabQuestions: [
    { q: "What does <i>misleading</i> mean?",
      choices: ["Giving the wrong idea, even when the numbers are real.", "Having no numbers at all.", "Being the largest value.", "Being the middle value."], right: 0 },
    { q: "What is the <i>axis</i> of a graph?",
      choices: ["The title.", "The number line along the side or bottom.", "The tallest bar.", "The key."], right: 1 },
    { q: "What is an <i>outlier</i>?",
      choices: ["The most common value.", "The middle value.", "A value far from the rest of the data.", "A graph that starts at zero."], right: 2 },
    { q: "What is a fair <i>sample</i> in a poll?",
      choices: ["A small group of friends.", "A big, mixed group of the people you want to know about.", "Only the people who agree with you.", "One person."], right: 1 }
  ],

  /* ⭐ YOUR TURN: a fresh set in the same world, every step typed and checked. */
  work: [
    { title: "The Bakery Across the Street",
      ask: "A sign at the bakery across the street says Average Pay $46,000. Its six workers earn (in thousands) 20, 22, 24, 24, 26 and 160. Check the sign, one step at a time.",
      steps: [
        { ask: "Add all six pay amounts. What's the total, in thousands?", answer: 276, calc: "20+22+24+24+26+160",
          hint: "Add them two at a time if that's easier.",
          why: "276, and one step left to get the mean." },
        { ask: "How many people did you add? That's what you divide by.", answer: 6,
          hint: "Count the pay amounts in the list.",
          why: "Six people, so the total gets split into six equal parts." },
        { ask: "What's the mean, in thousands?", answer: 46, calc: "276/6",
          hint: "Divide the total by the count.",
          why: "46, so the sign is true: the mean really is $46,000." },
        { ask: "What's the median, in thousands? There are two middle values.", answer: 24, calc: "(24+24)/2",
          hint: "In order the list is 20, 22, 24, 24, 26, 160. The middle pair is the 3rd and 4th.",
          why: "Halfway between 24 and 24 is 24, so a typical worker earns $24,000." },
        { ask: "How many of the six workers earn less than the mean?", answer: 5,
          hint: "Compare each pay with 46.",
          why: "Five of six, so the sign is true and misleading at the same time. The 160 is the outlier." },
      ] },
  ],

  todo: { title: "What To Do Now", s: [
      "A bakery sign, a bar graph and a flyer all turned out to be misleading in a different way, and the rest of this page is your turn to catch them.",
      "First work through Your Turn below the reading, typing each step, and watch the video if you want to see more graphs that bend the truth.",
      "Then come {c} word cards, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] }
};
