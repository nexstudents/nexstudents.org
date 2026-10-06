/* maths/dividing-decimals
   Grade 7 · maths · unit 2. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-10-05. Written on Sonnet from Glencoe Course 2
   pp70-74 (the 2-7A decimal-model lab and Lesson 2-7), via the week 6-7 packet
   (paraphrased notes) and the teach-plan. /natural pass run and stamped.

   READING SHAPE.

   ⚠️ THE WORLD IS THE BOOK'S OWN OPENING, KEPT BUT MADE ORDINARY: a painting
   whose area and width are known and whose height is not. The book names a
   famous painting; this lesson doesn't, because the book's measurements are
   practice numbers, not the real ones. The sports example (a sprinter against
   a honeybee) is left out as another world.

   ⚠️ NO SCRIPTURE. Paul's call, in the review queue. */
'use strict';
module.exports = {
  id: "maths/dividing-decimals",
  slug: "dividing-decimals",
  title: "Dividing Decimals",
  unit: "Math 7 &middot; U2-L7",
  seq: { unit: 2, unitTitle: "Applications with Decimals", n: 7 },
  natural: "2026-10-05",

  /* ── /teach-plan, 2026-10-05. Glencoe Course 2 pp70-74. ── */
  plan: {
    objective: "Divide by a decimal by first making the divisor a whole number, moving both decimal points the same number of places.",
    markers: [
      "BOOK (paraphrased), 2-7A lab: shade 35 squares in 5 columns to model 0.35 divided by 0.5, then model 1 divided by 0.5 two ways.",
      "BOOK (paraphrased), Objective box: divide decimals.",
      "BOOK (paraphrased), opening: a painting's area is 0.4 square meter and its width is 0.5 meter, and you find the height by dividing the area by the width.",
      "BOOK (paraphrased), method: move the divisor's decimal point right until it is a whole number, then move the dividend's point the same number of places; the quotient stays the same.",
      "BOOK (paraphrased), Checking for Understanding: explain why 4.4 divided by 0.8 and 44 divided by 8 have the same quotient.",
    ],
    method: "MAKE THE DIVISOR A WHOLE NUMBER, THEN DIVIDE LIKE ANY WHOLE NUMBERS. Move the divisor's point right until it is whole, move the dividend's point the same count (annex zeros when the digits run out), divide, and check against an estimate. WHY it works: multiplying both numbers by the same power of ten keeps the quotient, so 0.4 divided by 0.5 and 4 divided by 5 are the same problem.",
    exampleOnly: [
      "The painting and its frame. WORLD: one painting, the book's own opening, with the real famous painting left out.",
      "The 10-by-10 square model from the 2-7A lab is described in words only; ⚠️ a drawn grid would help and the site doesn't have that visual yet.",
      "Left out on purpose: the sprinter against the honeybee.",
    ],
    digitize: "Reading engine. Each move of the point shows as [ex] lines.",
    unclear: "",
  },

  /* The practice half, on paper (tools/math-homework.js). ⚠️ subject is the
     FOLDER, "maths", not the label: homeworkCta lowercases it into the URL. */
  sheet: { slug: "dividing-decimals-homework", subject: "maths",
    note: "Print it and work every problem on paper. No multiple choice this time." },

  shelf: { grades: [7], subject: "Math",
    blurb: "A painting's area and width are known and its height isn't. Dividing by a decimal, and why moving both points keeps the answer the same.",
    contains: [
      "Making the divisor a whole number",
      "Moving both decimal points the same number of places",
      "Adding zeros when the digits run out",
      "Checking the quotient with an estimate",
    ] },
  eyebrow: ["Math 7", "U2-L7", "Applications with Decimals"],
  dek: "Dividing by a decimal looks like a new problem, but one move turns it into division you already know how to do.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "By the end of this lesson your student should be able to divide a decimal by a decimal by moving both points the same number of places, add zeros when they're needed, and explain why the quotient doesn't change."
      ]},
      { h: "Where Students Get Stuck", p: [
        "🚨 Moving only one point. The divisor's point and the dividend's point have to move the same number of places, or the problem has changed.",
        "Forgetting to add a zero. In 0.7 divided by 0.05 the dividend has only one digit after the point, so it needs a zero tacked on before it can move two places."
      ]},
      { h: "Teaching Suggestion", p: [
        "Do 0.4 divided by 0.5 once with squares: shade 40 squares in 5 columns and count 8 squares in each column, which is 0.8. That picture is the reason the moving works, and it's worth doing once by hand."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "A Painting With One Measurement Missing", s: [
      "A worker at a gallery is building a frame for a painting, and she knows two things about it: the painting covers 0.4 square meter, and it's 0.5 meter wide.",
      "The area of a rectangle is its width times its height, so the missing height has to be the area divided by the width, which is 0.4 divided by 0.5.",
      "That's a decimal divided by a decimal, and the decimal point in the divisor is exactly the thing that makes it feel strange.",
      "So how do you divide by a number that isn't whole?"
    ]},

    { title: "Make the Divisor a Whole Number", s: [
      "The trick is to turn the problem into one you've already solved, and the only thing standing in the way is the point in the divisor.",
      "Move the divisor's decimal point to the right until the divisor is a whole number, and then move the dividend's point the same number of places.",
      "",
      "[ex] 0.4 ÷ 0.5 = 4 ÷ 5",
      "",
      "The point in 0.5 moved one place to the right to make 5, so the point in 0.4 moved one place to make 4, and now it's a problem with no decimals at all.",
      "Four divided by five is 0.8, so the painting is 0.8 meter tall, and you can see that answer is sensible because 0.5 goes into 0.4 a little less than once.",
      "",
      "[ex] 4 ÷ 5 = 0.8"
    ]},

    { title: "Why the Answer Doesn't Change", s: [
      "Moving the points can look like a trick that happens to work, but there's a real reason underneath it.",
      "Suppose the gallery worker has a strip of wood molding 4.4 meters long, and every side of a frame needs 0.8 meter of it.",
      "How many sides can she cut, and is it the same number as 44 divided by 8?",
      "",
      "[ex] 4.4 ÷ 0.8 = 44 ÷ 8 = 5.5",
      "",
      "Moving both points one place to the right is the same as multiplying both numbers by 10, and when you multiply the amount and the size of each piece by the same number, you get the same number of pieces.",
      "That's why the quotient stays the same, and why both points always have to move together."
    ]},

    { title: "When the Digits Run Out", s: [
      "Sometimes the divisor needs more moves than the dividend has digits, and then you write zeros on the end of the dividend to make room, which is called annexing zeros.",
      "Take 0.7 divided by 0.05, where the divisor needs two moves to become 5 but the dividend has only one digit after its point.",
      "",
      "[ex] 0.7 ÷ 0.05",
      "[ex] 0.70 ÷ 0.05 = 70 ÷ 5",
      "[ex] 70 ÷ 5 = 14",
      "",
      "Adding a zero to the end of 0.7 doesn't change its value, so you aren't breaking anything, and the answer, 14, makes sense because 0.05 fits into 0.7 a lot of times."
    ]},

    { title: "A Bigger One, and the Estimate", s: [
      "The same steps work on larger numbers, and an estimate protects you from putting the point in the wrong place.",
      "Say a long strip of ribbon trim is 199.68 meters and each wall hanging uses 9.6 meters, so you need 199.68 divided by 9.6.",
      "Move the point in 9.6 one place to make 96, then move the point in 199.68 one place to make 1,996.8, and the quotient's point goes straight up above the point in the dividend.",
      "",
      "[ex] 199.68 ÷ 9.6 = 1,996.8 ÷ 96 = 20.8",
      "",
      "Round the problem to 200 divided by 10 and you get 20, which is close to 20.8, so the point is in the right place.",
      "If you'd gotten 2.08 or 208, the estimate would have told you something was wrong before anyone else did."
    ]},

    { title: "Back to the Painting", s: [
      "Now check the painting the way you'd check any division, by multiplying back.",
      "",
      "[ex] 0.5 x 0.8 = 0.4",
      "",
      "The width times the height gives the area the gallery worker started with, so the painting is 0.8 meter tall, and her frame can be cut.",
      "Every division with a decimal divisor works the same way: move both points together, divide as whole numbers, and check with an estimate."
    ]}
  ],

  words: [
    ["Dividend", "The number being divided. In 0.4 ÷ 0.5, the dividend is 0.4.", 5],
    ["Divisor", "The number you divide by. In 0.4 ÷ 0.5, the divisor is 0.5.", 5],
    ["Quotient", "The answer to a division problem.", 8],
    ["Annex", "To write extra zeros on the end of a decimal so there are enough digits.", 16]
  ],

  findsAt: 32,
  questions: [
    { tag: "The Setup", q: "How does the gallery worker find the painting's height?",
      find: [1],
      hint: "Read A Painting With One Measurement Missing.",
      choices: [
        "She divides the area by the width.",
        "She multiplies the area by the width.",
        "She adds the area and the width.",
        "She subtracts the width from the area."
      ], right: 0 },

    { tag: "The Method", q: "What's the first step in dividing 0.4 by 0.5?",
      find: [5, 7],
      hint: "Read Make the Divisor a Whole Number.",
      choices: [
        "Move the dividend's point two places left.",
        "Multiply the divisor by itself.",
        "Round both numbers to the nearest whole number.",
        "Move the divisor's point right until it's a whole number."
      ], right: 3 },

    { tag: "Both Points", q: "After the point in the divisor moves two places to the right, what has to happen to the dividend?",
      find: [5, 14],
      hint: "Both points have to move together.",
      choices: [
        "Its point stays where it is.",
        "Its point moves two places to the right.",
        "Its point moves two places to the left.",
        "It's rounded to a whole number."
      ], right: 1 },

    { tag: "Why It Works", q: "Why does moving both points not change the quotient?",
      find: [14, 15],
      hint: "Read Why the Answer Doesn't Change.",
      choices: [
        "Because the dividend is always the larger number.",
        "Because both numbers are multiplied by the same power of ten.",
        "Because the divisor is always a whole number.",
        "Because the decimal point is never really there."
      ], right: 1 },

    { tag: "Annexing", q: "To work out 0.7 ÷ 0.05, what do you have to do to 0.7 before you move the points?",
      find: [17, 21],
      hint: "The dividend runs out of digits.",
      choices: [
        "Take away its decimal point.",
        "Add a zero on the end, so it becomes 0.70.",
        "Divide it by ten first.",
        "Nothing, because it already has enough digits."
      ], right: 1 },

    { tag: "The Answer", q: "What is 0.7 ÷ 0.05?",
      find: [20],
      hint: "It's the same as 70 ÷ 5.",
      choices: ["1.4", "14", "140", "0.14"], right: 1 },

    { tag: "The Estimate", q: "Round 199.68 ÷ 9.6 to 200 ÷ 10. What does the estimate tell you about the quotient?",
      find: [26, 27],
      hint: "Read A Bigger One, and the Estimate.",
      choices: [
        "It should be about 2.",
        "It should be about 200.",
        "It should be about 20.",
        "It should be about 0.2."
      ], right: 2 },

    { tag: "Checking", q: "How can you check that the painting's height is 0.8 meter?",
      find: [28, 30],
      hint: "Read Back to the Painting.",
      choices: [
        "Divide 0.8 by 0.5 again.",
        "Add 0.5 and 0.8.",
        "Multiply 0.5 by 0.8 and see if you get 0.4.",
        "Round 0.8 to a whole number."
      ], right: 2 }
  ],

  vocabQuestions: [
    { q: "In 0.4 ÷ 0.5, which number is the <i>divisor</i>?",
      choices: ["0.4", "0.5", "0.8", "4"], right: 1 },
    { q: "What is a <i>dividend</i>?",
      choices: ["The number you divide by.", "The answer to a division.", "The number being divided.", "A decimal point."], right: 2 },
    { q: "What is a <i>quotient</i>?",
      choices: ["The answer to a division problem.", "The number you divide by.", "A zero added to the end.", "The number being divided."], right: 0 },
    { q: "What does it mean to <i>annex</i> zeros?",
      choices: ["Take them away from the front.", "Round them off.", "Multiply them by ten.", "Write extra zeros on the end of a decimal."], right: 3 }
  ],

  todo: { title: "What To Do Now", s: [
      "A painting's height came out of one division with a decimal in it, and the rest of this page is practice doing the same.",
      "{c} word cards sit at the top of the page, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "For every problem, move both points the same number of places before you divide, and check your answer against an estimate.",
      "If the annex question trips you up, read When the Digits Run Out again.",
      "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] }
};
