/* english/first-person-narrator-and-history
   Grade 7 · English · Unit 3 (Do the Right Thing), lesson 6. Built by tools/lessons.js.
   Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-11-22. The teaching sections, the Teacher Notes, the
   questions and the scripture choice are Claude's, written to the /teach-plan block in
   `plan` below and given the /natural pass. Paul has not read them.

   SOURCE: Holt Elements of Literature, First Course (2000), pp230-243, via the week 12
   packet. Holt p230 defines first-person point of view as a character telling the story
   with the pronoun I, and its Reading Skill is Drawing Conclusions: Looking for Evidence
   (watch what characters say and do, how others respond, how they are like people you
   know). Question 8 asks what you would know if someone else told the story. The book's
   story, "Bargain" by A. B. Guthrie, is copyrighted and ends in a planned poisoning, so
   it is NOT used. One plain line is allowed to name it and is not in this lesson.

   ⚠️ STORY PICK, CLAUDE'S, FOR PAUL TO SWAP: Robert Louis Stevenson, "Treasure Island"
   (1883), Chapter 1, "At the Admiral Benbow", text from Standard Ebooks (public domain).
   Why: (1) Jim Hawkins tells it in the first person, so the "I" is plain; (2) the old sea
   captain is a gift for drawing conclusions, since what he says and does and how everyone
   around him reacts all point one way; (3) it is historical fiction, a made-up story set
   in the 1700s (the chapter opens in "the year of grace 17"). It is an excerpt of twelve
   pieces: the arrival, the captain's talk about the cove, the father's answer, his silence,
   his daily question, the one-legged man, the dreams, the stories that frightened people,
   the unpaid money, and the doctor's stand. The paragraphs between are left out. The words
   are Stevenson's exactly, split to one sentence per entry, with these changes only: the
   long dash lines are not used, and the curly quotation marks are kept. The Standard Ebooks
   text already has American spelling (saber). The DRINKING SONG (Yo-ho-ho and a bottle of
   rum) IS LEFT OUT entirely, and so are the drunken scenes and the doctor's remark about
   rum. The setup, the glosses and the charts are OURS.

   ⚠️ ADDED FROM THE RECORD: the book was published in 1883, and Jim tells it as a grown
   man looking back, which the setup says in plain words. The story is an adventure set
   in the 1700s, which is why the lesson calls it historical fiction.
   ⚠️ The two examples (the boy off the bus and the stairs) are made up for teaching.

   🚨 THE VERSE IS A WORKING CHOICE, NOT PAUL'S. 1 Thessalonians 5:21, prove all things.
   Choosing the scripture is his, so it goes in the review queue.
   ⚠️ The two videos passed oEmbed but nobody watched them. Preview both first. */
