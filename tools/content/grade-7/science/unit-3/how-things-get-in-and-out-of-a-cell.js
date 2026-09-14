/* science/how-things-get-in-and-out-of-a-cell
   Grade 7 · science · unit 3. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 THE PROSE IN `parts` IS A DRAFT, NOT PAUL'S VOICE. Built 2026-09-13 from the
   Merrill spread so the structure could stand while he was out. His prose is still
   the source → BEHAVIOR.md. Refining this is editing, not starting.
   → /lessons: "Draft prose is a placeholder marked as one, not a claim to be his voice."

   🚨 FIRST LESSON TO CARRY A `plan` BLOCK. /teach-plan has always specified it and
   nothing had ever written one. It is a build note and never renders. */
'use strict';
module.exports = {
  id: "science/how-things-get-in-and-out-of-a-cell",
  slug: "how-things-get-in-and-out-of-a-cell",
  title: "How Things Get In and Out of a Cell",
  unit: "Life Science &middot; U3-L2",
  seq: { unit: 3, unitTitle: "How Cells Work", n: 2 },

  /* ── /teach-plan, 2026-09-13. Read off Merrill Life Science (Glencoe 1994)
        pp58-62, archive.org/details/merrilllifescien0000dani. QUOTED means the
        book's own words; INFERRED is marked and says what it came from. ── */
  plan: {
    objective: "Decide whether a substance can cross a cell membrane, and whether crossing it costs the cell energy.",
    markers: [
      "QUOTED, Objectives box: 'Explain the function of a selectively permeable membrane.'",
      "QUOTED, Objectives box: 'Describe the processes of diffusion and osmosis.'",
      "QUOTED, Objectives box: 'Compare and contrast passive transport and active transport and give examples of each.'",
      "QUOTED, New Science Words: passive transport, active transport, diffusion, equilibrium, osmosis, endocytosis, exocytosis",
      "QUOTED, opening question: 'how do these things move in and out of the cell? How does the cell control what enters and leaves?'",
    ],
    method: "A PHYSICAL ANALOGY carries the whole idea. The book hands you a mesh bag holding marbles, and sand that falls straight through it, then says outright: 'The marbles and sand are models for molecules.' The membrane is not described in chemical terms first - it is described as an object the student has already held. Every term after that is hung on the analogy, and each one is defined in the running prose rather than on a card.",
    exampleOnly: [
      "the mesh bag, the marbles, the sand — WORLD: everyday objects",
      "NOTE: the book's own examples stay inside one world (things around a house). The draft keeps that and does not add a second world.",
    ],
    digitize: "The existing reading engine (build-lessons.js) already does exactly this shape: story-form reading, terms defined in the text, then questions whose answers are findable in the story. The analogy is carried in `parts`; the answer-hunt `find` indexes point at the sentences that define each term. NO NEW MECHANIC NEEDED.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Science",
    blurb: "A cell has to let food in and push waste out without letting in everything else. How it chooses, and what it costs.",
    contains: [
      "A story-form reading, read aloud with the words highlighted",
      "Eight vocabulary words, each one defined inside the reading",
      "Four questions with the answer findable in the text",
      "A vocabulary check and a printable answer sheet",
    ] },
  eyebrow: ["Life Science", "U3-L2", "Life Science"],
  dek: "A cell is wrapped in a membrane that lets some things through and stops others. Working out which is which, and when the cell has to spend energy to do it.",
  scripture: {
    ref: "Psalm 139:14",
    text: "I will praise thee; for I am fearfully and wonderfully made: marvellous are thy works; and that my soul knoweth right well.",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will learn that the cell membrane is selectively permeable, and that materials cross it in two different ways: passive transport, which costs the cell nothing, and active transport, which costs it energy."
      ]},
      { h: "Key Concepts", p: [
        "Diffusion is the movement of molecules from an area where they are crowded to an area where they are less crowded. It keeps going until equilibrium is reached, which means the molecules are spread evenly. Osmosis is the same process, but specifically the diffusion of water.",
        "Passive transport needs no energy from the cell because the molecules are already moving on their own. Active transport does need energy, because the cell is moving material the opposite way, from less crowded to more crowded. Very large particles are taken in by endocytosis and pushed out by exocytosis."
      ]},
      { h: "Teaching Suggestion", p: [
        "The book's mesh bag is worth doing for real. A colander, some marbles or large beads, and a cup of sand or rice will show the whole idea in about ten seconds: the big things stay, the small things fall through, and nobody had to push.",
        "The hardest idea here is that passive transport is free. Students expect movement to cost something. Point out that the molecules were already moving before the cell got involved - the cell is not pushing them, it is simply not stopping them."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "A Bag That Lets Some Things Through", s: [
      "Every cell has a job to do, and it cannot do that job alone.",
      "It needs food and oxygen from outside itself.",
      "It also makes waste, and that waste has to go somewhere.",
      "",
      "But a cell is wrapped in a membrane.",
      "So how does anything get in or out at all?",
      "And how does the cell stop the wrong things from coming in?",
      "",
      "Think about a mesh bag, the kind onions come in.",
      "Put marbles in it and the marbles stay put, because they are bigger than the holes.",
      "Now pour sand into the same bag.",
      "The sand runs straight through, because each grain is smaller than the holes.",
      "",
      "The bag did not decide anything.",
      "It did not push the sand out or hold the marbles back.",
      "It simply has holes of a certain size, and that alone sorts one thing from the other.",
      "",
      "A bag that behaves this way is called selectively permeable.",
      "It lets some things pass through it and not others.",
      "",
      "The cell membrane is selectively permeable too.",
      "The marbles and the sand are models for molecules."
    ]},
    { title: "Crowded to Less Crowded", s: [
      "Molecules are never sitting still.",
      "They are always moving, bumping into each other, spreading out.",
      "",
      "Open a bottle of vinegar at one end of a kitchen and wait.",
      "Before long you can smell it at the other end of the room.",
      "Nobody carried it there.",
      "The molecules simply spread out from where there were a lot of them to where there were fewer.",
      "",
      "That spreading has a name.",
      "Diffusion is the movement of molecules from an area where they are crowded to an area where they are less crowded.",
      "",
      "Diffusion does not go on forever.",
      "It slows down as the crowding evens out, and eventually the molecules are spread evenly through the space.",
      "When that happens, the substance has reached equilibrium.",
      "",
      "At equilibrium the molecules are still moving.",
      "They just are not piling up anywhere any more."
    ]},
    { title: "When It Is Water That Moves", s: [
      "Water diffuses too, and it does it so often in living things that it was given its own name.",
      "",
      "Osmosis is the diffusion of water through a selectively permeable membrane.",
      "",
      "You have seen osmosis without knowing it.",
      "Salt a sliced cucumber and come back in an hour, and there is water sitting in the bowl.",
      "The water came out of the cucumber's cells.",
      "",
      "A limp stick of celery left in a glass of plain water goes firm again, because water moved the other way, into the cells.",
      "",
      "Water moves toward wherever it is less crowded, the same as anything else.",
      "Osmosis is not a special rule.",
      "It is diffusion, with water as the thing doing the diffusing."
    ]},
    { title: "Free Rides and Paid Rides", s: [
      "Here is the part students usually find strange.",
      "",
      "When a molecule crosses a cell membrane by diffusion, the cell spends no energy at all.",
      "It did not have to.",
      "The molecules were already moving on their own, and the cell simply did not stand in the way.",
      "",
      "When materials move through a cell membrane without the cell using energy, that is passive transport.",
      "",
      "But sometimes a cell needs a substance it already has plenty of.",
      "That means moving material the wrong way, from where it is less crowded to where it is more crowded.",
      "Molecules will not do that on their own, any more than water runs uphill by itself.",
      "",
      "So the cell has to pay.",
      "When materials require the cell to use energy to move through the membrane, that is active transport.",
      "",
      "One way to keep them apart is to ask a single question.",
      "Is the substance going the way it was already headed, or is the cell forcing it the other way?"
    ]},
    { title: "When Something Is Too Big to Fit", s: [
      "Some particles are far too large to pass through the membrane at all, by any of these methods.",
      "",
      "A cell handles those by folding.",
      "The membrane wraps around the particle, closes behind it, and carries it inside.",
      "Taking material in this way is called endocytosis.",
      "",
      "The reverse also happens.",
      "Waste or a finished product is packaged up, carried to the edge of the cell, and pushed out through the membrane.",
      "Releasing material this way is called exocytosis.",
      "",
      "Both of these cost the cell energy, because in both cases the cell is doing the work rather than letting molecules drift."
    ]},
    { title: "Fearfully and Wonderfully Made", s: [
      "Stop and think about what the membrane is actually doing.",
      "",
      "It is a boundary thin enough that you cannot see it without a microscope, and it is sorting thousands of substances every second.",
      "Food in, oxygen in, waste out, and most other things kept where they are.",
      "",
      "None of that is decided by the cell thinking about it.",
      "It comes from how the membrane is built.",
      "",
      "[verse] Psalm 139:14 says, “I will praise thee; for I am fearfully and wonderfully made.”",
      "",
      "David wrote that about the whole body, long before anybody knew a cell existed.",
      "It turns out to be true at a scale he could never have seen.",
      "",
      "The order that makes a cell work is the same order that makes it possible to study one."
    ]}
  ],

  todo: { title: "What To Do Now", s: [
      "That is the reading done.",
      "Two things are left, and they both happen today.",
      "First, the questions.",
      "Four of them, and the answer to each one is in the reading above, not in your memory.",
      "If a question is hard, do not guess.",
      "Use the bar or the arrows to go back to the part it came from and read it again.",
      "The one people trip on is why passive transport is free.",
      "Read Free Rides and Paid Rides again and look for what the molecules were doing before the cell got involved.",
      "Then the vocabulary check, which sends you back to the cards at the top.",
      "Eight words this time, and every one of them is explained somewhere in the story you just heard.",
      "Tap each card at the top to check yourself, then answer the vocabulary questions at the bottom.",
      "If you can say why the cell has to spend energy on active transport but not on diffusion, you have understood the hardest idea in this lesson."
  ] },

  words: [
    ["Selectively permeable", "Letting some substances pass through while stopping others.", 13],
    ["Diffusion", "The movement of molecules from an area where they are crowded to an area where they are less crowded.", 24],
    ["Equilibrium", "The point at which molecules are spread evenly and stop piling up in one place.", 27],
    ["Osmosis", "The diffusion of water through a selectively permeable membrane.", 31],
    ["Passive transport", "Materials moving through a cell membrane without the cell using energy.", 43],
    ["Active transport", "Materials moving through a cell membrane that require the cell to use energy.", 48],
    ["Endocytosis", "Taking in a particle too large to cross the membrane by folding the membrane around it.", 54],
    ["Exocytosis", "Releasing material out of a cell by pushing it through the membrane.", 57]
  ],

  findsAt: 68,
  questions: [
    { q: "What does it mean to say the cell membrane is selectively permeable?", find: [7, 9, 13, 14],
      hint: "Go back to the mesh bag. What happened to the marbles, and what happened to the sand?",
      choices: [
        "It lets some substances pass through it and stops others.",
        "It lets everything through equally.",
        "It blocks everything until the cell opens it.",
        "It only allows water to pass."
      ], right: 0 },
    { q: "What is happening during diffusion?", find: [22, 24],
      hint: "Think about which direction the vinegar smell traveled, and why it stopped spreading.",
      choices: [
        "Molecules move from where they are less crowded to where they are more crowded.",
        "Molecules move from where they are crowded to where they are less crowded.",
        "Molecules stop moving completely.",
        "The cell pushes molecules across the membrane."
      ], right: 1 },
    { q: "Why does passive transport cost the cell no energy?", find: [40, 42, 43],
      hint: "Ask what the molecules were already doing before the cell was involved.",
      choices: [
        "Because the cell has no energy to spend.",
        "Because the membrane pushes the molecules through for free.",
        "Because the molecules were already moving on their own, and the cell simply did not stand in the way.",
        "Because passive transport only moves very small amounts."
      ], right: 2 },
    { q: "When does a cell have to use active transport?", find: [44, 45, 48],
      hint: "One of these two directions the molecules will not go by themselves.",
      choices: [
        "When it needs to move material the way it was already headed.",
        "When the substance is water rather than food.",
        "Whenever anything at all crosses the membrane.",
        "When it needs to move material from where it is less crowded to where it is more crowded."
      ], right: 3 }
  ],

  vocabQuestions: [
    { q: "What is <i>diffusion</i>?",
      choices: [
        "The movement of molecules from a crowded area to a less crowded area.",
        "The movement of molecules from a less crowded area to a crowded area.",
        "Water moving through a membrane only.",
        "The point where molecules stop moving."
      ], right: 0 },
    { q: "What is <i>osmosis</i>?",
      choices: [
        "Any molecule crossing a membrane.",
        "The diffusion of water through a selectively permeable membrane.",
        "A cell using energy to move water.",
        "Water evaporating out of a cell."
      ], right: 1 },
    { q: "What is <i>equilibrium</i>?",
      choices: [
        "The moment a cell runs out of energy.",
        "The membrane closing completely.",
        "The point at which molecules are spread evenly and stop piling up in one place.",
        "The maximum amount a cell can hold."
      ], right: 2 },
    { q: "What is <i>active transport</i>?",
      choices: [
        "Materials crossing the membrane without the cell using energy.",
        "Materials crossing the membrane that require the cell to use energy.",
        "A cell moving from one place to another.",
        "The diffusion of water."
      ], right: 1 },
    { q: "What is <i>endocytosis</i>?",
      choices: [
        "Pushing waste out through the membrane.",
        "Water entering a cell.",
        "Taking in a particle too large to cross the membrane by folding the membrane around it.",
        "A cell dividing in two."
      ], right: 2 }
  ]
};
