/* maths/simplifying-variable-expressions
   Grade 7 · maths · Pre-Algebra Chapter 2, Lesson 2.3.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-11-07. From McDougal Littell Pre-Algebra (California,
   2008) pp78-82, via the weeks 10-11 packet (paraphrased book notes, not the page itself).

   SHAPE COPIED FROM 2.1: plain English for each word, one labelled breakdown, the book's
   four examples IN THE BOOK'S ORDER (name the parts, simplify line by line, parentheses,
   write and simplify from a situation), one line per move with the reason on the right,
   a Try One after each. The book's calorie workout (jogging and swimming) became Sam's
   fuel truck with two hoses: same math, a fixed total split two ways, rate times time.
   ONE WORLD: Sam, a student pilot, at a small airfield.

   NO HOMEWORK SHEET this batch (Paul, 2026-11-07). The scored work is the 8 questions
   plus Your Turn. No `sheet` field, no visuals.

   ADDED FROM THE RECORD: nothing. A short Try One was added after Example 1 (the book has
   none there) because the plan asks for a Try One after every example.
   FOR THE REVIEW QUEUE: the 8 questions and Your Turn are mine; the wrong answers are the
   real mistakes (sign not flipped, a lone letter treated as having no coefficient). */
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
  id: "maths/simplifying-variable-expressions",
  slug: "simplifying-variable-expressions",
  title: "Simplifying Variable Expressions",
  unit: "Pre-Algebra &middot; 2.3",
  seq: { unit: 15, unitTitle: "Pre-Algebra: Solving Equations", n: 3 },
  natural: "2026-11-07",

  /* ── /teach-plan, 2026-11-07. ML Pre-Algebra 2008 pp78-82. ── */
  plan: {
    objective: "Name the terms, coefficients, constant terms and like terms of an expression, and simplify it by combining like terms (using the distributive property for parentheses).",
    markers: [
      "BOOK, definitions in order: term, coefficient, constant term, like terms, with 5x + 4x + 7 labelled.",
      "BOOK, 7x + 4x = (7 + 4)x = 11x: the like terms were combined and the expression simplified.",
      "BOOK, Examples 1 to 4, one line per step with the reason on the right, a Checkpoint after Examples 2 and 3.",
      "BOOK, error analysis (exercise 9): 5a - (3a - 7) wrongly becomes 2a - 7; the -7 must flip.",
    ],
    method: "ONE LINE PER MOVE, REASON ON THE RIGHT. Write subtraction as adding a negative, group the like terms, add their coefficients. A minus sign in front of parentheses is multiplying by -1, so it flips every sign inside.",
    exampleOnly: [
      "Sam the student pilot at a small airfield. WORLD: one airfield, our numbers.",
      "Left out on purpose: the book's jogging and swimming calories.",
    ],
    digitize: "Reading engine. The book's order: word meanings with a labelled breakdown, Examples 1-4 as walks with a Try One after each, 8 questions, one Your Turn. No homework sheet.",
    assumes: "Integers (done), the distributive property (2.2), the commutative property (2.1), evaluating an expression for a number.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Math",
    blurb: "Terms, coefficients and like terms, named in plain English. Then four worked examples show how to combine like terms, even with parentheses.",
    contains: [
      "What term, coefficient, constant and like terms mean",
      "A labelled breakdown of an expression",
      "Four worked examples, each with a Try One",
      "Combining like terms by adding the coefficients",
      "Handling a minus sign in front of parentheses",
      "Eight questions and a Your Turn problem",
    ] },
  eyebrow: ["Pre-Algebra", "2.3", "Solving Equations"],
  dek: "Like terms are like things, so you can add them, and that is how Sam shortens a long fuel expression.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "By the end of this lesson your student should be able to name the terms, coefficients, constants and like terms of an expression, and simplify it by combining like terms, including when there are parentheses."
      ]},
      { h: "Where Students Get Stuck", p: [
        "A minus sign in front of parentheses. The book's error-analysis question has a student turn 5a - (3a - 7) into 2a - 7, and the -7 must flip to +7, so the answer is 2a + 7.",
        "A letter with no number in front of it. The letter n alone is 1n, and -n is -1n, so n still counts when you combine.",
        "Combining terms that are not alike. 3x and 4 have different letter parts, so they stay separate."
      ]},
      { h: "Book Pages", p: [
        "McDougal Littell Pre-Algebra (2008), pages 78 to 82. Read free on archive.org: https://archive.org/details/prealgebra0000unse_z0p2/page/78/mode/1up"
      ]},
      { h: "Suggested Videos", videos: [
        { id: "eNv4fHb7OvU", title: "An Intro to Combining Like Terms | Simplifying Expressions by Combining Like Terms | Math with Mr. J", channel: "Math with Mr. J",
          why: "Covers terms, coefficients and like terms, the vocabulary the first half of this lesson teaches." },
        { id: "1MmhAq-XVN0", title: "Simplifying Algebraic Expressions | Distributive Property & Combining Like Terms | Math with Mr. J", channel: "Math with Mr. J",
          why: "Uses the distributive property and like terms together, the same as Example 3." },
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "What the Words Mean", s: [
      "An expression like 5x + 4x + 7 is made of pieces that are added together, and each piece is called a {{term}}.",
      "The number in front of a letter is its {{coefficient}}, so in 5x the coefficient is 5, and a number standing alone, like 7, is a {{constant term}}.",
      "Terms are {{like terms}} when their letter parts match, the way 5 gallons and 4 gallons are the same kind of thing and can be added, while 5 gallons and 7 hours cannot.",
      "",
      "[walk] See each part of 5x + 4x + 7 named.",
      "[step] The terms are the pieces being added. || " + table([["Term", "Letter part", "Coefficient"], ["5x", "x", "5"], ["4x", "x", "4"], ["7", "none", "none, so it's a constant"]]),
      "[step] 5x and 4x have the same letter part, so they are like terms. || like terms: 5x and 4x\nconstant term: 7",
      "",
      "A letter with no number in front of it still has a coefficient, because y is the same as 1y, and any number alone, like 7 or -3, is a constant, so two constants are like terms too."
    ]},

    { title: "Example 1: Naming the Parts", s: [
      "To name the parts of an expression with subtraction in it, first write it as a sum, because subtracting a number is the same as adding its opposite.",
      "That puts the sign on each term, so you can see exactly what the term is.",
      "",
      "[walk] Name the terms, like terms, coefficients and constant terms of m + 6 - 4m - 2.",
      "[step] Write the expression as a sum. || m + 6 - 4m - 2\n= m + 6 + (-4m) + (-2)      write as a sum",
      "[step] Each piece being added is a term. || terms: m, 6, -4m, -2",
      "[step] The terms with m are like terms, and so are the plain numbers. || like terms: m and -4m;  6 and -2",
      "[step] The letter m by itself is 1m, so its coefficient is 1. || coefficients: 1, -4",
      "[step] The numbers with no letter are the constants. || constant terms: 6, -2",
      "",
      "[walk] Try one: name the terms and the constants of 3a - 5 + a + 9.",
      "[step] Write it as a sum first. || 3a + (-5) + a + 9      write as a sum",
      "[step] Name the parts. || terms: 3a, -5, a, 9\nlike terms: 3a and a;  -5 and 9\ncoefficients: 3, 1\nconstant terms: -5, 9"
    ]},

    { title: "Combining Like Terms", s: [
      "When two terms are alike you can put them together into one term, and the distributive property is the reason that works.",
      "Seven x's and four x's make eleven x's, just as seven gallons and four gallons make eleven gallons.",
      "Putting like terms together is called combining them, and an expression with no parentheses and no like terms left to combine is {{simplified}}.",
      "",
      "[walk] Combine 7x + 4x.",
      "[step] Think of x as a common factor and use the distributive property backward. || 7x + 4x = (7 + 4)x      distributive property",
      "[step] Add the coefficients. || = 11x      simplify"
    ]},

    { title: "Example 2: Simplifying Line by Line", s: [
      "Now do the whole job with a longer expression, one move per line.",
      "You write it as a sum, move the like terms next to each other, give every lone letter its coefficient, and then combine.",
      "",
      "[walk] Simplify 6k - 5 - k + 8.",
      "[step] Write it as a sum. || 6k - 5 - k + 8\n= 6k + (-5) + (-k) + 8      write as a sum",
      "[step] Swap so the k terms sit together. || = 6k + (-k) + (-5) + 8      commutative property",
      "[step] The coefficient of -k is -1. || = 6k + (-1k) + (-5) + 8      -k is -1k",
      "[step] Add the coefficients with the distributive property. || = [6 + (-1)]k + (-5) + 8      distributive property",
      "[step] Simplify, so the answer is 5k + 3. || = 5k + 3      simplify",
      "",
      "[walk] Try one: simplify 9p + 3 - 4p - 7.",
      "[step] Write it as a sum. || 9p + 3 - 4p - 7\n= 9p + 3 + (-4p) + (-7)      write as a sum",
      "[step] Swap so the p terms sit together. || = 9p + (-4p) + 3 + (-7)      commutative property",
      "[step] Add the coefficients, and add the constants. || = 5p + (-4)      simplify\n= 5p - 4      definition of subtraction",
      "",
      "Once you have seen this a few times, there is a shortcut, which is to add the coefficients in your head and skip the middle lines.",
      "",
      "[walk] The shortcut: 6k + (-k) = 5k.",
      "[step] Add the coefficients, 6 and -1, in your head. || 6 + (-1) = 5, so 6k + (-k) = 5k"
    ]},

    { title: "Example 3: Parentheses", s: [
      "When there are parentheses, hand the number outside to each term inside first, and then combine like terms.",
      "A plain minus sign in front of parentheses is really multiplying by -1, so it changes the sign of every term inside.",
      "That one is the easiest to get wrong, so part c shows the -1 written out.",
      "",
      "[walk] Simplify 3(x - 2) + 5x + 4.",
      "[step] Hand the 3 to both terms. || 3(x - 2) + 5x + 4\n= 3x - 6 + 5x + 4      distributive property",
      "[step] Put the x terms together and the numbers together. || = 3x + 5x - 6 + 4      group like terms",
      "[step] Combine. || = 8x - 2      combine like terms",
      "",
      "[walk] Simplify 2k - 6(k + 3).",
      "[step] Think of it as 2k plus -6 times (k + 3), and hand the -6 to both terms. || 2k - 6(k + 3)\n= 2k - 6k - 18      distributive property",
      "[step] Combine the k terms. || = -4k - 18      combine like terms",
      "",
      "[walk] Simplify 7b - (7b - 2).",
      "[step] A minus sign in front of parentheses is multiplying by -1. || 7b - (7b - 2)\n= 7b - 1(7b - 2)      identity property",
      "[step] Hand the -1 to both terms, which flips both signs. || = 7b - 7b + 2      distributive property",
      "[step] Combine, because 7b - 7b is 0. || = 0 + 2      combine like terms",
      "[step] Simplify. || = 2      simplify",
      "",
      "[walk] Try one: simplify 5(y + 2) + 3y + 1, then 8m - 2(5 - m), then 6c + 1 - (c + 1).",
      "[step] Hand the 5 out, then combine. || 5(y + 2) + 3y + 1\n= 5y + 10 + 3y + 1      distributive property\n= 8y + 11      combine like terms",
      "[step] Hand the -2 to both terms, and -2 times -m is +2m. || 8m - 2(5 - m)\n= 8m - 10 + 2m      distributive property\n= 10m - 10      combine like terms",
      "[step] Write the minus as -1, hand it out, and combine. || 6c + 1 - (c + 1)\n= 6c + 1 - 1(c + 1)      identity property\n= 6c + 1 - c - 1      distributive property\n= 5c      combine like terms"
    ]},

    { title: "Example 4: Writing and Simplifying", s: [
      "Sometimes you build the expression yourself from a real situation, and then simplify it.",
      "Sam's fuel truck has two hoses, and it pumps a different number of gallons each minute through each one.",
      "If it runs a fixed number of minutes in all, then the minutes on the big hose and the minutes on the small hose have to add up to that total.",
      "",
      "[walk] The truck pumps 12 gallons a minute through the big hose and 7 through the small hose for 40 minutes in all, so let j be the minutes on the big hose.",
      "[step] The small hose runs the rest of the 40 minutes. || minutes on the small hose = 40 - j",
      "[step] Gallons pumped is the rate times the minutes, for each hose. || gallons = (12)(j) + (7)(40 - j)\n= 12j + 7(40 - j)",
      "[step] Hand the 7 to both terms. || = 12j + 280 - 7j      distributive property",
      "[step] Put the j terms together. || = 12j - 7j + 280      group like terms",
      "[step] Combine, so the truck pumps 5j + 280 gallons. || = 5j + 280      combine like terms",
      "[step] Now find the gallons if the big hose runs 30 minutes, so j is 30. || 5j + 280 = 5(30) + 280\n= 150 + 280\n= 430 gallons      multiply, then add",
      "",
      "[walk] Try one: another truck pumps 15 and 6 gallons a minute for 30 minutes in all, so write and simplify the gallons, then find it for j = 10.",
      "[step] The small hose runs 30 - j minutes. || gallons = 15j + 6(30 - j)",
      "[step] Hand out the 6, then combine. || = 15j + 180 - 6j      distributive property\n= 9j + 180      combine like terms",
      "[step] Put in 10 for j. || 9(10) + 180 = 90 + 180 = 270 gallons"
    ]}
  ],

  words: [
    ["Term", "One piece of an expression that is added to the others, like 5x or 7 in 5x + 4x + 7.", 0 /*kw:{{term}}*/],
    ["Coefficient", "The number in front of a letter. In 5x the coefficient is 5, and in y it is 1.", 1 /*kw:{{coefficient}}*/],
    ["Constant term", "A term that is just a number, with no letter, like 7.", 1 /*kw:{{constant term}}*/],
    ["Like terms", "Terms with the same letter part, like 5x and 4x. Two constants are like terms too.", 2 /*kw:{{like terms}}*/],
    ["Simplified", "An expression with no parentheses and all its like terms combined.", 20 /*kw:{{simplified}}*/],
  ],

  questions: [
    { tag: "Name It", q: "What is the coefficient of y in 8 - 3y + 1?",
      find: [1], /*kw:The number in front of a letter*/
      hint: "Look at the number sitting in front of the y, sign included.",
      choices: ["-3", "3", "1", "8"], right: 0 },

    { tag: "Name It", q: "Which two terms are like terms?",
      find: [2], /*kw:Terms are {{like terms}}*/
      hint: "Like terms have the same letter part.",
      choices: ["7n and -2n", "7n and 7", "7n and 2m", "7 and n"], right: 0 },

    { tag: "Use It", q: "Simplify 5a + 2 + 3a - 7.",
      find: [48], /*kw:Combine the k terms*/
      hint: "Add the a terms, and add the plain numbers.",
      choices: ["8a - 5", "8a + 5", "15a", "3a - 5"], right: 0 },

    { tag: "Careful", q: "Simplify 6n - n + 4.",
      find: [6], /*kw:A letter with no number in front*/
      hint: "A lone n is 1n, so -n is -1n.",
      choices: ["5n + 4", "6n + 4", "7n + 4", "5n - 4"], right: 0 },

    { tag: "Use It", q: "Simplify 4(x + 3) + 2x.",
      find: [43], /*kw:Hand the 3 to both terms*/
      hint: "Hand the 4 to both terms first, then combine.",
      choices: ["6x + 12", "6x + 3", "6x + 7", "7x + 12"], right: 0 },

    { tag: "Careful", q: "Simplify 9 - 2(3 - m).",
      find: [56], /*kw:Hand the -2 to both terms*/
      hint: "Hand the -2 to both terms, and -2 times -m is +2m.",
      choices: ["3 + 2m", "3 - 2m", "15 - 2m", "21 - 7m"], right: 0 },

    { tag: "Careful", q: "A student simplified 6a - (2a - 5) and got 4a - 5. What went wrong?",
      find: [40], /*kw:A plain minus sign in front of parentheses*/
      hint: "The minus sign multiplies by -1, and -1 times -5 is not -5.",
      choices: [
        "The minus sign should have flipped the -5 to +5, so the answer is 4a + 5.",
        "The 6a and the 2a should have been added.",
        "The parentheses should have been dropped with no change to the signs.",
        "Nothing, because 4a - 5 is right."
      ], right: 0 },

    { tag: "Use It", q: "The fuel truck pumps 10 gallons a minute through the big hose for j minutes and 4 gallons a minute through the small hose for 30 - j minutes. What is the simplified total?",
      find: [66], /*kw:Combine, so the truck pumps*/
      hint: "Write 10j + 4(30 - j), hand out the 4, and combine.",
      choices: ["6j + 120", "14j + 120", "6j + 30", "14j - 120"], right: 0 }
  ],

  /* ⭐ YOUR TURN: a fresh problem in the same world, every step typed and checked. */
  work: [
    { title: "Shortening the Fuel Notes",
      ask: "Sam writes 4(x + 2) + 3x - 5 in his fuel notes. Simplify it one move at a time, then find its value when x is 2.",
      steps: [
        { ask: "Hand the 4 to the 2 inside the parentheses. What number term do you get?", answer: 8, calc: "4*2",
          hint: "4 times 2.",
          why: "4(x + 2) becomes 4x + 8, so the line is 4x + 8 + 3x - 5." },
        { ask: "Combine the x terms. What is the new coefficient of x? (4 plus 3)", answer: 7, calc: "4+3",
          hint: "Add the coefficients 4 and 3.",
          why: "4x + 3x = 7x." },
        { ask: "Combine the plain numbers, 8 and -5. What do you get?", answer: 3, calc: "8-5",
          hint: "8 minus 5.",
          why: "8 + (-5) = 3, so the simplified expression is 7x + 3." },
        { ask: "Now put 2 in for x in 7x + 3. What is the value?", answer: 17, calc: "7*2+3",
          hint: "7 times 2, then add 3.",
          why: "7(2) + 3 = 14 + 3 = 17." },
      ] },
  ],

  todo: { title: "What To Do Now", s: [
      "You watched four examples, each one line at a time with its reason, and tried one after each.",
      "First work through Your Turn below the reading, typing each step.",
      "Then come {c} word cards, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "If one is hard, go back to the example that matches it and read its lines again."
  ] }
};
