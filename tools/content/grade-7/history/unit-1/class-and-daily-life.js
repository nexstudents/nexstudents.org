/* history/class-and-daily-life
   Grade 7 · history · unit 1. Its home is this folder.
   Built by tools/build-lessons.js. Edit the lesson here, not in the registry.

   🚨 THE METHOD IS U1-L4's, NARROWED. That lesson asks "How do you govern the
   people you just conquered?" at the start and again at the end, and everything
   between the two askings is the answer accumulating. This one asks "Who in that
   crowd was actually free?" and does the same thing.

   🚨 THE HARSH LINES ARE DELIBERATE AND MUST NOT BE SOFTENED. This is the rule
   U1-L4 set for Roman government and it binds harder here. Roman slavery was
   brutal, and a lesson that made it sound mild so a verse would sit comfortably
   at the end would be a false lesson. The mines section stays.

   ⚠️ ROMAN SLAVERY WAS NOT RACE-BASED the way American slavery was, and the
   lesson says so plainly in "The Man Who Owned The Doctor". Leaving that out
   lets a student map one onto the other and misunderstand both.

   ⚠️ THE APPIAN WAY IS THE UNIT TIE. U1-L3 taught the road. Crassus crucified
   six thousand of Spartacus's men along it. Same road, and he already knows it.

   🚨 THE VERSE IS PAUL'S CHOICE, NOT MINE. He asked to read the lesson first:
   "if the lesson is available I'll read over it and tell you which Bible verse
   sounds better." Philemon is in as the working choice. The alternatives, with
   what each would do to the section, are in the session log for 2026-09-15. */
