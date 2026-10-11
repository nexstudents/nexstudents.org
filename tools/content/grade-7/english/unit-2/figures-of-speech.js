/* english/figures-of-speech
   Grade 7 · English · Unit 2 (Who Am I?), lesson 7. Built by tools/lessons.js.
   Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-10-11. Written on Sonnet to the /teach-plan block in
   `plan` below and given the /natural pass. Paul has not read it. Sources: Holt Elements
   of Literature, First Course, pp168-171 via the week 8-9 packet (paraphrased notes); the
   video noted in `video`, whose transcript was read for the teaching order only (nothing
   copied).

   The STORY is Emily Dickinson's "I'm Nobody! Who are you?", the full eight lines,
   public domain (published 1891 in Poems, Second Series; text from Project Gutenberg
   #12242). It is Dickinson's wording with these changes only: "there 's" and "They 'd"
   closed up to "there's" and "They'd", and her dash after "don't tell" made a comma. No
   British spellings occur. This is the poem Holt itself uses, so there is no swap.

   ⚠️ Added from the record: Dickinson (1830 to 1886) lived in Amherst, Massachusetts, and
   only a handful of her poems were printed in her lifetime. One line before the poem.

   ⚠️ SCOPE: simile and metaphor are the lesson. Personification and hyperbole are named
   in one short paragraph as extras, because the video teaches them; the poem has neither.
   The questions are ours. The fame Quickwrite, the letter to the poet and the book-cover
   art task are left out. */
