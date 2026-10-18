/* ─────────────────────────────────────────────────────────────────────────
   reading-homework.js - the PRACTICE half of the Science, History and English
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
   ✝️ BOTH SIDES, THE STUDENT CHOOSES (Paul 2026-10-12): "what the world
   understands and what God tells us", then "show what both sides say and let the
   student choose." Origins get both, named that way; never state deep time or
   common descent as plain fact. A `choose` item asks which he believes and why.
   Scripture may go on a sheet (overrules the old "no Scripture" note).
   📖 STORY SHEETS (2026-10-12, Paul approved): EVERY sheet here is a story sheet and
   `story: true` makes the build check the shape (`checkStorySheet` in homework-sheet.js):
   a one-page story, multiple choice, True or False, key words, written answers word for
   word from the story, questions across the story, both sides + `choose` on origins.
   The WHY for each piece is in BEHAVIOR.md "A READING SHEET IS A STORY". Model:
   extinction-and-caring. The A-D helpers and "Paul wants these harder" note above
   describe the OLD shape and are kept only for reference.
   ───────────────────────────────────────────────────────────────────────── */
'use strict';

const sheet = (o) => Object.assign({
  grade: 7, grades: [7], kind: "homework",
  unit: "Homework &middot; answer key included",
  price: "$0", buy: null, art: false, thumb: true, online: true, story: true,   /* cover = page 1 (2026-10-18) */
}, o);

/* a typed item: the problem, the key line, and the word or phrase that marks the box */
const c = (problem, answer, check) => Object.assign({ problem, answer }, { check });
/* a hand-marked item: no check, and the key says what a good answer must hold */
const hand = (problem, answer) => ({ problem, answer: "Answers vary. " + answer });
/* a lettered set that shares one stem; each row is [question, key line, check] */
const set = (problem, rows, table) => Object.assign({ problem },
  table ? { table } : {},
  { sub: rows.map(([q, answer, check]) => ({ q, answer, check })) });

/* 📖 story-sheet items (2026-10-12): each names the paragraph its answer is in */
const at = (from, it) => Object.assign(it, { from });
/* multiple choice: the letter, or the words of the choice, marks the box */
const mc = (problem, choices, letter, from) => {
  const pick = choices[letter.charCodeAt(0) - 97];
  return { problem, choices, answer: letter + ". " + pick[0].toUpperCase() + pick.slice(1) + ".", check: letter + "|" + pick, from };
};
const tf = (problem, isTrue, why, from) =>
  ({ problem, answer: isTrue ? "True." : "False. " + why, check: isTrue ? "true" : "false", from });
/* a written answer whose words are in the story word for word (the build checks `quote`) */
const told = (problem, answer, quote, from) => ({ problem, answer, quote, from, write: true });

/* story-sheet parts (2026-10-12): the same five shapes the model sheet uses */
const CHECK = (items) => ({ kind: "solve", heading: "Check What You Read", answerLabel: "Letter",
  note: "Choose the best answer. Circle the letter on paper, or type it on screen.", key: "the answers.", items });
const TRUEFALSE = (items) => ({ kind: "solve", heading: "True or False", answerLabel: "True or False",
  note: "Write True or False. If it's false, the story tells you what's really true.", key: "the answers.", items });
const KEYWORDS = (items) => ({ kind: "solve", heading: "Key Words", note: "Find the word in the story and type it.", key: "the answers.", items });
const SORT = (label, note, items) => ({ kind: "solve", heading: "What the World Says, What God Tells Us", answerLabel: label, note, key: "the answers.", items });
const SORTX = (heading, label, note, items) => ({ kind: "solve", heading, answerLabel: label, note, key: "the answers.", items });
const THINK = (items) => ({ kind: "solve", heading: "Think It Through", key: "what a good answer says.",
  note: "Find the sentence in bold italic in the paragraph named after each question, and copy it as your answer.", items });

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
  dek: "Read the story of a creek-side cliff, then show what fossils, dating and body parts tell us, what was found, and what the world says and what God tells us about it.",
  blurb: "A one-page story of a girl reading the layers of a cliff, then multiple choice, true or false, key words, a found-world-God sort and written answers. Answer key included.",
  contains: [
    "A one-page story of a cliff, its fossils and the clocks in its rock",
    "What was found, what the world says and what God tells us",
    "Multiple choice, true or false, and key words to find in the story",
    "Written answers, and an answer key that names the paragraph",
  ],
  eyebrow: "Life Science &middot; U6-L2",
  signoff: "Ask two things about every piece of evidence: what was found, and what is it taken to mean?",
  passage: { title: "Three Layers in a Cliff", paras: [
    "On a hot Saturday in Texas, Maya followed her uncle Ray down to a creek where the bank had been cut into a tall cliff. Ray taught science at the community college, and he told her the whole morning's lesson was written in the rock if she knew how to read it. Before long she pried loose a flat stone with the print of a fern pressed into it, and Ray grinned. A fossil, he said, is any trace of life left from an earlier time, and an imprint in hardened mud counts just as much as a bone.",
    "The cliff came in three bands, and Ray explained that all three were sedimentary rock, the kind that forms when mud and sand settle out of water and pack down in layers. Maya found coiled shells in the bottom band, fish bones in the middle band and her fern prints in the top one. She wrote the three in her notebook before she forgot which was which.",
    "Ray asked her which fossil was the oldest, and she guessed the shells. He asked how she knew, and she said the bottom layer must have been laid down first. That's the rule, he told her, and scientists call it relative dating: in ground that hasn't been disturbed, the lower layers came first, so a fossil lower down is older than one above it. Relative dating puts the fossils in order, but it can't give a number of years. He added that if a layer had been folded or tipped over, the rule couldn't be trusted.",
    "For numbers, Ray said, you need a different kind of clock. Some atoms are radioactive, which means they slowly change into something stable at a steady rate that has been measured in laboratories. Uranium turns into lead, for one example. If you compare how much uranium is left in a rock with how much lead has built up beside it, you can work out how long the clock has been running, and the book he taught from calls this the more accurate of the two methods.",
    "Maya liked that, but Ray wasn't finished. Every clock, he said, leans on things you can't see on the dial. The rate is measured today, and the clock assumes the rate of change stayed the same all through the past. It also assumes the rock began with none of the lead, or a known amount, and that nothing was added to the rock or washed out of it since. Some scientists test these assumptions and trust the results, and others question them, though nobody disputes the measuring itself.",
    "Back at the truck, Ray drew a person's arm and a bat's wing on the back of a receipt. They do different jobs, he said, and yet they hold nearly the same bones, so scientists call body parts built on the same plan homologous structures. Then he drew a small muscle behind the ear. A part that is small and seems to have little or no use is called a vestigial structure. The appendix was once the book's favorite example, he said, but doctors now know it helps the body's defenses, so even that label has been revised.",
    "Maya noticed that every thing they'd talked about was something a person could point at: a fern print, a stack of layers, a lead-to-uranium count, a set of bones. Ray nodded. Those are the finds, and nobody argues that they're there. What they say about where living things came from is a different kind of question, because it's about the distant past, which nobody watched and no experiment can repeat.",
    "Two answers have been given to that question. Many scientists say the likenesses show that living things share ancestors, and that the layers show life changing over millions of years. The Bible tells us something else. It says God made living things, each after his kind, so the likenesses show one Designer using good plans again and again, and many who hold this view think the layers were mostly laid down quickly by a worldwide flood, though they don't all agree about the age of the earth.",
    "Ray pointed out that both sides accept the same rocks, the same bones and the same decay rates, and they part ways only over what those finds say about the beginning. Then he quoted Proverbs 25:2 from memory: “It is the glory of God to conceal a thing: but the honour of kings is to search out a matter.” Maya tucked the fern print into her bag and decided she would do exactly that, one layer at a time.",
  ] },
  parts: [
    CHECK([
      mc("A fossil is ____.", ["a rock with a shell inside it", "any trace of life left from an earlier time", "a bone that is a million years old", "a layer of hardened mud"], "b", 1),
      mc("Sedimentary rock forms when ____.", ["lava cools and hardens", "old rock is heated deep underground", "mud and sand settle out of water and pack down in layers", "ice melts and leaves minerals behind"], "c", 2),
      mc("Relative dating tells you ____.", ["which fossil is older, but not how old", "exactly how many years old each fossil is", "which fossil was the biggest animal", "which layer holds the most minerals"], "a", 3),
      mc("Radioactive dating compares how much uranium is left with ____.", ["how much water is in the rock", "how many fossils are in the layer", "how thick the layer is", "how much lead has built up"], "d", 4),
      mc("What do both sides agree about?", ["Nothing in the rocks can be measured", "Only one side uses real evidence", "The rocks, bones and decay rates are really there", "The distant past can be repeated in a laboratory"], "c", 9),
    ]),
    TRUEFALSE([
      tf("In ground that hasn't been disturbed, the lowest layer was laid down first.", true, "", 3),
      tf("Radioactive dating assumes the rate of change was different in the past.", false, "It assumes the rate stayed the same all through the past.", 5),
      tf("A vestigial structure is a body part that seems to have little or no use.", true, "", 6),
      tf("Doctors now know the appendix does nothing at all.", false, "It helps the body's defenses.", 6),
    ]),
    KEYWORDS([
      at(1, c("What word names any trace of life left from an earlier time?", "Fossil.", "fossil|fossils")),
      at(2, c("What kind of rock forms when mud and sand settle out of water in layers?", "Sedimentary rock.", "sedimentary")),
      at(3, c("What kind of dating puts fossils in order by their layers, without saying how old they are?", "Relative dating.", "relative")),
      at(6, c("What are body parts built on the same plan, like an arm and a bat's wing, called?", "Homologous structures.", "homologous")),
    ]),
    SORT("World or God", "Paragraph 8 tells both sides. WORLD is what many scientists say about the past. GOD is what the Bible tells us.", [
      at(8, set("Write WORLD if it's what many scientists say, or GOD if it's what the Bible tells us.", [
        ["The layers show life changing over millions of years.", "WORLD. Many scientists say so.", "world"],
        ["God made living things, each after his kind.", "GOD. The Bible tells us so.", "god"],
        ["The likenesses show that living things share ancestors.", "WORLD. Many scientists say so.", "world"],
      ])),
    ]),
    THINK([
            told("What does relative dating do, and what can't it do?",
        "Relative dating puts the fossils in order, but it can't give a number of years.",
        "Relative dating puts the fossils in order, but it can't give a number of years.", 3),
      told("What does radioactive dating assume about the rate of change?",
        "The rate is measured today, and the clock assumes the rate of change stayed the same all through the past.",
        "The rate is measured today, and the clock assumes the rate of change stayed the same all through the past.", 5),
      told("Why is asking where living things came from different from pointing at a fossil?",
        "What they say about where living things came from is a different kind of question, because it's about the distant past, which nobody watched and no experiment can repeat.",
        "What they say about where living things came from is a different kind of question, because it's about the distant past, which nobody watched and no experiment can repeat.", 7),
      { problem: "Paragraph 8 gives two answers about where the likenesses between living things come from. Which one do you believe, and why?",
        answer: "Answers vary. A good answer names one side, what many scientists say or what the Bible tells us, says it in the story's words, and gives a reason.",
        from: 8, choose: true, write: true },
    ]),
  ],
}),

/* ── SCIENCE 6-3 ───────────────────────────────────────────────────────── */
/* 📖 THE FIRST STORY SHEET (2026-10-12). Paul: "can this worksheet hold up on its
   own without a lesson". It carries its own story, every answer is in it, and a
   written answer is in it word for word. The whooping crane is added from the
   record, like Martha in the lesson: a real bird saved by BOTH of the book's rescues.
   ✝️ Paul, same day: "teach Kolten as what the world understands and what God tells
   us", and "christians know birds didnt come from dinos". Paragraph 3 sets the two
   side by side; paragraph 9 carries Genesis 2:15. */
