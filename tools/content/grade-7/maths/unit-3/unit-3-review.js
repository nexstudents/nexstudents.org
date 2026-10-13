/* maths/unit-3-review
   Grade 7 · maths · unit 3. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 A REVIEW IS A DIAGNOSTIC, NOT A TEST. Same rule as the Unit 1 and Unit 2
   reviews: every hint names the lesson to go back to, so a wrong answer sends
   him somewhere.

   🚨 REWRITTEN 2026-10-13 (Sonnet, to be checked by Opus) after Kolten said the lessons
   don't explain well. An audit graded the 2026-10-11 version B: eight lessons were
   compressed with little re-teaching. Kept: the Hawks, every walk, the block game and
   the Your Turn. ADDED: a toolbox walk that names the five jobs (set it up, show it,
   describe it, predict it, check it) and their tools in a drawn table, a drawn number
   line for the scale step, and a walk that matches the mean, median and mode to the
   question each one answers. No number or question changed, only where each
   question points.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-10-11. Written on Sonnet from the eight Unit 3
   lessons in this folder and Glencoe Course 2 Chapter 3 Study Guide and Review,
   pp120-122, via the week 8-9 packet (paraphrased notes). The video (Mr. J, mean,
   median, mode and range) was read for its order: sort, then each measure.

   ⚠️ ONE WORLD: a youth basketball team called the Hawks, over one season. Every
   number is our own and made up for practice; the book's review numbers are not
   copied. No scripture, which is Paul's call and sits in the review queue. The
   block game is the mean one, since the median games live in Lesson 3-5. */
'use strict';

/* draws a line plot as rows of X over a number line; counts[i] is the number of Xs over lo + i*step */
const plot = (counts, lo, step) => {
  const h = Math.max(...counts), rows = [];
  for (let r = h; r >= 1; r--) rows.push(counts.map((c) => (c >= r ? "X" : " ").padEnd(3)).join("").trimEnd());
  rows.push(counts.map((_, i) => String(lo + i * step).padEnd(3)).join("").trimEnd());
  return rows.join("\n");
};

/* draws a small table with a header row; rows is a list of equal-length lists */
const table = (rows) => {
  const n = rows[0].length, w = [];
  for (let i = 0; i < n; i++) w[i] = Math.max(...rows.map((r) => [...r[i]].length)) + 2;
  const line = (l, m, r) => l + w.map((x) => "─".repeat(x)).join(m) + r;
  const row = (r) => "│" + r.map((c, i) => " " + c + " ".repeat(w[i] - 1 - [...c].length)).join("│") + "│";
  return [line("┌", "┬", "┐"), row(rows[0]), line("├", "┼", "┤")]
    .concat(rows.slice(1).map(row), [line("└", "┴", "┘")]).join("\n");
};

/* the five jobs and the tools for each */
const TOOLS = [
  ["Job", "Tools"],
  ["Set it up", "range, scale, interval"],
  ["Show it", "line plot, stem-and-leaf plot"],
  ["Describe it", "mean, median, mode"],
  ["Predict it", "trend, change per step"],
  ["Check it", "outlier, scale start, who was counted"],
];
/* the three measures: what each one asks and how to get it */
const MEASURES = [
  ["Measure", "It answers", "How you get it"],
  ["Mean", "What if everyone got the same?", "Add them all, then divide by how many"],
  ["Median", "What's in the middle?", "Put them in order, then take the middle one"],
  ["Mode", "What shows up most?", "Find the value that repeats the most"],
];
/* a number line from 0 to 70 counting by 10: each label starts under its tick */
const LINE0_70 = "├─────┼─────┼─────┼─────┼─────┼─────┼─────┤\n0     10    20    30    40    50    60    70";

