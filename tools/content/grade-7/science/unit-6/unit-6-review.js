/* science/unit-6-review
   Grade 7 · science · unit 6, lesson 5 (the review). Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 A REVIEW IS A DIAGNOSTIC, NOT A TEST. Same rule as the Unit 1 to 5 Reviews:
   every hint names the lesson to go back to, so a wrong answer sends him
   somewhere.

   🚨 THE PROSE IN `parts` IS A DRAFT, NOT PAUL'S VOICE. DRAFT PROSE, CLAUDE'S,
   2026-10-11, Sonnet. Built from the four Unit 6 lessons already in this folder
   and the Merrill Chapter 6 Review (printed pp151-153, via the week 8-9 packet,
   paraphrased; the packet warns the question numbering is approximate).
   Review shape copied from science/unit-5-review.

   🚨 SIDE BY SIDE, NOT BLENDED (BEHAVIOR.md). The review keeps the unit's two
   layers: what was found and measured, and what each finding is taken to mean.
   Both accounts, common descent and creation, are restated in their own words
   one last time. No question has a side for its right answer, and the
   notebook work asks the student to say what each claims, not to pick.

   ⚠️ THE VERSE IS A CALLBACK, not a new choice: Proverbs 25:2 is the verse
   U6-L2 already carries. If Paul would rather the review use another of the
   unit's verses (Genesis 1:24, Genesis 2:15, Genesis 1:27), or none, it is
   one line.

   ⚠️ 13 cards against 5 vocabulary questions WARNS and does not fail. A unit
   review gathers the words from four lessons; do not invent extra questions.

   ⚠️ THE THINK AND WRITE QUESTION HAS NO ANSWER KEY, so it lives in `todo` as
   notebook writing, the same as the other science reviews. It is our wording of
   the chapter review's questions on variation and on separated populations,
   plus the unit's own sorting job. The giraffe's long neck and the duck's
   webbed feet from the chapter review are left out on purpose: each one is
   answered by asking the student to give the origin story, which the unit
   keeps as a claim and never as a test answer. */
