/* maths/the-distributive-property
   Grade 7 · maths · Pre-Algebra Chapter 2, Lesson 2.2.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-11-07. From McDougal Littell Pre-Algebra (California,
   2008) pp71-75, via the weeks 10-11 packet (paraphrased book notes, not the page itself).

   SHAPE COPIED FROM 2.1 (properties-and-operations.js), the one Paul rebuilt three times:
   plain English for the word, one chart (numbers, then letters), the book's four examples
   IN THE BOOK'S ORDER (two ways to one total, mental math near a round number, equivalent
   variable expressions, areas), one line per move with the reason on the right, a Try One
   after each. Nothing the book doesn't do.
   Our numbers and our world, never the book's (camping, geodes, game room).
   ONE WORLD: Sam, a student pilot, at a small airfield.

   NO HOMEWORK SHEET this batch (Paul, 2026-11-07). The scored work is the 8 questions
   plus Your Turn. No `sheet` field, no visuals.

   ADDED FROM THE RECORD (not in the packet): nothing. The area formulas (rectangle: length
   times width; triangle: one half base times height) are stated in the book's own example.
   FOR THE REVIEW QUEUE: the 8 multiple-choice questions and the Your Turn are mine (the book
   has Checkpoints, not a quiz); the wrong answers are the real mistakes (not handing the
   number to the second term, sign not carried, forgetting the one half). */
'use strict';

/* draws a small table with a header row; rows is a list of equal-length lists */
const table = (rows) => {
  const n = rows[0].length, w = [];
  for (let i = 0; i < n; i++) w[i] = Math.max(...rows.map((r) => [...r[i]].length)) + 2;
  const line = (l, m, r) => l + w.map((x) => "─".repeat(x)).join(m) + r;
  const row = (r) => "│" + r.map((c, i) => " " + c + " ".repeat(w[i] - 1 - [...c].length)).join("│") + "│";
  return [line("┌", "┬", "┐"), row(rows[0]), line("├", "┼", "┤")]
    .concat(rows.slice(1).map(row), [line("└", "┴", "┘")]).join("\n");
};

