/* history/one-church-becomes-two
   Grade 7 · history · unit 2. Its home is this folder.
   Built by tools/build-lessons.js. Edit the lesson here, not in the registry.

   🚨 THE PROSE IS A DRAFT, NOT PAUL'S VOICE. Written 2026-10-05 on Sonnet from the
   Leif outline (U2 L3: The Christian Church in East and West) and McDougal Littell
   World History: Medieval and Early Modern Times Ch2 Lesson 3, "Disagreements Split
   Christianity", via the week 6-7 packet (paraphrased notes). Given THE PASS and
   stamped.

   ⚠️ THE ROW'S McDOUGAL REFERENCE WAS WRONG: it said Ch9 §1, and the packet found
   that Ch9 Lesson 1 doesn't cover the split. The split is in Ch2 Lesson 3, so the
   unit-file row now says Ch2 §3. Worth a glance.

   ⚠️ ADDED FROM THE RECORD, worth a glance: the events of July 1054 (Cardinal
   Humbert leaving a letter of excommunication on the altar of Hagia Sophia, and
   Patriarch Michael Cerularius and his council answering in kind, with the pope
   who sent Humbert already dead since April), and the dispute over the word
   "filioque" ("and from the Son") added to the Nicene Creed in the West. The
   book gives 730 (Leo III bans icons) and 1054 (the schism), and the chart of
   differences and likenesses.

   ⚠️ TONE. Two churches are described side by side, as they describe themselves
   and as the book charts them. No side is taken and neither is mocked. The
   differences stated are the book's (language, the pope's authority, priests
   marrying, emperor over patriarch) plus the added creed dispute. The lesson
   ends on what they share.

   🚨 THE VERSE IS A WORKING CHOICE, NOT PAUL'S. Ephesians 4:4-5. */
