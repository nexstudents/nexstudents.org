/* maths/prime-factorization
   Grade 7 · maths · unit 4. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-10-11. Written on Sonnet from Glencoe Course 2
   pp132-134 (Lesson 4-2) via the week 8-9 packet (paraphrased notes). Shape copied
   from the pilot, maths/mean-median-and-mode. The Math Antics video (Prime
   Factorization) has not had its transcript read; the order here follows the book:
   prime or composite from the number of factors, then a factor tree, then dividing
   by the least prime.

   🚨 REWRITTEN 2026-10-13 (Sonnet, to be checked by Opus) after Kolten said the lessons
   don't explain well. An audit graded the 2026-10-11 version B: the factor tree was
   only described in text, and exponents got two sentences. This one DRAWS the tree
   for 120 in an even-width font, one level at a time (the columns are counted in
   the comment above TREE), draws the ladder of divisions for 168 row by row, and
   makes the chairs concrete (a table of the four ways to set out 24, dots for the
   four-rows shape, and a walk that tries and fails to set out 29). Exponents now
   open with a recap (powers from Unit 1), say what the small raised number counts,
   and are worked as a four-step walk with a table of how many times each prime
   appears. A recap of what a factor is and what a product is opens the prime and
   tree sections. EXPONENT is now a fifth word card. A fifth Your Turn step asks
   for the exponent as a number. Nothing cut.

   ⚠️ ONE WORLD: Eli setting out chairs in rows for a church supper. Our numbers,
   never the book's (the 300 eggs, 630, 132 and the n squared plus n plus 11
   example are left out). */
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

/* 24 chairs in 4 rows of 6, drawn as dots */
const DOTS24 = ["● ● ● ● ● ●", "● ● ● ● ● ●", "● ● ● ● ● ●", "● ● ● ● ● ●"].join("\n");

/* The factor tree for 120, drawn in an even-width font, so every column is counted:
   the number sits on its own column, and each ┌ ┴ ┐ line joins a parent to its two
   children. Line k is added at step k. Columns (0-based):
     120 on col 11-13 (center 12) · 12 on 7-8 (center 7) · 10 on 18-19 (center 18)
     3 on 4 · 4 on 10 · 2 on 16 · 5 on 20 · the last two 2s on 8 and 12 */
const TREE = [
  "           120",
  "       ┌────┴─────┐",
  "       12         10",
  "    ┌──┴──┐     ┌─┴─┐",
  "    3     4     2   5",
  "        ┌─┴─┐",
  "        2   2",
];
const tree = (k) => TREE.slice(0, k).join("\n");

/* The ladder of divisions for 168: the divisor on the left, the number on the right,
   the numbers right-aligned so the digits sit in columns. */
