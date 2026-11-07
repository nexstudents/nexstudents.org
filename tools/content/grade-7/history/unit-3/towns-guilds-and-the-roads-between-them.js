/* history/towns-guilds-and-the-roads-between-them
   Grade 7 · history · unit 3. Its home is this folder.
   Built by tools/build-lessons.js. Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-11-07. Written to the week 10-11 plan (U3-L6: Towns,
   Guilds, and Trade Routes) and McDougal Littell World History: Medieval and Early Modern
   Times Ch9 Lesson 2 pp301-302 (The Growth of Towns, Town Life, The Guilds), via the week
   10-11 packet (paraphrased notes). Paul has not read it.

   🚨 THE SPINE IS THE BOOK'S, and the book gives only about a page and a half: around the
   year 1000 town life began to return as lords grew powerful and brought peace and
   stability, merchants traveled and traded more freely, and builders and tradespeople
   gathered where merchants settled. A market square and a cathedral stood at the center;
   most towns were dirty, cramped and busy; the narrow, unpaved streets turned to knee-deep
   mud; wooden houses burned easily, and the city of Rouen burned down six times between
   1200 and 1225. People in the same occupation, such as goldsmiths, bakers, weavers and
   dyers, formed guilds that made rules controlling the quantity and quality of their work,
   watched out for their members and made sure everyone found work. Today people in the same
   occupation form unions.

   ⚠️ ADDED FROM THE RECORD (the book has no trade routes, fairs or apprentices). Each is well
   known, uncontroversial, and no dates or real people are invented:
   · The guild ladder: apprentice, journeyman, master, and the masterpiece a journeyman made
     to prove his skill.
   · Trade fairs, such as the fairs in Champagne, France; merchants traveled by river and by
     rough roads.
   · Italian trading cities such as Venice and Genoa, and the Hanseatic League of northern
     trading towns. One line each, no dates.
   · A town charter, a written grant from a lord or king that gave a town rights and could
     free its people from a lord's control; and the saying "Town air makes you free", told as
     a saying and not a law.

   ⚠️ TOM, THE WEAVER'S APPRENTICE, IS INVENTED for the walk, labelled "imagine", not a real
   person. Wat and the village are the same invented world as U3-L1 to U3-L5.

   🚨 THE VERSE IS A WORKING CHOICE, NOT PAUL'S. Proverbs 22:29, the diligent worker.
   ⚠️ The 1965 film (a3HpUdAirUo) has a dated look and neither video was watched. Preview both. */
