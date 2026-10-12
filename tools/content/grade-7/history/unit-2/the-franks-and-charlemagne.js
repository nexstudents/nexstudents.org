/* history/the-franks-and-charlemagne
   Grade 7 · history · unit 2. Its home is this folder.
   Built by tools/build-lessons.js. Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-10-11. Written on Sonnet from the Leif outline (U2 L8:
   The Franks and the Carolingian World) and McDougal Littell World History: Medieval and
   Early Modern Times Ch9 Lesson 1, pp290-297 (the Franks, Clovis, Charlemagne, the
   division of 843 and the raiders), via the week 8-9 packet (paraphrased notes). The
   video is now added per student in Teacher Notes.

   🚨 FACTS ADDED FROM THE RECORD, worth a glance from Paul. The California edition's pages
   are short on the Franks, and the packet notes that it doesn't name the Treaty of
   Verdun. So these come from the historical record:
   · The treaty of 843 is named the Treaty of Verdun, between Charlemagne's three
     grandsons (Charles the Bald, Louis the German and Lothair).
   · Pepin the Short became king of the Franks in 751, with the pope's blessing.
   · Charlemagne was crowned emperor by Pope Leo III in Rome on Christmas Day, 800.
   · Alcuin of York, the scholar Charlemagne gathered at his court at Aachen, and the
     court school.
   · The Saxon Wars and the massacre at Verden (782). The lesson states plainly that
     Charlemagne forced conversion by war and by law, as the book also says.
   · Einhard, Charlemagne's biographer, says he tried to learn to write late in life.
   · Charlemagne's inspectors, the missi dominici.
   Clovis's conversion date is left vague on purpose, since historians disagree on it.

   ⚠️ NO WALK. There is no method here to work through, only a story, and the plan marks
   the walk for 2-9 and 3-1.
   ⚠️ NO VERSE. Nothing here calls for scripture, and the forced conversions are not a
   place to hang one. */
