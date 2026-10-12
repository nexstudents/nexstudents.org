/* ─────────────────────────────────────────────────────────────────────────
   reading-homework.js — the PRACTICE half of the Science, History and English
   lessons of weeks 8-9 (2026-10-11). Same machinery as math-homework.js:
   rendered by homework-sheet.js (kind "homework", part kind "solve"), joined
   onto SHEETS in worksheets.js, linked from the lesson by `sheet: { slug }`.

   🚨 PAUL WANTS THESE HARDER, AND SHORT. Four parts, every one `solve`:
   A Key Words (a clue, he types the term) · B Show What You Know (cause,
   exception, compare) · C Put It to Work (a NEW case in the lesson's own world)
   · D Think It Through (two items, one sentence each, NO `check`, he marks them
   against the key). At least a third of the typed items need reasoning.
   🚨 FACTS ONLY FROM THE LESSON. A made-up practice case is fine; a new fact is not.
   🚨 `check` is the typed word or phrase, `a|b` for alternatives. Every check
   must appear in that item's `answer`, or the build fails.
   🚨 SIDE BY SIDE (Science U6): ask what each account CLAIMS, never which is true.
   No Scripture on any sheet.
   ───────────────────────────────────────────────────────────────────────── */
'use strict';

const sheet = (o) => Object.assign({
  grade: 7, grades: [7], kind: "homework",
  unit: "Homework &middot; answer key included",
  price: "$0", buy: null, art: false, thumb: false, online: true,
}, o);

/* a typed item: the problem, the key line, and the word or phrase that marks the box */
const c = (problem, answer, check) => Object.assign({ problem, answer }, { check });
/* a hand-marked item: no check, and the key says what a good answer must hold */
const hand = (problem, answer) => ({ problem, answer: "Answers vary. " + answer });
/* a lettered set that shares one stem; each row is [question, key line, check] */
const set = (problem, rows, table) => Object.assign({ problem },
  table ? { table } : {},
  { sub: rows.map(([q, answer, check]) => ({ q, answer, check })) });

const A = (note, items) => ({ kind: "solve", heading: "Key Words", note, key: "the answers.", items });
const B = (note, items) => ({ kind: "solve", heading: "Show What You Know", note, key: "the answers.", items });
const C = (note, items) => ({ kind: "solve", heading: "Put It to Work", note, key: "the answers.", items });
const D = (items) => ({ kind: "solve", heading: "Think It Through",
  note: "Answer each one in one sentence. You mark these yourself against the key.",
  key: "what a good answer includes.", items });

