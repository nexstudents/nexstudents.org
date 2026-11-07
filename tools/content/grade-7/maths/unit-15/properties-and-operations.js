/* maths/properties-and-operations
   Grade 7 · maths · Pre-Algebra Chapter 2, Lesson 2.1.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-11-01. From McDougal Littell Pre-Algebra (California,
   2008) pp63-66, read in the archive.org reader (prealgebra0000unse_z0p2).

   🆕 THIRD BUILD, IN THE BOOK'S OWN SHAPE. Paul walked me through page 63 after two drafts
   that were harder than the book: "it explain it simply to understand" · "it show alot of
   exmaples over and over to finally do the exercise" · "you need to break it down like how
   this works". So: what the words mean in plain English, one chart (numbers, then letters),
   then the book's five examples IN THE BOOK'S ORDER, each one line per move with the reason
   beside it, and a Try One after each. Nothing the book doesn't do.
   → memory feedback-teach-it-the-way-the-book-does

   The lesson TEACHES, and the homework sheet IS the work (Paul's new shape, 2026-11-01).
   Our numbers and our world, never the book's (CD player, roller coaster, dinosaur out).

   ⚠️ ONE WORLD: Sam, a student pilot, at a small airfield. */
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
  id: "maths/properties-and-operations",
  slug: "properties-and-operations",
  title: "Properties and Operations",
  unit: "Pre-Algebra &middot; 2.1",
  /* Was shelved in Glencoe slot 5-9 from 2026-11-01. From 2026-11-07 it is lesson 1 of the
     Pre-Algebra unit (prealgebra-units.js, pager number 15) on the Math 7 shelf. */
  seq: { unit: 15, unitTitle: "Pre-Algebra: Solving Equations", n: 1 },
  natural: "2026-11-01",

  /* ── /teach-plan, 2026-11-01. ML Pre-Algebra 2008 pp63-66. ── */
  plan: {
    objective: "Use the commutative, associative and identity properties to evaluate and simplify, giving the reason for each line, and multiply by a conversion factor to change units.",
    markers: [
      "BOOK, opening: commute means to change location, associate means to group together.",
      "BOOK, rule box: \"Commutative and Associative Properties\", each written as Words, Numbers and Algebra.",
      "BOOK, Examples 1 to 5, each worked one line per step with the reason on the right, a Checkpoint after Examples 2, 3 and 5.",
      "BOOK, Checkpoint: \"Evaluate the expression. Justify each of your steps.\"",
    ],
    method: "ONE LINE PER MOVE, REASON ON THE RIGHT. Start where you'd normally start (left to right), then swap (commutative) and regroup (associative) until the easy numbers sit together. Identity: 0 and 1 change nothing, which is why a conversion factor (a fraction equal to 1) changes the unit but not the amount.",
    exampleOnly: [
      "Sam the student pilot at a small airfield. WORLD: one airfield, our numbers.",
      "Left out on purpose: the book's CD player, roller coaster, dinosaur and fish.",
    ],
    digitize: "Reading engine. The book's order: word meanings, chart, Examples 1-5 as walks with a Try One walk after each, one Your Turn. The homework sheet is the graded work.",
    assumes: "Integers (done), substituting a number for a letter (Glencoe 1-8, done), order of operations (done), 1 yard = 3 feet, 1 hour = 60 minutes.",
    unclear: "",
  },

  sheet: { slug: "properties-and-operations-homework", subject: "maths",
    note: "This is your work for the lesson. Do it on screen or print it." },

  shelf: { grades: [7], subject: "Math",
    blurb: "Commute means move and associate means group. Five worked examples, one line at a time, show how moving and grouping numbers makes the math easy.",
    contains: [
      "What commutative and associative mean in plain English",
      "A chart of each property in numbers and in algebra",
      "Five worked examples, each with a Try One",
      "The identity properties of 0 and 1",
      "Changing units with a conversion factor",
      "A Your Turn problem you type one step at a time",
    ] },
  eyebrow: ["Pre-Algebra", "2.1", "Solving Equations"],
  dek: "Commute means move and associate means group, and those two ideas make Sam's preflight math easy.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "By the end of this lesson your student should be able to swap and regroup numbers to make a problem easy, give the property that allows each line, and use a conversion factor to change units."
      ]},
      { h: "Where Students Get Stuck", p: [
        "Mixing up the two names. Commutative moves the numbers, and associative only moves the parentheses.",
        "Using the properties on subtraction or division, where they don't work. 10 - 4 is not 4 - 10.",
        "Picking a conversion factor upside down. The unit you want goes on top."
      ]},
      { h: "Book Pages", p: [
        "McDougal Littell Pre-Algebra (2008), pages 63 to 66. Read free on archive.org: https://archive.org/details/prealgebra0000unse_z0p2/page/63/mode/1up"
      ]},
      { h: "Suggested Videos", videos: [
        { id: "Doqt7bb8Gno", title: "Multiplication Properties | Commutative, Associative, Identity, & Zero", channel: "Math with Mr. J",
          why: "A short, clear walk through the same properties, on the multiplying side." },
        { id: "a0deCn5QNFI", title: "Addition Properties - Commutative, Associative, Identity, Inverse | Algebra", channel: "The Organic Chemistry Tutor",
          why: "The adding side of the same properties, with plain worked examples." },
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "What the Words Mean", s: [
      "In everyday English, to commute means to move from one place to another, the way people commute to work.",
      "To associate means to group together, the way you associate with your friends.",
      "The math words mean almost the same thing, so the {{commutative property}} lets numbers move to new places, and the {{associative property}} lets you group numbers together.",
      "",
      "[walk] See both properties in numbers, and then in letters.",
      "[step] The commutative property: you can add or multiply in any order. || " + table([["", "Numbers", "Algebra"], ["Adding", "5 + (-3) = -3 + 5", "a + b = b + a"], ["Multiplying", "6(-2) = -2(6)", "ab = ba"]]),
      "[step] The associative property: you can move the parentheses and the answer stays the same. || " + table([["", "Numbers", "Algebra"], ["Adding", "(7 + 4) + 6 = 7 + (4 + 6)", "(a + b) + c = a + (b + c)"], ["Multiplying", "(2 · 9) · 5 = 2 · (9 · 5)", "(ab)c = a(bc)"]]),
      "",
      "The letters in the algebra column stand for any numbers at all, so each one is the same pattern you just saw in the numbers column.",
      "Now watch the two properties do some work."
    ]},

    { title: "Example 1: Adding", s: [
      "Sam is buying gear for flight school: a headset for $36, a logbook for $27 and a set of charts for $14.",
      "Adding left to right works, but 36 and 14 make 50, which is much easier, so move them together and say why each move is allowed.",
      "",
      "[walk] Find the total cost, 36 + 27 + 14.",
      "[step] You'd normally go left to right, so 36 + 27 comes first. || 36 + 27 + 14\n= (36 + 27) + 14      order of operations",
      "[step] Swap 36 and 27, since numbers can move. || = (27 + 36) + 14      commutative property",
      "[step] Move the parentheses so 36 and 14 are grouped together. || = 27 + (36 + 14)      associative property",
      "[step] Add the easy pair. || = 27 + 50",
      "[step] Add what's left, so the gear costs $77. || = 77",
      "",
      "[walk] Try one on paper, 18 + 45 + 2, and press Next Step to check each line.",
      "[step] Start left to right. || (18 + 45) + 2      order of operations",
      "[step] Swap 18 and 45. || (45 + 18) + 2      commutative property",
      "[step] Group 18 and 2, which make 20. || 45 + (18 + 2)      associative property",
      "[step] Add. || 45 + 20 = 65"
    ]},

    { title: "Example 2: Multiplying, With Letters", s: [
      "The same moves work for multiplying, and the easy pairs to look for are numbers like 4 and 25, which make 100.",
      "Here the numbers arrive as letters, so you put the numbers in first and then use the properties.",
      "",
      "[walk] Evaluate 4xy when x = -6 and y = 25.",
      "[step] Put the numbers in for the letters. || 4xy = 4(-6)(25)",
      "[step] You'd normally go left to right, so 4 times -6 comes first. || = [4(-6)](25)      order of operations",
      "[step] Swap 4 and -6. || = [-6(4)](25)      commutative property",
      "[step] Move the brackets so 4 and 25 are grouped together. || = -6(4 · 25)      associative property",
      "[step] Multiply the easy pair. || = -6(100)",
      "[step] Multiply what's left. || = -600",
      "",
      "[walk] Try one: evaluate 2ab when a = 50 and b = -3.",
      "[step] Put the numbers in. || 2ab = 2(50)(-3)",
      "[step] 2 and 50 are already together, so multiply them first. || = 100(-3)",
      "[step] Multiply. || = -300"
    ]},

    { title: "Example 3: Simplifying", s: [
      "Sometimes nobody tells you what the letter is worth, and you can still make the expression shorter.",
      "The trick is to group the plain numbers together so you can work them out, while the letter waits where it is.",
      "",
      "[walk] Simplify (x + 7) + 5.",
      "[step] Move the parentheses so 7 and 5 are grouped together. || (x + 7) + 5 = x + (7 + 5)      associative property",
      "[step] Add 7 and 5. || = x + 12",
      "",
      "[walk] Simplify 3(6y).",
      "[step] Move the parentheses so 3 and 6 are grouped together. || 3(6y) = (3 · 6)y      associative property",
      "[step] Multiply 3 and 6. || = 18y",
      "",
      "[walk] Try one: simplify (n + 4) + 9, then 5(7k).",
      "[step] Group 4 and 9, then add. || (n + 4) + 9 = n + (4 + 9) = n + 13",
      "[step] Group 5 and 7, then multiply. || 5(7k) = (5 · 7)k = 35k"
    ]},

    { title: "Zero and One", s: [
      "If Sam adds 0 pounds of cargo, the plane weighs exactly what it did, and if he flies one trip of 40 minutes, he's flown 40 minutes.",
      "Adding 0 or multiplying by 1 leaves a number identical, so 0 is called the {{additive identity}} and 1 is called the {{multiplicative identity}}.",
      "",
      "[walk] See the identity properties in numbers, and then in letters.",
      "[step] Adding 0 or multiplying by 1 changes nothing. || " + table([["", "Numbers", "Algebra"], ["Adding 0", "-8 + 0 = -8", "a + 0 = a"], ["Multiplying by 1", "15 · 1 = 15", "a · 1 = a"]])
    ]},

    { title: "Example 4: Name the Property", s: [
      "Every line in the examples above had a reason beside it, and naming the reason is a skill of its own.",
      "Look at what moved: if the numbers changed places it's commutative, if only the parentheses moved it's associative, and if a 0 or a 1 disappeared it's identity.",
      "",
      "[walk] Name the property each statement shows.",
      "[step] The 1 disappeared. || (-2)(1) = -2      identity property of multiplication",
      "[step] The numbers changed places. || 6 + (-4) = -4 + 6      commutative property of addition",
      "[step] The 0 disappeared. || m + 0 = m      identity property of addition",
      "[step] Only the parentheses moved. || 3(pq) = (3p)q      associative property of multiplication",
      "",
      "[walk] Try one: name the property in (5 + w) + 2 = 5 + (w + 2).",
      "[step] Nothing changed places and only the parentheses moved. || associative property of addition"
    ]},

    { title: "Example 5: Changing Units", s: [
      "Multiplying by 1 changes nothing, so you can multiply a measurement by a fraction that equals 1 and the amount stays the same while the unit changes.",
      "A fraction like that is called a {{conversion factor}}, and since 1 yard is the same length as 3 feet, the fraction 3 feet over 1 yard is equal to 1.",
      "Choose the one with the unit you want on top, so the unit you have is on the bottom and crosses out.",
      "",
      "[walk] The airfield's runway is 900 yards long, and Sam needs it in feet.",
      "[step] 1 yard is 3 feet, so there are two ways to write the factor. || 3 feet      1 yard\n------  or  ------\n1 yard      3 feet",
      "[step] You want feet, so pick the one with feet on top. || 3 feet\n------\n1 yard",
      "[step] Multiply, and cross out yards because it's on the top and the bottom. || 900 yards × 3 feet / 1 yard = 2,700 feet",
      "",
      "[walk] Try one: the flight to the next town takes 150 minutes, so how many hours is that?",
      "[step] 1 hour is 60 minutes, and you want hours, so hours goes on top. || 1 hour / 60 minutes",
      "[step] Multiply, cross out minutes, and divide. || 150 minutes × 1 hour / 60 minutes = 150 ÷ 60 = 2.5 hours"
    ]}
  ],

  words: [
    ["Commutative property", "Commute means move. You can add or multiply numbers in any order and get the same answer, so a + b = b + a.", 2],
    ["Associative property", "Associate means group. You can move the parentheses when adding or multiplying and get the same answer.", 2],
    ["Additive identity", "The number 0, because adding 0 to a number leaves it the same.", 46],
    ["Multiplicative identity", "The number 1, because multiplying a number by 1 leaves it the same.", 46],
    ["Conversion factor", "A fraction equal to 1, like 3 feet over 1 yard, used to change a measurement to different units.", 59],
  ],

  questions: [],

  /* ⭐ YOUR TURN: a fresh problem in the same world, every step typed and checked. */
  work: [
    { title: "Fuel for the Month",
      ask: "Sam's plane burns 25 gallons an hour, and he plans 3 flights of 4 hours each. Work out 25 × 3 × 4 the easy way.",
      steps: [
        { ask: "Swap and group so the easy pair is together. Which two numbers? Type their product.", answer: 100, calc: "25*4",
          hint: "25 and 4 make 100.",
          why: "Swap 3 and 4 (commutative), then group 25 and 4 (associative)." },
        { ask: "Multiply by the number that's left. How many gallons?", answer: 300, calc: "100*3",
          hint: "100 times 3.",
          why: "300 gallons." },
        { ask: "One gallon is 4 quarts. How many quarts is 300 gallons?", answer: 1200, calc: "300*4",
          hint: "The factor is 4 quarts over 1 gallon, so gallons cross out.",
          why: "300 gallons × 4 quarts per gallon = 1,200 quarts." },
      ] },
  ],

  todo: { title: "What To Do Now", s: [
      "You watched five examples, each one line at a time with its reason, and tried one after each.",
      "First work through Your Turn below the reading, typing each step.",
      "Then open the Homework Sheet with the button at the bottom of the page, and fill it out on screen or print it and do it on paper."
  ] }
};
