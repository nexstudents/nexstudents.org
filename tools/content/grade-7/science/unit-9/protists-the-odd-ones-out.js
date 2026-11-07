/* science/protists-the-odd-ones-out
   Grade 7 · science · unit 9 (book unit 9, "Protists and Fungi"), lesson 1.
   Its home is this folder. Built by tools/lessons.js. Edit the lesson here, not in
   the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-11-07. Written on Sonnet from Merrill Life
   Science (1994) printed pp202-210, "Kingdom Protista", via the week 10-11 packet
   (paraphrased notes). Paul has not read it. Book order kept: protists as the
   misfits, plantlike (algae, with the six groups built as a table), animal-like
   (protozoa, sorted by how they move, with malaria as the real-world hook),
   funguslike (slime molds, water molds, with the Irish potato famine as the hook).
   Word cards: 6 (Protist, Algae, Protozoa, Pseudopod, Cilia, Slime Mold).

   🚨 ORIGINS RULE, ONE SENTENCE LEFT OUT. p206 says "The first protozoans were
   probably similar to members of the phylum Sarcodina." That is not the lesson's
   objective, so it is left out of the teaching and the questions. The Section Review
   question on why there are few fossils of protists is left out too. The White
   Cliffs of Dover line (chalky shells of billions of sarcodines) is kept as the
   packet gives it, with no age. No question touches age or ancestry.

   ⚠️ ADDED FROM THE RECORD, worth a glance from Paul:
   · The "four questions" sort of a Spirogyra, a Paramecium and a slime mold is made
     up for practice; the facts in it are all the book's.
   · A plain picture of an eyespot, cilia and pseudopods ("false feet") as ways to move.
   · "Mosquito bite" as how malaria spreads is the packet's; that it kills many people
     each year is the book's "many deaths yearly". No number is given.
   ⚠️ NOT IN THIS LESSON: the Problem Solving box (Puzzled about Slime), the MiniLab on
   slime molds, the Connect to Chemistry question on cellulose, the Section Review
   question on plankton, and Activity 9-1, which is its own row in the unit. The dysentery
   detail and the macronucleus and micronucleus are left out to keep to about six new words.

   🚨 THE VERSE IS A WORKING CHOICE, NOT PAUL'S. Psalm 95:5, the sea is his and he made
   it. Choosing the scripture is his, so it goes in the review queue. */
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

const ALGAE = [
  ["Group", "Example", "Key fact"],
  ["Euglenas", "Euglena", "One cell, a flagellum and a red eyespot"],
  ["Diatoms", "Diatoms", "Golden brown, with a glassy shell"],
  ["Fire algae", "Dinoflagellates", "Spin like tops, and some cause red tide"],
  ["Green algae", "Spirogyra, Volvox", "One or many cells, mostly in water"],
  ["Red algae", "Red seaweed", "Many cells, and some live deep in the sea"],
  ["Brown algae", "Kelp", "Many cells, and some grow 100 meters long"],
];
const MOVE = [
  ["Group", "How it moves", "Example"],
  ["Sarcodines", "Pseudopods, or false feet", "Amoeba"],
  ["Flagellates", "One or more flagella", "The germ of sleeping sickness"],
  ["Ciliates", "Cilia, short hairs", "Paramecium"],
  ["Sporozoans", "They can't move on their own", "The germ of malaria"],
];
const SORT = [
  ["Living thing", "What it does", "Group"],
  ["Spirogyra", "Makes food with chlorophyll", "Plantlike"],
  ["Paramecium", "Swims and eats bacteria", "Animal-like"],
  ["Slime mold", "Breaks down dead matter, makes spores", "Funguslike"],
];

