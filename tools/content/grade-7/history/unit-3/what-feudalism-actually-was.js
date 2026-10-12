/* history/what-feudalism-actually-was
   Grade 7 · history · unit 3. Its home is this folder.
   Built by tools/build-lessons.js. Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-10-11. Written on Sonnet from the Leif outline (U3 L1:
   The Feudal Order) and McDougal Littell World History: Medieval and Early Modern Times
   Ch9 Lesson 1 pp295-297 (feudalism, lords, vassals, fiefs, knights, serfs) and Lesson 2
   p298 and p304 (serfs bound to the soil), via the week 8-9 packet (paraphrased notes).
   The video is now added per student in Teacher Notes.

   🚨 THE SPINE IS THE BOOK'S: feudalism grew out of the violent, unstable time after
   Charlemagne's empire split, as a way for kings and nobles to hold land and power. A lord
   owned land and gave pieces (fiefs) to lesser nobles, the vassals, who owed him service
   in his court and army and paid taxes. Many vassals were knights. The structure ran
   king, then church officials and nobles, then knights, then peasants called serfs, who
   lived and worked on the land and got shelter and protection. The book uses the word
   "manor system" and not "manorialism".

   ⚠️ ADDED FROM THE RECORD, worth a glance from Paul:
   · The oath: a vassal knelt and placed his hands between his lord's (homage) and swore
     loyalty (fealty). The book does not describe the ceremony. One sentence says it.
   · The lord's duty to protect his vassal and to see him heard in the lord's court.

   ⚠️ THE VILLAGE AND ITS PEOPLE ARE INVENTED for the story and the walk (Lord Hugh, Sir
   Aldric and Wat the serf). They are labelled "imagine" in the text and are not real
   people.

   ⚠️ THE MANOR IS NOT TAUGHT HERE. It is U3-L3. Castles and knights' training are U3-L4,
   lords and the oath in detail are U3-L2, and the Church's power is U3-L5. Only enough
   is said of the manor to place the serf.

   🚨 THE VERSE IS A WORKING CHOICE, NOT PAUL'S. Colossians 4:1, the standard a lord was
   to be held to. */
