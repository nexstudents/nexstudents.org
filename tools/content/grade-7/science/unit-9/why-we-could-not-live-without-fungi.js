/* science/why-we-could-not-live-without-fungi
   Grade 7 · science · unit 9 (book unit 9, "Protists and Fungi"), lesson 3.
   Its home is this folder. Built by tools/lessons.js. Edit the lesson here, not in
   the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-11-22. Written on Sonnet from Merrill Life Science
   (1994) printed pp216-217, "9-3 Science and Society: Fungus, Can't Live Without It",
   via the week 12 packet (paraphrased notes). Paul has not read it. Book order kept:
   life before antibiotics, what an antibiotic is and where it comes from (penicillin),
   the problem of bacteria that stop responding, the first antiviral, the anti-rejection
   drug for transplants, then the book's closing argument that preventing a disease can
   beat curing it. Word cards: 6 (Antibiotic, Penicillin, Antiviral, Resistant,
   Transplant, Rejection).

   🚨 ORIGINS RULE. The packet found no evolution or long-age statement on pp216-217.
   The book says bacteria "develop new strains" the drugs don't affect. This lesson says
   only that bacteria CHANGE and the drug STOPS RESPONDING, and gives no reason or
   mechanism. Nothing here touches age or ancestry.

   ⚠️ ADDED FROM THE RECORD, worth a glance from Paul:
   · A plain picture of an organ transplant (a healthy kidney from a donor put in a
     person whose own kidney has failed) and of rejection (the immune system, the body's
     guards, attacking the new organ as if it were a germ). The book assumes both.
   · A short recap of bacteria, viruses and imperfect fungi, from lessons 8-1, 8-3 and 9-2.
   · The four-step walk for how an antibiotic works and the five-step walk for a transplant
     are made up for practice. Their facts are the book's.
   ⚠️ NOT IN THIS LESSON: Activity 9-2 (designing an experiment on growing conditions
   for fungi, p218), the drug names streptomycin, tetracycline and erythromycin (one
   line says there are others), and the word encephalitis beyond a plain description.

   🚨 THE VERSE IS A WORKING CHOICE, NOT PAUL'S. Psalm 103:2-3, who healeth all thy
   diseases. Choosing the scripture is his, so it goes in the review queue.
   ⚠️ The two videos passed oEmbed but nobody watched them. Preview both for any talk
   of evolution or millions of years before a student sees them. */
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

const CURE = [
  ["Step", "What happens"],
  ["1", "Bacteria get into the body and start to multiply"],
  ["2", "The doctor gives an antibiotic made from a fungus"],
  ["3", "The antibiotic stops the bacteria from reproducing and growing"],
  ["4", "The infection is cured"],
];
const GRAFT = [
  ["Step", "What happens"],
  ["1", "A person's kidney stops working"],
  ["2", "Doctors put in a healthy kidney from a donor"],
  ["3", "The immune system may attack it, which is rejection"],
  ["4", "The patient takes cyclosporine, made from a fungus"],
  ["5", "The new kidney is kept, and the patient lives"],
];