sheet({
  subject: "Science", slug: "extinction-and-caring-homework", lesson: "science/extinction-and-caring",
  includedWith: "science/extinction-and-caring",
  title: "Extinction, and Caring for What Remains: Homework",
  dek: "Read the story of a bird that almost disappeared, then show what it teaches about extinction, what the world says and what God tells us, and the two ways to save a species.",
  blurb: "A one-page story of the whooping crane, then multiple choice, true or false, key words, a world-or-God sort and written answers. Answer key included.",
  contains: [
    "A one-page story of the whooping crane, and of Martha, the last passenger pigeon",
    "What the world says about the dinosaurs, and what God tells us",
    "Multiple choice, true or false, and key words to find in the story",
    "Written answers, and an answer key that names the paragraph",
  ],
  eyebrow: "Life Science &middot; U6-L3",
  signoff: "Protect the place, breed the animals, and do both at once.",
  passage: { title: "The Bird That Came Back", paras: [
    "On a September day in 1914, a bird named Martha died at the Cincinnati Zoo. She was the last passenger pigeon on earth. A hundred years earlier, flocks of passenger pigeons had darkened the sky for hours, and now there wasn't a single one left to lay an egg. That is what extinction means: the dying out of a species, when the last one is gone and nobody is left to have young.",
    "Not every extinction is somebody's fault. Environments keep changing, as climates warm and cool, rivers move, and food supplies rise and fall. The species that can adapt to the change keep going, and the ones that can't slowly die out. The dinosaurs are the best-known example of a whole group that died out: their bones are found in the rock layers, and not one is alive today.",
    "Here what the world understands and what God tells us part ways. Many scientists say the dinosaurs died out millions of years before there were any people, and that birds like the crane in this story came from dinosaurs. The Bible tells us something different. God made the birds on the fifth day of creation, each after its kind, and the land animals on the sixth day, the same day He made the first man and woman. So Christians know birds didn't come from dinosaurs, and many who study creation think most dinosaurs were buried in the Flood of Noah's day, which is why so many of their bones lie in rock laid down by water.",
    "What's different today is the speed. People have pushed the rate of extinction far above the natural one, mostly by destroying habitats, the places where living things make their homes, and by destroying the food those living things eat. When a forest is cleared or a marsh is drained, the animals living there can't adapt in a single season. A species whose numbers have fallen so low that it's in danger of dying out is called an endangered species.",
    "The whooping crane nearly went the way of Martha. It's the tallest bird in North America, white with black wingtips, and it lives in marshes. As those marshes were drained for farms and towns, the cranes had fewer places to feed and nest, and by 1941 only about 21 of them were left in the wild.",
    "The first rescue was to protect the place. The cranes spent every winter in one stretch of marsh on the coast of Texas, and that marsh was made a wildlife refuge, so no one could drain it or build on it. Protecting the place where a species still lives gives it food and shelter and a chance to rebuild.",
    "The second rescue was to breed cranes in captivity and release the young. Scientists raised chicks in pens, and the keepers wore white crane costumes so the chicks wouldn't grow up thinking people were their parents. Zoos have found other ways to breed rare animals, too. In in vitro fertilization, an egg and a sperm are joined in a test tube, and the embryo is placed inside a different female to grow. That is how a Bengal tiger cub was once born to a Siberian tiger.",
    "Neither rescue would have worked alone. Breeding cranes in pens does nothing if there's no marsh left to release them into, and protecting a marsh does little for a bird that's down to a handful. Doing both at once is what worked, and today there are several hundred whooping cranes, every one of them descended from the few that were left in 1941.",
    "Whatever a person believes about the dinosaurs, the work of caring for living things is the same, and the Bible tells us where that work began. Genesis 2:15 says, “And the LORD God took the man, and put him into the garden of Eden to dress it and to keep it.” To dress the garden means to work it, and to keep it means to guard it, so saving a bird like the whooping crane is part of the job God gave people from the very beginning.",
  ] },
  parts: [
    { kind: "solve", heading: "Check What You Read", answerLabel: "Letter",
      note: "Choose the best answer. Circle the letter on paper, or type it on screen.", key: "the answers.", items: [
      mc("____ is the dying out of a species.", ["adaptation", "extinction", "a habitat", "a refuge"], "b", 1),
      mc("On which day of creation does the Bible say God made the birds?", ["the first day", "the third day", "the fifth day", "the seventh day"], "c", 3),
      mc("People raise the rate of extinction mostly by destroying ____.", ["fossils", "zoos", "climates", "habitats and food"], "d", 4),
      mc("Why did the keepers wear white crane costumes?", ["so the chicks wouldn't think people were their parents", "to keep warm in the marsh", "to scare away foxes", "so visitors could spot them"], "a", 7),
      mc("In in vitro fertilization, an egg and a sperm are joined ____.", ["in a nest", "in a test tube", "in the wild", "in a marsh"], "b", 7),
    ] },
    { kind: "solve", heading: "True or False", answerLabel: "True or False",
      note: "Write True or False. If it's false, the story tells you what's really true.", key: "the answers.", items: [
      tf("Every extinction is caused by people.", false, "Some species die out because they can't adapt when their environment changes.", 2),
      tf("A species that can adapt to a change keeps going.", true, "", 2),
      tf("By 1941, only about 21 whooping cranes were left in the wild.", true, "", 5),
      tf("The cranes' winter marsh in Texas was drained to build a town.", false, "It was made a wildlife refuge, so no one could drain it.", 6),
    ] },
    { kind: "solve", heading: "Key Words", note: "Find the word in the story and type it.", key: "the answers.", items: [
      at(4, c("What word names the places where living things make their homes?", "Habitats.", "habitat|habitats")),
      at(4, c("What is a species called when so few are left that it's in danger of dying out?", "An endangered species.", "endangered")),
      at(6, set("The story names two rescues for the whooping crane.", [
        ["What was the first rescue?", "Protect the place, by making the marsh a wildlife refuge.", "protect|refuge|place"],
        ["What was the second rescue?", "Breed cranes in captivity and release the young.", "breed|captivity|release"],
      ])),
    ] },
    { kind: "solve", heading: "What the World Says, What God Tells Us", answerLabel: "World or God",
      note: "Paragraph 3 tells both sides. WORLD is what many scientists say about the past. GOD is what the Bible tells us.", key: "the answers.", items: [
      at(3, set("Write WORLD if it's what many scientists say, or GOD if it's what the Bible tells us.", [
        ["Birds came from dinosaurs.", "WORLD. Many scientists say so.", "world"],
        ["God made the birds on the fifth day, each after its kind.", "GOD. The Bible tells us so.", "god"],
        ["The dinosaurs died out millions of years before there were any people.", "WORLD. Many scientists say so.", "world"],
        ["God made the land animals on the sixth day, the same day He made the first man and woman.", "GOD. The Bible tells us so.", "god"],
      ])),
    ] },
    { kind: "solve", heading: "Think It Through", key: "what a good answer says.",
      note: "Find the sentence in bold italic in the paragraph named after each question, and copy it as your answer.", items: [
      told("Why wasn't it enough to do just one of the two rescues?",
        "Breeding cranes in pens does nothing if there's no marsh left to release them into, and protecting a marsh does little for a bird that's down to a handful.",
        "Breeding cranes in pens does nothing if there's no marsh left to release them into, and protecting a marsh does little for a bird that's down to a handful.", 8),
      told("What happens to a species when its environment changes?",
        "The species that can adapt to the change keep going, and the ones that can't slowly die out.",
        "The species that can adapt to the change keep going, and the ones that can't slowly die out.", 2),
      told("How is saving a whooping crane part of the job God gave people?",
        "To dress the garden means to work it, and to keep it means to guard it, so saving a bird like the whooping crane is part of the job God gave people from the very beginning.",
        "To dress the garden means to work it, and to keep it means to guard it, so saving a bird like the whooping crane is part of the job God gave people from the very beginning.", 9),
      { problem: "Paragraph 3 gives two answers about where birds came from. Which one do you believe, and why?",
        answer: "Answers vary. A good answer names one side, what many scientists say or what the Bible tells us, says it in the story's words, and gives a reason.",
        from: 3, choose: true, write: true },
    ] },
  ],
}),

/* ── SCIENCE 6-4 ───────────────────────────────────────────────────────── */
sheet({
  subject: "Science", slug: "human-origins-two-accounts-homework", lesson: "science/human-origins-two-accounts",
  includedWith: "science/human-origins-two-accounts",
  title: "Human Origins: Two Accounts, Side by Side: Homework",
  dek: "Read the story of a museum visit, then show what the primates share, what the bones are, and what the world says and what God tells us about where people came from.",
  blurb: "A one-page story of a boy at a fossil exhibit, then multiple choice, true or false, key words, a found-world-God sort and written answers. Answer key included.",
  contains: [
    "A one-page story of a museum visit to the primates and the famous bones",
    "What was found, what the world says and what God tells us",
    "Multiple choice, true or false, and key words to find in the story",
    "Written answers, and an answer key that names the paragraph",
  ],
  eyebrow: "Life Science &middot; U6-L4",
  signoff: "Say what was found, say what is claimed, and say who claims it.",
  passage: { title: "The Case of the Bones", paras: [
    "Eli was twelve, and his aunt had promised him a day at the natural history museum if he'd stop asking when they were leaving. At the first exhibit he held out his hand and touched his thumb to the tip of each finger in turn. The card on the glass said almost nothing in the animal world can do that as well as you can, because your thumb crosses your palm. That's an opposable thumb, and monkeys, apes and people all have one, which puts them together in a group called the primates.",
    "The next card listed three things all primates share. The thumb was the first. The second was binocular vision, which means both eyes face forward and work together, so a monkey can judge how far away a branch is before it jumps. The third was flexible shoulders that can rotate, which is how a monkey swings from branch to branch and how Eli hangs from the jungle gym at the park.",
    "Around the corner was a chart about what's inside the body. The DNA of chimpanzees, gorillas and people is very similar, and a protein called hemoglobin, which carries oxygen in red blood cells, is nearly the same in all three. Anyone could line up the code and count the matches again, so the match itself was a finding. What the match says about where people came from, his aunt added, was a separate question, and they'd come back to it.",
    "A glass case held a cast of a skull that a scientist named Raymond Dart was handed in the early 1920s, after it turned up in a quarry in South Africa. The brain space was small, but the jaw and teeth looked humanlike, so he named it Australopithecus, which means “southern ape.” The textbook calls humanlike primates that walk upright hominids, and it says they split off from the other higher primates millions of years ago.",
    "The star of the room was Lucy, a nearly complete skeleton that Donald Johanson found in Ethiopia in 1974. Her brain was small, but the card said her leg and hip bones show she walked upright. It gave her age as between 2.9 and 3.4 million years, which is the age the textbook assigns and not something anyone can read off the bones themselves.",
    "Our own species, the last card said, is Homo sapiens, “wise human,” and the book says the fossil record shows it appearing about 300,000 years ago. In the last case were cave paintings from France of bison and horses, among the oldest art on record. Eli pressed his nose to the glass. Somebody had stood in that cave and painted what he saw.",
    "At the snack bar his aunt asked him to sort the day into two piles. Bones that were dug up, the skull, the leg bones, the paintings and the DNA count all went in the first pile, because anyone can look at them and measure them again. The statement that these fossils are a line of ancestors leading from the primates to people went in the second, because nobody watched it happen and no experiment can repeat it.",
    "She told him two accounts answer that question. The first is common descent, the view of his textbook: many scientists say people and the apes share an ancestor and the fossils are steps along the way. The second is in the Bible. It tells us God made people on purpose and made them different from the animals, and Genesis 1:27 says, “So God created man in his own image, in the image of God created he him; male and female created he them.” People who hold it commonly read the australopithecines as extinct apes and the Neanderthals as fully human.",
    "Eli chewed on that for a while. Both sides agree that the bones were really found and really measured, and they split only over what the bones say about where people came from. His aunt said that was exactly the kind of thing a careful student keeps straight, and she bought him a second pretzel.",
  ] },
  parts: [
    CHECK([
      mc("A thumb that crosses the palm and touches the tip of each finger is called ____.", ["a binocular thumb", "an opposable thumb", "a flexible thumb", "a hominid thumb"], "b", 1),
      mc("Binocular vision lets a primate ____.", ["hang from a branch by its tail", "see well in the dark", "hear danger from far away", "judge how far away a branch is"], "d", 2),
      mc("Hemoglobin is the protein in red blood cells that carries ____.", ["oxygen", "food", "heat", "calcium"], "a", 3),
      mc("The name Australopithecus means ____.", ["handy man", "southern ape", "wise human", "cave dweller"], "b", 4),
      mc("Lucy's leg and hip bones show that she ____.", ["lived in trees all her life", "was taller than a modern person", "walked upright", "ate only plants"], "c", 5),
    ]),
    TRUEFALSE([
      tf("Homo sapiens means “wise human.”", true, "", 6),
      tf("Only people have both eyes facing forward.", false, "All primates share it, including monkeys and apes.", 2),
      tf("Anyone can line up the DNA code and count the matches again.", true, "", 3),
      tf("The cave paintings in France show lions and elephants.", false, "They show bison and horses.", 6),
    ]),
    KEYWORDS([
      at(1, c("What do we call a thumb that crosses the palm and touches each fingertip?", "An opposable thumb.", "opposable")),
      at(1, c("Monkeys, apes and people belong to a group of mammals. What is it called?", "The primates.", "primate|primates")),
      at(2, c("What word names having both eyes face forward and work together?", "Binocular vision.", "binocular")),
      at(4, c("What does the textbook call humanlike primates that walk upright?", "Hominids.", "hominid|hominids")),
    ]),
    SORT("World or God", "Paragraph 8 tells both sides. WORLD is what many scientists say about the past. GOD is what the Bible tells us.", [
      at(8, set("Write WORLD if it's what many scientists say, or GOD if it's what the Bible tells us.", [
        ["People and the apes share an ancestor.", "WORLD. Many scientists say so.", "world"],
        ["God made people on purpose.", "GOD. The Bible tells us so.", "god"],
        ["The fossils are steps along the way from an ancestor to people.", "WORLD. Many scientists say so.", "world"],
        ["God made people different from the animals.", "GOD. The Bible tells us so.", "god"],
      ])),
    ]),
    THINK([
            told("Why was the DNA match a finding?",
        "Anyone could line up the code and count the matches again, so the match itself was a finding.",
        "Anyone could line up the code and count the matches again, so the match itself was a finding.", 3),
      told("Which pile did the line-of-ancestors statement go in, and why?",
        "The statement that these fossils are a line of ancestors leading from the primates to people went in the second, because nobody watched it happen and no experiment can repeat it.",
        "The statement that these fossils are a line of ancestors leading from the primates to people went in the second, because nobody watched it happen and no experiment can repeat it.", 7),
      told("What do both sides agree about the bones, and where do they split?",
        "Both sides agree that the bones were really found and really measured, and they split only over what the bones say about where people came from.",
        "Both sides agree that the bones were really found and really measured, and they split only over what the bones say about where people came from.", 9),
      { problem: "Paragraph 8 gives two answers about where people came from. Which one do you believe, and why?",
        answer: "Answers vary. A good answer names one side, what many scientists say or what the Bible tells us, says it in the story's words, and gives a reason.",
        from: 8, choose: true, write: true },
    ]),
  ],
}),

/* ── SCIENCE 6-5 REVIEW ────────────────────────────────────────────────── */
sheet({
  subject: "Science", slug: "science-unit-6-review-homework", lesson: "science/unit-6-review",
  includedWith: "science/unit-6-review",
  title: "Unit 6 Review: Homework",
  dek: "Read the story of a review table, then show what you remember about finches, fossils, extinction and primates, and what the world says and what God tells us.",
  blurb: "A one-page story of a boy building a review table for the unit, then multiple choice, true or false, key words, a found-world-God sort and written answers. Answer key included.",
  contains: [
    "A one-page story that walks back over all four lessons of the unit",
    "What was found, what the world says and what God tells us",
    "Multiple choice, true or false, and key words to find in the story",
    "Written answers, and an answer key that names the paragraph",
  ],
  eyebrow: "Life Science &middot; U6-L5",
  signoff: "For every statement in this unit, ask whether it was found or measured, or whether it is a claim about the past.",
  passage: { title: "The Review Table", paras: [
    "Marcus had one evening to get ready for his co-op's science review, so he cleared the kitchen table and laid out four index cards. The first said FINCHES. On a small island called Daphne Major, he wrote, the birds in a population differ from each other in things like beak size, and that's called variation. More chicks are born than can survive, so the ones with helpful variations leave more young, and that's natural selection. After the drought of 1977 the average beak in the next generation was measurably deeper, because the hard seeds that were left needed a stronger beak to crack.",
    "He added a note about Lamarck, whose idea was that a parent's acquired traits get passed on to its young. That idea was set aside. A weightlifter's big arms don't make his baby big-armed, because genes and not habits are what get inherited. Marcus underlined the word genes twice so he'd stop mixing the two up.",
    "The second card said ROCK AND BONES. A fossil is any trace of life from an earlier time, and most are found in sedimentary rock. Relative dating puts fossils in order by their layers, with the lower ones older in undisturbed rock. Radioactive elements give numbers, because an atom changes into a stable product at a steady rate that has been measured. The method assumes that the rate and the starting amount never changed. Marcus wrote ASSUMES beside it in red.",
    "The third card said WHAT'S LOST. Extinction is the dying out of a species. Some of it is natural, and the fossil record shows large ones like the dinosaurs, but people have raised the rate by destroying habitats and food supplies. An endangered species has so few left that it may die out, and there are two rescues: protect the natural areas where it lives, and breed it in captivity and release the young. The Bengal tiger cub born to a Siberian foster mother was the book's example, and the point was to do both at once.",
    "The fourth card said PRIMATES. These are the monkeys, apes and humans, and they share an opposable thumb, forward-facing eyes and flexible shoulders. Their DNA and proteins such as hemoglobin are very much alike, which is a count anyone can repeat. Then came the digs: Lucy, found in Ethiopia in 1974, and the book's age for Homo sapiens of about 300,000 years.",
    "Now came the part Marcus liked best, the sorting. In one pile went the finches' beaks, the fossil in its layer, the decay rate, the same bones in four limbs, the DNA count and the skull's size, all of which were found or measured. In the other pile went two statements about the distant past: that all living things share one ancestor, and that people are the end of a line that began in the primates. Nobody watched those things happen, and no experiment can repeat them, so he decided they were a different kind of question.",
    "Two accounts answer that question, and Marcus wrote them side by side. Many scientists hold the textbook's view, common descent: living things and people share ancestors, the fossils are steps along the way, and the likenesses are the sign of a family tree. The Bible tells us something else. It says God made living things each after their kind and made people in his own image, so the likenesses show one Designer, and the layers are read as a record that was laid down fast.",
    "He finished with Proverbs 25:2: “It is the glory of God to conceal a thing: but the honour of kings is to search out a matter.” Searching out a matter, Marcus decided, means looking at what's in front of you and saying exactly what it is. Then he turned off the kitchen light and went to bed, because the cards would still be there in the morning.",
  ] },
  parts: [
    CHECK([
      mc("After the drought of 1977, the average finch beak in the next generation was ____.", ["thinner", "measurably deeper", "exactly the same", "much shorter"], "b", 1),
      mc("According to the review, what gets inherited?", ["habits", "muscles a parent built", "genes", "lessons a parent learned"], "c", 2),
      mc("Radioactive dating assumes that the rate of change and the ____ never changed.", ["starting amount", "size of the rock", "color of the layers", "number of fossils"], "a", 3),
      mc("One way to save an endangered species is to ____.", ["move it to a new continent", "stop counting how many are left", "let it adapt on its own", "protect the natural areas where it lives"], "d", 4),
      mc("Which skeleton, found in Ethiopia in 1974, was nearly complete?", ["Dart's skull", "Lucy", "Homo habilis", "a Cro-Magnon"], "b", 5),
    ]),
    TRUEFALSE([
      tf("Lamarck's idea about acquired traits being passed on was set aside.", true, "", 2),
      tf("Relative dating tells you exactly how old a fossil is in years.", false, "It puts fossils in order by their layers, and radioactive elements give the numbers.", 3),
      tf("All extinction is caused by people.", false, "Some extinction is natural, though people have raised the rate.", 4),
      tf("The DNA count between primates is something anyone can repeat.", true, "", 5),
    ]),
    KEYWORDS([
      at(1, c("What word names the differences between individuals in a population?", "Variation.", "variation|variations")),
      at(1, c("Individuals with helpful variations leave more young. What is that process called?", "Natural selection.", "natural selection")),
      at(4, c("What is a species called when it has so few left that it may die out?", "An endangered species.", "endangered")),
      at(5, c("What word names the group that holds the monkeys, apes and humans?", "The primates.", "primate|primates")),
    ]),
    SORT("World or God", "Paragraph 7 tells both sides. WORLD is what many scientists say about the past. GOD is what the Bible tells us.", [
      at(7, set("Write WORLD if it's what many scientists say, or GOD if it's what the Bible tells us.", [
        ["Living things and people share ancestors.", "WORLD. Many scientists say so.", "world"],
        ["God made living things each after their kind.", "GOD. The Bible tells us so.", "god"],
        ["The fossils are steps along the way.", "WORLD. Many scientists say so.", "world"],
        ["God made people in his own image.", "GOD. The Bible tells us so.", "god"],
      ])),
    ]),
    THINK([
            told("What does radioactive dating assume about the rate and the starting amount?",
        "The method assumes that the rate and the starting amount never changed.",
        "The method assumes that the rate and the starting amount never changed.", 3),
      told("What does the review say about what causes extinction?",
        "Some of it is natural, and the fossil record shows large ones like the dinosaurs, but people have raised the rate by destroying habitats and food supplies.",
        "Some of it is natural, and the fossil record shows large ones like the dinosaurs, but people have raised the rate by destroying habitats and food supplies.", 4),
      told("Why did Marcus put the statements about the distant past in a different pile?",
        "Nobody watched those things happen, and no experiment can repeat them, so he decided they were a different kind of question.",
        "Nobody watched those things happen, and no experiment can repeat them, so he decided they were a different kind of question.", 6),
      { problem: "Paragraph 7 gives two answers about where living things came from. Which one do you believe, and why?",
        answer: "Answers vary. A good answer names one side, what many scientists say or what the Bible tells us, says it in the story's words, and gives a reason.",
        from: 7, choose: true, write: true },
    ]),
  ],
}),

