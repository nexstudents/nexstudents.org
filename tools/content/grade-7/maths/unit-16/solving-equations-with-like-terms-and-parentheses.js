/* maths/solving-equations-with-like-terms-and-parentheses
   Grade 7 · maths · Pre-Algebra Chapter 3, Lesson 3.2.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-11-22. From McDougal Littell Pre-Algebra (California,
   2008) pp125-129, via the week 12 packet (paraphrased book notes, not the page itself).
   Book facts are the book's; the practice numbers are ours.

   SHAPE COPIED FROM 3.1: plain English first, the book's examples in the book's order
   (the cheerleaders' budget with like terms, -3(8-4x) = 12, 5x - 2(x - 1) = 8), one line
   per move with the reason on the right, a Try One after each, the book's Error Analysis
   (-2(5 - n) = 2 written as 10 - 2n = 2) as its own walk and a question. ONE WORLD: the
   cheerleaders' pompom and banner budget.

   NO HOMEWORK SHEET (no `sheet` field), no visuals.

   ADDED FROM THE RECORD: the two-line recaps of the distributive property and like terms.
   FOR THE REVIEW QUEUE: the 8 questions and Your Turn are mine; the wrong answers are the
   real mistakes (the negative reaching only one term, forgetting to distribute, skipping
   the combine step). */
'use strict';