'use strict';
module.exports = {
  id: "history/the-franks-and-charlemagne",
  slug: "the-franks-and-charlemagne",
  title: "The Franks and Charlemagne",
  unit: "World History &middot; U2-L8",
  seq: { unit: 2, unitTitle: "The East Endures, and Islam Rises", n: 8 },
  natural: "2026-10-11",
  eyebrow: "World History",
  dek: "One of the most powerful rulers in Europe may have struggled to write his own name. He still put most of the old Western empire back together, and it came apart again in thirty years.",
  plan: {
    objective: "Trace the Franks from Clovis to Charlemagne, explain how Charlemagne held a large empire together, and say why it broke apart after he died.",
    markers: [
      "McDougal Ch9 Lesson 1 (paraphrased): the Franks, a Germanic group, built one of the strongest kingdoms after Rome fell. Clovis invaded Roman Gaul in 486, and by 507 his kingdom ran from the Rhine to the Pyrenees. He converted to Christianity and most of his subjects followed. He died in 511.",
      "McDougal (paraphrased): about two centuries later Charles Martel expanded the kingdom, his son Pepin the Short became king, and Pepin's son Charlemagne took over in 768. By 800 he ruled much of western Europe, made new laws, used counts to govern regions and checked on them, and spread Christianity by conquest and sometimes forced conversion.",
      "McDougal (paraphrased): after Charlemagne died in 814 his son Louis I ruled, then Louis's three sons fought, and a treaty in 843 split the empire in three. Vikings, Muslims and Magyars took advantage, and from the mid-800s Europe was in constant warfare.",
      "ADDED FROM THE RECORD: the Treaty of Verdun, the imperial crowning in 800, Alcuin and the court school, the Saxon Wars and the massacre at Verden, Einhard's account of Charlemagne trying to learn to write, and the missi dominici. See the header.",
    ],
    method: "One open question, 'How do you hold together a huge land with no roads, no mail and no money?', held through the Franks' rise and answered by Charlemagne's counts, inspectors and schools, then reopened at his death, when the answer turns out to depend on one man. The honest part, forced conversion, is told as the book tells it.",
    exampleOnly: [
      "Charlemagne at his court at Aachen. WORLD: the Frankish kingdom, roughly 486 to 900. The title and objective don't name it.",
      "⚠️ Several facts are added from the record because the book's pages are short. See the header.",
    ],
    digitize: "The existing reading engine. Questions ask who the Franks were, what Clovis did, how Charlemagne governed, what happened at Christmas 800, what he did and didn't get right, and why the empire split.",
    unclear: "",
  },
  sheet: { slug: "the-franks-and-charlemagne-homework", subject: "history",
    note: "Do it on screen or print it. Your score shows here once you check it." },

  shelf: { grades: [7], subject: "History",
    blurb: "A king who may have struggled to write his own name ruled most of western Europe, and the empire came apart almost as soon as he was gone. Clovis, Charlemagne and the split of 843.",
    contains: [
      "A story-form reading, read aloud with the words highlighted",
      "Clovis, Charles Martel and Pepin",
      "Charlemagne's empire, his laws and his schools",
      "The Christmas crowning of 800",
      "The three-way split and the raiders who followed",
    ] },
  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will trace the Franks from Clovis to Charlemagne, explain how Charlemagne governed a large empire, and say why it split apart after he died."
      ]},
      { h: "Key Vocabulary", vocab: true },
      { h: "Added From the Record", p: [
        "The book's lesson gives the main line of Frankish rulers and the fact that a treaty in 843 divided the empire in three. It doesn't name the Treaty of Verdun, the crowning of 800, Alcuin, the Saxon Wars or Einhard, so those are added from the historical record.",
        "The lesson states plainly that Charlemagne forced conversion on the Saxons by war and by law. The book says the same thing in a sentence, and the lesson doesn't soften it."
      ]},
      { h: "Where This Goes Next", p: [
        "U2-L9 turns to the map, and shows the Alps, the Rhine and the Mediterranean that shaped where these kingdoms rose. U3-L1 then shows what grew up in the gap after the empire split, which is feudalism."
      ]}
    ]
  },

  parts: [
    { title: "A King Who Slept With a Writing Tablet", s: [
      "Late in his life, the story goes, the most powerful man in western Europe kept a writing tablet and a few blank sheets under the pillow of his bed.",
      "Whenever he couldn't sleep he practiced shaping letters, because he'd never learned to write as a boy, and by then his hand was too stiff to get it right.",
      "That king was Charlemagne, who ruled lands stretching from northern Spain to the edge of what's now Hungary, and his biographer admitted that the late practice had little success.",
      "How does a man who can hardly write his name hold such a land together, and why did it fall apart so soon after he was gone?"
    ]},

    { title: "The Franks and Their First Great King", s: [
      "When Rome's western half fell in the 400s, Germanic peoples carved it into kingdoms, and the Franks built one of the strongest of them in what's now France.",
      "In 486 a Frankish leader named Clovis invaded Roman Gaul and beat the last great Roman army there, and then he turned on the other Germanic groups nearby.",
      "By 507 his kingdom ran from the Rhine River to the Pyrenees Mountains, and around that time Clovis became a Christian and most of his subjects followed him.",
      "That was a bigger deal than it looks, because the Franks now shared a faith with the church of Rome, and Clovis died in 511 with that bond in place."
    ]},

    { title: "A Family of Strong Men", s: [
      "Two centuries later, the Frankish kings had grown weak and the real power belonged to a family of officials, and the greatest of them was Charles Martel, whom you met turning back an army at Tours in 732.",
      "Charles Martel kept expanding the kingdom, and his son Pepin the Short took the crown himself in 751 with the pope's blessing and ruled until 768.",
      "Pepin's son was named Charles too, but people called him Charlemagne, which means Charles the Great, and in 768 he took over a kingdom that was already the strongest in the West."
    ]},

    { title: "Conquest, and the Cost of It", s: [
      "Charlemagne spent most of his reign at war, and he pushed the borders of the Frankish kingdom into northern Italy, into Bavaria, and east into the lands of the Saxons.",
      "The Saxons were pagans, and they fought him for about thirty years, and he did not treat their faith as something to argue with.",
      "He made Christianity the law in their land, and his laws threatened death to Saxons who refused baptism, and in 782, after a rebellion, he ordered thousands of captive Saxons executed at a place called Verden.",
      "The book puts it in a sentence, that he spread Christianity through conquest and sometimes forced conversion, and you should take that sentence seriously, because a faith forced at sword point is not the faith the church's first missionaries carried."
    ]},

    { title: "Emperor on Christmas Day", s: [
      "On Christmas Day in the year 800, Charlemagne knelt to pray in Saint Peter's church in Rome, and Pope Leo III came up behind him and set a crown on his head.",
      "The crowd shouted that he was emperor of the Romans, a title nobody in the West had held for more than three hundred years.",
      "By then he ruled much of western Europe, more land than any ruler since the old Roman emperors, and the crown was a way of saying that Rome, in a new shape, had come back.",
      "Notice what the crowning showed about the two powers: the pope had made the emperor, and that question of who answers to whom would come up again."
    ]},

    { title: "How You Hold It Together", s: [
      "Now go back to the opening question, because ruling such a land meant dealing with distances, bad roads, and no postal system or paper money.",
      "Charlemagne divided the empire into regions, each run by a powerful landholder called a count, who held courts and raised soldiers for the emperor.",
      "To keep the counts honest, he sent out inspectors in pairs, usually a count and a bishop, to travel the regions and report back, and he traveled a great deal himself.",
      "He also issued new laws and had them written down, since a law that lives only in memory is easy to change."
    ]},

    { title: "Books and a Court School", s: [
      "Charlemagne couldn't write well himself, but he understood that an empire needs people who can, so he gathered scholars at his court in the town of Aachen.",
      "The best known was Alcuin, an English monk who ran the court school and taught the sons of nobles, and who helped spread a clear, neat style of handwriting that copyists used for centuries.",
      "Remember the monks in their scriptoriums, because this is where their work became a plan, with monasteries asked to copy books and open schools throughout the empire.",
      "A lot of what we have of ancient Latin writing survives because a copy was made in these years."
    ]},

    { title: "Three Grandsons, One Empire", s: [
      "Charlemagne died in 814, and his son Louis took the throne, but the empire had been held together by one man's will, and Louis didn't have it.",
      "When Louis died, his three sons fought over the kingdom for years, until in 843 they signed a treaty, today called the Treaty of Verdun, that divided the empire into three parts.",
      "Charles the Bald took the western part, which became France, Louis the German took the eastern part, which became Germany, and Lothair got a long strip between them, with the title of emperor.",
      "A divided empire was a weaker one, and the neighbors who had been watching its borders for a century began to move."
    ]},

    { title: "Raiders From Three Directions", s: [
      "Vikings, the pirates of Scandinavia, sailed up Europe's rivers in their long ships and raided monasteries, towns and the coasts.",
      "Muslim raiders attacked the coast of Italy and southern France, and the Magyars, horsemen from the east, struck deep into central Europe.",
      "From the middle of the 800s, western Europe was in constant warfare, and the kings who were supposed to protect people were too far away and too weak to come.",
      "So the answer to the opening question is that Charlemagne held the empire together with counts, inspectors, laws and schools, and that it worked only as long as he was alive to run it.",
      "Who protects people when no king can, and what they give in return, is the question the lesson on feudalism picks up."
    ]}
  ],

  words: [
    ["Franks", "A Germanic people who built a strong kingdom in what is now France.", 4],
    ["Emperor", "The ruler of an empire, a title Charlemagne was given in Rome in the year 800.", 16],
    ["Count", "A powerful landholder who governed a region for Charlemagne.", 20],
    ["Treaty", "A written agreement between rulers, like the one in 843 that divided the empire in three.", 28]
  ],

  findsAt: 36,
  questions: [
    { tag: "The Question", q: "Why did Charlemagne keep a writing tablet under his pillow?", find: [1],
      hint: "Read A King Who Slept With a Writing Tablet.",
      choices: [
        "To write laws at night.",
        "To practice shaping letters, because he'd never learned to write well as a boy.",
        "To hide secrets.",
        "To keep a diary of his battles."
      ], right: 1 },

    { tag: "Clovis", q: "What happened around the time of Clovis's conquests that bound the Franks to Rome's church?", find: [7],
      hint: "Read The Franks and Their First Great King.",
      choices: [
        "Clovis became a Christian, and most of his subjects followed.",
        "The pope moved to France.",
        "The Franks built a church in Rome.",
        "Clovis took the title of emperor."
      ], right: 0 },

    { tag: "The Rulers", q: "Who was Charlemagne's father?", find: [9],
      hint: "Read A Family of Strong Men.",
      choices: ["Clovis", "Pepin the Short", "Charles Martel", "Louis the German"], right: 1 },

    { tag: "Conquest", q: "How does the lesson describe Charlemagne's treatment of the Saxons?", find: [13, 14],
      hint: "Read Conquest, and the Cost of It.",
      choices: [
        "He won them over with gifts.",
        "He forced them to convert, and his laws threatened death for refusing baptism.",
        "He left their religion alone.",
        "He asked them to become monks."
      ], right: 1 },

    { tag: "800", q: "What happened on Christmas Day in the year 800?", find: [15],
      hint: "Read Emperor on Christmas Day.",
      choices: [
        "Charlemagne died.",
        "Pope Leo III crowned him emperor of the Romans.",
        "The Saxons surrendered.",
        "Charlemagne became a monk."
      ], right: 1 },

    { tag: "Governing", q: "How did Charlemagne keep the counts honest?", find: [21],
      hint: "Read How You Hold It Together.",
      choices: [
        "He paid them in gold.",
        "He sent out inspectors in pairs to report on them, and traveled a great deal himself.",
        "He wrote them letters.",
        "He moved them to Rome."
      ], right: 1 },

    { tag: "Learning", q: "Who was Alcuin?", find: [24],
      hint: "Read Books and a Court School.",
      choices: [
        "A Saxon leader.",
        "An English monk who ran Charlemagne's court school.",
        "A pope.",
        "Charlemagne's son."
      ], right: 1 },

    { tag: "The Split", q: "What did the treaty of 843 do?", find: [28],
      hint: "Read Three Grandsons, One Empire.",
      choices: [
        "It made Charlemagne emperor.",
        "It divided the empire into three parts among Charlemagne's grandsons.",
        "It ended the Saxon Wars.",
        "It crowned Pepin."
      ], right: 1 },

    { tag: "The Raiders", q: "Which three groups raided Europe once the empire was divided?", find: [31, 32],
      hint: "Read Raiders From Three Directions.",
      choices: [
        "Romans, Greeks and Persians",
        "Vikings, Muslims and Magyars",
        "Saxons, Franks and Goths",
        "Huns, Romans and Turks"
      ], right: 1 }
  ],

  vocabQuestions: [
    { q: "Who were the <i>Franks</i>?",
      choices: ["A Germanic people who built a strong kingdom in what's now France", "Roman senators", "Viking raiders", "Monks in Ireland"], right: 0 },
    { q: "What is an <i>emperor</i>?",
      choices: ["A monk", "A serf", "The ruler of an empire", "A kind of treaty"], right: 2 },
    { q: "What was a <i>count</i> under Charlemagne?",
      choices: ["A person who counted soldiers", "A powerful landholder who governed a region for the emperor", "A foreign king", "A teacher at the court school"], right: 1 },
    { q: "What is a <i>treaty</i>?",
      choices: ["A written agreement between rulers", "A castle", "A battle", "A kind of tax"], right: 0 }
  ],

  todo: { title: "What To Do Now", s: [
      "A king with a writing tablet under his pillow is where this lesson began, and the questions ask what he built and what he couldn't hold together.",
      "{c} word cards sit at the top of the page, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "None of them asks for a date, so read for who did what and why.",
      "If the rulers get tangled, read A Family of Strong Men and Three Grandsons, One Empire again and trace who was whose son.",
      "Last, open the Homework Sheet with the button at the bottom of the page, and either fill it out right on the screen or print it and do it on paper."
  ] }
};
