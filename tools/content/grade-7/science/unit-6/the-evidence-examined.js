/* science/the-evidence-examined
   Grade 7 · science · unit 6, lesson 2. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 THE PROSE IN `parts` IS A DRAFT, NOT PAUL'S VOICE. DRAFT PROSE, CLAUDE'S,
   2026-10-11, Sonnet. Written from Merrill Life Science pp136-143 (Section 6-2,
   Evidence for Evolution) via the week 8-9 packet (paraphrased notes) and the
   week 8-9 plan. Structure copied from science/what-evolution-claims.

   🚨 SIDE BY SIDE, NOT BLENDED (BEHAVIOR.md). The textbook sorts its evidence
   into five kinds: fossils, relative and radioactive dating, homologous and
   vestigial structures, embryology, and chemical (DNA) likeness. Layer one,
   what is found and measured, is taught the way the book teaches it, with no
   hedging. Layer two, what the finds MEAN about where living things came from,
   is named out loud as a different kind of question, and both accounts are
   given in their own words: common descent, and creation. The questions sort
   statements and check facts; none has a side for its right answer.

   ⚠️ ADDED FROM THE RECORD, worth a glance from Paul:
   · That the human appendix is now known to do a job in the immune system, so
     "vestigial" is a label that has been revised. Added so the book's example
     isn't taught as settled.
   · That radioactive dating rests on three assumptions (starting amount,
     nothing added or lost, a steady rate) and that the rate is the one that is
     measured today. The packet gives only that the rate is constant.
   · How people who hold creation read the rock layers (rapid burial, a
     worldwide flood) and that views on the age of the earth differ among
     them. Stated in one sentence, with no argument for it.
   ⚠️ The book's Activity 6-1 (the penny decay model) and the Ostrich Egg Timer
   feature are not in this lesson.

   🚨 THE VERSE IS A WORKING CHOICE, NOT PAUL'S. Proverbs 25:2, about searching
   a matter out. Choosing the scripture is his, so it goes in the review queue. */