module.exports = {
  id: "maths/unit-3-review",
  slug: "unit-3-review",
  title: "Unit 3 Review: Statistics and Data Analysis",
  unit: "Math 7 &middot; U3-L9",
  seq: { unit: 3, unitTitle: "Statistics and Data Analysis", n: 9 },
  natural: "2026-10-13",

  /* ── /teach-plan, 2026-10-11. Glencoe Course 2, Chapter 3 Study Guide and
        Review pp120-122, and the eight built Unit 3 lessons. ── */
  plan: {
    objective: "Practice every Unit 3 skill on one set of data: choose a range, scale and interval, build a line plot and a stem-and-leaf plot, find the mean, median and mode, predict from a trend, and spot a misleading number.",
    markers: [
      "BOOK (paraphrased), Study Guide and Review, Communicating Mathematics: true or false statements about range, interval, outliers, the median and stem-and-leaf plots.",
      "BOOK (paraphrased), Objectives and Examples with Review Exercises, one block per lesson: range, scale and interval, line plots, mean, median and mode, stem-and-leaf plots.",
      "BOOK (paraphrased), predictions from graphs, and a mean exam score that is misleading because of one very low score.",
      "BOOK (paraphrased), Applications and Problem Solving: find the mode, median and mean of a list of wages and read a stem-and-leaf plot.",
    ],
    method: "ONE TEAM, EIGHT SKILLS. Set the data up (range, scale, interval), show it (line plot or stem-and-leaf plot), describe it (mean, median, mode), predict from it (extend the trend, then ask if it can last), and check it (scale start, outlier, who was counted).",
    exampleOnly: [
      "WORLD: the Hawks, a youth basketball team. Every number is made up for practice, and nothing in the lesson depends on the team.",
      "The book's own review numbers are not copied, since the packet only sampled that page.",
    ],
    digitize: "Reading engine plus one mean block game. Eight short Watch It Worked walkthroughs (a toolbox table, a number line, a measures table and the five tool walks), one Your Turn that mixes three skills, and a video behind a button. Every hint names the lesson to reopen.",
    unclear: "",
  },

  /* The practice half, on screen or on paper (tools/math-homework.js). subject is the FOLDER, "maths". */
  sheet: { slug: "unit-3-review-homework", subject: "maths",
    note: "Do it on screen or print it. Your score shows here once you check it." },


  shelf: { grades: [7], subject: "Math",
    blurb: "One basketball team, one season of numbers, and every Unit 3 tool: scales, line plots, stem-and-leaf plots, mean, median, mode, predictions and spotting a misleading average.",
    contains: [
      "Five worked examples, one for each big skill",
      "A block game for the mean",
      "A Your Turn problem that mixes three skills",
      "A review with a hint that names the lesson to reopen",
    ] },
  eyebrow: ["Math 7", "U3-L9", "Statistics and Data Analysis"],
  dek: "A basketball season is a pile of numbers. Everything you learned in this unit is a way to make that pile tell the truth.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Bring the eight Unit 3 lessons together, check which tools hold, and find the ones that need a second read before Unit 4 starts.",
        "This is a diagnostic, not a test. Every question's hint names the lesson to reopen, so a wrong answer is a pointer and not a grade."
      ]},
      { h: "How to Use It", p: [
        "Read the review once, work the block game, then do the questions. For every miss, open the lesson the hint names and read just the section it points to, then come back.",
        "If the student misses two questions that come from the same skill, that skill is the one to re-teach."
      ]},
      { h: "Where Students Get Stuck", p: [
        "🚨 Dividing by the wrong count when finding a change per step, and not putting the data in order before finding the median.",
        "Trusting an average without asking whether one very large or very small number is pulling it."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "A Season of Numbers", s: [
      "The Hawks, a youth basketball team, keep a notebook where the coach writes down everything from points scored to fouls committed in each game.",
      "By the end of the season that notebook is full of numbers, and nobody on the team could tell you what any of them mean.",
      "The tools from this unit are how you turn a full notebook into a few clear answers about what the team is really like.",
      "",
      "[walk] Fill the toolbox, one job at a time.",
      "[step] First you set the data up, which means working out how long the number line has to be. || " + table(TOOLS.slice(0, 2)),
      "[step] Then you show it, which means drawing the numbers as a picture. || " + table(TOOLS.slice(0, 3)),
      "[step] Then you describe it, which means boiling the whole pile down to a single number. || " + table(TOOLS.slice(0, 4)),
      "[step] Then you predict from it, which means following the pattern to a number you don't have yet. || " + table(TOOLS.slice(0, 5)),
      "[step] Last you check it, which means asking whether the numbers are telling the truth. || " + table(TOOLS),
      "",
      "Those five jobs come in that order, and the rest of this review takes them one at a time."
    ]},

    { title: "Read It and Set It Up", s: [
      "The first tools are about getting ready, and they come from reading a graph, building a table, and then working out the range, the scale and the interval.",
      "The {{range}} is the greatest value minus the least, and the scale is the stretch of the number line you need, while the {{interval}} is the amount you count by.",
      "Together they tell you how long the number line has to be before you draw a single mark.",
      "",
      "[walk] Set up a number line for the Hawks' points in nine games: 42, 35, 51, 28, 44, 35, 60, 38 and 35.",
      "[step] Find the least and the greatest points scored. || Least = 28, greatest = 60",
      "[step] Subtract to get the range. || Range = 60 - 28 = 32",
      "[step] Pick a scale that holds both ends and an interval that gives a handful of marks, which here is 0 to 70 counting by 10. || " + LINE0_70
    ]},

    { title: "Show It: Line Plots",
      s: [
      "A line plot is the quickest picture when the numbers are small and repeat a lot, so it's perfect for fouls, which run from 2 to 11 for the Hawks.",
      "Those are small numbers that repeat, and that is just what a line plot is built to show.",
      "",
      "[walk] Make a line plot of the Hawks' fouls in eight games: 3, 5, 4, 3, 2, 3, 4 and 11.",
      "[step] Put the fouls in order and find the range. || 2, 3, 3, 3, 4, 4, 5, 11\nRange = 11 - 2 = 9",
      "[step] Draw a number line from 2 to 11 counting by 1, keeping the empty numbers, and put one X over each value. || " + plot([1,3,2,1,0,0,0,0,0,1], 2, 1),
      "[step] Read it, because the tallest stack is the mode, the bunch from 2 to 5 is the cluster, and the lone 11 is the outlier. || Mode = 3, cluster = 2 to 5, outlier = 11"
    ]},

    { title: "Show It: Stem-and-Leaf Plots",
      s: [
      "When the numbers have two digits, a stem-and-leaf plot is the better picture, because it shows every score and sorts them at the same time.",
      "It does the same job as a line plot, except that it keeps both digits of every score.",
      "",
      "[walk] Make a stem-and-leaf plot of the nine points totals.",
      "[step] The least is 28 and the greatest is 60, so the stems run from 2 to 6. || Stems: 2, 3, 4, 5, 6",
      "[step] Drop each score's ones digit onto its tens digit, keep every repeat, and put each row in order. || 2 | 8\n3 | 5 5 5 8\n4 | 2 4\n5 | 1\n6 | 0",
      "[step] Add the key, and count the leaves to check, since there should be nine of them. || Key: 4 | 2 means 42\n1 + 4 + 2 + 1 + 1 = 9 leaves"
    ]},

    { title: "Describe It: Mean, Median and Mode",
      blocks: { kind: "mean", title: "Your Turn With Blocks: Even Them Out", ask: "Four games: the Hawks made 2, 6, 4 and 8 baskets. Move blocks until all four stacks are level.", stacks: [2, 6, 4, 8] },
      s: [
      "Now describe the whole season with three single numbers, and remember that each one answers a different question.",
      "The {{mean}} evens everything out, the {{median}} is the middle once the data is in order, and the mode is the value that shows up most.",
      "",
      "[walk] Match each measure to the question it answers.",
      "[step] The mean answers what would happen if every game had the same score, and you get it by adding and dividing. || " + table(MEASURES.slice(0, 2)),
      "[step] The median answers what's in the middle, and you get it by putting the scores in order and picking the middle one. || " + table(MEASURES.slice(0, 3)),
      "[step] The mode answers what shows up most, and you get it by finding the score that repeats. || " + table(MEASURES),
      "",
      "[walk] Find the mean, median and mode of the Hawks' nine points totals.",
      "[step] The mode is the score that shows up most, which is easy to see in the sorted list. || 28, 35, 35, 35, 38, 42, 44, 51, 60\nMode = 35",
      "[step] The median is the middle of nine scores, the fifth one. || Median = 38",
      "[step] The mean is the total divided by the number of games. || (28 + 35 + 35 + 35 + 38 + 42 + 44 + 51 + 60) ÷ 9 = 368 ÷ 9 = about 40.9"
    ]},

    { title: "Predict It",
      s: [
      "To predict, you follow the {{trend}} by finding the change per step and then adding it again and again, and the number you divide by is the number of steps between the points and not the number of points.",
      "A trend is only a guide, so you also ask whether it can really keep going.",
      "",
      "[walk] Predict the Hawks' free throws made out of 20, which were 8, 10, 12 and 14 in the first four weeks.",
      "[step] Find the change per week, with 3 steps between week 1 and week 4. || (14 - 8) ÷ 3 = 2 more per week",
      "[step] Extend the trend to week 6, which is two steps past week 4. || 14 + 2 × 2 = 18",
      "[step] Check whether the trend can really go on, because 20 is the most anyone can make out of 20. || Week 9 would be 14 + 5 × 2 = 24, which is impossible"
    ]},

    { title: "Check It: Is It Misleading?",
      s: [
      "The last tool is a set of questions you ask about any number you're handed: where does the scale start, is there an outlier, and who was counted.",
      "Nobody has to be lying for a number to mislead you, so these questions are worth asking every time.",
      "",
      "[walk] A poster says the Hawks' players average almost 11 minutes a game, and the minutes are 4, 6, 6, 8, 9 and 32.",
      "[step] Add the minutes and divide by the number of players. || (4 + 6 + 6 + 8 + 9 + 32) ÷ 6 = 65 ÷ 6 = about 10.8",
      "[step] Look for an {{outlier}}, and the star's 32 minutes is far from the rest. || Outlier = 32",
      "[step] Find the median, which is halfway between the two middle values. || Median = (6 + 8) ÷ 2 = 7",
      "[step] Decide which number is fair, because five of the six players play less than the mean says. || The median, 7 minutes, describes a typical player better"
    ]},

    { title: "One Habit", s: [
      "Look back at the notebook, and you can see the tools were never separate.",
      "The range, scale and interval set the data up, the line plot and stem-and-leaf plot show it, and the mean, median and mode describe it.",
      "Extending the trend predicts from it, and the three questions at the end check that the numbers aren't tricking anybody.",
      "The questions below ask for each tool, and each hint tells you which lesson to reopen if one slips."
    ]}
  ],

  words: [
    ["Range", "The greatest value minus the least value in a set of data.", 11],
    ["Interval", "The amount you count by on a number line.", 11],
    ["Outlier", "A value far away from the rest of the data.", 49],
    ["Mean", "The sum of the values divided by how many values there are.", 30],
    ["Median", "The middle value when the data is in order.", 30],
    ["Trend", "The direction a set of data is heading.", 39],
  ],

  findsAt: 56,
  questions: [
    { tag: "Set It Up", q: "The Hawks scored between 28 and 60 points in a game. What is the range?",
      find: [11,14],
      hint: "Greatest minus least. Go back to Range and Scales.",
      choices: ["88", "32", "60", "28"], right: 1 },

    { tag: "Set It Up", q: "Which number line fits data that runs from 28 to 60?",
      find: [16],
      hint: "It has to reach both ends and count by an even step. Go back to Range and Scales.",
      choices: ["0 to 30, counting by 5", "0 to 70, counting by 10", "30 to 50, counting by 10", "0 to 100, counting by 1"], right: 1 },

    { tag: "Show It", q: "In the fouls 2, 3, 3, 3, 4, 4, 5, 11, which value is the outlier?",
      find: [22],
      hint: "Which one sits far from the rest? Go back to Line Plots.",
      choices: ["11", "3", "5", "2"], right: 0 },

    { tag: "Show It", q: "A row of a plot reads 4 | 1 3 3 8, and the key says 4 | 1 means 41. How many scores are in the 40s?",
      find: [27],
      hint: "Every leaf is one score. Go back to Stem-and-Leaf Plots.",
      choices: ["3", "5", "4", "41"], right: 2 },

    { tag: "Describe It", q: "What is the mean of 20, 24, 30, 26 and 25?",
      find: [38],
      hint: "Add them, then divide by how many there are. Go back to Mean, Median, and Mode.",
      choices: ["25", "20", "125", "26"], right: 0 },

    { tag: "Describe It", q: "What is the median of 6, 9, 3 and 12?",
      find: [37],
      hint: "Put them in order first, then find the number halfway between the two middle values. Go back to Mean, Median, and Mode.",
      choices: ["7.5", "6", "9", "7"], right: 0 },

    { tag: "Describe It", q: "What is the mode of 7, 7, 9, 9, 9, 4?",
      find: [36],
      hint: "The mode is the number that repeats most, not the count. Go back to Mean, Median, and Mode.",
      choices: ["3", "7", "9", "4"], right: 2 },

    { tag: "Predict It", q: "The Hawks made 8, 10, 12 and 14 free throws in weeks 1 to 4. About how many in week 6?",
      find: [42,43],
      hint: "Find the change per week, then add it twice to week 4. Go back to Making Predictions.",
      choices: ["18", "16", "20", "17"], right: 0 },

    { tag: "Check It", q: "A poster says the team's average pay is high, but one coach earns far more than everyone else. Which number is fairer?",
      find: [49,51],
      hint: "Look for the outlier. Go back to Misleading Statistics.",
      choices: ["The mean", "The median", "The sum", "The largest value"], right: 1 },

    { tag: "Check It", q: "A bar graph's scale starts at 50 and the bars show 55 and 65. How many times taller does the second bar look?",
      find: [45],
      hint: "Compare the heights above 50. Go back to Misleading Statistics.",
      choices: ["3", "1.18", "10", "5"], right: 0 }
  ],

  vocabQuestions: [
    { q: "What is the <i>range</i> of a set of data?",
      choices: ["The middle value.", "The greatest value minus the least value.", "The value that shows up most.", "The sum of the values."], right: 1 },
    { q: "What is an <i>interval</i> on a number line?",
      choices: ["The amount you count by.", "The greatest value.", "The number of Xs.", "The key."], right: 0 },
    { q: "What is an <i>outlier</i>?",
      choices: ["The mean.", "The tallest stack.", "A value far away from the rest.", "The first value."], right: 2 },
    { q: "How do you find the <i>mean</i>?",
      choices: ["Pick the middle value.", "Add the values and divide by how many there are.", "Pick the value that shows up most.", "Subtract the least from the greatest."], right: 1 },
    { q: "What is the <i>median</i>?",
      choices: ["The sum of the values.", "The value that shows up most.", "The middle value when the data is in order.", "The least value."], right: 2 },
    { q: "What is a <i>trend</i>?",
      choices: ["A very high value.", "The direction a set of data is heading.", "A graph that starts at zero.", "A group of values close together."], right: 1 }
  ],

  /* ⭐ YOUR TURN: a fresh set in the same world, mixing three skills. */
  work: [
    { title: "The Hawks' Rivals",
      ask: "The team across town scored 24, 31, 38, 24, 52, 31 and 24 points in seven games. Set it up, read it, and describe it, one step at a time.",
      steps: [
        { ask: "What's the range?", answer: 28, calc: "52-24",
          hint: "Greatest minus least. Go back to Range and Scales.",
          why: "52 minus 24 is 28." },
        { ask: "A stem-and-leaf plot of these scores has stems 2, 3 and 4. How many leaves are on the 2 stem?", answer: 3,
          hint: "Count the scores that start with a 2, including repeats. Go back to Stem-and-Leaf Plots.",
          why: "Three, because 24 shows up three times." },
        { ask: "What's the mode?", answer: 24,
          hint: "Which score repeats the most?",
          why: "24 shows up three times." },
        { ask: "What's the median? Put the seven scores in order first.", answer: 31, calc: "31",
          hint: "In order: 24, 24, 24, 31, 31, 38, 52. With seven scores, the middle one is the 4th. Go back to Mean, Median, and Mode.",
          why: "The 4th score is 31." },
        { ask: "What's the mean?", answer: 32, calc: "224/7",
          hint: "The total is 224 and there are 7 games.",
          why: "32, a little above the median of 31, because the 52 pulls it up a bit." },
      ] },
  ],

  todo: { title: "What To Do Now", s: [
      "Every tool in this unit belongs to one step of the habit, and the questions come in the same order: set it up, show it, describe it, predict it and check it.",
      "{c} word cards sit at the top of the page, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "Every hint names a lesson, so a wrong answer isn't a dead end; it's an address.",
      "When you miss one, open the lesson it names, read the section it points to, and then come back and try again.",
      "If two misses land in the same skill, tell whoever is teaching you, because that skill is the one to go over before Unit 4.",
      "Last, open the Homework Sheet with the button at the bottom of the page, and either fill it out right on the screen or print it and do it on paper."
  ] }
};
