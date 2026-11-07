/* history/the-power-of-the-medieval-church
   Grade 7 · history · unit 3. Its home is this folder.
   Built by tools/build-lessons.js. Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-11-07. Written to the week 10-11 plan (U3-L5: The Power of
   the Medieval Church) and McDougal Littell World History: Medieval and Early Modern Times
   Ch10 Lesson 1 pp320-325, via the week 10-11 packet (paraphrased notes). Paul has not read it.

   🚨 THE SPINE IS THE BOOK'S, all of it: from the 11th through the 15th centuries the Church
   and the monarchies were growing in power. The Church needed a strong organization (the
   sacraments, levels of clergy, the pope as spiritual and political leader, the Papacy), had
   strong ties to the nobility, helped run kingdoms (parish records), and was wealthy (the
   pope richer than any one monarch). The Holy Roman Empire began around 962. In 1075 Pope
   Gregory VII said laypeople, including Emperor Henry IV, could no longer appoint Church
   officials; Henry declared the pope's election invalid; Gregory excommunicated him and told
   his subjects he was no longer emperor; nobles and Church officials turned against Henry,
   who asked forgiveness (some accounts say he stood barefoot three days in the snow outside
   the castle where the pope was staying); Gregory forgave him, Henry regained his title,
   and the conflict between monarchs and the Papacy went on. The Church dominated education:
   religious orders (monks, nuns, friars), the Franciscans founded by Francis of Assisi in
   the early 1200s, cathedral schools that became early universities taught in Latin, Muslim
   scholars who preserved Greek texts lost in the West and Church scholars who translated
   them into Latin, and Thomas Aquinas in the mid-1200s, who argued classical philosophy
   could exist in harmony with Christian faith.

   ⚠️ ADDED FROM THE RECORD: only the name CANOSSA for the castle where the pope was staying
   (well known; the book's packet does not name it). Nothing else is added.

   🚨 THIS IS TAUGHT AS HISTORY, FACTUALLY. The lesson says what the Church did, what it
   taught about sacraments in the Church's own terms ("the Church taught"), and what happened,
   with no judgment of Catholic doctrine, no praise and no criticism. No question asks which
   church is right or whether any belief is true. Kolten's family is Christian.

   ⚠️ No invented characters appear here. Every person named is a real person the book names
   (Gregory VII, Henry IV, Francis of Assisi, Thomas Aquinas).

   🚨 THE VERSE IS A WORKING CHOICE, NOT PAUL'S. Proverbs 4:7, wisdom and understanding. */
