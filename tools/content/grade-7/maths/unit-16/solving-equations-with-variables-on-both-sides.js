/* maths/solving-equations-with-variables-on-both-sides
   Grade 7 · maths · Pre-Algebra Chapter 3, Lesson 3.3.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-11-22. From McDougal Littell Pre-Algebra (California,
   2008) pp130-135 (tile activity on 130), via the week 12 packet (paraphrased book notes,
   not the page itself). Book facts are the book's; the practice numbers are ours.

   SHAPE COPIED FROM 3.1 and 3.2: plain English first, the tile picture of 4x + 6 = 10 + 2x
   told as a work line, the book's examples in the book's order (7n - 5 = 10n + 13, the
   Spanish club bus 10s = 5s + 60, 5(2x + 1) = 10x with no solution, 6x + 2 = 2(3x + 1)
   with every number), one line per move with the reason on the right, a Try One after
   each. The book's "Another Way" (subtract either variable term first) is one short walk.
   ONE WORLD: the Spanish club and a ride-plan comparison, our numbers.

   NO HOMEWORK SHEET (no `sheet` field), no visuals.

   ADDED FROM THE RECORD: "true statement" and "false statement" taught plainly, and the
   recap of 3.1 and 3.2.
   FOR THE REVIEW QUEUE: the 8 questions and Your Turn are mine; the wrong answers are the
   real mistakes (moving the wrong term, dropping a sign, mixing up no solution and every
   number). */
'use strict';

