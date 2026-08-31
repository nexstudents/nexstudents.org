/* ─────────────────────────────────────────────────────────────────────────
   WORKSHEET CONTENT — one entry per printable sheet.

   This is the single source of truth. build-worksheets.js renders the pages
   from it and build-pages.js builds the shelf cards from the same array, so
   a sheet is added in exactly one place and cannot drift between the two.

   Shape of a sheet:
     slug      folder under /worksheets/<subject>/
     subject   must match a SUBJECTS name in build-pages.js
     grade     number
     title     the h1 and the card title
     dek       one line under the h1
     blurb     one line on the card
     contains  bullets for the card's "What's inside"
     price     "$0" for free, or a price like "$4" for a paid sheet
     buy       Stripe Payment Link for a paid sheet. null until the real link
               exists - a paid sheet without one shows "Coming soon", never a
               placeholder URL and never a dead button
     art       true if art.jpg sits beside the page
     thumb     true if thumb.jpg does
     passage   array of paragraphs
     vocab     [term, definition] - definition is for the KEY, not the sheet
     questions [question, keyAnswer, sourceNote]
     note      the "before you answer" instruction
     scripture { ref, text, connection } - the verse and how it bears on the
               history. Written to make the student THINK about the history,
               never to hand them a moral to copy out.
     unit      overrides the card's second line. Defaults to "answer key
               included", which is a lie on a sheet that has no answer key.

   A BLANK SHEET - kind: "blank" - is a reusable sheet with nothing written on
   it. The parent supplies the content, the student fills the lines. It skips
   passage, vocab, questions, note and scripture entirely and takes instead:
     eyebrow      the line above the title, after the subject
     heading      the scored section heading
     count        how many numbered lines. The section scores out of this
     bonus        { label, why } - one extra line, boxed, scored out of 1
     notesLines   ruled lines for the parent at the foot of the sheet
     signoff      the italic line in the footer
   ───────────────────────────────────────────────────────────────────────── */

