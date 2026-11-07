/* science/bacteria-the-kingdom-monera
   Grade 7 · science · unit 8 (book unit 8, "Viruses and Monerans", shelved as
   "The Smallest Living Things"), lesson 3. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-11-07. Written on Sonnet from Merrill Life
   Science (1994) printed pp188-192, "Kingdom Monera", via the week 10-11 packet
   (paraphrased notes). Paul has not read it. Book order kept: what a moneran is,
   bacteria everywhere, the parts of one bacterium (a table), the three shapes,
   fission, how monerans get energy, aerobes and anaerobes, cyanobacteria, the
   bloom chain (a walk), and the Problem Solving E. coli question. Word cards: 6
   (Moneran, Flagellum, Fission, Aerobe, Anaerobe, Cyanobacteria).

   🚨 ORIGINS RULE, TWO SENTENCES LEFT OUT. p190 says certain anaerobic bacteria are
   "thought to have existed for millions of years", and the Figure 8-10 caption says
   hot-spring bacteria are "similar to ancient forms". Neither is the lesson's
   objective, so both are left out of the teaching and the questions. The lesson says
   only where anaerobes are found today. No question touches age or ancestry.

   ⚠️ ADDED FROM THE RECORD, worth a glance from Paul:
   · The plain jobs of the cell wall, cell membrane, cytoplasm and ribosomes in the
     parts table. The packet names the parts and the capsule's job; the other jobs are
     standard and match the cell lessons in units 2 and 3.
   · The three steps of fission (copy the chromosome, stretch, pinch in two). The
     packet says only that two cells with the same genetic material result.
   · Fertilizer as one way nutrients reach a pond. The packet says only that nutrients enter.
   · Why E. coli in the water is a warning: it shows waste got into the water, and
     boiling kills germs. The packet has the question but not the answer.
   ⚠️ NOT IN THIS LESSON: the Connect to Physics (wavelengths of flagella), the
   Connect to Chemistry (tooth enamel) and Activity 8-1 on observing cyanobacteria,
   which is its own row in the unit.

   🚨 THE VERSE IS A WORKING CHOICE, NOT PAUL'S. Psalm 104:25, about creatures both
   small and great. Choosing the scripture is his, so it goes in the review queue. */
'use strict';

/* draws a small table with a header row; rows is a list of equal-length lists */
const table = (rows) => {
  const n = rows[0].length, w = [];
  for (let i = 0; i < n; i++) w[i] = Math.max(...rows.map((r) => [...r[i]].length)) + 2;
  const line = (l, m, r) => l + w.map((x) => "─".repeat(x)).join(m) + r;
  const row = (r) => "│" + r.map((c, i) => " " + c + " ".repeat(w[i] - 1 - [...c].length)).join("│") + "│";
  return [line("┌", "┬", "┐"), row(rows[0]), line("├", "┼", "┤")]
    .concat(rows.slice(1).map(row), [line("└", "┴", "┘")]).join("\n");
};

const PARTS = [
  ["Part", "Its job"],
  ["Cell wall", "A stiff outer layer that holds the shape"],
  ["Cell membrane", "A thin skin that lets things in and out"],
  ["Cytoplasm", "The jelly inside that fills the cell"],
  ["Chromosome", "One circular strand that holds the instructions"],
  ["Ribosomes", "Tiny parts that build proteins"],
  ["Capsule", "A sticky gel layer, in some, that helps it cling"],
  ["Flagellum", "A whiplike tail, in many, that moves the cell"],
];
const SHAPES = [
  ["Shape", "Name", "Looks like"],
  ["Sphere", "Cocci", "A ball"],
  ["Rod", "Bacilli", "A short stick"],
  ["Spiral", "Spirilla", "A corkscrew"],
];
const FISSION = [
  ["Step", "What happens"],
  ["1", "The cell copies its chromosome"],
  ["2", "The cell stretches, and the copies move apart"],
  ["3", "The cell pinches in the middle and splits"],
  ["4", "Two cells with the same instructions"],
];
const BLOOM = [
  ["Step", "What happens in the pond"],
  ["1", "Nutrients wash into the pond"],
  ["2", "Cyanobacteria multiply fast, a bloom"],
  ["3", "The crowd uses up its food and dies"],
  ["4", "Other bacteria feed on the dead and use up the oxygen"],
  ["5", "The fish have too little oxygen and die"],
];

