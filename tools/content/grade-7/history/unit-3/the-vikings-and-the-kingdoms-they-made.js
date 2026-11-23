/* history/the-vikings-and-the-kingdoms-they-made
   Grade 7 · history · unit 3. Its home is this folder.
   Built by tools/build-lessons.js. Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-11-22. Written to the week 12 plan (U3-L7: Viking
   Expansion and State Formation) and McDougal Littell World History: Medieval and Early
   Modern Times (2006), via the week 12 packet (paraphrased notes). Paul has not read it.

   🚨 THE BOOK SAYS ALMOST NOTHING. McDougal p295 says that after Charlemagne died in 814
   his son Louis I ruled, that Louis's three sons fought, that a treaty in 843 split the
   empire in three and weakened it, and that Scandinavian pirates called Vikings terrorized
   coastal villages while Muslims and Magyars raided elsewhere. The map on p287 ("Europe,
   A.D. 1000") shows the kingdoms of Norway, Sweden and Denmark. That is all the book has,
   so the lesson keeps those facts as its spine and adds the rest from the record.

   ⚠️ ADDED FROM THE RECORD (the book has none of it). Each is well known; the packet
   checked them against Wikipedia, "Viking Age", on 2026-11-22. Worth a glance from Paul:
   · 793: the raid on the monastery at Lindisfarne, off the northeast coast of England,
     the usual start of the Viking Age.
   · Why they went (scholars debate it): rich, poorly defended monasteries and towns,
     weak kingdoms, a growing population, better farming and better ships. They were also
     traders and settlers, not only raiders.
   · The longship: overlapping planks, strong, and shallow enough to go up rivers.
   · 867: Northumbria falls to the Danes, and the part of England under Viking control is
     called the Danelaw. Alfred of Wessex held out and pushed the Vikings back.
   · 911: the Frankish king Charles the Simple gave a Viking leader, Rollo, land that
     became Normandy, "land of the Northmen". Rollo swore loyalty, became a Christian and
     promised to defend northern France from other Vikings.
   · Iceland settled by Norwegians in the 870s and after; Erik the Red pioneered Greenland
     (about 985); his son Leif Erikson sailed west about the year 1000. The year is said
     "about 1000" because sources differ (one dates the arrival in North America to 1021).
   · 1016: Cnut won the English throne, and by his death in 1035 ruled Denmark, England,
     Norway and parts of Sweden.
   · Conversion: Iceland became Christian about 1000; King Olaf Haraldsson pushed
     Christianity in Norway and died in 1030.
   · The Viking Age is often said to end in 1066.
   ⚠️ The Leif the Lion booklet (U3 L7, "Viking Expansion and State Formation") is a
   build note only and is not quoted. Its photographs have not been read for this lesson.
   🚨 No person in this lesson is invented. Rollo, Alfred, Erik, Leif and Cnut are real.

   🚨 THE VERSE IS A WORKING CHOICE, NOT PAUL'S. Acts 17:26, about the nations and the
   bounds of their habitation. Choosing the scripture is his, so it goes in the review
   queue.
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
const CHAIN = [
  ["Step", "What happened"],
  ["1", "Charlemagne dies in 814, and his empire passes to his son"],
  ["2", "His grandsons fight, and a treaty in 843 splits it in three"],
  ["3", "The kingdoms are weak, and coasts are hard to guard"],
  ["4", "Viking longships arrive to raid"],
];
const TIME = [
  ["Year", "What happened"],
  ["793", "Vikings raid the monastery at Lindisfarne"],
  ["867", "Danes take Northumbria, the start of the Danelaw"],
  ["911", "Rollo is given the land that becomes Normandy"],
  ["About 1000", "Leif Erikson sails west, and Iceland turns Christian"],
  ["1016", "Cnut becomes king of England"],
  ["1066", "The Viking Age is said to end"],
];
module.exports = {
  id: "history/the-vikings-and-the-kingdoms-they-made",
  slug: "the-vikings-and-the-kingdoms-they-made",
  title: "The Vikings, and the Kingdoms They Made",
  unit: "World History &middot; U3-L7",
  seq: { unit: 3, unitTitle: "Life Under Feudalism", n: 7 },
  natural: "2026-11-22",
  eyebrow: "World History",
  dek: "A raid on a quiet monastery in 793 started three hundred years of Viking ships. Why they came, where they settled, and how their homelands became Christian kingdoms.",
  plan: {
    objective: "Explain why the Vikings raided, traded and settled, where they went, and how their homelands became Christian kingdoms that joined Europe.",
    markers: [
      "McDougal p295 (paraphrased): after Charlemagne died in 814 his son Louis I ruled, and when Louis died his three sons fought. A treaty in 843 divided the empire in three and weakened it. Scandinavian pirates called Vikings terrorized coastal villages, and from the mid-800s Europe was a place of constant conflict.",
      "McDougal p287 map (paraphrased): Europe in A.D. 1000 shows the Kingdoms of Norway, Sweden and Denmark.",
      "Leif build note: U3 L7, Viking Expansion and State Formation. Not quoted.",
      "ADDED FROM THE RECORD: everything else. See the header.",
    ],
    method: "A CAUSE AND EFFECT CHAIN. A SPLIT EMPIRE AND BETTER SHIPS LED TO RAIDS, RAIDS LED TO SETTLEMENTS, AND SETTLEMENTS AND CONVERSION TURNED THE VIKING HOMELANDS INTO CHRISTIAN KINGDOMS. THE RAIDS ALSO MADE LORDS BUILD DEFENSES, WHICH LINKS BACK TO FEUDALISM AND CASTLES.",
    exampleOnly: [
      "Individual names beyond the key ones (Rollo, Leif Erikson, Cnut) are detail. WORLD: Europe, 793 to 1066.",
    ],
    digitize: "The reading engine, a Watch It Worked that follows the chain from a split empire to a raid, and a Watch It Worked timeline of six dates. Questions are find-in-text. Facts added from the record are listed in the header.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "History",
    blurb: "In 793 ships came out of the sea and raided a monastery. Where the Vikings came from, why they raided, traded and settled, and how their homelands became Christian kingdoms.",
    contains: [
      "A reading on who the Vikings were and why they raided",
      "A Watch It Worked from a split empire to a raid",
      "A timeline from 793 to 1066, Normandy and the Danelaw included",
      "How Viking homelands became Christian kingdoms",
      "Six word cards, each with a check question",
    ] },
  scripture: {
    ref: "Acts 17:26",
    text: "And hath made of one blood all nations of men for to dwell on all the face of the earth, and hath determined the times before appointed, and the bounds of their habitation;",
  },
  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will explain why the Vikings raided, traded and settled, say where they went, and tell how their homelands became Christian kingdoms that joined the rest of Europe."
      ]},
      { h: "Where Students Get Stuck", p: [
        "Thinking the Vikings only raided. They were also traders and settlers, and farmers at home.",
        "Mixing up the Danelaw and Normandy. The Danelaw was part of England under Viking control, and Normandy was land in northern France given to Rollo.",
        "Hunting for one cause. Historians debate why they went, so the lesson gives several."
      ]},
      { h: "Added From the Record", p: [
        "The book gives about three sentences on the Vikings and one map. Almost everything else, including the 793 raid, the longship, the Danelaw, Rollo and Normandy, the voyages west, Cnut and the conversions, is added from the record and is listed in the lesson's source notes. No person is invented."
      ]},
      { h: "Book Pages", p: [
        "McDougal Littell World History: Medieval and Early Modern Times (2006), page 295 and the map on page 287. Read free on archive.org: https://archive.org/details/worldhistorymedi00houg/page/402/mode/1up"
      ]},
      { h: "Suggested Videos", videos: [
        { id: "sKDFVSRdR2g", title: "Who were the Vikings? | Amazing Viking Facts for Kids | Twinkl Kids TV", channel: "Twinkl Kids TV",
          why: "A short overview of who the Vikings were, pitched young. It was not watched, so preview it first." },
        { id: "ugE24g1zehg", title: "The Vikings and Leif Erikson For Kids", channel: "Bedtime History",
          why: "Adds Leif Erikson and the voyages west. It was not watched, so preview it first." }
      ]},
      { h: "Key Vocabulary", vocab: true },
      { h: "Where This Goes Next", p: [
        "The next lesson follows Rollo's descendants, the Normans, across the sea to England in 1066."
      ]}
    ]
  },

  video: { id: "sKDFVSRdR2g", title: "Who were the Vikings? | Amazing Viking Facts for Kids | Twinkl Kids TV", channel: "Twinkl Kids TV",
    why: "A short, kid-level overview of who the Vikings were and where they went." },

  parts: [
    { title: "Ships Out of the Sea", s: [
      "In the summer of 793 the monks at Lindisfarne, a monastery on an island off the northeast coast of England, looked up and saw ships.",
      "A monastery was where monks lived and prayed, and it was full of gold and silver for the church, and nothing but the monks stood guard over it.",
      "The strangers burned and robbed it and sailed away, and people across Europe took the raid as a sign that something new had begun.",
      "Who were they, where had they come from, and why did they keep coming back?"
    ]},

    { title: "Who the Vikings Were", s: [
      "The {{Vikings}} came from Scandinavia, the far north of Europe, which is today's Norway, Sweden and Denmark.",
      "Their way of attacking was the {{raid}}, a sudden strike on a place that is not ready for it, followed by a quick escape with the loot.",
      "But raiding was only part of their story, because the same people were also traders, farmers and settlers.",
      "Their ships were the reason they could go so far, and a {{longship}} was built with overlapping planks, strong enough to cross the open sea and shallow enough to row up a river.",
      "So a raider could land on a beach, or sail inland, and be gone again before anyone could gather an army."
    ]},

    { title: "Why They Came When They Did", s: [
      "Historians still argue about why the Vikings left home, and most think there was more than one reason.",
      "At home the population was growing, farming was getting better, and the chiefs fought each other for power.",
      "Overseas there were monasteries and towns full of treasure with almost no defense, and your book adds the timing, because the Frankish empire had just fallen apart.",
      "",
      "[walk] Follow the chain from a great empire to a Viking raid.",
      "[step] Charlemagne dies in 814 and his son Louis rules the empire. || " + table(CHAIN.slice(0, 2)),
      "[step] Louis dies, his three sons fight, and a treaty in 843 splits the empire in three. || " + table(CHAIN.slice(0, 3)),
      "[step] The weaker kingdoms can't guard every coast and river. || " + table(CHAIN.slice(0, 4)),
      "[step] Viking longships arrive and raid. || " + table(CHAIN),
      "",
      "From the middle of the 800s Europe was in nearly constant conflict, since Muslim raiders hit Italy and France and the Magyars attacked from the east."
    ]},

    { title: "Why Lords Built Walls", s: [
      "Think about what that meant for an ordinary village, which could be raided on any day with almost no warning.",
      "A king far away couldn't help, so people turned to a strong lord nearby who had armed men and a place to hide.",
      "You've already seen where that led, to lords and vassals, to oaths, and to the castles of the last lessons.",
      "The Vikings didn't create feudalism by themselves, but the raids were one of the reasons so many people wanted a strong local lord."
    ]},

    { title: "From Raiders to Neighbors", s: [
      "After a while the Vikings stopped only raiding and started staying.",
      "In 867 the Danes took the northern English kingdom of Northumbria, and the part of England under Viking control became the {{Danelaw}}, while Alfred, king of Wessex, held on and pushed the Vikings back.",
      "In 911 the Frankish king gave a Viking leader named Rollo some land in northern France, and it became {{Normandy}}, which means the land of the Northmen.",
      "Rollo swore to be the king's loyal man, became a Christian, and promised to defend the coast against other Vikings.",
      "Others sailed west to Iceland, and Erik the Red pioneered Greenland, and about the year 1000 his son Leif Erikson reached a land he called Vinland, on the coast of North America.",
      "",
      "[walk] Put the Viking story on a timeline.",
      "[step] In 793 Vikings raid the monastery at Lindisfarne. || " + table(TIME.slice(0, 2)),
      "[step] In 867 the Danes take Northumbria, and the Danelaw begins. || " + table(TIME.slice(0, 3)),
      "[step] In 911 Rollo is given the land that becomes Normandy. || " + table(TIME.slice(0, 4)),
      "[step] About the year 1000 Leif Erikson sails west, and Iceland turns Christian. || " + table(TIME.slice(0, 5)),
      "[step] In 1016 Cnut wins the English throne. || " + table(TIME.slice(0, 6)),
      "[step] In 1066 the Viking Age is said to end. || " + table(TIME)
    ]},

    { title: "From Chiefs to Kings", s: [
      "Back home the Viking lands were changing too, and the small chiefdoms of Norway, Sweden and Denmark joined into larger kingdoms.",
      "Cnut shows how far that could go, because he won England in 1016 and by his death in 1035 he ruled Denmark, England, Norway and parts of Sweden.",
      "The kings also began to {{convert}}, which means to change their religion, and so Iceland became Christian about the year 1000.",
      "King Olaf Haraldsson pushed Christianity in Norway until he died in battle in 1030, and Sweden had its first Christian king around the same time.",
      "Your book's map of Europe in the year 1000 shows the result, with Norway, Sweden and Denmark drawn as kingdoms like France and England.",
      "",
      "[verse] Acts 17:26 says, “And hath made of one blood all nations of men for to dwell on all the face of the earth, and hath determined the times before appointed, and the bounds of their habitation;”",
      "",
      "The verse is about nations and the places they settle, and the Vikings are a good picture of it, since raiders from the far north ended up as neighbors and kings in Europe.",
      "One more family of Vikings is still to come, because Rollo's descendants, the Normans, are about to cross the sea."
    ]}
  ],

  words: [
    ["Viking", "A seafaring raider, trader and settler from Scandinavia.", 4],
    ["Raid", "A sudden attack on a place that isn't ready for it, followed by a quick escape.", 5],
    ["Longship", "A strong Viking ship with overlapping planks, built for open seas and rivers.", 7],
    ["Danelaw", "The part of England that was under Viking control.", 23],
    ["Normandy", "Land in northern France given to the Viking leader Rollo, the land of the Northmen.", 24],
    ["Convert", "To change your religion.", 36]
  ],

  findsAt: 42,
  questions: [
    { tag: "The Raids", q: "What happened at Lindisfarne in 793?", find: [0],
      hint: "Read Ships Out of the Sea.",
      choices: [
        "Vikings raided a monastery and robbed it.",
        "A new king was crowned.",
        "A castle was built.",
        "Merchants held a fair."
      ], right: 0 },

    { tag: "The Raids", q: "Where did the Vikings come from?", find: [4],
      hint: "Read Who the Vikings Were.",
      choices: [
        "The Middle East",
        "Scandinavia, the far north of Europe",
        "North Africa",
        "Rome"
      ], right: 1 },

    { tag: "The Raids", q: "What made it possible for the Vikings to sail so far and to row up rivers?", find: [7],
      hint: "Read Who the Vikings Were.",
      choices: [
        "Steam engines",
        "Huge armies on land",
        "Their longships, strong enough for the sea and shallow enough for rivers",
        "Maps from the Franks"
      ], right: 2 },

    { tag: "The Raids", q: "Besides raiding, what else did the Vikings do?", find: [6],
      hint: "Read Who the Vikings Were.",
      choices: [
        "They only raided.",
        "They wrote the laws of the Franks.",
        "They built castles for the Church.",
        "They traded, farmed and settled."
      ], right: 3 },

    { tag: "The Causes", q: "What happened to the Frankish empire after Charlemagne died?", find: [14],
      hint: "Read Why They Came When They Did.",
      choices: [
        "It was split in three by a treaty in 843, which weakened it.",
        "It grew larger and stronger.",
        "It moved to Scandinavia.",
        "It was given to the Vikings."
      ], right: 0 },

    { tag: "The Causes", q: "Why did the raids make people want a strong lord nearby?", find: [19],
      hint: "Read Why Lords Built Walls.",
      choices: [
        "Lords gave away free land.",
        "A king far away couldn't help, and a strong lord nearby had armed men and a place to hide.",
        "Lords could stop the weather.",
        "Lords were always Vikings."
      ], right: 1 },

    { tag: "The Settlements", q: "What was the Danelaw?", find: [23],
      hint: "Read From Raiders to Neighbors.",
      choices: [
        "A law written by Alfred",
        "A Viking ship",
        "The part of England under Viking control",
        "A town in Denmark"
      ], right: 2 },

    { tag: "The Settlements", q: "What did Rollo promise when he was given land in northern France in 911?", find: [25],
      hint: "Read From Raiders to Neighbors.",
      choices: [
        "To leave France forever",
        "To raid England",
        "To give the king his ships",
        "To be loyal, become a Christian and defend the coast from other Vikings"
      ], right: 3 },

    { tag: "The Settlements", q: "What does Normandy mean?", find: [24],
      hint: "Read From Raiders to Neighbors.",
      choices: [
        "The land of the Northmen",
        "The land of the Franks",
        "The sea of ships",
        "The land of the monks"
      ], right: 0 },

    { tag: "The Kingdoms", q: "What did Cnut rule by the time he died in 1035?", find: [35],
      hint: "Read From Chiefs to Kings.",
      choices: [
        "Only Denmark",
        "Denmark, England, Norway and parts of Sweden",
        "France and Spain",
        "Iceland and Greenland"
      ], right: 1 },

    { tag: "The Kingdoms", q: "What does it mean to convert?", find: [36],
      hint: "Read From Chiefs to Kings.",
      choices: [
        "To sail across the sea",
        "To build a church",
        "To change your religion",
        "To raid a town"
      ], right: 2 }
  ],

  vocabQuestions: [
    { q: "Who were the <i>Vikings</i>?",
      choices: ["Seafaring raiders, traders and settlers from Scandinavia", "Roman soldiers", "Peasants on a manor", "Frankish knights"], right: 0 },
    { q: "What is a <i>raid</i>?",
      choices: ["A long peace treaty", "A sudden attack followed by a quick escape", "A market fair", "A church service"], right: 1 },
    { q: "What was a <i>longship</i>?",
      choices: ["A tall tower", "A slow cart", "A strong Viking ship built for open seas and rivers", "A church bell"], right: 2 },
    { q: "What was the <i>Danelaw</i>?",
      choices: ["A king's crown", "A Viking song", "A kind of ship", "The part of England under Viking control"], right: 3 },
    { q: "What was <i>Normandy</i>?",
      choices: ["Land in northern France given to Rollo", "A Viking ship", "A town in England", "A Danish king"], right: 0 },
    { q: "What does it mean to <i>convert</i>?",
      choices: ["To rob a church", "To change your religion", "To win a battle", "To build a ship"], right: 1 }
  ],

  todo: { title: "What To Do Now", s: [
      "A burning monastery in 793 is where this lesson starts, and the questions ask why the Vikings raided, where they settled and how their homelands became kingdoms.",
      "{c} word cards sit at the top of the page, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "None of them asks you to memorize a date, so read for the order, which is raids first, then settlements, then kingdoms and conversion.",
      "If the order gets tangled, read the timeline in From Raiders to Neighbors again and say each step out loud, from 793 to 1066."
  ] }
};
