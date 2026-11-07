/* history/lords-vassals-and-the-oath
   Grade 7 · history · unit 3. Its home is this folder.
   Built by tools/build-lessons.js. Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-11-07. Written to the week 10-11 plan (U3-L2: Lords,
   Vassals, and Oaths) and McDougal Littell World History: Medieval and Early Modern Times
   Ch9 Lesson 1 pp296-297, via the week 10-11 packet (paraphrased notes). Paul has not read it.

   🚨 THE SPINE IS THE BOOK'S: feudalism was an agreement between two groups of nobles. A lord
   gave a vassal a piece of land, a fief. In return the vassal owed him service in his court
   and army, plus taxes for the fief. Many vassals were knights, and a vassal could hire
   knights of his own. That is ALL the book says on these pages.

   ⚠️ ADDED FROM THE RECORD (the book does not describe any of this, as its notes say). Every
   item is a well-known, uncontroversial fact any encyclopedia states, and the lesson never
   names a real person, gives a real date or quotes a source:
   · The ceremony: HOMAGE (the vassal kneels and puts his hands between the lord's hands),
     FEALTY (the oath of loyalty, sworn on holy relics or a Bible) and INVESTITURE (the lord
     hands over a small symbol of the fief, such as a clod of earth, a banner or a staff).
   · The vassal's duties: military service, commonly about forty days a year ("commonly",
     because it varied); advice at the lord's court; payments called AIDS, due on big
     occasions such as paying a ransom if the lord was captured, when the lord's eldest son
     was made a knight, or when his eldest daughter married.
   · The lord's duties: protection, justice in his court, and keeping the vassal's fief safe.
   · A vassal could hold land from more than one lord, which caused divided loyalties, and the
     LIEGE LORD was the lord he owed his first duty to. One short section.

   ⚠️ THE VILLAGE AND ITS PEOPLE ARE INVENTED (Lord Hugh, Sir Aldric, Wat, and a neighbor,
   Lord Odo, who appears only in the liege-lord section). They are labelled "imagine" in the
   text, are the same invented world as U3-L1, and are not real people.

   ⚠️ THE MANOR IS U3-L3, castles and knights' training are U3-L4, the Church is U3-L5.

   🚨 THE VERSE IS A WORKING CHOICE, NOT PAUL'S. Ecclesiastes 5:5, on keeping a vow.
   ⚠️ The video is from a small channel and was not watched. Flag for preview. */
