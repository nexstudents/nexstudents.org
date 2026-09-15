/* maths/classify-information
   Grade 7 · maths · unit 1. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 READING SHAPE, NOT THE BRACKET - same as 1-1 to 1-5. This is a
   Problem-Solving Strategy lesson. Nothing is computed except one division; the
   whole skill is sorting what you were told before you try to answer.

   ✅ THE PROSE IN `parts` IS PAUL'S, REBUILT FROM HIS DOC 2026-09-14.
   Source: docs.google.com/document/d/1ciKSKSiOAUrgPUCcZnyQELB-lZD2Q3FbYslE1aA64kk
   A REWRITE, not an edit. What changed from my 2026-09-13 draft:
     - 🚨 THE SEATING PUZZLE IS GONE. My draft used the book's theater puzzle -
       six adults, three occupations, three spouses. Paul replaced it with a
       youth-group van trip, and the replacement teaches something mine never
       did: "two adults will drive" is a TRUE FACT YOU DO NOT NEED. That is the
       point of classifying, and a puzzle with no spare facts cannot make it.
     - PROVERBS 18:13 CLOSES IT. Answering before you have heard the matter.
     - The arithmetic is one division, 12 ÷ 6 = 2, and the lesson says out loud
       that the arithmetic was the easy part.
   ⚠️ Everything in `plan`, `shelf` and `dek` below was rewritten with it. The
   old ones described the puzzle and would have gone stale silently.

   ⚠️ MY ADDITIONS ARE THREE SENTENCES, marked inline where they sit: one-line
   definitions of classify, strategy and diagram, because every word card now has
   to be findable in the story and his prose only defined Explore.
   → [[feedback-tweak-pauls-lesson-structure]] */
