/* science/why-we-sort-living-things
   Grade 7 · science · unit 7 (book unit 7, "Classification of Living Things",
   shelved as "Sorting and Naming Living Things"), lesson 1. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 THE PROSE IN `parts` IS A DRAFT, NOT PAUL'S VOICE. DRAFT PROSE, CLAUDE'S,
   2026-10-11, Sonnet. Written from Merrill Life Science pp156-159 (Section 7-1,
   What Is Classification?) via the week 8-9 packet (paraphrased notes) and the
   week 8-9 plan. Structure copied from science/what-evolution-claims.

   This lesson isn't an origins lesson, so there is no two-layer sort. The book
   says a genus is a group of similar species "with common ancestors"; this
   lesson says only "similar species" and leaves ancestry to 7-2, where it is
   handled side by side.

   ⚠️ ADDED FROM THE RECORD, worth a glance from Paul:
   · The dates for Linnaeus (born 1707, his naming system set out in the
     1750s). The packet gives no dates for him.
   · That the packet's cougar and bobcat names (Felis concolor, Felis rufa) are
     older names that have since changed, so this lesson uses only the house
     cat (Felis catus) and the white oak (Quercus alba) as examples. The oak
     comes from the book's Skill Builder, which names Quercus alba.
   ⚠️ The book's Problem Solving page (Whose Shoe?) and Activity 7-1
   (Classifying Seeds) are not in this lesson.

   🚨 THE VERSE IS A WORKING CHOICE, NOT PAUL'S. Genesis 2:19, Adam naming the
   animals. Choosing the scripture is his, so it goes in the review queue. */
