/* english/kinds-of-nonfiction
   Grade 7 · English · Unit 2 (Who Am I?), lesson 2. Built by tools/lessons.js.
   Edit the lesson here, not in the registry.

   🚨 DRAFT PROSE, marked per /lesson: the teaching sections, the Teacher Notes, the
   questions and the scripture choice are Claude's, written 2026-10-05 on Sonnet to the
   /teach-plan block in `plan` below and given the /natural pass. Paul has not read them.
   The scripture (Luke 1:3-4) is a suggestion, his call.

   THE THREE SAMPLES are public-domain texts, the authors' words exactly, split to one
   sentence per entry, in their own [story] paragraphs.
   1. AUTOBIOGRAPHY: Benjamin Franklin, "The Autobiography of Benjamin Franklin",
      Project Gutenberg #148 (verified title page), the two paragraphs where he arrives
      in Philadelphia. Franklin's spelling is from 1790 and a few archaic forms are
      modernized (cloaths to clothes, stuff'd to stuffed, refus'd to refused, bisket to
      biscuit, ask'd to asked, surpriz'd to surprised, walk'd to walked, thro' to
      through), plus the doubled-l spelling of traveling made American, and an old word for a
      drink made plain. ⚠️ Those modernizations are my call, worth a glance.
   2. BIOGRAPHY: Samuel G. Goodrich, "The Life of Benjamin Franklin, Illustrated by
      Tales, Sketches, and Anecdotes", Project Gutenberg #38469 (verified title page,
      1832), numbered paragraphs 7 to 9, the same morning told in the third person.
      The doubled-l spelling of traveler is made American.
   3. THE PLAIN-FACTS SAMPLE: the opening paragraph of the same Goodrich book (Franklin's
      birth and family). ⚠️ The plan asked for a "report-style" paragraph, and a PD news
      report would have been a different subject and a harder read for a 12-year-old, so
      this paragraph stands in as the objective sample. It's a biography passage, and
      the lesson says so; the report and news story kind is explained in prose only.
      Worth a glance from Paul.

   They stand in for Holt's Elements of Literature page on nonfiction, which is
   copyrighted. ⚠️ All three picks are Claude's; the plan says they go to the review
   queue for Paul to swap.

   ⚠️ THE BOOK'S TWO EXPERIMENTS (two relatives telling one family event, and a silent
   walk with ten sensory details) are in `todo` and the Teacher Notes as things to do,
   not in the story. */
