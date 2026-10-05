/* history/contact-and-conflict
   Grade 7 · history · unit 2. Its home is this folder.
   Built by tools/build-lessons.js. Edit the lesson here, not in the registry.

   🚨 THE PROSE IS A DRAFT, NOT PAUL'S VOICE. Written 2026-10-05 on Sonnet from the
   Leif outline (U2 L6: Conflict and Contact Across the Mediterranean) and McDougal
   Littell World History: Medieval and Early Modern Times Ch4 Lesson 3, "Muslim
   Rule in Spain", via the week 6-7 packet (paraphrased notes). Given THE PASS and
   stamped.

   🚨 THIS LESSON STOPS BEFORE THE CRUSADES. They are Unit 4, Lesson 3. The last
   section ends on the Byzantine emperor's call for help in 1095 and points
   forward, and nothing after that call is told here.

   ⚠️ ADDED FROM THE RECORD, worth a glance from Paul. The packet notes that the
   book covers the conflict lightly in these pages, so the setup is mostly from the
   record:
   · The crossing into Spain in 711 under Tariq ibn Ziyad, and the Battle of Tours
     in 732, where Charles Martel turned back an army from al-Andalus.
   · The Christian kingdoms of the north holding their ground and beginning the
     long reconquest of the peninsula.
   · The Seljuk Turks taking Jerusalem and pressing on Constantinople, and the
     Byzantine emperor's appeal to the West in 1095. The packet gave 1071 for
     Jerusalem; the record puts the capture in the early 1070s (about 1073, with
     1071 the Seljuk victory over the Byzantines at Manzikert), so the lesson says
     "in the 1070s".
   The book's own parts are Abd al-Rahman's escape in 750 and his rule from 756, Abd
   al-Rahman III and his caliphate of 929, Cordoba's workshops and farms, the
   scholars (al-Zahrawi, 936-1013), the welcome Jews found (Samuel ha-Nagid,
   Maimonides, Ladino), and the passing back of Greek and Roman learning.

   ⚠️ TONE. Muslims, Christians and Jews are each described as they were, with no
   side taken and nobody made a villain. The lesson shows trade and conflict going
   on together, which is the true shape of the period.

   🚨 THE VERSE IS A WORKING CHOICE, NOT PAUL'S. Romans 12:18. */
