/* maths/divisibility-patterns
   Grade 7 · maths · unit 4. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-10-11. Written on Sonnet from Glencoe Course 2
   pp129-131 (Lesson 4-1) via the week 8-9 packet (paraphrased notes). Shape copied
   from the pilot, maths/mean-median-and-mode. The video (Tutoring Hour) has no
   transcript on its watch page, so its order was not read; the order here follows
   the book: sharing picture, then each rule one at a time.

   ⚠️ ONE WORLD: Eli's baseball cards and the equal piles he makes with them. Our
   numbers, never the book's (48 crayons, 126, 397, 1,260 and the desk-arranging
   problem are left out). The book has no rule for 7 or 8, and this lesson says so. */
'use strict';
module.exports = {
  id: "maths/divisibility-patterns",
  slug: "divisibility-patterns",
  title: "Divisibility Patterns",
  unit: "Math 7 &middot; U4-L1",
  seq: { unit: 4, unitTitle: "Patterns and Number Sense", n: 1 },
  natural: "2026-10-11",

  /* ── /teach-plan, 2026-10-11. Glencoe Course 2 pp129-131. ── */
  plan: {
    objective: "Use the divisibility rules for 2, 3, 4, 5, 6, 9 and 10 to tell whether a number divides evenly, without dividing.",
    markers: [
      "BOOK (paraphrased), Objective box: use divisibility rules.",
      "BOOK (paraphrased), the opening idea: 48 crayons shared among 3 children come out even, so 48 is divisible by 3 and 3 is a factor of 48.",
      "BOOK (paraphrased), the rules: 2 (ones digit even), 3 (digit sum divisible by 3), 4 (last two digits divisible by 4), 5 (ones digit 5 or 0), 6 (divisible by both 2 and 3), 9 (digit sum divisible by 9), 10 (ones digit 0).",
      "BOOK (paraphrased), Examples: test one number against every rule; use a calculator when no rule applies; build a number that is divisible by several divisors at once.",
      "BOOK (paraphrased), Checking for Understanding: why every number divisible by 10 is divisible by 5, and how to pick a number divisible by 3 but not 9.",
    ],
    method: "ONE RULE AT A TIME. 2: the ones digit is even. 5: the ones digit is 0 or 5. 10: the ones digit is 0. 3 and 9: add the digits; if the sum divides by 3 (or 9), so does the number. 4: look only at the last two digits. 6: the number must pass both the 2 rule and the 3 rule. The book gives no rule for 7 or 8, so divide.",
    exampleOnly: [
      "Eli's baseball cards and equal piles for his friends. WORLD: one box of cards, our numbers.",
      "Left out on purpose: the crayons, the 126 and 397 examples and the desk-arranging problem (three more worlds).",
    ],
    digitize: "Reading engine. Four Watch It Worked walkthroughs (the ones-digit rules, the digit sum, the last two digits, then one number against all seven), one Your Turn typed step by step, a video behind a button, and the homework sheet.",
    unclear: "",
  },

  sheet: { slug: "divisibility-patterns-homework", subject: "maths",
    note: "Do it on screen or print it. Your score shows here once you check it." },

  video: { id: "uiSDZ3zB_d4", title: "Divisibility Rules for 2, 3, 4, 5, 6, 7, 8, 9, & 10", channel: "Tutoring Hour",
    why: "The same rules, plus tests for 7 and 8, which the book leaves out. Worth watching once the seven rules in the lesson feel easy." },

  shelf: { grades: [7], subject: "Math",
    blurb: "Eli wants to split his baseball cards into equal piles without doing any division. Seven quick tests tell you which piles will come out even.",
    contains: [
      "What divisible and factor mean, from a picture of sharing",
      "The rules for 2, 5 and 10, then 3 and 9, then 4, then 6",
      "Four worked examples that show every test",
      "A Your Turn problem you work and type one step at a time",
    ] },
  eyebrow: ["Math 7", "U4-L1", "Patterns and Number Sense"],
  dek: "Eli has a box of baseball cards and a lot of friends, and he wants to know which piles will come out even before he starts dealing.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "By the end of this lesson your student should be able to use the divisibility rules for 2, 3, 4, 5, 6, 9 and 10 on any whole number, and explain why each rule works as a test."
      ]},
      { h: "Where Students Get Stuck", p: [
        "🚨 Using the digit sum for the wrong rule, such as checking 4 or 5 by adding the digits. The sum is only for 3 and 9.",
        "Checking 4 by the ones digit alone, so every even number looks like it passes. Only the last two digits matter.",
        "Forgetting that 6 needs both 2 and 3, and calling a number divisible by 6 because it passed just one of them."
      ]},
      { h: "Teaching Suggestion", p: [
        "Have the student pick a number and predict which rules it passes, then check each prediction with a calculator. The rules feel like magic until he sees them hold ten times in a row."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Equal Piles", s: [
      "Eli has a shoebox of baseball cards, and he wants to hand them out to his friends in piles that are exactly equal, with none left over for arguments.",
      "A pile of 36 cards for 4 friends works out to 9 each, and nothing is left, so 36 is {{divisible}} by 4.",
      "That's all divisible means: one whole number divides another with a {{remainder}} of zero, and the number you divided by is called a {{factor}} of the other.",
      "Here 4 is a factor of 36, and so are 1, 2, 3, 6, 9, 12, 18 and 36, since each of them splits 36 into equal piles.",
      "You could divide every time to find out, but there's a quicker way, because each divisor has a pattern in the digits that gives it away."
    ]},

    { title: "2, 5 and 10: Look at the Last Digit",
      s: [
      "The easiest rules only need the last digit, which is the ones digit, and the first one is for 2: a number is divisible by 2 when its ones digit is even.",
      "Even means 0, 2, 4, 6 or 8, so 7,348 passes and 7,349 doesn't.",
      "The rule for 5 is that the ones digit is 0 or 5, and the rule for 10 is that the ones digit is 0.",
      "Every number that passes the rule for 10 also passes the rule for 5, since anything divisible by 10 can be split into groups of 5 as well.",
      "",
      "[walk] Test 2,375 for 2, 5 and 10.",
      "[step] Look only at the ones digit. || 2,375 → ones digit is 5",
      "[step] The ones digit 5 is odd, so 2,375 is not divisible by 2. || 5 is not even, so no for 2",
      "[step] The ones digit is 5, which is 0 or 5, so 2,375 is divisible by 5. || ones digit 5, so yes for 5",
      "[step] The ones digit isn't 0, so 2,375 is not divisible by 10. || ones digit 5 is not 0, so no for 10"
    ]},

    { title: "3 and 9: Add the Digits",
      s: [
      "The rules for 3 and 9 use a different trick: you add up all the digits to get the {{digit sum}}.",
      "If the digit sum is divisible by 3, then the whole number is divisible by 3, and if the digit sum is divisible by 9, then the whole number is divisible by 9.",
      "A number can pass the rule for 3 and fail the rule for 9, which is how you can pick a number that is divisible by 3 but not by 9.",
      "",
      "[walk] Test 4,527 for 3 and 9.",
      "[step] Add every digit, not just the last one. || 4 + 5 + 2 + 7 = 18",
      "[step] Ask whether the digit sum is divisible by 3. || 18 ÷ 3 = 6, so yes for 3",
      "[step] Ask whether the digit sum is divisible by 9. || 18 ÷ 9 = 2, so yes for 9",
      "",
      "Try it on 4,512 and the digit sum is 12, which passes for 3 but not 9, so 4,512 is divisible by 3 and not by 9.",
      "The most common slip is using the digit sum for some other divisor, and it only works for 3 and 9, so never add the digits to test for 4 or 5."
    ]},

    { title: "4: Look at the Last Two Digits",
      s: [
      "The rule for 4 uses the last two digits, because 100 splits evenly into groups of 4, so everything in front of the last two digits is already fine.",
      "That means a number is divisible by 4 when the number made by its last two digits is divisible by 4.",
      "Don't use just the ones digit here, because 14 ends in an even digit and still isn't divisible by 4.",
      "",
      "[walk] Test 5,316 and 7,214 for 4.",
      "[step] Take the last two digits of 5,316, which make the number 16. || 5,316 → 16",
      "[step] Check whether 16 is divisible by 4. || 16 ÷ 4 = 4, so 5,316 is divisible by 4",
      "[step] Take the last two digits of 7,214, which make the number 14. || 7,214 → 14",
      "[step] Check whether 14 is divisible by 4. || 14 ÷ 4 = 3 remainder 2, so 7,214 is not divisible by 4"
    ]},

    { title: "6: Both 2 and 3", s: [
      "The rule for 6 isn't new, since 6 is just 2 times 3, so a number is divisible by 6 when it passes both the rule for 2 and the rule for 3.",
      "Passing only one of them isn't enough, and the easiest way to forget this is to see an even number and shout 6 before checking the digits.",
      "A number like 3,124 is even but its digit sum is 10, so it's not divisible by 3 and therefore not by 6."
    ]},

    { title: "All Seven on One Number",
      s: [
      "Now put them together and test one number against every rule, which is a good habit when you're trying to find all the piles that will work.",
      "",
      "[walk] Test 1,764 for 2, 3, 4, 5, 6, 9 and 10.",
      "[step] The ones digit is 4, which is even, so it passes for 2, but it isn't 0 or 5, so it fails for 5 and for 10. || 2: yes   5: no   10: no",
      "[step] Add the digits to get the digit sum, and test it for 3 and 9. || 1 + 7 + 6 + 4 = 18\n3: yes   9: yes",
      "[step] Take the last two digits, 64, and test them for 4. || 64 ÷ 4 = 16, so 4: yes",
      "[step] The rule for 6 needs both 2 and 3, and 1,764 passed both. || 6: yes",
      "[step] Collect the divisors that passed. || 1,764 is divisible by 2, 3, 4, 6 and 9"
    ]},

    { title: "When There Is No Rule", s: [
      "The book gives rules for 2, 3, 4, 5, 6, 9 and 10, and none for 7 or 8, so for those you simply divide with a calculator and look for a remainder of zero.",
      "There are tests for 7 and 8 too, and the video shows them, but they take longer than just dividing."
    ]}
  ],

  words: [
    ["Divisible", "One whole number is divisible by another when it divides evenly, with a remainder of zero.", 1],
    ["Factor", "A number that divides another number evenly. 4 is a factor of 36.", 2],
    ["Digit sum", "What you get when you add up all the digits of a number. Used to test for 3 and 9.", 14],
    ["Remainder", "What is left over after dividing. A remainder of zero means it divided evenly.", 2],
  ],

  findsAt: 43,
  questions: [
    { tag: "The Setup", q: "Eli deals 36 cards into piles for 4 friends and none are left over. What does that show?",
      find: [1, 2],
      hint: "Read Equal Piles.",
      choices: [
        "36 is divisible by 4, and 4 is a factor of 36.",
        "36 is a factor of 4.",
        "36 is odd.",
        "4 is divisible by 36."
      ], right: 0 },

    { tag: "Use It", q: "Which of these numbers is divisible by 10?",
      find: [7],
      hint: "Look at the ones digit.",
      choices: ["4,055", "4,505", "4,050", "4,005"], right: 2 },

    { tag: "Use It", q: "Is 8,415 divisible by 9?",
      find: [15, 20],
      hint: "Add the digits, then see whether the sum divides by 9.",
      choices: [
        "Yes, the digit sum is 18, and 18 is divisible by 9.",
        "No, the digit sum is 14.",
        "No, it's an odd number.",
        "Yes, because it ends in 5."
      ], right: 0 },

    { tag: "Use It", q: "Which number is divisible by 3 but not by 9?",
      find: [16, 21],
      hint: "Find the digit sum for each. It has to divide by 3 and not by 9.",
      choices: ["3,114", "4,512", "2,007", "6,300"], right: 1 },

    { tag: "Use It", q: "Is 7,628 divisible by 4?",
      find: [24],
      hint: "Only the last two digits matter.",
      choices: [
        "Yes, because 28 is divisible by 4.",
        "No, because 28 is not divisible by 4.",
        "No, because 7,628 is odd.",
        "Yes, because 6 is even."
      ], right: 0 },

    { tag: "Use It", q: "Which number is divisible by 6?",
      find: [31],
      hint: "It has to pass the rule for 2 and the rule for 3.",
      choices: ["3,125", "4,562", "2,125", "5,214"], right: 3 },

    { tag: "Careful", q: "A student says 3,214 is divisible by 4 because it's even. What did he do wrong?",
      find: [25],
      hint: "Read 4: Look at the Last Two Digits.",
      choices: [
        "Nothing, even numbers are always divisible by 4.",
        "He should have looked at the last two digits, 14, and 14 is not divisible by 4.",
        "He should have added the digits.",
        "He should have looked at the first digit."
      ], right: 1 },

    { tag: "Careful", q: "Can Eli split 36 cards into 5 equal piles with none left over?",
      find: [7],
      hint: "Look at the ones digit of 36.",
      choices: [
        "No, because 36 doesn't end in 0 or 5.",
        "Yes, because 36 is even.",
        "Yes, because 3 + 6 = 9.",
        "No, because 36 is odd."
      ], right: 0 }
  ],

  vocabQuestions: [
    { q: "What does it mean for 36 to be <i>divisible</i> by 4?",
      choices: ["36 divides by 4 with a remainder of zero.", "36 is bigger than 4.", "36 is odd.", "4 divides by 36."], right: 0 },
    { q: "What is a <i>factor</i> of 12?",
      choices: ["A number that divides 12 evenly, such as 3.", "Any number bigger than 12.", "12 times anything.", "A number with a remainder of 1."], right: 0 },
    { q: "What is the <i>digit sum</i> of 4,527?",
      choices: ["4,527", "18", "7", "9"], right: 1 },
    { q: "What does a <i>remainder</i> of zero mean?",
      choices: ["The division was wrong.", "The numbers divided evenly.", "The answer is zero.", "The number is odd."], right: 1 }
  ],

  /* ⭐ YOUR TURN: a fresh number in the same world, every step typed and checked. */
  work: [
    { title: "Mia's Sticker Book",
      ask: "Mia's sticker book has 5,148 stickers. Test it against 2, 3, 4, 5, 6, 9 and 10, one step at a time.",
      steps: [
        { ask: "What is the ones digit?", answer: 8,
          hint: "It's the digit on the far right.",
          why: "8 is even, so 5,148 passes for 2, and since it isn't 0 or 5 it fails for 5 and 10." },
        { ask: "What is the digit sum?", answer: 18, calc: "5+1+4+8",
          hint: "Add all four digits.",
          why: "18 divides by 3 and by 9, so 5,148 passes both." },
        { ask: "Take the last two digits and divide by 4. What do you get?", answer: 12, calc: "48/4",
          hint: "The last two digits are 48.",
          why: "48 ÷ 4 = 12 with no remainder, so 5,148 passes for 4." },
        { ask: "Now list every divisor from 2, 3, 4, 5, 6, 9 and 10 that divides 5,148. Type them with commas.",
          answer: [2, 3, 4, 6, 9],
          hint: "6 passes because 5,148 passed both 2 and 3. Which two fail?",
          why: "2, 3, 4, 6 and 9 pass, and 5 and 10 fail." },
      ] },
  ],

  todo: { title: "What To Do Now", s: [
      "Eli's box of cards turned into seven quick tests, and the rest of this page is your turn to try them on numbers of your own.",
      "First work through Your Turn below the reading, typing each step, and watch the video if you want to see the tests for 7 and 8 too.",
      "Then come {c} word cards, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] }
};
