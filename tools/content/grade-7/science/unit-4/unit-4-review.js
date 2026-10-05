/* science/unit-4-review
   Grade 7 · science · unit 4. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 A REVIEW IS A DIAGNOSTIC, NOT A TEST. Same rule as the Unit 1, 2 and 3
   Reviews: every hint names the lesson to go back to, so a wrong answer sends
   him somewhere.

   🚨 THE PROSE IN `parts` IS A DRAFT, NOT PAUL'S VOICE. Built 2026-10-05 on
   Sonnet from the four Unit 4 lessons already in this folder and the Merrill
   Chapter 4 Review (printed pp95-97, via the week 6-7 packet, paraphrased),
   then given the /natural pass.

   ⚠️ THE VERSE IS A CALLBACK, not a new choice: Psalm 139:16 is the verse Unit 4
   Lesson 3 (DNA) already carries. If Paul would rather the review use another of
   the unit's verses (Luke 2:52, Psalm 139:13, Psalm 24:1), or none, it is one
   line.

   ⚠️ 12 cards against 5 vocabulary questions WARNS and does not fail. A unit
   review gathers the words from four lessons; do not invent extra questions.

   ⚠️ THE TWO THINK AND WRITE QUESTIONS HAVE NO ANSWER KEY, so they live in
   `todo` as notebook writing, the same as the Unit 2 and Unit 3 Reviews. They
   are our wording of the chapter review's own question types (genes against
   chromosomes, and a chromosome count through meiosis). */