'use strict';
module.exports = {
  id: "history/contact-and-conflict",
  slug: "contact-and-conflict",
  title: "Contact and Conflict Across the Mediterranean",
  unit: "World History &middot; U2-L6",
  seq: { unit: 2, unitTitle: "The East Endures, and Islam Rises", n: 6 },
  natural: "2026-10-05",
  eyebrow: "World History",
  dek: "In Spain a prince who escaped a massacre built the biggest city in Western Europe, and Jews, Christians and Muslims shared its books. Meanwhile, the two sides were also fighting along every border.",
  plan: {
    objective: "Explain how Muslim rule in Spain (al-Andalus) brought cultures into contact, and how growing conflict between Christian and Muslim powers set the stage for the Crusades.",
    markers: [
      "McDougal Ch4 Lesson 3 (paraphrased): in 750 only Abd al-Rahman escaped the Abbasid massacre of the Umayyads, fled to Iberia, united the factions with treaties and battles, and in 756 became emir of al-Andalus with Cordoba as his capital.",
      "McDougal (paraphrased): Abd al-Rahman III took power in 912 amid revolts and Christian attacks from the north, used paid soldiers called mercenaries, and in 929 declared himself caliph of Cordoba.",
      "McDougal (paraphrased): Cordoba's workshops made silk, leather, carpets, paper, weapons and crystal glass, and farmers used water wheels to grow rice, figs and cherries.",
      "McDougal (paraphrased): the golden age of the 1000s and 1100s brought advances in math, astronomy, geography, medicine and philosophy, and Jews were welcomed, with Maimonides born in Cordoba in 1135.",
      "McDougal (paraphrased), Why It Matters Now: Europeans regained Greek and Roman knowledge through Muslim scholars, and al-Andalus was a meeting place of cultures.",
    ],
    method: "One open question, 'What happens when neighbors trade with each other and fight each other at the same time?', held through the story of Spain and answered at the end by both halves being true. The conflict, from Spain's northern border to the Seljuk Turks in the east, is the setup, and the lesson ends on the call for help that opens the next unit.",
    exampleOnly: [
      "A Cordoba merchant and a soldier on the same road. WORLD: the Mediterranean, roughly 711 to 1095. The title and objective don't name it.",
    ],
    digitize: "The existing reading engine. Questions ask how Muslim rule reached Spain, what Cordoba was like, who lived and learned there, and what conflict was building.",
    unclear: "",
  },
  shelf: { grades: [7], subject: "History",
    blurb: "A prince escapes a massacre and builds a city in Spain where Jews, Christians and Muslims share their books, while the same neighbors fight along every border. The setup for the Crusades.",
    contains: [
      "A story-form reading, read aloud with the words highlighted",
      "How Muslim rule reached Spain, and what stopped it at Tours",
      "Cordoba's workshops, farms and scholars",
      "Where Greek and Roman learning came back to Europe",
      "The conflict that set the stage for the Crusades",
    ] },
  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will explain how Muslim rule in Spain brought cultures into contact, describe what Cordoba was like, and explain how growing conflict between Christian and Muslim powers set the stage for the Crusades."
      ]},
      { h: "Key Vocabulary", vocab: true },
      { h: "Handle This Evenly", p: [
        "Trade and conflict went on together, and the lesson says so without making either side a villain. The book covers the conflict only lightly in these pages, so the setup (711, 732, the Christian kingdoms of the north and the Seljuk Turks) is added from the historical record.",
        "The lesson stops before the Crusades, which are Unit 4, Lesson 3. It ends on the Byzantine emperor's call for help in 1095."
      ]},
      { h: "Where This Goes Next", p: [
        "U2-L7 turns to Western Europe in the early Middle Ages, where monasteries kept learning alive while the cities emptied."
      ]}
    ]
  },

  parts: [
    { title: "A Merchant and a Soldier", s: [
      "Picture a road in Spain around the year 950, with a merchant from Cordoba leading a donkey loaded with paper and silk and a Christian soldier from the northern hills riding the other way.",
      "They've traded before, since the merchant's paper is the best the soldier has ever seen, but only a year ago the soldier's village was raided by the merchant's army.",
      "Both of them see nothing odd in that, because this was how the border worked, and it kept working that way for centuries.",
      "So what happens when neighbors trade with each other and fight each other at the same time?"
    ]},

    { title: "How Muslim Rule Reached Spain", s: [
      "In 711 an army of Muslims from North Africa, led by a general named Tariq ibn Ziyad, crossed the narrow water into the Iberian Peninsula, which is the land where Spain and Portugal are today.",
      "Within a few years most of the peninsula was under Muslim rule, and the Muslims called their new land al-Andalus.",
      "The advance went north into France until 732, when a Frankish leader named Charles Martel met an army from al-Andalus near the city of Tours and turned it back.",
      "After that, the line between the two worlds settled in northern Spain, where small Christian kingdoms held on in the hills and slowly began a long reconquest that would take centuries."
    ]},

    { title: "The Prince Who Got Away", s: [
      "In 750 the Abbasid family took the caliphate from the Umayyads, and its men hunted down the Umayyad family in a massacre, and only one young prince, Abd al-Rahman, escaped.",
      "He fled across North Africa and into Spain, where the Muslim leaders were quarreling, and he spent years uniting the factions with treaties and with battles.",
      "In 756 he became the emir of al-Andalus, a title that means governor or commander, and he made Cordoba his capital, and he ruled until he died in 788.",
      "One survivor with no army and nowhere to go had built a kingdom, and it would outlast the family that tried to wipe him out."
    ]},

    { title: "A Caliph in Cordoba", s: [
      "In 912 a descendant, Abd al-Rahman III, came to power when the land was torn by revolts and Christian attacks from the north.",
      "He hired paid soldiers called mercenaries, put down the rebels and held the north back, and in 929 he did something bold: he declared himself caliph, claiming a title the Abbasids in Baghdad and the Fatimids in Cairo each said was theirs alone.",
      "Cordoba's workshops made silk, leather, carpets, paper, weapons and crystal glass, and farmers watered their fields with water wheels and grew rice, figs and cherries.",
      "It was a prosperous capital and the one place a Cordoba merchant on that road would be happy to call home."
    ]},

    { title: "A Meeting Place of Cultures", s: [
      "In the 1000s and 1100s al-Andalus became a center of learning, with scholars advancing math, astronomy, geography, medicine and philosophy, and a doctor named al-Zahrawi, who lived from 936 to 1013, wrote a famous medical work that included his own surgical tools.",
      "Jews were welcomed there, and a community grew up whose descendants are called Sephardic, with their own language, Ladino, and scholars such as Samuel ha-Nagid, who served as a leading official, and the philosopher Maimonides, who was born in Cordoba in 1135.",
      "Muslim scholars also preserved and studied Greek and Roman writings, and through Spain Europeans got those old books back.",
      "That's why the book calls al-Andalus a meeting place of cultures, though it wasn't a peaceful paradise, since Maimonides himself was driven out of Cordoba in the end by a harsher Muslim dynasty, the Almohads, and al-Andalus split into rival factions afterward."
    ]},

    { title: "Neighbors Who Fought", s: [
      "At the very same time, the Christian kingdoms of the north kept pushing southward, and the border zones saw raids and counterraids and the occasional alliance between a Christian king and a Muslim ruler against someone else.",
      "Far to the east, the story was getting darker for the Byzantines, because the Seljuk Turks, a people from Central Asia who had become Muslims, took Jerusalem in the 1070s and pressed against the lands around Constantinople.",
      "The emperor there, who had been watching his territory shrink for years, did what the weak do when a stronger power looms, and he looked for help.",
      "In 1095 he sent a message to the Christian rulers of the West asking them for soldiers, and that call is where the next unit begins."
    ]},

    { title: "Both Were True", s: [
      "Go back to the merchant and the soldier on that Spanish road, where the answer to the question turns out to be that both things are true.",
      "",
      "[verse] Romans 12:18 says, “If it be possible, as much as lieth in you, live peaceably with all men.”",
      "",
      "Paul wrote that to Christians in Rome, and it doesn't describe what the neighbors of this lesson did, since they traded and learned from each other and fought too, but it's a fair measure of how often they managed to live up to it.",
      "Neighbors who need each other's goods and books keep finding reasons to talk, and neighbors with a border keep finding reasons to fight, and the next unit shows what came of one call for help."
    ]}
  ],

  words: [
    ["Al-Andalus", "The Muslim-ruled part of the Iberian Peninsula, with Cordoba as its capital.", 5],
    ["Cordoba", "The capital of al-Andalus, a rich city of workshops, farms and scholars.", 10],
    ["Mercenary", "A soldier who fights for pay.", 13],
    ["Emir", "A governor or commander in the Muslim world.", 10]
  ],

  findsAt: 28,
  questions: [
    { tag: "The Setup", q: "What does the opening road scene show about the border?",
      find: [2],
      hint: "Read A Merchant and a Soldier.",
      choices: [
        "Neighbors on it traded and fought at the same time.",
        "It was always peaceful.",
        "Nobody ever crossed it.",
        "It was patrolled by the Mongols."
      ], right: 0 },

    { tag: "711", q: "Who crossed into the Iberian Peninsula in 711?",
      find: [4],
      hint: "Read How Muslim Rule Reached Spain.",
      choices: [
        "A Frankish army from France.",
        "The Byzantine navy.",
        "An army of Muslims from North Africa, led by Tariq ibn Ziyad.",
        "The Mongols."
      ], right: 2 },

    { tag: "Tours", q: "What happened near Tours in 732?",
      find: [6],
      hint: "Read How Muslim Rule Reached Spain.",
      choices: [
        "The Franks lost the city.",
        "A Frankish leader, Charles Martel, turned back an army from al-Andalus.",
        "Muhammad was born.",
        "Cordoba was founded."
      ], right: 1 },

    { tag: "The Prince", q: "Why was Abd al-Rahman's escape important?",
      find: [11],
      hint: "Read The Prince Who Got Away.",
      choices: [
        "He started the Abbasid family.",
        "He built a kingdom in Spain that outlasted the family that hunted him.",
        "He captured Baghdad.",
        "He ended the golden age."
      ], right: 1 },

    { tag: "929", q: "What bold thing did Abd al-Rahman III do in 929?",
      find: [13],
      hint: "Read A Caliph in Cordoba.",
      choices: [
        "He gave up his throne.",
        "He moved the capital to Baghdad.",
        "He closed the workshops.",
        "He declared himself caliph, a title two other rulers claimed."
      ], right: 3 },

    { tag: "Cordoba", q: "What did Cordoba's workshops make?",
      find: [14],
      hint: "Read A Caliph in Cordoba.",
      choices: [
        "Silk, leather, carpets, paper, weapons and crystal glass.",
        "Only swords.",
        "Only paper.",
        "Nothing, since it was a farming town."
      ], right: 0 },

    { tag: "Meeting Place", q: "Why does the book call al-Andalus a meeting place of cultures?",
      find: [19],
      hint: "Read A Meeting Place of Cultures.",
      choices: [
        "Because nobody there ever disagreed.",
        "Because only Muslims lived there.",
        "Because Jews, Christians and Muslims lived, studied and traded there, and Greek and Roman learning passed through it to Europe.",
        "Because it had no borders."
      ], right: 2 },

    { tag: "The Border", q: "What was happening along the border while Cordoba prospered?",
      find: [20],
      hint: "Read Neighbors Who Fought.",
      choices: [
        "Nothing.",
        "The Christian kingdoms of the north kept pushing south in a long reconquest.",
        "The two sides had signed a permanent peace.",
        "The Mongols had arrived."
      ], right: 1 },

    { tag: "The Call", q: "What did the Byzantine emperor do in 1095?",
      find: [23],
      hint: "Read Neighbors Who Fought.",
      choices: [
        "He sent his army to Spain.",
        "He asked the rulers of the West for soldiers.",
        "He declared himself caliph.",
        "He moved to Baghdad."
      ], right: 1 }
  ],

  vocabQuestions: [
    { q: "What was <i>al-Andalus</i>?",
      choices: ["The Muslim-ruled part of the Iberian Peninsula.", "A Frankish kingdom.", "A city in China.", "The Byzantine capital."], right: 0 },
    { q: "What was <i>Cordoba</i>?",
      choices: ["A Frankish leader.", "A kind of silk.", "The capital of al-Andalus, a rich city of workshops, farms and scholars.", "A battle in 732."], right: 2 },
    { q: "What is a <i>mercenary</i>?",
      choices: ["A governor.", "A kind of caliph.", "A scholar.", "A soldier who fights for pay."], right: 3 },
    { q: "What is an <i>emir</i>?",
      choices: ["A kind of paper.", "A governor or commander in the Muslim world.", "A Jewish scholar.", "A Frankish king."], right: 1 }
  ],

  todo: { title: "What To Do Now", s: [
      "A merchant and a soldier shared a road and a border, and the questions ask what that meant.",
      "{c} word cards sit at the top of the page, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "None of them asks for a date, so read for what each side did and why.",
      "If the border question trips you up, read Neighbors Who Fought again.",
      "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] }
};
