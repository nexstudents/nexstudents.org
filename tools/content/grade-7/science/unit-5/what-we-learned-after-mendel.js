/* science/what-we-learned-after-mendel
   Grade 7 · science · unit 5. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-10-05. Written on Sonnet from Merrill Life
   Science (Glencoe 1994) Section 5-2, "Genetics Since Mendel", pp114-116, via
   the week 6-7 packet (paraphrased notes) and the teacher-plan. /natural pass
   run and stamped.

   ⚠️ ADDED FROM THE RECORD, worth a glance: Carl Correns is named as the
   botanist who crossed red and white four o'clocks (the packet names Correns
   and the cross, not his job). The blood-type cross (A parent AO by B parent
   BO, giving all four types) and the sentence that blood type matters for
   transfusions are ours. Landsteiner's date is given as "around 1900".

   ⚠️ THE PACKET IS THIN on Table 5-3 and on the polygenic examples past eye
   color, height and skin color, so the lesson stays with those three plus the
   book's mention of wheat.

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
  natural: "2026-10-05",

  /* ── /teach-plan, 2026-10-05. Merrill Life Science pp114-116. ── */
  plan: {
    objective: "Explain incomplete dominance, multiple alleles and polygenic inheritance, and tell which pattern a trait follows.",
    markers: [
      "BOOK (paraphrased), new words: incomplete dominance, multiple alleles, polygenic inheritance.",
      "BOOK (paraphrased), incomplete dominance: Correns crossed pure red and pure white four o'clocks and got all pink; crossing the pinks gave red, pink and white offspring (RR, Rr, rr); the alleles are not blended, both are expressed.",
      "BOOK (paraphrased), multiple alleles: more than two alleles for one trait; the ABO blood types, with A and B dominant to O; type A is AA or AO, type B is BB or BO, AB, and type O is OO.",
      "BOOK (paraphrased), polygenic inheritance: many gene pairs act together on one trait, such as eye color shades, height and skin color.",
      "BOOK (paraphrased), Section Review: why incomplete dominance isn't a blend, and whether black and white chickens producing blue offspring is incomplete dominance.",
    ],
    method: "THREE PATTERNS BEYOND SIMPLE DOMINANT AND RECESSIVE, EACH IN ITS OWN WORLD. Incomplete dominance: the middle look shows, but nothing blends away, because the white comes back. Multiple alleles: more than two forms of one gene exist in the population, though each person carries two. Polygenic: several gene pairs push on one trait and give a smooth range instead of two groups.",
    exampleOnly: [
      "The flower garden with red, pink and white four o'clocks (incomplete dominance), blood type (multiple alleles) and a class lined up by height (polygenic). WORLD: three small worlds, each kept in its own paragraph.",
      "The black and white chickens that give blue offspring are a question, not a teaching example.",
    ],
    digitize: "Reading engine. The crosses are listed as [ex] lines; ⚠️ a drawn Punnett square would help and the site doesn't have that visual yet.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Science",
    blurb: "A red flower and a white flower make a pink one, a blood type has three possible alleles, and nobody's height is simply tall or short. Three patterns Mendel's peas didn't show.",
    contains: [
      "Incomplete dominance, and why nothing blends away",
      "Multiple alleles and the ABO blood types",
      "Polygenic traits like height and eye color",
      "How to tell which pattern a trait follows",
    ] },
  eyebrow: ["Life Science", "U5-L2", "How Traits Pass Down"],
  dek: "Mendel's peas were either tall or short, either yellow or green. Most of what you see in people is messier than that, and it follows rules too.",

  scripture: {
    ref: "Acts 17:26",
    text: "And hath made of one blood all nations of men for to dwell on all the face of the earth, and hath determined the times before appointed, and the bounds of their habitation.",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will explain incomplete dominance, multiple alleles and polygenic inheritance with one example each, and tell which pattern a described trait follows."
      ]},
      { h: "Key Concepts", p: [
        "In incomplete dominance neither allele fully covers the other, so the heterozygous offspring looks in between. It isn't blending: crossing two pink flowers brings back red and white, which a true blend could never do.",
        "A person still carries only two alleles of the ABO gene, even though three exist. And a polygenic trait gives a smooth range of results, not a few separate groups."
      ]},
      { h: "Where Students Get Stuck", p: [
        "🚨 Calling pink a blend. The test is what the next generation does: if the parents' original looks come back, the alleles stayed separate.",
        "Counting three alleles in one person. The ABO gene has three forms in the population, but each person has just two of them."
      ]},
      { h: "Teaching Suggestion", p: [
        "Line the family up by height, or measure everyone in the house, and see that there's a smooth spread rather than a tall group and a short group. That is polygenic inheritance, and seeing it makes it plain."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "A Pink Flower Nobody Expected", s: [
      "A botanist named Carl Correns, working around 1900, planted a garden of four o'clocks, a flower that comes in red and in white, and crossed a pure red one with a pure white one.",
      "Mendel's rule from the last lesson says one color should win, so the flowers ought to have come up red, or perhaps white.",
      "They came up pink, every one of them, and not one of them was red or white.",
      "Did that break Mendel's rules, or was there another rule underneath them?"
    ]},

    { title: "Nothing Blended Away", s: [
      "It looks as if red paint and white paint were mixed to make pink, but Correns crossed the pink flowers with each other, and that settled it.",
      "The next generation came up red, pink and white, in a ratio of one red to two pink to one white.",
      "If the colors had really blended, like paint, the red and the white could never have come back, so the two alleles must have stayed separate inside the pink flower.",
      "",
      "[ex] RR = red, Rr = pink, rr = white",
      "",
      "This pattern is called {{incomplete dominance}}, because neither allele fully covers the other, so a plant with one of each shows a look in between, and the Punnett square for two pink parents gives RR, Rr, Rr and rr, which is the 1 to 2 to 1 Correns counted."
    ]},

    { title: "More Than Two Choices", s: [
      "Mendel's traits had two forms each, but some genes have more than two, a pattern called {{multiple alleles}}.",
      "Your blood type is the standard example, and it was sorted out by a scientist named Landsteiner around 1900.",
      "The blood-type gene has three alleles, A, B and O, and A and B are both dominant over O, so a person with one A and one O has type A blood.",
      "Even with three alleles in the population, you still carry only two of them, one from each parent, which gives six combinations and four blood types."
    ]},

    { title: "Reading a Blood Type", s: [
      "Type A can be AA or AO, and type B can be BB or BO, because a single O is hidden under either dominant allele.",
      "Type AB is its own case, because A and B don't cover each other and both show, and type O needs two O alleles, OO.",
      "",
      "[ex] A = AA or AO, B = BB or BO, AB = AB, O = OO",
      "",
      "Matching blood types matters in a transfusion, so doctors always check the type before they give anyone blood."
    ]},

    { title: "Two Parents, Four Possible Types", s: [
      "Take a mother with type A blood who carries an O allele, so she's AO, and a father with type B who is BO.",
      "Fill in the Punnett square with A and O across the top and B and O down the side, and the four boxes come out like this.",
      "",
      "[ex] AB, AO, BO, OO",
      "",
      "That's four different blood types from the same two parents, type AB, type A, type B and type O, which is why a child's blood type can surprise a family."
    ]},

    { title: "When Many Genes Share One Trait", s: [
      "Now think about height, and notice that you don't sort people into the tall ones and the short ones the way Mendel sorted his peas.",
      "Line a whole class up from shortest to tallest and you get a smooth slope with everybody in a different place on it, because height isn't set by one pair of alleles but by many gene pairs acting together.",
      "That pattern is {{polygenic inheritance}}, and it shows up in eye color, where there are many shades between pale blue and dark brown, and in skin color, which the book says is controlled by several gene pairs.",
      "Each pair adds a small push in one direction, and the more pairs there are, the smoother the range of results turns out to be."
    ]},

    { title: "Which Pattern Is It?", s: [
      "The easiest way to sort a trait is to ask what the offspring look like, because each pattern leaves a different fingerprint.",
      "If they look like one parent or the other, with a hidden one that returns at about three to one, it's simple dominance, as in the peas.",
      "If a middle look shows up and the parents' looks return later, it's incomplete dominance, and if one trait has more than two alleles in the population, it's multiple alleles.",
      "And if you see a smooth range with everything in between, it's polygenic.",
      "",
      "[verse] Acts 17:26 says, “And hath made of one blood all nations of men for to dwell on all the face of the earth, and hath determined the times before appointed, and the bounds of their habitation.”",
      "",
      "Paul was speaking to the people of Athens about the single origin of all people, and the passage isn't about blood types, but it fits what the types show, since the same four turn up in people everywhere on earth."
    ]}
  ],

  words: [
    ["Incomplete dominance", "A pattern in which neither allele fully covers the other, so offspring with one of each look in between.", 8],
    ["Multiple alleles", "A trait controlled by a gene that has more than two alleles in the population.", 9],
    ["Polygenic inheritance", "A pattern in which many gene pairs act together to control one trait.", 23]
  ],

  findsAt: 31,
  questions: [
    { tag: "Incomplete", q: "A pure red four o'clock is crossed with a pure white one. What color are the offspring?",
      find: [2],
      hint: "Read A Pink Flower Nobody Expected.",
      choices: [
        "All red.",
        "Half red and half white.",
        "All white.",
        "All pink."
      ], right: 3 },

    { tag: "Incomplete", q: "How do we know pink isn't a blend of red and white?",
      find: [4, 6],
      hint: "Read Nothing Blended Away.",
      choices: [
        "Pink flowers can't make seeds.",
        "Red and white come back when two pink flowers are crossed.",
        "The flowers are the same as the parents.",
        "The pink was painted on."
      ], right: 1 },

    { tag: "Incomplete", q: "Two pink flowers (Rr) are crossed. What ratio of red, pink and white would you expect?",
      find: [5, 8],
      hint: "RR, Rr, Rr and rr.",
      choices: [
        "1 red, 2 pink, 1 white",
        "3 red, 1 white",
        "All pink",
        "2 red, 1 pink, 1 white"
      ], right: 0 },

    { tag: "Alleles", q: "How many alleles of the blood-type gene does one person carry?",
      find: [12],
      hint: "Read More Than Two Choices.",
      choices: ["One", "Three", "Four", "Two"], right: 3 },

    { tag: "Blood Type", q: "A person has the alleles AO. What's their blood type?",
      find: [11, 13],
      hint: "A is dominant over O.",
      choices: ["Type A", "Type O", "Type AB", "Type B"], right: 0 },

    { tag: "Blood Type", q: "Which genotype gives type O blood?",
      find: [14],
      hint: "Read Reading a Blood Type.",
      choices: ["AO", "OO", "BO", "AB"], right: 1 },

    { tag: "The Cross", q: "A mother who is AO and a father who is BO have a child. Which blood types are possible?",
      find: [17, 20],
      hint: "Fill in the square: AB, AO, BO, OO.",
      choices: [
        "Only type A and type B.",
        "Only type AB.",
        "Only type O.",
        "All four: A, B, AB and O."
      ], right: 3 },

    { tag: "Polygenic", q: "Why does a class lined up by height form a smooth slope instead of two groups?",
      find: [22, 24],
      hint: "Read When Many Genes Share One Trait.",
      choices: [
        "Height is controlled by many gene pairs acting together.",
        "Height is controlled by one pair of alleles.",
        "Height is not inherited at all.",
        "Everyone's height is exactly the same."
      ], right: 0 },

    { tag: "Sorting", q: "Black chickens crossed with white chickens produce blue offspring. Which pattern is that?",
      find: [27],
      hint: "A look in between that isn't a blend.",
      choices: [
        "Polygenic inheritance.",
        "Multiple alleles.",
        "Simple dominance.",
        "Incomplete dominance."
      ], right: 3 }
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
        "More than two alleles of one gene in the population.",
        "Alleles that blend."
      ], right: 2 },
    { q: "What is <i>polygenic inheritance</i>?",
      choices: [
        "A trait with only two forms.",
        "A gene with three alleles.",
        "A color that is in between.",
        "Many gene pairs acting together on one trait."
      ], right: 3 }
  ],

  todo: { title: "What To Do Now", s: [
      "A pink flower, a blood type and a line of people sorted by height each followed a different rule, and the questions below ask you to tell them apart.",
      "{c} word cards sit at the top of the page, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "For every trait, ask what the offspring look like and whether the parents' looks come back, and that tells you which pattern you're in.",
      "If the sorting questions trip you up, read Which Pattern Is It again.",
      "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] }
};
