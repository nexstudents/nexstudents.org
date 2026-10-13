/* science/the-evidence-examined
   Grade 7 · science · unit 6, lesson 2. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 REWRITTEN 2026-10-13 (Sonnet, to be checked by Opus) after Kolten said the
   unit's lessons don't explain anything, and an audit graded this one D+.
   The 2026-10-11 version listed eight kinds of evidence, opened with the mosasaur
   puzzle (a sea animal found 500 km from the sea) and never answered it, and put
   "relative dating", "homologous", "vestigial" and "embryology" back to back with
   radioactive decay left unexplained. This one: opens on the puzzle, teaches a
   fossil and sedimentary rock with a jar of muddy water, teaches relative dating
   with a stack of newspapers and a DRAWN stack of rock layers built in a walk,
   teaches the radioactive clock with a candle (a worked candle problem first, then
   the rock version matched to it in a drawn table), then bodies built on the same
   plan, then the sort (found vs taken to mean), then both accounts side by side in
   a drawn table, and ANSWERS THE PUZZLE at the end, fairly. A short recap of the
   last lesson opens the second section.
   CUT: vestigial structures, embryology, the geologic time scale, the five fossil
   types beyond a quick three, and the DNA detail beyond one sentence. Word cards
   cut from 7 to 5 (Fossil, Sedimentary Rock, Relative Dating, Radioactive Element,
   Homologous Structures). The unit review is rewritten to match.
   The embryo "gill slits" line is NOT repeated: the folds in an early embryo's
   neck are not gills, so the lesson says nothing about them.

   🚨 SIDE BY SIDE, NOT BLENDED (BEHAVIOR.md). What was found and measured is taught
   plainly. What the finds MEAN about where living things came from is named as a
   different kind of question, and both answers are given in their own words under
   the labels "What the world says" and "What God tells us". Deep time is never
   plain fact: every age number is attributed ("many scientists say"). The
   questions sort statements and check facts; none has a side for its right answer.

   ⚠️ ADDED FROM THE RECORD, worth a glance from Paul:
   · That radioactive dating rests on three assumptions (starting amount, nothing
     added or lost, a steady rate), and that the rate is measured today. The old
     draft had this; kept. The candle is an everyday picture of it, with made-up
     numbers (a 12 cm candle, 2 cm an hour) used only to show the arithmetic.
   · How people who hold creation read the layers (rapid burial, a worldwide flood)
     and that views on the age of the earth differ among them. One sentence each,
     no argument for it. Kept from the old draft.
   · The creation reading of the mosasaur (a sea animal far from the sea read as one
     sign of the Flood) is new in this draft and is one sentence, attributed.
   ⚠️ The book's Activity 6-1 (the penny decay model) and the Ostrich Egg Timer
   feature are not in this lesson.

   🚨 THE VERSE IS A WORKING CHOICE, NOT PAUL'S. Proverbs 25:2, about searching
   a matter out. Choosing the scripture is his, so it goes in the review queue. */
'use strict';

/* draws a stack of rock layers; rows are [label, what is in the layer].
   A labelled one-column grid, which the engine turns into a real table. */
const stack = (rows) => {
  const w = Math.max(...rows.map((r) => r[1].length)) + 2;
  const line = (l, r) => "  " + l + "─".repeat(w) + r;
  const out = [line("┌", "┐")];
  rows.forEach((r, i) => {
    out.push(r[0].padEnd(8) + "│ " + r[1].padEnd(w - 1) + "│");
    out.push(i < rows.length - 1 ? line("├", "┤") : line("└", "┘"));
  });
  return out.join("\n");
};

/* draws a small table with a header row; rows is a list of equal-length lists */
const table = (rows) => {
  const n = rows[0].length, w = [];
  for (let i = 0; i < n; i++) w[i] = Math.max(...rows.map((r) => [...r[i]].length)) + 2;
  const line = (l, m, r) => l + w.map((x) => "─".repeat(x)).join(m) + r;
  const row = (r) => "│" + r.map((c, i) => " " + c + " ".repeat(w[i] - 1 - [...c].length)).join("│") + "│";
  return [line("┌", "┬", "┐"), row(rows[0]), line("├", "┼", "┤")]
    .concat(rows.slice(1).map(row), [line("└", "┴", "┘")]).join("\n");
};