/* ── SCIENCE 7-1 ───────────────────────────────────────────────────────── */
sheet({
  subject: "Science", slug: "why-we-sort-living-things-homework", lesson: "science/why-we-sort-living-things",
  includedWith: "science/why-we-sort-living-things",
  title: "Why We Sort Living Things: Homework",
  dek: "Read the story of a girl at the zoo, then show why we sort living things, where Aristotle's way broke down, and how two-part names work.",
  blurb: "A one-page story of sorting and naming living things, then multiple choice, true or false, key words and written answers. Answer key included.",
  contains: [
    "A one-page story of a zoo visit, Aristotle and Linnaeus",
    "How a two-part scientific name is built and why it is in Latin",
    "Multiple choice, true or false, and key words to find in the story",
    "Written answers, and an answer key that names the paragraph",
  ],
  eyebrow: "Life Science &middot; U7-L1",
  signoff: "Genus first with a capital, species second in lowercase, and no two living things share a name.",
  passage: { title: "What Is That Animal?", paras: [
    "Nora stood in front of a cage at the zoo, staring at a squat animal that was half hidden in the leaves, and asked her dad whether it was a monkey, a bear or something else entirely. He told her she could only ask that question because somebody, long ago, had built a way of sorting living things. To sort them by how they're alike is to classify them, he said, and she'd been doing it her whole life without a name for it.",
    "He reminded her of the grocery store, where the milk, cheese and yogurt sit in one aisle and the cereal in another, so a shopper can find what she needs without checking every shelf. Scientists need the same thing on a much bigger scale. The science of grouping and naming living things is called taxonomy, and it's the reason a zoo can tell you what's in the cage.",
    "The first person we know of who tried it was Aristotle, a Greek philosopher who lived more than 2,000 years ago. He put every living thing into one of two big groups, plants and animals, and the largest group in any classification system is called a kingdom. Then he split the animals by where they live, on land, in water or in the air.",
    "It was a good start, but the exceptions piled up fast. A frog lives in water as a tadpole and on land as an adult, so which group should it go in? Plants caused trouble as well, since an apple tree turns out to be more like a rose bush than like a maple, even though the apple and the maple are both trees. Grouping by where something lives or how big it is turned out to be too rough, and people went looking for something better.",
    "In the 1700s a Swedish doctor and naturalist named Carolus Linnaeus came up with a system that scientists still use. Instead of asking where an animal lives, he looked at its body structures, meaning its size, its shape, its color and the way it gets its food. Then he did one simple thing that made it all work, which was to give every organism a name made of two words.",
    "A name with two parts is called binomial nomenclature, and binomial means two names. The first word is the genus, a group of similar species, and it starts with a capital letter. The second word is the species, the smallest and most specific group, and it's written in lowercase, with both words in italics or underlined. A house cat is Felis catus, the white oak is Quercus alba, and the red oak is Quercus rubra. Two living things that share a genus are close relatives.",
    "On a napkin at lunch, Nora tried building a name herself. She wrote Quercus first, with a capital Q, because the genus always comes first, and then alba in lowercase, and she underlined both words. Her dad pointed out the last step, which is checking that no other living thing already carries the same two words.",
    "Nora wanted to know why the names were in Latin, and her dad said there was a good reason. Latin was understood by scholars everywhere, so a name meant the same thing in every country, and since nobody speaks it every day, its words don't change. No two organisms may share a scientific name, so when a scientist in Texas and one in Japan both write Felis catus, they're both talking about exactly the same animal.",
    "Naming living things is a very old job, her dad added, and the Bible describes the first time it was done. Genesis 2:19 says, “And out of the ground the LORD God formed every beast of the field, and every fowl of the air; and brought them unto Adam to see what he would call them: and whatsoever Adam called every living creature, that was the name thereof.” Linnaeus had only given that job a set of rules that anyone could follow.",
  ] },
  parts: [
    CHECK([
      mc("To classify living things is to ____.", ["count them one by one", "keep them in a zoo", "group them by how they're alike", "give them nicknames"], "c", 1),
      mc("Taxonomy is the science of ____.", ["growing plants", "grouping and naming living things", "measuring weather", "studying old rocks"], "b", 2),
      mc("Aristotle split the animals by ____.", ["their size", "what they eat", "how many legs they have", "where they live"], "d", 3),
      mc("In a scientific name, the first word is the ____.", ["species", "kingdom", "genus", "family"], "c", 6),
      mc("Why did Linnaeus write the names in Latin?", ["Its words don't change, and scholars everywhere understood it", "It's the easiest language to spell", "It was the language of his home country", "It has the shortest words"], "a", 8),
    ]),
    TRUEFALSE([
      tf("A frog fit neatly into Aristotle's groups.", false, "A frog lives in water as a tadpole and on land as an adult, so it didn't fit.", 4),
      tf("Linnaeus grouped living things by their body structures instead of by where they live.", true, "", 5),
      tf("In a scientific name, both words start with a capital letter.", false, "The genus has a capital and the species is in lowercase.", 6),
      tf("Two organisms may share a scientific name if they live in different countries.", false, "No two organisms may share a scientific name.", 8),
    ]),
    KEYWORDS([
      at(1, c("What word means to group living things by how they're alike?", "Classify.", "classify|classifying")),
      at(2, c("What is the science of grouping and naming living things called?", "Taxonomy.", "taxonomy")),
      at(3, c("What is the largest group in a classification system called?", "A kingdom.", "kingdom|kingdoms")),
      at(6, c("What is a name with two parts, genus first and species second, called?", "Binomial nomenclature.", "binomial nomenclature|binomial")),
    ]),
    THINK([
            told("Why wasn't it good enough to group animals by where they live?",
        "Grouping by where something lives or how big it is turned out to be too rough, and people went looking for something better.",
        "Grouping by where something lives or how big it is turned out to be too rough, and people went looking for something better.", 4),
      told("What does sharing a genus tell you about two living things?",
        "Two living things that share a genus are close relatives.",
        "Two living things that share a genus are close relatives.", 6),
      told("What does it mean when two scientists in different countries write the same Latin name?",
        "No two organisms may share a scientific name, so when a scientist in Texas and one in Japan both write Felis catus, they're both talking about exactly the same animal.",
        "No two organisms may share a scientific name, so when a scientist in Texas and one in Japan both write Felis catus, they're both talking about exactly the same animal.", 8),
    ]),
  ],
}),

/* ── SCIENCE 7-2 ───────────────────────────────────────────────────────── */
sheet({
  subject: "Science", slug: "how-scientists-classify-today-homework", lesson: "science/how-scientists-classify-today",
  includedWith: "science/how-scientists-classify-today",
  title: "How Scientists Classify Today: Homework",
  dek: "Read the story of a nature center visit, then show how four questions find the kingdom, how seven levels narrow it down, and what the world says and what God tells us about the groups.",
  blurb: "A one-page story of the five kingdoms and the seven levels, then multiple choice, true or false, key words, a found-world-God sort and written answers. Answer key included.",
  contains: [
    "A one-page story of the five kingdoms and the seven levels",
    "What was found, what the world says and what God tells us",
    "Multiple choice, true or false, and key words to find in the story",
    "Written answers, and an answer key that names the paragraph",
  ],
  eyebrow: "Life Science &middot; U7-L2",
  signoff: "Four questions find the kingdom, and seven levels narrow it down to one species.",
  passage: { title: "The Ranger's Four Questions", paras: [
    "Theo had spent the morning in a music store with his mom, and he'd noticed that nothing was thrown on the shelves at random. The albums were sorted by type of music first, then by artist, then by title, so one song could be found in seconds out of thousands. That afternoon at the nature center, a ranger told his group that scientists sort living things the very same way, narrowing from a huge group down to a single kind.",
    "Aristotle and Linnaeus used what they could see, the ranger said, like size, shape and where something lives. Today scientists look at all that and more, including the chemical makeup of an organism, its genes, its fossils and how its embryo develops. The word phylogeny is the book's name for an organism's evolutionary history, and scientists use it to work out where each group belongs. DNA has even settled some puzzles, since it showed that white rhinos in North and South Africa, 2,000 miles apart, are genetically the same.",
    "Then she held up four fingers. You can place almost any living thing into one of five kingdoms by asking four questions, she said. Does it have a nucleus, the part of a cell that holds its genetic material? Is it made of one cell or many? Does it make its own food? Does it move? The answers send it to the Animal, Plant, Fungi, Protist or Monera kingdom.",
    "The Monera are the simplest, she explained, one-celled living things like bacteria, and their cells have no organized nucleus. Cells like that are called prokaryotes, from words meaning “before kernel.” Every other kingdom is made of eukaryotes, cells with a true nucleus and parts wrapped in a membrane. Nearly everything Theo could see without a microscope, from the oak outside to his own hand, was built of eukaryotic cells.",
    "She went kingdom by kingdom. Fungi, like the mushroom in her basket, don't move and can't make their own food, so they get it from other living or dead things. Plants are many-celled and don't move, but they make their own food. Animals are many-celled and move and eat plants or other animals. The Protists, she said, are a catch-all group for living things that fit nowhere else.",
    "Theo asked if everyone agrees on five. Not quite, she said. Five kingdoms is what his textbook uses, and it was a standard count in 1994, but many books today count six by splitting the bacteria in two, and others put the kingdoms inside three even bigger groups called domains. The sorting questions still work either way, and so do the levels inside each kingdom.",
    "Inside every kingdom, she said, there are smaller groups, always in the same order: kingdom, phylum, class, order, family, genus and species. A silly sentence helps, King Philip Came Over For Good Soup, taking the first letter of each level. Each step down holds fewer organisms, and each has more in common, just like the music store narrowing from type to artist to title.",
    "She showed them the Arctic wolf on a poster. It has a nucleus, many cells, can't make its own food and moves, so its kingdom is Animalia. Next come Chordata, for animals with a backbone, then Mammalia, then Carnivora, then Canidae, then the genus Canis and the species Canis lupus. The dog, Canis familiaris, sits in the very same genus, so the wolf's closest relative in the book is the dog.",
    "On the way out Theo asked what the groups really mean, and the ranger said the levels are a tool, and a person who holds either account of origins uses them the same way. Many scientists read the groups as a family tree, with each level closer to a shared ancestor. The Bible tells us God made living things, each after its kind, so people who hold creation read the same patterns of likeness as one Designer using a good plan again and again, as Psalm 104:24 says: “O LORD, how manifold are thy works! in wisdom hast thou made them all: the earth is full of thy riches.” Both sides count the same kingdoms, the same levels and the same wolf.",
  ] },
  parts: [
    CHECK([
      mc("DNA showed that white rhinos in North and South Africa, 2,000 miles apart, are ____.", ["two different species", "half as big as thought", "related to wolves", "genetically the same"], "d", 2),
      mc("Which of these is one of the four questions for finding a kingdom?", ["Does it have a nucleus?", "Does it live on land?", "Is it bigger than a person?", "Does it have a name?"], "a", 3),
      mc("Prokaryote cells have ____.", ["a true nucleus", "a hard shell", "no organized nucleus", "two nuclei"], "c", 4),
      mc("Fungi, like mushrooms, ____.", ["make their own food", "don't move and can't make their own food", "move and eat other animals", "are one-celled bacteria"], "b", 5),
      mc("The seven levels, from the biggest group down, are ____.", ["kingdom, phylum, class, order, family, genus, species", "species, genus, family, order, class, phylum, kingdom", "kingdom, class, phylum, family, order, species, genus", "phylum, kingdom, order, class, genus, family, species"], "a", 7),
    ]),
    TRUEFALSE([
      tf("Cells with a true nucleus are called prokaryotes.", false, "They are called eukaryotes. Prokaryotes have no organized nucleus.", 4),
      tf("Every textbook counts exactly five kingdoms.", false, "Many books count six, and others use three bigger groups called domains.", 6),
      tf("The Arctic wolf and the dog are in the same genus.", true, "", 8),
      tf("Only people who believe in creation use the seven levels.", false, "Both sides use the levels the same way.", 9),
    ]),
    KEYWORDS([
      at(2, c("What is the book's word for an organism's evolutionary history?", "Phylogeny.", "phylogeny")),
      at(4, c("What are cells with no organized nucleus called?", "Prokaryotes.", "prokaryote|prokaryotes")),
      at(4, c("What are cells with a true nucleus called?", "Eukaryotes.", "eukaryote|eukaryotes")),
      at(7, c("What level comes right after kingdom?", "Phylum.", "phylum")),
    ]),
    SORT("World or God", "Paragraph 9 tells both sides. WORLD is what many scientists say about the past. GOD is what the Bible tells us.", [
      at(9, set("Write WORLD if it's what many scientists say, or GOD if it's what the Bible tells us.", [
        ["The groups are a family tree, with each level closer to a shared ancestor.", "WORLD. Many scientists say so.", "world"],
        ["God made living things, each after its kind.", "GOD. The Bible tells us so.", "god"],
        ["The LORD made all His works in wisdom.", "GOD. The Bible tells us so.", "god"],
      ])),
    ]),
    THINK([
            told("What is every kingdom except the Monera made of?",
        "Every other kingdom is made of eukaryotes, cells with a true nucleus and parts wrapped in a membrane.",
        "Every other kingdom is made of eukaryotes, cells with a true nucleus and parts wrapped in a membrane.", 4),
      told("What happens to a group as you step down through the seven levels?",
        "Each step down holds fewer organisms, and each has more in common, just like the music store narrowing from type to artist to title.",
        "Each step down holds fewer organisms, and each has more in common, just like the music store narrowing from type to artist to title.", 7),
      told("What do the two sides agree on?",
        "Both sides count the same kingdoms, the same levels and the same wolf.",
        "Both sides count the same kingdoms, the same levels and the same wolf.", 9),
      { problem: "Paragraph 9 gives two ways to read the groups. Which one do you believe, and why?",
        answer: "Answers vary. A good answer names one side, what many scientists say or what the Bible tells us, says it in the story's words, and gives a reason.",
        from: 9, choose: true, write: true },
    ]),
  ],
}),

