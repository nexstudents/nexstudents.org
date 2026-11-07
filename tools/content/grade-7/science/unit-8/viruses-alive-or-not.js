/* science/viruses-alive-or-not
   Grade 7 · science · unit 8 (book unit 8, "Viruses and Monerans", shelved as
   "The Smallest Living Things"), lesson 1. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-11-07. Written on Sonnet from Merrill Life
   Science (1994) printed pp182-185, "Viruses: Are They Alive?", via the week
   10-11 packet (paraphrased notes). Paul has not read it. Book order kept: what a
   virus is, the shapes, parasite and host cell, active (attach, invade, copy,
   release) as a walk, latent (the cold sore), viruses affect all organisms,
   vaccines and Jenner in 1796, interferon in one line, and the helpful use,
   gene therapy, with the virus as an ambulance. Word cards: 6 (Virus, Nucleic
   Acid, Parasite, Host Cell, Latent, Vaccine).

   🚨 ORIGINS RULE. Nothing on these pages touches origins (the packet saw no
   long-age or evolution statement on pp182-185), so there is no two-layer sort.

   ⚠️ ADDED FROM THE RECORD, worth a glance from Paul:
   · The book (1994) says no medicine cures a viral disease. That is dated, so the
     lesson says "when the book was written" and adds one line that some medicines
     against viruses have been made since, while a vaccine is still the best way to
     keep a virus from starting. Not in the packet.
   · How a vaccine works: the body meets the harmless piece and learns to fight it,
     so it is ready for the real one. The packet says only that a vaccine is made
     from killed or weakened particles that cannot cause disease.
   · Which shape goes with which virus (many-sided polio virus, rod-shaped tobacco
     mosaic virus, a tailed bacteriophage). The packet lists the four figures but not
     which is which.
   · Cowpox as a mild sickness and smallpox as a deadly one.
   · "Nucleic acid" described as the virus's instructions, and "a gene" described as
     one instruction in the DNA. Everyday pictures.
   ⚠️ NOT IN THIS LESSON: the MiniLab (Is your cat vaccinated?), the Connect to
   Physics box (porcelain filters), the Skill Builder on hypothesizing, and the
   Connect to Chemistry question on HIV and chicken pox. HIV is lesson 8-2.

   🚨 THE VERSE IS A WORKING CHOICE, NOT PAUL'S. Jeremiah 17:14, a prayer for
   healing. Choosing the scripture is his, so it goes in the review queue. */
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

const SHAPES = [
  ["Virus", "Its shape"],
  ["Polio virus", "Many-sided, like a 20-sided soccer ball"],
  ["Tobacco mosaic virus", "A rod"],
  ["Bacteriophage", "A many-sided head with a tail"],
];
const ACTIVE = [
  ["Step", "What the virus does"],
  ["1  Attach", "Sticks to the outside of one kind of cell"],
  ["2  Invade", "Injects its nucleic acid into the cell"],
  ["3  Copy", "Takes over, so the cell makes new viruses"],
  ["4  Release", "The cell bursts and hundreds of viruses escape"],
];
const JENNER = [
  ["Who", "What happened"],
  ["Milkmaids", "Caught cowpox, a mild sickness from cows"],
  ["Milkmaids", "Did not catch smallpox, a deadly one"],
  ["Jenner, 1796", "Made a vaccine from cowpox sores"],
];

