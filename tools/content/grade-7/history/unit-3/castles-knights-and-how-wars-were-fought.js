/* history/castles-knights-and-how-wars-were-fought
   Grade 7 · history · unit 3. Its home is this folder.
   Built by tools/build-lessons.js. Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-11-07. Written to the week 10-11 plan (U3-L4: Castles,
   Knights, and Warfare) and McDougal Littell World History: Medieval and Early Modern Times
   Ch9 Lesson 2 pp300-301 (The Age of Chivalry, Knighthood and Chivalry), via the week 10-11
   packet (paraphrased notes). Paul has not read it.

   🚨 THE SPINE IS THE BOOK'S: knights were vassals, lesser nobles, who fought for a lord in
   return for land. Lords settled quarrels by attacking each other and relied on knights,
   who were skilled horse riders and fighters. A knight was expected to live by chivalry, a
   code of honor: religious faith, a willingness to defend the Church, protecting women and
   the weak, fighting injustice and showing courage. Battles ranged from open-field
   skirmishes to attacks on castles. To take a castle, lords and knights used battering rams
   and catapults, or put it under siege, cutting off food and supplies to starve the people
   inside until they surrendered. A picture of a suit of armor shows air holes for breathing,
   body armor and flexible gloves for handling a sword, and an average suit weighed about
   65 pounds.

   ⚠️ ADDED FROM THE RECORD (the book's notes give nothing on a knight's training or on how
   castles were built). Each is well known and no real person, date or quote is named:
   · The path to knighthood: page (about 7), squire (about 14), knight (about 21), with a
     ceremony called dubbing. The ages are "about", because they varied.
   · Tournaments as practice for war.
   · Castles: early ones of wood on a mound (motte-and-bailey), later stone keeps with
     curtain walls, towers, a moat, a drawbridge and a gatehouse.
   · What each defense did, and that a castle kept food and a well inside to outlast a siege.

   ⚠️ THE PEOPLE ARE INVENTED (Sir Aldric as a boy, Lord Hugh and Lord Odo in the siege),
   labelled "imagine", the same invented world as U3-L1 to U3-L3. Not real people.

   ⚠️ The Church's power is U3-L5. "Defend the Church" is stated here exactly as the book
   states it, as part of the code, with no judgment on it.

   🚨 THE VERSE IS A WORKING CHOICE, NOT PAUL'S. Psalm 18:2, the Lord as a fortress. */
