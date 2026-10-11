/* science/human-origins-two-accounts
   Grade 7 · science · unit 6, lesson 4. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 THE PROSE IN `parts` IS A DRAFT, NOT PAUL'S VOICE. DRAFT PROSE, CLAUDE'S,
   2026-10-11, Sonnet. Written from Merrill Life Science pp146-149 (Section 6-4,
   Human Evolution) via the week 8-9 packet (paraphrased notes) and the week 8-9
   plan. Structure copied from science/what-evolution-claims.

   🚨 SIDE BY SIDE, NOT BLENDED (BEHAVIOR.md). This is the most sensitive lesson
   in the unit. Layer one, what has been found and measured, is taught the way
   the book teaches it: the traits primates share, the DNA and protein
   comparisons, and the named fossils with their measured ages and skull sizes.
   Layer two, whether those fossils are a line of ancestors leading to people,
   is named as a different kind of question, and BOTH accounts are given in
   their own words: common descent, and creation (Genesis 1:27). The student
   sorts and checks facts and is never asked which account to hold.

   ⚠️ ADDED FROM THE RECORD, worth a glance from Paul:
   · That Lucy was found in Ethiopia (the packet gives the year, 1974, and the
     finder, Donald Johanson, but not the country).
   · One sentence on how people who hold creation commonly read these fossils
     (the australopithecines as extinct apes, the Neanderthals as fully human),
     with a plain note that they don't all agree fossil by fossil. Stated, not
     argued. The same sentence says scientists who hold common descent also
     disagree among themselves about the exact family tree.
   ⚠️ The book's journal ad ("The Neanderthal News"), the concept-map skill
   builder and the Connect to Earth Science boxes are not in this lesson.

   🚨 THE VERSE IS A WORKING CHOICE, NOT PAUL'S. Genesis 1:27, the plan's
   choice, about people made in God's image. Choosing the scripture is his, so
   it goes in the review queue. */