/* ── SCIENCE 7-3 ───────────────────────────────────────────────────────── */
sheet({
  subject: "Science", slug: "the-rain-forest-homework", lesson: "science/the-rain-forest",
  includedWith: "science/the-rain-forest",
  title: "The Rain Forest, and What Is Being Lost: Homework",
  dek: "Read the story of a girl at the edge of a rain forest, then show what is being lost, why the farmers clear the land, and what the two sides of a hard question say.",
  blurb: "A one-page story of the rain forest, then multiple choice, true or false, key words, a two-sides sort and written answers. Answer key included.",
  contains: [
    "A one-page story of the rain forest, its farmers and its scientists",
    "A sort of the two sides of a hard question",
    "Multiple choice, true or false, and key words to find in the story",
    "Written answers, and an answer key that names the paragraph",
  ],
  eyebrow: "Life Science &middot; U7-L3",
  signoff: "A farmer has to be part of any answer that works.",
  passage: { title: "The Edge of the Forest", paras: [
    "Ana's father was a field biologist, and on the morning she came to work with him he stopped at the edge of a fresh clearing and checked his watch. In the time it takes to say this, he told her, the book says more than 50 acres of tropical forest in South America have been cleared. That is close to forty football fields every minute, cut down for farms or for lumber, all day and all night. The destruction of a forest like that is called deforestation, and the numbers he was quoting were a textbook's estimates from 1994, a snapshot and not today's count.",
    "He had a reason for hurrying. The rain forests of South America hold thousands of kinds of plants and animals that no scientist has ever described, and hundreds of field biologists are racing to study them before the trees come down. Only about 15 percent of the species there had even been identified. The great variety of plants and animals in one place is called species diversity, and a rain forest has more of it than almost anywhere else on earth. The book warns that if the clearing doesn't slow, the world could lose a fourth of all the species alive today in about 30 years.",
    "Ana asked why anyone far away should care, and her father named two dangerous effects. The first is on the air, because trees take in carbon dioxide and give off oxygen, and a forest that size does a great deal of that work. The second is on the weather, because the damage may change weather patterns and cause dangerous storms. Clearing the forest changes the air and the weather far beyond South America, so a person in North America has a reason to care about a forest thousands of miles away.",
    "That afternoon Ana met Mateus, whose family had cleared a patch of forest to plant corn. She wanted to be angry at someone, but her father reminded her that the book is careful about this. Native people live in and around the rain forest, and they farm the land they clear to feed their families, much like the American pioneers who cleared land for farms and towns because it was how they lived. A farmer trying to feed his children isn't the forest's enemy, and he has to be part of any answer that works.",
    "Mateus showed her something that surprised her. The soil under that thick green forest was thin and pale, because most of the nutrients are held in the living plants and not in the ground. Once a patch is cleared and planted, it can be farmed for only a few years, and then the soil is spent and the family has to cut new forest to plant the next crop. That is the trap, her father said: the land that feeds a family for a season can't keep feeding them, so more forest goes.",
    "At supper they talked about a question the book ends with, which has no neat answer. Is it right for the United States to buy rain forest land and keep it from being cleared, when the people who live there need that land to survive? One side says yes, because the forest matters to everyone, and buying the land pays a poor country for it, so that country doesn't have to give up its only way of earning money for the world's sake. The other side says the people who live there should decide what happens to their own land, and that if the rest of the world wants the forest saved, it should help them find another way to live.",
    "Ana noticed that neither side was against the forest or against the people, and both wanted a world where the trees and the families could last. Her father opened the old Bible he kept in his pack and read Psalm 24:1: “The earth is the LORD's, and the fulness thereof; the world, and they that dwell therein.” The forest and the farmer both belong to someone else, he said, so looking after them is a job and not a favor.",
  ] },
  parts: [
    CHECK([
      mc("Deforestation is ____.", ["the clearing or destruction of a forest", "the planting of new trees", "the counting of species", "a kind of rain"], "a", 1),
      mc("About how much of the rain forest's species had been identified?", ["nearly all of them", "about half", "about 15 percent", "fewer than 1 percent"], "c", 2),
      mc("The two dangerous effects of clearing are on the air and on ____.", ["the oceans", "the weather", "the soil", "the mountains"], "b", 3),
      mc("The book compares the farmers who clear land to ____.", ["tourists", "lumber companies", "scientists", "American pioneers"], "d", 4),
      mc("Why can cleared rain forest land be farmed for only a few years?", ["Most of the nutrients are held in the plants, not the ground", "Too much rain washes the crops away", "The farmers move to cities", "Animals eat the seeds"], "a", 5),
    ]),
    TRUEFALSE([
      tf("More than 50 acres of forest are cleared every minute, by the book's count.", true, "", 1),
      tf("Most of the species in the rain forest had already been identified.", false, "Only about 15 percent had been identified.", 2),
      tf("The book treats every farmer who clears land as a villain.", false, "A farmer trying to feed his children isn't the forest's enemy.", 4),
      tf("Rain forest soil is rich, so a field there lasts for decades.", false, "The soil is thin, and a cleared patch can be farmed for only a few years.", 5),
    ]),
    KEYWORDS([
      at(1, c("What is the destruction of a forest like this called?", "Deforestation.", "deforestation")),
      at(2, c("What is the great variety of plants and animals in a place called?", "Species diversity.", "species diversity|diversity")),
      at(3, c("What gas do trees take in that affects the air?", "Carbon dioxide.", "carbon dioxide")),
      at(5, c("Where are most of the rain forest's nutrients held?", "In the living plants, not in the ground.", "plants|living plants")),
    ]),
    SORTX("Two Sides of a Hard Question", "Buy or Decide", "Paragraph 6 tells both sides. BUY is what the side says that wants the United States to buy the forest land and keep it from being cleared. DECIDE is what the side says that wants the people who live there to decide for themselves.", [
      at(6, set("Write BUY if the side that wants to buy the land says it, or DECIDE if the side that wants the people to decide says it.", [
        ["Buying the land pays a poor country for a forest the whole world needs.", "BUY. The side that wants to buy and keep the forest says it.", "buy"],
        ["The people who live there should decide what happens to their own land.", "DECIDE. This is the other side.", "decide"],
        ["The forest matters to everyone.", "BUY. The side that wants to buy and keep the forest says it.", "buy"],
        ["The rest of the world should help them find another way to live.", "DECIDE. This is the other side.", "decide"],
      ])),
    ]),
    THINK([
            told("Is a rain forest farmer the forest's enemy?",
        "A farmer trying to feed his children isn't the forest's enemy, and he has to be part of any answer that works.",
        "A farmer trying to feed his children isn't the forest's enemy, and he has to be part of any answer that works.", 4),
      told("Why should someone in North America care about a rain forest in South America?",
        "Clearing the forest changes the air and the weather far beyond South America, so a person in North America has a reason to care about a forest thousands of miles away.",
        "Clearing the forest changes the air and the weather far beyond South America, so a person in North America has a reason to care about a forest thousands of miles away.", 3),
      told("Why does a farming family have to keep cutting new forest?",
        "Once a patch is cleared and planted, it can be farmed for only a few years, and then the soil is spent and the family has to cut new forest to plant the next crop.",
        "Once a patch is cleared and planted, it can be farmed for only a few years, and then the soil is spent and the family has to cut new forest to plant the next crop.", 5),
      { problem: "Paragraph 6 gives two sides of a hard question. Which one do you agree with, and why?",
        answer: "Answers vary. A good answer names one side, says it in the story's words, and gives a reason that also respects the other side.",
        from: 6, choose: true, write: true },
    ]),
  ],
}),

/* ── SCIENCE 7-4 ───────────────────────────────────────────────────────── */
sheet({
  subject: "Science", slug: "identifying-an-organism-homework", lesson: "science/identifying-an-organism",
  includedWith: "science/identifying-an-organism",
  title: "Identifying an Organism Yourself: Homework",
  dek: "Read the story of a girl and a garden key, then show why a scientific name beats a common name and how to follow a key to a name.",
  blurb: "A one-page story of a garden key, then multiple choice, true or false, key words, a key to follow and written answers. Answer key included.",
  contains: [
    "A one-page story of three robins and a key to five garden animals",
    "A key to follow with new animals",
    "Multiple choice, true or false, and key words to find in the story",
    "Written answers, and an answer key that names the paragraph",
  ],
  eyebrow: "Life Science &middot; U7-L4",
  signoff: "Start at pair 1, choose one of exactly two, and stop when you land on a name.",
  passage: { title: "Under the Flat Stone", paras: [
    "Priya's grandfather had lived in three countries, and every time he said the word robin she asked which one he meant. The robin in North America is a plump brown bird with an orange chest. The robin in England is smaller, with a red face, and the one in Australia is a yellow-bellied bird that clings to tree trunks. All three are called robins, and yet they're three different species, with the names Turdus migratorius, Erithacus rubecula and Eopsaltria australis.",
    "A common name like robin changes from country to country, and sometimes from town to town. That, he said, is the problem a scientific name was built to solve. It does four jobs. It avoids mistakes, because Turdus migratorius is the American robin in every language. It groups organisms that are alike, so two animals in the same genus are closer kin. It can describe, since migratorius means the bird migrates. And it lets scientists file and find what's known. Common names can mislead, too, since a starfish isn't a fish at all, and a prairie dog is closer to a squirrel than to a dog.",
    "They crouched by the garden wall, and her grandfather lifted a flat stone. There are far too many living things for one person to know them all, he said, even a scientist who studies insects, who is called an entomologist. Even an entomologist looks things up in a field guide. Most field guides use a tool for naming an organism you haven't met, and it's called a dichotomous key. Dichotomous means divided into two parts, and that's the whole idea, because every step gives you exactly two choices.",
    "A key is a numbered list of pairs, he explained, and each pair has two statements labeled a and b, such as 1a and 1b. You always start at pair 1, read both statements, and choose the one that matches the animal in front of you. At the end of the statement you chose, there's either a name or the words “go to” followed by a number. He added one more rule. You never begin in the middle, because the later pairs only make sense once the earlier ones are settled.",
    "He had a small key in his notebook for the five animals under the stone. Pair 1 says 1a, the animal has legs, go to pair 2, and 1b, the animal has no legs, go to pair 4. Pair 2 says 2a, the animal has six legs, and it's the black garden ant, Lasius niger, and 2b, it has more than six legs, go to pair 3. Pair 3 says 3a, the animal has eight legs, and it's the garden spider, Araneus diadematus, and 3b, it has fourteen legs, and it's the pill bug, Armadillidium vulgare. Pair 4 says 4a, the body is made of rings, and it's the earthworm, Lumbricus terrestris, and 4b, the body is smooth and soft with no rings, and it's the gray garden slug, Limax maximus.",
    "Under the stone, Priya found a long pink animal. She started at pair 1, because that's the only place to start, and it had no legs, so she chose 1b and went to pair 4. Its body was made of rings, so she chose 4a, and 4a ended in a name instead of a go-to. She stopped right there and said it as two words, genus first: Lumbricus terrestris, the earthworm.",
    "Her little brother wanted to build a key of his own for the family, so she showed him the method. You split a group in two, one trait at a time, starting with something that divides everyone cleanly, like whether a person wears glasses. Each half then splits again on a new trait until every person ends up alone with a name. A key is only as good as its pairs, she told him. To test a key, ask someone else to use it, and if they land on the wrong person, fix the pair where they went wrong.",
    "Her grandfather closed his notebook and quoted Job 12:7-8: “But ask now the beasts, and they shall teach thee; and the fowls of the air, and they shall tell thee: Or speak to the earth, and it shall teach thee: and the fishes of the sea shall declare unto thee.” The old verse tells people to look closely at the living things around them, he said, and counting legs and checking a body for rings is exactly that kind of looking.",
  ] },
  parts: [
    CHECK([
      mc("What is a scientist who studies insects called?", ["a taxonomist", "an entomologist", "a botanist", "a geologist"], "b", 3),
      mc("Why can common names mislead?", ["They're always in Latin", "They never change", "A starfish isn't a fish at all", "Scientists never use them"], "c", 2),
      mc("Where do you always begin when you use a key?", ["with the pair that looks right", "at the last pair", "in the middle", "at pair 1"], "d", 4),
      mc("The word dichotomous means ____.", ["divided into two parts", "numbered in order", "named in Latin", "hard to see"], "a", 3),
      mc("A common name like robin ____.", ["is the same in every country", "changes from country to country", "is written in Latin", "always has two words"], "b", 2),
    ]),
    TRUEFALSE([
      tf("The robins of North America, England and Australia are all the same species.", false, "They're three different species with three different scientific names.", 1),
      tf("You can begin a key in the middle if you already know the group.", false, "You always start at pair 1, because the later pairs only make sense after the earlier ones.", 4),
      tf("In the garden key, the animal with eight legs is the garden spider.", true, "", 5),
      tf("A key is only as good as its pairs.", true, "", 7),
    ]),
    KEYWORDS([
      at(2, c("What kind of name changes from country to country, like robin?", "A common name.", "common name|common")),
      at(2, c("What kind of name was built to solve that problem?", "A scientific name.", "scientific name|scientific")),
      at(3, c("What book do scientists look things up in?", "A field guide.", "field guide")),
      at(3, c("What is the tool for naming an unknown organism, with two choices at every step, called?", "A dichotomous key.", "dichotomous key|dichotomous")),
    ]),
    SORTX("Use the Garden Key", "Animal", "The key is in paragraph 5. Start at pair 1 every time, choose a or b, and follow it until it gives you a name. Type the animal's common name.", [
      at(5, set("Use the garden key to name each animal.", [
        ["An animal with six legs.", "The black garden ant. 1a, then 2a.", "ant"],
        ["An animal with no legs and a smooth, soft body with no rings.", "The gray garden slug. 1b, then 4b.", "slug"],
        ["An animal with fourteen legs.", "The pill bug. 1a, then 2b, then 3b.", "pill bug|pillbug"],
      ])),
    ]),
    THINK([
            told("Why isn't a common name like robin good enough for scientists?",
        "A common name like robin changes from country to country, and sometimes from town to town.",
        "A common name like robin changes from country to country, and sometimes from town to town.", 2),
      told("Why can't you begin a key in the middle?",
        "You never begin in the middle, because the later pairs only make sense once the earlier ones are settled.",
        "You never begin in the middle, because the later pairs only make sense once the earlier ones are settled.", 4),
      told("How can you find out whether a key you built works?",
        "To test a key, ask someone else to use it, and if they land on the wrong person, fix the pair where they went wrong.",
        "To test a key, ask someone else to use it, and if they land on the wrong person, fix the pair where they went wrong.", 7),
    ]),
  ],
}),

