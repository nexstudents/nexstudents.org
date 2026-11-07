/* science/unit-8-review
   Grade 7 · science · unit 8 (book unit 8, "Viruses and Monerans", shelved as
   "The Smallest Living Things"), lesson 5 (the review). Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-11-07. Written on Sonnet from the four unit 8
   lessons built the same day (viruses-alive-or-not, what-it-costs-to-cure-a-disease,
   bacteria-the-kingdom-monera, the-bacteria-you-live-with) and the book's Chapter 8
   Review (Merrill Life Science printed pp197-199, via the week 10-11 packet,
   paraphrased notes). Paul has not read it. Built like unit-6-review: each core idea
   re-shown briefly with a small drawing, every hint names the lesson to go back to.
   New examples where the lesson used one (a cold virus in a nose cell, a different
   yogurt count) so the review tests the idea and not the memory of the example.

   🚨 ORIGINS RULE. The book's Chapter 8 summary says "the oldest types of monerans
   are anaerobic" (p197). THAT SENTENCE IS LEFT OUT, as lesson 8-3 left out its
   'millions of years' and 'ancient forms' lines. Nothing here touches age or ancestry.

   🚨 HIV is ONE RECAP LINE in the same safe wording as lesson 8-2: no sexual contact,
   no 1992 statistics, and it does not spread by hugging or shaking hands.

   ⚠️ ADDED FROM THE RECORD: nothing beyond what lessons 8-1 to 8-4 already flagged.
   The yogurt calculation is the book's (Chapter 8 Review, Using Lab Skills 11): 50,000
   bacteria a drop, 30 drops a milliliter, a 250-milliliter serving. The question uses
   a fresh set of numbers.
   ⚠️ CUT from the book's review: designing a temperature experiment for yogurt, the
   virus-growth graph and its interpretation, the compare-a-virus-bacterium-and-
   eukaryote table, and the two projects. The Think and Write questions have no answer
   key, so the notebook writing lives in `todo`, as in the other science reviews.

   🚨 THE VERSE IS A WORKING CHOICE, NOT PAUL'S. Zechariah 4:10, first part only ("For
   who hath despised the day of small things?"), for a unit about the smallest living
   things. Choosing the scripture is his, so it goes in the review queue. */
'use strict';

/* draws a small table with a header row; rows is a list of equal-length lists */
const table = (rows) => {
  const n = rows[0].length, w = [];
  for (let i = 0; i < n; i++) w[i] = Math.max(...rows.map((r) => [...r[i]].length)) + 2;
  const line = (l, m, r) => l + w.map((x) => "─".repeat(x)).join(m) + r;
  const row = (r) => "│" + r.map((c, i) => " " + c + " ".repeat(w[i] - 1 - [...c].length)).join("│") + "│";
  return [line("┌", "┬", "┐"), row(rows[0]), line("├", "┼", "┤")]
    .concat(rows.slice(1).map(row), [line("└", "┴", "┘")]).join("\n");
};

const LESSONS = [
  ["Lesson", "The big idea"],
  ["1  Viruses", "Not cells, and they need a host cell"],
  ["2  The cost of a cure", "A medicine must be shown safe and shown to work"],
  ["3  Monerans", "Simple cells with no nucleus"],
  ["4  Everyday bacteria", "Some help us and a few harm us"],
];
const TOOLS = [
  ["Tool", "What it does", "What it is used against"],
  ["Vaccine", "Helps the body get ready", "A disease, before it starts"],
  ["Antibiotic", "Stops or kills", "Bacteria, and not viruses"],
  ["Pasteurization", "Heats food to kill germs", "Harmful bacteria in milk and juice"],
];
const FIVE = [
  ["Step", "What happens"],
  ["1", "Lab tests on cells and animals"],
  ["2", "A small trial to check safety"],
  ["3", "Bigger trials to see if it works"],
  ["4", "The FDA reviews the results"],
  ["5", "Approval, and the pharmacy"],
];

