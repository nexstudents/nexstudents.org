/* history/jesus-and-the-first-christians
   Grade 7 · history · unit 1. Its home is this folder.
   Built by tools/build-lessons.js. Edit the lesson here, not in the registry.

   🚨 THE PROSE IS A DRAFT, NOT PAUL'S VOICE. Written 2026-09-24 on Opus from the
   Leif outline (U1 L7: Jesus and the Early Church), McDougal Littell World History:
   Ancient Civilizations (the Rome and Christianity chapter), and the Gospels and
   Acts themselves. Given THE PASS and stamped.

   ⚠️ IT ANSWERS U1-L6's QUESTION. That lesson ended on three Jewish answers to Rome
   and promised a fourth. This lesson is the fourth, and Mark 12:17 is the turn.

   🚨 THE VERSES ARE WORKING CHOICES, NOT PAUL'S. Mark 12:17 is the turn; Acts 2:44
   is the closing. The theological wording is plain and Scripture-based on purpose,
   and it's his to adjust. */
'use strict';
module.exports = {
  id: "history/jesus-and-the-first-christians",
  slug: "jesus-and-the-first-christians",
  title: "Jesus and the First Christians",
  unit: "World History &middot; U1-L7",
  seq: { unit: 1, unitTitle: "Rome, and the Church That Outlived It", n: 7 },
  natural: "2026-09-24",
  eyebrow: "World History",
  dek: "Three groups had answered Rome three ways. A teacher from Nazareth gave a fourth answer, and it outlasted the empire.",
  plan: {
    objective: "Describe the life and teaching of Jesus in its Roman setting, how his answer to Rome differed from the other groups', and how the first church formed in Jerusalem.",
    markers: [
      "Leif U1 L7: Jesus and the Early Church.",
      "U1-L6 ends by promising a fourth answer to its question; this lesson delivers it.",
      "McDougal places Jesus in Roman Judea and follows the church from Jerusalem outward.",
    ],
    method: "Continue U1-L6's open question. The lesson walks the life of Jesus through the Roman setting the student now knows (Herod, the census, Pilate) and lands on Mark 12:17 as the answer none of the three groups gave.",
    exampleOnly: [
      "Bethlehem, Nazareth, the coin, Pilate's court, Pentecost. WORLD: Roman Judea, the same province as U1-L6.",
    ],
    digitize: "The existing reading engine. Questions ask what an event shows, never for a date.",
    unclear: "",
  },
  shelf: { grades: [7], subject: "History", thumb: true,
    blurb: "A teacher from Nazareth, a Roman coin, a Roman cross, and a church that started with a handful of people in one city.",
    contains: [
      "A story-form reading, read aloud with the words highlighted",
      "Jesus's life set in the Roman world of Herod and Pilate",
      "The coin question, and the answer no other group gave",
      "Pentecost and the first church in Jerusalem",
    ] },
  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will place the life of Jesus in its Roman setting, explain how his teaching answered the question of living under Rome differently from the Zealots, Sadducees and Pharisees, and describe the first church in Jerusalem."
      ]},
      { h: "Key Vocabulary", vocab: true },
      { h: "Teaching Suggestion", p: [
        "Read Mark 12:13-17 aloud together before the lesson's turn. The trap in the question, and the way the answer steps out of it, is clearer read straight from the Gospel."
      ]},
      { h: "Where This Goes Next", p: [
        "U1-L8 follows the church out of Jerusalem with Paul, and into the persecutions under Nero."
      ]}
    ]
  },

  parts: [
    { title: "A Fourth Answer", s: [
      "The last lesson ended with three answers to a hard question: the Sadducees worked with Rome, the Zealots wanted to fight it, and the Pharisees kept God's law and waited.",
      "Each answer was about Rome, in one way or another, and each one assumed the most important thing was what to do about the empire.",
      "Into that world, in the last years of Herod's reign, a baby was born in Bethlehem, and the answer he gave as a man would not be about Rome at all."
    ]},

    { title: "A Carpenter From Nazareth", s: [
      "Jesus grew up in Nazareth, a small village in Galilee, and worked as a carpenter before he began to teach when he was about thirty.",
      "For about three years he traveled with a group of followers, twelve of whom he chose as his apostles, and crowds gathered wherever he went.",
      "He taught in stories called parables, healed the sick, and said things that turned ordinary ideas upside down, like loving your enemies and praying for the people who treat you badly.",
      "Under Roman occupation, telling people to love their enemies meant loving the soldiers standing in their streets, and not everyone wanted to hear it."
    ]},

    { title: "The Coin", s: [
      "Some of his opponents set a trap, and they asked him in front of a crowd whether it was right to pay taxes to Caesar.",
      "If he said yes, the crowd would see him as a friend of Rome, and if he said no, the Romans could arrest him as a rebel, like a Zealot.",
      "He asked for a Roman coin, asked whose face was stamped on it, and when they said Caesar's, he answered them.",
      "",
      "[verse] Mark 12:17 says, “Render to Caesar the things that are Caesar's, and to God the things that are God's.”",
      "",
      "That was the fourth answer: the coin had Caesar's image on it, but people carry God's image, so Caesar could have his taxes and still never have their hearts."
    ]},

    { title: "A Roman Cross", s: [
      "Jesus's teaching and the crowds that followed him alarmed the religious leaders in Jerusalem, and they brought him before the Roman governor, Pontius Pilate.",
      "Pilate found no crime in him but, afraid of a riot, handed him over to be crucified, the cruelest punishment Rome had, one it saved for slaves and rebels.",
      "The Gospels record that on the third day his tomb was empty and that he appeared alive to his followers, which is the heart of what Christians have believed ever since.",
      "Rome thought it had ended the movement with a cross, but it was about to find out it had only started."
    ]},

    { title: "The First Church", s: [
      "About fifty days later, during the Jewish feast of Pentecost, the apostles began preaching openly in Jerusalem, and the Book of Acts says about three thousand people were baptized that day.",
      "Those first Christians met in homes, ate together, prayed together and shared what they owned so that no one among them went hungry.",
      "",
      "[verse] Acts 2:44 says, “And all that believed were together, and had all things common.”",
      "",
      "They were still mostly Jews, still worshipping at the Temple, and nobody in Rome had heard of them yet."
    ]},

    { title: "What the Fourth Answer Changed", s: [
      "Go back to the three answers to Rome, because each of them was about power: keep it, take it, or wait for God to take it back.",
      "The fourth answer said a person could pay Caesar's tax, love Caesar's soldiers and still belong wholly to God, which meant the faith didn't need a kingdom on a map to survive.",
      "When Rome burned the Temple in AD 70, the Christians had already carried that answer far beyond Judea, and the next lesson follows them."
    ]}
  ],

  words: [
    ["Apostle", "One of the twelve followers Jesus chose and sent out to teach.", 4],
    ["Parable", "A short story Jesus told to teach a lesson.", 5],
    ["Crucifixion", "Rome's cruelest punishment, death on a cross, used for slaves and rebels.", 13],
    ["Pentecost", "The Jewish feast when the apostles began preaching and the first church grew.", 16]
  ],

  findsAt: 23,
  questions: [
    { tag: "The Setting", q: "What did the three answers to Rome from the last lesson have in common?",
      find: [1], hint: "Read A Fourth Answer.",
      choices: [
        "They were all about Rome and what to do about the empire.",
        "They all agreed to fight Rome.",
        "They all refused to pay taxes.",
        "They all came from Nazareth."
      ], right: 0 },
    { tag: "His Teaching", q: "Why was loving your enemies such a hard teaching in Roman Judea?",
      find: [5, 6], hint: "Read A Carpenter From Nazareth.",
      choices: [
        "Because there were no enemies in Judea.",
        "Because it meant loving the Roman soldiers occupying their streets.",
        "Because the Pharisees had banned it.",
        "Because it was against Roman law."
      ], right: 1 },
    { tag: "The Coin", q: "Why was the tax question a trap?",
      find: [8], hint: "Think about what either answer would cost him.",
      choices: [
        "Because Jesus had no money.",
        "Because taxes were already paid.",
        "Because yes would anger the crowd and no could get him arrested as a rebel.",
        "Because the coin was fake."
      ], right: 2 },
    { tag: "The Coin", q: "What was the fourth answer to living under Rome?",
      find: [10, 11], hint: "Read the end of The Coin.",
      choices: [
        "Fight Rome until it leaves.",
        "Cooperate with Rome to protect the Temple.",
        "Hide from Rome and wait.",
        "Give Caesar his taxes, but give God your whole self."
      ], right: 3 },
    { tag: "The Cross", q: "What does it show that Jesus was crucified?",
      find: [13], hint: "Who did Rome crucify?",
      choices: [
        "That Rome treated him like a slave or a rebel.",
        "That he was a Roman citizen.",
        "That Pilate found him guilty of a crime.",
        "That the Temple ordered it."
      ], right: 0 },
    { tag: "The Church", q: "How did the first Christians in Jerusalem live?",
      find: [17], hint: "Read The First Church.",
      choices: [
        "They formed an army.",
        "They met in homes, prayed together and shared what they owned.",
        "They left Judea at once.",
        "They stopped going to the Temple."
      ], right: 1 }
  ],

  vocabQuestions: [
    { q: "What was an <i>apostle</i>?",
      choices: ["A Roman governor.", "One of the twelve followers Jesus chose to teach.", "A tax collector.", "A Temple priest."], right: 1 },
    { q: "What is a <i>parable</i>?",
      choices: ["A short story that teaches a lesson.", "A kind of coin.", "A Roman law.", "A prayer."], right: 0 },
    { q: "Who did Rome use <i>crucifixion</i> for?",
      choices: ["Senators.", "Citizens who paid taxes.", "Priests.", "Slaves and rebels."], right: 3 }
  ],

  todo: { title: "What To Do Now", s: [
      "A Roman coin, a Roman cross and a room full of believers in Jerusalem, and an answer to Rome that didn't need Rome to fall.",
      "{c} word cards sit at the top of the page, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "None of them asks for a date, so read for what each event shows rather than when it happened.",
      "If the coin questions trip you up, read The Coin again and look at whose image is on what.",
      "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] }
};
