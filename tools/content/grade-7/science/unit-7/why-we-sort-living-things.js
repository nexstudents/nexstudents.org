/* science/why-we-sort-living-things
   Grade 7 · science · unit 7 (book unit 7, "Classification of Living Things",
   shelved as "Sorting and Naming Living Things"), lesson 1. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 REWRITTEN 2026-10-13 (Sonnet, to be checked by Opus) after Kolten said the
   lessons don't explain anything. An audit graded the 2026-10-11 version B: the
   "two names" lines packed the scientific-name rules (binomial nomenclature, genus
   first with a capital, species lowercase, both italic or underlined) into three
   sentences before the walk. This one: starts the naming idea with an everyday
   picture (a family name and a first name, with the family name written first),
   gives the rules ONE AT A TIME by working a single example, the white oak,
   step by step, with a small drawn table that gains a row at each step and a
   right-and-wrong line for the capital letters.
   Aristotle's exceptions are now a drawn table built a row at a time (cow, fish,
   eagle, then the frog that doesn't fit). CUT: the word "binomial nomenclature"
   and its card, the word "taxonomy" and its card, and the plant-group detail in
   Aristotle's system. Word cards cut from 6 to 5 (Classify, Kingdom, Scientific
   Name, Genus, Species). A one-line recap of "species" opens the naming idea.

   This lesson isn't an origins lesson, so there is no two-layer sort. The book
   says a genus is a group of similar species "with common ancestors"; this
   lesson says only "similar species" and leaves ancestry to the next lesson, where
   it is handled side by side.

   ⚠️ ADDED FROM THE RECORD, worth a glance from Paul (kept from the draft):
   · The 1700s for Linnaeus (born 1707, his naming system set out in the
     1750s). The packet gives no dates for him.
   · That the packet's cougar and bobcat names (Felis concolor, Felis rufa) are
     older names that have since changed, so this lesson uses only the house
     cat (Felis catus) and the white oak (Quercus alba) as examples. The oak
     comes from the book's Skill Builder, which names Quercus alba.
   · The family-name picture and the cow, fish and eagle in Aristotle's table are
     everyday illustrations, not facts from the packet.
   ⚠️ The book's Problem Solving page (Whose Shoe?) and Activity 7-1
   (Classifying Seeds) are not in this lesson.

   🚨 THE VERSE IS A WORKING CHOICE, NOT PAUL'S. Genesis 2:19, Adam naming the
   animals. Choosing the scripture is his, so it goes in the review queue. */
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

const ARISTOTLE = [
  ["Animal", "Aristotle's group"],
  ["Cow", "Land"],
  ["Fish", "Water"],
  ["Eagle", "Air"],
  ["Frog", "Water or land?"],
];
const NAME = [
  ["Word", "What it is", "How you write it"],
  ["Quercus", "The genus, the group all oaks share", "Capital first letter"],
  ["alba", "The species, the white oak itself", "All lowercase"],
];

