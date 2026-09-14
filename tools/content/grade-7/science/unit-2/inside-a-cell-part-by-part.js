/* science/inside-a-cell-part-by-part
   Grade 7 · science · unit 2. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   ✍️ REWRITTEN 2026-09-14, MINE, and written to be read rather than survived.
   Paul, 2026-09-14: *"write it the best way you can teaching a 13 year old boy
   ... sound natural make good story narratives and what it would sound like if
   you had a 12 year old son who you are trying to teach."*

   WHAT THE OLD DRAFT DID WRONG, and it was my draft, not his:
     - It opened by correcting a misconception ("get rid of the idea that a cell
       is a bag of soup"). You cannot correct an idea a kid has not had yet.
     - It walked the textbook's own order: three parts, two types, nucleus,
       organelles. Paul told me not to pull the structure straight from the book
       and I did it anyway.
     - It had no world. Every sentence was about cells, so there was nothing to
       hang a cell on.

   🚨 THE WORLD IS HIS DAD'S WAREHOUSE, and that is the whole rewrite. Paul
   drives a forklift. Kolten has seen that building. You can walk into it and
   read everyone's job off what they are holding and where they stand - which is
   exactly what a cell is, and it makes the prokaryote/eukaryote split land as a
   real question a kid can picture: does the boss have an office with walls, or
   is he out on the floor holding the clipboard?
   ⚠️ The warehouse returns for the mitochondria (nothing moves without power)
   and again at the end. Do not trim it as a repeat; it is the spine.

   🚨 PROVERBS 24:3-4 CLOSES IT, on CHAMBERS in a well built house. Guard, and it
   is in the prose: Solomon was writing about a household and had never seen a
   cell. The verse is a picture that fits, not a prediction. */
