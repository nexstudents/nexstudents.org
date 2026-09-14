/* science/inside-a-cell-part-by-part
   Grade 7 · science · unit 2. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 THE PROSE IN `parts` IS A DRAFT, NOT PAUL'S VOICE. Built 2026-09-13.

   ⚠️ THE BOOK LISTS THIRTEEN NEW SCIENCE WORDS FOR THIS SECTION. Carding all
   thirteen in one sitting would be the heaviest vocabulary load on the whole
   shelf, so this lesson cards EIGHT and teaches the rest in passing. The eight
   are the ones the objectives actually test. That is a deliberate deviation
   from the book and it is recorded here rather than hidden. */
'use strict';
module.exports = {
  id: "science/inside-a-cell-part-by-part",
  slug: "inside-a-cell-part-by-part",
  title: "Inside a Cell, Part by Part",
  unit: "Life Science &middot; U2-L2",
  seq: { unit: 2, unitTitle: "Inside the Cell", n: 2 },

  /* ── /teach-plan, 2026-09-13. Read off Merrill Life Science p36
        (leaf n61), archive.org/details/merrilllifescien0000dani. ── */
  plan: {
    objective: "Name the parts inside a cell and say what each one does, and tell a prokaryotic cell from a eukaryotic one.",
    markers: [
      "QUOTED, Objectives box: 'Diagram a plant cell and an animal cell; identify the parts and the function of each part.'",
      "QUOTED, Objectives box: 'Describe the importance of the nucleus in the cell.'",
      "QUOTED, Objectives box: 'Compare and contrast prokaryotic and eukaryotic cells.'",
      "QUOTED, the three-things spine: 'They all have a membrane and a gel-like material called cytoplasm inside the membrane. In addition, they all have something that controls the life of the cell.'",
      "QUOTED, the division: 'Cells that have no membrane around their nucleus or material are prokaryotic cells... A eukaryotic cell has a nucleus with a membrane around it.'",
      "QUOTED, margin question: 'How does a prokaryotic cell differ from a eukaryotic cell?'",
      "QUOTED, New Science Words (thirteen): cell membrane, cytoplasm, organelles, nucleus, chromatin, endoplasmic reticulum, ribosomes, Golgi bodies, mitochondria, lysosomes, vacuoles, cell wall, chloroplasts",
    ],
    method: "START WITH WHAT EVERY CELL SHARES, THEN SPLIT ONCE. Before naming a single organelle the book establishes three things common to all cells - a membrane, cytoplasm, and something that controls the cell. Only then does it make one division, prokaryotic against eukaryotic, on a single test: is there a membrane around the control center? The long list of parts hangs off that frame instead of arriving as a list to memorise.",
    exampleOnly: [
      "pond scum, bacteria, Hooke's dry cork boxes — WORLD: things seen under a microscope, carried straight on from 2-1.",
    ],
    digitize: "The existing reading engine. ⚠️ The first objective says DIAGRAM a plant and an animal cell, and there is no labelling mechanic on this site - a drag-a-label-onto-a-picture interaction does not exist. The reading and the naming are here; the diagram half is not. Flagged, not faked → review queue.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Science",
    blurb: "Three things every cell has, one question that splits them all in two, and what each part inside actually does.",
    contains: [
      "A story-form reading, read aloud with the words highlighted",
      "Eight vocabulary words, each one defined inside the reading",
      "The single test that separates every cell into two kinds",
      "A vocabulary check and a printable answer sheet",
    ] },
  eyebrow: ["Life Science", "U2-L2", "Life Science"],
  dek: "A cell is not a bag of soup. It is a room full of machinery, and almost every piece has a job you can name.",
  scripture: {
    ref: "1 Corinthians 12:17",
    text: "If the whole body were an eye, where were the hearing? If the whole were hearing, where were the smelling?",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will name the main parts inside a cell with the job each one does, and separate prokaryotic from eukaryotic cells using the membrane around the nucleus."
      ]},
      { h: "Key Concepts", p: [
        "Every cell has three things: a cell membrane around the outside, cytoplasm filling the inside, and something that controls it. The structures inside the cytoplasm that each do a job are called organelles.",
        "The single division is whether the control center has a membrane around it. No membrane means prokaryotic, which is bacteria and pond scum. A membrane means eukaryotic, which is every plant and animal cell in this unit."
      ]},
      { h: "Where Students Get Stuck", p: [
        "🚨 The vocabulary load is the real difficulty, not the ideas. The book lists thirteen new words. This lesson cards eight and mentions the rest in passing; do not push for all thirteen in one sitting.",
        "The other stumble is prokaryotic and eukaryotic, which sound alike and are easy to swap. The test is one question: is there a membrane around the nucleus? If it helps, eu- means true, and a eukaryotic cell has a true nucleus."
      ]},
      { h: "Teaching Suggestion", p: [
        "The cell membrane in this lesson is the same membrane Lesson 3-2 is entirely about. Naming it here is the run-up to that lesson; if he has already done 3-2, point back at it.",
        "Have him draw a cell rather than read a diagram. The first objective in the book is to diagram a plant and an animal cell, and the site has no labelling mechanic yet, so this half belongs on paper."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Not a Bag of Soup", s: [
      "When Robert Hooke first looked at cork through a microscope, he saw empty boxes.",
      "",
      "That is what he named cells after, small bare rooms.",
      "",
      "But cork is dead, and the boxes he saw were empty because whatever had lived in them was gone.",
      "",
      "A living cell is nothing like that.",
      "It is busy, crowded and changing all the time.",
      "",
      "So the first thing to get rid of is the idea that a cell is a little bag of soup.",
      "It is closer to a room full of machinery, and almost every piece of that machinery has a job you can name."
    ]},

    { title: "Three Things Every Cell Has", s: [
      "Before naming any of the machinery, start with what every single cell has in common.",
      "",
      "There are three.",
      "",
      "First, a cell membrane.",
      "That is the boundary around the outside, and it decides what gets in and what gets out.",
      "",
      "Second, cytoplasm.",
      "Cytoplasm is the gel-like material that fills the inside of the cell, behind the membrane.",
      "",
      "Third, something that controls the life of the cell.",
      "That control center is either a nucleus or loose nuclear material.",
      "",
      "Every cell that has ever been found has those three.",
      "A bacterium has them, an oak tree's cells have them, and yours have them.",
      "",
      "Hold on to that list, because the rest of this lesson hangs off it."
    ]},

    { title: "Two Kinds of Cell", s: [
      "Scientists have found that there are two basic types of cells, and the difference is one question.",
      "",
      "Is there a membrane around the control center?",
      "",
      "Cells that have no membrane around their nucleus or nuclear material are prokaryotic cells.",
      "Their genetic material floats loose in the cytoplasm.",
      "Bacteria are prokaryotic, and so is the green scum on top of a pond.",
      "",
      "A eukaryotic cell has a nucleus with a membrane around it.",
      "Its genetic material is shut away in its own compartment.",
      "Every plant and animal cell in this unit is eukaryotic.",
      "",
      "If the words keep swapping in your head, use this.",
      "The eu- at the front means true, so a eukaryotic cell is the one with a true nucleus.",
      "",
      "That is the entire test.",
      "Not size, not shape, and not whether it is a plant or an animal.",
      "Just whether the control center has a wall around it."
    ]},

    { title: "The Control Center", s: [
      "The nucleus is the part that directs the cell's activities.",
      "",
      "Inside it is chromatin, the material that carries the instructions for building and running the whole organism.",
      "",
      "This is why the nucleus matters so much.",
      "A cell can lose or damage other parts and carry on for a while.",
      "Without instructions it has nothing to follow.",
      "",
      "Think about what that means for the last lesson.",
      "Virchow said every cell comes from a cell that already existed.",
      "What actually gets passed on when a cell divides is a copy of those instructions."
    ]},

    { title: "The Machinery", s: [
      "The structures inside the cytoplasm that each do a particular job are called organelles.",
      "",
      "The word means little organs, and it is a good name.",
      "Your organs each do one job for your body, and organelles do the same for a cell.",
      "",
      "Mitochondria are where the cell releases energy from food.",
      "That is the cellular respiration from Lesson 3-3, and the mitochondria are where it happens.",
      "",
      "Vacuoles are storage spaces, holding water, food or waste.",
      "In a plant cell one vacuole is often so large it takes up most of the room.",
      "",
      "Lysosomes break down worn out parts and food particles.",
      "",
      "Ribosomes are where proteins get built.",
      "The endoplasmic reticulum is a system of passages that moves material around inside the cell.",
      "Golgi bodies package material and move it out.",
      "",
      "You do not need every one of those by heart today.",
      "You do need the idea: the inside of a cell is divided into parts, and each part is doing one job."
    ]},

    { title: "What Plants Have and You Do Not", s: [
      "Plant cells have two things animal cells do not.",
      "",
      "A cell wall sits outside the cell membrane and is stiff.",
      "It is why a plant can stand up without a skeleton, and why a celery stick snaps instead of flopping.",
      "",
      "Chloroplasts are the green structures where photosynthesis happens.",
      "",
      "That is Lesson 3-3 again, from the other side.",
      "Producers make their own food, and the chloroplast is the place in the cell where they do it.",
      "",
      "An animal cell has neither.",
      "No wall, so your cells are soft.",
      "No chloroplasts, so you have to eat."
    ]},

    { title: "Where Were the Hearing?", s: [
      "1 Corinthians 12:17 asks a strange question.",
      "",
      "[verse] “If the whole body were an eye, where were the hearing?”",
      "",
      "Paul is writing about people working together, and he reaches for a body to explain it, because a body is the clearest example anyone has of many different parts with one purpose.",
      "",
      "The same argument works a level down, inside a single cell.",
      "",
      "A cell that was all nucleus could hold instructions and do nothing.",
      "A cell that was all mitochondria could make energy with nothing to spend it on.",
      "",
      "The parts are different on purpose, and the difference is the point."
    ]}
  ],

  todo: { title: "What To Do Now", s: [
      "That is the reading done.",
      "First the questions, {q} of them, and the answers are all above.",
      "The one people trip on is prokaryotic against eukaryotic.",
      "Read Two Kinds of Cell again and look for the single test.",
      "Then the vocabulary check, {v} questions on the word cards at the top of the page.",
      "The book lists thirteen words for this section and you are being asked for eight, so do not panic about the ones that went by in passing.",
      "Last, on paper, and this is the part that makes it stick.",
      "Draw a plant cell and an animal cell side by side and label every part you can name without looking.",
      "Then check your drawing against the reading and add what you missed."
  ] },

  words: [
    ["Cell membrane", "The boundary around the outside of a cell that decides what gets in and out."],
    ["Cytoplasm", "The gel-like material that fills the inside of a cell."],
    ["Nucleus", "The control center that directs the cell's activities."],
    ["Organelle", "A structure inside the cytoplasm that does one particular job."],
    ["Prokaryotic", "A cell with no membrane around its nuclear material, such as a bacterium."],
    ["Eukaryotic", "A cell whose nucleus has a membrane around it, such as any plant or animal cell."],
    ["Mitochondria", "The organelles where a cell releases energy from food."],
    ["Chloroplast", "The green organelle in a plant cell where photosynthesis happens."]
  ],

  findsAt: 68,
  questions: [
    { q: "What three things does every cell have?",
      find: [8, 9],
      hint: "The reading counts them out before naming any machinery at all.",
      choices: [
        "A membrane, cytoplasm, and something that controls the cell.",
        "A nucleus, a cell wall, and chloroplasts.",
        "Mitochondria, ribosomes, and lysosomes.",
        "A membrane, a vacuole, and chromatin."
      ], right: 0 },

    { q: "What is the single test that separates prokaryotic cells from eukaryotic ones?",
      find: [19, 20],
      hint: "It is not size or shape, and it is one question.",
      choices: [
        "Whether the cell can move on its own.",
        "Whether there is a membrane around the control center.",
        "Whether the cell is from a plant or an animal.",
        "Whether the cell contains cytoplasm."
      ], right: 1 },

    { q: "Why does the nucleus matter so much to a cell?",
      find: [34, 35],
      hint: "Compare what happens when a cell loses other parts.",
      choices: [
        "Because it is the largest part of the cell.",
        "Because it produces the cell's energy.",
        "Because it holds the instructions, and without them the cell has nothing to follow.",
        "Because it forms the outer boundary."
      ], right: 2 },

    { q: "What is an organelle?",
      find: [39, 40],
      hint: "The word means little organs, and the reading says why that is a good name.",
      choices: [
        "The outer wall of a plant cell.",
        "Another word for a cell.",
        "The gel that fills the cell.",
        "A structure inside the cytoplasm that does one particular job."
      ], right: 3 },

    { q: "Which two parts does a plant cell have that an animal cell does not?",
      find: [53, 55],
      hint: "One makes it stiff. One makes it green.",
      choices: [
        "A cell wall and chloroplasts.",
        "A nucleus and mitochondria.",
        "Cytoplasm and ribosomes.",
        "Lysosomes and Golgi bodies."
      ], right: 0 },

    { q: "Which organelle connects back to cellular respiration from Lesson 3-3?",
      find: [42],
      hint: "The reading names the place where that process happens.",
      choices: [
        "The chloroplast.",
        "The mitochondria.",
        "The vacuole.",
        "The ribosome."
      ], right: 1 }
  ],

  vocabQuestions: [
    { q: "What is <i>cytoplasm</i>?",
      choices: [
        "The gel-like material that fills the inside of a cell.",
        "The stiff outer layer of a plant cell.",
        "The control center of the cell.",
        "A storage space for water and waste."
      ], right: 0 },
    { q: "What is a <i>prokaryotic</i> cell?",
      choices: [
        "A cell with a membrane around its nucleus.",
        "A cell with no membrane around its nuclear material, such as a bacterium.",
        "Any cell found in a plant.",
        "A cell with no cytoplasm."
      ], right: 1 },
    { q: "What do <i>mitochondria</i> do?",
      choices: [
        "Build proteins.",
        "Store water and waste.",
        "Release energy from food.",
        "Carry the cell's instructions."
      ], right: 2 },
    { q: "What is a <i>chloroplast</i>?",
      choices: [
        "The boundary around a cell.",
        "An organelle that breaks down worn out parts.",
        "The material that carries instructions.",
        "The green organelle in a plant cell where photosynthesis happens."
      ], right: 3 }
  ]
};
