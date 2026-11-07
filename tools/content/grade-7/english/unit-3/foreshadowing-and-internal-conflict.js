/* english/foreshadowing-and-internal-conflict
   Grade 7 · English · Unit 3 (Do the Right Thing), lesson 1. Built by tools/lessons.js.
   Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-11-07. The teaching sections, the Teacher Notes, the
   questions and the scripture choice are Claude's, written to the /teach-plan block in
   `plan` below and given the /natural pass. Paul has not read them.

   SOURCE: Holt Elements of Literature, First Course (2000), pp192-201, via the week 10-11
   packet (paraphrased notes). The Holt scan is the Texas teacher's edition and the gather
   got only the O. Henry opener, so the skill content follows the course plan and standard
   definitions: foreshadowing = clues that hint at later events; internal conflict = a
   struggle inside one character's mind. The five Word Bank words (habitual, intricate,
   dismally, egotism, simultaneously) and the end-mark rules are the book's.

   The STORY is O. Henry's "After Twenty Years" (The Four Million, 1906), Project Gutenberg
   #2776 (verified: the title page reads "The Four Million" by O. Henry). It is the author's
   words exactly, the whole story, split to one sentence per entry, with these changes only:
   em dashes turned into commas ("restaurant, 'Big Joe' Brady's restaurant" and "Well, well,
   well, twenty years is a long time") and the italic marks around Jimmy's note dropped.
   Nothing else is changed. "to-night" is O. Henry's own spelling and is left.

   ⚠️ ADDED FROM THE RECORD: nothing historical. The list of five clues in the second reading
   (the match and the scar and pin, the "sharpest wits" boast, the officer walking off, the
   collar and overcoat, the height) is OURS. The book names the scar, the diamond pin and
   "Silky" Bob; the nickname arrives with the reveal, so it is not taught as a clue.

   ⚠️ For Paul: the two video links are previews, not watched. The second one spoils the
   ending, said in its why. The scripture (Micah 6:8) is a working choice, his call. */
