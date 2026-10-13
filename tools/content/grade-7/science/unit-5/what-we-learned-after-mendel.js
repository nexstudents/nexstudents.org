/* science/what-we-learned-after-mendel
   Grade 7 · science · unit 5. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 REWRITTEN 2026-10-13 (Sonnet, checked by Opus) after Kolten said the lessons
   don't explain anything. Paul: "you're assuming that you are making it very
   technical for him and he has no context ... explain it to a 12-year-old."
   The 2026-10-05 version assumed he still had allele, dominant, "crossed" and
   Punnett square from yesterday, hit him with three new patterns back to back,
   let R and r appear with no explanation, never drew a single Punnett square,
   and said "six combinations and four blood types" without ever listing them.
   This one opens with a plain recap of the genes lesson, teaches incomplete
   dominance with two drawn squares (RR x rr, then Rr x Rr), teaches blood type
   with the three-flavors-of-ice-cream picture and a drawn table of all six
   pairs, then one drawn cross (AO x BO), then a SHORT polygenic section (the
   unit review asks about it) and a three-step sorting walk. Landsteiner and the
   transfusion line are cut. Word cards stay at three: the recap words are not
   re-carded, they were carded last lesson.

   ⚠️ ADDED FROM THE RECORD, worth a glance: Carl Correns is named as the botanist
   who crossed red and white four o'clocks, "around 1900" (kept from the first
   draft; the packet names Correns and the cross, not his job). The first square,
   a pure red RR flower crossed with a pure white rr flower giving all Rr, is
   standard genetics and follows from the book's all-pink result. The meaning of
   "pure" (every copy the same) is standard. The blood-type cross (AO mother by
   BO father, all four types) is ours, as before. The ice cream and staircase
   pictures are ours and carry no facts.

   ⚠️ THE VERSE IS A WORKING CHOICE, NOT PAUL'S: Acts 17:26 ("hath made of one
   blood all nations of men"). It's about one origin for all people and not
   about blood types, and the lesson says so in the prose. Choosing the
   scripture is his → review queue. */
