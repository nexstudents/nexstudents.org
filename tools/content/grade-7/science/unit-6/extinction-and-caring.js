/* science/extinction-and-caring
   Grade 7 · science · unit 6, lesson 3. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 THE PROSE IN `parts` IS A DRAFT, NOT PAUL'S VOICE. DRAFT PROSE, CLAUDE'S,
   2026-10-11, Sonnet. Written from Merrill Life Science pp144-145 (Section 6-3,
   Plant and Animal Extinction, a Science and Society section) via the week 8-9
   packet (paraphrased notes) and the week 8-9 plan.

   This lesson is not an origins argument, so there is no two-layer sort. It
   does one honest thing at the end: it says that the work of caring for what
   remains is the same whichever account of origins a person holds, and it
   keeps the two accounts out of it.

   ⚠️ ADDED FROM THE RECORD, worth a glance from Paul:
   · The dodo (last reliably seen in the 1600s) and the passenger pigeon (the
     last one, Martha, died at the Cincinnati Zoo in 1914) as the two named
     examples. The packet names no extinct species except the dinosaurs.
   · That the book's tiger count (3,000 to 5,000) and its one-fourth-in-25-years
     estimate are the 1994 book's own figures, and the lesson says so.
   ⚠️ The book's MiniLab/journal prompt on p144 was not captured and is not here.

   🚨 THE VERSE IS A WORKING CHOICE, NOT PAUL'S. Genesis 2:15, the plan's
   candidate, about tending and keeping. Choosing the scripture is his, so it
   goes in the review queue. */