module.exports = {
  id: "maths/the-distributive-property",
  slug: "the-distributive-property",
  title: "The Distributive Property",
  unit: "Pre-Algebra &middot; 2.2",
  seq: { unit: 15, unitTitle: "Pre-Algebra: Solving Equations", n: 2 },
  natural: "2026-11-07",

  /* ── /teach-plan, 2026-11-07. ML Pre-Algebra 2008 pp71-75. ── */
  plan: {
    objective: "Use the distributive property to evaluate numerical expressions (including mental math with numbers near a round number) and to write equivalent variable expressions, giving the reason on each line.",
    markers: [
      "BOOK, side note: distribute means hand the number outside the parentheses to each number inside.",
      "BOOK, Key Concept: a(b + c) = ab + ac, (b + c)a = ba + ca, a(b - c) = ab - ac, with number rows.",
      "BOOK, Examples 1 to 4, one line per step with the reason on the right, a Checkpoint after Examples 2 and 3.",
      "BOOK, error analysis (Guided Practice 2): 2(x + 1) and 2x + 1 are not equivalent.",
    ],
    method: "ONE LINE PER MOVE, REASON ON THE RIGHT. Hand the outside number to EACH term inside, signs included, then multiply. Near a round number, rewrite as the round number minus a little and distribute.",
    exampleOnly: [
      "Sam the student pilot at a small airfield. WORLD: one airfield, our numbers.",
      "Left out on purpose: the book's camping gear, geodes and rectangle sizes.",
    ],
    digitize: "Reading engine. The book's order: word meaning, chart, Examples 1-4 as walks with a Try One walk after each, 8 questions, one Your Turn. No homework sheet.",
    assumes: "Integers (done), the commutative and associative properties (2.1), multiplying decimals, area of a rectangle and a triangle (recapped on the page).",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Math",
    blurb: "Distribute means hand out. See how the number outside the parentheses goes to every number inside, for mental math and for letters.",
    contains: [
      "What distribute means in plain English",
      "A chart of the property in numbers and in algebra",
      "Four worked examples, each with a Try One",
      "Mental math with numbers near a round number",
      "Finding the area of a rectangle and a triangle",
      "Eight questions and a Your Turn problem",
    ] },
  eyebrow: ["Pre-Algebra", "2.2", "Solving Equations"],
  dek: "Distribute means hand out, and that one idea makes Sam's shopping math easy and keeps his letters honest.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "By the end of this lesson your student should be able to hand a number out to every term inside parentheses, use that to do mental math, write an equivalent expression with a letter in it, and give the reason on each line."
      ]},
      { h: "Where Students Get Stuck", p: [
        "Handing the number to only the first term. 2(x + 1) is 2x + 2, and 2x + 1 is a different expression (the book's own error-analysis question).",
        "Losing the sign when the number outside is negative. A negative outside must go to BOTH terms, and subtracting a negative turns into adding.",
        "Splitting the number wrong for mental math. 4.95 is 5 - 0.05, so the small part gets subtracted, not added."
      ]},
      { h: "Book Pages", p: [
        "McDougal Littell Pre-Algebra (2008), pages 71 to 75. Read free on archive.org: https://archive.org/details/prealgebra0000unse_z0p2/page/71/mode/1up"
      ]},
      { h: "Suggested Videos", videos: [
        { id: "Jkb1-ekHTg4", title: "The Distributive Property Explained | A Step-By-Step Guide | Algebraic Expressions | Math with Mr. J", channel: "Math with Mr. J",
          why: "Goes step by step through a(b + c) = ab + ac, the same pattern as the chart in this lesson." },
        { id: "CTw40jSAUx0", title: "An Intro to the Distributive Property | Simplifying Expressions | Math with Mr. J", channel: "Math with Mr. J",
          why: "A gentle introduction that adds letters, which is the second half of this lesson." },
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "What Distribute Means", s: [
      "In everyday English, to distribute means to hand something out, the way a teacher distributes a worksheet to everyone in the class.",
      "In math, the {{distributive property}} says that the number outside the parentheses gets handed out to each number inside, so every number in there gets multiplied by it.",
      "It works when the numbers inside are added or subtracted, and the number outside can sit on either side.",
      "",
      "[walk] See the property in numbers, and then in letters.",
      "[step] The number outside is handed to each number inside, whether you add or subtract, and on whichever side it sits. || " + table([["", "Numbers", "Algebra"], ["Add, number first", "4(6 + 3) = 4(6) + 4(3)", "a(b + c) = ab + ac"], ["Add, number last", "(6 + 3)4 = 6(4) + 3(4)", "(b + c)a = ba + ca"], ["Subtract, number first", "5(7 - 2) = 5(7) - 5(2)", "a(b - c) = ab - ac"], ["Subtract, number last", "(7 - 2)5 = 7(5) - 2(5)", "(b - c)a = ba - ca"]]),
      "",
      "The letters in the algebra column stand for any numbers at all, so each one is the same pattern as the numbers beside it.",
      "Now watch the property do some work."
    ]},

    { title: "Example 1: Two Ways to One Total", s: [
      "Sam and a friend each buy a headset for $90 and a flight bag for $60, and they want to know what they spent together.",
      "There are two ways to work it out, and they have to agree, because both of them find the same total.",
      "",
      "[walk] Find the total cost, two ways.",
      "[step] Method one: find what one person spends, then double it. || Total cost = 2(90 + 60)\n= 2(150)      add inside the parentheses first\n= 300      multiply",
      "[step] Method two: find what two headsets cost and what two bags cost, then add them. || Total cost = 2(90) + 2(60)      distributive property\n= 180 + 120      multiply\n= 300      add",
      "[step] Both ways give the same total, so Sam and his friend spent $300. || 2(90 + 60) = 2(90) + 2(60)",
      "",
      "Two expressions that have the same value, like these two, are called {{equivalent numerical expressions}}, and the distributive property is what connects them.",
      "",
      "[walk] Try one: you and a friend each buy a logbook for $40 and a chart kit for $25.",
      "[step] Method one: add inside first, then double. || 2(40 + 25)\n= 2(65)      add inside the parentheses first\n= 130      multiply",
      "[step] Method two: hand the 2 to each price, then add. || 2(40) + 2(25)      distributive property\n= 80 + 50      multiply\n= 130      add"
    ]},

    { title: "Example 2: Mental Math Near a Round Number", s: [
      "Some prices sit just under a round number, like $4.95, and those are hard to multiply in your head.",
      "The trick is to write the price as the round number minus a little, because then the distributive property leaves you two small multiplications that are easy.",
      "",
      "[walk] Sam buys 3 logbooks at $4.95 each, so find the total in your head.",
      "[step] Write the total cost. || Total cost = 3(4.95)",
      "[step] 4.95 is 5 minus 0.05, so rewrite it that way. || = 3(5 - 0.05)      rewrite 4.95 as 5 - 0.05",
      "[step] Hand the 3 to each number inside. || = 3(5) - 3(0.05)      distributive property",
      "[step] Multiply, which is easy to do in your head. || = 15 - 0.15      multiply",
      "[step] Subtract, so the logbooks cost $14.85. || = 14.85      subtract",
      "",
      "[walk] Try one: 4 charts at $2.98 each.",
      "[step] Rewrite 2.98 as 3 minus 0.02. || 4(2.98)\n= 4(3 - 0.02)      rewrite 2.98 as 3 - 0.02",
      "[step] Hand the 4 to each number, then multiply. || = 4(3) - 4(0.02)      distributive property\n= 12 - 0.08      multiply",
      "[step] Subtract. || = 11.92      subtract"
    ]},

    { title: "Example 3: Writing Equivalent Expressions", s: [
      "Letters work the same way, and two expressions with a letter in them are {{equivalent variable expressions}} when they have the same value no matter what number the letter stands for.",
      "The distributive property lets you write one as the other, and the only new thing to watch is the sign.",
      "A negative number outside gets handed to everything inside, and subtracting a number is the same as adding its opposite, which the book calls the definition of subtraction.",
      "",
      "[walk] Write an equivalent expression for 5(x + 4).",
      "[step] Hand the 5 to each term inside. || 5(x + 4) = 5(x) + 5(4)      distributive property",
      "[step] Multiply. || = 5x + 20      multiply",
      "",
      "[walk] Write an equivalent expression for (n + 3)(-2).",
      "[step] The -2 sits on the right this time, and it still goes to both terms. || (n + 3)(-2) = n(-2) + 3(-2)      distributive property",
      "[step] Multiply. || = -2n + (-6)      multiply",
      "[step] Adding a negative is the same as subtracting. || = -2n - 6      definition of subtraction",
      "",
      "[walk] Write an equivalent expression for -4(3y - 5).",
      "[step] Hand the -4 to both terms and keep the minus sign between them. || -4(3y - 5) = -4(3y) - (-4)(5)      distributive property",
      "[step] Multiply. || = -12y - (-20)      multiply",
      "[step] Subtracting a negative is the same as adding. || = -12y + 20      definition of subtraction",
      "",
      "[walk] Try one: write an equivalent expression for each of 6(x + 3), (t + 8)(-2) and -3(4w - 2).",
      "[step] Hand the 6 to both terms. || 6(x + 3) = 6(x) + 6(3)      distributive property\n= 6x + 18      multiply",
      "[step] Hand the -2 to both terms. || (t + 8)(-2) = t(-2) + 8(-2)      distributive property\n= -2t + (-16)      multiply\n= -2t - 16      definition of subtraction",
      "[step] Hand the -3 to both terms. || -3(4w - 2) = -3(4w) - (-3)(2)      distributive property\n= -12w - (-6)      multiply\n= -12w + 6      definition of subtraction"
    ]},

    { title: "Example 4: Finding Areas", s: [
      "Area is how much flat space a shape covers.",
      "A rectangle's area is its length times its width, and a triangle's area is one half times its base times its height, where the base is the side it sits on and the height is the straight-up distance.",
      "When a side is written with a letter in it, the distributive property helps you write the area without parentheses.",
      "",
      "[walk] Sam paints a rectangle on the ramp with one side 3x + 2 feet and the other 6 feet, so find the area.",
      "[step] The area of a rectangle is length times width. || A = lw\n= (3x + 2)(6)",
      "[step] Hand the 6 to each term. || = 3x(6) + 2(6)      distributive property",
      "[step] Multiply, so the area is 18x + 12 square feet. || = 18x + 12      multiply",
      "",
      "[walk] A triangle sign has a base of 10 feet and a height of 9 - 2y feet, so find the area.",
      "[step] The area of a triangle is one half times base times height. || A = 1/2 · b · h\n= 1/2(10)(9 - 2y)",
      "[step] Half of 10 is 5. || = 5(9 - 2y)      multiply 1/2 and 10",
      "[step] Hand the 5 to both terms. || = 5(9) - 5(2y)      distributive property",
      "[step] Multiply, so the area is 45 - 10y square feet. || = 45 - 10y      multiply",
      "",
      "[walk] Try one: a rectangle with sides 5x + 2 and 4, then a triangle with base 8 and height 7 - 2y.",
      "[step] Hand the 4 to each term. || A = (5x + 2)(4)\n= 5x(4) + 2(4)      distributive property\n= 20x + 8      multiply",
      "[step] Half of 8 is 4, then hand the 4 to both terms. || A = 1/2(8)(7 - 2y)\n= 4(7 - 2y)      multiply 1/2 and 8\n= 4(7) - 4(2y)      distributive property\n= 28 - 8y      multiply"
    ]}
  ],

  words: [
    ["Distributive property", "Distribute means hand out. The number outside the parentheses is multiplied by each number inside, so a(b + c) = ab + ac.", 1 /*kw:distributive property*/],
    ["Equivalent numerical expressions", "Two number expressions with the same value, like 2(90 + 60) and 2(90) + 2(60).", 13 /*kw:equivalent numerical*/],
    ["Equivalent variable expressions", "Two expressions with a letter in them that have the same value for every number the letter could be, like 3(x + 7) and 3x + 21.", 29 /*kw:equivalent variable*/],
    ["Definition of subtraction", "Subtracting a number is the same as adding its opposite, so 5 - 3 is 5 + (-3).", 31 /*kw:definition of subtraction*/],
  ],

  questions: [
    { tag: "Use It", q: "Which expression is equivalent to 4(x + 5)?",
      find: [33], /*kw:Hand the 5 to each term inside*/
      hint: "The 4 gets handed to both x and 5.",
      choices: ["4x + 20", "4x + 5", "x + 20", "4x + 9"], right: 0 },

    { tag: "Use It", q: "Use 6(100 - 2) to work out 6(98). What is the answer?",
      find: [26], /*kw:Rewrite 2.98 as 3 minus 0.02*/
      hint: "Multiply 6 by 100, multiply 6 by 2, then subtract.",
      choices: ["588", "612", "598", "594"], right: 0 },

    { tag: "Use It", q: "Sam buys 3 logbooks at $4.95 each. Using 3(5 - 0.05), what is the total?",
      find: [24], /*kw:Subtract, so the logbooks cost*/
      hint: "Both the 5 and the 0.05 get multiplied by 3.",
      choices: ["$14.85", "$15.15", "$14.95", "$14.55"], right: 0 },

    { tag: "Careful", q: "What is -3(2y - 4) with no parentheses?",
      find: [40], /*kw:Hand the -4 to both terms*/
      hint: "The -3 goes to both terms, and subtracting a negative turns into adding.",
      choices: ["-6y + 12", "-6y - 12", "-6y - 4", "6y - 12"], right: 0 },

    { tag: "Careful", q: "Are 5(x + 2) and 5x + 2 equivalent variable expressions?",
      find: [30, 33], /*kw:the only new thing to watch|Hand the 5 to each term inside*/
      hint: "Hand the 5 to both terms and see what you get.",
      choices: [
        "No, because the 5 must go to the 2 as well, which makes 5x + 10.",
        "Yes, because the 5 only goes with the x.",
        "Yes, because both have a 5 and a 2 in them.",
        "No, because the answer should be x + 10."
      ], right: 0 },

    { tag: "Name It", q: "Which property lets you write 7(a - 3) as 7a - 21?",
      find: [1], /*kw:property}} says*/
      hint: "Look at which number was handed out.",
      choices: ["The distributive property", "The commutative property", "The associative property", "The identity property"], right: 0 },

    { tag: "Use It", q: "A rectangle has sides 2x + 3 and 4. What is its area with no parentheses?",
      find: [52], /*kw:Hand the 6 to each term*/
      hint: "Area is length times width, and the 4 goes to both terms.",
      choices: ["8x + 12", "8x + 3", "2x + 12", "6x + 7"], right: 0 },

    { tag: "Use It", q: "A triangle has a base of 6 and a height of 5 - 2y. What is its area?",
      find: [56], /*kw:Half of 10 is 5*/
      hint: "Half of 6 comes first, then hand it out.",
      choices: ["15 - 6y", "15 - 2y", "30 - 12y", "15 + 6y"], right: 0 }
  ],

  /* ⭐ YOUR TURN: a fresh problem in the same world, every step typed and checked. */
  work: [
    { title: "Checklists for the Flight Club",
      ask: "Sam buys 6 preflight checklists at $2.95 each. Work out 6(2.95) in your head by writing 2.95 as 3 - 0.05.",
      steps: [
        { ask: "Hand the 6 to the 3. What is 6(3)?", answer: 18, calc: "6*3",
          hint: "6 times 3.",
          why: "6(3) = 18." },
        { ask: "Now hand the 6 to the 0.05. What is 6(0.05)?", answer: 0.3, calc: "6*0.05",
          hint: "6 times 5 is 30, and 0.05 has two decimal places.",
          why: "6(0.05) = 0.30, which is 0.3." },
        { ask: "Subtract. How many dollars do the checklists cost?", answer: 17.7, calc: "18-0.3",
          hint: "18 minus 0.3.",
          why: "18 - 0.3 = 17.7, so the checklists cost $17.70." },
      ] },
  ],

  todo: { title: "What To Do Now", s: [
      "You watched four examples, each one line at a time with its reason, and tried one after each.",
      "First work through Your Turn below the reading, typing each step.",
      "Then come {c} word cards, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "If one is hard, go back to the example that matches it and read its lines again."
  ] }
};
