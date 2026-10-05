/* english/unit-1-review-the-short-story
   Grade 7 · English · Unit 1 (Out Here on My Own), lesson 11. Built by tools/lessons.js.
   Edit the lesson here, not in the registry.

   🚨 THE REVIEW IS A TEST. Per the course plan: a short new public-domain story, then
   questions across all six terms in the unit (conflict, the story arc, symbol, theme,
   foreshadowing and suspense, character and inference), two for each. The hints only point
   back into the story, and the page carries no teaching beyond a short opening. This is
   deliberately different from the science reviews, whose hints name the lesson to reopen.

   🚨 DRAFT PROSE, marked per /lesson: the opening, the Teacher Notes, the questions and the
   scripture choice are Claude's, written to the /teach-plan block in `plan` below and given
   the /natural pass. Paul has not read them.
   ⚠️ NO VERSE IS PRINTED ON THE PAGE. The suggestion (Proverbs 14:15, "The simple believeth
   every word") is in `scripture` below, but it would hand the student the theme answer one
   screen before question 7, so it is left out of the reading. Paul's call whether to add it.
   The STORY is Saki's (H. H. Munro) "The Open Window" (1914, Project Gutenberg #269,
   "Beasts and Super-Beasts", public domain), his words exactly, one sentence per entry.
   Saki's text has two British spellings, and check-spelling.js carries an allowance for the
   phrase it flags, naming this story. */
