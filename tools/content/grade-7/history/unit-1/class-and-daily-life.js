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
        "A Roman city looked busy from the street.",
        "Shops open, carts moving, a crowd in the forum.",
        "",
        "[ex] But who in that crowd was actually free?",
        "",
        "Stand there a minute and watch the people going past.",
        "One of them owns the building behind you.",
        "Another works inside it for a wage.",
        "And a third is owned by the man who owns the building.",
        "Nothing about their clothes tells you which is which.",
        "",
        "Rome never put its slaves in a uniform.",
        "The Senate discussed it once and dropped the idea, because if slaves could recognize each other on sight they would find out how many of them there were."
      ]
    },
    {
      title: "The Families Who Had Always Been In Charge",
      s: [
        "At the top sat a few dozen families called the patricians.",
        "They held the Senate, the priesthoods, and most of the land.",
        "Their power came from one thing, and it wasn't money.",
        "It was ancestry.",
        "",
        "A patrician family kept wax portraits of its dead in the front hall, and carried them in the funeral procession when another one died.",
        "A boy grew up walking past the faces of men who had governed provinces and commanded armies.",
        "The message was not subtle, and it wasn't meant to be."
      ]
    },
    {
      title: "Everybody Else",
      s: [
        "Everyone else born free was a plebeian.",
        "Farmers, bakers, soldiers, builders, shopkeepers.",
        "Most of Rome, in other words.",
        "",
        "For two hundred years the plebeians fought the patricians for a share of the power, and the weapon they used was strange.",
        "They walked out.",
        "The whole plebeian population left the city and camped on a hill outside it, more than once, and simply stopped working.",
        "Rome discovered that a city of nobles with nobody to bake the bread is not a city.",
        "",
        "They won their own officials, called tribunes, who could block a law with a single word.",
        "They got the laws written down on twelve bronze tablets in the forum, where anyone could read them.",
        "Before that, the men who judged you were the only men who knew what the law said."
      ]
    },
    {
      title: "The Man Who Owned The Doctor",
      s: [
        "Below every free person was a person who was not one.",
        "",
        "Here is the part that surprises people.",
        "A Roman slave was not a slave because of where he came from or what he looked like.",
        "He was a slave because he lost.",
        "Armies took prisoners, pirates took travelers, and debt took anyone.",
        "A Greek philosopher captured in a war and a farmer's son sold for a debt ended up in the same legal position.",
        "",
        "That is why the family doctor was often a slave.",
        "So was the tutor teaching the children Greek.",
        "So was the man keeping the accounts for a business worth more than the house.",
        "In plenty of Roman households the best educated person in the building was owned by somebody in it.",
        "",
        "None of that made him free.",
        "He could be sold in the morning.",
        "His children belonged to the owner.",
        "He had no legal person of his own, and nothing he held was his."
      ]
    },
    {
      title: "Down In The Mines",
      s: [
        "Being a doctor in a rich house was the best outcome a Roman slave could hope for.",
        "It was not the common one.",
        "",
        "Rome ran silver and lead mines in Spain that ate people.",
        "The tunnels were hot, unlit, and low enough to work bent over.",
        "Men were sent down there as a punishment, and a sentence to the mines was understood by everyone as a sentence to die, just slowly.",
        "",
        "On the farms, gangs worked the fields in chains and slept in a locked building.",
        "A Roman writer on agriculture lists slaves in the same chapter as tools and livestock, and advises selling the old ones before they stop being useful.",
        "He is not being shocking.",
        "He is writing a manual."
      ]
    },
    {
      title: "Seventy Men With Kitchen Knives",
      s: [
        "In 73 BC about seventy men broke out of a gladiator school at Capua.",
        "They were armed with kitchen knives and spits taken from the cook house.",
        "One of them was a Thracian called Spartacus.",
        "",
        "They should have been caught in a week.",
        "Instead they took a Roman force's weapons, then another, and word spread across the countryside.",
        "Slaves walked off farms to join them, and the seventy became thousands, and then tens of thousands.",
        "For two years an army of escaped slaves beat Roman armies in the field.",
        "",
        "Rome finally sent Crassus, the richest man in the city, with a force that ended it.",
        "Spartacus died somewhere in the last battle and his body was never identified.",
        "",
        "What Crassus did next was aimed at everybody who was still a slave.",
        "He crucified six thousand prisoners along the Appian Way, spaced out, the whole road from Capua to Rome.",
        "You already know that road.",
        "It was the one Rome built to move armies fast, and for months it was lined with a warning to anyone walking to the city."
      ]
    },
    {
      title: "Buying Yourself Back",
      s: [
        "So far this sounds like a wall with nothing on the other side of it.",
        "It wasn't, and that is the strangest thing about Rome.",
        "",
        "A slave was allowed to keep a little money of his own, called a peculium.",
        "Legally it still belonged to his owner, but in practice nobody touched it.",
        "A man with a skill could earn on the side for years, and then buy himself.",
        "",
        "An owner could also free a slave outright, and plenty did, in a will or at a ceremony with a magistrate.",
        "The freed man was then called a freedman, and he was not quite a citizen and not quite what he had been.",
        "He took his former owner's family name, owed him a set number of days of work a year, and could not hold office.",
        "",
        "It was not equality.",
        "But it was a door, and the Roman world had a great many people walking through it."
      ]
    },
    {
      title: "The Grandson Of A Slave",
      s: [
        "Here is where the door actually leads.",
        "",
        "The freedman's son was born free, and a full Roman citizen, with nothing held against him in law.",
        "Not the father.",
        "The son.",
        "",
        "So a man could be sold at twelve, buy himself at forty, and watch his boy grow up able to stand for office.",
        "Some freedmen got rich enough to make the old families furious about it, and Roman writers complain about them constantly, which is how we know how many there were.",
        "",
        "Rome was brutal and Rome was mobile, at the same time, and both of those are true of the same city."
      ]
    },
    {
      title: "Six Floors Up, No Water",
      s: [
        "Now walk home with the people in that crowd, because where they slept says as much as what they owned.",
        "",
        "A rich family lived in a domus, a house built inward around an open courtyard, with a pool under the roof opening to catch the rain.",
        "Blank walls faced the street.",
        "The house turned its back on the city.",
        "",
        "Almost everyone else lived in an insula, an apartment block, and the higher you lived the poorer you were.",
        "Ground floor shops, decent apartments above them, then smaller and worse the further up you went.",
        "The top floors had no running water and no kitchen.",
        "You carried every bucket up the stairs, and you cooked on a brazier in a wooden building full of other people cooking on braziers.",
        "They burned constantly, and they collapsed often enough that Rome had to pass laws about how high you could build one.",
        "",
        "During the day, though, most of that crowd was outside.",
        "The baths cost about as much as a loaf of bread and everyone used them, senator and shopkeeper in the same water.",
        "The state handed out free grain to citizens, and put on chariot races and games that anyone could attend.",
        "A city where a lot of people have very little is a dangerous city, and Rome knew exactly what it was buying."
      ]
    },
    {
      title: "Not Now As A Servant",
      s: [
        "A letter survives from the middle of all this, written by the Apostle Paul to a man named Philemon.",
        "",
        "Philemon owned a slave called Onesimus, and Onesimus had run away.",
        "Under Roman law that was theft, the slave having stolen himself, and the owner could do very nearly anything he liked with a runaway who was returned to him.",
        "Paul is sending him back.",
        "",
        "And he asks Philemon to receive the man like this.",
        "",
        "[verse] Not now as a servant, but above a servant, a brother beloved, specially to me, but how much more unto thee, both in the flesh, and in the Lord.",
        "",
        "Read what he is doing there.",
        "He isn't arguing that Roman law is wrong about who owns whom.",
        "He is telling a slave owner that the man he owns is his brother, and asking him to act like it.",
        "",
        "Every layer in this lesson was about what a person was worth, decided by who his parents were, or by a war he lost.",
        "That letter measures the same man a different way."
      ]
    },
    {
      title: "So Who Was Free?",
      s: [
        "Go back and stand in that street.",
        "",
        "[ex] Who in that crowd was actually free?",
        "",
        "You can answer it properly now, and the answer has layers.",
        "The patrician was free and powerful, and he inherited both.",
        "The plebeian was free, and his ancestors had to walk out of the city to get the rest of it.",
        "The freedman was free, mostly, and still owed his old owner days of work.",
        "The slave was not free at all, and might still have been the only man on the street who could read Greek.",
        "",
        "Rome sorted people, and then spent its whole history arguing with its own sorting.",
        "That argument is not finished in this lesson, and it wasn't finished in Rome."
      ]
    }
  ],

  words: [
    ["Patrician", "A member of one of Rome's oldest noble families, whose power came from ancestry.", 10],
    ["Plebeian", "Any free Roman who was not a patrician, which was most of the city.", 17],
    ["Freedman", "A former slave who had been set free, holding most rights but not all of them.", 69],
    ["Peculium", "Money a slave was allowed to keep and use, often to buy his own freedom.", 65],
    ["Insula", "A Roman apartment block, where the higher floors were the poorest.", 84]
  ],

  findsAt: 113,

  questions: [
    { tag: "One Crowd, Four Worlds",
      q: "Why couldn't you tell a Roman's status by looking at him in the street?",
      find: [8, 9], hint: "The lesson gives a reason the Senate itself worried about.",
      choices: [
        "Rome never made slaves wear a uniform, partly so they could not see how many of them there were.",
        "Everyone in Rome wore an identical toga by law.",
        "Roman streets were too crowded to see anyone clearly.",
        "Status was marked only by a ring nobody wore in public."
      ], right: 0 },
    { tag: "Walking Out",
      q: "What does the plebeians leaving the city show about where their power came from?",
      find: [21, 23], hint: "Ask what stopped happening in Rome when they left.",
      choices: [
        "Rome could not function without the people who did its work, so refusing to work was leverage.",
        "They owned the city walls and could lock them.",
        "The patricians were afraid of them in a fight.",
        "They controlled the Senate's votes already."
      ], right: 0 },
    { tag: "The Doctor",
      q: "What made someone a slave in Rome?",
      find: [30, 31], hint: "The lesson answers it in four words, then explains them.",
      choices: [
        "Losing: captured in war, taken by pirates, or sold for a debt.",
        "Being born in a particular country.",
        "The color of his skin.",
        "Refusing to serve in the army."
      ], right: 0 },
    { tag: "Owned And Educated",
      q: "A Roman slave could be the family's doctor or the children's tutor. What does that tell you about Roman slavery?",
      find: [33, 38], hint: "Ask what it did NOT change about his position.",
      choices: [
        "Status had nothing to do with ability, and an educated slave was still owned.",
        "Educated slaves were legally free.",
        "Rome only enslaved people who could read.",
        "Doctors and tutors could not be bought or sold."
      ], right: 0 },
    { tag: "The Appian Way",
      q: "Why did Crassus line the road from Capua to Rome with crucified prisoners?",
      find: [60, 62], hint: "Ask who was meant to walk past and see it.",
      choices: [
        "To warn every other slave in Italy what rebellion would cost.",
        "To honor the dead of both armies.",
        "Because there was nowhere else to put them.",
        "To mark the boundary of Roman territory."
      ], right: 0 },
    { tag: "The Door",
      q: "How could a Roman slave become free?",
      find: [67, 68], hint: "There are two ways in the lesson, one of them his own doing.",
      choices: [
        "He could save a peculium and buy himself, or an owner could free him outright.",
        "He was freed automatically after ten years.",
        "Only by escaping to another country.",
        "A tribune could order any owner to release him."
      ], right: 0 },
    { tag: "The Son",
      q: "Why does the lesson say the freedman's son mattered more than the freedman?",
      find: [74, 75], hint: "Compare what the law held against each of them.",
      choices: [
        "The son was born free and a full citizen, with nothing held against him in law.",
        "The son inherited his father's former owner's estate.",
        "The son could not be enslaved for debt.",
        "Only the son was allowed to own property."
      ], right: 0 },
    { tag: "Brother Beloved",
      q: "What is Paul asking Philemon to do that Roman law did not require?",
      find: [101], hint: "Notice what Paul does NOT argue about.",
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
      "That is the reading done, and this one has a question running through the whole of it.",
      "{c} word cards sit at the top of the page, then {Q} questions, then {v} more about those words. {T} questions in all.",
      "While you answer them, keep asking what the lesson keeps asking: who in that crowd was actually free?",
      "Ask it about the patrician, about the plebeian, about the freedman, and about the doctor who was owned.",
      "If a question is hard, use the bar or the arrows to go back to the part it came from and read it again.",
      "The one worth slowing down on is the letter at the end.",
      "Paul doesn't tell Philemon that Roman law is wrong about who owns whom.",
      "He tells a slave owner that the man he owns is his brother, and asks him to act like it.",
      "Last, the word cards at the top and the check at the bottom of the page."
    ]
  }
};
