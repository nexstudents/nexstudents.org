/* history/conquest-and-city-life
   Grade 7 · history · unit 1. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   ✅ THE PROSE IN `parts` IS PAUL'S, REBUILT FROM HIS DOC 2026-09-14.
   Source: docs.google.com/document/d/1DoArw3GRjrgEkFxCciYgfGXJAGYfmwj3tU2qmbuQ2Qs
   A REWRITE, not an edit. What his version does that mine did not:
     - 🚨 ITS QUESTION IS THE MORNING AFTER. "Winning a war could give Rome new
       land. The harder question came the next morning: how do you govern the
       people you just conquered?" The whole lesson is one answer to that, and it
       is asked again at the end so the student can see how far the answer came.
     - 🚨 THE NEW TESTAMENT IS THE EVIDENCE, NOT A DECORATION. Jesus before
       Pilate shows local authority with a Roman ceiling over it. Paul saying
       "But I was free born" shows citizenship stopping a scourging. Paul
       appealing to Caesar shows the appeal procedure reaching from a province
       to Rome. Three passages, three different parts of the same system, and
       each one is quoted in full.
     - THE SOCIAL WAR IS THE TURNING POINT, and Paul's framing is the sharp one:
       Rome did not simply defeat its allies, ROME CHANGED WHO COULD BELONG TO
       ROME.
     - 🚨 IT REFUSES TO MAKE ROME NICE. His teacher notes say so outright, and
       the prose carries it: officials could be corrupt, armies could be brutal,
       taxes could be hated. Do not soften those lines.
   ⚠️ NO PROSE OF MINE IN THIS ONE. All four word cards were already findable in
   his story, so nothing needed adding.
   ⚠️ NO BAKED VOICE ON THIS LESSON (only republic-to-empire and roman-government
   have a voice.json), so the rewrite costs no audio.
   → [[feedback-tweak-pauls-lesson-structure]] */
