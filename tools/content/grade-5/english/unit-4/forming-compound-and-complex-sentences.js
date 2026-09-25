/* english/forming-compound-and-complex-sentences
   Grade 5 · english · unit 4. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 THE PROSE IS A DRAFT, NOT PAUL'S VOICE. Written 2026-09-24 on Opus from
   Houghton Mifflin English Grade 7 pp55-56 (leaf n71-n73, "Revising Strategies:
   Sentence Combining"), read on the borrowed copy the same evening, then given
   the /natural pass.

   ⚠️ THE WORLD IS THE BOOK'S, THE SENTENCES ARE MINE. The book uses a school
   election and a student's campaign speech, draft 1, for its revising task.
   That world is kept because the task IS revising a speech; the candidate and
   every sentence in her speech are new.

   ⚠️ This is the lesson /natural §20 describes: a run of short sentences reads
   like a drumbeat, and the cure is compound and complex sentences. Paul's own
   word for the problem, "choppy", is used on purpose.

   🚨 THE VERSE IS A WORKING CHOICE, NOT PAUL'S. Proverbs 25:11 fits (a word
   fitly spoken). Choosing the scripture is his → review queue. */
'use strict';
module.exports = {
  id: "english/forming-compound-and-complex-sentences",
  slug: "forming-compound-and-complex-sentences",
  title: "Forming Compound and Complex Sentences",
  unit: "Grammar · U4-L9",
  seq: { unit: 4, unitTitle: "Grammar", n: 1 },
  natural: "2026-09-24",

  plan: {
    objective: "Combine two short, related sentences into a compound sentence with a comma and and, but or or, or into a complex sentence with a subordinating conjunction such as because, when, although or until.",
    markers: [
      "QUOTED, Houghton Mifflin p55: 'Good writers vary the length of their sentences to make their writing more interesting. You can combine two short, related sentences into a compound sentence.'",
      "QUOTED, p55: 'A compound sentence joins two simple sentences with a conjunction such as and, but, or or. Use a comma to separate the parts of a compound sentence.'",
      "QUOTED, p56: 'Sometimes you can join two short sentences with a subordinating conjunction, such as although, because, until, or when. These words help show the relationship between the two sentences. The less-important sentence should begin with the subordinating conjunction. The new sentence is called a complex sentence.'",
      "QUOTED, chart, p56: 'Subordinate Clause · Independent Clause · Complex Sentence', worked both ways round.",
      "QUOTED, task, p56: 'Revise this draft of a student's campaign speech.'",
    ],
    method: "REVISE A REAL DRAFT. The book gives a choppy draft and asks the student to combine pairs, so the lesson does the same thing to one speech: show the drumbeat, join related pairs with a comma and a coordinating conjunction, then join pairs where one idea leans on the other with a subordinating conjunction, and read the revised speech back. The comma rule rides along with each join.",
    exampleOnly: [
      "Priya, the class election, the lunch line, her brother - WORLD: one campaign speech, the book's world with new sentences",
      "Jeff's campaign and the three candidate posters - WORLD: the book's own examples, deliberately not reused",
    ],
    digitize: "The reading engine. The choppy draft is one [ex] box of short lines, each combination shows the two short sentences and the joined one, and the panel notes name the join.",
    unclear: [],
  },

  shelf: { grades: [5], subject: "English",
    blurb: "A campaign speech where every sentence is fine and the whole thing sounds like a robot. Joining short sentences so they sound like a person.",
    contains: [
      "Teacher Notes written for whoever is teaching it",
      "The lesson read aloud, one line at a time, highlighted as it goes",
      "A panel that shows each example sentence as you hear it",
      "Four vocabulary cards, each with a check question",
      "Eight questions on combining sentences",
    ] },
  eyebrow: ["English 7", "U1-L9", "The Sentence"],
  dek: "Every sentence in the speech is correct, and together they sound like a drumbeat. The fix is joining them, and choosing the right word to join them with.",

  scripture: {
    ref: "Proverbs 25:11",
    text: "A word fitly spoken is like apples of gold in pictures of silver.",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will combine two short, related sentences into a compound sentence, using a comma and and, but or or, and into a complex sentence, using a subordinating conjunction such as because, when, although, until, before or since."
      ]},
      { h: "Key Concepts", p: [
        "A compound sentence is two complete sentences joined with a comma and a coordinating conjunction. Both halves are equally important.",
        "A complex sentence joins an independent clause, which could stand alone, to a subordinate clause, which starts with a subordinating conjunction and can't. The less important idea goes in the subordinate clause. When the subordinate clause comes first, a comma follows it."
      ]},
      { h: "Where Students Get Stuck", p: [
        "Joining sentences that don't belong together. A compound sentence claims the two halves are related, so combining two unrelated ideas only makes a longer confusing sentence.",
        "Forgetting the comma in a compound sentence, or leaving a subordinate clause on its own, which turns it straight back into the fragment from the last lesson."
      ]},
      { h: "Teaching Suggestion", p: [
        "Have the student read the choppy draft aloud and then the revised one. The difference is easier to hear than to see, and hearing it is the reason the lesson exists."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "A Speech Like a Drumbeat", s: [
      "Priya is running for class president, and the night before the speeches she reads her draft out loud to her older brother at the kitchen table.",
      "",
      "[ex] I want to be your class president.",
      "[ex] The lunch line is too slow.",
      "[ex] I have a plan.",
      "[ex] I will talk to the cafeteria staff.",
      "[ex] I am new this year.",
      "[ex] I already know a lot of you.",
      "",
      "Her brother listens to the whole thing and tells her it sounds like a robot reading a grocery list.",
      "She points out, fairly, that every one of those sentences is correct, and he agrees, which somehow makes it worse.",
      "If nothing is wrong with any single sentence, what's wrong with the speech?"
    ]},
    { title: "The Trouble With All the Same Length", s: [
      "The problem isn't in any one sentence; it's in the rhythm of all of them together.",
      "Six short sentences in a row land like six beats on a drum, and after the third one the listener hears the beat instead of the ideas.",
      "Good writers vary the length of their sentences, and the easiest way to do that is to combine two short sentences that belong together into one longer one.",
      "There are two ways to do it, and which one you pick depends on how the two ideas relate."
    ]},
    { title: "Two Equal Ideas: The Compound Sentence", s: [
      "When two sentences are equally important and closely related, you can join them into a compound sentence.",
      "Put a comma after the first sentence, then a coordinating conjunction, and, but or or, and then the second sentence.",
      "",
      "[ex] The lunch line is too slow, and I have a plan to fix it.",
      "",
      "The conjunction you choose still carries its meaning, the same as it did at the diner, and Priya's next two lines pull against each other, so they need but.",
      "",
      "[ex] I am new this year, but I already know a lot of you.",
      "",
      "Only join sentences that really belong together, because a compound sentence tells the listener the two halves are connected.",
      "Joining I want to be your class president to the cafeteria staff would only make a longer, stranger sentence."
    ]},
    { title: "When One Idea Leans on the Other: The Complex Sentence", s: [
      "Sometimes one idea isn't equal to the other, because it explains when, why or under what condition the main idea happens.",
      "Then you join them with a subordinating conjunction such as because, when, although, until, before or since, and you get a complex sentence.",
      "",
      "[ex] I want to be your class president because the lunch line is too slow.",
      "",
      "The part that could stand alone, I want to be your class president, is the independent clause.",
      "The part that starts with because is the subordinate clause, and it can't stand on its own, which is exactly the fragment you met in the last lesson.",
      "The less important idea always goes in the subordinate clause, since it's the one doing the explaining."
    ]},
    { title: "Where the Comma Goes", s: [
      "A subordinate clause can come first or last, and the comma depends on which.",
      "When it comes first, put a comma after it, because the listener needs a pause before the main idea arrives.",
      "",
      "[ex] When I'm president, I will talk to the cafeteria staff in the first week.",
      "",
      "When it comes last, you usually don't need one, since the main idea has already arrived.",
      "",
      "[ex] I will talk to the cafeteria staff in the first week when I'm president.",
      "",
      "Both are correct, so choose the order that puts the idea you want remembered at the end, where it lands hardest.",
      "Priya wants them to remember the cafeteria, so she puts when I'm president first."
    ]},
    { title: "The Speech, Revised", s: [
      "Here's Priya's speech after one more pass, with the same ideas and none of the drumbeat.",
      "Her brother didn't say anything this time, which from an older brother is a review.",
      "",
      "[ex] I want to be your class president because the lunch line is too slow.",
      "[ex] When I'm president, I will talk to the cafeteria staff in the first week.",
      "[ex] I am new this year, but I already know a lot of you.",
      "",
      "[verse] Proverbs 25:11 says, “A word fitly spoken is like apples of gold in pictures of silver.”",
      "",
      "Solomon is talking about saying the right thing at the right time, and the way you put your sentences together is part of that.",
      "The same true words can land or fall flat depending on how they're joined."
    ]}
  ],

  visuals: [
    { when: "The lunch line is too slow, and I have a plan to fix it.",
      kind: "Compound: Comma + And", body: "The lunch line is too slow, and I have a plan to fix it", mark: ".",
      note: "Two equal ideas, joined with a comma and and." },
    { when: "I will talk to the cafeteria staff in the first week when I'm president.",
      kind: "Subordinate Clause Last", body: "I will talk to the cafeteria staff in the first week when I'm president", mark: ".",
      note: "When the subordinate clause comes last, you usually don't need a comma." }
  ],

  words: [
    ["Compound sentence", "Two complete sentences joined with a comma and and, but or or.", 14],
    ["Complex sentence", "An independent clause joined to a subordinate clause by a word like because, when or although.", 22],
    ["Independent clause", "A part of a sentence that has a subject and a predicate and could stand alone.", 24],
    ["Subordinate clause", "A part of a sentence that starts with a word like because or when and can't stand alone.", 25]
  ],

  vocabQuestions: [
    { q: "Which of these is a <i>compound sentence</i>?",
      choices: ["I have a plan.", "I am new this year, but I already know a lot of you.", "Because the line is slow.", "When I'm president."],
      right: 1, why: "Two complete sentences joined with a comma and but." },
    { q: "Which of these is a <i>complex sentence</i>?",
      choices: ["I want to be your class president because the lunch line is too slow.", "The lunch line is too slow.", "I have a plan, and I will fix it.", "I am new."],
      right: 0, why: "An independent clause joined to a subordinate clause that starts with because." },
    { q: "Which part of this sentence is the <i>independent clause</i>? “When I'm president, I will talk to the cafeteria staff.”",
      choices: ["When I'm president", "When", "I will talk to the cafeteria staff", "president"],
      right: 2, why: "It has a subject and a predicate and could stand alone as a sentence." },
    { q: "Which of these is a <i>subordinate clause</i>?",
      choices: ["I have a plan", "the lunch line is too slow", "I already know a lot of you", "because the lunch line is too slow"],
      right: 3, why: "It starts with because and can't stand alone." }
  ],

  findsAt: 42,
  questions: [
    { q: "Why did Priya's first draft sound like a robot?", find: [7, 10, 11],
      hint: "Read The Trouble With All the Same Length again.",
      choices: [
        "The sentences had grammar mistakes.",
        "Every sentence was short and the same length, so it sounded like a drumbeat.",
        "The speech was too long.",
        "She used too many conjunctions."
      ], right: 1,
      why: "Every sentence was correct, but six short ones in a row hide the ideas behind the beat." },
    { q: "What joins the two parts of a compound sentence?", find: [15],
      hint: "Read the Two Equal Ideas section again.",
      choices: [
        "A comma and a coordinating conjunction such as and, but or or.",
        "A period.",
        "A subordinating conjunction such as because.",
        "Nothing, the two sentences simply run together."
      ], right: 0,
      why: "A comma plus and, but or or joins two equal sentences." },
    { q: "Which word best joins these? “I am new this year. I already know a lot of you.”", find: [17, 18],
      hint: "Do the two ideas add up, or pull against each other?",
      choices: ["and", "or", "but", "because"], right: 2,
      why: "Being new and already knowing people pull against each other, so but." },
    { q: "Why shouldn't Priya join “I want to be your class president” to “I will talk to the cafeteria staff” with and?", find: [19, 20],
      hint: "What does a compound sentence tell the listener about its two halves?",
      choices: [
        "Because and is never allowed.",
        "Because the sentence would be too short.",
        "Because they need a period instead of a comma.",
        "Because a compound sentence claims the two halves are connected, and joining any two ideas just makes a longer, stranger sentence."
      ], right: 3,
      why: "Only join sentences that really belong together." },
    { q: "In “I want to be your class president because the lunch line is too slow,” which part is the subordinate clause?", find: [23, 25],
      hint: "Look for the part that starts with the subordinating conjunction.",
      choices: [
        "I want to be your class president",
        "because the lunch line is too slow",
        "your class president",
        "I want"
      ], right: 1,
      why: "It starts with because and can't stand alone." },
    { q: "Which idea goes in the subordinate clause?", find: [26],
      hint: "Read the When One Idea Leans on the Other section again.",
      choices: [
        "The less important idea, the one doing the explaining.",
        "The most important idea.",
        "Whichever idea is shorter.",
        "The idea with the most nouns."
      ], right: 0,
      why: "The subordinate clause explains when, why or under what condition, so it carries the less important idea." },
    { q: "Where does the comma go in “When I'm president I will talk to the cafeteria staff”?", find: [28, 29],
      hint: "The subordinate clause comes first here.",
      choices: [
        "After I will.",
        "There is no comma.",
        "After When.",
        "After president."
      ], right: 3,
      why: "When the subordinate clause comes first, a comma follows it." },
    { q: "What happens to a subordinate clause if you leave it on its own?", find: [25],
      hint: "Think back to the last lesson.",
      choices: [
        "It becomes a compound sentence.",
        "It becomes a sentence fragment.",
        "It becomes a run-on.",
        "Nothing, it's a complete sentence."
      ], right: 1,
      why: "A subordinate clause can't stand alone, so by itself it's a fragment." }
  ],

  todo: { title: "What To Do Now", s: [
      "{c} word cards at the top of the page, then {Q} questions about the lesson, then {v} more questions about those words, {T} questions in all.",
      "When a question asks you to join two sentences, first decide whether the ideas are equal or whether one explains the other.",
      "Equal ideas get a comma and and, but or or, and an idea that explains the other gets because, when, although or until.",
      "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper.",
      "Then try it on something you wrote this week: find two short sentences in a row that belong together, and join them."
  ] },
};
