/* science/how-scientists-classify-today
   Grade 7 · science · unit 7 (book unit 7, "Classification of Living Things",
   shelved as "Sorting and Naming Living Things"), lesson 2. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 REWRITTEN 2026-10-13 (Sonnet, to be checked by Opus) after Kolten said the
   lessons don't explain anything. An audit graded the 2026-10-11 version C: nucleus,
   prokaryote, five kingdoms, seven levels and phylogeny all in one lesson, with
   the levels as one sentence and a mnemonic. This one: opens with a short recap of
   the last lesson (genus, species, kingdom); teaches the nucleus as a cell's
   "control room"; runs the four sorting questions on a mushroom in a walk; builds
   the five kingdoms as a drawn table one row at a time; teaches the seven levels as
   a ladder (the music store gives the picture) and sorts one animal, the Arctic
   wolf, down it in a walk that builds a drawn table row by row.
   CUT: phylogeny (the word and its card), and the white rhino sentence. The
   rhino claim ("white rhinos in North and South Africa are genetically the same")
   is dated: northern and southern white rhinos are now treated as distinct, so
   the sentence is removed and DNA is described in general terms instead. Word
   cards stay at 4: Phylogeny is replaced by Nucleus (Prokaryote, Eukaryote and
   Phylum stay).

   🚨 THIS LESSON TOUCHES THE ORIGINS RULE ONCE (BEHAVIOR.md, side by side). The
   lesson teaches the five kingdoms and the seven levels as a tool for sorting and
   finding, which both accounts use. It names the usual science-course reading of
   the groups (a family tree) and the other reading (one Designer's patterns, with
   the Bible's "kinds" not matching one level) in one short section, side by side,
   never blended, and never asks the student which to hold.

   ⚠️ ADDED FROM THE RECORD, worth a glance from Paul (all kept from the draft):
   · That many books today use six kingdoms (the monerans split into two) or
     three domains. The packet gives only the 1994 five-kingdom system.
   · The middle levels of the Arctic wolf's classification (Animalia, Chordata,
     Mammalia, Carnivora, Canidae). The packet gives only the genus and species,
     Canis lupus. The dog as the wolf's closest relative (Canis familiaris) is
     from the book's Chapter 7 Review.
   · That some single-celled fungi exist (yeast). The lesson says "mostly".
   · One sentence on how people who hold creation read the "kinds" of Genesis
     against the seven levels, stated as a difference among them, not argued.
   · The nucleus as a cell's "control room" is an everyday picture, not a fact
     from the packet.
   ⚠️ The book's Activity 7-2 (using a jay key), Technology feature on DNA and
   the Connect to Chemistry box are not in this lesson (the jay key is taught in
   7-4).

   🚨 THE VERSE IS A WORKING CHOICE, NOT PAUL'S. Psalm 104:24, about the many
   works of God. Choosing the scripture is his, so it goes in the review queue. */
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
  ["Kingdom", "Cells", "How it lives"],
  ["Monera", "One cell, no nucleus", "Bacteria. Some make their own food, others absorb it"],
  ["Protists", "One or many cells, with a nucleus", "A catch-all group for what fits nowhere else"],
  ["Fungi", "Mostly many cells, with a nucleus", "Mushrooms. They don't move and get food from other things"],
  ["Plants", "Many cells, with a nucleus", "They don't move and make their own food"],
  ["Animals", "Many cells, with a nucleus", "They move and eat plants or other animals"],
];
const WOLF = [
  ["Level", "Group"],
  ["Kingdom", "Animalia"],
  ["Phylum", "Chordata"],
  ["Class", "Mammalia"],
  ["Order", "Carnivora"],
  ["Family", "Canidae"],
  ["Genus", "Canis"],
  ["Species", "Canis lupus"],
];

