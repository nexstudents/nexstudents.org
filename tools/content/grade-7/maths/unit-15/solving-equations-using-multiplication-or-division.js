/* maths/solving-equations-using-multiplication-or-division
   Grade 7 · maths · Pre-Algebra Chapter 2, Lesson 2.6.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-11-07. From McDougal Littell Pre-Algebra (California,
   2008) pp96-101, via the weeks 10-11 packet (paraphrased book notes, not the page itself).

   SHAPE COPIED FROM 2.1: plain English first, the book's two Key Concept charts (Words,
   Numbers, Algebra), the Watch Out about dividing by 0, the book's three examples IN THE
   BOOK'S ORDER (divide to solve a multiplication equation with a negative, multiply to
   solve a division equation, d = rt), one line per move with the reason on the right, a
   Try One after each. The page-96 algebra-tile activity (3x = 12 is three equal groups) is
   told in words as a work line. The book's SOHO solar wind became an airliner's flight
   distance and cruise speed. ONE WORLD: Sam, a student pilot, at a small airfield.

   NO HOMEWORK SHEET this batch (Paul, 2026-11-07). The scored work is the 8 questions
   plus Your Turn. No `sheet` field, no visuals.

   ADDED FROM THE RECORD: the one-line gloss that "rate" means speed in d = rt (the book uses
   r without a gloss in the packet notes).
   FOR THE REVIEW QUEUE: the 8 questions and Your Turn are mine; the wrong answers are the
   real mistakes (dividing by the wrong sign, multiplying when you should divide). */
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
  id: "maths/solving-equations-using-multiplication-or-division",
  slug: "solving-equations-using-multiplication-or-division",
  title: "Solving Equations Using Multiplication or Division",
  unit: "Pre-Algebra &middot; 2.6",
  seq: { unit: 15, unitTitle: "Pre-Algebra: Solving Equations", n: 6 },
  natural: "2026-11-07",

  /* ── /teach-plan, 2026-11-07. ML Pre-Algebra 2008 pp96-101. ── */
  plan: {
    objective: "Solve one-step multiplication and division equations with inverse operations, and use d = rt to solve a word problem.",
    markers: [
      "BOOK, p96 activity: with algebra tiles, 3x = 12 is three equal groups, so split both sides into three equal groups and one x-tile equals four ones.",
      "BOOK, Key Concepts: Division Property of Equality and Multiplication Property of Equality, each Words, Numbers, Algebra.",
      "BOOK, Watch Out: you cannot divide a number or an expression by 0.",
      "BOOK, Examples 1 to 3 with the reason on the right, a Check line on Example 1, a Checkpoint after Example 2.",
    ],
    method: "ONE LINE PER MOVE, REASON ON THE RIGHT. Multiplying and dividing undo each other, so divide both sides by the number multiplying the letter, or multiply both sides by the number dividing it. Mind the sign, then check.",
    exampleOnly: [
      "Sam the student pilot at a small airfield. WORLD: one airfield, our numbers.",
      "Left out on purpose: the book's solar wind, printers and gray whales.",
    ],
    digitize: "Reading engine. The book's order: the equal-groups idea, the two Key Concept charts, Examples 1-3 as walks with a Try One after each, 8 questions, one Your Turn. No homework sheet.",
    assumes: "Integers and the sign rules for multiplying and dividing (done), the addition and subtraction properties of equality (2.5).",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Math",
    blurb: "Multiplying and dividing undo each other. Three worked examples solve equations both ways, then use distance, rate and time for a flight.",
    contains: [
      "The equal-groups idea: 3x = 12",
      "Two charts: the division and multiplication properties of equality",
      "Why you never divide by zero",
      "Three worked examples, each with a Try One",
      "Using d = rt for distance, speed and time",
      "Eight questions and a Your Turn problem",
    ] },
  eyebrow: ["Pre-Algebra", "2.6", "Solving Equations"],
  dek: "Multiplying and dividing undo each other, and Sam uses that to work out how long a long flight takes.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "By the end of this lesson your student should be able to solve a one-step multiplication or division equation with an inverse operation, check the answer, and use d = rt to find a time."
      ]},
      { h: "Where Students Get Stuck", p: [
        "The wrong sign. Dividing -6x = 48 by -6 gives x = -8, and x = 8 is wrong because a positive divided by a negative is negative.",
        "Using the wrong inverse. A multiplication equation is undone by dividing, and a division equation by multiplying.",
        "Dividing by zero. The book's Watch Out box: you can never divide by 0, so the number you divide by must not be 0."
      ]},
      { h: "Book Pages", p: [
        "McDougal Littell Pre-Algebra (2008), pages 96 to 101 (the tile activity is on 96 and the lesson starts on 97). Read free on archive.org: https://archive.org/details/prealgebra0000unse_z0p2/page/96/mode/1up"
      ]},
      { h: "Suggested Videos", videos: [
        { id: "XhBlKqxFu08", title: "How to Solve One-Step Equations (Multiplication and Division) | Math with Mr. J", channel: "Math with Mr. J",
          why: "Shows the division and multiplication properties of equality, the two charts on this page." },
        { id: "BmNzjXzH74g", title: "Solving One-Step Multiplication and Division Equations | Algebraic Equations | Math with Mr. J", channel: "Math with Mr. J",
          why: "A second angle on the same skill, with more worked problems." },
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "The Equal Groups Idea", s: [
      "An equation like 3x = 12 says that three equal groups of x make 12.",
      "To find one group, split the 12 into three equal groups, and that is just dividing by 3.",
      "The same fairness rule from the last lesson holds here: whatever you do to one side you do to the other.",
      "",
      "[walk] Solve 3x = 12 the way the book does with tiles, where x is one tile and each 1 is a small tile.",
      "[step] Show the equation with tiles. || x x x  =  1 1 1 1  1 1 1 1  1 1 1 1",
      "[step] There are three x tiles, so split each side into three equal groups. || (x)  =  (1 1 1 1)",
      "[step] One group has one x and four small tiles, so x is 4. || 3x ÷ 3 = 12 ÷ 3\nx = 4"
    ]},

    { title: "Dividing to Solve", s: [
      "Multiplying and dividing are inverse operations, which means they undo each other, so a multiplication equation is solved by dividing.",
      "You divide each side by the number multiplying the letter, which is that letter's coefficient, and the letter ends up alone.",
      "There is one hard rule, which is that you can never divide by 0.",
      "",
      "[walk] See the rule for dividing both sides.",
      "[step] Dividing each side by the same number, not zero, keeps the equation balanced. || " + table([["Division Property of Equality", ""], ["Words", "Divide each side by the same nonzero number and you get an equivalent equation."], ["Numbers", "If 3x = 12, then 3x/3 = 12/3, or x = 4."], ["Algebra", "If ax = b and a ≠ 0, then ax/a = b/a, or x = b/a."]]),
      "[step] Watch out: you cannot divide a number or an expression by 0. || a ≠ 0"
    ]},

    { title: "Example 1: Divide to Solve", s: [
      "In -5x = 40, the letter is multiplied by -5, so you divide both sides by -5.",
      "Watch the sign: a positive number divided by a negative number is negative.",
      "",
      "[walk] Solve -5x = 40 and check the solution.",
      "[step] Write the original equation. || -5x = 40      original equation",
      "[step] Divide each side by -5. || -5x/-5 = 40/-5      division property of equality",
      "[step] Simplify, so the solution is -8. || x = -8      simplify",
      "[step] Check by putting -8 in for x. || Check: -5x = 40      original equation\n-5(-8) =? 40      substitute -8 for x\n40 = 40      the solution checks",
      "",
      "[walk] Try one: solve 4x = 36, then -63 = -7a.",
      "[step] Divide each side by 4. || 4x = 36\n4x/4 = 36/4      division property of equality\nx = 9      simplify",
      "[step] Divide each side by -7, and a negative divided by a negative is positive. || -63 = -7a\n-63/-7 = -7a/-7      division property of equality\n9 = a      simplify"
    ]},

    { title: "Multiplying to Solve", s: [
      "If the letter is being divided, like w divided by 8, then multiplying is what undoes it.",
      "You multiply each side by the number the letter is divided by.",
      "",
      "[walk] See the rule for multiplying both sides.",
      "[step] Multiplying each side by the same number, not zero, keeps the equation balanced. || " + table([["Multiplication Property of Equality", ""], ["Words", "Multiply each side by the same nonzero number and you get an equivalent equation."], ["Numbers", "If x/3 = 12, then 3 · x/3 = 3 · 12, or x = 36."], ["Algebra", "If x/a = b and a ≠ 0, then a · x/a = a · b, or x = ab."]])
    ]},

    { title: "Example 2: Multiply to Solve", s: [
      "In 6 = w/8, the letter is divided by 8, so you multiply both sides by 8.",
      "The letter is on the right here, and that changes nothing.",
      "",
      "[walk] Solve 6 = w/8.",
      "[step] Write the original equation. || 6 = w/8      original equation",
      "[step] Multiply each side by 8. || 8 · 6 = 8 · w/8      multiplication property of equality",
      "[step] Simplify, so the solution is 48. || 48 = w      simplify",
      "[step] Check by putting 48 in for w. || 6 =? 48/8\n6 = 6      the solution checks",
      "",
      "[walk] Try one: solve y/3 = 14, then -5 = b/9.",
      "[step] Multiply each side by 3. || y/3 = 14\n3 · y/3 = 3 · 14      multiplication property of equality\ny = 42      simplify",
      "[step] Multiply each side by 9. || -5 = b/9\n9 · (-5) = 9 · b/9      multiplication property of equality\n-45 = b      simplify"
    ]},

    { title: "Example 3: Distance, Rate and Time", s: [
      "A flight problem uses a formula you may know: distance equals rate times time, written d = rt.",
      "Rate is just another word for speed, so d = rt says that how far you go is your speed times how long you travel.",
      "To find the time, put in the distance and the speed, and the equation is a multiplication equation like the ones you just solved.",
      "",
      "[walk] A big airliner passing over the airfield cruises at 480 miles per hour on a flight of 2,400 miles, so how long is the flight?",
      "[step] Let t be the time in hours, and write the formula. || d = rt      distance formula",
      "[step] Put in the distance and the speed. || 2,400 = 480t      substitute the values",
      "[step] Divide each side by 480. || 2,400/480 = 480t/480      division property of equality",
      "[step] Simplify, so the flight takes 5 hours. || 5 = t      simplify",
      "",
      "[walk] Try one: Sam's plane cruises at 135 miles per hour on a trip of 810 miles, so how long is the trip?",
      "[step] Put in the distance and the speed. || d = rt\n810 = 135t      substitute the values",
      "[step] Divide each side by 135. || 810/135 = 135t/135      division property of equality\n6 = t      simplify, so the trip takes 6 hours"
    ]}
  ],

  words: [
    ["Division property of equality", "Dividing each side of an equation by the same nonzero number gives an equivalent equation.", 11 /*kw:Dividing each side by the same number*/],
    ["Multiplication property of equality", "Multiplying each side of an equation by the same nonzero number gives an equivalent equation.", 26 /*kw:Multiplying each side by the same number*/],
    ["Coefficient", "The number multiplying a letter. In -5x the coefficient is -5, and you divide by it to solve.", 8 /*kw:which is that letter's coefficient*/],
    ["Rate", "How fast something goes, its speed. In d = rt, r is the rate.", 38 /*kw:Rate is just another word*/],
  ],

  questions: [
    { tag: "Name It", q: "What do you do to both sides of 7x = 63?",
      find: [8], /*kw:You divide each side by the number multiplying*/
      hint: "Undo the multiplying by 7.",
      choices: ["Divide by 7", "Multiply by 7", "Subtract 7", "Divide by 63"], right: 0 },

    { tag: "Name It", q: "What do you do to both sides of a/4 = 10?",
      find: [24], /*kw:You multiply each side by the number the letter is divided by*/
      hint: "Undo the dividing by 4.",
      choices: ["Multiply by 4", "Divide by 4", "Divide by 10", "Subtract 4"], right: 0 },

    { tag: "Careful", q: "Solve -4x = 36.",
      find: [14], /*kw:Watch the sign*/
      hint: "A positive divided by a negative is negative.",
      choices: ["-9", "9", "-32", "40"], right: 0 },

    { tag: "Use It", q: "Solve 12 = p/3.",
      find: [31], /*kw:Multiply each side by 8*/
      hint: "Multiply both sides by 3.",
      choices: ["36", "4", "-36", "15"], right: 0 },

    { tag: "Careful", q: "Solve -48 = -8b.",
      find: [22], /*kw:a negative divided by a negative is positive*/
      hint: "Divide both sides by -8, and a negative over a negative is positive.",
      choices: ["6", "-6", "384", "-40"], right: 0 },

    { tag: "Careful", q: "Solve w/-5 = 7.",
      find: [36], /*kw:Multiply each side by 9*/
      hint: "Multiply both sides by -5.",
      choices: ["-35", "35", "-2", "12"], right: 0 },

    { tag: "Use It", q: "A plane flies 840 miles at 120 miles per hour. Which equation and answer give the time, t?",
      find: [39], /*kw:Put in the distance and the speed*/
      hint: "Use d = rt, then divide both sides by the speed.",
      choices: ["840 = 120t, so t = 7 hours", "840 = 120t, so t = 100,800 hours", "840 = 120t, so t = 0.14 hour", "840 = 120t, so t = 720 hours"], right: 0 },

    { tag: "Careful", q: "A student solved -5x = 35 and got x = 7. What went wrong?",
      find: [14], /*kw:Watch the sign*/
      hint: "Check it: -5 times 7 is not 35.",
      choices: [
        "A positive 35 divided by -5 is negative, so x = -7.",
        "He should have multiplied 35 by -5.",
        "He should have subtracted 5 from both sides.",
        "Nothing, because x = 7 is right."
      ], right: 0 }
  ],

  /* ⭐ YOUR TURN: a fresh problem in the same world, every step typed and checked. */
  work: [
    { title: "A Trip to the Next Town",
      ask: "Sam's plane cruises at 110 miles per hour on a trip of 440 miles. Use d = rt to find the time.",
      steps: [
        { ask: "Put the numbers in: 440 = 110t. What number do you divide both sides by?", answer: 110,
          hint: "Divide by the number multiplying t.",
          why: "440/110 = 110t/110." },
        { ask: "Work out t. What is 440 divided by 110?", answer: 4, calc: "440/110",
          hint: "How many 110s fit in 440?",
          why: "t = 4, so the trip takes 4 hours." },
        { ask: "Check it. What is 110 times 4?", answer: 440, calc: "110*4",
          hint: "Put 4 back in for t.",
          why: "110(4) = 440, which is the distance." },
      ] },
  ],

  todo: { title: "What To Do Now", s: [
      "You watched three examples, each one line at a time with its reason, and tried one after each.",
      "First work through Your Turn below the reading, typing each step.",
      "Then come {c} word cards, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "If one is hard, go back to the example that matches it and read its lines again."
  ] }
};
