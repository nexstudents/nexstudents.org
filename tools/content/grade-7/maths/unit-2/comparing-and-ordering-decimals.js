/* maths/comparing-and-ordering-decimals
   Grade 7 · maths · unit 2. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, MINE, 2026-09-24. Written on Opus from Glencoe Course 2
   pp48-50, read on the borrowed copy the same evening. /natural has run over
   it once.

   READING SHAPE.

   ⚠️ THE WORLD IS THE BOOK'S OWN EXERCISE 39, promoted to the story. The book
   opens on fast-food calories per ounce, with brand names; its own exercise 39
   is the 1988 Olympic women's balance beam final, four real gymnasts and four
   real scores, two of them tied. Real people, a real medal decided in the
   thousandths, and a tie that teaches "equal". Scores as the book prints them:
   Silivas 19.924, Shushunova 19.875 (book spells it Shoushounova), Potorac and
   Mills 19.837. ⚠️ Worth a one-line check by Paul that the medal order stated
   in the prose (gold, silver, shared bronze) matches the record; it matches
   the scores.

   ⚠️ NO SCRIPTURE. Paul's call, in the review queue. */
'use strict';
module.exports = {
  id: "maths/comparing-and-ordering-decimals",
  slug: "comparing-and-ordering-decimals",
  title: "Comparing and Ordering Decimals",
  unit: "Math 7 &middot; U2-L1",
  seq: { unit: 2, unitTitle: "Applications with Decimals", n: 1 },
  natural: "2026-09-24",

  /* ── /teach-plan, 2026-09-24. Glencoe Course 2 pp48-50. ── */
  plan: {
    objective: "Decide which of two decimals is greater by lining up the decimal points and comparing place by place from the left, then put a set of decimals in order.",
    markers: [
      "QUOTED, Objective box: 'Compare and order decimals.'",
      "QUOTED: 'On a number line, numbers to the right are greater than numbers to the left.'",
      "QUOTED: 'To compare two decimals, align the numbers by their decimal points. Start at the left and compare the digits in each place-value position. Compare as with whole numbers.'",
      "QUOTED: 'Annexing zeros to the right of a decimal produces equivalent decimals.' with 0.4 = 0.40",
      "QUOTED, Checking for Understanding: 'Tell a friend how comparing decimals is similar to and different from comparing whole numbers.'",
      "QUOTED, Exercises: 'Order each set of numbers from least to greatest.'",
    ],
    method: "TWO PICTURES OF THE SAME RULE. First the number line: further right is greater. Then the place-value way: stack the numbers with the decimal points lined up and read down the columns from the left until two digits differ. When one number is shorter, annex zeros so both have the same number of places, which kills the idea that the longer decimal is the bigger one. Ordering is comparing, done until every number has its place.",
    exampleOnly: [
      "Seoul 1988, the balance beam final, Silivas, Shushunova, Potorac and Mills, and the imagined 19.9. WORLD: one Olympic final.",
      "Left out on purpose: the fast-food calories (brand names), the barometer readings.",
    ],
    digitize: "Reading engine. The stacked comparisons are [ex] blocks, one row per number, decimal points lined up by hand. ⚠️ A drag-to-order mechanic would suit the ordering half; the site has none, so the questions carry it.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Math",
    blurb: "An Olympic medal decided in the thousandths, a tie for bronze, and the one habit that tells you which decimal is bigger.",
    contains: [
      "Why further right on a number line means greater",
      "Lining up the decimal points and reading from the left",
      "Why a longer decimal isn't always a bigger one",
      "Putting four scores in order, tie included",
    ] },
  eyebrow: ["Math 7", "U2-L1", "Applications with Decimals"],
  dek: "Four scores, all starting with 19. Which one won? The answer sits a few digits past the decimal point.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "By the end of this lesson your student should be able to compare two decimals with <, > or =, and put a list of decimals in order from least to greatest.",
        "The method is to line up the decimal points and compare digits from the left, adding zeros to the end of a shorter decimal when that helps."
      ]},
      { h: "Where Students Get Stuck", p: [
        "🚨 The big misconception is that the decimal with more digits is bigger, so 19.875 looks bigger than 19.9. Annexing zeros fixes it: 19.9 is 19.900, and 900 thousandths beats 875.",
        "Some students also mix up < and >. The open side faces the bigger number, and reading 19.837 < 19.875 aloud as 'is less than' helps it stick.",
        "A tie is a real answer. Two decimals can be equal, and 0.4 and 0.40 are the same number written two ways."
      ]},
      { h: "Teaching Suggestion", p: [
        "Have the student write each pair in a stack with the decimal points lined up, one number above the other, before deciding. The stack does most of the work.",
        "If you can, draw a number line from 19.8 to 20.0 and let the student mark the four scores. Seeing Silivas furthest right makes 'greater' something they can see, not just a rule."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Seoul, 1988: Decided in the Thousandths", s: [
      "In the 1988 Olympics in Seoul, four gymnasts in the women's balance beam final finished with scores so close together that every one of them started with 19.",
      "Scores in that final were out of 20, so everybody on the podium was less than two tenths from perfect.",
      "",
      "[ex] Daniela Silivas: 19.924",
      "[ex] Elena Shushunova: 19.875",
      "[ex] Gabriela Potorac: 19.837",
      "[ex] Phoebe Mills: 19.837",
      "",
      "One of those women took gold and one took silver, and two of them stood on the podium together sharing bronze.",
      "Looking at a list of numbers that all begin with 19.8 or 19.9, how do you tell who won?"
    ]},

    { title: "Further Right Is Greater", s: [
      "Start with a picture, a number line, where every step to the right is a bigger number, and that stays true even when you zoom in between 19.8 and 20.",
      "",
      "[ex] 19.8 ... 19.837 ... 19.875 ... 19.9 ... 19.924 ... 20.0",
      "",
      "Silivas sits furthest right, so her score is the greatest, and Potorac and Mills share the same spot.",
      "When you compare two numbers in writing, you use a symbol whose open side faces the bigger one.",
      "",
      "[ex] 19.924 > 19.875   (is greater than)",
      "[ex] 19.837 < 19.875   (is less than)",
      "[ex] 19.837 = 19.837   (is equal to)"
    ]},

    { title: "Line Up the Decimal Points", s: [
      "A number line is great for seeing it, but you won't always want to draw one, and there's a faster way that works every time.",
      "Write the two numbers in a stack with their decimal points lined up, so every digit sits above the digit in the same place.",
      "",
      "[ex] 19.924",
      "",
      "[ex] 19.875",
      "",
      "Then read down the columns from the left, just the way you'd compare two whole numbers.",
      "The tens match and the ones match, but in the tenths place 9 is greater than 8, and that settles it: 19.924 > 19.875.",
      "Once two digits differ you can stop, because nothing further right can change the answer; the thousandths only mattered in Seoul because every place before them was a tie."
    ]},

    { title: "The Longer Number Isn't the Bigger One", s: [
      "Here's where people slip, so say a fifth gymnast had scored 19.9, and you stacked her score against Shushunova's.",
      "",
      "[ex] 19.9",
      "",
      "[ex] 19.875",
      "",
      "19.875 has more digits, so it looks bigger, but it isn't.",
      "You can write zeros on the end of a decimal without changing its value, which is called annexing zeros, and it makes both numbers the same length.",
      "",
      "[ex] 19.900",
      "",
      "[ex] 19.875",
      "",
      "Now it's plain, because in the tenths place 9 beats 8, and you can stop right there.",
      "19.9 and 19.900 are the same number written two ways, and it's the greater score."
    ]},

    { title: "Putting Them in Order", s: [
      "Ordering is just comparing, done until every number has a place, and from least to greatest the Seoul final looks like this.",
      "",
      "[ex] 19.837 = 19.837 < 19.875 < 19.924",
      "",
      "Potorac and Mills are equal, so they share the lowest spot on the podium, which is exactly why two women received bronze medals that night.",
      "Then comes Shushunova, and at the top, Silivas, the only score with a 9 in the tenths place.",
      "So how did the judges tell who won?",
      "The same way you just did: they lined up the decimal points and read from the left until two digits disagreed."
    ]}
  ],

  words: [
    ["Decimal", "A number with a decimal point, like 19.875, where digits to the right of the point are parts of a whole.", 16],
    ["Compare", "To decide whether one number is greater than, less than or equal to another.", 11],
    ["Greater Than", "The symbol whose open side faces the bigger number, as in 19.924 > 19.875.", 12],
    ["Less Than", "The symbol whose point faces the smaller number, as in 19.837 < 19.875.", 13],
    ["Annex Zeros", "To write zeros on the end of a decimal. It doesn't change the value: 19.9 = 19.900.", 26]
  ],

  findsAt: 37,
  questions: [
    { tag: "The Number Line", q: "On a number line, where do the greater numbers sit?",
      find: [8, 10],
      hint: "Look at where Silivas's score landed.",
      choices: [
        "To the left.",
        "To the right.",
        "In the middle.",
        "It depends on how many digits they have."
      ], right: 1 },

    { tag: "Line It Up", q: "What's the first thing you do to compare 19.924 and 19.875 without a number line?",
      find: [16, 17, 18],
      hint: "Every digit should sit above the digit in the same place.",
      choices: [
        "Count the digits in each number.",
        "Round both to the nearest whole number.",
        "Line up the decimal points, one number above the other.",
        "Add them together."
      ], right: 2 },

    { tag: "Compare", q: "Which symbol makes this true? 19.924 __ 19.875",
      find: [12, 20],
      hint: "Read the tenths place.",
      choices: [
        "<",
        "=",
        "+",
        ">"
      ], right: 3 },

    { tag: "Compare", q: "In 19.924 and 19.875, which place decides which is greater?",
      find: [19, 20],
      hint: "Read from the left and stop where the digits first differ.",
      choices: [
        "The tens place.",
        "The tenths place.",
        "The thousandths place.",
        "The ones place."
      ], right: 1 },

    { tag: "The Trap", q: "Which is greater, 19.9 or 19.875?",
      find: [23, 24, 25, 29, 30],
      hint: "Annex zeros so both have the same number of places.",
      choices: [
        "19.9",
        "19.875",
        "They're equal.",
        "You can't tell."
      ], right: 0 },

    { tag: "The Trap", q: "Why can you write 19.9 as 19.900?",
      find: [26, 30],
      hint: "Think about what zeros on the end of a decimal do to its value.",
      choices: [
        "Because it makes the number bigger.",
        "Because zeros on the end of a decimal don't change its value.",
        "Because every score needs three decimal places.",
        "Because 19.9 was a mistake."
      ], right: 1 },

    { tag: "Order", q: "Put these in order from least to greatest: 19.924, 19.837, 19.875.",
      find: [32],
      hint: "Compare the tenths first, then the hundredths.",
      choices: [
        "19.924, 19.875, 19.837",
        "19.875, 19.837, 19.924",
        "19.837, 19.924, 19.875",
        "19.837, 19.875, 19.924"
      ], right: 3 },

    { tag: "Order", q: "Why did two gymnasts share the bronze medal?",
      find: [32, 33],
      hint: "Look at Potorac's and Mills's scores side by side.",
      choices: [
        "Their scores were equal.",
        "The judges couldn't decide.",
        "They performed together.",
        "One of them was disqualified."
      ], right: 0 }
  ],

  vocabQuestions: [
    { q: "What does it mean to <i>compare</i> two numbers?",
      choices: [
        "To add them together.",
        "To decide whether one is greater than, less than or equal to the other.",
        "To round them both.",
        "To write them in words."
      ], right: 1 },
    { q: "Which of these is read as <i>is greater than</i>?",
      choices: [
        "<",
        "=",
        ">",
        "+"
      ], right: 2 },
    { q: "What does it mean to <i>annex zeros</i> to a decimal?",
      choices: [
        "Write zeros on the end without changing its value.",
        "Remove every zero in it.",
        "Multiply it by 10.",
        "Put zeros in front of the decimal point."
      ], right: 0 },
    { q: "Which of these is a <i>decimal</i>?",
      choices: [
        "19",
        "1/2",
        "twenty",
        "19.875"
      ], right: 3 }
  ],

  todo: { title: "What To Do Now", s: [
      "An Olympic medal came down to the thousandths, and lining up four decimal points was enough to put the whole podium in order.",
      "{c} word cards sit at the top of the page, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "Some ask you to compare two decimals with a symbol, and some ask you to put a set of them in order.",
      "Before you answer any of them, stack the numbers with the decimal points lined up, the way the lesson did.",
      "The one people get wrong is 19.9 against 19.875, and if that's the one you picked, read The Longer Number Isn't the Bigger One again.",
      "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] }
};
