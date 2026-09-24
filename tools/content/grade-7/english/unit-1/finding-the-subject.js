/* english/finding-the-subject
   Grade 7 · english · unit 1. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 REBUILT 2026-09-19 ON THE READING-LESSON ENGINE. The first version was drafted
   from the airfield lesson's worksheet template (Part A / Part B, a rule box), and
   Paul pointed at Writing Good Sentences as the shape he meant: a story with the
   examples set apart, a visual panel that follows the reading, Part One story
   questions, Part Two vocabulary, and the Lesson completed card with Print Answer
   Sheet and Retake. This file is that shape.

   🚨 THE PROSE IS A DRAFT, NOT PAUL'S VOICE. Built by Sonnet from Houghton Mifflin
   English Grade 7 pp45-47 (leaf n61-n63), then given the /natural pass. His prose is
   still the source → BEHAVIOR.md.

   ⚠️ THE SENTENCES ARE MINE. The book's bus, subway and Machmeter examples are not
   reused. One world, a morning at a lake.

   ⚠️ THE QUESTIONS ASK FOR AN IMPERATIVE'S SUBJECT AS A MEANING, NOT A WORD TO TAP.
   In "Grab the rope" the subject is you and it isn't written.

   🚨 THE VERSE IS A WORKING CHOICE, NOT PAUL'S. Proverbs 18:13 fits (hear the whole
   sentence before you answer). Choosing the scripture is his → review queue. */
