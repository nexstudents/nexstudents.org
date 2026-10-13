/* coding/a-timer-that-counts
   Game Coding (elective, internal level 7) · Unit 1 (Your First Game Window), lesson 7.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-10-13. Written on Sonnet to the /teach-plan block in
   `plan` below and given the /natural pass. Paul has not read it. There is no book for
   this course. Sources: the videos listed in the Suggested Videos section (Microsoft
   Developer, Brackeys, John Dee), read for the teaching ORDER only, nothing copied.

   🚨 CODE LIVES ONLY IN [walk]/[step] WORK LINES (after the double bar). Sentences and
   questions name things in plain words. */
'use strict';
module.exports = {
  id: "coding/a-timer-that-counts",
  slug: "a-timer-that-counts",
  title: "A Timer That Counts by Itself",
  unit: "Game Coding · U1-L7",
  seq: { unit: 1, unitTitle: "Your First Game Window", n: 7 },

  plan: {
    objective: "Add a Timer node and connect its Timeout signal so the count goes up on its own every second, and add a button that starts and stops it.",
    markers: [
      "VIDEO (paraphrased), Microsoft Developer: a signal can come from any node, not just a button, and you connect it with plus-equals the same way.",
      "VIDEO (paraphrased), Brackeys: a timer node rings its Timeout signal after its wait time, and Autostart makes it begin on its own.",
      "VIDEO (paraphrased), John Dee: an if and else can toggle between two states, such as running and stopped.",
    ],
    method: "A TIMER IS A DOORBELL THAT RINGS BY ITSELF. Add a Timer node, set Wait Time and Autostart in the Inspector, connect its Timeout signal to a method the same way as a button, and use if and else to start or stop it from a new button.",
    exampleOnly: [
      "The one-second wait is our own choice, so the skill is connecting a timer's signal, not that number.",
    ],
    digitize: "Reading engine with three Watch It Worked walkthroughs (add and set up the timer, connect it, add the Auto button) whose work lines carry the real code. Questions ask what each setting does, what a connected method does, and how to spot the two common mistakes. The hands-on job is in Godot itself.",
    unclear: "",
  },
  natural: "2026-10-13",
  findsAt: 42,

  shelf: { grades: [7], subject: "Coding",
    blurb: "Make the number count up all by itself. A Timer node rings every second, and a new Auto button starts and stops it.",
    contains: [
      "The idea of a doorbell that rings on its own",
      "Three worked walkthroughs: add the timer, connect its signal, and add an Auto button",
      "Four vocabulary cards, each with a check question",
      "The two mistakes everyone makes with timers",
      "A hands-on job in Godot that finishes the clicker for this unit",
    ] },
  back: { href: "/extras/electives/game-coding/", label: "Game Coding" },
  eyebrow: ["Game Coding", "U1-L7", "Your First Game Window"],
  dek: "Some games keep running while you sit back and watch. Here's how you build a clock that does the clicking for you.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will add a Timer node named AutoTimer, set its Wait Time to 1 and turn Autostart on, connect its Timeout signal to a method that adds one to the count, and add an Auto button that starts or stops the timer.",
      ]},
      { h: "Key Concepts", p: [
        "A Timer is a node that rings a signal called Timeout after its Wait Time, and then rings it again and again for as long as it's running.",
        "Connecting Timeout works the same way as connecting a button's Pressed signal, with plus-equals and a method name.",
        "A button that toggles a timer uses if and else, one door for when it's stopped and the other for when it's running.",
      ]},
      { h: "Where Students Get Stuck", p: [
        "Adding the Timer but leaving Autostart off and never starting it from code, so nothing ever happens.",
        "Leaving Wait Time at 0 or a tiny number, which makes the count climb too fast to follow. Setting it to 1 means one tick a second.",
        "Misspelling the node name in the code, so the timer can't be found. It must be AutoTimer, with a capital A and a capital T.",
      ]},
      { h: "Checking the Work", p: [
        "When this lesson is done, the scene should show Main with CountLabel, PlusButton, MinusButton, ResetButton, AutoTimer and AutoButton under it, all spelled exactly that way.",
        "Pressing F5 should make the number climb by one every second without any clicks, and the Auto button should stop it and start it again. The number should turn red when it passes 100.",
        "A parent can open Main.cs and compare it to the code in the Watch It Worked, where a timer variable, a timer method and an Auto method have been added to the previous lesson's file.",
      ]},
      { h: "Suggested Videos", videos: [
        { id: "0Pf41YBedMk", title: "Introduction to Godot C# Essentials: A Complete Beginner's Guide: FULLCOURSE", channel: "Microsoft Developer",
          why: "The signals section starting at about 1:07:24 shows how nodes announce things to your code.", start: 4044 },
        { id: "LOhfqjmasi0", title: "How to make a Video Game - Godot Beginner Tutorial", channel: "Brackeys",
          why: "Signals begin at about 31:30 with a timer example. It uses GDScript, Godot's other language, so the typing differs but the idea is the same.", start: 1890 },
        { id: "i_KOAOJPz6w", title: "Variables, If & Else | C# Basics with Godot", channel: "John Dee",
          why: "A review of the if and else the Auto button uses." },
      ]},
      { h: "Key Vocabulary", vocab: true },
    ],
  },

  parts: [
    { title: "The Game That Plays Itself", s: [
      "Some games keep going while you sit back with your hands off the controller, such as a farm that grows crops overnight or a factory that keeps making things.",
      "The numbers in those games climb on their own, and part of the fun is watching them tick up and wondering what happens when they get high enough.",
      "Your clicker still needs a finger on the button for every single point, which is a lot of finger work if you ever want to reach a hundred.",
      "So how do you get a game to count by itself, once every second, without anyone clicking?"
    ]},

    { title: "A Doorbell That Rings by Itself", s: [
      "You already know a doorbell: a button rings its Pressed signal when somebody clicks it, and your code answers.",
      "A {{Timer}} is a node that rings a signal too, but nobody has to press it, because it rings its bell all on its own every time its wait runs out.",
      "That bell is called {{Timeout}}, and the setting that decides how many seconds it waits between rings is the Wait Time.",
      "Your code answers it just like it answers a button, so the timer is really a button that presses itself."
    ]},

    { title: "Add the Timer", s: [
      "A timer is a node like any other, so you add it to the scene the same way, and then you set it up in the Inspector.",
      "",
      "[walk] How do you add the timer and set it up?",
      "[step] Click Main in the Scene dock, so the new node becomes a child of Main, then add a Timer node. || Scene dock  ->  click  Main\nCtrl+A  ->  Timer  ->  Create",
      "[step] Rename it AutoTimer, with a capital A and a capital T, because your code will find it by that exact name. || Timer  ->  AutoTimer",
      "[step] In the Inspector, set Wait Time to one, so the bell rings once every second. || Wait Time:  1",
      "[step] Switch on Autostart, so the timer begins counting the moment the game opens. || Autostart:  On",
      "",
      "A timer doesn't show up in the window at all, because it has no picture, but it's sitting in the Scene dock doing its job."
    ]},

    { title: "Answer the Timer's Bell", s: [
      "Now your code has to answer the Timeout bell, which means a box to hold the timer, a connection, and a method that adds one.",
      "",
      "[walk] How do you make the count go up on every Timeout?",
      "[step] At the top of the file, under the label box, add a box that will hold the timer node. || private Timer timer;",
      "[step] Inside the starting-up method, fill the box by finding AutoTimer, and then connect its Timeout signal to a method named OnTimerTimeout. || timer = GetNode<Timer>(\"AutoTimer\");\ntimer.Timeout += OnTimerTimeout;",
      "[step] Write the method, which adds one to the count and then calls UpdateLabel, just like the plus button's method does. || private void OnTimerTimeout()\n{\n    count = count + 1;\n    UpdateLabel();\n}",
      "[step] Build and press F5, and the number should start climbing by itself, one a second. || Hammer  ->  F5\n0, 1, 2, 3 ...",
      "",
      "Watch it long enough and it passes a hundred, where the color check you wrote last lesson turns it red without you touching a thing."
    ]},

    { title: "An Auto Button", s: [
      "A timer that can't be stopped is a bit like a faucet with no handle, so you'll add a button that starts it when it's stopped and stops it when it's running.",
      "That's a decision between two doors, which means it's a job for the if and else you learned last time.",
      "",
      "[walk] How do you add an Auto button that starts and stops the timer?",
      "[step] Click Main, add a Button, rename it AutoButton, and set its Text to the word Auto. || Button  ->  AutoButton\nText:  Auto",
      "[step] Check that your Scene dock matches this tree. || Main\n    CountLabel\n    PlusButton\n    MinusButton\n    ResetButton\n    AutoTimer\n    AutoButton",
      "[step] In the starting-up method, connect the new button's Pressed signal to a method named OnAutoPressed. || GetNode<Button>(\"AutoButton\").Pressed += OnAutoPressed;",
      "[step] Write the method so it asks whether the timer is stopped, starts it if the answer is yes, and stops it if the answer is no. || private void OnAutoPressed()\n{\n    if (timer.IsStopped())\n    {\n        timer.Start();\n    }\n    else\n    {\n        timer.Stop();\n    }\n}",
      "",
      "Build, press F5, and click Auto a few times to watch the counting pause and start again."
    ]},

    { title: "Put It Together", s: [
      "Your file has grown, so here's the whole thing, and you can use it to check your work after you've tried it yourself.",
      "",
      "[walk] What does the finished file for this lesson look like?",
      "[step] The new timer box and the three new connections all sit in the starting-up method, and the two new methods sit below the others. || using Godot;\n\npublic partial class Main : Control\n{\n    private int count = 0;\n    private Label label;\n    private Timer timer;\n\n    public override void _Ready()\n    {\n        label = GetNode<Label>(\"CountLabel\");\n        timer = GetNode<Timer>(\"AutoTimer\");\n        GetNode<Button>(\"PlusButton\").Pressed += OnPlusPressed;\n        GetNode<Button>(\"MinusButton\").Pressed += OnMinusPressed;\n        GetNode<Button>(\"ResetButton\").Pressed += OnResetPressed;\n        GetNode<Button>(\"AutoButton\").Pressed += OnAutoPressed;\n        timer.Timeout += OnTimerTimeout;\n        UpdateLabel();\n    }\n\n    private void OnPlusPressed()\n    {\n        count = count + 1;\n        UpdateLabel();\n    }\n\n    private void OnMinusPressed()\n    {\n        if (count > 0)\n        {\n            count = count - 1;\n        }\n        UpdateLabel();\n    }\n\n    private void OnResetPressed()\n    {\n        count = 0;\n        UpdateLabel();\n    }\n\n    private void OnTimerTimeout()\n    {\n        count = count + 1;\n        UpdateLabel();\n    }\n\n    private void OnAutoPressed()\n    {\n        if (timer.IsStopped())\n        {\n            timer.Start();\n        }\n        else\n        {\n            timer.Stop();\n        }\n    }\n\n    private void UpdateLabel()\n    {\n        label.Text = count.ToString();\n        if (count > 100)\n        {\n            label.Modulate = Colors.Red;\n        }\n        else\n        {\n            label.Modulate = Colors.White;\n        }\n    }\n}",
      "",
      "Every piece in there is something you've already written, which is a good sign that you're getting somewhere."
    ]},

    { title: "The Two Mistakes Everyone Makes", s: [
      "The first mistake is adding the timer and then waiting for something to happen, because with Autostart switched off, a timer sits perfectly still until some code tells it to start.",
      "If your number never moves, click the AutoTimer in the Scene dock and look in the Inspector to see whether Autostart is on.",
      "The second mistake is a Wait Time of zero or something tiny like 0.01, which makes the number race up so fast that you can't follow it.",
      "And if Godot says it can't find the timer, check the spelling of AutoTimer in your code against the name in the Scene dock, capital letters included."
    ]},

    { title: "A Clock That Does the Clicking", s: [
      "Go back to the question: how do you get a game to count by itself, once every second, with nobody clicking?",
      "You add a Timer node, set its Wait Time and Autostart in the Inspector, and connect its Timeout signal to a method, just like a button.",
      "You've now used every big idea in this unit, which are nodes, scripts, variables, signals, your own methods, decisions and timers, all in one little game.",
      "The next lesson asks you to build it again from an empty window, because there's no better proof that you understand something than doing it again."
    ]}
  ],

  words: [
    ["Timer", "A node that rings a signal over and over after a set number of seconds.", 5 /*F:A {{Timer}} is*/],
    ["Timeout", "The signal a timer rings each time its wait time runs out.", 6 /*F:called {{Timeout}}*/],
    ["Wait Time", "The setting that decides how many seconds a timer waits between rings.", 6 /*F:called {{Timeout}}*/],
    ["Autostart", "The setting that makes a timer begin counting as soon as the game opens.", 13 /*F:Switch on Autostart*/]
  ],

  vocabQuestions: [
    { q: "What is a <i>timer</i> in Godot?",
      choices: [
        "A node that rings a signal after a set number of seconds",
        "A kind of button",
        "A picture of a clock",
        "The Output panel"
      ],
      right: 0, why: "A timer is a node that rings by itself." },
    { q: "What is <i>Timeout</i>?",
      choices: [
        "A game over message",
        "The signal a timer rings each time its wait time runs out",
        "A time when the game is paused",
        "A kind of number"
      ],
      right: 1, why: "Timeout is the timer's doorbell." },
    { q: "What does <i>Wait Time</i> decide?",
      choices: [
        "How big the timer is",
        "Which node the timer sits under",
        "How many seconds a timer waits between rings",
        "The color of the label"
      ],
      right: 2, why: "A Wait Time of one means a ring every second." },
    { q: "What does <i>Autostart</i> do?",
      choices: [
        "Makes a timer begin counting as soon as the game opens",
        "Saves the scene",
        "Builds the project",
        "Starts a new game"
      ],
      right: 0, why: "Without Autostart the timer sits still until code starts it." }
  ],

  questions: [
    { q: "What makes a timer different from a button when it comes to signals?", find: [5] /*F:nobody has to press it*/,
      hint: "Read A Doorbell That Rings by Itself.",
      choices: [
        "A timer has no signals",
        "A timer rings its signal on its own, and nobody has to press it",
        "A timer can only ring once",
        "A timer needs two scripts"
      ], right: 1,
      why: "A timer is a button that presses itself." },

    { q: "What is the timer's signal called?", find: [6] /*F:That bell is called*/,
      hint: "Read A Doorbell That Rings by Itself.",
      choices: [
        "Pressed",
        "Ready",
        "Reset",
        "Timeout"
      ], right: 3,
      why: "The bell a timer rings is Timeout." },

    { q: "You want the timer to ring once every second. What do you set in the Inspector?", find: [12] /*F:set Wait Time to one*/,
      hint: "Look at the third step of Add the Timer.",
      choices: [
        "Wait Time to one",
        "Autostart to off",
        "The Text to one",
        "The name to Timer"
      ], right: 0,
      why: "A Wait Time of one means one second between rings." },

    { q: "What does the method connected to Timeout do in this lesson?", find: [19] /*F:Write the method, which adds one to the count*/,
      hint: "Look at the third step of Answer the Timer's Bell.",
      choices: [
        "It resets the count to zero",
        "It prints a message",
        "It adds one to the count and updates the label",
        "It deletes the timer"
      ], right: 2,
      why: "It does what the plus button does, but on a timer." },

    { q: "You press F5 and the number sits at zero forever, and you didn't touch anything. What should you check first?", find: [34] /*F:The first mistake is adding the timer*/,
      hint: "Read The Two Mistakes Everyone Makes.",
      choices: [
        "The label's color",
        "The font size",
        "The scene's name",
        "Whether Autostart is on for the timer"
      ], right: 3,
      why: "A timer with Autostart off never starts by itself." },

    { q: "Your count races up way too fast to follow. What is the most likely setting?", find: [36] /*F:The second mistake is a Wait Time of zero*/,
      hint: "Read The Two Mistakes Everyone Makes.",
      choices: [
        "The font size is too big",
        "The Wait Time is zero or a tiny number",
        "There are too many buttons",
        "The scene isn't saved"
      ], right: 1,
      why: "A tiny wait time rings the bell constantly." },

    { q: "The timer is running and you click Auto. What happens?", find: [28] /*F:Write the method so it asks whether the timer is stopped*/,
      hint: "Look at the last step of An Auto Button.",
      choices: [
        "The timer keeps running",
        "The count resets",
        "The timer stops",
        "The label turns red"
      ], right: 2,
      why: "If the timer is not stopped, the else door stops it." },

    { q: "The timer is stopped and you click Auto. What happens?", find: [28] /*F:Write the method so it asks whether the timer is stopped*/,
      hint: "Look at the last step of An Auto Button.",
      choices: [
        "The timer starts",
        "Nothing",
        "The count goes to zero",
        "The scene closes"
      ], right: 0,
      why: "If the timer is stopped, the first door starts it." },

    { q: "The number reaches 101 from the timer alone. What color is it, and why?", find: [21] /*F:Watch it long enough and it passes a hundred*/,
      hint: "The timer method calls UpdateLabel.",
      choices: [
        "White, because only clicks count",
        "Red, because the timer method calls UpdateLabel, which checks the number",
        "Blue, because the timer is blue",
        "Green, because it's moving"
      ], right: 1,
      why: "Every change goes through UpdateLabel, which has the color check." }
  ],

  todo: { title: "What To Do Now", s: [
    "Open your Clicker project, click Main, and add a Timer named AutoTimer with its Wait Time set to one and Autostart switched on, and then an AutoButton with its text set to Auto.",
    "Open Main.cs and type the new code yourself, don't copy it: the timer box, the connections for the timer and the Auto button, and the two new methods.",
    "Build, press F5, and check that the number climbs by one every second on its own, that Auto stops and starts it, and that the number turns red after it passes a hundred.",
    "After that, work through the {c} word cards at the top of the page and the {q} questions about the lesson, with {v} more questions about those words, so {T} questions in all.",
    "If you get stuck on a question, tap Find It in the Story and read the line the page shows you."
  ] },
};
