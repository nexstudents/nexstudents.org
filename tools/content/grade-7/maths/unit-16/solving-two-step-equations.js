/* maths/solving-two-step-equations
   Grade 7 · maths · Pre-Algebra Chapter 3, Lesson 3.1.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-11-22. From McDougal Littell Pre-Algebra (California,
   2008) pp119-124 (tile activity on 119), via the week 12 packet (paraphrased book notes,
   not the page itself). Book facts are the book's; the practice numbers are ours.

   SHAPE COPIED FROM 2.6: plain English first, the book's examples IN THE BOOK'S ORDER
   (3x + 7 = -5, x/2 - 3 = 1, 7 - 4y = 19, the drum-set payments), one line per move with
   the reason on the right, a Try One after each, the tile picture of 3x + 6 = 12 told as a
   work line. ONE WORLD: a music shop and a gym, our numbers. Socks-then-shoes is the
   picture for "undo in reverse order".

   NO HOMEWORK SHEET (no `sheet` field), no visuals. The scored work is the 8 questions
   plus Your Turn.

   ADDED FROM THE RECORD: the socks-and-shoes picture, and the two-line recap of one-step
   equations and of dividing by a negative (the book assumes them).
   FOR THE REVIEW QUEUE: the 8 questions and Your Turn are mine; the wrong answers are the
   real mistakes (undoing in the wrong order, dropping a sign, undoing only one step). */
'use strict';

