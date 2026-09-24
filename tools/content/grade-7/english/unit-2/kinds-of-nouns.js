/* english/kinds-of-nouns
   Grade 7 · english · unit 2. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 THE PROSE IS A DRAFT, NOT PAUL'S VOICE. Written 2026-09-24 on Opus from
   Houghton Mifflin English Grade 7 pp70-72 (leaf n87-n89), read on the borrowed
   copy the same evening, then given THE PASS and stamped.

   ⚠️ THE WORLD IS THE BOOK'S OWN ON YOUR OWN PASSAGE: Elmer Wavering, born in
   Quincy, Illinois, who built the first widely used car radio. The book ends on
   a guessing game ("Think of a radio and think of a car"); the answer is
   Motorola, motor plus Victrola, and Wavering later ran the company. Worth a
   glance from Paul. The Lindbergh quote and Gutenberg are left out as other
   worlds.

   🚨 THE VERSE IS A WORKING CHOICE, NOT PAUL'S. Genesis 2:19 fits (Adam naming
   the animals: the first nouns). Choosing the scripture is his → review queue. */
'use strict';
module.exports = {
  id: "english/kinds-of-nouns",
  slug: "kinds-of-nouns",
  title: "Kinds of Nouns",
  unit: "Nouns · U2-L1",
  seq: { unit: 2, unitTitle: "Nouns", n: 1 },
  natural: "2026-09-24",

  plan: {
    objective: "Find the nouns in a sentence and label each one two ways: concrete or abstract, and common or proper.",
    markers: [
      "QUOTED, Houghton Mifflin p70: 'A word that names a person, a place, a thing, or an idea is called a noun.'",
      "QUOTED, p70: 'A noun that names something that can be seen, smelled, heard, tasted, or touched is called a concrete noun. An abstract noun, on the other hand, names an idea, a quality, or a feeling.'",
      "QUOTED, p71: 'A proper noun identifies a particular person, place, thing, or idea. Proper nouns are always capitalized.'",
      "QUOTED, On Your Own p72: 'Using four columns on your paper, label each noun concrete or abstract. Then label each noun common or proper.' with the example 'radio: concrete, common · communication: abstract, common'",
    ],
    method: "TWO SORTS, EVERY NOUN. The book teaches concrete/abstract and common/proper as separate sections, then its own practice makes the student label every noun BOTH ways in four columns. The lesson runs one real story through both sorts, so the student sees that a noun always has two labels at once.",
    exampleOnly: [
      "Elmer Wavering, Quincy, the Mississippi River, the car radio - WORLD: one inventor, the book's own passage",
      "Lindbergh's parachute quote, Gutenberg, the inventions pages - WORLD: the book's other examples, deliberately not reused",
    ],
    digitize: "The reading engine. Each sorted noun is an [ex] line with its two labels. ⚠️ A tap-and-sort drill on the English worksheet engine would suit the practice; this lesson carries it in questions.",
    unclear: [],
  },

  shelf: { grades: [7], subject: "English",
    blurb: "A boy from Quincy, Illinois, a homemade radio, and an invention whose name you'll probably guess. Sorting every noun two ways.",
    contains: [
      "Teacher Notes written for whoever is teaching it",
      "The lesson read aloud, one line at a time, highlighted as it goes",
      "Concrete and abstract nouns, common and proper nouns",
      "Four vocabulary cards, each with a check question",
    ] },
  eyebrow: ["English 7", "U2-L1", "Nouns"],
  dek: "Every noun names something, but some you can touch and some you can't, and some get a capital letter. Every noun gets two labels.",

  scripture: {
    ref: "Genesis 2:19",
    text: "And out of the ground the LORD God formed every beast of the field, and every fowl of the air; and brought them unto Adam to see what he would call them: and whatsoever Adam called every living creature, that was the name thereof.",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will identify nouns as words naming a person, place, thing or idea, and label each noun both concrete or abstract and common or proper, capitalizing proper nouns."
      ]},
      { h: "Key Concepts", p: [
        "Concrete nouns name what the five senses can detect. Abstract nouns name ideas, qualities and feelings.",
        "Common nouns name any person, place, thing or idea. Proper nouns name a particular one and are always capitalized. The two sorts are separate, so every noun gets one label from each."
      ]},
      { h: "Where Students Get Stuck", p: [
        "Thinking an abstract noun has to be a big word. Love, fear and help are short and abstract; skyscraper is long and concrete. The test is the five senses, not the length.",
        "Calling a noun proper because it's important. Proper means particular: a radio is common, the Motorola is proper."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "A Boy and a Homemade Radio", s: [
      "Elmer Wavering was born in Quincy, Illinois, a town on the Mississippi River, and as a boy he loved nothing more than listening to the first radio broadcasts on a set he'd built himself.",
      "He grew up, worked in a shop that sold radio parts, went to college, and used everything he knew about electronics to invent something almost nobody had: a radio that worked in a car.",
      "It was a huge box under the dashboard, with the volume dial on the steering column and the batteries under the seat, and it needed a name.",
      "Hold that thought, because every word in the story you just read that names something is about to get sorted, twice."
    ]},

    { title: "Words That Name", s: [
      "A word that names a person, a place, a thing or an idea is called a noun, and Wavering's story is full of them.",
      "The first three kinds are easy to spot, since you can point at them, but the fourth kind is sneakier, because nobody can point at an idea.",
      "",
      "[ex] person: Elmer Wavering, boy",
      "[ex] place: Quincy, town, shop",
      "[ex] thing: radio, dashboard, batteries",
      "[ex] idea: love, knowledge"

    ]},

    { title: "Can You Touch It?", s: [
      "That's the first sort, and the book gives you a simple test for it: can you see it, smell it, hear it, taste it or touch it?",
      "If you can, it's a concrete noun, and if you can't, because it names an idea, a quality or a feeling, it's an abstract noun.",
      "",
      "[ex] concrete: radio, dashboard, Mississippi River, speakers",
      "[ex] abstract: love, imagination, intelligence, knowledge",
      "",
      "Wavering's radio is concrete, since you could have heard it and burned your hand on its tubes, but the imagination he used to build it is abstract.",
      "Here's the trap, though: an abstract noun doesn't have to be a big word, because love is short and abstract while dashboard is long and concrete."
    ]},

    { title: "Any One, or This One?", s: [
      "The second sort asks a different question: is the noun naming any one of something, or one particular thing?",
      "A common noun names any person, place, thing or idea, and it doesn't get a capital letter.",
      "A proper noun names a particular one, and proper nouns always do, with every important word capitalized.",
      "A town could be anywhere, but Quincy is one town, which is why it gets its capital.",
      "",
      "[ex] common: town, river, college, scientist",
      "[ex] proper: Quincy, Mississippi River, George Washington University, Elmer Wavering"

    ]},

    { title: "Every Noun Gets Two Labels", s: [
      "The two sorts don't compete, because they ask different questions, so every noun gets one label from each.",
      "The book's own practice asks you to use four columns, and it's worth seeing a few nouns from Wavering's story run through both.",
      "Once you've asked can I touch it and is it a particular one, the noun has told you everything about itself.",
      "",
      "[ex] radio: concrete, common",
      "[ex] Quincy: concrete, proper",
      "[ex] imagination: abstract, common",
      "[ex] communication: abstract, common"

    ]},

    { title: "What Adam Called Them", s: [
      "So what did Wavering's invention end up being called?",
      "The company put motor and Victrola, a famous brand of record player, together into one new proper noun, Motorola, and Wavering went on to become its president.",
      "",
      "[verse] Genesis 2:19 says, “And out of the ground the LORD God formed every beast of the field, and every fowl of the air; and brought them unto Adam to see what he would call them: and whatsoever Adam called every living creature, that was the name thereof.”",
      "",
      "One of the first jobs God gave a person in the Bible was naming things, which makes nouns some of the oldest words there are.",
      "Every time you name something, a thing you can touch or an idea you can't, you're doing the work Adam started in the garden."
    ]}
  ],

  words: [
    ["Noun", "A word that names a person, a place, a thing or an idea.", 4],
    ["Concrete noun", "A noun naming something you can see, smell, hear, taste or touch.", 11],
    ["Abstract noun", "A noun naming an idea, a quality or a feeling.", 11],
    ["Proper noun", "A noun naming a particular person, place, thing or idea. It is always capitalized.", 18]
  ],

  vocabQuestions: [
    { q: "What is a <i>noun</i>?",
      choices: ["A word that shows action.", "A word that names a person, place, thing or idea.", "A word that describes a noun.", "A word that connects ideas."],
      right: 1, why: "A noun names a person, a place, a thing or an idea." },
    { q: "Which is a <i>concrete noun</i>?",
      choices: ["imagination", "love", "dashboard", "knowledge"],
      right: 2, why: "You can see and touch a dashboard." },
    { q: "Which is an <i>abstract noun</i>?",
      choices: ["intelligence", "radio", "batteries", "Quincy"],
      right: 0, why: "Intelligence names a quality, not something your senses can detect." },
    { q: "Which is a <i>proper noun</i>?",
      choices: ["town", "river", "scientist", "Mississippi River"],
      right: 3, why: "It names one particular river, so it's capitalized." }
  ],

  findsAt: 34,
  questions: [
    { q: "Which of these is a noun?", find: [4, 9],
      hint: "Read Words That Name.",
      choices: ["built", "knowledge", "quickly", "huge"], right: 1,
      why: "Knowledge names an idea, so it's a noun." },
    { q: "What test decides whether a noun is concrete?", find: [10, 11],
      hint: "Read Can You Touch It?",
      choices: [
        "Whether it's a long word.",
        "Whether it's capitalized.",
        "Whether you can see, smell, hear, taste or touch it.",
        "Whether it names a person."
      ], right: 2,
      why: "Concrete nouns name what the five senses can detect." },
    { q: "Why is love an abstract noun even though it's a short word?", find: [15],
      hint: "Read the trap at the end of Can You Touch It?",
      choices: [
        "Because short words are always abstract.",
        "Because it names a feeling, and length has nothing to do with it.",
        "Because it's capitalized.",
        "Because it names a place."
      ], right: 1,
      why: "The test is the five senses, not the length of the word." },
    { q: "Why does Quincy get a capital letter but town doesn't?", find: [18, 19],
      hint: "Read Any One, or This One?",
      choices: [
        "Because Quincy names one particular town, so it's a proper noun.",
        "Because Quincy is a bigger place.",
        "Because town is abstract.",
        "Because Quincy comes first in the sentence."
      ], right: 0,
      why: "Proper nouns name a particular one and are always capitalized." },
    { q: "How would you label the noun radio?", find: [25],
      hint: "Ask both questions: can I touch it, and is it a particular one?",
      choices: ["abstract, proper", "concrete, proper", "abstract, common", "concrete, common"], right: 3,
      why: "You can touch a radio, and it's any radio, not a particular one." },
    { q: "How would you label the noun imagination?", find: [27],
      hint: "Can you touch it?",
      choices: ["concrete, common", "abstract, common", "concrete, proper", "abstract, proper"], right: 1,
      why: "It names an idea and isn't a particular one." },
    { q: "How would you label Mississippi River?", find: [12, 21],
      hint: "You could touch it, and it's one particular river.",
      choices: ["concrete, proper", "abstract, proper", "concrete, common", "abstract, common"], right: 0,
      why: "You can see and touch it, and it's one particular river, so it's capitalized." },
    { q: "What name did Wavering's car radio end up with?", find: [30],
      hint: "Read What Adam Called Them.",
      choices: ["Victrola", "Radiomobile", "Motorola", "Wavering"], right: 2,
      why: "Motor plus Victrola made one new proper noun, Motorola." }
  ],

  todo: { title: "What To Do Now", s: [
      "A boy's homemade radio became one of the best-known names in America, and every noun in his story had two labels waiting for it.",
      "{c} word cards at the top of the page, then {Q} questions about the lesson, then {v} more questions about those words, {T} questions in all.",
      "For every noun, ask can I touch it first, and then ask whether it names a particular one.",
      "If the labeling questions trip you up, read Every Noun Gets Two Labels again and look at the four examples.",
      "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] },
};
