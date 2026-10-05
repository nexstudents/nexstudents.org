/* science/traits-disorders-and-human-genetics
   Grade 7 · science · unit 5. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-10-05. Written on Sonnet from Merrill Life
   Science (Glencoe 1994) Section 5-3, "Human Genetics", pp117-121, via the
   week 6-7 packet (paraphrased notes) and the teach-plan, including the
   Problem Solving page (Boy or Girl?) and the Technology page (Karyotyping).
   /natural pass run and stamped.

   ⚠️ THE TONE IS DELIBERATE: the disorders are described with care and no fear
   language, and the lesson says outright that a carrier did nothing wrong.
   The family in the story (the Riveras) is invented for the lesson and is
   not a real family.

   ⚠️ ADDED FROM THE RECORD, worth a glance: the Punnett cross for two sickle-
   cell or cystic fibrosis carriers (one in four affected) is standard
   genetics and not in the packet. The packet's read of the "Did You Know"
   (carriers better protected against malaria) is kept as the book says it.
   The sentences about genetic counselors come from the book's Technology
   page, which the packet only partly read.

   ⚠️ THE VERSE IS A WORKING CHOICE, NOT PAUL'S: John 9:3, in which Jesus says
   a man's blindness from birth was not caused by his parents' sin. It fits
   because the lesson's point is that carrying an allele is nobody's fault.
   Choosing the scripture is his → review queue. */
