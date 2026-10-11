/* english/setting-and-sensory-details
   Grade 7 · English · Unit 2 (Who Am I?), lesson 6. Built by tools/lessons.js.
   Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-10-11. Written on Sonnet to the /teach-plan block in
   `plan` below and given the /natural pass. Paul has not read it. Sources: Holt Elements
   of Literature, First Course, Collection 2, pp152-167 via the week 8-9 packet
   (paraphrased notes); Jack London, "To Build a Fire", from Lost Face (1910), Project
   Gutenberg #2429; the video noted in `video`.

   The STORY is Jack London's "To Build a Fire" (public domain), five short excerpts
   chosen for setting and sensory detail. It is London's wording with these changes only:
   British spellings made American (gray, little-traveled, mustache, color) and a few
   sentences left out between excerpts. It stands in for Holt's "The Naming of Names" by
   Ray Bradbury, which is copyrighted. The setting (the Yukon cold) drives London's story
   the way Mars drives Bradbury's. THE SWAP IS CLAUDE'S; Paul approves it.

   ⚠️ ADDED FROM THE RECORD: the Klondike Gold Rush (1896 to 1899) and Jack London's own
   winter in the Yukon (1897 to 1898), one line before the story, so the setting means
   something to a boy in Ohio-sized warmth. "Chechaquo" is London's own word for a
   newcomer; the lesson doesn't use it.

   ⚠️ The packet's grammar page (misplaced modifiers), the Mars research task and the
   Martian map task are left out. The questions are ours. */
