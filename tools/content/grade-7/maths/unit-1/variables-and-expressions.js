/* maths/variables-and-expressions
   Grade 7 · maths · unit 1. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, MINE, 2026-09-24. Written on Opus from Glencoe Course 2
   pp28-31, read on the borrowed copy the same evening. Not Paul's rewrite; he
   has not seen it. /natural has run over it once.

   READING SHAPE, same call as U1-L7: the skill is knowing what a letter stands
   for and swapping a number in for it. The drilling half (evaluate twenty
   expressions) is still the missing expressions generator → ROADMAP 37.

   ⚠️ NO SCRIPTURE. The scripture choice is Paul's, so `ground` has no Biblical
   Connection section yet. It is in the review queue, not forgotten. */
'use strict';
module.exports = {
  id: "maths/variables-and-expressions",
  slug: "variables-and-expressions",
  title: "Variables and Expressions",
  unit: "Math 7 &middot; U1-L8",
  seq: { unit: 1, unitTitle: "Tools for Problem Solving", n: 8 },
  natural: "2026-09-24",

  /* ── /teach-plan, 2026-09-24. Glencoe Course 2 pp28-31. ── */
  plan: {
    objective: "Replace each variable in an expression with its number, then work out the value.",
    markers: [
      "QUOTED, Objective box: 'Evaluate numerical and simple algebraic expressions.'",
      "QUOTED, Words to Learn: variable, algebra, algebraic expression, evaluate",
      "QUOTED: 'notice that the amount earned per hour is constant, $2, but the number of hours varies. You can use a placeholder, or variable, to represent the number of hours spent babysitting.'",
      "QUOTED: 'You can evaluate an algebraic expression by replacing the variable with a number and then finding the value of the numerical expression.'",
      "QUOTED, the notation box: '3a means 3 x a, or 3 · a, or (3)(a)' · 'rs means r x s' · '4cd means 4 x c x d' · 'm/2 means m ÷ 2'",
      "QUOTED, Checking for Understanding: 'Read and study the lesson to answer each question.' then 'Tell, in your own words, the difference between numbers and variables.'",
    ],
    method: "A TABLE FIRST, THE LETTER SECOND. The book lays out hours against pay, lets the student see that one column never changes and the other always does, and only then puts a letter where the changing number goes. The letter arrives as the answer to 'how do you write this for a night that hasn't happened yet?'. Evaluating is then the reverse trip: hand the letter its number, then fall back on the order of operations from U1-L7. Cups and counters model 2n as two cups each holding n.",
    exampleOnly: [
      "Tammy, babysitting, $2 an hour, the 6-hour night, the dog-walking job and the split with her brother. WORLD: one babysitter's earnings, the whole way through. The book's own example, kept.",
      "The book's 5a + 3b with a = 7 and b = 2 is re-set as 2h + 3w with h = 7 and w = 4, so it stays in Tammy's world. Same shape: two variables, multiply, then add.",
      "Left out on purpose, as other worlds: the blood-pressure formula (When Am I Ever Going to Use This), the cricket chirps and Mach number exercises, the calculator keystrokes.",
    ],
    digitize: "Reading engine. Every table row and worked line is an [ex] block. The substitution step is shown with its reason beside it ('replace n with 6'), because that line IS the method. ⚠️ The drilling half needs the expressions generator (ROADMAP 37). Flagged, not faked.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Math",
    blurb: "A babysitter who can't quote a price until the night is over, and the letter that lets her write one anyway.",
    contains: [
      "A table of hours and pay, and the one column that never changes",
      "Why a letter can stand in for a number you don't know yet",
      "Evaluating an expression by handing the letter its number",
      "The short ways algebra writes multiply and divide",
    ] },
  eyebrow: ["Math 7", "U1-L8", "Tools for Problem Solving"],
  dek: "How do you write down an answer when you don't know the number yet? You leave it a place to go.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "By the end of this lesson your student should be able to look at an expression like 2h + 3w, replace each letter with the number it stands for, and work out the value.",
        "The bigger idea underneath is what a variable is for. It holds the place of a number that changes, or that nobody knows yet, so a rule can be written down before the number exists."
      ]},
      { h: "Start With the Table", p: [
        "Don't open with the word variable. Open with the babysitting table and ask which column never changes and which one changes on every row.",
        "Once the student says the hours change, ask how Tammy could write one rule for a night that hasn't happened yet. Let the letter be the answer to that question, not a definition handed over first."
      ]},
      { h: "Where Students Get Stuck", p: [
        "🚨 The biggest trap is reading 2n with n = 6 as twenty-six. Two things written side by side in algebra mean multiply, so 2n is 2 times 6, which is 12. Say it out loud as '2 times n' until it sticks.",
        "The second trap is forgetting the order of operations once the letters are gone. After replacing the letters in 2h + 3w, the problem is an ordinary math sentence again, and multiplication still comes before addition.",
        "Some students also think a letter is a code for one fixed number, the way a = 1 and b = 2 in a puzzle. It isn't. The same n can be 6 on Friday and 3 on Saturday."
      ]},
      { h: "Teaching Suggestion", p: [
        "The book models 2n with cups and counters. Put two cups on the table and tell the student each cup is n. Drop six counters into each one, count them, and you have 2n when n is 6.",
        "Then empty the cups and put three counters in each. Same two cups, same expression, a different number in the place. That is the whole idea of a variable, and it's worth doing with the real cups."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "A Price She Can't Give Yet", s: [
      "Tammy charges $2 an hour to babysit the two kids next door, and every parent who calls her asks the same thing: how much is this going to cost?",
      "Her honest answer is that it depends, because one hour costs $2 and two hours cost $4, but a long Saturday afternoon costs a lot more, and she won't know how long it was until the parents pull into the driveway.",
      "So she sits down and writes it out as a table.",
      "",
      "[ex] 1 hour: $2 x 1 = $2",
      "[ex] 2 hours: $2 x 2 = $4",
      "[ex] 3 hours: $2 x 3 = $6",
      "[ex] 4 hours: $2 x 4 = $8",
      "",
      "Look down the table and one part never moves, because every row has the same $2 in it.",
      "The other part changes on every line, since it's the number of hours, and that's the one number she can't know ahead of time.",
      "So how do you write one rule for a night that hasn't happened yet?"
    ]},

    { title: "Give the Unknown a Letter", s: [
      "You leave a place for the part that changes, and you put a letter in it.",
      "Call it n, for the number of hours, whatever that turns out to be.",
      "A letter used like this is called a variable, because the number it holds can vary from one night to the next.",
      "",
      "[ex] $2 x n",
      "",
      "When a number sits right beside a letter, mathematicians leave out the times sign, so $2 x n is written 2n and read as 2 times n.",
      "That makes 2n an algebraic expression, which means it has at least one variable, at least one number and at least one operation.",
      "The part of math that works with expressions like this is called algebra, and you've just written your first line of it."
    ]},

    { title: "Hand the Letter Its Number", s: [
      "On Friday Tammy babysits for 6 hours, and the rule already knows what to do with that; all you have to do is hand it the number.",
      "",
      "[ex] 2n",
      "[ex] 2 x 6   (replace n with 6)",
      "[ex] = 12",
      "",
      "Tammy earns $12, and swapping each letter for its number and working out the answer like that is called evaluating the expression.",
      "It's the same word you used with the order of operations, and it means the same thing here: keep working until only one value is left.",
      "",
      "You can check that answer without any algebra at all by putting two cups on the table, calling each one n, and dropping six counters into each cup, because tonight n is 6.",
      "Count them up and you get 12, exactly what 2n gave you.",
      "Now empty the cups and put three counters in each, and the same two cups say 6, which is the whole point of a variable: the place stays, and the number in it changes."
    ]},

    { title: "Two Things Changing at Once", s: [
      "Then a neighbor asks Tammy to walk his dog as well, for $3 a walk, and now two things change from week to week: the hours she babysits and the number of walks.",
      "Two different things need two different letters, so h stands for the hours and w for the walks.",
      "In one week she babysits for 7 hours and walks the dog 4 times.",
      "",
      "[ex] 2h + 3w",
      "[ex] 2(7) + 3(4)   (replace h with 7 and w with 4)",
      "[ex] 14 + 12   (multiply first)",
      "[ex] = 26   (then add)",
      "",
      "She made $26 that week, and notice that the order of operations didn't go anywhere.",
      "Once the letters are replaced you're back to an ordinary math sentence, where multiplication still comes before addition.",
      "The 2(7) is new, though, and it's worth a closer look."
    ]},

    { title: "Where Did the Times Sign Go?", s: [
      "When numbers and letters sit side by side, mathematicians have agreed on a few short ways to write multiplication, and every one of them leaves the times sign out.",
      "The reason is the letter x, because once x can be a variable, a times sign that looks exactly like it would make a mess of every expression.",
      "",
      "[ex] 3a means 3 x a",
      "[ex] (3)(a) also means 3 x a",
      "[ex] rs means r x s",
      "[ex] 4cd means 4 x c x d",
      "",
      "Division gets the same treatment, with a fraction bar doing the job of the division sign.",
      "Say Tammy splits Friday's money with her little brother for helping with bath time; the rule is m/2, and with m at 12 each of them walks away with $6.",
      "",
      "[ex] m/2 means m ÷ 2"
    ]},

    { title: "The Answer to Every Night at Once", s: [
      "Go back to the question the parents kept asking: how much is this going to cost?",
      "Tammy couldn't give them a number, because on the phone that number didn't exist yet, but she could give them 2n, which is the answer to every night at once.",
      "That's the job a variable does: it holds the place of a number you don't know yet, so you can write the rule now and fill in the number later.",
      "Every time you evaluate an expression you're doing that second half, taking the rule and handing it the number."
    ]}
  ],

  words: [
    ["Variable", "A letter that holds the place of a number that can change or is not known yet.", 12],
    ["Algebraic Expression", "Numbers, variables and operations written together, like 2n or 2h + 3w.", 15],
    ["Algebra", "The part of math that works with expressions that have variables.", 16],
    ["Evaluate", "To replace each variable with its number and work out the value.", 21]
  ],

  findsAt: 49,
  questions: [
    { tag: "Why a Letter", q: "Why can't Tammy tell the parents one price before she babysits?",
      find: [1, 7, 8],
      hint: "Look at which part of her table changes on every line.",
      choices: [
        "She charges a different amount every hour.",
        "The number of hours isn't known until the night is over.",
        "She forgets what she charges.",
        "The parents pay whatever they want."
      ], right: 1 },

    { tag: "What It Stands For", q: "In 2n, what does n stand for?",
      find: [11],
      hint: "It's the part of the table that kept changing.",
      choices: [
        "The $2 she charges.",
        "The number of kids.",
        "The number of hours she babysits.",
        "The number of dog walks."
      ], right: 2 },

    { tag: "Reading It", q: "What does 2n mean?",
      find: [14],
      hint: "A number sitting right beside a letter hides an operation.",
      choices: [
        "2 plus n.",
        "2 times n.",
        "The number twenty-something.",
        "n divided by 2."
      ], right: 1 },

    { tag: "Evaluate It", q: "Evaluate 2n if n = 6.",
      find: [17, 19, 20, 21],
      hint: "Hand the letter its number, then multiply.",
      choices: [
        "26",
        "8",
        "12",
        "3"
      ], right: 2 },

    { tag: "Evaluate It", q: "Evaluate 2h + 3w if h = 7 and w = 4.",
      find: [28, 30, 31, 32],
      hint: "Replace both letters, then remember the order of operations.",
      choices: [
        "55",
        "26",
        "16",
        "20"
      ], right: 1 },

    { tag: "The Short Ways", q: "What does 4cd mean?",
      find: [41],
      hint: "Everything written side by side is being multiplied.",
      choices: [
        "4 + c + d",
        "4 x c x d",
        "4 x c + d",
        "The number 4 followed by two letters."
      ], right: 1 },

    { tag: "The Short Ways", q: "Why does algebra usually leave the times sign out?",
      find: [37],
      hint: "Think about which letter the times sign looks like.",
      choices: [
        "To save ink.",
        "Because multiplying is optional.",
        "Because it looks like the letter x, which can be a variable.",
        "Because letters can't be multiplied."
      ], right: 2 },

    { tag: "Evaluate It", q: "Evaluate m/2 if m = 12.",
      find: [43, 44],
      hint: "The fraction bar does the job of a division sign.",
      choices: [
        "24",
        "10",
        "14",
        "6"
      ], right: 3 }
  ],

  vocabQuestions: [
    { q: "What is a <i>variable</i>?",
      choices: [
        "A number that never changes.",
        "A letter that holds the place of a number that can change or is not known yet.",
        "A kind of times sign.",
        "The answer to a math problem."
      ], right: 1 },
    { q: "Which of these is an <i>algebraic expression</i>?",
      choices: [
        "12",
        "2h + 3w",
        "Tammy",
        "$2 an hour"
      ], right: 1 },
    { q: "What does it mean to <i>evaluate</i> 2n when n = 6?",
      choices: [
        "Replace n with 6 and work out the value.",
        "Guess what n might be.",
        "Write the expression again with a different letter.",
        "Put the 2 and the 6 side by side to make 26."
      ], right: 0 },
    { q: "What is <i>algebra</i>?",
      choices: [
        "A kind of calculator.",
        "The part of math that works with expressions that have variables.",
        "Another word for division.",
        "A list of times tables."
      ], right: 1 }
  ],

  todo: { title: "What To Do Now", s: [
      "Tammy couldn't quote a price until the night was over, and a letter let her write the rule down anyway.",
      "{c} word cards sit at the top of the page, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "Some of them ask what a letter stands for, and some ask you to hand the letter its number and work the problem out.",
      "When you evaluate one, write the line where each letter is replaced before you do any arithmetic, because that's the step people skip.",
      "The one people get wrong is 2n with n at 6, which is 12 and not 26.",
      "If that one trips you, read Hand the Letter Its Number again.",
      "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] }
};
