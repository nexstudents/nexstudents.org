/* science/the-bacteria-you-live-with
   Grade 7 · science · unit 8 (book unit 8, "Viruses and Monerans", shelved as
   "The Smallest Living Things"), lesson 4. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-11-07. Written on Sonnet from Merrill Life
   Science (1994) printed pp193-196, "Monerans in Your Life", via the week 10-11
   packet (paraphrased notes). Paul has not read it. Book order kept: helpful
   monerans (food, saprophytes, nitrogen fixers, the Technology box on bioremediation),
   then harmful ones (pathogens, antibiotics, toxins, endospores, pasteurization).
   Word cards: 6, the book's own (Saprophyte, Nitrogen-Fixing Bacteria, Pathogen,
   Antibiotic, Toxin, Endospore). Bioremediation and pasteurization are explained
   in plain words in the reading without a card.

   🚨 ORIGINS RULE. The packet saw no long-age or evolution statement in 8-4.

   ⚠️ ADDED FROM THE RECORD, worth a glance from Paul:
   · "Antibiotics work on bacteria, not on viruses." Standard, and it ties to lesson
     8-1; the packet gives only the definition and penicillin stopping cell walls.
   · One safety line: throw away a can that bulges or leaks. Standard food-safety
     advice, not in the packet.
   · That fresh food has air around it, which is why the botulism bacteria do not
     grow in it. The packet says they are anaerobes and grow in cans.
   · The picture of nitrogen as something plants need but cannot take from the air
     themselves, in plain words.
   ⚠️ NOT IN THIS LESSON: the Skill Builder on bacteria per cubic meter, the Connect
   to Chemistry question on taking penicillin ten days, and Activity 8-2 on culturing
   bacteria, which is its own row in the unit. The yogurt MiniLab is one "try it at
   home with a parent" line, as the plan asked.

   🚨 THE VERSE IS A WORKING CHOICE, NOT PAUL'S. Psalm 145:9, the LORD is good to all
   and his mercies are over all his works. Choosing the scripture is his, so it goes
   in the review queue. */
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

const HELPFUL = [
  ["Bacteria", "What they do for you"],
  ["In milk", "Turn it into cheese and yogurt"],
  ["In cabbage", "Turn it into sauerkraut"],
  ["Vinegar maker", "A bacterium makes vinegar"],
  ["On dead things", "Break them down and recycle the nutrients"],
  ["In root nodules", "Feed plants with nitrogen from the air"],
  ["At a spill", "Eat oil and other pollution"],
];
const BOTULISM = [
  ["Step", "What happens in the can"],
  ["1", "Endospores survive the heat of canning"],
  ["2", "The sealed can has no oxygen, which suits an anaerobe"],
  ["3", "The endospores turn back into cells and grow"],
  ["4", "The cells make a toxin that can cause paralysis"],
];

