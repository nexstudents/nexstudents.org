/* science/unit-5-review
   Grade 7 · science · unit 5. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 A REVIEW IS A DIAGNOSTIC, NOT A TEST. Same rule as the Unit 1 to 4 Reviews:
   every hint names the lesson to go back to, so a wrong answer sends him
   somewhere.

   🚨 THE PROSE IN `parts` IS A DRAFT, NOT PAUL'S VOICE. Built 2026-10-05 on
   Sonnet from the four Unit 5 lessons already in this folder and the Merrill
   Chapter 5 Review (printed pp125-127, via the week 6-7 packet, paraphrased),
   then given the /natural pass.

   ⚠️ THE VERSE IS A CALLBACK, not a new choice: John 9:3 is the verse U5-L3
   already carries. If Paul would rather the review use another of the unit's
   verses (Genesis 1:12, Acts 17:26, Micah 6:8), or none, it is one line.

   ⚠️ 12 cards against 5 vocabulary questions WARNS and does not fail. A unit
   review gathers the words from four lessons; do not invent extra questions.

   ⚠️ THE THINK AND WRITE QUESTION HAS NO ANSWER KEY, so it lives in `todo` as
   notebook writing, the same as the other science reviews. It is our wording of
   the chapter review's question 17 (why a dominant trait isn't necessarily the
   most common). The packet was THIN on items 18 and beyond. */