module.exports = {
  id: "maths/solving-equations-with-variables-on-both-sides",
  slug: "solving-equations-with-variables-on-both-sides",
  title: "Solving Equations with Variables on Both Sides",
  unit: "Pre-Algebra &middot; 3.3",
  seq: { unit: 16, unitTitle: "Pre-Algebra: Multi-Step Equations and Inequalities", n: 3 },
  natural: "2026-11-22",

  /* ── /teach-plan, 2026-11-22. ML Pre-Algebra 2008 pp130-135. ── */
  plan: {
    objective: "Solve an equation with the variable on both sides by moving all variable terms to one side, and recognize no solution and every number.",
    markers: [
      "BOOK: \"get the variable terms on one side of the equation and the constant terms on the other side.\"",
      "BOOK: \"you may find that it has no solution or that every number is a solution.\"",
      "BOOK, p130 tile activity: 4x + 6 = 10 + 2x, take two x tiles and six 1 tiles off each side, then split.",
      "BOOK, \"Another Way\": subtracting either variable term first gives the same answer.",
    ],
    method: "Subtract the smaller variable term from both sides, and what is left is a two-step equation. A false statement like 5 = 0 means no solution; a true statement like 6x + 2 = 6x + 2 means every number is a solution.",
    exampleOnly: [
      "Spanish club bus, DVDs, toll tags, ride plans. WORLD: the Spanish club and a ride plan, our numbers.",
    ],
    digitize: "Reading engine. Walks for 7n - 5 = 10n + 13, 10s = 5s + 60, 5(2x + 1) = 10x (no solution) and 6x + 2 = 2(3x + 1) (every number), each with a Try One. 8 questions with one for each special case, one Your Turn.",
    assumes: "Two-step equations and distributing (3.1, 3.2, recapped), \"a statement is true or false\" (taught plainly).",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Math",
    blurb: "When the letter shows up on both sides, move it to one side and solve. Two special cases have no answer at all, or every answer.",
    contains: [
      "The tile picture of 4x + 6 = 10 + 2x",
      "Moving the variable terms to one side",
      "A bus-fare problem from the Spanish club",
      "No solution: when you end up with a false statement",
      "Every number: when you end up with a true statement",
      "Eight questions and a Your Turn problem",
    ] },
  eyebrow: ["Pre-Algebra", "3.3", "Multi-Step Equations"],
  dek: "When the letter is on both sides, you gather it on one side first, and sometimes the answer turns out to be nothing, or everything.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "By the end of this lesson your student should be able to solve an equation like 7n - 5 = 10n + 13 by getting the variable terms on one side and the numbers on the other, and tell when an equation has no solution or every number as a solution."
      ]},
      { h: "Where Students Get Stuck", p: [
        "Mixing up the two special cases. A false statement, like 5 = 0, means no solution. A true statement, like 6x + 2 = 6x + 2, means every number is a solution.",
        "Dropping a sign when moving a negative term, as in 4x + 7 = x - 2, which gives 3x = -9 and x = -3.",
        "Moving only one term. Whatever you subtract from the left side you subtract from the right side too."
      ]},
      { h: "Book Pages", p: [
        "McDougal Littell Pre-Algebra (2008), the tile activity on page 130 and the lesson on pages 131 to 135. Read free on archive.org: https://archive.org/details/prealgebra0000unse_z0p2/page/131/mode/1up"
      ]},
      { h: "Suggested Videos", videos: [
        { id: "CGS0vihzSlc", title: "Example 1: Variables on both sides | Linear equations | Algebra I | Khan Academy", channel: "Khan Academy",
          why: "Moves the variable terms to one side, the same method as this page. It may not show the no-solution and every-number cases." },
        { id: "SA0RVTWtDFI", title: "Solving Equations with Variables on Both Sides | Lesson", channel: "Clopensets",
          why: "A second explanation of the same skill, with more worked problems." },
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  video: { id: "CGS0vihzSlc", title: "Example 1: Variables on both sides | Linear equations | Algebra I | Khan Academy", channel: "Khan Academy",
    why: "Moves the variable terms to one side, the same method as this page. It may not show the no-solution and every-number cases." },

  parts: [
    { title: "A Letter on Both Sides", s: [
      "So far the letter has been on one side only, like 3x + 7 = -5, and the other side was just a number.",
      "Now look at 7n - 5 = 10n + 13, where there's an n on the left and an n on the right.",
      "You can't undo two of them at once, so the plan is to get all the n terms on one side and all the plain numbers on the other.",
      "Once the n terms are together, you're back to a two-step equation like the ones in the last two lessons."
    ]},

    { title: "A Picture With Tiles", s: [
      "The book starts with tiles again, where an x tile is the mystery number and a 1 tile is just one.",
      "",
      "[walk] Solve 4x + 6 = 10 + 2x with tiles.",
      "[step] Show both sides, four x tiles and six 1 tiles on the left, ten 1 tiles and two x tiles on the right. || x x x x 1 1 1 1 1 1  =  1 1 1 1 1 1 1 1 1 1 x x",
      "[step] Take two x tiles off each side, so the x tiles are only on the left. || x x 1 1 1 1 1 1  =  1 1 1 1 1 1 1 1 1 1\n4x - 2x + 6 = 10 + 2x - 2x",
      "[step] Take six 1 tiles off each side, so the left has only x tiles. || x x  =  1 1 1 1\n2x = 4",
      "[step] Split what is left into two equal groups, and one x tile equals two 1 tiles. || (x) = (1 1)\nx = 2"
    ]},

    { title: "Example 1: Move the Letter", s: [
      "In 7n - 5 = 10n + 13, you start by getting rid of one of the n terms.",
      "Subtract the smaller one, 7n, from both sides, and the n terms end up on the right side, with a positive number in front.",
      "",
      "[walk] Solve 7n - 5 = 10n + 13.",
      "[step] Write the original equation. || 7n - 5 = 10n + 13      original equation",
      "[step] Subtract 7n from each side, so the n terms are on one side. || 7n - 5 - 7n = 10n + 13 - 7n      subtract 7n from each side\n-5 = 3n + 13      simplify",
      "[step] Subtract 13 from each side, because that undoes the adding. || -5 - 13 = 3n + 13 - 13      subtract 13 from each side\n-18 = 3n      simplify",
      "[step] Divide each side by 3, so the solution is -6. || -18/3 = 3n/3      divide each side by 3\n-6 = n      simplify",
      "[step] Check by putting -6 in for n on both sides. || 7(-6) - 5 =? 10(-6) + 13\n-42 - 5 = -60 + 13\n-47 = -47      the solution checks",
      "",
      "[walk] Try one: solve 5x + 3 = 3x + 11.",
      "[step] Subtract 3x from each side. || 5x + 3 = 3x + 11\n5x + 3 - 3x = 3x + 11 - 3x      subtract 3x from each side\n2x + 3 = 11      simplify",
      "[step] Subtract 3 from each side, then divide by 2. || 2x = 8      subtract 3 from each side\nx = 4      divide each side by 2"
    ]},

    { title: "Another Way", s: [
      "The book points out that you could have subtracted 10n instead of 7n and you would get the same answer.",
      "That way the n terms end up on the left, and you get a negative number in front of the n, so it's a little harder to keep track of the signs.",
      "",
      "[walk] Solve 7n - 5 = 10n + 13 again, subtracting 10n first.",
      "[step] Subtract 10n from each side, and 7n minus 10n is -3n. || 7n - 5 - 10n = 10n + 13 - 10n      subtract 10n from each side\n-3n - 5 = 13      simplify",
      "[step] Add 5 to each side, then divide by -3, and a positive divided by a negative is negative. || -3n = 18      add 5 to each side\nn = -6      divide each side by -3, the same answer"
    ]},

    { title: "Example 2: The Spanish Club Bus", s: [
      "The Spanish club rents a bus for $60, and the cost is shared by everyone who signs up.",
      "There's also a buffet that costs $5 per student, and the club wants the whole trip to cost each student only $10.",
      "Let s be the number of students, so 10s is what the students pay together, and the buffet and the bus add up to 5s + 60.",
      "",
      "[walk] How many students must sign up so the cost is $10 each?",
      "[step] Write the verbal model, what the students pay equals the buffet plus the bus. || 10 × s = (5 × s) + 60\n10s = 5s + 60      let s be the number of students",
      "[step] Subtract 5s from each side, so the letter is on one side only. || 10s - 5s = 5s + 60 - 5s      subtract 5s from each side\n5s = 60      simplify",
      "[step] Divide each side by 5, so 12 students must sign up. || 5s/5 = 60/5      divide each side by 5\ns = 12      simplify",
      "",
      "[walk] Try one: Plan A costs $10 plus $2 a ride, and Plan B costs $4 plus $3 a ride, so after how many rides do they cost the same?",
      "[step] Write the equation and subtract 2r from each side. || 10 + 2r = 4 + 3r      let r be the number of rides\n10 = 4 + r      subtract 2r from each side",
      "[step] Subtract 4 from each side, so they cost the same after 6 rides. || 6 = r      subtract 4 from each side\nBoth plans cost $22 for 6 rides."
    ]},

    { title: "True or False at the End", s: [
      "Sometimes you do all the right steps and the letter disappears.",
      "What's left is a statement with only numbers, and a statement like that is either true or false.",
      "A statement like 5 = 5 is true, and a statement like 5 = 0 is false, because 5 is never equal to 0.",
      "False means no value of the letter will ever work, so the equation has no solution; true means every value works, so every number is a solution.",
      "",
      "[walk] See the two special endings side by side.",
      "[step] A false statement at the end means the equation has no solution. || 5 = 0      false, so no solution",
      "[step] A true statement at the end means every number is a solution. || 6x + 2 = 6x + 2      true for every x, so every number is a solution"
    ]},

    { title: "Example 3: No Solution", s: [
      "In 5(2x + 1) = 10x, you distribute first, and the left side becomes 10x + 5.",
      "Now think about it for a second: 10x can never equal 5 more than itself.",
      "",
      "[walk] Solve 5(2x + 1) = 10x.",
      "[step] Distribute the 5 to both terms. || 5(2x + 1) = 10x      original equation\n10x + 5 = 10x      distributive property",
      "[step] Subtract 10x from each side. || 10x + 5 - 10x = 10x - 10x      subtract 10x from each side",
      "[step] The letter is gone, and what's left is 5 = 0, which is false, so there is no solution. || 5 = 0      false statement, so no solution",
      "",
      "[walk] Try one: solve 3x + 7 = 3x - 2.",
      "[step] Subtract 3x from each side. || 3x + 7 - 3x = 3x - 2 - 3x      subtract 3x from each side",
      "[step] What's left is 7 = -2, which is false, so there is no solution. || 7 = -2      false statement, so no solution"
    ]},

    { title: "Example 4: Every Number", s: [
      "In 6x + 2 = 2(3x + 1), you distribute the 2 on the right, and both sides turn out to be exactly the same.",
      "",
      "[walk] Solve 6x + 2 = 2(3x + 1).",
      "[step] Distribute the 2 to both terms. || 6x + 2 = 2(3x + 1)      original equation\n6x + 2 = 6x + 2      distributive property",
      "[step] Both sides match, so the statement is true no matter what x is, which means every number is a solution. || 6x + 2 = 6x + 2      true statement, so every number is a solution",
      "",
      "[walk] Try one: solve 2(x + 4) = 2x + 8.",
      "[step] Distribute the 2 on the left. || 2(x + 4) = 2x + 8\n2x + 8 = 2x + 8      distributive property",
      "[step] Both sides match, so every number is a solution. || 2x + 8 = 2x + 8      true statement, so every number is a solution"
    ]}
  ],

  words: [
    ["Variable on both sides", "An equation with the letter on the left and on the right, so you move the letter terms to one side first.", 1 /*kw:an n on the left and an n on the right*/],
    ["No solution", "No number makes the equation true. You find out when the letter disappears and you are left with a false statement like 5 = 0.", 39 /*kw:no solution*/],
    ["Every number is a solution", "Every number makes the equation true. You find out when the letter disappears and you are left with a true statement like 6x + 2 = 6x + 2.", 39 /*kw:every number is a solution*/],
    ["True statement", "A statement that is correct, like 5 = 5.", 38 /*kw:5 = 5 is true*/],
  ],

  questions: [
    { tag: "Name It", q: "In 5x + 3 = 3x + 11, which move gets the x terms on one side?",
      find: [2], /*kw:get all the n terms on one side*/
      hint: "Remove the smaller x term from both sides.",
      choices: ["Subtract 3x from both sides", "Subtract 5x from the left side only", "Add 3x to both sides", "Subtract 3 from both sides"], right: 0 },

    { tag: "Use It", q: "Solve 7n - 4 = 3n + 12.",
      find: [14], /*kw:Subtract 7n from each side*/
      hint: "Subtract 3n, add 4, then divide by 4.",
      choices: ["4", "2", "-4", "16"], right: 0 },

    { tag: "Careful", q: "Solve 9 - 2y = y - 6.",
      find: [14], /*kw:Subtract 7n from each side*/
      hint: "Add 2y to both sides, so you get 9 = 3y - 6.",
      choices: ["5", "-5", "1", "15"], right: 0 },

    { tag: "Use It", q: "Solve 4(x + 1) = 2x + 10.",
      find: [46], /*kw:Subtract 7n from each side*/
      hint: "Distribute the 4 first, then subtract 2x from both sides.",
      choices: ["3", "7", "1.5", "-3"], right: 0 },

    { tag: "Careful", q: "Solve 3x + 7 = 3x - 2.",
      find: [51], /*kw:7 = -2, which is false*/
      hint: "Subtract 3x from both sides and see what's left.",
      choices: ["No solution", "x = 0", "Every number is a solution", "x = 9"], right: 0 },

    { tag: "Careful", q: "Solve 2(x + 4) = 2x + 8.",
      find: [58], /*kw:every number is a solution*/
      hint: "Distribute the 2 and compare the two sides.",
      choices: ["Every number is a solution", "No solution", "x = 0", "x = 4"], right: 0 },

    { tag: "Careful", q: "Solve -6w + 5 = 2w - 11.",
      find: [14], /*kw:Subtract 7n from each side*/
      hint: "Add 6w to both sides, then add 11, then divide by 8.",
      choices: ["2", "-2", "0.5", "16"], right: 0 },

    { tag: "Use It", q: "Plan A costs $10 plus $2 a ride, and Plan B costs $4 plus $3 a ride. After how many rides do they cost the same?",
      find: [35], /*kw:so they cost the same after 6 rides*/
      hint: "Write 10 + 2r = 4 + 3r and solve for r.",
      choices: ["6 rides", "14 rides", "1.2 rides", "3 rides"], right: 0 }
  ],

  /* ⭐ YOUR TURN: a fresh problem, every step typed and checked. */
  work: [
    { title: "Move the Letter",
      ask: "Solve 6n - 8 = 2n + 12.",
      steps: [
        { ask: "Subtract the smaller term, 2n, from both sides. What is 6n minus 2n, in terms of n? Type the number in front of n.", answer: 4, calc: "6-2",
          hint: "6 minus 2.",
          why: "6n - 2n = 4n, so the equation is now 4n - 8 = 12." },
        { ask: "What number do you add to both sides to undo the minus 8?", answer: 8,
          hint: "Undo the subtracting.",
          why: "Add 8 to each side." },
        { ask: "What is 12 plus 8?", answer: 20, calc: "12+8",
          hint: "Add the numbers on the right side.",
          why: "4n = 20." },
        { ask: "Divide 20 by 4 to find n.", answer: 5, calc: "20/4",
          hint: "How many 4s fit in 20?",
          why: "n = 5." },
        { ask: "Check it. What is 6 times 5 minus 8? It should match 2 times 5 plus 12.", answer: 22, calc: "6*5-8",
          hint: "Put 5 in for n on the left side.",
          why: "6(5) - 8 = 22, and 2(5) + 12 = 22, so both sides match." },
      ] },
  ],

  todo: { title: "What To Do Now", s: [
      "You watched four examples and a second way to do the first one, each one line at a time with its reason, and tried one after each.",
      "First work through Your Turn below the reading, typing each step.",
      "Then come {c} word cards, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "If one is hard, go back to the example that matches it and read its lines again."
  ] }
};