'use strict';
module.exports = {
  id: "english/figures-of-speech",
  slug: "figures-of-speech",
  title: "Figures of Speech",
  unit: "Literature · U2-L7",
  seq: { unit: 2, unitTitle: "Who Am I?", n: 7 },

  plan: {
    objective: "Tell a simile from a metaphor, explain what each compares, and say what the comparison does in a poem.",
    markers: [
      "BOOK (paraphrased), Holt Elements of Literature p168: a figure of speech describes one thing in terms of something very different, and the comparison is imaginative, not literally true.",
      "BOOK (paraphrased), p168: a simile compares two unlike things using a word such as like or as, and a metaphor says one thing is another with no like or as.",
      "BOOK (paraphrased), p169 margin questions: the Somebody compared to a frog is a simile, and the admirers called a bog is a metaphor.",
    ],
    method: "FIND THE TWO THINGS BEING COMPARED, LOOK FOR LIKE OR AS, THEN NAME IT. If the comparison uses like or as it's a simile, and if one thing simply is the other it's a metaphor. Then ask what the comparison makes you feel.",
    exampleOnly: [
      "The puppy like a rocket and the classroom that's a zoo are our own examples for the method. The frog and the bog are Dickinson's, and the skill is the lesson, not the frog.",
      "Personification and hyperbole are named as extras only, because the video teaches them.",
    ],
    digitize: "Reading engine on the full Dickinson poem, two Watch It Worked walkthroughs (the frog line, the bog line), questions that name the two things compared and then classify new lines he hasn't seen. Written: one simile and one metaphor of his own about the same thing.",
    unclear: "",
  },
  natural: "2026-10-11",
  findsAt: 51,

  video: { id: "NegoYIuXoEA", title: "Metaphor, Simile, Personification, Hyperbole", channel: "Mineola Creative Content",
    why: "A quick tour of the same figures with different examples, including the two extras this lesson only mentions. Worth a watch after the walkthroughs." },

  shelf: { grades: [7], subject: "English",
    blurb: "A poet says it's dreary to be somebody, and compares fame to a frog. Simile, metaphor, and how to tell them apart.",
    contains: [
      "Emily Dickinson's I'm Nobody, the whole poem, read aloud one line at a time",
      "Two worked examples that classify a comparison step by step",
      "Four vocabulary cards, each with a check question",
      "Questions on the poem and on lines you haven't seen",
      "A simile and a metaphor of your own, on paper",
    ] },
  eyebrow: ["English 7", "U2-L7", "Who Am I?"],
  dek: "Nobody has ever been a tornado in the kitchen, and you still know exactly what that means. Here's how a writer makes a comparison do the work of a paragraph.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will learn that a figure of speech describes one thing as another very different thing, tell a simile (uses like or as) from a metaphor (says one thing is another), and explain what the comparisons in Emily Dickinson's 'I'm Nobody!' do."
      ]},
      { h: "Key Concepts", p: [
        "A figure of speech is never literally true, and that's the point. A good one is surprising and still fits.",
        "The difference between a simile and a metaphor is only whether the comparison uses like or as. The thing being compared is the same either way."
      ]},
      { h: "Where Students Get Stuck", p: [
        "Calling any comparison a simile because it sounds like one. The test is the word like or as, so look for it.",
        "Stopping at the name. Saying 'it's a simile' isn't an answer until he says what the two things have in common."
      ]},
      { h: "Teaching Suggestion", p: [
        "Have the student make up one simile and one metaphor about the same thing, like his dog or a rainy day, and read them aloud. The written task at the end is the same exercise on paper.",
        "Emily Dickinson lived from 1830 to 1886 in Amherst, Massachusetts, and only a handful of her poems were printed while she was alive. The lesson says this in one line before the poem, and it's added from the historical record."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "A Tornado in the Kitchen", s: [
      "Your friend says his little sister is a tornado in the kitchen, and nobody picks up the phone to call the weather service.",
      "You know exactly what he means: flour everywhere, cups on the floor, and a small person moving through it all very fast.",
      "He said something that isn't true and managed to say it more clearly than the truth would have.",
      "How does a writer say something false and make it feel more true than the plain version?"
    ]},

    { title: "Saying It Another Way", s: [
      "When you mean exactly what the words say, you're speaking {{literally}}, as in the kitchen is a mess.",
      "A {{figure of speech}} does the opposite, because it describes one thing in terms of something very different from it, so the words aren't literally true but the picture is.",
      "Poets love them, and so do comedians and sports announcers, because one good comparison can do the work of a whole paragraph.",
      "There are two figures you need to be able to tell apart, and the difference between them is a single small word."
    ]},

    { title: "Simile: Using Like or As", s: [
      "A {{simile}} compares two different things by using the word like or the word as.",
      "",
      "[ex] The new puppy ran across the yard like a rocket.",
      "",
      "A puppy and a rocket are very different things, but they share one quality, speed, and the word like is what announces the comparison.",
      "Because the little word is sitting right there in the sentence, a simile is the easy one to spot."
    ]},

    { title: "Metaphor: Saying It Is", s: [
      "A {{metaphor}} makes the same kind of comparison, but it skips the little word and simply says that one thing is the other.",
      "",
      "[ex] The classroom was a zoo before the bell rang.",
      "",
      "The room isn't really a zoo, and nobody thinks it is, but you understand at once that it was loud, crowded and a little wild.",
      "A metaphor only works if the two things have something in common that the reader can find, because a classroom that was a celery stalk would leave you wondering why."
    ]},

    { title: "Telling Them Apart", s: [
      "When you meet a figure of speech, go through three quick moves, and they work on every one you'll ever read.",
      "First find the two things being compared, then look for the word like or as between them, and then name it, a simile if the word is there and a metaphor if it isn't.",
      "Writers have a few more figures, and two worth knowing by name are personification, which gives human feelings to something that isn't human, and hyperbole, which stretches the truth on purpose, as in I've told you a million times.",
      "This lesson is about the first two, so keep personification and hyperbole in your back pocket for later."
    ]},

    { title: "A Poet Who Stayed Home", s: [
      "Emily Dickinson lived from 1830 to 1886 in Amherst, Massachusetts, and she wrote about seventeen hundred poems, though only a handful were printed while she was alive.",
      "Many of her poems are short and plain on the surface, and she uses comparisons to say things that would take pages in a plain sentence.",
      "In this one the speaker says she's a Nobody, and she's whispering to someone she hopes is a Nobody too.",
      "As you read the second part, watch for two comparisons about what it's like to be a Somebody."
    ]},

    { title: "I'm Nobody! Who are you?", s: [
      "[story] I'm nobody!",
      "Who are you?",
      "Are you nobody, too?",
      "Then there's a pair of us, don't tell!",
      "They'd banish us, you know.",
      "",
      "[story] How dreary to be somebody!",
      "How public, like a frog",
      "To tell your name the livelong day",
      "To an admiring bog!"
    ]},

    { title: "The Frog Line", s: [
      "The poem has one of each, and the first is the frog, so take the three moves one at a time.",
      "",
      "[walk] Is the frog line a simile or a metaphor?",
      "[step] Find the two things being compared: being a public Somebody on one side, and a frog on the other. || Somebody  <->  frog",
      "[step] Look between them for the word like or as, and there it is in the line. || \"How public, like a frog\"  ->  the word LIKE",
      "[step] A comparison with like in it is a simile, so name it. || SIMILE",
      "[step] Then ask what the two have in common, and picture a frog croaking its own name to anyone who'll listen, loud and puffed up and not very interesting. || a Somebody is as noisy about himself as a frog",
      "",
      "Notice that the comparison isn't flattering, and that's the poet telling you, without saying so, what she thinks of being famous."
    ]},

    { title: "The Bog Line", s: [
      "Now the last line, which makes a second comparison, and you can use the same three moves.",
      "",
      "[walk] Is the bog line a simile or a metaphor?",
      "[step] Find the two things being compared: the people who admire the Somebody, and a bog, which is a wet, muddy patch of ground. || admirers  <->  a bog",
      "[step] Look for like or as, and this time there's neither one, because she just calls them \"an admiring bog.\" || \"To an admiring bog!\"  ->  no like, no as",
      "[step] A comparison with no like or as is a metaphor, so name it. || METAPHOR",
      "[step] Then ask what they have in common, and a bog is low, soggy and quiet, so the audience for all that croaking is a mud puddle. || her opinion of the people who clap",
      "",
      "Put the two together and the picture is a loud frog on a log, shouting its name at a swamp that applauds, which is her way of saying that it's dreary to be somebody."
    ]},

    { title: "Why a Frog?", s: [
      "Go back to the question: how does a writer say something false and make it feel more true than the plain version?",
      "Dickinson could have written that fame is boring and that fans aren't worth much, and you'd have nodded and forgotten it, but you won't forget the frog.",
      "The comparison hands you a picture, the picture hands you a feeling, and the feeling is what she wanted you to carry away.",
      "So when you read a figure of speech, don't stop at its name, because the name is only half of the job, and the other half is saying what the comparison makes you see."
    ]}
  ],

  words: [
    ["Figure of speech", "A word or phrase that describes one thing in terms of something very different, so it isn't literally true.", 5],
    ["Simile", "A comparison of two different things that uses the word like or as.", 8],
    ["Metaphor", "A comparison that says one thing is another, with no like or as.", 12],
    ["Literally", "Meaning exactly what the words say, with nothing figured.", 4]
  ],

  vocabQuestions: [
    { q: "What is a <i>figure of speech</i>?",
      choices: [
        "A number written in words",
        "A phrase that describes one thing in terms of something very different",
        "A sentence with no verb",
        "A famous speaker"
      ],
      right: 1, why: "It compares in an imaginative way, not a literal one." },
    { q: "What is a <i>simile</i>?",
      choices: [
        "A comparison that uses like or as",
        "A comparison with no like or as",
        "A word that rhymes",
        "A very long sentence"
      ],
      right: 0, why: "A simile uses like or as." },
    { q: "What is a <i>metaphor</i>?",
      choices: [
        "A comparison that uses like or as",
        "A word that sounds like what it means",
        "A comparison that says one thing is another",
        "A made-up word"
      ],
      right: 2, why: "A metaphor says one thing is another." },
    { q: "What does <i>literally</i> mean?",
      choices: [
        "Exactly as the words say",
        "In a poem",
        "Very loudly",
        "Like a simile"
      ],
      right: 0, why: "Literally means just what the words say." }
  ],

  questions: [
    { q: "What does the word 'tornado' do in 'his sister is a tornado in the kitchen'?", find: [0],
      hint: "Read A Tornado in the Kitchen.",
      choices: [
        "It tells you there was real bad weather.",
        "It compares a small person to a storm, so you see her speed and mess.",
        "It gives the sister's name.",
        "It tells you which kitchen it was."
      ], right: 1,
      why: "The comparison paints a quick picture." },

    { q: "What is the one small difference between a simile and a metaphor?", find: [7],
      hint: "Read Saying It Another Way.",
      choices: [
        "A simile is longer.",
        "A simile uses like or as, and a metaphor doesn't.",
        "A metaphor always rhymes.",
        "A simile is only used in poems."
      ], right: 1,
      why: "Like or as is the whole difference." },

    { q: "In 'The new puppy ran across the yard like a rocket,' what two things are compared?", find: [10],
      hint: "Read Simile: Using Like or As.",
      choices: ["A yard and a rocket", "A puppy and a rocket", "A puppy and a yard", "A rocket and a day"], right: 1,
      why: "The puppy is compared to a rocket, and speed is what they share." },

    { q: "In the poem, 'How public, like a frog' is a...", find: [30],
      hint: "Look for the word like or as.",
      choices: ["Metaphor", "Simile", "Rhyme", "Question"], right: 1,
      why: "It has the word like, so it's a simile." },

    { q: "In the poem, 'an admiring bog' is a...", find: [32],
      hint: "Look for the word like or as.",
      choices: ["Simile", "Question", "Metaphor", "Rhyme"], right: 2,
      why: "It names the admirers a bog with no like or as, so it's a metaphor." },

    { q: "What does the frog suggest about what the poet thinks of being a Somebody?", find: [39],
      hint: "Picture a frog croaking its own name.",
      choices: [
        "That fame is loud and a little silly.",
        "That fame is the best thing in the world.",
        "That frogs are rich.",
        "That fame is quiet and shy."
      ], right: 0,
      why: "A Somebody is as noisy about himself as a frog." },

    { q: "Here is a line you haven't seen: 'The snow was a white blanket over the town.' Is it a simile or a metaphor?", find: [17],
      hint: "Look for like or as.",
      choices: [
        "A simile, because it compares snow and a blanket.",
        "A metaphor, because it says the snow was a blanket with no like or as.",
        "Neither, because it's literally true.",
        "A simile, because it mentions snow."
      ], right: 1,
      why: "No like or as, so it's a metaphor." },

    { q: "Here is another new line: 'She was as quiet as a mouse in the library.' Is it a simile or a metaphor?", find: [17],
      hint: "Look for like or as.",
      choices: [
        "A metaphor, because mice are quiet.",
        "A metaphor, because it describes a person.",
        "A simile, because it uses as to compare her to a mouse.",
        "Neither, because it's literally true."
      ], right: 2,
      why: "It uses as, so it's a simile." },

    { q: "Here is one more new line: 'Time is a thief that steals the afternoon.' What is it, and what does it suggest about time?", find: [17],
      hint: "Find the two things, then look for like or as.",
      choices: [
        "A simile, and it suggests time is slow.",
        "A metaphor, and it suggests time takes things away without asking.",
        "A simile, and it suggests time is fair.",
        "A metaphor, and it suggests time is a robber who lives nearby."
      ], right: 1,
      why: "Time is called a thief with no like or as, so it's a metaphor." }
  ],

  todo: { title: "What To Do Now", s: [
    "Before you start, pick something near you, like your dog, a rainy day or your bedroom, and keep it in mind for the end.",
    "Then work through the {c} word cards at the top of the page, {q} questions about the poem, and {v} more questions about those words. {T} questions in all.",
    "When you're finished, write two sentences on paper about the thing you picked: one simile that uses like or as, and one metaphor that says it simply is something else.",
    "If you get stuck on a question, tap Find It in the Story and read the line the page shows you.",
    "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] },
};
