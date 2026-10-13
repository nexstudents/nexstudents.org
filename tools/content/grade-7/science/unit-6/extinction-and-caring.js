/* science/extinction-and-caring
   Grade 7 · science · unit 6, lesson 3. Its home is this folder.
   Built by tools/lessons.js. Edit the lesson here, not in the registry.

   🚨 REWRITTEN 2026-10-13 (Sonnet, to be checked by Opus) after Kolten said the
   unit's lessons don't explain anything. An audit graded the 2026-10-11 version
   B-: a good story, but the dinosaur aside and the in vitro fertilization aside
   added noise. LIGHT TOUCH. Kept: Martha, natural extinction against what people
   added, the two rescues, the lifeboat and harbor, stewardship and the verse.
   CUT: the dinosaur sentence (it set what many scientists say against the Bible
   in a lesson that is not about origins, so the lesson now uses the mosasaur from
   the last lesson as its one example of a kind that is only found as fossils),
   the dodo, the in vitro fertilization paragraph and its word card (the tiger
   stays as one plain sentence), and the dated "a fourth of all species in 25
   years" guess. Word cards cut from 4 to 3. ADDED: a short recap of the last
   lesson, an everyday picture for adapting, a walk that sorts four causes into
   natural and added by people, and a drawn table of the two rescues built one
   row at a time.

   This lesson is not an origins argument, so there is no two-layer sort. It does
   one honest thing at the end: it says the work of caring for what remains is the
   same whichever account of origins a person holds, and keeps the accounts out.

   ⚠️ ADDED FROM THE RECORD, worth a glance from Paul:
   · The passenger pigeon (the last one, Martha, died at the Cincinnati Zoo in
     1914). The packet names no extinct species except the dinosaurs. Kept.
   · That the tiger count (3,000 to 5,000 Bengal tigers) is the 1994 book's own
     figure and has changed since. The lesson says both.
   ⚠️ The book's MiniLab/journal prompt on p144 was not captured and is not here.

   🚨 THE VERSE IS A WORKING CHOICE, NOT PAUL'S. Genesis 2:15, the plan's
   candidate, about tending and keeping. Choosing the scripture is his, so it
   goes in the review queue. */
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

