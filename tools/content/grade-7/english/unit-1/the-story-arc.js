/* english/the-story-arc
   Grade 7 · English · Unit 1 (Out Here on My Own), lesson 3. Built by tools/lessons.js.
   Edit the lesson here, not in the registry.

   🚨 DRAFT PROSE, marked per /lesson: the teaching sections, the Teacher Notes, the
   questions and the scripture choice are Claude's, written to the /teach-plan block in
   `plan` below and given the /natural pass. Paul has not read them. The scripture
   (Psalm 27:3) is a suggestion, his call.
   NO NEW STORY. The lesson teaches the four plot parts and fills them with the events of
   Kipling's "Rikki-Tikki-Tavi", which he read in lessons 1 and 2, because the Holt teacher
   margin asks for exactly that. The `find` links point into the teaching text, since that
   is where each part is defined.
   ⚠️ Where the climax sits is a judgment call the book does not settle. The lesson says it
   is the standoff on the veranda and the chase that follows, and says why Nag's death is not
   it (Nagaina is still alive). If Paul sees it differently, the questions on parts 3 and 4
   are the ones to change. */
'use strict';
module.exports = {
  id: "english/the-story-arc",
  slug: "the-story-arc",
  title: "The Story Arc",
  unit: "Literature · U1-L3",
  seq: { unit: 1, unitTitle: "Out Here on My Own", n: 3 },

  plan: {
    objective: "Put the events of a story into the four parts of a plot: basic situation, complications, climax, resolution.",
    markers: [
      "QUOTED, Holt Elements of Literature pp22-23, THE SHORT STORY: A Story's Building Blocks, Plot: 'What Happens?': 'A plot has four parts, which are like building blocks.'",
      "QUOTED, pp22-23: 1. basic situation, 2. complications, 3. climax ('the story's most emotional or suspenseful moment'), 4. resolution.",
      "QUOTED, pp22-23, teacher margin, Applying the Element: 'Have students outline the plot of Rikki-tikki-tavi by filling in the episodes for each element of the triangle.'",
    ],
    method: "The plot triangle. Each event gets placed on one of the four parts.",
    exampleOnly: [
      "The book teaches it on a retold Little Red Riding Hood. Kolten already knows Rikki, so the triangle is filled with Rikki's events, which is what the teacher margin asks for. World: Rikki only.",
    ],
    digitize: "Reading engine, teaching passage only: the four parts, suspense, a short look ahead at theme. Questions give an event from Rikki and ask which part of the arc it is. Paper: draw the triangle and fill it in.",
    unclear: [
      "The theme half of pp22-23 is taught in L5, where the book teaches it; here it is one short look ahead.",
    ],
  },
  natural: "2026-10-05",
  findsAt: 32,

  shelf: { grades: [7], subject: "English",
    blurb: "A story builds like a triangle, and Rikki-tikki's fights fit on it one block at a time.",
    contains: [
      "Teacher Notes written for whoever is teaching it",
      "The four parts of a plot, filled in with Rikki-tikki-tavi's events",
      "Four vocabulary cards, each with a check question",
      "Questions that ask which part of the plot an event belongs to",
      "A plot triangle to draw and fill in on paper",
    ] },
  eyebrow: ["English 7", "U1-L3", "Out Here on My Own"],
  dek: "A story isn't a list of events, it's a climb. Find where each of Rikki's fights sits on the way up and down.",
  scripture: {
    ref: "Psalm 27:3",
    text: "Though an host should encamp against me, my heart shall not fear: though war should rise against me, in this will I be confident.",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will learn the four parts of a plot (basic situation, complications, climax, resolution), meet suspense, and place the events of Kipling's Rikki-Tikki-Tavi on the plot triangle. There's no new story, since the class read it in the first two lessons."
      ]},
      { h: "Key Concepts", p: [
        "The basic situation introduces the main character, the setting and the conflict. The complications are the stretch where problems pile up and the suspense grows. The climax is the most emotional or suspenseful moment, the point where the main conflict is decided. The resolution settles what's left and shows life afterward.",
        "In Rikki-tikki-tavi the basic situation is Rikki washed into a garden with two cobras. The complications are Karait, the plan overheard in the bathroom, Nag's death and the eggs. The climax is the standoff on the veranda and the chase into the rat hole. The resolution is the Coppersmith's announcement and the family's thanks."
      ]},
      { h: "Where Students Get Stuck", p: [
        "Students put the loudest event at the top of the triangle. Nag's death comes with a shotgun blast, so it feels like the climax, but Nagaina is still alive and the main conflict is undecided. Ask what is still unsettled after the event; if something is, it's a complication.",
        "Another slip is calling every fight a climax. Only one moment decides the main conflict."
      ]},
      { h: "Teaching Suggestion", p: [
        "Have the student draw the triangle on paper before answering the questions, then write two or three Rikki events under each part. The drawing is the work; the questions only check it. If he can say why Nag's death is a complication, he has understood the climax."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Which Fight Was the Big One?", s: [
      "By now you've followed Rikki-tikki through three fights with snakes, and if you think back on them, you'll notice they didn't all feel the same size.",
      "Karait was over in a few lines, Nag took a whole long night of waiting in the dark, and Nagaina ended with a chase down a hole in the ground, so something about the order makes the later fights hit harder.",
      "That something is the plot, meaning what happens in a story and the order it happens in, and a good plot never reads like a list of events because every event stacks on top of the one before it.",
      "",
      "Writers and readers keep a picture of it in their heads, a triangle with a slope climbing on the left, a peak at the top, and another slope sliding down on the right.",
      "A plot has four parts, which are like building blocks, and they sit on that triangle in order, one after another, from the bottom of the climb to the bottom of the fall.",
      "So here's the question to carry with you through this lesson, and it's more of a puzzle than a test: which of Rikki's events goes on which block?"
    ]},
    { title: "Block One: Where It Starts", s: [
      "Every story opens by telling you three things, and it does it so quietly you barely notice: who the main character is, where he is, and what trouble is waiting for him.",
      "That opening is the basic situation, and the trouble tucked inside it is the conflict the rest of the story will spend all its time chewing on.",
      "",
      "[ex] A summer flood washes a young mongoose into a garden where two cobras already live.",
      "",
      "Nobody has won anything yet at that point, because the sides are still only getting into place, and once Rikki knows who Nag and Nagaina are and what they want, the basic situation has done its job."
    ]},
    { title: "Block Two: It Gets Worse", s: [
      "Next come the complications, the long stretch where one thing after another gets in the hero's way, and the problem keeps getting bigger when you were hoping it would shrink.",
      "A complication is anything that makes the job harder or more dangerous, so it isn't just one more fight; it's a brand-new reason for you to worry about him.",
      "",
      "[ex] Karait lies in the dust beside Teddy, so small that nobody sees him, and his bite is as deadly as a cobra's.",
      "",
      "Karait is one complication, and the story piles on more: the cobras plan in the bathroom to empty the house of people, Rikki catches Nag by the head, and then Rikki has to find the eggs before Nagaina can do anything else.",
      "That growing worry has a name too, and it's suspense, the uneasy feeling that something is about to happen when you can't tell how it will turn out.",
      "Rikki waits an hour in the dark bathroom while Nag sleeps by the water jar, and you wait right there with him, holding your breath."
    ]},
    { title: "Block Three: The Top of the Triangle", s: [
      "Every climb has a top, and in a story that's the climax, the most emotional or suspenseful moment, the one the whole plot has been quietly pointing at since the first page.",
      "It's the moment when the main conflict finally gets decided, one way or the other, and after it nothing can go back to the way it was.",
      "",
      "[ex] Nagaina is coiled beside Teddy's chair while his family sits stone-still, and Rikki stands over her last egg and dares her to turn around.",
      "",
      "From there the story rushes straight into the fight on the veranda and the chase that ends in the rat hole, and neither one gives you a chance to catch your breath.",
      "You might want to put Nag's death at the top instead, since a shotgun goes off and it's the loudest moment so far, but that's exactly the mistake to watch for.",
      "Nagaina is still alive after it, and Rikki says himself she'll be worse than five Nags, so the main conflict hasn't been decided yet and Nag's death belongs on the way up the slope."
    ]},
    { title: "Block Four: What's Left When It's Over", s: [
      "After the top comes the slope down, the resolution, where the conflict is settled at last and you get to see what life in the garden looks like afterward.",
      "",
      "[ex] The Coppersmith bangs out the news that Nag and Nagaina are dead, and the birds and frogs start singing.",
      "",
      "Teddy's mother says Rikki saved all their lives, and Rikki goes on keeping the garden the way a mongoose should, which is a quiet way to end after so much noise.",
      "Nothing big is left unsettled, and that's how you know you've reached the end: you've stopped worrying about what comes next."
    ]},
    { title: "One More Thing the Plot Carries", s: [
      "A plot has a job beyond telling you what happened, because underneath the events it also carries an idea about life that the story shows you without ever saying it out loud.",
      "That idea is the theme, and Lesson 5 will teach you how to state it in a sentence of your own.",
      "For now, look at the whole triangle and ask yourself what Rikki's story suggests about a small creature who has to face something much bigger than he is.",
      "The man who wrote Psalm 27 knew what that feels like from the inside, because he had an army against him.",
      "",
      "[verse] Psalm 27:3 says, “Though an host should encamp against me, my heart shall not fear: though war should rise against me, in this will I be confident.”",
      "",
      "Hold onto that question about the small and the big, because you'll need it again when you start looking for what a story is really about underneath the plot."
    ]},
  ],

  words: [
    ["Basic Situation", "The opening of a plot, where you meet the main character, the setting and the conflict.", 6],
    ["Complications", "The middle of a plot, where problems pile up and make the hero's job harder.", 10],
    ["Climax", "The story's most emotional or suspenseful moment, where the main conflict gets decided.", 16],
    ["Resolution", "The end of a plot, where the conflict is settled and you see what life is like afterward.", 22],
  ],

  vocabQuestions: [
    { q: "A story opens with a girl who has just moved to a town where she knows no one, and the school bully has already picked her out. Which part of the plot is this?",
      choices: ["The basic situation", "The complications", "The climax", "The resolution"],
      right: 0, why: "It introduces the character, the setting and the conflict." },
    { q: "Which of these is a <i>complication</i>?",
      choices: ["A new problem that makes the hero's job harder", "The moment the main conflict is finally decided", "The opening that introduces the character and setting", "The ending where the loose ends are tied up"],
      right: 0, why: "Complications are what make the road harder." },
    { q: "Which of these best describes the <i>climax</i> of a story?",
      choices: ["The most emotional or suspenseful moment, where the main conflict is decided", "The first time the main character appears", "The quiet ending after everything is settled", "Any fight that happens in the story"],
      right: 0, why: "Only one moment decides the main conflict." },
    { q: "After the final fight, the hero goes home, the town is safe again, and the story shows an ordinary morning. Which part of the plot is this?",
      choices: ["The resolution", "The basic situation", "The complications", "The climax"],
      right: 0, why: "The conflict is settled and we see life afterward." },
  ],

  questions: [
    { q: "A summer flood washes Rikki-tikki out of his burrow and into Teddy's garden. Which part of the plot is this?", find: [7, 8],
      hint: "Look at what the first block does: it introduces the character, the place and the trouble.",
      choices: ["The basic situation", "The complications", "The climax", "The resolution"], right: 0,
      why: "A flood washing him into a garden with two cobras sets up the character, the place and the conflict." },
    { q: "Which of these belongs to the basic situation?", find: [6, 9],
      hint: "Which event only gets the sides into place?",
      choices: ["Rikki meets Nag and Nagaina and learns they've already eaten Darzee's baby", "Rikki crushes Nagaina's eggs in the melon bed", "Rikki chases Nagaina into the rat hole", "The Coppersmith announces that both cobras are dead"], right: 0,
      why: "Meeting the cobras puts the two sides in place; the other events come later." },
    { q: "Karait wriggles up beside Teddy in the dust, and Rikki bites him from behind. Which part of the plot is this?", find: [12, 11],
      hint: "Is the main conflict decided here, or does the danger only grow?",
      choices: ["A complication", "The climax", "The basic situation", "The resolution"], right: 0,
      why: "Karait is a new danger and the main conflict is still open." },
    { q: "Nag and Nagaina talk in the bathroom about emptying the house of people. Which part of the plot is this?", find: [13, 10],
      hint: "Does the plan settle anything, or does it make Rikki's job harder?",
      choices: ["A complication", "The basic situation", "The climax", "The resolution"], right: 0,
      why: "The plan raises the stakes without deciding anything." },
    { q: "Nag is shot dead after Rikki holds on to his head. Why isn't this the climax of the whole story?", find: [21, 20],
      hint: "Ask what is still unsettled when the shotgun stops.",
      choices: ["Nagaina is still alive, so the main conflict isn't decided", "The big man fired the shot, not Rikki", "It happens at night instead of in the daytime", "Nag is a smaller snake than Karait"], right: 0,
      why: "The climax decides the main conflict, and Nagaina is still out there." },
    { q: "Rikki finds the cobra eggs in the melon bed and crushes most of them. Which part of the plot is this?", find: [13, 10],
      hint: "He's still working toward the fight that will decide everything.",
      choices: ["A complication", "The climax", "The basic situation", "The resolution"], right: 0,
      why: "It's one more step on the way up, and Nagaina is still alive." },
    { q: "Nagaina is coiled beside Teddy's chair, and Rikki stands over her last egg. Which part of the plot is this?", find: [18, 16],
      hint: "This is the moment the whole plot has been pointing at.",
      choices: ["The climax", "The basic situation", "The complications", "The resolution"], right: 0,
      why: "Everything depends on this moment, and the main conflict gets decided from here." },
    { q: "Rikki chases Nagaina into the rat hole and the grass stops waving. Which part of the plot is this?", find: [19, 17],
      hint: "Which block ends with the main conflict decided?",
      choices: ["The climax", "The resolution", "The basic situation", "The complications"], right: 0,
      why: "The chase is where the main conflict gets decided." },
    { q: "The Coppersmith bangs out the news that Nag and Nagaina are dead. Which part of the plot is this?", find: [23, 22],
      hint: "The main conflict is already over.",
      choices: ["The resolution", "The climax", "The complications", "The basic situation"], right: 0,
      why: "The conflict is settled and the story shows what life is like afterward." },
    { q: "Rikki waits an hour in the dark bathroom while Nag sleeps by the water jar, and the reader keeps wondering how it will turn out. What is that feeling called?", find: [14, 15],
      hint: "It's the uneasy feeling that something is about to happen.",
      choices: ["Suspense", "Resolution", "Theme", "The basic situation"], right: 0,
      why: "Suspense is the uncertainty about what will happen next." },
  ],

  todo: { title: "What To Do Now", s: [
    "Start on paper, because the triangle is the real work of this lesson: draw one with a slope up on the left, a peak, and a slope down on the right.",
    "Label the four blocks along the bottom (basic situation, complications, climax, resolution), then write two or three of Rikki's events under each one, using the lessons you read before this one.",
    "When the triangle is filled in, work through the {c} word cards at the top of the page, {q} questions about the plot, and {v} more questions about those words. {T} questions in all.",
    "If you get stuck on a question, tap Find It in the Story and read the line the page shows you.",
    "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] },
};
