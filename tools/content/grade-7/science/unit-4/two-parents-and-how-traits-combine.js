/* science/two-parents-and-how-traits-combine
   Grade 7 · science · unit 4. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 THE PROSE IN `parts` IS A DRAFT, NOT PAUL'S VOICE. Written 2026-09-24 on Opus
   from Merrill Life Science pp82-85, read on the borrowed copy the same evening,
   then given THE PASS from /natural and stamped.

   ⚠️ Kept at the book's level: sex cells, meiosis halving the chromosome number,
   fertilization, the zygote. Nothing about human reproduction beyond what the
   Merrill spread itself says.

   🚨 THE VERSE IS A WORKING CHOICE, NOT PAUL'S. Psalm 139:13 fits (formed in the
   womb, from one cell). Choosing the scripture is his → review queue. */
'use strict';
module.exports = {
  id: "science/two-parents-and-how-traits-combine",
  slug: "two-parents-and-how-traits-combine",
  title: "Two Parents, and How Traits Combine",
  unit: "Life Science &middot; U4-L2",
  seq: { unit: 4, unitTitle: "How Cells Make More Cells", n: 2 },
  natural: "2026-09-24",

  /* ── /teach-plan, 2026-09-24. Merrill Life Science pp82-85. ── */
  plan: {
    objective: "Explain why sex cells carry half the chromosomes of body cells, how meiosis makes them, and how fertilization restores the full number.",
    markers: [
      "QUOTED, Objectives box: 'Describe the stages of meiosis and its end products.' · 'Name the cells involved in fertilization and explain how fertilization occurs.'",
      "QUOTED, New Science Words: sperm, egg, meiosis, fertilization, zygote",
      "QUOTED: 'A human body cell has 23 pairs of chromosomes, but human sex cells have only 23 chromosomes. How does the chromosome number become reduced?'",
      "QUOTED: 'A cell that has two of every kind of chromosome is said to be diploid.' · 'A sex cell that has just one chromosome of each pair is haploid.'",
      "QUOTED: 'The two nuclear divisions result in four cells. Each of these four cells is a sex cell. Each sex cell has one half the chromosomes of the original cell.'",
    ],
    method: "ASK THE NUMBERS QUESTION FIRST. The book sets up a puzzle: body cells have 46, a new person starts from two cells joining, so why isn't the answer 92? Meiosis is the answer: two divisions instead of one, ending in four cells with half the chromosomes each. Fertilization then puts the full 46 back together.",
    exampleOnly: [
      "the old idea of a tiny finished person inside the egg - WORLD: the book's own opening, the history of the question",
      "corn (20 and 10), the horse (64), the goldfish - the book's number examples, only corn kept",
    ],
    digitize: "The reading engine. Meiosis I and II are an [ex] box each so the two divisions read as two. ⚠️ A diagram would help; the site has none for this.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Science",
    blurb: "Every cell in you has 46 chromosomes, and you started from two cells. So why don't you have 92? Meiosis, and the halving that makes a new life possible.",
    contains: [
      "A story-form reading, read aloud with the words highlighted",
      "Why sex cells carry half the chromosomes",
      "Meiosis: two divisions, four cells",
      "Fertilization and the zygote",
    ] },
  eyebrow: ["Life Science", "U4-L2", "How Cells Make More Cells"],
  dek: "You began as one single cell with half its instructions from each parent. Here's how the numbers work out.",

  scripture: {
    ref: "Psalm 139:13",
    text: "For thou hast possessed my reins: thou hast covered me in my mother's womb.",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will explain that sex cells are haploid (23 chromosomes in humans) while body cells are diploid (46), describe meiosis as two divisions that produce four sex cells, and explain that fertilization joins an egg and a sperm into a diploid zygote."
      ]},
      { h: "Key Concepts", p: [
        "Mitosis keeps the chromosome number the same. Meiosis halves it. That difference is the whole lesson.",
        "The book's numbers question is the best hook: if a sex cell had 46 chromosomes, a new person would have 92, and the number would double every generation."
      ]},
      { h: "Teaching Suggestion", p: [
        "Use pairs of socks as chromosome pairs. A body cell holds all the pairs; a sex cell gets one sock from each pair. Put two sex cells together and every pair is whole again."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "A Tiny Person in an Egg?", s: [
      "For a very long time, people argued about how a whole human could possibly grow from one tiny egg cell, and some decided the egg must already hold a tiny, completely formed person who just got bigger.",
      "It took the microscope to prove them wrong, because when scientists could finally look, there was no tiny person in there, just a cell.",
      "The truth turned out to be stranger: you began as one single cell, and half of the instructions in it came from each of your parents.",
      "But that raises a puzzle, and it's a numbers puzzle."
    ]},

    { title: "The Numbers Don't Add Up", s: [
      "Almost every cell in your body has 46 chromosomes, arranged in 23 matching pairs, and a cell with two of every kind like that is called diploid.",
      "Sexual reproduction needs two parents, and it starts when a sex cell from each one joins together: the sperm from the father and the egg from the mother.",
      "If each of those sex cells carried all 46 chromosomes, the new cell would have 92, and the next generation would have 184, doubling forever.",
      "That obviously doesn't happen, so somewhere along the way the number has to be cut in half."
    ]},

    { title: "Half a Set", s: [
      "The answer is that sex cells don't carry pairs at all, only one chromosome from each pair, which makes 23 instead of 46.",
      "A cell with just one of each kind is called haploid, which means single form.",
      "The same rule holds across living things, so corn has 20 chromosomes in its body cells and 10 in its sex cells.",
      "The special kind of cell division that makes these half-set cells is called meiosis, and it happens only in reproductive organs, in plants and animals alike."
    ]},

    { title: "Two Divisions Instead of One", s: [
      "Mitosis divides a cell once, but meiosis divides it twice, and that second division is the whole trick.",
      "",
      "[ex] Meiosis I: matching chromosomes pair up, then the pairs are pulled apart into two cells.",
      "[ex] Meiosis II: each of those two cells divides again, splitting every doubled chromosome.",
      "",
      "The first division separates the pairs, which is why it's sometimes called reduction division, and the second one works almost exactly like mitosis.",
      "At the end there are four cells instead of two, and each one holds half the chromosomes of the cell it started from, so a human cell with 46 ends up as four sex cells with 23 each."
    ]},

    { title: "Twenty-Three and Twenty-Three", s: [
      "When an egg and a sperm join, it's called fertilization, and the single new cell they make is called a zygote.",
      "The egg brings 23 chromosomes and the sperm brings 23, so the zygote has 46, the full diploid number, with one of every pair from each parent.",
      "From there the zygote starts dividing by mitosis, the process you met in the last lesson, and every new cell gets a copy of those same 46.",
      "That's why you have some traits from your mother and some from your father, because every pair in every cell of your body has one member from each of them."
    ]},

    { title: "Covered in the Womb", s: [
      "Go back to the old argument about a tiny finished person hiding in the egg.",
      "The truth is that you began as a single zygote smaller than the dot on an i, carrying all 46 chromosomes and every instruction your body would ever need.",
      "",
      "[verse] Psalm 139:13 says, “For thou hast possessed my reins: thou hast covered me in my mother's womb.”",
      "",
      "David is saying that God knew him and was at work in him before he was born, while he was still being formed.",
      "Meiosis and fertilization are how that forming begins, and science can describe every step of it without making it any less of a wonder."
    ]}
  ],

  todo: { title: "What To Do Now", s: [
      "You started as one cell with 23 chromosomes from each parent, and the questions ask you how that halving and joining works.",
      "{c} word cards sit at the top of the page, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "The one people mix up is mitosis and meiosis, so remember that mitosis keeps the number the same and meiosis cuts it in half.",
      "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] },

  words: [
    ["Meiosis", "Cell division that makes sex cells with half the number of chromosomes.", 11],
    ["Diploid", "Having two of every kind of chromosome, like your body cells with 46.", 4],
    ["Haploid", "Having just one chromosome from each pair, like a sex cell with 23.", 9],
    ["Fertilization", "The joining of an egg and a sperm.", 17],
    ["Zygote", "The single cell formed when an egg and a sperm join.", 17]
  ],

  findsAt: 26,
  questions: [
    { q: "Why can't sex cells carry all 46 chromosomes?", find: [6, 7],
      hint: "Read The Numbers Don't Add Up.",
      choices: [
        "Because they're too small.",
        "Because the new cell would have 92, and the number would double every generation.",
        "Because only the egg has chromosomes.",
        "Because chromosomes can't move."
      ], right: 1 },
    { q: "How many chromosomes does a human sex cell have?", find: [8],
      hint: "Read Half a Set.",
      choices: ["46", "92", "23", "12"], right: 2 },
    { q: "What does haploid mean?", find: [9],
      hint: "It means single form.",
      choices: [
        "Having one chromosome from each pair.",
        "Having two of every kind of chromosome.",
        "Having no chromosomes.",
        "Having four of every kind."
      ], right: 0 },
    { q: "How many times does the nucleus divide in meiosis?", find: [12],
      hint: "Read Two Divisions Instead of One.",
      choices: ["Once", "Three times", "Four times", "Twice"], right: 3 },
    { q: "How many sex cells does meiosis make from one starting cell?", find: [16],
      hint: "Two divisions.",
      choices: ["Two", "Four", "One", "Eight"], right: 1 },
    { q: "What is a zygote?", find: [17],
      hint: "Read Twenty-Three and Twenty-Three.",
      choices: [
        "A sex cell with 23 chromosomes.",
        "A cell that never divides.",
        "The single cell formed when an egg and a sperm join.",
        "The first division of meiosis."
      ], right: 2 },
    { q: "How many chromosomes does a human zygote have, and where did they come from?", find: [18],
      hint: "Add what the egg and the sperm each bring.",
      choices: [
        "46, with 23 from each parent.",
        "23, all from the mother.",
        "92, with 46 from each parent.",
        "46, all from the father."
      ], right: 0 },
    { q: "What's the main difference between mitosis and meiosis?", find: [12, 15],
      hint: "Think about the chromosome number.",
      choices: [
        "Mitosis happens only in plants.",
        "Meiosis makes body cells.",
        "They're the same process.",
        "Mitosis keeps the chromosome number the same, and meiosis cuts it in half."
      ], right: 3 }
  ],

  vocabQuestions: [
    { q: "What is <i>meiosis</i>?",
      choices: ["Cell division that makes sex cells with half the chromosomes.", "The joining of an egg and a sperm.", "Growing back a lost part.", "A cell copying its DNA."], right: 0 },
    { q: "Which cells are <i>diploid</i>?",
      choices: ["Sex cells.", "Body cells, like your skin cells with 46.", "Only plant cells.", "Bacteria."], right: 1 },
    { q: "What is <i>fertilization</i>?",
      choices: ["A cell dividing in two.", "A plant making food.", "Chromosomes lining up.", "The joining of an egg and a sperm."], right: 3 },
    { q: "What is a <i>zygote</i>?",
      choices: ["A pair of chromosomes.", "A haploid cell.", "The single cell formed when an egg and a sperm join.", "A kind of meiosis."], right: 2 }
  ]
};
