/* history/judea-under-rome
   Grade 7 · history · unit 1. Its home is this folder.
   Built by tools/build-lessons.js. Edit the lesson here, not in the registry.

   🚨 THE PROSE IS A DRAFT, NOT PAUL'S VOICE. Written 2026-09-24 on Opus from the
   Leif outline (U1 L6: Judea Under the Roman Order), McDougal Littell World History:
   Ancient Civilizations (the Rome and Christianity chapter, read on the borrowed
   copy), the Gospels, and the historical record. Given THE PASS and stamped.

   ⚠️ THE METHOD IS THE UNIT'S: one question asked at the start and again at the end.
   Here it's "How do you stay faithful under a ruler who doesn't share your faith?"

   🚨 THE VERSE IS A WORKING CHOICE, NOT PAUL'S. Luke 2:1 fits (Rome's census is what
   moved Joseph and Mary to Bethlehem, which hands straight on to U1-L7). */
'use strict';
module.exports = {
  id: "history/judea-under-rome",
  slug: "judea-under-rome",
  title: "Judea Under Roman Rule",
  unit: "World History &middot; U1-L6",
  seq: { unit: 1, unitTitle: "Rome, and the Church That Outlived It", n: 6 },
  natural: "2026-09-24",
  eyebrow: "World History",
  dek: "A small province at the edge of the empire, a people who answered to God before Caesar, and a Roman governor who never quite understood them.",
  plan: {
    objective: "Explain how Rome ruled Judea, why Roman rule and Jewish faith kept colliding, and how different Jewish groups answered that pressure, ending in the revolt and the Temple's destruction in AD 70.",
    markers: [
      "Leif U1 L6: Judea Under the Roman Order.",
      "The unit question is asked at the top and again at the close, as U1-L4 and U1-L5 do.",
      "McDougal's Rome and Christianity chapter frames Judea as the setting for Jesus and the early church.",
    ],
    method: "One question held open across the lesson, answered a layer at a time: conquest, a client king, Roman governors, the groups inside Judea, and the revolt that ended it.",
    exampleOnly: [
      "Pompey, Herod, Pilate, the tax collector, the Temple, Masada. WORLD: one province, from conquest to ruin.",
    ],
    digitize: "The existing reading engine. Questions ask what an episode SHOWS, never for a date.",
    unclear: "",
  },
  shelf: { grades: [7], subject: "History", thumb: true,
    blurb: "A tiny province that answered to God before Caesar. How Rome ruled Judea, and why it kept going wrong.",
    contains: [
      "A story-form reading, read aloud with the words highlighted",
      "Pompey, Herod and Pontius Pilate",
      "Pharisees, Sadducees and Zealots, and how each answered Rome",
      "The revolt, and the Temple's fall in AD 70",
    ] },
  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will explain how Rome took and governed Judea, why Roman rule kept clashing with Jewish faith, how the major Jewish groups responded, and how the conflict ended in the revolt of AD 66 and the Temple's destruction in AD 70."
      ]},
      { h: "Key Vocabulary", vocab: true },
      { h: "Teaching Suggestion", p: [
        "Keep the unit question in front of the student: how do you stay faithful under a ruler who doesn't share your faith? Each Jewish group in the lesson is a different answer to it, and the student can say which answer he finds wisest and why."
      ]},
      { h: "Where This Goes Next", p: [
        "This lesson is the stage for U1-L7. Jesus is born under Herod, during a Roman census, and is crucified by a Roman governor. Everything here is the world the Gospels take for granted."
      ]}
    ]
  },

  parts: [
    { title: "A Different Kind of Province", s: [
      "Rome ruled dozens of provinces, and most of them made room for Roman gods alongside their own without much trouble.",
      "Judea was different, because the Jews worshipped one God only, and his law told them not to bow to any image or any emperor.",
      "That left every Jew under Roman rule with a hard question, one this lesson keeps asking until the end: how do you stay faithful under a ruler who doesn't share your faith?"
    ]},

    { title: "Pompey Walks Into the Temple", s: [
      "In 63 BC the Roman general Pompey marched on Jerusalem, took the city after a siege, and then did something no Jew ever forgot.",
      "He walked straight into the Holy of Holies, the innermost room of the Temple, where only the high priest was allowed to enter, and only once a year.",
      "He found no idol there, which surprised him, and he left without taking anything, but Judea had its answer to what Roman rule would feel like.",
      "From then on Judea paid Rome taxes and lived under Rome's army, even when it kept its own rulers."
    ]},

    { title: "Herod, Rome's King of the Jews", s: [
      "Rome liked to rule through local kings who owed it everything, and in Judea that king was Herod, who reigned from 37 BC until 4 BC.",
      "Herod was a brilliant builder, and he rebuilt the Temple in Jerusalem on such a scale that people came from all over the world to see it.",
      "He was also brutal and suspicious, executing his own wife and several of his sons whenever he feared a plot, and many Jews never accepted him as a true king.",
      "Herod was still on the throne when the next lesson begins, because Jesus was born near the end of his reign."
    ]},

    { title: "Governors, Taxes and a Census", s: [
      "After Herod died, Rome took more direct control and sent governors, and the best known of them is Pontius Pilate, who ruled Judea from about AD 26 to 36.",
      "Roman rule reached into daily life through taxes, and Jews who collected those taxes for Rome, the publicans, were hated as traitors by their neighbors.",
      "Rome also counted its people so it could tax them, and a census like that is how the Gospel of Luke explains why Joseph and Mary were in Bethlehem at all.",
      "",
      "[verse] Luke 2:1 says, “And it came to pass in those days, that there went out a decree from Caesar Augustus, that all the world should be taxed.”",
      "",
      "An emperor in Rome signed an order about money, and a young family from Nazareth set out on a journey that changed history."
    ]},

    { title: "Three Answers to Rome", s: [
      "Not every Jew answered the lesson's question the same way, and three groups gave three very different answers.",
      "The Sadducees, mostly wealthy priests who ran the Temple, worked with Rome to keep the peace and protect the Temple.",
      "The Pharisees, teachers who focused on keeping God's law in everyday life, mostly avoided politics and waited for God to act.",
      "The Zealots believed faithfulness meant fighting, and they wanted to drive Rome out by force, while many ordinary people simply hoped for the Messiah, the anointed king the prophets had promised."
    ]},

    { title: "The Revolt and the Fall of the Temple", s: [
      "In AD 66 the Zealots' answer won out, and Judea rose up against Rome in a full revolt.",
      "Rome sent its legions, and in AD 70 the general Titus captured Jerusalem after a long siege and burned the Temple Herod had rebuilt.",
      "The last rebels held out on a mountain fortress called Masada until about AD 73, and after that there was no Jewish state for nearly two thousand years.",
      "The Temple has never been rebuilt, and part of its western retaining wall is still standing in Jerusalem today."
    ]},

    { title: "So How Do You Stay Faithful?", s: [
      "Go back to the question the lesson started with: how do you stay faithful under a ruler who doesn't share your faith?",
      "The Sadducees answered by cooperating, the Zealots by fighting, and the Pharisees by keeping God's law and waiting, and Rome crushed the fighting answer in AD 70.",
      "In the next lesson a teacher from Nazareth gives a fourth answer, and it's one that none of these groups expected."
    ]}
  ],

  words: [
    ["Province", "A region ruled by Rome from outside, paying taxes and living under Roman law.", 6],
    ["Publican", "A Jew who collected taxes for Rome, and was hated for it.", 12],
    ["Zealots", "Jews who believed faithfulness meant driving Rome out by force.", 19],
    ["Messiah", "The anointed king the prophets promised would come to save Israel.", 19]
  ],

  findsAt: 27,
  questions: [
    { tag: "The Question", q: "Why was Judea harder for Rome to rule than most provinces?",
      find: [1], hint: "Read A Different Kind of Province.",
      choices: [
        "Judea had no taxes to collect.",
        "The Jews worshipped one God only and would not bow to other gods or the emperor.",
        "Judea was too far from Rome to reach.",
        "The Jews had no army at all."
      ], right: 1 },
    { tag: "Pompey", q: "What did Pompey do in 63 BC that no Jew forgot?",
      find: [4], hint: "Read Pompey Walks Into the Temple.",
      choices: [
        "He burned the Temple.",
        "He made Herod king.",
        "He walked into the Holy of Holies, where only the high priest could go.",
        "He banned the Sabbath."
      ], right: 2 },
    { tag: "Herod", q: "What does Herod's reign show about how Rome ruled?",
      find: [7], hint: "Read Herod, Rome's King of the Jews.",
      choices: [
        "Rome liked to rule through local kings who owed it everything.",
        "Rome let the Jews choose their own king freely.",
        "Rome never allowed kings in its provinces.",
        "Rome sent the emperor to live in Judea."
      ], right: 0 },
    { tag: "Daily Life", q: "Why were publicans hated?",
      find: [12], hint: "Read Governors, Taxes and a Census.",
      choices: [
        "They were Roman soldiers.",
        "They ran the Temple.",
        "They led the revolt.",
        "They were Jews collecting taxes for Rome from their own neighbors."
      ], right: 3 },
    { tag: "Three Answers", q: "How did the Zealots answer the question of staying faithful under Rome?",
      find: [19], hint: "Read Three Answers to Rome.",
      choices: [
        "By working with Rome to protect the Temple.",
        "By fighting to drive Rome out by force.",
        "By avoiding politics and waiting.",
        "By becoming Roman citizens."
      ], right: 1 },
    { tag: "The End", q: "What happened in AD 70?",
      find: [21], hint: "Read The Revolt and the Fall of the Temple.",
      choices: [
        "Pompey took Jerusalem.",
        "Herod rebuilt the Temple.",
        "Titus captured Jerusalem and the Temple was burned.",
        "Pilate became governor."
      ], right: 2 }
  ],

  vocabQuestions: [
    { q: "What was a <i>publican</i>?",
      choices: ["A Roman governor.", "A Jew who collected taxes for Rome.", "A Temple priest.", "A Zealot fighter."], right: 1 },
    { q: "What did the <i>Zealots</i> believe?",
      choices: ["That faithfulness meant fighting Rome.", "That Rome should be obeyed.", "That the Temple should be closed.", "That taxes were fair."], right: 0 },
    { q: "Who was the <i>Messiah</i>?",
      choices: ["The Roman emperor.", "Herod.", "A tax collector.", "The anointed king the prophets promised."], right: 3 }
  ],

  todo: { title: "What To Do Now", s: [
      "Judea spent a hundred years trying to answer one hard question, and three groups answered it three ways.",
      "{c} word cards sit at the top of the page, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "None of them asks you for a date, so don't try to memorize the years; they're there to tell the story.",
      "The one people get wrong is how the three groups answered Rome, so if that trips you up, read Three Answers to Rome again.",
      "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] }
};
