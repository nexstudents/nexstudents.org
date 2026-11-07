/* science/unit-7-review
   Grade 7 · science · unit 7 (book unit 7, "Classification of Living Things",
   shelved as "Sorting and Naming Living Things"), lesson 5 (the review).
   Its home is this folder. Built by tools/lessons.js. Edit the lesson here,
   not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-11-07. Written on Sonnet from the four built
   unit 7 lessons (why-we-sort-living-things, how-scientists-classify-today,
   the-rain-forest, identifying-an-organism) and the book's Chapter 7 Review
   (Merrill Life Science, printed pp171-173, via the week 10-11 packet, paraphrased
   notes). Paul has not read it. Built like unit-6-review: each core idea is
   re-shown briefly with a small drawing, and every hint names the lesson to go
   back to, so a wrong answer sends him somewhere. NEW organisms everywhere (the
   sugar maple, a fern, the red fox, a four-animal key) so the review tests the
   idea and not the memory of the lesson's example.

   🚨 ORIGINS RULE. The book's Chapter 7 Review (p171) says scientific names
   "allow organisms with similar evolutionary histories to be classified
   together", and its vocabulary list has the word phylogeny. THAT SENTENCE AND
   THAT WORD ARE LEFT OUT. Ancestry is not this review's objective, and lesson
   7-2 already set the two readings of the groups side by side. No question here
   asks which reading to hold. The rain-forest debate (7-3) is one recap line.

   ⚠️ ADDED FROM THE RECORD, worth a glance from Paul:
   · The sugar maple (Acer saccharum) and the red maple (Acer rubrum): standard
     scientific names, not in the packet.
   · The red fox ladder (Animalia, Chordata, Mammalia, Carnivora, Canidae,
     Vulpes, Vulpes vulpes): standard classification, not in the packet.
   · The four-animal key (crow, rabbit, frog) is made up for practice.
   ⚠️ CUT from the book's review: the pie graph of species per kingdom, the jay
   key, and the "key for your own family" exercise (7-4's notebook task already
   does that). The Think and Write questions have no answer key, so the notebook
   writing lives in `todo`, as in the other science reviews.

   🚨 THE VERSE IS A CALLBACK, not a new choice: Psalm 104:24 is the verse
   U7-L2 already carries. If Paul would rather use another of the unit's verses
   (Genesis 2:19, Psalm 24:1, Job 12:7-8), it is one line. */
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

const KINGDOMS = [
  ["Kingdom", "What it is like"],
  ["Monera", "One cell, no nucleus"],
  ["Protists", "A catch-all group with a nucleus"],
  ["Fungi", "Mostly many cells, can't make food, don't move"],
  ["Plants", "Many cells, make their own food, don't move"],
  ["Animals", "Many cells, can't make food, move"],
];
const FOX = [
  ["Level", "Group"],
  ["Kingdom", "Animalia"],
  ["Phylum", "Chordata"],
  ["Class", "Mammalia"],
  ["Order", "Carnivora"],
  ["Family", "Canidae"],
  ["Genus", "Vulpes"],
  ["Species", "Vulpes vulpes"],
];
const YARD = [
  ["Pair", "If the animal...", "Then"],
  ["1a", "has feathers", "crow"],
  ["1b", "has no feathers", "go to pair 2"],
  ["2a", "has fur", "rabbit"],
  ["2b", "has smooth, damp skin", "frog"],
];