'use strict';
module.exports = {
  id: "science/human-origins-two-accounts",
  slug: "human-origins-two-accounts",
  title: "Human Origins: Two Accounts, Side by Side",
  unit: "Life Science &middot; U6-L4",
  seq: { unit: 6, unitTitle: "Origins: Evolution and Creation, Side by Side", n: 4 },
  natural: "2026-10-11",

  /* ── /teach-plan, 2026-10-11. Merrill Life Science pp146-149. ── */
  plan: {
    objective: "Describe what primates share, name the fossils and the dates the textbook uses for human history, and sort each statement into what was found or measured and what is claimed about where people came from.",
    markers: [
      "BOOK (paraphrased), Objectives: describe the evidence that monkeys, apes and humans came from a common ancestor, describe the ancestors of humans, and trace the history of humans.",
      "BOOK (paraphrased), primates are the monkeys, apes and humans. They share opposable thumbs, binocular vision for judging distance, and flexible shoulders and rotating forelimbs. Chimp, gorilla and human DNA is very similar, and so are proteins like hemoglobin.",
      "BOOK (paraphrased), prosimians (lemurs and tarsiers) and higher primates (monkeys, apes, humans). About 4 to 6 million years ago the book says hominids branched off: humanlike primates that eat meat and plants, walk upright and have a bigger brain than other great apes.",
      "BOOK (paraphrased), Raymond Dart found a skull in a quarry in the early 1920s with a small brain space and a humanlike jaw and teeth, and named it Australopithecus, 'southern ape'. In 1974 Donald Johanson found a nearly complete skeleton nicknamed Lucy, 2.9 to 3.4 million years old, with a small brain, and walking upright.",
      "BOOK (paraphrased), about forty years after Dart, Louis, Mary and Richard Leakey found Homo habilis, 'handy man', 1.5 to 2 million years old with simple stone tools nearby and a bigger brain.",
      "BOOK (paraphrased), Homo sapiens, 'wise human', appears in the fossil record about 300,000 years ago. Neanderthals (heavy bones, heavy brow ridges, caves, mammoth hunters, gone about 35,000 years ago) and Cro-Magnons (40,000 to about 10,000 years ago, cave art, buried their dead) are the two early groups.",
      "BOOK (paraphrased), Section Review: three kinds of evidence that all primates share a common ancestor, the importance of Australopithecus, and the differences between Neanderthals, Cro-Magnons and modern people.",
    ],
    method: "TWO LAYERS, NAMED OUT LOUD. LAYER ONE IS WHAT HAS BEEN FOUND AND MEASURED, taught as the book teaches it: what primates have in common, how alike the DNA and the proteins are, and each fossil with where it was found, who found it, how big the skull was and what age it was given. LAYER TWO IS WHETHER THOSE FOSSILS ARE A LINE OF ANCESTORS LEADING TO PEOPLE, a different kind of question, because nobody watched it. Common descent and creation are each given in their own words, and the student sorts and checks facts and is never asked to pick one.",
    exampleOnly: [
      "A thumb test, a quarry skull, a skeleton called Lucy. WORLD: a hand trying to touch each finger, then a series of digs. The title and objective don't name them.",
      "⚠️ Lucy's country (Ethiopia) and the one sentence on how people who hold creation read these fossils are added from the record, see the header.",
    ],
    digitize: "The reading engine. Questions check the facts and dates and sort statements into found or measured and claimed about origins. No walk, and no answer key to a side. The todo asks for a sorting list in the notebook.",
    unclear: "",
  },

  sheet: { slug: "human-origins-two-accounts-homework", subject: "science",
    note: "Do it on screen or print it. Your score shows here once you check it." },

  video: { id: "BpnlS_ach-0", title: "Primates: What is a Primate?", channel: "Odyssey Earth",
    why: "A short look at what makes an animal a primate, with real footage. It sticks to the animals themselves and doesn't take a side on origins." },

  shelf: { grades: [7], subject: "Science",
    blurb: "Touch your thumb to each fingertip and you've done a test that sorts you with the monkeys. Then a skull in a quarry, a skeleton called Lucy, and a question about what the bones mean.",
    contains: [
      "A story-form reading, read aloud with the words highlighted",
      "What primates share, and what DNA comparisons show",
      "The named fossils, with who found them and how old they were said to be",
      "Neanderthals and Cro-Magnons",
      "Both accounts of where people came from, in their own words",
      "Sorting statements into what was found and what is claimed about origins",
    ] },
  eyebrow: ["Life Science", "U6-L4", "Origins: Evolution and Creation, Side by Side"],
  dek: "Bones can be dug up, measured and dated. What they say about where people came from is a question two accounts answer differently.",

  scripture: {
    ref: "Genesis 1:27",
    text: "So God created man in his own image, in the image of God created he him; male and female created he them.",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will describe what primates share, name the main fossils and dates the textbook uses for human history, and sort statements into what was found or measured and what is claimed about where people came from."
      ]},
      { h: "Side by Side, Not Blended", p: [
        "This is the lesson in the unit where the rule matters most. What has been found and measured is taught as the textbook teaches it, with no hedging. Whether the fossils are a line of ancestors leading to people is named as a different kind of question, and both accounts are given in their own words: common descent, and creation, which is what Genesis 1 says.",
        "The student is asked to sort and to check facts, and is never asked which account to hold."
      ]},
      { h: "Key Concepts", p: [
        "A skull has a size, a place and a measured age. Those are findings, and people with either account can look at the same ones.",
        "Arranging fossils into a line of ancestors leading to people is an interpretation. So is reading them as separate kinds, and the lesson keeps that difference in view."
      ]},
      { h: "Added From the Record", p: [
        "The country where Lucy was found, and one sentence on how people who hold creation commonly read these fossils, are added from the record. The book's own parts are the primate traits, the DNA and protein likeness, the fossils, their finders and ages, and the Neanderthals and Cro-Magnons."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "A Thumb Test", s: [
      "Hold out your hand and try touching your thumb to the tip of each finger in turn, which is a trick almost nothing else in the animal world can do as well as you can.",
      "You can do it because your thumb crosses your palm, and the name for a thumb like that is an {{opposable thumb}}.",
      "Monkeys, apes and people all have one, and so do a few other animals, and that single fact sorts you into a group with the monkeys and apes that the book calls the {{primates}}."
    ]},

    { title: "What Primates Share", s: [
      "The book names three traits that all primates have, and the thumb is the first.",
      "The second is binocular vision, which means both eyes face forward and work together, so a primate can judge how far away a branch is before it jumps.",
      "The third is flexible shoulders and forelimbs that can rotate, which is what lets a monkey swing from branch to branch, and what lets you hang from a jungle gym."
    ]},

    { title: "Alike Down to the Protein", s: [
      "There's also evidence inside the body that can be measured.",
      "The DNA of chimpanzees, gorillas and humans is very similar, and some of their proteins are nearly the same, including hemoglobin, the protein in red blood cells that carries oxygen.",
      "That is a finding: scientists lined up the code and counted the matches, and anyone can repeat the count.",
      "What those matches say about where people came from is a separate question, and we'll come back to it."
    ]},

    { title: "Two Groups of Primates", s: [
      "The book divides the primates into two groups, and the first is the prosimians, such as lemurs and tarsiers, small animals with large eyes that are mostly awake at night.",
      "The second is the higher primates, which means the monkeys, the apes and humans.",
      "The textbook says that about 4 to 6 million years ago a branch of the higher primates it calls {{hominids}} split off, humanlike primates that ate both meat and plants, walked upright on two feet and had a bigger brain than the other great apes.",
      "The branch is the book's claim about the past, and what comes next are the bones it points to."
    ]},

    { title: "A Skull in a Quarry", s: [
      "In the early 1920s a South African scientist named Raymond Dart was handed a skull that had turned up in a quarry.",
      "The brain space was small, but the jaw and teeth looked humanlike, and he named the creature Australopithecus, which means “southern ape.”",
      "Fossils of the same kind have been found since, and the book says the find mattered because it was the first of a long series of skulls that were neither plainly ape nor plainly human."
    ]},

    { title: "Lucy", s: [
      "In 1974 a scientist named Donald Johanson found something rare in Ethiopia, a nearly complete skeleton of an Australopithecus, with most of the bones still there.",
      "The team nicknamed her Lucy, and the book gives her age as between 2.9 and 3.4 million years.",
      "Her brain was small, but her leg and hip bones show she walked upright, and many scientists think she's evidence that people began in Africa."
    ]},

    { title: "Handy Man and Wise Man", s: [
      "About forty years after Dart's skull, Louis Leakey, his wife Mary and their son Richard found another fossil in East Africa, with simple stone tools lying close by.",
      "They named it Homo habilis, “handy man,” and gave it an age of 1.5 to 2 million years, with a bigger brain than Lucy's.",
      "Our own species is called {{Homo sapiens}}, “wise human,” and the book says the fossil record shows it appearing about 300,000 years ago."
    ]},

    { title: "Neanderthals and Cro-Magnons", s: [
      "Two early groups lived in parts of Africa and Europe, and the book says they probably lived at the same time.",
      "Neanderthals were short and heavy with thick bones and heavy brow ridges, they lived in family groups in caves, and they hunted mammoths and deer with well-made stone tools before they vanished about 35,000 years ago, for reasons that aren't clear.",
      "Cro-Magnons were about 1.6 to 1.7 meters tall, nearly identical to us, and fossils of them dated from 40,000 to about 10,000 years ago have been found across Europe, Asia and Australia.",
      "They made carvings, cared for old people, buried their dead, and painted the oldest art on record, bison and horses on cave walls in France."
    ]},

    { title: "Found, and Claimed", s: [
      "Look back through the lesson and sort what you've read the way you did in the last two.",
      "Thumbs, forward-facing eyes, matching DNA and hemoglobin, a skull in a quarry, Lucy's leg bones, the stone tools beside Homo habilis and the cave paintings in France were all found, measured or dated, and anyone can look at the same bones.",
      "A claim is something else, like the statement that these fossils are a line of ancestors leading from the primates to people, because nobody watched it happen and nothing can repeat it.",
      "Two accounts have answered that question, and a fair lesson lets each speak in its own words."
    ]},

    { title: "Two Accounts, Side by Side", s: [
      "The first is common descent, which is the textbook's view: people and the apes share an ancestor, the fossils are steps along the way, and the DNA likeness is what you'd expect from a shared family tree, though scientists who hold it still argue about exactly how the branches go.",
      "The second is the account in the Bible's first book, which says God made people on purpose and made them different from the animals, in his own image, and people who hold it commonly read the australopithecines as extinct apes and the Neanderthals as fully human, though they don't all agree about every fossil.",
      "",
      "[verse] Genesis 1:27 says, “So God created man in his own image, in the image of God created he him; male and female created he them.”",
      "",
      "Notice what the two accounts share, because both accept that the bones were really found and really measured, and they differ only on what the bones say about where people came from."
    ]},

    { title: "Keeping Them Apart", s: [
      "A careful student keeps what was found separate from what it's claimed to mean, and says which one is which.",
      "That's harder with this subject than with any other, because it's about us, and it's the reason the lesson names the people on each side.",
      "The questions below ask you to put each statement where it belongs, and the notebook part asks you to say what each account claims in your own words."
    ]}
  ],

  todo: { title: "What To Do Now", s: [
      "A thumb, a skull in a quarry, a skeleton called Lucy and two accounts of where people came from, and the work now is sorting.",
      "Start with the questions, {Q} of them, and then the vocabulary check at the bottom, {v} questions on the word cards at the top of the page.",
      "When a question asks whether something was found or is claimed, ask whether you could dig it up, measure it or date it.",
      "Then, in your notebook, make two lists in complete sentences.",
      "Under the heading Found or Measured, write four things from the lesson that a person could dig up, measure or date.",
      "Under the heading Claims About Origins, write the two accounts, each in a sentence and each in its own words.",
      "There's no answer key, and nobody is asking you which account to hold, only whether you can say clearly what each one claims.",
      "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] },

  words: [
    ["Primates", "The group of mammals that includes monkeys, apes and humans.", 2],
    ["Opposable thumb", "A thumb that can cross the palm to touch the other fingers.", 1],
    ["Hominids", "In the textbook, humanlike primates that eat meat and plants, walk upright on two feet, and have a bigger brain than other great apes.", 12],
    ["Homo sapiens", "The scientific name for modern humans, meaning wise human.", 22]
  ],

  findsAt: 38,
  questions: [
    { q: "What is an opposable thumb?",
      find: [1],
      hint: "Read A Thumb Test.",
      choices: [
        "A thumb that is longer than the fingers.",
        "A thumb that can cross the palm to touch the other fingers.",
        "A thumb found only in humans.",
        "A thumb with no bones."
      ], right: 1 },

    { q: "Which of these is one of the three traits the book says all primates share?",
      find: [4, 5],
      hint: "Read What Primates Share.",
      choices: [
        "A tail for swinging.",
        "Fur that changes color.",
        "Forward-facing eyes that judge distance.",
        "Wings."
      ], right: 2 },

    { q: "Which of these is a finding that has been measured, and not a claim about origins?",
      find: [8],
      hint: "Read Alike Down to the Protein.",
      choices: [
        "People came from a common ancestor with the apes.",
        "Humans were made separately from the animals.",
        "The first hominid walked out of a forest.",
        "Chimpanzee and human DNA are very similar."
      ], right: 3 },

    { q: "Who found the skull that was named Australopithecus, and when?",
      find: [14],
      hint: "Read A Skull in a Quarry.",
      choices: [
        "Raymond Dart, in the early 1920s.",
        "Donald Johanson, in 1974.",
        "Louis Leakey, in the 1960s.",
        "Charles Darwin, in 1859."
      ], right: 0 },

    { q: "What did Donald Johanson find in 1974?",
      find: [17],
      hint: "Read Lucy.",
      choices: [
        "A set of stone tools.",
        "A nearly complete Australopithecus skeleton, nicknamed Lucy.",
        "A cave painting in France.",
        "A Neanderthal burial."
      ], right: 1 },

    { q: "What does Homo habilis mean, and what was found near it?",
      find: [21],
      hint: "Read Handy Man and Wise Man.",
      choices: [
        "Wise human, and cave paintings.",
        "Southern ape, and a quarry.",
        "Handy man, and simple stone tools.",
        "Strong man, and a fire."
      ], right: 2 },

    { q: "Which of these is true of the Neanderthals, according to the book?",
      find: [24],
      hint: "Read Neanderthals and Cro-Magnons.",
      choices: [
        "They painted the oldest art on record.",
        "They lived only in Australia.",
        "They are the direct ancestors of all people.",
        "They hunted mammoths with well-made stone tools and vanished about 35,000 years ago."
      ], right: 3 },

    { q: "Which of these is a claim about origins, and not something found or measured?",
      find: [29, 31],
      hint: "Read Found, and Claimed.",
      choices: [
        "The fossils are a line of ancestors that lead to people.",
        "Lucy's leg bones show she walked upright.",
        "Stone tools were found near Homo habilis.",
        "Cro-Magnons painted horses on cave walls in France."
      ], right: 0 },

    { q: "What do the two accounts share, according to the lesson?",
      find: [34],
      hint: "Read Two Accounts, Side by Side.",
      choices: [
        "They agree that people came from the apes.",
        "They agree the bones were really found and measured, and differ on what the bones say about where people came from.",
        "They agree about how old the earth is.",
        "They agree that no fossils exist."
      ], right: 1 }
  ],

  vocabQuestions: [
    { q: "What are <i>primates</i>?",
      choices: [
        "The group of mammals that includes monkeys, apes and humans.",
        "Animals that live in trees only.",
        "Animals that hunt at night.",
        "Animals with wings."
      ], right: 0 },
    { q: "What does <i>Homo sapiens</i> mean?",
      choices: [
        "Southern ape.",
        "Handy man.",
        "Wise human.",
        "Cave dweller."
      ], right: 2 },
    { q: "What are <i>hominids</i>, as the textbook uses the word?",
      choices: [
        "Small primates that are active at night.",
        "Monkeys with long tails.",
        "Animals that swing from branches.",
        "Humanlike primates that walk upright and have a bigger brain than other great apes."
      ], right: 3 },
    { q: "What does an <i>opposable thumb</i> let you do?",
      choices: [
        "Run faster.",
        "Touch your thumb to your other fingertips.",
        "See farther.",
        "Climb only trees."
      ], right: 1 }
  ]
};
