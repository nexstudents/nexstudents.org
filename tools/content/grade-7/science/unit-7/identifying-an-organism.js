/* science/identifying-an-organism
   Grade 7 · science · unit 7 (book unit 7, "Classification of Living Things",
   shelved as "Sorting and Naming Living Things"), lesson 4. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 THE PROSE IN `parts` IS A DRAFT, NOT PAUL'S VOICE. DRAFT PROSE, CLAUDE'S,
   2026-10-11, Sonnet. Written from Merrill Life Science pp166-170 (Section 7-4,
   Identifying Organisms) via the week 8-9 packet (paraphrased notes) and the
   week 8-9 plan. Structure copied from science/what-evolution-claims.

   ⭐ THIS IS THE METHOD LESSON OF THE UNIT: how to use a dichotomous key. The
   book's beetle key (Table 7-2) and the jay key (Activity 7-2) were captured
   only in part, so this lesson uses a key of OUR OWN with the same shape
   (numbered pairs, 1a and 1b, "go to" until a name). The walk takes one animal
   through it, pair by pair. The book's one worked beetle example (the stag
   beetle, Lucanus elaphus) appears as a short mention only.

   🚨 ONE SENTENCE TOUCHES THE ORIGINS RULE. The book says organisms in the same
   genus have similar evolutionary histories. This lesson says the textbook
   reads a shared genus as closer kin, and points back to the last lesson, where
   both readings were set side by side. The questions never ask which to hold.

   ⚠️ ADDED FROM THE RECORD, worth a glance from Paul:
   · The key itself: five small garden animals and the scientific names we give
     them (Lasius niger, Araneus diadematus, Armadillidium vulgare, Lumbricus
     terrestris, Limax maximus). The names and the leg counts (six, eight,
     fourteen) are from the record, not from the packet. Armadillidium vulgare
     is the common pill bug and has seven pairs of legs.
   · That an entomologist is a scientist who studies insects (the packet uses
     the word without defining it).
   ⚠️ The MiniLab (a made-up organism with a Latinized name), the Mohs scale
   Connect box and the Skill Builder on measuring beetles are not in this
   lesson.

   🚨 THE VERSE IS A WORKING CHOICE, NOT PAUL'S. Job 12:7-8, about asking the
   animals and the earth to teach you. Choosing the scripture is his, so it goes
   in the review queue. */
