/* english/comparing-and-contrasting
   Grade 7 · English · Unit 2 (Who Am I?), lesson 3. Built by tools/lessons.js.
   Edit the lesson here, not in the registry.

   🚨 DRAFT PROSE, marked per /lesson: the teaching sections, the Teacher Notes, the
   questions and the scripture choice are Claude's, written 2026-10-05 on Sonnet to the
   /teach-plan block in `plan` below and given the /natural pass. Paul has not read them.
   The scripture (Romans 12:4-5) is a suggestion, his call.

   The STORY is Mary Antin's "The Promised Land" (1912), Chapter IX, the morning she
   entered the public school in Chelsea, Massachusetts, and her sister Frieda went to
   the workshop, from Project Gutenberg #20885 (verified: the title page reads "The
   Promised Land", by Mary Antin). It's the author's words exactly, split to one
   sentence per entry, with these changes only: one British word turned into its American form (while) and
   one more spelling made American. Two paragraphs from the same chapter are
   left out (the paragraph where she says she is "speaking in extreme figures", and
   the one that begins "I wish, for my comfort"); the excerpt is otherwise unbroken.
   It stands in for Holt's "Barrio Boy" by Ernesto Galarza, which is copyrighted.
   ⚠️ The story pick is Claude's; the plan says it goes to the review queue for Paul to
   swap. It does the same job the book's piece does: a child between an old world and a
   new one, with a contrast built into the page (school against the workshop).

   ⚠️ THE PACKET WAS THIN on the signal-word lists in the book (marked THIN), so the
   lists in the lesson are the standard ones, not the book's exact lists. The
   metaphor note in the book (America as a griddle or a melting pot) is left out. */