'use strict';
module.exports = {
  id: "science/extinction-and-caring",
  slug: "extinction-and-caring",
  title: "Extinction, and Caring for What Remains",
  unit: "Life Science &middot; U6-L3",
  seq: { unit: 6, unitTitle: "Origins: Evolution and Creation, Side by Side", n: 3 },
  natural: "2026-10-11",

  /* ── /teach-plan, 2026-10-11. Merrill Life Science pp144-145. ── */
  plan: {
    objective: "Define extinction, tell the natural causes from the ones people add, and describe two ways endangered species are saved.",
    markers: [
      "BOOK (paraphrased), Objectives: define extinction and identify its causes, and name two ways endangered species may be saved.",
      "BOOK (paraphrased), opening: by the time you finish a paragraph a species may have died out, and some scientists estimate that a fourth of all plant and animal species could be extinct within 25 years.",
      "BOOK (paraphrased): extinction is the dying out of a species. It is a natural event, since environments change and only the species that adapt survive, and the fossil record shows large natural extinctions such as the dinosaurs.",
      "BOOK (paraphrased): people have greatly raised the rate by destroying habitats and food supplies.",
      "BOOK (paraphrased): an endangered species has so few left that it is in danger of dying out. Way one is to keep the natural areas where it lives, so the population can rebuild, and the Nature Conservancy is the example. Way two is to breed them in captivity, as zoos do, and release them later.",
      "BOOK (paraphrased): Bengal tigers, then 3,000 to 5,000 in the wild, have been bred by in vitro fertilization, with the embryos placed in a Siberian tiger acting as a foster mother.",
      "BOOK (paraphrased), Section Review: why extinction is not always bad, and two ways to save endangered species.",
    ],
    method: "CAUSE, THEN CARE. Extinction is first taught as something the fossil record shows happening on its own, so the student isn't told every loss is somebody's fault. Then the human part is set beside it, habitat and food destroyed faster than anything natural, and the two rescues are walked through as a pair: protect the place, or breed the animals and let them go. It ends with stewardship, and says plainly that the caring is the same whichever account of origins a person holds.",
    exampleOnly: [
      "The Bengal tiger and the foster mother, the dodo and the last passenger pigeon. WORLD: a species running out of room. The title and objective don't name them.",
      "⚠️ The dodo and the passenger pigeon are added from the record, see the header.",
    ],
    digitize: "The reading engine. Questions check the causes and the two rescues, and the one question on stewardship asks what the verse says, not what to believe about origins. No walk: the lesson has no method to step through.",
    unclear: "",
  },

  sheet: { slug: "extinction-and-caring-homework", subject: "science",
    note: "Do it on screen or print it. Your score shows here once you check it." },

  video: { id: "AUsxbO-59cE", title: "Why do animals become endangered?", channel: "Mystery Science",
    why: "Shows what actually pushes an animal toward the edge, with pictures, which makes the causes easier to keep straight." },

  shelf: { grades: [7], subject: "Science",
    blurb: "The last passenger pigeon dies in a zoo in 1914, and a tiger cub is born to a different kind of tiger. Why species die out, and two ways people have fought to save them.",
    contains: [
      "A story-form reading, read aloud with the words highlighted",
      "What extinction is, and why some of it is natural",
      "How people have sped it up",
      "Two ways to save an endangered species: protect the place, or breed and release",
      "What it means to look after what you've been given",
    ] },
  eyebrow: ["Life Science", "U6-L3", "Origins: Evolution and Creation, Side by Side"],
  dek: "A bird that once filled the sky was gone by 1914. What makes a kind of living thing disappear, and what can anyone do about it?",

  scripture: {
    ref: "Genesis 2:15",
    text: "And the LORD God took the man, and put him into the garden of Eden to dress it and to keep it.",
  },

  ground: {
    sections: [
      { h: "Lesson Goal", p: [
        "Students will define extinction, separate natural causes from the ones people add, and describe two ways endangered species are saved: protecting the places they live and breeding them in captivity."
      ]},
      { h: "A Note on the Side-by-Side Rule", p: [
        "This lesson isn't an origins argument, so there's no sorting of observed against claimed. The fossil record's natural extinctions are stated plainly, and the caring at the end is described as the same work whichever account of origins a student holds.",
        "The lesson doesn't use extinction to argue for either account."
      ]},
      { h: "Key Concepts", p: [
        "Extinction is natural, but the rate matters. People have raised it by destroying habitat and food supplies, so most of what's being lost today is lost faster than a species can adapt.",
        "There are two kinds of rescue: save the place, or breed the animals and release them. The book says to do both."
      ]},
      { h: "Added From the Record", p: [
        "The dodo and the last passenger pigeon are added from the historical record. The tiger numbers and the estimate of a fourth of all species are the 1994 book's own figures, and the lesson says they're dated. The book's own parts are the definition, the natural and human causes, the Nature Conservancy and the tiger embryo transfer."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Martha", s: [
      "In 1914 a bird named Martha died in the Cincinnati Zoo, and with her the passenger pigeon, once among the most common birds in North America, was gone forever.",
      "A hundred years earlier flocks of them had darkened the sky for hours, so how does a bird that common disappear in a lifetime?",
      "The book you're studying from asks a larger version of the same question, because it says that by the time you finish reading one paragraph a kind of living thing may have died out somewhere on earth.",
      "Some scientists at the time it was written guessed that a fourth of all plants and animals could be gone within 25 years, and that number is the book's own, from 1994."
    ]},

    { title: "What Extinction Is", s: [
      "{{Extinction}} is the dying out of a species, which means the last one is gone and there's nobody left to have young.",
      "The dodo, a bird that couldn't fly and lived on one island, was last seen in the 1600s, and Martha was the end of her whole kind.",
      "It sounds like a tragedy every time, and sometimes it is, but the book makes a point that may surprise you: extinction is also a natural event."
    ]},

    { title: "A Natural Event", s: [
      "Environments keep changing, with climates warming and cooling and rivers shifting and food supplies rising and falling.",
      "When that happens, the species that can adapt keep going, and the ones that can't slowly die out.",
      "The fossil record shows big extinctions long before people were around to cause them, and the dinosaurs are the best-known example.",
      "So the book says extinction isn't always bad, since a species disappearing because its surroundings changed is part of how the living world works."
    ]},

    { title: "What People Added", s: [
      "The trouble today is the speed, because people have raised the rate of extinction far above the natural one.",
      "We do it mostly by destroying {{habitats}}, the places where living things make their homes, and by destroying their food supplies.",
      "When a forest becomes a parking lot or a wetland is drained, the animals that lived there can't adapt in a season, and the species that were already few are the ones that go first.",
      "A species whose numbers have fallen so low that it's in danger of dying out has a name, and the name is an {{endangered species}}."
    ]},

    { title: "Rescue One: Save the Place", s: [
      "The book names two ways to save an endangered species, and the first is to protect the natural areas where it still lives.",
      "If a patch of wild land is left alone, the animals have food and shelter, and a population that was shrinking gets a chance to rebuild.",
      "Groups like the Nature Conservancy buy and protect land for exactly this reason.",
      "It's the simplest rescue, and it also protects every other plant and animal living in the same place."
    ]},

    { title: "Rescue Two: Breed and Release", s: [
      "The second way is to breed endangered animals in captivity, in zoos, and later let their young go back to the wild.",
      "Bengal tigers are the book's example, and in 1994 it said only 3,000 to 5,000 were left in the wild.",
      "Zoos tried something new called {{in vitro fertilization}}, in which an egg and a sperm are joined in a test tube, and then the tiny embryo is placed inside a different female to grow.",
      "That's how a Bengal tiger cub was born to a Siberian tiger acting as a foster mother, and scientists hoped to use the same method for other species.",
      "The book's conclusion is to do both things at once, protect what's left of the wild and breed in captivity, to slow extinction."
    ]},

    { title: "Why Both Rescues Are Needed", s: [
      "Breeding animals in a zoo does nothing if there's no place left to release them.",
      "Protecting land does little for an animal that has already dropped to a handful of survivors, which is why the two ideas work as a pair.",
      "Think of it as a lifeboat and a harbor, where one keeps the animals alive for now and the other gives them somewhere to go afterward.",
      "Neither is cheap, and neither works without people who are willing to spend years on it."
    ]},

    { title: "Looking After What You've Been Given", s: [
      "Whatever a person believes about where living things came from, the work of caring for the ones that are left looks the same.",
      "Someone who holds common descent and someone who holds creation can stand in the same wetland, count the same birds and agree on what it would take to save them.",
      "",
      "[verse] Genesis 2:15 says, “And the LORD God took the man, and put him into the garden of Eden to dress it and to keep it.”",
      "",
      "The words dress and keep mean to work the garden and to guard it, and for people who read the Bible that's an old description of a job: use the earth, and look after it.",
      "The questions below check what you've learned, and the notebook part asks you to think about one species yourself."
    ]}
  ],

  todo: { title: "What To Do Now", s: [
      "A bird in a zoo, a tiger cub with the wrong mother and a question about what we owe the living things around us, and now it's your turn.",
      "Start with the questions, {Q} of them, and then the vocabulary check at the bottom, {v} questions on the word cards at the top of the page.",
      "When a question asks about a cause, check whether the lesson called it natural or something people added.",
      "Then, in your notebook, pick one endangered animal or plant that lives in your own state or one you're curious about.",
      "Write three or four complete sentences about it, saying what's threatening it and which of the two rescues you think would help it most, and why.",
      "There's no answer key for this part, and you'll be marked on whether your reasons are clear and use what the lesson taught.",
      "Last, open the Homework Sheet with the button at the bottom of the page, and either fill it out right on the screen or print it and do it on paper."
  ] },

  words: [
    ["Extinction", "The dying out of a species, so that none are left alive.", 4],
    ["Endangered species", "A species with so few left that it is in danger of dying out.", 14],
    ["Habitat", "The place where a living thing makes its home and finds food and shelter.", 12],
    ["In vitro fertilization", "Joining an egg and a sperm in a test tube instead of inside the body.", 21]
  ],

  findsAt: 33,
  questions: [
    { q: "What is extinction?",
      find: [4],
      hint: "Read What Extinction Is.",
      choices: [
        "Moving to a new habitat.",
        "The dying out of a species, with none left to have young.",
        "A change in an animal's color.",
        "A species being kept in a zoo."
      ], right: 1 },

    { q: "Why does the book say extinction isn't always bad?",
      find: [6, 10],
      hint: "Read A Natural Event.",
      choices: [
        "Because people never cause it.",
        "Because extinct animals come back.",
        "Because it is part of how the living world works when surroundings change.",
        "Because only plants go extinct."
      ], right: 2 },

    { q: "Which is an example of a large natural extinction shown by the fossil record?",
      find: [9],
      hint: "Read A Natural Event.",
      choices: [
        "The passenger pigeon.",
        "The Bengal tiger.",
        "A forest turned into a parking lot.",
        "The dinosaurs."
      ], right: 3 },

    { q: "How have people raised the rate of extinction?",
      find: [12],
      hint: "Read What People Added.",
      choices: [
        "By destroying habitats and food supplies.",
        "By building zoos.",
        "By counting species.",
        "By buying land."
      ], right: 0 },

    { q: "What is an endangered species?",
      find: [14],
      hint: "Read What People Added.",
      choices: [
        "A species that lives in a zoo.",
        "A species whose numbers are so low it is in danger of dying out.",
        "A species that has already died out.",
        "A species that is dangerous to people."
      ], right: 1 },

    { q: "What is the first way the book says endangered species can be saved?",
      find: [15],
      hint: "Read Rescue One: Save the Place.",
      choices: [
        "Breed them in captivity.",
        "Move them to another country.",
        "Protect the natural areas where they live so the population can rebuild.",
        "Stop counting them."
      ], right: 2 },

    { q: "How was a Bengal tiger cub born to a Siberian tiger?",
      find: [21, 22],
      hint: "Read Rescue Two: Breed and Release.",
      choices: [
        "A Siberian tiger adopted a wild Bengal cub.",
        "Two tigers of different kinds mated in the wild.",
        "A zoo bought the cub from a hunter.",
        "A Bengal embryo made in a test tube was placed in a Siberian tiger acting as a foster mother."
      ], right: 3 },

    { q: "Why does the lesson say both rescues are needed together?",
      find: [24],
      hint: "Read Why Both Rescues Are Needed.",
      choices: [
        "Breeding needs a place to release the animals, and protected land does little for an animal down to a few survivors.",
        "Zoos are cheaper than protecting land.",
        "Protected land always has too many animals.",
        "Breeding animals makes them extinct faster."
      ], right: 0 },

    { q: "What does the lesson say about the work of caring for the living things that are left?",
      find: [28],
      hint: "Read Looking After What You've Been Given.",
      choices: [
        "It is only for people who hold one account of origins.",
        "It looks the same whichever account of origins a person holds.",
        "It is not needed, since extinction is natural.",
        "It is the job of zoos alone."
      ], right: 1 }
  ],

  vocabQuestions: [
    { q: "What is an <i>endangered species</i>?",
      choices: [
        "A species that can't be bred in a zoo.",
        "A species with so few left that it is in danger of dying out.",
        "A species that is very large.",
        "A species found only in rain forests."
      ], right: 1 },
    { q: "What is a <i>habitat</i>?",
      choices: [
        "A kind of food.",
        "A zoo enclosure only.",
        "The place where a living thing makes its home and finds food and shelter.",
        "A fossil bed."
      ], right: 2 },
    { q: "What is <i>in vitro fertilization</i>?",
      choices: [
        "Planting seeds in a greenhouse.",
        "Moving a tiger to a new zoo.",
        "Feeding a mother tiger extra food.",
        "Joining an egg and a sperm in a test tube."
      ], right: 3 },
    { q: "What is <i>extinction</i>?",
      choices: [
        "The dying out of a species, so that none are left alive.",
        "A species moving to a new place.",
        "A rise in a species' numbers.",
        "A change in a species' diet."
      ], right: 0 }
  ]
};
