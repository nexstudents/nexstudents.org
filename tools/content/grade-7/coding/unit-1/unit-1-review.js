/* coding/unit-1-review
   Game Coding (elective) · Unit 1 (Your First Game Window), lesson 8, the review.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-10-13. Written on Sonnet to the /teach-plan block in
   `plan` below and given the /natural pass. Paul has not read it. There is no book for
   this course. Sources: the videos listed in the Suggested Videos section, read for the
   teaching ORDER only, nothing copied.

   🚨 CODE LIVES ONLY IN [walk]/[step] WORK LINES (after the double bar). The finished
   code appears in the LAST step only, labeled as the check, after the student has tried. */
'use strict';
module.exports = {
  id: "coding/unit-1-review",
  slug: "unit-1-review",
  title: "Unit 1 Review: A Clicker From Scratch",
  unit: "Game Coding · U1-L8",
  seq: { unit: 1, unitTitle: "Your First Game Window", n: 8 },

  plan: {
    objective: "Build a small clicker in a NEW project from an empty window, using every Unit 1 skill without copying from earlier lessons, then explain what each part does.",
    markers: [
      "VIDEO (paraphrased), Microsoft Developer: the order of a Godot C# project is scene, nodes, script, then connect signals.",
      "VIDEO (paraphrased), Arkade Games: a review works best when you rebuild from memory and only then compare with a finished version.",
    ],
    method: "REBUILD FROM MEMORY, THEN CHECK. Recap each skill in a sentence or two, follow a build checklist for a new project called HeatTest, try the code yourself, and only then compare with the finished file in the last step.",
    exampleOnly: [
      "The names HeatTest, HeatLabel and CoolButton and the numbers 5 and 50 are our own, so the skill is rebuilding a clicker, not those names.",
      "The word heat is a sneak peek: next unit the number becomes a reactor's heat.",
    ],
    digitize: "Reading engine with a recap in two parts, a challenge, one build-checklist walkthrough whose last step holds the finished code as the check, and nine questions that span the whole unit. The hands-on job is to build the challenge in a new Godot project.",
    unclear: "",
  },
  natural: "2026-10-13",
  findsAt: 34,

  shelf: { grades: [7], subject: "Coding",
    blurb: "Prove what you learned. Rebuild a clicker from an empty window in a brand new project, with a number that heats up and a button that cools it down.",
    contains: [
      "A quick recap of every Unit 1 skill",
      "A build checklist for a new project, with the finished code held back until you've tried",
      "Five vocabulary cards, each with a check question",
      "Nine questions that cover the whole unit",
      "A sneak peek of the reactor your game becomes in the next unit",
    ] },
  back: { href: "/extras/electives/game-coding/", label: "Game Coding" },
  eyebrow: ["Game Coding", "U1-L8", "Your First Game Window"],
  dek: "You built a clicker with help. Now build one without it, and find out how much of it is already in your head.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will build a new project called HeatTest from an empty window, with a label that counts up on a timer, a button that cools it down without going below zero, and a number that turns red past 50, and then explain what each part does.",
      ]},
      { h: "Key Concepts", p: [
        "Unit 1 in one list: a node is a piece with one job, a scene is nodes saved together, a script is instructions attached to a node, a variable is a labeled box, a signal is a doorbell, a method is a named recipe, if and else make a decision, and a timer rings a signal on its own.",
        "The usual build order is: make the scene and nodes, attach the script, add the variable, connect the signals, write the methods, and then press F5 and test.",
        "The same skills will build a reactor in the next unit, where the count becomes heat.",
      ]},
      { h: "Where Students Get Stuck", p: [
        "Skipping the plan and typing straight away. Making a quick list of the nodes and what each one does saves time.",
        "Node names that do not match the code. HeatLabel, HeatTimer and CoolButton must be spelled the same in the Scene dock and in the script.",
        "Peeking at the finished code too early. The point is to try first, so the answer is held back until the last step.",
      ]},
      { h: "Checking the Work", p: [
        "When this lesson is done, there should be a new project called HeatTest with a scene whose top node is Main, and under it a Label named HeatLabel, a Timer named HeatTimer, and a Button named CoolButton, with a Main.cs attached to Main.",
        "Pressing F5 should show the number climbing by one every second, turning red above 50, and the Cool button should take 5 away without ever going below zero.",
        "A parent can open Main.cs and compare it to the finished code in the last step of the Watch It Worked. It doesn't have to match word for word, but it should behave the same way.",
      ]},
      { h: "Suggested Videos", videos: [
        { id: "0Pf41YBedMk", title: "Introduction to Godot C# Essentials: A Complete Beginner's Guide: FULLCOURSE", channel: "Microsoft Developer",
          why: "A good way to review the unit is to rewatch the scenes and nodes section at about 12:20 and the signals section at about 1:07:24.", start: 740 },
        { id: "Kkn_YGWwRj0", title: "C# Basics in Godot 04 - Variables and Data Types", channel: "Arkade Games",
          why: "A short review of variables and types." },
        { id: "mUZOUirNVL4", title: "C# in Godot Basics 06 - Condition and Decision Statements", channel: "Arkade Games",
          why: "A short review of if and else." },
      ]},
      { h: "Key Vocabulary", vocab: true },
    ],
  },

  parts: [
    { title: "Can You Do It Again?", s: [
      "Think back to the first lesson, when all you had was an empty gray window and a list of downloads, and notice how far you've come since then.",
      "You've built a screen with a number and four buttons, written methods of your own, taught the game to make a decision, and set a clock ticking.",
      "But you did all of it with a lesson open beside you, and the real test of whether you understand something is whether you can do it again without help.",
      "So what happens when you start a brand new project and the only thing you have is your own head?"
    ]},

    { title: "Pieces and Instructions", s: [
      "Start with the pieces, because everything in Godot is built from {{nodes}}, each a block with one job, such as showing text, being a button, or counting seconds.",
      "A {{scene}} is those blocks saved together as one file, with a root node at the top that everything else sits on, which in your projects is Main.",
      "A script is a set of written instructions clipped onto a node, and inside it you write methods, which are named recipes that you can call as often as you like.",
      "That's the first half of the unit, and every one of those pieces was something you added by clicking or typing."
    ]},

    { title: "Memory and Decisions", s: [
      "The second half is how a game remembers and decides, starting with a {{variable}}, a labeled box that holds a number like count and can change as the game goes on.",
      "A {{signal}} is a doorbell that a node rings when something happens, such as a button being pressed or a timer running out, and you answer it by connecting a method.",
      "An if with an else lets the code ask a yes-or-no question and take one of two doors, and a Timer is a node that rings its Timeout bell by itself every few seconds.",
      "Put those together and you have a game that remembers a number, reacts to clicks, makes decisions, and keeps moving on its own."
    ]},

    { title: "The Challenge: Heat", s: [
      "Your challenge is a small game in a new project called HeatTest, and it's a sneak peek, because in the next unit the number you've been counting turns into the heat of a reactor.",
      "A label called HeatLabel shows the heat, and a timer called HeatTimer adds one to it every second, so the heat is always creeping up.",
      "A button called CoolButton takes five off the heat when you press it, but it should never let the heat drop below zero.",
      "Finally, the number turns red when the heat goes past fifty, and white again when it comes back down, so you know when the reactor is in trouble."
    ]},

    { title: "The Build Checklist", s: [
      "Don't open an old project and don't copy anything, because the whole point is to see what you can do from memory.",
      "",
      "[walk] How do you build HeatTest from an empty window?",
      "[step] Make a new project called HeatTest, and in the Scene dock click User Interface to make a Control root. || Project Manager  ->  Create  ->  HeatTest\nScene dock  ->  User Interface",
      "[step] Rename the root Main and save the scene as main.tscn. || Control  ->  Main\nCtrl+S  ->  main.tscn",
      "[step] With Main selected, add a Label named HeatLabel, a Timer named HeatTimer, and a Button named CoolButton, and check that your Scene dock looks like this tree. || Main\n    HeatLabel\n    HeatTimer\n    CoolButton",
      "[step] Set the timer's Wait Time to one and switch on Autostart, then set the label's text to a zero and the button's text to the word Cool. || HeatTimer:  Wait Time 1, Autostart On\nHeatLabel text:  0\nCoolButton text:  Cool",
      "[step] Right-click Main, attach a C# script called Main.cs, and then write your own version, with a box for the heat, a method that adds one every second, and a method for the button that never goes below zero. || res://Main.cs",
      "[step] Add a method of your own that sets the label's text and uses an if and else to make it red above fifty, then call it from the other methods and when the game starts. || if (heat > 50) ... else ...",
      "[step] Build, press F5, and try to fix any problems yourself, and only when you've tried, compare your file with this finished version to check your work. || using Godot;\n\npublic partial class Main : Control\n{\n    private int heat = 0;\n    private Label heatLabel;\n\n    public override void _Ready()\n    {\n        heatLabel = GetNode<Label>(\"HeatLabel\");\n        GetNode<Timer>(\"HeatTimer\").Timeout += OnHeatTimeout;\n        GetNode<Button>(\"CoolButton\").Pressed += OnCoolPressed;\n        UpdateLabel();\n    }\n\n    private void OnHeatTimeout()\n    {\n        heat = heat + 1;\n        UpdateLabel();\n    }\n\n    private void OnCoolPressed()\n    {\n        heat = heat - 5;\n        if (heat < 0)\n        {\n            heat = 0;\n        }\n        UpdateLabel();\n    }\n\n    private void UpdateLabel()\n    {\n        heatLabel.Text = heat.ToString();\n        if (heat > 50)\n        {\n            heatLabel.Modulate = Colors.Red;\n        }\n        else\n        {\n            heatLabel.Modulate = Colors.White;\n        }\n    }\n}",
      "",
      "Yours may look a little different from this one, and that's fine, because there are many ways to write the same game, and what counts is that it behaves the same way."
    ]},

    { title: "The Mistakes Worth Remembering", s: [
      "Every mistake in this unit came back to a short list, so read it again before you start and you'll dodge most of them.",
      "Make sure Godot is the .NET version, the language is C# when you attach the script, and you build after every change to your code.",
      "Check that every name in your code matches the name in the Scene dock exactly, capital letters included, and that every line that does something ends with a semicolon.",
      "And keep the heat box at the top of the file and not inside a method, or it will start over at zero every time."
    ]},

    { title: "Back to the Empty Window", s: [
      "Go back to the question: what happens when you start a brand new project and all you have is your own head?",
      "What happens is that the pieces come back, one at a time, a scene, some nodes, a script, a box, a doorbell, a decision and a clock.",
      "That's the whole toolbox for Unit 1, and it's also the start of something bigger, because the heat you just made is the first part of a reactor.",
      "In the next unit the numbers start to move on their own, every single frame, and that is where a game starts to feel alive."
    ]}
  ],

  words: [
    ["Node", "One piece of a game with one job, such as showing text or being a button.", 4 /*F:{{nodes}}*/],
    ["Scene", "A group of nodes saved together as one file.", 5 /*F:{{scene}}*/],
    ["Variable", "A labeled box where a program keeps a value that can change.", 8 /*F:{{variable}}*/],
    ["Signal", "A doorbell a node rings when something happens, which a method can answer.", 9 /*F:A {{signal}} is*/],
    ["Method", "A named recipe of code that you can call as many times as you like.", 6 /*F:which are named recipes*/]
  ],

  vocabQuestions: [
    { q: "What is a <i>node</i>?",
      choices: [
        "One piece of a game with one job",
        "A whole game",
        "A kind of number",
        "A file on your computer"
      ],
      right: 0, why: "A node is one block with one job." },
    { q: "What is a <i>scene</i>?",
      choices: [
        "A part of a movie",
        "A group of nodes saved together as one file",
        "A single button",
        "A mistake in the code"
      ],
      right: 1, why: "A scene is nodes saved as a file." },
    { q: "What is a <i>variable</i>?",
      choices: [
        "A button you can press",
        "A kind of picture",
        "A labeled box that holds a value that can change",
        "A node that counts time"
      ],
      right: 2, why: "A variable is a labeled box." },
    { q: "What is a <i>signal</i>?",
      choices: [
        "A doorbell a node rings when something happens",
        "A color",
        "The name of a project",
        "A key on the keyboard"
      ],
      right: 0, why: "A signal announces that something happened." },
    { q: "What is a <i>method</i>?",
      choices: [
        "A type of node",
        "A named recipe of code you can call many times",
        "A kind of file",
        "A setting in the Inspector"
      ],
      right: 1, why: "A method is written once and called by name." }
  ],

  questions: [
    { q: "A friend says he can build the whole unit from memory. What is the real test of that?", find: [2] /*F:the real test of whether you understand*/,
      hint: "Read Can You Do It Again?",
      choices: [
        "Whether he can do it again without help",
        "Whether he can read the lessons fast",
        "Whether he has a fast computer",
        "Whether he memorized the page"
      ], right: 0,
      why: "Doing it again without help is the proof." },

    { q: "Which of these is a node?", find: [4] /*F:everything in Godot is built from*/,
      hint: "Read Pieces and Instructions.",
      choices: [
        "A button",
        "The Output panel",
        "The F5 key",
        "The Inspector"
      ], right: 0,
      why: "A button, a label and a timer are all nodes." },

    { q: "What is the top node of every scene in this unit called?", find: [5] /*F:with a root node at the top*/,
      hint: "Read Pieces and Instructions.",
      choices: [
        "CountLabel",
        "Main",
        "Timer",
        "Script"
      ], right: 1,
      why: "The root is named Main." },

    { q: "Where should the heat variable live so it keeps its value between ticks?", find: [29] /*F:keep the heat box at the top of the file*/,
      hint: "Read The Mistakes Worth Remembering.",
      choices: [
        "Inside the cool button's method",
        "Inside the timer's method",
        "At the top of the file, outside any method",
        "In the Inspector"
      ], right: 2,
      why: "A box at the top lives for the whole game." },

    { q: "How does the game know when to add one to the heat?", find: [13] /*F:a timer called HeatTimer adds one*/,
      hint: "Read The Challenge: Heat.",
      choices: [
        "The player clicks a button",
        "The label asks for it",
        "The scene is saved",
        "The timer rings its Timeout signal, and a connected method adds one"
      ], right: 3,
      why: "A timer rings Timeout every second and a method answers." },

    { q: "The heat is 3 and the player presses Cool, which takes away 5. What should the code do so the heat never goes below zero?", find: [14] /*F:it should never let the heat drop below zero*/,
      hint: "Read The Challenge: Heat.",
      choices: [
        "Show a minus two",
        "Use an if to check, and set the heat to zero when it dips below",
        "Delete the label",
        "Stop the timer forever"
      ], right: 1,
      why: "An if that sets the heat back to zero guards the bottom." },

    { q: "The rule is: turn red when the heat is greater than 50. What color is the label at exactly 50?", find: [15] /*F:the number turns red when the heat goes past fifty*/,
      hint: "Greater than means strictly greater.",
      choices: [
        "Red",
        "Blue",
        "White",
        "Black"
      ], right: 2,
      why: "50 is not greater than 50, so the else door gives white." },

    { q: "Your Cool button does nothing at all. You wrote the method for it. What is the most likely thing you forgot?", find: [9] /*F:A {{signal}} is a doorbell*/,
      hint: "Think about the doorbell.",
      choices: [
        "To change the font",
        "To rename the scene",
        "To make the project bigger",
        "To connect the button's Pressed signal to the method"
      ], right: 3,
      why: "A method only runs when something connects it to a signal." },

    { q: "Your code can't find HeatLabel even though the label is in the scene. What is the most likely cause?", find: [28] /*F:Check that every name in your code matches*/,
      hint: "Read The Mistakes Worth Remembering.",
      choices: [
        "The name in the code doesn't match the name in the Scene dock exactly",
        "The label is too small",
        "The timer is too slow",
        "The scene is too long"
      ], right: 0,
      why: "Names have to match, capital letters included." }
  ],

  todo: { title: "What To Do Now", s: [
    "Make a brand new project called HeatTest, and build the scene from the checklist yourself: a Control named Main, a Label named HeatLabel, a Timer named HeatTimer and a Button named CoolButton.",
    "Write Main.cs yourself without copying from any old lesson, and only when you've tried and want to check your work, open the finished version in the last step of the walkthrough.",
    "Press F5 and check that the heat climbs by one every second, that Cool takes away five without going below zero, and that the number turns red above fifty.",
    "After that, work through the {c} word cards at the top of the page and the {q} questions about the whole unit, with {v} more questions about those words, so {T} questions in all.",
    "If you get stuck on a question, tap Find It in the Story and read the line the page shows you."
  ] },
};
