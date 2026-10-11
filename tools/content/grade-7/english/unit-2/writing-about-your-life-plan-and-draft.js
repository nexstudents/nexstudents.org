/* english/writing-about-your-life-plan-and-draft
   Grade 7 · English · Unit 2 (Who Am I?), lesson 9. Built by tools/lessons.js.
   Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-10-11. Written on Sonnet to the /teach-plan block in
   `plan` below and given the /natural pass. Paul has not read it. Sources: Holt Elements
   of Literature, First Course, Writer's Workshop "Autobiographical Incident" pp182-185
   via the week 8-9 packet (paraphrased notes); the video noted in `video`.

   The STORY is Frederick Douglass, Narrative of the Life of Frederick Douglass, an
   American Slave (1845), Chapter VII, public domain (Project Gutenberg #23). Short
   excerpts about how he taught himself to read in Baltimore. It is Douglass's wording
   with these changes only: the italics marks around "inch" and "ell" dropped, and
   sentences left out between excerpts. No British spellings occur in the lines used. Period wording ("urchins", "bestow", "stratagems") is
   kept as written. It stands in for Jean Little's excerpt from Little by Little in Holt,
   which is copyrighted, and keeps the same lesson: what words can do. THE SWAP IS
   CLAUDE'S; Paul approves it.

   ⚠️ ADDED FROM THE RECORD: Douglass was born into slavery in Maryland, about 1818, lived
   for years in Baltimore in the household of Hugh Auld, and escaped to freedom in 1838.
   One line before the story. The lesson doesn't soften what the passage says about
   slavery; it names it plainly.

   ⚠️ The packet's student model ("The Clutch Moment"), the freewrite lists and the
   technology tip are left out. The framework (opening, background, events in order, why it
   mattered) and the elaboration tip (the five senses starters) are the book's, paraphrased.
   The questions are ours. */