module.exports = {
  id: "science/bacteria-the-kingdom-monera",
  slug: "bacteria-the-kingdom-monera",
  title: "Bacteria, the Kingdom Monera",
  unit: "Life Science &middot; U8-L3",
  seq: { unit: 8, unitTitle: "The Smallest Living Things", n: 3 },
  natural: "2026-11-07",

  /* ── /teach-plan, 2026-11-07. Merrill Life Science pp188-192. ── */
  plan: {
    objective: "Describe a moneran cell (a prokaryote: no nucleus, one circular chromosome, ribosomes, a cell wall, maybe a capsule and a flagellum), name the three shapes, explain fission, compare aerobes and anaerobes, and explain how cyanobacteria make food and what a bloom does to a pond.",
    markers: [
      "BOOK (paraphrased), Objectives: describe the characteristics of moneran cells and compare aerobic and anaerobic organisms.",
      "BOOK (paraphrased): monerans are simple one-celled prokaryotes with a single circular chromosome, ribosomes, no mitochondria or chloroplasts, and a cell wall. Most can't make food and get energy by breaking down other living things. Two groups: bacteria and cyanobacteria.",
      "BOOK (paraphrased): very few bacteria cause illness; they live almost everywhere, a shovelful of soil holds billions, and hundreds of thousands live on and in you, mostly helpful. Three shapes: spheres (cocci), rods (bacilli), spirals (spirilla). Parts: cytoplasm, cell membrane and wall, a chromosome, sometimes a gel capsule that helps it stick, and often a whiplike flagellum.",
      "BOOK (paraphrased): most reproduce by fission, giving two cells exactly like the parent; some also swap DNA through a fine tube, giving cells that differ.",
      "BOOK (paraphrased): aerobes use oxygen (you are one), anaerobes can live without it and for a few it is deadly. Anaerobes live in hot springs, salty lakes, muddy swamps, cattle intestines and deep ocean vents.",
      "BOOK (paraphrased): cyanobacteria are one-celled producers with chlorophyll and a blue pigment (not all are blue-green; the Red Sea is named for a red one). A bloom: nutrients enter a pond, cyanobacteria multiply, then die, bacteria feed on them and use up the oxygen, so fish die.",
      "BOOK (paraphrased), Problem Solving: E. coli lives in the intestines, helps break down food and makes vitamins; a flooded area was told to boil water because high E. coli was found. Why?",
    ],
    method: "LABEL ONE CELL, THEN WATCH IT DIVIDE, THEN FOLLOW A CHAIN. The student must own three processes: the parts of a bacterium (a table of parts and jobs, built a row at a time), fission (a four-step walk), and the pond bloom (a five-step chain). Aerobe and anaerobe are two plain words with a one-line test, and the E. coli puzzle is a question about what a germ in the water means.",
    exampleOnly: [
      "The shovelful of soil, the Red Sea and the flooded town are the book's own examples, kept.",
      "⚠️ The jobs of the cell wall, membrane, cytoplasm and ribosomes, the three steps of fission and the answer to the E. coli question are added from the record, see the header.",
      "Left out on purpose: 'millions of years' and 'ancient forms' (pp190), which are not this lesson's objective.",
    ],
    digitize: "The reading engine plus four Watch It Worked walkthroughs with drawn tables: the parts of a bacterium and their jobs, the three shapes, fission in four steps, and the pond bloom in five. Questions ask for the parts, the shapes, how bacteria divide, aerobe against anaerobe, and the order of the bloom.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Science",
    blurb: "A shovelful of soil holds billions of them, and hundreds of thousands live on you right now. What a bacterium is made of, how it divides, and how a pond full of tiny green cells can kill the fish.",
    contains: [
      "Why bacteria are everywhere, and why most are harmless",
      "The parts of one bacterium and what each does",
      "Three shapes, and how a bacterium divides in two",
      "Breathers and non-breathers: aerobes and anaerobes",
      "Cyanobacteria, the ones that make their own food",
      "A pond bloom, one link at a time, and why you boil the water after a flood",
    ] },
  eyebrow: ["Life Science", "U8-L3", "The Smallest Living Things"],
  dek: "They're the smallest, simplest cells there are, and they're nearly everywhere. Here's what a bacterium is made of and what it does.",

  scripture: {
    ref: "Psalm 104:25",
    text: "So is this great and wide sea, wherein are things creeping innumerable, both small and great beasts.",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Your student describes a moneran cell, names the three shapes, explains fission, compares aerobes and anaerobes, and explains how cyanobacteria make food and what a bloom does to a pond."
      ]},
      { h: "Key Concepts", p: [
        "Monerans are prokaryotes, which are cells with no nucleus. Their one circular chromosome floats in the cytoplasm instead.",
        "Most bacteria are harmless or helpful. The next lesson covers the helpful and the harmful ones."
      ]},
      { h: "Where Students Get Stuck", p: [
        "Thinking all bacteria are germs. Very few cause illness, and hundreds of thousands live on and in a person without harm.",
        "Mixing up aerobes and anaerobes. An aerobe uses oxygen and an anaerobe can live without it.",
        "The bloom chain. The fish die because the bacteria feeding on the dead cyanobacteria use up the oxygen in the water, and not because the cyanobacteria are poison."
      ]},
      { h: "Left Out On Purpose", p: [
        "Two sentences in the textbook say certain anaerobic bacteria are thought to have existed for millions of years, and a photo caption calls hot-spring bacteria similar to ancient forms. Neither is what this lesson is teaching, so both are left out. The lesson says only where anaerobes live today."
      ]},
      { h: "Added From the Record", p: [
        "The plain jobs of the cell wall, membrane, cytoplasm and ribosomes, the three steps of fission and the reason a high E. coli count means boiling the water are added from the record. The Activity on observing cyanobacteria is its own row in the unit."
      ]},
      { h: "Book Pages", p: [
        "Merrill Life Science (1994), pages 188 to 192. Read free on archive.org: https://archive.org/details/merrilllifescien0000dani/page/213/mode/2up"
      ]},
      { h: "Suggested Videos", videos: [
        { id: "ORB866QSGv8", title: "Bacteria (Updated)", channel: "Amoeba Sisters",
          why: "Covers bacterial structure, shapes and fission, and reminds students that not all bacteria are bad." },
        { id: "Pxujitlv8wc", title: "Prokaryotic vs. Eukaryotic Cells (Updated)", channel: "Amoeba Sisters",
          why: "Defines a prokaryote the way the book does, with no nucleus and no walled-off parts." },
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Everywhere You Look", s: [
      "There are living things all around you that are far too small to see, and the smallest and simplest cells of all belong to the kingdom Monera, and the living things in it are called {{monerans}}.",
      "A shovelful of soil holds billions of them, and they are in the air, the water and your food.",
      "Hundreds of thousands live on and inside your body right now, and most of them are helping you.",
      "Very few of them make anybody sick, so this lesson is about what they are and not about being afraid of them."
    ]},

    { title: "One Simple Cell", s: [
      "A moneran is a single cell, and it is a prokaryote, which means it has no nucleus.",
      "Its instructions are kept in one circular strand called a chromosome, which just floats in the cytoplasm.",
      "It has no mitochondria or chloroplasts either, but it does have ribosomes and a cell wall.",
      "",
      "[walk] Label a bacterium, one part at a time.",
      "[step] Start with the cell wall and the cell membrane, which hold the shape and let things in and out. || " + table(PARTS.slice(0, 3)),
      "[step] Inside is the cytoplasm, a jelly, and in it floats the chromosome that holds the instructions. || " + table(PARTS.slice(0, 5)),
      "[step] Add the ribosomes, tiny parts that build proteins. || " + table(PARTS.slice(0, 6)),
      "[step] Some bacteria also have a capsule, a sticky gel layer that helps them cling to a surface. || " + table(PARTS.slice(0, 7)),
      "[step] Many have a flagellum, a whiplike tail that moves the whole cell. || " + table(PARTS),
      "",
      "That tail is called a {{flagellum}}, and the bacteria that have one use it to swim."
    ]},

    { title: "Three Shapes", s: [
      "Bacteria come in three basic shapes, and each one has a name.",
      "",
      "[walk] Match each shape to its name.",
      "[step] A ball is called a coccus, and many of them are called cocci. || " + table(SHAPES.slice(0, 2)),
      "[step] A rod is called a bacillus, and many of them are called bacilli. || " + table(SHAPES.slice(0, 3)),
      "[step] A spiral is called a spirillum, and many of them are called spirilla. || " + table(SHAPES)
    ]},

    { title: "Splitting in Two", s: [
      "Most bacteria make more of themselves by {{fission}}, which means splitting in two.",
      "",
      "[walk] Watch one bacterium divide.",
      "[step] The cell copies its chromosome, so there are two. || " + table(FISSION.slice(0, 2)),
      "[step] The cell stretches, and the two copies move to opposite ends. || " + table(FISSION.slice(0, 3)),
      "[step] The cell pinches in the middle and splits. || " + table(FISSION.slice(0, 4)),
      "[step] The result is two cells, each with exactly the same instructions as the parent. || " + table(FISSION),
      "",
      "A few bacteria also pass pieces of their DNA to each other through a thin tube, which gives cells that are slightly different from either one."
    ]},

    { title: "Where the Energy Comes From", s: [
      "Most monerans can't make their own food, so they get energy by breaking down other living things.",
      "Along with the fungi, they are nature's cleanup crew, because they keep the world from piling up with waste and put nutrients back into the soil.",
      "A few monerans make their own food, and you'll meet them in a moment."
    ]},

    { title: "With Oxygen and Without", s: [
      "Most bacteria live where there is oxygen, and an {{aerobe}} is a living thing that uses oxygen, which means you are one.",
      "An {{anaerobe}} is a living thing that can live without oxygen, and for a few kinds oxygen is actually deadly.",
      "Anaerobes live in places with little or no air, such as hot springs, salty lakes, muddy swamps, the guts of cattle and the deep ocean vents."
    ]},

    { title: "Bacteria That Make Food", s: [
      "{{Cyanobacteria}} are the monerans that make their own food from sunlight and carbon dioxide, which makes them producers.",
      "They have chlorophyll and a blue pigment, which is why people used to call them blue-green bacteria, though some are yellow, black or red.",
      "The Red Sea is named for a red kind.",
      "All of them are one-celled, though some live in long chains, and they are an important food for the animals in a pond."
    ]},

    { title: "A Pond Bloom", s: [
      "Something strange can happen to a pond when it gets too many nutrients, and it shows how living things depend on each other.",
      "",
      "[walk] Follow a bloom, one link at a time.",
      "[step] Nutrients wash into the pond, maybe from fertilizer on nearby fields. || " + table(BLOOM.slice(0, 2)),
      "[step] The cyanobacteria multiply very fast and cover the water, which is called a bloom. || " + table(BLOOM.slice(0, 3)),
      "[step] The crowd uses up its food and dies. || " + table(BLOOM.slice(0, 4)),
      "[step] Other bacteria feed on the dead cells, and they use up the oxygen in the water to do it. || " + table(BLOOM.slice(0, 5)),
      "[step] The fish don't have enough oxygen and die. || " + table(BLOOM),
      "",
      "The cyanobacteria did not poison the fish directly, and the fish died because the oxygen ran out."
    ]},

    { title: "Boil the Water", s: [
      "One more puzzle comes from the book.",
      "After a flood, people in a town were told to boil their water, because the water tested high in a bacterium called E. coli.",
      "E. coli lives in the intestines of people and animals, where it helps break down food and makes vitamins, so it isn't harmful there.",
      "But finding a lot of it in water means waste got into the water, and other germs that do cause sickness may have come with it.",
      "Boiling kills the germs, and the high count is a warning sign and not the danger itself.",
      "",
      "[verse] Psalm 104:25 says, “So is this great and wide sea, wherein are things creeping innumerable, both small and great beasts.”",
      "",
      "The psalm is about creatures too many to count, and the smallest of them are the ones this lesson has been about.",
      "The questions below check what you've learned."
    ]}
  ],

  todo: { title: "What To Do Now", s: [
      "Billions of cells in a shovelful of soil, a bacterium splitting in two and a pond with too many nutrients, and now it's your turn to explain it.",
      "Start with the questions, {Q} of them, and then the vocabulary check at the bottom, {v} questions on the word cards at the top of the page.",
      "When a question asks about a process, picture the walk and say the steps in order before you pick an answer.",
      "Then, in your notebook, draw a bacterium and label the cell wall, cell membrane, cytoplasm, chromosome, ribosomes and flagellum.",
      "Next, write the five links of a pond bloom in order, in complete sentences.",
      "Last, write two sentences that explain the difference between an aerobe and an anaerobe."
  ] },

  words: [
    ["Moneran", "A one-celled living thing with no nucleus. Bacteria and cyanobacteria are monerans.", 0],
    ["Flagellum", "A whiplike tail that moves a cell.", 13],
    ["Fission", "Splitting in two. It is how most bacteria make more of themselves.", 19],
    ["Aerobe", "A living thing that uses oxygen.", 29],
    ["Anaerobe", "A living thing that can live without oxygen.", 30],
    ["Cyanobacteria", "Monerans that make their own food from sunlight and carbon dioxide.", 32]
  ],

  findsAt: 52,
  questions: [
    { q: "What does it mean that a moneran is a prokaryote?",
      find: [4],
      hint: "Read One Simple Cell.",
      choices: [
        "It has no nucleus.",
        "It is many-celled.",
        "It has chloroplasts.",
        "It lives only in water."
      ], right: 0 },

    { q: "Which part holds the instructions in a bacterium?",
      find: [5],
      hint: "Read One Simple Cell.",
      choices: [
        "The cell wall",
        "The flagellum",
        "The chromosome",
        "The capsule"
      ], right: 2 },

    { q: "What does the flagellum do?",
      find: [12],
      hint: "Read One Simple Cell.",
      choices: [
        "It holds the shape.",
        "It moves the whole cell.",
        "It builds proteins.",
        "It holds the instructions."
      ], right: 1 },

    { q: "What is the name for a rod-shaped bacterium?",
      find: [17],
      hint: "Read Three Shapes.",
      choices: [
        "A coccus",
        "A spirillum",
        "A flagellum",
        "A bacillus"
      ], right: 3 },

    { q: "How do most bacteria make more of themselves?",
      find: [19],
      hint: "Read Splitting in Two.",
      choices: [
        "By fission, splitting in two",
        "By laying eggs",
        "By growing seeds",
        "By building a nucleus"
      ], right: 0 },

    { q: "After a bacterium divides, how do the two new cells compare with the parent?",
      find: [24],
      hint: "Read Splitting in Two.",
      choices: [
        "They have no instructions.",
        "They have exactly the same instructions as the parent.",
        "They are always bigger than the parent.",
        "They have a nucleus."
      ], right: 1 },

    { q: "A kind of bacterium dies when oxygen is around. What kind is it?",
      find: [30],
      hint: "Read With Oxygen and Without.",
      choices: [
        "An aerobe",
        "A cyanobacterium",
        "An anaerobe",
        "A coccus"
      ], right: 2 },

    { q: "How do cyanobacteria get their food?",
      find: [32],
      hint: "Read Bacteria That Make Food.",
      choices: [
        "They break down dead things.",
        "They eat fish.",
        "They get it from the soil.",
        "They make it from sunlight and carbon dioxide."
      ], right: 3 },

    { q: "In a pond bloom, why do the fish die?",
      find: [41],
      hint: "Read A Pond Bloom.",
      choices: [
        "Because the cyanobacteria poison them.",
        "Because bacteria feeding on the dead cyanobacteria use up the oxygen.",
        "Because the water gets too cold.",
        "Because the fish eat too much."
      ], right: 1 },

    { q: "Why were people told to boil their water when a lot of E. coli was found in it?",
      find: [47],
      hint: "Read Boil the Water.",
      choices: [
        "Because E. coli is a fish.",
        "Because boiling makes more E. coli.",
        "Because a lot of E. coli means waste got in, and boiling kills the germs.",
        "Because boiling turns the water blue."
      ], right: 2 }
  ],

  vocabQuestions: [
    { q: "What is a <i>moneran</i>?",
      choices: [
        "A one-celled living thing with no nucleus.",
        "A many-celled plant.",
        "A kind of fungus.",
        "A kind of virus."
      ], right: 0 },
    { q: "What is a <i>flagellum</i>?",
      choices: [
        "A part that holds the instructions.",
        "A sticky layer.",
        "A thick wall.",
        "A whiplike tail that moves a cell."
      ], right: 3 },
    { q: "What is <i>fission</i>?",
      choices: [
        "Eating dead things.",
        "Splitting in two, the way most bacteria make more of themselves.",
        "Making food from sunlight.",
        "Moving with a tail."
      ], right: 1 },
    { q: "What is an <i>aerobe</i>?",
      choices: [
        "A living thing that dies in oxygen.",
        "A living thing that makes its own food.",
        "A living thing that uses oxygen.",
        "A tiny tail."
      ], right: 2 },
    { q: "What is an <i>anaerobe</i>?",
      choices: [
        "A living thing that can live without oxygen.",
        "A living thing that needs oxygen.",
        "A living thing with a nucleus.",
        "A kind of virus."
      ], right: 0 },
    { q: "What are <i>cyanobacteria</i>?",
      choices: [
        "Bacteria that live only in the human body.",
        "Bacteria that cause bloom in fish.",
        "Monerans that make their own food from sunlight and carbon dioxide.",
        "Bacteria with a nucleus."
      ], right: 2 }
  ]
};
