/* history/unit-2-review
   Grade 7 · history · unit 2. Its home is this folder.
   Built by tools/build-lessons.js. Edit the lesson here, not in the registry.

   🚨 A REVIEW IS A DIAGNOSTIC, NOT A TEST. Every hint names the lesson to go back to.

   🚨 THE PROSE IS A DRAFT, NOT PAUL'S VOICE. Written 2026-10-11 on Sonnet from the nine
   Unit 2 lessons and the Leif outline (U2 L10: Review of Byzantium, Islam, and Medieval
   Worlds). The packet has only chapter-review orientation for this unit, since the book's
   chapter layout differs from the plan. Given THE PASS and stamped.

   ⚠️ THE FRAME IS THE UNIT'S OWN MIRROR: U2-L1 opens with walls that held for a thousand
   years, and the last lessons end on a continent with no walls at all. The review runs
   between those two places.

   ⚠️ NOTHING NEW IS TAUGHT HERE. Every fact is from a Unit 2 lesson, including the date
   of Constantinople's fall, 1453, which is in U2-L1.

   Copied from history/unit-1/unit-1-review.js: the file shape, the tag-per-question style
   and the hints that name the lesson. No verse, since a review adds no new teaching. */
'use strict';
module.exports = {
  id: "history/unit-2-review",
  slug: "unit-2-review",
  title: "Unit 2 Review: The East, Islam, and Early Medieval Europe",
  unit: "World History &middot; U2-L10",
  seq: { unit: 2, unitTitle: "The East Endures, and Islam Rises", n: 10 },
  natural: "2026-10-11",
  eyebrow: "World History",
  dek: "This unit began behind walls that held for a thousand years and ends in a Europe with almost none. Everything in between was a different answer to the same question: what holds a world together?",
  plan: {
    objective: "Pull the nine Unit 2 lessons into one story, from Constantinople's walls to a Europe of raiders, and see how each world tried to hold itself together.",
    markers: [
      "Leif U2 L10: Review of Byzantium, Islam, and Medieval Worlds.",
      "U2-L1's opening: people in Constantinople went on calling themselves Romans a thousand years after Rome fell. U2-L8's closing: from the mid-800s western Europe was in constant warfare.",
    ],
    method: "A recap that runs from the walled city to the wall-less continent, one paragraph per stretch of the unit, with every hint naming the lesson to reopen.",
    exampleOnly: [
      "Constantinople, Justinian, the split of 1054, Mecca and Baghdad, Cordoba, the monk at his desk and Charlemagne. WORLD: the unit's own examples, so recognizing them is the recall.",
    ],
    digitize: "The existing reading engine, no new mechanic.",
    unclear: "",
  },
  sheet: { slug: "history-unit-2-review-homework", subject: "history",
    note: "Do it on screen or print it. Your score shows here once you check it." },

  video: { id: "Okph9wt8I0A", title: "The rise and fall of the Byzantine Empire", channel: "TED-Ed",
    why: "A short animated retelling of the empire that opened this unit. Good as a final look at the East before the unit's other worlds." },
  shelf: { grades: [7], subject: "History",
    blurb: "A city behind walls that held for a thousand years, a faith from the desert, a monk with a goose-feather pen and a king who could hardly write. Nine lessons in one pass.",
    contains: [
      "A story-form reading, read aloud with the words highlighted",
      "Constantinople, Justinian and the split of the church",
      "The rise of Islam, Baghdad and Cordoba",
      "Monks, the Franks and Charlemagne",
      "The map that ties them together",
    ] },
  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Bring the nine Unit 2 lessons together, check which ones hold, and send the student back to any that don't. Every hint names the lesson to reopen."
      ]},
      { h: "Key Vocabulary", vocab: true },
      { h: "Where This Goes Next", p: [
        "Unit 3 picks up in the Europe this unit ends in, with raiders at the coast and no king strong enough to answer, and shows what grew up to fill the gap, which was feudalism."
      ]}
    ]
  },

  parts: [
    { title: "Walls, and Places Without Them", s: [
      "This unit opened with a city whose walls held off army after army for a thousand years, where people went on calling themselves Romans long after Rome had fallen.",
      "It closes in a Europe with almost no walls at all, where raiders came up the rivers and the kings were too far away to come.",
      "Everything you learned in between was an answer to one question: what holds a world together, when the old empire is gone?"
    ]},

    { title: "The City That Held", s: [
      "Constantinople sat on a narrow strait where Europe meets Asia, rich from the ships that had to pass it and safe behind its sea and its double wall.",
      "In 532 its own crowd nearly drove out the emperor Justinian, and his wife Theodora refused to run, so he stayed to rebuild Hagia Sophia and to gather Rome's tangled laws into one Code.",
      "That Code still sits behind courtrooms today, and Constantinople itself lasted until 1453, when the Ottoman Turks finally broke through its walls."
    ]},

    { title: "One Church, Then Two", s: [
      "The Eastern and Western churches had been drifting apart for centuries, over who was in charge, over icons, and over a single added phrase in the creed.",
      "In July of 1054 a cardinal named Humbert laid a letter on the altar of Hagia Sophia, and the schism that followed split the church into the Roman Catholic and the Eastern Orthodox.",
      "They disagreed about the pope, about priests marrying and about the language of worship, but they kept the same gospel, baptism and bishops."
    ]},

    { title: "A Faith From the Desert", s: [
      "Meanwhile, in the Arabian desert, a merchant named Muhammad said that God had spoken to him, and after the Hijrah of 622 and his death in 632, the faith of Islam spread across three continents.",
      "A century later its caliphs ruled from Spain to the edge of India, and in 762 the Abbasids founded Baghdad, a marketplace for the world with the House of Wisdom at its heart.",
      "There scholars translated Greek books, borrowed Indian numerals and wrote the book that gave us the word algebra, and the golden age ended when the Mongols reached the city in 1258."
    ]},

    { title: "Neighbors Who Traded and Fought", s: [
      "In Spain, the Umayyad prince Abd al-Rahman escaped a massacre and built a kingdom whose capital, Cordoba, became a city where Muslims, Jews and Christians shared books.",
      "At the same time the border kept filling with raids and counter-raids, and in the east the Seljuk Turks pressed on the Byzantines, who in 1095 sent a call for help to the West."
    ]},

    { title: "The West With No Walls", s: [
      "In the West the cities had emptied and the schools had closed, and monks like Benedict's followers kept the books alive in their scriptoriums while missionaries like Patrick, Augustine and Boniface carried the faith north.",
      "The Franks, led by Clovis, Charles Martel and Pepin, built a strong kingdom, and in the year 800 the pope crowned Charlemagne emperor, and he held the land together with counts, inspectors and a court school.",
      "But the empire was held together by one man's will, and in 843 his grandsons split it into three, while Vikings, Muslim raiders and Magyars struck from every side."
    ]},

    { title: "The Land Behind It All", s: [
      "A map explained a lot of it, because the Bosporus made Constantinople rich, the desert made the Bedouin travelers, the Tigris gave Baghdad its markets and the Pyrenees marked the line between the Franks and Muslim Spain.",
      "That's the unit in one view: three worlds, each trying to hold itself together, and the one with the least to hold it, the Europe of the Franks, was about to try something new.",
      "What does a frightened village do when no king can protect it?",
      "The next unit starts there, with a lord, a knight and a promise."
    ]}
  ],

  words: [
    ["Schism", "An official split, like the one in 1054 that divided the church into the Roman Catholic and the Eastern Orthodox.", 7],
    ["Golden age", "A time when a civilization is at its best, like Baghdad's under the Abbasids.", 10],
    ["Monastery", "A community where monks live, pray and work, apart from ordinary life.", 14],
    ["Treaty", "A written agreement between rulers, like the one in 843 that divided Charlemagne's empire into three.", 16]
  ],

  findsAt: 21,
  questions: [
    { tag: "The City That Held", q: "Why was Constantinople so hard to capture?", find: [3],
      hint: "Go back to Constantinople, and the Empire That Did Not Fall.",
      choices: [
        "It had no walls.",
        "It was surrounded by sea on three sides and had a double wall on the land side.",
        "It was hidden in a desert.",
        "Nobody wanted it."
      ], right: 1 },

    { tag: "The City That Held", q: "What lasting work did Justinian order?", find: [4],
      hint: "Go back to Justinian and the Law We Still Use.",
      choices: [
        "A canal across Egypt.",
        "The Justinian Code, one clear book of Rome's laws.",
        "The Great Wall.",
        "A university in Paris."
      ], right: 1 },

    { tag: "One Church, Then Two", q: "What did the schism of 1054 do?", find: [7],
      hint: "Go back to One Church Becomes Two.",
      choices: [
        "It united the Eastern and Western churches.",
        "It split the church into the Roman Catholic and the Eastern Orthodox.",
        "It ended the Byzantine Empire.",
        "It crowned Charlemagne."
      ], right: 1 },

    { tag: "A Faith From the Desert", q: "What was the Hijrah?", find: [9],
      hint: "Go back to The Rise of Islam.",
      choices: [
        "The Muslim call to prayer.",
        "Muhammad's move with his followers from Mecca to Medina in 622.",
        "A battle in Spain.",
        "The Muslim holy book."
      ], right: 1 },

    { tag: "A Faith From the Desert", q: "What was the House of Wisdom?", find: [10],
      hint: "Go back to Trade, Learning, and the Islamic Golden Age.",
      choices: [
        "A mosque in Mecca.",
        "A center in Baghdad where scholars translated Greek books and learned from others.",
        "A palace in Cordoba.",
        "A school for Frankish nobles."
      ], right: 1 },

    { tag: "Neighbors", q: "What happened in 1095?", find: [13],
      hint: "Go back to Contact and Conflict Across the Mediterranean.",
      choices: [
        "Charlemagne was crowned.",
        "The Byzantine emperor sent a call for help to the Christian rulers of the West.",
        "The schism began.",
        "Baghdad fell."
      ], right: 1 },

    { tag: "The West", q: "How did monasteries keep learning alive?", find: [14],
      hint: "Go back to Monasteries, Missionaries, and Medieval Faith.",
      choices: [
        "By collecting taxes.",
        "By copying books by hand in their scriptoriums and teaching Latin.",
        "By building walls around the cities.",
        "By trading with Baghdad."
      ], right: 1 },

    { tag: "The West", q: "What happened to Charlemagne's empire after he died?", find: [16],
      hint: "Go back to The Franks and Charlemagne.",
      choices: [
        "It grew twice as large.",
        "His grandsons split it in three in 843, and raiders struck from every side.",
        "It became part of the Byzantine Empire.",
        "It became a republic."
      ], right: 1 },

    { tag: "The Map", q: "Which landform marked the line between the Franks and Muslim Spain?", find: [17],
      hint: "Go back to Reading the Map.",
      choices: ["The Alps.", "The Pyrenees.", "The Sahara.", "The Nile."], right: 1 }
  ],

  vocabQuestions: [
    { q: "What is a <i>schism</i>?",
      choices: ["An official split", "A kind of law", "A battle", "A school"], right: 0 },
    { q: "What is a <i>golden age</i>?",
      choices: ["A time of war", "A time when a civilization is at its best", "A kind of coin", "The end of an empire"], right: 1 },
    { q: "What is a <i>monastery</i>?",
      choices: ["A king's palace", "A castle wall", "A community where monks live, pray and work", "A school for soldiers"], right: 2 },
    { q: "What is a <i>treaty</i>?",
      choices: ["A written agreement between rulers", "A kind of tax", "A battle plan", "A city"], right: 0 }
  ],

  todo: { title: "What To Do Now", s: [
      "A walled city and a Europe with almost no walls are the two ends of this review, so keep both in mind as you go.",
      "{c} word cards sit at the top of the page, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "Every hint names the lesson to go back to, so when you miss one, reopen that lesson instead of guessing again.",
      "Last, open the Homework Sheet with the button at the bottom of the page, and either fill it out right on the screen or print it and do it on paper."
  ] }
};