'use strict';
module.exports = {
  id: "english/foreshadowing-and-internal-conflict",
  slug: "foreshadowing-and-internal-conflict",
  title: "Foreshadowing and Internal Conflict",
  unit: "Literature · U3-L1",
  seq: { unit: 3, unitTitle: "Do the Right Thing", n: 1 },

  plan: {
    objective: "Find the clues that hint at a story's ending (foreshadowing) and explain a character's internal conflict and how he resolves it.",
    markers: [
      "BOOK (paraphrased), Holt Elements of Literature p192: foreshadowing is the use of clues to hint at events that will happen later in a story; O. Henry is famous for surprise endings, and readers go back to see whether clues were dropped.",
      "BOOK (paraphrased), p194 margin: the scar and the flashy diamond pin hint at facts about the man that are revealed later.",
      "BOOK (paraphrased), Word Bank p201: habitual, intricate, dismally, egotism, simultaneously, and the strategy of looking for a known word inside a strange one.",
      "BOOK (paraphrased), Grammar Link p201: period for a statement, question mark for a question, exclamation point for an exclamation.",
      "Internal conflict is on the course plan but its page was not seen: a struggle inside a character's own mind. Standard definition used.",
    ],
    method: "READ IT TWICE. THE FIRST TIME FOR THE SURPRISE, THE SECOND TIME TO HUNT FOR THE CLUES. For a character's internal conflict ask three questions: what two things pull on him, why can't he have both, and what does he choose?",
    exampleOnly: [
      "The dog and the fence, and the boy with the wallet. They are our own worlds for the method. The story is O. Henry's and the skills are the lesson, not the street corner.",
    ],
    digitize: "Reading engine on the whole story. A Watch It Worked that goes back through the story and names each clue and what it hints, a second one that answers the three internal-conflict questions about Jimmy Wells, and a short walk on end marks using lines from the story.",
    unclear: [],
  },
  natural: "2026-11-07",
  findsAt: 150,

  shelf: { grades: [7], subject: "English",
    blurb: "Two old friends promise to meet on a street corner in twenty years. How to find the clues a writer hides, and how to read a character who is pulled two ways at once.",
    contains: [
      "Teacher Notes written for whoever is teaching it",
      "O. Henry's whole story After Twenty Years, read aloud one line at a time",
      "A second reading that finds each clue and says what it hints",
      "A look at the struggle inside one character's mind",
      "Seven word cards, each with a check question",
    ] },
  eyebrow: ["English 7", "U3-L1", "Do the Right Thing"],
  dek: "A good surprise ending is fair, because the clues were on the page all along. Read it once for the surprise, then go back and find them.",
  scripture: {
    ref: "Micah 6:8",
    text: "He hath shewed thee, O man, what is good; and what doth the LORD require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will read O. Henry's After Twenty Years, find the clues that hint at its ending, explain the internal conflict of the patrolman, Jimmy Wells, and learn five new words from the story using context and a known word hiding inside a strange one."
      ]},
      { h: "Key Concepts", p: [
        "Foreshadowing is the use of clues to hint at something that happens later. A clue is easy to miss the first time, because it looks like a plain detail. The skill is going back and asking what a detail hints.",
        "An internal conflict is a struggle between two pulls inside one character's mind. The three questions in the lesson are what pulls, why not both, and what does he choose."
      ]},
      { h: "Where Students Get Stuck", p: [
        "Calling anything scary or dramatic a clue. A clue has to point at what happens later, and it has to be something the reader could have noticed.",
        "Saying Jimmy's conflict is with Bob. The struggle is inside Jimmy, and Bob never knows about it until he reads the note."
      ]},
      { h: "Teaching Suggestion", p: [
        "Have him read the story once before the second-reading section, and don't tell him the ending. The surprise only works once. Afterward, ask him to find one more clue of his own before reading the lesson's list.",
        "The lesson does not ask whether Jimmy was right. It asks what he chose and how, which is the skill."
      ]},
      { h: "Book Pages", p: [
        "Holt Elements of Literature, First Course (2000), pages 192 to 201. Read free on archive.org: https://archive.org/details/elementsoflitera0000unse_i0h7/page/192/mode/1up"
      ]},
      { h: "Suggested Videos", videos: [
        { id: "wufYU_DDw5o", title: "Flashback and Foreshadowing", channel: "Jennifer Lewis",
          why: "Clips that teach foreshadowing, and flashback too, which lesson U3-L3 uses. Preview it first." },
        { id: "wSchWcVJYRM", title: "After Twenty Years by O. Henry | Summary, Analysis & Moral Lesson", channel: "LISTEN WHILE YOU WORK",
          why: "An analysis of this story. It gives away the ending, so watch it only after he has read the story." }
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "A Promise for Twenty Years", s: [
      "Imagine you and your best friend promise to meet on a street corner exactly twenty years from tonight, no matter where life takes you.",
      "Twenty years is a long time, so when the night finally comes, a person could easily wonder who will walk up the street.",
      "O. Henry was famous for stories with surprise endings, and he wrote one about exactly that night.",
      "A good surprise is a fair one, which means the writer hid the clues in plain sight, and this lesson shows you how to find them and how to read a character who is pulled two ways at once."
    ]},

    { title: "Clues That Point Ahead", s: [
      "{{Foreshadowing}} is the use of clues to hint at something that will happen later in a story.",
      "A writer plants the clue early, where it looks like an ordinary detail, so that when the ending comes you can look back and see it was there all along.",
      "",
      "[ex] A story opens with a girl noticing that the dog keeps staring at the back fence, and near the end the dog slips out through a gap in it.",
      "",
      "The staring was a clue, even though nobody knew it yet, and that is all foreshadowing is.",
      "So the way to read a writer like O. Henry is twice, once to enjoy the surprise and once more to go back and hunt for what you missed."
    ]},

    { title: "A Fight Inside One Person", s: [
      "In Unit 1 you learned that a conflict is a struggle between two sides, and usually the two sides are different people.",
      "An {{internal conflict}} is a struggle where both sides are inside one character's own mind.",
      "",
      "[ex] A boy finds a wallet with sixty dollars in it, and part of him wants a new game while another part knows whose wallet it is.",
      "",
      "He can't do both, and that is what makes it a conflict, even though nobody else in the story is fighting him.",
      "To read an internal conflict, ask three questions: what two things pull on the character, why can't he have both, and what does he choose?"
    ]},

    { title: "Five Words Before You Read", s: [
      "The story uses a few words you may not know, and there's a trick for them that works better than skipping them.",
      "Look at the strange word for a smaller word you already know hiding inside it, and then check whether the sentences around it give you a clue.",
      "",
      "[ex] Take habitual: you can see the word habit inside it, and a habit is something you do again and again, so habitual means usual, done out of habit.",
      "",
      "Here are three words to watch for: {{habitual}} means done out of habit, {{intricate}} means complicated and full of small parts, and {{dismally}} means in a gloomy way.",
      "And two more: {{egotism}} means thinking too much of yourself, and {{simultaneously}} means at the same time.",
      "Now read the whole story straight through once, and save the clue hunt for afterward."
    ]},

    { title: "The Man in the Doorway", s: [
      "[story] The policeman on the beat moved up the avenue impressively.",
      "The impressiveness was habitual and not for show, for spectators were few.",
      "The time was barely 10 o’clock at night, but chilly gusts of wind with a taste of rain in them had well nigh de-peopled the streets.",
      "",
      "[story] Trying doors as he went, twirling his club with many intricate and artful movements, turning now and then to cast his watchful eye adown the pacific thoroughfare, the officer, with his stalwart form and slight swagger, made a fine picture of a guardian of the peace.",
      "The vicinity was one that kept early hours.",
      "Now and then you might see the lights of a cigar store or of an all-night lunch counter; but the majority of the doors belonged to business places that had long since been closed.",
      "",
      "[story] When about midway of a certain block the policeman suddenly slowed his walk.",
      "In the doorway of a darkened hardware store a man leaned, with an unlighted cigar in his mouth.",
      "As the policeman walked up to him the man spoke up quickly.",
      "“It’s all right, officer,” he said, reassuringly.",
      "“I’m just waiting for a friend.",
      "It’s an appointment made twenty years ago.",
      "Sounds a little funny to you, doesn’t it?",
      "Well, I’ll explain if you’d like to make certain it’s all straight.",
      "About that long ago there used to be a restaurant where this store stands, ‘Big Joe’ Brady’s restaurant.”",
      "",
      "[story] “Until five years ago,” said the policeman.",
      "“It was torn down then.”",
      "The man in the doorway struck a match and lit his cigar.",
      "The light showed a pale, square-jawed face with keen eyes, and a little white scar near his right eyebrow.",
      "His scarfpin was a large diamond, oddly set.",
      "",
      "[story] “Twenty years ago to-night,” said the man, “I dined here at ‘Big Joe’ Brady’s with Jimmy Wells, my best chum, and the finest chap in the world.",
      "He and I were raised here in New York, just like two brothers, together.",
      "I was eighteen and Jimmy was twenty.",
      "The next morning I was to start for the West to make my fortune.",
      "You couldn’t have dragged Jimmy out of New York; he thought it was the only place on earth.",
      "Well, we agreed that night that we would meet here again exactly twenty years from that date and time, no matter what our conditions might be or from what distance we might have to come.",
      "We figured that in twenty years each of us ought to have our destiny worked out and our fortunes made, whatever they were going to be.”",
    ]},

    { title: "Waiting for Jimmy", s: [
      "[story] “It sounds pretty interesting,” said the policeman.",
      "“Rather a long time between meets, though, it seems to me.",
      "Haven’t you heard from your friend since you left?”",
      "“Well, yes, for a time we corresponded,” said the other.",
      "“But after a year or two we lost track of each other.",
      "You see, the West is a pretty big proposition, and I kept hustling around over it pretty lively.",
      "But I know Jimmy will meet me here if he’s alive, for he always was the truest, stanchest old chap in the world.",
      "He’ll never forget.",
      "I came a thousand miles to stand in this door to-night, and it’s worth it if my old partner turns up.”",
      "The waiting man pulled out a handsome watch, the lids of it set with small diamonds.",
      "“Three minutes to ten,” he announced.",
      "“It was exactly ten o’clock when we parted here at the restaurant door.”",
      "“Did pretty well out West, didn’t you?” asked the policeman.",
      "“You bet!",
      "I hope Jimmy has done half as well.",
      "He was a kind of plodder, though, good fellow as he was.",
      "I’ve had to compete with some of the sharpest wits going to get my pile.",
      "A man gets in a groove in New York.",
      "It takes the West to put a razor-edge on him.”",
      "",
      "[story] The policeman twirled his club and took a step or two.",
      "“I’ll be on my way.",
      "Hope your friend comes around all right.",
      "Going to call time on him sharp?”",
      "“I should say not!” said the other.",
      "“I’ll give him half an hour at least.",
      "If Jimmy is alive on earth he’ll be here by that time.",
      "So long, officer.”",
      "",
      "[story] “Good-night, sir,” said the policeman, passing on along his beat, trying doors as he went.",
      "There was now a fine, cold drizzle falling, and the wind had risen from its uncertain puffs into a steady blow.",
      "The few foot passengers astir in that quarter hurried dismally and silently along with coat collars turned high and pocketed hands.",
      "And in the door of the hardware store the man who had come a thousand miles to fill an appointment, uncertain almost to absurdity, with the friend of his youth, smoked his cigar and waited.",
    ]},

    { title: "The Man in the Overcoat", s: [
      "[story] About twenty minutes he waited, and then a tall man in a long overcoat, with collar turned up to his ears, hurried across from the opposite side of the street.",
      "He went directly to the waiting man.",
      "“Is that you, Bob?” he asked, doubtfully.",
      "“Is that you, Jimmy Wells?” cried the man in the door.",
      "",
      "[story] “Bless my heart!” exclaimed the new arrival, grasping both the other’s hands with his own.",
      "“It’s Bob, sure as fate.",
      "I was certain I’d find you here if you were still in existence.",
      "Well, well, well, twenty years is a long time.",
      "The old restaurant’s gone, Bob; I wish it had lasted, so we could have had another dinner there.",
      "How has the West treated you, old man?”",
      "“Bully; it has given me everything I asked it for.",
      "You’ve changed lots, Jimmy.",
      "I never thought you were so tall by two or three inches.”",
      "“Oh, I grew a bit after I was twenty.”",
      "“Doing well in New York, Jimmy?”",
      "“Moderately.",
      "I have a position in one of the city departments.",
      "Come on, Bob; we’ll go around to a place I know of, and have a good long talk about old times.”",
      "The two men started up the street, arm in arm.",
      "The man from the West, his egotism enlarged by success, was beginning to outline the history of his career.",
      "The other, submerged in his overcoat, listened with interest.",
    ]},

    { title: "Under the Lights", s: [
      "[story] At the corner stood a drug store, brilliant with electric lights.",
      "When they came into this glare each of them turned simultaneously to gaze upon the other’s face.",
      "The man from the West stopped suddenly and released his arm.",
      "",
      "[story] “You’re not Jimmy Wells,” he snapped.",
      "“Twenty years is a long time, but not long enough to change a man’s nose from a Roman to a pug.”",
      "“It sometimes changes a good man into a bad one,” said the tall man.",
      "“You’ve been under arrest for ten minutes, ‘Silky’ Bob.",
      "Chicago thinks you may have dropped over our way and wires us she wants to have a chat with you.",
      "Going quietly, are you?",
      "That’s sensible.",
      "Now, before we go on to the station here’s a note I was asked to hand you.",
      "You may read it here at the window.",
      "It’s from Patrolman Wells.”",
      "",
      "[story] The man from the West unfolded the little piece of paper handed him.",
      "His hand was steady when he began to read, but it trembled a little by the time he had finished.",
      "The note was rather short.",
      "",
      "[story] Bob: I was at the appointed place on time.",
      "When you struck the match to light your cigar I saw it was the face of the man wanted in Chicago.",
      "Somehow I couldn’t do it myself, so I went around and got a plain clothes man to do the job.",
      "JIMMY.",
    ]},

    { title: "The Second Reading", s: [
      "Now go back, because several things that seemed like plain background the first time were clues.",
      "Read slowly this time, and ask of every detail whether it might be pointing at the ending.",
      "",
      "[walk] Hunting for the clues in After Twenty Years.",
      "[step] First the doorway, where the man's cigar is unlit until he strikes a match, and the light shows the officer a scar near his eyebrow and a large diamond pin. || CLUE: a match lights his face\nSHOWS: a white scar, a big diamond pin\nHINTS: the officer is getting a good look at him",
      "[step] Next the man's own boast, that he had to compete with some of the sharpest wits going to get his pile, which hints that his money may not have come from honest, plodding work. || CLUE: the sharpest wits going\nHINTS: Bob's fortune may not be honest",
      "[step] Then the officer, who has just seen the man's face and walks away without a word about it, as though he already has a plan. || CLUE: the officer leaves calmly\nHINTS: he knows more than he says",
      "[step] Then the man who comes to meet Bob, who keeps his collar turned up to his ears and sits low in a long overcoat, so Bob can't see him clearly in the dark. || CLUE: collar up, hidden in an overcoat\nHINTS: this man does not want to be seen",
      "[step] Last, Bob notices the man is two or three inches taller than he remembered, and the answer, that he grew a bit after twenty, is the sort of explanation a stranger might give. || CLUE: taller than Bob remembered\nHINTS: this may not be Jimmy at all",
      "",
      "Put them together and the ending stops being a trick, because every one of them was sitting on the page where you could have seen it.",
      "Notice that the nickname “Silky” Bob only shows up with the reveal, so the scar and the pin are the clues that do the hinting."
    ]},

    { title: "Jimmy's Struggle", s: [
      "Now use the three questions on the patrolman, Jimmy Wells, who turns out to be the first officer you met.",
      "The story never shows his thoughts directly, so we work out his struggle from what he does and what he writes.",
      "",
      "[walk] The internal conflict of Jimmy Wells.",
      "[step] First, what two things pull on him, because he promised to meet his best friend, and he's also an officer who sees a man the police want. || PULL 1: loyalty to his friend\nPULL 2: duty as an officer",
      "[step] Second, why can't he have both, since arresting his friend breaks the promise, and letting him go breaks the job. || arrest him: breaks the promise\nlet him go: breaks the duty",
      "[step] Third, what does he choose, and the answer is that he doesn't let Bob go and doesn't make the arrest himself, but goes and gets another officer to do it. || CHOICE: the duty gets done, by someone else\nNOTE: Somehow I couldn't do it myself",
      "",
      "The story never describes how Jimmy felt, so you read his struggle in what he does and in the short note he leaves.",
      "Notice that this is a conflict inside Jimmy and not one between Jimmy and Bob, because Bob never knew Jimmy was fighting it until he read the note."
    ]},

    { title: "How the Sentence Ends", s: [
      "One small tool before the questions, because the mark at the end of a sentence tells the reader how to hear it.",
      "O. Henry uses all three kinds of end mark in this story, and the book picked them out for practice.",
      "A period ends a statement or a polite command, a question mark ends a question, and an exclamation point ends an exclamation or a strong command.",
      "",
      "[walk] Choose the end mark for three lines from the story.",
      "[step] The man says he is just waiting for a friend, which is a plain statement, so it ends with a period. || I’m just waiting for a friend.",
      "[step] The new arrival asks who the man is, and a question needs a question mark. || Is that you, Bob?",
      "[step] His surprise at finding him is an exclamation, so it takes an exclamation point. || Bless my heart!"
    ]},

    { title: "Doing Right Is Not Always Easy", s: [
      "Go back to the street corner where this started.",
      "Two old friends had promised to meet there, and one of them had to decide what the promise was worth.",
      "Jimmy Wells kept his promise and did his duty, both at once, and it cost him his friend.",
      "",
      "[verse] Micah 6:8 says, “He hath shewed thee, O man, what is good; and what doth the LORD require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?”",
      "",
      "That verse sets doing justly and loving mercy side by side, and Jimmy's note shows a man who felt both pulls at once.",
      "The next lessons in this unit are about who is telling a story and what that lets you see, and about how to predict what comes next."
    ]}
  ],

  words: [
    ["Foreshadowing", "The use of clues to hint at events that will happen later in a story.", 4],
    ["Internal conflict", "A struggle that happens inside one character's own mind.", 10],
    ["Habitual", "Usual, done out of habit.", 21],
    ["Intricate", "Complicated, full of small parts.", 23],
    ["Dismally", "In a gloomy way.", 76],
    ["Egotism", "Thinking too much of yourself.", 97],
    ["Simultaneously", "At the same time.", 100]
  ],

  vocabQuestions: [
    { q: "What is <i>foreshadowing</i>?",
      choices: ["Clues early in a story that hint at what happens later", "The last sentence of a story", "A character's secret name", "A description of the weather"],
      right: 0, why: "Foreshadowing is the use of clues to hint at later events." },
    { q: "What is an <i>internal conflict</i>?",
      choices: ["A fight between two friends", "A struggle between two pulls inside one character's mind", "A storm that traps a character", "A race between two teams"],
      right: 1, why: "Both sides of an internal conflict are inside one character." },
    { q: "If you walk to school <i>habitually</i>, how do you walk?",
      choices: ["Out of habit, the usual way", "Only on Mondays", "By mistake", "In a hurry, once"],
      right: 0, why: "Habitual has the word habit hiding inside it." },
    { q: "An <i>intricate</i> clock has many tiny gears working together. What does intricate mean?",
      choices: ["Broken", "Complicated, full of small parts", "Very loud", "Brand new"],
      right: 1, why: "Many tiny gears working together is complicated and full of small parts." },
    { q: "He walked home <i>dismally</i> after the team lost. How did he walk?",
      choices: ["In a gloomy way", "In a cheerful way", "In a very fast way", "In a silly way"],
      right: 0, why: "After a loss, gloomy fits the sentence." },
    { q: "Which sentence shows <i>egotism</i>?",
      choices: ["He thanked everyone who had helped him.", "He talked for an hour about how great he was and never asked about anyone else.", "He shared his lunch with a friend.", "He listened quietly to the teacher."],
      right: 1, why: "Egotism is thinking too much of yourself." },
    { q: "Two runners crossed the finish line <i>simultaneously</i>. What happened?",
      choices: ["One crossed far ahead of the other", "They crossed at the same time", "They both stopped short", "Neither one finished"],
      right: 1, why: "Simultaneously means at the same time." }
  ],

  questions: [
    { q: "What is foreshadowing?", find: [4],
      hint: "Read Clues That Point Ahead.",
      choices: [
        "A clue early in a story that hints at something later",
        "The moment the problem is solved",
        "A character's thoughts told out loud",
        "The place where the story happens"
      ], right: 0,
      why: "Foreshadowing is a clue that hints at later events." },

    { q: "Why is the man waiting in the doorway of the darkened store?", find: [30],
      hint: "Read what he tells the policeman.",
      choices: [
        "He is hiding from the rain and has nowhere to go.",
        "He promised his friend twenty years ago to meet him at that spot.",
        "He is watching the store for a robber.",
        "He is lost and waiting for directions."
      ], right: 1,
      why: "They agreed to meet again at the same place and time, twenty years later." },

    { q: "What does the light of the match show the officer?", find: [38],
      hint: "Read The Man in the Doorway.",
      choices: [
        "A letter in the man's pocket",
        "A scar near his right eyebrow and a large diamond pin",
        "A badge on his coat",
        "The name of the restaurant"
      ], right: 1,
      why: "The scar and the diamond pin are the details the story gives." },

    { q: "Bob says he had to compete with some of the sharpest wits going to get his pile. What does that hint?", find: [65],
      hint: "Read Waiting for Jimmy.",
      choices: [
        "That he went to a school out West",
        "That his money may not have come from honest, plodding work",
        "That he has forgotten about Jimmy",
        "That he is angry at the officer"
      ], right: 1,
      why: "It is a clue that his fortune may not be honest." },

    { q: "Which detail about the second man is a clue that he isn't who Bob thinks he is?", find: [78],
      hint: "Read The Man in the Overcoat.",
      choices: [
        "He keeps his collar turned up to his ears and sits low in his overcoat.",
        "He greets Bob warmly and shakes his hands.",
        "He asks Bob how the West has treated him.",
        "He says the old restaurant is gone."
      ], right: 0,
      why: "He is hiding his face in the dark." },

    { q: "Which of these is an example of an internal conflict?", find: [10],
      hint: "Read A Fight Inside One Person.",
      choices: [
        "Two boys argue over who goes first in a game.",
        "A hiker is caught in a storm on a mountain.",
        "An officer's duty pulls against his loyalty to a friend.",
        "Two teams race to finish a puzzle."
      ], right: 2,
      why: "Both pulls are inside one person." },

    { q: "What two things pull on Jimmy Wells?", find: [132],
      hint: "Read Jimmy's Struggle.",
      choices: [
        "Money and fame",
        "Loyalty to his friend and duty as an officer",
        "Fear of the rain and fear of the dark",
        "A wish to travel West and a wish to stay home"
      ], right: 1,
      why: "He promised to meet his friend, and he is also an officer who sees a wanted man." },

    { q: "How does Jimmy settle his conflict?", find: [134],
      hint: "Read Jimmy's Struggle.",
      choices: [
        "He lets Bob go free and says nothing.",
        "He arrests Bob himself and says nothing to him.",
        "He gets another officer to make the arrest and leaves Bob a note.",
        "He leaves the city and never comes back."
      ], right: 2,
      why: "The duty gets done, but not by Jimmy's own hand." },

    { q: "Why is Jimmy's conflict an internal one?", find: [136],
      hint: "Read the end of Jimmy's Struggle.",
      choices: [
        "Because it happens in a city",
        "Because Bob and Jimmy never meet",
        "Because it is a struggle between two pulls inside Jimmy's own mind",
        "Because Jimmy wins it"
      ], right: 2,
      why: "Bob doesn't know about it until he reads the note, so the fight is inside Jimmy." },

    { q: "Which end mark does the line “Is that you, Bob” need?", find: [142],
      hint: "Read How the Sentence Ends.",
      choices: [
        "A period, because it names a person",
        "A question mark, because it asks something",
        "An exclamation point, because he is excited",
        "No mark, because it is in quotation marks"
      ], right: 1,
      why: "It asks who the man is, and a question takes a question mark." }
  ],

  todo: { title: "What To Do Now", s: [
    "Before anything else, read the story once straight through, without stopping to hunt, because the surprise only works the first time.",
    "Then work through the {c} word cards at the top of the page, {q} questions about the story, and {v} more questions about those words. {T} questions in all.",
    "When those are done, go back through the story once more and find one clue of your own that the lesson didn't list, and write it on a sheet of paper with what it hints.",
    "If you get stuck on a question, tap Find It in the Story and read the line the page shows you."
  ] },
};
