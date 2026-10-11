/* history/reading-the-map
   Grade 7 · history · unit 2. Its home is this folder.
   Built by tools/build-lessons.js. Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-10-11. Written on Sonnet from the Leif outline (U2 L9:
   Geography of Europe, North Africa, and Southwest Asia) and McDougal Littell World
   History: Medieval and Early Modern Times Ch1 Lessons 1 and 2 (pp8-21) and the Skillbuilder
   "Reading a Map" (pp22-23), via the week 8-9 packet (paraphrased notes). The video is
   noted in `video`.

   🚨 THE BOOK'S PAGES ARE GENERAL, NOT REGIONAL. The packet notes that Ch1 teaches the
   map skills (latitude and longitude, physical, political and thematic maps, the five
   themes) with examples from California, the British Isles and Tang China, and that only
   the Europe geography on Ch9 p292 is regional. So the REGIONAL content here is ADDED
   FROM THE RECORD, worth a glance from Paul:
   · Constantinople at about 41° N, 29° E (the book's own figure for Istanbul is
     different; the record figure is used). Other coordinates used in the questions and
     the lesson: Rome about 42° N, 12° E; Mecca about 21° N, 40° E.
   · The Alps, the Pyrenees, the Rhine, the Danube, the Mediterranean, the Bosporus, the
     Strait of Gibraltar (about nine miles at its narrowest), the Sahara, the Nile, the
     Arabian Desert, the Tigris and the Euphrates, with the one-line facts about each.
   · The prime meridian passes through Greenwich, near London (the book says this too).

   ⚠️ THE ONE WORLD IS THE REGION OF THIS UNIT, and every map idea is applied to it. The
   astrolabe, GPS, GIS, Ptolemy's maps and the Mercator, Robinson and Homolosine
   projections are left out. The two photos, the Iceman and the make-a-map activity are
   left out.

   🚨 THE VERSE IS A WORKING CHOICE, NOT PAUL'S. Acts 17:26. */
