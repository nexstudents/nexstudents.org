/* maths/decimal-operations-and-equations-with-decimals
   Grade 7 · maths · Pre-Algebra Chapter 2, Lesson 2.7.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-11-07. From McDougal Littell Pre-Algebra (California,
   2008) pp102-107, via the weeks 10-11 packet (paraphrased book notes, not the page itself).

   SHAPE COPIED FROM 2.1: plain English first, a number line and a sign-rule chart, the
   book's five examples IN THE BOOK'S ORDER (add and subtract, multiply and divide with the
   sign reason and an estimate check, add/subtract equations, multiply/divide equations,
   a before-minus-loss-equals-after word problem), one line per move with the reason on the
   right, a Try One after each. The book's hibernating chipmunk became fuel in a tank before
   and after a flight. ONE WORLD: Sam, a student pilot, at a small airfield.
   Skipped on purpose: the book's graphing-calculator Technology note (plan: skip it).

   NO HOMEWORK SHEET this batch (Paul, 2026-11-07). The scored work is the 8 questions
   plus Your Turn. No `sheet` field, no visuals.

   ADDED FROM THE RECORD: the three "Where Students Get Stuck" items are mine (the packet
   has no error analysis for 2.7); they come from the sign rules and the estimate check.
   Video note: no decimal-specific video was found, so the video reviews one-step equations
   of every kind and the same moves work with decimals.
   FOR THE REVIEW QUEUE: the 8 questions and Your Turn are mine; the wrong answers are the
   real mistakes (a lost negative, the sign rule backward, a misplaced decimal point). */
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

/* a number line from -3 to 2, 9 columns per whole number, with a dot over each value */
const numberLine = (points) => {
  const U = 9, O = 27, W = 46, at = (v) => Math.round(O + v * U);
  const blank = () => Array(W).fill(" ");
  const dots = blank(), axis = blank(), ticks = blank(), names = blank();
  for (let c = 0; c < W; c++) axis[c] = "-";
  const put = (row, start, text) => [...text].forEach((ch, i) => { row[start + i] = ch; });
  for (let v = -3; v <= 2; v++) {
    axis[at(v)] = "|";
    const t = String(v);
    put(ticks, Math.max(0, at(v) - Math.floor(t.length / 2)), t);
  }
  points.forEach((v) => {
    dots[at(v)] = "●";
    const t = String(v);
    put(names, at(v) - Math.floor(t.length / 2), t);
  });
  return [dots, axis, ticks, names].map((r) => r.join("").replace(/\s+$/, "")).join("\n");
};

