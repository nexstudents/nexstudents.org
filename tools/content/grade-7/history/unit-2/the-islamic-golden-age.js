/* history/the-islamic-golden-age
   Grade 7 · history · unit 2. Its home is this folder.
   Built by tools/build-lessons.js. Edit the lesson here, not in the registry.

   🚨 THE PROSE IS A DRAFT, NOT PAUL'S VOICE. Written 2026-10-05 on Sonnet from the
   Leif outline (U2 L5: Trade, Learning, and the Islamic Golden Age) and McDougal
   Littell World History: Medieval and Early Modern Times Ch4 Lesson 2, "A Golden
   Age in the East", via the week 6-7 packet (paraphrased notes). Given THE PASS and
   stamped.

   ⚠️ ADDED FROM THE RECORD, worth a glance from Paul:
   · The translators in the House of Wisdom were often Christians and Jews, for
     example Hunayn ibn Ishaq, a Christian physician who translated Greek medical
     works into Arabic. The packet doesn't say this; it comes from the record.
   · That the word "algebra" comes from al-jabr, which the packet gives, and that
     the word "algorithm" comes from al-Khwarizmi's name, which the packet doesn't.
   · That the Abbasids took the caliphate from the Umayyads in 750. The packet says
     only that the Abbasids split from Umayyad control. The fuller story of the
     Umayyad who escaped is the next lesson.
   The Seljuk capture of Jerusalem (the 1070s; the packet gave 1071) is in the book's pages on decline and is
   mentioned in one line here as a thing to come; the next lesson tells it.

   ⚠️ TONE. Islam is reported as history, with respect and without endorsement or
   mockery, the same rule as U2-L4. The achievements are told as achievements of
   real people in a real city. The comparison box in the book (Muslim art avoids
   human forms and uses patterns) is given as a fact about the art, with no
   judgment on either tradition.

   🚨 THE VERSE IS A WORKING CHOICE, NOT PAUL'S. Proverbs 4:7. */
