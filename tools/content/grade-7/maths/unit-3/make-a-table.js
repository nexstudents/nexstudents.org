/* maths/make-a-table
   Grade 7 · maths · unit 3. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-10-05. Written on Sonnet from Glencoe Course 2
   pp93-97 (Lesson 3-2, Problem-Solving Strategy: Make a Table, and the 3-2B data
   base lab as a follow-up only), via the week 6-7 packet (paraphrased notes) and
   the teach-plan. /natural pass run and stamped.

   ⚠️ THE WORLD IS THE BOOK'S OWN: a class survey about the year the telephone
   was patented, where the right answer is 1876. The question and the true year
   are the book's. THE TWENTY ANSWERS ARE MADE UP FOR PRACTICE, and the reading
   says so. The book's amusement-park vote (Rosita's class) is left out as a
   second world.

   ⚠️ Added from the record, worth a glance: that Alexander Graham Bell was the
   one granted the patent in March 1876. The packet gives only the year.

   ⚠️ The 3-2B data base lab (data base, file, field) is not covered. The packet
   calls it a follow-up, not required.

   🚨 REWRITTEN 2026-10-13 (Sonnet, checked by Opus) after Kolten said the lessons
   don't explain anything. The frequency table was given as six [ex] lines; it is now
   DRAWN with box-drawing characters in a Watch It Worked that builds it in three
   steps (the answers down the side, the tally marks, the frequencies), with a
   slash across every group of four for the fifth mark. A Your Turn (a 12-student
   favorite-fruit survey, five typed counts) is added. Nothing else was cut or
   added; the 1876 and Bell facts are unchanged.

   ⚠️ NO SCRIPTURE. Paul's call, in the review queue. */
