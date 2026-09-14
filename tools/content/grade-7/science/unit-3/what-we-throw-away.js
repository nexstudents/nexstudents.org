/* science/what-we-throw-away
   Grade 7 · science · unit 3. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 THE PROSE IN `parts` IS A DRAFT, NOT PAUL'S VOICE. Built 2026-09-13 from the
   Merrill spread so the structure could stand while he was out. His prose is still
   the source → BEHAVIOR.md. Refining this is editing, not starting.

   🚨 THIS IS A "SCIENCE AND SOCIETY" SECTION AND IT IS A DIFFERENT SHAPE from 3-2
   and 3-3. The book gives it ONE objective and ONE new word, and ends it with a
   "You Decide!" box rather than a skills drill. So the weight here is on the
   argument, not on the vocabulary - see `plan.method`. Do not "fix" it to match
   the two lessons before it. */
'use strict';
module.exports = {
  id: "science/what-we-throw-away",
  slug: "what-we-throw-away",
  title: "What We Throw Away, and Where It Goes",
  unit: "Life Science &middot; U3-L4",
  seq: { unit: 3, unitTitle: "How Cells Work", n: 4 },

  /* ── /teach-plan, 2026-09-13. Read off Merrill Life Science (Glencoe 1994)
        pp66-67, archive.org/details/merrilllifescien0000dani. ── */
  plan: {
    objective: "Decide whether a material will break down in the environment or not, and argue what should be done about the ones that will not.",
    markers: [
      "QUOTED, Objectives box (only ONE, unlike 3-2 and 3-3): 'Explain the consequences of nonbiodegradable substances in the environment.'",
      "QUOTED, New Science Words (only ONE): biodegradable",
      "QUOTED, opening: 'Do you ever drop candy or gum wrappers on the ground? It's likely to be a very long time before these wrappers disappear.'",
      "QUOTED, SECTION REVIEW 3: 'Connect to Chemistry: Find out what becomes of used motor oil.'",
      "QUOTED, You Decide!: 'Some states have aluminum can deposit laws. Each empty aluminum can is worth five cents... Should all states be required to develop recycling programs?'",
      "QUOTED, chapter review heading: 'THINK AND WRITE CRITICALLY - Answer the following questions in your Journal using complete sentences.'",
    ],
    method: "AN ISSUE, NOT A SKILL. The book drops the Objectives-then-drill pattern here. It opens with something the student has personally done (dropping a wrapper), explains one mechanism, and then hands over a question that has no answer key - 'Should all states be required to develop recycling programs?' The teaching move is that the science is settled and the DECISION is not, and the student has to write a position and support it. That is why the section ends in a box titled You Decide! rather than in exercises.",
    exampleOnly: [
      "candy and gum wrappers, aluminum cans, glass bottles, plastic bags, fruit and leaves — WORLD: household trash",
      "the five-cent deposit law — a real policy, used as the thing to argue about, not as content to memorise",
    ],
    digitize: "PARTIAL. The reading half maps onto the existing engine cleanly. The 'You Decide!' half does NOT - there is no free-write mechanic on this site, and a multiple-choice question about an opinion would destroy the point of it. Handled here by putting the argument in `todo` as a written task done in a notebook, which matches the book's own 'in your Journal using complete sentences'. ⚠️ A real written-answer mechanic is the honest fix → review queue.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Science",
    blurb: "Some things rot away and some things do not. Which is which, why it matters, and what you think should be done about it.",
    contains: [
      "A story-form reading, read aloud with the words highlighted",
      "Four vocabulary words, each one defined inside the reading",
      "Four questions with the answer findable in the text",
      "A written argument to do in your notebook, with no right answer",
    ] },
  eyebrow: ["Life Science", "U3-L4", "Life Science"],
  dek: "A banana peel and a plastic bag are both trash, and only one of them is going anywhere. What happens to the other one is a question with no answer key.",
  scripture: {
    ref: "Genesis 2:15",
    text: "And the LORD God took the man, and put him into the garden of Eden to dress it and to keep it.",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will learn the difference between biodegradable and nonbiodegradable materials, understand why the difference matters, and then write and defend a position on what should be done about it."
      ]},
      { h: "Key Concepts", p: [
        "Biodegradable substances break down in the environment. Sunlight, weathering, oxygen, moisture, bacteria and fungi decompose them back into the elements they are made of, and those elements return to the soil. Fruit and leaves are biodegradable.",
        "Nonbiodegradable materials - aluminum cans, glass bottles, plastic bags - do not do this, or take so long that it makes no practical difference. They accumulate. Recycling is the main way of keeping them out of the environment."
      ]},
      { h: "Teaching Suggestion", p: [
        "🚨 This section is an ARGUMENT, not a drill, and it should be taught that way. The book ends it with “You Decide!” and no answer key. Let the student reach a conclusion you disagree with, and then ask for the reason rather than correcting the conclusion.",
        "The written task at the end is the point of the lesson. A paragraph with a clear position and two reasons is a better outcome here than a perfect vocabulary score. This is the reading-and-writing pairing the whole course is aimed at."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "The Wrapper on the Ground", s: [
      "Have you ever dropped a candy wrapper or a piece of gum wrapper on the ground?",
      "",
      "It is likely to be a very long time before that wrapper disappears.",
      "Plastic wrappers and aluminum foil can take years to break down, and some of them will outlast everyone reading this.",
      "",
      "That is worth stopping on.",
      "Trash does not simply go away when you stop looking at it.",
      "It goes somewhere, and what happens next depends entirely on what it is made of."
    ]},
    { title: "Things That Break Down", s: [
      "Some substances break down easily in the environment.",
      "Those substances are biodegradable.",
      "",
      "Breaking down is not one process but several working together.",
      "Sunlight, weathering, oxygen, moisture, and living things such as bacteria and fungi all act on the material.",
      "Together they decompose it, which means they break it down into the elements it was made of.",
      "",
      "Fruit and leaves are biodegradable.",
      "They are plant parts, and when they decompose the nutrients in them return to the soil.",
      "",
      "Notice what that means.",
      "A biodegradable thing is not destroyed, it is returned.",
      "The elements it was built from go back into the ground and get used again."
    ]},
    { title: "Things That Do Not", s: [
      "Now think about the trash you see along a roadside.",
      "",
      "Aluminum cans, glass bottles and plastic bags are nonbiodegradable.",
      "They do not decompose, or they take so long that it makes no practical difference.",
      "",
      "Nothing returns those materials to the soil.",
      "They simply stay, and more arrive every year.",
      "",
      "An average person in the United States throws away close to three hundred kilograms of nonbiodegradable material every year.",
      "At that rate it would not take very long for the trash produced by a few hundred people to fill a space the size of a circus tent.",
      "",
      "So are these products bad, and should we stop making them?",
      "That is harder to answer than it sounds.",
      "Nearly every day you are in contact with or using some type of plastic, glass or aluminum.",
      "There is no denying that many lives have been saved thanks to plastics in medical equipment and supplies."
    ]},
    { title: "Using It Again", s: [
      "We are not likely to stop using these products.",
      "So the best way to control their use is to use them over and over again, and change them into new products.",
      "",
      "We call this recycling.",
      "",
      "Many communities are now interested in finding new uses for nonbiodegradable materials and have begun recycling programs.",
      "Glass, plastic, aluminum, paper and motor oil can all be recycled.",
      "",
      "Scientists are also developing new forms of nonbiodegradable products, such as soap, paint or trash bags, that decompose more readily.",
      "",
      "Buying those products and making an effort to recycle the others is how a person becomes part of the effort to keep these materials from accumulating and continuing to cause environmental problems."
    ]},
    { title: "To Dress It and To Keep It", s: [
      "[verse] Genesis 2:15 says, “And the LORD God took the man, and put him into the garden of Eden to dress it and to keep it.”",
      "",
      "Those two words are worth slowing down on.",
      "To dress it means to work it and make it productive.",
      "To keep it means to guard it and look after it.",
      "",
      "The verse does not say to leave the garden alone and never touch it.",
      "It also does not say to use it up and walk away.",
      "It says both things at once, and holding both is the difficult part.",
      "",
      "Plastic in a hospital is dressing the garden.",
      "A plastic bag in a river is not keeping it.",
      "",
      "Science can tell you how long the bag will last and what it is made of.",
      "It cannot tell you what you owe the place you live in.",
      "That part is yours to decide, and the last task in this lesson asks you to decide it in writing."
    ]}
  ],

  todo: { title: "What To Do Now", s: [
      "That is the reading done, and this lesson finishes differently from the last two.",
      "First, the questions.",
      "{q} of them, and the answer to each one is in the reading above, not in your memory.",
      "If a question is hard, use the bar or the arrows to go back and read that part again.",
      "Then the vocabulary check at the bottom, {v} questions on the word cards at the top of the page.",
      "Now the part that matters most, and it happens on paper.",
      "Some states have a deposit law on drink cans, where every empty can is worth five cents when you bring it back.",
      "It is one way of motivating people to keep roadsides free of litter.",
      "Here is the question.",
      "Should every state be required to run a recycling program?",
      "Write your answer in your notebook as a proper paragraph, in complete sentences.",
      "Say what you think should happen, give your reasons, and use the words from this lesson where they fit.",
      "There is no answer key for this one and you will not be marked right or wrong.",
      "You will be marked on whether you took a clear position and supported it."
  ] },

  words: [
    ["Biodegradable", "Able to break down easily in the environment."],
    ["Nonbiodegradable", "Not able to break down in the environment, or taking so long that it makes no practical difference."],
    ["Decompose", "To break down into the elements something was made of."],
    ["Recycling", "Using materials over and over again by changing them into new products."]
  ],

  findsAt: 46,
  questions: [
    { q: "What does it mean for something to be biodegradable?", find: [6, 7],
      hint: "Look for the sentence that names the word, then the one that lists what does the work.",
      choices: [
        "It can be used over and over again.",
        "It breaks down easily in the environment.",
        "It is made only from plants.",
        "It can be burned safely."
      ], right: 1 },
    { q: "What actually causes a biodegradable material to break down?", find: [9, 10],
      hint: "It is not one thing. Count how many are listed.",
      choices: [
        "Sunlight, weathering, oxygen, moisture, and living things such as bacteria and fungi.",
        "Only bacteria.",
        "Heat from the sun alone.",
        "Being buried deep enough underground."
      ], right: 0 },
    { q: "Why is it difficult to simply stop making nonbiodegradable products?", find: [25, 26],
      hint: "The reading gives a reason that has nothing to do with convenience.",
      choices: [
        "Because they are cheaper than anything else.",
        "Because they decompose quickly anyway.",
        "Because we are in contact with plastic, glass and aluminum daily, and plastics in medical equipment have saved many lives.",
        "Because no other materials exist."
      ], right: 2 },
    { q: "According to the reading, what is the best way to control the use of nonbiodegradable products?", find: [28, 29],
      hint: "The reading names it and then gives it a one-word name in the next line.",
      choices: [
        "Burying them deeper.",
        "Producing fewer of them each year.",
        "Burning them for energy.",
        "Using them over and over again and changing them into new products, which is recycling."
      ], right: 3 }
  ],

  vocabQuestions: [
    { q: "What does <i>biodegradable</i> mean?",
      choices: [
        "Able to break down easily in the environment.",
        "Able to be recycled into a new product.",
        "Made entirely of aluminum.",
        "Lasting for hundreds of years."
      ], right: 0 },
    { q: "What does it mean to <i>decompose</i>?",
      choices: [
        "To bury something out of sight.",
        "To break down into the elements something was made of.",
        "To melt something down for reuse.",
        "To collect something for recycling."
      ], right: 1 },
    { q: "What is <i>recycling</i>?",
      choices: [
        "Throwing material away in a separate bin.",
        "Letting material rot naturally.",
        "Using materials over and over again by changing them into new products.",
        "Replacing plastic with glass."
      ], right: 2 },
    { q: "Which of these is <i>nonbiodegradable</i>?",
      choices: [
        "Fallen leaves.",
        "Fruit peel.",
        "Grass cuttings.",
        "A glass bottle."
      ], right: 3 }
  ]
};
