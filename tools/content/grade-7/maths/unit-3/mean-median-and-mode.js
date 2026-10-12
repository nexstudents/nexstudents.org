/* maths/mean-median-and-mode
   Grade 7 · maths · unit 3. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-10-11. Written on Opus from Glencoe Course 2
   pp104-108 (Lesson 3-5, Lab 3-5B) via the week 8-9 packet (paraphrased notes).

   ⭐ THE PILOT FOR "SHOW THE WORK", 2026-10-11. Paul: "the lessons need to be good
   enough he is actually learning what he is taking in. in the past we built actual
   explainer videos how to do the work." So this lesson carries the three new parts:
     [walk]/[step]  Watch It Worked, the work appearing one line at a time
     work.steps     Your Turn, a fresh set he works and types step by step
     video          Watch It Explained, Math Antics, checked by oEmbed 2026-10-11
   Paul has not seen it yet. Do not copy it into other lessons until he says so.

   ⚠️ ONE WORLD: one student's quiz scores. Our numbers, never the book's (Joe's
   60, 93, 99 ... and the sleep survey are left out). The weighted mean from a
   frequency table (the book's Example 2) is left for the homework sheet's real data. */
'use strict';
module.exports = {
  id: "maths/mean-median-and-mode",
  slug: "mean-median-and-mode",
  title: "Mean, Median, and Mode",
  unit: "Math 7 &middot; U3-L5",
  seq: { unit: 3, unitTitle: "Statistics and Data Analysis", n: 5 },
  natural: "2026-10-11",

  /* ── /teach-plan, 2026-10-11. Glencoe Course 2 pp104-108. ── */
  plan: {
    objective: "Find the mean, the median and the mode of a set of data, including an even-sized set and a set with no mode, and decide which one best describes the data.",
    markers: [
      "BOOK (paraphrased), Objective box: find the mean, median and mode of a set of data.",
      "BOOK, the mean is \"what people usually mean by average\" (short quote).",
      "BOOK (paraphrased), Mental Math Hint: with an even number of values the median is halfway between the two middle numbers.",
      "BOOK (paraphrased), Example 1: a student brags with the median while his teacher grades with the mean.",
      "BOOK (paraphrased), Checking for Understanding: explain how to find the median for an odd and an even count; show sets with one mode, two modes and no mode.",
      "BOOK (paraphrased), Critical Thinking: build five-number sets where the three measures agree, and where the mean is bigger than the median.",
    ],
    method: "ORDER THE DATA FIRST. Mode = the value that appears most (there can be none, or two). Median = the middle value; with an even count, the number halfway between the two middle values. Mean = add every value, divide by how many there are. Then pick the measure that answers the question being asked.",
    exampleOnly: [
      "Eli and his quiz scores (seven math quizzes, eight science quizzes, six spelling tests). WORLD: one student's grades, which is the book's own Example 1 world, with our numbers.",
      "Left out on purpose: the TV commercial timings and the sleep survey (two more worlds).",
    ],
    digitize: "Reading engine. Two Watch It Worked walkthroughs (odd count; even count with no mode), one Your Turn set typed step by step, a Math Antics video behind a button, questions that make him compute on new numbers, and the paper homework sheet.",
    unclear: "",
  },

  sheet: { slug: "mean-median-and-mode-homework", subject: "maths",
    note: "Do it on screen or print it. Your score shows here once you check it." },

  video: { id: "B1HEzNTGeZ4", title: "Mean, Median and Mode", channel: "Math Antics",
    why: "The same three measures explained by a different teacher, with different numbers. Worth watching once before Your Turn, or again if the median with two middle numbers didn't click." },

  shelf: { grades: [7], subject: "Math",
    blurb: "Eli says his average is about 90 and his report card says 84, and both are telling the truth. Mean, median and mode, worked one line at a time.",
    contains: [
      "Two worked examples that show every step as it's read to you",
      "The median when there's no single middle number",
      "Sets with no mode, and sets with two",
      "A Your Turn problem you work and type one step at a time",
      "Choosing the measure that answers the question",
    ] },
  eyebrow: ["Math 7", "U3-L5", "Statistics and Data Analysis"],
  dek: "Eli says his average is about 90. His report card says 84. Nobody made a mistake, and by the end of this lesson you'll know how that's possible.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "By the end of this lesson your student should be able to find the mean, median and mode of a data set, handle an even-sized set and a set with no mode, and say which measure best describes the data."
      ]},
      { h: "Where Students Get Stuck", p: [
        "🚨 Finding the median without putting the numbers in order first. The middle of the list as written is not the median.",
        "With an even count, picking one of the two middle numbers instead of the number halfway between them.",
        "Thinking a set must have a mode. No mode, and two modes, are both normal answers."
      ]},
      { h: "Teaching Suggestion", p: [
        "Have the student say out loud which measure he'd quote if he wanted his grades to sound good, and which one his teacher would use. The book's own example makes that point, and it sticks."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "One Number for a Pile of Scores", s: [
      "Eli has taken seven math quizzes this term, and his scores were 72, 91, 88, 90, 64, 90 and 93.",
      "When his dad asks how math is going, Eli can't very well read all seven numbers out loud, so he needs one number that sums up the whole pile.",
      "He says about 90, and a week later the report card comes home saying 84.",
      "Neither of them got it wrong, and by the end of this lesson you'll see how two honest people can look at the same seven quizzes and land on two different numbers.",
      "There are three ways to pick that one number, called the mean, the median and the mode, and you're going to take them one at a time, starting with the one you already know."
    ]},

    { title: "The Mean: Even It All Out",
      blocks: { kind: "mean", title: "Your Turn With Blocks: Even Them Out", ask: "Four stacks: 1, 5, 3 and 7 blocks. Move blocks until all four are level.", stacks: [1, 5, 3, 7] },
      s: [
      "The {{mean}} is the one most people have in mind when they say {{average}}, and in fact mean and average are two names for exactly the same thing.",
      "Here's the picture to hold in your head: three short quizzes where Eli scored 2, 6 and 7 points, with each score drawn as a stack of blocks.",
      "The stacks are all different heights, but if you moved blocks off the tall stacks onto the short one until all three were level, every stack would end up 5 blocks high.",
      "That level height is the mean, the score Eli would have gotten every single time if his quizzes had all come out the same.",
      "",
      "[walk] Even it out: Eli's three short quizzes, 2, 6 and 7 points.",
      "[step] Draw each score as a stack of blocks, and you can see right away how uneven they are. || 2   ■■\n6   ■■■■■■\n7   ■■■■■■■",
      "[step] Pile every block into one big stack by adding the three scores together. || 2 + 6 + 7 = 15 blocks in all",
      "[step] Now split that big stack into three equal stacks, one for each quiz, by dividing by three. || 15 ÷ 3 = 5\n5   ■■■■■\n5   ■■■■■\n5   ■■■■■",
      "",
      "That's the whole method for the mean: add up all the numbers, then divide by how many numbers you added.",
      "Adding is the easy half, and the divide is where people slip, because the number you divide by is always the count of numbers you started with, never one you pick because it splits the total nicely.",
      "If five quiz scores add up to 25, you split 25 into five equal parts, one for each score, and each part is 5.",
      "If six scores add up to 25 instead, you still split it six ways, and the mean comes out to about 4.17, which is fine, because a mean doesn't have to be a whole number.",
      "It works the same way on Eli's seven real quiz scores, even though nobody would want to stack that many blocks.",
      "",
      "[walk] The mean of Eli's seven quizzes: 72, 91, 88, 90, 64, 90, 93.",
      "[step] Add all seven scores together. || 72 + 91 + 88 + 90 + 64 + 90 + 93 = 588",
      "[step] Count how many scores you added, because that count is what you divide by. || 7 scores, so split 588 into 7 equal parts",
      "[step] Divide the total by the count. || Mean = 588 ÷ 7 = 84",
      "[step] Check that it makes sense, because the mean always lands somewhere between the lowest score and the highest one. || 64 < 84 < 93, so 84 is reasonable"
    ]},

    { title: "The Median: The One in the Middle",
      blocks: { kind: "median", title: "Your Turn With Blocks: Find the Middle", ask: "Five stacks, all mixed up: 5, 2, 7, 3 and 6 blocks.", stacks: [5, 2, 7, 3, 6] },
      s: [
      "The {{median}} is the middle number, the one with exactly as many numbers on one side of it as on the other.",
      "If that word is hard to keep straight, think of the median strip on a highway, the strip of grass that runs right down the middle of the road.",
      "A middle only means something once everything is lined up, the way a class lines up by height, so the first job is always to put the numbers in order from least to greatest.",
      "",
      "[walk] The median of Eli's seven quizzes: 72, 91, 88, 90, 64, 90, 93.",
      "[step] Put the scores in order from least to greatest. || 64, 72, 88, 90, 90, 91, 93",
      "[step] Cross off the lowest and the highest together, then the next pair in, and keep going until one score is left standing. || Cross off 64 and 93, then 72 and 91, then 88 and 90",
      "[step] The score left in the middle is the median, with three scores below it and three above it. || Median = 90",
      "",
      "His median of 90 is six points higher than his mean of 84, which is a clue to the report card mystery, and you'll come back to it at the end."
    ]},

    { title: "What If There Are Two in the Middle?",
      blocks: { kind: "median", title: "Your Turn With Blocks: Two in the Middle", ask: "Four stacks this time: 4, 8, 2 and 6 blocks.", stacks: [4, 8, 2, 6] },
      s: [
      "Seven scores leave one in the middle, but cross off pairs from both ends of an even list and you run out with two numbers still standing.",
      "When that happens, the median is the number halfway between those two, and you find it by taking the mean of just those two numbers.",
      "",
      "[walk] The median of Eli's eight science quizzes: 78, 85, 92, 70, 88, 95, 81, 99.",
      "[step] Put them in order first, every time. || 70, 78, 81, 85, 88, 92, 95, 99",
      "[step] Cross off pairs from both ends until two scores are left in the middle. || The two middle scores: 85 and 88",
      "[step] Add those two and divide by two to find the number halfway between them. || Median = (85 + 88) ÷ 2 = 86.5",
      "",
      "His median here is 86.5, which isn't one of his scores at all, and that's fine, because it still splits his eight scores into four below it and four above it."
    ]},

    { title: "The Mode: The One You See Most",
      blocks: { kind: "mode", title: "Your Turn With Blocks: The One You See Most", ask: "Seven stacks: 3, 5, 2, 5, 4, 5 and 2 blocks.", stacks: [3, 5, 2, 5, 4, 5, 2] },
      s: [
      "The {{mode}} is the easiest of the three, since it's simply the number that shows up most often, and mode even starts with the same two letters as most.",
      "",
      "[walk] The mode of Eli's seven quizzes: 72, 91, 88, 90, 64, 90, 93.",
      "[step] Look for any score that appears more than once, which is easiest to see in the ordered list. || 64, 72, 88, 90, 90, 91, 93",
      "[step] The score 90 shows up twice and every other score shows up once, so 90 is the mode. || Mode = 90",
      "",
      "Be careful not to answer with how many times it showed up, because the mode is the number that repeats, 90, and not the two times it appeared.",
      "His science scores never repeat at all, so that set has no mode, and no mode is a perfectly good answer.",
      "A set can also have two modes, like 7, 8, 8, 9, 9, where 8 and 9 each show up twice and tie."
    ]},

    { title: "So Who Was Right?", s: [
      "Back to the report card, where Eli's median and mode were both 90 and his mean was 84.",
      "Eli quoted the 90, which is honest, because his typical quiz really was a 90.",
      "His teacher used the mean, because every quiz counts toward a grade, including the 64 he'd rather forget.",
      "That one low score is what dragged the mean down, because evening out the stacks means the 64 has to borrow blocks from every other quiz, while the median only cares which score sits in the middle.",
      "So before you pick one, ask what question you're answering, because the measure you choose is part of the answer."
    ]}
  ],

  words: [
    ["Mean", "The sum of all the values divided by how many values there are. What most people mean by average.", 5],
    ["Median", "The middle value when the data is in order. With an even count, the number halfway between the two middle values.", 23],
    ["Mode", "The value that appears most often. A set can have no mode, one, or more than one.", 38],
    ["Average", "A single number that describes what's typical of a set of data. Most often it means the mean.", 5],
  ],

  findsAt: 50,
  questions: [
    { tag: "The Setup", q: "Eli says his average is about 90 and his report card says 84. What's going on?",
      find: [3, 4],
      hint: "Read One Number for a Pile of Scores.",
      choices: [
        "His teacher added the scores wrong.",
        "They used two different ways of finding a typical score.",
        "Eli forgot one of his quizzes.",
        "The report card only counted his science quizzes."
      ], right: 1 },

    { tag: "The First Step", q: "What do you have to do before you can find the median?",
      find: [25],
      hint: "Read The Median: The One in the Middle.",
      choices: [
        "Add up all the numbers.",
        "Find the mode.",
        "Put the numbers in order from least to greatest.",
        "Divide by how many numbers there are."
      ], right: 2 },

    { tag: "Use It", q: "What is the median of 9, 2, 7, 4, 5?",
      find: [27, 29],
      hint: "Put them in order first: 2, 4, 5, 7, 9.",
      choices: ["7", "5", "4", "5.4"], right: 1 },

    { tag: "Use It", q: "What is the mean of 6, 10, 8, 4?",
      find: [13, 14],
      hint: "Add all four, then divide by four.",
      choices: ["7", "28", "8", "6"], right: 0 },

    { tag: "Use It", q: "What is the median of 3, 8, 10, 15?",
      find: [32, 36],
      hint: "There are two middle numbers, 8 and 10. What's halfway between them?",
      choices: ["8", "10", "9", "9.5"], right: 2 },

    { tag: "No Mode", q: "What is the mode of 4, 7, 9, 12?",
      find: [43],
      hint: "Does any number show up more than once?",
      choices: ["4", "There is no mode.", "8", "12"], right: 1 },

    { tag: "Two Modes", q: "Which of these sets has two modes?",
      find: [44],
      hint: "Look for two different numbers that each appear twice.",
      choices: ["2, 3, 3, 4, 5", "1, 2, 3, 4, 5", "5, 5, 5, 6, 7", "2, 2, 4, 6, 6"], right: 3 },

    { tag: "Careful", q: "What is the mode of 4, 6, 6, 6, 9?",
      find: [42],
      hint: "The mode is the number that repeats, not how many times it repeats.",
      choices: ["3", "6", "9", "There is no mode."], right: 1 },

    { tag: "Which One", q: "Why did Eli's one score of 64 pull the mean down but leave the median at 90?",
      find: [48],
      hint: "Read So Who Was Right?",
      choices: [
        "The mean uses every number, and the median only cares which score is in the middle.",
        "The median leaves out the lowest score on purpose.",
        "The mean only uses the highest and the lowest scores.",
        "The 64 was a mistake and shouldn't have been counted."
      ], right: 0 }
  ],

  vocabQuestions: [
    { q: "How do you find the <i>mean</i>?",
      choices: ["Pick the middle number.", "Pick the number that appears most.", "Add every value and divide by how many there are.", "Subtract the least from the greatest."], right: 2 },
    { q: "What is the <i>median</i>?",
      choices: ["The middle value once the data is in order.", "The biggest value.", "The value that appears most.", "The sum of the values."], right: 0 },
    { q: "What is the <i>mode</i>?",
      choices: ["The middle value.", "The average.", "The difference between the greatest and least.", "The value that appears most often."], right: 3 },
    { q: "When most people say <i>average</i>, which measure do they usually mean?",
      choices: ["The mode.", "The mean.", "The median.", "The range."], right: 1 }
  ],

  /* ⭐ YOUR TURN: a fresh set in the same world, every step typed and checked. */
  work: [
    { title: "Eli's Spelling Tests",
      ask: "Eli's last six spelling tests: 80, 100, 70, 95, 80, 85. Find the mode, the median and the mean, one step at a time.",
      steps: [
        { ask: "Put the six scores in order from least to greatest. Type them with commas between.",
          answer: [70, 80, 80, 85, 95, 100],
          hint: "Start with the smallest score and keep going up. Both 80s go in.",
          why: "Right. Everything else is easier now that they're in a line." },
        { ask: "What's the mode?", answer: 80,
          hint: "Which score shows up more than once?",
          why: "80 is the only score that appears twice." },
        { ask: "Six scores means two in the middle. What is the median?", answer: 82.5, calc: "(80+85)/2",
          hint: "The two middle scores are the 3rd and the 4th. Add them and divide by 2.",
          why: "Halfway between 80 and 85 is 82.5, and like Eli's science median it isn't one of his scores." },
        { ask: "Add all six scores. What's the total?", answer: 510, calc: "70+80+80+85+95+100",
          hint: "Add them two at a time if that's easier.",
          why: "510. One more step." },
        { ask: "How many scores did you add? That count is what you divide by.", answer: 6,
          hint: "Count the scores in the list.",
          why: "Six scores, so the total gets split into six equal parts." },
        { ask: "Now divide the total by that count. What's the mean?", answer: 85, calc: "510/6",
          hint: "There are six scores.",
          why: "85. So his median is 82.5 and his mean is 85, and this time the 100 pulled the mean up." },
      ] },
  ],

  todo: { title: "What To Do Now", s: [
      "Eli's report card question turned out to be three different measures, and the rest of this page is your turn to find all three yourself.",
      "First work through Your Turn below the reading, typing each step, and watch the video if the median with two middle numbers still feels shaky.",
      "Then come {c} word cards, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "Last, open the Homework Sheet with the button at the bottom of the page, and either fill it out right on the screen or print it and do it on paper."
  ] }
};
