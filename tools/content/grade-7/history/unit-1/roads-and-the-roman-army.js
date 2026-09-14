/* history/roads-and-the-roman-army
   Grade 7 · history · unit 1. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   ✅ THE PROSE IN `parts` IS PAUL'S, REBUILT FROM HIS DOC 2026-09-14.
   Source: docs.google.com/document/d/14wshhgz6kCEVMnMKML3Dkoe1DYkiuTF8Fecbj7ROBNQ
   A REWRITE, not an edit. What his version does that mine did not:
     - 🚨 IT OPENS ON A DEFEAT. My draft opened with finished roads and admired
       them. Paul opens at the Caudine Forks in 321 BC, with a Roman army
       trapped in a mountain pass and surrendering. The road only means
       something once you have felt the problem it solves, and his teacher notes
       say exactly that: let students feel the problem before giving them Rome's
       solution.
     - THE THESIS IS A SYSTEM, NOT A ROAD. Roads, bridges, legions, allies and
       government each make the others more useful. Cannae is the proof: Rome
       loses an entire army in 216 BC and does not collapse, because its
       strength was never held in one army.
     - 🚨 IT REFUSES THE EASY CLAIM, TWICE. "The Appian Way did not create the
       Roman Empire" and "One road did not defeat Hannibal." Both sentences are
       the lesson guarding against the conclusion a student wants to draw.
     - ISAIAH 40:3 CLOSES IT, with his own guard in the teacher notes: Isaiah was
       NOT talking about Roman roads. The road is not the destination; it
       prepares the way to reach it.
   ⚠️ ONE SENTENCE OF MINE, marked inline: PROVINCE. It carries a word card and
   appears nowhere in his prose - it is really the next lesson's word - so it is
   defined once, where Rome first holds territory outside Italy.
   ⚠️ NO BAKED VOICE ON THIS LESSON (checked 2026-09-14: only republic-to-empire
   and roman-government have a voice.json), so the rewrite costs no audio.
   → [[feedback-tweak-pauls-lesson-structure]] */
