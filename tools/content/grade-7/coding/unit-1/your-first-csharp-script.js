/* coding/your-first-csharp-script
   Game Coding (elective, internal level 7) · Unit 1 (Your First Game Window), lesson 3.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-10-13. Written on Sonnet to the /teach-plan block in
   `plan` below and given the /natural pass. Paul has not read it. There is no book for
   this course. Sources: the videos listed in the Suggested Videos section (Microsoft
   Developer, Mina Pecheux, Brackeys), read for the teaching ORDER only, nothing copied.

   🚨 CODE LIVES ONLY IN [walk]/[step] WORK LINES (after the double bar). Sentences and
   questions name things in plain words, with a quoted short name only when unavoidable. */
'use strict';
module.exports = {
  id: "coding/your-first-csharp-script",
  slug: "your-first-csharp-script",
  title: "Your First C# Script",
  unit: "Game Coding · U1-L3",
  seq: { unit: 1, unitTitle: "Your First Game Window", n: 3 },

  plan: {
    objective: "Attach a C# script to Main, print a message to the Output panel from _Ready, and set the label's text from code.",
    markers: [
      "VIDEO (paraphrased), Microsoft Developer: a script is behavior attached to a node, and the class name has to match the file name.",
      "VIDEO (paraphrased), Brackeys: _Ready runs once when the node starts, and printing a message is the first way to see your code run.",
      "VIDEO (paraphrased), Mina Pecheux: build after changing C#, and watch the Output panel for messages and the bottom panel for errors.",
    ],
    method: "ATTACH, READ THE TEMPLATE, BUILD, RUN, WATCH THE OUTPUT. Attach a C# script to Main, read the template line by line, print one message, build, press F5, then use the same starting-up method to change the label's text from code.",
    exampleOnly: [
      "The words of the message and the word Ready are our own, so the skill is attaching a script and using the starting-up method, not that wording.",
    ],
    digitize: "Reading engine with four Watch It Worked walkthroughs (attach, read the template, first print, change the label) whose work lines carry the real code. Questions check what a line does, what to expect on screen, and how to spot the three common mistakes. The hands-on job is in Godot itself.",
    unclear: "",
  },
  natural: "2026-10-13",
  findsAt: 45,

  shelf: { grades: [7], subject: "Coding",
    blurb: "Write the first lines of code you've ever typed. Attach a script, print a message, and change what the label says from code.",
    contains: [
      "What a script is and how to attach one to a node",
      "The Godot template read line by line",
      "Four worked walkthroughs: attach, read, print, and change the label",
      "Four vocabulary cards, each with a check question",
      "The three mistakes everyone makes, named out loud",
    ] },
  back: { href: "/extras/electives/game-coding/", label: "Game Coding" },
  eyebrow: ["Game Coding", "U1-L3", "Your First Game Window"],
  dek: "Your button is a block that doesn't know what to do. Here's how you give it its first set of instructions.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will attach a C# script named Main.cs to the Main node, print a message from the starting-up method, build the project, read the message in the Output panel, and then change the label's text from code.",
      ]},
      { h: "Key Concepts", p: [
        "A script is a set of written instructions attached to a node. Godot calls the starting-up method once when the node enters the scene, so anything inside it runs one time when the game begins.",
        "The class name in the file has to match the file name exactly, so Main.cs holds a class named Main. The word partial has to be there too, and Godot's template already includes both.",
        "After changing any C# the project must be built, using the hammer button in the top right or Alt+B. Without a build, Godot keeps running the old code.",
      ]},
      { h: "Where Students Get Stuck", p: [
        "Leaving the language on GDScript, which is the default in the Attach Script window. The file then ends in .gd instead of .cs, and none of the C# lines will work.",
        "Forgetting to build after typing. The game runs, nothing changed, and it looks like the code is wrong when it just hasn't been built.",
        "Missing a semicolon at the end of a line, which shows a red underline and an error in the bottom panel. Every line that does something ends in one.",
      ]},
      { h: "Checking the Work", p: [
        "When this lesson is done, the Clicker project should have a file called Main.cs in the FileSystem, attached to the Main node, which shows a small script icon next to its name.",
        "Pressing F5 should show the message Hello from my first script! in the Output panel at the bottom, and the label should read 0 once it's been changed back.",
        "A parent can open Main.cs and compare it to the code in the last Watch It Worked, where the file has the print line and the label line inside the starting-up method.",
      ]},
      { h: "Suggested Videos", videos: [
        { id: "0Pf41YBedMk", title: "Introduction to Godot C# Essentials: A Complete Beginner's Guide: FULLCOURSE", channel: "Microsoft Developer",
          why: "Writing the first script starts at about 30:48 and the lifecycle methods start at 35:24.", start: 1848 },
        { id: "LOhfqjmasi0", title: "How to make a Video Game - Godot Beginner Tutorial", channel: "Brackeys",
          why: "The ready method and printing start at about 30:05. It uses GDScript, Godot's other language, so the typing differs but the ideas are the same.", start: 1805 },
        { id: "SwRsSC_K5Mo", title: "5 beginner tips for using C# in Godot 4!", channel: "Mina Pêcheux",
          why: "Short tips on building, class names and common C# snags in Godot." },
      ]},
      { h: "Key Vocabulary", vocab: true },
    ],
  },

  parts: [
    { title: "A Button That Doesn't Know What to Do", s: [
      "Last lesson you ended up with a number and a button, and when you clicked the button, nothing happened at all.",
      "That's because a node is only a block, and a block has no idea what you want from it unless somebody writes it down.",
      "Think of a robot toy that stands there with its batteries in, waiting, until you give it a list of moves.",
      "So how do you hand a node a list of moves, and how do you find out the list actually ran?"
    ]},

    { title: "A Recipe Clipped to a Node", s: [
      "A {{script}} is that list of moves, a set of written instructions that you clip onto a node, the way a recipe card gets clipped to the fridge.",
      "You write the script in a language called C#, which looks strange at first, but it's really just short sentences that each end with a special mark.",
      "Godot has a small number of named recipes, called methods, that it runs at set moments, and the one you'll use today runs exactly once, at the very start, when the node first appears in the game.",
      "Anything you put inside that starting-up {{method}} gets done one time as the game begins, which makes it the perfect place for a first test."
    ]},

    { title: "Attach a Script", s: [
      "You'll attach the script to Main, since Main is the base plate of the whole scene and a good home for the game's instructions.",
      "",
      "[walk] How do you attach a C# script to Main?",
      "[step] Right-click Main in the Scene dock and choose Attach Script. || Main  ->  right-click  ->  Attach Script",
      "[step] Look at the Language box, which starts out as GDScript, and change it to C#. || Language:  C#",
      "[step] Leave the path as it is, which should end in Main.cs, so the file takes the node's name. || Path:  res://Main.cs",
      "[step] Click Create, and Godot opens a new file full of text in the editor. || Create",
      "",
      "A little script icon should now sit next to Main in the Scene dock, which tells you the node has a recipe attached."
    ]},

    { title: "The Template, Line by Line", s: [
      "The file Godot gave you may look like a wall of strange words, but it only has four ideas in it, and each one fits on a single line.",
      "",
      "[walk] What do the lines in the template mean?",
      "[step] The first line says to borrow Godot's tools, the way you'd borrow a toolbox before starting a job. || using Godot;",
      "[step] The next line names the script, and its name has to match the file, so a script saved as Main.cs holds something called Main. || public partial class Main : Control",
      "[step] The end of that line says this script belongs to a Control node, and that's the kind of node Main is. || : Control",
      "[step] The curly braces are the box that the code lives in, one to open the box and one to close it. || {\n    ...\n}",
      "[step] Inside the box sits the starting-up method, which runs once when the game begins and is empty so far. || public override void _Ready()\n{\n}",
      "",
      "If your file also has gray notes and a second method, delete everything except the starting-up method so it matches the shape above."
    ]},

    { title: "Say Hello", s: [
      "The easiest way to know your code ran is to make it speak, and a {{print}} line sends a message to the Output panel at the bottom of the editor.",
      "",
      "[walk] How do you print a message and see it?",
      "[step] Click inside the empty braces of the starting-up method and type the print line yourself, one letter at a time, ending with a semicolon. || using Godot;\n\npublic partial class Main : Control\n{\n    public override void _Ready()\n    {\n        GD.Print(\"Hello from my first script!\");\n    }\n}",
      "[step] Build the project by clicking the hammer button in the top right or pressing Alt+B, because Godot won't see new C# until you do. || Hammer button  (or Alt+B)",
      "[step] Press F5 to play, then click the Output tab at the bottom of the editor. || F5\nBottom panel  ->  Output",
      "[step] Read the Output panel, where your message should be sitting on its own line. || Hello from my first script!",
      "",
      "Typing the code yourself matters, because your fingers learn the shapes of the words, and copy and paste teaches them nothing."
    ]},

    { title: "Change the Label from Code", s: [
      "A message in a panel is fun, but your players will never see it, so the next step is to reach out and change the label on the screen.",
      "To do that, your code has to find the label first, and the way it finds a node is by asking for it by name, which is why last lesson's spelling mattered.",
      "",
      "[walk] How do you change the label's text from code?",
      "[step] Under the print line, add a line that finds the node named CountLabel, says it's a Label, and sets its text. || GetNode<Label>(\"CountLabel\").Text = \"Ready!\";",
      "[step] Build with the hammer or Alt+B, then press F5, and the number in the window should now say Ready! instead of a zero. || Hammer  ->  F5\nWindow shows:  Ready!",
      "[step] Change the word Ready back to a zero, build again, and press F5 to make sure the label shows 0. || GetNode<Label>(\"CountLabel\").Text = \"0\";",
      "",
      "Put into words, that long line says to find the node called CountLabel, treat it as a Label, and set its text to whatever is in the quotes."
    ]},

    { title: "The Three Mistakes Everyone Makes", s: [
      "Almost every beginner hits the same three problems in this lesson, so it helps to know them before they happen.",
      "The first is leaving the language on GDScript when you attach the script, which gives you a file that ends in .gd and rejects every line of C#.",
      "The second is forgetting to build, so you type new code, press F5, and the game runs the old version while you wonder what you did wrong.",
      "The third is a missing semicolon, which is the little mark that ends a line the way a period ends a sentence, and without it you'll see a red underline and an error in the bottom panel."
    ]},

    { title: "How You Hand a Node Its Moves", s: [
      "Go back to the question: how do you hand a node a list of moves, and how do you find out they ran?",
      "You attach a script, put the moves inside the starting-up method, build the project, and press F5, and a message in the Output panel is your proof.",
      "Better still, your code can reach out and change something on the screen, which it just did when the zero turned into a word and back.",
      "The label still can't count, though, because it has nowhere to remember a number, and that's the next lesson."
    ]}
  ],

  words: [
    ["Script", "A set of written instructions attached to a node.", 4 /*F:A {{script}} is*/],
    ["Method", "A named set of instructions that runs at a certain moment, such as when the game starts.", 7 /*F:starting-up {{method}}*/],
    ["Print", "A line of code that sends a message to the Output panel so you can see your code ran.", 23 /*F:a {{print}} line*/],
    ["Build", "Turning your C# into something Godot can run, which you must do after every change.", 26 /*F:Build the project by clicking*/]
  ],

  vocabQuestions: [
    { q: "What is a <i>script</i>?",
      choices: [
        "A picture on the screen",
        "A set of written instructions attached to a node",
        "A movie about programmers",
        "The name of a button"
      ],
      right: 1, why: "A script is the list of instructions for a node." },
    { q: "What is a <i>method</i>?",
      choices: [
        "A type of node",
        "A kind of file",
        "A named set of instructions that runs at a certain moment",
        "A mistake in the code"
      ],
      right: 2, why: "A method is a named recipe of steps." },
    { q: "What does a <i>print</i> line do?",
      choices: [
        "It sends a message to the Output panel",
        "It makes a paper copy of your game",
        "It saves your scene",
        "It draws a picture"
      ],
      right: 0, why: "Printing shows you that your code ran." },
    { q: "What does it mean to <i>build</i> your project?",
      choices: [
        "To add a new node",
        "To turn your C# into something Godot can run",
        "To delete your scene",
        "To start a new project"
      ],
      right: 1, why: "You build after every change to your C#." }
  ],

  questions: [
    { q: "Why did the button do nothing in the last lesson?", find: [1] /*F:a node is only a block*/,
      hint: "Read A Button That Doesn't Know What to Do.",
      choices: [
        "It was broken",
        "No instructions had been written for it yet",
        "It was too small",
        "It needed a bigger font"
      ], right: 1,
      why: "A node is a block, and a script is what tells it what to do." },

    { q: "When does the starting-up method run?", find: [6] /*F:runs exactly once, at the very start*/,
      hint: "Read A Recipe Clipped to a Node.",
      choices: [
        "Every time you click a button",
        "Once, when the node first appears in the game",
        "Only when you press F8",
        "Over and over, forever"
      ], right: 1,
      why: "It runs one time when the node enters the scene." },

    { q: "In the Attach Script window, what must the language box say?", find: [11] /*F:Look at the Language box*/,
      hint: "Look at the second step of Attach a Script.",
      choices: [
        "GDScript",
        "Python",
        "C#",
        "Any of them, they're the same"
      ], right: 2,
      why: "The box starts on GDScript, and it has to be changed to C#." },

    { q: "The template line that names the script has to match what?", find: [18] /*F:The next line names the script*/,
      hint: "Look at the second step of The Template, Line by Line.",
      choices: [
        "The name of the file, so Main.cs holds Main",
        "The name of the project",
        "The number of lines in the file",
        "The date"
      ], right: 0,
      why: "A script saved as Main.cs holds something called Main." },

    { q: "Your code prints a message. Where do you look for it?", find: [27] /*F:Press F5 to play, then click the Output tab*/,
      hint: "Look at the third step of Say Hello.",
      choices: [
        "In the gray game window",
        "In the Scene dock",
        "In the Output panel at the bottom",
        "In the Inspector"
      ], right: 2,
      why: "Printed messages show up in the Output panel." },

    { q: "You type new code, press F5, and the game acts like nothing changed. What did you most likely forget?", find: [26] /*F:Build the project by clicking the hammer*/,
      hint: "Read Say Hello.",
      choices: [
        "To rename the node",
        "To close Godot",
        "To make the font bigger",
        "To build the project"
      ], right: 3,
      why: "Godot doesn't see new C# until you build." },

    { q: "Your code finds the node called CountLabel and sets its text to the word Ready!. What will the number in the window say after you press F5?", find: [33] /*F:Under the print line, add a line*/,
      hint: "Look at the first two steps of Change the Label from Code.",
      choices: [
        "Ready!",
        "0",
        "Nothing, the label disappears",
        "CountLabel"
      ], right: 0,
      why: "The code replaces the text with Ready!." },

    { q: "What does the long label line say, put into words?", find: [36] /*F:Put into words*/,
      hint: "Read the last line of Change the Label from Code.",
      choices: [
        "Delete the node called CountLabel",
        "Find the node called CountLabel, treat it as a Label, and set its text",
        "Print the word CountLabel",
        "Rename the label"
      ], right: 1,
      why: "It finds the node by name and changes its text." },

    { q: "You forget the semicolon at the end of a line. What do you see?", find: [40] /*F:The third is a missing semicolon*/,
      hint: "Read The Three Mistakes Everyone Makes.",
      choices: [
        "A red underline and an error in the bottom panel",
        "Nothing, the game runs fine",
        "The label turns blue",
        "Godot closes by itself"
      ], right: 0,
      why: "Without the mark that ends the line, the code shows an error." }
  ],

  todo: { title: "What To Do Now", s: [
    "Open your Clicker project, right-click Main, choose Attach Script, change the language to C#, and click Create so you have a file called Main.cs.",
    "Type the code yourself, don't copy and paste it, so your fingers learn it: the print line first, then build, then F5, and check that your message shows in the Output panel.",
    "Add the line that changes the label to say Ready!, build, press F5 and check that the window shows it, then change it back to a zero and check once more with F5.",
    "After that, work through the {c} word cards at the top of the page and the {q} questions about the lesson, with {v} more questions about those words, so {T} questions in all.",
    "If you get stuck on a question, tap Find It in the Story and read the line the page shows you, and if you see a red underline in your code, look for a missing semicolon."
  ] },
};
