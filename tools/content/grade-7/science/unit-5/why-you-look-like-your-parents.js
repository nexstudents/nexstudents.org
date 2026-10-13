/* science/why-you-look-like-your-parents
   Grade 7 · science · unit 5. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 REWRITTEN 2026-10-13 (Opus) after Kolten said it didn't explain anything.
   Paul: "that Tt stuff he doesn't understand that without legitimate information.
   remember you need to explain it to a 12-year-old."
   The 2026-10-05 version started at "alleles" with no idea of what a gene is or
   where it lives, used ten new words (four of them in back-to-back sentences),
   never said what "crossing" plants means, and described the Punnett square in
   words without ever building one. This one builds up from what he knows: you
   look like your family → cells carry instructions called genes → two copies,
   one from each parent → the copies can disagree → one is the boss → letters →
   Mendel's peas → a Punnett square built one step at a time. Word cards cut from
   10 to 6. Genotype and phenotype stay, in plain words, because the unit review
   asks about them; homozygous and heterozygous are named once and not carded.

   ⚠️ ADDED FROM THE RECORD (kept): Mendel's real count for stem length, 787 tall
   and 277 short. The earlobe is only the hook; real earlobe shape is messier than
   one gene, and the teacher notes say so.

   ⚠️ THE VERSE IS A WORKING CHOICE, NOT PAUL'S: Genesis 1:12, "after his kind". */