'use strict';
const table = (rows) => {
  const n = rows[0].length, w = [];
  for (let i = 0; i < n; i++) w[i] = Math.max(...rows.map((r) => [...r[i]].length)) + 2;
  const line = (l, m, r) => l + w.map((x) => "─".repeat(x)).join(m) + r;
  const row = (r) => "│" + r.map((c, i) => " " + c + " ".repeat(w[i] - 1 - [...c].length)).join("│") + "│";
  return [line("┌", "┬", "┐"), row(rows[0]), line("├", "┼", "┤")]
    .concat(rows.slice(1).map(row), [line("└", "┴", "┘")]).join("\n");
};
const DEAL = [
  ["The lord owes", "The vassal owes"],
  ["Protection", "Army service, about 40 days"],
  ["Justice in his court", "Advice at the court"],
  ["A safe fief", "Aids and taxes"],
];
module.exports = {
  id: "history/lords-vassals-and-the-oath",
  slug: "lords-vassals-and-the-oath",
  title: "Lords, Vassals, and the Oath",
  unit: "World History &middot; U3-L2",
  seq: { unit: 3, unitTitle: "Life Under Feudalism", n: 2 },
  natural: "2026-11-07",
  eyebrow: "World History",
  dek: "A fief changed hands in front of witnesses, with a kneeling man, an oath and a clod of earth. What the ceremony meant, and what each side owed.",
  plan: {
    objective: "Describe the ceremony that made a man a vassal (homage, the oath of fealty, investiture with a symbol of the fief) and list what a lord and a vassal each owed the other.",
    markers: [
      "McDougal Ch9 Lesson 1 p296 (paraphrased): feudalism was based on an agreement between two groups of nobles, lords and vassals. A lord gave a fief to a vassal, and in return the vassal owed him service in his court and army and paid taxes for the fief.",
      "McDougal p296 (paraphrased): many vassals were knights who fought for the lord, and vassals could hire their own knights.",
      "ADDED FROM THE RECORD: the ceremony (homage, fealty, investiture), the vassal's duties (service, advice, aids), the lord's duties (protection, justice, a safe fief), and the liege lord. See the header.",
    ],
    method: "A DEAL HAS TWO SIDES. WATCH THE CEREMONY ONE PART AT A TIME, THEN READ DOWN WHAT THE LORD OWES AND WHAT THE VASSAL OWES.",
    exampleOnly: [
      "Lord Hugh, Sir Aldric and Lord Odo, all invented, in the same invented village as U3-L1. WORLD: western Europe around the year 900. The title and objective don't name it.",
      "⚠️ The ceremony and the lists of duties are added from the record. See the header.",
    ],
    digitize: "The reading engine, a Watch It Worked that walks the ceremony in three steps, a table of what each side owed, and a short section on the liege lord. Questions ask what each part of the ceremony was, what each side owed, and why a man holding land from two lords was in trouble.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "History",
    blurb: "A man kneels, swears an oath and is handed a clod of earth. The ceremony that made a vassal, and the list of what lord and vassal each owed.",
    contains: [
      "A reading that walks through the ceremony in three parts",
      "What the lord owed and what the vassal owed",
      "Why a man with two lords was in trouble",
      "A Watch It Worked that follows Sir Aldric through the oath",
      "Five word cards, each with a check question",
    ] },
  scripture: {
    ref: "Ecclesiastes 5:5",
    text: "Better is it that thou shouldest not vow, than that thou shouldest vow and not pay.",
  },
  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will describe the three parts of the ceremony that made a man a vassal, say what a lord and a vassal each owed, and explain why holding land from two lords could put a man in a bind."
      ]},
      { h: "Where Students Get Stuck", p: [
        "Mixing up the lord's duties and the vassal's duties. The table in the lesson puts them side by side, and the quickest check is to ask who is being protected and who is doing the fighting.",
        "Thinking the oath was a signature on paper. Almost nobody could write, so the ceremony was the contract, and the witnesses were the proof."
      ]},
      { h: "Added From the Record", p: [
        "The book says what a vassal owed in a line or two and does not describe the ceremony, the lord's duties or the aids. The lesson adds those from the historical record. Forty days a year is a common figure that varied from place to place, and the lesson says so.",
        "Lord Hugh, Sir Aldric and Lord Odo are invented, and the text calls them that."
      ]},
      { h: "Book Pages", p: [
        "McDougal Littell World History: Medieval and Early Modern Times (2006), pages 296 and 297. Read free on archive.org: https://archive.org/details/worldhistorymedi00houg/page/296/mode/1up"
      ]},
      { h: "Suggested Videos", videos: [
        { id: "aerLOkGXZpQ", title: "Knights, Vassals and Fiefs", channel: "History Waits For No One!",
          why: "The only video found that covers homage and fealty. It's from a small channel, so preview it first." }
      ]},
      { h: "Key Vocabulary", vocab: true },
      { h: "Where This Goes Next", p: [
        "U3-L3 moves onto the manor, where the serfs lived, and U3-L4 looks at the knights and the castles that held the system together."
      ]}
    ]
  },

  parts: [
    { title: "Watching the Oath", s: [
      "In the last lesson Lord Hugh gave Sir Aldric a fief, and you read in a single sentence that Sir Aldric knelt and swore an oath, but a promise that big deserves more than one sentence.",
      "Imagine the hall in Lord Hugh's house, with a fire burning and the important men of the village standing along the walls, and a young knight walking to the middle of the floor.",
      "In a world where almost nobody could write, a deal like this couldn't be signed, so it had to be seen and heard by as many people as possible.",
      "That is why the ceremony had three parts, and each part did a different job."
    ]},

    { title: "Three Parts, Three Words", s: [
      "The first part is {{homage}}, when the vassal kneels in front of his lord and puts his hands between the lord's hands, to show that he is now the lord's man.",
      "The second part is {{fealty}}, which is the oath itself, when the vassal swears to be faithful, usually with his hand on holy relics or on a Bible.",
      "The third part is {{investiture}}, when the lord hands the vassal a small symbol of the fief, such as a clod of earth, a banner or a staff, because the land was too big to pick up.",
      "Kneeling, swearing and receiving were three different kinds of promise, and together they made the deal real, which is why the whole village came to watch."
    ]},

    { title: "The Ceremony, Step by Step", s: [
      "Now watch it happen in Lord Hugh's hall, one part at a time.",
      "",
      "[walk] Sir Aldric becomes Lord Hugh's vassal.",
      "[step] First comes homage, where Sir Aldric kneels in front of Lord Hugh and puts his hands together between Hugh's two hands. || HOMAGE: kneel, hands between the lord's hands\nMEANS: I am your man",
      "[step] Next comes fealty, where he lays a hand on the holy relics or a Bible and swears to be faithful to Lord Hugh. || FEALTY: an oath on relics or a Bible\nMEANS: I will be loyal to you",
      "[step] Last comes investiture, where Hugh hands him a clod of earth from the fief, which stands for all the land he is now allowed to hold. || INVESTITURE: a clod of earth, a banner or a staff\nMEANS: this land is yours to hold",
      "[step] Now everyone in the hall has seen it and heard it, and Sir Aldric is Lord Hugh's vassal, which was the nearest thing to a signature. || RESULT: a vassal, with a hall full of witnesses",
      "",
      "Notice that nothing was written down, so the witnesses were the proof, and a man who broke his word broke it in front of the whole village."
    ]},

    { title: "What Each Side Owed", s: [
      "A deal has two sides, so now look at what each man promised.",
      "Sir Aldric, as the vassal, owed Lord Hugh service in his army and advice at his court, and the book also says he paid taxes on the fief.",
      "Service meant fighting for the lord, commonly about forty days a year though it varied from place to place, and a vassal could also hire knights of his own to come along.",
      "Advice meant sitting in the lord's court to help decide cases, and the payments included special ones called {{aids}}, due on big occasions such as paying a ransom if the lord was captured, or when the lord's eldest son became a knight, or when his eldest daughter married.",
      "Lord Hugh, in return, owed Aldric protection, justice in his court, and the promise to keep his fief safe.",
      "",
      "[walk] The deal in a table.",
      "[step] Read down each column, with the lord's promises on the left and the vassal's on the right. || " + table(DEAL),
      "",
      "Notice that every promise on one side has a match on the other, which is why historians call it an agreement and not just an order."
    ]},

    { title: "Two Lords, One Man", s: [
      "Here is a problem the system created, because land was the main form of wealth, and a vassal could hold land from more than one lord.",
      "Imagine Sir Aldric also holds a small fief from Lord Odo, a neighbor of Hugh's, and then Hugh and Odo go to war with each other.",
      "Whom does Aldric fight for, since he swore an oath to both, and his sword can only be on one side?",
      "The answer people came to was the {{liege lord}}, the lord a vassal owed his first duty to.",
      "Even so, holding land from two lords could leave a man pulled two ways, which is called divided loyalty."
    ]},

    { title: "Why Bother With an Oath?", s: [
      "Go back to the hall and ask why they went to the trouble of all that kneeling and swearing.",
      "Without written contracts, a man's word was the contract, and the ceremony made the word so public and so solemn that breaking it meant shame in front of the whole community, and a sin before God for those who believed the oath was sworn in his name.",
      "",
      "[verse] Ecclesiastes 5:5 says, “Better is it that thou shouldest not vow, than that thou shouldest vow and not pay.”",
      "",
      "That verse is about being careful with promises, because a promise isn't kept until it's paid, and the feudal oath asked a man to pay for the rest of his life.",
      "Whether lords and vassals really kept theirs is a question worth keeping in mind, and the next lesson takes you to the manor, where the serfs lived under all those promises."
    ]}
  ],

  words: [
    ["Homage", "The part of the ceremony where a vassal kneels and puts his hands between his lord's hands.", 4],
    ["Fealty", "The oath of loyalty a vassal swore to his lord.", 5],
    ["Investiture", "The part of the ceremony where the lord hands over a small symbol of the fief.", 6],
    ["Aids", "Special payments a vassal owed his lord on big occasions, such as a ransom.", 18],
    ["Liege lord", "The lord a vassal owed his first duty to.", 26]
  ],

  findsAt: 33,
  questions: [
    { tag: "The Ceremony", q: "What happened in homage?", find: [4],
      hint: "Read Three Parts, Three Words.",
      choices: [
        "The vassal swore an oath on a Bible.",
        "The vassal knelt and put his hands between his lord's hands.",
        "The lord handed over a clod of earth.",
        "The vassal paid the lord a tax."
      ], right: 1 },

    { tag: "The Ceremony", q: "What was fealty?", find: [5],
      hint: "Read Three Parts, Three Words.",
      choices: [
        "A small symbol of the fief",
        "A payment made on a big occasion",
        "The vassal's oath to be faithful, sworn on relics or a Bible",
        "A knight hired by a vassal"
      ], right: 2 },

    { tag: "The Ceremony", q: "What did the lord hand over in investiture?", find: [6],
      hint: "Read Three Parts, Three Words.",
      choices: [
        "A small symbol of the fief, such as a clod of earth, a banner or a staff",
        "A bag of coins",
        "A suit of armor",
        "A written contract"
      ], right: 0 },

    { tag: "The Ceremony", q: "Why did the oath have to be a public ceremony?", find: [2],
      hint: "Read Watching the Oath.",
      choices: [
        "Because almost nobody could write, so the witnesses were the proof",
        "Because lords liked large crowds",
        "Because the law required a king to be present",
        "Because the ceremony took place in a church"
      ], right: 0 },

    { tag: "The Deal", q: "Which of these was part of what a vassal owed his lord?", find: [16],
      hint: "Read What Each Side Owed.",
      choices: [
        "Land and protection",
        "A fief and a banner",
        "Service in the army, advice at the court, and payments",
        "Free food for the lord's village"
      ], right: 2 },

    { tag: "The Deal", q: "Which of these did the lord owe his vassal?", find: [19],
      hint: "Read What Each Side Owed.",
      choices: [
        "Army service and aids",
        "Advice and taxes",
        "Work on his fields every day",
        "Protection, justice in his court, and a safe fief"
      ], right: 3 },

    { tag: "The Deal", q: "What was an aid?", find: [18],
      hint: "Read What Each Side Owed.",
      choices: [
        "A special payment due on a big occasion, such as a ransom",
        "A knight sent to help in a battle",
        "A kind of oath",
        "A daily tax on bread"
      ], right: 0 },

    { tag: "The Deal", q: "About how many days a year did a vassal commonly serve in his lord's army?", find: [17],
      hint: "Read What Each Side Owed.",
      choices: [
        "About four",
        "About forty",
        "About one hundred forty",
        "All three hundred sixty-five"
      ], right: 1 },

    { tag: "Two Lords", q: "What was a liege lord?", find: [26],
      hint: "Read Two Lords, One Man.",
      choices: [
        "A lord who had no vassals",
        "A king's servant",
        "A lord whose land was too small to farm",
        "The lord a vassal owed his first duty to"
      ], right: 3 },

    { tag: "Two Lords", q: "Why could holding land from two lords put a man in trouble?", find: [25],
      hint: "Read Two Lords, One Man.",
      choices: [
        "Because the two lords might go to war with each other, and he had sworn to both",
        "Because he had to pay taxes twice a day",
        "Because he could not ride two horses",
        "Because each lord would take half his sword"
      ], right: 0 }
  ],

  vocabQuestions: [
    { q: "What was <i>homage</i>?",
      choices: ["A vassal kneeling and putting his hands between his lord's hands", "A tax paid in grain", "A castle wall", "A kind of bread"], right: 0 },
    { q: "What was <i>fealty</i>?",
      choices: ["A small piece of land", "The oath of loyalty a vassal swore", "A knight's horse", "A gift to the Church"], right: 1 },
    { q: "What was <i>investiture</i>?",
      choices: ["The lord handing over a small symbol of the fief", "The vassal paying a ransom", "A serf leaving the manor", "A battle"], right: 0 },
    { q: "What were <i>aids</i>?",
      choices: ["Helpers in the fields", "Special payments owed on big occasions", "Rules of the court", "Weapons"], right: 1 },
    { q: "Who was a vassal's <i>liege lord</i>?",
      choices: ["The lord he owed his first duty to", "The king's cook", "The tallest knight", "A serf"], right: 0 }
  ],

  todo: { title: "What To Do Now", s: [
      "A hall with a fire burning and a young knight walking to the middle of the floor is where this lesson began, and the questions ask what happened there and what each side promised.",
      "{c} word cards sit at the top of the page, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "None of them asks for a date, so read for what each part of the ceremony was and who owed what.",
      "If the lists get tangled, read What Each Side Owed again and say each promise out loud, the lord's first and then the vassal's."
  ] }
};