'use strict';
module.exports = {
  id: "science/unit-4-review",
  slug: "unit-4-review",
  title: "Unit 4 Review: How Cells Make More Cells",
  unit: "Life Science &middot; U4-L5",
  seq: { unit: 4, unitTitle: "How Cells Make More Cells", n: 5 },
  natural: "2026-10-05",

  /* ── /teach-plan, 2026-10-05. Read off Merrill Life Science (Glencoe 1994),
        Chapter 4 Review, printed pp95-97, and the four built Unit 4 lessons. ── */
  plan: {
    objective: "Pull the four Unit 4 lessons back together and follow one path: a cell copies itself, two parents each pass on half a set, the instructions are written in DNA, and people have learned to move genes on purpose.",
    markers: [
      "BOOK (paraphrased), Chapter Review SUMMARY, 4-1: cells divide by mitosis and a division of the cytoplasm; chromosomes copy and then separate; animal cells pinch in and plant cells form a cell plate; reproduction is asexual with one parent or sexual with two.",
      "BOOK (paraphrased), SUMMARY, 4-2: meiosis makes sex cells with half the chromosome number, and fertilization joins an egg and a sperm into a zygote with the full number.",
      "BOOK (paraphrased), SUMMARY, 4-3: the order of the bases in DNA directs the cell, DNA copies itself, RNA carries a gene's instructions to build proteins, and a mutation is a change in the DNA that is usually harmful and sometimes helpful.",
      "BOOK (paraphrased), SUMMARY, 4-4: a transgenic organism is made by moving a gene from one species into another, which is useful in research and can also cause worries.",
      "BOOK (paraphrased), THINK AND WRITE CRITICALLY: explain the difference between genes and chromosomes, and work out a chromosome number through meiosis (a cell with 24 chromosomes makes sex cells with 12).",
    ],
    method: "A RECAP THAT FOLLOWS THE INSTRUCTIONS. The four lessons are one journey: a cell copies its chromosomes and divides, two parents each hand on half a set, the set is made of DNA that holds a code, and the code can now be moved from one living thing to another. The review walks that path in one pass so the student sees one story, not four chapters.",
    exampleOnly: [
      "Nothing new. Every example here is one the unit already used, so recognizing it is the recall.",
    ],
    digitize: "The existing reading engine. Every question's answer-hunt points into the recap, and every hint names the lesson to reopen. NO NEW MECHANIC. ⚠️ The two THINK AND WRITE CRITICALLY questions have no answer key, so they live in `todo` as notebook writing.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Science",
    blurb: "The whole unit in one pass: how a cell divides, how two parents each pass on half a set, how DNA holds the instructions, and how genes get moved on purpose.",
    contains: [
      "Mitosis, and asexual against sexual reproduction",
      "Meiosis, fertilization and the zygote",
      "DNA, RNA, genes and mutations",
      "Transgenic organisms",
      "Two questions to answer in writing, with no answer key",
    ] },
  eyebrow: ["Life Science", "U4-L5", "How Cells Make More Cells"],
  dek: "You've watched one cell become two, followed half a set of chromosomes from each parent, and read the code that tells a cell what to build. Here's all of it in one place, and two questions you'll have to answer for yourself.",

  scripture: {
    ref: "Psalm 139:16",
    text: "Thine eyes did see my substance, yet being unperfect; and in thy book all my members were written, which in continuance were fashioned, when as yet there was none of them.",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Bring the four Unit 4 lessons together, check which parts hold and which need a second read, and finish by writing about the difference between a gene and a chromosome and about how a chromosome number changes through meiosis and fertilization."
      ]},
      { h: "Key Concepts", p: [
        "Every question here is tied to one of the four lessons and the hint says which one, so a wrong answer is directions to the right page and not a mark against the student.",
        "The two written questions at the end are the real test of whether the unit landed. The chromosome-count question needs the idea of half a set, not a memorized number: sex cells carry half, and fertilization puts the full set back."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "One Cell Becomes Two", s: [
      "Every cell in your body came from another cell, and the way a cell makes more of itself is mitosis, in which one nucleus divides into two nuclei with exactly the same chromosomes.",
      "Before it can divide, the cell copies every chromosome, and then the copies are pulled apart so each new nucleus gets a full set, after which the cytoplasm divides too.",
      "An animal cell pinches in the middle until it separates, while a plant cell builds a cell plate across the middle, since a plant cell has a wall.",
      "When a single parent makes a new living thing this way, it's asexual reproduction, and when two parents are involved it's sexual reproduction."
    ]},

    { title: "Half a Set From Each Parent", s: [
      "A new person can't get a full set of 46 chromosomes from each parent, because the new cell would have 92, and the number would double with every generation.",
      "So the cells that make eggs and sperm divide by meiosis instead, which gives each sex cell just half the chromosomes, 23 instead of 46.",
      "Fertilization is when an egg and a sperm join, and the single cell they make is a zygote, which has the full 46 again, half from each parent.",
      "A cell with the full set is diploid and a sex cell with half is haploid, and the whole system works because those two numbers keep trading places."
    ]},

    { title: "The Instructions Written Inside", s: [
      "Chromosomes are made of DNA, a long spiral molecule whose rungs are four chemical bases in a particular order, and that order is a code the cell can read.",
      "A gene is a section of that DNA holding the instructions for one protein, and before a cell divides, the DNA copies itself so the new cell starts with the same code.",
      "To use a gene, the cell makes an RNA copy of it, and that copy carries the instructions out to the ribosomes, where the protein gets built.",
      "A permanent change in the code is a mutation, and most of them do harm, although every once in a while a change turns out to help."
    ]},

    { title: "Moving Genes on Purpose", s: [
      "Because every living thing reads the same four-letter code, scientists can lift a gene out of one species and place it in another.",
      "An organism that carries a gene from another species is called a transgenic organism, and the unit's examples were a mouse made to study cancer and crops given a gene so insects won't eat them.",
      "In 1988 a university got the first patent on one of these animals, and the worries that came with it, from escaped pests to owning a living thing, are still being argued.",
      "Knowing how to do something and knowing whether to do it turned out to be two separate questions."
    ]},

    { title: "Written in a Book", s: [
      "[verse] Psalm 139:16 says, “Thine eyes did see my substance, yet being unperfect; and in thy book all my members were written, which in continuance were fashioned, when as yet there was none of them.”",
      "The DNA lesson read that verse beside the real code, because an instruction written down before there was a body to follow it is what the psalm describes and what a gene is.",
      "You don't have to hold the whole path in your head at once, since the questions below send you back to the exact lesson you need."
    ]}
  ],

  todo: { title: "What To Do Now", s: [
      "Start with the questions, {Q} of them, and if one is hard the hint tells you which lesson to go back to.",
      "After that comes the vocabulary check at the bottom, {v} questions on the word cards at the top of the page.",
      "Then the part that matters most, and it happens on paper.",
      "First, explain in your notebook the difference between a gene and a chromosome.",
      "Second, a body cell has 24 chromosomes, so write how many chromosomes each sex cell has after meiosis, how many the zygote has after fertilization, and why those numbers matter.",
      "Write both in complete sentences, and give your reasons.",
      "There's no answer key for either one, and you'll be marked on whether your explanation is clear and uses what the unit taught."
  ] },

  words: [
    ["Mitosis", "The process in which one nucleus divides into two new nuclei, each with the same number of chromosomes.", 0],
    ["Chromosomes", "Structures in the nucleus that hold the cell's DNA.", 1],
    ["Asexual reproduction", "Making a new organism from just one parent, with the same DNA as that parent.", 3],
    ["Meiosis", "Cell division that makes sex cells with half the number of chromosomes.", 5],
    ["Diploid", "Having two of every kind of chromosome, like your body cells with 46.", 7],
    ["Fertilization", "The joining of an egg and a sperm.", 6],
    ["Zygote", "The single cell formed when an egg and a sperm join.", 6],
    ["DNA", "The chemical in chromosomes that carries a cell's coded instructions.", 8],
    ["Gene", "A section of DNA that holds the instructions for making one protein.", 9],
    ["RNA", "A single-stranded copy of a gene that carries its code out to the ribosomes.", 10],
    ["Mutation", "Any permanent change in a gene or chromosome.", 11],
    ["Transgenic organism", "An organism that carries a gene from another species.", 13]
  ],

  findsAt: 19,
  questions: [
    { q: "What does a cell do to its chromosomes before it divides?",
      find: [1],
      hint: "Go back to Lesson 1, How a Cell Grows and Divides.",
      choices: [
        "It copies them, and then the copies are pulled apart.",
        "It throws half of them away.",
        "It turns them into RNA.",
        "It leaves them alone."
      ], right: 0 },

    { q: "How does a plant cell divide differently from an animal cell?",
      find: [2],
      hint: "Go back to Lesson 1, Splitting the Rest of the Cell.",
      choices: [
        "It pinches in more slowly.",
        "It builds a cell plate across the middle.",
        "It skips the copying step.",
        "It makes four cells instead of two."
      ], right: 1 },

    { q: "What makes reproduction asexual?",
      find: [3],
      hint: "Go back to Lesson 1, When Mitosis Makes a Whole New Living Thing.",
      choices: [
        "Two parents are involved.",
        "It uses eggs and sperm.",
        "It takes place only in plants.",
        "Just one parent makes the new living thing."
      ], right: 3 },

    { q: "Why do sex cells carry only half the chromosomes?",
      find: [4, 5],
      hint: "Go back to Lesson 2, Two Parents, and How Traits Combine.",
      choices: [
        "So fertilization can put the full number back together instead of doubling it.",
        "Because they're too small to hold more.",
        "Because half the chromosomes are damaged.",
        "So the new cell has fewer chromosomes than its parents."
      ], right: 0 },

    { q: "What's formed when an egg and a sperm join?",
      find: [6],
      hint: "Go back to Lesson 2, Twenty-Three and Twenty-Three.",
      choices: ["A mutation", "A gene", "A zygote", "An RNA strand"], right: 2 },

    { q: "What do the four bases in DNA do?",
      find: [8],
      hint: "Go back to Lesson 3, DNA: The Instructions Inside.",
      choices: [
        "They store energy.",
        "They hold the cell wall together.",
        "They copy the cytoplasm.",
        "Their order is a code the cell can read."
      ], right: 3 },

    { q: "What does an RNA copy of a gene do?",
      find: [10],
      hint: "Go back to Lesson 3, From Gene to Protein.",
      choices: [
        "It carries the gene's instructions out to the ribosomes.",
        "It divides the nucleus.",
        "It turns an egg into a sperm.",
        "It permanently changes the DNA."
      ], right: 0 },

    { q: "What is a mutation?",
      find: [11],
      hint: "Go back to Lesson 3, When the Code Changes.",
      choices: [
        "A cell dividing in two.",
        "A permanent change in a gene or chromosome.",
        "A gene being copied exactly.",
        "A cell plate forming."
      ], right: 1 },

    { q: "What's a transgenic organism?",
      find: [13],
      hint: "Go back to Lesson 4, Engineering Living Things, and Where the Line Is.",
      choices: [
        "An organism with only one parent.",
        "An organism that has twice the chromosomes.",
        "An organism that carries a gene from another species.",
        "An organism grown from a cutting."
      ], right: 2 }
  ],

  vocabQuestions: [
    { q: "What is <i>mitosis</i>?",
      choices: [
        "Making sex cells with half the chromosomes.",
        "One nucleus dividing into two nuclei with the same chromosomes.",
        "A gene being moved to another species.",
        "An egg and a sperm joining."
      ], right: 1 },
    { q: "What does <i>diploid</i> mean?",
      choices: [
        "Having half the chromosomes.",
        "Having been changed by a mutation.",
        "Having two of every kind of chromosome.",
        "Having one parent."
      ], right: 2 },
    { q: "What is <i>fertilization</i>?",
      choices: [
        "The joining of an egg and a sperm.",
        "A cell dividing in two.",
        "A gene being copied.",
        "A cell growing larger."
      ], right: 0 },
    { q: "What is a <i>gene</i>?",
      choices: [
        "A whole chromosome.",
        "A cell with half the chromosomes.",
        "A cell wall.",
        "A section of DNA that holds the instructions for one protein."
      ], right: 3 },
    { q: "What is <i>RNA</i>?",
      choices: [
        "A single-stranded copy of a gene that carries its code to the ribosomes.",
        "The spiral molecule that chromosomes are made of.",
        "A cell made from an egg and a sperm.",
        "A permanent change in a gene."
      ], right: 0 }
  ]
};
