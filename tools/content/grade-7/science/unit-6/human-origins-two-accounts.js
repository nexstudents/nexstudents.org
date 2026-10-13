/* science/human-origins-two-accounts
   Grade 7 · science · unit 6, lesson 4. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 REWRITTEN 2026-10-13 (Sonnet, to be checked by Opus) after Kolten said the
   unit's lessons don't explain anything, and an audit graded the 2026-10-11
   version D. It named about 15 groups and dates (prosimians, hominids,
   Australopithecus, Homo habilis, Neanderthals, Cro-Magnons, 2.9-3.4 million,
   1.5-2 million, 35,000 years) in running paragraphs, and used "binocular
   vision", "hemoglobin" and "opposable thumb" in the first minute. This one:
   keeps the thumb test as the hook, says "eyes that face forward" instead of
   binocular vision, drops hemoglobin, reminds him DNA is the instruction book from
   the genes lesson, and puts the names and ages in ONE drawn table built one row
   at a time. Prose carries only the finds worth a sentence (the quarry skull and
   Lucy). Then the sort (found vs claimed) as a walk, and the two accounts side by
   side in a drawn table, fair to both, with the student choosing.
   CUT: prosimians, the word "hominids" and its 4-to-6-million-years branch claim,
   binocular vision, hemoglobin, the "forty years after Dart" aside, the line that
   many scientists think Lucy shows people began in Africa (a claim, not a
   finding). Word cards stay at 4: Hominids is replaced by Australopithecus (Primates,
   Opposable Thumb and Homo Sapiens stay). The unit review is
   rewritten to match.

   🚨 SIDE BY SIDE, NOT BLENDED (BEHAVIOR.md). This is the most sensitive lesson in
   the unit. What was found and measured is taught plainly. Whether the fossils
   are a line of ancestors leading to people is named as a different kind of
   question, and BOTH answers are given in their own words under the labels "What
   the world says" and "What God tells us". Every age is attributed ("the age
   scientists give") and tied back to the candle clock of the last lesson, so deep
   time is never plain fact. The student sorts and checks facts and is never asked
   which account to hold.

   ⚠️ ADDED FROM THE RECORD, worth a glance from Paul:
   · That Lucy was found in Ethiopia (the packet gives the year, 1974, and the
     finder, Donald Johanson, but not the country). Kept.
   · One sentence on how people who hold creation commonly read these fossils (the
     australopithecines as extinct apes, the Neanderthals as fully human), with a
     plain note that they don't all agree fossil by fossil, and that scientists who
     hold common descent also disagree about the exact family tree. Kept.
   ⚠️ The book's journal ad ("The Neanderthal News"), the concept-map skill
   builder and the Connect to Earth Science boxes are not in this lesson.

   🚨 THE VERSE IS A WORKING CHOICE, NOT PAUL'S. Genesis 1:27, the plan's
   choice, about people made in God's image. Choosing the scripture is his, so
   it goes in the review queue. */
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

/* the fossil table, one more row at each step of the walk */
const HEAD = ["Fossil", "Found by or where", "Age scientists give"];
const FOSSILS = [
  ["Australopithecus skull", "Raymond Dart, early 1920s", "Same kind as Lucy"],
  ["Lucy, a skeleton", "Donald Johanson, 1974, Ethiopia", "2.9 to 3.4 million years"],
  ["Homo habilis", "Louis, Mary and Richard Leakey, East Africa", "1.5 to 2 million years"],
  ["Neanderthals", "Parts of Africa and Europe", "Gone by about 35,000 years"],
  ["Cro-Magnons", "Europe, Asia and Australia", "40,000 to 10,000 years"],
  ["Homo sapiens (us)", "Everywhere", "Appears about 300,000 years"],
];
const upTo = (k) => table([HEAD].concat(FOSSILS.slice(0, k)));

