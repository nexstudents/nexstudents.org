/* science/unit-1-review
   Grade 7 · science · unit 1. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 A REVIEW IS A DIAGNOSTIC, NOT A TEST. Read off the Glencoe Study Guide and
   Review (Course 2 p42): every exercise there sits beside the objective it tests
   and NAMES the lesson it came from, so a wrong answer tells you exactly which
   lesson to reread. Merrill does the same thing with CHECKING CONCEPTS and
   THINK AND WRITE CRITICALLY. So every question here says, in its hint, which of
   the four lessons to go back to. It is not there to score him.

   ✅ THE PROSE IN `parts` IS PAUL'S, REBUILT FROM HIS DOC 2026-09-14.
   Source: docs.google.com/document/d/1Qcq_j9zG-KkFebKV74qJLCEVdcpSlMzYgZ15jP7w4eQ
   A REWRITE, not an edit. The difference is the whole point of the lesson:
     - 🚨 MINE WAS A RECAP. HIS TEACHES CRITICAL THINKING. My draft walked the
       four lessons back through in order. Paul opens with TWO PLANTS and a guess
       about sunlight, and uses it to separate what you OBSERVED from what you
       THINK CAUSED IT. Everything after that hangs off the same distinction:
       Redi's maggots, hypothesis against theory against law, and James 1:19.
       A review that only recaps cannot teach anything new. His does.
     - TWO SCRIPTURES, BOTH IN THE STUDENT PROSE: James 1:19 on being swift to
       hear and slow to speak, and Job 12:7-8 on learning from the animals and
       the earth.
     - IT CLOSES ON A DEFINITION OF CRITICAL THINKING THAT IS NOT "DOUBT
       EVERYTHING" - it is being careful about WHY you believe something is true.
       That sentence is the thesis of the lesson and must not be trimmed.
   ⚠️ MY ADDITIONS ARE THREE SENTENCES, marked inline: EVIDENCE, CONTROLLED
   EXPERIMENT and TECHNOLOGY. All three carry word cards, Question 12 asks what
   evidence is, and none of the three was defined anywhere in his prose.
   ⚠️ 12 cards against 5 vocabulary questions WARNS and does not fail. That is
   correct and deliberate - a unit review gathers every word from four lessons,
   and Paul wrote five checks. Do not invent the other seven.
   → [[feedback-tweak-pauls-lesson-structure]] */