'use strict';
module.exports = {
  id: "history/one-church-becomes-two",
  slug: "one-church-becomes-two",
  title: "One Church Becomes Two",
  unit: "World History &middot; U2-L3",
  seq: { unit: 2, unitTitle: "The East Endures, and Islam Rises", n: 3 },
  natural: "2026-10-05",
  eyebrow: "World History",
  dek: "A cardinal left a letter on an altar and walked out, and that afternoon one church became two. It took six hundred years to get there.",
  plan: {
    objective: "Explain why the church split into the Roman Catholic and Eastern Orthodox churches in 1054, and name how they differed and what they kept in common.",
    markers: [
      "McDougal Ch2 Lesson 3 (paraphrased): the Byzantine emperors took a great interest in religion and saw themselves as the final authority, while the popes claimed the last word.",
      "McDougal (paraphrased): in 730 the emperor Leo III banned icons as idol worship, and the pope supported them.",
      "McDougal (paraphrased): the schism of 1054 created the Roman Catholic Church in the West and the Orthodox Church in the East.",
      "McDougal chart (paraphrased): Catholic worship in Latin or local languages, the pope with authority over all bishops, priests not allowed to marry; Orthodox, with the emperor ruling over the patriarch.",
      "McDougal (paraphrased): both share a faith based on the gospel and the Bible, baptism and other sacraments, and priests and bishops.",
    ],
    method: "One open question, 'How do people who share one faith end up in two churches?', held through the long slow drift, the quarrel over pictures and the events of 1054, and answered at the end by what they kept.",
    exampleOnly: [
      "The cardinal in Hagia Sophia, the quarrel over icons, the word added to the creed. WORLD: the Church between Rome and Constantinople, roughly 730 to 1054.",
    ],
    digitize: "The existing reading engine. Questions ask what caused the split, how the two differed and what they kept.",
    unclear: "",
  },
  shelf: { grades: [7], subject: "History",
    blurb: "A cardinal laid a letter on an altar in 1054 and the Church split in two. The slow quarrel behind it, what separated East and West, and what they never gave up.",
    contains: [
      "A story-form reading, read aloud with the words highlighted",
      "The quarrel over icons, and over who had the last word",
      "What happened in Hagia Sophia in July 1054",
      "A fair look at how the churches differ and what they share",
    ] },
  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will explain why Christianity split into the Roman Catholic and Eastern Orthodox churches in 1054, describe how the two differed, and name what they kept in common."
      ]},
      { h: "Key Vocabulary", vocab: true },
      { h: "Handle This Evenly", p: [
        "Describe the two churches the way each would describe itself, and let the student reach his own conclusions about what the differences mean. The book's chart is the guide for what differed, and the lesson ends on what the two still share.",
        "The creed dispute and the events of July 1054 are added from the historical record and aren't from the book. They're here because the book's chart doesn't explain why the break happened on that day."
      ]},
      { h: "Where This Goes Next", p: [
        "U2-L4 turns south and east to Arabia, where Islam begins in the seventh century, the same region the Byzantine Empire borders."
      ]}
    ]
  },

  parts: [
    { title: "A Letter on the Altar", s: [
      "On a Saturday in July of 1054, a cardinal named Humbert walked into the great church of Hagia Sophia in Constantinople just as a service was about to begin.",
      "He laid a letter on the altar, turned around, and walked back out through the doors, shaking the dust from his feet as he went.",
      "The letter said that the patriarch of Constantinople, the most powerful churchman in the East, was cut off from the Church, and the patriarch's answer, a few days later, was that Humbert and the men with him were cut off in return.",
      "Both men believed in the same Christ, so how do people who share one faith end up in two churches?"
    ]},

    { title: "A Church With Two Heads", s: [
      "After Rome fell in the West, the bishop of Rome, the pope, stayed the head of the church there, and the Church already had its ranks of priests, bishops and a pope.",
      "In the East the Byzantine Empire lived on, and its emperors took a deep interest in religion, seeing themselves as the final authority in church matters, while the popes claimed that they had the last word.",
      "There was a language gap too, because the West worshiped mostly in Latin and the East in Greek, and over the centuries fewer people in either half could read the other's books.",
      "None of that started a fight by itself, but it set up a question that would take about six hundred years to come to a head: who is in charge of the Church?"
    ]},

    { title: "The Fight Over Pictures", s: [
      "In 730, the emperor Leo III banned icons, the painted religious images that Christians used in their prayers, because he thought praying to them was idol worship.",
      "Many people in the East were furious, since icons were part of how they worshiped, and the pope in Rome sided with the people who kept them.",
      "Notice what that argument was really about: an emperor in Constantinople had given an order about worship, and the pope refused to take it from him.",
      "The ban on icons wasn't kept for good, but the question under it, whether an emperor could tell the Church what to do, stayed open."
    ]},

    { title: "A Word Added to the Creed", s: [
      "A second quarrel was about a single phrase.",
      "The Nicene Creed, the statement of faith that Christians in both halves said, says the Holy Spirit comes from the Father, and in the West churches had begun adding the words “and from the Son.”",
      "The Latin word for those words is filioque, and the East objected on two grounds: that the teaching itself needed careful thought, and that nobody in the West had any right to change the creed without the whole Church agreeing.",
      "It was one more case of the same old question, because who has the authority to change a creed is a question about who is in charge."
    ]},

    { title: "July 1054", s: [
      "By the 1050s the pope's envoy, Cardinal Humbert, and Michael Cerularius, the patriarch of Constantinople, had been quarreling for months.",
      "Then came the day in Hagia Sophia, when Humbert laid down his letter excommunicating the patriarch, meaning that he declared him cut off from the Church, and the patriarch and his council answered by excommunicating Humbert and his companions.",
      "It's worth knowing that the pope who sent Humbert had died that April, so some in the East said the letter didn't carry the pope's authority at all.",
      "Nobody that day said the Church had been torn in two, but the break never healed, and historians call this moment the schism of 1054, a schism being an official split, and from it came the Roman Catholic Church in the West and the Orthodox Church in the East."
    ]},

    { title: "What They Disagreed On, and What They Kept", s: [
      "The book's chart lists the main differences, and the first is the pope: in the Roman Catholic Church he has authority over all the bishops, and the pope claimed authority over kings and emperors too, while in the East the emperor ruled over the patriarch.",
      "Catholic worship was in Latin or in local languages, Greek and other languages were used in the East, and a Catholic priest wasn't allowed to marry, while Orthodox priests could.",
      "But the list of what they shared is longer than people expect: a faith built on the gospel and the Bible, baptism and the other sacraments, and a Church led by priests and bishops.",
      "",
      "[verse] Ephesians 4:4-5 says, “There is one body, and one Spirit, even as ye are called in one hope of your calling; One Lord, one faith, one baptism.”",
      "",
      "Paul wrote that to believers who were tempted to divide, and it's the same sentence both churches would point to, since each still baptizes in the name of the one Lord, and it's why the question from the cardinal's letter still has an answer: they separated over who was in charge and how to worship, and not over who Christ was."
    ]}
  ],

  words: [
    ["Schism", "An official split, especially a split within a church.", 19],
    ["Icon", "A painted religious image used in prayer.", 8],
    ["Excommunicate", "To declare a person cut off from the Church.", 17],
    ["Orthodox Church", "The church of the East, which split from Rome in 1054.", 19]
  ],

  findsAt: 25,
  questions: [
    { tag: "1054", q: "What did Cardinal Humbert do in Hagia Sophia in July 1054?",
      find: [1],
      hint: "Read A Letter on the Altar.",
      choices: [
        "He crowned a new emperor.",
        "He preached a sermon about icons.",
        "He laid a letter on the altar declaring the patriarch cut off from the Church.",
        "He burned the church down."
      ], right: 2 },

    { tag: "Authority", q: "What was the old question under many of the quarrels between East and West?",
      find: [7, 10],
      hint: "Read A Church With Two Heads.",
      choices: [
        "Who was in charge of the Church.",
        "Which language Jesus spoke.",
        "How many books were in the Bible.",
        "Where the Church should build its churches."
      ], right: 0 },

    { tag: "Emperors", q: "How did the Byzantine emperors see themselves in religious matters?",
      find: [5],
      hint: "They took a deep interest in religion.",
      choices: [
        "As helpers to the pope.",
        "As the final authority.",
        "As outsiders to the Church.",
        "As students of the patriarch."
      ], right: 1 },

    { tag: "Icons", q: "Why did the emperor Leo III ban icons in 730?",
      find: [8],
      hint: "Read The Fight Over Pictures.",
      choices: [
        "He wanted to build new churches.",
        "He thought the pope had made them.",
        "He thought they were too expensive.",
        "He thought praying to them was idol worship."
      ], right: 3 },

    { tag: "Creed", q: "What did the East object to about the words “and from the Son”?",
      find: [14],
      hint: "Read A Word Added to the Creed.",
      choices: [
        "The words were too long to say.",
        "That nobody had the right to change the creed without the whole Church agreeing.",
        "That they were written in Latin.",
        "That the pope had written them."
      ], right: 1 },

    { tag: "The Split", q: "What's a schism?",
      find: [19],
      hint: "Read July 1054.",
      choices: [
        "A prayer in Latin.",
        "A kind of church leader.",
        "An official split.",
        "A painted image."
      ], right: 2 },

    { tag: "Differences", q: "Which of these was a difference between the two churches?",
      find: [20],
      hint: "Read What They Disagreed On, and What They Kept.",
      choices: [
        "In the East the emperor ruled over the patriarch.",
        "Only one of them used the Bible.",
        "Only one of them practiced baptism.",
        "Only one of them had bishops."
      ], right: 0 },

    { tag: "Common Ground", q: "What did the two churches have in common?",
      find: [22],
      hint: "Read the end of the lesson.",
      choices: [
        "The same pope.",
        "A faith based on the gospel and the Bible, baptism and priests and bishops.",
        "The same language for worship.",
        "The same emperor."
      ], right: 1 }
  ],

  vocabQuestions: [
    { q: "What is a <i>schism</i>?",
      choices: ["An official split.", "A painted image.", "A prayer.", "A kind of priest."], right: 0 },
    { q: "What is an <i>icon</i>?",
      choices: ["A letter on an altar.", "A church leader.", "A painted religious image used in prayer.", "A statement of faith."], right: 2 },
    { q: "What does it mean to <i>excommunicate</i> someone?",
      choices: ["To send them to Rome.", "To make them a bishop.", "To ask them to pray.", "To declare them cut off from the Church."], right: 3 },
    { q: "What was the <i>Orthodox Church</i>?",
      choices: ["The church of the West, led by the pope.", "The church of the East, which split from Rome in 1054.", "A church in Arabia.", "The name of an emperor."], right: 1 }
  ],

  todo: { title: "What To Do Now", s: [
      "A cardinal left a letter on an altar and the Church was never the same, and the questions ask how it got there.",
      "{c} word cards sit at the top of the page, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "None of them asks for a date, so read for what each quarrel was really about.",
      "If the differences questions trip you up, read What They Disagreed On, and What They Kept again.",
      "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] }
};