'use strict';
module.exports = {
  id: "english/unit-1-review-the-short-story",
  slug: "unit-1-review-the-short-story",
  title: "Unit 1 Review: The Short Story",
  unit: "Literature · U1-L11",
  seq: { unit: 1, unitTitle: "Out Here on My Own", n: 11 },

  plan: {
    objective: "Show he can name conflict, the arc, symbol, theme, foreshadowing and character.",
    markers: [
      "Ours (BEHAVIOR: every unit ends with a review, and the review is a test). The book has no collection test page in the student text.",
    ],
    method: "A short new public-domain story, then questions across all six terms.",
    exampleOnly: [
      "The Open Window, Framton Nuttel, Vera. World: one new story that Kolten has not read.",
    ],
    digitize: "Reading engine in test mode. No hints beyond pointing back to the story.",
    unclear: [],
  },
  natural: "2026-10-05",
  findsAt: 66,

  shelf: { grades: [7], subject: "English",
    blurb: "One short story you haven't read and twelve questions on everything in the unit: conflict, plot, symbol, theme, clues, and character.",
    contains: [
      "Teacher Notes written for whoever is teaching it",
      "Saki's whole story The Open Window, read aloud one line at a time",
      "Twelve questions across conflict, the story arc, symbol, theme, foreshadowing and suspense, and character",
      "Four vocabulary cards for the unit's terms, each with a check question",
    ] },
  eyebrow: ["English 7", "U1-L11", "Out Here on My Own"],
  dek: "One new story, twelve questions, and everything you've learned in this unit.",
  scripture: {
    ref: "Proverbs 14:15",
    text: "The simple believeth every word: but the prudent man looketh well to his going.",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will read a short story they haven't seen, Saki's The Open Window, and answer twelve questions covering the six ideas in Unit 1: conflict, the story arc, symbol, theme, foreshadowing and suspense, and character and inference."
      ]},
      { h: "Key Concepts", p: [
        "Two questions cover each idea. The hints only point back to the part of the story that answers the question, so the student has to bring the unit's terms with him.",
        "The story turns on a trick the reader learns only in the last line: Vera invents the tragedy of the open window on the spot, and Framton runs away from the family he thinks are ghosts."
      ]},
      { h: "Where Students Get Stuck", p: [
        "Students often confuse a theme with a plot summary, and a clue with a scary moment. A theme has no names in it and is true of people in general; a clue points ahead to something that comes later. If he misses the arc questions, ask what is still unsettled at that moment."
      ]},
      { h: "Teaching Suggestion", p: [
        "Treat this as a test: no notes and no help during the questions, then go over the misses together afterward. Each miss maps to one lesson in the unit, so tell him which one to reopen."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Show What You Know", s: [
      "This review checks six things you've picked up in the unit: conflict, the story arc, symbols, theme, foreshadowing and suspense, and what a character's words and actions show about him.",
      "You'll read one short story you haven't seen before, and then you'll answer twelve questions about it, two for each of those ideas, so every one of them gets a fair turn.",
      "Read it the way you've learned to, with your eyes open for the sides in the struggle, the clues that point ahead, and anything that might stand for more than it seems."
    ]},
    { title: "A Very Self-Possessed Young Lady", s: [
      "[story] “My aunt will be down presently, Mr. Nuttel,” said a very self-possessed young lady of fifteen; “in the meantime you must try and put up with me.”",
      "Framton Nuttel endeavoured to say the correct something which should duly flatter the niece of the moment without unduly discounting the aunt that was to come.",
      "Privately he doubted more than ever whether these formal visits on a succession of total strangers would do much toward helping the nerve cure which he was supposed to be undergoing.",
      "",
      "[story] “I know how it will be,” his sister had said when he was preparing to migrate to this rural retreat; “you will bury yourself down there and not speak to a living soul, and your nerves will be worse than ever from moping.",
      "I shall just give you letters of introduction to all the people I know there.",
      "Some of them, as far as I can remember, were quite nice.”",
      "",
      "[story] Framton wondered whether Mrs. Sappleton, the lady to whom he was presenting one of the letters of introduction, came into the nice division.",
      "“Do you know many of the people round here?” asked the niece, when she judged that they had had sufficient silent communion.",
      "“Hardly a soul,” said Framton.",
      "“My sister was staying here, at the rectory, you know, some four years ago, and she gave me letters of introduction to some of the people here.”",
      "",
      "[story] He made the last statement in a tone of distinct regret.",
      "“Then you know practically nothing about my aunt?” pursued the self-possessed young lady.",
      "“Only her name and address,” admitted the caller.",
      "He was wondering whether Mrs. Sappleton was in the married or widowed state.",
      "An undefinable something about the room seemed to suggest masculine habitation.",
    ]},
    { title: "Her Great Tragedy", s: [
      "[story] “Her great tragedy happened just three years ago,” said the child; “that would be since your sister’s time.”",
      "“Her tragedy?” asked Framton; somehow in this restful country spot tragedies seemed out of place.",
      "“You may wonder why we keep that window wide open on an October afternoon,” said the niece, indicating a large French window that opened on to a lawn.",
      "",
      "[story] “It is quite warm for the time of the year,” said Framton; “but has that window got anything to do with the tragedy?”",
      "“Out through that window, three years ago to a day, her husband and her two young brothers went off for their day’s shooting.",
      "They never came back.",
      "In crossing the moor to their favorite snipe-shooting ground they were all three engulfed in a treacherous piece of bog.",
      "It had been that dreadful wet summer, you know, and places that were safe in other years gave way suddenly without warning.",
      "Their bodies were never recovered.",
      "That was the dreadful part of it.”",
      "Here the child’s voice lost its self-possessed note and became falteringly human.",
      "“Poor aunt always thinks that they will come back some day, they and the little brown spaniel that was lost with them, and walk in at that window just as they used to do.",
      "That is why the window is kept open every evening till it is quite dusk.",
      "Poor dear aunt, she has often told me how they went out, her husband with his white waterproof coat over his arm, and Ronnie, her youngest brother, singing ‘Bertie, why do you bound?’ as he always did to tease her, because she said it got on her nerves.",
      "Do you know, sometimes on still, quiet evenings like this, I almost get a creepy feeling that they will all walk in through that window--”",
      "",
      "[story] She broke off with a little shudder.",
      "It was a relief to Framton when the aunt bustled into the room with a whirl of apologies for being late in making her appearance.",
    ]},
    { title: "Muddy Up to the Eyes", s: [
      "[story] “I hope Vera has been amusing you?” she said.",
      "“She has been very interesting,” said Framton.",
      "“I hope you don’t mind the open window,” said Mrs. Sappleton briskly; “my husband and brothers will be home directly from shooting, and they always come in this way.",
      "They’ve been out for snipe in the marshes to-day, so they’ll make a fine mess over my poor carpets.",
      "So like you men-folk, isn’t it?”",
      "",
      "[story] She rattled on cheerfully about the shooting and the scarcity of birds, and the prospects for duck in the winter.",
      "To Framton it was all purely horrible.",
      "He made a desperate but only partially successful effort to turn the talk on to a less ghastly topic; he was conscious that his hostess was giving him only a fragment of her attention, and her eyes were constantly straying past him to the open window and the lawn beyond.",
      "It was certainly an unfortunate coincidence that he should have paid his visit on this tragic anniversary.",
      "",
      "[story] “The doctors agree in ordering me complete rest, an absence of mental excitement, and avoidance of anything in the nature of violent physical exercise,” announced Framton, who labored under the tolerably widespread delusion that total strangers and chance acquaintances are hungry for the least detail of one’s ailments and infirmities, their cause and cure.",
      "“On the matter of diet they are not so much in agreement,” he continued.",
      "“No?” said Mrs. Sappleton, in a voice which only replaced a yawn at the last moment.",
      "Then she suddenly brightened into alert attention--but not to what Framton was saying.",
      "",
      "[story] “Here they are at last!” she cried.",
      "“Just in time for tea, and don’t they look as if they were muddy up to the eyes!”",
      "Framton shivered slightly and turned toward the niece with a look intended to convey sympathetic comprehension.",
      "The child was staring out through the open window with dazed horror in her eyes.",
      "In a chill shock of nameless fear Framton swung round in his seat and looked in the same direction.",
      "",
      "[story] In the deepening twilight three figures were walking across the lawn toward the window; they all carried guns under their arms, and one of them was additionally burdened with a white coat hung over his shoulders.",
      "A tired brown spaniel kept close at their heels.",
      "Noiselessly they neared the house, and then a hoarse young voice chanted out of the dusk: “I said, Bertie, why do you bound?”",
    ]},
    { title: "Who Bolted Out?", s: [
      "[story] Framton grabbed wildly at his stick and hat; the hall-door, the gravel-drive, and the front gate were dimly-noted stages in his headlong retreat.",
      "A cyclist coming along the road had to run into the hedge to avoid an imminent collision.",
      "“Here we are, my dear,” said the bearer of the white mackintosh, coming in through the window; “fairly muddy, but most of it’s dry.",
      "Who was that who bolted out as we came up?”",
      "",
      "[story] “A most extraordinary man, a Mr. Nuttel,” said Mrs. Sappleton; “could only talk about his illnesses, and dashed off without a word of good-bye or apology when you arrived.",
      "One would think he had seen a ghost.”",
      "“I expect it was the spaniel,” said the niece calmly; “he told me he had a horror of dogs.",
      "He was once hunted into a cemetery somewhere on the banks of the Ganges by a pack of pariah dogs, and had to spend the night in a newly dug grave with the creatures snarling and grinning and foaming just above him.",
      "Enough to make anyone lose their nerve.”",
      "",
      "[story] Romance at short notice was her speciality.",
    ]},
  ],

  words: [
    ["Symbol", "A person, place or thing that has meaning in itself and also stands for something beyond itself."],
    ["Theme", "The idea about life that a story reveals, usually written as a sentence that's true of people in general."],
    ["Foreshadowing", "The use of clues to suggest events that will happen later in a story."],
    ["Inference", "An educated guess based on evidence: a clue from the text plus what you already know."],
  ],

  vocabQuestions: [
    { q: "Which of these is a <i>symbol</i>?",
      choices: ["A dove carrying an olive branch to stand for peace", "A man walking his dog on Tuesday", "A kitchen with a wooden table", "A girl who is eating her lunch"],
      right: 0, why: "It's a real thing that also stands for something beyond itself." },
    { q: "Which of these is written as a <i>theme</i>?",
      choices: ["People who believe everything they hear can be fooled", "A man visits a house in the country", "A girl tells a man a story about a window", "Three men return from a day of shooting"],
      right: 0, why: "A theme is a generalization with no names in it." },
    { q: "Which of these is <i>foreshadowing</i>?",
      choices: ["A hint early in a story about what will happen later", "The last sentence of a story", "The title of a story", "A description of the setting"],
      right: 0, why: "Foreshadowing is the use of clues to suggest later events." },
    { q: "What is an <i>inference</i>?",
      choices: ["An educated guess based on a clue and what you already know", "A fact the author states outright", "A summary of the whole plot", "A guess with no clue behind it"],
      right: 0, why: "An inference is built from evidence." },
  ],

  questions: [
    { q: "Framton came to the country to rest his nerves. In the story, who ends up standing in the way of that, without his knowing it?", find: [4, 18],
      hint: "Look back at who tells Framton about the tragedy.",
      choices: ["Vera, the niece, whose tale frightens him", "Mrs. Sappleton, who talks about the weather", "Framton's sister, who wrote the letters", "The cyclist on the road"], right: 0,
      why: "Vera's made-up story frightens him." },
    { q: "Which of these gets in the way of what Framton wants, which is quiet and rest?", find: [51, 50],
      hint: "Look at the scene in the middle of the story, just before he runs.",
      choices: ["A story that makes him think the men at the window are ghosts", "A letter of introduction from his sister", "The muddy carpets in the front hall", "The doctors who told him to rest"], right: 0,
      why: "The fear that the dead men have returned destroys his rest." },
    { q: "Three figures walk across the lawn with guns, and Framton bolts out of the house. Which part of the plot is this?", find: [53, 56],
      hint: "Look at the moment when everything is decided for Framton.",
      choices: ["The climax", "The basic situation", "The complications", "The resolution"], right: 0,
      why: "It's the most emotional moment, the one the story has been building toward." },
    { q: "Mrs. Sappleton keeps talking cheerfully about the shooting while Framton grows more uneasy. Which part of the plot is this?", find: [40, 41],
      hint: "Look at what happens before the three figures appear.",
      choices: ["The complications", "The basic situation", "The climax", "The resolution"], right: 0,
      why: "The conflict is getting worse, and nothing has been decided yet." },
    { q: "Vera says the window is kept open for the men who never came back. In her story, what could the open window stand for?", find: [20, 29],
      hint: "Look at the part where Vera explains why the window stays open.",
      choices: ["The aunt's hope that the lost men will return", "The aunt's wish for fresh air", "The danger of the moor", "The cost of the carpets"], right: 0,
      why: "The window stays open because the aunt hopes they will come home." },
    { q: "Read the window literally. Why is it really open when Framton visits?", find: [37, 37],
      hint: "Look at what Mrs. Sappleton says when she comes in.",
      choices: ["The men are out shooting and always come in that way", "It's warm for the time of year", "A tragedy happened there", "The house has no front door"], right: 0,
      why: "Mrs. Sappleton says her husband and brothers always come in that way." },
    { q: "Which of these is a theme of the story, rather than a plot summary?", find: [65, 56],
      hint: "A theme is true of people in general and has no names in it.",
      choices: ["A person who believes everything he's told can easily be fooled", "A man runs out of a house after a girl's story about an open window", "Framton visits Mrs. Sappleton with a letter from his sister", "Vera tells Framton about a tragedy three years ago"], right: 0,
      why: "It says something true of people in general and names no one." },
    { q: "Which of these can't be the theme of the story, because it names a character instead of speaking about people in general?", find: [65, 56],
      hint: "A theme has no names in it. Look back at who the story is about.",
      choices: ["Framton learns not to trust Vera", "Nervous people are easy to frighten", "Fear can make a person run from something harmless", "A clever liar can turn an ordinary evening into a ghost story"], right: 0,
      why: "It names Framton and Vera, so it retells the story and says nothing true of people in general." },
    { q: "Early on, the narrator says “an undefinable something about the room seemed to suggest masculine habitation.” What does this clue suggest?", find: [17],
      hint: "Look at the paragraph where Framton wonders about Mrs. Sappleton.",
      choices: ["That men still live in the house, so the tragedy may not be true", "That Mrs. Sappleton has never married", "That the house is empty", "That Framton has been to the house before"], right: 0,
      why: "It hints that the men are alive and live there." },
    { q: "Framton sees three figures walk across the lawn with guns while the child stares in horror, and he doesn't know what's coming. What does this moment build?", find: [51, 55],
      hint: "Look at the moment just before Framton runs.",
      choices: ["Suspense", "The resolution", "A symbol", "The theme"], right: 0,
      why: "The reader and Framton both wonder what the figures are." },
    { q: "The last line says, “Romance at short notice was her speciality.” What does it show about Vera?", find: [65],
      hint: "Look at the very last line.",
      choices: ["She can invent a story on the spot and likes to fool people", "She always tells the truth", "She is afraid of dogs", "She wants to help Framton's nerves"], right: 0,
      why: "The narrator says her specialty is inventing stories on the spot." },
    { q: "The narrator says Framton “labored under the tolerably widespread delusion that total strangers and chance acquaintances are hungry for the least detail of one’s ailments.” What does this show about Framton?", find: [44],
      hint: "Look at what Framton says to Mrs. Sappleton about his doctors.",
      choices: ["He talks about his health too much and doesn't notice that others are bored", "He is very interested in other people's health", "He is a doctor himself", "He is a good listener"], right: 0,
      why: "He goes on about his illnesses while Mrs. Sappleton barely listens." },
  ],

  todo: { title: "What To Do Now", s: [
    "Put your notes away, because this one is a test of what you already know, and you probably know more than you think.",
    "Work through the {c} word cards at the top of the page, {q} questions about the story, and {v} more questions about the unit's words. {T} questions in all.",
    "Each of the story questions covers one idea from the unit, so ask yourself which idea it is before you pick an answer.",
    "If you get stuck, tap Find It in the Story and read the line the page shows you, and then decide for yourself.",
    "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] },
};