'use strict';
module.exports = {
  id: "science/inside-a-cell-part-by-part",
  slug: "inside-a-cell-part-by-part",
  title: "Inside a Cell, Part by Part",
  unit: "Life Science &middot; U2-L2",
  seq: { unit: 2, unitTitle: "Inside the Cell", n: 2 },

  plan: {
    objective: "Name what is inside a cell and say what each part does, and tell a prokaryotic cell from a eukaryotic one by a single question.",
    markers: [
      "Merrill Life Science: every cell has a cell membrane, cytoplasm, and either a nucleus or nuclear material.",
      "Merrill: cells with no membrane around their nuclear material are prokaryotic; cells whose nucleus is membrane-bound are eukaryotic.",
      "Merrill: organelles are the structures in the cytoplasm that carry out particular jobs.",
    ],
    method: "🚨 GIVE HIM A BUILDING HE HAS ALREADY WALKED INTO, THEN SHRINK IT. The lesson never asks him to imagine an abstraction. It starts in a warehouse he has actually been in, where every job is readable off the floor, and only then says that a cell is that building at the size of a pin head. The prokaryote/eukaryote split is then not two hard words, it is one question about whether the boss has an office - which is why the answer sticks. The eu- means true hint is the backup, not the teaching.",
    exampleOnly: [
      "The warehouse, the forklift, the desk with the paperwork, the wrapped pallet - WORLD: one working building, held all the way through and returned to twice. Deliberately generic: the lesson is public and cannot assume whose parent works where.",
      "🚨 THE POWER BEAT IS NOT DECORATION. The forklift battery is what makes mitochondria mean something before Unit 3 explains respiration.",
    ],
    digitize: "The existing reading engine. Every question asks what a part DOES or what the one question is, never for a spelling. NO NEW MECHANIC NEEDED.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Science",
    blurb: "Walk into a warehouse and you can read everyone's job in thirty seconds. A cell is the same building, shrunk to the size of a pin head.",
    contains: [
      "A warehouse floor, and why nobody ever had to explain one to you",
      "The three things every cell that has ever been found has",
      "One question that splits every cell on earth into two kinds",
      "Proverbs 24, on a house whose chambers are filled",
    ] },
  eyebrow: ["Life Science", "U2-L2", "Inside the Cell"],
  dek: "A cell is not a bag of soup. It is a building with the shift still running, and almost every part has a job you can name.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will name the three structures every cell has, tell a prokaryotic cell from a eukaryotic one, and say what the nucleus, the organelles and the mitochondria actually do."
      ]},
      { h: "Key Concepts", p: [
        "Every cell has a cell membrane, cytoplasm, and a control center that is either a nucleus or loose nuclear material.",
        "The prokaryote and eukaryote split turns on one thing only: whether there is a membrane around the control center. Not size, not shape, not plant or animal.",
        "An organelle is a structure in the cytoplasm that does a particular job. Mitochondria release the energy in food; chloroplasts, in plant cells, catch sunlight."
      ]},
      { h: "Where Students Get Stuck", p: [
        "🚨 Prokaryotic and eukaryotic swap around in the head because they are two long words that look alike. The fix in this lesson is not the spelling, it is the picture: does the boss have an office with walls, or is he out on the floor? Ask him that question rather than asking him to define the words.",
        "The second stumble is thinking the nucleus holds instructions for the cell. It holds instructions for the whole organism."
      ]},
      { h: "Teaching Suggestion", p: [
        "Do the warehouse out loud first, before the lesson is opened. Ask the student to describe any busy working place he has been inside - a warehouse, a garage, a kitchen, a big store - and to name what three different people there are doing. He will do it without effort, and that is the point: he can already read an organized building.",
        "Then ask the one question the lesson turns on. If the person in charge had a walled office, what would change about how the place runs?"
      ]},
      { h: "Biblical Connection", p: [
        "Proverbs 24:3-4 describes a house built by wisdom whose chambers are filled with precious things.",
        "🚨 Solomon was writing about a household and had never seen a cell. Present the verse as a picture that happens to fit what we now know, never as a prediction of cell biology. That guard is stated in the student prose too."
      ]},
      { h: "Picture Credits", p: [
        "🚨 All nine pictures are Paul's own, made in ChatGPT on 2026-09-14. The source PNGs are in Desktop\\School Lessons Worksheets\\Science Artwork. Do not regenerate, restyle or crop them.",
        "The warehouse pair is the teaching, not decoration: boss on the floor and boss in a glass office are the same building from the same angle, and they carry the prokaryote and eukaryote difference before the words have to."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Thirty Seconds in a Warehouse", s: [
      "Walk into a big warehouse, give it about thirty seconds, and you will not need anybody to explain the place to you.",
      "",
      "A forklift is pulling pallets off a truck and stacking them in the racks, somebody at a desk has the paperwork for what is supposed to be on them, and somebody further down is wrapping a load so it does not come apart on the way out.",
      "",
      "Nobody in there is standing around waiting to be told what a warehouse is, because every one of them already has a job, a place to do it, and the thing they need in their hands.",
      "",
      "Now shrink that whole building down until it would sit on the head of a pin, and you are closer to a cell than any picture you have probably been shown.",
      "",
      "When Robert Hooke looked at cork and named what he saw cells, he was looking at empty rooms, because the cork was dead and whatever had been working in there was long gone.",
      "",
      "A living cell is neither of those, not an empty room and not a bag of soup, but a building with the shift still running."
    ]},

    { title: "Three Things Every One of Them Has", s: [
      "Before you learn anybody's job, learn the three things every one of these buildings has.",
      "",
      "There is a wall with doors in it, and in a cell that wall is the {{cell membrane}}, the boundary around the outside that decides what gets in and what gets out.",
      "",
      "There is a floor with everything standing on it, and in a cell that is {{cytoplasm}}, the gel-like material that fills the inside and holds each part where it belongs.",
      "",
      "And there is somebody in charge, which in a cell is either a nucleus or loose nuclear material, directing everything the cell does.",
      "",
      "Every cell anybody has ever found has all three, from a single bacterium to the cells in an oak tree to yours, about thirty trillion of them, working while you read this."
    ]},

    { title: "Does the Boss Have an Office?", s: [
      "Here is where cells split into two kinds, and the whole thing comes down to one question.",
      "Picture the difference before you read on.",
      "",
      "[ex] Does the boss have his own office with walls around him, or is he out on the floor with everyone else?",
      "",
      "In a small operation the boss is out on the floor with everybody else, holding the clipboard, with no office and no door to knock on.",
      "",
      "A cell built that way is {{prokaryotic}}, and its instructions float loose in the cytoplasm along with everything else.",
      "",
      "Bacteria are prokaryotic, and so is the green scum sitting on top of a pond.",
      "",
      "In a bigger operation the boss has an office with a wall around it and a door you go through to get in.",
      "",
      "A cell built that way is {{eukaryotic}}, and its nucleus is a room of its own, shut off from the floor.",
      "",
      "Every plant and animal cell in this unit is eukaryotic, and so is every cell in you.",
      "",
      "If the two words keep swapping around in your head, lean on the front of the longer one, because eu means true, and a eukaryotic cell is the one with a true nucleus and a real walled office.",
      "",
      "That is the entire test.",
      "Not size.",
      "Not shape.",
      "Not whether it is a plant or an animal.",
      "Just whether the control center has walls."
    ]},

    { title: "What Is Actually in the Office", s: [
      "The {{nucleus}} directs the cell's activities.",
      "Inside it sits chromatin, and chromatin carries the instructions for building and running the entire organism.",
      "",
      "Stop on that for a second, because it does not say instructions for the cell, it says instructions for the whole of you.",
      "",
      "A cell can lose other parts and limp along for a while, but a cell with no instructions has nothing left to follow.",
      "",
      "Think about what that does to the last lesson, where Virchow worked out that every cell comes from a cell that already existed, because what gets handed over when a cell divides is a copy of those instructions.",
      "That is the thing being passed down."
    ]},

    { title: "The Machinery on the Floor", s: [
      "Out in the cytoplasm are the working parts, and each structure in there with a particular job is called an {{organelle}}, which only means little organ.",
      "",
      "The one worth knowing by name right now is the mitochondria.",
      "",
      "[ex] {{Mitochondria}} are the organelles where the cell gets energy out of food.",
      "",
      "Go back to the warehouse for a second, where nothing moves without power, the forklift runs on a battery, and the lights are on because something is supplying them.",
      "",
      "Cut the power and every other job in there stops, no matter how many people are standing on the floor.",
      "",
      "A cell is no different, and getting that energy out of food is the cellular respiration you meet in Unit 3, with the mitochondria as the place it happens."
    ]},

    { title: "What a Plant Has That You Do Not", s: [
      "A plant cell has everything above, and two things you do not have.",
      "",
      "A {{cell wall}} sits outside the cell membrane and it is stiff, which is a good part of why a tree can hold itself up while you need a skeleton to manage the same thing.",
      "",
      "And a plant cell has chloroplasts.",
      "",
      "[ex] {{Chloroplasts}} are the green organelles where a plant catches sunlight and makes its own food.",
      "",
      "That green you see in a leaf is chloroplasts, and it is why a plant can stand in one spot its whole life and never once go looking for a meal."
    ]},

    { title: "Chambers Filled", s: [
      "Proverbs has a line about building a house that fits this lesson better than it has any business fitting.",
      "",
      "[verse] \"Through wisdom is an house builded; and by understanding it is established: And by knowledge shall the chambers be filled with all precious and pleasant riches.\"",
      "[verse] Proverbs 24:3 and 4",
      "",
      "Solomon was writing about a household rather than about cells, which he had never seen and had no way of seeing.",
      "",
      "But look at what he says a well built house has in it: chambers, rooms with what belongs in them put carefully inside.",
      "",
      "That is what you have been looking at this whole lesson, and it was never a bag of soup, but a building full of rooms with something worth having in every one."
    ]}
  ],

  /* 🚨 THE PICTURES ARE CROPS OF PAUL'S OWN ANIMAL-CELL DIAGRAM.
     `tools/animal-cell-src.png`, the source art behind the paid Animal Cell
     worksheet, cropped per organelle using the anchor coordinates already in
     tools/build-cell.js. Paul, 2026-09-14: "id rather you show like the
     individual items and what they look like too especially if you are going to
     talk about mitochondria."
     ⚠️ ONE PART EACH, not the whole labelled diagram. The labelled version IS
     the paid worksheet, so showing it whole here would give the product away.
     ⚠️ `when` quotes a story sentence exactly. requireVisuals() fails the build
     if it does not match, and it strips [ex]/[verse] before comparing. */
  visuals: [
    { when: "Walk into a big warehouse, give it about thirty seconds, and you will not need anybody to explain the place to you.",
      kind: "A warehouse floor", pic: "/lessons/science/inside-a-cell-part-by-part/pics/warehouse-floor.jpg",
      picAlt: "A warehouse with tall racks of pallets, a forklift, and workers each doing a different job",
      note: "Thirty seconds in here and you know who does what." },
    { when: "When Robert Hooke looked at cork and named what he saw cells, he was looking at empty rooms, because the cork was dead and whatever had been working in there was long gone.",
      kind: "Hooke's cork", pic: "/lessons/science/inside-a-cell-part-by-part/pics/cork.jpg",
      picAlt: "A slice of cork magnified, rows of empty box shaped chambers with thin dry walls",
      note: "Empty rooms. This is what he named cells after." },
    { when: "Before you learn anybody's job, learn the three things every one of these buildings has.",
      kind: "Three things every cell has", pic: "/lessons/science/inside-a-cell-part-by-part/pics/animal-cell.jpg",
      picAlt: "An animal cell, its outer membrane, the cytoplasm inside it and the nucleus",
      note: "The wall, the floor, and the one in charge. All three are in here." },
    { when: "In a small operation the boss is out on the floor with everybody else, holding the clipboard, with no office and no door to knock on.",
      kind: "Boss on the floor", pic: "/lessons/science/inside-a-cell-part-by-part/pics/boss-on-floor.jpg",
      picAlt: "A supervisor with a clipboard standing among the workers, no office anywhere",
      note: "No office, no door. He is right there in the middle of it." },
    { when: "A cell built that way is prokaryotic, and its instructions float loose in the cytoplasm along with everything else.",
      kind: "Prokaryotic cell", pic: "/lessons/science/inside-a-cell-part-by-part/pics/bacterium.jpg",
      picAlt: "A bacterium cut open, its DNA lying loose in the middle with no membrane around it",
      note: "The purple tangle is the DNA. Nothing is around it." },
    { when: "In a bigger operation the boss has an office with a wall around it and a door you go through to get in.",
      kind: "Boss in an office", pic: "/lessons/science/inside-a-cell-part-by-part/pics/boss-in-office.jpg",
      picAlt: "The same warehouse, now with a glass walled office and the supervisor inside it",
      note: "Same warehouse, same people. Now there are walls around him." },
    { when: "A cell built that way is eukaryotic, and its nucleus is a room of its own, shut off from the floor.",
      kind: "Eukaryotic cell", pic: "/lessons/science/inside-a-cell-part-by-part/pics/animal-cell.jpg",
      picAlt: "An animal cell cut open, the nucleus clearly inside its own membrane",
      note: "The purple nucleus has its own wall, like the office." },
    { when: "The nucleus directs the cell's activities.",
      kind: "Nucleus", pic: "/lessons/science/inside-a-cell-part-by-part/pics/nucleus.jpg",
      picAlt: "A cell nucleus, its membrane dotted with pores",
      note: "Those gaps in the wall are how things get in and out." },
    { when: "Mitochondria are the organelles where the cell gets energy out of food.",
      kind: "Mitochondrion", pic: "/lessons/science/inside-a-cell-part-by-part/pics/mitochondrion.jpg",
      picAlt: "A mitochondrion cut open, showing the folded inner membranes",
      note: "All that folding is surface to work on." },
    { when: "Go back to the warehouse for a second, where nothing moves without power, the forklift runs on a battery, and the lights are on because something is supplying them.",
      kind: "Where the power comes from", pic: "/lessons/science/inside-a-cell-part-by-part/pics/forklift-charging.jpg",
      picAlt: "A forklift plugged into a charger on a warehouse wall",
      note: "Cut this and everything else in the building stops." },
    { when: "A cell wall sits outside the cell membrane and it is stiff, which is a good part of why a tree can hold itself up while you need a skeleton to manage the same thing.",
      kind: "Cell wall", pic: "/lessons/science/inside-a-cell-part-by-part/pics/plant-cell.jpg",
      picAlt: "Plant cells packed together, each inside a thick stiff wall",
      note: "The thick edges are the walls. That is what a tree stands up with." },
    { when: "Chloroplasts are the green organelles where a plant catches sunlight and makes its own food.",
      kind: "Chloroplast", pic: "/lessons/science/inside-a-cell-part-by-part/pics/chloroplast.jpg",
      picAlt: "A chloroplast cut open, showing the green stacks inside",
      note: "Only plants have these. The green stacks catch the sunlight." },
    { when: "Proverbs has a line about building a house that fits this lesson better than it has any business fitting.",
      kind: "Chambers filled", pic: "/lessons/science/inside-a-cell-part-by-part/pics/warehouse-floor.jpg",
      picAlt: "A warehouse floor with racks of pallets and workers at their jobs",
      note: "Back where the lesson started. Rooms, with what belongs in them inside." },
  ],

  words: [
    ["Cell membrane", "The boundary around the outside of a cell that decides what gets in and what gets out.", 7],
    ["Cytoplasm", "The gel-like material that fills the inside of a cell and holds everything in place.", 8],
    ["Nucleus", "The control center that directs the cell's activities.", 26],
    ["Organelle", "A structure inside the cytoplasm that does one particular job.", 32],
    ["Prokaryotic", "A cell whose control center has no membrane around it, so its instructions float loose.", 15],
    ["Eukaryotic", "A cell whose nucleus has a membrane around it, like an office with walls.", 18],
    ["Mitochondria", "The organelles where the cell gets energy out of food.", 34],
    ["Chloroplast", "The green organelle where a plant catches sunlight and makes its own food.", 41],
    ["Cell wall", "A stiff layer outside the cell membrane of a plant cell, which is what holds the plant up.", 39]
  ],

  findsAt: 49,
  questions: [
    { tag: "The Warehouse", q: "Why does the lesson start in a warehouse instead of starting with a cell?",
      find: [2, 3, 5],
      hint: "Ask what you could already do walking into that building, without being taught anything.",
      choices: [
        "Because warehouses and cells are the same size.",
        "Because you can already read an organized building, and a cell is one.",
        "Because cells were discovered in a warehouse.",
        "Because a forklift works the way a cell does."
      ], right: 1 },

    { tag: "Every Cell", q: "Which three things does every cell ever found have?",
      find: [7, 8, 9, 10],
      hint: "The wall, the floor, and the one in charge.",
      choices: [
        "A nucleus, a cell wall and chloroplasts.",
        "Mitochondria, chloroplasts and chromatin.",
        "A cell membrane, cytoplasm, and a nucleus or nuclear material.",
        "A membrane, a skeleton and instructions."
      ], right: 2 },

    { tag: "One Question", q: "What single question decides whether a cell is prokaryotic or eukaryotic?",
      find: [11, 13, 25],
      hint: "It is the office question, and it is not about size or shape.",
      choices: [
        "Is the cell from a plant or an animal?",
        "Is there a membrane around the control center?",
        "Is the cell big enough to see?",
        "Does the cell have mitochondria?"
      ], right: 1 },

    { tag: "One Question", q: "A bacterium's genetic material floats loose in its cytoplasm. What does that make it?",
      find: [15, 16],
      hint: "Loose on the floor means no walled office.",
      choices: [
        "Prokaryotic.",
        "Eukaryotic.",
        "A plant cell.",
        "An organelle."
      ], right: 0 },

    { tag: "The Nucleus", q: "What do the instructions in the nucleus actually cover?",
      find: [27, 28],
      hint: "The lesson stops and makes a point of this one.",
      choices: [
        "Only that one cell.",
        "Only the cells nearby.",
        "Building and running the whole organism.",
        "Only how the cell divides."
      ], right: 2 },

    { tag: "Power", q: "Why does the lesson compare mitochondria to the power in the warehouse?",
      find: [35, 36, 37],
      hint: "Think about what happens to every other job when the power goes out.",
      choices: [
        "Because mitochondria are the largest organelle.",
        "Because without energy released from food, the cell's other work stops.",
        "Because mitochondria are only found in machines.",
        "Because the forklift battery is a kind of cell."
      ], right: 1 }
  ],

  vocabQuestions: [
    { q: "What is an <i>organelle</i>?",
      choices: [
        "A structure inside the cytoplasm that does one particular job.",
        "The wall around the outside of a cell.",
        "Another word for a nucleus.",
        "A small organism that lives inside a cell."
      ], right: 0 },
    { q: "What does <i>cytoplasm</i> do?",
      choices: [
        "It carries the cell's instructions.",
        "It fills the inside of the cell and holds everything in place.",
        "It catches sunlight.",
        "It decides what enters the cell."
      ], right: 1 },
    { q: "What makes a cell <i>eukaryotic</i>?",
      choices: [
        "It is larger than other cells.",
        "It comes from a plant.",
        "Its nucleus has a membrane around it.",
        "It contains chloroplasts."
      ], right: 2 },
    { q: "What do <i>chloroplasts</i> do?",
      choices: [
        "They release energy from food.",
        "They hold the cell's instructions.",
        "They stiffen the cell wall.",
        "They catch sunlight so a plant can make its own food."
      ], right: 3 }
  ],

  todo: { title: "Before You Close the Page", s: [
      "Go back to the warehouse in your head for a second before you answer anything.",
      "If you can say what three different people in that building are doing, and why the boss might have walls around him, then you already know most of this.",
      "The cards at the top of the page are those same jobs with their real names on them, so read them first if you jumped straight down here.",
      "Then work through the questions, and press Find it in the story any time you would rather go and look than guess.",
      "The one that trips most people is prokaryotic against eukaryotic, so if that one is slow, read Does the Boss Have an Office again from the top.",
      "Finish with the word check at the bottom, and print the answer sheet if you are keeping a record of what you scored."
  ] }
};
