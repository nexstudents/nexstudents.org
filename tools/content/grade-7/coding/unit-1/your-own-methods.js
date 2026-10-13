/* coding/your-own-methods
   Game Coding (elective, internal level 7) · Unit 1 (Your First Game Window), lesson 5.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-10-13. Written on Sonnet to the /teach-plan block in
   `plan` below and given the /natural pass. Paul has not read it. There is no book for
   this course. Sources: the videos listed in the Suggested Videos section (Microsoft
   Developer, Arkade Games, Mina Pecheux), read for the teaching ORDER only, nothing copied.

   🚨 CODE LIVES ONLY IN [walk]/[step] WORK LINES (after the double bar). Sentences and
   questions name things in plain words. */
'use strict';
module.exports = {
  id: "coding/your-own-methods",
  slug: "your-own-methods",
  title: "Your Own Methods: Down and Reset",
  unit: "Game Coding · U1-L5",
  seq: { unit: 1, unitTitle: "Your First Game Window", n: 5 },

  plan: {
    objective: "Write a method of his own (UpdateLabel) and call it from three button methods so the label is updated in one place.",
    markers: [
      "VIDEO (paraphrased), Microsoft Developer: a method is a named block of code that you write once and call whenever you need it.",
      "VIDEO (paraphrased), Mina Pecheux: C# is case-sensitive, so a method name has to be spelled the same everywhere, and a call needs its parentheses.",
      "VIDEO (paraphrased), Arkade Games: when you notice the same lines repeated, move them into one place and use it from everywhere.",
    ],
    method: "A METHOD IS A NAMED RECIPE. Add the minus and reset buttons, write their methods, notice the same label line repeated three times, move it into a method called UpdateLabel, and call it by name everywhere.",
    exampleOnly: [
      "The names Minus, Reset and UpdateLabel are our own, so the skill is writing a method once and calling it by name, not those particular names.",
    ],
    digitize: "Reading engine with three Watch It Worked walkthroughs (add the buttons, write the click methods, tidy into UpdateLabel) whose work lines carry the real code. Questions ask what a call does, why one method beats three copies, and how to spot the two common mistakes. The hands-on job is in Godot itself.",
    unclear: "",
  },
  natural: "2026-10-13",
  findsAt: 41,

  shelf: { grades: [7], subject: "Coding",
    blurb: "Add a minus button and a reset button, then write a method of your own so the number updates in one place.",
    contains: [
      "The recipe-card picture of a method, and how to call one",
      "Three worked walkthroughs: add two buttons, write two methods, and tidy up with UpdateLabel",
      "Four vocabulary cards, each with a check question",
      "The two mistakes everyone makes, named out loud",
      "A hands-on job in Godot that finishes the three-button clicker",
    ] },
  back: { href: "/extras/electives/game-coding/", label: "Game Coding" },
  eyebrow: ["Game Coding", "U1-L5", "Your First Game Window"],
  dek: "Write a line once, use it everywhere. Here's the trick that keeps your code short and your changes easy.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will add a MinusButton and a ResetButton, write click methods for them, and then write a method of their own called UpdateLabel that shows the count, calling it from all three click methods.",
      ]},
      { h: "Key Concepts", p: [
        "A method is a named recipe. Writing the steps once and calling the method by name wherever they're needed means a change only has to be made in one place.",
        "Calling a method means using its name followed by parentheses and a semicolon. Without the parentheses, the line does not run the method.",
        "C# is case-sensitive, so UpdateLabel and Updatelabel are two different names. The minus button can still go below zero in this lesson, and the next lesson fixes that.",
      ]},
      { h: "Where Students Get Stuck", p: [
        "Calling UpdateLabel without parentheses, so the line never runs the method and the label doesn't change. A red error usually shows.",
        "Spelling the method name differently where it's written and where it's called, such as a lowercase letter that should be capital.",
        "Wondering why the number goes negative. That's expected for now, and the next lesson stops it.",
      ]},
      { h: "Checking the Work", p: [
        "When this lesson is done, the scene should show Main with CountLabel, PlusButton, MinusButton and ResetButton under it, all spelled and capitalized exactly that way.",
        "Pressing F5 should show 0 at the start, the plus button should go up by one, the minus button should go down by one, and the reset button should return the number to 0. The number may go below zero, which is fine for now.",
        "A parent can open Main.cs and compare it to the code in the last Watch It Worked, where the line that sets the label's text appears only once, inside UpdateLabel.",
      ]},
      { h: "Suggested Videos", videos: [
        { id: "0Pf41YBedMk", title: "Introduction to Godot C# Essentials: A Complete Beginner's Guide: FULLCOURSE", channel: "Microsoft Developer",
          why: "The lifecycle methods section, starting at about 35:24, shows how Godot calls methods and how your own methods fit in.", start: 2124 },
        { id: "Kkn_YGWwRj0", title: "C# Basics in Godot 04 - Variables and Data Types", channel: "Arkade Games",
          why: "A short review of the variables the click methods use." },
        { id: "SwRsSC_K5Mo", title: "5 beginner tips for using C# in Godot 4!", channel: "Mina Pêcheux",
          why: "Short tips on names, capital letters and common C# snags." },
      ]},
      { h: "Key Vocabulary", vocab: true },
    ],
  },

  parts: [
    { title: "The Same Line, Three Times", s: [
      "Your plus button works, and now you want two more buttons beside it, one that takes a step back and one that wipes the slate clean.",
      "Each of them will change the count, and each of them will then have to update the label, which means the very same line of code appears three times in your file.",
      "That might seem harmless at first, but picture changing how the label looks someday, and having to find and fix that line in three different places without missing one.",
      "So how do you write a line once and still use it everywhere?"
    ]},

    { title: "A Recipe With a Name", s: [
      "You already know a {{method}} is a named recipe, and so far every recipe you've written was answering a bell, like the one that adds one when the plus button rings.",
      "But you can also write recipes just because you want them, the way a cook writes down a sauce once and then says to add the sauce whenever a dish needs it.",
      "Using a recipe by its name is called making a {{call}}, and a call is written as the name followed by a pair of parentheses and a semicolon.",
      "That pair of parentheses matters more than it looks, because a name with no parentheses after it only mentions the recipe and never actually cooks it."
    ]},

    { title: "Add Two More Buttons", s: [
      "The buttons go into the scene exactly the way the plus button did, so this part will feel familiar.",
      "",
      "[walk] How do you add the minus and reset buttons?",
      "[step] Click Main in the Scene dock so the new buttons become children of Main, and then add a Button node. || Scene dock  ->  click  Main\nCtrl+A  ->  Button  ->  Create",
      "[step] Rename it MinusButton and set its Text property to a minus and a one. || Button  ->  MinusButton\nText:  -1",
      "[step] Add one more Button the same way, rename it ResetButton, and set its Text to the word Reset. || Button  ->  ResetButton\nText:  Reset",
      "[step] Drag them into place under the number and check that your Scene dock matches this tree. || Main\n    CountLabel\n    PlusButton\n    MinusButton\n    ResetButton",
      "",
      "Press Ctrl+S to save, and notice that these buttons will do nothing until you write their code."
    ]},

    { title: "Write the Two Click Methods", s: [
      "Each button needs its own doorbell connection and its own method, which is the same pattern you used for the plus button.",
      "",
      "[walk] How do you make the minus and reset buttons work?",
      "[step] Inside the starting-up method, below the plus button's connection, connect the other two buttons the same way. || GetNode<Button>(\"MinusButton\").Pressed += OnMinusPressed;\nGetNode<Button>(\"ResetButton\").Pressed += OnResetPressed;",
      "[step] Write the minus method, which takes one away from the count and then shows the new number. || private void OnMinusPressed()\n{\n    count = count - 1;\n    label.Text = count.ToString();\n}",
      "[step] Write the reset method, which puts the count back to zero and then shows the new number. || private void OnResetPressed()\n{\n    count = 0;\n    label.Text = count.ToString();\n}",
      "[step] Build, press F5, and try all three buttons to check that each one changes the number. || Hammer  ->  F5",
      "",
      "That works, but look at your file and count how many times the same label line appears."
    ]},

    { title: "Make a Method of Your Own", s: [
      "Three copies of one line is the clue that a recipe is hiding in there, and the cure is to give that line its own name and call it from the three places.",
      "",
      "[walk] How do you move the repeated line into a method of your own?",
      "[step] Write a new method called UpdateLabel, and put the label line inside it, once. || private void UpdateLabel()\n{\n    label.Text = count.ToString();\n}",
      "[step] In each of the three click methods, delete the old label line and put a call to UpdateLabel in its place. || UpdateLabel();",
      "[step] Add one more call at the very end of the starting-up method, so the label shows the starting number as soon as the game opens. || UpdateLabel();",
      "[step] Check that your whole file looks like this, then build and press F5. || using Godot;\n\npublic partial class Main : Control\n{\n    private int count = 0;\n    private Label label;\n\n    public override void _Ready()\n    {\n        label = GetNode<Label>(\"CountLabel\");\n        GetNode<Button>(\"PlusButton\").Pressed += OnPlusPressed;\n        GetNode<Button>(\"MinusButton\").Pressed += OnMinusPressed;\n        GetNode<Button>(\"ResetButton\").Pressed += OnResetPressed;\n        UpdateLabel();\n    }\n\n    private void OnPlusPressed()\n    {\n        count = count + 1;\n        UpdateLabel();\n    }\n\n    private void OnMinusPressed()\n    {\n        count = count - 1;\n        UpdateLabel();\n    }\n\n    private void OnResetPressed()\n    {\n        count = 0;\n        UpdateLabel();\n    }\n\n    private void UpdateLabel()\n    {\n        label.Text = count.ToString();\n    }\n}",
      "",
      "The game behaves exactly the same as before, but the label line now lives in one place, so a change to it only has to happen once."
    ]},

    { title: "Try It Before You Trust It", s: [
      "You'll press F5 and run through a short test, and it helps to guess the answer first.",
      "Suppose you click the plus button twice, then click the minus button once, and finally click reset.",
      "The number would go from zero to one, to two, back down to one, and then to zero, and the label shows each stop along the way.",
      "If your game does the same, then all four of your methods are talking to the label correctly through the one you just wrote."
    ]},

    { title: "The Two Mistakes Everyone Makes", s: [
      "The first mistake is calling the method without the parentheses, so the line mentions UpdateLabel but never runs it, and the number changes in the box while the label sits still.",
      "The second is spelling the name differently in two places, because C# is {{case-sensitive}}, and UpdateLabel and Updatelabel look nearly identical to you but are completely different names to the computer.",
      "In both cases the fix is to read the line slowly, letter by letter, and compare it with the method where it was written.",
      "If the minus button takes your number below zero, that isn't a mistake, since you haven't told the game to stop it yet."
    ]},

    { title: "Write It Once", s: [
      "Go back to the question: how do you write a line once and still use it everywhere?",
      "You give it a name by wrapping it in a method of your own, and then you call that name, with its parentheses, from every place that needs it.",
      "Your clicker now has three buttons that all work, and one method that keeps the label honest.",
      "What it doesn't have yet is a way to make decisions, like stopping at zero or turning the number red, and that is the next lesson."
    ]}
  ],

  words: [
    ["Method", "A named recipe of code that you write once and can use as many times as you like.", 4 /*F:You already know a {{method}}*/],
    ["Call", "Using a method by writing its name, followed by parentheses and a semicolon.", 6 /*F:making a {{call}}*/],
    ["Case-sensitive", "Treating capital and small letters as different, so UpdateLabel and Updatelabel are two names.", 34 /*F:{{case-sensitive}}*/],
    ["Parentheses", "The pair of curved marks after a method's name, which tell the computer to actually run it.", 7 /*F:That pair of parentheses matters*/]
  ],

  vocabQuestions: [
    { q: "What is a <i>method</i>?",
      choices: [
        "A button on the screen",
        "A named recipe of code you can use many times",
        "A picture file",
        "A kind of number"
      ],
      right: 1, why: "A method is written once and called by name." },
    { q: "What does it mean to <i>call</i> a method?",
      choices: [
        "To phone someone about it",
        "To delete it",
        "To rename it",
        "To use it by writing its name with parentheses and a semicolon"
      ],
      right: 3, why: "A call runs the method." },
    { q: "What does <i>case-sensitive</i> mean?",
      choices: [
        "Capital and small letters count as different",
        "The code has to be in a case",
        "Only capital letters are allowed",
        "Spelling doesn't matter"
      ],
      right: 0, why: "UpdateLabel and Updatelabel are two different names." },
    { q: "What are the <i>parentheses</i> after a method's name for?",
      choices: [
        "They make the name look nicer",
        "They count the lines",
        "They tell the computer to actually run the method",
        "They end the line"
      ],
      right: 2, why: "Without them, the line only mentions the method." }
  ],

  questions: [
    { q: "Why is it a problem to have the same label line written three times?", find: [2] /*F:That might seem harmless at first*/,
      hint: "Read The Same Line, Three Times.",
      choices: [
        "It uses up all your memory",
        "It slows down the editor",
        "A later change has to be made in three places without missing one",
        "It makes the buttons smaller"
      ], right: 2,
      why: "Repeated lines are easy to fix in one place and miss in another." },

    { q: "What is a call?", find: [6] /*F:making a {{call}}*/,
      hint: "Read A Recipe With a Name.",
      choices: [
        "Writing the method for the first time",
        "Using a method by writing its name, then parentheses and a semicolon",
        "Deleting a method",
        "A message printed in the Output panel"
      ], right: 1,
      why: "A call is the name plus parentheses and a semicolon." },

    { q: "What happens if you write the method's name but leave off the parentheses?", find: [7] /*F:That pair of parentheses matters more*/,
      hint: "Read A Recipe With a Name.",
      choices: [
        "It runs twice",
        "It runs slower",
        "It runs faster",
        "It only mentions the method and never runs it"
      ], right: 3,
      why: "Without the parentheses the method is only named, not run." },

    { q: "Where does the new minus button's code get connected?", find: [17] /*F:Inside the starting-up method, below the plus button's connection*/,
      hint: "Look at the first step of Write the Two Click Methods.",
      choices: [
        "Inside the starting-up method, with the other connections",
        "In the Output panel",
        "In the FileSystem",
        "Inside the Inspector"
      ], right: 0,
      why: "Connections are made in the starting-up method, the same as the plus button." },

    { q: "After the tidy-up, how many places in the file set the label's text?", find: [24] /*F:put the label line inside it, once*/,
      hint: "Look at the first step of Make a Method of Your Own.",
      choices: [
        "Three",
        "Four",
        "None",
        "One, inside UpdateLabel"
      ], right: 3,
      why: "The label line lives only in UpdateLabel now." },

    { q: "Why does the starting-up method also call UpdateLabel at the end?", find: [26] /*F:Add one more call at the very end*/,
      hint: "Look at the third step of Make a Method of Your Own.",
      choices: [
        "To print a message",
        "So the label shows the starting number when the game opens",
        "To reset the scene",
        "To rename the label"
      ], right: 1,
      why: "Without it the label would show whatever was typed in the editor until the first click." },

    { q: "You click plus twice, minus once, then reset. What does the label show at the very end?", find: [30] /*F:Suppose you click the plus button twice*/,
      hint: "Read Try It Before You Trust It.",
      choices: [
        "2",
        "1",
        "0",
        "3"
      ], right: 2,
      why: "0, 1, 2, back to 1, then reset sets it to 0." },

    { q: "Your plus button changes the count, but the label never changes. You did write UpdateLabel. What is a good first thing to check?", find: [33] /*F:The first mistake is calling the method*/,
      hint: "Read The Two Mistakes Everyone Makes.",
      choices: [
        "Whether you used the parentheses when you called it",
        "Whether the label is the right color",
        "Whether you saved the picture",
        "Whether the scene is long enough"
      ], right: 0,
      why: "A call without parentheses never runs the method." },

    { q: "You wrote UpdateLabel when you made the method but Updatelabel when you called it. What happens?", find: [34] /*F:The second is spelling the name differently*/,
      hint: "C# is case-sensitive.",
      choices: [
        "It works because they look alike",
        "The computer treats them as two different names, so it shows an error",
        "The label turns red",
        "The buttons disappear"
      ], right: 1,
      why: "Capital letters matter, so those are two different names." }
  ],

  todo: { title: "What To Do Now", s: [
    "Open your Clicker project, click Main in the Scene dock, and add a MinusButton with its text set to a minus and a one, and a ResetButton with its text set to Reset.",
    "Open Main.cs and type the code yourself, don't copy it: connect the new buttons, write their click methods, then write UpdateLabel and call it from the places you used to set the label.",
    "Build, press F5, and check that the number starts at zero, that plus goes up, minus goes down, and reset returns it to zero.",
    "After that, work through the {c} word cards at the top of the page and the {q} questions about the lesson, with {v} more questions about those words, so {T} questions in all.",
    "If you get stuck on a question, tap Find It in the Story and read the line the page shows you, and if a call does nothing, look for the parentheses."
  ] },
};
