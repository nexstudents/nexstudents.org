/* science/cells-the-building-blocks-of-life
   Grade 7 · science · unit 2. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 THE PROSE IN `parts` IS A DRAFT, NOT PAUL'S VOICE. Built 2026-09-13.

   🔑 THIS LESSON CLOSES THE GAP. Science was built through 1-4 and then jumped
   to 3-2, seven lessons ahead, because I was building off the year plan's dates
   instead of the series → [[feedback-build-next-in-series]]. Unit 2 is the
   run-up that 3-2 assumed and did not have. */
'use strict';
module.exports = {
  id: "science/cells-the-building-blocks-of-life",
  slug: "cells-the-building-blocks-of-life",
  title: "Cells: The Building Blocks of Life",
  unit: "Life Science &middot; U2-L1",
  seq: { unit: 2, unitTitle: "Inside the Cell", n: 1 },

  /* ── /teach-plan, 2026-09-13. Read off Merrill Life Science pp30-35
        (leaf n55-n59), archive.org/details/merrilllifescien0000dani. ── */
  plan: {
    objective: "Say why nobody knew cells existed until there was a tool to see them, and state the three parts of the cell theory.",
    markers: [
      "QUOTED, Objectives box: 'Discuss the history leading to the cell theory.'",
      "QUOTED, Objectives box: 'Explain the difference between the compound light microscope and electron microscope.'",
      "QUOTED, Objectives box: 'State the cell theory.'",
      "QUOTED, New Science Words: compound light microscope, electron microscope, cell theory",
      "QUOTED, the cell theory: '1. All organisms are made up of one or more cells. 2. Cells are the basic units of structure and function in all organisms. 3. All cells come from cells that already exist.'",
      "QUOTED, SECTION REVIEW 1: 'Explain why the invention of the microscope was important in the study of cells.'",
      "🚨 QUOTED, and it is the chain in the book's own words: 'Remember that at that time, people thought earthworms fell from the sky when it rained. They thought that life came about spontaneously.'",
    ],
    method: "THE ANALOGY AGAIN, THEN A HISTORY. Merrill opens with bricks in a wall seen from three blocks away - you cannot pick out one brick until you walk closer, and a microscope is what walking closer amounts to. Then the terms arrive in running prose. The second half is told as a HISTORY rather than a definition: Janssen, Leeuwenhoek, Schleiden, Schwann, Virchow, each adding one piece, and the cell theory is what they added up to.",
    exampleOnly: [
      "the brick wall three blocks away, the ivy leaf — WORLD: things you can walk up to and look at.",
      "🚨 The scientists' names are NOT example-only. The history IS the objective: 'Discuss the history leading to the cell theory.'",
    ],
    digitize: "The existing reading engine. The history is a story, which is exactly what this engine is for, and the three parts of the cell theory are what the answer-hunt points at. NO NEW MECHANIC NEEDED.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Science",
    blurb: "Nobody knew cells existed until somebody built a tool to see them. What that tool changed, and the three rules it led to.",
    contains: [
      "A story-form reading, read aloud with the words highlighted",
      "Five vocabulary words, each one defined inside the reading",
      "The three parts of the cell theory, and where each one came from",
      "A vocabulary check and a printable answer sheet",
    ] },
  eyebrow: ["Life Science", "U2-L1", "Life Science"],
  dek: "You are made of somewhere near thirty trillion of them and you have never seen one. For most of history, neither had anybody else.",
  scripture: {
    ref: "Psalm 139:15",
    text: "My substance was not hid from thee, when I was made in secret, and curiously wrought in the lowest parts of the earth.",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will explain why the microscope was necessary before cells could be studied, tell a compound light microscope from an electron microscope, and state the three parts of the cell theory."
      ]},
      { h: "Key Concepts", p: [
        "A microscope uses one or more lenses to make an enlarged image. A compound light microscope uses light through two or more lenses and magnifies a few hundred times; an electron microscope uses a beam of electrons instead of light and magnifies far more, but cannot be used on living things.",
        "The cell theory came from several people over about two hundred years, not from one discovery: all organisms are made of one or more cells, cells are the basic units of structure and function, and all cells come from cells that already exist."
      ]},
      { h: "Where Students Get Stuck", p: [
        "🚨 Part three of the cell theory IS Unit 1's biogenesis, arriving again in a new place. Merrill says so directly, reminding the reader that people once thought life appeared spontaneously. If that connection lands, the lesson has done its job even if the names blur.",
        "Students also assume an electron microscope is simply a better microscope. It is better at magnifying and worse at everything alive, because the specimen cannot survive the process."
      ]},
      { h: "Teaching Suggestion", p: [
        "Do the brick wall for real if you can. Look at a brick or block wall from far down the street, then walk toward it and notice the exact point where the separate bricks appear. That moment is what a microscope does to a leaf.",
        "This is the lesson where the run-up to the whole unit sits. If cells feel abstract later, the trouble usually started here."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "A Wall Three Blocks Away", s: [
      "Look at a brick wall from three blocks away.",
      "",
      "You can see that it is a wall.",
      "You cannot see a single brick.",
      "",
      "Start walking toward it and the bricks begin to separate from each other.",
      "Get right up to it and you can see one brick in detail, its edges and its color and the mortar around it.",
      "",
      "Nothing about the wall changed.",
      "You got closer.",
      "",
      "Now look at a leaf.",
      "",
      "A leaf is built out of parts too small to separate with your eyes, however hard you stare.",
      "There is no walking closer to a leaf.",
      "",
      "A microscope is what closer looks like for something that small.",
      "A microscope has one or more lenses that make an enlarged image of an object.",
      "",
      "Through those lenses you are brought up close to the leaf, and the separate parts appear, the way the bricks did."
    ]},

    { title: "The Smallest Thing That Is Alive", s: [
      "Those separate parts are cells.",
      "",
      "Cells are the smallest units that carry out the activities of life in organisms.",
      "",
      "That is worth reading twice, because it is doing something careful.",
      "It does not say a cell is the smallest thing there is.",
      "It says a cell is the smallest thing that is ALIVE.",
      "",
      "There are smaller things inside a cell, and none of them is alive on its own.",
      "",
      "You are made of somewhere near thirty trillion cells.",
      "You have almost certainly never seen one.",
      "",
      "For nearly all of human history, neither had anybody else, and that is the reason this lesson starts with a tool rather than with a fact."
    ]},

    { title: "Two Hundred Years of Looking", s: [
      "Around 1590, a Dutch maker of reading glasses named Zacharias Janssen put two magnifying glasses together in a tube.",
      "",
      "The result was the first crude compound microscope.",
      "A compound light microscope uses light and two or more lenses to magnify an object.",
      "",
      "By combining two lenses he got an image much larger than one lens alone could give.",
      "",
      "Those early microscopes were not satisfactory, because the lenses would make a fuzzy image.",
      "",
      "In the mid 1600s another Dutch scientist, Anton van Leeuwenhoek, made a simple microscope with a single lens that he ground himself.",
      "With it, he reported seeing things in pond water that no one had ever imagined were there.",
      "His microscope could magnify up to about 270 times.",
      "",
      "A microscope like the one in most classrooms today magnifies about 270 times as well.",
      "",
      "Much later came a completely different idea.",
      "An electron microscope uses a beam of electrons instead of light, and magnifies far more than any light microscope can.",
      "",
      "It has one serious cost.",
      "A living thing cannot survive being looked at that way, so an electron microscope only ever shows you something that is already dead."
    ]},

    { title: "What They Added Up To", s: [
      "Several people, each adding one piece, ended up somewhere none of them could have reached alone.",
      "",
      "A German scientist, Theodor Schwann, looked at many different animal cells and concluded that all animals are made of cells.",
      "Another, Matthias Schleiden, had concluded the same about plants.",
      "Together they became convinced that all living things are made of cells.",
      "",
      "About fifteen years later a German doctor, Rudolph Virchow, proposed something that sounded startling at the time.",
      "New cells do not form on their own.",
      "Cells divide to form new cells.",
      "",
      "Every cell that is, or has ever been, came from a cell that already existed.",
      "",
      "You have to remember what people believed when he said it.",
      "They thought earthworms fell out of the sky when it rained.",
      "They thought life simply came about on its own.",
      "",
      "That is spontaneous generation, from Unit 1, and Virchow was arguing against it at the level of the cell.",
      "",
      "What those scientists arrived at became known as the cell theory."
    ]},

    { title: "The Three Rules", s: [
      "The cell theory has three parts.",
      "",
      "Part one is that all organisms are made up of one or more cells.",
      "",
      "Part two is that cells are the basic units of structure and function in all organisms.",
      "",
      "Part three is that all cells come from cells that already exist.",
      "",
      "Read the third one again and see where you have met it before.",
      "",
      "That is biogenesis.",
      "It is the same idea Redi and Pasteur established in Unit 1, arriving again from a completely different direction.",
      "",
      "Redi worked with jars of meat and flies you can see.",
      "Virchow worked with cells you need a microscope to see.",
      "They reached the same conclusion.",
      "",
      "When two separate lines of evidence meet in the same place, that is a large part of why scientists trust a theory."
    ]},

    { title: "Curiously Wrought", s: [
      "Psalm 139:15 says, “My substance was not hid from thee, when I was made in secret, and curiously wrought in the lowest parts of the earth.”",
      "",
      "Made in secret is a fair description of what this lesson is about.",
      "",
      "For thousands of years the structure every living thing is built from was completely invisible.",
      "It was not hidden because it was far away, but because it was small.",
      "",
      "It was there in every leaf and every hand the whole time, doing its work, waiting for somebody to grind a good enough lens.",
      "",
      "The order was already there.",
      "Finding it took two hundred years and a tube with two pieces of glass in it."
    ]}
  ],

  todo: { title: "What To Do Now", s: [
      "That is the reading done.",
      "First, the questions, {q} of them, and every answer is in the reading above.",
      "If one is hard, use the bar or the arrows to go back and read that part again.",
      "The one worth slowing down on is where you have met the third part of the cell theory before.",
      "Then the word cards, {v} of them, and the check underneath.",
      "Last, go and look at a brick wall from a long way off, then walk up to it.",
      "Notice the moment the separate bricks appear.",
      "That is exactly what a microscope does to a leaf, and it is the whole idea this lesson is built on."
  ] },

  words: [
    ["Cell", "The smallest unit that carries out the activities of life in an organism."],
    ["Microscope", "A device with one or more lenses that makes an enlarged image of an object."],
    ["Compound light microscope", "A microscope that uses light and two or more lenses to magnify an object."],
    ["Electron microscope", "A microscope that uses a beam of electrons instead of light, magnifying far more but only showing things that are not alive."],
    ["Cell theory", "The three ideas that all organisms are made of cells, that cells are the basic units of structure and function, and that all cells come from existing cells."]
  ],

  findsAt: 66,
  questions: [
    { q: "Why was the invention of the microscope important in the study of cells?",
      find: [9, 10],
      hint: "Think about the brick wall, and why staring harder at a leaf does not work.",
      choices: [
        "Because cells are too small to separate with your eyes, and a microscope is what getting closer means for something that small.",
        "Because cells only appear under bright light.",
        "Because microscopes made cells grow larger.",
        "Because cells had been hidden deliberately."
      ], right: 0 },

    { q: "What does it mean that a cell is the smallest unit that carries out the activities of life?",
      find: [17, 18],
      hint: "The reading says this sentence is being careful. Careful about what?",
      choices: [
        "That nothing smaller than a cell exists.",
        "That a cell is the smallest thing that is alive, though there are smaller things inside it.",
        "That cells are the smallest things a microscope can show.",
        "That every cell is exactly the same size."
      ], right: 1 },

    { q: "What is the difference between a compound light microscope and an electron microscope?",
      find: [32, 34],
      hint: "One of them has a serious cost attached to it.",
      choices: [
        "One is modern and the other is old-fashioned.",
        "One is used for plants and the other for animals.",
        "One uses light and lenses; the other uses a beam of electrons, magnifies far more, and cannot show living things.",
        "One was invented in Holland and the other in Germany."
      ], right: 2 },

    { q: "What did Rudolph Virchow propose?",
      find: [41, 42],
      hint: "It was startling at the time. Remember what people believed then.",
      choices: [
        "That all animals are made of cells.",
        "That microscopes should use electrons.",
        "That cells are too small to study.",
        "That cells divide to form new cells, so every cell came from one that already existed."
      ], right: 3 },

    { q: "Where have you met the third part of the cell theory before?",
      find: [53],
      hint: "Unit 1. Think about Redi's jars and Pasteur's flask.",
      choices: [
        "It is biogenesis, the same idea Redi and Pasteur established in Unit 1.",
        "It is homeostasis, from the first lesson of Unit 1.",
        "It has not appeared before.",
        "It is the scientific method."
      ], right: 0 },

    { q: "Why does it matter that Redi and Virchow reached the same conclusion by different routes?",
      find: [58],
      hint: "The last line of The Three Rules answers this directly.",
      choices: [
        "Because it proves they were working together.",
        "Because two separate lines of evidence meeting in the same place is much of why scientists trust a theory.",
        "Because it means one of them must be wrong.",
        "Because it shows microscopes are unnecessary."
      ], right: 1 }
  ],

  vocabQuestions: [
    { q: "What is a <i>cell</i>?",
      choices: [
        "The smallest unit that carries out the activities of life in an organism.",
        "The smallest thing that exists.",
        "Any part of a plant.",
        "A tool for magnifying small objects."
      ], right: 0 },
    { q: "What is a <i>compound light microscope</i>?",
      choices: [
        "A microscope using a beam of electrons.",
        "A microscope that uses light and two or more lenses to magnify an object.",
        "A microscope with exactly one lens.",
        "Any device that makes things look bigger."
      ], right: 1 },
    { q: "What is the drawback of an <i>electron microscope</i>?",
      choices: [
        "It magnifies less than a light microscope.",
        "It can only be used on plants.",
        "It cannot show living things.",
        "It needs very bright light."
      ], right: 2 },
    { q: "Which of these is NOT part of the <i>cell theory</i>?",
      choices: [
        "All organisms are made up of one or more cells.",
        "Cells are the basic units of structure and function.",
        "All cells come from cells that already exist.",
        "All cells are the same size and shape."
      ], right: 3 }
  ]
};
