/* science/engineering-living-things
   Grade 7 · science · unit 4. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 THE PROSE IN `parts` IS A DRAFT, NOT PAUL'S VOICE. Written 2026-09-24 on Opus
   from Merrill Life Science pp92-93 ("Science and Society: Inventing Organisms"),
   read on the borrowed copy the same evening, then given THE PASS and stamped.

   ⚠️ HENRIETTA LACKS IS ADDED, from the historical record, because the book's own
   You Decide! question is about patients' cells used without their say. Her cells
   were taken in 1951 without her knowledge, grew in the lab as the HeLa line and
   went into polio vaccine research. Worth a glance from Paul before shipping.
   The 1988 Harvard mouse patent and the bacteria gene in crops are the book's.

   ⚠️ THE YOU DECIDE QUESTION HAS NO ANSWER KEY, so it lives in `todo` as notebook
   writing, the same as 2-4 and 3-4.

   🚨 THE VERSE IS A WORKING CHOICE, NOT PAUL'S. Psalm 24:1 fits (the question of
   who owns life). Choosing the scripture is his → review queue. */
'use strict';
module.exports = {
  id: "science/engineering-living-things",
  slug: "engineering-living-things",
  title: "Engineering Living Things, and Where the Line Is",
  unit: "Life Science &middot; U4-L4",
  seq: { unit: 4, unitTitle: "How Cells Make More Cells", n: 4 },
  natural: "2026-09-24",

  /* ── /teach-plan, 2026-09-24. Merrill Life Science pp92-93. ── */
  plan: {
    objective: "Explain what a transgenic organism is, weigh the benefits and risks of making and patenting them, and argue a position in writing.",
    markers: [
      "QUOTED, Objectives box: 'Explain the term transgenic organism.' · 'Explain some advantages and disadvantages of patenting organisms.'",
      "QUOTED: 'transgenic organisms, organisms that contain genetic information from another species.'",
      "QUOTED: 'In 1988, the United States government gave the first transgenic organism patent to Harvard University for its transgenic mouse.'",
      "QUOTED: 'People will have to compare these risks with the benefits that they may provide.'",
      "QUOTED, You Decide!: patients' removed cells 'are sometimes kept alive in the laboratory' and made into products; 'Should patients' share in the profits from their cells?'",
    ],
    method: "A SCIENCE AND SOCIETY PAGE: THE FACTS, BOTH SIDES, THEN THE STUDENT DECIDES. The book explains the technology in a paragraph, lays out the benefits and the objections side by side, and ends on a question with no answer key. The lesson does the same, and the question lands on a real person.",
    exampleOnly: [
      "the cancer research mouse, the bacteria gene in crops, Harvard's patent - the book's examples, kept",
      "Henrietta Lacks - added, see the header",
    ],
    digitize: "The reading engine, plus the You Decide question as notebook writing in `todo`. ⚠️ The site still has no free-write input.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Science",
    blurb: "Scientists can move a gene from one living thing into another, and in 1988 someone patented the result. What that means, and a question you'll have to answer yourself.",
    contains: [
      "A story-form reading, read aloud with the words highlighted",
      "What a transgenic organism is, with the book's real examples",
      "The benefits and the worries, side by side",
      "A You Decide question to answer in writing, with no answer key",
    ] },
  eyebrow: ["Life Science", "U4-L4", "How Cells Make More Cells"],
  dek: "Once you know DNA is a code, someone will want to edit it. Here's what happens when they do, and who gets to own what they make.",

  scripture: {
    ref: "Psalm 24:1",
    text: "The earth is the LORD's, and the fulness thereof; the world, and they that dwell therein.",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will explain what a transgenic organism is, give the book's examples of why scientists make them, lay out the worries about making and patenting them, and write a reasoned answer to the You Decide question."
      ]},
      { h: "Key Concepts", p: [
        "A transgenic organism carries a gene from another species. The book's examples are a mouse given a human gene for cancer research, and crops given a bacteria gene so insects won't eat them.",
        "A patent gives its owner the legal right to control making and selling an invention. The first patent on a transgenic organism went to Harvard in 1988."
      ]},
      { h: "Teaching Suggestion", p: [
        "Let the student argue both sides out loud before writing. The written answer is marked on whether it takes a clear position and supports it, not on which position it takes."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Cells That Outlived Her", s: [
      "In 1951 a young mother named Henrietta Lacks went to a hospital in Baltimore with cancer, and doctors took a small sample of her cells without asking her or telling her family.",
      "Her cells did something no one had seen before: they kept dividing in the lab, again and again, long after she died that same year.",
      "Scientists all over the world have grown them ever since, and they helped test the polio vaccine and countless medicines, while her own family didn't learn what had happened for more than twenty years.",
      "Once we can keep cells alive, copy them and even change their DNA, a hard question follows close behind: who gets to decide what's done with them?"
    ]},

    { title: "Moving a Gene From One Species to Another", s: [
      "In the last lesson you learned that a gene is a section of DNA holding the instructions for one protein, and that the code is the same four letters in every living thing.",
      "That means a gene from one organism can be read by another, and scientists have learned to take a gene out of one species and place it in a different one, which is part of what's called genetic engineering.",
      "An organism that carries a gene from another species is called a transgenic organism.",
      "The book gives two examples: a mouse given a human gene that makes it prone to certain cancers, so researchers can test which substances cause cancer and which drugs might stop it, and crops given a gene from bacteria so that certain insects won't eat them."
    ]},

    { title: "Who Owns an Invention That's Alive?", s: [
      "When you invent something, you can get a patent, which is a license from the government that gives you the legal right to control who makes and sells it.",
      "Scientists who build a new transgenic organism in the lab began asking for patents on them too, and in 1988 the United States gave the first one to Harvard University for its cancer research mouse.",
      "For the first time, a company or a university could own a kind of animal the way it might own a design for an engine."
    ]},

    { title: "The Worries", s: [
      "Not everyone thinks this is a good idea, and the book lays out the worries fairly.",
      "Some people fear that a transgenic plant or animal could escape and become a pest, the way some plants and insects brought here from other countries have taken over and destroyed native ones.",
      "Others are simply opposed to anyone owning a living thing, and some scientists worry that patents get in the way of the old habit of sharing discoveries freely.",
      "The book doesn't settle any of it, and it ends by saying that people will have to compare the risks with the benefits, which means someone has to actually do the comparing."
    ]},

    { title: "The Earth Is the Lord's", s: [
      "Go back to Henrietta Lacks, whose cells saved lives she never knew about and earned money her family never saw.",
      "",
      "[verse] Psalm 24:1 says, “The earth is the LORD's, and the fulness thereof; the world, and they that dwell therein.”",
      "",
      "That psalm is praising God as the maker and owner of everything, not writing a rule about patents, so it doesn't answer the question for you.",
      "But it does change where the question starts, because if living things belong first to the One who made them, then everything people do with them, from a mouse in a lab to a patient's cells, is done as a steward and not as an owner."
    ]}
  ],

  todo: { title: "What To Do Now", s: [
      "Henrietta Lacks never knew her cells were being used, and the question below is the one her story raises.",
      "Start with the questions, {Q} of them, and then the vocabulary check at the bottom, {v} questions on the word cards at the top of the page.",
      "Then the part that matters most, and it happens on paper.",
      "When a patient's cells are removed and made into a product that earns money, should that patient share in the profits?",
      "Write your answer in your notebook in complete sentences, take a clear side, and give at least two reasons.",
      "There's no answer key, and you'll be marked on whether you took a clear position and supported it.",
      "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] },

  words: [
    ["Transgenic organism", "An organism that carries a gene from another species.", 6],
    ["Genetic engineering", "Changing an organism's DNA, including moving a gene from one species to another.", 5],
    ["Patent", "A license from the government giving the owner the legal right to control making and selling an invention.", 8]
  ],

  findsAt: 19,
  questions: [
    { q: "What made Henrietta Lacks's cells so important to science?", find: [1, 2],
      hint: "Read Cells That Outlived Her.",
      choices: [
        "They never divided.",
        "They kept dividing in the lab and were used to test vaccines and medicines.",
        "They were the first plant cells ever seen.",
        "They had no DNA."
      ], right: 1 },
    { q: "What is a transgenic organism?", find: [6],
      hint: "Read Moving a Gene From One Species to Another.",
      choices: [
        "An organism with no genes.",
        "An organism made by mitosis.",
        "An organism that carries a gene from another species.",
        "An organism that has been patented."
      ], right: 2 },
    { q: "Why can a gene from one species work in another?", find: [4, 5],
      hint: "Think about the four-letter code.",
      choices: [
        "Because the code is the same four letters in every living thing.",
        "Because all species are the same size.",
        "Because genes don't need DNA.",
        "Because patents allow it."
      ], right: 0 },
    { q: "Why was a human gene put into the research mouse?", find: [7],
      hint: "Read the book's two examples.",
      choices: [
        "To make it grow bigger.",
        "To keep insects away.",
        "To make it live longer.",
        "So it would develop certain cancers and researchers could test causes and drugs."
      ], right: 3 },
    { q: "What does a patent give its owner?", find: [8],
      hint: "Read Who Owns an Invention That's Alive?",
      choices: [
        "The legal right to control who makes and sells the invention.",
        "A prize for the best invention.",
        "Free use of anyone's DNA.",
        "Permission to share the invention freely."
      ], right: 0 },
    { q: "Which of these is one of the worries the book lists?", find: [12],
      hint: "Read The Worries.",
      choices: [
        "Transgenic crops might taste bad.",
        "Mice might become too smart.",
        "A transgenic organism might escape and become a pest.",
        "Patents might make research too cheap."
      ], right: 2 }
  ],

  vocabQuestions: [
    { q: "What is a <i>transgenic organism</i>?",
      choices: ["An organism that carries a gene from another species.", "Any organism in a lab.", "An organism with no DNA.", "A cell that never stops dividing."], right: 0 },
    { q: "What is <i>genetic engineering</i>?",
      choices: ["Building machines out of cells.", "Changing an organism's DNA.", "Growing plants from seeds.", "Studying fossils."], right: 1 },
    { q: "What is a <i>patent</i>?",
      choices: ["A kind of gene.", "A hospital record.", "A scientific paper.", "A license giving the legal right to control an invention."], right: 3 }
  ]
};
