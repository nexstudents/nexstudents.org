/* science/unit-9-review-protists-and-fungi
   Grade 7 · science · unit 9 (book unit 9, "Protists and Fungi"), lesson 4 (the review).
   Its home is this folder. Built by tools/lessons.js. Edit the lesson here, not in
   the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-11-22. Written on Sonnet from the three unit 9 lessons
   (protists-the-odd-ones-out, fungi-and-what-they-break-down,
   why-we-could-not-live-without-fungi) and the book's Chapter 9 Review (Merrill Life
   Science printed pp219-221, via the week 12 packet, paraphrased notes). Paul has not
   read it. Built like unit-8-review: each core idea re-shown briefly with a small
   drawing, every hint names the lesson to go back to. New examples where a lesson used
   one, so the review tests the idea and not the memory of the example.

   🚨 ONLY WORDS KOLTEN WAS TAUGHT. Left out on purpose, because no lesson taught them by
   name: chitin, mutualistic, sporangia, asci, basidium, every phylum name, Trypanosoma.
   The fungus groups use the lesson's plain names (zygote, sac, club, imperfect).
   🚨 ORIGINS RULE. The book's Think and Write question 19 (why scientists find it hard
   to trace the origin of fungi, why fungal fossils are rare) is LEFT OUT. Nothing here
   touches age or ancestry. Resistance is bacteria that "change" or a drug that "stops
   responding".

   ⚠️ ADDED FROM THE RECORD: nothing beyond what lessons 9-1 to 9-3 already flagged.
   ⚠️ CUT from the book's review: the matching vocabulary list, the spore print and
   wet mount lab skills, the prefix-color and kelp-part skill builders, the concept map
   and the carrageenan project. The Think and Write questions have no answer key, so the
   notebook writing lives in `todo` (book Q14, Q15, Q16, Q20, Q21).

   🚨 THE VERSE IS A WORKING CHOICE, NOT PAUL'S. Psalm 104:24, how manifold are thy
   works, for a unit about a huge variety of living things. Choosing the scripture is
   his, so it goes in the review queue.
   ⚠️ The two videos passed oEmbed but nobody watched them. Preview both for any talk
   of evolution or millions of years before a student sees them. */
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

const SORT = [
  ["Ask", "If yes, it is probably"],
  ["Does it make its own food?", "A plantlike protist (algae)"],
  ["Does it move and eat?", "An animal-like protist (protozoa)"],
  ["Does it break down dead things?", "A funguslike protist or a fungus"],
];
const MOVE = [
  ["How it moves", "Example"],
  ["Pseudopods, or false feet", "Amoeba"],
  ["Flagella, or whips", "A flagellate"],
  ["Cilia, or short hairs", "Paramecium"],
  ["It cannot move", "Plasmodium"],
];
const EAT = [
  ["Step", "What the fungus does"],
  ["1", "Lands on a fallen apple"],
  ["2", "Its hyphae release digestive juice"],
  ["3", "The apple breaks down outside the fungus"],
  ["4", "The hyphae soak up the food"],
];
const GROUPS = [
  ["Group", "Where it makes spores", "Example"],
  ["Zygote", "In round cases", "Bread mold"],
  ["Sac", "In tiny sacs", "Yeast"],
  ["Club", "On club-shaped tips", "Mushroom"],
  ["Imperfect", "No sexual stage seen", "Penicillium"],
];
const DRUGS = [
  ["Medicine", "Made from", "What it is for"],
  ["Penicillin", "Penicillium", "Killing bacteria, and not viruses"],
  ["Vidarabine", "A fungus", "A virus disease, the first of its kind"],
  ["Cyclosporine", "An imperfect fungus", "Holding back rejection of a transplant"],
];

