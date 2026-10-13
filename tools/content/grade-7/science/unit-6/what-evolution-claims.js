/* science/what-evolution-claims
   Grade 7 · science · unit 6 (new unit: "Origins: Evolution and Creation, Side
   by Side"). Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 REWRITTEN 2026-10-13 (Sonnet, checked by Opus) after Kolten said the lessons
   don't explain anything. The 2026-10-05 version used about ten big words
   (variation, population, species, natural selection, artificial selection,
   Lamarck, gradualism, punctuated equilibrium, evolution, common descent),
   promised "four plain observations" and never listed them, and never showed the
   pumpkin math or the finch story step by step. This one: the pumpkin seeds as a
   walk (why 70 becomes 9,800), a short voyage section, variation / population /
   species in plain words, DARWIN'S FOUR IDEAS LISTED (more are born than can
   survive; they differ; some differences help; the helpful ones build up) with an
   example for each, the 1977 finch drought as a four-step walk, one short
   paragraph each on breeders and Lamarck, then the two kinds of question and the
   two answers, and a closing sorting walk. CUT: gradualism and punctuated
   equilibrium (the rate debate), the artificial selection word (breeders are
   kept as one plain paragraph), and the horse-fossil detail is kept only as the
   supporters' example. Word cards cut from 7 to 5 (Variation, Population,
   Species, Natural Selection, Evolution). The unit review still works: it asks
   about population, variation, species and Lamarck, all of which are kept.

   🚨 SIDE BY SIDE, NOT BLENDED (BEHAVIOR.md, "Science: world science and
   creation science, side by side"). Layer one, what can be watched, is taught
   plainly. Layer two, whether all living things share one common ancestor, is
   named as a different KIND of question, because nobody watched it and it can't
   be tested the way a pea cross can. BOTH answers are given in their own words,
   under the labels "What the world says" and "What God tells us", and the
   student is asked to SORT statements as observed or an origin claim and is
   never asked to pick a side. Deep time is never stated as plain fact.

   ⚠️ ADDED FROM THE RECORD, worth a glance from Paul (all kept from the first
   draft):
   · The year of Darwin's book (On the Origin of Species, 1859) and that the
     voyage began in 1831. The packet gives only that Darwin was 22 and later
     spent twenty years studying.
   · The finch-beak result from the 1977 drought on a small Galapagos island,
     used as the one observed example of natural selection at work. No numbers
     are given for it, because none are in the packet.
   · The pumpkin math is the textbook's own numbers (70 seeds, 2 pumpkins per
     plant, 9,800, 1,372,000, 192,080,000), now shown as 70 x 140 each round.
   ⚠️ The four ideas are the packet's "four factors" (overproduction, variation,
   some variations help survival, helpful ones build up); the lesson calls them
   Darwin's four ideas. A fuller treatment of the evidence is the NEXT lesson.

   🚨 THE VERSE IS A WORKING CHOICE, NOT PAUL'S. Genesis 1:24. Choosing the
   scripture is his, so it goes in the review queue. */