module.exports = {
  id: "science/protists-the-odd-ones-out",
  slug: "protists-the-odd-ones-out",
  title: "Protists: The Odd Ones Out",
  unit: "Life Science &middot; U9-L1",
  seq: { unit: 9, unitTitle: "Protists and Fungi", n: 1 },
  natural: "2026-11-07",

  /* ── /teach-plan, 2026-11-07. Merrill Life Science pp202-210. ── */
  plan: {
    objective: "Explain what a protist is (a eukaryote that isn't a plant, an animal or a fungus, the 'misfits') and describe the three groups: plantlike (algae), animal-like (protozoa, grouped by how they move) and funguslike (slime molds and water molds).",
    markers: [
      "BOOK (paraphrased), Chapter 7 Review: the protists are often called 'misfits', a varied group that doesn't fit plant, animal or fungus.",
      "BOOK (paraphrased), plantlike protists, the algae: some one-celled, some many-celled; all make their own food with chlorophyll in chloroplasts; other pigments can cover the green. Six main groups, sorted mainly by pigment and how they store food.",
      "BOOK (paraphrased), Table 9-1: euglenas (one cell, flagellum, eyespot, traits of both plants and animals); diatoms (golden brown, glassy silica shells, most numerous algae); dinoflagellates (two flagella that spin the cell, some cause red tide); green algae (one or many cells, mostly water: Spirogyra, Volvox, Chlamydomonas, Ulva); red algae (many-celled, some deep in the sea); brown algae (kelps up to 100 m long).",
      "BOOK (paraphrased), animal-like protists, the protozoa: one-celled, live in water, soil and dead matter, many are parasites. Four groups by movement: sarcodines (pseudopods, amoeba), flagellates (flagella; Trypanosoma causes sleeping sickness, spread by the tsetse fly), ciliates (cilia, Paramecium) and sporozoans (can't move; Plasmodium, carried by a female Anopheles mosquito, causes malaria).",
      "BOOK (paraphrased), funguslike protists: slime molds (bright, weblike, decompose organic matter; move by pseudopods in part of the life cycle and reproduce with spores) and water molds (a water mold caused the Irish potato famine of the 1840s, when nearly one million people died).",
    ],
    method: "WHAT DOESN'T FIT, THEN THREE BOXES, THEN SORT ONE OF EACH. Start with the problem (a group defined by what it is not), then the three boxes: the algae as a six-row table built a row at a time, the protozoa as a four-row table sorted by movement, and the funguslike ones with two hooks that matter to people (the potato famine and malaria). The student ends by sorting three new organisms with the plain test: does it make food, move and eat, or break down dead matter?",
    exampleOnly: [
      "Spirogyra, Paramecium and the slime mold in the sorting table are examples of the groups, not the topic. The title and objective don't name them.",
      "⚠️ The sorting table is made up for practice, and its facts are all the book's.",
      "Left out on purpose: 'the first protozoans were probably similar to the sarcodines' (p206), which is not the lesson's objective.",
    ],
    digitize: "The reading engine plus three Watch It Worked walkthroughs with drawn tables: the six algae built a row at a time, the four protozoa sorted by movement, and a three-row sort of new organisms. Questions ask what a protist is, what each group does or causes, and which box an organism goes in.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Science",
    blurb: "If it isn't a plant, an animal or a fungus, it's probably a protist. The odd group that includes pond scum, the germ of malaria and the mold behind the Irish potato famine.",
    contains: [
      "Why protists are called the misfits",
      "The six kinds of algae, built a row at a time",
      "Four animal-like protists, sorted by how they move",
      "Slime molds and water molds, and the Irish potato famine",
      "Sorting three new organisms into the three groups",
    ] },
  eyebrow: ["Life Science", "U9-L1", "Protists and Fungi"],
  dek: "A pond is full of tiny living things that aren't plants, animals or fungi. Here's the group they all get stuffed into, and why it's so mixed up.",

  scripture: {
    ref: "Psalm 95:5",
    text: "The sea is his, and he made it: and his hands formed the dry land.",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Your student explains what a protist is, and describes the three groups: plantlike (algae), animal-like (protozoa, sorted by how they move) and funguslike (slime molds and water molds)."
      ]},
      { h: "Key Concepts", p: [
        "A protist is a eukaryote that isn't a plant, an animal or a fungus. It is a group defined by what it is not, which is why the book calls it the misfits and why it is so varied.",
        "The three groups are sorted by what the protist does: algae make their own food, protozoa move and eat, and funguslike protists break down dead matter."
      ]},
      { h: "Where Students Get Stuck", p: [
        "Thinking one protist is typical. They range from a one-celled euglena to a kelp 100 meters long, so no single picture works.",
        "Mixing up the protozoa groups. They are named for how they move, so ask how the one in front of you gets around."
      ]},
      { h: "Left Out On Purpose", p: [
        "One sentence in the textbook says the first protozoans were probably similar to the sarcodines. It is not what this lesson teaches, so it is left out. The Section Review question on why there are few fossils of protists is left out for the same reason."
      ]},
      { h: "Book Pages", p: [
        "Merrill Life Science (1994), pages 202 to 210. Read free on archive.org: https://archive.org/details/merrilllifescien0000dani/page/227/mode/2up"
      ]},
      { h: "Suggested Videos", videos: [
        { id: "zK7Ckmxxqds", title: "Protists and Fungi", channel: "Amoeba Sisters",
          why: "A short video that covers both protists and fungi, so it fits this lesson and the next." },
        { id: "46jxCxxjxyY", title: "Classification Challenges with Kingdoms - Amoeba Sisters #Shorts", channel: "Amoeba Sisters",
          why: "A very short look at why protists are the misfits, because they don't fit neatly into the other kingdoms." },
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "The Odd Ones Out", s: [
      "Scientists sort living things into five kingdoms, and four of them have a clear job: the plants make food, the animals eat, the fungi break things down and the monerans are the cells with no nucleus.",
      "Then there is a group of living things that don't fit any of those, and they all get put in one kingdom, which is called the {{protists}}.",
      "A protist is a living thing with a nucleus that isn't a plant, an animal or a fungus.",
      "Because the group is defined by what it is not, it is very mixed, and scientists often call it the misfits."
    ]},

    { title: "Plantlike Protists", s: [
      "The first kind of protist is the {{algae}}, which are plantlike because they make their own food.",
      "They have chlorophyll in chloroplasts, just like a plant does, but they're not plants, and some are one cell and others are many cells.",
      "Algae are not always green, because some have other colored pigments that cover the chlorophyll.",
      "There are six main groups, and they're sorted mostly by their colors and by how they store their food.",
      "",
      "[walk] Build the table of six kinds of algae.",
      "[step] Euglenas are one-celled, with a flagellum and a red eyespot that senses light, and they act a little like plants and a little like animals. || " + table(ALGAE.slice(0, 2)),
      "[step] Diatoms are golden brown, with a glassy shell, and they are the most numerous algae in the water. || " + table(ALGAE.slice(0, 3)),
      "[step] Fire algae spin like tops with two flagella, and some of them bloom into a red tide that can poison fish and the people who eat them. || " + table(ALGAE.slice(0, 4)),
      "[step] Green algae can be one cell or many, and they live mostly in water, like Spirogyra and Volvox. || " + table(ALGAE.slice(0, 5)),
      "[step] Red algae are many-celled, and some live deep in the sea. || " + table(ALGAE.slice(0, 6)),
      "[step] Brown algae are many-celled, and the kelps grow as long as 100 meters. || " + table(ALGAE),
      "",
      "Some of these end up in your kitchen, because red algae give pudding and toothpaste their creamy feel, and brown algae thicken ice cream.",
      "Dead diatom shells pile up on the sea floor and get mined for filters and for the paint that makes road lines sparkle at night."
    ]},

    { title: "Animal-Like Protists", s: [
      "The second kind is the {{protozoa}}, which are animal-like because they move and eat.",
      "Each one is a single complicated cell, and they live in water, in soil and in dead matter, and many are parasites.",
      "They're sorted by how they move, so here are the four groups.",
      "Two words will help, because {{pseudopods}} are false feet, which are bulges of the cell that reach out and pull it along, and {{cilia}} are short hairs that beat together.",
      "",
      "[walk] Sort the protozoa by how they get around.",
      "[step] Sarcodines move with pseudopods, the false feet that reach out and pull the cell along. || " + table(MOVE.slice(0, 2)),
      "[step] Flagellates swim with one or more flagella, the whiplike tails you met in the last unit. || " + table(MOVE.slice(0, 3)),
      "[step] Ciliates move with cilia, the short hairs that beat together and move them quickly in any direction. || " + table(MOVE.slice(0, 4)),
      "[step] Sporozoans cannot move on their own, and every one of them is a parasite. || " + table(MOVE),
      "",
      "An amoeba traps food by flowing around it with its pseudopods and then digesting it inside a bubble called a vacuole.",
      "A paramecium sweeps bacteria into a groove on its side with its cilia, and a special vacuole pumps the extra water out."
    ]},

    { title: "Protists That Hurt People", s: [
      "A few protozoa are parasites that make people very sick.",
      "One flagellate causes African sleeping sickness, which is spread by the bite of the tsetse fly and brings fever and sleepiness.",
      "A sporozoan called Plasmodium causes malaria, and it travels from person to person in the bite of a female Anopheles mosquito.",
      "The book says malaria causes many deaths every year."
    ]},

    { title: "Funguslike Protists", s: [
      "The third kind is the funguslike protists, which have some features of fungi and some of protists.",
      "A {{slime mold}} is a brightly colored, weblike living thing that creeps over rotting leaves and mulch, feeding on bacteria and dead matter.",
      "It moves with pseudopods like an amoeba for part of its life, but it makes spores like a fungus, so it has a bit of each.",
      "The water molds are the other group, and they can be deadly, because a water mold caused the Irish potato famine in the 1840s.",
      "Potatoes were the main crop, the mold killed them in the fields, and the book says nearly a million people died."
    ]},

    { title: "Sort Three New Ones", s: [
      "You can sort almost any protist by asking what it does.",
      "If it makes food it is plantlike, if it moves and eats it is animal-like, and if it breaks down dead matter it is funguslike.",
      "",
      "[walk] Sort three protists.",
      "[step] Spirogyra makes food with chlorophyll, so it is plantlike. || " + table(SORT.slice(0, 2)),
      "[step] A paramecium swims and eats bacteria, so it is animal-like. || " + table(SORT.slice(0, 3)),
      "[step] A slime mold breaks down dead matter and makes spores, so it is funguslike. || " + table(SORT)
    ]},

    { title: "The Sea Is His", s: [
      "Nearly all of these live in water, and in the water they feed the fish, make oxygen and sometimes cause trouble.",
      "",
      "[verse] Psalm 95:5 says, “The sea is his, and he made it: and his hands formed the dry land.”",
      "",
      "The verse says that the water and everything in it belongs to the God who made it, and that includes the smallest living things.",
      "The questions below check what you've learned."
    ]}
  ],

  todo: { title: "What To Do Now", s: [
      "A group that is defined by what it isn't, three kinds of protist and a potato famine, and now it's your turn to sort them.",
      "Start with the questions, {Q} of them, and then the vocabulary check at the bottom, {v} questions on the word cards at the top of the page.",
      "When a question gives you a protist, ask the sorting question from the lesson first: does it make food, does it move and eat, or does it break down dead matter?",
      "Then, in your notebook, make a table with three columns headed Plantlike, Animal-Like and Funguslike, and put at least two protists in each column.",
      "Next, write two sentences that explain why scientists call the protists the misfits.",
      "Last, pick one protist from the lesson that hurts people and write two sentences about how it spreads."
  ] },

  words: [
    ["Protist", "A living thing with a nucleus that is not a plant, an animal or a fungus.", 1],
    ["Algae", "Plantlike protists that make their own food with chlorophyll.", 4],
    ["Protozoa", "Animal-like protists, each a single complicated cell that moves and eats.", 17],
    ["Pseudopod", "A false foot, a bulge of a cell that reaches out to move it and to catch food.", 20],
    ["Cilia", "Short hairs on a cell that beat together to move it.", 20],
    ["Slime mold", "A funguslike protist that creeps over dead matter and makes spores.", 33]
  ],

  findsAt: 47,
  questions: [
    { q: "What is a protist?",
      find: [2],
      hint: "Read The Odd Ones Out.",
      choices: [
        "A living thing with a nucleus that isn't a plant, an animal or a fungus",
        "A living thing with no nucleus",
        "A kind of virus",
        "A plant that grows in water"
      ], right: 0 },

    { q: "Why do scientists call the protists the misfits?",
      find: [3],
      hint: "Read The Odd Ones Out.",
      choices: [
        "Because they are all very small.",
        "Because they are a mixed group that doesn't fit the plants, animals or fungi.",
        "Because they all live in the desert.",
        "Because they have no cells."
      ], right: 1 },

    { q: "What lets algae make their own food?",
      find: [5],
      hint: "Read Plantlike Protists.",
      choices: [
        "A flagellum",
        "A glassy shell",
        "Chlorophyll in chloroplasts",
        "A spore case"
      ], right: 2 },

    { q: "Which kind of algae has a glassy shell and is golden brown?",
      find: [10],
      hint: "Read the table in Plantlike Protists.",
      choices: [
        "Euglenas",
        "Kelp",
        "Spirogyra",
        "Diatoms"
      ], right: 3 },

    { q: "Which algae can bloom into a red tide that can poison fish?",
      find: [11],
      hint: "Read the table in Plantlike Protists.",
      choices: [
        "Red seaweed",
        "Fire algae",
        "Diatoms",
        "Spirogyra"
      ], right: 1 },

    { q: "What are pseudopods?",
      find: [20],
      hint: "Read Animal-Like Protists.",
      choices: [
        "Bulges of the cell, called false feet, that move it and catch food",
        "Short hairs that beat together",
        "Whiplike tails",
        "Glassy shells"
      ], right: 0 },

    { q: "A protozoan moves by beating short hairs all over its surface. What are the hairs?",
      find: [24],
      hint: "Read Animal-Like Protists.",
      choices: [
        "Flagella",
        "Pseudopods",
        "Cilia",
        "Spores"
      ], right: 2 },

    { q: "How does the germ that causes malaria get from person to person?",
      find: [30],
      hint: "Read Protists That Hurt People.",
      choices: [
        "In the bite of a tsetse fly",
        "In the bite of a female Anopheles mosquito",
        "In dirty water",
        "By shaking hands"
      ], right: 1 },

    { q: "What caused the Irish potato famine in the 1840s?",
      find: [35],
      hint: "Read Funguslike Protists.",
      choices: [
        "A flood",
        "A diatom",
        "A bacterium",
        "A water mold"
      ], right: 3 },

    { q: "A creeping, weblike living thing breaks down rotting leaves and makes spores. Which group is it in?",
      find: [42],
      hint: "Read Sort Three New Ones.",
      choices: [
        "Funguslike protists",
        "Plantlike protists",
        "Animal-like protists",
        "Monerans"
      ], right: 0 }
  ],

  vocabQuestions: [
    { q: "What is a <i>protist</i>?",
      choices: [
        "A living thing with no nucleus.",
        "A living thing with a nucleus that is not a plant, an animal or a fungus.",
        "A kind of virus.",
        "A kind of plant."
      ], right: 1 },
    { q: "What are <i>algae</i>?",
      choices: [
        "Plantlike protists that make their own food with chlorophyll.",
        "Animal-like protists that move and eat.",
        "A kind of fungus.",
        "A kind of bacterium."
      ], right: 0 },
    { q: "What are <i>protozoa</i>?",
      choices: [
        "A many-celled plant.",
        "A kind of mold.",
        "Animal-like protists, each a single complicated cell that moves and eats.",
        "A glassy shell."
      ], right: 2 },
    { q: "What is a <i>pseudopod</i>?",
      choices: [
        "A short hair on a cell.",
        "A glassy shell.",
        "A whiplike tail.",
        "A false foot, a bulge of a cell that reaches out to move it and catch food."
      ], right: 3 },
    { q: "What are <i>cilia</i>?",
      choices: [
        "Bulges that act as false feet.",
        "Short hairs on a cell that beat together to move it.",
        "Glassy shells.",
        "Spore cases."
      ], right: 1 },
    { q: "What is a <i>slime mold</i>?",
      choices: [
        "A plant that grows in water.",
        "A bacterium.",
        "A funguslike protist that creeps over dead matter and makes spores.",
        "A kind of algae."
      ], right: 2 }
  ]
};
