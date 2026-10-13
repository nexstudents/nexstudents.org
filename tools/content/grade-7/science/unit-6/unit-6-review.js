/* science/unit-6-review
   Grade 7 · science · unit 6, lesson 5 (the review). Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 REWRITTEN 2026-10-13 (Sonnet, to be checked by Opus) after Kolten said the
   unit's lessons don't explain anything. An audit graded the 2026-10-11 version C:
   four lessons squeezed into a few dense sentences each. This one re-shows each
   core idea BRIEFLY and with a drawing, matching what the four rewritten Unit 6
   lessons now teach: a table of the four lessons, the finches in four steps, a
   drawn stack of rock layers and a candle clock, the two rescues in a table, the
   sort, and the two accounts side by side in a table. NEW numbers and animals
   everywhere (a fern, snail and clam stack, a 30 cm candle) so the review tests
   the idea and not the memory of the lesson's example.
   CUT: homologous structures and the five-kinds-of-evidence list (the evidence
   lesson now teaches four tools), hominids, Homo sapiens' 300,000 years, the
   population and species cards. Word cards cut from 13 to 8 (Variation, Natural
   Selection, Fossil, Relative Dating, Radioactive Element, Extinction, Endangered
   Species, Primates), one vocab question per card.

   🚨 A REVIEW IS A DIAGNOSTIC, NOT A TEST. Same rule as the Unit 1 to 5 Reviews:
   every hint names the lesson to go back to, so a wrong answer sends him
   somewhere.

   🚨 SIDE BY SIDE, NOT BLENDED (BEHAVIOR.md). The review keeps the unit's two
   layers: what was found and measured, and what each finding is taken to mean.
   Both answers, what the world says and what God tells us, are restated in their
   own words one last time. Ages are always "the age scientists give". No question
   has a side for its right answer, and the notebook work asks the student to say
   what each claims, not to pick.

   ⚠️ THE VERSE IS A CALLBACK, not a new choice: Proverbs 25:2 is the verse
   U6-L2 already carries. If Paul would rather the review use another of the
   unit's verses (Genesis 1:24, Genesis 2:15, Genesis 1:27), or none, it is
   one line.

   ⚠️ THE THINK AND WRITE QUESTION HAS NO ANSWER KEY, so it lives in `todo` as
   notebook writing, the same as the other science reviews. */
'use strict';

/* draws a stack of rock layers; rows are [label, what is in the layer] */
const stack = (rows) => {
  const w = Math.max(...rows.map((r) => r[1].length)) + 2;
  const line = (l, r) => "  " + l + "─".repeat(w) + r;
  const out = [line("┌", "┐")];
  rows.forEach((r, i) => {
    out.push(r[0].padEnd(8) + "│ " + r[1].padEnd(w - 1) + "│");
    out.push(i < rows.length - 1 ? line("├", "┤") : line("└", "┘"));
  });
  return out.join("\n");
};

/* draws a small table with a header row; rows is a list of equal-length lists */
const table = (rows) => {
  const n = rows[0].length, w = [];
  for (let i = 0; i < n; i++) w[i] = Math.max(...rows.map((r) => [...r[i]].length)) + 2;
  const line = (l, m, r) => l + w.map((x) => "─".repeat(x)).join(m) + r;
  const row = (r) => "│" + r.map((c, i) => " " + c + " ".repeat(w[i] - 1 - [...c].length)).join("│") + "│";
  return [line("┌", "┬", "┐"), row(rows[0]), line("├", "┼", "┤")]
    .concat(rows.slice(1).map(row), [line("└", "┴", "┘")]).join("\n");
};

