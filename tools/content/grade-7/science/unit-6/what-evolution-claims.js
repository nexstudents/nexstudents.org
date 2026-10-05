/* science/what-evolution-claims
   Grade 7 · science · unit 6 (new unit: "Origins: Evolution and Creation, Side
   by Side"). Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 THE PROSE IN `parts` IS A DRAFT, NOT PAUL'S VOICE. Written 2026-10-05 on
   Sonnet from Merrill Life Science pp130-135 (Section 6-1, Mechanisms of
   Evolution, with the Problem Solving page on pumpkin seeds), via the week 6-7
   packet (paraphrased notes) and the teach-plan, then given THE PASS and
   stamped. Framing copied from science/life-only-comes-from-life.

   🚨 SIDE BY SIDE, NOT BLENDED (BEHAVIOR.md, "Science: world science and
   creation science, side by side"). Layer one, what can be watched, is taught as
   the textbook teaches it, with no hedging. Layer two, whether all living things
   share one common ancestor, is named as a different KIND of question, because
   nobody watched it and it can't be tested the way a pea cross can. BOTH answers
   are then given in their own words: common descent (the textbook's view) and
   creation (Genesis 1, "after his kind"). The student is asked to SORT
   statements as observed or an origin claim and is never asked to pick a side.
   Unlike the Life Only Comes From Life lesson, this one does NOT end by naming
   which answer the site holds; the plan says to sort, not to pick. If Paul wants
   that closing, it is his to add.

   ⚠️ ADDED FROM THE RECORD, worth a glance from Paul:
   · The year of Darwin's book (On the Origin of Species, 1859) and that the
     voyage began in 1831 and reached the Galapagos in 1835. The packet gives
     only that Darwin was 22 and later spent twenty years studying.
   · The finch-beak result from the 1977 drought on Daphne Major (the Grants'
     measurements), used as the one observed example of natural selection at work.
   · The book's pumpkin math, which is the book's own numbers.
   ⚠️ "Common descent" and "creation" are described in a sentence or two each. A
   fuller, fairer treatment of the evidence is the NEXT lesson (U6-L2).

   🚨 THE VERSE IS A WORKING CHOICE, NOT PAUL'S. Genesis 1:24. Choosing the
   scripture is his, so it goes in the review queue. */