/* ── HISTORY U2-L8 ─────────────────────────────────────────────────────── */
sheet({
  subject: "History", slug: "the-franks-and-charlemagne-homework", lesson: "history/the-franks-and-charlemagne",
  includedWith: "history/the-franks-and-charlemagne",
  title: "The Franks and Charlemagne: Homework",
  dek: "Read the story of a young monk at Charlemagne's court, then show how the Franks rose, how one emperor held a huge land together, and why it fell apart.",
  blurb: "A one-page story of the Franks and Charlemagne, then multiple choice, true or false, key words and written answers. Answer key included.",
  contains: [
    "A one-page story of Clovis, Charlemagne and the empire he ruled",
    "How counts, inspectors, laws and schools held a land together",
    "Multiple choice, true or false, and key words to find in the story",
    "Written answers, and an answer key that names the paragraph",
  ],
  eyebrow: "World History &middot; U2-L8",
  signoff: "Counts, inspectors, laws and schools held the empire together, and only while one man was alive to run them.",
  passage: { title: "The Emperor Who Couldn't Write", paras: [
    "Brother Wido was a young monk who copied books at the court in Aachen, and he liked to tell visitors a secret about the emperor. Late in his life, Charlemagne kept a writing tablet and a few blank sheets under the pillow of his bed, and whenever he couldn't sleep he practiced shaping letters. He had never learned to write as a boy, and his hand was too stiff by then to get it right. Yet this man ruled lands stretching from northern Spain to the edge of what's now Hungary, and Wido wondered how.",
    "His teacher began the answer with the Franks. When Rome's western half fell in the 400s, Germanic peoples carved it into kingdoms, and the Franks built one of the strongest in what's now France. In 486 a leader named Clovis beat the last great Roman army in Gaul, and by 507 his kingdom ran from the Rhine River to the Pyrenees Mountains. Around then Clovis became a Christian and most of his people followed him, which meant the Franks now shared a faith with the church of Rome.",
    "Two centuries later the Frankish kings had grown weak, and the real power belonged to a family of officials. The greatest of them was Charles Martel, who turned back an army at Tours in 732. His son Pepin the Short took the crown himself in 751 with the pope's blessing, and Pepin's son Charles was called Charlemagne, which means Charles the Great. In 768 he took over a kingdom that was already the strongest in the West.",
    "Charlemagne spent most of his reign at war. He pushed the borders into northern Italy and Bavaria and east into the lands of the Saxons, who were pagans and fought him for about thirty years. He made Christianity the law in their land, and his laws threatened death for any Saxon who refused baptism. In 782, after a rebellion, he had thousands of captive Saxons executed at a place called Verden. Wido thought about that sometimes. A faith forced on people with a sword is not the faith the first missionaries carried.",
    "The monk's favorite story was Christmas Day in the year 800. Charlemagne knelt to pray in Saint Peter's church in Rome, and Pope Leo III came up behind him and set a crown on his head. The crowd shouted that he was emperor of the Romans, a title nobody in the West had held for more than three hundred years, and he now ruled more land than any ruler since the old Roman emperors. Wido noticed what the crowning showed about the two powers: the pope had made the emperor, and who answers to whom would come up again.",
    "Ruling such a land was hard, because there were long distances, bad roads, no postal system and no paper money. So Charlemagne divided the empire into regions, each run by a powerful landholder called a count, who held courts and raised soldiers for him. To keep the counts honest, he sent out inspectors, usually a count and a bishop traveling in pairs, to report back. He also had new laws written down, since a law that lives only in memory is easy to change.",
    "He might not write well himself, but he gathered scholars at his court, and the best known was Alcuin, an English monk who ran the court school and taught the sons of nobles. Alcuin helped spread a clear, neat style of handwriting that copyists used for centuries, and Wido spent his days copying the Gospels in it. Monasteries across the empire were asked to copy books and open schools, and a lot of what we have of ancient Latin writing survives because a copy was made in these years.",
    "Charlemagne died in 814, and his son Louis took the throne, but the empire had been held together by one man's will. When Louis died, his three sons fought over it until the Treaty of Verdun in 843 divided it into three parts. Charles the Bald took the western part, which became France, Louis the German took the eastern part, which became Germany, and Lothair got a long strip between them with the title of emperor.",
    "A divided empire was a weaker one, and Vikings, Muslim raiders and Magyars began to strike from three directions. The kings who were meant to protect people were too far away to come. In the end Charlemagne had held his empire together with counts, inspectors, laws and schools, but it worked only as long as Charlemagne was alive to run it.",
  ] },
  parts: [
    CHECK([
      mc("Because Clovis became a Christian, the Franks now shared a ____ with the church of Rome.", ["language", "faith", "law", "border"], "b", 2),
      mc("Pepin the Short took the crown in 751 with the blessing of ____.", ["the Saxons", "Clovis", "the pope", "the Vikings"], "c", 3),
      mc("On Christmas Day in 800, the crowd shouted that Charlemagne was ____.", ["emperor of the Romans", "king of the Saxons", "protector of Aachen", "the new pope"], "a", 5),
      mc("Each region of the empire was run by a landholder called a ____.", ["monk", "scribe", "inspector", "count"], "d", 6),
      mc("The Treaty of Verdun divided the empire into ____ parts.", ["two", "three", "four", "five"], "b", 8),
    ]),
    TRUEFALSE([
      tf("Charlemagne learned to write well as a boy.", false, "He never learned to write as a boy, and he practiced late in life with little success.", 1),
      tf("The Saxons gave in quickly.", false, "They fought him for about thirty years.", 4),
      tf("Alcuin was an English monk who ran the court school.", true, "", 7),
      tf("Vikings, Muslim raiders and Magyars struck the empire from three directions.", true, "", 9),
    ]),
    KEYWORDS([
      at(2, c("What Germanic people built a strong kingdom in what's now France?", "The Franks.", "franks|frank")),
      at(5, c("What title was Charlemagne given in Rome in the year 800?", "Emperor.", "emperor")),
      at(6, c("What was a powerful landholder who ran a region for Charlemagne called?", "A count.", "count")),
      at(8, c("What is a written agreement between rulers, like the one in 843, called?", "A treaty.", "treaty")),
    ]),
    THINK([
            told("Why did Wido think forced baptism was wrong?",
        "A faith forced on people with a sword is not the faith the first missionaries carried.",
        "A faith forced on people with a sword is not the faith the first missionaries carried.", 4),
      told("How did Charlemagne keep his counts honest?",
        "To keep the counts honest, he sent out inspectors, usually a count and a bishop traveling in pairs, to report back.",
        "To keep the counts honest, he sent out inspectors, usually a count and a bishop traveling in pairs, to report back.", 6),
      told("Why didn't the empire last after Charlemagne?",
        "In the end Charlemagne had held his empire together with counts, inspectors, laws and schools, but it worked only as long as Charlemagne was alive to run it.",
        "In the end Charlemagne had held his empire together with counts, inspectors, laws and schools, but it worked only as long as Charlemagne was alive to run it.", 9),
    ]),
  ],
}),

/* ── HISTORY U2-L9 ─────────────────────────────────────────────────────── */
sheet({
  subject: "History", slug: "reading-the-map-homework", lesson: "history/reading-the-map",
  includedWith: "history/reading-the-map",
  title: "Reading the Map: Homework",
  dek: "Read the story of a girl and her grandfather's old globe, then show how latitude and longitude find a place, which map answers which question, and how the land shaped history.",
  blurb: "A one-page story of map reading, then multiple choice, true or false, key words, a map sort and written answers. Answer key included.",
  contains: [
    "A one-page story of latitude, longitude and the lands around Europe",
    "A sort of physical, political and thematic maps",
    "Multiple choice, true or false, and key words to find in the story",
    "Written answers, and an answer key that names the paragraph",
  ],
  eyebrow: "World History &middot; U2-L9",
  signoff: "Latitude first, longitude second, and the land explains a lot of the story.",
  passage: { title: "The Globe in the Attic", paras: [
    "Lena's grandfather had been a ship's navigator, and on a rainy afternoon he carried an old globe down from the attic and set it spinning. A pilot flying over the sea at night has no landmarks, he told her, so the only thing he has to find a city by is two numbers. Then he explained why this belongs in a history lesson. Geography is the study of the earth's features and of how people live with them, and land decides a great deal about what people can do: mountains slow armies down, rivers carry traders, deserts keep people moving, and a harbor makes a city rich.",
    "He unrolled three maps on the floor and said the first job is choosing the right one. A physical map shows the natural features of the land, such as mountains, rivers, deserts and seas, usually with colors that show how high the ground is. A political map shows what people have drawn on the land, like borders, countries, capitals and cities. A thematic map shows one kind of information, such as religion, climate or trade routes. If you want to know why an army couldn't cross a land, he said, ask for the physical map, and if you want to know who ruled it, ask for the political one.",
    "Then he pointed at the imaginary lines on the globe. The equator runs around the middle and splits the earth into a northern half and a southern half. Lines of latitude run east and west, parallel to the equator, and they measure how far north or south a place is, in degrees. The prime meridian runs from the North Pole to the South Pole through Greenwich, near London, and lines of longitude run through the poles and measure how far east or west of it a place is. A circle has 360 degrees, so latitude goes up to 90 and longitude up to 180 each way, and every number ends in a letter, N or S, E or W.",
    "Lena asked him to prove it by finding Rome, which sits at about 42 degrees north and 12 degrees east. He told her to start at the equator and count up toward the pole until she reached 42, because the N says north, and to put one finger on that line. Then she started at the prime meridian and counted east to 12, and put a second finger on that line. Where her fingers met was Rome, and her grandfather explained what she had just found. A place's absolute location is the one spot where its latitude line and its longitude line cross. He made her say the latitude first and the longitude second, every time.",
    "Next they read the land itself. Europe is bordered by the Atlantic Ocean to the west, the Arctic Ocean to the north and the Mediterranean Sea to the south, and the Alps stood like a wall between Italy and the lands to the north, which is why the church had to send missionaries over the mountains. The Pyrenees ran between France and Spain, where the Frankish kingdom met Muslim Spain. The north and west are plains, good for farming, and rivers like the Rhine, which runs north to the North Sea, and the Danube, which flows east to the Black Sea, were highways for trade. The Volga, the longest river in Europe, runs across Russia to the Caspian Sea.",
    "He turned the globe south. Cross the Mediterranean at the Strait of Gibraltar, only about nine miles wide at its narrowest, and you're in North Africa, most of which is the Sahara, the largest hot desert in the world. A thin green ribbon runs through it along the Nile, which flows north to the sea in Egypt and fed one of the oldest civilizations. East of Egypt, the Arabian Desert covers most of the Arabian Peninsula, where the Bedouin moved with the rain and the oases, and farther north the Tigris and Euphrates run through what's now Iraq, with Baghdad built on the Tigris.",
    "Last he put his finger on a narrow gap of water called the Bosporus, which lies between the Black Sea and the Mediterranean. Constantinople sat on it, he said. One city on that one strait could control the sea routes between two continents. The land had done some of the work all through the unit: the Bosporus made Constantinople rich and almost impossible to storm, the Pyrenees held a line in Spain, and the Rhine shaped the Frankish kingdom.",
    "Her grandfather closed the atlas and read her a verse from Acts 17:26, where Paul says of God, “And hath made of one blood all nations of men for to dwell on all the face of the earth, and hath determined the times before appointed, and the bounds of their habitation”. The places people lived were no accident, he said, and it's worth knowing the ground they stood on. Lena spun the globe once more and found Rome without any help at all.",
  ] },
  parts: [
    CHECK([
      mc("Geography is the study of the earth's features and ____.", ["the names of kings", "how people live with them", "the dates of battles", "how rocks are dated"], "b", 1),
      mc("Which map shows borders, countries, capitals and cities?", ["a physical map", "a thematic map", "a political map", "a weather map"], "c", 2),
      mc("The prime meridian runs through Greenwich, near ____.", ["Paris", "Rome", "Cairo", "London"], "d", 3),
      mc("To find a place at 42° N, you start counting up from the ____.", ["equator", "prime meridian", "North Pole", "nearest city"], "a", 4),
      mc("The Strait of Gibraltar is about how wide at its narrowest?", ["ninety miles", "nine miles", "nine hundred feet", "nineteen miles"], "b", 6),
    ]),
    TRUEFALSE([
      tf("Latitude numbers go up to 90 and longitude numbers go up to 180 each way.", true, "", 3),
      tf("When you give a place's coordinates, you say the longitude first.", false, "You always give the latitude first and the longitude second.", 4),
      tf("The Volga flows south into the Mediterranean.", false, "The Volga runs across Russia to the Caspian Sea.", 5),
      tf("Constantinople sat on the Bosporus.", true, "", 7),
    ]),
    KEYWORDS([
      at(1, c("What is the study of the earth's features and of how people live with them called?", "Geography.", "geography")),
      at(2, c("What kind of map shows mountains, rivers, deserts and seas?", "A physical map.", "physical map|physical")),
      at(3, c("What are the lines that measure how far north or south of the equator a place is called?", "Latitude.", "latitude")),
      at(3, c("What are the lines that measure how far east or west of the prime meridian a place is called?", "Longitude.", "longitude")),
    ]),
    SORTX("Which Map Do You Need?", "Physical, Political, Thematic", "Paragraph 2 describes the three maps. PHYSICAL shows natural features like mountains and rivers and how high the ground is. POLITICAL shows what people drew on the land, like borders, countries and cities. THEMATIC shows one kind of information, like religion, climate or trade routes.", [
      at(2, set("Write PHYSICAL, POLITICAL, or THEMATIC for the map you'd use.", [
        ["You want to see how high the ground is.", "PHYSICAL. Its colors show how high the ground is.", "physical"],
        ["You want to see who ruled a land, and where the capitals were.", "POLITICAL. It shows borders, countries, capitals and cities.", "political"],
        ["You want to see the places a religion spread.", "THEMATIC. It shows one kind of information.", "thematic"],
        ["You want to see the trade routes.", "THEMATIC. It shows one kind of information.", "thematic"],
      ])),
    ]),
    THINK([
            told("What is geography, and what does land decide about people?",
        "Geography is the study of the earth's features and of how people live with them, and land decides a great deal about what people can do: mountains slow armies down, rivers carry traders, deserts keep people moving, and a harbor makes a city rich.",
        "Geography is the study of the earth's features and of how people live with them, and land decides a great deal about what people can do: mountains slow armies down, rivers carry traders, deserts keep people moving, and a harbor makes a city rich.", 1),
      told("What is a place's absolute location?",
        "A place's absolute location is the one spot where its latitude line and its longitude line cross.",
        "A place's absolute location is the one spot where its latitude line and its longitude line cross.", 4),
      told("Why was a city on the Bosporus so important?",
        "One city on that one strait could control the sea routes between two continents.",
        "One city on that one strait could control the sea routes between two continents.", 7),
    ]),
  ],
}),

