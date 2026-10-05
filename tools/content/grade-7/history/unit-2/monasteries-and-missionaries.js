/* history/monasteries-and-missionaries
   Grade 7 · history · unit 2. Its home is this folder.
   Built by tools/build-lessons.js. Edit the lesson here, not in the registry.

   🚨 THE PROSE IS A DRAFT, NOT PAUL'S VOICE. Written 2026-10-05 on Sonnet from the
   Leif outline (U2 L7: Monasteries, Missionaries, and Medieval Faith) and McDougal
   Littell World History: Medieval and Early Modern Times Ch9 Lesson 1, "Catholic
   Church", via the week 6-7 packet (paraphrased notes). Given THE PASS and
   stamped.

   🚨 THIS LESSON STAYS EARLY MEDIEVAL, roughly 500 to 800. McDougal Ch9 Lesson 1
   gives only the clergy ranks and the life of monks and nuns (who lived apart,
   learned Latin, grew their own food, and copied and translated texts). It does
   NOT cover missionaries, and the packet marks that THIN. So most of this lesson
   is ADDED FROM THE RECORD, worth a glance from Paul:
   · Benedict of Nursia and his Rule (about 529, Monte Cassino).
   · Monks copying books by hand in a scriptorium, on parchment.
   · Patrick in Ireland (400s): taken there as a teenager by raiders, escaped, and
     returned as a missionary. Irish monasteries as centers of learning.
   · Gregory the Great sending Augustine (of Canterbury) and about forty monks to
     Kent in 597.
   · Boniface in Germany (700s) and the oak at Geismar (about 723), which is told by
     his early biographer, so the lesson says "the story goes".
   Gregory VII and Henry IV (U3-L5) and Thomas Aquinas and the universities (U4-L1)
   are NOT here on purpose.

   ⚠️ TONE. Christian history told as history: what these men did and why, with the
   monks and missionaries shown as real people. This site is Christian, and the
   lesson doesn't pretend otherwise, but it doesn't claim more than the record
   does.

   🚨 THE VERSE IS A WORKING CHOICE, NOT PAUL'S. Matthew 28:19-20. */
