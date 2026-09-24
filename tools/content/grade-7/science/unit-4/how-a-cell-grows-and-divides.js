/* science/how-a-cell-grows-and-divides
   Grade 7 · science · unit 4. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 THE PROSE IN `parts` IS A DRAFT, NOT PAUL'S VOICE. Written 2026-09-24 on Opus
   from Merrill Life Science pp74-81, read on the borrowed copy the same evening,
   then given THE PASS from /natural and stamped.

   ⚠️ ONE CORRECTION TO THE BOOK. Merrill says red blood cells are made "at a rate
   of two to three billion per second". The accepted figure is about two to three
   MILLION a second, so the prose says millions. The book's other numbers (46
   chromosomes, the gut lining replaced about every five days) are kept.

   🚨 THE VERSE IS A WORKING CHOICE, NOT PAUL'S. Luke 2:52 fits (Jesus grew in
   stature, which is cell division). Choosing the scripture is his → review queue. */
'use strict';
module.exports = {
  id: "science/how-a-cell-grows-and-divides",
  slug: "how-a-cell-grows-and-divides",
  title: "How a Cell Grows and Divides",
  unit: "Life Science &middot; U4-L1",
  seq: { unit: 4, unitTitle: "How Cells Make More Cells", n: 1 },
  natural: "2026-09-24",

  /* ── /teach-plan, 2026-09-24. Merrill Life Science (Glencoe 1994) pp74-81,
        archive.org/details/merrilllifescien0000dani. ── */
  plan: {
    objective: "Describe how one cell becomes two by mitosis, why both new cells get the same chromosomes, and how asexual reproduction uses it.",
    markers: [
      "QUOTED, Objectives box: 'Describe mitosis and explain its importance.' · 'Explain differences between mitosis in plant and animal cells.' · 'Distinguish between asexual and sexual reproduction and give two examples of asexual reproduction.'",
      "QUOTED, New Science Words: mitosis, chromosomes, asexual reproduction, sexual reproduction",
      "QUOTED: 'Mitosis is the process in which a cell nucleus divides into two new nuclei, each of which contain the same number of chromosomes as the parent cell.'",
      "QUOTED: 'There are two important things to remember about mitosis. The first is that mitosis is the division of a nucleus. The second is that mitosis produces two new nuclei that have the same number of chromosomes as the original nucleus.'",
      "QUOTED: 'Fission, budding, and regeneration are types of asexual reproduction that result from mitosis.'",
    ],
    method: "START WITH THE STUDENT'S OWN BODY. The book opens at the doctor's office with height and mass, then points out that cells are dividing in you as you read. The steps of mitosis come as one sequence the student can follow on a single cell, and the book lands on its own two 'important things to remember'. Asexual reproduction closes it as mitosis doing a bigger job.",
    exampleOnly: [
      "the doctor's office, your palms, a cut healing, the gut lining - WORLD: your own body, the book's opening",
      "the hydra, the strawberry runner, the sea star, the sweet potato, bacteria - the book's examples of asexual reproduction, kept as a list",
    ],
    digitize: "The reading engine. The five stages are one [ex] box in order. ⚠️ An animation of mitosis would carry this far better than words; the site has no mechanic for one.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Science",
    blurb: "Right now, while you read this, parts of you are splitting in two. How one cell becomes two, and why both get exactly the same instructions.",
    contains: [
      "A story-form reading, read aloud with the words highlighted",
      "The five stages of mitosis in order, with a way to remember them",
      "How plant and animal cells split differently",
      "Fission, budding and regeneration as mitosis doing a bigger job",
    ] },
  eyebrow: ["Life Science", "U4-L1", "How Cells Make More Cells"],
  dek: "You aren't the same person you were an hour ago, at least not cell for cell. Here's how one cell becomes two.",

  scripture: {
    ref: "Luke 2:52",
    text: "And Jesus increased in wisdom and stature, and in favour with God and man.",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will describe mitosis as the division of a nucleus into two nuclei with the same number of chromosomes, name its stages in order, tell how plant and animal cells divide their cytoplasm differently, and give examples of asexual reproduction."
      ]},
      { h: "Key Concepts", p: [
        "Most of a cell's life is interphase, where it grows and copies its chromosomes. Mitosis then runs prophase, metaphase, anaphase and telophase, and the cytoplasm divides last.",
        "The two things the book asks the student to remember: mitosis divides the nucleus, and each new nucleus gets the same number of chromosomes as the old one. Human body cells have 46."
      ]},
      { h: "Teaching Suggestion", p: [
        "Make the book's Mini-Lab model with yarn for chromosomes and thread for spindle fibers, one poster per stage. Moving the yarn through the stages by hand is what makes the order stick."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "You, an Hour Ago", s: [
      "Every time you go to the doctor, somebody measures how tall you are and writes it down, and over the years the number keeps climbing.",
      "Most of that growth happens because the number of cells in your body keeps going up, and it's happening right now, while you read this sentence.",
      "The worn-out skin on your palms is being replaced, a scrape on your knee is closing, and your bones are turning out new red blood cells by the millions every second.",
      "So you aren't quite the same person you were an hour ago, at least not cell for cell, and that raises a question worth holding onto: how does one cell become two?"
    ]},

    { title: "Most of a Cell's Life Is Spent Getting Ready", s: [
      "A cell has a life cycle the same way you do, and most of it is spent in a stage called interphase, where the cell grows, does its job and gets ready to divide.",
      "Some cells, like the nerve cells in your brain and many of your muscle cells, stay in interphase and rarely divide again.",
      "Others, like your skin cells, go around the cycle again and again, and before one of them can split it has to do something important: it copies its chromosomes.",
      "Chromosomes are the structures in the nucleus that hold the cell's DNA, its instructions, and every one of them has to be doubled so that both new cells get a full set."
    ]},

    { title: "One Nucleus Becomes Two", s: [
      "The division itself is called mitosis, the process in which one nucleus divides into two new nuclei, each with the same number of chromosomes as the first.",
      "Scientists split it into four steps, and it helps to follow a single cell through all of them, starting from the interphase that comes before.",
      "",
      "[ex] Interphase: the cell grows and copies its chromosomes.",
      "[ex] Prophase: the doubled chromosomes appear and the nuclear membrane fades away.",
      "[ex] Metaphase: the chromosomes line up across the middle of the cell.",
      "[ex] Anaphase: each chromosome splits, and the halves are pulled to opposite ends.",
      "[ex] Telophase: a new nuclear membrane forms around each group.",
      "",
      "Threadlike spindle fibers stretch across the cell during all of this, and they're what pulls the chromosome halves apart in anaphase, like ropes reeling them in from each end.",
      "If you want a way to remember the order, the first letters spell IPMAT, and some students remember it as I Pass My Anatomy Test."
    ]},

    { title: "Splitting the Rest of the Cell", s: [
      "Once the nucleus has divided, the rest of the cell divides too, and this is where plants and animals do it differently.",
      "An animal cell simply pinches in around its middle until it separates into two, a bit like a balloon twisted in half.",
      "A plant cell can't pinch, because it's wrapped in a stiff cell wall, so it builds a new wall straight down the middle, called a cell plate, and ends up as two cells side by side.",
      "Either way the result is the same: two whole cells where there used to be one, and each one starts its own interphase and begins to grow."
    ]},

    { title: "The Two Things to Remember", s: [
      "The book boils mitosis down to two facts, and they're worth keeping.",
      "Mitosis is the division of a nucleus, and it produces two nuclei with exactly the same number of chromosomes as the original.",
      "Your skin cells each have 46 chromosomes, so every new skin cell made by mitosis also has 46, while a fruit fly's cells have 8, and a new fruit fly cell has exactly 8.",
      "That's the whole point of all the copying and lining up and pulling apart: nothing gets lost, and both cells get the full set of instructions."
    ]},

    { title: "When Mitosis Makes a Whole New Living Thing", s: [
      "For some living things, mitosis doesn't just grow a body; it makes a whole new one, and that's called asexual reproduction, where a new organism comes from just one parent.",
      "Bacteria reproduce by fission, splitting into two equal halves, and a tiny water animal called a hydra grows a bud on its side that eventually breaks off and lives on its own.",
      "A strawberry plant sends out runners that root and become new plants, and a sea star that loses an arm can grow it back, which is called regeneration.",
      "Because all of it comes from mitosis, the offspring have exactly the same DNA as their one parent, while sexual reproduction, which needs two parents, is where the next lesson picks up."
    ]},

    { title: "Growing in Stature", s: [
      "Go back to the doctor's office and the number on the chart that keeps going up.",
      "Every centimeter of that is millions of cells that each went through interphase, prophase, metaphase, anaphase and telophase, and came out with the same 46 chromosomes they started with.",
      "",
      "[verse] Luke 2:52 says, “And Jesus increased in wisdom and stature, and in favour with God and man.”",
      "",
      "Luke is telling us that Jesus grew up as a real boy, in body as well as in wisdom, and stature is the word for exactly the growing this lesson describes.",
      "He grew the same way you are growing right now, one careful cell division at a time."
    ]}
  ],

  todo: { title: "What To Do Now", s: [
      "You started this lesson a few thousand cells different from the person who finishes it, and now you know how each of those new cells was made.",
      "{c} word cards sit at the top of the page, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "The one people get wrong is the order of the stages, so if that trips you up, read One Nucleus Becomes Two again and say IPMAT out loud.",
      "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] },

  words: [
    ["Mitosis", "The process in which one nucleus divides into two new nuclei, each with the same number of chromosomes.", 8],
    ["Chromosomes", "Structures in the nucleus that hold the cell's DNA.", 7],
    ["Interphase", "The stage where a cell grows, does its job and copies its chromosomes before dividing.", 4],
    ["Asexual reproduction", "Making a new organism from just one parent, with the same DNA as that parent.", 25],
    ["Regeneration", "Growing back a lost body part, or a whole new organism from a piece.", 27]
  ],

  findsAt: 34,
  questions: [
    { q: "What is mitosis?", find: [8],
      hint: "Read One Nucleus Becomes Two.",
      choices: [
        "A cell dying and being replaced.",
        "One nucleus dividing into two nuclei with the same number of chromosomes.",
        "Two cells joining into one.",
        "A cell growing larger without dividing."
      ], right: 1 },
    { q: "What does a cell do during interphase before it divides?", find: [6, 7, 10],
      hint: "Read Most of a Cell's Life Is Spent Getting Ready.",
      choices: [
        "It copies its chromosomes.",
        "It splits its cytoplasm.",
        "It loses its nucleus.",
        "It lines its chromosomes up in the middle."
      ], right: 0 },
    { q: "Which is the correct order of the stages?", find: [10, 11, 12, 13, 14, 16],
      hint: "Remember IPMAT.",
      choices: [
        "Prophase, interphase, anaphase, metaphase, telophase",
        "Interphase, metaphase, prophase, telophase, anaphase",
        "Interphase, prophase, metaphase, anaphase, telophase",
        "Telophase, anaphase, metaphase, prophase, interphase"
      ], right: 2 },
    { q: "In which stage do the chromosomes line up across the middle of the cell?", find: [12],
      hint: "Look at the box in One Nucleus Becomes Two.",
      choices: ["Prophase", "Anaphase", "Telophase", "Metaphase"], right: 3 },
    { q: "How does a plant cell divide differently from an animal cell?", find: [18, 19],
      hint: "Read Splitting the Rest of the Cell.",
      choices: [
        "It pinches in around the middle.",
        "It doesn't divide at all.",
        "It builds a cell plate down the middle because its stiff wall can't pinch.",
        "It divides into four cells."
      ], right: 2 },
    { q: "A human skin cell has 46 chromosomes. How many does each new cell have after mitosis?", find: [23],
      hint: "Read The Two Things to Remember.",
      choices: ["23", "46", "92", "8"], right: 1 },
    { q: "Which of these is an example of asexual reproduction?", find: [26],
      hint: "Read When Mitosis Makes a Whole New Living Thing.",
      choices: [
        "A hydra growing a bud that breaks off.",
        "Two parents having offspring.",
        "A cell copying its chromosomes.",
        "A plant cell building a cell plate."
      ], right: 0 },
    { q: "Why do offspring from asexual reproduction have the same DNA as their parent?", find: [28],
      hint: "Think about what mitosis does to the chromosomes.",
      choices: [
        "Because they have two parents.",
        "Because DNA never changes.",
        "Because they're always the same size.",
        "Because they come from one parent by mitosis, which copies the chromosomes exactly."
      ], right: 3 }
  ],

  vocabQuestions: [
    { q: "What are <i>chromosomes</i>?",
      choices: ["The walls of a plant cell.", "Structures in the nucleus that hold the cell's DNA.", "The fibers that pull a cell apart.", "Cells that never divide."], right: 1 },
    { q: "What happens during <i>interphase</i>?",
      choices: ["The cell grows and copies its chromosomes.", "The cell pinches in two.", "The nuclear membrane disappears.", "The cell dies."], right: 0 },
    { q: "What is <i>asexual reproduction</i>?",
      choices: ["Two parents making offspring.", "A cell growing bigger.", "A plant making food.", "A new organism coming from just one parent."], right: 3 },
    { q: "What is <i>regeneration</i>?",
      choices: ["Copying DNA.", "Splitting into two equal halves.", "Growing back a lost part, like a sea star's arm.", "Building a cell plate."], right: 2 }
  ]
};
