/* coding/if-and-else
   Game Coding (elective, internal level 7) · Unit 1 (Your First Game Window), lesson 6.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-10-13. Written on Sonnet to the /teach-plan block in
   `plan` below and given the /natural pass. Paul has not read it. There is no book for
   this course. Sources: the videos listed in the Suggested Videos section (Arkade Games,
   John Dee, Mina Pecheux), read for the teaching ORDER only, nothing copied.

   Revised 2026-10-13 from YouTube transcripts (ideas only, nothing copied) + /natural.

   🚨 CODE LIVES ONLY IN [walk]/[step] WORK LINES (after the double bar). Sentences and
   questions name comparisons in plain words, such as "greater than". */
'use strict';
module.exports = {
  id: "coding/if-and-else",
  slug: "if-and-else",
  title: "If and Else: Red Past 100",
  unit: "Game Coding · U1-L6",
  seq: { unit: 1, unitTitle: "Your First Game Window", n: 6 },

  plan: {
    objective: "Use if and else with a comparison to change what the game does: the number turns red above 100, and the minus button can't go below zero.",
    markers: [
      "VIDEO (paraphrased), Arkade Games: an if statement asks a yes-or-no question and runs its braces only when the answer is yes, and else runs when it's no.",
      "VIDEO (paraphrased), John Dee: a single equals sign puts a value in a box, while two equals signs ask whether two things are the same.",
      "VIDEO (paraphrased), Mina Pecheux: test an edge by temporarily setting the starting number close to it.",
    ],
    method: "ASK A YES-OR-NO QUESTION. If the answer is yes, run the braces after if, and if it's no, run the braces after else. Predict with the edge numbers 99, 100 and 101 before running, because greater than means strictly greater.",
    exampleOnly: [
      "The limit of 100 and the color red are our own choices, so the skill is if, else and a comparison, not those numbers.",
    ],
    digitize: "Reading engine with two Watch It Worked walkthroughs (stop the minus button at zero, turn the label red past 100) whose work lines carry the real code. Questions are predictions at the edge, spot-the-mistake and what a comparison means. The hands-on job is in Godot itself.",
    unclear: "",
  },
  natural: "2026-10-13",
  findsAt: 42,

  shelf: { grades: [7], subject: "Coding",
    blurb: "Teach your game to make a decision. The number turns red past one hundred, and the minus button learns to stop at zero.",
    contains: [
      "If and else as a yes-or-no question with two doors",
      "The comparison marks and the difference between one equals sign and two",
      "Two worked walkthroughs: stop at zero, and turn red past one hundred",
      "A predict-at-the-edge check with 99, 100 and 101",
      "Four vocabulary cards, each with a check question",
    ] },
  back: { href: "/extras/electives/game-coding/", label: "Game Coding" },
  eyebrow: ["Game Coding", "U1-L6", "Your First Game Window"],
  dek: "Right now your clicker will happily count to a million and below zero without blinking. Here's how a game learns to make a decision.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will use if and else with a comparison to make the minus button stop at zero, and to make the label turn red when the count goes above 100 and white again when it doesn't.",
      ]},
      { h: "Key Concepts", p: [
        "An if statement asks a yes-or-no question, which is called a condition. The braces right after it run only when the answer is yes, and the braces after else run when the answer is no.",
        "The comparison marks are greater than, less than, greater than or equal to, less than or equal to, and two equals signs for is it the same.",
        "A single equals sign puts a value into a box, while two equals signs ask whether two things are equal. Mixing them up is the most common mistake in this lesson.",
      ]},
      { h: "Where Students Get Stuck", p: [
        "Using one equals sign inside an if when they mean to compare. Godot shows an error because the line is putting a value in a box and not asking a question.",
        "Leaving out else, so the label turns red and stays red even after Reset. The else part is what turns it back.",
        "Expecting 100 to turn red. The mark is greater than, so only a number strictly above 100 does, and the label stays white at 100.",
      ]},
      { h: "Checking the Work", p: [
        "When this lesson is done, pressing F5 and clicking minus at zero should leave the number at 0. Clicking plus past 100 should turn the number red, and clicking Reset should turn it white again.",
        "The label should be white at 100 and red at 101.",
        "A parent can open Main.cs and compare the minus method and the UpdateLabel method to the code in the Watch It Worked. If a student changed the starting count to test, check that it was set back to 0.",
      ]},
      { h: "Suggested Videos", videos: [
        { id: "mUZOUirNVL4", title: "C# in Godot Basics 06 - Condition and Decision Statements", channel: "Arkade Games",
          why: "A clear look at if and else statements written in a Godot C# script." },
        { id: "i_KOAOJPz6w", title: "Variables, If & Else | C# Basics with Godot", channel: "John Dee",
          why: "Walks through if and else with small examples that match this lesson." },
        { id: "SwRsSC_K5Mo", title: "5 beginner tips for using C# in Godot 4!", channel: "Mina Pêcheux",
          why: "Short tips on common C# snags in Godot." },
      ]},
      { h: "Key Vocabulary", vocab: true },
    ],
  },

  parts: [
    { title: "The Number That Never Says No", s: [
      "Click the minus button at zero and your clicker cheerfully shows a minus one, and then a minus two, and it will keep going until the computer runs out of numbers.",
      "In a real game that's a disaster, since nobody can press a button fewer than zero times, and a number that hits its limit is supposed to warn the player.",
      "A game that never says no is only a calculator, and what turns it into a game is that it checks things and acts on what it finds.",
      "So how does code ask a question, and what does it do with the answer?"
    ]},

    { title: "One Question, Two Doors", s: [
      "The tool is called {{if}}, and it asks a yes-or-no question and then sends the code through one of two doors.",
      "If the answer is yes, the code goes through the first door and runs whatever is inside its curly braces, and if the answer is no, it skips that door completely.",
      "Right behind it you can add {{else}}, which is the second door, and it opens only when the answer was no.",
      "The question itself is called a {{condition}}, and it always has to be something that is plainly true or false, like the number is over a hundred.",
      "",
      "[ex] Ask whether the number is over a hundred, and if the answer is yes the label turns red, but if the answer is no it stays white.",
      "",
      "Notice that the computer never answers maybe, because a condition only ever comes out as yes or no."
    ]},

    { title: "How to Ask About Numbers", s: [
      "To ask about numbers, you use a {{comparison}}, which puts two things side by side and checks how they relate.",
      "The marks you'll use are greater than, less than, greater than or equal to, less than or equal to, and two equals signs in a row, which ask whether two things are exactly the same.",
      "That last one is the sneaky one, because a single equals sign means put this value in the box, and a double one means are these two equal, so mixing them up is like saying a sentence when you meant to ask a question.",
      "",
      "[ex] With one sign you'd shove a five into the box, but with two signs you're only asking whether the box already holds a five.",
      "",
      "Keep one more thing in mind: greater than means strictly greater, so a hundred is not greater than a hundred."
    ]},

    { title: "Stop the Minus Button at Zero", s: [
      "The first fix is to guard the minus button, so it only subtracts when there is something left to subtract.",
      "",
      "[walk] How do you stop the count from going below zero?",
      "[step] In the minus method, wrap the subtraction line in an if that asks whether the count is greater than zero. || if (count > 0)\n{\n    count = count - 1;\n}",
      "[step] Leave the label call outside the if, so the label still refreshes whether or not the number changed. || UpdateLabel();",
      "[step] Check that the whole minus method looks like this, then build and press F5. || private void OnMinusPressed()\n{\n    if (count > 0)\n    {\n        count = count - 1;\n    }\n    UpdateLabel();\n}",
      "[step] Click minus when the number reads zero, and watch it stay at zero. || Click minus at 0  ->  0",
      "",
      "There's no else here because there is nothing to do when the answer is no, and that's perfectly fine."
    ]},

    { title: "Turn the Number Red", s: [
      "The second fix uses both doors, because the number should be red when it's past a hundred and white when it isn't.",
      "",
      "[walk] How do you make the number turn red past 100?",
      "[step] In UpdateLabel, keep the line that shows the count, and under it add an if that asks whether the count is greater than a hundred. || if (count > 100)\n{\n}",
      "[step] Inside the first door, set the label's color to red, which Godot spells with the word Modulate. || label.Modulate = Colors.Red;",
      "[step] After the first door, add an else, and inside it set the color back to white. || else\n{\n    label.Modulate = Colors.White;\n}",
      "[step] Check that your whole UpdateLabel method looks like this, then build. || private void UpdateLabel()\n{\n    label.Text = count.ToString();\n    if (count > 100)\n    {\n        label.Modulate = Colors.Red;\n    }\n    else\n    {\n        label.Modulate = Colors.White;\n    }\n}",
      "",
      "Because every button calls UpdateLabel, the color check now happens after every click without you adding it anywhere else.",
      "The computer reads that method from the top down, so it sets the text first, then meets the question, takes exactly one of the two doors, and skips the other."
    ]},

    { title: "Predict at the Edge", s: [
      "Programmers get nervous at the edges of a rule, so before you run anything, guess what the label does at three numbers: 99, 100 and 101.",
      "The question asks whether the count is greater than a hundred, and 99 is smaller, 100 is the same, and 101 is bigger.",
      "To save yourself a hundred clicks, temporarily change the starting count at the top of the file to 98, build, and press F5.",
      "Click plus and watch each number appear, then put the starting count back to zero when you're done, because a game that begins at 98 is a different game."
    ]},

    { title: "The Two Mistakes Everyone Makes", s: [
      "The first mistake is using a single equals sign inside the question, which Godot reads as putting a value in a box rather than asking whether two things match, and it shows an error.",
      "When you want to ask whether two things are the same, use two equals signs in a row, and say it out loud as is it equal to.",
      "The second mistake is forgetting the else, so the number turns red at 101 and stays red even after you press Reset, because nothing ever tells it to change back.",
      "Whenever one door changes something, ask yourself what has to undo it, and that's usually the second door."
    ]},

    { title: "A Game That Decides", s: [
      "Go back to the question: how does code ask a question, and what does it do with the answer?",
      "It sets up a condition, a yes-or-no question about a number, and runs one block of code if the answer is yes and a different block if it's no.",
      "Your clicker now guards itself at zero and shouts at you past a hundred, and that is the start of a game with rules.",
      "What it still doesn't do is count by itself, and for that you'll need a timer."
    ]}
  ],

  words: [
    ["If", "A tool that asks a yes-or-no question and runs its braces only when the answer is yes.", 4 /*F:The tool is called {{if}}*/],
    ["Else", "The second door of an if, which runs when the answer was no.", 6 /*F:{{else}}*/],
    ["Condition", "The yes-or-no question inside an if, which must be plainly true or false.", 7 /*F:{{condition}}*/],
    ["Comparison", "Putting two things side by side to check how they relate, such as greater than or equal to.", 10 /*F:{{comparison}}*/]
  ],

  vocabQuestions: [
    { q: "What does <i>if</i> do?",
      choices: [
        "It asks a yes-or-no question and runs its braces only when the answer is yes",
        "It repeats a line forever",
        "It deletes a variable",
        "It prints a message"
      ],
      right: 0, why: "An if sends the code through a door only when the answer is yes." },
    { q: "When does <i>else</i> run?",
      choices: [
        "Every time",
        "When the answer to the question was no",
        "Only when you press F5",
        "Never"
      ],
      right: 1, why: "Else is the second door, used when the answer is no." },
    { q: "What is a <i>condition</i>?",
      choices: [
        "A color",
        "A kind of node",
        "The yes-or-no question inside an if",
        "A button on the keyboard"
      ],
      right: 2, why: "A condition is the question." },
    { q: "What is a <i>comparison</i>?",
      choices: [
        "Putting two things side by side to check how they relate",
        "A picture of two nodes",
        "A long method",
        "A copy of a file"
      ],
      right: 0, why: "Greater than and less than are comparisons." }
  ],

  questions: [
    { q: "What does the clicker do at zero when you press minus, before this lesson's fix?", find: [0] /*F:Click the minus button at zero*/,
      hint: "Read The Number That Never Says No.",
      choices: [
        "It stays at zero",
        "It goes to minus one and keeps going",
        "It turns red",
        "It resets"
      ], right: 1,
      why: "Nothing stopped it, so it went below zero." },

    { q: "If the answer to the question is no, which door does the code use?", find: [6] /*F:Right behind it you can add*/,
      hint: "Read One Question, Two Doors.",
      choices: [
        "The first door, the braces after the question",
        "The second door, the braces after else",
        "Neither one",
        "Both at the same time"
      ], right: 1,
      why: "Else is the door for no." },

    { q: "In the guard on the minus button, what question is the code asking?", find: [14] /*F:wrap the subtraction line in an if*/,
      hint: "Look at the first step of Stop the Minus Button at Zero.",
      choices: [
        "Is the count less than zero?",
        "Is the count exactly 100?",
        "Is the count greater than zero?",
        "Is the label red?"
      ], right: 2,
      why: "It only subtracts when the count is greater than zero." },

    { q: "What is the difference between one equals sign and two in a row?", find: [10] /*F:a single equals sign means put this value in the box*/,
      hint: "Read How to Ask About Numbers.",
      choices: [
        "There's no difference",
        "One puts a value in a box, and two ask whether two things are equal",
        "Two is only for text",
        "One is for letters and two is for numbers"
      ], right: 1,
      why: "A single equals sign assigns and a double one compares." },

    { q: "The rule is: turn red if the count is greater than 100. What color is the label when the count is exactly 100?", find: [11] /*F:greater than means strictly greater*/,
      hint: "Strictly greater means bigger, not the same.",
      choices: [
        "Red",
        "Blue",
        "Green",
        "White"
      ], right: 3,
      why: "100 is not greater than 100, so the else door gives white." },

    { q: "The count is 101. What color is the label after UpdateLabel runs?", find: [22] /*F:Inside the first door, set the label's color to red*/,
      hint: "Look at the second step of Turn the Number Red.",
      choices: [
        "White",
        "Red",
        "Black",
        "It stays whatever it was"
      ], right: 1,
      why: "101 is greater than 100, so the first door sets red." },

    { q: "Why did the lesson suggest temporarily setting the starting count to 98?", find: [28] /*F:To save yourself a hundred clicks*/,
      hint: "Read Predict at the Edge.",
      choices: [
        "98 is the correct starting number",
        "It makes the buttons bigger",
        "To test the red color without clicking a hundred times",
        "To hide the label"
      ], right: 2,
      why: "Starting near the edge makes the test quick, and you set it back after." },

    { q: "The number turns red at 101 and stays red even after pressing Reset. What is the most likely mistake?", find: [32] /*F:The second mistake is forgetting the else*/,
      hint: "Read The Two Mistakes Everyone Makes.",
      choices: [
        "The else door is missing, so nothing turns it back to white",
        "The label is too big",
        "The scene is not saved",
        "The font is wrong"
      ], right: 0,
      why: "Something has to undo the red, and that is the else door." },

    { q: "You write an if that uses a single equals sign when you meant to ask whether two things match. What happens?", find: [30] /*F:The first mistake is using a single equals sign*/,
      hint: "Read The Two Mistakes Everyone Makes.",
      choices: [
        "It works perfectly",
        "Godot shows an error, because it's putting a value in a box and not asking a question",
        "The label turns red",
        "The game ends"
      ], right: 1,
      why: "Use two equals signs when asking whether two things are the same." }
  ],

  todo: { title: "What To Do Now", s: [
    "Open Main.cs in your Clicker project and type the code yourself: first the guard on the minus method, and then the if and else inside UpdateLabel.",
    "Before you run anything, say out loud what color the label will be at 99, at 100 and at 101, then temporarily set the starting count to 98 and build.",
    "Press F5, click plus a few times, and check your guesses, then click Reset to confirm the number turns white again, and change the starting count back to zero.",
    "After that, work through the {c} word cards at the top of the page and the {q} questions about the lesson, with {v} more questions about those words, so {T} questions in all.",
    "If you get stuck on a question, tap Find It in the Story and read the line the page shows you."
  ] },
};
