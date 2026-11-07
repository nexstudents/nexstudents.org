/* english/unit-2-review-autobiography-and-nonfiction
   Grade 7 · English · Unit 2 (Who Am I?), lesson 11. Built by tools/lessons.js.
   Edit the lesson here, not in the registry.

   🚨 THE REVIEW IS A TEST, built like the Unit 1 review. A short new public-domain passage,
   then fourteen questions across the seven skills of the unit (fact and opinion, kinds of
   nonfiction, comparing and contrasting, description and word choice, stated and implied
   main idea, setting and sensory details, figures of speech), two for each. The hints only
   point back into the passage, and the page carries no teaching beyond a short opening.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-11-07. The opening, the Teacher Notes, the questions and
   the scripture choice are Claude's, written to the /teach-plan block in `plan` below and
   given the /natural pass. Paul has not read them.
   ⚠️ NO VERSE IS PRINTED ON THE PAGE, as in the Unit 1 review. The suggestion (Proverbs 25:11,
   "A word fitly spoken is like apples of gold in pictures of silver") is in `scripture`
   below. It is a working choice, Paul's call whether to add it.

   The PASSAGE is John Muir's "The Story of My Boyhood and Youth" (1913), Chapter 1,
   "Boyhood in Scotland", Project Gutenberg #18359 (verified: the title page reads "The Story
   of My Boyhood and Youth" by John Muir). It is his words exactly, three paragraphs
   from the chapter, split to one sentence per entry, with one change only: one em dash
   ("sound,—a mother field mouse") turned into a comma. The paragraphs between are left
   out, and nothing else is changed. Kolten has not met it. It is a fresh autobiography
   passage, so every skill from Unit 2 can be asked of it. The ten Unit 2 lessons were
   read for their terms (the stories there are Franklin, Keller, Antin, Twain, London,
   Washington, Dickinson and others); none of their text is reused here.

   ⚠️ ADDED FROM THE RECORD: nothing historical. The opening says the writer grew up in
   Dunbar, Scotland, which his own first paragraph says. */