const NUMS = [168, 84, 42, 21, 7], DIVS = [2, 2, 2, 3];
const ladder = (k) => {
  const rows = [];
  for (let i = 0; i < k; i++) rows.push(DIVS[i] + " │ " + String(NUMS[i]).padStart(3));
  rows.push("  │ " + String(NUMS[k]).padStart(3));
  return rows.join("\n");
};
module.exports = {
  id: "maths/prime-factorization",
  slug: "prime-factorization",
  title: "Prime Factorization",
  unit: "Math 7 &middot; U4-L2",
  seq: { unit: 4, unitTitle: "Patterns and Number Sense", n: 2 },
  natural: "2026-10-13",

  /* ── /teach-plan, 2026-10-11. Glencoe Course 2 pp132-134. ── */
  plan: {
    objective: "Decide whether a number is prime or composite, and write a composite number as a product of primes with a factor tree or by dividing by the least prime.",
    markers: [
      "BOOK (paraphrased), Objective box: find the prime factorization of a composite number.",
      "BOOK (paraphrased), definitions: a prime number has exactly two factors, 1 and itself; a composite number has more than two; 0 and 1 are neither.",
      "BOOK (paraphrased), every composite number can be written as a product of primes in exactly one way, ignoring order.",
      "BOOK (paraphrased), Example 1: a factor tree, which splits a number into two factors and keeps splitting until every branch is prime; repeated primes are written with exponents.",
      "BOOK (paraphrased), Example 2: start with the divisibility rules and divide by the least prime until the quotient is prime.",
      "BOOK (paraphrased), Checking for Understanding: a rectangle of dots with only one possible shape shows a prime.",
    ],
    method: "PRIME OR COMPOSITE FIRST. A prime has exactly two factors, 1 and itself. To break a composite number down, either grow a factor tree (split into any two factors, keep splitting, stop when every branch is prime) or divide by 2, then 3, then 5 and so on, until the quotient is prime. Both ways give the same primes, in any order, and repeats get an exponent.",
    exampleOnly: [
      "Eli setting out chairs in rectangles for a church supper. WORLD: one fellowship hall, our numbers.",
      "Left out on purpose: the book's hen and 300 eggs, the 630 and 132 examples and the n squared plus n plus 11 pattern (more worlds).",
    ],
    digitize: "Reading engine. Ten short Watch It Worked walkthroughs (two for the chairs, prime or not, a factor tree drawn one level at a time, a ladder of divisions drawn row by row, and exponents), one Your Turn typed step by step, a video behind a button, and the homework sheet.",
    unclear: "",
  },

  sheet: { slug: "prime-factorization-homework", subject: "maths",
    note: "Do it on screen or print it. Your score shows here once you check it." },


  shelf: { grades: [7], subject: "Math",
    blurb: "Eli has 24 chairs and can set them out four ways, and 29 chairs only one way. Prime and composite numbers, factor trees, and breaking any number into primes.",
    contains: [
      "Prime and composite numbers, from a picture of chairs in rows",
      "A factor tree drawn one level at a time",
      "Dividing by the least prime, as a second way",
      "Exponents for repeated primes, with a plain meaning",
      "A Your Turn problem you work and type one step at a time",
    ] },
  eyebrow: ["Math 7", "U4-L2", "Patterns and Number Sense"],
  dek: "Every number bigger than 1 is either a prime or a stack of primes multiplied together. Breaking a number down into its primes is like taking apart a machine to see what it's made of.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "By the end of this lesson your student should be able to tell a prime from a composite number, and write the prime factorization of a composite number with a factor tree or by dividing by the least prime, using exponents for repeats."
      ]},
      { h: "Where Students Get Stuck", p: [
        "🚨 Calling 1 a prime. A prime needs exactly two factors, and 1 only has one, so 1 is neither prime nor composite.",
        "Stopping a factor tree too early, with a composite number like 4 or 10 still sitting at the end of a branch.",
        "Thinking different trees give different answers. They look different and always end in the same primes."
      ]},
      { h: "Teaching Suggestion", p: [
        "Have the student multiply the primes back together at the end of every problem. If the product doesn't match the number he started with, a prime went missing."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Chairs in Rows", s: [
      "Eli's church is having a supper, and he's been asked to set out chairs in tidy rectangles, with the same number in every row.",
      "With 24 chairs he can make 1 row of 24, 2 rows of 12, 3 rows of 8 or 4 rows of 6, so he has a choice of four shapes.",
      "",
      "[walk] Set out 24 chairs in rectangles.",
      "[step] One long row holds all 24, and two rows hold 12 each. || " + table([["Rows", "Chairs in each row"], ["1", "24"], ["2", "12"]]),
      "[step] Three rows hold 8 each, and four rows hold 6 each. || " + table([["Rows", "Chairs in each row"], ["1", "24"], ["2", "12"], ["3", "8"], ["4", "6"]]),
      "[step] Here is the four-rows shape, drawn as dots. || " + DOTS24,
      "",
      "With 29 chairs he's stuck, and the next walk shows why.",
      "",
      "[walk] Try to set out 29 chairs in even rows.",
      "[step] Two rows of 14 use 28 chairs and leave 1 over. || 2 × 14 = 28, and 1 chair is left",
      "[step] Three rows of 9 use 27 chairs and leave 2 over. || 3 × 9 = 27, and 2 chairs are left",
      "[step] Nothing works except one long row of 29. || 1 × 29 = 29, the only rectangle",
      "",
      "That difference is the whole idea of this lesson: some numbers break into smaller factors, and some refuse to."
    ]},

    { title: "Prime or Composite?",
      s: [
      "Remember that a factor is a number that divides another number evenly, so 4 is a factor of 24.",
      "A {{prime}} number is a whole number greater than 1 with exactly two factors, 1 and itself, and so 29 is prime because nothing else divides it.",
      "A {{composite}} number is a whole number greater than 1 with more than two factors, and 24 is composite because it has eight of them, 1, 2, 3, 4, 6, 8, 12 and 24.",
      "The number 1 is neither prime nor composite, since it has only one factor, and 0 is neither as well.",
      "The primes up to 20 are 2, 3, 5, 7, 11, 13, 17 and 19, and 2 is the only even prime, because every other even number can be divided by 2.",
      "",
      "[walk] Decide whether 51 is prime or composite.",
      "[step] Look for a small factor using the divisibility rules from the last lesson, because that's faster than trying every number. || 51: ones digit 1, so not 2, 5 or 10",
      "[step] Add the digits to test for 3. || 5 + 1 = 6, and 6 is divisible by 3",
      "[step] Divide by 3 to find the other factor. || 51 ÷ 3 = 17, so 51 = 3 × 17",
      "[step] A number with a factor other than 1 and itself is composite. || 51 is composite",
      "",
      "The number 51 looks prime because it's odd and doesn't end in 0 or 5, and it fools a lot of people.",
      "The habit that saves you is checking the rule for 3 before you decide, and then 7 and 11 for bigger numbers."
    ]},

    { title: "Grow a Factor Tree",
      s: [
      "To write a composite number as a product of primes, you can grow a {{factor tree}}.",
      "A product is just the answer to a multiplication, and a factor tree splits a number into two factors and keeps splitting every branch that isn't prime.",
      "You can start with any two factors that multiply to the number, and you stop when every branch ends in a prime.",
      "",
      "[walk] Grow a factor tree for 120.",
      "[step] Put 120 at the top. || " + tree(1),
      "[step] Split 120 into any two factors, such as 12 and 10, since 12 × 10 = 120. || " + tree(3),
      "[step] Neither 12 nor 10 is prime, so split each one again, 12 into 3 and 4, and 10 into 2 and 5. || " + tree(5),
      "[step] The 4 is still composite, so split it into 2 and 2, and now every branch ends in a prime. || " + tree(7),
      "[step] Collect the primes at the ends of the branches, in order from least to greatest. || primes at the ends:  3, 2, 2, 2, 5\nin order:  2, 2, 2, 3, 5",
      "[step] Multiply them back together to check. || 2 × 2 × 2 × 3 × 5 = 120",
      "",
      "A branch that ends in 4 or 10 isn't finished, so keep asking of every branch whether it's prime before you stop.",
      "If a friend starts with 8 × 15 instead of 12 × 10, the tree looks completely different, but you'll find the same five primes at the end of it, and that's one of the surprising facts about numbers."
    ]},

    { title: "Divide by the Least Prime",
      s: [
      "There's a second way that doesn't need a tree, and it's just a ladder of divisions.",
      "Divide by 2 as long as you can, then by 3, then by 5, and keep going until what's left is a prime.",
      "It works because you always take out the smallest factor first, so you can't miss one.",
      "",
      "[walk] Find the prime factors of 168 by dividing.",
      "[step] The ones digit is even, so divide by 2. || " + ladder(1),
      "[step] 84 is even too, so divide by 2 again. || " + ladder(2),
      "[step] 42 is still even, so divide by 2 once more. || " + ladder(3),
      "[step] 21 is odd, so try 3, and the digit sum 3 says it works. || " + ladder(4),
      "[step] What's left is 7, which is prime, so you're done, and the answer is every divisor you used plus that last number. || 168 = 2 × 2 × 2 × 3 × 7",
      "",
      "Those two methods always agree, because every composite number can be written as a product of primes in exactly one way, if you ignore the order.",
      "That product of primes is called the {{prime factorization}}, and it's like a fingerprint for the number."
    ]},

    { title: "Short Ways to Write It", s: [
      "In an earlier lesson you met powers, and the small raised number is called an {{exponent}}.",
      "An exponent says how many times to multiply a number by itself, so 2³ means 2 × 2 × 2, which is 8.",
      "When the same prime shows up more than once in a factorization, you can use an exponent to count the repeats.",
      "",
      "[walk] Write 2 × 2 × 2 × 3 × 7 with an exponent.",
      "[step] Count how many times each prime appears. || " + table([["Prime", "Times it appears"], ["2", "3"], ["3", "1"], ["7", "1"]]),
      "[step] A prime that appears more than once gets a small raised number that says how many times. || 2 appears 3 times, so 2³",
      "[step] A prime that appears only once doesn't need one. || 2³ × 3 × 7",
      "[step] Multiply it back out to check that nothing changed. || 2³ = 2 × 2 × 2 = 8\n8 × 3 × 7 = 168",
      "",
      "The factorization of 120, with its three 2s, one 3 and one 5, is written 2³ × 3 × 5.",
      "Only the primes get written in the final answer, so never leave a 4 or a 6 in a prime factorization."
    ]}
  ],

  words: [
    ["Prime", "A whole number greater than 1 with exactly two factors, 1 and itself.", 13],
    ["Composite", "A whole number greater than 1 with more than two factors.", 14],
    ["Factor tree", "A diagram that splits a number into factors, then splits each factor, until every branch ends in a prime.", 24],
    ["Prime factorization", "A number written as a product of primes, such as 12 = 2 × 2 × 3.", 46],
    ["Exponent", "A small raised number that says how many times to multiply a number by itself, so 2³ means 2 × 2 × 2.", 47],
  ],

  findsAt: 57,
  questions: [
    { tag: "The Setup", q: "Why can Eli set out 24 chairs in several rectangles but 29 chairs in only one?",
      find: [1,6],
      hint: "Read Chairs in Rows.",
      choices: [
        "24 has many factors, and 29 is prime so it only has two.",
        "29 is an even number.",
        "24 is a prime number.",
        "29 has more factors than 24."
      ], right: 0 },

    { tag: "Use It", q: "Which of these numbers is prime?",
      find: [13],
      hint: "Look for a factor other than 1 and itself.",
      choices: ["21", "27", "39", "31"], right: 3 },

    { tag: "Use It", q: "Which of these numbers is composite?",
      find: [14,20],
      hint: "A composite number has a factor other than 1 and itself.",
      choices: ["13", "51", "17", "2"], right: 1 },

    { tag: "Careful", q: "Why isn't 1 a prime number?",
      find: [15],
      hint: "A prime has exactly two factors.",
      choices: [
        "It has only one factor, itself.",
        "It's too small to count.",
        "It's an even number.",
        "It has three factors."
      ], right: 0 },

    { tag: "Use It", q: "Which is the prime factorization of 36?",
      find: [32],
      hint: "Every factor has to be prime.",
      choices: ["4 × 9", "6 × 6", "2 × 18", "2 × 2 × 3 × 3"], right: 3 },

    { tag: "Use It", q: "Which is the prime factorization of 60?",
      find: [40,44],
      hint: "Divide by 2 as long as you can, then 3, then 5.",
      choices: ["2 × 3 × 10", "2 × 2 × 15", "2 × 2 × 3 × 5", "4 × 15"], right: 2 },

    { tag: "Careful", q: "A student's factor tree for 40 ends with 4 and 10 at the bottom. Why isn't it finished?",
      find: [31,34],
      hint: "Read Grow a Factor Tree.",
      choices: [
        "4 and 10 aren't prime, so they have to be split again.",
        "40 can't be split.",
        "Trees must end in 1.",
        "It is finished, 4 and 10 are prime."
      ], right: 0 },

    { tag: "Careful", q: "One student makes a tree for 30 that starts with 2 × 15, and another starts with 5 × 6. Do they end up with different prime factorizations?",
      find: [35,45],
      hint: "Read Divide by the Least Prime.",
      choices: [
        "No, both end in 2 × 3 × 5.",
        "Yes, so one of them is wrong.",
        "Yes, 2 × 15 gives more primes.",
        "No, but only one tree can work."
      ], right: 0 },

    { tag: "Use It", q: "Which is 2 × 2 × 2 × 5 written with an exponent?",
      find: [51, 52],
      hint: "Read Short Ways to Write It. Count the 2s.",
      choices: ["2³ × 5", "3² × 5", "2 × 3 × 5", "8 × 5"], right: 0 }
  ],

  vocabQuestions: [
    { q: "What is a <i>prime</i> number?",
      choices: ["Any odd number.", "A whole number greater than 1 with exactly two factors, 1 and itself.", "A number with many factors.", "The number 1."], right: 1 },
    { q: "What is a <i>composite</i> number?",
      choices: ["A number with exactly two factors.", "A whole number greater than 1 with more than two factors.", "Any even number.", "The number 0."], right: 1 },
    { q: "What is a <i>factor tree</i>?",
      choices: ["A diagram that splits a number into factors until every branch is prime.", "A list of multiples.", "A chart of divisibility rules.", "A kind of line plot."], right: 0 },
    { q: "What is the <i>prime factorization</i> of 12?",
      choices: ["3 × 4", "2 × 6", "2 × 2 × 3", "12 × 1"], right: 2 },
    { q: "What does the exponent in <i>2³</i> tell you?",
      choices: ["How many times 2 is multiplied by itself, which is 3", "That you add 2 and 3", "That the answer is 6", "That 2 is a composite number"], right: 0 }
  ],

  /* ⭐ YOUR TURN: a fresh number in the same world, every step typed and checked. */
  work: [
    { title: "Ninety Folding Chairs",
      ask: "The fellowship hall has 90 folding chairs. Break 90 into primes by dividing by the least prime, one step at a time.",
      steps: [
        { ask: "90 is even, so divide by 2. What's the quotient?", answer: 45, calc: "90/2",
          hint: "Half of 90.",
          why: "45, which is odd, so 2 is done." },
        { ask: "45 is odd and its digit sum is 9, so divide by 3. What's the quotient?", answer: 15, calc: "45/3",
          hint: "45 divided by 3.",
          why: "15." },
        { ask: "15 is still divisible by 3. Divide again. What's the quotient?", answer: 5, calc: "15/3",
          hint: "15 divided by 3.",
          why: "5, and 5 is prime, so you can stop." },
        { ask: "List every prime you divided by, plus the last quotient, from least to greatest. Type them with commas.",
          answer: [2, 3, 3, 5],
          hint: "You divided by 2, then 3, then 3, and the last quotient was 5.",
          why: "90 = 2 × 3 × 3 × 5. Multiply to check: 2 × 3 × 3 × 5 is 90." },
        { ask: "In 2 × 3 × 3 × 5, how many times does 3 appear? That number is the exponent on the 3.", answer: 2,
          hint: "Count the 3s in the list.",
          why: "Two 3s, so the exponent is 2 and 90 = 2 × 3² × 5." },
      ] },
  ],

  todo: { title: "What To Do Now", s: [
      "Eli's chairs turned into primes, trees and a ladder of divisions, and the rest of this page is your turn to break numbers down yourself.",
      "First work through Your Turn below the reading, typing each step.",
      "Then come {c} word cards, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "Last, open the Homework Sheet with the button at the bottom of the page, and either fill it out right on the screen or print it and do it on paper."
  ] }
};
