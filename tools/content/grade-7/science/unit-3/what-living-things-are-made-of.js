/* science/what-living-things-are-made-of
   Grade 7 · science · unit 3. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 THE PROSE IN `parts` IS A DRAFT, NOT PAUL'S VOICE. Built 2026-09-19 by Sonnet
   from the Merrill spread (pp54-57), then given the /natural pass. His prose is
   still the source → BEHAVIOR.md. */
'use strict';
module.exports = {
  id: "science/what-living-things-are-made-of",
  slug: "what-living-things-are-made-of",
  title: "What Living Things Are Made Of",
  unit: "Life Science &middot; U3-L1",
  seq: { unit: 3, unitTitle: "How Cells Work", n: 1 },

  /* ── /teach-plan, 2026-09-19. Read off Merrill Life Science (Glencoe 1994)
        pp54-57, archive.org/details/merrilllifescien0000dani. ── */
  plan: {
    objective: "Build up from the atom to the molecule, and tell the two kinds of compounds in living things apart: inorganic and organic.",
    markers: [
      "QUOTED, Objectives box: 'Describe differences among atoms, elements, molecules, and compounds.'",
      "QUOTED, Objectives box: 'Recognize the relationship between chemistry and life science.'",
      "QUOTED, Objectives box: 'Compare inorganic and organic compounds.'",
      "QUOTED, New Science Words: carbohydrates, lipids, proteins, enzymes, nucleic acids",
      "QUOTED, definition: 'When something is made up of only one kind of atom, it is called an element.'",
      "QUOTED, definition: 'When atoms of two or more elements are joined, or bonded together, a compound is formed.'",
      "QUOTED, definition: 'A molecule is the smallest part of a compound with all the properties of that compound.'",
      "QUOTED, 'Most compounds containing carbon are organic compounds.' / 'Four groups of organic compounds make up all living things.'",
      "QUOTED, SECTION REVIEW 1: 'How are atoms different from molecules?'",
    ],
    method: "A LADDER, BUILT UP ONE RUNG AT A TIME: atom, element, compound, molecule, and then a split of the compounds in living things into two families. The book uses water (H2O) as the running example and glucose as the second, so the student sees the same idea twice.",
    exampleOnly: [
      "the fireflies and the oxygen atom - WORLD: the opening picture, not content to memorise",
      "water (H2O) and glucose (C6H12O6) - WORLD: two examples of a compound, not the definition of one",
      "salt water, salad dressing and blood - WORLD: examples of a solution and a suspension; the two words are book detail, not a question here",
      "the periodic table and Table 3-1's percentages - WORLD: the book's skill builder, not tested",
    ],
    digitize: "The existing reading engine. The ladder maps to the story, the question hunts point at each rung.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Science",
    blurb: "Everything you're made of is built from a small handful of pieces. Start with the atom and climb to the four kinds of molecules that make up every living thing.",
    contains: [
      "A story-form reading, read aloud with the words highlighted",
      "Nine words, each one defined inside the reading",
      "Six questions with the answer findable in the text",
      "Five vocabulary questions on the word cards",
    ] },
  eyebrow: ["Life Science", "U3-L1", "How Cells Work"],
  dek: "A firefly and you are built from the same small handful of pieces. Here's how they stack up, from the atom to the four kinds of molecules that make up every living thing.",
  scripture: {
    ref: "Genesis 2:7",
    text: "And the LORD God formed man of the dust of the ground, and breathed into his nostrils the breath of life; and man became a living soul.",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will learn how atoms build up into elements, compounds and molecules, and then see how the compounds in living things divide into inorganic and organic."
      ]},
      { h: "Key Concepts", p: [
        "Matter is anything with mass that takes up space. It is made of atoms, and an element is one kind of atom. When atoms of two or more elements bond together they make a compound, and the smallest piece of a compound that still acts like it is a molecule.",
        "Compounds in living things come in two families. Organic compounds contain carbon and make up foods and cell membranes, and they fall into four groups: carbohydrates, lipids, proteins and nucleic acids. Most inorganic compounds are made from elements other than carbon, and water is the most important one."
      ]},
      { h: "Teaching Suggestion", p: [
        "Keep the ladder in order: atom, element, compound, molecule. A student who has the order can rebuild any definition from it.",
        "Water is the example the book uses to hold the whole lesson together, so come back to it every time a new word appears."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Everything Is Matter", s: [
      "Ask a scientist what makes up the universe and you'll probably hear that it's matter and energy.",
      "Matter is anything that has mass and takes up space, and that covers the air, the page you're reading, and the fireflies that blink outside on a summer night.",
      "You're made of matter too, so this lesson starts by asking what matter is made of."
    ]},
    { title: "The Atom", s: [
      "Matter exists in the form of tiny units called atoms, and at the center of an atom is a nucleus that holds two kinds of particles.",
      "A proton has a positive charge, a neutron has no charge at all, and outside the nucleus there are electrons, which are negatively charged.",
      "Energy in matter is locked in the chemical bonds that hold atoms together, and when a firefly's bonds are broken the energy comes out as light."
    ]},
    { title: "Elements, Compounds and Molecules", s: [
      "When something is made of only one kind of atom, it's called an element, and an element can't be broken down into anything simpler.",
      "Oxygen is one, made up of only oxygen atoms, and hydrogen is another, and each has its own symbol; there are more than ninety elements on Earth, and everything is made of one or a combination of them.",
      "When atoms of two or more elements are joined, or bonded together, a compound is formed.",
      "Water is a compound made of hydrogen and oxygen, with two atoms of hydrogen for every atom of oxygen, which is why its formula is H2O.",
      "A molecule is the smallest part of a compound that still has all the properties of that compound, and glucose, the sugar cells use for energy, is a compound whose formula is C6H12O6."
    ]},
    { title: "Why Molecules Matter", s: [
      "Living things are full of molecules, in cell membranes, in cytoplasm, and in every other substance a cell holds.",
      "During its lifetime a cell puts many of them together and breaks many of them apart, to build new cell parts and to supply itself with energy.",
      "Many of these molecules are dissolved in the cytoplasm, and that makes the cytoplasm a solution, which is a mixture where one substance spreads evenly through another."
    ]},
    { title: "Two Families of Compounds", s: [
      "Compounds in living things are sorted into two families, organic and inorganic.",
      "Most compounds that contain carbon are organic, and they make up your foods and your cell membranes.",
      "Most inorganic compounds are made from elements other than carbon, and the most important one is water, which makes up a large part of every living thing.",
      "Water matters so much because substances have to be dissolved in it before a cell can use them, and nutrients and waste both travel through your body in solution."
    ]},
    { title: "The Four Organic Groups", s: [
      "Four groups of organic compounds make up every living thing: carbohydrates, lipids, proteins and nucleic acids.",
      "Carbohydrates are made of carbon, hydrogen and oxygen, and sugars and starch are examples, and lipids, which are fats, oils and waxes, store more energy than carbohydrates do.",
      "Proteins build cell membranes and are made of smaller amino acids, and certain proteins called enzymes speed up chemical reactions in cells without being changed themselves.",
      "Nucleic acids are large molecules that store information, and DNA carries the instructions that direct each cell's activities."
    ]},
    { title: "Dust and Breath", s: [
      "[verse] Genesis 2:7 says, “And the LORD God formed man of the dust of the ground, and breathed into his nostrils the breath of life; and man became a living soul.”",
      "It's a striking thing to read after a lesson on chemistry, because the elements in your body really are the ordinary elements of the ground.",
      "What science tells you about the parts is only half the picture, and the verse holds the other half, which is that a living soul is more than the parts it's built from."
    ]}
  ],

  todo: { title: "What To Do Now", s: [
      "You've just climbed from the atom all the way up to the four groups of organic compounds, so next come the questions.",
      "There are {q} of them, and the answer to each one is in the reading above, so if one is hard, use the bar or the arrows to go back and read that part again.",
      "After that comes the vocabulary check at the bottom, {v} questions on the word cards at the top of the page.",
      "Now try one thing on paper: make a table in your notebook with the three foods you ate yesterday, and next to each one write whether it's mostly a carbohydrate, a lipid or a protein.",
      "If you aren't sure, make your best guess and say why, because guessing and explaining is how a scientist works."
  ] },

  words: [
    ["Atom", "A tiny unit of matter with a nucleus of protons and neutrons and electrons outside it.", 3],
    ["Element", "Something made of only one kind of atom, which can't be broken down into anything simpler.", 6],
    ["Compound", "Two or more elements bonded together.", 8],
    ["Molecule", "The smallest part of a compound with all the properties of that compound.", 10],
    ["Carbohydrates", "Organic compounds made of carbon, hydrogen and oxygen, such as sugars and starch.", 19],
    ["Lipids", "Organic compounds such as fats, oils and waxes, which store more energy than carbohydrates.", 19],
    ["Proteins", "Organic compounds that build cell membranes and are made of amino acids.", 20],
    ["Enzymes", "Proteins that speed up chemical reactions in cells without being changed.", 20],
    ["Nucleic acids", "Large molecules that store information, like DNA.", 21]
  ],

  findsAt: 25,
  questions: [
    { q: "What is an element?", find: [6],
      hint: "Look for the sentence that gives the word and says what it is made of.",
      choices: [
        "Two or more atoms bonded together.",
        "The smallest part of a compound.",
        "Something made of only one kind of atom.",
        "A mixture spread evenly through a liquid."
      ], right: 2 },
    { q: "What is water?", find: [8, 9],
      hint: "The reading uses it as its example of a compound, and gives its formula.",
      choices: [
        "An element made of hydrogen.",
        "A compound of hydrogen and oxygen.",
        "An atom with two electrons.",
        "An organic compound that contains carbon."
      ], right: 1 },
    { q: "What is a molecule?", find: [10],
      hint: "The reading says it is the smallest part of something.",
      choices: [
        "The smallest part of a compound with all its properties.",
        "A single proton.",
        "A mixture of two liquids.",
        "The center of an atom."
      ], right: 0 },
    { q: "Why is water so important to living things?", find: [16, 17],
      hint: "Look for what has to happen to a substance before a cell can use it.",
      choices: [
        "Because it contains carbon.",
        "Because it is the only inorganic compound.",
        "Because cells eat it.",
        "Because substances have to be dissolved in it before a cell can use them."
      ], right: 3 },
    { q: "How do organic and inorganic compounds differ?", find: [15, 16],
      hint: "It comes down to one element.",
      choices: [
        "Organic compounds contain carbon, and most inorganic compounds are made from other elements.",
        "Organic compounds are always liquids.",
        "Inorganic compounds are only found in rocks.",
        "Organic compounds contain no atoms."
      ], right: 0 },
    { q: "What do enzymes do?", find: [20],
      hint: "They are one kind of protein.",
      choices: [
        "They store information.",
        "They speed up chemical reactions in cells without being changed.",
        "They store the most energy.",
        "They make up the nucleus."
      ], right: 1 }
  ],

  vocabQuestions: [
    { q: "What is a <i>compound</i>?",
      choices: [
        "Something made of only one kind of atom.",
        "Two or more elements bonded together.",
        "The center of an atom.",
        "A group of similar cells."
      ], right: 1 },
    { q: "Which of these is a <i>carbohydrate</i>?",
      choices: [
        "Sugar or starch.",
        "DNA.",
        "An enzyme.",
        "A wax."
      ], right: 0 },
    { q: "What do <i>lipids</i> do?",
      choices: [
        "They speed up reactions.",
        "They carry genetic information.",
        "They store more energy than carbohydrates do.",
        "They dissolve substances."
      ], right: 2 },
    { q: "What are <i>nucleic acids</i> for?",
      choices: [
        "Storing energy as a sugar.",
        "Building cell walls.",
        "Speeding up reactions.",
        "Storing information, such as the instructions in DNA."
      ], right: 3 },
    { q: "What is an <i>atom</i>?",
      choices: [
        "A tiny unit of matter, with a nucleus of protons and neutrons and electrons outside it.",
        "The smallest part of a compound.",
        "A mixture of substances.",
        "A cell part."
      ], right: 0 }
  ]
};
