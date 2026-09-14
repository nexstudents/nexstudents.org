/* science/cells-the-building-blocks-of-life
   Grade 7 · science · unit 2. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   ✅ THE PROSE IN `parts` IS PAUL'S, REBUILT FROM HIS DOC 2026-09-14.
   Source: docs.google.com/document/d/13xxodO7eGu3W7s7trYxavJUHxQynImvofJOdQoycUec
   A REWRITE, not an edit. What his version does that mine did not:
     - 🚨 IT IS A HISTORY, NOT A DEFINITION. My draft explained what a cell is
       and then listed who found what. Paul tells it forward in time - Hooke's
       cork, Leeuwenhoek's drop of water, Schleiden's plants, Schwann's animals,
       Virchow's "cells come from cells" - so the cell theory ARRIVES as the
       thing all five observations were pointing at. The three parts land as a
       conclusion rather than as a box to memorise.
     - THE BRICK WALL OPENS IT. Walk toward a wall and it separates into bricks.
       The wall did not change; what you could see changed. That single image
       carries the whole lesson, and it returns inside cell theory part 2.
     - 🚨 IT REACHES BACK TO UNIT 1 ON PURPOSE. Virchow's cells-from-cells is
       biogenesis arriving from a second direction, and the lesson says so out
       loud. Question 5 tests exactly that link.
     - THE ELECTRON MICROSCOPE IS A TRADEOFF, NOT AN UPGRADE. It cannot look at
       anything alive. Paul makes that a real point and questions it twice.
     - PSALM 139:15 CLOSES IT, with his own guard attached in the teacher notes:
       do not present the verse as a prediction of cell theory.
   ⚠️ NO PROSE OF MINE IN THIS ONE. All five word cards were already findable in
   his story, so nothing needed adding.
   → [[feedback-tweak-pauls-lesson-structure]] */