module.exports = {
  id: "science/human-origins-two-accounts",
  slug: "human-origins-two-accounts",
  title: "Human Origins: Two Accounts, Side by Side",
  unit: "Life Science &middot; U6-L4",
  seq: { unit: 6, unitTitle: "Origins: Evolution and Creation, Side by Side", n: 4 },
  natural: "2026-10-13",

  /* ── /teach-plan, rewritten 2026-10-13. Merrill Life Science pp146-149. ── */
  plan: {
    objective: "Describe what primates share, read a table of the main fossils and the ages scientists give them, and sort each statement into what was found or measured and what is claimed about where people came from.",
    markers: [
      "BOOK (paraphrased), Objectives: describe the evidence that monkeys, apes and humans came from a common ancestor, describe the ancestors of humans, and trace the history of humans.",
      "BOOK (paraphrased), primates are the monkeys, apes and humans. They share opposable thumbs, forward-facing eyes for judging distance, and flexible shoulders and rotating forelimbs. Chimp, gorilla and human DNA is very similar.",
      "BOOK (paraphrased), Raymond Dart found a skull in a quarry in the early 1920s with a small brain space and a humanlike jaw and teeth, and named it Australopithecus, 'southern ape'. In 1974 Donald Johanson found a nearly complete skeleton nicknamed Lucy, 2.9 to 3.4 million years old, with a small brain, and walking upright.",
      "BOOK (paraphrased), Louis, Mary and Richard Leakey found Homo habilis, 'handy man', 1.5 to 2 million years old with simple stone tools nearby and a bigger brain.",
      "BOOK (paraphrased), Homo sapiens, 'wise human', appears in the fossil record about 300,000 years ago. Neanderthals (heavy bones, heavy brow ridges, caves, mammoth hunters, gone about 35,000 years ago) and Cro-Magnons (40,000 to about 10,000 years ago, cave art, buried their dead) are the two early groups.",
      "BOOK (paraphrased), Section Review: three kinds of evidence that all primates share a common ancestor, the importance of Australopithecus, and the differences between Neanderthals, Cro-Magnons and modern people.",
    ],
    method: "NAME THE FEW, TABLE THE REST, THEN SORT. Primates share three plain things anyone can check, and their DNA can be compared. The fossils go in ONE drawn table built a row at a time, with each age labeled as the age scientists give. Then the two layers named out loud: what was found and measured, and whether the fossils are a line of ancestors leading to people. Both answers are given in their own words (what the world says, what God tells us) in a second drawn table, and the student sorts and is never asked to pick one.",
    exampleOnly: [
      "A thumb test, a quarry skull, a skeleton called Lucy. WORLD: a hand trying to touch each finger, then a series of digs. The title and objective don't name them.",
      "⚠️ Lucy's country (Ethiopia) and the sentence on how people who hold creation read these fossils are added from the record, see the header.",
      "Left out on purpose: prosimians, the word hominids, binocular vision, hemoglobin.",
    ],
    digitize: "The reading engine plus three Watch It Worked walkthroughs: the fossil table built a row at a time, a sort of found against claimed, and a side-by-side table of the two accounts. Questions check the facts and sort statements. No walk answer key to a side, and the todo asks for a sorting list in the notebook.",
    unclear: "",
  },

  sheet: { slug: "human-origins-two-accounts-homework", subject: "science",
    note: "Do it on screen or print it. Your score shows here once you check it." },


  shelf: { grades: [7], subject: "Science",
    blurb: "Touch your thumb to each fingertip and you've done a test that sorts you with the monkeys. Then a skull in a quarry, a skeleton called Lucy, and a question about what the bones mean.",
    contains: [
      "What primates share, in plain words",
      "The main fossils in one table, built a row at a time",
      "Sorting what was found from what is claimed",
      "Both accounts of where people came from, side by side in a table",
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
        "Your student describes what primates share, reads one table of the main fossils and the ages scientists give them, and sorts statements into what was found or measured and what is claimed about where people came from."
      ]},
      { h: "Side by Side, Not Blended", p: [
        "This is the lesson in the unit where the rule matters most. What has been found and measured is taught plainly. Whether the fossils are a line of ancestors leading to people is named as a different kind of question, and both answers are given in their own words under the labels what the world says and what God tells us.",
        "Every age is said to be the age scientists give, and it's tied back to the candle clock of the last lesson. Your student is asked to sort and to check facts, and is never asked which account to hold."
      ]},
      { h: "Key Concepts", p: [
        "A skull has a size, a place and an age that scientists give it. Those are findings people with either account can look at.",
        "Arranging fossils into a line of ancestors leading to people is an interpretation. So is reading them as separate kinds, and the lesson keeps that difference in view."
      ]},
      { h: "Added From the Record", p: [
        "The country where Lucy was found, and one sentence on how people who hold creation commonly read these fossils, are added from the record. The textbook's own parts are the primate traits, the DNA likeness, the fossils, their finders and ages, and the Neanderthals and Cro-Magnons. Prosimians, the word hominid, binocular vision and hemoglobin are left out to keep the lesson to the few names that matter."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "A Thumb Test", s: [
      "Hold out your hand and try touching your thumb to the tip of each finger in turn.",
      "You can do it because your thumb swings across your palm to meet your fingers, and a thumb like that is called an {{opposable thumb}}.",
      "Monkeys, apes and people all have one, and that puts us in a group of animals called the {{primates}}."
    ]},

    { title: "Three Things Primates Share", s: [
      "The thumb is the first thing primates share, and there are two more.",
      "The second is eyes that face forward, so both eyes look at the same scene, which helps a primate judge how far away a branch is before it jumps.",
      "",
      "[ex] Close one eye and try to touch a pencil tip, and you'll find it much harder to tell how far away it is.",
      "",
      "The third is loose shoulders and arms that can rotate, which lets a monkey swing from branch to branch and lets you hang from a jungle gym.",
      "All three are things anyone can look at and check, which makes them findings."
    ]},

    { title: "Alike Down to the DNA", s: [
      "Remember that DNA is the set of instructions inside your cells, like the recipe book from the genes lesson.",
      "Scientists lined up the DNA of chimpanzees, gorillas and people and found it very similar, and anyone can repeat that count.",
      "That is a finding too, and what the matches say about where people came from is a separate question that comes later in this lesson."
    ]},

    { title: "Bones Dug Up", s: [
      "Now for the bones, which people have dug up in places like South Africa and East Africa.",
      "The ages in this lesson are the ages scientists give them, using clocks like the candle clock from the last lesson, with the same three things taken for granted.",
      "The first bone is a skull named {{Australopithecus}}, which means “southern ape,” and our own species is named {{Homo sapiens}}, which means “wise human.”",
      "Build the list of main finds one row at a time, so you can see all the names and ages in one place instead of memorizing them.",
      "",
      "[walk] Build a table of the main fossils.",
      "[step] In the early 1920s Raymond Dart was handed a skull from a quarry, with a small brain space and a jaw and teeth that looked humanlike. || " + upTo(1),
      "[step] In 1974 Donald Johanson found a nearly complete skeleton in Ethiopia and nicknamed her Lucy, and her small brain sat above leg and hip bones that show she walked upright. || " + upTo(2),
      "[step] Louis, Mary and Richard Leakey found Homo habilis, “handy man,” with a bigger brain than Lucy's and simple stone tools lying close by. || " + upTo(3),
      "[step] Neanderthals were short and heavy, with thick bones and heavy brow ridges, and they lived in caves and hunted mammoths before they vanished for reasons that aren't clear. || " + upTo(4),
      "[step] Cro-Magnons were nearly identical to us, and they made carvings, buried their dead and painted bison and horses on cave walls in France. || " + upTo(5),
      "[step] Homo sapiens is our own species, and the ages say we appear in the fossil record about 300,000 years ago. || " + upTo(6),
      "",
      "You don't need to memorize the table, because the questions below let you look back at it."
    ]},

    { title: "Found, and Claimed", s: [
      "Look back through the lesson and sort what you've read, the way you did in the last two lessons.",
      "A finding is something you could dig up, measure or compare, and a claim is a statement about the past that nobody watched happen.",
      "",
      "[walk] Sort four statements by asking whether you could dig it up or measure it.",
      "[step] Lucy's leg and hip bones were dug up, and anyone can look at them. || Lucy's leg bones  →  FOUND",
      "[step] Chimpanzee and human DNA were lined up and counted, and anyone can repeat that. || DNA match  →  FOUND",
      "[step] These fossils are a line of ancestors leading to people, which nobody watched happen. || a line of ancestors  →  CLAIM",
      "[step] God made people on purpose, in his own image, which nobody watched either. || made in God's image  →  CLAIM"
    ]},

    { title: "Two Accounts, Side by Side", s: [
      "Two accounts have answered the question of where people came from, and a fair lesson lets each one speak in its own words.",
      "What the world says is common descent, the view of most science courses, which says people and the apes share an ancestor and the fossils are steps along the way.",
      "What God tells us is the account in the Bible's first book, which says God made people on purpose and made them different from the animals, in his own image.",
      "People who hold that account commonly read the australopithecines as extinct apes and the Neanderthals as fully human, though they don't all agree about every fossil.",
      "Scientists who hold common descent also argue among themselves about exactly how the family tree branches.",
      "",
      "[walk] Read the same bones two ways.",
      "[step] Start with where people came from. || " + table([["The question", "What the world says", "What God tells us"], ["Where people came from", "An ancestor shared with the apes", "Made by God, in his image"]]),
      "[step] Add what the fossils are. || " + table([["The question", "What the world says", "What God tells us"], ["Where people came from", "An ancestor shared with the apes", "Made by God, in his image"], ["What the fossils are", "Steps along the way", "Extinct apes and fully human people"]]),
      "[step] Add what the DNA match means. || " + table([["The question", "What the world says", "What God tells us"], ["Where people came from", "An ancestor shared with the apes", "Made by God, in his image"], ["What the fossils are", "Steps along the way", "Extinct apes and fully human people"], ["The DNA match", "What a shared family tree would give", "One Designer's plans reused"]]),
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
      "When a question asks whether something was found or is claimed, ask whether you could dig it up, measure it or compare it.",
      "Then, in your notebook, make two lists in complete sentences.",
      "Under the heading Found or Measured, write four things from the lesson that a person could dig up, measure or compare.",
      "Under the heading Claims About Origins, write the two accounts, each in a sentence and each in its own words.",
      "There's no answer key, and nobody is asking you which account to hold, only whether you can say clearly what each one claims.",
      "Last, open the Homework Sheet with the button at the bottom of the page, and either fill it out right on the screen or print it and do it on paper."
  ] },

  words: [
    ["Primates", "The group of mammals that includes monkeys, apes and people.", 2],
    ["Opposable thumb", "A thumb that swings across the palm to touch the other fingers.", 1],
    ["Australopithecus", "A kind of fossil skull first named by Raymond Dart. The name means “southern ape.”", 13],
    ["Homo sapiens", "The scientific name for modern people. It means “wise human.”", 13]
  ],

  findsAt: 44,
  questions: [
    { q: "What is an opposable thumb?",
      find: [1],
      hint: "Read A Thumb Test.",
      choices: [
        "A thumb that is longer than the fingers",
        "A thumb that swings across the palm to touch the other fingers",
        "A thumb found only in people",
        "A thumb with no bones"
      ], right: 1,
      why: "It's the thumb that lets you touch each fingertip." },

    { q: "Which of these is one of the things all primates share?",
      find: [4],
      hint: "Read Three Things Primates Share.",
      choices: [
        "A tail for swinging",
        "Fur that changes color",
        "Eyes that face forward, which helps judge distance",
        "Wings"
      ], right: 2,
      why: "Forward-facing eyes help a primate judge how far away a branch is." },

    { q: "Which of these is a finding that was counted or measured, and not a claim about origins?",
      find: [9],
      hint: "Read Alike Down to the DNA.",
      choices: [
        "People came from an ancestor shared with the apes",
        "God made people separately from the animals",
        "The first person walked out of a forest",
        "Chimpanzee and human DNA are very similar"
      ], right: 3,
      why: "Scientists lined it up and counted, and anyone can repeat the count." },

    { q: "What did Donald Johanson find in 1974?",
      find: [17],
      hint: "Look at the table in Bones Dug Up.",
      choices: [
        "A set of stone tools",
        "A nearly complete skeleton nicknamed Lucy",
        "A cave painting in France",
        "A Neanderthal burial"
      ], right: 1,
      why: "Lucy was a nearly complete Australopithecus skeleton." },

    { q: "What was found lying close to Homo habilis?",
      find: [18],
      hint: "Look at the table in Bones Dug Up.",
      choices: [
        "A cave painting",
        "A mammoth tusk",
        "A skeleton named Lucy",
        "Simple stone tools"
      ], right: 3,
      why: "Simple stone tools were lying close by." },

    { q: "The ages in the fossil table are described as the ages scientists give. What does that remind you about them?",
      find: [12],
      hint: "Read Bones Dug Up, and think of the candle clock.",
      choices: [
        "They come from clocks that take a few things for granted, like a steady speed in the past",
        "They were written on the bones",
        "They are the same for every fossil",
        "Nobody measures them"
      ], right: 0,
      why: "The dating clocks rest on the starting amount, nothing added or lost, and a steady speed." },

    { q: "Which of these is a claim about the past, and not something dug up or measured?",
      find: [28, 24],
      hint: "Ask whether you could dig it up or measure it.",
      choices: [
        "A skull has a small brain space",
        "Lucy's leg bones were dug up",
        "These fossils are a line of ancestors leading to people",
        "Chimpanzee and human DNA were counted"
      ], right: 2,
      why: "Nobody watched the past, so a line of ancestors is a claim." },

    { q: "In the side-by-side table, what does What God tells us say about where people came from?",
      find: [32, 36],
      hint: "Read Two Accounts, Side by Side.",
      choices: [
        "People share an ancestor with the apes",
        "People are a mistake",
        "God made people on purpose, in his own image",
        "Nobody knows"
      ], right: 2,
      why: "That is the account in the Bible's first book, in Genesis 1:27." },

    { q: "What do the two accounts share, according to the lesson?",
      find: [40],
      hint: "Read Two Accounts, Side by Side.",
      choices: [
        "They both say the bones were never found",
        "They both say the bones were really found and measured, and they differ on what the bones say about where people came from",
        "They both say the fossils are a line of ancestors",
        "They both say DNA can't be compared"
      ], right: 1,
      why: "They agree on the finding and part ways on the meaning." }
  ],

  vocabQuestions: [
    { q: "What are <i>primates</i>?",
      choices: [
        "The group of mammals that includes monkeys, apes and people",
        "Animals with wings",
        "Animals that hunt only at night",
        "Animals that live only in trees"
      ], right: 0 },
    { q: "What is an <i>opposable thumb</i>?",
      choices: [
        "A very short thumb",
        "A thumb with a nail",
        "A thumb that swings across the palm to touch the other fingers",
        "A thumb that can't bend"
      ], right: 2 },
    { q: "What does <i>Australopithecus</i> mean?",
      choices: [
        "Wise human",
        "Southern ape",
        "Handy man",
        "Cave painter"
      ], right: 1 },
    { q: "What does <i>Homo sapiens</i> mean?",
      choices: [
        "Wise human",
        "Southern ape",
        "Handy man",
        "Strong man"
      ], right: 0 }
  ]
};
