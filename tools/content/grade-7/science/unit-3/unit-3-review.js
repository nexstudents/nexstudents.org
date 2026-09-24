/* science/unit-3-review
   Grade 7 · science · unit 3. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 A REVIEW IS A DIAGNOSTIC, NOT A TEST. Same rule as the Unit 1 and Unit 2
   Reviews: every hint names the lesson to go back to, so a wrong answer sends
   him somewhere.

   🚨 THE PROSE IN `parts` IS A DRAFT, NOT PAUL'S VOICE. Built 2026-09-24 on Opus
   from the four Unit 3 lessons and the Merrill Chapter 3 Review (pp69-71), read
   on the borrowed copy the same evening, then given the /natural pass.

   ⚠️ THE VERSE IS A CALLBACK, not a new choice: Genesis 2:7 is the verse Unit 3
   Lesson 1 already carries. If Paul would rather the review use another of the
   unit's verses, or none, it is one line.

   ⚠️ 11 cards against 5 vocabulary questions WARNS and does not fail. A unit
   review gathers the words from four lessons; do not invent extra questions. */
'use strict';
module.exports = {
  id: "science/unit-3-review",
  slug: "unit-3-review",
  title: "Unit 3 Review: How Cells Work",
  unit: "Life Science &middot; U3-L5",
  seq: { unit: 3, unitTitle: "How Cells Work", n: 5 },
  natural: "2026-09-24",

  /* ── /teach-plan, 2026-09-24. Read off Merrill Life Science (Glencoe 1994),
        Chapter 3 Review pp69-71, archive.org/details/merrilllifescien0000dani. ── */
  plan: {
    objective: "Pull the four Unit 3 lessons back together and follow the matter in a living thing from the molecules it's built of, through the membrane, into energy, and back out into the world.",
    markers: [
      "QUOTED, Chapter Review SUMMARY, 3-1: 'Everything is made of matter, which is composed of atoms arranged in elements, molecules and compounds.' and 'Carbohydrates, lipids, proteins, and nucleic acids are organic compounds.'",
      "QUOTED, SUMMARY, 3-2: 'The cell membrane controls what molecules can pass through it.' and 'In osmosis, water diffuses through a selectively permeable membrane.'",
      "QUOTED, SUMMARY, 3-3: 'Green plants use light energy to make chemical energy in the form of glucose during photosynthesis. In respiration, glucose is broken down and energy is released.'",
      "QUOTED, CHECKING CONCEPTS: 'Choose the word or phrase that completes the sentence.'",
      "QUOTED, THINK AND WRITE CRITICALLY 15: 'Explain how some substances, but not others, can pass through the cell membrane.'",
      "QUOTED, THINK AND WRITE CRITICALLY 21: 'Explain what would happen to the consumers in a lake if all the producers died.'",
    ],
    method: "A RECAP THAT FOLLOWS THE MATTER. The four lessons are one journey: what a living thing is built from, how those molecules get into a cell, what the cell does with them to get energy, and what happens to material once it's thrown away. The review walks that path in one pass so the student sees one process, not four chapters.",
    exampleOnly: [
      "the mesh bag, the basketball game, the banana peel and the plastic bag - WORLD: the unit's own examples, reused on purpose so recognising them is the recall",
    ],
    digitize: "The existing reading engine. Every question's answer-hunt points into the recap, and every hint names the lesson to reopen. NO NEW MECHANIC. ⚠️ The two THINK AND WRITE CRITICALLY questions have no answer key, so they live in `todo` as notebook writing, same as the Unit 2 Review.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Science",
    blurb: "The whole unit in one pass: what a living thing is built from, how things get into a cell, where its energy comes from, and what happens to what we throw away.",
    contains: [
      "Atoms, compounds and the four organic groups",
      "Diffusion, osmosis, and which crossings cost energy",
      "Photosynthesis and cellular respiration as one loop",
      "Two questions to answer in writing, with no answer key",
    ] },
  eyebrow: ["Life Science", "U3-L5", "How Cells Work"],
  dek: "You've taken a living thing apart down to its atoms, watched molecules cross a membrane, and followed energy from the sun into a cell. Here's all of it in one place, and two questions you'll have to answer for yourself.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Bring the four Unit 3 lessons together, check which parts hold and which need a second read, and finish by writing about how a membrane lets some things through and what happens to a lake's consumers when its producers die."
      ]},
      { h: "Key Concepts", p: [
        "Every question here is tied to one of the four lessons and the hint says which one, so a wrong answer is directions to the right page and not a mark against the student.",
        "The two written questions at the end are the real test of whether the unit landed. The lake question in particular needs Lesson 3 understood, not memorized: consumers can't make their own food, so they depend on producers."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Start With What It's Made Of", s: [
      "Everything in this unit starts with matter, which is made of atoms, and atoms join into elements, compounds and the molecules that carry a compound's properties.",
      "Some compounds in a living thing are inorganic, like water and salt, but most of what makes it alive is organic, built around carbon.",
      "Those organic compounds come in four groups: carbohydrates like sugar and starch, lipids like fats and oils, proteins built from amino acids, and nucleic acids like DNA, which store information.",
      "Enzymes are proteins with one special job, speeding up the chemical reactions in a cell without being used up themselves."
    ]},
    { title: "Getting Through the Wall", s: [
      "None of those molecules does a cell any good sitting outside it, and the cell membrane decides what gets in, the way a mesh bag holds marbles while sand pours straight through.",
      "That's what selectively permeable means, and most crossings happen by diffusion, molecules drifting from where they're crowded to where they're less crowded until they reach equilibrium.",
      "When the thing drifting across is water, it's called osmosis.",
      "Diffusion and osmosis are passive transport, a free ride, but moving something against the crowd is active transport and costs the cell energy, and anything too big to squeeze through gets wrapped in membrane and carried in by endocytosis or pushed out by exocytosis."
    ]},
    { title: "Where the Energy Comes From", s: [
      "Active transport needs energy, and every bit of energy in a living thing was caught from sunlight by a producer first.",
      "In photosynthesis a plant uses light to build glucose out of carbon dioxide and water, giving off oxygen as it goes, and a consumer that can't make its own food has to eat it.",
      "Cellular respiration runs the process the other way: oxygen breaks the glucose down and releases the energy stored in it, which is what a basketball player is spending in the last minute of a game.",
      "Without oxygen some cells fall back on fermentation, which gets a little energy out of glucose but far less."
    ]},
    { title: "And What Happens After", s: [
      "Matter doesn't stop moving when a living thing is finished with it.",
      "A banana peel is biodegradable, so bacteria and fungi decompose it back into the elements it was made of, and those elements go on to build something else.",
      "A plastic bag is nonbiodegradable, and it sits there for so long that it makes no practical difference, which is why recycling, using the material again as something new, is the one way to keep it moving."
    ]},
    { title: "Dust and Breath, Again", s: [
      "[verse] Genesis 2:7 says, “And the LORD God formed man of the dust of the ground, and breathed into his nostrils the breath of life; and man became a living soul.”",
      "The first lesson of this unit found that verse in the chemistry, because the elements in your body really are the elements in the ground, and the last lesson watched a banana peel break down into those same elements again.",
      "You don't have to hold the whole loop in your head at once, because the questions below send you back to the exact lesson you need."
    ]}
  ],

  todo: { title: "What To Do Now", s: [
      "Start with the questions, {Q} of them, and if one is hard the hint tells you which lesson to go back to.",
      "After that comes the vocabulary check at the bottom, {v} questions on the word cards at the top of the page.",
      "Then the part that matters most, and it happens on paper.",
      "First, explain in your notebook how some substances can pass through the cell membrane while others can't.",
      "Second, a lake has producers and consumers living in it, so write what would happen to the consumers if all the producers died, and why.",
      "Write both in complete sentences, and give your reasons.",
      "There's no answer key for either one, and you'll be marked on whether your explanation is clear and uses what the unit taught."
  ] },

  words: [
    ["Element", "Something made of only one kind of atom, which can't be broken down into anything simpler.", 0],
    ["Compound", "Two or more elements bonded together.", 0],
    ["Carbohydrates", "Organic compounds made of carbon, hydrogen and oxygen, such as sugars and starch.", 2],
    ["Enzymes", "Proteins that speed up chemical reactions in cells without being changed.", 3],
    ["Selectively permeable", "Letting some substances pass through while stopping others.", 5],
    ["Diffusion", "The movement of molecules from an area where they are crowded to an area where they are less crowded.", 5],
    ["Osmosis", "The diffusion of water through a selectively permeable membrane.", 6],
    ["Active transport", "Materials moving through a cell membrane that require the cell to use energy.", 7],
    ["Photosynthesis", "Using energy from sunlight to build glucose out of carbon dioxide and water, giving off oxygen.", 9],
    ["Cellular respiration", "Using oxygen to break glucose down and release the energy stored in it.", 10],
    ["Biodegradable", "Able to break down easily in the environment.", 13]
  ],

  findsAt: 18,
  questions: [
    { q: "What are the four groups of organic compounds in living things?", find: [2],
      hint: "Go back to Lesson 1, What Living Things Are Made Of.",
      choices: [
        "Atoms, elements, compounds and molecules.",
        "Water, salt, oxygen and carbon dioxide.",
        "Carbohydrates, lipids, proteins and nucleic acids.",
        "Producers, consumers, enzymes and cells."
      ], right: 2 },
    { q: "What does an enzyme do?", find: [3],
      hint: "Go back to Lesson 1. It is right after the four groups.",
      choices: [
        "It speeds up chemical reactions in a cell without being used up.",
        "It stores information like DNA.",
        "It lets water through the membrane.",
        "It makes glucose from sunlight."
      ], right: 0 },
    { q: "What does it mean that a cell membrane is selectively permeable?", find: [4, 5],
      hint: "Go back to Lesson 2, How Things Get In and Out of a Cell. Think of the mesh bag.",
      choices: [
        "It lets everything through.",
        "It lets nothing through.",
        "It only lets water through.",
        "It lets some substances through and stops others."
      ], right: 3 },
    { q: "What is osmosis?", find: [6],
      hint: "Go back to Lesson 2, When It Is Water That Moves.",
      choices: [
        "A cell eating a large particle.",
        "The diffusion of water through a selectively permeable membrane.",
        "A plant making food from sunlight.",
        "Breaking glucose down without oxygen."
      ], right: 1 },
    { q: "Which kind of crossing costs the cell energy?", find: [7],
      hint: "Go back to Lesson 2, Free Rides and Paid Rides.",
      choices: [
        "Diffusion.",
        "Osmosis.",
        "Active transport.",
        "Passive transport."
      ], right: 2 },
    { q: "What does a plant make during photosynthesis?", find: [9],
      hint: "Go back to Lesson 3, Where a Cell Gets Its Energy.",
      choices: [
        "Glucose, giving off oxygen as it goes.",
        "Carbon dioxide, using up oxygen.",
        "Protein, from amino acids.",
        "Salt, from water."
      ], right: 0 },
    { q: "What happens during cellular respiration?", find: [10],
      hint: "Go back to Lesson 3, Getting the Energy Back Out.",
      choices: [
        "Sunlight is turned into glucose.",
        "Water crosses the membrane.",
        "Trash breaks down into elements.",
        "Oxygen breaks glucose down and releases its energy."
      ], right: 3 },
    { q: "Which of these is biodegradable?", find: [13, 14],
      hint: "Go back to Lesson 4, What We Throw Away, and Where It Goes.",
      choices: [
        "A plastic bag.",
        "A banana peel.",
        "A glass bottle.",
        "An aluminum can."
      ], right: 1 }
  ],

  vocabQuestions: [
    { q: "What is a <i>compound</i>?",
      choices: [
        "A single atom.",
        "Two or more elements bonded together.",
        "A kind of cell membrane.",
        "Energy stored in food."
      ], right: 1 },
    { q: "What is <i>diffusion</i>?",
      choices: [
        "Molecules moving from where they're crowded to where they're less crowded.",
        "A cell pushing material out through its membrane.",
        "A plant catching sunlight.",
        "Trash breaking down."
      ], right: 0 },
    { q: "What are <i>carbohydrates</i>?",
      choices: [
        "Proteins that speed up reactions.",
        "Molecules that store information.",
        "Organic compounds such as sugars and starch.",
        "Inorganic compounds such as salt."
      ], right: 2 },
    { q: "What is <i>active transport</i>?",
      choices: [
        "Water drifting across a membrane.",
        "A free ride through the membrane.",
        "Breaking glucose down without oxygen.",
        "Materials crossing a cell membrane in a way that costs the cell energy."
      ], right: 3 },
    { q: "What does <i>biodegradable</i> mean?",
      choices: [
        "Made of plastic.",
        "Able to break down easily in the environment.",
        "Able to be recycled forever.",
        "Made by a producer."
      ], right: 1 }
  ]
};
