/* maths/rounding-decimals
   Grade 7 · maths · unit 2. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, MINE, 2026-09-24. Written on Opus from Glencoe Course 2
   p51, read on the borrowed copy the same evening. /natural has run over it
   once.

   READING SHAPE.

   ⚠️ THE WORLD IS THE BOOK'S: The Beast at Kings Island, Ohio, top speed
   64.77 mph as the book prints it. The book (1998) says engineers "hope that
   one day soon" to build a 100 mph coaster; the aside that one opened in 2003
   at 120 mph is Top Thrill Dragster, Cedar Point. Both worth a glance from
   Paul before shipping.
   The book's 14.295 is kept, re-set as a stopwatch reading on the ride, marked
   as YOUR stopwatch so it is not presented as a fact about the coaster.

   ⚠️ NO SCRIPTURE. Paul's call, in the review queue. */
'use strict';
module.exports = {
  id: "maths/rounding-decimals",
  slug: "rounding-decimals",
  title: "Rounding Decimals",
  unit: "Math 7 &middot; U2-L2",
  seq: { unit: 2, unitTitle: "Applications with Decimals", n: 2 },
  natural: "2026-09-24",

  /* ── /teach-plan, 2026-09-24. Glencoe Course 2 p51. ── */
  plan: {
    objective: "Round a decimal to a given place by looking at the digit just to its right.",
    markers: [
      "QUOTED, Objective box: 'Round decimals.'",
      "QUOTED: 'On the number line, the graph of 64.77 is closer to 65 than 64. To the nearest whole number, 64.77 rounds to 65.'",
      "QUOTED, the rule: 'Look at the digit to the right of the place being rounded. The digit remains the same if the digit to the right is 0, 1, 2, 3, or 4. Round up if the digit to the right is 5, 6, 7, 8, or 9.'",
      "QUOTED, Example 1: 'Round 1.84 to the nearest tenth.' Example 2: 'Round 14.295 to the nearest hundredth.' to 14.30",
    ],
    method: "CLOSER TO WHICH? THEN THE SHORTCUT. The book puts 64.77 on a number line between 64 and 65 and asks which it is nearer. Then it turns that into a rule you can apply without drawing anything: find the place, look one digit right, 0 to 4 stays, 5 to 9 rounds up. Example 2 is the carry: a 9 that rounds up turns into a 0 and pushes a 1 left, and the zero on the end has to stay.",
    exampleOnly: [
      "The Beast, Kings Island, 64.77 mph, the stopwatch on the tunnel. WORLD: one roller coaster.",
      "The book's 1.84 to the nearest tenth is re-set as 64.77 to the nearest tenth, to stay in the world. 14.295 kept.",
      "Left out on purpose: nothing major; the rest of the spread is exercises.",
    ],
    digitize: "Reading engine. Each rounding is a stack of [ex] lines: the number, the place, the digit to the right, the result. ⚠️ A round-this generator would carry the drilling; none exists.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Math",
    blurb: "A roller coaster clocked at 64.77 mph, a sign that says 65, and the one digit that decides which way a number rounds.",
    contains: [
      "Closer to 64 or 65? The number line answer",
      "The one-digit rule, and why it's the same rule you already know",
      "Rounding to tenths and hundredths",
      "The 9 that rounds up and leaves a zero behind",
    ] },
  eyebrow: ["Math 7", "U2-L2", "Applications with Decimals"],
  dek: "The coaster's top speed has two decimal places, and a sign by the line would have none. Somebody has to decide which way to round.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "By the end of this lesson your student should be able to round a decimal to the nearest whole number, tenth or hundredth by looking at the digit one place to the right.",
        "It is the same rule as rounding whole numbers in U1-L2. The only new thing is the places have new names."
      ]},
      { h: "Where Students Get Stuck", p: [
        "🚨 The carry. Rounding 14.295 to the nearest hundredth turns the 9 into a 10, so the 9 becomes 0 and the 2 becomes 3: 14.30. Students often write 14.3 or 14.2910. Keep the zero, because it shows the number was rounded to hundredths.",
        "Some students look at the wrong digit, the one IN the place instead of the one to its right. Have them underline the place first and circle the digit next door."
      ]},
      { h: "Teaching Suggestion", p: [
        "Draw a short number line from 64 to 65 with 64.5 marked in the middle, and ask which side 64.77 falls on. Once the student sees the halfway point, the 'five or more rounds up' rule explains itself.",
        "Then do the same between 64.7 and 64.8 for rounding to the nearest tenth. Same picture, one place further in."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "64.77, or 65?", s: [
      "The Beast at Kings Island in Ohio is a wooden roller coaster that runs for more than a mile through the woods, and its top speed is listed as 64.77 miles per hour.",
      "Picture a sign at the entrance to the line, though, and nobody would print 64.77 on it, because a number that exact is hard to take in at a glance.",
      "The sign would say about 65, and whoever painted it would have had to decide that 64.77 was closer to 65 than to 64.",
      "So how do you decide which way a decimal goes?"
    ]},

    { title: "Closer to Which?", s: [
      "Picture a number line between 64 and 65, with 64.5 sitting exactly halfway, and put 64.77 on it.",
      "",
      "[ex] 64 ....... 64.5 ....... 64.77 ... 65",
      "",
      "64.77 is past the halfway mark, so it's closer to 65, and to the nearest whole number it rounds to 65.",
      "That's all rounding is: choosing the nearer of two neighbors, so the number is easier to use while staying honest about roughly how big it is."
    ]},

    { title: "One Digit Decides", s: [
      "You don't have to draw a number line every time, because the digit just to the right of the place you're rounding to tells you which half you're in.",
      "",
      "[ex] 0, 1, 2, 3 or 4: the digit you're rounding stays the same.",
      "[ex] 5, 6, 7, 8 or 9: the digit you're rounding goes up by one.",
      "",
      "If that sounds familiar, it should, because it's the same rule you used to round Mark's computer prices in Estimation Strategy: Using Rounding.",
      "The only difference is that the places now have names like tenths and hundredths, so try it on 64.77 with the rule instead of the picture.",
      "",
      "[ex] 64.77",
      "[ex] The ones digit is 4, and the digit to its right is 7.",
      "[ex] 7 is 5 or more, so 4 goes up to 5: 65.",
      "",
      "It's the same answer the number line gave, and you didn't have to draw anything."
    ]},

    { title: "Rounding to a Tenth", s: [
      "A magazine writing about The Beast might want one decimal place instead of none, and the rule works the same way one place further in.",
      "",
      "[ex] 64.77 to the nearest tenth",
      "[ex] The tenths digit is 7, and the digit to its right is 7.",
      "[ex] 7 is 5 or more, so the tenths digit goes up: 64.8.",
      "",
      "Everything to the right of the tenths place drops off, because the whole point was to stop there.",
      "You've now rounded the same speed two ways, 65 and 64.8, and both are honest; they just answer different questions about how exact you need to be."
    ]},

    { title: "When a 9 Rounds Up", s: [
      "Say you time the train's run through the tunnel with your own stopwatch, and it reads 14.295 seconds.",
      "Round that to the nearest hundredth and this one has a surprise in it.",
      "",
      "[ex] 14.295 to the nearest hundredth",
      "[ex] The hundredths digit is 9, and the digit to its right is 5.",
      "[ex] 5 rounds up, but 9 + 1 is 10.",
      "[ex] The 9 becomes 0 and the 1 carries into the tenths: 14.30.",
      "",
      "It works exactly like adding one to 29 and getting 30.",
      "Keep that zero on the end, because 14.30 tells a reader you rounded to the hundredths, while 14.3 would say you only went as far as tenths."
    ]},

    { title: "What the Sign Doesn't Say", s: [
      "Go back to the sign by the line, which would say 65 because the digit after the 4 is a 7, and that puts 64.77 past the halfway mark and closer to 65.",
      "Every rounded number you'll see, on a sign, a scoreboard or a price tag, got there the same way: somebody picked a place and let the digit next door decide.",
      "When the book this lesson comes from was printed in 1998, it said engineers hoped to build a 100-mile-per-hour coaster one day soon.",
      "Five years later, Top Thrill Dragster opened at Cedar Point in Ohio with a top speed of 120."
    ]}
  ],

  words: [
    ["Round", "To replace a number with a nearby number that's easier to use, to a chosen place.", 7],
    ["Tenths", "The first place to the right of the decimal point. In 64.77, the first 7.", 12],
    ["Hundredths", "The second place to the right of the decimal point. In 64.77, the second 7.", 12],
    ["Nearest Whole Number", "Rounding so there are no digits left after the decimal point, like 64.77 to 65.", 6]
  ],

  findsAt: 35,
  questions: [
    { tag: "Closer to Which?", q: "Why does 64.77 round to 65 and not 64?",
      find: [4, 5, 6],
      hint: "Where does 64.77 sit compared with the halfway point, 64.5?",
      choices: [
        "Because it's past 64.5, so it's closer to 65.",
        "Because you always round up.",
        "Because 65 is an odd number.",
        "Because it has two decimal places."
      ], right: 0 },

    { tag: "The Rule", q: "When you round, which digit do you look at to decide?",
      find: [8],
      hint: "Not the digit in the place, the one next door.",
      choices: [
        "The first digit of the number.",
        "The digit just to the right of the place you're rounding to.",
        "The last digit of the number.",
        "The digit just to the left of the decimal point, every time."
      ], right: 1 },

    { tag: "The Rule", q: "If the digit to the right is 3, what happens to the digit you're rounding?",
      find: [9],
      hint: "0, 1, 2, 3 or 4 means one thing; 5 to 9 means another.",
      choices: [
        "It goes up by one.",
        "It becomes 0.",
        "It stays the same.",
        "It goes down by one."
      ], right: 2 },

    { tag: "Round It", q: "Round 64.77 to the nearest tenth.",
      find: [18, 19, 20],
      hint: "The tenths digit is 7. Look at the digit to its right.",
      choices: [
        "64.7",
        "65",
        "64.78",
        "64.8"
      ], right: 3 },

    { tag: "Round It", q: "Round 64.77 to the nearest whole number.",
      find: [13, 14, 15],
      hint: "The ones digit is 4. What comes right after it?",
      choices: [
        "64",
        "65",
        "64.8",
        "60"
      ], right: 1 },

    { tag: "The 9", q: "Round 14.295 to the nearest hundredth.",
      find: [25, 26, 27, 28],
      hint: "The 9 rounds up, and 9 + 1 is 10.",
      choices: [
        "14.29",
        "14.3",
        "14.30",
        "14.2910"
      ], right: 2 },

    { tag: "The 9", q: "Why keep the zero in 14.30?",
      find: [30],
      hint: "What would 14.3 tell a reader about how far you rounded?",
      choices: [
        "It shows the number was rounded to the hundredths.",
        "It makes the number bigger.",
        "Every decimal must end in zero.",
        "It doesn't matter, so there's no reason."
      ], right: 0 },

    { tag: "Same Rule", q: "How is rounding decimals like rounding whole numbers?",
      find: [11, 12],
      hint: "Think back to Mark's computer prices.",
      choices: [
        "It isn't; decimals always round up.",
        "Decimals round to the nearest 10 every time.",
        "Whole numbers never need rounding.",
        "It's the same rule; only the names of the places change."
      ], right: 3 }
  ],

  vocabQuestions: [
    { q: "What does it mean to <i>round</i> a number?",
      choices: [
        "Replace it with a nearby number that's easier to use, to a chosen place.",
        "Make it an even number.",
        "Remove the decimal point.",
        "Add 1 to it."
      ], right: 0 },
    { q: "In 64.77, which digit is in the <i>tenths</i> place?",
      choices: [
        "6",
        "4",
        "the first 7",
        "the second 7"
      ], right: 2 },
    { q: "In 14.295, which digit is in the <i>hundredths</i> place?",
      choices: [
        "2",
        "9",
        "5",
        "4"
      ], right: 1 },
    { q: "What is 64.77 rounded to the <i>nearest whole number</i>?",
      choices: [
        "64.8",
        "64",
        "60",
        "65"
      ], right: 3 }
  ],

  todo: { title: "What To Do Now", s: [
      "A coaster clocked at 64.77 becomes 65 on a sign because of one 7, and every rounding in the questions comes down to a digit like that.",
      "{c} word cards sit at the top of the page, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "Some ask about the rule, and some ask you to round a number to a whole number, a tenth or a hundredth.",
      "Before you round, underline the place you're rounding to and circle the digit to its right, because looking at the wrong digit is the usual mistake.",
      "If 14.295 trips you up, read When a 9 Rounds Up again.",
      "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] }
};