module.exports = {
  id: "science/extinction-and-caring",
  slug: "extinction-and-caring",
  title: "Extinction, and Caring for What Remains",
  unit: "Life Science &middot; U6-L3",
  seq: { unit: 6, unitTitle: "Origins: Evolution and Creation, Side by Side", n: 3 },
  natural: "2026-10-13",

  /* ── /teach-plan, rewritten 2026-10-13. Merrill Life Science pp144-145. ── */
  plan: {
    objective: "Define extinction, tell the natural causes from the ones people add, and describe two ways endangered species are saved.",
    markers: [
      "BOOK (paraphrased), Objectives: define extinction and identify its causes, and name two ways endangered species may be saved.",
      "BOOK (paraphrased): extinction is the dying out of a species. It is a natural event, since environments change and only the species that adapt survive, and the fossil record shows large natural extinctions.",
      "BOOK (paraphrased): people have greatly raised the rate by destroying habitats and food supplies.",
      "BOOK (paraphrased): an endangered species has so few left that it is in danger of dying out. Way one is to keep the natural areas where it lives, so the population can rebuild, and the Nature Conservancy is the example. Way two is to breed them in captivity, as zoos do, and release them later.",
      "BOOK (paraphrased): Bengal tigers, then 3,000 to 5,000 in the wild, have been bred in zoos.",
      "BOOK (paraphrased), Section Review: why extinction is not always bad, and two ways to save endangered species.",
    ],
    method: "CAUSE, THEN CARE. Extinction is first taught as something that happens on its own when surroundings change, so the student isn't told every loss is somebody's fault. Then the human part is set beside it, homes and food destroyed faster than anything natural, with a walk that sorts four causes. The two rescues are built into a table one row at a time: protect the place, or breed the animals and let them go. It ends with stewardship, and says plainly that the caring is the same whichever account of origins a person holds.",
    exampleOnly: [
      "Martha the passenger pigeon and the Bengal tiger. WORLD: a species running out of room. The title and objective don't name them.",
      "⚠️ The passenger pigeon is added from the record, see the header.",
      "Left out on purpose: the dinosaur sentence, the dodo, in vitro fertilization, and the dated estimate about a fourth of all species.",
    ],
    digitize: "The reading engine plus two short Watch It Worked walkthroughs (sorting four causes, and a drawn table of the two rescues). Questions check the causes and the two rescues, and the one question on stewardship asks what the lesson says, not what to believe about origins.",
    unclear: "",
  },

  sheet: { slug: "extinction-and-caring-homework", subject: "science",
    note: "Do it on screen or print it. Your score shows here once you check it." },


  shelf: { grades: [7], subject: "Science",
    blurb: "The last passenger pigeon dies in a zoo in 1914. Why kinds of living things die out, how people have sped it up, and two ways to fight back.",
    contains: [
      "What extinction is, in plain words",
      "Four causes sorted into natural and added by people",
      "Two ways to save an endangered species, drawn as a table",
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
        "Your student defines extinction, separates natural causes from the ones people add, and describes two ways endangered species are saved: protecting the places they live and breeding them in captivity."
      ]},
      { h: "A Note on the Side-by-Side Rule", p: [
        "This lesson isn't an origins argument, and it states no ages and no claims about how long ago anything lived. The only fossil it mentions is the mosasaur from the last lesson. The caring at the end is described as the same work whichever account of origins a student holds.",
        "The lesson doesn't use extinction to argue for either account."
      ]},
      { h: "Key Concepts", p: [
        "Extinction is natural, but the rate matters. People have raised it by destroying habitat and food supplies, so most of what's being lost today is lost faster than a species can adapt.",
        "There are two kinds of rescue: save the place, or breed the animals and release them. The textbook says to do both."
      ]},
      { h: "Added From the Record", p: [
        "The passenger pigeon and Martha are added from the historical record. The tiger count is from 1994 and the lesson says it has changed. The textbook's own parts are the definition, the natural and human causes, the Nature Conservancy and the zoo breeding. The in vitro tiger paragraph and the dated estimate about a fourth of all species are left out on purpose."
      ]},
      { h: "Key Vocabulary", vocab: true }
    ]
  },

  parts: [
    { title: "Martha", s: [
      "In 1914 a bird named Martha died in the Cincinnati Zoo, and with her the passenger pigeon was gone forever.",
      "A hundred years earlier, flocks of passenger pigeons had darkened the sky for hours.",
      "So how does a bird that common disappear in one lifetime, and could it happen to other living things?"
    ]},

    { title: "What Extinction Is", s: [
      "Last lesson you read about fossils, like the mosasaur skull, and no one has ever found a living mosasaur.",
      "A species is one kind of living thing, like the passenger pigeon or the Bengal tiger.",
      "{{Extinction}} is the dying out of a whole species, which means the last one is gone and there's nobody left to have young.",
      "It sounds like a tragedy every time, and sometimes it is, but extinction is also something that happens on its own."
    ]},

    { title: "Some Extinction Is Natural", s: [
      "Surroundings keep changing, with climates warming and cooling, rivers shifting, and food supplies rising and falling.",
      "When that happens, the living things that can adapt keep going, and to adapt just means to adjust to new surroundings.",
      "The ones that can't adapt slowly die out, the way a fish can't adapt when its pond dries up.",
      "So extinction isn't always bad, since a species disappearing because its surroundings changed is part of how the living world works."
    ]},

    { title: "What People Added", s: [
      "The trouble today is the speed, because people have made extinction happen much faster than it does on its own.",
      "We do it mostly by destroying {{habitats}}, which are the places where living things make their homes, and by destroying their food.",
      "When a forest becomes a parking lot or a wetland is drained, the animals that lived there can't adapt in a single season.",
      "A species with so few left that it's in danger of dying out is called an {{endangered species}}.",
      "",
      "[walk] Sort four causes by asking whether people added them.",
      "[step] A river shifts and a wetland dries up on its own, which nobody caused. || river shifts  →  NATURAL",
      "[step] A forest is cleared to make a parking lot, which people did. || forest cleared  →  ADDED BY PEOPLE",
      "[step] The climate cools slowly over many years with no help from anyone. || climate cools  →  NATURAL",
      "[step] A wetland is drained for farmland, which people did. || wetland drained  →  ADDED BY PEOPLE"
    ]},

    { title: "Two Ways to Rescue a Species", s: [
      "There are two main ways to save an endangered species, and you can build them into a table one row at a time.",
      "",
      "[walk] Match each rescue to what it does.",
      "[step] The first is to protect the natural areas where the animals still live, so they have food and shelter and their numbers can grow again. || " + table([["Rescue", "What it does"], ["Save the place", "Keeps the home safe"]]),
      "[step] The second is to breed the animals in zoos and later let their young go back to the wild. || " + table([["Rescue", "What it does"], ["Save the place", "Keeps the home safe"], ["Breed and release", "Raises young in a zoo"]]),
      "[step] Together they work as a pair, because the animals need both a safe place and enough of them left to fill it. || " + table([["Rescue", "What it does"], ["Save the place", "Keeps the home safe"], ["Breed and release", "Raises young in a zoo"], ["Do both", "Animals and a place to go"]]),
      "",
      "Groups like the Nature Conservancy buy and protect land for the first kind of rescue.",
      "In 1994 only 3,000 to 5,000 Bengal tigers were left in the wild, and zoos have bred them too, though the number in the wild has changed since."
    ]},

    { title: "Why Both Are Needed", s: [
      "Breeding animals in a zoo does nothing if there's no safe place left to release them.",
      "Protecting land does little for an animal that has already dropped to a handful of survivors.",
      "Think of a lifeboat and a harbor, where the lifeboat keeps the animals alive for now and the harbor gives them somewhere to go afterward.",
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
      "A bird in a zoo, a table of two rescues and a question about what we owe the living things around us, and now it's your turn.",
      "Start with the questions, {Q} of them, and then the vocabulary check at the bottom, {v} questions on the word cards at the top of the page.",
      "When a question asks about a cause, check whether the lesson called it natural or something people added.",
      "Then, in your notebook, pick one endangered animal or plant that lives in your own state or one you're curious about.",
      "Write three or four complete sentences about it, saying what's threatening it and which of the two rescues you think would help it most, and why.",
      "There's no answer key for this part, and you'll be marked on whether your reasons are clear and use what the lesson taught.",
      "Last, open the Homework Sheet with the button at the bottom of the page, and either fill it out right on the screen or print it and do it on paper."
  ] },

  words: [
    ["Extinction", "The dying out of a whole species, so that none are left alive.", 5],
    ["Habitat", "The place where a living thing makes its home and finds food and shelter.", 12],
    ["Endangered species", "A species with so few left that it is in danger of dying out.", 14]
  ],

  findsAt: 36,
  questions: [
    { q: "What is extinction?",
      find: [5],
      hint: "Read What Extinction Is.",
      choices: [
        "Moving to a new habitat",
        "The dying out of a whole species, with none left to have young",
        "A change in an animal's color",
        "A species being kept in a zoo"
      ], right: 1,
      why: "Extinction is when the last one is gone." },

    { q: "Why does the lesson say extinction isn't always bad?",
      find: [10],
      hint: "Read Some Extinction Is Natural.",
      choices: [
        "Because people never cause it",
        "Because extinct animals come back",
        "Because it happens on its own when surroundings change, as part of how the living world works",
        "Because only plants go extinct"
      ], right: 2,
      why: "A species that can't adapt to new surroundings slowly dies out, and that's natural." },

    { q: "Which of these is a cause people added?",
      find: [17],
      hint: "Read the sorting walk in What People Added.",
      choices: [
        "A river shifts and a wetland dries up on its own",
        "The climate cools slowly over many years",
        "A forest is cleared to make a parking lot",
        "A fish can't adapt when its pond dries up"
      ], right: 2,
      why: "A parking lot is something people built." },

    { q: "How have people made extinction happen faster than it does on its own?",
      find: [12],
      hint: "Read What People Added.",
      choices: [
        "By destroying habitats and food supplies",
        "By building zoos",
        "By counting species",
        "By buying land"
      ], right: 0,
      why: "Losing their homes and food is what hurts living things most." },

    { q: "What is an endangered species?",
      find: [14],
      hint: "Read What People Added.",
      choices: [
        "A species that lives in a zoo",
        "A species with so few left that it's in danger of dying out",
        "A species that has already died out",
        "A species that is dangerous to people"
      ], right: 1,
      why: "Endangered means it could die out soon." },

    { q: "What is the first way to rescue an endangered species?",
      find: [22],
      hint: "Read Two Ways to Rescue a Species.",
      choices: [
        "Breed them in a zoo",
        "Move them to another country",
        "Protect the natural areas where they live so their numbers can grow",
        "Stop counting them"
      ], right: 2,
      why: "Save the place keeps the home safe." },

    { q: "What is the second way to rescue an endangered species?",
      find: [23],
      hint: "Read Two Ways to Rescue a Species.",
      choices: [
        "Stop people from visiting zoos",
        "Move all the animals to a city",
        "Breed them in zoos and later let the young go back to the wild",
        "Give them names"
      ], right: 2,
      why: "Breed and release raises young in a zoo." },

    { q: "Why does the lesson say both rescues are needed together?",
      find: [27, 28],
      hint: "Read Why Both Are Needed.",
      choices: [
        "Breeding needs a safe place to release the animals, and protected land does little for an animal down to a handful of survivors",
        "Zoos are cheaper than protecting land",
        "Protected land always has too many animals",
        "Breeding animals makes them extinct faster"
      ], right: 0,
      why: "The lifeboat keeps them alive and the harbor gives them somewhere to go." },

    { q: "What does the lesson say about the work of caring for the living things that are left?",
      find: [31],
      hint: "Read Looking After What You've Been Given.",
      choices: [
        "It is only for people who hold one account of origins",
        "It looks the same whichever account of origins a person holds",
        "It isn't needed, since extinction is natural",
        "It is the job of zoos alone"
      ], right: 1,
      why: "People on both sides can stand in the same wetland and agree on what it takes to save the birds." }
  ],

  vocabQuestions: [
    { q: "What is <i>extinction</i>?",
      choices: [
        "The dying out of a whole species, so that none are left alive",
        "A species moving to a new place",
        "A rise in a species' numbers",
        "A change in a species' diet"
      ], right: 0 },
    { q: "What is a <i>habitat</i>?",
      choices: [
        "A kind of food",
        "A zoo cage only",
        "The place where a living thing makes its home and finds food and shelter",
        "A fossil bed"
      ], right: 2 },
    { q: "What is an <i>endangered species</i>?",
      choices: [
        "A species that can't be bred in a zoo",
        "A species with so few left that it is in danger of dying out",
        "A species that is very large",
        "A species found only in rain forests"
      ], right: 1 }
  ]
};
