/* english/main-idea-stated-or-implied
   Grade 7 · English · Unit 2 (Who Am I?), lesson 5. Built by tools/lessons.js.
   Edit the lesson here, not in the registry.

   🚨 DRAFT PROSE, marked per /lesson: the teaching sections, the Teacher Notes, the
   questions and the scripture choice are Claude's, written 2026-10-05 on Sonnet to the
   /teach-plan block in `plan` below and given the /natural pass. Paul has not read them.
   The scripture (Proverbs 22:1) is a suggestion, his call.

   The STORY is Booker T. Washington's "Up from Slavery" (1901), Chapter II, "Boyhood
   Days", from Project Gutenberg #2376 (verified: the title page reads "Up from
   Slavery: An Autobiography", by Booker T. Washington). It's the author's words
   exactly, split to one sentence per entry, with these changes only: two British
   spellings made American (honored, color), the single italicized A in "or rather
   A name" printed plain and lowercase, and one em dash turned into a comma. The
   excerpt is four paragraphs from the chapter: the cap his mother sewed, the lesson he
   drew from it, how he came to be called Booker Washington, and his thought about
   ancestry. The paragraphs between them are left out, and so is the rest of the
   chapter. It stands in for Holt's "Names/Nombres" by Julia Alvarez, which is
   copyrighted, and keeps the same theme: a name and who you are.

   ⚠️ THE STORY PICK IS CLAUDE'S; the plan says it goes to the review queue for Paul to
   swap. The fourth paragraph's closing sentence is a stated main idea of its own and
   the first paragraph states none, which is why the four were chosen together.

   ⚠️ THE PACKET WAS THIN on the full question list in Holt's Names/Nombres selection,
   so the questions are ours. The dangling-modifier language page, the pen-name
   exercise and the book-cover art task are left out.

   ⚠️ Added from the record: Washington was born into slavery in 1856 and was free when
   he started school in West Virginia, which the lesson says in one line before the
   story. */
