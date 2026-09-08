/* science/science-you-use-every-day
   Grade 7 · science · unit 1. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry. */
'use strict';
module.exports = {
  id: "science/science-you-use-every-day",
  slug: "science-you-use-every-day",
  title: "Science You Use Every Day",
  unit: "Life Science &middot; Unit 1 &middot; Lesson 4",
  seq: { unit: 1, unitTitle: "Life and How We Study It", n: 4 },
  shelf: { grades: [7], subject: "Science",
    thumb: true,   /* Paul's art, 2026-08-31. Source PNG on his Desktop; see Lesson 1. */
    blurb: "What the method has already done to your ordinary morning, and the choices it hands you.",
    contains: [
      "A story-form reading, read aloud with the words highlighted",
      "Four vocabulary words, each one defined inside the reading",
      "Day 1: four questions with the answer findable in the text",
      "Day 2: a vocabulary check and a printable answer sheet",
    ] },
  eyebrow: ["Science", "Unit 1 &middot; Lesson 4", "Life Science"],
  dek: "You used a dozen scientific discoveries before breakfast without noticing one of them. Every one of them also handed somebody a decision.",
  scripture: {
    ref: "Micah 6:8",
    text: "He hath shewed thee, O man, what is good; and what doth the LORD require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?",
  },
  /* 🚨 TEACHER NOTES, Paul's own text, 2026-09-03. Goal / Key Concepts / Teaching
     Suggestion, the same headings as Lessons 1 and 3.
     ⚠️ "Key Vocabulary" is MINE, not his; it renders from `words` so it duplicates
     nothing. Same addition as the other three science lessons. */
  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will discover how scientific discoveries affect everyday life and learn the difference between science and technology. They will also learn why evidence matters and why knowing what we can do is different from deciding what we should do."
      ]},
      { h: "Key Concepts", p: [
        "Science helps us discover how the natural world works. Technology uses knowledge to solve problems or accomplish tasks. Evidence is information gathered through observation, measurement, and testing. Ethics deals with questions about what is right and wrong."
      ]},
      { h: "Teaching Suggestion", p: [
        "Ask the student to name three things they used before starting school today. A refrigerator, phone, medicine, clean water, toothpaste, or even breakfast can lead to a scientific discovery.",
        "Near the end, emphasize that knowledge gives us responsibility. Science can tell us what is possible, but Scripture helps guide Christians in how knowledge should be used wisely and for good."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },
  /* 🚨 REWRITTEN 2026-09-03 FROM PAUL'S OWN TEXT. The fourth and last science lesson
     through item 29, after Lessons 1, 2 and 3 the same evening.
     ⚠️ ONE EDIT TO HIS TEXT, flagged to him and agreed: the four evidence questions
     arrived as a single run - "You can ask questions such as: Who tested it? What did
     they actually find? ..." - which reads aloud as one highlighted block four
     questions long. They are separate sentences here, the way Lesson 3 handles "Why
     did that happen? What caused it?", so his lead-in became "such as these."
     ⚠️ US spelling "pasteurization" throughout, matching his text. The old word card
     said "Pasteurisation" and the story said the same; both are US now so the card and
     the story agree, which is what matters.
     ⚠️ Markdown emphasis stripped - sentences render through textContent as word spans.
     🚨 SENTENCE NUMBERS ARE LOAD-BEARING - see `findsAt` below. */
  parts: [
    { title: "You Used Science Before Breakfast", s: [
      "You probably used science today without even thinking about it.",
      "",
      "Maybe you opened the refrigerator and poured a glass of milk.",
      "You turned on a faucet and drank clean water.",
      "You checked the weather on a phone or used toothpaste to brush your teeth.",
      "",
      "None of those things probably felt like a science experiment, but scientific discoveries helped make all of them possible.",
      "",
      "Take milk as an example.",
      "In Lesson 2, you learned about Louis Pasteur and his experiments with microorganisms.",
      "That knowledge helped lead to pasteurization, a process that uses heat to reduce harmful microorganisms in foods such as milk.",
      "",
      "A discovery made in a laboratory eventually became something you use at the breakfast table.",
      "",
      "That is science at work in everyday life."
    ]},
    { title: "Science and Technology", s: [
      "Science and technology are closely connected, but they are not exactly the same thing.",
      "",
      "Science investigates how the natural world works.",
      "Technology applies knowledge to solve problems or accomplish tasks.",
      "",
      "Pasteur was doing science when he studied microorganisms.",
      "Using knowledge about microorganisms to make food safer is an example of technology.",
      "",
      "The same relationship appears everywhere.",
      "Scientists study electricity, while engineers use knowledge about electricity to create useful devices.",
      "Scientists study weather, while technology helps us track storms and predict dangerous conditions.",
      "",
      "Science helps us understand.",
      "Technology helps us put knowledge to work."
    ]},
    { title: "Look at the Evidence", s: [
      "You will hear scientific sounding claims throughout your life.",
      "A commercial might say a product is “scientifically tested.”",
      "Someone online might claim that a certain food, medicine, or product has an amazing effect.",
      "",
      "Do not believe something simply because it sounds scientific.",
      "Ask about the evidence.",
      "",
      "Evidence is information gathered through observation, measurement, testing, and other reliable methods.",
      "",
      "You can ask questions such as these.",
      "",
      "Who tested it?",
      "What did they actually find?",
      "Was there something to compare it with?",
      "Have other researchers found similar results?",
      "",
      "Asking questions does not mean rejecting science.",
      "Asking careful questions is part of thinking scientifically."
    ]},
    { title: "Just Because We Can, Should We?", s: [
      "Scientific knowledge can give people incredible abilities, but knowledge also brings responsibility.",
      "",
      "Imagine that scientists discover how to build an extremely powerful machine.",
      "Science can help explain how to build it and what it can do.",
      "",
      "But science alone cannot decide whether using it in a particular way is right or wrong.",
      "",
      "Questions about right and wrong are questions of ethics.",
      "",
      "This is an important difference.",
      "Science can help us understand what we can do.",
      "Ethics asks what we should do.",
      "",
      "The more powerful our knowledge becomes, the more important wisdom becomes too."
    ]},
    { title: "Knowledge With Wisdom", s: [
      "The Bible has a great deal to say about knowledge and wisdom.",
      "",
      "Proverbs 2:6 says, “For the LORD giveth wisdom: out of his mouth cometh knowledge and understanding.”",
      "",
      "God gave human beings minds capable of learning about His creation.",
      "We can discover microorganisms, study cells, understand electricity, build machines, develop medicines, and explore places people once could never reach.",
      "",
      "But being able to do something does not automatically mean we should do it.",
      "",
      "Micah 6:8 tells us “to do justly, and to love mercy, and to walk humbly with thy God.”",
      "",
      "That gives Christians an important way to think about scientific knowledge.",
      "We should ask not only “Can we do this?” but also “Is this right?",
      "Is it wise?",
      "Does it help people?",
      "Does it honor God?”",
      "",
      "Science gives us knowledge about creation.",
      "God gives us a standard for how that knowledge should be used."
    ]},
    { title: "Science Points Us Back to the Creator", s: [
      "Think about everything you have studied in this unit.",
      "",
      "You learned what makes something alive.",
      "You learned that living things come from other living things.",
      "You learned how scientists use observations and experiments to investigate the world.",
      "Now you have seen how those discoveries become part of everyday life.",
      "",
      "Behind all of it is an orderly world that can be studied and understood.",
      "",
      "Psalm 111:2 says, “The works of the LORD are great, sought out of all them that have pleasure therein.”",
      "",
      "When we study cells, organisms, water, energy, or anything else in creation, we are studying the works of the Creator.",
      "",
      "Science does not have to pull us away from God.",
      "The more we discover about the complexity, order, and usefulness of His creation, the more reasons we have to stand amazed at what He has made.",
      "",
      "God has given us the ability to learn.",
      "Our responsibility is to use what we learn with wisdom, humility, and purpose.",
      "",
      "The unit may be ending, but there is still an entire creation waiting to be explored."
    ]}
  ],
  /* ⚠️ ONE SITTING as of 2026-09-04. The questions come first and the word cards
     second, matching lesson-template.html's panel order. This block used to say word cards first, like Lessons 1 and 2
     did before Paul caught it on the page on 2026-09-03. */
  todo: { title: "What To Do Now", s: [
      "That is the reading done.",
      "Two things are left, and they both happen today.",
      "First, the questions.",
      "Four of them, and the answer to each one is in the reading above, not in your memory.",
      "If a question is hard, do not guess.",
      "Use the bar or the arrows to go back to the part it came from and read it again.",
      "The one people trip on is the difference between science and technology.",
      "Read Science and Technology again and look for which one investigates and which one applies.",
      "Then the word cards.",
      "Four words, and every one of them is explained somewhere in the story you just heard.",
      "Tap each card to check yourself, then answer the four vocabulary questions underneath it.",
      "This is the last lesson in the unit, so if you can say what ethics asks that science cannot, you have finished it properly."
  ] },
  /* Paul's definitions, 2026-09-03. Four words and four checks - a clean pair, unlike
     Lessons 1 and 3 where a card was left unchecked.
     ⚠️ US spelling, matching his story. The card used to say "Pasteurisation". */
  words: [
    ["Pasteurization", "A process that uses heat to reduce harmful microorganisms in foods and drinks."],
    ["Technology", "The application of knowledge to solve problems or accomplish tasks."],
    ["Evidence", "Information gathered through observation, measurement, testing, or other reliable methods."],
    ["Ethics", "Questions and principles concerning what is right and wrong."]
  ],
  /* 🚨 findsAt = the story sentence count these `find` indexes were verified against.
     Change the story and the build stops until they are re-checked. See checkFinds(). */
  findsAt: 68,
  questions: [
    { q: "What is the difference between science and technology?", find: [10, 11, 18, 19],
      hint: "One of them understands. The other one puts it to work.",
      choices: [
        "Science investigates how the natural world works, while technology applies knowledge to solve problems.",
        "Science happens in schools, while technology happens in factories.",
        "Science studies living things, while technology studies machines.",
        "There is no difference between them."
      ], right: 0 },
    { q: "Why is evidence important when someone makes a scientific claim?", find: [23, 24, 25],
      hint: "Think about what you are allowed to ask when something sounds scientific.",
      choices: [
        "Evidence makes a claim sound more impressive.",
        "Evidence gives us information from observation, measurement, or testing that we can examine.",
        "Evidence proves that a scientist can never be wrong.",
        "Evidence is only needed in laboratories."
      ], right: 1 },
    { q: "What is the difference between a scientific question and an ethical question?", find: [36, 37, 39],
      hint: "One asks what is possible. The other asks what is right.",
      choices: [
        "Scientific questions are important, but ethical questions are not.",
        "Science can help determine what is possible, while ethics considers what is right or wrong.",
        "Ethics is another name for an experiment.",
        "Scientific questions can never affect ethical decisions."
      ], right: 1 },
    { q: "How is pasteurization an example of science being used in everyday life?", find: [6, 7, 8],
      hint: "Go back to the milk, and to whose experiments it came from.",
      choices: [
        "It uses knowledge about microorganisms to help make foods such as milk safer.",
        "It causes microorganisms to appear in milk.",
        "It turns milk into medicine.",
        "It prevents milk from ever spoiling."
      ], right: 0 }
  ],
  /* Paul's hand-written Day Two, 2026-09-03, replacing the generated check whose wrong
     answers were the other three definitions from this same lesson. */
  vocabQuestions: [
    { q: "What is <i>pasteurization</i>?",
      choices: [
        "A process that uses heat to reduce harmful microorganisms in foods and drinks.",
        "A way of creating microorganisms.",
        "A method for freezing food.",
        "An experiment performed only by Louis Pasteur."
      ], right: 0 },
    { q: "What is <i>technology</i>?",
      choices: [
        "Memorizing scientific facts.",
        "Applying knowledge to solve problems or accomplish tasks.",
        "Studying only computers and electronics.",
        "Deciding whether something is right or wrong."
      ], right: 1 },
    { q: "What is <i>evidence</i>?",
      choices: [
        "Anything someone says is true.",
        "A person's opinion about an experiment.",
        "Information gathered through observation, measurement, testing, or other reliable methods.",
        "A scientific guess."
      ], right: 2 },
    { q: "What is <i>ethics</i>?",
      choices: [
        "The study of microorganisms.",
        "Questions and principles concerning what is right and wrong.",
        "A type of scientific experiment.",
        "Using science to create technology."
      ], right: 1 }
  ]
};
