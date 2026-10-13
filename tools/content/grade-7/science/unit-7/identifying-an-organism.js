/* science/identifying-an-organism
   Grade 7 · science · unit 7 (book unit 7, "Classification of Living Things",
   shelved as "Sorting and Naming Living Things"), lesson 4. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 REWRITTEN 2026-10-13 (Sonnet, to be checked by Opus) after Kolten said the
   lessons don't explain anything. An audit graded the 2026-10-11 version B: the
   dichotomous key was written out as four paragraphs of "Pair 1 says 1a, ..."
   which nobody can follow by ear. This one SHOWS the key: a drawn table of
   numbered pairs (1a, 1b, 2a, 2b ...) built two rows at a time in a walk, then
   used on a pill bug in a second walk (the path grows a line at each step), then
   used again on a slug, then a third walk BUILDS a small key for four pets so he
   sees the key from the maker's side too.
   ⭐ THIS IS STILL THE METHOD LESSON OF THE UNIT. The book's beetle key (Table 7-2)
   and the jay key (Activity 7-2) were captured only in part, so this lesson uses a
   key of OUR OWN with the same shape. CUT: the stag beetle paragraph (a third
   example of the same method), the entomologist word, and the fourth "job" of a
   scientific name (filing and finding). Word cards stay at 4.

   🚨 ONE SENTENCE TOUCHES THE ORIGINS RULE. The book says organisms in the same
   genus have similar evolutionary histories. This lesson says the usual science
   reading is that a shared genus means closer kin, in one clause, and leaves
   the side-by-side treatment to the classification lesson. The questions never
   ask which to hold.

   ⚠️ ADDED FROM THE RECORD, worth a glance from Paul (all kept from the draft):
   · The key itself: five small garden animals and the scientific names we give
     them (Lasius niger, Araneus diadematus, Armadillidium vulgare, Lumbricus
     terrestris, Limax maximus). The names and the leg counts (six, eight,
     fourteen) are from the record, not from the packet. Armadillidium vulgare
     is the common pill bug and has seven pairs of legs.
   · The four-pet key (goldfish, parakeet, cat, dog) is made up for practice.
   ⚠️ The MiniLab (a made-up organism with a Latinized name), the Mohs scale
   Connect box and the Skill Builder on measuring beetles are not in this
   lesson.

   🚨 THE VERSE IS A WORKING CHOICE, NOT PAUL'S. Job 12:7-8, about asking the
   animals and the earth to teach you. Choosing the scripture is his, so it goes
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

/* the garden key, a pair of rows at a time */
const KEY = [
  ["Pair", "If the animal...", "Then"],
  ["1a", "has legs", "go to pair 2"],
  ["1b", "has no legs", "go to pair 4"],
  ["2a", "has six legs", "black garden ant, Lasius niger"],
  ["2b", "has more than six legs", "go to pair 3"],
  ["3a", "has eight legs", "garden spider, Araneus diadematus"],
  ["3b", "has fourteen legs", "pill bug, Armadillidium vulgare"],
  ["4a", "has a body made of rings", "earthworm, Lumbricus terrestris"],
  ["4b", "has a smooth, soft body with no rings", "gray garden slug, Limax maximus"],
];
/* a key the student sees being MADE, for four pets */
const PETS = [
  ["Pair", "If the pet...", "Then"],
  ["1a", "lives in water", "goldfish"],
  ["1b", "lives on land", "go to pair 2"],
  ["2a", "has feathers", "parakeet"],
  ["2b", "has fur", "go to pair 3"],
  ["3a", "meows", "cat"],
  ["3b", "barks", "dog"],
];

