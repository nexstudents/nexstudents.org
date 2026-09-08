/* english/writing-good-sentences
   Grade 7 · english · unit 1. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry. */
'use strict';
module.exports = {
  id: "english/writing-good-sentences",
  slug: "writing-good-sentences",
  title: "Writing Good Sentences",
  unit: "English &middot; Unit 1 &middot; Lesson 1-2",
  /* Houghton Mifflin's craft page right after Kinds of Sentences, book pages
     35-36. `seq` is the order; the `unit` string above is a label and is
     never parsed. */
  seq: { unit: 1, unitTitle: "The Sentence", n: 2 },
  shelf: { grades: [7], subject: "English",
    blurb: "Two ways to make an already-correct sentence better: mixing up the types you use, and breaking apart the ones that ramble on too long.",
    contains: [
      "Teacher Notes written for whoever is teaching it",
      "The lesson read aloud, one line at a time, highlighted as it goes",
      "Three vocabulary cards, each with a check question",
      "Ten questions on revising sentences, not just naming them",
    ] },
  eyebrow: ["English", "Unit 1 &middot; Lesson 1-2", "The Sentence"],
  dek: "A statement, a question, a command, and a shout are only useful if you know when to use each one. This lesson is about making your own sentences work harder.",
  scripture: {
    ref: "Proverbs 16:24",
    text: "Pleasant words are as an honeycomb, sweet to the soul, and health to the bones.",
  },

  /* Paul's Teacher Notes, verbatim shape from kinds-of-sentences, plus the
     generated Key Vocabulary block. */
  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will practice two revising strategies from Houghton Mifflin's Writing Good Sentences: varying the types of sentences used in a paragraph, and correcting stringy sentences that connect too many ideas with the word and."
      ]},
      { h: "Key Concepts", p: [
        "A paragraph built entirely from one sentence type, usually declarative, can feel flat even when every sentence is correct. Mixing in a question, a command, or an exclamation gives the writing energy. Separately, a stringy sentence packs too many ideas together with and, which makes it hard to follow. The fix is to split it into two or more shorter sentences, each carrying one idea."
      ]},
      { h: "Where Students Get Stuck", p: [
        "Kolten may try to fix a stringy sentence by just deleting the word and, without adding the period and capital letter the new sentence needs. Remind him that splitting a sentence means punctuating both halves as complete sentences, not just removing a conjunction."
      ]},
      { h: "Teaching Suggestion", p: [
        "Have him read a stringy sentence out loud without taking a breath. Wherever he runs out of air is usually where the sentence should have been split. For varying sentence types, read a paragraph of all-declarative sentences out loud together, then read the same paragraph with a question or command mixed in, and ask him which one sounds more interesting."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Two Kinds of Revising", s: [
      "You already know the four kinds of sentences.",
      "Declarative, interrogative, imperative, and exclamatory.",
      "Knowing their names is one thing.",
      "Using them well is a different skill.",
      "",
      "This lesson is not about naming a sentence anymore.",
      "It's about revising, which means looking at something you already wrote and making it better.",
      "",
      "You'll practice two revising strategies today.",
      "The first is varying your sentence types.",
      "The second is fixing stringy sentences."
    ]},
    { title: "Varying Sentence Types", s: [
      "If every sentence in a paragraph is declarative, the writing can start to feel flat.",
      "Read this practice paragraph.",
      "",
      "You have never missed a game.",
      "You never miss practice either.",
      "You always show up early.",
      "The coach appreciates players like you.",
      "",
      "Every one of those sentences just states a fact.",
      "Nothing sounds surprising, and nothing asks the reader anything.",
      "",
      "Now watch what happens when the sentence types change.",
      "",
      "Have you ever missed a game?",
      "Never miss practice.",
      "You always show up early, and the coach notices!",
      "That is what makes a player like you valuable.",
      "",
      "The question grabs attention first.",
      "The command adds energy.",
      "The exclamation shows how much the coach means it.",
      "Varying the types keeps a reader interested instead of hearing the same rhythm four times in a row."
    ]},
    { title: "Correcting Stringy Sentences", s: [
      "A stringy sentence is a different problem.",
      "It happens when you connect too many ideas with the word and, so the sentence just keeps going.",
      "",
      "Try reading this sentence out loud without stopping to breathe.",
      "",
      "The team practiced for two hours and then everyone was tired and the coach called a water break and some players sat down and others just stood there.",
      "",
      "That sentence never stops moving, and a reader loses track of which idea matters most.",
      "A stringy sentence rambles instead of making one clear point.",
      "",
      "Here is the same idea, corrected.",
      "",
      "The team practiced for two hours.",
      "Everyone was tired, so the coach called a water break.",
      "Some players sat down.",
      "Others just stood there.",
      "",
      "Breaking a stringy sentence into shorter sentences gives each idea room to be understood.",
      "Notice that the ideas did not change.",
      "Only the way they were divided changed."
    ]},
    { title: "Revising Is a Skill, Not a Rule", s: [
      "Neither of these strategies has one correct answer.",
      "There is no rule that tells you exactly when to switch sentence types or exactly where to break a stringy sentence.",
      "Revising means reading your own writing and asking whether it sounds clear and interesting.",
      "",
      "That is a skill you will use in every piece of writing you do, not just in this lesson.",
      "Good writers revise their own sentences the same way you are about to practice revising these."
    ]},
    { title: "Choosing Your Words Well", s: [
      "Revising takes patience because your first sentence is not usually your best one.",
      "That is true for every writer, not just students.",
      "",
      "Proverbs 16:24 says, “Pleasant words are as an honeycomb, sweet to the soul, and health to the bones.”",
      "Good writing takes work, the same way choosing kind words takes thought.",
      "",
      "When you revise a sentence, you are not just fixing it.",
      "You are choosing better words on purpose."
    ]},
  ],

  words: [
    ["Revise", "To revise means to look at a piece of writing again and change it to make it clearer or more interesting."],
    ["Vary", "To vary means to use different types of something instead of repeating the same one over and over."],
    ["Stringy Sentence", "A stringy sentence connects too many ideas with the word and, so it rambles on and is hard to follow."]
  ],

  vocabQuestions: [
    { q: "Which sentence shows <i>revising</i>?",
      choices: ["Reading a paragraph once and moving on.", "Reading a paragraph again and rewriting a weak sentence."],
      right: 1, why: "Revising means looking at your own writing again and making it better." },
    { q: "Which paragraph <i>varies</i> its sentence types?",
      choices: ["Four sentences that all just state facts.", "A question, a command, and an exclamation mixed together."],
      right: 1, why: "Varying means using different types instead of repeating the same one." },
    { q: "Which sentence is <i>stringy</i>?",
      choices: ["We practiced. Then we rested.", "We practiced and then we rested and then we ate and then we left."],
      right: 1, why: "It connects too many ideas with the word and." }
  ],

  findsAt: 51,
  questions: [
    { q: "Everyone showed up and then the game started and it rained the whole time and nobody wanted to leave.", find: [27],
      hint: "Read the Correcting Stringy Sentences section again. How many ideas does this sentence connect with and?",
      choices: ["It is declarative.", "It is a stringy sentence.", "It is imperative.", "It uses too many exclamation points."], right: 1,
      why: "It connects too many ideas with the word and, so it rambles instead of making one clear point." },
    { q: "A stringy sentence connects too many ideas with which word?", find: [27],
      hint: "Look at the definition of a stringy sentence again.",
      choices: ["but", "or", "and", "so"], right: 2,
      why: "A stringy sentence connects too many ideas with the word and." },
    { q: "Which is the corrected version of this stringy sentence: “The team practiced for two hours and then everyone was tired and the coach called a water break”?", find: [34],
      hint: "Read the corrected version in the Correcting Stringy Sentences section again.",
      choices: [
        "The team practiced for two hours and then everyone was tired and the coach called a water break.",
        "The team practiced for two hours. Everyone was tired, so the coach called a water break.",
        "The team practiced, two, hours, everyone, tired.",
        "The team practiced for two hours and everyone."
      ], right: 1,
      why: "Breaking the stringy sentence into shorter sentences gives each idea room to be understood." },
    { q: "Why does varying sentence types make writing more interesting?", find: [25],
      hint: "Read the last line of the Varying Sentence Types section again.",
      choices: ["It makes the paragraph longer.", "It keeps the reader from hearing the same rhythm over and over.", "It removes all periods.", "It turns every sentence into a question."], right: 1,
      why: "Varying the types keeps a reader interested instead of hearing the same rhythm four times in a row." },
    { q: "“You have never missed a game. You never miss practice either. You always show up early.” What is the problem with this paragraph?", find: [15],
      hint: "Read the sentence right after this practice paragraph in the story.",
      choices: ["It is too short.", "Every sentence is the same type, so it feels flat.", "It has no verbs.", "It is missing punctuation."], right: 1,
      why: "Every one of those sentences just states a fact, so the writing can feel flat." },
    { q: "“Have you ever missed a game?” What does this sentence add to the paragraph?", find: [22],
      hint: "Read the line right after the revised paragraph in the story.",
      choices: ["It states a fact.", "It grabs the reader's attention by asking a question.", "It gives a command.", "It shows strong feeling."], right: 1,
      why: "The question grabs attention first." },
    { q: "What does the word revise mean?", find: [5],
      hint: "Read the Two Kinds of Revising section again.",
      choices: ["To copy a sentence exactly.", "To look at your writing again and make it better.", "To add as many exclamation points as possible.", "To find the subject of a sentence."], right: 1,
      why: "Revising means looking at something you already wrote and making it better." },
    { q: "“Neither of these strategies has one correct answer.” What does this tell you about revising?", find: [41],
      hint: "Read the Revising Is a Skill, Not a Rule section again.",
      choices: ["Revising is exactly like following a math formula.", "There is no single rule, so you decide what sounds clear and interesting.", "Only teachers are allowed to revise sentences.", "You should never change a sentence once you write it."], right: 1,
      why: "There is no rule that tells you exactly when to switch sentence types or exactly where to break a stringy sentence." },
    { q: "“Pleasant words are as an honeycomb, sweet to the soul, and health to the bones.” What does this verse compare pleasant words to?", find: [47],
      hint: "Read the Choosing Your Words Well section again.",
      choices: ["A stringy sentence.", "Something sweet and healthy, like honey.", "A command.", "An exclamation point."], right: 1,
      why: "The verse compares pleasant words to honeycomb, something sweet to the soul and healthy for the body." },
    { q: "“The command adds energy.” Which revising strategy does this describe?", find: [23],
      hint: "Read the Varying Sentence Types section again.",
      choices: ["Correcting stringy sentences.", "Varying sentence types.", "Writing only declarative sentences.", "Removing all commands."], right: 1,
      why: "Mixing a command into a paragraph of statements is part of varying sentence types." }
  ],

  todo: { title: "What To Do Now", s: [
      "{Q} questions about the lesson, then {c} word cards with {v} more questions under them. {T} questions in all.",
      "For each question, decide whether the sentence needs to vary its type or needs to be broken apart because it is stringy.",
      "The wording in the choices is close on purpose, so read each one slowly before you pick.",
      "Do the word cards last.",
      "Tap each card, then answer the question underneath it.",
      "If you get stuck, go back to the section with that name and read its first line again."
  ] },
};
