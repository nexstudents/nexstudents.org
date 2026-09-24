/* science/dna-the-instructions-inside
   Grade 7 · science · unit 4. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 THE PROSE IN `parts` IS A DRAFT, NOT PAUL'S VOICE. Written 2026-09-24 on Opus
   from Merrill Life Science pp86-91, read on the borrowed copy the same evening,
   then given THE PASS from /natural and stamped.

   ⚠️ ROSALIND FRANKLIN IS THE PERSON IN THE STORY. The book names her and credits
   her X-ray work. Added from the historical record, and worth a glance from Paul:
   her X-ray photograph was shown to Watson without her knowledge, she died in 1958
   at 37, and the 1962 Nobel Prize went to Watson, Crick and Wilkins; the prize is
   never given after death.

   🚨 THE VERSE IS A WORKING CHOICE, NOT PAUL'S. Psalm 139:16 fits ("in thy book
   all my members were written"). Choosing the scripture is his → review queue. */
'use strict';
module.exports = {
  id: "science/dna-the-instructions-inside",
  slug: "dna-the-instructions-inside",
  title: "DNA: The Instructions Inside",
  unit: "Life Science &middot; U4-L3",
  seq: { unit: 4, unitTitle: "How Cells Make More Cells", n: 3 },
  natural: "2026-09-24",

  /* ── /teach-plan, 2026-09-24. Merrill Life Science pp86-91. ── */
  plan: {
    objective: "Describe DNA's shape and base pairs, explain how it copies itself, and explain how a gene becomes a protein by way of RNA.",
    markers: [
      "QUOTED, Objectives box: 'Construct and identify the parts of a model of a DNA molecule.' · 'Describe how DNA copies itself.'",
      "QUOTED, New Science Words: DNA, gene, RNA, mutation",
      "QUOTED: 'The chromosomes in the nucleus of a cell contain a code. This code is in the form of a chemical called DNA.'",
      "QUOTED: 'the structure of DNA is similar to the handrails and steps of a spiral staircase.'",
      "QUOTED: 'adenine always pairs with thymine, and guanine always pairs with cytosine.'",
      "QUOTED: 'The two strands of DNA unwind and separate. Each strand then becomes a pattern on which a new strand is formed.'",
      "QUOTED: 'Any permanent change in a gene or chromosome of a cell is called a mutation.'",
    ],
    method: "A CODE, THEN THE STAIRCASE, THEN THE COPY. The book opens on sending a coded message, builds DNA as a spiral staircase with the four bases as steps that only fit one partner, and uses that pairing rule to explain copying: unzip, and each half is a pattern for the other. Genes, RNA and mutations follow as what the code is FOR.",
    exampleOnly: [
      "Rosalind Franklin, Watson and Crick, Chargaff - WORLD: the discovery, the book's own history, with Franklin's story told in full",
      "the spiral staircase - the book's own model, kept",
    ],
    digitize: "The reading engine. Base pairing and the copying steps are [ex] boxes. ⚠️ A build-the-matching-strand drill (type the partner bases) would be a real mechanic; none exists yet.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Science",
    blurb: "A photograph nobody asked permission to show, a spiral staircase, and the four-letter code that tells every cell in you what to build.",
    contains: [
      "A story-form reading, read aloud with the words highlighted",
      "Rosalind Franklin, and the photograph that cracked DNA",
      "The four bases, and the partner each one always takes",
      "How DNA copies itself, and how a gene becomes a protein",
    ] },
  eyebrow: ["Life Science", "U4-L3", "How Cells Make More Cells"],
  dek: "Every cell you've ever had carries the same instructions, written in a code with only four letters. Here's how it was found, and how it works.",

  scripture: {
    ref: "Psalm 139:16",
    text: "Thine eyes did see my substance, yet being unperfect; and in thy book all my members were written, which in continuance were fashioned, when as yet there was none of them.",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will describe DNA as a double spiral with bases that pair A with T and G with C, explain how DNA copies itself by unzipping, and explain that a gene is a section of DNA that directs one protein, carried out to the ribosomes by RNA."
      ]},
      { h: "Key Concepts", p: [
        "The pairing rule does all the work. Because A only fits T and G only fits C, either half of a DNA molecule is enough to rebuild the other half.",
        "A mutation is any permanent change in a gene or chromosome. Many are harmful, some aren't, and one in a sex cell is passed to every cell of the offspring."
      ]},
      { h: "Teaching Suggestion", p: [
        "Write a strand like AGTAAC and have the student write the matching strand underneath (TCATTG). Then 'unzip' it and rebuild both halves. The book's own review question does exactly this."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "A Photograph Nobody Asked to Share", s: [
      "In 1952, in a lab in London, a scientist named Rosalind Franklin aimed X-rays at a tiny sample of DNA and captured a photograph that showed, for the first time, its shape: a spiral, and probably two spirals twisted together.",
      "Without her knowing, a colleague showed that photograph to James Watson, who with Francis Crick used it and the work of others to build the first correct model of DNA in 1953.",
      "Watson and Crick became famous, and Franklin died of cancer in 1958 at thirty-seven, four years before the Nobel Prize went to the men who had used her picture.",
      "So what was in that photograph that mattered so much?"
    ]},

    { title: "A Code Inside Every Cell", s: [
      "Every chromosome in the nucleus of a cell carries a code, written in a chemical called DNA, and that code is the set of instructions for everything the cell does.",
      "When a cell divides by mitosis, the DNA is copied and passed on, so every new cell gets the same instructions as the one before it.",
      "Every cell that has ever formed in your body, and in every plant and animal, has carried DNA, and the question Franklin's photograph helped answer was what that code actually looks like."
    ]},

    { title: "A Spiral Staircase", s: [
      "The answer is a twisted ladder, or better, a spiral staircase, with two handrails winding around each other.",
      "The handrails are made of sugar and phosphate molecules, and the steps between them are made of four chemicals called nitrogen bases: adenine, guanine, cytosine and thymine, written A, G, C and T.",
      "A scientist named Erwin Chargaff had already noticed that there was always as much A as T and as much G as C in a cell, which only makes sense if they come in pairs.",
      "",
      "[ex] A always pairs with T.",
      "[ex] G always pairs with C.",
      "",
      "Each step of the staircase is one of those pairs, and they fit like puzzle pieces, so a base will only ever join its own partner."
    ]},

    { title: "How DNA Copies Itself", s: [
      "That pairing rule is what lets DNA copy itself, and it happens every time a cell gets ready to divide.",
      "An enzyme unzips the staircase down the middle, breaking the steps apart, and each half then collects new bases from the cytoplasm, one matching partner at a time.",
      "",
      "[ex] Original strand: A G T A A C",
      "[ex] New partner strand: T C A T T G",
      "",
      "Because A only fits T and G only fits C, each half can only rebuild the exact partner it lost, so one DNA molecule becomes two identical ones.",
      "Each new molecule keeps one old strand and gets one new one, which is how the instructions stay the same through billions of divisions."
    ]},

    { title: "From Gene to Protein", s: [
      "DNA matters because it controls your traits, the color of your eyes and hair and whether you can digest milk, and it does that by telling your cells which proteins to make.",
      "A protein is a chain of amino acids in a certain order, and a section of DNA that holds the order for one protein is called a gene.",
      "The DNA stays safe in the nucleus, but proteins are built out in the cytoplasm on the ribosomes, so the cell sends a messenger.",
      "That messenger is RNA, a single-stranded copy of the gene that uses a base called uracil in place of thymine, and it carries the code out to the ribosomes, where the amino acids are linked together in the right order."
    ]},

    { title: "When the Code Changes", s: [
      "Copying billions of bases doesn't always go perfectly, and outside things like X-rays and some chemicals can damage chromosomes too.",
      "Any permanent change in a gene or chromosome is called a mutation, and because the code decides which proteins get made, a mutation can change a trait.",
      "Many mutations are harmful, and some make no difference at all, but a mutation in a sex cell is passed on to every cell of the offspring, which is why some traits run in families."
    ]},

    { title: "Written in a Book", s: [
      "Go back to Rosalind Franklin's photograph, a blurry X-shaped pattern that turned out to show the spiral staircase inside every living cell.",
      "Every cell in you carries that same staircase, with billions of steps, written in just four letters before you had a single bone or a heartbeat.",
      "",
      "[verse] Psalm 139:16 says, “Thine eyes did see my substance, yet being unperfect; and in thy book all my members were written, which in continuance were fashioned, when as yet there was none of them.”",
      "",
      "David wasn't writing about DNA, and it would be wrong to say he was; he was praising God for knowing him completely before he was formed.",
      "But it's hard to read the word written and not think of a code that describes your whole body before any of it exists, and Franklin spent her short life helping us read it."
    ]}
  ],

  todo: { title: "What To Do Now", s: [
      "A photograph nobody asked Rosalind Franklin to share showed us the staircase, and the questions ask you how that staircase works.",
      "{c} word cards sit at the top of the page, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "For any question about pairing, write the strand down and put each base's partner under it: A with T, G with C.",
      "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] },

  words: [
    ["DNA", "The chemical in chromosomes that carries a cell's coded instructions.", 4],
    ["Gene", "A section of DNA that holds the instructions for making one protein.", 20],
    ["RNA", "A single-stranded copy of a gene that carries its code out to the ribosomes.", 22],
    ["Mutation", "Any permanent change in a gene or chromosome.", 24]
  ],

  findsAt: 31,
  questions: [
    { q: "What did Rosalind Franklin's X-ray photograph show about DNA?", find: [0],
      hint: "Read A Photograph Nobody Asked to Share.",
      choices: [
        "That it was a flat sheet.",
        "That it was a spiral, probably two spirals twisted together.",
        "That it was made of proteins.",
        "That it was only in plant cells."
      ], right: 1 },
    { q: "What are the handrails of the DNA staircase made of?", find: [8],
      hint: "Read A Spiral Staircase.",
      choices: ["Sugar and phosphate molecules.", "Nitrogen bases.", "Amino acids.", "Proteins."], right: 0 },
    { q: "Which base always pairs with adenine (A)?", find: [10, 12],
      hint: "Look at the pairing rule.",
      choices: ["Guanine (G)", "Cytosine (C)", "Adenine (A)", "Thymine (T)"], right: 3 },
    { q: "If one strand reads A G T A A C, what is its partner strand?", find: [15, 16],
      hint: "Swap every base for its partner.",
      choices: ["A G T A A C", "C A G T T A", "T C A T T G", "G A C G G T"], right: 2 },
    { q: "How does DNA copy itself?", find: [14, 17],
      hint: "Read How DNA Copies Itself.",
      choices: [
        "It unzips, and each half collects matching bases to rebuild its partner.",
        "It splits into four pieces.",
        "It makes proteins that copy it.",
        "It doesn't copy itself; new DNA is made from nothing."
      ], right: 0 },
    { q: "What is a gene?", find: [20],
      hint: "Read From Gene to Protein.",
      choices: [
        "A whole chromosome.",
        "A single base.",
        "A kind of RNA.",
        "A section of DNA that holds the instructions for one protein."
      ], right: 3 },
    { q: "Why does the cell need RNA?", find: [21, 22],
      hint: "Where is the DNA, and where are proteins built?",
      choices: [
        "To break DNA apart.",
        "To carry the gene's code from the nucleus out to the ribosomes.",
        "To make the cell wall.",
        "To copy chromosomes during mitosis."
      ], right: 1 },
    { q: "Why can a mutation in a sex cell run in a family?", find: [25],
      hint: "Read When the Code Changes.",
      choices: [
        "Because it disappears after one generation.",
        "Because mutations only happen in body cells.",
        "Because every cell of the offspring comes from that sex cell and carries the mutation.",
        "Because X-rays run in families."
      ], right: 2 }
  ],

  vocabQuestions: [
    { q: "What is <i>DNA</i>?",
      choices: ["The chemical in chromosomes that carries a cell's coded instructions.", "A kind of protein.", "The wall of a plant cell.", "A sugar."], right: 0 },
    { q: "What is a <i>gene</i>?",
      choices: ["A whole cell.", "A section of DNA that holds the instructions for one protein.", "A kind of RNA.", "A pair of chromosomes."], right: 1 },
    { q: "How is <i>RNA</i> different from DNA?",
      choices: ["It has four strands.", "It never leaves the nucleus.", "It's made of amino acids.", "It's single-stranded and uses uracil instead of thymine."], right: 3 },
    { q: "What is a <i>mutation</i>?",
      choices: ["A cell dividing.", "A new protein.", "Any permanent change in a gene or chromosome.", "A pair of bases."], right: 2 }
  ]
};
