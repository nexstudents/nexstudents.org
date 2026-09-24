/* history/paul-and-the-early-church
   Grade 7 · history · unit 1. Its home is this folder.
   Built by tools/build-lessons.js. Edit the lesson here, not in the registry.

   🚨 THE PROSE IS A DRAFT, NOT PAUL'S VOICE. Written 2026-09-24 on Opus from the
   Leif outline (U1 L8: Paul, Persecution, and the Early Church), McDougal Littell
   World History: Ancient Civilizations (the Rome and Christianity chapter, read on
   the borrowed copy: Paul and the Gentiles, the Epistles, Nero's fire in AD 64, the
   catacombs, Constantine in 312), and the Book of Acts. Given THE PASS and stamped.

   ⚠️ THE UNIT TIE: Paul's Roman citizenship ("But I was free born") is the payoff of
   U1-L2 and U1-L5, and the roads he walked are U1-L3's.

   🚨 THE VERSE IS A WORKING CHOICE, NOT PAUL'S. Galatians 3:28. */
'use strict';
module.exports = {
  id: "history/paul-and-the-early-church",
  slug: "paul-and-the-early-church",
  title: "Paul, Persecution, and a Church That Spread",
  unit: "World History &middot; U1-L8",
  seq: { unit: 1, unitTitle: "Rome, and the Church That Outlived It", n: 8 },
  natural: "2026-09-24",
  eyebrow: "World History",
  dek: "The man who hunted Christians became their greatest missionary, and Rome's own roads carried the church to the city that tried to crush it.",
  plan: {
    objective: "Explain how Christianity spread across the Roman Empire through Paul's journeys and letters, why Rome persecuted Christians, and how the persecution ended with Constantine.",
    markers: [
      "Leif U1 L8: Paul, Persecution, and the Early Church.",
      "McDougal: 'Paul argued that conversion to Judaism was unnecessary. Paul's idea helped separate Christianity from Judaism.'",
      "McDougal: 'Nero blamed the Christians for a fire that leveled much of Rome in A.D. 64.'",
      "McDougal: Constantine's vision in 312 and the end of the persecutions.",
    ],
    method: "One open question, 'How does a small, hunted group take over the empire hunting it?', answered a layer at a time: the persecutor who turned, the roads, the letters, the fire, the catacombs, and the emperor who changed sides.",
    exampleOnly: [
      "Saul on the Damascus road, the roads and ships, Nero's fire, the catacombs, Constantine's battle. WORLD: the Roman Empire from Jerusalem to Rome.",
    ],
    digitize: "The existing reading engine. Questions ask what an event shows.",
    unclear: "",
  },
  shelf: { grades: [7], subject: "History", thumb: true,
    blurb: "A persecutor on the Damascus road, letters carried along Roman roads, a fire in Rome, and an emperor who changed sides.",
    contains: [
      "A story-form reading, read aloud with the words highlighted",
      "Paul's conversion, journeys and letters",
      "Nero's fire and the persecutions",
      "Constantine, and the end of the persecutions in 313",
    ] },
  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will explain how Paul spread Christianity to Gentiles across the empire, how Roman roads and the Pax Romana helped, why Rome persecuted Christians, and how Constantine ended the persecutions."
      ]},
      { h: "Key Vocabulary", vocab: true },
      { h: "Do Not Soften This", p: [
        "Nero's persecution was cruel, and Christians were killed for sport. The lesson says so plainly, because the church's growth under that pressure is the whole point."
      ]},
      { h: "Where This Goes Next", p: [
        "U1-L9 follows the empire itself into crisis, the split into East and West, and the fall of the West, while the church Constantine protected outlasts it."
      ]}
    ]
  },

  parts: [
    { title: "The Man Hunting Christians", s: [
      "A few years after the first church formed in Jerusalem, a young Pharisee named Saul was dragging Christians out of their homes and throwing them into prison.",
      "He was so sure they were dangerous that he got letters from the high priest to go all the way to Damascus and arrest the ones there too.",
      "On that road, Acts records, a light from heaven knocked him to the ground and a voice asked him why he was persecuting Jesus, and he got up blind.",
      "Three days later he could see again and was baptized, and the man hunting Christians became Paul, the church's greatest missionary, which raises the question this lesson answers: how does a small, hunted group take over the empire that's hunting it?"
    ]},

    { title: "Roads, Ships and a Common Language", s: [
      "Paul traveled for more than twenty years, by foot and by ship, across what is now Turkey, Greece and Italy, starting churches in city after city.",
      "Rome made that possible without meaning to, because the Pax Romana, the long Roman peace, kept the roads and sea lanes safe, and the roads from U1-L3 ran almost everywhere.",
      "Almost everyone in the eastern empire also spoke Greek, so Paul could preach in one language from Jerusalem to Rome.",
      "The empire built the roads for its legions, and the church walked down them."
    ]},

    { title: "Not Only for Jews", s: [
      "The first Christians were Jews, and a hard argument broke out over whether a Gentile, anyone who wasn't Jewish, had to become Jewish first before becoming a Christian.",
      "Paul argued that they didn't, because faith in Jesus was open to everyone, and that decision separated Christianity from Judaism and opened it to the whole empire.",
      "",
      "[verse] Galatians 3:28 says, “There is neither Jew nor Greek, there is neither bond nor free, there is neither male nor female: for ye are all one in Christ Jesus.”",
      "",
      "In a Roman world that ranked every person by birth and freedom, which you saw street by street in U1-L5, a faith that put a slave and his owner at the same table was something new."
    ]},

    { title: "Letters Along the Roads", s: [
      "Paul couldn't stay in every city, so he kept in touch by writing letters, called epistles, to the churches he had started, and messengers carried them along the Roman roads.",
      "His letters explained what Christians believed and how they should live, and many of them are now books of the New Testament, from Romans to Philemon.",
      "When he was arrested in Jerusalem he used the one thing Rome respected, his Roman citizenship, and appealed to Caesar, so Rome itself shipped him to the capital, where he kept writing from house arrest."
    ]},

    { title: "The Fire", s: [
      "In AD 64 a great fire burned for days and destroyed much of Rome, and rumors spread that the emperor Nero had started it himself.",
      "Nero needed someone to blame, and he chose the Christians, a small, strange group who refused to worship the Roman gods or the emperor.",
      "Christians were arrested and killed in terrible ways for the crowd's entertainment, and early tradition says Peter and Paul were both executed in Rome in those years.",
      "For the next two and a half centuries, persecution came and went, and Christians in Rome sometimes buried their dead and met in the catacombs, underground cemeteries outside the city walls."
    ]},

    { title: "An Emperor Changes Sides", s: [
      "Persecution didn't stop the church; the harder Rome pushed, the more people seemed to join, many of them slaves, women and the poor who had never mattered much to Rome.",
      "In AD 312 a general named Constantine was fighting for control of Rome, and before the battle he said he saw a sign of the cross and heard that he would conquer by it.",
      "He won, and in 313 he made it legal to be a Christian anywhere in the empire, and before he died he was baptized himself.",
      "The empire that had crucified Jesus and burned his followers now had a Christian emperor."
    ]},

    { title: "How the Hunted Won", s: [
      "Go back to the question: how does a small, hunted group take over the empire hunting it?",
      "Not with an army, because the church never had one, but with a persecutor who turned, roads Rome had built, letters carried hand to hand, and people who kept believing when believing could get them killed.",
      "In less than three hundred years it went from a room in Jerusalem to the emperor's own faith, and the empire, as the next lesson shows, was running out of time."
    ]}
  ],

  words: [
    ["Missionary", "Someone who travels to spread a faith to new people.", 3],
    ["Gentile", "Anyone who is not Jewish.", 8],
    ["Epistle", "A letter, especially one of the letters in the New Testament.", 12],
    ["Persecution", "Cruel treatment of people because of what they believe.", 19]
  ],

  findsAt: 26,
  questions: [
    { tag: "Paul", q: "What does Saul's story show about how the church grew?",
      find: [3], hint: "Read The Man Hunting Christians.",
      choices: [
        "That even its fiercest enemy could become its greatest missionary.",
        "That Rome supported the church from the start.",
        "That Saul was always a Christian.",
        "That Damascus was a Christian city."
      ], right: 0 },
    { tag: "The Roads", q: "How did Rome help the church spread without meaning to?",
      find: [5, 6], hint: "Read Roads, Ships and a Common Language.",
      choices: [
        "By sending Christian soldiers.",
        "By keeping roads and seas safe and sharing one language across the East.",
        "By paying missionaries.",
        "By building churches."
      ], right: 1 },
    { tag: "Gentiles", q: "What did Paul argue about Gentiles, and why did it matter?",
      find: [9], hint: "Read Not Only for Jews.",
      choices: [
        "That they could not become Christians.",
        "That they had to become Jewish first.",
        "That they could become Christians without becoming Jewish first, which opened the faith to the whole empire.",
        "That they should fight Rome."
      ], right: 2 },
    { tag: "Letters", q: "How did Paul use his Roman citizenship?",
      find: [14], hint: "Read Letters Along the Roads.",
      choices: [
        "To escape to Spain.",
        "To become a senator.",
        "To avoid paying taxes.",
        "He appealed to Caesar, so Rome itself carried him to the capital."
      ], right: 3 },
    { tag: "Persecution", q: "Why did Nero blame the Christians for the fire?",
      find: [16], hint: "Read The Fire.",
      choices: [
        "He needed someone to blame, and they refused to worship Rome's gods or the emperor.",
        "They had admitted starting it.",
        "They were Roman soldiers.",
        "They lived near the fire."
      ], right: 0 },
    { tag: "Constantine", q: "What changed for Christians in 313?",
      find: [21], hint: "Read An Emperor Changes Sides.",
      choices: [
        "They were banned from Rome.",
        "It became legal to be a Christian anywhere in the empire.",
        "They were forced into the catacombs.",
        "Nero returned to power."
      ], right: 1 }
  ],

  vocabQuestions: [
    { q: "What is a <i>missionary</i>?",
      choices: ["A Roman governor.", "Someone who travels to spread a faith.", "A soldier.", "A tax collector."], right: 1 },
    { q: "Who is a <i>Gentile</i>?",
      choices: ["Anyone who is not Jewish.", "A Roman citizen.", "A priest.", "An apostle."], right: 0 },
    { q: "What is an <i>epistle</i>?",
      choices: ["A Roman road.", "A kind of coin.", "A church building.", "A letter, like Paul's letters in the New Testament."], right: 3 }
  ],

  todo: { title: "What To Do Now", s: [
      "A hunted group with no army won over the empire hunting it, and the questions ask how.",
      "{c} word cards sit at the top of the page, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "Read each question for what an event shows, since none of them asks you for a date.",
      "If the Gentile question trips you up, read Not Only for Jews again.",
      "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] }
};