module.exports = {
  id: "science/how-scientists-classify-today",
  slug: "how-scientists-classify-today",
  title: "How Scientists Classify Today",
  unit: "Life Science &middot; U7-L2",
  seq: { unit: 7, unitTitle: "Sorting and Naming Living Things", n: 2 },
  natural: "2026-10-13",

  /* ── /teach-plan, rewritten 2026-10-13. Merrill Life Science pp160-163. ── */
  plan: {
    objective: "Name the five kingdoms and how each is told apart, tell prokaryotes from eukaryotes, and sort one animal down through the seven levels from kingdom to species.",
    markers: [
      "BOOK (paraphrased), Objectives: name the five kingdoms, identify the characteristics and members of each, and list the groups within each kingdom.",
      "BOOK (paraphrased): Aristotle and Linnaeus used traits you can see. Modern scientists also use chemical makeup, genes, body structures, fossils and embryo development. DNA shows how close two organisms are and separates look-alike species.",
      "BOOK (paraphrased): the five kingdoms are Animal, Plant, Fungi, Protist and Monera, told apart by four questions: does it have a nucleus, is it one cell or many, does it make its own food, does it move.",
      "BOOK (paraphrased): Monera are one-celled and simple, such as bacteria, with no organized nucleus, and they are prokaryotes. Everything else has a nucleus and membrane-bound parts, and is a eukaryote.",
      "BOOK (paraphrased), Table 7-1: Monera are prokaryotic and one-celled. Protists are eukaryotic, one- or many-celled. Fungi are eukaryotic, do not move, and get their food from other organisms. Plants are eukaryotic, many-celled, do not move and make their own food. Animals are eukaryotic, many-celled, move and eat plants or other animals.",
      "BOOK (paraphrased): each kingdom has six smaller groups in order: phylum (division in plants and fungi), class, order, family, genus, species. Each level has more in common and fewer organisms. The Arctic wolf is genus Canis, species Canis lupus.",
    ],
    method: "FOUR QUESTIONS, THEN SEVEN LEVELS, EACH DRAWN. The kingdoms are sorted by four yes-or-no questions, run on a mushroom, and the five kingdoms are built into a table one row at a time. The levels are taught as a ladder that gets narrower, with more in common at each step, using the music store (type, then artist, then title), and the walk sorts one animal, the Arctic wolf, from kingdom to species with a table that grows a row at each step.",
    exampleOnly: [
      "The music store, the mushroom and the Arctic wolf. WORLD: a music store sorted by type, artist and title. The title and objective don't name them.",
      "⚠️ Six kingdoms or three domains, the wolf's middle levels, the yeast note, the nucleus as a control room and the sentence on the Genesis 'kinds' are added from the record, see the header.",
      "Left out on purpose: the word phylogeny, and the dated white rhino claim.",
    ],
    digitize: "The reading engine plus three Watch It Worked walkthroughs with drawn tables: the four questions run on a mushroom, the five kingdoms built a row at a time, and the Arctic wolf sorted down the seven levels. Questions place organisms in kingdoms by the four questions and put the levels in order. The one question about meaning asks what each account says, not which is right.",
    unclear: "",
  },

  sheet: { slug: "how-scientists-classify-today-homework", subject: "science",
    note: "Do it on screen or print it. Your score shows here once you check it." },


  shelf: { grades: [7], subject: "Science",
    blurb: "A music store sorts its albums by type, then artist, then title, and scientists sort living things the same way. Five kingdoms, seven levels, and one wolf taken all the way down.",
    contains: [
      "Four questions that sort living things into five kingdoms",
      "What a nucleus is, and cells with one and without one",
      "The five kingdoms in a table, built a row at a time",
      "The seven levels as a ladder, with one wolf sorted down it",
      "Two readings of what the groups mean, side by side",
      "A note on how today's books sometimes count the kingdoms differently",
    ] },
  eyebrow: ["Life Science", "U7-L2", "Sorting and Naming Living Things"],
  dek: "Four questions can place almost any living thing in one of five kingdoms. Then seven levels take it all the way down to a single species.",

  scripture: {
    ref: "Psalm 104:24",
    text: "O LORD, how manifold are thy works! in wisdom hast thou made them all: the earth is full of thy riches.",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Your student names the five kingdoms and the questions that tell them apart, tells prokaryotes from eukaryotes, and sorts one animal through the seven levels from kingdom to species."
      ]},
      { h: "Side by Side, Not Blended", p: [
        "Classification is a tool for sorting and finding, and both accounts of origins use it the same way. Most science courses also treat the groups as a family tree. The lesson states that reading in one short section and states the other reading beside it: the same patterns of likeness read as one Designer's plan.",
        "Your student is not asked which to hold. The questions are about the kingdoms and the levels."
      ]},
      { h: "Key Concepts", p: [
        "A kingdom is decided by four questions: does it have a nucleus, is it one cell or many, does it make its own food, and does it move.",
        "The seven levels run from the broadest, kingdom, to the narrowest, species. Each step down has more in common and fewer kinds of living thing."
      ]},
      { h: "Added From the Record", p: [
        "That many books today count six kingdoms or three domains, the wolf's middle levels, that some fungi are single-celled, the nucleus described as a control room, and one sentence on how people who hold creation fit the Bible's kinds against the seven levels are added from the record. The word phylogeny and the white rhino example are left out on purpose: the rhino claim is out of date, since northern and southern white rhinos are now treated as distinct."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "The Music Store", s: [
      "Walk into a music store and nothing is thrown on the shelves at random.",
      "The albums are sorted by type of music first, then by the artist inside each type, and then by the title of each album.",
      "That way you can find one song in a few seconds out of thousands, and scientists sort living things the same way."
    ]},

    { title: "Where We Left Off", s: [
      "Last lesson you learned that Linnaeus gave every living thing a two-word name, with the genus first and the species second.",
      "You also learned that a kingdom is the largest group, and a species is the smallest.",
      "This lesson fills in the steps between them, starting with how a living thing gets into a kingdom."
    ]},

    { title: "Four Questions", s: [
      "Aristotle and Linnaeus sorted by what they could see, but today scientists also look at genes, fossils and DNA.",
      "You can place almost any living thing in one of five kingdoms by asking four questions about it.",
      "First, does it have a {{nucleus}}, which is the control room of a cell, the part that holds its instructions?",
      "Second, is it made of one cell or many, third, does it make its own food, and fourth, does it move?",
      "",
      "[walk] Run the four questions on a mushroom.",
      "[step] A mushroom answers yes to the first question, because its cells have a nucleus. || nucleus?  YES",
      "[step] A mushroom is mostly many cells, so the second answer is many. || nucleus?  YES\ncells?  MANY",
      "[step] It does not make its own food, because it gets food from other living or dead things. || nucleus?  YES\ncells?  MANY\nown food?  NO",
      "[step] It does not move, because it stays where it grows. || nucleus?  YES\ncells?  MANY\nown food?  NO\nmoves?  NO",
      "[step] A many-celled living thing with a nucleus that can't make its own food or move belongs in the Fungi. || kingdom:  FUNGI"
    ]},

    { title: "With a Nucleus and Without", s: [
      "Some cells have no walled-off control room at all, and their instructions just float inside.",
      "Cells like that are called {{prokaryotes}}, which comes from words meaning “before kernel,” and bacteria are the example.",
      "Every other living thing is made of {{eukaryotes}}, cells with a true nucleus and parts wrapped in a thin skin, which comes from words meaning “true kernel.”",
      "Nearly everything you can see without a microscope is made of eukaryotic cells."
    ]},

    { title: "The Five Kingdoms", s: [
      "Now you can fill in the whole list, and each row follows from the four questions.",
      "Read each row as the answers to those questions for one kingdom, and watch the table grow.",
      "",
      "[walk] Build the table of the five kingdoms.",
      "[step] Monera are the simplest, one-celled living things like bacteria, with no nucleus. || " + table(KINGDOMS.slice(0, 2)),
      "[step] Protists may be one-celled or many-celled, and they are a catch-all group for living things that fit nowhere else. || " + table(KINGDOMS.slice(0, 3)),
      "[step] Fungi, like mushrooms, mostly have many cells, and they don't move and get their food from other things. || " + table(KINGDOMS.slice(0, 4)),
      "[step] Plants have many cells, and they don't move and make their own food. || " + table(KINGDOMS.slice(0, 5)),
      "[step] Animals have many cells, and they move and eat plants or other animals. || " + table(KINGDOMS),
      "",
      "Some fungi, like the yeast used to bake bread, are single cells, which is why the table says mostly.",
      "Almost every group has a few exceptions like that, so the table gives the usual case."
    ]},

    { title: "Not Everyone Counts Five", s: [
      "The five-kingdom system is the one this course follows, and it was a standard one in 1994.",
      "Many books today count six kingdoms by splitting the bacteria into two, and others put the kingdoms inside three even bigger groups called domains.",
      "The sorting questions still work, so what you learn here carries over to whichever count your next book uses."
    ]},

    { title: "Seven Levels Down", s: [
      "Inside every kingdom there are smaller groups, always in the same order, like the music store narrowing from type to artist to title.",
      "The order is kingdom, {{phylum}}, class, order, family, genus and species, and in plants and fungi the phylum is called a division.",
      "A trick to remember it is King Philip Came Over For Good Soup, taking the first letter of each level.",
      "Each step down holds fewer kinds of living thing, and the ones left have more in common."
    ]},

    { title: "One Wolf, Seven Levels", s: [
      "Now sort one animal all the way down, starting from the biggest group.",
      "At every step the group gets smaller, so the table will gain a row each time.",
      "",
      "[walk] Classify the Arctic wolf, and watch the ladder grow a row at each step.",
      "[step] The wolf has a nucleus, many cells, can't make its own food and moves, so its kingdom is the animals. || " + table(WOLF.slice(0, 2)),
      "[step] Go one level down, and the wolf is placed with the animals that have a backbone. || " + table(WOLF.slice(0, 3)),
      "[step] The next group is the hairy animals that feed their young milk, which is the mammals. || " + table(WOLF.slice(0, 4)),
      "[step] Then comes the meat-eating mammals. || " + table(WOLF.slice(0, 5)),
      "[step] Inside them is the dog family. || " + table(WOLF.slice(0, 6)),
      "[step] The genus is the group of wolves, dogs and their closest kin. || " + table(WOLF.slice(0, 7)),
      "[step] The species is the wolf itself, which gives it the two-word name you learned last lesson. || " + table(WOLF),
      "",
      "Check that the ladder narrowed at every step, ending with the wolf's closest relative, the dog, Canis familiaris, in the same genus.",
      "The wolf and the dog share every level down to the genus, and only the species word is different."
    ]},

    { title: "What the Groups Mean", s: [
      "The levels are a tool for sorting and finding, and a person who holds either account of origins uses them the same way.",
      "What the world says is that the groups are a family tree, with each level closer to a shared ancestor, so animals in the same genus are closer relatives than animals in the same order.",
      "What God tells us is that the same patterns of likeness show one Designer using a good plan again and again, and people who hold this view don't all agree on where the Bible's “kinds” fit among the seven levels.",
      "",
      "[verse] Psalm 104:24 says, “O LORD, how manifold are thy works! in wisdom hast thou made them all: the earth is full of thy riches.”",
      "",
      "Both sides count the same kingdoms, the same levels and the same wolf, and the questions below only ask you to do the sorting.",
      "The sorting is the same job whichever account you hold."
    ]}
  ],

  todo: { title: "What To Do Now", s: [
      "A music store, a set of sorting questions and a wolf taken all the way down, and now you sort something yourself.",
      "Start with the questions, {Q} of them, and then the vocabulary check at the bottom, {v} questions on the word cards at the top of the page.",
      "When a question asks which kingdom something belongs in, run the sorting questions from the lesson in order and don't guess.",
      "Then, in your notebook, pick an animal or plant that lives near you, and write its kingdom and as many of the seven levels as you can find in a book or on a trusted website.",
      "Write them in order from kingdom down to species in complete sentences, and say which level was the hardest to find.",
      "Last, open the Homework Sheet with the button at the bottom of the page, and either fill it out right on the screen or print it and do it on paper."
  ] },

  words: [
    ["Nucleus", "The control room of a cell, the part that holds its instructions.", 8],
    ["Prokaryote", "A living thing whose cells have no walled-off nucleus, such as a bacterium.", 17],
    ["Eukaryote", "A living thing whose cells have a true nucleus and parts wrapped in a thin skin.", 18],
    ["Phylum", "The level just below kingdom. In plants and fungi it is called a division.", 34]
  ],

  findsAt: 55,
  questions: [
    { q: "Which of these is one of the four questions used to sort living things into kingdoms?",
      find: [9],
      hint: "Read Four Questions.",
      choices: [
        "Does it live in water?",
        "Does it make its own food?",
        "How old is it?",
        "How big is it?"
      ], right: 1 },

    { q: "What is the nucleus of a cell?",
      find: [8],
      hint: "Read Four Questions.",
      choices: [
        "The outside skin of the cell",
        "The control room that holds the cell's instructions",
        "A kind of food",
        "A group of cells"
      ], right: 1 },

    { q: "What is a prokaryote?",
      find: [17],
      hint: "Read With a Nucleus and Without.",
      choices: [
        "A living thing whose cells have a true nucleus",
        "A kind of fungus",
        "A living thing whose cells have no walled-off nucleus, such as a bacterium",
        "A group of related animals"
      ], right: 2 },

    { q: "A tree has many cells with a nucleus, it doesn't move, and it makes its own food. Which kingdom is it in?",
      find: [26],
      hint: "Look at the table in The Five Kingdoms.",
      choices: [
        "Animals",
        "Fungi",
        "Monera",
        "Plants"
      ], right: 3 },

    { q: "A mushroom doesn't move and can't make its own food. Which kingdom is it in?",
      find: [15],
      hint: "Read the mushroom walk in Four Questions.",
      choices: [
        "Plants",
        "Animals",
        "Monera",
        "Fungi"
      ], right: 3 },

    { q: "What does the lesson say about the five-kingdom system?",
      find: [30],
      hint: "Read Not Everyone Counts Five.",
      choices: [
        "It is the only system anyone has ever used",
        "It is the one this course follows, and many books today count six kingdoms or three domains",
        "It was never used",
        "It has no levels inside the kingdoms"
      ], right: 1 },

    { q: "Which is the correct order of the levels, from the biggest group to the smallest?",
      find: [34],
      hint: "Read Seven Levels Down.",
      choices: [
        "Species, genus, family, order, class, phylum, kingdom",
        "Kingdom, class, phylum, order, family, genus, species",
        "Kingdom, phylum, class, order, family, genus, species",
        "Kingdom, phylum, order, class, family, species, genus"
      ], right: 2 },

    { q: "Which group holds more kinds of living things, a genus or an order?",
      find: [36],
      hint: "Read Seven Levels Down, and think about the ladder.",
      choices: [
        "A genus",
        "They hold the same number",
        "An order",
        "It depends on the animal"
      ], right: 2 },

    { q: "In the wolf walk, why is the wolf an animal and not a plant?",
      find: [40],
      hint: "Read One Wolf, Seven Levels.",
      choices: [
        "It makes its own food.",
        "It doesn't move.",
        "It has no nucleus.",
        "It moves and can't make its own food."
      ], right: 3 },

    { q: "What does the lesson say people who hold common descent and people who hold creation share when it comes to classification?",
      find: [53],
      hint: "Read What the Groups Mean.",
      choices: [
        "They disagree about every kingdom.",
        "They use the same kingdoms, levels and sorting, and read what the groups mean differently.",
        "They both reject the levels.",
        "They agree about where the Bible's kinds fit."
      ], right: 1 }
  ],

  vocabQuestions: [
    { q: "What is a <i>nucleus</i>?",
      choices: [
        "The control room of a cell, the part that holds its instructions",
        "A kind of bacterium",
        "The skin of a cell",
        "A fossil"
      ], right: 0 },
    { q: "What is a <i>prokaryote</i>?",
      choices: [
        "A living thing whose cells have no walled-off nucleus",
        "A living thing with many cells",
        "A kind of animal",
        "A plant with no leaves"
      ], right: 0 },
    { q: "What is a <i>eukaryote</i>?",
      choices: [
        "A living thing with no nucleus",
        "A kind of bacterium",
        "A living thing whose cells have a true nucleus and parts wrapped in a thin skin",
        "A fossil"
      ], right: 2 },
    { q: "Which level comes right after <i>kingdom</i>?",
      choices: [
        "Species",
        "Phylum",
        "Genus",
        "Order"
      ], right: 1 }
  ]
};
