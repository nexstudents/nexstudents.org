/* maths/estimation-using-patterns — one lesson, one file. Edit it here; tools/lessons.js only lists them. */
'use strict';
module.exports = {
  id: "maths/estimation-using-patterns",
  slug: "estimation-using-patterns",
  title: "Estimation Strategy: Using Patterns",
  unit: "Math &middot; Chapter 1 &middot; Lesson 1-3",
  seq: { unit: 1, unitTitle: "Tools for Problem Solving", n: 3 },
  shelf: { grades: [7], subject: "Math",
    blurb: "One easy multiplication or division fact, stretched into an estimate for a much bigger one.",
    contains: [
      "29,000 truckloads of rock, estimated with a pattern instead of long multiplication",
      "The different first move for estimating a quotient instead of a product",
      "Ub Iwerks and the 14,400 pictures he drew for Steamboat Willie",
      "Twelve questions, from small facts to genuinely large numbers",
    ] },
  eyebrow: ["Math", "Chapter 1 &middot; Lesson 1-3", "Tools for Problem Solving"],
  dek: "Once you know one small multiplication fact, patterns let you estimate huge ones in your head.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will estimate products and quotients using patterns: round one factor, or the divisor, to its greatest place value, then multiply or divide a short string of easy facts to reach the estimate."
      ]},
      { h: "Key Concepts", p: [
        "For multiplication, round the larger factor and leave a one-digit factor alone, then build a pattern by multiplying the small fact by ten each step. For division, round the divisor first and swap the dividend for a nearby number that divides evenly."
      ]},
      { h: "Where Students Get Stuck", p: [
        "Rounding the dividend before the divisor in a division problem gets the steps backwards. It also helps to say the pattern's easy fact out loud before multiplying zeros onto it, rather than jumping straight to the big number."
      ]},
      { h: "Teaching Suggestion", p: [
        "Give him a two- or three-digit multiplication problem from a grocery receipt or a sports stat and have him build the pattern by hand before checking it on a calculator."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "An Arena Carved From A Mountain", s: [
      "During the Winter Olympics, the host country builds facilities that fit the games and the land both.",
      "The Gjøvik Olympic Cavern Hall was built for the hockey competition, carved right out of a mountain called Hovdetoppen.",
      "Building it took 29,000 truckloads of rock removed from inside the mountain.",
      "If a single truck holds about 5 cubic yards of rock, about how many cubic yards were removed in all?"
    ]},

    { title: "Multiply By Patterns", s: [
      "We need to estimate 29,000 times 5.",
      "Patterns can estimate a product like that.",
      "Round the bigger factor to its greatest place value, but leave a one-digit factor alone.",
      "Round 29,000 to 30,000.",
      "Now look for a pattern, and solve it mentally.",
      "3 times 5 is 15.",
      "30 times 5 is 150.",
      "300 times 5 is 1,500.",
      "3,000 times 5 is 15,000.",
      "30,000 times 5 is 150,000.",
      "About 150,000 cubic yards of rock were removed to build the Gjøvik Olympic Cavern Hall."
    ]},

    { title: "Two More Patterns", s: [
      "Estimate 2,268 times 6 the same way.",
      "Round 2,268 to 2,000.",
      "2 times 6 is 12, 20 times 6 is 120, 200 times 6 is 1,200, and 2,000 times 6 is 12,000.",
      "2,268 times 6 is about 12,000.",
      "Now estimate 21 times 404.",
      "This time, round both factors: 21 rounds to 20, and 404 rounds to 400.",
      "20 times 4 is 80, 20 times 40 is 800, and 20 times 400 is 8,000.",
      "21 times 404 is about 8,000."
    ]},

    { title: "Patterns Work For Division Too", s: [
      "You can use patterns to estimate quotients as well, but the first move is different.",
      "Round the divisor to its greatest place-value position instead of the dividend.",
      "Then replace the dividend with a nearby number you already know divides easily.",
      "The first Mickey Mouse animated film, Steamboat Willie, came out in 1928.",
      "Ub Iwerks drew all 14,400 pictures in the film in just 24 days.",
      "About how many pictures did he draw per day?",
      "We need to estimate 14,400 divided by 24.",
      "Round 24 to 20, rounding the divisor to its greatest place value.",
      "Round 14,400 to 14,000, since you already know 14 is divisible by 2.",
      "Use the pattern to divide mentally.",
      "14 divided by 2 is 7.",
      "140 divided by 20 is 7.",
      "1,400 divided by 20 is 70.",
      "14,000 divided by 20 is 700.",
      "Ub Iwerks drew about 700 pictures a day, which is a lot of pictures."
    ]}
  ],

  words: [
    ["Pattern", "A string of simple facts, like 3 times 5, 30 times 5, 300 times 5, that lets you multiply big rounded numbers in your head."],
    ["Divisor", "The number you're dividing by. Round this one first when you estimate a quotient."],
    ["Dividend", "The number being divided. Swap it for a nearby number that divides evenly once the divisor is rounded."],
    ["Quotient", "The answer to a division problem, the thing a pattern helps you estimate quickly."]
  ],

  /* 38 story sentences; the finds below were verified against that count. */
  findsAt: 38,
  questions: [
    { tag: "Multiplication",
      q: "To estimate 29,000 times 5, what's the first move?",
      find: [4, 7],
      choices: [
        "Round 29,000 to its greatest place value, 30,000.",
        "Round 5 to the nearest ten.",
        "Multiply the exact numbers first.",
        "Round both numbers to the nearest hundred."
      ], right: 0 },

    { tag: "Multiplication",
      q: "Once 29,000 is rounded to 30,000, how do you find 30,000 times 5?",
      find: [9, 10, 11, 12, 13],
      choices: [
        "Start from 3 times 5 is 15, then add a zero each time the factor grows by ten.",
        "Multiply 29,000 by 5 directly.",
        "Guess based on how big the numbers look.",
        "Round 5 up to 10 first."
      ], right: 0 },

    { tag: "One-Digit Factors",
      q: "When you estimate 2,268 times 6, why does the 6 stay a 6 instead of getting rounded?",
      find: [6],
      choices: [
        "A one-digit factor is left alone; only the bigger factor gets rounded.",
        "Six can't be rounded to anything.",
        "Rounding only works on numbers over 1,000.",
        "The book rounds every factor except the first one."
      ], right: 0 },

    { tag: "Two Big Factors",
      q: "21 times 404 is estimated by rounding both factors. What do they round to?",
      find: [20],
      choices: ["20 and 400.", "20 and 410.", "25 and 400.", "21 and 400."], right: 0 },

    { tag: "Division",
      q: "When you estimate a quotient, which number do you round first?",
      find: [24],
      choices: [
        "The divisor, the number you're dividing by.",
        "The dividend, the number being divided.",
        "Whichever number is bigger.",
        "Neither; you round only the answer."
      ], right: 0 },

    { tag: "Division",
      q: "To estimate 14,400 divided by 24, the divisor 24 is rounded to 20. What happens to 14,400?",
      find: [31],
      choices: [
        "It's swapped for 14,000, since 14 is easy to divide by 2.",
        "It stays exactly 14,400.",
        "It's rounded to 14,500.",
        "It's divided by 20 with no change."
      ], right: 0 },

    { tag: "Steamboat Willie",
      q: "Ub Iwerks drew 14,400 pictures in 24 days. About how many pictures a day is that?",
      find: [36, 37],
      choices: ["About 700.", "About 70.", "About 7,000.", "About 600."], right: 0 },

    { tag: "Apply It",
      q: "Estimate the quotient of 6,152 and 58.",
      choices: ["About 100.", "About 10.", "About 1,000.", "About 60."], right: 0,
      why: "58 rounds to 60, and 6,000 divides evenly by 60 to give 100." }
  ],

  vocabQuestions: [
    { q: "A <i>pattern</i> like 3 &times; 5, 30 &times; 5, 300 &times; 5 is useful because...",
      choices: ["It lets you multiply big rounded numbers in your head.", "It only works with even numbers."], right: 0 },
    { q: "In a division problem, the <i>divisor</i> is...",
      choices: ["The number you're dividing by.", "The answer to the division."], right: 0 },
    { q: "The <i>dividend</i> is...",
      choices: ["The number being divided.", "The number you divide by."], right: 0 },
    { q: "The <i>quotient</i> is...",
      choices: ["The answer to a division problem.", "The remainder left over."], right: 0 }
  ],

  todo: { title: "What To Do Now", s: [
      "{Q} questions about the lesson, then {c} word cards with {v} more questions under them. {T} questions in all.",
      "Before you answer, say the pattern out loud: the small fact first, then one more zero at a time.",
      "On a division question, check which number you rounded first.",
      "It should always be the divisor, not the dividend.",
      "If a pattern question stumps you, write out the string of easy facts, like 3 times 5, 30 times 5, 300 times 5, until the rounded numbers show up."
  ] }
};
