/* english/fragments-and-run-ons
   Grade 7 · english · unit 1. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 THE PROSE IS A DRAFT, NOT PAUL'S VOICE. Written 2026-09-24 on Opus from
   Houghton Mifflin English Grade 7 pp51-54 (leaf n67-n71), read on the borrowed
   copy the same evening, then given the /natural pass.

   ⚠️ THE SENTENCES ARE MINE. The book's world is Congress and women in
   politics (Shirley Chisholm, Jeannette Rankin, Dolley Madison). This uses one
   note on a fridge instead, because the book's own method, asking the question
   a fragment leaves unanswered, lands hardest when a real person is standing
   in a kitchen trying to answer it.

   🚨 THE VERSE IS A WORKING CHOICE, NOT PAUL'S. 1 Corinthians 14:9 fits (words
   easy to be understood). Choosing the scripture is his → review queue. */
'use strict';
module.exports = {
  id: "english/fragments-and-run-ons",
  slug: "fragments-and-run-ons",
  title: "Fragments and Run-ons",
  unit: "The Sentence · U1-L8",
  seq: { unit: 1, unitTitle: "The Sentence", n: 8 },
  natural: "2026-09-24",

  plan: {
    objective: "Tell a complete sentence from a fragment and from a run-on, and fix each one.",
    markers: [
      "QUOTED, Houghton Mifflin p51: 'If a group of words does not express a complete thought or does not have both a subject and a predicate, it is a sentence fragment. Notice how sentence fragments leave important questions unanswered.'",
      "QUOTED, the fragment chart, p51: 'Learned about American politicians. (Who learned?)' · 'Yvonne and Bruce. (What did Yvonne and Bruce do?)'",
      "QUOTED, p51: 'You can correct a fragment by adding a subject or a predicate or by completing a thought.'",
      "QUOTED, p52: 'Two or more sentences that run together without the correct punctuation form a run-on sentence.' Then the fixes: '1. Separate two or more thoughts by making them separate sentences. 2. Add a conjunction.'",
      "QUOTED, p52: 'Another way to correct a run-on is to simplify: The winner was proud, she was also happy becomes The winner was proud and happy.'",
      "QUOTED, Summing Up, p53: 'A run-on sentence expresses too many thoughts without correct punctuation.'",
    ],
    method: "ASK THE QUESTION THE FRAGMENT LEAVES OPEN. The book prints each fragment with the question it fails to answer beside it, Who learned? What did they do?, and the answer to that question is the missing piece. Run-ons get the opposite treatment: too many thoughts, so find where one ends and fix the join in one of three ways, separate, add a conjunction, or both, plus simplify.",
    exampleOnly: [
      "Maya, the note on the fridge, Jen's house, the library, the bike, the dog, her mom - WORLD: one note on one fridge, mine",
      "Shirley Chisholm, Jeannette Rankin, Dolley Madison, the House of Representatives - WORLD: the book's own examples, deliberately not reused",
    ],
    digitize: "The reading engine. Each fragment is an [ex] with its unanswered question in the panel note, then its fix. Run-ons show the broken version and each fix as separate [ex] lines, so the two-sentence fixes sit in one box as two lines.",
    unclear: [],
  },

  shelf: { grades: [7], subject: "English",
    blurb: "A note on the fridge that leaves Mom with more questions than answers. Finding the missing piece of a fragment, and where a run-on should have stopped.",
    contains: [
      "Teacher Notes written for whoever is teaching it",
      "The lesson read aloud, one line at a time, highlighted as it goes",
      "A panel that shows each example sentence as you hear it",
      "Three vocabulary cards, each with a check question",
      "Eight questions on spotting and fixing fragments and run-ons",
    ] },
  eyebrow: ["English 7", "U1-L8", "The Sentence"],
  dek: "One half of this note says too little and the other half says too much at once. Both are fixable, and a single question tells you how.",

  scripture: {
    ref: "1 Corinthians 14:9",
    text: "So likewise ye, except ye utter by the tongue words easy to be understood, how shall it be known what is spoken?",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will recognize a sentence fragment, a group of words missing a subject, a predicate or a complete thought, and a run-on, two or more sentences run together without correct punctuation, and will correct both."
      ]},
      { h: "Key Concepts", p: [
        "A fragment leaves a question unanswered. Ask who? or what did they do? or what about it?, and the answer is the part to add.",
        "A run-on packs too many thoughts together. Fix it by splitting it into separate sentences, by adding a comma and a conjunction, by doing both, or by simplifying two thoughts into one."
      ]},
      { h: "Where Students Get Stuck", p: [
        "A fragment that starts with a capital and ends with a period looks like a sentence. Because the library closed early. has both, and it still leaves the reader asking what happened.",
        "A comma isn't enough to join two sentences. Two complete thoughts with only a comma between them are still a run-on, and the book counts them as one."
      ]},
      { h: "Teaching Suggestion", p: [
        "Read each word group aloud and ask the student to answer it like a listener: who? did what? what about it? If there's a question left hanging, it's a fragment.",
        "For a run-on, have the student put a finger where the first thought ends. That spot is where the fix goes."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "A Note on the Fridge", s: [
      "When Maya's mom gets home from work on Tuesday, the house is empty, and there's a note stuck to the fridge with a magnet shaped like a lemon.",
      "",
      "[ex] Went to Jen's house.",
      "[ex] Because the library closed early.",
      "[ex] I'll be home by six, Jen's mom will drive me.",
      "[ex] The bike is in the garage I took the key the dog is fed.",
      "",
      "Every word of it is true, and Maya's mom still stands there reading it three times.",
      "The first half says too little, and the second half says too much at once, which is why the note tells her less than it should.",
      "So what exactly is wrong with it?"
    ]},
    { title: "Too Little: The Fragment", s: [
      "A sentence needs a subject, a predicate and a complete thought, and a group of words missing any of them is a sentence fragment.",
      "The quickest way to catch one is to read it like a listener and notice the question it leaves hanging.",
      "",
      "[ex] Went to Jen's house.",
      "",
      "Who went?",
      "The sentence never says, because it has a predicate, went to Jen's house, but no subject, so the fix is to add one.",
      "",
      "[ex] I went to Jen's house.",
      "",
      "The second line is sneakier, because it has a subject and a verb, library and closed.",
      "Read it like a listener, though, and it still leaves a question: because the library closed early, what happened?",
      "",
      "[ex] Because the library closed early.",
      "",
      "The word because promises a result and never delivers it, so the thought isn't complete.",
      "The fix is to finish it by saying what happened.",
      "",
      "[ex] We're working at Jen's because the library closed early.",
      "",
      "Notice that the fragment started with a capital letter and ended with a period, just like a sentence.",
      "A capital and a period don't make a sentence, though; a complete thought does, and that's why this mistake is so easy to miss."
    ]},
    { title: "Too Much: The Run-on", s: [
      "The second half of the note has the opposite problem.",
      "Two or more sentences that run together without the right punctuation make a run-on sentence, and the reader can't tell where one thought stops and the next begins.",
      "",
      "[ex] The bike is in the garage I took the key the dog is fed.",
      "",
      "Read it aloud and you'll hear three separate thoughts crashing into each other: the bike, the key and the dog.",
      "The line before it is a run-on too, even though it has a comma, because a comma on its own isn't strong enough to hold two complete sentences together.",
      "",
      "[ex] I'll be home by six, Jen's mom will drive me."
    ]},
    { title: "Three Ways to Fix a Run-on", s: [
      "The simplest fix is to split a run-on into separate sentences, one thought each.",
      "A period is the strongest stop there is, so nothing can run through it.",
      "",
      "[ex] I'll be home by six.",
      "[ex] Jen's mom will drive me.",
      "",
      "The second fix is to keep the comma and add a conjunction after it, which also tells the reader how the two thoughts connect.",
      "Here and says the second thought simply adds to the first, the same job it did at the diner.",
      "",
      "[ex] I'll be home by six, and Jen's mom will drive me.",
      "",
      "For a long one you can do both, joining the two thoughts that belong together and giving the third its own sentence.",
      "The bike and the key belong together, since they're both about getting into the garage, but the dog is its own news.",
      "",
      "[ex] The bike is in the garage, and I took the key.",
      "[ex] The dog is fed.",
      "",
      "Sometimes the best fix is to simplify, when two thoughts are really about the same thing and can share one subject.",
      "It usually leaves the sentence shorter as well as clearer.",
      "",
      "[ex] The dog is fed, the dog is walked.",
      "[ex] The dog is fed and walked."
    ]},
    { title: "Words Easy to Be Understood", s: [
      "Here's the note Maya should have written, with nothing missing and nothing crashing into anything else.",
      "Her mom would have read it once, put it back on the fridge, and started dinner.",
      "",
      "[ex] I went to Jen's house because the library closed early.",
      "[ex] I'll be home by six, and Jen's mom will drive me.",
      "[ex] The bike is in the garage, and I took the key.",
      "[ex] The dog is fed and walked.",
      "",
      "[verse] 1 Corinthians 14:9 says, “So likewise ye, except ye utter by the tongue words easy to be understood, how shall it be known what is spoken?”",
      "",
      "Paul was writing about speaking in church in a language nobody present could follow, and the principle underneath it reaches a note on a fridge too.",
      "If the reader can't tell what you meant, you haven't really said it yet."
    ]}
  ],

  visuals: [
    { when: "I went to Jen's house.",
      kind: "Fixed: Add a Subject", body: "I went to Jen's house", mark: ".",
      note: "Now the sentence says who." },
    { when: "We're working at Jen's because the library closed early.",
      kind: "Fixed: Complete the Thought", body: "We're working at Jen's because the library closed early", mark: ".",
      note: "Now because leads somewhere." }
  ],

  words: [
    ["Sentence fragment", "A group of words missing a subject, a predicate or a complete thought.", 8],
    ["Run-on sentence", "Two or more sentences run together without the correct punctuation.", 23],
    ["Complete thought", "An idea that doesn't leave the reader with an unanswered question about what happened.", 21]
  ],

  vocabQuestions: [
    { q: "Which of these is a <i>sentence fragment</i>?",
      choices: ["I went to Jen's house.", "Because the library closed early.", "The dog is fed.", "Jen's mom will drive me."],
      right: 1, why: "Because promises a result that never comes, so the thought isn't complete." },
    { q: "Which of these is a <i>run-on sentence</i>?",
      choices: ["The bike is in the garage.", "The dog is fed and walked.", "The bike is in the garage I took the key.", "I took the key."],
      right: 2, why: "Two complete thoughts run together with no punctuation between them." },
    { q: "What makes a <i>complete thought</i>?",
      choices: ["A capital letter at the start.", "A period at the end.", "More than five words.", "An idea that leaves no question hanging about what happened."],
      right: 3, why: "A capital and a period don't make a sentence. A complete thought does." }
  ],

  findsAt: 52,
  questions: [
    { q: "What is missing from “Went to Jen's house”?", find: [10, 11, 12],
      hint: "Read it like a listener. What question does it leave?",
      choices: ["A verb.", "A subject.", "A period.", "A conjunction."], right: 1,
      why: "It never says who went, so it's missing its subject." },
    { q: "Why is “Because the library closed early” a fragment, even though it has a subject and a verb?", find: [15, 16, 17],
      hint: "Read the Too Little section again.",
      choices: [
        "It's too short.",
        "It doesn't end with a period.",
        "Because promises a result, and the thought never finishes.",
        "Library isn't a real subject."
      ], right: 2,
      why: "The thought isn't complete, so the reader is left asking what happened." },
    { q: "What is the fastest way to catch a fragment?", find: [9],
      hint: "Read the Too Little section again.",
      choices: [
        "Count the words.",
        "Look for a capital letter.",
        "Look for the word and.",
        "Read it like a listener and notice the question it leaves hanging."
      ], right: 3,
      why: "A fragment always leaves a question like who? or what happened?" },
    { q: "What is a run-on sentence?", find: [23],
      hint: "Read the Too Much section again.",
      choices: [
        "Two or more sentences run together without the correct punctuation.",
        "Any sentence longer than twenty words.",
        "A sentence with no verb.",
        "A sentence that ends with an exclamation point."
      ], right: 0,
      why: "A run-on packs too many thoughts together without the punctuation to separate them." },
    { q: "Why is “I'll be home by six, Jen's mom will drive me” still a run-on?", find: [26, 27],
      hint: "What can a comma do on its own?",
      choices: [
        "It has too many words.",
        "A comma alone isn't strong enough to join two complete sentences.",
        "It's missing a subject.",
        "It's actually correct."
      ], right: 1,
      why: "Two complete thoughts need a period between them, or a comma plus a conjunction." },
    { q: "Which of these correctly fixes “I'll be home by six, Jen's mom will drive me”?", find: [32, 34],
      hint: "Read the Three Ways to Fix a Run-on section again.",
      choices: [
        "I'll be home by six Jen's mom will drive me.",
        "I'll be home. By six. Jen's mom will drive me.",
        "I'll be home by six, and Jen's mom will drive me.",
        "Home by six, Jen's mom."
      ], right: 2,
      why: "Keeping the comma and adding a conjunction joins the two thoughts correctly." },
    { q: "How does simplifying fix “The dog is fed, the dog is walked”?", find: [39, 42],
      hint: "Read the end of the Three Ways to Fix a Run-on section.",
      choices: [
        "It deletes the second thought.",
        "It lets two thoughts about the same thing share one subject: The dog is fed and walked.",
        "It adds a second dog.",
        "It turns it into a question."
      ], right: 1,
      why: "Both thoughts are about the dog, so they can share one subject." },
    { q: "How many separate thoughts are in “The bike is in the garage I took the key the dog is fed”?", find: [24, 25],
      hint: "Read it aloud and listen for where each thought ends.",
      choices: ["One", "Two", "Four", "Three"], right: 3,
      why: "The bike, the key and the dog are three separate thoughts crashing together." }
  ],

  todo: { title: "What To Do Now", s: [
      "{c} word cards at the top of the page, then {Q} questions about the lesson, then {v} more questions about those words, {T} questions in all.",
      "For a fragment, read it like a listener and ask what question it leaves hanging, because the answer is the missing piece.",
      "For a run-on, find where the first thought ends, because that's where the fix goes.",
      "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper.",
      "If you get stuck, go back to the section the hint names and read it again."
  ] },
};
