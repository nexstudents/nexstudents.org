/* science/mapping-the-human-genome
   Grade 7 · science · unit 5. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 REWRITTEN 2026-10-13 (Sonnet, checked by Opus) after Kolten said the lessons
   don't explain anything. The 2026-10-05 version assumed DNA, gene and chromosome
   were already clear, spent as many sentences on law and ethics as on the
   science, and never showed what a genome map or a base pair looks like. This
   one opens with a plain recap (DNA, gene, chromosome) and a drawn zoom from a
   cell down to the letters, then the science in plain words: what a genome map
   is (a drawn chromosome with genes as stations), what a base pair is (a drawn
   DNA ladder), and the gene count as a drawn bar chart (the 1994 estimate against
   the finished count). The ethics is cut down to one benefit, one risk, the 2008
   law in one sentence, and the You Decide question. Word cards: Genome, Base
   Pairs, Human Genome Project (kept) and DNA (new). The 1994 book is no longer
   called "the book" in student text; the estimate is stated as what scientists
   estimated in 1994, which is what the book said.

   🚨 ADDED FROM THE RECORD, worth a glance from Paul:
   · The Human Genome Project began in 1990, a draft was announced in 2000, and
     the sequence was declared finished in 2003.
   · The finished map holds about three billion base pairs and about 20,000 genes
     (the 1994 estimate was about 100,000, and the lesson says so out loud).
   · The Genetic Information Nondiscrimination Act of 2008 (GINA), which stops
     health insurers and employers from using genetic information. The lesson says
     it doesn't cover every kind of insurance.
   · Newborn screening from a few drops of blood, used as the opening scene. The
     lesson says "in most states" for cystic fibrosis.
   · NEW IN THIS REWRITE: DNA is written with four letters, A, T, C and G, and A
     pairs with T while C pairs with G (standard biology, drawn as a ladder). That
     the code is "packed into 46 chromosomes, half from each parent" is from the
     last two lessons.
   · CUT: the claim that scientists knew what only about 5,000 genes did.

   ⚠️ THE YOU DECIDE QUESTION HAS NO ANSWER KEY, so it lives in `todo` as
   notebook writing, the same as U4-L4. The question is ours: should a person's
   genes ever be used to decide a job or insurance?

   ⚠️ TONE. Disorders are described with care and no fear language, the same
   rule as U5-L3.

   🚨 THE VERSE IS A WORKING CHOICE, NOT PAUL'S. Micah 6:8 (do justly). Choosing
   the scripture is his, so it goes in the review queue. */
