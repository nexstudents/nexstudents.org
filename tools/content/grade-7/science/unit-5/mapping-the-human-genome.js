/* science/mapping-the-human-genome
   Grade 7 · science · unit 5. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 THE PROSE IN `parts` IS A DRAFT, NOT PAUL'S VOICE. Written 2026-10-05 on
   Sonnet from Merrill Life Science pp122-123 ("Science and Society: The Human
   Genome"), via the week 6-7 packet (paraphrased notes) and the teach-plan, then
   given THE PASS and stamped. SHAPE: Science and Society, copied from
   science/engineering-living-things.

   🚨 ADDED FROM THE RECORD, because the book is from 1994 and predates the
   finish. All worth a glance from Paul:
   · The Human Genome Project began in 1990, a draft was announced in 2000, and
     the sequence was declared finished in 2003.
   · The finished map holds about three billion base pairs and about 20,000
     genes. The book's estimate was about 100,000 genes, and the lesson says so
     out loud rather than quietly correcting it.
   · The Genetic Information Nondiscrimination Act of 2008 (GINA), which stops
     health insurers and employers from using genetic information. The lesson
     says it doesn't cover every kind of insurance.
   · Newborn screening from a few drops of blood, used as the opening scene. The
     lesson says "in most states" for cystic fibrosis.
   The book's own parts are the railroad-map analogy, the 46 chromosomes, finding
   the genes for cystic fibrosis and muscular dystrophy from a few drops of blood,
   early prevention for a heart-disease gene, the worry about employers, and that
   most scientists think the benefits outweigh the costs.

   ⚠️ THE YOU DECIDE QUESTION HAS NO ANSWER KEY, so it lives in `todo` as
   notebook writing, the same as U4-L4. The packet was THIN on the exact words of
   the book's own prompt, so the question is ours: should a person's genes ever be
   used to decide a job or insurance?

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
  natural: "2026-10-05",

  /* ── /teach-plan, 2026-10-05. Merrill Life Science pp122-123. ── */
  plan: {
    objective: "Describe what the Human Genome Project set out to do, and weigh one benefit and one risk of knowing a person's genes.",
    markers: [
      "BOOK (paraphrased), Objectives box: describe the goal of the Human Genome Project, and explain its advantages and disadvantages.",
      "BOOK (paraphrased), term: genome, a map of a living thing's chromosomes and the genes on them.",
      "BOOK (paraphrased), analogy: a gene map is like a railroad map with stations on it.",
      "BOOK (paraphrased): doctors with the map could find the genes for cystic fibrosis, muscular dystrophy and other disorders from a few drops of blood, and a person with a gene for heart disease could prevent trouble early, for example by managing stress.",
      "BOOK (paraphrased), concerns: employers or airlines might refuse to hire someone because of the genes they carry, and some people might choose not to have children. The book says most scientists think the benefits outweigh the costs.",
      "BOOK (paraphrased), Connect to Physics: the project needs computers, because there are more than a billion base pairs to store.",
      "BOOK (paraphrased), Section Review: what's the purpose of the project, and one advantage and one disadvantage of it.",
    ],
    method: "A SCIENCE AND SOCIETY PAGE: THE FACTS, BOTH SIDES, THEN THE STUDENT DECIDES. The map analogy carries the facts, the benefit and the risk are laid side by side, and the lesson ends on a question with no answer key.",
    exampleOnly: [
      "The railroad map, the newborn's heel prick and the employer. WORLD: a map with stations. The title and objective don't name them.",
      "⚠️ The book's 100,000-gene estimate is replaced by the finished count, said out loud. Added from the record, see the header.",
    ],
    digitize: "The reading engine, plus the You Decide question as notebook writing in `todo`. ⚠️ The site still has no free-write input.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Science",
    blurb: "Scientists set out to find and read every gene a person has. What the map is, what it's good for, who might misuse it, and a question you'll have to answer in writing.",
    contains: [
      "A story-form reading, read aloud with the words highlighted",
      "What a genome is, with the railroad-map comparison",
      "What the finished map turned out to say, including where the 1994 book guessed wrong",
      "A real benefit and a real risk, side by side",
      "A You Decide question to answer in writing, with no answer key",
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
        "Students will describe what the Human Genome Project set out to do, explain the railroad-map comparison, give one benefit and one risk of knowing a person's genes, and write a reasoned answer to the You Decide question."
      ]},
      { h: "Key Concepts", p: [
        "A genome is the full set of genes and the DNA around them, and a gene map shows where each gene sits on each chromosome, the way a railroad map shows where each station sits on each line.",
        "The book is from 1994 and said people had about 100,000 genes. The project finished in 2003 and found about 20,000, and the lesson tells the student so, because a good scientific map gets corrected when the real count comes in."
      ]},
      { h: "Teaching Suggestion", p: [
        "Let the student argue both sides out loud before writing. The written answer is marked on whether it takes a clear position and supports it, not on which position it takes.",
        "Handle this with care. A genetic condition is described here the way the unit has described them all, as part of a person and not as a flaw, and the student shouldn't walk away thinking a gene decides who someone is."
      ]},
      { h: "Added From the Record", p: [
        "The finish dates, the finished gene count and the 2008 law (GINA) are added from the historical record because the book predates all of them. The book's own points are the map comparison, the benefits, the concerns and its view that most scientists think the benefits outweigh the costs."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "A Few Drops of Blood", s: [
      "A newborn baby, only a day or two old, gets her heel pricked at the hospital, and a few drops of blood are tested for conditions that a doctor can't see by looking at her.",
      "In most states one of the conditions on that list is cystic fibrosis, a genetic disorder you read about in the last lessons, and the test works because scientists know where to look.",
      "Think about how hard that is, since a person's DNA holds billions of chemical letters, and nobody can find one gene in that pile without a map.",
      "So who made the map, and what else does it let people do?"
    ]},

    { title: "A Map With Stations", s: [
      "A {{genome}} is the whole set of genes an organism carries, and mapping one means working out where every gene sits on every chromosome.",
      "The book compares it to a railroad map, where the chromosomes are the long lines and the genes are the stations along them, so once you know where a station is, you can go straight to it.",
      "In 1990 scientists in several countries began the Human Genome Project, an effort to map all of the genes in a person and to read, letter by letter, the whole code.",
      "That's more than three billion {{base pairs}}, and the work needed powerful computers, since nobody could store or sort that many letters by hand."
    ]},

    { title: "The Book Guessed High", s: [
      "The science textbook behind this lesson was printed in 1994, long before the project was done, so it describes a map that was still being drawn.",
      "It said people have about 100,000 genes spread across 46 chromosomes, and that scientists knew what only about 5,000 of them did.",
      "The Human Genome Project announced a first draft in 2000 and declared the map finished in 2003, and the finished count was about 20,000 genes, a fifth of the guess.",
      "Nobody was embarrassed, because that's how a map gets made: scientists give their best estimate, and then the real count arrives and they fix the number."
    ]},

    { title: "What a Map Is Good For", s: [
      "With the map in hand, doctors can find the genes behind cystic fibrosis, muscular dystrophy and many other disorders, and a test needs only a few drops of blood.",
      "Finding out early can change what happens next, because a family can prepare, a doctor can start treatment sooner, and a person who carries a gene for heart disease can look after his health years before any trouble starts, for example by managing stress.",
      "Most scientists believe the benefits outweigh the costs, and that's a big reason the project was worth doing.",
      "But a map shows where things are, and the people who read it can use it well or badly."
    ]},

    { title: "Who Gets to Read It?", s: [
      "A person's genes are about as private as information gets, and the book lays out the worry plainly: an employer or an airline might refuse to hire someone because of the genes he carries.",
      "Another worry is more personal, because some people who learn they carry a gene for a disorder might choose not to have children.",
      "Nobody has to take those worries on faith, since the United States passed a law in 2008, the Genetic Information Nondiscrimination Act, which says health insurers and employers can't use a person's genetic information against him.",
      "It doesn't cover every kind of insurance, and the argument over how far it should reach is still going."
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
      "The map of the genome is finished, and the question below is the one the book leaves for you.",
      "Start with the questions, {Q} of them, and then the vocabulary check at the bottom, {v} questions on the word cards at the top of the page.",
      "Then the part that matters most, and it happens on paper.",
      "Should a person's genes ever be used to decide whether he gets a job or an insurance policy?",
      "Write your answer in your notebook in complete sentences, take a clear side, and give at least two reasons.",
      "There's no answer key, and you'll be marked on whether you took a clear position and supported it.",
      "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] },

  words: [
    ["Genome", "The whole set of an organism's genes. Mapping a genome means finding where each gene sits on each chromosome.", 4],
    ["Human Genome Project", "The worldwide effort that began in 1990 to map all of a person's genes and read the whole code. It was finished in 2003.", 6],
    ["Base pairs", "The matched chemical letters that make up the rungs of the DNA spiral. A person has more than three billion of them.", 7]
  ],

  findsAt: 24,
  questions: [
    { q: "Why is a genome map needed to find one gene?", find: [2],
      hint: "Read A Few Drops of Blood.",
      choices: [
        "Because DNA holds billions of chemical letters, and nobody can find one gene in that pile without a map.",
        "Because genes move around too fast to see.",
        "Because only one person has each gene.",
        "Because DNA is too small to be written down."
      ], right: 0 },
    { q: "In the book's comparison, what do the genes stand for on the railroad map?", find: [5],
      hint: "Read A Map With Stations.",
      choices: [
        "The long lines.",
        "The stations along the lines.",
        "The trains.",
        "The tickets."
      ], right: 1 },
    { q: "Why did the project need powerful computers?", find: [7],
      hint: "Think about how many base pairs there are.",
      choices: [
        "To draw pictures of the chromosomes.",
        "To protect the data from employers.",
        "To store and sort billions of letters of code.",
        "To grow cells in the laboratory."
      ], right: 2 },
    { q: "How many human genes did the book's 1994 estimate say there were?", find: [9],
      hint: "Read The Book Guessed High.",
      choices: ["About 5,000", "About 20,000", "About 46", "About 100,000"], right: 3 },
    { q: "What did the finished map find, in 2003?", find: [10],
      hint: "The finished count was much lower than the book's guess.",
      choices: [
        "About 20,000 genes.",
        "About 100,000 genes.",
        "No genes at all.",
        "About a million genes."
      ], right: 0 },
    { q: "Which of these is a benefit of the map that the book names?", find: [12],
      hint: "Read What a Map Is Good For.",
      choices: [
        "It lets scientists skip experiments.",
        "It lets doctors find the genes for disorders like cystic fibrosis from a few drops of blood.",
        "It makes every person healthy.",
        "It tells you what job to take."
      ], right: 1 },
    { q: "Which of these is a worry the book raises about knowing a person's genes?", find: [16],
      hint: "Read Who Gets to Read It?",
      choices: [
        "Genes can't be read by computers.",
        "Doctors will stop using blood tests.",
        "An employer might refuse to hire a person because of the genes he carries.",
        "Every gene turns out to be harmful."
      ], right: 2 }
  ],

  vocabQuestions: [
    { q: "What is a <i>genome</i>?",
      choices: ["The whole set of an organism's genes.", "A single gene.", "A kind of cell.", "A chromosome number."], right: 0 },
    { q: "What did the <i>Human Genome Project</i> set out to do?",
      choices: ["Make new organisms.", "Map all of a person's genes and read the whole code.", "Count the cells in the body.", "Find the oldest fossil."], right: 1 },
    { q: "What are <i>base pairs</i>?",
      choices: ["Two chromosomes.", "Two parents.", "The matched chemical letters that make up the rungs of DNA.", "Two kinds of RNA."], right: 2 }
  ]
};
