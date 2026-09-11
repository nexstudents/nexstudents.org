/* science/life-only-comes-from-life
   Grade 7 · science · unit 1. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry. */
'use strict';
module.exports = {
  id: "science/life-only-comes-from-life",
  slug: "life-only-comes-from-life",
  title: "Life Only Comes From Life",
  unit: "Life Science &middot; U1-L2",
  seq: { unit: 1, unitTitle: "Life and How We Study It", n: 2 },
  shelf: { grades: [7], subject: "Science",
    thumb: true,   /* Paul's art, 2026-08-31. Source PNG on his Desktop; see Lesson 1. */
    /* ⚠️ "Two", not "three". Said three while Spallanzani was in the story; his
       section came out in Paul's 2026-09-03 rewrite and this line did not follow it.
       Counts in a blurb or a dek are content that goes stale silently - check them
       whenever a section is added or removed. */
    blurb: "Two experiments across two hundred years, and the question neither of them could reach.",
    contains: [
      "A story-form reading, read aloud with the words highlighted",
      "Four vocabulary words, each one defined inside the reading",
      "Day 1: four questions with the answer findable in the text",
      "Day 2: a vocabulary check and a printable answer sheet",
    ] },
  eyebrow: ["Science", "U1-L2", "Life Science"],
  dek: "For hundreds of years people thought meat made maggots. Finding out it did not took two scientists, two hundred years, and one very oddly shaped bottle.",
  scripture: {
    ref: "Genesis 1:11",
    text: "And God said, Let the earth bring forth grass, the herb yielding seed, and the fruit tree yielding fruit after his kind, whose seed is in itself, upon the earth: and it was so.",
  },
  /* 🚨 REWRITTEN 2026-09-03 FROM PAUL'S OWN TEXT, sent in chat, the same way
     Lesson 1 was on 2026-08-31. This is item 29 - he said the lessons did not
     sound natural, and the fix is his voice, not a better edit of mine.
     ⚠️ His version DROPS Lazzaro Spallanzani, who used to sit between Redi and
     Pasteur as the "sealed flask, ruined air" objection. That is a choice, not
     an oversight: Pasteur's open curved neck answers the same objection on its
     own, so the middle step was costing a section and buying little. Do not
     quietly put him back.
     ⚠️ Markdown emphasis was stripped on the way in. Sentences render through
     textContent as word spans (see lesson-template.html), so a `**bold**` would
     ship as literal asterisks. The four terms he bolded are exactly the four
     word cards, so the emphasis is carried there instead.
     🚨 SENTENCE NUMBERS ARE LOAD-BEARING. `questions[].find` holds positions in
     this flat list. Adding or removing ANY sentence renumbers them - checkFinds()
     in build-lessons.js fails the build if they drift, so trust that, not memory. */
  parts: [
    { title: "Did Meat Really Make Maggots?", s: [
      "Hundreds of years ago, people noticed something strange.",
      "If meat was left outside, maggots eventually appeared.",
      "Since nobody could see where the maggots came from, many people believed the meat actually produced them.",
      "",
      "This idea became known as spontaneous generation, the belief that living things could naturally appear from nonliving material.",
      "",
      "It seemed reasonable at the time.",
      "The problem was that nobody had carefully tested it."
    ]},
    { title: "Redi Puts It to the Test", s: [
      "In 1668, Italian scientist Francesco Redi decided to experiment.",
      "He placed meat into different jars.",
      "Some were open, some were sealed, and others were covered with gauze that allowed air inside but prevented flies from reaching the meat.",
      "",
      "Maggots appeared on the meat in the open jars.",
      "They did not appear on the meat protected from flies.",
      "On the gauze covered jars, maggots appeared on the gauze where flies had laid their eggs.",
      "",
      "The answer became clear.",
      "The meat was not producing maggots.",
      "Flies were producing more flies.",
      "",
      "Redi had also demonstrated an important part of good science.",
      "He changed one variable while keeping other conditions similar.",
      "Experiments designed this way help scientists determine what is actually causing a result."
    ]},
    { title: "Pasteur Solves the Mystery", s: [
      "Scientists later discovered microorganisms, and some wondered whether these tiny living things might still appear spontaneously.",
      "",
      "In 1861, French scientist Louis Pasteur designed a clever experiment to find out.",
      "",
      "Pasteur boiled broth inside a special flask with a long curved neck.",
      "Air could still enter the flask, but dust and microorganisms became trapped in the curve before they could reach the broth.",
      "",
      "The broth remained free of microbial growth.",
      "When Pasteur allowed the broth to contact the trapped dust, microorganisms began growing.",
      "",
      "The microorganisms had not appeared from the broth.",
      "They had come from other microorganisms in the environment."
    ]},
    { title: "Life Comes From Life", s: [
      "Experiments like these helped establish the principle of biogenesis.",
      "Biogenesis means that living things come from other living things.",
      "",
      "Dogs come from dogs.",
      "Trees grow from seeds produced by other plants.",
      "Bacteria come from existing bacteria.",
      "Scientists have repeatedly observed this pattern in living things.",
      "",
      "But that creates an even bigger question.",
      "If life comes from life, where did the first life come from?"
    ]},
    /* 🚨 CLOSING SECTION REPLACED BY PAUL, 2026-09-03, later the same evening. The
       first version stopped at "we will keep asking both kinds of questions" - it
       named the two kinds of question and left it there. His version names the answer
       and quotes the two verses that carry it (Genesis 1:1, Acts 17:25).
       ⚠️ This does NOT breach the side-by-side rule → [[project-nexstudents-science-strand]].
       The rule is about the ORIGIN claim, and above this the two answers still sit
       beside each other with the experiments left undisputed. This is the lesson
       saying which one it holds, in a lesson whose own scripture block is Genesis 1:11.
       ⚠️ Straight quotes are escaped by esc() in build-lessons.js; the curly quotes in
       the two verse quotations are literal characters and pass through untouched. */
    { title: "The First Life", s: [
      "Redi and Pasteur did not answer where the first life came from.",
      "Their experiments began in a world where life already existed.",
      "Redi had flies around his jars, and Pasteur had microorganisms in the environment.",
      "Their experiments showed where new organisms came from under the conditions they tested, but they did not recreate or observe the beginning of life itself.",
      "",
      "Scientists continue to investigate ideas about how the earliest life could have arisen from nonliving chemistry.",
      "The Bible gives a different answer by identifying the source of life as God Himself.",
      "",
      "Genesis 1 describes God creating plants and animals and commanding them to reproduce according to their kinds.",
      "Genesis 2:7 describes God forming man from the dust of the ground and giving him the breath of life.",
      "This connects with something we still observe today: life comes from life.",
      "Scripture takes that pattern back to its beginning and points to God as the ultimate giver of life.",
      "",
      "The incredible complexity of life gives us something else to consider.",
      "Even a tiny cell contains organized structures and biological information that work together to keep it alive.",
      "Christians can look at this complexity and recognize evidence of purposeful and intelligent design.",
      "",
      "If life shows evidence of intelligent design, it is reasonable to ask about an Intelligent Designer.",
      "The Bible identifies that Designer as God, our Creator.",
      "He is called the Creator for a reason.",
      "Genesis begins, “In the beginning God created the heaven and the earth” (Genesis 1:1).",
      "Acts 17:25 also tells us that God “giveth to all life, and breath, and all things.”",
      "",
      "Science gives us powerful tools for studying how living things work and reproduce.",
      "Scripture takes us to the deeper question of who stands behind life and creation.",
      "As we continue studying life science, we can examine the evidence carefully while recognizing the amazing order and design of the world God created."
    ]}
  ],
  /* 🚨 TEACHER NOTES, Paul's own text, 2026-09-03. The first `ground` block on a
     READING lesson - maths and English already had one, this pipeline did not.
     ⚠️ The shape is deliberately NOT the maths/English one (whatItIs, whyItMatters,
     commonMistake, whenStuck). Paul wrote these as Goal / Teaching / Vocabulary /
     Biblical Connection and a reading lesson is a different animal, so it gets its
     own shape rather than having his words folded into fields they do not fit.
     🚨 THERE IS NO `vocab` FIELD HERE ON PURPOSE. His notes listed the same four
     terms that are already in `words` below. Storing them twice is how a definition
     gets changed in one place and silently disagrees in the other - the same drift
     that came off the home page six times. requireGround() REFUSES a vocab key and
     the template renders the list from `words`.
     ⚠️ No "when stuck" field yet. That is the field that earns its keep in the maths
     notes and this shape drops it; `teaching` half covers it. Optional fifth block
     if Paul wants it - do not invent one for him. */
  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will learn how experiments by Francesco Redi and Louis Pasteur challenged spontaneous generation and helped establish the principle of biogenesis, which states that living things come from other living things."
      ]},
      { h: "Teaching the Lesson", p: [
        "Begin by asking: “If you leave food outside and maggots appear, where did the maggots come from?” Explain that people once believed they came directly from the meat. This idea was called spontaneous generation.",
        "Redi tested this idea using meat in different jars. Later, Pasteur performed an even stronger experiment using his famous swan neck flask. His flask allowed air inside while keeping dust and microorganisms away from the broth. Life appeared only when microorganisms were able to reach it.",
        "Explain that this evidence supported biogenesis."
      ]},
      { h: "Key Vocabulary", vocab: true },
      { h: "Biblical Connection", p: [
        "Science can study how living things reproduce and where new organisms come from today. The Bible takes the question further by identifying God as the Creator and source of life.",
        "Genesis 1 repeatedly describes living things reproducing according to their kinds. This provides a natural connection to the pattern students observe in biogenesis: life produces life."
      ]}
    ]
  },
  /* 🚨 THE ORDER HERE MUST MATCH THE PAGE, and it did not. Paul caught it 2026-09-03:
     this said word cards FIRST, then questions. The page is the other way round -
     lesson-template.html has Day One = "The Questions" and Day Two = "The Words",
     and build-lessons.js builds day 1 from `questions` and day 2 from the vocabulary.
     It also never mentioned that the work is split across two days at all, which is
     the single most useful thing it could say.
     ⚠️ It is the LAST thing the student hears, so it is the instruction that actually
     gets followed. Check it against the template whenever the day split changes. */
  todo: { title: "What To Do Now", s: [
      "That is the reading done.",
      "Two things are left, and they both happen today.",
      "First, the questions.",
      "Four of them, and the answer to each one is in the reading above, not in your memory.",
      "If a question is hard, do not guess.",
      "Use the bar or the arrows to go back to the part it came from and read it again.",
      "The one people trip on is what Pasteur's curved neck was for.",
      "Read Pasteur Solves the Mystery again and look for what the shape let IN and what it kept OUT.",
      "Then the word cards.",
      "Four words, and every one of them is explained somewhere in the story you just heard.",
      "Tap each card to check yourself, then answer the four vocabulary questions underneath it.",
      "If you can explain why the neck had to stay open, you have understood the best experiment in this lesson."
  ] },
  /* ⚠️ VARIABLE was worded three different ways across Paul's three documents -
     the old card said "the one thing you change on purpose", his teacher notes said
     "something that is changed", his answer key said "can change or be measured".
     The card has to agree with the vocabulary check or a student reasons his way to
     the wrong box, so the ANSWER KEY wording wins here and in Q7. */
  words: [
    ["Spontaneous Generation", "The old belief that living things could naturally appear from nonliving material. Rags making mice, meat making maggots. Every careful test of it failed."],
    ["Biogenesis", "The principle that living things come from other living things. What replaced spontaneous generation after Pasteur."],
    ["Variable", "Something that can change or be measured during an experiment. Redi changed only the covering on the jars."],
    ["Controlled Experiment", "A test designed to determine how changing one factor affects the result."]
  ],
  /* Paul's questions, 2026-09-03. Every `find` was checked line by line against the
     rewritten story, not carried over. */
  /* 🚨 findsAt = the number of STORY sentences those indexes were verified against.
     Change the story and the build stops until they are re-checked. It exists because
     an index can stay in range and still be wrong: merging two sentences into one on
     2026-09-03 left question 4 pointing one line into the next paragraph, and the
     range check passed. See checkFinds() in build-lessons.js. */
  findsAt: 55,
  questions: [
    { q: "What did Redi's experiment with meat show?", find: [9, 10, 11, 13, 14],
      hint: "Compare the open jars with the ones the flies could not reach.",
      choices: [
        "Meat needs air to stay alive.",
        "Maggots came from flies, not from the meat itself.",
        "Maggots only grow inside sealed jars.",
        "Meat can produce living things."
      ], right: 1 },
    { q: "Why was the curved neck on Pasteur's flask important?", find: [20, 21, 22],
      hint: "Think about what the shape let IN and what it kept OUT.",
      choices: [
        "It prevented all air from entering.",
        "It made the broth boil faster.",
        "It allowed air inside while trapping dust and microorganisms.",
        "It kept the broth colder."
      ], right: 2 },
    { q: "What does biogenesis mean?", find: [26, 27],
      hint: "It is the principle that replaced spontaneous generation.",
      choices: [
        "Life can appear from nonliving material.",
        "All living things are made of cells.",
        "Living things come from other living things.",
        "All organisms need sunlight."
      ], right: 2 },
    { q: "Why did Pasteur's experiment not answer where the first life came from?", find: [35, 36, 37],
      hint: "Look at what was already in the room before the experiment started.",
      choices: [
        "His microscope was not powerful enough.",
        "His experiment already took place in a world containing living organisms.",
        "His experiment failed.",
        "He forgot to test the broth."
      ], right: 1 }
  ],
  /* 🚨 HAND-WRITTEN DAY 2, Paul's Q5-8. Without this key build-lessons.js GENERATES
     the vocabulary check, using the other three definitions as the wrong answers.
     That works, but every distractor is then a definition from the same short list,
     so the shape of the question gives the game away. Paul's distractors are real
     wrong ideas ("the study of microscopes"), which is a harder and fairer test.
     ⚠️ The generator stays as the fallback for lessons with no hand-written set. */
  vocabQuestions: [
    { q: "What is <i>spontaneous generation</i>?",
      choices: [
        "The old belief that living things could naturally appear from nonliving material.",
        "The principle that life comes from other life.",
        "Something changed during an experiment.",
        "An experiment using controlled conditions."
      ], right: 0 },
    { q: "What is <i>biogenesis</i>?",
      choices: [
        "Life appearing from nonliving material.",
        "The principle that living things come from other living things.",
        "A change made during an experiment.",
        "The study of microscopes."
      ], right: 1 },
    { q: "What is a <i>variable</i>?",
      choices: [
        "The final answer to an experiment.",
        "Something that can be changed or measured in an experiment.",
        "A living organism used in an experiment.",
        "Something that must always stay the same."
      ], right: 1 },
    { q: "What is a <i>controlled experiment</i>?",
      choices: [
        "An experiment where everything is changed.",
        "An experiment without a question.",
        "A test designed to determine how changing one factor affects the result.",
        "An experiment that always proves the scientist correct."
      ], right: 2 }
  ]
};
