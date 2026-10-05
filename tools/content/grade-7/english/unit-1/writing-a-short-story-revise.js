/* english/writing-a-short-story-revise
   Grade 7 · English · Unit 1 (Out Here on My Own), lesson 10. Built by tools/lessons.js.
   Edit the lesson here, not in the registry.

   🚨 DRAFT PROSE, marked per /lesson: the teaching sections, the Teacher Notes, the
   questions and the scripture choice are Claude's, written to the /teach-plan block in
   `plan` below and given the /natural pass. Paul has not read them. The scripture
   (Proverbs 27:17) is a suggestion, his call.
   NO STORY TEXT. The lesson teaches checking a draft and finding and fixing sentence
   fragments. ⚠️ The draft checklist is built from the lesson 3 arc and the lesson 9 steps,
   NOT from Holt's own evaluation criteria on pp97-98, because those pages have not been read
   for this build. Swap it for the book's list if Paul wants the book's wording. The
   practice sentences are made up for this lesson; they follow the Mara sample in lesson 9.
   The `find` links point into the teaching text. The revision of his own draft is on paper. */
'use strict';
module.exports = {
  id: "english/writing-a-short-story-revise",
  slug: "writing-a-short-story-revise",
  title: "Writing a Short Story: Revise",
  unit: "Literature · U1-L10",
  seq: { unit: 1, unitTitle: "Out Here on My Own", n: 10 },

  plan: {
    objective: "Revise his own draft and fix sentence fragments.",
    markers: [
      "QUOTED, Holt Elements of Literature pp97-98, Writer's Workshop, evaluation and revision.",
      "QUOTED, p99, Sentence Workshop: Sentence Fragments, Skills Focus: 'Identify Fragments' and 'Revise Sentence Fragments'.",
    ],
    method: "Check the draft against the evaluation criteria, then find and fix fragments.",
    exampleOnly: [
      "The book's sample sentences. World: his own draft.",
    ],
    digitize: "Practice on short sentences (fragment or complete, and how to fix it), then revise his draft on paper.",
    unclear: [
      "The book's evaluation criteria (pp97-98) were not read for this build; the checklist here comes from lessons 3 and 9. See the header.",
    ],
  },
  natural: "2026-10-05",
  findsAt: 31,

  shelf: { grades: [7], subject: "English",
    blurb: "Read your draft like a stranger, then find the pieces of sentences that never finished and fix them.",
    contains: [
      "Teacher Notes written for whoever is teaching it",
      "A checklist for revising a story draft",
      "How to find and fix sentence fragments",
      "Four vocabulary cards, each with a check question",
      "Practice questions on short sentences, then a revision of your own draft on paper",
    ] },
  eyebrow: ["English 7", "U1-L10", "Out Here on My Own"],
  dek: "A first draft is never the last one. Read yours cold, then find the sentences that never finished.",
  scripture: {
    ref: "Proverbs 27:17",
    text: "Iron sharpeneth iron; so a man sharpeneth the countenance of his friend.",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will check their story draft from Lesson 9 against a checklist, learn to identify and fix sentence fragments, and then revise the draft on paper."
      ]},
      { h: "Key Concepts", p: [
        "Revising means improving a draft after it's written. A complete sentence has a subject and a predicate and makes a complete thought. A fragment is missing a subject, a predicate, or a complete thought. There are three ways to fix one: add the missing subject, add the missing predicate, or join the fragment to the sentence next to it.",
        "Fragments are fine on purpose in dialogue, because people talk that way, but the narration should be complete."
      ]},
      { h: "Where Students Get Stuck", p: [
        "Students think any sentence that starts with Because or And is wrong in general, or they miss fragments that begin with a subject, like The old dog by the door. A fragment that has a subject and a verb but starts with a word like because still isn't a complete thought. Ask what happened to the dog by the door, since that's the missing predicate."
      ]},
      { h: "Teaching Suggestion", p: [
        "Do the practice questions first, then have the student read his draft aloud to you and stop at every sentence that sounds unfinished. Reading aloud finds fragments his eyes skip. The revision is graded on completion: a marked-up draft and a clean copy."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Read It Like a Stranger", s: [
      "Put your draft away for a few minutes and then pick it up like somebody who has never seen it, because it's very hard to spot your own mistakes while you still remember what you meant.",
      "That second look is called revising, and it's where a draft turns into a story, the way a rough board turns into a table once somebody takes a plane to it.",
      "So the plan for this lesson has two jobs: check the whole draft against a short list, and then hunt for one kind of mistake that hides in almost everybody's writing, yours and mine included."
    ]},
    { title: "Check the Draft", s: [
      "Read your draft once all the way through, slowly, and ask yourself five questions from the last two lessons.",
      "Does the opening show your character, your setting, and your conflict?",
      "Do the complications make the conflict harder, instead of just repeating it?",
      "Is there one clear climax where the conflict gets decided, and does the resolution settle what's left?",
      "Last, does your dialogue sound like people talking, with a new paragraph each time someone else speaks?",
      "Put a mark in the margin next to anything that answers no, and fix those places first, before you worry about single words, because a perfect sentence in the wrong place is still in the wrong place."
    ]},
    { title: "What a Fragment Is", s: [
      "Now comes the second job, and it's a detective job: finding sentence fragments, the little unfinished pieces that slip past almost every writer.",
      "A complete sentence has a subject, who or what it's about, and a predicate, what it says about the subject, and when the two work together they make a complete thought.",
      "A fragment is a group of words that's missing one of those things and still pretends to be a sentence, and it comes in three kinds that you can learn to spot on sight.",
      "",
      "[ex] Ran down the hill.",
      "",
      "That one has no subject, because it never tells you who did the running, so you're left wondering who ran down the hill.",
      "",
      "[ex] The old dog by the door.",
      "",
      "That one has a subject and no predicate, because it never says what the dog did, so you're left waiting to hear.",
      "",
      "[ex] Because the creek was rising.",
      "",
      "That one has a subject and a verb, but it still leaves you waiting, because the word Because opens a thought that never gets finished."
    ]},
    { title: "Fixing a Fragment", s: [
      "You have three ways to fix a fragment, and which one you pick depends on what's missing, so look at the broken piece before you reach for a fix.",
      "If it has no subject, add one; if it has no predicate, add one; and if it's a piece that belongs to the sentence next door, join the two together.",
      "",
      "[ex] Mara grabbed a rope.",
      "And ran to the creek.",
      "",
      "The second half is a fragment, since it has no subject, and it belongs to the sentence before it, so the fix is to join the two: Mara grabbed a rope and ran to the creek.",
      "That's the fix you'll use most, because most fragments in a draft are leftovers that got chopped off the sentence before them, usually by a period that came too soon.",
      "",
      "One warning belongs here: in dialogue, people talk in fragments all the time, and “Nobody” is a perfectly good answer to “Who was at the door?”",
      "So leave a fragment alone when a character is speaking and it sounds right, but go hunting for the ones in your narration, where the reader expects complete sentences."
    ]},
    { title: "Now Fix Your Own", s: [
      "Take your draft and read it aloud, slowly, and stop at every sentence that sounds like it quit early, because your ear will catch fragments that your eyes skim right over.",
      "Mark each one, say which of the three kinds it is, and fix it using whichever of the three ways fits.",
      "Revising is also something you don't have to do alone, and the book of Proverbs has a way of saying why.",
      "",
      "[verse] Proverbs 27:17 says, “Iron sharpeneth iron; so a man sharpeneth the countenance of his friend.”",
      "",
      "A parent or a friend who reads your draft with you will hear things you can't, and that's the kind of sharpening the verse is talking about, one person making another sharper."
    ]},
  ],

  words: [
    ["Revise", "To improve a draft after you've written it, by fixing parts that don't work.", 1],
    ["Fragment", "A group of words missing a subject, a predicate, or a complete thought, even though it's written like a sentence.", 11],
    ["Subject", "Who or what a sentence is about.", 10],
    ["Predicate", "The part of a sentence that says something about the subject.", 10],
  ],

  vocabQuestions: [
    { q: "What does it mean to <i>revise</i> a draft?",
      choices: ["To improve it after it's written, by fixing parts that don't work", "To write the first version", "To copy it out neatly", "To throw it away and start over"],
      right: 0, why: "Revising comes after drafting." },
    { q: "Which of these is a <i>fragment</i>?",
      choices: ["When the storm finally ended.", "The storm finally ended.", "The storm ended at midnight.", "Did the storm end?"],
      right: 0, why: "It leaves you waiting for the rest of the thought." },
    { q: "In the sentence “The dog barked,” which word is the <i>subject</i>?",
      choices: ["Dog", "Barked", "The dog barked", "Barked loudly"],
      right: 0, why: "The subject is who or what the sentence is about." },
    { q: "In the sentence “Mara ran to the creek,” what is the <i>predicate</i>?",
      choices: ["ran to the creek", "Mara", "creek", "Mara ran"],
      right: 0, why: "The predicate says what the subject did." },
  ],

  questions: [
    { q: "Which of these is a sentence fragment?", find: [13],
      hint: "Look for the one that doesn't say who did the action.",
      choices: ["Ran down the hill.", "Mara ran down the hill.", "The dog barked.", "Rain fell all night."], right: 0,
      why: "It has no subject, because it never says who ran." },
    { q: "The group of words “The old dog by the door.” is missing what?", find: [15],
      hint: "Ask what the dog did.",
      choices: ["A predicate, because it never says what the dog did", "A subject, because it never says who", "Nothing, because it's a complete sentence", "A capital letter at the beginning"], right: 0,
      why: "It names the dog but never says what the dog did." },
    { q: "“Because the creek was rising.” has a subject and a verb. Why is it still a fragment?", find: [17],
      hint: "Read it aloud and see whether you're left waiting.",
      choices: ["It leaves you waiting, because it doesn't make a complete thought", "It has no subject", "It has no verb", "It begins with a capital letter"], right: 0,
      why: "The word because makes the reader wait for the rest." },
    { q: "Which of these is a complete sentence?", find: [10],
      hint: "A complete sentence needs a subject, a predicate, and a complete thought.",
      choices: ["The wind howled through the trees.", "Howling through the trees all night.", "Through the trees and over the hills.", "When the wind howled."], right: 0,
      why: "It has a subject, a predicate, and a complete thought." },
    { q: "Which choice fixes this: “Mara grabbed a rope. And ran to the creek.”?", find: [21, 22],
      hint: "The second half belongs to the sentence before it.",
      choices: ["Mara grabbed a rope and ran to the creek.", "Mara grabbed a rope. And ran to the creek quickly.", "Mara grabbed a rope. Ran to the creek.", "Mara grabbed a rope. Then ran to the creek."], right: 0,
      why: "Joining the two makes one complete sentence with one subject and two actions." },
    { q: "Which choice fixes this: “The creek behind the house. It was rising fast.”?", find: [19],
      hint: "The first group of words has a subject but no predicate.",
      choices: ["The creek behind the house was rising fast.", "The creek behind the house. Was rising fast.", "The creek behind the house, it was rising fast.", "The creek behind the house rising fast."], right: 0,
      why: "Adding the predicate to the subject makes a complete sentence." },
    { q: "In dialogue, a character answers “Nobody” to the question “Who was at the door?” How should you treat it?", find: [24, 25],
      hint: "Read the warning about dialogue.",
      choices: ["Leave it, because people talk in fragments and it sounds right", "Fix it, because every fragment is a mistake", "Delete the line", "Turn it into a paragraph of narration"], right: 0,
      why: "Fragments are fine in dialogue when they sound like real speech." },
    { q: "What two things does a complete sentence need?", find: [10],
      hint: "Read the start of the section on fragments.",
      choices: ["A subject and a predicate that together make a complete thought", "A verb and a capital letter", "A noun and a period", "A long sentence with a comma"], right: 0,
      why: "A subject, a predicate, and a complete thought." },
    { q: "When you check your draft, what should the opening show?", find: [4],
      hint: "Look at the first question on the checklist.",
      choices: ["The character, the setting, and the conflict", "The ending and the title", "The theme and the symbol", "A long description of the weather"], right: 0,
      why: "The opening is the basic situation, which introduces all three." },
    { q: "How can you catch fragments your eyes miss?", find: [26, 26],
      hint: "Look at the last section.",
      choices: ["Read the draft aloud and stop at every sentence that sounds like it quit early", "Read it silently as fast as you can", "Skip the narration and read only the dialogue", "Look only for sentences that start with and"], right: 0,
      why: "Your ear catches what your eyes skip." },
  ],

  todo: { title: "What To Do Now", s: [
    "Take out your draft from the last lesson, a pencil, and a second sheet of paper.",
    "Start by working through the {c} word cards at the top of the page, {q} questions about the lesson, and {v} more questions about those words. {T} questions in all.",
    "Then read your draft once through for the five checklist questions, marking any place where the answer is no.",
    "Read it again out loud to find fragments, mark each one and fix it, and then copy the revised story out neatly on the second sheet.",
    "If you get stuck on a question, tap Find It in the Story and read the line the page shows you.",
    "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] },
};
