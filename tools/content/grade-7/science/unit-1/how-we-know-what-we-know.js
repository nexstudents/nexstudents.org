/* science/how-we-know-what-we-know
   Grade 7 · science · unit 1. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry. */
'use strict';
module.exports = {
  id: "science/how-we-know-what-we-know",
  slug: "how-we-know-what-we-know",
  title: "How We Know What We Know",
  unit: "Life Science &middot; U1-L3",
  seq: { unit: 1, unitTitle: "Life and How We Study It", n: 3 },
  shelf: { grades: [7], subject: "Science",
    thumb: true,   /* Paul's art, 2026-08-31. Source PNG on his Desktop; see Lesson 1. */
    blurb: "Science is a method, not a pile of facts. What the method can settle, and what it cannot.",
    /* ⚠️ FIVE words here, not four. Paul added Observation on 2026-09-03. A count in a
       blurb goes stale silently - check it whenever `words` changes. Same class of bug
       as the "three scientists" dek on Lesson 2. */
    contains: [
      "A story-form reading, read aloud with the words highlighted",
      "Five vocabulary words, each one defined inside the reading",
      "Day 1: four questions with the answer findable in the text",
      "Day 2: a vocabulary check and a printable answer sheet",
    ] },
  eyebrow: ["Science", "U1-L3", "Life Science"],
  dek: "Most people think science is a body of facts to memorise. It is closer to a set of rules for arguing honestly about what is true.",
  scripture: {
    ref: "Proverbs 25:2",
    text: "It is the glory of God to conceal a thing: but the honour of kings is to search out a matter.",
  },
  /* 🚨 TEACHER NOTES, Paul's own text, 2026-09-03. HIS HEADINGS ARE NOT LESSON 2's -
     Goal / Key Concepts / Teaching Suggestion, with the point about creation folded
     into the closing paragraph instead of standing as its own Biblical Connection.
     That difference is why `ground` is a list of sections rather than fixed fields.
     ⚠️ "Key Vocabulary" is MINE, not his, matching Lesson 2. It renders from `words`
     so it duplicates nothing, but it is the one heading here he did not write. */
  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will learn that science is not simply a collection of facts. It is a method of asking questions, testing ideas, studying evidence, and correcting mistakes."
      ]},
      { h: "Key Concepts", p: [
        "The scientific process begins with observation. Observations lead to questions, and questions can lead to a hypothesis, which is a possible explanation that can be tested. Scientists then design experiments, compare results, and draw conclusions based on evidence.",
        "Students should also understand that a scientific theory and a scientific law are different. A theory explains patterns or events using a large body of evidence. A law describes a consistent pattern or relationship in nature. A theory does not eventually become a law."
      ]},
      { h: "Teaching Suggestion", p: [
        "Begin with something simple. Drop a pencil and ask, “Why did it fall?” The student observed something, but observation alone does not explain it. This is a good way to introduce the difference between seeing something happen and investigating why it happens.",
        "Near the end, remind students that science is an excellent tool for studying the physical world, but it cannot answer every kind of question. Scripture teaches that the world science investigates is God's creation."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },
  /* 🚨 REWRITTEN 2026-09-03 FROM PAUL'S OWN TEXT, the third lesson through item 29 after
     Lesson 1 (2026-08-31) and Lesson 2 (earlier the same evening).
     ⚠️ Markdown emphasis stripped on the way in - sentences render through textContent as
     word spans, so a `**bold**` would ship as literal asterisks. The five terms he bolded
     are the five word cards.
     ⚠️ The verse quotations keep their curly quotes; esc() only touches backslashes and
     straight double quotes, so they pass through untouched.
     🚨 SENTENCE NUMBERS ARE LOAD-BEARING - see `findsAt` below. */
  parts: [
    { title: "Science Is More Than Facts", s: [
      "When you hear the word science, you might picture a giant textbook filled with facts you have to memorize.",
      "But science is much more interesting than that.",
      "",
      "Science is a way of investigating the natural world.",
      "Scientists observe what happens, ask questions, test ideas, and examine the results.",
      "Most importantly, good science allows ideas to be tested and corrected when the evidence does not support them.",
      "",
      "Think back to Redi and Pasteur.",
      "Redi did not prove his idea simply by saying, “Trust me, I am a scientist.”",
      "He designed an experiment that other people could examine and repeat.",
      "",
      "That is an important part of science."
    ]},
    { title: "It Starts With Observation", s: [
      "Science often begins when someone notices something interesting.",
      "This is called an observation.",
      "",
      "Maybe one plant near a window grows faster than another.",
      "Maybe bread left on the counter develops mold.",
      "Maybe you notice that objects always fall toward the ground when you drop them.",
      "",
      "Observation leads to questions.",
      "",
      "Why did that happen?",
      "What caused it?",
      "Would it happen again?",
      "",
      "A good scientific question is one that scientists can investigate using observations, measurements, experiments, or other evidence."
    ]},
    { title: "From Question to Hypothesis", s: [
      "After asking a question, a scientist may form a hypothesis.",
      "A hypothesis is a possible explanation or answer that can be tested.",
      "",
      "Imagine you notice that a plant near the window grows faster than a plant across the room.",
      "You might form the hypothesis:",
      "The plant grows faster because it receives more sunlight.",
      "",
      "Now you have something you can test.",
      "You could grow similar plants while changing the amount of light they receive and compare what happens.",
      "",
      "A good hypothesis must allow evidence to support it or show that it needs to be changed."
    ]},
    { title: "Testing the Idea", s: [
      "Scientists use experiments to test hypotheses.",
      "A good experiment tries to change one important factor while keeping other conditions as similar as possible.",
      "Scientists may also use a control, which provides something to compare the experimental results against.",
      "",
      "Then comes one of the most important parts of science: following the evidence.",
      "",
      "Sometimes the results support the hypothesis.",
      "Sometimes they do not.",
      "",
      "Finding out that your hypothesis was wrong does not mean the experiment failed.",
      "It means you learned something.",
      "Scientists can change their ideas and test again.",
      "That is one of the strengths of science."
    ]},
    { title: "Theory Does Not Mean Guess", s: [
      "You may hear someone say, “That's just a theory.”",
      "In everyday conversation, theory can mean a guess.",
      "In science, it means something much stronger.",
      "",
      "A scientific theory is a broad explanation of the natural world that is supported by a large amount of evidence and has been tested many times.",
      "A scientific law has a different job.",
      "A law describes a consistent pattern or relationship observed in nature.",
      "",
      "A simple way to remember the difference is:",
      "A theory helps explain.",
      "A law describes a pattern or relationship.",
      "",
      "A theory does not become a law when scientists collect enough evidence.",
      "They have different purposes."
    ]},
    { title: "Can Science Answer Everything?", s: [
      "Science is an incredibly powerful tool, but every tool has a purpose.",
      "",
      "A microscope can help you examine a cell, but it cannot tell you whether stealing is wrong.",
      "A thermometer can measure temperature, but it cannot measure love.",
      "Science can study what happens inside the human brain, but scientific measurements alone cannot determine the purpose of human life.",
      "",
      "Questions about morality, meaning, purpose, and God are not answered simply by running another laboratory experiment.",
      "",
      "That does not make those questions unimportant.",
      "It means we need to recognize what science was designed to investigate and what it was not."
    ]},
    { title: "Studying God's Creation", s: [
      "For Christians, studying science can be one way of studying the incredible world God created.",
      "",
      "Psalm 19:1 says, “The heavens declare the glory of God; and the firmament sheweth his handywork.”",
      "",
      "Think about what that means.",
      "When we study stars, cells, animals, plants, energy, or the human body, we are examining something Scripture says ultimately came from God.",
      "Romans 1:20 also teaches that God's “eternal power and Godhead” can be understood through the things He has made.",
      "",
      "The order we discover in nature is what makes science possible in the first place.",
      "Scientists expect experiments to produce meaningful results because nature behaves in consistent and understandable ways.",
      "",
      "For Christians, that order should not point us away from God.",
      "It can point us back to the Creator.",
      "",
      "God gave us minds capable of asking questions, observing His creation, and discovering how parts of it work.",
      "Science gives us tools to investigate that creation.",
      "Scripture reveals truths about the Creator, our purpose, morality, and our relationship with Him.",
      "",
      "We do not have to be afraid of asking questions.",
      "We should learn to ask good questions, examine evidence carefully, admit when we are wrong, and continue searching for truth.",
      "",
      "As Proverbs 25:2 says, “It is the glory of God to conceal a thing: but the honour of kings is to search out a matter.”",
      "",
      "Science is one way we can search out the amazing details of the world God made."
    ]}
  ],
  /* ⚠️ ONE SITTING as of 2026-09-04. The questions come first and the word cards
     second, matching lesson-template.html's panel order. Lesson 2 shipped with them the wrong way round and Paul
     caught it on the page, not in the data. */
  todo: { title: "What To Do Now", s: [
      "That is the reading done.",
      "Two things are left, and they both happen today.",
      "First, the questions.",
      "Four of them, and the answer to each one is in the reading above, not in your memory.",
      "If a question is hard, do not guess.",
      "Use the bar or the arrows to go back to the part it came from and read it again.",
      "The one people trip on is the difference between a theory and a law.",
      "Read Theory Does Not Mean Guess again and look for what each one is FOR.",
      "Then the word cards.",
      "Five words this time, and every one of them is explained somewhere in the story you just heard.",
      "Tap each card to check yourself, then answer the vocabulary questions underneath it.",
      "If you can say why a theory never turns into a law, you have understood the hardest idea in this lesson."
  ] },
  /* Paul's definitions, 2026-09-03. FIVE words - Observation is new; this lesson had four
     before. ⚠️ Only four have a check question on Day Two: Paul wrote none for Observation
     and one was NOT invented for him. build-lessons.js warns about the gap every build. */
  words: [
    ["Observation", "Something noticed or measured about the natural world."],
    ["Hypothesis", "A possible explanation or answer that can be tested using evidence."],
    ["Control", "Something that provides a comparison in an experiment."],
    ["Theory", "A broad explanation supported by a large amount of evidence and repeated testing."],
    ["Law", "A description of a consistent pattern or relationship observed in nature."]
  ],
  /* 🚨 findsAt = the story sentence count these `find` indexes were verified against.
     Change the story and the build stops until they are re-checked. See checkFinds(). */
  findsAt: 71,
  questions: [
    { q: "Why is science more than just a collection of facts?", find: [2, 3, 4],
      hint: "Look for what scientists DO, not for what they have collected.",
      choices: [
        "Because scientific facts are mostly guesses.",
        "Because science is a method of observing, asking questions, testing ideas, and examining evidence.",
        "Because scientists do not need facts.",
        "Because science only uses experiments."
      ], right: 1 },
    { q: "What makes a hypothesis useful in science?", find: [20, 24, 26],
      hint: "A hypothesis nobody can check is no use to anybody.",
      choices: [
        "It can be tested using evidence.",
        "It must always be correct.",
        "It must come from a famous scientist.",
        "It cannot be changed once it is written."
      ], right: 0 },
    { q: "What is the difference between a scientific theory and a scientific law?", find: [40, 41, 42, 44],
      hint: "One of them explains. The other one describes.",
      choices: [
        "A theory is a guess and a law is a proven theory.",
        "A theory explains while a law describes a consistent pattern or relationship.",
        "Theories are used in biology and laws are used in physics.",
        "Every theory eventually becomes a law."
      ], right: 1 },
    { q: "Why can science not answer every kind of question?", find: [48, 52, 54],
      hint: "Think about the microscope and the thermometer, and what neither one could measure.",
      choices: [
        "Scientists have not performed enough experiments yet.",
        "Science only works with living things.",
        "Science investigates the natural world using evidence, but questions such as morality and purpose require other kinds of reasoning.",
        "Science cannot answer difficult questions."
      ], right: 2 }
  ],
  /* Paul's hand-written Day Two, 2026-09-03. Four checks for five cards - see `words`. */
  vocabQuestions: [
    { q: "What is a <i>hypothesis</i>?",
      choices: [
        "A possible explanation that can be tested.",
        "The final answer to every experiment.",
        "A scientific law.",
        "Something a scientist already knows is true."
      ], right: 0 },
    { q: "What is a <i>control</i>?",
      choices: [
        "Something used for comparison during an experiment.",
        "The scientist performing the experiment.",
        "The answer to a hypothesis.",
        "Something that must be changed."
      ], right: 0 },
    { q: "What is a <i>scientific theory</i>?",
      choices: [
        "An idea with no evidence.",
        "A broad explanation supported by a large amount of evidence and testing.",
        "A law that has not been proven yet.",
        "A scientist's personal opinion."
      ], right: 1 },
    { q: "What is a <i>scientific law</i>?",
      choices: [
        "A rule made by scientists.",
        "A theory that became completely proven.",
        "A description of a consistent pattern or relationship observed in nature.",
        "An explanation with no evidence."
      ], right: 2 }
  ]
};