'use strict';
module.exports = {
  id: "science/what-we-learned-after-mendel",
  slug: "what-we-learned-after-mendel",
  title: "What We Learned After Mendel",
  unit: "Life Science &middot; U5-L2",
  seq: { unit: 5, unitTitle: "How Traits Pass Down", n: 2 },
  natural: "2026-10-13",

  /* ── /teach-plan, rewritten 2026-10-13. Merrill Life Science pp114-116. ── */
  plan: {
    objective: "Explain incomplete dominance, multiple alleles and polygenic inheritance with one example each, fill in a Punnett square for the first two, and tell which pattern a trait follows.",
    markers: [
      "BOOK (paraphrased), new words: incomplete dominance, multiple alleles, polygenic inheritance.",
      "BOOK (paraphrased), incomplete dominance: Correns crossed pure red and pure white four o'clocks and got all pink; crossing the pinks gave red, pink and white offspring (RR, Rr, rr); the alleles are not blended, both are expressed.",
      "BOOK (paraphrased), multiple alleles: more than two alleles for one trait; the ABO blood types, with A and B dominant to O; type A is AA or AO, type B is BB or BO, AB, and type O is OO.",
      "BOOK (paraphrased), polygenic inheritance: many gene pairs act together on one trait, such as eye color shades and height.",
      "BOOK (paraphrased), Section Review: why incomplete dominance isn't a blend.",
    ],
    method: "RECAP, THEN THREE PATTERNS, EACH DRAWN. Recap genes, two copies, alleles, dominant and recessive, letters and the Punnett square. Incomplete dominance: draw RR x rr (all Rr, all pink), then Rr x Rr (1 red, 2 pink, 1 white), and the white coming back proves nothing blended. Multiple alleles: three alleles exist, each person carries two, so there are six pairs and four blood types, drawn as a table, then one AO x BO square. Polygenic: many gene pairs, a smooth slope. Last, sort three traits by the clue each leaves.",
    exampleOnly: [
      "The red, pink and white four o'clocks (incomplete dominance), blood type (multiple alleles) and a class lined up by height (polygenic). WORLD: three small worlds, each kept to its own section.",
      "Left out on purpose: Landsteiner, the transfusion line, skin color, and the black and white chickens that give blue offspring.",
    ],
    digitize: "Reading engine. Four Watch It Worked walkthroughs: RR x rr, Rr x Rr, the blood-type table built up row by row, and AO x BO, all drawn with box-drawing characters, plus a short sorting walk.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Science",
    blurb: "A red flower and a white flower make a pink one, a blood type comes from three possible alleles, and nobody's height is simply tall or short. Three patterns Mendel's peas didn't show, each one drawn out.",
    contains: [
      "A quick recap of genes, alleles and the Punnett square",
      "Incomplete dominance: two flower crosses drawn step by step",
      "Multiple alleles: all six blood-type pairs in a table, and one cross",
      "Polygenic traits like height, and how to tell the three patterns apart",
    ] },
  eyebrow: ["Life Science", "U5-L2", "How Traits Pass Down"],
  dek: "Mendel's peas were either tall or short. Most of what you see in people is messier than that, and it still follows rules you can draw.",

  scripture: {
    ref: "Acts 17:26",
    text: "And hath made of one blood all nations of men for to dwell on all the face of the earth, and hath determined the times before appointed, and the bounds of their habitation.",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Your student explains incomplete dominance, multiple alleles and polygenic inheritance with one example each, fills in a Punnett square for the first two, and tells which pattern a described trait follows."
      ]},
      { h: "Key Concepts", p: [
        "In incomplete dominance neither allele fully covers the other, so the Rr flower looks in between. It isn't blending: crossing two pink flowers brings back red and white, which a true blend could never do. Here R and r are only labels, because neither allele is the boss.",
        "A person still carries only two alleles of the blood-type gene, even though three exist in the population. That gives six pairs and four blood types, and a polygenic trait gives a smooth range of results, not a few separate groups."
      ]},
      { h: "Where Students Get Stuck", p: [
        "🚨 Calling pink a blend. The test is what the next generation does: if the parents' original looks come back, the alleles stayed separate.",
        "Counting three alleles in one person. The blood-type gene has three forms in the population, but each person has just two of them, like a double scoop from three flavors.",
        "Thinking type A means AA. It can also be AO, because the O hides under the A."
      ]},
      { h: "Teaching Suggestion", p: [
        "Draw the Rr by Rr square on paper before the walkthrough, then count: one red, two pink, one white. Then line the family up by height and see the smooth slope instead of two groups, which is what polygenic means."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Quick Recap: Genes, Copies and the Boss", s: [
      "Last lesson you learned that every cell in your body holds a giant recipe book, and each recipe in it is called a gene.",
      "A gene is the instructions for one trait, like eye color or height, and you have two copies of every gene, one from your mom and one from your dad.",
      "The different versions of a gene are called alleles, so tall and short are two alleles of the pea plant's height gene.",
      "When your two copies disagree, the boss copy shows up and is called dominant, and the copy that hides is called recessive.",
      "Scientists write the boss as a capital letter and the hider as a small letter, so in Mendel's peas, TT and Tt are tall and tt is short.",
      "A Punnett square is a grid that shows every way two parents' copies can come together, with one letter from the top and one from the side in each box.",
      "Mendel's peas were simple, because one allele always won.",
      "Today you'll meet three patterns where the rules work a little differently, and you'll draw each one."
    ]},

    { title: "A Pink Flower Nobody Expected", s: [
      "Around 1900, a botanist named Carl Correns grew a flower called the four o'clock, which comes in red and in white.",
      "He took a pure red one and a pure white one and crossed them, which means he chose the two parents himself.",
      "Pure just means every copy of the gene is the same, so the red flower has two red copies and the white flower has two white copies.",
      "Mendel's rule says one color should win, so you'd expect all red flowers or all white flowers.",
      "Instead every single baby flower came up pink, and not one was red or white.",
      "Let's draw the cross to see why.",
      "",
      "[walk] Cross a pure red flower with a pure white flower.",
      "[step] Give each color a letter, R for the red allele and r for the white one. || R = red     r = white",
      "[step] The red flower has two red copies, so it's RR, and the white flower has two white copies, so it's rr. || red flower = RR\nwhite flower = rr",
      "[step] Draw a square, and write RR across the top and rr down the side, one letter for each row and column. ||       R    R\n   ┌────┬────┐\nr  │    │    │\n   ├────┼────┤\nr  │    │    │\n   └────┴────┘",
      "[step] Fill each box with the letter above it and the letter beside it, capital first. ||       R    R\n   ┌────┬────┐\nr  │ Rr │ Rr │\n   ├────┼────┤\nr  │ Rr │ Rr │\n   └────┴────┘",
      "[step] Every box says Rr, so every baby gets one red copy and one white copy. || 4 boxes  =  4 Rr babies",
      "",
      "Every baby is Rr, and an Rr flower comes out pink, a look halfway between its two parents.",
      "Usually a capital letter means the boss, but here neither allele is the boss, so R and r are only labels."
    ]},

    { title: "Nothing Blended Away", s: [
      "It looks like red paint and white paint got mixed to make pink, but Correns crossed the pink flowers with each other, and that settled it.",
      "",
      "[ex] RR = red     Rr = pink     rr = white",
      "",
      "[walk] Cross two pink flowers, Rr and Rr.",
      "[step] Write the first parent's letters across the top and the other parent's down the side. ||       R    r\n   ┌────┬────┐\nR  │    │    │\n   ├────┼────┤\nr  │    │    │\n   └────┴────┘",
      "[step] Fill each box with the letter above it and the letter beside it, capital first. ||       R    r\n   ┌────┬────┐\nR  │ RR │ Rr │\n   ├────┼────┤\nr  │ Rr │ rr │\n   └────┴────┘",
      "[step] Read the boxes with the key: RR is red, both Rr boxes are pink, and rr is white. || RR = red\nRr = pink\nRr = pink\nrr = white",
      "[step] Count them up. || 1 red  :  2 pink  :  1 white",
      "",
      "Correns got red, pink and white flowers in just that 1 to 2 to 1 order, so the white came back.",
      "If the colors had really blended like paint, you could never get the red and the white back out again.",
      "So the two alleles stayed separate inside the pink flower, and each one did part of the job.",
      "That pattern is called {{incomplete dominance}}, because neither allele fully covers the other, so a flower with one of each looks in between.",
      "In Mendel's peas, Tt looked just like TT, but here Rr looks different from both RR and rr, and that's the big difference."
    ]},

    { title: "More Than Two Choices", s: [
      "You've probably heard of blood types, like type A, type B, type AB and type O.",
      "Your blood type is a trait, and it's set by a gene, just like height in a pea plant.",
      "But this gene is different, because it comes in three versions, or alleles, called A, B and O.",
      "When a gene has more than two alleles in a group of people, that's called {{multiple alleles}}.",
      "Here's the catch: you still only have two copies of the gene, one from each parent, so you carry just two of the three.",
      "Think of three flavors of ice cream, where you get one scoop from your mom's tub and one from your dad's tub, so you end up with a double scoop and never all three flavors.",
      "That makes six possible pairs: AA, AO, AB, BB, BO and OO.",
      "Two rules tell you which blood type each pair makes.",
      "The first rule is that A and B are both dominant over O, so an O hides whenever it sits next to an A or a B.",
      "The second rule is that A and B don't cover each other, so a person with one of each shows both, and that's type AB."
    ]},

    { title: "The Blood-Type Table", s: [
      "Let's use the two rules on all six pairs, one at a time.",
      "",
      "[walk] Find the blood type for each of the six pairs.",
      "[step] AA has two A copies, so it's type A, and AO is type A too, because the O hides. || ┌─────────┬────────────┐\n│ Alleles │ Blood type │\n├─────────┼────────────┤\n│ AA      │ A          │\n│ AO      │ A          │\n└─────────┴────────────┘",
      "[step] BB is type B, and BO is type B too, because the O hides again. || ┌─────────┬────────────┐\n│ Alleles │ Blood type │\n├─────────┼────────────┤\n│ AA      │ A          │\n│ AO      │ A          │\n│ BB      │ B          │\n│ BO      │ B          │\n└─────────┴────────────┘",
      "[step] AB has one of each and neither covers the other, so both show and it's type AB. || ┌─────────┬────────────┐\n│ Alleles │ Blood type │\n├─────────┼────────────┤\n│ AA      │ A          │\n│ AO      │ A          │\n│ BB      │ B          │\n│ BO      │ B          │\n│ AB      │ AB         │\n└─────────┴────────────┘",
      "[step] OO has nothing to cover the O copies, so type O needs two O alleles. || ┌─────────┬────────────┐\n│ Alleles │ Blood type │\n├─────────┼────────────┤\n│ AA      │ A          │\n│ AO      │ A          │\n│ BB      │ B          │\n│ BO      │ B          │\n│ AB      │ AB         │\n│ OO      │ O          │\n└─────────┴────────────┘",
      "",
      "Six pairs of alleles make just four blood types, because AA and AO share a type, and so do BB and BO.",
      "That's why a person with type A blood could be AA or AO, and you can't tell which one just from the type."
    ]},

    { title: "Two Parents, Four Possible Types", s: [
      "Say a mother has type A blood but carries a hidden O, so she's AO.",
      "And say the father has type B blood but carries a hidden O, so he's BO.",
      "",
      "[walk] Cross a mother who is AO with a father who is BO.",
      "[step] Write the mother's letters across the top and the father's down the side. ||       A    O\n   ┌────┬────┐\nB  │    │    │\n   ├────┼────┤\nO  │    │    │\n   └────┴────┘",
      "[step] Fill each box with the letter above it and the letter beside it. ||       A    O\n   ┌────┬────┐\nB  │ AB │ BO │\n   ├────┼────┤\nO  │ AO │ OO │\n   └────┴────┘",
      "[step] Look each pair up in the table: AB is type AB, BO is type B, AO is type A, and OO is type O. || AB  →  type AB\nBO  →  type B\nAO  →  type A\nOO  →  type O",
      "",
      "That's four different blood types from the same two parents, with each type a one in four chance.",
      "It shows why a child's blood type can surprise a family, since two parents with type A and type B blood can have a child with type O."
    ]},

    { title: "Many Genes, One Trait", s: [
      "Now think about height, and notice that you can't sort people into tall ones and short ones the way Mendel sorted his peas.",
      "Line a class up from shortest to tallest and you get a smooth slope, with everybody at a different spot.",
      "That's because height isn't set by one pair of alleles but by many gene pairs working together, a pattern called {{polygenic inheritance}}.",
      "One gene with two alleles is like a staircase with two steps, so you get two groups, but many genes together are like a ramp with every height in between.",
      "Eye color works this way too, which is why there are many shades between pale blue and dark brown."
    ]},

    { title: "Which Pattern Is It?", s: [
      "When you meet a new trait, ask what the babies look like and how many alleles there are, because each pattern leaves its own clue.",
      "",
      "[walk] Sort three traits by the clue each one leaves.",
      "[step] Red and white parents have pink babies, and the white comes back later. || pink flowers  →  incomplete dominance",
      "[step] The gene has three alleles, A, B and O, but each person carries only two. || blood type  →  multiple alleles",
      "[step] Everyone lands at a different spot on a smooth slope. || height  →  polygenic inheritance",
      "",
      "And if one allele always wins, like tall over short in the peas, that's plain dominance, the pattern from last lesson.",
      "",
      "[verse] Acts 17:26 says, “And hath made of one blood all nations of men for to dwell on all the face of the earth, and hath determined the times before appointed, and the bounds of their habitation.”",
      "",
      "Paul was speaking to the people of Athens about the single origin of all people, and the passage isn't about blood types, but it fits what the types show, since the same four turn up in people everywhere on earth."
    ]}
  ],

  words: [
    ["Incomplete dominance", "A pattern in which neither allele fully covers the other, so offspring with one of each look in between.", 32],
    ["Multiple alleles", "A gene that has more than two alleles in a group of people, though each person carries only two.", 37],
    ["Polygenic inheritance", "A pattern in which many gene pairs work together to control one trait, giving a smooth range.", 62]
  ],

  findsAt: 73,
  questions: [
    { tag: "Recap", q: "A pea plant has one tall copy and one short copy, and it grows tall. What do we call the tall allele?",
      find: [3], hint: "Read the recap.",
      choices: ["Recessive", "Dominant", "Polygenic", "Pure"], right: 1,
      why: "The boss copy that shows up is the dominant one." },

    { tag: "Incomplete", q: "A pure red four o'clock (RR) is crossed with a pure white one (rr). What are the babies?",
      find: [19,20], hint: "Look at the filled-in square.",
      choices: ["All red", "Half red and half white", "All pink", "All white"], right: 2,
      why: "Every box says Rr, and an Rr flower is pink." },

    { tag: "Incomplete", q: "Why is an Rr flower pink?",
      find: [20,32], hint: "Read the end of the first cross.",
      choices: ["Red is the boss, so it covers white", "Neither allele fully covers the other, so a look in between shows", "White is the boss, so it covers red", "Pink is a third allele"], right: 1,
      why: "That's incomplete dominance: neither allele is the boss, so it looks in between." },

    { tag: "Incomplete", q: "How do we know pink isn't red and white paint blended together?",
      find: [29,30,31], hint: "Think about what happened when two pink flowers were crossed.",
      choices: ["Pink flowers can't make seeds", "The pink flowers were painted", "Red and white flowers came back when two pinks were crossed", "Pink flowers look the same as the parents"], right: 2,
      why: "Paint can't be un-mixed, but the red and white came back, so the alleles stayed separate." },

    { tag: "The Cross", q: "Two pink flowers (Rr and Rr) are crossed. What ratio of red, pink and white do you expect?",
      find: [27,28], hint: "Fill in the four boxes: RR, Rr, Rr, rr.",
      choices: ["3 red to 1 white", "1 red, 2 pink, 1 white", "All pink", "2 red, 1 pink, 1 white"], right: 1,
      why: "The boxes are RR, Rr, Rr and rr, which is 1 red, 2 pink and 1 white." },

    { tag: "Alleles", q: "The blood-type gene has three alleles, A, B and O. How many does one person carry?",
      find: [38], hint: "One scoop from each parent.",
      choices: ["One", "Two", "Three", "Six"], right: 1,
      why: "You get one allele from each parent, so you carry two." },

    { tag: "Spot the Mistake", q: "A student says anyone with type A blood must be AA. What did the student miss?",
      find: [46,51], hint: "Look at the table. Which pairs give type A?",
      choices: ["Type A can also be AO, because the O hides", "Type A is really AB", "Type A is really OO", "Nothing, the student is right"], right: 0,
      why: "Both AA and AO give type A. The O hides under the A." },

    { tag: "The Cross", q: "A mother who is AO and a father who is BO have a child. Which blood types are possible?",
      find: [57,58], hint: "The four boxes are AB, BO, AO and OO.",
      choices: ["Only type A and type B", "Only type AB", "Only type O", "All four: A, B, AB and O"], right: 3,
      why: "AB gives type AB, BO gives B, AO gives A and OO gives O." },

    { tag: "Polygenic", q: "Why does a class lined up by height make a smooth slope instead of two groups?",
      find: [61,62], hint: "Think of the ramp.",
      choices: ["Height is set by one pair of alleles", "Height is set by many gene pairs working together", "Height is not inherited at all", "Everyone is the same height"], right: 1,
      why: "Many gene pairs each add a small push, which gives a smooth range." }
  ],

  vocabQuestions: [
    { q: "What is <i>incomplete dominance</i>?",
      choices: [
        "Neither allele fully covers the other, so a look in between shows.",
        "One allele always covers the other.",
        "Many gene pairs working on one trait.",
        "Three alleles of one gene."
      ], right: 0 },
    { q: "What are <i>multiple alleles</i>?",
      choices: [
        "Two alleles in every person.",
        "A trait with a smooth range.",
        "More than two alleles of one gene in a group of people.",
        "Alleles that blend like paint."
      ], right: 2 },
    { q: "What is <i>polygenic inheritance</i>?",
      choices: [
        "A trait with only two forms.",
        "A gene with three alleles.",
        "A color that is in between.",
        "Many gene pairs working together on one trait."
      ], right: 3 }
  ],

  todo: { title: "What To Do Now", s: [
      "A pink flower, a blood type and a class lined up by height each followed a different rule, and the questions below ask you to tell them apart.",
      "{c} word cards sit at the top of the page, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "Before the crossing questions, draw the square on paper and fill in all four boxes yourself.",
      "For every trait, ask what the babies look like and how many alleles there are, and that tells you which pattern you're in.",
      "If you get stuck on a question, tap Find It in the Story and read the line the page shows you."
  ] }
};
