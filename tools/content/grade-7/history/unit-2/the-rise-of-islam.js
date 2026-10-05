/* history/the-rise-of-islam
   Grade 7 · history · unit 2. Its home is this folder.
   Built by tools/build-lessons.js. Edit the lesson here, not in the registry.

   🚨 THE PROSE IS A DRAFT, NOT PAUL'S VOICE. Written 2026-10-05 on Sonnet from the
   Leif outline (U2 L4: The Rise of Islam) and McDougal Littell World History:
   Medieval and Early Modern Times Ch3 Lessons 1 and 2 ("Life on the Arabian
   Peninsula" and "Islam and Muhammad"), via the week 6-7 packet (paraphrased
   notes). Given THE PASS and stamped.

   🚨 TONE, AND IT IS THE POINT OF THE REVIEW. What Muslims believe is reported
   AS what Muslims believe ("Muslims believe..."), accurately and respectfully,
   with no endorsement and no mockery. Where Islam's teaching differs from
   Christianity on who Jesus is, it is stated once, plainly and neutrally, in the
   Abraham and Jesus paragraph. Please read that paragraph and the last one
   before shipping.

   ⚠️ ADDED FROM THE RECORD, worth a glance: the name of Muhammad's wife
   Khadijah (the book says only a wealthy businesswoman, which is her),
   and the note that Allah is the Arabic word for God. The book's own numbers are kept: about 570, 40, 610
   (the vision), 622 (Hijrah), 630 (return with 10,000), 632 (death).

   ⚠️ THE FIVE PILLARS ARE LISTED IN THE BOOK'S ORDER (faith, prayer, alms,
   fasting in Ramadan, pilgrimage), and the "non-Muslims were tolerated, with
   limits and extra taxes" line is the book's, stated once and left plain.

   🚨 THE VERSE IS A WORKING CHOICE, NOT PAUL'S. Genesis 17:20, the promise about
   Ishmael, because Muslims and Jews and Christians all name Abraham as a
   forefather and the lesson draws no further link than that. */
