/* english/description-and-word-choice
   Grade 7 · English · Unit 2 (Who Am I?), lesson 4. Built by tools/lessons.js.
   Edit the lesson here, not in the registry.

   🚨 DRAFT PROSE, marked per /lesson: the teaching sections, the Teacher Notes, the
   questions and the scripture choice are Claude's, written 2026-10-05 on Sonnet to the
   /teach-plan block in `plan` below and given the /natural pass. Paul has not read them.
   The scripture (Psalm 34:8) is a suggestion, his call.

   The STORY is Mark Twain's "Life on the Mississippi" (1883), Chapter 4, "The Boys'
   Ambition", from Project Gutenberg #245 (verified: the title page reads "Life on the
   Mississippi", by Mark Twain). It's the author's words exactly, split to one sentence
   per entry, with these changes only: the single quotation marks and apostrophes made
   curly, and the one word set in italics in the original (is) printed plain. The
   excerpt is three paragraphs, from "Once a day a cheap, gaudy packet arrived" to the
   end of the sentence that closes on "envy him and loathe him", about 25 sentences:
   the sleeping town, the boat's arrival, and the boy's longing. The paragraph before it
   in the chapter, which names the boys' other ambitions, is left out, and so is
   everything after the third paragraph's closing sentence. It stands in for Holt's
   "Fish Cheeks" by Amy Tan, which is copyrighted.

   ⚠️ THE STORY PICK IS CLAUDE'S; the plan says it goes to the review queue for Paul to
   swap. Two things in Twain's own words are worth a glance: the period word "negro"
   in "a negro drayman", and "the town drunkard", which Twain uses for comic effect.
   Both are kept exactly because the excerpt is the author's words, and either is a
   reason to swap the pick or to trim the excerpt.

   ⚠️ THE PACKET WAS THIN on Holt's Description element box and its Precise Adjectives
   page (p142-143), so the five senses, the swap test and the examples here are
   standard, not the book's own. The recipe lesson (collect recipes) and the analogies
   exercise are left out. */