'use strict';
module.exports = {
  id: "history/roads-and-the-roman-army",
  slug: "roads-and-the-roman-army",
  title: "Roads, Bridges, and the Roman Army",
  unit: "World History &middot; U1-L3",

  plan: {
    objective: "Explain how Rome learned to extend its power across distance through roads, bridges, military organization and alliances.",
    markers: [
      "The Second Samnite War, 326-304 BC, is the problem: Rome fighting farther from home.",
      "The defeat at the Caudine Forks, 321 BC, is what makes the problem concrete.",
      "The Appian Way, begun 312 BC under Appius Claudius Caecus, is the pivotal moment.",
      "Cannae, 216 BC, and Zama, 202 BC, are the test the whole system survives.",
    ],
    method: "🚨 FEEL THE PROBLEM BEFORE YOU ARE GIVEN THE SOLUTION. Paul's teacher notes state it outright, and the lesson is built that way: a trapped army and a surrender come first, the road comes nine years later. The recurring question is his too - what good is an army if you cannot get it where it needs to go? Every section after the road adds one more piece to a SYSTEM rather than one more Roman achievement, and Cannae exists to prove the system is what mattered: the army is destroyed and Rome keeps fighting.",
    exampleOnly: [
      "The Caudine Forks, the Appian Way to Capua, an army marching south, a river, Cannae, Zama - WORLD: one continuous Roman story, told in order.",
      "🚨 THE TWO REFUSALS ARE LOAD-BEARING. 'The Appian Way did not create the Roman Empire' and 'One road did not defeat Hannibal' both exist to stop the student drawing a single-cause conclusion. They are not hedging and must not be trimmed.",
    ],
    digitize: "The existing reading engine. Questions ask what a thing made possible rather than for a date, so the student practises the causal chain. NO NEW MECHANIC NEEDED.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "History",
    thumb: true,
    blurb: "A Roman army walks into a mountain pass and has to surrender. Nine years later Rome starts building a road.",
    contains: [
      "The trap at the Caudine Forks, where there was no battle at all",
      "312 BC and the Appian Way, and why one road is the turning point",
      "Cannae, where Rome loses an entire army and does not collapse",
      "Isaiah 40:3, and what a prepared road actually pictures",
    ] },
  eyebrow: ["World History", "U1-L3", "Ancient Rome"],
  dek: "A sword can win the ground beneath a soldier's feet. A road helps a civilization reach the next place.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will explain how Rome learned to extend its power across distance through roads, bridges, military organization, and alliances.",
        "The central idea is that winning a battle was not enough. Rome had to move soldiers, supplies, messages, and resources across an expanding territory."
      ]},
      { h: "Key Concepts", p: [
        "The Second Samnite War, 326 to 304 BC, gives us the problem. Rome was fighting farther from home, and the defeat at the Caudine Forks in 321 BC showed how difficult that could be.",
        "The Appian Way, begun in 312 BC, is the pivotal moment in this lesson. It did not create the Roman Empire, but it shows Rome learning how to connect distant places and move power more effectively.",
        "Roads, bridges, armies, alliances, and eventually trade all became parts of a larger Roman system."
      ]},
      { h: "Where Students Get Stuck", p: [
        "🚨 Students may think Rome became powerful simply because it had a strong army. Keep asking: what good is an army if you cannot get it where it needs to go?",
        "The lesson is about what made Roman military power possible across long distances."
      ]},
      { h: "Teaching Suggestion", p: [
        "Let students feel the problem before giving them Rome's solution. Begin with the Roman defeat at the Caudine Forks, then introduce the Appian Way and ask how a dependable road would change what Rome could do."
      ]},
      { h: "Biblical Connection", p: [
        "Near the end, connect the idea of preparing a road with Isaiah 40:3.",
        "🚨 Be clear that Isaiah was not talking about Roman roads. The historical lesson simply helps students understand the picture Isaiah uses: a way is prepared and obstacles are cleared for the one who is coming."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "A Humiliation in the Mountains", s: [
      "It is 321 BC.",
      "Rome has been fighting a people called the Samnites for several years.",
      "The war is taking Roman soldiers farther from home and into difficult country.",
      "The Samnites know these mountains well.",
      "",
      "Then a Roman army enters a mountain passage called the Caudine Forks.",
      "The soldiers move forward and discover that the way ahead is blocked.",
      "They turn around.",
      "The way behind them is blocked too.",
      "The Roman army is trapped.",
      "",
      "There is no great battle.",
      "There is no heroic Roman victory.",
      "The Romans eventually have to surrender.",
      "",
      "For a growing republic that wants to become stronger, it is a humiliating defeat.",
      "",
      "But Rome's problem is bigger than what happened in one mountain pass.",
      "The war continues.",
      "Rome still wants to reach farther south.",
      "",
      "That means Rome has to answer a difficult question.",
      "",
      "[ex] How does one city fight a war farther and farther from home?",
      "",
      "An army cannot live on swords and shields.",
      "Soldiers need food.",
      "Commanders need to send and receive orders.",
      "Reinforcements need to reach the fighting.",
      "Carts carrying equipment need a path they can travel.",
      "",
      "A river can stop them.",
      "Mud can slow them.",
      "Mountains can force them miles out of the way.",
      "",
      "Rome was beginning to discover that distance itself could become an enemy."
    ]},

    { title: "The Pivotal Moment", s: [
      "Nine years later, in 312 BC, Roman citizens elect Appius Claudius Caecus as censor.",
      "",
      "Rome is not yet the enormous empire we usually picture.",
      "There is no Roman emperor.",
      "Rome is still a republic, and it is still struggling to establish its power throughout Italy.",
      "But Rome has learned how to organize people and resources on a scale much larger than one person could accomplish alone.",
      "",
      "During Appius's time as censor, construction begins on a road heading south from Rome.",
      "It becomes known as the Via Appia, or Appian Way.",
      "Its early route connected Rome with Capua, about 121 miles away.",
      "",
      "Appius did not personally build 121 miles of road.",
      "That is part of what makes this story important.",
      "Rome had developed a government that could make a decision and then organize the people and resources needed to carry it out.",
      "",
      "The Appian Way did not win the war overnight.",
      "It did not suddenly create the Roman Empire.",
      "But it changed what was possible.",
      "",
      "This is the pivotal moment.",
      "Rome was learning how to make distance smaller."
    ]},

    { title: "What Changes When You Build a Road?", s: [
      "Imagine Roman soldiers marching south.",
      "Without a dependable road, every muddy trail can slow them down.",
      "Food has to somehow reach them.",
      "Carts carrying equipment have to follow.",
      "Messages have to travel between the army and Rome.",
      "",
      "Now give that army a dependable road.",
      "",
      "The soldiers know where to march.",
      "Food and equipment can follow them.",
      "Orders can travel along the same route.",
      "Reinforcements have a path to the fighting.",
      "",
      "The road itself never swings a sword.",
      "But the road changes what the sword can reach.",
      "",
      "Then the road reaches a river.",
      "Now what?",
      "If the army cannot cross, the road has reached its end.",
      "",
      "So Rome builds bridges.",
      "Roman builders became skilled at using structures such as the arch, a curved structure that directs weight outward into its supports and allows a structure to span an opening.",
      "",
      "A river that once stopped movement could now become another problem to solve.",
      "Build the bridge.",
      "Cross the river.",
      "Keep going."
    ]},

    { title: "An Army That Worked Together", s: [
      "The Roman army itself depended on organization.",
      "",
      "A legion contained thousands of soldiers, but a legion was not simply a crowd of thousands of men.",
      "It was divided into smaller units.",
      "Orders could move through those units.",
      "",
      "Soldiers trained together.",
      "They marched together.",
      "They built camps and fortifications.",
      "Roman soldiers could also take part in construction connected with military movement.",
      "",
      "One person could not do all of this.",
      "Rome's strength came partly from getting large numbers of people to work toward the same goal.",
      "",
      "But even the Roman army was not the whole story."
    ]},

    { title: "Rome Needed Allies Too", s: [
      "As Rome expanded through Italy, it developed relationships with other Italian communities.",
      "Some had fought against Rome.",
      "Some had been defeated by Rome.",
      "Some received different rights.",
      "",
      "Many became Roman allies and were expected to provide soldiers and resources when Rome went to war.",
      "An alliance is a relationship in which different communities or groups cooperate.",
      "That meant Rome could draw upon far more people than those living inside the city itself.",
      /* ⚠️ MINE, one sentence. Province carries a word card here but is really
         the next lesson's word, and it appeared nowhere in his prose. */
      "Later, as Rome came to hold territory well beyond Italy, each of those territories was governed as part of the Roman state and was called a province.",
      "",
      "Now look at what is coming together.",
      "",
      "Rome has an organized army.",
      "Its allies provide additional soldiers and resources.",
      "Roads help those soldiers move.",
      "Bridges carry them across obstacles.",
      "Government helps organize the system.",
      "",
      "Each part makes the other parts more useful.",
      "",
      "And soon that entire system is going to face an enormous test."
    ]},

    { title: "Then Comes Hannibal", s: [
      "Nearly a century passes.",
      "In 218 BC, the Carthaginian general Hannibal brings war into Italy.",
      "Rome now faces one of the greatest military threats in its history.",
      "",
      "Then, in 216 BC, Roman forces meet Hannibal at the Battle of Cannae.",
      "The result is devastating.",
      "A huge Roman army is destroyed.",
      "Thousands upon thousands of Roman and allied soldiers are killed or captured.",
      "",
      "It is the kind of defeat that could destroy a nation.",
      "",
      "But Rome does not collapse.",
      "Why?",
      "",
      "Because Rome's strength is no longer contained in one army.",
      "",
      "The government still functions.",
      "More soldiers can be raised.",
      "Many allies remain connected to Rome.",
      "Supplies can still move.",
      "Messages can still travel.",
      "",
      "The system has taken a terrible blow, but it has not completely broken.",
      "Rome keeps fighting.",
      "",
      "Fourteen years after Cannae, in 202 BC, a Roman commander named Scipio Africanus faces Hannibal at the Battle of Zama in North Africa.",
      "This time Rome wins.",
      "Hannibal is defeated.",
      "Rome survives the war and emerges as the dominant power in the western Mediterranean.",
      "",
      "One road did not defeat Hannibal.",
      "One bridge did not save Rome.",
      "One legion did not create an empire.",
      "",
      "What mattered was how the pieces worked together."
    ]},

    { title: "The Roads Begin Carrying Something Else", s: [
      "There is another part of the story.",
      "",
      "Build a road for soldiers, and other people can travel on it too.",
      "",
      "Merchants can use it.",
      "Farmers can carry goods toward markets.",
      "Travelers can move between towns.",
      "Messages can move farther and faster.",
      "Trade can follow the same connections that armies use.",
      "",
      "Over time, Rome builds more roads.",
      "Those roads connect more cities.",
      "More bridges cross obstacles.",
      "Ports and sea routes connect places the roads cannot easily reach.",
      "",
      "Rome's military network also becomes a network for trade, travel, government, and communication.",
      "The roads built to help Rome extend its power also help connect the Roman world.",
      "",
      "And centuries later, those same connections will carry a very different kind of message."
    ]},

    { title: "Preparing the Way", s: [
      "Long before Rome built the Appian Way, the prophet Isaiah used the picture of a road to describe something much greater.",
      "",
      "[verse] \"The voice of him that crieth in the wilderness, Prepare ye the way of the LORD, make straight in the desert a highway for our God.\"",
      "[verse] Isaiah 40:3",
      "",
      "Isaiah was not writing about Roman engineering.",
      "But after seeing what an ancient road could do, the picture becomes easier to understand.",
      "",
      "A way is prepared.",
      "Obstacles are cleared.",
      "A path is made ready for the one who is coming.",
      "",
      "Rome prepared roads for its own purposes.",
      "Isaiah points toward something far greater: preparing the way of the Lord.",
      "",
      "The road is not the destination.",
      "It prepares the way to reach it."
    ]},

    { title: "Look Back at 312 BC", s: [
      "Now go back to where our story turned.",
      "",
      "[ex] 312 BC",
      "",
      "There is no Roman Empire yet.",
      "Hannibal has not invaded Italy.",
      "Scipio has not defeated him.",
      "Rome does not control the Mediterranean.",
      "",
      "There is simply a growing republic trying to reach farther than it could before.",
      "",
      "Then the Appian Way begins stretching south.",
      "",
      "A Roman decision can now reach beyond the city in a new way.",
      "Soldiers can march along the road.",
      "Supplies can follow them.",
      "Bridges can carry them across obstacles.",
      "Allied communities can connect with a larger Roman system.",
      "Merchants will eventually travel those same routes.",
      "",
      "That is why the Appian Way matters.",
      "It did not create the Roman Empire by itself.",
      "It lets us see Rome learning something that would help make an empire possible: how to connect people, places, resources, and power across great distances.",
      "",
      "A sword can win the ground beneath a soldier's feet.",
      "A road helps a civilization reach the next place."
    ]}
  ],

  words: [
    ["Appian Way", "A major Roman road begun in 312 BC under Appius Claudius Caecus. Its early route connected Rome with Capua.", [33, 34]],
    ["Legion", "A large organized unit of the Roman army containing thousands of soldiers.", [65, 66]],
    ["Alliance", "A relationship in which different communities or groups cooperate.", 80],
    ["Arch", "A curved structure that directs weight outward into its supports, allowing builders to span an opening.", 59],
    ["Province", "A territory governed as part of the Roman state as Rome expanded.", 82]
  ],

  findsAt: 162,
  questions: [
    { tag: "The Caudine Forks", q: "What happened to the Roman army at the Caudine Forks in 321 BC?",
      find: [8, 10, 11],
      hint: "There was no battle at all. That is what makes it humiliating.",
      choices: [
        "It defeated Hannibal.",
        "It became trapped and was forced to surrender.",
        "It built the Appian Way.",
        "It captured Capua."
      ], right: 1 },

    { tag: "The Real Problem", q: "What larger problem did the defeat help us see?",
      find: [17, 18, 22],
      hint: "The lesson asks it as a question, right after the surrender.",
      choices: [
        "Rome did not know how to make swords.",
        "Rome needed ways to move soldiers, supplies, and messages farther from home.",
        "Rome had no government.",
        "The Romans refused to cross rivers."
      ], right: 1 },

    { tag: "312 BC", q: "Why is 312 BC a pivotal moment in this lesson?",
      find: [32, 33, 37],
      hint: "Something began being built that year, under a censor.",
      choices: [
        "Rome became an empire that year.",
        "Hannibal invaded Italy.",
        "Construction of the Appian Way began under Appius Claudius Caecus.",
        "Rome conquered Carthage."
      ], right: 2 },

    { tag: "What a Road Does", q: "How did a dependable road make an army more effective?",
      find: [49, 50, 51, 52],
      hint: "Think about everything that has to travel besides the soldiers.",
      choices: [
        "Soldiers no longer needed food.",
        "It helped soldiers, supplies, reinforcements, and messages move where they were needed.",
        "It prevented armies from leaving Rome.",
        "It replaced the soldiers."
      ], right: 1 },

    { tag: "Bridges", q: "Why were bridges important to Rome's growing road system?",
      find: [55, 57, 58],
      hint: "What happens to a road when it reaches a river?",
      choices: [
        "They allowed roads and travelers to continue across obstacles such as rivers.",
        "They were built only for decoration.",
        "They replaced Roman roads.",
        "They kept merchants out of Roman territory."
      ], right: 0 },

    { tag: "Allies", q: "Why were Rome's alliances important?",
      find: [79, 80, 81],
      hint: "Count who Rome could call on when it went to war.",
      choices: [
        "Rome could draw soldiers and resources from communities beyond the city itself.",
        "Allies prevented Rome from building roads.",
        "Rome's allies fought only against Rome.",
        "Alliances meant Rome no longer needed an army."
      ], right: 0 },

    { tag: "Cannae", q: "Rome suffered a terrible defeat at Cannae in 216 BC. Why was Rome still able to continue fighting?",
      find: [101, 102, 105],
      hint: "The lesson answers its own question with one sentence about where Rome's strength was.",
      choices: [
        "Hannibal immediately surrendered.",
        "Rome depended on a larger system of government, armies, allies, resources, and connections.",
        "Rome had actually won at Cannae.",
        "The war ended the following day."
      ], right: 1 },

    { tag: "The Big Idea", q: "Which statement best explains the main idea of this lesson?",
      find: [113, 115, 116],
      hint: "The lesson says twice what did NOT cause Rome's power on its own.",
      choices: [
        "The Appian Way created the Roman Empire by itself.",
        "Rome became powerful because one general won every battle.",
        "Rome's strength grew as roads, bridges, military organization, alliances, government, and trade worked together.",
        "Roman bridges were more important than Roman soldiers."
      ], right: 2 }
  ],

  vocabQuestions: [
    { q: "What was the <i>Appian Way</i>?",
      choices: [
        "A Roman army.",
        "A major Roman road begun in 312 BC.",
        "A mountain pass.",
        "A Roman province in Africa."
      ], right: 1 },
    { q: "What was a <i>legion</i>?",
      choices: [
        "A large organized unit of Roman soldiers.",
        "A Roman bridge.",
        "A group of merchants.",
        "A road-building tool."
      ], right: 0 },
    { q: "What is an <i>alliance</i>?",
      choices: [
        "A type of road.",
        "A relationship in which different communities or groups cooperate.",
        "A military defeat.",
        "A stone arch."
      ], right: 1 },
    { q: "What does an <i>arch</i> help builders do?",
      choices: [
        "Direct weight outward into its supports so an opening can be spanned.",
        "Organize a legion.",
        "Elect a Roman official.",
        "Move an army without a road."
      ], right: 0 }
  ],

  todo: { title: "What To Do Now", s: [
      "That is the reading done, and this lesson is one long chain of causes.",
      "{c} word cards sit at the top of the page, then {Q} questions, then {v} more questions about those words. {T} questions in all.",
      "Not one of them asks you for a date, so do not go back trying to memorise the years.",
      "They ask what a thing made possible, which is a different question.",
      "If one is hard, use the bar or the arrows to go back to the section it came from and read it again.",
      "The one worth slowing down on is Cannae.",
      "Rome lost an entire army and kept fighting, and the reason is the whole point of the lesson.",
      "Last, the word cards at the top and the check at the bottom of the page."
  ] }
};
