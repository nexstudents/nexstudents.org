/* english/fact-and-opinion-in-autobiography
   Grade 7 · English · Unit 2 (Who Am I?), lesson 1. Built by tools/lessons.js.
   Edit the lesson here, not in the registry.

   🚨 DRAFT PROSE, marked per /lesson: the teaching sections, the Teacher Notes, the
   questions and the scripture choice are Claude's, written 2026-10-05 on Sonnet to the
   /teach-plan block in `plan` below and given the /natural pass. Paul has not read them.
   The scripture (1 Thessalonians 5:21) is a suggestion, his call.

   The STORY is Helen Keller's "The Story of My Life" (1903), Chapter IV, the day Anne
   Sullivan taught her the word for water, from Project Gutenberg #2397 (verified: the
   title page reads "The Story of My Life", by Helen Keller). It's the author's words
   exactly, split to one sentence per entry, with these changes only: one British spelling (harbor) written
   the American way, and the two double hyphens turned into a colon and a comma. The
   fog paragraph and everything else in the chapter are kept; nothing is cut. It stands
   in for Holt's "Homesick" by Jean Fritz, which is copyrighted. ⚠️ The story pick is
   Claude's; the plan says it goes to the review queue for Paul to swap. */
'use strict';
module.exports = {
  id: "english/fact-and-opinion-in-autobiography",
  slug: "fact-and-opinion-in-autobiography",
  title: "Fact and Opinion in Autobiography",
  unit: "Literature · U2-L1",
  seq: { unit: 2, unitTitle: "Who Am I?", n: 1 },

  plan: {
    objective: "Tell an autobiography from a biography, and sort a writer's statements into facts (can be proved true or false) and opinions (feelings or beliefs that can't be proved).",
    markers: [
      "BOOK (paraphrased), Holt Elements of Literature p104, Autobiography and Biography: an autobiography is a person's life told by that person, and a biography is told by another person.",
      "BOOK (paraphrased), Reading Skills: Fact and Opinion: a fact can be proved true or false, an opinion is a personal feeling or belief that can't be proved, writers of autobiography mix both, and some people state opinions as if they were facts.",
      "BOOK (paraphrased), the test: ask whether the statement can be proved.",
      "BOOK (paraphrased), Making Meanings, question 5: find one fact and one opinion in the selection.",
    ],
    method: "ASK THE TEST QUESTION, 'COULD THIS BE PROVED?', ABOUT EACH STATEMENT. A date, a name or an event someone could check is a fact; a feeling, a judgment or a word like best or wonderful is an opinion. Autobiographers mix the two on purpose, and a few opinions are dressed up as facts.",
    exampleOnly: [
      "The school lunch and the pizza are our own worlds for the method. The story is Helen Keller's and the skill is the lesson, not Helen Keller.",
      "Holt's selection is Homesick by Jean Fritz, which is copyrighted, so a public-domain autobiography carries the skill. World: The Story of My Life.",
    ],
    digitize: "Reading engine on a public-domain autobiography with plenty of both kinds of statement. Questions ask the student to sort quoted sentences and to tell the two kinds of life-writing apart. Written: a fact and an opinion about the student's own day.",
    unclear: [
      "Which public-domain autobiography. Not a teaching question, so it does not stop the build. The pick goes in the review queue for Paul to swap.",
    ],
  },
  natural: "2026-10-05",
  findsAt: 78,

  shelf: { grades: [7], subject: "English",
    blurb: "The day a deaf and blind girl found out that everything has a name, told by her, and a test for telling what's true from what's felt.",
    contains: [
      "Teacher Notes written for whoever is teaching it",
      "Helen Keller's account of the day her teacher came, read aloud one line at a time",
      "Four vocabulary cards, each with a check question",
      "Story questions that sort real sentences into fact and opinion",
      "A fact and an opinion to write from your own day, on paper",
    ] },
  eyebrow: ["English 7", "U2-L1", "Who Am I?"],
  dek: "Writers tell the story of their own lives and mix what happened with how it felt. One question will help you pull the two apart.",
  scripture: {
    ref: "1 Thessalonians 5:21",
    text: "Prove all things; hold fast that which is good.",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will tell an autobiography from a biography, learn the test for fact and opinion, and use it on Helen Keller's account of the day her teacher came to her, sorting real sentences from it."
      ]},
      { h: "Key Concepts", p: [
        "A fact can be proved true or false by checking: a date, an event, a name. An opinion is a feeling or a belief that can't be proved, and it often shows up in words like best, wonderful, important or difficult.",
        "Autobiographers mix both, and that's what makes the writing worth reading. Keller states facts (the date, who sent the doll) and opinions (the most important day of her life), and often a figure of speech carries a feeling, which also can't be proved."
      ]},
      { h: "Where Students Get Stuck", p: [
        "Thinking an opinion is a wrong answer. Opinions can be true, wise and well supported, and they're still opinions, because you can't prove them by looking something up.",
        "Treating a feeling stated in the first person as a fact. “I was happy” is something only the writer can know, which makes it a report of a feeling, and the lesson counts it as an opinion."
      ]},
      { h: "Teaching Suggestion", p: [
        "Have the student say the test question out loud for every sentence he sorts: could this be proved? If he can name a way to check it, the answer is a fact."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Who's Telling This?", s: [
      "Every book about a person's life comes from somebody, and it matters whether that somebody is the person or a stranger who studied him.",
      "When a person writes the story of his own life, using “I” and “my,” the book is an {{autobiography}}, and when someone else writes about him, with “he” and “his,” it's a {{biography}}.",
      "",
      "[ex] I walked down the path to the lake.",
      "[ex] She walked down the path to the lake.",
      "",
      "Both sentences describe the same walk, but the first would come from an autobiography and the second from a biography, and the first writer was actually there."
    ]},

    { title: "The Test Question", s: [
      "Anyone writing about their own life will tell you what happened and also what they thought about it, and a careful reader keeps those two apart with one question: could this be proved?",
      "If you could check it, with a calendar, a map or a witness, it's a {{fact}}, and if it's a feeling or a belief nobody could check, it's an {{opinion}}.",
      "",
      "[ex] The cafeteria serves pizza every Friday.",
      "",
      "You could stand in the line on Friday and find out, so that one's a fact, whichever way it turns out.",
      "",
      "[ex] Friday pizza is the best lunch of the week.",
      "",
      "That's a feeling, and nobody could prove it, so it's an opinion, even if the whole school agrees with it."
    ]},

    { title: "When an Opinion Dresses Up", s: [
      "A word like best, wonderful, important or difficult is usually the sign of an opinion, because each one is a judgment and none can be checked.",
      "Be careful, though, because writers sometimes state an opinion as if it were a fact, in a flat confident voice, and a sentence that sounds sure of itself isn't proved just because it's sure.",
      "",
      "[ex] Everyone knows the cafeteria's pizza is the best in town.",
      "",
      "That one sounds like a fact because of “everyone knows,” and you can still ask the test question, and you'll find nobody could prove it."
    ]},

    { title: "Read With the Question in Mind", s: [
      "The story ahead is an autobiography, written in 1903 by a woman named Helen Keller about the day her teacher came, a few months before she turned seven, when she had been blind and deaf since she was a baby.",
      "She was writing as an adult, remembering a day from about sixteen years before, so you'll find facts she could check, like dates and names, and feelings only she could know.",
      "As you read, ask the test question about each sentence, and notice how often she does both in a single paragraph.",
      "She writes about a day when a girl who had never understood language suddenly did, and it's the day everything changed for her."
    ]},

    { title: "The Day Everything Got a Name", s: [
      "[story] The most important day I remember in all my life is the one on which my teacher, Anne Mansfield Sullivan, came to me.",
      "I am filled with wonder when I consider the immeasurable contrasts between the two lives which it connects.",
      "It was the third of March, 1887, three months before I was seven years old.",
      "",
      "[story] On the afternoon of that eventful day, I stood on the porch, dumb, expectant.",
      "I guessed vaguely from my mother’s signs and from the hurrying to and fro in the house that something unusual was about to happen, so I went to the door and waited on the steps.",
      "The afternoon sun penetrated the mass of honeysuckle that covered the porch, and fell on my upturned face.",
      "My fingers lingered almost unconsciously on the familiar leaves and blossoms which had just come forth to greet the sweet southern spring.",
      "I did not know what the future held of marvel or surprise for me.",
      "Anger and bitterness had preyed upon me continually for weeks and a deep languor had succeeded this passionate struggle.",
      "",
      "[story] Have you ever been at sea in a dense fog, when it seemed as if a tangible white darkness shut you in, and the great ship, tense and anxious, groped her way toward the shore with plummet and sounding-line, and you waited with beating heart for something to happen?",
      "I was like that ship before my education began, only I was without compass or sounding-line, and had no way of knowing how near the harbor was.",
      "“Light! give me light!” was the wordless cry of my soul, and the light of love shone on me in that very hour.",
      "",
      "[story] I felt approaching footsteps, I stretched out my hand as I supposed to my mother.",
      "Some one took it, and I was caught up and held close in the arms of her who had come to reveal all things to me, and, more than all things else, to love me.",
      "",
      "[story] The morning after my teacher came she led me into her room and gave me a doll.",
      "The little blind children at the Perkins Institution had sent it and Laura Bridgman had dressed it; but I did not know this until afterward.",
      "When I had played with it a little while, Miss Sullivan slowly spelled into my hand the word “d-o-l-l.”",
      "I was at once interested in this finger play and tried to imitate it.",
      "When I finally succeeded in making the letters correctly I was flushed with childish pleasure and pride.",
      "Running downstairs to my mother I held up my hand and made the letters for doll.",
      "I did not know that I was spelling a word or even that words existed; I was simply making my fingers go in monkey-like imitation.",
      "In the days that followed I learned to spell in this uncomprehending way a great many words, among them pin, hat, cup and a few verbs like sit, stand and walk.",
      "But my teacher had been with me several weeks before I understood that everything has a name.",
      "",
      "[story] One day, while I was playing with my new doll, Miss Sullivan put my big rag doll into my lap also, spelled “d-o-l-l” and tried to make me understand that “d-o-l-l” applied to both.",
      "Earlier in the day we had had a tussle over the words “m-u-g” and “w-a-t-e-r.”",
      "Miss Sullivan had tried to impress it upon me that “m-u-g” is mug and that “w-a-t-e-r” is water, but I persisted in confounding the two.",
      "In despair she had dropped the subject for the time, only to renew it at the first opportunity.",
      "I became impatient at her repeated attempts and, seizing the new doll, I dashed it upon the floor.",
      "I was keenly delighted when I felt the fragments of the broken doll at my feet.",
      "Neither sorrow nor regret followed my passionate outburst.",
      "I had not loved the doll.",
      "In the still, dark world in which I lived there was no strong sentiment or tenderness.",
      "I felt my teacher sweep the fragments to one side of the hearth, and I had a sense of satisfaction that the cause of my discomfort was removed.",
      "She brought me my hat, and I knew I was going out into the warm sunshine.",
      "This thought, if a wordless sensation may be called a thought, made me hop and skip with pleasure.",
      "",
      "[story] We walked down the path to the well-house, attracted by the fragrance of the honeysuckle with which it was covered.",
      "Some one was drawing water and my teacher placed my hand under the spout.",
      "As the cool stream gushed over one hand she spelled into the other the word water, first slowly, then rapidly.",
      "I stood still, my whole attention fixed upon the motions of her fingers.",
      "Suddenly I felt a misty consciousness as of something forgotten: a thrill of returning thought; and somehow the mystery of language was revealed to me.",
      "I knew then that “w-a-t-e-r” meant the wonderful cool something that was flowing over my hand.",
      "That living word awakened my soul, gave it light, hope, joy, set it free!",
      "There were barriers still, it is true, but barriers that could in time be swept away.",
      "",
      "[story] I left the well-house eager to learn.",
      "Everything had a name, and each name gave birth to a new thought.",
      "As we returned to the house every object which I touched seemed to quiver with life.",
      "That was because I saw everything with the strange, new sight that had come to me.",
      "On entering the door I remembered the doll I had broken.",
      "I felt my way to the hearth and picked up the pieces.",
      "I tried vainly to put them together.",
      "Then my eyes filled with tears; for I realized what I had done, and for the first time I felt repentance and sorrow.",
      "",
      "[story] I learned a great many new words that day.",
      "I do not remember what they all were; but I do know that mother, father, sister, teacher were among them: words that were to make the world blossom for me, “like Aaron’s rod, with flowers.”",
      "It would have been difficult to find a happier child than I was as I lay in my crib at the close of that eventful day and lived over the joys it had brought me, and for the first time longed for a new day to come.",
    ]},

    { title: "Sorting What Keller Wrote", s: [
      "Go back through the story with the test question, and notice that Keller has given you plenty of both.",
      "“It was the third of March, 1887” is a fact, because a calendar could confirm it, and so is “Laura Bridgman had dressed it,” because someone could check who dressed the doll.",
      "“The most important day I remember in all my life” is an opinion, because only Keller can say what was most important to her, however true it may seem.",
      "And “I had not loved the doll” is an opinion too, since it's a feeling only she could know, which isn't the same as a fact about the doll.",
      "That's what makes an autobiography different from a biography, because in a biography a stranger can guess how you felt, and in an autobiography you're the one telling."
    ]}
  ],

  words: [
    ["Autobiography", "The story of a person's life, written by that person.", 0],
    ["Biography", "The story of a person's life, written by someone else.", 0],
    ["Fact", "A statement that can be proved true or false.", 5],
    ["Opinion", "A feeling or belief that can't be proved.", 5]
  ],

  vocabQuestions: [
    { q: "What is an <i>autobiography</i>?",
      choices: ["A person's life told by someone else", "A person's life told by that person", "A made-up story about a person", "A list of facts about a place"],
      right: 1, why: "An autobiography is the story of your own life, written by you." },
    { q: "What is a <i>biography</i>?",
      choices: ["A story a person tells about their own life", "A feeling that can't be proved", "The story of a person's life, written by someone else", "A story that is completely made up"],
      right: 2, why: "A biography is written by another person." },
    { q: "Which of these is a <i>fact</i>?",
      choices: ["Rainy days are the most boring days", "The new library opened in March", "Nobody likes the winter", "That story was wonderful"],
      right: 1, why: "You could check the date the library opened." },
    { q: "Which of these is an <i>opinion</i>?",
      choices: ["The book has 200 pages", "Helen Keller was born in 1880", "Summer is the best season", "The school opens at eight"],
      right: 2, why: "Nobody could prove which season is best." }
  ],

  questions: [
    { q: "Helen Keller writes about her own life using “I.” What kind of book is this?", find: [19],
      hint: "Look at the very first sentence of the story.",
      choices: ["A biography", "An autobiography", "A news story", "A made-up story"], right: 1,
      why: "She's telling her own life, in the first person." },
    { q: "Which sentence from the story is a fact?", find: [21],
      hint: "Ask whether it could be proved with a calendar.",
      choices: [
        "It was the third of March, 1887, three months before I was seven years old.",
        "The most important day I remember in all my life is the one on which my teacher came to me.",
        "I am filled with wonder when I consider the immeasurable contrasts between the two lives.",
        "It would have been difficult to find a happier child than I was."
      ], right: 0,
      why: "A calendar could confirm the date, so it's a fact." },
    { q: "Which sentence from the story is an opinion?", find: [19],
      hint: "Look for a judgment that nobody could prove.",
      choices: [
        "It was the third of March, 1887.",
        "The little blind children at the Perkins Institution had sent it and Laura Bridgman had dressed it.",
        "The most important day I remember in all my life is the one on which my teacher, Anne Mansfield Sullivan, came to me.",
        "Miss Sullivan slowly spelled into my hand the word “d-o-l-l.”"
      ], right: 2,
      why: "Which day was most important is Keller's own judgment, and nobody can prove it." },
    { q: "“The little blind children at the Perkins Institution had sent it and Laura Bridgman had dressed it.” Is that a fact or an opinion?", find: [34],
      hint: "Could someone check who sent and dressed the doll?",
      choices: ["An opinion, because it's about children", "An opinion, because it's about a doll", "A fact, because it could be checked", "Neither one"], right: 2,
      why: "It names people and events that could be checked." },
    { q: "Keller writes, “I had not loved the doll.” Why is that an opinion?", find: [49],
      hint: "It's about a feeling that only she could know.",
      choices: [
        "It's a feeling only she could know, and nobody could prove it.",
        "It's about a doll, and dolls can't be proved.",
        "It's a date.",
        "It's a fact that anyone could look up."
      ], right: 0,
      why: "A feeling that can't be checked is an opinion." },
    { q: "Which of these is a fact?", find: [52],
      hint: "Look for something that could be checked or seen.",
      choices: [
        "Miss Sullivan placed Keller's hand under the spout of water.",
        "That living word awakened my soul.",
        "It would have been difficult to find a happier child.",
        "The mystery of language was revealed to her."
      ], right: 0,
      why: "A witness could confirm what happened at the well-house." },
    { q: "She writes, “That living word awakened my soul, gave it light, hope, joy, set it free!” What kind of statement is that?", find: [60],
      hint: "Could anyone measure whether a word awakened a soul?",
      choices: ["A fact", "A date", "An opinion, a feeling put as a figure of speech", "A list"], right: 2,
      why: "It's a feeling, and nobody could prove it." },
    { q: "“It would have been difficult to find a happier child than I was.” Why is it an opinion?", find: [72],
      hint: "How would you prove who is happiest?",
      choices: [
        "Because it's a judgment that nobody could prove.",
        "Because it has the word “child” in it.",
        "Because it's a date.",
        "Because it's written in the past."
      ], right: 0,
      why: "“Difficult to find a happier child” is her judgment of her own happiness." },
    { q: "Why is Keller a better source for how she felt that day than a biographer would be?", find: [31],
      hint: "Think about who was there.",
      choices: [
        "Because she's older.",
        "Because biographers can't write about feelings.",
        "Because she's the one who lived it and can tell what she felt.",
        "Because her book is longer."
      ], right: 2,
      why: "An autobiography is the writer's own account of what she lived and felt." },
    { q: "Which is the best test for telling a fact from an opinion?", find: [5],
      hint: "It's the one question at the start of the lesson.",
      choices: ["Is it long?", "Could this be proved?", "Is it in the first person?", "Does it have a date?"], right: 1,
      why: "If you could check it, it's a fact; if you couldn't, it's an opinion." }
  ],

  todo: { title: "What To Do Now", s: [
    "Take out a sheet of paper first, and draw a line down the middle with Fact on one side and Opinion on the other.",
    "Then work through the {c} word cards at the top of the page, {q} questions about the story, and {v} more questions about those words. {T} questions in all.",
    "When those are done, write one fact and one opinion about your own day yesterday, on paper, and run the test question on each one to be sure it's on the right side.",
    "If you get stuck on a question, tap Find It in the Story and read the line the page shows you.",
    "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] },
};