'use strict';
module.exports = {
  id: "english/description-and-word-choice",
  slug: "description-and-word-choice",
  title: "Description and Word Choice",
  unit: "Literature · U2-L4",
  seq: { unit: 2, unitTitle: "Who Am I?", n: 4 },

  plan: {
    objective: "Identify descriptive details that appeal to the senses, and explain how precise words (especially adjectives) make a description vivid.",
    markers: [
      "BOOK (paraphrased), Holt Elements of Literature p134, objectives: identify description, describe mental images that appeal to the senses, and identify and use precise adjectives.",
      "BOOK (paraphrased), Make the Connection: writers describe things so readers can share the experience.",
      "BOOK (paraphrased), Language page p142-143: precise adjectives (the packet was thin on its list).",
    ],
    method: "FIND THE SENSES, THEN SWAP THE WORD. Description is writing that lets the reader see, hear, smell, taste or touch what the writer experienced. Find the detail that appeals to each sense, then test a precise word by swapping in a vague one (nice, big, good) and watching the picture fade.",
    exampleOnly: [
      "The school gym before a game, and the cafeteria on a Friday. They're our own worlds for the method. The story is Mark Twain's and the skill is the lesson, not the river.",
      "Holt's selection is Fish Cheeks by Amy Tan, which is copyrighted, so a public-domain autobiography carries the skill. World: Life on the Mississippi.",
    ],
    digitize: "Reading engine on a public-domain autobiography that is packed with sensory detail. Questions ask which sense a detail appeals to and what a precise word adds. Written: a short description of the student's own place, using at least three senses.",
    unclear: [
      "Which public-domain autobiography. Not a teaching question, so it does not stop the build. The pick goes in the review queue for Paul to swap.",
    ],
  },
  natural: "2026-10-05",
  findsAt: 56,

  shelf: { grades: [7], subject: "English",
    blurb: "A sleeping river town wakes up when a steamboat appears, told by a boy who wanted to be a steamboatman. How writers use the senses and the exact word to make you see and hear it.",
    contains: [
      "Teacher Notes written for whoever is teaching it",
      "Mark Twain's account of a steamboat arriving, read aloud one line at a time",
      "Four vocabulary cards, each with a check question",
      "Story questions about the senses and the exact word",
      "A short description to write from your own place, on paper",
    ] },
  eyebrow: ["English 7", "U2-L4", "Who Am I?"],
  dek: "A good description lets you hear the place and not just read about it. A few exact words do most of the work.",
  scripture: {
    ref: "Psalm 34:8",
    text: "O taste and see that the LORD is good: blessed is the man that trusteth in him.",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will learn that description lets a reader share an experience through the senses, find the details that appeal to sight, sound, smell, taste and touch, explain what a precise adjective adds, and apply all of it to Mark Twain's account of a steamboat arriving in his boyhood town."
      ]},
      { h: "Key Concepts", p: [
        "A writer's description works through the five senses, and the strongest ones are usually specific: not a loud noise, but a furious clatter of carts.",
        "A precise word does more than a vague one plus a pile of extra words. The swap test is to put a vague word like nice or big in its place and see how much of the picture disappears."
      ]},
      { h: "Where Students Get Stuck", p: [
        "Calling every detail a sight. Hearing and smell are easy to miss, so ask which sense a detail would reach if the reader's eyes were closed.",
        "Piling on adjectives. Precise doesn't mean more, and one exact word often beats three vague ones."
      ]},
      { h: "Teaching Suggestion", p: [
        "Have the student describe a familiar room with their eyes closed, using hearing, smell and touch only, and then compare it with what they'd have written looking at it. The written task at the end of the lesson is the same exercise on paper.",
        "Twain's description of the town is in his own words, including a period term and a comic phrase worth a conversation about how language has changed."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Two Ways to Say It", s: [
      "Say a friend asks what the gym was like before the big game, and you tell her it was noisy and crowded.",
      "She nods, but she doesn't see the gym, because noisy and crowded could describe a thousand places and the words give her nothing to picture.",
      "Now say it differently, and you tell her the bleachers shook under a hundred stamping feet, the whole room smelled of floor wax and popcorn, and the band's drums bounced off the walls.",
      "That's the difference between telling someone a thing and letting them stand in it, so how do writers do the second?"
    ]},

    { title: "The Five Senses", s: [
      "A good {{description}} reaches the reader through the senses, which are sight, hearing, smell, taste and touch, and the details a writer picks to do it are called {{sensory details}}.",
      "Most beginners lean on sight alone, since it's the sense we use the most, and the page ends up flat, like a photograph with the sound turned off.",
      "",
      "[ex] sight: the bleachers shook",
      "[ex] sound: the drums bounced off the walls",
      "[ex] smell: floor wax and popcorn",
      "",
      "A writer who adds sound, smell and touch gives you more ways in, and a place that you can hear and smell is a place that you believe."
    ]},

    { title: "The Exact Word", s: [
      "Details do half the work, and the other half is the word that carries each one.",
      "Words like nice, big, good and bad are placeholders, because they say that a feeling or a size exists without saying what it was like.",
      "A precise {{adjective}}, which is a word that describes a noun, puts the real thing in front of you, and it usually replaces a pile of vague ones.",
      "",
      "[ex] vague: a big, loud, nice crowd",
      "[ex] precise: a roaring, shoulder-to-shoulder crowd",
      "",
      "The second one is shorter and it's far clearer, and the reason is that every word in it is pointing at something."
    ]},

    { title: "Swap It and See", s: [
      "Here's a test you can use on anything you read, and it's called the swap test.",
      "Take a word that seems exact, put a vague word in its place, and see how much of the picture is left.",
      "If the bleachers shook under a hundred stamping feet, and you swap in that the bleachers were loud, the shaking disappears, the feet disappear, and all that's left is a gym you've already forgotten.",
      "A word that does damage when you swap it out is a word that was working, and that's the kind to look for in the story ahead."
    ]},

    { title: "A Boy and a River", s: [
      "Mark Twain grew up in a small town on the Mississippi River, and in 1883 he wrote Life on the Mississippi, which is partly the story of his boyhood there.",
      "In it, he describes what happened every time a steamboat came to town, and he does it so well that you can almost smell the smoke.",
      "As you read, mark the details with your fingers: one finger for every sight, one for every sound, and see which sense he reaches for most.",
      "Watch his adjectives too, and try the swap test on three of them."
    ]},

    { title: "A Steamboat Comes to Town", s: [
      "[story] Once a day a cheap, gaudy packet arrived upward from St. Louis, and another downward from Keokuk.",
      "Before these events, the day was glorious with expectancy; after them, the day was a dead and empty thing.",
      "Not only the boys, but the whole village, felt this.",
      "After all these years I can picture that old time to myself now, just as it was then: the white town drowsing in the sunshine of a summer’s morning; the streets empty, or pretty nearly so; one or two clerks sitting in front of the Water Street stores, with their splint-bottomed chairs tilted back against the wall, chins on breasts, hats slouched over their faces, asleep--with shingle-shavings enough around to show what broke them down; a sow and a litter of pigs loafing along the sidewalk, doing a good business in watermelon rinds and seeds; two or three lonely little freight piles scattered about the ‘levee;’ a pile of ‘skids’ on the slope of the stone-paved wharf, and the fragrant town drunkard asleep in the shadow of them; two or three wood flats at the head of the wharf, but nobody to listen to the peaceful lapping of the wavelets against them; the great Mississippi, the majestic, the magnificent Mississippi, rolling its mile-wide tide along, shining in the sun; the dense forest away on the other side; the ‘point’ above the town, and the ‘point’ below, bounding the river-glimpse and turning it into a sort of sea, and withal a very still and brilliant and lonely one.",
      "Presently a film of dark smoke appears above one of those remote ‘points;’ instantly a negro drayman, famous for his quick eye and prodigious voice, lifts up the cry, ‘S-t-e-a-m-boat a-comin’!’ and the scene changes!",
      "The town drunkard stirs, the clerks wake up, a furious clatter of drays follows, every house and store pours out a human contribution, and all in a twinkling the dead town is alive and moving.",
      "",
      "[story] Drays, carts, men, boys, all go hurrying from many quarters to a common center, the wharf.",
      "Assembled there, the people fasten their eyes upon the coming boat as upon a wonder they are seeing for the first time.",
      "And the boat is rather a handsome sight, too.",
      "She is long and sharp and trim and pretty; she has two tall, fancy-topped chimneys, with a gilded device of some kind swung between them; a fanciful pilot-house, a glass and ‘gingerbread’, perched on top of the ‘texas’ deck behind them; the paddle-boxes are gorgeous with a picture or with gilded rays above the boat’s name; the boiler deck, the hurricane deck, and the texas deck are fenced and ornamented with clean white railings; there is a flag gallantly flying from the jack-staff; the furnace doors are open and the fires glaring bravely; the upper decks are black with passengers; the captain stands by the big bell, calm, imposing, the envy of all; great volumes of the blackest smoke are rolling and tumbling out of the chimneys--a husbanded grandeur created with a bit of pitch pine just before arriving at a town; the crew are grouped on the forecastle; the broad stage is run far out over the port bow, and an envied deckhand stands picturesquely on the end of it with a coil of rope in his hand; the pent steam is screaming through the gauge-cocks, the captain lifts his hand, a bell rings, the wheels stop; then they turn back, churning the water to foam, and the steamer is at rest.",
      "Then such a scramble as there is to get aboard, and to get ashore, and to take in freight and to discharge freight, all at one and the same time; and such a yelling and cursing as the mates facilitate it all with!",
      "Ten minutes later the steamer is under way again, with no flag on the jack-staff and no black smoke issuing from the chimneys.",
      "After ten more minutes the town is dead again, and the town drunkard asleep by the skids once more.",
      "",
      "[story] My father was a justice of the peace, and I supposed he possessed the power of life and death over all men and could hang anybody that offended him.",
      "This was distinction enough for me as a general thing; but the desire to be a steamboatman kept intruding, nevertheless.",
      "I first wanted to be a cabin-boy, so that I could come out with a white apron on and shake a tablecloth over the side, where all my old comrades could see me; later I thought I would rather be the deckhand who stood on the end of the stage-plank with the coil of rope in his hand, because he was particularly conspicuous.",
      "But these were only day-dreams,--they were too heavenly to be contemplated as real possibilities.",
      "By and by one of our boys went away.",
      "He was not heard of for a long time.",
      "At last he turned up as apprentice engineer or ‘striker’ on a steamboat.",
      "This thing shook the bottom out of all my Sunday-school teachings.",
      "That boy had been notoriously worldly, and I just the reverse; yet he was exalted to this eminence, and I left in obscurity and misery.",
      "There was nothing generous about this fellow in his greatness.",
      "He would always manage to have a rusty bolt to scrub while his boat tarried at our town, and he would sit on the inside guard and scrub it, where we could all see him and envy him and loathe him."
    ]},

    { title: "What the Words Did", s: [
      "Go back through the story with your fingers, and count how much of it you could hear, and notice that Twain doesn't just show the town, he gives it a sound.",
      "In the sleeping town you hear almost nothing but a sow and pigs, the lapping of wavelets, and then the cry of the drayman, ‘S-t-e-a-m-boat a-comin’!’, which arrives like a bell going off.",
      "Then the town is full of sound: a furious clatter of drays, a yelling and cursing, the pent steam screaming, the captain's bell ringing.",
      "Run the swap test on a few of his words, and see what happens when the white town drowsing in the sunshine becomes a quiet town, or the furious clatter becomes a noise.",
      "The picture goes dim at once, because drowsing and furious were doing the work, and quiet and noise aren't pointing at anything.",
      "",
      "[verse] Psalm 34:8 says, “O taste and see that the LORD is good: blessed is the man that trusteth in him.”",
      "",
      "That's a verse about knowing God and not a lesson on writing, but it uses the same idea as Twain's description, that you believe a thing more when you can taste it and not just hear it explained.",
      "Writers who give the reader the senses are asking him to experience the thing for himself, and that's why precise words matter."
    ]}
  ],

  words: [
    ["Description", "Writing that lets the reader see, hear, smell, taste or touch what the writer experienced.", 4],
    ["Sensory details", "Details that appeal to the senses: sight, hearing, smell, taste and touch.", 4],
    ["Adjective", "A word that describes a noun.", 12],
    ["Precise", "Exact and specific, pointing at one real thing instead of a vague idea.", 11]
  ],

  vocabQuestions: [
    { q: "What is a <i>description</i>?",
      choices: ["Writing that lets the reader see, hear, smell, taste or touch what the writer experienced", "A list of facts", "A short summary", "A kind of poem"],
      right: 0, why: "A description lets the reader share an experience through the senses." },
    { q: "Which of these is a <i>sensory detail</i>?",
      choices: ["The meeting started at nine.", "The room was nice.", "The bakery smelled of warm cinnamon.", "There were many people."],
      right: 2, why: "Warm cinnamon appeals to the sense of smell." },
    { q: "What is an <i>adjective</i>?",
      choices: ["A word that describes a noun", "A word that names an action", "A word that joins two sentences", "A word that replaces a noun"],
      right: 0, why: "An adjective describes a noun." },
    { q: "Which of these is the most <i>precise</i>?",
      choices: ["The dog was big.", "The dog was a huge, shaggy giant.", "The dog was nice.", "The dog was good."],
      right: 1, why: "Huge and shaggy point at something specific." }
  ],

  questions: [
    { q: "What did the gym description with the shaking bleachers show that “noisy and crowded” did not?", find: [3],
      hint: "Read Two Ways to Say It.",
      choices: [
        "It was shorter.",
        "It let the listener see and hear the gym.",
        "It was about a different gym.",
        "It used no adjectives."
      ], right: 1,
      why: "The second version let you stand in the gym instead of being told about it." },

    { q: "Which sense does “floor wax and popcorn” appeal to?", find: [8],
      hint: "Read The Five Senses.",
      choices: ["Sight", "Hearing", "Taste", "Smell"], right: 3,
      why: "Floor wax and popcorn are things you smell." },

    { q: "In the first paragraph, which word best shows that the town is sleepy?", find: [27],
      hint: "Look at the sentence that begins “After all these years.”",
      choices: ["Drowsing", "Mississippi", "Summer", "Stores"], right: 0,
      why: "Drowsing means half asleep, which is exactly how the white town looks." },

    { q: "What does the cry, “S-t-e-a-m-boat a-comin’!” do for the reader?", find: [28],
      hint: "Which sense would you use to take it in?",
      choices: [
        "It shows you the color of the boat.",
        "It lets you hear the town wake up.",
        "It tells you the price of a ticket.",
        "It describes the smell of the river."
      ], right: 1,
      why: "The cry is a sound detail, and it's the moment the town changes." },

    { q: "“A furious clatter of drays” appeals mostly to which sense?", find: [29],
      hint: "Think about what a clatter is.",
      choices: ["Touch", "Hearing", "Taste", "Sight"], right: 1,
      why: "A clatter is a sound, and furious makes it louder." },

    { q: "Twain calls the first packet “cheap, gaudy.” What do those adjectives do?", find: [24],
      hint: "Look at the first sentence.",
      choices: [
        "They give the reader a picture of the boat and a feeling about it.",
        "They tell you the boat's name.",
        "They show how many people are aboard.",
        "They explain how to build a boat."
      ], right: 0,
      why: "Cheap and gaudy show a boat that looks showy without costing much." },

    { q: "Which detail about the arriving boat appeals most to sight?", find: [33],
      hint: "Look at the long sentence that begins “She is long and sharp.”",
      choices: [
        "The wheels stop.",
        "Great volumes of the blackest smoke roll out of the chimneys.",
        "A bell rings.",
        "The mates are yelling."
      ], right: 1,
      why: "Black smoke rolling and tumbling is something you see." },

    { q: "The pent steam is “screaming through the gauge-cocks.” Which sense does that appeal to?", find: [33],
      hint: "Think about what screaming is.",
      choices: ["Hearing", "Smell", "Taste", "Touch"], right: 0,
      why: "Screaming steam is a sound." },

    { q: "What happens to the town after the boat leaves?", find: [36],
      hint: "Look at the end of the second paragraph.",
      choices: [
        "It grows bigger.",
        "It's dead again, with the town drunkard asleep by the skids.",
        "It joins the boat.",
        "It floods."
      ], right: 1,
      why: "Ten minutes after the boat leaves, the town is dead again and the drunkard is asleep." },

    { q: "If “a dead and empty thing” were swapped for “a bit boring,” what would happen to the sentence?", find: [25],
      hint: "Run the swap test.",
      choices: [
        "It would get more exact.",
        "It would be longer.",
        "It would lose a lot of its picture and its feeling.",
        "Nothing would change."
      ], right: 2,
      why: "Dead and empty are strong, specific words, and a bit boring is vague." }
  ],

  todo: { title: "What To Do Now", s: [
    "Before you start, take a sheet of paper and list the five senses down the side, one to a line.",
    "Then work through the {c} word cards at the top of the page, {q} questions about the story, and {v} more questions about those words. {T} questions in all.",
    "When those are done, write a short description of a place you know well, a room, a store or a field, using at least three senses, and pick your adjectives so each one passes the swap test.",
    "If you get stuck on a question, tap Find It in the Story and read the line the page shows you.",
    "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] },
};