'use strict';
module.exports = {
  id: "science/unit-1-review",
  slug: "unit-1-review",
  title: "Unit 1 Review: Life, Science, and How We Know",
  unit: "Life Science &middot; U1-L5",
  seq: { unit: 1, unitTitle: "Life and How We Study It", n: 5 },

  plan: {
    objective: "Pull the four Unit 1 lessons back together, and practice telling what you observed apart from what you think caused it.",
    markers: [
      "QUOTED, Merrill chapter review headings: 'CHECKING CONCEPTS - Choose the word or phrase that completes the sentence.'",
      "QUOTED, Merrill: 'THINK AND WRITE CRITICALLY - Answer the following questions in your Journal using complete sentences.'",
      "QUOTED, Glencoe Study Guide and Review p42: 'Upon completing this chapter, you should be able to:' / 'Use these exercises to review and prepare for the chapter test.'",
      "INFERRED (from the Glencoe review layout, not stated in words): every exercise is printed beside the objective it tests and cites its lesson number, which is what makes it a diagnostic rather than a test.",
    ],
    method: "🚨 ONE DISTINCTION, APPLIED FOUR TIMES. What you observed is not the same as what you think caused it. Paul opens with two plants and a guess about sunlight, and then runs the same blade through everything else in the unit: the scientific method is the procedure for testing a guess, Redi's maggots are a reasonable-sounding idea that turned out wrong, and a theory explains where a law describes. The recall is real but it is carried by the argument, not by a list. A wrong answer still has to name the lesson to reopen, which is the diagnostic half.",
    exampleOnly: [
      "The two plants, the maggots on old meat, Redi and Pasteur, sweating to cool down - WORLD: the unit's own examples, deliberately reused. A review must not introduce a new world; recognising the example IS part of the recall.",
      "🚨 THE TWO PLANTS ARE NOT FROM ANY EARLIER LESSON AND THAT IS ON PURPOSE. They are the one new thing, and they exist to carry the observed-against-inferred distinction that the four lessons never stated outright.",
    ],
    digitize: "The existing reading engine. Every question's answer-hunt points into the recap, so the student who cannot answer is sent back to the paragraph AND told which full lesson to reopen. NO NEW MECHANIC NEEDED.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Science",
    thumb: true,   /* Paul's art, drawn 2026-09-01 - the cover existed before the lesson did. */
    blurb: "Four lessons back in one place, built around one question: how do you know that is why it happened?",
    contains: [
      "Two plants, one taller, and the difference between seeing it and explaining it",
      "The scientific method walked end to end on a single question about sunlight",
      "Redi, Pasteur, and an idea that sounded reasonable and was wrong",
      "Hypothesis, theory and law, and why a theory never becomes a law",
    ] },
  eyebrow: ["Life Science", "U1-L5", "Life and How We Study It"],
  dek: "You saw one plant grow taller. That is all you saw. Everything else you are about to say is a guess until you test it.",

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Bring the four Unit 1 lessons together and practice the distinction the unit was built on: what you observed is not the same as what you think caused it."
      ]},
      { h: "Key Concepts", p: [
        "The scientific method is a procedure for testing a guess rather than trusting it: observe, ask, hypothesize, test, examine evidence, conclude.",
        "A hypothesis is a possible explanation that can be tested. A theory explains and a law describes, and a theory does not eventually turn into a law. They have different jobs.",
        "Spontaneous generation sounded reasonable and was wrong. Biogenesis, the principle that living things come from other living things, is what the evidence supported."
      ]},
      { h: "Where Students Get Stuck", p: [
        "🚨 The hardest one in this unit is theory against law, and the wrong model is that a theory is promoted to a law once it is proven. Keep returning to what each one is FOR: a theory explains why, a law describes what reliably happens.",
        "The second stumble is treating a reasonable-sounding idea as a finding. Maggots appearing on meat is exactly that, and it is why Redi is in this review."
      ]},
      { h: "Teaching Suggestion", p: [
        "Do the two plants out loud before reading. Ask what he actually saw, then ask what he thinks caused it, and write the two answers in two places. The gap between those two columns is the whole lesson.",
        "This is a diagnostic, not a test. Every question's hint names the lesson to reopen, so treat a wrong answer as a pointer rather than a score."
      ]},
      { h: "Try It Yourself", p: [
        "Grow lima beans in a jar with paper towels and water. The student makes observations, asks a question, forms a hypothesis, collects evidence and records what happens. Use the Lima Bean Experiment worksheet for the activity."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Where This Unit Started", s: [
      "This unit began with a simple question.",
      "",
      "[ex] What is alive, and how do we know?",
      "",
      "We learned about living things, where life comes from, and how scientists investigate the world around us.",
      "Now we can bring those ideas together."
    ]},

    { title: "Look Before You Decide", s: [
      "Imagine that you plant two similar plants.",
      "After several weeks, one is taller than the other.",
      "",
      "You might think that the plant grew faster because it got more sunlight.",
      "",
      "Maybe.",
      "But you do not know that yet.",
      "",
      "What you know is what you observed: one plant grew taller.",
      "Your idea about the sunlight is something you could test.",
      "",
      "That difference between what you observe and what you think caused it is an important part of critical thinking."
    ]},

    { title: "The Scientific Method", s: [
      "Scientists investigate questions using a process often called the scientific method.",
      "",
      "It can be simplified like this.",
      "",
      "[ex] Observe, ask, hypothesize, test, examine evidence, conclude",
      "",
      "Suppose you want to know whether sunlight affects plant growth.",
      "",
      "[ex] Observation: one plant grew taller.",
      "[ex] Question: does sunlight affect how quickly a plant grows?",
      "[ex] Hypothesis: a plant that receives more sunlight will grow faster.",
      "[ex] Test: grow similar plants with different amounts of sunlight, keeping other conditions as similar as possible.",
      "[ex] Evidence: measure and compare their growth.",
      "[ex] Conclusion: decide whether the evidence supports your hypothesis.",
      "",
      /* ⚠️ MINE, two sentences. Both words carry a card and Question 12 asks what
         evidence is, but his prose only uses them as labels in the list above. */
      "Evidence is information gathered through observation, measurement, or testing.",
      "A test built that way, changing one factor while holding the rest steady, is called a controlled experiment.",
      "",
      "Your hypothesis might be right.",
      "It might also be wrong.",
      "Either way, you learned something."
    ]},

    { title: "Learning From Evidence", s: [
      "People once believed in spontaneous generation, the idea that living things could naturally appear from nonliving material.",
      "Maggots seemed to suddenly appear on old meat, so the idea seemed reasonable.",
      "",
      "Francesco Redi tested it.",
      "He showed that maggots appeared where flies could reach the meat.",
      "Later experiments by Louis Pasteur provided further evidence against spontaneous generation.",
      "",
      "The evidence supported biogenesis, the principle that living things come from other living things.",
      "",
      "This is an important lesson in critical thinking.",
      "Something can sound reasonable and still be wrong.",
      "Test your ideas against the evidence."
    ]},

    { title: "Remember What Makes Something Alive", s: [
      "A living thing is called an organism.",
      "Living things have characteristics that separate them from nonliving things.",
      "",
      "Your body, for example, works to keep its internal conditions stable.",
      "When you become hot, you sweat to help cool yourself.",
      "This is called homeostasis.",
      "",
      "Living things also have inherited characteristics that help them survive in their environments.",
      "These are called adaptations.",
      "",
      "Scientists look at characteristics like these when studying life."
    ]},

    { title: "Hypothesis, Theory, and Law", s: [
      "These words do not mean the same thing.",
      "",
      "A hypothesis is a possible explanation that can be tested.",
      "A theory explains.",
      "A law describes.",
      "",
      "A scientific theory is a broad explanation supported by a large amount of evidence and repeated testing.",
      "A scientific law describes a consistent pattern or relationship observed in nature.",
      "",
      "A theory does not eventually turn into a law.",
      "They have different jobs."
    ]},

    { title: "Slow Down and Look", s: [
      "James 1:19 tells us to be:",
      "",
      "[verse] \"swift to hear, slow to speak.\"",
      "[verse] James 1:19",
      "",
      "That is also a useful principle for critical thinking.",
      "",
      "Do not rush from I saw something to I know why it happened.",
      "",
      "Observe.",
      "Ask questions.",
      "Test your ideas.",
      "Look at the evidence.",
      "Then decide what the evidence supports.",
      "",
      "Job 12:7 and 8 tell us to look to the animals and the earth and learn from them.",
      "God's creation is something we can observe, study, and learn about.",
      /* ⚠️ MINE, one sentence. Technology has a card and appears nowhere in his
         prose. Placed here because the tools are how we do the observing. */
      "Some of that studying is done with tools we build, and technology is using knowledge to solve problems or accomplish tasks.",
      "",
      "Critical thinking does not mean doubting everything.",
      "It means being careful about why you believe something is true."
    ]}
  ],

  words: [
    ["Organism", "A living thing.", 36],
    ["Homeostasis", "The ability to maintain relatively stable conditions inside an organism.", [39, 40]],
    ["Adaptation", "An inherited characteristic that helps an organism survive.", [41, 42]],
    ["Spontaneous Generation", "The old belief that living things could naturally come from nonliving material.", 27],
    ["Biogenesis", "The principle that living things come from other living things.", 32],
    ["Scientific Method", "A process for investigating questions using observation, testing, and evidence.", [12, 14]],
    ["Hypothesis", "A possible explanation that can be tested.", 45],
    ["Controlled Experiment", "A test designed to see how changing one factor affects the result.", 23],
    ["Evidence", "Information gathered through observation, measurement, or testing.", 22],
    ["Theory", "A broad explanation supported by a large amount of evidence.", 48],
    ["Law", "A description of a consistent pattern or relationship observed in nature.", 49],
    ["Technology", "Using knowledge to solve problems or accomplish tasks.", 64]
  ],

  findsAt: 67,
  questions: [
    { tag: "Observe First", q: "You notice that one plant grows faster than another. What should you do before deciding why?",
      find: [9, 11, 14],
      hint: "Go back to Look Before You Decide. Lesson 1 is the one on how we know what we know.",
      choices: [
        "Guess what happened.",
        "Observe and ask a question.",
        "Call it a scientific law.",
        "Ignore the difference."
      ], right: 1 },

    { tag: "Naming the Guess", q: "You think more sunlight may help a plant grow faster. What is this possible explanation called?",
      find: [18, 45],
      hint: "The Scientific Method names it, and Lesson 1 taught it.",
      choices: [
        "A hypothesis.",
        "A law.",
        "Technology.",
        "A conclusion."
      ], right: 0 },

    { tag: "Why Evidence", q: "Why do scientists collect evidence?",
      find: [21, 22, 35],
      hint: "Look at the last step of the method. Lesson 1 again.",
      choices: [
        "To test whether an idea is supported.",
        "To make every hypothesis correct.",
        "To turn a hypothesis into a law.",
        "To avoid doing experiments."
      ], right: 0 },

    { tag: "Redi", q: "What did Redi's experiment help show?",
      find: [29, 30, 31],
      hint: "Learning From Evidence. Go back to Lesson 3, where life only comes from life.",
      choices: [
        "Maggots came from flies, not the meat itself.",
        "Meat never spoils.",
        "Flies came from meat.",
        "Experiments are unnecessary."
      ], right: 0 },

    { tag: "Staying Steady", q: "What is homeostasis?",
      find: [38, 39, 40],
      hint: "Remember What Makes Something Alive, and Lesson 2 on what makes something alive.",
      choices: [
        "Coming from another living thing.",
        "Maintaining stable internal conditions.",
        "Changing into a new species.",
        "Testing a hypothesis."
      ], right: 1 },

    { tag: "Theory or Law", q: "Which statement is correct?",
      find: [46, 47, 50, 51],
      hint: "This is the one most people get wrong. Hypothesis, Theory, and Law, and Lesson 1.",
      choices: [
        "A theory eventually becomes a law.",
        "A law is an untested idea.",
        "A theory explains, while a law describes.",
        "A hypothesis and a theory are the same."
      ], right: 2 },

    { tag: "The Order", q: "Which order best represents scientific investigation?",
      find: [13, 14],
      hint: "It is written out as a line in The Scientific Method.",
      choices: [
        "Conclude, observe, test.",
        "Observe, ask, hypothesize, test, examine evidence, conclude.",
        "Hypothesize, conclude, observe.",
        "Test, guess, conclude."
      ], right: 1 },

    { tag: "The Big Idea", q: "What does good critical thinking require?",
      find: [65, 66],
      hint: "The last two lines of the lesson answer this exactly.",
      choices: [
        "Always trusting your first idea.",
        "Doubting everything you hear.",
        "Looking carefully at evidence before reaching a conclusion.",
        "Never changing your mind."
      ], right: 2 }
  ],

  vocabQuestions: [
    { q: "What is an <i>organism</i>?",
      choices: [
        "A living thing.",
        "An experiment.",
        "A scientific law.",
        "Anything that moves."
      ], right: 0 },
    { q: "What is <i>biogenesis</i>?",
      choices: [
        "Life appearing from nonliving material.",
        "Living things coming from other living things.",
        "Maintaining stable conditions.",
        "Testing an idea."
      ], right: 1 },
    { q: "What is an <i>adaptation</i>?",
      choices: [
        "An inherited characteristic that helps an organism survive.",
        "A scientific experiment.",
        "A change an organism chooses to make.",
        "A type of evidence."
      ], right: 0 },
    { q: "What is <i>evidence</i>?",
      choices: [
        "A guess.",
        "A scientific law.",
        "Information gathered through observation, measurement, or testing.",
        "Something scientists already believe."
      ], right: 2 },
    { q: "What is a <i>theory</i>?",
      choices: [
        "An untested guess.",
        "A broad explanation supported by a large amount of evidence.",
        "A law that has not been proven.",
        "A single observation."
      ], right: 1 }
  ],

  todo: { title: "What To Do Now", s: [
      "That is the whole unit back in one place, and this one is not a test.",
      "{c} word cards sit at the top of the page, then {Q} questions, then {v} more questions about those words. {T} questions in all.",
      "Every hint names the lesson to go back and reopen, so a wrong answer is a pointer rather than a score.",
      "If several of them send you to the same lesson, that is the one to read again properly.",
      "The one almost everybody gets wrong is theory against law.",
      "A theory does not get promoted to a law once it is proven; they do different jobs, and Hypothesis, Theory, and Law says which is which.",
      "When the questions are done, there is the lima bean jar to set up, and that is the whole method done with your own hands.",
      "Last, the word cards at the top and the check at the bottom of the page."
  ] }
};