'use strict';
module.exports = {
  id: "english/finding-the-subject",
  slug: "finding-the-subject",
  title: "Finding the Subject",
  unit: "The Sentence · U1-L6",
  seq: { unit: 1, unitTitle: "The Sentence", n: 6 },

  plan: {
    objective: "Find the simple subject of a sentence when it comes after the verb: in an inverted sentence, in a question, and in a sentence that begins with here or there. Know that the subject of a command is you.",
    markers: [
      "QUOTED, Houghton Mifflin p45: 'The sentences that you write are usually in natural English word order. The subject comes before the predicate. Sometimes, though, you write sentences in which the subject follows all or part of the predicate. This is called inverted order.'",
      "QUOTED, chart, Sentences in Inverted Order: inverted declarative sentence; declarative sentence beginning with here or there ('The subject is never here or there.'); interrogative sentence.",
      "QUOTED, p45: 'It may be easier to find the subject of a sentence in inverted order if you rearrange the sentence so that it is in natural order.'",
      "QUOTED, Tip, p46: 'Another way to find the subject is to find the verb first; then ask, Who or what did this?'",
      "QUOTED, p46: 'The subject of an imperative sentence is always you. Because you does not appear in the sentence, the subject is said to be understood.'",
    ],
    method: "REARRANGE IT. A hidden subject shows itself when you turn the sentence back into natural order, and finding the verb first and asking who or what did it is the second way in. The story does both on the same lake-side sentences, and every example gets its own frame in the panel.",
    exampleOnly: [
      "the lake, the dock, the canoe, the loon, the rope - WORLD: one morning at a lake, mine, replacing the book's bus and subway",
      "the Rosa Parks warm-up sentence and the Machmeter script - WORLD: the book's own examples, deliberately not reused",
    ],
    digitize: "The reading engine: story, panel frames from the [ex] lines plus a few written by hand, Part One questions that point back into the story, Part Two vocabulary.",
    unclear: [],
  },

  shelf: { grades: [7], subject: "English",
    blurb: "Most sentences say the subject first, and then a sentence turns around and hides it. Find it anyway.",
    contains: [
      "Teacher Notes written for whoever is teaching it",
      "The lesson read aloud, one line at a time, highlighted as it goes",
      "A panel that shows each example sentence as you hear it",
      "Three vocabulary cards, each with a check question",
      "Eight questions on finding a hidden subject",
    ] },
  eyebrow: ["English 7", "U1-L6", "The Sentence"],
  dek: "Most sentences say the subject first, and then some don't. Here is how to find it when it's hiding behind the verb.",
  scripture: {
    ref: "Proverbs 18:13",
    text: "He that answereth a matter before he heareth it, it is folly and shame unto him.",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will find the simple subject of a sentence even when it comes after the verb, in inverted declarative sentences, in questions, and in sentences that begin with here or there, and will know that the subject of a command is you."
      ]},
      { h: "Key Concepts", p: [
        "Most sentences put the subject before the verb, which is natural order. In inverted order the subject follows all or part of the predicate. The subject is still the one word the sentence is about, it has just moved behind the verb.",
        "Two ways in: turn the sentence back into natural order, or find the verb first and ask who or what did it. Here and there are never the subject. In a command the subject is you, and it is understood because it isn't written."
      ]},
      { h: "Where Students Get Stuck", p: [
        "Choosing here or there as the subject because it is the first word, or choosing the noun that sits right in front of the verb. In At the end of the dock sits an old green canoe, dock is the noun beside the verb and it only says where. Ask who or what does the sitting."
      ]},
      { h: "Teaching Suggestion", p: [
        "Have the student say each sentence back in natural order out loud. If turning it around sounds wrong, switch to the second way: find the verb, then ask who or what did it."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Where Did the Subject Go?", s: [
      "You already know how to find the subject of a sentence, and most of the time it's the first thing you meet.",
      "This lesson is about the sentences that don't play fair, the ones that turn around and hide it.",
      "We'll follow a morning at a lake to catch them, and you'll learn two ways to find a subject that's hiding."
    ]},
    { title: "The Normal Order", s: [
      "Start with a sentence that does play fair.",
      "",
      "[ex] The cabin door creaks open just before sunrise.",
      "",
      "The subject comes first, the verb comes after it, and that's called natural order.",
      "Your simple subject is door, and your verb is creaks, and you've found both without any trouble."
    ]},
    { title: "When a Sentence Turns Around", s: [
      "Sometimes a sentence turns that order around, so that the subject follows all or part of the predicate, and we call that inverted order.",
      "Here's one that's inverted.",
      "",
      "[ex] At the end of the dock sits an old green canoe.",
      "",
      "It starts with a place, and a place is almost never what a sentence is about.",
      "The word dock sits right in front of the verb, which makes it tempting, but it only tells you where.",
      "",
      "So turn the sentence around, and put the thing that sits at the front.",
      "",
      "[ex] An old green canoe sits at the end of the dock.",
      "",
      "Now it's in natural order, and the canoe is your simple subject, hiding behind the verb the whole time.",
      "",
      "There's a second way in too, which is the one to try when turning it around doesn't feel natural.",
      "Find the verb first, and then ask who or what did it.",
      "Here the verb is glides, so ask what glides, and you'll see it in the next sentence.",
      "",
      "[ex] Out on the lake glides a single loon.",
      "",
      "The thing that glides is the loon, so loon is your simple subject."
    ]},
    { title: "Here and There", s: [
      "Some sentences start with the words here or there, and they trick almost everybody at first.",
      "",
      "[ex] Here comes the first light of the morning.",
      "",
      "You might be tempted to say the subject is here, because it's the first word.",
      "But here and there are never the subject, because they only point at a place.",
      "So find the verb, comes, and ask what does the coming, and the answer is light.",
      "",
      "[ex] There are two paddles under the seat.",
      "",
      "It works the same way, since there only points, so ask what are under the seat, and you get paddles."
    ]},
    { title: "Questions Flip It Too", s: [
      "Questions nearly always flip the order, which is why they're the sentences most likely to hide their subject.",
      "",
      "[ex] Where is the rope?",
      "",
      "The trick is to say it back as a statement in your head.",
      "",
      "[ex] The rope is somewhere.",
      "",
      "Now the subject drops right out, because the rope is what the question is about, and where only asks about a place."
    ]},
    { title: "The Hidden You", s: [
      "One kind of sentence hides its subject so well that you can't see it at all.",
      "",
      "[ex] Grab the rope before the sun climbs over the hill.",
      "",
      "That's a command, and in a command the subject is always you.",
      "The word you isn't written, so we say the subject is understood, and everybody hears it anyway."
    ]},
    { title: "Do Not Answer Before You Hear", s: [
      "Finding a hidden subject may feel like a small skill, but it stops a very big mistake.",
      "If you reach for the first word, you'll give the wrong answer to a sentence you haven't finished reading.",
      "",
      "[verse] Proverbs 18:13 says, “He that answereth a matter before he heareth it, it is folly and shame unto him.”",
      "",
      "Read to the end of the sentence, find the verb, and then decide who or what it's about.",
      "That's a habit that will serve you long after you've forgotten the word inverted."
    ]}
  ],

  /* 🚨 THE EXPLAINER. Written by hand for every example so each frame names what it
     shows: natural order, turned around, the verb first, the pointing words, and the
     understood you drawn as a ghost. */
  visuals: [
    { when: "The cabin door creaks open just before sunrise.",
      kind: "Natural Order", body: "The cabin door creaks open just before sunrise", mark: ".",
      note: "The subject, door, comes before the verb, creaks." },
    { when: "At the end of the dock sits an old green canoe.",
      kind: "Inverted Order", body: "At the end of the dock sits an old green canoe", mark: ".",
      note: "It starts with a place, and the canoe is hiding behind the verb, sits." },
    { when: "An old green canoe sits at the end of the dock.",
      kind: "Turned Around", body: "An old green canoe sits at the end of the dock", mark: ".",
      note: "Now the subject, canoe, comes first, so it's easy to see." },
    { when: "Out on the lake glides a single loon.",
      kind: "Find The Verb First", body: "Out on the lake glides a single loon", mark: ".",
      note: "The verb is glides. What glides? The loon." },
    { when: "Here comes the first light of the morning.",
      kind: "Here Is Never The Subject", body: "Here comes the first light of the morning", mark: ".",
      note: "Here only points. What does the coming? The light." },
    { when: "There are two paddles under the seat.",
      kind: "There Is Never The Subject", body: "There are two paddles under the seat", mark: ".",
      note: "There only points. What are under the seat? The paddles." },
    { when: "Where is the rope?",
      kind: "A Question", body: "Where is the rope", mark: "?",
      note: "Questions flip the order, so say it back as a statement." },
    { when: "The rope is somewhere.",
      kind: "Said Back As A Statement", body: "The rope is somewhere", mark: ".",
      note: "Now the subject, rope, comes first." },
    { when: "Grab the rope before the sun climbs over the hill.",
      kind: "The Understood Subject", ghost: "(You)", body: "Grab the rope before the sun climbs over the hill", mark: ".",
      note: "Nobody writes the word you. Everybody hears it." }
  ],

  words: [
    ["Inverted order", "A sentence in inverted order has its subject after all or part of the predicate.", 7],
    ["Simple subject", "The one main word that the sentence is about.", 6],
    ["Understood subject", "The subject you in a command, which is not written but is always meant.", 35]
  ],

  vocabQuestions: [
    { q: "Which sentence is in <i>inverted order</i>?",
      choices: ["The canoe sits at the end of the dock.", "At the end of the dock sits the canoe.", "The loon glides on the lake.", "The door creaks open."],
      right: 1, why: "In inverted order the subject follows all or part of the predicate." },
    { q: "What is the <i>simple subject</i> of “The cabin door creaks open just before sunrise”?",
      choices: ["sunrise", "creaks", "door", "open"],
      right: 2, why: "Door is the one main word the sentence is about." },
    { q: "What is the <i>understood subject</i> in “Grab the rope”?",
      choices: ["rope", "you", "grab", "there"],
      right: 1, why: "The subject of a command is you, and it is understood because it isn't written." }
  ],

  findsAt: 41,
  questions: [
    { q: "What is the simple subject of “At the end of the dock sits an old green canoe”?", find: [9, 14],
      hint: "Read the When a Sentence Turns Around section again.",
      choices: ["dock", "end", "sits", "canoe"], right: 3,
      why: "Dock only says where. Ask what sits, and the answer is the canoe." },
    { q: "What is the simple subject of “Here comes the first light of the morning”?", find: [21, 24],
      hint: "Read the Here and There section again.",
      choices: ["Here", "comes", "light", "morning"], right: 2,
      why: "Here is never the subject. Ask what does the coming, and it's the light." },
    { q: "What is the simple subject of “There are two paddles under the seat”?", find: [25, 26],
      hint: "Read the Here and There section again.",
      choices: ["There", "paddles", "seat", "are"], right: 1,
      why: "There only points at a place. What are under the seat? The paddles." },
    { q: "What is the simple subject of “Where is the rope”?", find: [28, 31],
      hint: "Read the Questions Flip It Too section again.",
      choices: ["Where", "is", "rope", "the"], right: 2,
      why: "Say it back as a statement, the rope is somewhere, and the subject is rope." },
    { q: "What is the simple subject of “Out on the lake glides a single loon”?", find: [18, 19],
      hint: "Find the verb first, then ask who or what did it.",
      choices: ["lake", "glides", "single", "loon"], right: 3,
      why: "The verb is glides, and the thing that glides is the loon." },
    { q: "What is the first way the lesson gives you to find a hidden subject?", find: [12, 13],
      hint: "Read the When a Sentence Turns Around section again.",
      choices: [
        "Turn the sentence back into natural order.",
        "Always pick the first noun.",
        "Delete the verb.",
        "Read it faster."
      ], right: 0,
      why: "Turning it around puts the subject before the verb, where it's easy to see." },
    { q: "What is the second way to find a hidden subject?", find: [15, 16],
      hint: "Read the same section again for the way to try when turning it around doesn't feel natural.",
      choices: [
        "Find the verb first, then ask who or what did it.",
        "Look for the longest word.",
        "Count the words in the sentence.",
        "Look for the word here."
      ], right: 0,
      why: "Finding the verb first, and asking who or what did it, works when turning it around doesn't." },
    { q: "In “Grab the rope before the sun climbs over the hill,” what is the subject?", find: [34, 35],
      hint: "Read The Hidden You section again.",
      choices: ["rope", "sun", "you, understood", "hill"], right: 2,
      why: "In a command the subject is always you, and it is understood because it isn't written." }
  ],

  todo: { title: "What To Do Now", s: [
      "{c} word cards at the top of the page, then {Q} questions about the lesson, then {v} more questions about those words. {T} questions in all.",
      "When a sentence looks strange, turn it around and put the subject first, or find the verb and ask who or what does it.",
      "Remember that here and there are never the subject, and that in a command the subject is you.",
      "Tap each card to see what it means, then answer the word questions at the bottom of the page.",
      "If you get stuck, go back to the section with that name and read its first line again.",
      "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] },
};