'use strict';
module.exports = {
  id: "science/traits-disorders-and-human-genetics",
  slug: "traits-disorders-and-human-genetics",
  title: "Traits, Disorders, and Human Genetics",
  unit: "Life Science &middot; U5-L3",
  seq: { unit: 5, unitTitle: "How Traits Pass Down", n: 3 },
  natural: "2026-10-05",

  /* ── /teach-plan, 2026-10-05. Merrill Life Science pp117-121. ── */
  plan: {
    objective: "Explain how sex is determined, how a sex-linked trait passes from parent to child, and how recessive disorders such as sickle-cell anemia and cystic fibrosis are inherited.",
    markers: [
      "BOOK (paraphrased), Objectives: describe two human genetic disorders, explain sex-linked traits, and explain the importance of genetic engineering; new words are sex-linked gene, pedigree and genetic engineering.",
      "BOOK (paraphrased), disorders: sickle-cell anemia and cystic fibrosis are both caused by recessive alleles; sickle-shaped red blood cells carry too little oxygen, and cystic fibrosis makes thick mucus in the lungs and digestive system, though therapy helps people live longer.",
      "BOOK (paraphrased), sex determination: a female is XX and a male is XY; an egg always carries an X, and the sperm carries an X or a Y and so decides.",
      "BOOK (paraphrased), Problem Solving, Boy or Girl?: the probability of a boy or a girl is one-half for each child, like a coin flip, and a family with three girls in a row has a probability of one-eighth.",
      "BOOK (paraphrased), sex-linked genes: red-green color blindness is carried on the X chromosome; a carrier mother and a normal father have normal daughters, who may be carriers, and sons who are color blind half the time; more males show sex-linked traits.",
      "BOOK (paraphrased): a pedigree is a family chart that shows how a trait is inherited through generations.",
    ],
    method: "FOLLOW ONE FAMILY'S CHANCES, THEN FOLLOW A TRAIT RIDING ON THE X. Sex comes from the father's sperm and is one in two for every child; a trait on the X shows more often in sons because a son has only one X; and a recessive disorder needs two copies, which is why two healthy carriers can have an affected child. Each idea is a small Punnett square.",
    exampleOnly: [
      "The Rivera family and their baby, kept to the first section and the coin flips. WORLD: one family, our own setup for the book's Boy or Girl? problem.",
      "Left out on purpose: the book's oil-spill bacteria and the diet-soda PKU warning.",
    ],
    digitize: "Reading engine. The squares are listed as [ex] lines and the pedigree is described in words; ⚠️ a drawn pedigree would help and the site doesn't have that visual yet.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Science",
    blurb: "Who decides whether a baby's a boy or a girl, why color blindness shows up more in boys, and how two healthy parents can pass on a disorder without having done anything wrong.",
    contains: [
      "XX and XY, and the one-in-two chance each child",
      "Sex-linked traits like red-green color blindness",
      "Reading a pedigree, a family chart of a trait",
      "Sickle-cell anemia and cystic fibrosis, and what a carrier is",
    ] },
  eyebrow: ["Life Science", "U5-L3", "How Traits Pass Down"],
  dek: "Three daughters in a row, a boy who can't tell red from green, and two healthy parents with a child who isn't. The same few rules of heredity explain all three.",

  scripture: {
    ref: "John 9:3",
    text: "Jesus answered, Neither hath this man sinned, nor his parents: but that the works of God should be made manifest in him.",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will explain that the father's sperm decides a child's sex with a one in two chance each time, show how a sex-linked trait passes on the X, read a simple pedigree, and explain why two carriers can have a child with a recessive disorder."
      ]},
      { h: "Key Concepts", p: [
        "A sex-linked trait shows more often in males because a son has only one X chromosome, so a single recessive allele on it is enough. A daughter needs the recessive allele on both of her X chromosomes.",
        "A carrier has one recessive allele and one dominant one, so usually has no symptoms. Two carriers have a one in four chance of an affected child with each pregnancy."
      ]},
      { h: "Where Students Get Stuck", p: [
        "🚨 Thinking past girls make a boy more likely. Every child is a fresh coin flip, so after three girls the next child is still one in two.",
        "Treating a disorder as someone's fault. Carrying a recessive allele is common, harms nobody, and isn't anyone's doing, which is why the lesson ends where it does.",
        "Mixing up carrier and affected. A carrier has one recessive allele and no symptoms, and an affected person has two."
      ]},
      { h: "Teaching Suggestion", p: [
        "Go slowly through the disorders and let the student ask questions. If your family has a condition that runs in it, this is the lesson where it comes up, and the student should hear that the answer is nobody's fault."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Three Girls, and a Fourth on the Way", s: [
      "The Rivera family already has three daughters, and when they find out a fourth baby is coming, a neighbor says it's about time they had a boy.",
      "Their oldest daughter wonders whether the odds were against three girls in a row, and whether the fourth baby is more likely to be a boy now.",
      "It's an old question, and you can answer it once you know what decides whether a baby is a boy or a girl.",
      "So who decides, and does anything that already happened change the odds?"
    ]},

    { title: "X and Y", s: [
      "Of the 46 chromosomes in your cells, one pair decides your sex, and those two chromosomes are called X and Y.",
      "A female has two X chromosomes, XX, and a male has an X and a Y, XY.",
      "Every egg a mother makes carries an X, because that's all she has to give, but a sperm carries either an X or a Y, so it's the father's sperm that decides.",
      "",
      "[ex] XX, XY, XX, XY",
      "",
      "Fill in the Punnett square, with X and X across the top and X and Y down the side, and two boxes come out XX, a girl, and two come out XY, a boy, so each child has a one in two chance of either one."
    ]},

    { title: "A Coin With No Memory", s: [
      "Each baby is like one flip of a coin, with a one in two chance of coming up girl or boy.",
      "Three flips in a row all coming up girl has a chance of one half times one half times one half, which is one in eight, so three daughters is unusual but it's far from unheard of.",
      "",
      "[ex] 1/2 x 1/2 x 1/2 = 1/8",
      "",
      "But a coin has no memory, and neither does a sperm, so the fourth baby is a fresh flip and the chance of a girl is still one in two."
    ]},

    { title: "Traits That Ride on the X", s: [
      "The X chromosome carries many genes that have nothing to do with being male or female, and a gene on it is called a {{sex-linked gene}}.",
      "Red-green color blindness is one of them, and it's caused by a recessive allele on the X, so we'll write the normal X as X and the X with the color-blindness allele as Xc.",
      "A girl has two X chromosomes, so a normal one on either side keeps her vision normal, but a boy has just one X, and if that one carries Xc he has nothing to cover it.",
      "That's why far more boys than girls are color blind, even though the allele is the same for both."
    ]},

    { title: "One Carrier Mother, Four Possible Children", s: [
      "A woman with one normal X and one Xc sees colors normally herself, but she's a {{carrier}}, which means she carries the allele and can pass it on.",
      "Suppose she and a father with normal vision, X and Y, have children, and the four boxes of the square come out like this.",
      "",
      "[ex] XX, XXc, XY, XcY",
      "",
      "Both daughters see normally, although one of them is a carrier like her mother, and of the two sons, one sees normally and one is color blind, so each son has a one in two chance."
    ]},

    { title: "Reading a Family Chart", s: [
      "To follow a trait through a family, geneticists draw a {{pedigree}}, a chart of the family with a symbol for each person and a way of marking who has the trait.",
      "Males are drawn as squares and females as circles, a line joins the parents, and the children hang beneath them in a row.",
      "Read a pedigree for color blindness from the top down and you'll often see the trait skip a generation, passing through a carrier daughter to a grandson, which is the pattern a recessive allele on the X makes.",
      "It's a way of turning a family's history into something you can reason about."
    ]},

    { title: "Disorders That Need Two Copies", s: [
      "Some disorders are caused by a recessive allele that isn't on the X at all, and a person has one only when they inherit the allele from both parents.",
      "In sickle-cell anemia some red blood cells bend into a sickle shape and carry too little oxygen, and in cystic fibrosis the body makes thick mucus that clogs the lungs and the digestive system, although treatment helps people with it live longer.",
      "A person with just one copy of the allele is a carrier, usually has no symptoms, and may never know, and in the case of sickle-cell the book notes that carriers are better protected against malaria.",
      "Two carriers are healthy themselves, but each can pass the recessive allele on, so their child has a one in four chance of getting two copies."
    ]},

    { title: "Nobody's Fault", s: [
      "Fill in the square for two carriers, with C and c across the top and C and c down the side, and the four boxes show how the chances divide.",
      "",
      "[ex] CC, Cc, Cc, cc",
      "",
      "One box is unaffected and carries nothing, two are carriers like their parents, and one has two recessive alleles, so each child has a one in four chance of having the disorder and a two in four chance of being a carrier.",
      "Families can talk to a genetic counselor, who helps them understand these chances, and scientists can photograph and arrange a person's chromosomes in a karyotype to spot a disorder, and the field of genetic engineering is working on ways to change the genes themselves.",
      "When Jesus and his disciples passed a man who'd been blind from birth, the disciples asked whose sin had caused it, his or his parents'.",
      "",
      "[verse] John 9:3 gives Jesus's answer, “Neither hath this man sinned, nor his parents: but that the works of God should be made manifest in him.”",
      "",
      "Carrying a recessive allele is something every person does, and none of us picked ours, which is why the answer to who is to blame, in a family with a disorder, is that nobody is."
    ]}
  ],

  words: [
    ["Sex-linked gene", "A gene located on a sex chromosome, usually the X, so it's inherited differently in males and females.", 13],
    ["Carrier", "A person who has one recessive allele for a trait and usually doesn't show it, but can pass it on.", 17],
    ["Pedigree", "A chart of a family that shows how a trait is inherited through generations.", 21],
    ["Genetic engineering", "Changing the genes in a cell or organism on purpose.", 32]
  ],

  findsAt: 36,
  questions: [
    { tag: "Sex", q: "Which chromosomes decide whether a person is male or female?",
      find: [4, 5],
      hint: "Read X and Y.",
      choices: [
        "The X and Y chromosomes.",
        "Chromosome number one.",
        "All 46 chromosomes together.",
        "The chromosomes in the egg only."
      ], right: 0 },

    { tag: "Sex", q: "Why does the father's sperm decide a baby's sex?",
      find: [6],
      hint: "An egg always carries an X.",
      choices: [
        "The sperm carries an X or a Y, while every egg carries an X.",
        "The sperm is always bigger than the egg.",
        "The sperm always carries a Y.",
        "The mother's chromosomes never matter."
      ], right: 0 },

    { tag: "Odds", q: "The Riveras have three daughters. What's the chance the fourth baby is a girl?",
      find: [12],
      hint: "Read A Coin With No Memory.",
      choices: [
        "One in eight",
        "Less than one in two",
        "More than one in two",
        "One in two"
      ], right: 3 },

    { tag: "Odds", q: "What's the chance of three girls in a row?",
      find: [10, 11],
      hint: "Multiply one half three times.",
      choices: ["1/2", "1/4", "1/8", "1/16"], right: 2 },

    { tag: "Sex-Linked", q: "Why is red-green color blindness more common in boys?",
      find: [15, 16],
      hint: "Read Traits That Ride on the X.",
      choices: [
        "A boy has only one X, so one recessive allele on it shows.",
        "A boy has two X chromosomes.",
        "The allele only exists in boys.",
        "A girl's Y chromosome covers it."
      ], right: 0 },

    { tag: "Carrier", q: "A carrier mother (X Xc) and a father with normal vision (X Y) have a son. What's the chance he's color blind?",
      find: [18, 20],
      hint: "Look at the two XY boxes: XY and XcY.",
      choices: [
        "None",
        "Every son",
        "One in two",
        "One in four"
      ], right: 2 },

    { tag: "Pedigree", q: "What is a pedigree used for?",
      find: [21],
      hint: "Read Reading a Family Chart.",
      choices: [
        "Counting a family's chromosomes.",
        "Following how a trait is inherited through the generations of a family.",
        "Photographing chromosomes.",
        "Choosing a baby's sex."
      ], right: 1 },

    { tag: "Disorders", q: "How many copies of the recessive allele does a person need to have sickle-cell anemia or cystic fibrosis?",
      find: [25],
      hint: "Read Disorders That Need Two Copies.",
      choices: ["One", "Two", "Three", "None"], right: 1 },

    { tag: "Carriers", q: "Two carriers of a recessive disorder have a child. What's the chance the child has the disorder?",
      find: [28, 31],
      hint: "Count the cc box out of four.",
      choices: [
        "One in four",
        "None",
        "Every child",
        "One in two"
      ], right: 0 }
  ],

  vocabQuestions: [
    { q: "What is a <i>sex-linked gene</i>?",
      choices: [
        "A gene that decides what color a person's eyes are.",
        "A gene that only males have.",
        "A gene found on a sex chromosome, usually the X.",
        "A gene that has been changed on purpose."
      ], right: 2 },
    { q: "What is a <i>carrier</i>?",
      choices: [
        "A person who has two recessive alleles.",
        "A person with one recessive allele who usually shows no symptoms.",
        "A person with a disorder.",
        "A person with no alleles."
      ], right: 1 },
    { q: "What is a <i>pedigree</i>?",
      choices: [
        "A grid for predicting a cross.",
        "A way of changing genes.",
        "A kind of chromosome.",
        "A chart that shows how a trait is inherited through a family."
      ], right: 3 },
    { q: "What is <i>genetic engineering</i>?",
      choices: [
        "Changing the genes in a cell or organism on purpose.",
        "Photographing chromosomes.",
        "Counting alleles in a family.",
        "Picking the sex of a baby."
      ], right: 0 }
  ],

  todo: { title: "What To Do Now", s: [
      "A fourth baby, a boy who can't tell red from green and two healthy carriers all follow the same few rules, and the questions below ask you to use them.",
      "{c} word cards sit at the top of the page, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "For every problem, write the alleles or chromosomes down first, fill in the square, and count the boxes before you answer.",
      "If the odds questions trip you up, read A Coin With No Memory again, and remember that each baby is a fresh flip.",
      "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] }
};
