/* maths/rounding-quotients
   Grade 7 · maths · unit 2. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-10-05. Written on Sonnet from Glencoe Course 2
   pp75-77 (Lesson 2-8), via the week 6-7 packet (paraphrased notes) and the
   teach-plan. /natural pass run and stamped.

   READING SHAPE.

   ⚠️ THE WORLD IS THE BOOK'S OWN OPENING, KEPT: friends splitting a pizza bill.
   The numbers are ours ($14.65 among four, $214.50 among seven), chosen so the
   round-down answer comes up short by a cent and by two cents. The book's
   planet-sized example (Ceres against Jupiter) is left out as another world;
   rounding to the greatest place value is taught on the bill instead.

   ⚠️ NO SCRIPTURE. Paul's call, in the review queue. */
'use strict';
module.exports = {
  id: "maths/rounding-quotients",
  slug: "rounding-quotients",
  title: "Rounding Quotients",
  unit: "Math 7 &middot; U2-L8",
  seq: { unit: 2, unitTitle: "Applications with Decimals", n: 8 },
  natural: "2026-10-05",

  /* ── /teach-plan, 2026-10-05. Glencoe Course 2 pp75-77. ── */
  plan: {
    objective: "Round a quotient to a given place, and round money quotients up to the next cent when sharing a cost.",
    markers: [
      "BOOK (paraphrased), Objective box: round decimal quotients to a specified place.",
      "BOOK (paraphrased), opening: four friends split the cost of a pizza, the quotient has more decimal places than money does, and the answer is rounded up.",
      "BOOK (paraphrased): money quotients are usually rounded up so the bill is covered.",
      "BOOK (paraphrased), method: divide, check the digit after the place asked for, then round; sometimes round to the greatest place value of the quotient.",
      "BOOK (paraphrased), Checking for Understanding: explain how to round a money quotient.",
    ],
    method: "DIVIDE ONE PLACE PAST THE PLACE ASKED, LOOK AT THAT DIGIT, ROUND. For money that is being shared, round UP to the next cent so the bill is covered. Estimate first so you know how big the answer should be.",
    exampleOnly: [
      "The pizza night: $14.65 among four friends, $214.50 among seven teammates. WORLD: one pizza place, the book's own opening, with our numbers.",
      "Left out on purpose: Ceres and Jupiter.",
    ],
    digitize: "Reading engine. Each division and each rounding shows as [ex] lines.",
    unclear: "",
  },

  /* The practice half, on paper (tools/math-homework.js). subject is the FOLDER, "maths". */
  sheet: { slug: "rounding-quotients-homework", subject: "maths",
    note: "Print it and work every problem on paper. No multiple choice this time." },

  shelf: { grades: [7], subject: "Math",
    blurb: "Four friends split a pizza and the calculator shows four decimal places. Rounding a quotient, and why money gets rounded up.",
    contains: [
      "Dividing one place past the place you're rounding to",
      "Rounding to the tenth, the hundredth and the whole number",
      "Why shared money is rounded up to the next cent",
      "Rounding to the greatest place value",
    ] },
  eyebrow: ["Math 7", "U2-L8", "Applications with Decimals"],
  dek: "A calculator will happily give you a quotient with six decimal places. Nobody can pay that, so you have to know where to stop.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "By the end of this lesson your student should be able to round a decimal quotient to a stated place, round a shared cost up to the next cent, and explain why up is the right direction for money."
      ]},
      { h: "Where Students Get Stuck", p: [
        "🚨 Stopping the division too early. To round to the hundredths you have to divide out to the thousandths, because the digit one place past is the one that decides.",
        "Rounding money down. A student who rounds 3.6625 to $3.66 gets the usual rounding right and still comes up a cent short when four people each pay it."
      ]},
      { h: "Teaching Suggestion", p: [
        "Make the student multiply the rounded share back by the number of people. Seeing 3.66 x 4 land a cent under the bill is the reason money rounds up, and it works better than being told."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Four Friends and One Pizza", s: [
      "Four friends finish a pizza after practice, the bill comes to $14.65, and they agree to split it evenly.",
      "Before anyone touches a calculator, a quick estimate says the bill is about $15, and $15 divided among four people is a bit under $4 each.",
      "When one of them divides 14.65 by 4, the calculator shows 3.6625, and nobody can hand over a share of six and a quarter hundredths of a dollar.",
      "So where do you stop, and which way do you round?"
    ]},

    { title: "Divide One Place Past", s: [
      "To round a quotient to a place, you divide until you've found the digit one place past the one you're rounding to, and that digit makes the decision.",
      "Rounding 3.6625 to the nearest tenth means looking at the hundredths digit, which is 6, so the tenths digit goes up from 6 to 7, and rounding to the nearest hundredth means looking at the thousandths digit, which is 2, so the hundredths digit stays as it is.",
      "To the nearest whole number it's 4, because the tenths digit is 6, and that matches the estimate of a bit under four dollars.",
      "",
      "[ex] 3.6625 to the nearest tenth = 3.7",
      "[ex] 3.6625 to the nearest hundredth = 3.66",
      "[ex] 3.6625 to the nearest whole number = 4"
    ]},

    { title: "But Money Is Different", s: [
      "Usual rounding says each friend pays $3.66, and the easiest way to see the problem is to multiply it back by four, which comes to $14.64.",
      "That's a cent short of the $14.65 bill, and somebody at the register will notice.",
      "When money is being shared, you round up to the next cent, even when the usual rule says to round down, because the bill has to be covered.",
      "Each friend pays $3.67, the group leaves a three-cent tip they didn't plan on, and everybody goes home.",
      "",
      "[ex] 4 x 3.66 = 14.64",
      "[ex] 4 x 3.67 = 14.68"
    ]},

    { title: "Don't Stop Too Early", s: [
      "A quotient can fool you if you quit dividing too soon, so keep going until you've reached the digit that decides.",
      "Divide 14.65 by 4 and stop at 3.66, and you'd think there was nothing left to look at, but there's still a remainder of 0.01 waiting to be divided.",
      "That's why you have to carry the division out one place further, to 3.662, before you can say what the hundredths digit rounds to.",
      "Most of the wrong answers in this kind of problem come from stopping one digit early."
    ]},

    { title: "Seven Teammates", s: [
      "The next week the whole team, seven players, splits a bigger bill of $214.50, and the same two ideas show up at once.",
      "Divide 214.50 by 7 and you get 30.642857 and the digits keep going, so the question is how much each player pays.",
      "The hundredths digit is 4 and the thousandths digit is 2, so the usual rounding gives $30.64, and seven players paying that come out two cents short.",
      "So each player pays $30.65, even though the next digit was only a 2, because shared money rounds up.",
      "",
      "[ex] 7 x 30.64 = 214.48",
      "[ex] 7 x 30.65 = 214.55"
    ]},

    { title: "Rounding to the Biggest Place", s: [
      "Sometimes you don't want the exact share, just a sense of how big it is, and then you round to the greatest place value of the quotient.",
      "The greatest place value in 30.64 is the tens place, so rounding there gives 30, which is the number you'd say out loud if someone asked what a pizza night costs each person.",
      "Every problem in this lesson comes down to the same three steps: divide one place past, look at that digit, and then decide whether the situation calls for rounding the usual way or up.",
      "",
      "[ex] 30.64 to the greatest place value = 30"
    ]}
  ],

  words: [
    ["Quotient", "The answer to a division problem.", 2],
    ["Place Value", "The value of a digit because of where it sits in a number, like tenths or hundredths.", 4],
    ["Greatest Place Value", "The place of the leftmost digit of a number, which is the tens place in 30.64.", 27],
    ["Round Up", "To raise a number to the next larger value of a place, as with a shared bill.", 12]
  ],

  findsAt: 30,
  questions: [
    { tag: "The Setup", q: "A calculator shows 3.6625 for 14.65 ÷ 4. Why can't the friends each pay that?",
      find: [2],
      hint: "Read Four Friends and One Pizza.",
      choices: [
        "Money can't have a decimal point.",
        "It's more than the bill.",
        "Money only has two decimal places, so the amount has to be rounded.",
        "The bill should be divided by 5 instead."
      ], right: 2 },

    { tag: "The Method", q: "To round a quotient to the nearest hundredth, which digit do you look at?",
      find: [4, 5],
      hint: "Read Divide One Place Past.",
      choices: [
        "The tenths digit.",
        "The hundredths digit.",
        "The whole-number digit.",
        "The thousandths digit."
      ], right: 3 },

    { tag: "Rounding", q: "What is 3.6625 rounded to the nearest tenth?",
      find: [5, 7],
      hint: "Look at the hundredths digit.",
      choices: ["3.6", "3.66", "3.7", "4"], right: 2 },

    { tag: "Money", q: "Why do four friends each paying $3.66 come up short?",
      find: [10, 11],
      hint: "Multiply 4 x 3.66.",
      choices: [
        "The four shares add up to $14.64, which is a cent less than the bill.",
        "The four shares add up to more than the bill.",
        "The estimate was wrong.",
        "Because each friend should pay $3.60."
      ], right: 0 },

    { tag: "Money", q: "When a bill is split, how should the share be rounded?",
      find: [12],
      hint: "Read But Money Is Different.",
      choices: [
        "Down to the next cent.",
        "Up to the next cent, so the bill is covered.",
        "To the nearest dollar.",
        "To the nearest tenth."
      ], right: 1 },

    { tag: "Too Early", q: "Why is stopping at 3.66 when you divide 14.65 by 4 a mistake?",
      find: [17, 18],
      hint: "Read Don't Stop Too Early.",
      choices: [
        "Because 3.66 is the wrong answer to the division.",
        "Because the quotient is a whole number.",
        "Because you never need the hundredths place.",
        "Because there's a remainder, and the next digit decides how to round."
      ], right: 3 },

    { tag: "Seven Teammates", q: "The usual rounding for 214.50 ÷ 7 gives $30.64. What should each player pay?",
      find: [23, 22],
      hint: "Seven players paying $30.64 are two cents short.",
      choices: ["$30.64", "$30.60", "$30.65", "$31.00"], right: 2 },

    { tag: "Biggest Place", q: "What is 30.64 rounded to its greatest place value?",
      find: [27],
      hint: "The leftmost digit is in the tens place.",
      choices: ["30", "31", "30.6", "40"], right: 0 }
  ],

  vocabQuestions: [
    { q: "What is a <i>quotient</i>?",
      choices: ["The number you divide by.", "The answer to a division problem.", "A rounded number.", "The number being divided."], right: 1 },
    { q: "What does <i>place value</i> tell you?",
      choices: ["How big a number is when it's rounded.", "Which digit is a zero.", "How many digits a number has.", "The value of a digit because of where it sits in the number."], right: 3 },
    { q: "What is the <i>greatest place value</i> of 30.64?",
      choices: ["The tens place.", "The ones place.", "The hundredths place.", "The tenths place."], right: 0 },
    { q: "What does it mean to <i>round up</i> a bill's share?",
      choices: ["Take away the cents.", "Raise it to the next larger cent so the bill is covered.", "Make it a whole dollar.", "Divide it again."], right: 1 }
  ],

  todo: { title: "What To Do Now", s: [
      "Four friends and a pizza bill put a decimal quotient in front of you, and the rest of this page is practice knowing where to stop.",
      "{c} word cards sit at the top of the page, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "For every quotient, find the digit one place past the place you're rounding to, and ask yourself whether it's a shared bill that has to be covered.",
      "If the money questions trip you up, read But Money Is Different again.",
      "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] }
};