'use strict';
module.exports = {
  id: "science/why-we-sort-living-things",
  slug: "why-we-sort-living-things",
  title: "Why We Sort Living Things",
  unit: "Life Science &middot; U7-L1",
  seq: { unit: 7, unitTitle: "Sorting and Naming Living Things", n: 1 },
  natural: "2026-10-11",

  /* ── /teach-plan, 2026-10-11. Merrill Life Science pp156-159. ── */
  plan: {
    objective: "Explain why living things are classified, describe Aristotle's system and where it broke down, and build a two-part scientific name the way Linnaeus's system does.",
    markers: [
      "BOOK (paraphrased), Objectives: give examples showing the need for classification systems, describe Aristotle's system, and explain Linnaeus's system.",
      "BOOK (paraphrased), classify means to group ideas, information or objects by their similarities, as a grocery store groups its dairy aisle. Taxonomy is the science of grouping and naming organisms.",
      "BOOK (paraphrased), Aristotle, more than 2000 years ago, used two kingdoms, plant and animal. Animals were split by where they live (land, water, air) and plants into three groups by size and structure. It had too many exceptions: a frog lives in water and on land, and an apple tree is closer to a rose bush than to a maple.",
      "BOOK (paraphrased), Linnaeus, a Swedish physician and naturalist, grouped by body structures, size, shape, color and how an organism gets food. Binomial nomenclature means a two-word name: the genus first (capital letter), the species second (lowercase), both italic or underlined. The house cat is Felis catus.",
      "BOOK (paraphrased): the species is the smallest, most specific group, and a genus is a group of similar species. Latin was chosen because its words mean the same everywhere and the language doesn't change. No two organisms share a scientific name.",
      "BOOK (paraphrased), Skill Builder: the oaks Quercus alba, Quercus rubra, Quercus suber and Quercus macrocarpa all share a genus.",
    ],
    method: "WHY, THEN WHO, THEN HOW. First the need: you can't find or talk about what you can't sort. Then the two people, Aristotle's two kingdoms and exactly where they failed, then Linnaeus's two-word name. The method that matters is how a scientific name is built, so the walk builds one for the white oak: pick the genus, pick the species, write the genus with a capital and the species in lowercase, and check that the name belongs to one organism only.",
    exampleOnly: [
      "The zoo, the dairy aisle, the frog and the apple tree, the house cat and the oaks. WORLD: sorting at a zoo. The title and objective don't name them.",
      "⚠️ Linnaeus's dates are added from the record, see the header.",
    ],
    digitize: "The reading engine plus one Watch It Worked that builds a scientific name, step by step. Questions check the history and ask the student to write a name correctly. The todo asks him to sort things in his own house and name two organisms.",
    unclear: "",
  },

  video: { id: "kfRBJqpavU0", title: "Taxonomy: How Scientists Classify Living Things", channel: "Miacademy",
    why: "A quick tour of how living things get sorted and named, with the levels drawn out, which helps before the next lesson goes deeper." },

  shelf: { grades: [7], subject: "Science",
    blurb: "A trip to the zoo raises a problem nobody can answer without a system: is it a bird or an insect, a monkey or a bear? How people learned to sort living things, and how every organism got a two-word name.",
    contains: [
      "A story-form reading, read aloud with the words highlighted",
      "Why we classify, and Aristotle's two kingdoms",
      "Where Aristotle's system broke down",
      "Linnaeus and the two-word scientific name",
      "Watch It Worked: building a scientific name, step by step",
      "Why scientific names use Latin",
    ] },
  eyebrow: ["Life Science", "U7-L1", "Sorting and Naming Living Things"],
  dek: "There are millions of kinds of living things, and nobody can keep that many in their head without a system. Here's where the system came from.",

  scripture: {
    ref: "Genesis 2:19",
    text: "And out of the ground the LORD God formed every beast of the field, and every fowl of the air; and brought them unto Adam to see what he would call them: and whatsoever Adam called every living creature, that was the name thereof.",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will explain why living things are classified, describe Aristotle's system and where it failed, and build a scientific name using genus and species."
      ]},
      { h: "A Note on the Side-by-Side Rule", p: [
        "This lesson isn't about origins, so there's no sorting of observed against claimed. The textbook says a genus is a group of similar species with common ancestors. This lesson says only similar species, and the question of what the groupings mean about ancestry is taken up in the next lesson, where both accounts are given in their own words."
      ]},
      { h: "Key Concepts", p: [
        "A classification system is only useful if everyone uses it the same way. That's why the two-word name is fixed: genus first with a capital letter, species second in lowercase.",
        "Aristotle's grouping by habitat was a real attempt, and it failed on the animals that don't fit, like the frog."
      ]},
      { h: "Added From the Record", p: [
        "The dates for Linnaeus are added from the record. The book's own parts are the zoo and the dairy aisle, Aristotle's system and its two exceptions, Linnaeus's two-word names, the house cat, the reasons for Latin and the oak species."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "A Zoo Puzzle", s: [
      "Picture yourself at a zoo, looking at an animal you've never seen, and asking the questions anyone would ask.",
      "Is it a monkey or a bear, and is that creature in the leaves a bird or an insect?",
      "You can only answer those questions because someone, long ago, built a way of sorting living things, and to sort them that way is to {{classify}} them."
    ]},

    { title: "Sorting Is Everywhere", s: [
      "To classify is to group things by how they're alike, and you already do it every day.",
      "A grocery store puts the milk, cheese and yogurt in one aisle and the cereal in another, so you can find what you need without checking every shelf.",
      "Scientists need the same thing on a bigger scale, and the science of grouping and naming living things is called {{taxonomy}}."
    ]},

    { title: "Aristotle's Two Kingdoms", s: [
      "The first person we know of who tried it was Aristotle, a Greek philosopher who lived more than 2,000 years ago.",
      "He put every living thing into one of two big groups, plants and animals, and the largest group in a classification system is called a {{kingdom}}.",
      "Then he split the animals by where they live, on land, in water or in the air, and he split the plants into three groups by their size and structure."
    ]},

    { title: "Where It Broke Down", s: [
      "It was a good start, but the exceptions piled up.",
      "A frog lives in water as a tadpole and on land as an adult, so which group does it belong in?",
      "Plants gave him trouble as well, because trees aren't all closely related, and an apple tree turns out to be more like a rose bush than like a maple tree, though the apple and the maple are both trees.",
      "Grouping by where something lives or how big it is turned out to be too rough, and people went looking for something better."
    ]},

    { title: "Linnaeus", s: [
      "In the 1700s a Swedish doctor and naturalist named Carolus Linnaeus came up with a system that scientists still use.",
      "He grouped living things by their body structures, their size, shape and color, and the way they get their food, instead of by where they live.",
      "He also did something simple that made it work, which was to give every organism a name made of two words."
    ]},

    { title: "Two Names for Everything", s: [
      "A name with two parts is called {{binomial nomenclature}}, and “binomial” means two names.",
      "The first word is the {{genus}}, a group of similar species, and it's written with a capital letter.",
      "The second word is the {{species}}, the smallest and most specific group, and it's written in lowercase, and both words are written in italics or underlined.",
      "Your house cat is Felis catus, and the white oak is Quercus alba, which shares a genus with the red oak, Quercus rubra, so you know right away the two trees are close relatives."
    ]},

    { title: "Watch It Worked: Building a Scientific Name", s: [
      "[walk] Build the scientific name for the white oak, a tree in the oak genus.",
      "[step] Start with the genus, the name of the group of similar species the tree belongs to, which for every oak is Quercus. || Genus: Quercus",
      "[step] Add the species, the second and more specific name, which for the white oak is alba. || Species: alba",
      "[step] Capitalize the genus and keep the species in lowercase, because the rule is never to capitalize both. || Quercus alba",
      "[step] Mark both words as italic or underline them, and then check that no other living thing carries the same two-word name. || Quercus alba  (italic or underlined)\nThe red oak is Quercus rubra: same genus, different species"
    ]},

    { title: "Why Latin", s: [
      "Linnaeus wrote the names in Latin, and there's a good reason for it.",
      "Latin was understood by scholars everywhere, so a name meant the same thing in every country, and since no one speaks it every day, its words don't change.",
      "No two organisms may share a scientific name, which means that when a scientist in Texas and one in Japan write Felis catus, they're talking about exactly the same animal."
    ]},

    { title: "Naming", s: [
      "Giving names to living things is a very old job, and the Bible's second chapter describes the first time it was done.",
      "",
      "[verse] Genesis 2:19 says, “And out of the ground the LORD God formed every beast of the field, and every fowl of the air; and brought them unto Adam to see what he would call them: and whatsoever Adam called every living creature, that was the name thereof.”",
      "",
      "People have been sorting and naming ever since, and Linnaeus gave that job a set of rules that every scientist can follow.",
      "The next lesson shows how the groups stack up, from the biggest kingdom down to a single species."
    ]}
  ],

  todo: { title: "What To Do Now", s: [
      "A zoo, a dairy aisle and a Swedish doctor with a two-word system, and now it's your turn to sort and name.",
      "Start with the questions, {Q} of them, and then the vocabulary check at the bottom, {v} questions on the word cards at the top of the page.",
      "When a question asks you to write a scientific name, remember the genus comes first with a capital letter and the species second in lowercase.",
      "Then, in your notebook, find ten things in your house or yard and sort them into groups by how they're alike.",
      "Write the name of each group and what makes the things in it alike, in complete sentences.",
      "Last, choose two living things you know and write a two-part name for each, with the genus capitalized and the species in lowercase, and tell why you picked those two words.",
      "If the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] },

  words: [
    ["Classify", "To group ideas, information or objects by how they are alike.", 2],
    ["Taxonomy", "The science of grouping and naming living things.", 5],
    ["Kingdom", "The largest group in a classification system.", 7],
    ["Binomial nomenclature", "A two-word naming system, with the genus first and the species second.", 16],
    ["Genus", "A group of similar species. Its name is the first word of a scientific name.", 17],
    ["Species", "The smallest, most specific group. Its name is the second word of a scientific name.", 18]
  ],

  findsAt: 32,
  questions: [
    { q: "What does it mean to classify something?",
      find: [3],
      hint: "Read Sorting Is Everywhere.",
      choices: [
        "To count how many there are.",
        "To group things by how they're alike.",
        "To give something a nickname.",
        "To throw out what doesn't fit."
      ], right: 1 },

    { q: "How did Aristotle first divide living things?",
      find: [7],
      hint: "Read Aristotle's Two Kingdoms.",
      choices: [
        "Into three groups by size.",
        "Into plants, animals and fungi.",
        "Into plants and animals.",
        "Into land and sea."
      ], right: 2 },

    { q: "How did Aristotle split the animals?",
      find: [8],
      hint: "Read Aristotle's Two Kingdoms.",
      choices: [
        "By how big they were.",
        "By what they ate.",
        "By their color.",
        "By where they live: land, water or air."
      ], right: 3 },

    { q: "Why does the frog cause a problem for Aristotle's system?",
      find: [10],
      hint: "Read Where It Broke Down.",
      choices: [
        "It lives in water as a tadpole and on land as an adult, so it doesn't fit one group.",
        "It is bigger than most animals.",
        "It has no body structure.",
        "It is a plant."
      ], right: 0 },

    { q: "What made Linnaeus's system different from Aristotle's?",
      find: [14],
      hint: "Read Linnaeus.",
      choices: [
        "He grouped by where living things live.",
        "He grouped by body structures, size, shape, color and how they get food, and he gave each a two-word name.",
        "He used only one-word names.",
        "He sorted only plants."
      ], right: 1 },

    { q: "In a scientific name, which word is written with a capital letter?",
      find: [17],
      hint: "Read Two Names for Everything.",
      choices: [
        "Both words.",
        "The species.",
        "The genus.",
        "Neither word."
      ], right: 2 },

    { q: "Which of these is a correctly written scientific name?",
      find: [19, 23],
      hint: "Read Watch It Worked and use the Show All button.",
      choices: [
        "quercus Alba",
        "Quercus Alba",
        "QUERCUS alba",
        "Quercus alba"
      ], right: 3 },

    { q: "Quercus alba and Quercus rubra are two kinds of oak. What does the name tell you about them?",
      find: [19],
      hint: "Read Two Names for Everything.",
      choices: [
        "They share a genus, so they're close relatives and different species.",
        "They are the same species.",
        "They are from different kingdoms.",
        "They are both animals."
      ], right: 0 },

    { q: "Why did Linnaeus use Latin for the names?",
      find: [26],
      hint: "Read Why Latin.",
      choices: [
        "Because Latin is the easiest to spell.",
        "Because it meant the same thing in every country and its words don't change.",
        "Because only Swedish people could read it.",
        "Because animals respond to Latin."
      ], right: 1 }
  ],

  vocabQuestions: [
    { q: "What is <i>taxonomy</i>?",
      choices: [
        "A tax on animals.",
        "A type of kingdom.",
        "The science of grouping and naming living things.",
        "A kind of fossil."
      ], right: 2 },
    { q: "What is a <i>kingdom</i> in classification?",
      choices: [
        "A small group of similar species.",
        "A country with a king.",
        "A place where animals live.",
        "The largest group in a classification system."
      ], right: 3 },
    { q: "What is <i>binomial nomenclature</i>?",
      choices: [
        "A two-word naming system, genus first and species second.",
        "A way to count animals.",
        "A list of kingdoms.",
        "A system of one-word names."
      ], right: 0 },
    { q: "In a scientific name, what is the <i>genus</i>?",
      choices: [
        "The second word, in lowercase.",
        "The first word, a group of similar species, written with a capital letter.",
        "The common name.",
        "The place where it lives."
      ], right: 1 }
  ]
};