'use strict';
module.exports = {
  id: "history/the-rise-of-islam",
  slug: "the-rise-of-islam",
  title: "The Rise of Islam",
  unit: "World History &middot; U2-L4",
  seq: { unit: 2, unitTitle: "The East Endures, and Islam Rises", n: 4 },
  natural: "2026-10-05",
  eyebrow: "World History",
  dek: "A desert, a trading town and a merchant who said he'd heard a message. How a faith that began in a corner of Arabia came to be followed by well over a billion people.",
  plan: {
    objective: "Describe the Arabian Peninsula Islam began in, the life of Muhammad, and the core beliefs and practices of Islam (the Qur'an, the Sunnah and the Five Pillars).",
    markers: [
      "McDougal Ch3 Lesson 1 (paraphrased): a huge desert, the nomadic Bedouin who followed water and rain, oases where people settled, clans that served as government, and Mecca as a trade and religious center with the Ka'aba.",
      "McDougal Ch3 Lesson 2 (paraphrased): Muhammad was born about 570 in Mecca, believed at about 40 that God spoke to him through the angel Gabriel, moved to Medina in 622 (the Hijrah), returned to Mecca in 630 and died in 632.",
      "McDougal (paraphrased): the Qur'an is the revelations written down in Arabic, the Sunnah is Muhammad's words and deeds as a guide, and the Five Pillars are faith, prayer five times a day, alms, fasting in Ramadan and a pilgrimage to Mecca.",
      "McDougal (paraphrased): Muslims share Abraham as a prophet with Jews and Christians, and see Jesus as a prophet.",
    ],
    method: "One open question, 'How did a trading town in the desert become the center of a faith that spread across three continents?', held through the desert, the town and the man, and left for the next lesson to finish.",
    exampleOnly: [
      "The Bedouin, the oasis, the clan and the Ka'aba. WORLD: the Arabian Peninsula before and during Muhammad's life.",
    ],
    digitize: "The existing reading engine. Questions ask what each place and person was, and what Muslims believe and do.",
    unclear: "",
  },
  shelf: { grades: [7], subject: "History",
    blurb: "A huge desert, a town on the trade routes with a famous stone building, and a merchant who said he'd heard a message. Where Islam began, and what Muslims believe.",
    contains: [
      "A story-form reading, read aloud with the words highlighted",
      "The desert, the oasis and the clan, and why Mecca mattered",
      "The life of Muhammad, from 570 to 632",
      "What Muslims believe: the Qur'an, the Sunnah and the Five Pillars",
    ] },
  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will describe the Arabian Peninsula before Islam, tell the main events of Muhammad's life, and explain the core beliefs and practices of Islam, as Muslims themselves state them."
      ]},
      { h: "Key Vocabulary", vocab: true },
      { h: "Handle This With Care", p: [
        "The lesson reports what Muslims believe as their belief, in their own terms, without endorsing it or mocking it. Where the two faiths differ on who Jesus is, the lesson says so once, plainly, and leaves it there.",
        "It's a good place to talk with the student about why we learn what other people believe, and how to say so truthfully and kindly."
      ]},
      { h: "Where This Goes Next", p: [
        "U2-L5 follows what grew from this beginning: the Abbasid caliphate, Baghdad and the Islamic golden age."
      ]}
    ]
  },

  parts: [
    { title: "A Desert With a Crossroads", s: [
      "Picture a herd of camels crossing a sea of sand in the early 600s, with a few families walking behind it, because the herders are looking for the rain.",
      "They live in one of the harshest places on earth, where one desert alone covers about 250,000 square miles, and yet some of the most important roads of the ancient world pass right beside it.",
      "Within about a hundred years, the faith that grew out of this land would be followed from Spain to the edge of India.",
      "How did a trading town in the desert become the center of a faith that spread across three continents?"
    ]},

    { title: "Life in the Sand", s: [
      "The people who herded animals across the desert, moving wherever the water and the rain were, were the Bedouin, who are nomads, people with no fixed home.",
      "Here and there the desert had an oasis, a place where water came to the surface, and people settled around it to grow food and trade it to the herders for animals.",
      "There was no king over all of Arabia, and no government in the usual sense, so a person's safety came from the clan, a group of families related by blood or marriage.",
      "Clans protected their own, and when one clan raided another, the clan was the only thing between you and trouble."
    ]},

    { title: "Mecca, a Town on the Roads", s: [
      "The Arabian Peninsula sits where Asia, Africa and Europe meet, so caravans of traders crossed it carrying goods, and by the early 600s a handful of trading cities had grown up along their routes.",
      "The most important of them was Mecca, which was both a trade center and a religious one.",
      "At its heart stood the Ka'aba, a building that many Arabs treated as holy, and pilgrims traveled to Mecca every year to worship there, a trip that also brought business.",
      "Most people in Arabia then worshiped many gods, but Jews and Christians lived in the region too, so the idea of one God was already known."
    ]},

    { title: "A Merchant Who Heard a Message", s: [
      "A boy named Muhammad was born into a Meccan family around the year 570, and he lost his parents young, so he was raised by relatives.",
      "As a young man he worked in the caravan trade, earned a reputation for honesty, and at about 25 married Khadijah, a wealthy businesswoman.",
      "Muslims believe that when he was about 40, in around 610, God spoke to him through the angel Gabriel, and that he was told to preach that there is only one God.",
      "That God, called Allah in Arabic, is the one Muslims worship, and the word Islam means peace through submitting to God's will, and a person who does so is a Muslim."
    ]},

    { title: "The Move to Medina", s: [
      "Not everyone in Mecca welcomed his preaching, because many of them made their living from the pilgrims and the old gods, and Muhammad's followers were persecuted.",
      "In 622 he and his followers left for a city to the north called Yathrib, a journey known as the Hijrah, and the city came to be called Medina, “the city of the Prophet.”",
      "In 630, eight years later, he came back to Mecca at the head of an army of 10,000, and the city surrendered.",
      "By the time he died in 632 he was a political and military leader as well as a preacher, and much of Arabia had come together under him."
    ]},

    { title: "What Muslims Believe and Do", s: [
      "Muslims honor the Qur'an, the revelations that Muhammad received, which were memorized and after his death written down in Arabic, and they also look to the Sunnah, the record of his words and deeds, as a guide for daily life.",
      "Five practices, called the Five Pillars, shape a Muslim's life: the statement of faith that there is no god but Allah and Muhammad is his prophet, prayer five times a day facing Mecca, giving to the poor, fasting during the month of Ramadan, and a pilgrimage to Mecca once in a lifetime for those who are able.",
      "Muslims worship together in a mosque, and Islamic law grew out of the Qur'an and the Sunnah and covered matters from inheritance to crime.",
      "Islam shares a good deal with Judaism and Christianity, since Muslims honor Abraham as a prophet, and they honor Jesus as a prophet too, but they don't believe he's the Son of God, which is the point where the two faiths differ most."
    ]},

    { title: "The Question Left Open", s: [
      "Go back to the caravan crossing the desert and the question of how a trading town became the center of a faith.",
      "Part of the answer is geography, because Mecca sat on the roads that carried people and ideas, and part is a man whose message gave scattered clans something to share.",
      "",
      "[verse] Genesis 17:20 records God saying of Abraham's son Ishmael, “I have blessed him, and will make him fruitful, and will multiply him exceedingly; twelve princes shall he beget, and I will make him a great nation.”",
      "",
      "Muslims, Jews and Christians all name Abraham as a forefather, and many Arabs trace their ancestry back through Ishmael, but what turned the nation into a faith that crossed three continents is the story the next lesson tells."
    ]}
  ],

  words: [
    ["Nomad", "A person who moves from place to place instead of living in one spot, like the Bedouin.", 4],
    ["Oasis", "A place in a desert where water comes to the surface and people can settle.", 5],
    ["Islam", "The religion Muslims follow, whose name means peace through submitting to God's will.", 15],
    ["Muslim", "A person who follows Islam.", 15],
    ["Hijrah", "Muhammad's move from Mecca to Medina in 622.", 17]
  ],

  findsAt: 28,
  questions: [
    { tag: "The Desert", q: "Who were the Bedouin?",
      find: [4],
      hint: "Read Life in the Sand.",
      choices: [
        "A group of merchants who lived only in cities.",
        "Nomads who moved with their herds to find water and rain.",
        "The rulers of all of Arabia.",
        "Pilgrims who visited Mecca."
      ], right: 1 },

    { tag: "The Clan", q: "Where did a person in the desert get safety and protection?",
      find: [6, 7],
      hint: "Read Life in the Sand.",
      choices: [
        "From a king of all Arabia.",
        "From the Roman army.",
        "From the clan.",
        "From the pilgrims."
      ], right: 2 },

    { tag: "Mecca", q: "Why was Mecca important before Islam?",
      find: [8, 9, 10],
      hint: "Read Mecca, a Town on the Roads.",
      choices: [
        "It had the only oasis in Arabia.",
        "It was a trade center and a place of pilgrimage with the Ka'aba.",
        "It was the capital of a Roman province.",
        "It was where the Byzantine emperor lived."
      ], right: 1 },

    { tag: "Muhammad", q: "What do Muslims believe happened to Muhammad at about age 40?",
      find: [14],
      hint: "Read A Merchant Who Heard a Message.",
      choices: [
        "He became the ruler of Mecca.",
        "He moved to Medina.",
        "He wrote the Qur'an himself in one sitting.",
        "God spoke to him through the angel Gabriel."
      ], right: 3 },

    { tag: "Hijrah", q: "What was the Hijrah?",
      find: [17],
      hint: "Read The Move to Medina.",
      choices: [
        "Muhammad's move from Mecca to Medina in 622.",
        "A pilgrimage to Mecca.",
        "A month of fasting.",
        "A battle outside Mecca."
      ], right: 0 },

    { tag: "Muhammad", q: "What had happened by the time Muhammad died in 632?",
      find: [19],
      hint: "He had also become a political and military leader.",
      choices: [
        "Mecca had been destroyed.",
        "Islam had been banned in Arabia.",
        "Much of Arabia had come together under him.",
        "Arabia had been conquered by Rome."
      ], right: 2 },

    { tag: "The Texts", q: "What's the Sunnah?",
      find: [20],
      hint: "Read What Muslims Believe and Do.",
      choices: [
        "The revelations written in Arabic.",
        "The record of Muhammad's words and deeds, used as a guide.",
        "The month of fasting.",
        "A building for prayer."
      ], right: 1 },

    { tag: "Practices", q: "Which of these is one of the Five Pillars?",
      find: [21],
      hint: "Read What Muslims Believe and Do.",
      choices: [
        "Prayer five times a day, facing Mecca.",
        "Building a church.",
        "Paying taxes to an emperor.",
        "Fighting in a war."
      ], right: 0 },

    { tag: "Common Ground", q: "What do Muslims believe about Jesus?",
      find: [23],
      hint: "Read the end of What Muslims Believe and Do.",
      choices: [
        "That he's a prophet, but not the Son of God.",
        "That he never lived.",
        "That he's the founder of Islam.",
        "That he's the Son of God."
      ], right: 0 }
  ],

  vocabQuestions: [
    { q: "What is a <i>nomad</i>?",
      choices: ["A person who builds cities.", "A person who moves from place to place instead of living in one spot.", "A leader of a clan.", "A trader of spices."], right: 1 },
    { q: "What is an <i>oasis</i>?",
      choices: ["A holy building.", "A desert caravan.", "A kind of tent.", "A place in a desert where water comes to the surface."], right: 3 },
    { q: "What does the word <i>Islam</i> mean?",
      choices: ["A holy city.", "Peace through submitting to God's will.", "The followers of Muhammad.", "A pilgrimage."], right: 1 },
    { q: "What is a <i>Muslim</i>?",
      choices: ["A person who follows Islam.", "A kind of trader.", "A building for prayer.", "A leader of a clan."], right: 0 },
    { q: "What was the <i>Hijrah</i>?",
      choices: ["A month of fasting.", "A holy book.", "Muhammad's move from Mecca to Medina in 622.", "A kind of tax."], right: 2 }
  ],

  todo: { title: "What To Do Now", s: [
      "A trading town in a desert, a merchant and a message are where one of the world's great faiths begins, and the questions ask what each part was.",
      "{c} word cards sit at the top of the page, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "None of them asks for a date, so read for what each place and person was, and for what Muslims believe and do.",
      "If the practices questions trip you up, read What Muslims Believe and Do again.",
      "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] }
};
