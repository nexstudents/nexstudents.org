/* coding/set-up-and-press-play
   Game Coding (elective, internal level 7) · Unit 1 (Your First Game Window), lesson 1.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-10-13. Written on Sonnet to the /teach-plan block in
   `plan` below and given the /natural pass. Paul has not read it. There is no book for
   this course. Sources: the videos listed in the Suggested Videos section (Godot Basics,
   Microsoft Developer, Brackeys), read for the teaching ORDER only, nothing copied.

   🚨 NO CODE YET. This lesson has none. Where code does appear in later lessons it lives
   only in [walk]/[step] work lines (the part after the double bar), which the engine
   shows in a code font and does not read aloud. */
'use strict';
module.exports = {
  id: "coding/set-up-and-press-play",
  slug: "set-up-and-press-play",
  title: "Set Up and Press Play",
  unit: "Game Coding · U1-L1",
  seq: { unit: 1, unitTitle: "Your First Game Window", n: 1 },

  plan: {
    objective: "Install Godot .NET and the .NET SDK (or open them), create the Clicker project, save a scene with a Control root named Main, and run it with F5.",
    markers: [
      "VIDEO (paraphrased), Godot Basics: standard Godot can't run C#, so you download the .NET version, and the .NET SDK has to be installed first.",
      "VIDEO (paraphrased), Microsoft Developer: tour the editor in four areas (scene tree, file list, viewport, inspector) before touching anything.",
      "VIDEO (paraphrased), Brackeys: press play early, accept the main scene prompt the first time, and stop the game from the editor.",
    ],
    method: "DO IT IN GODOT ONE CLICK AT A TIME, THEN PROVE IT WORKS. Download the .NET version of Godot and the .NET SDK, create the project, make a scene with a Control root named Main, save it, press F5, and see the empty window.",
    exampleOnly: [
      "The project name Clicker is our own, so the skill is making a project and running it, not that exact name.",
    ],
    digitize: "Reading engine with three Watch It Worked walkthroughs (downloads, create the project, make the window), no code, work lines that name the exact buttons. Questions check which download, what each tool is for, and what F5 does. The hands-on job is in Godot itself.",
    unclear: "",
  },
  natural: "2026-10-13",
  findsAt: 42,

  shelf: { grades: [7], subject: "Coding",
    blurb: "Every game starts as an empty window. Download the tools, make a project, and press Play for the very first time.",
    contains: [
      "The two free downloads you need and the one catch that trips everybody up",
      "A tour of the four areas of the Godot editor",
      "Three worked walkthroughs: downloads, a new project, and your first window",
      "Five vocabulary cards, each with a check question",
      "A hands-on job in Godot that ends with a window on your screen",
    ] },
  back: { href: "/extras/electives/game-coding/", label: "Game Coding" },
  eyebrow: ["Game Coding", "U1-L1", "Your First Game Window"],
  dek: "Every game you've ever played began as an empty gray window. Here's how to get yours on the screen, one click at a time.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will download and open the .NET version of Godot along with the .NET SDK, create a project called Clicker, build a scene whose top piece is named Main, save it as main.tscn, and run it with F5 to see an empty window.",
      ]},
      { h: "Key Concepts", p: [
        "Godot is the program games are built in, C# is the language the code is written in, and the .NET SDK is the helper that lets the computer run C#. All three are free.",
        "The editor has four areas worth knowing by name: the Scene dock on the top left, the FileSystem on the bottom left, the viewport in the middle, and the Inspector on the right.",
        "A scene is saved as a file, and its first node is called the root. Pressing F5 runs the project, and the first time it asks which scene is the main one.",
      ]},
      { h: "Where Students Get Stuck", p: [
        "Downloading the standard Godot instead of the .NET version. It opens and runs, but C# won't work later, and the fix is to download the .NET one.",
        "Skipping the .NET SDK. Godot opens fine without it, and the trouble only shows up in Lesson 3 when the code won't build.",
        "Opening the program with console in its name. It works, but it shows a second black window that confuses beginners.",
      ]},
      { h: "Checking the Work", p: [
        "When this lesson is done, a project called Clicker should exist on the computer, with one scene saved as main.tscn whose top node is a Control named Main.",
        "Pressing F5 should open a plain gray window with nothing in it, and F8 or the window's close button should stop it. If the window opens, everything is working.",
        "There's no code to compare yet. A parent can look at the Scene dock and check that the top node says Main.",
      ]},
      { h: "Setup Links", p: [
        "Godot for Windows (choose the .NET version): https://godotengine.org/download/windows/",
        "The .NET SDK, version 8 or newer: https://dotnet.microsoft.com/download/dotnet/8.0",
      ]},
      { h: "Suggested Videos", videos: [
        { id: "-PXmqyfIObg", title: "How to Use C# in Godot - An Easy Setup", channel: "Godot Basics",
          why: "A three minute walkthrough of exactly the two downloads this lesson asks for." },
        { id: "0Pf41YBedMk", title: "Introduction to Godot C# Essentials: A Complete Beginner's Guide: FULLCOURSE", channel: "Microsoft Developer",
          why: "The install starts about a minute and a half in, and the editor tour starts at 7:23. It's a long course, so watch just those parts.", start: 99 },
        { id: "LOhfqjmasi0", title: "How to make a Video Game - Godot Beginner Tutorial", channel: "Brackeys",
          why: "A friendly look at nodes and scenes. It uses GDScript, Godot's other language, instead of C#, so the typing differs but the editor is the same.", start: 332 },
      ]},
      { h: "Key Vocabulary", vocab: true },
    ],
  },

  parts: [
    { title: "Every Game Starts as an Empty Window", s: [
      "Every game you've ever played, from the tiniest phone puzzle to the biggest open world, began its life as an empty gray window with nothing in it.",
      "Somebody opened a program, clicked a few buttons, pressed Play, and stared at that blank rectangle, the same way you're about to.",
      "Today you'll get the tools onto your computer and put that window on your screen, and by the end of this semester you'll fill one with a game you built yourself.",
      "So what do you actually need on your computer before you write the first line of code?"
    ]},

    { title: "Two Free Downloads", s: [
      "Godot is the program you'll build your games in, a free {{game engine}} that gives you a place to arrange pieces, a place to write code, and a Play button.",
      "You'll write your code in a language called C#, and a computer can't read C# on its own, so it needs a helper called the {{SDK}} to turn your words into something it can run.",
      "That makes two downloads, Godot and the SDK, and both are free and come from official websites, which the Teacher Notes at the bottom of the page list for your parent.",
      "There's one catch that trips up almost every beginner, because Godot comes in two versions and only one of them can run C#."
    ]},

    { title: "Get the Right Godot", s: [
      "Here are the real clicks for getting everything onto your computer, and if a parent already installed these for you, you can skip ahead and just open Godot.",
      "",
      "[walk] How do you download Godot and the SDK?",
      "[step] Go to the Godot download page for Windows and click the button that says .NET, not the plain Godot button. || godotengine.org/download/windows\nButton: Godot Engine - .NET",
      "[step] Next, open the Microsoft download page for the SDK and install version 8 or newer, clicking through the installer until it finishes. || dotnet.microsoft.com/download/dotnet/8.0\nChoose: SDK 8.0 for Windows x64",
      "[step] Unzip the Godot file you downloaded, which gives you a folder with two programs in it. || Godot_v4.x_mono_win64.exe\nGodot_v4.x_mono_win64_console.exe",
      "[step] Open the one that does not say console at the end, because the other one pops up a second black window you don't need. || Open: Godot_v4.x_mono_win64.exe",
      "",
      "If a window full of buttons and an empty list of projects opened up, then both downloads worked."
    ]},

    { title: "Your First Project", s: [
      "That list of projects is called the {{Project}} Manager, and a project is simply one game's folder, holding everything that game needs.",
      "",
      "[walk] How do you make a project?",
      "[step] Click the Create button at the top of the Project Manager. || Project Manager  ->  Create",
      "[step] Type the project name, and call this one Clicker, because that's the little game you'll build over the next eight lessons. || Project Name:  Clicker",
      "[step] Pick a folder you'll remember, such as a new one on your Desktop or in Documents. || Project Path:  Documents\\Godot",
      "[step] Leave the other settings the way they are and click Create & Edit. || Create & Edit",
      "",
      "A window with a lot going on will open, and it looks scarier than it is."
    ]},

    { title: "Four Areas to Know", s: [
      "Think of the editor as a workshop with four stations, and for now you only need to know where each one is and what it's for.",
      "On the top left is the Scene dock, which lists the pieces of whatever you're building, and under it on the bottom left is the FileSystem, which lists the files in your project.",
      "The big space in the middle is the viewport, where you see what you're making, and on the right sits the Inspector, which shows the settings of whichever piece you've clicked.",
      "Right now the Scene dock is nearly empty, which makes sense, because you haven't made anything yet."
    ]},

    { title: "Make the Window", s: [
      "A {{scene}} is a group of pieces saved together as one file, and every scene needs a first piece that everything else sits on, called the {{root node}}.",
      "",
      "[walk] How do you make your first scene and run it?",
      "[step] In the Scene dock, click the button that says User Interface, which makes a piece called Control to be your root. || Scene dock  ->  User Interface\nCreates: Control",
      "[step] Double-click the name Control and rename it Main, so the top of your scene tree reads Main. || Control  ->  Main",
      "[step] Save the scene with Ctrl+S and name the file main.tscn, which saves it inside your project. || Ctrl+S\nFile name:  main.tscn",
      "[step] Press F5 to play, and when Godot asks you to choose a main scene, click Select Current. || F5\nSelect Current",
      "[step] A plain gray window opens, and that window is your game, so stop it by pressing F8 or closing it. || F8",
      "",
      "That gray rectangle doesn't look like much, but you made it, and every lesson from here on adds to it."
    ]},

    { title: "The Mistake Everyone Makes", s: [
      "The most common mistake in this whole course happens in the first ten minutes, and it's downloading the wrong Godot.",
      "The plain version is the first big button on the website, it opens and runs and looks exactly the same, and you won't find out it's wrong until Lesson 3, when the C# code refuses to build.",
      "The fix is easy but annoying: go back to the download page and click the button that says .NET.",
      "The second mistake works the same way, because Godot opens fine without the SDK, and you only discover it's missing when your first script won't run."
    ]},

    { title: "The Window Is the Start", s: [
      "Go back to the question at the top: what do you need before you write the first line of code?",
      "You need Godot in its .NET version, the SDK that lets the computer run C#, and a project with one saved scene that opens when you press F5.",
      "That's everything, and it explains why a blank window is a proud moment, since it means all of those pieces are working together.",
      "Next lesson you'll start putting things inside that window, beginning with a number."
    ]}
  ],

  words: [
    ["Game engine", "A program for building games that handles the drawing, the sound and the Play button so you can focus on your game.", 4 /*F:a free {{game engine}}*/],
    ["SDK", "A set of tools that lets your computer understand and run a programming language such as C#.", 5 /*F:called the {{SDK}}*/],
    ["Project", "The folder that holds everything for one game, which Godot lists in its Project Manager.", 15 /*F:called the {{Project}} Manager*/],
    ["Scene", "A group of pieces saved together as one file, such as main.tscn.", 26 /*F:A {{scene}} is*/],
    ["Root node", "The first piece in a scene, which every other piece sits on, and ours is called Main.", 26 /*F:A {{scene}} is*/]
  ],

  vocabQuestions: [
    { q: "What is a <i>game engine</i>?",
      choices: [
        "A program for building games, with a place to arrange pieces and a Play button",
        "The motor inside a game console",
        "A list of cheat codes",
        "A website that sells games"
      ],
      right: 0, why: "Godot is a game engine." },
    { q: "What does the <i>SDK</i> do for you?",
      choices: [
        "It draws the pictures in your game",
        "It lets your computer understand and run C#",
        "It saves your scene as a file",
        "It makes your computer faster"
      ],
      right: 1, why: "The SDK is the helper that runs C#." },
    { q: "What is a <i>project</i> in Godot?",
      choices: [
        "A school assignment",
        "One button in the editor",
        "The folder that holds everything for one game",
        "The gray window that opens when you press F5"
      ],
      right: 2, why: "A project is one game's folder." },
    { q: "What is a <i>scene</i>?",
      choices: [
        "A group of pieces saved together as one file",
        "A part of a movie",
        "A mistake in your code",
        "The black console window"
      ],
      right: 0, why: "A scene is saved as a file, such as main.tscn." },
    { q: "What is the <i>root node</i>?",
      choices: [
        "The last piece in a scene",
        "The first piece in a scene, which everything else sits on",
        "A piece that only holds code",
        "The name of the project"
      ],
      right: 1, why: "The root is the first piece, and ours is Main." }
  ],

  questions: [
    { q: "You plan to write your game in C#. Which version of Godot do you download?", find: [10] /*F:click the button that says .NET*/,
      hint: "Read Get the Right Godot.",
      choices: [
        "The plain Godot, because it's the first button",
        "The .NET version",
        "Any version works the same",
        "The one with the smallest file"
      ], right: 1,
      why: "Only the .NET version can run C#." },

    { q: "What is the SDK for?", find: [5] /*F:it needs a helper called the*/,
      hint: "Read Two Free Downloads.",
      choices: [
        "It lets your computer run C#",
        "It draws your pictures",
        "It speeds up your internet",
        "It saves your scenes"
      ], right: 0,
      why: "A computer can't read C# alone, so the SDK is the helper." },

    { q: "Your Godot folder has two programs in it. Which one should you open?", find: [13] /*F:Open the one that does not say console*/,
      hint: "Look for the word console.",
      choices: [
        "Either one, they're identical",
        "The one that says console at the end",
        "The one that does not say console",
        "Neither, you open the folder itself"
      ], right: 2,
      why: "The console one adds a second black window you don't need." },

    { q: "Which area of the editor lists the pieces of what you're building?", find: [23] /*F:On the top left is the Scene dock*/,
      hint: "Read Four Areas to Know.",
      choices: [
        "The Inspector on the right",
        "The viewport in the middle",
        "The FileSystem on the bottom left",
        "The Scene dock on the top left"
      ], right: 3,
      why: "The Scene dock shows the pieces." },

    { q: "In the Make the Window steps, what do you rename the Control piece?", find: [29] /*F:Double-click the name Control*/,
      hint: "Look at the second step.",
      choices: [
        "Main",
        "Clicker",
        "Window",
        "Root"
      ], right: 0,
      why: "The root of your scene is named Main." },

    { q: "You press F5 for the first time and Godot asks which scene is the main one. What do you do?", find: [31] /*F:Press F5 to play*/,
      hint: "Read the fourth step of Make the Window.",
      choices: [
        "Click Select Current",
        "Close Godot",
        "Delete the scene",
        "Press F8"
      ], right: 0,
      why: "Select Current tells Godot to use the scene you have open." },

    { q: "You press F5 and see a plain gray window with nothing in it. What does that mean?", find: [32] /*F:A plain gray window opens*/,
      hint: "Read the last step of Make the Window.",
      choices: [
        "Something broke",
        "You downloaded the wrong Godot",
        "The game is running, and it's empty because you haven't added anything yet",
        "The SDK is missing"
      ], right: 2,
      why: "The window is your game, and so far it has nothing in it." },

    { q: "A friend downloads the plain Godot, and Play works fine. What problem is waiting for him later?", find: [34] /*F:downloading the wrong Godot*/,
      hint: "Read The Mistake Everyone Makes.",
      choices: [
        "His gray window will be the wrong color",
        "Nothing, plain Godot runs everything",
        "He can't save scenes",
        "C# code won't build"
      ], right: 3,
      why: "The plain version can't run C#, and he finds out when his first script won't build." },

    { q: "What key stops your game when it's running?", find: [32] /*F:stop it by pressing F8*/,
      hint: "Read the last step of Make the Window.",
      choices: [
        "F5",
        "F8",
        "Ctrl+S",
        "Escape on the keyboard only"
      ], right: 1,
      why: "F5 plays, and F8 stops." }
  ],

  todo: { title: "What To Do Now", s: [
    "Time to do it for real, so open Godot on your computer, and if your parent already installed it, just double-click the program that doesn't say console.",
    "Create a project named Clicker, click User Interface to make the root, rename it Main, and press Ctrl+S to save it as main.tscn.",
    "Press F5 and check that a plain gray window opens, then stop it with F8 and look at the top of your Scene dock to be sure it says Main.",
    "After that, work through the {c} word cards at the top of the page and the {q} questions about the lesson, with {v} more questions about those words, so {T} questions in all.",
    "If you get stuck on a question, tap Find It in the Story and read the line the page shows you, and if Godot misbehaves, ask your parent to open the Teacher Notes."
  ] },
};
