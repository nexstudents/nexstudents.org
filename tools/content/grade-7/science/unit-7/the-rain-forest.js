/* science/the-rain-forest
   Grade 7 · science · unit 7 (book unit 7, "Classification of Living Things",
   shelved as "Sorting and Naming Living Things"), lesson 3. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 THE PROSE IN `parts` IS A DRAFT, NOT PAUL'S VOICE. DRAFT PROSE, CLAUDE'S,
   2026-10-11, Sonnet. Written from Merrill Life Science pp164-165 (Section 7-3,
   Science and Society: The Rain Forest Crisis) via the week 8-9 packet
   (paraphrased notes) and the week 8-9 plan. Structure copied from
   science/what-evolution-claims.

   This lesson is not an origins argument, so there is no two-layer sort. The
   book's "You Decide!" question (should the United States buy and preserve land
   other people need to live) is a real question with real weight on both
   sides; it is laid out fairly and goes to the notebook with no answer key.

   ⚠️ ADDED FROM THE RECORD, worth a glance from Paul:
   · That 50 acres is close to forty football fields (50 acres divided by the
     1.3 acres of a field with its end zones). The packet gives only the acres.
   · That every figure here (50 acres a minute, 15 percent of species named,
     a fourth of all species in 30 years) is the 1994 book's own estimate, and
     the lesson says so. They are not current numbers.
   ⚠️ The book's claim that the U.S. climate could shift (the Northeast turning
   tropical, the Southeast turning to desert) is left out on purpose: it is a
   forecast the packet reports without support, and the lesson keeps to "may
   change the weather and cause dangerous storms," which is what the book says
   first. The journal box on rain forest species and the Connect to Earth
   Science latitude question are not in this lesson.

   🚨 THE VERSE IS A WORKING CHOICE, NOT PAUL'S. Psalm 24:1, about the earth
   being the LORD's. Choosing the scripture is his, so it goes in the review
   queue. */
