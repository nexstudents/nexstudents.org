/* maths/use-a-graph
   Grade 7 · maths · unit 3. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 REWRITTEN 2026-10-13 (Sonnet, checked by Opus) after Kolten said the lessons
   don't explain anything. The 2026-10-05 version described four kinds of graph
   in words and [ex] tables and never DREW one, which is the whole point of the
   lesson. This one draws each graph as text in a Watch It Worked walkthrough:
   a bar graph (blocks, one block = 100 million), a double bar graph (two block
   styles and a key), a line graph with two lines on a grid (the crossing and the
   prediction), and a circle graph laid flat as a 20-block strip (one block =
   5 percent), because a round pie can't be drawn in text. Then a Your Turn with
   a bar graph and a line graph to read. Word cards: Statistics, Key, Trend,
   Double Bar Graph, plus Scale (new). The first three graphs' numbers were
   changed from the first draft (the old five-language counts are the example on
   the homework sheet), so nothing here repeats a sheet problem.

   🚨 EVERY NUMBER HERE IS MADE UP FOR PRACTICE, and the lesson says so out loud
   in the reading. The language names are real and the counts are not, so a
   student must never be left thinking they are real statistics.

   ⚠️ NO ADDED FACTS. NO SCRIPTURE. Paul's call, in the review queue. */