/* ── HISTORY U2-L10 REVIEW ─────────────────────────────────────────────── */
sheet({
  subject: "History", slug: "history-unit-2-review-homework", lesson: "history/unit-2-review",
  includedWith: "history/unit-2-review",
  title: "Unit 2 Review: Homework",
  dek: "Read the story of a campfire retelling, then show what you remember about the Byzantine, Muslim and Frankish worlds and what held each one together.",
  blurb: "A one-page story that walks back over the whole unit, then multiple choice, true or false, key words, a three-worlds sort and written answers. Answer key included.",
  contains: [
    "A one-page story that walks back over the whole unit",
    "A sort of the Byzantine, Muslim and Frankish worlds",
    "Multiple choice, true or false, and key words to find in the story",
    "Written answers, and an answer key that names the paragraph",
  ],
  eyebrow: "World History &middot; U2-L10",
  signoff: "Three worlds each tried to hold themselves together, and the land helped explain how.",
  passage: { title: "Around the Campfire", paras: [
    "Jonah's cousin Dee had missed a month of the co-op class, so one night by the campfire he told her the whole unit in one sitting. It began, he said, with a city whose walls held off army after army for a thousand years, where people went on calling themselves Romans long after Rome had fallen. Everything in the unit was an answer to a single question: what holds a world together when the old empire is gone?",
    "That city was Constantinople, he said, and it was rich from the ships that had to pass it and safe behind its sea and its double wall. In 532 its own crowd nearly drove out the emperor Justinian, but his wife Theodora refused to run, so he stayed to rebuild the great church of Hagia Sophia and to gather Rome's tangled laws into one Code. That Code still sits behind courtrooms today, and the city lasted until 1453, when the Ottoman Turks finally broke through its walls.",
    "The church there and the church in the West had been drifting apart for centuries, Jonah said, over who was in charge, over icons and over one added phrase in the creed. In July of 1054 a cardinal named Humbert laid a letter on the altar of Hagia Sophia, and the schism that followed, the break between them, split the church into the Roman Catholic and the Eastern Orthodox. They disagreed about the pope, priests marrying and the language of worship, but they kept the same gospel, baptism and bishops, the way Ephesians 4:5 puts it: “One Lord, one faith, one baptism”.",
    "Meanwhile, he went on, a merchant named Muhammad said in the Arabian desert that God had spoken to him. After the Hijrah of 622 and his death in 632, the faith of Islam spread across three continents. A century later its rulers held land from Spain to the edge of India, and in 762 the Abbasids founded Baghdad, a marketplace for the world with the House of Wisdom at its heart. Scholars there translated Greek books, borrowed Indian numerals and wrote the book that gave us the word algebra, and the golden age ended when the Mongols reached the city in 1258.",
    "In Spain, a prince named Abd al-Rahman escaped a massacre and built a kingdom whose capital, Cordoba, became a city where Muslims, Jews and Christians shared books. All the while the border kept filling with raids and counter-raids, and in the east the Seljuk Turks pressed on the Byzantines, who in 1095 sent a call for help to the West.",
    "The West was the strangest part, Jonah told her, because it had almost no walls at all. The cities had emptied and the schools had closed, but monks like Benedict's followers kept the books alive by copying them by hand in their scriptoriums, the rooms set aside for that work, and missionaries like Patrick, Augustine and Boniface carried the faith north. The Franks, led by Clovis, Charles Martel and Pepin, built a strong kingdom, and in the year 800 the pope crowned Charlemagne emperor. He held his land together with counts, inspectors and a court school. His empire was held together by one man's will, so it fell apart once he was gone. In 843 his grandsons split it into three. Vikings, Muslim raiders and the Magyars, horsemen from the east, struck from every side.",
    "Dee asked how a map fit in, and Jonah said it explained a lot. The Bosporus made Constantinople rich and almost impossible to storm, the desert made the Bedouin travelers who carried a message far, the Tigris gave Baghdad its markets and the Pyrenees marked the line between the Franks and Muslim Spain. That was the unit in one view: three worlds, each trying to hold itself together, and the one with the least to hold it was about to try something new.",
    "The fire popped, and Dee asked what a frightened village does when no king can protect it. Jonah grinned and poked the coals. That, he said, is where the next unit starts, with a lord, a knight and a promise.",
  ] },
  parts: [
    CHECK([
      mc("Who refused to run when the crowd nearly drove Justinian out in 532?", ["the pope", "his wife Theodora", "a cardinal named Humbert", "Charlemagne"], "b", 2),
      mc("The split of 1054 divided the church into Roman Catholic and ____.", ["Eastern Orthodox", "Frankish", "Abbasid", "Mongol"], "a", 3),
      mc("Which city did the Abbasids found in 762 as a marketplace for the world?", ["Cordoba", "Constantinople", "Baghdad", "Rome"], "c", 4),
      mc("Which Spanish city let Muslims, Jews and Christians share books?", ["Aachen", "Verdun", "Antioch", "Cordoba"], "d", 5),
      mc("Who kept books alive by copying them in their scriptoriums?", ["Vikings", "monks", "Magyars", "inspectors"], "b", 6),
    ]),
    TRUEFALSE([
      tf("Constantinople lasted until 1453, when the Ottoman Turks broke through its walls.", true, "", 2),
      tf("After 1054, the two churches stopped sharing the same gospel, baptism and bishops.", false, "They disagreed about the pope, priests marrying and the language of worship, but kept the same gospel, baptism and bishops.", 3),
      tf("The Mongols reached Baghdad in 1258.", true, "", 4),
      tf("Charlemagne's empire stayed whole after his death.", false, "His grandsons split it into three in 843.", 6),
    ]),
    KEYWORDS([
      at(3, c("What word names the break that split the church in 1054?", "Schism.", "schism")),
      at(4, c("Baghdad's scholars wrote a book that gave us the word for which kind of math?", "Algebra.", "algebra")),
      at(6, c("What are the rooms where monks copied books by hand called?", "Scriptoriums.", "scriptorium|scriptoriums")),
      at(6, c("Which horsemen from the east struck central Europe?", "The Magyars.", "magyar|magyars")),
    ]),
    SORTX("Three Worlds", "Byzantine, Muslim, Frankish", "Paragraphs 2, 4, 5 and 6 tell about the three worlds. BYZANTINE is the eastern empire around Constantinople. MUSLIM is the world of Islam, with Baghdad and Spain. FRANKISH is the kingdom of the Franks in the West, under Charlemagne.", [
      at(6, set("Write BYZANTINE, MUSLIM, or FRANKISH for the world each belongs to.", [
        ["Its capital had a double wall and lasted until 1453.", "BYZANTINE. That was Constantinople.", "byzantine"],
        ["Its marketplace city of Baghdad had the House of Wisdom.", "MUSLIM. Baghdad was founded by the Abbasids.", "muslim"],
        ["Its ruler used counts, inspectors and a court school.", "FRANKISH. That was Charlemagne.", "frankish"],
        ["Its emperor gathered Rome's tangled laws into one Code.", "BYZANTINE. That was Justinian.", "byzantine"],
        ["Its Cordoba was a city where Muslims, Jews and Christians shared books.", "MUSLIM. That was Abd al-Rahman's kingdom in Spain.", "muslim"],
      ])),
    ]),
    THINK([
            told("What single question was everything in the unit an answer to?",
        "Everything in the unit was an answer to a single question: what holds a world together when the old empire is gone?",
        "Everything in the unit was an answer to a single question: what holds a world together when the old empire is gone?", 1),
      told("What did the two churches still share after the split?",
        "They disagreed about the pope, priests marrying and the language of worship, but they kept the same gospel, baptism and bishops, the way Ephesians 4:5 puts it: “One Lord, one faith, one baptism”.",
        "They disagreed about the pope, priests marrying and the language of worship, but they kept the same gospel, baptism and bishops, the way Ephesians 4:5 puts it: “One Lord, one faith, one baptism”.", 3),
      told("Why did Charlemagne's empire fall apart?",
        "His empire was held together by one man's will, so it fell apart once he was gone.",
        "His empire was held together by one man's will, so it fell apart once he was gone.", 6),
    ]),
  ],
}),

/* ── HISTORY U3-L1 ─────────────────────────────────────────────────────── */
sheet({
  subject: "History", slug: "what-feudalism-actually-was-homework", lesson: "history/what-feudalism-actually-was",
  includedWith: "history/what-feudalism-actually-was",
  title: "What Feudalism Actually Was: Homework",
  dek: "Read the story of a village that nobody came to save, then show how land for service worked, who owed whom, and what held the whole pyramid together.",
  blurb: "A one-page story of a Viking raid and the feudal pyramid, then multiple choice, true or false, key words, a lord-or-vassal sort and written answers. Answer key included.",
  contains: [
    "A one-page story of a village, a lord, a knight and a serf",
    "A sort of what a lord owes and what a vassal owes",
    "Multiple choice, true or false, and key words to find in the story",
    "Written answers, and an answer key that names the paragraph",
  ],
  eyebrow: "World History &middot; U3-L1",
  signoff: "Everyone owed someone above him, and the one at the bottom owed the most and held the least power.",
  passage: { title: "Nobody Is Coming", paras: [
    "One morning in the 880s, a boy named Osric was fishing on the riverbank of his village in western Francia when long, low ships came sliding up the water with a dragon carved on the front of each. The king was two hundred miles away, and nobody was coming to save them. There was no army in the village, and the nearest stone wall belonged to a nobleman half a day's walk off. By evening the monastery was burning, and everyone who lived through it learned the same lesson: when no king can protect you, somebody closer has to.",
    "Osric's father Wulf explained how it had come to this. Charlemagne's empire had held together through one strong man, and after he died his grandsons split it in three at the treaty of 843. The kings who were left were too weak to defend their coasts, and Vikings, Magyars and Muslim raiders arrived from three directions at once. Trade had shrunk and the cities were small, so wealth was no longer coins in a city but land, with farms, forests and streams that could feed an army.",
    "That's when people made a deal, Wulf said, and spread over a continent it was called feudalism. Feudalism was a system in which land was given in return for loyalty and service. A lord was a powerful noble who owned more land than he could ever defend or farm by himself, so he gave a piece of it, called a fief, to a lesser noble. That man became his vassal, which means a man bound to serve a lord in return for land, and many vassals were knights, warriors who fought on horseback.",
    "Osric once watched his village's knight, Sir Raoul, make the promise. He knelt, placed his hands between his lord's hands and swore to be loyal. In a world where almost nobody could write, a man's word was the only contract there was, so an oath like that was serious business. The deal ran both ways: the vassal owed his lord service in his army and his court, along with taxes, and the lord owed the vassal land and protection. It wasn't an oath between a rich man and a poor one, but between two nobles who both had something the other needed.",
    "If you stacked all those agreements, Wulf said, you got a pyramid. The king stood at the top as the ruler of a large area. Below him came the church officials and the great nobles, who owned land, power and wealth, and below them the knights, who gave military service in exchange for a piece of land. At the very bottom, carrying the weight of the rest, were the peasants known as serfs, who lived and worked on a lord's or vassal's land. A vassal could also be a lord to someone below him, so each level owed something to the one above.",
    "Wulf traced the chain in their own village. The king gave the great lord Godric land and protection, and in return Godric owed the king soldiers and loyalty. Godric couldn't farm all of it, so he gave a fief to Sir Raoul, who owed Godric his sword, days of service each year and a share of taxes. On Raoul's fief lived the serfs, like Wulf, who farmed the land and gave most of the crops to their lord, and Raoul gave them shelter and protection in return. Read upward, everyone owed someone above him, and the one at the very bottom owed the most and held the least power.",
    "A serf's life wasn't the same as a slave's, Wulf said, because a serf couldn't be sold apart from the land. But he couldn't leave it either, since he was bound to the soil, and if a new lord took over, the serf stayed with the property. Serfs worked the land every day except Sundays and holy days, handed over much of what they grew, and in return got a roof and the lord's protection.",
    "That night, in the smoke of the burned monastery, Osric asked who had protected them. The lord, Wulf said, and the price was service and loyalty. His father had learned a verse from the monks, Colossians 4:1: “Masters, give unto your servants that which is just and equal; knowing that ye also have a Master in heaven.” Paul wrote that to Christians in a world of masters and servants. The verse holds the powerful to a standard, because even the man at the top of any chain answers to someone higher.",
  ] },
  parts: [
    CHECK([
      mc("How far away was the king when the ships came?", ["a day's walk", "two hundred miles", "in the next village", "inside the monastery"], "b", 1),
      mc("A vassal is a man bound to serve a lord in return for ____.", ["a horse", "food", "land", "a castle"], "c", 3),
      mc("What made the agreement between lord and vassal binding?", ["a written contract", "a payment of gold", "a letter from the king", "an oath"], "d", 4),
      mc("Who stood at the bottom of the pyramid?", ["serfs", "knights", "church officials", "the king"], "a", 5),
      mc("A serf couldn't be ____ apart from the land.", ["married", "sold", "paid", "taught"], "b", 7),
    ]),
    TRUEFALSE([
      tf("After the empire broke up, wealth was mostly land.", true, "", 2),
      tf("The oath was between a rich man and a poor one.", false, "It was between two nobles who both had something the other needed.", 4),
      tf("A vassal could also be a lord to someone below him.", true, "", 5),
      tf("A serf was the same as a slave.", false, "A serf couldn't be sold apart from the land, but he couldn't leave it either.", 7),
    ]),
    KEYWORDS([
      at(3, c("What is the system called in which land was given in return for loyalty and service?", "Feudalism.", "feudalism")),
      at(3, c("What is the piece of land a lord gave to a lesser noble called?", "A fief.", "fief")),
      at(3, c("What is a man bound to serve a lord in return for land called?", "A vassal.", "vassal")),
      at(5, c("What are the peasants at the bottom of the pyramid called?", "Serfs.", "serf|serfs")),
    ]),
    SORTX("Who Owes What", "Lord or Vassal", "Paragraph 4 says what each side of the deal owed. A LORD is the noble who gives the land. A VASSAL is the man who gets the land and serves the lord.", [
      at(4, set("Write LORD if the lord owes it, or VASSAL if the vassal owes it.", [
        ["Protection.", "LORD. The lord owed the vassal land and protection.", "lord"],
        ["Service in his army and his court.", "VASSAL. The vassal owed his lord service.", "vassal"],
        ["Land.", "LORD. The lord owed the vassal land and protection.", "lord"],
        ["Taxes.", "VASSAL. The vassal owed his lord taxes.", "vassal"],
      ])),
    ]),
    THINK([
            told("Why did a spoken promise matter so much?",
        "In a world where almost nobody could write, a man's word was the only contract there was, so an oath like that was serious business.",
        "In a world where almost nobody could write, a man's word was the only contract there was, so an oath like that was serious business.", 4),
      told("Who owed the most and held the least power in the chain?",
        "Read upward, everyone owed someone above him, and the one at the very bottom owed the most and held the least power.",
        "Read upward, everyone owed someone above him, and the one at the very bottom owed the most and held the least power.", 6),
      told("What does the verse from Colossians say about the powerful?",
        "The verse holds the powerful to a standard, because even the man at the top of any chain answers to someone higher.",
        "The verse holds the powerful to a standard, because even the man at the top of any chain answers to someone higher.", 8),
    ]),
  ],
}),