'use strict';
module.exports = {
  id: "science/what-evolution-claims",
  slug: "what-evolution-claims",
  title: "What Evolution Claims, and What It Rests On",
  unit: "Life Science &middot; U6-L1",
  seq: { unit: 6, unitTitle: "Origins: Evolution and Creation, Side by Side", n: 1 },
  natural: "2026-10-13",

  /* ── /teach-plan, rewritten 2026-10-13. Merrill Life Science pp130-135. ── */
  plan: {
    objective: "Explain what natural selection is and what it can be observed doing, say why Lamarck's idea was set aside, and tell the observed part of evolution apart from the claim about the origin of all life.",
    markers: [
      "BOOK (paraphrased), Objectives box: compare Lamarck's and Darwin's ideas, explain the importance of variations, and relate gradualism and punctuated equilibrium to the rate of evolution.",
      "BOOK (paraphrased), Lamarck, 1809: acquired characteristics are passed on, so the child of a bodybuilder would be muscular. It was rejected because genes, not lifestyle, control what's inherited.",
      "BOOK (paraphrased), Darwin: a naturalist on HMS Beagle at 22, struck by the finches, tortoises and cacti of the Galapagos, who spent twenty years studying, including breeding pigeons.",
      "BOOK (paraphrased), Darwin's four factors: overproduction, variation, some variations help survival, and the helpful ones build up. 'Survival of the fittest.'",
      "BOOK (paraphrased), Problem Solving p133: a pumpkin plant with 70 seeds per pumpkin and 2 pumpkins per plant gives 70, then 9,800, then 1,372,000, then 192,080,000 seeds, so why isn't Earth covered with pumpkins.",
      "BOOK (paraphrased): variations, such as a litter of kittens, an albino deer or seedless fruit, and a population is a group of one species in one area.",
      "BOOK (paraphrased): the horse fossil series from Eohippus, 55 million years ago, with several toes, to a one-hoof horse. (The rate debate, gradualism and punctuated equilibrium, is cut from this lesson.)",
    ],
    method: "TWO LAYERS, NAMED OUT LOUD. LAYER ONE IS WHAT CAN BE WATCHED AND MEASURED: variation, overproduction, Darwin's four ideas, natural selection shown in the 1977 finch drought, breeders, and why Lamarck was set aside. LAYER TWO IS A DIFFERENT KIND OF QUESTION, whether all living things came from one common ancestor over millions of years, which nobody watched and which can't be tested like a pea cross. Both answers are given in their own words, what the world says and what God tells us, and the student sorts statements into 'observed' and 'origin claim' without being asked to pick one.",
    exampleOnly: [
      "The pumpkin patch, the kitten litter, the Galapagos finches. WORLD: Darwin's voyage plus the pumpkin patch. The title and objective don't name them.",
      "⚠️ The finch-beak drought result and the date of Darwin's book are added from the record, see the header.",
      "Left out on purpose: gradualism, punctuated equilibrium and the word artificial selection.",
    ],
    digitize: "The reading engine. Four Watch It Worked walkthroughs (the pumpkin math, Darwin's four ideas listed with an example each, the finch drought in four steps, and a sorting walk). Questions sort statements into observed and origin claim. No answer key to a side, and the todo asks for a sorting list in the notebook, not an opinion.",
    unclear: "",
  },

  shelf: { grades: [7], subject: "Science",
    blurb: "Seventy seeds turn into nearly two hundred million, a young man sails to the Galapagos, and a question nobody watched. Darwin's four ideas listed, a finch story told step by step, and what can be seen happening against what is a claim about the beginning.",
    contains: [
      "The pumpkin math, worked out step by step",
      "Variation, population and species in plain words",
      "Darwin's four ideas, listed with an example each",
      "The 1977 finch drought, step by step",
      "Lamarck's idea, and why it was set aside",
      "Two answers to the origin question, in their own words",
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
        "Your student explains variation and natural selection, lists Darwin's four ideas, explains why Lamarck's idea was set aside, and sorts statements into what has been observed and what is a claim about origins."
      ]},
      { h: "Side by Side, Not Blended", p: [
        "This unit follows the site's rule for the origin question. What can be watched and measured is taught plainly. The question of where all living things came from is named as a different kind of question, and both answers are given in their own words under the labels what the world says and what God tells us.",
        "Your student is asked to sort statements into observed and origin claim, and is never asked to pick a side. Keeping the two apart is the honest way to study the subject, and the lesson says so out loud."
      ]},
      { h: "Key Concepts", p: [
        "Natural selection can be observed. Individuals in a population vary, more are born than can survive, those with helpful variations survive and reproduce more, and the helpful variations become more common. Both of the answers in this lesson accept that.",
        "Whether this process, carried on for millions of years, accounts for all living things coming from one ancestor is the origin question, and that's the part nobody watched."
      ]},
      { h: "Added From the Record", p: [
        "The year of Darwin's book (1859), the date the voyage began (1831), and the finch-beak result from the 1977 drought are added from the historical record. The pumpkin seeds, the kittens, the pigeons, Lamarck's bodybuilder and the horse fossils are from the textbook."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Seventy Seeds", s: [
      "Cut open a pumpkin and you'll find about seventy seeds, and every one of them could grow into a plant that makes two more pumpkins.",
      "That sounds like a small number, but each round multiplies the seeds by a lot, as the walk below shows.",
      "",
      "[walk] Follow one pumpkin's seeds through three growing seasons.",
      "[step] One pumpkin has 70 seeds, and each seed grows into a plant that makes 2 pumpkins with 70 seeds each, so each plant makes 140 seeds. || 2 pumpkins × 70 seeds = 140 seeds per plant",
      "[step] Plant all 70 seeds, and the next crop has 70 plants making 140 seeds each. || 70 × 140 = 9,800 seeds",
      "[step] Plant those 9,800 seeds, and the crop after that is 140 times bigger again. || 9,800 × 140 = 1,372,000 seeds",
      "[step] Plant those, and one more round gets you to nearly two hundred million. || 1,372,000 × 140 = 192,080,000 seeds",
      "",
      "Yet nobody's backyard is buried in pumpkins, because most seeds get eaten, dry out or land where nothing can grow.",
      "That gap between how many seeds there are and how many survive is where this whole lesson begins, so what decides which ones make it?"
    ]},

    { title: "A Young Man on a Ship", s: [
      "In 1831 a twenty-two-year-old naturalist named Charles Darwin boarded a ship called the Beagle for a voyage around the world.",
      "On the Galapagos Islands he found finches that differed from island to island, giant tortoises, and cacti unlike any he'd seen at home, and he couldn't stop wondering why.",
      "He spent about twenty years thinking it over before he published his book On the Origin of Species in 1859, and part of that time he bred pigeons to see for himself what a breeder could change."
    ]},

    { title: "No Two Kittens Alike", s: [
      "Look at a litter of kittens and you'll see it right away: one is orange, one is gray, one is bigger than the rest, and one has a longer tail.",
      "These differences are called {{variation}}, and they show up in every group of one kind of living thing in one place, which scientists call a {{population}}.",
      "A {{species}} is a group of living things that can breed together and have young that can have young too, and the kittens, the deer in a forest and the pumpkins in a field are each a population of one species.",
      "Some variations are small, like a longer tail, and some are striking, like an albino deer or a fruit with no seeds, and all of them get passed down."
    ]},

    { title: "Darwin's Four Ideas", s: [
      "Darwin put four ideas together, and each one is something you can check for yourself.",
      "Put the four together and you get his big idea, {{natural selection}}, which is the sorting that happens when the living things that fit their surroundings best leave the most young.",
      "",
      "[walk] List Darwin's four ideas, with an example for each.",
      "[step] The first idea is that more offspring are born than can survive, like the pumpkin seeds. || 1. More are born than survive.\n   (pumpkin seeds)",
      "[step] The second idea is that the offspring differ from each other, like the kittens. || 1. More are born than survive.\n2. They differ from each other.\n   (kittens)",
      "[step] The third idea is that some of those differences help an individual survive and have young. || 1. More are born than survive.\n2. They differ from each other.\n3. Some differences help.",
      "[step] The fourth idea is that over many generations, the helpful differences build up in the group, because the ones that have them leave more young. || 1. More are born than survive.\n2. They differ from each other.\n3. Some differences help.\n4. The helpful ones build up.",
      "",
      "People have summed it up as survival of the fittest, which means the ones that fit their surroundings best survive to reproduce, and that's not the same as the strongest."
    ]},

    { title: "Beaks in a Drought", s: [
      "You don't have to take those four ideas on faith, because one case has been measured.",
      "",
      "[walk] Follow the Galapagos finches through the 1977 drought.",
      "[step] Before the drought, the finches ate small, soft seeds, and their beaks varied a little from bird to bird. || soft seeds plentiful\nbeaks vary a little",
      "[step] A severe drought hit a small island, and the small, soft seeds ran out, leaving mostly big, hard ones. || soft seeds gone\nonly big, hard seeds left",
      "[step] Finches with deeper, stronger beaks could crack the hard seeds, so they survived in greater numbers. || deep beak  →  eats  →  survives\nshallow beak  →  can't crack seeds",
      "[step] When the next generation hatched, its average beak was measurably deeper. || next generation:\naverage beak deeper",
      "",
      "That's natural selection, seen and measured in a living population, and it's the part of this subject that nobody argues about.",
      "People also change living things on purpose, because a pigeon breeder picks the birds with the fanciest tails to be the parents, and in a few generations his flock looks very different from the wild bird it began as."
    ]},

    { title: "An Idea That Didn't Survive", s: [
      "Before Darwin, a French naturalist named Lamarck had a different idea, which he published in 1809.",
      "He said the things an animal gets during its life, like muscles from hard work, are passed on to its young, so the child of a bodybuilder would be born muscular.",
      "It sounds sensible until you test it, and the test is that genes, not habits, are what get inherited, and a bodybuilder's muscles don't change his genes.",
      "Scientists set Lamarck's idea aside for that reason, and it's an example of how this kind of question gets settled: somebody can check."
    ]},

    { title: "Two Kinds of Question", s: [
      "Look back at everything so far, and notice that every item on the list was something a person could watch, measure or repeat: the pumpkin math, the kittens, the finches' beaks after the drought, the pigeon breeder's flock and the failed test of Lamarck's idea.",
      "The word {{evolution}} covers all of that, in its smaller meaning, a change in the inherited traits of a population over generations, and everyone in this lesson agrees it happens.",
      "But the same word is also used for something much bigger, the claim that every living thing came from one common ancestor over millions of years.",
      "That's a different kind of question, because nobody was there to watch it, and you can't test it with a pea cross or a finch the way you can test a beak."
    ]},

    { title: "Two Answers to the Origin Question", s: [
      "People have given two answers to the bigger question, and a fair lesson states them in their own words.",
      "What the world says is common descent, which is Darwin's claim: all living things share one ancestor and have descended, with change, over millions of years, and its supporters point to fossils like the horse series, which runs from Eohippus about 55 million years ago, with several toes, to today's one-hoofed horse.",
      "What God tells us is creation, which is the account in the Bible's first book: God made living things and made them each “after his kind,” and the people who hold this view say variation and natural selection are real but work inside the kinds God made.",
      "",
      "[verse] Genesis 1:24 says, “And God said, Let the earth bring forth the living creature after his kind, cattle, and creeping thing, and beast of the earth after his kind: and it was so.”",
      "",
      "Notice what the two answers share, because both accept the finches, the kittens and the pumpkin seeds, and they part company only on the question of where living things came from in the first place."
    ]},

    { title: "Keeping Them Apart", s: [
      "A careful student of science keeps the two kinds of question apart, and that's the honest way to study this subject.",
      "What can be watched gets stated plainly as what's been seen, and a claim about the distant past gets stated as a claim, with the people who make it named.",
      "",
      "[walk] Sort four statements by asking who could have watched it.",
      "[step] Finches with deeper beaks survived the drought, and scientists measured the next generation, so a person could watch it. || finch beaks  →  OBSERVED",
      "[step] A litter of kittens has different colors, which anyone can see. || kitten colors  →  OBSERVED",
      "[step] All living things came from one ancestor over millions of years, which nobody was there to watch, and this is what the world says. || one ancestor  →  CLAIM ABOUT ORIGINS",
      "[step] God made each kind of living thing, which nobody was there to watch either, and this is what God tells us. || made after their kinds  →  CLAIM ABOUT ORIGINS",
      "",
      "The next lesson looks at the evidence for the bigger claim and doesn't take anyone's word for it.",
      "For now, the job is a sorting job, and the questions below ask you to put each statement in its place."
    ]}
  ],

  todo: { title: "What To Do Now", s: [
      "Seventy seeds, a ship, a drought and two answers to one old question, and the work now is sorting.",
      "Start with the {Q} questions, and then the {v} questions on the {c} word cards at the top of the page, {T} questions in all.",
      "When a question asks whether something has been observed or is a claim about origins, ask who could have watched it.",
      "Then, in your notebook, make two lists in complete sentences.",
      "Under the heading Observed, write three things from the lesson that a person could watch or measure.",
      "Under the heading Claims About Origins, write the two answers the lesson gave, each in a sentence and each in its own words.",
      "There's no answer key, and nobody is asking you which answer to hold, only whether you can say clearly what each one claims.",
      "Last, if the Homework Sheet button at the bottom of the page is lit up, print the sheet and do it on paper."
  ] },

  words: [
    ["Variation", "The differences between individuals of the same kind, like kittens in a litter.", 13],
    ["Population", "A group of one species living in one area.", 13],
    ["Species", "A group of living things that can breed together and have young that can have young too.", 14],
    ["Natural selection", "The process in which individuals with helpful variations survive and reproduce more, so those variations become more common.", 17],
    ["Evolution", "In its smaller meaning, a change in a population's inherited traits over generations. The same word is also used for the larger claim of one common ancestor.", 37]
  ],

  findsAt: 54,
  questions: [
    { q: "Why isn't the world buried in pumpkins, even though one pumpkin's seeds could produce nearly two hundred million?",
      find: [7,8],
      hint: "Read Seventy Seeds.",
      choices: [
        "Most seeds never grow, because they're eaten, dry out or land where nothing can grow.",
        "Pumpkins stop making seeds after one year.",
        "Every seed grows, but the plants shrink.",
        "Nobody has ever planted a pumpkin seed."
      ], right: 0,
      why: "Far more seeds are made than can survive." },

    { q: "What is variation?",
      find: [13],
      hint: "Read No Two Kittens Alike.",
      choices: [
        "A kind of mutation that happens only in labs.",
        "The differences between individuals of the same kind.",
        "A group of living things in one place.",
        "The process by which seeds are planted."
      ], right: 1,
      why: "Variation is the differences, like kittens with different colors." },

    { q: "Which of these is one of Darwin's four ideas?",
      find: [19],
      hint: "Read Darwin's Four Ideas.",
      choices: [
        "Individuals never differ from each other.",
        "Muscles from hard work are passed to young.",
        "More offspring are born than can survive.",
        "Every offspring survives."
      ], right: 2,
      why: "The first idea is that more are born than survive, like the pumpkin seeds." },

    { q: "In Darwin's four ideas, what happens to the helpful differences over many generations?",
      find: [22],
      hint: "Read the fourth idea.",
      choices: [
        "They disappear.",
        "They build up in the group, because the ones that have them leave more young.",
        "They are passed on only to the strongest.",
        "They turn into harmful differences."
      ], right: 1,
      why: "The helpful differences build up, and that's natural selection." },

    { q: "What happened to the finches' beaks after the 1977 drought?",
      find: [28,29],
      hint: "Read Beaks in a Drought.",
      choices: [
        "They got shorter and softer.",
        "Nothing changed.",
        "The finches grew wings.",
        "The next generation's average beak was deeper, because the deeper-beaked finches survived better."
      ], right: 3,
      why: "Deeper beaks could crack the hard seeds, so those finches survived more." },

    { q: "Why did scientists set Lamarck's idea aside?",
      find: [34,35],
      hint: "Read An Idea That Didn't Survive.",
      choices: [
        "Because Lamarck lived too long ago.",
        "Because genes, not habits, are what get inherited.",
        "Because muscles don't exist.",
        "Because Darwin said so."
      ], right: 1,
      why: "A bodybuilder's muscles don't change his genes." },

    { q: "Which of these is a claim about origins, and not something that has been watched?",
      find: [38,39],
      hint: "Read Two Kinds of Question.",
      choices: [
        "A litter of kittens has different colors.",
        "Finches with deeper beaks survived a drought.",
        "A pigeon breeder changed his flock in a few generations.",
        "All living things came from one common ancestor over millions of years."
      ], right: 3,
      why: "Nobody was there to watch the beginning of life, so it's a claim." },

    { q: "Which of these has been observed and measured?",
      find: [48],
      hint: "Ask who could have watched it.",
      choices: [
        "The beaks of one finch population changed after a drought.",
        "The first living thing appeared.",
        "Every kind of living thing came from one ancestor.",
        "Nobody has ever measured a living thing."
      ], right: 0,
      why: "Scientists measured the finches' beaks, so it was observed." },

    { q: "The lesson gives two answers to the origin question, what the world says and what God tells us. What do they share?",
      find: [44],
      hint: "Read Two Answers to the Origin Question.",
      choices: [
        "They agree that all life came from one ancestor.",
        "They both accept the observed variation and natural selection, and differ on where living things came from.",
        "They agree about the age of the earth.",
        "They agree that Lamarck was right."
      ], right: 1,
      why: "Both accept the finches, kittens and seeds, and part company only on the beginning." }
  ],

  vocabQuestions: [
    { q: "What is <i>variation</i>?",
      choices: ["The differences between individuals of the same kind", "A group of living things in one place", "A kind of seed", "A change in a person's habits"], right: 0 },
    { q: "What is a <i>population</i>?",
      choices: ["A single animal", "A kind of fossil", "A group of one species living in one area", "A type of seed"], right: 2 },
    { q: "What is a <i>species</i>?",
      choices: ["A pair of chromosomes", "A single gene", "A group of unrelated animals", "A group of living things that can breed together and have young that can have young too"], right: 3 },
    { q: "What is <i>natural selection</i>?",
      choices: [
        "A person choosing which animals to breed",
        "Individuals with helpful variations surviving and reproducing more, so those variations become more common",
        "A change in a person's habits",
        "A way of counting seeds"
      ], right: 1 },
    { q: "What does the word <i>evolution</i> cover in this lesson?",
      choices: [
        "Only changes that happen in a laboratory",
        "Only the claim of one common ancestor",
        "A change in a population's inherited traits, and also the larger claim of one common ancestor",
        "Only the study of fossils"
      ], right: 2 }
  ]
};