module.exports = {
  id: "maths/solving-equations-with-like-terms-and-parentheses",
  slug: "solving-equations-with-like-terms-and-parentheses",
  title: "Solving Equations with Like Terms and Parentheses",
  unit: "Pre-Algebra &middot; 3.2",
  seq: { unit: 16, unitTitle: "Pre-Algebra: Multi-Step Equations and Inequalities", n: 2 },
  natural: "2026-11-22",

  /* ── /teach-plan, 2026-11-22. ML Pre-Algebra 2008 pp125-129. ── */
  plan: {
    objective: "Solve an equation by distributing, combining like terms, then solving the two-step equation that is left.",
    markers: [
      "BOOK: \"You can use the distributive property to solve equations involving parentheses.\"",
      "BOOK, Error Analysis Ex.10: -2(5 - n) = 2 written as 10 - 2n = 2, the negative sign missed the second term.",
    ],
    method: "THE ORDER: distribute, combine like terms on each side, undo the adding or subtracting, undo the multiplying or dividing, check. Name the mistake: a negative outside the parentheses goes to BOTH terms inside.",
    exampleOnly: [
      "Pompoms and a banner, fishing rods, karaoke, rectangle sizes. WORLD: the cheerleaders' budget, our numbers.",
    ],
    digitize: "Reading engine. Walks for 5.20n + 0.80n + 47 = 377, -3(8 - 4x) = 12, 5x - 2(x - 1) = 8 and the error spot, each with a Try One. 8 questions, one Your Turn that starts with the distribute step. One question is the sign mistake.",
    assumes: "The distributive property and like terms (2.2, 2.3, recapped), two-step equations (3.1).",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Math",
    blurb: "Clear the parentheses, combine the like terms, and what is left is a two-step equation you already know how to solve.",
    contains: [
      "A two-line recap of the distributive property and like terms",
      "A budget problem that needs like terms combined",
      "Distributing a negative number, and the sign mistake to avoid",
      "Distributing, then combining, then solving",
      "Eight questions and a Your Turn problem",
    ] },
  eyebrow: ["Pre-Algebra", "3.2", "Multi-Step Equations"],
  dek: "Clear the parentheses, gather the like terms, and a messy equation turns into one you already know.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "By the end of this lesson your student should be able to solve an equation like -3(8 - 4x) = 12 or 5x - 2(x - 1) = 8 by distributing, combining like terms, and then undoing the adding and the multiplying, and check the answer."
      ]},
      { h: "Where Students Get Stuck", p: [
        "The negative outside the parentheses reaching only one term. In -2(5 - n) the -2 multiplies both the 5 and the -n, so the result is -10 + 2n. The book's Error Analysis shows 10 - 2n, which is wrong.",
        "Forgetting to combine like terms before moving anything across, so there are two x terms on one side.",
        "Skipping the check. Putting the answer back into the original equation catches a sign mistake right away."
      ]},
      { h: "Book Pages", p: [
        "McDougal Littell Pre-Algebra (2008), pages 125 to 129. Read free on archive.org: https://archive.org/details/prealgebra0000unse_z0p2/page/125/mode/1up"
      ]},
      { h: "Suggested Videos", videos: [
        { id: "YZBStgZGyDY", title: "Solving equations with the distributive property | Linear equations | Algebra I | Khan Academy", channel: "Khan Academy",
          why: "Same skill in the same order: distribute first, then solve the two-step equation that is left." },
        { id: "tuVd355R-OQ", title: "Example: two-step equations | Khan Academy", channel: "Khan Academy",
          why: "A second angle, with combining like terms and the distributive property in the examples." },
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  video: { id: "YZBStgZGyDY", title: "Solving equations with the distributive property | Linear equations | Algebra I | Khan Academy", channel: "Khan Academy",
    why: "Same skill in the same order: distribute first, then solve the two-step equation that is left." },

  parts: [
    { title: "Two Tools You Already Have", s: [
      "You have two tools from earlier in this chapter, and this lesson puts them together with the two-step equations from last time.",
      "The first is the distributive property, which says that a number outside parentheses multiplies every term inside, so 3(x + 4) becomes 3x + 12.",
      "The second is combining like terms, which means adding the pieces that have the same letter, so 2x + 5x is 7x, and plain numbers combine with plain numbers.",
      "Put them together, and any equation with parentheses can be cleaned up into a two-step equation."
    ]},

    { title: "The Order, Every Time", s: [
      "Here is the order you will use on every problem in this lesson.",
      "First distribute to get rid of the parentheses, then combine the like terms on each side, then undo the adding or subtracting, then undo the multiplying or dividing, and last put your answer back in to check.",
      "It's the same two-step plan as before, with a cleanup step at the front."
    ]},

    { title: "Example 1: The Cheerleaders' Budget", s: [
      "The cheerleaders are buying a $47 banner, plus the same number of pompoms and noisemakers, and their whole budget is $377.",
      "A pompom costs $5.20, a noisemaker costs $0.80, and we want to know how many of each they can buy.",
      "Let n be the number of each one, and the cost of the pompoms is 5.20n, the cost of the noisemakers is 0.80n, and the banner is $47.",
      "",
      "[walk] Solve 5.20n + 0.80n + 47 = 377.",
      "[step] Write the equation from the budget. || 5.20n + 0.80n + 47 = 377      original equation",
      "[step] Combine like terms, because 5.20n and 0.80n both have n, and together they make 6n. || 6n + 47 = 377      combine like terms",
      "[step] Subtract 47 from each side, because that undoes the adding. || 6n + 47 - 47 = 377 - 47      subtract 47 from each side\n6n = 330      simplify",
      "[step] Divide each side by 6. || 6n/6 = 330/6      divide each side by 6",
      "[step] Simplify, so they can buy 55 of each. || n = 55      simplify",
      "",
      "[walk] Try one: a sign costs $12, a flag costs $3.50 and a button costs $1.50, and a club buys the same number of flags and buttons with $72, so how many of each?",
      "[step] Write the equation and combine the like terms. || 12 + 3.50n + 1.50n = 72\n12 + 5n = 72      combine like terms",
      "[step] Subtract 12 from each side, then divide by 5. || 5n = 60      subtract 12 from each side\nn = 12      divide each side by 5"
    ]},

    { title: "Example 2: A Negative Outside the Parentheses", s: [
      "In -3(8 - 4x) = 12, the number outside is negative 3, and it has to multiply both terms inside the parentheses.",
      "That means -3 times 8 is -24, and -3 times -4x is positive 12x, because a negative times a negative is positive.",
      "",
      "[walk] Solve -3(8 - 4x) = 12.",
      "[step] Write the original equation. || -3(8 - 4x) = 12      original equation",
      "[step] Distribute the -3 to both terms. || -24 + 12x = 12      distributive property",
      "[step] Add 24 to each side, because that undoes the subtracting. || -24 + 12x + 24 = 12 + 24      add 24 to each side\n12x = 36      simplify",
      "[step] Divide each side by 12. || 12x/12 = 36/12      divide each side by 12",
      "[step] Simplify, so the solution is 3. || x = 3      simplify",
      "[step] Check by putting 3 in for x. || -3(8 - 4(3)) =? 12\n-3(8 - 12) = -3(-4)\n12 = 12      the solution checks",
      "",
      "[walk] Try one: solve 3(2m - 4) = 18.",
      "[step] Distribute the 3 to both terms. || 3(2m - 4) = 18\n6m - 12 = 18      distributive property",
      "[step] Add 12 to each side, then divide by 6. || 6m = 30      add 12 to each side\nm = 5      divide each side by 6"
    ]},

    { title: "Spot the Mistake", s: [
      "A student solved -2(5 - n) = 2 and wrote 10 - 2n = 2 on the first line, which looks fine until you check it.",
      "The -2 went to the 5, but it never reached the -n, so the sign on the n is wrong.",
      "When there is a negative outside the parentheses, it goes to both terms, and that is the mistake to watch for every time.",
      "",
      "[walk] Fix it: solve -2(5 - n) = 2 the right way.",
      "[step] Distribute the -2 to both terms, and -2 times -n is positive 2n. || -2(5 - n) = 2      original equation\n-10 + 2n = 2      distributive property",
      "[step] Add 10 to each side, because that undoes the subtracting. || -10 + 2n + 10 = 2 + 10      add 10 to each side\n2n = 12      simplify",
      "[step] Divide each side by 2, so the solution is 6. || 2n/2 = 12/2      divide each side by 2\nn = 6      simplify"
    ]},

    { title: "Example 3: Distribute, Then Combine", s: [
      "Now one that needs both tools, 5x - 2(x - 1) = 8, where the parentheses are in the middle of the equation.",
      "The minus sign in front of the 2 comes along with it, so -2 times x is -2x, and -2 times -1 is positive 2.",
      "After that you have two x terms on the left, and you combine them.",
      "",
      "[walk] Solve 5x - 2(x - 1) = 8.",
      "[step] Write the original equation. || 5x - 2(x - 1) = 8      original equation",
      "[step] Distribute the -2 to both terms inside the parentheses. || 5x - 2x + 2 = 8      distributive property",
      "[step] Combine like terms, because 5x minus 2x is 3x. || 3x + 2 = 8      combine like terms",
      "[step] Subtract 2 from each side. || 3x + 2 - 2 = 8 - 2      subtract 2 from each side\n3x = 6      simplify",
      "[step] Divide each side by 3, so the solution is 2. || 3x/3 = 6/3      divide each side by 3\nx = 2      simplify",
      "[step] Check by putting 2 in for x. || 5(2) - 2(2 - 1) =? 8\n10 - 2(1) = 8\n10 - 2 = 8      the solution checks",
      "",
      "[walk] Try one: solve 6x - 3(x + 1) = 9.",
      "[step] Distribute the -3, and -3 times 1 is -3. || 6x - 3(x + 1) = 9\n6x - 3x - 3 = 9      distributive property",
      "[step] Combine like terms, add 3 to each side, then divide by 3. || 3x - 3 = 9      combine like terms\n3x = 12      add 3 to each side\nx = 4      divide each side by 3"
    ]}
  ],

  words: [
    ["Distributive property", "A number outside the parentheses multiplies every term inside, so 3(x + 4) = 3x + 12.", 1 /*kw:distributive property*/],
    ["Like terms", "Terms with the same letter, like 2x and 5x, which you can add together. Plain numbers are like terms too.", 2 /*kw:combining like terms*/],
    ["Combine like terms", "Add or subtract like terms to make one term, so 5.20n + 0.80n becomes 6n.", 12 /*kw:combine like terms*/],
  ],

  questions: [
    { tag: "Name It", q: "In 3(x + 4) = 27, which step comes first in the order you learned?",
      find: [5], /*kw:First distribute*/
      hint: "Get rid of the parentheses first.",
      choices: ["Distribute the 3 to get 3x + 12", "Subtract 4 from both sides", "Add 3 and 4 to get 7", "Multiply both sides by 3"], right: 0 },

    { tag: "Use It", q: "Solve 3(x + 4) = 27.",
      find: [5], /*kw:First distribute*/
      hint: "Distribute to get 3x + 12 = 27, then subtract 12 and divide by 3.",
      choices: ["5", "9", "23", "-5"], right: 0 },

    { tag: "Use It", q: "Solve 2x + 5x - 4 = 24.",
      find: [2], /*kw:combining like terms*/
      hint: "Combine 2x and 5x first, then add 4, then divide.",
      choices: ["4", "28", "2", "-4"], right: 0 },

    { tag: "Use It", q: "Solve 4(2y - 1) = 28.",
      find: [5], /*kw:First distribute*/
      hint: "Distribute the 4 to BOTH terms, so you get 8y - 4 = 28.",
      choices: ["4", "3.5", "8", "-4"], right: 0 },

    { tag: "Careful", q: "Solve -2(x - 5) = 14.",
      find: [23], /*kw:Distribute the -3 to both terms*/
      hint: "-2 times -5 is positive 10, so you get -2x + 10 = 14.",
      choices: ["-2", "-12", "2", "12"], right: 0 },

    { tag: "Careful", q: "Solve 5n - 2(n + 3) = 9.",
      find: [43], /*kw:Distribute the -2 to both terms inside*/
      hint: "-2 times 3 is -6, so you get 5n - 2n - 6 = 9, then 3n - 6 = 9.",
      choices: ["5", "1", "3", "15"], right: 0 },

    { tag: "Careful", q: "A student solved -2(5 - n) = 2 and wrote 10 - 2n = 2. What went wrong?",
      find: [33], /*kw:it goes to both terms*/
      hint: "Look at the sign on the n after the -2 is distributed.",
      choices: [
        "The -2 has to multiply both terms, so it should be -10 + 2n = 2.",
        "The 2 on the right should have been -2.",
        "He should have added 5 and n first.",
        "Nothing, because 10 - 2n = 2 is right."
      ], right: 0 },

    { tag: "Use It", q: "A rectangle's length is 5 more than its width x, and its perimeter is 30. Which equation matches, and what is x?",
      find: [9], /*kw:combining like terms*/
      hint: "Perimeter is two lengths plus two widths. The length is x + 5.",
      choices: ["2(x + 5) + 2x = 30, so x = 5", "x + 5 + x = 30, so x = 12.5", "2(x + 5) = 30, so x = 10", "2x + 5 = 30, so x = 12.5"], right: 0 }
  ],

  /* ⭐ YOUR TURN: a fresh problem, every step typed and checked. */
  work: [
    { title: "Distribute, Combine, Solve",
      ask: "Solve 3(2a + 1) + a = 24. Do the distributing first.",
      steps: [
        { ask: "Distribute the 3 to both terms: 3(2a + 1) becomes 6a + __. What number goes in the blank?", answer: 3, calc: "3*1",
          hint: "3 times 1.",
          why: "3(2a + 1) = 6a + 3, so the equation is 6a + 3 + a = 24." },
        { ask: "Combine like terms: 6a + a makes ?a. What is the number in front of a?", answer: 7, calc: "6+1",
          hint: "a by itself is 1a.",
          why: "6a + a = 7a, so 7a + 3 = 24." },
        { ask: "Subtract 3 from both sides. What is 24 minus 3?", answer: 21, calc: "24-3",
          hint: "Undo the adding first.",
          why: "7a = 21." },
        { ask: "Divide 21 by 7 to find a.", answer: 3, calc: "21/7",
          hint: "How many 7s fit in 21?",
          why: "a = 3." },
        { ask: "Check it. What is 3(2 times 3 + 1) + 3?", answer: 24, calc: "3*(2*3+1)+3",
          hint: "Do the inside of the parentheses first.",
          why: "3(7) + 3 = 21 + 3 = 24, which matches the right side." },
      ] },
  ],

  todo: { title: "What To Do Now", s: [
      "You watched the order for these problems and four examples, each one line at a time with its reason, and tried one after each.",
      "First work through Your Turn below the reading, typing each step.",
      "Then come {c} word cards, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "If one is hard, go back to the example that matches it and read its lines again."
  ] }
};
