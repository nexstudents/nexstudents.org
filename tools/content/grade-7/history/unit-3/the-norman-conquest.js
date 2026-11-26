/* history/the-norman-conquest
   Grade 7 · history · unit 3. Its home is this folder.
   Built by tools/build-lessons.js. Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-11-22. Written to the week 12 plan (U3-L8: The Norman
   Conquest) and McDougal Littell World History: Medieval and Early Modern Times (2006),
   via the week 12 packet (paraphrased notes). Paul has not read it.

   🚨 THE BOOK SAYS ALMOST NOTHING. McDougal p335 (Chapter 10, "Background for the War",
   in the Hundred Years' War lesson) says that William, Duke of Normandy, from the Norman
   region of France, claimed to be the rightful king of England; that in 1066 he captured
   England in what is called the Norman invasion; that he became known as William the
   Conqueror and tied the nobility of France to the nobility of England; and that the
   tension over who had the right to rule either region fed the Hundred Years' War. The
   book has nothing on Hastings, Harold, Domesday or castles. Those lines are the spine;
   the rest is added from the record.

   ⚠️ ADDED FROM THE RECORD (the book has none of it). The packet checked each against
   Wikipedia, "Norman conquest of England", on 2026-11-22. Worth a glance from Paul:
   · January 1066: Edward the Confessor dies with no children, and three men claim the
     crown: Harold Godwinson, William, and Harald Hardrada of Norway.
   · 20 September, Fulford; 25 September, Stamford Bridge (Harold beats the Norwegians,
     and Hardrada is killed); 28 September, William lands at Pevensey and builds a wooden
     castle at Hastings; 14 October, the Battle of Hastings, where Harold is killed;
     25 December, William is crowned in Westminster Abbey.
   · At Hastings the Normans had knights on horseback and archers, and the English
     fought on foot behind a wall of shields. Harold's army had marched north and back
     in a few weeks.
   · ⚠️ THE ARROW-IN-THE-EYE STORY IS DISPUTED. The Bayeux Tapestry is traditionally read
     as showing Harold struck in the eye, but how he died is uncertain, and the lesson
     says so.
   · Castles, mostly motte-and-bailey, built in great numbers to hold the land.
   · 1069 to 1070, the Harrying of the North. 🚨 ONE PLAIN SENTENCE, no gore.
   · 1086, the Domesday Book, a record of who owned land and what it was worth.
   · The Bayeux Tapestry, embroidered cloth of about 70 meters.
   · French-speaking Norman lords replaced English lords, and thousands of French words
     entered English.
   · The Normans descend from Rollo's Vikings (lesson 3-7) and the feudal system was
     imposed from the top (lessons 3-1 and 3-2); both are recaps, not new facts.
   ⚠️ The Leif the Lion booklet (U3 L8, "The Norman Conquest") is a build note only and
   is not quoted. Its photographs have not been read for this lesson.
   🚨 No person is invented. Every name is a real person from the record.

   🚨 THE VERSE IS A WORKING CHOICE, NOT PAUL'S. Daniel 2:21, he removeth kings and
   setteth up kings. Choosing the scripture is his, so it goes in the review queue.
   ⚠️ The videos passed oEmbed but nobody watched them. Preview both first. */