'use strict';
const table = (rows) => {
  const n = rows[0].length, w = [];
  for (let i = 0; i < n; i++) w[i] = Math.max(...rows.map((r) => [...r[i]].length)) + 2;
  const line = (l, m, r) => l + w.map((x) => "─".repeat(x)).join(m) + r;
  const row = (r) => "│" + r.map((c, i) => " " + c + " ".repeat(w[i] - 1 - [...c].length)).join("│") + "│";
  return [line("┌", "┬", "┐"), row(rows[0]), line("├", "┼", "┤")]
    .concat(rows.slice(1).map(row), [line("└", "┴", "┘")]).join("\n");
};
const LADDER = [
  ["Level", "Job"],
  ["Pope", "Spiritual and political leader"],
  ["Cardinals, bishops", "Help the pope; run church areas"],
  ["Priests", "Run one church; give sacraments"],
  ["Monks and nuns", "Pray, copy books, grow food"],
];
module.exports = {
  id: "history/the-power-of-the-medieval-church",
  slug: "the-power-of-the-medieval-church",
  title: "The Power of the Medieval Church",
  unit: "World History &middot; U3-L5",
  seq: { unit: 3, unitTitle: "Life Under Feudalism", n: 5 },
  natural: "2026-11-07",
  eyebrow: "World History",
  dek: "In medieval Europe the Church was organized, rich and tied to kings and nobles. What gave it power, how a pope and an emperor clashed, and how the Church shaped learning.",
  plan: {
    objective: "Explain why the Church was so powerful in medieval Europe (its organization, wealth, sacraments and ties to rulers), describe the conflict between Pope Gregory VII and Emperor Henry IV, and describe the Church's role in learning (religious orders, universities, Aquinas).",
    markers: [
      "McDougal Ch10 Lesson 1 p321 (paraphrased): Catholicism was the dominant religion in medieval Europe. From the 11th through 15th centuries the Church and monarchies were increasing their power. The Church needed a strong organization, sacraments, levels of clergy, and the pope as spiritual and political leader.",
      "McDougal p322 (paraphrased): church leaders had strong social and political ties to the nobility and helped run kingdoms. The Church was wealthy, and the pope was richer than any individual monarch. The Papacy's authority was often greater than that of kings and emperors, which led to both cooperation and conflict.",
      "McDougal pp322-323 (paraphrased): in 1075 Pope Gregory VII said laypeople, including Emperor Henry IV, could not appoint Church officials. Henry declared the pope's election invalid, Gregory excommunicated him, nobles and Church officials turned against Henry, and he asked forgiveness. Henry regained his title but the conflict continued.",
      "McDougal pp323-324 (paraphrased): religious orders were the Church's most important educational institutions; the Franciscans were founded by Francis of Assisi; cathedral schools became early universities; Muslim scholars preserved Greek texts; Thomas Aquinas argued philosophy and faith could exist in harmony.",
      "ADDED FROM THE RECORD: only the name Canossa. See the header.",
    ],
    method: "TELL IT AS A STORY OF POWER. WHAT MADE THE CHURCH STRONG, WHAT HAPPENED WHEN A POPE AND AN EMPEROR CLASHED OVER WHO COULD APPOINT CHURCH OFFICIALS, AND HOW THE CHURCH SHAPED LEARNING.",
    exampleOnly: [
      "No invented example. Every person is named in the book. WORLD: Europe from the 11th to the 15th century. The title and objective don't name it.",
      "⚠️ This is taught as history. No question asks which church is right.",
    ],
    digitize: "The reading engine, a table for the ladder of clergy, and a Watch It Worked that follows the 1075 dispute step by step. Questions ask why the Church was powerful, what Gregory and Henry each did and why, and what the Church did for learning.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "History",
    blurb: "In medieval Europe the Church was organized, wealthy and tied to kings and nobles. Why it was powerful, the clash between a pope and an emperor, and how it shaped learning.",
    contains: [
      "A reading on what gave the Church its power",
      "A table of the ladder of clergy from pope to monk",
      "The 1075 dispute between Pope Gregory VII and Emperor Henry IV, step by step",
      "Religious orders, universities and Thomas Aquinas",
      "Six word cards, each with a check question",
    ] },
  scripture: {
    ref: "Proverbs 4:7",
    text: "Wisdom is the principal thing; therefore get wisdom: and with all thy getting get understanding.",
  },
  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will explain what gave the Church its power in medieval Europe, describe the 1075 dispute between Pope Gregory VII and Emperor Henry IV and how it ended, and describe how the Church supported learning through religious orders, universities and Thomas Aquinas."
      ]},
      { h: "How This Lesson Treats the Church", p: [
        "The lesson is history. It says what the Church did and what happened, and it describes the Church's teachings in the Church's own terms, with the words the Church taught. It does not praise or criticize any belief, and no question asks which church is right. Questions ask what happened and why.",
        "If a student raises what his own church believes, take it as a good question and answer it on its own terms, outside the lesson."
      ]},
      { h: "Where Students Get Stuck", p: [
        "Thinking the Church was one thing. It had levels, and the ladder table sorts them. Another mix-up is who did what in 1075: the pope forbade, the emperor refused, the pope excommunicated.",
        "Thinking the story ends at Canossa. Henry got his title back, but the lesson says the conflict continued."
      ]},
      { h: "Added From the Record", p: [
        "Nothing is added except the name of the castle where Henry waited, Canossa. Everything else is from the book's Ch10 Lesson 1, as paraphrased."
      ]},
      { h: "Book Pages", p: [
        "McDougal Littell World History: Medieval and Early Modern Times (2006), pages 320 to 325. Read free on archive.org: https://archive.org/details/worldhistorymedi00houg/page/320/mode/1up"
      ]},
      { h: "Suggested Videos", videos: [
        { id: "2KwBFRfzNnE", title: "The Power of the Church in Medieval Europe", channel: "School Subjects Online",
          why: "Matches the book's chapter on the Church's power." },
        { id: "R-mWlwRROVo", title: "The Medieval Church", channel: "WeAre HistoryTeachers",
          why: "A short overview of the same ground." }
      ]},
      { h: "Key Vocabulary", vocab: true },
      { h: "Where This Goes Next", p: [
        "U3-L6 turns to the towns that grew once the fighting calmed, and the guilds and roads that tied them together."
      ]}
    ]
  },

  parts: [
    { title: "More Than a Building", s: [
      "In the village where Wat lives, the church is the one building almost everybody enters, and in medieval Europe it was far more than a building.",
      "From the 11th through the 15th centuries, Catholicism was the dominant religion in Europe, and the Church grew into one of the most powerful institutions of its day.",
      "This lesson reads that as history, which means we ask what the Church did, what happened and why, and we leave the questions of who is right about belief to another place.",
      "Three questions guide it: what gave the Church its power, what happened when a pope and an emperor clashed, and what the Church did for learning."
    ]},

    { title: "A Ladder of Clergy", s: [
      "The Church needed a strong organization to serve its people, and it had levels of leaders called the {{clergy}}, who were people given priestly authority by the Church.",
      "At the top stood the pope, who was both the spiritual and the political leader, and the office he held was called the papacy.",
      "Under him came the cardinals, who helped the pope run the Church, and the bishops, who ran dioceses, which were areas with several churches.",
      "Under them came the priests, who ran single churches and gave the {{sacraments}}, which were ceremonies such as baptism, in which, the Church taught, a member received the grace of God.",
      "Monks and nuns lived in separate communities, learned to read Latin, grew their own food, and copied and translated religious writings.",
      "",
      "[walk] The ladder of clergy.",
      "[step] Read down the table from the top of the ladder to the bottom, with each level on the left and its job on the right. || " + table(LADDER),
      "",
      "Notice that the Church reached from the pope in the highest seat down to the priest in the smallest village, which is part of why it was so strong."
    ]},

    { title: "Why the Church Was So Powerful", s: [
      "The Church's organization was one reason for its power, because it had a leader, levels and a priest in every village.",
      "A second reason was its ties to rulers, because local princes were often bishops, and nobles and church leaders went to school together and supported each other.",
      "A third reason was that church officials helped run kingdoms, since priests kept parish records of births and deaths, and monarchs needed those records.",
      "A fourth reason was wealth, because the Church earned income from its property, and the pope was richer than any single monarch.",
      "Put together, that meant the authority of the papacy was often greater than that of kings and emperors, which led to both cooperation and conflict."
    ]},

    { title: "A Pope and an Emperor", s: [
      "The clearest conflict was in the 11th century between Pope Gregory VII and Emperor Henry IV.",
      "Henry ruled the Holy Roman Empire, which began around the year 962 and covered much of central and western Europe, and he built his power by appointing Church officials, because kings relied on them to run their kingdoms.",
      "Gregory saw it differently, and in 1075 he said that laypeople, including Henry, could no longer appoint people to Church offices.",
      "",
      "[walk] The dispute, step by step.",
      "[step] First, Henry appoints Church officials, since they help him run the empire. || BEFORE 1075: Henry appoints Church officials",
      "[step] Then Gregory forbids it, saying laypeople, the emperor included, can't appoint them. || 1075: Gregory bans appointments by laypeople",
      "[step] Henry is furious, so he gathers bishops who support him and declares that Gregory's election as pope is invalid. || HENRY: declares the pope's election invalid",
      "[step] Gregory answers by excommunicating Henry, which means banishing him from the Church, and tells Henry's subjects that he's no longer emperor and they need not obey. || GREGORY: excommunicates Henry",
      "[step] Nobles and Church officials turn against Henry, so he asks the pope's forgiveness, and some accounts say he stood barefoot for three days in the snow outside the castle at Canossa where the pope was staying. || HENRY: asks forgiveness at Canossa",
      "[step] Gregory has to forgive him, and Henry regains his title and his control, but the struggle between monarchs and the papacy goes on. || RESULT: Henry restored, the conflict continues",
      "",
      "Notice that what the fight was about was power, who gets to choose the Church's officials, and not a quarrel over belief."
    ]},

    { title: "Orders, Schools, and Scholars", s: [
      "The medieval Church also dominated education, and its most important schools were run by {{religious orders}}, which were groups of people who lived by rules specific to the order.",
      "Monks lived in monasteries and nuns in convents, where women had great control over their daily lives, which was unusual at the time, and a different kind of order was made of {{friars}}, who traveled to preach and owned nothing, living by begging.",
      "The most important of those orders, the Franciscans, was founded in the early 1200s by Francis of Assisi, an Italian who asked his followers to live without property and to serve as teachers, healers and friends of all living things.",
      "",
      "[ex] Imagine a cathedral school that begins as a few boys learning Latin in a bishop's town, and as the town grows, so does the school.",
      "",
      "Schools like that grew into the first {{universities}}, where students, mostly sons of nobles, were taught in Latin, which the Church had preserved along with religious texts.",
      "Muslim scholars had preserved Greek texts that were lost in the West, and Church scholars translated them into Latin for the new universities, though some officials worried that the classical ideas might oppose Church teaching."
    ]},

    { title: "Faith and Reason", s: [
      "In the mid-1200s an Italian scholar named Thomas Aquinas studied Aristotle, one of those Greek thinkers, and argued that classical philosophy and Christian faith could exist in harmony.",
      "His work is called a synthesis, which means a joining together of classical philosophy and Christian thinking into one body of ideas.",
      "",
      "[verse] Proverbs 4:7 says, “Wisdom is the principal thing; therefore get wisdom: and with all thy getting get understanding.”",
      "",
      "That verse is about valuing learning, and it fits a period when monks copied books, bishops opened schools and scholars argued about how faith and reason fit together.",
      "The next lesson turns from churches and castles to the towns that were growing up around them."
    ]}
  ],

  words: [
    ["Clergy", "The people the Church gave priestly authority, such as priests, bishops and the pope.", 4],
    ["Sacrament", "A Church ceremony, such as baptism, in which, the Church taught, a member received the grace of God.", 7],
    ["Religious order", "A group of people who lived by rules specific to the order, such as monks, nuns or friars.", 28],
    ["Friar", "A member of an order who traveled to preach and owned nothing, living by begging.", 29],
    ["Universities", "Schools that grew out of a cathedral school, where students were taught in Latin.", 32],
    ["Excommunicate", "To banish a person from the Church.", 24]
  ],

  findsAt: 39,
  questions: [
    { tag: "The Ladder", q: "Who stood at the top of the Church's ladder of clergy?", find: [5],
      hint: "Read A Ladder of Clergy.",
      choices: [
        "The bishops",
        "The pope, the spiritual and political leader",
        "The priests",
        "The monks and nuns"
      ], right: 1 },

    { tag: "The Power", q: "Which of these was a reason the Church was so powerful?", find: [15],
      hint: "Read Why the Church Was So Powerful.",
      choices: [
        "It had no ties to rulers.",
        "It had little property.",
        "Church officials helped run kingdoms, and the Church was wealthy",
        "It only operated in one country"
      ], right: 2 },

    { tag: "The Power", q: "Why did priests' parish records matter to monarchs?", find: [14],
      hint: "Read Why the Church Was So Powerful.",
      choices: [
        "They recorded births and deaths, which monarchs needed",
        "They listed which nobles owed taxes",
        "They named the next emperor",
        "They recorded which crops grew best"
      ], right: 0 },

    { tag: "Pope and Emperor", q: "Why was it important to Henry IV to appoint Church officials?", find: [18],
      hint: "Read A Pope and an Emperor.",
      choices: [
        "Kings relied on them to run their kingdoms, so appointing them gave him power.",
        "He wanted to become a priest himself.",
        "The Church paid him for each appointment.",
        "It was the only way to be crowned."
      ], right: 0 },

    { tag: "Pope and Emperor", q: "What did Pope Gregory VII say in 1075?", find: [19],
      hint: "Read A Pope and an Emperor.",
      choices: [
        "That Henry must lead an army",
        "That laypeople, including Henry, could no longer appoint Church officials",
        "That Henry should become pope",
        "That the Church would give up its lands"
      ], right: 1 },

    { tag: "Pope and Emperor", q: "What does it mean to excommunicate someone?", find: [24],
      hint: "Read the dispute, step by step.",
      choices: [
        "To crown him",
        "To banish him from the Church",
        "To give him land",
        "To send him on a journey"
      ], right: 1 },

    { tag: "Pope and Emperor", q: "How did the dispute turn out for Henry IV?", find: [26],
      hint: "Read the end of the dispute, step by step.",
      choices: [
        "He lost his title for good.",
        "He asked forgiveness, was forgiven and regained his title, but the conflict went on.",
        "He became the next pope.",
        "He won everything and the conflict ended."
      ], right: 1 },

    { tag: "Learning", q: "Who were friars?", find: [29],
      hint: "Read Orders, Schools, and Scholars.",
      choices: [
        "Members of an order who traveled to preach and owned nothing",
        "Women who lived in convents",
        "Nobles who ran schools",
        "Bishops who ran dioceses"
      ], right: 0 },

    { tag: "Learning", q: "How did the first universities begin?", find: [32],
      hint: "Read Orders, Schools, and Scholars.",
      choices: [
        "Kings built them from scratch in one year.",
        "Cathedral schools in growing cities grew into them.",
        "Merchants set them up to train clerks.",
        "Monks carried them from town to town."
      ], right: 1 },

    { tag: "Learning", q: "What did Thomas Aquinas argue?", find: [34],
      hint: "Read Faith and Reason.",
      choices: [
        "That classical philosophy and Christian faith could exist in harmony",
        "That universities should close",
        "That the pope should rule every kingdom",
        "That Greek books should be burned"
      ], right: 0 }
  ],

  vocabQuestions: [
    { q: "Who were the <i>clergy</i>?",
      choices: ["People the Church gave priestly authority, such as priests and bishops", "Merchants in a town", "Knights in armor", "Serfs on a manor"], right: 0 },
    { q: "What was a <i>sacrament</i>?",
      choices: ["A tax paid to a king", "A Church ceremony such as baptism", "A kind of castle", "A school subject"], right: 1 },
    { q: "What was a <i>religious order</i>?",
      choices: ["A group of people who lived by rules specific to the order", "A command from a king", "A list of crops", "A guild of bakers"], right: 0 },
    { q: "What was a <i>friar</i>?",
      choices: ["A knight", "A member of an order who traveled to preach and owned nothing", "A noble", "A serf"], right: 1 },
    { q: "How did a <i>university</i> begin?",
      choices: ["It grew out of a cathedral school", "It was a castle", "It was a farm", "It was a market"], right: 0 },
    { q: "What does <i>excommunicate</i> mean?",
      choices: ["To crown a ruler", "To banish a person from the Church", "To write a book", "To build a church"], right: 1 }
  ],

  todo: { title: "What To Do Now", s: [
      "A village church that nearly everybody entered is where this lesson began, and the questions ask what gave the Church its power and what happened when a pope and an emperor clashed.",
      "{c} word cards sit at the top of the page, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "The questions ask what happened and why, so read for who did what, and none of them asks you to judge any belief.",
      "If the 1075 dispute gets tangled, read A Pope and an Emperor again and say each step out loud, starting with Henry appointing officials."
  ] }
};