'use strict';
module.exports = {
  id: "maths/make-a-table",
  slug: "make-a-table",
  title: "Make a Table",
  unit: "Math 7 &middot; U3-L2",
  seq: { unit: 3, unitTitle: "Statistics and Data Analysis", n: 2 },
  natural: "2026-10-13",

  /* ── /teach-plan, 2026-10-05. Glencoe Course 2 pp93-95. ── */
  plan: {
    objective: "Organize survey answers in a frequency table (tally and frequency columns) and use it to answer questions.",
    markers: [
      "BOOK (paraphrased), Objective box: solve problems by organizing data in a table.",
      "BOOK (paraphrased), opening: a class, Team 7-A, surveys classmates on the year the telephone was patented, and the tallied answers run from 1825 to 1898, with 1876 the right one.",
      "BOOK (paraphrased), method: Explore what the responses are, Plan by organizing them in a table, Solve, then Examine.",
      "BOOK (paraphrased), term: a frequency table lists each possible answer with a tally and a frequency.",
      "BOOK (paraphrased), Checking for Understanding: another class votes for its favorite amusement park, and the votes are organized in a frequency table.",
    ],
    method: "LIST EACH ANSWER ONCE, TALLY EVERY RESPONSE, COUNT THE TALLIES INTO A FREQUENCY, THEN READ THE TABLE. Examine by checking that the frequencies add up to the number of responses.",
    exampleOnly: [
      "The telephone survey and its twenty made-up answers. WORLD: a class survey, the book's own opening. The title and objective don't name it.",
      "Left out: the amusement-park vote and the data base lab.",
    ],
    digitize: "Reading engine. The frequency table is drawn with box-drawing characters in a Watch It Worked that builds it in three steps, and a Your Turn has typed counts.",
    unclear: "",
  },

  /* The practice half, on paper (tools/math-homework.js). subject is the FOLDER, "maths". */
  sheet: { slug: "make-a-table-homework", subject: "maths",
    note: "Print it and work every problem on paper. No multiple choice this time." },

  shelf: { grades: [7], subject: "Math",
    blurb: "Twenty answers to one survey question arrive in no order at all. How to tally them, count them and read them in a frequency table.",
    contains: [
      "Listing each possible answer once",
      "Tally marks and frequencies",
      "Reading a frequency table to answer questions",
      "Checking that the table adds up",
    ] },
  eyebrow: ["Math 7", "U3-L2", "Statistics and Data Analysis"],
  dek: "A pile of survey answers tells you nothing until somebody puts it in order, and a table is the quickest way to do that.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "By the end of this lesson your student should be able to turn a list of survey answers into a frequency table with tallies and frequencies, answer questions from it, and check that the frequencies add up to the number of responses."
      ]},
      { h: "Where Students Get Stuck", p: [
        "🚨 Skipping an answer, or tallying the same response twice. The check is that the frequency column adds up to the number of people surveyed, and if it doesn't, something was missed.",
        "Listing the same answer on two rows. Each possible answer gets exactly one row, no matter how many people gave it."
      ]},
      { h: "Teaching Suggestion", p: [
        "Do a real survey at home with five or six people, with a question that has a few possible answers, and make the frequency table on paper. The twenty answers in the lesson are made up for practice.",
        "Alexander Graham Bell was granted the patent for the telephone in March 1876. The book gives only the year, and Bell's name is added from the record."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Twenty Answers, No Order", s: [
      "A class of twenty students is asked one question: what year was the telephone patented?",
      "The answers come back on a messy list, in the order the students happened to call them out, and nobody can tell at a glance which answer was the most popular.",
      "The right answer is 1876, when Alexander Graham Bell was granted the patent, but the other answers are scattered all over the nineteenth century, and the twenty answers in this lesson are made up for practice.",
      "How do you make sense of a pile of answers when the pile has no order?"
    ]},

    { title: "The Raw List", s: [
      "Here's what the class said, in the order they said it.",
      "",
      "[ex] 1876, 1850, 1898, 1876, 1862, 1876, 1825, 1850, 1876, 1898",
      "[ex] 1862, 1876, 1850, 1876, 1854, 1876, 1862, 1898, 1876, 1850",
      "",
      "You could read that list five times and still not be sure how many students said 1850, because the answers keep coming back in different places.",
      "That's the problem a table solves, since it gathers every copy of an answer into one spot."
    ]},

    { title: "Make the Table", s: [
      "The plan from Unit 1 helps here: Explore asks what the responses are, and they're years, six different ones, from 1825 to 1898.",
      "Plan says to organize them, so list each possible answer exactly once down the left side of a table, and make room for a tally and a frequency beside each one.",
      "Then go through the raw list one response at a time and make one tally mark for each, with every fifth mark drawn across the four before it so the groups are easy to count.",
      "Last, count each row's tally marks and write that number in the frequency column, and you have a {{frequency table}}.",
      "",
      "[walk] Build the frequency table for the twenty answers, one step at a time.",
      "[step] List each possible answer once, down the left side, with empty tally and frequency columns. || ┌────────┬───────────┬───────────┐\n│ Answer │ Tally     │ Frequency │\n├────────┼───────────┼───────────┤\n│ 1825   │           │           │\n│ 1850   │           │           │\n│ 1854   │           │           │\n│ 1862   │           │           │\n│ 1876   │           │           │\n│ 1898   │           │           │\n└────────┴───────────┴───────────┘",
      "[step] Go through the raw list one response at a time and make one tally mark for each, with a slash across every group of four. || ┌────────┬───────────┬───────────┐\n│ Answer │ Tally     │ Frequency │\n├────────┼───────────┼───────────┤\n│ 1825   │ |         │           │\n│ 1850   │ ||||      │           │\n│ 1854   │ |         │           │\n│ 1862   │ |||       │           │\n│ 1876   │ ||||/ ||| │           │\n│ 1898   │ |||       │           │\n└────────┴───────────┴───────────┘",
      "[step] Count the marks in each row and write that number in the frequency column. || ┌────────┬───────────┬───────────┐\n│ Answer │ Tally     │ Frequency │\n├────────┼───────────┼───────────┤\n│ 1825   │ |         │ 1         │\n│ 1850   │ ||||      │ 4         │\n│ 1854   │ |         │ 1         │\n│ 1862   │ |||       │ 3         │\n│ 1876   │ ||||/ ||| │ 8         │\n│ 1898   │ |||       │ 3         │\n└────────┴───────────┴───────────┘",
      "",
      "The slash across a group of four makes a group of five, so 1876 has one group of five plus three more, which is 8."
    ]},

    { title: "Read the Table", s: [
      "Now the questions that the raw list wouldn't answer are quick.",
      "The most popular answer is 1876, with a frequency of 8, which means eight of the twenty students got the year right, and the least popular answers are 1825 and 1854, with one student each.",
      "The students who guessed a year before 1860, meaning 1825, 1850 or 1854, number 1 plus 4 plus 1, which is 6.",
      "Four students said 1850 and only one said 1825, so three more students chose 1850.",
      "A table doesn't create any new information, but it lets you see the information you already had."
    ]},

    { title: "Examine: Does It Add Up?", s: [
      "The last step of the plan is Examine, and a frequency table has a built-in check that takes ten seconds.",
      "Add the frequencies, 1 plus 4 plus 1 plus 3 plus 8 plus 3, and the total should be the number of students who answered.",
      "",
      "[ex] 1 + 4 + 1 + 3 + 8 + 3 = 20",
      "",
      "Twenty students answered and the frequencies add up to twenty, so nobody got lost and nobody got counted twice.",
      "If you'd gotten 19 or 21, you'd know before anyone else did that a tally mark went missing or got made twice, and the question that started the lesson has an answer: you make a table, one answer to a row, and let the tally marks count for you."
    ]}
  ],

  words: [
    ["Frequency table", "A table that lists each possible answer once, with a tally and a frequency beside it.", 12],
    ["Tally", "A mark, usually a short bar, made for each response, with every fifth one drawn across four.", 11],
    ["Frequency", "The number of times an answer was given, found by counting its tally marks.", 16],
    ["Survey", "A question asked of a group of people so you can collect their answers.", 0]
  ],

  findsAt: 28,
  questions: [
    { tag: "The Setup", q: "What was the one question the class of twenty was asked?",
      find: [0],
      hint: "Read Twenty Answers, No Order.",
      choices: [
        "What year was the telephone patented?",
        "Which language do you speak?",
        "How tall are you?",
        "What is your favorite park?"
      ], right: 0 },

    { tag: "Why a Table", q: "What problem does a table solve for the raw list of answers?",
      find: [8],
      hint: "Read The Raw List.",
      choices: [
        "It makes the answers more correct.",
        "It gathers every copy of an answer into one spot.",
        "It removes the wrong answers.",
        "It changes the order of the years."
      ], right: 1 },

    { tag: "The Rows", q: "How many times should each possible answer appear down the left side of the table?",
      find: [10],
      hint: "Read Make the Table.",
      choices: ["As many times as it was said", "Twice", "Exactly once", "Never"], right: 2 },

    { tag: "Tallies", q: "What do you do with every fifth tally mark?",
      find: [11, 17],
      hint: "It keeps the groups easy to count.",
      choices: [
        "Skip it.",
        "Draw it across the four before it.",
        "Write it in red.",
        "Start a new table."
      ], right: 1 },

    { tag: "Frequency", q: "How many students said 1850?",
      find: [16],
      hint: "Look at the frequency beside 1850.",
      choices: ["1", "3", "8", "4"], right: 3 },

    { tag: "The Winner", q: "Which answer was the most popular, and how many students gave it?",
      find: [19],
      hint: "Find the biggest frequency.",
      choices: [
        "1898, with 3 students",
        "1876, with 8 students",
        "1850, with 4 students",
        "1862, with 3 students"
      ], right: 1 },

    { tag: "Reading", q: "How many students gave a year before 1860 (1825, 1850 or 1854)?",
      find: [20],
      hint: "Add the frequencies of those three rows.",
      choices: ["3", "6", "4", "8"], right: 1 },

    { tag: "Examine", q: "The frequencies in the table add up to 20. What does that tell you?",
      find: [26],
      hint: "Read Examine: Does It Add Up?",
      choices: [
        "Every student was counted exactly once.",
        "Everybody guessed the right year.",
        "There were 20 different answers.",
        "The survey should be done again."
      ], right: 0 },

    { tag: "Examine", q: "Suppose the frequencies had added up to 21 for a class of 20. What most likely happened?",
      find: [27],
      hint: "The total should equal the number of students.",
      choices: [
        "A student answered twice on purpose.",
        "A tally mark was made twice, or a response was counted twice.",
        "The class had 21 students.",
        "Nothing, since a table can be off by one."
      ], right: 1 }
  ],

  vocabQuestions: [
    { q: "What is a <i>frequency table</i>?",
      choices: [
        "A list of the wrong answers.",
        "A table that lists each answer once, with a tally and a frequency.",
        "A table of the most common words.",
        "A graph with two colors."
      ], right: 1 },
    { q: "What is a <i>tally</i>?",
      choices: [
        "A mark made for each response, with every fifth drawn across four.",
        "The final answer to a survey.",
        "A kind of graph.",
        "The title of a table."
      ], right: 0 },
    { q: "What is a <i>frequency</i>?",
      choices: [
        "The number of rows in a table.",
        "How loud the answers were.",
        "The number of times an answer was given.",
        "The biggest number in the table."
      ], right: 2 },
    { q: "What is a <i>survey</i>?",
      choices: [
        "A kind of map.",
        "A test with a right answer.",
        "A frequency count.",
        "A question asked of a group so you can collect their answers."
      ], right: 3 }
  ],

  work: [
    { title: "Favorite Fruit",
      ask: "Twelve students were asked their favorite fruit, and they said: apple, banana, apple, grape, banana, apple, apple, grape, banana, apple, apple, grape. Make a tally table in your head or on paper, then answer.",
      steps: [
        { ask: "How many students chose apple?", answer: 6,
          hint: "Count every apple in the list.",
          why: "Apple was said 6 times, so its frequency is 6." },
        { ask: "How many students chose banana?", answer: 3,
          hint: "Count every banana in the list.",
          why: "Banana was said 3 times." },
        { ask: "How many students chose grape?", answer: 3,
          hint: "Count every grape in the list.",
          why: "Grape was said 3 times." },
        { ask: "Add the three frequencies. What's the total?", answer: 12, calc: "6+3+3",
          hint: "Add the frequency column, then compare it with the number of students.",
          why: "6 + 3 + 3 = 12, which matches the 12 students, so the table checks out." },
        { ask: "How many more students chose apple than grape?", answer: 3, calc: "6-3",
          hint: "Subtract the two frequencies.",
          why: "6 − 3 = 3 more students." },
      ] },
  ],

  todo: { title: "What To Do Now", s: [
      "Twenty answers turned into a table you could read in a few seconds, and now you get to do the same thing yourself.",
      "First work through Your Turn below the reading, typing each answer.",
      "{c} word cards sit at the top of the page, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "The twenty answers were made up for practice, but the table method is the real thing.",
      "If you get a total that doesn't match, find the tally mark that was missed or doubled.",
      "If you want more practice, ask five people at home a question with a few possible answers and make a frequency table of what they say.",
      "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] }
};