'use strict';
module.exports = {
  id: "history/what-feudalism-actually-was",
  slug: "what-feudalism-actually-was",
  title: "What Feudalism Actually Was",
  unit: "World History &middot; U3-L1",
  seq: { unit: 3, unitTitle: "Life Under Feudalism", n: 1 },
  natural: "2026-10-11",
  eyebrow: "World History",
  dek: "When no king could protect you, you needed somebody who could. Feudalism was the deal people made: land and protection on one side, service and loyalty on the other.",
  plan: {
    objective: "Explain why feudalism grew up in Europe and describe who owed whom what, from the king down to the serf.",
    markers: [
      "McDougal Ch9 Lesson 1 (paraphrased): feudalism emerged from the violent, unstable period after Charlemagne's empire split, as a way for kings and nobles to hold land and power during warfare. It was based on an agreement between two groups of nobles.",
      "McDougal (paraphrased): a lord was a powerful noble who owned land and gave pieces of it, called fiefs, to lesser nobles called vassals. In return the vassal owed the lord service in his court and army and paid taxes. Many vassals were knights who fought for the lord.",
      "McDougal (paraphrased): the structure ran from the king, to church officials and nobles, to knights, to peasants called serfs, who lived and worked on a lord's or vassal's land and in return were granted shelter and protection. Serfs were bound to the soil.",
      "ADDED FROM THE RECORD: the oath of homage and fealty, and the lord's duty to protect. See the header.",
    ],
    method: "A THREE-PART DEAL, AND WHO OWES WHOM. The lord gives land and protection, the vassal gives service and loyalty, and the serf gives work and gets shelter. Read the chain from top to bottom, noting what goes down and what comes up.",
    exampleOnly: [
      "A village around the year 900 with Lord Hugh, Sir Aldric and Wat the serf, all invented. WORLD: the western Frankish lands after 843. The title and objective don't name it.",
      "⚠️ The oath is added from the record. See the header.",
    ],
    digitize: "The existing reading engine and one Watch It Worked that reads the chain from the king to the serf and states what each owes. Questions ask why feudalism grew, what the words lord, vassal, fief and serf mean, and what each side gave.",
    unclear: "",
  },
  sheet: { slug: "what-feudalism-actually-was-homework", subject: "history",
    note: "Do it on screen or print it. Your score shows here once you check it." },

  shelf: { grades: [7], subject: "History",
    blurb: "When no king could protect you, you needed somebody who could. Lord, vassal, fief, knight and serf, and the deal that tied them together.",
    contains: [
      "A story-form reading, read aloud with the words highlighted",
      "Why feudalism grew after Charlemagne",
      "Lords, vassals, fiefs and the oath",
      "A worked example that reads the chain top to bottom",
      "The serf at the bottom",
    ] },
  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will explain why feudalism grew up after Charlemagne's empire split, define lord, vassal, fief, knight and serf, and say what each level of the order gave and received."
      ]},
      { h: "Key Vocabulary", vocab: true },
      { h: "Added From the Record", p: [
        "The book describes the feudal order but not the ceremony of the oath. The lesson adds one sentence on homage and fealty from the historical record.",
        "The village, Lord Hugh, Sir Aldric and Wat the serf are invented for the story and the worked example, and the text says so."
      ]},
      { h: "Where This Goes Next", p: [
        "U3-L2 looks at lords, vassals and the oath in more detail, and U3-L3 takes the student onto the manor where the serf lived and worked."
      ]}
    ]
  },

  parts: [
    { title: "Smoke on the River", s: [
      "Imagine a village in western Francia in the 880s, where one morning the people on the riverbank see long, low ships sliding up the water with a dragon carved on the front of each.",
      "The king is two hundred miles away, there's no army in the village, and the nearest stone wall belongs to a nobleman half a day's walk off.",
      "By evening the monastery is burning, and everyone who lived through it learns the same thing: nobody is coming from far away to save you.",
      "So when no king can protect you, who does, and what does it cost?"
    ]},

    { title: "After Charlemagne", s: [
      "You know how it came to this: Charlemagne's empire had held together through one strong man, and after he died his grandsons split it in three at the treaty of 843.",
      "The kings who were left were too weak to defend their coasts, and Vikings, Magyars and Muslim raiders arrived at the same time from three directions.",
      "Trade had shrunk and the cities were small, so wealth was no longer coins in a city but land, with farms, forests and streams that could feed an army.",
      "People needed protection and the powerful men needed soldiers, so they made a deal, and that deal, spread over a continent, is what historians call feudalism."
    ]},

    { title: "Land for Service", s: [
      "{{Feudalism}} was a system in which land was given in return for loyalty and service, and it began as an agreement between two kinds of nobles.",
      "A lord was a powerful noble who owned a great deal of land, more than he could ever defend or farm by himself.",
      "He gave a piece of it, called a {{fief}}, to a lesser noble, who became his {{vassal}}, which means a man who is bound to serve a lord in return for land.",
      "Many vassals were knights, warriors who fought on horseback, and others hired knights of their own to defend the lord and his property."
    ]},

    { title: "The Promise", s: [
      "What made the agreement binding was an oath, and in the records a vassal kneels, places his hands between his lord's hands and swears to be loyal.",
      "A promise like that was serious in a world where almost nobody could write, because a man's word was the only contract there was.",
      "The deal ran both ways: the vassal owed his lord service in his army and his court, along with taxes, and the lord owed the vassal land and protection.",
      "Notice that the oath wasn't between a rich man and a poor one, since it was between two nobles who both had something the other needed."
    ]},

    { title: "The Pyramid", s: [
      "Stack all those agreements and you get a pyramid, with the king at the top as the ruler of a large area.",
      "Below him came the church officials and the great nobles, who owned land, power and wealth, and below them the knights, who gave military service in exchange for a piece of land.",
      "At the bottom, carrying the weight of the rest, were the peasants known as {{serfs}}, who lived and worked on a lord's or vassal's land.",
      "Remember that the pyramid isn't a map of who was rich, because a vassal could be a lord to someone below him, with each level owing something to the one above."
    ]},

    { title: "Who Owes Whom What", s: [
      "Now follow the chain from top to bottom in an invented village, and watch what goes down and what comes back up.",
      "",
      "[walk] Reading the chain in the village: the king, Lord Hugh, Sir Aldric and Wat the serf.",
      "[step] The king gives Lord Hugh a large piece of land and his protection, and in return Hugh owes him soldiers and loyalty. || KING  --land, protection-->  LORD HUGH\nKING  <--soldiers, loyalty--  LORD HUGH",
      "[step] Lord Hugh can't farm all that himself, so he gives a fief to Sir Aldric, a knight, who swears the oath and becomes his vassal. || LORD HUGH  --fief-->  SIR ALDRIC\nSIR ALDRIC kneels and swears the oath",
      "[step] Sir Aldric owes Hugh his sword, a number of days of service each year, and a share in taxes, and Hugh owes him protection. || SIR ALDRIC  --service, taxes-->  LORD HUGH\nLORD HUGH  --protection-->  SIR ALDRIC",
      "[step] On Aldric's fief live the serfs, such as Wat, who farm the land, give most of the crops to their lord and are not free to leave. || WAT  --work, crops-->  SIR ALDRIC",
      "[step] In return Aldric gives Wat shelter and protection, which is the whole of Wat's side of the deal. || SIR ALDRIC  --shelter, protection-->  WAT",
      "[step] Read the chain upward and everyone owes someone above him, and the one at the very bottom owes the most and holds the least power. || serf: most work, least power",
      "",
      "Notice that the knight stands in the middle, owing his lord and being owed by the serf, which is how the whole pyramid held together."
    ]},

    { title: "The Bottom of the Pyramid", s: [
      "The serf's life wasn't the same as a slave's, since a serf couldn't be sold apart from the land, but he couldn't leave it either, because he was bound to the soil.",
      "If a new lord took over the land, the serf stayed, and in a sense he went with the property.",
      "Serfs worked the land every day except Sundays and holy days, handed over much of what they grew, and in return got a roof and the lord's protection.",
      "You'll see where all that work happened in a few lessons, on a village estate called the manor, and why a serf almost never left it."
    ]},

    { title: "Who Protects Whom?", s: [
      "Go back to the village on the river and the question of who does the protecting, and what it costs.",
      "The answer is the lord, and the cost is service and loyalty, and in the feudal order everyone paid it to someone above him.",
      "",
      "[verse] Colossians 4:1 says, “Masters, give unto your servants that which is just and equal; knowing that ye also have a Master in heaven.”",
      "",
      "Paul wrote that to Christians in a world of masters and servants, and it holds the powerful to a standard, since even the man at the top of any chain answers to someone higher.",
      "Whether the lords of the Middle Ages kept to it is one of the questions the next lessons will ask."
    ]}
  ],

  words: [
    ["Feudalism", "A system in which land was given in return for loyalty and service.", 8],
    ["Fief", "A piece of land a lord gave to a vassal in return for service.", 10],
    ["Vassal", "A noble who served a lord, in his army and court, in return for a fief.", 10],
    ["Serf", "A peasant who lived and worked on a lord's land and was not free to leave it.", 18]
  ],

  findsAt: 38,
  questions: [
    { tag: "The Question", q: "Why couldn't a king protect a village in the 880s?", find: [5],
      hint: "Read After Charlemagne.",
      choices: [
        "Kings didn't care about villages.",
        "Charlemagne's empire had split, the kings were weak, and raiders came from three directions.",
        "There were no villages yet.",
        "The villages were all walled."
      ], right: 1 },

    { tag: "Why", q: "Why did land become the main form of wealth?", find: [6],
      hint: "Read After Charlemagne.",
      choices: [
        "Trade had shrunk and the cities were small, so wealth was in farms and forests.",
        "Everyone moved to cities.",
        "Gold was found.",
        "Kings gave land away for free."
      ], right: 0 },

    { tag: "The Words", q: "What was a fief?", find: [10],
      hint: "Read Land for Service.",
      choices: [
        "A knight's sword.",
        "A piece of land a lord gave to a vassal.",
        "A serf's hut.",
        "A kind of oath."
      ], right: 1 },

    { tag: "The Words", q: "What is a vassal?", find: [10],
      hint: "Read Land for Service.",
      choices: [
        "A noble bound to serve a lord in return for land.",
        "A peasant who farms.",
        "A king's son.",
        "A priest."
      ], right: 0 },

    { tag: "The Oath", q: "What did a vassal owe his lord?", find: [14],
      hint: "Read The Promise.",
      choices: [
        "Nothing.",
        "Service in his army and court, and taxes.",
        "A gift of land.",
        "Free labor on the farm."
      ], right: 1 },

    { tag: "The Oath", q: "What did the lord owe in return?", find: [14],
      hint: "Read The Promise.",
      choices: [
        "Land and protection",
        "A sword only",
        "His crown",
        "Nothing, because he was in charge"
      ], right: 0 },

    { tag: "The Pyramid", q: "Who made up the second level of the pyramid, just below the king?", find: [17],
      hint: "Read The Pyramid.",
      choices: [
        "Serfs.",
        "Church officials and the great nobles.",
        "Knights.",
        "Merchants."
      ], right: 1 },

    { tag: "Who Owes", q: "In the village chain, what does Sir Aldric owe Lord Hugh?", find: [24],
      hint: "Read Who Owes Whom What.",
      choices: [
        "A fief",
        "His sword, days of service and a share of taxes",
        "Shelter and protection",
        "Crops from the field"
      ], right: 1 },

    { tag: "The Bottom", q: "Which group held the least power in the feudal order, and what did it get in return for its work?", find: [31],
      hint: "Read The Bottom of the Pyramid.",
      choices: [
        "Knights, who got a fief.",
        "Serfs, who got a roof and the lord's protection.",
        "Lords, who got service.",
        "Kings, who got taxes."
      ], right: 1 }
  ],

  vocabQuestions: [
    { q: "What was <i>feudalism</i>?",
      choices: ["A system in which land was given in return for loyalty and service", "A kind of church", "A kind of weapon", "A city government"], right: 0 },
    { q: "What was a <i>fief</i>?",
      choices: ["A castle wall", "A promise", "A piece of land given by a lord to a vassal", "A tax"], right: 2 },
    { q: "Who was a <i>vassal</i>?",
      choices: ["A noble who served a lord in return for land", "A king", "A slave", "A monk"], right: 0 },
    { q: "Who was a <i>serf</i>?",
      choices: ["A knight on horseback", "A peasant who lived and worked on a lord's land and could not leave it", "A bishop", "A merchant"], right: 1 }
  ],

  todo: { title: "What To Do Now", s: [
      "A village on a riverbank with dragon ships coming up the water is where this lesson began, and the questions ask who protected the people and what it cost.",
      "{c} word cards sit at the top of the page, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "None of them asks for a date, so read for who owed whom what.",
      "If the chain gets tangled, read Who Owes Whom What again and say each line out loud, from the king down to Wat.",
      "Last, open the Homework Sheet with the button at the bottom of the page, and either fill it out right on the screen or print it and do it on paper."
  ] }
};