'use strict';
const table = (rows) => {
  const n = rows[0].length, w = [];
  for (let i = 0; i < n; i++) w[i] = Math.max(...rows.map((r) => [...r[i]].length)) + 2;
  const line = (l, m, r) => l + w.map((x) => "─".repeat(x)).join(m) + r;
  const row = (r) => "│" + r.map((c, i) => " " + c + " ".repeat(w[i] - 1 - [...c].length)).join("│") + "│";
  return [line("┌", "┬", "┐"), row(rows[0]), line("├", "┼", "┤")]
    .concat(rows.slice(1).map(row), [line("└", "┴", "┘")]).join("\n");
};
const CHART = [
  ["Stop", "Evidence", "Conclusion"],
  ["1", "He wants a place with little company, and calls roughly for rum", "He is rough and wants to be left alone"],
  ["2", "He asks daily about sailors and hides from them", "He is hiding from someone"],
  ["3", "People are terrified and the father can't ask for pay", "He is a bully everyone fears"],
  ["4", "He backs down when the doctor stands up to him", "He is a bully who gives way to the brave"],
];
module.exports = {
  id: "english/first-person-narrator-and-history",
  slug: "first-person-narrator-and-history",
  title: "First-Person Narrator and History",
  unit: "Literature · U3-L6",
  seq: { unit: 3, unitTitle: "Do the Right Thing", n: 6 },

  plan: {
    objective: "Tell when a story is told in first person, and draw conclusions about a character from what he says, does and how others react.",
    markers: [
      "HOLT p230: \"first-person point of view: a character tells the story, using the pronoun I.\" Reading Skill, Drawing Conclusions: Looking for Evidence: watch what characters say and do, how others respond, and how they are like people you know. Q8: what would you know if someone else told the story.",
    ],
    method: "SPOT THE I NARRATOR. COLLECT EVIDENCE (WHAT HE SAYS, WHAT HE DOES, HOW OTHERS REACT), THEN DRAW A CONCLUSION. NOTICE WHAT A FIRST-PERSON NARRATOR CAN'T KNOW. HISTORICAL FICTION IS A MADE-UP STORY SET IN THE REAL PAST, SAID IN ONE LINE.",
    exampleOnly: [
      "Bargain by A. B. Guthrie is copyrighted AND ends in a planned poisoning: NOT used. STORY PICK, CLAUDE'S, FOR PAUL TO SWAP: Stevenson, Treasure Island, Chapter 1, with Jim Hawkins narrating about the old sea captain. The drinking song is left out.",
      "The boy off the bus and the stairs are made up for teaching.",
    ],
    digitize: "The same public-domain passage pattern as the tone lesson: one sentence per entry, words exact, setup in our own words. A Watch It Worked at each stop that goes from evidence to conclusion, a chart at the end, and questions on the clues.",
    unclear: [
      "Which public-domain story. The pick is Claude's, in the header, and goes to Paul to swap.",
    ],
  },
  natural: "2026-11-22",
  findsAt: 70,

  shelf: { grades: [7], subject: "English",
    blurb: "A boy named Jim tells you about the strange old sailor who came to stay at his family's inn. How to spot a first-person narrator, and how to collect clues and draw a conclusion about a character.",
    contains: [
      "Teacher Notes written for whoever is teaching it",
      "What first person is, and what a narrator can't know",
      "An excerpt from Robert Louis Stevenson's Treasure Island, read aloud one line at a time",
      "Four stops where you go from evidence to conclusion",
      "What historical fiction is",
      "Six word cards, each with a check question",
    ] },
  eyebrow: ["English 7", "U3-L6", "Do the Right Thing"],
  dek: "When a character tells the story, you only know what he saw. Here's how to read the clues in what a man says, what he does and how everyone around him reacts.",
  scripture: {
    ref: "1 Thessalonians 5:21",
    text: "Prove all things; hold fast that which is good.",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will tell when a story is in the first person, say what a first-person narrator can't know, draw a conclusion about a character from evidence, and learn what historical fiction is."
      ]},
      { h: "Key Concepts", p: [
        "In first person a character tells the story and says I. The reader sees only what that character sees, hears and guesses.",
        "Evidence is a clue in the text, and a conclusion is a decision you reach from several clues. The three kinds of clue are what a character says and does, and how others react to him."
      ]},
      { h: "Where Students Get Stuck", p: [
        "Drawing a conclusion with only one clue. Ask him for a second clue that points the same way.",
        "Thinking the narrator is the author. Jim Hawkins is a character, and Stevenson wrote him.",
        "Stevenson's sentences are long and old-fashioned. The lesson glosses the hard words and sets up the plot first."
      ]},
      { h: "Teaching Suggestion", p: [
        "Have him cover the chart at the end and rebuild it from the four stops, naming each clue and the conclusion it supports.",
        "The story is a public-domain excerpt standing in for Holt's Bargain by A. B. Guthrie, which is copyrighted. Paul can swap it. The drinking song and the drunken scenes of the chapter are left out on purpose."
      ]},
      { h: "Book Pages", p: [
        "Holt Elements of Literature, First Course (2000), pages 230 to 243. Read free on archive.org: https://archive.org/details/elementsoflitera0000unse_i0h7"
      ]},
      { h: "Suggested Videos", videos: [
        { id: "hIJsmZrRgrs", title: "Viewpoint Voyage: Narrative Point of View - First, Second, and Third-Person Perspective", channel: "Miacademy & MiaPrep Learning Channel",
          why: "Made for seventh graders, and it covers first person. It was not watched, so preview it first." },
        { id: "R-Z8r5sFa6k", title: "Point of View (Part I) - First, Second, and Third Person -- Video + Worksheet", channel: "English Units",
          why: "A second explanation of first, second and third person. It was not watched, so preview it first." }
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  video: { id: "hIJsmZrRgrs", title: "Viewpoint Voyage: Narrative Point of View - First, Second, and Third-Person Perspective", channel: "Miacademy & MiaPrep Learning Channel",
    why: "Made for seventh graders, and it covers first-person point of view." },

  parts: [
    { title: "Who Is Telling This?", s: [
      "Remember point of view from earlier in this unit, which is who is telling the story.",
      "In the third person an outside voice says he, she or they, and in the first person a character tells it, and says I.",
      "",
      "[ex] I tripped on the stairs, and everybody in the hall laughed at me.",
      "",
      "[ex] He tripped on the stairs, and everybody in the hall laughed at him.",
      "",
      "In the first sentence the character is the {{narrator}}, the one telling the story, and that is {{first person}}.",
      "So if a story has an I that is a character in it, you are reading first person."
    ]},

    { title: "What a Narrator Can't Know", s: [
      "A first-person narrator is a person inside the story, so he can only tell you what he saw, heard, did and guessed.",
      "He can't read anyone else's mind, and he doesn't know what happens in a room he isn't in.",
      "That is a puzzle for you as the reader, because if you want to understand the other characters you have to work them out from clues, the way the narrator does.",
      "Here's a question to keep in mind, which is what would you know about this man if somebody else were telling it?"
    ]},

    { title: "Evidence and Conclusions", s: [
      "{{Evidence}} is a clue in the text, and a {{conclusion}} is a decision you reach after putting several clues together.",
      "Your book names three places to find the clues, which are what a character says and does, and how the other characters react to him.",
      "",
      "[ex] A boy gets off the bus with his head down, he doesn't answer when someone says hello, and nobody sits near him.",
      "",
      "The clues are his head down, his silence and the empty seat, and the conclusion is that something went wrong for him today.",
      "One clue can be a coincidence, but three that point the same way are a conclusion you can trust."
    ]},

    { title: "A Story Set in the Past", s: [
      "The reading is from Treasure Island, an adventure story by Robert Louis Stevenson that was published in 1883, and it takes place in the 1700s.",
      "A made-up story that is set in the real past like that is called {{historical fiction}}.",
      "The narrator is Jim Hawkins, whose parents run the Admiral Benbow, a small inn by the sea, and he is telling the story as a grown man looking back.",
      "One day a stranger arrives, an old sailor with a saber scar across his cheek, and he has a heavy sea chest, which is the wooden trunk sailors kept their things in.",
      "Stevenson's sentences are long, so read slowly, and note that to {{tyrannize}} someone is to boss him around cruelly, and that you'll see it in the past tense."
    ]},

    { title: "The Captain Arrives", s: [
      "[story] I remember him as if it were yesterday, as he came plodding to the inn door, his sea-chest following behind him in a handbarrow; a tall, strong, heavy, nut-brown man; his tarry pigtail falling over the shoulders of his soiled blue coat; his hands ragged and scarred, with black, broken nails, and the saber cut across one cheek, a dirty, livid white.",
      "Then he rapped on the door with a bit of stick like a handspike that he carried, and when my father appeared, called roughly for a glass of rum.",
      "“This is a handy cove,” says he, at length; “and a pleasant sittyated grogshop.",
      "Much company, mate?”",
      "My father told him no, very little company, the more was the pity.",
    ]},

    { title: "Stop One: Say and Do", s: [
      "Sittyated is the captain's rough way of saying situated, and a grogshop is a place that sells drink.",
      "Stop here, because you already have clues, and the first kind is what the man says and does.",
      "",
      "[walk] The first conclusion.",
      "[step] He calls roughly for rum, so he is rough with people. || SAYS AND DOES: calls roughly for rum",
      "[step] He asks if there is much company, and he's pleased that there isn't much, so he wants to be left alone. || SAYS AND DOES: asks about company\nPLEASED: very little",
      "[step] Put the two together, and the conclusion is that he is rough and wants to be left alone. || CONCLUSION: rough, wants to be alone"
    ]},

    { title: "A Silent Guest", s: [
      "[story] He was a very silent man by custom.",
      "Mostly he would not speak when spoken to; only look up sudden and fierce, and blow through his nose like a foghorn; and we and the people who came about our house soon learned to let him be.",
      "Every day, when he came back from his stroll, he would ask if any seafaring men had gone by along the road.",
      "At first we thought it was the want of company of his own kind that made him ask this question; but at last we began to see he was desirous to avoid them.",
    ]},

    { title: "Stop Two: Look for a Second Clue", s: [
      "Notice that Jim says at first we thought, and then at last we began to see, because he can't read the captain's mind and has to work it out by watching.",
      "",
      "[walk] The second conclusion.",
      "[step] He asks every day if any sailors have gone by, so he is watching for them. || SAYS AND DOES: asks about sailors every day",
      "[step] The people around him learned to let him be, so they are wary of him. || OTHERS: let him be",
      "[step] He avoids sailors, because Jim says he was desirous to avoid them, so he is hiding from someone. || SAYS AND DOES: avoids sailors\nCONCLUSION: he is hiding from someone"
    ]},

    { title: "The One-Legged Man", s: [
      "[story] He had taken me aside one day and promised me a silver fourpenny on the first of every month if I would only keep my “weather eye open for a seafaring man with one leg,” and let him know the moment he appeared.",
      "How that personage haunted my dreams, I need scarcely tell you.",
    ]},

    { title: "Who Is Everyone Afraid Of?", s: [
      "A fourpenny is a small coin, and a weather eye open means watching carefully.",
      "The captain is afraid of the man with one leg, and Jim, who is the narrator, doesn't know why, so neither do you.",
      "That is something only a first-person story can do, because the secret stays hidden as long as Jim doesn't know it."
    ]},

    { title: "A Man Everyone Feared", s: [
      "[story] His stories were what frightened people worst of all.",
      "Dreadful stories they were; about hanging, and walking the plank, and storms at sea, and the Dry Tortugas, and wild deeds and places on the Spanish Main.",
      "My father was always saying the inn would be ruined, for people would soon cease coming there to be tyrannized over and put down and sent shivering to their beds; but I really believe his presence did us good.",
      "In one way, indeed, he bade fair to ruin us; for he kept on staying week after week, and at last month after month, so that all the money had been long exhausted, and still my father never plucked up the heart to insist on having more.",
    ]},

    { title: "Stop Three: How Others React", s: [
      "This time the clues are not what the captain does, but how everyone else behaves around him.",
      "",
      "[walk] The third conclusion.",
      "[step] His stories frighten people, and they are sent shivering to their beds. || OTHERS: frightened of his stories",
      "[step] Jim's father is afraid to ask him for money, even after the money is long gone. || OTHERS: the father can't ask for pay",
      "[step] Put the two together, and the conclusion is that the captain is a bully everyone fears. || CONCLUSION: a bully everyone fears"
    ]},

    { title: "The Doctor Stands Up to Him", s: [
      "One evening Doctor Livesey told the captain, to his face, that his drinking was a danger, and the captain jumped up and drew a knife and threatened him.",
      "Here's how the doctor answered, and what the captain did next.",
      "[story] The doctor never so much as moved.",
      "Then followed a battle of looks between them; but the captain soon knuckled under, put up his weapon, and resumed his seat, grumbling like a beaten dog.",
    ]},

    { title: "Stop Four: Does the Conclusion Hold?", s: [
      "A good reader checks a conclusion against new evidence, and here the new clue is that the doctor wasn't afraid.",
      "",
      "[walk] Check the third conclusion.",
      "[step] The doctor doesn't move, and the captain puts away the knife and sits down like a beaten dog. || OTHERS: the captain backs down",
      "[step] So the bully gives way to someone who isn't afraid, and the conclusion is made stronger. || CONCLUSION: a bully who gives way to the brave"
    ]},

    { title: "What the Clues Add Up To", s: [
      "Read across the chart, and you'll see that every conclusion rests on clues from the text and not on a guess.",
      "",
      "[walk] The evidence chart.",
      "[step] Read across each row, from the stop, to the evidence, to the conclusion. || " + table(CHART),
      "",
      "Remember the question from the start, what would you know if the captain told it himself?",
      "You'd know what he was hiding from, but you would lose Jim's fear, and that is why Stevenson let a boy tell it.",
      "",
      "[verse] 1 Thessalonians 5:21 says, “Prove all things; hold fast that which is good.”",
      "",
      "That verse is about testing what you're told and keeping what proves true, and a reader who checks a conclusion against the evidence is doing exactly that.",
      "Now it is your turn to be the detective, because the questions below ask for the clue and the conclusion it supports."
    ]}
  ],

  words: [
    ["Narrator", "The one who tells a story.", 4],
    ["First person", "A way of telling a story in which a character tells it and says I.", 4],
    ["Evidence", "A clue in the text that helps you decide something.", 10],
    ["Conclusion", "A decision you reach after putting several clues together.", 10],
    ["Historical fiction", "A made-up story set in the real past.", 16],
    ["Tyrannize", "To boss someone around cruelly.", 19]
  ],

  vocabQuestions: [
    { q: "Who is a story's <i>narrator</i>?",
      choices: ["The one who tells the story", "The main villain", "The author's editor", "The last character to speak"],
      right: 0, why: "The narrator is the one who tells the story." },
    { q: "A story says, “I stood on the dock and watched the boats.” That is told in <i>first person</i>. Why?",
      choices: ["It is about boats.", "A character tells it and says I.", "It has a dock in it.", "It is very short."],
      right: 1, why: "First person means a character tells it with the word I." },
    { q: "You see muddy shoes by the door, a wet coat on the hook and a puddle on the floor, and you decide it rained. What are the shoes, the coat and the puddle?",
      choices: ["Conclusions", "Characters", "Evidence", "Rhymes"],
      right: 2, why: "Clues in what you see are evidence." },
    { q: "After three clues, you decide the boy had a bad day. What is that decision?",
      choices: ["A narrator", "A setting", "A clue", "A conclusion"],
      right: 3, why: "A conclusion is a decision from several clues." },
    { q: "A made-up story set in 1700s England is an example of what?",
      choices: ["Historical fiction", "A news report", "A poem", "A diary"],
      right: 0, why: "Historical fiction is a made-up story set in the real past." },
    { q: "The bully <i>tyrannized</i> the new students. What does tyrannize mean?",
      choices: ["Taught kindly", "Bossed around cruelly", "Ignored", "Thanked"],
      right: 1, why: "To tyrannize is to boss someone around cruelly." }
  ],

  questions: [
    { q: "Which sentence is told in first person?", find: [1],
      hint: "Read Who Is Telling This?",
      choices: [
        "He tripped on the stairs, and everybody laughed at him.",
        "They tripped on the stairs.",
        "I tripped on the stairs, and everybody laughed at me.",
        "She tripped on the stairs."
      ], right: 2,
      why: "A narrator who says I is first person." },

    { q: "What can a first-person narrator tell you?", find: [6],
      hint: "Read What a Narrator Can't Know.",
      choices: [
        "Everything every character is thinking",
        "What happens in every room",
        "The end of the story before it happens",
        "Only what he saw, heard, did and guessed"
      ], right: 3,
      why: "He is inside the story, so he knows only his own part of it." },

    { q: "What is evidence in a story?", find: [10],
      hint: "Read Evidence and Conclusions.",
      choices: [
        "A clue in the text",
        "The title of the story",
        "The last sentence",
        "The author's name"
      ], right: 0,
      why: "Evidence is a clue you can point to in the text." },

    { q: "A boy keeps his head down, doesn't answer hello, and nobody sits near him. What is the best conclusion?", find: [13],
      hint: "Read Evidence and Conclusions.",
      choices: [
        "He won a prize.",
        "Something went wrong for him today.",
        "He is the bus driver.",
        "He likes being loud."
      ], right: 1,
      why: "Three clues point to a bad day." },

    { q: "What kind of story is Treasure Island?", find: [16],
      hint: "Read A Story Set in the Past.",
      choices: [
        "A true diary",
        "A newspaper article",
        "A made-up story set in the real past",
        "A science report"
      ], right: 2,
      why: "It is made up, and it takes place in the 1700s." },

    { q: "In Stop One, what is the first clue about how the captain treats people?", find: [28],
      hint: "Read Stop One.",
      choices: [
        "He is rough with people, because he calls roughly for rum.",
        "He sings to the cook.",
        "He gives gifts to the family.",
        "He waves hello to all the neighbors."
      ], right: 0,
      why: "He called roughly for a glass of rum." },

    { q: "What does the captain ask every day, and what does that suggest?", find: [37],
      hint: "Read Stop Two.",
      choices: [
        "He asks about the weather, so he is a farmer.",
        "He asks whether any sailors passed by, so he is hiding from someone.",
        "He asks for a story, so he is bored.",
        "He asks for a map, so he is lost."
      ], right: 1,
      why: "He asks about seafaring men, and Jim sees that he wants to avoid them." },

    { q: "Jim says, “At first we thought... but at last we began to see.” What does that show about a first-person narrator?", find: [35],
      hint: "Read Stop Two.",
      choices: [
        "He knows everything from the start.",
        "He is lying to the reader.",
        "He has to work out what other people feel from what he sees.",
        "He is telling the story of another man."
      ], right: 2,
      why: "A narrator can't read minds, so he works things out." },

    { q: "In Stop Three, which clue shows that the captain frightens people?", find: [51],
      hint: "Read Stop Three.",
      choices: [
        "His coat is blue.",
        "He carries a stick.",
        "He lives by the sea.",
        "Jim's father is afraid to ask him for money."
      ], right: 3,
      why: "The father never plucked up the heart to insist on pay." },

    { q: "What does the doctor's stand add to the evidence?", find: [60],
      hint: "Read Stop Four.",
      choices: [
        "The captain gives way to someone who isn't afraid, so he is a bully.",
        "The captain wins the argument.",
        "The captain becomes a doctor.",
        "The captain leaves the village that night."
      ], right: 0,
      why: "He backed down like a beaten dog." },

    { q: "Why did Stevenson let a boy tell the story instead of the captain?", find: [66],
      hint: "Read What the Clues Add Up To.",
      choices: [
        "Because boys write better",
        "Because the secret and the fear stay with Jim, who doesn't know it yet",
        "Because the captain can't talk",
        "Because the story is too short"
      ], right: 1,
      why: "A boy narrator keeps the secret hidden and the fear fresh." }
  ],

  todo: { title: "What To Do Now", s: [
    "Before anything else, read the story through one piece at a time, and at each of the four stops write your own conclusion on a sheet of paper before you read the one on the page.",
    "Then work through the {c} word cards at the top of the page, {q} questions about the story, and {v} more questions about those words. {T} questions in all.",
    "When those are done, write one more conclusion about the captain, and write down the two clues from the story that support it.",
    "If you get stuck on a question, tap Find It in the Story and read the line the page shows you."
  ] },
};
