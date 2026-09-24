/* english/unit-1-review
   Grade 7 · english · unit 1. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 A REVIEW IS A DIAGNOSTIC, NOT A TEST. Every hint names the lesson to go back
   to, so a wrong answer sends him somewhere.

   🚨 THE PROSE IS A DRAFT, NOT PAUL'S VOICE. Written 2026-09-24 on Opus from
   Houghton Mifflin English Grade 7, Unit 1 Checkup pp58-59 (leaf n75), read on
   the borrowed copy the same evening, then given THE PASS and stamped.

   ⚠️ THE WORLD IS THE BOOK'S OWN MIXED REVIEW: a wetlands poster with eleven
   errors, proofread against a checklist. Kept, because proofreading one real
   piece of writing is exactly how every skill in the unit gets used at once.
   A few of the poster's sentences are adjusted so each unit skill shows up.

   ⚠️ NO VERSE. A review carries none unless Paul wants a callback. */
'use strict';
module.exports = {
  id: "english/unit-1-review",
  slug: "unit-1-review",
  title: "Unit 1 Review: The Sentence",
  unit: "The Sentence · U1-L10",
  seq: { unit: 1, unitTitle: "The Sentence", n: 10 },
  natural: "2026-09-24",

  plan: {
    objective: "Use every Unit 1 skill on one real piece of writing: name the kind of sentence, find the subject and predicate, fix fragments and run-ons, and join ideas with the right conjunction.",
    markers: [
      "QUOTED, Checkup p58, one heading per lesson: 'Kinds of Sentences (p. 32)' · 'Complete Subjects and Complete Predicates (p. 37)' · 'Simple Subjects and Simple Predicates (p. 40)' · 'Finding the Subject (p. 45)' · 'Conjunctions (p. 48)' · 'Fragments and Run-ons (p. 51)'",
      "QUOTED, Mixed Review p59: 'Write this information from a poster, correcting the eleven errors.' with a Proofreading Checklist: 'incorrect end punctuation · fragments · run-on sentences'",
      "QUOTED, the poster opens: 'What is a wetland.'",
    ],
    method: "PROOFREAD ONE PIECE OF WRITING. The book's Mixed Review hands the student a poster full of errors and a checklist. The lesson walks the poster section by section, and each section is one Unit 1 skill applied to a real sentence, so the review feels like a job rather than a quiz.",
    exampleOnly: [
      "the wetlands poster, marshes, swamps, bogs, birds and frogs - WORLD: one poster, the book's own",
    ],
    digitize: "The reading engine. The broken poster and the fixed poster are each one [ex] box; every hint names the lesson to reopen.",
    unclear: [],
  },

  shelf: { grades: [7], subject: "English",
    blurb: "A poster about wetlands full of mistakes. Fixing it takes every skill in the unit, one sentence at a time.",
    contains: [
      "Teacher Notes written for whoever is teaching it",
      "The lesson read aloud, one line at a time, highlighted as it goes",
      "One real poster to proofread, with a checklist",
      "Questions that each point back to the lesson to reread",
    ] },
  eyebrow: ["English 7", "U1-L10", "The Sentence"],
  dek: "Everything in this unit, from the four kinds of sentences to the comma before but, shows up on one poster. Your job is to fix it.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Bring the nine Unit 1 lessons together on one piece of real writing, check which skills hold, and send the student back to the lesson for any that don't."
      ]},
      { h: "Key Concepts", p: [
        "Every question here is tied to one Unit 1 lesson, and the hint names it, so a wrong answer is directions to the right page and not a mark against the student.",
        "The poster is the book's own proofreading task. If there's time, print it and have the student mark the errors by hand before reading the fixed version."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "A Poster Full of Mistakes", s: [
      "The nature center is putting up a poster about wetlands, and somebody wrote it in a hurry, so before it goes on the wall it has to be checked.",
      "Here's how it starts, exactly as it was handed in.",
      "",
      "[ex] What is a wetland.",
      "[ex] A wetland is land that is filled with water for part of the year, it links dry land and open water.",
      "[ex] Wetlands take many forms.",
      "[ex] Including marshes, swamps and bogs.",
      "[ex] What a valuable resource a wetland is?",
      "",
      "Every mistake in it is one this unit taught you to catch, and fixing it uses almost everything at once.",
      "So where do you start?"
    ]},

    { title: "Four Kinds of Sentences", s: [
      "Start with the end marks, because the first sentence asks a question and ends with a period.",
      "A sentence that asks something is interrogative and needs a question mark, so What is a wetland? is the fix.",
      "The last line has the opposite problem, because What a valuable resource a wetland is! shows strong feeling, which makes it exclamatory, and it needs an exclamation point.",
      "The other two kinds are declarative, which states something and ends with a period, and imperative, which gives a command, like Protect the wetlands near your home."
    ]},

    { title: "Where the Sentence Splits", s: [
      "Every sentence divides into two halves: the complete subject, which says who or what the sentence is about, and the complete predicate, which says what's being said about it.",
      "In Many birds and frogs need wetlands, the complete subject is Many birds and frogs, and since that subject has two nouns joined by and, it's a compound subject.",
      "In These areas protect our water and absorb flood waters, the subject has two verbs, protect and absorb, which makes a compound predicate.",
      "Inside each half sits one main word, the simple subject and the simple predicate, so in Wetlands take many forms, those are wetlands and take."
    ]},

    { title: "The Subject That Hides", s: [
      "Some sentences on a poster turn the order around, and the subject hides behind the verb.",
      "In Here are some facts about wetlands, the subject isn't here, because here is never the subject; ask what are, and the answer is facts.",
      "A command like Protect the wetlands near your home has a subject too, and it's you, understood, because nobody writes it."
    ]},

    { title: "Too Little and Too Much", s: [
      "Two lines on the poster break the rules in opposite directions.",
      "Including marshes, swamps and bogs is a fragment, because it leaves a question hanging: including them in what?",
      "The second line is a run-on, since it has two complete thoughts joined by nothing but a comma, and a comma alone isn't strong enough to hold them.",
      "You can fix the fragment by joining it to the sentence before it, and fix the run-on with a period or with a comma and a conjunction."
    ]},

    { title: "Joining Ideas the Right Way", s: [
      "The conjunction you choose carries meaning, so and adds, but contrasts and or offers a choice, the same as it did at the diner.",
      "Correlative pairs like both and, either or and neither nor tie ideas together more firmly, as in Both birds and frogs need wetlands.",
      "When one idea explains another, a subordinating word like because turns two sentences into one complex sentence: Wetlands matter because they protect our drinking water."
    ]},

    { title: "The Poster, Fixed", s: [
      "Here's the opening of the poster after one careful pass with the checklist.",
      "",
      "[ex] What is a wetland?",
      "[ex] A wetland is land that is filled with water for part of the year, and it links dry land and open water.",
      "[ex] Wetlands take many forms, including marshes, swamps and bogs.",
      "[ex] What a valuable resource a wetland is!",
      "",
      "Nothing about wetlands changed, only the sentences did, and now a visitor can read the poster once and understand it.",
      "That's what this whole unit was for, because every rule in it exists so the reader gets exactly what the writer meant."
    ]}
  ],

  words: [
    ["Interrogative sentence", "A sentence that asks a question. It ends with a question mark.", 10],
    ["Exclamatory sentence", "A sentence that shows strong feeling. It ends with an exclamation point.", 11],
    ["Compound subject", "Two or more subjects joined by a conjunction that share the same verb.", 14],
    ["Sentence fragment", "A group of words missing a subject, a predicate or a complete thought.", 21],
    ["Run-on sentence", "Two or more sentences run together without the correct punctuation.", 22]
  ],

  vocabQuestions: [
    { q: "Which is an <i>interrogative sentence</i>?",
      choices: ["What a wetland!", "What is a wetland?", "Protect the wetlands.", "Wetlands take many forms."],
      right: 1, why: "It asks a question and ends with a question mark." },
    { q: "Which sentence has a <i>compound subject</i>?",
      choices: ["Wetlands take many forms.", "These areas absorb flood waters.", "Many birds and frogs need wetlands.", "Protect the wetlands."],
      right: 2, why: "Birds and frogs are two subjects sharing one verb, need." },
    { q: "Which is a <i>sentence fragment</i>?",
      choices: ["Including marshes, swamps and bogs.", "Wetlands take many forms.", "What is a wetland?", "Frogs need wetlands."],
      right: 0, why: "It leaves a question hanging, including them in what?" },
    { q: "Which is a <i>run-on sentence</i>?",
      choices: ["Wetlands take many forms.", "What a valuable resource a wetland is!", "Both birds and frogs need wetlands.", "A wetland is land that is filled with water, it links dry land and open water."],
      right: 3, why: "Two complete thoughts are joined by only a comma." }
  ],

  findsAt: 34,
  questions: [
    { q: "What end mark should “What is a wetland” have?", find: [2, 9, 10],
      hint: "Go back to Kinds of Sentences.",
      choices: ["A period", "A question mark", "An exclamation point", "A comma"], right: 1,
      why: "It asks something, so it's interrogative and needs a question mark." },
    { q: "What kind of sentence is “What a valuable resource a wetland is”?", find: [6, 11],
      hint: "Go back to Kinds of Sentences.",
      choices: ["Declarative", "Interrogative", "Imperative", "Exclamatory"], right: 3,
      why: "It shows strong feeling, so it's exclamatory and ends with an exclamation point." },
    { q: "In “Many birds and frogs need wetlands,” what is the complete subject?", find: [13, 14],
      hint: "Go back to Complete Subjects and Complete Predicates.",
      choices: ["need wetlands", "birds", "Many birds and frogs", "wetlands"], right: 2,
      why: "The complete subject is everything that tells who or what the sentence is about." },
    { q: "Why is “These areas protect our water and absorb flood waters” a compound predicate?", find: [15],
      hint: "Go back to Forming Compound Subjects and Predicates.",
      choices: [
        "It has two verbs, protect and absorb, for one subject.",
        "It has two subjects.",
        "It asks a question.",
        "It's a run-on."
      ], right: 0,
      why: "One subject, these areas, with two verbs joined by and." },
    { q: "What is the subject of “Here are some facts about wetlands”?", find: [18],
      hint: "Go back to Finding the Subject.",
      choices: ["Here", "are", "wetlands", "facts"], right: 3,
      why: "Here is never the subject. Ask what are, and the answer is facts." },
    { q: "Why is “Including marshes, swamps and bogs” a fragment?", find: [5, 21],
      hint: "Go back to Fragments and Run-ons.",
      choices: [
        "It's too long.",
        "It leaves a question hanging, including them in what?",
        "It has two subjects.",
        "It ends with a period."
      ], right: 1,
      why: "It isn't a complete thought, so it needs to be joined to the sentence before it." },
    { q: "Which conjunction shows a contrast?", find: [24],
      hint: "Go back to Conjunctions.",
      choices: ["and", "or", "but", "both"], right: 2,
      why: "But shows that the second idea pulls against the first." },
    { q: "Which of these is a complex sentence?", find: [26],
      hint: "Go back to Forming Compound and Complex Sentences.",
      choices: [
        "Wetlands matter because they protect our drinking water.",
        "Wetlands take many forms.",
        "Birds need wetlands, and frogs need them too.",
        "What is a wetland?"
      ], right: 0,
      why: "Because starts a subordinate clause joined to an independent one." }
  ],

  todo: { title: "What To Do Now", s: [
      "One poster needed almost every skill in the unit, and the questions below are that same poster, one skill at a time.",
      "{c} word cards at the top of the page, then {Q} questions about the lesson, then {v} more questions about those words, {T} questions in all.",
      "Every hint names a lesson, so a wrong answer isn't a dead end; it's an address.",
      "When you miss one, open the lesson it names, read the section it points to, and then come back and try again.",
      "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] },
};
