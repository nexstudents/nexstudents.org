/* maths/rounding-quotients
   Grade 7 · maths · unit 2. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 REWRITTEN 2026-10-13 (Opus) after Kolten said the lesson didn't explain it.
   Paul: "that math lesson is just literally rounding and dividing into equal parts.
   you need to round to the nearest tenth, hundredths or whole number. that's all
   you're basically trying to explain ... explain it to a 12-year-old."
   The 2026-10-05 version assumed he already knew how to round and what tenths and
   hundredths are, packed four ideas into a few lines, and never worked a problem
   step by step. This one starts from zero: what dividing does, what rounding is,
   which digit is which (dimes and pennies), then two Watch It Worked walkthroughs
   and a Your Turn. "Greatest place value" is OUT of the lesson (it was a fourth idea).

   ONE WORLD: friends splitting things evenly, money first because cents ARE
   hundredths. Our numbers: $10 ÷ 3, 17 ÷ 3, then 23 ÷ 6 and $14 ÷ 3 in Your Turn.
   None of them is on the homework sheet. */
'use strict';
module.exports = {
  id: "maths/rounding-quotients",
  slug: "rounding-quotients",
  title: "Rounding Quotients",
  unit: "Math 7 &middot; U2-L8",
  seq: { unit: 2, unitTitle: "Applications with Decimals", n: 8 },
  natural: "2026-10-13",

  /* ── /teach-plan, 2026-10-13 rewrite. Glencoe Course 2 pp75-77. ── */
  plan: {
    objective: "Divide to share something equally, then round the answer to the nearest whole number, tenth or hundredth.",
    markers: [
      "BOOK (paraphrased), Objective box: round decimal quotients to a specified place.",
      "BOOK (paraphrased), opening: friends split a cost evenly and the quotient has more decimal places than money does.",
      "BOOK (paraphrased): money quotients are usually rounded up so the bill is covered.",
    ],
    method: "DIVIDE, FIND THE PLACE YOU'RE KEEPING, LOOK AT THE DIGIT NEXT DOOR. 5 or more, the kept digit goes up one; 4 or less, it stays the same. Everything after the kept place drops off.",
    exampleOnly: [
      "Friends splitting money and snacks. WORLD: sharing things evenly with friends.",
      "Left out on purpose: rounding to the greatest place value (a fourth idea; the sheet still has one item).",
    ],
    digitize: "Reading engine. Two Watch It Worked walkthroughs (round to the cent, then round one answer three ways) and a Your Turn with typed answers.",
    unclear: "",
  },

  /* The practice half, on paper (tools/math-homework.js). subject is the FOLDER, "maths". */
  sheet: { slug: "rounding-quotients-homework", subject: "maths",
    note: "Print it and work every problem on paper. No multiple choice this time." },

  shelf: { grades: [7], subject: "Math",
    blurb: "Split something evenly and the answer often has too many digits. How to round it to the nearest whole number, tenth or hundredth.",
    contains: [
      "What dividing into equal parts means, and why the answer needs rounding",
      "The rounding rule: look at the digit next door, 5 or more goes up",
      "Tenths and hundredths, explained with dimes and pennies",
      "Two problems worked one step at a time",
      "Your Turn: round an answer three ways, then split a bill",
    ] },
  eyebrow: ["Math 7", "U2-L8", "Applications with Decimals"],
  dek: "Split $10 between three friends and the answer goes 3.3333 forever. Here's how to round it to a number you can actually use.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Your student divides to share something equally, then rounds the answer to the nearest whole number, tenth or hundredth. That's the whole lesson."
      ]},
      { h: "Key Concepts", p: [
        "Rounding means swapping a messy number for the closest easy one. The rule: find the place you're keeping, look at the digit right after it, and if that digit is 5 or more the kept digit goes up by one; if it's 4 or less, the kept digit stays.",
        "Tenths are the first digit after the decimal point and hundredths are the second. With money, tenths are dimes and hundredths are pennies, which is why rounding to the nearest cent means rounding to the hundredth."
      ]},
      { h: "Where Students Get Stuck", p: [
        "Looking at the wrong digit. To round to the tenth you look at the hundredths digit, the one right after it. Have him put a finger on the place he's keeping and look one step to the right.",
        "Not knowing which digit is the tenth and which is the hundredth. The dimes and pennies picture helps: $3.47 is three dollars, four dimes and seven pennies."
      ]},
      { h: "Teaching Suggestion", p: [
        "Use real coins if you have them. Split $1 among three people with dimes and pennies, see that it can't come out even, and then decide together who gets the extra penny."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Splitting Things Evenly", s: [
      "Say you and two friends find $10 and decide to split it evenly, so everybody gets the same amount.",
      "Splitting something into equal parts is what dividing does, so you'd work out 10 divided by 3.",
      "The answer to a division problem has a name, the {{quotient}}, which is just a fancy word for how much each person gets.",
      "When you type 10 ÷ 3 into a calculator, it shows 3.3333333, and those 3s keep going for as long as the screen lets them.",
      "Nobody can hand you three dollars and a never-ending string of threes, so you need a number you can actually use."
    ]},

    { title: "What Rounding Means", s: [
      "When you {{round}} a number, you swap it for the closest easy number, the way you'd say a game ended at about 9 o'clock when it really ended at 8:57.",
      "",
      "[ex] 8:57 is really close to 9:00, so you say about 9.",
      "",
      "Rounding works the same way with any number, because you pick the easy number it sits closest to.",
      "The number 3.7 sits between 3 and 4, but it's much closer to 4, so 3.7 rounded to the nearest whole number is 4.",
      "The number 3.2 is between 3 and 4 too, and it's closer to 3, so it rounds down to 3."
    ]},

    { title: "The Rule: Look Next Door", s: [
      "You don't have to picture a number line every time, because there's a simple rule that always gives the same answer.",
      "First find the digit for the place you're keeping, and then look at the very next digit to its right, the one next door.",
      "If that next-door digit is 5 or more, the digit you're keeping goes up by one.",
      "If the next-door digit is 4 or less, the digit you're keeping stays exactly the same.",
      "Either way, every digit after the one you kept just drops off.",
      "",
      "[walk] Round 3.7 to the nearest whole number.",
      "[step] The place you're keeping is the ones place, so that's the 3. || 3.7  →  keep the 3",
      "[step] The digit next door is the 7, right after the dot. || 3.7  →  next door is 7",
      "[step] 7 is 5 or more, so the 3 goes up by one, and the 7 drops off. || 3 + 1 = 4",
      "",
      "So 3.7 rounds to 4, the same answer the number line gave you."
    ]},

    { title: "Tenths and Hundredths Are Dimes and Pennies", s: [
      "The digits after the dot, which is called the decimal point, each have a name, and money makes them easy to remember.",
      "The first digit after the dot is the tenths place, and with money it counts dimes, since a dime is one tenth of a dollar.",
      "The second digit after the dot is the {{hundredths}} place, and it counts pennies, since a penny is one hundredth of a dollar.",
      "",
      "[ex] $3.47 means 3 dollars, 4 dimes and 7 pennies.",
      "",
      "So the 4 in $3.47 is in the {{tenths}} place and the 7 is in the hundredths place.",
      "That's also why rounding money to the nearest cent means rounding to the hundredth, because cents are hundredths."
    ]},

    { title: "Back to the $10", s: [
      "Now you have everything you need to split the $10, so here it is, one step at a time.",
      "",
      "[walk] Split $10 among 3 friends, rounded to the nearest cent.",
      "[step] Divide to split it evenly. || 10 ÷ 3 = 3.3333…",
      "[step] Cents are hundredths, the second digit after the dot, so you're keeping that 3. || 3.3[3]33…  →  keep the hundredths 3",
      "[step] Look next door, at the third digit after the dot, which is another 3. || 3.33[3]3…  →  next door is 3",
      "[step] 3 is 4 or less, so the kept digit stays the same and everything after it drops off. || $3.33 each",
      "",
      "Each friend gets $3.33, and there's one penny left over, because three times $3.33 is $9.99.",
      "When friends split a bill instead of found money, they usually round up to $3.34 so the bill is fully paid, since nobody wants to be a penny short at the register."
    ]},

    { title: "One Answer, Three Ways", s: [
      "Sometimes you'll be asked to round to the nearest whole number, sometimes to the nearest tenth and sometimes to the nearest hundredth, and it's the same rule every time.",
      "The only thing that changes is which digit you keep and which digit is next door.",
      "",
      "[walk] Three friends share 17 cookies, so round 17 ÷ 3 three ways.",
      "[step] Divide first. || 17 ÷ 3 = 5.6666…",
      "[step] Nearest whole number: keep the 5, and next door is a 6, which is 5 or more, so the 5 goes up. || 5.6666…  →  6",
      "[step] Nearest tenth: keep the first 6 after the dot, and next door is another 6, so it goes up to 7. || 5.6666…  →  5.7",
      "[step] Nearest hundredth: keep the second 6 after the dot, and next door is a 6 again, so it goes up to 7. || 5.6666…  →  5.67",
      "",
      "The cookies don't really get cut into 5.67 pieces, but the rounding shows you each friend gets a little more than five and a half."
    ]},

    { title: "The Mistake to Watch For", s: [
      "The most common mistake is looking at the wrong digit, usually the one you're keeping instead of the one next door.",
      "Put your finger on the place you're keeping, slide it one step to the right, and that's the only digit that decides.",
      "",
      "[ex] To round 2.41 to the nearest tenth, keep the 4 and look at the 1 next door, so it's 2.4.",
      "",
      "A second mistake is stopping the division too early, because you can't look next door if you haven't worked out that digit yet.",
      "So keep dividing until you have at least one digit past the place you're rounding to."
    ]},
  ],

  words: [
    ["Quotient", "The answer to a division problem, like how much each person gets when you split something.", 2],
    ["Round", "To swap a number for the closest easy number, using the digit next door to decide.", 5],
    ["Tenths", "The first place after the decimal point. With money, it counts dimes.", 24],
    ["Hundredths", "The second place after the decimal point. With money, it counts pennies.", 22],
  ],

  findsAt: 47,

  questions: [
    { tag: "Dividing", q: "You split $10 evenly among 3 friends. What kind of math does that?",
      find: [1], hint: "Read Splitting Things Evenly.",
      choices: ["Adding", "Dividing", "Multiplying", "Subtracting"], right: 1,
      why: "Splitting into equal parts is dividing: 10 ÷ 3." },

    { tag: "Rounding", q: "What does rounding a number mean?",
      find: [5], hint: "Read What Rounding Means.",
      choices: ["Making it a round shape", "Adding one to it", "Swapping it for the closest easy number", "Cutting off the last digit no matter what"], right: 2,
      why: "Rounding picks the easy number it's closest to." },

    { tag: "The Rule", q: "When you round, which digit decides whether you go up or stay the same?",
      find: [11], hint: "Read The Rule: Look Next Door.",
      choices: ["The first digit of the number", "The digit you're keeping", "The last digit of the number", "The digit right next door to the one you're keeping"], right: 3,
      why: "Only the digit right after the place you're keeping decides." },

    { tag: "The Rule", q: "Round 6.8 to the nearest whole number.",
      find: [12], hint: "Next door to the 6 is the 8. Is 8 five or more?",
      choices: ["7", "6", "6.8", "8"], right: 0,
      why: "8 is 5 or more, so the 6 goes up to 7." },

    { tag: "Places", q: "In $5.29, which digit is in the hundredths place?",
      find: [22], hint: "Hundredths is the second digit after the dot, the pennies.",
      choices: ["5", "2", "9", "None of them"], right: 2,
      why: "The 9 is the second digit after the dot, so it's 9 pennies." },

    { tag: "The $10", q: "Why does $10 ÷ 3 round to $3.33 and not $3.34?",
      find: [31], hint: "Look at the digit next door to the hundredths.",
      choices: ["The digit next door is a 3, which is 4 or less, so it stays.", "Because you always round down with money.", "Because $3.34 is too much money.", "Because the tenths digit is 3."], right: 0,
      why: "Next door to the hundredths is a 3, so the hundredths stays 3." },

    { tag: "Three Ways", q: "17 ÷ 3 = 5.6666… What is it rounded to the nearest tenth?",
      find: [39], hint: "Keep the first digit after the dot and look next door.",
      choices: ["5.6", "6", "5.67", "5.7"], right: 3,
      why: "Next door to the first 6 is another 6, so it goes up to 7: 5.7." },

    { tag: "The Mistake", q: "To round 2.41 to the nearest tenth, which digit do you look at?",
      find: [44], hint: "Keep the tenths, then slide one step right.",
      choices: ["The 2", "The 1", "The 4", "You don't need to look at any"], right: 1,
      why: "You keep the 4 and look at the 1 next door, so it's 2.4." },
  ],

  vocabQuestions: [
    { q: "What is a <i>quotient</i>?", choices: ["The number you divide by", "The answer to a division problem", "A rounded number", "A kind of decimal point"], right: 1 },
    { q: "What does it mean to <i>round</i> a number?", choices: ["Add a zero to the end", "Swap it for the closest easy number", "Make it bigger every time", "Divide it by ten"], right: 1 },
    { q: "Which place is <i>tenths</i>?", choices: ["The second digit after the dot", "The digit before the dot", "The first digit after the dot", "The last digit of any number"], right: 2 },
    { q: "With money, what do <i>hundredths</i> count?", choices: ["Pennies", "Dimes", "Dollars", "Quarters"], right: 0 },
  ],

  work: [
    { title: "23 Cookies, 6 Friends",
      ask: "Six friends share 23 cookies, and 23 ÷ 6 = 3.8333… Round it three ways, one step at a time.",
      steps: [
        { ask: "Round 3.8333… to the nearest whole number.", answer: 4,
          hint: "Keep the 3. Next door is the 8. Is 8 five or more?",
          why: "8 is 5 or more, so the 3 goes up to 4." },
        { ask: "Now round 3.8333… to the nearest tenth.", answer: 3.8,
          hint: "Keep the 8, the first digit after the dot. Next door is a 3.",
          why: "3 is 4 or less, so the 8 stays: 3.8." },
        { ask: "Now round it to the nearest hundredth.", answer: 3.83,
          hint: "Keep the 3 that's second after the dot. Next door is another 3.",
          why: "3 is 4 or less, so it stays: 3.83." },
      ] },
    { title: "A $14 Bill, 3 Friends",
      ask: "Three friends split a $14 bill. 14 ÷ 3 = 4.6666… Round to the nearest cent, then check it.",
      steps: [
        { ask: "Cents are hundredths. What is 4.6666… rounded to the nearest hundredth?", answer: 4.67,
          hint: "Keep the second digit after the dot, a 6. Next door is another 6.",
          why: "6 is 5 or more, so the kept 6 goes up to 7: $4.67 each." },
        { ask: "Check it: what is 3 × 4.67?", answer: 14.01, calc: "3*4.67",
          hint: "Multiply 4.67 by 3.",
          why: "$14.01, so three friends paying $4.67 cover the $14 bill, with a penny extra." },
      ] },
  ],

  todo: { title: "What To Do Now", s: [
      "Splitting things evenly gave you numbers with too many digits, and now you know how to round them.",
      "First work through Your Turn below the reading, typing each answer.",
      "Then come {c} word cards, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "Whenever you round, put your finger on the place you're keeping and look one step to the right.",
      "Last, open the Homework Sheet with the button at the bottom of the page, and work every problem on paper."
  ] },
};
