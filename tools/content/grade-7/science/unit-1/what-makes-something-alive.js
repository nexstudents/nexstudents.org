/* science/what-makes-something-alive
   Grade 7 · science · unit 1. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry. */
'use strict';
module.exports = {
  id: "science/what-makes-something-alive",
  slug: "what-makes-something-alive",
  title: "What Makes Something Alive",
  unit: "Life Science &middot; U1-L1",
  /* 🚨 `seq` IS THE MODULE ORDER, and it is the only thing that says which
     lesson follows which. The `unit` string above is a LABEL - it is rendered,
     never parsed. Ordering off a display string is how a rename silently
     reorders a course, so the order lives in real data instead.
     unit = which unit, n = position in it. Unit 2 is "The Cell" (Paul,
     2026-08-31), not built yet. */
  seq: { unit: 1, unitTitle: "Life and How We Study It", n: 1 },
  shelf: { grades: [7], subject: "Science",
    /* Paul's own art, made 2026-08-31, square because the card tile is square
       at every width. Source PNG lives in his Desktop\School Lessons
       Worksheets\Science\ folder; the 700px thumb.jpg beside index.html is
       what ships. 🚨 The art is Paul's - do not restyle it or regenerate it. */
    thumb: true,
    blurb: "The characteristics every living thing shares, and what that complexity might point to.",
    /* ⚠️ FIVE words, not four. Paul added Response on 2026-09-03. A count in a blurb
       goes stale silently - check it whenever `words` changes. */
    contains: [
      "A story-form reading, read aloud with the words highlighted",
      "Five vocabulary words, each one defined inside the reading",
      "Day 1: four questions with the answer findable in the text",
      "Day 2: a vocabulary check and a printable answer sheet",
    ] },
  eyebrow: ["Life Science", "U1-L1", "Life Science"],
  dek: "A stream moves, a dog moves, and a tree hardly moves at all. Only some of them are alive, and saying why is harder than it sounds.",
  scripture: {
    ref: "Genesis 2:7",
    text: "And the LORD God formed man of the dust of the ground, and breathed into his nostrils the breath of life; and man became a living soul.",
  },
  /* 🚨 TEACHER NOTES, Paul's own text, 2026-09-03. Same headings as Lesson 3 -
     Goal / Key Concepts / Teaching Suggestion - which is why `ground` is a list of
     sections and not the fixed fields Lesson 2 started with.
     ⚠️ "Key Vocabulary" is MINE, not his; it renders from `words` so it duplicates
     nothing. Same addition as Lessons 2 and 3. */
  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will learn the basic characteristics scientists use to identify living things and understand how organisms interact with their surroundings."
      ]},
      { h: "Key Concepts", p: [
        "All living things are called organisms and are made of one or more cells. Living things use energy, grow and develop, respond to their environment, maintain stable internal conditions, reproduce, and have inherited characteristics that help them survive.",
        "Pay special attention to stimulus, response, and adaptation. A stimulus causes a reaction. A response is what the organism does because of that stimulus. An adaptation is an inherited characteristic that helps an organism survive.",
        "Students should also understand homeostasis, which is an organism's ability to maintain relatively stable conditions inside itself."
      ]},
      { h: "Teaching Suggestion", p: [
        "Ask the student to compare a dog, a plant, and a rock. Have them explain which are alive and why. If they say, “Living things move,” point out that water and clouds move too. This helps students discover that scientists need several characteristics to determine whether something is alive.",
        "Near the end of the lesson, connect the complexity and organization of living things to God as Creator. Scripture teaches that life was intentionally created by God and that creation displays His workmanship."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },
  parts: [
    { title: "Beside the Stream", s: [
      "Imagine you are sitting beside a stream with a dog.",
      "The water moves.",
      "The dog moves.",
      "The trees barely seem to move at all.",
      "So here is the question.",
      "What makes something alive?",
      "It is more complicated than simply being able to move."
    ]},
    { title: "The Signs of Life", s: [
      "Scientists use several characteristics to recognize living things.",
      "Living things are called organisms, and they are made of cells.",
      "Cells are the tiny building blocks that carry out the processes of life.",
      "Living things also use energy.",
      "They grow and develop.",
      "They respond to their surroundings.",
      "They keep their internal conditions stable.",
      "They reproduce.",
      "And they have characteristics that help them survive.",
      "Your body is constantly working to keep things balanced.",
      "When you run, your heart beats faster.",
      "When you stop, your body works to bring your heart rate back toward normal.",
      "This is called homeostasis, which means keeping the inside of your body relatively stable."
    ]},
    { title: "Stimulus and Response", s: [
      "Living things interact with the world around them in fascinating ways.",
      "Three important words can help us understand this.",
      "A stimulus is something in the environment that causes an organism to react.",
      "For example, imagine your dog hears a can of dog food opening.",
      "The sound of the can opener is the stimulus.",
      "A response is the reaction an organism makes because of a stimulus.",
      "Your dog hears the can opener and runs into the kitchen.",
      "Running toward the food is the response.",
      "So remember, the stimulus is what causes the reaction, and the response is how the organism reacts."
    ]},
    { title: "Adaptation", s: [
      "An adaptation is an inherited characteristic that helps an organism survive in its environment.",
      "For example, a polar bear has thick fur that helps keep it warm in a freezing environment.",
      "Unlike a response, an adaptation is not something the animal simply decides to do.",
      "It is a characteristic passed down through generations.",
      "Think of it this way.",
      "Stimulus means something happens.",
      "Response means an organism reacts.",
      "Adaptation is a built in characteristic that helps it survive."
    ]},
    { title: "The Amazing Design of Life", s: [
      "Now stop and think about what we have learned.",
      "Every living thing is made of cells.",
      "Those cells contain incredibly complex structures that work together.",
      "Living things use energy, repair themselves, grow, reproduce, respond to their surroundings, and maintain the delicate conditions needed to stay alive.",
      "That raises an important question.",
      "Could such incredible complexity and organization simply happen by chance?",
      "This is where the idea of intelligent design comes in.",
      "When we see something that contains information, organization, and purposeful design, we normally recognize that it came from intelligence.",
      "Think about a computer, a watch, or even a simple LEGO creation.",
      "If you found one sitting in the woods, you would not assume that the pieces randomly came together and built themselves.",
      "You would naturally look for a designer.",
      "Life is far more complex than any machine humans have created.",
      "The Bible teaches that life has a Creator.",
      "Genesis 1 tells us that God created the living world, and Genesis 2:7 describes God giving mankind the breath of life.",
      "For Christians, the incredible design found throughout living things points toward a Grand Designer.",
      "The basic idea is simple.",
      "If we recognize intelligent design, it is reasonable to ask whether there is an intelligent Designer.",
      "Science allows us to study the incredible details of how living things work.",
      "Faith also asks who created them and why they exist.",
      "As we study biology, we can explore both the amazing complexity of life and what that complexity may tell us about its Creator."
    ]},
    { title: "Your Challenge", s: [
      "Look at something living around you.",
      "It could be a person, animal, plant, insect, or even a tiny organism.",
      "Ask yourself, what makes it alive?",
      "Can you identify its cells, energy use, growth, responses, and adaptations?",
      "The more we look closely at life, the more amazing it becomes.",
      "Science helps us discover how life works.",
      "Studying creation can also lead us to wonder about the Creator."
    ]}
  ],
  /* ⚠️ ONE SITTING as of 2026-09-04. The questions come first and the word cards
     second, matching lesson-template.html's panel order. This block used to say word cards FIRST, the same way
     Lesson 2's did before Paul caught it on the page on 2026-09-03. */
  todo: { title: "What To Do Now", s: [
      "That is the reading done.",
      "Two things are left, and they both happen today.",
      "First, the questions.",
      "Four of them, and the answer to each one is in the reading above, not in your memory.",
      "If a question is hard, do not guess.",
      "Use the bar or the arrows to go back to the part it came from and read it again.",
      "The one people trip on is the difference between a response and an adaptation.",
      "Read Adaptation again and look for which one is passed down and which one is decided in the moment.",
      "Then the word cards.",
      "Five words, and every one of them is explained somewhere in the story you just heard.",
      "Tap each card to check yourself, then answer the vocabulary questions underneath it.",
      "If you can explain why a polar bear's fur is not a response, you have understood the hardest idea in this lesson."
  ] },
  /* Paul's definitions, 2026-09-03. FIVE words - Response is new; this lesson had four
     before and taught the word in the story without ever putting it on a card.
     ⚠️ Only four have a check question on Day Two: Paul wrote none for Response and one
     was NOT invented for him. build-lessons.js warns about the gap on every build. */
  words: [
    ["Organism", "A living thing."],
    ["Stimulus", "Something that causes an organism to react."],
    ["Response", "The reaction an organism makes because of a stimulus."],
    ["Homeostasis", "The ability to maintain relatively stable internal conditions."],
    ["Adaptation", "An inherited characteristic that helps an organism survive in its environment."]
  ],
  /* 🚨 findsAt = the story sentence count these `find` indexes were verified against.
     Change the story and the build stops until they are re-checked. See checkFinds(). */
  findsAt: 64,
  /* Paul's questions, 2026-09-03. The story was NOT rewritten for these - he confirmed
     it stays as it was - so every `find` was computed against the existing sentences. */
  questions: [
    { q: "Which statement best describes living things?", find: [7, 8, 10, 12, 14],
      hint: "The stream moves too. Look for the list of characteristics, not for one test.",
      choices: [
        "Anything that moves is alive.",
        "Living things share characteristics such as being made of cells, using energy, growing, responding, and reproducing.",
        "Anything that needs water is alive.",
        "Living things must be animals or plants."
      ], right: 1 },
    { q: "A dog hears its food bowl being filled and runs into the kitchen. Which choice correctly identifies the stimulus and response?", find: [23, 24, 26, 27],
      hint: "One of them causes the other. Work out which came first.",
      choices: [
        "The dog is the stimulus and the food is the response.",
        "Running is the stimulus and hearing is the response.",
        "The sound of the food being poured is the stimulus, and the dog running into the kitchen is the response.",
        "The dog's hunger is an adaptation."
      ], right: 2 },
    { q: "What is the difference between a response and an adaptation?", find: [25, 29, 31, 32],
      hint: "One is decided in the moment. The other was passed down.",
      choices: [
        "A response is a reaction to something happening, while an adaptation is an inherited characteristic that helps an organism survive.",
        "Responses happen only in animals, while adaptations happen only in plants.",
        "A response is inherited, while an adaptation happens immediately.",
        "There is no difference between them."
      ], right: 0 },
    { q: "What is homeostasis?", find: [13, 16, 19],
      hint: "Think about what your body does after you stop running.",
      choices: [
        "The ability of an organism to move.",
        "The process of producing offspring.",
        "The ability of an organism to maintain relatively stable conditions inside itself.",
        "The way plants get energy from sunlight."
      ], right: 2 }
  ],
  /* Paul's hand-written Day Two, 2026-09-03, replacing the generated check whose wrong
     answers were the other three definitions from this same lesson. Four checks for five
     cards - see `words`. */
  vocabQuestions: [
    { q: "What is an <i>organism</i>?",
      choices: [
        "Any object that moves.",
        "A living thing.",
        "Something made only of water.",
        "A nonliving part of the environment."
      ], right: 1 },
    { q: "What is a <i>stimulus</i>?",
      choices: [
        "Something that causes an organism to react.",
        "The reaction an organism makes.",
        "An inherited characteristic.",
        "The process of growing."
      ], right: 0 },
    { q: "What is <i>homeostasis</i>?",
      choices: [
        "Responding to a sound.",
        "Maintaining relatively stable conditions inside an organism.",
        "An organism growing larger.",
        "An inherited characteristic that helps survival."
      ], right: 1 },
    { q: "What is an <i>adaptation</i>?",
      choices: [
        "Any movement made by an animal.",
        "Something an organism learns during its lifetime.",
        "An inherited characteristic that helps an organism survive in its environment.",
        "Any change that happens around an organism."
      ], right: 2 }
  ]
};
