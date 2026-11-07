/* english/predictions-and-flashback
   Grade 7 · English · Unit 3 (Do the Right Thing), lesson 3. Built by tools/lessons.js.
   Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-11-07. The teaching sections, the Teacher Notes, the
   questions and the scripture choice are Claude's, written to the /teach-plan block in
   `plan` below and given the /natural pass. Paul has not read them.

   SOURCE: Holt Elements of Literature, First Course (2000), pp204-215, via the week 10-11
   packet. THE PACKET HAS NO NOTES ON THIS SELECTION (not captured), so the skills follow the
   course plan: make and confirm predictions, flashback, chronological order. The book's
   story, "A Mason-Dixon Memory" by Clifton Davis, is copyrighted and is NOT used.

   ⚠️ STORY PICK, CLAUDE'S, FOR PAUL TO SWAP: Charles Dickens, "A Christmas Carol" (1843),
   from Stave II, "The First of the Three Spirits", Project Gutenberg #46 (verified: the title
   page reads "A Christmas Carol in Prose; Being a Ghost Story of Christmas" by Charles
   Dickens). Why: (1) Stave II is a flashback, the Ghost of Christmas Past carries Scrooge
   into a scene from his own boyhood, so the flashback is the whole point and easy to name;
   (2) it is about doing the right thing, ending on Scrooge's first regret about the carol
   singer; (3) it has clear stop-and-predict points, where the Ghost's words and Scrooge's
   reactions give clues; (4) no graphic violence. It is an excerpt of six pieces: the Ghost's
   first words and "Rise! and walk with me!", the country road, the boys on ponies, "The
   school is not quite deserted", the schoolroom, and Scrooge's regret. The paragraphs
   between them are left out (the Ali Baba and storybook passage is skipped, said in one
   line in the lesson). The words are Dickens' exactly, split to one sentence per entry, with
   these changes only: two British spellings made American (the traveler word and the word
   toward, which Dickens spelled with an s), and the straight quotation marks and
   apostrophes made curly. The rest of the Gutenberg text is untouched. His sentences are
   long and a 12-year-old may find the language hard, so the lesson sets up the plot in our
   own words first and teaches three of his words.

   ⚠️ ADDED FROM THE RECORD: the story was written by Dickens and published in 1843. The
   setup paragraph about Scrooge (a rich old man who hates Christmas) is OURS, summarizing
   the story's well-known opening.

   ⚠️ For Paul: the videos are previews, not watched. The scripture (Proverbs 19:17) is a
   working choice, his call. */
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
  ["Stop", "Prediction", "Clue", "What happened"],
  ["1", "He will see his own past", "Your past", "He stands on a road in his old town"],
  ["2", "He will be glad to be home", "He cries out about the place", "Glad of the boys, bitter about Christmas"],
  ["3", "The lonely child is Scrooge", "He knew it, and he sobbed", "He weeps for his younger self"],
];
module.exports = {
  id: "english/predictions-and-flashback",
  slug: "predictions-and-flashback",
  title: "Predictions and Flashback",
  unit: "Literature · U3-L3",
  seq: { unit: 3, unitTitle: "Do the Right Thing", n: 3 },

  plan: {
    objective: "Make a prediction from clues, check and revise it while reading, and recognize a flashback and why the writer used it.",
    markers: [
      "COURSE PLAN (Holt pp204-215, not read): make and confirm predictions, with prior knowledge; flashback; chronological order.",
      "OURS: stop three times, write a prediction, a clue and what happened in a chart; a flashback explains why a character is the way he is.",
    ],
    method: "STOP, LOOK FOR CLUES, GUESS, THEN READ ON AND CHECK. IF THE GUESS IS WRONG OR HALF RIGHT, REVISE IT. A FLASHBACK IS A SCENE FROM THE PAST PLACED INSIDE THE STORY, AND IT USUALLY EXPLAINS WHY A CHARACTER ACTS AS HE DOES.",
    exampleOnly: [
      "The diving board and the lake. Our own world for the method. The story is Dickens' and the skills are the lesson, not Christmas.",
    ],
    digitize: "Reading engine on a six-piece excerpt with three stop points. A Watch It Worked at each stop that names the clues and writes the guess, a check that revises, and a final chart of prediction, clue and what happened.",
    unclear: [
      "Which public-domain story. The pick is Claude's, in the header, and goes to Paul to swap.",
    ],
  },
  natural: "2026-11-07",
  findsAt: 93,

  shelf: { grades: [7], subject: "English",
    blurb: "Stop, guess, read on, and check. A scene from Dickens' A Christmas Carol where a ghost carries an old man back into his own boyhood.",
    contains: [
      "Teacher Notes written for whoever is teaching it",
      "An excerpt from Charles Dickens' A Christmas Carol, read aloud one line at a time",
      "Three stop points where you make a prediction and then check it",
      "What a flashback is and why a writer uses one",
      "Six word cards, each with a check question",
    ] },
  eyebrow: ["English 7", "U3-L3", "Do the Right Thing"],
  dek: "Good readers guess what comes next and then check. And sometimes the story jumps back in time to show you why.",
  scripture: {
    ref: "Proverbs 19:17",
    text: "He that hath pity upon the poor lendeth unto the LORD; and that which he hath given will he pay him again.",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will make a prediction from clues, check it and revise it while reading, recognize a flashback and say why the writer used it, and learn three words from the text."
      ]},
      { h: "Key Concepts", p: [
        "A prediction is a smart guess built from clues in the text and what the reader already knows. A guess that turns out wrong or half right is not a failure, it is revised.",
        "A flashback is a scene from earlier in time inside a story set in the present. Writers use it to explain why a character acts the way he does."
      ]},
      { h: "Where Students Get Stuck", p: [
        "Guessing with no clue behind it. Ask him which line of the text made him think that.",
        "Dickens' sentences are long. The lesson sets up the plot first, and a good habit is to read one comma at a time."
      ]},
      { h: "Teaching Suggestion", p: [
        "Have him cover the page below each stop, say his prediction out loud, and then uncover it. The final chart is the same exercise on paper.",
        "The story is a public-domain excerpt standing in for Holt's A Mason-Dixon Memory, which is copyrighted. Paul can swap it."
      ]},
      { h: "Book Pages", p: [
        "Holt Elements of Literature, First Course (2000), pages 204 to 215. Read free on archive.org: https://archive.org/details/elementsoflitera0000unse_i0h7/page/204/mode/1up"
      ]},
      { h: "Suggested Videos", videos: [
        { id: "dpVdzvvmte0", title: "Making Predictions When Reading a Story // How To Predict When Reading // Reading For Kids", channel: "Molly's Learning Lab",
          why: "A friendly walk through making a prediction from clues. Aimed at younger kids, so a quick refresher." },
        { id: "wufYU_DDw5o", title: "Flashback and Foreshadowing", channel: "Jennifer Lewis",
          why: "Clips that show what a flashback is, and foreshadowing too, from the last lesson. Preview it first." }
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Guessing Before You Know", s: [
      "You make predictions all the time without calling them that, like guessing who is at the door when the dog starts barking, or guessing it will rain when the sky turns dark.",
      "A {{prediction}} is a smart guess about what will happen next, built from clues in the story and from what you already know.",
      "Good readers don't wait until the end to find out, because they stop every so often, make a guess, and keep reading to see whether they were right.",
      "And when a guess turns out wrong or only half right, they don't feel foolish; they {{revise}} it, which means they fix the guess using what they just learned.",
      "So the method has three steps, which are to stop and look for clues, to make a guess, and then to read on and check it."
    ]},

    { title: "A Scene From the Past", s: [
      "A {{flashback}} is a scene from earlier in time that is placed in the middle of a story that is happening now.",
      "",
      "[ex] A girl stands at the end of a diving board, afraid to jump, and then the story slips back to the summer she first fell into the lake and learned to swim.",
      "",
      "That jump back is a flashback, and the writer used it to show why she's afraid and what she has to remember in order to be brave.",
      "Writers use flashbacks to explain why a character acts the way he does, and to make the reader feel for him, which is exactly what Dickens does in the story ahead."
    ]},

    { title: "Meet Scrooge", s: [
      "The reading is from A Christmas Carol, a story Charles Dickens wrote and published in 1843, and this short summary of the setup is ours, while the reading itself is Dickens' own words.",
      "Scrooge is a rich old man who hates Christmas and never gives anything to anybody, and on Christmas Eve he is visited in his bedroom at midnight by the Ghost of Christmas Past.",
      "Dickens wrote long sentences with a lot of commas, so read slowly, one comma at a time, and use the trick from the last lesson when a word looks strange.",
      "Three words to watch for are {{jocund}}, which means cheerful, {{solitary}}, which means alone, and {{melancholy}}, which means sad and gloomy.",
      "The ghost has just arrived, and Scrooge is asking who it is."
    ]},

    { title: "The Ghost Arrives", s: [
      "[story] “I am the Ghost of Christmas Past.”",
      "“Long Past?” inquired Scrooge: observant of its dwarfish stature.",
      "“No.",
      "Your past.”",
      "",
      "[story] “Your welfare!” said the Ghost.",
      "Scrooge expressed himself much obliged, but could not help thinking that a night of unbroken rest would have been more conducive to that end.",
      "The Spirit must have heard him thinking, for it said immediately: “Your reclamation, then.",
      "Take heed!”",
      "It put out its strong hand as it spoke, and clasped him gently by the arm.",
      "“Rise! and walk with me!”",
    ]},

    { title: "Stop One: Make a Guess", s: [
      "Stop here before you read on, because you already have clues, and a clue is something the text actually says.",
      "Ask yourself what the Ghost has told you so far and where he seems to be heading.",
      "",
      "[walk] The first prediction.",
      "[step] The Ghost says it is the Ghost of Christmas Past, and when Scrooge asks if that means long past, it answers that it is his past. || CLUE 1: Your past.",
      "[step] Then the Ghost clasps his arm and tells him to rise and walk with it, so they are going somewhere. || CLUE 2: Rise! and walk with me!",
      "[step] Put the two clues together and guess that the Ghost is going to take him to places from his own earlier life. || PREDICTION: he will see his own past",
      "",
      "That is a good guess because both clues point at it, and now you can read on and see whether it holds.",
      "A guess with two clues pointing at it is much stronger than a guess with none."
    ]},

    { title: "A Country Road", s: [
      "[story] As the words were spoken, they passed through the wall, and stood upon an open country road, with fields on either hand.",
      "The city had entirely vanished.",
      "Not a vestige of it was to be seen.",
      "The darkness and the mist had vanished with it, for it was a clear, cold, winter day, with snow upon the ground.",
      "“Good Heaven!” said Scrooge, clasping his hands together, as he looked about him.",
      "“I was bred in this place.",
      "I was a boy here!”",
    ]},

    { title: "Stop Two: Check, Then Guess Again", s: [
      "Check the first guess against what you just read.",
      "Then use what you learned to guess again, and see how the second guess builds on the first.",
      "",
      "[walk] Check one and make two.",
      "[step] The guess held, because Scrooge says he was bred in this place and was a boy here, so they have gone back to his own past. || CHECK 1: right\nCLUE: I was a boy here!",
      "[step] Now guess how he feels, and since he clasps his hands and cries out about the place, guess that he is glad to be home. || PREDICTION 2: he is glad to be home",
      "",
      "Keep that second guess loose, because it may need revising once you see more.",
      "A loose guess is easy to fix, and that is exactly the idea."
    ]},

    { title: "Boys on Ponies", s: [
      "[story] Some shaggy ponies now were seen trotting toward them with boys upon their backs, who called to other boys in country gigs and carts, driven by farmers.",
      "All these boys were in great spirits, and shouted to each other, until the broad fields were so full of merry music, that the crisp air laughed to hear it!",
      "“These are but shadows of the things that have been,” said the Ghost.",
      "“They have no consciousness of us.”",
      "The jocund travelers came on; and as they came, Scrooge knew and named them every one.",
      "Why was he rejoiced beyond all bounds to see them!",
      "Why did his cold eye glisten, and his heart leap up as they went past!",
      "Why was he filled with gladness when he heard them give each other Merry Christmas, as they parted at cross-roads and bye-ways, for their several homes!",
      "What was merry Christmas to Scrooge?",
      "Out upon merry Christmas!",
      "What good had it ever done to him?",
    ]},

    { title: "Check Two: Revise", s: [
      "Scrooge is glad when he sees the boys, since his cold eye glistens and his heart leaps up, but when he hears them say Merry Christmas he turns bitter.",
      "Look at both halves of his reaction before you decide how the guess held up.",
      "",
      "[walk] Check the second guess.",
      "[step] The guess was only half right, because he is glad of the boys but bitter about Christmas, so it needs revising. || GUESS: glad to be home\nWHAT HAPPENED: glad of the boys, bitter about Christmas\nREVISED: mixed feelings",
      "",
      "Notice that the revised guess is better than the first one, and that is the whole point of checking.",
      "A guess that gets better as you read is a guess doing its job."
    ]},

    { title: "A Lonely Child", s: [
      "[story] “The school is not quite deserted,” said the Ghost.",
      "“A solitary child, neglected by his friends, is left there still.”",
      "Scrooge said he knew it.",
      "And he sobbed.",
    ]},

    { title: "Stop Three: Who Is the Child?", s: [
      "Stop again, because the last four lines hold clues about the lonely child.",
      "Look at how the Ghost and Scrooge each react before you guess.",
      "",
      "[walk] The third prediction.",
      "[step] The Ghost says a solitary child, neglected by his friends, is left at the school still, and the child is alone at Christmas. || CLUE 1: a solitary child, neglected by his friends",
      "[step] Scrooge says he knew it, and then he sobbed, which is not how a man reacts to a stranger. || CLUE 2: Scrooge said he knew it. And he sobbed.",
      "[step] Put the clues together and guess that the lonely child is Scrooge himself, as a boy. || PREDICTION 3: the child is Scrooge",
      ""
    ]},

    { title: "The Schoolroom", s: [
      "[story] They went, the Ghost and Scrooge, across the hall, to a door at the back of the house.",
      "It opened before them, and disclosed a long, bare, melancholy room, made barer still by lines of plain deal forms and desks.",
      "At one of these a lonely boy was reading near a feeble fire; and Scrooge sat down upon a form, and wept to see his poor forgotten self as he used to be.",
    ]},

    { title: "One Regret", s: [
      "In the lines we skipped, Scrooge laughs and cries over the storybook heroes the boy loved, and then the Ghost asks him what the matter is.",
      "Here is how he answers.",
      "[story] “I wish,” Scrooge muttered, putting his hand in his pocket, and looking about him, after drying his eyes with his cuff: “but it’s too late now.”",
      "“What is the matter?” asked the Spirit.",
      "“Nothing,” said Scrooge.",
      "“Nothing.",
      "There was a boy singing a Christmas Carol at my door last night.",
      "I should like to have given him something: that’s all.”",
    ]},

    { title: "What the Flashback Did", s: [
      "Fill in the chart with the three stops, which shows what a reader did and what the text did.",
      "Read across each row to see how a guess, a clue and the real result line up.",
      "",
      "[walk] The prediction chart.",
      "[step] Read across each row, from the guess, to the clue behind it, to what really happened. || " + table(CHART),
      "",
      "Look at what the flashback did, because without it Scrooge is only a grumpy old man at his door, and with it we see a lonely boy who grew into him.",
      "It also set up the last lines, where the hard old man says he'd like to have given the carol singer something, which is the first small sign of him doing right.",
      "",
      "[verse] Proverbs 19:17 says, “He that hath pity upon the poor lendeth unto the LORD; and that which he hath given will he pay him again.”",
      "",
      "That verse is about being kind to those who have little, and Scrooge's regret is a first step toward it.",
      "Now it is your turn to predict, because the lesson's last task is to guess what Scrooge will do next, and to name the line that made you think so."
    ]}
  ],

  words: [
    ["Prediction", "A smart guess about what will happen next, based on clues and what you already know.", 1],
    ["Revise", "To fix a guess or a draft using what you have learned.", 3],
    ["Flashback", "A scene from earlier in time placed inside a story that is happening now.", 5],
    ["Jocund", "Cheerful.", 50],
    ["Solitary", "Alone.", 64],
    ["Melancholy", "Sad and gloomy.", 74]
  ],

  vocabQuestions: [
    { q: "What is a <i>prediction</i>?",
      choices: ["A smart guess about what will happen next, based on clues", "A summary of what already happened", "The last line of a story", "A character's name"],
      right: 0, why: "A prediction is a smart guess built from clues." },
    { q: "You guessed a character would be happy, but he turns out to be sad. What do good readers do with the guess? They <i>revise</i> it. What does revise mean?",
      choices: ["Fix it using what they learned", "Hide it", "Forget it", "Say it louder"],
      right: 0, why: "To revise is to fix a guess using what you have learned." },
    { q: "What is a <i>flashback</i>?",
      choices: ["A scene from the past placed inside a story that is happening now", "A glimpse of the future", "A picture in a book", "A very short chapter"],
      right: 0, why: "A flashback jumps back in time." },
    { q: "The <i>jocund</i> crowd laughed and sang. What does jocund mean?",
      choices: ["Cheerful", "Angry", "Tired", "Silent"],
      right: 0, why: "A crowd that laughs and sings is cheerful." },
    { q: "She was the <i>solitary</i> child on the playground. What does solitary mean?",
      choices: ["Alone", "Loud", "Brave", "Hungry"],
      right: 0, why: "A child alone on a playground is solitary." },
    { q: "The empty house felt <i>melancholy</i>. What does melancholy mean?",
      choices: ["Sad and gloomy", "Cheerful and warm", "Brand new", "Very large"],
      right: 0, why: "An empty house feels sad and gloomy." }
  ],

  questions: [
    { q: "What is a prediction?", find: [1],
      hint: "Read Guessing Before You Know.",
      choices: [
        "A smart guess about what will happen next, built from clues",
        "A wild guess with no clue behind it",
        "A summary of what already happened",
        "The last line of a story"
      ], right: 0,
      why: "A prediction is a guess built from clues and what you know." },

    { q: "Which of these is a flashback?", find: [5],
      hint: "Read A Scene From the Past.",
      choices: [
        "A story set today suddenly shows the main character at five years old",
        "A story opens with a long description of the weather",
        "A character makes a plan for next week",
        "Two characters argue about a game"
      ], right: 0,
      why: "A flashback jumps back to an earlier time inside the story." },

    { q: "Scrooge asks the Ghost if it is the Long Past, and the Ghost says, “No. Your past.” What does that mean?", find: [15],
      hint: "Read The Ghost Arrives.",
      choices: [
        "The Ghost comes from the days of knights and castles.",
        "The Ghost belongs to Scrooge's own earlier life.",
        "The Ghost used to be Scrooge's teacher.",
        "The Ghost wants to forget the past."
      ], right: 1,
      why: "The Ghost is going to show him his own past." },

    { q: "Where do Scrooge and the Ghost stand after they pass through the wall?", find: [32],
      hint: "Read A Country Road.",
      choices: [
        "In a crowded city street",
        "On an open country road on a clear, cold winter day",
        "In a schoolroom",
        "In a church"
      ], right: 1,
      why: "The city is gone, and they stand on a country road with snow on the ground." },

    { q: "How does Scrooge feel about the Christmas greetings the boys call to each other?", find: [54],
      hint: "Read Boys on Ponies.",
      choices: [
        "He is glad of the boys but bitter about Christmas.",
        "He is angry at the boys and glad about Christmas.",
        "He feels nothing at all.",
        "He is afraid of the ponies."
      ], right: 0,
      why: "His heart leaps at the boys, but he asks what good Christmas ever did him." },

    { q: "Who is the solitary child left at the school?", find: [64],
      hint: "Read Stop Three.",
      choices: [
        "A stranger Scrooge has never met",
        "Scrooge's nephew",
        "Scrooge himself, as a boy",
        "The Ghost"
      ], right: 2,
      why: "Scrooge knew it, and he wept to see his poor forgotten self." },

    { q: "A reader guessed that Scrooge would be glad to be home, then read that he is glad of the boys but bitter about Christmas. What should the reader do?", find: [57],
      hint: "Read Check Two.",
      choices: [
        "Keep the guess exactly the same",
        "Revise the guess to say his feelings are mixed",
        "Decide the author made a mistake",
        "Stop making predictions"
      ], right: 1,
      why: "A guess that is half right gets revised." },

    { q: "How does the flashback help the story?", find: [88],
      hint: "Read What the Flashback Did.",
      choices: [
        "It shows a lonely boy who grew into a hard old man, so we feel for Scrooge.",
        "It tells us how the story ends.",
        "It adds a new main character.",
        "It makes the story shorter."
      ], right: 0,
      why: "It explains why Scrooge is the way he is." },

    { q: "What does Scrooge wish at the end of the excerpt?", find: [83],
      hint: "Read One Regret.",
      choices: [
        "That he had stayed at school longer",
        "That he had given something to the boy who sang a carol at his door",
        "That he could go home to his bed",
        "That he had never met the Ghost"
      ], right: 1,
      why: "He says he'd like to have given the carol singer something." },

    { q: "What are the three steps of predicting?", find: [4],
      hint: "Read Guessing Before You Know.",
      choices: [
        "Stop and look for clues, make a guess, read on and check it",
        "Read the end, change the end, forget the end",
        "Skip ahead, guess, close the book",
        "Read fast, read slow, read twice"
      ], right: 0,
      why: "Clues, guess, check." }
  ],

  todo: { title: "What To Do Now", s: [
    "Before anything else, read the story through one piece at a time, and stop at each of the three stops to write your own guess on a sheet of paper before you read on.",
    "Then work through the {c} word cards at the top of the page, {q} questions about the story, and {v} more questions about those words. {T} questions in all.",
    "When those are done, write one prediction of your own about what Scrooge will do next, and write down the line from the story that made you think so.",
    "If you get stuck on a question, tap Find It in the Story and read the line the page shows you."
  ] },
};
