/* science/fungi-and-what-they-break-down
   Grade 7 · science · unit 9 (book unit 9, "Protists and Fungi"), lesson 2.
   Its home is this folder. Built by tools/lessons.js. Edit the lesson here, not in
   the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-11-07. Written on Sonnet from Merrill Life
   Science (1994) printed pp211-215, "Kingdom Fungi", via the week 10-11 packet
   (paraphrased notes). Paul has not read it. Book order kept: what fungi are and
   their job as decomposers, hyphae, how a fungus eats, spores, the four divisions
   (sorted with a tiny key by how they make spores), yeast and budding, then lichens
   and symbiosis. Word cards: 6 (Hyphae, Decomposer, Spore, Budding, Lichen,
   Symbiosis).

   🚨 ORIGINS RULE. The packet saw no long-age or evolution statement on pp211-215.
   The lichen text at the bottom of p214 was only partly read in the packet, so the
   lichen section here uses only what the packet recorded (a fungus living with a
   cyanobacterium or alga, both benefit, the alga's home and the fungus's food, food
   for animals, pollution monitor). The pioneer-species idea (lichens on bare rock) is
   left out because that part of the page was not read.

   ⚠️ ADDED FROM THE RECORD, worth a glance from Paul:
   · The word "decomposer" for a fungus's job. The packet says the most important role
     is to break down organic material and return it to the soil.
   · The four-fungi sorting key (black bread mold, yeast, button mushroom,
     Penicillium) is made up for practice, in the shape of the plan's tiny key. Its
     facts are the book's.
   · A mushroom is only the part above ground, and the mycelium is usually hidden in soil or food. Standard, not in the packet.
   · A plain picture of enzymes as digestive juice that a fungus puts on its food.
   ⚠️ NOT IN THIS LESSON: the Technology box (A Yeast Library), the MiniLab on spore
   prints, the Skill Builder on yeast and temperature, the Connect to Physics question
   on air currents, and the crop diseases (Dutch elm disease, apple scab, ergot, rust and
   smut) beyond one line. The lesson keeps to about six new words.
   ⚠️ SAFETY LINE KEPT FROM THE BOOK: never eat wild mushrooms.

   🚨 THE VERSE IS A WORKING CHOICE, NOT PAUL'S. Psalm 104:14, he causes the grass to
   grow and brings forth food out of the earth. Choosing the scripture is his, so it
   goes in the review queue. */
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

const EAT = [
  ["Step", "What the fungus does"],
  ["1", "Lands on food, such as a slice of bread"],
  ["2", "Its hyphae release digestive juice onto the food"],
  ["3", "The food breaks down outside the fungus"],
  ["4", "The hyphae soak up the digested food"],
];
const KEY = [
  ["Pair", "If the fungus...", "Then"],
  ["1a", "makes spores in round cases", "zygote fungi, like bread mold"],
  ["1b", "does not", "go to pair 2"],
  ["2a", "makes spores in tiny sacs", "sac fungi, like yeast"],
  ["2b", "does not", "go to pair 3"],
  ["3a", "makes spores on club-shaped tips", "club fungi, like a mushroom"],
  ["3b", "has no sexual stage ever seen", "imperfect fungi, like Penicillium"],
];
const BREAD = [
  ["Step", "What happens in the dough"],
  ["1", "Yeast eats the sugar in the dough"],
  ["2", "It gives off carbon dioxide gas"],
  ["3", "The gas makes bubbles in the dough"],
  ["4", "The bubbles puff the dough up, and leave holes in the bread"],
];