module.exports = {
  id: "science/identifying-an-organism",
  slug: "identifying-an-organism",
  title: "Identifying an Organism Yourself",
  unit: "Life Science &middot; U7-L4",
  seq: { unit: 7, unitTitle: "Sorting and Naming Living Things", n: 4 },
  natural: "2026-10-13",

  /* ── /teach-plan, rewritten 2026-10-13. Merrill Life Science pp166-170. ── */
  plan: {
    objective: "Explain why a scientific name is more useful than a common name, explain what a dichotomous key is for, and use one correctly, pair by pair, to name an organism.",
    markers: [
      "BOOK (paraphrased), Objectives: list reasons scientific names are more useful than common names, identify the function of a dichotomous key, and demonstrate how to use one.",
      "BOOK (paraphrased): the American robin (Turdus migratorius), the English robin (Erithacus rubecula, called redbreast in Europe) and the Australian yellow robin (Eopsaltria australis) share the word robin and are three different species, so common names confuse people from place to place.",
      "BOOK (paraphrased), jobs of a scientific name: it avoids errors in communication, it classifies organisms with similar evolutionary histories together so the same genus means more closely related, it gives descriptive information (migratorius means it migrates). A starfish isn't a fish, and a prairie dog is closer to a squirrel than to a dog.",
      "BOOK (paraphrased): no one knows every insect, so people use a field guide with a key. A key is a series of steps with two statements each (1a and 1b, 2a and 2b), always started at the first pair, and each choice ends in a species name or a 'go to' step.",
      "BOOK (paraphrased), Activity 7-2 Conclude: why you can't start in the middle of a key, and why a key to North American jays can't identify a robin.",
    ],
    method: "WHY NAMES, THEN SEE THE KEY, THEN USE IT, THEN MAKE ONE. First the problem: three birds called robin. Then what a scientific name fixes. The method the student must own is the key, so it is DRAWN as a table of numbered pairs, built two rows at a time. The rules (start at the first pair, pick the ONE statement that fits, follow the go-to, stop at a name, never start in the middle) are walked on a pill bug and a slug, and the last walk builds a key for four pets.",
    exampleOnly: [
      "The three robins, the garden animals in the key, and the four pets. WORLD: a few small animals under a flat stone. The title and objective don't name them.",
      "⚠️ The garden key, its scientific names and the leg counts are our own, from the record. The pet key is made up for practice.",
      "Left out on purpose: the stag beetle example, the word entomologist, and the file-and-find job of a name.",
    ],
    digitize: "The reading engine plus three Watch It Worked walkthroughs: the garden key drawn as a table two rows at a time, the pill bug and the slug taken through it with the path growing a line at each step, and a key built for four pets. Questions ask the student to follow the key on new animals, to say why a common name misleads, and to say why you can't start in the middle. The todo asks him to make a key for his own family.",
    unclear: "",
  },

  sheet: { slug: "identifying-an-organism-homework", subject: "science",
    note: "Do it on screen or print it. Your score shows here once you check it." },


  shelf: { grades: [7], subject: "Science",
    blurb: "Three different birds all get called a robin, and a starfish isn't a fish. How scientific names keep everyone talking about the same animal, and how a key can name an animal you've never seen.",
    contains: [
      "Why common names confuse, and what a scientific name fixes",
      "A dichotomous key drawn as numbered pairs, built a pair at a time",
      "Using the key on a pill bug and a slug, one pair at a time",
      "Making a key of your own, with four pets as the practice",
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
        "Your student explains why a scientific name is more useful than a common name, explains what a dichotomous key is for, and uses one correctly to name an organism."
      ]},
      { h: "A Note on the Side-by-Side Rule", p: [
        "This lesson isn't about origins. One sentence touches it: the textbook says organisms in the same genus have similar evolutionary histories. The lesson says that most science courses read a shared genus as closer kin, and points back to the unit where that reading and the other were set side by side. No question asks your student to hold either."
      ]},
      { h: "Key Concepts", p: [
        "A key works because every pair has exactly two choices and only one fits. The user picks the one statement that matches the organism, follows the go-to, and stops at a name.",
        "The method matters more than the animals. A student who can use this key can use any key, and a student who can make a four-pet key understands why a key is built the way it is."
      ]},
      { h: "Where Students Get Stuck", p: [
        "🚨 Starting in the middle of a key. A key always begins at the first pair, because the later pairs only make sense after the earlier ones have been answered.",
        "Choosing a statement that is almost true. If neither fits, recheck the animal, because a good key always has one that fits."
      ]},
      { h: "Added From the Record", p: [
        "The garden-animal key, its scientific names and the leg counts are our own and are added from the record, and the four-pet key is made up. The textbook's own parts are the three robins, the jobs of a scientific name and the field guide and key rules. The stag beetle example is left out."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Three Robins", s: [
      "A robin in North America is a plump brown bird with an orange chest that hops across lawns after rain.",
      "A robin in England is a smaller bird with a red face that sits on garden fences, and a robin in Australia is a yellow-bellied bird that clings to tree trunks.",
      "All three are called robins, and yet they're three different species.",
      "So when someone says “I saw a robin,” which bird do they mean?"
    ]},

    { title: "What a Scientific Name Fixes", s: [
      "Earlier in this unit you learned that every living thing has a two-word scientific name, with the genus first and the species second.",
      "A {{common name}} like robin changes from country to country, and sometimes from town to town, which is the very problem a {{scientific name}} was built to solve.",
      "It avoids mistakes, because Turdus migratorius is the American robin in every language on earth.",
      "It can also describe, since migratorius means the bird migrates, and two animals with the same genus are usually read as closer kin.",
      "Common names can mislead too, since a starfish isn't a fish at all, and a prairie dog is closer to a squirrel than to a dog."
    ]},

    { title: "No One Knows Every Insect", s: [
      "There are far too many living things for one person to know them all, even someone who studies insects for a living.",
      "So people carry a {{field guide}}, a book for naming living things, and most field guides use a tool called a {{dichotomous key}}.",
      "“Dichotomous” means divided into two parts, and that's the whole idea: every step gives you exactly two choices.",
      "Think of a game of twenty questions where each question has only two answers, and the last answer is the animal's name."
    ]},

    { title: "What a Key Looks Like", s: [
      "A key is a numbered list of pairs, and each pair has two statements, labeled a and b, such as 1a and 1b.",
      "Each statement ends in either a name or the words “go to” and a number, which sends you to the next pair.",
      "Here's a small key for five animals you might find under a flat stone in a garden, built two rows at a time.",
      "",
      "[walk] Build the garden key, one pair at a time.",
      "[step] Pair 1 asks whether the animal has legs, and if it does you go to pair 2, and if it doesn't you jump to pair 4. || " + table(KEY.slice(0, 3)),
      "[step] Pair 2 asks about six legs, and six legs is the black garden ant, while more than six sends you on to pair 3. || " + table(KEY.slice(0, 5)),
      "[step] Pair 3 asks whether the legs number eight or fourteen, which gives you the garden spider or the pill bug. || " + table(KEY.slice(0, 7)),
      "[step] Pair 4 is for the animals with no legs, and a body of rings is the earthworm while a smooth soft body is the gray garden slug. || " + table(KEY),
      "",
      "Notice that every pair has exactly two statements, and every path ends at a name."
    ]},

    { title: "Using the Key", s: [
      "You always start at pair 1, read both statements, and choose the one that matches the animal in front of you.",
      "Follow the go-to until you land on a name, and never start in the middle, because the later pairs only make sense after the earlier ones have been answered.",
      "",
      "[walk] Name a small gray animal with fourteen legs that curls into a ball when you touch it.",
      "[step] Begin at pair 1, the only place you're allowed to begin, and ask whether the animal has legs. || pair 1: has legs  →  1a  →  go to pair 2",
      "[step] At pair 2 the animal has fourteen legs, which is more than six, so 2b fits and sends you to pair 3. || pair 1: has legs  →  1a  →  go to pair 2\npair 2: more than six legs  →  2b  →  go to pair 3",
      "[step] At pair 3 the count is fourteen and not eight, so 3b fits. || pair 1: has legs  →  1a  →  go to pair 2\npair 2: more than six legs  →  2b  →  go to pair 3\npair 3: fourteen legs  →  3b",
      "[step] The choice 3b ends in a name instead of a go-to, so you stop there and say it as two words, genus first. || pair 1: has legs  →  1a  →  go to pair 2\npair 2: more than six legs  →  2b  →  go to pair 3\npair 3: fourteen legs  →  3b\nname:  Armadillidium vulgare, the pill bug",
      "",
      "[walk] Name a soft gray animal with no legs and no rings.",
      "[step] Begin at pair 1, and since the animal has no legs, 1b fits and sends you to pair 4. || pair 1: no legs  →  1b  →  go to pair 4",
      "[step] At pair 4 the body is smooth and soft with no rings, so 4b fits. || pair 1: no legs  →  1b  →  go to pair 4\npair 4: smooth, soft, no rings  →  4b",
      "[step] The choice 4b ends in a name, so you stop there. || pair 1: no legs  →  1b  →  go to pair 4\npair 4: smooth, soft, no rings  →  4b\nname:  Limax maximus, the gray garden slug"
    ]},

    { title: "Make a Key", s: [
      "You can build a key as well as use one, and the method is to split a group in two, one trait at a time.",
      "Watch it work on four pets, a goldfish, a parakeet, a cat and a dog.",
      "",
      "[walk] Build a key for the four pets.",
      "[step] Split the group in two with a trait that divides them cleanly, like whether the pet lives in water, and the goldfish is alone on one side. || " + table(PETS.slice(0, 3)),
      "[step] Split the land pets again, and feathers pick out the parakeet. || " + table(PETS.slice(0, 5)),
      "[step] Split the last two pets, and the cat meows while the dog barks. || " + table(PETS),
      "",
      "Test any key you make by asking someone else to use it, and if they land on the wrong animal, fix the pair where they went wrong.",
      "A key to beetles can name only beetles, and a key to jays couldn't name a robin, because every key is built for one particular group."
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
    ["Common name", "The everyday name for a living thing, which can change from place to place.", 5],
    ["Scientific name", "The two-word name, genus then species, that belongs to only one kind of living thing.", 5],
    ["Field guide", "A book used to name living things, often with a key.", 10],
    ["Dichotomous key", "A series of numbered pairs of statements that leads you to the name of a living thing.", 10]
  ],

  findsAt: 45,
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

    { q: "Which of these is one of the jobs of a scientific name?",
      find: [6],
      hint: "Read What a Scientific Name Fixes.",
      choices: [
        "It makes the animal easier to catch.",
        "It tells you the animal's weight.",
        "It avoids mistakes, because the same name is used everywhere.",
        "It makes the animal rarer."
      ], right: 2 },

    { q: "What does dichotomous mean?",
      find: [11],
      hint: "Read No One Knows Every Insect.",
      choices: [
        "Divided into two parts",
        "Hidden in a book",
        "Very large",
        "Older than a fossil"
      ], right: 0 },

    { q: "Where must you begin when you use a key?",
      find: [22],
      hint: "Read Using the Key.",
      choices: [
        "In the middle",
        "At pair 1",
        "At the last pair",
        "At any pair you like"
      ], right: 1 },

    { q: "An animal has legs, six of them. Using the garden key, what is it?",
      find: [18],
      hint: "Look at the table in What a Key Looks Like.",
      choices: [
        "The garden spider",
        "The pill bug",
        "The black garden ant",
        "The earthworm"
      ], right: 2 },

    { q: "An animal has eight legs. Using the garden key, what is it?",
      find: [19],
      hint: "Look at the table in What a Key Looks Like.",
      choices: [
        "The black garden ant",
        "The pill bug",
        "The earthworm",
        "The garden spider"
      ], right: 3 },

    { q: "An animal has no legs and a body made of rings. Using the garden key, what is it?",
      find: [20],
      hint: "Look at the table in What a Key Looks Like.",
      choices: [
        "The gray garden slug",
        "The pill bug",
        "The garden spider",
        "The earthworm"
      ], right: 3 },

    { q: "In the pill bug walk, why does the count of fourteen legs lead to 3b?",
      find: [27],
      hint: "Read Using the Key and use the Show All button.",
      choices: [
        "Because 3a says eight legs and 3b says fourteen legs.",
        "Because the pill bug has no legs.",
        "Because 3b is always the right choice.",
        "Because pair 3 is the last pair."
      ], right: 0 },

    { q: "A scientist says a key to North American jays couldn't identify a robin. What is the reason?",
      find: [40],
      hint: "Read Make a Key.",
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
        "A series of numbered pairs of statements that leads you to the name of a living thing.",
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
        "The two-word name, genus then species, that belongs to only one kind of living thing.",
        "The name a farmer uses.",
        "A nickname.",
        "A name that changes in every country."
      ], right: 0 },
    { q: "What is a <i>field guide</i>?",
      choices: [
        "A person who leads tours.",
        "A book used to name living things, often with a key.",
        "A tool for measuring soil.",
        "A kind of map."
      ], right: 1 }
  ]
};
