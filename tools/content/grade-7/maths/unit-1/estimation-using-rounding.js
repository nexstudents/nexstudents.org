/* maths/estimation-using-rounding
   Grade 7 · maths · unit 1. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry. */
'use strict';
module.exports = {
  id: "maths/estimation-using-rounding",
  slug: "estimation-using-rounding",
  title: "Estimation Strategy: Using Rounding",
  unit: "Math &middot; Chapter 1 &middot; Lesson 1-2",
  seq: { unit: 1, unitTitle: "Tools for Problem Solving", n: 2 },
  shelf: { grades: [7], subject: "Math",
    blurb: "Rounding turns a messy sum into a fast, close-enough answer you can trust.",
    contains: [
      "Mark's computer fund-raiser, rounded to the nearest hundred dollars",
      "The one rule that decides which way any digit rounds",
      "A grocery receipt checked for a cashier's mistake",
      "Twelve questions, including one straight off the book's own exercises",
    ] },
  eyebrow: ["Math", "Chapter 1 &middot; Lesson 1-2", "Tools for Problem Solving"],
  dek: "You don't always need the exact answer. You need one close enough to plan with, and you need it fast.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will estimate sums and differences by rounding each number to a chosen place value, then working with the rounded numbers instead of the real ones. The skill is deciding which place value to round to and trusting the estimate as a check."
      ]},
      { h: "Key Concepts", p: [
        "Rounding looks at one digit only, the one immediately to the right of the place value being rounded. Under 5 rounds down, 5 or more rounds up. The same rule works on tens, hundreds, thousands or dollars."
      ]},
      { h: "Why This Comes Before The Real Answer", p: [
        "A rounded total tells you whether a real total is even in the right neighborhood. The fund-raising committee needed about $1,400 before Mark added a single real price, and the grocery total was checked the same way after the fact."
      ]},
      { h: "Where Students Get Stuck", p: [
        "Rounding several numbers to different place values in the same sum, rather than all to the same one, throws the estimate off. Watch for a student who rounds one price to the nearest ten and another to the nearest hundred in the same problem."
      ]},
      { h: "Teaching Suggestion", p: [
        "Hand him a real register receipt or a phone bill and ask him to round every line to the nearest dollar before checking the total. It's the same skill as the grocery example, on paper he can hold."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "A Fund-Raiser That Needs A Fast Answer", s: [
      "The Media Arts Department at Northwest Middle School is saving up to buy a computer for the school newspaper.",
      "Mark is the chairperson of the fund-raising committee.",
      "The computer store gave Mark a price list for the computer the department needs.",
      "The computer itself is $687.00.",
      "A monitor is $197.90, a CD-ROM drive is $217.90, a printer with a printer card is $222.99, and the software is $82.59.",
      "About how much money does the committee need to raise?",
      "You don't need the exact total to answer that question.",
      "You need a number close enough to plan with, and you need it fast."
    ]},

    { title: "Round Each Price", s: [
      "Round each price to its nearest hundred dollars.",
      "$687.00 rounds to $700.",
      "$197.90 rounds to $200.",
      "$217.90 also rounds to $200.",
      "$222.99 rounds to $200 too.",
      "$82.59 rounds to $100.",
      "Now add the rounded numbers instead of the real ones.",
      "$700 plus $200 plus $200 plus $200 plus $100 equals $1,400.",
      "The committee needs to raise about $1,400."
    ]},

    { title: "The One Rule For Rounding", s: [
      "Rounding always comes down to one question: what's the digit right next door to the place you're rounding to?",
      "Look at 83, rounded to the nearest ten.",
      "The digit next to the tens place is 3.",
      "Since 3 is less than 5, the tens digit stays the same, so 83 rounds down to 80.",
      "Now look at 362, rounded to the nearest hundred.",
      "The digit next to the hundreds place is 6.",
      "Since 6 is 5 or more, the hundreds digit rounds up, so 362 rounds up to 400.",
      "Under 5 stays down, and 5 or over rounds up.",
      "That's the whole rule, on any place value."
    ]},

    { title: "Rounding Checks A Total, Too", s: [
      "Estimation isn't only for finding a quick answer, it's also for checking a real one.",
      "Say you stopped at the market to buy oil, chicken, bacon, and a green pepper for tonight's dinner.",
      "The register tape says $2.55, $5.47, $2.15, and $1.09, for a total of $11.26.",
      "Is that total reasonable?",
      "Round every item to the nearest dollar.",
      "$2.55 rounds to $3, $5.47 rounds to $5, $2.15 rounds to $2, and $1.09 rounds to $1.",
      "$3 plus $5 plus $2 plus $1 is $11.",
      "$11.26 is close to $11, so the total on the register is reasonable."
    ]},

    { title: "Round Every Number The Same Way", s: [
      "Sometimes it makes more sense to round every number in a sum to the same kind of place value before you add.",
      "Take 1,836 plus 429 plus 213 plus 1,208.",
      "Round each one to its own greatest place: 2,000, 400, 200, and 1,000.",
      "Add those and you get 3,600, a solid estimate for the real sum."
    ]}
  ],

  words: [
    ["Round", "To change a number to the nearest ten, hundred, or other place value, using the digit next door as the tiebreaker."],
    ["Estimate", "A fast answer close enough to plan with, found by rounding before adding, subtracting, or checking."],
    ["Reasonable", "Close enough to your estimate that the real answer probably isn't a mistake."],
    ["Greatest Place Value", "The leftmost digit's place, such as the hundreds or thousands, which most numbers round to first."]
  ],

  /* 38 story sentences; the finds below were verified against that count. */
  findsAt: 38,
  questions: [
    { tag: "Fund-Raising",
      q: "Mark needs to know about how much the committee has to raise. Why doesn't he need the exact total?",
      find: [5, 6, 7],
      choices: [
        "A fast, close-enough number is all a decision like this needs.",
        "Exact totals are against the rules.",
        "The store doesn't give exact prices.",
        "Estimates are always more accurate than totals."
      ], right: 0 },

    { tag: "Rounding A Price",
      q: "$217.90 rounds to which hundred?",
      find: [10, 11],
      choices: ["$200.", "$300.", "$100.", "$220."], right: 0 },

    { tag: "The Rule",
      q: "83 rounds to the nearest ten. What decides whether it rounds up or down?",
      find: [19, 20],
      choices: [
        "The digit right next to the tens place.",
        "The digit in the hundreds place.",
        "Whether the number is even or odd.",
        "How big the number is overall."
      ], right: 0 },

    { tag: "The Rule",
      q: "362 rounded to the nearest hundred is which number?",
      find: [22, 23],
      choices: ["400.", "300.", "360.", "370."], right: 0 },

    { tag: "Consumer Math",
      q: "The register said $11.26 for four grocery items. How do you check whether that's reasonable?",
      find: [30, 31, 32],
      choices: [
        "Round each price and add the rounded amounts.",
        "Multiply the highest price by four.",
        "Guess based on how full the cart looks.",
        "Add the exact prices twice to double check."
      ], right: 0 },

    { tag: "Consumer Math",
      q: "The four rounded grocery prices add up to about $11. What does that tell you about the $11.26 total?",
      find: [33],
      choices: [
        "It's reasonable, since it's close to the estimate.",
        "It's wrong, since it doesn't match exactly.",
        "It's too high to be believed.",
        "Nothing, rounding can't check a real total."
      ], right: 0 },

    { tag: "Estimating A Sum",
      q: "To estimate 1,836 + 429 + 213 + 1,208, what does the lesson suggest doing to each number first?",
      find: [34, 36],
      choices: [
        "Round each one to its own greatest place value.",
        "Round every number to the nearest ten only.",
        "Add the exact numbers, then round the total.",
        "Drop the smallest number from the sum."
      ], right: 0,
      why: "1,836 rounds to 2,000, 429 to 400, 213 to 200, and 1,208 to 1,000. That gives an estimate of 3,600." },

    { tag: "Clubs",
      q: "The Band Boosters sold 5,720 boxes of cookies the first week and 6,147 the second week. Rounding each to the nearest thousand, about how many boxes did they sell in the first two weeks?",
      choices: ["About 12,000.", "About 11,000.", "About 6,000.", "About 10,000."], right: 0,
      why: "5,720 rounds to 6,000 and 6,147 rounds to 6,000, and 6,000 plus 6,000 is 12,000." }
  ],

  vocabQuestions: [
    { q: "To <i>round</i> a number is to do what?",
      choices: ["Change it to the nearest ten, hundred, or other place value.", "Multiply it by ten."], right: 0 },
    { q: "An <i>estimate</i> is...",
      choices: ["A fast answer close enough to plan or check with.", "Always the exact answer."], right: 0 },
    { q: "An answer is <i>reasonable</i> when it's...",
      choices: ["Close to your estimate.", "Written neatly."], right: 0 },
    { q: "The <i>greatest place value</i> in 362 is the...",
      choices: ["Hundreds place.", "Ones place."], right: 0 }
  ],

  todo: { title: "What To Do Now", s: [
      "{Q} questions about the lesson, then {c} word cards with {v} more questions under them. {T} questions in all.",
      "For each question, round first and check your rounding against the rule before picking an answer.",
      "If a question about money trips you up, round every price to the nearest dollar before you add or compare.",
      "When you're stuck on which way a number rounds, look at the digit right next to the place you're rounding to.",
      "That's the only digit that matters."
  ] }
};
