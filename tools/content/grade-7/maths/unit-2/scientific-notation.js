/* maths/scientific-notation
   Grade 7 · maths · unit 2. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, MINE, 2026-09-24. Written on Opus from Glencoe Course 2
   pp67-68, read on the borrowed copy the same evening. /natural pass run and
   stamped.

   READING SHAPE.

   ⚠️ THE WORLD IS THE BOOK'S OWN: the planets. Mercury at about 36,000,000
   miles from the sun, Mars at 141,710,000, Jupiter's diameter 1.43 x 10^5 km
   against Earth's 1.28 x 10^4 km. All four match current figures closely.
   It continues U2-L5's moon trip on purpose, one step further out.

   ⚠️ NO SCRIPTURE. Psalm 147:4 ("He telleth the number of the stars") would
   fit the closing; not added, because the choice is Paul's. Review queue. */
'use strict';
module.exports = {
  id: "maths/scientific-notation",
  slug: "scientific-notation",
  title: "Scientific Notation",
  unit: "Math 7 &middot; U2-L6",
  seq: { unit: 2, unitTitle: "Applications with Decimals", n: 6 },
  natural: "2026-09-24",

  /* ── /teach-plan, 2026-09-24. Glencoe Course 2 pp67-68. ── */
  plan: {
    objective: "Write a large number in scientific notation, and write a number in scientific notation back in standard form.",
    markers: [
      "QUOTED, Objective box: 'Express numbers greater than 100 in scientific notation and vice versa.' Words to Learn: scientific notation",
      "QUOTED: 'A number in scientific notation is written as the product of a number greater than or equal to 1 and less than 10 and a power of ten.'",
      "QUOTED: 'To find the exponent, count the number of places the decimal point was moved in the original number.'",
      "QUOTED: 'Usually, the decimal part of a number written in scientific notation is rounded to the hundredths place.'",
      "QUOTED: 'A number that is in scientific notation can be written in standard form when necessary.'",
    ],
    method: "U2-L5 RUN BACKWARDS. Last lesson moved the point right to turn 2.39 x 10^5 into 239,000. This one starts from the big number, moves the point LEFT until one digit sits in front of it, and counts the moves to get the exponent. Then it runs the trip forward again to compare two planets in standard form.",
    exampleOnly: [
      "Mercury, Mars, Jupiter and Earth. WORLD: the solar system, one step past U2-L5's moon.",
      "The book's 347,000 is kept as a bare example.",
    ],
    digitize: "Reading engine. Each conversion shows the moved point and the count as [ex] lines.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Math",
    blurb: "Mercury is 36,000,000 miles from the sun, and nobody wants to count those zeros. Scientific notation, and back again.",
    contains: [
      "A number between 1 and 10, times a power of ten",
      "Moving the point left and counting the moves",
      "Rounding the front number to hundredths",
      "Turning it back into standard form to compare planets",
    ] },
  eyebrow: ["Math 7", "U2-L6", "Applications with Decimals"],
  dek: "Last lesson took a short number and made it huge. This one takes a huge number and makes it short enough to read.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "By the end of this lesson your student should be able to write a number like 36,000,000 as 3.6 x 10⁷, and turn 1.43 x 10⁵ back into 143,000.",
        "It is U2-L5 run backwards, so if powers of ten are shaky, review that lesson first."
      ]},
      { h: "Where Students Get Stuck", p: [
        "🚨 Stopping in the wrong place. The front number has to be at least 1 and less than 10, so 36 x 10⁶ is not scientific notation even though it equals the right amount. Move the point until exactly one non-zero digit is in front of it.",
        "Miscounting the moves. Have the student put a small mark under each digit the point jumps over, then count the marks."
      ]},
      { h: "Teaching Suggestion", p: [
        "Write a big number on paper, put your finger on the invisible decimal point at the end, and hop it left one digit at a time while the student counts out loud. The count is the exponent."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Too Many Zeros to Trust", s: [
      "Mercury is the closest planet to the sun, named after the Roman messenger god because it moves so fast, and it sits about 36,000,000 miles out.",
      "Try reading that number aloud without stopping to count the zeros, and you'll notice you can't, and neither can anyone else.",
      "Astronomers deal in numbers like that all day, and a single miscounted zero would put a planet ten times too far away.",
      "So how do you write a number that big in a way nobody can misread?"
    ]},

    { title: "One Digit in Front, Then a Power of Ten", s: [
      "Scientific notation writes a big number as two pieces multiplied together: a number that is at least 1 but less than 10, and a power of ten.",
      "To get there, you move the decimal point left until only one digit is in front of it, and then you count how many places it moved.",
      "",
      "[ex] 36,000,000",
      "[ex] move the point 7 places left: 3.6",
      "[ex] 36,000,000 = 3.6 x 10⁷",
      "",
      "The point moved seven places, so the exponent is 7, and Mercury is 3.6 x 10⁷ miles from the sun.",
      "If this feels familiar, it should, because it's Powers of Ten run backwards: last time you moved the point right to make a number bigger, and this time you move it left to find out how big it was."
    ]},

    { title: "When the Front Number Gets Long", s: [
      "Mars is farther out, about 141,710,000 miles from the sun, and moving the point gives you a longer front number.",
      "Scientists usually round that front number to the hundredths place, since the last few digits of a distance that huge are guesses anyway.",
      "",
      "[ex] 141,710,000",
      "[ex] move the point 8 places left: 1.4171",
      "[ex] 1.4171 x 10⁸ is about 1.42 x 10⁸",
      "",
      "Mars is about 1.42 x 10⁸ miles from the sun, and a number like 347,000 works the same way, becoming 3.47 x 10⁵ after five moves."
    ]},

    { title: "Back to a Number You Can Picture", s: [
      "Sometimes you need the long form back, called standard form, so you can compare or subtract, and that's the Powers of Ten move you already know.",
      "Jupiter is so wide that the book gives its diameter as 1.43 x 10⁵ kilometers, and Earth's as 1.28 x 10⁴.",
      "",
      "[ex] 1.43 x 10⁵ = 143,000",
      "[ex] 1.28 x 10⁴ = 12,800",
      "[ex] 143,000 - 12,800 = 130,200",
      "",
      "Jupiter is about 130,200 kilometers wider than Earth, which means you could line up more than eleven Earths across its face, and that's something the short form alone never lets you feel."
    ]},

    { title: "Why Scientists Write It This Way", s: [
      "Go back to Mercury and its seven zeros, which were easy to miscount and hard to say.",
      "Written as 3.6 x 10⁷, the size of the number sits right there in the exponent, and nobody can slip a zero in or out by accident.",
      "That's why the people who measure the solar system write almost every distance this way, and why you'll see it again in every science class you take from here on."
    ]}
  ],

  words: [
    ["Scientific Notation", "A way to write a number as a number from 1 up to (but not including) 10, times a power of ten.", 4],
    ["Standard Form", "A number written out the usual way, like 143,000.", 17],
    ["Exponent", "In scientific notation, the number of places the decimal point moved.", 9]
  ],

  findsAt: 26,
  questions: [
    { tag: "What It Is", q: "In scientific notation, the front number must be…",
      find: [4],
      hint: "Read One Digit in Front, Then a Power of Ten.",
      choices: [
        "at least 1 and less than 10.",
        "a whole number.",
        "bigger than 10.",
        "less than 1."
      ], right: 0 },

    { tag: "Write It", q: "How do you write 36,000,000 in scientific notation?",
      find: [5, 6, 7, 8, 9],
      hint: "Move the point left until one digit is in front, and count the moves.",
      choices: ["36 x 10⁶", "3.6 x 10⁶", "3.6 x 10⁷", "0.36 x 10⁸"], right: 2 },

    { tag: "Write It", q: "Why isn't 36 x 10⁶ scientific notation?",
      find: [4, 5],
      hint: "Look at the front number.",
      choices: [
        "Because 36 isn't less than 10.",
        "Because the exponent is too small.",
        "Because it equals a different number.",
        "Because it has no decimal point in the answer."
      ], right: 0 },

    { tag: "Write It", q: "How do you write 347,000 in scientific notation?",
      find: [16],
      hint: "Count the moves to get one digit in front.",
      choices: ["34.7 x 10⁴", "3.47 x 10⁶", "347 x 10³", "3.47 x 10⁵"], right: 3 },

    { tag: "Rounding", q: "Mars is 1.4171 x 10⁸ miles from the sun. Rounded to hundredths, that's…",
      find: [12, 15],
      hint: "Round the front number only.",
      choices: ["1.4 x 10⁸", "1.42 x 10⁸", "1.41 x 10⁸", "1.42 x 10⁷"], right: 1 },

    { tag: "Standard Form", q: "Write 1.43 x 10⁵ in standard form.",
      find: [19],
      hint: "Move the point five places right.",
      choices: ["14,300", "1,430,000", "143,000", "1,430"], right: 2 },

    { tag: "Standard Form", q: "About how much wider is Jupiter than Earth?",
      find: [19, 20, 21, 22],
      hint: "Write both in standard form, then subtract.",
      choices: ["About 130,200 km", "About 15,500 km", "About 155,800 km", "About 13,020 km"], right: 0 },

    { tag: "Why", q: "Why do scientists write big numbers in scientific notation?",
      find: [24],
      hint: "Read Why Scientists Write It This Way.",
      choices: [
        "Because calculators can't show big numbers.",
        "Because it makes numbers smaller.",
        "Because it looks more scientific.",
        "Because the size is right there in the exponent, and a zero can't slip in or out."
      ], right: 3 }
  ],

  vocabQuestions: [
    { q: "Which of these is in <i>scientific notation</i>?",
      choices: ["36,000,000", "3.6 x 10⁷", "36 x 10⁶", "0.36 x 10⁸"], right: 1 },
    { q: "Which of these is in <i>standard form</i>?",
      choices: ["1.43 x 10⁵", "10⁵", "143,000", "1.43"], right: 2 },
    { q: "In 3.6 x 10⁷, what does the <i>exponent</i> tell you?",
      choices: ["The point moved 7 places.", "Multiply 3.6 by 7.", "Add 7.", "There are 3 digits."], right: 0 }
  ],

  todo: { title: "What To Do Now", s: [
      "Mercury's seven zeros became one small exponent, and every question here is that same move, or the move back.",
      "{c} word cards sit at the top of the page, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "When you write a number in scientific notation, mark each digit the point jumps over and count the marks, because miscounting is the usual slip.",
      "If the standard form questions trip you up, go back to Powers of Ten, since that lesson is the same move forward.",
      "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] }
};
