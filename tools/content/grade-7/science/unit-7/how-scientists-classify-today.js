/* science/how-scientists-classify-today
   Grade 7 · science · unit 7 (book unit 7, "Classification of Living Things",
   shelved as "Sorting and Naming Living Things"), lesson 2. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 THE PROSE IN `parts` IS A DRAFT, NOT PAUL'S VOICE. DRAFT PROSE, CLAUDE'S,
   2026-10-11, Sonnet. Written from Merrill Life Science pp160-163 (Section 7-2,
   Modern Classification) via the week 8-9 packet (paraphrased notes) and the
   week 8-9 plan. Structure copied from science/what-evolution-claims.

   🚨 THIS LESSON TOUCHES THE ORIGINS RULE ONCE (BEHAVIOR.md, side by side). The
   book defines phylogeny as an organism's evolutionary history and says
   scientists use it to classify. The lesson teaches the five kingdoms and the
   seven levels as a tool for sorting and finding, which both accounts use. It
   names the textbook's reading of the groups (a family tree) and the other
   reading (one Designer's patterns, with the Bible's "kinds" not matching one
   level) in one paragraph, side by side, never blended, and never asks the
   student which to hold.

   ⚠️ ADDED FROM THE RECORD, worth a glance from Paul:
   · That many books today use six kingdoms (the monerans split into two) or
     three domains. The plan asks for this to be said. The packet gives only
     the 1994 five-kingdom system.
   · The middle levels of the Arctic wolf's classification (Animalia, Chordata,
     Mammalia, Carnivora, Canidae). The packet gives only the genus and species,
     Canis lupus. The dog as the wolf's closest relative (Canis familiaris) is
     from the book's Chapter 7 Review.
   · That some single-celled fungi exist (yeast). The book's table says fungi
     are many-celled; the lesson says "mostly".
   · One sentence on how people who hold creation read the "kinds" of Genesis
     against the seven levels, stated as a difference among them, not argued.
   ⚠️ The book's Activity 7-2 (using a jay key), Technology feature on DNA and
   the Connect to Chemistry box are not in this lesson (the jay key is taught in
   7-4).

   🚨 THE VERSE IS A WORKING CHOICE, NOT PAUL'S. Psalm 104:24, about the many
   works of God. Choosing the scripture is his, so it goes in the review queue. */