'use strict';
module.exports = {
  id: "maths/use-a-graph",
  slug: "use-a-graph",
  title: "Use a Graph",
  unit: "Math 7 &middot; U3-L1",
  seq: { unit: 3, unitTitle: "Statistics and Data Analysis", n: 1 },
  natural: "2026-10-13",

  /* ── /teach-plan, rewritten 2026-10-13. Glencoe Course 2 pp88-92. ── */
  plan: {
    objective: "Solve problems by reading bar graphs, double bar graphs, line graphs and circle graphs.",
    markers: [
      "BOOK (paraphrased), Chapter 3 opener, Spotlight on Languages of the World: a bar graph and a line graph of the principal languages, a table of the most populous countries, and a chapter project.",
      "BOOK (paraphrased), Objective box: solve problems by interpreting bar graphs, line graphs and circle graphs.",
      "BOOK (paraphrased): statistics is collecting, organizing and summarizing numerical facts, and graphs show trends and let you predict.",
      "BOOK (paraphrased), opening: a double line graph of two kinds of recordings, and the question of when one passed the other, solved by extending the lines and the scales.",
      "BOOK (paraphrased), Example: a double bar graph for two years, where the key says what each color means, read to find how many more of one thing there were.",
      "BOOK (paraphrased), Checking for Understanding: why a double line graph uses two colors, and reading a circle graph of a budget.",
    ],
    method: "READ THE TITLE, THE SCALE AND THE KEY FIRST. Find the values, answer the question, then check the scale. A trend on a line graph lets you predict by extending the line. Circle graph: the whole circle is the whole amount, and each slice is a part of it.",
    exampleOnly: [
      "The languages of the world, a school's language classes and a club's budget, each with made-up counts labeled as such. WORLD: the chapter's own project.",
      "Not copied: the book's recordings graph and its degrees-earned graph.",
    ],
    digitize: "Reading engine. Each graph is drawn as text in a Watch It Worked: blocks for bars (one block stands for a stated amount), a plotted grid for the line graph, and a 20-block strip for the circle graph. Your Turn has typed answers.",
    unclear: "",
  },

  /* The practice half, on paper (tools/math-homework.js). subject is the FOLDER, "maths". */
  sheet: { slug: "use-a-graph-homework", subject: "maths",
    note: "Print it and work every problem on paper. No multiple choice this time." },

  shelf: { grades: [7], subject: "Math",
    blurb: "Bar graphs, double bar graphs, line graphs and circle graphs, each one drawn out, and what to check before you trust any of them. The numbers are made up for practice.",
    contains: [
      "Reading the title, the scale and the key first",
      "A bar graph and a double bar graph, drawn with blocks",
      "A line graph with two lines, and how to predict from a trend",
      "A circle graph of a budget, laid flat as a strip",
      "Your Turn: read a bar graph and a line graph yourself",
    ] },
  eyebrow: ["Math 7", "U3-L1", "Statistics and Data Analysis"],
  dek: "A graph can tell you in one look what a table takes a minute to say, as long as you read it in the right order.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Your student reads a bar graph, a double bar graph, a line graph and a circle graph, answers questions from them, uses a trend to predict, and checks the scale before answering."
      ]},
      { h: "Where Students Get Stuck", p: [
        "🚨 Reading a value off the wrong scale. If each block stands for 100 and he reads it as 1, every answer is off by a lot, so the scale is the first thing to check.",
        "Forgetting the key on a double graph. Two block styles mean two different things, and a student who skips the key will compare a bar with itself."
      ]},
      { h: "Teaching Suggestion", p: [
        "Every number in this lesson is made up for practice. Find a real graph in a newspaper or an almanac and write two questions about it together, because that is the skill the lesson is for.",
        "The graphs here are drawn with text, so a round circle graph is shown laid flat as a strip. Sketching a real pie on paper from the numbers is a good way to see the match."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Which Language Wins?", s: [
      "A class has a project on the languages of the world, and the first thing everyone wants to know is which language has the most speakers.",
      "A table of counts can answer that, but you'd have to read every number and compare them in your head, and a graph does the comparing for you in one look.",
      "That's the power of {{statistics}}, the collecting, organizing and summarizing of numerical facts, because a graph shows a trend that a column of numbers hides.",
      "Every number in this lesson is made up for practice, so please don't quote them as real counts, but the skill of reading the graph is completely real."
    ]},

    { title: "A Bar Graph: Title, Scale, Key", s: [
      "Before you look at a single bar, read the title, which says what the graph is about, and then the {{scale}}, which says how much one block or one gridline is worth.",
      "Skipping that step is the number one way to misread a graph, so we'll always do it first.",
      "",
      "[walk] Read a bar graph and find who has the most speakers, and how many more.",
      "[step] Read the title and the scale before anything else, because they say what the bars mean. || Speakers of Five Languages, in millions\none block (■) = 100 million",
      "[step] Here's the graph, with one block for every 100 million speakers. || Mandarin │■■■■■■■■■ 900\nSpanish  │■■■■■ 500\nEnglish  │■■■■ 400\nHindi    │■■■ 300\nArabic   │■■ 200\n         └──────────",
      "[step] The longest bar is Mandarin, so it has the most speakers, and the shortest bar is Arabic. || most:   Mandarin (9 blocks)\nfewest: Arabic (2 blocks)",
      "[step] To find how many more speakers Mandarin has than English, read both values and subtract. || 900 − 400 = 500 million more",
      "",
      "You wouldn't get that by guessing at the bar heights, so read the actual values and then do the arithmetic.",
      "That's why a table of numbers and a graph work best as a pair."
    ]},

    { title: "Two Colors, Two Stories", s: [
      "A double bar graph puts two bars side by side for every item, and that's where the {{key}} matters, because the key tells you what each kind of bar means.",
      "Say a school counts the students in its Spanish and French classes in two different years, and since we can't use colors in text, we'll use light blocks for 1990 and dark blocks for 2020.",
      "",
      "[walk] Read a {{double bar graph}} and tell what changed in each class.",
      "[step] Read the title and the key first, because the key says which blocks are which year. || Students in Language Classes\n░ = 1990    █ = 2020\none block = 20 students",
      "[step] Here's the graph, with a pair of bars for each language. || Spanish 1990 │░░░░░░ 120\n        2020 │██████████ 200\nFrench  1990 │░░░░ 80\n        2020 │███ 60",
      "[step] Spanish went from 120 to 200, so it grew by 80 students. || 200 − 120 = 80 more",
      "[step] French went from 80 to 60, so it shrank by 20 students. || 80 − 60 = 20 fewer",
      "",
      "Without the key, you might compare Spanish in 1990 to Spanish in 2020 and think you were comparing two languages.",
      "A pair of bars lets you see both years in a single look."
    ]},

    { title: "A Line Graph and a Trend", s: [
      "A line graph is the best choice when something changes over time, because the line shows the {{trend}}, the direction the numbers are heading.",
      "Say a graph tracks the learners of two languages over fifteen years, with the numbers in thousands, using ● for Language X and ○ for Language Y.",
      "",
      "[walk] Plot two lines and use them to find a crossing and make a prediction.",
      "[step] Read the title and the scale, where the years go across the bottom and thousands of learners go up the side. || Learners of Two Languages (thousands)\n● = Language X    ○ = Language Y",
      "[step] Plot Language X first, which starts at 40 in 2000 and gains 20 every five years. || 120 │\n100 │                    ●\n 80 │              ●\n 60 │        ●\n 40 │  ●\n    └────────────────────────\n     2000  2005  2010  2015",
      "[step] Now plot Language Y, which starts at 120 and loses 20 every five years. || 120 │  ○\n100 │        ○           ●\n 80 │              ◎\n 60 │        ●           ○\n 40 │  ●\n    └────────────────────────\n     2000  2005  2010  2015",
      "[step] The lines meet at 80 in the year 2010, shown by ◎, so that's when the two languages had the same number of learners. || 2010:  X = 80,  Y = 80",
      "[step] To predict 2020, keep each line going at the same pace, because X gains 20 and Y loses 20 in the next five years. || 2020:  X = 100 + 20 = 120\n2020:  Y = 60 − 20 = 40",
      "",
      "That last step is a prediction and not a fact, because a trend only tells you where the numbers are heading if nothing changes.",
      "So treat a prediction as a good guess, and check it again when new numbers arrive."
    ]},

    { title: "A Pie With a Budget", s: [
      "A circle graph shows how a whole is split into parts, and the whole circle is the whole amount, so every slice is a share of it.",
      "We can't draw a round pie in text, so we'll lay it flat as a strip of 20 blocks, where every block is 5 percent of the whole.",
      "",
      "[walk] Read a circle graph of a club's $400 budget for a language fair.",
      "[step] The whole strip is the whole $400, which is 100 percent. || [PPPPPPPPPPFFFFFDDDZZ]\nwhole strip = $400 = 100%",
      "[step] The key says P is printing with 10 blocks, F is food with 5 blocks, D is decorations with 3 blocks, and Z is prizes with 2 blocks. || P  10 blocks = 50%\nF   5 blocks = 25%\nD   3 blocks = 15%\nZ   2 blocks = 10%",
      "[step] Check that the slices add up to the whole before you trust the graph. || 50 + 25 + 15 + 10 = 100%",
      "[step] Printing is half the budget, so it gets half of $400. || 400 ÷ 2 = $200",
      "",
      "A pie that doesn't add up to 100 percent has been drawn wrong, so that check is worth the five seconds.",
      "Circle graphs are best for parts of a whole, like a budget."
    ]},

    { title: "Examine the Scale", s: [
      "You can read every part of a graph correctly and still get the answer wrong if you misread the scale, so the last thing to do is check it.",
      "Here's a quick check on the scale of the first graph.",
      "",
      "[walk] Check the scale on the Hindi bar from the first graph.",
      "[step] The Hindi bar has 3 blocks. || ■■■  =  3 blocks",
      "[step] Each block is 100 million speakers, not 1 million, so the bar is 3 times 100. || 3 × 100 = 300 million",
      "[step] If you had read each block as 1, you'd have said 3 million, which is a hundred times too small. || 3 million   ✗\n300 million ✓",
      "",
      "Ask whether your answer is about the size the bars suggest, whether you used the key, and whether you subtracted the right two values.",
      "So the question that began the lesson has an answer: read the title, the scale and the key first, then the values, and then check the scale before you say a word."
    ]}
  ],

  words: [
    ["Statistics", "Collecting, organizing and summarizing numerical facts so you can answer questions and make predictions.", 2],
    ["Scale", "The part of a graph that says how much one block or one gridline is worth.", 4],
    ["Key", "The part of a graph that tells you what each color, symbol or kind of bar stands for.", 13],
    ["Double bar graph", "A graph with two bars side by side for every item, so two sets of data can be compared.", 15],
    ["Trend", "The direction the numbers are heading over time, which a line graph shows.", 22]
  ],

  findsAt: 49,
  questions: [
    { tag: "First Look", q: "When you get a new graph, what should you read first?",
      find: [4, 5, 7], hint: "Read A Bar Graph: Title, Scale, Key.",
      choices: ["The title and the scale", "The tallest bar only", "The last number on the scale", "Nothing, since you can see the answer"], right: 0,
      why: "The title and scale tell you what the bars mean and how much each one is worth." },

    { tag: "Reading Bars", q: "On the five-language bar graph, which language has the fewest speakers?",
      find: [9], hint: "Look for the shortest bar.",
      choices: ["Mandarin", "Hindi", "English", "Arabic"], right: 3,
      why: "Arabic has the shortest bar, only 2 blocks." },

    { tag: "Subtracting", q: "How many more speakers does Spanish have than Hindi on that graph?",
      find: [8, 10], hint: "Read the two values, then subtract.",
      choices: ["200 million", "800 million", "500 million", "20 million"], right: 0,
      why: "500 − 300 = 200 million." },

    { tag: "The Key", q: "Why does a double bar graph need a key?",
      find: [13, 16], hint: "Read Two Colors, Two Stories.",
      choices: ["To make the graph look finished", "To say what each kind of bar stands for", "To show the highest value", "To tell you the scale"], right: 1,
      why: "Without the key you can't tell which bar is which." },

    { tag: "Double Bars", q: "How many students were in the French classes in 1990?",
      find: [17], hint: "Find the light blocks for French.",
      choices: ["60", "20", "120", "80"], right: 3,
      why: "French 1990 is 4 blocks of 20, so 80." },

    { tag: "Trend", q: "What does a trend show?",
      find: [22], hint: "Read A Line Graph and a Trend.",
      choices: ["The direction the numbers are heading over time", "The exact title of the graph", "The number of colors used", "The biggest bar"], right: 0,
      why: "A trend is the direction the numbers are heading." },

    { tag: "Crossing", q: "In what year did Language X and Language Y have the same number of learners?",
      find: [28], hint: "Look for the ◎ on the line graph.",
      choices: ["2000", "2005", "2010", "2015"], right: 2,
      why: "Both were at 80 in 2010." },

    { tag: "Predicting", q: "If both lines keep the same pace, about how many learners will Language X have in 2020?",
      find: [29], hint: "X was at 100 in 2015 and gains 20 every five years.",
      choices: ["About 80", "About 100", "About 140", "About 120"], right: 3,
      why: "100 + 20 = 120." },

    { tag: "Circle Graph", q: "The club's budget is $400, and food is 25 percent of it. How much is that?",
      find: [36, 38], hint: "A quarter of $400.",
      choices: ["$25", "$100", "$200", "$400"], right: 1,
      why: "25 percent is a quarter, and 400 ÷ 4 = 100." },

    { tag: "Spot the Mistake", q: "A student reads the 3-block Hindi bar as 3 million, though each block is 100 million. What went wrong?",
      find: [45, 46], hint: "Read Examine the Scale.",
      choices: ["The student didn't check the scale, so the answer is 100 times too small", "The student added instead of subtracting", "The student forgot the key", "Nothing, 3 million is right"], right: 0,
      why: "Each block is 100 million, so the bar is 300 million." }
  ],

  vocabQuestions: [
    { q: "What is <i>statistics</i>?",
      choices: ["A kind of graph", "Collecting, organizing and summarizing numerical facts", "The tallest bar on a graph", "A way to round numbers"], right: 1 },
    { q: "What does the <i>scale</i> of a graph tell you?",
      choices: ["What the graph's title is", "Which color is which", "How much one block or gridline is worth", "Who drew the graph"], right: 2 },
    { q: "What does the <i>key</i> on a graph tell you?",
      choices: ["What each color, symbol or kind of bar stands for", "The answer to the problem", "The size of the paper", "How the graph was drawn"], right: 0 },
    { q: "What is a <i>double bar graph</i>?",
      choices: ["A graph with two titles", "A graph that has been drawn twice", "A graph with bars that are twice as tall", "A graph with two bars side by side for every item"], right: 3 },
    { q: "What is a <i>trend</i>?",
      choices: ["A sudden mistake in the data", "A kind of circle graph", "The direction the numbers are heading over time", "A label on the bottom of a graph"], right: 2 }
  ],

  work: [
    { title: "Pages Read",
      ask: "A bar graph shows pages read each day, and one block (■) stands for 5 pages. Monday has 6 blocks, Tuesday has 4 blocks and Wednesday has 9 blocks.",
      steps: [
        { ask: "How many pages were read on Wednesday?", answer: 45, calc: "9*5",
          hint: "9 blocks, 5 pages each.",
          why: "9 × 5 = 45 pages." },
        { ask: "How many pages were read on Tuesday?", answer: 20, calc: "4*5",
          hint: "4 blocks, 5 pages each.",
          why: "4 × 5 = 20 pages." },
        { ask: "How many more pages were read on Wednesday than on Tuesday?", answer: 25, calc: "45-20",
          hint: "Subtract the two values.",
          why: "45 − 20 = 25 more pages." },
      ] },
    { title: "Saving Up",
      ask: "A line graph shows savings: $10 in week 1, $16 in week 2 and $22 in week 3, going up at the same pace.",
      steps: [
        { ask: "How many dollars does the line go up each week?", answer: 6, calc: "16-10",
          hint: "Subtract week 1 from week 2.",
          why: "16 − 10 = 6 dollars a week." },
        { ask: "Week 6 is how many weeks after week 3?", answer: 3, calc: "6-3",
          hint: "Count the weeks from 3 to 6.",
          why: "6 − 3 = 3 weeks." },
        { ask: "If the pace holds, how many dollars will there be in week 6?", answer: 40, calc: "22+3*6",
          hint: "Start at $22 and add 3 weeks of $6.",
          why: "22 + 18 = 40 dollars, and that's a prediction, not a fact." },
      ] },
  ],

  todo: { title: "What To Do Now", s: [
      "A graph is only as good as the person reading it, and now you get the practice, in the same order the lesson took the graphs.",
      "First work through Your Turn below the reading, typing each answer.",
      "Then come {c} word cards, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "Every number was made up, so don't copy any of them into a report as a real count.",
      "On each question, read the title, the scale and the key first, and check the scale before you answer.",
      "Last, open the Homework Sheet with the button at the bottom of the page, and work every problem on paper."
  ] }
};
