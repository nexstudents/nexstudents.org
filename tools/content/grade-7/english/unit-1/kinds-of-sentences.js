/* english/kinds-of-sentences
   Grade 7 · english · unit 1. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry. */
'use strict';
module.exports = {
  id: "english/kinds-of-sentences",
  slug: "kinds-of-sentences",
  title: "Kinds of Sentences",
  unit: "English &middot; Unit 1 &middot; Lesson 1-1",
  /* Houghton Mifflin puts this first in Unit 1, The Sentence, at page 32.
     `seq` is the order; the `unit` string above is a label and is never parsed. */
  seq: { unit: 1, unitTitle: "The Sentence", n: 1 },
  shelf: { grades: [7], subject: "English",
    blurb: "Four kinds of sentences, four different jobs, and the one case where the punctuation lies to you.",
    contains: [
      "A Ground Control panel for the teacher, in Paul's own words",
      "The lesson read aloud, one line at a time, highlighted as it goes",
      "Four vocabulary cards, each with a check question",
      "Ten questions, including the command that ends in an exclamation point",
    ] },
  eyebrow: ["English", "Unit 1 &middot; Lesson 1-1", "The Sentence"],
  dek: "A statement, a question, a command and a shout all look like sentences. Only their job tells you which is which.",
  scripture: {
    ref: "Proverbs 25:11",
    text: "A word fitly spoken is like apples of gold in pictures of silver.",
  },

  /* Paul's Teacher Notes, verbatim. Same four-section shape the science lessons
     use, plus the generated Key Vocabulary block. */
  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will learn the four kinds of sentences and the punctuation that usually goes with each one: declarative, interrogative, imperative, and exclamatory."
      ]},
      { h: "Key Concepts", p: [
        "A declarative sentence makes a statement and usually ends with a period. An interrogative sentence asks a question and ends with a question mark. An imperative sentence gives a command or direction and usually ends with a period. An exclamatory sentence expresses strong feeling and ends with an exclamation point."
      ]},
      { h: "Where Students Get Stuck", p: [
        "The tricky part is commands with strong feeling. “Put your shoes away.” is an imperative sentence. “Get out of the way!” is also imperative because it gives a command, even though the exclamation point adds urgency."
      ]},
      { h: "Teaching Suggestion", p: [
        "Remind students that punctuation gives clues, but the purpose of the sentence tells us what kind it is. Also explain that exclamation points lose their power when we use them too often."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Four Sentences, Four Jobs", s: [
      "Imagine you are playing a game when someone walks into the room and says, “Dinner is ready.”",
      "You ask, “Can I finish this round?”",
      "Then you hear, “Put the controller down.”",
      "Suddenly someone yells, “The dog has your sandwich!”",
      "Those sentences are doing four different jobs.",
      "Let's find out what they are."
    ]},
    { title: "Declarative Sentences", s: [
      "A declarative sentence makes a statement.",
      "It gives information, tells a fact, or shares an idea.",
      "Declarative sentences usually end with a period.",
      "",
      "The game starts at seven.",
      "My brother finished the dishes.",
      "We studied Proverbs at church.",
      "",
      "Think of declarative as declare.",
      "You are declaring or telling something."
    ]},
    { title: "Interrogative Sentences", s: [
      "An interrogative sentence asks a question.",
      "It ends with a question mark.",
      "",
      "Did you finish your homework?",
      "Where is the basketball?",
      "Can we play one more round?",
      "",
      "If the sentence is asking for an answer, it is probably interrogative."
    ]},
    { title: "Imperative Sentences", s: [
      "An imperative sentence gives a command, direction, instruction, or request.",
      "It usually ends with a period.",
      "",
      "Clean your room.",
      "Pass me the basketball.",
      "Please open your Bible.",
      "",
      "Imperative sentences often leave out the subject because the sentence is speaking directly to you.",
      "When someone says, “Take out the trash,” the understood meaning is “You take out the trash.”",
      "",
      "But here is the tricky part.",
      "A command can also have strong feeling.",
      "Watch out!",
      "That is still an imperative sentence because it gives a command.",
      "The exclamation point simply shows urgency or strong feeling.",
      "",
      /* 🚨 PAUL'S OWN SENTENCE, LIFTED OUT OF HIS TEACHER NOTES, 2026-09-04.
         He asked for the imperative and exclamatory difference to be clearer:
         "it needs more clarification why a certain sentence is imperative over
         exclamatory." The rule that settles it was already written - it was just
         in the teacher panel, where only a parent reads it. Nothing invented;
         the line is moved to where the student meets the problem.
         ⚠️ The two sentences either side of it are mine, and they are signposts,
         not teaching. Say the word and they go. */
      "So how do you tell them apart when both end the same way?",
      "Punctuation gives clues, but the purpose of the sentence tells us what kind it is.",
      "Ask what the sentence is DOING.",
      "If it tells someone to do something, it is imperative, whatever mark is on the end."
    ]},
    { title: "Exclamatory Sentences", s: [
      "An exclamatory sentence expresses strong emotion or excitement.",
      "It ends with an exclamation point.",
      "",
      "That goal was incredible!",
      "I cannot believe we won!",
      "This is the best pizza ever!",
      "",
      "Exclamation points are powerful because they make a sentence feel louder or stronger.",
      "But if every sentence ends with one, they stop feeling special.",
      "Think of an exclamation point like shouting.",
      "You would not want to shout everything you say!",
      "Use it when the sentence really needs extra emotion."
    ],
    /* 🚨 EVERY LINE IN `s` HERE IS QUOTED FROM THE STORY ABOVE, and requireBoxes()
       in build-lessons.js fails the build if that ever stops being true. Paul:
       "an imperative sentence sound confusing ... it needs more clarification why
       a certain sentence is imperative over exclamatory." The answer was already
       in his own writing, two sections apart - the box just puts the two next to
       each other where the difference is visible instead of remembered.
       It sits after the exclamatory section on purpose: both kinds have to be
       taught before a comparison between them means anything. */
    box: {
      title: "Command or Feeling?",
      lead: "Both of these end with the same mark. Only one of them is telling you to do something.",
      cols: [
        { label: "Imperative", s: "Watch out!",
          why: "It gives a command." },
        { label: "Exclamatory", s: "That goal was incredible!",
          why: "It expresses strong emotion." }
      ],
      test: "Ask what the sentence is DOING. If it tells someone to do something, it is imperative, whatever mark is on the end."
    }},
    { title: "Words Have a Purpose", s: [
      "God gave us the ability to communicate, and the words we choose matter.",
      "Proverbs 25:11 says, “A word fitly spoken is like apples of gold in pictures of silver.”",
      "In other words, the right words used at the right time have value.",
      "",
      "The Bible itself contains statements, questions, commands, and powerful expressions of emotion.",
      "God uses language to teach, correct, encourage, warn, and communicate truth.",
      "",
      "Learning how sentences work helps us communicate our own thoughts clearly.",
      "Whether we are speaking to our family, answering a teacher, encouraging someone at church, or writing something important, we should think about what our words are meant to do.",
      "As Colossians 4:6 says, “Let your speech be alway with grace.”",
      "Good communication is not only about correct punctuation.",
      "It is also about using our words wisely."
    ]},
  ],

  /* ⚠️ Paul gave a definition AND a check question for all four words, which is
     better than the science lessons, where two cards had no check and the build
     had to warn. Nothing invented here. */
  words: [
    ["Declarative", "A declarative sentence makes a statement and usually ends with a period."],
    ["Interrogative", "An interrogative sentence asks a question and ends with a question mark."],
    ["Imperative", "An imperative sentence gives a command, direction, instruction, or request. It usually ends with a period, but strong commands can end with an exclamation point."],
    ["Exclamatory", "An exclamatory sentence expresses strong feeling and ends with an exclamation point."]
  ],

  /* 🚨 PAUL WROTE THESE WITH TWO OPTIONS EACH AND ALL FOUR ANSWERS WERE "A".
     A student spots that in thirty seconds. The pairs are his; only the ORDER
     is dealt, the same way the lesson questions already are. */
  vocabQuestions: [
    { q: "Which sentence is <i>declarative</i>?",
      choices: ["The service begins at ten.", "When does the service begin?"],
      right: 0, why: "It makes a statement." },
    { q: "Which sentence is <i>interrogative</i>?",
      choices: ["Where did you put the controller?", "Put the controller away."],
      right: 0, why: "It asks a question." },
    { q: "Which sentence is <i>imperative</i>?",
      choices: ["Please wash the dishes.", "The dishes are clean."],
      right: 0, why: "It gives a request or command." },
    { q: "Which sentence is <i>exclamatory</i>?",
      choices: ["That catch was amazing!", "Did you see that catch?"],
      right: 0, why: "It expresses strong feeling." }
  ],

  /* Part A, all ten. The four options are the same every time because the
     question is always which of the four kinds it is - so the ORDER is what
     gets dealt, not the wording.
     ⚠️ `find` points at the sentence in the reading that DEFINES that kind, so
     "find it in the story" sends him to the rule rather than to an example.
     ⚠️ Q8 "I cannot believe we won!" is word for word one of Paul's own
     exclamatory examples in the reading. Flagged to him; his call. */
  /* 🚨 findsAt = the number of STORY sentences these indexes were verified
     against. Change the reading and checkFinds() stops the build. Computed by
     walking the flattened list, never counted by hand. */
  /* 🚨 THE EXPLAINER. Drawn beside the reading, changing as the voice moves.
     Paul, 2026-09-04: "explaining how these sentences worked as it was reading
     it to you ... just like how you explained with the math problem", and the
     reason it exists: "basically make this a way for attention issue students
     to still stay engaged."
     🚨 EVERY EXAMPLE SENTENCE GETS ITS OWN FRAME. Paul: "like where you said did
     you finish your homework, and about the basket ball, can we play one more
     round should all show in the panel." He is right - the examples are the
     lesson. One picture per KIND meant the panel sat still through the three
     sentences that were doing the teaching, which is exactly when a student who
     is drifting needs something to change on screen.
     ⚠️ The first example of each kind is NOT listed separately: the definition's
     own frame already shows it, so a second entry would repaint the identical
     picture and read as the panel having frozen.
     `when` is the sentence that triggers it, written out in full - the build
     resolves it to an index and FAILS if it is missing, duplicated, or out of
     reading order. Never a hand-counted number.
     `body`/`ghost`/`mark` are DRAWN, so they are shaped for the diagram rather
     than quoted: "(You)" appears nowhere in the prose precisely because the
     whole point is that an imperative leaves the subject out.
     ⚠️ Paul wants generated art in here later. That is a new FIELD on a visual,
     not a new panel - the frame, the timing and the blanking already work. */
  visuals: [
    /* 🚨 THE OPENING FOUR. Paul: "if you are going to use \"\" then use as an
       example also." The hook quotes one of each kind before naming any of
       them, so the panel does the same: the label is his own framing verb from
       the sentence around it, not the grammar term. Calling the first one
       Declarative here would give away the answer to a lesson that has not
       asked the question yet, four sentences before "Let's find out what they
       are." */
    { when: "Imagine you are playing a game when someone walks into the room and says, “Dinner is ready.”",
      kind: "Someone Says", body: "Dinner is ready", mark: ".",
      note: "This one tells you something." },
    { when: "You ask, “Can I finish this round?”",
      kind: "You Ask", body: "Can I finish this round", mark: "?",
      note: "This one wants an answer back." },
    { when: "Then you hear, “Put the controller down.”",
      kind: "You Hear", body: "Put the controller down", mark: ".",
      note: "This one tells you to do something." },
    { when: "Suddenly someone yells, “The dog has your sandwich!”",
      kind: "Someone Yells", body: "The dog has your sandwich", mark: "!",
      note: "This one is all feeling." },
    /* 🚨 The paragraph rule cannot clear these two: the hook has no blank line
       in it, so "Those sentences are doing four different jobs" shares a
       paragraph with the four quotes and would keep the last one on screen.
       This is exactly what `blank` is for - the paragraph is the default unit,
       and an explicit blank is how a lesson overrides it mid-paragraph. */
    { when: "Those sentences are doing four different jobs.", blank: true },

    { when: "A declarative sentence makes a statement.",
      kind: "Declarative", body: "The game starts at seven", mark: ".",
      note: "It declares something. A statement ends with a period." },
    { when: "The game starts at seven.",
      kind: "Declarative", body: "The game starts at seven", mark: ".",
      note: "It declares something. A statement ends with a period." },
    { when: "My brother finished the dishes.",
      kind: "Declarative", body: "My brother finished the dishes", mark: ".",
      note: "Telling you what happened. Still a statement." },
    { when: "We studied Proverbs at church.",
      kind: "Declarative", body: "We studied Proverbs at church", mark: ".",
      note: "Sharing a fact. Nothing is being asked." },

    { when: "An interrogative sentence asks a question.",
      kind: "Interrogative", body: "Did you finish your homework", mark: "?",
      note: "It asks for an answer, so it ends with a question mark." },
    { when: "Did you finish your homework?",
      kind: "Interrogative", body: "Did you finish your homework", mark: "?",
      note: "It asks for an answer, so it ends with a question mark." },
    { when: "Where is the basketball?",
      kind: "Interrogative", body: "Where is the basketball", mark: "?",
      note: "It asks where. It is waiting on an answer." },
    { when: "Can we play one more round?",
      kind: "Interrogative", body: "Can we play one more round", mark: "?",
      note: "Asking permission is still asking." },

    { when: "An imperative sentence gives a command, direction, instruction, or request.",
      kind: "Imperative", ghost: "(You)", body: "Clean your room", mark: ".",
      note: "It gives a command. The subject is you, even though it is not written." },
    { when: "Clean your room.",
      kind: "Imperative", ghost: "(You)", body: "Clean your room", mark: ".",
      note: "It gives a command. The subject is you, even though it is not written." },
    { when: "Pass me the basketball.",
      kind: "Imperative", ghost: "(You)", body: "Pass me the basketball", mark: ".",
      note: "A request is a command too. The subject is still you." },
    { when: "Please open your Bible.",
      kind: "Imperative", ghost: "(You)", body: "Please open your Bible", mark: ".",
      note: "Please makes it polite. It does not stop it being a command." },

    /* 🚨 THE BEST DEMONSTRATION OF THE GHOST IN THE WHOLE LESSON, and it was
       missing. Paul: "you are missing the take out the trash part."
       ⚠️ Triggered on the sentence BEFORE the example, not on the example
       itself, so the drawing is already on screen when he hears "the understood
       meaning is You take out the trash". Arriving with the punchline is worse
       than arriving with the setup. */
    { when: "Imperative sentences often leave out the subject because the sentence is speaking directly to you.",
      kind: "The Understood Subject", ghost: "(You)", body: "Take out the trash", mark: ".",
      note: "Nobody writes the word you. Everybody hears it." },

    /* The confusable pair, drawn at the exact sentence where Paul raises it. */
    { when: "Watch out!",
      kind: "Still Imperative", ghost: "(You)", body: "Watch out", mark: "!",
      note: "Same command, stronger feeling. The mark changed. The job did not." },

    { when: "An exclamatory sentence expresses strong emotion or excitement.",
      kind: "Exclamatory", body: "That goal was incredible", mark: "!",
      note: "Nothing is being asked or ordered. It only shows how you feel." },
    { when: "That goal was incredible!",
      kind: "Exclamatory", body: "That goal was incredible", mark: "!",
      note: "Nothing is being asked or ordered. It only shows how you feel." },
    { when: "I cannot believe we won!",
      kind: "Exclamatory", body: "I cannot believe we won", mark: "!",
      note: "Strong feeling. Nobody is being told to do anything." },
    { when: "This is the best pizza ever!",
      kind: "Exclamatory", body: "This is the best pizza ever", mark: "!",
      note: "Excitement about a thing, not a command about it." },

    /* 🚨 A deliberate blank. The closing section is about words and Proverbs,
       not about one sentence, and leaving the last drawing standing there would
       read as a claim about what is on screen now. */
    { when: "God gave us the ability to communicate, and the words we choose matter.",
      blank: true },

    /* 🚨 THE VERSES GET FRAMES TOO. Paul, 2026-09-04: "bible verses should be
       included in the panel."
       `verse: true` drops the grammar furniture - no punctuation chip, no
       understood subject - because a verse is being quoted, not diagrammed.
       ⚠️ The `note` under each is PAUL'S OWN next sentence, not a gloss I wrote.
       Explaining scripture in my words when he has already explained it in his
       is the one place on this page where inventing prose would actually
       matter. */
    { when: "Proverbs 25:11 says, “A word fitly spoken is like apples of gold in pictures of silver.”",
      kind: "Proverbs 25:11", verse: true,
      body: "A word fitly spoken is like apples of gold in pictures of silver.",
      note: "In other words, the right words used at the right time have value." },

    { when: "As Colossians 4:6 says, “Let your speech be alway with grace.”",
      kind: "Colossians 4:6", verse: true,
      body: "Let your speech be alway with grace.",
      note: "Good communication is not only about correct punctuation. It is also about using our words wisely." }
  ],
  findsAt: 56,
  questions: [
    { q: "The game begins after dinner.", find: [6],
      hint: "Read the Declarative section again. What job is this sentence doing?",
      choices: ["Declarative", "Interrogative", "Imperative", "Exclamatory"], right: 0,
      why: "It makes a statement and ends with a period." },
    { q: "Did you feed the dog?", find: [14],
      hint: "Read the Interrogative section again.",
      choices: ["Declarative", "Interrogative", "Imperative", "Exclamatory"], right: 1,
      why: "It asks a question." },
    { q: "Please put your shoes away.", find: [20],
      hint: "Read the Imperative section again.",
      choices: ["Declarative", "Interrogative", "Imperative", "Exclamatory"], right: 2,
      why: "It gives a polite command or request." },
    { q: "That was an incredible shot!", find: [36],
      hint: "Read the Exclamatory section again.",
      choices: ["Declarative", "Interrogative", "Imperative", "Exclamatory"], right: 3,
      why: "It expresses strong excitement." },
    { q: "We are studying the book of John tonight.", find: [6],
      hint: "Is this telling you something, or asking you something?",
      choices: ["Declarative", "Interrogative", "Imperative", "Exclamatory"], right: 0,
      why: "It gives information." },
    { q: "Where is my other sock?", find: [14],
      hint: "What mark is on the end, and what does that mark mean?",
      choices: ["Declarative", "Interrogative", "Imperative", "Exclamatory"], right: 1,
      why: "It asks a question." },
    { q: "Turn the television down.", find: [20],
      hint: "Who is this sentence speaking to?",
      choices: ["Declarative", "Interrogative", "Imperative", "Exclamatory"], right: 2,
      why: "It gives a command." },
    { q: "I cannot believe we won!", find: [36],
      hint: "Is anyone being told to do something here?",
      choices: ["Declarative", "Interrogative", "Imperative", "Exclamatory"], right: 3,
      why: "It expresses strong excitement." },
    { q: "The team practices every Tuesday.", find: [6],
      hint: "Nothing is being asked and nobody is being told to do anything.",
      choices: ["Declarative", "Interrogative", "Imperative", "Exclamatory"], right: 0,
      why: "It makes a statement." },
    /* 🚨 THE HARD ONE, and it is deliberately last. The exclamation point says
       exclamatory and the job says imperative. The job wins. Paul's teacher
       notes set this trap up on purpose. */
    { q: "Get out of the way!", find: [30],
      hint: "The mark on the end is not the test. Ask what the sentence is telling someone to DO.",
      choices: ["Declarative", "Interrogative", "Imperative", "Exclamatory"], right: 2,
      why: "It commands someone to move. The exclamation point adds urgency, but it is still a command." }
  ],

  /* Paul's own closing task. ⚠️ The full Your Turn writing task, with the
     underlining and the challenge, is the WORKSHEET. This is the on-screen
     instruction only. */
  /* ⚠️ REWRITTEN 2026-09-04. The first version opened "That is the reading done.
     Two things are left, and they both happen today," and Paul read it back to me:
     "that is the reading done... really?" He was right - it read like a manual
     narrating itself. This is mine, not his, so it was free to change. */
  todo: { title: "What To Do Now", s: [
      /* 🚨 {t} {q} {v} are DERIVED. Paul: "you said to answer the 10 questions
         below but its more than that its actually 14 questions and four vocab."
         It used to say "ten" and "four" in two separate lines and never gave the
         total, so the student was told the job was ten. The count now comes from
         the lesson. See checkTodoCounts() in lesson-instructions.js. */
      "{Q} questions about the story, then {c} word cards with {v} more questions under them. {T} questions in all.",
      "For each sentence, decide what it is doing: telling, asking, commanding, or shouting.",
      "The mark on the end is a clue, not the answer.",
      "Do the word cards last.",
      "Tap each card, then answer the question underneath it.",
      "If you get stuck, go back to the section with that name and read its first line again."
  ] },
};
