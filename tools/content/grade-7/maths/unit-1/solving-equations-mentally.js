/* maths/solving-equations-mentally
   Grade 7 · maths · unit 1. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, MINE, 2026-09-24. Written on Opus from Glencoe Course 2
   pp38-39, read on the borrowed copy the same evening. Not Paul's rewrite; he
   has not seen it. /natural has run over it once.

   READING SHAPE, same call as U1-L7 to U1-L9.

   ⚠️ THE WORLD IS TAMMY'S, CARRIED OVER FROM U1-L8 ON PURPOSE. U1-L8 took a
   rule and a number and found the answer. This lesson has the answer and
   hunts for the number, which is the same trip backwards, so the same
   babysitter makes that visible. The book's toothbrush story was left out:
   its dates (1938, and 23 years later) could not be confirmed, and a "true
   detail" that is not true is worse than none.

   ⚠️ NO SCRIPTURE. Paul's call, in the review queue. */
'use strict';
module.exports = {
  id: "maths/solving-equations-mentally",
  slug: "solving-equations-mentally",
  title: "Solving Equations Mentally",
  unit: "Math 7 &middot; U1-L10",
  seq: { unit: 1, unitTitle: "Tools for Problem Solving", n: 10 },
  natural: "2026-09-24",

  /* ── /teach-plan, 2026-09-24. Glencoe Course 2 pp38-39. ── */
  plan: {
    objective: "Find the number that makes an equation true, by guessing and checking or by a fact you already know, and check it.",
    markers: [
      "QUOTED, Objective box: 'Solve equations using mental math.'",
      "QUOTED, Words to Learn: equation, solve, solution",
      "QUOTED: 'You cannot determine whether this sentence is true or false until you fill in the blank.'",
      "QUOTED: 'An equation is a sentence in mathematics that contains an equal sign.'",
      "QUOTED: 'You solve the equation when you replace the variable with a number that makes the equation true. Any number that makes the equation true is called a solution.'",
      "QUOTED: 'Start by making a guess. Replace y in the equation with your guess and see if the resulting equation is true. Do this until you find the value of y that makes the equation true.'",
      "QUOTED: 'Some equations can be solved mentally by using basic facts or arithmetic skills you already know well.'",
    ],
    method: "TRUE OR FALSE FIRST. The book opens on a sentence with a blank that is neither true nor false until something goes in the blank, then shows an equation is the same kind of sentence. Solving is trying numbers in the blank until the sentence turns true: guess, check, adjust, with each wrong guess pointing the next one up or down. Last, the shortcut: a basic fact you already know solves some equations with no guessing at all.",
    exampleOnly: [
      "Tammy, the $14 envelope, the jar, the week at camp and the $72 split. WORLD: one babysitter's money, the same world as U1-L8.",
      "Book numbers kept: 12m = 120 (as 12r = 120) and 72 ÷ 9. Book's 9 + t = 18 is re-set as j + 9 = 21 so it stays in the world and does not repeat another answer.",
      "Left out on purpose: the Atlantic/Pacific blank (replaced by the same idea in math), the toothbrush dates (see header).",
    ],
    digitize: "Reading engine. Every guess is its own [ex] line with its verdict (too small, too big, true), because the adjusting IS the method. ⚠️ No equation-solving generator yet.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Math",
    blurb: "Tammy has $14 in an envelope and no idea how many hours it was for. An equation, a few good guesses, and one fact she already knew.",
    contains: [
      "An equation as a sentence that is true or false",
      "Why a letter makes it neither, until a number goes in",
      "Guess, check and adjust, with each miss pointing the way",
      "Equations you can solve from a fact you already know",
    ] },
  eyebrow: ["Math 7", "U1-L10", "Tools for Problem Solving"],
  dek: "In Variables and Expressions you had the rule and the number, and you found the answer. This time you have the answer, and the number is missing.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "By the end of this lesson your student should be able to look at an equation like 2n = 14, find the number that makes it true, and check it by putting that number back in.",
        "It is the reverse of U1-L8. There the student had 2n and a value for n and worked out the answer. Here the answer is known and n is the missing piece."
      ]},
      { h: "Start With True or False", p: [
        "Before any letters, write 2 x 5 = 14 and ask whether it's true. Then 2 x 7 = 14. The student should hear an equation as a claim that can be right or wrong.",
        "Then write 2n = 14 and ask the same question. The honest answer is that you can't tell yet, and that answer is the doorway into the lesson."
      ]},
      { h: "Where Students Get Stuck", p: [
        "🚨 Students often guess once, see it's wrong, and guess again at random. Push them to read the wrong guess: was the result too big or too small? That tells them which way to move.",
        "Some students stop at the number and never check it. The check is the step that makes it an answer rather than a guess, so make it a habit: put the number back in and see if the sentence is true."
      ]},
      { h: "Teaching Suggestion", p: [
        "Keep a small table as you guess: the guess, what it gives, and whether it's too big, too small or right. Writing the verdict down is what turns guessing into a method.",
        "When a fact solves it outright, like 12r = 120, ask the student what times table fact they used. Naming the fact is the mental math."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Fourteen Dollars and No Note", s: [
      "On Sunday morning Tammy finds an envelope on her desk with $14 in it, from Saturday's babysitting job, and she realizes she never wrote down how long she was there.",
      "She knows her rule, because she worked it out in Variables and Expressions: $2 for every hour, or 2n.",
      "She also knows the answer, the $14 in her hand, so she can write the whole thing down.",
      "",
      "[ex] 2n = 14",
      "",
      "What she doesn't know is n, and that's backwards from everything she did before.",
      "So how do you find a number when the only thing you have is what it turned into?"
    ]},

    { title: "A Sentence That Can Be Wrong", s: [
      "Start with something simpler than a letter, two math sentences where only one of them is telling the truth.",
      "",
      "[ex] 2 x 5 = 14   (false)",
      "[ex] 2 x 7 = 14   (true)",
      "",
      "A math sentence with an equals sign in it is called an equation, and like any sentence, it can be true or false.",
      "Now put the letter back, and something strange happens.",
      "",
      "[ex] 2n = 14",
      "",
      "This one is neither true nor false yet, because you can't judge it until you know what n is.",
      "To solve an equation is to find the number that makes it true, and that number is called the solution.",
      "You already saw it a moment ago; it's sitting in the true sentence above."
    ]},

    { title: "Guess, Check, Adjust", s: [
      "Most of the time the answer won't be sitting in front of you, and then the honest method is to guess and check.",
      "The trick is that a wrong guess still tells you something, as long as you look at which way it missed.",
      "",
      "[ex] Try n = 5:   2 x 5 = 10   (too small)",
      "[ex] Try n = 8:   2 x 8 = 16   (too big)",
      "[ex] Try n = 7:   2 x 7 = 14   (true)",
      "",
      "Ten is less than 14, so five hours wasn't enough and the next guess had to be bigger.",
      "Sixteen went past it, which put the answer somewhere between 5 and 8.",
      "Seven landed exactly, and it only took three tries because each miss pointed at the next guess.",
      "Guessing at random could take all morning, but guessing and then reading the miss is a method."
    ]},

    { title: "Some You Just Know", s: [
      "Not every equation needs guessing, because some of them are a fact you learned years ago wearing a disguise.",
      "Tammy keeps her savings in a jar, and after she drops in $9 from Friday the jar holds $21.",
      "",
      "[ex] j + 9 = 21",
      "",
      "What plus 9 is 21 is really asking what 21 take away 9 is, and you know that one: j is 12.",
      "Over the summer she works a 12-hour week as a camp helper and earns $120, but nobody ever told her the hourly rate.",
      "",
      "[ex] 12r = 120",
      "",
      "You know 12 x 10 = 120, so r is 10, and she was making $10 an hour.",
      "At the end of the summer she and eight other helpers split a $72 bonus evenly.",
      "",
      "[ex] b = 72 ÷ 9",
      "",
      "Nine times eight is seventy-two, so b is 8, and each of them gets $8.",
      "None of those needed a single guess, because the fact did the work."
    ]},

    { title: "Put It Back and Check", s: [
      "Go back to the envelope, because Tammy has decided she babysat for 7 hours, and before she believes it she puts the 7 back where the n was.",
      "",
      "[ex] 2n = 14",
      "[ex] 2 x 7 = 14   (replace n with 7)",
      "[ex] 14 = 14   (true)",
      "",
      "The sentence is true, so 7 is the solution, and that check is the same move you made in Variables and Expressions when you evaluated 2n.",
      "That's why the two lessons belong together: evaluating goes from the number to the answer, and solving goes from the answer back to the number."
    ]}
  ],

  words: [
    ["Equation", "A math sentence with an equals sign in it. It can be true or false.", 9],
    ["Solve", "To find the number that makes an equation true.", 13],
    ["Solution", "The number that makes an equation true.", 13],
    ["Guess and Check", "Trying a number, seeing whether it is too big or too small, and using that to choose the next try.", [15, 16]]
  ],

  findsAt: 41,
  questions: [
    { tag: "What It Is", q: "What is an equation?",
      find: [9],
      hint: "Look for the sign every equation has to have.",
      choices: [
        "Any math problem with a letter in it.",
        "A math sentence with an equals sign in it.",
        "A list of numbers.",
        "The answer to a problem."
      ], right: 1 },

    { tag: "True or False", q: "Is 2 x 5 = 14 true or false?",
      find: [7, 9],
      hint: "Work out the left side and compare.",
      choices: [
        "True.",
        "Neither, until a letter is replaced.",
        "False.",
        "Both."
      ], right: 2 },

    { tag: "True or False", q: "Why is 2n = 14 neither true nor false?",
      find: [11, 12],
      hint: "What would you need to know before you could judge it?",
      choices: [
        "Because equations are never true.",
        "Because you can't judge it until you know what n is.",
        "Because 14 is an even number.",
        "Because it has no plus sign."
      ], right: 1 },

    { tag: "Solve It", q: "What is the solution of 2n = 14?",
      find: [13, 14, 19, 39],
      hint: "Which number of hours gave Tammy exactly $14?",
      choices: [
        "28",
        "12",
        "16",
        "7"
      ], right: 3 },

    { tag: "Guess, Check, Adjust", q: "Tammy guessed n = 8 and got 16, which is too big. What should she do next?",
      find: [16, 18, 21],
      hint: "A miss tells you which way to move.",
      choices: [
        "Guess a smaller number.",
        "Guess a bigger number.",
        "Start again at 1.",
        "Decide the equation has no solution."
      ], right: 0 },

    { tag: "Solve It", q: "Solve j + 9 = 21.",
      find: [26, 27],
      hint: "What plus 9 makes 21?",
      choices: [
        "30",
        "12",
        "9",
        "21"
      ], right: 1 },

    { tag: "Solve It", q: "Solve 12r = 120.",
      find: [29, 30],
      hint: "Which times table fact gives 120?",
      choices: [
        "100",
        "12",
        "10",
        "108"
      ], right: 2 },

    { tag: "Check It", q: "How do you check a solution?",
      find: [35, 36, 37, 38, 39],
      hint: "Look at what Tammy did with the 7 before she believed it.",
      choices: [
        "Ask someone else.",
        "Solve it a second time the same way.",
        "Make sure the number is small.",
        "Put the number back in and see if the sentence is true."
      ], right: 3 }
  ],

  vocabQuestions: [
    { q: "Which of these is an <i>equation</i>?",
      choices: [
        "2n",
        "2n = 14",
        "14",
        "n + n"
      ], right: 1 },
    { q: "What does it mean to <i>solve</i> an equation?",
      choices: [
        "Find the number that makes it true.",
        "Write it again with a different letter.",
        "Add up all the numbers in it.",
        "Decide whether you like it."
      ], right: 0 },
    { q: "What is the <i>solution</i> of an equation?",
      choices: [
        "The equals sign.",
        "The biggest number in it.",
        "The number that makes it true.",
        "The letter in it."
      ], right: 2 },
    { q: "When you <i>guess and check</i>, what should a wrong guess tell you?",
      choices: [
        "Nothing, so guess again at random.",
        "That the equation is broken.",
        "That you should give up.",
        "Whether the next guess should be bigger or smaller."
      ], right: 3 }
  ],

  todo: { title: "What To Do Now", s: [
      "Tammy had the answer and needed the number, which is Variables and Expressions run backwards, and three guesses got her there.",
      "{c} word cards sit at the top of the page, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "Some ask whether a sentence is true or false, and some ask you to solve an equation and find the missing number.",
      "When you solve one, put your number back in before you pick an answer, because the check is what turns a guess into a solution.",
      "If the guessing questions trip you up, read Guess, Check, Adjust again and watch which way each miss pointed.",
      "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] }
};