module.exports = {
  id: "science/the-evidence-examined",
  slug: "the-evidence-examined",
  title: "The Evidence, Examined Honestly",
  unit: "Life Science &middot; U6-L2",
  seq: { unit: 6, unitTitle: "Origins: Evolution and Creation, Side by Side", n: 2 },
  natural: "2026-10-13",

  /* ── /teach-plan, rewritten 2026-10-13. Merrill Life Science pp136-143. ── */
  plan: {
    objective: "Explain what a fossil is, order fossils by their rock layers, explain how a radioactive clock works and what it takes for granted, and sort what was found or measured from what it is taken to mean about where living things came from.",
    markers: [
      "BOOK (paraphrased), Objectives: describe the importance of fossils as evidence, explain how relative and radioactive dating date the fossil record, and give examples of the types of evidence.",
      "BOOK (paraphrased), opening story: in 1975 a couple found odd rocks at Lake Lavon in Texas, and the pieces turned out to be the skull of a mosasaur about 15 meters long, which means North Texas was under a shallow sea about 120 million years ago.",
      "BOOK (paraphrased), fossils are any remains of life from an earlier time: an imprint, a cast, wood or bone replaced by minerals, something frozen in ice, or something trapped in resin. Most are in sedimentary rock.",
      "BOOK (paraphrased), relative dating: in undisturbed layers the lower ones are older, which gives an estimate. Radioactive dating: an element changes to a stable product at a constant rate, and comparing the amounts gives an accurate age.",
      "BOOK (paraphrased), other evidence: homologous structures (arm, flipper, bat wing and bird wing share bones) and DNA that is more alike in close relatives.",
      "BOOK (paraphrased), Section Review item 4: leaf fossils in the top layer, shells at the bottom and fish bones in the middle, put them oldest to youngest.",
    ],
    method: "A PICTURE FOR EACH TOOL, THEN THE SORT. A jar of muddy water for layers, a stack of newspapers and a drawn stack of rock for relative dating, a candle for the radioactive clock and what it takes for granted, one set of bones in four limbs for likeness. Then the two layers named out loud: what was found and measured, and what it is taken to mean. Both answers are given in their own words (what the world says, what God tells us), and the opening puzzle is answered from both.",
    exampleOnly: [
      "The Lake Lavon mosasaur, the leaf, fish and shell layers, the candle, and the arm, flipper and wing. WORLD: a skull on a Texas lakeshore. The title and objective don't name them.",
      "⚠️ The three dating assumptions, the creation reading of the layers and of the mosasaur are added from the record, see the header.",
      "Left out on purpose: vestigial structures, embryology, the geologic time scale, and any claim about gill slits.",
    ],
    digitize: "The reading engine plus three Watch It Worked walkthroughs with drawn pictures (the layer stack built step by step, the candle clock matched to the rock clock in a table, the sort), and one side-by-side table of the two readings. Questions check the facts and sort statements. No answer key to a side, and the todo asks for a sorting table in the notebook.",
    unclear: "",
  },

  sheet: { slug: "the-evidence-examined-homework", subject: "science",
    note: "Do it on screen or print it. Your score shows here once you check it." },


  shelf: { grades: [7], subject: "Science",
    blurb: "A couple on a Texas lakeshore pick up an odd rock, and it turns out to be a monster's skull. How rock layers and a candle-like clock work, and what people take the finds to mean.",
    contains: [
      "What a fossil is, with a jar of muddy water for the picture",
      "Rock layers drawn as a stack, and how to read them step by step",
      "A rock clock explained with a candle",
      "The same bones in an arm, a flipper and two kinds of wings",
      "What was found against what it is taken to mean",
      "Both answers to the skull puzzle, in their own words",
    ] },
  eyebrow: ["Life Science", "U6-L2", "Origins: Evolution and Creation, Side by Side"],
  dek: "A sea monster's skull turns up hundreds of miles from the sea. Here's how rock layers and rock clocks work, and what people take the evidence to mean.",

  scripture: {
    ref: "Proverbs 25:2",
    text: "It is the glory of God to conceal a thing: but the honour of kings is to search out a matter.",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Your student explains what a fossil is, orders fossils by their rock layers, explains how a radioactive clock works and what it takes for granted, and sorts each kind of evidence into what was found or measured and what it is taken to mean."
      ]},
      { h: "Side by Side, Not Blended", p: [
        "Same rule as the first lesson of the unit. What can be found and measured is taught plainly. What the finds mean about where living things came from is named as a different kind of question, and both answers are given in their own words under the labels what the world says and what God tells us.",
        "Every age number is attributed to the scientists who use it. Your student sorts and checks facts and is never asked to pick a side."
      ]},
      { h: "Key Concepts", p: [
        "In layers nobody has disturbed, the lower layer was laid down first, so its fossils are older. That gives an order. A radioactive clock puts a number on it, and it works only if three things hold: the starting amount, nothing added or lost, and a steady rate.",
        "A likeness between living things is also a measured thing. Whether it shows a shared ancestor or a shared designer is the interpretation, and it comes from outside the measurement."
      ]},
      { h: "Added From the Record", p: [
        "The three dating assumptions, how people who hold creation read the layers and the mosasaur, and the made-up candle numbers are added. The textbook's own parts are the mosasaur story, the fossil types, both kinds of dating, the bones in four limbs, the DNA comparison and the rock-layer review item. Vestigial structures and embryos are left out on purpose, and nothing in the lesson claims an embryo has gill slits."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "A Skull on the Lakeshore", s: [
      "In July of 1975 a couple walking the shore of Lake Lavon in north Texas noticed some odd rocks poking out of the mud.",
      "They carried a few of the rocks to a scientist who knew reptiles, and he knew right away what they were.",
      "They were pieces of a skull from a mosasaur, a giant saltwater lizard that doesn't exist anymore.",
      "A professor and his students dug out the rest, and it took one student almost a year to clean and rebuild a skull about 1.75 meters long.",
      "It belonged to a creature roughly 15 meters from nose to tail.",
      "Here's the puzzle: that lakeshore is over 500 kilometers from the Gulf of Mexico, so how did a sea animal end up there?",
      "Hang on to that question, because by the end of this lesson you'll be able to answer it."
    ]},

    { title: "Where We Left Off", s: [
      "Last lesson you learned that natural selection can be watched, like the finches' beaks getting deeper after a drought.",
      "You also learned that where all living things came from is a different kind of question, because nobody watched the distant past.",
      "People give two answers to it, what the world says and what God tells us, and this lesson looks at the evidence both answers have to explain."
    ]},

    { title: "What a Fossil Is", s: [
      "A {{fossil}} is any trace of a living thing from long ago, and the mosasaur's bones are only one kind.",
      "A leaf can press its shape into soft mud that later hardens, the same way your hand leaves a print in wet sand.",
      "Bones and wood can slowly be replaced by minerals, and an insect can get trapped in sticky tree sap that hardens into amber.",
      "Pour muddy pond water into a jar and let it sit, and the mud slowly settles into a layer on the bottom.",
      "Add more muddy water and let it settle again, and you get a second layer on top of the first.",
      "Rock that forms this way, from mud or sand that settled out of water and packed down, is called {{sedimentary rock}}.",
      "Most fossils are found in sedimentary rock, and its layers are the first thing scientists read."
    ]},

    { title: "Reading the Layers", s: [
      "Each layer settles on top of the one before it, so the bottom layer is the oldest, like a stack of newspapers where the one on the bottom was put there first.",
      "Scientists use that idea to put fossils in order, and it's called {{relative dating}}.",
      "It only works in layers that are undisturbed, which means nobody has tipped them over or folded them, the same as a stack of newspapers that hasn't been knocked down.",
      "Relative dating tells you which fossil is older, but it doesn't tell you how old, so it only gives an estimate.",
      "Watch it work on a stack with leaf prints in the top layer, fish bones in the middle and shells at the bottom.",
      "",
      "[walk] Put the fossils in order, from oldest to youngest.",
      "[step] Draw the stack just the way you found it, with one kind of fossil in each layer. || " + stack([["top", "leaf imprints"], ["middle", "fish bones"], ["bottom", "shells"]]),
      "[step] The bottom layer settled first, so its fossils are the oldest. || " + stack([["top", "leaf imprints"], ["middle", "fish bones"], ["bottom", "shells  (oldest)"]]),
      "[step] Every layer above it settled later, so number the layers going up from the bottom. || " + stack([["3rd", "leaf imprints"], ["2nd", "fish bones"], ["1st", "shells"]]),
      "[step] Read the numbers from first to third, and you have the order from oldest to youngest. || oldest  →  shells\n           fish bones\nyoungest  →  leaf imprints",
      "[step] Last, ask whether the layers were ever tipped or folded, because if they were, this rule can't be trusted. || tipped or folded layers  →  order can't be trusted",
      "",
      "So the order is shells, then fish bones, then leaf imprints."
    ]},

    { title: "A Clock in the Rock", s: [
      "Layers tell you what came first, but they can't tell you how long ago, so scientists use a second tool that works like a clock.",
      "Some kinds of atoms slowly change into a different kind of atom, and an element made of them is called a {{radioactive element}}.",
      "Uranium is one, and it slowly turns into lead, and each radioactive element changes at its own steady speed that scientists measure in laboratories today.",
      "To see how a clock like that works, picture a candle that burns down at the same speed all the time.",
      "",
      "[walk] A candle started 12 centimeters tall and burns 2 centimeters every hour, and now it's 6 centimeters tall, so how long has it been lit?",
      "[step] Subtract to find how much of the candle has burned away. || 12 - 6 = 6 centimeters burned",
      "[step] Divide by how much burns each hour to find the hours. || 6 ÷ 2 = 3 hours",
      "[step] So the candle has been burning for 3 hours. || lit for 3 hours",
      "",
      "A rock clock works the same way, except the candle is uranium and what builds up beside it is lead.",
      "The more lead there is beside the uranium, the longer the clock has been running, so the older the rock.",
      "Scientists who use this method say it's the most accurate way to put a number on a rock's age."
    ]},

    { title: "What the Clock Takes for Granted", s: [
      "Before you trust the candle clock, notice what you had to know.",
      "You had to know how tall the candle was when it was lit, because you didn't watch it get lit.",
      "You also had to know that nobody added wax or put it out for a while, and that it burned at one speed the whole time.",
      "A rock clock needs the same three things, and here they are side by side.",
      "",
      "[walk] Match each thing the candle clock needs to the rock clock.",
      "[step] First, you need the starting amount, which is how tall the candle was or how much uranium the rock began with. || " + table([["Candle clock", "Rock clock"], ["How tall it started", "How much uranium it started with"]]),
      "[step] Second, nothing was added or lost along the way. || " + table([["Candle clock", "Rock clock"], ["How tall it started", "How much uranium it started with"], ["No wax added or lost", "No uranium or lead added or washed away"]]),
      "[step] Third, the speed stayed the same the whole time. || " + table([["Candle clock", "Rock clock"], ["How tall it started", "How much uranium it started with"], ["No wax added or lost", "No uranium or lead added or washed away"], ["Burns at one speed", "Changes at one speed"]]),
      "",
      "Nobody can check those three by looking at the dial, because the speed is measured today and the distant past is something nobody watched.",
      "Scientists who use the method test these things in several ways and trust the results, while others question them.",
      "Everyone agrees the measuring in the laboratory is real, and the disagreement is about what it takes for granted."
    ]},

    { title: "Same Plan, Different Jobs", s: [
      "The third kind of evidence comes from bodies you can look at today instead of from rocks.",
      "A human arm, a dolphin's flipper, a bat's wing and a bird's wing do very different jobs.",
      "",
      "[walk] Compare four body parts.",
      "[step] First look at what each one does. || " + table([["Body part", "What it does"], ["Human arm", "holds things"], ["Dolphin flipper", "swims"], ["Bat wing", "flies"], ["Bird wing", "flies"]]),
      "[step] Now look inside, and each one has nearly the same bones, muscles and blood vessels. || " + table([["Body part", "What it does", "Inside"], ["Human arm", "holds things", "same plan"], ["Dolphin flipper", "swims", "same plan"], ["Bat wing", "flies", "same plan"], ["Bird wing", "flies", "same plan"]]),
      "",
      "Body parts built on the same plan are called {{homologous structures}}, which just means same-plan parts.",
      "DNA is the set of instructions inside your cells, like the recipe book from the genes lesson, and scientists can compare it too.",
      "The DNA of close relatives is more alike than the DNA of distant ones, so a dog's is closer to a bear's than to a lizard's."
    ]},

    { title: "Found, and Taken to Mean", s: [
      "Now look back at the four kinds of evidence and ask two questions about each one: what did somebody find, and what does it get taken to mean?",
      "A skull in a layer, a count of lead beside uranium, the same bones in four limbs and a DNA match are all things people found and measured.",
      "Nobody argues about whether those things are there.",
      "What the finds say about where living things came from is a different kind of question, because nobody watched the distant past and no experiment can repeat it.",
      "",
      "[walk] Sort four statements by asking whether you could point at it or measure it.",
      "[step] One fossil sits in a lower layer than another, which anyone can check. || fossil in a lower layer  →  FOUND",
      "[step] Lead builds up beside uranium at a speed that can be measured today. || lead beside uranium  →  FOUND",
      "[step] All living things share one ancestor, which nobody was there to watch. || one ancestor  →  TAKEN TO MEAN",
      "[step] One Designer used a good plan again and again, which nobody was there to watch either. || one Designer  →  TAKEN TO MEAN"
    ]},

    { title: "Two Readings of the Same Finds", s: [
      "Two answers have been given to the bigger question, and a fair lesson lets each one speak in its own words.",
      "What the world says is common descent, which is the view of most science courses, and it reads the likenesses as a sign that living things share ancestors.",
      "It reads the order of the layers as life changing over a very long time, and many scientists who hold it put that time at millions and billions of years.",
      "What God tells us is creation, the account in the Bible's first book, which says God made living things each “after his kind.”",
      "People who hold this view read the likenesses as one Designer using good plans again and again, and many read the layers as mostly laid down quickly by a worldwide flood.",
      "They don't all agree about how old the earth is, and they ask questions about the assumptions behind the clocks.",
      "",
      "[walk] Read the same finds two ways.",
      "[step] Start with the same bones in four limbs. || " + table([["The find", "What the world says", "What God tells us"], ["Same bones in four limbs", "A shared ancestor", "One Designer's good plan"]]),
      "[step] Add the order of the layers. || " + table([["The find", "What the world says", "What God tells us"], ["Same bones in four limbs", "A shared ancestor", "One Designer's good plan"], ["Layers in order", "Life changing over a long time", "Mostly laid down fast by a flood"]]),
      "[step] Add the radioactive clock. || " + table([["The find", "What the world says", "What God tells us"], ["Same bones in four limbs", "A shared ancestor", "One Designer's good plan"], ["Layers in order", "Life changing over a long time", "Mostly laid down fast by a flood"], ["Radioactive clock", "Rocks millions of years old", "Its three assumptions questioned"]]),
      "",
      "[verse] Proverbs 25:2 says, “It is the glory of God to conceal a thing: but the honour of kings is to search out a matter.”",
      "",
      "Notice what both readings share, because both accept the rock layers, the bones, the decay speeds and the DNA matches as real, and they part company only on what those finds say about the beginning.",
      "Each side also has hard questions put to it, and neither one wins by being loud."
    ]},

    { title: "Back to the Skull", s: [
      "Now you can answer the question from the start: how did a sea animal end up more than 500 kilometers from the sea?",
      "Both answers agree on the finding, which is that the bones of a sea animal are sitting in rock that's now dry land, so water must once have covered that place.",
      "What the world says is that a shallow sea covered north Texas, and many scientists put that about 120 million years ago.",
      "What God tells us is that the Bible describes a flood that covered the whole earth, and many who hold creation read sea animals found far from today's shore as one sign of it.",
      "So the skull itself isn't in dispute, and the two answers part ways only on when the water was there and what caused it.",
      "You never had to pick one to follow the evidence, only to keep what was found apart from what it's taken to mean.",
      "The questions below ask you to do exactly that sorting, so use the hint if one sends you back."
    ]}
  ],

  todo: { title: "What To Do Now", s: [
      "A skull on a lakeshore, a stack of rock, a candle and a question that nobody was there to watch, and now the work is sorting.",
      "Start with the questions, {Q} of them, and then the vocabulary check at the bottom, {v} questions on the word cards at the top of the page.",
      "When a question asks whether something was found or is taken to mean, ask whether you could point at it or measure it.",
      "Then, in your notebook, make a table with two columns, one headed Found or Measured and one headed Taken To Mean About Origins.",
      "Choose two of the four kinds of evidence and put each one on its own row, writing a full sentence in each column.",
      "In the second column, give both readings, what the world says and what God tells us, each in its own words.",
      "There's no answer key, and nobody is asking which reading to hold, only whether you can say clearly what each one claims.",
      "Last, open the Homework Sheet with the button at the bottom of the page, and either fill it out right on the screen or print it and do it on paper."
  ] },

  words: [
    ["Fossil", "Any trace of a living thing from long ago, such as a bone, a leaf print, or an insect in amber.", 10],
    ["Sedimentary rock", "Rock made when mud or sand settles out of water and packs down into layers. Most fossils are found in it.", 15],
    ["Relative dating", "Putting fossils in order by their layers: in undisturbed rock, the lower layer is older.", 18],
    ["Radioactive element", "An element whose atoms slowly change into a different kind of atom at a steady speed, like a clock.", 30],
    ["Homologous structures", "Body parts built on the same plan, like the bones in a human arm and a bat's wing.", 56]
  ],

  findsAt: 88,
  questions: [
    { q: "Why was it a puzzle to find a mosasaur skull on the shore of Lake Lavon?",
      find: [5],
      hint: "Read A Skull on the Lakeshore.",
      choices: [
        "The lake is over 500 kilometers from the Gulf, and a mosasaur was a sea animal.",
        "Mosasaurs lived on mountains.",
        "The skull was only a few centimeters long.",
        "Nobody had ever found a fossil in Texas."
      ], right: 0,
      why: "A sea animal's bones were far from any sea." },

    { q: "Which of these is a fossil?",
      find: [10],
      hint: "Read What a Fossil Is.",
      choices: [
        "A leaf print pressed into mud that later hardened",
        "A rock formed from melted lava",
        "A living tree",
        "A jar of muddy water"
      ], right: 0,
      why: "A fossil is any trace of a living thing from long ago, and a leaf print counts." },

    { q: "In rock layers that nobody has disturbed, which fossils are the oldest?",
      find: [17],
      hint: "Think of the stack of newspapers.",
      choices: [
        "The ones in the top layer",
        "The ones in the bottom layer",
        "The ones in the middle",
        "They are all the same age"
      ], right: 1,
      why: "Each layer settles on top of the one before it, so the bottom one came first." },

    { q: "A rock has leaf prints in the top layer, shells in the bottom layer and fish bones in the middle. Which is the order from oldest to youngest?",
      find: [26, 28],
      hint: "Read the walk and use the Show All button.",
      choices: [
        "Leaf prints, fish bones, shells",
        "Fish bones, leaf prints, shells",
        "Shells, leaf prints, fish bones",
        "Shells, fish bones, leaf prints"
      ], right: 3,
      why: "Start at the bottom and go up: shells, fish bones, leaf prints." },

    { q: "A candle started 20 centimeters tall and burns 4 centimeters every hour. Now it's 8 centimeters tall. How long has it been lit?",
      find: [34, 35],
      hint: "Subtract to find how much burned, then divide by how much burns each hour.",
      choices: [
        "2 hours",
        "3 hours",
        "5 hours",
        "12 hours"
      ], right: 1,
      why: "20 - 8 = 12 centimeters burned, and 12 ÷ 4 = 3 hours." },

    { q: "Which of these does a rock clock have to take for granted?",
      find: [47, 48],
      hint: "Read What the Clock Takes for Granted.",
      choices: [
        "That the speed of change stayed the same in the past",
        "That every rock is the same age",
        "That fossils are always in the top layer",
        "That nobody has ever measured the speed"
      ], right: 0,
      why: "The speed is measured today, and the clock assumes it was the same all through the past." },

    { q: "What do a human arm, a dolphin's flipper, a bat's wing and a bird's wing have in common?",
      find: [55],
      hint: "Read Same Plan, Different Jobs.",
      choices: [
        "They are all used for flying.",
        "They are all built on nearly the same plan of bones, muscles and blood vessels.",
        "They only grow after birth.",
        "They are all the same size."
      ], right: 1,
      why: "They do different jobs but are built on the same plan." },

    { q: "Which of these is a statement about what the evidence is taken to mean, and not something measured?",
      find: [67, 62],
      hint: "Ask whether you could point at it or measure it.",
      choices: [
        "A fossil sits in a lower layer of rock.",
        "Lead builds up beside uranium at a speed measured today.",
        "Two animals have nearly the same bones.",
        "The likenesses between living things show where they came from."
      ], right: 3,
      why: "Nobody can point at where living things came from. The other three can be checked." },

    { q: "What do the two answers agree about the mosasaur skull?",
      find: [82],
      hint: "Read Back to the Skull.",
      choices: [
        "That the earth is a certain age",
        "That the bones of a sea animal are in rock that is now dry land, so water once covered the place",
        "That the skull isn't real",
        "That the sea was never there"
      ], right: 1,
      why: "They agree on the finding and part ways on when the water was there and what caused it." }
  ],

  vocabQuestions: [
    { q: "What is a <i>fossil</i>?",
      choices: [
        "Any trace of a living thing from long ago",
        "A kind of volcano",
        "A tool for measuring rock",
        "A living animal that never changes"
      ], right: 0 },
    { q: "What is <i>sedimentary rock</i>?",
      choices: [
        "Rock that comes out of a volcano",
        "Rock made when mud or sand settles out of water and packs into layers",
        "Rock made only of metal",
        "Rock that has no layers"
      ], right: 1 },
    { q: "What is <i>relative dating</i>?",
      choices: [
        "Asking a relative how old a fossil is",
        "Counting the rings in a tree",
        "Putting fossils in order by their layers, since lower layers in undisturbed rock are older",
        "Measuring how much lead is in a rock"
      ], right: 2 },
    { q: "What is a <i>radioactive element</i>?",
      choices: [
        "An element whose atoms slowly change into a different kind of atom at a steady speed",
        "An element that glows in the dark",
        "A kind of fossil",
        "An element that never changes"
      ], right: 0 },
    { q: "What are <i>homologous structures</i>?",
      choices: [
        "Body parts that are tiny and useless",
        "Fossils found in limestone",
        "Body parts built on the same plan, like the bones in an arm and a bat's wing",
        "Parts of a rock layer"
      ], right: 2 }
  ]
};
