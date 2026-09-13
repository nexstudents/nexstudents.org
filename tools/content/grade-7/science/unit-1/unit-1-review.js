/* science/unit-1-review
   Grade 7 · science · unit 1. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 THE PROSE IN `parts` IS A DRAFT, NOT PAUL'S VOICE. Built 2026-09-13.

   🚨 A REVIEW IS A DIAGNOSTIC, NOT A TEST. Read off the Glencoe Study Guide and
   Review (Course 2 p42): every exercise there sits beside the objective it tests
   and NAMES the lesson it came from, so a wrong answer tells you exactly which
   lesson to reread. Merrill does the same thing with CHECKING CONCEPTS and
   THINK AND WRITE CRITICALLY. So every question here says, in its hint, which of
   the four lessons to go back to. It is not there to score him.

   ⚠️ THE SOURCE IS OUR OWN FOUR LESSONS, NOT THE BOOK. Nothing here was read off
   a spread; it is a synthesis of what U1-L1 to U1-L4 already teach, and every
   definition is copied from those lessons word for word so the review cannot
   drift from what he was actually taught. */
'use strict';
module.exports = {
  id: "science/unit-1-review",
  slug: "unit-1-review",
  title: "Unit 1 Review: What Life Is, and How We Study It",
  unit: "Life Science &middot; U1-L5",
  seq: { unit: 1, unitTitle: "Life and How We Study It", n: 5 },

  plan: {
    objective: "Pull the four Unit 1 lessons back together, and find which one is not solid yet.",
    markers: [
      "QUOTED, Merrill chapter review headings: 'CHECKING CONCEPTS - Choose the word or phrase that completes the sentence.'",
      "QUOTED, Merrill: 'THINK AND WRITE CRITICALLY - Answer the following questions in your Journal using complete sentences.'",
      "QUOTED, Glencoe Study Guide and Review p42: 'Upon completing this chapter, you should be able to:' / 'Use these exercises to review and prepare for the chapter test.'",
      "INFERRED (from the Glencoe review layout, not stated in words): every exercise is printed beside the objective it tests and cites its lesson number, which is what makes it a diagnostic rather than a test.",
    ],
    method: "OBJECTIVE-INDEXED SELF-ASSESSMENT. A wrong answer has to name the lesson to go back to, or the review only tells the student that they failed. That is the single idea taken from both books, and it is why every hint here ends by naming a lesson.",
    exampleOnly: [
      "the maggots, Redi's jars, Pasteur's swan-neck flask, pasteurised milk — WORLD: the unit's own examples, deliberately reused. A review must not introduce a new world; recognising the example IS part of the recall.",
    ],
    digitize: "The existing reading engine. The recap is the story, and every question's answer-hunt points into the recap, so the student who cannot answer is sent back to the paragraph AND told which full lesson to reopen. NO NEW MECHANIC NEEDED.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Science",
    thumb: true,   /* Paul's art, drawn 2026-09-01 - the cover existed before the lesson did. */
    blurb: "Four lessons back in one place. Not a test, a way of finding which one needs another look.",
    contains: [
      "A recap of all four Unit 1 lessons, read aloud",
      "Every word from the unit, defined exactly as it was taught",
      "Questions that name which lesson to reopen when you miss one",
      "A written answer at the end, in your own words",
    ] },
  eyebrow: ["Life Science", "U1-L5", "Life Science"],
  dek: "Four lessons, one question underneath all of them: what is alive, and how would anybody know?",
  scripture: {
    ref: "Job 12:7-8",
    text: "But ask now the beasts, and they shall teach thee; and the fowls of the air, and they shall tell thee: Or speak to the earth, and it shall teach thee: and the fishes of the sea shall declare unto thee.",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will recall the four Unit 1 lessons together and identify which one still needs work, rather than being scored on the unit as a whole."
      ]},
      { h: "How To Use This", p: [
        "🚨 This is a diagnostic, not a test. Every question's hint names the lesson it came from. A missed question is not a mark against him, it is a pointer - send him back to that lesson and let him answer again.",
        "The four lessons are What Makes Something Alive, Life Only Comes From Life, How We Know What We Know, and Science You Use Every Day. All four are on the shelf and can be reopened at any time."
      ]},
      { h: "Where Students Get Stuck", p: [
        "Theory and law, every time. A theory explains and a law describes, and a theory never becomes a law by collecting more evidence. If only one thing gets re-read, make it that section of How We Know What We Know.",
        "The second most common slip is thinking spontaneous generation was simply a silly idea. It was a reasonable one that survived because nobody had run a controlled experiment on it, and that is the actual lesson."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Four Lessons, One Question", s: [
      "This unit asked one question from four directions.",
      "",
      "What makes something alive, and how would anybody know?",
      "",
      "The first lesson worked out what living things have in common.",
      "The second asked where living things come from.",
      "The third asked how science decides anything at all.",
      "The fourth asked what all of that has to do with an ordinary day.",
      "",
      "Read this recap, then answer the questions.",
      "If one of them is hard, the hint will tell you which lesson to go back and open."
    ]},

    { title: "What Makes Something Alive", s: [
      "A stream moves and a tree barely moves, and only one of them is alive.",
      "So movement was never the test.",
      "",
      "Any living thing is called an organism.",
      "",
      "Living things react to what happens around them.",
      "Something that causes an organism to react is a stimulus, and the reaction it makes is a response.",
      "",
      "Living things also hold themselves steady inside while the world outside changes.",
      "Homeostasis is the ability to maintain relatively stable internal conditions.",
      "That is why you stay near the same temperature on a cold day and a hot one.",
      "",
      "Over long stretches of time, living things end up suited to where they live.",
      "An adaptation is an inherited characteristic that helps an organism survive in its environment.",
      "",
      "None of those four is impressive on its own.",
      "Together they are what separates a dog from a stream."
    ]},

    { title: "Where Life Comes From", s: [
      "For hundreds of years people believed that living things could simply appear from nonliving material.",
      "Rags made mice.",
      "Meat made maggots.",
      "That belief is called spontaneous generation.",
      "",
      "It was not a stupid idea.",
      "It matched what people saw, and nobody had tested it properly.",
      "",
      "Redi tested it.",
      "He put meat in jars and changed one thing only, the covering on them.",
      "Something that can change or be measured during an experiment is a variable.",
      "A test designed to determine how changing one factor affects the result is a controlled experiment.",
      "",
      "Covered jars grew no maggots.",
      "Uncovered jars did.",
      "The flies had been laying eggs the whole time.",
      "",
      "Pasteur finished the argument with a flask shaped like a swan's neck.",
      "",
      "What replaced spontaneous generation is biogenesis, the principle that living things come from other living things.",
      "",
      "Notice how it was settled.",
      "Not by argument, and not by who was most respected.",
      "It was settled by a test anyone could repeat."
    ]},

    { title: "How Science Decides", s: [
      "Science is not a pile of facts to memorize.",
      "It is closer to a set of rules for arguing honestly about what is true.",
      "",
      "It starts with an observation, which is something noticed or measured about the natural world.",
      "An observation leads to a question, and a question can lead to a hypothesis.",
      "",
      "A hypothesis is a possible explanation or answer that can be tested using evidence.",
      "",
      "Then it gets tested, usually against a control, which is something that provides a comparison in an experiment.",
      "Redi's covered jars were a control before the word was in common use.",
      "",
      "Two words get mixed up constantly, so be careful here.",
      "",
      "A theory is a broad explanation supported by a large amount of evidence and repeated testing.",
      "A law is a description of a consistent pattern or relationship observed in nature.",
      "",
      "A theory explains.",
      "A law describes.",
      "",
      "And a theory does not turn into a law once enough evidence piles up.",
      "They have different jobs."
    ]},

    { title: "Science You Actually Use", s: [
      "You used a dozen scientific discoveries before breakfast without noticing one of them.",
      "",
      "Milk is safe to drink because of pasteurization, a process that uses heat to reduce harmful microorganisms in foods and drinks.",
      "It is named after the same Pasteur who ended the spontaneous generation argument.",
      "",
      "Technology is the application of knowledge to solve problems or accomplish tasks.",
      "",
      "Deciding whether a claim is true means looking at evidence, which is information gathered through observation, measurement, testing, or other reliable methods.",
      "",
      "But knowing how to do something is not the same as knowing whether you should.",
      "Ethics is the study of questions and principles concerning what is right and wrong.",
      "",
      "Science can tell you what a thing will do.",
      "It cannot tell you whether doing it is right."
    ]},

    { title: "Ask the Beasts", s: [
      "Job 12:7-8 says, “But ask now the beasts, and they shall teach thee; and the fowls of the air, and they shall tell thee: Or speak to the earth, and it shall teach thee.”",
      "",
      "That is a very old instruction to go and look.",
      "",
      "It is also, almost exactly, what this unit has been teaching.",
      "Observe, ask, test, and look at what is actually there rather than at what you assumed.",
      "",
      "The order in creation is what makes any of it possible.",
      "An experiment only means something because nature behaves the same way twice."
    ]}
  ],

  todo: { title: "What To Do Now", s: [
      "That is the recap done, and this one works differently from the other four.",
      "It is not a test and you are not being scored on it.",
      "It is here to find which lesson needs another look.",
      "There are {q} questions, and every hint names the lesson it came from.",
      "If you miss one, open that lesson again and then come back and answer it.",
      "That is the whole point of a review, and it is not cheating.",
      "Then the word cards, {v} of them, gathered from all four lessons.",
      "Last, one written answer in your notebook, in complete sentences.",
      "Pick the lesson in this unit you found hardest, and write a short paragraph explaining it to somebody who has not read it.",
      "If you can explain it, you know it."
  ] },

  words: [
    ["Organism", "A living thing."],
    ["Homeostasis", "The ability to maintain relatively stable internal conditions."],
    ["Adaptation", "An inherited characteristic that helps an organism survive in its environment."],
    ["Spontaneous generation", "The old belief that living things could naturally appear from nonliving material."],
    ["Biogenesis", "The principle that living things come from other living things."],
    ["Controlled experiment", "A test designed to determine how changing one factor affects the result."],
    ["Hypothesis", "A possible explanation or answer that can be tested using evidence."],
    ["Theory", "A broad explanation supported by a large amount of evidence and repeated testing."],
    ["Law", "A description of a consistent pattern or relationship observed in nature."],
    ["Technology", "The application of knowledge to solve problems or accomplish tasks."]
  ],

  findsAt: 67,
  questions: [
    { q: "What is homeostasis?", find: [14],
      hint: "From Lesson 1, What Makes Something Alive. Think about staying the same temperature on a cold day.",
      choices: [
        "The ability to maintain relatively stable internal conditions.",
        "The ability to move without being pushed.",
        "An inherited characteristic that helps an organism survive.",
        "The reaction an organism makes to a stimulus."
      ], right: 0 },

    { q: "Why was spontaneous generation believed for so long?", find: [25],
      hint: "From Lesson 2, Life Only Comes From Life. The reading says plainly that it was not a stupid idea.",
      choices: [
        "Because powerful people insisted on it.",
        "Because it matched what people saw, and nobody had tested it properly.",
        "Because there was strong evidence for it.",
        "Because no one had ever seen a fly."
      ], right: 1 },

    { q: "What made Redi's jars a controlled experiment?", find: [27],
      hint: "From Lesson 2. Count how many things he changed.",
      choices: [
        "He used a very large number of jars.",
        "He repeated it many times over many years.",
        "He changed one thing only, the covering on them.",
        "He asked other scientists to agree with him first."
      ], right: 2 },

    { q: "What is the difference between a theory and a law?", find: [46, 47],
      hint: "From Lesson 3, How We Know What We Know. This is the one most people miss.",
      choices: [
        "A law is a theory that has been proven.",
        "A theory is a guess and a law is a fact.",
        "They mean the same thing in science.",
        "A theory explains, and a law describes a consistent pattern."
      ], right: 3 },

    { q: "Does a theory become a law once enough evidence is collected?", find: [50],
      hint: "From Lesson 3. Careful - the everyday meaning of theory is not the scientific one.",
      choices: [
        "No. They have different jobs.",
        "Yes, that is exactly how a law is made.",
        "Only in biology.",
        "Only if the scientist is famous enough."
      ], right: 0 },

    { q: "What is the difference between technology and ethics?", find: [55, 58],
      hint: "From Lesson 4, Science You Use Every Day. One answers what you CAN do.",
      choices: [
        "They are two words for the same thing.",
        "Technology applies knowledge to solve problems; ethics concerns what is right and wrong.",
        "Technology is modern and ethics is old-fashioned.",
        "Ethics is a kind of technology."
      ], right: 1 },

    { q: "How was the spontaneous generation argument finally settled?", find: [36, 37],
      hint: "From Lesson 2, and it is the biggest idea in the whole unit.",
      choices: [
        "By the most respected scientist declaring an answer.",
        "By a vote among scientists.",
        "By a test anyone could repeat.",
        "It was never really settled."
      ], right: 2 },

    { q: "According to the reading, what is science closer to than a pile of facts?", find: [39],
      hint: "From Lesson 3. The reading gives it in one phrase.",
      choices: [
        "A list of rules to memorize.",
        "A collection of famous experiments.",
        "A set of opinions held by experts.",
        "A set of rules for arguing honestly about what is true."
      ], right: 3 }
  ],

  vocabQuestions: [
    { q: "What is an <i>organism</i>?",
      choices: [
        "A living thing.",
        "Anything that moves on its own.",
        "A single cell.",
        "A scientific explanation."
      ], right: 0 },
    { q: "What is <i>biogenesis</i>?",
      choices: [
        "The belief that life appears from nonliving material.",
        "The principle that living things come from other living things.",
        "The study of what is right and wrong.",
        "A test with one variable."
      ], right: 1 },
    { q: "What is a <i>hypothesis</i>?",
      choices: [
        "A proven fact.",
        "A description of a pattern in nature.",
        "A possible explanation that can be tested using evidence.",
        "The final result of an experiment."
      ], right: 2 },
    { q: "What is an <i>adaptation</i>?",
      choices: [
        "A change an organism chooses to make.",
        "A stable internal condition.",
        "A reaction to a stimulus.",
        "An inherited characteristic that helps an organism survive in its environment."
      ], right: 3 },
    { q: "What is <i>technology</i>?",
      choices: [
        "The application of knowledge to solve problems or accomplish tasks.",
        "Any machine with a screen.",
        "The study of right and wrong.",
        "Information gathered by measurement."
      ], right: 0 }
  ]
};
