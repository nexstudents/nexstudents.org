/* science/traits-disorders-and-human-genetics
   Grade 7 · science · unit 5. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 REWRITTEN 2026-10-13 (Sonnet, checked by Opus) after Kolten said the lessons
   don't explain anything. Paul: "explain it to a 12-year-old."
   The 2026-10-05 version used about twelve new terms (chromosome, sex-linked
   gene, carrier, pedigree, karyotype, genetic counselor, genetic engineering and
   more), let Xc, XcY and XXc appear with no grid to read them from, described a
   pedigree in words and never showed one, and crammed karyotype, genetic
   counselor and genetic engineering into a single sentence. This one opens with
   a plain recap of genes, alleles and recessive, then teaches ONE idea per
   section, each with something drawn: boy or girl (a drawn XX by XY square), the
   odds (a coin with no memory), traits on the X (a drawn table of what XX, XXc,
   XcXc, XY and XcY mean), a carrier mother (a drawn XXc by XY square), a family
   chart (a drawn pedigree), and ONE recessive disorder, cystic fibrosis (a drawn
   Cc by Cc square). Word cards are now four: chromosome, sex-linked gene,
   carrier, pedigree. CUT: karyotype and genetic counselor (gone as ideas except
   one plain line), the malaria note, and the genetic engineering card (it stays
   as a single sentence at the end; the unit review and the genome lesson carry it).

   ⚠️ THE TONE IS DELIBERATE: the disorders are described with care and no fear
   language, and the lesson says outright that a carrier did nothing wrong.
   The family in the story (the Riveras) is invented for the lesson and is
   not a real family. The pedigree family is invented too.

   ⚠️ ADDED FROM THE RECORD, worth a glance: the Punnett cross for two cystic
   fibrosis carriers (one in four affected) is standard genetics and not in the
   packet. The sentence that sickle-cell anemia works the same way is the
   book's, kept as one line. The meaning of chromosome (a tiny string inside the
   cells that holds the genes, half from each parent) is the standard
   definition, added so X and Y make sense. The pedigree legend (filled shape
   means has the trait, a small c means carrier) is the standard convention.
   The sentence about genetic counselors comes from the book's Technology page,
   which the packet only partly read.

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
  natural: "2026-10-13",

  /* ── /teach-plan, rewritten 2026-10-13. Merrill Life Science pp117-121. ── */
  plan: {
    objective: "Explain how sex is determined, how a sex-linked trait passes from parent to child, how to read a pedigree, and how a recessive disorder such as cystic fibrosis is inherited, each with a drawn Punnett square or chart.",
    markers: [
      "BOOK (paraphrased), Objectives: describe two human genetic disorders, explain sex-linked traits, and explain the importance of genetic engineering; new words are sex-linked gene, pedigree and genetic engineering.",
      "BOOK (paraphrased), disorders: sickle-cell anemia and cystic fibrosis are both caused by recessive alleles; sickle-shaped red blood cells carry too little oxygen, and cystic fibrosis makes thick mucus in the lungs and digestive system, though therapy helps people live longer.",
      "BOOK (paraphrased), sex determination: a female is XX and a male is XY; an egg always carries an X, and the sperm carries an X or a Y and so decides.",
      "BOOK (paraphrased), Problem Solving, Boy or Girl?: the probability of a boy or a girl is one-half for each child, like a coin flip, and a family with three girls in a row has a probability of one-eighth.",
      "BOOK (paraphrased), sex-linked genes: red-green color blindness is carried on the X chromosome; a carrier mother and a normal father have normal daughters, who may be carriers, and sons who are color blind half the time; more males show sex-linked traits.",
      "BOOK (paraphrased): a pedigree is a family chart that shows how a trait is inherited through generations.",
    ],
    method: "RECAP, THEN FOLLOW A FAMILY'S CHANCES, ONE DRAWN IDEA AT A TIME. Genes, alleles and recessive; then sex comes from the father's sperm (a drawn XX by XY square, one in two); a coin has no memory; a trait on the X shows more in boys because a boy has only one X (a drawn table of XX, XXc, XcXc, XY, XcY); a carrier mother's four children (a drawn XXc by XY square); a pedigree drawn from that family; and one recessive disorder, cystic fibrosis, that needs two copies (a drawn Cc by Cc square).",
    exampleOnly: [
      "The Rivera family and their baby, kept to the first section and the coin flips. WORLD: one family, our own setup for the book's Boy or Girl? problem.",
      "Left out on purpose: the book's oil-spill bacteria and the diet-soda PKU warning, karyotyping and the malaria note. Genetic counselors and genetic engineering are one plain line each.",
    ],
    digitize: "Reading engine. Five Watch It Worked walkthroughs with the work drawn in box-drawing characters: the XX by XY square, the color-blindness table, the XXc by XY square, the pedigree, and the Cc by Cc square.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Science",
    blurb: "Who decides whether a baby's a boy or a girl, why color blindness shows up more in boys, and how two healthy parents can pass on a disorder without having done anything wrong. Every idea is drawn out.",
    contains: [
      "A quick recap of genes, alleles and recessive",
      "XX and XY drawn as a square, and the one-in-two chance each child",
      "Sex-linked traits like color blindness, and a family chart (pedigree)",
      "Cystic fibrosis and what a carrier is, drawn as a square",
    ] },
  eyebrow: ["Life Science", "U5-L3", "How Traits Pass Down"],
  dek: "Three daughters in a row, a boy who can't tell red from green, and two healthy parents with a child who isn't. The same few rules explain all three, and you can draw every one.",

  scripture: {
    ref: "John 9:3",
    text: "Jesus answered, Neither hath this man sinned, nor his parents: but that the works of God should be made manifest in him.",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Your student explains that the father's sperm decides a child's sex with a one in two chance each time, shows how a sex-linked trait passes on the X, reads a simple pedigree, and explains why two carriers can have a child with a recessive disorder."
      ]},
      { h: "Key Concepts", p: [
        "A sex-linked trait shows more often in boys because a boy has only one X chromosome, so a single recessive allele on it is enough. A girl needs the recessive allele on both of her X chromosomes.",
        "A carrier has one recessive allele and one dominant one, so usually has no symptoms. Two carriers have a one in four chance of an affected child with each pregnancy."
      ]},
      { h: "Where Students Get Stuck", p: [
        "🚨 Thinking past girls make a boy more likely. Every child is a fresh coin flip, so after three girls the next child is still one in two.",
        "Reading Xc, XXc and XcY. The little c is just a tag on the X that carries the color-blindness allele. The drawn table in the lesson lists all five combinations.",
        "Treating a disorder as someone's fault. Carrying a recessive allele is common, harms nobody, and isn't anyone's doing, which is why the lesson ends where it does.",
        "Mixing up carrier and affected. A carrier has one recessive allele and no symptoms, and an affected person has two."
      ]},
      { h: "Teaching Suggestion", p: [
        "Go slowly through the disorder and let your student ask questions. If your family has a condition that runs in it, this is the lesson where it comes up, and your student should hear that the answer is nobody's fault."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Quick Recap: Genes and Hidden Copies", s: [
      "In the last lessons you learned that your cells hold a recipe book of genes, and each gene is the instructions for one trait.",
      "You have two copies of every gene, one from your mom and one from your dad, and the different versions of a gene are called alleles.",
      "When your two copies disagree, the dominant allele shows and the recessive allele hides, and a recessive trait only shows when both copies are recessive.",
      "Scientists write a dominant allele as a capital letter and a recessive allele as a small letter, so Cc has one of each.",
      "A Punnett square is a grid that shows every way two parents' copies can come together, with one letter from the top and one from the side in each box.",
      "Today you'll use that same grid to answer three questions about people, which are what decides a boy or a girl, why some traits show up more in boys, and how two healthy parents can have a child with a disorder."
    ]},

    { title: "Three Girls, and a Fourth on the Way", s: [
      "The Rivera family already has three daughters, and when they find out a fourth baby is coming, a neighbor says it's about time they had a boy.",
      "Their oldest daughter wonders whether the odds were against three girls in a row, and whether the fourth baby is more likely to be a boy now.",
      "You can answer that once you know what decides whether a baby is a boy or a girl.",
      "So who decides, and does anything that already happened change the odds?"
    ]},

    { title: "X and Y", s: [
      "Your genes are packed onto tiny strings inside your cells, and each string is called a {{chromosome}}.",
      "You have 46 chromosomes, and you got half of them from your mom and half from your dad.",
      "One pair of those chromosomes decides whether you're a boy or a girl, and the two kinds are named X and Y.",
      "A girl has two X chromosomes, written XX, and a boy has one X and one Y, written XY.",
      "Every egg a mother makes carries an X, because that's all she has to give, but a sperm carries either an X or a Y, so it's the father's sperm that decides.",
      "",
      "[walk] Cross a mother who is XX with a father who is XY.",
      "[step] Write the mother's two letters across the top and the father's two letters down the side. ||       X    X\n   ┌────┬────┐\nX  │    │    │\n   ├────┼────┤\nY  │    │    │\n   └────┴────┘",
      "[step] Fill each box with the letter above it and the letter beside it, X first. ||       X    X\n   ┌────┬────┐\nX  │ XX │ XX │\n   ├────┼────┤\nY  │ XY │ XY │\n   └────┴────┘",
      "[step] Read the boxes, because XX is a girl and XY is a boy. || XX, XX  =  2 girls\nXY, XY  =  2 boys",
      "",
      "Two boxes say XX and two say XY, so every baby has a one in two chance of being a girl and a one in two chance of being a boy."
    ]},

    { title: "A Coin With No Memory", s: [
      "Each baby is like one flip of a coin, with a one in two chance of coming up girl or boy.",
      "Three flips in a row all coming up girl has a chance of one half times one half times one half, which is one in eight.",
      "",
      "[ex] 1/2 × 1/2 × 1/2 = 1/8",
      "",
      "So three daughters in a row is unusual, but it's far from unheard of.",
      "A coin has no memory, and neither does a sperm, so the fourth baby is a fresh flip and the chance of a girl is still one in two."
    ]},

    { title: "Traits That Ride on the X", s: [
      "The X chromosome carries lots of genes that have nothing to do with being a boy or a girl, and a gene on it is called a {{sex-linked gene}}.",
      "Red-green color blindness is one of them, and it's caused by a recessive allele on the X.",
      "We'll write the normal X as X and the X that carries the color-blindness allele as Xc, where the little c is just a tag.",
      "A girl has two X's, so a normal X on either side covers the Xc, but a boy has just one X, with nothing to cover it.",
      "",
      "[walk] Which letters mean color blind?",
      "[step] A girl with two normal X's, XX, sees colors normally, and a girl with one Xc, XXc, also sees normally, because the normal X covers it. || ┌─────────┬─────────────────────────────────┐\n│ Letters │ Who they describe               │\n├─────────┼─────────────────────────────────┤\n│ XX      │ girl, sees colors normally      │\n│ XXc     │ girl, sees normally, carries Xc │\n└─────────┴─────────────────────────────────┘",
      "[step] A girl is only color blind when both of her X's are Xc, which is XcXc. || ┌─────────┬─────────────────────────────────┐\n│ Letters │ Who they describe               │\n├─────────┼─────────────────────────────────┤\n│ XX      │ girl, sees colors normally      │\n│ XXc     │ girl, sees normally, carries Xc │\n│ XcXc    │ girl, color blind               │\n└─────────┴─────────────────────────────────┘",
      "[step] A boy has only one X, so XY sees normally, but XcY has nothing to cover the Xc, and he's color blind. || ┌─────────┬─────────────────────────────────┐\n│ Letters │ Who they describe               │\n├─────────┼─────────────────────────────────┤\n│ XX      │ girl, sees colors normally      │\n│ XXc     │ girl, sees normally, carries Xc │\n│ XcXc    │ girl, color blind               │\n│ XY      │ boy, sees colors normally       │\n│ XcY     │ boy, color blind                │\n└─────────┴─────────────────────────────────┘",
      "",
      "That's why far more boys than girls are color blind, even though the allele is exactly the same for both."
    ]},

    { title: "One Carrier Mother, Four Possible Children", s: [
      "A woman with one normal X and one Xc sees colors normally herself, but she's a {{carrier}}, which means she carries the allele and can pass it on.",
      "Let's cross a carrier mother, XXc, with a father who sees normally, XY.",
      "",
      "[walk] Cross a carrier mother, XXc, with a father who sees normally, XY.",
      "[step] Write the mother's letters across the top and the father's down the side. ||       X     Xc\n   ┌─────┬─────┐\nX  │     │     │\n   ├─────┼─────┤\nY  │     │     │\n   └─────┴─────┘",
      "[step] Fill each box with the letter above it and the letter beside it, X first. ||       X     Xc\n   ┌─────┬─────┐\nX  │ XX  │ XXc │\n   ├─────┼─────┤\nY  │ XY  │ XcY │\n   └─────┴─────┘",
      "[step] Read each box with the table: XX is a normal girl, XXc is a carrier girl, XY is a normal boy, and XcY is a color-blind boy. || XX   =  girl, sees normally\nXXc  =  girl, carrier\nXY   =  boy, sees normally\nXcY  =  boy, color blind",
      "",
      "Both daughters see normally, although one of them is a carrier like her mother.",
      "Of the two sons, one sees normally and one is color blind, so each son has a one in two chance."
    ]},

    { title: "Reading a Family Chart", s: [
      "To follow a trait through a family, scientists draw a {{pedigree}}, which is just a family chart.",
      "In a pedigree, a circle is a girl or woman and a square is a boy or man, and a line joins the two parents.",
      "The children hang beneath their parents, and anyone who has the trait gets a filled-in shape.",
      "",
      "[walk] Draw the pedigree for the carrier mother's family.",
      "[step] Draw the mother as a circle and the father as a square, joined by a line, with a small c beside the mother because she's a carrier. ||        ○c ─────── □",
      "[step] Hang the four children beneath them, circles for the two girls and squares for the two sons, and put a c beside the carrier daughter. ||        ○c ─────── □\n             │\n   ┌─────┬───┴──┬─────┐\n   ○     ○c     □     □",
      "[step] Fill in the shape of the one son who is color blind. ||        ○c ─────── □\n             │\n   ┌─────┬───┴──┬─────┐\n   ○     ○c     □     ■",
      "[step] Read it from the top down, where the mother carries the allele, and it shows in one of her sons and in none of her daughters. || ○ girl     □ boy\n■ color blind     c carrier",
      "",
      "In bigger charts the trait often skips a generation, passing through a carrier daughter to a grandson.",
      "That's the pattern a recessive allele on the X makes, and a pedigree turns a family's history into something you can reason about."
    ]},

    { title: "Disorders That Need Two Copies", s: [
      "Some health problems, called genetic disorders, are caused by a recessive allele that isn't on the X at all.",
      "Because the allele is recessive, a person only has the disorder when they get a copy from both parents.",
      "Cystic fibrosis is one of them, and in it the body makes thick mucus that clogs the lungs and the digestive system, although treatment helps people with it live longer.",
      "We'll write the normal allele as C and the cystic fibrosis allele as c, so a person with one of each, Cc, is a carrier who is healthy and usually never knows.",
      "",
      "[walk] Cross two carriers, Cc and Cc.",
      "[step] Write one carrier's letters across the top and the other's down the side. ||       C    c\n   ┌────┬────┐\nC  │    │    │\n   ├────┼────┤\nc  │    │    │\n   └────┴────┘",
      "[step] Fill each box with the letter above it and the letter beside it, capital first. ||       C    c\n   ┌────┬────┐\nC  │ CC │ Cc │\n   ├────┼────┤\nc  │ Cc │ cc │\n   └────┴────┘",
      "[step] Read the boxes, because CC is healthy, both Cc boxes are healthy carriers, and only cc has cystic fibrosis. || CC  =  healthy, not a carrier\nCc  =  healthy carrier\nCc  =  healthy carrier\ncc  =  has cystic fibrosis",
      "",
      "Two carriers are healthy themselves, but each child has a one in four chance of getting two copies and having the disorder, and a two in four chance of being a carrier.",
      "Sickle-cell anemia works the same way, with sickle-shaped red blood cells that carry too little oxygen."
    ]},

    { title: "Nobody's Fault", s: [
      "Doctors called genetic counselors help families understand these chances, and scientists are even learning to change genes on purpose, which is called genetic engineering.",
      "When Jesus and his disciples passed a man who'd been blind from birth, the disciples asked whose sin had caused it, his or his parents'.",
      "",
      "[verse] John 9:3 gives Jesus's answer, “Neither hath this man sinned, nor his parents: but that the works of God should be made manifest in him.”",
      "",
      "Carrying a recessive allele is something every person does, and none of us picked ours, which is why the answer to who is to blame, in a family with a disorder, is that nobody is."
    ]}
  ],

  words: [
    ["Chromosome", "A tiny string inside your cells that holds your genes. You get half of yours from each parent.", 10],
    ["Sex-linked gene", "A gene located on a sex chromosome, usually the X, so it's inherited differently in boys and girls.", 25],
    ["Carrier", "A person who has one recessive allele for a trait and usually doesn't show it, but can pass it on.", 34],
    ["Pedigree", "A chart of a family that shows how a trait is inherited through generations.", 42]
  ],

  findsAt: 66,
  questions: [
    { tag: "Boy or Girl", q: "Which chromosomes decide whether a person is a boy or a girl?",
      find: [12,13], hint: "Read X and Y.",
      choices: ["The X and Y chromosomes", "Chromosome number one", "All 46 chromosomes together", "The chromosomes in the egg only"], right: 0,
      why: "One pair, X and Y, decides." },

    { tag: "Boy or Girl", q: "Why does the father's sperm decide a baby's sex?",
      find: [14], hint: "An egg always carries an X.",
      choices: ["The sperm is always bigger than the egg", "The sperm carries an X or a Y, while every egg carries an X", "The sperm always carries a Y", "The mother's chromosomes never matter"], right: 1,
      why: "An X sperm makes a girl (XX) and a Y sperm makes a boy (XY)." },

    { tag: "Spot the Mistake", q: "A neighbor says that after three girls, the fourth baby is more likely to be a boy. What's wrong with that?",
      find: [24], hint: "Read A Coin With No Memory.",
      choices: ["Each baby is a fresh flip, so it's still one in two", "A fourth baby is always a girl", "It's only true for the second baby", "Nothing, the neighbor is right"], right: 0,
      why: "A coin has no memory, and neither does a sperm, so the chance stays one in two." },

    { tag: "Sex-Linked", q: "Why is red-green color blindness more common in boys?",
      find: [28,32,33], hint: "Look at the table. How many X's does a boy have?",
      choices: ["A boy has two X chromosomes", "The allele only exists in boys", "A boy has only one X, so one Xc has nothing to cover it", "A girl's Y chromosome covers it"], right: 2,
      why: "One Xc is enough for a boy, but a girl needs two." },

    { tag: "The Table", q: "A girl has the letters XXc. What is she?",
      find: [30], hint: "The normal X covers the Xc.",
      choices: ["Color blind", "A carrier who sees colors normally", "A boy", "A girl with no X"], right: 1,
      why: "She sees normally and carries the allele, so she's a carrier." },

    { tag: "Carrier", q: "A carrier mother (XXc) and a father who sees normally (XY) have a son. What's the chance he's color blind?",
      find: [40,41], hint: "Look at the two boy boxes: XY and XcY.",
      choices: ["None", "One in four", "One in two", "Every son"], right: 2,
      why: "One of the two boy boxes is XcY, so each son has a one in two chance." },

    { tag: "Pedigree", q: "In a pedigree, what does a filled-in square mean?",
      find: [43,44], hint: "Read Reading a Family Chart.",
      choices: ["A boy who has the trait", "A girl who has the trait", "A boy who is a carrier", "A baby on the way"], right: 0,
      why: "Squares are boys, and a filled-in shape means the person has the trait." },

    { tag: "Disorders", q: "How many copies of the recessive allele does a person need to have cystic fibrosis?",
      find: [53], hint: "Read Disorders That Need Two Copies.",
      choices: ["One", "Two", "Three", "None"], right: 1,
      why: "It's recessive, so a person needs a copy from both parents. Only cc has it." },

    { tag: "Two Carriers", q: "Two carriers of a recessive disorder (Cc and Cc) have a child. What's the chance the child has the disorder?",
      find: [60], hint: "Count the cc boxes out of four.",
      choices: ["One in four", "None", "Every child", "One in two"], right: 0,
      why: "One box out of four is cc." }
  ],

  vocabQuestions: [
    { q: "What is a <i>chromosome</i>?",
      choices: [
        "A tiny string inside your cells that holds your genes",
        "A type of cell",
        "A disorder",
        "A grid for predicting a cross"
      ], right: 0 },
    { q: "What is a <i>sex-linked gene</i>?",
      choices: [
        "A gene that decides what color a person's eyes are",
        "A gene that only boys have",
        "A gene found on a sex chromosome, usually the X",
        "A gene that has been changed on purpose"
      ], right: 2 },
    { q: "What is a <i>carrier</i>?",
      choices: [
        "A person who has two recessive alleles",
        "A person with one recessive allele who usually shows no symptoms",
        "A person with a disorder",
        "A person with no alleles"
      ], right: 1 },
    { q: "What is a <i>pedigree</i>?",
      choices: [
        "A grid for predicting a cross",
        "A way of changing genes",
        "A kind of chromosome",
        "A chart that shows how a trait is inherited through a family"
      ], right: 3 }
  ],

  todo: { title: "What To Do Now", s: [
      "A fourth baby, a boy who can't tell red from green and two healthy carriers all follow the same few rules, and the questions below ask you to use them.",
      "{c} word cards sit at the top of the page, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "For every problem, write the letters down first, fill in the square, and count the boxes before you answer.",
      "If the odds questions trip you up, read A Coin With No Memory again, and remember that each baby is a fresh flip.",
      "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] }
};
