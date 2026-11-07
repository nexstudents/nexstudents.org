/* history/the-manor-the-peasant-and-the-plough
   Grade 7 · history · unit 3. Its home is this folder.
   Built by tools/build-lessons.js. Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-11-07. Written to the week 10-11 plan (U3-L3: Manors,
   Peasants, and Agricultural Change) and McDougal Littell World History: Medieval and Early
   Modern Times Ch9 Lesson 2 pp299-300 (the manor system) and the Daily Life spread
   pp304-305 (Life on a Medieval Manor), via the week 10-11 packet (paraphrased notes).
   Paul has not read it.

   🚨 THE SPINE IS THE BOOK'S: with warfare, no strong central governments and little trade,
   noble lands became the center of economic activity. The main part of a noble's land was a
   manor, with the lord's house (often fortified, sometimes a castle) at the center and
   mostly farmland around it. Rain, mild temperatures, streams and lakes meant the land
   supplied nearly everything the manor needed, so manors were worlds unto themselves. Serfs
   farmed the land, were "bound to the soil" and stayed if a new lord took the land. From the
   Daily Life spread: serfs farmed every day except Sundays and holy days and gave most of
   what they grew to the lord; the lord's family lived in a large, often stone house with big
   dinners; a serf lived in a small damp hut of wood and mud, dirt floor, one bed of leaves
   or straw, cooking over a fire on the floor, eating stew and stale bread; lords hunted and
   serfs played simple games such as knucklebones.

   ⚠️ ADDED FROM THE RECORD (the book's notes say it has no heavy plow and no three-field
   system). Each is a well-known, uncontroversial fact and no real person, date or quote is
   named:
   · The parts of a manor: manor house, church, village, mill, oven, fields in strips, common
     pasture and woods.
   · What a serf owed: work days on the lord's own land, a share of his crop, and fees to use
     the mill and oven. What he had: a hut, strips of land of his own to farm, protection.
   · The heavy wheeled plow with an iron blade, pulled by oxen, for the heavy soil of northern
     Europe, compared with the older light plow that only scratched the surface.
   · The two-field system (one half rests) and the three-field system (one field for a fall
     crop such as wheat or rye, one for a spring crop such as oats, barley or peas, and one
     fallow), rotating each year, so only a third rests instead of half. The 90-acre manor in
     the walk is an invented example: 45 planted under two fields, 60 under three.

   ⚠️ THE VILLAGE AND ITS PEOPLE ARE INVENTED (Sir Aldric's manor and Wat the serf, the same
   invented world as U3-L1 and U3-L2), labelled "imagine" in the text, not real people.

   ⚠️ SPELLING: THE TITLE SAYS "Plough" (Paul's fixed title, kept as given). Everything the
   reader sees in the prose uses the American "plow". check-spelling.js has no entry for
   "plough" so it does not fail; flagged for Paul.

   🚨 THE VERSE IS A WORKING CHOICE, NOT PAUL'S. Exodus 23:10-11, the land lying fallow.
   ⚠️ The Gtm1waaEPuk video is from an ag-supply channel and was not watched. Preview it. */