'use strict';
module.exports = {
  id: "science/unit-6-review",
  slug: "unit-6-review",
  title: "Unit 6 Review: Origins: Evolution and Creation, Side by Side",
  unit: "Life Science &middot; U6-L5",
  seq: { unit: 6, unitTitle: "Origins: Evolution and Creation, Side by Side", n: 5 },
  natural: "2026-10-11",

  /* ── /teach-plan, 2026-10-11. Read off Merrill Life Science (Glencoe 1994),
        Chapter 6 Review, printed pp151-153, and the four built Unit 6 lessons. ── */
  plan: {
    objective: "Pull the four Unit 6 lessons back together: what natural selection is and what it has been seen doing, how the evidence is found and dated, why extinction happens and how species are saved, and what has been found about primates and people, each sorted from what is claimed about origins.",
    markers: [
      "BOOK (paraphrased), Chapter Summary: hereditary features change over time, Lamarck against Darwin, variations, fossils, relative against radioactive dating, evidence from embryology, homologous structures, chemistry and vestigial structures, extinction and how species are saved, primates and the hominid fossils.",
      "BOOK (paraphrased), Key Science Words: embryology, endangered species, extinction, fossils, gradualism, hominids, homologous structures, Homo sapiens, natural selection, population, primates, punctuated equilibrium, radioactive elements, relative dating, sedimentary rock, species, variation, vestigial structure.",
      "BOOK (paraphrased), Understanding Concepts themes: the most accurate way to date a fossil is radioactive dating, a population that produces more offspring than can survive is what natural selection works on, and the earliest paintings are Cro-Magnon.",
      "BOOK (paraphrased), Think and Write themes: what causes variations and how adaptations bear on the question, and what could happen if members of a population were completely separated.",
    ],
    method: "A RECAP THAT KEEPS THE SORT. The four lessons are one question told four ways: what can be watched, what can be dug up, what is lost and saved, and what is found about people. The review walks them in one pass and, at each stop, says which part was found or measured and which was taken to mean. It restates both accounts in their own words once more and never asks which to hold.",
    exampleOnly: [
      "Nothing new. Every example here is one the unit already used (the pumpkin seeds, the finches, the mosasaur, the layers, the bat wing, Martha, Lucy), so recognizing it is the recall.",
    ],
    digitize: "The existing reading engine. Every question's answer-hunt points into the recap, and every hint names the lesson to reopen. NO NEW MECHANIC and no walk. ⚠️ The Think and Write question has no answer key, so it lives in `todo` as notebook writing.",
    unclear: "",
  },

  sheet: { slug: "science-unit-6-review-homework", subject: "science",
    note: "Do it on screen or print it. Your score shows here once you check it." },

  video: { id: "7VM9YxmULuo", title: "Natural Selection", channel: "Amoeba Sisters",
    why: "The one part of the unit that can be watched, explained with drawings. It's worth another look if natural selection still feels slippery." },

  shelf: { grades: [7], subject: "Science",
    blurb: "The whole unit in one pass: what natural selection does, how rock and bones are dated, why species die out, and what's been found about primates, with what was found kept apart from what it's taken to mean.",
    contains: [
      "Natural selection, the finches and Lamarck",
      "Fossils, rock layers and the two kinds of dating",
      "Extinction, and the two ways to save a species",
      "Primates and the named fossils",
      "Both accounts of origins, side by side one more time",
      "A question to answer in writing, with no answer key",
    ] },
  eyebrow: ["Life Science", "U6-L5", "Origins: Evolution and Creation, Side by Side"],
  dek: "Seeds, rocks, bones and a question nobody watched. Here's the whole unit in one place, and a sorting job to finish.",

  scripture: {
    ref: "Proverbs 25:2",
    text: "It is the glory of God to conceal a thing: but the honour of kings is to search out a matter.",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Bring the four Unit 6 lessons together, check which parts hold and which need a second read, and finish by writing out what was found and what each account claims, in the student's own words."
      ]},
      { h: "Side by Side, Not Blended", p: [
        "The review keeps the rule of the unit. Findings are stated as findings, and the claim about where living things and people came from is stated as a claim, with both accounts in their own words: common descent, and creation.",
        "No question has a side for its right answer. The notebook work asks the student to say what each claims, and never which one to hold."
      ]},
      { h: "Key Concepts", p: [
        "Every question here is tied to one of the four lessons and the hint says which one, so a wrong answer is directions to the right page and not a mark against the student.",
        "The key idea is the sort. A measurement and an interpretation can sit on the same page, and an honest student can tell them apart."
      ]},
      { h: "Where Students Get Stuck", p: [
        "🚨 Treating a finding as if it settled the origin question. A fossil in a layer is a finding. What it says about ancestors is the part the two accounts answer differently.",
        "Treating natural selection and common descent as the same thing. The first has been watched, in the finches. The second is the claim about the distant past."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "One Question, Four Ways", s: [
      "Think back to the pumpkin that held seventy seeds, the skull on a Texas lakeshore, a bird named Martha and a skeleton called Lucy.",
      "They look like four separate stories, but each one was a way of asking where living things came from and what's happened to them since.",
      "So when a statement shows up in this review, how do you decide whether it was found and measured, or whether it's a claim about the past?"
    ]},

    { title: "What Can Be Watched", s: [
      "The first lesson drew a line between two meanings of one word, and the small meaning is the part nobody argues about.",
      "Individuals in a {{population}} differ, which is {{variation}}, and more are born than can survive, so the ones with helpful variations leave more young, and that's {{natural selection}}.",
      "The finches of Daphne Major are the proof, since after the drought of 1977 the average beak in the next generation was measurably deeper.",
      "Lamarck's idea that a parent's acquired traits are passed on was set aside, because genes and not habits are what get inherited."
    ]},

    { title: "Rock and Bones", s: [
      "The second lesson was about what's dug up, starting with a {{fossil}}, which is any trace of life from an earlier time.",
      "Most are found in sedimentary rock, and {{relative dating}} orders them by their layers, with the lower ones older in undisturbed rock.",
      "{{Radioactive elements}} give numbers, because an atom changes to a stable product at a steady rate that has been measured, and the method assumes that rate and the starting amount never changed.",
      "Add the {{homologous structures}} in an arm, a flipper and a wing, the look-alike embryos, and the DNA matches, and you have the book's five kinds of evidence, all of them things people found and measured."
    ]},

    { title: "What's Lost, and What's Saved", s: [
      "The third lesson turned to the living things that are disappearing, and began with {{extinction}}, the dying out of a species.",
      "Some extinction is natural, since the fossil record shows large ones such as the dinosaurs, but people have raised the rate by destroying habitats and food supplies.",
      "An {{endangered species}} has so few left that it may die out, and the book names two rescues: protect the natural areas where it lives, and breed it in captivity and release the young.",
      "The Bengal tiger cub born to a Siberian foster mother was the example, and the point was to do both at once."
    ]},

    { title: "Primates and the Fossils", s: [
      "The fourth lesson looked at ourselves, beginning with the {{primates}}, the monkeys, apes and humans, who share an opposable thumb, forward-facing eyes and flexible shoulders.",
      "Their DNA and their proteins, hemoglobin among them, are very much alike, which is a count anyone can repeat.",
      "Then came the digs, Dart's skull in the early 1920s, Lucy in 1974, the Leakeys' Homo habilis with stone tools beside it, and the {{hominids}} the book says branched off 4 to 6 million years ago.",
      "The book gives the age of {{Homo sapiens}} as about 300,000 years, and puts the Neanderthals and the Cro-Magnons before and beside us."
    ]},

    { title: "The Sort", s: [
      "Here's the sort one more time, for the whole unit.",
      "Found or measured: a finch's beak after a drought, a fossil in a layer, a decay rate, the same bones in four limbs, the DNA of a chimpanzee and a person, a skull's size and a stone tool beside a fossil.",
      "Claimed about the distant past: that all living things share one ancestor, and that people are the end of a line that began in the primates.",
      "Nobody watched either of those, and no experiment can repeat them, which is why they're a different kind of question."
    ]},

    { title: "Two Accounts, One Last Time", s: [
      "Common descent is the first answer, and it's the view of the textbook: living things and people share ancestors, the fossils are steps along the way, and the likenesses are the sign of a family tree.",
      "Creation is the second, the account in the Bible's first book: God made living things each after their kind and made people in his own image, so the likenesses show one Designer, and the layers are read as a record that was laid down fast.",
      "",
      "[verse] Proverbs 25:2 says, “It is the glory of God to conceal a thing: but the honour of kings is to search out a matter.”",
      "",
      "Searching out a matter means looking at the evidence in front of you and saying exactly what it is, and that's what this unit has trained you to do, so use the questions below to see how well it stuck."
    ]}
  ],

  todo: { title: "What To Do Now", s: [
      "Start with the questions, {Q} of them, and if one is hard the hint tells you which lesson to go back to.",
      "After that comes the vocabulary check at the bottom, {v} questions on the word cards at the top of the page.",
      "Then the part that matters most, and it happens on paper.",
      "In your notebook, write one paragraph of complete sentences that explains what natural selection is and gives one thing it has been seen doing.",
      "Then make a table with a column headed Found or Measured and a column headed Claimed About Origins, and give three rows for each from across the unit.",
      "In the second column, put both accounts, common descent and creation, each in its own words.",
      "There's no answer key, and nobody is asking which account to hold, only whether you can say clearly what was found and what each account claims.",
      "Last, open the Homework Sheet with the button at the bottom of the page, and either fill it out right on the screen or print it and do it on paper."
  ] },

  words: [
    ["Species", "A group of living things that can breed together and have fertile young.", 11],
    ["Population", "A group of one species living in one area.", 4],
    ["Variation", "The differences between individuals of the same kind.", 4],
    ["Natural selection", "The process in which individuals with helpful variations survive and reproduce more, so those variations become more common.", 4],
    ["Fossil", "Any trace or remains of life from an earlier time.", 7],
    ["Relative dating", "Putting fossils in order by their layers: in undisturbed rock, lower layers are older.", 8],
    ["Radioactive elements", "Elements whose atoms change to a stable product at a steady rate, used to estimate an age.", 9],
    ["Homologous structures", "Body parts built on the same plan, like the bones in a human arm and a bat's wing.", 10],
    ["Extinction", "The dying out of a species, so that none are left alive.", 11],
    ["Endangered species", "A species with so few left that it is in danger of dying out.", 13],
    ["Primates", "The group of mammals that includes monkeys, apes and humans.", 15],
    ["Hominids", "In the textbook, humanlike primates that walk upright and have a bigger brain than other great apes.", 17],
    ["Homo sapiens", "The scientific name for modern humans, meaning wise human.", 18]
  ],

  findsAt: 27,
  questions: [
    { q: "What is natural selection?",
      find: [4],
      hint: "Go back to What Evolution Claims, and What It Rests On, Natural Selection.",
      choices: [
        "Individuals with helpful variations survive and reproduce more, so those variations become more common.",
        "A person choosing which animals to breed.",
        "A change in an animal's habits during its life.",
        "A way of dating fossils."
      ], right: 0 },

    { q: "What happened to the finches' beaks after the 1977 drought?",
      find: [5],
      hint: "Go back to What Evolution Claims, and What It Rests On, Beaks in a Drought.",
      choices: [
        "Nothing changed.",
        "The average beak in the next generation was measurably deeper.",
        "The finches grew bigger wings.",
        "The finches left the island."
      ], right: 1 },

    { q: "Why was Lamarck's idea set aside?",
      find: [6],
      hint: "Go back to What Evolution Claims, and What It Rests On, An Idea That Didn't Survive.",
      choices: [
        "Because Lamarck lived too long ago.",
        "Because muscles don't exist.",
        "Because genes, not habits, are what get inherited.",
        "Because Darwin disliked it."
      ], right: 2 },

    { q: "In undisturbed rock, what does relative dating say about a fossil in a lower layer?",
      find: [8],
      hint: "Go back to The Evidence, Examined Honestly, Reading the Layers.",
      choices: [
        "It is younger than the fossils above it.",
        "It is the same age as the fossils above it.",
        "Its age can't be compared.",
        "It is older than the fossils above it."
      ], right: 3 },

    { q: "What does radioactive dating assume, according to the unit?",
      find: [9],
      hint: "Go back to The Evidence, Examined Honestly, What the Clock Takes For Granted.",
      choices: [
        "That the rate of change stayed the same and the starting amount is known.",
        "That every fossil is the same age.",
        "That the layers never form.",
        "That nobody has measured the rate."
      ], right: 0 },

    { q: "Which of these is an example of homologous structures?",
      find: [10],
      hint: "Go back to The Evidence, Examined Honestly, The Same Bones in Four Limbs.",
      choices: [
        "A leaf imprint in limestone.",
        "The bones in a human arm, a dolphin's flipper, a bat's wing and a bird's wing.",
        "A tail on an early embryo only.",
        "An insect trapped in resin."
      ], right: 1 },

    { q: "How does the book say extinction is both natural and something people have raised?",
      find: [12],
      hint: "Go back to Extinction, and Caring for What Remains, A Natural Event and What People Added.",
      choices: [
        "It is always caused by people.",
        "It never happens in nature.",
        "Large natural ones show in the fossil record, and people raised the rate by destroying habitats and food supplies.",
        "It is caused only by zoos."
      ], right: 2 },

    { q: "What are the two ways the book says endangered species can be saved?",
      find: [13],
      hint: "Go back to Extinction, and Caring for What Remains, Rescue One and Rescue Two.",
      choices: [
        "Hunting them and selling them.",
        "Moving them to the city and feeding them.",
        "Counting them and giving them names.",
        "Protecting the natural areas where they live, and breeding them in captivity to release later."
      ], right: 3 },

    { q: "Which of these is one of the three traits that all primates share?",
      find: [15],
      hint: "Go back to Human Origins, What Primates Share.",
      choices: [
        "Forward-facing eyes that judge distance.",
        "A tail.",
        "Wings.",
        "Gills."
      ], right: 0 },

    { q: "What did Donald Johanson find in 1974?",
      find: [17],
      hint: "Go back to Human Origins, Lucy.",
      choices: [
        "A cave painting in France.",
        "A nearly complete Australopithecus skeleton, nicknamed Lucy.",
        "A set of Neanderthal tools.",
        "A mosasaur skull."
      ], right: 1 },

    { q: "Which of these is a claim about the distant past, and not something found or measured?",
      find: [21],
      hint: "Go back to Human Origins, Found, and Claimed, and to The Evidence, Examined Honestly.",
      choices: [
        "Chimpanzee DNA is very like human DNA.",
        "A fossil sits in a lower layer of rock.",
        "All living things share one ancestor.",
        "A finch's average beak got deeper after a drought."
      ], right: 2 }
  ],

  vocabQuestions: [
    { q: "What is a <i>population</i>?",
      choices: ["A group of one species living in one area.", "A single animal.", "A kind of fossil.", "A type of rock."], right: 0 },
    { q: "What is <i>extinction</i>?",
      choices: [
        "A species moving to a new place.",
        "The dying out of a species, so that none are left alive.",
        "A change in a species' diet.",
        "A species being kept in a zoo."
      ], right: 1 },
    { q: "What are <i>primates</i>?",
      choices: [
        "Animals with wings.",
        "Animals that hunt only at night.",
        "The group of mammals that includes monkeys, apes and humans.",
        "Animals that live only in trees."
      ], right: 2 },
    { q: "What does <i>relative dating</i> do?",
      choices: [
        "Measures the amount of lead in a rock.",
        "Counts the rings in a tree.",
        "Asks a relative how old a fossil is.",
        "Puts fossils in order by their layers, since lower layers in undisturbed rock are older."
      ], right: 3 },
    { q: "What is <i>natural selection</i>?",
      choices: [
        "Individuals with helpful variations survive and reproduce more, so those variations become more common.",
        "A person choosing which animals to breed.",
        "A change in a person's habits.",
        "A way of counting seeds."
      ], right: 0 }
  ]
};