'use strict';
const table = (rows) => {
  const n = rows[0].length, w = [];
  for (let i = 0; i < n; i++) w[i] = Math.max(...rows.map((r) => [...r[i]].length)) + 2;
  const line = (l, m, r) => l + w.map((x) => "─".repeat(x)).join(m) + r;
  const row = (r) => "│" + r.map((c, i) => " " + c + " ".repeat(w[i] - 1 - [...c].length)).join("│") + "│";
  return [line("┌", "┬", "┐"), row(rows[0]), line("├", "┼", "┤")]
    .concat(rows.slice(1).map(row), [line("└", "┴", "┘")]).join("\n");
};
const TOWN = [
  ["", "Manor", "Town"],
  ["Main work", "Farming", "Crafts and trade"],
  ["The center", "The lord's house", "Market, cathedral"],
  ["Who lived there", "Lord and serfs", "Craftspeople, merchants"],
  ["The streets", "Fields and paths", "Narrow, muddy lanes"],
];
const LADDER = [
  ["Step", "Who he was"],
  ["Apprentice", "A young learner living with a master"],
  ["Journeyman", "A trained worker paid for his work"],
  ["Master", "Ran his own shop and trained others"],
];
module.exports = {
  id: "history/towns-guilds-and-the-roads-between-them",
  slug: "towns-guilds-and-the-roads-between-them",
  title: "Towns, Guilds, and the Roads Between Them",
  unit: "World History &middot; U3-L6",
  seq: { unit: 3, unitTitle: "Life Under Feudalism", n: 6 },
  natural: "2026-11-07",
  eyebrow: "World History",
  dek: "Around the year 1000, towns began to grow again. What life in one was like, how a guild trained a worker from apprentice to master, and how goods traveled between towns.",
  plan: {
    objective: "Explain why towns grew again after about 1000, describe town life and what a guild did, and name how goods moved between towns (fairs, merchants, trade routes).",
    markers: [
      "McDougal Ch9 Lesson 2 p301 (paraphrased): around A.D. 1000 town life began to return as lords grew powerful and brought peace and stability. Merchants traveled and traded more freely, and builders and tradespeople gathered wherever merchants settled.",
      "McDougal p301 (paraphrased): most towns were dirty, cramped and busy, with a market square and a cathedral at the center. Narrow, unpaved streets turned to knee-deep mud, and wooden houses burned easily. Rouen burned down six times between 1200 and 1225.",
      "McDougal p302 (paraphrased): people with the same occupation, such as goldsmiths, bakers, weavers and dyers, formed guilds that made rules controlling the quantity and quality of production, watched out for members and made sure everyone found employment. Today people with a shared occupation form unions.",
      "ADDED FROM THE RECORD: the guild ladder, trade fairs, trading cities and the Hanseatic League, and the town charter. See the header.",
    ],
    method: "FOLLOW THE WORKER AND THE GOODS. A TOWN GREW WHEN MERCHANTS CAME, A GUILD TRAINED ITS WORKERS UP A LADDER, AND FAIRS AND TRADE ROUTES CARRIED THE GOODS FROM TOWN TO TOWN.",
    exampleOnly: [
      "Tom the weaver's apprentice, invented. WORLD: Europe after about 1000. The title and objective don't name it.",
      "⚠️ The guild ladder, the fairs and the trade routes are added from the record. See the header.",
    ],
    digitize: "The reading engine, a manor-against-town table, a Watch It Worked that follows an apprentice up the guild ladder, and a short section on fairs and routes. Questions ask why towns returned, what a town was like, what a guild did, the order of the ladder, and how goods moved.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "History",
    blurb: "Around the year 1000, towns began to grow again. Mud and fire in a medieval town, a guild that trained a worker from apprentice to master, and the fairs and roads that carried goods.",
    contains: [
      "A reading on why towns returned and what life in one was like",
      "A table that sets a manor beside a town",
      "A Watch It Worked that follows an apprentice up the guild ladder",
      "Fairs, merchants and trade routes, in a short section",
      "Six word cards, each with a check question",
    ] },
  scripture: {
    ref: "Proverbs 22:29",
    text: "Seest thou a man diligent in his business? he shall stand before kings; he shall not stand before mean men.",
  },
  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will explain why towns grew again after about the year 1000, describe what a medieval town was like, say what a guild did and how a worker climbed from apprentice to master, and name how goods moved between towns."
      ]},
      { h: "Where Students Get Stuck", p: [
        "Thinking a guild was a gang or a club for fun. A guild was a group of workers in the same trade who set rules for quality and quantity and looked after their members.",
        "Mixing up the ladder. The order is apprentice, then journeyman, then master, and the table sets it out."
      ]},
      { h: "Added From the Record", p: [
        "The book covers towns and guilds in a page and a half and says nothing of apprentices, fairs or trade routes. The lesson adds the guild ladder, trade fairs, trading cities and the charter from the historical record, with no dates, and says which parts are added.",
        "Tom the weaver's apprentice is invented, and the text calls him that."
      ]},
      { h: "Book Pages", p: [
        "McDougal Littell World History: Medieval and Early Modern Times (2006), pages 301 and 302. Read free on archive.org: https://archive.org/details/worldhistorymedi00houg/page/301/mode/1up"
      ]},
      { h: "Suggested Videos", videos: [
        { id: "KVoLMJjMvb4", title: "Every Medieval Guilds Explained In 8 Minutes", channel: "Scholars Explanation",
          why: "A short overview of what guilds were and how they worked." },
        { id: "a3HpUdAirUo", title: "Medieval Times: Guilds and Trades (1965)", channel: "A/V Geeks 16mm Films",
          why: "An old classroom film on the same topic. It's from 1965 and looks dated, so preview it first." }
      ]},
      { h: "Key Vocabulary", vocab: true },
      { h: "Where This Goes Next", p: [
        "Later lessons in this unit follow the Vikings and the Norman Conquest."
      ]}
    ]
  },

  parts: [
    { title: "Towns Come Back", s: [
      "For a long time after Rome fell, towns had shrunk, and most people lived on manors where they grew what they needed.",
      "Around the year 1000, things began to change, because lords had grown powerful enough to bring peace and stability, and merchants could travel and trade more freely.",
      "Builders and tradespeople gathered wherever merchants settled, and those settlements grew into towns.",
      "This lesson looks at what life in one was like, how workers were trained, and how goods moved from town to town."
    ]},

    { title: "Inside a Medieval Town", s: [
      "A market square and a cathedral stood at the center of most towns, and the busy streets ran out from there.",
      "Most towns were dirty, cramped and noisy, and the narrow streets weren't paved, so they turned to knee-deep mud when it rained.",
      "Wooden houses were packed close together and burned easily, and the city of Rouen burned down six times between 1200 and 1225.",
      "",
      "[walk] A manor and a town side by side.",
      "[step] Read across each row, with the manor on the left and the town on the right. || " + table(TOWN),
      "",
      "Notice that the manor made its living from farming and the town made its living from crafts and trade, which is what the book says is the main difference."
    ]},

    { title: "What a Guild Did", s: [
      "People who did the same job in a town, such as goldsmiths, bakers, weavers and dyers, joined together in a {{guild}}.",
      "A guild made rules about how much its members could make and how good their work had to be, so that customers could trust what they bought.",
      "It also looked out for its members and tried to make sure that everybody in the trade found work.",
      "Today people in the same job form unions, which work for better pay and conditions in much the same way."
    ]},

    { title: "From Apprentice to Master", s: [
      "Guilds also trained the next generation, and a boy started at the bottom as an {{apprentice}}, a young learner who lived with a master and worked for his food and training.",
      "After several years he became a {{journeyman}}, a trained worker who was paid for his work, and he finished by making a masterpiece to prove his skill.",
      "If the guild approved it, he became a {{master}}, who could run his own shop and train others.",
      "",
      "[walk] Imagine Tom, a weaver's apprentice, climbing the ladder.",
      "[step] Tom starts as an apprentice, so he lives with a master weaver, sweeps the shop and learns the craft. || STEP 1: apprentice\nWORK: learns, for food and training",
      "[step] After several years Tom is a journeyman, which means he is skilled and gets paid for the cloth he weaves. || STEP 2: journeyman\nWORK: weaves for pay",
      "[step] Then he weaves a masterpiece, one fine piece of cloth, and the guild judges it. || STEP 3: the masterpiece\nWORK: proves his skill",
      "[step] If the guild approves, Tom becomes a master, opens his own shop and trains apprentices of his own. || STEP 4: master\nWORK: owns a shop, trains others",
      "",
      "[walk] The ladder in a table.",
      "[step] Read down the table from the bottom step to the top. || " + table(LADDER),
      "",
      "Notice that the guild set the steps, so a trade was passed on the same way in every town and a customer knew what a master's work meant."
    ]},

    { title: "Goods on the Move", s: [
      "Towns needed goods from far away, so merchants carried them by river and along rough roads, and meeting places called {{fairs}} grew up where merchants came to buy and sell.",
      "One famous set of fairs was in Champagne, in France, where traders from many places came together.",
      "In the south, Italian trading cities such as Venice and Genoa grew rich on trade, and in the north a group of trading towns called the Hanseatic League worked together to protect their trade.",
      "The roads were rough and the trip was long, but the goods kept moving, and that is how a town in one country could end up with cloth or spices from another."
    ]},

    { title: "Free in the Town", s: [
      "Some towns also won freedom from the lord whose land they stood on, by getting a {{charter}}, which was a written grant from a lord or king that gave the town its rights.",
      "People even had a saying for it, which was that town air makes you free, but it was only a saying and not a law.",
      "Go back to the mud and the market square, where a town grew because workers trained in guilds and merchants kept goods moving.",
      "",
      "[verse] Proverbs 22:29 says, “Seest thou a man diligent in his business? he shall stand before kings; he shall not stand before mean men.”",
      "",
      "That verse is about a worker who is good at his trade, and a master of a guild was exactly that, someone whose skill had been proved.",
      "The next lessons in the unit leave the towns and look at the Vikings and the Norman Conquest."
    ]}
  ],

  words: [
    ["Guild", "A group of people in the same trade who made rules for their work and looked out for their members.", 10],
    ["Apprentice", "A young learner who lived with a master and worked for his food and training.", 14],
    ["Journeyman", "A trained worker who was paid for his work.", 15],
    ["Master", "A skilled craftsman who could run his own shop and train others.", 16],
    ["Fair", "A meeting place where merchants came to buy and sell.", 25],
    ["Charter", "A written grant from a lord or king that gave a town its rights.", 29]
  ],

  findsAt: 35,
  questions: [
    { tag: "The Town", q: "Why did towns begin to grow again around the year 1000?", find: [1],
      hint: "Read Towns Come Back.",
      choices: [
        "Lords had grown powerful enough to bring peace, and merchants could travel and trade more freely.",
        "Kings ordered every village to become a town.",
        "The Church moved everyone into cities.",
        "Farming stopped working."
      ], right: 0 },

    { tag: "The Town", q: "What stood at the center of most medieval towns?", find: [4],
      hint: "Read Inside a Medieval Town.",
      choices: [
        "A castle and a moat",
        "A market square and a cathedral",
        "A mill and an oven",
        "A guild hall and a fair"
      ], right: 1 },

    { tag: "The Town", q: "Why did fires do so much damage in medieval towns?", find: [6],
      hint: "Read Inside a Medieval Town.",
      choices: [
        "The houses were made of wood and packed close together.",
        "The streets were made of straw.",
        "Nobody lived in the towns.",
        "The cathedral was made of wood."
      ], right: 0 },

    { tag: "The Guild", q: "What was a guild?", find: [10],
      hint: "Read What a Guild Did.",
      choices: [
        "A castle for knights",
        "A group of people in the same trade who made rules for their work and looked out for their members",
        "A tax on merchants",
        "A kind of fair"
      ], right: 1 },

    { tag: "The Guild", q: "What did a guild's rules control?", find: [11],
      hint: "Read What a Guild Did.",
      choices: [
        "The weather",
        "The price of land",
        "How much its members made and how good their work had to be",
        "Which church the members attended"
      ], right: 2 },

    { tag: "The Ladder", q: "What was the correct order of the guild ladder?", find: [14],
      hint: "Read From Apprentice to Master.",
      choices: [
        "Master, journeyman, apprentice",
        "Apprentice, journeyman, master",
        "Journeyman, apprentice, master",
        "Apprentice, master, journeyman"
      ], right: 1 },

    { tag: "The Ladder", q: "Why did a journeyman make a masterpiece?", find: [15],
      hint: "Read From Apprentice to Master.",
      choices: [
        "To sell it for the most money",
        "To prove his skill so the guild would make him a master",
        "To give it to the lord",
        "To show he was done with the trade"
      ], right: 1 },

    { tag: "Trade", q: "What were fairs?", find: [25],
      hint: "Read Goods on the Move.",
      choices: [
        "Meeting places where merchants came to buy and sell",
        "Games played at a castle",
        "Courts where a lord judged cases",
        "Fields where serfs grew crops"
      ], right: 0 },

    { tag: "Trade", q: "Which of these was an Italian trading city that grew rich on trade?", find: [27],
      hint: "Read Goods on the Move.",
      choices: [
        "Rouen",
        "Champagne",
        "Venice",
        "The Hanseatic League"
      ], right: 2 },

    { tag: "Trade", q: "What could a town charter do?", find: [29],
      hint: "Read Free in the Town.",
      choices: [
        "Give a town its rights and free it from a lord's control",
        "Make a town into a castle",
        "Turn merchants into knights",
        "Raise the price of grain"
      ], right: 0 }
  ],

  vocabQuestions: [
    { q: "What was a <i>guild</i>?",
      choices: ["A group of people in the same trade who made rules for their work", "A castle", "A kind of tax", "A serf's hut"], right: 0 },
    { q: "Who was an <i>apprentice</i>?",
      choices: ["A king", "A young learner who lived with a master", "A merchant from Venice", "A bishop"], right: 1 },
    { q: "Who was a <i>journeyman</i>?",
      choices: ["A trained worker paid for his work", "A knight", "A new learner", "A baker's customer"], right: 0 },
    { q: "Who was a <i>master</i> in a guild?",
      choices: ["A young learner", "A skilled craftsman who could run his own shop and train others", "A lord", "A serf"], right: 1 },
    { q: "What was a <i>fair</i>?",
      choices: ["A meeting place where merchants bought and sold", "A fight", "A tax", "A school"], right: 0 },
    { q: "What was a <i>charter</i>?",
      choices: ["A kind of boat", "A written grant that gave a town its rights", "A tournament", "A suit of armor"], right: 1 }
  ],

  todo: { title: "What To Do Now", s: [
      "A muddy street, a market square and a cathedral are where this lesson ends up, and the questions ask why towns returned, what a guild did and how goods moved.",
      "{c} word cards sit at the top of the page, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "None of them asks for a date, so read for what a town was like, who was on each step of the guild ladder and how goods got from one town to another.",
      "If the ladder gets tangled, read From Apprentice to Master again and say each step out loud, from the bottom up."
  ] }
};