module.exports = {
  id: "maths/decimal-operations-and-equations-with-decimals",
  slug: "decimal-operations-and-equations-with-decimals",
  title: "Decimal Operations and Equations with Decimals",
  unit: "Pre-Algebra &middot; 2.7",
  seq: { unit: 15, unitTitle: "Pre-Algebra: Solving Equations", n: 7 },
  natural: "2026-11-07",

  /* ── /teach-plan, 2026-11-07. ML Pre-Algebra 2008 pp102-107. ── */
  plan: {
    objective: "Add, subtract, multiply and divide negative and positive decimals with the integer sign rules, and solve one-step equations with decimals.",
    markers: [
      "BOOK, text: there are negative decimals like -2.5, and the rules for decimals are the same as for integers in Chapter 1; the number line shows -2.5, -1.3, 0.5, 1.75.",
      "BOOK, Examples 1 to 5, one line per step with the reason on the right, a Checkpoint after Examples 1 to 5.",
      "BOOK, Study Strategy: use estimation to check that a decimal answer is reasonable (-29.07 / -1.9 is about -30 / -2 = 15).",
      "BOOK, Study Strategy: always check your solution by putting it back in.",
    ],
    method: "ONE LINE PER MOVE, REASON ON THE RIGHT. Same sign rules as integers: rewrite a subtraction as adding the opposite, decide the sign first, then do the digits. Estimate with friendly numbers to check. Solve equations with the same inverse operations as before.",
    exampleOnly: [
      "Sam the student pilot at a small airfield. WORLD: one airfield, our numbers.",
      "Left out on purpose: the book's chipmunk, the graphing-calculator note, lake levels and airplane Mach numbers.",
    ],
    digitize: "Reading engine. The book's order: a number line and a sign-rule chart, Examples 1-5 as walks with a Try One after each, 8 questions, one Your Turn. No homework sheet.",
    assumes: "The integer sign rules (done, recapped on the page), absolute value, one-step equations (2.5 and 2.6), adding, subtracting, multiplying and dividing positive decimals.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Math",
    blurb: "Negative decimals follow the same sign rules as integers. Five worked examples add, subtract, multiply, divide and solve equations with decimals.",
    contains: [
      "Negative decimals on a number line",
      "A chart of the sign rules",
      "Five worked examples, each with a Try One",
      "Checking an answer with an estimate",
      "Solving equations that have decimals in them",
      "Eight questions and a Your Turn problem",
    ] },
  eyebrow: ["Pre-Algebra", "2.7", "Solving Equations"],
  dek: "Decimals can be negative too, and Sam uses the same sign rules he already knows to work with them.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "By the end of this lesson your student should be able to add, subtract, multiply and divide positive and negative decimals with the integer sign rules, check an answer by estimating, and solve one-step equations with decimals."
      ]},
      { h: "Where Students Get Stuck", p: [
        "Losing the negative sign. The sign comes first: decide it from the sign rules, then do the digits.",
        "Subtracting a negative. Rewrite it as adding the opposite, so -14.62 - (-30.805) is -14.62 + 30.805.",
        "A misplaced decimal point in the answer. An estimate with friendly numbers (about -40 divided by -2) catches an answer that is ten times too big or too small."
      ]},
      { h: "Book Pages", p: [
        "McDougal Littell Pre-Algebra (2008), pages 102 to 107. Read free on archive.org: https://archive.org/details/prealgebra0000unse_z0p2/page/102/mode/1up"
      ]},
      { h: "Suggested Videos", videos: [
        { id: "9eRF7pJCOUQ", title: "How to Solve Equations | One-Step & Two-Step | Math with Mr. J", channel: "Math with Mr. J",
          why: "No decimal-specific video was found, but this reviews one-step equations of every kind, and the same moves work with decimals." },
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Negative Decimals", s: [
      "You already know how to add, subtract, multiply and divide positive decimals, and you know the sign rules for integers.",
      "Just as there are negative whole numbers like -2, there are negative decimals like -2.5, and they sit between the whole numbers on the number line.",
      "The rules for working with them are exactly the integer rules, so there is nothing new to memorize.",
      "",
      "[walk] Find -2.5, -1.3, 0.5 and 1.75 on the number line.",
      "[step] Each dot sits between the two whole numbers it is closest to. || " + numberLine([-2.5, -1.3, 0.5, 1.75]),
      "",
      "[walk] Here are the sign rules to use all lesson.",
      "[step] The sign of the answer comes from the signs of the numbers. || " + table([["", "Same signs", "Different signs"], ["Adding", "Add the absolute values and keep the sign", "Subtract the smaller absolute value from the larger and keep the sign of the larger"], ["Multiplying or dividing", "The answer is positive", "The answer is negative"]]),
      "[step] To subtract, add the opposite of the number you are subtracting. || 5 - (-3) = 5 + 3 = 8",
      "",
      "The {{absolute value}} of a number is its distance from zero, so it is always positive, and that is what you add or subtract in the first row.",
      "For example, -2.9 and 2.9 are both 2.9 away from zero, so both have an absolute value of 2.9."
    ]},

    { title: "Example 1: Adding and Subtracting", s: [
      "Sam is tracking how far his altimeter reading changes, and each change can be a negative decimal.",
      "For an addition, check the signs first, and for a subtraction, rewrite it as adding the opposite.",
      "",
      "[walk] Find the sum -3.4 + (-5.8).",
      "[step] Both numbers are negative, so add the absolute values and keep the negative sign. || -3.4 + (-5.8) = -9.2      same signs: add 3.4 and 5.8",
      "",
      "[walk] Find the difference -14.62 - (-30.805).",
      "[step] Rewrite the subtraction as adding the opposite. || -14.62 - (-30.805)\n= -14.62 + 30.805      add the opposite",
      "[step] The signs are different, so subtract the smaller absolute value from the larger. || 30.805 - 14.62 = 16.185      subtract the absolute values",
      "[step] 30.805 is the larger absolute value and it is positive, so the answer is positive. || = 16.185      keep the sign of 30.805, which is positive",
      "",
      "[walk] Try one: find -2.7 + (-6.4), then 12.46 + (-8.75), then 7.213 - (-2.94).",
      "[step] Same signs, so add and keep the negative. || -2.7 + (-6.4) = -9.1      add 2.7 and 6.4",
      "[step] Different signs, so subtract, and the larger absolute value is positive. || 12.46 + (-8.75) = 3.71      12.46 - 8.75",
      "[step] Rewrite as adding the opposite, then add. || 7.213 - (-2.94)\n= 7.213 + 2.94      add the opposite\n= 10.153      same signs: add"
    ]},

    { title: "Example 2: Multiplying and Dividing", s: [
      "For multiplying and dividing, decide the sign first from the rule, and then do the digits as you always have.",
      "It also pays to estimate with friendly numbers, because that catches a decimal point in the wrong place.",
      "",
      "[walk] Find each product or quotient.",
      "[step] The signs are different, so the product is negative. || -0.6(15.5) = -9.3      different signs: negative",
      "[step] The signs are the same, so the product is positive. || -3.5(-8.25) = 28.875      same signs: positive",
      "[step] The signs are the same, so the quotient is positive. || -38.64 ÷ (-2.1) = 18.4      same signs: positive",
      "[step] Check it with an estimate, using -40 and -2, which are friendly numbers close to the real ones. || -40 ÷ (-2) = 20, and 18.4 is close to 20, so it is reasonable",
      "[step] The signs are different, so the quotient is negative. || 14.52 ÷ (-3.3) = -4.4      different signs: negative",
      "",
      "[walk] Try one: find 4.2(-5.5), then -9.45 ÷ (-0.9), then -17.28 ÷ 2.4.",
      "[step] Different signs, so negative. || 4.2(-5.5) = -23.1      different signs: negative",
      "[step] Same signs, so positive. || -9.45 ÷ (-0.9) = 10.5      same signs: positive",
      "[step] Different signs, so negative. || -17.28 ÷ 2.4 = -7.2      different signs: negative",
      "[step] Estimate the last one to check it. || -17 ÷ 2 is about -8.5, and -7.2 is in that area, so it is reasonable"
    ]},

    { title: "Example 3: Adding and Subtracting Equations", s: [
      "Equations with decimals are solved with the same inverse operations as before: undo an addition by subtracting, and undo a subtraction by adding, on both sides.",
      "The only new thing is the decimals, and the sign rules you just reviewed take care of them.",
      "",
      "[walk] Solve x + 3.6 = 2.1.",
      "[step] Subtract 3.6 from each side. || x + 3.6 = 2.1\nx + 3.6 - 3.6 = 2.1 - 3.6      subtraction property of equality",
      "[step] Simplify, because 2.1 - 3.6 is -1.5. || x = -1.5      simplify",
      "[step] Check by putting -1.5 in for x. || -1.5 + 3.6 =? 2.1\n2.1 = 2.1      the solution checks",
      "",
      "[walk] Solve y - 5.38 = -1.74.",
      "[step] Add 5.38 to each side. || y - 5.38 = -1.74\ny - 5.38 + 5.38 = -1.74 + 5.38      addition property of equality",
      "[step] Simplify. || y = 3.64      simplify",
      "[step] Check by putting 3.64 in for y. || 3.64 - 5.38 =? -1.74\n-1.74 = -1.74      the solution checks",
      "",
      "[walk] Try one: solve a + 8.3 = -1.45, then r - 0.75 = -0.4.",
      "[step] Subtract 8.3 from each side. || a + 8.3 = -1.45\na + 8.3 - 8.3 = -1.45 - 8.3      subtraction property of equality\na = -9.75      simplify",
      "[step] Check. || -9.75 + 8.3 =? -1.45\n-1.45 = -1.45      the solution checks",
      "[step] Add 0.75 to each side. || r - 0.75 = -0.4\nr - 0.75 + 0.75 = -0.4 + 0.75      addition property of equality\nr = 0.35      simplify",
      "[step] Check. || 0.35 - 0.75 =? -0.4\n-0.4 = -0.4      the solution checks"
    ]},

    { title: "Example 4: Multiplying and Dividing Equations", s: [
      "In the same way, undo a multiplication by dividing and undo a division by multiplying, and watch the signs.",
      "The sign rules from the start of the lesson tell you whether the answer comes out positive or negative.",
      "",
      "[walk] Solve -0.4m = -3.2.",
      "[step] Divide each side by -0.4. || -0.4m = -3.2\n-0.4m/-0.4 = -3.2/-0.4      division property of equality",
      "[step] A negative divided by a negative is positive. || m = 8      simplify",
      "[step] Check. || -0.4(8) =? -3.2\n-3.2 = -3.2      the solution checks",
      "",
      "[walk] Solve n/-6 = 2.5.",
      "[step] Multiply each side by -6. || n/-6 = 2.5\n-6 · n/-6 = -6 · 2.5      multiplication property of equality",
      "[step] A negative times a positive is negative. || n = -15      simplify",
      "[step] Check. || -15/-6 =? 2.5\n2.5 = 2.5      the solution checks",
      "",
      "[walk] Try one: solve 6x = 25.8, then -1.5u = 6.3, then y/4.5 = 0.2.",
      "[step] Divide each side by 6. || 6x = 25.8\n6x/6 = 25.8/6      division property of equality\nx = 4.3      simplify",
      "[step] Divide each side by -1.5. || -1.5u = 6.3\n-1.5u/-1.5 = 6.3/-1.5      division property of equality\nu = -4.2      simplify",
      "[step] Multiply each side by 4.5. || y/4.5 = 0.2\n4.5 · y/4.5 = 4.5 · 0.2      multiplication property of equality\ny = 0.9      simplify"
    ]},

    { title: "Example 5: A Fuel Problem", s: [
      "A word problem with a loss follows one sentence: what you had before, minus what was lost, equals what you have after.",
      "Sam checks his fuel tank before and after a flight to see how much the flight used.",
      "",
      "[walk] A tank held f gallons before a flight, the flight burned 12.6 gallons, and 18.4 gallons were left, so how much was in the tank before?",
      "[step] Say it in words. || fuel before - fuel burned = fuel left",
      "[step] Put in the numbers. || f - 12.6 = 18.4      substitute into the verbal model",
      "[step] Add 12.6 to each side. || f - 12.6 + 12.6 = 18.4 + 12.6      addition property of equality",
      "[step] Simplify, so the tank held 31 gallons. || f = 31      simplify",
      "",
      "[walk] Try one: the pump added 17.8 gallons and the tank then held 42.5 gallons, so how much was in it before?",
      "[step] Let b be the gallons before, and put in the numbers. || b + 17.8 = 42.5      substitute into the verbal model",
      "[step] Subtract 17.8 from each side. || b + 17.8 - 17.8 = 42.5 - 17.8      subtraction property of equality\nb = 24.7      simplify, so there were 24.7 gallons before"
    ]}
  ],

  words: [
    ["Absolute value", "How far a number is from zero. It is never negative, so the absolute value of -2.9 is 2.9.", 8 /*kw:{{absolute value}}*/],
    ["Estimate", "A close answer you get with friendly numbers, used to check that an exact answer makes sense.", 23 /*kw:It also pays to estimate*/],
    ["Opposite", "The number the same distance from zero on the other side, like 5 and -5. Subtracting a number is adding its opposite.", 7 /*kw:To subtract, add the opposite*/],
  ],

  questions: [
    { tag: "Use It", q: "Find -4.2 + (-3.9).",
      find: [13], /*kw:Both numbers are negative*/
      hint: "Same signs: add 4.2 and 3.9 and keep the sign.",
      choices: ["-8.1", "8.1", "-0.3", "0.3"], right: 0 },

    { tag: "Use It", q: "Find 6.5 + (-9.2).",
      find: [16], /*kw:The signs are different, so subtract the smaller*/
      hint: "Different signs: subtract, and keep the sign of the larger absolute value.",
      choices: ["-2.7", "2.7", "-15.7", "15.7"], right: 0 },

    { tag: "Careful", q: "Find 3.4 - (-1.6).",
      find: [21], /*kw:Rewrite as adding the opposite, then add*/
      hint: "Subtracting a negative is the same as adding.",
      choices: ["5", "1.8", "-1.8", "-5"], right: 0 },

    { tag: "Careful", q: "Find -0.5(-7.2).",
      find: [26], /*kw:The signs are the same, so the product is positive*/
      hint: "Same signs make a positive answer, and 0.5 times 7.2 is half of 7.2.",
      choices: ["3.6", "-3.6", "36", "0.36"], right: 0 },

    { tag: "Careful", q: "Find 12.6 ÷ (-4.2).",
      find: [31], /*kw:Different signs, so negative*/
      hint: "Different signs make a negative answer.",
      choices: ["-3", "3", "-30", "8.4"], right: 0 },

    { tag: "Use It", q: "Estimate -39.2 ÷ (-1.9) with friendly numbers. Which is closest?",
      find: [28], /*kw:Check it with an estimate*/
      hint: "Use -40 ÷ (-2).",
      choices: ["20", "-20", "2", "200"], right: 0 },

    { tag: "Use It", q: "Solve x + 5.4 = 2.1.",
      find: [38], /*kw:Subtract 3.6 from each side*/
      hint: "Subtract 5.4 from both sides: 2.1 - 5.4.",
      choices: ["-3.3", "3.3", "7.5", "-7.5"], right: 0 },

    { tag: "Careful", q: "Solve -0.8m = 6.4.",
      find: [53], /*kw:Divide each side by -0.4*/
      hint: "Divide both sides by -0.8, and a positive over a negative is negative.",
      choices: ["-8", "8", "-80", "-5.12"], right: 0 }
  ],

  /* ⭐ YOUR TURN: a fresh problem in the same world, every step typed and checked. */
  work: [
    { title: "Coming Down to Land",
      ask: "During a descent Sam's plane loses 0.6 thousand feet of height each minute. After some minutes the total change is -4.8 thousand feet. Solve -0.6m = -4.8 for the minutes, m.",
      steps: [
        { ask: "What number do you divide both sides by? Type it with its sign.", answer: -0.6,
          hint: "Divide by the number multiplying m.",
          why: "-0.6m/-0.6 = -4.8/-0.6." },
        { ask: "Work out m. What is -4.8 divided by -0.6?", answer: 8, calc: "48/6",
          hint: "A negative divided by a negative is positive. 48 divided by 6 is the digits.",
          why: "m = 8, so the descent took 8 minutes." },
        { ask: "Check it. What is -0.6 times 8?", answer: -4.8, calc: "-0.6*8",
          hint: "A negative times a positive is negative.",
          why: "-0.6(8) = -4.8, which matches." },
      ] },
  ],

  todo: { title: "What To Do Now", s: [
      "You watched five examples, each one line at a time with its reason, and tried one after each.",
      "First work through Your Turn below the reading, typing each step.",
      "Then come {c} word cards, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "If one is hard, go back to the example that matches it and read its lines again."
  ] }
};