/* ── ENGLISH U2-L6 ─────────────────────────────────────────────────────── */
sheet({
  subject: "English", slug: "setting-and-sensory-details-homework", lesson: "english/setting-and-sensory-details",
  includedWith: "english/setting-and-sensory-details",
  title: "Setting and Sensory Details: Homework",
  dek: "Read a story set on a cold harbor dock, then find the setting, sort the sensory details by sense, and show how a place can push back on a character.",
  blurb: "A one-page story full of sensory details, then multiple choice, true or false, key words, a sort of the senses and written answers. Answer key included.",
  contains: [
    "A one-page story set on a Maine dock before sunrise",
    "A sort of sensory details into sight, hearing, touch, smell and taste",
    "Multiple choice, true or false, and key words to find in the story",
    "Written answers, and an answer key that names the paragraph",
  ],
  eyebrow: "English 7 &middot; U2-L6",
  signoff: "Ask which part of your body would notice it, and give both the when and the where.",
  passage: { title: "Before the Sun Came Up", paras: [
    "Ines remembered her teacher's rule as she stood on the dock at five in the morning. Mr. Bell had told the class what a setting is. The setting of a story is the time and place where it happens, both the when and the where. A place with no time attached is only half an answer. Her own setting was a fishing harbor in Maine in late October, an hour before sunrise, and she was about to go out on her uncle's lobster boat for the first time.",
    "Mr. Bell had a second rule. A writer doesn't just tell you the place, he said, but puts you in it with sensory details, the details you could pick up with your senses if you were standing there: what you see, hear, touch, smell and taste. Ines decided to collect them like shells as the morning went on, and to see which ones the harbor handed her.",
    "The first were for her eyes. The harbor lay under a lid of low gray fog, and the only color came from the red buoys bobbing in the black water and a string of yellow lights along the pier. Her uncle's boat, the Marybeth, was white with rust streaks running down her sides like tears.",
    "Then came the sounds. The diesel engine coughed twice and caught with a rumble she could feel in her ribs, and somewhere out in the fog a bell buoy clanked slowly, over and over. Gulls cried overhead as though they'd been waiting all night for somebody to come.",
    "The rope was the first thing she touched, and it was stiff and wet and so cold that it burned through her gloves. The air smelled of diesel and old fish bait, with a clean edge of salt underneath. When her uncle handed her a thermos of hot cocoa, it tasted of metal and sugar, and it was the best thing she'd ever put in her mouth.",
    "Out past the breakwater the place began to push back. The wind threw spray across the deck until the boards turned slick as glass, and Ines slid halfway to the rail before her uncle caught her sleeve. When he asked her to tie off a line, the cold had stolen what she could do with her hands, and the knot she made fell apart in her fingers. If you pulled the cold out of the story, she thought, nothing would be hard anymore. The harbor was working against her the way a character in a story would.",
    "The gray sky, the silence and the empty water also gave the morning a mood. A mood is the feeling a setting gives. It felt lonely and a little dangerous, even with her uncle three steps away, and she kept her eyes on the horizon until the first thin line of orange showed through.",
    "On Monday she told Mr. Bell that she'd used four of the five senses and hadn't needed all of them in any one moment. A writer picks the senses that fit the scene, he agreed, and he asked her which detail she'd keep if she could keep only one. She said it was the bell buoy, because she could still hear it.",
  ] },
  parts: [
    CHECK([
      mc("The setting of a story is ____.", ["the main character's name", "the time and place where it happens", "the problem the hero faces", "the lesson the story teaches"], "b", 1),
      mc("Sensory details are things you could ____ if you were standing there.", ["only imagine", "ask somebody else about", "notice with your five senses", "find in a dictionary"], "c", 2),
      mc("What was Ines's setting?", ["a lake in Minnesota in July", "a city street at noon", "a farm in the spring", "a harbor in Maine in late October before sunrise"], "d", 1),
      mc("How did the setting act on Ines?", ["The deck turned slick and the cold left her hands too numb to tie a knot", "It gave her extra time to rest", "It warmed her fingers", "It scared away the gulls"], "a", 6),
      mc("What did Mr. Bell say about the five senses?", ["A writer uses all five in every line", "A writer picks the senses that fit the scene", "A writer never uses taste", "A writer should only describe what she sees"], "b", 8),
    ]),
    TRUEFALSE([
      tf("A setting gives only the place and never the time.", false, "A setting is both the when and the where.", 1),
      tf("A writer usually uses all five senses at once.", false, "A writer picks the senses that fit the moment.", 8),
      tf("The cold made it harder for Ines to do things with her hands.", true, "", 6),
      tf("Mood is the feeling a setting gives.", true, "", 7),
    ]),
    KEYWORDS([
      at(1, c("What do we call the time and place where a story happens?", "The setting.", "setting")),
      at(2, c("What are the details you could pick up with your senses called?", "Sensory details.", "sensory details|sensory")),
      at(7, c("What is the feeling a setting gives called?", "Mood.", "mood")),
    ]),
    SORTX("Sort the Senses", "Sight, Hearing, Touch, Smell, Taste", "Paragraphs 3, 4 and 5 give the details. SIGHT is what you see, HEARING is what you hear, TOUCH is what you feel with your skin, SMELL is what you smell, and TASTE is what you taste.", [
      at(5, set("Write SIGHT, HEARING, TOUCH, SMELL, or TASTE for the sense that notices each detail.", [
        ["The red buoys bobbing in the black water.", "SIGHT. You'd notice it with your eyes.", "sight"],
        ["The bell buoy clanking in the fog.", "HEARING. You'd notice it with your ears.", "hearing"],
        ["The rope stiff and wet with cold.", "TOUCH. You'd notice it with your skin.", "touch"],
        ["The diesel and old fish bait.", "SMELL. You'd notice it with your nose.", "smell"],
        ["The cocoa tasting of metal and sugar.", "TASTE. You'd notice it with your tongue.", "taste"],
      ])),
    ]),
    THINK([
            told("What is the setting of a story?",
        "The setting of a story is the time and place where it happens, both the when and the where.",
        "The setting of a story is the time and place where it happens, both the when and the where.", 1),
      told("How was the harbor like a character in the story?",
        "The harbor was working against her the way a character in a story would.",
        "The harbor was working against her the way a character in a story would.", 6),
      told("What is a mood in a story?",
        "A mood is the feeling a setting gives.",
        "A mood is the feeling a setting gives.", 7),
    ]),
  ],
}),

/* ── ENGLISH U2-L7 ─────────────────────────────────────────────────────── */
sheet({
  subject: "English", slug: "figures-of-speech-homework", lesson: "english/figures-of-speech",
  includedWith: "english/figures-of-speech",
  title: "Figures of Speech: Homework",
  dek: "Read a story told on a porch in a thunderstorm, then find the similes, metaphors and personification in it and say what each one makes you see.",
  blurb: "A one-page story full of figures of speech, then multiple choice, true or false, key words, a naming sort and written answers. Answer key included.",
  contains: [
    "A one-page story of a boy, his grandmother and a storm",
    "A sort of similes, metaphors and personification",
    "Multiple choice, true or false, and key words to find in the story",
    "Written answers, and an answer key that names the paragraph",
  ],
  eyebrow: "English 7 &middot; U2-L7",
  signoff: "Find the two things, look for like or as, then name it and say what it makes you see.",
  passage: { title: "A Storm on the Porch", paras: [
    "Kai sat on the porch swing with a notebook, scowling at a poem that sounded as flat as a table. His grandmother, who had taught English for forty years, set down her tea and listened to the thunder for a moment before she spoke. When you mean exactly what the words say, she told him, you are speaking literally, as in the rain is heavy. A figure of speech does the opposite, because it describes one thing in terms of something very different, so the words aren't literally true but the picture is.",
    "The thunder rumbled just then, and she smiled. “That sounded like a freight train rolling over the roof,” she said. That's a simile, she explained, which compares two different things by using the word like or the word as. Thunder and a freight train are very different, but they share a heavy, rolling noise, and the word like is what announces the comparison.",
    "A metaphor does the same kind of work but skips the little word, she said, and simply says that one thing is the other. The porch roof is a drum tonight, she told him, and Kai could hear it: the rain pounding out a loud, fast beat. The roof isn't really a drum, and nobody thinks it is, but the picture is true.",
    "She gave him three quick moves that work on every figure he would ever read. First find the two things being compared, then look for like or as between them, and then name it: a simile if the word is there and a metaphor if it isn't. They tried it on the lightning, which she called a whip across the sky, and Kai said there was no like or as, so it was a metaphor. Then she said the clouds were as gray as dishwater, and he found the word as, so it was a simile.",
    "Her next figure made him laugh, because the wind outside had been banging the gate all afternoon. “The wind is sulking around the corner of the house,” she said. That's personification, she explained, which gives human feelings to something that isn't human, and wind can't really sulk. Then she added one more, hyperbole, which stretches the truth on purpose, as in I've told you a million times, and she said the porch swing had been creaking for a million years.",
    "Kai looked at his flat poem and saw the problem. He had written that the storm was loud and the night was scary, and every word was plain and true and forgettable. Poets love figures of speech, his grandmother said, and so do comedians. One good comparison can do the work of a whole paragraph. He crossed out his lines and started over.",
    "When he finished, she read it aloud, and then she gave him one more lesson. Don't stop at the name of a figure, she said. The name is only half of the job, and the other half is saying what the comparison makes you see. The freight train made him hear something heavy and unstoppable, and the drum made him feel a loud, steady beat over his head.",
    "This was the poem he left on the swing for his sister to find: “The thunder rolls like a freight train through the night. / The porch roof is a drum for the rain. / The wind sulks around the corner, / and the old oak waits, holding its breath.” His grandmother said it was the first one of his that she could hear and see at the same time, and then they sat and watched the clouds move off the way a tired crowd drifts home.",
  ] },
  parts: [
    CHECK([
      mc("When you mean exactly what the words say, you are speaking ____.", ["figuratively", "literally", "poetically", "loudly"], "b", 1),
      mc("A simile compares two different things by using ____.", ["the word is", "the word than", "the word like or the word as", "the word but"], "c", 2),
      mc("A metaphor ____.", ["says that one thing is the other, without like or as", "always uses the word like", "gives human feelings to a thing", "stretches the truth on purpose"], "a", 3),
      mc("Hyperbole is ____.", ["a comparison using like or as", "a kind of rhyme", "a word with two meanings", "a way of stretching the truth on purpose"], "d", 5),
      mc("After you name a figure of speech, what is the other half of the job?", ["counting the words", "saying what the comparison makes you see", "finding a rhyme", "fixing the spelling"], "b", 7),
    ]),
    TRUEFALSE([
      tf("A figure of speech is literally true.", false, "The words aren't literally true, but the picture is.", 1),
      tf("“The lightning was a whip across the sky” is a simile.", false, "It has no like or as, so it's a metaphor.", 4),
      tf("“The clouds were as gray as dishwater” is a simile.", true, "", 4),
      tf("Personification gives human feelings to something that isn't human.", true, "", 5),
    ]),
    KEYWORDS([
      at(2, c("What figure of speech compares two things using like or as?", "A simile.", "simile")),
      at(3, c("What figure of speech simply says that one thing is the other?", "A metaphor.", "metaphor")),
      at(5, c("What figure of speech gives human feelings to something that isn't human?", "Personification.", "personification")),
      at(5, c("What word names stretching the truth on purpose?", "Hyperbole.", "hyperbole")),
    ]),
    SORTX("Name the Figure", "Simile, Metaphor, Personification", "Kai's poem is in paragraph 8. A SIMILE compares two things using like or as. A METAPHOR says one thing is the other, with no like or as. PERSONIFICATION gives human feelings to something that isn't human.", [
      at(8, set("Write SIMILE, METAPHOR, or PERSONIFICATION for each line from Kai's poem.", [
        ["The thunder rolls like a freight train through the night.", "SIMILE. It has the word like.", "simile"],
        ["The porch roof is a drum for the rain.", "METAPHOR. It says one thing is the other.", "metaphor"],
        ["The wind sulks around the corner.", "PERSONIFICATION. Wind can't really sulk.", "personification"],
        ["The old oak waits, holding its breath.", "PERSONIFICATION. A tree can't really hold its breath.", "personification"],
      ])),
    ]),
    THINK([
            told("What three steps tell you whether a figure is a simile or a metaphor?",
        "First find the two things being compared, then look for like or as between them, and then name it: a simile if the word is there and a metaphor if it isn't.",
        "First find the two things being compared, then look for like or as between them, and then name it: a simile if the word is there and a metaphor if it isn't.", 4),
      told("Why do poets and comedians love figures of speech?",
        "One good comparison can do the work of a whole paragraph.",
        "One good comparison can do the work of a whole paragraph.", 6),
      told("Why isn't it enough to name a figure of speech?",
        "The name is only half of the job, and the other half is saying what the comparison makes you see.",
        "The name is only half of the job, and the other half is saying what the comparison makes you see.", 7),
    ]),
  ],
}),

/* ── ENGLISH U2-L8 ─────────────────────────────────────────────────────── */
sheet({
  subject: "English", slug: "holding-a-group-discussion-homework", lesson: "english/holding-a-group-discussion",
  includedWith: "english/holding-a-group-discussion",
  title: "Holding a Group Discussion: Homework",
  dek: "Read the story of a group that failed once and then got it right, and name the five steps of a good discussion as you see them work.",
  blurb: "A one-page story of a group discussion going badly and then well, then multiple choice, true or false, key words, a steps sort and written answers. Answer key included.",
  contains: [
    "A one-page story of one group, two tries and five steps",
    "A sort of the five steps of a good discussion",
    "Multiple choice, true or false, and key words to find in the story",
    "Written answers, and an answer key that names the paragraph",
  ],
  eyebrow: "English 7 &middot; U2-L8",
  signoff: "Roles, a goal, a fair brainstorm, a consensus, and a report that gives the decision first.",
  passage: { title: "Fifteen Minutes", paras: [
    "Mr. Torres gave four students fifteen minutes to agree on one invention to show at the co-op fair. Ruth, Caleb, Mia and Owen all started talking at once, and Caleb's voice got louder until it took over the whole table. Ten minutes later there was no decision, Owen hadn't said a word, and three of them had wasted a lesson. Mr. Torres collected the papers and said they'd try it again with a plan.",
    "A group really can beat one person, he told them. A group sees more of a problem and thinks of more ideas than any single person does. That's why businesses solve problems in teams. But a group only works if it's organized, and a good discussion comes down to five steps.",
    "The first step is to choose roles. Mia became the moderator, the person who keeps the discussion moving, makes sure everyone gets a turn and brings people back when they wander off the topic. Owen became the recorder, who writes down the ideas and the decisions so that nothing good gets lost. Choosing them on purpose was better than letting the loud one talk and the quiet one watch.",
    "The second step is to state the goal out loud. “Our goal is to choose one invention for the fair,” Mia said, and Owen wrote it at the top of his page. The more specific the goal, the better the discussion, Mr. Torres reminded them, and without one a group gets fifteen minutes of pleasant conversation and nothing to show for it.",
    "The third step is to brainstorm, which means to pour out as many ideas as you can before anybody judges any of them. They started with a quiet minute when everyone wrote an idea down, so the loudest voice wouldn't decide the direction before everyone else had thought. Then they went around the table, each person taking a fair share of the time. Caleb offered a robot that folds socks and nobody laughed, and that strange idea led Ruth to think of the printing press, a machine that did a job people used to do by hand.",
    "The fourth step is a consensus, a general agreement that everyone in the group can live with. It isn't the same as a vote, Mr. Torres explained, because a vote can leave two people unhappy and a consensus keeps talking until the last person has been heard. Nobody interrupted, Caleb asked a question when he didn't understand, and Mia asked whether everyone agreed. Caleb wanted to change one word, so they did, and then Owen read the decision back to make sure everyone meant the same thing.",
    "The fifth step is to present. Ruth stood and told the class the decision first, that the group would show the printing press, and then she gave two short reasons. Mr. Torres said that was exactly right. A good report states the decision first, then gives the reasons, and it's short enough that the listeners don't lose the thread.",
    "Afterward Mr. Torres read them Proverbs 15:22: “Without counsel purposes are disappointed: but in the multitude of counsellors they are established.” A plan that many people have looked at is steadier than one person's idea, he said, and he asked them what had changed between their first try and their second. Owen was the one to answer, because this time he'd been asked.",
  ] },
  parts: [
    CHECK([
      mc("What went wrong in the group's first try?", ["Everyone talked at once and Caleb took over", "The room was too quiet", "The goal was too specific", "They had two moderators"], "a", 1),
      mc("The person who keeps the discussion moving and makes sure everyone gets a turn is the ____.", ["recorder", "presenter", "moderator", "timekeeper"], "c", 3),
      mc("To brainstorm is to ____.", ["pick the best idea first", "pour out as many ideas as you can before anybody judges them", "take a quick vote", "argue about every idea"], "b", 5),
      mc("A consensus is ____.", ["a vote the majority wins", "the loudest person's idea", "an idea nobody has questioned", "a general agreement everyone can live with"], "d", 6),
      mc("A good report states ____ first.", ["the reasons", "the decision", "a joke", "the names of the group"], "b", 7),
    ]),
    TRUEFALSE([
      tf("Four people talking at once is an organized discussion.", false, "A group only works if it's organized, with roles, a goal and a plan.", 1),
      tf("The recorder writes down the ideas and the decisions.", true, "", 3),
      tf("Without a goal, a group can have pleasant conversation and nothing to show for it.", true, "", 4),
      tf("A consensus is the same as a vote.", false, "A vote can leave two people unhappy, and a consensus keeps talking until the last person has been heard.", 6),
    ]),
    KEYWORDS([
      at(3, c("What is the person who keeps the discussion moving called?", "The moderator.", "moderator")),
      at(3, c("What is the person who writes down the ideas and decisions called?", "The recorder.", "recorder")),
      at(5, c("What is it called to pour out as many ideas as you can before anybody judges them?", "To brainstorm.", "brainstorm|brainstorming")),
      at(6, c("What is a general agreement everyone can live with called?", "A consensus.", "consensus")),
    ]),
    SORTX("Name the Step", "Roles, Goal, Brainstorm, Consensus, Present", "Paragraphs 3 to 7 explain the five steps. ROLES means choosing who does what, GOAL means saying what you want out loud, BRAINSTORM means pouring out ideas before anyone judges them, CONSENSUS means an agreement everyone can live with, and PRESENT means telling the class.", [
      at(5, set("Write ROLES, GOAL, BRAINSTORM, CONSENSUS, or PRESENT for the step each action belongs to.", [
        ["Mia agrees to be the moderator and Owen the recorder.", "ROLES. Step one is choosing roles.", "roles"],
        ["Mia says, “Our goal is to choose one invention for the fair.”", "GOAL. Step two is stating the goal.", "goal"],
        ["Everyone writes an idea in silence for a minute, then goes around the table.", "BRAINSTORM. Step three is brainstorming.", "brainstorm"],
        ["Owen reads the decision back to make sure everyone means the same thing.", "CONSENSUS. Step four is reaching a consensus.", "consensus"],
        ["Ruth tells the class the decision first and gives two reasons.", "PRESENT. Step five is presenting.", "present"],
      ])),
    ]),
    THINK([
            told("Why can a group do better than one person?",
        "A group sees more of a problem and thinks of more ideas than any single person does.",
        "A group sees more of a problem and thinks of more ideas than any single person does.", 2),
      told("Why did the group start the brainstorm with a quiet minute?",
        "They started with a quiet minute when everyone wrote an idea down, so the loudest voice wouldn't decide the direction before everyone else had thought.",
        "They started with a quiet minute when everyone wrote an idea down, so the loudest voice wouldn't decide the direction before everyone else had thought.", 5),
      told("What makes a good report?",
        "A good report states the decision first, then gives the reasons, and it's short enough that the listeners don't lose the thread.",
        "A good report states the decision first, then gives the reasons, and it's short enough that the listeners don't lose the thread.", 7),
    ]),
  ],
}),

