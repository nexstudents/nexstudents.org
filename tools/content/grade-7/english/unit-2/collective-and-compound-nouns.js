/* english/collective-and-compound-nouns
   Grade 7 · english · unit 2. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 THE PROSE IS A DRAFT, NOT PAUL'S VOICE. Written 2026-09-24 on Opus from
   Houghton Mifflin English Grade 7 pp73-75 (leaf n89-n91), read on the borrowed
   copy the same evening, then given THE PASS and stamped.

   ⚠️ BUILT A WEEK EARLY ON PURPOSE. Kinds of Nouns (U2-L1) had no neighbor in
   its unit, so it had no prev/next arrows and check-lesson-parts failed. This is
   the next lesson in the plan (week 6) anyway.

   ⚠️ THE WORLD IS THE BOOK'S OWN: its practice sentences are about a passenger
   liner called the United States built at Newport News. The real history added:
   her maiden voyage in July 1952 from New York crossed the Atlantic in 3 days,
   10 hours and 40 minutes, a record for a passenger liner. Worth a glance.

   🚨 THE VERSE IS A WORKING CHOICE, NOT PAUL'S. Psalm 107:23-24. Choosing the
   scripture is his → review queue. */
'use strict';
module.exports = {
  id: "english/collective-and-compound-nouns",
  slug: "collective-and-compound-nouns",
  title: "Collective and Compound Nouns",
  unit: "Nouns · U2-L2",
  seq: { unit: 2, unitTitle: "Nouns", n: 2 },
  natural: "2026-09-24",

  plan: {
    objective: "Recognize collective nouns, which name a group acting as one, and compound nouns, which are two or more words acting as one noun, and know the three ways a compound noun can be written.",
    markers: [
      "QUOTED, Houghton Mifflin p73: 'A collective noun refers to a group of people, animals, or things.' with the list 'audience, class, committee, band, cluster, family, bunch, flock, batch, group, team, litter'",
      "QUOTED, p74: 'Two or more words used as a single noun are called a compound noun. A compound noun is written either as one word, as separate words, or as hyphenated words. Check your dictionary if you are unsure of how to write compounds.'",
      "QUOTED, p74 examples: 'newspaper, grandfather' · 'New Year's Day, truck driver' · 'son-in-law, make-up'",
      "QUOTED, On Your Own p75: 'Underline the four collective nouns once and the nine compound nouns twice.' about an ocean liner departing",
    ],
    method: "TWO KINDS OF 'MANY INTO ONE'. A collective noun packs many members into one word; a compound noun packs several words into one noun. The book teaches them side by side and ends with one passage where the student marks both kinds, so the lesson does the same on one ship's departure.",
    exampleOnly: [
      "the SS United States, New York, Newport News, the crowd and the crew - WORLD: one ship's first voyage, the book's own ship",
      "Colonial Williamsburg and the field trip - WORLD: the book's other practice, deliberately not reused",
    ],
    digitize: "The reading engine. The three spellings of compound nouns are one [ex] box. ⚠️ An underline-once, underline-twice tap drill would suit the English worksheet engine.",
    unclear: [],
  },

  shelf: { grades: [7], subject: "English",
    blurb: "A crowd, a band and a crew watch the fastest ocean liner ever built leave New York. Words for groups, and words made of other words.",
    contains: [
      "Teacher Notes written for whoever is teaching it",
      "The lesson read aloud, one line at a time, highlighted as it goes",
      "Collective nouns, and the three ways compound nouns are written",
      "Three vocabulary cards, each with a check question",
    ] },
  eyebrow: ["English 7", "U2-L2", "Nouns"],
  dek: "Some nouns hold a whole group in one word, and some are built out of two or three words. One morning on a New York pier has plenty of both.",

  scripture: {
    ref: "Psalm 107:23-24",
    text: "They that go down to the sea in ships, that do business in great waters; These see the works of the LORD, and his wonders in the deep.",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will recognize collective nouns (a group acting together) and compound nouns (two or more words acting as a single noun), and know that a compound noun can be written as one word, as separate words, or with hyphens."
      ]},
      { h: "Key Concepts", p: [
        "Collective: crowd, band, crew, fleet, staff, class, team, flock. Each names many members but works as one word.",
        "Compound: shipyard (one word), ocean liner (separate words), brother-in-law (hyphenated). There's no rule that tells you which way a compound is spelled, so the book says to check a dictionary."
      ]},
      { h: "Where Students Get Stuck", p: [
        "Calling any plural a collective noun. Sailors is a plural; crew is collective, because it's one word for the whole group.",
        "Missing compounds written as separate words. Ocean liner and Newport News are compound nouns even with a space in them, because together they name one thing."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "The Fastest Ship Ever Built for Passengers", s: [
      "On a July morning in 1952, a huge crowd gathered on a pier in New York to watch a brand-new ocean liner called the United States leave on her very first voyage.",
      "A band played, the crew lined the rails, and nobody on the pier knew yet that she was about to cross the Atlantic faster than any passenger ship ever had, in three days, ten hours and forty minutes.",
      "Her record still stands, and to describe that morning properly you need two kinds of nouns this lesson is about.",
      "Look back at the sentences you just read and you'll find words that name a whole group at once, and words built out of other words."
    ]},

    { title: "One Word for a Whole Group", s: [
      "A crowd is hundreds of people, but crowd is one word, and a noun that names a group of people, animals or things acting together is called a collective noun.",
      "The pier that morning was full of them.",
      "",
      "[ex] A crowd watched from the pier.",
      "[ex] A band played on the dock.",
      "[ex] The crew lined the rails.",
      "[ex] The ship's staff welcomed the passengers.",
      "",
      "The book lists more you already know, like audience, class, committee, family, flock, team and litter.",
      "Here's the trap, though: sailors is just a plural, while crew is collective, because crew is one word for the whole group."
    ]},

    { title: "Two Words Doing One Job", s: [
      "The ship herself was built at a shipyard in Newport News, Virginia, and both shipyard and Newport News are compound nouns, two or more words acting as a single noun.",
      "The strange part is that compound nouns can be written three different ways.",
      "",
      "[ex] One word: shipyard, horsepower, newspaper",
      "[ex] Separate words: ocean liner, Newport News, ice floe",
      "[ex] Hyphenated: brother-in-law, self-reliance",
      "",
      "No rule tells you which way a particular compound is spelled, which is why the book's advice is simply to check a dictionary when you're not sure.",
      "A compound written as separate words is still one noun, so ocean liner names one thing even with a space in the middle of it."
    ]},

    { title: "Finding Both in One Sentence", s: [
      "The book's own practice asks you to underline collective nouns once and compound nouns twice, and it's worth trying on one sentence from that morning.",
      "",
      "[ex] A crew of shipbuilders cheered as the ocean liner left the harbor.",
      "",
      "Crew is collective, because it names the whole group of workers as one, while shipbuilders and ocean liner are compound, each built from two words acting as one noun.",
      "Harbor is neither, because it's a single word naming one place, and that's the check to run on every noun: is it a group, is it built from words, or is it just itself?"
    ]},

    { title: "Wonders in the Deep", s: [
      "Go back to that pier, where a crowd and a band watched a crew take an ocean liner out toward the Atlantic Ocean.",
      "",
      "[verse] Psalm 107:23-24 says, “They that go down to the sea in ships, that do business in great waters; These see the works of the LORD, and his wonders in the deep.”",
      "",
      "The psalm is about sailors who see God's power out on the open sea, and it names them the way a collective noun would, as one company going down to the sea together.",
      "The sea hasn't changed since the psalm was written, but the ships have, and it took a whole crew working as one to cross it in under four days."
    ]}
  ],

  words: [
    ["Collective noun", "A noun that names a group of people, animals or things acting together, like crowd or crew.", 4],
    ["Compound noun", "Two or more words acting as a single noun, like shipyard or ocean liner.", 12],
    ["Hyphenated", "Joined with short dashes, the way brother-in-law is written.", 16]
  ],

  vocabQuestions: [
    { q: "Which is a <i>collective noun</i>?",
      choices: ["sailors", "crew", "ship", "harbor"],
      right: 1, why: "Crew is one word for the whole group of workers." },
    { q: "Which is a <i>compound noun</i>?",
      choices: ["shipyard", "pier", "band", "crowd"],
      right: 0, why: "Shipyard is two words, ship and yard, acting as one noun." },
    { q: "Which compound noun is <i>hyphenated</i>?",
      choices: ["ocean liner", "horsepower", "Newport News", "brother-in-law"],
      right: 3, why: "Its parts are joined with hyphens." }
  ],

  findsAt: 27,
  questions: [
    { q: "What is a collective noun?", find: [4],
      hint: "Read One Word for a Whole Group.",
      choices: [
        "Any plural noun.",
        "A noun built from two words.",
        "A noun naming a group acting together, like crowd.",
        "A noun that is always capitalized."
      ], right: 2,
      why: "A collective noun names many members as one group." },
    { q: "Why is crew collective but sailors isn't?", find: [11],
      hint: "Read the trap at the end of One Word for a Whole Group.",
      choices: [
        "Because crew is one word for the whole group, and sailors is just a plural.",
        "Because sailors is capitalized.",
        "Because crew is shorter.",
        "Because sailors is a compound noun."
      ], right: 0,
      why: "A plural names many; a collective noun names the group as one." },
    { q: "What is a compound noun?", find: [12],
      hint: "Read Two Words Doing One Job.",
      choices: [
        "A noun naming a group.",
        "Two or more words acting as a single noun.",
        "A noun with a hyphen, always.",
        "A noun naming a feeling."
      ], right: 1,
      why: "Compound nouns are built from two or more words." },
    { q: "Which of these is a compound noun written as separate words?", find: [15, 18],
      hint: "Look at the box in Two Words Doing One Job.",
      choices: ["shipyard", "horsepower", "brother-in-law", "ocean liner"], right: 3,
      why: "Ocean liner is two separate words naming one thing." },
    { q: "How can you tell whether a compound is one word, two words or hyphenated?", find: [17],
      hint: "What does the book tell you to do?",
      choices: ["Always use a hyphen.", "Check a dictionary.", "Always write it as one word.", "Count the letters."], right: 1,
      why: "There's no rule for it, so the book says to check a dictionary." },
    { q: "In “A crew of shipbuilders cheered as the ocean liner left the harbor,” which noun is collective?", find: [20, 21],
      hint: "Which word names the whole group?",
      choices: ["crew", "shipbuilders", "ocean liner", "harbor"], right: 0,
      why: "Crew names the group of workers as one." },
    { q: "In that same sentence, why is harbor neither collective nor compound?", find: [22],
      hint: "Read the end of Finding Both in One Sentence.",
      choices: [
        "Because it's a proper noun.",
        "Because it's a verb.",
        "Because it's a single word naming one place.",
        "Because it's plural."
      ], right: 2,
      why: "It isn't a group and isn't built from other words." },
    { q: "Which pair are both collective nouns?", find: [6, 7],
      hint: "Look for words that each name a group.",
      choices: ["crowd and band", "ship and pier", "shipyard and newspaper", "sailors and passengers"], right: 0,
      why: "Crowd and band each name a group acting as one." }
  ],

  todo: { title: "What To Do Now", s: [
      "A crowd, a band and a crew watched an ocean liner set a record, and every one of those nouns is either a group or a word built from words.",
      "{c} word cards at the top of the page, then {Q} questions about the lesson, then {v} more questions about those words, {T} questions in all.",
      "For every noun, ask whether it names a whole group, whether it's built from more than one word, or whether it's just itself.",
      "If the spelling questions trip you up, read Two Words Doing One Job again and look at the three ways compounds are written.",
      "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] },
};