'use strict';
module.exports = {
  id: "history/the-islamic-golden-age",
  slug: "the-islamic-golden-age",
  title: "Trade, Learning, and the Islamic Golden Age",
  unit: "World History &middot; U2-L5",
  seq: { unit: 2, unitTitle: "The East Endures, and Islam Rises", n: 5 },
  natural: "2026-10-05",
  eyebrow: "World History",
  dek: "A city on the Tigris River became a marketplace for the world and a place where books from three continents were read. Your math class still uses one of its words.",
  plan: {
    objective: "Explain how the Abbasid caliphate made Baghdad a center of trade and learning, name key advances (paper, the House of Wisdom, algebra, medicine), and explain why the caliphate declined.",
    markers: [
      "McDougal Ch4 Lesson 2 (paraphrased): the Abbasids broke away from Umayyad control and ruled the eastern lands with a huge standing army, and they followed an inclusion policy under which all Muslims were treated as equals and Christians and Jews served in government.",
      "McDougal (paraphrased): in 762 the Abbasids moved their capital to Baghdad on the Tigris River, called a marketplace for the world, which traded with China, India, northern Europe and Africa and grew to over 900,000 people by the early 800s.",
      "McDougal (paraphrased): the Muslims learned papermaking from China in the 750s, and there was a papermaking industry in Baghdad by the early 800s. The House of Wisdom, founded in the 830s, translated Greek works by writers such as Aristotle and Plato.",
      "McDougal (paraphrased): al-Khwarizmi, born about 780, brought Indian numerals and the zero and wrote about al-jabr, the source of the word algebra. Omar Khayyam did mathematics and made an accurate calendar, and Ibn Sina wrote a medical encyclopedia used for over 600 years, and hospitals treated the poor and taught doctors.",
      "McDougal (paraphrased), decline: factions from the mid-800s, neglected trade safety and higher taxes, a rival caliphate in Cairo, and in 1258 the Mongols destroyed Baghdad and killed the last Abbasid caliph.",
    ],
    method: "One open question, 'Why does a math class in America use a word from Baghdad?', held through the story of the city, its trade, its paper and its translators, and answered at the end by what the word carried with it. The decline is a short turn that matters, since it explains why the age ended.",
    exampleOnly: [
      "The word algebra in a modern math class. WORLD: Baghdad, roughly 750 to 1258. The title and objective don't name it.",
    ],
    digitize: "The existing reading engine. Questions ask what made Baghdad rich, what the House of Wisdom did, who did what, and why the age ended.",
    unclear: "",
  },
  shelf: { grades: [7], subject: "History",
    blurb: "A word in your math class traces back to a city on the Tigris. How Baghdad became a marketplace for the world, what its scholars wrote and translated, and why the golden age ended.",
    contains: [
      "A story-form reading, read aloud with the words highlighted",
      "Baghdad as a center of trade, with the goods that flowed through it",
      "Paper, the House of Wisdom, algebra and medicine",
      "How the age came apart, from factions to the Mongols",
    ] },
  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will explain how the Abbasid caliphate made Baghdad a center of trade and learning, name the key advances (paper, the House of Wisdom, algebra, medicine), and explain why the caliphate declined."
      ]},
      { h: "Key Vocabulary", vocab: true },
      { h: "Handle This Evenly", p: [
        "Islam is reported here as history, with respect and without endorsement or mockery, and the scholars are credited as the people they were. Where the book compares art traditions, the lesson states the difference and leaves the judging to nobody.",
        "That the translators were often Christians and Jews, and that the word algorithm comes from al-Khwarizmi's name, are added from the record and aren't in the book."
      ]},
      { h: "Where This Goes Next", p: [
        "U2-L6 follows the Muslim world west to Spain, where another Umayyad ruler built a golden age of his own, and then to the conflict that set up the Crusades."
      ]}
    ]
  },

  parts: [
    { title: "A Word From Baghdad", s: [
      "Open any math book and you'll find the word algebra, a word that sounds like it was always part of English, though it wasn't.",
      "It comes from the Arabic al-jabr, and it was written down in a book by a mathematician who worked in Baghdad more than twelve hundred years ago.",
      "Along with the word came a set of numbers, with a zero in them, which are the ones you use every day.",
      "So how did a word from a city on the Tigris River end up in your math class?"
    ]},

    { title: "The City on the Tigris", s: [
      "In 750 a new family, the Abbasids, took the caliphate, which means they became the rulers of the Muslim empire, and they ruled the eastern lands from forts guarded by a huge standing army.",
      "They also followed what the book calls an inclusion policy, so all Muslims were treated as equals, and Christians and Jews could serve in the government.",
      "In 762 they moved their capital to a new city on the Tigris River called Baghdad, and its position was the whole point, because roads and rivers brought goods to it from every direction.",
      "It was called a marketplace for the world, and by the early 800s more than 900,000 people lived there, which made it one of the largest cities on earth."
    ]},

    { title: "What Came Through the Gates", s: [
      "Merchants carried silk and porcelain from China, spices from India, furs from northern Europe, and ivory and metals from Africa, and they sold them in the markets of Baghdad.",
      "Irrigation turned the dry land around the city into gardens that grew rice, sugar cane and cotton, and workshops inside it made leather, textiles, carpets, ironwork and perfumes.",
      "Muslim artists, meanwhile, filled their buildings and books with patterns and with the art of beautiful handwriting called calligraphy, while Christian art of the time showed religious figures, and those are two traditions making different choices.",
      "Wealth like that pays for something else, and the next thing Baghdad bought was knowledge."
    ]},

    { title: "Paper and the House of Wisdom", s: [
      "In the 750s the Muslims learned how to make paper from the Chinese, and by the early 800s Baghdad had its own papermaking industry, which meant books could be copied far more cheaply than on animal skin.",
      "In the 830s the caliph's court supported the House of Wisdom, a center where scholars gathered to translate the writings of Greek thinkers such as Aristotle and Plato into Arabic.",
      "The translators weren't all Muslims, and some of the best known were Christians and Jews, like Hunayn ibn Ishaq, a Christian physician who translated Greek medical books.",
      "Without that work a great deal of ancient writing might have been lost, and it's part of how Greek ideas eventually found their way back to Europe."
    ]},

    { title: "Numbers, Medicine and a Calendar", s: [
      "A scholar named al-Khwarizmi, born about the year 780, brought the Indian numerals and the zero to the Arabic-speaking world, and he wrote a book on solving equations that gave us the word algebra.",
      "Another, Omar Khayyam, worked on mathematics and helped to design a calendar that was more accurate than the ones before it.",
      "In medicine, Ibn Sina wrote an encyclopedia that doctors kept using for more than six hundred years, and the city's hospitals did two jobs at once, treating poor patients and teaching new doctors.",
      "Notice that most of these people were adding to what others had done, building on Greece, India and China, and that's exactly why a city that traded with all of them was the place it could happen."
    ]},

    { title: "How the Golden Age Slipped", s: [
      "A golden age is a time when a civilization is at its best, and golden ages end the same way, with trouble at home first and trouble from outside after.",
      "From the middle of the 800s the caliphate split into factions, groups that pulled against each other, and the rulers let the roads and the trade become unsafe while they raised taxes to pay for their armies.",
      "A rival caliphate, the Fatimids, set itself up in Cairo, and the Seljuk Turks, a people from Central Asia, took Jerusalem in the 1070s, a story the next lesson picks up.",
      "In 1258 the Mongols reached Baghdad, destroyed the city and killed the last Abbasid caliph, and the golden age was over."
    ]},

    { title: "The Word in Your Math Book", s: [
      "Go back to that word in your math book, which crossed a few thousand miles and several languages to get there.",
      "",
      "[verse] Proverbs 4:7 says, “Wisdom is the principal thing; therefore get wisdom: and with all thy getting get understanding.”",
      "",
      "That proverb isn't about Baghdad, but it describes what the House of Wisdom was for, and it's why the question has an answer: the people of Baghdad gathered the learning of other cultures, added their own, and passed it on, and algebra is one of the things that came down."
    ]}
  ],

  words: [
    ["Caliph", "The ruler of the Muslim empire, who led after Muhammad.", 4],
    ["Golden age", "A time when a civilization is at its best, with great achievements in learning and the arts.", 20],
    ["House of Wisdom", "The center in Baghdad where scholars translated Greek and other works into Arabic.", 13],
    ["Factions", "Groups within a larger group that pull against each other.", 21]
  ],

  findsAt: 27,
  questions: [
    { tag: "The City", q: "Why was Baghdad's location important?",
      find: [6],
      hint: "Read The City on the Tigris.",
      choices: [
        "It had no neighbors.",
        "Roads and rivers brought goods to it from every direction.",
        "It was the closest city to Rome.",
        "It was far from every trade route."
      ], right: 1 },

    { tag: "The Policy", q: "What was the Abbasids' inclusion policy?",
      find: [5],
      hint: "Read The City on the Tigris.",
      choices: [
        "Only the caliph's family could hold office.",
        "Christians and Jews were driven out of the city.",
        "All Muslims were treated as equals, and Christians and Jews could serve in government.",
        "Every person in the empire had to move to Baghdad."
      ], right: 2 },

    { tag: "Trade", q: "Which of these did merchants bring to Baghdad from China?",
      find: [8],
      hint: "Read What Came Through the Gates.",
      choices: [
        "Furs",
        "Silk and porcelain",
        "Ivory",
        "Spices"
      ], right: 1 },

    { tag: "Paper", q: "What did Baghdad's papermaking industry make possible?",
      find: [12],
      hint: "Read Paper and the House of Wisdom.",
      choices: [
        "Books could be copied far more cheaply.",
        "Roads could be built faster.",
        "The Mongols could not invade.",
        "Taxes could be lowered."
      ], right: 0 },

    { tag: "House of Wisdom", q: "What did the scholars of the House of Wisdom do?",
      find: [13],
      hint: "Read Paper and the House of Wisdom.",
      choices: [
        "They built the city walls.",
        "They commanded the army.",
        "They collected the taxes.",
        "They translated Greek and other writings into Arabic."
      ], right: 3 },

    { tag: "Translators", q: "Who were some of the best-known translators?",
      find: [14],
      hint: "It's a fact added from the historical record.",
      choices: [
        "Only Muslim soldiers.",
        "Muslims, Christians and Jews, like Hunayn ibn Ishaq.",
        "Only Greek scholars.",
        "Chinese merchants."
      ], right: 1 },

    { tag: "Algebra", q: "What did al-Khwarizmi give us a word for?",
      find: [16],
      hint: "Read Numbers, Medicine and a Calendar.",
      choices: [
        "Calligraphy",
        "Geography",
        "Algebra",
        "Astronomy"
      ], right: 2 },

    { tag: "Medicine", q: "What two jobs did the hospitals do?",
      find: [18],
      hint: "Read Numbers, Medicine and a Calendar.",
      choices: [
        "Printing books and making paper.",
        "Treating poor patients and teaching new doctors.",
        "Guarding the city and collecting taxes.",
        "Growing rice and cotton."
      ], right: 1 },

    { tag: "The Decline", q: "Which of these helped end the golden age?",
      find: [21],
      hint: "Read How the Golden Age Slipped.",
      choices: [
        "The caliphs gave up their armies.",
        "The city ran out of water.",
        "The caliphate split into factions, and in 1258 the Mongols destroyed Baghdad.",
        "Paper stopped being made."
      ], right: 2 }
  ],

  vocabQuestions: [
    { q: "What was a <i>caliph</i>?",
      choices: ["A kind of scholar.", "A trade good.", "A city on the Tigris.", "The ruler of the Muslim empire."], right: 3 },
    { q: "What is a <i>golden age</i>?",
      choices: ["A time when a civilization is at its best.", "A time of war.", "A time before writing.", "A kind of calendar."], right: 0 },
    { q: "What was the <i>House of Wisdom</i>?",
      choices: ["A hospital for the poor.", "A market in the city.", "A center where scholars translated books into Arabic.", "A fort for the army."], right: 2 },
    { q: "What are <i>factions</i>?",
      choices: ["Groups within a larger group that pull against each other.", "Books written in Greek.", "Roads between cities.", "Kinds of paper."], right: 0 }
  ],

  todo: { title: "What To Do Now", s: [
      "A word in a math book led back to a city on a river, and the questions ask how it got there.",
      "{c} word cards sit at the top of the page, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "None of them asks for a date, so read for who did what and why it mattered.",
      "If the translators question trips you up, read Paper and the House of Wisdom again.",
      "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] }
};
