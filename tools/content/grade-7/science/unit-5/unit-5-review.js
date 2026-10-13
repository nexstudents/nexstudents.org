/* science/unit-5-review
   Grade 7 · science · unit 5. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 A REVIEW IS A DIAGNOSTIC, NOT A TEST. Same rule as the Unit 1 to 4 Reviews:
   every hint names the lesson to go back to, so a wrong answer sends him
   somewhere.

   🚨 REWRITTEN 2026-10-13 (Sonnet, checked by Opus) after Kolten said the lessons
   don't explain anything. The 2026-10-05 version talked about Tt x Tt, genotype
   and phenotype in paragraphs with no drawing, so a review of a square he'd
   forgotten described it in words. It also has to match the four Unit 5 lessons
   as they are NOW (all four were rewritten the same day). This one re-shows
   each idea once with a drawn square or chart: Tt x Tt (genotype and
   phenotype), Rr x Rr (incomplete dominance), AO x BO (blood type), XXc x XY
   (a carrier mother), Cc x Cc (a recessive disorder), a pedigree, and a short
   plain paragraph on the genome. Polygenic is one plain paragraph (no drawing).
   Word cards cut from 12 to 7 (Allele, Genotype, Phenotype, Punnett Square,
   Incomplete Dominance, Carrier, Pedigree); dominant and recessive are
   re-explained in the recap without a card, and the questions on sex-linked
   genes, polygenic traits and the genome still work from the reading. Questions
   went from 11 to 10 (the employer worry was dropped with the shortened
   ethics) and every hint names the section titles the rewritten lessons now have.

   ⚠️ THE VERSE IS A CALLBACK, not a new choice: John 9:3 is the verse U5-L3
   already carries. If Paul would rather the review use another of the unit's
   verses (Genesis 1:12, Acts 17:26, Micah 6:8), or none, it is one line.

   ⚠️ 7 cards against 5 or more vocabulary questions: one question per card.

   ⚠️ THE THINK AND WRITE QUESTION HAS NO ANSWER KEY, so it lives in `todo` as
   notebook writing, the same as the other science reviews. It is our wording of
   the chapter review's question 17 (why a dominant trait isn't necessarily the
   most common).

   ⚠️ NO ADDED FACTS beyond the four lessons; the drawn squares are the ones the
   lessons draw. */