module.exports = {
  id: "maths/solving-two-step-equations",
  slug: "solving-two-step-equations",
  title: "Solving Two-Step Equations",
  unit: "Pre-Algebra &middot; 3.1",
  seq: { unit: 16, unitTitle: "Pre-Algebra: Multi-Step Equations and Inequalities", n: 1 },
  natural: "2026-11-22",

  /* ── /teach-plan, 2026-11-22. ML Pre-Algebra 2008 pp119-124. ── */
  plan: {
    objective: "Solve a two-step equation by undoing the add or subtract first, then the multiply or divide, and check.",
    markers: [
      "BOOK: \"You can solve a two-step equation by using two inverse operations.\"",
      "BOOK, examples: every step has a reason beside it (\"Subtract 7 from each side\", \"Divide each side by 3\").",
      "BOOK, p119 algebra-tile activity: 3x + 6 = 12, take the loose 1s off both sides, then split into equal groups.",
    ],
    method: "UNDO IN REVERSE ORDER. Add or subtract first, then multiply or divide, the same thing to both sides, a reason on each line, then put the answer back in to check. Tile picture: take the loose 1s off both sides, then split what is left into equal groups.",
    exampleOnly: [
      "Drum set, rafting, car repair, gym, video club. WORLD: one music shop and one gym, our numbers.",
    ],
    digitize: "Reading engine. Walks for 3x + 7 = -5, x/2 - 3 = 1, 7 - 4y = 19 (negative coefficient) and the drum-set word problem, each with a Try One. 8 questions, one Your Turn with a typed reason per step.",
    assumes: "One-step equations and inverse operations (2.5, 2.6, recapped in two lines), dividing by a negative (recapped), the verbal model (taught plainly).",
    unclear: "",
  },

  sheet: { slug: "solving-two-step-equations-homework", subject: "maths",
    note: "This is your work for the lesson. Do it on screen or print it." },

  shelf: { grades: [7], subject: "Math",
    blurb: "A two-step equation has two things stuck to the letter. Undo them in reverse order, the plus or minus first, and check the answer.",
    contains: [
      "Why undoing goes in reverse order",
      "The tile picture of 3x + 6 = 12",
      "Three worked examples, including a negative coefficient",
      "Writing an equation from a word problem with a verbal model",
      "Eight questions and a Your Turn problem",
    ] },
  eyebrow: ["Pre-Algebra", "3.1", "Multi-Step Equations"],
  dek: "When two things are stuck to the letter, you take them off one at a time, last one first.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "By the end of this lesson your student should be able to solve an equation like 3x + 7 = -5 by undoing the adding or subtracting first and the multiplying or dividing second, check the answer, and set up a two-step equation from a word problem."
      ]},
      { h: "Where Students Get Stuck", p: [
        "Undoing in the wrong order. They divide first and forget to divide the 7 too. Add or subtract first, then multiply or divide.",
        "Losing the sign. In 7 - 4y = 19 the number stuck to y is -4, not 4, so after subtracting 7 you divide by -4.",
        "Doing it to one side only. Whatever happens on the left has to happen on the right.",
        "The book asks them to compare 3x - 7 = -5 with 3x + 7 = -5. The sign in front of the 7 tells you whether to add or subtract."
      ]},
      { h: "Book Pages", p: [
        "McDougal Littell Pre-Algebra (2008), the tile activity on page 119 and the lesson on pages 120 to 124. Read free on archive.org: https://archive.org/details/prealgebra0000unse_z0p2/page/120/mode/1up"
      ]},
      { h: "Suggested Videos", videos: [
        { id: "LDIiYKYvvdA", title: "Algebra Basics: Solving 2-Step Equations - Math Antics", channel: "mathantics",
          why: "Made for this age, and it teaches the same order: undo the plus or minus first, then the times or divide." },
        { id: "_y_Q3_B2Vh8", title: "Solving two-step equations | Khan Academy", channel: "Khan Academy",
          why: "A second voice on the same skill, with more worked problems." },
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  video: { id: "LDIiYKYvvdA", title: "Algebra Basics: Solving 2-Step Equations - Math Antics", channel: "mathantics",
    why: "Made for this age, and it teaches the same order: undo the plus or minus first, then the times or divide." },

  parts: [
    { title: "What You Already Know", s: [
      "In the last two lessons you solved equations with one move, like x + 5 = 9 or 3x = 12.",
      "You undo what was done to the letter, and you do the same thing to both sides so the equation stays balanced.",
      "That undoing move has a name, an inverse operation, and adding and subtracting undo each other, just like multiplying and dividing do."
    ]},

    { title: "Two Things Stuck to the Letter", s: [
      "Now look at 3x + 7 = -5, where two things were done to x: it was multiplied by 3, and then 7 was added.",
      "That makes it a two-step equation, and you'll need two inverse operations to get the x all alone.",
      "",
      "Think about your socks and your shoes.",
      "You put on your socks first and your shoes second, so when you take them off, the shoes come off first and the socks come off last.",
      "Solving works the same way, because you undo the last thing that was done first.",
      "",
      "So here is the order you will use every time: first undo the adding or subtracting, and after that undo the multiplying or dividing.",
      "The multiplying is stuck right to the x and the adding is the last thing that happened, so the adding comes off first."
    ]},

    { title: "A Picture With Tiles", s: [
      "The book shows the idea with little tiles, where one x tile stands for the mystery number and each small 1 tile is just one.",
      "",
      "[walk] Solve 3x + 6 = 12 with tiles.",
      "[step] Show the equation, three x tiles and six 1 tiles on the left, and twelve 1 tiles on the right. || x x x 1 1 1 1 1 1  =  1 1 1 1 1 1 1 1 1 1 1 1",
      "[step] Take six 1 tiles off each side, which is the subtracting step, so the left side has only x tiles. || x x x  =  1 1 1 1 1 1\n3x + 6 - 6 = 12 - 6",
      "[step] Split what is left into three equal groups, which is the dividing step, and one group is one x tile with two 1 tiles. || (x) = (1 1)\n3x / 3 = 6 / 3\nx = 2"
    ]},

    { title: "Example 1: Subtract, Then Divide", s: [
      "In 3x + 7 = -5, the 7 is the last thing added, so you subtract 7 from both sides first.",
      "After that, the x is multiplied by 3, and you divide both sides by 3.",
      "",
      "[walk] Solve 3x + 7 = -5 and check the solution.",
      "[step] Write the original equation. || 3x + 7 = -5      original equation",
      "[step] Subtract 7 from each side, because that undoes the adding. || 3x + 7 - 7 = -5 - 7      subtract 7 from each side",
      "[step] Simplify, remembering that -5 minus 7 is -12. || 3x = -12      simplify",
      "[step] Divide each side by 3, because that undoes the multiplying. || 3x/3 = -12/3      divide each side by 3",
      "[step] Simplify, so the solution is -4. || x = -4      simplify",
      "[step] Check by putting -4 in for x. || Check: 3x + 7 = -5      original equation\n3(-4) + 7 =? -5      substitute -4 for x\n-12 + 7 = -5      the solution checks",
      "",
      "[walk] Try one: solve 4x + 3 = -9.",
      "[step] Subtract 3 from each side. || 4x + 3 = -9\n4x + 3 - 3 = -9 - 3      subtract 3 from each side\n4x = -12      simplify",
      "[step] Divide each side by 4. || 4x/4 = -12/4      divide each side by 4\nx = -3      simplify"
    ]},

    { title: "Example 2: Add, Then Multiply", s: [
      "In x/2 - 3 = 1, the letter is divided by 2, and then 3 was subtracted.",
      "The subtracting is last, so you undo it first by adding 3, and then you multiply both sides by 2 to undo the dividing.",
      "",
      "[walk] Solve x/2 - 3 = 1 and check the solution.",
      "[step] Write the original equation. || x/2 - 3 = 1      original equation",
      "[step] Add 3 to each side, because that undoes the subtracting. || x/2 - 3 + 3 = 1 + 3      add 3 to each side",
      "[step] Simplify. || x/2 = 4      simplify",
      "[step] Multiply each side by 2, because that undoes the dividing. || 2 · x/2 = 2 · 4      multiply each side by 2",
      "[step] Simplify, so the solution is 8. || x = 8      simplify",
      "[step] Check by putting 8 in for x. || 8/2 - 3 =? 1\n4 - 3 = 1      the solution checks",
      "",
      "[walk] Try one: solve n/4 - 1 = 2.",
      "[step] Add 1 to each side. || n/4 - 1 = 2\nn/4 - 1 + 1 = 2 + 1      add 1 to each side\nn/4 = 3      simplify",
      "[step] Multiply each side by 4. || 4 · n/4 = 4 · 3      multiply each side by 4\nn = 12      simplify"
    ]},

    { title: "Example 3: When the Letter Has a Minus Sign", s: [
      "Here is the one that catches people, 7 - 4y = 19, because the minus sign belongs to the 4y, so the number stuck to y is -4.",
      "The 7 is the only loose number, so you subtract 7 from both sides, and what is left is -4y = 12.",
      "The mistake is to divide by 4 and forget the negative sign, so divide by -4, and a positive divided by a negative is negative.",
      "",
      "[walk] Solve 7 - 4y = 19 and check the solution.",
      "[step] Write the original equation. || 7 - 4y = 19      original equation",
      "[step] Subtract 7 from each side. || 7 - 4y - 7 = 19 - 7      subtract 7 from each side",
      "[step] Simplify, because 7 minus 7 is zero, and zero minus 4y is just -4y. || -4y = 12      simplify",
      "[step] Divide each side by -4. || -4y/-4 = 12/-4      divide each side by -4",
      "[step] Simplify, so the solution is -3. || y = -3      simplify",
      "[step] Check by putting -3 in for y. || 7 - 4(-3) =? 19\n7 + 12 = 19      the solution checks",
      "",
      "[walk] Try one: solve 10 - 3n = -5.",
      "[step] Subtract 10 from each side. || 10 - 3n = -5\n10 - 3n - 10 = -5 - 10      subtract 10 from each side\n-3n = -15      simplify",
      "[step] Divide each side by -3, and a negative divided by a negative is positive. || -3n/-3 = -15/-3      divide each side by -3\nn = 5      simplify"
    ]},

    { title: "Example 4: A Word Problem", s: [
      "A music shop sells a drum set for $495, and you pay $150 down and then three equal monthly payments with no interest.",
      "To write an equation, start with a sentence in words, which the book calls a verbal model: the total cost is the down payment plus the number of months times the monthly payment.",
      "Let p be the monthly payment, and the sentence turns into 495 = 150 + 3p.",
      "",
      "[walk] How much is each monthly payment for the drum set?",
      "[step] Write the verbal model with the real numbers. || total cost = down payment + (months × payment)\n495 = 150 + 3p      let p be the monthly payment",
      "[step] Subtract 150 from each side, because that undoes the adding. || 495 - 150 = 150 + 3p - 150      subtract 150 from each side\n345 = 3p      simplify",
      "[step] Divide each side by 3. || 345/3 = 3p/3      divide each side by 3",
      "[step] Simplify, so each payment is 115 dollars. || 115 = p      simplify, so $115 a month",
      "",
      "[walk] Try one: a phone costs $240, with $60 down and four equal payments, so how much is each payment?",
      "[step] Write the equation and subtract 60 from each side. || 240 = 60 + 4p      let p be the payment\n240 - 60 = 60 + 4p - 60      subtract 60 from each side\n180 = 4p      simplify",
      "[step] Divide each side by 4. || 180/4 = 4p/4      divide each side by 4\n45 = p      simplify, so $45 a month"
    ]}
  ],

  words: [
    ["Two-step equation", "An equation where two things were done to the letter, so it takes two inverse operations to solve.", 4 /*kw:That makes it a two-step equation*/],
    ["Inverse operations", "Moves that undo each other: adding and subtracting, multiplying and dividing.", 2 /*kw:inverse operation*/],
    ["Verbal model", "A sentence in words that shows how the numbers in a problem fit together, before you write the equation.", 53 /*kw:verbal model*/],
    ["Solution", "The number that makes the equation true when you put it in for the letter.", 22 /*kw:the solution is -4*/],
  ],

  questions: [
    { tag: "Name It", q: "In 5x + 2 = 17, what do you do first?",
      find: [8], /*kw:First undo the adding or subtracting*/
      hint: "Undo the adding or subtracting before the multiplying.",
      choices: ["Subtract 2 from both sides", "Divide both sides by 5", "Add 2 to both sides", "Subtract 5 from both sides"], right: 0 },

    { tag: "Use It", q: "Solve 2x + 5 = 17.",
      find: [19], /*kw:First undo the adding or subtracting*/
      hint: "Subtract 5, then divide by 2.",
      choices: ["6", "11", "5", "22"], right: 0 },

    { tag: "Use It", q: "Solve 4y - 3 = 21.",
      find: [31], /*kw:First undo the adding or subtracting*/
      hint: "Add 3 to both sides, then divide by 4.",
      choices: ["6", "4.5", "18", "-6"], right: 0 },

    { tag: "Use It", q: "Solve x/3 + 4 = 9.",
      find: [33], /*kw:First undo the adding or subtracting*/
      hint: "Subtract 4, then multiply both sides by 3.",
      choices: ["15", "5/3", "39", "-15"], right: 0 },

    { tag: "Careful", q: "Solve 12 - 3n = -9.",
      find: [46], /*kw:First undo the adding or subtracting*/
      hint: "Subtract 12 first, then divide by -3, and a negative over a negative is positive.",
      choices: ["7", "-7", "1", "-1"], right: 0 },

    { tag: "Careful", q: "Solve 5 + 2k = -7.",
      find: [8], /*kw:First undo the adding or subtracting*/
      hint: "Subtract 5, then divide by 2. Watch the signs.",
      choices: ["-6", "6", "-1", "-12"], right: 0 },

    { tag: "Use It", q: "A gym charges $20 to join plus $15 a month. You paid $155 in all. Which equation matches, and how many months was it?",
      find: [54], /*kw:First undo the adding or subtracting*/
      hint: "Total = sign-up fee + months times the monthly price. Subtract 20, then divide by 15.",
      choices: ["20 + 15m = 155, so m = 9", "20 + 15m = 155, so m = 11.7", "15 + 20m = 155, so m = 7", "20m + 15 = 155, so m = 7"], right: 0 },

    { tag: "Careful", q: "A student solved -2m + 9 = 1 and wrote m = -4. What went wrong?",
      find: [41], /*kw:First undo the adding or subtracting*/
      hint: "After subtracting 9 you have -2m = -8. Divide by -2.",
      choices: [
        "Dividing -8 by -2 gives positive 4, so m = 4.",
        "He should have added 9 to both sides.",
        "He should have divided by 2 before subtracting 9.",
        "Nothing, because m = -4 is right."
      ], right: 0 }
  ],

  /* ⭐ YOUR TURN: a fresh problem in a new world, every step typed and checked. */
  work: [
    { title: "Joining the Gym",
      ask: "A gym charges $20 to sign up plus $15 each month. You have paid $155 in all. Use 20 + 15m = 155 to find how many months you have been a member.",
      steps: [
        { ask: "What number do you subtract from both sides first, to undo the adding?", answer: 20,
          hint: "Undo the adding or subtracting first.",
          why: "Subtract 20 from each side, because the 20 was added last." },
        { ask: "What is 155 minus 20?", answer: 135, calc: "155-20",
          hint: "Take 20 away from 155.",
          why: "155 - 20 = 135, so 15m = 135." },
        { ask: "Now divide 135 by 15 to get m, the number of months.", answer: 9, calc: "135/15",
          hint: "How many 15s fit in 135?",
          why: "m = 9, so you have been a member for 9 months." },
        { ask: "Check it. What is 20 plus 15 times 9?", answer: 155, calc: "20+15*9",
          hint: "Put 9 back in for m. Multiply first, then add.",
          why: "20 + 135 = 155, which is the total you paid." },
      ] },
  ],

  todo: { title: "What To Do Now", s: [
      "You watched four examples, each one line at a time with its reason, and tried one after each.",
      "First work through Your Turn below the reading, typing each step.",
      "Then come {c} word cards, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "If one is hard, go back to the example that matches it and read its lines again."
  ] }
};