module.exports = {
  id: "science/unit-8-review",
  slug: "unit-8-review",
  title: "Unit 8 Review: The Smallest Living Things",
  unit: "Life Science &middot; U8-L5",
  seq: { unit: 8, unitTitle: "The Smallest Living Things", n: 5 },
  natural: "2026-11-07",

  /* ── /teach-plan, 2026-11-07. Merrill Life Science Chapter 8 Review, printed pp197-199,
        and the four unit 8 lessons. ── */
  plan: {
    objective: "Pull the four Unit 8 lessons back together: what a virus is and how it infects a cell, the path a new medicine takes and what it costs, what a moneran is, and which bacteria help and which harm.",
    markers: [
      "BOOK (paraphrased), Chapter Summary: a virus is nucleic acid in a protein coat that reproduces only inside a living cell and may destroy the cell at once or be latent; vaccines prevent viral infections and interferon blocks viruses; viruses can carry correct DNA in gene therapy.",
      "BOOK (paraphrased): AIDS is a deadly viral disease of the immune system, and death comes from other infections; the cost of treating it was more than was spent on some diseases that affect more people.",
      "BOOK (paraphrased): monerans are cells with DNA, ribosomes and cytoplasm and no organelles, and most reproduce by fission; cyanobacteria make their own food. Monerans help (recycling, nitrogen fixation, food) and some cause disease (anthrax, tetanus, botulism); pasteurization keeps food free of harmful bacteria.",
      "BOOK (paraphrased), Checking Concepts themes: smallpox is a viral disease; moneran cells contain DNA; cyanobacteria cause pond blooms; saprophytes return nutrients; strep throat is caused by a pathogen; anaerobes may find oxygen deadly.",
      "BOOK (paraphrased), Using Lab Skills 11: yogurt has 50,000 bacteria per drop and thirty drops per milliliter; how many are in a 250-milliliter serving?",
      "BOOK (paraphrased), Think and Write: would you classify viruses in a kingdom, why must milk be pasteurized, why do most victims of the immune disease die of secondary infections, why are monerans prokaryotes.",
    ],
    method: "A RECAP WITH A PICTURE EACH TIME. The four lessons are one neighborhood of tiny things: what is not quite alive, what it costs to fight it, what is alive and simple, and what it does for and to us. Each is re-shown in a few sentences and a small table (the four lessons, the four steps on a cold virus, the five steps of a medicine, a bacteria count, the three tools), and the questions ask the same moves on new examples. Every hint names the lesson to reopen.",
    exampleOnly: [
      "The cold virus in a nose cell and the 40,000-a-drop yogurt are fresh examples in place of the lessons' own.",
    ],
    digitize: "The existing reading engine. Five short Watch It Worked walkthroughs (the four lessons in a table, a cold virus in four steps, the five steps of a medicine, the yogurt count, the three tools). Every question's answer-hunt points into the recap, and every hint names the lesson to reopen. NO NEW MECHANIC. The Think and Write questions have no answer key, so they live in `todo` as notebook writing.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Science",
    blurb: "The whole unit in one pass: what a virus is and how it gets into a cell, how a medicine goes from an idea to the pharmacy, the simple cells called monerans, and the bacteria that help and harm us.",
    contains: [
      "The four lessons in one table",
      "A virus taken through its four steps again",
      "The five steps a new medicine takes",
      "Counting bacteria in a serving of yogurt",
      "Vaccines, antibiotics and pasteurization, and what each is for",
      "Two paragraphs to write on your own, with no answer key",
    ] },
  eyebrow: ["Life Science", "U8-L5", "The Smallest Living Things"],
  dek: "Viruses, medicines and bacteria. Here's the whole unit in one place, with a few new examples to try the ideas on.",

  scripture: {
    ref: "Zechariah 4:10",
    text: "For who hath despised the day of small things?",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Bring the four Unit 8 lessons together and check which parts hold and which need a second read: what a virus is and how it infects a cell, how a new medicine is tested and what it costs, what monerans are, and which bacteria help and harm."
      ]},
      { h: "Key Concepts", p: [
        "Every question is tied to one of the four lessons and the hint says which one, so a wrong answer is directions to the right page and not a mark against your student.",
        "The one calculation is the bacteria count: multiply the number in a drop, the drops in a milliliter and the milliliters in a serving."
      ]},
      { h: "Where Students Get Stuck", p: [
        "Using an antibiotic against a virus. Antibiotics work on bacteria, and a cold is a virus.",
        "Mixing up what a vaccine does. It helps the body get ready before the disease starts, and it does not cure one that has begun.",
        "Dropping a zero in the bacteria count. Multiply two numbers at a time and count the zeros."
      ]},
      { h: "Left Out On Purpose", p: [
        "The textbook chapter summary says the oldest types of monerans are anaerobic. That sentence is left out, the same way lesson 8-3 left out its lines about millions of years. HIV is one line, in the same careful wording as lesson 8-2."
      ]},
      { h: "Book Pages", p: [
        "Merrill Life Science (1994), Chapter 8 Review, pages 197 to 199. Read free on archive.org: https://archive.org/details/merrilllifescien0000dani/page/222/mode/2up"
      ]},
      { h: "Suggested Videos", videos: [
        { id: "fSEFXl2XQpc", title: "Immune System", channel: "Amoeba Sisters",
          why: "Ties together how the body fights viruses and bacteria, and why vaccines and antibiotics help." },
        { id: "8FqlTslU22s", title: "Viruses (Updated)", channel: "Amoeba Sisters",
          why: "A second look at the virus's structure and its two ways of infecting a cell, the active and the latent." },
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "A Neighborhood of Tiny Things", s: [
      "Think back to a particle that isn't quite alive, a medicine that takes years to test, a cell with no nucleus and a yogurt full of bacteria.",
      "They look like four separate stories, but they are all about very small things and what they do to us.",
      "",
      "[walk] Say each lesson in one line.",
      "[step] The first lesson was about viruses, which are not cells and need a host cell. || " + table(LESSONS.slice(0, 2)),
      "[step] The second was about the cost of a cure, because a medicine has to be shown to be safe and to work. || " + table(LESSONS.slice(0, 3)),
      "[step] The third was about monerans, the simplest cells, which have no nucleus. || " + table(LESSONS.slice(0, 4)),
      "[step] The fourth was about the bacteria in our lives, and how a few can harm us. || " + table(LESSONS)
    ]},

    { title: "Viruses", s: [
      "A {{virus}} is a core of nucleic acid inside a protein coat, and it is not a cell, so it can make more viruses only inside a host cell.",
      "In the active way it takes over the cell and bursts it, and in the latent way it hides in the cell's own DNA until something wakes it up.",
      "",
      "[walk] Follow a cold virus into a cell in someone's nose.",
      "[step] First it attaches to the outside of the cell. || attach",
      "[step] Second it invades, by injecting its nucleic acid. || attach\ninvade",
      "[step] Third it copies, because the cell is made to build new viruses. || attach\ninvade\ncopy",
      "[step] Fourth it releases, when the cell bursts and the new viruses escape. || attach\ninvade\ncopy\nrelease",
      "",
      "A {{vaccine}} is made from killed or weakened particles, and it helps the body get ready before the real virus ever arrives."
    ]},

    { title: "The Cost of a Cure", s: [
      "The immune system is the body's team of guards, and one virus, called HIV, switches the guards off.",
      "That is why people with it get sick from other illnesses, and it does not spread by hugging or shaking hands.",
      "Making a medicine for a disease like that is slow, because every medicine has to be shown to be safe and shown to work.",
      "",
      "[walk] Put a new medicine's journey in order.",
      "[step] It starts in the lab, with tests on cells and animals. || " + table(FIVE.slice(0, 2)),
      "[step] A small trial checks that it is safe, and bigger trials check that it works. || " + table(FIVE.slice(0, 4)),
      "[step] The FDA reviews all the results, and only then is it approved. || " + table(FIVE),
      "",
      "Money for research is limited, so deciding how to share it between diseases is a hard question with two real sides."
    ]},

    { title: "Monerans", s: [
      "Monerans are one-celled prokaryotes, with no nucleus, one circular chromosome, ribosomes and a cell wall.",
      "They come in three shapes, the ball, the rod and the spiral, and most of them multiply by {{fission}}, splitting in two.",
      "An {{anaerobe}} can live without oxygen, an aerobe needs it, and cyanobacteria are the monerans that make their own food.",
      "When a pond blooms with cyanobacteria and they die, the bacteria that feed on them use up the oxygen, and the fish die.",
      "",
      "[walk] Count the bacteria in a serving of yogurt that has 50,000 in a drop, 30 drops in a milliliter and a serving of 250 milliliters.",
      "[step] Start with the bacteria in one milliliter, which is the drops times the bacteria in a drop. || 50,000 × 30 = 1,500,000",
      "[step] Then multiply by the milliliters in the serving. || 1,500,000 × 250 = 375,000,000",
      "[step] So the serving holds about three hundred seventy-five million bacteria. || 375,000,000 bacteria"
    ]},

    { title: "Helpers and Harmers", s: [
      "Most bacteria help, because saprophytes recycle dead material, nitrogen-fixing bacteria feed plants, and others make cheese and clean up spills.",
      "A few are {{pathogens}}, which cause disease, and some of those make toxins.",
      "The fight against them uses an {{antibiotic}}, which stops or kills bacteria, and pasteurization, which heats food, and the vaccine you already know.",
      "Botulism is the example to remember, because its bacteria are anaerobes whose endospores survive canning, and a sealed can has no oxygen.",
      "",
      "[walk] Match each tool to what it is used against.",
      "[step] A vaccine helps the body get ready for a disease before it starts. || " + table(TOOLS.slice(0, 2)),
      "[step] An antibiotic stops or kills bacteria, and it does nothing against a virus like a cold. || " + table(TOOLS.slice(0, 3)),
      "[step] Pasteurization heats foods like milk and juice to kill the harmful bacteria. || " + table(TOOLS)
    ]},

    { title: "The Day of Small Things", s: [
      "The things in this unit are the smallest living things there are, and the one that isn't quite alive.",
      "",
      "[verse] Zechariah 4:10 says, “For who hath despised the day of small things?”",
      "",
      "The verse says small things matter, and a virus and a bacterium are good proof, since they can heal, feed or harm on a scale far bigger than they are.",
      "Use the questions below to see how well it stuck."
    ]}
  ],

  todo: { title: "What To Do Now", s: [
      "Start with the questions, {Q} of them, and if one is hard the hint tells you which lesson to go back to.",
      "After that comes the vocabulary check at the bottom, {v} questions on the word cards at the top of the page.",
      "Then the part that matters most, and it happens on paper.",
      "In your notebook, write one paragraph of complete sentences that answers this question: would you classify a virus in a kingdom, and why or why not?",
      "Then write a second paragraph that explains why milk is pasteurized and what pasteurization does.",
      "There's no answer key for the notebook part, and you'll be judged on whether your reasons are clear and use facts from the unit."
  ] },

  words: [
    ["Virus", "A tiny particle with a core of nucleic acid inside a protein coat. It is not a cell.", 7],
    ["Vaccine", "A medicine made from killed or weakened particles that helps the body prevent a disease.", 14],
    ["Fission", "Splitting in two. It is how most bacteria make more of themselves.", 24],
    ["Anaerobe", "A living thing that can live without oxygen.", 25],
    ["Pathogen", "Any living thing that causes disease.", 32],
    ["Antibiotic", "A substance made by one living thing that stops or kills another.", 33]
  ],

  findsAt: 43,
  questions: [
    { q: "What is a virus made of?",
      find: [7],
      hint: "Go back to Viruses: Alive, or Not?",
      choices: [
        "A nucleus, cytoplasm and a cell wall",
        "A core of nucleic acid inside a protein coat",
        "A shell of silica",
        "A single circular chromosome and ribosomes"
      ], right: 1 },

    { q: "A cold virus attaches to a cell and then injects its nucleic acid. Which step comes next?",
      find: [12],
      hint: "Go back to Viruses: Alive, or Not?, The Active Way.",
      choices: [
        "Release, when the cell bursts",
        "Attach, again",
        "Pasteurization",
        "Copy, when the cell builds new viruses"
      ], right: 3 },

    { q: "A virus joins the cell's own DNA and waits for something to wake it up. What is it doing?",
      find: [8],
      hint: "Go back to Viruses: Alive, or Not?, The Latent Way.",
      choices: [
        "Hiding, which is called latent",
        "Releasing new viruses",
        "Making a toxin",
        "Dividing by fission"
      ], right: 0 },

    { q: "What does a vaccine do?",
      find: [14],
      hint: "Go back to Viruses: Alive, or Not?, Stopping a Virus With a Vaccine.",
      choices: [
        "It cures a disease that has already begun.",
        "It helps the body get ready before the disease starts.",
        "It kills all the bacteria in food.",
        "It makes a person's cells divide."
      ], right: 1 },

    { q: "Why do people with HIV get sick from other illnesses?",
      find: [16],
      hint: "Go back to What It Costs to Cure a Disease.",
      choices: [
        "The virus is made of those illnesses.",
        "They eat the wrong food.",
        "The virus switches off the immune system's guards.",
        "The other illnesses are caused by hugging."
      ], right: 2 },

    { q: "Why does a new medicine take years of testing?",
      find: [17],
      hint: "Go back to What It Costs to Cure a Disease, From Idea to Pharmacy.",
      choices: [
        "Because the FDA is closed most of the year.",
        "Because medicines must be old before they can be sold.",
        "Because it must be shown to be safe and shown to work.",
        "Because only one person can take it at a time."
      ], right: 2 },

    { q: "A serving of yogurt has 40,000 bacteria in a drop, 20 drops in a milliliter and 200 milliliters. How many bacteria are in the serving?",
      find: [29],
      hint: "Go back to Bacteria, the Kingdom Monera, and use the yogurt walk in this review. Multiply two numbers at a time.",
      choices: [
        "800,000",
        "16,000,000",
        "160,000,000",
        "1,600,000,000"
      ], right: 2 },

    { q: "In a pond bloom, why do the fish die?",
      find: [26],
      hint: "Go back to Bacteria, the Kingdom Monera, A Pond Bloom.",
      choices: [
        "The cyanobacteria poison them.",
        "The dead cyanobacteria are eaten by bacteria that use up the oxygen.",
        "The pond gets too cold.",
        "The fish run out of nutrients."
      ], right: 1 },

    { q: "Why would a doctor not give you an antibiotic for a cold?",
      find: [37],
      hint: "Go back to The Bacteria You Live With Every Day, How We Fight Back.",
      choices: [
        "Because antibiotics work on bacteria, and a cold is caused by a virus.",
        "Because antibiotics only work on fungi.",
        "Because a cold is not a disease.",
        "Because antibiotics are only for animals."
      ], right: 0 },

    { q: "Why is botulism linked with canned food?",
      find: [34],
      hint: "Go back to The Bacteria You Live With Every Day, Why Botulism Goes With Cans.",
      choices: [
        "Because the can is made of metal.",
        "Because the bacteria are aerobes.",
        "Because the endospores survive canning and a sealed can has no oxygen, which suits an anaerobe.",
        "Because fresh food is always cooked."
      ], right: 2 }
  ],

  vocabQuestions: [
    { q: "What is a <i>virus</i>?",
      choices: [
        "A tiny particle with a core of nucleic acid inside a protein coat.",
        "A one-celled animal.",
        "A kind of plant.",
        "A kind of medicine."
      ], right: 0 },
    { q: "What is a <i>vaccine</i>?",
      choices: [
        "A fresh virus.",
        "A medicine made from killed or weakened particles that helps the body prevent a disease.",
        "A bandage.",
        "A kind of cell."
      ], right: 1 },
    { q: "What is <i>fission</i>?",
      choices: [
        "Eating dead things.",
        "Making food from sunlight.",
        "Splitting in two, the way most bacteria make more of themselves.",
        "Moving with a tail."
      ], right: 2 },
    { q: "What is an <i>anaerobe</i>?",
      choices: [
        "A living thing that needs oxygen.",
        "A living thing with a nucleus.",
        "A kind of virus.",
        "A living thing that can live without oxygen."
      ], right: 3 },
    { q: "What is a <i>pathogen</i>?",
      choices: [
        "Any living thing that causes disease.",
        "A kind of food.",
        "A tool for canning.",
        "A kind of root."
      ], right: 0 },
    { q: "What is an <i>antibiotic</i>?",
      choices: [
        "A food that has gone bad.",
        "A kind of virus.",
        "A heated can.",
        "A substance made by one living thing that stops or kills another."
      ], right: 3 }
  ]
};
