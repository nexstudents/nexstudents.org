/* science/why-you-look-like-your-parents
   Grade 7 · science · unit 5. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-10-05. Written on Sonnet from Merrill Life
   Science (Glencoe 1994) Section 5-1, "What Is Genetics?", pp106-113, via the
   week 6-7 packet (paraphrased notes) and the teach-plan. /natural pass run and
   stamped.

   ⚠️ ADDED FROM THE RECORD, worth a glance: Mendel's real count for stem
   length was 787 tall plants and 277 short ones, which is where the book's 3
   to 1 comes from. The packet has the ratio and not the counts. Also added:
   the earlobe is only the hook (the book's Find Out); real earlobe shape is
   messier than one gene, and the lesson says so in the teacher notes instead
   of assigning it alleles.

   ⚠️ LEFT OUT: the book's Morgan (genes sit on chromosomes) line, because the
   packet's date for it was unclear, the cat and can opener probability
   example, and the Activity 5-1A bean bags (an activity, not a lesson).

   ⚠️ THE FAITH NOTE IS KEPT FACTUAL: Mendel was a monk. The verse is a WORKING
   CHOICE, NOT PAUL'S: Genesis 1:12, "after his kind", which fits peas that
   keep making peas. Choosing the scripture is his → review queue. */
'use strict';
module.exports = {
  id: "science/why-you-look-like-your-parents",
  slug: "why-you-look-like-your-parents",
  title: "Why You Look Like Your Parents",
  unit: "Life Science &middot; U5-L1",
  seq: { unit: 5, unitTitle: "How Traits Pass Down", n: 1 },
  natural: "2026-10-05",

  /* ── /teach-plan, 2026-10-05. Merrill Life Science pp106-113. ── */
  plan: {
    objective: "Explain how alleles pass from parents to offspring, and use a Punnett square to predict the possible genotypes and phenotypes of a cross.",
    markers: [
      "BOOK (paraphrased), chapter opener: look-alike tigers, and a Find Out that has you count classmates with attached and free earlobes.",
      "BOOK (paraphrased), new words: heredity, alleles, genetics, dominant, recessive, Punnett square, genotype, homozygous, heterozygous, phenotype.",
      "BOOK (paraphrased), Mendel: a monk who worked eight years with pea plants in his monastery garden, reported in 1866, and was not understood; careful method and large counts made his results reliable.",
      "BOOK (paraphrased), cross: a pure tall pea plant crossed with a pure short one gives all tall offspring, and crossing those gives about three tall to one short.",
      "BOOK (paraphrased), Punnett square: one parent's alleles across the top and the other's down the side, each box filled with one allele from each parent like a multiplication table; capital letters are dominant, lowercase are recessive; it shows possible genotypes and not how many offspring.",
      "BOOK (paraphrased), Example Problem: a homozygous yellow pea crossed with a homozygous green pea gives all Yy offspring, and all are yellow.",
    ],
    method: "FOLLOW ONE TRAIT FROM TWO PARENTS TO THE OFFSPRING. Mendel's pea crosses show a trait that disappears and comes back at a steady ratio. The explanation is alleles: each parent gives one allele for the trait, a dominant allele shows over a recessive one, and a Punnett square lays out every possible pairing so you can read the chances.",
    exampleOnly: [
      "Mendel's garden and its tall and short peas. WORLD: one garden, the book's own story, with the earlobe count as the hook.",
      "The Yy yellow and green peas from the book's worked example.",
      "Left out on purpose: the cat and can opener probability example, and the bean-bag activity.",
    ],
    digitize: "Reading engine. The Punnett square is described in words and boxes are listed as [ex] lines; ⚠️ a drawn square would help and the site doesn't have that visual yet.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Science",
    blurb: "A monk with a pea garden, a trait that vanishes and comes back at exactly three to one, and the grid that explains it.",
    contains: [
      "Mendel's garden and his tall and short peas",
      "Alleles, dominant and recessive",
      "Genotype and phenotype, homozygous and heterozygous",
      "How to fill in and read a Punnett square",
    ] },
  eyebrow: ["Life Science", "U5-L1", "How Traits Pass Down"],
  dek: "Some people's earlobes hang free and some are attached, and you got yours from your parents. A monk with a garden worked out how.",

  scripture: {
    ref: "Genesis 1:12",
    text: "And the earth brought forth grass, and herb yielding seed after his kind, and the tree yielding fruit, whose seed was in itself, after his kind: and God saw that it was good.",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will explain heredity as the passing of alleles from parents to offspring, tell dominant from recessive and genotype from phenotype, and use a Punnett square to predict a cross."
      ]},
      { h: "Key Concepts", p: [
        "Each parent gives one allele for a trait, so an offspring has two. A dominant allele (a capital letter) shows when it's present, and a recessive allele (lowercase) shows only when both alleles are recessive.",
        "A Punnett square shows what's possible, not what will happen. A cross of two Tt parents has a one in four chance of a short offspring each time, which doesn't guarantee that one of any four offspring is short."
      ]},
      { h: "Where Students Get Stuck", p: [
        "Writing the alleles in the wrong places. One parent's two alleles go across the top and the other's down the side, and each box takes one letter from the top and one from the side.",
        "Treating earlobes as a one-gene example. Free and attached earlobes are the classroom hook, but real earlobe shape is messier than a single pair of alleles, which the next lesson comes back to."
      ]},
      { h: "Teaching Suggestion", p: [
        "Have the student fill in the Tt by Tt square on paper before reading the answer, and count the boxes by hand: one TT, two Tt, one tt. Counting is what makes 3 to 1 stick."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Look at Your Earlobes", s: [
      "Look at the bottom of your ear in a mirror, and you'll see either a lobe that hangs free or one that joins your head straight on, and a classroom count usually turns up both kinds.",
      "You didn't pick yours, and neither did your parents, because a trait like this is passed down inside the cells that made you, a process called {{heredity}}.",
      "The study of how traits get passed from parents to their offspring is called {{genetics}}, and a monk with a vegetable garden is the person who first worked it out.",
      "So how does a trait travel from parent to child, and how can it skip over a whole generation?"
    ]},

    { title: "A Monk With a Pea Garden", s: [
      "Gregor Mendel was a monk who kept a garden at his monastery, and for eight years he did something nobody had bothered to do: he crossed pea plants on purpose and counted what came up.",
      "He didn't count a few plants and guess, because he counted thousands, and large careful counts are the reason his results can be trusted.",
      "He published them in 1866, and the scientists of his day didn't understand what he'd found, so it took years before anyone gave the work the credit it deserved.",
      "Everything in this lesson comes out of that garden, and it starts with one cross."
    ]},

    { title: "The Trait That Came Back", s: [
      "Mendel took a pea plant that always grew tall and crossed it with one that always grew short, and every single offspring came up tall.",
      "If tallness had simply won, that would be the end of the story, but when he crossed those tall offspring with each other, short plants came back.",
      "The numbers were close to three tall plants for every short one, and in his real counts for stem length it was 787 tall and 277 short.",
      "The short trait hadn't disappeared in the first generation, it had been hiding, and Mendel's question was how a plant could carry a trait it didn't show."
    ]},

    { title: "Two Copies, and One of Them Wins", s: [
      "The answer is that a trait comes in pairs of forms called {{alleles}}, and each parent passes one allele for each trait to its offspring, so every plant, and every person, carries two.",
      "When the two are different, one of them shows and covers up the other, and the one that shows is {{dominant}} while the one that stays hidden is {{recessive}}.",
      "Geneticists write a dominant allele as a capital letter and the recessive one as the same letter in lowercase, so tall is T and short is t.",
      "A short plant needs two recessive alleles, tt, since a single T would make it tall, and that's how the short trait could hide inside a tall plant."
    ]},

    { title: "Two Words for Two Things", s: [
      "The letters a plant carries are its {{genotype}}, and what you actually see, tall or short, is its {{phenotype}}.",
      "Two plants can look the same and still carry different letters, because TT and Tt are both tall.",
      "A plant with two matching alleles, TT or tt, is {{homozygous}}, and a plant with two different alleles, Tt, is {{heterozygous}}.",
      "",
      "[ex] TT = homozygous tall, Tt = heterozygous tall, tt = homozygous short",
      "",
      "So a pure tall plant is TT, a pure short plant is tt, and the tall plants in Mendel's second generation looked identical while carrying two different genotypes."
    ]},

    { title: "Filling in a Punnett Square", s: [
      "A {{Punnett square}} is a grid that lays out every pairing a cross can make, so you can read the chances off it instead of guessing.",
      "Write one parent's two alleles across the top of the grid and the other parent's two down the side, then fill each box with the letter above it and the letter beside it, the way you'd fill in a multiplication table.",
      "Cross two Tt plants, with T and t across the top and T and t down the side, and the four boxes come out like this.",
      "",
      "[ex] TT, Tt, Tt, tt",
      "",
      "Three of the four boxes hold a T, so three out of four are tall, and one box is tt, so one in four is short, which is exactly the 3 to 1 Mendel kept counting."
    ]},

    { title: "What a Square Can't Tell You", s: [
      "A Punnett square shows the possible genotypes and how likely each one is, and it doesn't tell you how many offspring there will be.",
      "Each new plant is a fresh draw, so two Tt parents can have four tall offspring in a row, and all the square promises is that each one has a one in four chance of being short.",
      "Try the book's other example, a pea plant with two yellow alleles, YY, crossed with one with two green alleles, yy.",
      "",
      "[ex] Every box is Yy.",
      "",
      "Every offspring is Yy, and since yellow is dominant, every one of them is yellow, while the green allele rides along hidden until it meets another one."
    ]},

    { title: "Back to the Earlobes", s: [
      "Go back to the ear in the mirror, and the question of how a trait can skip a generation.",
      "It can because each parent hands on just one of two alleles, and a recessive one can sit unseen in a parent for as long as a dominant one is covering it, then show up when two such parents each pass it on.",
      "",
      "[verse] Genesis 1:12 says, “And the earth brought forth grass, and herb yielding seed after his kind, and the tree yielding fruit, whose seed was in itself, after his kind: and God saw that it was good.”",
      "",
      "Mendel's garden was the first place anyone saw how that ordered plan works in the plants themselves, a seed carrying its kind inside it and passing it on by a pattern you can count."
    ]}
  ],

  words: [
    ["Heredity", "The passing of traits from parents to offspring.", 1],
    ["Genetics", "The study of how alleles are passed from parents to offspring.", 2],
    ["Allele", "One of the different forms of a gene for a trait.", 12],
    ["Dominant", "An allele that shows when it's present and covers up the other one.", 13],
    ["Recessive", "An allele that's hidden when a dominant allele is present.", 13],
    ["Genotype", "The combination of alleles an organism carries, written as letters.", 16],
    ["Phenotype", "How a trait actually looks, the physical result of the alleles.", 16],
    ["Homozygous", "Having two matching alleles for a trait, like TT or tt.", 18],
    ["Heterozygous", "Having two different alleles for a trait, like Tt.", 18],
    ["Punnett square", "A grid that shows every possible pairing of alleles in a cross.", 21]
  ],

  findsAt: 35,
  questions: [
    { tag: "Mendel", q: "What did Mendel do that made his results reliable?",
      find: [4, 5],
      hint: "Read A Monk With a Pea Garden.",
      choices: [
        "He counted large numbers of plants carefully.",
        "He studied only one plant.",
        "He guessed the ratios and then checked.",
        "He used animals instead of plants."
      ], right: 0 },

    { tag: "The Cross", q: "What happened when Mendel crossed a pure tall pea plant with a pure short one?",
      find: [8],
      hint: "Read The Trait That Came Back.",
      choices: [
        "All the offspring were short.",
        "Half the offspring were tall and half were short.",
        "All the offspring were tall.",
        "The plants produced no seeds."
      ], right: 2 },

    { tag: "The Ratio", q: "What came back when he crossed those tall offspring with each other?",
      find: [9, 10],
      hint: "About three tall plants for every short one.",
      choices: [
        "Only tall plants.",
        "Short plants returned, about one for every three tall.",
        "Only short plants.",
        "Plants of a completely new height."
      ], right: 1 },

    { tag: "Alleles", q: "How many alleles for a trait does an offspring get from each parent?",
      find: [12],
      hint: "Read Two Copies, and One of Them Wins.",
      choices: ["None", "Two", "One", "Four"], right: 2 },

    { tag: "Dominant", q: "In a plant with the alleles Tt, why is it tall?",
      find: [13, 15],
      hint: "One allele shows and covers up the other.",
      choices: [
        "Because the t allele is dominant.",
        "Because the T allele is dominant, so it shows over the t.",
        "Because both alleles are tall.",
        "Because it's homozygous."
      ], right: 1 },

    { tag: "Words", q: "A plant has the alleles tt. Which description fits it?",
      find: [18],
      hint: "Read Two Words for Two Things.",
      choices: [
        "Heterozygous and tall.",
        "Homozygous and tall.",
        "Heterozygous and short.",
        "Homozygous and short."
      ], right: 3 },

    { tag: "Punnett", q: "How do you fill in a box of a Punnett square?",
      find: [22],
      hint: "Read Filling in a Punnett Square.",
      choices: [
        "Take one letter from the top and one from the side.",
        "Add the two letters on the top.",
        "Copy the letter from the parent who is taller.",
        "Take both letters from the side."
      ], right: 0 },

    { tag: "Predicting", q: "Two Tt plants are crossed. What are the chances that an offspring is short?",
      find: [23, 25],
      hint: "Count the tt boxes out of four.",
      choices: ["One in four", "Three in four", "One in two", "None"], right: 0 },

    { tag: "Predicting", q: "A YY plant is crossed with a yy plant. What do the offspring look like?",
      find: [28, 30],
      hint: "Read What a Square Can't Tell You.",
      choices: [
        "Half yellow and half green.",
        "All green.",
        "All yellow, and all Yy.",
        "Three yellow to one green."
      ], right: 2 }
  ],

  vocabQuestions: [
    { q: "What is <i>heredity</i>?",
      choices: ["The passing of traits from parents to offspring.", "A grid for predicting crosses.", "The study of plants.", "A hidden allele."], right: 0 },
    { q: "What is a <i>dominant</i> allele?",
      choices: ["One that is always rare.", "One that shows and covers up the other.", "One that has no effect.", "One that only appears in peas."], right: 1 },
    { q: "What is a <i>genotype</i>?",
      choices: ["How a trait looks.", "A grid of crosses.", "The combination of alleles an organism carries.", "A kind of offspring."], right: 2 },
    { q: "What is a <i>phenotype</i>?",
      choices: ["A pair of recessive alleles.", "The letters in a Punnett square.", "A hidden trait.", "How a trait actually looks."], right: 3 },
    { q: "What does <i>heterozygous</i> mean?",
      choices: ["Having two different alleles for a trait.", "Having two matching alleles.", "Having no alleles.", "Having a recessive trait."], right: 0 },
    { q: "What is a <i>Punnett square</i>?",
      choices: ["A pea plant that is square.", "A grid that shows every possible pairing of alleles in a cross.", "A count of plants in a garden.", "A kind of allele."], right: 1 }
  ],

  todo: { title: "What To Do Now", s: [
      "A trait that vanished in one generation and came back in the next is what Mendel spent eight years counting, and the questions below ask what his garden showed.",
      "{c} word cards sit at the top of the page, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "For every cross, write each parent's two alleles first, then fill in the square, and count the boxes before you answer.",
      "If the Punnett questions trip you up, read Filling in a Punnett Square again, and write the four boxes out on paper.",
      "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] }
};
