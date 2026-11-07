/* science/what-it-costs-to-cure-a-disease
   Grade 7 · science · unit 8 (book unit 8, "Viruses and Monerans", shelved as
   "The Smallest Living Things"), lesson 2. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   ⚠️ DRAFT PROSE, CLAUDE'S, 2026-11-07. Written on Sonnet from Merrill Life
   Science (1994) printed pp186-187, "Science and Society: The Cost of Curing a
   Disease", via the week 10-11 packet (paraphrased notes). Paul has not read it.

   🚨 JUDGEMENT CALL FOR THE REVIEW QUEUE. The book's section is entirely about
   AIDS and HIV, with transmission detail. Following the plan, this lesson teaches
   the book's real topic, WHAT IT TAKES AND COSTS TO CURE A DISEASE, with HIV as the
   book's case, kept age-appropriate:
   · HIV is a virus that attacks white blood cells and switches off the immune
     system, so people die of other illnesses (indicator illnesses).
   · It spreads through blood and other body fluids, from a mother to her baby and
     through shared needles; NOT through hugging, shaking hands or sharing a room.
   · SEXUAL CONTACT IS NOT MENTIONED. The book's line that "most get HIV through
     sexual contact" is left out, and so is its mention of kissing. If Paul wants
     the route named, he or Joana should say it to Kolten in their own words.
   · NO 1992 STATISTICS. The book's counts (300,000 deaths, one million infected,
     20 percent) are all left out. The only numbers are the FDA waits, and the lesson
     says they are the book's from the early 1990s.

   ⚠️ ADDED FROM THE RECORD, worth a glance from Paul:
   · Since the book was written, medicines let people with HIV live long lives, but
     there is still no cure. One short section says so, so the lesson isn't left
     describing 1992 as today.
   · The walk "from idea to pharmacy" (lab tests, a small safety trial, bigger
     trials, FDA review, approval) and the reasons each step costs time and money.
     The packet has only the FDA's two-year average and AZT's under four months.
   · AIDS described as the set of illnesses that follow once HIV has disabled the
     immune system.
   ⚠️ NOT IN THIS LESSON: the diagram detail (HIV can wait up to ten years or burst
   the cell at once is kept in one line), the contaminated-needle and transfusion
   detail beyond a line each, the Journal prompt, and the Connect to Chemistry
   question on how AZT, ddI and ddC work.
   ⚠️ The book's remark that AIDS research was getting more money than cancer or
   heart disease is kept only as a claim from "the book, in the early 1990s", in the
   You Decide section, and not as a number.

   🚨 THE VERSE IS A WORKING CHOICE, NOT PAUL'S. Matthew 25:36, "I was sick, and
   ye visited me", for caring for the sick. Choosing the scripture is his, so it goes
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

const SPREAD = [
  ["It spreads through", "It does not spread through"],
  ["Blood and other body fluids", "Hugging"],
  ["From a mother to her baby", "Shaking hands"],
  ["Shared needles", "Sharing a room"],
];
const HARM = [
  ["Step", "What happens"],
  ["1", "HIV gets into a white blood cell"],
  ["2", "It copies itself, and the cell is damaged"],
  ["3", "Fewer guards are left, so the immune system is weak"],
  ["4", "Other illnesses get in and are not fought off"],
];
const PHARMACY = [
  ["Step", "What happens", "Why it costs time and money"],
  ["1  Lab tests", "Test the idea on cells and animals", "Most ideas fail here"],
  ["2  Small trial", "A few people take it to check it is safe", "People must be watched closely"],
  ["3  Bigger trials", "Many people take it to see if it works", "Takes many people and many months"],
  ["4  FDA review", "Experts read all the results", "Every result has to be checked"],
  ["5  Approval", "The medicine can be sold", "Only if it is safe and it works"],
];

module.exports = {
  id: "science/what-it-costs-to-cure-a-disease",
  slug: "what-it-costs-to-cure-a-disease",
  title: "What It Costs to Cure a Disease",
  unit: "Life Science &middot; U8-L2",
  seq: { unit: 8, unitTitle: "The Smallest Living Things", n: 2 },
  natural: "2026-11-07",

  /* ── /teach-plan, 2026-11-07. Merrill Life Science pp186-187. ── */
  plan: {
    objective: "Explain what the immune system is and how HIV disables it, say how HIV does and does not spread, and explain why a new medicine takes years of testing and a lot of money, including the hard question of how limited research money should be shared between diseases.",
    markers: [
      "BOOK (paraphrased), Objectives: define AIDS and explain how it attacks the body, and estimate the cost of curing AIDS.",
      "BOOK (paraphrased): AIDS (acquired immune deficiency syndrome) is a group of diseases caused by an RNA virus called HIV. It spreads through body fluids, from mother to baby and by contaminated needles, and in the past through contaminated blood transfusions. It does NOT spread by casual contact such as hugging or shaking hands.",
      "BOOK (paraphrased): HIV attacks certain white blood cells that protect the body and disables the immune system. People get 'indicator illnesses' (pneumonia, tuberculosis, some cancers) and die of those, not of HIV itself.",
      "BOOK (paraphrased): there was no vaccine; a few drugs (AZT, ddI, ddC) treated symptoms and sometimes prolonged life but did not cure. The FDA made an exception and approved AZT in under four months, when the usual average was two years.",
      "BOOK (paraphrased), You Decide: people disagree on how much money to spend on a cure and on education; the government spends billions on research, and the book said AIDS research then got more money than cancer or heart disease, which cause more deaths. If you controlled the budget, how would you split it?",
    ],
    method: "THE TOPIC IS THE COST OF A CURE, THE CASE IS ONE DISEASE. Start with the immune system as the body's guards, show how HIV takes the guards away (a four-step walk), say plainly how it does and does not spread (a two-column table), then ask why no cure yet, which leads to the real subject: how a medicine gets from idea to pharmacy (a five-step table walk) and why that costs years and money. End on the book's hard question with both sides fairly stated.",
    exampleOnly: [
      "HIV is the book's case, not the objective. The objective is the cost and the process of curing a disease.",
      "⚠️ Sexual contact is left out on purpose, and the book's 1992 counts are left out. The walk from idea to pharmacy and the note on modern medicines are added from the record, see the header.",
    ],
    digitize: "The reading engine plus three Watch It Worked walkthroughs: how HIV weakens the immune system in four steps, how a medicine goes from idea to pharmacy in five steps (a table with a column for why it costs), and the spread table. Questions check the facts, the order of the steps and the reason testing is slow. The You Decide argument has no answer key, so it lives in `todo` as notebook writing.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Science",
    blurb: "Why doesn't every disease have a cure yet? How a germ can switch off the body's guards, how a new medicine gets tested for years before anyone can buy it, and the hard question of where limited money should go.",
    contains: [
      "The immune system, the body's guards",
      "How HIV weakens the guards, one step at a time",
      "How it spreads and how it does not",
      "How a medicine goes from an idea to the pharmacy",
      "Why testing takes years and costs so much",
      "The book's You Decide question, with both sides fairly stated",
    ] },
  eyebrow: ["Life Science", "U8-L2", "The Smallest Living Things"],
  dek: "Some diseases still have no cure. Here's why finding one takes years and money, and why it's a hard question where that money should go.",

  scripture: {
    ref: "Matthew 25:36",
    text: "Naked, and ye clothed me: I was sick, and ye visited me: I was in prison, and ye came unto me.",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Your student explains what the immune system does, how HIV disables it, how HIV does and does not spread, and why a new medicine takes years of testing and a lot of money. He also meets the book's question of how limited research money should be shared."
      ]},
      { h: "A Note on What This Lesson Leaves Out", p: [
        "The textbook section is about HIV and AIDS. This lesson teaches its real subject, the cost and the work of curing a disease, and keeps the HIV facts short and age-appropriate. The way the virus spreads is described as blood and other body fluids, mother to baby, and shared needles, and it is stated plainly that it does not spread by hugging, shaking hands or sharing a room. The book's statistics from 1992 are not shown, because they are out of date. If you want to talk about the other ways the virus spreads, that talk is yours to have with your student."
      ]},
      { h: "Key Concepts", p: [
        "A medicine has to be shown safe and shown to work, and that takes several stages of testing. Each stage costs time and money, which is why even an urgent medicine takes years.",
        "The You Decide question has no answer key. It asks your student to say what each side would argue."
      ]},
      { h: "Where Students Get Stuck", p: [
        "Thinking people die of HIV itself. The book says they die of other illnesses that a weakened immune system can't fight off.",
        "Thinking a treatment is the same as a cure. A treatment helps a person live with a disease, and a cure ends it."
      ]},
      { h: "Added From the Record", p: [
        "The note that modern medicines let people with HIV live long lives while there is still no cure, and the five steps from idea to pharmacy, are added from the record. The book's numbers from the 1990s are shown only where they are labeled as the book's."
      ]},
      { h: "Book Pages", p: [
        "Merrill Life Science (1994), pages 186 and 187. Read free on archive.org: https://archive.org/details/merrilllifescien0000dani/page/211/mode/2up"
      ]},
      { h: "Suggested Videos", videos: [
        { id: "105ebQ8VSsE", title: "Edward Jenner and the first vaccine", channel: "NowYouKnowAbout",
          why: "The story of the first vaccine, which ties to lesson 8-1. No video on the cost of medicines or how a medicine gets approved was found, so this is the closest fit." },
        { id: "z-eZnk1__ZY", title: "Vaccination | The World of Microorganisms | Grade 8 | Science | Khan Academy", channel: "Khan Academy India - English",
          why: "How vaccines work and how the immune system fights, at a middle-school level. Like the first video, it is about vaccines and not about the cost of medicines." },
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "A Hard Question", s: [
      "Doctors can now cure many diseases, but there are still some that nobody knows how to cure.",
      "Why not just make a cure for every one of them?",
      "The answer has to do with how hard it is to be sure a medicine works and is safe, and it takes years and a lot of money."
    ]},

    { title: "The Body's Guards", s: [
      "Your body has a team of guards called the {{immune system}}, and its job is to find germs and fight them.",
      "Some of the best guards are white blood cells, which are cells in your blood that hunt down germs and destroy them.",
      "Most of the time you never notice them at work, because they win."
    ]},

    { title: "A Virus That Takes the Guards Away", s: [
      "The book uses one disease to show how hard a cure can be, and that disease comes from a virus called {{HIV}}.",
      "HIV attacks the white blood cells themselves, which means it goes after the very guards that should be fighting it.",
      "When enough of the guards are gone, the person is said to have {{AIDS}}, which is the name for the group of illnesses that follow once the immune system is switched off.",
      "",
      "[walk] Follow how HIV weakens the immune system.",
      "[step] The virus gets into a white blood cell, one of the guards. || " + table(HARM.slice(0, 2)),
      "[step] It copies itself inside, and the cell is damaged, though it can also wait there for years before it does. || " + table(HARM.slice(0, 3)),
      "[step] With fewer guards left, the immune system is weak. || " + table(HARM.slice(0, 4)),
      "[step] Other illnesses, like pneumonia, tuberculosis and some cancers, get in and aren't fought off. || " + table(HARM),
      "",
      "Those other illnesses are called indicator illnesses, because they show that the immune system has stopped working.",
      "So people don't die of HIV directly, they die of the illnesses that a weak immune system can't fight."
    ]},

    { title: "How It Spreads, and How It Doesn't", s: [
      "HIV only passes from one person to another through blood and other body fluids.",
      "It can pass from a mother to her baby, and it can pass through needles that more than one person has used.",
      "In the past it also passed through blood given in hospitals, but donated blood is tested now, and that risk is low.",
      "You cannot catch it from ordinary contact, and the book is clear about that.",
      "",
      "[walk] Sort the ways.",
      "[step] It spreads through blood and other body fluids, and not through hugging. || " + table(SPREAD.slice(0, 2)),
      "[step] It spreads from a mother to her baby, and not through shaking hands. || " + table(SPREAD.slice(0, 3)),
      "[step] It spreads through shared needles, and not through sharing a room. || " + table(SPREAD),
      "",
      "So a person with HIV can be hugged, can shake your hand and can sit in the same room, and nobody will catch it that way."
    ]},

    { title: "Why No Cure Yet", s: [
      "When the book was written, there was no vaccine for HIV, and the drugs that existed treated the illness without curing it.",
      "A drug named AZT could ease the symptoms and sometimes help a person live longer, but it could not get rid of the virus.",
      "A treatment helps a person live with a disease, while a cure ends the disease, and the book was about how far away a cure still was."
    ]},

    { title: "From Idea to Pharmacy", s: [
      "A new medicine can't just be made and sold, because it has to be shown to be safe and shown to work.",
      "The government office that checks this in the United States is the {{FDA}}, which stands for the Food and Drug Administration.",
      "A medicine goes through a set of steps, and each step is slow and costs money for a reason.",
      "",
      "[walk] Follow a new medicine from an idea to the pharmacy.",
      "[step] First comes the lab, where the idea is tested on cells and on animals, and most ideas fail here. || " + table(PHARMACY.slice(0, 2)),
      "[step] Next is a small trial, where a few people take the medicine so doctors can check that it is safe. || " + table(PHARMACY.slice(0, 3)),
      "[step] Then come bigger trials with many more people, to see whether the medicine really works. || " + table(PHARMACY.slice(0, 4)),
      "[step] After that, the FDA reads all of the results to make sure nothing was missed. || " + table(PHARMACY.slice(0, 5)),
      "[step] Only if the answer is yes is the medicine approved and sold. || " + table(PHARMACY),
      "",
      "The book said the wait for approval averaged about two years in the early 1990s, and it was a big deal that the FDA made an exception and approved AZT in under four months.",
      "Rushing has a cost too, because a medicine that has not been tested enough could hurt people."
    ]},

    { title: "You Decide", s: [
      "Money for research is limited, and every disease would like more of it.",
      "The book asks you to imagine you control the government's budget and have to decide how to split it.",
      "One side says to spend the most where the most people die, because a dollar spent there saves more lives.",
      "The other side says to spend on a deadly disease that has no cure, because without research the people who have it have nothing to hope for.",
      "The book said that in the early 1990s HIV research was getting more money than heart disease or cancer, even though those caused more deaths, and people argued about whether that was fair.",
      "Both sides want to help sick people, and they disagree about how to spend what there is."
    ]},

    { title: "What Has Changed", s: [
      "This lesson follows a textbook from 1994, and a lot has happened since then.",
      "Medicines now let people with HIV live long lives, but there is still no cure.",
      "That is a good example of the difference between a treatment and a cure, and of why the research was worth the money."
    ]},

    { title: "Visiting the Sick", s: [
      "Behind all of this money and testing are people who are sick and people who want to help them.",
      "",
      "[verse] Matthew 25:36 says, “Naked, and ye clothed me: I was sick, and ye visited me: I was in prison, and ye came unto me.”",
      "",
      "The verse is about caring for people who are ill, and doctors, nurses and researchers do that work in their own ways.",
      "The questions below check what you've learned, and the notebook part asks you to think through the hard question."
    ]}
  ],

  todo: { title: "What To Do Now", s: [
      "A virus that takes the guards away, a medicine that needs years of testing and a question about money, and now it's your turn to explain it.",
      "Start with the questions, {Q} of them, and then the vocabulary check at the bottom, {v} questions on the word cards at the top of the page.",
      "When a question asks about the steps of a medicine, picture the walk and say them in order before you pick an answer.",
      "Then, in your notebook, write what the first side of the You Decide question would say, in one paragraph of complete sentences.",
      "After that, write what the second side would say, in another paragraph.",
      "Last, write a third paragraph about what you think and why, using at least one fact from the lesson.",
      "There's no answer key for the notebook part, and you'll be judged on whether your reasons are clear and take both sides seriously."
  ] },

  words: [
    ["Immune system", "The body's team of guards, including white blood cells, that finds germs and fights them.", 3],
    ["HIV", "A virus that attacks white blood cells and switches off the immune system.", 6],
    ["AIDS", "The group of illnesses that follow once HIV has switched off the immune system.", 8],
    ["FDA", "The government office that checks that a medicine is safe and works, short for the Food and Drug Administration.", 29]
  ],

  findsAt: 52,
  questions: [
    { q: "What does the immune system do?",
      find: [3],
      hint: "Read The Body's Guards.",
      choices: [
        "It digests food.",
        "It finds germs and fights them.",
        "It moves blood around the body.",
        "It makes bones grow."
      ], right: 1 },

    { q: "What does HIV attack?",
      find: [7],
      hint: "Read A Virus That Takes the Guards Away.",
      choices: [
        "The lungs",
        "The bones",
        "The white blood cells that guard the body",
        "The skin"
      ], right: 2 },

    { q: "Why do people with AIDS die of other illnesses like pneumonia?",
      find: [15],
      hint: "Read A Virus That Takes the Guards Away.",
      choices: [
        "Because pneumonia is the same virus as HIV.",
        "Because a weak immune system can't fight them off.",
        "Because the virus makes pneumonia.",
        "Because the white blood cells attack the lungs."
      ], right: 1 },

    { q: "Which of these does NOT spread HIV?",
      find: [21],
      hint: "Read How It Spreads, and How It Doesn't.",
      choices: [
        "Sharing a needle",
        "Blood",
        "From a mother to her baby",
        "Shaking hands"
      ], right: 3 },

    { q: "In the book, what did a drug like AZT do?",
      find: [26],
      hint: "Read Why No Cure Yet.",
      choices: [
        "It cured the illness completely.",
        "It treated the illness and sometimes helped people live longer, but it did not cure it.",
        "It worked as a vaccine.",
        "It made the virus spread faster."
      ], right: 1 },

    { q: "What is the difference between a treatment and a cure?",
      find: [27],
      hint: "Read Why No Cure Yet.",
      choices: [
        "A treatment helps a person live with a disease, and a cure ends it.",
        "A cure helps a person live with a disease, and a treatment ends it.",
        "There is no difference.",
        "A treatment is always more expensive."
      ], right: 0 },

    { q: "Why does a new medicine take years of testing?",
      find: [28],
      hint: "Read From Idea to Pharmacy.",
      choices: [
        "Because the testing is for fun.",
        "Because it must be shown to be safe and shown to work.",
        "Because the FDA only works one day a year.",
        "Because medicines have to be a year old to be sold."
      ], right: 1 },

    { q: "Which comes first when a new medicine is made?",
      find: [32],
      hint: "Read the walk in From Idea to Pharmacy.",
      choices: [
        "The FDA approves it.",
        "It is sold at the pharmacy.",
        "A bigger trial with many people.",
        "The idea is tested in the lab on cells and animals."
      ], right: 3 },

    { q: "In the book, what was unusual about the approval of AZT?",
      find: [37],
      hint: "Read From Idea to Pharmacy.",
      choices: [
        "It was approved in under four months, when the usual wait averaged about two years.",
        "It took twenty years.",
        "It was never approved.",
        "It was approved before it was made."
      ], right: 0 },

    { q: "Why is it hard to decide how to share research money between diseases?",
      find: [39],
      hint: "Read You Decide.",
      choices: [
        "Because all diseases have already been cured.",
        "Because the money is limited, and every disease would like more of it.",
        "Because doctors don't want the money.",
        "Because money can't be used for research."
      ], right: 1 }
  ],

  vocabQuestions: [
    { q: "What is the <i>immune system</i>?",
      choices: [
        "The body's team of guards that finds germs and fights them.",
        "The body's way of digesting food.",
        "A kind of medicine.",
        "A part of the skeleton."
      ], right: 0 },
    { q: "What is <i>HIV</i>?",
      choices: [
        "A vaccine.",
        "A medicine that cures illness.",
        "A white blood cell.",
        "A virus that attacks white blood cells and switches off the immune system."
      ], right: 3 },
    { q: "What is <i>AIDS</i>?",
      choices: [
        "A kind of bacterium.",
        "The group of illnesses that follow once HIV has switched off the immune system.",
        "A medicine for a cold.",
        "A kind of vaccine."
      ], right: 1 },
    { q: "What is the <i>FDA</i>?",
      choices: [
        "A kind of hospital.",
        "A kind of virus.",
        "The government office that checks that a medicine is safe and works.",
        "A medicine for a fever."
      ], right: 2 }
  ]
};
