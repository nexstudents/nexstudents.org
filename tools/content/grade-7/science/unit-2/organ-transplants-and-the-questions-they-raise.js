/* science/organ-transplants-and-the-questions-they-raise
   Grade 7 · science · unit 2. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 THE PROSE IN `parts` IS A DRAFT, NOT PAUL'S VOICE. Built 2026-09-19 by Sonnet from
   the Merrill spread, then given the /natural pass. His prose is still the source
   → BEHAVIOR.md.

   🚨 THIS IS A "SCIENCE AND SOCIETY" SECTION, SAME SHAPE AS 3-4 (What We Throw Away).
   One objective, one new word, ends in a "You Decide!" box. The weight is on the
   argument, not the vocabulary. Do not "fix" it to match 2-2 or 2-3. */
'use strict';
module.exports = {
  id: "science/organ-transplants-and-the-questions-they-raise",
  slug: "organ-transplants-and-the-questions-they-raise",
  title: "Organ Transplants, and the Questions They Raise",
  unit: "Life Science &middot; U2-L4",
  seq: { unit: 2, unitTitle: "Inside the Cell", n: 4 },

  /* ── /teach-plan, 2026-09-19. Read off Merrill Life Science (Glencoe 1994)
        pp46-47, archive.org/details/merrilllifescien0000dani. ── */
  plan: {
    objective: "Explain why an organ transplant can fail, and weigh what should be done about how few organs there are.",
    markers: [
      "QUOTED, Objectives box: 'Relate the importance of science in your life.'",
      "QUOTED, Objectives box: 'Discuss problems in organ transplants.'",
      "QUOTED, New Science Words (only ONE): rejection",
      "QUOTED, opening: 'Have you ever considered the thousands of things that take place in your body? Think of your body as an automobile.'",
      "QUOTED, definition: 'rejection is a process whereby the immune system attacks the transplanted organ because it is foreign to the body.'",
      "QUOTED, SECTION REVIEW 2: 'Describe one problem with transplanting organs to humans.'",
      "QUOTED, SECTION REVIEW 3: 'Connect to Physics: Using what you know about cells, explain why it is beneficial for an organ that is being transplanted to be placed in cold storage until it is used.'",
      "QUOTED, You Decide!: 'Do you think that organs should be donated? ... some doctors are suggesting that donors be paid for their organs... but is it right to sell human body organs?'",
    ],
    method: "AN ISSUE, NOT A SKILL, exactly as in 3-4. The book opens with a picture the student already owns (a car in a junkyard with usable parts), explains ONE mechanism (the immune system attacks anything foreign, so the match matters), and then hands over a question with no answer key. The science is settled and the decision is not.",
    exampleOnly: [
      "the car, the mechanic and the junkyard - WORLD: an analogy for spare parts, not content to memorise",
      "kidney, heart, lung, liver - WORLD: organs the book lists as transplanted today",
      "Cynthia Gonzales running on a donated kidney - WORLD: the photo caption, a person, not a fact to test",
      "the dog whose heart was rebuilt from back muscle - WORLD: one idea being tried, not a method",
    ],
    digitize: "PARTIAL, same as 3-4. The reading maps onto the engine. The You Decide! half has no free-write mechanic, so it lives in `todo` as a paragraph written in a notebook. ⚠️ A real written-answer mechanic is still the honest fix → review queue.",
    unclear: "",
  },

  shelf: { thumb: true, grades: [7], subject: "Science",
    blurb: "A kidney from one person can save the life of another, and sometimes the body refuses it. Why that happens, and what to do about how few organs there are.",
    contains: [
      "A story-form reading, read aloud with the words highlighted",
      "Four words, each one defined inside the reading",
      "Four questions with the answer findable in the text",
      "A written argument to do in your notebook, with no right answer",
    ] },
  eyebrow: ["Life Science", "U2-L4", "Life Science"],
  dek: "Doctors can now take a healthy kidney out of one person and put it into another, and most of the time it works. When it doesn't, the reason is the same thing that keeps you well.",
  scripture: {
    ref: "1 Corinthians 12:26",
    text: "And whether one member suffer, all the members suffer with it; or one member be honoured, all the members rejoice with it.",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will learn why the body can reject a transplanted organ, understand the problems that come with transplants, and then write and defend a position on whether organs should be donated or sold."
      ]},
      { h: "Key Concepts", p: [
        "The immune system is the network in the body that fights infection, and it attacks anything it recognizes as foreign. Rejection is what happens when it does that to a transplanted organ. Doctors reduce the risk by matching the donor's organ to the patient, and by giving antirejection drugs that hold the immune system back.",
        "The second problem is supply. There are far more people waiting for organs than there are donors, which is why some doctors have suggested paying donors, and why that suggestion is the argument at the end of the lesson."
      ]},
      { h: "Teaching Suggestion", p: [
        "🚨 This section is an ARGUMENT, not a drill. The book ends it with “You Decide!” and no answer key. Let the student reach a conclusion you disagree with, and then ask for the reason rather than correcting the conclusion.",
        "The written task at the end is the point of the lesson. A paragraph with a clear position and two reasons is a better outcome than a perfect vocabulary score."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Spare Parts", s: [
      "Think of your body as a car, and think about how many things have to go right for it to run.",
      "When a fender crumples or a door gets crushed, a mechanic doesn't throw the whole car away, he goes to the junkyard and finds one that still works.",
      "Nobody expected that idea to work on people, but it does.",
      "Organ transplants have become common enough that you've probably heard of a kidney transplant, and hearts and lungs have been transplanted too, sometimes together.",
      "A healthy organ goes out of one person and into another, and a person who would have died goes on living."
    ]},
    { title: "The Watchdog", s: [
      "Here's the catch, though, because a transplant isn't always a success.",
      "When a patient needs a blood transfusion, the donor's blood type has to match, and organs have to match too.",
      "The reason is your immune system, the network in your body that fights infection.",
      "You can think of it as a watchdog that attacks every foreign invader it finds, which is exactly what you want when the invader is a virus or bacteria.",
      "But a new organ is foreign to your body too.",
      "When the immune system attacks a transplanted organ for that reason, it's called rejection.",
      "That's why doctors take such care to match the donor's organ with the tissues of the person receiving it."
    ]},
    { title: "Holding the Watchdog Back", s: [
      "Matching helps, but the body can still turn on a new organ, so patients are given drugs to turn the immune system down.",
      "These drugs keep it from attacking, and they've made transplants far more successful than they used to be.",
      "",
      "There's a cost to it, though, because the patient has to take them every single day for the rest of their life."
    ]},
    { title: "Where This Is Going", s: [
      "Today hearts, kidneys, livers and other organs are being transplanted, and doctors believe that with more research, certain animals could be raised just to supply organs for people.",
      "Other ideas are being tried as well; scientists have already rebuilt a dog's heart using muscle taken from the dog's own back.",
      "",
      "Someday scientists may even be able to grow new organs in a laboratory, so each of us could keep a spare set ready to fix our broken parts."
    ]},
    { title: "One Body, Many Members", s: [
      "[verse] In 1 Corinthians 12:26 Paul writes, “And whether one member suffer, all the members suffer with it; or one member be honoured, all the members rejoice with it.”",
      "",
      "He was talking about the church, but he picked the human body to explain it, because a body only works when its parts share what happens to any one of them.",
      "",
      "A transplant is a strange picture of that, since one person's kidney ends up doing the work in someone else's body.",
      "Science can show you how to make it succeed, but it can't say who should give up an organ or who should get one, and that part is left to us."
    ]}
  ],

  todo: { title: "What To Do Now", s: [
      "That's the whole story, so next come the questions.",
      "There are {q} of them, and the answer to each one is in the reading above, so if one is hard, use the bar or the arrows to go back and read that part again.",
      "After that comes the vocabulary check at the bottom, {v} questions on the word cards at the top of the page.",
      "Now the part that matters most, and it happens on paper.",
      "There aren't enough organs for everyone who needs one, so some doctors have suggested paying people who donate theirs.",
      "Here's the question: do you think organs should be donated, and is it right to sell them?",
      "Write your answer in your notebook as a proper paragraph, in complete sentences.",
      "Say what you think should happen, give your reasons, and use the word from this lesson where it fits.",
      "There's no answer key for this one and you won't be marked right or wrong, only on whether you took a clear position and supported it."
  ] },

  words: [
    ["Rejection", "When the immune system attacks a transplanted organ because it is foreign to the body.", 10],
    ["Immune system", "The network in your body that fights infection by attacking foreign invaders.", 7],
    ["Organ transplant", "An operation that puts a healthy organ from one person into another person.", 3],
    ["Antirejection drugs", "Drugs that turn the immune system down so it does not attack a transplanted organ.", 12]
  ],

  findsAt: 22,
  questions: [
    { q: "Why does the reading compare the body to a car?", find: [1],
      hint: "Look at what the mechanic does when a fender is crushed.",
      choices: [
        "Because a car and a body both need fuel.",
        "Because usable parts can come from somewhere else, the way they do at a junkyard.",
        "Because both wear out at the same speed.",
        "Because doctors are trained as mechanics."
      ], right: 1 },
    { q: "What is the immune system?", find: [7, 8],
      hint: "The reading gives it a one-line description and then a nickname.",
      choices: [
        "The network in the body that fights infection, which attacks foreign invaders.",
        "The part of the body that stores food.",
        "A type of drug given to patients.",
        "The doctor who matches a donor's organ."
      ], right: 0 },
    { q: "What is rejection?", find: [10],
      hint: "Find the sentence that gives the word and tells you what causes it.",
      choices: [
        "A patient deciding not to have surgery.",
        "A hospital turning away a donor.",
        "The immune system attacking a transplanted organ because it is foreign to the body.",
        "The organ failing because it is too old."
      ], right: 2 },
    { q: "What do doctors use to keep the immune system from attacking a new organ?", find: [12, 13],
      hint: "It is something the patient has to take every day.",
      choices: [
        "Cold storage.",
        "Blood transfusions.",
        "A second surgery.",
        "Antirejection drugs."
      ], right: 3 }
  ],

  vocabQuestions: [
    { q: "What does <i>rejection</i> mean in this lesson?",
      choices: [
        "The immune system attacking a transplanted organ because it is foreign to the body.",
        "A donor changing their mind before surgery.",
        "An organ being kept in cold storage.",
        "A drug that makes an organ grow."
      ], right: 0 },
    { q: "Why is a transplanted organ attacked by the immune system?",
      choices: [
        "Because it is too big.",
        "Because it is foreign to the body.",
        "Because it is too cold.",
        "Because it is not alive."
      ], right: 1 },
    { q: "Why do doctors match the donor's organ to the person receiving it?",
      choices: [
        "So the surgery is faster.",
        "So the organ is the right size only.",
        "To lower the chance that the immune system will reject it.",
        "So the donor is paid more."
      ], right: 2 },
    { q: "What is the cost of taking antirejection drugs?",
      choices: [
        "They only work once.",
        "They cause the organ to grow too fast.",
        "They turn a patient's blood type.",
        "The patient has to take them every day for life."
      ], right: 3 }
  ]
};