module.exports = {
  id: "science/the-bacteria-you-live-with",
  slug: "the-bacteria-you-live-with",
  title: "The Bacteria You Live With Every Day",
  unit: "Life Science &middot; U8-L4",
  seq: { unit: 8, unitTitle: "The Smallest Living Things", n: 4 },
  natural: "2026-11-07",

  /* ── /teach-plan, 2026-11-07. Merrill Life Science pp193-196. ── */
  plan: {
    objective: "Give ways bacteria help (food, saprophytes that recycle, nitrogen fixing in root nodules, cleanup) and harm (pathogens, toxins, endospores and botulism), and explain how antibiotics and pasteurization fight harmful bacteria.",
    markers: [
      "BOOK (paraphrased), Objectives: identify some ways bacteria are helpful, explain the importance of nitrogen-fixing bacteria, and explain how some monerans cause disease.",
      "BOOK (paraphrased): cheese and yogurt come from bacteria breaking down substances in milk; sauerkraut is cabbage with a bacterial culture; a bacterium makes vinegar. Bacteria helped clean up oil spills in Alaska, California and Texas.",
      "BOOK (paraphrased): a saprophyte uses dead material for food and energy and recycles nutrients; without them, layers of dead material deeper than you are tall would cover the Earth.",
      "BOOK (paraphrased): the roots of plants like peas and peanuts hold nitrogen-fixing bacteria in growths called nodules; they change nitrogen from the air into forms plants and animals can use, saving U.S. farmers millions of dollars a year in fertilizer.",
      "BOOK (paraphrased), Technology: bioremediation uses living things to break down pollutants. Resistant bacteria are brought to a toxic site, multiply, eat the pollutant over several years, then die off when the food is gone.",
      "BOOK (paraphrased): a pathogen is any organism that produces disease (strep throat; anthrax in cattle; diphtheria, tetanus and whooping cough in people). An antibiotic is a substance made by one organism that stops or kills another; penicillin keeps bacteria from making cell walls. Toxins are poisons some pathogens make.",
      "BOOK (paraphrased): endospores are thick-walled, heat- and drying-resistant structures. Botulism endospores survive in canned food, change back to cells and make the toxin. The bacteria are anaerobes, so they grow in cans, and the toxin is destroyed by heat. Pasteurization heats food, like milk, to kill harmful bacteria, named for Louis Pasteur in 19th-century France.",
      "BOOK (paraphrased), Section Review Apply: why is botulism associated with canned foods and not fresh foods?",
    ],
    method: "GOOD FIRST, THEN BAD, THEN HOW WE FIGHT. One table of helpers (food, cleanup, plant feeders, spill cleanup) built a row at a time, then the pathogens, then antibiotics and pasteurization as the two defenses. The one process the student must own is the botulism chain: an anaerobe, an endospore and a sealed can, walked a step at a time, which answers the book's own review question.",
    exampleOnly: [
      "The cheese, the sauerkraut and the oil spills are the book's own examples, kept.",
      "⚠️ The note that antibiotics don't work on viruses, the safety line about bulging cans and the fresh-food explanation are added from the record, see the header.",
    ],
    digitize: "The reading engine plus two Watch It Worked walkthroughs: a table of the helpers built a row at a time, and the botulism chain in four steps. Questions ask for the helpers, the words, how penicillin and pasteurization work, and why botulism goes with cans.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Science",
    blurb: "Bacteria make your yogurt, feed the peas in the garden and clean up oil spills, and a few can make you very sick. Which is which, and why botulism goes with a sealed can.",
    contains: [
      "The bacteria in your food",
      "Nature's cleanup crew, and bacteria that feed plants",
      "Bacteria that eat pollution",
      "Pathogens and toxins",
      "How antibiotics and pasteurization fight harmful bacteria",
      "Why botulism goes with a sealed can and not fresh food",
    ] },
  eyebrow: ["Life Science", "U8-L4", "The Smallest Living Things"],
  dek: "You've eaten bacteria today, and you're glad they're there. A few kinds are dangerous, so here's how to tell the helpers from the harmful ones.",

  scripture: {
    ref: "Psalm 145:9",
    text: "The LORD is good to all: and his tender mercies are over all his works.",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Your student gives ways bacteria help and harm, explains the importance of nitrogen-fixing bacteria, and explains how antibiotics and pasteurization fight harmful bacteria."
      ]},
      { h: "Key Concepts", p: [
        "Most bacteria help, and only a few make people sick. The helpers recycle dead material, feed plants and make food, and the harmful ones are called pathogens.",
        "Botulism is the lesson's one chain to own. The bacteria are anaerobes, their endospores survive the heat of canning, and a sealed can has no oxygen, so they grow there and make a toxin."
      ]},
      { h: "Where Students Get Stuck", p: [
        "Thinking an antibiotic works on every germ. It works on bacteria, and not on viruses, which is why a doctor does not give one for a cold.",
        "Mixing up an endospore and a toxin. An endospore is a tough shell that lets the bacterium survive, and a toxin is the poison it makes."
      ]},
      { h: "Added From the Record", p: [
        "That antibiotics do not work on viruses, a safety line about throwing away a bulging or leaking can, and why fresh food does not grow botulism bacteria are added from the record. The yogurt activity is one line to try at home with a parent, because it uses hot milk."
      ]},
      { h: "Book Pages", p: [
        "Merrill Life Science (1994), pages 193 to 196. Read free on archive.org: https://archive.org/details/merrilllifescien0000dani/page/218/mode/2up"
      ]},
      { h: "Suggested Videos", videos: [
        { id: "XIdMeDOy8AY", title: "Bacteria and Viruses for Kids | Learn about these two kinds of microorganisms", channel: "Learn Bright",
          why: "A simple kid-level look at good bacteria, harmful bacteria and how people protect themselves." },
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Bacteria for Lunch", s: [
      "If you've eaten cheese or yogurt today, you've eaten the work of bacteria.",
      "They break down certain substances in milk and turn it into cheese and yogurt, and other bacteria turn cabbage into sauerkraut and make vinegar.",
      "Companies even use them to make medicines and cleaners, so most of the bacteria in your life are helpers."
    ]},

    { title: "Nature's Cleanup Crew", s: [
      "A {{saprophyte}} is any living thing that gets its food and energy from dead material, and many bacteria and fungi are saprophytes.",
      "They digest dead plants and animals and put the nutrients back into the soil, where living plants can use them again.",
      "The book says that without them, layers of dead material deeper than you are tall would cover the earth."
    ]},

    { title: "Bacteria That Feed Plants", s: [
      "Plants need nitrogen to grow, and the air is full of it, but a plant can't take nitrogen out of the air by itself.",
      "Some bacteria can, and they live in small lumps called nodules on the roots of plants like peas and peanuts.",
      "These {{nitrogen-fixing bacteria}} change the nitrogen in the air into a form the plant can use, and then animals get it when they eat the plant.",
      "That saves farmers in the United States millions of dollars a year in fertilizer."
    ]},

    { title: "Bacteria That Clean Up", s: [
      "People have found a new job for bacteria, which is eating pollution.",
      "The word for it is bioremediation, and it means using living things to break down pollutants.",
      "A crew brings in a large number of bacteria that can survive the poison, they multiply and eat the pollution over several years, and then they die off when the food is gone.",
      "Bacteria have helped clean up oil spills in Alaska, California and Texas.",
      "",
      "[walk] Fill in the table of helpers.",
      "[step] Bacteria in milk and cabbage make cheese, yogurt and sauerkraut, and one makes vinegar. || " + table(HELPFUL.slice(0, 4)),
      "[step] Saprophytes break down dead things and recycle the nutrients. || " + table(HELPFUL.slice(0, 5)),
      "[step] Nitrogen fixers in root nodules feed plants. || " + table(HELPFUL.slice(0, 6)),
      "[step] And cleanup bacteria eat oil and other pollution at a spill. || " + table(HELPFUL)
    ]},

    { title: "When Bacteria Make You Sick", s: [
      "A few bacteria cause disease, and any living thing that causes disease is called a {{pathogen}}.",
      "Strep throat is caused by a pathogen, and so are diphtheria, tetanus and whooping cough in people, and anthrax in cattle.",
      "Some pathogens make {{toxins}}, which are poisons, and the toxin is what makes the person sick."
    ]},

    { title: "How We Fight Back", s: [
      "An {{antibiotic}} is a substance made by one living thing that stops or kills another, and penicillin is the famous one.",
      "Penicillin works by keeping bacteria from building their cell walls, so they can't hold together.",
      "Antibiotics work on bacteria, not on viruses, which is why a doctor will not give you one for a cold.",
      "Another defense is pasteurization, which means heating a food, like milk or juice, to a temperature that kills the harmful bacteria.",
      "It's named for Louis Pasteur, a Frenchman who worked it out in the 1800s to protect wine."
    ]},

    { title: "Why Botulism Goes With Cans", s: [
      "One of the worst food poisonings is botulism, which can cause paralysis and death, and it is almost always linked to canned food and not to fresh food.",
      "The reason has to do with two things you've learned, which are anaerobes and a tough shell called an {{endospore}}.",
      "An endospore is a thick-walled shell that a bacterium makes around itself, and it survives heat and drying.",
      "",
      "[walk] Follow the botulism bacteria into a can.",
      "[step] First the endospores survive the heat of canning, because they are tough. || " + table(BOTULISM.slice(0, 2)),
      "[step] The sealed can has no oxygen, and the botulism bacteria are anaerobes, so a can suits them. || " + table(BOTULISM.slice(0, 3)),
      "[step] The endospores change back into regular cells and start to grow. || " + table(BOTULISM.slice(0, 4)),
      "[step] The cells make a toxin, and the toxin is the dangerous part. || " + table(BOTULISM),
      "",
      "Fresh food sits out in the open air, where the botulism bacteria don't grow well, and heat destroys the toxin.",
      "A can that bulges or leaks should be thrown away and never tasted."
    ]},

    { title: "Try It At Home", s: [
      "You can watch bacteria work by making yogurt at home with a parent, because the milk has to be heated almost to boiling and cooled again, and that part is for a grown-up.",
      "Add a spoonful of yogurt that has live bacteria, keep it warm for about six hours and put it in the refrigerator.",
      "",
      "[verse] Psalm 145:9 says, “The LORD is good to all: and his tender mercies are over all his works.”",
      "",
      "The verse is about everything God made, including the bacteria that make yogurt and the ones that cause sickness.",
      "The questions below check what you've learned."
    ]}
  ],

  todo: { title: "What To Do Now", s: [
      "Bacteria in your food, in the soil and sometimes in a sealed can, and now it's your turn to tell the helpers from the harmful ones.",
      "Start with the questions, {Q} of them, and then the vocabulary check at the bottom, {v} questions on the word cards at the top of the page.",
      "When a question asks why something happens, go back to the walk and say the steps in order before you pick an answer.",
      "Then, in your notebook, make a two-column list headed Helpful and Harmful, and put at least four things from the lesson in each column.",
      "Next, write the four steps of the botulism chain in order, in complete sentences.",
      "Last, write two sentences that explain why a doctor would not give you an antibiotic for a cold."
  ] },

  words: [
    ["Saprophyte", "A living thing that uses dead material for food and energy and recycles the nutrients.", 3],
    ["Nitrogen-fixing bacteria", "Bacteria in root nodules that change nitrogen from the air into a form plants can use.", 8],
    ["Pathogen", "Any living thing that causes disease.", 19],
    ["Toxin", "A poison made by some pathogens.", 21],
    ["Antibiotic", "A substance made by one living thing that stops or kills another. Penicillin is one.", 22],
    ["Endospore", "A thick-walled shell a bacterium makes around itself. It survives heat and drying.", 28]
  ],

  findsAt: 42,
  questions: [
    { q: "Which of these foods is made with the help of bacteria?",
      find: [0],
      hint: "Read Bacteria for Lunch.",
      choices: [
        "A fresh apple",
        "Yogurt",
        "Plain rice",
        "A raw carrot"
      ], right: 1 },

    { q: "What is a saprophyte?",
      find: [3],
      hint: "Read Nature's Cleanup Crew.",
      choices: [
        "A living thing that feeds on dead material and recycles the nutrients",
        "A living thing that makes food from sunlight",
        "A poison made by bacteria",
        "A shell that survives heat"
      ], right: 0 },

    { q: "Where do nitrogen-fixing bacteria live?",
      find: [7],
      hint: "Read Bacteria That Feed Plants.",
      choices: [
        "In milk",
        "In the air",
        "In nodules on the roots of plants like peas and peanuts",
        "In canned food"
      ], right: 2 },

    { q: "What do nitrogen-fixing bacteria do for a plant?",
      find: [8],
      hint: "Read Bacteria That Feed Plants.",
      choices: [
        "They give it sunlight.",
        "They keep it from growing.",
        "They give it water.",
        "They change nitrogen from the air into a form the plant can use."
      ], right: 3 },

    { q: "What happens to the bacteria used for bioremediation after they eat the pollution?",
      find: [12],
      hint: "Read Bacteria That Clean Up.",
      choices: [
        "They turn into oil.",
        "They die off when the food is gone.",
        "They become pathogens.",
        "They fly away."
      ], right: 1 },

    { q: "What is a pathogen?",
      find: [19],
      hint: "Read When Bacteria Make You Sick.",
      choices: [
        "Any living thing that causes disease",
        "A medicine",
        "A kind of food",
        "A nodule on a root"
      ], right: 0 },

    { q: "How does penicillin stop bacteria?",
      find: [23],
      hint: "Read How We Fight Back.",
      choices: [
        "It heats them until they pop.",
        "It feeds them too much.",
        "It keeps them from building their cell walls.",
        "It gives them a tail."
      ], right: 2 },

    { q: "What does pasteurization do?",
      find: [25],
      hint: "Read How We Fight Back.",
      choices: [
        "It adds bacteria to milk.",
        "It freezes food.",
        "It adds sugar.",
        "It heats food to a temperature that kills harmful bacteria."
      ], right: 3 },

    { q: "Why is botulism linked with canned food and not fresh food?",
      find: [32],
      hint: "Read Why Botulism Goes With Cans.",
      choices: [
        "Because cans are made of metal.",
        "Because the bacteria are anaerobes whose endospores survive canning, and a sealed can has no oxygen.",
        "Because fresh food has no bacteria.",
        "Because canned food is always old."
      ], right: 1 },

    { q: "What is an endospore?",
      find: [29],
      hint: "Read Why Botulism Goes With Cans.",
      choices: [
        "A thick-walled shell that survives heat and drying",
        "A poison the bacterium makes",
        "A tail",
        "A kind of antibiotic"
      ], right: 0 }
  ],

  vocabQuestions: [
    { q: "What is a <i>saprophyte</i>?",
      choices: [
        "A living thing that uses dead material for food and recycles the nutrients.",
        "A living thing that makes food from sunlight.",
        "A kind of poison.",
        "A kind of medicine."
      ], right: 0 },
    { q: "What are <i>nitrogen-fixing bacteria</i>?",
      choices: [
        "Bacteria that make cheese.",
        "Bacteria that cause botulism.",
        "Bacteria in root nodules that change nitrogen from the air into a form plants can use.",
        "Bacteria that live in hot springs."
      ], right: 2 },
    { q: "What is a <i>pathogen</i>?",
      choices: [
        "A kind of food.",
        "Any living thing that causes disease.",
        "A tool for canning.",
        "A kind of root."
      ], right: 1 },
    { q: "What is a <i>toxin</i>?",
      choices: [
        "A kind of shell.",
        "A medicine that cures disease.",
        "A poison made by some pathogens.",
        "A tiny tail."
      ], right: 2 },
    { q: "What is an <i>antibiotic</i>?",
      choices: [
        "A food that has gone bad.",
        "A substance made by one living thing that stops or kills another.",
        "A kind of virus.",
        "A heated can."
      ], right: 1 },
    { q: "What is an <i>endospore</i>?",
      choices: [
        "A poison.",
        "A kind of root.",
        "A kind of antibiotic.",
        "A thick-walled shell a bacterium makes around itself, which survives heat and drying."
      ], right: 3 }
  ]
};