'use strict';
module.exports = {
  id: "english/main-idea-stated-or-implied",
  slug: "main-idea-stated-or-implied",
  title: "Main Idea, Stated or Implied",
  unit: "Literature · U2-L5",
  seq: { unit: 2, unitTitle: "Who Am I?", n: 5 },

  plan: {
    objective: "Find the main idea of a passage, whether the writer states it directly or leaves it implied, and support it with details.",
    markers: [
      "BOOK (paraphrased), Holt Elements of Literature p144, the Main Idea element: the main idea is the most important thing a writer has to say in a paragraph or an entire selection, and it may be directly stated or implied.",
      "BOOK (paraphrased), objectives: identify the stated or implied main idea of an autobiographical essay.",
      "BOOK (paraphrased), Before You Read, The Name Game: how does your name shape how you and others see you?",
    ],
    method: "ASK 'WHAT'S THE ONE THING THE WRITER MOST WANTS ME TO UNDERSTAND?' If a sentence says it, that's a stated main idea. If none does, add up the details and say it yourself, in your own words, and check it against every detail.",
    exampleOnly: [
      "The bakery on a Saturday and the girl packing her bag. They're our own worlds for the method. The story is Booker T. Washington's and the skill is the lesson, not the cap.",
      "Holt's selection is Names/Nombres by Julia Alvarez, which is copyrighted, so a public-domain autobiography about a name and who you are carries the skill. World: Up from Slavery.",
    ],
    digitize: "Reading engine on a public-domain autobiography with one paragraph that states its main idea and one that implies it. Questions ask for the main idea and for the details that support it. Written: the main idea of a paragraph from the student's own reading, with two supporting details.",
    unclear: [
      "Which public-domain autobiography. Not a teaching question, so it does not stop the build. The pick goes in the review queue for Paul to swap.",
    ],
  },
  natural: "2026-10-05",
  findsAt: 51,

  shelf: { grades: [7], subject: "English",
    blurb: "A boy starts school with no cap and only one name, and his mother and his own quick thinking solve both. How to find the main idea, whether the writer says it or you have to.",
    contains: [
      "Teacher Notes written for whoever is teaching it",
      "Booker T. Washington's account of his first days at school, read aloud one line at a time",
      "Four vocabulary cards, each with a check question",
      "Story questions about stated and implied main ideas",
      "A main idea and two supporting details to write from your own reading, on paper",
    ] },
  eyebrow: ["English 7", "U2-L5", "Who Am I?"],
  dek: "Every paragraph is trying to tell you one thing. Sometimes the writer says it outright, and sometimes you have to put it together yourself.",
  scripture: {
    ref: "Proverbs 22:1",
    text: "A good name is rather to be chosen than great riches, and loving favour rather than silver and gold.",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will learn that the main idea is the most important thing a writer has to say, tell a stated main idea from an implied one, state an implied main idea in their own words, check it against the supporting details, and apply all of it to Booker T. Washington's account of his first days at school."
      ]},
      { h: "Key Concepts", p: [
        "The main idea of a paragraph is what all of its sentences add up to. A stated main idea is a sentence you can point to, and an implied one is a sentence the student has to write.",
        "A good main idea fits every detail. If it covers only one, it's too narrow, and if it could sit on top of any paragraph on the topic, it's too broad."
      ]},
      { h: "Where Students Get Stuck", p: [
        "Choosing a detail instead of the main idea. The cap is a detail, and the point about not pretending to be what you aren't is the main idea.",
        "Looking for a sentence that doesn't exist. An implied main idea isn't on the page, so the student has to put it together and say it."
      ]},
      { h: "Teaching Suggestion", p: [
        "Choose a short paragraph from anything the student is reading and have them cover it up and say its main idea out loud first, then find the sentence that says it, if there is one. The written task at the end of the lesson is the same exercise on paper.",
        "Washington was born into slavery in 1856 and was free when he started school in West Virginia. The lesson says this in one line before the excerpt, and it's added from the historical record."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "So What's Your Point?", s: [
      "A friend tells you a long story about her weekend: the bus was late, her phone was dead, the store was closed, and then it started to rain.",
      "By the end you're waiting for the point, and you finally ask, so what are you trying to tell me?",
      "She says that nothing went right and she wants to start the weekend over, and now the whole story makes sense, because every detail was holding that up.",
      "Every paragraph you read has a point like that, so how do you find it when nobody tells you?"
    ]},

    { title: "The One Thing", s: [
      "The {{main idea}} of a paragraph, or of a whole selection, is the most important thing the writer has to say.",
      "Everything else in the paragraph is there to hold it up, and those pieces are the {{supporting details}}.",
      "To find it, ask one question as you read: what's the one thing the writer most wants me to understand?",
      "A writer can make the main idea easy to find, or can leave it for you to work out, and the next two sections show both."
    ]},

    { title: "When the Writer Says It", s: [
      "A {{stated}} main idea is one you can put your finger on, because the writer has written a sentence that says it, and that sentence is often the first one or the last one in a paragraph.",
      "",
      "[ex] The bakery on Elm Street is the busiest place in town on Saturday morning.",
      "[ex] By seven the line is out the door, the ovens have run for three hours, and the owner is handing out samples to people still waiting.",
      "",
      "The first sentence is the stated main idea, and the second is a detail that backs it up, since a line out the door at seven is exactly what a busy bakery looks like.",
      "When you find a sentence like that, check it against the rest of the paragraph, because a good main idea has to cover all of the details and not just one."
    ]},

    { title: "When You Have to Say It", s: [
      "An {{implied}} main idea is one that no sentence says, and the writer trusts you to add up the details and see the point.",
      "",
      "[ex] Dana zipped her backpack on Sunday night.",
      "[ex] She set her shoes by the door, laid her clothes over the chair, and checked the map one more time before she turned out the light.",
      "",
      "No sentence there says that Dana is getting ready for something she cares about, but every detail points the same way, and you can say it yourself in one line of your own words.",
      "To test what you've written, hold it up against each detail and ask whether it fits, and if it only fits one of them it's too narrow, while if it would fit any paragraph about school it's too broad."
    ]},

    { title: "A Boy and His Name", s: [
      "Booker T. Washington was born into slavery in 1856 and was a free boy when he started school for the first time, in West Virginia, and he wrote the story of his life in a book called Up from Slavery.",
      "In the pages ahead he runs into two problems on the same first day: he has no cap, and he has only one name.",
      "Read each paragraph and ask what the one thing is, and then look for a sentence that says it.",
      "In one of these paragraphs a sentence states the main idea outright, and in another you'll have to say it yourself."
    ]},

    { title: "Two Difficulties", s: [
      "[story] When, however, I found myself at the school for the first time, I also found myself confronted with two other difficulties.",
      "In the first place, I found that all the other children wore hats or caps on their heads, and I had neither hat nor cap.",
      "In fact, I do not remember that up to the time of going to school I had ever worn any kind of covering upon my head, nor do I recall that either I or anybody else had even thought anything about the need of covering for my head.",
      "But, of course, when I saw how all the other boys were dressed, I began to feel quite uncomfortable.",
      "As usual, I put the case before my mother, and she explained to me that she had no money with which to buy a “store hat,” which was a rather new institution at that time among the members of my race and was considered quite the thing for young and old to own, but that she would find a way to help me out of the difficulty.",
      "She accordingly got two pieces of “homespun” (jeans) and sewed them together, and I was soon the proud possessor of my first cap.",
      "",
      "[story] The lesson that my mother taught me in this has always remained with me, and I have tried as best as I could to teach it to others.",
      "I have always felt proud, whenever I think of the incident, that my mother had strength of character enough not to be led into the temptation of seeming to be that which she was not, of trying to impress my schoolmates and others with the fact that she was able to buy me a “store hat” when she was not.",
      "I have always felt proud that she refused to go into debt for that which she did not have the money to pay for.",
      "Since that time I have owned many kinds of caps and hats, but never one of which I have felt so proud as of the cap made of the two pieces of cloth sewed together by my mother.",
      "I have noted the fact, but without satisfaction, I need not add, that several of the boys who began their careers with “store hats” and who were my schoolmates and used to join in the sport that was made of me because I had only a “homespun” cap, have ended their careers in the penitentiary, while others are not able now to buy any kind of hat.",
      "",
      "[story] My second difficulty was with regard to my name, or rather a name.",
      "From the time when I could remember anything, I had been called simply “Booker.”",
      "Before going to school it had never occurred to me that it was needful or appropriate to have an additional name.",
      "When I heard the school-roll called, I noticed that all of the children had at least two names, and some of them indulged in what seemed to me the extravagance of having three.",
      "I was in deep perplexity, because I knew that the teacher would demand of me at least two names, and I had only one.",
      "By the time the occasion came for the enrolling of my name, an idea occurred to me which I thought would make me equal to the situation; and so, when the teacher asked me what my full name was, I calmly told him “Booker Washington,” as if I had been called by that name all my life; and by that name I have since been known.",
      "Later in my life I found that my mother had given me the name of “Booker Taliaferro” soon after I was born, but in some way that part of my name seemed to disappear and for a long while was forgotten, but as soon as I found out about it I revived it, and made my full name “Booker Taliaferro Washington.”",
      "I think there are not many men in our country who have had the privilege of naming themselves in the way that I have.",
      "",
      "[story] More than once I have tried to picture myself in the position of a boy or man with an honored and distinguished ancestry which I could trace back through a period of hundreds of years, and who had not only inherited a name, but fortune and a proud family homestead; and yet I have sometimes had the feeling that if I had inherited these, and had been a member of a more popular race, I should have been inclined to yield to the temptation of depending upon my ancestry and my color to do that for me which I should do for myself.",
      "Years ago I resolved that because I had no ancestry myself I would leave a record of which my children would be proud, and which might encourage them to still higher effort."
    ]},

    { title: "Finding the Ideas", s: [
      "Take the paragraphs one at a time, and begin with the first, the one about the cap.",
      "No sentence in it says what it's about, so the main idea is implied: a boy had no cap, and his mother, with no money, found a way to help him anyway.",
      "The second paragraph is the opposite, because its second sentence states the main idea outright, that his mother had the strength of character not to seem to be something she wasn't.",
      "The third paragraph gives you details of how he got his name, and its last sentence points at the main idea, that he'd had the unusual privilege of naming himself.",
      "The last paragraph looks beyond the cap and the name and states the idea that ties the whole selection together: because he had no ancestry to lean on, he would build a record his children could be proud of.",
      "",
      "[verse] Proverbs 22:1 says, “A good name is rather to be chosen than great riches, and loving favour rather than silver and gold.”",
      "",
      "That proverb is about a good name, meaning a good reputation, and not about what you're called, but it fits a boy who made up his own surname and then spent his life making it worth something.",
      "Notice that the main idea of the whole excerpt isn't stated in any one sentence, and it's yours to say: what a person makes of a name matters more than the name he was given."
    ]}
  ],

  words: [
    ["Main idea", "The most important thing a writer has to say in a paragraph or a whole selection.", 4],
    ["Supporting details", "The facts and examples in a paragraph that hold up the main idea.", 5],
    ["Stated", "Said directly in a sentence the reader can point to.", 8],
    ["Implied", "Not said directly, so the reader has to work it out from the details.", 13]
  ],

  vocabQuestions: [
    { q: "What is the <i>main idea</i> of a paragraph?",
      choices: ["The first sentence, always", "The most important thing the writer has to say", "The longest sentence", "A detail in the middle"],
      right: 1, why: "The main idea is the most important thing the writer has to say." },
    { q: "What are <i>supporting details</i>?",
      choices: [
        "The title and the author's name",
        "The facts and examples that hold up the main idea",
        "Words that rhyme",
        "The questions at the end"
      ],
      right: 1, why: "They hold up the main idea." },
    { q: "A main idea that is <i>stated</i> is...",
      choices: ["Said directly in a sentence", "Never in the paragraph", "Always the last word", "Left for the reader to work out"],
      right: 0, why: "A stated main idea is a sentence you can point to." },
    { q: "A main idea that is <i>implied</i> is...",
      choices: ["Written in capital letters", "Said directly in the first sentence", "Not said directly, so the reader works it out from the details", "Always wrong"],
      right: 2, why: "An implied main idea is one the reader puts together." }
  ],

  questions: [
    { q: "What question does the lesson say to ask when you read a paragraph?", find: [6],
      hint: "Read The One Thing.",
      choices: [
        "How many sentences does it have?",
        "What's the one thing the writer most wants me to understand?",
        "Which word is longest?",
        "Where does it start?"
      ], right: 1,
      why: "That question leads you to the main idea." },

    { q: "In the bakery example, which sentence is the stated main idea?", find: [9],
      hint: "Read When the Writer Says It.",
      choices: [
        "By seven the line is out the door.",
        "The ovens have run for three hours.",
        "The owner is handing out samples.",
        "The bakery on Elm Street is the busiest place in town on Saturday morning."
      ], right: 3,
      why: "The first sentence says it, and the rest are details that back it up." },

    { q: "In the Dana example, why is the main idea implied?", find: [16],
      hint: "Read When You Have to Say It.",
      choices: [
        "Because no sentence says it, and the reader has to put the details together.",
        "Because Dana never packs her bag.",
        "Because the paragraph is too short.",
        "Because there are no details."
      ], right: 0,
      why: "None of the sentences states the point, so the reader has to say it." },

    { q: "What's the main idea of the first paragraph, the one about the cap?", find: [27],
      hint: "No sentence states it, so add up the details.",
      choices: [
        "Caps were very expensive in those days.",
        "A boy with no cap felt uncomfortable, and his mother found a way to help him anyway.",
        "Boys at school liked to tease one another.",
        "He had never worn a hat in his life."
      ], right: 1,
      why: "The details add up to a boy's problem and his mother's solution." },

    { q: "Which sentence states the main idea of the second paragraph?", find: [29],
      hint: "Look at the second sentence of that paragraph.",
      choices: [
        "Since that time I have owned many kinds of caps and hats.",
        "I have always felt proud that she refused to go into debt.",
        "I have always felt proud that my mother had strength of character enough not to seem to be what she was not.",
        "Several of the boys have ended their careers in the penitentiary."
      ], right: 2,
      why: "That sentence says it directly." },

    { q: "How did Booker come to be called Booker Washington?", find: [38],
      hint: "Read the third paragraph.",
      choices: [
        "His teacher gave him the name.",
        "His mother told him to use it.",
        "He chose it himself when the teacher asked for his full name.",
        "It was written on his cap."
      ], right: 2,
      why: "He said it calmly, as if he'd always been called that." },

    { q: "What had his mother given him as a name soon after he was born?", find: [39],
      hint: "He learned it later in life.",
      choices: ["Booker Washington", "Booker Taliaferro", "Taliaferro Washington", "Just Booker"], right: 1,
      why: "He found out later and made his full name Booker Taliaferro Washington." },

    { q: "Which sentence in the last paragraph shows what Washington decided to do with his life?", find: [42],
      hint: "Look at the last sentence.",
      choices: [
        "He decided to go back to school.",
        "He decided to leave a record of which his children would be proud.",
        "He decided to find his family.",
        "He decided to change his name again."
      ], right: 1,
      why: "He resolved to leave a record his children would be proud of." },

    { q: "What's a good way to test a main idea you've written?", find: [17],
      hint: "Read When You Have to Say It.",
      choices: [
        "Check that it's the longest sentence.",
        "Hold it up against each detail and see if it fits all of them.",
        "Make sure it matches the title.",
        "Ask a friend to write one."
      ], right: 1,
      why: "A good main idea fits every detail." },

    { q: "Which statement best expresses the main idea of the whole excerpt, which no single sentence states?", find: [50],
      hint: "Read Finding the Ideas.",
      choices: [
        "Caps were once made of homespun cloth.",
        "A person can make something of his own, whatever name or beginning he has.",
        "Teachers should call the roll more slowly.",
        "Nobody should ever change a name."
      ], right: 1,
      why: "The whole selection adds up to what a person makes of himself." }
  ],

  todo: { title: "What To Do Now", s: [
    "Before you start, find a short paragraph in anything you're reading and write its main idea on a sheet of paper in your own words, without looking at it a second time.",
    "Then work through the {c} word cards at the top of the page, {q} questions about the story, and {v} more questions about those words. {T} questions in all.",
    "When those are done, take the paragraph you chose and write its main idea again, now that you've done the lesson, and add two supporting details from the paragraph.",
    "If you get stuck on a question, tap Find It in the Story and read the line the page shows you.",
    "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] },
};
