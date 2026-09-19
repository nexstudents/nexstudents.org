/* english/finding-the-subject
   Grade 7 · english · unit 1. Its home is this folder.
   Built by tools/build-english.js. Edit the lesson here, not in the registry.

   🚨 THE PROSE IS A DRAFT, NOT PAUL'S VOICE. Built 2026-09-19 by Sonnet from
   Houghton Mifflin English Grade 7 pp45-47 (leaf n61-n63), then given the /natural
   pass. His prose is still the source → BEHAVIOR.md.

   🚨 THE SENTENCES ARE MINE. The book's examples (the bus, the subway, the
   Machmeter script) are NOT reused. One world top to bottom, a morning at a lake,
   same as the airfield lesson used one world.

   ⚠️ THE PRACTICE NEVER ASKS FOR AN IMPERATIVE'S SUBJECT. In "Grab the rope" the
   subject is you and you is not in the sentence, so there is nothing to tap. The
   prose teaches it and the practice leaves it out on purpose.

   ⚠️ EVERY VERB IN PART A AND PART B IS A SINGLE WORD. A question like "Does the
   water feel cold" makes a two-word verb and the tap ambiguous, so the questions
   use is/are, one word.

   🚨 THE VERSE IS A WORKING CHOICE, NOT PAUL'S. Proverbs 18:13 fits (read the
   whole sentence before you answer it). The choice of scripture is his → review
   queue. */
