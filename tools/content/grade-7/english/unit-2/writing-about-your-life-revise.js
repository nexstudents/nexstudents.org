/* english/writing-about-your-life-revise
   Grade 7 · English · Unit 2 (Who Am I?), lesson 10. Built by tools/lessons.js.
   Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-10-11. Written on Sonnet to the /teach-plan block in
   `plan` below and given the /natural pass. Paul has not read it. Sources: Holt Elements
   of Literature, First Course, Writer's Workshop pp186 and Sentence Workshop p187 via the
   week 8-9 packet (paraphrased notes); the video noted in `video`, whose transcript was
   read for the teaching order only (nothing copied). The scripture (Habakkuk 2:2) is a
   suggestion, his call.

   This lesson has no long story. The model sentences are OURS, except one pair from
   Frederick Douglass, Narrative of the Life of Frederick Douglass (1845), Chapter VII,
   public domain (Project Gutenberg #23), which Kolten met in the previous lesson:
   "When I was sent of errands, I always took my book with me" is a time clause that
   comes first, with its comma. It is Douglass's wording exactly. The packet's Amy Tan
   sentences ("Fish Cheeks") are copyrighted and are not quoted; the lesson's own
   sentence stands in for the same pattern.

   ⚠️ The packet's proofreading notes, publishing tips and reflecting starters are left
   out. The six evaluation criteria and the time-and-place words are the book's,
   paraphrased. The questions are ours. */