'use strict';
module.exports = {
  id: "maths/classify-information",
  slug: "classify-information",
  title: "Problem-Solving Strategy: Classify Information",
  unit: "Math 7 &middot; U1-L6",
  seq: { unit: 1, unitTitle: "Tools for Problem Solving", n: 6 },

  /* ── /teach-plan, 2026-09-13, rewritten against Paul's doc 2026-09-14. The
        book is Glencoe Course 2 p20. The OBJECTIVE did not move; the example
        did, and the example is where the teaching lives in this one. ── */
  plan: {
    objective: "Sort the facts in a word problem into what you know and what you are being asked, before trying to answer it.",
    markers: [
      "QUOTED, Objective box: 'Solve problems by classifying information.'",
      "QUOTED, the lead: 'Sometimes it helps to classify information when you are deciding how to solve a problem.'",
      "QUOTED, Explore: 'What do you know?' then a bulleted list, then 'What are you trying to find?'",
      "QUOTED, the Strategies margin list: Look for a pattern · Solve a simpler problem · Act it out · Guess and check · Draw a diagram · Make a chart · Work backward",
    ],
    method: "TWO LISTS, WRITTEN BEFORE ANY ARITHMETIC. What do I know, and what do I need to find. 🚨 THE TEACHING IS IN THE SPARE FACT. Paul's van trip gives the student three facts - twelve students, six per van, two adults driving - and only two of them are needed. A student who believes every number in a problem must be used will try to do something with the two adults. Sorting is what makes it obvious that he should not. The arithmetic that follows is one division, and the lesson says plainly that the arithmetic was the easy part.",
    exampleOnly: [
      "The youth-group van trip - twelve students, six to a van, two adults driving - WORLD: church youth group, held throughout.",
      "🚨 THE TWO ADULTS ARE NOT PADDING AND MUST NOT BE TRIMMED. They are the only reason this lesson teaches anything. Cut them for tidiness and it becomes a division problem with a paragraph in front of it.",
    ],
    digitize: "The existing reading engine. The questions ask WHAT YOU DO or WHICH LIST A FACT BELONGS ON, never for a number, so the student practises the sorting rather than the arithmetic. NO NEW MECHANIC NEEDED.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Math",
    blurb: "A word problem is a pile of facts in a paragraph. Sort them first, and one of them usually turns out not to matter.",
    contains: [
      "A youth-group van trip where one of the facts is not needed at all",
      "What Do I Know and What Do I Need to Find, written as two real lists",
      "Where classifying sits inside Explore, Plan, Solve, Examine",
      "Proverbs 18:13, on answering before you have heard the matter",
    ] },
  eyebrow: ["Math 7", "U1-L6", "Tools for Problem Solving"],
  dek: "Some problems are hard because the arithmetic is hard. Others only look hard because every fact arrived in one lump.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Teach students to sort the information before trying to solve the problem. The main habit is simple: what do I know, and what do I need to find?"
      ]},
      { h: "Key Concepts", p: [
        "Classifying means sorting information into useful groups. It belongs in the Explore step of the four-step problem-solving plan: Explore, Plan, Solve, Examine.",
        "Students should understand that not every number or fact in a word problem is necessarily needed. Before choosing an operation, they first need to understand what information they have and what the problem is asking them to find."
      ]},
      { h: "Where Students Get Stuck", p: [
        "🚨 Students often see numbers and immediately start calculating. Have them stop and ask: does this fact help me answer the question? The goal is to understand the problem before choosing an operation."
      ]},
      { h: "Teaching Suggestion", p: [
        "Before allowing any math, have the student make two lists. The first is What I Know, where they write the facts the problem gives them. The second is What I Need to Find, where they write exactly what the problem is asking them to figure out.",
        "Once those two lists are clear, move to Plan and decide what to do with the information."
      ]},
      { h: "Biblical Connection", p: [
        "Proverbs 18:13 warns about answering a matter before hearing it. The same principle applies here: understand before you answer."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Sort Before You Solve", s: [
      "Some word problems are difficult because the math is difficult.",
      "Others only look difficult because all the information is packed together.",
      "",
      "Suppose your youth group is taking a trip.",
      "There are 12 students going.",
      "Each van can carry 6 students.",
      "Two adults will drive the vans.",
      "",
      "[ex] How many vans are needed for the students?",
      "",
      "You might see the numbers and immediately start calculating.",
      "Do not.",
      "First, sort the information.",
      /* ⚠️ MINE. His prose never defines the word the lesson is named after, and
         the first vocabulary question asks what it means. One sentence, placed
         where the student is about to do the thing. */
      "To classify is to sort information into groups, and that is exactly what we are about to do."
    ]},

    { title: "What Do I Know?", s: [
      "The problem tells us that 12 students are going, that each van can carry 6 students, and that two adults will drive.",
      "Those are the facts we were given.",
      "",
      "Now we make a second list."
    ]},

    { title: "What Do I Need to Find?", s: [
      "The problem asks us to find how many vans are needed for the students.",
      "Now we know exactly what we are looking for.",
      "",
      "But there is one more thing to notice.",
      "The problem told us that two adults will drive.",
      "That is true, but does that fact help us determine how many vans are needed for the 12 students?",
      "",
      "No.",
      "Not every fact or number in a word problem has to be used in the calculation.",
      "That is why sorting the information matters."
    ]},

    { title: "Now Make a Plan", s: [
      "The useful information is that there are 12 students and each van can carry 6 students.",
      "We need to find how many groups of 6 are in 12.",
      "",
      "So our plan is to divide.",
      "",
      "[ex] 12 ÷ 6 = 2",
      "",
      "The group needs 2 vans.",
      "",
      "The arithmetic was easy.",
      "The important part was understanding what the problem was asking before we started calculating."
    ]},

    { title: "Classifying Is Part of Explore", s: [
      "Remember the four steps.",
      "",
      "[ex] Explore, then Plan, then Solve, then Examine",
      "",
      "Classifying information happens during Explore.",
      "When you Explore, ask what do I know, and what do I need to find.",
      "Then you can move to Plan and ask what you should do with that information.",
      "",
      "Sometimes sorting the information is enough.",
      "Other times, you may need another strategy to help you see the problem.",
      /* ⚠️ MINE, two sentences. Both words have a card and a vocabulary question
         and neither was defined anywhere in his prose. */
      "A strategy is a method that helps you find a way to solve a problem.",
      "",
      "You could draw a diagram, make a chart, act it out, look for a pattern, solve a simpler problem, guess and check, or work backward.",
      "A diagram is a drawing that shows how the parts of a problem relate to each other.",
      "",
      "You do not need to use every strategy.",
      "Choose the one that helps you understand the problem."
    ]},

    { title: "Understand Before You Answer", s: [
      "Proverbs 18:13 says:",
      "",
      "[verse] \"He that answereth a matter before he heareth it, it is folly and shame unto him.\"",
      "[verse] Proverbs 18:13",
      "",
      "There is a useful principle here.",
      "Do not rush to answer something before you understand it.",
      "That applies to math too.",
      "",
      "When a word problem looks confusing, do not grab the numbers and start calculating.",
      "Slow down and ask: what do I know, and what do I need to find?",
      "",
      "Then make your plan.",
      "",
      "[ex] Sort first.",
      "[ex] Solve second."
    ]}
  ],

  words: [
    ["Classify", "To sort information into groups.", 10],
    ["Explore", "The step where you determine what you know and what you need to find.", 32],
    ["Strategy", "A method that helps you find a way to solve a problem.", 36],
    ["Diagram", "A drawing that shows how the parts of a problem relate to each other.", 38]
  ],

  findsAt: 52,
  questions: [
    { tag: "Sort First", q: "What should you do first when a word problem seems confusing?",
      find: [7, 8, 9],
      hint: "The lesson tells you plainly, right after it tells you what not to do.",
      choices: [
        "Start calculating.",
        "Sort what you know and what you need to find.",
        "Add all the numbers together.",
        "Guess, then check the answer."
      ], right: 1 },

    { tag: "The Four Steps", q: "Classifying information happens during which step?",
      find: [29, 30, 31],
      hint: "It is the first of the four, the one where you work out what you are even looking at.",
      choices: [
        "Explore.",
        "Plan.",
        "Solve.",
        "Examine."
      ], right: 0 },

    { tag: "The Two Lists", q: "What belongs on your What I Know list?",
      find: [11, 12],
      hint: "Look at what the lesson actually put on that list for the van trip.",
      choices: [
        "The answer.",
        "Facts given in the problem.",
        "Only the largest number.",
        "Your final calculation."
      ], right: 1 },

    { tag: "The Two Lists", q: "What belongs on your What I Need to Find list?",
      find: [14, 15],
      hint: "Not what you were told. What you were asked.",
      choices: [
        "Every number in the problem.",
        "What the problem is asking you to figure out.",
        "Your answer.",
        "A random operation."
      ], right: 1 },

    /* ⚠️ PAUL'S DOC WROTE THIS ONE AS YES/NO, TWO CHOICES. Expanded to four,
       meaning unchanged. Two options is a 50% guessing floor, which BEHAVIOR.md
       already warns about on the English sorter, and dealPositions() cannot
       spread a pool holding a single two-choice question - it would land on the
       same slot every build. The right answer is still his: no. */
    { tag: "The Spare Fact", q: "Do you always have to use every number in a word problem?",
      find: [17, 18, 19, 20],
      hint: "Think about the two adults who were driving the vans.",
      choices: [
        "No. A problem can give you a fact you do not need.",
        "Yes. Every number in the problem must be used.",
        "Yes, unless the problem tells you otherwise.",
        "Only the largest numbers have to be used."
      ], right: 0 },

    { tag: "What Comes Next", q: "After you understand what you know and what you need to find, what should you do next?",
      find: [32, 33],
      hint: "It is the second of the four steps.",
      choices: [
        "Guess.",
        "Make a plan.",
        "Start over.",
        "Use every number."
      ], right: 1 }
  ],

  vocabQuestions: [
    { q: "What does <i>classify</i> mean?",
      choices: [
        "To calculate.",
        "To sort information into groups.",
        "To estimate.",
        "To check an answer."
      ], right: 1 },
    { q: "What happens during <i>Explore</i>?",
      choices: [
        "You determine what you know and what you need to find.",
        "You write the final answer.",
        "You always divide.",
        "You check your arithmetic."
      ], right: 0 },
    { q: "What is a <i>strategy</i>?",
      choices: [
        "A type of number.",
        "A method that helps you solve a problem.",
        "The final answer.",
        "A mistake in a calculation."
      ], right: 1 },
    { q: "What is a <i>diagram</i>?",
      choices: [
        "A calculation.",
        "A list of numbers.",
        "A drawing that shows how parts of a problem relate.",
        "The final answer."
      ], right: 2 }
  ],

  todo: { title: "What To Do Now", s: [
      "A word problem hands you a pile of facts, and you have just been shown how to sort them before you touch the arithmetic.",
      "{c} word cards sit at the top of the page, then {Q} questions about the lesson, then {v} more questions about those words. {T} questions in all.",
      "Not one of them asks you to calculate anything.",
      "They ask what you would do first, which list a fact belongs on, and what you do once both lists are written.",
      "If a question is hard, go back to What Do I Know and read the van trip again from there.",
      "The one people trip on is the two adults who are driving.",
      "It is a true fact and it is in the problem, and you still do not need it.",
      "Last, the word cards at the top and the check at the bottom of the page."
  ] }
};