'use strict';
module.exports = {
  id: "history/monasteries-and-missionaries",
  slug: "monasteries-and-missionaries",
  title: "Monasteries, Missionaries, and Medieval Faith",
  unit: "World History &middot; U2-L7",
  seq: { unit: 2, unitTitle: "The East Endures, and Islam Rises", n: 7 },
  natural: "2026-10-05",
  eyebrow: "World History",
  dek: "When the cities of the West emptied and the schools closed, communities of monks kept the books alive, copying them one letter at a time.",
  plan: {
    objective: "Explain how monasteries kept learning alive in the early Middle Ages and how missionaries carried Christianity into northern Europe.",
    markers: [
      "McDougal Ch9 Lesson 1 (paraphrased): the clergy ranked from the pope, to cardinals and bishops over regions called dioceses, to priests serving parishes, and the monks and nuns lived apart in isolated communities, learned Latin, grew their own food, and copied and translated texts.",
      "McDougal (paraphrased): religious orders were the main schools of the time, and convents gave women an education.",
      "ADDED FROM THE RECORD: Benedict of Nursia and his Rule of about 529, 'pray and work', at Monte Cassino.",
      "ADDED FROM THE RECORD: monks copying books by hand in a scriptorium.",
      "ADDED FROM THE RECORD: Patrick in Ireland in the 400s, Gregory the Great sending Augustine to Kent in 597, and Boniface in Germany in the 700s.",
    ],
    method: "One open question, 'When cities emptied and schools closed, who kept the books?', held through a monk's day, the Rule, the copying room and three missionaries, and answered at the end. The scope is deliberately early (about 500 to 800): the later quarrel between popes and emperors and the rise of the universities are other lessons.",
    exampleOnly: [
      "A monk in a copying room. WORLD: Western Europe, roughly 500 to 800. The title and objective don't name it.",
      "⚠️ Most of the content is added from the record, since the packet found that the book's lesson doesn't cover missionaries. See the header.",
    ],
    digitize: "The existing reading engine. Questions ask who kept the books, what the Rule asked of monks, how books were copied, and what each missionary did.",
    unclear: "",
  },
  shelf: { grades: [7], subject: "History",
    blurb: "When the cities of the West emptied and the schools closed, who kept the books? A monk with a goose-feather pen, a rule for living together, and three missionaries who carried the faith north.",
    contains: [
      "A story-form reading, read aloud with the words highlighted",
      "The pope, the bishops, the priests and the monks",
      "Benedict's Rule and a monk's day",
      "Patrick, Augustine and Boniface",
      "How books were copied by hand",
    ] },
  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will explain how monasteries kept learning alive in the early Middle Ages and how missionaries carried Christianity into northern Europe."
      ]},
      { h: "Key Vocabulary", vocab: true },
      { h: "Added From the Record", p: [
        "The book's lesson covers the ranks of the clergy and the life of monks and nuns, and it doesn't cover missionaries. Benedict's Rule, the scriptorium, and Patrick, Augustine and Boniface are all added from the historical record.",
        "The lesson stays early medieval, roughly 500 to 800. The quarrel between Pope Gregory VII and Emperor Henry IV belongs to a later unit, and so do Thomas Aquinas and the universities."
      ]},
      { h: "Where This Goes Next", p: [
        "U2-L8 follows the Franks and Charlemagne, who gathered these same monastery scholars at his court and made the books of the early Middle Ages into a movement."
      ]}
    ]
  },

  parts: [
    { title: "Who Kept the Books?", s: [
      "A monk sits at a slanted wooden desk in a cold stone room, a goose feather cut into a pen in his right hand and a sheet of calfskin pinned flat in front of him.",
      "He copies one letter at a time, and a single page will take him most of a day, and a whole book might take him a year.",
      "Outside, the Roman Empire in the West has been gone for generations, the old cities have shrunk to villages, and the schools that once taught Latin have closed.",
      "When cities emptied and schools closed, who kept the books?"
    ]},

    { title: "A Church With Ranks", s: [
      "By the early Middle Ages the Catholic Church had a clear chain of leaders, with the pope in Rome at the top and bishops below him, each in charge of a region called a diocese.",
      "Under the bishops were the priests, who served local churches called parishes and baptized, married and buried the people of the village.",
      "Then there were the monks and nuns, a different kind of church member, who withdrew from ordinary life into communities of their own.",
      "Most people never met a pope or a bishop, but nearly everyone lived within a day's walk of a priest, and a few of them lived within sight of a monastery."
    ]},

    { title: "A Rule for Living Together", s: [
      "A monk is a man who joins a community of men called a monastery, and a nun is a woman who joins a community of women, which is often called a convent, and in both places they lived apart from the world.",
      "Around the year 529 an Italian named Benedict of Nursia founded a monastery on a hill called Monte Cassino, and he wrote a Rule, a set of instructions for how the monks should live together.",
      "Its spirit was pray and work: the day was divided into hours for prayer, hours for reading, and hours for work with their hands, so a monastery grew its own food and needed nothing from the outside.",
      "Benedict's Rule spread across Europe, and monks and nuns who followed it learned Latin, since the prayers and books were in Latin, and so a monastery often became the only school for miles."
    ]},

    { title: "The Copying Room", s: [
      "Every book in the early Middle Ages was written by hand, since there was no printing press for another thousand years.",
      "In a monastery the room set aside for that work was called a scriptorium, and the monks there copied the Bible, the writings of church leaders and sometimes the works of ancient Greeks and Romans, on a writing surface called parchment, which was made from animal skin.",
      "They also translated texts and decorated their pages with colored initials and little pictures, and a good copy was a work of art as well as a book.",
      "If a monastery burned or a copy was never made, a book could vanish forever, which is why every pen stroke mattered to the people who held the pens."
    ]},

    { title: "The Slave Who Went Back", s: [
      "Meanwhile the faith itself was moving north, and one of its first carriers to Ireland had once been a captive there.",
      "In the 400s a teenager named Patrick, from a Christian family in Roman Britain, was seized by raiders and carried to Ireland, where he spent six years as a slave herding sheep.",
      "He escaped and made it home, but later he felt called to go back to the people who had held him, and he returned to Ireland as a missionary, a person sent to teach his faith to others.",
      "Over the next centuries Ireland filled up with monasteries, and Irish monks became some of the best copyists and teachers in Europe."
    ]},

    { title: "A Monk Sent to Kent", s: [
      "Around 597, Pope Gregory the Great, who had been a monk himself, sent a man named Augustine and about forty other monks to England, a land where many of the people still followed older faiths.",
      "They landed in the kingdom of Kent, where the king's wife was already a Christian, and the king allowed them to preach and finally became a Christian himself.",
      "Augustine became the first archbishop of Canterbury, and the monastery he founded there trained generations of English missionaries.",
      "That's a pattern you can see again and again: the missionary and the monastery arrived together, and the monastery kept the books while the missionary carried the message."
    ]},

    { title: "Boniface and the Oak", s: [
      "In the 700s one of those English monks, Boniface, took the faith across the sea to Germany, where he worked among people who worshiped the old gods.",
      "The story goes that around 723, at a place called Geismar, he chopped down a huge oak tree that was sacred to the thunder god Thor, and he waited to see whether the god would strike him down, and he wasn't struck.",
      "He built a chapel out of the oak's wood, and the people of the region began to listen, and monasteries went up behind him.",
      "Whether every detail of that story is exactly right isn't known, because it was told by his followers, but what he did, planting churches and monasteries in Germany, is certain."
    ]},

    { title: "The Books Survived", s: [
      "Go back to the monk at his slanted desk, and the question of who kept the books.",
      "",
      "[verse] Matthew 28:19-20 records Jesus telling his followers, “Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost: Teaching them to observe all things whatsoever I have commanded you.”",
      "",
      "Patrick, Augustine and Boniface each believed they were obeying that command, and the monks who followed them kept the writing of the old world alive while they did it.",
      "The answer to the opening question is that the monasteries kept the books, and the missionaries carried them, and in both cases ordinary people with a pen or a boat did the work."
    ]}
  ],

  words: [
    ["Monastery", "A community where monks live, pray and work, apart from ordinary life.", 8],
    ["Rule", "The set of instructions Benedict wrote for how monks should live together.", 9],
    ["Scriptorium", "The room in a monastery where monks copied books by hand.", 13],
    ["Missionary", "A person sent to teach his faith to others, often in another land.", 18]
  ],

  findsAt: 32,
  questions: [
    { tag: "The Question", q: "What had happened to the schools of Western Europe by the early Middle Ages?",
      find: [2],
      hint: "Read Who Kept the Books?",
      choices: [
        "They had multiplied.",
        "Many had closed, and the old cities had shrunk.",
        "They had all moved to Rome.",
        "They'd been rebuilt by the Romans."
      ], right: 1 },

    { tag: "The Ranks", q: "What was a diocese?",
      find: [4],
      hint: "Read A Church With Ranks.",
      choices: [
        "A kind of book.",
        "A monastery for women.",
        "A region a bishop was in charge of.",
        "A school for priests."
      ], right: 2 },

    { tag: "The Rule", q: "What was the spirit of Benedict's Rule?",
      find: [10],
      hint: "Read A Rule for Living Together.",
      choices: [
        "Pray and work.",
        "Travel and trade.",
        "Fight and conquer.",
        "Rest and read only."
      ], right: 0 },

    { tag: "Latin", q: "Why did monks and nuns learn Latin?",
      find: [11],
      hint: "Read A Rule for Living Together.",
      choices: [
        "To talk to the Romans.",
        "Because the prayers and books were in Latin.",
        "Because they spoke it at home.",
        "To trade with Ireland."
      ], right: 1 },

    { tag: "The Scriptorium", q: "What was a scriptorium?",
      find: [13],
      hint: "Read The Copying Room.",
      choices: [
        "A room where monks ate.",
        "A bell tower.",
        "The room where monks copied books by hand.",
        "A prison."
      ], right: 2 },

    { tag: "Patrick", q: "How did Patrick first come to Ireland?",
      find: [17],
      hint: "Read The Slave Who Went Back.",
      choices: [
        "As a king.",
        "As a trader.",
        "As a soldier.",
        "As a captive, taken by raiders."
      ], right: 3 },

    { tag: "Augustine", q: "Who sent Augustine and about forty monks to England?",
      find: [20],
      hint: "Read A Monk Sent to Kent.",
      choices: [
        "Pope Gregory the Great.",
        "Benedict of Nursia.",
        "Patrick.",
        "The king of Kent."
      ], right: 0 },

    { tag: "Boniface", q: "What did Boniface do in Germany?",
      find: [27],
      hint: "Read Boniface and the Oak.",
      choices: [
        "He built the first university.",
        "He crossed the sea to teach in Ireland.",
        "He planted churches and monasteries, and the story is told of an oak at Geismar.",
        "He copied the Bible in a scriptorium in Rome."
      ], right: 2 },

    { tag: "The Answer", q: "Who kept the books in the early Middle Ages?",
      find: [31],
      hint: "Read The Books Survived.",
      choices: [
        "The Roman Senate.",
        "Monks and nuns in monasteries.",
        "The Byzantine emperor.",
        "Nobody."
      ], right: 1 }
  ],

  vocabQuestions: [
    { q: "What is a <i>monastery</i>?",
      choices: ["A community where monks live, pray and work.", "A kind of king.", "A school for sons of nobles.", "A church in a village."], right: 0 },
    { q: "What was Benedict's <i>Rule</i>?",
      choices: ["A law of the Roman Senate.", "A command from a king.", "A set of instructions for how monks should live together.", "A kind of book of prayers."], right: 2 },
    { q: "What was a <i>scriptorium</i>?",
      choices: ["A place to store food.", "The room where monks copied books.", "A tower.", "A kind of parchment."], right: 1 },
    { q: "What is a <i>missionary</i>?",
      choices: ["A king who conquers a land.", "A copy of a book.", "A monk who never leaves the monastery.", "A person sent to teach his faith to others."], right: 3 }
  ],

  todo: { title: "What To Do Now", s: [
      "A monk with a goose-feather pen is where this lesson began, and the questions ask what he and his neighbors did.",
      "{c} word cards sit at the top of the page, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "None of them asks for a date, so read for who did what and why.",
      "If the missionary questions trip you up, read The Slave Who Went Back, A Monk Sent to Kent and Boniface and the Oak again.",
      "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] }
};