'use strict';
module.exports = {
  id: "history/class-and-daily-life",
  slug: "class-and-daily-life",
  title: "Social Class, Slavery, and Daily Life",
  unit: "World History &middot; U1-L5",
  /* The order is declared in history-units.js (labels 1-1..1-5); this mirrors it
     so the prev/next arrows can find their neighbours. */
  seq: { unit: 1, unitTitle: "Rome, and the Church That Outlived It", n: 5 },
  eyebrow: "World History",
  dek: "A Roman street looked like one crowd. It was four or five different worlds standing next to each other, and you couldn't tell them apart by looking.",

  plan: {
    objective: "Explain how Roman society was layered, who was not free, how a person could move between layers, and what daily life looked like from each one.",
    markers: [
      "The organizing question is asked twice, start and end, exactly as U1-L4 does it.",
      "Spartacus, 73-71 BC, ends on the Appian Way, which U1-L3 already taught.",
      "Manumission and the peculium are the mobility mechanism, and the freedman's SON being a full citizen is the payoff.",
      "Philemon is the working proof step: the finished system landing on two named men."
    ],
    method: "One question held open across the whole lesson. Each section adds a layer of the answer, and no section resolves the question by itself.",
    exampleOnly: [
      "A street, a doctor, a mine, a gladiator, an apartment block, a letter. WORLD: one Roman city, seen from street level.",
      "🚨 The mines and the crucifixions are not decoration and are not to be trimmed for comfort."
    ],
    digitize: "The existing reading engine. Questions ask what an episode SHOWS about freedom and class, never for a date. NO NEW MECHANIC NEEDED.",
    unclear: ""
  },

  shelf: {
    grades: [7],
    subject: "History",
    thumb: true,
    blurb: "One crowd in the forum. One man owns the building, one works in it, one is owned. Nothing about their clothes tells you which.",
    contains: [
      "A slave who was also the family doctor, and better educated than the man who owned him",
      "Seventy men with kitchen knives, and what was left along the Appian Way",
      "How a slave bought himself back, and why his son mattered more than he did",
      "Six floors up in an apartment block with no water and no way out of a fire"
    ]
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students should be able to name the layers of Roman society, explain that slavery in Rome was not based on race, and describe how a person could move from one layer to another.",
        "The lesson is built around one question asked twice: who in that crowd was actually free? Keep asking it out loud while he reads."
      ]},
      { h: "Key Vocabulary", vocab: true },
      { h: "Teaching Suggestion", p: [
        "The hardest idea here is that a slave could be the best educated person in the house. It breaks the picture most students arrive with, and it is the door into everything else the lesson says.",
        "The second hardest is that Roman slavery was not race-based. Say it plainly. A student who maps Rome onto the American South will misread both."
      ]},
      { h: "Do Not Soften This", p: [
        "The mines and the crucifixions along the Appian Way are in the lesson on purpose. Rome was not gentle and the reading does not pretend otherwise.",
        "If he is troubled by it, that is the correct response and it is worth sitting with rather than talking him out of."
      ]},
      { h: "Where This Goes Next", p: [
        "Judea Under Rome and the lessons after it assume he knows what a Roman city was like from street level, and who was standing in it."
      ]}
    ]
  },

  parts: [
    {
      title: "Who In That Crowd Was Free?",
      s: [
        "From the street, a Roman city looked like any other busy place: shops open, carts rolling past, a crowd filling the forum.",
        "",
        "[ex] But who in that crowd was actually free?",
        "",
        "Stand there a minute and watch the people going by, because one of them owns the building behind you, another works inside it for a wage, and a third is owned by the man who owns the building.",
        "Nothing about their clothes tells you which is which, and that was deliberate.",
        "Rome never put its slaves in a uniform, and the Senate discussed the idea once and dropped it fast, because if slaves could recognize each other on sight they would find out how many of them there were."
      ]
    },
    {
      title: "The Families Who Had Always Been In Charge",
      s: [
        "At the top sat a few dozen families called the patricians, who held the Senate, the priesthoods and most of the land between them.",
        "Their power rested on one thing, and it wasn't money; it was ancestry.",
        "A patrician family kept wax portraits of its dead in the front hall, and carried them through the streets whenever another one died.",
        "So a boy grew up walking past the faces of men who had governed provinces and commanded armies.",
        "The message was not subtle, and it was never meant to be."
      ]
    },
    {
      title: "Everybody Else",
      s: [
        "Everyone else born free was a plebeian: farmers, bakers, soldiers, builders, shopkeepers, which is to say most of Rome.",
        "For two hundred years the plebeians fought the patricians for a share of the power, and the weapon they settled on was a strange one.",
        "They walked out.",
        "More than once the whole plebeian population left the city, camped on a hill outside it, and simply stopped working.",
        "Rome discovered that a city of nobles with nobody to bake the bread is not really a city at all.",
        "",
        "They came back with their own officials, called tribunes, who could kill a law with a single spoken word.",
        "Eventually they got the laws themselves written out on twelve bronze tablets in the forum, where anyone at all could walk up and read them.",
        "Before that, the men who judged you were the only men who knew what the law said."
      ]
    },
    {
      title: "The Man Who Owned The Doctor",
      s: [
        "Below every free person in that crowd stood someone who was not one, and here is the part that surprises people.",
        "A Roman slave was not a slave because of where he came from or what he looked like; he was a slave because he had lost.",
        "Armies took prisoners, pirates took travelers, debt took anyone, and so a Greek philosopher captured in a war and a farmer's son sold to cover a loan ended up in exactly the same legal position.",
        "",
        "That is why the family doctor was so often a slave, and the tutor teaching the children Greek, and the man keeping the accounts for a business worth more than the house.",
        "In plenty of Roman households, the best educated person in the building was owned by somebody else in it.",
        "None of which made him free.",
        "He could be sold tomorrow morning, his children belonged to his owner, and whatever he held in his hands was not legally his, because in Roman law he had no person of his own at all."
      ]
    },
    {
      title: "Down In The Mines",
      s: [
        "Being the doctor in a rich house was the best outcome a Roman slave could hope for, and it was nothing like the common one.",
        "Rome ran silver and lead mines in Spain that simply ate people: the tunnels were hot, unlit, and cut so low that a man worked them bent double.",
        "Being sentenced to the mines was understood by everybody, on both sides of it, as being sentenced to die, only slowly.",
        "",
        "Out on the farms, gangs worked the fields in chains and slept in a locked building.",
        "A Roman writer on agriculture lists slaves in the same chapter as the tools and the livestock, and advises selling the old ones off before they stop being useful.",
        "He is not trying to shock anybody; he is writing a manual."
      ]
    },
    {
      title: "Seventy Men With Kitchen Knives",
      s: [
        "In 73 BC about seventy men broke out of a gladiator school at Capua armed with kitchen knives and roasting spits taken from the cook house, and one of them was a Thracian called Spartacus.",
        "They should have been rounded up inside a week.",
        "Instead they took the weapons off one Roman force, then off another, and as word traveled across the countryside slaves walked off the farms to join them, until the seventy had become thousands and then tens of thousands.",
        "For two years an army of escaped slaves beat Roman armies in open battle.",
        "",
        "Rome finally sent Crassus, the richest man in the city, with a force big enough to end it, and Spartacus died somewhere in the last fighting without anyone ever identifying his body.",
        "What Crassus did next was not aimed at the men he had beaten; it was aimed at every slave still alive in Italy.",
        "He crucified six thousand prisoners along the Appian Way, spaced out at intervals, the whole road from Capua to Rome.",
        "You already know that road, because it is the one Rome built to move armies faster than anybody could march against them, and for months it was lined with a warning to everyone walking up to the city."
      ]
    },
    {
      title: "Buying Yourself Back",
      s: [
        "So far this sounds like a wall with nothing on the other side of it, and it wasn't, which is the strangest thing about Rome.",
        "A slave was allowed to keep a little money of his own, called a peculium, and although it still belonged to his owner in law, in practice almost nobody touched it.",
        "A man with a skill could earn on the side for years, and then buy himself with it.",
        "",
        "An owner could also free a slave outright, and plenty did, either in a will or at a short ceremony in front of a magistrate.",
        "The freed man was then a freedman, which was not quite a citizen and not quite what he had been.",
        "He took his former owner's family name, owed him a set number of working days every year, and could never hold office.",
        "It wasn't equality, but it was a door, and the Roman world had a great many people walking through it."
      ]
    },
    {
      title: "The Grandson Of A Slave",
      s: [
        "Here is where that door actually leads.",
        "The freedman's son was born free and a full Roman citizen, with nothing held against him in law at all.",
        "Not the father; the son.",
        "",
        "So a man could be sold at twelve, buy himself back at forty, and then watch his boy grow up able to stand for office in the city that had once sold him.",
        "Some freedmen got rich enough to make the old families furious about it, and Roman writers complain about them so constantly that we know exactly how many there must have been.",
        "Rome was brutal and Rome was mobile at the same time, and both of those are true of the same city in the same year."
      ]
    },
    {
      title: "Six Floors Up, No Water",
      s: [
        "Now walk home with the people in that crowd, because where a Roman slept says as much about him as anything he owned.",
        "A rich family lived in a domus, a house built inward around an open courtyard with a shallow pool under the roof opening to catch the rain, and it showed the street nothing but blank walls.",
        "The house turned its back on the city.",
        "",
        "Almost everyone else lived in an insula, an apartment block, where the rule was simple: the higher you lived, the poorer you were.",
        "Shops took the ground floor, decent apartments sat above them, and the rooms got smaller and worse the further up the stairs you went, until the top floors had no running water and no kitchen at all.",
        "You carried every bucket up yourself, and you cooked over a brazier in a wooden building full of other people cooking over braziers.",
        "They burned constantly, and they came down often enough that Rome had to pass laws limiting how high anyone could build one.",
        "",
        "During the day, though, most of that crowd was outside.",
        "The baths cost about what a loaf of bread cost and everybody used them, senator and shopkeeper sitting in the same water, while the state handed out free grain to citizens and put on chariot races that anyone could walk into.",
        "A city where a great many people have very little is a dangerous city, and Rome knew precisely what it was buying."
      ]
    },
    {
      title: "Not Now As A Servant",
      s: [
        "A letter survives from the middle of all this, written by the Apostle Paul to a man named Philemon who owned a slave called Onesimus, and Onesimus had run away.",
        "Under Roman law that was theft, the slave having stolen himself, and an owner could do very nearly anything he liked to a runaway once he had him back.",
        "Paul is sending him back anyway, and he asks Philemon to receive the man like this.",
        "",
        "[verse] Not now as a servant, but above a servant, a brother beloved, specially to me, but how much more unto thee, both in the flesh, and in the Lord.",
        "",
        "Read what he is doing there, because it is easy to miss.",
        "He isn't arguing about whether Roman law is right on the question of who owns whom; he is telling a slave owner that the man he owns is his brother, and asking him to go home and act like it.",
        "Every layer in this lesson decided what a person was worth by something outside him: who his parents were, or a war he lost, or a debt he couldn't pay.",
        "That letter measures the same man a completely different way."
      ]
    },
    {
      title: "So Who Was Free?",
      s: [
        "Go back and stand in that street one more time.",
        "",
        "[ex] Who in that crowd was actually free?",
        "",
        "You can answer it properly now, and the answer has layers in it.",
        "The patrician was free and powerful, and he had inherited both without doing anything.",
        "The plebeian was free, and his ancestors had to walk out of the city and let the bread run out before he got the rest of it.",
        "The freedman was mostly free, and still owed his old owner days of work every year.",
        "The slave was not free at all, and might still have been the only man on that street who could read Greek.",
        "",
        "Rome sorted people, and then spent its entire history arguing with its own sorting, and that argument does not finish at the end of this lesson any more than it finished in Rome."
      ]
    }
  ],

  words: [
    ["Patrician", "A member of one of Rome's oldest noble families, whose power came from ancestry.", 5],
    ["Plebeian", "Any free Roman who was not a patrician, which was most of the city.", 10],
    ["Freedman", "A former slave who had been set free, holding most rights but not all of them.", 43],
    ["Peculium", "Money a slave was allowed to keep and use, often to buy his own freedom.", 40],
    ["Insula", "A Roman apartment block, where the higher floors were the poorest.", 55]
  ],

  findsAt: 78,

  questions: [
    { tag: "One Crowd, Four Worlds",
      q: "Why couldn't you tell a Roman's status by looking at him in the street?",
      find: [3, 4], hint: "The lesson gives a reason the Senate itself worried about.",
      choices: [
        "Rome never made slaves wear a uniform, partly so they could not see how many of them there were.",
        "Everyone in Rome wore an identical toga by law.",
        "Roman streets were too crowded to see anyone clearly.",
        "Status was marked only by a ring nobody wore in public."
      ], right: 0 },
    { tag: "Walking Out",
      q: "What does the plebeians leaving the city show about where their power came from?",
      find: [12, 14], hint: "Ask what stopped happening in Rome when they left.",
      choices: [
        "Rome could not function without the people who did its work, so refusing to work was leverage.",
        "They owned the city walls and could lock them.",
        "The patricians were afraid of them in a fight.",
        "They controlled the Senate's votes already."
      ], right: 0 },
    { tag: "The Doctor",
      q: "What made someone a slave in Rome?",
      find: [19, 20], hint: "The lesson answers it in four words, then explains them.",
      choices: [
        "Losing: captured in war, taken by pirates, or sold for a debt.",
        "Being born in a particular country.",
        "The color of his skin.",
        "Refusing to serve in the army."
      ], right: 0 },
    { tag: "Owned And Educated",
      q: "A Roman slave could be the family's doctor or the children's tutor. What does that tell you about Roman slavery?",
      find: [21, 24], hint: "Ask what it did NOT change about his position.",
      choices: [
        "Status had nothing to do with ability, and an educated slave was still owned.",
        "Educated slaves were legally free.",
        "Rome only enslaved people who could read.",
        "Doctors and tutors could not be bought or sold."
      ], right: 0 },
    { tag: "The Appian Way",
      q: "Why did Crassus line the road from Capua to Rome with crucified prisoners?",
      find: [37, 38], hint: "Ask who was meant to walk past and see it.",
      choices: [
        "To warn every other slave in Italy what rebellion would cost.",
        "To honor the dead of both armies.",
        "Because there was nowhere else to put them.",
        "To mark the boundary of Roman territory."
      ], right: 0 },
    { tag: "The Door",
      q: "How could a Roman slave become free?",
      find: [41, 42], hint: "There are two ways in the lesson, one of them his own doing.",
      choices: [
        "He could save a peculium and buy himself, or an owner could free him outright.",
        "He was freed automatically after ten years.",
        "Only by escaping to another country.",
        "A tribune could order any owner to release him."
      ], right: 0 },
    { tag: "The Son",
      q: "Why does the lesson say the freedman's son mattered more than the freedman?",
      find: [47, 48], hint: "Compare what the law held against each of them.",
      choices: [
        "The son was born free and a full citizen, with nothing held against him in law.",
        "The son inherited his father's former owner's estate.",
        "The son could not be enslaved for debt.",
        "Only the son was allowed to own property."
      ], right: 0 },
    { tag: "Brother Beloved",
      q: "What is Paul asking Philemon to do that Roman law did not require?",
      find: [67], hint: "Notice what Paul does NOT argue about.",
      choices: [
        "To receive the man he owns as a brother, not as a servant.",
        "To free every slave in his household at once.",
        "To pay Onesimus wages for the time he was away.",
        "To report the runaway to a Roman magistrate."
      ], right: 0 }
  ],

  vocabQuestions: [
    { q: "What was a <i>patrician</i>?",
      choices: [
        "A member of one of Rome's oldest noble families, whose power came from ancestry.",
        "A soldier who had served twenty years.",
        "A freed slave who had become wealthy.",
        "An official elected to protect the poor."
      ], right: 0 },
    { q: "What was a <i>plebeian</i>?",
      choices: [
        "Any free Roman who was not a patrician.",
        "A slave working on a farm.",
        "A Greek tutor in a Roman household.",
        "A citizen of a conquered province."
      ], right: 0 },
    { q: "What was a <i>freedman</i>?",
      choices: [
        "A former slave who had been set free, holding most rights but not all of them.",
        "A plebeian who had been elected tribune.",
        "A patrician who had lost his land.",
        "A prisoner released after a war ended."
      ], right: 0 },
    { q: "What was a <i>peculium</i>?",
      choices: [
        "Money a slave was allowed to keep and use, often to buy his own freedom.",
        "The tax a freedman paid his former owner.",
        "A patrician family's wax portraits.",
        "The free grain handed out to citizens."
      ], right: 0 },
    { q: "What was an <i>insula</i>?",
      choices: [
        "A Roman apartment block, where the higher floors were the poorest.",
        "A house built around an open courtyard.",
        "The public baths.",
        "A gladiator school."
      ], right: 0 }
  ],

  todo: {
    title: "What To Do Now",
    s: [
      "You have just walked a Roman street from one end of it to the other, and met four kinds of people standing on it.",
      "{c} word cards sit at the top of the page, then {Q} questions about the reading, then {v} more about those words, which is {T} questions in all.",
      "Keep asking the question the lesson keeps asking while you answer them: who in that crowd was actually free?",
      "Ask it about the patrician who inherited everything, about the plebeian whose ancestors had to walk out of the city, about the freedman still owing his old owner days of work, and about the doctor who was owned.",
      "If a question is hard, use the bar or the arrows to go back to the part it came from, because every answer is somewhere in the reading.",
      "The one worth slowing down over is the letter at the end.",
      "Paul does not tell Philemon that Roman law has the wrong answer about who owns whom; he tells a slave owner that the man he owns is his brother, and asks him to go home and act like it.",
      "Finish with the word cards at the top and the check at the bottom of the page."
    ]
  }
};
