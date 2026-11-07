/* maths/solving-equations-using-addition-or-subtraction
   Grade 7 · maths · Pre-Algebra Chapter 2, Lesson 2.5.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-11-07. From McDougal Littell Pre-Algebra (California,
   2008) pp90-95, via the weeks 10-11 packet (paraphrased book notes, not the page itself).

   SHAPE COPIED FROM 2.1: plain English for each word, the book's two Key Concept charts
   (Words, Numbers, Algebra), the book's three examples IN THE BOOK'S ORDER (subtract to
   solve an addition equation, add to solve a subtraction equation with the letter on the
   right, a scale word problem), one line per move with the reason on the right, a Try One
   after each. The page-90 algebra-tile activity is told in words as a work line. The
   book's horse-and-trailer scale became a cargo crate on a baggage trailer at the airfield.
   ONE WORLD: Sam, a student pilot, at a small airfield.

   NO HOMEWORK SHEET this batch (Paul, 2026-11-07). The scored work is the 8 questions
   plus Your Turn. No `sheet` field, no visuals.

   ADDED FROM THE RECORD: nothing.
   FOR THE REVIEW QUEUE: the 8 questions and Your Turn are mine; the wrong answers are the
   real mistakes (adding when you should subtract, doing it to one side only). */
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
  id: "maths/solving-equations-using-addition-or-subtraction",
  slug: "solving-equations-using-addition-or-subtraction",
  title: "Solving Equations Using Addition or Subtraction",
  unit: "Pre-Algebra &middot; 2.5",
  seq: { unit: 15, unitTitle: "Pre-Algebra: Solving Equations", n: 5 },
  natural: "2026-11-07",

  /* ── /teach-plan, 2026-11-07. ML Pre-Algebra 2008 pp90-95. ── */
  plan: {
    objective: "Solve one-step addition and subtraction equations with inverse operations, writing one line per move, and check the solution.",
    markers: [
      "BOOK, p90 activity: with algebra tiles, take the same number of ones off EACH side to leave the x-tile alone.",
      "BOOK, definitions: inverse operations undo each other; equivalent equations have the same solution; the goal is the variable by itself ('solving for the variable').",
      "BOOK, Key Concepts: Subtraction Property of Equality and Addition Property of Equality, each Words, Numbers, Algebra.",
      "BOOK, Examples 1 to 3 with the reason on the right, Check lines on Example 1, a Checkpoint after Example 3.",
      "BOOK, error analysis (exercise 9): x + 8 - 8 = 10 + 8 is wrong, you must do the SAME thing to both sides.",
    ],
    method: "ONE LINE PER MOVE, REASON ON THE RIGHT. Undo the operation next to the letter by doing the opposite operation to BOTH sides, so the letter ends up alone. Then put the answer back in to check.",
    exampleOnly: [
      "Sam the student pilot at a small airfield. WORLD: one airfield, our numbers.",
      "Left out on purpose: the book's horse trailer, rebates and Cresco, Iowa.",
    ],
    digitize: "Reading engine. The book's order: the balance idea, the two Key Concept charts, Examples 1-3 as walks with a Try One after each, 8 questions, one Your Turn. No homework sheet.",
    assumes: "Integers (done), writing an equation from words and checking a solution (2.4), mental math for simple equations (2.4).",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Math",
    blurb: "Do the opposite operation to both sides to get the letter alone. Three worked examples solve addition and subtraction equations and check each answer.",
    contains: [
      "The balance idea: do the same thing to both sides",
      "Inverse operations and equivalent equations in plain English",
      "Two charts: the subtraction and addition properties of equality",
      "Three worked examples, each with a Try One",
      "Checking a solution by putting it back in",
      "Eight questions and a Your Turn problem",
    ] },
  eyebrow: ["Pre-Algebra", "2.5", "Solving Equations"],
  dek: "To get a letter alone you undo what is next to it, on both sides, and Sam uses that to weigh a crate.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "By the end of this lesson your student should be able to solve an addition or subtraction equation by doing the inverse operation to both sides, write one line per move, and check the answer."
      ]},
      { h: "Where Students Get Stuck", p: [
        "Doing it to one side only. The book's error-analysis question has x + 8 - 8 = 10 + 8, which is wrong: you subtract 8 from BOTH sides.",
        "Using the wrong inverse. An addition equation is undone by subtracting, and a subtraction equation by adding.",
        "Dropping the sign. n + 9 = 4 has a negative answer, since 4 - 9 is -5."
      ]},
      { h: "Book Pages", p: [
        "McDougal Littell Pre-Algebra (2008), pages 90 to 95 (the tile activity is on 90 and the lesson starts on 91). Read free on archive.org: https://archive.org/details/prealgebra0000unse_z0p2/page/90/mode/1up"
      ]},
      { h: "Suggested Videos", videos: [
        { id: "KUnsabZDGzU", title: "How to Solve One-Step Equations (Addition and Subtraction) | Math with Mr. J", channel: "Math with Mr. J",
          why: "Uses inverse operations and a check, the same as the examples on this page." },
        { id: "DwlyMAjO0ao", title: "Solving One-Step Equations with Negatives (Addition and Subtraction) | Math with Mr. J", channel: "Math with Mr. J",
          why: "The answers here can be negative, and this video works through those." },
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "The Balance Idea", s: [
      "An equation is like a scale that is perfectly balanced, with the same amount on the left side as on the right.",
      "If you take something off one side only, the scale tips, so to keep it balanced you must take the same amount off both sides.",
      "The goal is to get the letter alone on one side, and that is called solving for the variable.",
      "",
      "[walk] Solve x + 3 = 5 the way the book does with tiles, where x is one tile and each 1 is a small tile.",
      "[step] Show the equation with tiles. || x 1 1 1  =  1 1 1 1 1",
      "[step] To get x alone, take three of the small tiles off the left side, and take three off the right side too, to keep it balanced. || x  =  1 1",
      "[step] Now x equals two small tiles, so the solution is 2. || x + 3 - 3 = 5 - 3\nx = 2"
    ]},

    { title: "What the Words Mean", s: [
      "Two operations are {{inverse operations}} when each one undoes the other, so addition and subtraction undo each other the way tying a shoe and untying it do.",
      "If you do the same inverse operation to each side of an equation, you get a new equation that has the same solution, and the two are called {{equivalent equations}}.",
      "That is the whole method: keep making equivalent equations until the letter stands alone.",
      "",
      "[walk] See the two rules for addition and subtraction equations.",
      "[step] Subtracting the same number from each side keeps the equation balanced. || " + table([["Subtraction Property of Equality", ""], ["Words", "Subtract the same number from each side and you get an equivalent equation."], ["Numbers", "If x + 3 = 5, then x + 3 - 3 = 5 - 3, or x = 2."], ["Algebra", "If x + a = b, then x + a - a = b - a, or x = b - a."]]),
      "[step] Adding the same number to each side works the same way. || " + table([["Addition Property of Equality", ""], ["Words", "Add the same number to each side and you get an equivalent equation."], ["Numbers", "If x - 3 = 5, then x - 3 + 3 = 5 + 3, or x = 8."], ["Algebra", "If x - a = b, then x - a + a = b + a, or x = b + a."]]),
      "",
      "Use subtraction to solve an addition equation, and addition to solve a subtraction equation, so the operation next to the letter is undone."
    ]},

    { title: "Example 1: Subtract to Solve", s: [
      "In n + 7 = -2, the 7 is added to the letter, so you undo it by subtracting 7, and you do that to both sides.",
      "Then put the answer back in to check it.",
      "",
      "[walk] Solve n + 7 = -2 and check the solution.",
      "[step] Write the original equation. || n + 7 = -2      original equation",
      "[step] Subtract 7 from each side. || n + 7 - 7 = -2 - 7      subtraction property of equality",
      "[step] Simplify, so the solution is -9. || n = -9      simplify",
      "[step] Check by putting -9 in for n. || Check: n + 7 = -2      original equation\n-9 + 7 =? -2      substitute -9 for n\n-2 = -2      the solution checks",
      "",
      "[walk] Try one: solve t + 5 = 16 and check the solution.",
      "[step] Subtract 5 from each side. || t + 5 = 16\nt + 5 - 5 = 16 - 5      subtraction property of equality\nt = 11      simplify",
      "[step] Check. || 11 + 5 =? 16\n16 = 16      the solution checks"
    ]},

    { title: "Example 2: Add to Solve", s: [
      "In w - 14 = 31, the 14 is subtracted from the letter, so you undo it by adding 14 to both sides.",
      "This time the letter is on the right side of the equal sign, and it works exactly the same way.",
      "",
      "[walk] Solve 31 = w - 14.",
      "[step] Write the original equation. || 31 = w - 14      original equation",
      "[step] Add 14 to each side. || 31 + 14 = w - 14 + 14      addition property of equality",
      "[step] Simplify, so the solution is 45. || 45 = w      simplify",
      "[step] Check by putting 45 in for w. || 31 =? 45 - 14\n31 = 31      the solution checks",
      "",
      "[walk] Try one: solve p - 9 = -5.",
      "[step] Add 9 to each side. || p - 9 = -5\np - 9 + 9 = -5 + 9      addition property of equality\np = 4      simplify",
      "[step] Check. || 4 - 9 =? -5\n-5 = -5      the solution checks"
    ]},

    { title: "Example 3: Weighing a Crate", s: [
      "Airfields weigh cargo on a scale that reads the weight of everything sitting on it.",
      "If you know what the empty trailer weighs and what the scale says with the crate on it, you can find the crate with a short equation.",
      "",
      "[walk] A baggage trailer weighs 1,240 pounds empty and the scale reads 2,865 pounds with a crate on it, so how much does the crate weigh?",
      "[step] Say it in words. || weight of crate + weight of trailer = combined weight",
      "[step] Let c be the weight of the crate, and put in the numbers. || c + 1,240 = 2,865      substitute into the verbal model",
      "[step] Subtract 1,240 from each side. || c + 1,240 - 1,240 = 2,865 - 1,240      subtraction property of equality",
      "[step] Simplify, so the crate weighs 1,625 pounds. || c = 1,625      simplify",
      "",
      "[walk] Try one: Sam weighs 163 pounds and the scale reads 189 pounds when he holds his flight bag, so how much does the bag weigh?",
      "[step] Let b be the weight of the bag. || b + 163 = 189      substitute into the verbal model",
      "[step] Subtract 163 from each side. || b + 163 - 163 = 189 - 163      subtraction property of equality\nb = 26      simplify, so the bag weighs 26 pounds"
    ]}
  ],

  words: [
    ["Inverse operations", "Two operations that undo each other, like addition and subtraction.", 7 /*kw:{{inverse operations}}*/],
    ["Equivalent equations", "Equations that have the same solution. Doing the same inverse operation to each side makes one.", 8 /*kw:{{equivalent equations}}*/],
    ["Subtraction property of equality", "Subtracting the same number from each side of an equation gives an equivalent equation.", 11 /*kw:Subtracting the same number from each side keeps*/],
    ["Addition property of equality", "Adding the same number to each side of an equation gives an equivalent equation.", 12 /*kw:Adding the same number to each side works*/],
    ["Solving for the variable", "Writing an equivalent equation with the letter by itself on one side.", 2 /*kw:solving for the variable*/],
  ],

  questions: [
    { tag: "Name It", q: "To solve x + 12 = 20, what do you do to both sides?",
      find: [13], /*kw:Use subtraction to solve an addition equation*/
      hint: "Undo the +12.",
      choices: ["Subtract 12", "Add 12", "Subtract 20", "Divide by 12"], right: 0 },

    { tag: "Name It", q: "To solve y - 8 = 3, what do you do to both sides?",
      find: [13], /*kw:Use subtraction to solve an addition equation*/
      hint: "Undo the -8.",
      choices: ["Add 8", "Subtract 8", "Add 3", "Multiply by 8"], right: 0 },

    { tag: "Use It", q: "Solve n + 9 = 4.",
      find: [18], /*kw:Subtract 7 from each side*/
      hint: "Subtract 9 from both sides: 4 - 9.",
      choices: ["-5", "13", "5", "-13"], right: 0 },

    { tag: "Careful", q: "Solve w - 7 = -2.",
      find: [28], /*kw:Add 14 to each side*/
      hint: "Add 7 to both sides: -2 + 7.",
      choices: ["5", "-9", "9", "-5"], right: 0 },

    { tag: "Use It", q: "Solve 15 = a - 6.",
      find: [25], /*kw:This time the letter is on the right*/
      hint: "The letter is on the right, but you still add 6 to both sides.",
      choices: ["21", "9", "-21", "15"], right: 0 },

    { tag: "Careful", q: "A student solved x + 4 = 10 by writing x + 4 - 4 = 10 + 4, so x = 14. What went wrong?",
      find: [1], /*kw:If you take something off one side only*/
      hint: "Whatever you do to one side, do to the other.",
      choices: [
        "He added 4 on the right instead of subtracting 4, so the two sides did not get the same thing.",
        "He should have added 4 on the left side.",
        "He should have subtracted 10 from both sides.",
        "Nothing, because x = 14 is right."
      ], right: 0 },

    { tag: "Use It", q: "An empty cargo cart weighs 340 pounds. Loaded, the scale reads 905 pounds. Which equation and answer give the weight of the load, w?",
      find: [37], /*kw:Say it in words*/
      hint: "Weight of load plus weight of cart equals the scale reading.",
      choices: ["w + 340 = 905, so w = 565", "w + 340 = 905, so w = 1,245", "w - 340 = 905, so w = 1,245", "w + 905 = 340, so w = -565"], right: 0 },

    { tag: "Name It", q: "Which property of equality do you use to solve x - 6 = 11?",
      find: [12], /*kw:Adding the same number to each side works*/
      hint: "x - 6 has a subtraction, so you undo it.",
      choices: ["The addition property", "The subtraction property", "The multiplication property", "The division property"], right: 0 }
  ],

  /* ⭐ YOUR TURN: a fresh problem in the same world, every step typed and checked. */
  work: [
    { title: "Weighing Sam's Plane Load",
      ask: "Sam's plane weighs 1,675 pounds empty. Loaded with Sam, his bag and fuel, the scale reads 2,310 pounds. Solve w + 1,675 = 2,310 for the weight of the load.",
      steps: [
        { ask: "What number do you subtract from both sides?", answer: 1675,
          hint: "Undo the number being added to w.",
          why: "w + 1,675 - 1,675 = 2,310 - 1,675." },
        { ask: "Now work out w. What is 2,310 minus 1,675?", answer: 635, calc: "2310-1675",
          hint: "Line up the digits and subtract.",
          why: "w = 635, so the load weighs 635 pounds." },
        { ask: "Check it. What is 635 plus 1,675?", answer: 2310, calc: "635+1675",
          hint: "Put 635 back in for w.",
          why: "635 + 1,675 = 2,310, which matches the scale." },
      ] },
  ],

  todo: { title: "What To Do Now", s: [
      "You watched three examples, each one line at a time with its reason, and tried one after each.",
      "First work through Your Turn below the reading, typing each step.",
      "Then come {c} word cards, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "If one is hard, go back to the example that matches it and read its lines again."
  ] }
};