'use strict';
module.exports = {
  id: "science/the-evidence-examined",
  slug: "the-evidence-examined",
  title: "The Evidence, Examined Honestly",
  unit: "Life Science &middot; U6-L2",
  seq: { unit: 6, unitTitle: "Origins: Evolution and Creation, Side by Side", n: 2 },
  natural: "2026-10-11",

  /* ── /teach-plan, 2026-10-11. Merrill Life Science pp136-143. ── */
  plan: {
    objective: "Describe what fossils and the two kinds of dating show, name the book's five kinds of evidence, and sort each one into what was found or measured and what it is taken to mean about where living things came from.",
    markers: [
      "BOOK (paraphrased), Objectives: describe the importance of fossils as evidence, explain how relative and radioactive dating date the fossil record, and give examples of five types of evidence.",
      "BOOK (paraphrased), opening story: in 1975 a couple found odd rocks at Lake Lavon in Texas, and the pieces turned out to be the skull of a mosasaur about 15 meters long, which means North Texas was under a shallow sea about 120 million years ago.",
      "BOOK (paraphrased), fossils are any remains of life from an earlier time: an imprint, a cast, wood or bone replaced by minerals, something frozen in ice, or something trapped in resin. Most are in sedimentary rock.",
      "BOOK (paraphrased), relative dating: in undisturbed layers the lower ones are older, which gives an estimate. Radioactive dating: an element changes to a stable product at a constant rate, and comparing the amounts gives an accurate age.",
      "BOOK (paraphrased), the record is incomplete, like a book with pages missing, and shows simpler life lower down and more complex life higher up.",
      "BOOK (paraphrased), other evidence: homologous structures (arm, flipper, bat wing and bird wing share bones), vestigial structures (appendix), early embryos that look alike, and DNA that is more alike in close relatives.",
      "BOOK (paraphrased), Section Review item 4: leaf fossils in the top layer, shells at the bottom and fish bones in the middle, put them oldest to youngest.",
    ],
    method: "TWO LAYERS, NAMED OUT LOUD, FIVE KINDS OF EVIDENCE. LAYER ONE IS WHAT IS FOUND AND MEASURED, taught the way the book teaches it: a fossil in a layer, a decay rate, the same bones in four limbs, a DNA comparison. LAYER TWO IS WHAT THE FINDS ARE TAKEN TO MEAN about where living things came from, which is a different kind of question. Common descent reads the likenesses as shared ancestry and creation reads them as a shared designer, and each is given in its own words. The student sorts and checks facts and is never asked which account to hold.",
    exampleOnly: [
      "The Lake Lavon mosasaur, the rock-layer order of leaf, fish and shell, and the arm, flipper and wing. WORLD: a skull on a Texas lakeshore. The title and objective don't name them.",
      "⚠️ The appendix note, the three dating assumptions and the one-sentence creation reading of the layers are added from the record, see the header.",
    ],
    digitize: "The reading engine plus one Watch It Worked on reading rock layers bottom to top. Questions check the facts and sort statements into found or measured and taken to mean. No answer key to a side, and the todo asks for a sorting table in the notebook.",
    unclear: "",
  },

  sheet: { slug: "the-evidence-examined-homework", subject: "science",
    note: "Do it on screen or print it. Your score shows here once you check it." },

  video: { id: "-AUS6OoCoqE", title: "Geologic Time Scales, Rock Strata, Absolute vs Relative Dating", channel: "Cognito",
    why: "The same two kinds of dating, shown with drawings of the layers, which helps if the order of the rock is hard to picture." },

  shelf: { grades: [7], subject: "Science",
    blurb: "A couple on a Texas lakeshore pick up an odd rock, and it turns out to be a monster's skull. What the rocks, bones and DNA show, and what people take them to mean.",
    contains: [
      "A story-form reading, read aloud with the words highlighted",
      "Fossils, rock layers, and the two kinds of dating",
      "Watch It Worked: putting rock layers in order, step by step",
      "Homologous and vestigial structures, embryos, and DNA",
      "Each kind of evidence sorted into what was found and what it is taken to mean",
      "Both accounts of where living things came from, in their own words",
    ] },
  eyebrow: ["Life Science", "U6-L2", "Origins: Evolution and Creation, Side by Side"],
  dek: "Bones in rock, atoms that tick like clocks, and the same arm bones in a bat and a person. Every one is real, and the question is what each one tells us.",

  scripture: {
    ref: "Proverbs 25:2",
    text: "It is the glory of God to conceal a thing: but the honour of kings is to search out a matter.",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will describe fossils and the two kinds of dating, name the five kinds of evidence the textbook lists, and sort each into what was found or measured and what it is taken to mean about origins."
      ]},
      { h: "Side by Side, Not Blended", p: [
        "Same rule as the first lesson of the unit. What can be found and measured is taught exactly as the textbook teaches it. What the finds mean about where living things came from is named as a different kind of question, and both accounts are given in their own words: common descent, and creation.",
        "The student sorts and checks facts and is never asked to pick a side. The reading, the questions and the notebook work all stay on the sorting."
      ]},
      { h: "Key Concepts", p: [
        "A fossil is a measured thing: it sits in a layer, and the layer can be dated. Relative dating orders the layers and radioactive dating puts numbers on them.",
        "A likeness between living things is also a measured thing. Whether the likeness shows a shared ancestor or a shared designer is the interpretation, and it comes from outside the measurement."
      ]},
      { h: "Added From the Record", p: [
        "The note that the appendix does a job, the three assumptions behind radioactive dating, and one sentence on how people who hold creation read the layers are added from the record. The book's own parts are the mosasaur story, the five fossil types, both kinds of dating, the geologic time scale, the five kinds of evidence and the rock-layer review item."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "A Skull on the Lakeshore", s: [
      "In July of 1975 a couple walking the shore of Lake Lavon in north Texas noticed some odd rocks poking out of the mud, and they carried a few of them to a scientist who knew reptiles.",
      "He took one look and knew they were pieces of a skull from a mosasaur, a giant saltwater lizard that doesn't exist anymore.",
      "A professor and his students dug out the rest, and one graduate student then spent almost a year cleaning and rebuilding a skull about 1.75 meters long that had belonged to a creature roughly 15 meters from nose to tail.",
      "Here's the puzzle that makes it worth a lesson: that lakeshore is over 500 kilometers from the Gulf of Mexico, so how did a sea animal end up there?"
    ]},

    { title: "What a Fossil Is", s: [
      "A {{fossil}} is any trace of life left from an earlier time, and the mosasaur's bones are only one kind.",
      "A leaf or a feather can leave an imprint in soft mud that later hardens, and minerals can fill the hollow of a footprint or shell to make a cast.",
      "Wood or bone can be replaced bit by bit with minerals, an animal can be frozen in ice, and an insect can be trapped in sticky resin that turns to amber.",
      "Most fossils are found in {{sedimentary rock}}, which forms when mud, sand or other tiny pieces settle out of water and pack down into layers, and limestone holds more fossils than any other kind."
    ]},

    { title: "Reading the Layers", s: [
      "Because sedimentary rock builds up one layer at a time, the layers make a kind of stack, and scientists use that stack to put fossils in order.",
      "The idea is called {{relative dating}}: in an area that hasn't been disturbed, the lower layers were laid down first, so a fossil in a lower layer is older than one above it.",
      "It tells you which is older without telling you how old, which is why the book calls it an estimate.",
      "Watch how it works on three layers of fossils, and notice that each step is a small, plain decision."
    ]},

    { title: "Watch It Worked: Putting Layers in Order", s: [
      "[walk] Order the fossils: leaf imprints in the top layer, fish bones in the middle layer, and shells in the bottom layer.",
      "[step] Look at the stack and find which layer sits lowest, because the lowest layer is where you start. || Top: leaf imprints\nMiddle: fish bones\nBottom: shells",
      "[step] Use the rule that in undisturbed rock the lower layer was laid down first, which makes the bottom fossils the oldest. || Bottom layer is oldest: shells",
      "[step] Move up one layer at a time, and each layer you climb is younger than the one before it. || Next: fish bones, then leaf imprints",
      "[step] Write the order from oldest to youngest, and then ask whether anything could have flipped or folded the layers. || Oldest to youngest: shells, fish bones, leaf imprints\nIf the layers were folded or tipped over, the rule can't be trusted"
    ]},

    { title: "Clocks in the Rock", s: [
      "Relative dating gives an order, and {{radioactive elements}} give numbers.",
      "An atom of a radioactive element slowly gives off energy and changes into a stable product, uranium turning into lead for one example, and a radioactive form of carbon is another.",
      "Each element changes at its own steady rate that scientists have measured in laboratories, so comparing how much of the original is left with how much of the new product has built up tells you how long the clock has been running.",
      "More lead beside the uranium means an older rock, and the book calls this the more accurate of the two methods."
    ]},

    { title: "What the Clock Takes For Granted", s: [
      "Every clock rests on a few things you can't check by looking at the dial, and honesty means naming them.",
      "The rate of change is measured today, in the present, and the dating assumes the rate was the same all through the past.",
      "It also assumes the rock started with none of the stable product, or a known amount, and that nothing was added to the rock or washed out of it since.",
      "Scientists who use the method test these assumptions in several ways and trust the results, and others question them, and the measuring itself is not in dispute."
    ]},

    { title: "A Book With Pages Missing", s: [
      "When fossils from all over the world are placed in order, the lower layers hold simpler living things and the higher layers hold more complex ones.",
      "The textbook puts the oldest fossils of bacteria at about 3.8 billion years, simple plants much later, and the first mammals and birds near the top of what it calls the dinosaur age.",
      "The geologic time scale is the chart that lays this out, with eras and periods running from the oldest layers to the newest.",
      "The book is careful to say that the record is incomplete, like a book with pages torn out, since only a tiny share of living things ever turned into fossils."
    ]},

    { title: "The Same Bones in Four Limbs", s: [
      "A second kind of evidence comes from living things you can look at today.",
      "A human arm, a dolphin's flipper, a bat's wing and a bird's wing do very different jobs, and yet they hold nearly the same bones, muscles and blood vessels and grow from the same kind of tissue in the embryo.",
      "Body parts built on the same plan are called {{homologous structures}}.",
      "Some body parts are small and seem to have no use, like the ear-wiggling muscles in a person, and these are called a {{vestigial structure}}.",
      "The book names the appendix as an example, though doctors now know the appendix has a job in the body's defenses, so even this label has been revised."
    ]},

    { title: "Embryos and DNA", s: [
      "The third and fourth kinds of evidence come from watching living things grow and from reading their DNA.",
      "{{Embryology}} is the study of how a living thing develops before birth, and the early embryos of a fish, a chicken, a rabbit and a human look surprisingly alike, each with a tail and folds in the neck that look like gill slits.",
      "The fish keeps its gills, and the others lose them as they grow.",
      "DNA comparison adds more: the DNA of close relatives is more alike than the DNA of distant ones, so a dog's is closer to a bear's than to a lizard's, and a chimpanzee's and gorilla's are very much like a person's."
    ]},

    { title: "Found, and Taken to Mean", s: [
      "Step back from the whole list and ask the question the last lesson taught you: for each one, what did somebody find or measure, and what does it get taken to mean?",
      "A mosasaur skull in a layer, a lead-to-uranium ratio, the same bones in four limbs, a tail in an early embryo and a DNA match are all things people have found and measured, and nobody argues about whether they're there.",
      "What those finds say about where living things came from is a different kind of question, because it asks about the distant past, which nobody watched and no experiment can repeat.",
      "Two answers have been given to that question, and a fair lesson lets each one speak for itself."
    ]},

    { title: "Two Readings of the Same Evidence", s: [
      "The first answer is common descent, which is the view of the textbook this lesson follows: the likenesses show that living things share ancestors, the order of the layers shows life changing over a very long time, and the age numbers from radioactive dating put that time at millions and billions of years.",
      "The second is creation, the account in the Bible's first book: God made living things, each “after his kind,” so the likenesses show one Designer using good plans again and again, and many who hold this view read the layers as mostly laid down quickly by a worldwide flood, though they don't all agree about the age of the earth.",
      "",
      "[verse] Proverbs 25:2 says, “It is the glory of God to conceal a thing: but the honour of kings is to search out a matter.”",
      "",
      "Notice what both readings share, because both accept the rock layers, the bones, the decay rates and the DNA matches as real, and they part company only on what those finds say about the beginning."
    ]},

    { title: "Each Reading Gets Asked Hard Questions", s: [
      "A careful student also knows that each account has questions the other side puts to it.",
      "People who hold common descent are asked about the gaps in the fossil record and about the assumptions behind the clocks, and people who hold creation are asked how the layers, the dates and the likenesses fit their reading.",
      "Neither account gets to win by being loud, and the job of this lesson is only to keep what was found separate from what it's taken to mean.",
      "The questions below ask you to do exactly that sorting, so use the hint if one sends you back."
    ]}
  ],

  todo: { title: "What To Do Now", s: [
      "A skull on a lakeshore, three layers of rock and a question that nobody was there to watch, and now the work is sorting.",
      "Start with the questions, {Q} of them, and then the vocabulary check at the bottom, {v} questions on the word cards at the top of the page.",
      "When a question asks whether something was found or is taken to mean, ask whether you could point at it or measure it.",
      "Then, in your notebook, make a table with two columns, one headed Found or Measured and one headed Taken To Mean About Origins.",
      "Choose three of the five kinds of evidence and put each one on its own row, writing a full sentence in each column.",
      "In the second column, give both readings, common descent and creation, each in its own words.",
      "There's no answer key, and nobody is asking which reading to hold, only whether you can say clearly what each one claims.",
      "Last, open the Homework Sheet with the button at the bottom of the page, and either fill it out right on the screen or print it and do it on paper."
  ] },

  words: [
    ["Fossil", "Any trace or remains of life from an earlier time, such as a bone, an imprint, or an insect in resin.", 4],
    ["Sedimentary rock", "Rock that forms when mud, sand or tiny pieces settle out of water and pack into layers. Most fossils are found in it.", 7],
    ["Relative dating", "Putting fossils in order by their layers: in undisturbed rock, lower layers are older than higher ones.", 9],
    ["Radioactive elements", "Elements whose atoms slowly change to a stable product at a steady rate, which lets scientists compare the amounts to estimate an age.", 17],
    ["Homologous structures", "Body parts built on the same plan, like the bones in a human arm and a bat's wing.", 31],
    ["Vestigial structure", "A body part that is small and seems to have little or no use.", 32],
    ["Embryology", "The study of how living things develop before birth.", 35]
  ],

  findsAt: 50,
  questions: [
    { q: "Why was it surprising to find a mosasaur skull on the shore of Lake Lavon?",
      find: [3],
      hint: "Read A Skull on the Lakeshore.",
      choices: [
        "The lake is over 500 kilometers from the Gulf, and a mosasaur lived in the sea.",
        "Mosasaurs lived on mountains.",
        "The skull was only a few centimeters long.",
        "Nobody had ever found a fossil in Texas."
      ], right: 0 },

    { q: "What is a fossil?",
      find: [4],
      hint: "Read What a Fossil Is.",
      choices: [
        "Only the bones of a dinosaur.",
        "Any trace or remains of life from an earlier time.",
        "A rock formed from melted lava.",
        "A living thing that hasn't changed."
      ], right: 1 },

    { q: "In undisturbed rock, what does relative dating say about a fossil in a lower layer?",
      find: [9],
      hint: "Read Reading the Layers.",
      choices: [
        "It is younger than the fossils above it.",
        "It is exactly the same age as the fossils above it.",
        "It is older than the fossils above it.",
        "Its age can't be compared."
      ], right: 2 },

    { q: "A rock has leaf fossils in the top layer, shells in the bottom layer and fish bones in the middle. Which is the order from oldest to youngest?",
      find: [16, 14],
      hint: "Read Watch It Worked and use the Show All button.",
      choices: [
        "Leaves, fish bones, shells.",
        "Fish bones, leaves, shells.",
        "Shells, leaves, fish bones.",
        "Shells, fish bones, leaves."
      ], right: 3 },

    { q: "Which of these does radioactive dating assume, according to the lesson?",
      find: [23, 22],
      hint: "Read What the Clock Takes For Granted.",
      choices: [
        "That the rate of change was the same all through the past.",
        "That every rock is the same age.",
        "That fossils are always found at the top layer.",
        "That nobody has ever measured the rate."
      ], right: 0 },

    { q: "What do the human arm, the dolphin's flipper, the bat's wing and the bird's wing have in common?",
      find: [30],
      hint: "Read The Same Bones in Four Limbs.",
      choices: [
        "They are all used for flying.",
        "They all hold nearly the same bones, muscles and blood vessels.",
        "They all grow after birth only.",
        "They are all vestigial structures."
      ], right: 1 },

    { q: "Which of these was found or measured, and not an interpretation of where living things came from?",
      find: [39],
      hint: "Read Found, and Taken to Mean.",
      choices: [
        "All living things share one ancestor.",
        "All living things were made by one Designer.",
        "A chimpanzee's DNA is very much like a person's.",
        "Nobody can ever measure DNA."
      ], right: 2 },

    { q: "Which of these is a statement about what the evidence is taken to mean, and not something measured?",
      find: [40, 42],
      hint: "Ask who could have watched it. Read Found, and Taken to Mean.",
      choices: [
        "A fossil sits in a lower layer of rock.",
        "Uranium changes into lead at a steady rate today.",
        "Early embryos of a fish and a rabbit look alike.",
        "The likenesses between living things show where they came from."
      ], right: 3 },

    { q: "What do common descent and creation share, according to the lesson?",
      find: [45],
      hint: "Read Two Readings of the Same Evidence.",
      choices: [
        "They both accept the layers, bones, decay rates and DNA matches as real, and differ on what they mean about the beginning.",
        "They both say the earth is the same age.",
        "They both say fossils aren't real.",
        "They both say DNA can't be compared."
      ], right: 0 }
  ],

  vocabQuestions: [
    { q: "What is <i>relative dating</i>?",
      choices: [
        "Measuring the amount of uranium left in a rock.",
        "Putting fossils in order by their layers, since lower layers in undisturbed rock are older.",
        "Asking a relative how old a fossil is.",
        "Counting the rings in a tree."
      ], right: 1 },
    { q: "What are <i>homologous structures</i>?",
      choices: [
        "Body parts that are small and have no use.",
        "Body parts built on the same plan, like the bones in a human arm and a bat's wing.",
        "Fossils found in limestone.",
        "Parts of an embryo that disappear."
      ], right: 1 },
    { q: "What is <i>sedimentary rock</i>?",
      choices: [
        "Rock that comes from a volcano.",
        "Rock that forms when mud, sand or tiny pieces settle out of water and pack into layers.",
        "Rock made only of metal.",
        "Rock that has no layers."
      ], right: 1 },
    { q: "What does <i>embryology</i> study?",
      choices: [
        "How living things develop before birth.",
        "How rocks form in layers.",
        "How atoms change to a stable product.",
        "How fossils are named."
      ], right: 0 }
  ]
};