const LESSONS = [
  ["Lesson", "The big idea"],
  ["1  What evolution claims", "Natural selection can be watched"],
  ["2  The evidence", "Layers and clocks put finds in order"],
  ["3  Extinction", "Species die out, and two rescues help"],
  ["4  Human origins", "Bones and DNA, and two accounts"],
];
const ACCOUNTS = [
  ["The question", "What the world says", "What God tells us"],
  ["Where living things came from", "Shared ancestors, over a long time", "Made each “after his kind”"],
  ["Where people came from", "An ancestor shared with the apes", "Made in God's image"],
  ["Why living things look alike", "A family tree", "One Designer's plans"],
];

module.exports = {
  id: "science/unit-6-review",
  slug: "unit-6-review",
  title: "Unit 6 Review: Origins: Evolution and Creation, Side by Side",
  unit: "Life Science &middot; U6-L5",
  seq: { unit: 6, unitTitle: "Origins: Evolution and Creation, Side by Side", n: 5 },
  natural: "2026-10-13",

  /* ── /teach-plan, rewritten 2026-10-13. Merrill Life Science Chapter 6 Review,
        printed pp151-153, and the four rewritten Unit 6 lessons. ── */
  plan: {
    objective: "Pull the four Unit 6 lessons back together: what natural selection is and what it has been seen doing, how fossils, rock layers and a rock clock work, why extinction happens and how species are saved, and what has been found about primates and people, each sorted from what is claimed about origins.",
    markers: [
      "BOOK (paraphrased), Chapter Summary: hereditary features change over time, Lamarck against Darwin, variations, fossils, relative against radioactive dating, evidence from homologous structures and DNA, extinction and how species are saved, primates and the fossil finds.",
      "BOOK (paraphrased), Key Science Words include: endangered species, extinction, fossils, natural selection, primates, radioactive elements, relative dating, variation.",
      "BOOK (paraphrased), Understanding Concepts themes: the most accurate way to date a fossil is radioactive dating, and a population that produces more offspring than can survive is what natural selection works on.",
      "BOOK (paraphrased), Think and Write themes: what causes variations and what could happen if members of a population were completely separated.",
    ],
    method: "A RECAP THAT KEEPS THE SORT, WITH A PICTURE EACH TIME. The four lessons are one question told four ways: what can be watched, what can be dug up and dated, what is lost and saved, and what is found about people. Each one is re-shown in a few sentences and a small drawing (a table, a stack, a candle), and at each stop the review says which part was found or measured and which was taken to mean. It restates both answers in their own words once more and never asks which to hold.",
    exampleOnly: [
      "Nothing new except the numbers: a fern, snail and clam stack, and a 30 centimeter candle. Every idea is one the unit already taught, so recognizing it is the recall.",
    ],
    digitize: "The existing reading engine. Seven short Watch It Worked walkthroughs with drawings (the four lessons in a table, the finches, a rock stack, a candle clock, the two rescues, the sort, the two accounts). Every question's answer-hunt points into the recap, and every hint names the lesson to reopen. NO NEW MECHANIC. ⚠️ The Think and Write question has no answer key, so it lives in `todo` as notebook writing.",
    unclear: "",
  },

  sheet: { slug: "science-unit-6-review-homework", subject: "science",
    note: "Do it on screen or print it. Your score shows here once you check it." },


  shelf: { grades: [7], subject: "Science",
    blurb: "The whole unit in one pass, with pictures: what natural selection does, how rock layers and a rock clock work, why species die out, and what's been found about primates, with what was found kept apart from what it's taken to mean.",
    contains: [
      "Natural selection, replayed with the finches",
      "A stack of rock layers and a candle clock",
      "Extinction, and the two ways to save a species",
      "Primates and the fossils",
      "Both answers to the origin question, side by side one more time",
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
        "Bring the four Unit 6 lessons together, check which parts hold and which need a second read, and finish by writing out what was found and what each account claims, in your student's own words."
      ]},
      { h: "Side by Side, Not Blended", p: [
        "The review keeps the rule of the unit. Findings are stated as findings, and the claim about where living things and people came from is stated as a claim, with both answers in their own words under the labels what the world says and what God tells us.",
        "No question has a side for its right answer. The notebook work asks your student to say what each claims, and never which one to hold."
      ]},
      { h: "Key Concepts", p: [
        "Every question here is tied to one of the four lessons and the hint says which one, so a wrong answer is directions to the right page and not a mark against your student.",
        "The key idea is the sort. A measurement and an interpretation can sit on the same page, and an honest student can tell them apart."
      ]},
      { h: "Where Students Get Stuck", p: [
        "🚨 Treating a finding as if it settled the origin question. A fossil in a layer is a finding. What it says about ancestors is the part the two accounts answer differently.",
        "Treating natural selection and common descent as the same thing. The first has been watched, in the finches. The second is the claim about the distant past.",
        "Forgetting what a rock clock takes for granted. The candle picture is the quickest way back: the starting amount, nothing added or lost, and a steady speed."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "One Question, Four Ways", s: [
      "Think back to the pumpkin that held seventy seeds, the skull on a Texas lakeshore, a bird named Martha and a skeleton called Lucy.",
      "They look like four separate stories, but each one was a way of asking where living things came from and what's happened to them since.",
      "So when a statement shows up in this review, you need a way to decide whether it was found and measured, or whether it's a claim about the past.",
      "",
      "[walk] Say each lesson in one line.",
      "[step] The first lesson was about what can be watched, and the big idea was natural selection. || " + table(LESSONS.slice(0, 2)),
      "[step] The second lesson was about what's dug up, and the big idea was that layers and clocks put finds in order. || " + table(LESSONS.slice(0, 3)),
      "[step] The third lesson was about what's lost and saved, and the big idea was that species die out and two rescues help. || " + table(LESSONS.slice(0, 4)),
      "[step] The fourth lesson was about ourselves, and the big idea was bones and DNA with two accounts of what they mean. || " + table(LESSONS),
      "",
      "Keep that question in mind, because the rest of the review keeps asking it.",
      "The answer is always the same test, which is whether anybody could have watched it or measured it."
    ]},

    { title: "What Can Be Watched", s: [
      "Start with the lesson about what can be watched, because that's the part nobody argues about.",
      "Kittens in a litter differ from each other, and those differences are called {{variation}}.",
      "More are born than can survive, so the ones with helpful differences leave more young, and that sorting is {{natural selection}}.",
      "Lamarck's idea that a parent's muscles are passed on to its young was set aside, because genes, not habits, are what get inherited.",
      "",
      "[walk] Replay the finches of 1977 in four steps.",
      "[step] Before the drought, the finches ate small, soft seeds, and their beaks varied a little. || soft seeds plentiful\nbeaks vary a little",
      "[step] A drought left mostly big, hard seeds, and only the deeper beaks could crack them. || hard seeds left\ndeep beak  →  cracks them",
      "[step] The deep-beaked finches survived in greater numbers, so they had more young. || deep beak  →  survives  →  more young",
      "[step] The next generation's average beak was measurably deeper. || next generation:\naverage beak deeper",
      "",
      "Natural selection is the part of this unit that has been seen and measured.",
      "Both answers to the origin question accept it, and they part ways only on what it adds up to over a very long time."
    ]},

    { title: "Rock Layers and Clocks", s: [
      "The second lesson was about what's dug up, and a {{fossil}} is any trace of a living thing from long ago.",
      "Fossils sit in layers of rock, and in layers nobody has tipped over, the bottom layer is the oldest, which is called {{relative dating}}.",
      "",
      "[walk] Order a new stack, with fern prints on top, snail shells in the middle and clam shells at the bottom.",
      "[step] Draw the stack just the way you found it. || " + stack([["top", "fern prints"], ["middle", "snail shells"], ["bottom", "clam shells"]]),
      "[step] The bottom layer settled first, so number the layers going up. || " + stack([["3rd", "fern prints"], ["2nd", "snail shells"], ["1st", "clam shells"]]),
      "[step] Read the numbers in order, and you have the oldest to the youngest. || oldest  →  clam shells\n           snail shells\nyoungest  →  fern prints",
      "",
      "Layers give an order, but they can't tell you how long ago.",
      "A {{radioactive element}} can give a number, because its atoms change at a steady speed, like a candle burning down.",
      "",
      "[walk] A candle started 30 centimeters tall and burns 5 centimeters an hour, and now it's 10 centimeters tall.",
      "[step] Subtract to find how much has burned away. || 30 - 10 = 20 centimeters burned",
      "[step] Divide by how much burns each hour. || 20 ÷ 5 = 4 hours",
      "[step] So the candle has been lit for 4 hours. || lit for 4 hours",
      "",
      "A rock clock needs the same three things the candle does, which are the starting amount, nothing added or lost, and a steady speed in the past.",
      "Nobody can check those three by looking at the dial, which is why the ages are always the ages scientists give."
    ]},

    { title: "What's Lost, and What's Saved", s: [
      "The third lesson turned to {{extinction}}, the dying out of a whole species.",
      "Some extinction is natural, because surroundings change and the living things that can't adapt die out, but people have sped it up by destroying habitats and food supplies.",
      "A species with so few left that it may die out is an {{endangered species}}.",
      "",
      "[walk] Match the two rescues.",
      "[step] The first rescue is to protect the natural areas where the animals still live. || " + table([["Rescue", "What it does"], ["Save the place", "Keeps the home safe"]]),
      "[step] The second rescue is to breed the animals in zoos and let the young go back to the wild. || " + table([["Rescue", "What it does"], ["Save the place", "Keeps the home safe"], ["Breed and release", "Raises young in a zoo"]]),
      "",
      "Think of a lifeboat and a harbor, because the animals need both a way to stay alive now and a safe place to go afterward.",
      "That's why the lesson said to do both rescues at once."
    ]},

    { title: "Primates and the Bones", s: [
      "The fourth lesson began with the {{primates}}, the monkeys, apes and people, who share an opposable thumb, eyes that face forward and loose shoulders.",
      "Their DNA is very much alike, which is a count anyone can repeat.",
      "Then came the digs, with Dart's skull in the early 1920s, Lucy in 1974, and the Leakeys' Homo habilis with stone tools lying beside it.",
      "Lucy's age is given as 2.9 to 3.4 million years, and Homo habilis as 1.5 to 2 million, and those are the ages scientists give from clocks that take a few things for granted."
    ]},

    { title: "The Sort", s: [
      "Here's the sort one more time, for the whole unit.",
      "The test for each statement is the same, which is whether anybody could dig it up, measure it or watch it.",
      "",
      "[walk] Sort four statements by asking whether you could dig it up, measure it or watch it.",
      "[step] A decay speed was measured in a laboratory, so it's something a person can check. || decay speed  →  FOUND",
      "[step] Lucy's leg bones were dug up, so anyone can look at them. || Lucy's leg bones  →  FOUND",
      "[step] People and the apes share an ancestor, which nobody was there to watch. || shared ancestor  →  CLAIM",
      "[step] People were made on purpose in God's image, which nobody was there to watch either. || made in God's image  →  CLAIM",
      "",
      "The first two are findings, and the last two are claims.",
      "Nobody watched either of those claims, and no experiment can repeat them, which is why they're a different kind of question."
    ]},

    { title: "Two Accounts, One Last Time", s: [
      "People have given two answers to the bigger question, and they're laid out side by side one more time.",
      "Each answer is given in its own words, and the rows show where they differ.",
      "",
      "[walk] Read the question two ways.",
      "[step] Start with where living things came from. || " + table(ACCOUNTS.slice(0, 2)),
      "[step] Add where people came from. || " + table(ACCOUNTS.slice(0, 3)),
      "[step] Add why living things look alike. || " + table(ACCOUNTS),
      "",
      "[verse] Proverbs 25:2 says, “It is the glory of God to conceal a thing: but the honour of kings is to search out a matter.”",
      "",
      "Searching out a matter means looking at the evidence in front of you and saying exactly what it is.",
      "That's what this unit has trained you to do, so use the questions below to see how well it stuck."
    ]}
  ],

  todo: { title: "What To Do Now", s: [
      "Start with the questions, {Q} of them, and if one is hard the hint tells you which lesson to go back to.",
      "After that comes the vocabulary check at the bottom, {v} questions on the word cards at the top of the page.",
      "Then the part that matters most, and it happens on paper.",
      "In your notebook, write one paragraph of complete sentences that explains what natural selection is and gives one thing it has been seen doing.",
      "Then make a table with a column headed Found or Measured and a column headed Claimed About Origins, and give three rows for each from across the unit.",
      "In the second column, put both answers, what the world says and what God tells us, each in its own words.",
      "There's no answer key, and nobody is asking which answer to hold, only whether you can say clearly what was found and what each answer claims.",
      "Last, open the Homework Sheet with the button at the bottom of the page, and either fill it out right on the screen or print it and do it on paper."
  ] },

  words: [
    ["Variation", "The differences between individuals of the same kind, like kittens in a litter.", 11],
    ["Natural selection", "The process in which individuals with helpful variations survive and reproduce more, so those variations become more common.", 12],
    ["Fossil", "Any trace of a living thing from long ago.", 21],
    ["Relative dating", "Putting fossils in order by their layers: in undisturbed rock, lower layers are older.", 22],
    ["Radioactive element", "An element whose atoms change into a different kind of atom at a steady speed, like a clock.", 28],
    ["Extinction", "The dying out of a whole species, so that none are left alive.", 35],
    ["Endangered species", "A species with so few left that it is in danger of dying out.", 37],
    ["Primates", "The group of mammals that includes monkeys, apes and people.", 43]
  ],

  findsAt: 65,
  questions: [
    { q: "What is natural selection?",
      find: [12],
      hint: "Go back to What Evolution Claims, and What It Rests On, Darwin's Four Ideas.",
      choices: [
        "Individuals with helpful differences survive and have more young, so those differences become more common.",
        "A person choosing which animals to breed.",
        "A change in an animal's habits during its life.",
        "A way of dating fossils."
      ], right: 0 },

    { q: "What happened to the finches' beaks after the 1977 drought?",
      find: [18],
      hint: "Go back to What Evolution Claims, and What It Rests On, Beaks in a Drought.",
      choices: [
        "Nothing changed.",
        "The average beak in the next generation was measurably deeper.",
        "The finches grew bigger wings.",
        "The finches left the island."
      ], right: 1 },

    { q: "Why was Lamarck's idea set aside?",
      find: [13],
      hint: "Go back to What Evolution Claims, and What It Rests On, An Idea That Didn't Survive.",
      choices: [
        "Because Lamarck lived too long ago.",
        "Because muscles don't exist.",
        "Because genes, not habits, are what get inherited.",
        "Because Darwin disliked it."
      ], right: 2 },

    { q: "A rock has clam shells in the bottom layer, snail shells in the middle and fern prints on top, and nobody has tipped it. Which is the order from oldest to youngest?",
      find: [26],
      hint: "Go back to The Evidence, Examined Honestly, Reading the Layers.",
      choices: [
        "Fern prints, snail shells, clam shells.",
        "Snail shells, clam shells, fern prints.",
        "Fern prints, clam shells, snail shells.",
        "Clam shells, snail shells, fern prints."
      ], right: 3 },

    { q: "A candle started 40 centimeters tall and burns 8 centimeters an hour. Now it's 16 centimeters tall. How long has it been lit?",
      find: [30,31],
      hint: "Go back to The Evidence, Examined Honestly, A Clock in the Rock. Subtract, then divide.",
      choices: [
        "3 hours",
        "5 hours",
        "24 hours",
        "2 hours"
      ], right: 0 },

    { q: "What does a rock clock have to take for granted?",
      find: [33],
      hint: "Go back to The Evidence, Examined Honestly, What the Clock Takes for Granted.",
      choices: [
        "That the speed of change stayed the same, and nothing was added or lost.",
        "That every fossil is the same age.",
        "That the layers never form.",
        "That nobody has measured the speed."
      ], right: 0 },

    { q: "Which of these is a cause of extinction that people added?",
      find: [36],
      hint: "Go back to Extinction, and Caring for What Remains, What People Added.",
      choices: [
        "A river shifts on its own.",
        "The climate cools slowly over many years.",
        "A wetland is drained for farmland.",
        "A fish can't adapt when its pond dries up."
      ], right: 2 },

    { q: "What are the two ways to rescue an endangered species?",
      find: [39,40],
      hint: "Go back to Extinction, and Caring for What Remains, Two Ways to Rescue a Species.",
      choices: [
        "Hunting them and selling them.",
        "Moving them to the city and feeding them.",
        "Counting them and giving them names.",
        "Protecting the places they live, and breeding them in zoos to release later."
      ], right: 3 },

    { q: "Which of these is one of the things all primates share?",
      find: [43],
      hint: "Go back to Human Origins, Three Things Primates Share.",
      choices: [
        "Eyes that face forward.",
        "A tail.",
        "Wings.",
        "Gills."
      ], right: 0 },

    { q: "Which of these is a claim about the distant past, and not something found or measured?",
      find: [52],
      hint: "Go back to Human Origins, Found, and Claimed, and to The Evidence, Examined Honestly.",
      choices: [
        "Chimpanzee DNA is very like human DNA.",
        "A fossil sits in a lower layer of rock.",
        "People and the apes share an ancestor.",
        "A finch's average beak got deeper after a drought."
      ], right: 2 }
  ],

  vocabQuestions: [
    { q: "What is <i>variation</i>?",
      choices: ["The differences between individuals of the same kind.", "A group of one species in one place.", "A kind of fossil.", "A type of rock."], right: 0 },
    { q: "What is <i>natural selection</i>?",
      choices: [
        "Individuals with helpful differences survive and have more young, so those differences become more common.",
        "A person choosing which animals to breed.",
        "A change in a person's habits.",
        "A way of counting seeds."
      ], right: 0 },
    { q: "What is a <i>fossil</i>?",
      choices: ["Any trace of a living thing from long ago.", "A living animal that never changes.", "A rock made from lava.", "A tool for digging."], right: 0 },
    { q: "What does <i>relative dating</i> do?",
      choices: [
        "Measures the amount of lead in a rock.",
        "Counts the rings in a tree.",
        "Asks a relative how old a fossil is.",
        "Puts fossils in order by their layers, since lower layers in undisturbed rock are older."
      ], right: 3 },
    { q: "What is a <i>radioactive element</i>?",
      choices: [
        "An element that glows in the dark.",
        "An element whose atoms change into a different kind of atom at a steady speed.",
        "A kind of fossil.",
        "An element that never changes."
      ], right: 1 },
    { q: "What is <i>extinction</i>?",
      choices: [
        "A species moving to a new place.",
        "The dying out of a whole species, so that none are left alive.",
        "A change in a species' diet.",
        "A species being kept in a zoo."
      ], right: 1 },
    { q: "What is an <i>endangered species</i>?",
      choices: [
        "A species that lives in a zoo.",
        "A species that is dangerous to people.",
        "A species with so few left that it is in danger of dying out.",
        "A species that has already died out."
      ], right: 2 },
    { q: "What are <i>primates</i>?",
      choices: [
        "Animals with wings.",
        "Animals that hunt only at night.",
        "The group of mammals that includes monkeys, apes and people.",
        "Animals that live only in trees."
      ], right: 2 }
  ]
};