module.exports = {
  id: "science/why-we-could-not-live-without-fungi",
  slug: "why-we-could-not-live-without-fungi",
  title: "Why We Could Not Live Without Fungi",
  unit: "Life Science &middot; U9-L3",
  seq: { unit: 9, unitTitle: "Protists and Fungi", n: 3 },
  natural: "2026-11-22",

  /* ── /teach-plan, 2026-11-22. Merrill Life Science pp216-217. ── */
  plan: {
    objective: "Name the kinds of medicine made from fungi (antibiotics, the first antiviral, an anti-rejection drug) and explain why fungi matter to medicine.",
    markers: [
      "BOOK, objectives: State two types of drugs produced from fungi. Appreciate the role of fungi in medicine.",
      "BOOK, section questions p.217: state two types of drugs that are products of fungi; why have fungi become so important to medicine; Connect to Earth Science: find out where most fungi that produce antibiotics are usually found (soil).",
    ],
    method: "A SCIENCE-AND-SOCIETY READING: PROBLEM (A DEADLY BACTERIAL DISEASE) -> A FUNGUS-MADE ANSWER -> THE LIMITS (ALLERGY, BACTERIA THAT STOP RESPONDING, COST AND SIDE EFFECTS) -> PREVENTION VERSUS CURE.",
    exampleOnly: [
      "The moldy orange, and the specific drug names beyond penicillin, are detail.",
    ],
    digitize: "Standard reading lesson with find-in-text questions and two short Watch It Worked walks (how an antibiotic cures an infection, and a transplant patient with cyclosporine). Use change and stop responding for resistance, no evolution framing (origins rule).",
    unclear: "",
  },

  sheet: { slug: "why-we-could-not-live-without-fungi-homework", subject: "science",
    note: "Do it on screen or print it. Your score shows here once you check it." },

  shelf: { grades: [7], subject: "Science",
    blurb: "Before the 1940s a bad bacterial infection could kill you. A mold on an orange changed that, and fungi have been making medicine ever since. What they make, what goes wrong, and why some say preventing a disease beats curing it.",
    contains: [
      "What life was like before antibiotics",
      "What an antibiotic is, and why penicillin comes from a mold",
      "Why a medicine can stop working on bacteria",
      "The first drug against a virus, and the drug that helps transplants",
      "Prevent or cure, an argument with two real sides",
      "Six word cards, each with a check question",
    ] },
  eyebrow: ["Life Science", "U9-L3", "Protists and Fungi"],
  dek: "Mold on an orange led to the medicine that cures pneumonia. Here's what fungi make for us, and where the medicines run into trouble.",

  scripture: {
    ref: "Psalm 103:2-3",
    text: "Bless the LORD, O my soul, and forget not all his benefits: Who forgiveth all thine iniquities; who healeth all thy diseases;",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Your student names the kinds of medicine made from fungi, which are antibiotics, the first antiviral drug and a drug that helps transplants, and explains why fungi matter so much to medicine."
      ]},
      { h: "Key Concepts", p: [
        "An antibiotic is a chemical that harms bacteria, and many come from fungi that grow in the soil. Penicillin, from the mold Penicillium, is the most famous.",
        "A medicine can stop working. Bacteria can change so that a drug no longer affects them, which is why scientists keep making new antibiotics.",
        "The book ends with an argument that has two real sides: it may be better to prevent a disease than to cure it."
      ]},
      { h: "Where Students Get Stuck", p: [
        "Thinking an antibiotic works on a cold or the flu. Those are caused by viruses, and antibiotics work on bacteria.",
        "Thinking resistant means the person is resistant. It is the bacteria that stop responding to the drug.",
        "Mixing up the two big words for the immune system's job. Rejection is the body attacking a new organ, and the drug cyclosporine holds that back."
      ]},
      { h: "Added From the Record", p: [
        "The book does not say what a transplant is or what rejection looks like. The lesson adds a plain picture of each, and a short recap of bacteria, viruses and imperfect fungi from earlier lessons. The book's drug names streptomycin, tetracycline and erythromycin are left out, and so is Activity 9-2."
      ]},
      { h: "Book Pages", p: [
        "Merrill Life Science (1994), pages 216 and 217. Read free on archive.org: https://archive.org/details/merrilllifescien0000dani/page/241/mode/2up"
      ]},
      { h: "Suggested Videos", videos: [
        { id: "SHQEXn_E-bw", title: "The Discovery of Penicillin and How It Changed Medicine Forever! Science for young learners.", channel: "Ignite",
          why: "The penicillin story told for kids. Preview it first, since it was not watched." },
        { id: "JRl7iJqFGiw", title: "Penicillin | Microorganisms | Biology | FuseSchool", channel: "FuseSchool",
          why: "A second explanation of what penicillin does. Preview it first for any talk of evolution." },
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  video: { id: "SHQEXn_E-bw", title: "The Discovery of Penicillin and How It Changed Medicine Forever! Science for young learners.", channel: "Ignite",
    why: "The penicillin story for kids, which is where the lesson starts." },

  parts: [
    { title: "Before the Medicine", s: [
      "Before the 1940s, a person who caught pneumonia or tuberculosis could very easily die of it.",
      "Both diseases are caused by bacteria, the tiny one-celled living things from Unit 8, and doctors had very few ways to stop them.",
      "Today most bacterial infections can be cured, and the book says a fungus has probably saved your life.",
      "So where did the cure come from, and why would a fungus be the one to make it?"
    ]},

    { title: "Medicine From a Mold", s: [
      "An {{antibiotic}} is a chemical that harms bacteria, and many of them are made from fungi that grow in the soil.",
      "You already know why a fungus would make a chemical like that, because last lesson you saw that fungi live by breaking down whatever is around them.",
      "The most famous one is {{penicillin}}, which comes from a fungus called Penicillium that grows easily on a moldy orange.",
      "Last lesson that fungus was your example of an imperfect fungus, and now you know why it matters.",
      "",
      "[walk] Follow an antibiotic through an infection.",
      "[step] Bacteria get into the body and start to multiply. || " + table(CURE.slice(0, 2)),
      "[step] The doctor gives an antibiotic made from a fungus. || " + table(CURE.slice(0, 3)),
      "[step] The antibiotic stops the bacteria from reproducing and growing. || " + table(CURE.slice(0, 4)),
      "[step] The infection is cured, which is true for most bacterial infections. || " + table(CURE),
      "",
      "An antibiotic only works on bacteria, so it does nothing against a virus like a cold.",
      "A few people can't take certain antibiotics at all, because the drug gives them an allergic reaction."
    ]},

    { title: "When a Medicine Stops Working", s: [
      "Here's the part that surprised the scientists, because a cure that works can quit working.",
      "Bacteria can change so that an antibiotic no longer affects them, and doctors say those bacteria have become {{resistant}}.",
      "Penicillin once worked on a great many kinds of bacteria, and now it has no effect on most of them.",
      "The same thing has happened to other antibiotics, so scientists keep working to make new ones.",
      "That is one reason a doctor will not hand out an antibiotic for every sniffle."
    ]},

    { title: "The First Medicine for a Virus", s: [
      "Think back to the virus, which isn't a cell and has to take over a host cell to make more of itself.",
      "A medicine for a virus is called an {{antiviral}} drug, and it was much harder to make than an antibiotic.",
      "A virus has very few parts of its own for a drug to attack, and the early antiviral drugs often hurt the patient too.",
      "One virus disease the book names is encephalitis, which is swelling of the brain, the spinal cord and the nerves that lead from them, and it is carried by mosquitoes and can kill.",
      "In 1978 a drug called vidarabine was approved for it, and it was the very first antiviral drug, made from a species of fungus."
    ]},

    { title: "A New Kidney and a New Problem", s: [
      "In a {{transplant}}, doctors take a healthy organ such as a kidney from one person and put it into a sick person whose own organ has failed.",
      "That can save a life, but the body has guards, the immune system, and its job is to attack anything that doesn't belong.",
      "A brand new organ doesn't belong, as far as the guards can tell, and when they attack it that is called {{rejection}}.",
      "In 1983 a drug called cyclosporine was approved to help prevent it, and it is made from an imperfect fungus, so transplants became much more common.",
      "",
      "[walk] Follow one patient through a transplant.",
      "[step] A person's kidney stops working. || " + table(GRAFT.slice(0, 2)),
      "[step] Doctors put in a healthy kidney from a donor. || " + table(GRAFT.slice(0, 3)),
      "[step] The immune system may attack the new kidney, which is rejection. || " + table(GRAFT.slice(0, 4)),
      "[step] The patient takes cyclosporine, which holds back the rejection. || " + table(GRAFT.slice(0, 5)),
      "[step] The new kidney is kept, and the patient lives. || " + table(GRAFT),
      "",
      "But cyclosporine has a price, because a patient has to take it for life, it is expensive, and it can cause side effects such as kidney failure.",
      "It also holds back the immune system, which is why a person who takes it can catch infections more easily."
    ]},

    { title: "Cure It or Prevent It?", s: [
      "Making these medicines cost a huge amount of research, and that made some people ask a hard question.",
      "They said it might be better to put the effort into preventing diseases than into curing them.",
      "Take encephalitis, which mosquitoes carry, and imagine controlling the mosquitoes so that fewer people ever get sick.",
      "The book's answer is that society has to work with science, and both of those ideas are real, since a cure helps the person who is already sick and prevention keeps the next person from getting sick at all.",
      "",
      "[verse] Psalm 103:2-3 says, “Bless the LORD, O my soul, and forget not all his benefits: Who forgiveth all thine iniquities; who healeth all thy diseases;”",
      "",
      "The verse is about thanking God for healing, and a mold growing in the soil is one of the places that healing has come from.",
      "The questions below check what you've learned."
    ]}
  ],

  todo: { title: "What To Do Now", s: [
      "Mold on an orange, a medicine that quits working and a patient with a new kidney, and now it's your turn to say why fungi matter to medicine.",
      "Start with the questions, {Q} of them, and then the vocabulary check at the bottom, {v} questions on the word cards at the top of the page.",
      "When a question asks about a medicine, ask yourself first what it works on, bacteria, a virus or the body's own guards.",
      "Then, in your notebook, write the names of two kinds of medicine that come from fungi, and one sentence about what each one does.",
      "Next, write two sentences that answer this question from the book: why have fungi become so important to medicine?",
      "Last, write one sentence that says where most of the fungi that make antibiotics are found."
  ] },

  words: [
    ["Antibiotic", "A chemical that harms bacteria. Many are made from fungi that grow in the soil.", 4],
    ["Penicillin", "The most famous antibiotic, made from the fungus Penicillium.", 6],
    ["Resistant", "Describes bacteria that have changed so that a medicine no longer affects them.", 16],
    ["Antiviral", "A medicine that treats an infection caused by a virus.", 21],
    ["Transplant", "An operation that puts a healthy organ from one person into another person.", 25],
    ["Rejection", "When the body's immune system attacks a transplanted organ.", 27],
  ],

  findsAt: 44,
  questions: [
    { q: "What did an antibiotic do for a person with pneumonia?",
      find: [2],
      hint: "Read Before the Medicine.",
      choices: [
        "It stopped the bacteria from reproducing and growing, so the infection could be cured.",
        "It made the person's cells divide faster.",
        "It turned the bacteria into fungi.",
        "It only made the person sleepy."
      ], right: 0 },

    { q: "What is an antibiotic?",
      find: [4],
      hint: "Read Medicine From a Mold.",
      choices: [
        "A tiny particle with a core of nucleic acid",
        "A chemical that harms bacteria",
        "A kind of plant that grows in soil",
        "A fungus that eats dead leaves"
      ], right: 1 },

    { q: "Where do many of the fungi that make antibiotics grow?",
      find: [4],
      hint: "Read Medicine From a Mold.",
      choices: [
        "In the ocean",
        "On the skin of animals",
        "In the soil",
        "In the air"
      ], right: 2 },

    { q: "Which fungus makes penicillin?",
      find: [6],
      hint: "Read Medicine From a Mold.",
      choices: [
        "Bread mold",
        "Yeast",
        "A mushroom",
        "Penicillium"
      ], right: 3 },

    { q: "Why would an antibiotic not help a person who has a cold?",
      find: [13],
      hint: "Read Medicine From a Mold.",
      choices: [
        "A cold is caused by a virus, and an antibiotic works only on bacteria.",
        "A cold is caused by a fungus.",
        "A cold is too small to treat.",
        "Antibiotics are only for animals."
      ], right: 0 },

    { q: "A doctor says some bacteria have become resistant to penicillin. What does that mean?",
      find: [16],
      hint: "Read When a Medicine Stops Working.",
      choices: [
        "The person has stopped taking the drug.",
        "The bacteria have changed so the drug no longer affects them.",
        "The drug has turned into a virus.",
        "The bacteria have turned into fungi."
      ], right: 1 },

    { q: "Why do scientists keep working on new antibiotics?",
      find: [18],
      hint: "Read When a Medicine Stops Working.",
      choices: [
        "Because the old ones are too cheap.",
        "Because the old ones taste bad.",
        "Because bacteria can change so that an old antibiotic stops working on them.",
        "Because fungi have stopped making them."
      ], right: 2 },

    { q: "What was special about vidarabine, approved in 1978?",
      find: [24],
      hint: "Read The First Medicine for a Virus.",
      choices: [
        "It was the first drug for a transplant patient.",
        "It was the first antibiotic.",
        "It was made from a mosquito.",
        "It was the very first antiviral drug, and it was made from a fungus."
      ], right: 3 },

    { q: "What does cyclosporine help prevent?",
      find: [28],
      hint: "Read A New Kidney and a New Problem.",
      choices: [
        "The body's immune system rejecting a transplanted organ",
        "A cold",
        "A mosquito bite",
        "Pneumonia"
      ], right: 0 },

    { q: "Which of these is a problem with cyclosporine?",
      find: [35],
      hint: "Read A New Kidney and a New Problem.",
      choices: [
        "It only works on bacteria.",
        "A patient has to take it for life, and it is expensive and can cause side effects.",
        "It is made from a mosquito.",
        "It can only be used one time."
      ], right: 1 },

    { q: "Some people say preventing a disease may be better than curing it. What example does the lesson use?",
      find: [39],
      hint: "Read Cure It or Prevent It?",
      choices: [
        "Cleaning every orange",
        "Making more yeast",
        "Controlling the mosquitoes that carry encephalitis",
        "Growing more mushrooms"
      ], right: 2 }
  ],

  vocabQuestions: [
    { q: "What is an <i>antibiotic</i>?",
      choices: [
        "A chemical that harms bacteria.",
        "A kind of virus.",
        "A kind of spore.",
        "A part of a fungus."
      ], right: 0 },
    { q: "What is <i>penicillin</i>?",
      choices: [
        "A kind of bacteria.",
        "The most famous antibiotic, made from the fungus Penicillium.",
        "A drug for transplants.",
        "A fungus that grows on bread."
      ], right: 1 },
    { q: "What does <i>resistant</i> mean when a doctor says bacteria are resistant to a drug?",
      choices: [
        "The bacteria are asleep.",
        "The drug is too strong.",
        "The bacteria have changed so the drug no longer affects them.",
        "The bacteria have been cured."
      ], right: 2 },
    { q: "What is an <i>antiviral</i> drug?",
      choices: [
        "A drug for a broken bone.",
        "A drug that kills fungi.",
        "A drug made from bacteria.",
        "A medicine that treats an infection caused by a virus."
      ], right: 3 },
    { q: "What is a <i>transplant</i>?",
      choices: [
        "An operation that puts a healthy organ from one person into another person.",
        "A plant moved to a new pot.",
        "A kind of medicine.",
        "A kind of bacteria."
      ], right: 0 },
    { q: "What is <i>rejection</i>?",
      choices: [
        "When a drug is turned down by a doctor.",
        "When the body's immune system attacks a transplanted organ.",
        "When a patient is too tired to take a pill.",
        "When a fungus dies."
      ], right: 1 }
  ]
};
