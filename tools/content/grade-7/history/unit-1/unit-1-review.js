/* history/unit-1-review
   Grade 7 · history · unit 1. Its home is this folder.
   Built by tools/build-lessons.js. Edit the lesson here, not in the registry.

   🚨 A REVIEW IS A DIAGNOSTIC, NOT A TEST. Every hint names the lesson to go back to.

   🚨 THE PROSE IS A DRAFT, NOT PAUL'S VOICE. Written 2026-09-24 on Opus from the
   nine Unit 1 lessons and the Leif outline (U1 L10: Review of Rome and Early
   Christianity). Given THE PASS and stamped.

   ⚠️ THE FRAME IS THE UNIT'S OWN MIRROR: U1-L1 says nobody noticed the day Rome got
   a king, and U1-L9 says hardly anyone noticed the day the West lost its last
   emperor. The review runs between those two quiet days.

   🚨 THE VERSE IS A WORKING CHOICE, NOT PAUL'S. Matthew 16:18, for the unit title. */
'use strict';
module.exports = {
  id: "history/unit-1-review",
  slug: "unit-1-review",
  title: "Unit 1 Review: Rome and the Early Church",
  unit: "World History &middot; U1-L10",
  seq: { unit: 1, unitTitle: "Rome, and the Church That Outlived It", n: 10 },
  natural: "2026-09-24",
  eyebrow: "World History",
  dek: "Rome got its first emperor on a day nobody noticed, and lost its last Western one on another. Everything in this unit happened in between.",
  plan: {
    objective: "Pull the nine Unit 1 lessons into one story, from the Republic to the fall of the West, and see why the church outlasted the empire.",
    markers: [
      "Leif U1 L10: Review of Rome and Early Christianity.",
      "U1-L1's dek: 'almost nobody noticed the day it happened.' U1-L9's opening: 'hardly anyone noticed.'",
    ],
    method: "A recap that runs from one quiet day to the other, one paragraph per stretch of the unit, with every hint naming the lesson to reopen.",
    exampleOnly: [
      "Augustus, the roads, the provinces, the forum crowd, Judea, the coin, Paul, Constantine, the boy emperor. WORLD: the unit's own examples, so recognizing them is the recall.",
    ],
    digitize: "The existing reading engine, no new mechanic.",
    unclear: "",
  },
  shelf: { grades: [7], subject: "History", thumb: true,
    blurb: "Five hundred years of Rome and three hundred of the church, in one pass, from the day Rome got a king to the day the West lost its last emperor.",
    contains: [
      "A story-form reading, read aloud with the words highlighted",
      "The Republic, the Empire and how Rome ruled",
      "Judea, Jesus and the spread of the church",
      "The fall of the West, and what outlived it",
    ] },
  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Bring the nine Unit 1 lessons together, check which ones hold, and send the student back to any that don't. Every hint names the lesson to reopen."
      ]},
      { h: "Key Vocabulary", vocab: true },
      { h: "Where This Goes Next", p: [
        "Unit 2 opens in Constantinople, with the half of the empire that didn't fall."
      ]}
    ]
  },

  parts: [
    { title: "Two Quiet Days", s: [
      "This unit opened on a quiet day, when Rome, after five hundred years of refusing to have a king, got an emperor and almost nobody noticed.",
      "It closed on another quiet day, in 476, when a teenager called Romulus Augustulus was removed from the Western throne and hardly anyone noticed that either.",
      "Everything you've learned happened between those two days, and one thing born in the middle of them outlasted both."
    ]},

    { title: "How Rome Ran", s: [
      "Rome began as a republic that ruled itself through offices, elections and written laws, and a lot of that paperwork is still how governments work today.",
      "It held its lands together with an army and with roads, straight stone roads that carried legions, trade and news from one end of the empire to the other.",
      "Conquering land was the easy part; governing the people on it meant provinces, governors, taxes and cities built on the Roman plan.",
      "And every Roman street held a crowd of different worlds, from senators to slaves, that you couldn't tell apart by looking."
    ]},

    { title: "A Province That Wouldn't Bow", s: [
      "Judea was a province that answered to God before Caesar, and its people argued over how to stay faithful under Rome: work with it, fight it, or keep God's law and wait.",
      "Jesus gave a fourth answer, render to Caesar what is Caesar's and to God what is God's, and Rome crucified him under Pontius Pilate.",
      "His followers said he rose from the dead, and the first church formed in Jerusalem at Pentecost, while the Zealots' revolt ended with the Temple burned in AD 70."
    ]},

    { title: "A Church That Spread", s: [
      "Paul, who had hunted Christians, became their greatest missionary, walking Rome's own roads and writing letters that became much of the New Testament.",
      "Nero blamed Christians for the great fire of AD 64, and persecution came and went for two and a half centuries, but the church kept growing.",
      "In 313 Constantine made Christianity legal, and the empire that had crucified Jesus had a Christian emperor."
    ]},

    { title: "The Church That Outlived It", s: [
      "Meanwhile the empire weakened, through murdered emperors, worthless coins and endless borders, until Diocletian split it and Constantine moved the capital to Constantinople.",
      "Rome itself was sacked in 410, and the West ended quietly in 476, but the church went on, and so did the Eastern half of the empire.",
      "",
      "[verse] Matthew 16:18 says, “And I say also unto thee, That thou art Peter, and upon this rock I will build my church; and the gates of hell shall not prevail against it.”",
      "",
      "That's the unit's title in one verse: an empire built by armies fell, and a church built on that promise didn't."
    ]}
  ],

  words: [
    ["Republic", "A government where citizens choose leaders to rule for them, as Rome did before the emperors.", 3],
    ["Province", "A region ruled by Rome from outside, paying taxes and living under Roman law.", 7],
    ["Missionary", "Someone who travels to spread a faith to new people.", 10],
    ["Persecution", "Cruel treatment of people because of what they believe.", 11]
  ],

  findsAt: 17,
  questions: [
    { tag: "How Rome Ran", q: "What held the Roman Empire's lands together?",
      find: [4], hint: "Go back to Roads, Bridges, and the Roman Army.",
      choices: ["Its army and its roads.", "A single language everyone spoke.", "The church.", "Walls around every city."], right: 0 },
    { tag: "How Rome Ran", q: "Why was governing harder than conquering?",
      find: [5], hint: "Go back to Conquest, Provinces, and City Life.",
      choices: [
        "Because Rome had no army.",
        "Because ruling the people on the land took provinces, governors, taxes and cities.",
        "Because conquered people always left.",
        "Because Rome never conquered anyone."
      ], right: 1 },
    { tag: "Judea", q: "What was the fourth answer to living under Rome?",
      find: [8], hint: "Go back to Jesus and the First Christians.",
      choices: [
        "Fight Rome by force.",
        "Work with Rome to protect the Temple.",
        "Render to Caesar what is Caesar's and to God what is God's.",
        "Leave Judea."
      ], right: 2 },
    { tag: "The Church", q: "How did Rome's roads help the church?",
      find: [10], hint: "Go back to Paul, Persecution, and a Church That Spread.",
      choices: [
        "Rome paid missionaries to use them.",
        "Only Christians could use them.",
        "They led to Jerusalem only.",
        "Paul and other missionaries traveled them and sent letters along them."
      ], right: 3 },
    { tag: "The Church", q: "What changed in 313?",
      find: [12], hint: "Go back to Paul, Persecution, and a Church That Spread.",
      choices: ["Rome was sacked.", "Constantine made Christianity legal.", "The Temple was burned.", "The West fell."], right: 1 },
    { tag: "The Fall", q: "What does the unit's title, Rome, and the Church That Outlived It, mean?",
      find: [14, 16], hint: "Go back to Crisis, Reform, and the Fall of the West.",
      choices: [
        "The Western empire fell in 476, but the church kept going.",
        "The church fell before Rome did.",
        "Rome and the church ended on the same day.",
        "Rome never fell."
      ], right: 0 }
  ],

  vocabQuestions: [
    { q: "What is a <i>republic</i>?",
      choices: ["Rule by one king.", "A government where citizens choose leaders to rule for them.", "A kind of province.", "A church council."], right: 1 },
    { q: "What is <i>persecution</i>?",
      choices: ["Cruel treatment because of what people believe.", "A Roman tax.", "A kind of road.", "An election."], right: 0 },
    { q: "What does a <i>missionary</i> do?",
      choices: ["Collects taxes.", "Guards the border.", "Governs a province.", "Travels to spread a faith."], right: 3 }
  ],

  todo: { title: "What To Do Now", s: [
      "Five hundred years of empire fit between two quiet days, and one thing born in the middle outlived both of them.",
      "{c} word cards sit at the top of the page, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "Every hint names a lesson, so a wrong answer isn't a dead end; it's an address.",
      "When you miss one, open the lesson it names, read the section it points to, and then come back and try again.",
      "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] }
};
