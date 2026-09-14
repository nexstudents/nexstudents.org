/* science/where-a-cell-gets-its-energy
   Grade 7 · science · unit 3. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 THE PROSE IN `parts` IS A DRAFT, NOT PAUL'S VOICE. Built 2026-09-13 from the
   Merrill spread so the structure could stand while he was out. His prose is still
   the source → BEHAVIOR.md. Refining this is editing, not starting. */
'use strict';
module.exports = {
  id: "science/where-a-cell-gets-its-energy",
  slug: "where-a-cell-gets-its-energy",
  title: "Where a Cell Gets Its Energy",
  unit: "Life Science &middot; U3-L3",
  seq: { unit: 3, unitTitle: "How Cells Work", n: 3 },

  /* ── /teach-plan, 2026-09-13. Read off Merrill Life Science (Glencoe 1994)
        p63, archive.org/details/merrilllifescien0000dani. ── */
  plan: {
    objective: "Trace where the energy in a living thing came from, and name the process that moved it at each step.",
    markers: [
      "QUOTED, Objectives box: 'Explain the difference between producers and consumers.'",
      "QUOTED, Objectives box: 'Compare and contrast the processes of photosynthesis and respiration.'",
      "QUOTED, Objectives box: 'Describe how cells get energy from glucose through the process of fermentation.'",
      "QUOTED, New Science Words: metabolism, producers, consumers, photosynthesis, cellular respiration, fermentation",
      "QUOTED, section opener 'Trapping Energy for Life': 'Think of all the energy used in a basketball game. Where do the players get all that energy? The simplest answer is, “from the food they eat.”'",
    ],
    method: "OPEN ON A FAMILIAR SCENE, THEN NAME THE TERM INSIDE THE SENTENCE. The book starts with a basketball game and a question a student can already answer, then introduces each term bolded with a phonetic respelling in brackets - metabolism (muh TAB uh lih zum), photosynthesis (foht oh SIHN thuh sus). Every definition sits in the running prose, never on a card alone. The chain producers -> consumers -> photosynthesis -> respiration is built one link at a time, each link answering the question the previous one raised.",
    exampleOnly: [
      "the basketball game, the players — WORLD: everyday sport",
      "NOTE: the draft keeps ONE world for the opening and then stays with plants and food. It does not start a second unrelated story partway through.",
    ],
    digitize: "Existing reading engine (build-lessons.js). The chain of terms is what the answer-hunt `find` indexes point at, so the student rereads the link they missed rather than the whole page. NO NEW MECHANIC NEEDED.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Science",
    blurb: "Every bit of energy in your body was sunlight first. The steps in between, and what each one is called.",
    contains: [
      "A story-form reading, read aloud with the words highlighted",
      "Six vocabulary words, each one defined inside the reading",
      "Four questions with the answer findable in the text",
      "A vocabulary check and a printable answer sheet",
    ] },
  eyebrow: ["Life Science", "U3-L3", "Life Science"],
  dek: "Plants catch energy from sunlight and lock it into food. Everything else alive is spending energy a plant caught first.",
  scripture: {
    ref: "Psalm 104:14",
    text: "He causeth the grass to grow for the cattle, and herb for the service of man: that he may bring forth food out of the earth.",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will learn that producers capture light energy through photosynthesis, that consumers must eat to get energy, and that cells release the energy stored in glucose through cellular respiration or, without oxygen, through fermentation."
      ]},
      { h: "Key Concepts", p: [
        "Metabolism is the total of all the activities that keep an organism alive. Producers make their own food; consumers cannot and must eat. Photosynthesis uses light energy to build glucose from carbon dioxide and water, giving off oxygen.",
        "Cellular respiration is close to the reverse: it breaks glucose down using oxygen and releases the stored energy, giving off carbon dioxide and water. Fermentation releases energy from glucose without oxygen, but far less of it."
      ]},
      { h: "Teaching Suggestion", p: [
        "The single most useful question here is “where did that energy come from before it was in you?” Keep asking it backwards through a meal until you arrive at sunlight. Students who can run that chain understand the lesson even if they mix up the words.",
        "Photosynthesis and respiration are easy to confuse because they are near opposites. Build them side by side on paper rather than one after the other, and have the student point at which one gives off oxygen and which one uses it."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Where Does the Energy Come From?", s: [
      "Think about a basketball game.",
      "Players run for an hour, jump, stop, turn and run again.",
      "",
      "All of that takes energy.",
      "So where did the energy come from?",
      "",
      "The simplest answer is the food they ate.",
      "That answer is correct, but it only moves the question back a step.",
      "Where did the energy in the food come from?",
      "",
      "Cells take the chemical energy stored in food and change it into forms they can use.",
      "The total of everything an organism does to stay alive, grow and reproduce is called metabolism.",
      "",
      "This lesson follows the energy backwards until we find where it started."
    ]},
    { title: "Two Kinds of Living Things", s: [
      "Living things are divided into two groups based on how they get their food energy.",
      "",
      "Organisms that make their own food are called producers.",
      "Plants are producers, and so is grass, and so are the tiny living things drifting in the ocean.",
      "",
      "Organisms that cannot make their own food are called consumers.",
      "You are a consumer.",
      "So is a deer, a hawk, a spider and a whale.",
      "",
      "A consumer has no way of making food out of nothing.",
      "Everything a consumer runs on, it got by eating.",
      "",
      "So the energy in the basketball players came from food, and that food came from a producer, or from something that ate a producer."
    ]},
    { title: "Catching Sunlight", s: [
      "Producers do something no consumer can do.",
      "They change light energy into chemical energy.",
      "",
      "That process is called photosynthesis.",
      "",
      "During photosynthesis, energy from sunlight is used to build glucose, which is a sugar, out of carbon dioxide and water.",
      "Oxygen is given off in the process.",
      "",
      "Plants do this using a green pigment called chlorophyll.",
      "Chlorophyll is what traps the light, and it is also why most plants are green.",
      "",
      "So the answer to where the energy came from is sunlight.",
      "Every bit of energy in those basketball players was sunlight before it was anything else."
    ]},
    { title: "Getting the Energy Back Out", s: [
      "Building glucose locks energy away.",
      "Getting it back out is a separate job.",
      "",
      "Cells release the energy stored in glucose through cellular respiration.",
      "",
      "Cellular respiration uses oxygen to break glucose down, and it releases the energy the plant stored there.",
      "Carbon dioxide and water are given off.",
      "",
      "Read that carefully and compare it with the last section.",
      "Photosynthesis uses carbon dioxide and water and gives off oxygen.",
      "Cellular respiration uses oxygen and gives off carbon dioxide and water.",
      "",
      "They are close to opposites, and that is not a coincidence.",
      "One stores the energy and the other spends it."
    ]},
    { title: "When There Is No Oxygen", s: [
      "Cellular respiration needs oxygen.",
      "But cells sometimes have to release energy when oxygen has run short.",
      "",
      "Releasing energy from glucose without using oxygen is called fermentation.",
      "",
      "Fermentation works, but it is far less efficient.",
      "A cell gets much less energy out of the same glucose than it would with oxygen.",
      "",
      "You have felt this happen.",
      "When muscles are worked harder than the blood can supply oxygen, they switch over, and the ache afterwards comes from what fermentation leaves behind.",
      "",
      "Fermentation is also why bread rises and why milk turns into yogurt.",
      "The same shortcut that tires a muscle is doing useful work in a kitchen."
    ]},
    { title: "Food Out of the Earth", s: [
      "Follow the chain one more time, all the way back.",
      "",
      "A player runs on energy from a meal.",
      "The meal came from a plant, or from an animal that ate a plant.",
      "The plant built that food out of air, water and light.",
      "The light came from the sun.",
      "",
      "Nothing in that chain makes its own energy from nothing.",
      "Every link is passing along something it received.",
      "",
      "Psalm 104:14 says, “He causeth the grass to grow for the cattle, and herb for the service of man: that he may bring forth food out of the earth.”",
      "",
      "That verse describes the same chain this lesson just traced, written long before anyone had a word for photosynthesis.",
      "",
      "Grass grows, cattle eat it, and people are fed.",
      "Science can tell you the steps in between, and how each one works.",
      "It does not tell you why there is a chain at all, or why it holds together."
    ]}
  ],

  todo: { title: "What To Do Now", s: [
      "That is the reading done.",
      "Two things are left, and they both happen today.",
      "First, the questions.",
      "Four of them, and the answer to each one is in the reading above, not in your memory.",
      "If a question is hard, do not guess.",
      "Use the bar or the arrows to go back to the part it came from and read it again.",
      "The one people trip on is telling photosynthesis and cellular respiration apart.",
      "Read Getting the Energy Back Out again and look at which one uses oxygen and which one gives it off.",
      "Then the vocabulary check, which sends you back to the cards at the top.",
      "Six words this time, and every one of them is explained somewhere in the story you just heard.",
      "Tap each card at the top to check yourself, then answer the vocabulary questions at the bottom.",
      "If you can trace the energy in your last meal all the way back to sunlight, you have understood this lesson."
  ] },

  words: [
    ["Metabolism", "The total of all the activities that keep an organism alive, growing and reproducing."],
    ["Producers", "Organisms that make their own food."],
    ["Consumers", "Organisms that cannot make their own food and must eat."],
    ["Photosynthesis", "Using energy from sunlight to build glucose out of carbon dioxide and water, giving off oxygen."],
    ["Cellular respiration", "Using oxygen to break glucose down and release the energy stored in it."],
    ["Fermentation", "Releasing energy from glucose without using oxygen, which gives far less energy."]
  ],

  findsAt: 59,
  questions: [
    { q: "What is the difference between a producer and a consumer?", find: [11, 13],
      hint: "One of them can make food. The other one has to find it.",
      choices: [
        "Producers are plants and consumers are animals, with no other difference.",
        "Producers make their own food and consumers cannot, so consumers must eat.",
        "Producers are larger than consumers.",
        "Consumers make their own food and producers eat it."
      ], right: 1 },
    { q: "What happens during photosynthesis?", find: [21, 22, 23],
      hint: "Look for what goes in, what gets built, and what is given off.",
      choices: [
        "Energy from sunlight is used to build glucose from carbon dioxide and water, and oxygen is given off.",
        "Oxygen is used to break glucose down and release energy.",
        "Glucose is broken down without any oxygen at all.",
        "Chlorophyll is turned into sugar."
      ], right: 0 },
    { q: "How are photosynthesis and cellular respiration related?", find: [34, 35, 36, 37],
      hint: "Compare what each one uses with what the other one gives off.",
      choices: [
        "They are the same process under two names.",
        "Both of them give off oxygen.",
        "They are close to opposites: one stores the energy and the other spends it.",
        "Neither one involves glucose."
      ], right: 2 },
    { q: "Why does a cell use fermentation instead of cellular respiration?", find: [39, 40, 41],
      hint: "Something cellular respiration needs has run short.",
      choices: [
        "Because fermentation releases more energy.",
        "Because the cell has stopped needing energy.",
        "Because glucose is unavailable.",
        "Because oxygen has run short, and fermentation releases energy without it."
      ], right: 3 }
  ],

  vocabQuestions: [
    { q: "What is <i>metabolism</i>?",
      choices: [
        "The total of all the activities that keep an organism alive, growing and reproducing.",
        "The process plants use to catch sunlight.",
        "The energy stored in a single sugar molecule.",
        "Breaking down glucose without oxygen."
      ], right: 0 },
    { q: "What is a <i>producer</i>?",
      choices: [
        "An organism that must eat to get energy.",
        "An organism that makes its own food.",
        "An organism that gives off carbon dioxide.",
        "Any organism containing glucose."
      ], right: 1 },
    { q: "What is <i>cellular respiration</i>?",
      choices: [
        "Breathing air in and out of the lungs.",
        "Building glucose out of carbon dioxide and water.",
        "Using oxygen to break glucose down and release the energy stored in it.",
        "Releasing energy without using oxygen."
      ], right: 2 },
    { q: "What is <i>fermentation</i>?",
      choices: [
        "The process that gives off oxygen.",
        "Building sugar from sunlight.",
        "The green pigment that traps light.",
        "Releasing energy from glucose without using oxygen."
      ], right: 3 },
    { q: "What is a <i>consumer</i>?",
      choices: [
        "An organism that cannot make its own food and must eat.",
        "An organism that makes food from sunlight.",
        "An organism with no need for energy.",
        "Another word for a producer."
      ], right: 0 }
  ]
};