'use strict';
module.exports = {
  id: "english/kinds-of-nonfiction",
  slug: "kinds-of-nonfiction",
  title: "Kinds of Nonfiction",
  unit: "Literature · U2-L2",
  seq: { unit: 2, unitTitle: "Who Am I?", n: 2 },

  plan: {
    objective: "Name the main kinds of nonfiction (autobiography, memoir, biography, essay, report or news story), and tell objective writing from subjective writing.",
    markers: [
      "BOOK (paraphrased), Holt Elements of Literature pp121-122, Nonfiction: Encountering Our Lives: define and identify nonfiction, see how it's like and unlike fiction, and tell subjective from objective writing.",
      "BOOK (paraphrased): fiction writers claim to make things up and nonfiction writers claim to base their work on real happenings, and both use plot, character, conflict, setting, point of view and theme.",
      "BOOK (paraphrased): nonfiction includes personal histories (autobiographies and memoirs), biographies, personal essays, and reports and feature stories.",
      "BOOK (paraphrased), Experiment 1: two family members tell the same family event, and the student compares them with his own memory; people remember one event differently.",
      "BOOK (paraphrased), Experiment 2: take a silent observation walk and write at least ten sensory details.",
    ],
    method: "NONFICTION SAYS IT HAPPENED, AND IT USES THE SAME TOOLS AS FICTION. Name the kinds by who is telling and what they're telling. Then tell objective from subjective: objective writing gives the facts without the writer's feelings, and subjective writing lets the writer's feelings and judgments show.",
    exampleOnly: [
      "The two cousins and the birthday cake are our own world for the opening. The three samples are all about the same young man in the same city, so the kinds can be compared on one subject.",
      "Holt's page is copyrighted, so public-domain samples carry the lesson. World: Benjamin Franklin's first morning in Philadelphia.",
    ],
    digitize: "Reading engine on three short public-domain samples, each in its own [story] paragraph with a sentence or two of our own in front. Questions name the kind of each sample and ask objective or subjective. Written: the book's two experiments, as take-home tasks.",
    unclear: [
      "Which public-domain samples. Not a teaching question, so it does not stop the build. The picks go in the review queue for Paul to swap, and the third (plain facts) is a biography passage rather than a true report.",
    ],
  },
  natural: "2026-10-05",
  findsAt: 55,

  shelf: { grades: [7], subject: "English",
    blurb: "A seventeen-year-old with three rolls of bread, told by himself, told by a biographer, and told as plain facts. Five kinds of nonfiction, and the difference between facts and feelings.",
    contains: [
      "Teacher Notes written for whoever is teaching it",
      "Three samples of nonfiction, all about the same young man, read aloud one line at a time",
      "Four vocabulary cards, each with a check question",
      "Questions that name the kind of each sample and tell objective from subjective",
      "Two short tasks to do on your own, one with a relative and one on a silent walk",
    ] },
  eyebrow: ["English 7", "U2-L2", "Who Am I?"],
  dek: "Nonfiction says it really happened, but it isn't all written the same way. Here's one young man's arrival in a city, told three ways.",
  scripture: {
    ref: "Luke 1:3-4",
    text: "It seemed good to me also, having had perfect understanding of all things from the very first, to write unto thee in order, most excellent Theophilus, That thou mightest know the certainty of those things, wherein thou hast been instructed.",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will name the main kinds of nonfiction (autobiography, memoir, biography, essay, and report or news story), explain how nonfiction is like and unlike fiction, and tell objective writing from subjective writing, using three samples about one subject."
      ]},
      { h: "Key Concepts", p: [
        "Nonfiction is writing that claims to be about real events and people. It still uses plot, character, setting and point of view, which is why a good one reads like a story.",
        "Objective writing sticks to facts and keeps the writer's feelings out, and subjective writing shows them. Most nonfiction is a mix, and the question is how much of each."
      ]},
      { h: "Where Students Get Stuck", p: [
        "Thinking nonfiction can't be subjective. A true account can be full of the writer's feelings, and Franklin's own account of his arrival is subjective for exactly that reason.",
        "Treating a biography as always objective. A biographer chooses what to include and may guess at feelings, as Goodrich does with “probably thought,” which is why he sits in the middle."
      ]},
      { h: "Teaching Suggestion", p: [
        "Do the book's two experiments with the student. Have two relatives tell the same family event separately, then compare, and take a silent walk and write ten things you saw, heard, smelled or felt. Both show the point of the lesson better than a definition does."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Two Cousins, One Birthday", s: [
      "At a family dinner, two cousins tell the story of the day the dog got the birthday cake, and every person at the table has heard it before.",
      "In the first cousin's version the dog swallowed the entire cake in one gulp, and in the second one it took a single bite before it was chased from the room.",
      "Both of them swear they're telling exactly what happened, and neither of them is making anything up.",
      "So what makes a story nonfiction, and what do you do when two true stories don't match?"
    ]},

    { title: "It Says It Happened", s: [
      "{{Nonfiction}} is writing that claims to be about something that really happened to real people, and fiction is writing that says it's made up.",
      "That doesn't mean nonfiction is dull, because it uses the same tools that stories do, with a plot that rises and falls, characters in trouble, a setting, and a point of view that chooses what you get to see.",
      "The cousins show the tricky part: every writer of true things still decides what to put in, what to leave out and how it felt, so two honest tellings of one afternoon can come out differently."
    ]},

    { title: "Five Kinds of True Writing", s: [
      "Writers of nonfiction have a few main forms, and each answers a different question about who's telling and what they're telling.",
      "An autobiography is a person's life told by that person, and a {{memoir}} is the writer's memories of a particular time or place.",
      "A biography is the story of a person's life told by someone else, and an essay is a short piece in which a writer thinks about an idea or tells a bit of experience.",
      "A report or a news story gives you the facts about something that happened, and the writer tries to stay out of the way."
    ]},

    { title: "Facts Only, or Feelings Too?", s: [
      "A second question cuts across all five kinds: does the writer let his feelings show?",
      "{{Objective}} writing sticks to facts and keeps the writer's feelings out of it, and {{subjective}} writing lets the writer's feelings and judgments show.",
      "",
      "[ex] The bakery opens at six in the morning.",
      "[ex] The bakery smells wonderful in the morning.",
      "",
      "The first is objective, because you could check the time, and the second is subjective, because wonderful is a feeling, and the same bakery can be described both ways."
    ]},

    { title: "Sample One: A Runaway Arrives", s: [
      "Benjamin Franklin ran away from his apprenticeship in Boston at seventeen and arrived in Philadelphia almost penniless, and years later he wrote his own account of that morning.",
      "Read it as an autobiography, and listen for how much of Franklin himself is in it.",
      "",
      "[story] I was in my working dress, my best clothes being to come round by sea.",
      "I was dirty from my journey; my pockets were stuffed out with shirts and stockings, and I knew no soul nor where to look for lodging.",
      "I was fatigued with traveling, rowing, and want of rest, I was very hungry; and my whole stock of cash consisted of a Dutch dollar, and about a shilling in copper.",
      "The latter I gave the people of the boat for my passage, who at first refused it, on account of my rowing; but I insisted on their taking it.",
      "A man being sometimes more generous when he has but a little money than when he has plenty, perhaps through fear of being thought to have but little.",
      "",
      "[story] Then I walked up the street, gazing about till near the market-house I met a boy with bread.",
      "I had made many a meal on bread, and, inquiring where he got it, I went immediately to the baker’s he directed me to, in Second-street, and asked for biscuit, intending such as we had in Boston; but they, it seems, were not made in Philadelphia.",
      "Then I asked for a three-penny loaf, and was told they had none such.",
      "So not considering or knowing the difference of money, and the greater cheapness nor the names of his bread, I made him give me three-penny worth of any sort.",
      "He gave me, accordingly, three great puffy rolls.",
      "I was surprised at the quantity, but took it, and, having no room in my pockets, walked off with a roll under each arm, and eating the other.",
      "Thus I went up Market-street as far as Fourth-street, passing by the door of Mr. Read, my future wife’s father; when she, standing at the door, saw me, and thought I made, as I certainly did, a most awkward, ridiculous appearance.",
      "Then I turned and went down Chestnut-street and part of Walnut-street, eating my roll all the way, and, coming round, found myself again at Market-street wharf, near the boat I came in, to which I went for a drink of the river water; and, being filled with one of my rolls, gave the other two to a woman and her child that came down the river in the boat with us, and were waiting to go farther.",
    ]},

    { title: "Sample Two: The Same Morning, Told by a Stranger", s: [
      "Now here's the same morning, told by a different writer who wasn't there.",
      "Samuel Goodrich wrote a life of Franklin in 1832, more than forty years after his death, and he tells it in the third person.",
      "",
      "[story] Our young traveler had sent his best clothes by another conveyance from New York, and he was in his old working dress.",
      "His pockets were stuffed out with shirts and stockings, and he knew not where to look for lodgings.",
      "He was tired with walking, rowing, and want of sleep, and was, besides, very hungry.",
      "His whole stock of cash was a single silver dollar and about a shilling in copper coin.",
      "The copper he gave to the boatmen for his passage.",
      "",
      "[story] As he walked along the street, gazing at the new things he saw, and wondering what would be the end of his trouble, he met a boy with some bread.",
      "Inquiring where he had bought it, Franklin went immediately to the place where he was directed, and asked for three-pence worth of bread.",
      "He received three large puffy rolls, and, having no room in his pockets, walked off, with a roll under each arm, and eating the third.",
      "",
      "[story] In this manner he walked up Market street, as far as Fourth street, passing by the house of Mr. Read, whose daughter he afterwards married.",
      "This young lady was standing at the door as he went by, and probably thought he made rather an awkward appearance.",
      "After walking about the streets some time, eating his roll, he found himself again in the neighborhood of the wharf where he had landed.",
      "He went on board of the boat, and gave his two remaining rolls to a woman and child that had been his fellow-passengers down the river.",
    ]},

    { title: "Sample Three: Just the Facts", s: [
      "A third passage from Goodrich's book is a different kind of writing, a plain account of Franklin's birth and his family.",
      "",
      "[story] Benjamin Franklin was born in Boston, New England, on the seventeenth of January, 1706.",
      "He was the youngest son in a family of seventeen children.",
      "His elder brothers were, at an early age, put apprentices to different trades; for their father was a man of honest industry, but with little or no property, and unable to support the expense of keeping them long at school.",
    ]},

    { title: "Which Is Which?", s: [
      "Look at the three samples side by side, and ask the two questions: who's telling, and do the feelings show?",
      "Franklin's own account is an autobiography, and it's full of feeling, because he admits he made “a most awkward, ridiculous appearance.”",
      "Goodrich's account of the same morning is a biography, and it stays in the third person, though he says Franklin's future wife “probably thought” he looked awkward, which is the writer guessing at a feeling.",
      "The last paragraph is the most objective of the three, since it gives a date, a place and a number and never says how anyone felt.",
      "",
      "[verse] Luke 1:3-4 gives his reason for writing his gospel, “It seemed good to me also, having had perfect understanding of all things from the very first, to write unto thee in order, most excellent Theophilus, That thou mightest know the certainty of those things, wherein thou hast been instructed.”",
      "",
      "Luke is writing a careful, ordered account of real events, which is nonfiction in the plainest sense, and he says why: so the reader can know that what he's been told is certain."
    ]}
  ],

  words: [
    ["Nonfiction", "Writing that claims to be about real events and people.", 4],
    ["Memoir", "A writer's memories of a particular time or place in his life.", 8],
    ["Objective", "Writing that sticks to facts and leaves the writer's feelings out.", 12],
    ["Subjective", "Writing that lets the writer's own feelings and judgments show.", 12]
  ],

  vocabQuestions: [
    { q: "What is <i>nonfiction</i>?",
      choices: ["Writing that claims to be about real events and people", "A story that is made up", "A poem about nature", "A kind of puzzle"],
      right: 0, why: "Nonfiction says it really happened." },
    { q: "What is a <i>memoir</i>?",
      choices: ["A report of a news event", "A writer's memories of a particular time or place", "A made-up story", "A short list of facts"],
      right: 1, why: "A memoir is built from the writer's own memories." },
    { q: "Which sentence is <i>objective</i>?",
      choices: ["The park was beautiful in the spring", "The movie was the best one ever made", "The library closes at nine", "Everybody loves the beach"],
      right: 2, why: "You could check the closing time, and it has no feelings in it." },
    { q: "Which sentence is <i>subjective</i>?",
      choices: ["The river is two miles long", "The soup was the tastiest I've ever eaten", "The train leaves at noon", "There are 30 students in the class"],
      right: 1, why: "“Tastiest” is the writer's feeling." }
  ],

  questions: [
    { q: "What does nonfiction claim to be?", find: [4],
      hint: "Read It Says It Happened.",
      choices: ["Made up", "About real events and people", "A kind of poem", "A song"], right: 1,
      why: "Nonfiction claims to be based on what really happened." },
    { q: "Why can two honest tellings of the same afternoon come out differently?", find: [6],
      hint: "Think about what every writer decides.",
      choices: [
        "One of them is lying.",
        "Every writer decides what to include, what to leave out and how it felt.",
        "The afternoon happened twice.",
        "Nonfiction always has a mistake in it."
      ], right: 1,
      why: "A writer still chooses what to tell and how it felt." },
    { q: "Which kind of nonfiction is a person's life told by someone else?", find: [9],
      hint: "Read Five Kinds of True Writing.",
      choices: ["An autobiography", "A memoir", "A biography", "An essay"], right: 2,
      why: "A biography is told by someone else." },
    { q: "Which sentence is subjective?", find: [12],
      hint: "Look for the writer's feeling.",
      choices: [
        "The bakery opens at six in the morning.",
        "The bakery smells wonderful in the morning.",
        "The bakery has one oven.",
        "The bakery sells forty loaves a day."
      ], right: 1,
      why: "“Wonderful” is a feeling, and it can't be checked." },
    { q: "Franklin wrote, “I was dirty from my journey.” What kind of writing is Sample One?", find: [19],
      hint: "Who is telling it, and how does he say it?",
      choices: [
        "A biography, written by someone else",
        "A news report",
        "An autobiography, told by Franklin himself",
        "A fiction story"
      ], right: 2,
      why: "Franklin tells it in the first person, so it's an autobiography." },
    { q: "In Sample One, Franklin says he made “a most awkward, ridiculous appearance.” What does that tell you about his writing?", find: [29],
      hint: "Does he keep his feelings out?",
      choices: [
        "It's objective, because he never mentions himself.",
        "It's subjective, because he says what he thought of himself.",
        "It's a list of dates.",
        "It's fiction."
      ], right: 1,
      why: "He gives his own judgment of how he looked." },
    { q: "How does Sample Two tell the same morning differently from Sample One?", find: [33, 41],
      hint: "Look at the words he and Franklin.",
      choices: [
        "It says he and Franklin, because it's written by someone else.",
        "It says I and my.",
        "It leaves out the rolls.",
        "It's about a different morning."
      ], right: 0,
      why: "A biography is told in the third person by someone who wasn't there." },
    { q: "Goodrich says Franklin's future wife “probably thought” he looked awkward. What is the writer doing?", find: [42],
      hint: "Could he know what she thought?",
      choices: [
        "Quoting what she said.",
        "Giving a date.",
        "Guessing at someone's feelings.",
        "Proving a fact."
      ], right: 2,
      why: "“Probably” tells you he's guessing." },
    { q: "Which of the three samples is the most objective?", find: [46, 47],
      hint: "It has dates, places and numbers, and no feelings.",
      choices: [
        "The first, by Franklin",
        "The second, the morning told by Goodrich",
        "The third, the plain account of his birth and family",
        "They're all equally objective"
      ], right: 2,
      why: "It gives a date, a place and a number and never says how anyone felt." },
    { q: "Why does a good piece of nonfiction often read like a story?", find: [5],
      hint: "Read It Says It Happened.",
      choices: [
        "Because it uses the same tools as fiction, like plot, character, setting and point of view.",
        "Because it's secretly made up.",
        "Because it has no facts in it.",
        "Because it's always told in the first person."
      ], right: 0,
      why: "Nonfiction borrows the tools of fiction." }
  ],

  todo: { title: "What To Do Now", s: [
    "Take the three samples in your head first: who's telling each one, and whether the writer's feelings show.",
    "Then work through the {c} word cards at the top of the page, {q} questions about the three samples, and {v} more questions about those words. {T} questions in all.",
    "Then do the two tasks the book suggests, on paper: ask a relative to tell you about one family event and compare it with your memory, and take a silent walk and write down at least ten things you saw, heard, smelled or felt.",
    "If you get stuck on a question, tap Find It in the Story and read the line the page shows you.",
    "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] },
};