'use strict';
module.exports = {
  id: "history/conquest-and-city-life",
  slug: "conquest-and-city-life",
  title: "Conquest, Provinces, and City Life",
  unit: "World History &middot; U1-L4",

  plan: {
    objective: "Explain how Rome moved from conquering territory to governing it, through provinces, governors, local authorities, Roman law and citizenship.",
    markers: [
      "The Social War, 91-87 BC, is the turning point: allies fighting partly over exclusion from citizenship, and Rome answering by extending it.",
      "John 18:31 - local law exists, and stops short of execution.",
      "Acts 22:25-29 - citizenship halts a scourging, and the commander becomes afraid.",
      "Acts 25:10-12 - a citizen appeals to Caesar, and the governor has to send him.",
    ],
    method: "🚨 ONE QUESTION, ASKED AT THE START AND AGAIN AT THE END. How do you govern the people you just conquered? Everything between the two askings is the answer accumulating: provinces, governors, layered local authority, citizenship, cities. The New Testament passages are the PROOF STEP - the student watches the finished system operate on two real people. Paul's teaching question is the one to keep asking out loud: who has authority here?",
    exampleOnly: [
      "The morning after a battle, a town with its own leaders under a governor, Jesus before Pilate, Paul in Jerusalem and Caesarea, a walk through a forum - WORLD: the Roman province, seen from inside.",
      "🚨 THE HARSH LINES ARE DELIBERATE AND MUST NOT BE SOFTENED. Corrupt officials, brutal armies, hated taxes. Paul's teacher notes say not to present Roman government as peaceful or fair to everyone.",
    ],
    digitize: "The existing reading engine. Questions ask what an episode DEMONSTRATES about authority, never for a name or a date. NO NEW MECHANIC NEEDED.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "History",
    thumb: true,
    blurb: "Rome wins the battle. The next morning everyone who lived there wakes up in the same house. Now what?",
    contains: [
      "The Social War, where Rome's own allies turned on it over citizenship",
      "Jesus before Pilate, and where local authority stopped",
      "Paul saying four words that made a Roman commander afraid",
      "A walk through a forum, and why a Jew from Tarsus was also a Roman",
    ] },
  eyebrow: ["World History", "U1-L4", "Ancient Rome"],
  dek: "You can conquer land with an army. Governing the people who live on it takes much more.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will explain how Rome moved from conquering territory to governing it through provinces, governors, local authorities, Roman law, and citizenship.",
        "Students will also see these systems operating in the New Testament through the trials of Jesus and Paul."
      ]},
      { h: "Key Concepts", p: [
        "Military victory could take territory, but soldiers alone could not govern it forever. Rome organized conquered territories, used governors and local authorities, collected taxes, maintained order, and gradually extended Roman citizenship.",
        "The Social War, 91 to 87 BC, is an important turning point because many of Rome's Italian allies fought partly over their exclusion from Roman citizenship. Rome responded during the war by extending citizenship much more broadly throughout Italy.",
        "By the first century AD, the Roman legal system was firmly established. The New Testament gives students real examples of people living under that system."
      ]},
      { h: "Where Students Get Stuck", p: [
        "🚨 Do not present Roman government as peaceful or fair to everyone. Rome could be harsh, taxation could be burdensome, governors could abuse their authority, and rebellion could be violently suppressed.",
        "The important idea is that Rome learned that conquering people and governing people were two different problems."
      ]},
      { h: "Teaching Suggestion", p: [
        "Keep asking: who has authority here? Use that question when discussing a governor, a local government, Jesus before Pilate, and Paul invoking his Roman citizenship."
      ]},
      { h: "Biblical Connection", p: [
        "The New Testament gives us an unusual opportunity to watch Roman government and law operating in people's actual lives.",
        "Pay special attention to John 18:31, Acts 22:25 to 29, and Acts 25:10 to 12."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    {
      title: "You Won. Now What?",
      s: [
        "Winning a war could hand Rome new land, and that was the easy half of it; the hard question always arrived the next morning.",
        "",
        "[ex] How do you govern the people you just conquered?",
        "",
        "Imagine the battle is over, the enemy has surrendered, and Roman soldiers are holding another city.",
        "For the moment, Rome has won.",
        "But tomorrow morning the people who lived there before the fighting will wake up in the same houses, and the farmers will walk out to the same fields while the merchants open the same shops.",
        "Families will go on speaking their own language and keeping their own customs.",
        "Nobody became a Roman in his heart because a Roman army won a battle, and that army cannot stand on every street corner forever.",
        "",
        "[ex] How do you turn military victory into lasting government?",
        "",
        "Rome would spend centuries working on that one, and the answer turned out to involve a great deal more than swords."
      ]
    },
    {
      title: "From Conquest to Government",
      s: [
        "As Rome pushed out beyond Italy, the conquered territories were organized into provinces, a province being a territory outside Italy placed under Roman administration.",
        "Each one needed somebody on the ground to stand for Roman authority, so Rome sent officials out to govern them.",
        "A Roman governor administered a province, and he might be handling taxation, day to day administration, legal disputes and soldiers all in the same week.",
        "",
        "Roman rule did not mean everything local suddenly vanished, though, and different provinces were run in very different ways.",
        "Local officials and institutions carried on, people kept speaking their own languages and practicing their own customs and religions, and Rome stepped in when it believed its authority or public order was under threat.",
        "That left layers of authority stacked on one another: a town with its own leaders, a region with a Roman governor, and above both of them the authority of Rome itself.",
        "Rome had begun doing something an army on its own can never do.",
        "It was building a government."
      ]
    },
    {
      title: "But Who Was Actually Roman?",
      s: [
        "Which created a problem of its own.",
        "As Rome grew, more and more people fought beside Roman soldiers, traded in Roman cities, paid Roman taxes and lived under Roman influence, and none of that gave them the same legal standing.",
        "For generations the communities of Italy had been tied to Rome by one kind of alliance or another, and Rome leaned on those Italian allies hard: they supplied the soldiers, they fought Rome's wars, and their men died beside Roman citizens.",
        "Plenty of them still did not hold full Roman citizenship.",
        "",
        "Imagine how that feels from the inside.",
        "You fight for Rome, your family sends men to Rome's armies, and Rome grows stronger partly on what your community hands over; then the political and legal rights get handed out, and you are still standing outside.",
        "Eventually that tension explodes."
      ]
    },
    {
      title: "When Rome's Allies Turn Against Rome",
      s: [
        "In 91 BC war breaks out between Rome and a great many of its own Italian allies, and it is called the Social War.",
        "The name sounds strange now, but it comes from the Latin socii, meaning allies.",
        "These were not foreign invaders turning up at the gates; most of them had fought alongside Rome for generations, and now they were fighting against it.",
        "",
        "One of the biggest issues was Roman citizenship, and Rome was suddenly in real danger, because the communities supplying the soldiers behind Roman expansion could now become its enemies.",
        "Rome could try to beat all of them by force, and it did try.",
        "But it also started doing something else, and opened the door to citizenship far wider than it had ever been.",
        "During the fighting, Roman laws offered citizenship to large numbers of Italians, including communities that stayed loyal or laid down their arms, and by the end of the war citizenship had spread dramatically across Italy.",
        "",
        "Think about what had just happened.",
        "Rome had not simply beaten another enemy; Rome had changed who was allowed to belong to Rome."
      ]
    },
    {
      title: "Citizenship Became Valuable",
      s: [
        "Roman citizenship was a great deal more than being able to say you were Roman, because it was legal membership in the Roman state and it carried real rights and protections.",
        "Citizens held protections and privileges under Roman law that non-citizens simply did not have in the same way, and over the centuries that citizenship spread far beyond the original city.",
        "It gave Rome another way of tying people into its system.",
        "",
        "Military power could make a man obey Rome today; citizenship could give him a reason to care what happened to Rome tomorrow.",
        "None of which means everybody loved Roman rule.",
        "They didn't.",
        "Rome still faced rebellions, its officials could be corrupt, its armies could be brutal, and its taxes were widely hated.",
        "But Rome was learning that lasting government takes more than fear, and that people can also be held together by law, rights, government, trade and citizenship."
      ]
    },
    {
      title: "It Is Not Lawful for Us",
      s: [
        "Around the early first century AD, Jesus is arrested in Judea, and the Jewish leaders bring Him before the Roman governor, Pontius Pilate.",
        "Why involve a Roman governor at all?",
        "Because Judea was under Roman rule, and although the local leaders still held real authority inside their own community, Roman authority stood over theirs.",
        "That tension turns up directly in John 18:31.",
        "",
        "[verse] \"Then said Pilate unto them, Take ye him, and judge him according to your law.",
        "[verse] The Jews therefore said unto him, It is not lawful for us to put any man to death:\"",
        "[verse] John 18:31",
        "",
        "Read that exchange again, because it tells you how Roman government actually worked on the ground.",
        "Local law still existed and local leaders still had authority, but that authority ran out somewhere, and when the case reached the level of execution the Roman governor became the man who mattered.",
        "The province was not lawless; it had layers, and Rome intended to stay on top of them."
      ]
    },
    {
      title: "But I Was Free Born",
      s: [
        "Now move forward several years, to a Christian missionary named Paul who has been arrested in Jerusalem, with Roman soldiers already preparing to examine him by scourging.",
        "Then Paul asks a question.",
        "",
        "[verse] \"Is it lawful for you to scourge a man that is a Roman, and uncondemned?\"",
        "[verse] Acts 22:25",
        "",
        "Everything changes.",
        "The officer reports what Paul has said, and the Roman commander comes in person to find out whether it is true.",
        "",
        "[verse] \"Then the chief captain came, and said unto him, Tell me, art thou a Roman?",
        "[verse] He said, Yea.",
        "[verse] And the chief captain answered, With a great sum obtained I this freedom.",
        "[verse] And Paul said, But I was free born.\"",
        "[verse] Acts 22:27-28",
        "",
        "Stop there for a moment.",
        "Paul was born in Tarsus, hundreds of miles from the city of Rome, and he was born a Roman citizen; the commander standing over him had to buy his, at a great price.",
        "The commander understands immediately what he has just been told, so the men preparing to examine Paul back away from him.",
        "The commander himself is afraid, once he works out that he has bound a Roman citizen.",
        "One sentence had changed what powerful men were willing to do."
      ]
    },
    {
      title: "Paul Appeals to Caesar",
      s: [
        "Paul's citizenship matters again later, when he is imprisoned at Caesarea and his case comes before the Roman governor Festus.",
        "Paul does not believe he should simply be handed over to his enemies, so he invokes another right that belongs to him as a citizen.",
        "",
        "[verse] \"I stand at Caesar's judgment seat, where I ought to be judged: to the Jews have I done no wrong, as thou very well knowest.",
        "[verse] For if I be an offender, or have committed any thing worthy of death, I refuse not to die: but if there be none of these things whereof these accuse me, no man may deliver me unto them.",
        "[verse] I appeal unto Caesar.\"",
        "[verse] Acts 25:10-11",
        "",
        "Festus responds.",
        "",
        "[verse] \"Hast thou appealed unto Caesar? unto Caesar shalt thou go.\"",
        "[verse] Acts 25:12",
        "",
        "Think about how far this has traveled.",
        "Rome once had to work out how a single city could govern people hundreds of miles away; now a citizen born far from Rome can stand in front of a provincial governor, invoke Roman law, and appeal his case to the highest authority there is.",
        "That legal system will eventually carry Paul the whole way to Rome."
      ]
    },
    {
      title: "Walk Through a Roman City",
      s: [
        "Government and citizenship were not the only ways people met Rome, because you could see Rome standing around you.",
        "Walk toward the middle of a Roman city and you would find a forum, the public center where government, law, commerce and everything else public happened at once.",
        "People did business there, officials carried out public duties, legal matters were heard, and everybody met, argued, bought, sold and traded the news.",
        "Elsewhere there were public baths full of conversation, water arriving through an aqueduct, and roads running out to every other town, so that the architecture and the trade and the public spaces made Roman influence something you could stand inside.",
        "",
        "That did not make every Roman city identical, though.",
        "A man living in Judea did not stop being Jewish because Rome governed the province, and a Greek speaker did not stop speaking Greek.",
        "Local identity stayed exactly where it was, and Rome laid another layer over the top of it.",
        "",
        "So a person could belong to a local city, a people, a language and the Roman world all at once, and Paul is the obvious example.",
        "He was a Jew, he came from Tarsus, he lived and argued inside the Greek-speaking world, and he was a Roman citizen.",
        "All of those were true of him on the same day."
      ]
    },
    {
      title: "What Really Held Rome Together?",
      s: [
        "Go back to the first question, with Rome standing over a city it has just taken.",
        "",
        "[ex] Now what?",
        "",
        "An army can take a city, but an army cannot stand in every house, settle every argument, collect every tax, run every market and govern every town forever.",
        "Rome needed something that would still be standing after the soldiers marched away, so it built systems instead.",
        "Provinces extended Roman government and governors carried Roman authority, while local governments went on handling the ordinary business of everyday life.",
        "Roads tied distant places together, cities became centers of administration and trade, and citizenship pulled steadily more people inside Roman law.",
        "",
        "None of that made Rome peaceful, and none of it made Rome fair.",
        "But together they explain how one city grew into a political system governing millions of people across enormous distances.",
        "",
        "[ex] You can conquer land with an army.",
        "[ex] Governing the people who live on it takes much more.",
        "",
        "And centuries after Rome began learning that, a man from Tarsus stood in front of Roman officials and told them he was a Roman citizen.",
        "Behind those few words stood centuries of conquest, government, law and citizenship; because they carried that weight, Paul's story changed."
      ]
    }
  ],

  words: [
    ["Province", "A territory outside Italy placed under Roman administration.", 9],
    ["Citizenship", "Legal membership in the Roman state that carried important rights and protections.", 33],
    ["Forum", "A public center of Roman city life where government, law, commerce, and other public activities took place.", 80],
    ["Governor", "A Roman official responsible for administering a province.", 11]
  ],

  findsAt: 101,
  questions: [
    { tag: "The Morning After", q: "After Rome conquered a territory, what new problem did it face?",
      find: [1, 4],
      hint: "The lesson asks it in its very first lines, before anything else happens.",
      choices: [
        "How to govern the people and territory after the battle.",
        "How to return every soldier to farming.",
        "How to destroy every local city.",
        "How to prevent anyone from speaking another language."
      ], right: 0 },

    { tag: "Provinces", q: "What was a Roman province?",
      find: [9, 11],
      hint: "From Conquest to Government defines it in one line.",
      choices: [
        "An independent kingdom with no connection to Rome.",
        "A territory outside Italy placed under Roman administration.",
        "A unit of the Roman army.",
        "A neighborhood inside the city of Rome."
      ], right: 1 },

    { tag: "The Social War", q: "Why did many of Rome's Italian allies become angry before the Social War?",
      find: [20, 22],
      hint: "They were doing the fighting and still standing outside something.",
      choices: [
        "Rome refused to build roads.",
        "They had helped fight Rome's wars but many still lacked full Roman citizenship.",
        "Rome forced all of them to move to the city.",
        "They wanted Hannibal to become emperor."
      ], right: 1 },

    { tag: "The Social War", q: "What happened to Roman citizenship during and after the Social War?",
      find: [30, 32],
      hint: "Rome did two things at once: it fought, and it opened a door.",
      choices: [
        "Rome abolished citizenship.",
        "Citizenship became limited to soldiers.",
        "Citizenship was extended much more widely among the peoples of Italy.",
        "Only governors could become citizens."
      ], right: 2 },

    { tag: "Jesus Before Pilate", q: "What does the trial of Jesus before Pontius Pilate help demonstrate?",
      find: [49, 50],
      hint: "Ask the question the lesson keeps asking: who has authority here?",
      choices: [
        "Local authorities could exist under Rome while Roman authority still placed limits over them.",
        "Judea was completely independent from Rome.",
        "Pilate had no governmental authority.",
        "Rome had abolished Jewish law."
      ], right: 0 },

    { tag: "Paul in Jerusalem", q: "Why did Paul's statement that he was a Roman citizen matter in Acts 22?",
      find: [64, 66],
      hint: "Watch what the soldiers do next, and what the commander feels.",
      choices: [
        "It automatically made him a governor.",
        "His citizenship gave him legal protections the Roman officers had to consider.",
        "It allowed him to command Roman soldiers.",
        "It made him exempt from every Roman law."
      ], right: 1 },

    { tag: "Appeal to Caesar", q: "What does Paul's appeal to Caesar show?",
      find: [77, 78],
      hint: "Festus had no choice about what happened next, and that is the point.",
      choices: [
        "Roman citizens could never be arrested.",
        "Roman law included procedures through which a citizen could appeal his case.",
        "Every Roman citizen personally knew Caesar.",
        "Provincial governors had no authority."
      ], right: 1 },

    { tag: "The Big Idea", q: "Which statement best summarizes the lesson?",
      find: [97, 98],
      hint: "The last section answers the question the first section asked.",
      choices: [
        "Rome governed its empire entirely through military force.",
        "Rome stopped using armies once it created provinces.",
        "Rome learned that conquering territory required armies, but governing it required law, administration, local cooperation, and systems such as citizenship.",
        "Everyone conquered by Rome immediately wanted to become Roman."
      ], right: 2 }
  ],

  vocabQuestions: [
    { q: "What was a <i>province</i>?",
      choices: [
        "A territory outside Italy placed under Roman administration.",
        "A unit of Roman soldiers.",
        "A citizenship document.",
        "The center of a Roman city."
      ], right: 0 },
    { q: "What was <i>citizenship</i>?",
      choices: [
        "Command of a Roman legion.",
        "Legal membership in the Roman state with important rights and protections.",
        "Ownership of a Roman road.",
        "Election as governor."
      ], right: 1 },
    { q: "What was a <i>forum</i>?",
      choices: [
        "A military camp outside a city.",
        "A private home belonging to the governor.",
        "A public center for government, law, commerce, and other activities.",
        "A road connecting two provinces."
      ], right: 2 },
    { q: "What was a <i>governor</i>?",
      choices: [
        "An official responsible for administering a Roman province.",
        "The commander of every Roman army.",
        "A merchant who collected taxes.",
        "A citizen elected by every province."
      ], right: 0 }
  ],

  todo: { title: "What To Do Now", s: [
      "Rome won the battle in the first line of that reading; everything after it was the harder problem of the next morning.",
      "{c} word cards sit at the top of the page, then {Q} questions, then {v} more questions about those words. {T} questions in all.",
      "While you answer them, keep asking the question the lesson keeps asking: who has authority here?",
      "Ask it about a governor, about a town's own leaders, about Pilate, and about the commander holding Paul.",
      "If a question is hard, use the bar or the arrows to go back to the passage it came from and read the verse again.",
      "The one worth slowing down on is why a short sentence from Paul changed what those soldiers were willing to do.",
      "He did not become powerful.",
      "He named a legal standing that the men holding him had to respect.",
      "Last, the word cards at the top and the check at the bottom of the page."
  ] }
};