module.exports = {
  id: "science/unit-9-review-protists-and-fungi",
  slug: "unit-9-review-protists-and-fungi",
  title: "Unit 9 Review: Protists and Fungi",
  unit: "Life Science &middot; U9-L4",
  seq: { unit: 9, unitTitle: "Protists and Fungi", n: 4 },
  natural: "2026-11-22",

  /* ── /teach-plan, 2026-11-22. Merrill Life Science Chapter 9 Review, printed pp219-221,
        and the three unit 9 lessons. ── */
  plan: {
    objective: "Recall and sort what Unit 9 taught: protists by how they get food and move, fungi by how they eat and make spores, and fungi in medicine.",
    markers: [
      "BOOK, Chapter Review: Summary, Key Science Words, Think and Write Critically (Q14 how fungi help the environment, Q15 protozoans like animals, Q16 red tide, Q20 fungal adaptations, Q21 what stops fungal growth).",
    ],
    method: "REVIEW = RECALL + SORTING, NOT NEW TEACHING. THE SORTING TEST FROM 9-1 (MAKES FOOD / MOVES AND EATS / BREAKS DOWN) IS THE SPINE.",
    exampleOnly: [
      "Specific organisms are the content of a review, so they are fine. New examples stand in for the lessons' own where a lesson used one.",
    ],
    digitize: "Copy the unit-8-review shape exactly. ONLY terms Kolten was taught (the 9-1 and 9-2 word lists, plus 9-3). SKIP chitin, mutualistic, sporangia, asci, basidium, phylum names, and book Q19 (origins).",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Science",
    blurb: "The whole unit in one pass: the odd living things called protists, the fungi that break down what has died, and the medicines that fungi make.",
    contains: [
      "The sorting test, tried on three mystery living things",
      "Protists sorted by how they move",
      "How a fungus eats, taken through its four steps again",
      "The four kinds of fungi and how each makes spores",
      "Fungus medicines in one table",
      "Notebook questions from the book, with no answer key",
    ] },
  eyebrow: ["Life Science", "U9-L4", "Protists and Fungi"],
  dek: "Protists, fungi and the medicines fungi make. Here's the whole unit in one place, with a few new examples to try the ideas on.",

  scripture: {
    ref: "Psalm 104:24",
    text: "O LORD, how manifold are thy works! in wisdom hast thou made them all: the earth is full of thy riches.",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Bring the three Unit 9 lessons together and check which parts hold and which need a second read: protists, fungi, and the medicines fungi make."
      ]},
      { h: "Key Concepts", p: [
        "Every question is tied to one of the three lessons and the hint says which one, so a wrong answer is directions to the right page and not a mark against your student.",
        "The sorting test is the spine: does it make its own food, does it move and eat, or does it break down dead things?"
      ]},
      { h: "Where Students Get Stuck", p: [
        "Calling a slime mold a fungus. It is a funguslike protist, and it creeps and has pseudopods for part of its life.",
        "Thinking spores are seeds. A spore is a single reproductive cell, and the four fungus groups are sorted by how they make them.",
        "Using an antibiotic against a virus. Antibiotics work on bacteria."
      ]},
      { h: "Left Out On Purpose", p: [
        "The book's chapter review uses words the lessons did not teach, such as chitin, mutualistic, sporangia, asci and basidium, and the phylum names for the algae. They are left out, and the fungus groups keep the plain names from lesson 9-2. The book's question about how scientists trace the origin of fungi is also left out."
      ]},
      { h: "Book Pages", p: [
        "Merrill Life Science (1994), Chapter 9 Review, pages 219 to 221. Read free on archive.org: https://archive.org/details/merrilllifescien0000dani/page/244/mode/2up"
      ]},
      { h: "Suggested Videos", videos: [
        { id: "ivZyBiRtFCE", title: "Protists and Fungi", channel: "JFR Science (Mr. Key)",
          why: "Sorts organisms into the two kingdoms this unit covered. Preview it first, since it was not watched." },
        { id: "fa19GUL8Y9g", title: "Fungi and Protists - Characteristics and Importance of Protists and Fungi", channel: "Miacademy",
          why: "A second pass over both groups. Preview it first for any talk of evolution." },
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  video: { id: "ivZyBiRtFCE", title: "Protists and Fungi", channel: "JFR Science (Mr. Key)",
    why: "It sorts living things into the two kingdoms this unit covered." },

  parts: [
    { title: "Three Questions for Any Living Thing", s: [
      "Picture a drop of pond water, a rotting log and a slice of bread with fuzz on it, and ask what each one is made of living things.",
      "Unit 9 gave you a quick test for sorting them, with three questions, and every living thing in the unit passes through one of them.",
      "",
      "[walk] Try the test on three mystery living things.",
      "[step] A green one-celled thing with chlorophyll makes its own food, so it is a plantlike protist, an alga. || " + table(SORT.slice(0, 2)),
      "[step] A one-celled thing that swims with short hairs and swallows bits of food moves and eats, so it is an animal-like protist, a protozoan. || " + table(SORT.slice(0, 3)),
      "[step] A thread-body that grows on the log and digests it breaks down dead things, so it is a fungus or a funguslike protist. || " + table(SORT)
    ]},

    { title: "Protists", s: [
      "A {{protist}} is a living thing with a nucleus that doesn't fit as a plant, an animal or a fungus, so the three kinds are plantlike, animal-like and funguslike.",
      "Algae are the plantlike ones, and the six groups are the euglenas, the diatoms, the fire algae, the green algae, the red algae and the brown algae.",
      "When fire algae bloom in huge numbers the water can turn red, and that is a red tide, which can poison fish and the people who eat them.",
      "The animal-like ones are the {{protozoa}}, and they are sorted by how they move.",
      "",
      "[walk] Sort the protozoa by how they move.",
      "[step] An amoeba reaches out with pseudopods, which are false feet. || " + table(MOVE.slice(0, 2)),
      "[step] A flagellate pulls itself along with a flagellum. || " + table(MOVE.slice(0, 3)),
      "[step] A paramecium beats its cilia, the short hairs, to swim. || " + table(MOVE.slice(0, 4)),
      "[step] Plasmodium can't move at all, and it is a parasite that causes malaria. || " + table(MOVE),
      "",
      "The funguslike protists are the slime molds and the water molds, and one water mold caused the Irish potato famine."
    ]},

    { title: "Fungi", s: [
      "A fungus has no chlorophyll and can't make food, so its job is as a {{decomposer}}, breaking down what has died and returning it to the soil.",
      "Its body is made of threads called hyphae, and it eats by digesting food outside its body and then soaking the food up.",
      "",
      "[walk] Follow a fungus that lands on a fallen apple.",
      "[step] The fungus lands on the apple and sends its hyphae in. || " + table(EAT.slice(0, 2)),
      "[step] The hyphae release digestive juice onto the apple. || " + table(EAT.slice(0, 3)),
      "[step] The apple breaks down outside the fungus. || " + table(EAT.slice(0, 4)),
      "[step] The hyphae soak up the food. || " + table(EAT),
      "",
      "Fungi make more of themselves with a {{spore}}, a tiny reproductive cell, and they grow best where it is warm and wet, so a dry place stops them.",
      "",
      "[walk] Sort four fungi by where they make spores.",
      "[step] Bread mold makes its spores in round cases, so it is a zygote fungus. || " + table(GROUPS.slice(0, 2)),
      "[step] Yeast makes its spores in tiny sacs, so it is a sac fungus. || " + table(GROUPS.slice(0, 3)),
      "[step] A mushroom makes its spores on club-shaped tips, so it is a club fungus. || " + table(GROUPS.slice(0, 4)),
      "[step] Penicillium has no sexual stage ever seen, so it is an imperfect fungus. || " + table(GROUPS)
    ]},

    { title: "Yeast and Lichens", s: [
      "Yeast can reproduce by budding, when a new cell grows off the side of its parent, and it makes bread rise by giving off carbon dioxide gas.",
      "A lichen is a fungus living with a green alga or a cyanobacterium, and the two act like one.",
      "That kind of partnership, where two living things help each other, is {{symbiosis}}, and lichens feed reindeer and show how clean the air is.",
      "A mushroom you find outside is never safe to eat, because many are poisonous."
    ]},

    { title: "Medicine From Fungi", s: [
      "An {{antibiotic}} is a chemical that harms bacteria, and many are made from fungi that grow in the soil.",
      "Bacteria can change so that a drug stops responding, so scientists keep making new ones, and an antibiotic never helps against a virus.",
      "",
      "[walk] Match each fungus medicine to its job.",
      "[step] Penicillin, from Penicillium, kills bacteria and does nothing against a virus. || " + table(DRUGS.slice(0, 2)),
      "[step] Vidarabine, from a fungus, was the first drug for a virus disease. || " + table(DRUGS.slice(0, 3)),
      "[step] Cyclosporine, from an imperfect fungus, holds back rejection of a transplanted organ. || " + table(DRUGS)
    ]},

    { title: "How Manifold Are His Works", s: [
      "In one unit you met glassy shells, spinning fire algae, a mold that feeds on an orange and a yeast that lifts a loaf of bread.",
      "",
      "[verse] Psalm 104:24 says, “O LORD, how manifold are thy works! in wisdom hast thou made them all: the earth is full of thy riches.”",
      "",
      "The verse says there is a huge variety, and the protists and fungi are good proof, since most of them are too small to see and still do real work.",
      "Use the questions below to see how well it stuck."
    ]}
  ],

  todo: { title: "What To Do Now", s: [
      "Start with the questions, {Q} of them, and if one is hard the hint tells you which lesson to go back to.",
      "After that comes the vocabulary check at the bottom, {v} questions on the word cards at the top of the page.",
      "Then the part that matters most, and it happens on paper.",
      "In your notebook, write a few complete sentences on each of these, from the book: how fungi are important to the environment, how protozoans are like animals, and what causes a red tide and what it does.",
      "Then write a few sentences that explain how a fungus gets its food, and what kind of place stops a fungus from growing.",
      "There's no answer key for the notebook part, and you'll be judged on whether your reasons are clear and use facts from the unit."
  ] },

  words: [
    ["Protist", "A living thing with a nucleus that is not a plant, an animal or a fungus.", 6],
    ["Protozoa", "One-celled, animal-like protists that move and eat.", 9],
    ["Decomposer", "A living thing that breaks down dead material and returns the nutrients to the soil.", 16],
    ["Spore", "A tiny reproductive cell that grows into a new fungus.", 23],
    ["Symbiosis", "A close partnership in which two living things help each other.", 31],
    ["Antibiotic", "A chemical that harms bacteria. Many are made from fungi.", 33],
  ],

  findsAt: 43,
  questions: [
    { q: "A one-celled living thing lives in a pond, swims with short hairs and swallows food. Which group is it in?",
      find: [4],
      hint: "Go back to Protists: The Odd Ones Out.",
      choices: [
        "Algae",
        "Animal-like protists, the protozoa",
        "Fungi",
        "Funguslike protists"
      ], right: 1 },

    { q: "A tiny living thing has a nucleus, makes its own food with chlorophyll and is not a plant. What is it?",
      find: [3],
      hint: "Go back to Protists: The Odd Ones Out, Plantlike Protists.",
      choices: [
        "An alga, a plantlike protist",
        "A protozoan",
        "A decomposer",
        "A lichen"
      ], right: 0 },

    { q: "Which protozoan moves by reaching out with false feet, called pseudopods?",
      find: [11],
      hint: "Go back to Protists: The Odd Ones Out, Animal-Like Protists.",
      choices: [
        "A paramecium",
        "A flagellate",
        "An amoeba",
        "Plasmodium"
      ], right: 2 },

    { q: "What can happen when fire algae bloom in huge numbers?",
      find: [8],
      hint: "Go back to Protists: The Odd Ones Out, Protists That Hurt People.",
      choices: [
        "The water turns to ice.",
        "The fish get bigger.",
        "The pond dries up.",
        "A red tide forms, which can poison fish and the people who eat them."
      ], right: 3 },

    { q: "A living thing grows on a fallen log, has a body of threads and digests the log. What is its job in nature?",
      find: [16],
      hint: "Go back to Fungi, and What They Break Down.",
      choices: [
        "It is a decomposer that breaks down what has died.",
        "It makes food from sunlight.",
        "It hunts small animals.",
        "It makes oxygen."
      ], right: 0 },

    { q: "How does a fungus eat?",
      find: [17],
      hint: "Go back to Fungi, and What They Break Down, How a Fungus Eats.",
      choices: [
        "It chews its food.",
        "It digests food outside its body and then soaks it up.",
        "It makes food from sunlight.",
        "It swallows the food whole."
      ], right: 1 },

    { q: "Mold on a loaf of bread makes its spores in round cases. Which group is it in?",
      find: [25],
      hint: "Go back to Fungi, and What They Break Down, Four Groups, One Key.",
      choices: [
        "Club fungi",
        "Sac fungi",
        "Zygote fungi",
        "Imperfect fungi"
      ], right: 2 },

    { q: "What kind of place would best stop a fungus from growing?",
      find: [23],
      hint: "Go back to Fungi, and What They Break Down, How a Fungus Eats.",
      choices: [
        "A warm, wet place",
        "A humid place",
        "A damp cellar",
        "A dry place"
      ], right: 3 },

    { q: "A lichen is a fungus living with a green alga. What do we call a partnership where two living things help each other?",
      find: [31],
      hint: "Go back to Fungi, and What They Break Down, Two in One.",
      choices: [
        "Symbiosis",
        "Budding",
        "Rejection",
        "Decomposing"
      ], right: 0 },

    { q: "Why would a doctor not give an antibiotic made from a fungus to treat a virus?",
      find: [34],
      hint: "Go back to Why We Could Not Live Without Fungi.",
      choices: [
        "Because fungi can't make medicine.",
        "Because an antibiotic harms bacteria and does not work on a virus.",
        "Because a virus is a fungus.",
        "Because antibiotics are only for plants."
      ], right: 1 },

    { q: "Which medicine from a fungus helps stop the body from rejecting a transplanted organ?",
      find: [38],
      hint: "Go back to Why We Could Not Live Without Fungi, A New Kidney and a New Problem.",
      choices: [
        "Penicillin",
        "Vidarabine",
        "Cyclosporine",
        "Yeast"
      ], right: 2 }
  ],

  vocabQuestions: [
    { q: "What is a <i>protist</i>?",
      choices: [
        "A living thing with a nucleus that is not a plant, an animal or a fungus.",
        "A kind of virus.",
        "A kind of mushroom.",
        "A kind of medicine."
      ], right: 0 },
    { q: "What are <i>protozoa</i>?",
      choices: [
        "Plantlike protists that make food.",
        "One-celled, animal-like protists that move and eat.",
        "Threads of a fungus.",
        "Spores that float in the air."
      ], right: 1 },
    { q: "What is a <i>decomposer</i>?",
      choices: [
        "A living thing that makes food from sunlight.",
        "A living thing that hunts.",
        "A living thing that breaks down dead material and returns the nutrients to the soil.",
        "A kind of flower."
      ], right: 2 },
    { q: "What is a <i>spore</i>?",
      choices: [
        "A kind of seed with a flower.",
        "A kind of enzyme.",
        "A thread of a mushroom.",
        "A tiny reproductive cell that grows into a new fungus."
      ], right: 3 },
    { q: "What is <i>symbiosis</i>?",
      choices: [
        "A close partnership in which two living things help each other.",
        "A fight between two living things.",
        "A way of making spores.",
        "A kind of pollution."
      ], right: 0 },
    { q: "What is an <i>antibiotic</i>?",
      choices: [
        "A food that has gone bad.",
        "A chemical that harms bacteria, and many are made from fungi.",
        "A kind of virus.",
        "A part of a mushroom."
      ], right: 1 }
  ]
};