const SHEETS = [

/* ═══════════════════ 0. MANUSCRIPT ALPHABET (handwriting) ═══════════════════
   kind "handwriting" - the page is rendered from tools/handwriting/, which owns
   the 52 letterforms. build-worksheets.js delegates rather than duplicating
   them, so the printable and the review preview can never drift apart. */
{
  slug: "manuscript-alphabet", subject: "English", grade: "K",
  kind: "handwriting",
  title: "Manuscript Alphabet: Stroke Order and Direction",
  dek: "Every letter, capital and lowercase, with arrows showing where each stroke starts and which way the pencil goes.",
  blurb: "All 52 letterforms with stroke-order arrows, then a faded copy of each to trace.",
  contains: [
    "All 26 letters, capital and lowercase, on one page",
    "Arrows showing where every stroke starts and which way it travels",
    "A faded copy of each letter to trace over",
    "Ruled lines with a dashed midline, the way handwriting paper is ruled",
  ],
  unit: "Printable &middot; no answer key needed",
  price: "$0", buy: null, art: false, thumb: true,
},

/* ══════════════════════════ 1. LEWIS AND CLARK ══════════════════════════ */
{
  slug: "lewis-and-clark", subject: "History", grade: 8,
  title: "Lewis and Clark: The Corps of Discovery",
  dek: "Read the history, then answer in your own words. Answer key on the last page.",
  blurb: "The Corps of Discovery, a word list and five questions. Answer key included.",
  contains: [
    "A one-page history of the Corps of Discovery",
    "Six vocabulary words with space to write meanings",
    "Five questions, four answerable from the reading",
    "Answer key on its own page, citing where each answer is",
  ],
  price: "$0", buy: null, art: true, thumb: true,
  passage: [
    "In 1803 the United States bought a piece of land so large it doubled the size of the country. It was called the Louisiana Purchase. The strange part is that almost nobody in the government knew what was in it. There were no reliable maps, rivers nobody had measured, and mountains nobody had crossed. President Thomas Jefferson wanted to know what he had just bought.",
    "He chose Meriwether Lewis to lead an expedition west, and Lewis chose his friend William Clark to share command. Their group of soldiers and boatmen became known as the Corps of Discovery. They left St. Louis in May of 1804 and pushed up the Missouri River, rowing and sometimes dragging the boats against the current for months. Jefferson gave them real work along the way: map the rivers, record the plants and animals, and make peaceful contact with the American Indian nations whose land they were crossing.",
    "They were not travelling through empty country. Dozens of nations already lived there and had for generations. In the winter of 1804 the Corps built Fort Mandan in what is now North Dakota, and there they met a Shoshone woman named Sacagawea, who joined them as an interpreter. She travelled the rest of the way carrying her newborn son. When the Corps reached the Rocky Mountains they badly needed horses, and the Shoshone band they found was led by Sacagawea's own brother. They got their horses.",
    "Jefferson had hoped for a Northwest Passage, a simple water route running clear across the continent. There was no such thing. Instead the Corps crossed the Bitterroot Range hungry and freezing in September of 1805, came down to rivers that finally ran west, and reached the Pacific Ocean that November. They returned home in September of 1806 after two years and four months, having lost only one man. Most of the country had assumed they were all dead.",
    "What they found ended one dream and began another. There was no easy water route to the Pacific, so that hope was gone for good. But the maps were real, and settlers followed them west for the rest of the century. For the nations already living on that land, those same maps marked the beginning of enormous loss. Both of those things are true about the same expedition.",
  ],
  vocab: [
    ["expedition", "A long organised journey made for a purpose, such as exploring."],
    ["corps", "An organised group of people working together, often military."],
    ["interpreter", "Someone who translates between people who speak different languages."],
    ["upstream", "Against the current, towards where a river begins."],
    ["Northwest Passage", "A hoped-for water route running across North America to the Pacific, which did not exist."],
    ["purchase", "Something bought."],
  ],
  questions: [
    ["Why did President Jefferson send an expedition west after the Louisiana Purchase?",
     "The purchase doubled the size of the country but nobody knew what was in it and there were no reliable maps, so Jefferson wanted it explored and recorded.", "Paragraph 1", 2],
    ["What does <i>expedition</i> mean?",
     "A long organised journey made for a purpose, such as exploring.", "Vocabulary, not in the reading", 2],
    ["Give two specific ways Sacagawea helped the Corps of Discovery.",
     "Any two: she joined as an interpreter; she travelled the whole route; the Shoshone band that supplied the horses they badly needed was led by her brother.", "Paragraph 3", 3],
    ["How did geography shape this journey? Give two examples from the reading.",
     "Any two: they rowed and dragged boats upstream against the Missouri for months; there was no water route across, so they had to cross the Rocky Mountains; they crossed the Bitterroot Range hungry and freezing.", "Paragraphs 2 and 4", 3],
    ["The last paragraph says two opposite things are both true about the expedition. What are they?",
     "The expedition produced real maps that settlers followed west, and those same maps marked the beginning of enormous loss for the nations already living there. Both are true.", "Paragraph 5", 3],
  ],
  note: "<b>Before you answer.</b> Four of these five are hiding in the reading. Find the sentence that answers each one and write its question number in the margin beside it, then answer from the sentence you found. Question 2 is a vocabulary word, so check the word list instead.",
  scripture: {
    ref: "Proverbs 16:9",
    text: "A man&rsquo;s heart deviseth his way: but the LORD directeth his steps.",
    connection: "Jefferson planned the expedition around a Northwest Passage &mdash; a water route straight to the Pacific. The Corps walked and climbed for two years and proved it had never existed. They found something real instead, and it was not the thing they set out for. Careful planning still runs into a world it did not design.",
  },
},

/* ═══════════════════════════ 2. THE 13 COLONIES ══════════════════════════ */
{
  slug: "thirteen-colonies", subject: "History", grade: 8,
  title: "The Thirteen Colonies",
  dek: "Read the history, then answer in your own words. Answer key on the last page.",
  blurb: "Three regions, three economies, and the habit of self-government. Answer key included.",
  contains: [
    "A one-page history of the three colonial regions",
    "Six vocabulary words with space to write meanings",
    "Five questions, four answerable from the reading",
    "Answer key on its own page, citing where each answer is",
  ],
  price: "$0", buy: null, art: true, thumb: true,
  passage: [
    "The thirteen colonies were never one plan. They were founded across more than a century, by different people, for reasons that had almost nothing to do with each other. Virginia was started in 1607 by a company hoping to make money. Massachusetts was settled by Puritans who wanted to worship their own way. Pennsylvania was founded by William Penn as a refuge where Quakers and others would be left alone. Georgia began partly as a place to give debtors a second chance. Calling them one country in 1700 would have puzzled everybody living in them.",
    "Historians usually sort them into three regions, because geography pushed each one into a different way of making a living. New England, in the north, had thin rocky soil and a short growing season, so farms stayed small and families turned to the sea instead: fishing, whaling, shipbuilding and trade. The Middle Colonies had better soil and longer summers, and grew so much wheat and grain that they were nicknamed the breadbasket colonies. The Southern Colonies had rich soil and a long warm season, which suited cash crops such as tobacco, rice and indigo grown on large plantations.",
    "Those crops needed enormous amounts of labour. At first much of it came from indentured servants, people who traded four to seven years of work for the cost of the voyage across the Atlantic. Over time the Southern Colonies came to depend instead on enslaved Africans, held for life with no term to serve out and no freedom at the end. Slavery existed in every one of the thirteen colonies, but it was the foundation of the southern plantation economy in a way it was not in the north. That difference did not go away, and it eventually helped tear the country in half.",
    "Something else was growing at the same time. Because the colonies were three thousand miles from London and news took two months to cross the ocean, they got used to settling their own affairs. Virginia elected a House of Burgesses in 1619, the first representative assembly in English America. The Mayflower Compact of 1620 had the settlers agree among themselves how they would be governed. Town meetings ran New England villages. By the middle of the 1700s nearly every colony had an elected assembly that controlled its own taxes and spending.",
    "So by 1750 there were about two million colonists who thought of themselves as British subjects, living under a king across an ocean, while quietly running their own governments in practice. That worked for as long as Britain left them to it. When Parliament decided after 1763 to govern the colonies more closely and tax them directly, it was not introducing government to people who had none. It was taking something back from people who had grown used to having it.",
  ],
  vocab: [
    ["colony", "A settlement ruled by a country somewhere else."],
    ["cash crop", "A crop grown to sell for money rather than to feed the family growing it."],
    ["indentured servant", "Someone who agreed to work for a set number of years in exchange for the cost of the voyage."],
    ["plantation", "A large farm growing one main crop, worked by many labourers."],
    ["assembly", "A group of elected representatives who make laws and decide taxes."],
    ["self-government", "People governing themselves through their own elected representatives."],
  ],
  questions: [
    ["Why is it wrong to think of the thirteen colonies as one single plan?",
     "They were founded across more than a century by different people for unrelated reasons: profit in Virginia, religious freedom in Massachusetts, refuge in Pennsylvania, a second chance for debtors in Georgia.", "Paragraph 1", 3],
    ["What does <i>cash crop</i> mean?",
     "A crop grown to sell for money rather than to feed the family growing it.", "Vocabulary, not in the reading", 2],
    ["How did geography give the three regions different economies? Give one example from each region.",
     "New England had thin rocky soil and short summers, so it turned to fishing, whaling, shipbuilding and trade. The Middle Colonies had good soil and grew so much grain they were called the breadbasket. The Southern Colonies had rich soil and long warm seasons, suiting cash crops like tobacco, rice and indigo on plantations.", "Paragraph 2", 4],
    ["What is the difference between an indentured servant and an enslaved person, according to the reading?",
     "An indentured servant traded four to seven years of work for the cost of the voyage and was free at the end. An enslaved person was held for life, with no term to serve out and no freedom at the end.", "Paragraph 3", 3],
    ["The last paragraph says Britain was not introducing government to people who had none. What was it doing instead, and why did that matter?",
     "It was taking back something the colonists had grown used to having. They had run their own elected assemblies and controlled their own taxes for over a century, so closer rule from London felt like losing a right rather than gaining order.", "Paragraphs 4 and 5", 4],
  ],
  note: "<b>Before you answer.</b> Four of these five are hiding in the reading. Find the sentence that answers each one and write its question number in the margin beside it, then answer from the sentence you found. Question 2 is a vocabulary word, so check the word list instead.",
  scripture: {
    ref: "Acts 17:26",
    text: "And hath made of one blood all nations of men for to dwell on all the face of the earth, and hath determined the times before appointed, and the bounds of their habitation.",
    connection: "Thirteen settlements founded a century apart, by people who wanted different things and mostly ignored each other, became one country. Nobody planned that. The same passage also says every nation is of one blood &mdash; which is worth holding beside a chapter in which some of those colonists were building an economy on people they had bought.",
  },
},

/* ═════════════════════════ 3. THE BOSTON TEA PARTY ═══════════════════════ */
{
  slug: "boston-tea-party", subject: "History", grade: 8,
  title: "The Boston Tea Party",
  dek: "Read the history, then answer in your own words. Answer key on the last page.",
  blurb: "Cheaper tea, an angry city, and why the price was never the point. Answer key included.",
  contains: [
    "A one-page history of the protest and what caused it",
    "Six vocabulary words with space to write meanings",
    "Five questions, four answerable from the reading",
    "Answer key on its own page, citing where each answer is",
  ],
  price: "$0", buy: null, art: false, thumb: false,
  passage: [
    "Britain won the French and Indian War in 1763 and came out of it holding more land in North America than ever before, along with an enormous debt. Parliament decided the colonists should help pay for a war fought partly on their behalf. That sounded reasonable in London. It landed very differently in Boston, because the colonists had no members in Parliament and had spent a century deciding their own taxes through their own assemblies.",
    "The taxes came one after another. The Stamp Act of 1765 taxed printed paper, from newspapers to playing cards. The Townshend Acts of 1767 taxed glass, paint, paper and tea. Colonists answered with boycotts, refusing to buy British goods until the taxes were repealed, and the boycotts worked well enough that most of the Townshend duties were dropped. The phrase people shouted was no taxation without representation. Notice what it says: the complaint was not that taxes existed, but that these ones were decided by a Parliament the colonists had no vote in.",
    "The tax on tea was the one Britain kept, deliberately, to prove it still had the right. Then in 1773 Parliament passed the Tea Act, and here is the part students usually get backwards. The Tea Act made tea cheaper, not dearer. It let the struggling East India Company ship tea straight to the colonies without the usual middlemen, undercutting even the smuggled Dutch tea Boston merchants had been living on. Britain expected the colonists to be pleased. Instead they saw a monopoly, and a trap: buy the cheap tea and you accept the tax, and accepting the tax accepts the principle.",
    "On the night of 16 December 1773, after a mass meeting of several thousand people failed to get three tea ships sent back to England, somewhere around a hundred men from the Sons of Liberty boarded them at Griffin's Wharf. Some wore blankets and paint as a rough disguise as Mohawk men. Over about three hours they split open 342 chests and emptied roughly forty-six tons of tea into Boston Harbour. They damaged almost nothing else, swept the decks afterwards, and one broken padlock was quietly replaced. The point was aimed at the cargo, not at the ships.",
    "Parliament's answer was much harsher than the protest. The Coercive Acts of 1774, which the colonists renamed the Intolerable Acts, closed the port of Boston until the tea was paid for, put Massachusetts under direct royal control and moved some trials out of the colony. The punishment was meant to isolate Boston and warn everybody else. It did close to the opposite: twelve colonies sent delegates to the First Continental Congress that September. A protest about a cargo of tea had turned into thirteen colonies talking to each other, and the war began nineteen months later.",
  ],
  vocab: [
    ["boycott", "Refusing to buy something as a form of protest."],
    ["monopoly", "Complete control of the supply of a good by one company or group."],
    ["duty", "A tax charged on goods that are imported."],
    ["Parliament", "Britain's law-making body, where the colonists had no representatives."],
    ["representation", "Having someone elected to speak and vote for you in government."],
    ["repeal", "To cancel a law."],
  ],
  questions: [
    ["Why did Parliament start taxing the colonies after 1763?",
     "Britain had come out of the French and Indian War with an enormous debt, and Parliament decided the colonists should help pay for a war fought partly on their behalf.", "Paragraph 1", 2],
    ["What does <i>boycott</i> mean?",
     "Refusing to buy something as a form of protest.", "Vocabulary, not in the reading", 2],
    ["The Tea Act made tea cheaper. Why did the colonists protest against it anyway?",
     "They saw a monopoly for the East India Company, and a trap: buying the cheap tea would mean accepting the tax, and accepting the tax would mean accepting Parliament's right to tax them without representation.", "Paragraph 3", 3],
    ["What does the reading say the protesters did NOT do, and what does that suggest about their aim?",
     "They damaged almost nothing besides the tea, swept the decks afterwards and replaced a broken padlock. It suggests the protest was aimed at the cargo and what it stood for, not at the ships or their crews.", "Paragraph 4", 3],
    ["Britain's punishment was meant to isolate Boston. What happened instead?",
     "Twelve colonies sent delegates to the First Continental Congress, so instead of standing alone Boston ended up with the colonies talking to each other, and war followed nineteen months later.", "Paragraph 5", 3],
  ],
  note: "<b>Before you answer.</b> Four of these five are hiding in the reading. Find the sentence that answers each one and write its question number in the margin beside it, then answer from the sentence you found. Question 2 is a vocabulary word, so check the word list instead.",
  scripture: {
    ref: "Romans 13:1 and Acts 5:29",
    text: "Let every soul be subject unto the higher powers. &mdash; We ought to obey God rather than men.",
    connection: "These two verses pull against each other, and Christians have argued about them for centuries. Scripture tells believers to submit to governing authority. It also records apostles refusing an order and saying why. The men at Griffin&rsquo;s Wharf destroyed property that was not theirs, and they were careful to destroy nothing else. Was that obedience, disobedience, or something in between? Do not answer quickly.",
  },
},


/* ═══════════════════ 4. SEMESTER 1 BUNDLE (paid, preview only) ═══════════
   A paid product page. The renderer emits ONLY the preview paragraphs - the
   rest of the reading, every question and every answer key stays out of the
   HTML entirely, because "hidden with CSS" is not hidden at all: anyone can
   read the page source. What is not sold is not shipped. */
{
  slug: "us-history-semester-1", subject: "History", grade: 8,
  kind: "bundle",
  title: "Complete Units 1-5: 8th Grade US History Bundle",
  tagline: "Semester 1",
  dek: "Fifteen printable worksheets with answer keys, sequenced across five units.",
  blurb: "Semester 1 in one download. Five units, fifteen worksheets, every answer key.",
  contains: [
    "5 units, sequenced for one semester",
    "15 printable worksheets, 3 per unit",
    "15 answer keys, one per worksheet",
    "Every sheet: a one-page history, 6 vocabulary words, 5 questions",
    "Print at home or work on screen, US Letter",
  ],
  units: [
    ["Unit 1", "Settlement and the Thirteen Colonies"],
    ["Unit 2", "Taxes, Protest and the Road to Revolution"],
    ["Unit 3", "The War for Independence"],
    ["Unit 4", "Building a Government"],
    ["Unit 5", "Westward Expansion and the Corps of Discovery"],
  ],
  price: "$14", buy: null, art: false, thumb: true,
  previewOf: "The Thirteen Colonies",
  passage: [
    "The thirteen colonies were never one plan. They were founded across more than a century, by different people, for reasons that had almost nothing to do with each other. Virginia was started in 1607 by a company hoping to make money. Massachusetts was settled by Puritans who wanted to worship their own way. Pennsylvania was founded by William Penn as a refuge where Quakers and others would be left alone. Georgia began partly as a place to give debtors a second chance. Calling them one country in 1700 would have puzzled everybody living in them.",
    "Historians usually sort them into three regions, because geography pushed each one into a different way of making a living. New England, in the north, had thin rocky soil and a short growing season, so farms stayed small and families turned to the sea instead: fishing, whaling, shipbuilding and trade. The Middle Colonies had better soil and longer summers, and grew so much wheat and grain that they were nicknamed the breadbasket colonies.",
  ],
  vocab: [], questions: [], note: "",
},

/* ═══════════════════ 5. WEEKLY SPELLING TEST (BLANK) ════════════════════
   One sheet on two shelves. A blank test does not care what year the student
   is in, so "grades" lists every grade page it belongs on while the page,
   the folder and the PDF stay single. Listed at 3 and at 7 because the words
   come from the parent's own list, so a 7th grader working a 3rd grade list
   uses the very same paper.

   Two entries were tried first and were wrong: the English shelf is not filtered
   by grade, so the same sheet appeared on it twice with nothing to tell the
   two cards apart. */
{
  slug: "weekly-spelling-test", subject: "English", grade: 3, grades: [3, 7], kind: "blank",
  title: "Weekly Spelling Test",
  dek: "Ten words and one bonus word. Works with any word list, any week, any grade.",
  blurb: "A blank weekly spelling test. Ten words out of ten, one bonus word worth one extra.",
  unit: "Printable &middot; blank, use it every week",
  contains: [
    "Ten numbered lines, scored out of ten",
    "A bonus word in its own box, scored out of one",
    "Name, date and week number across the top",
    "Notes space for the parent, and a one-page PDF",
  ],
  /* thumb.jpg is the sheet itself, printed. A blank sheet has no art to show
     and none is wanted: what the parent is deciding is whether this paper is
     the paper they need, so the cover is the paper. Rendered from the page by
     tools/make-cover.js, so it can never drift from what actually prints. */
  price: "$0", buy: null, art: false, thumb: true,
  eyebrow: "Spelling &middot; Weekly Test",
  heading: "Spelling Words &mdash; 1 to 10",
  count: 10, notesLines: 2,
  bonus: {
    label: "Bonus Word",
    why: "One extra word, worth one extra point. A miss here costs nothing.",
  },
  signoff: "Every week is a fresh start. Keep going.",
},

/* ══════════════════════ 6. SPELLING FLASHCARDS ══════════════════════
   The same 36 weeks as the spelling test, cut into cards. One page holds
   every week and shows one, because 36 near-identical cards on the shelf
   would be 36 things to scroll past for one thing to print. */
{
  /* 3rd grade only, unlike the blank test beside it. The test carries no words
     so it serves any year; these cards ARE the words, and they are 3rd grade
     words. Kolten works them at 7th, but that is his parent's choice to make
     off the 3rd grade shelf, not a claim on the page that they suit 7th. */
  slug: "spelling-flashcards", subject: "English", grade: 3, grades: [3],
  kind: "flashcards", source: "spelling-words.js",
  /* The grade is in the name. A parent searching for spelling practice is
     searching by year, and "Spelling Flashcards" alone says nothing about who
     they are for. */
  title: "3rd Grade Spelling Flashcards",
  dek: "Pick a week, then print or download it. Twelve cards a sheet, cut on the dashed lines.",
  blurb: "Cut-out 3rd grade spelling flashcards, a sheet a week. Ten words, a bonus word, and a card naming the week.",
  unit: "Printable &middot; 36 weeks, pick one",
  contains: [
    "36 weeks, one printable sheet each",
    "Twelve cards a sheet: ten words, one bonus, one label card",
    "The label card names the week, so a cut stack stays together",
    "One PDF holding all 36 weeks",
  ],
  price: "$0", buy: null, art: false, thumb: true,
  eyebrow: "Spelling &middot; Flashcards",
  cutnote: "Card one names the week, so a cut stack never gets mixed with another one.",
},

/* ═════════════════ NEWTON'S THREE LAWS OF MOTION (science) ═════════════════
   🚨 THE FIRST SCIENCE CONTENT ON THE SITE. Every grade has had a science
   worksheets page built, linked and empty since 2026-08-29, so the shelf has
   been promising something that did not exist. This is the first thing on it.

   ⚠️ It is deliberately WORLDVIEW-NEUTRAL. ROADMAP item 18 says the creation
   science question has to be decided with Paul before science content is
   written, because it is an editorial position rather than a detail. Forces
   and motion is one of the few science topics where the question does not
   arise at all, so this can ship while that decision is still open. Do NOT
   treat it as the decision having been made.

   GRADE 8. Forces and motion is NGSS MS-PS2, which spans 6-8; what puts this
   at the top of that band is rearranging F = m x a to solve for mass or
   acceleration, which is algebraic thinking. Shelved by the skill's level,
   not by the student's - the 2026-08-29 rule.
   ⚠️ Briefly moved to 7 on 2026-08-30 because I misread Paul's question as a
   correction when he was restating my own answer back to me. It is 8. */
{
  slug: "newtons-laws-of-motion", subject: "Science", grade: 8,
  title: "Newton's Three Laws of Motion",
  dek: "Read the story, then identify the laws and use the formula. Answer key on the last page.",
  blurb: "A skateboard that would not stop, and the three rules behind it. Answer key included.",
  contains: [
    "A story that meets all three laws in one scene, no lab equipment needed",
    "Six vocabulary words with space to write meanings",
    "Eight questions: identify the law, then calculate with F = m &times; a",
    "A worked example of the formula before you are asked to use it",
  ],
  /* thumb.jpg is rendered from the printed page by make-cover.js rather than
     hand-drawn art, which suits a text worksheet - the shelf card shows the
     actual sheet. Regenerate it if the content changes. */
  price: "$0", buy: null, art: false, thumb: true,
  passage: [
    "The skateboard rolled away without him, and that was the first clue. Marcus had stepped off it to tie his lace, and the board just kept going. Straight across the flat concrete, past the bench, slowing a little but not stopping, until it clipped the lip of the ramp and finally gave up. Nobody had pushed it. It simply carried on doing what it had already been doing.",
    "That is the first thing to understand about the world: it is lazy. Objects continue exactly as they are until something interferes. A board that is rolling keeps rolling. A board sitting still sits still all afternoon. The word for that stubbornness is inertia, and the only thing that beats it is a push or a pull &mdash; a force &mdash; strong enough to win. If the forces on something are balanced they cancel out and nothing changes. Only an unbalanced force changes anything. That is Newton's first law.",
    "Marcus picked up his board and set it next to his friend Dev's. Dev's board was the heavy kind, thick trucks, big wheels, built like a door. Marcus pushed his own board with a gentle shove and it shot away. He pushed Dev's with exactly the same shove and it lumbered off like it resented being asked. Same push, very different results. The difference was mass &mdash; how much stuff each board was made of. What changed was acceleration, which does not only mean speeding up; it means any change to how fast something is going or which way it is going. Newton wrote that down as F = m &times; a, and it is the second law: push harder and you get more acceleration, add mass and you get less.",
    "Then Marcus did the thing he had done ten thousand times without thinking about it. He put one foot on the board, and with the other he pushed backwards against the ground &mdash; and he went forwards. Read that again, because it is stranger than it sounds. He pushed backwards. He travelled forwards. His foot shoved the whole planet one way and the planet shoved him the other. Forces are never lonely; they arrive in pairs, equal in strength and opposite in direction. That is the third law, and it sounds like a riddle until you notice you have been using it your whole life.",
    "It is also the law that got us off the ground. A wing works by shoving air downwards, and the air shoves the wing up. A jet engine throws air out the back and the plane is thrown forward. A rocket in the emptiness of space has nothing at all to push against, and does not need anything &mdash; it pushes its own exhaust one way and rides the other way on the reaction.",
    "About that formula, because the questions below use it. F stands for force, measured in newtons and written N. The m is mass in kilograms, kg. The a is acceleration in metres per second squared, m/s&sup2;. If you know two of the three you can always find the third, and there are only three versions to know: F = m &times; a, or a = F &divide; m, or m = F &divide; a. The rule underneath all of them is short &mdash; if you are looking for F you multiply, and if you are looking for anything else you divide F by the other one. Worked example: a trolley of mass 5 kg accelerates at 2 m/s&sup2;, so F = 5 &times; 2 = 10 N. Always write the unit. An answer of 10 on its own is not finished.",
  ],
  vocab: [
    ["force", "A push or a pull acting on an object, measured in newtons."],
    ["inertia", "The tendency of an object to resist a change in its motion."],
    ["mass", "The amount of matter in an object, measured in kilograms."],
    ["acceleration", "A change in an object's speed or direction."],
    ["unbalanced", "Forces that do not cancel out, so the object's motion changes."],
    ["newton", "The unit of force, written N."],
  ],
  questions: [
    ["The skateboard kept rolling after Marcus stepped off it. Which law explains that, and why?",
     "The first law. No unbalanced force was acting on it, so it carried on doing what it was already doing. That is inertia.", "Paragraphs 1 and 2", 3],
    ["Marcus gave both boards the same push, but Dev's moved off more slowly. Explain why, using the word <i>mass</i>.",
     "Dev's board has more mass, so the same force produces less acceleration. F = m &times; a means acceleration goes down as mass goes up.", "Paragraph 3", 3],
    ["Marcus pushed backwards against the ground and travelled forwards. Explain how that works.",
     "His foot pushed the ground backwards and the ground pushed him forwards with an equal force in the opposite direction. Forces come in pairs. That is the third law.", "Paragraph 4", 3],
    ["A rocket in empty space has nothing to push against. Explain how it still moves forward.",
     "It pushes its own exhaust gas out one way, and the reaction to that push drives the rocket the other way. It does not need anything outside itself, because the force pair is between the rocket and its exhaust.", "Paragraph 5", 3],
    ["What does <i>inertia</i> mean?",
     "The tendency of an object to resist a change in its motion.", "Vocabulary, not in the reading", 2],
    ["A cart has a mass of 4 kg and accelerates at 3 m/s&sup2;. What force was applied? Show your working.",
     "Looking for F, so multiply. F = m &times; a = 4 &times; 3 = 12 N. The unit is required for the second mark.", "Paragraph 6", 2],
    ["A force of 50 N acts on a 10 kg box. What is its acceleration? Show your working.",
     "Looking for a, so divide. a = F &divide; m = 50 &divide; 10 = 5 m/s&sup2;. The unit is required for the second mark.", "Paragraph 6", 2],
    ["A force of 60 N gives an object an acceleration of 5 m/s&sup2;. What is its mass? Show your working.",
     "Looking for m, so divide. m = F &divide; a = 60 &divide; 5 = 12 kg. The unit is required for the second mark.", "Paragraph 6", 2],
  ],
  note: "<b>Before you answer.</b> The first four questions are hiding in the reading &mdash; find the sentence that answers each one and write its number in the margin beside it. Question 5 is a vocabulary word, so check the word list instead. The last three use the formula, and paragraph 6 shows you how, including a worked example. Write the unit on every calculation.",
},

];

module.exports = { SHEETS };