'use strict';
module.exports = {
  id: "science/cells-the-building-blocks-of-life",
  slug: "cells-the-building-blocks-of-life",
  title: "Cells: The Building Blocks of Life",
  unit: "Life Science &middot; U2-L1",
  seq: { unit: 2, unitTitle: "Inside the Cell", n: 1 },

  plan: {
    objective: "Explain how better microscopes opened an invisible world, and how discoveries made across generations added up to the cell theory.",
    markers: [
      "QUOTED, Merrill Life Science, the cell theory: 'All organisms are made of one or more cells. The cell is the basic unit of organization in organisms. All cells come from cells.'",
      "QUOTED, Merrill on Hooke: he examined cork and named the compartments 'cells'.",
      "QUOTED, Merrill on the two microscope types: a compound light microscope uses light and lenses; an electron microscope uses a beam of electrons and cannot be used on living specimens.",
    ],
    method: "🚨 TELL IT FORWARD, SO THE THEORY ARRIVES AS A CONCLUSION. The central idea Paul states in the teacher notes is that the microscope did not create a new world, it let us see one that had been there all along. The lesson proves that by going in order - cork, pond water, plants, animals, dividing cells - and only then naming the cell theory, so the three parts read as what five people's observations had been pointing at. A student who meets the theory first has nothing to attach it to.",
    exampleOnly: [
      "The brick wall seen from blocks away, your own hand held closer and closer, cork, a drop of water - WORLD: ordinary looking, deliberately, because the lesson is about the LIMITS of looking.",
      "🚨 THE BRICK WALL RETURNS INSIDE CELL THEORY PART TWO and must not be trimmed as a repeat. It is the image that makes 'basic unit of structure' mean something.",
    ],
    digitize: "The existing reading engine. The questions ask what someone saw or what a discovery showed, never for a date, so the student practises the argument rather than the timeline. NO NEW MECHANIC NEEDED.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Science",
    blurb: "Cells were inside every living thing long before anyone knew. This is the story of the tool that let us look.",
    contains: [
      "A brick wall that turns into bricks as you walk toward it",
      "Hooke's cork, and why he called them cells when nothing in them was alive",
      "Leeuwenhoek finding things swimming in water that looked perfectly clear",
      "Why an electron microscope is not simply the better microscope",
    ] },
  eyebrow: ["Life Science", "U2-L1", "Inside the Cell"],
  dek: "You are made of trillions of them. For most of human history, nobody knew they were there.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will explain how the invention of the microscope opened an invisible world and how discoveries made over generations led to the cell theory.",
        "The central idea is that the microscope did not create a new world. It allowed us to see a world that had been there all along."
      ]},
      { h: "Key Concepts", p: [
        "A cell is the smallest unit that carries out the activities of life.",
        "The development of better microscopes allowed scientists to make discoveries that eventually led to the three parts of the cell theory: all organisms are made of one or more cells; cells are the basic units of structure and function in organisms; and all cells come from cells that already exist.",
        "The third part connects directly with biogenesis from Unit 1."
      ]},
      { h: "Where Students Get Stuck", p: [
        "🚨 Students may think cell theory came from one experiment or one scientist. It developed as observations and discoveries accumulated over generations.",
        "Also make sure students understand that cells are not the smallest things that exist. They are the smallest units of life."
      ]},
      { h: "Teaching Suggestion", p: [
        "Ask: if something is too small for you to see, how could you ever discover that it exists? Let the microscope become the answer before introducing the scientists who used it."
      ]},
      { h: "Biblical Connection", p: [
        "Psalm 139 describes God's knowledge of us even when our formation is hidden from human sight.",
        "🚨 Be careful not to present the verse as a prediction of cell theory. The connection is that much of life's structure existed beyond human sight long before we developed the tools to observe it."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "A World You Cannot See", s: [
      "You are made of trillions of cells.",
      "They were there the day you were born.",
      "They were there inside every person who lived before microscopes existed.",
      "But for most of human history, nobody knew they were there.",
      "",
      "Look at a brick wall from several blocks away.",
      "You can see the wall.",
      "But you probably cannot see the individual bricks.",
      "",
      "Walk closer.",
      "Eventually, something changes.",
      "The wall begins to separate into hundreds of individual pieces.",
      "Now you can see the bricks, the mortar between them, and perhaps even cracks and marks on individual bricks.",
      "",
      "The wall did not change.",
      "What you were able to see changed.",
      "",
      "Now look at your hand.",
      "Move it closer to your eyes.",
      "You can see your skin more clearly.",
      "Move closer still and eventually you reach a limit.",
      "Your eyes cannot go any farther.",
      "",
      "Yet your hand is also built from smaller pieces.",
      "Those pieces are called cells.",
      "A cell is the smallest unit that carries out the activities of life.",
      "",
      "There are things smaller than cells.",
      "Cells themselves contain smaller structures and molecules.",
      "But those individual parts are not independently alive.",
      "The cell is where we reach the basic unit of life.",
      "",
      "And for most of human history, that entire world was invisible to us."
    ]},

    { title: "The Tool That Changed What We Could See", s: [
      "People had used pieces of curved glass to magnify objects for centuries.",
      "Eventually, lens makers began combining lenses to produce greater magnification.",
      "",
      "Early compound microscopes appeared around the end of the 1500s and beginning of the 1600s.",
      "They were crude.",
      "The images could be blurry.",
      "",
      "But something had changed.",
      "For the first time, people had a device that produced an enlarged image of something too small to see clearly with the unaided eye.",
      "",
      "Then, in 1665, an English scientist named Robert Hooke published a book called Micrographia.",
      "",
      "Hooke had been examining a thin piece of cork through a microscope.",
      "He saw rows of tiny compartments.",
      "They reminded him of small rooms.",
      "So Hooke gave them a name: cells.",
      "",
      "Hooke was not looking at living cells.",
      "The cork tissue was dead, and what he mainly saw were the remaining cell walls.",
      "But the name remained.",
      "",
      "And an invisible world had begun to come into view."
    ]},

    { title: "Then Someone Saw Life", s: [
      "A few years later, a Dutchman named Antonie van Leeuwenhoek pushed the microscope much farther.",
      "",
      "Leeuwenhoek made extremely small, powerful lenses.",
      "Then he began looking at things.",
      "",
      "[ex] Water, material from between teeth, tiny samples most people would never think twice about.",
      "",
      "And he saw movement.",
      "Tiny living organisms were swimming in water that looked clear to the naked eye.",
      "",
      "Imagine seeing that for the first time.",
      "People had looked at drops of water for thousands of years.",
      "The organisms had been there.",
      "Nobody could see them.",
      "",
      "Leeuwenhoek did not create microscopic life.",
      "He finally had a tool that allowed him to see it.",
      "",
      "Now scientists knew there was an entire living world beyond the limits of human eyesight.",
      "But they still did not understand how important cells really were.",
      "That would take generations."
    ]},

    { title: "Two Scientists Notice a Pattern", s: [
      "Jump forward more than 150 years.",
      "Microscopes have improved.",
      "Scientists have examined many more living things.",
      "",
      "In 1838, a German botanist named Matthias Schleiden was studying plants.",
      "Again and again, he saw cells.",
      "",
      "[ex] Leaves were made of cells, stems were made of cells, roots were made of cells.",
      "",
      "Schleiden concluded that plants are made of cells.",
      "",
      "Then, in 1839, another German scientist, Theodor Schwann, reached a similar conclusion while studying animals.",
      "Animals were made of cells too.",
      "",
      "Think about what had just happened.",
      "One scientist had been studying plants.",
      "Another had been studying animals.",
      "But their observations were pointing toward the same idea.",
      "",
      "Plants and animals may look completely different from one another.",
      "Yet underneath those differences was something they shared.",
      "They were built from cells.",
      "",
      "A much bigger picture was beginning to appear."
    ]},

    { title: "But Where Do New Cells Come From?", s: [
      "Scientists now had another question.",
      "If living things are made of cells, where do new cells come from?",
      "Do they simply appear?",
      "",
      "During the 1800s, scientists were still arguing about spontaneous generation, the idea that living things could arise from nonliving material.",
      "You have already encountered that argument in Unit 1.",
      "",
      "In 1855, the German physician Rudolf Virchow famously argued that cells come from other cells.",
      "A new cell does not simply appear from nowhere.",
      "Existing cells produce new cells.",
      "",
      "Does that sound familiar?",
      "It should.",
      "This is biogenesis appearing again.",
      "",
      "In Unit 1, you saw evidence against spontaneous generation through scientists such as Redi and Pasteur.",
      "Now we have reached the same basic principle from another direction.",
      "",
      "[ex] Life comes from existing life.",
      "[ex] At the microscopic level, cells come from existing cells.",
      "",
      "Different investigations were beginning to meet at the same conclusion."
    ]},

    { title: "The Pieces Become a Theory", s: [
      "No single person woke up one morning and discovered the entire cell theory.",
      "",
      "Hooke gave us an early glimpse of cellular structure.",
      "Leeuwenhoek revealed microscopic living organisms.",
      "Schleiden studied plants.",
      "Schwann studied animals.",
      "Virchow helped establish the importance of cells coming from existing cells.",
      "",
      "Each discovery added another piece.",
      "Eventually, those pieces formed what we call the cell theory.",
      "It has three main parts.",
      "",
      "[ex] First: all organisms are made of one or more cells.",
      "",
      "A bacterium may consist of only one cell.",
      "A human being is made of trillions.",
      "But both are cellular life.",
      "",
      "[ex] Second: cells are the basic units of structure and function in organisms.",
      "",
      "Just as a brick is one building unit of a brick wall, cells are the basic living units from which organisms are built.",
      "",
      "[ex] Third: all cells come from cells that already exist.",
      "",
      "New cells come from existing cells.",
      "There is your connection back to biogenesis.",
      "",
      "The three statements are simple.",
      "Discovering them was not.",
      "It took generations of people looking, questioning, testing, and building on what others had discovered."
    ]},

    { title: "We Kept Looking Closer", s: [
      "Microscopes did not stop improving in the 1800s.",
      "",
      "A modern compound light microscope uses visible light and multiple lenses to magnify an object.",
      "Because it uses light, it can be used to observe living specimens under the right conditions.",
      "But light itself places a limit on how much detail we can see.",
      "",
      "So scientists eventually developed another kind of microscope.",
      "",
      "In the twentieth century, the electron microscope opened another level of the invisible world.",
      "Instead of visible light, it uses a beam of electrons to produce much more highly magnified images.",
      "That allows scientists to see structures far smaller than those visible with an ordinary light microscope.",
      "",
      "But there is a tradeoff.",
      "Preparing a specimen for electron microscopy means it cannot remain alive.",
      "",
      "So one microscope is not simply better than the other.",
      "They are useful for different jobs.",
      "A light microscope can allow us to observe living cells.",
      "An electron microscope can reveal much smaller details, but not in a living specimen.",
      "",
      "The same story continues.",
      "Better tools allow us to ask questions we could not answer before."
    ]},

    { title: "It Was There All Along", s: [
      "Think again about the first person who looked through a microscope.",
      "Before that moment, cells were already there.",
      "",
      "[ex] They were inside every leaf, every animal, every human being.",
      "",
      "Plants grew.",
      "Wounds healed.",
      "Children grew into adults.",
      "Cells divided.",
      "Life continued.",
      "",
      "Human beings simply could not see what was happening at that scale.",
      "",
      "Psalm 139 speaks about God's knowledge of us even during our hidden formation.",
      "",
      "[verse] \"My substance was not hid from thee, when I was made in secret, and curiously wrought in the lowest parts of the earth.\"",
      "[verse] Psalm 139:15",
      "",
      "David was not writing a science lesson about cells.",
      "But the verse gives us a fitting thought as we study something that remained hidden from human sight for thousands of years.",
      "",
      "Our inability to see something does not mean it is not there.",
      "The microscope did not create order inside living things.",
      "It revealed some of the order that was already there.",
      "",
      "And once people could see that hidden world, one discovery led to another.",
      "",
      "[ex] A piece of cork, a drop of water, a plant, an animal, a dividing cell.",
      "",
      "Different observations, made by different people across generations, eventually pointed toward the same remarkable conclusion.",
      "Every living thing is built from cells."
    ]}
  ],

  words: [
    ["Cell", "The smallest unit that carries out the activities of life.", 20],
    ["Microscope", "A device that produces an enlarged image of something too small to see clearly with the unaided eye.", 32],
    ["Compound Light Microscope", "A microscope that uses visible light and multiple lenses to magnify an object.", 112],
    ["Electron Microscope", "A microscope that uses electrons rather than visible light to produce much more highly magnified images.", 117],
    ["Cell Theory", "Three central ideas: all organisms are made of cells, cells are the basic units of structure and function, and cells come from existing cells.", [97, 99, 103, 105]]
  ],

  findsAt: 148,
  questions: [
    { tag: "The Invisible World", q: "Why could people not study cells for most of human history?",
      find: [3, 20, 25],
      hint: "Go back to the brick wall, and to what happened when you moved your hand closer.",
      choices: [
        "Cells did not exist yet.",
        "Cells are too small to see clearly with the unaided eye.",
        "Cells only appear in laboratories.",
        "People did not know plants were alive."
      ], right: 1 },

    { tag: "Hooke", q: "What did Robert Hooke observe in 1665?",
      find: [35, 36, 37],
      hint: "He was looking at cork, and what he saw reminded him of small rooms.",
      choices: [
        "Tiny compartments in cork that he called cells.",
        "Bacteria dividing.",
        "Human blood cells.",
        "An electron microscope."
      ], right: 0 },

    { tag: "Leeuwenhoek", q: "Why was Leeuwenhoek's work important?",
      find: [47, 51, 52],
      hint: "He looked at water that anybody would have called clear.",
      choices: [
        "He invented cell theory by himself.",
        "He observed tiny living organisms that people could not see with their unaided eyes.",
        "He proved animals were not made of cells.",
        "He invented the electron microscope."
      ], right: 1 },

    { tag: "Schleiden and Schwann", q: "What did Schleiden and Schwann's work have in common?",
      find: [63, 64, 69],
      hint: "One studied plants and one studied animals, and they still arrived at the same place.",
      choices: [
        "Both concluded that the living organisms they studied were made of cells.",
        "Both studied only bacteria.",
        "Both rejected the existence of cells.",
        "Both worked with electron microscopes."
      ], right: 0 },

    { tag: "Back to Unit 1", q: "Where have you encountered the third part of cell theory before?",
      find: [84, 86, 105],
      hint: "Redi and Pasteur reached the same principle from a different direction.",
      choices: [
        "Homeostasis.",
        "Adaptation.",
        "Biogenesis.",
        "Classification."
      ], right: 2 },

    { tag: "How Science Works", q: "What does the history of cell theory show about scientific discovery?",
      find: [90, 96, 97],
      hint: "Count how many people had to look before the theory existed.",
      choices: [
        "Every important theory comes from one scientist.",
        "Scientific knowledge can develop as different discoveries and evidence accumulate over time.",
        "New discoveries make earlier observations useless.",
        "Scientists must all perform the same experiment."
      ], right: 1 },

    { tag: "The Tradeoff", q: "Why is an electron microscope not simply a better version of a light microscope?",
      find: [120, 121, 123, 124],
      hint: "Think about what has to happen to a specimen before an electron microscope can look at it.",
      choices: [
        "It cannot magnify objects very much.",
        "It cannot be used to observe a living specimen, while a light microscope can.",
        "It uses exactly the same technology.",
        "It can only examine plants."
      ], right: 1 },

    { tag: "The Big Idea", q: "Which statement best summarizes the lesson?",
      find: [126, 143, 147],
      hint: "It is the sentence about what the microscope did and did not create.",
      choices: [
        "Cells appeared after microscopes were invented.",
        "Hooke discovered everything scientists needed to know about cells.",
        "Better tools allowed scientists across generations to discover an invisible cellular world that had been there all along.",
        "Electron microscopes replaced every other kind of microscope."
      ], right: 2 }
  ],

  vocabQuestions: [
    { q: "What is a <i>cell</i>?",
      choices: [
        "The smallest thing that exists.",
        "The smallest unit that carries out the activities of life.",
        "Any object visible through a microscope.",
        "A structure found only in animals."
      ], right: 1 },
    { q: "What is a <i>compound light microscope</i>?",
      choices: [
        "A microscope that uses visible light and multiple lenses.",
        "A microscope that uses electrons.",
        "A microscope with no lenses.",
        "A microscope that can only examine dead specimens."
      ], right: 0 },
    { q: "What is an important limitation of an <i>electron microscope</i>?",
      choices: [
        "It cannot magnify cells.",
        "It cannot be used to observe a living specimen.",
        "It only works outdoors.",
        "It cannot show structures smaller than cells."
      ], right: 1 },
    { q: "Which statement is NOT part of the <i>cell theory</i>?",
      choices: [
        "All organisms are made of one or more cells.",
        "Cells are the basic units of structure and function in organisms.",
        "All cells come from cells that already exist.",
        "All cells have exactly the same structure."
      ], right: 3 }
  ],

  todo: { title: "What To Do Now", s: [
      "That is the reading done, and this one is a story rather than a list.",
      "{c} word cards sit at the top of the page, then {Q} questions, then {v} more questions about those words. {T} questions in all.",
      "None of the questions ask you for a date, so do not go back trying to memorise the years.",
      "They ask what somebody saw and what it showed, which is a different thing.",
      "If a question is hard, use the bar or the arrows to go back to the section that scientist is in and read it again.",
      "The one worth slowing down on is why an electron microscope is not simply the better microscope.",
      "It cannot look at anything that is still alive, and that is the whole answer.",
      "Last, the word cards at the top and the check at the bottom of the page."
  ] }
};
