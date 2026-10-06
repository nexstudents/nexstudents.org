/* maths/use-a-graph
   Grade 7 · maths · unit 3. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-10-05. Written on Sonnet from Glencoe Course 2
   pp88-92 (the Chapter 3 opener and Lesson 3-1, Problem-Solving Strategy: Use a
   Graph), via the week 6-7 packet (paraphrased notes) and the teach-plan.
   /natural pass run and stamped.

   ⚠️ NEW UNIT: Unit 3, "Statistics and Data Analysis". The chapter project is
   Languages of the World, so this lesson keeps that world.

   🚨 EVERY NUMBER HERE IS MADE UP FOR PRACTICE, and the lesson says so out loud
   in the reading. The language names are real and the counts are not, so a
   student must never be left thinking they are real statistics. The book's own
   examples (CDs against cassettes, degrees earned in 1969-70 and 1989-90) are
   not copied.

   ⚠️ THE GRAPHS ARE DESCRIBED IN WORDS AND [ex] TABLES OF VALUES. The site
   doesn't draw a graph yet, and a drawn one would help. That is a build item
   for Paul, not something this lesson fakes.

   ⚠️ NO SCRIPTURE. Paul's call, in the review queue. */
'use strict';
module.exports = {
  id: "maths/use-a-graph",
  slug: "use-a-graph",
  title: "Use a Graph",
  unit: "Math 7 &middot; U3-L1",
  seq: { unit: 3, unitTitle: "Statistics and Data Analysis", n: 1 },
  natural: "2026-10-05",

  /* ── /teach-plan, 2026-10-05. Glencoe Course 2 pp88-92. ── */
  plan: {
    objective: "Solve problems by reading bar graphs, line graphs and circle graphs, including double bar and double line graphs.",
    markers: [
      "BOOK (paraphrased), Chapter 3 opener, Spotlight on Languages of the World: a bar graph and a line graph of the principal languages, a table of the most populous countries, and a chapter project.",
      "BOOK (paraphrased), Objective box: solve problems by interpreting bar graphs, line graphs and circle graphs.",
      "BOOK (paraphrased): statistics is collecting, organizing and summarizing numerical facts, and graphs show trends and let you predict.",
      "BOOK (paraphrased), opening: a double line graph of two kinds of recordings, and the question of when one passed the other, solved by extending the lines and the scales.",
      "BOOK (paraphrased), Example: a double bar graph for two years, where the key says what each color means, read to find how many more of one thing there were.",
      "BOOK (paraphrased), Checking for Understanding: why a double line graph uses two colors, and reading a circle graph of a budget.",
    ],
    method: "READ THE TITLE, THE AXES AND THE KEY FIRST. Find the values, answer the question, then Examine by checking the scale. A trend on a line graph lets you predict by extending the line. Circle graph: the whole circle is the whole amount, and each slice is a part of it.",
    exampleOnly: [
      "The languages of the world and every count in it. WORLD: the chapter's own project, with made-up numbers labeled as such. The title and objective don't name the world.",
      "Not copied: the book's recordings graph and its degrees-earned graph.",
      "⚠️ The graphs are described in words and in [ex] tables of values, because the site doesn't draw a graph yet.",
    ],
    digitize: "Reading engine. Each graph is a labeled [ex] table of values. A drawn graph would help, and the site doesn't have that visual yet.",
    unclear: "",
  },

  /* The practice half, on paper (tools/math-homework.js). subject is the FOLDER, "maths". */
  sheet: { slug: "use-a-graph-homework", subject: "maths",
    note: "Print it and work every problem on paper. No multiple choice this time." },

  shelf: { grades: [7], subject: "Math",
    blurb: "Bar graphs, double bar graphs, line graphs and circle graphs, and what to check before you trust any of them. The numbers are made up for practice.",
    contains: [
      "Reading the title, the axes and the key first",
      "A double bar graph, and what each color means",
      "A line graph and how to predict from a trend",
      "A circle graph of a budget",
      "Checking the scale before you answer",
    ] },
  eyebrow: ["Math 7", "U3-L1", "Statistics and Data Analysis"],
  dek: "A graph can tell you in one look what a table takes a minute to say, as long as you read it in the right order.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "By the end of this lesson your student should be able to read a bar graph, a double bar graph, a line graph and a circle graph, answer questions from them, use a trend to predict, and check the scale before answering."
      ]},
      { h: "Where Students Get Stuck", p: [
        "🚨 Reading a value off the wrong scale. If each gridline stands for 100 and the student reads it as 1, every answer is off by a lot, so the scale is the first thing to check.",
        "Forgetting the key on a double graph. Two colors mean two different things, and a student who skips the key will compare a bar with itself."
      ]},
      { h: "Teaching Suggestion", p: [
        "Every number in this lesson is made up for practice. Find a real graph in a newspaper or an almanac and write two questions about it together, because that is the skill the lesson is for.",
        "The site can't draw the graphs yet, so each one is given as a table of values. Sketching one from the table on paper is a good way to see what the words describe."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Which Language Wins?", s: [
      "A class has a project on the languages of the world, and the first thing everyone wants to know is which language has the most speakers.",
      "A table of counts can answer that, but you'd have to read every number and compare them in your head, and a graph does the comparing for you in one look.",
      "That's the power of {{statistics}}, the collecting, organizing and summarizing of numerical facts, because a graph shows a trend that a column of numbers hides.",
      "Every number in this lesson is made up for practice, so please don't quote them as real counts, but the skill of reading the graph is completely real.",
      "So what do you read first when a graph lands on your desk?"
    ]},

    { title: "Title, Axes, Key", s: [
      "Before you look at a single bar, read the title, which says what the graph is about, and then the labels on the two sides, which say what the bars and the numbers stand for.",
      "Say a bar graph is titled Speakers of Five Languages, in Millions, and the numbers along the side count by 100.",
      "",
      "[ex] Mandarin 920 · Spanish 480 · English 380 · Hindi 340 · Arabic 310",
      "",
      "The tallest bar belongs to Mandarin at 920, so that's your answer to which language has the most speakers, and the shortest belongs to Arabic at 310.",
      "To find how many more speakers Spanish has than Arabic, subtract the two values, and 480 minus 310 is 170 million.",
      "You wouldn't have found that by guessing at the bar heights, so read the actual values and then do the arithmetic."
    ]},

    { title: "Two Colors, Two Stories", s: [
      "A double bar graph puts two bars side by side for every item, and that's where the {{key}} matters, because the key tells you what each color means.",
      "Say a school offers Spanish and French and counts the students enrolled in each in two different years, with a blue bar for 1990 and an orange bar for 2020.",
      "",
      "[ex] Spanish: 120 students in 1990, 200 in 2020",
      "[ex] French: 90 students in 1990, 60 in 2020",
      "",
      "Without the key you couldn't tell which bar is which year, and a reader who skips it might compare Spanish in 1990 to Spanish in 2020 and think he was comparing two languages.",
      "Read the pairs and you can see that Spanish grew by 80 students over the thirty years while French shrank by 30, a story you could only tell by using both colors."
    ]},

    { title: "A Trend You Can Follow", s: [
      "A line graph is the best choice when something changes over time, because the line shows the {{trend}}, the direction the numbers are heading.",
      "Say a double line graph tracks learners of two languages over fifteen years, Language X in blue and Language Y in orange, and the numbers count thousands of learners.",
      "",
      "[ex] 2000: X is 40, Y is 120",
      "[ex] 2005: X is 60, Y is 110",
      "[ex] 2010: X is 80, Y is 100",
      "[ex] 2015: X is 100, Y is 90",
      "",
      "Y starts far ahead, but its line slopes down while X's slopes up, and by 2015 X has passed it, so the two lines must have crossed somewhere between 2010 and 2015.",
      "When did it happen, and what would you expect in 2020?",
      "If you extend both lines at the same pace, X gains about 20 every five years and Y loses about 10, so by 2020 X would be near 120 and Y near 80, and that's a prediction, not a fact."
    ]},

    { title: "A Pie With a Budget", s: [
      "A circle graph shows how a whole is split into parts, and the whole circle is the whole amount, so every slice is a share of it.",
      "Say a club has $400 to spend on a language fair, and its circle graph says half goes to printing, a quarter to food, 15 percent to decorations and 10 percent to prizes.",
      "",
      "[ex] printing 50% · food 25% · decorations 15% · prizes 10%",
      "",
      "Printing gets half of $400, which is $200, and food gets a quarter, which is $100, so printing gets $100 more than food.",
      "Check that the slices add up to 100 percent before you trust a circle graph, because a pie that doesn't add up has been drawn wrong."
    ]},

    { title: "Examine the Scale", s: [
      "You can read every part of a graph correctly and still get the answer wrong if you misread the scale, so the last step of the plan, Examine, starts there.",
      "If each gridline stands for 100 and you read one as 1, your 170 million turns into 1.7 million, and the answer looks tidy and is completely wrong.",
      "Ask whether the answer is about the size the bars suggested, whether the key was used, and whether you subtracted the right two values.",
      "So the question that began the lesson has an answer: read the title, the axes and the key first, then the values, and then check the scale before you say a word."
    ]}
  ],

  words: [
    ["Statistics", "Collecting, organizing and summarizing numerical facts so you can answer questions and make predictions.", 2],
    ["Key", "The part of a graph that tells you what each color or symbol stands for.", 11],
    ["Trend", "The direction the numbers are heading over time, which a line graph shows.", 17],
    ["Double bar graph", "A graph with two bars side by side for every item, so two sets of data can be compared.", 11]
  ],

  findsAt: 35,
  questions: [
    { tag: "First Look", q: "When you get a new graph, what should you read first?",
      find: [5],
      hint: "Read Title, Axes, Key.",
      choices: [
        "The title, the labels on the sides and the key.",
        "The tallest bar only.",
        "The last number on the scale.",
        "Nothing, since you can see the answer."
      ], right: 0 },

    { tag: "Reading Bars", q: "On the five-language bar graph, which language has the fewest speakers?",
      find: [8],
      hint: "Look for the shortest bar.",
      choices: ["Mandarin", "Hindi", "English", "Arabic"], right: 3 },

    { tag: "Subtracting", q: "How many more speakers does Spanish have than Arabic on that graph?",
      find: [9],
      hint: "Read the two values, then subtract.",
      choices: ["170 million", "790 million", "480 million", "17 million"], right: 0 },

    { tag: "The Key", q: "Why does a double bar graph need a key?",
      find: [15],
      hint: "Read Two Colors, Two Stories.",
      choices: [
        "To make the graph look finished.",
        "To say what each color or bar stands for.",
        "To show the highest value.",
        "To tell you the scale."
      ], right: 1 },

    { tag: "Double Bars", q: "How many students were enrolled in Spanish in 2020?",
      find: [13],
      hint: "Look at the second number for Spanish.",
      choices: ["120", "80", "200", "90"], right: 2 },

    { tag: "Trend", q: "What does a trend show?",
      find: [17],
      hint: "Read A Trend You Can Follow.",
      choices: [
        "The direction the numbers are heading over time.",
        "The exact title of the graph.",
        "The number of colors used.",
        "The biggest bar."
      ], right: 0 },

    { tag: "Crossing", q: "Between which years did Language X pass Language Y?",
      find: [23],
      hint: "In 2010 Y was ahead. In 2015 X was ahead.",
      choices: [
        "Between 2000 and 2005",
        "Between 2005 and 2010",
        "Between 2010 and 2015",
        "After 2015"
      ], right: 2 },

    { tag: "Predicting", q: "If both lines keep the same pace, about where would Language X be in 2020?",
      find: [25],
      hint: "X was at 100 in 2015 and gains about 20 every five years.",
      choices: ["About 80", "About 100", "About 140", "About 120"], right: 3 },

    { tag: "Circle Graph", q: "A club has $400, and half goes to printing. How much is that?",
      find: [29],
      hint: "Read A Pie With a Budget.",
      choices: ["$100", "$200", "$50", "$400"], right: 1 },

    { tag: "Examine", q: "Each gridline stands for 100, and you read it as 1. What happens to the answer?",
      find: [32],
      hint: "Read Examine the Scale.",
      choices: [
        "Nothing, it comes out the same.",
        "It gets larger by a little.",
        "It's far too small, even though it may look tidy.",
        "It becomes a negative number."
      ], right: 2 }
  ],

  vocabQuestions: [
    { q: "What is <i>statistics</i>?",
      choices: [
        "A kind of graph.",
        "Collecting, organizing and summarizing numerical facts.",
        "The tallest bar on a graph.",
        "A way to round numbers."
      ], right: 1 },
    { q: "What does the <i>key</i> on a graph tell you?",
      choices: [
        "What each color or symbol stands for.",
        "The answer to the problem.",
        "The size of the paper.",
        "How the graph was drawn."
      ], right: 0 },
    { q: "What is a <i>trend</i>?",
      choices: [
        "A sudden mistake in the data.",
        "A kind of circle graph.",
        "The direction the numbers are heading over time.",
        "A label on the bottom of a graph."
      ], right: 2 },
    { q: "What is a <i>double bar graph</i>?",
      choices: [
        "A graph with two titles.",
        "A graph that has been drawn twice.",
        "A graph with bars that are twice as tall.",
        "A graph with two bars side by side for every item."
      ], right: 3 }
  ],

  todo: { title: "What To Do Now", s: [
      "A graph is only as good as the person reading it, and these questions give you the practice, in the same order the lesson took the graphs.",
      "{c} word cards sit at the top of the page, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "Every number was made up, so don't copy any of them into a report as a real count.",
      "On each question, read the title, the axes and the key first, and check the scale before you answer.",
      "If the line graph question trips you up, read A Trend You Can Follow again.",
      "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] }
};