'use strict';
const table = (rows) => {
  const n = rows[0].length, w = [];
  for (let i = 0; i < n; i++) w[i] = Math.max(...rows.map((r) => [...r[i]].length)) + 2;
  const line = (l, m, r) => l + w.map((x) => "─".repeat(x)).join(m) + r;
  const row = (r) => "│" + r.map((c, i) => " " + c + " ".repeat(w[i] - 1 - [...c].length)).join("│") + "│";
  return [line("┌", "┬", "┐"), row(rows[0]), line("├", "┼", "┤")]
    .concat(rows.slice(1).map(row), [line("└", "┴", "┘")]).join("\n");
};
const PATH = [
  ["Stage", "About age", "His job"],
  ["Page", "7", "Serves in a lord's house"],
  ["Squire", "14", "Cares for a knight's horse and armor"],
  ["Knight", "21", "Fights for his lord"],
];
const PARTS = [
  ["Part of a castle", "What it did"],
  ["Curtain wall", "A thick stone wall all around"],
  ["Moat", "A water-filled ditch around the wall"],
  ["Drawbridge", "A bridge that could be raised"],
  ["Gatehouse", "A strong building guarding the gate"],
  ["Towers", "Let archers shoot at attackers"],
  ["Keep", "The strongest tower, a last refuge"],
];
const WAR = [
  ["Attackers used", "Defenders answered with"],
  ["A battering ram", "A thick gate, the drawbridge raised"],
  ["A catapult", "Thick stone walls"],
  ["A siege", "Food and a well stored inside"],
];
module.exports = {
  id: "history/castles-knights-and-how-wars-were-fought",
  slug: "castles-knights-and-how-wars-were-fought",
  title: "Castles, Knights, and How Wars Were Fought",
  unit: "World History &middot; U3-L4",
  seq: { unit: 3, unitTitle: "Life Under Feudalism", n: 4 },
  natural: "2026-11-07",
  eyebrow: "World History",
  dek: "A boy became a knight in three steps over fourteen years, lived by a code, and fought from behind stone walls. How knights trained, why castles were built, and how they were attacked.",
  plan: {
    objective: "Describe how a boy became a knight, what chivalry asked of him, how a castle was built to defend, and how a castle was attacked in a siege.",
    markers: [
      "McDougal Ch9 Lesson 2 p300 (paraphrased): knights were vassals, lesser nobles who fought on behalf of lords in return for land. Lords settled quarrels by attacking each other and relied on knights, who were skilled horse riders and fighters.",
      "McDougal p301 (paraphrased): knights were expected to live by chivalry, a code of honor: religious faith, a willingness to defend the Church, protecting women and the weak, fighting injustice and showing courage.",
      "McDougal p301 (paraphrased): battles ranged from skirmishes to attacks on castles. Lords and knights used battering rams and catapults, and often put a castle under siege, keeping food and supplies out to starve the people inside until they surrendered. An average suit of armor weighed about 65 pounds.",
      "ADDED FROM THE RECORD: page, squire, knight and dubbing; tournaments; how castles were built. See the header.",
    ],
    method: "FOLLOW THE KNIGHT AND THE CASTLE. THE KNIGHT TRAINS IN THREE STEPS AND LIVES BY A CODE, AND THE CASTLE IS BUILT PIECE BY PIECE TO ANSWER EACH WAY AN ATTACKER COULD COME.",
    exampleOnly: [
      "Sir Aldric as a boy, and Lord Hugh and Lord Odo in a siege, all invented, in the same invented world as U3-L1 to U3-L3. WORLD: western Europe around the year 900. The title and objective don't name it.",
      "⚠️ The training, the tournaments and the castle parts are added from the record. See the header.",
    ],
    digitize: "The reading engine and four Watch It Worked tables or walks: the path from page to knight, the parts of a castle, attackers against defenders, and a siege told day by day. Questions ask the order of the path, what chivalry asked, what each part of a castle did, and what a siege was.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "History",
    blurb: "A boy became a knight in three steps, lived by a code, and fought from behind stone walls. How knights trained, how castles were built, and what a siege was.",
    contains: [
      "A reading that follows a boy from page to squire to knight",
      "The code of chivalry, as the book gives it",
      "A table of the parts of a castle and a table of attackers against defenders",
      "A siege told day by day",
      "Six word cards, each with a check question",
    ] },
  scripture: {
    ref: "Psalm 18:2",
    text: "The LORD is my rock, and my fortress, and my deliverer; my God, my strength, in whom I will trust; my buckler, and the horn of my salvation, and my high tower.",
  },
  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will describe the path from page to squire to knight, say what chivalry asked of a knight, name the main parts of a castle and what each did, and explain how a castle was attacked and how a siege worked."
      ]},
      { h: "Where Students Get Stuck", p: [
        "Thinking every knight lived by chivalry. The code says what a knight was expected to do, and the lesson never says every knight did it.",
        "Mixing up a siege and an assault. A siege waits and starves the people inside, and a battering ram or a catapult attacks the walls directly."
      ]},
      { h: "Added From the Record", p: [
        "The book names knights, chivalry, battering rams, catapults and sieges, but its notes give nothing on how a boy trained or how castles were built. The lesson adds the page, squire and knight steps, tournaments and the parts of a castle from the historical record. The ages are marked about, because they varied.",
        "Sir Aldric as a boy, Lord Hugh and Lord Odo are invented, and the text calls them that."
      ]},
      { h: "Book Pages", p: [
        "McDougal Littell World History: Medieval and Early Modern Times (2006), pages 300 and 301. Read free on archive.org: https://archive.org/details/worldhistorymedi00houg/page/300/mode/1up"
      ]},
      { h: "Suggested Videos", videos: [
        { id: "GZJq_ewtqZ4", title: "Knights, Castles, and Chivalry Medieval Age", channel: "School Subjects Online",
          why: "Covers chivalry and knights, which match the book's lesson." },
        { id: "Zh4bg_JMxAk", title: "Journey to the MIDDLE AGES! Kings, Castles, Knights, and Medieval Villages", channel: "Smile and Learn - English",
          why: "A kid-level tour of the whole period, good for a second look at castles." }
      ]},
      { h: "Key Vocabulary", vocab: true },
      { h: "Where This Goes Next", p: [
        "U3-L5 looks at the Church, the other great power of the age, and U3-L6 follows the towns that grew once the fighting calmed."
      ]}
    ]
  },

  parts: [
    { title: "A Boy Sent Away", s: [
      "Imagine Sir Aldric at the age of seven, standing in Lord Hugh's yard with a small bundle, because his father has just sent him away to learn to be a knight.",
      "He won't see home for a long time, and he'll spend the next fourteen years learning how to ride, how to fight and how to behave.",
      "That is the path almost every knight followed, and the reason it was so long is that knights were the most important fighters a lord had.",
      "This lesson follows that path, then the code a knight lived by, then the castle he defended, and last the way castles were attacked."
    ]},

    { title: "Why Lords Needed Knights", s: [
      "According to the book, lords settled their quarrels by attacking each other, so a lord needed fighters he could count on.",
      "A knight was a vassal who fought for a lord in return for land, and you know that deal from the last two lessons.",
      "Knights were skilled horse riders and skilled fighters, which meant a lord with good knights could win battles and keep his land safe.",
      "A knight like that didn't appear overnight, so the next section shows how a boy became one."
    ]},

    { title: "From Page to Knight", s: [
      "A boy who wanted to be a knight started as a page at about seven, when he went to live in a lord's house and served there.",
      "At about fourteen he became a {{squire}}, the helper of one knight, who took care of his horse and armor and rode with him to battle.",
      "At about twenty-one, if he had done well, he was made a knight in a ceremony called dubbing, where the lord touched him on the shoulder with a sword.",
      "Knights also practiced in tournaments, which were mock battles held for sport and training.",
      "",
      "[walk] The path from page to knight.",
      "[step] Read down the table from the youngest stage to the oldest, with the age on the left and the job on the right. || " + table(PATH),
      "",
      "Notice that the whole path took about fourteen years, which is why a trained knight was so valuable to a lord.",
      "Along the way he also learned good manners, because a knight was expected to behave well in a lord's hall as well as fight well on a field."
    ]},

    { title: "The Code of a Knight", s: [
      "A knight was expected to live by {{chivalry}}, which is a code of honor.",
      "The code asked a knight to have religious faith, to defend the Church, to protect women and the weak, to fight injustice and to show courage.",
      "Those were the book's five parts, and they are what a good knight was supposed to do, not what every knight actually did.",
      "Notice that most of the code is about protecting other people, which fits the knight's job as the lord's defender."
    ]},

    { title: "Built to Be Defended", s: [
      "Knights fought in the open, but a lord's greatest safety was a castle, and early castles were wooden towers on a mound of earth.",
      "Later builders used stone, which couldn't be burned down, and each part of a stone castle was there to answer one way an attacker might come.",
      "A thick curtain wall ran all the way around, a {{moat}} of water circled the wall, and the only way in was a gatehouse with a drawbridge that could be raised.",
      "Archers shot from the towers, and in the middle stood the keep, the strongest tower and the last place to hide.",
      "",
      "[walk] The parts of a castle.",
      "[step] Read down the list, with the part on the left and what it did on the right. || " + table(PARTS),
      "",
      "Notice that no single part kept the castle safe, and it was the parts working together that did it.",
      "Take away the moat and the walls were easier to reach, and take away the walls and the keep stood alone."
    ]},

    { title: "How a Castle Was Attacked", s: [
      "Battles ranged from small fights in an open field to attacks on castles, and a castle was the hardest thing to take.",
      "Lords and knights used a {{battering ram}}, which was a heavy log swung against the gate, and a {{catapult}}, which was a machine that threw heavy stones at the walls.",
      "Often the attackers did something simpler, which was to put the castle under {{siege}}, keeping food and supplies from getting in so the people inside would starve until they surrendered.",
      "",
      "[walk] Each attack and the defense that answered it.",
      "[step] Read across each row, with what the attackers tried on the left and how the castle answered on the right. || " + table(WAR),
      "",
      "Notice that each way of attacking had an answer built into the castle, which is why sieges could last so long.",
      "Only the siege was answered with stored supplies and not with stone, which is why food mattered as much as walls."
    ]},

    { title: "A Siege, Day by Day", s: [
      "Now watch a siege in an invented war, where Lord Odo's army surrounds Lord Hugh's castle.",
      "Watch what each attack tries and what each part of the castle does about it.",
      "",
      "[walk] A siege of Lord Hugh's castle.",
      "[step] On the first day Odo's men push a battering ram against the gate, but the gate is thick and the drawbridge is up, so it holds. || DAY 1: ram at the gate\nRESULT: the gate holds",
      "[step] A week later his catapults throw stones at the walls, but the walls are thick stone, and archers in the towers keep his men back. || DAY 7: catapult stones\nRESULT: the walls hold",
      "[step] So Odo settles in to wait, and nobody can bring food in, while inside the castle the people eat from the stores and a well. || WEEK 3: Odo waits\nINSIDE: food and water, but only so much",
      "[step] Weeks later the food runs low, and the people inside must either surrender or hope help comes. || WEEK 8: the stores run out\nTHE END: surrender, unless help arrives",
      "",
      "Notice that the walls were never broken, and the siege won anyway because hunger beats a thick wall.",
      "The book adds one more picture, a suit of armor with air holes to breathe through and flexible gloves for handling a sword, and an average suit weighed about 65 pounds."
    ]},

    { title: "A Strong Tower", s: [
      "Go back to the boy in Lord Hugh's yard, who by twenty-one had learned to ride, to fight and to guard a castle.",
      "By then he knew the three things this lesson covered, which were how a knight trains, how a castle defends and how a castle is attacked.",
      "",
      "[verse] Psalm 18:2 says, “The LORD is my rock, and my fortress, and my deliverer; my God, my strength, in whom I will trust; my buckler, and the horn of my salvation, and my high tower.”",
      "",
      "The writer was a man who knew what a fortress was for, and he used one to describe where his real safety lay.",
      "The next lesson leaves the fighting behind and looks at the other great power of the age, the Church."
    ]}
  ],

  words: [
    ["Squire", "A young man in training who cared for a knight's horse and armor and rode with him to battle.", 9],
    ["Chivalry", "A knight's code of honor.", 16],
    ["Moat", "A water-filled ditch around a castle wall.", 22],
    ["Battering ram", "A heavy log swung against a castle gate.", 29],
    ["Catapult", "A machine that threw heavy stones at walls.", 29],
    ["Siege", "Keeping food and supplies out of a castle to starve the people inside until they surrender.", 30]
  ],

  findsAt: 49,
  questions: [
    { tag: "The Knight", q: "Why did lords need knights?", find: [4],
      hint: "Read Why Lords Needed Knights.",
      choices: [
        "Because lords settled quarrels by attacking each other, and knights were skilled fighters",
        "Because knights farmed the lord's land",
        "Because knights collected taxes",
        "Because knights built castles"
      ], right: 0 },

    { tag: "The Knight", q: "Which is the correct order for a boy training to be a knight?", find: [8],
      hint: "Read From Page to Knight.",
      choices: [
        "Knight, squire, page",
        "Squire, page, knight",
        "Page, squire, knight",
        "Page, knight, squire"
      ], right: 2 },

    { tag: "The Knight", q: "What was a squire?", find: [9],
      hint: "Read From Page to Knight.",
      choices: [
        "A lord's cook",
        "A young man who helped a knight and cared for his horse and armor",
        "A knight who had retired",
        "A guard at the castle gate"
      ], right: 1 },

    { tag: "The Code", q: "Which of these did the code of chivalry NOT ask of a knight?", find: [18],
      hint: "Read The Code of a Knight.",
      choices: [
        "To show courage",
        "To protect women and the weak",
        "To fight injustice",
        "To take any land he wanted"
      ], right: 3 },

    { tag: "The Code", q: "What was chivalry?", find: [16],
      hint: "Read The Code of a Knight.",
      choices: [
        "A knight's code of honor",
        "A kind of armor",
        "A tournament game",
        "A tax a knight paid"
      ], right: 0 },

    { tag: "The Castle", q: "What was the job of the moat?", find: [22],
      hint: "Read Built to Be Defended.",
      choices: [
        "To hold the castle's food",
        "To circle the wall with water and keep attackers back",
        "To let archers shoot",
        "To raise the bridge"
      ], right: 1 },

    { tag: "The Castle", q: "Why did builders switch from wood castles to stone ones?", find: [21],
      hint: "Read Built to Be Defended.",
      choices: [
        "Stone looked prettier.",
        "Stone couldn't be burned down.",
        "Stone was cheaper than wood.",
        "Stone made the moat unnecessary."
      ], right: 1 },

    { tag: "The Attack", q: "What was a battering ram used for?", find: [29],
      hint: "Read How a Castle Was Attacked.",
      choices: [
        "To throw stones over the wall",
        "To swing against the castle gate",
        "To dig the moat",
        "To carry food into the castle"
      ], right: 1 },

    { tag: "The Attack", q: "What was a siege?", find: [30],
      hint: "Read How a Castle Was Attacked.",
      choices: [
        "A tournament held for sport",
        "A knight's ceremony",
        "Keeping food and supplies out of a castle so the people inside starve until they surrender",
        "A kind of armor"
      ], right: 2 },

    { tag: "The Attack", q: "In the invented siege, why did Lord Odo win even though his ram and catapults failed?", find: [42],
      hint: "Read A Siege, Day by Day.",
      choices: [
        "His archers were better.",
        "The walls fell down by themselves.",
        "The food ran out, and hunger beat the thick walls.",
        "Lord Hugh's drawbridge broke."
      ], right: 2 }
  ],

  vocabQuestions: [
    { q: "Who was a <i>squire</i>?",
      choices: ["A young man who helped a knight and cared for his horse and armor", "A king", "A serf", "A bishop"], right: 0 },
    { q: "What was <i>chivalry</i>?",
      choices: ["A type of castle", "A knight's code of honor", "A kind of tax", "A battle"], right: 1 },
    { q: "What was a <i>moat</i>?",
      choices: ["A water-filled ditch around a castle wall", "A tower", "A drawbridge", "A suit of armor"], right: 0 },
    { q: "What was a <i>battering ram</i>?",
      choices: ["A sheep", "A heavy log swung against a gate", "A kind of arrow", "A water pipe"], right: 1 },
    { q: "What was a <i>catapult</i>?",
      choices: ["A machine that threw heavy stones at walls", "A castle gate", "A knight's horse", "A shield"], right: 0 },
    { q: "What was a <i>siege</i>?",
      choices: ["A feast", "Keeping food out of a castle to starve the people inside", "A parade", "A ceremony"], right: 1 }
  ],

  todo: { title: "What To Do Now", s: [
      "A seven-year-old with a small bundle standing in a lord's yard is where this lesson began, and the questions ask how he became a knight and how castles were built and attacked.",
      "{c} word cards sit at the top of the page, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "None of them asks for a date, so read for the order of the steps, the parts of a castle and what each attack was.",
      "If the castle tables get tangled, read Built to Be Defended again and say what each part did out loud."
  ] }
};
