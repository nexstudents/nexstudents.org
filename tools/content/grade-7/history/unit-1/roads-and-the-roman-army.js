/* history/roads-and-the-roman-army
   Grade 7 · history · unit 1. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry. */
/* ═══════════ Unit 1 Lesson 3 — Roads, Bridges, and the Roman Army ═══════════ */

/* 🚨 THE PROSE IN `parts` IS A DRAFT, NOT PAUL'S VOICE. Built 2026-09-13.

   🚨 NOT A PRINTED PAGE. Paul, 2026-09-13: "we are not building paper pages. we
   already talked about how leif the lion was not good. we are taking his
   examples and building lessons on top of them along with the history book."
   So this is a real lesson in the same shape as U1-L1 and U1-L2, which were
   also written rather than transcribed → [[feedback-never-assign-an-unbuilt-lesson]].

   ⚠️ FOLLOWS THE SHAPE OF roman-government.js exactly: no `seq` (history does
   not lock), four questions, four word cards, scripture, and Paul's own cover.
   All ten Unit 1 covers arrived in one batch on 2026-09-11. */
'use strict';
module.exports = {
  id: "history/roads-and-the-roman-army",
  slug: "roads-and-the-roman-army",
  title: "Roads, Bridges, and the Roman Army",
  unit: "World History &middot; U1-L3",
  shelf: { grades: [7], subject: "History",
    /* Paul's ChatGPT-composed cover, part of the ten-cover Unit 1 batch made
       2026-09-11. 🚨 The art is Paul's - do not restyle or regenerate it. */
    thumb: true,
    blurb: "An empire is only as big as the distance a message can travel. Rome solved that with stone.",
    contains: [
      "A story-form reading, read aloud with the words highlighted",
      "Four vocabulary words, each one defined inside the story",
      "Four questions with the answer findable in the text",
      "A vocabulary check and a printable answer sheet",
    ] },
  eyebrow: ["World History", "U1-L3", "Ancient Rome"],
  dek: "Rome's most powerful weapon was not a sword. It was a road that let an army arrive before anyone expected it.",
  scripture: {
    ref: "Isaiah 40:3",
    text: "The voice of him that crieth in the wilderness, Prepare ye the way of the LORD, make straight in the desert a highway for our God.",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will explain how Rome's roads and engineering allowed one city to govern an empire, and describe how the Roman army was organized."
      ]},
      { h: "Key Concepts", p: [
        "An empire cannot be governed faster than its messages travel. Roman roads were built straight, drained, and paved in layers, so they stayed usable in winter and carried an army at speed.",
        "The army was built from legions, each divided into smaller units, and the same soldiers who fought also built the roads, walls and bridges. Engineering was part of the job, not a separate trade."
      ]},
      { h: "Where Students Get Stuck", p: [
        "🚨 Thinking of roads as a convenience rather than as the thing that made control possible. The point is speed: a rebellion three hundred miles away is a very different problem if soldiers can be there in a week instead of a month.",
        "Students also picture the army as only fighting. Most of a soldier's service was construction and drill. That is why the empire is covered in Roman stonework."
      ]},
      { h: "Teaching Suggestion", p: [
        "Get a map out and measure. Ask how long it would take to walk from your town to a city three hundred miles away, then ask what a governor could and could not do with that delay.",
        "This lesson sits directly on Lesson 2. Roman government ran on offices and written law, and none of that works if the paperwork cannot reach the province."
      ]},
      { h: "Biblical Connection", p: [
        "The roads built to move soldiers later carried something else. Paul traveled the same stone highways to reach cities across the empire, which is why the church spread along Roman trade routes rather than at random."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "A Message and a Month", s: [
      "Imagine you govern a city three hundred miles away.",
      "",
      "Something goes wrong there on a Monday.",
      "",
      "A rider carries the news to you, and it takes him most of a month over broken tracks and unbridged rivers.",
      "You decide what to do and send orders back, which takes another month.",
      "",
      "By the time anybody acts on your decision, the situation is two months old.",
      "It is not the same situation any more.",
      "",
      "That was the real limit on every ancient empire.",
      "Not how many soldiers you had, but how fast news and orders could move.",
      "",
      "Rome attacked that problem directly, and it did it with stone."
    ]},

    { title: "Built to Last, Built Straight", s: [
      "A Roman road was not a flattened dirt track.",
      "",
      "Engineers dug a trench, then filled it in layers.",
      "Large stones at the bottom, then gravel, then sand, then fitted paving stones across the top.",
      "",
      "The surface was built slightly higher in the middle so rain ran off to ditches on either side.",
      "",
      "That is why the roads survived winter.",
      "A dirt track turns to mud in November and stops being a road at all.",
      "A drained stone road does not.",
      "",
      "They were also built remarkably straight.",
      "Roman surveyors preferred to cut through a hill or bridge a valley rather than curve around it, because straight is short and short is fast.",
      "",
      "Some of those roads are still under modern streets.",
      "When a road in Europe runs oddly straight for miles, it is often following a line somebody surveyed two thousand years ago."
    ]},

    { title: "The Army That Built Them", s: [
      "Here is the part people find surprising.",
      "",
      "The roads were mostly built by soldiers.",
      "",
      "The Roman army was organized into large units called legions.",
      "A legion held several thousand men and was divided into smaller groups so that orders could pass quickly down through it.",
      "",
      "A soldier signed on for many years, and most of that service was not spent in battle.",
      "It was spent drilling, marching, and building.",
      "",
      "Roads, bridges, walls, forts, water channels.",
      "",
      "That is why Roman engineering is scattered across three continents.",
      "The empire did not send out separate construction crews.",
      "The army was the construction crew."
    ]},

    { title: "Water and Arches", s: [
      "The same engineering that carried armies carried water.",
      "",
      "An aqueduct is a channel built to carry water from a distant source into a city.",
      "",
      "Most of one usually ran underground, following a very slight downward slope for mile after mile so that gravity kept the water moving.",
      "Where the ground fell away, the channel was carried across on rows of arches.",
      "",
      "Those arches are the part everyone recognizes, and they are only the visible fraction of the system.",
      "",
      "The arch is worth stopping on.",
      "An arch carries weight outward into its supports instead of straight down, so it can span a gap that a flat stone beam would snap across.",
      "",
      "Rome did not invent the arch.",
      "Rome used it everywhere, at scale, and that is a different kind of achievement."
    ]},

    { title: "What the Roads Made Possible", s: [
      "Go back to the governor waiting two months for news.",
      "",
      "On a paved road a message could move at a gallop, changing horses at stations along the way.",
      "An army could march a serious distance in a day and arrive fit to fight.",
      "",
      "That changes what an empire can do.",
      "",
      "A province thinking about rebellion has to consider how quickly soldiers could arrive.",
      "A governor can send a question to Rome and get an answer while the question still matters.",
      "Taxes, grain and trade all move on the same stone.",
      "",
      "Lesson 2 was about Roman government, its offices and its written law.",
      "",
      "None of that works at a distance without this.",
      "A law nobody can deliver is not really a law."
    ]},

    { title: "Make Straight a Highway", s: [
      "Isaiah 40:3 speaks of preparing a way, and making a highway straight in the desert.",
      "",
      "That image would have been ordinary to anyone living under Rome.",
      "Straight roads driven through difficult country were simply what an empire did when it meant to arrive.",
      "",
      "And there is something worth noticing about what happened next.",
      "",
      "Those roads were built to move soldiers and tax money.",
      "",
      "Within a few generations they were carrying letters and travelers of a very different kind, and the message that spread along them was not the empire's.",
      "",
      "You will meet that in the lessons ahead.",
      "The stone was laid for one purpose and used for another."
    ]}
  ],

  todo: { title: "What To Do Now", s: [
      "That is the reading done.",
      "First the questions, {q} of them, and every answer is in the story above.",
      "If one is hard, use the bar or the arrows to go back and read that part again.",
      "The one worth thinking about is why roads mattered more than soldiers.",
      "Then the word cards, {v} of them, and the vocabulary check underneath.",
      "Last, get a map and find a city about three hundred miles from here.",
      "Work out how long it would take to walk there.",
      "That number is the problem Rome was solving with stone."
  ] },

  words: [
    ["Legion", "A large unit of the Roman army, several thousand men divided into smaller groups."],
    ["Aqueduct", "A channel built to carry water from a distant source into a city."],
    ["Arch", "A curved structure that carries weight outward into its supports, letting it span a wide gap."],
    ["Province", "A region outside Rome governed as part of the empire."]
  ],

  findsAt: 57,
  questions: [
    { q: "What was the real limit on how large an ancient empire could be?",
      find: [7],
      hint: "The story says it is not the number of soldiers.",
      choices: [
        "How fast news and orders could move.",
        "How many soldiers it could pay.",
        "How much food it could grow.",
        "How many cities it contained."
      ], right: 0 },

    { q: "Why did Roman roads survive the winter when dirt tracks did not?",
      find: [10, 12, 13],
      hint: "Look for what the engineers did about rain.",
      choices: [
        "They were guarded by soldiers all year.",
        "They were built in layers and raised in the middle so rain drained away.",
        "They were closed during the winter months.",
        "They were made from a single slab of stone."
      ], right: 1 },

    { q: "Who actually built most of the roads?",
      find: [21, 29],
      hint: "The story calls this the surprising part.",
      choices: [
        "Enslaved people brought from the provinces.",
        "Hired crews of engineers.",
        "The soldiers of the army.",
        "The citizens of each province."
      ], right: 2 },

    { q: "Why can an arch span a gap that a flat stone beam cannot?",
      find: [36],
      hint: "It is about which direction the weight is carried.",
      choices: [
        "Because it is made of stronger stone.",
        "Because it is thicker in the middle.",
        "Because it is built more quickly.",
        "Because it carries weight outward into its supports rather than straight down."
      ], right: 3 }
  ],

  vocabQuestions: [
    { q: "What was a <i>legion</i>?",
      choices: [
        "A large unit of the Roman army, divided into smaller groups.",
        "A Roman road built in layers.",
        "A channel that carried water into a city.",
        "A region governed from Rome."
      ], right: 0 },
    { q: "What is an <i>aqueduct</i>?",
      choices: [
        "A bridge built for an army to cross.",
        "A channel built to carry water from a distant source into a city.",
        "The curved stonework above a gateway.",
        "A paved road with drainage ditches."
      ], right: 1 },
    { q: "What is a <i>province</i>?",
      choices: [
        "The central district of the city of Rome.",
        "A unit of the Roman army.",
        "A region outside Rome governed as part of the empire.",
        "A stretch of road between two stations."
      ], right: 2 },
    { q: "What does an <i>arch</i> do with the weight above it?",
      choices: [
        "It spreads it evenly across the ground.",
        "It absorbs it into the stone.",
        "It carries it straight down into the middle.",
        "It carries it outward into its supports."
      ], right: 3 }
  ]
};