'use strict';
const table = (rows) => {
  const n = rows[0].length, w = [];
  for (let i = 0; i < n; i++) w[i] = Math.max(...rows.map((r) => [...r[i]].length)) + 2;
  const line = (l, m, r) => l + w.map((x) => "─".repeat(x)).join(m) + r;
  const row = (r) => "│" + r.map((c, i) => " " + c + " ".repeat(w[i] - 1 - [...c].length)).join("│") + "│";
  return [line("┌", "┬", "┐"), row(rows[0]), line("├", "┼", "┤")]
    .concat(rows.slice(1).map(row), [line("└", "┴", "┘")]).join("\n");
};
const PARTS = [
  ["Part of the manor", "What it was for"],
  ["Manor house", "Where the lord's family lived"],
  ["Village", "Where the serfs' huts stood"],
  ["Church", "Where the village worshiped"],
  ["Mill", "Grinding grain into flour"],
  ["Oven", "Baking the bread"],
  ["Strips of field", "The farmland"],
  ["Common pasture", "Grass for everyone's animals"],
  ["Woods", "Wood for fires and building"],
];
const HOMES = [
  ["", "Manor house", "Serf's hut"],
  ["Built of", "Stone, often", "Wood and mud"],
  ["Inside", "Comfortable rooms", "Dirt floor, damp"],
  ["Bed", "A proper bed", "Leaves or straw"],
  ["Food", "Big dinners, meats", "Stew, stale bread"],
  ["Fun", "Hunting", "Knucklebones"],
];
const DUES = [
  ["Wat owed", "Wat got"],
  ["Work on the lord's land", "A hut to live in"],
  ["A share of his crop", "Strips of land to farm"],
  ["Fees for mill and oven", "The lord's protection"],
];
const ROTATE = [
  ["", "Field A", "Field B", "Field C"],
  ["Year 1", "Fall crop", "Spring crop", "Rests"],
  ["Year 2", "Spring crop", "Rests", "Fall crop"],
  ["Year 3", "Rests", "Fall crop", "Spring crop"],
];
module.exports = {
  id: "history/the-manor-the-peasant-and-the-plough",
  slug: "the-manor-the-peasant-and-the-plough",
  title: "The Manor, the Peasant, and the Plough",
  unit: "World History &middot; U3-L3",
  seq: { unit: 3, unitTitle: "Life Under Feudalism", n: 3 },
  natural: "2026-11-07",
  eyebrow: "World History",
  dek: "A medieval manor made nearly everything it needed. What was inside one, how serfs lived on it, and how a heavy plow and three fields grew more food.",
  plan: {
    objective: "Describe how a manor worked as a self-sufficient world, what serfs owed and got, and how the heavy plow and the three-field system let manors grow more food.",
    markers: [
      "McDougal Ch9 Lesson 2 p299 (paraphrased): with warfare and little trade, noble lands became the center of economic activity. The main part of a noble's land was a manor, with the lord's house at the center and mostly farmland around it.",
      "McDougal p299-300 (paraphrased): the land supplied nearly everything the manor needed. Serfs farmed the land and were bound to the soil, so they stayed when a new lord took it. Manors became worlds unto themselves.",
      "McDougal pp304-305 Daily Life (paraphrased): serfs farmed every day except Sundays and holy days and gave most of their crop to the lord; the lord lived in a large, often stone house, a serf in a damp hut of wood and mud; lords hunted and serfs played knucklebones.",
      "ADDED FROM THE RECORD: the parts of a manor, what serfs owed, the heavy plow and the three-field system. See the header.",
    ],
    method: "FOLLOW THE FOOD. THE MANOR MADE IT, THE SERFS GREW IT, AND TWO CHANGES, A BETTER PLOW AND THREE FIELDS INSTEAD OF TWO, MADE MORE OF IT.",
    exampleOnly: [
      "Sir Aldric's manor and Wat the serf, invented, in the same invented village as U3-L1 and U3-L2. WORLD: western Europe around the year 900. The title and objective don't name it.",
      "⚠️ The plow and the three fields are added from the record. See the header.",
    ],
    digitize: "The reading engine and four Watch It Worked tables (the parts of a manor, two homes, what Wat owed and got, the three-year rotation), plus a short count of acres. Questions ask what the manor was, why it was self-sufficient, how the homes differed, what a serf owed, and what each change did.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "History",
    blurb: "A medieval manor made almost everything its people needed. Who lived there, what a serf owed and got, and the plow and three fields that grew more food.",
    contains: [
      "A reading about the manor as a world of its own",
      "A table of the parts of a manor and one comparing a manor house to a serf's hut",
      "What Wat the serf owed and what he got",
      "The heavy plow and the three-field system, with a three-year rotation and a count of acres",
      "Five word cards, each with a check question",
    ] },
  scripture: {
    ref: "Exodus 23:10-11",
    text: "And six years thou shalt sow thy land, and shalt gather in the fruits thereof: But the seventh year thou shalt let it rest and lie still; that the poor of thy people may eat: and what they leave the beasts of the field shall eat.",
  },
  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will describe a manor and why it was self-sufficient, say what a serf owed and what he got, compare a manor house with a serf's hut, and explain how the heavy plow and the three-field system grew more food."
      ]},
      { h: "Where Students Get Stuck", p: [
        "Thinking fallow means wasted. A fallow field is resting so the soil can recover, and the three-field system rests a third of the land instead of half.",
        "Mixing up the two fields in the rotation table. Read down one column at a time, and each field goes fall crop, then spring crop, then rest."
      ]},
      { h: "Added From the Record", p: [
        "The book describes the manor, the serfs and daily life, but its notes show no heavy plow and no three-field system. The lesson adds those, the parts of a manor, and the dues a serf paid, from the historical record. The 90-acre manor in the count is invented to show the arithmetic.",
        "Sir Aldric, Wat and the village are invented, and the text calls them that. The title keeps the spelling Plough as given, and the prose says plow."
      ]},
      { h: "Book Pages", p: [
        "McDougal Littell World History: Medieval and Early Modern Times (2006), pages 299 and 300, and the Daily Life pages 304 and 305. Read free on archive.org: https://archive.org/details/worldhistorymedi00houg/page/299/mode/1up"
      ]},
      { h: "Suggested Videos", videos: [
        { id: "4o6wnbgi6bg", title: "Serfs and manorialism | World History | Khan Academy", channel: "Khan Academy",
          why: "Explains how a manor was organized and what serfdom meant." },
        { id: "Gtm1waaEPuk", title: "How the Three Field System Revolutionized Medieval Farming!", channel: "I&B Ag Supply",
          why: "Shows the three-field system, which the book doesn't cover. It's from an ag-supply company's channel, so preview it first." }
      ]},
      { h: "Key Vocabulary", vocab: true },
      { h: "Where This Goes Next", p: [
        "U3-L4 goes from the manor to the castle and to the knights who protected it."
      ]}
    ]
  },

  parts: [
    { title: "A World You Never Had to Leave", s: [
      "Imagine a place where your bread, your cloth, the wood for your fire and even the church you pray in were all within an hour's walk of your front door, and where you could live your whole life without going farther.",
      "That was the world of a medieval {{manor}}, the main part of a noble's land, with the lord's house at the center and farmland all around it.",
      "It mattered because there were no strong governments to keep the roads safe and very little trade, so each noble's land had to make almost everything its people needed.",
      "In the invented village from the first two lessons, the manor belongs to Sir Aldric, and Wat the serf lives and works on it."
    ]},

    { title: "What Was Inside a Manor", s: [
      "A manor was a small world with its own parts, and each part had one job.",
      "Picture the manor as a village with a big house in the middle, and look at what stood around it.",
      "The lord's house stood at the center, often a fortified building, and around it were the village where the serfs lived, a church, a mill for grinding grain and an oven for baking.",
      "Beyond the village lay the fields, which were divided into long strips, then a common pasture where everybody's animals grazed, and the woods that gave wood for fires and for building.",
      "Because the manor made nearly everything it needed, it was {{self-sufficient}}, which means able to supply its own needs without help from outside.",
      "",
      "[walk] The parts of a manor.",
      "[step] Read down the list, with each part on the left and its job on the right. || " + table(PARTS),
      "",
      "Notice that nothing on the list had to come from far away, which is exactly what self-sufficient means.",
      "Each part depended on the others, and together they let the manor get by without much help from outside."
    ]},

    { title: "Why Nobody Needed to Leave", s: [
      "Geography helped, because the rain and mild weather were good for crops, and the streams and lakes gave fresh water and fish.",
      "The land provided nearly everything the manor needed, so farming, woodworking and even wine making all happened right there.",
      "That meant the people almost never had to leave, and a serf who was bound to the soil stayed on the land even when a new lord took it over.",
      "So the manor became a world unto itself, and the next section looks at the two kinds of people who lived in that world."
    ]},

    { title: "Two Houses on One Manor", s: [
      "Two kinds of people lived side by side on a manor, the lord's family in the manor house and the serfs in the village.",
      "The lord's house was large and often made of stone, with comfortable rooms and big dinners with many kinds of meat.",
      "A serf's home was a small hut of wood and mud, damp, with a dirt floor, a single bed of leaves or straw, and a fire on the floor for cooking, and the meals were stew and stale bread.",
      "For fun the lords went hunting, while serfs played simple games such as knucklebones, which is played with small animal bones the way you might play marbles.",
      "",
      "[walk] The two homes side by side.",
      "[step] Read across each row, to compare the manor house on the left with the serf's hut on the right. || " + table(HOMES),
      "",
      "Notice that both homes stood on the same manor and were as different as two homes could be.",
      "The lord's family and the serfs shared the same land, yet they lived in what were almost two different worlds."
    ]},

    { title: "What Wat Owed and What He Got", s: [
      "Serfs worked the land every day except Sundays and holy days, and they handed over most of what they grew to the lord.",
      "Besides the crop, a serf paid in work and in small fees, so Wat spent set days working Sir Aldric's own fields, gave a share of his crop, and paid to use the lord's mill and oven.",
      "In return he had a hut to live in, strips of land to farm for his own family, and the lord's protection.",
      "",
      "[walk] Wat's side of the deal.",
      "[step] Read across each row, with what Wat owed on the left and what he got on the right. || " + table(DUES),
      "",
      "Notice that Wat's side of the deal was far heavier than the lord's, and he couldn't leave it, because he was bound to the soil.",
      "In return he got a hut, strips of land and the lord's protection, and that was the whole of his side of the deal."
    ]},

    { title: "A Better Plow", s: [
      "Farming was the heart of the manor, so anything that grew more food mattered, and two changes did exactly that.",
      "The first was a better {{plow}}, because in the heavy, wet soil of northern Europe the old light plow only scratched the surface.",
      "The heavy wheeled plow had an iron blade that cut deep and turned the soil over, and it was pulled by a team of oxen, which are strong cattle trained to pull.",
      "Soil turned that deep drained better and grew better crops, so the same land fed more people."
    ]},

    { title: "Three Fields Instead of Two", s: [
      "The second change was how the land was used, because soil wears out if you plant the same crop in it year after year, so some land has to rest.",
      "Land that rests for a year with nothing planted is called {{fallow}}, and for a long time a manor's land was split in two, with one half planted and the other half fallow.",
      "Then farmers began splitting it into three fields, which is the {{three-field system}}, with one field for a fall crop, one for a spring crop and one left to rest.",
      "Each year the jobs rotate, so a field that grew a fall crop one year grows a spring crop the next and then rests.",
      "",
      "[walk] The rotation over three years.",
      "[step] Read down each column, and notice that every field goes fall crop, then spring crop, then rest. || " + table(ROTATE),
      "",
      "Now count what that gained, using an invented manor with ninety acres of fields.",
      "The numbers are made up so the arithmetic is easy, but the idea is the same on any manor.",
      "",
      "[walk] Count the acres on a ninety-acre manor.",
      "[step] With two fields, half rests, so half of ninety is forty-five acres planted. || 90 / 2 = 45 acres planted",
      "[step] With three fields, a third rests, so thirty acres rest and sixty are planted. || 90 / 3 = 30 acres resting\n90 - 30 = 60 acres planted",
      "[step] Subtract to find the gain, which is fifteen more acres of food every year. || 60 - 45 = 15 more acres",
      "",
      "Fifteen more acres on forty-five is a third more land growing food, and all it cost was changing how the fields were used."
    ]},

    { title: "Land That Gets to Rest", s: [
      "Go back to the manor that needed nothing from outside, where the heavy plow and the three fields let it feed more people than before.",
      "Wat still worked every day except Sundays and holy days, but now the same land gave more bread to go around.",
      "",
      "[verse] Exodus 23:10-11 says, “And six years thou shalt sow thy land, and shalt gather in the fruits thereof: But the seventh year thou shalt let it rest and lie still; that the poor of thy people may eat: and what they leave the beasts of the field shall eat.”",
      "",
      "That law was written long before the Middle Ages, but it shows the same old idea behind the three-field system, which is that land does better when it gets time to rest.",
      "The next lesson goes from the manor to the castle, and to the knights whose job was to protect it."
    ]}
  ],

  words: [
    ["Manor", "The main part of a noble's land, with the lord's house at the center and farmland around it.", 1],
    ["Self-sufficient", "Able to supply its own needs without help from outside.", 8],
    ["Plow", "A farming tool that cuts the soil and turns it over.", 33],
    ["Fallow", "Land left to rest for a year with nothing planted.", 37],
    ["Three-field system", "Splitting the land into three fields, with a fall crop, a spring crop and one resting each year.", 38]
  ],

  findsAt: 54,
  questions: [
    { tag: "The Manor", q: "What was a manor?", find: [1],
      hint: "Read A World You Never Had to Leave.",
      choices: [
        "The main part of a noble's land, with the lord's house at the center and farmland around it",
        "A small castle with no land",
        "A kind of church",
        "A market in the middle of a town"
      ], right: 0 },

    { tag: "The Manor", q: "Why did a manor have to make nearly everything its people needed?", find: [2],
      hint: "Read A World You Never Had to Leave.",
      choices: [
        "Because there was little trade and no strong government to keep the roads safe",
        "Because serfs refused to buy anything",
        "Because lords did not like markets",
        "Because the king ordered it"
      ], right: 0 },

    { tag: "The Manor", q: "Which of these was NOT a part of a manor?", find: [7],
      hint: "Read What Was Inside a Manor.",
      choices: [
        "A mill for grinding grain",
        "A common pasture",
        "A church in the village",
        "A harbor with trading ships"
      ], right: 3 },

    { tag: "The Manor", q: "What does it mean that a serf was bound to the soil?", find: [15],
      hint: "Read Why Nobody Needed to Leave.",
      choices: [
        "He could move to any manor he liked.",
        "He was buried in the soil.",
        "He stayed on the land, even when a new lord took it over.",
        "He owned the soil he farmed."
      ], right: 2 },

    { tag: "Two Houses", q: "Which sentence compares the two homes correctly?", find: [19],
      hint: "Read Two Houses on One Manor.",
      choices: [
        "Both were made of stone, but the serf's was smaller.",
        "The lord's house was often stone with big dinners, and the serf's was a damp hut with stew and stale bread.",
        "The serf's home was warmer than the lord's.",
        "Both homes had the same food."
      ], right: 1 },

    { tag: "Wat", q: "Which of these did Wat owe Sir Aldric?", find: [26],
      hint: "Read What Wat Owed and What He Got.",
      choices: [
        "A hut to live in",
        "The lord's protection",
        "A fief of his own",
        "Work on the lord's land, a share of his crop, and fees for the mill and oven"
      ], right: 3 },

    { tag: "Farming", q: "Why did the heavy wheeled plow work better in northern Europe than the old light plow?", find: [34],
      hint: "Read A Better Plow.",
      choices: [
        "It cut deep and turned over the heavy, wet soil",
        "It was lighter, so one man could carry it",
        "It did not need any animals",
        "It only scratched the surface"
      ], right: 0 },

    { tag: "Farming", q: "What does it mean for a field to lie fallow?", find: [37],
      hint: "Read Three Fields Instead of Two.",
      choices: [
        "It is planted twice in one year.",
        "It rests for a year with nothing planted.",
        "It is covered with water.",
        "It is given to the church."
      ], right: 1 },

    { tag: "Farming", q: "In the three-field system, what did a field that grew a fall crop one year do the next year?", find: [39],
      hint: "Read Three Fields Instead of Two.",
      choices: [
        "It rested.",
        "It grew another fall crop.",
        "It grew a spring crop.",
        "It was given to the lord."
      ], right: 2 },

    { tag: "Farming", q: "On the invented ninety-acre manor, how many more acres were planted each year with three fields than with two?", find: [47],
      hint: "Read the count of acres.",
      choices: [
        "Five more acres",
        "Fifteen more acres",
        "Thirty more acres",
        "Forty-five more acres"
      ], right: 1 }
  ],

  vocabQuestions: [
    { q: "What was a <i>manor</i>?",
      choices: ["The main part of a noble's land, with the lord's house at the center", "A king's palace", "A trading ship", "A guild hall"], right: 0 },
    { q: "What does <i>self-sufficient</i> mean?",
      choices: ["Very rich", "Able to supply its own needs without outside help", "Unable to grow food", "Owned by the Church"], right: 1 },
    { q: "What is a <i>plow</i>?",
      choices: ["A farming tool that cuts the soil and turns it over", "A kind of grain", "A mill wheel", "A sword"], right: 0 },
    { q: "What does <i>fallow</i> mean?",
      choices: ["Planted with wheat", "Left to rest with nothing planted", "Flooded", "Fenced in"], right: 1 },
    { q: "What was the <i>three-field system</i>?",
      choices: ["Splitting the land into three fields, with a fall crop, a spring crop and one resting each year", "Three lords sharing one manor", "Three fences around a village", "A game played on three fields"], right: 0 }
  ],

  todo: { title: "What To Do Now", s: [
      "A place where your bread, your cloth and your church were all within an hour's walk is where this lesson began, and the questions ask what was inside a manor and how it fed its people.",
      "{c} word cards sit at the top of the page, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "None of them asks for a date, so read for what a manor was, what a serf owed and what the plow and three fields changed.",
      "If the three-field table gets tangled, read Three Fields Instead of Two again and follow one field across the three years."
  ] }
};