'use strict';
module.exports = {
  id: "english/comparing-and-contrasting",
  slug: "comparing-and-contrasting",
  title: "Comparing and Contrasting",
  unit: "Literature · U2-L3",
  seq: { unit: 2, unitTitle: "Who Am I?", n: 3 },

  plan: {
    objective: "Compare and contrast two things in a piece of nonfiction, using signal words, and organize the likenesses and differences (a Venn diagram, in words).",
    markers: [
      "BOOK (paraphrased), Holt Elements of Literature p123, Reading Skills: Comparing and Contrasting: to compare is to see how things are alike and to contrast is to see how they differ; we do it every day, with lunch or the timing of homework.",
      "BOOK (paraphrased): in English class you compare two characters or poems, looking at figures of speech, subjects and themes, and in stories you compare characters, plots, settings, themes and conflicts.",
      "BOOK (paraphrased): signal words show that a writer is comparing or contrasting.",
      "BOOK (paraphrased), objectives for Barrio Boy: make comparisons and contrasts, and write a compare-and-contrast paragraph.",
    ],
    method: "PICK THE POINTS TO COMPARE, SORT THE LIKENESSES AND THE DIFFERENCES, AND WATCH FOR SIGNAL WORDS. Compare means alike, contrast means different. Choose the same points for both things (place, people, school, language), and sort what only one has, what only the other has, and what both share, the way a Venn diagram does.",
    exampleOnly: [
      "The town where every restaurant sells the same sandwich, and the two lunchrooms. They're our own worlds for the method. The story is Mary Antin's and the skill is the lesson, not the school.",
      "Holt's selection is Barrio Boy by Ernesto Galarza, which is copyrighted, so a public-domain autobiography carries the skill. World: The Promised Land.",
    ],
    digitize: "Reading engine on a public-domain autobiography that holds a contrast on the page. The Venn diagram is described in words; ⚠️ a drawn one would help and the site doesn't have that visual yet. Written: a short compare-and-contrast paragraph.",
    unclear: [
      "Which public-domain autobiography. Not a teaching question, so it does not stop the build. The pick goes in the review queue for Paul to swap.",
    ],
  },
  natural: "2026-10-05",
  findsAt: 54,

  shelf: { grades: [7], subject: "English",
    blurb: "Two sisters get ready for the same morning and end up in very different places. How to compare and contrast, the words that signal it, and the diagram that sorts it.",
    contains: [
      "Teacher Notes written for whoever is teaching it",
      "Mary Antin's account of her first morning at school in America, read aloud one line at a time",
      "Four vocabulary cards, each with a check question",
      "Story questions about likenesses, differences and signal words",
      "A compare-and-contrast paragraph to write on paper",
    ] },
  eyebrow: ["English 7", "U2-L3", "Who Am I?"],
  dek: "Comparing shows you what two things share, and contrasting shows you where they split. Together they're how you really see either one.",
  scripture: {
    ref: "Romans 12:4-5",
    text: "For as we have many members in one body, and all members have not the same office: So we, being many, are one body in Christ, and every one members one of another.",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will learn what it means to compare and to contrast, use signal words to spot both, choose points of comparison, sort likenesses and differences the way a Venn diagram does, and apply all of it to Mary Antin's account of the morning she started school and her sister Frieda went to work."
      ]},
      { h: "Key Concepts", p: [
        "To compare is to find how things are alike, and to contrast is to find how they differ. A good comparison picks the same points for both things, so that it's fair.",
        "Signal words show the writer's direction. Words like both, also and similarly point to likenesses, and words like but, however, unlike and while point to differences."
      ]},
      { h: "Where Students Get Stuck", p: [
        "Comparing different points. Saying one school has a gym and the other is old isn't a comparison, because the two things aren't being measured on the same point.",
        "Forgetting the likenesses. Students go straight for the differences, but the overlap in the middle is part of the answer too, and in Antin's pages it's the sisters' love."
      ]},
      { h: "Teaching Suggestion", p: [
        "Draw two overlapping circles on paper and sort the story into them with the student: Mary only, Frieda only, and what the two share. The drawing is the Venn diagram and sets up the writing task."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "A Town Where Everything Is the Same", s: [
      "Picture a town in which every restaurant sells exactly the same sandwich, every store sells the same shirt in the same color, and every school teaches the same lessons in the same room.",
      "You'd never have to choose anything, which sounds easy until you notice that you'd also never learn anything about what makes one thing different from another.",
      "Choosing, learning and understanding all depend on being able to put two things side by side.",
      "So how do you do that properly, and how do you tell when a writer is doing it?"
    ]},

    { title: "Alike and Different", s: [
      "To {{compare}} two things is to look for how they're alike, and to {{contrast}} them is to look for how they're different.",
      "You do both all the time without noticing, whenever you weigh lunch at home against lunch in the cafeteria, or ask whether homework goes faster before dinner or after.",
      "In English class the same skill works on bigger things, like two characters, two settings or two poems, and writers of nonfiction use it too, especially when a person's life changes and the old way sits next to the new.",
      "Most good comparisons do both at once, because the likenesses and the differences together give you the full picture."
    ]},

    { title: "Words That Signal It", s: [
      "A writer who's comparing or contrasting usually leaves signals, small words that tell you which direction the sentence is going.",
      "Words like both, also, like, too and similarly signal a comparison, because they point to what two things share.",
      "Words like but, however, unlike, instead and while signal a contrast, because they turn the sentence toward a difference.",
      "",
      "[ex] Both lunchrooms serve pizza on Fridays.",
      "[ex] One lunchroom serves salad, but the other serves soup.",
      "",
      "Look for those words as you read, because when you spot one, you've found a place where the writer has set two things next to each other."
    ]},

    { title: "Choose the Points", s: [
      "To make a fair comparison you have to pick the points you'll compare, and use the same points for both things.",
      "If you're comparing two schools, you might choose the size, the teachers, the lunch and the language spoken in the halls, and then say something about each school on every one of those points.",
      "",
      "[ex] points to compare: size, teachers, lunch, language",
      "",
      "Without points, you end up saying that one school has a gym and the other is old, and those two facts don't say anything about each other."
    ]},

    { title: "Two Circles and a Middle", s: [
      "A Venn diagram is a way of sorting a comparison, and you can build one with two overlapping circles.",
      "Whatever belongs only to the first thing goes in the first circle, whatever belongs only to the second goes in the second, and whatever belongs to both goes in the part in the middle where the circles overlap.",
      "The middle is the compare, and the two outside parts are the contrast, and a good paragraph usually talks about both.",
      "Hold that diagram in your head as you read, because the story ahead has two girls, and the page is quietly sorting them."
    ]},

    { title: "Read for Two Girls", s: [
      "Mary Antin was born in a town in Russia and came to Boston at about thirteen, and in 1912 she wrote the story of her life and called it The Promised Land.",
      "In the pages ahead she and her older sister Frieda are about to begin a new life in a new country, and it's their very first morning of it.",
      "Read it with the points in mind: where each girl is going, how each feels, and what each one is leaving behind.",
      "Watch for the signal words too, because Antin uses them, and see if you can find where the paragraph turns from one sister to the other."
    ]},

    { title: "Two Sisters, One Morning", s: [
      "[story] The apex of my civic pride and personal contentment was reached on the bright September morning when I entered the public school.",
      "That day I must always remember, even if I live to be so old that I cannot tell my name.",
      "To most people their first day at school is a memorable occasion.",
      "In my case the importance of the day was a hundred times magnified, on account of the years I had waited, the road I had come, and the conscious ambitions I entertained.",
      "",
      "[story] Who were my companions on my first day at school?",
      "Whose hand was in mine, as I stood, overcome with awe, by the teacher’s desk, and whispered my name as my father prompted?",
      "Was it Frieda’s steady, capable hand?",
      "Was it her loyal heart that throbbed, beat for beat with mine, as it had done through all our childish adventures?",
      "Frieda’s heart did throb that day, but not with my emotions.",
      "My heart pulsed with joy and pride and ambition; in her heart longing fought with abnegation.",
      "For I was led to the schoolroom, with its sunshine and its singing and the teacher’s cheery smile; while she was led to the workshop, with its foul air, care-lined faces, and the foreman’s stern command.",
      "Our going to school was the fulfillment of my father’s best promises to us, and Frieda’s share in it was to fashion and fit the calico frocks in which the baby sister and I made our first appearance in a public schoolroom.",
      "",
      "[story] I remember to this day the gray pattern of the calico, so affectionately did I regard it as it hung upon the wall--my consecration robe awaiting the beatific day.",
      "And Frieda, I am sure, remembers it, too, so longingly did she regard it as the crisp, starchy breadths of it slid between her fingers.",
      "But whatever were her longings, she said nothing of them; she bent over the sewing-machine humming an Old-World melody.",
      "In every straight, smooth seam, perhaps, she tucked away some lingering impulse of childhood; but she matched the scrolls and flowers with the utmost care.",
      "If a sudden shock of rebellion made her straighten up for an instant, the next instant she was bending to adjust a ruffle to the best advantage.",
      "And when the momentous day arrived, and the little sister and I stood up to be arrayed, it was Frieda herself who patted and smoothed my stiff new calico; who made me turn round and round, to see that I was perfect; who stooped to pull out a disfiguring basting-thread.",
      "If there was anything in her heart besides sisterly love and pride and good-will, as we parted that morning, it was a sense of loss and a woman’s acquiescence in her fate; for we had been close friends, and now our ways would lie apart.",
      "Longing she felt, but no envy.",
      "She did not grudge me what she was denied.",
      "Until that morning we had been children together, but now, at the fiat of her destiny, she became a woman, with all a woman’s cares; while I, so little younger than she, was bidden to dance at the May festival of untroubled childhood.",
    ]},

    { title: "Sorting the Sisters", s: [
      "Go back through the story with the two circles in your head, and notice how much is already sorted for you.",
      "In the middle, where they're alike, the two sisters are close friends who've shared everything, and Frieda sews Mary's dress for the day with real love, and neither is angry at the other.",
      "On Mary's side, the day is joy, sunshine, singing and a teacher's smile, and on Frieda's side it's the workshop, with its foul air and the foreman's stern command.",
      "The signal words show you where the page turns, because “while she was led to the workshop” and “but not with my emotions” are contrast words, and a good reader catches them.",
      "",
      "[verse] Romans 12:4-5 says, “For as we have many members in one body, and all members have not the same office: So we, being many, are one body in Christ, and every one members one of another.”",
      "",
      "That's about the church, and it isn't about two immigrant sisters, but it says the same thing a good comparison does, that people can be different in what they're given and still belong to one another."
    ]}
  ],

  words: [
    ["Compare", "To look for how two things are alike.", 4],
    ["Contrast", "To look for how two things are different.", 4],
    ["Signal word", "A small word, like both or but, that shows a writer is comparing or contrasting.", 8],
    ["Venn diagram", "Two overlapping circles used to sort what's only in one thing, what's only in the other, and what's in both.", 18]
  ],

  vocabQuestions: [
    { q: "What does it mean to <i>compare</i> two things?",
      choices: ["To look for how they're different", "To look for how they're alike", "To count them", "To forget them"],
      right: 1, why: "Compare means to find how they're alike." },
    { q: "What does it mean to <i>contrast</i> two things?",
      choices: ["To find how they're alike", "To put them in the same place", "To look for how they're different", "To give them both names"],
      right: 2, why: "Contrast means to find how they're different." },
    { q: "Which of these is a <i>signal word</i> for a contrast?",
      choices: ["Both", "Also", "Similarly", "However"],
      right: 3, why: "However turns a sentence toward a difference." },
    { q: "In a <i>Venn diagram</i>, what goes in the middle where the circles overlap?",
      choices: ["What both things share", "What only the first thing has", "What only the second thing has", "The title"],
      right: 0, why: "The overlap holds what the two things have in common." }
  ],

  questions: [
    { q: "What does the first sentence of the story say about the day Mary entered school?", find: [26],
      hint: "Look at the very first sentence.",
      choices: [
        "It was the saddest day of her life.",
        "It was the high point of her pride and contentment.",
        "It was a day she wanted to forget.",
        "It was the day she left Russia."
      ], right: 1,
      why: "Her civic pride and personal contentment reached their high point that morning." },
    { q: "Where was Mary going that morning?", find: [36],
      hint: "Find the sentence that begins with “For I was led.”",
      choices: ["To the workshop", "To the schoolroom", "To the market", "To the ship"], right: 1,
      why: "She was led to the schoolroom, with its sunshine and its singing." },
    { q: "Where was Frieda going that morning?", find: [36],
      hint: "It's in the same sentence, after the word while.",
      choices: ["To school", "To the market", "To the workshop", "To the boat"], right: 2,
      why: "She was led to the workshop, with its foul air and the foreman's stern command." },
    { q: "Which signal word in that sentence shows a contrast between the two girls?", find: [36],
      hint: "It's the word that turns the sentence from Mary to Frieda.",
      choices: ["Both", "While", "Also", "Like"], right: 1,
      why: "“While” turns the sentence toward the difference." },
    { q: "How does Mary's heart feel that morning compared with Frieda's?", find: [34, 35],
      hint: "Look for the signal word but.",
      choices: [
        "Both hearts feel the same joy.",
        "Mary's heart is full of joy, pride and ambition, and Frieda's of longing.",
        "Mary is afraid, and Frieda is proud.",
        "Neither one feels anything."
      ], right: 1,
      why: "Mary's heart pulsed with joy and ambition, and in Frieda's, longing fought with abnegation." },
    { q: "What do the two sisters have in common?", find: [47],
      hint: "That's the middle of the Venn diagram.",
      choices: [
        "They were both going to the workshop.",
        "They had been close friends and children together until that morning.",
        "They both felt exactly the same.",
        "They had never met."
      ], right: 1,
      why: "They had been close friends, and until that morning they'd been children together." },
    { q: "Which of these is a point of comparison between the two sisters on that morning?", find: [36],
      hint: "It has to be something you can say about both of them.",
      choices: [
        "Where each one is going.",
        "How tall the teacher is.",
        "The name of the town.",
        "The color of the ship."
      ], right: 0,
      why: "Where each girl is going is a point on which the two can be set side by side." },
    { q: "What does Frieda do for Mary on the morning of the first day?", find: [43],
      hint: "Look at how the sewing turns out.",
      choices: [
        "She argues with her.",
        "She makes her turn around so her new calico dress is perfect.",
        "She takes her dress away.",
        "She leaves the house early."
      ], right: 1,
      why: "She patted, smoothed and checked the dress she had sewn." },
    { q: "Which sentence is a good way to open a compare-and-contrast paragraph about the sisters?", find: [37],
      hint: "It should name the two things being compared.",
      choices: [
        "The sisters share a close bond, but on that first morning one went to school and the other went to work.",
        "The dress was gray calico.",
        "Mary was born in Russia.",
        "It was September."
      ], right: 0,
      why: "It names both a likeness and a difference between the same two people." },
    { q: "Why is it better to compare two things on the same points?", find: [14],
      hint: "Read Choose the Points.",
      choices: [
        "So the comparison is fair and the two things can be set side by side.",
        "So the paragraph is longer.",
        "So there are fewer likenesses.",
        "So you never need signal words."
      ], right: 0,
      why: "Using the same points makes the comparison fair." }
  ],

  todo: { title: "What To Do Now", s: [
    "Take out a sheet of paper first, and draw two overlapping circles, one for Mary, one for Frieda, with the overlap in the middle.",
    "Then work through the {c} word cards at the top of the page, {q} questions about the story, and {v} more questions about those words. {T} questions in all.",
    "When those are done, write one paragraph on paper comparing and contrasting Mary and Frieda on that morning, using at least two signal words and the points you sorted into your circles.",
    "If you get stuck on a question, tap Find It in the Story and read the line the page shows you.",
    "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] },
};