module.exports = {
  id: "science/unit-7-review",
  slug: "unit-7-review",
  title: "Unit 7 Review: Sorting and Naming Living Things",
  unit: "Life Science &middot; U7-L5",
  seq: { unit: 7, unitTitle: "Sorting and Naming Living Things", n: 5 },
  natural: "2026-11-07",

  /* ── /teach-plan, 2026-11-07. Merrill Life Science Chapter 7 Review, printed pp171-173,
        and the four built unit 7 lessons. ── */
  plan: {
    objective: "Pull the four Unit 7 lessons back together: why living things are sorted, how a scientific name is written, the five kingdoms and the difference between a prokaryote and a eukaryote, the seven levels, how to use a dichotomous key, and why the rain forest matters.",
    markers: [
      "BOOK (paraphrased), Chapter Summary: to classify is to group by similarities; taxonomy is the study of grouping and naming; Aristotle first classified organisms; Linnaeus gave the two-word naming system; every organism is placed in seven levels from kingdom to species; the genus and species names identify one organism.",
      "BOOK (paraphrased), five kingdoms: Monera, Protist, Fungi, Plant, Animal. Monerans are one-celled prokaryotes; protists are a mix of one-celled and many-celled eukaryotes; fungi are many-celled eukaryotes that can't make their own food; plants make their own food and animals can't.",
      "BOOK (paraphrased), Checking Concepts: the kingdom is the group with the most members; the species holds the most alike; a scientific name is written genus then species, italic or underlined, genus capitalized; trees and flowers are plants; cells with no organized nucleus are prokaryotes.",
      "BOOK (paraphrased), Using Lab Skills: make a dichotomous key; step 1a if the cells have a nucleus go on, 1b if not it is a moneran. Apply: explain scientific names and why they matter; name the five kingdoms with one member each.",
      "BOOK (paraphrased), Chapter Summary on the rain forest: many species are lost to deforestation, the air may be damaged by losing oxygen-giving trees, and native people depend on the forest.",
    ],
    method: "A RECAP WITH A PICTURE EACH TIME, ON NEW ORGANISMS. Unit 7 is one job told four ways: sort, name, place, and identify. Each part is re-shown in a few sentences and a small drawing (a name written right and wrong, the kingdoms table, the red fox ladder, a three-animal key), then the questions ask the same moves on organisms he has not seen in the unit. Every hint names the lesson to reopen.",
    exampleOnly: [
      "The sugar maple, the fern, the red fox and the crow, rabbit and frog key are only the practice animals. Every idea is one the unit already taught.",
      "⚠️ The maple names, the fox ladder and the three-animal key are added from the record or made up, see the header.",
      "Left out on purpose: the book's phylogeny sentence and word, the pie graph and the jay key.",
    ],
    digitize: "The existing reading engine. Five short Watch It Worked walkthroughs (a scientific name written right and wrong, the four sorting questions on a fern, the kingdoms table, the red fox ladder, a small key). Every question's answer-hunt points into the recap and every hint names the lesson to reopen. NO NEW MECHANIC. The Think and Write questions have no answer key, so they live in `todo` as notebook writing.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Science",
    blurb: "The whole unit in one pass: why we sort living things, how to write a scientific name, the five kingdoms, the seven levels, and a key that names an animal you have never seen.",
    contains: [
      "Why we sort, and how a scientific name is written",
      "The four questions and the five kingdoms",
      "The seven levels, with a red fox taken all the way down",
      "A small dichotomous key, used one pair at a time",
      "The rain forest in one line",
      "A paragraph and a table to write on your own, with no answer key",
    ] },
  eyebrow: ["Life Science", "U7-L5", "Sorting and Naming Living Things"],
  dek: "Names, kingdoms, seven levels and a key. Here's the whole unit in one place, on animals and plants you haven't met yet.",

  scripture: {
    ref: "Psalm 104:24",
    text: "O LORD, how manifold are thy works! in wisdom hast thou made them all: the earth is full of thy riches.",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Bring the four Unit 7 lessons together and check which parts hold and which need a second read: why living things are sorted, how a scientific name is written, the five kingdoms, the seven levels, and how to use a dichotomous key."
      ]},
      { h: "Key Concepts", p: [
        "Every question is tied to one of the four lessons and the hint says which one, so a wrong answer is directions to the right page and not a mark against your student.",
        "The practice organisms are new on purpose. A student who can write the sugar maple's name and sort a red fox is using the idea, not remembering the lesson's example."
      ]},
      { h: "Where Students Get Stuck", p: [
        "Writing a scientific name with the wrong capitals. The genus gets a capital letter and the species does not, and both words are italic or underlined.",
        "Mixing up the order of the seven levels. Say them from the biggest group to the smallest, and remember that each step down holds fewer kinds.",
        "Starting a key in the middle. A key always begins at the first pair."
      ]},
      { h: "Left Out On Purpose", p: [
        "The textbook's chapter review says scientific names group organisms with similar evolutionary histories, and it lists the word phylogeny. Both are left out. Lesson 7-2 set the two readings of the groups side by side, and this review only asks your student to do the sorting."
      ]},
      { h: "Book Pages", p: [
        "Merrill Life Science (1994), Chapter 7 Review, pages 171 to 173. Read free on archive.org: https://archive.org/details/merrilllifescien0000dani/page/196/mode/2up"
      ]},
      { h: "Suggested Videos", videos: [
        { id: "SIbFuiCfkr8", title: "The Classification of Living Things 🦠 🐰 5 ANIMAL KINGDOMS 🌱 Science for Kids", channel: "Smile and Learn - English",
          why: "The five kingdoms at a kid's level. The title says animal kingdoms, but it covers all five." },
        { id: "8qObW5OW1To", title: "What is Binomial Nomenclature? Simple Explanation with Rules and Examples | Biology | Bioscholar", channel: "Bio Scholar",
          why: "The rules for writing a scientific name, with examples. Binomial nomenclature is the textbook's long word for the two-word name." },
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "One Job, Four Ways", s: [
      "Think back to a zoo, a music store, a pill bug under a flat stone and a forest being cleared by the minute.",
      "They look like four different stories, but each one was a piece of the same job, which is sorting living things and giving each one a name.",
      "This review goes through that job in order, and the question to keep asking is how you would place a living thing you have never seen."
    ]},

    { title: "Why We Sort, and How We Name", s: [
      "To classify is to group things by how they are alike, the way a store puts the milk and cheese in one aisle.",
      "Aristotle tried it first, with plants and animals, and he split the animals by where they live, but a frog lives in the water and on land, so the system had no place for it.",
      "Linnaeus fixed the problem by giving every living thing a {{scientific name}} of two words, with the {{genus}} first and the {{species}} second.",
      "",
      "[walk] Write the scientific name of the sugar maple, which is the genus Acer and the species saccharum.",
      "[step] Put the genus first and the species second. || Acer saccharum",
      "[step] Give only the genus a capital letter, because the species stays lowercase. || Acer saccharum   (right)\nacer Saccharum   (wrong)\nAcer Saccharum   (wrong)",
      "[step] Mark both words as italic or underline them, because that is how a scientific name is always printed. || Acer saccharum   (italic or underlined)",
      "[step] Compare it with the red maple, which has the same genus and a different species word. || Acer saccharum   sugar maple\nAcer rubrum   red maple\nsame genus, different species",
      "",
      "Two living things with the same genus are close relatives, so the name already tells you something about the tree.",
      "That is the whole point of the two words, because the first one says which group and the second one picks out the kind."
    ]},

    { title: "Four Questions and Five Kingdoms", s: [
      "The biggest group is a {{kingdom}}, and four questions can place almost any living thing in one of five.",
      "Does it have a nucleus, is it one cell or many, does it make its own food, and does it move?",
      "",
      "[walk] Run the four questions on a fern.",
      "[step] A fern's cells have a nucleus, so the first answer is yes. || nucleus?  YES",
      "[step] A fern is made of many cells. || nucleus?  YES\ncells?  MANY",
      "[step] A fern makes its own food from sunlight. || nucleus?  YES\ncells?  MANY\nown food?  YES",
      "[step] A fern stays where it grows, so it does not move, and that puts it in the plants. || nucleus?  YES\ncells?  MANY\nown food?  YES\nmoves?  NO\nkingdom:  PLANTS",
      "",
      "Cells with no nucleus at all are {{prokaryotes}}, and bacteria are the example.",
      "Every other living thing is made of eukaryotes, which do have a nucleus, and that is the first thing to check when you place something in a kingdom.",
      "",
      "[walk] Read the five kingdoms in one table.",
      "[step] Monera are one-celled and have no nucleus. || " + table(KINGDOMS.slice(0, 2)),
      "[step] Protists are the catch-all group, the ones that fit nowhere else. || " + table(KINGDOMS.slice(0, 3)),
      "[step] Fungi can't make their own food and don't move. || " + table(KINGDOMS.slice(0, 4)),
      "[step] Plants make their own food, and animals can't and do move. || " + table(KINGDOMS)
    ]},

    { title: "Seven Levels Down", s: [
      "Inside a kingdom the groups get smaller in the same order every time, which is kingdom, phylum, class, order, family, genus and species.",
      "",
      "[walk] Sort the red fox down the seven levels.",
      "[step] A fox has many cells, can't make its own food and moves, so it is an animal. || " + table(FOX.slice(0, 2)),
      "[step] It has a backbone, which gives the phylum. || " + table(FOX.slice(0, 3)),
      "[step] It is hairy and feeds its young milk, so it is a mammal. || " + table(FOX.slice(0, 4)),
      "[step] It is a meat-eating mammal. || " + table(FOX.slice(0, 5)),
      "[step] It belongs to the dog family. || " + table(FOX.slice(0, 6)),
      "[step] The genus is the group of foxes. || " + table(FOX.slice(0, 7)),
      "[step] The species is the red fox itself, which gives it a two-word name. || " + table(FOX),
      "",
      "At every step the group got smaller, and the animals left in it had more in common.",
      "By the last row only one kind of animal fits, and that is the red fox."
    ]},

    { title: "Using a Key", s: [
      "A {{dichotomous key}} names a living thing by giving you two choices at a time, and you always begin at pair 1.",
      "Here is a small one for three animals you might see in a yard, and the walk below uses it on one of them.",
      "",
      "[walk] Name a hopping animal with no feathers, no fur and smooth, damp skin.",
      "[step] Begin at pair 1, and since the animal has no feathers, 1b fits and sends you to pair 2. || " + table(YARD.slice(0, 3)),
      "[step] At pair 2 the skin is smooth and damp, so 2b fits. || pair 1: no feathers  →  1b  →  go to pair 2\npair 2: smooth, damp skin  →  2b",
      "[step] The choice 2b ends in a name, so you stop there. || pair 1: no feathers  →  1b  →  go to pair 2\npair 2: smooth, damp skin  →  2b\nname:  frog",
      "",
      "You can't start in the middle, because the later pairs only make sense after the earlier ones are answered.",
      "A key always begins at pair 1, and then it follows the go-tos until it reaches a name."
    ]},

    { title: "One Forest, One Line", s: [
      "The rain forest lesson is a reminder of why all this naming matters.",
      "More than fifty acres of tropical forest were being cleared every minute when the book was written, and the trees there give off oxygen and hold thousands of kinds of living things nobody has named yet.",
      "The people who live there need the land too, so the question of what to do has two real sides.",
      "",
      "[verse] Psalm 104:24 says, “O LORD, how manifold are thy works! in wisdom hast thou made them all: the earth is full of thy riches.”",
      "",
      "Sorting and naming is one way of paying attention to how many works there are, and the questions below check how well you can do it."
    ]}
  ],

  todo: { title: "What To Do Now", s: [
      "Start with the questions, {Q} of them, and if one is hard the hint tells you which lesson to go back to.",
      "After that comes the vocabulary check at the bottom, {v} questions on the word cards at the top of the page.",
      "Then the part that matters most, and it happens on paper.",
      "In your notebook, write one paragraph of complete sentences that explains what a scientific name is and why scientists need one.",
      "Then name the five kingdoms in a list and give one living thing that belongs to each.",
      "There's no answer key for the notebook part, so check your list against the table in the lesson."
  ] },

  words: [
    ["Scientific name", "The two-word name, genus then species, that belongs to only one kind of living thing.", 5],
    ["Genus", "A group of similar species. Its name is the first word of a scientific name.", 5],
    ["Species", "The smallest, most specific group. Its name is the second word of a scientific name.", 5],
    ["Kingdom", "The largest group in a classification system.", 12],
    ["Prokaryote", "A living thing whose cells have no walled-off nucleus, such as a bacterium.", 19],
    ["Dichotomous key", "A series of numbered pairs of statements that leads you to the name of a living thing.", 35]
  ],

  findsAt: 51,
  questions: [
    { q: "Why did the frog cause a problem for Aristotle's system?",
      find: [4],
      hint: "Go back to Why We Sort Living Things.",
      choices: [
        "It lives in the water and on land, so it did not fit one group.",
        "It is too small to see.",
        "It is a plant.",
        "It had no name."
      ], right: 0 },

    { q: "Which of these is a correctly written scientific name?",
      find: [8],
      hint: "Go back to Why We Sort Living Things, and the walk on the white oak's name.",
      choices: [
        "acer Saccharum",
        "Acer Saccharum",
        "Acer saccharum",
        "ACER saccharum"
      ], right: 2 },

    { q: "Acer saccharum and Acer rubrum are two kinds of maple. What do their names tell you?",
      find: [10],
      hint: "Go back to Why We Sort Living Things, and Identifying an Organism Yourself.",
      choices: [
        "They are the same species.",
        "They share a genus, so they are close relatives but different species.",
        "They are in different kingdoms.",
        "They are both animals."
      ], right: 1 },

    { q: "A living thing has a nucleus, many cells, makes its own food and does not move. Which kingdom is it?",
      find: [18],
      hint: "Go back to How Scientists Classify Today, and the four questions.",
      choices: [
        "Animals",
        "Fungi",
        "Monera",
        "Plants"
      ], right: 3 },

    { q: "A bacterium has no nucleus. What is a cell like that called?",
      find: [19],
      hint: "Go back to How Scientists Classify Today, With a Nucleus and Without.",
      choices: [
        "A eukaryote",
        "A prokaryote",
        "A phylum",
        "A genus"
      ], right: 1 },

    { q: "Which list gives the seven levels in order, from the biggest group to the smallest?",
      find: [25],
      hint: "Go back to How Scientists Classify Today, Seven Levels Down.",
      choices: [
        "Kingdom, class, phylum, order, family, genus, species",
        "Species, genus, family, order, class, phylum, kingdom",
        "Kingdom, phylum, class, order, family, genus, species",
        "Kingdom, phylum, order, class, genus, family, species"
      ], right: 2 },

    { q: "In the red fox's ladder, which group is its family?",
      find: [31],
      hint: "Go back to How Scientists Classify Today, and the wolf's ladder.",
      choices: [
        "Mammalia",
        "Carnivora",
        "Vulpes",
        "Canidae"
      ], right: 3 },

    { q: "An animal has no feathers, no fur and smooth, damp skin. Using the small key, what is it?",
      find: [38],
      hint: "Go back to Identifying an Organism Yourself, and look at the key in this review.",
      choices: [
        "The frog",
        "The crow",
        "The rabbit",
        "The fern"
      ], right: 0 },

    { q: "Why can't you start a key in the middle?",
      find: [40],
      hint: "Go back to Identifying an Organism Yourself, Using the Key.",
      choices: [
        "Because the middle pairs are always wrong.",
        "Because the later pairs only make sense after the earlier ones are answered.",
        "Because a key has only one pair.",
        "Because the middle of a key is torn out."
      ], right: 1 },

    { q: "What is one thing that happens when a large rain forest is cleared?",
      find: [42],
      hint: "Go back to The Rain Forest, and What Is Being Lost.",
      choices: [
        "The soil gets richer.",
        "There are fewer trees to take in carbon dioxide and give off oxygen.",
        "The weather never changes.",
        "More kinds of living things appear overnight."
      ], right: 1 }
  ],

  vocabQuestions: [
    { q: "What is a <i>scientific name</i>?",
      choices: [
        "The name a farmer uses.",
        "A nickname.",
        "A name that changes in every country.",
        "The two-word name, genus then species, that belongs to only one kind of living thing."
      ], right: 3 },
    { q: "What is a <i>genus</i>?",
      choices: [
        "A group of similar species, named by the first word of a scientific name.",
        "The smallest group of all.",
        "The largest group in a classification system.",
        "A place where animals live."
      ], right: 0 },
    { q: "What is a <i>species</i>?",
      choices: [
        "The first word of a scientific name.",
        "The largest group in a classification system.",
        "The smallest, most specific group, named by the second word of a scientific name.",
        "A book for naming living things."
      ], right: 2 },
    { q: "What is a <i>kingdom</i> in classification?",
      choices: [
        "A country with a king.",
        "The largest group in a classification system.",
        "A small group of similar species.",
        "A place where animals live."
      ], right: 1 },
    { q: "What is a <i>prokaryote</i>?",
      choices: [
        "A living thing whose cells have a true nucleus.",
        "A kind of fossil.",
        "A living thing whose cells have no walled-off nucleus, such as a bacterium.",
        "A group of many species."
      ], right: 2 },
    { q: "What is a <i>dichotomous key</i>?",
      choices: [
        "A key that opens a field guide.",
        "A series of numbered pairs of statements that leads you to the name of a living thing.",
        "A list of kingdoms.",
        "A kind of fossil."
      ], right: 1 }
  ]
};
