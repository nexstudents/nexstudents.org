/* coding/nodes-a-number-on-the-screen
   Game Coding (elective, internal level 7) · Unit 1 (Your First Game Window), lesson 2.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-10-13. Written on Sonnet to the /teach-plan block in
   `plan` below and given the /natural pass. Paul has not read it. There is no book for
   this course. Sources: the videos listed in the Suggested Videos section (Microsoft
   Developer, Brackeys), read for the teaching ORDER only, nothing copied.

   🚨 NO CODE in sentences. Scene trees appear as text in [step] work lines only. */
'use strict';
module.exports = {
  id: "coding/nodes-a-number-on-the-screen",
  slug: "nodes-a-number-on-the-screen",
  title: "Nodes: A Number on the Screen",
  unit: "Game Coding · U1-L2",
  seq: { unit: 1, unitTitle: "Your First Game Window", n: 2 },

  plan: {
    objective: "Add child nodes to the scene (a Label and a Button), set their properties in the Inspector, and explain what a node and a scene are.",
    markers: [
      "VIDEO (paraphrased), Brackeys: a game is built from nodes, each with one job, and a scene is a bundle of nodes saved as a file.",
      "VIDEO (paraphrased), Microsoft Developer: the scene tree runs top to bottom, the first node is the root, and the Inspector shows the properties of the selected node.",
    ],
    method: "BUILDING BLOCKS. Each node is one block with one job, the scene is the model you build from them, and Main is the base plate. Select Main first, add a child node, rename it, then change its properties in the Inspector.",
    exampleOnly: [
      "The font size 64 and the text on the button are our own choices, so the skill is adding a node and changing a property, not those numbers.",
    ],
    digitize: "Reading engine with three Watch It Worked walkthroughs (add the label, style it, add the button) whose work lines show the scene tree as text. Questions check what a node is, where to click, and what the tree should look like. The hands-on job is in Godot itself.",
    unclear: "",
  },
  natural: "2026-10-13",
  findsAt: 44,

  shelf: { grades: [7], subject: "Coding",
    blurb: "A game is built from small pieces called nodes. Add a label that shows a number and a button, and learn what a scene really is.",
    contains: [
      "The building-block picture of nodes and scenes",
      "Three worked walkthroughs: add a label, style it in the Inspector, add a button",
      "Four vocabulary cards, each with a check question",
      "The most common beginner mistake, named out loud",
      "A hands-on job in Godot that puts a number and a button on the screen",
    ] },
  back: { href: "/extras/electives/game-coding/", label: "Game Coding" },
  eyebrow: ["Game Coding", "U1-L2", "Your First Game Window"],
  dek: "Every score, every health bar, every button you've ever tapped was a small piece with one job. Here's how you build with them.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will add a Label named CountLabel and a Button named PlusButton to the Clicker scene as children of Main, set their properties in the Inspector, and explain in their own words what a node and a scene are.",
      ]},
      { h: "Key Concepts", p: [
        "A node is one piece of a game with one job, such as showing text or being a button. A scene is a group of nodes saved together as a file.",
        "A child node sits under another node in the Scene dock. Selecting Main before adding a node makes the new one a child of Main.",
        "A property is a setting on a node, and the Inspector on the right is where properties are changed.",
      ]},
      { h: "Where Students Get Stuck", p: [
        "Adding the new node while the Label is selected instead of Main, which tucks the button inside the label. The fix is to drag it up onto Main, or delete it and select Main first.",
        "Not seeing the Font Size setting, because it is hidden under Theme Overrides and then Font Sizes. Searching the Inspector for the word size also finds it.",
        "Expecting the button to do something. Clicking it does nothing yet, and the next two lessons are what make it work.",
      ]},
      { h: "Checking the Work", p: [
        "When this lesson is done, the Scene dock should show Main at the top with two children under it, CountLabel and PlusButton, spelled and capitalized exactly that way.",
        "Pressing F5 should open the window with a large 0 near the middle and a button underneath it. Clicking the button changes nothing yet, which is correct.",
        "A parent can open the Scene dock and compare it to the tree shown in the last Watch It Worked.",
      ]},
      { h: "Suggested Videos", videos: [
        { id: "0Pf41YBedMk", title: "Introduction to Godot C# Essentials: A Complete Beginner's Guide: FULLCOURSE", channel: "Microsoft Developer",
          why: "The scenes and nodes section starts at about 12:20 and shows the same editor this lesson uses.", start: 740 },
        { id: "LOhfqjmasi0", title: "How to make a Video Game - Godot Beginner Tutorial", channel: "Brackeys",
          why: "A clear explanation of nodes versus scenes at about 5:30. It uses GDScript, Godot's other language, but the nodes work the same way.", start: 332 },
      ]},
      { h: "Key Vocabulary", vocab: true },
    ],
  },

  parts: [
    { title: "The Number You Always Watch", s: [
      "Open almost any game and the first thing your eyes find is a number, whether it's a score in the corner, a timer counting down, or the amount of health you have left.",
      "That number sits on the screen all game long, and it changes every time something happens, which is exactly what makes it worth watching.",
      "Today you'll put a number of your own on the screen, along with a button that will one day change it.",
      "But what is a number on a screen made of, and where does it live inside a game?"
    ]},

    { title: "Blocks With One Job", s: [
      "Picture a box of building blocks, where every block is a different shape and each one does a single thing, like a wheel, a window or a flat base plate.",
      "In Godot, those blocks are called {{nodes}}, and one node shows text, another is a button you can click, and another counts time, but none of them tries to do everything.",
      "A scene is the model you build from the blocks, a group of nodes snapped together and saved as one file, and the base plate everything sits on is the root, which in your game is Main.",
      "Any node that sits under another one is its {{child node}}, so a button sitting on Main is a child of Main."
    ]},

    { title: "Add a Label", s: [
      "The block that shows words and numbers on the screen is called a Label, so that's the one to add first.",
      "",
      "[walk] How do you add a Label to your scene?",
      "[step] In the Scene dock, click Main so it's highlighted, because the new node becomes a child of whichever node is selected. || Scene dock  ->  click  Main",
      "[step] Click the plus button at the top of the Scene dock, or press Ctrl+A, to add a child node. || Scene dock  ->  +\nor  Ctrl+A",
      "[step] Type Label into the search box, click the Label that appears, and press Create. || Search:  Label\nCreate",
      "[step] Rename the new node by double-clicking it and typing CountLabel, with a capital C and a capital L. || Label  ->  CountLabel\nMain\n    CountLabel",
      "",
      "The label is there now, but it says Label, and that isn't the number you wanted."
    ]},

    { title: "Properties Live in the Inspector", s: [
      "Every node has settings, and each setting is called a {{property}}, such as what the text says, how big it is, and where it sits on the screen.",
      "The place you change them is the {{Inspector}} on the right side of the editor, which always shows the properties of whichever node you've clicked in the Scene dock.",
      "Click a different node and the Inspector changes to match, which is a good way to see how each kind of node is different.",
      "With the label selected, you have three properties to change: the words, the size, and the position."
    ]},

    { title: "Make the Number Big", s: [
      "Here are the three changes, and each one happens in the Inspector while CountLabel is still selected.",
      "",
      "[walk] How do you turn the label into a big, centered number?",
      "[step] Find the Text property and change it to a zero, since your count starts at nothing. || Inspector  ->  Text:  0",
      "[step] Scroll down to Theme Overrides, open Font Sizes, and set Font Size to sixty-four so the number is easy to see. || Theme Overrides  ->  Font Sizes\nFont Size:  64",
      "[step] Open Layout at the top of the Inspector, then Anchors Preset, and choose Center to put the number in the middle of the window. || Layout  ->  Anchors Preset  ->  Center",
      "",
      "A large zero should now be sitting in the middle of the viewport, and that's the first thing you've built."
    ]},

    { title: "Add a Button", s: [
      "A button is another block with its own job, and it goes on the scene the same way the label did.",
      "",
      "[walk] How do you add a button under the number?",
      "[step] Click Main in the Scene dock again, so the button becomes a child of Main and not of the label. || Scene dock  ->  click  Main",
      "[step] Add a child node, search for Button, and press Create. || Ctrl+A  ->  Search:  Button  ->  Create",
      "[step] Rename it PlusButton, and change its Text property to a plus sign and a one. || Button  ->  PlusButton\nText:  +1",
      "[step] Drag the button in the viewport until it sits just under the number, and check that your Scene dock matches this tree. || Main\n    CountLabel\n    PlusButton",
      "",
      "Press Ctrl+S to save, because you'll be adding to this scene in every lesson from now on."
    ]},

    { title: "Press Play, and Nothing Happens", s: [
      "Press F5 now and you'll see your big zero with a button under it, and that part works.",
      "Then click the button, and nothing happens at all, which looks like a bug and isn't one.",
      "A node can sit on the screen without knowing what to do, because the button is only a block, and the instructions that tell it what to do come from code.",
      "Writing that code is the job of the next two lessons, so for today, a number and a button that don't do anything yet is exactly the right result."
    ]},

    { title: "The Mistake Everyone Makes", s: [
      "The most common slip in this lesson is adding the second node while the first one is still selected.",
      "When you add a node, Godot makes it a child of whichever node is highlighted, so if CountLabel is still selected, your button ends up tucked inside the label.",
      "You'll spot it in the Scene dock, because the button sits further to the right than the label, with the label sitting above it like a parent.",
      "The fix is to drag the button up onto Main, or delete it and click Main before you add it again."
    ]},

    { title: "What a Number on the Screen Is Made Of", s: [
      "Go back to the question: what is a number on a screen made of, and where does it live in a game?",
      "It lives in a node, a block whose one job is to show text, and the Inspector holds the settings that decide what it says and how big it looks.",
      "That node sits in a scene, under a root, next to other blocks like your button, and you can see the whole arrangement in the Scene dock.",
      "Right now the label only shows a zero, so next lesson you'll attach your first script and make the screen change by itself."
    ]}
  ],

  words: [
    ["Node", "One piece of a game with one job, such as showing text or being a button.", 5 /*F:are called {{nodes}}*/],
    ["Child node", "A node that sits under another node in the Scene dock.", 7 /*F:{{child node}}*/],
    ["Property", "A setting on a node, such as what its text says or how big it is.", 15 /*F:called a {{property}}*/],
    ["Inspector", "The panel on the right of the editor where you change the properties of the selected node.", 16 /*F:{{Inspector}} on the right*/]
  ],

  vocabQuestions: [
    { q: "What is a <i>node</i>?",
      choices: [
        "One piece of a game with one job",
        "A type of file",
        "The gray window when the game runs",
        "A mistake in your project"
      ],
      right: 0, why: "A node is a single block with a single job." },
    { q: "What is a <i>child node</i>?",
      choices: [
        "A node made by a young programmer",
        "A node that sits under another node in the Scene dock",
        "A node that only shows pictures",
        "A node you haven't saved yet"
      ],
      right: 1, why: "A child sits under its parent node." },
    { q: "What is a <i>property</i>?",
      choices: [
        "A folder of files",
        "A scene saved to disk",
        "A setting on a node, such as its text or its size",
        "A button on the keyboard"
      ],
      right: 2, why: "Properties are a node's settings." },
    { q: "What is the <i>Inspector</i>?",
      choices: [
        "The panel on the right where you change a node's properties",
        "The button that runs your game",
        "The list of files in your project",
        "The gray window you see after pressing F5"
      ],
      right: 0, why: "The Inspector shows the properties of the selected node." }
  ],

  questions: [
    { q: "Which picture best describes a node?", find: [5] /*F:In Godot, those blocks are called*/,
      hint: "Read Blocks With One Job.",
      choices: [
        "A building block with one job",
        "A whole finished game",
        "A page of code",
        "A picture file"
      ], right: 0,
      why: "A node is a single block that does one thing." },

    { q: "What is a scene?", find: [6] /*F:is the model you build from the blocks*/,
      hint: "Read Blocks With One Job.",
      choices: [
        "One button on the screen",
        "A group of nodes saved together as a file",
        "A setting in the Inspector",
        "The window that opens when the game runs"
      ], right: 1,
      why: "A scene is nodes snapped together and saved as one file." },

    { q: "You want your new Label to be a child of Main. What do you do before you add it?", find: [10] /*F:click Main so it's highlighted*/,
      hint: "Look at the first step of Add a Label.",
      choices: [
        "Press F5",
        "Open the Inspector",
        "Save the scene",
        "Click Main in the Scene dock so it's highlighted"
      ], right: 3,
      why: "A new node becomes a child of the node that is selected." },

    { q: "Where do you change what a label says?", find: [16] /*F:The place you change them is the*/,
      hint: "Read Properties Live in the Inspector.",
      choices: [
        "In the Inspector, using the Text property",
        "In the FileSystem",
        "By pressing F8",
        "By deleting the node"
      ], right: 0,
      why: "The Text property is a setting, and settings live in the Inspector." },

    { q: "What did choosing Center in the Anchors Preset do?", find: [23] /*F:Open Layout at the top of the Inspector*/,
      hint: "Look at the last step of Make the Number Big.",
      choices: [
        "It made the number bigger",
        "It put the number in the middle of the window",
        "It changed the number to zero",
        "It renamed the label"
      ], right: 1,
      why: "The Center anchor places the node in the middle of the window." },

    { q: "Look at this scene tree: Main, then CountLabel under it, then PlusButton under it at the same level. Which node is the root?", find: [30] /*F:check that your Scene dock matches this tree*/,
      hint: "The root is the first node, the one everything else sits on.",
      choices: [
        "PlusButton",
        "CountLabel",
        "Main",
        "There isn't one"
      ], right: 2,
      why: "Main is at the top, and the other two are its children." },

    { q: "You press F5 and click the +1 button, and the number stays at zero. What does that tell you?", find: [33] /*F:Then click the button, and nothing happens*/,
      hint: "Read Press Play, and Nothing Happens.",
      choices: [
        "Your project is broken",
        "You need to restart Godot",
        "The label was deleted",
        "That's expected, because no code tells the button what to do yet"
      ], right: 3,
      why: "The button is only a block, and the code that makes it work comes later." },

    { q: "Your button shows up tucked inside the label in the Scene dock. What most likely went wrong?", find: [37] /*F:When you add a node, Godot makes it a child*/,
      hint: "Read The Mistake Everyone Makes.",
      choices: [
        "You added it while the label was still selected",
        "You forgot to save",
        "You typed the wrong name",
        "The font size was too big"
      ], right: 0,
      why: "A new node becomes a child of whichever node is selected." },

    { q: "You name your label CountLabel. Later lessons look for it by name. What happens if you misspell it as Countlabel?", find: [13] /*F:by double-clicking it and typing CountLabel*/,
      hint: "The lessons need the exact same name.",
      choices: [
        "Godot fixes it for you",
        "Nothing, names don't matter",
        "The later code won't be able to find it",
        "The label turns red"
      ], right: 2,
      why: "Names are how code finds a node, so they have to match exactly." }
  ],

  todo: { title: "What To Do Now", s: [
    "Open your Clicker project in Godot and click Main in the Scene dock before you add anything, so each new node lands in the right place.",
    "Add a Label named CountLabel with its text set to zero, a font size of sixty-four and a center anchor, then add a Button named PlusButton with its text set to a plus and a one.",
    "Press Ctrl+S, then F5, and check that the zero and the button both show in the window, and that clicking the button does nothing yet.",
    "After that, work through the {c} word cards at the top of the page and the {q} questions about the lesson, with {v} more questions about those words, so {T} questions in all.",
    "If you get stuck on a question, tap Find It in the Story and read the line the page shows you."
  ] },
};