'use strict';
module.exports = {
  id: "science/unit-5-review",
  slug: "unit-5-review",
  title: "Unit 5 Review: How Traits Pass Down",
  unit: "Life Science &middot; U5-L5",
  seq: { unit: 5, unitTitle: "How Traits Pass Down", n: 5 },
  natural: "2026-10-13",

  /* ── /teach-plan, rewritten 2026-10-13. Read off Merrill Life Science (Glencoe 1994),
        Chapter 5 Review, printed pp125-127, and the four rewritten Unit 5 lessons. ── */
  plan: {
    objective: "Pull the four Unit 5 lessons back together: how alleles pass from parents to children, what happens when Mendel's rule isn't the whole story, how sex and some disorders are inherited, and what knowing a person's genes can mean.",
    markers: [
      "BOOK (paraphrased), Chapter Review SUMMARY, 5-1 to 5-4: traits are inherited through alleles, a Punnett square predicts a cross, genotype is the allele letters and phenotype is how they show, incomplete dominance, multiple alleles and polygenic inheritance, sex-linked traits, pedigrees, genetic engineering and the Human Genome Project.",
      "BOOK (paraphrased), Key Science Words: alleles, dominant, genetic engineering, genetics, genome, genotype, heredity, heterozygous, homozygous, incomplete dominance, multiple alleles, pedigree, phenotype, polygenic inheritance, Punnett square, recessive, sex-linked gene.",
      "BOOK (paraphrased), Checking Concepts themes: both alleles appear in incomplete dominance, alleles separate in meiosis, genes make proteins, blood type is multiple alleles, sickle-cell anemia is recessive.",
      "BOOK (paraphrased), question 17, Think and Write: explain why a dominant trait isn't necessarily the most common one.",
    ],
    method: "RECAP IN PLAIN WORDS, THEN EACH IDEA SHOWN ONCE WITH A DRAWN SQUARE. Tt x Tt, Rr x Rr, AO x BO, XXc x XY and Cc x Cc are filled in step by step, a pedigree is read, and the genome gets one plain paragraph. The review re-shows what the four lessons drew and does not teach anything new.",
    exampleOnly: [
      "Nothing new. Every example here is one the unit already used (the tall and short peas, the pink flowers, blood types, the carrier mother, the two carriers), so recognizing it is the recall.",
    ],
    digitize: "The reading engine. Seven short Watch It Worked walkthroughs with the work drawn in box-drawing characters, and every hint names the lesson and section to reopen. NO NEW MECHANIC. ⚠️ The Think and Write question has no answer key, so it lives in `todo` as notebook writing.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Science",
    blurb: "The whole unit in one pass, with every cross drawn again: how alleles pass down, the patterns Mendel didn't see, how sex and some disorders are inherited, and what the genome map means.",
    contains: [
      "Alleles, dominant and recessive, and a Punnett square drawn again",
      "Incomplete dominance, blood type and polygenic traits",
      "Sex determination, a carrier mother, a family chart and a disorder that needs two copies",
      "The Human Genome Project in one paragraph",
      "A question to answer in writing, with no answer key",
    ] },
  eyebrow: ["Life Science", "U5-L5", "How Traits Pass Down"],
  dek: "You've followed a trait from a pea garden to a pink flower to a family's blood types to the whole genome. Here's each idea drawn one more time, and a question you'll have to answer for yourself.",

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
        "Every question here is tied to one of the four lessons and the hint says which one, so a wrong answer is directions to the right page and not a mark against your student.",
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
      "Every one of those differences came from the same place, which is the instructions each person inherited, but the four lessons in this unit showed that those instructions don't always behave the same way.",
      "So when someone asks a question about a family, how do you decide which idea to use?"
    ]},

    { title: "Two Alleles, One Square", s: [
      "A gene is the instructions for one trait, and you have two copies of every gene, one from your mom and one from your dad.",
      "The different versions of a gene are called {{alleles}}, and when two different ones meet, the dominant allele shows and the recessive allele hides.",
      "Scientists write the letters of a plant's two alleles as its {{genotype}}, like Tt, and what you can actually see, like tall, is its {{phenotype}}.",
      "A {{Punnett square}} is a grid that lays out every pairing a cross can make, with one letter from the top and one from the side in each box.",
      "",
      "[walk] Cross two tall pea plants that are both Tt.",
      "[step] Write one parent's letters across the top and the other's down the side. ||       T    t\n   ┌────┬────┐\nT  │    │    │\n   ├────┼────┤\nt  │    │    │\n   └────┴────┘",
      "[step] Fill each box with the letter above it and the letter beside it, capital first. ||       T    t\n   ┌────┬────┐\nT  │ TT │ Tt │\n   ├────┼────┤\nt  │ Tt │ tt │\n   └────┴────┘",
      "[step] Read the genotypes in the boxes, which are TT, Tt, Tt and tt. || genotypes:  TT, Tt, Tt, tt",
      "[step] Read the phenotypes, because TT and Tt are tall and only tt is short. || phenotypes:  3 tall  :  1 short",
      "",
      "Each baby plant has a one in four chance of being short, and the square shows the chances and not how many plants there will be."
    ]},

    { title: "When One Allele Doesn't Win", s: [
      "The second lesson found three patterns where the simple rule doesn't tell the whole story.",
      "In incomplete dominance, neither allele covers the other, so a flower with one of each looks in between.",
      "",
      "[walk] Cross two pink four o'clocks, which are both Rr.",
      "[step] Fill in the square, with R and r across the top and down the side. ||       R    r\n   ┌────┬────┐\nR  │ RR │ Rr │\n   ├────┼────┤\nr  │ Rr │ rr │\n   └────┴────┘",
      "[step] Read it with the key, where RR is red, Rr is pink and rr is white. || 1 red  :  2 pink  :  1 white",
      "",
      "The white came back, which shows the red and the white never blended away, so the pattern is called {{incomplete dominance}}.",
      "In multiple alleles, a gene has more than two forms in a group of people, like blood type with its A, B and O alleles, though each person still carries only two.",
      "",
      "[walk] Cross a mother who is AO with a father who is BO.",
      "[step] Fill in the square, with A and O across the top and B and O down the side. ||       A    O\n   ┌────┬────┐\nB  │ AB │ BO │\n   ├────┼────┤\nO  │ AO │ OO │\n   └────┴────┘",
      "[step] Read the blood types, because AB is type AB, BO is type B, AO is type A, and OO is type O. || AB, BO, AO, OO  =  types AB, B, A, O",
      "",
      "That's all four blood types from the same two parents, which is why a child's blood type can surprise a family.",
      "In polygenic inheritance, many gene pairs work together on one trait, and the result is a smooth range like human height instead of two neat groups."
    ]},

    { title: "Sex, the X and Disorders That Need Two Copies", s: [
      "Of the 46 chromosomes in your cells, one pair decides whether you're a boy or a girl, and an egg always carries an X, so the father's sperm, carrying an X or a Y, decides with a one in two chance either way.",
      "A gene on the X chromosome is called a sex-linked gene, and red-green color blindness is the example, where a boy has just one X, so a recessive allele there has nothing to cover it.",
      "",
      "[walk] Cross a carrier mother, XXc, with a father who sees normally, XY.",
      "[step] Fill in the square, with the mother's X and Xc across the top and the father's X and Y down the side. ||       X     Xc\n   ┌─────┬─────┐\nX  │ XX  │ XXc │\n   ├─────┼─────┤\nY  │ XY  │ XcY │\n   └─────┴─────┘",
      "[step] Read the boxes, where XX is a normal girl, XXc is a carrier girl, XY is a normal boy, and XcY is a color-blind boy. || XX   girl, normal\nXXc  girl, carrier\nXY   boy, normal\nXcY  boy, color blind",
      "",
      "A {{carrier}} has one recessive allele and usually shows no symptoms, so the mother in that cross sees normally, and each of her sons has a one in two chance of being color blind.",
      "A {{pedigree}} is a family chart that follows a trait, with circles for girls, squares for boys, a filled shape for anyone who has the trait, and a small c for a carrier.",
      "",
      "[walk] Read the pedigree for that carrier mother's family.",
      "[step] The parents are at the top, the mother a carrier and the father not, and their four children hang beneath them. ||        ○c ─────── □\n             │\n   ┌─────┬───┴──┬─────┐\n   ○     ○c     □     ■",
      "[step] The one filled square is the color-blind son, and the c beside a circle is the carrier daughter. || ■ color blind son\n○c carrier daughter",
      "",
      "Some disorders, like cystic fibrosis, are recessive and aren't on the X at all, so a person only has one with two copies of the allele.",
      "",
      "[walk] Cross two carriers of a recessive disorder, Cc and Cc.",
      "[step] Fill in the square, with C and c across the top and down the side. ||       C    c\n   ┌────┬────┐\nC  │ CC │ Cc │\n   ├────┼────┤\nc  │ Cc │ cc │\n   └────┴────┘",
      "[step] Read the boxes, because only cc has the disorder and the two Cc boxes are healthy carriers. || cc  =  1 in 4 has the disorder\nCc  =  2 in 4 are carriers",
      "",
      "Two healthy carriers can have a child with the disorder, with a one in four chance each time."
    ]},

    { title: "The Whole Map at Once", s: [
      "The last lesson stepped back from single traits to the genome, which is the whole set of genes a person carries.",
      "The Human Genome Project began in 1990, announced a draft in 2000 and finished in 2003, and it found about 20,000 genes, far fewer than the 100,000 scientists had estimated in 1994.",
      "The map lets doctors find the genes behind disorders from a few drops of blood, and it raises a worry too, which is whether an employer or an insurer should ever use what's in a person's genes.",
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
      "Start with the {Q} questions, and if one is hard the hint tells you which lesson to go back to.",
      "After that comes the vocabulary check at the bottom, {v} questions on the {c} word cards at the top of the page, {T} questions in all.",
      "Then the part that matters most, and it happens on paper.",
      "In your notebook, explain why a dominant trait isn't always the most common trait in a population.",
      "Write it in complete sentences, use what the unit taught about what dominant means, and give an example or a reason.",
      "There's no answer key, and you'll be marked on whether your explanation is clear and uses what the unit taught."
  ] },

  words: [
    ["Allele", "One of the different forms of a gene for a trait. You get one from each parent.", 4],
    ["Genotype", "The allele letters an organism carries, like TT or Tt.", 5],
    ["Phenotype", "What the alleles look like in the organism, like tall or short.", 5],
    ["Punnett square", "A grid that lays out every pairing a cross can make, so you can read the chances.", 6],
    ["Incomplete dominance", "A pattern where neither allele fully covers the other, so a plant with one of each shows a look in between.", 18],
    ["Carrier", "A person who has one copy of a recessive allele and usually shows no symptoms but can pass it on.", 30],
    ["Pedigree", "A chart of a family that shows who has a trait.", 31]
  ],

  findsAt: 48,
  questions: [
    { q: "Two Tt pea plants are crossed. What chance does each offspring have of being short?",
      find: [11,12],
      hint: "Fill in the square and count the boxes. Go back to Why You Look Like Your Parents, The Punnett Square.",
      choices: [
        "One in four, since only tt is short.",
        "One in two.",
        "Three in four.",
        "None, because tall is dominant."
      ], right: 0 },

    { q: "A plant is Tt and tall is dominant. What is its phenotype?",
      find: [5,11],
      hint: "The phenotype is what you see. Go back to Why You Look Like Your Parents, Letters Make It Short.",
      choices: ["Short", "Tt", "Tall", "Half and half"], right: 2 },

    { q: "What does a Punnett square show?",
      find: [6,12],
      hint: "Go back to Why You Look Like Your Parents, The Punnett Square.",
      choices: [
        "How many offspring a cross will have.",
        "The chances for each offspring, and not the count.",
        "Which parent is dominant.",
        "How old each parent is."
      ], right: 1 },

    { q: "A pure red four o'clock crossed with a pure white one gives pink flowers. What is this pattern called?",
      find: [14,17,18],
      hint: "Go back to What We Learned After Mendel, A Pink Flower Nobody Expected.",
      choices: ["Simple dominance", "Polygenic inheritance", "Incomplete dominance", "Sex linkage"], right: 2 },

    { q: "A mother with type AO blood and a father with type BO blood have a child. Which blood types are possible?",
      find: [22,23],
      hint: "Go back to What We Learned After Mendel, Two Parents, Four Possible Types.",
      choices: [
        "Only type AB.",
        "Only types A and B.",
        "Only type O.",
        "Type A, B, AB or O."
      ], right: 3 },

    { q: "Human height shows a smooth range from short to tall instead of two groups. What pattern is that?",
      find: [24],
      hint: "Go back to What We Learned After Mendel, Many Genes, One Trait.",
      choices: [
        "Polygenic inheritance, with many gene pairs acting together.",
        "Incomplete dominance.",
        "Multiple alleles.",
        "A sex-linked gene."
      ], right: 0 },

    { q: "What decides whether a baby is a boy or a girl?",
      find: [25],
      hint: "Go back to Traits, Disorders, and Human Genetics, X and Y.",
      choices: [
        "The mother's egg, which can carry an X or a Y.",
        "The father's sperm, which carries either an X or a Y.",
        "Whichever allele is dominant.",
        "The number of children already in the family."
      ], right: 1 },

    { q: "A carrier mother and a father with normal vision have a son. What chance does he have of being color blind?",
      find: [29,30],
      hint: "Go back to Traits, Disorders, and Human Genetics, One Carrier Mother, Four Possible Children.",
      choices: ["None", "One in four", "One in two", "Certain"], right: 2 },

    { q: "Two carriers of cystic fibrosis have a child. What chance does the child have of having it?",
      find: [38,39],
      hint: "Go back to Traits, Disorders, and Human Genetics, Disorders That Need Two Copies.",
      choices: ["One in four", "One in two", "None", "Three in four"], right: 0 },

    { q: "About how many genes did the finished Human Genome Project find?",
      find: [41],
      hint: "Go back to Mapping the Human Genome, Counting the Genes.",
      choices: ["About 5,000", "About 100,000", "About 20,000", "About 46"], right: 2 }
  ],

  vocabQuestions: [
    { q: "What is an <i>allele</i>?",
      choices: [
        "One of the different forms of a gene.",
        "A whole chromosome.",
        "A grid for predicting a cross.",
        "A chart of a family."
      ], right: 0 },
    { q: "What is a <i>genotype</i>?",
      choices: [
        "What an organism looks like.",
        "A kind of chromosome.",
        "The allele letters an organism carries, like Tt.",
        "A chart of a family."
      ], right: 2 },
    { q: "What is a <i>phenotype</i>?",
      choices: [
        "The letters of the alleles.",
        "What the alleles look like in the organism.",
        "A kind of cell.",
        "A grid with four boxes."
      ], right: 1 },
    { q: "What is a <i>Punnett square</i> for?",
      choices: [
        "Measuring how tall a plant is.",
        "Counting chromosomes.",
        "Showing every pairing a cross can make.",
        "Drawing a family."
      ], right: 2 },
    { q: "What is <i>incomplete dominance</i>?",
      choices: [
        "A pattern where neither allele fully covers the other.",
        "A trait that never shows.",
        "A mistake in copying DNA.",
        "A trait controlled by many gene pairs."
      ], right: 0 },
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
      ], right: 1 }
  ]
};