module.exports = {
  id: "science/viruses-alive-or-not",
  slug: "viruses-alive-or-not",
  title: "Viruses: Alive, or Not?",
  unit: "Life Science &middot; U8-L1",
  seq: { unit: 8, unitTitle: "The Smallest Living Things", n: 1 },
  natural: "2026-11-07",

  /* ── /teach-plan, 2026-11-07. Merrill Life Science pp182-185. ── */
  plan: {
    objective: "Describe a virus (a core of nucleic acid in a protein coat), explain why it is not classed as living, list the four steps of an active infection and say what a latent virus does, and explain how a vaccine prevents disease.",
    markers: [
      "BOOK (paraphrased), Objectives: describe the structure of a virus and how viruses reproduce and cause disease, explain the value of vaccines, and describe some helpful uses of viruses.",
      "BOOK (paraphrased): a virus is a microscopic particle with a DNA or RNA core in a protein coat. It is not a cell and shows almost none of the characteristics of life, so it is in no kingdom. Some can be crystallized and stored for years and still infect. The coat gives the shape.",
      "BOOK (paraphrased): a parasite depends on an organism or cell and may harm it. A virus can reproduce only inside a host cell, and acts one of two ways. Active: attach, invade, copy, release. Latent: the viral nucleic acid joins the cell's own DNA and is copied when the cell divides, and can hide, then become active. A cold sore is the example, and stress, too much sun or a cold can trigger it.",
      "BOOK (paraphrased): viruses affect plants, animals, fungi, bacteria and protists. Some can turn healthy cells into tumor cells.",
      "BOOK (paraphrased): no medicine cured viral diseases then, but vaccines prevent some. A vaccine is made from killed or weakened particles that cannot cause disease. Edward Jenner, 1796: milkmaids with cowpox did not get smallpox, so he made a vaccine from cowpox sores, before anyone knew what caused disease. Interferon is a protein made by animal cells that stops viruses infecting other cells.",
      "BOOK (paraphrased): gene therapy puts correctly coded DNA inside a virus, which acts like an ambulance carrying the DNA into defective cells. In a mouse, a repaired gene carried by a virus let blood cells make the right substance for sickle-cell anemia.",
    ],
    method: "A THING THAT IS NEITHER, THEN HOW IT WORKS, THEN HOW WE STOP IT. First the puzzle (alive or not), then what a virus is made of, then the process the student must own: the four steps of an active infection, built a step at a time in a walk, and the latent hiding place. Then vaccines through Jenner's story, and last the surprise that a virus can help.",
    exampleOnly: [
      "The cold sore and Jenner's milkmaids are the book's own examples, kept. The bacterial cell in the four steps is the book's example too.",
      "⚠️ The shape-to-virus pairings and the 'practice for the body' picture are added from the record, see the header.",
    ],
    digitize: "The reading engine plus three Watch It Worked walkthroughs: the shapes table, the four steps of an active infection built a row at a time, and Jenner's story built a row at a time. Questions ask for the structure, the steps in order, the latent idea, and why a vaccine prevents but does not cure.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Science",
    blurb: "A virus isn't a cell, can't eat or grow, and can sit in a jar for years, yet it can make you sick. What a virus is, the four steps of an infection, and how a vaccine stops one.",
    contains: [
      "Why a virus is on the edge of what counts as alive",
      "What a virus is made of, and its shapes",
      "The four steps of an active infection, built a step at a time",
      "A virus that hides, like a cold sore",
      "How a vaccine works, with Jenner and the milkmaids",
      "A virus that helps, like an ambulance for DNA",
    ] },
  eyebrow: ["Life Science", "U8-L1", "The Smallest Living Things"],
  dek: "A virus is so small you need a special microscope to see it, and it's not quite alive. Here's what it is and how it gets into a cell.",

  scripture: {
    ref: "Jeremiah 17:14",
    text: "Heal me, O LORD, and I shall be healed; save me, and I shall be saved: for thou art my praise.",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Your student describes a virus, explains why it isn't classed as a living thing, lists the four steps of an active infection, says what a latent virus does, and explains how a vaccine prevents disease."
      ]},
      { h: "Key Concepts", p: [
        "A virus has no cell, so it can't do anything on its own. It has to get inside a cell and use the cell's own machinery to make more viruses.",
        "A vaccine prevents a disease and doesn't cure one. That is why a person who already has a cold isn't given a vaccine for it."
      ]},
      { h: "Where Students Get Stuck", p: [
        "Calling a virus a germ cell. A virus is not a cell at all, and that is the whole reason it sits outside the five kingdoms.",
        "Mixing up active and latent. In the active way the virus copies itself right away, and in the latent way it hides inside the cell's own DNA."
      ]},
      { h: "Added From the Record", p: [
        "The textbook is from 1994 and says no medicine cured viral diseases. The lesson says so and adds one line that some medicines against viruses have been made since. How a vaccine teaches the body, which shape goes with which virus, and the picture of nucleic acid as instructions are also added from the record. The cat vaccination MiniLab and the porcelain filter box are left out, and HIV has its own lesson next."
      ]},
      { h: "Book Pages", p: [
        "Merrill Life Science (1994), pages 182 to 185. Read free on archive.org: https://archive.org/details/merrilllifescien0000dani/page/207/mode/2up"
      ]},
      { h: "Suggested Videos", videos: [
        { id: "8FqlTslU22s", title: "Viruses (Updated)", channel: "Amoeba Sisters",
          why: "Shows a virus's structure and both ways it infects a cell, which match the book's active and latent. It also talks about whether a virus is alive." },
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Neither Alive Nor Not", s: [
      "Most things are easy to sort, because a rock is not alive and a dog is.",
      "A virus is the strange one, because it seems to be neither, and scientists have argued about it for a long time.",
      "Here's what a {{virus}} is, how it works, and why it ends up outside the five kingdoms you learned about."
    ]},

    { title: "What a Virus Is", s: [
      "A virus is a tiny particle, so tiny that you need a special electron microscope to see one.",
      "Inside is a core of {{nucleic acid}}, which is DNA or RNA, and you can think of it as the virus's instructions.",
      "Around the core is a coat made of protein, and the coat is what gives the virus its shape.",
      "A virus is not a cell, because it has no cytoplasm or parts of its own, only a core in a coat."
    ]},

    { title: "Shapes", s: [
      "Viruses come in a few shapes, and the protein coat decides which one.",
      "",
      "[walk] Match three viruses to their shapes.",
      "[step] The polio virus is many-sided, a little like a soccer ball with twenty flat sides. || " + table(SHAPES.slice(0, 2)),
      "[step] The tobacco mosaic virus, which attacks tobacco and tomato plants, is shaped like a rod. || " + table(SHAPES.slice(0, 3)),
      "[step] A bacteriophage, a virus that attacks bacteria, has a many-sided head and a tail. || " + table(SHAPES),
      "",
      "The virus that causes AIDS is roughly round, and you will meet it in the next lesson."
    ]},

    { title: "Why It Isn't Called Alive", s: [
      "A living thing is made of cells, and it eats, grows and makes more of itself without any help.",
      "A virus is not a cell, and it shows almost none of those signs of life, so it is not placed in any of the five kingdoms.",
      "Some viruses can even be turned into crystals and kept in a jar for years, and then they can still infect a living thing when they are put back inside one.",
      "That is why the question in this lesson's title has no easy answer."
    ]},

    { title: "A Parasite Needs a Home", s: [
      "A {{parasite}} is something that depends on another living thing or cell and may harm it.",
      "A virus is a parasite that can't make more viruses alone, so it has to get inside a {{host cell}}, which is the cell it uses as a home.",
      "Once it's in, it acts in one of two ways, which are called active and latent."
    ]},

    { title: "The Active Way", s: [
      "In the active way the virus gets to work at once, and it does it in four steps.",
      "The book's example is a virus attacking a bacterial cell.",
      "",
      "[walk] Follow an active virus through its four steps.",
      "[step] First it attaches, which means it sticks to the outside of one particular kind of cell. || " + table(ACTIVE.slice(0, 2)),
      "[step] Second it invades, which means it injects its nucleic acid into the cell. || " + table(ACTIVE.slice(0, 3)),
      "[step] Third it copies, because the virus's nucleic acid takes over the cell, and the cell begins to build new virus particles. || " + table(ACTIVE.slice(0, 4)),
      "[step] Fourth it releases, because the cell bursts and hundreds of new viruses escape to attack other cells. || " + table(ACTIVE),
      "",
      "The cell does all the work and gets destroyed, and every new virus can start the four steps again."
    ]},

    { title: "The Latent Way", s: [
      "In the {{latent}} way the virus hides instead of attacking.",
      "Its nucleic acid slips in and becomes part of the cell's own DNA without destroying the cell, so each time the cell divides, the hidden virus is copied along with it.",
      "It can stay hidden for a long time, and then something wakes it up and it turns active.",
      "A cold sore is the example, because the painful sore is the active stage.",
      "When the sore goes away the virus is hiding again, until stress, too much sun or a cold wakes it up."
    ]},

    { title: "Viruses Reach Everything", s: [
      "Viruses cause disease in every group of living things, including plants, animals, fungi, bacteria and protists.",
      "The tobacco mosaic virus harms tobacco and tomato plants, and rabies, chicken pox and mumps are viral diseases of animals and people.",
      "Some viruses can even change healthy cells into cancer cells, which are cells that grow into lumps called tumors."
    ]},

    { title: "Stopping a Virus With a Vaccine", s: [
      "When the book was written, no medicine could cure a viral disease.",
      "Some medicines against viruses have been made since, but the best protection is still to keep the virus from starting, and that is what a {{vaccine}} does.",
      "A vaccine is made from virus particles that have been killed or weakened so they can't cause the disease.",
      "Your body meets the harmless piece and learns to fight it, so it is ready if the real virus ever shows up.",
      "",
      "[walk] Follow the first vaccine, made by an English doctor named Edward Jenner in 1796.",
      "[step] Jenner noticed that milkmaids caught cowpox, a mild sickness from cows. || " + table(JENNER.slice(0, 2)),
      "[step] Those same milkmaids did not catch smallpox, a deadly disease that was killing many people. || " + table(JENNER.slice(0, 3)),
      "[step] So he made a vaccine from cowpox sores, even though nobody then knew what caused disease. || " + table(JENNER),
      "",
      "Vaccines now exist for measles, polio, flu and many other diseases, and even for some caused by bacteria.",
      "Your body also makes a protein called interferon that keeps a virus from infecting the next cell."
    ]},

    { title: "A Helpful Virus", s: [
      "A virus is good at getting its nucleic acid into cells, and scientists have found a way to use that.",
      "In gene therapy, a correct gene, which is one instruction in the DNA, is put inside a virus, and the virus acts like an ambulance that carries the correct instruction into cells that have a wrong one.",
      "In one test with a mouse, a repaired gene carried by a virus let the blood cells make the right substance for a disease called sickle-cell anemia.",
      "",
      "[verse] Jeremiah 17:14 says, “Heal me, O LORD, and I shall be healed; save me, and I shall be saved: for thou art my praise.”",
      "",
      "The same tiny particle can make people sick and help doctors treat sickness, and the questions below check what you've learned about it."
    ]}
  ],

  todo: { title: "What To Do Now", s: [
      "A particle that isn't quite alive, a four-step attack and a vaccine, and now it's your turn to explain it.",
      "Start with the questions, {Q} of them, and then the vocabulary check at the bottom, {v} questions on the word cards at the top of the page.",
      "When a question asks about the steps of an infection, picture the walk and say them in order before you pick an answer.",
      "Then, in your notebook, list the four steps of an active virus in order and write one sentence about what happens in each.",
      "Next, write two sentences that explain the difference between an active virus and a latent one, using the cold sore.",
      "Last, write a short paragraph that explains why a doctor gives a vaccine before you get sick and not after."
  ] },

  words: [
    ["Virus", "A tiny particle with a core of nucleic acid inside a protein coat. It is not a cell.", 2],
    ["Nucleic acid", "DNA or RNA, the instructions a virus carries.", 4],
    ["Parasite", "Something that depends on another living thing or cell and may harm it.", 17],
    ["Host cell", "The cell a virus gets inside to make more viruses.", 18],
    ["Latent", "Hiding. A latent virus is joined to the cell's own DNA and isn't making new viruses.", 28],
    ["Vaccine", "A medicine made from killed or weakened particles that helps the body prevent a disease.", 37]
  ],

  findsAt: 51,
  questions: [
    { q: "What is a virus made of?",
      find: [4],
      hint: "Read What a Virus Is.",
      choices: [
        "A nucleus, cytoplasm and a cell wall",
        "A core of nucleic acid inside a protein coat",
        "A shell of rock with water inside",
        "A single living cell with a tail"
      ], right: 1 },

    { q: "Why is a virus not placed in any of the five kingdoms?",
      find: [14],
      hint: "Read Why It Isn't Called Alive.",
      choices: [
        "It is too big to classify.",
        "It lives only in the water.",
        "It is not a cell and shows almost none of the signs of life.",
        "It has no name."
      ], right: 2 },

    { q: "What is a parasite?",
      find: [17],
      hint: "Read A Parasite Needs a Home.",
      choices: [
        "Something that depends on another living thing or cell and may harm it",
        "Something that makes its own food",
        "Something that lives in a jar",
        "Something that is always helpful"
      ], right: 0 },

    { q: "Where must a virus be to make more viruses?",
      find: [18],
      hint: "Read A Parasite Needs a Home.",
      choices: [
        "On a rock",
        "In the air",
        "In a jar of water",
        "Inside a host cell"
      ], right: 3 },

    { q: "In an active infection, which step is the one where the virus injects its nucleic acid into the cell?",
      find: [24],
      hint: "Read The Active Way, and use the Show All button on the walk.",
      choices: [
        "Attach",
        "Invade",
        "Copy",
        "Release"
      ], right: 1 },

    { q: "What happens in the last step, release?",
      find: [26],
      hint: "Read The Active Way.",
      choices: [
        "The virus sticks to the outside of the cell.",
        "The cell takes in a vaccine.",
        "The cell bursts and hundreds of new viruses escape.",
        "The virus joins the cell's DNA and hides."
      ], right: 2 },

    { q: "A cold sore goes away, but the virus is still in the person's cells, hidden in their DNA. What is the virus doing?",
      find: [28, 32],
      hint: "Read The Latent Way.",
      choices: [
        "It is latent, hiding until something wakes it up.",
        "It is being released.",
        "It has been turned into a vaccine.",
        "It has died."
      ], right: 0 },

    { q: "What is a vaccine made from?",
      find: [38],
      hint: "Read Stopping a Virus With a Vaccine.",
      choices: [
        "Fresh, strong viruses",
        "Killed or weakened particles that can't cause the disease",
        "A cell wall",
        "Hot water"
      ], right: 1 },

    { q: "What did Jenner notice that led to the first vaccine?",
      find: [41],
      hint: "Read the Jenner walk in Stopping a Virus With a Vaccine.",
      choices: [
        "Milkmaids who caught cowpox did not catch smallpox.",
        "Cows never got sick.",
        "Smallpox only happened on farms.",
        "Cowpox made people stronger."
      ], right: 0 },

    { q: "A doctor does not give a vaccine to someone who already has a cold. Why not?",
      find: [37],
      hint: "Read Stopping a Virus With a Vaccine.",
      choices: [
        "Because a cold is not a virus.",
        "Because a vaccine is made of food.",
        "Because vaccines are only for animals.",
        "Because a vaccine prevents a disease from starting and doesn't cure one already begun."
      ], right: 3 }
  ],

  vocabQuestions: [
    { q: "What is a <i>virus</i>?",
      choices: [
        "A tiny particle with a core of nucleic acid inside a protein coat.",
        "A one-celled animal.",
        "A kind of plant.",
        "A tool for seeing small things."
      ], right: 0 },
    { q: "What is <i>nucleic acid</i>?",
      choices: [
        "A kind of protein coat.",
        "A drink.",
        "DNA or RNA, the instructions a virus carries.",
        "A part of a vaccine bottle."
      ], right: 2 },
    { q: "What is a <i>parasite</i>?",
      choices: [
        "A living thing that makes its own food.",
        "Something that depends on another living thing or cell and may harm it.",
        "A kind of medicine.",
        "A cell wall."
      ], right: 1 },
    { q: "What is a <i>host cell</i>?",
      choices: [
        "A cell that makes vaccines.",
        "A cell that is already dead.",
        "A cell in a plant's root.",
        "The cell a virus gets inside to make more viruses."
      ], right: 3 },
    { q: "What does <i>latent</i> mean for a virus?",
      choices: [
        "Hiding, joined to the cell's own DNA and not making new viruses.",
        "Bursting out of the cell.",
        "Attacking at once.",
        "Being killed by a vaccine."
      ], right: 0 },
    { q: "What is a <i>vaccine</i>?",
      choices: [
        "A medicine made from killed or weakened particles that helps the body prevent a disease.",
        "A fresh virus.",
        "A bandage.",
        "A kind of cell."
      ], right: 0 }
  ]
};
