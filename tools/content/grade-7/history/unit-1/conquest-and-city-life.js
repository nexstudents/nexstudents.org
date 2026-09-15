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
    { title: "You Won. Now What?", s: [
      "Winning a war could give Rome new land.",
      "The harder question came the next morning.",
      "",
      "[ex] How do you govern the people you just conquered?",
      "",
      "Imagine the battle is over.",
      "The enemy has surrendered.",
      "Roman soldiers have taken another city.",
      "For the moment, Rome has won.",
      "",
      "But tomorrow morning the people who lived there before the battle will still wake up in their homes.",
      "Farmers will still work their fields.",
      "Merchants will still open their shops.",
      "Families will still speak their own language and follow their own customs.",
      "",
      "They did not suddenly become Romans in their hearts because a Roman army won a battle.",
      "And the Roman army cannot stand on every street corner forever.",
      "",
      "That creates a much harder question.",
      "",
      "[ex] How do you turn military victory into lasting government?",
      "",
      "Rome would spend centuries answering that question.",
      "And the answer would eventually involve much more than swords."
    ]},

    { title: "From Conquest to Government", s: [
      "As Rome expanded beyond Italy, many conquered territories were organized into provinces.",
      "A province is a territory outside Italy placed under Roman administration.",
      "",
      "A province needed someone to represent Roman authority.",
      "Rome therefore sent officials to govern its territories.",
      "A Roman governor is the official responsible for administering a province, and might oversee taxation, administration, legal disputes, and military matters.",
      "",
      "But Roman rule did not mean that everything local suddenly disappeared.",
      "Different provinces were governed in different ways.",
      "Local officials and institutions could continue operating.",
      "People continued speaking their own languages and practicing local customs and religions, although Rome could intervene when it believed its authority or public order was threatened.",
      "",
      "That created layers of authority.",
      "",
      "A town might have its own local leaders.",
      "A region might have a Roman governor.",
      "Above them stood the authority of Rome itself.",
      "",
      "Rome had begun doing something an army alone could never accomplish.",
      "It was building a system of government."
    ]},

    { title: "But Who Was Actually Roman?", s: [
      "That created another problem.",
      "",
      "As Rome expanded, more and more people fought beside Roman soldiers, traded with Roman cities, paid taxes, and lived under Roman influence.",
      "But that did not mean everyone had the same legal standing.",
      "",
      "For generations, communities throughout Italy had been tied to Rome through different kinds of alliances.",
      "Rome depended heavily upon these Italian allies.",
      "They supplied soldiers.",
      "They fought Rome's wars.",
      "Their men died beside Roman citizens.",
      "",
      "Yet many of these allies still did not possess full Roman citizenship.",
      "",
      "Imagine what that could mean.",
      "You fight for Rome.",
      "Your family supplies men for Rome's armies.",
      "Rome becomes stronger partly because of what your community provides.",
      "But when important political and legal rights are handed out, you are still standing outside.",
      "",
      "Eventually, that tension explodes."
    ]},

    { title: "When Rome's Allies Turn Against Rome", s: [
      "In 91 BC, war breaks out between Rome and many of its own Italian allies.",
      "It is called the Social War.",
      "",
      "The name can sound strange today.",
      "It comes from the Latin word socii, meaning allies.",
      "",
      "These were not simply foreign invaders attacking Rome.",
      "Many had fought alongside Rome for generations.",
      "Now some of them were fighting against Rome.",
      "",
      "One of the major issues was Roman citizenship.",
      "",
      "Rome suddenly faced a dangerous situation.",
      "The very communities that had helped provide the soldiers behind Roman expansion could now become its enemies.",
      "",
      "Rome could try to defeat all of them by force.",
      "But Rome also began doing something else.",
      "It opened the door to citizenship much more widely.",
      "",
      "During the conflict, Roman laws offered citizenship to large numbers of Italians, including communities that remained loyal or laid down their arms.",
      "By the time the war ended, Roman citizenship had spread dramatically across Italy.",
      "",
      "Think about what had just happened.",
      "Rome had not simply conquered another enemy.",
      "Rome had changed who could belong to Rome."
    ]},

    { title: "Citizenship Became Valuable", s: [
      "Roman citizenship was more than being able to say that you were Roman.",
      "It carried legal importance.",
      "Citizenship is legal membership in the Roman state that carried important rights and protections.",
      "Citizens possessed protections and privileges under Roman law that non-citizens did not possess in the same way.",
      "",
      "And over the centuries, Roman citizenship spread far beyond the original city of Rome.",
      "That gave Rome another way of connecting people to its system.",
      "",
      "Military power could make someone obey Rome today.",
      "Citizenship could give someone a reason to care about what happened to Rome tomorrow.",
      "",
      "That does not mean everyone loved Roman rule.",
      "They did not.",
      "",
      "Rome still faced rebellions.",
      "Its officials could be corrupt.",
      "Its armies could be brutal.",
      "Its taxes could be hated.",
      "",
      "But Rome was learning that lasting government required more than fear.",
      "People could also be connected through law, rights, government, trade, and citizenship.",
      "",
      "By the first century AD, that Roman legal world stretched far beyond Italy.",
      "And that is where the Bible gives us an extraordinary window into how it actually worked."
    ]},

    { title: "It Is Not Lawful for Us", s: [
      "Around the early first century AD, Jesus is arrested in Judea.",
      "The Jewish leaders bring Him before the Roman governor, Pontius Pilate.",
      "",
      "Why involve a Roman governor?",
      "",
      "Judea was under Roman rule.",
      "The local leaders still possessed authority in their own community, but Roman authority stood over them.",
      "",
      "That tension appears directly in John 18:31.",
      "",
      "[verse] \"Then said Pilate unto them, Take ye him, and judge him according to your law.",
      "[verse] The Jews therefore said unto him, It is not lawful for us to put any man to death:\"",
      "[verse] John 18:31",
      "",
      "That single exchange tells us something important about Roman government.",
      "",
      "Local law still existed.",
      "Local leaders still had authority.",
      "But there were limits to that authority under Roman rule.",
      "",
      "When the case reached the level of execution, the Roman governor became central to what happened next.",
      "",
      "The province was not lawless.",
      "There were layers of government and authority.",
      "And Rome intended to remain at the top."
    ]},

    { title: "But I Was Free Born", s: [
      "Now move forward several years.",
      "",
      "A Christian missionary named Paul has been arrested in Jerusalem.",
      "Roman soldiers are preparing to examine him by scourging.",
      "",
      "Then Paul asks a question.",
      "",
      "[verse] \"Is it lawful for you to scourge a man that is a Roman, and uncondemned?\"",
      "[verse] Acts 22:25",
      "",
      "Everything changes.",
      "",
      "The officer reports what Paul has said.",
      "The Roman commander comes personally to investigate.",
      "",
      "[verse] \"Then the chief captain came, and said unto him, Tell me, art thou a Roman?",
      "[verse] He said, Yea.",
      "[verse] And the chief captain answered, With a great sum obtained I this freedom.",
      "[verse] And Paul said, But I was free born.\"",
      "[verse] Acts 22:27-28",
      "",
      "Stop there.",
      "",
      "Paul was born in Tarsus, far from the city of Rome.",
      "Yet he was born a Roman citizen.",
      "The commander had obtained his citizenship at great cost.",
      "Paul inherited his.",
      "",
      "The commander immediately understands the importance of what Paul has told him.",
      "The men preparing to examine Paul withdraw.",
      "The commander himself becomes afraid when he realizes that he has bound a Roman citizen.",
      "",
      "The law has suddenly changed what powerful men are willing to do."
    ]},

    { title: "Paul Appeals to Caesar", s: [
      "Paul's citizenship becomes important again later.",
      "",
      "He is imprisoned in Caesarea, where his case comes before the Roman governor Festus.",
      "Paul believes he should not simply be handed over to his enemies.",
      "So he invokes another right available to him as a Roman citizen.",
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
      "Think about how far we have come.",
      "",
      "Rome once had to figure out how one city could govern people hundreds of miles away.",
      "Now a citizen born far from Rome can invoke Roman law before a provincial governor and appeal his case toward the highest Roman authority.",
      "",
      "That legal system will eventually carry Paul all the way to Rome."
    ]},

    { title: "Walk Through a Roman City", s: [
      "Government and citizenship were not the only ways people experienced Rome.",
      "You could see Rome around you.",
      "",
      "Walk toward the center of a Roman city and you might find a forum.",
      "A forum was a public center of Roman city life where government, law, commerce, and other public activities took place.",
      "",
      "People conducted business.",
      "Officials performed public duties.",
      "Legal matters could be heard.",
      "People met, argued, bought, sold, and exchanged news.",
      "",
      "Elsewhere you might find public baths filled with conversation.",
      "Water might enter the city through an aqueduct.",
      "Roads connected the city to other communities.",
      "The architecture, government, trade, and public spaces made Roman influence visible.",
      "",
      "Yet that did not mean every Roman city was identical.",
      "",
      "A person living in Judea did not suddenly stop being Jewish because Rome governed the province.",
      "A Greek speaker did not necessarily stop speaking Greek.",
      "Local identities remained.",
      "Rome placed another layer over them.",
      "",
      "A person could be connected to a local city, a people, a language, and the Roman world at the same time.",
      "",
      "Paul himself is an excellent example.",
      "He was a Jew.",
      "He came from Tarsus.",
      "He spoke within the Greek-speaking world.",
      "And he was a Roman citizen.",
      "Those identities existed together."
    ]},

    { title: "What Really Held Rome Together?", s: [
      "Go back to our first question.",
      "Rome wins a battle.",
      "",
      "[ex] Now what?",
      "",
      "An army can conquer a city.",
      "But an army cannot stand in every house, settle every disagreement, collect every tax, operate every market, and govern every town forever.",
      "",
      "Rome needed something that could remain after the soldiers marched away.",
      "So it developed systems.",
      "",
      "Provinces extended Roman government.",
      "Governors represented Roman authority.",
      "Local governments handled parts of everyday life.",
      "Roads connected distant places.",
      "Cities became centers of administration and trade.",
      "And citizenship brought increasing numbers of people inside Roman law.",
      "",
      "None of those things made Rome peaceful or perfect.",
      "But together they help explain how one city grew into a political system governing millions of people across enormous distances.",
      "",
      "Rome learned something important.",
      "",
      "[ex] You can conquer land with an army.",
      "[ex] Governing the people who live on it takes much more.",
      "",
      "And centuries after Rome began learning that lesson, a man from Tarsus stood before Roman officials and said, in effect, that he was a Roman citizen.",
      "",
      "Behind those few words stood centuries of conquest, government, law, and citizenship.",
      "And because those words mattered, Paul's story changed."
    ]}
  ],

  words: [
    ["Province", "A territory outside Italy placed under Roman administration.", 18],
    ["Citizenship", "Legal membership in the Roman state that carried important rights and protections.", 67],
    ["Forum", "A public center of Roman city life where government, law, commerce, and other public activities took place.", 141],
    ["Governor", "A Roman official responsible for administering a province.", 21]
  ],

  findsAt: 183,
  questions: [
    { tag: "The Morning After", q: "After Rome conquered a territory, what new problem did it face?",
      find: [1, 2, 13],
      hint: "The lesson asks it in its very first lines, before anything else happens.",
      choices: [
        "How to govern the people and territory after the battle.",
        "How to return every soldier to farming.",
        "How to destroy every local city.",
        "How to prevent anyone from speaking another language."
      ], right: 0 },

    { tag: "Provinces", q: "What was a Roman province?",
      find: [17, 18],
      hint: "From Conquest to Government defines it in one line.",
      choices: [
        "An independent kingdom with no connection to Rome.",
        "A territory outside Italy placed under Roman administration.",
        "A unit of the Roman army.",
        "A neighborhood inside the city of Rome."
      ], right: 1 },

    { tag: "The Social War", q: "Why did many of Rome's Italian allies become angry before the Social War?",
      find: [40, 44, 45],
      hint: "They were doing the fighting and still standing outside something.",
      choices: [
        "Rome refused to build roads.",
        "They had helped fight Rome's wars but many still lacked full Roman citizenship.",
        "Rome forced all of them to move to the city.",
        "They wanted Hannibal to become emperor."
      ], right: 1 },

    { tag: "The Social War", q: "What happened to Roman citizenship during and after the Social War?",
      find: [59, 61, 64],
      hint: "Rome did two things at once: it fought, and it opened a door.",
      choices: [
        "Rome abolished citizenship.",
        "Citizenship became limited to soldiers.",
        "Citizenship was extended much more widely among the peoples of Italy.",
        "Only governors could become citizens."
      ], right: 2 },

    { tag: "Jesus Before Pilate", q: "What does the trial of Jesus before Pontius Pilate help demonstrate?",
      find: [89, 90, 93, 95],
      hint: "Ask the question the lesson keeps asking: who has authority here?",
      choices: [
        "Local authorities could exist under Rome while Roman authority still placed limits over them.",
        "Judea was completely independent from Rome.",
        "Pilate had no governmental authority.",
        "Rome had abolished Jewish law."
      ], right: 0 },

    { tag: "Paul in Jerusalem", q: "Why did Paul's statement that he was a Roman citizen matter in Acts 22?",
      find: [119, 120, 121, 122],
      hint: "Watch what the soldiers do next, and what the commander feels.",
      choices: [
        "It automatically made him a governor.",
        "His citizenship gave him legal protections the Roman officers had to consider.",
        "It allowed him to command Roman soldiers.",
        "It made him exempt from every Roman law."
      ], right: 1 },

    { tag: "Appeal to Caesar", q: "What does Paul's appeal to Caesar show?",
      find: [126, 131, 132],
      hint: "Festus had no choice about what happened next, and that is the point.",
      choices: [
        "Roman citizens could never be arrested.",
        "Roman law included procedures through which a citizen could appeal his case.",
        "Every Roman citizen personally knew Caesar.",
        "Provincial governors had no authority."
      ], right: 1 },

    { tag: "The Big Idea", q: "Which statement best summarizes the lesson?",
      find: [176, 178, 179],
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
