/* science/from-cells-to-tissues-to-organs
   Grade 7 · science · unit 2. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 THE PROSE IN `parts` IS A DRAFT, NOT PAUL'S VOICE. Built 2026-09-13. */
'use strict';
module.exports = {
  id: "science/from-cells-to-tissues-to-organs",
  slug: "from-cells-to-tissues-to-organs",
  title: "From Cells to Tissues to Organs",
  unit: "Life Science &middot; U2-L3",
  seq: { unit: 2, unitTitle: "Inside the Cell", n: 3 },

  /* ── /teach-plan, 2026-09-13. Read off Merrill Life Science p44
        (leaf n69), archive.org/details/merrilllifescien0000dani. ── */
  plan: {
    objective: "Work out what a cell's job is from its shape, and put cells, tissues, organs and organ systems in order.",
    markers: [
      "QUOTED, Objectives box: 'Recognize that cells differ in size, shape, and function.'",
      "QUOTED, Objectives box: 'Explain how cells of one-celled organisms differ from cells of many-celled organisms.'",
      "QUOTED, Objectives box: 'Explain the differences among tissues, organs, and organ systems.'",
      "QUOTED, New Science Words: tissues, organ, organ system",
      "QUOTED, the figure caption that carries the whole first half: 'Often the shape of a cell tells you something about the job it performs.'",
      "QUOTED, section headings: 'How Cells Differ' then 'From Cell to System'",
    ],
    method: "SHAPE TELLS YOU THE JOB, THEN A LADDER. The first half is not a list of cell types to memorise - it teaches that you can REASON from a shape to a function. A long thin cell carries something a long way; a flat flexible one squeezes through a narrow space. The second half is a four-rung ladder, cell to tissue to organ to organ system, where each rung is defined as a group of the rung below working together.",
    exampleOnly: [
      "the nerve cell, the plant vessel cell, the blood cells — WORLD: cells under a microscope, carried on from 2-1 and 2-2.",
      "⚠️ These are example-only for the SHAPE idea, but the lesson must not become a list of cell types. The objective is reasoning from shape, not naming cells.",
    ],
    digitize: "The existing reading engine. The ladder is what the answer-hunt points at, and the shape-to-job reasoning is what the questions actually test - each one gives a shape and asks what job it suggests. NO NEW MECHANIC NEEDED.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Science",
    blurb: "Cells are not all alike, and the shape of one usually tells you what it is for. Then how they stack up into a whole body.",
    contains: [
      "A story-form reading, read aloud with the words highlighted",
      "Four vocabulary words, each one defined inside the reading",
      "The four rungs from a single cell up to a whole organism",
      "A vocabulary check and a printable answer sheet",
    ] },
  eyebrow: ["Life Science", "U2-L3", "Life Science"],
  dek: "A cell built for one job does not look like a cell built for another. Often you can work out the job just by looking.",
  scripture: {
    ref: "1 Corinthians 12:12",
    text: "For as the body is one, and hath many members, and all the members of that one body, being many, are one body.",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will reason from a cell's shape to its likely job, and place cells, tissues, organs and organ systems in order from smallest to largest."
      ]},
      { h: "Key Concepts", p: [
        "Cells differ in size, shape and function, and the shape is usually a clue to the function. This is a reasoning skill, not a list to learn.",
        "The ladder: a group of similar cells working together is a tissue. Different tissues working together form an organ. Organs working together form an organ system. Each rung is a group of the rung below."
      ]},
      { h: "Where Students Get Stuck", p: [
        "🚨 Turning this into a list of cell types to memorise. The objective is that you can look at an unfamiliar cell and make a sensible guess about its job. If he can do that with a cell he has never seen, the lesson worked.",
        "The second stumble is tissue and organ. A tissue is one kind of cell doing one job; an organ is several different tissues working together. The heart is an organ because it is muscle and nerve and blood vessel all at once."
      ]},
      { h: "Teaching Suggestion", p: [
        "Play it as a guessing game. Describe a cell shape and have him guess the job before you say it. Long and thin, flat and flexible, box-shaped and stiff. Getting it wrong is fine; the reasoning is the point.",
        "The ladder is worth saying out loud in both directions. Cell, tissue, organ, organ system, organism. Then back down again."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Not All Alike", s: [
      "After two lessons on what a cell is, it is easy to picture one standard cell.",
      "",
      "There is no such thing.",
      "",
      "Cells come in a wide range of sizes.",
      "A single nerve cell running down your leg can be most of a meter long.",
      "Another cell might be no bigger than a dot on this page.",
      "",
      "They come in a wide range of shapes too.",
      "",
      "And here is the useful part.",
      "Often the shape of a cell tells you something about the job it performs.",
      "",
      "That is not a fact to memorize.",
      "It is a tool, and it means you can look at a cell you have never seen before and make a sensible guess about what it is for."
    ]},

    { title: "Reading a Shape", s: [
      "Try it on three.",
      "",
      "A nerve cell is long and thin, with fine extensions reaching out from it.",
      "What would a shape like that be good for?",
      "Reaching a long way, and touching many things at once.",
      "That is exactly what it does, carrying signals through the body.",
      "",
      "Some cells in a plant stem are long and hollow, with holes at the ends.",
      "What is a long hollow tube good for?",
      "Moving something from one end to the other.",
      "They carry water up the plant.",
      "",
      "A red blood cell is small, disk-shaped and flexible.",
      "What is a small flexible disk good for?",
      "Squeezing through somewhere narrow.",
      "They travel through blood vessels far thinner than most cells could manage.",
      "",
      "In all three cases the shape came first and the job followed from it.",
      "You were not remembering, you were reasoning."
    ]},

    { title: "On Your Own, or On a Team", s: [
      "Some organisms are a single cell.",
      "",
      "That one cell has to do everything.",
      "Take in food, release energy, get rid of waste, respond to the world, reproduce.",
      "All of it, alone.",
      "",
      "Cells in a many-celled organism do not work that way.",
      "",
      "Each one depends on the others.",
      "A nerve cell does not feed itself and a blood cell does not think.",
      "",
      "That sounds like a weakness and it is the opposite.",
      "Because no single cell has to do everything, each one can be shaped for one job and be very good at it.",
      "",
      "A cell that must do every job cannot be the ideal shape for any of them."
    ]},

    { title: "The Ladder", s: [
      "Once cells specialize, they get organized, and the organization has four rungs.",
      "",
      "Start at the bottom with a single cell.",
      "",
      "A group of similar cells working together is a tissue.",
      "Muscle tissue is many muscle cells doing the same job side by side.",
      "",
      "Different tissues working together form an organ.",
      "",
      "Notice the word different there, because it is what separates an organ from a tissue.",
      "Your heart is an organ because it is muscle tissue and nerve tissue and blood vessels all at once, working as one thing.",
      "",
      "Organs working together form an organ system.",
      "The heart and the blood vessels together are the circulatory system.",
      "",
      "And organ systems working together are an organism, which is where Unit 1 started.",
      "",
      "Say the ladder out loud.",
      "Cell, tissue, organ, organ system, organism.",
      "",
      "Every rung is a group of the rung below it, working together."
    ]},

    { title: "Many Members, One Body", s: [
      "1 Corinthians 12:12 says that a body is one, and yet has many members, and that all those members are one body.",
      "",
      "Paul wrote it about people, and the last lesson used the same chapter.",
      "",
      "He keeps returning to a body for the same reason this lesson does.",
      "A body is the clearest example anybody has ever had of many different parts that are only useful together.",
      "",
      "A heart on its own is not a smaller body.",
      "It is a pump with nothing to pump for.",
      "",
      "The organization is not decoration on top of the parts.",
      "The organization is what makes the parts mean anything."
    ]}
  ],

  todo: { title: "What To Do Now", s: [
      "That is the reading done.",
      "First the questions, {q} of them, and the answers are all above.",
      "Most of them give you a shape and ask what job it suggests.",
      "That is on purpose, because reasoning from shape is the real skill here.",
      "Then the word cards, {v} of them, and the check underneath.",
      "Last, say the ladder out loud without looking.",
      "Cell, tissue, organ, organ system, organism.",
      "Then say it backwards.",
      "If you can do it in both directions you have the shape of the whole unit."
  ] },

  words: [
    ["Tissue", "A group of similar cells working together."],
    ["Organ", "Different tissues working together as one structure."],
    ["Organ system", "Organs working together."],
    ["Function", "The job a cell or a part does."]
  ],

  findsAt: 56,
  questions: [
    { q: "What does the shape of a cell usually tell you?",
      find: [7],
      hint: "The reading calls this a tool rather than a fact.",
      choices: [
        "Something about the job it performs.",
        "How old the cell is.",
        "Whether it is from a plant or an animal.",
        "How long the cell will live."
      ], right: 0 },

    { q: "A cell is long and hollow with holes at each end. What is that shape good for?",
      find: [16, 17],
      hint: "Think about what a tube is for before thinking about biology at all.",
      choices: [
        "Storing waste.",
        "Moving something from one end to the other.",
        "Reaching many things at once.",
        "Squeezing through a narrow gap."
      ], right: 1 },

    { q: "Why can a cell in a many-celled organism be so good at one job?",
      find: [24, 25],
      hint: "Compare it with a single-celled organism that has no one to depend on.",
      choices: [
        "Because it is larger than a one-celled organism.",
        "Because it lives longer.",
        "Because it does not have to do every job, so it can be shaped for one.",
        "Because it has more organelles."
      ], right: 2 },

    { q: "What is the difference between a tissue and an organ?",
      find: [37, 39, 40],
      hint: "The reading points at one word and says it is what separates them.",
      choices: [
        "An organ is larger than a tissue.",
        "A tissue is found in plants and an organ in animals.",
        "An organ has a membrane and a tissue does not.",
        "A tissue is similar cells together; an organ is different tissues working together."
      ], right: 3 },

    { q: "Why is the heart an organ rather than a tissue?",
      find: [41],
      hint: "Count how many kinds of tissue are in it.",
      choices: [
        "Because it is muscle and nerve and blood vessels all at once, working as one thing.",
        "Because it never stops moving.",
        "Because it is the largest part of the body.",
        "Because it is made of only one kind of cell."
      ], right: 0 },

    { q: "Put the ladder in order from smallest to largest.",
      find: [46],
      hint: "Every rung is a group of the rung below it.",
      choices: [
        "Tissue, cell, organ system, organ, organism.",
        "Cell, tissue, organ, organ system, organism.",
        "Cell, organ, tissue, organism, organ system.",
        "Organism, organ system, organ, tissue, cell."
      ], right: 1 }
  ],

  vocabQuestions: [
    { q: "What is a <i>tissue</i>?",
      choices: [
        "A group of similar cells working together.",
        "Several different organs together.",
        "The control center of a cell.",
        "A single specialized cell."
      ], right: 0 },
    { q: "What is an <i>organ</i>?",
      choices: [
        "A group of identical cells.",
        "Different tissues working together as one structure.",
        "Any large part of a plant.",
        "A group of organ systems."
      ], right: 1 },
    { q: "What is an <i>organ system</i>?",
      choices: [
        "A single organ doing several jobs.",
        "All the cells of one type in a body.",
        "Organs working together.",
        "The outer boundary of an organ."
      ], right: 2 },
    { q: "What does <i>function</i> mean?",
      choices: [
        "The size of a cell.",
        "The shape of a cell.",
        "The place a cell is found.",
        "The job a cell or a part does."
      ], right: 3 }
  ]
};