'use strict';
module.exports = {
  id: "science/the-rain-forest",
  slug: "the-rain-forest",
  title: "The Rain Forest, and What Is Being Lost",
  unit: "Life Science &middot; U7-L3",
  seq: { unit: 7, unitTitle: "Sorting and Naming Living Things", n: 3 },
  natural: "2026-10-11",

  /* ── /teach-plan, 2026-10-11. Merrill Life Science pp164-165. ── */
  plan: {
    objective: "Name two dangerous effects of cutting down the tropical rain forest, explain why the rain forest matters to the world and to the people who live there, and weigh a hard question that has more than one side.",
    markers: [
      "BOOK (paraphrased), Objectives: identify two dangerous effects of tropical deforestation, and explain the importance of the rain forest to us and to the people who live there.",
      "BOOK (paraphrased), the rain forests of South America hold thousands of undiscovered species. More than 50 acres are cleared every minute for farming or timber. That destruction of forests is deforestation.",
      "BOOK (paraphrased): hundreds of field biologists are racing to study organisms before they die out, and only about 15 percent of the species have been identified. The great variety of plants and animals is species diversity, and the book says a fourth of all species alive could be lost in 30 years.",
      "BOOK (paraphrased), consequences: trees and plants take in carbon dioxide and give off oxygen, and the damage may change the weather and cause dangerous storms.",
      "BOOK (paraphrased): native people depend on farming and logging the rain forest land to live, like American pioneers clearing land. Rain forest soil is poor, so land can be farmed only a few years, and new forest has to be cut every few years.",
      "BOOK (paraphrased), You Decide: is it right for the United States to buy and preserve land that other people need to survive, and should another society demand that the destruction stop.",
    ],
    method: "WHAT, WHO, THEN A HARD QUESTION. First the facts the book gives: how fast it's going, what's in it that nobody has counted, and what the trees do for the air. Then the people who live there, whose side is given its full weight. The lesson ends on the book's question with no answer key, laying out what each side would say so the student can reason for himself. The numbers are labeled as the 1994 book's own.",
    exampleOnly: [
      "The football-field comparison and the field biologists racing the clearing. WORLD: a forest being cleared faster than it can be counted. The title and objective don't name them.",
      "⚠️ The football-field comparison is added from the record, see the header.",
    ],
    digitize: "The reading engine. Questions check the effects and the reasons, and the last one asks which statement is a fact from the lesson and which is an opinion. The todo asks him to write both sides of the You Decide question and then say, in his own words, what he thinks and why. No walk.",
    unclear: "",
  },

  video: { id: "3vijLre760w", title: "Rainforests 101", channel: "National Geographic",
    why: "Shows what the rain forest looks like and why so many kinds of living things pack into it, which is hard to picture from words alone." },

  shelf: { grades: [7], subject: "Science",
    blurb: "Fifty acres of rain forest are cut down every minute, and most of what lives there has never been named. What's being lost, who depends on it, and a hard question with two real sides.",
    contains: [
      "A story-form reading, read aloud with the words highlighted",
      "How fast the rain forest is being cleared, and what lives there",
      "Two dangerous effects: the air and the weather",
      "The people who live there and need the land",
      "The book's hard question, with both sides laid out",
      "What it means to look after the earth",
    ] },
  eyebrow: ["Life Science", "U7-L3", "Sorting and Naming Living Things"],
  dek: "Every minute, an area of forest the size of dozens of football fields is cleared. Most of the living things in it have never been named.",

  scripture: {
    ref: "Psalm 24:1",
    text: "The earth is the LORD's, and the fulness thereof; the world, and they that dwell therein.",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will name two dangerous effects of tropical deforestation, explain why the rain forest matters to the world and to the people who live there, and reason about a hard question with more than one side."
      ]},
      { h: "A Note on the Side-by-Side Rule", p: [
        "This lesson isn't an origins argument, so there's no sorting of observed against claimed. The one place where the lesson must stay fair is the book's You Decide question. Both sides are given their full weight and the student answers in the notebook, with no answer key.",
        "The numbers are the 1994 book's own estimates, and the lesson says so."
      ]},
      { h: "Key Concepts", p: [
        "Species diversity is the great variety of plants and animals, and a rain forest has more of it than almost anywhere. Cutting the forest destroys species before they've even been identified.",
        "The people who live there and the people who depend on what the forest does for the air and weather have claims that pull in different directions, and the honest answer takes both seriously."
      ]},
      { h: "Added From the Record", p: [
        "The comparison with football fields is added from the record. The book's own parts are the 50 acres a minute, the 15 percent of species identified, the estimate that a fourth of all species could be lost, the air and weather, the native people, the poor soil and the You Decide question."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Fifty Acres a Minute", s: [
      "In the time it takes you to read this sentence, a patch of tropical forest in South America has just been cleared, and the book says the total is more than 50 acres every minute.",
      "That's close to forty football fields a minute, cut down for farms or for lumber, minute after minute, all day and all night.",
      "The destruction of a forest like that has a name, which is {{deforestation}}, and the book names two dangerous effects it causes.",
      "The numbers in this lesson are the textbook's own estimates from 1994, so they're a snapshot and not today's count."
    ]},

    { title: "The Treasure Nobody Has Counted", s: [
      "The rain forests of South America hold thousands of kinds of plants and animals that no scientist has ever described.",
      "Hundreds of field biologists are racing to study them before the trees come down, and the book says only about 15 percent of the species there have even been identified.",
      "The great variety of plants and animals in a place is called {{species diversity}}, and a rain forest has more of it than almost anywhere else on earth.",
      "The book warns that if the clearing doesn't slow, the world could lose a fourth of all the species alive today in about 30 years."
    ]},

    { title: "Two Dangerous Effects", s: [
      "The first effect is on the air, because trees and other plants take in carbon dioxide and give off oxygen, and a forest that size does a great deal of that work.",
      "When it's cleared, there's less to take in the carbon dioxide and less to give back the oxygen.",
      "The second effect is on the weather, because the book says the damage may change weather patterns and cause dangerous storms.",
      "Those two effects reach far beyond South America, which is why the book says people in North America should care about a forest thousands of miles away."
    ]},

    { title: "The People Who Live There", s: [
      "It would be easy to make the story one of villains, but the book is careful to say it isn't that simple.",
      "Native people live in and around the rain forest, and they depend on farming and cutting the land to feed their families and earn a living.",
      "The book compares it to American pioneers, who cleared land for farms and towns because it was how they lived.",
      "A farmer trying to feed children isn't the enemy of the forest, and he has to be part of any answer that works."
    ]},

    { title: "Thin Soil", s: [
      "Rain forest soil turns out to be poor, even though the forest on top of it grows so thickly.",
      "Most of the nutrients are held in the living plants and not in the ground, so once a patch is cleared and planted, it can be farmed for only a few years.",
      "Then the soil is spent, and the farmers have to cut new forest to plant the next crop.",
      "That's the trap: the land that feeds people for a season can't keep feeding them, and so more forest goes."
    ]},

    { title: "A Hard Question", s: [
      "The book ends its section with a question that has no neat answer, and it's called You Decide.",
      "Is it right for the United States to buy rain forest land and keep it from being cleared, when the people who live there need that land to survive?",
      "One side says yes, because the forest matters to everyone, and a country that is poor shouldn't have to give up its only way of earning money for the world's sake.",
      "The other side says the people who live there should decide what happens to their own land, and that if the rest of the world wants the forest saved, it should help them find another way to live."
    ]},

    { title: "The Earth Is the Lord's", s: [
      "Notice that neither side is against the forest or against the people, and both want a world where the trees and the families can last.",
      "",
      "[verse] Psalm 24:1 says, “The earth is the LORD's, and the fulness thereof; the world, and they that dwell therein.”",
      "",
      "For people who read the Bible, the verse says the forest and the farmer both belong to someone else, and that looking after them is a job and not a favor.",
      "The questions below check the facts, and the notebook part asks you to think the hard question through on your own."
    ]}
  ],

  todo: { title: "What To Do Now", s: [
      "A forest being cleared by the minute, a farmer who needs the land and a question with two real sides, and now you get to reason it through.",
      "Start with the questions, {Q} of them, and then the vocabulary check at the bottom, {v} questions on the word cards at the top of the page.",
      "When a question asks for a fact, find it in the reading, and when it asks for a reason, check that your answer fits what the lesson said.",
      "Then, in your notebook, write what each side of the You Decide question would say, one paragraph for each, in complete sentences.",
      "After that, write a third paragraph saying what you think should be done and why, using at least one fact from the lesson.",
      "There's no answer key, and you'll be marked on whether your reasons are clear and take both sides seriously.",
      "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] },

  words: [
    ["Deforestation", "The destruction of forests, usually by clearing them for farms or lumber.", 2],
    ["Species diversity", "The great variety of plants and animals living in a place.", 6],
    ["Rain forest", "A thick, warm forest in the tropics that gets a great deal of rain and holds a huge variety of living things.", 4],
    ["Carbon dioxide", "A gas that plants take in from the air and that animals give off when they breathe out.", 8]
  ],

  findsAt: 28,
  questions: [
    { q: "About how much rain forest does the book say is cleared every minute?",
      find: [0],
      hint: "Read Fifty Acres a Minute.",
      choices: [
        "About 5 acres.",
        "More than 50 acres.",
        "About 500 acres.",
        "Less than 1 acre."
      ], right: 1 },

    { q: "What is deforestation?",
      find: [2],
      hint: "Read Fifty Acres a Minute.",
      choices: [
        "Planting new forests.",
        "Counting trees.",
        "The destruction of forests, usually by clearing them for farms or lumber.",
        "A kind of storm."
      ], right: 2 },

    { q: "About what share of the rain forest's species had been identified, according to the book?",
      find: [5],
      hint: "Read The Treasure Nobody Has Counted.",
      choices: [
        "All of them.",
        "About half.",
        "About 90 percent.",
        "About 15 percent."
      ], right: 3 },

    { q: "What is species diversity?",
      find: [6],
      hint: "Read The Treasure Nobody Has Counted.",
      choices: [
        "The great variety of plants and animals living in a place.",
        "The number of trees in a forest.",
        "The size of an animal.",
        "A kind of soil."
      ], right: 0 },

    { q: "What are the two dangerous effects of deforestation named in the lesson?",
      find: [8, 10],
      hint: "Read Two Dangerous Effects.",
      choices: [
        "Less rain and more sunshine.",
        "Less carbon dioxide taken in and oxygen given off, and a change in the weather with dangerous storms.",
        "More soil and more food.",
        "More animals and fewer plants."
      ], right: 1 },

    { q: "Why do native people cut and farm the rain forest land?",
      find: [13],
      hint: "Read The People Who Live There.",
      choices: [
        "Because they want to destroy the forest.",
        "Because they are paid by other countries to do so.",
        "To feed their families and earn a living.",
        "Because the forest has no use."
      ], right: 2 },

    { q: "Why does new forest have to be cut every few years?",
      find: [17],
      hint: "Read Thin Soil.",
      choices: [
        "Because the trees grow back too fast.",
        "Because farmers like new land.",
        "Because the weather changes.",
        "Because the soil is poor and a cleared patch can be farmed only a few years."
      ], right: 3 },

    { q: "Which statement is one of the two sides of the You Decide question, as the lesson gives it?",
      find: [22, 23],
      hint: "Read A Hard Question.",
      choices: [
        "The people who live there should decide what happens to their land, and the world should help them find another way to live.",
        "Nobody has any claim on the forest.",
        "The rain forest has no effect on the weather.",
        "All the species have already been identified."
      ], right: 0 },

    { q: "Which of these is a fact from the lesson and not an opinion?",
      find: [0, 5],
      hint: "Read Fifty Acres a Minute and The Treasure Nobody Has Counted.",
      choices: [
        "The United States should buy rain forest land.",
        "Only about 15 percent of the rain forest's species had been identified, according to the 1994 book.",
        "Poor countries should never cut trees.",
        "Farmers are the enemy of the forest."
      ], right: 1 }
  ],

  vocabQuestions: [
    { q: "What is <i>deforestation</i>?",
      choices: [
        "Planting new trees.",
        "A kind of rain.",
        "The destruction of forests, usually by clearing them.",
        "A type of soil."
      ], right: 2 },
    { q: "What is <i>species diversity</i>?",
      choices: [
        "The size of a species.",
        "A species that is dying out.",
        "The number of animals in a zoo.",
        "The great variety of plants and animals in a place."
      ], right: 3 },
    { q: "What is a <i>rain forest</i>?",
      choices: [
        "A thick, warm forest in the tropics with a great deal of rain and a huge variety of living things.",
        "A cold forest in the far north.",
        "A forest with no trees.",
        "A desert."
      ], right: 0 },
    { q: "What is <i>carbon dioxide</i>?",
      choices: [
        "A kind of soil.",
        "A gas that plants take in from the air and animals give off when they breathe out.",
        "A type of rain.",
        "A rain forest animal."
      ], right: 1 }
  ]
};
