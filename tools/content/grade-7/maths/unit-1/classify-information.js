/* maths/classify-information
   Grade 7 · maths · unit 1. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 THE PROSE IN `parts` IS A DRAFT, NOT PAUL'S VOICE. Built 2026-09-13.

   🚨 READING SHAPE, NOT THE BRACKET - same as 1-1 to 1-5. This is a
   Problem-Solving Strategy lesson. Nothing is computed; the whole skill is
   sorting what you were told before you try to answer. */
'use strict';
module.exports = {
  id: "maths/classify-information",
  slug: "classify-information",
  title: "Problem-Solving Strategy: Classify Information",
  unit: "Math 7 &middot; U1-L6",
  seq: { unit: 1, unitTitle: "Tools for Problem Solving", n: 6 },

  /* ── /teach-plan, 2026-09-13. Read off Glencoe Course 2 p20. ── */
  plan: {
    objective: "Sort the facts in a word problem into what you know and what you are being asked, before trying to answer it.",
    markers: [
      "QUOTED, Objective box: 'Solve problems by classifying information.'",
      "QUOTED, the lead: 'Sometimes it helps to classify information when you are deciding how to solve a problem.'",
      "QUOTED, Explore: 'What do you know?' then a bulleted list, then 'What are you trying to find?'",
      "QUOTED, the Strategies margin list: Look for a pattern · Solve a simpler problem · Act it out · Guess and check · Draw a diagram · Make a chart · Work backward",
    ],
    method: "TURN A PARAGRAPH INTO A LIST BEFORE YOU SOLVE ANYTHING. The book takes a tangled seating puzzle - six adults, three occupations, three spouses - and its first move is not arithmetic. It is to break the paragraph into five short bullets under 'What do you know?', and then state the question on its own under 'What are you trying to find?'. Once the facts are separated from each other, the puzzle solves almost by itself. The Explore / Plan / Solve / Examine frame is 1-1's four-step plan, reused.",
    exampleOnly: [
      "the seating puzzle - a doctor, a dentist and an artist with their spouses, six seats in a row — WORLD: a night at the theater. One world, held throughout.",
    ],
    digitize: "The existing reading engine. Nothing is computed. The questions ask WHICH FACT settles a step, never for a number, so the student practises the sorting rather than the arithmetic. NO NEW MECHANIC NEEDED.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Math",
    blurb: "A word problem is a pile of facts in a paragraph. Sort them first and the answer is usually already there.",
    contains: [
      "A seating puzzle that looks impossible until you list what you know",
      "The four-step plan from Lesson 1-1, used on a problem with no arithmetic",
      "Seven problem-solving strategies, named",
      "Questions that ask which fact does the work, never for a number",
    ] },
  eyebrow: ["Math 7", "U1-L6", "Tools for Problem Solving"],
  dek: "Some problems are hard because the arithmetic is hard. Others are hard only because the facts arrived in a lump.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will separate a word problem into what is known and what is being asked, and use that sorted list to find a way in."
      ]},
      { h: "Key Concepts", p: [
        "Classifying information means sorting the facts before solving. The book's frame is the four-step plan from Lesson 1-1: Explore, Plan, Solve, Examine. Classifying happens inside Explore.",
        "There is no arithmetic in this lesson at all. That is deliberate. A student who believes every math problem is a calculation will try to compute their way out of a puzzle that has nothing to compute."
      ]},
      { h: "Where Students Get Stuck", p: [
        "🚨 The instinct is to start answering after one read. This lesson rewards writing the facts down as a list first, which feels like a delay and is actually the whole method.",
        "The second stumble is not noticing that a negative fact is a fact. “No husband sits with his own wife” rules out huge numbers of arrangements, and students skim past it because it does not sound like information."
      ]},
      { h: "Teaching Suggestion", p: [
        "Do it with objects. Six coins or scraps of paper on the table, moved around while he reads the clues out loud. The book lists Act it out as one of its seven strategies for exactly this reason.",
        "Have him write the list of knowns himself rather than reading yours. The sorting is the skill; being handed a sorted list teaches nothing."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Six People and a Row of Seats", s: [
      "Here is the problem, exactly as tangled as it sounds.",
      "",
      "Six adults go to the theater together.",
      "Three of them are a doctor, a dentist and an artist.",
      "The other three are their spouses.",
      "",
      "They sit side by side in one row.",
      "Men and women sit alternately, so no two men sit together and no two women sit together.",
      "No husband sits next to his own wife.",
      "",
      "The dentist occupies one of the middle seats.",
      "The dentist is sitting next to the artist's wife.",
      "Bob sits at one end of the row, next to the artist's wife.",
      "",
      "How are the husbands and wives seated?",
      "",
      "Read that again and notice how it feels.",
      "It feels impossible, and it is not.",
      "It only feels that way because every fact arrived in the same lump."
    ]},

    { title: "Sort Before You Solve", s: [
      "Sometimes it helps to classify information when you are deciding how to solve a problem.",
      "",
      "Classifying just means sorting.",
      "You separate what you were told from what you were asked.",
      "",
      "This is the Explore step of the four-step plan from Lesson 1-1.",
      "Explore, Plan, Solve, Examine.",
      "",
      "So do the Explore step properly, on paper.",
      "",
      "What do you know?",
      "Six adults sit in a row.",
      "Men and women sit alternately.",
      "No husband sits next to his own wife.",
      "The dentist is in a middle seat, next to the artist's wife.",
      "Bob sits on an end seat, next to the artist's wife.",
      "",
      "What are you trying to find?",
      "How the husbands and wives are seated.",
      "",
      "Look at what just happened.",
      "Nothing was solved and nothing was calculated.",
      "The paragraph simply became a list, and the list is much easier to hold in your head."
    ]},

    { title: "The Fact That Does the Work", s: [
      "Once the facts are apart from each other, some of them turn out to be far more useful than others.",
      "",
      "Bob sits on an end seat, next to the artist's wife.",
      "",
      "That one sentence pins a person to a specific chair.",
      "Most of the others only rule things out.",
      "",
      "Both kinds matter.",
      "A fact that rules things out is still a fact, and students skip past those because they do not sound like information.",
      "",
      "No husband sits next to his own wife.",
      "",
      "That sounds like a rule rather than a clue.",
      "It is a clue, and it removes more possible seatings than anything else in the problem."
    ]},

    { title: "Seven Ways In", s: [
      "When you have sorted the facts and still cannot see the way through, the book offers a list of strategies.",
      "",
      "Look for a pattern.",
      "Solve a simpler problem.",
      "Act it out.",
      "Guess and check.",
      "Draw a diagram.",
      "Make a chart.",
      "Work backward.",
      "",
      "None of those is arithmetic either.",
      "",
      "For this puzzle, act it out is the obvious one.",
      "Put six coins on the table, one for each person, and move them while you read your list of knowns.",
      "",
      "Draw a diagram works just as well.",
      "Six boxes in a row, and you fill in what each clue forces."
    ]},

    { title: "Why This Counts as Math", s: [
      "There was no calculation anywhere in this lesson.",
      "",
      "That bothers some students, because every math lesson before this one ended in a number.",
      "",
      "But look at what the skill actually was.",
      "You read something complicated, separated what you knew from what you were asked, noticed which facts pinned things down and which ruled things out, and chose a way in.",
      "",
      "That is the part of a word problem people actually get stuck on.",
      "The arithmetic at the end is rarely the hard bit.",
      "",
      "Lesson 1-5 asked you to choose a method of computation before computing.",
      "This one asks you to sort the information before choosing anything at all.",
      "",
      "Both are the same habit: stop, look at what is in front of you, and decide before you start."
    ]}
  ],

  words: [
    ["Classify", "To sort things into groups. Here, sorting the facts of a problem into what you know and what you are asked."],
    ["Explore", "The first step of the four-step plan, where you work out what you know and what you are trying to find."],
    ["Strategy", "A way in to a problem, such as drawing a diagram or acting it out."],
    ["Diagram", "A drawing that shows how the parts of a problem relate to each other."]
  ],

  findsAt: 62,
  questions: [
    { tag: "The Method", q: "What does it mean to classify information in a word problem?",
      find: [15, 16],
      hint: "The reading says it in two words, then explains what gets separated from what.",
      choices: [
        "Sorting the facts, separating what you were told from what you were asked.",
        "Putting the numbers in order from smallest to largest.",
        "Deciding whether to use a calculator.",
        "Rounding the values before you begin."
      ], right: 0 },

    { tag: "The Method", q: "Which step of the four-step plan does classifying happen in?",
      find: [17],
      hint: "It is the first one, from Lesson 1-1.",
      choices: [
        "Solve.",
        "Explore.",
        "Examine.",
        "Plan."
      ], right: 1 },

    { tag: "The Facts", q: "Which fact in the seating puzzle pins a person to a specific chair?",
      find: [32],
      hint: "Most of the clues only rule things out. One of them does not.",
      choices: [
        "Men and women sit alternately.",
        "No husband sits next to his own wife.",
        "Bob sits on an end seat, next to the artist's wife.",
        "Six adults sit in a row."
      ], right: 2 },

    { tag: "The Facts", q: "Why does the reading warn about a fact like “no husband sits next to his own wife”?",
      find: [38, 39],
      hint: "It is about the kind of fact that students skim past.",
      choices: [
        "Because it is not actually true in the puzzle.",
        "Because it only applies to the dentist.",
        "Because it should be worked out last.",
        "Because it sounds like a rule rather than a clue, so students skip it, and it rules out more seatings than anything else."
      ], right: 3 },

    { tag: "Strategies", q: "Which strategy does the reading suggest for this particular puzzle?",
      find: [49],
      hint: "You would need six coins on a table.",
      choices: [
        "Act it out.",
        "Work backward.",
        "Look for a pattern.",
        "Guess and check."
      ], right: 0 },

    { tag: "The Big Idea", q: "What does this lesson have in common with Lesson 1-5?",
      find: [61],
      hint: "The last two lines of the reading say it plainly.",
      choices: [
        "Both are about multiplying large numbers.",
        "Both ask you to stop and decide something before you start working.",
        "Both require a calculator.",
        "Both are about rounding."
      ], right: 1 }
  ],

  vocabQuestions: [
    { q: "What does it mean to <i>classify</i>?",
      choices: [
        "To sort things into groups.",
        "To solve a problem quickly.",
        "To round a number.",
        "To check an answer."
      ], right: 0 },
    { q: "What happens in the <i>Explore</i> step?",
      choices: [
        "You check whether the answer is reasonable.",
        "You work out what you know and what you are trying to find.",
        "You do the arithmetic.",
        "You choose a calculator."
      ], right: 1 },
    { q: "What is a <i>strategy</i>?",
      choices: [
        "The answer to a problem.",
        "A kind of number.",
        "A way in to a problem, such as drawing a diagram or acting it out.",
        "The last step of the four-step plan."
      ], right: 2 },
    { q: "What is a <i>diagram</i>?",
      choices: [
        "A list of the facts you were given.",
        "A calculation written out in full.",
        "A guess you check afterwards.",
        "A drawing that shows how the parts of a problem relate to each other."
      ], right: 3 }
  ],

  todo: { title: "What To Do Now", s: [
      "That is the reading done.",
      "There are {q} questions, and not one of them asks you to seat the six people.",
      "They ask about the METHOD, because that is what this lesson is teaching.",
      "If one is hard, go back to Sort Before You Solve and read the list again.",
      "Then the word cards, {v} of them, and the check underneath.",
      "Last, on paper.",
      "Get six coins and actually solve the seating puzzle.",
      "Write your list of knowns first, before you move a single coin.",
      "If you solve it, write down which clue you used first and why."
  ] }
};
