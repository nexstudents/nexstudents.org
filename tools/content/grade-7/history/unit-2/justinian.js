/* history/justinian
   Grade 7 · history · unit 2. Its home is this folder.
   Built by tools/build-lessons.js. Edit the lesson here, not in the registry.

   🚨 THE PROSE IS A DRAFT, NOT PAUL'S VOICE. Written 2026-09-24 on Opus from the
   Leif outline (U2 L2: Justinian and Roman Law) and McDougal Littell World History:
   Medieval and Early Modern Times Ch2 §3 pp58-60, read on the borrowed copy
   (Justinian 527-565, the Justinian Code serving the empire for 900 years, Theodora
   and the rebellion of 532, Hagia Sophia). Given THE PASS and stamped.

   ⚠️ ADDED FROM THE RECORD, worth a glance: the 532 revolt is the Nika riot, begun
   by the Blues and Greens at the Hippodrome (U2-L1's tie); Hagia Sophia was built
   after the riot burned the older church; Louisiana's law descends from the civil
   law tradition that Justinian's Code started.

   🚨 THE VERSE IS A WORKING CHOICE, NOT PAUL'S. Deuteronomy 16:20. */
'use strict';
module.exports = {
  id: "history/justinian",
  slug: "justinian",
  title: "Justinian and the Law We Still Use",
  unit: "World History &middot; U2-L2",
  seq: { unit: 2, unitTitle: "The East Endures, and Islam Rises", n: 2 },
  natural: "2026-09-24",
  eyebrow: "World History",
  dek: "An emperor nearly ran from a riot, his wife talked him out of it, and the law books he ordered are still behind courtrooms today.",
  plan: {
    objective: "Explain Justinian's main accomplishments (the reconquests, the Justinian Code and Hagia Sophia), Theodora's role, and why his law code still matters.",
    markers: [
      "Leif U2 L2: Justinian and Roman Law.",
      "McDougal: 'He is best remembered for the legal code developed during his rule. The Justinian Code regulated much of Byzantine life and served the Byzantine Empire for 900 years.'",
      "McDougal History Makers: Theodora 'convinced her husband and advisers to put down a rebellion instead of fleeing the palace.'",
      "McDougal: 'What were some of Justinian's main accomplishments?'",
    ],
    method: "One open question, 'What does an emperor who died fifteen hundred years ago have to do with a courtroom today?', held open through the riot, the reconquests and the church, and answered by the Code.",
    exampleOnly: [
      "the Nika riot, Theodora, Belisarius, Hagia Sophia, a Louisiana courtroom. WORLD: Justinian's reign, with one step into the present at the end.",
    ],
    digitize: "The existing reading engine. Questions ask what each event shows.",
    unclear: "",
  },
  shelf: { grades: [7], subject: "History",
    blurb: "A riot at the chariot races, an empress who refused to run, and a law code that still shapes courtrooms fifteen hundred years later.",
    contains: [
      "A story-form reading, read aloud with the words highlighted",
      "The Nika riot and Theodora's choice",
      "Justinian's wars to win back the West",
      "The Justinian Code, and where it still shows up",
    ] },
  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will describe Justinian's main accomplishments, Theodora's part in saving his reign, and why the Justinian Code mattered for 900 years in the East and still matters in law today."
      ]},
      { h: "Key Vocabulary", vocab: true },
      { h: "Do Not Soften This", p: [
        "The riot was put down by soldiers trapping the crowd in the Hippodrome, and tens of thousands died. McDougal says so, and the lesson does too. Theodora's courage and that cost belong together."
      ]},
      { h: "Where This Goes Next", p: [
        "U2-L3 follows the church Justinian's empire protected, and the split between East and West in 1054."
      ]}
    ]
  },

  parts: [
    { title: "An Emperor About to Run", s: [
      "In January of 532, the crowds at the Hippodrome in Constantinople turned on their own emperor, Justinian.",
      "The rival racing fans, the Blues and the Greens, who usually fought each other, joined forces, shouted Nika, meaning conquer, and set half the city on fire.",
      "The riot raged for days, and Justinian and his advisers got ships ready to flee.",
      "What stopped him, and what does a man who nearly ran from a riot have to do with courtrooms fifteen hundred years later?"
    ]},

    { title: "Theodora Refuses", s: [
      "Justinian's wife, the empress Theodora, had grown up poor, the daughter of a bear-keeper at the Hippodrome, and had worked as an actress, which Roman law had barred officials from marrying until Justinian had the law changed.",
      "At the meeting where the men planned their escape, she stood up and told them she would not run, and that a royal robe made a fine burial cloth.",
      "Her courage turned the room, and Justinian's general Belisarius trapped the rioters inside the Hippodrome, where tens of thousands of them were killed.",
      "It was a terrible end, and it saved Justinian's crown, which is why many historians say he owed his throne to her."
    ]},

    { title: "Winning Back the West", s: [
      "Justinian ruled from 527 to 565 and dreamed of putting the whole Roman Empire back together.",
      "His armies, led by Belisarius, took back North Africa, Italy and part of Spain from the Germanic kingdoms that had seized them after the fall of the West.",
      "The wars cost enormous amounts of money and lives, and within a few decades of his death most of Italy was lost again, but for a while the Mediterranean was nearly a Roman lake once more."
    ]},

    { title: "A Church Built From the Ashes", s: [
      "The Nika riot had burned down the city's great church, and Justinian rebuilt it on a scale nobody had seen before.",
      "Hagia Sophia, meaning Holy Wisdom, was finished in just about five years, crowned with an enormous dome that seemed to float over a floor flooded with light.",
      "For nearly a thousand years it was the largest church in the world, and it still stands in the same city today, now called Istanbul."
    ]},

    { title: "One Book of Laws", s: [
      "Justinian's most lasting work didn't need an army or a dome.",
      "Rome had piled up laws for a thousand years, many of them contradicting each other, so he had a team of legal scholars collect, sort and rewrite them into one clear code.",
      "The result, called the Justinian Code, set out rules for marriage, property, crimes, contracts and the rights of citizens, and it governed the Byzantine Empire for about nine hundred years.",
      "Centuries later, scholars in Western Europe rediscovered it, and much of European law today, along with the law of Louisiana, still follows the system his Code started."
    ]},

    { title: "Justice, Written Down", s: [
      "Go back to the emperor with his ships ready to sail, and the question of what he has to do with a courtroom today.",
      "He stayed because Theodora would not run, and because he stayed, he lived to order the Code that still sits behind the law in much of the world.",
      "",
      "[verse] Deuteronomy 16:20 says, “That which is altogether just shalt thou follow, that thou mayest live, and inherit the land which the LORD thy God giveth thee.”",
      "",
      "Moses gave Israel God's law as something to follow, not just to own, and Justinian's lawyers worked from the same conviction that justice should be written down, clear enough for anyone to know what it demands."
    ]}
  ],

  words: [
    ["Justinian Code", "The single clear book of Roman laws Justinian had his scholars create.", 16],
    ["Nika riot", "The 532 uprising at the Hippodrome that nearly drove Justinian from his throne.", 1],
    ["Empress", "A woman who rules, or the wife of an emperor, like Theodora.", 4]
  ],

  findsAt: 22,
  questions: [
    { tag: "The Riot", q: "How did the Nika riot start?",
      find: [1], hint: "Read An Emperor About to Run.",
      choices: [
        "An invading army attacked the city.",
        "Rival racing fans joined forces against the emperor at the Hippodrome.",
        "The church rebelled.",
        "The army refused to be paid."
      ], right: 1 },
    { tag: "Theodora", q: "What does Theodora's choice during the riot show?",
      find: [5, 6, 7], hint: "Read Theodora Refuses.",
      choices: [
        "That her courage saved Justinian's throne.",
        "That she wanted to leave the city.",
        "That she led the rioters.",
        "That she had no influence."
      ], right: 0 },
    { tag: "Do Not Soften", q: "How was the riot ended?",
      find: [6], hint: "Read Theodora Refuses.",
      choices: [
        "The rioters were paid to leave.",
        "The races were canceled forever.",
        "Belisarius trapped the rioters in the Hippodrome, and tens of thousands were killed.",
        "Justinian gave up his crown."
      ], right: 2 },
    { tag: "The West", q: "What was Justinian trying to do with his wars?",
      find: [8], hint: "Read Winning Back the West.",
      choices: [
        "Conquer Persia.",
        "Defend only Constantinople.",
        "Destroy the church.",
        "Put the whole Roman Empire back together."
      ], right: 3 },
    { tag: "The Code", q: "Why did Justinian order a new law code?",
      find: [15], hint: "Read One Book of Laws.",
      choices: [
        "Because Rome's laws had piled up for a thousand years and many contradicted each other.",
        "Because Rome had no laws.",
        "Because Theodora asked for it.",
        "Because the church demanded it."
      ], right: 0 },
    { tag: "The Code", q: "Where does Justinian's Code still show up today?",
      find: [17], hint: "Read the end of One Book of Laws.",
      choices: ["Only in Istanbul.", "In much of European law and the law of Louisiana.", "Nowhere at all.", "Only in church law."], right: 1 }
  ],

  vocabQuestions: [
    { q: "What was the <i>Justinian Code</i>?",
      choices: ["A secret message.", "One clear book of Roman laws.", "A church.", "A chariot team."], right: 1 },
    { q: "What was the <i>Nika riot</i>?",
      choices: ["A 532 uprising at the Hippodrome.", "A war in Italy.", "A church council.", "A trade agreement."], right: 0 },
    { q: "What is an <i>empress</i>?",
      choices: ["A general.", "A chariot racer.", "A law.", "A woman who rules, or the wife of an emperor."], right: 3 }
  ],

  todo: { title: "What To Do Now", s: [
      "An emperor with his ships ready to sail stayed because his wife refused to run, and the questions ask what came of it.",
      "{c} word cards sit at the top of the page, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "None of them asks for a date, so read for what each event shows.",
      "If the Code questions trip you up, read One Book of Laws again.",
      "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] }
};