'use strict';
module.exports = {
  id: "english/writing-about-your-life-plan-and-draft",
  slug: "writing-about-your-life-plan-and-draft",
  title: "Writing About Your Life: Plan and Draft",
  unit: "Literature · U2-L9",
  seq: { unit: 2, unitTitle: "Who Am I?", n: 9 },

  plan: {
    objective: "Choose one event that mattered, plan it with a four-part framework, and write a first draft of an autobiographical incident.",
    markers: [
      "BOOK (paraphrased), Holt Writer's Workshop p182: an autobiographical incident tells about one event in your life that has special significance for you.",
      "BOOK (paraphrased), p183 framework: what the incident means to me, an introduction that grabs attention, the events in order, and a conclusion that says why it mattered.",
      "BOOK (paraphrased), pp183-185: choose a topic that means something, that you remember well and are willing to share, then get it on paper and elaborate with sensory details.",
    ],
    method: "PICK ONE EVENT, PLAN IT IN FOUR PARTS, THEN GET IT ON PAPER. Test the topic with three questions, fill in the framework, and draft without stopping to fix, because revising is the next lesson.",
    exampleOnly: [
      "Douglass in Baltimore is the model, and the skill is the framework, not slavery or Baltimore. The student's own event is the lesson.",
      "Holt's model is an excerpt from Jean Little's Little by Little, which is copyrighted, so a public-domain autobiography about what words can do carries the framework. World: Narrative of the Life of Frederick Douglass.",
    ],
    digitize: "Reading engine on short Douglass excerpts, one Watch It Worked that fills the four-part framework from the model, questions that name the part and apply the planning tests to new lines. Written: a plan and a first draft in his notebook.",
    unclear: "",
  },
  natural: "2026-10-11",
  findsAt: 42,

  video: { id: "nBQ8dU0KPtg", title: "Writing a Personal Narrative, Episode 2: Making a Plan", channel: "Teaching Without Frills",
    why: "A teacher walking through the planning step of a personal narrative. Worth watching before you start your own plan." },

  shelf: { grades: [7], subject: "English",
    blurb: "A boy in Baltimore hides a book and a piece of bread on his errands. How to pick one event from your own life, plan it in four parts and write the first draft.",
    contains: [
      "Frederick Douglass learning to read, in short excerpts, read aloud one line at a time",
      "A worked example that fills a four-part plan from the model",
      "Four vocabulary cards, each with a check question",
      "Questions on the model and on lines you haven't seen",
      "A plan and a first draft of your own, on paper",
    ] },
  eyebrow: ["English 7", "U2-L9", "Who Am I?"],
  dek: "You've got a whole life of things that happened to you, and one of them is worth telling. Here's how to find it, plan it and get it down on paper.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will learn what an autobiographical incident is, test a topic with three questions, plan the piece with a four-part framework (an opening that grabs attention, background, events in order, and why it mattered), and write a first draft."
      ]},
      { h: "Key Concepts", p: [
        "An autobiographical incident is about one event, not a whole life. The smaller the event, the more room there is for detail.",
        "The ending is not 'and then it was over.' It says what the event meant to the writer."
      ]},
      { h: "Where Students Get Stuck", p: [
        "Choosing too much, like 'my summer' or 'my whole year at the old school'. One afternoon is a better topic than one summer.",
        "Stopping to fix sentences during the draft. The draft is for getting it down, and the next lesson is for revising."
      ]},
      { h: "Teaching Suggestion", p: [
        "Have the student write the three topic-test answers on a sticky note before he plans. If he can't answer 'am I willing to share it?', pick another event.",
        "Frederick Douglass was born into slavery in Maryland about 1818, lived for years in Baltimore in the household of Hugh Auld, and escaped to freedom in 1838. The lesson says this in one line before the excerpts, and it's added from the historical record."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Two Things in His Pockets", s: [
      "As a boy in Baltimore, Frederick Douglass went out on errands with two things: a piece of bread for the hungry boys on the street, and a book he wasn't supposed to have.",
      "He traded the one for the other, and by the time anybody noticed, he had taught himself to read, in a place where it was against the rules for him to learn.",
      "Years later he wrote it all down so that a stranger could feel what that bread and that book had been worth.",
      "How do you take one event from your own life, and tell it so that a stranger cares?"
    ]},

    { title: "One Event That Mattered", s: [
      "An {{autobiographical incident}} is a true story about one event in your own life that mattered to you.",
      "It isn't your whole life, or even your whole summer, and the best ones are small: one game, one argument, one afternoon you still think about.",
      "Writing one takes three jobs in order: planning, which writers call {{prewriting}}, then getting the whole thing down in a first draft, and then revising it, and this lesson covers the first two.",
      "Start with the plan, since it's the part that most people skip, and it's the part that makes the draft much easier."
    ]},

    { title: "Four Parts", s: [
      "Every autobiographical incident can be planned with the same four-part framework.",
      "First comes an opening that grabs the reader's attention, which might be a line of dialogue, a question, a surprising statement or a vivid description.",
      "Second comes the background, which tells the reader just enough to understand what's going on, and then come the events themselves, told in the order they happened.",
      "Last comes the part writers forget: the ending says why the event mattered to you, because that is the point of telling it at all."
    ]},

    { title: "A Boy Who Wanted to Read", s: [
      "Frederick Douglass was born into slavery in Maryland about 1818, and as a boy he was sent to live in Baltimore with the family of a man named Hugh Auld.",
      "He escaped to freedom in 1838, and in 1845 he wrote the story of his life, which he called the Narrative.",
      "The pages ahead are short pieces of one chapter, in his own words from long ago, and you'll see some old-fashioned words, but the plan underneath them is the same four-part framework.",
      "Read them looking for the four parts, and then you'll see them one at a time."
    ]},

    { title: "Learning to Read", s: [
      "[story] I lived in Master Hugh's family about seven years.",
      "During this time, I succeeded in learning to read and write.",
      "In accomplishing this, I was compelled to resort to various stratagems.",
      "",
      "[story] My mistress, who had kindly commenced to instruct me, had, in compliance with the advice and direction of her husband, not only ceased to instruct, but had set her face against my being instructed by any one else.",
      "",
      "[story] The plan which I adopted, and the one by which I was most successful, was that of making friends of all the little white boys whom I met in the street.",
      "As many of these as I could, I converted into teachers.",
      "When I was sent of errands, I always took my book with me, and by going one part of my errand quickly, I found time to get a lesson before my return.",
      "I used also to carry bread with me, enough of which was always in the house, and to which I was always welcome.",
      "This bread I used to bestow upon the hungry little urchins, who, in return, would give me that more valuable bread of knowledge.",
      "",
      "[story] Mistress, in teaching me the alphabet, had given me the inch, and no precaution could prevent me from taking the ell."
    ]},

    { title: "Finding the Framework", s: [
      "Now go back through those lines and sort them into the four parts, with the same kind of walkthrough you've used before.",
      "",
      "[walk] Filling the four-part plan from Douglass's pages.",
      "[step] Start with the opening, which is the first few lines, a short plain statement that sets up the whole story and makes you want to know how. || OPENING: \"During this time, I succeeded in learning to read and write.\"",
      "[step] Next the background, which tells you what stood in his way: the mistress who first taught him had been told to stop. || BACKGROUND: she \"ceased to instruct\" and set her face against it",
      "[step] Now the events, in order: he made friends of the boys on the street, took his book on errands, and paid for lessons with bread. || EVENTS: 1. friends in the street  2. book on errands  3. bread for lessons",
      "[step] Last, the point: the final line says that once the alphabet was in his hands, nobody could take it back, which is why the whole thing mattered. || WHY IT MATTERED: given the inch, no one could stop him taking the ell",
      "",
      "Notice that his ending is not a new event, and that it explains what all the earlier ones added up to."
    ]},

    { title: "Step One: Choose Your Event", s: [
      "Now it's your turn, and the first job is to find an event, so look through your notebook, your photos or anything you've kept from the past few years.",
      "Spend two minutes writing down every moment that comes to mind, such as a surprise, a mistake, a win, a time you helped someone, or a time you were scared.",
      "Then test your best choice with three questions: does it mean something special to me, do I remember it well enough to describe it, and am I willing to share it.",
      "If the answer to all three is yes, write a sentence or two on why it matters, and keep that sentence where you can see it, because it may change as you write."
    ]},

    { title: "Step Two: Get It on Paper", s: [
      "Next, write a plan with the four parts: a note for your opening, a line of background, the events in order, and the sentence on why it mattered.",
      "To get started, answer who, what, when, where and why, and notice that this is the same kind of setting work you did with the five senses.",
      "Then {{draft}} the whole thing straight through, writing on every other line so you've got room to fix it later, and don't stop to polish a sentence.",
      "To bring it to life, run a movie of the event in your head and write what people said, what they looked like and what they did, and add what you saw, heard, smelled, tasted and felt.",
      "Go back to the question from the start: you tell an event so a stranger cares by choosing one small thing, planning its four parts, and telling why it mattered to you."
    ]}
  ],

  words: [
    ["Autobiographical incident", "A true story about one event in your own life that mattered to you.", 4],
    ["Prewriting", "The planning you do before you write a draft.", 6],
    ["Draft", "A first, rough version of a piece of writing that you will improve later.", 39],
    ["Framework", "The four-part plan: an attention-grabbing opening, background, events in order, and why it mattered.", 8]
  ],

  vocabQuestions: [
    { q: "What is an <i>autobiographical incident</i>?",
      choices: [
        "A true story about one event in your own life that mattered",
        "A made-up adventure",
        "A story about someone else's life",
        "A list of dates"
      ],
      right: 0, why: "It's one real event from your own life." },
    { q: "What is <i>prewriting</i>?",
      choices: [
        "Fixing spelling mistakes",
        "Copying a story out neatly",
        "The planning you do before a draft",
        "Reading your work to a friend"
      ],
      right: 2, why: "Prewriting is the planning before the draft." },
    { q: "What is a <i>draft</i>?",
      choices: [
        "A cold wind in the room",
        "A first rough version you will improve later",
        "The final copy",
        "A title for a story"
      ],
      right: 1, why: "A draft is a first version." },
    { q: "What is the <i>framework</i> for an autobiographical incident?",
      choices: [
        "A list of vocabulary",
        "A page number",
        "A four-part plan: opening, background, events in order, why it mattered",
        "A kind of punctuation"
      ],
      right: 2, why: "The four parts are the plan." }
  ],

  questions: [
    { q: "Which part of the framework do most writers forget?", find: [11],
      hint: "Read Four Parts.",
      choices: [
        "The opening",
        "The title",
        "The ending that says why it mattered",
        "The events"
      ], right: 2,
      why: "The ending says why the event mattered." },

    { q: "Which line in the opening tells the reader what the whole piece is about?", find: [17],
      hint: "Look at the first lines of the story.",
      choices: [
        "\"During this time, I succeeded in learning to read and write.\"",
        "\"The plan which I adopted was ...\"",
        "\"Mistress, in teaching me the alphabet ...\"",
        "\"This bread I used to bestow ...\""
      ], right: 0,
      why: "It's the plain statement that sets up the story." },

    { q: "What is the background in Douglass's piece?", find: [19],
      hint: "What stood in his way?",
      choices: [
        "He made friends with boys in the street.",
        "His mistress had started to teach him and then was told to stop.",
        "He took bread on errands.",
        "He learned the alphabet."
      ], right: 1,
      why: "The background tells what stood in his way." },

    { q: "How did Douglass pay for his lessons from the boys in the street?", find: [24],
      hint: "Look at the events.",
      choices: [
        "With coins",
        "With bread",
        "With letters",
        "With work on their ships"
      ], right: 1,
      why: "He gave bread and got what he called the bread of knowledge." },

    { q: "What does the last line of the excerpts tell the reader about why it mattered?", find: [25],
      hint: "An inch is a small amount and an ell is a long one.",
      choices: [
        "That bread is hard to find",
        "That once he had a small start in reading, nothing could stop him taking much more",
        "That his mistress was kind",
        "That the street was long"
      ], right: 1,
      why: "The inch was the alphabet, and the ell was everything he would learn after." },

    { q: "Which of these topics passes the three-question test best for a student who remembers it well and is happy to share it?", find: [35],
      hint: "Read Step One.",
      choices: [
        "My whole life so far",
        "The day I finally rode a bike without training wheels",
        "Everything that happened last year",
        "A story I made up"
      ], right: 1,
      why: "It's one event, remembered clearly, and shareable." },

    { q: "A new line: 'My little brother and I held our breath as the lights went out in the whole house.' Which part of the framework is it most likely to be?", find: [9],
      hint: "It starts in the middle of the action.",
      choices: [
        "A background paragraph",
        "An opening that grabs the reader's attention",
        "The ending about why it mattered",
        "A list of dates"
      ], right: 1,
      why: "Starting with something happening is a way to grab attention." },

    { q: "Another new line: 'I learned that being brave doesn't mean you aren't afraid.' Which part of the framework does it belong in?", find: [11],
      hint: "It says what the event meant.",
      choices: [
        "The opening",
        "The events, in order",
        "The background",
        "The ending that says why it mattered"
      ], right: 3,
      why: "It says what the event meant to the writer." }
  ],

  todo: { title: "What To Do Now", s: [
    "Before you start, take out your notebook and a pencil, and spend two minutes writing down every moment from the past few years that you still think about.",
    "Then work through the {c} word cards at the top of the page, {q} questions about the lesson, and {v} more questions about those words. {T} questions in all.",
    "When you're finished, pick one event, test it with the questions from Step One, and write the sentence on why it matters.",
    "Then plan it in four parts, with a note for your opening, a line of background, the events in order, and the ending, and write your first draft on every other line without stopping to fix it.",
    "If you get stuck on a question, tap Find It in the Story and read the line the page shows you.",
    "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] },
};