'use strict';
module.exports = {
  id: "english/setting-and-sensory-details",
  slug: "setting-and-sensory-details",
  title: "Setting and Sensory Details",
  unit: "Literature · U2-L6",
  seq: { unit: 2, unitTitle: "Who Am I?", n: 6 },

  plan: {
    objective: "Name a story's setting, sort a writer's details into the five senses, and explain how a setting can act on a character.",
    markers: [
      "BOOK (paraphrased), Holt Elements of Literature p152: setting is the time and place in which a story takes place, and the setting of 'The Naming of Names' (Mars) shapes what happens to the family.",
      "BOOK (paraphrased), p166 Writer's Notebook: describe a real setting by starting with sensory details, what you saw, smelled, heard, felt and tasted.",
      "BOOK (paraphrased), p163 teacher activity: say which senses a description uses and how the setting advances the story.",
    ],
    method: "NAME THE SETTING (WHEN AND WHERE), THEN SORT THE DETAILS BY SENSE. Take one detail at a time, ask which part of the body would notice it, name the sense, and then ask what that detail does to the character.",
    exampleOnly: [
      "A burnt-toast kitchen and a loud porch are our own examples for the method. The Yukon is London's world, and the skill is the lesson, not the cold.",
      "Holt's selection is Bradbury's Mars, which is copyrighted, so a public-domain story with a setting that bites back carries the skill. World: 'To Build a Fire'.",
    ],
    digitize: "Reading engine on short London excerpts, one Watch It Worked that sorts details into the five senses, questions that name the setting, sort details and then do the same on lines he hasn't seen. Written: a real place described with one detail for each sense.",
    unclear: "",
  },
  natural: "2026-10-11",
  findsAt: 52,

  sheet: { slug: "setting-and-sensory-details-homework", subject: "english",
    note: "Do it on screen or print it. Your score shows here once you check it." },

  video: { id: "ttVT7YMtQmo", title: "Telling a Story: Using Sensory Details", channel: "Miacademy",
    why: "Another teacher showing how a few sensory details turn a flat sentence into a place you can feel. Worth watching once before the questions." },

  shelf: { grades: [7], subject: "English",
    blurb: "A man walks into seventy-five below zero and doesn't think much of it. Setting, the five senses, and how a place can push a story along.",
    contains: [
      "Jack London's To Build a Fire, in short excerpts, read aloud one line at a time",
      "A worked example that sorts details into the five senses",
      "Four vocabulary cards, each with a check question",
      "Questions on the story and on lines you haven't seen",
      "A real place described with all five senses, on paper",
    ] },
  eyebrow: ["English 7", "U2-L6", "Who Am I?"],
  dek: "Put the same man on a beach and on a frozen creek and you've got two different stories. Here's how a writer builds the place you can almost feel.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will learn that setting is the time and place of a story, sort sensory details into sight, hearing, touch, smell and taste, and explain how a setting can act on a character, using short excerpts from Jack London's 'To Build a Fire'."
      ]},
      { h: "Key Concepts", p: [
        "Setting is more than a backdrop. Weather, season and time of day are part of it, and in the best stories the setting makes things happen.",
        "A sensory detail is anything a reader could see, hear, touch, smell or taste if he were standing there. Good writers pick the senses that matter instead of using all five every time."
      ]},
      { h: "Where Students Get Stuck", p: [
        "Naming only the place and forgetting the time. 'The Yukon' is half a setting, and 'the Yukon on a winter morning at seventy-five below' is the whole thing.",
        "Sorting a feeling into the wrong sense. Numb fingers are touch, and a crackling sound is hearing, even though both come from the cold."
      ]},
      { h: "Teaching Suggestion", p: [
        "Have the student stand in the kitchen with his eyes closed for a minute, then say one thing he heard, one he felt and one he smelled. The written task at the end is the same exercise on a place he picks.",
        "The Klondike Gold Rush ran from about 1896 to 1899, and Jack London spent the winter of 1897 to 1898 in the Yukon. The lesson says this in one line before the excerpts, and it's added from the historical record."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Same Words, Different Place", s: [
      "Take one sentence, he started walking at nine in the morning, and set it two ways: on a beach in Florida in July, and on a frozen creek in the Yukon in winter.",
      "The words are identical, but you already know the first man is going to be fine and you're not so sure about the second.",
      "Nothing in the sentence told you that, so something else did, and writers have a name for it.",
      "How does a writer build a place so well that it starts to decide what happens to the people in it?"
    ]},

    { title: "Time and Place", s: [
      "The {{setting}} of a story is the time and place where it happens, which means both when and where.",
      "The when can be a year, a season or an hour of the day, and the where can be a country, a house, or one spot on a trail.",
      "Weather belongs to the setting too, and it matters a great deal in the story you're about to read.",
      "So when you're asked for a setting, give both halves, because a place with no time attached is only half an answer."
    ]},

    { title: "The Five Senses", s: [
      "A writer doesn't just tell you the place, he puts you in it, and the tool for that is the {{sensory details}}.",
      "Those are the details you could pick up with your senses if you were standing there: what you see, hear, touch, smell and taste.",
      "Here's a pair of lines to try it on.",
      "",
      "[ex] The kitchen smelled of burnt toast, and the radio crackled in the corner.",
      "",
      "Burnt toast is a smell and the crackling radio is a sound, so that one line puts two senses into a kitchen without ever saying how the kitchen looks.",
      "Notice that a writer rarely uses all five at once, and picks the ones that fit the moment."
    ]},

    { title: "A Man on the Yukon Trail", s: [
      "In 1896 gold was found in the Klondike, a part of the Yukon in northwest Canada, and thousands of people hurried north to look for it through some of the coldest country on earth.",
      "Jack London was one of them, and he spent the winter of 1897 to 1898 there, which is why the story you're about to read feels as though somebody has stood in that cold.",
      "A man sets out alone along a frozen creek to meet his friends at camp, with a dog trotting at his heels and a lunch of biscuits tucked inside his shirt.",
      "Read the five short pieces below, and watch for what you can see, hear and feel."
    ]},

    { title: "To Build a Fire", s: [
      "[story] Day had broken cold and gray, exceedingly cold and gray, when the man turned aside from the main Yukon trail and climbed the high earth-bank, where a dim and little-traveled trail led eastward through the fat spruce timberland.",
      "There was no sun nor hint of sun, though there was not a cloud in the sky.",
      "The Yukon lay a mile wide and hidden under three feet of ice.",
      "On top of this ice were as many feet of snow.",
      "",
      "[story] As he turned to go on, he spat speculatively.",
      "There was a sharp, explosive crackle that startled him.",
      "He spat again.",
      "And again, in the air, before it could fall to the snow, the spittle crackled.",
      "",
      "[story] He smiled agreeably to himself as he thought of those biscuits, each cut open and sopped in bacon grease, and each enclosing a generous slice of fried bacon.",
      "He was surprised, however, at the cold.",
      "It certainly was cold, he concluded, as he rubbed his numbed nose and cheek-bones with his mittened hand.",
      "But rub as he would, the instant he stopped his cheek-bones went numb, and the following instant the end of his nose went numb.",
      "",
      "[story] The man's red beard and mustache were likewise frosted, but more solidly, the deposit taking the form of ice and increasing with every warm, moist breath he exhaled.",
      "If he fell down it would shatter itself, like glass, into brittle fragments.",
      "",
      "[story] They were traps.",
      "They hid pools of water under the snow that might be three inches deep, or three feet.",
      "He had felt the give under his feet and heard the crackle of a snow-hidden ice-skin.",
      "And to get his feet wet in such a temperature meant trouble and danger."
    ]},

    { title: "Sorting the Senses", s: [
      "Now take a few of those details and sort them, one at a time, with a question you can ask about any line a writer gives you.",
      "The question is which part of your body would notice this, and the answer names the sense.",
      "",
      "[walk] Sorting four details from the Yukon trail into the five senses.",
      "[step] Start with the line about the spit, which crackled in the air before it hit the snow, and ask what a person would use to notice that. || \"the spittle crackled\"  ->  your ears",
      "[step] Ears mean hearing, so that detail is a sound, and it also tells you how cold it is, because spit doesn't crackle in the air unless it freezes on the way down. || crackle  =  HEARING",
      "[step] Next, his cheek-bones going numb, which you would notice with your skin, so this one is touch. || \"the instant he stopped his cheek-bones went numb\"  =  TOUCH",
      "[step] The frosted beard and the three feet of ice and snow are things you would take in with your eyes, so those are sight. || gray sky, white snow, ice beard like glass  =  SIGHT",
      "[step] The biscuits sopped in bacon grease are food he's only thinking about, but they're still a taste detail, since the writer is using them to make your mouth water. || bacon biscuits  =  TASTE",
      "[step] Last, check for the fifth sense, smell, and notice that this passage doesn't use it, which is fine, because a writer picks the senses that fit the scene. || sight, hearing, touch, taste: four of five",
      "",
      "Watch out for one trap in that sorting: some details come from the same cause but belong to different senses.",
      "The cold makes the spit crackle, which you hear, and it makes the cheeks go numb, which you feel, and a careful reader keeps them apart."
    ]},

    { title: "When the Place Pushes Back", s: [
      "Here's the second thing a setting can do, and it's the bigger one: it can act on a character.",
      "In this story the cold isn't scenery that the man walks past, because it numbs his face, hides traps under the snow, and will take away what he can do with his hands.",
      "Pull the man out of the Yukon and drop him in Florida, and the story disappears, which tells you the setting is doing part of the work of a character.",
      "A setting also gives a feeling, which readers call mood, and the gray sky, the silence and the empty trail all make this one feel lonely and a little dangerous.",
      "Go back to the question at the start: a writer builds a place with sensory details, and the place begins to decide what happens when it makes things hard for the people in it."
    ]}
  ],

  words: [
    ["Setting", "The time and place where a story happens.", 4],
    ["Sensory details", "Details you could see, hear, touch, smell or taste if you were standing in the scene.", 8],
    ["Mood", "The feeling a story or a place gives the reader.", 50],
    ["Sense", "One of the five ways a body takes in the world: sight, hearing, touch, smell and taste.", 9]
  ],

  vocabQuestions: [
    { q: "What is the <i>setting</i> of a story?",
      choices: ["The main character's name", "The time and place where the story happens", "The last sentence", "The problem the character has"],
      right: 1, why: "Setting is the time and place, both halves." },
    { q: "What are <i>sensory details</i>?",
      choices: [
        "Details about what a character is thinking",
        "Details you could see, hear, touch, smell or taste",
        "The longest words in a story",
        "Details about the author's life"
      ],
      right: 1, why: "They appeal to the senses." },
    { q: "What does <i>mood</i> mean in a story?",
      choices: ["The feeling a story or place gives the reader", "The number of characters", "Where the story was printed", "How long the story takes to read"],
      right: 0, why: "Mood is the feeling the writing gives you." },
    { q: "Which list names all five <i>senses</i>?",
      choices: [
        "Sight, hearing, touch, smell and taste",
        "Sight, hearing, touch, balance and speed",
        "Smell, taste, color, sound and shape",
        "Sight, sound, size, smell and shape"
      ],
      right: 0, why: "The five senses are sight, hearing, touch, smell and taste." }
  ],

  questions: [
    { q: "Which of these is the most complete setting for the London excerpts?", find: [18],
      hint: "Give both the when and the where.",
      choices: [
        "The Yukon",
        "A frozen creek in the Yukon on a winter morning",
        "A man and his dog",
        "A cold day"
      ], right: 1,
      why: "It names the place and the time." },

    { q: "In the line 'The kitchen smelled of burnt toast,' which sense is the writer using?", find: [12],
      hint: "Read The Five Senses.",
      choices: ["Smell", "Sight", "Hearing", "Taste"], right: 0,
      why: "Burnt toast is something you smell." },

    { q: "The spit that 'crackled' in the air is a detail for which sense?", find: [25],
      hint: "Which part of your body notices a crackle?",
      choices: ["Touch", "Hearing", "Sight", "Smell"], right: 1,
      why: "A crackle is a sound, so it's hearing." },

    { q: "Which detail in the story is a sense of touch?", find: [29],
      hint: "Look for what his skin feels.",
      choices: [
        "The gray sky",
        "His cheek-bones and nose going numb",
        "The crackle of the spit",
        "The bacon biscuits"
      ], right: 1,
      why: "Numbness is something his skin feels." },

    { q: "Why does the writer mention the biscuits sopped in bacon grease?", find: [26],
      hint: "Which sense does a mouthwatering lunch use?",
      choices: [
        "It's a detail of sound.",
        "It's a taste detail that makes the reader hungry.",
        "It shows how far he has walked.",
        "It's a detail of the weather."
      ], right: 1,
      why: "Food is a detail of taste." },

    { q: "How does the setting act on the man in the last excerpt?", find: [32, 35],
      hint: "Read When the Place Pushes Back.",
      choices: [
        "It makes him feel proud.",
        "It hides pools of water under the snow, where a wet foot could mean danger.",
        "It gives him a map.",
        "It brings his friends to him."
      ], right: 1,
      why: "The hidden water is a trap the setting sets for him." },

    { q: "Why does the story disappear if you move the man to Florida?", find: [49],
      hint: "Read When the Place Pushes Back.",
      choices: [
        "Because Florida has no trails.",
        "Because the cold is doing part of a character's work, and without it nothing pushes back.",
        "Because Florida has no men.",
        "Because the dog wouldn't come."
      ], right: 1,
      why: "The setting makes the trouble, so changing it changes the story." },

    { q: "Here is a line you haven't seen: 'The porch boards groaned, and the whole yard smelled of wet dogs.' Which two senses does it use?", find: [12],
      hint: "Use the question: which part of the body notices it?",
      choices: ["Sight and taste", "Hearing and smell", "Touch and taste", "Hearing and sight"], right: 1,
      why: "Groaning boards are a sound, and wet dogs are a smell." },

    { q: "Here is another new line: 'The soup was so hot it burned his tongue, and it tasted of salt.' Which senses does it use?", find: [12],
      hint: "A burn on the tongue and a taste are two different things.",
      choices: ["Touch and taste", "Sight and hearing", "Smell and hearing", "Taste only"], right: 0,
      why: "A burn is felt, which is touch, and salt is a taste." }
  ],

  todo: { title: "What To Do Now", s: [
    "Before you start, pick a real place you know well, like your kitchen, the car or a trail, and stand there for one minute with your eyes closed.",
    "Then work through the {c} word cards at the top of the page, {q} questions about the story, and {v} more questions about those words. {T} questions in all.",
    "When you're finished, write five lines on paper about the place you picked, one for each sense, and add the time of day to your first line so the setting is complete.",
    "If you get stuck on a question, tap Find It in the Story and read the line the page shows you.",
    "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] },
};