'use strict';
module.exports = {
  id: "science/how-scientists-classify-today",
  slug: "how-scientists-classify-today",
  title: "How Scientists Classify Today",
  unit: "Life Science &middot; U7-L2",
  seq: { unit: 7, unitTitle: "Sorting and Naming Living Things", n: 2 },
  natural: "2026-10-11",

  /* ── /teach-plan, 2026-10-11. Merrill Life Science pp160-163. ── */
  plan: {
    objective: "Name the five kingdoms and how each is told apart, tell prokaryotes from eukaryotes, and sort one animal down through the seven levels from kingdom to species.",
    markers: [
      "BOOK (paraphrased), Objectives: name the five kingdoms, identify the characteristics and members of each, and list the groups within each kingdom.",
      "BOOK (paraphrased): Aristotle and Linnaeus used traits you can see. Modern scientists also use chemical makeup, genes, body structures, fossils and embryo development to work out phylogeny, an organism's evolutionary history.",
      "BOOK (paraphrased), Beyond Appearances: DNA shows how close two organisms are and separates look-alike species. White rhinos in North and South Africa, 2,000 miles apart, are genetically the same, and the gray foxes on islands off California differ from each other.",
      "BOOK (paraphrased): the five kingdoms are Animal, Plant, Fungi, Protist and Monera, told apart by four questions: does it have a nucleus, is it one cell or many, does it make its own food, does it move.",
      "BOOK (paraphrased): Monera are one-celled and simple, such as bacteria, with no organized nucleus, and they are prokaryotes. Everything else has a nucleus and membrane-bound parts, and is a eukaryote.",
      "BOOK (paraphrased), Table 7-1: Monera are prokaryotic and one-celled. Protists are eukaryotic, one- or many-celled. Fungi are eukaryotic, do not move, and get their food from other organisms. Plants are eukaryotic, many-celled, do not move and make their own food. Animals are eukaryotic, many-celled, move and eat plants or other animals.",
      "BOOK (paraphrased): each kingdom has six smaller groups in order: phylum (division in plants and fungi), class, order, family, genus, species. Each level has more in common and fewer organisms. The Arctic wolf is genus Canis, species Canis lupus.",
    ],
    method: "FOUR QUESTIONS, THEN SEVEN LEVELS. The kingdoms are sorted by four yes-or-no questions, so the student can place an organism himself. The levels are taught as a funnel that gets narrower with more in common at each step, using the music store (type, then artist, then title), and the walk sorts one animal, the Arctic wolf, from kingdom to species with a reason at each step. Where the book says the groups show evolutionary history, the lesson states that reading and the other one side by side.",
    exampleOnly: [
      "The music store and the Arctic wolf. WORLD: a music store sorted by type, artist and title. The title and objective don't name them.",
      "⚠️ Six kingdoms or three domains, the wolf's middle levels and the sentence on the Genesis 'kinds' are added from the record, see the header.",
    ],
    digitize: "The reading engine plus one Watch It Worked that classifies the Arctic wolf down the seven levels. Questions place organisms in kingdoms by the four questions and put the levels in order. The one question about meaning asks what each account says, not which is right.",
    unclear: "",
  },

  sheet: { slug: "how-scientists-classify-today-homework", subject: "science",
    note: "Do it on screen or print it. Your score shows here once you check it." },

  video: { id: "DVouQRAKxYo", title: "Classification", channel: "Amoeba Sisters",
    why: "Walks down the levels from the biggest group to a single species with drawings, which helps if the order of the seven levels keeps slipping." },

  shelf: { grades: [7], subject: "Science",
    blurb: "A music store sorts its albums by type, then artist, then title, and scientists sort living things the same way. Five kingdoms, seven levels, and one wolf taken all the way down.",
    contains: [
      "A story-form reading, read aloud with the words highlighted",
      "Four questions that sort living things into five kingdoms",
      "Cells with a nucleus and cells without one",
      "Watch It Worked: classifying one animal down the seven levels",
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
        "Students will name the five kingdoms and the questions that tell them apart, tell prokaryotes from eukaryotes, and sort one animal through the seven levels from kingdom to species."
      ]},
      { h: "Side by Side, Not Blended", p: [
        "Classification is a tool for sorting and finding, and both accounts of origins use it the same way. The textbook also treats the groups as a record of evolutionary history, which it calls phylogeny. The lesson states that reading in one paragraph and states the other reading beside it: the same patterns of likeness read as one Designer's plan.",
        "The student is not asked which to hold. The questions are about the kingdoms and the levels."
      ]},
      { h: "Key Concepts", p: [
        "A kingdom is decided by four questions: does it have a nucleus, is it one cell or many, does it make its own food, and does it move.",
        "The seven levels run from the broadest, kingdom, to the narrowest, species. Each step down has more in common and fewer organisms."
      ]},
      { h: "Added From the Record", p: [
        "That many books today count six kingdoms or three domains, the wolf's middle levels, that some fungi are single-celled, and one sentence on how people who hold creation fit the Bible's kinds against the seven levels are added from the record. The book's own parts are the four questions, the five kingdoms, the prokaryote and eukaryote split, the seven levels and the wolf's genus and species."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "The Music Store", s: [
      "Walk into a music store and nothing is thrown on the shelves at random.",
      "The albums are sorted by type of music first, then by the artist inside each type, and then by the title of each album, so you can find one song in a few seconds out of thousands.",
      "Scientists sort living things the same way, narrowing from a huge group to a single kind, and this lesson shows you the steps."
    ]},

    { title: "More Than What You Can See", s: [
      "Aristotle and Linnaeus used the traits they could see with their own eyes, like size, shape and where something lives.",
      "Today scientists look at those and a lot more, including the chemical makeup of an organism, its genes, its body structures, its fossils and how its embryo develops.",
      "The book uses the word {{phylogeny}} for an organism's evolutionary history, and says scientists use it to work out where each group belongs.",
      "DNA has settled some puzzles, because it can separate two species that look the same, and it showed that white rhinos in North and South Africa, 2,000 miles apart, are genetically the same."
    ]},

    { title: "Four Questions", s: [
      "You can place almost any living thing into one of five kingdoms by asking four questions about it.",
      "Does it have a nucleus, which is the part of a cell that holds its genetic material?",
      "Is it made of one cell or many, does it make its own food, and does it move?",
      "The answers send it to the Animal, Plant, Fungi, Protist or Monera kingdom, and the walk below shows how an animal gets there."
    ]},

    { title: "With a Nucleus and Without", s: [
      "The Monera are the simplest, one-celled living things like bacteria, and their cells have no organized nucleus and none of the membrane-bound parts you met in the cell units.",
      "Cells like that are called {{prokaryotes}}, which comes from words meaning “before kernel.”",
      "Every other kingdom is made of {{eukaryotes}}, cells with a true nucleus and parts wrapped in a membrane, which comes from words meaning “true kernel.”",
      "Nearly everything you can see without a microscope is made of eukaryotic cells."
    ]},

    { title: "The Five Kingdoms", s: [
      "The Monera kingdom holds the bacteria, which are one-celled and prokaryotic, and some make their own food while others absorb it from what's around them.",
      "The Protists are eukaryotes that may be one-celled or many-celled, and the book treats them as a catch-all group for living things that fit nowhere else.",
      "The Fungi, such as mushrooms, are eukaryotes that don't move and can't make their own food, and they get it from other living or dead things.",
      "The Plants are many-celled eukaryotes that don't move and make their own food, and the Animals are many-celled eukaryotes that move and eat plants or other animals."
    ]},

    { title: "Not Everyone Counts Five", s: [
      "The five-kingdom system is the one this textbook uses, and it was a standard one in 1994.",
      "Many books today count six kingdoms by splitting the bacteria into two, and others put the kingdoms inside three even bigger groups called domains.",
      "The sorting questions still work, and the levels inside each kingdom are the same, so what you learn here carries over to whichever count your next book uses."
    ]},

    { title: "Seven Levels Down", s: [
      "Inside every kingdom there are smaller groups, always in the same order.",
      "The order is kingdom, {{phylum}}, class, order, family, genus and species, with the phylum called a division in plants and fungi.",
      "A student's trick is to remember it as King Philip Came Over For Good Soup, taking the first letter of each level.",
      "Each step down holds fewer organisms and each has more in common, like the music store narrowing from type to artist to title."
    ]},

    { title: "Watch It Worked: One Wolf, Seven Levels", s: [
      "[walk] Classify the Arctic wolf, starting from the biggest group and working down.",
      "[step] Use the four questions to find the kingdom: the wolf has a nucleus, many cells, can't make its own food and moves, so it is an animal. || Kingdom: Animalia",
      "[step] Go one level down to the phylum, and the wolf is placed with the animals that have a backbone. || Phylum: Chordata",
      "[step] The class is the group of hairy animals that feed their young milk, which is the mammals. || Class: Mammalia",
      "[step] The order is the meat-eating mammals, and the family is the dog family inside it. || Order: Carnivora\nFamily: Canidae",
      "[step] The genus is the group of wolves, dogs and their closest kin, and the species is the wolf itself, which gives the two-word name. || Genus: Canis\nSpecies: Canis lupus",
      "[step] Check that the funnel narrowed at every step, ending with the wolf's closest relative in the book, the dog, Canis familiaris, in the same genus. || Canis lupus (wolf) and Canis familiaris (dog)"
    ]},

    { title: "What the Groups Mean", s: [
      "The levels are a tool for sorting and finding, and a person who holds either account of origins uses them the same way.",
      "The book also reads the groups as a family tree, with each level closer to a shared ancestor, so animals in the same genus are closer relatives than animals in the same order.",
      "People who hold creation read the same patterns of likeness as one Designer using a good plan again and again, and they don't all agree on where the Bible's “kinds” fit among the seven levels.",
      "",
      "[verse] Psalm 104:24 says, “O LORD, how manifold are thy works! in wisdom hast thou made them all: the earth is full of thy riches.”",
      "",
      "Both sides count the same kingdoms, the same levels and the same wolf, and the questions below only ask you to do the sorting."
    ]}
  ],

  todo: { title: "What To Do Now", s: [
      "A music store, a set of sorting questions and a wolf taken all the way down, and now you sort something yourself.",
      "Start with the questions, {Q} of them, and then the vocabulary check at the bottom, {v} questions on the word cards at the top of the page.",
      "When a question asks which kingdom something belongs in, run the sorting questions from the lesson in order and don't guess.",
      "Then, in your notebook, pick an animal or plant that lives near you, and write its kingdom and as many of the seven levels as you can find in a book or on a trusted website.",
      "Write them in order from kingdom down to species in complete sentences, and say which level was the hardest to find.",
      "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] },

  words: [
    ["Phylogeny", "In the textbook, an organism's evolutionary history, used to help decide where it belongs in a classification.", 5],
    ["Prokaryote", "An organism whose cells have no organized nucleus, such as a bacterium.", 12],
    ["Eukaryote", "An organism whose cells have a true nucleus and membrane-bound parts.", 13],
    ["Phylum", "The level just below kingdom. In plants and fungi it is called a division.", 23]
  ],

  findsAt: 38,
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

    { q: "What is a prokaryote?",
      find: [12],
      hint: "Read With a Nucleus and Without.",
      choices: [
        "An organism whose cells have a true nucleus.",
        "A kind of fungus.",
        "An organism whose cells have no organized nucleus, such as a bacterium.",
        "A group of related animals."
      ], right: 2 },

    { q: "A mushroom doesn't move and can't make its own food. Which kingdom is it in?",
      find: [17],
      hint: "Read The Five Kingdoms.",
      choices: [
        "Plant",
        "Animal",
        "Monera",
        "Fungi"
      ], right: 3 },

    { q: "Which kingdom holds many-celled eukaryotes that don't move and make their own food?",
      find: [18],
      hint: "Read The Five Kingdoms.",
      choices: [
        "Plant",
        "Animal",
        "Fungi",
        "Protist"
      ], right: 0 },

    { q: "What does the lesson say about the five-kingdom system?",
      find: [20],
      hint: "Read Not Everyone Counts Five.",
      choices: [
        "It is the only system anyone has used.",
        "It is the textbook's system, and many books today count six kingdoms or three domains.",
        "It was never used.",
        "It has no levels inside the kingdoms."
      ], right: 1 },

    { q: "Which is the correct order of the levels, from the biggest group to the smallest?",
      find: [23],
      hint: "Read Seven Levels Down.",
      choices: [
        "Species, genus, family, order, class, phylum, kingdom.",
        "Kingdom, class, phylum, order, family, genus, species.",
        "Kingdom, phylum, class, order, family, genus, species.",
        "Kingdom, phylum, order, class, family, species, genus."
      ], right: 2 },

    { q: "In the wolf walk, why is the wolf an animal and not a plant?",
      find: [27],
      hint: "Read Watch It Worked and use the Show All button.",
      choices: [
        "It makes its own food.",
        "It doesn't move.",
        "It has no nucleus.",
        "It moves and can't make its own food."
      ], right: 3 },

    { q: "What is the Arctic wolf's scientific name, and what group is the first word?",
      find: [31],
      hint: "Read Watch It Worked.",
      choices: [
        "Canis lupus, and Canis is the genus.",
        "Canis familiaris, and Canis is the species.",
        "Carnivora lupus, and Carnivora is the genus.",
        "Lupus canis, and lupus is the genus."
      ], right: 0 },

    { q: "What does the lesson say people who hold common descent and people who hold creation share when it comes to classification?",
      find: [37],
      hint: "Read What the Groups Mean.",
      choices: [
        "They disagree about every kingdom.",
        "They use the same kingdoms, levels and sorting, and read what the groups mean differently.",
        "They both reject the levels.",
        "They agree about where the Bible's kinds fit."
      ], right: 1 }
  ],

  vocabQuestions: [
    { q: "What is a <i>eukaryote</i>?",
      choices: [
        "An organism with no nucleus.",
        "A kind of bacterium.",
        "An organism whose cells have a true nucleus and membrane-bound parts.",
        "A fossil."
      ], right: 2 },
    { q: "What does <i>phylogeny</i> mean in the textbook?",
      choices: [
        "A group of related plants.",
        "A kind of cell wall.",
        "The name of a kingdom.",
        "An organism's evolutionary history, used to help decide where it belongs."
      ], right: 3 },
    { q: "What is a <i>prokaryote</i>?",
      choices: [
        "An organism whose cells have no organized nucleus.",
        "An organism with many cells.",
        "A kind of animal.",
        "A plant with no leaves."
      ], right: 0 },
    { q: "Which level comes right after <i>kingdom</i>?",
      choices: [
        "Species",
        "Phylum",
        "Genus",
        "Order"
      ], right: 1 }
  ]
};
