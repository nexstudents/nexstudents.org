/* english/conjunctions
   Grade 7 · english · unit 1. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 THE PROSE IS A DRAFT, NOT PAUL'S VOICE. Written 2026-09-24 on Opus from
   Houghton Mifflin English Grade 7 pp48-50 (leaf n65-n67), read on the borrowed
   copy the same evening, then given the /natural pass.

   ⚠️ THE SENTENCES ARE MINE. The book's world is food around the world (Japan,
   Mexico, Italy) with a waiter's warm-up. This keeps the waiter and drops the
   world tour: one diner, one Friday night, one boy taking orders. Same idea
   the book's warm-up is after, that a small word changes the order.

   🚨 THE VERSE IS A WORKING CHOICE, NOT PAUL'S. Matthew 5:37 fits (say plainly
   what you mean, because small words carry it). Choosing the scripture is his
   → review queue. */
'use strict';
module.exports = {
  id: "english/conjunctions",
  slug: "conjunctions",
  title: "Conjunctions",
  unit: "The Sentence · U1-L7",
  seq: { unit: 1, unitTitle: "The Sentence", n: 7 },
  natural: "2026-09-24",

  plan: {
    objective: "Choose the conjunction that shows how two ideas relate (and adds, but contrasts, or offers a choice), and recognize conjunctions that come in pairs.",
    markers: [
      "QUOTED, Houghton Mifflin p48, warm-up: 'The waiter's first customer has ordered eggplant and ice cream. Using either, neither, nor, but, and or, make up three other possible variations of the eggplant and ice-cream order.'",
      "QUOTED, p48: 'The most common conjunctions are and, but, and or. These are called coordinating conjunctions. They connect words or groups of words that are equal in importance and perform the same function in a sentence.'",
      "QUOTED, chart, p48: 'and: joining or addition of similar ideas · but: contrast or difference between ideas · or: choice between ideas'",
      "QUOTED, p48: 'Some conjunctions are used in pairs. These pairs are called correlative conjunctions. Correlative conjunctions make an even stronger connection between ideas than a coordinating conjunction does.'",
      "QUOTED, Summing Up, p49: 'Conjunctions are used to connect words or groups of words.'",
    ],
    method: "SWAP THE CONJUNCTION, WATCH THE MEANING CHANGE. The book's warm-up and its chart both do the same thing: hold the words still and change only the connector, so the student sees that and, but and or each carry a different relationship. The pairs come last, as the same job done more firmly.",
    exampleOnly: [
      "Luis, his uncle's diner, the soup and the salad, the pie and the cake, Mrs. Hale - WORLD: one Friday night at a diner, mine",
      "Japan, Mexico, Italy, sushi, tortillas, Russo's flier - WORLD: the book's own examples, deliberately not reused",
    ],
    digitize: "The reading engine: story, panel frames from the [ex] lines, Part One questions pointing back into the story, Part Two vocabulary.",
    unclear: [],
  },

  shelf: { grades: [7], subject: "English",
    blurb: "One small word decides whether the cook makes one bowl or two. And, but, or, and the pairs that hold ideas together even tighter.",
    contains: [
      "Teacher Notes written for whoever is teaching it",
      "The lesson read aloud, one line at a time, highlighted as it goes",
      "A panel that shows each example sentence as you hear it",
      "Three vocabulary cards, each with a check question",
      "Eight questions on choosing and finding conjunctions",
    ] },
  eyebrow: ["English 7", "U1-L7", "The Sentence"],
  dek: "Soup and salad is two bowls. Soup or salad is one. The smallest words in a sentence can decide what actually happens.",

  scripture: {
    ref: "Matthew 5:37",
    text: "But let your communication be, Yea, yea; Nay, nay: for whatsoever is more than these cometh of evil.",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will know that conjunctions connect words or groups of words, will choose and, but or or by the relationship each shows, and will recognize correlative conjunctions, the ones that come in pairs."
      ]},
      { h: "Key Concepts", p: [
        "Coordinating conjunctions join things that are equal in importance and do the same job in the sentence. And adds a similar idea, but shows a contrast, and or offers a choice.",
        "Correlative conjunctions come in pairs, both and, either or, neither nor, whether or, and they make a firmer connection than one conjunction on its own."
      ]},
      { h: "Where Students Get Stuck", p: [
        "Using and for everything. Ask what the relationship actually is: are these two ideas adding up, pulling against each other, or offering a choice? The answer picks the word.",
        "Spotting only half of a correlative pair. Neither without nor, or either without or, is the tell that the student found one word of two."
      ]},
      { h: "Teaching Suggestion", p: [
        "Say one order three ways: soup and salad, soup or salad, soup but no salad. Ask what the cook puts on the tray each time. The student hears the meaning change before he has to name the rule."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "One Bowl or Two?", s: [
      "On Friday nights Luis helps at his uncle's diner, and his job is to write down the orders and carry the slips back to the kitchen.",
      "His first customer is Mrs. Hale, who orders the meatloaf and asks for the soup or the salad on the side.",
      "Luis is in a hurry, though, and on the slip he writes soup and salad.",
      "",
      "[ex] Meatloaf with the soup and the salad.",
      "",
      "Ten minutes later his uncle carries out two bowls, and Mrs. Hale looks at them like somebody has made a mistake, because somebody has.",
      "Luis changed one three-letter word, and the kitchen made a different dinner."
    ]},
    { title: "Words That Connect", s: [
      "The word Luis got wrong is a conjunction, a word that connects other words or groups of words.",
      "The three you use most are and, but and or, and they're called coordinating conjunctions.",
      "They join things that are equal in importance and do the same job in the sentence, whether that's two words or two whole sentences.",
      "",
      "[ex] Pancakes and sausage come with every breakfast.",
      "",
      "There the conjunction joins two words, pancakes and sausage, which share the same job as the subject, but it can join two complete thoughts just as easily.",
      "",
      "[ex] Mrs. Hale finished the meatloaf, but she sent the second bowl back.",
      "",
      "Each half of that one could stand as a sentence on its own, and the but tells you how they relate."
    ]},
    { title: "Each One Means Something Different", s: [
      "You can't swap these three freely, because each one tells the reader how the ideas relate.",
      "And adds one idea to a similar one, but shows a contrast between them, and or offers a choice.",
      "Keep the first half of a sentence the same, change only the conjunction, and watch what happens to the meaning.",
      "",
      "[ex] The pie is warm, and the coffee is fresh.",
      "[ex] The pie is warm, but the coffee is cold.",
      "[ex] You can have the pie, or you can have the cake.",
      "",
      "In the first sentence both halves are good news, so they add together.",
      "In the second the coffee pulls against the pie, and but is the word that warns you it's coming.",
      "The third is a choice, which is exactly what Mrs. Hale had asked for and exactly what Luis didn't write down."
    ]},
    { title: "Conjunctions That Come in Pairs", s: [
      "Some conjunctions work as a team of two, and they're called correlative conjunctions.",
      "The common pairs are both and, either or, neither nor, and whether or, and they tie two ideas together more firmly than one word can.",
      "",
      "[ex] Both the cook and the waitress stayed until closing.",
      "[ex] You can have either soup or salad with the meatloaf.",
      "[ex] By nine o'clock neither the pie nor the cake was left.",
      "",
      "When you spot the first word of a pair, look ahead for its partner, because they always come together.",
      "Finding neither without nor is the tell that you've found only half of it."
    ]},
    { title: "Say What You Mean", s: [
      "When Luis tore up the slip and wrote a new one, the fix took two small words.",
      "",
      "[ex] Meatloaf with either the soup or the salad.",
      "",
      "Now there was no way for the kitchen to get it wrong, because either and or together say one of these and not both.",
      "",
      "[verse] Matthew 5:37 says, “But let your communication be, Yea, yea; Nay, nay: for whatsoever is more than these cometh of evil.”",
      "",
      "Jesus is talking there about honest speech, about saying yes when you mean yes, and not about grammar.",
      "But it's the same habit on a smaller scale: the little words are where your meaning lives, so choose the one that says exactly what you mean."
    ]}
  ],

  visuals: [
    { when: "Meatloaf with the soup and the salad.",
      kind: "The Wrong Word", body: "Meatloaf with the soup and the salad", mark: ".",
      note: "And adds, so the kitchen made both. She wanted one." },
    { when: "The pie is warm, but the coffee is cold.",
      kind: "But: A Contrast", body: "The pie is warm, but the coffee is cold", mark: ".",
      note: "The second half pulls against the first." },
    { when: "You can have the pie, or you can have the cake.",
      kind: "Or: A Choice", body: "You can have the pie, or you can have the cake", mark: ".",
      note: "One or the other, not both." },
    { when: "By nine o'clock neither the pie nor the cake was left.",
      kind: "A Pair: Neither, Nor", body: "By nine o'clock neither the pie nor the cake was left", mark: ".",
      note: "Find neither, then look ahead for nor." },
    { when: "Meatloaf with either the soup or the salad.",
      kind: "The Fix", body: "Meatloaf with either the soup or the salad", mark: ".",
      note: "Either and or together mean one of the two." }
  ],

  words: [
    ["Conjunction", "A word that connects other words or groups of words.", 6],
    ["Coordinating conjunction", "And, but or or, joining things that are equal in importance and do the same job.", 7],
    ["Correlative conjunctions", "Conjunctions that work in pairs, like both and, either or, neither nor.", 22]
  ],

  vocabQuestions: [
    { q: "What is a <i>conjunction</i>?",
      choices: ["A word that names a person or place.", "A word that connects other words or groups of words.", "A word that describes a noun.", "The last word in a sentence."],
      right: 1, why: "A conjunction connects words or groups of words." },
    { q: "Which word is a <i>coordinating conjunction</i>?",
      choices: ["diner", "quickly", "but", "neither"],
      right: 2, why: "And, but and or are the coordinating conjunctions. Neither only works as half of a pair." },
    { q: "Which of these are <i>correlative conjunctions</i>?",
      choices: ["neither and nor", "pie and cake", "warm and cold", "and and but"],
      right: 0, why: "Correlative conjunctions come in pairs, and neither always travels with nor." }
  ],

  findsAt: 35,
  questions: [
    { q: "Why did the kitchen make two bowls for Mrs. Hale?", find: [1, 2, 3, 4],
      hint: "Read the One Bowl or Two? section again.",
      choices: [
        "She changed her mind.",
        "The cook misread the slip.",
        "Luis wrote and, which adds, instead of or, which offers a choice.",
        "The soup came with the salad anyway."
      ], right: 2,
      why: "And adds one thing to another, so the kitchen made both. Or would have meant one." },
    { q: "What does a conjunction do?", find: [6],
      hint: "Read the Words That Connect section again.",
      choices: [
        "It names a person, place or thing.",
        "It connects words or groups of words.",
        "It ends a sentence.",
        "It describes an action."
      ], right: 1,
      why: "A conjunction connects words or groups of words." },
    { q: "Which conjunction shows a contrast?", find: [14, 17, 20],
      hint: "Read the Each One Means Something Different section again.",
      choices: ["and", "or", "but", "both"], right: 2,
      why: "But shows that the second idea pulls against the first." },
    { q: "Which conjunction offers a choice?", find: [14, 18, 21],
      hint: "Read the Each One Means Something Different section again.",
      choices: ["or", "and", "but", "nor"], right: 0,
      why: "Or offers a choice between ideas." },
    { q: "Which word best fits? “The pie is warm, ___ the coffee is fresh.”", find: [16, 19],
      hint: "Are these two ideas adding up, pulling against each other, or a choice?",
      choices: ["but", "or", "nor", "and"], right: 3,
      why: "Both halves are good news, so they add together with and." },
    { q: "What are the correlative conjunctions in “By nine o'clock neither the pie nor the cake was left”?", find: [26, 27],
      hint: "Find the first word of the pair, then look ahead for its partner.",
      choices: ["pie, cake", "neither, nor", "by, was", "nine, left"], right: 1,
      why: "Neither and nor are a pair, and they always come together." },
    { q: "What do coordinating conjunctions join?", find: [8, 9, 10, 11, 12],
      hint: "Read the Words That Connect section again.",
      choices: [
        "Only two words, never whole sentences.",
        "Only whole sentences, never single words.",
        "Words or groups of words that are equal in importance and do the same job.",
        "A noun to a verb."
      ], right: 2,
      why: "They join equal parts, whether that's two words or two complete thoughts." },
    { q: "What did Luis write on the new slip?", find: [30, 31],
      hint: "Read the Say What You Mean section again.",
      choices: [
        "Meatloaf with the soup and the salad.",
        "Meatloaf with either the soup or the salad.",
        "Meatloaf with neither soup nor salad.",
        "Meatloaf, but no soup."
      ], right: 1,
      why: "Either and or together say one of these and not both, which is what she asked for." }
  ],

  todo: { title: "What To Do Now", s: [
      "{c} word cards at the top of the page, then {Q} questions about the lesson, then {v} more questions about those words, {T} questions in all.",
      "When a question asks which conjunction fits, decide first whether the two ideas add up, pull against each other, or offer a choice.",
      "When it asks for a pair, find the first word and then look ahead for its partner.",
      "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper.",
      "If you get stuck, go back to the section the hint names and read it again."
  ] },
};