'use strict';
module.exports = {
  id: "science/what-evolution-claims",
  slug: "what-evolution-claims",
  title: "What Evolution Claims, and What It Rests On",
  unit: "Life Science &middot; U6-L1",
  seq: { unit: 6, unitTitle: "Origins: Evolution and Creation, Side by Side", n: 1 },
  natural: "2026-10-05",

  /* ── /teach-plan, 2026-10-05. Merrill Life Science pp130-135. ── */
  plan: {
    objective: "Explain what natural selection is and what it can be observed doing, compare Lamarck's and Darwin's ideas, and tell the observed part of evolution apart from the claim about the origin of all life.",
    markers: [
      "BOOK (paraphrased), Objectives box: compare Lamarck's and Darwin's ideas, explain the importance of variations, and relate gradualism and punctuated equilibrium to the rate of evolution.",
      "BOOK (paraphrased), Lamarck, 1809: acquired characteristics are passed on, so the child of a bodybuilder would be muscular. It was rejected because genes, not lifestyle, control what's inherited.",
      "BOOK (paraphrased), Darwin: a naturalist on HMS Beagle at 22, struck by the finches, tortoises and cacti of the Galapagos, who spent twenty years studying, including breeding pigeons.",
      "BOOK (paraphrased), Darwin's four factors: overproduction, variation, some variations help survival, and the helpful ones build up. 'Survival of the fittest.'",
      "BOOK (paraphrased), Problem Solving p133: a pumpkin plant with 70 seeds per pumpkin and 2 pumpkins per plant gives 70, then 9,800, then 1,372,000, then 192,080,000 seeds, so why isn't Earth covered with pumpkins.",
      "BOOK (paraphrased): variations, such as a litter of kittens, an albino deer or seedless fruit, and a population is a group of one species in one area.",
      "BOOK (paraphrased): gradualism says change is slow and steady with in-between forms, and punctuated equilibrium says change can be rapid, from a few gene mutations. The book says the evidence supports some combination. Figure: horse fossils from Eohippus, 55 million years ago, with several toes, to a one-hoof horse.",
    ],
    method: "TWO LAYERS, NAMED OUT LOUD. LAYER ONE IS WHAT CAN BE WATCHED AND MEASURED, taught the way the book teaches it: variation, overproduction, natural selection, artificial selection, why Lamarck was set aside, and two views of how fast change goes. LAYER TWO IS A DIFFERENT KIND OF QUESTION, whether all living things came from one common ancestor over millions of years, which nobody watched and which can't be tested like a pea cross. Both answers are given in their own words, common descent and creation, and the student sorts statements into 'observed' and 'origin claim' without being asked to pick one.",
    exampleOnly: [
      "The pumpkin patch, the kitten litter, the Galapagos finches. WORLD: Darwin's voyage plus the pumpkin patch. The title and objective don't name them.",
      "⚠️ The finch-beak drought result and the date of Darwin's book are added from the record, see the header.",
    ],
    digitize: "The reading engine. Questions sort statements into observed and origin claim, plus the book's facts. No answer key to a side, and the todo asks for a sorting list in the notebook, not an opinion.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Science",
    blurb: "Seventy seeds turn into nearly two hundred million, a young man sails to the Galapagos, and a question nobody watched. What can be seen happening, and what is a claim about the beginning.",
    contains: [
      "A story-form reading, read aloud with the words highlighted",
      "Variation, overproduction and natural selection, and a real measured example",
      "Lamarck's idea, and why it was set aside",
      "Two views of how fast change goes",
      "The origin question, with both answers given in their own words",
      "Sorting statements into what's been observed and what's a claim about origins",
    ] },
  eyebrow: ["Life Science", "U6-L1", "Origins: Evolution and Creation, Side by Side"],
  dek: "One word, evolution, is used for two very different things. One you can watch happen in a finch's beak, and the other is a claim about the beginning of everything alive.",

  scripture: {
    ref: "Genesis 1:24",
    text: "And God said, Let the earth bring forth the living creature after his kind, cattle, and creeping thing, and beast of the earth after his kind: and it was so.",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will explain variation, overproduction and natural selection, compare Lamarck's and Darwin's ideas, describe gradualism and punctuated equilibrium as two views of rate, and sort statements into what has been observed and what is a claim about origins."
      ]},
      { h: "Side by Side, Not Blended", p: [
        "This unit follows the site's rule for the origin question. What can be watched and measured is taught exactly as the textbook teaches it. The question of where all living things came from is named as a different kind of question, and both answers are given in their own words: common descent, which is the textbook's view, and creation, which is what Genesis 1 says.",
        "The student is asked to sort statements into observed and origin claim, and is never asked to pick a side. Keeping the two apart is the honest way to study the subject, and the lesson says so out loud."
      ]},
      { h: "Key Concepts", p: [
        "Natural selection can be observed. Individuals in a population vary, more are born than can survive, those with helpful variations survive and reproduce more, and the helpful variations become more common. Both of the answers in this lesson accept that.",
        "Whether this process, carried on for millions of years, accounts for all living things coming from one ancestor is the origin question, and that's the part nobody watched."
      ]},
      { h: "Added From the Record", p: [
        "The year of Darwin's book (1859), the dates of the voyage, and the finch-beak result from the 1977 drought are added from the historical record. The book's own parts are the kittens, the pumpkin seeds, the pigeons, Lamarck's bodybuilder, the two views of rate, and the horse fossils."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Seventy Seeds", s: [
      "Cut open a pumpkin and you'll find about seventy seeds, and every one of them could grow into a plant that makes two more pumpkins.",
      "Plant all seventy and the next crop comes to 9,800 seeds, plant those and you get 1,372,000, and plant those and you reach 192,080,000, all from a single pumpkin in only a few growing seasons.",
      "",
      "[ex] 70 seeds, then 9,800, then 1,372,000, then 192,080,000",
      "",
      "Yet nobody's backyard is buried in pumpkins, because most seeds get eaten, dry out or land where nothing can grow.",
      "That gap between how many seeds there are and how many survive is where this whole lesson begins, so what decides which ones make it?"
    ]},

    { title: "A Young Man on a Ship", s: [
      "In 1831 a twenty-two-year-old naturalist named Charles Darwin boarded a ship called the Beagle for a voyage around the world.",
      "On the Galapagos Islands he found finches that differed from island to island, giant tortoises, and cacti unlike any he'd seen at home, and he couldn't stop wondering why.",
      "He spent about twenty years thinking it over before he published his book On the Origin of Species in 1859, and part of that time he bred pigeons to see for himself what a breeder could change.",
      "What he came to believe rests on four plain observations, and the first one you've just met."
    ]},

    { title: "No Two Kittens Alike", s: [
      "Look at a litter of kittens and you'll see it right away: one is orange, one is gray, one is bigger than the rest, and one has a longer tail.",
      "These differences are called {{variation}}, and they show up in every group of one kind of living thing in one place, which scientists call a {{population}}.",
      "A {{species}} is a group of living things that can breed together and have fertile young, and the kittens, the deer in a forest and the pumpkins in a field are each a population of one species.",
      "Some variations are small, like a longer tail, and some are striking, like an albino deer or a fruit with no seeds, and all of them get passed down."
    ]},

    { title: "Natural Selection", s: [
      "Put Darwin's four observations together and you get his idea of {{natural selection}}.",
      "More offspring are born than can survive, which is the pumpkin problem, and the offspring differ from each other, which is the kitten problem.",
      "Some of those differences help an individual survive and have young, and over many generations the helpful variations build up in the population, because the individuals that have them leave more descendants.",
      "People have summed it up as survival of the fittest, which means the ones that fit their surroundings best survive to reproduce, and that's not the same as the strongest."
    ]},

    { title: "Beaks in a Drought", s: [
      "You don't have to take that on faith, because one case has been measured.",
      "In 1977 a severe drought hit a small Galapagos island, and the small, soft seeds the finches liked ran out, leaving mostly big, hard ones.",
      "Finches with deeper, stronger beaks could crack those seeds and survived in greater numbers, and when the next generation hatched, its average beak was measurably deeper.",
      "That's natural selection, seen and measured in a living population, and it's the part of this subject that nobody argues about."
    ]},

    { title: "Breeders Do It on Purpose", s: [
      "Darwin saw that people already change living things by choosing which ones to breed.",
      "A pigeon breeder picks the birds with the fanciest tails to be the parents, and in a few generations his flock looks very different from the wild bird it began as.",
      "That's called artificial selection, since a person does the choosing, and natural selection is the same sorting done by the surroundings instead.",
      "It works because the traits it sorts are the ones that parents hand to their young."
    ]},

    { title: "An Idea That Didn't Survive", s: [
      "Before Darwin, a French naturalist named Lamarck had a different idea, which he published in 1809.",
      "He said the things an animal acquires in its life, like muscles from hard work, are passed on to its young, so the child of a bodybuilder would be born muscular.",
      "It sounds sensible until you test it, and the test is that genes, not habits, are what get inherited, and a bodybuilder's muscles don't change his genes.",
      "Scientists set Lamarck's idea aside for that reason, and it's an example of how this kind of question gets settled: somebody can check."
    ]},

    { title: "How Fast Does It Go?", s: [
      "Among scientists who accept the larger claim, there's a debate about rate, and it has two sides with long names.",
      "Gradualism says change is slow and steady, with many small in-between steps along the way.",
      "Punctuated equilibrium says that long stretches of little change are broken by short bursts of quick change, which could follow from just a few gene mutations.",
      "The textbook this lesson follows says the evidence fits some mix of both."
    ]},

    { title: "Two Kinds of Question", s: [
      "Look back at everything so far, and notice that every item on the list was something a person could watch, measure or repeat: variation in kittens, the pumpkin math, the finches' beaks after the drought, the pigeon breeder's flock and the failed test of Lamarck's idea.",
      "The word {{evolution}} covers all of that, in its smaller meaning, a change in the inherited traits of a population over generations, and everyone in this lesson agrees it happens.",
      "But the same word is also used for something much bigger, the claim that every living thing came from one common ancestor over millions of years.",
      "That's a different kind of question, because nobody was there to watch it, and you can't test it with a pea cross or a finch the way you can test a beak."
    ]},

    { title: "Two Answers to the Origin Question", s: [
      "People have given two answers to the bigger question, and a fair lesson states them in their own words.",
      "The first is common descent, which is Darwin's claim and the view of the textbook this lesson follows: all living things share one ancestor and have descended, with change, over millions of years, and its supporters point to fossils like the horse series, which runs from Eohippus about 55 million years ago, with several toes, to today's one-hoofed horse.",
      "The second is creation, which is the account in the Bible's first book: God made living things and made them each “after his kind,” and the people who hold this view say variation and natural selection are real but work inside the kinds God made.",
      "",
      "[verse] Genesis 1:24 says, “And God said, Let the earth bring forth the living creature after his kind, cattle, and creeping thing, and beast of the earth after his kind: and it was so.”",
      "",
      "Notice what the two answers share, because both accept the finches, the kittens and the pumpkin seeds, and they part company only on the question of where living things came from in the first place."
    ]},

    { title: "Keeping Them Apart", s: [
      "A careful student of science keeps the two kinds of question apart, and that's the honest way to study this subject.",
      "What can be watched gets stated plainly as what's been seen, and a claim about the distant past gets stated as a claim, with the people who make it named.",
      "The next lesson looks at the evidence for the bigger claim and doesn't take anyone's word for it.",
      "For now, the job is a sorting job, and the questions below ask you to put each statement in its place."
    ]}
  ],

  todo: { title: "What To Do Now", s: [
      "Seventy seeds, a ship, a drought and two answers to one old question, and the work now is sorting.",
      "Start with the questions, {Q} of them, and then the vocabulary check at the bottom, {v} questions on the word cards at the top of the page.",
      "When a question asks whether something has been observed or is a claim about origins, ask who could have watched it.",
      "Then, in your notebook, make two lists in complete sentences.",
      "Under the heading Observed, write three things from the lesson that a person could watch or measure.",
      "Under the heading Claims About Origins, write the two answers the lesson gave, each in a sentence and each in its own words.",
      "There's no answer key, and nobody is asking you which answer to hold, only whether you can say clearly what each one claims.",
      "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] },

  words: [
    ["Species", "A group of living things that can breed together and have fertile young.", 11],
    ["Population", "A group of one species living in one area.", 10],
    ["Variation", "The differences between individuals of the same kind, like kittens in a litter.", 10],
    ["Natural selection", "The process in which individuals with helpful variations survive and reproduce more, so those variations become more common.", 13],
    ["Evolution", "In its smaller meaning, a change in a population's inherited traits over generations. The same word is also used for the larger claim of one common ancestor.", 34],
    ["Gradualism", "The view that change is slow and steady, with many small in-between steps.", 30],
    ["Punctuated equilibrium", "The view that long stretches of little change are broken by short bursts of quick change.", 31]
  ],

  findsAt: 46,
  questions: [
    { q: "Why isn't the world buried in pumpkins, even though one pumpkin's seeds could produce nearly two hundred million?",
      find: [3],
      hint: "Read Seventy Seeds.",
      choices: [
        "Most seeds never grow, because they're eaten, dry out or land where nothing can grow.",
        "Pumpkins stop making seeds after one year.",
        "Every seed grows, but the plants shrink.",
        "Nobody has ever planted a pumpkin seed."
      ], right: 0 },

    { q: "What is variation?",
      find: [10],
      hint: "Read No Two Kittens Alike.",
      choices: [
        "A kind of mutation that happens only in labs.",
        "The differences between individuals of the same kind.",
        "A group of living things in one place.",
        "The process by which seeds are planted."
      ], right: 1 },

    { q: "Which of these is one of Darwin's observations behind natural selection?",
      find: [14],
      hint: "Read Natural Selection.",
      choices: [
        "Individuals never differ from each other.",
        "Muscles from hard work are passed to young.",
        "More offspring are born than can survive.",
        "Every offspring survives."
      ], right: 2 },

    { q: "What happened to the finches' beaks after the 1977 drought?",
      find: [19],
      hint: "Read Beaks in a Drought.",
      choices: [
        "They got shorter and softer.",
        "Nothing changed.",
        "The finches grew wings.",
        "The next generation's average beak was deeper, because the deeper-beaked finches survived better."
      ], right: 3 },

    { q: "What is artificial selection?",
      find: [23],
      hint: "Read Breeders Do It on Purpose.",
      choices: [
        "The sorting done by a person choosing which ones to breed.",
        "The sorting done by the surroundings.",
        "A way to make seeds grow faster.",
        "A kind of fossil."
      ], right: 0 },

    { q: "Why did scientists set Lamarck's idea aside?",
      find: [28],
      hint: "Read An Idea That Didn't Survive.",
      choices: [
        "Because Lamarck lived too long ago.",
        "Because genes, not habits, are what get inherited.",
        "Because muscles don't exist.",
        "Because Darwin said so."
      ], right: 1 },

    { q: "Which of these is a claim about origins, and not something that has been watched?",
      find: [35],
      hint: "Read Two Kinds of Question.",
      choices: [
        "A litter of kittens has different colors.",
        "Finches with deeper beaks survived a drought.",
        "A pigeon breeder changed his flock in a few generations.",
        "All living things came from one common ancestor over millions of years."
      ], right: 3 },

    { q: "Which of these has been observed and measured?",
      find: [19],
      hint: "Ask who could have watched it.",
      choices: [
        "The beaks of one finch population changed after a drought.",
        "The first living thing appeared.",
        "Every kind of living thing came from one ancestor.",
        "Nobody has ever measured a living thing."
      ], right: 0 },

    { q: "The lesson says the two answers to the origin question are common descent and creation. What do they share?",
      find: [41],
      hint: "Read Two Answers to the Origin Question.",
      choices: [
        "They agree that all life came from one ancestor.",
        "They both accept the observed variation and natural selection, and differ on where living things came from.",
        "They agree about the age of the earth.",
        "They agree that Lamarck was right."
      ], right: 1 },

    { q: "What's the difference between gradualism and punctuated equilibrium?",
      find: [31],
      hint: "Read How Fast Does It Go?",
      choices: [
        "One is about plants and the other about animals.",
        "One says change is steady and slow, and the other says long calm stretches are broken by quick bursts.",
        "One was Darwin's and the other was Lamarck's.",
        "They mean the same thing."
      ], right: 1 }
  ],

  vocabQuestions: [
    { q: "What is a <i>population</i>?",
      choices: ["A group of one species living in one area.", "A single animal.", "A kind of fossil.", "A type of seed."], right: 0 },
    { q: "What is <i>natural selection</i>?",
      choices: [
        "A person choosing which animals to breed.",
        "Individuals with helpful variations surviving and reproducing more, so those variations become more common.",
        "A change in a person's habits.",
        "A way of counting seeds."
      ], right: 1 },
    { q: "What does the word <i>evolution</i> cover in this lesson?",
      choices: [
        "Only changes that happen in a laboratory.",
        "Only the claim of one common ancestor.",
        "A change in a population's inherited traits, and also the larger claim of one common ancestor.",
        "Only the study of fossils."
      ], right: 2 },
    { q: "What is <i>gradualism</i>?",
      choices: [
        "The idea that change happens in quick bursts.",
        "The idea that acquired traits are inherited.",
        "The idea that nothing ever changes.",
        "The view that change is slow and steady, with many small steps."
      ], right: 3 },
    { q: "What is a <i>species</i>?",
      choices: [
        "A group of living things that can breed together and have fertile young.",
        "A pair of chromosomes.",
        "A single gene.",
        "A group of unrelated animals."
      ], right: 0 }
  ]
};
