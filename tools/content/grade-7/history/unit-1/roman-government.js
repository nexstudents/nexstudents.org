/* history/roman-government
   Grade 7 · history · unit 1. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry. */
/* ═══════════ Unit 1 Lesson 2 — Roman Government and Citizenship ═══════════ */
'use strict';
module.exports = {
  id: "history/roman-government",
  slug: "roman-government",
  title: "Roman Government and Citizenship",
  unit: "Ancient Rome &middot; Unit 1 &middot; Lesson 2",
  shelf: { grades: [7], subject: "History",
    /* Paul's ChatGPT-composed cover, made 2026-09-11, square at 1254px so it
       also serves as the og:image (ROADMAP 54 asks for covers at 1200px+).
       All ten Unit 1 covers came in one batch; the source PNGs live in his
       DesktopSchool Lessons WorksheetsHistory Worksheetsth Grade Unit 1
       Thumbnails folder. 🚨 The art is Paul's - do not restyle or regenerate it. */
    thumb: true,
    blurb: "Offices, consuls and citizenship, and why one-year terms mattered.",
    contains: [
      "A story-form reading, read aloud with the words highlighted",
      "Four vocabulary words, each one defined inside the story",
      "Day 1: four questions with the answer findable in the text",
      "Day 2: a vocabulary check and a printable answer sheet",
    ] },
  eyebrow: ["History", "Unit 1 &middot; Lesson 2", "Ancient Rome"],
  dek: "Rome ran on offices, laws and paperwork. That sounds dull until you notice how much of it we still use.",
  scripture: {
    ref: "Romans 13:1",
    text: "There is no power but of God: the powers that be are ordained of God.",
  },
  parts: [
    { title: "A Government of Offices", s: [
      "Rome did not run on one man giving orders, at least not at first.",
      "It ran on offices, which are jobs with fixed powers and fixed time limits.",
      "Two consuls were elected each year to lead the city and command its armies, and each one could overrule the other.",
      "Below them, officials called magistrates handled the courts, the money, the roads and the grain supply.",
      "Above all of them sat the Senate, a council of Rome's most powerful men, who advised, argued, and controlled the treasury."
    ]},
    { title: "Why One Year Mattered", s: [
      "Almost every Roman office lasted exactly one year.",
      "That was on purpose, because a man who knows he must hand the job back is harder to turn into a king.",
      "Two consuls instead of one was the same idea, since either could block the other.",
      "The Romans had thrown out a king to build this system, and they designed it around the fear of getting another one.",
      "It worked for centuries, and then it stopped working, which is the story of Lesson 1."
    ]},
    { title: "Who Counted as Roman", s: [
      "Citizenship was the thing that decided how the law treated you.",
      "A Roman citizen could vote, could sign a legal contract, could take a dispute to court, and could not be beaten or executed without a trial.",
      "People living in lands Rome had conquered usually had none of that, even though they paid the same taxes.",
      "Rome slowly handed citizenship out to more people, partly from fairness and mostly because it bought loyalty cheaply.",
      "In 212 AD an emperor finally granted it to nearly every free person in the empire."
    ]},
    { title: "The Law and the Forum", s: [
      "Roman law was written down, published, and applied by courts rather than decided by whoever was angriest.",
      "That idea, that a rule exists outside the ruler, is the piece the rest of the world kept.",
      "The Forum was the open square at the centre of Rome where all of this happened in public.",
      "Speeches, trials, elections, business and gossip all took place in the same few hundred metres.",
      "Public life being visible was itself part of the system, because it is harder to bend a law in front of a crowd."
    ]},
    { title: "What the Emperors Kept", s: [
      "When the emperors took over, they did not throw the offices away.",
      "They kept the Senate, kept the consuls, kept the titles, and kept holding elections.",
      "The offices carried on with most of their old names and almost none of their old power.",
      "Keeping the shell made one man's rule look lawful, which was exactly the point.",
      "Long after the empire fell, later governments went back to Roman ideas about courts, contracts and citizenship and built on them."
    ]},
    { title: "What Scripture Says", s: [
      "Romans 13:1 says that “there is no power but of God: the powers that be are ordained of God.”",
      "Paul wrote that about the Roman government, and he wrote it as a citizen of an empire whose system was deeply unequal.",
      "Scripture calls for respect toward lawful authority, and it also holds every authority answerable to God, which means order matters and justice matters more."
    ]}
  ],
  todo: { title: "What To Do Now", s: [
      "That is the reading done. There are two things left, and both of them send you back into the story.",
      "First the word cards. {C} words from the lesson, and the meaning of each one is sitting in the sentences you just heard.",
      "Then {q} questions. The answer to every one of them is somewhere in the text above, not in your memory.",
      "If a question is hard, do not guess. Use the bar or the arrows to go back to the part it came from and read that part again.",
      "Finding the answer in the story is the skill this lesson is teaching. Getting it right from memory is not the same thing.",
      "The one to slow down on is who counted as Roman. The answer changes across the lesson, because Rome kept widening it. Go back to Who Counted as Roman and read it from the start."
  ] },
  words: [
    ["Senate", "Rome's council of powerful men. It advised the leaders, argued about laws, and controlled the treasury."],
    ["Citizenship", "The legal status that gave you rights: to vote, to make contracts, to use the courts, and not to be punished without a trial."],
    ["Consul", "One of two officials elected each year to lead Rome and command its armies. Either could overrule the other."],
    ["Law", "A written, published rule applied by courts, rather than whatever the ruler decided that day."]
  ],
  questions: [
    { q: "What was the main idea about government in this lesson?", find: [1, 2],
      hint: "Look near the start, for what Rome actually ran on.",
      choices: [
        "Rome ran on offices, which are jobs with fixed powers and fixed time limits.",
        "Rome had no government at all until the first emperor created one.",
        "Rome was ruled by its army generals from the very beginning.",
        "Rome copied its entire system of government from Greece without changing it."
      ], right: 0 },
    { q: "Why did Roman offices last only one year?", find: [6, 7],
      hint: "Look for the sentence that says why the limit was there on purpose.",
      choices: [
        "Because a man who knows he must hand the job back is harder to turn into a king.",
        "Because Romans believed a year was as long as anyone could concentrate.",
        "Because the Senate could only afford to pay officials for one year.",
        "Because Roman law forbade anyone from working two years in a row."
      ], right: 0 },
    { q: "What did the emperors do with the old republican offices?", find: [21, 23],
      hint: "Look in the last section, at what they kept and why.",
      choices: [
        "They kept the Senate, the consuls and the titles, because keeping the shell made one man's rule look lawful.",
        "They abolished the Senate and the consuls in their first year.",
        "They handed all the old offices over to the army to run.",
        "They replaced Roman law with the laws of the lands they had conquered."
      ], right: 0 },
    { q: "How does the Bible verse help you evaluate this history?", find: [26, 27],
      hint: "Look at the last section, at who wrote it and what it asks of a Christian.",
      choices: [
        "Scripture calls for respect toward lawful authority and holds every authority answerable to God, so order matters and justice matters more.",
        "It teaches that the Roman Empire was chosen by God above all other nations.",
        "It says Christians should refuse to pay taxes to an unjust government.",
        "It predicts that Rome would grant citizenship to everyone in 212 AD."
      ], right: 0 }
  ]
};