'use strict';
module.exports = {
  id: "english/unit-2-review-autobiography-and-nonfiction",
  slug: "unit-2-review-autobiography-and-nonfiction",
  title: "Unit 2 Review: Autobiography and Nonfiction",
  unit: "Literature · U2-L11",
  seq: { unit: 2, unitTitle: "Who Am I?", n: 11 },

  plan: {
    objective: "Show he can sort fact from opinion, name a kind of nonfiction, compare and contrast, judge description and word choice, find a stated or implied main idea, read setting and sensory details, and name a figure of speech.",
    markers: [
      "Ours (BEHAVIOR: every unit ends with a review, and the review is a test). The Holt scan did not capture the Collection 2 closing review page, so the questions follow the seven skills of the ten Unit 2 lessons already built.",
    ],
    method: "A short new public-domain autobiography passage, then fourteen questions across the seven skills, two each.",
    exampleOnly: [
      "John Muir's boyhood in Scotland. World: one new passage that Kolten has not read.",
    ],
    digitize: "Reading engine in test mode. No hints beyond pointing back to the passage.",
    unclear: [],
  },
  natural: "2026-11-07",
  findsAt: 21,

  shelf: { grades: [7], subject: "English",
    blurb: "One passage you haven't read, from a famous naturalist's boyhood, and fourteen questions on everything in the unit: fact and opinion, kinds of nonfiction, comparing, description, main idea, setting and figures of speech.",
    contains: [
      "Teacher Notes written for whoever is teaching it",
      "Three paragraphs from John Muir's autobiography, read aloud one line at a time",
      "Fourteen questions across the seven skills of the unit",
      "Four vocabulary cards for the unit's terms, each with a check question",
    ] },
  eyebrow: ["English 7", "U2-L11", "Who Am I?"],
  dek: "One new passage, fourteen questions, and everything you've learned in this unit.",
  scripture: {
    ref: "Proverbs 25:11",
    text: "A word fitly spoken is like apples of gold in pictures of silver.",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will read a passage from John Muir's boyhood that they haven't seen and answer fourteen questions covering the seven skills of Unit 2: fact and opinion, kinds of nonfiction, comparing and contrasting, description and word choice, stated and implied main idea, setting and sensory details, and figures of speech."
      ]},
      { h: "Key Concepts", p: [
        "Two questions cover each skill. The hints only point back to the part of the passage that answers the question, so the student has to bring the unit's terms with him.",
        "The passage is an autobiography in the first person. Its first paragraph states its own main idea in the first sentence, and the passage as a whole has an implied main idea."
      ]},
      { h: "Where Students Get Stuck", p: [
        "Calling a feeling a fact because the writer is sure of it. A fact can be proved true or false, and a feeling or judgment cannot.",
        "Mixing up a simile and a metaphor. A simile uses like or as, and a metaphor says one thing is another. If he misses the figure questions, reopen the figures of speech lesson."
      ]},
      { h: "Teaching Suggestion", p: [
        "Treat this as a test: no notes and no help during the questions, then go over the misses together afterward. Each miss maps to one lesson in the unit, so tell him which one to reopen."
      ]},
      { h: "Book Pages", p: [
        "The review has no book page of its own. The Holt scan did not capture the Collection 2 closing page, which begins around page 186 and 188 of Holt Elements of Literature, First Course (2000). Read free on archive.org: https://archive.org/details/elementsoflitera0000unse_i0h7/page/186/mode/1up"
      ]},
      { h: "Suggested Videos", videos: [
        { id: "Lf5Y3AgMf3c", title: "Core Concepts: How To Identify Central Ideas and Supporting Details in Nonfiction Texts", channel: "Miacademy & MiaPrep Learning Channel",
          why: "A review of finding the main idea and its supporting details in nonfiction." },
        { id: "SkI80m0gKTY", title: "Fact and Opinion", channel: "Laura Gokey",
          why: "A grade-seven-level review of telling fact from opinion." }
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Show What You Know", s: [
      "This review checks seven things you've picked up in the unit: telling fact from opinion, naming a kind of nonfiction, comparing and contrasting, judging description and word choice, finding a main idea, reading a setting and its sensory details, and spotting a figure of speech.",
      "You'll read three paragraphs you haven't seen before, from the autobiography of a man who grew up in Dunbar, Scotland, and then you'll answer fourteen questions, two for each of those skills, so every one of them gets a fair turn.",
      "Read it the way you've learned to, with your eyes open for what the writer says directly, what he only suggests, and what he makes you see and hear."
    ]},

    { title: "A Boy and Everything Wild", s: [
      "[story] When I was a boy in Scotland I was fond of everything that was wild, and all my life I’ve been growing fonder and fonder of wild places and wild creatures.",
      "Fortunately around my native town of Dunbar, by the stormy North Sea, there was no lack of wildness, though most of the land lay in smooth cultivation.",
      "With red-blooded playmates, wild as myself, I loved to wander in the fields to hear the birds sing, and along the seashore to gaze and wonder at the shells and seaweeds, eels and crabs in the pools among the rocks when the tide was low; and best of all to watch the waves in awful storms thundering on the black headlands and craggy ruins of the old Dunbar Castle when the sea and the sky, the waves and the clouds, were mingled together as one.",
      "We never thought of playing truant, but after I was five or six years old I ran away to the seashore or the fields almost every Saturday, and every day in the school vacations except Sundays, though solemnly warned that I must play at home in the garden and back yard, lest I should learn to think bad thoughts and say bad words.",
      "All in vain.",
      "In spite of the sure sore punishments that followed like shadows, the natural inherited wildness in our blood ran true on its glorious course as invincible and unstoppable as stars.",
    ]},

    { title: "Walks with Grandfather", s: [
      "[story] My earliest recollections of the country were gained on short walks with my grandfather when I was perhaps not over three years old.",
      "On one of these walks grandfather took me to Lord Lauderdale’s gardens, where I saw figs growing against a sunny wall and tasted some of them, and got as many apples to eat as I wished.",
      "On another memorable walk in a hay-field, when we sat down to rest on one of the haycocks I heard a sharp, prickly, stinging cry, and, jumping up eagerly, called grandfather’s attention to it.",
      "He said he heard only the wind, but I insisted on digging into the hay and turning it over until we discovered the source of the strange exciting sound, a mother field mouse with half a dozen naked young hanging to her teats.",
      "This to me was a wonderful discovery.",
      "No hunter could have been more excited on discovering a bear and her cubs in a wilderness den.",
    ]},

    { title: "The First Days at School", s: [
      "[story] I was sent to school before I had completed my third year.",
      "The first schoolday was doubtless full of wonders, but I am not able to recall any of them.",
      "I remember the servant washing my face and getting soap in my eyes, and mother hanging a little green bag with my first book in it around my neck so I would not lose it, and its blowing back in the sea-wind like a flag.",
      "But before I was sent to school my grandfather, as I was told, had taught me my letters from shop signs across the street.",
      "I can remember distinctly how proud I was when I had spelled my way through the little first book into the second, which seemed large and important, and so on to the third.",
      "Going from one book to another formed a grand triumphal advancement, the memories of which still stand out in clear relief.",
    ]}
  ],

  words: [
    ["Simile", "A comparison of two different things that uses the word like or as."],
    ["Metaphor", "A comparison that says one thing is another, with no like or as."],
    ["Sensory details", "Details you could see, hear, touch, smell or taste if you were standing in the scene."],
    ["Subjective", "Writing that lets the writer's own feelings and judgments show."]
  ],

  vocabQuestions: [
    { q: "Which of these is a <i>simile</i>?",
      choices: ["The snow lay like a blanket over the hills", "The snow was a blanket over the hills", "The snow lay on the hills", "The hills were white"],
      right: 0, why: "A simile uses like or as." },
    { q: "Which of these is a <i>metaphor</i>?",
      choices: ["The moon was a silver coin in the sky", "The moon looked like a silver coin", "The moon was bright last night", "The moon rose at nine"],
      right: 0, why: "A metaphor says one thing is another." },
    { q: "Which phrase gives <i>sensory details</i>?",
      choices: ["The crunch of cold gravel and the smell of woodsmoke", "It was a pretty good day", "He went to the store", "She thought about it for a while"],
      right: 0, why: "Sensory details appeal to the senses." },
    { q: "Which sentence is <i>subjective</i>?",
      choices: ["It was the loveliest morning I can remember", "The train left at 8:15", "The lake is 40 feet deep", "The school has three floors"],
      right: 0, why: "It shows the writer's own feelings and judgment." }
  ],

  questions: [
    { q: "Which of these sentences from the passage states a fact, something that could be proved true?", find: [15],
      hint: "Look at the third paragraph.",
      choices: [
        "This to me was a wonderful discovery.",
        "Going from one book to another formed a grand triumphal advancement.",
        "I was sent to school before I had completed my third year.",
        "The first schoolday was doubtless full of wonders."
      ], right: 2,
      why: "It can be checked. The others are feelings and judgments." },

    { q: "Which of these sentences is an opinion, a feeling or belief that can't be proved?", find: [13],
      hint: "Look at the second paragraph.",
      choices: [
        "On one of these walks grandfather took me to Lord Lauderdale’s gardens.",
        "He said he heard only the wind.",
        "I was sent to school before I had completed my third year.",
        "This to me was a wonderful discovery."
      ], right: 3,
      why: "Wonderful is a judgment that depends on who is judging." },

    { q: "What kind of writing is this passage?", find: [3],
      hint: "Look at the pronouns the writer uses and whose life it is about.",
      choices: [
        "An autobiography, because the writer tells about his own life",
        "A biography, because someone else tells about his life",
        "A news report, because it gives today's events",
        "A how-to guide, because it explains a method"
      ], right: 0,
      why: "The writer says I and tells about his own boyhood." },

    { q: "Is the passage more objective or subjective?", find: [13],
      hint: "Look at the sentences that show how the writer felt.",
      choices: [
        "Objective, because it only lists facts",
        "Subjective, because the writer's own feelings and judgments show",
        "Objective, because it is about the past",
        "Subjective, because it is written in the third person"
      ], right: 1,
      why: "He says things like wonderful and proud, and that is his own feeling." },

    { q: "In the line “No hunter could have been more excited on discovering a bear and her cubs,” what two things does the writer compare?", find: [14],
      hint: "Look at the end of the second paragraph.",
      choices: [
        "His grandfather and a hunter",
        "His excitement at the field mouse and a hunter's excitement at a bear and cubs",
        "The size of a mouse and the size of a bear",
        "A hay-field and a wilderness den"
      ], right: 1,
      why: "He compares how excited he was with how excited a hunter would be." },

    { q: "Which word signals a contrast in the sentence “He said he heard only the wind, but I insisted on digging into the hay”?", find: [12],
      hint: "Look at the second paragraph.",
      choices: ["only", "but", "into", "hay"], right: 1,
      why: "But signals that the two things are different." },

    { q: "Muir says he loved to wander in the fields. Why is wander a more exact word than go?", find: [5],
      hint: "Look at the first paragraph.",
      choices: [
        "Because it is a longer word",
        "Because it shows he moved freely, with no set place to reach",
        "Because it means he walked fast",
        "Because it rhymes with another word in the sentence"
      ], right: 1,
      why: "Wander tells the reader how he walked, and go does not." },

    { q: "Which of these is the most precise way to say what he saw in the tide pools?", find: [5],
      hint: "Look at the first paragraph.",
      choices: [
        "Lots of animals",
        "Some things in the water",
        "Shells and seaweeds, eels and crabs",
        "A number of creatures"
      ], right: 2,
      why: "Naming the shells, seaweeds, eels and crabs points at real things." },

    { q: "Which sentence states the main idea of the first paragraph?", find: [3],
      hint: "Look at where the paragraph begins.",
      choices: [
        "Fortunately around my native town of Dunbar, by the stormy North Sea, there was no lack of wildness.",
        "When I was a boy in Scotland I was fond of everything that was wild.",
        "We never thought of playing truant.",
        "All in vain."
      ], right: 1,
      why: "The first sentence says what the whole paragraph is about." },

    { q: "No single sentence states the main idea of the whole passage. Which statement best expresses it?", find: [3],
      hint: "Add up all three paragraphs.",
      choices: [
        "Muir loved wild places and creatures from his earliest childhood, and the memories stayed with him.",
        "Schools in Scotland were too strict.",
        "Field mice live in hay.",
        "Muir's grandfather taught him his letters."
      ], right: 0,
      why: "Every paragraph is about what he loved and remembered." },

    { q: "What is the setting of the first paragraph?", find: [4],
      hint: "Look for the place names and the sea.",
      choices: [
        "A big city far inland in England",
        "A desert with no water",
        "A town in the American Midwest",
        "Dunbar, a town in Scotland beside the stormy North Sea, with fields and seashore"
      ], right: 3,
      why: "The writer names Dunbar, the North Sea, the fields and the shore." },

    { q: "Muir heard a sharp, prickly, stinging cry in the hay. Which sense is he using first?", find: [11],
      hint: "Look at the second paragraph.",
      choices: ["Sight", "Hearing", "Smell", "Taste"], right: 1,
      why: "He heard a cry." },

    { q: "Muir says the punishments “followed like shadows.” What figure of speech is this?", find: [8],
      hint: "Look at the end of the first paragraph.",
      choices: [
        "A metaphor, because it says one thing is another",
        "Literal language, because punishments really are shadows",
        "A simile, because it uses like to compare punishments to shadows",
        "A simile, because it describes the sea"
      ], right: 2,
      why: "It compares with the word like." },

    { q: "Which of these is a metaphor?", find: [17],
      hint: "Remember the difference between like or as and one thing is another.",
      choices: [
        "The bag blew back like a flag.",
        "She ran as fast as the wind.",
        "The little first book was a tiny ship carrying me to bigger books.",
        "The bag blew back in the wind."
      ], right: 2,
      why: "It says the book was a ship, with no like or as." }
  ],

  todo: { title: "What To Do Now", s: [
    "Put your notes away, because this one is a test of what you already know, and you probably know more than you think.",
    "Work through the {c} word cards at the top of the page, {q} questions about the passage, and {v} more questions about the unit's words. {T} questions in all.",
    "Each of the passage questions covers one skill from the unit, so ask yourself which skill it is before you pick an answer.",
    "If you get stuck, tap Find It in the Story and read the line the page shows you, and then decide for yourself."
  ] },
};
