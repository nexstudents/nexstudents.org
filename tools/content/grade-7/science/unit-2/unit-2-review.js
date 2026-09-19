/* science/unit-2-review
   Grade 7 · science · unit 2. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 A REVIEW IS A DIAGNOSTIC, NOT A TEST. Same rule as the Unit 1 Review: every
   hint names the lesson to go back to, so a wrong answer sends him somewhere.

   🚨 THE PROSE IN `parts` IS A DRAFT, NOT PAUL'S VOICE. Built 2026-09-19 by Sonnet
   from the four Unit 2 lessons and the Merrill Chapter 2 Review (pp49-51), then given
   the /natural pass. His prose is still the source → BEHAVIOR.md.

   ⚠️ 12 cards against 5 vocabulary questions WARNS and does not fail. A unit review
   gathers the words from four lessons; do not invent extra questions to match. */
'use strict';
module.exports = {
  id: "science/unit-2-review",
  slug: "unit-2-review",
  title: "Unit 2 Review: Inside the Cell",
  unit: "Life Science &middot; U2-L5",
  seq: { unit: 2, unitTitle: "Inside the Cell", n: 5 },

  /* ── /teach-plan, 2026-09-19. Read off Merrill Life Science (Glencoe 1994),
        Chapter 2 Review pp49-51, archive.org/details/merrilllifescien0000dani. ── */
  plan: {
    objective: "Pull the four Unit 2 lessons back together and see the whole chain, from the cell theory down to a single organelle and back up to a body.",
    markers: [
      "QUOTED, Chapter Review SUMMARY, 2-1: 'According to the cell theory, the cell is the basic unit of life. Organisms are made of one or more cells and all cells come from other cells.'",
      "QUOTED, SUMMARY, 2-2: 'Cell functions are performed by organelles under control of DNA in the nucleus.'",
      "QUOTED, SUMMARY, 2-3: 'Most many-celled organisms are organized into tissues, organs, and organ systems that perform specific jobs to keep an organism alive.'",
      "QUOTED, SUMMARY, 2-4: 'Rejection and availability of matching organs are problems connected with organ transplants.'",
      "QUOTED, CHECKING CONCEPTS: 'Choose the word or phrase that completes the sentence.'",
      "QUOTED, THINK AND WRITE CRITICALLY 15: 'Explain why the cell theory is important.'",
      "QUOTED, THINK AND WRITE CRITICALLY 16: 'What are some things to consider when an organ becomes available and a doctor has to decide between two patients?'",
    ],
    method: "A RECAP THAT RUNS ONE DIRECTION: zoom in, then zoom out. The four lessons go from the cell theory (what a cell IS), to what is inside one, to how cells team up, to what happens when a team is moved from one body to another. The review walks that chain in one pass so the student sees it as ONE idea and not four.",
    exampleOnly: [
      "the hamburger and onion tissue, the tadpole tail, the warehouse - WORLD: the unit's own examples, reused on purpose so recognising them is the recall",
    ],
    digitize: "The existing reading engine. Every question's answer-hunt points into the recap, and every hint names the lesson to reopen. NO NEW MECHANIC. ⚠️ The two THINK AND WRITE CRITICALLY questions have no answer key, so they live in `todo` as writing done in a notebook, same as 3-4 and 2-4.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Science",
    thumb: true,
    blurb: "The whole unit in one pass: the cell theory, the parts inside a cell, how cells team up into a body, and what happens when an organ moves from one person to another.",
    contains: [
      "The cell theory and the three things it says",
      "The parts of a cell, and which job belongs to which part",
      "Cells, tissues, organs and organ systems in order",
      "Two questions to answer in writing, with no answer key",
    ] },
  eyebrow: ["Life Science", "U2-L5", "Inside the Cell"],
  dek: "You've opened a cell, looked at its parts, and followed cells all the way up to an organ. Here's all of it in one place, and two questions you have to answer for yourself.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Bring the four Unit 2 lessons together, check which parts hold and which need a second read, and finish by writing about why the cell theory matters and how a hard organ decision might be made."
      ]},
      { h: "Key Concepts", p: [
        "Every question here is tied to one of the four lessons and the hint says which one, so a wrong answer is directions to the right page and not a mark against the student.",
        "The two written questions at the end are the real test of whether the unit landed, and neither has one right answer."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Start From the Top", s: [
      "Everything in this unit hangs from one idea, that the cell is the basic unit of life, and that idea has three parts.",
      "Every living thing is made of one or more cells, the cell is the smallest unit that carries out the activities of life, and all cells come from other cells that already existed.",
      "Together those three make up the cell theory, and it took a microscope and a few hundred years of scientists looking closer before anyone could say it."
    ]},
    { title: "Now Go Inside", s: [
      "A cell isn't a blob, because it has parts, and each part has a job.",
      "The cell membrane decides what comes in and goes out, the cytoplasm fills the space, and the nucleus directs everything like the boss in an office.",
      "The small structures in the cytoplasm are organelles, and each one does one particular job: mitochondria release energy from food, ribosomes build proteins, lysosomes break down waste, and vacuoles store things.",
      "A plant cell has two more, a cell wall that holds it up and chloroplasts that turn sunlight into food, while a bacterial cell has no nucleus membrane at all and is called prokaryotic."
    ]},
    { title: "Zoom Back Out", s: [
      "One cell can do its own job, but in a many-celled organism cells team up.",
      "A group of similar cells working together is a tissue, different tissues working together make an organ, and organs working together are an organ system.",
      "The shape of a cell tells you its job, so a long hollow tube carries water, and a small flexible disk moves through blood vessels."
    ]},
    { title: "And Then Someone Moves a Team", s: [
      "An organ transplant takes one of those teams out of one body and puts it into another.",
      "It can fail because the immune system attacks anything foreign, and that attack is called rejection, which doctors try to prevent by matching the organ and by giving antirejection drugs.",
      "The other problem is that there aren't enough organs for everyone who needs one, and that's a problem science can't settle by itself."
    ]},
    { title: "Look at the Whole Ladder", s: [
      "[verse] 1 Corinthians 12:14 says, “For the body is not one member, but many.”",
      "That's the whole unit in a sentence, because a body is many members and a member is many cells, and every one of them does a job the others depend on.",
      "You don't have to keep it all in one piece in your head, because the questions below send you back to the exact spot you need."
    ]}
  ],

  todo: { title: "What To Do Now", s: [
      "Start with the questions, {q} of them, and if one is hard the hint tells you which lesson to go back to.",
      "After that comes the vocabulary check at the bottom, {v} questions on the word cards at the top of the page.",
      "Now the part that matters most, and it happens on paper.",
      "First, explain in your notebook why the cell theory is important.",
      "Second, suppose an organ becomes available and a doctor has to decide between two patients, and write what things the doctor should think about.",
      "Write both in complete sentences, and give your reasons.",
      "There's no answer key for either one, and you'll be marked on whether you took a clear position and supported it."
  ] },

  words: [
    ["Cell theory", "Three ideas: all organisms are made of cells, the cell is the basic unit of life, and all cells come from other cells.", 2],
    ["Cell membrane", "The boundary around the outside of a cell that decides what gets in and what gets out.", 4],
    ["Cytoplasm", "The gel-like material that fills the inside of a cell.", 4],
    ["Nucleus", "The control center that directs the cell's activities.", 4],
    ["Organelle", "A structure inside the cytoplasm that does one particular job.", 5],
    ["Mitochondria", "The organelles where the cell gets energy out of food.", 5],
    ["Chloroplast", "The organelle where a plant cell catches sunlight and makes its own food.", 6],
    ["Cell wall", "A stiff layer outside the cell membrane of a plant cell.", 6],
    ["Tissue", "A group of similar cells working together.", 8],
    ["Organ", "Different tissues working together as one structure.", 8],
    ["Organ system", "Organs working together.", 8],
    ["Rejection", "When the immune system attacks a transplanted organ because it is foreign to the body.", 11]
  ],

  findsAt: 16,
  questions: [
    { q: "What are the three parts of the cell theory?", find: [1],
      hint: "Go back to Lesson 1, Cells: The Building Blocks of Life.",
      choices: [
        "Cells have a nucleus, cells have a wall, and cells make energy.",
        "Every living thing is made of cells, the cell is the basic unit of life, and all cells come from other cells.",
        "Only plants have cells, cells are always visible, and cells never divide.",
        "A microscope is needed, a cell is round, and a cell is alive."
      ], right: 1 },
    { q: "Which part of the cell decides what gets in and what goes out?", find: [4],
      hint: "Go back to Lesson 2, Inside a Cell, Part by Part.",
      choices: [
        "The nucleus.",
        "The cytoplasm.",
        "The cell membrane.",
        "The vacuole."
      ], right: 2 },
    { q: "Which organelle releases energy from food?", find: [5],
      hint: "Go back to Lesson 2. It is named right after the list of organelles.",
      choices: [
        "Mitochondria.",
        "Lysosomes.",
        "Ribosomes.",
        "Vacuoles."
      ], right: 0 },
    { q: "What two things does a plant cell have that an animal cell does not?", find: [6],
      hint: "Go back to Lesson 2. It is the last part before the tissues.",
      choices: [
        "A nucleus and cytoplasm.",
        "A mitochondrion and a lysosome.",
        "A cell membrane and ribosomes.",
        "A cell wall and chloroplasts."
      ], right: 3 },
    { q: "Put these in order from smallest to largest.", find: [8],
      hint: "Go back to Lesson 3, From Cells to Tissues to Organs.",
      choices: [
        "Cell, tissue, organ, organ system.",
        "Tissue, cell, organ system, organ.",
        "Organ, tissue, cell, organ system.",
        "Cell, organ, tissue, organ system."
      ], right: 0 },
    { q: "Why can an organ transplant fail?", find: [11],
      hint: "Go back to Lesson 4, Organ Transplants.",
      choices: [
        "The organ is always too big.",
        "The organ has no cells in it.",
        "The immune system attacks the organ because it is foreign to the body.",
        "The doctor forgets to match the blood."
      ], right: 2 }
  ],

  vocabQuestions: [
    { q: "What is an <i>organelle</i>?",
      choices: [
        "A structure inside the cytoplasm that does one particular job.",
        "A group of similar cells.",
        "The outside boundary of a cell.",
        "The energy a cell uses."
      ], right: 0 },
    { q: "What is a <i>tissue</i>?",
      choices: [
        "Organs working together.",
        "A group of similar cells working together.",
        "A structure inside a cell.",
        "A kind of microscope."
      ], right: 1 },
    { q: "What does the <i>nucleus</i> do?",
      choices: [
        "It stores water.",
        "It breaks down waste.",
        "It directs the cell's activities.",
        "It makes the cell wall."
      ], right: 2 },
    { q: "What does the <i>chloroplast</i> do?",
      choices: [
        "It releases energy from food.",
        "It holds the plant up.",
        "It packages proteins.",
        "It catches sunlight and makes food for the plant cell."
      ], right: 3 },
    { q: "What is <i>rejection</i>?",
      choices: [
        "The immune system attacking a transplanted organ because it is foreign to the body.",
        "A doctor refusing to do an operation.",
        "A cell splitting in two.",
        "An organ being kept in cold storage."
      ], right: 0 }
  ]
};