module.exports = {
  id: "science/fungi-and-what-they-break-down",
  slug: "fungi-and-what-they-break-down",
  title: "Fungi, and What They Break Down",
  unit: "Life Science &middot; U9-L2",
  seq: { unit: 9, unitTitle: "Protists and Fungi", n: 2 },
  natural: "2026-11-07",

  /* ── /teach-plan, 2026-11-07. Merrill Life Science pp211-215. ── */
  plan: {
    objective: "Describe what all fungi share (hyphae, no chlorophyll, digesting food outside the body, spores), explain their job as decomposers, sort fungi into the four divisions by how they make spores, and explain a lichen as two living things helping each other (symbiosis).",
    markers: [
      "BOOK (paraphrased), Objectives: identify the characteristics shared by all fungi and classify fungi into groups by their methods of reproduction.",
      "BOOK (paraphrased): fungi include mushrooms, bread mold, mildew and the yeasts used for bread, cheese, beer and wine. Their most important role is as decomposers of organic material, returning it to the soil, and with bacteria they are nature's recyclers. Once classified as plants, but they don't make their own food. The body is a mass of threadlike tubes called hyphae; a mat of hyphae is a mycelium; the cell walls are cellulose or chitin.",
      "BOOK (paraphrased): fungi have no chlorophyll and can't make food. Most feed on dead organisms; they secrete enzymes to digest food outside the body, then absorb it. Parasitic fungi (athlete's foot, ringworm) take food from living things. They grow best in warm, humid places.",
      "BOOK (paraphrased): fungi reproduce by spores, reproductive cells that grow into a new organism without fertilization. The structures that produce spores sort fungi into four divisions: zygote fungi (sporangia, bread mold), sac fungi (asci; yeasts, morels, truffles), club fungi (basidia on gills; mushrooms, puffballs, shelf fungi) and imperfect fungi (sexual stage never observed; Penicillium, athlete's foot).",
      "BOOK (paraphrased): yeast also reproduces by budding, a new organism growing off the side of the parent. In baking, yeast uses sugar and produces alcohol and carbon dioxide, and the carbon dioxide bubbles make bread rise.",
      "BOOK (paraphrased): never eat wild mushrooms, since many are poisonous and even experts sometimes mistake them.",
      "BOOK (paraphrased): a lichen is a fungus living with a cyanobacterium or a green alga. Symbiosis is a close relationship between two organisms. The alga's cells live tangled in the fungus's strands and get a moist, protected home; the fungus gets food from the alga. Lichens feed animals such as reindeer and caribou, and are easily harmed by air pollution, so their growth can be used to monitor it.",
    ],
    method: "A BODY OF THREADS, A WAY OF EATING, A WAY OF REPRODUCING. The student owns three things: how a fungus eats (a four-step walk, digest outside, then absorb), how a fungus is sorted (a small key built on how it makes spores, walked on four fungi), and how bread rises (a four-step chain). Then the lichen, as two living things in one body, closes the lesson.",
    exampleOnly: [
      "The black bread mold, the yeast, the mushroom and Penicillium in the key are the book's four examples of the four divisions, kept.",
      "⚠️ The key itself and the picture of digestive juice are added from the record or made up, see the header.",
    ],
    digitize: "The reading engine plus three Watch It Worked walkthroughs with drawn tables: how a fungus eats, a small key by spore structure walked on four fungi, and how yeast makes bread rise. Questions ask what all fungi share, how a fungus eats, how each division makes spores, and what a lichen is.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Science",
    blurb: "A mushroom, the black fuzz on old bread and the yeast in a loaf are all fungi. Fungi can't make food and don't move, so what do they do? They digest dead things, and the world would be buried without them.",
    contains: [
      "What all fungi share, and their job as nature's recyclers",
      "How a fungus eats, one step at a time",
      "Spores, and the four kinds of fungi sorted with a small key",
      "How yeast makes bread rise",
      "Lichens, two living things in one body",
      "Why you never eat a wild mushroom",
    ] },
  eyebrow: ["Life Science", "U9-L2", "Protists and Fungi"],
  dek: "Mushrooms, mold and yeast are all fungi, and they live by breaking down what has died. Here's how they eat and how to tell them apart.",

  scripture: {
    ref: "Psalm 104:14",
    text: "He causeth the grass to grow for the cattle, and herb for the service of man: that he may bring forth food out of the earth;",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Your student describes what all fungi share, explains their job as decomposers, sorts fungi into the four divisions by how they make spores, and explains a lichen as two living things that help each other."
      ]},
      { h: "Key Concepts", p: [
        "Fungi can't make their own food and don't move. They digest food outside their bodies, then soak it up, which is why they grow on whatever is dying or dead.",
        "The four divisions are sorted by how they make spores, so the key in the lesson asks about the spores and nothing else."
      ]},
      { h: "Where Students Get Stuck", p: [
        "Thinking a fungus is a plant. It was once classed as one, but it has no chlorophyll and can't make food.",
        "Mixing up spores and seeds. A spore is a single reproductive cell that grows into a new fungus without fertilization.",
        "🚨 Safety: never eat a wild mushroom. Many are poisonous, and even experts sometimes mistake them."
      ]},
      { h: "Added From the Record", p: [
        "The sorting key, the picture of digestive juice and the word decomposer are added from the record or made up for practice. The pioneer-species part of the lichen text was not read, so it is left out. The Yeast Library box, the spore print MiniLab and the crop diseases are left out to keep the lesson to about six new words."
      ]},
      { h: "Book Pages", p: [
        "Merrill Life Science (1994), pages 211 to 215. Read free on archive.org: https://archive.org/details/merrilllifescien0000dani/page/236/mode/2up"
      ]},
      { h: "Suggested Videos", videos: [
        { id: "zK7Ckmxxqds", title: "Protists and Fungi", channel: "Amoeba Sisters",
          why: "A short video that covers both protists and fungi, so it fits this lesson and the one before it." },
        { id: "5PWcEpAHjGE", title: "What are fungi? - The Fungi Kingdom for kids", channel: "Smile and Learn - English",
          why: "A kid-level look at hyphae, spores and how fungi act as decomposers." },
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Fungi All Around", s: [
      "Look around a kitchen and you will find fungi, in the mushrooms, in the fuzzy mold on old bread, in the mildew on a shower curtain and in the yeast that makes bread rise.",
      "Fungi were once thought to be plants, but they have no chlorophyll and can't make their own food.",
      "Their most important job is as {{decomposers}}, which break down dead plants and animals and food scraps and return the nutrients to the soil.",
      "Along with the bacteria, they are nature's recyclers, and without them the world would be buried in waste."
    ]},

    { title: "A Body of Threads", s: [
      "A fungus is mostly made of tiny threadlike tubes called {{hyphae}}.",
      "A whole mat of them is called a mycelium, and it is the body of the fungus, which is usually hidden in the soil or in whatever the fungus is growing on.",
      "A mushroom is only the part that pushes up above the ground to make spores."
    ]},

    { title: "How a Fungus Eats", s: [
      "A fungus can't make food, and it has no mouth, so it eats in an unusual way.",
      "It digests its food outside its own body and then soaks up the result.",
      "",
      "[walk] Follow a fungus that lands on a slice of bread.",
      "[step] The fungus lands on the bread and sends its hyphae into it. || " + table(EAT.slice(0, 2)),
      "[step] The hyphae release enzymes, which work like a digestive juice, onto the bread. || " + table(EAT.slice(0, 3)),
      "[step] The bread breaks down into tiny pieces outside the fungus. || " + table(EAT.slice(0, 4)),
      "[step] The hyphae soak up the food that has been broken down. || " + table(EAT),
      "",
      "Most fungi feed on dead things, but a few feed on living things, and athlete's foot and ringworm are fungi that live on a person's skin.",
      "Fungi grow best in warm, wet places, which is why they like the tropics and the space between your toes."
    ]},

    { title: "Spores", s: [
      "Fungi make more of themselves with {{spores}}, which are tiny reproductive cells that grow into a new fungus.",
      "A single puffball can puff out a cloud of them, and a spore needs only moisture, warmth and food to start growing.",
      "The place where the spores are made is different in different fungi, and scientists use it to sort fungi into four groups."
    ]},

    { title: "Four Groups, One Key", s: [
      "Here's a small key for four fungi, built to sort by how they make spores.",
      "The black mold on bread makes its spores in round cases on upright hyphae.",
      "Yeast and morels make theirs in tiny sacs, and mushrooms make theirs on club-shaped tips that line the gills under the cap.",
      "A fourth group, the imperfect fungi, are the ones whose sexual stage, one way of making spores, has never been seen.",
      "",
      "[walk] Sort a mushroom with the key.",
      "[step] Pair 1 asks about round cases on upright hyphae, and a mushroom does not make spores that way, so 1b sends it to pair 2. || " + table(KEY.slice(0, 3)),
      "[step] Pair 2 asks about tiny sacs, and a mushroom does not have those either, so 2b sends it to pair 3. || " + table(KEY.slice(0, 5)),
      "[step] Pair 3 asks about club-shaped tips on the gills, and a mushroom does, so 3a names it. || " + table(KEY),
      "[step] A mushroom is a club fungus, and so are puffballs and shelf fungi that grow on trees. || club fungi:  mushroom, puffball, shelf fungus",
      "",
      "Never eat a wild mushroom, because many are poisonous, and even experts sometimes make mistakes.",
      "A mushroom you buy at the store is grown for food, and a mushroom you find outside is not safe to eat."
    ]},

    { title: "Yeast and Bread", s: [
      "Yeast is a sac fungus with one more trick, which is that it can reproduce by {{budding}}, when a new yeast cell grows from the side of the parent.",
      "Yeast is also what makes bread rise.",
      "",
      "[walk] Follow yeast in a bowl of bread dough.",
      "[step] The yeast eats the sugar in the dough. || " + table(BREAD.slice(0, 2)),
      "[step] It gives off a gas, carbon dioxide, and a little alcohol. || " + table(BREAD.slice(0, 3)),
      "[step] The gas makes bubbles in the dough. || " + table(BREAD.slice(0, 4)),
      "[step] The bubbles puff the dough up and leave the holes you see in a slice of bread. || " + table(BREAD)
    ]},

    { title: "Two in One", s: [
      "A {{lichen}} is the strangest fungus of all, because it is not one living thing but two.",
      "It is a fungus living with either a green alga or a cyanobacterium, and the two of them act like one.",
      "That close partnership has a name, {{symbiosis}}, and it means two living things help each other.",
      "The alga lives tangled in the fungus's threads, where it gets a moist, protected home, and the fungus gets food that the alga makes.",
      "Lichens feed animals like reindeer and caribou in the arctic, and they are easily harmed by air pollution, so scientists watch them to see how clean the air is."
    ]},

    { title: "Out of the Earth", s: [
      "Fungi do a quiet job that nobody sees, which is turning what has died back into soil that plants can grow in.",
      "",
      "[verse] Psalm 104:14 says, “He causeth the grass to grow for the cattle, and herb for the service of man: that he may bring forth food out of the earth;”",
      "",
      "The verse is about food coming out of the earth, and the fungi and bacteria that recycle the soil are part of how that keeps happening.",
      "The questions below check what you've learned."
    ]}
  ],

  todo: { title: "What To Do Now", s: [
      "Mold on bread, yeast in dough and a lichen that is two living things, and now it's your turn to explain how fungi live.",
      "Start with the questions, {Q} of them, and then the vocabulary check at the bottom, {v} questions on the word cards at the top of the page.",
      "When a question asks which group a fungus belongs to, ask the key's question first: where does it make its spores?",
      "Then, in your notebook, write the four steps of how a fungus eats, in order, in complete sentences.",
      "Next, write two sentences that explain why fungi are called nature's recyclers.",
      "Last, write two sentences that explain how a lichen is an example of symbiosis."
  ] },

  words: [
    ["Decomposer", "A living thing that breaks down dead material and returns the nutrients to the soil.", 2],
    ["Hyphae", "The tiny threadlike tubes that make up the body of a fungus.", 4],
    ["Spore", "A tiny reproductive cell that grows into a new fungus.", 16],
    ["Budding", "When a new yeast cell grows from the side of its parent.", 30],
    ["Lichen", "A fungus living with a green alga or a cyanobacterium, so that the two act like one.", 37],
    ["Symbiosis", "A close partnership in which two living things help each other.", 39]
  ],

  findsAt: 46,
  questions: [
    { q: "What is the main job of fungi in nature?",
      find: [2],
      hint: "Read Fungi All Around.",
      choices: [
        "Making food from sunlight",
        "Breaking down dead things and returning the nutrients to the soil",
        "Hunting small animals",
        "Making oxygen"
      ], right: 1 },

    { q: "What are hyphae?",
      find: [4],
      hint: "Read A Body of Threads.",
      choices: [
        "The poison in a mushroom",
        "The spores of a puffball",
        "The tiny threadlike tubes that make up a fungus",
        "The caps of mushrooms"
      ], right: 2 },

    { q: "Why can't a fungus make its own food?",
      find: [1],
      hint: "Read Fungi All Around.",
      choices: [
        "It has no cell walls.",
        "It lives underground.",
        "It is too small.",
        "It has no chlorophyll."
      ], right: 3 },

    { q: "How does a fungus eat?",
      find: [8],
      hint: "Read How a Fungus Eats.",
      choices: [
        "It digests food outside its body and then soaks it up.",
        "It makes food from sunlight.",
        "It chews its food with teeth.",
        "It waits for the food to dissolve in the rain."
      ], right: 0 },

    { q: "How do fungi make more of themselves?",
      find: [16],
      hint: "Read Spores.",
      choices: [
        "With seeds",
        "With spores",
        "With eggs",
        "With flowers"
      ], right: 1 },

    { q: "A fungus makes its spores in round cases on upright hyphae. Which group is it in?",
      find: [20],
      hint: "Read Four Groups, One Key.",
      choices: [
        "Club fungi",
        "Sac fungi",
        "Zygote fungi",
        "Imperfect fungi"
      ], right: 2 },

    { q: "Using the key, what kind of fungus is a mushroom?",
      find: [26],
      hint: "Read the walk in Four Groups, One Key.",
      choices: [
        "A zygote fungus",
        "A sac fungus",
        "An imperfect fungus",
        "A club fungus"
      ], right: 3 },

    { q: "Why must you never eat a mushroom you find in the wild?",
      find: [28],
      hint: "Read Four Groups, One Key.",
      choices: [
        "Many are poisonous, and even experts sometimes make mistakes.",
        "Wild mushrooms have no flavor.",
        "Wild mushrooms are only for animals.",
        "Wild mushrooms are always dry."
      ], right: 0 },

    { q: "What makes bread rise when yeast is added to the dough?",
      find: [35],
      hint: "Read the walk in Yeast and Bread.",
      choices: [
        "The yeast grows seeds.",
        "The gas bubbles that the yeast gives off puff up the dough.",
        "The yeast melts the sugar.",
        "The yeast pulls in air."
      ], right: 1 },

    { q: "What is a lichen?",
      find: [38],
      hint: "Read Two in One.",
      choices: [
        "A kind of moss that makes its own food",
        "A fungus that lives on its own in the soil",
        "A fungus living with a green alga or a cyanobacterium, so the two act like one",
        "A mushroom that glows"
      ], right: 2 }
  ],

  vocabQuestions: [
    { q: "What is a <i>decomposer</i>?",
      choices: [
        "A living thing that breaks down dead material and returns the nutrients to the soil.",
        "A living thing that makes food from sunlight.",
        "A living thing that hunts for food.",
        "A kind of flower."
      ], right: 0 },
    { q: "What are <i>hyphae</i>?",
      choices: [
        "Spores that float in the air.",
        "The tiny threadlike tubes that make up the body of a fungus.",
        "Round spore cases.",
        "Poisonous mushrooms."
      ], right: 1 },
    { q: "What is a <i>spore</i>?",
      choices: [
        "A kind of seed with a flower.",
        "A kind of enzyme.",
        "A tiny reproductive cell that grows into a new fungus.",
        "A thread of a mushroom."
      ], right: 2 },
    { q: "What is <i>budding</i>?",
      choices: [
        "When a flower opens.",
        "When a mushroom grows tall.",
        "When a fungus makes a poison.",
        "When a new yeast cell grows from the side of its parent."
      ], right: 3 },
    { q: "What is a <i>lichen</i>?",
      choices: [
        "A fungus living with a green alga or a cyanobacterium, so that the two act like one.",
        "A kind of bacterium.",
        "A kind of moss.",
        "A kind of yeast."
      ], right: 0 },
    { q: "What is <i>symbiosis</i>?",
      choices: [
        "A fight between two living things.",
        "A close partnership in which two living things help each other.",
        "A way of making spores.",
        "A kind of pollution."
      ], right: 1 }
  ]
};