'use strict';
const table = (rows) => {
  const n = rows[0].length, w = [];
  for (let i = 0; i < n; i++) w[i] = Math.max(...rows.map((r) => [...r[i]].length)) + 2;
  const line = (l, m, r) => l + w.map((x) => "─".repeat(x)).join(m) + r;
  const row = (r) => "│" + r.map((c, i) => " " + c + " ".repeat(w[i] - 1 - [...c].length)).join("│") + "│";
  return [line("┌", "┬", "┐"), row(rows[0]), line("├", "┼", "┤")]
    .concat(rows.slice(1).map(row), [line("└", "┴", "┘")]).join("\n");
};
const CLAIM = [
  ["Claimant", "From", "His claim"],
  ["Harold Godwinson", "England", "Chosen by the English council"],
  ["William", "Normandy", "Edward's promise, and Harold's oath"],
  ["Harald Hardrada", "Norway", "An old agreement"],
];
const YEAR = [
  ["Date in 1066", "What happened"],
  ["January", "Edward dies, and three men claim the crown"],
  ["20 September", "Hardrada wins at Fulford"],
  ["25 September", "Harold beats Hardrada at Stamford Bridge"],
  ["28 September", "William lands at Pevensey"],
  ["14 October", "William wins at Hastings, and Harold is killed"],
  ["25 December", "William is crowned king in Westminster Abbey"],
];
module.exports = {
  id: "history/the-norman-conquest",
  slug: "the-norman-conquest",
  title: "The Norman Conquest",
  unit: "World History &middot; U3-L8",
  seq: { unit: 3, unitTitle: "Life Under Feudalism", n: 8 },
  natural: "2026-11-22",
  eyebrow: "World History",
  dek: "In 1066 England's king died with no child, and three men wanted the crown. Who they were, how William won it at Hastings, and what the Normans changed.",
  plan: {
    objective: "Explain who fought over England's crown in 1066, why William won at Hastings, and how the Normans changed England (castles, Domesday Book, lords, language).",
    markers: [
      "McDougal p335 (paraphrased): William, Duke of Normandy, from the Norman region of France, claimed to be the rightful king of England. In 1066 he captured England in what is called the Norman invasion, became known as William the Conqueror, and tied the nobility of France to the nobility of England. Over the years, tension grew over who had the right to rule either region, which later fed the Hundred Years' War.",
      "Leif build note: U3 L8, The Norman Conquest. Not quoted.",
      "ADDED FROM THE RECORD: everything else. See the header.",
    ],
    method: "THREE CLAIMANTS, THREE BATTLES IN ONE AUTUMN, THEN WHAT CHANGED. CAUSE AND EFFECT.",
    exampleOnly: [
      "The arrow-in-the-eye story (disputed, and the lesson says so) and the battle tactics are detail. WORLD: England and Normandy, 1066.",
    ],
    digitize: "The reading engine, a Watch It Worked on the three claimants, a Watch It Worked timeline from January to December 1066, and find-in-text questions. Harrying of the North is one plain sentence. Facts added from the record are listed in the header.",
    unclear: "",
  },

  sheet: { slug: "the-norman-conquest-homework", subject: "history",
    note: "Do it on screen or print it. Your score shows here once you check it." },

  shelf: { grades: [7], subject: "History",
    blurb: "A king dies with no child, and three men want the crown. Three battles in one autumn, a win at Hastings, and the castles, the Domesday Book and the new language that followed.",
    contains: [
      "A reading on the three men who claimed England's crown in 1066",
      "A table of the claimants and a timeline of the year",
      "Why William won at Hastings, and the story that historians dispute",
      "What the Normans changed: castles, the Domesday Book, lords and language",
      "Six word cards, each with a check question",
    ] },
  scripture: {
    ref: "Daniel 2:21",
    text: "And he changeth the times and the seasons: he removeth kings, and setteth up kings:",
  },
  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will explain who fought over England's crown in 1066, why William won at Hastings, and how the Normans changed England, with castles, the Domesday Book, new lords and a new language."
      ]},
      { h: "Where Students Get Stuck", p: [
        "Mixing up the two Harolds. Harold Godwinson was the English king, and Harald Hardrada was the king of Norway, and the table sets them side by side.",
        "Thinking Hastings was the only battle that autumn. There were three in about three weeks.",
        "Treating the arrow in the eye as settled fact. Historians are not sure how Harold died, and the lesson says so."
      ]},
      { h: "Added From the Record", p: [
        "The book gives one short paragraph on William. The three claimants, the battles, the castles, the Domesday Book, the Bayeux Tapestry and the change in language are added from the record and listed in the lesson's source notes. No person is invented.",
        "The Harrying of the North is told in one plain sentence on purpose."
      ]},
      { h: "Book Pages", p: [
        "McDougal Littell World History: Medieval and Early Modern Times (2006), page 335. Read free on archive.org: https://archive.org/details/worldhistorymedi00houg/page/442/mode/1up"
      ]},
      { h: "Suggested Videos", videos: [
        { id: "wiaCId6pANI", title: "Why William Won at the Battle of Hastings 1066 | Animated History", channel: "English Heritage",
          why: "An animated look at how the battle was won. It was not watched, so preview it first." },
        { id: "Kul9Atz225Y", title: "Battle of Hastings facts for kids! - The Little Historians Magazine", channel: "The Little Historians Magazine",
          why: "A shorter, kid-level version of the same story. It was not watched, so preview it first." }
      ]},
      { h: "Key Vocabulary", vocab: true },
      { h: "Where This Goes Next", p: [
        "The next lesson in the unit is about kings, law and Magna Carta."
      ]}
    ]
  },

  video: { id: "wiaCId6pANI", title: "Why William Won at the Battle of Hastings 1066 | Animated History", channel: "English Heritage",
    why: "An animated look at the battle and the reasons William won." },

  parts: [
    { title: "A King With No Child", s: [
      "In January 1066 the king of England, Edward the Confessor, died, and he had no child to take his place.",
      "That left a crown with no obvious owner, and before the year was over England would have had three kings and seen three battles.",
      "Remember Rollo's Vikings from the last lesson, because the people of Normandy, who were called the Normans, were their descendants, and the Norman duke was one of the men who wanted that crown.",
      "So who had the best claim, and what would it take to win it?"
    ]},

    { title: "Three Claimants", s: [
      "A {{claimant}} is a person who says a crown is rightfully his.",
      "Harold Godwinson was an English earl, and the council of English nobles chose him as king and he was crowned.",
      "William, the {{duke}} of Normandy, ruled that land in northern France, and a duke is a nobleman who rules a region, ranking just below a king.",
      "William said that Edward had promised him the crown, and that Harold had once sworn an oath to support him, and you know from the lesson on oaths how much an oath was supposed to mean.",
      "The third was Harald Hardrada, the king of Norway, who claimed the crown through an old agreement.",
      "",
      "[walk] Set the three claimants side by side.",
      "[step] Harold Godwinson is English, and the English council chose him. || " + table(CLAIM.slice(0, 2)),
      "[step] William is the duke of Normandy, and he says Edward promised him the crown and Harold broke an oath. || " + table(CLAIM.slice(0, 3)),
      "[step] Harald Hardrada is the king of Norway, and he claims it through an old agreement. || " + table(CLAIM)
    ]},

    { title: "Three Battles in One Autumn", s: [
      "Hardrada moved first, and on 20 September he beat the northern English earls at a battle called Fulford.",
      "Harold Godwinson marched north to meet him, and on 25 September at Stamford Bridge he beat the Norwegians, and Hardrada was killed.",
      "But three days later William landed his army on the south coast at Pevensey, and he built a wooden castle at Hastings to hold his ground.",
      "Harold had to turn around and march his tired men all the way south again.",
      "",
      "[walk] Follow 1066 from January to Christmas.",
      "[step] In January Edward dies, and three men claim the crown. || " + table(YEAR.slice(0, 2)),
      "[step] On 20 September Hardrada wins at Fulford. || " + table(YEAR.slice(0, 3)),
      "[step] On 25 September Harold beats Hardrada at Stamford Bridge. || " + table(YEAR.slice(0, 4)),
      "[step] On 28 September William lands at Pevensey. || " + table(YEAR.slice(0, 5)),
      "[step] On 14 October William wins at Hastings, and Harold is killed. || " + table(YEAR.slice(0, 6)),
      "[step] On 25 December William is crowned king in Westminster Abbey. || " + table(YEAR)
    ]},

    { title: "Why William Won", s: [
      "On 14 October 1066 the two armies met near Hastings, and the fighting went on for most of the day.",
      "The English fought on foot behind a wall of shields, and the Normans had knights on horseback and archers.",
      "Historians give several reasons for the Norman win, and one of them is that Harold's men had just fought a battle in the north and marched south again.",
      "Harold was killed in the battle, and the English lost their king.",
      "Many people have heard that he died from an arrow in the eye, because the Bayeux Tapestry is often read as showing it, but historians aren't sure how he really died.",
      "On Christmas Day William was crowned king in Westminster Abbey, and that is why he is called William the Conqueror."
    ]},

    { title: "A Conquered Country", s: [
      "A {{conquest}} is when one people takes over another's land by force, and the Normans had to work to hold England.",
      "They built castles in great numbers, and most were the {{motte-and-bailey}} kind, which was a mound of earth with a wooden tower on top and a fenced yard beside it.",
      "When the north of England rose up against him, William crushed the revolt and laid waste to the land, and many people there suffered.",
      "William gave land to Norman lords who swore oaths to him, so it was the feudal system you've been studying, and it was set up from the top.",
      "In 1086 he had a huge survey made of who owned what land and what it was worth, and it was written down in the {{Domesday Book}}, which he could use to collect taxes."
    ]},

    { title: "A New Language and a Lasting Link", s: [
      "The new lords spoke French, so French was the language of the court, and thousands of French words slowly entered English.",
      "The story of the conquest was also told in cloth, in the {{Bayeux Tapestry}}, an embroidered strip about seventy meters long.",
      "Your book adds one more result, which is that William tied the nobility of France and England together.",
      "That tangle of who had the right to rule which land caused trouble for a long time, and later it helped start the Hundred Years' War.",
      "",
      "[verse] Daniel 2:21 says, “And he changeth the times and the seasons: he removeth kings, and setteth up kings:”",
      "",
      "The verse is about God's rule over kings and nations, and 1066 is a year when England's crown changed hands three times in a few months.",
      "The next lesson is about how kings and law grew up together in this new England."
    ]}
  ],

  words: [
    ["Claimant", "A person who says a crown or a title is rightfully his.", 4],
    ["Duke", "A nobleman who rules a region, ranking just below a king.", 6],
    ["Conquest", "When one people takes over another's land by force.", 30],
    ["Motte-and-bailey", "A castle made of an earth mound with a wooden tower on top and a fenced yard beside it.", 31],
    ["Domesday Book", "A record made in 1086 of who owned land in England and what it was worth.", 34],
    ["Bayeux Tapestry", "A long embroidered cloth that tells the story of the Norman conquest.", 36]
  ],

  findsAt: 42,
  questions: [
    { tag: "The Crown", q: "Why was there a fight over England's crown in 1066?", find: [0],
      hint: "Read A King With No Child.",
      choices: [
        "King Edward died with no child to take his place.",
        "The Vikings stole the crown.",
        "The Church took away the king's land.",
        "A castle burned down."
      ], right: 0 },

    { tag: "The Crown", q: "Which claimant was chosen by the English council?", find: [5],
      hint: "Read Three Claimants.",
      choices: [
        "William of Normandy",
        "Harold Godwinson",
        "Harald Hardrada",
        "Edward the Confessor"
      ], right: 1 },

    { tag: "The Crown", q: "What did William say gave him the right to the crown?", find: [7],
      hint: "Read Three Claimants.",
      choices: [
        "He was the oldest man in England.",
        "He had bought it from the king of Norway.",
        "Edward had promised it to him, and Harold had sworn an oath to support him.",
        "The Church had crowned him in France."
      ], right: 2 },

    { tag: "The Battles", q: "Who was Harald Hardrada?", find: [8],
      hint: "Read Three Claimants.",
      choices: [
        "The duke of Normandy",
        "An English earl",
        "A French knight",
        "The king of Norway"
      ], right: 3 },

    { tag: "The Battles", q: "What happened at Stamford Bridge on 25 September?", find: [14],
      hint: "Read Three Battles in One Autumn.",
      choices: [
        "Harold Godwinson beat the Norwegians, and Hardrada was killed.",
        "William beat Harold.",
        "Hardrada was crowned king.",
        "The English army was split in two."
      ], right: 0 },

    { tag: "The Battles", q: "Where did William land his army on 28 September?", find: [15],
      hint: "Read Three Battles in One Autumn.",
      choices: [
        "At Stamford Bridge",
        "At Pevensey, on the south coast",
        "In Norway",
        "In Westminster Abbey"
      ], right: 1 },

    { tag: "Hastings", q: "How did the two armies fight at Hastings?", find: [25],
      hint: "Read Why William Won.",
      choices: [
        "Both armies fought on horseback.",
        "Both armies fought from ships.",
        "The English fought on foot behind a shield wall, and the Normans had knights and archers.",
        "The Normans fought on foot, and the English fought from castles."
      ], right: 2 },

    { tag: "Hastings", q: "What do historians say about the story that Harold died from an arrow in the eye?", find: [28],
      hint: "Read Why William Won.",
      choices: [
        "It was proven by the Domesday Book.",
        "It was written by William himself.",
        "It was invented by the Vikings.",
        "They aren't sure how Harold really died."
      ], right: 3 },

    { tag: "What Changed", q: "What was a motte-and-bailey castle?", find: [31],
      hint: "Read A Conquered Country.",
      choices: [
        "A mound of earth with a wooden tower on top and a fenced yard beside it",
        "A stone fortress with a moat",
        "A ship",
        "A tent for knights"
      ], right: 0 },

    { tag: "What Changed", q: "What was the Domesday Book?", find: [34],
      hint: "Read A Conquered Country.",
      choices: [
        "A list of kings of Normandy",
        "A record of who owned land in England and what it was worth",
        "A prayer book for monks",
        "A map of the roads"
      ], right: 1 },

    { tag: "What Changed", q: "How did the Norman Conquest change the English language?", find: [35],
      hint: "Read A New Language and a Lasting Link.",
      choices: [
        "English was banned and forgotten.",
        "Everyone began to speak Norwegian.",
        "Thousands of French words slowly entered English.",
        "Nothing changed."
      ], right: 2 }
  ],

  vocabQuestions: [
    { q: "What is a <i>claimant</i>?",
      choices: ["A person who says a crown is rightfully his", "A kind of castle", "A monk", "A tax collector"], right: 0 },
    { q: "What is a <i>duke</i>?",
      choices: ["A peasant", "A nobleman who rules a region, just below a king", "A Viking ship", "A priest"], right: 1 },
    { q: "What is a <i>conquest</i>?",
      choices: ["A peace treaty", "A church service", "When one people takes over another's land by force", "A kind of tax"], right: 2 },
    { q: "What is a <i>motte-and-bailey</i>?",
      choices: ["A guild", "A type of armor", "A farm tool", "A castle of an earth mound with a wooden tower and a fenced yard"], right: 3 },
    { q: "What was the <i>Domesday Book</i>?",
      choices: ["A record of who owned land and what it was worth", "A story about a battle", "A prayer", "A law about guilds"], right: 0 },
    { q: "What is the <i>Bayeux Tapestry</i>?",
      choices: ["A suit of armor", "A long embroidered cloth that tells the story of the conquest", "A map of France", "A royal crown"], right: 1 }
  ],

  todo: { title: "What To Do Now", s: [
      "A king with no child and three men who wanted his crown is where this lesson starts, and the questions ask who they were, how the battles went and what the Normans changed.",
      "{c} word cards sit at the top of the page, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "None of them asks you to memorize a date, so read for the order, which is the three claimants first, then the battles, then the changes.",
      "If the order gets tangled, read the timeline in Three Battles in One Autumn again and say each step out loud, from January to Christmas."
  ] }
};