'use strict';
module.exports = {
  id: "english/finding-the-subject",
  slug: "finding-the-subject",
  title: "Finding the Subject",
  unit: "The Sentence · U1-L6",
  eyebrow: "English 7",
  dek: "Most sentences say the subject first, and then some don't. Here is how to find it when it's hiding behind the verb.",

  plan: {
    objective: "Find the simple subject of a sentence when it comes after the verb: in an inverted sentence, in a question, and in a sentence that begins with here or there.",
    markers: [
      "QUOTED, Houghton Mifflin p45: 'The sentences that you write are usually in natural English word order. The subject comes before the predicate. Sometimes, though, you write sentences in which the subject follows all or part of the predicate. This is called inverted order.'",
      "QUOTED, chart, Sentences in Inverted Order: inverted declarative sentence; declarative sentence beginning with here or there ('The subject is never here or there.'); interrogative sentence.",
      "QUOTED, p45: 'It may be easier to find the subject of a sentence in inverted order if you rearrange the sentence so that it is in natural order.'",
      "QUOTED, Tip, p46: 'Another way to find the subject is to find the verb first; then ask, Who or what did this?'",
      "QUOTED, p46: 'The subject of an imperative sentence is always you. Because you does not appear in the sentence, the subject is said to be understood.'",
      "QUOTED, Summing Up, p46: 'A sentence in which the subject follows the verb is in inverted order.' / 'In an imperative sentence, you is the understood subject.'",
    ],
    method: "REARRANGE IT. The book's whole move is that a hidden subject shows itself when you turn the sentence back into natural order, and that finding the verb first and asking who or what did it is the second way in. Both are digitized as the same green and orange two-word test the last two lessons use, with the target now sitting AFTER the verb.",
    exampleOnly: [
      "the lake, the dock, the canoe, the loon, the rope - WORLD: one morning at a lake, mine, replacing the book's bus and subway",
      "the Rosa Parks warm-up sentence and the Machmeter script - WORLD: the book's own examples, deliberately not reused",
    ],
    digitize: "Part A and Part B are the same choose and find mechanics as 1-4, now asking for the subject in sentences where it is not first. The imperative is taught in prose only.",
    unclear: [],
  },

  shelf: {
    grades: [7],
    subject: "English",
    blurb: "The subject usually comes first, and then a sentence turns around and hides it. Find it anyway.",
    contains: [
      "A morning at a lake, read aloud one line at a time",
      "The same story again with the subject and the verb marked in color",
      "Worked examples that say how you could have known",
      "One part where the words are laid out, and one where they are not"
    ]
  },

  seq: { unit: 1, unitTitle: "The Sentence", n: 6 },

  ground: {
    whatItIs: "Most sentences put the subject before the verb, but some turn the order around: a sentence that starts with a place, a question, or a sentence that opens with here or there. The subject is still the one word the sentence is about, it has just moved behind the verb.",
    whyItMatters: "A student who can only find a subject by looking at the start of a sentence will get every question and every here or there sentence wrong. It is also the skill behind subject and verb agreement in the lessons that follow, because you cannot make a verb agree with a word you have not found.",
    commonMistake: "Choosing here or there as the subject. In Here comes the first light, a student marks here because it comes first. Here and there are never the subject, so ask who or what does the verb, and the answer is light.",
    whenStuck: [
      "Turn the sentence back into natural order by moving the verb behind the subject, and read it out loud.",
      "Find the verb first, then ask who or what did it.",
      "For a question, answer it in your head as a statement: Where is the rope? becomes The rope is somewhere."
    ]
  },

  rule: {
    short: "Sometimes the subject comes after the verb. Turn the sentence back around, or find the verb and ask who or what did it.",
    long: "Most sentences say the subject first. In an <b>inverted</b> sentence the subject follows all or part of the predicate, and you will see it in three places: a sentence that starts with a place, a sentence that starts with <b>here</b> or <b>there</b>, and most questions. The subject is never <b>here</b> or <b>there</b>. If you turn the sentence back into natural order the subject shows itself, and if that doesn't work you can find the verb and ask who or what did it.",
    test: "Turn it around. Put the subject first and the verb after it. If the new sentence says the same thing, the word you moved to the front is the subject."
  },

  parts: [
    {
      title: "A Morning at the Lake",
      s: [
        "The cabin door creaks open just before sunrise.",
        "At the end of the dock sits an old green canoe.",
        "Here comes the first light of the morning.",
        "There are two paddles under the seat.",
        "Is the water cold yet?",
        "Where is the rope?",
        "Grab the rope before the sun climbs over the hill.",
        "Out on the lake glides a single loon."
      ]
    },
    {
      title: "Turn It Around",
      s: [
        "That was a morning at the lake, and it was a tricky one.",
        "Most of those sentences hid their subject, and now you're going to find where it went.",
        "",
        "Start with the easy one.",
        "",
        "[ex] The cabin door creaks open just before sunrise.",
        "",
        "The door comes first and the verb comes after it, which is natural order, and you already know how to find both words.",
        "",
        "Now take the sentence that ran the other way.",
        "",
        "[ex] At the end of the dock sits an old green canoe.",
        "",
        "The sentence starts with a place, and a place is almost never what a sentence is about.",
        "So turn it around and put the thing that sits first, and you get this.",
        "",
        "[ex] An old green canoe sits at the end of the dock.",
        "",
        "The canoe is your simple subject, and it was hiding behind the verb the whole time.",
        "",
        "Here is a second way in, and it's the one to try when turning it around doesn't feel natural.",
        "Find the verb first, then ask who or what did it.",
        "In our sentence the verb is sits, and the thing that sits is the canoe.",
        "",
        "Next come the sentences that start with here or there.",
        "",
        "[ex] Here comes the first light of the morning.",
        "",
        "You might be tempted to say the subject is here, because it's the first word, but here and there are never the subject.",
        "They only point at a place, so ask what does the coming and you get light.",
        "",
        "Questions work the same way, because they nearly always flip the order.",
        "",
        "[ex] Where is the rope?",
        "",
        "Say it as a statement in your head, like this.",
        "",
        "[ex] The rope is somewhere.",
        "",
        "Now the subject drops out at once.",
        "",
        "One more kind, and this one is a little strange.",
        "",
        "[ex] Grab the rope before the sun climbs over the hill.",
        "",
        "That's a command, and in a command the subject is always you.",
        "You isn't written down, so we say it's understood, and that's why you can't tap it on the screen and why the practice below leaves it out."
      ]
    },
    {
      title: "Do Not Answer Before You Hear",
      s: [
        "Finding a hidden subject may feel like a small skill, but it stops a very big mistake.",
        "If you reach for the first word, you'll give the wrong answer to a sentence you haven't finished reading.",
        "",
        "[verse] Proverbs 18:13 says, “He that answereth a matter before he heareth it, it is folly and shame unto him.”",
        "",
        "Read to the end of the sentence, find the verb, and then decide who or what it's about.",
        "That's the habit, and it will serve you long after you've forgotten the word inverted."
      ]
    }
  ],
  /* The story again, with both words lit. ⚠️ Each sentence must appear in
     `parts` word for word; the build compares them and fails if they drift. */
  showcaseHead: "The Story, Marked",
  showcase: [
    { sentence: "At the end of the dock sits an old green canoe.",
      subject: "canoe", predicate: "sits",
      note: "The sentence starts with a place, and the canoe is hiding behind the verb." },
    { sentence: "Here comes the first light of the morning.",
      subject: "light", predicate: "comes",
      note: "Here is never the subject. Ask what does the coming and you get light." },
    { sentence: "There are two paddles under the seat.",
      subject: "paddles", predicate: "are",
      note: "There only points at a place. Two describes how many, so paddles is the word." },
    { sentence: "Out on the lake glides a single loon.",
      subject: "loon", predicate: "glides",
      note: "Turn it around: a single loon glides out on the lake." }
  ],

  /* The worked cases, with the reasoning spelled out. Different sentences from
     the showcase so nothing is explained twice. */
  examples: [
    { sentence: "Is the water cold yet?",
      subject: "water", predicate: "Is",
      why: "Say it as a statement and it becomes the water is cold yet. The water is what the question is about." },
    { sentence: "Where is the rope?",
      subject: "rope", predicate: "is",
      why: "Where isn't the subject, it only asks about a place. Turn it around into the rope is somewhere, and the rope is what's left." },
    { sentence: "Near the shore floats a red canoe.",
      subject: "canoe", predicate: "floats",
      why: "Shore is a noun and it sits right in front of the verb, which makes it a trap. Ask what floats and the answer is canoe." },
    { sentence: "There is a heron by the reeds.",
      subject: "heron", predicate: "is",
      why: "There is never the subject. Find the verb, then ask who or what is there, and the answer is a heron." }
  ],

  labels: {
    tagChoose: "Pick the word", tagChooseDone: "Got it",
    tagFind: "Tap the word", tagFindDone: "Found it",
    askPrefix: "Which word is the", askSubject: "simple subject", askPredicate: "simple predicate",
    wrongSubject: "Not that one. Turn the sentence around, or find the verb and ask who or what does it.",
    wrongPredicate: "Not that one. Find the word saying what the subject does or is.",
    beingCheck: false
  },

  practiceNote: "Two parts, like a worksheet. Part A lays the words out for you. Part B does not. A wrong answer tells you why and lets you go again, so nothing here counts against you.",

  /* PART A. The words are offered. ⚠️ Every option has to be a word in its own
     sentence. `ask` alternates so the position of the answer never becomes the
     answer. */
  choose: [
    { sentence: "Behind the boathouse stands a tall pine.", ask: "subject",
      word: "pine", options: ["boathouse", "stands", "tall", "pine"],
      why: "Boathouse sits in front of the verb, which makes it tempting. The sentence is about the pine that stands there." },
    { sentence: "Here comes the last swimmer.", ask: "predicate",
      word: "comes", options: ["Here", "comes", "last", "swimmer"],
      why: "Comes is what the swimmer does. Here only points at a place, so it's never the verb or the subject." },
    { sentence: "There is a small fire on the beach.", ask: "subject",
      word: "fire", options: ["There", "is", "small", "fire"],
      why: "There is a pointing word and never the subject. Ask what is there and the answer is a fire." },
    { sentence: "Is the dock slippery today?", ask: "predicate",
      word: "Is", options: ["Is", "dock", "slippery", "today"],
      why: "Is is the verb, and it comes first because the sentence is a question. Turn it around and it reads the dock is slippery." },
    { sentence: "Over the water drifts a thin fog.", ask: "subject",
      word: "fog", options: ["Over", "water", "drifts", "fog"],
      why: "Water is a noun beside the verb, and it's only saying where. Drifts is the verb, and the thing that drifts is the fog." },
    { sentence: "Where are the oars?", ask: "predicate",
      word: "are", options: ["Where", "are", "the", "oars"],
      why: "Are is the verb, and oars is the subject you get when you turn the question into a statement." }
  ],

  /* PART B. Nothing is offered. ⚠️ `answer` is recomputed from `word` by the
     build, and the spread check refuses a set where one position holds more
     than 40% of the answers. */
  practice: [
    { sentence: "Across the bay sails a white boat.", ask: "subject",
      word: "boat", answer: 6,
      why: "Bay is a noun and it comes first, but it only says where. Ask what sails and the answer is the boat." },
    { sentence: "There are three geese on the lawn.", ask: "predicate",
      word: "are", answer: 1,
      why: "Are is the verb here, and there is only pointing at a place." },
    { sentence: "Here is my fishing rod.", ask: "subject",
      word: "rod", answer: 4,
      why: "Here is the pointing word. Find the verb is, then ask what is here, and the answer is the rod." },
    { sentence: "Is the campfire still warm?", ask: "predicate",
      word: "Is", answer: 0,
      why: "Is is the verb and it comes first in a question. Turn it around and it reads the campfire is still warm." },
    { sentence: "On the porch rests a sleeping dog.", ask: "subject",
      word: "dog", answer: 6,
      why: "The porch is where, and it's not what the sentence is about. Ask who or what rests, and the answer is the dog." },
    { sentence: "Where is the map?", ask: "predicate",
      word: "is", answer: 1,
      why: "Is is the verb. The map is the subject you find by turning the question into a statement." }
  ],

  todo: {
    title: "Your Turn",
    s: [
      "Listen to the story about the lake, then read the marked sentences underneath it.",
      "Part A lays the words out for you, and one of them is the word the question asks for.",
      "Part B gives you nothing but the sentence, so you have to find the word on your own.",
      "When a sentence looks strange, turn it around and put the subject first, or find the verb and ask who or what does it.",
      "Remember that here and there are never the subject, and that in a command the subject is you, which you can't tap.",
      "If you get one wrong, the page tells you why and lets you go again, so nothing here counts against you."
    ]
  }
};
