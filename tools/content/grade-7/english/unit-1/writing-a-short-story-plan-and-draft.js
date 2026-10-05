/* english/writing-a-short-story-plan-and-draft
   Grade 7 · English · Unit 1 (Out Here on My Own), lesson 9. Built by tools/lessons.js.
   Edit the lesson here, not in the registry.

   🚨 DRAFT PROSE, marked per /lesson: the teaching sections, the Teacher Notes, the
   questions and the scripture choice are Claude's, written to the /teach-plan block in
   `plan` below and given the /natural pass. Paul has not read them. The scripture
   (Luke 14:28) is a suggestion, his call.
   NO STORY TEXT. The lesson teaches prewriting (character, conflict, setting), filling in
   the four-part story arc from lesson 3 for his OWN story, and then drafting it on paper.
   The assignment wording is Holt's (p94): "Write a story on a topic of your choice."
   ⚠️ The short sample plan about Mara is made up for this lesson as a model of the SHAPE of a
   plan, and is marked as an example. It is not meant to be copied. The `find` links point
   into the teaching text. The planning sheet and the draft are on paper, since the page
   has no free-write input; the plan says the lesson is graded on completion of both. */
'use strict';
module.exports = {
  id: "english/writing-a-short-story-plan-and-draft",
  slug: "writing-a-short-story-plan-and-draft",
  title: "Writing a Short Story: Plan and Draft",
  unit: "Literature · U1-L9",
  seq: { unit: 1, unitTitle: "Out Here on My Own", n: 9 },

  plan: {
    objective: "Plan and draft a short story with a conflict, a climax and a resolution.",
    markers: [
      "QUOTED, Holt Elements of Literature p94, Writer's Workshop, NARRATIVE WRITING, Story: ASSIGNMENT: 'Write a story on a topic of your choice.' AIM: 'To be creative.'",
      "QUOTED, p96, Skills Focus: Plot, Conflict, Dialogue.",
    ],
    method: "Prewrite (character, conflict, setting), then fill the story arc from lesson 3, then draft.",
    exampleOnly: [
      "The professional model story (Peter Lu). World: his own story.",
    ],
    digitize: "Short reading on the steps, a planning sheet (the arc from lesson 3), the draft on paper. Graded on completion of the plan and the draft.",
    unclear: [],
  },
  natural: "2026-10-05",
  findsAt: 25,

  shelf: { grades: [7], subject: "English",
    blurb: "Pick a character, give him something to fight, and build the plan before you write a word of the story.",
    contains: [
      "Teacher Notes written for whoever is teaching it",
      "The three prewriting decisions and the four-part story arc",
      "Four vocabulary cards, each with a check question",
      "Questions that check the steps and the arc",
      "A planning sheet and a story draft to write on paper",
    ] },
  eyebrow: ["English 7", "U1-L9", "Out Here on My Own"],
  dek: "You've read a whole unit of stories. Now write one of your own, starting with the plan.",
  scripture: {
    ref: "Luke 14:28",
    text: "For which of you, intending to build a tower, sitteth not down first, and counteth the cost, whether he have sufficient to finish it?",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will plan and draft a short story of their own on a topic of their choice. They'll prewrite a character, a conflict and a setting, fill in the four parts of the story arc from Lesson 3, and write a first draft on paper."
      ]},
      { h: "Key Concepts", p: [
        "Prewriting means making the main decisions before drafting: who the story is about, what he's struggling against, and where and when it happens. The arc turns those decisions into a shape: a basic situation that shows the conflict, complications that make it harder, a climax that decides it, and a resolution that settles it.",
        "A draft is a first version, written to the end without stopping to fix it. Revising is the next lesson."
      ]},
      { h: "Where Students Get Stuck", p: [
        "The most common trouble is a story with no conflict, where the character simply has a nice day, and a close second is a plan with no climax. If he can't say what the character is struggling against, the plan isn't ready. Another trouble is stopping to polish while drafting, which usually means the draft is never finished."
      ]},
      { h: "Teaching Suggestion", p: [
        "Sit with the student for the arc step and ask what the character wants and what stands in the way. Don't suggest the topic. This lesson is graded on a completed plan and a completed draft, and the draft doesn't need to be polished yet."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "A Story Starts as a Plan", s: [
      "Kipling didn't begin Rikki-tikki-tavi by writing about a garden, because he began by knowing who would fight whom and what was at stake, and then the garden grew around that.",
      "The assignment in this lesson is the one the Holt book gives, and it's wide open: write a story on any topic you choose, about anything at all.",
      "The aim is to be creative, but creative doesn't mean making it up as you go, since a story that's planned first almost always comes out stronger than one that wasn't, and you'll feel the difference the moment you get stuck in the middle.",
      "So you'll work in three steps, one right after the other: prewrite, fill in the arc, and draft."
    ]},
    { title: "Step One: Three Decisions", s: [
      "Prewriting means deciding the big things before you write a single sentence of the story, and there are three of them to settle.",
      "First comes the character, the person or animal the story follows, and you'll want to know exactly what he wants before he takes a single step.",
      "Second is the conflict, what he's struggling against, and from Lesson 1 you know that can be another character or a force such as weather or a flood.",
      "Third is the setting, the place and time, and the best settings are the ones you can picture so well that you could describe the smell of the air.",
      "A character with no conflict has nothing to do, so if you can't say what's standing in his way, stop right here and figure it out before you go any further."
    ]},
    { title: "Step Two: Fill the Arc", s: [
      "Now take the story arc from Lesson 3 and fill it in for your own story, one or two sentences for each part, the same way you placed Rikki's fights on the triangle.",
      "The basic situation shows your character, your setting, and the conflict; the complications make the conflict harder; the climax is the moment it gets decided; and the resolution shows what's left afterward.",
      "Plan the climax before you plan anything else past the opening, because if you can't say what happens at the top of the triangle, the plan isn't ready yet, and a story with no top just wanders.",
      "",
      "Here's a made-up plan, only to show you the shape, so please don't copy it, because the story you plan should be yours.",
      "",
      "[ex] Basic situation: Mara, twelve, is home alone in a storm when her dog bolts out the door.",
      "",
      "[ex] Complications: the creek behind the house is rising, and her phone has no signal.",
      "",
      "[ex] Climax: Mara reaches the creek and finds the dog stranded on the far side of the rising water.",
      "",
      "[ex] Resolution: she pulls him across on a rope and they sit on the porch, soaked and shaking, as the storm moves off.",
      "",
      "Notice that the conflict, Mara against the flood, is in the first line and gets bigger in the second, so by the time the story reaches its climax the reader is leaning forward in the chair."
    ]},
    { title: "Step Three: Draft It", s: [
      "Now write the draft on paper, working from your plan, a whole story from the opening to the resolution, with your planning sheet lying right beside you.",
      "A draft is a first version, so don't stop to fix the spelling or hunt for a better word, because you'll revise in the next lesson, and a story that's never finished can't be improved.",
      "Start in the middle of something happening, the way Kipling does when a flood washes a mongoose onto a garden path, instead of opening with a long description of the weather that makes the reader wait.",
      "Part of the Skills Focus in this workshop is dialogue, meaning what the characters say, and the rule is simple: put the spoken words in quotation marks and start a new paragraph each time a different character begins to speak.",
      "",
      "Jesus made the same point about planning ahead, and he used a builder to do it.",
      "",
      "[verse] Luke 14:28 says, “For which of you, intending to build a tower, sitteth not down first, and counteth the cost, whether he have sufficient to finish it?”",
      "",
      "That's a plan before a build, and a story is a kind of building, so the sitting down first, with a pencil and a plan, is the part most people skip, and it's the part that holds the rest up."
    ]},
  ],

  words: [
    ["Prewriting", "Deciding the big things about a story, the character, the conflict and the setting, before you write it.", 4],
    ["Setting", "The place and time where a story happens.", 7],
    ["Dialogue", "What the characters say, written in quotation marks, with a new paragraph for each new speaker.", 21],
    ["Draft", "A first version of your writing, finished to the end before you stop to fix it.", 19],
  ],

  vocabQuestions: [
    { q: "Which of these is <i>prewriting</i>?",
      choices: ["Deciding on a character, a conflict and a setting before you write the story", "Fixing spelling mistakes after you finish", "Reading your story aloud to a friend", "Copying a story out neatly"],
      right: 0, why: "Prewriting happens before the draft." },
    { q: "What is the <i>setting</i> of a story?",
      choices: ["The place and time where it happens", "The person the story follows", "The thing the character struggles against", "The last sentence of the story"],
      right: 0, why: "The setting is the where and when." },
    { q: "Which of these is <i>dialogue</i>?",
      choices: ["“I'm not leaving without him,” Mara said.", "Mara walked down to the creek.", "The storm was getting louder.", "The creek was rising fast."],
      right: 0, why: "Dialogue is what a character says, in quotation marks." },
    { q: "What is a <i>draft</i>?",
      choices: ["A first version that you write all the way through before you fix it", "A story with no mistakes", "A plan with four parts", "A title for a story"],
      right: 0, why: "A draft is a first version, and you'll revise it next." },
  ],

  questions: [
    { q: "What are the three decisions you make in prewriting?", find: [4, 4],
      hint: "Read the step called Three Decisions.",
      choices: ["The character, the conflict, and the setting", "The title, the ending, and the last line", "The theme, the symbol, and the title", "The author, the audience, and the length"], right: 0,
      why: "A story rests on who it follows, what he struggles against, and where and when." },
    { q: "In a story plan, what is the conflict?", find: [6],
      hint: "Think back to Lesson 1.",
      choices: ["What the main character is struggling against, whether a character or a force", "The place where the story happens", "The title of the story", "The way the story ends"], right: 0,
      why: "The conflict is the struggle between opposing sides." },
    { q: "What is the assignment in this lesson?", find: [1],
      hint: "It's the wording the book gives.",
      choices: ["Write a story on a topic of your choice", "Retell Rikki-tikki-tavi in your own words", "Write a report about a famous author", "Write a poem about the snow"], right: 0,
      why: "The topic is yours to choose." },
    { q: "Where should your plan first show the conflict?", find: [10, 17],
      hint: "Look at the first part of the arc.",
      choices: ["In the basic situation, the opening", "Only in the resolution, at the end", "In the title alone", "Nowhere until the climax"], right: 0,
      why: "The opening shows the character, the setting, and the conflict." },
    { q: "Which part of the arc is the moment the conflict gets decided?", find: [10],
      hint: "It's at the top of the triangle.",
      choices: ["The climax", "The basic situation", "The complications", "The resolution"], right: 0,
      why: "The climax decides the main conflict." },
    { q: "In the made-up plan, Mara reaches the creek and finds the dog stranded on the far side of the rising water. Which part of the arc is this?", find: [15],
      hint: "It's the moment the conflict is about to be decided.",
      choices: ["The climax", "The basic situation", "The complications", "The resolution"], right: 0,
      why: "It's the high point of the story, where the dog is saved or lost." },
    { q: "What does the resolution of a plan show?", find: [10],
      hint: "It's the last part of the arc.",
      choices: ["How the conflict ends and what life is like afterward", "Who the main character is", "Where the story takes place", "What the title will be"], right: 0,
      why: "The resolution settles the conflict and shows what's left." },
    { q: "When you're writing the draft, what should you do first?", find: [18, 19],
      hint: "Read the step called Draft It.",
      choices: ["Write the whole story from your plan without stopping to fix it", "Stop after each sentence to check the spelling", "Write the ending and then the middle", "Start over each time you have a better idea"], right: 0,
      why: "A draft is a first version, and revising comes next." },
    { q: "In dialogue, what do you do when a different character starts to speak?", find: [21],
      hint: "Look at the rule for dialogue.",
      choices: ["Start a new paragraph", "Underline the name of the character", "Write it all in capital letters", "Stop the story and begin a new one"], right: 0,
      why: "A new speaker gets a new paragraph." },
    { q: "A plan has a character named Eli and a setting at his grandfather's farm in July. What is it still missing before it's ready?", find: [8],
      hint: "Think about what the lesson says to do if you can't say what's standing in the way.",
      choices: ["A conflict", "A title", "A theme", "A longer setting"], right: 0,
      why: "A character with no conflict has nothing to do, so the plan isn't ready." },
  ],

  todo: { title: "What To Do Now", s: [
    "Begin on paper, with a planning sheet: write down your character and what he wants, your conflict, and your setting.",
    "Then draw the story triangle from Lesson 3 and fill in the four parts for your own story, with one or two sentences under each, and plan the climax before anything else past the opening.",
    "When the plan is finished, work through the {c} word cards at the top of the page, {q} questions about the lesson, and {v} more questions about those words. {T} questions in all.",
    "Then write your draft on paper, from the opening to the resolution, without stopping to fix it, because the next lesson is for revising.",
    "If you get stuck on a question, tap Find It in the Story and read the line the page shows you.",
    "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] },
};