'use strict';
module.exports = {
  id: "english/writing-about-your-life-revise",
  slug: "writing-about-your-life-revise",
  title: "Writing About Your Life: Revise",
  unit: "Literature · U2-L10",
  seq: { unit: 2, unitTitle: "Who Am I?", n: 10 },

  plan: {
    objective: "Revise a draft against six criteria, and combine choppy sentences with a time or place subordinate clause, using a comma when the clause comes first.",
    markers: [
      "BOOK (paraphrased), Holt Writer's Workshop p186: after a second draft, trade papers with a partner, then check your own paper against the evaluation criteria.",
      "BOOK (paraphrased), p186 criteria: a good autobiographical incident focuses on one incident, opens with something that grabs attention, includes enough background, tells events in a followable order, has descriptive details, and shows what the incident means to the writer.",
      "BOOK (paraphrased), p187 Sentence Workshop: a string of short choppy sentences can often be combined by turning some into subordinate clauses that begin with a time or place word (after, before, until, where, wherever, when, whenever, while), and a clause that comes first takes a comma.",
    ],
    method: "CHECK AGAINST THE SIX CRITERIA, THEN COMBINE. Read with the criteria in hand, mark what's missing, then find short sentences in a row and fold the less important one into the other as a clause that begins with a time or place word.",
    exampleOnly: [
      "The bike story and the soccer game are our own examples for the method. The student's own draft is the lesson.",
      "Only one pair of sentences is quoted from Douglass, to show the clause-first comma in real writing.",
    ],
    digitize: "Reading engine, no long story. One Watch It Worked that combines two choppy sentences step by step, questions that name the criterion and then label independent or subordinate on new sentences. Written: the student revises his draft from the last lesson.",
    unclear: "",
  },
  natural: "2026-10-11",
  findsAt: 34,

  sheet: { slug: "writing-about-your-life-revise-homework", subject: "english",
    note: "Do it on screen or print it. Your score shows here once you check it." },

  video: { id: "sAo6LbCUAQo", title: "Dependent and independent clauses", channel: "Khan Academy",
    why: "Two teachers on the difference between a clause that stands alone and one that can't, with examples of the words that make a clause lean on another. Worth a watch before the questions." },

  scripture: {
    ref: "Habakkuk 2:2",
    text: "Write the vision, and make it plain upon tables, that he may run that readeth it.",
  },

  shelf: { grades: [7], subject: "English",
    blurb: "A draft that reads like a robot, and how two small changes make it sound like a person. The six checks for your own story, and how to join short sentences.",
    contains: [
      "The six checks for a good autobiographical incident",
      "A worked example that joins two choppy sentences step by step",
      "Independent and subordinate clauses, and the comma rule",
      "Four vocabulary cards, each with a check question",
      "Your own draft revised, on paper",
    ] },
  eyebrow: ["English 7", "U2-L10", "Who Am I?"],
  dek: "Your first draft says what happened. The revision makes a stranger want to keep reading, and it starts with six questions and one small fix.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will learn to revise an autobiographical incident against six criteria, and to combine short choppy sentences by turning one into a subordinate clause that begins with a time or place word, with a comma when the clause comes first."
      ]},
      { h: "Key Concepts", p: [
        "A clause has a subject and a verb. An independent clause can stand alone as a sentence, and a subordinate clause can't, because it begins with a word that makes it lean on another clause.",
        "A subordinate clause on its own is a fragment. It has to be attached to an independent clause."
      ]},
      { h: "Where Students Get Stuck", p: [
        "Forgetting the comma when the clause comes first, as in 'When I got home I cried'.",
        "Leaving a subordinate clause alone, which makes a fragment. 'When I got home.' is not a sentence."
      ]},
      { h: "Teaching Suggestion", p: [
        "Have the student read his draft aloud and mark any place where he runs out of breath or stumbles. Those spots are where short sentences are most worth combining.",
        "The lesson quotes one pair of sentences from Frederick Douglass's Narrative (1845), which the student met in the previous lesson, to show the clause-first comma."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "A Draft That Sounds Like a Robot", s: [
      "Here's the start of a first draft in which every sentence is a few words long: I fell off, I got up, I was mad, I tried again, and I fell off again.",
      "Every word of it is true, and every sentence is short, so read aloud it sounds like a robot counting steps.",
      "The story is fine, and what's wrong is the way the sentences are stacked, one after another, with nothing joining them.",
      "How do you fix a draft like that without losing a single thing that happened?"
    ]},

    { title: "Revising Is Not Fixing Typos", s: [
      "To {{revise}} is to improve a draft after you've written it, by changing what doesn't work, and it's a different job from proofreading, which only fixes mistakes.",
      "Put your draft aside for a while first, because a paper you wrote an hour ago reads like your own head, and one you wrote yesterday reads a bit more like a stranger's.",
      "Then you check it two ways: you trade papers with a partner for a {{peer review}}, and you read it yourself against a list of six checks."
    ]},

    { title: "The Six Checks", s: [
      "A good autobiographical incident does six things, and you can hold your draft up to them one at a time.",
      "It focuses on a single incident, not a whole summer, and it opens in a way that grabs the reader's attention.",
      "It includes enough background that someone who wasn't there can follow, and it tells the events in an order the reader can follow.",
      "It has descriptive details that bring the scene to life, and, most important, it shows what the event meant to you.",
      "Mark each place where the answer is no, because those marks are your revision plan."
    ]},

    { title: "Asking a Partner", s: [
      "A partner sees what you can't, because you already know what you meant, and he only knows what's on the page.",
      "Ask him four questions: does the beginning grab me, is anything missing or unnecessary, where do I want more detail, and do I understand why this mattered to the writer.",
      "Take his answers as information, not criticism, and fix what you agree with."
    ]},

    { title: "Clauses That Stand and Clauses That Lean", s: [
      "Now for the fix for the robot paragraph, and it starts with a word you already half know: a clause is a group of words with a subject and a verb.",
      "An {{independent clause}} is one that can stand alone as a complete sentence, like I fell off.",
      "A {{subordinate clause}} has a subject and a verb too, but it begins with a word that makes it lean on another clause, so it can't stand alone, as in when I fell off.",
      "Read that second one again and you can feel it hanging in the air, because when I fell off what, and the answer has to come from an independent clause that it leans against.",
      "The words that start the time and place clauses are after, before, until, when, whenever, while, where and wherever."
    ]},

    { title: "Combining Two Short Sentences", s: [
      "You can fold one short sentence into another by turning it into a subordinate clause with one of those words.",
      "",
      "[walk] Combining the two choppy sentences, I found out my brother had signed me up for the race and I groaned.",
      "[step] Decide which sentence is the main action and which one tells when it happened, and here the groan is the main action and the finding out is the time. || MAIN: I groaned.   TIME: I found out my brother had signed me up for the race.",
      "[step] Put a time word at the front of the timing sentence, and that turns it into a subordinate clause. || When I found out my brother had signed me up for the race",
      "[step] Join it to the main action, and because the clause comes first, put a comma after it. || When I found out my brother had signed me up for the race, I groaned.",
      "[step] Read it aloud, and check that the clause isn't left alone to be a fragment. || One sentence, two clauses, and it sounds like a person",
      "",
      "The clause can come second too, as in I groaned when I found out my brother had signed me up for the race, and when it does you don't need a comma.",
      "Frederick Douglass used the clause-first pattern in the last lesson: when I was sent of errands, I always took my book with me, with his comma right where the rule says it goes."
    ]},

    { title: "Back to the Robot", s: [
      "Go back to the paragraph at the top, I fell off, I got up, I was mad, I tried again, I fell off again.",
      "Join the first two with a time word and you get after I fell off, I got up, and join the next two and you get because I was mad, I tried again, with the fix doing the work of the stacked sentences.",
      "Don't combine everything, though, because a few short sentences are good, especially at a moment of high drama, and the aim is variety, not one very long line.",
      "",
      "[verse] Habakkuk 2:2 says, “Write the vision, and make it plain upon tables, that he may run that readeth it.”",
      "",
      "That verse is about a message that has to be clear enough that a reader can run with it, and revising is how you make your own message plain.",
      "So the answer to the opening question is that you fix a robot draft by checking it against the six checks, and by folding the short sentences into one another with time and place words."
    ]}
  ],

  words: [
    ["Revise", "To improve a draft after it's written, by changing what doesn't work.", 4],
    ["Peer review", "When a partner reads your draft and tells you what works and what doesn't.", 6],
    ["Independent clause", "A group of words with a subject and a verb that can stand alone as a sentence.", 16],
    ["Subordinate clause", "A group of words with a subject and a verb that can't stand alone, because it begins with a word like when or after.", 17]
  ],

  vocabQuestions: [
    { q: "What does it mean to <i>revise</i> a draft?",
      choices: [
        "To improve it by changing what doesn't work",
        "To copy it out neatly",
        "To throw it away",
        "To read it only once"
      ],
      right: 0, why: "Revising is improving the draft." },
    { q: "What is a <i>peer review</i>?",
      choices: [
        "A review by the teacher only",
        "A partner reads your draft and tells you what works and what doesn't",
        "A test of spelling",
        "A grade on the final copy"
      ],
      right: 1, why: "A peer reads and responds." },
    { q: "What is an <i>independent clause</i>?",
      choices: [
        "A clause that begins with when",
        "A clause with no verb",
        "A group of words with a subject and a verb that can stand alone as a sentence",
        "A very long sentence"
      ],
      right: 2, why: "An independent clause can be a sentence by itself." },
    { q: "What is a <i>subordinate clause</i>?",
      choices: [
        "A clause with a subject and a verb that can't stand alone",
        "A clause that always comes last",
        "A clause with no subject",
        "A complete sentence"
      ],
      right: 0, why: "It leans on an independent clause." }
  ],

  questions: [
    { q: "Why does the robot paragraph sound like a robot?", find: [2],
      hint: "Read the first part of the lesson.",
      choices: [
        "The story isn't true.",
        "The sentences are all short and stacked with nothing joining them.",
        "There are too many commas.",
        "It has no verbs."
      ], right: 1,
      why: "It's the way the sentences are stacked, not the story." },

    { q: "What is the difference between revising and proofreading?", find: [4],
      hint: "Read Revising Is Not Fixing Typos.",
      choices: [
        "They are the same thing.",
        "Revising improves what doesn't work, and proofreading only fixes mistakes.",
        "Proofreading comes first.",
        "Revising is only for spelling."
      ], right: 1,
      why: "Revising changes the draft, and proofreading fixes errors." },

    { q: "Which of these is one of the six checks?", find: [10],
      hint: "Read The Six Checks.",
      choices: [
        "It shows what the incident meant to the writer.",
        "It is at least a page long.",
        "It uses big words.",
        "It has a rhyming title."
      ], right: 0,
      why: "Showing what the event meant is one of the six." },

    { q: "Which of these is the best question to ask a partner?", find: [13],
      hint: "Read Asking a Partner.",
      choices: [
        "Is my handwriting neat?",
        "Does the beginning grab you?",
        "How many pages is it?",
        "Did I use enough long words?"
      ], right: 1,
      why: "The beginning is one of the four questions." },

    { q: "Which word group is a subordinate clause?", find: [17],
      hint: "Which one can't stand alone as a sentence?",
      choices: [
        "I fell off.",
        "When I fell off",
        "I tried again.",
        "She groaned."
      ], right: 1,
      why: "'When' makes it lean on another clause." },

    { q: "Label this word group: 'Because we were late.' Independent or subordinate?", find: [19],
      hint: "Can it stand alone as a complete sentence?",
      choices: [
        "Independent, because it has a subject and a verb",
        "Subordinate, because 'because' makes it lean on another clause",
        "Independent, because it starts with a capital",
        "Neither"
      ], right: 1,
      why: "It begins with because, so it can't stand alone." },

    { q: "Label this word group: 'The dog barked at the mailman.' Independent or subordinate?", find: [16],
      hint: "Can it stand alone as a complete sentence?",
      choices: [
        "Subordinate, because it's about a dog",
        "Independent, because it can stand alone as a sentence",
        "Subordinate, because it's short",
        "Independent, because it has a comma"
      ], right: 1,
      why: "It has a subject and a verb and needs nothing else." },

    { q: "Combine these two sentences with a time word: 'We finished the game. We ate pizza.' Which is the best result?", find: [23],
      hint: "Put a time word at the front of the sentence that comes first, and use the comma rule.",
      choices: [
        "After we finished the game we ate pizza",
        "After we finished the game, we ate pizza.",
        "After we finished the game. We ate pizza.",
        "We finished the game, after we ate pizza."
      ], right: 1,
      why: "The clause comes first, so a comma follows it." },

    { q: "Which sentence has the comma in the right place?", find: [26],
      hint: "A comma follows a clause that comes first, and not one that comes second.",
      choices: [
        "She cried, when she heard the news.",
        "When she heard the news, she cried.",
        "When she heard the news she, cried.",
        "She cried when, she heard the news."
      ], right: 1,
      why: "The clause-first sentence takes the comma after the clause." }
  ],

  todo: { title: "What To Do Now", s: [
    "Take out your draft from the last lesson, a pencil, and a second sheet of paper.",
    "Start by working through the {c} word cards at the top of the page, {q} questions about the lesson, and {v} more questions about those words. {T} questions in all.",
    "Then trade drafts with someone at home and ask the four partner questions, or read your own draft aloud and mark every place you stumble.",
    "Check your draft against the six checks, marking every place where the answer is no, and find at least two spots with short sentences in a row and combine them with a time or place word.",
    "Last, copy the revised version out neatly on the second sheet, and if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] },
};
