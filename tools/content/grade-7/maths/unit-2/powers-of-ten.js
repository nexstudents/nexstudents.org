/* maths/powers-of-ten
   Grade 7 · maths · unit 2. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, MINE, 2026-09-24. Written on Opus from Glencoe Course 2
   pp64-65 ("Mental Math Strategy: Powers of Ten"), read on the borrowed copy
   the same evening. /natural pass run and stamped.

   READING SHAPE.

   ⚠️ THE WORLD IS THE BOOK'S MOON, WITH PEOPLE ADDED. The book opens on the
   moon at 2.39 x 10^5 miles. Apollo 8 (December 1968, Borman, Lovell and
   Anders, the first people to travel that distance) is added to put a person
   in the story; worth a glance from Paul. The book's 0.34 x 10^4 and
   13.1 x 1,000 are kept as bare examples.

   ⚠️ NO SCRIPTURE. Paul's call, in the review queue. */
'use strict';
module.exports = {
  id: "maths/powers-of-ten",
  slug: "powers-of-ten",
  title: "Powers of Ten",
  unit: "Math 7 &middot; U2-L5",
  seq: { unit: 2, unitTitle: "Applications with Decimals", n: 5 },
  natural: "2026-09-24",

  /* ── /teach-plan, 2026-09-24. Glencoe Course 2 pp64-65. ── */
  plan: {
    objective: "Multiply a decimal by a power of ten in your head by moving the decimal point right as many places as the exponent.",
    markers: [
      "QUOTED, Objective box: 'Multiply decimals mentally by powers of ten.'",
      "QUOTED: 'How can you find the product of a power of 10, like 10^5, and another number without using a calculator or paper and pencil?'",
      "QUOTED: 'Note that as the decimal is multiplied by greater powers of 10, the decimal point in the product is farther to the right of the original position.'",
      "QUOTED: 'The exponent in the power of 10 and the number of places the decimal point moved to the right are the same.'",
      "QUOTED, Mental Math Hint: 'you can see that there are three zeros in 1,000, so you will move the decimal point three places to the right.'",
    ],
    method: "A TABLE THAT MAKES THE PATTERN VISIBLE. The book multiplies the same number, 2.39, by 1, 10, 100, 1,000 and 10,000 in a column, and lets the student see the point walk one place right each row. The rule falls out of the table: the exponent, or the count of zeros, is how many places to move. It builds on U1-L9 (powers and exponents).",
    exampleOnly: [
      "The moon, 2.39 x 10^5 miles, Apollo 8. WORLD: one trip to the moon.",
      "The book's 0.34 x 10^4 and 13.1 x 1,000 are kept as bare examples.",
    ],
    digitize: "Reading engine. The pattern table is one [ex] box, one row per power, so the point can be seen moving.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Math",
    blurb: "The moon is 2.39 times ten to the fifth miles away. How to turn that into a number you can say, in your head, in one move.",
    contains: [
      "The same number times 1, 10, 100, 1,000 and 10,000",
      "Why the point walks one place right for every zero",
      "Using the exponent to know how far to move it",
      "Adding zeros when you run out of digits",
    ] },
  eyebrow: ["Math 7", "U2-L5", "Applications with Decimals"],
  dek: "Multiplying by ten, a hundred or a thousand doesn't need a calculator. It needs one decimal point and the patience to count.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "By the end of this lesson your student should be able to multiply a decimal by 10, 100, 1,000 or any power of ten in his head, by moving the decimal point right as many places as there are zeros, or as the exponent says.",
        "It leans on U1-L9, where the student learned that 10⁵ means five 10s multiplied."
      ]},
      { h: "Where Students Get Stuck", p: [
        "🚨 Moving the point the wrong way. Multiplying by a power of ten always makes the number bigger, so the point always moves right. If the answer got smaller, the point went left.",
        "Running out of digits. 0.34 x 10⁴ needs four moves, and there are only two digits after the point, so two zeros get written in: 3,400."
      ]},
      { h: "Teaching Suggestion", p: [
        "Write 2.39 on a card and slide a paper decimal point one place right for each row of the table. Moving a real object makes the pattern stick faster than any rule."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "A Number Too Big to Say", s: [
      "In December 1968, three men named Frank Borman, Jim Lovell and Bill Anders became the first people ever to leave Earth behind and travel all the way to the moon, and it took them about three days to get there.",
      "A science book will tell you the distance they covered as 2.39 x 10⁵ miles, which is accurate and completely useless if you're trying to picture it.",
      "Nobody says two point three nine times ten to the fifth at the dinner table.",
      "So how do you turn that into a number you can actually say, without reaching for a calculator?"
    ]},

    { title: "Watch the Point Walk", s: [
      "Start small, and multiply the same number by bigger and bigger powers of ten, one row at a time.",
      "",
      "[ex] 2.39 x 1 = 2.39",
      "[ex] 2.39 x 10 = 23.9",
      "[ex] 2.39 x 100 = 239",
      "[ex] 2.39 x 1,000 = 2,390",
      "[ex] 2.39 x 10,000 = 23,900",
      "",
      "Look down that column and the digits never change; only the decimal point moves, one place to the right every time you multiply by another ten.",
      "That's the whole trick, and once you've seen it you can't unsee it."
    ]},

    { title: "Count the Zeros, Move the Point", s: [
      "Now the rule is easy to say: when you multiply by a power of ten, move the decimal point to the right as many places as the power has zeros.",
      "If the power is written with an exponent, the exponent tells you the same thing, since 10⁵ is 100,000 and has five zeros.",
      "So the astronauts' distance is 2.39 with the point moved five places right.",
      "",
      "[ex] 2.39 x 10⁵",
      "[ex] 2.39 x 100,000 = 239,000",
      "",
      "The moon is about 239,000 miles away, and now you can say it out loud, and maybe picture three men in a capsule the size of a small car covering it in three days."
    ]},

    { title: "When You Run Out of Digits", s: [
      "Sometimes the point has to move further than there are digits, and then you write zeros to fill the empty places.",
      "",
      "[ex] 0.34 x 10⁴",
      "[ex] move the point 4 places right: 3,400",
      "",
      "After two moves the point is past the 4, so the last two moves each need a zero, and 0.34 turns into 3,400.",
      "The same goes for 13.1 x 1,000, where three zeros means three moves, one past the 1 and two more with zeros, giving 13,100."
    ]},

    { title: "Why It Always Moves Right", s: [
      "Multiplying by ten always makes a number bigger, which is why the point always walks to the right.",
      "If you ever move it left and get a smaller answer, stop, because the answer itself is telling you something went wrong.",
      "Go back to that science book, and 2.39 x 10⁵ miles isn't a scary number anymore; it's five steps of a decimal point, and it's how far three people once went to look back at the whole Earth at once."
    ]}
  ],

  words: [
    ["Power of Ten", "A number like 10, 100 or 1,000 that is 10 multiplied by itself some number of times.", 12],
    ["Exponent", "The small raised number that counts how many times 10 is used as a factor, and how many places the point moves.", 13],
    ["Mental Math", "Working a problem out in your head without a calculator or paper.", 3]
  ],

  findsAt: 26,
  questions: [
    { tag: "The Pattern", q: "What changes when you multiply 2.39 by 10, then 100, then 1,000?",
      find: [5, 6, 7, 8, 9, 10],
      hint: "Look down the column in Watch the Point Walk.",
      choices: ["The digits change.", "Only the decimal point moves.", "The number gets smaller.", "Nothing changes."], right: 1 },

    { tag: "The Rule", q: "When you multiply by 1,000, how many places does the point move?",
      find: [12],
      hint: "Count the zeros.",
      choices: ["One", "Two", "Four", "Three"], right: 3 },

    { tag: "The Rule", q: "Which way does the point move when you multiply by a power of ten?",
      find: [23],
      hint: "Multiplying by ten makes a number bigger.",
      choices: ["To the right.", "To the left.", "It depends on the number.", "It doesn't move."], right: 0 },

    { tag: "Mental Math", q: "What is 2.39 x 10⁵?",
      find: [15, 16, 17],
      hint: "Move the point five places right.",
      choices: ["23,900", "2,390,000", "239,000", "2.39"], right: 2 },

    { tag: "Zeros", q: "What is 0.34 x 10⁴?",
      find: [19, 20, 21],
      hint: "Four moves, and you'll need to write zeros.",
      choices: ["34", "3,400", "340", "0.0034"], right: 1 },

    { tag: "Zeros", q: "What is 13.1 x 1,000?",
      find: [22],
      hint: "Three zeros, three moves.",
      choices: ["1,310", "131", "13,100", "131,000"], right: 2 },

    { tag: "Check It", q: "You multiplied by 100 and got a smaller number. What happened?",
      find: [23, 24],
      hint: "Read Why It Always Moves Right.",
      choices: [
        "Nothing, that's normal.",
        "You moved the point the wrong way.",
        "You used too many zeros.",
        "Multiplying by 100 always makes numbers smaller."
      ], right: 1 },

    { tag: "The Rule", q: "How does the exponent in 10⁵ help you?",
      find: [13],
      hint: "10⁵ is 100,000.",
      choices: [
        "It tells you how many places to move the point.",
        "It tells you which digit to round.",
        "It tells you to divide by 5.",
        "It tells you to add 5."
      ], right: 0 }
  ],

  vocabQuestions: [
    { q: "Which of these is a <i>power of ten</i>?",
      choices: ["15", "1,000", "250", "5"], right: 1 },
    { q: "In 10⁴, what does the <i>exponent</i> tell you?",
      choices: ["To add 4.", "That the answer is 40.", "To move the point 4 places when you multiply by it.", "To divide by 10."], right: 2 },
    { q: "What is <i>mental math</i>?",
      choices: ["Math on a calculator.", "Math written on paper.", "Math about the brain.", "Working a problem out in your head."], right: 3 }
  ],

  todo: { title: "What To Do Now", s: [
      "Three astronauts crossed 2.39 x 10⁵ miles, and five steps of a decimal point turned that into a number anyone can say.",
      "{c} word cards sit at the top of the page, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "Do every one of them in your head: count the zeros or read the exponent, then move the point that many places to the right.",
      "If a question needs more moves than there are digits, read When You Run Out of Digits again before you pick.",
      "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] }
};
