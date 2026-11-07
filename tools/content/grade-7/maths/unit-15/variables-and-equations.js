/* maths/variables-and-equations
   Grade 7 · maths · Pre-Algebra Chapter 2, Lesson 2.4.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-11-07. From McDougal Littell Pre-Algebra (California,
   2008) pp85-89, via the weeks 10-11 packet (paraphrased book notes, not the page itself).

   SHAPE COPIED FROM 2.1: plain English for each word, a symbol row, the book's four
   examples IN THE BOOK'S ORDER (sentence to equation, check a possible solution, mental
   math as a question, write and solve), one line per move with the reason on the right,
   a Try One after each. The book's lotus-seed example became an old biplane at the
   airfield: same verbal model (year built + age = year restored), same friendly 2000.
   ONE WORLD: Sam, a student pilot, at a small airfield.

   NO HOMEWORK SHEET this batch (Paul, 2026-11-07). The scored work is the 8 questions
   plus Your Turn. No `sheet` field, no visuals.

   ADDED FROM THE RECORD: nothing.
   FOR THE REVIEW QUEUE: the 8 questions and Your Turn are mine; the wrong answers are the
   real mistakes (12 - y written backward, the right equation with the wrong solution). */
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
  id: "maths/variables-and-equations",
  slug: "variables-and-equations",
  title: "Variables and Equations",
  unit: "Pre-Algebra &middot; 2.4",
  seq: { unit: 15, unitTitle: "Pre-Algebra: Solving Equations", n: 4 },
  natural: "2026-11-07",

  /* ── /teach-plan, 2026-11-07. ML Pre-Algebra 2008 pp85-89. ── */
  plan: {
    objective: "Write a verbal sentence as an equation, check whether a number is a solution, and solve simple equations with mental math by asking the equation as a question.",
    markers: [
      "BOOK, definitions: an equation is a math sentence with an equal sign; a solution makes it true; solving means finding all solutions.",
      "BOOK, side note: the symbols = , =? and not-equal, and a question mark above a symbol means a question is being asked.",
      "BOOK, Examples 1 to 4, one line per step, a Checkpoint after Examples 2 and 3.",
      "BOOK, Example 3 table: Equation, Question, Solution, Check.",
    ],
    method: "WRITE IT, ASK IT, CHECK IT. Turn the words sum, difference, product and quotient into plus, minus, times and divide, in the order the sentence says them. To solve with mental math, say the equation as a question, then put your answer back in to check.",
    exampleOnly: [
      "Sam the student pilot at a small airfield. WORLD: one airfield, our numbers.",
      "Left out on purpose: the book's lotus seeds, go-carts and computer sales.",
    ],
    digitize: "Reading engine. The book's order: word meanings with a symbol row, Examples 1-4 as walks with a Try One after each, 8 questions, one Your Turn. No homework sheet.",
    assumes: "Integers (done), substituting a number for a letter (done), the words sum, difference, product and quotient (recapped on the page).",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Math",
    blurb: "An equation is a math sentence, and a solution makes it true. Four worked examples turn words into equations and solve them by asking a question.",
    contains: [
      "What equation, solution and solving mean",
      "The symbols for equal, equal question mark, and not equal",
      "Turning words like sum and difference into equations",
      "Checking a number by putting it in",
      "Solving by mental math, asking the equation as a question",
      "Eight questions and a Your Turn problem",
    ] },
  eyebrow: ["Pre-Algebra", "2.4", "Solving Equations"],
  dek: "An equation is a math sentence, and Sam learns to ask it as a question to find the number that makes it true.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "By the end of this lesson your student should be able to write a verbal sentence as an equation, test whether a number is a solution by putting it in, and solve a simple equation by asking it as a question."
      ]},
      { h: "Where Students Get Stuck", p: [
        "Writing a difference backward. The difference of 12 and y is 12 - y, not y - 12, because the sentence names 12 first.",
        "Checking only one side. A number is a solution only if the two sides come out equal after you put it in.",
        "Forgetting the sign in the answer. -15 divided by 5 is -3, and the check shows whether a positive guess is wrong."
      ]},
      { h: "Book Pages", p: [
        "McDougal Littell Pre-Algebra (2008), pages 85 to 89. Read free on archive.org: https://archive.org/details/prealgebra0000unse_z0p2/page/85/mode/1up"
      ]},
      { h: "Suggested Videos", videos: [
        { id: "wVtyOmLCso4", title: "Solving One-Step Equations | Lesson + Practice", channel: "Math with Mr. J",
          why: "Solves one-step equations by thinking it through, the same mental-math style as Example 3." },
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "What the Words Mean", s: [
      "An {{equation}} is a math sentence, and like any sentence it makes a claim, in this case that two things are equal.",
      "You write one by putting an equal sign between two expressions, such as x + 6 = 9.",
      "A {{solution}} of an equation is a number you can put in for the letter that makes the claim true, and finding all the solutions is called {{solving an equation}}.",
      "",
      "[walk] See the three symbols you will use.",
      "[step] A question mark above a symbol means you are asking whether it is true, and a slash through a symbol means the opposite. || " + table([["Symbol", "Means"], ["=", "is equal to"], ["=?", "is this equal to? (a question)"], ["≠", "is not equal to"]]),
      "",
      "Four small words tell you which operation to write, and you write the numbers in the order the sentence says them.",
      "Difference and quotient are the two to be careful with, because the order matters for both of them.",
      "",
      "[walk] See the four words and what they mean.",
      "[step] Each word names an operation. || " + table([["Word", "Operation", "Example"], ["sum", "add", "the sum of x and 6 is x + 6"], ["difference", "subtract", "the difference of 12 and y is 12 - y"], ["product", "multiply", "the product of 4 and p is 4p"], ["quotient", "divide", "the quotient of n and 2 is n/2"]])
    ]},

    { title: "Example 1: Sentences to Equations", s: [
      "Sam writes sentences in his flight notebook, and he turns each one into an equation by changing the key word into its operation and putting the equal sign where the word is.",
      "The order of the numbers matters for a difference and a quotient, so write them in the order the sentence names them.",
      "",
      "[walk] Write each sentence as an equation.",
      "[step] The sum of x and 8 is 14. || x + 8 = 14",
      "[step] The difference of 20 and y is 6, with the 20 first. || 20 - y = 6",
      "[step] The product of -3 and p is 27. || -3p = 27",
      "[step] The quotient of n and 4 is 12. || n/4 = 12",
      "",
      "[walk] Try one: write the sum of 7 and z is -10, then the quotient of m and 6 is 4, then the difference of 15 and w is 9.",
      "[step] A sum means add. || 7 + z = -10",
      "[step] A quotient means divide, with m first. || m/6 = 4",
      "[step] A difference means subtract, with the 15 first. || 15 - w = 9"
    ]},

    { title: "Example 2: Checking a Possible Solution", s: [
      "To test whether a number is a solution, put it in for the letter and see whether the two sides come out equal.",
      "If they do, the number is a solution, and if they don't, it isn't.",
      "",
      "[walk] Tell whether 8 or 10 is a solution of x - 6 = 4.",
      "[step] Put 8 in for x. || x - 6 = 4\n8 - 6 =? 4      substitute 8 for x",
      "[step] The two sides are not equal, so 8 is not a solution. || 2 ≠ 4      not true",
      "[step] Now put 10 in for x. || 10 - 6 =? 4      substitute 10 for x",
      "[step] The two sides are equal, so 10 is a solution. || 4 = 4      true, it checks",
      "",
      "[walk] Try one: tell whether -5 or 5 is a solution of -4y = 20.",
      "[step] Put -5 in for y. || -4(-5) =? 20      substitute -5 for y\n20 = 20      true, so -5 is a solution",
      "[step] Put 5 in for y. || -4(5) =? 20      substitute 5 for y\n-20 ≠ 20      not true, so 5 is not a solution"
    ]},

    { title: "Example 3: Solving by Asking a Question", s: [
      "You can solve a simple equation in your head by saying it as a question: what number goes in the blank to make it true?",
      "Then you check your answer by putting it back in, the same as in Example 2.",
      "",
      "[walk] Solve each equation by asking it as a question.",
      "[step] Ask each equation as a question, answer it, and check. || " + table([["Equation", "Question", "Solution", "Check"], ["x + 5 = 12", "What number plus 5 is 12?", "7", "7 + 5 = 12"], ["14 - m = 9", "14 minus what number is 9?", "5", "14 - 5 = 9"], ["24 = 6t", "24 is 6 times what number?", "4", "24 = 6(4)"], ["y/5 = -3", "What number divided by 5 is -3?", "-15", "-15/5 = -3"]]),
      "",
      "[walk] Try one: solve x - 8 = 5, 3 + n = -4, 4w = -20 and 6 = 42/s.",
      "[step] Ask each as a question, answer it, and check. || " + table([["Equation", "Question", "Solution", "Check"], ["x - 8 = 5", "What number minus 8 is 5?", "13", "13 - 8 = 5"], ["3 + n = -4", "3 plus what number is -4?", "-7", "3 + (-7) = -4"], ["4w = -20", "4 times what number is -20?", "-5", "4(-5) = -20"], ["6 = 42/s", "42 divided by what number is 6?", "7", "42/7 = 6"]])
    ]},

    { title: "Example 4: Writing and Solving", s: [
      "A word problem becomes an equation in three moves: write a sentence that says what is going on, give the unknown a letter, and then put the numbers in.",
      "If you are only estimating, you can pick a friendly number, like 2000, so the mental math stays easy.",
      "",
      "[walk] An old biplane was restored at the airfield between 1998 and 2002 and was about 70 years old when it was done, so estimate the year it was built.",
      "[step] Say what is going on in words. || year built + age = year restored",
      "[step] Let x be the year it was built, and use 2000 for the year restored, since that is inside 1998 to 2002 and easy to work with. || x + 70 = 2000      substitute into the verbal model",
      "[step] Ask it as a question: what number plus 70 is 2000? || 1930 + 70 = 2000      mental math",
      "[step] So the biplane was built around 1930. || x = 1930",
      "",
      "[walk] Try one: a ride in the airfield's flight simulator costs $4 and the club takes in $800 in all, so how many rides were there?",
      "[step] Let r be the number of rides, and write a sentence in words. || price of a ride × number of rides = money taken in\n4r = 800      substitute into the verbal model",
      "[step] Ask it as a question: 4 times what number is 800? || 4(200) = 800      mental math, so r = 200"
    ]}
  ],

  words: [
    ["Equation", "A math sentence with an equal sign between two expressions, like x + 6 = 9.", 0 /*kw:{{equation}}*/],
    ["Solution", "A number that makes an equation true when you put it in for the letter.", 2 /*kw:{{solution}}*/],
    ["Solving an equation", "Finding all the solutions of an equation.", 2 /*kw:{{solving an equation}}*/],
    ["Verbal model", "A sentence in words that says how the quantities in a problem fit together, like year built + age = year restored.", 39 /*kw:Say what is going on in words*/],
  ],

  questions: [
    { tag: "Use It", q: "Which equation says the difference of 15 and y is 6?",
      find: [13], /*kw:The difference of 20 and y is 6*/
      hint: "Write the numbers in the order the sentence says them.",
      choices: ["15 - y = 6", "y - 15 = 6", "15y = 6", "y/15 = 6"], right: 0 },

    { tag: "Use It", q: "Which equation says the quotient of n and 5 is 9?",
      find: [15], /*kw:The quotient of n and 4 is 12*/
      hint: "A quotient is a division, with n named first.",
      choices: ["n/5 = 9", "5/n = 9", "5n = 9", "n + 5 = 9"], right: 0 },

    { tag: "Use It", q: "Which number is a solution of y - 4 = 9?",
      find: [23], /*kw:Put 8 in for x*/
      hint: "Put each choice in for y and see whether the sides match.",
      choices: ["13", "5", "9", "-13"], right: 0 },

    { tag: "Careful", q: "Is -3 a solution of -4y = 12?",
      find: [28], /*kw:Put -5 in for y*/
      hint: "Put -3 in for y and multiply with the sign rule.",
      choices: ["Yes, because -4(-3) = 12.", "No, because -4(-3) = -12.", "No, because -4(-3) = 7.", "Yes, because -4(3) = 12."], right: 0 },

    { tag: "Use It", q: "Use mental math to solve 35 = 7t.",
      find: [30, 33], /*kw:24 is 6 times what number|You can solve a simple equation*/
      hint: "35 is 7 times what number?",
      choices: ["5", "28", "42", "245"], right: 0 },

    { tag: "Use It", q: "Use mental math to solve 20 - m = 8.",
      find: [30, 33], /*kw:14 minus what number is 9|You can solve a simple equation*/
      hint: "20 minus what number is 8?",
      choices: ["12", "28", "-12", "160"], right: 0 },

    { tag: "Careful", q: "Use mental math to solve y/3 = -7.",
      find: [30, 33], /*kw:What number divided by 5 is -3|You can solve a simple equation*/
      hint: "What number divided by 3 gives -7? Check the sign.",
      choices: ["-21", "21", "-4", "-10"], right: 0 },

    { tag: "Use It", q: "The airfield's hangar was built in year x and was 60 years old in 2000. Which equation and solution fit?",
      find: [39], /*kw:Say what is going on in words*/
      hint: "Year built plus age is the year it was 60 years old.",
      choices: ["x + 60 = 2000, so x = 1940", "x - 60 = 2000, so x = 2060", "60x = 2000, so x = 33", "x + 60 = 2000, so x = 2060"], right: 0 }
  ],

  /* ⭐ YOUR TURN: a fresh problem in the same world, every step typed and checked. */
  work: [
    { title: "Sightseeing Rides",
      ask: "The flight club earns $6 for each sightseeing ride and has taken in $270. How many rides? Write 6r = 270 and ask it as a question.",
      steps: [
        { ask: "6 times what number is 270? Type the number of rides.", answer: 45, calc: "270/6",
          hint: "How many 6s fit in 270?",
          why: "6 times 45 is 270, so r = 45 rides." },
        { ask: "Check it. What is 6 times your answer?", answer: 270, calc: "6*45",
          hint: "Put 45 in for r.",
          why: "6(45) = 270, which matches the money taken in." },
        { ask: "One more question: y + 29 = 100. What is y?", answer: 71, calc: "100-29",
          hint: "What number plus 29 is 100?",
          why: "71 + 29 = 100." },
      ] },
  ],

  todo: { title: "What To Do Now", s: [
      "You watched four examples, each one line at a time with its reason, and tried one after each.",
      "First work through Your Turn below the reading, typing each step.",
      "Then come {c} word cards, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "If one is hard, go back to the example that matches it and read its lines again."
  ] }
};