/* ── ENGLISH U2-L9 ─────────────────────────────────────────────────────── */
sheet({
  subject: "English", slug: "writing-about-your-life-plan-and-draft-homework", lesson: "english/writing-about-your-life-plan-and-draft",
  includedWith: "english/writing-about-your-life-plan-and-draft",
  title: "Writing About Your Life: Plan and Draft: Homework",
  dek: "Read the story of a boy planning and drafting a true story about his own life, then name the four parts of his plan and the steps he took.",
  blurb: "A one-page story of a boy planning and drafting a personal narrative, then multiple choice, true or false, key words, a four-parts sort and written answers. Answer key included.",
  contains: [
    "A one-page story of a boy choosing an event, planning it and drafting it",
    "A sort of the four parts of the plan",
    "Multiple choice, true or false, and key words to find in the story",
    "Written answers, and an answer key that names the paragraph",
  ],
  eyebrow: "English 7 &middot; U2-L9",
  signoff: "Opening, background, events in order, and why it mattered.",
  passage: { title: "Down Cutter Hill", paras: [
    "Noah stared at a blank page. His teacher had asked for an autobiographical incident, which is a true story about one event in your own life that mattered to you. It isn't your whole life or even your whole summer, and the best ones are small, like one game, one argument or one afternoon you still think about. Noah had been trying to write about his whole summer, and the page had stayed blank all week.",
    "So he decided to do what he usually skipped, which was plan. Writing one of these takes three jobs in order: planning, which writers call prewriting, then getting the whole thing down in a first draft, and then revising it. Tonight he would only do the first two.",
    "His first step was to choose an event. He spent two minutes writing down every moment that came to mind, a surprise, a mistake, a win, a time he helped someone and a time he was scared. Then he tested his best choice with three questions: does it mean something special to me, can I remember it well enough to describe it, and am I willing to share it. He picked the day he rode down Cutter Hill, and all three answers were yes. He wrote one sentence on why it mattered and left it where he could see it.",
    "His teacher had given the class a four-part plan. First comes an opening that grabs the reader's attention, which might be a line of dialogue, a question, a surprising statement or a vivid description. Second comes the background, which tells the reader just enough to understand what's going on. Third come the events, told in the order they happened. Last comes the ending, which tells why it mattered, because that is the whole point of telling it.",
    "Noah filled in his plan. The opening would be a line of dialogue: “Don't look down!” my brother yelled. The background was that he had been afraid of hills since the fall before, and that this was the first week with his new bike. The events were that he started at the top, wobbled, fell, got back on and finally reached the bottom. The ending was that a fear shrinks when you ride toward it.",
    "Next he answered who, what, when, where and why, which was the same kind of work as building a setting with the five senses. It was a Saturday morning in July, the asphalt smelled hot, and the chain of his bike clicked as he pushed off. He ran a movie of the event in his head and wrote down what people said, what they looked like and what they did.",
    "Then he began the draft. He wrote the whole thing straight through, on every other line so he'd have room to fix it later, and he made himself not stop to polish a sentence. When he got stuck on a word, he left a blank and kept going, because the polishing could wait for the next lesson.",
    "When he finished, he read the opening aloud to his brother: “Don't look down!” he yelled, and I looked down. His brother laughed at the right spot, and Noah knew the plan had worked. You tell an event so a stranger cares, he decided, by choosing one small thing, planning its four parts, and telling why it mattered to you.",
  ] },
  parts: [
    CHECK([
      mc("An autobiographical incident is ____.", ["the story of your whole life", "a true story about one event in your own life that mattered to you", "a made-up adventure", "a report about a famous person"], "b", 1),
      mc("Planning before you write is called ____.", ["revising", "proofreading", "prewriting", "publishing"], "c", 2),
      mc("Which of these is one of the three questions for testing an event?", ["Does it mean something special to me?", "Is it long enough to fill three pages?", "Did it happen this week?", "Is it exciting enough to impress my friends?"], "a", 3),
      mc("Which part of the plan tells why the event mattered?", ["the opening", "the background", "the events", "the ending"], "d", 4),
      mc("Why write a draft on every other line?", ["so it looks longer", "so you have room to fix it later", "so it's easier to read aloud", "so the teacher can grade it faster"], "b", 7),
    ]),
    TRUEFALSE([
      tf("The best autobiographical incidents are usually small.", true, "", 1),
      tf("The opening of the plan has to be a line of dialogue.", false, "It might also be a question, a surprising statement or a vivid description.", 4),
      tf("The events are told in the order they happened.", true, "", 4),
      tf("In a first draft you should stop to polish each sentence as you go.", false, "Don't stop to polish. The polishing can wait.", 7),
    ]),
    KEYWORDS([
      at(1, c("What is a true story about one event in your own life that mattered to you called?", "An autobiographical incident.", "autobiographical incident|autobiographical")),
      at(2, c("What do writers call planning before they write?", "Prewriting.", "prewriting")),
      at(4, c("What part of the plan tells the reader just enough to understand what's going on?", "The background.", "background")),
      at(7, c("What do we call the first version of a piece of writing?", "A draft.", "draft|first draft")),
    ]),
    SORTX("Fill the Four Parts", "Opening, Background, Events, Ending", "Paragraphs 4 and 5 give the four-part plan. The OPENING grabs the reader, the BACKGROUND tells just enough to understand what's going on, the EVENTS are told in the order they happened, and the ENDING tells why it mattered.", [
      at(5, set("Write OPENING, BACKGROUND, EVENTS, or ENDING for the part of the plan each line belongs to.", [
        ["“Don't look down!” my brother yelled.", "OPENING. A line of dialogue grabs the reader.", "opening"],
        ["He had been afraid of hills since the fall before.", "BACKGROUND. It tells the reader what's going on.", "background"],
        ["He started at the top, wobbled, fell and got back on.", "EVENTS. They're told in the order they happened.", "events"],
        ["A fear shrinks when you ride toward it.", "ENDING. It tells why the event mattered.", "ending"],
      ])),
    ]),
    THINK([
            told("How big should the event be for the best autobiographical incidents?",
        "It isn't your whole life or even your whole summer, and the best ones are small, like one game, one argument or one afternoon you still think about.",
        "It isn't your whole life or even your whole summer, and the best ones are small, like one game, one argument or one afternoon you still think about.", 1),
      told("What three questions does Noah ask to test an event?",
        "Then he tested his best choice with three questions: does it mean something special to me, can I remember it well enough to describe it, and am I willing to share it.",
        "Then he tested his best choice with three questions: does it mean something special to me, can I remember it well enough to describe it, and am I willing to share it.", 3),
      told("Why does the ending of the plan matter so much?",
        "Last comes the ending, which tells why it mattered, because that is the whole point of telling it.",
        "Last comes the ending, which tells why it mattered, because that is the whole point of telling it.", 4),
    ]),
  ],
}),

/* ── ENGLISH U2-L10 ────────────────────────────────────────────────────── */
sheet({
  subject: "English", slug: "writing-about-your-life-revise-homework", lesson: "english/writing-about-your-life-revise",
  includedWith: "english/writing-about-your-life-revise",
  title: "Writing About Your Life: Revise: Homework",
  dek: "Read the story of a boy fixing a robot-sounding draft, then name the six checks, the partner's questions, and how to fold short sentences together with a time word.",
  blurb: "A one-page story of a boy revising his draft, then multiple choice, true or false, key words, a clause sort and written answers. Answer key included.",
  contains: [
    "A one-page story of a boy revising a choppy draft",
    "A sort of independent and subordinate clauses",
    "Multiple choice, true or false, and key words to find in the story",
    "Written answers, and an answer key that names the paragraph",
  ],
  eyebrow: "English 7 &middot; U2-L10",
  signoff: "Hold the draft up to the six checks, then fold short sentences together with a time word.",
  passage: { title: "The Robot Draft", paras: [
    "Noah read his draft aloud to the wall, and it sounded like a robot counting steps: I fell off. I got up. I was mad. I tried again. I fell off again. Every word was true, and every sentence was short, and the story itself was fine. The trouble was the way the sentences were stacked up, one after another, with nothing to join them.",
    "His teacher told him that to revise is to improve a draft after you've written it, by changing what doesn't work, and that it's a different job from proofreading, which only fixes mistakes. She told him to put the draft away overnight, because a paper you wrote an hour ago reads like your own head and one you wrote yesterday reads more like a stranger's. Then he would check it two ways: with a partner in a peer review, and by himself against six checks.",
    "The six checks were these. Does it focus on a single incident, and does it open in a way that grabs the reader? Is there enough background for someone who wasn't there, and are the events in an order the reader can follow? Does it have descriptive details that bring the scene to life, and, most important, does it show what the event meant to the writer? Noah marked each place where the answer was no, and those marks became his revision plan.",
    "His partner Lila read it next, because a partner sees what you can't, since you already know what you meant and she only knows what's on the page. She asked him four questions. Does the beginning grab me? Is anything missing or unnecessary? Where do I want more detail? And do I understand why this mattered to the writer? She circled a line about his lunch, which had nothing to do with the hill, and Noah took her answers as information and not criticism.",
    "Then his teacher showed him the fix for the robot, and it started with the word clause, which is a group of words with a subject and a verb. An independent clause can stand alone as a complete sentence, like I fell off. A subordinate clause has a subject and a verb too, but it begins with a word that makes it lean on another clause, so it can't stand alone, as in when I fell off. The words that start time and place clauses are after, before, until, when, whenever, while, where and wherever.",
    "She showed him how to fold one short sentence into another. Noah had written, I saw the hill. I gulped. He decided the gulp was the main action and the seeing was the time, so he put a time word on the front of the first one: when I saw the hill. Then he joined the two as When I saw the hill, I gulped. When the clause comes first, a comma goes after it, and when it comes second, as in I gulped when I saw the hill, no comma is needed.",
    "Back to the robot, he joined the first two sentences with a time word and got After I fell off, I got up, and he joined the next two and got While I was still mad, I tried again. He kept the last one short, I fell off again. A few short sentences are fine, especially at a moment of high drama, because the aim is variety and not one very long line.",
    "His grandfather, reading over his shoulder, quoted Habakkuk 2:2: “Write the vision, and make it plain upon tables, that he may run that readeth it.” That verse is about a message that has to be clear enough for a reader to run with, Noah said, and revising is how you make your own message plain. He read the new draft to the wall again, and this time it sounded like a person.",
  ] },
  parts: [
    CHECK([
      mc("What was wrong with Noah's first draft?", ["The events were out of order", "The sentences were all short and stacked up with nothing joining them", "It had no ending", "It was about a whole summer"], "b", 1),
      mc("To revise is to ____.", ["fix only the spelling mistakes", "copy the draft over neatly", "improve a draft by changing what doesn't work", "read it aloud once"], "c", 2),
      mc("Which of the partner's questions checks the ending?", ["Does the beginning grab me?", "Is anything missing or unnecessary?", "Where do I want more detail?", "Do I understand why this mattered to the writer?"], "d", 4),
      mc("An independent clause is one that ____.", ["begins with when", "has no subject", "leans on another clause", "can stand alone as a complete sentence"], "d", 5),
      mc("In “When I saw the hill, I gulped,” which clause can't stand alone?", ["When I saw the hill", "I gulped", "both of them", "neither of them"], "a", 6),
    ]),
    TRUEFALSE([
      tf("Proofreading and revising are the same job.", false, "Revising improves a draft by changing what doesn't work, and proofreading only fixes mistakes.", 2),
      tf("You should take a partner's answers as information, not criticism.", true, "", 4),
      tf("A subordinate clause has a subject and a verb but can't stand alone.", true, "", 5),
      tf("When the subordinate clause comes second, you need a comma before it.", false, "No comma is needed when the clause comes second.", 6),
    ]),
    KEYWORDS([
      at(2, c("What word means to improve a draft after you've written it?", "Revise.", "revise|revising")),
      at(2, c("What is it called when a partner reads your draft and answers questions about it?", "A peer review.", "peer review")),
      at(5, c("What kind of clause can stand alone as a complete sentence?", "An independent clause.", "independent")),
      at(5, c("What kind of clause begins with a word that makes it lean on another clause?", "A subordinate clause.", "subordinate")),
    ]),
    SORTX("Which Kind of Clause?", "Independent or Subordinate", "Paragraph 5 explains the two kinds of clause. An INDEPENDENT clause can stand alone. A SUBORDINATE clause begins with a word like when or until, so it leans on another clause.", [
      at(5, set("Write INDEPENDENT if it can stand alone, or SUBORDINATE if it leans on another clause.", [
        ["I fell off.", "INDEPENDENT. It's a complete sentence.", "independent"],
        ["when I fell off", "SUBORDINATE. It starts with when, so it leans.", "subordinate"],
        ["until the sun went down", "SUBORDINATE. It starts with until, so it leans.", "subordinate"],
        ["I groaned.", "INDEPENDENT. It's a complete sentence.", "independent"],
      ])),
    ]),
    THINK([
            told("What was the trouble with Noah's draft?",
        "The trouble was the way the sentences were stacked up, one after another, with nothing to join them.",
        "The trouble was the way the sentences were stacked up, one after another, with nothing to join them.", 1),
      told("When does a comma go after a subordinate clause?",
        "When the clause comes first, a comma goes after it, and when it comes second, as in I gulped when I saw the hill, no comma is needed.",
        "When the clause comes first, a comma goes after it, and when it comes second, as in I gulped when I saw the hill, no comma is needed.", 6),
      told("Why shouldn't you combine every short sentence in a draft?",
        "A few short sentences are fine, especially at a moment of high drama, because the aim is variety and not one very long line.",
        "A few short sentences are fine, especially at a moment of high drama, because the aim is variety and not one very long line.", 7),
    ]),
  ],
}),

];

module.exports = { READING_HOMEWORK };