'use strict';
module.exports = {
  id: "science/why-you-look-like-your-parents",
  slug: "why-you-look-like-your-parents",
  title: "Why You Look Like Your Parents",
  unit: "Life Science &middot; U5-L1",
  seq: { unit: 5, unitTitle: "How Traits Pass Down", n: 1 },
  natural: "2026-10-13",

  /* ── /teach-plan, rewritten 2026-10-13. Merrill Life Science pp106-113. ── */
  plan: {
    objective: "Explain that you get two copies of every gene, one from each parent, tell which copy shows when they disagree, and use a Punnett square to predict a cross.",
    markers: [
      "BOOK (paraphrased), chapter opener: look-alike tigers, and a Find Out that has you count classmates with attached and free earlobes.",
      "BOOK (paraphrased), Mendel: a monk who worked eight years with pea plants in his monastery garden, reported in 1866, and was not understood; careful method and large counts made his results reliable.",
      "BOOK (paraphrased), cross: a pure tall pea plant crossed with a pure short one gives all tall offspring, and crossing those gives about three tall to one short.",
      "BOOK (paraphrased), Punnett square: one parent's alleles across the top and the other's down the side, each box filled with one allele from each parent like a multiplication table; capital letters are dominant, lowercase are recessive.",
    ],
    method: "BUILD UP FROM WHAT HE KNOWS, THEN WORK ONE CROSS STEP BY STEP. Family resemblance, then genes as instructions in every cell, two copies from two parents, the boss copy (dominant) and the hidden one (recessive), letters as shorthand, Mendel's cross, and a Punnett square filled in one box at a time.",
    exampleOnly: [
      "Mendel's tall and short peas, the book's own story, with the earlobe as the hook. WORLD: one pea garden.",
      "Left out on purpose: the yellow/green Yy example (a second world of letters), homozygous/heterozygous as cards, the cat and can opener example, the bean-bag activity.",
    ],
    digitize: "Reading engine. A Watch It Worked for what TT, Tt and tt look like, and a second that builds the Tt x Tt Punnett square row by row.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Science",
    blurb: "You got your looks from your parents, one copy of every instruction from each. What genes are, which copy wins, and the grid that predicts it.",
    contains: [
      "What a gene is, and why you have two copies of each one",
      "Dominant and recessive: which copy shows when they disagree",
      "Mendel's peas and the trait that skipped a generation",
      "A Punnett square built one step at a time",
    ] },
  eyebrow: ["Life Science", "U5-L1", "How Traits Pass Down"],
  dek: "People say you have your mom's eyes or your dad's laugh. Here's how a tiny set of instructions from each parent decides what you look like.",

  scripture: {
    ref: "Genesis 1:12",
    text: "And the earth brought forth grass, and herb yielding seed after his kind, and the tree yielding fruit, whose seed was in itself, after his kind: and God saw that it was good."
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Your student explains that every person gets two copies of each gene, one from each parent, that a dominant copy shows over a recessive one, and fills in a simple Punnett square to predict a cross."
      ]},
      { h: "Key Concepts", p: [
        "A gene is a set of instructions inside your cells for one trait, and you have two copies of each, one from your mom and one from your dad. The different versions of a gene, like tall or short, are called alleles.",
        "When the two copies disagree, the dominant one shows and the recessive one hides. A recessive trait only shows when both copies are recessive, which is how a trait can skip a generation.",
        "Scientists write a dominant allele as a capital letter (T) and a recessive one as a small letter (t). The letters are the genotype; what you can see is the phenotype."
      ]},
      { h: "Where Students Get Stuck", p: [
        "Thinking the letters are the trait itself. They're just shorthand: T stands for the tall version of the height gene, t for the short version.",
        "Filling in the Punnett square. Each box gets one letter from the top and one from the side, like a multiplication table, and the capital letter is written first."
      ]},
      { h: "Teaching Suggestion", p: [
        "Draw the Tt x Tt square together on paper before the walkthrough, then count the boxes: one TT, two Tt, one tt. Ask which ones are tall.",
        "Earlobes are only the hook. Real earlobe shape is messier than one gene, so don't use it to work a square."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "You Look Like Your Family", s: [
      "People often say a kid has her mom's eyes, or his dad's nose, or a grandpa's red hair, and they're usually right.",
      "Features like eye color, hair color, height and the shape of your ears are called traits, and you got yours from your parents.",
      "Passing traits from parents to their children is called {{heredity}}, and this lesson is about how it works.",
      "Look at the bottom of your ear in a mirror, and you'll see either an earlobe that hangs free or one that's attached straight to your head, which is one of those traits.",
      "So how did your parents hand that down to you?"
    ]},

    { title: "Instructions Inside Every Cell", s: [
      "Your body is built out of trillions of tiny living pieces called cells, far too small to see without a microscope.",
      "Inside almost every cell is a set of instructions for building you, kind of like a giant recipe book.",
      "Each recipe in the book is called a {{gene}}, and a gene is the instructions for one trait, like one recipe for eye color and another for earlobes.",
      "Here's the important part: you have two copies of every recipe, one copy that came from your mom and one copy that came from your dad.",
      "",
      "[ex] For the earlobe gene, you have one copy from Mom and one copy from Dad."
    ]},

    { title: "Two Copies That Can Disagree", s: [
      "Your two copies of a gene don't always say the same thing.",
      "The copy from your mom might say free earlobes while the copy from your dad says attached earlobes.",
      "The different versions of the same gene are called {{alleles}}, so free and attached are two alleles of the earlobe gene.",
      "",
      "[ex] Pea plants have a height gene, and its two alleles are tall and short.",
      "",
      "So what happens when your two copies disagree, and one says one thing while the other says something else?"
    ]},

    { title: "One Copy Is the Boss", s: [
      "When the two copies disagree, one of them usually wins and is the one that shows up in you.",
      "The allele that wins is called {{dominant}}, and you can think of it as the boss, because it shows whenever it's there.",
      "The allele that hides is called {{recessive}}, and it only shows up when both of your copies are that same recessive allele.",
      "",
      "[ex] In pea plants, tall is dominant and short is recessive, so a plant with one tall copy and one short copy grows tall.",
      "",
      "The short copy is still in that plant, though, hiding, and it can be handed down to the next generation."
    ]},

    { title: "Letters Make It Short", s: [
      "Writing out tall copy and short copy over and over gets long, so scientists use letters instead.",
      "A capital letter stands for the dominant allele and the same letter in lowercase stands for the recessive one, so for pea height, T means tall and t means short.",
      "Every plant has two letters, because it has two copies, one from each parent.",
      "",
      "[walk] What does each pair of letters look like?",
      "[step] Two capital T's means both copies say tall, so the plant is tall. || TT  →  tall",
      "[step] One T and one t means they disagree, and the boss T wins, so the plant is tall. || Tt  →  tall",
      "[step] Two small t's means there's no boss to cover them, so the short trait finally shows. || tt  →  short",
      "",
      "The letters are called the plant's genotype, and what you can actually see, tall or short, is its phenotype.",
      "Scientists also call a matching pair like TT or tt homozygous and a mixed pair like Tt heterozygous, but you can just say same or mixed."
    ]},

    { title: "A Monk and His Peas", s: [
      "All of this was first worked out by Gregor Mendel, a monk who grew pea plants in his monastery garden in the 1800s.",
      "He crossed pea plants, which means he took the pollen from one plant and put it on another, so that he chose the two parents himself.",
      "When he crossed a plant that always grew tall with a plant that always grew short, every single one of the baby plants grew tall.",
      "Then he crossed those tall babies with each other, and something surprising happened, because short plants came back.",
      "In his real counts there were 787 tall plants and 277 short ones, close to 3 tall for every 1 short.",
      "The short trait hadn't disappeared at all, it had been hiding as a recessive copy, and it skipped a generation before showing up again."
    ]},

    { title: "The Punnett Square", s: [
      "A {{Punnett square}} is a simple grid that shows every way the parents' copies can come together, like a multiplication table for genes.",
      "Here's how to build one for Mendel's second cross, two tall plants that are both Tt.",
      "",
      "[walk] Cross two Tt plants and predict the babies.",
      "[step] Draw a square split into four boxes, two across and two down. || \n   ┌────┬────┐\n   │    │    │\n   ├────┼────┤\n   │    │    │\n   └────┴────┘",
      "[step] Write one parent's two letters across the top, one over each column. ||       T    t\n   ┌────┬────┐\n   │    │    │\n   ├────┼────┤\n   │    │    │\n   └────┴────┘",
      "[step] Write the other parent's two letters down the left side, one beside each row. ||       T    t\n   ┌────┬────┐\nT  │    │    │\n   ├────┼────┤\nt  │    │    │\n   └────┴────┘",
      "[step] Fill each box with the letter above it and the letter beside it, capital first. ||       T    t\n   ┌────┬────┐\nT  │ TT │ Tt │\n   ├────┼────┤\nt  │ Tt │ tt │\n   └────┴────┘",
      "[step] Now read the four boxes: TT is tall, both Tt boxes are tall, and tt is short. || 3 tall  :  1 short",
      "",
      "That's the same 3 to 1 that Mendel counted in his garden, and the square shows you exactly why.",
      "Each baby plant has a 1 in 4 chance of being short, but the square doesn't promise exactly one short plant out of every four, the same way flipping a coin twice doesn't promise one heads."
    ]},

    { title: "Back to Your Earlobes", s: [
      "So how did your parents hand your earlobes down to you?",
      "Each parent gave you one copy of the earlobe gene, and whichever copy was the boss is the one you see in the mirror.",
      "If both your parents carry a hidden recessive copy, you could end up with a trait neither of them shows, and that's how a trait can skip a generation.",
      "",
      "[verse] Genesis 1:12 says, “And the earth brought forth grass, and herb yielding seed after his kind, and the tree yielding fruit, whose seed was in itself, after his kind: and God saw that it was good.”",
      "",
      "Mendel's garden was the first place anyone saw that plan up close, with each seed carrying its kind inside it and passing it on in a pattern you can count."
    ]},
  ],

  words: [
    ["Heredity", "The passing of traits from parents to their children.", 2],
    ["Gene", "A set of instructions inside your cells for one trait, like eye color. You have two copies of each.", 7],
    ["Allele", "One version of a gene, like the tall version or the short version.", 12],
    ["Dominant", "The allele that shows whenever it's there. It's the boss, written as a capital letter.", 16],
    ["Recessive", "The allele that hides unless both copies are recessive. It's written as a small letter.", 17],
    ["Punnett square", "A grid that shows every way the parents' alleles can come together.", 35],
  ],

  findsAt: 50,

  questions: [
    { q: "What is heredity?", find: [2],
      hint: "Read You Look Like Your Family.",
      choices: ["The passing of traits from parents to their children", "A kind of pea plant", "The study of cells under a microscope", "Growing a garden"], right: 0,
      why: "Heredity is how traits get passed down from parents to kids." },

    { q: "What is a gene?", find: [7],
      hint: "Think of the recipe book in every cell.",
      choices: ["A whole cell", "The instructions for one trait, like a recipe", "A kind of earlobe", "A pea plant"], right: 1,
      why: "A gene is one recipe in the instruction book inside your cells." },

    { q: "Where did your two copies of each gene come from?", find: [8],
      hint: "Read Instructions Inside Every Cell.",
      choices: ["Both from your mom", "Both from your dad", "One from your mom and one from your dad", "From the food you eat"], right: 2,
      why: "One copy from each parent." },

    { q: "Tall and short are two versions of the pea height gene. What are those versions called?", find: [12],
      hint: "Read Two Copies That Can Disagree.",
      choices: ["Cells", "Traits", "Squares", "Alleles"], right: 3,
      why: "Different versions of the same gene are alleles." },

    { q: "A pea plant has one tall copy and one short copy. Why does it grow tall?", find: [18],
      hint: "Which one is the boss?",
      choices: ["Tall is dominant, so it shows over short", "Short is dominant", "Both traits show at once", "The plant picks one at random"], right: 0,
      why: "The dominant tall copy shows, and the short copy hides." },

    { q: "A pea plant is tt. What does it look like?", find: [26],
      hint: "Two small letters means no boss to cover them.",
      choices: ["Tall", "Short", "Half tall and half short", "You can't tell"], right: 1,
      why: "With two recessive copies, the short trait shows." },

    { q: "Mendel crossed a plant that always grew tall with one that always grew short. What were the babies like?", find: [31],
      hint: "Read A Monk and His Peas.",
      choices: ["All short", "Half tall and half short", "All tall", "Medium height"], right: 2,
      why: "Every baby got one tall copy, and tall is the boss." },

    { q: "In a Punnett square, what goes in each box?", find: [41],
      hint: "Think of a multiplication table.",
      choices: ["Any two letters you like", "Only capital letters", "The number of plants", "The letter above it and the letter beside it"], right: 3,
      why: "Each box gets one letter from the top and one from the side." },

    { q: "Two Tt plants are crossed. Out of the four boxes in the square, how many are short?", find: [42],
      hint: "Count the boxes that are tt.",
      choices: ["1", "2", "3", "4"], right: 0,
      why: "Only the tt box is short, so 1 out of 4." },
  ],

  vocabQuestions: [
    { q: "What is <i>heredity</i>?", choices: ["The passing of traits from parents to their children", "A grid for predicting crosses", "The study of plants", "A hidden allele"], right: 0 },
    { q: "What is a <i>gene</i>?", choices: ["A tiny pea", "A cell wall", "The instructions for one trait", "A type of square"], right: 2 },
    { q: "What is an <i>allele</i>?", choices: ["One version of a gene", "A whole plant", "A type of cell", "A garden tool"], right: 0 },
    { q: "What does <i>dominant</i> mean?", choices: ["It always hides", "It shows whenever it's there", "It only shows in plants", "It skips every generation"], right: 1 },
    { q: "When does a <i>recessive</i> trait show?", choices: ["Always", "Never", "Only when there's one copy", "Only when both copies are recessive"], right: 3 },
    { q: "What is a <i>Punnett square</i> for?", choices: ["Measuring how tall a plant is", "Showing every way the parents' alleles can come together", "Counting cells", "Drawing a garden"], right: 1 },
  ],

  todo: { title: "What To Do Now", s: [
    "Now you know why you look like your family, and how a hidden copy can skip a generation.",
    "Work through the {c} word cards at the top of the page, then {Q} questions about the lesson, then {v} more questions about those words, {T} questions in all.",
    "Before the Punnett square questions, draw a Tt by Tt square on paper and fill in all four boxes yourself.",
    "If you get stuck on a question, tap Find It in the Story and read the line the page shows you."
  ] },
};