'use strict';
module.exports = {
  id: "history/reading-the-map",
  slug: "reading-the-map",
  title: "Reading the Map: Europe, North Africa, and Southwest Asia",
  unit: "World History &middot; U2-L9",
  seq: { unit: 2, unitTitle: "The East Endures, and Islam Rises", n: 9 },
  natural: "2026-10-11",
  eyebrow: "World History",
  dek: "Two numbers can put a finger on any city on earth. Learn to read them, and the mountains and rivers of Europe, North Africa and Southwest Asia start to explain the story you've been following.",
  plan: {
    objective: "Use latitude and longitude to find a place on a map, tell physical, political and thematic maps apart, and name the major landforms and waters of Europe, North Africa and Southwest Asia.",
    markers: [
      "McDougal Ch1 Lesson 2 (paraphrased): the equator divides the earth into north and south halves and the prime meridian into east and west. Latitude lines run parallel to the equator and longitude lines run through the poles, and the crossing of two lines gives a place's absolute location. A circle is divided into 360 degrees.",
      "McDougal Ch1 Lesson 2 (paraphrased): a physical map shows landforms, water and elevation, a political map shows cities, countries and capitals, and a thematic map shows one kind of information such as religion, climate or trade routes.",
      "McDougal Ch1 Lesson 1 (paraphrased): the five themes of geography are location, place, region, human-environment interaction and movement.",
      "McDougal Ch9 p292 (paraphrased): Europe is bordered by the Atlantic, the Arctic Ocean and the Mediterranean, the Ural Mountains separate it from Asia, and rugged ranges such as the Alps and Apennines run across the south while much of the north and west is plains. Rivers were key to trade, and the Volga is the longest.",
      "ADDED FROM THE RECORD: the regional landforms and the coordinates, listed in the header.",
    ],
    method: "FIND A PLACE WITH TWO NUMBERS: the latitude (north or south of the equator) and the longitude (east or west of the prime meridian). Then read what the physical map says about why people lived and moved where they did.",
    exampleOnly: [
      "Constantinople at about 41° N, 29° E is the worked example, because it's the city the unit began with. The skill is reading a coordinate, not knowing this one city.",
      "⚠️ The regional geography is added from the record because the book's map lessons are general. See the header.",
    ],
    digitize: "The existing reading engine and one Watch It Worked that finds Constantinople from its coordinates step by step. Questions ask what latitude and longitude measure, which map answers which question, which landform is where, and how to read a new coordinate.",
    unclear: "",
  },
  sheet: { slug: "reading-the-map-homework", subject: "history",
    note: "Do it on screen or print it. Your score shows here once you check it." },

  video: { id: "cJt5Yi48oQ0", title: "European Geography Made Easy", channel: "Miacademy",
    why: "A quick tour of Europe's mountains, seas and rivers. It helps to see the whole shape once before you place the cities on it." },
  shelf: { grades: [7], subject: "History",
    blurb: "Two numbers can put a finger on any city on earth. Latitude and longitude, three kinds of maps, and the mountains, rivers and seas that shaped Europe, North Africa and Southwest Asia.",
    contains: [
      "A story-form reading, read aloud with the words highlighted",
      "Latitude and longitude, worked step by step",
      "Physical, political and thematic maps",
      "The Alps, the Rhine, the Sahara, the Nile and more",
      "How the land shaped the story of the unit",
    ] },
  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will use latitude and longitude to find a place, say what physical, political and thematic maps are for, and name the major landforms and waters of Europe, North Africa and Southwest Asia and what each did to the history they have been reading."
      ]},
      { h: "Key Vocabulary", vocab: true },
      { h: "Added From the Record", p: [
        "The book's two map lessons are general, with examples from California, the British Isles and Tang China. The regional landforms, the coordinates for Constantinople, Rome and Mecca and the one-line facts about each river and sea are added from the historical record."
      ]},
      { h: "Where This Goes Next", p: [
        "U2-L10 reviews the whole unit, and U3-L1 opens the feudal order that grew up on this European ground."
      ]}
    ]
  },

  parts: [
    { title: "Two Numbers", s: [
      "A pilot is flying over the sea at night with no landmarks to look at, and the only thing he has to find a city by is two numbers: 41 degrees north and 29 degrees east.",
      "Those two numbers point at one place on earth, a city on a narrow strip of water that you've been reading about for the whole unit.",
      "Before you can read the map that tells you where it is, you need to learn the language the numbers are written in.",
      "How do two numbers put a finger on any spot in the world?"
    ]},

    { title: "Why Geography Matters to History", s: [
      "{{Geography}} is the study of the earth's features and of how people live with them, and it matters to a history lesson because land decides a great deal about what people can do.",
      "Mountains slow armies down, rivers carry traders, deserts keep people moving, and a harbor makes a city rich, as you saw with Constantinople.",
      "Geographers ask five questions about any place, called the five themes: its location, what it's like, what region it belongs to, how people change the land and live with it, and how people and goods move through it.",
      "This lesson gives you the tools to read those answers off a map, and then it reads one."
    ]},

    { title: "Three Kinds of Maps", s: [
      "Not every map answers the same question, and the first job is choosing the right one.",
      "A {{physical map}} shows the natural features of the land: mountains, rivers, deserts and seas, usually with colors that show how high the ground is.",
      "A political map shows what people have drawn on the land, such as borders, countries, capitals and cities.",
      "A thematic map shows one kind of information, like religion, climate, trade routes or the places where a faith spread, and you will meet that kind of map again.",
      "If you want to know why an army couldn't cross a land, ask for the physical map, and if you want to know who ruled it, ask for the political one."
    ]},

    { title: "Latitude and Longitude", s: [
      "Mapmakers divide the globe with imaginary lines, and the first is the equator, which runs around the middle of the earth and splits it into a northern half and a southern half.",
      "{{Latitude}} lines run parallel to the equator, east and west, and they measure how far north or south of it a place is, in degrees.",
      "The second is the prime meridian, which runs from the North Pole to the South Pole through Greenwich, near London, and splits the globe into an eastern half and a western half.",
      "{{Longitude}} lines run through the poles, north and south, and they measure how far east or west of the prime meridian a place is.",
      "A circle has 360 degrees, which is why the numbers go up to 90 for latitude and 180 for longitude each way, and every coordinate ends with a letter, N or S for latitude and E or W for longitude.",
      "Where one latitude line and one longitude line cross, there's exactly one place, and that's called its absolute location."
    ]},

    { title: "Finding Constantinople", s: [
      "Now try it on the city in the opening, which has a latitude of about 41 degrees north and a longitude of about 29 degrees east, and the best way to learn it is to watch it done once.",
      "",
      "[walk] Finding the city at 41° N, 29° E.",
      "[step] Start at the equator, which is 0 degrees of latitude, and count up toward the North Pole until you reach 41 degrees, because the N says north. || Latitude: 0° (equator)  ->  41° N",
      "[step] Put a finger on that line, which runs east and west across southern Europe and the north of the Mediterranean Sea. || a line across the map at 41° N",
      "[step] Now start at the prime meridian, which is 0 degrees of longitude, and count east until you reach 29 degrees, because the E says east. || Longitude: 0° (Greenwich)  ->  29° E",
      "[step] Put a second finger on that line, which runs north and south through the Black Sea and Turkey. || a line down the map at 29° E",
      "[step] The place where your two fingers meet is the answer, and it's the narrow strait where Europe and Asia touch, with Constantinople on its edge. || 41° N, 29° E  =  Constantinople (Istanbul)",
      "",
      "Notice that you always give the latitude first and the longitude second, and that a coordinate with the wrong letter points at a different part of the world."
    ]},

    { title: "Europe's Mountains and Rivers", s: [
      "Now read the land itself, starting in Europe, which is bordered by the Atlantic Ocean to the west, the Arctic Ocean to the north and the Mediterranean Sea to the south.",
      "The Alps, a high range across the south-central part of the continent, stood like a wall between Italy and the lands to the north, which is why the church had to send missionaries over the mountains.",
      "The Pyrenees, a range between France and Spain, were the line where the Frankish kingdom met Muslim Spain.",
      "Much of the north and west of Europe is plains, good for farming, and the rivers there, like the Rhine, which runs north to the North Sea, and the Danube, which flows east to the Black Sea, were highways for trade.",
      "The Volga, the longest river in Europe, runs across Russia to the Caspian Sea, and nearly every river mattered, because a river carried goods and ideas faster than any road."
    ]},

    { title: "North Africa and Southwest Asia", s: [
      "Cross the Mediterranean at the Strait of Gibraltar, a gap only about nine miles wide at its narrowest between Spain and Morocco, and you're in North Africa.",
      "Most of it is the Sahara, the largest hot desert in the world, and a very thin green ribbon runs through it along the Nile, which flows north to the sea in Egypt and fed one of the oldest civilizations.",
      "East of Egypt lies Southwest Asia, where the Arabian Desert covers most of the Arabian Peninsula, and the Bedouin who lived there moved with the rain and the oases, as you read in the lesson on Islam.",
      "To the north, the Tigris and Euphrates rivers run through what's now Iraq, and Baghdad was built on the Tigris because a river city could feed itself and trade with the world.",
      "Between the Black Sea and the Mediterranean lies a narrow strait called the Bosporus, and Constantinople sat on it, which is why one city on one strait could control the sea routes between two continents."
    ]},

    { title: "The Land Did Some of the Work", s: [
      "Now look back over the unit with a physical map in your mind, and the story starts to explain itself.",
      "The Bosporus made Constantinople rich and its walls almost impossible to storm, the Arabian Desert made the Bedouin travelers who carried a message far, and the Tigris gave Baghdad a place to be a marketplace for the world.",
      "The Pyrenees held a line in Spain, the Rhine shaped the Frankish kingdom, and the Mediterranean joined all three continents together while it kept them close enough to fight.",
      "",
      "[verse] Acts 17:26 says of God, “And hath made of one blood all nations of men for to dwell on all the face of the earth, and hath determined the times before appointed, and the bounds of their habitation;”",
      "",
      "Paul said that to the people of Athens, and it's a reminder that the places people lived weren't an accident, and that it's worth knowing the ground they stood on.",
      "So the answer to the opening question is that two numbers, one measured from the equator and one from the prime meridian, put a finger on any spot on earth, and a physical map tells you why people lived there."
    ]}
  ],

  words: [
    ["Geography", "The study of the earth's features and of how people live with them.", 4],
    ["Physical map", "A map that shows natural features such as mountains, rivers and seas.", 9],
    ["Latitude", "Lines that run east and west and measure how far north or south of the equator a place is.", 14],
    ["Longitude", "Lines that run through the poles and measure how far east or west of the prime meridian a place is.", 16]
  ],

  findsAt: 43,
  questions: [
    { tag: "The Question", q: "What do the two numbers 41° N and 29° E give you?", find: [18],
      hint: "Read Two Numbers and Latitude and Longitude.",
      choices: [
        "The height of a mountain.",
        "The exact location of a place on the earth.",
        "The size of a country.",
        "The year something happened."
      ], right: 1 },

    { tag: "Maps", q: "Which kind of map would show why an army couldn't cross a land?", find: [12],
      hint: "Read Three Kinds of Maps.",
      choices: ["A political map.", "A physical map.", "A map of the equator.", "A map of the Alps only."], right: 1 },

    { tag: "Maps", q: "What does a political map show?", find: [10],
      hint: "Read Three Kinds of Maps.",
      choices: [
        "Mountains and rivers.",
        "Borders, countries, capitals and cities.",
        "Rainfall only.",
        "The ocean floor."
      ], right: 1 },

    { tag: "Latitude", q: "Which lines measure how far north or south of the equator a place is?", find: [14],
      hint: "Read Latitude and Longitude.",
      choices: ["Lines of longitude.", "Lines of latitude.", "Lines of elevation.", "Rivers."], right: 1 },

    { tag: "Finding It", q: "When you find a place from its coordinates, which number do you give first?", find: [26],
      hint: "Read Finding Constantinople.",
      choices: ["The longitude.", "The latitude.", "The one that is larger.", "It doesn't matter."], right: 1 },

    { tag: "Finding It", q: "Rome is at about 42° N, 12° E. Compared with Constantinople at about 41° N, 29° E, Rome is...", find: [13],
      hint: "Compare the latitudes for north or south, and the longitudes for east or west.",
      choices: [
        "Slightly north of Constantinople, and farther west.",
        "Slightly south of Constantinople, and farther east.",
        "Far south of Constantinople.",
        "At exactly the same spot."
      ], right: 0 },

    { tag: "The Land", q: "Which mountain range was the line where the Frankish kingdom met Muslim Spain?", find: [29],
      hint: "Read Europe's Mountains and Rivers.",
      choices: ["The Alps.", "The Pyrenees.", "The Urals.", "The Sahara."], right: 1 },

    { tag: "The Land", q: "What is the Sahara?", find: [33],
      hint: "Read North Africa and Southwest Asia.",
      choices: [
        "A sea between Europe and Asia.",
        "The largest hot desert in the world, covering most of North Africa.",
        "A range of mountains in Spain.",
        "A river in Iraq."
      ], right: 1 },

    { tag: "The Land", q: "Why was Constantinople on the Bosporus so important?", find: [36],
      hint: "Read North Africa and Southwest Asia.",
      choices: [
        "It was the highest point in Europe.",
        "It sat on a narrow strait that controlled the sea routes between two continents.",
        "It was at the center of the Sahara.",
        "It was the only port in Asia."
      ], right: 1 }
  ],

  vocabQuestions: [
    { q: "What is <i>geography</i>?",
      choices: ["The study of the earth's features and how people live with them", "A kind of map only", "The study of kings", "A list of cities"], right: 0 },
    { q: "What does a <i>physical map</i> show?",
      choices: ["Borders and capitals", "Natural features like mountains, rivers and seas", "Where a religion spread", "Prices of goods"], right: 1 },
    { q: "What does <i>latitude</i> measure?",
      choices: ["How far east or west of the prime meridian", "How high a mountain is", "How far north or south of the equator", "How deep the sea is"], right: 2 },
    { q: "What does <i>longitude</i> measure?",
      choices: ["How far east or west of the prime meridian", "How far north of the equator", "How big a country is", "How long a river is"], right: 0 }
  ],

  todo: { title: "What To Do Now", s: [
      "Two numbers and a pilot over the sea at night are where this lesson began, and the questions ask what those numbers mean and what the land they point at did.",
      "{c} word cards sit at the top of the page, then {Q} questions, then {v} more questions about those words, {T} questions in all.",
      "None of them asks you to draw a map, so read for how to find a place and what each landform did.",
      "If the coordinates trip you up, read Finding Constantinople again and put your two fingers on the lines.",
      "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] }
};