'use strict';
module.exports = {
  id: "science/mapping-the-human-genome",
  slug: "mapping-the-human-genome",
  title: "Mapping the Human Genome",
  unit: "Life Science &middot; U5-L4",
  seq: { unit: 5, unitTitle: "How Traits Pass Down", n: 4 },
  natural: "2026-10-13",

  /* ── /teach-plan, rewritten 2026-10-13. Merrill Life Science pp122-123. ── */
  plan: {
    objective: "Describe what the Human Genome Project set out to do (map the genes and read the code), say what a genome map and a base pair are, and weigh one benefit and one risk of knowing a person's genes.",
    markers: [
      "BOOK (paraphrased), Objectives box: describe the goal of the Human Genome Project, and explain its advantages and disadvantages.",
      "BOOK (paraphrased), term: genome, a map of a living thing's chromosomes and the genes on them.",
      "BOOK (paraphrased), analogy: a gene map is like a railroad map with stations on it.",
      "BOOK (paraphrased): doctors with the map could find the genes for cystic fibrosis, muscular dystrophy and other disorders from a few drops of blood, and a person with a gene for heart disease could prevent trouble early, for example by managing stress.",
      "BOOK (paraphrased), concerns: employers or airlines might refuse to hire someone because of the genes they carry, and some people might choose not to have children. The book says most scientists think the benefits outweigh the costs.",
      "BOOK (paraphrased), Connect to Physics: the project needs computers, because there are more than a billion base pairs to store.",
      "BOOK (paraphrased), Section Review: what's the purpose of the project, and one advantage and one disadvantage of it.",
    ],
    method: "RECAP, THEN THE SCIENCE DRAWN, THEN ONE BENEFIT, ONE RISK, AND THE STUDENT DECIDES. A zoom from cell to letters; a chromosome drawn as a line with genes as stations; a DNA ladder with its matched letters; the gene count as a bar chart; then the benefit and the risk side by side, and a question with no answer key.",
    exampleOnly: [
      "The railroad map, the newborn's heel prick and the employer. WORLD: a map with stations. The title and objective don't name them.",
      "⚠️ The 100,000-gene estimate is replaced by the finished count, said out loud. Added from the record, see the header.",
    ],
    digitize: "The reading engine, with four Watch It Worked walkthroughs drawn in text (the zoom from cell to letters, the gene map, the DNA ladder, the gene-count bars), plus the You Decide question as notebook writing in `todo`. ⚠️ The site still has no free-write input.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Science",
    blurb: "Scientists set out to find and read every gene a person has. A quick recap of DNA, genes and chromosomes, what the map looks like, and what it's good for, with a question you'll answer in writing.",
    contains: [
      "A recap of DNA, genes and chromosomes, drawn as a zoom",
      "What a genome map is, with the railroad-map comparison drawn out",
      "What a base pair is, drawn as a DNA ladder",
      "What the finished map found, against what scientists first guessed",
      "One benefit, one risk, and a You Decide question with no answer key",
    ] },
  eyebrow: ["Life Science", "U5-L4", "How Traits Pass Down"],
  dek: "Every person's genes are written down in one long code, and scientists decided to read all of it. Knowing what it says turns out to be the easy part.",

  scripture: {
    ref: "Micah 6:8",
    text: "He hath shewed thee, O man, what is good; and what doth the LORD require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Your student describes what the Human Genome Project set out to do, explains the railroad-map comparison, says what a base pair is, gives one benefit and one risk of knowing a person's genes, and writes a reasoned answer to the You Decide question."
      ]},
      { h: "Key Concepts", p: [
        "A genome is the full set of genes an organism carries, and a gene map shows where each gene sits on each chromosome, the way a railroad map shows where each station sits on each line.",
        "Scientists in 1994 estimated about 100,000 human genes. The project finished in 2003 and found about 20,000, and the lesson tells your student so, because a good scientific map gets corrected when the real count comes in."
      ]},
      { h: "Teaching Suggestion", p: [
        "Let your student argue both sides out loud before writing. The written answer is marked on whether it takes a clear position and supports it, not on which position it takes.",
        "Handle this with care. A genetic condition is described here the way the unit has described them all, as part of a person and not as a flaw, and your student shouldn't walk away thinking a gene decides who someone is."
      ]},
      { h: "Added From the Record", p: [
        "The finish dates, the finished gene count, the 2008 law (GINA), and the four DNA letters and their pairing are added from the historical record and standard biology. The map comparison, the benefits, the concerns and the view that most scientists think the benefits outweigh the costs are from the textbook."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "A Few Drops of Blood", s: [
      "A newborn baby, only a day or two old, gets her heel pricked at the hospital, and a few drops of blood are tested for conditions that a doctor can't see by looking at her.",
      "In most states one of those conditions is cystic fibrosis, a genetic disorder from the last lesson, and the test works because scientists know where to look.",
      "How do they know where to look, and who made the map that tells them?"
    ]},

    { title: "Quick Recap: What Your Cells Hold", s: [
      "Inside almost every cell in your body is a long code called {{DNA}}, which holds the instructions for building you.",
      "A gene is one section of that code, and it's the instructions for one trait, like a single recipe in a giant recipe book.",
      "The code is packed into 46 strings called chromosomes, half from your mom and half from your dad.",
      "",
      "[walk] Zoom in from a cell down to the code.",
      "[step] Start with one cell, far too small to see without a microscope. || cell",
      "[step] Inside it are 46 chromosomes, the strings that hold the code. || cell\n└─ 46 chromosomes",
      "[step] Each chromosome holds a long stretch of DNA, with many genes along it. || cell\n└─ 46 chromosomes\n   └─ many genes on each",
      "[step] DNA is written with just four letters, A, T, C and G. || cell\n└─ 46 chromosomes\n   └─ many genes on each\n      └─ letters:  A T G C C A T G ...",
      "",
      "So a gene is a short piece of one long message, and the whole message is far too long to read without help."
    ]},

    { title: "A Map With Stations", s: [
      "A {{genome}} is the whole set of genes an organism carries, and mapping one means working out where every gene sits on every chromosome.",
      "Think of a railroad map, where each chromosome is a long line and each gene is a station along it, so once you know where a station is, you can go straight to it.",
      "",
      "[walk] Draw a tiny piece of a gene map.",
      "[step] A chromosome is a long line. || ──────────────────────────────",
      "[step] Each gene is a station along the line, shown as a dot. || ──●─────●────●──────●────────●──",
      "[step] Give each station a number, so you can find it again. || ──●─────●────●──────●────────●──\n  1     2    3      4        5",
      "[step] A genome map is this picture for all 46 chromosomes, with every station placed. || 46 lines  ×  stations on each",
      "",
      "Without that map, finding one gene would be like looking for one house in a country with no street names."
    ]},

    { title: "Reading the Code", s: [
      "The project had a second job, which was to read the code, letter by letter.",
      "DNA is shaped like a twisted ladder, and each rung of the ladder is a matched pair of letters called a {{base pair}}.",
      "",
      "[walk] Look at a few rungs of the DNA ladder.",
      "[step] DNA has two long sides joined by rungs, like a ladder. || ┃     ┃\n┃─────┃\n┃─────┃\n┃─────┃",
      "[step] Each rung is a base pair, and the letters always match up the same way, with A paired to T and C paired to G. || A ─── T\nG ─── C\nT ─── A\nC ─── G",
      "[step] A person has more than three billion of these rungs. || 3,000,000,000+ base pairs",
      "",
      "The {{Human Genome Project}} began in 1990, when scientists in several countries set out to map every gene in a person and read the whole code.",
      "That's more than three billion base pairs, and the work needed powerful computers, since nobody could store or sort that many letters by hand."
    ]},

    { title: "Counting the Genes", s: [
      "In 1994, before the project was done, scientists estimated that people have about 100,000 genes.",
      "The project announced a first draft in 2000 and declared the map finished in 2003, and the finished count was about 20,000 genes.",
      "",
      "[walk] Compare the 1994 estimate with the finished count.",
      "[step] Use blocks, where one block stands for 10,000 genes. || ■ = 10,000 genes",
      "[step] The 1994 estimate was 100,000, which is ten blocks. || 1994 estimate  │■■■■■■■■■■ 100,000",
      "[step] The finished count is 20,000, which is two blocks. || 1994 estimate  │■■■■■■■■■■ 100,000\nfinished map   │■■ 20,000",
      "[step] The estimate was five times too high. || 100,000 ÷ 20,000 = 5",
      "",
      "Nobody was embarrassed, because that's how a map gets made: scientists give their best estimate, and then the real count arrives and they fix the number."
    ]},

    { title: "A Benefit and a Risk", s: [
      "With the map in hand, doctors can find the genes behind cystic fibrosis, muscular dystrophy and other disorders from just a few drops of blood.",
      "Finding out early can change what happens next, because a family can prepare, a doctor can start treatment sooner, and a person who carries a gene for heart disease can look after his health years before any trouble starts.",
      "Most scientists believe the benefits outweigh the costs, and that's a big reason the project was worth doing.",
      "But a map shows where things are, and the people who read it can use it well or badly.",
      "A person's genes are about as private as information gets, and the worry is that an employer or an airline might refuse to hire someone because of the genes he carries.",
      "The United States passed a law in 2008, the Genetic Information Nondiscrimination Act, which says health insurers and employers can't use a person's genetic information against him, though it doesn't cover every kind of insurance."
    ]},

    { title: "Do Justly", s: [
      "Think of the baby with the pricked heel, whose blood test could help her get care long before she can speak for herself.",
      "",
      "[verse] Micah 6:8 says, “He hath shewed thee, O man, what is good; and what doth the LORD require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?”",
      "",
      "Micah wasn't writing about genes, so the verse can't settle the question for you, but it does say what a good answer has to include, which is that people are treated justly and with mercy.",
      "A map of the human genome is one of the most powerful things scientists have ever made, and what people do with it is a question about how they treat each other."
    ]}
  ],

  todo: { title: "What To Do Now", s: [
      "The map of the genome is finished, and the question below is the one that's left for you.",
      "Start with the {Q} questions, and then the {v} questions on the {c} word cards at the top of the page, {T} questions in all.",
      "Then comes the part that matters most, and it happens on paper.",
      "Should a person's genes ever be used to decide whether he gets a job or an insurance policy?",
      "Write your answer in your notebook in complete sentences, take a clear side, and give at least two reasons.",
      "There's no answer key, and you'll be marked on whether you took a clear position and supported it.",
      "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] },

  words: [
    ["DNA", "The long code inside your cells that holds the instructions for building you. It is written in four letters, A, T, C and G.", 3],
    ["Genome", "The whole set of an organism's genes. Mapping a genome means finding where each gene sits on each chromosome.", 12],
    ["Base pair", "A matched pair of letters that forms one rung of the DNA ladder. A person has more than three billion of them.", 21],
    ["Human Genome Project", "The worldwide effort that began in 1990 to map all of a person's genes and read the whole code. It was finished in 2003.", 26]
  ],

  findsAt: 46,
  questions: [
    { q: "What is a gene?", find: [4],
      hint: "Read Quick Recap: What Your Cells Hold.",
      choices: [
        "A whole cell.",
        "One section of DNA that holds the instructions for one trait.",
        "A kind of chromosome.",
        "A single DNA letter."
      ], right: 1,
      why: "A gene is one recipe in the giant recipe book of DNA." },
    { q: "On the railroad-map comparison, what do the genes stand for?", find: [13],
      hint: "Read A Map With Stations.",
      choices: [
        "The long lines.",
        "The stations along the lines.",
        "The trains.",
        "The tickets."
      ], right: 1,
      why: "Each chromosome is a line, and each gene is a station on it." },
    { q: "In a base pair, which letter is A always matched with?", find: [24],
      hint: "Look at the DNA ladder.",
      choices: ["C", "G", "T", "A"], right: 2,
      why: "A pairs with T, and C pairs with G." },
    { q: "Why did the project need powerful computers?", find: [27],
      hint: "Think about how many base pairs there are.",
      choices: [
        "To draw pictures of the chromosomes.",
        "To protect the data from employers.",
        "To store and sort billions of letters of code.",
        "To grow cells in the laboratory."
      ], right: 2,
      why: "There are more than three billion base pairs, far too many to sort by hand." },
    { q: "About how many human genes did scientists estimate there were in 1994?", find: [28],
      hint: "Read Counting the Genes.",
      choices: ["About 5,000", "About 20,000", "About 46", "About 100,000"], right: 3,
      why: "The 1994 estimate was about 100,000." },
    { q: "The finished count was about 20,000 genes. The 1994 estimate was how many times too high?", find: [28,29,34],
      hint: "Divide 100,000 by 20,000.",
      choices: ["2 times", "5 times", "10 times", "100 times"], right: 1,
      why: "100,000 ÷ 20,000 = 5." },
    { q: "Which of these is a benefit of the map?", find: [36,37],
      hint: "Read A Benefit and a Risk.",
      choices: [
        "It lets scientists skip experiments.",
        "It lets doctors find the genes for disorders like cystic fibrosis from a few drops of blood.",
        "It makes every person healthy.",
        "It tells you what job to take."
      ], right: 1,
      why: "Doctors can find the gene from a few drops of blood and help early." },
    { q: "Which of these is a worry about knowing a person's genes?", find: [40],
      hint: "Read A Benefit and a Risk.",
      choices: [
        "Genes can't be read by computers.",
        "Doctors will stop using blood tests.",
        "An employer might refuse to hire a person because of the genes he carries.",
        "Every gene turns out to be harmful."
      ], right: 2,
      why: "That is why the 2008 law was passed." }
  ],

  vocabQuestions: [
    { q: "What is <i>DNA</i>?",
      choices: ["A kind of cell.", "The long code in your cells that holds the instructions for building you.", "A single gene.", "A map of a country."], right: 1 },
    { q: "What is a <i>genome</i>?",
      choices: ["The whole set of an organism's genes.", "A single gene.", "A kind of cell.", "A chromosome number."], right: 0 },
    { q: "What is a <i>base pair</i>?",
      choices: ["Two chromosomes.", "Two parents.", "A matched pair of letters that forms one rung of the DNA ladder.", "Two kinds of RNA."], right: 2 },
    { q: "What did the <i>Human Genome Project</i> set out to do?",
      choices: ["Make new organisms.", "Count the cells in the body.", "Find the oldest fossil.", "Map all of a person's genes and read the whole code."], right: 3 }
  ]
};