const READING_HOMEWORK = [

/* ── SCIENCE 6-2 ───────────────────────────────────────────────────────── */
sheet({
  subject: "Science", slug: "the-evidence-examined-homework", lesson: "science/the-evidence-examined",
  includedWith: "science/the-evidence-examined",
  title: "The Evidence, Examined Honestly: Homework",
  dek: "Put rock layers in order, tell what a clock in the rock assumes, and sort each find from what it is taken to mean.",
  blurb: "Homework for the lesson on evidence. Key words, layers to read, a new cliff to sort, and an answer key.",
  contains: [
    "Key words for fossils, layers and body parts",
    "Questions on dating that need you to think",
    "A new cliff to read, and new statements to sort into found and taken to mean",
    "An answer key",
  ],
  eyebrow: "Life Science &middot; U6-L2",
  signoff: "Ask two things about every piece of evidence: what was found, and what is it taken to mean?",
  howTo: {
    steps: [
      "A fossil is any trace of life from an earlier time, like bones, leaf imprints, casts or insects in amber. Most are found in sedimentary rock, which forms when mud and sand settle out of water and pack down in layers.",
      "Relative dating: in undisturbed rock, the lower layers were laid down first, so a lower fossil is older. It gives an order, not an age in years.",
      "Radioactive dating gives numbers. A radioactive element changes into a stable product at a steady rate, like uranium into lead, so more of the product means an older rock.",
      "That clock takes three things for granted: the rate stayed the same, the rock started with none of the product (or a known amount), and nothing was added or lost.",
      "For every kind of evidence, ask two things: what was found or measured, and what is it taken to mean? Both accounts accept the finds as real.",
      "Common descent reads the likenesses between living things as shared ancestors. Creation reads them as one Designer using good plans again and again. Say what each one claims, never which is true.",
    ],
    example: {
      problem: "Rock A has a lot of lead beside a little uranium. Rock B has mostly uranium and only a little lead. Which rock is older?",
      work: [
        ["Find the clue. Uranium changes into lead, so the lead is the new product.", ""],
        ["Recall the rule from the lesson. Each radioactive element changes at its own steady rate, so more lead beside the uranium means the clock has run longer.", "More lead = older rock"],
        ["Apply it. Rock A has more lead.", "Rock A is older"],
        ["Name what the answer takes for granted. The clock assumes the rate stayed the same, and that the rock started with none of the lead or a known amount.", ""],
      ],
    },
  },
  parts: [
    A("Type the word that fits each clue.", [
      c("You find the outline of a leaf pressed into mud that hardened long ago. What do we call a trace of life like this?", "Fossil. An imprint counts.", "fossil|fossils"),
      c("Mud and sand settle out of water and pack down in layers. What kind of rock forms?", "Sedimentary rock.", "sedimentary"),
      c("A dolphin's flipper and a person's arm are built on the same plan. What are such body parts called?", "Homologous structures.", "homologous"),
      c("A body part is small and seems to have little or no use. What word does the book use for it?", "A vestigial structure.", "vestigial"),
    ]),
    B("Short answers. Think before you type.", [
      c("The layers are undisturbed. A coiled snail shell sits below a fern leaf. Which fossil is older?", "The snail shell. Lower layers were laid down first.", "shell|snail"),
      c("Relative dating puts fossils in order. What does it not tell you about a fossil?", "How old it is in years. It gives an order, not a number.", "how old|age|years|number"),
      c("Uranium turns into lead at a steady rate. Which kind of dating uses that clock?", "Radioactive dating.", "radioactive"),
      c("Radioactive dating assumes the rate of change stayed what, all through the past?", "The same, or steady.", "same|steady|constant"),
      c("Only a tiny share of living things ever became fossils. Is the fossil record complete or incomplete?", "Incomplete, with pages missing.", "incomplete|not complete|gaps|missing"),
    ]),
    C("A new cliff, a new sort.", [
      set("A cliff by a lake has three undisturbed layers. The bottom holds a coiled shell, the middle a fish skeleton and the top a feather's imprint.", [
        ["Which fossil is the oldest?", "The shell, in the bottom layer.", "shell"],
        ["Which fossil is the youngest?", "The feather imprint, in the top layer.", "feather"],
        ["For the order rule to work, what must be true of the layers?", "They must be undisturbed, not folded or tipped.", "undisturbed|not folded|not tipped|not disturbed"],
      ]),
      c("Sort it: the bones in a bat's wing match the bones in a person's arm. Was that found and measured, or taken to mean something?", "Found or measured. Anyone can compare the bones.", "found|measured"),
      c("Sort it: the likeness between two animals shows they share an ancestor. Found and measured, or taken to mean?", "Taken to mean. Nobody watched the distant past.", "taken to mean|taken|interpretation|claim"),
      c("Common descent reads a likeness as shared ancestry. Who does creation say is behind the same likeness?", "One Designer, using a good plan again and again.", "designer|design"),
    ]),
    D([
      hand("Pick one of the five kinds of evidence. Say what was found and what it is taken to mean.",
        "A good answer names one kind (fossils, dating, body structures, embryos or DNA), says what was found or measured, and then says what it is taken to mean about where living things came from."),
      hand("Name one thing radioactive dating takes for granted, and say why it matters.",
        "A good answer names one assumption (the rate stayed the same, the rock started with none of the product or a known amount, or nothing was added or lost) and says that if it were wrong the age would be off."),
    ]),
  ],
}),

/* ── SCIENCE 6-3 ───────────────────────────────────────────────────────── */
sheet({
  subject: "Science", slug: "extinction-and-caring-homework", lesson: "science/extinction-and-caring",
  includedWith: "science/extinction-and-caring",
  title: "Extinction, and Caring for What Remains: Homework",
  dek: "Tell natural extinction from the kind people speed up, and match a rescue to a wetland bird in trouble.",
  blurb: "Homework for the extinction lesson. Key words, cause and effect, a new wetland bird to rescue, and an answer key.",
  contains: [
    "Key words for habitats and endangered species",
    "Cause-and-effect questions on why species disappear",
    "A new wetland bird to match to the two rescues",
    "An answer key",
  ],
  eyebrow: "Life Science &middot; U6-L3",
  signoff: "Protect the place, breed the animals, and do both at once.",
  howTo: {
    steps: [
      "Extinction is the dying out of a species: the last one is gone, and nobody is left to have young. An endangered species has so few left that it could die out soon.",
      "Some extinction is natural. Environments change, and species that can't adapt die out. The fossil record shows big extinctions long before people, and the dinosaurs are the best-known example.",
      "People have raised the rate far above the natural one, mostly by destroying habitats (the places living things make their homes) and food supplies.",
      "Rescue one is to protect the natural areas where the species still lives, so it has food and shelter and a chance to rebuild.",
      "Rescue two is to breed endangered animals in captivity, like in zoos, and later release the young. In vitro fertilization joins an egg and a sperm in a test tube, then the embryo grows inside a different female.",
      "The book's conclusion is to do both at once. Breeding needs a place to release the young, and protected land alone does little for a species down to a handful.",
    ],
    example: {
      problem: "A Bengal tiger cub was born to a Siberian tiger acting as a foster mother. How did that happen?",
      work: [
        ["Find the clue. The cub is a different kind of tiger from the mother, so the cub didn't start growing in her the usual way.", ""],
        ["Recall the method from the lesson. An egg and a sperm are joined in a test tube.", "In vitro fertilization"],
        ["The tiny embryo is then placed inside a different female, who carries it until the cub is born.", "The Siberian tiger was the foster mother"],
        ["Say which rescue it belongs to. It's breeding in captivity, so the young can be released later.", ""],
      ],
    },
  },
  parts: [
    A("Type the word that fits each clue.", [
      c("A marsh is drained and the birds lose the place where they make their homes. What word names that kind of place?", "Habitat.", "habitat|habitats"),
      c("No passenger pigeon is alive anywhere. What word names what happened to the species?", "Extinction. The species is extinct.", "extinct|extinction"),
      c("A species has so few left that it could die out soon. What is it called?", "An endangered species.", "endangered"),
      c("An egg and a sperm are joined in a test tube, and the embryo grows in a different female. What is the method called?", "In vitro fertilization.", "in vitro fertilization|in vitro"),
    ]),
    B("Short answers. Think about why.", [
      c("The fossil record shows big extinctions long before people lived. What is the best-known example?", "The dinosaurs.", "dinosaur|dinosaurs"),
      c("Environments change and some species die out naturally. What can't those species do?", "Adapt to the change.", "adapt"),
      c("People have raised the rate of extinction far above the natural one. How, mostly?", "By destroying habitats and food supplies.", "habitat|habitats|food"),
      c("A zoo breeds a rare animal, but no wild land is left. Why does the breeding fall short?", "There's nowhere to release the young.", "nowhere|release|no place"),
      c("Protecting land alone does little for an animal that has dropped to a handful. Why?", "Too few survivors are left to rebuild.", "few|survivors|handful"),
    ]),
    C("A new wetland bird, and the two rescues.", [
      set("A wetland bird has only forty pairs left after a marsh was drained for a parking lot.", [
        ["What is the bird's status now?", "An endangered species.", "endangered"],
        ["Which rescue protects the marsh that's left: protect the place, or breed and release?", "Protect the place.", "protect"],
        ["A zoo hatches twelve chicks. Which rescue is that?", "Breeding in captivity, to release later.", "breed|breeding|captivity"],
        ["Why will the zoo chicks still be in trouble if the rest of the marsh is paved over?", "They'd have no habitat to be released into.", "habitat|nowhere|release"],
        ["Which rescue should the book recommend for this bird?", "Both at once.", "both"],
      ]),
    ]),
    D([
      hand("Why do the two rescues work better as a pair than alone?",
        "A good answer says breeding keeps the animals alive now while protected land gives them somewhere to go afterward, so each one needs the other."),
      hand("Name one thing people do that harms a habitat, and match it to one of the two rescues.",
        "A good answer names a harm (clearing a forest, draining a wetland) and then a rescue that answers it (protect the natural area, or breed and release)."),
    ]),
  ],
}),

/* ── SCIENCE 6-4 ───────────────────────────────────────────────────────── */
sheet({
  subject: "Science", slug: "human-origins-two-accounts-homework", lesson: "science/human-origins-two-accounts",
  includedWith: "science/human-origins-two-accounts",
  title: "Human Origins: Two Accounts, Side by Side: Homework",
  dek: "Know the primate traits, sort what was found from what is claimed, and say what each account says.",
  blurb: "Homework for the human origins lesson. Key words, questions on primates and fossils, a sort, and an answer key.",
  contains: [
    "Key words for primates and hominids",
    "Questions on primate traits and the fossil finds",
    "A found-or-claim sort, and what each account says",
    "An answer key",
  ],
  eyebrow: "Life Science &middot; U6-L4",
  signoff: "Say what was found, say what is claimed, and say who claims it.",
  howTo: {
    steps: [
      "Primates are the monkeys, apes and humans. The book names three traits they all share: an opposable thumb that crosses the palm, binocular vision (both eyes face forward), and flexible shoulders and forelimbs that can rotate.",
      "The DNA of chimpanzees, gorillas and humans is very similar, and so are some proteins, like hemoglobin. Scientists lined up the code and counted the matches, and anyone can repeat the count.",
      "The textbook says hominids split off 4 to 6 million years ago. They were humanlike primates that walked upright and had a bigger brain than other great apes.",
      "The bones people point to are Dart's skull (early 1920s), Lucy (1974), Homo habilis with stone tools beside it, and Homo sapiens, which the book dates at about 300,000 years.",
      "Sort every statement. It's FOUND if anyone can look at it, measure it or date it. It's a CLAIM if it's about the distant past, which nobody watched and nothing can repeat.",
      "Common descent says people and the apes share an ancestor and the fossils are steps along the way. Creation says God made people on purpose, in his own image. Both accept that the bones were really found. Say what each claims, never which is true.",
    ],
    example: {
      problem: "A monkey swings from branch to branch. Which of the three primate traits makes that possible?",
      work: [
        ["Find the clue. The question is about swinging from branch to branch.", ""],
        ["Recall the three traits all primates share.", "1. An opposable thumb\n2. Binocular vision (eyes face forward)\n3. Flexible shoulders and forelimbs that can rotate"],
        ["Match the clue to a trait. Swinging needs arms that can rotate.", "Flexible shoulders"],
        ["Write the answer in a sentence.", "A monkey can swing because its shoulders and forelimbs are flexible and can rotate."],
      ],
    },
  },
  parts: [
    A("Type the word that fits each clue.", [
      c("A thumb crosses the palm and touches the tip of each finger. What kind of thumb is it?", "An opposable thumb.", "opposable"),
      c("Monkeys, apes and humans belong to one group of mammals. What is it called?", "The primates.", "primate|primates"),
      c("In the textbook, these are humanlike primates that walk upright and have a bigger brain than other great apes. What are they?", "Hominids.", "hominid|hominids"),
      c("What is the scientific name for modern humans, meaning wise human?", "Homo sapiens.", "homo sapiens|sapiens"),
    ]),
    B("Short answers. Think about why.", [
      c("Name one of the three traits that all primates share.", "An opposable thumb, forward-facing eyes (binocular vision) or flexible shoulders.", "thumb|thumbs|eyes|binocular|vision|shoulders|shoulder"),
      c("How does having both eyes face forward help a primate in the trees?", "It can judge how far away a branch is.", "far|distance|judge"),
      c("Hemoglobin is nearly the same in chimpanzees, gorillas and humans. What does that protein carry?", "Oxygen, in red blood cells.", "oxygen"),
      c("Lucy's leg and hip bones show what about the way she moved?", "She walked upright.", "upright|two feet|walked"),
      c("Why can't a claim about the distant past be tested by an experiment, according to the lesson?", "Nobody watched it, and nothing can repeat it.", "watched|repeat"),
    ]),
    C("Sort what was found from what is claimed, then say what each account says.", [
      set("Write FOUND if anyone can look at it, measure it or date it. Write CLAIM if it is a statement about the distant past that nobody watched.", [
        ["The skeleton's leg and hip bones are shaped for walking upright.", "FOUND. Anyone can look at the bones.", "found"],
        ["These fossils are a line of ancestors leading from the primates to people.", "CLAIM. Nobody watched it happen.", "claim"],
        ["The cave paintings in France show bison and horses.", "FOUND. They can be looked at and dated.", "found"],
      ]),
      c("According to the common-descent account, what do people and the apes share?", "An ancestor.", "ancestor|ancestors"),
      c("According to the creation account, in whose image were people made?", "In God's own image.", "god"),
    ]),
    D([
      hand("In one sentence, say what each account claims about where people came from.",
        "A good answer says common descent holds that people and the apes share an ancestor and the fossils are steps along the way, and the creation account holds that God made people on purpose, different from the animals, in his own image. It does not say which is true."),
      hand("Name one thing both accounts accept about the bones, and one thing they disagree on.",
        "A good answer says both accept that the bones were really found and measured, and that they disagree about what the bones say about where people came from."),
    ]),
  ],
}),

/* ── SCIENCE 6-5 REVIEW ────────────────────────────────────────────────── */
sheet({
  subject: "Science", slug: "science-unit-6-review-homework", lesson: "science/unit-6-review",
  includedWith: "science/unit-6-review",
  title: "Unit 6 Review: Homework",
  dek: "A look back over the whole unit: variation, fossils, extinction, primates, and the line between found and claimed.",
  blurb: "Homework for the Unit 6 review. Key words from every lesson, questions that mix the unit together, and an answer key.",
  contains: [
    "Key words from all four lessons of the unit",
    "Questions that reach back across the unit",
    "A new sort of found and claimed",
    "An answer key",
  ],
  eyebrow: "Life Science &middot; U6-L5",
  signoff: "For every statement in this unit, ask whether it was found or measured, or whether it is a claim about the past.",
  howTo: {
    steps: [
      "Variation and natural selection: members of a population differ (variation), and the ones with helpful variations leave more young. Genes, not habits, are what get inherited.",
      "Fossils and dating: relative dating orders fossils by their layers, with the lower ones older in undisturbed rock. Radioactive dating gives numbers and assumes the rate and the starting amount never changed.",
      "Extinction: some is natural, but people raised the rate by destroying habitats. The two rescues are to protect natural areas and to breed in captivity, and the book says do both.",
      "Primates and fossils: all primates share a thumb, forward-facing eyes and flexible shoulders. Know Dart's skull, Lucy, Homo habilis and Homo sapiens.",
      "For every statement, ask: was it found or measured, or is it a claim about the distant past that nobody watched?",
      "Common descent and creation each read the likenesses their own way. Say what each one claims, never which is true.",
    ],
    example: {
      problem: "A human arm, a dolphin's flipper, a bat's wing and a bird's wing hold nearly the same bones. Is that found or is it a claim?",
      work: [
        ["Ask the sorting question. Could you point at it, measure it or repeat it?", ""],
        ["Anyone can lay the bones side by side and compare them. That makes it a find.", "FOUND (homologous structures)"],
        ["Now look at what comes after. What the likeness says about where living things came from is about the distant past, which nobody watched and no experiment can repeat.", "That part is a claim"],
        ["Write the answer. The bones are found. What they mean about the beginning is a separate question.", ""],
      ],
    },
  },
  parts: [
    A("Type the word that fits each clue.", [
      c("Birds in one flock differ from each other in things like beak depth. What word names those differences?", "Variation.", "variation|variations"),
      c("Individuals with helpful variations survive and leave more young. What is this process called?", "Natural selection.", "natural selection"),
      c("Their atoms change to a stable product at a steady rate, and that puts numbers on an age. What are they?", "Radioactive elements.", "radioactive"),
      c("Putting fossils in order by their layers is called what kind of dating?", "Relative dating.", "relative"),
    ]),
    B("Short answers. Think back over the unit.", [
      c("The average beak was measurably deeper after the drought of 1977. What process does that show?", "Natural selection.", "natural selection|selection"),
      c("Lamarck's idea was set aside. What is inherited, genes or habits?", "Genes.", "gene|genes"),
      c("Radioactive dating assumes the rate stayed steady. Name one other thing it assumes never changed.", "The starting amount.", "starting amount|starting|amount"),
      c("Name one of the book's two ways to save an endangered species.", "Protect the natural areas where it lives, or breed it in captivity and release the young.", "protect|natural areas|breed|captivity|zoo"),
      c("Which skeleton, found in Ethiopia in 1974, was nearly complete?", "Lucy.", "lucy"),
      c("About how many years old does the book say Homo sapiens is?", "About 300,000 years.", "300 000|300000"),
    ]),
    C("A new sort for the whole unit.", [
      set("Write FOUND if it was found or measured, or CLAIM if it is a statement about the distant past.", [
        ["A rock layer holds a fish skeleton above a shell.", "FOUND. It can be looked at.", "found"],
        ["All living things share one ancestor.", "CLAIM. Nobody watched it.", "claim"],
        ["Uranium in a rock has changed into a measured amount of lead.", "FOUND. It was measured.", "found"],
        ["People are the end of a line that began in the primates.", "CLAIM. Nobody watched it.", "claim"],
      ]),
      c("Why are those two claims a different kind of question from the finds?", "Nobody watched them, and no experiment can repeat them.", "watched|repeat"),
      c("Both accounts accept the layers, bones, decay rates and DNA matches as real. Where do they part ways?", "On what those finds say about the beginning.", "mean|means|meaning|beginning"),
    ]),
    D([
      hand("In one sentence, say how you can tell whether a statement was found or is a claim.",
        "A good answer asks whether you could point at it, measure it or repeat it, and says a claim is about the distant past that nobody watched."),
      hand("In one sentence, say how each account reads the likenesses between living things.",
        "A good answer says common descent reads them as a sign of shared ancestors, and creation reads them as one Designer using a good plan again and again. It does not say which is true."),
    ]),
  ],
}),

/* ── SCIENCE 7-1 ───────────────────────────────────────────────────────── */
sheet({
  subject: "Science", slug: "why-we-sort-living-things-homework", lesson: "science/why-we-sort-living-things",
  includedWith: "science/why-we-sort-living-things",
  title: "Why We Sort Living Things: Homework",
  dek: "Know the sorting words, see why one old system broke down, and build and read two-part names.",
  blurb: "Homework for the sorting lesson. Key words, questions on Aristotle and Linnaeus, scientific names to read, and an answer key.",
  contains: [
    "Key words for classifying and naming",
    "Why a sorting system breaks, and why Latin was chosen",
    "Scientific names to read and compare",
    "An answer key",
  ],
  eyebrow: "Life Science &middot; U7-L1",
  signoff: "Genus first with a capital, species second in lowercase, and no two living things share a name.",
  howTo: {
    steps: [
      "To classify is to group things by how they're alike. Taxonomy is the science of grouping and naming living things. The largest group is a kingdom.",
      "Aristotle put living things into two kingdoms, plants and animals, and split the animals by where they live: on land, in water or in the air. It broke down because of exceptions, like a frog that lives in water as a tadpole and on land as an adult.",
      "Linnaeus grouped living things by their body structures instead of where they live. He also gave every organism a two-part name, called binomial nomenclature.",
      "The first word is the genus, a group of similar species, with a capital letter. The second word is the species, the smallest and most specific group, in lowercase. Both are written in italics or underlined.",
      "Two living things with the same genus are close relatives. The white oak (Quercus alba) and the red oak (Quercus rubra) share the genus Quercus.",
      "Linnaeus used Latin because scholars everywhere understood it and its words don't change. No two organisms may share a scientific name.",
    ],
    example: {
      problem: "Aristotle put plants in groups by their size and structure, so an apple tree and a maple tree went together. Why did that cause trouble?",
      work: [
        ["Find the clue. He grouped plants by size and structure, not by how closely related they are.", ""],
        ["Recall the lesson. Trees aren't all closely related. An apple tree is more like a rose bush than like a maple tree.", "apple tree is closer to a rose bush than to a maple"],
        ["Write the answer. Grouping by size, or by where something lives, was too rough, so people went looking for something better.", ""],
      ],
    },
  },
  parts: [
    A("Type the word that fits each clue.", [
      c("A store puts milk and cheese together because they are alike. What do we call grouping things this way?", "To classify them.", "classify|classifying|classification"),
      c("What is the science of grouping and naming living things called?", "Taxonomy.", "taxonomy"),
      c("What is the largest group in a classification system called?", "A kingdom.", "kingdom|kingdoms"),
      c("What is a two-word naming system, genus first and species second, called?", "Binomial nomenclature.", "binomial nomenclature|binomial"),
    ]),
    B("Short answers. Think about why.", [
      c("Aristotle split animals by where they live. Name one of his three places.", "On land, in water or in the air.", "land|water|air"),
      c("Why did the frog cause trouble for Aristotle's system?", "It lives in both places: water as a tadpole and land as an adult.", "both|tadpole|adult|water and on land|land and water"),
      c("Linnaeus grouped living things by their body structures instead of by what?", "Where they live.", "where they live|where|live|lives"),
      c("In a scientific name, which part is the smallest, most specific group?", "The species.", "species"),
      c("Why did Linnaeus write the names in Latin?", "Its words don't change, and scholars everywhere understood it.", "change|changing|scholars|everywhere"),
    ]),
    C("Read these scientific names, then answer.", [
      set("Felis catus is the house cat, Quercus alba is the white oak and Quercus rubra is the red oak.", [
        ["Which genus do the two oaks share?", "Quercus.", "quercus"],
        ["What is the species word in the red oak's name?", "Rubra.", "rubra"],
        ["Pretend a scientist names a new tree Quercus nova. Is it closer kin to the white oak or to the cat?", "The white oak, because it shares the genus Quercus.", "oak|white oak|quercus"],
      ]),
      c("When you build a name, which part do you pick first, the genus or the species?", "The genus.", "genus"),
      c("A scientist in Texas and one in Japan both write Felis catus. Why can they be sure it's the same animal?", "No two organisms may share a scientific name.", "share|no two"),
    ]),
    D([
      hand("Pick an animal or plant that doesn't fit one group in a sorting system based on where it lives. Say why.",
        "A good answer names a living thing that fits two groups, such as a frog in water as a tadpole and on land as an adult, and says the grouping was too rough."),
      hand("Why do scientists use a two-word Latin name instead of everyday names?",
        "A good answer gives at least one reason from the lesson: the name means the same in every country, Latin words don't change, or no two organisms share a name."),
    ]),
  ],
}),

/* ── SCIENCE 7-2 ───────────────────────────────────────────────────────── */
sheet({
  subject: "Science", slug: "how-scientists-classify-today-homework", lesson: "science/how-scientists-classify-today",
  includedWith: "science/how-scientists-classify-today",
  title: "How Scientists Classify Today: Homework",
  dek: "Sort new organisms into kingdoms with the four questions, and put the seven levels in order.",
  blurb: "Homework for the classification lesson. Key words, questions on kingdoms and levels, new organisms to place, and an answer key.",
  contains: [
    "Key words for cells and levels",
    "Questions on the kingdoms and the seven levels",
    "Three new organisms to place with the four questions",
    "An answer key",
  ],
  eyebrow: "Life Science &middot; U7-L2",
  signoff: "Four questions find the kingdom, and seven levels narrow it down to one species.",
  howTo: {
    steps: [
      "Today scientists look at more than what they can see. They use chemical makeup, genes, body structures, fossils and how the embryo develops. DNA can separate two species that look exactly alike.",
      "Four questions place almost any living thing in one of five kingdoms: does it have a nucleus, is it one cell or many, does it make its own food, and does it move?",
      "No organized nucleus means a prokaryote, and that's the Monera (bacteria). Every other kingdom is made of eukaryotes, cells with a true nucleus.",
      "Protists are eukaryotes of one or many cells, a catch-all group. Fungi don't move and can't make their own food. Plants are many-celled, don't move and make their own food. Animals are many-celled, move and eat.",
      "Inside a kingdom there are seven levels, always in this order: kingdom, phylum, class, order, family, genus, species. Remember it as King Philip Came Over For Good Soup. Each step down holds fewer organisms with more in common.",
      "Many books count six kingdoms by splitting the bacteria in two. The questions and the levels still work.",
    ],
    example: {
      problem: "Classify the Arctic wolf, starting from the biggest group and working down.",
      work: [
        ["Use the four questions. The wolf has a nucleus, has many cells, can't make its own food and moves. That's an animal.", "Kingdom: Animalia"],
        ["Go one level down. Animals with a backbone.", "Phylum: Chordata"],
        ["Hairy animals that feed their young milk.", "Class: Mammalia"],
        ["Meat-eating mammals, then the dog family inside them.", "Order: Carnivora\nFamily: Canidae"],
        ["Wolves, dogs and their closest kin, then the wolf itself. That gives the two-word name.", "Genus: Canis\nSpecies: Canis lupus"],
        ["Check that it narrowed at every step. The wolf's closest relative in the book is the dog, in the same genus.", "Canis lupus (wolf) and Canis familiaris (dog)"],
      ],
    },
  },
  parts: [
    A("Type the word that fits each clue.", [
      c("A bacterium's cell has no organized nucleus. What is a cell like that called?", "A prokaryote.", "prokaryote|prokaryotes|prokaryotic"),
      c("A cell has a true nucleus and parts wrapped in a membrane. What is it called?", "A eukaryote.", "eukaryote|eukaryotes|eukaryotic"),
      c("What is the level just below kingdom called?", "The phylum.", "phylum"),
      c("What does the book call an organism's evolutionary history?", "Phylogeny.", "phylogeny"),
    ]),
    B("Short answers. Think about why.", [
      c("Two species look exactly alike. What can separate them?", "Their DNA.", "dna|genes|genetic"),
      c("An organism gets its food from dead things, can't make its own and doesn't move. Which kingdom fits?", "The Fungi.", "fungi|fungus"),
      c("Many books today count six kingdoms by splitting one group in two. Which group?", "The bacteria (Monera).", "bacteria|monera"),
      c("Which level comes right after phylum?", "Class.", "class"),
      c("Which holds fewer organisms, an order or a family?", "A family. Each step down holds fewer.", "family"),
    ]),
    C("Three new organisms, and a few levels.", [
      c("Organism X has many cells and a nucleus. It makes its own food and doesn't move. Which kingdom?", "The Plants.", "plant|plants"),
      c("Organism Y is one cell with no organized nucleus. Which kingdom?", "The Monera.", "monera"),
      c("Organism W has many cells and a nucleus. It moves and eats other animals. Which kingdom?", "The Animals.", "animal|animals|animalia"),
      c("Two animals share a genus. Two others share only an order. By the book's reading, which pair is the closer relatives?", "The pair in the same genus.", "genus"),
      c("Put the last two levels in order, from the bigger group to the smaller. Type both.", "Genus, then species.", "genus then species|genus species"),
    ]),
    D([
      hand("How is a music store like the seven levels?",
        "A good answer says the store narrows from type to artist to title the way the levels narrow from kingdom to species, and each step holds fewer and has more in common."),
      hand("Name a living thing you know. Give its kingdom and one trait that put it there.",
        "A good answer names a real organism, a kingdom, and a trait that matches the four questions: a nucleus, one or many cells, makes its own food, or moves."),
    ]),
  ],
}),

/* ── SCIENCE 7-3 ───────────────────────────────────────────────────────── */
sheet({
  subject: "Science", slug: "the-rain-forest-homework", lesson: "science/the-rain-forest",
  includedWith: "science/the-rain-forest",
  title: "The Rain Forest, and What Is Being Lost: Homework",
  dek: "Why the forest matters, why the soil gives out, and what each side of the hard question says.",
  blurb: "Homework for the rain forest lesson. Key words, cause-and-effect questions, a farmer's case, and an answer key.",
  contains: [
    "Key words for the forest and its variety",
    "Questions on the air, the weather and the soil",
    "A farmer's case, and what each side of the hard question says",
    "An answer key",
  ],
  eyebrow: "Life Science &middot; U7-L3",
  signoff: "A farmer has to be part of any answer that works.",
  howTo: {
    steps: [
      "Deforestation is the destruction of forests. The book says more than 50 acres of tropical forest in South America are cleared every minute. These are the textbook's own 1994 estimates.",
      "Species diversity is the great variety of plants and animals in a place. A rain forest has more of it than almost anywhere, and only about 15 percent of the species there have even been identified.",
      "Clearing has two dangerous effects. One is on the air, because there are fewer plants to take in carbon dioxide and give off oxygen. The other is on the weather.",
      "Rain forest soil is poor. Most nutrients are held in the living plants, not the ground, so a cleared patch can be farmed for only a few years. Then the farmers cut new forest.",
      "The farmers aren't villains. Native people depend on farming and cutting the land to feed their families, so they have to be part of any answer that works.",
      "The hard question is whether the United States should buy the land and keep it from being cleared. One side says the forest matters to everyone. The other says the local people should decide, and the world should help them find another way to live. Say what each side says, never which is right.",
    ],
    example: {
      problem: "The book warns about the species of the world if the clearing doesn't slow. What could the world lose, and in how long?",
      work: [
        ["Find the clue. The question asks for a share of the species and a length of time.", ""],
        ["Recall the lesson. If the clearing doesn't slow, the world could lose a fourth of all the species alive today in about 30 years.", "1/4 of all species, in about 30 years"],
        ["Write the answer, and remember these numbers are the textbook's own 1994 estimates, a snapshot and not today's count.", ""],
      ],
    },
  },
  parts: [
    A("Type the word that fits each clue.", [
      c("A forest is cleared for farms or lumber. What is the destruction of forests called?", "Deforestation.", "deforestation"),
      c("A place holds a great variety of plants and animals. What is that variety called?", "Species diversity.", "species diversity|diversity"),
      c("A thick, warm tropical forest gets a great deal of rain. What kind of forest is it?", "A rain forest.", "rain forest|rainforest"),
      c("Plants take this gas in from the air, and animals give it off when they breathe out. What is it?", "Carbon dioxide.", "carbon dioxide|co2"),
    ]),
    B("Short answers. Think about why.", [
      c("About what percent of the species in the South American rain forests have even been identified?", "About 15 percent.", "15"),
      c("Clearing a rain forest has two dangerous effects. One is on the air. What is the other on?", "The weather.", "weather"),
      c("Why does clearing a huge forest change the air?", "There are fewer plants to take in carbon dioxide and give off oxygen.", "fewer|less|plants|trees"),
      c("Where are most of the nutrients in a rain forest held?", "In the living plants, not in the ground.", "plants|living plants|trees"),
      c("About how long can a cleared patch be farmed before the soil gives out?", "Only a few years.", "few"),
    ]),
    C("A farmer's case, and the hard question.", [
      c("A farmer has farmed his patch for a few years. What has happened to the soil?", "It's spent.", "spent|poor|used up|worn out"),
      c("What does he have to do next to grow his next crop?", "Cut new forest.", "new forest|cut|cuts|clear|clears"),
      c("The lesson says the farmer isn't the enemy of the forest. What must he be part of?", "Any answer that works.", "answer|solution"),
      c("One side of the hard question says the forest matters to everyone. Does it want the United States to buy the land and keep it, or the local people to decide?", "Buy the land and keep it from being cleared.", "buy"),
      c("The other side says the local people should decide. What does it say the rest of the world should help them find?", "Another way to live.", "another way|way to live"),
    ]),
    D([
      hand("Why does the book say the farmers aren't simply villains?",
        "A good answer says native people depend on farming and cutting the land to feed their families, the book compares it to the American pioneers, and any answer that works has to include them."),
      hand("Give one reason that one side of the hard question offers, in your own words.",
        "A good answer gives one reason from either side: the forest matters to everyone, a poor country shouldn't have to give up its only income, the people who live there should decide, or the world should help them find another way to live."),
    ]),
  ],
}),

/* ── SCIENCE 7-4 ───────────────────────────────────────────────────────── */
sheet({
  subject: "Science", slug: "identifying-an-organism-homework", lesson: "science/identifying-an-organism",
  includedWith: "science/identifying-an-organism",
  title: "Identifying an Organism Yourself: Homework",
  dek: "Use a new key to name animals under a board, and spot where a key goes wrong.",
  blurb: "Homework for the keys lesson. Key words, questions on how a key works, a brand-new key to follow, and an answer key.",
  contains: [
    "Key words for names, guides and keys",
    "Questions on how a key works and why a key has limits",
    "A brand-new key to follow on new animals",
    "An answer key",
  ],
  eyebrow: "Life Science &middot; U7-L4",
  signoff: "Start at pair 1, choose one of exactly two, and stop when you land on a name.",
  howTo: {
    steps: [
      "A common name, like robin, changes from place to place. A scientific name (genus, then species) belongs to only one kind of organism, so it avoids mistakes and lets scientists file what's known. Common names can mislead: a starfish isn't a fish.",
      "A field guide is a book for identifying living things. Many have a dichotomous key. Dichotomous means divided into two parts, so every step gives exactly two choices.",
      "A key is a numbered list of pairs, each with two statements labeled a and b, like 1a and 1b. Always start at pair 1, never in the middle.",
      "Pick the statement that matches the animal in front of you. It ends in either a name or the words go to a number. Follow the go-tos until you land on a name.",
      "Say the name as two words, genus first. Stop as soon as you reach a name.",
      "A key works only for the group it was built for. To make one, split a group in two by one trait at a time, then test it by asking someone else to use it.",
    ],
    example: {
      problem: "A small gray animal has fourteen legs and curls into a ball. The key: 1a has legs, go to pair 2. 1b no legs, go to pair 4. 2a six legs, black garden ant. 2b more than six legs, go to pair 3. 3a eight legs, garden spider. 3b fourteen legs, pill bug.",
      work: [
        ["Begin at pair 1, the only place you can begin. Does it have legs?", "1a: has legs, go to pair 2\n1b: no legs, go to pair 4"],
        ["It has legs, so choose 1a and go to pair 2.", ""],
        ["Count the legs. Fourteen is more than six, so 2b fits.", "2a: six legs, ant\n2b: more than six legs, go to pair 3"],
        ["At pair 3 the count is fourteen, so 3b fits. It ends in a name, so stop.", "3a: eight legs, garden spider\n3b: fourteen legs, pill bug"],
        ["Say the name as two words, genus first.", "Armadillidium vulgare"],
      ],
    },
  },
  parts: [
    A("Type the word that fits each clue.", [
      c("The everyday name for a living thing changes from town to town. What kind of name is it?", "A common name.", "common name|common"),
      c("The two-word name, genus then species, belongs to only one kind of organism. What is it?", "A scientific name.", "scientific name|scientific"),
      c("A book scientists use to identify living things, often with a key inside, is called what?", "A field guide.", "field guide"),
      c("A numbered list of pairs, each with exactly two choices, leads you to a name. What is it called?", "A dichotomous key.", "dichotomous key|dichotomous"),
    ]),
    B("Short answers. Think about why.", [
      c("Dichotomous means divided into how many parts?", "Two.", "two|2"),
      c("Where do you always begin in a key?", "At pair 1, the first pair.", "pair 1|1|one|first"),
      c("A key to beetles can't name a robin. Why not?", "Each key is built for one particular group.", "group|groups|kind|kinds"),
      c("A starfish is not a fish and a prairie dog is not a dog. What do those show about common names?", "Common names can mislead.", "mislead|misleading|wrong|confusing"),
      c("How can you test a key you built?", "Ask someone else to use it.", "someone else|another person|someone|friend|ask"),
    ]),
    C("Follow a brand-new key.", [
      set("Key to animals under a board. 1a: The body is made of rings, go to the earthworm, Lumbricus terrestris. 1b: No rings, go to pair 2. 2a: Six legs, the black garden ant. 2b: Eight legs, the garden spider.", [
        ["An animal has no rings and eight legs. What is it?", "The garden spider.", "garden spider|spider"],
        ["An animal has rings. Where does the key stop for it?", "At 1a, the earthworm.", "earthworm|1a"],
        ["Why does 1a have no go-to after it?", "It ends in a name.", "name"],
        ["What is the genus in Lumbricus terrestris?", "Lumbricus.", "lumbricus"],
        ["A student sees six legs and no rings and jumps straight to 2a. What did he skip?", "Pair 1, and its choice 1b.", "pair 1|1b|1"],
      ]),
    ]),
    D([
      hand("Write the first pair of a key that splits your family or your class into two groups.",
        "A good answer is two statements, labeled 1a and 1b, about one trait that divides the group cleanly, each pointing to a name or to pair 2."),
      hand("Why does a scientific name help you find what's known about an organism?",
        "A good answer says it belongs to only one kind of organism, so the same name always points to the same animal, and scientists can file and look up what is known about it."),
    ]),
  ],
}),

/* ── HISTORY U2-L8 ─────────────────────────────────────────────────────── */
sheet({
  subject: "History", slug: "the-franks-and-charlemagne-homework", lesson: "history/the-franks-and-charlemagne",
  includedWith: "history/the-franks-and-charlemagne",
  title: "The Franks and Charlemagne: Homework",
  dek: "Know the key words, tell cause from effect, and place new facts in the story of the empire.",
  blurb: "Homework for the Charlemagne lesson. Key words, cause-and-effect questions, facts to place, and an answer key.",
  contains: [
    "Key words for the Franks and their empire",
    "Questions on how Charlemagne ruled and why it fell apart",
    "New facts to place in the story",
    "An answer key",
  ],
  eyebrow: "World History &middot; U2-L8",
  signoff: "Counts, inspectors, laws and schools held the empire together, and only while one man was alive to run them.",
  howTo: {
    steps: [
      "The Franks were a Germanic people who built a strong kingdom in what's now France. Their leader Clovis became a Christian around 507, and most of his subjects followed, which tied the Franks to the church of Rome.",
      "Charlemagne's father was Pepin the Short, who took the crown in 751. Pope Leo III crowned Charlemagne emperor in Rome on Christmas Day in the year 800.",
      "Charlemagne spread Christianity by conquest and sometimes forced conversion. After a Saxon rebellion he ordered thousands of captives executed at Verden in 782.",
      "To hold a huge land together with no postal system, he used counts over the regions, inspectors sent in pairs to report back, laws written down, and a court school with scholars.",
      "He died in 814, and the empire had been held together by one man's will. In 843 his grandsons divided it in the Treaty of Verdun, a written agreement between rulers.",
      "A divided empire was weaker. Vikings, Muslim raiders and Magyars struck from three directions.",
    ],
    example: {
      problem: "Charlemagne could hardly write. Why did he gather scholars at his court in Aachen?",
      work: [
        ["Find the clue. He couldn't write well himself, yet he brought in scholars.", ""],
        ["Recall the lesson. He understood that an empire needs people who can write. Alcuin, an English monk, ran the court school and taught the sons of nobles.", "Scholars at Aachen, led by Alcuin"],
        ["Add what the monasteries did. They were asked to copy books and open schools throughout the empire.", ""],
        ["Write the answer in a sentence.", "An empire needs people who can write, so Charlemagne built a court school."],
      ],
    },
  },
  parts: [
    A("Type the word that fits each clue.", [
      c("What was the name of the Germanic people who built a strong kingdom in what is now France?", "The Franks.", "franks|frank"),
      c("Charlemagne gave a powerful landholder charge of each region. What was that landholder called?", "A count.", "count|counts"),
      c("What is a written agreement between rulers called?", "A treaty.", "treaty"),
      c("Pope Leo III crowned Charlemagne in Rome in the year 800. What title did the crowd give him?", "Emperor.", "emperor"),
    ]),
    B("Short answers. Think about why.", [
      c("Which Frankish leader became a Christian around 507, and most of his subjects followed?", "Clovis.", "clovis"),
      c("Which came first, Pepin the Short taking the crown or Charlemagne becoming emperor?", "Pepin taking the crown (751).", "pepin"),
      c("Why did Charlemagne send inspectors out in pairs?", "To keep the counts honest.", "honest|counts|report"),
      c("Why did he have the laws written down?", "A law kept only in memory is easy to change.", "easy to change|change|memory"),
      c("When Louis died, who fought over the empire?", "His three sons.", "sons|three sons"),
    ]),
    C("Place each new fact.", [
      c("The empire was split into three parts at Verdun. Did that make it stronger or weaker?", "Weaker.", "weaker|weak"),
      c("Raiders struck in the 800s: Vikings, Muslim raiders and one more group. Which one?", "The Magyars, horsemen from the east.", "magyar|magyars"),
      c("A Saxon rebellion ended with thousands executed at Verden. Was the Saxons' new faith chosen freely, or forced?", "Forced.", "forced|force"),
      c("A count and a bishop travel the regions and report back. Why would Charlemagne send them?", "To keep control of his counts.", "control|honest|counts|loyal"),
      c("Why did the empire last only as long as Charlemagne lived?", "It was held together by one man's will.", "will|one man|charlemagne"),
    ]),
    D([
      hand("How did Charlemagne hold a huge land together with no postal system?",
        "A good answer names at least two tools from the lesson: counts over the regions, inspectors who reported back, laws written down, and a court school with scholars."),
      hand("Name one cause of the empire falling apart after Charlemagne.",
        "A good answer gives one cause: it was held together by one man's will, his sons fought over it, the Treaty of Verdun divided it in three, or raiders struck from every side."),
    ]),
  ],
}),

/* ── HISTORY U2-L9 ─────────────────────────────────────────────────────── */
sheet({
  subject: "History", slug: "reading-the-map-homework", lesson: "history/reading-the-map",
  includedWith: "history/reading-the-map",
  title: "Reading the Map: Homework",
  dek: "Read coordinates, choose the right map, and explain how the land shaped the story.",
  blurb: "Homework for the map lesson. Key words, questions on maps and coordinates, new places to compare, and an answer key.",
  contains: [
    "Key words for geography and map lines",
    "Questions on three kinds of maps and on coordinates",
    "Two cities to compare and landforms to explain",
    "An answer key",
  ],
  eyebrow: "World History &middot; U2-L9",
  signoff: "Latitude first, longitude second, and the land explains a lot of the story.",
  howTo: {
    steps: [
      "Geography is the study of the earth's features and of how people live with them. Land decides a lot: mountains slow armies, rivers carry traders, deserts keep people moving, and a harbor makes a city rich.",
      "Pick the map that fits the question. A physical map shows mountains, rivers, deserts and seas. A political map shows borders, countries and capitals. A thematic map shows one kind of information, like climate or trade routes.",
      "Latitude lines run east and west and measure how far north or south of the equator a place is, up to 90 degrees. Longitude lines run through the poles and measure how far east or west of the prime meridian a place is, up to 180 degrees.",
      "A coordinate gives the latitude first and the longitude second, each with a letter: N or S, then E or W. Where the two lines cross is one exact place.",
      "To find a place, count from the equator to the latitude, then from the prime meridian to the longitude. Where your two fingers meet is the answer.",
    ],
    example: {
      problem: "A pilot has only two numbers to find a city: 41° N, 29° E. Which city is it?",
      work: [
        ["Start at the equator, 0 degrees of latitude, and count north up to 41. The N says north.", "0° (equator) up to 41° N"],
        ["Put a finger on that line. It runs east and west across southern Europe.", ""],
        ["Start at the prime meridian, 0 degrees of longitude, and count east over to 29. The E says east.", "0° (Greenwich) over to 29° E"],
        ["Put a second finger on that line. It runs north and south through the Black Sea and Turkey.", ""],
        ["Where your two fingers meet is the place. It's the narrow strait where Europe and Asia touch.", "41° N, 29° E = Constantinople (Istanbul)"],
      ],
    },
  },
  parts: [
    A("Type the word that fits each clue.", [
      c("These lines run east and west and measure how far north or south of the equator a place is. What are they?", "Latitude.", "latitude"),
      c("These lines run through the poles and measure how far east or west of the prime meridian a place is. What are they?", "Longitude.", "longitude"),
      c("What is the study of the earth's features and of how people live with them?", "Geography.", "geography"),
      c("Which kind of map shows mountains, rivers and seas?", "A physical map.", "physical|physical map"),
    ]),
    B("Short answers. Think about why.", [
      c("Which kind of map shows borders, countries and capitals?", "A political map.", "political"),
      c("Which kind of map shows one kind of information, like climate or trade routes?", "A thematic map.", "thematic"),
      c("In 41° N, 29° E, which number is the longitude?", "29° E, the second one.", "29"),
      c("What is the largest latitude north of the equator, in degrees?", "90 degrees.", "90"),
      c("What is the line at 0 degrees of longitude called?", "The prime meridian.", "prime meridian|prime"),
    ]),
    C("Two cities, and the land.", [
      set("Rome is at about 42° N, 12° E. Constantinople is at about 41° N, 29° E.", [
        ["Which city is farther north?", "Rome. 42 is more than 41.", "rome"],
        ["Which city is farther east?", "Constantinople. 29 is more than 12.", "constantinople"],
        ["A third city sits at 41° N, 12° E. It shares a latitude with which city, and a longitude with which?", "Same latitude as Constantinople, same longitude as Rome.", { "Same latitude as": "constantinople", "Same longitude as": "rome" }],
      ]),
      c("A trader wants to move goods across the plains of northern Europe. What natural feature carried goods faster than any road?", "Rivers.", "river|rivers"),
      c("Why could one city on the Bosporus control the sea routes between two continents?", "It sat on a narrow strait.", "strait|narrow"),
    ]),
    D([
      hand("Why do a physical map and a political map answer different questions?",
        "A good answer says a physical map shows the natural land, so it tells you why an army or a trader could or couldn't cross it, and a political map shows borders and who ruled."),
      hand("Pick one place from the unit and say how its land helped it.",
        "A good answer names a place and its land: Constantinople on the Bosporus, Baghdad on the Tigris, the Bedouin in the Arabian Desert, or the Pyrenees marking the Franks' line with Muslim Spain."),
    ]),
  ],
}),

/* ── HISTORY U2-L10 REVIEW ─────────────────────────────────────────────── */
sheet({
  subject: "History", slug: "history-unit-2-review-homework", lesson: "history/unit-2-review",
  includedWith: "history/unit-2-review",
  title: "Unit 2 Review: Homework",
  dek: "Look back over the East, Islam and early medieval Europe, and place new facts in the right story.",
  blurb: "Homework for the Unit 2 review. Key words, questions from every lesson, facts to place, and an answer key.",
  contains: [
    "Key words from across the unit",
    "Questions that reach back to Constantinople, Baghdad and the Franks",
    "New facts to place in the right story",
    "An answer key",
  ],
  eyebrow: "World History &middot; U2-L10",
  signoff: "Three worlds each tried to hold themselves together, and the land helped explain how.",
  howTo: {
    steps: [
      "Constantinople sat on a narrow strait where Europe meets Asia, safe behind its sea and double wall. Justinian gathered Rome's laws into one Code. The Ottoman Turks broke through its walls in 1453.",
      "One church became two. In July of 1054 a cardinal named Humbert laid a letter on the altar of Hagia Sophia, and the schism split the church into the Roman Catholic and the Eastern Orthodox.",
      "Islam began with Muhammad, and the Hijrah was in 622. The Abbasids founded Baghdad in 762 as a marketplace for the world, and the Mongols ended its golden age in 1258.",
      "In Spain, Cordoba became a city where Muslims, Jews and Christians shared books. The Pyrenees marked the line between the Franks and Muslim Spain.",
      "In the West, monks kept books alive. Charlemagne held a land together with counts, inspectors and a court school, but his grandsons split it in 843 and raiders struck from every side.",
      "To place a new fact, ask which of the three worlds it belongs to (Byzantine, Islamic or Frankish) and what happened just before it. The land often helps explain the event.",
    ],
    example: {
      problem: "The Seljuk Turks pressed on the Byzantines in the east. What did the Byzantines do in 1095?",
      work: [
        ["Find the clue. The question names the Seljuk Turks and the Byzantines, the people of the Eastern empire in Constantinople.", ""],
        ["Recall the lesson. In the east the Seljuk Turks pressed on the Byzantines.", ""],
        ["Find what the Byzantines did about it in 1095.", "They sent a call for help to the West"],
        ["Place it in the right story. This belongs to the Byzantine world, asking the Western world for help.", ""],
      ],
    },
  },
  parts: [
    A("Type the word that fits each clue.", [
      c("In 1054 the church split into the Roman Catholic and the Eastern Orthodox. What is such an official split called?", "A schism.", "schism"),
      c("Baghdad under the Abbasids was a civilization at its best. What do we call a time like that?", "A golden age.", "golden age"),
      c("A community where monks live, pray and work, apart from ordinary life, is called what?", "A monastery.", "monastery|monasteries"),
      c("The 843 agreement divided Charlemagne's empire in three. What kind of agreement is that?", "A treaty.", "treaty"),
    ]),
    B("Short answers. Think back over the unit.", [
      c("Which emperor gathered Rome's tangled laws into one Code?", "Justinian.", "justinian"),
      c("Who finally broke through Constantinople's walls in 1453?", "The Ottoman Turks.", "ottoman|turks"),
      c("Which city did the Abbasids found in 762 as a marketplace for the world?", "Baghdad.", "baghdad"),
      c("Who reached Baghdad in 1258 and ended its golden age?", "The Mongols.", "mongol|mongols"),
      c("Which Spanish city let Muslims, Jews and Christians share books?", "Cordoba.", "cordoba"),
    ]),
    C("Place each new fact in the right story.", [
      c("A cardinal named Humbert laid a letter on the altar of Hagia Sophia in July of 1054. What did that start?", "The schism between the churches.", "schism|split"),
      c("Vikings, Muslim raiders and Magyars struck the West in the 800s. What had just happened to Charlemagne's empire?", "His grandsons split it in three.", "split|divided|three"),
      c("Which came first, the Hijrah or the founding of Baghdad?", "The Hijrah (622).", "hijrah"),
      c("Monks copied books in their scriptoriums while the cities emptied and the schools closed. What did that keep alive?", "Learning, through the books.", "learning|books|reading"),
      c("The Pyrenees marked the line between the Franks and which neighbor?", "Muslim Spain.", "spain|muslim spain"),
    ]),
    D([
      hand("Pick one of the three worlds, the Byzantine, the Islamic or the Frankish. What held it together?",
        "A good answer names one world and one thing that held it together: Constantinople's walls, strait and law Code, the faith and Baghdad's marketplace and learning, or Charlemagne's counts, inspectors and schools."),
      hand("Give one example from this unit of the land helping to explain an event.",
        "A good answer pairs a landform with an event: the Bosporus made Constantinople rich, the Tigris gave Baghdad its markets, the desert made the Bedouin travelers, or the Pyrenees held a line in Spain."),
    ]),
  ],
}),

/* ── HISTORY U3-L1 ─────────────────────────────────────────────────────── */
sheet({
  subject: "History", slug: "what-feudalism-actually-was-homework", lesson: "history/what-feudalism-actually-was",
  includedWith: "history/what-feudalism-actually-was",
  title: "What Feudalism Actually Was: Homework",
  dek: "Read a new chain of lords, knights and serfs, and say who owes whom what.",
  blurb: "Homework for the feudalism lesson. Key words, questions on the oath and the pyramid, a new village to read, and an answer key.",
  contains: [
    "Key words for the feudal order",
    "Questions on the oath, the pyramid and the serf",
    "A new village chain to read",
    "An answer key",
  ],
  eyebrow: "World History &middot; U3-L1",
  signoff: "Everyone owed someone above him, and the one at the bottom owed the most and held the least power.",
  howTo: {
    steps: [
      "Feudalism was a system in which land was given in return for loyalty and service. It grew up after Charlemagne's empire split, when the kings were too weak to protect people.",
      "A lord was a powerful noble with more land than he could farm or defend. He gave a piece of it, a fief, to a lesser noble, his vassal, who was bound to serve him. Many vassals were knights.",
      "An oath made it binding. The vassal knelt and swore to be loyal. Almost nobody could write, so a man's word was the only contract there was.",
      "The deal ran both ways. The vassal owed service in the lord's army and court, plus taxes. The lord owed the vassal land and protection.",
      "Stacked up, it's a pyramid: the king on top, then church officials and great nobles, then knights, and the serfs at the bottom. A vassal can be a lord to someone below him.",
      "A serf lived and worked on a lord's land, gave up much of what he grew, and got a roof and protection. He was bound to the soil and couldn't leave. He owed the most and held the least power.",
    ],
    example: {
      problem: "In the 880s, wealth was land and not coins. Why?",
      work: [
        ["Find the clue. The question asks why wealth changed from coins to land.", ""],
        ["Recall the lesson. Trade had shrunk and the cities were small, so wealth was no longer coins in a city.", ""],
        ["Recall what land gave a powerful man: farms, forests and streams that could feed an army.", ""],
        ["Write the answer in a sentence. With trade shrunk, wealth was land, and land could feed soldiers. Land given for protection is what historians call feudalism.", ""],
      ],
    },
  },
  parts: [
    A("Type the word that fits each clue.", [
      c("Land was given in return for loyalty and service. What was this system called?", "Feudalism.", "feudalism|feudal system|feudal"),
      c("What was a piece of land that a lord gave to a lesser noble called?", "A fief.", "fief"),
      c("What was a noble bound to serve a lord in return for land called?", "A vassal.", "vassal"),
      c("What was a peasant bound to a lord's land and not free to leave called?", "A serf.", "serf"),
    ]),
    B("Short answers. Think about why.", [
      c("What made the agreement between lord and vassal binding?", "An oath.", "oath|promise"),
      c("Who sat at the top of the pyramid?", "The king.", "king"),
      c("The oath wasn't sworn between a rich man and a poor one. Who swore it to each other?", "Two nobles, who each had something the other needed.", "nobles|two nobles|noble"),
      c("What did a serf get in return for working the land?", "A roof and the lord's protection.", "roof|protection|shelter"),
      c("If a new lord took over the land, what happened to the serf, and why?", "He stayed, because he was bound to the soil.", "bound|soil|stayed"),
    ]),
    C("Read the new village, then answer.", [
      set("The king gives Lord Edric a large piece of land. Edric gives a fief to Sir Garrett, a knight. Tam the serf farms Garrett's fief.", [
        ["Who is Lord Edric's vassal?", "Sir Garrett.", "garrett"],
        ["What does Sir Garrett owe Lord Edric?", "His sword, days of service and a share of taxes.", "service|sword|taxes"],
        ["What does Lord Edric owe Sir Garrett?", "Protection, and the fief.", "protection|fief|land"],
        ["Who owes the most and holds the least power?", "Tam, the serf.", "tam|serf"],
        ["Garrett swears the oath to Edric and is owed work by Tam. Where does he stand in the pyramid: top, middle or bottom?", "In the middle.", "middle"],
      ]),
    ]),
    D([
      hand("Why did an oath matter so much in this world?",
        "A good answer says almost nobody could write, so a man's word was the only contract there was."),
      hand("Say what the serf gave and what he got, and why he held the least power.",
        "A good answer says the serf worked the land and handed over most of the crops, got shelter and protection, and could not leave, so he owed the most and had the least power."),
    ]),
  ],
}),

/* ── ENGLISH U2-L6 ─────────────────────────────────────────────────────── */
sheet({
  subject: "English", slug: "setting-and-sensory-details-homework", lesson: "english/setting-and-sensory-details",
  includedWith: "english/setting-and-sensory-details",
  title: "Setting and Sensory Details: Homework",
  dek: "Name the sense behind each detail, give a complete setting, and tell how a place pushes back.",
  blurb: "Homework for the setting lesson. Key words, questions on senses and mood, new Yukon lines to sort, and an answer key.",
  contains: [
    "Key words for setting, senses and mood",
    "Questions on how a place acts on a character",
    "New lines from the frozen creek to sort by sense",
    "An answer key",
  ],
  eyebrow: "English 7 &middot; U2-L6",
  signoff: "Ask which part of your body would notice it, and give both the when and the where.",
  howTo: {
    steps: [
      "The setting is the time and place where a story happens. That means both when and where. Weather counts too. Always give both halves.",
      "Sensory details are things you could see, hear, touch, smell or taste if you were there.",
      "To sort a detail, ask: which part of my body would notice this? Eyes are sight, ears are hearing, skin is touch, nose is smell and mouth is taste.",
      "Some details come from the same cause but belong to different senses. In the story, the cold makes spit crackle (hearing) and makes cheeks go numb (touch).",
      "A writer rarely uses all five senses at once. She picks the ones that fit the moment.",
      "A setting can act on a character, and it gives a feeling called mood. Pull the man out of the Yukon and drop him in Florida, and the story disappears.",
    ],
    example: {
      problem: "Which senses does this line use? \"The kitchen smelled of burnt toast, and the radio crackled in the corner.\"",
      work: [
        ["Take one detail at a time. For each, ask which part of your body would notice it.", ""],
        ["Burnt toast is something you notice with your nose.", "burnt toast = SMELL"],
        ["A crackling radio is something you notice with your ears.", "crackled = HEARING"],
        ["The line never says how the kitchen looks. A writer picks the senses that fit the moment.", "Two senses: smell and hearing"],
      ],
    },
  },
  parts: [
    A("Type the word that fits each clue.", [
      c("What is the time and place where a story happens called?", "The setting.", "setting"),
      c("Details you could see, hear, touch, smell or taste if you were there are called what?", "Sensory details.", "sensory details|sensory"),
      c("A gray sky, a silence and an empty trail make a story feel lonely. What is that feeling called?", "The mood.", "mood"),
      c("A full setting has two halves. Name either one.", "When, or where. The time, or the place.", "when|where|time|place"),
    ]),
    B("Short answers. Think about why.", [
      c("A numb nose is noticed with which sense?", "Touch, through the skin.", "touch|skin|feel"),
      c("A sentence says the sky was gray and flat. Which sense notices that?", "Sight.", "sight|see|seeing"),
      c("Why does a writer rarely use all five senses at once?", "She picks the ones that fit the moment.", "fit|moment|scene|picks"),
      c("The cold in the Yukon story isn't just scenery. What else does it act as?", "Part of a character's work. It acts on the man.", "character|acts"),
      c("The same sentence about a nine o'clock walk feels safe on a beach and risky on a frozen creek. What changed the feeling?", "The setting.", "setting"),
    ]),
    C("New lines from the frozen creek. Sort them by sense.", [
      c("The creek ice groaned under his boots, and the air tasted of metal. Which two senses are these?", "Groaning is hearing, and the metal air is taste.",
        { "Groaning ice": "hearing", "Metal air": "taste" }),
      c("The frozen ground bit through his mittens until his fingers ached. Which sense is the aching?", "Touch.", "touch|feel|feeling"),
      c("The fire crackled and spat sparks, and the whole camp smelled of wet wool. Which sense does the smell use?", "Smell.", "smell"),
      c("A man waits at the edge of a frozen creek at dusk in January. Give both halves of the setting.", "When: dusk in January. Where: the edge of a frozen creek.",
        { "When": "dusk|january", "Where": "creek" }),
      c("A writer wants a lonely, dangerous mood. Which detail fits better: a loud crowd cheering, or an empty trail under a gray sky?", "The empty trail under a gray sky.", "empty trail|gray sky|trail"),
    ]),
    D([
      hand("Write one sentence about a place you know that uses at least two senses.",
        "A good answer names a real place and has details for at least two different senses, such as a sound and a smell, not just the word \"nice\"."),
      hand("How does the cold in the Yukon story act like a character?",
        "A good answer says it acts on the man: it numbs his face, hides traps under the snow and takes away what his hands can do."),
    ]),
  ],
}),

/* ── ENGLISH U2-L7 ─────────────────────────────────────────────────────── */
sheet({
  subject: "English", slug: "figures-of-speech-homework", lesson: "english/figures-of-speech",
  includedWith: "english/figures-of-speech",
  title: "Figures of Speech: Homework",
  dek: "Tell a simile from a metaphor in new lines about a frog and a bog, and say what each comparison shows.",
  blurb: "Homework for the figures of speech lesson. Key words, questions on how to tell them apart, new lines in the poem's world, and an answer key.",
  contains: [
    "Key words for figures of speech",
    "Questions on the three moves that tell them apart",
    "New lines about frogs, bogs and fame to name",
    "An answer key",
  ],
  eyebrow: "English 7 &middot; U2-L7",
  signoff: "Find the two things, look for like or as, then name it and say what it makes you see.",
  howTo: {
    steps: [
      "Literally means exactly what the words say. A figure of speech describes one thing in terms of something very different, so the words aren't literally true but the picture is.",
      "Use three moves on any figure of speech. First, find the two things being compared.",
      "Second, look between them for the word like or as.",
      "Third, name it. A simile uses like or as. A metaphor skips the little word and says one thing is the other.",
      "Then ask what the two things have in common. A metaphor only works if the reader can find something they share.",
      "Two more figures: personification gives human feelings to something that isn't human, and hyperbole stretches the truth on purpose. Don't stop at the name. Say what the comparison makes you see.",
    ],
    example: {
      problem: "Name the figure of speech: \"The classroom was a zoo before the bell rang.\"",
      work: [
        ["Find the two things being compared.", "the classroom and a zoo"],
        ["Look between them for like or as. There's neither. The sentence just says it was a zoo.", ""],
        ["No like or as means it's a metaphor.", "METAPHOR"],
        ["Ask what they have in common. A zoo is loud, crowded and a little wild.", "the room was loud, crowded and wild"],
      ],
    },
  },
  parts: [
    A("Type the word that fits each clue.", [
      c("Words mean exactly what they say, with nothing figured. What word describes that way of speaking?", "Literally.", "literally|literal"),
      c("A comparison of two different things uses the word like or as. What is it?", "A simile.", "simile"),
      c("A comparison says one thing is another, with no like or as. What is it?", "A metaphor.", "metaphor"),
      c("A phrase describes one thing in terms of something very different, so it isn't literally true. What is it called?", "A figure of speech.", "figure of speech|figure"),
    ]),
    B("Short answers. Think about why.", [
      c("Which little word announces a simile?", "Like (or as).", "like"),
      c("What is the first of the three moves for any figure of speech?", "Find the two things being compared.", "two things|compared|find"),
      c("Which figure gives human feelings to something that isn't human?", "Personification.", "personification"),
      c("Which figure stretches the truth on purpose, as in a million times?", "Hyperbole.", "hyperbole"),
      c("What must the two things in a metaphor have, for it to work?", "Something in common.", "common"),
    ]),
    C("New lines in the frog-and-bog world. Name each one, then fix one.", [
      c("The bog was a quiet gray blanket after the frog went silent. Simile or metaphor?", "Metaphor. No like or as.", "metaphor"),
      c("The frog puffed up like a balloon at a party. Simile or metaphor?", "Simile. It uses like.", "simile"),
      c("The old frog sang as loud as a trumpet. Simile or metaphor?", "Simile. It uses as.", "simile"),
      c("Her whisper to the other Nobody was a secret handshake. Simile or metaphor?", "Metaphor. No like or as.", "metaphor"),
      c("The applause was rain on a tin roof. Which two things are compared?", "The applause and rain on a tin roof.",
        { "First thing": "applause", "Second thing": "rain" }),
      c("You want to turn the simile The crowd was like a swamp into a metaphor. Which word do you cut?", "Like.", "like"),
    ]),
    D([
      hand("Write one new simile about a noisy person or animal.",
        "A good answer compares two different things and uses like or as, such as a loud dog compared to a siren, not two things that are alike already."),
      hand("What does Dickinson's frog make you see about being famous?",
        "A good answer says a Somebody is loud and puffed up about himself, croaking his own name, and the audience is no more than a bog."),
    ]),
  ],
}),

/* ── ENGLISH U2-L8 ─────────────────────────────────────────────────────── */
sheet({
  subject: "English", slug: "holding-a-group-discussion-homework", lesson: "english/holding-a-group-discussion",
  includedWith: "english/holding-a-group-discussion",
  title: "Holding a Group Discussion: Homework",
  dek: "Name the role and the step in new group scenes, and say what to do when a discussion goes wrong.",
  blurb: "Homework for the group discussion lesson. Key words, questions on the five steps, new scenes to fix, and an answer key.",
  contains: [
    "Key words for the roles and steps",
    "Questions on how the five steps work",
    "New group scenes to diagnose",
    "An answer key",
  ],
  eyebrow: "English 7 &middot; U2-L8",
  signoff: "Roles, a goal, a fair brainstorm, a consensus, and a report that gives the decision first.",
  howTo: {
    steps: [
      "A group works only if it's organized. A good discussion has five steps: roles, goal, brainstorm, consensus and present.",
      "Step one, choose roles. The moderator keeps the discussion moving, makes sure everyone gets a turn and brings people back to the topic. The recorder writes down the ideas and decisions.",
      "Step two, state the goal out loud. The recorder writes it at the top of the page.",
      "Step three, brainstorm. Pour out as many ideas as you can before anybody judges them. Start with a quiet minute of writing, then go around the circle. Nobody laughs at an idea.",
      "Step four, reach a consensus, which is a general agreement everyone can live with. It's different from a vote, because the group keeps talking until the last person has been heard. The recorder reads the decision back.",
      "Step five, present. A good report gives the decision first, then the reasons or the evidence, and it's short.",
    ],
    example: {
      problem: "Maya asks, \"Does everyone agree, or does anyone want to change a word?\" Sam asks to change \"leads to danger\" to \"leads to disaster.\" Everyone nods, and Jonah, the recorder, changes it. Which step is this?",
      work: [
        ["Find the clue. The group is checking that everyone agrees and settling on one wording.", ""],
        ["Recall the five steps: roles, goal, brainstorm, consensus, present. Which one is about a decision everyone can live with?", ""],
        ["Match it. The group reached a general agreement.", "Step four: reach a consensus"],
        ["Check the roles. The moderator asked the question, and the recorder wrote down the decision.", ""],
      ],
    },
  },
  parts: [
    A("Type the word that fits each clue.", [
      c("Who keeps a discussion moving and makes sure everyone gets a turn?", "The moderator.", "moderator"),
      c("Who writes down the group's ideas and decisions?", "The recorder.", "recorder"),
      c("To pour out as many ideas as you can before anybody judges any of them is to do what?", "To brainstorm.", "brainstorm"),
      c("A general agreement that everyone in the group can live with is called what?", "A consensus.", "consensus"),
    ]),
    B("Short answers. Think about why.", [
      c("What is the first of the five steps?", "Choose roles.", "roles|choose roles"),
      c("In a brainstorm, nobody does what to an idea that sounds boring?", "Laughs at it or judges it.", "laugh|laughs|judge|judges"),
      c("Who writes the goal at the top of the page?", "The recorder.", "recorder"),
      c("Which keeps talking until the last person has been heard, a vote or a consensus?", "A consensus.", "consensus"),
      c("A good report gives the decision first. What comes next?", "The reasons or the evidence.", "reasons|evidence|reason"),
    ]),
    C("New scenes. Fix each one.", [
      c("Dev says, Let's decide today whether the dog or the man learns more in the story. Which step is Dev taking?", "Stating the goal.", "goal|state the goal"),
      c("Lena writes down Dev's wording and reads it back to check that everyone agrees. Which role is she in?", "The recorder.", "recorder"),
      c("Two members grab the pencil and shout ideas over each other. Which role should step in?", "The moderator, to give each a turn.", "moderator"),
      c("Everyone agrees except Omar, who is still frowning. Should the group vote, or keep talking?", "Keep talking until Omar has been heard.", "keep talking|talking|talk|listen"),
      c("A group's report starts with the first idea, then the second, and saves the decision for last. What did they get backward?", "The decision should come first.", "decision"),
      c("A group's silent minute, when each person writes one idea, belongs to which step?", "The brainstorm.", "brainstorm"),
    ]),
    D([
      hand("What could go wrong if a group has no moderator?",
        "A good answer names a problem from the lesson: everyone talks at once, one person takes over, people wander off the topic, or someone never gets a turn."),
      hand("Which of the five steps would be hardest for you, and why?",
        "A good answer names one of the five steps (roles, goal, brainstorm, consensus, present) and gives a real reason."),
    ]),
  ],
}),

/* ── ENGLISH U2-L9 ─────────────────────────────────────────────────────── */
sheet({
  subject: "English", slug: "writing-about-your-life-plan-and-draft-homework", lesson: "english/writing-about-your-life-plan-and-draft",
  includedWith: "english/writing-about-your-life-plan-and-draft",
  title: "Writing About Your Life: Plan and Draft: Homework",
  dek: "Find the four parts in a scrambled draft, put them in order, and show you know the steps of planning.",
  blurb: "Homework for the plan and draft lesson. Key words, questions on planning, a scrambled draft to sort, and an answer key.",
  contains: [
    "Key words for planning and drafting",
    "Questions on how to choose and plan an event",
    "A short scrambled draft to sort into the four parts",
    "An answer key",
  ],
  eyebrow: "English 7 &middot; U2-L9",
  signoff: "Opening, background, events in order, and why it mattered.",
  howTo: {
    steps: [
      "An autobiographical incident is a true story about one event in your own life that mattered to you. Small is best: one game, one argument, one afternoon.",
      "You write it in three jobs, in order: prewriting (planning), drafting, then revising.",
      "Pick the event, then test it with three questions. Does it mean something special to me? Do I remember it well enough to describe it? Am I willing to share it?",
      "Plan four parts: an opening that grabs attention (a line of dialogue, a question, a surprising statement or a vivid description), the background, the events in order, and why it mattered.",
      "Draft straight through, writing on every other line so there's room to fix it later. Don't stop to polish a sentence.",
      "The ending isn't another event. It says why the event mattered to you.",
    ],
    example: {
      problem: "Frederick Douglass wrote about teaching himself to read as a boy. Sort his pages into the four parts.",
      work: [
        ["Opening: a short, plain statement that makes you want to know how.", "\"During this time, I succeeded in learning to read and write.\""],
        ["Background: what stood in his way. His mistress had been told to stop teaching him.", "she \"ceased to instruct\""],
        ["Events, in the order they happened.", "1. friends in the street\n2. book on errands\n3. bread for lessons"],
        ["Why it mattered. This isn't a new event. It explains what all the earlier ones added up to.", "given the inch, no one could stop him taking the ell"],
      ],
    },
  },
  parts: [
    A("Type the word that fits each clue.", [
      c("A true story about one event in your own life that mattered to you has what name?", "An autobiographical incident.", "autobiographical incident|incident"),
      c("The planning you do before you write a draft is called what?", "Prewriting.", "prewriting"),
      c("A first, rough version that you will improve later is called what?", "A draft.", "draft"),
      c("The four-part plan for an incident is called what?", "The framework.", "framework"),
    ]),
    B("Short answers. Think about why.", [
      c("Which job comes first: prewriting, drafting or revising?", "Prewriting.", "prewriting|planning"),
      c("Name one of the three questions that test an event.", "Does it mean something special to me, do I remember it well, am I willing to share it.", "special|remember|remembered|share|willing"),
      c("A plan has an opening, background and events. What is the fourth part?", "Why it mattered.", "mattered|matter|why it mattered|point"),
      c("Why write a draft on every other line?", "To leave room to fix it later.", "room|fix|later"),
      c("While you draft, what should you not stop to do?", "Polish a sentence.", "polish|fix|edit"),
    ]),
    C("A new draft, out of order. Sort it into the four parts.", [
      set("A student's draft about a first jump into a lake, lines out of order. 1: I was seven, and I had never put my face in the water. 2: He pulled me up laughing, and I coughed all the way back to the cabin. 3: \"Just jump!\" my uncle shouted from the end of the dock. 4: I held my nose and jumped, and the lake closed over my head. 5: Now I know that being scared and doing it anyway is how you get brave.", [
        ["Which line is the opening that grabs attention?", "Line 3, the line of dialogue.", "3"],
        ["Which line is the background?", "Line 1.", "1"],
        ["Which line is the first event?", "Line 4.", "4"],
        ["Which line says why it mattered?", "Line 5.", "5"],
        ["Put all five lines in the right order. Type the five numbers.", "3, 1, 4, 2, 5.", "3 1 4 2 5"],
      ]),
    ]),
    D([
      hand("Write one sentence that could open an event of your own.",
        "A good answer is a line of dialogue, a question, a surprising statement or a vivid description about one real event, and it makes a reader want to know what happens."),
      hand("Why can't the ending of an incident just be another event?",
        "A good answer says the ending explains why the event mattered, what all the earlier events added up to."),
    ]),
  ],
}),

/* ── ENGLISH U2-L10 ────────────────────────────────────────────────────── */
sheet({
  subject: "English", slug: "writing-about-your-life-revise-homework", lesson: "english/writing-about-your-life-revise",
  includedWith: "english/writing-about-your-life-revise",
  title: "Writing About Your Life: Revise: Homework",
  dek: "Cut the line that doesn't belong, join choppy sentences, and tell a clause that stands from one that leans.",
  blurb: "Homework for the revising lesson. Key words, questions on the six checks, a new draft to revise, and an answer key.",
  contains: [
    "Key words for revising and clauses",
    "Questions on the six checks and on commas",
    "A short new draft to cut and combine",
    "An answer key",
  ],
  eyebrow: "English 7 &middot; U2-L10",
  signoff: "Hold the draft up to the six checks, then fold short sentences together with a time word.",
  howTo: {
    steps: [
      "To revise is to improve a draft by changing what doesn't work. Proofreading is a different job, because it only fixes mistakes.",
      "Put the draft aside first, so it reads more like a stranger's.",
      "Hold it up to six checks: one incident, an opening that grabs, enough background, events in an order a reader can follow, descriptive details, and what it meant to you. Mark every no.",
      "A partner doing a peer review answers four questions. Does the beginning grab me? Is anything missing or unnecessary? Where do I want more detail? Do I understand why this mattered?",
      "An independent clause has a subject and a verb and can stand alone, like I fell off. A subordinate clause starts with a word like after, before, until, when, whenever, while, where or wherever, and can't stand alone.",
      "To combine two short sentences, turn the one that tells when into a subordinate clause with a time word. If that clause comes first, put a comma after it. Don't combine everything, because a few short sentences are good.",
    ],
    example: {
      problem: "Combine these two choppy sentences: \"I found out my brother had signed me up for the race.\" \"I groaned.\"",
      work: [
        ["Decide which sentence is the main action and which one tells when. The groan is the main action.", "MAIN: I groaned.\nTIME: I found out my brother had signed me up for the race."],
        ["Put a time word at the front of the timing sentence. That makes it a subordinate clause.", "When I found out my brother had signed me up for the race"],
        ["Join it to the main action. The clause comes first, so put a comma after it.", "When I found out my brother had signed me up for the race, I groaned."],
        ["Read it aloud and check that the clause isn't left alone as a fragment.", ""],
      ],
    },
  },
  parts: [
    A("Type the word that fits each clue.", [
      c("To improve a draft after you've written it, by changing what doesn't work, is to do what?", "To revise.", "revise|revising"),
      c("A partner reads your draft and tells you what works and what doesn't. What is it called?", "Peer review.", "peer review|peer"),
      c("A group of words with a subject and a verb that can stand alone as a sentence is what?", "An independent clause.", "independent clause|independent"),
      c("A group of words with a subject and a verb that begins with a word like when and can't stand alone is what?", "A subordinate clause.", "subordinate clause|subordinate"),
    ]),
    B("Short answers. Think about why.", [
      c("Which job only fixes mistakes, revising or proofreading?", "Proofreading.", "proofreading|proofread"),
      c("Why put a draft aside before you revise it?", "So it reads like a stranger's.", "stranger"),
      c("Name one of the six checks.", "One incident, a grabbing opening, background, clear order, details, or what it meant.", "incident|opening|background|order|details|meant|meaning"),
      c("Name one word that starts a time or place clause.", "After, before, until, when, whenever, while, where or wherever.", "after|before|until|when|whenever|while|where|wherever"),
      c("When the subordinate clause comes first, what goes after it?", "A comma.", "comma"),
    ]),
    C("A new draft to revise.", [
      set("The draft: 1: I dropped the tray. 2: The lunchroom went quiet. 3: My sister has a red backpack. 4: I felt my face burn. 5: I picked it up.", [
        ["Which line doesn't belong, so you'd cut it?", "Line 3. It's off the one incident.", "3"],
        ["Which of the partner's four questions would have caught it?", "Is anything missing or unnecessary?", "unnecessary|missing"],
        ["Join lines 1 and 2, time word first. Which time word would you use?", "When, as in When I dropped the tray, the lunchroom went quiet.", "when|after|whenever"],
        ["In After I dropped the tray, the lunchroom went quiet, which part can't stand alone?", "After I dropped the tray.", "after i dropped the tray|after i dropped"],
        ["In that same sentence, after which word does the comma go?", "After tray, because the clause comes first.", "tray"],
      ]),
    ]),
    D([
      hand("Join these two sentences with a time word: The bell rang. We lined up.",
        "A good answer makes one sentence with a time word and a comma if the clause comes first. One that works is: When the bell rang, we lined up."),
      hand("Why shouldn't you join every short sentence in a draft?",
        "A good answer says a few short sentences are good, especially at a moment of high drama, and the aim is variety, not one very long line."),
    ]),
  ],
}),

];

module.exports = { READING_HOMEWORK };