module.exports = {
  id: "science/why-we-sort-living-things",
  slug: "why-we-sort-living-things",
  title: "Why We Sort Living Things",
  unit: "Life Science &middot; U7-L1",
  seq: { unit: 7, unitTitle: "Sorting and Naming Living Things", n: 1 },
  natural: "2026-10-13",

  /* ── /teach-plan, rewritten 2026-10-13. Merrill Life Science pp156-159. ── */
  plan: {
    objective: "Explain why living things are classified, describe Aristotle's system and where it broke down, and build a two-part scientific name the way Linnaeus's system does.",
    markers: [
      "BOOK (paraphrased), Objectives: give examples showing the need for classification systems, describe Aristotle's system, and explain Linnaeus's system.",
      "BOOK (paraphrased), classify means to group ideas, information or objects by their similarities, as a grocery store groups its dairy aisle.",
      "BOOK (paraphrased), Aristotle, more than 2000 years ago, used two kingdoms, plant and animal. Animals were split by where they live (land, water, air). It had too many exceptions: a frog lives in water and on land, and an apple tree is closer to a rose bush than to a maple.",
      "BOOK (paraphrased), Linnaeus, a Swedish physician and naturalist, grouped by body structures, size, shape, color and how an organism gets food. His system gives every organism a two-word name: the genus first (capital letter), the species second (lowercase), both italic or underlined. The house cat is Felis catus.",
      "BOOK (paraphrased): the species is the smallest, most specific group, and a genus is a group of similar species. Latin was chosen because its words mean the same everywhere and the language doesn't change. No two organisms share a scientific name.",
      "BOOK (paraphrased), Skill Builder: the oaks Quercus alba, Quercus rubra, Quercus suber and Quercus macrocarpa all share a genus.",
    ],
    method: "WHY, THEN WHO, THEN HOW, ONE RULE AT A TIME. First the need: you can't find or talk about what you can't sort. Then the two people, Aristotle's two kingdoms and exactly where they failed (a table built a row at a time), then Linnaeus's two-word name. The method that matters is how a scientific name is built, so one walk builds the name for the white oak, a rule at a time: pick the genus, pick the species, put a capital on the genus only, mark both words italic or underlined, and check the name against a close relative.",
    exampleOnly: [
      "The zoo, the dairy aisle, the frog and the apple tree, the house cat and the oaks. WORLD: sorting at a zoo. The title and objective don't name them.",
      "⚠️ Linnaeus's dates, the family-name picture, and the cow, fish and eagle are added from the record or made up as pictures, see the header.",
      "Left out on purpose: the words binomial nomenclature and taxonomy, and the plant groups in Aristotle's system.",
    ],
    digitize: "The reading engine plus two Watch It Worked walkthroughs with drawn tables: Aristotle's groups built a row at a time until the frog doesn't fit, and the white oak's scientific name built a rule at a time. Questions check the history and ask the student to write a name correctly. The todo asks him to sort things in his own house and name two organisms.",
    unclear: "",
  },

  sheet: { slug: "why-we-sort-living-things-homework", subject: "science",
    note: "Do it on screen or print it. Your score shows here once you check it." },


  shelf: { grades: [7], subject: "Science",
    blurb: "A trip to the zoo raises a problem nobody can answer without a system: is it a bird or an insect, a monkey or a bear? How people learned to sort living things, and how every organism got a two-word name.",
    contains: [
      "Why we classify, and Aristotle's two kingdoms",
      "Where Aristotle's system broke down, drawn as a table",
      "Linnaeus and the two-word scientific name",
      "Building a scientific name one rule at a time",
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
        "Your student explains why living things are classified, describes Aristotle's system and where it failed, and builds a scientific name using genus and species."
      ]},
      { h: "A Note on the Side-by-Side Rule", p: [
        "This lesson isn't about origins, so there's no sorting of observed against claimed. The textbook says a genus is a group of similar species with common ancestors. This lesson says only similar species, and the question of what the groupings mean about ancestry is taken up in the next lesson, where both accounts are given in their own words."
      ]},
      { h: "Key Concepts", p: [
        "A classification system is only useful if everyone uses it the same way. That's why the two-word name is fixed: genus first with a capital letter, species second in lowercase, both in italics or underlined.",
        "Aristotle's grouping by habitat was a real attempt, and it failed on the animals that don't fit, like the frog."
      ]},
      { h: "Added From the Record", p: [
        "The dates for Linnaeus are added from the record, and the family-name picture and the cow, fish and eagle are made up as pictures. The textbook's own parts are the zoo and the dairy aisle, Aristotle's system and its two exceptions, Linnaeus's two-word names, the house cat, the reasons for Latin and the oak species. The words binomial nomenclature and taxonomy are left out to keep the lesson to the ideas."
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
      "Scientists need the same thing for living things, only bigger, because there are millions of kinds."
    ]},

    { title: "Aristotle's Two Kingdoms", s: [
      "The first person we know of who tried it was Aristotle, a Greek philosopher who lived more than 2,000 years ago.",
      "He put every living thing into one of two big groups, plants and animals, and the largest group in a classification system is called a {{kingdom}}.",
      "Then he split the animals by where they live, on land, in water or in the air.",
      "",
      "[walk] Sort four animals the way Aristotle did.",
      "[step] A cow lives on land, so it goes in the land group. || " + table(ARISTOTLE.slice(0, 2)),
      "[step] A fish lives in water, so it goes in the water group. || " + table(ARISTOTLE.slice(0, 3)),
      "[step] An eagle flies in the air, so it goes in the air group. || " + table(ARISTOTLE.slice(0, 4)),
      "[step] A frog starts life in the water as a tadpole and ends up on land as an adult, so which group does it belong in? || " + table(ARISTOTLE)
    ]},

    { title: "Where It Broke Down", s: [
      "The frog is the problem, because the system has no good place for an animal that lives in two places.",
      "Plants gave him trouble too, since an apple tree turns out to be more like a rose bush than like a maple tree, though the apple and the maple are both trees.",
      "Grouping by where something lives or how big it is turned out to be too rough, and people went looking for something better."
    ]},

    { title: "Linnaeus", s: [
      "In the 1700s a Swedish doctor and naturalist named Carolus Linnaeus came up with a system that scientists still use.",
      "He grouped living things by their body structures and the way they get their food, instead of by where they live.",
      "He also did something simple that made it work, which was to give every living thing its own name made of two words, called its {{scientific name}}."
    ]},

    { title: "Two Names for Everything", s: [
      "Think about your own name, which has two parts: a family name that says which family you belong to, and a first name that picks you out of that family.",
      "A scientific name works the same way, except the family part comes first.",
      "The first word is the {{genus}}, a group of similar species, and you already know a {{species}} is one kind of living thing, the smallest and most specific group.",
      "Your house cat is Felis catus, which means Felis is its group and catus picks out the house cat.",
      "Now build one from scratch, a rule at a time, for the white oak tree.",
      "",
      "[walk] Build the scientific name for the white oak.",
      "[step] Start with the genus, the name of the group of similar species the tree belongs to, which for every oak is Quercus. || " + table(NAME.slice(0, 2)),
      "[step] Add the species, the second and more specific word, which for the white oak is alba. || " + table(NAME),
      "[step] Put the genus first and the species second, and give only the genus a capital letter. || Quercus alba   (right)\nquercus Alba   (wrong)\nQuercus Alba   (wrong)",
      "[step] Mark both words as italic or underline them, because that is how a scientific name is always printed. || Quercus alba   (italic or underlined)",
      "[step] Check the name against a close relative, the red oak, which shares the genus and has a different species word. || Quercus alba    white oak\nQuercus rubra   red oak\nsame genus, different species",
      "",
      "So the name itself tells you the two oaks are close relatives."
    ]},

    { title: "Why Latin", s: [
      "Linnaeus wrote the names in Latin, and there's a good reason for it.",
      "Latin was understood by scholars everywhere, so a name meant the same thing in every country, and since no one speaks it every day, its words don't change.",
      "No two living things may share a scientific name, which means that when a scientist in Texas and one in Japan write Felis catus, they're talking about exactly the same animal."
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
      "Next, choose two living things you know and write a two-part name for each, with the genus capitalized and the species in lowercase, and tell why you picked those two words.",
      "Last, open the Homework Sheet with the button at the bottom of the page, and either fill it out right on the screen or print it and do it on paper."
  ] },

  words: [
    ["Classify", "To group things by how they are alike.", 2],
    ["Kingdom", "The largest group in a classification system.", 7],
    ["Scientific name", "The two-word name every living thing gets, with the genus first and the species second.", 19],
    ["Genus", "A group of similar species. Its name is the first word of a scientific name.", 22],
    ["Species", "The smallest, most specific group. Its name is the second word of a scientific name.", 22]
  ],

  findsAt: 39,
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
      find: [13, 14],
      hint: "Read the walk in Aristotle's Two Kingdoms.",
      choices: [
        "It lives in water as a tadpole and on land as an adult, so it doesn't fit one group.",
        "It is bigger than most animals.",
        "It has no body structure.",
        "It is a plant."
      ], right: 0 },

    { q: "What made Linnaeus's system different from Aristotle's?",
      find: [18],
      hint: "Read Linnaeus.",
      choices: [
        "He grouped by where living things live.",
        "He grouped by body structures and how they get food, and gave each living thing a two-word name.",
        "He used only one-word names.",
        "He sorted only plants."
      ], right: 1 },

    { q: "In the scientific name Felis catus, which word is the genus?",
      find: [23],
      hint: "Read Two Names for Everything. The family part comes first.",
      choices: [
        "catus",
        "Both words",
        "Felis",
        "Neither word"
      ], right: 2 },

    { q: "Which of these is a correctly written scientific name?",
      find: [28],
      hint: "Read the white oak walk and use the Show All button.",
      choices: [
        "quercus Alba",
        "Quercus Alba",
        "QUERCUS alba",
        "Quercus alba"
      ], right: 3 },

    { q: "Quercus alba and Quercus rubra are two kinds of oak. What does the name tell you about them?",
      find: [30],
      hint: "Read the white oak walk.",
      choices: [
        "They share a genus, so they're close relatives but different species.",
        "They are the same species.",
        "They are from different kingdoms.",
        "They are both animals."
      ], right: 0 },

    { q: "Why did Linnaeus use Latin for the names?",
      find: [33],
      hint: "Read Why Latin.",
      choices: [
        "Because Latin is the easiest to spell.",
        "Because it meant the same thing in every country and its words don't change.",
        "Because only Swedish people could read it.",
        "Because animals respond to Latin."
      ], right: 1 }
  ],

  vocabQuestions: [
    { q: "What does <i>classify</i> mean?",
      choices: [
        "To group things by how they are alike.",
        "To count them.",
        "To hide them.",
        "To make them bigger."
      ], right: 0 },
    { q: "What is a <i>kingdom</i> in classification?",
      choices: [
        "A small group of similar species.",
        "A country with a king.",
        "A place where animals live.",
        "The largest group in a classification system."
      ], right: 3 },
    { q: "What is a <i>scientific name</i>?",
      choices: [
        "A name that changes in every country.",
        "A nickname.",
        "The two-word name every living thing gets, with the genus first and the species second.",
        "The name a farmer uses."
      ], right: 2 },
    { q: "In a scientific name, what is the <i>genus</i>?",
      choices: [
        "The second word, in lowercase.",
        "The first word, a group of similar species, written with a capital letter.",
        "The common name.",
        "The place where it lives."
      ], right: 1 },
    { q: "In a scientific name, what is the <i>species</i>?",
      choices: [
        "The first word, with a capital letter.",
        "The second word, the smallest and most specific group, written in lowercase.",
        "The kingdom.",
        "The place where it lives."
      ], right: 1 }
  ]
};