'use strict';
module.exports = {
  id: "science/unit-5-review",
  slug: "unit-5-review",
  title: "Unit 5 Review: How Traits Pass Down",
  unit: "Life Science &middot; U5-L5",
  seq: { unit: 5, unitTitle: "How Traits Pass Down", n: 5 },
  natural: "2026-10-05",

  /* ── /teach-plan, 2026-10-05. Read off Merrill Life Science (Glencoe 1994),
        Chapter 5 Review, printed pp125-127, and the four built Unit 5 lessons. ── */
  plan: {
    objective: "Pull the four Unit 5 lessons back together: how alleles pass from parents to children, what happens when Mendel's rule isn't the whole story, how sex and some disorders are inherited, and what knowing a person's genes can mean.",
    markers: [
      "BOOK (paraphrased), Chapter Review SUMMARY, 5-1 to 5-4: traits are inherited through alleles, a Punnett square predicts a cross, genotype is the allele letters and phenotype is how they show, incomplete dominance, multiple alleles and polygenic inheritance, sex-linked traits, pedigrees, genetic engineering and the Human Genome Project.",
      "BOOK (paraphrased), Key Science Words: alleles, dominant, genetic engineering, genetics, genome, genotype, heredity, heterozygous, homozygous, incomplete dominance, multiple alleles, pedigree, phenotype, polygenic inheritance, Punnett square, recessive, sex-linked gene.",
      "BOOK (paraphrased), Checking Concepts themes: both alleles appear in incomplete dominance, alleles separate in meiosis, genes make proteins, blood type is multiple alleles, sickle-cell anemia is recessive.",
      "BOOK (paraphrased), question 17, Think and Write: explain why a dominant trait isn't necessarily the most common one.",
    ],
    method: "A RECAP THAT FOLLOWS THE FAMILY. The four lessons are one story told at four sizes: one pair of alleles, then patterns that break the simple rule, then the sex chromosomes and disorders that need two copies, then the whole map at once. The review walks that path in one pass and works one Punnett square out in words.",
    exampleOnly: [
      "Nothing new. Every example here is one the unit already used (the earlobes, the tall and short peas, the pink flowers, blood types, the carrier mother, the two carriers), so recognizing it is the recall.",
    ],
    digitize: "The existing reading engine. Every question's answer-hunt points into the recap, and every hint names the lesson to reopen. NO NEW MECHANIC. ⚠️ The Think and Write question has no answer key, so it lives in `todo` as notebook writing.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Science",
    blurb: "The whole unit in one pass: how alleles pass down, the patterns Mendel didn't see, how sex and some disorders are inherited, and what the genome map means.",
    contains: [
      "Alleles, dominant and recessive, and a Punnett square worked in words",
      "Incomplete dominance, multiple alleles and polygenic traits",
      "Sex determination, carriers and family charts",
      "The Human Genome Project",
      "A question to answer in writing, with no answer key",
    ] },
  eyebrow: ["Life Science", "U5-L5", "How Traits Pass Down"],
  dek: "You've followed a trait from a pea garden to a pink flower to a family's blood types to the whole genome. Here's the path in one place, and a question you'll have to answer for yourself.",

  scripture: {
    ref: "John 9:3",
    text: "Jesus answered, Neither hath this man sinned, nor his parents: but that the works of God should be made manifest in him.",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Bring the four Unit 5 lessons together, check which parts hold and which need a second read, and finish by writing about why a dominant trait isn't necessarily the most common."
      ]},
      { h: "Key Concepts", p: [
        "Every question here is tied to one of the four lessons and the hint says which one, so a wrong answer is directions to the right page and not a mark against the student.",
        "The written question is the real test of whether the unit landed. The key idea is that dominant describes which allele shows when two are present, and says nothing about how many people carry it."
      ]},
      { h: "Where Students Get Stuck", p: [
        "🚨 Reading a Punnett square as a promise. It gives the chance for each child and not the count, so two carriers can have four children and none affected.",
        "Treating carrying an allele as having the disorder. A carrier has one copy and usually no symptoms, and that's a different thing."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "One Family, Four Lessons", s: [
      "Picture one family sitting around a table, with a grandmother whose earlobes hang free, a father whose don't, a daughter with her mother's eyes and a son who's taller than both parents.",
      "Every one of those differences came from the same place, the alleles each person inherited, but the four lessons in this unit showed that the way those alleles behave isn't always the same.",
      "So when someone asks a question about a family, how do you decide which idea to use?"
    ]},

    { title: "Two Alleles, One Square", s: [
      "Mendel's peas taught the basic rule: a trait comes in pairs of forms called alleles, one from each parent, and when two different alleles meet, the dominant one shows and the recessive one hides.",
      "The letters a plant carries are its genotype, and what you see is its phenotype, so a tall plant can be TT or Tt, and the two look exactly alike.",
      "A Punnett square lays out every pairing a cross can make, and when two Tt parents cross, the four boxes come out TT, Tt, Tt and tt.",
      "",
      "[ex] Tt x Tt gives TT, Tt, Tt, tt, which is three tall and one short",
      "",
      "Three of the four boxes hold a T, so each offspring has a three in four chance of being tall and a one in four chance of being short, and the square shows the chances, not how many offspring there'll be."
    ]},

    { title: "When One Allele Doesn't Win", s: [
      "The second lesson found three patterns where the simple rule doesn't tell the whole story.",
      "In incomplete dominance, neither allele fully covers the other, so a red four o'clock crossed with a white one gives pink flowers, and the white comes back in the next generation, which shows nothing blended away.",
      "In multiple alleles, a trait has more than two forms in the population, like blood type with its A, B and O alleles, though each person still carries only two.",
      "In polygenic inheritance, many gene pairs act together on one trait, and the result is a smooth range like human height instead of two neat groups.",
      "",
      "[ex] A mother who is AO and a father who is BO can have a child with type A, B, AB or O blood."
    ]},

    { title: "Sex, the X and Disorders That Need Two Copies", s: [
      "Of the 46 chromosomes in your cells, one pair decides your sex, and the egg always carries an X, so the father's sperm, carrying either an X or a Y, makes the decision with a one in two chance either way.",
      "A gene on the X chromosome is a sex-linked gene, and red-green color blindness is the example: a boy has just one X, so a recessive allele there has nothing to cover it, which is why more boys than girls are color blind.",
      "A mother with one normal X and one with the allele is a carrier, and each of her sons has a one in two chance of being color blind.",
      "Disorders such as sickle-cell anemia and cystic fibrosis follow a different path, because both are recessive and a person has one only with two copies, so two carriers can have a child with a one in four chance of having it.",
      "A pedigree is the family chart that traces all of this, and it often shows a trait skipping a generation through a carrier."
    ]},

    { title: "The Whole Map at Once", s: [
      "The last lesson stepped back from single traits to the genome, the whole set of genes a person carries.",
      "The Human Genome Project began in 1990, announced a draft in 2000 and finished in 2003, and it found about 20,000 genes, far fewer than the 100,000 the textbook had guessed.",
      "The map lets doctors find the genes behind disorders from a few drops of blood, and it raises a worry too: whether an employer or an insurer should ever use what's in a person's genes.",
      "That's a question science can't answer for you, and the notebook question below asks for your own view."
    ]},

    { title: "Whose Fault Is It?", s: [
      "Every person carries alleles that a family didn't choose, and the unit's last picture of that was a man blind from birth.",
      "",
      "[verse] John 9:3 gives Jesus's answer when the disciples asked whose sin had caused it, “Neither hath this man sinned, nor his parents: but that the works of God should be made manifest in him.”",
      "",
      "The verse isn't a lesson in genetics, but it points the same way the science does, which is that a trait or a disorder is something a person inherits and isn't a verdict on anybody.",
      "You don't have to hold the whole unit in your head at once, since the questions below send you back to the exact lesson you need."
    ]}
  ],

  todo: { title: "What To Do Now", s: [
      "Start with the questions, {Q} of them, and if one is hard the hint tells you which lesson to go back to.",
      "After that comes the vocabulary check at the bottom, {v} questions on the word cards at the top of the page.",
      "Then the part that matters most, and it happens on paper.",
      "In your notebook, explain why a dominant trait isn't always the most common trait in a population.",
      "Write it in complete sentences, use what the unit taught about what dominant means, and give an example or a reason.",
      "There's no answer key, and you'll be marked on whether your explanation is clear and uses what the unit taught."
  ] },

  words: [
    ["Allele", "One of the different forms of a gene for a trait. You get one from each parent.", 3],
    ["Dominant", "The allele that shows when two different alleles are present.", 3],
    ["Recessive", "The allele that stays hidden when a dominant allele is present.", 3],
    ["Genotype", "The allele letters an organism carries, like TT or Tt.", 4],
    ["Phenotype", "What the alleles look like in the organism, like tall or short.", 4],
    ["Punnett square", "A grid that lays out every pairing a cross can make, so you can read the chances.", 5],
    ["Incomplete dominance", "A pattern where neither allele fully covers the other, so a plant with one of each shows a look in between.", 9],
    ["Polygenic inheritance", "A pattern where many gene pairs act together on one trait, giving a smooth range.", 11],
    ["Sex-linked gene", "A gene that sits on a sex chromosome, usually the X.", 14],
    ["Carrier", "A person who has one copy of a recessive allele and usually shows no symptoms but can pass it on.", 15],
    ["Pedigree", "A chart of a family that shows who has a trait.", 17],
    ["Genome", "The whole set of an organism's genes.", 18]
  ],

  findsAt: 26,
  questions: [
    { q: "Two Tt pea plants are crossed. What chance does each offspring have of being short?",
      find: [7],
      hint: "Fill in the square and count the boxes. Go back to Why You Look Like Your Parents.",
      choices: [
        "One in four, since only tt is short.",
        "One in two.",
        "Three in four.",
        "None, because tall is dominant."
      ], right: 0 },

    { q: "A plant is Tt and tall is dominant. What is its phenotype?",
      find: [4],
      hint: "The phenotype is what you see. Go back to Why You Look Like Your Parents.",
      choices: ["Short", "Tt", "Tall", "Homozygous"], right: 2 },

    { q: "What does a Punnett square show?",
      find: [7],
      hint: "Go back to Why You Look Like Your Parents, What a Square Can't Tell You.",
      choices: [
        "How many offspring a cross will have.",
        "The chances for each offspring, and not the count.",
        "Which parent is dominant.",
        "How old each parent is."
      ], right: 1 },

    { q: "A pure red four o'clock crossed with a pure white one gives pink flowers. What is this pattern called?",
      find: [9],
      hint: "Go back to What We Learned After Mendel, A Pink Flower Nobody Expected.",
      choices: ["Simple dominance", "Polygenic inheritance", "Incomplete dominance", "Sex linkage"], right: 2 },

    { q: "A mother with type AO blood and a father with type BO blood have a child. Which blood types are possible?",
      find: [12],
      hint: "Go back to What We Learned After Mendel, Two Parents, Four Possible Types.",
      choices: [
        "Only type AB.",
        "Only types A and B.",
        "Only type O.",
        "Type A, B, AB or O."
      ], right: 3 },

    { q: "Human height shows a smooth range from short to tall instead of two groups. What pattern is that?",
      find: [11],
      hint: "Go back to What We Learned After Mendel, When Many Genes Share One Trait.",
      choices: [
        "Polygenic inheritance, with many gene pairs acting together.",
        "Incomplete dominance.",
        "Multiple alleles.",
        "A sex-linked gene."
      ], right: 0 },

    { q: "What decides whether a baby is a boy or a girl?",
      find: [13],
      hint: "Go back to Traits, Disorders, and Human Genetics, X and Y.",
      choices: [
        "The mother's egg, which can carry an X or a Y.",
        "The father's sperm, which carries either an X or a Y.",
        "Whichever allele is dominant.",
        "The number of children already in the family."
      ], right: 1 },

    { q: "A carrier mother and a father with normal vision have a son. What chance does he have of being color blind?",
      find: [15],
      hint: "Go back to Traits, Disorders, and Human Genetics, One Carrier Mother, Four Possible Children.",
      choices: ["None", "One in four", "One in two", "Certain"], right: 2 },

    { q: "Two carriers of cystic fibrosis have a child. What chance does the child have of having it?",
      find: [16],
      hint: "Go back to Traits, Disorders, and Human Genetics, Disorders That Need Two Copies.",
      choices: ["One in four", "One in two", "None", "Three in four"], right: 0 },

    { q: "About how many genes did the finished Human Genome Project find?",
      find: [19],
      hint: "Go back to Mapping the Human Genome, The Book Guessed High.",
      choices: ["About 5,000", "About 100,000", "About 20,000", "About 46"], right: 2 },

    { q: "Which is a worry about knowing a person's genes?",
      find: [20],
      hint: "Go back to Mapping the Human Genome, Who Gets to Read It?",
      choices: [
        "Genes can't be read by computers.",
        "An employer might use a person's genes to refuse a job.",
        "A genome has fewer than 46 chromosomes.",
        "Doctors will stop caring about family history."
      ], right: 1 }
  ],

  vocabQuestions: [
    { q: "What is a <i>genotype</i>?",
      choices: [
        "What an organism looks like.",
        "A kind of chromosome.",
        "The allele letters an organism carries, like Tt.",
        "A chart of a family."
      ], right: 2 },
    { q: "What is a <i>carrier</i>?",
      choices: [
        "Someone who has one copy of a recessive allele and usually has no symptoms.",
        "Someone who has the disorder.",
        "Someone with no alleles for the trait.",
        "A person who carries blood to a hospital."
      ], right: 0 },
    { q: "What is a <i>pedigree</i>?",
      choices: [
        "A kind of allele.",
        "A chart of a family that shows who has a trait.",
        "A pair of chromosomes.",
        "A Punnett square with four boxes."
      ], right: 1 },
    { q: "What is a <i>sex-linked gene</i>?",
      choices: [
        "A gene that decides what job a person has.",
        "A gene found only in plants.",
        "A gene that has been moved to another species.",
        "A gene on a sex chromosome, usually the X."
      ], right: 3 },
    { q: "What is <i>incomplete dominance</i>?",
      choices: [
        "A pattern where neither allele fully covers the other.",
        "A trait that never shows.",
        "A mistake in copying DNA.",
        "A trait controlled by many gene pairs."
      ], right: 0 }
  ]
};