'use strict';
module.exports = {
  id: "science/identifying-an-organism",
  slug: "identifying-an-organism",
  title: "Identifying an Organism Yourself",
  unit: "Life Science &middot; U7-L4",
  seq: { unit: 7, unitTitle: "Sorting and Naming Living Things", n: 4 },
  natural: "2026-10-11",

  /* ── /teach-plan, 2026-10-11. Merrill Life Science pp166-170. ── */
  plan: {
    objective: "List reasons a scientific name is more useful than a common name, explain what a dichotomous key is for, and use one correctly, pair by pair, to name an organism.",
    markers: [
      "BOOK (paraphrased), Objectives: list reasons scientific names are more useful than common names, identify the function of a dichotomous key, and demonstrate how to use one.",
      "BOOK (paraphrased): the American robin (Turdus migratorius), the English robin (Erithacus rubecula, called redbreast in Europe) and the Australian yellow robin (Eopsaltria australis) share the word robin and are three different species, so common names confuse people from place to place.",
      "BOOK (paraphrased), four jobs of a scientific name: it avoids errors in communication, it classifies organisms with similar evolutionary histories together so the same genus means more closely related, it gives descriptive information (migratorius means it migrates), and it lets information about organisms be organized and found efficiently. A starfish isn't a fish, and a prairie dog is closer to a squirrel than to a dog.",
      "BOOK (paraphrased): no one knows every insect, so people ask an entomologist or use a field guide with a key. A key is a series of steps with two statements each (1a and 1b, 2a and 2b), always started at the first pair, and each choice ends in a species name or a 'go to' step.",
      "BOOK (paraphrased), Table 7-2 and Figure 7-10: a stag beetle much longer than 20 mm, dark brown or black, about 50 mm long with overlapping mouth parts, is Lucanus elaphus, the giant stag beetle.",
      "BOOK (paraphrased), Activity 7-2 Conclude: why you can't start in the middle of a key, and why a key to North American jays can't identify a robin.",
    ],
    method: "WHY NAMES, THEN HOW A KEY WORKS, THEN USE ONE. First the problem: three birds called robin. Then the four jobs of a scientific name. The method the student must own is the key, so the lesson gives the rules (start at the first pair, pick the ONE statement that fits, follow the 'go to', stop at a name, never start in the middle) and the walk takes one animal through a small key of our own, pair by pair. The last part flips it: make a key by splitting a group in two, one trait at a time.",
    exampleOnly: [
      "The three robins, the pill bug, and the five garden animals in the key. WORLD: a few small animals under a flat stone. The title and objective don't name them.",
      "⚠️ The key, its scientific names and the leg counts are our own, from the record, see the header.",
    ],
    digitize: "The reading engine plus one Watch It Worked that takes a pill bug through a key, couplet by couplet. Questions ask the student to follow the key on new animals, to say why a common name misleads, and to say why you can't start in the middle. The todo asks him to make a key for his own family.",
    unclear: "",
  },

  sheet: { slug: "identifying-an-organism-homework", subject: "science",
    note: "Do it on screen or print it. Your score shows here once you check it." },


  shelf: { grades: [7], subject: "Science",
    blurb: "Three different birds all get called a robin, and a starfish isn't a fish. How scientific names keep everyone talking about the same animal, and how a key can name an animal you've never seen.",
    contains: [
      "A story-form reading, read aloud with the words highlighted",
      "Why common names confuse, and four jobs of a scientific name",
      "How a dichotomous key works, and the rules for using one",
      "Watch It Worked: naming a pill bug with a key, one pair at a time",
      "Making a key of your own",
      "What it means to ask the animals and the earth to teach you",
    ] },
  eyebrow: ["Life Science", "U7-L4", "Sorting and Naming Living Things"],
  dek: "You can name an animal you've never seen by answering a short run of two-choice questions. Here's the trick, and you'll do it yourself.",

  scripture: {
    ref: "Job 12:7-8",
    text: "But ask now the beasts, and they shall teach thee; and the fowls of the air, and they shall tell thee: Or speak to the earth, and it shall teach thee: and the fishes of the sea shall declare unto thee.",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will list reasons a scientific name is more useful than a common name, explain what a dichotomous key is for, and use one correctly to name an organism."
      ]},
      { h: "A Note on the Side-by-Side Rule", p: [
        "This lesson isn't about origins. One sentence touches it: the textbook says organisms in the same genus have similar evolutionary histories. The lesson says the textbook reads a shared genus as closer kin, and points back to the last lesson, where that reading and the other were set side by side. No question asks the student to hold either."
      ]},
      { h: "Key Concepts", p: [
        "A key works because every pair has exactly two choices and only one fits. The user picks the one statement that matches the organism, follows the go-to, and stops at a name.",
        "The method matters more than the animals. A student who can use this key can use any key."
      ]},
      { h: "Where Students Get Stuck", p: [
        "🚨 Starting in the middle of a key. A key always begins at the first pair, because the later pairs only make sense after the earlier ones have been answered.",
        "Choosing a statement that is almost true. If neither fits, recheck the animal, because a good key always has one that fits."
      ]},
      { h: "Added From the Record", p: [
        "The garden-animal key, its scientific names and the leg counts are our own and are added from the record. The book's own parts are the three robins, the four jobs of a scientific name, the field guide and key rules, and the stag beetle example."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Three Robins", s: [
      "A robin in North America is a plump brown bird with an orange chest that hops across lawns after rain.",
      "A robin in England is a smaller bird with a red face that sits on garden fences, and a robin in Australia is a yellow-bellied bird that clings to tree trunks.",
      "All three are called robins, and yet they're three different species, with names in the scientific system of Turdus migratorius, Erithacus rubecula and Eopsaltria australis.",
      "So when someone says “I saw a robin,” which bird do they mean?"
    ]},

    { title: "Four Jobs of a Scientific Name", s: [
      "A {{common name}} like robin changes from country to country, and sometimes from town to town, which is the very problem a {{scientific name}} was built to solve.",
      "First, it avoids mistakes, because Turdus migratorius is the American robin in every language on earth.",
      "Second, it groups organisms that are alike, so two animals in the same genus are closer kin, which is how the textbook reads it and which the last lesson set beside the other reading.",
      "Third, the name can describe, since migratorius means the bird migrates, and fourth, it lets scientists file and find what's known about an organism.",
      "Common names can mislead too, since a starfish isn't a fish at all, and a prairie dog is closer to a squirrel than to a dog."
    ]},

    { title: "No One Knows Every Insect", s: [
      "There are far too many living things for one person to recognize them all, even if that person studies insects for a living.",
      "A scientist who studies insects is called an entomologist, and even an entomologist looks things up in a {{field guide}}.",
      "Most field guides use a tool for naming an organism that you haven't met before, and the tool is called a {{dichotomous key}}.",
      "“Dichotomous” means divided into two parts, and that's the whole idea: every step gives you exactly two choices."
    ]},

    { title: "How a Key Works", s: [
      "A key is a numbered list of pairs, and each pair has two statements, labeled a and b, such as 1a and 1b.",
      "You always start at pair 1, read both statements, and choose the one that matches the organism in front of you.",
      "At the end of the statement you chose, there's either a name or the words “go to,” followed by a number, which sends you to the next pair.",
      "You keep following the go-tos until you land on a name, and you never start in the middle, because the later pairs only make sense after the earlier ones have been answered."
    ]},

    { title: "A Key to Five Garden Animals", s: [
      "Here's a small key for five animals you might find under a flat stone in a garden, and read it slowly, because you'll use it in a moment.",
      "Pair 1 says 1a, the animal has legs, go to pair 2, and 1b, the animal has no legs, go to pair 4.",
      "Pair 2 says 2a, the animal has six legs, and it's the black garden ant, Lasius niger, and 2b, it has more than six legs, go to pair 3.",
      "Pair 3 says 3a, the animal has eight legs, and it's the garden spider, Araneus diadematus, and 3b, it has fourteen legs, and it's the pill bug, Armadillidium vulgare.",
      "Pair 4 says 4a, the body is made of rings, and it's the earthworm, Lumbricus terrestris, and 4b, the body is smooth and soft with no rings, and it's the gray garden slug, Limax maximus."
    ]},

    { title: "Watch It Worked: Naming a Pill Bug", s: [
      "[walk] Use the key to name a small gray animal with fourteen legs that curls into a ball when you touch it.",
      "[step] Begin at pair 1, the only place you're allowed to begin, and ask whether the animal has legs. || 1a: has legs, go to pair 2\n1b: no legs, go to pair 4",
      "[step] It has legs, so choose 1a and follow the go-to to pair 2. || Now at pair 2",
      "[step] Count the legs, and since there are fourteen and not six, 2a doesn't fit and 2b does. || 2a: six legs, ant\n2b: more than six legs, go to pair 3",
      "[step] At pair 3 the count is fourteen and not eight, so 3b fits, and 3b ends in a name instead of a go-to. || 3a: eight legs, spider\n3b: fourteen legs, pill bug",
      "[step] Stop when you reach a name, and then say it as two words, genus first. || Armadillidium vulgare"
    ]},

    { title: "A Real Beetle", s: [
      "The textbook works one example with a key for beetles, and the beetle was much longer than 20 millimeters and dark brown, with large overlapping mouth parts.",
      "Following the pairs, it came to the giant stag beetle, Lucanus elaphus, and the point was the same as in the pill bug: answer a pair, follow the go-to, and stop at a name.",
      "A key to beetles can name only beetles, and a key to jays in North America couldn't name a robin, because every key is built for one particular group."
    ]},

    { title: "Make a Key", s: [
      "You can build a key as well as use one, and the method is to split a group in two, one trait at a time.",
      "Take your own family, and for the first pair you might pick a trait that divides everyone cleanly, like whether a person has glasses.",
      "Each half then splits again on a new trait, such as eye color or height, until every person ends up alone with a name.",
      "A key is only as good as its pairs, so test it by asking someone else to use it, and if they land on the wrong person, fix the pair where they went wrong."
    ]},

    { title: "Ask the Beasts", s: [
      "A key is a way to let the animal itself tell you what it is.",
      "",
      "[verse] Job 12:7-8 says, “But ask now the beasts, and they shall teach thee; and the fowls of the air, and they shall tell thee: Or speak to the earth, and it shall teach thee: and the fishes of the sea shall declare unto thee.”",
      "",
      "The old verse tells people to look closely at the living things around them and learn from what they see, and counting legs and checking a body for rings is exactly that kind of looking.",
      "The questions below ask you to follow the garden key on new animals, so use the Show All button on the walk if you need it."
    ]}
  ],

  todo: { title: "What To Do Now", s: [
      "Three robins, a flat stone with a pill bug under it and a key that names what it finds, and now it's your turn to use one.",
      "Start with the questions, {Q} of them, and then the vocabulary check at the bottom, {v} questions on the word cards at the top of the page.",
      "When a question gives you an animal, start at pair 1 of the garden key and follow the go-tos, and don't skip ahead.",
      "Then, in your notebook, make a dichotomous key for the people in your family, using a trait that splits them into two groups at each pair.",
      "Number the pairs 1a, 1b, 2a, 2b and so on, and end each path in a name or a go-to.",
      "Next, ask someone to use your key, and write one sentence about whether it worked.",
      "Last, open the Homework Sheet with the button at the bottom of the page, and either fill it out right on the screen or print it and do it on paper."
  ] },

  words: [
    ["Common name", "The everyday name for a living thing, which can change from place to place.", 4],
    ["Scientific name", "The two-word name, genus then species, that belongs to only one kind of organism.", 4],
    ["Field guide", "A book used to identify living things, often with a key.", 10],
    ["Dichotomous key", "A series of numbered pairs of statements that leads you to the name of an organism.", 11]
  ],

  findsAt: 39,
  questions: [
    { q: "Why can the word robin be confusing?",
      find: [2],
      hint: "Read Three Robins.",
      choices: [
        "Because robins can't fly.",
        "Because the same common name is used for different birds in different places.",
        "Because a robin has no scientific name.",
        "Because all robins are the same species."
      ], right: 1 },

    { q: "Which of these is one of the four jobs of a scientific name?",
      find: [5],
      hint: "Read Four Jobs of a Scientific Name.",
      choices: [
        "It makes the organism easier to catch.",
        "It tells you the organism's weight.",
        "It avoids mistakes, because the same name is used everywhere.",
        "It makes the organism rarer."
      ], right: 2 },

    { q: "What does the word migratorius in Turdus migratorius describe?",
      find: [7],
      hint: "Read Four Jobs of a Scientific Name.",
      choices: [
        "That the bird is red.",
        "That the bird is small.",
        "That the bird sings.",
        "That the bird migrates."
      ], right: 3 },

    { q: "What does dichotomous mean?",
      find: [12],
      hint: "Read No One Knows Every Insect.",
      choices: [
        "Divided into two parts.",
        "Hidden in a book.",
        "Very large.",
        "Older than a fossil."
      ], right: 0 },

    { q: "Where must you begin when you use a key?",
      find: [14],
      hint: "Read How a Key Works.",
      choices: [
        "In the middle.",
        "At pair 1.",
        "At the last pair.",
        "At any pair you like."
      ], right: 1 },

    { q: "An animal has legs, six of them. Using the garden key, what is it?",
      find: [19],
      hint: "Read A Key to Five Garden Animals.",
      choices: [
        "The garden spider.",
        "The pill bug.",
        "The black garden ant.",
        "The earthworm."
      ], right: 2 },

    { q: "An animal has no legs and a body made of rings. Using the garden key, what is it?",
      find: [21],
      hint: "Read A Key to Five Garden Animals.",
      choices: [
        "The gray garden slug.",
        "The pill bug.",
        "The garden spider.",
        "The earthworm."
      ], right: 3 },

    { q: "In the pill bug walk, why does the count of fourteen legs lead to 3b?",
      find: [26],
      hint: "Read Watch It Worked and use the Show All button.",
      choices: [
        "Because 3a says eight legs and 3b says fourteen legs.",
        "Because the pill bug has no legs.",
        "Because 3b is always the right choice.",
        "Because pair 3 is the last pair."
      ], right: 0 },

    { q: "A scientist says a key to North American jays couldn't identify a robin. What is the reason?",
      find: [30],
      hint: "Read A Real Beetle.",
      choices: [
        "Because robins aren't birds.",
        "Because every key is built for one particular group, and a robin isn't a jay.",
        "Because jays have no scientific name.",
        "Because keys only work on insects."
      ], right: 1 }
  ],

  vocabQuestions: [
    { q: "What is a <i>dichotomous key</i>?",
      choices: [
        "A key that opens a field guide.",
        "A list of kingdoms.",
        "A series of numbered pairs of statements that leads you to the name of an organism.",
        "A kind of fossil."
      ], right: 2 },
    { q: "What is a <i>common name</i>?",
      choices: [
        "The Latin name.",
        "A name found only in a key.",
        "The first word of a scientific name.",
        "The everyday name for a living thing, which can change from place to place."
      ], right: 3 },
    { q: "What is a <i>scientific name</i>?",
      choices: [
        "The two-word name, genus then species, that belongs to only one kind of organism.",
        "The name a farmer uses.",
        "A nickname.",
        "A name that changes in every country."
      ], right: 0 },
    { q: "What is a <i>field guide</i>?",
      choices: [
        "A person who leads tours.",
        "A book used to identify living things, often with a key.",
        "A tool for measuring soil.",
        "A kind of map."
      ], right: 1 }
  ]
};
