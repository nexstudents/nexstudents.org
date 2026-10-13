/* coding/variables-and-your-first-click
   Game Coding (elective, internal level 7) · Unit 1 (Your First Game Window), lesson 4.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-10-13. Written on Sonnet to the /teach-plan block in
   `plan` below and given the /natural pass. Paul has not read it. There is no book for
   this course. Sources: the videos listed in the Suggested Videos section (Arkade Games,
   John Dee, Microsoft Developer), read for the teaching ORDER only, nothing copied.

   🚨 CODE LIVES ONLY IN [walk]/[step] WORK LINES (after the double bar). Sentences and
   questions name things in plain words. */
'use strict';
module.exports = {
  id: "coding/variables-and-your-first-click",
  slug: "variables-and-your-first-click",
  title: "Variables and Your First Click",
  unit: "Game Coding · U1-L4",
  seq: { unit: 1, unitTitle: "Your First Game Window", n: 4 },

  plan: {
    objective: "Store the count in an int variable and make the plus button add one and show the new number when clicked.",
    markers: [
      "VIDEO (paraphrased), Arkade Games: a variable is a named box that holds a value, and int is the type for whole numbers.",
      "VIDEO (paraphrased), John Dee: predict what a program will do before you run it, then run it to check.",
      "VIDEO (paraphrased), Microsoft Developer: a signal is how a node announces that something happened, and you connect it to a method with +=.",
    ],
    method: "A LABELED BOX THAT CHANGES, AND A DOORBELL THAT RINGS. Make a box called count that holds a whole number, turn the number into words so the label can show it, and connect the button's Pressed signal to a method that adds one. Predict, then run.",
    exampleOnly: [
      "Adding exactly one per click is our own choice, so the skill is a variable plus a signal, not the number 1.",
    ],
    digitize: "Reading engine with two Watch It Worked walkthroughs (the box and the doorbell, then the click method) plus a short walkthrough of the broken version. Work lines carry the real code. Questions ask what a line does, predict what the label shows after three clicks, and spot the mistake. The hands-on job is in Godot itself.",
    unclear: "",
  },
  natural: "2026-10-13",
  findsAt: 41,

  shelf: { grades: [7], subject: "Coding",
    blurb: "Make the plus button actually count. A variable remembers the number, and a signal rings when the button is clicked.",
    contains: [
      "The labeled-box picture of a variable and the doorbell picture of a signal",
      "Two worked walkthroughs that build the click code step by step",
      "A predict-then-run check",
      "Five vocabulary cards, each with a check question",
      "The two mistakes everyone makes, shown in code you can read",
    ] },
  back: { href: "/extras/electives/game-coding/", label: "Game Coding" },
  eyebrow: ["Game Coding", "U1-L4", "Your First Game Window"],
  dek: "Click a button three times and the game has to remember the three. Here's where it keeps that number, and how a click gets through to your code.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will store the count in a whole-number variable, connect the plus button's Pressed signal to a method, and make that method add one and show the new number in the label.",
      ]},
      { h: "Key Concepts", p: [
        "A variable is a labeled box. The label is its name, and what's inside can change. The type int means the box holds whole numbers.",
        "A label's Text holds words, so the number has to be turned into words with ToString before it can be shown.",
        "A signal is like a doorbell. The button rings Pressed when it's clicked, and += says to run a given method when that happens. The count++ shortcut also exists, but the lesson keeps the long form on purpose.",
      ]},
      { h: "Where Students Get Stuck", p: [
        "Forgetting ToString, which produces an error that says an int can't be turned into a string. Adding it fixes it.",
        "Putting the count box inside the click method, which makes it start over at zero on every click, so the label only ever shows 1. The box has to live outside, at the top of the class.",
        "Typing the method name differently in two places. C# cares about capital letters, so OnPlusPressed and Onpluspressed are different names.",
      ]},
      { h: "Checking the Work", p: [
        "When this lesson is done, Main.cs should have a count variable and a label variable at the top, the label and button connected inside the starting-up method, and a click method that adds one and updates the label.",
        "Pressing F5 and clicking the +1 button should make the number climb by one each time, 1, 2, 3 and so on.",
        "A parent can open Main.cs and compare it to the code in the last Watch It Worked. The Hello print line may have been removed.",
      ]},
      { h: "Suggested Videos", videos: [
        { id: "Kkn_YGWwRj0", title: "C# Basics in Godot 04 - Variables and Data Types", channel: "Arkade Games",
          why: "A short, clear look at variables and the whole-number type in a Godot project." },
        { id: "i_KOAOJPz6w", title: "Variables, If & Else | C# Basics with Godot", channel: "John Dee",
          why: "Covers variables at the start and prepares for the if and else lesson later in this unit." },
        { id: "0Pf41YBedMk", title: "Introduction to Godot C# Essentials: A Complete Beginner's Guide: FULLCOURSE", channel: "Microsoft Developer",
          why: "Signals begin at about 1:07:24, and they show the same connecting idea this lesson uses.", start: 4044 },
      ]},
      { h: "Key Vocabulary", vocab: true },
    ],
  },

  parts: [
    { title: "Three Clicks, One Number", s: [
      "Picture your finished game with the plus button sitting under the number, and you click it three times in a row.",
      "Somewhere inside the game, a number has to be quietly going up, one, two, three, and after the third click the screen has to show a three and not a one.",
      "A button can't remember anything on its own, and neither can a label, which only shows whatever it was last told to show.",
      "So where does the game keep that growing number, and how does a click get all the way to it?"
    ]},

    { title: "A Box With a Label on It", s: [
      "The answer is a {{variable}}, which is a box with a name on the front where the game stores something it needs to remember.",
      "You'll call yours count, and whatever sits inside the box can change over time, which is where the word variable comes from, since it's something that can vary.",
      "Every box in C# also has a kind of thing it's allowed to hold, and an {{int}} box holds a whole number, like 0 or 5 or 100, but never a decimal and never words.",
      "That makes the box easy to picture: a little crate labeled count, with a number inside that starts at zero."
    ]},

    { title: "The Doorbell", s: [
      "Now you need a way for a click to reach your code, and that works like a doorbell on a house.",
      "When someone clicks the button, the button rings a {{signal}} called Pressed, and a signal is just a button's way of announcing that something happened.",
      "Your job is to answer the door by saying, when that bell rings, run this method of mine, and the plus-equals sign is how you say it.",
      "A button rings its bell every time it's clicked, whether anyone is listening or not, and your connection is what makes someone listen."
    ]},

    { title: "Build the Box and the Doorbell", s: [
      "You'll type this in two rounds, first the boxes and the connection, and then the method that answers the bell.",
      "",
      "[walk] How do you make the count box and connect the button?",
      "[step] Above the starting-up method, make a whole-number box called count that starts at zero. || private int count = 0;",
      "[step] Right under it, make a second box called label that will hold the label node, which is empty for now. || private Label label;",
      "[step] Inside the starting-up method, delete the old lines from last lesson, and then fill the label box by finding the node called CountLabel. || label = GetNode<Label>(\"CountLabel\");",
      "[step] Next, find the node called PlusButton and connect its Pressed signal to a method named OnPlusPressed. || GetNode<Button>(\"PlusButton\").Pressed += OnPlusPressed;",
      "",
      "Your last line will show a red underline right now, and that's expected, because the method it names doesn't exist yet."
    ]},

    { title: "Answer the Doorbell", s: [
      "A method is a named recipe, and OnPlusPressed is the recipe that runs each time the bell rings.",
      "",
      "[walk] How do you write the method that runs on a click?",
      "[step] Below the starting-up method, write a new method with the name you used in the connection. || private void OnPlusPressed()\n{\n}",
      "[step] Inside it, make the box bigger by one, by taking what's in count, adding one, and putting the answer back in count. || count = count + 1;",
      "[step] Then set the label's text to the count, but a label only holds words, so the number has to be turned into words first. || label.Text = count.ToString();",
      "[step] Check that your whole file looks like this, then build with the hammer and save. || using Godot;\n\npublic partial class Main : Control\n{\n    private int count = 0;\n    private Label label;\n\n    public override void _Ready()\n    {\n        label = GetNode<Label>(\"CountLabel\");\n        GetNode<Button>(\"PlusButton\").Pressed += OnPlusPressed;\n    }\n\n    private void OnPlusPressed()\n    {\n        count = count + 1;\n        label.Text = count.ToString();\n    }\n}",
      "",
      "There's also a shortcut, a pair of plus signs after the name, that does the same thing as adding one, but keep the long version for now so you can see exactly what happens."
    ]},

    { title: "Predict First, Then Run", s: [
      "Before you press F5, stop and make a guess, because guessing first is how programmers train their eyes to read code.",
      "You click the plus button three times, so what will the number in the window say?",
      "Think about the box: it starts at zero, each click adds one, and the label is set to whatever is in the box after each click.",
      "Now press F5 and click, and if the number reads three, you read the code exactly the way the computer did."
    ]},

    { title: "The Two Mistakes Everyone Makes", s: [
      "The first mistake is leaving off the step that turns the number into words, and Godot answers with an error saying it can't turn a whole number into text.",
      "The fix is adding the little word that does the converting, and the error disappears.",
      "",
      "[walk] What does the second mistake look like?",
      "[step] Here, the count box was made inside the method, so each click makes a brand new box that starts at zero. || private void OnPlusPressed()\n{\n    int count = 0;\n    count = count + 1;\n    label.Text = count.ToString();\n}",
      "[step] Every click then shows a one, because the box is thrown away the moment the method finishes. || click, click, click  ->  1, 1, 1",
      "[step] The fix is to move the box back out to the top of the file, above the starting-up method, where it lives for the whole game. || private int count = 0;",
      "",
      "A box inside a method is like a note on a napkin that gets thrown out after lunch, while a box at the top is a note on the fridge."
    ]},

    { title: "Where the Game Keeps Its Number", s: [
      "Go back to the question: where does the game keep that growing number, and how does a click get to it?",
      "The number lives in a variable at the top of the file, where it stays for the whole game, and the button's doorbell rings a method that changes it and updates the label.",
      "That's the first real loop of a game: something happens, the data changes, and the screen shows the new truth.",
      "Next lesson you'll add a minus button and a reset button, and you'll write a method of your very own."
    ]}
  ],

  words: [
    ["Variable", "A named box where a program keeps something it needs to remember, and what's inside can change.", 4 /*F:The answer is a {{variable}}*/],
    ["Int", "The kind of variable that holds a whole number, with no decimals.", 6 /*F:an {{int}} box holds*/],
    ["Signal", "A message a node sends out when something happens, such as a button being clicked.", 9 /*F:rings a {{signal}}*/],
    ["String", "Words and letters, which is what a label's text holds, as opposed to a number.", 23 /*F:a label only holds words*/],
    ["Convert", "To turn one kind of thing into another, such as a number into words so it fits in a label.", 23 /*F:a label only holds words*/]
  ],

  vocabQuestions: [
    { q: "What is a <i>variable</i>?",
      choices: [
        "A button on the screen",
        "A named box where a program keeps something it needs to remember",
        "A picture file",
        "A mistake in the code"
      ],
      right: 1, why: "A variable is a labeled box whose contents can change." },
    { q: "What does an <i>int</i> hold?",
      choices: [
        "Words and letters",
        "A decimal number",
        "A whole number",
        "A picture"
      ],
      right: 2, why: "An int holds a whole number." },
    { q: "What is a <i>signal</i>?",
      choices: [
        "A message a node sends out when something happens",
        "A kind of number",
        "A color",
        "A file in the project"
      ],
      right: 0, why: "A signal announces that something happened." },
    { q: "What is a <i>string</i>?",
      choices: [
        "A whole number",
        "A piece of rope",
        "A type of node",
        "Words and letters, like a label's text"
      ],
      right: 3, why: "Strings are text." },
    { q: "What does it mean to <i>convert</i> something?",
      choices: [
        "To delete it",
        "To turn one kind of thing into another",
        "To save it",
        "To rename it"
      ],
      right: 1, why: "A number is converted into words so a label can show it." }
  ],

  questions: [
    { q: "Why can't the label itself remember how many times you clicked?", find: [2] /*F:A button can't remember anything on its own*/,
      hint: "Read Three Clicks, One Number.",
      choices: [
        "It only shows whatever it was last told to show",
        "It's too small",
        "It doesn't have a name",
        "It can only show the number zero"
      ], right: 0,
      why: "The label just displays, and a variable does the remembering." },

    { q: "What does a variable named count with a whole-number type hold?", find: [6] /*F:an {{int}} box holds a whole number*/,
      hint: "Read A Box With a Label on It.",
      choices: [
        "Any picture",
        "A decimal like 3.5",
        "A whole number, such as 0 or 5",
        "A line of text"
      ], right: 2,
      why: "An int box holds whole numbers only." },

    { q: "Using the doorbell picture, what rings when you click the button?", find: [9] /*F:rings a {{signal}} called Pressed*/,
      hint: "Read The Doorbell.",
      choices: [
        "The scene",
        "A signal called Pressed",
        "The Inspector",
        "The Output panel"
      ], right: 1,
      why: "The button rings its Pressed signal." },

    { q: "In the connection line, what does the plus-equals sign mean in plain words?", find: [10] /*F:Your job is to answer the door*/,
      hint: "Read The Doorbell.",
      choices: [
        "Add two numbers together",
        "Delete the button",
        "When the bell rings, run this method",
        "Print a message"
      ], right: 2,
      why: "The plus-equals sign connects the signal to a method." },

    { q: "Why does the code turn the number into words before giving it to the label?", find: [23] /*F:a label only holds words*/,
      hint: "Look at the third step of Answer the Doorbell.",
      choices: [
        "To make it bigger",
        "To make it faster",
        "To make it red",
        "Because a label only holds words, not numbers"
      ], right: 3,
      why: "The label's text is words, so the number has to be converted." },

    { q: "The count starts at zero and you click the plus button three times. What does the label show?", find: [28] /*F:Think about the box*/,
      hint: "Read Predict First, Then Run.",
      choices: [
        "1",
        "3",
        "0",
        "30"
      ], right: 1,
      why: "Each click adds one, so three clicks give three." },

    { q: "A friend's label shows 1 no matter how many times he clicks. What is the most likely mistake?", find: [33] /*F:the count box was made inside the method*/,
      hint: "Read The Two Mistakes Everyone Makes.",
      choices: [
        "He made the font too big",
        "He made the count box inside the method, so it restarts at zero every click",
        "He named the label wrong",
        "He forgot to save the scene"
      ], right: 1,
      why: "A box inside the method is thrown away when the method ends." },

    { q: "Where should the count box live so it keeps its value between clicks?", find: [35] /*F:move the box back out to the top*/,
      hint: "Look at the last step of the second mistake.",
      choices: [
        "At the top of the file, outside any method",
        "Inside the click method",
        "Inside the Inspector",
        "In the FileSystem"
      ], right: 0,
      why: "A box at the top lives for the whole game." },

    { q: "Godot says it can't turn a whole number into text. What did you most likely leave out?", find: [30] /*F:The first mistake is leaving off the step*/,
      hint: "Read The Two Mistakes Everyone Makes.",
      choices: [
        "The semicolon after the print line",
        "The line that attaches the script",
        "The step that converts the number into words",
        "The scene's name"
      ], right: 2,
      why: "The number has to be turned into words before the label can show it." }
  ],

  todo: { title: "What To Do Now", s: [
    "Open Main.cs in your Clicker project and type the code yourself, don't copy it: first the two boxes and the connection, then the click method that adds one and updates the label.",
    "Before you press F5, make a guess about what the number will say after three clicks, then build, play, click the plus button three times, and check that your guess was right.",
    "Press F5 and check that the number climbs by one every time you click, and if it stays at one, look for the count box inside the method.",
    "After that, work through the {c} word cards at the top of the page and the {q} questions about the lesson, with {v} more questions about those words, so {T} questions in all.",
    "If you get stuck on a question, tap Find It in the Story and read the line the page shows you."
  ] },
};
