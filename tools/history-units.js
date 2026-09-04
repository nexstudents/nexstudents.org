/* ─────────────────────────────────────────────────────────────────────────
   history-units.js — OUR world history plan, merged from two sources.

   Paul, 2026-09-04, asked which book history should be built on and answered his
   own question: *"we're kind of merging did you together if we can basically into
   our own lesson plan."* So neither book is the master. **This file is the plan**,
   and each book is a reference it cites.

   ══ THE TWO SOURCES, AND WHY BOTH ══

   LEIF THE LION EDUCATION — a printed workbook Paul OWNS.
     5 units, 10 lessons each, 50 in all. Transcribed in `leif-units.js` from the
     contents pages he photographed, and the 146 photos of the whole book live in
     `Desktop\School Lessons Worksheets\History Worksheets\`.
     🚨 **This is the spine, and the reason is practical: Kolten can hold it.**
     A Leif lesson is a page Paul can print today → [[feedback-never-assign-an-unbuilt-lesson]].
     ⚠️ But Leif covers Rome, Byzantium, Islam, feudal Europe, the High Middle Ages
     and the Renaissance, and **nothing else**. No Africa, no Asia, no Americas.

   McDOUGAL LITTELL — *World History: Medieval and Early Modern Times*, 2006,
     California Edition, 794pp · archive.org/details/worldhistorymedi00houg
     🚨 BORROW-ONLY (internetarchivebooks · inlibrary · printdisabled).
     8 units, 16 chapters, 53 numbered sections. Read off the contents spreads
     vi-vii, viii-ix, x-xi and xii-xiii on 2026-09-04 with Paul's borrow.
     🚨 **This is what fills Leif's four holes**: West and Central Africa, China
     and Japan, the Maya, Aztec and Inca, and the Scientific Revolution through
     the Enlightenment. A year of world history that skips three continents is not
     world history.

   ══ SO THE PLAN IS ══
     Units 1-5   Leif's sequence, because Paul owns it and can print it
     Units 6-9   the regions Leif never reaches, from McDougal
     Unit 10     McDougal's own opener, on how history is actually known

   ⚠️ **`leif` and `mcdougal` are BUILD NOTES and are NEVER rendered**, exactly like
   `page` and `book` in science-units.js. They say where to look when a lesson is
   built. See the titles rule in BEHAVIOR.md.
   🚨 **`title` is OURS or it is null.** Neither book's wording reaches a card.

   SHAPE
     { n, grade, title, items: [ { label, title, leif, mcdougal, kind, slug } ] }
     kind: "lesson"  a slot on the shelf   ·   "review"  a unit review
   ───────────────────────────────────────────────────────────────────────── */
"use strict";

/* Leif reference: "U2 L5" is unit 2, lesson 5 of the printed workbook.
   McDougal reference: "Ch10 §2" is chapter 10, numbered section 2. */

const WORLD = {
  sources: {
    leif: "Leif the Lion Education (printed workbook Paul owns; 146 photos on the Desktop)",
    mcdougal: "McDougal Littell, World History: Medieval and Early Modern Times, 2006 " +
              "(archive.org/details/worldhistorymedi00houg, borrow-only)",
  },
  units: [
    /* ══ THE LEIF SPINE, UNITS 1-5 ══════════════════════════════════════════ */
    {
      n: 1, grade: 7, title: "Rome, and the Church That Outlived It",
      note: "Leif Unit 1. MOVED TO GRADE 7 on 2026-09-04. It sat on grade 6 because " +
            "the California split puts ancient history there - but McDougal's own GRADE 7 " +
            "volume opens with Rome at Ch2, pp42-79, which is evidence the other way. " +
            "Grade 6 is not left empty: it gets its own course from World History: Ancient " +
            "Civilizations (mcdougallittellw00mcdo), already chosen in ROADMAP.",
      items: [
        { label: "1-1", title: "From Republic to Empire", kind: "lesson",
          leif: "U1 L1: From Republic to Empire", mcdougal: "Ch2 §1",
          slug: "history/republic-to-empire" },
        /* ⚠️ Leif L2 is the built `roman-government` lesson. McDougal has no
           matching numbered section - its Ch2 runs rise, decline, Byzantium,
           legacy - so the reference is the chapter, not a section. Do not invent
           a section number to make the row look complete. */
        { label: "1-2", title: "Roman Government and Citizenship", kind: "lesson",
          leif: "U1 L2: Roman Government and Citizenship", mcdougal: "Ch2 (no matching section)",
          slug: "history/roman-government" },
        { label: "1-3", title: "Roads, Bridges, and the Roman Army", kind: "lesson",
          leif: "U1 L3: Engineering, Roads, and Military Power", mcdougal: "Ch2 §1" },
        { label: "1-4", title: "Conquest, Provinces, and City Life", kind: "lesson",
          leif: "U1 L4: Conquest, Provinces, and Urban Life", mcdougal: "Ch2 §1" },
        { label: "1-5", title: "Class, Slavery, and Daily Life in Rome", kind: "lesson",
          leif: "U1 L5: Social Class, Slavery, and Daily Life", mcdougal: "Ch2 §1" },
        { label: "1-6", title: "Judea Under Roman Rule", kind: "lesson",
          leif: "U1 L6: Judea Under the Roman Order", mcdougal: null },
        { label: "1-7", title: "Jesus and the First Christians", kind: "lesson",
          leif: "U1 L7: Jesus and the Early Church", mcdougal: null },
        { label: "1-8", title: "Paul, Persecution, and a Church That Spread", kind: "lesson",
          leif: "U1 L8: Paul, Persecution, and the Early Church", mcdougal: null },
        { label: "1-9", title: "Crisis, Reform, and the Fall of the West", kind: "lesson",
          leif: "U1 L9: Crisis and Reform in the Late Empire", mcdougal: "Ch2 §2" },
        { label: "1-10", title: "Unit 1 Review: Rome and the Early Church", kind: "review",
          leif: "U1 L10: Review of Rome and Early Christianity", mcdougal: null },
      ],
    },
    {
      n: 2, grade: 7, title: "The East Endures, and Islam Rises",
      note: "Leif Unit 2, deepened by McDougal Ch3 and Ch4, which give Islam two full " +
            "chapters where Leif gives it two lessons.",
      items: [
        { label: "2-1", title: "Constantinople, and the Empire That Did Not Fall", kind: "lesson",
          leif: "U2 L1: Constantinople and the Byzantine Legacy", mcdougal: "Ch2 §3" },
        { label: "2-2", title: "Justinian and the Law We Still Use", kind: "lesson",
          leif: "U2 L2: Justinian and Roman Law", mcdougal: "Ch2 §3" },
        { label: "2-3", title: "One Church Becomes Two", kind: "lesson",
          leif: "U2 L3: The Christian Church in East and West", mcdougal: "Ch9 §1" },
        { label: "2-4", title: "The Rise of Islam", kind: "lesson",
          leif: "U2 L4: The Rise of Islam", mcdougal: "Ch3 §1-2" },
        { label: "2-5", title: "Trade, Learning, and the Islamic Golden Age", kind: "lesson",
          leif: "U2 L5: Trade, Learning, and the Islamic Golden Age", mcdougal: "Ch4 §2" },
        { label: "2-6", title: "Contact and Conflict Across the Mediterranean", kind: "lesson",
          leif: "U2 L6: Conflict and Contact Across the Mediterranean", mcdougal: "Ch4 §3" },
        { label: "2-7", title: "Monasteries, Missionaries, and Medieval Faith", kind: "lesson",
          leif: "U2 L7: Monasteries, Missionaries, and Medieval Faith", mcdougal: "Ch9 §1" },
        { label: "2-8", title: "The Franks and Charlemagne", kind: "lesson",
          leif: "U2 L8: The Franks and the Carolingian World", mcdougal: "Ch9 §1" },
        { label: "2-9", title: "Reading the Map: Europe, North Africa, and Southwest Asia", kind: "lesson",
          leif: "U2 L9: Geography of Europe, North Africa, and Southwest Asia",
          mcdougal: "Ch1 §1-2" },
        { label: "2-10", title: "Unit 2 Review: The East, Islam, and Early Medieval Europe", kind: "review",
          leif: "U2 L10: Review of Byzantium, Islam, and Medieval Worlds", mcdougal: null },
      ],
    },
    {
      n: 3, grade: 7, title: "Life Under Feudalism",
      note: "Leif Unit 3, against McDougal Ch9.",
      items: [
        { label: "3-1", title: "What Feudalism Actually Was", kind: "lesson",
          leif: "U3 L1: The Feudal Order", mcdougal: "Ch9 §1" },
        { label: "3-2", title: "Lords, Vassals, and the Oath", kind: "lesson",
          leif: "U3 L2: Lords, Vassals, and Oaths", mcdougal: "Ch9 §1" },
        { label: "3-3", title: "The Manor, the Peasant, and the Plough", kind: "lesson",
          leif: "U3 L3: Manors, Peasants, and Agricultural Change", mcdougal: "Ch9 §2" },
        { label: "3-4", title: "Castles, Knights, and How Wars Were Fought", kind: "lesson",
          leif: "U3 L4: Castles, Knights, and Warfare", mcdougal: "Ch9 §2" },
        { label: "3-5", title: "The Power of the Medieval Church", kind: "lesson",
          leif: "U3 L5: The Power of the Medieval Church", mcdougal: "Ch10 §1" },
        { label: "3-6", title: "Towns, Guilds, and the Roads Between Them", kind: "lesson",
          leif: "U3 L6: Towns, Guilds, and Trade Routes", mcdougal: "Ch10 §4" },
        { label: "3-7", title: "The Vikings, and the Kingdoms They Made", kind: "lesson",
          leif: "U3 L7: Viking Expansion and State Formation", mcdougal: null },
        { label: "3-8", title: "The Norman Conquest", kind: "lesson",
          leif: "U3 L8: The Norman Conquest", mcdougal: null },
        { label: "3-9", title: "Kings, Law, and Magna Carta", kind: "lesson",
          leif: "U3 L9: Kingship, Law, and Magna Carta", mcdougal: "Ch10 §4" },
        { label: "3-10", title: "Unit 3 Review: Life Under Feudalism", kind: "review",
          leif: "U3 L10: Review of Feudal Europe", mcdougal: null },
      ],
    },
    {
      n: 4, grade: 7, title: "Plague, War, and the End of the Middle Ages",
      note: "Leif Unit 4, against McDougal Ch10. Leif's Mongol lesson is the natural " +
            "bridge into unit 7 - McDougal puts the Mongols in its China chapter.",
      items: [
        { label: "4-1", title: "Universities and the Life of the Mind", kind: "lesson",
          leif: "U4 L1: Universities and Scholastic Thought", mcdougal: null },
        { label: "4-2", title: "Cathedrals, and What They Were Built to Say", kind: "lesson",
          leif: "U4 L2: Gothic Cathedrals and Medieval Culture", mcdougal: "Ch10 §1" },
        { label: "4-3", title: "The Crusades", kind: "lesson",
          leif: "U4 L3: The Crusades", mcdougal: "Ch10 §2" },
        { label: "4-4", title: "Christians, Muslims, and Jews in Contact", kind: "lesson",
          leif: "U4 L4: Christian, Muslim, and Jewish Contact", mcdougal: "Ch10 §2" },
        { label: "4-5", title: "The Mongols, and the Roads They Opened", kind: "lesson",
          leif: "U4 L5: The Mongol Empire and Eurasian Exchange", mcdougal: "Ch7 §3" },
        { label: "4-6", title: "The Black Death", kind: "lesson",
          leif: "U4 L6: The Black Death", mcdougal: "Ch10 §3" },
        { label: "4-7", title: "Revolt, Hunger, and a Strained Society", kind: "lesson",
          leif: "U4 L7: Peasant Revolts and Social Strain", mcdougal: "Ch10 §3" },
        { label: "4-8", title: "The Hundred Years' War", kind: "lesson",
          leif: "U4 L8: The Hundred Years' War", mcdougal: "Ch10 §3" },
        { label: "4-9", title: "Joan of Arc and the Birth of Nations", kind: "lesson",
          leif: "U4 L9: Joan of Arc and the Growth of National Identity", mcdougal: "Ch10 §4" },
        { label: "4-10", title: "Unit 4 Review: Plague, War, and Change", kind: "review",
          leif: "U4 L10: Review of Crisis and Change", mcdougal: null },
      ],
    },
    {
      n: 5, grade: 7, title: "The Renaissance, and the Church Divided",
      note: "Leif Unit 5, against McDougal Ch13 and Ch14. ⚠️ Leif's L9 (science and " +
            "exploration) is where this unit hands over to unit 9.",
      items: [
        { label: "5-1", title: "The Italian City-States", kind: "lesson",
          leif: "U5 L1: Italian City-States and the Renaissance", mcdougal: "Ch13 §1-2" },
        { label: "5-2", title: "Humanism and the Return to the Classics", kind: "lesson",
          leif: "U5 L2: Humanism and Classical Learning", mcdougal: "Ch13 §1" },
        { label: "5-3", title: "Art, Money, and Power", kind: "lesson",
          leif: "U5 L3: Art, Patronage, and Power", mcdougal: "Ch13 §2" },
        { label: "5-4", title: "Printing, and How Ideas Travelled", kind: "lesson",
          leif: "U5 L4: Printing and the Spread of Ideas", mcdougal: "Ch13 §3" },
        { label: "5-5", title: "The Northern Renaissance", kind: "lesson",
          leif: "U5 L5: Northern Renaissance", mcdougal: "Ch13 §3" },
        { label: "5-6", title: "Martin Luther and the Ninety-Five Theses", kind: "lesson",
          leif: "U5 L6: Martin Luther and the Reformation", mcdougal: "Ch14 §1" },
        { label: "5-7", title: "Calvin, Henry VIII, and the Protestant Movements", kind: "lesson",
          leif: "U5 L7: Calvin, Henry VIII, and Protestant Movements", mcdougal: "Ch14 §2" },
        { label: "5-8", title: "The Catholic Reformation", kind: "lesson",
          leif: "U5 L8: Catholic Reformation and Religious Conflict", mcdougal: "Ch14 §2" },
        { label: "5-9", title: "New Science, New Maps, New Questions", kind: "lesson",
          leif: "U5 L9: Science, Exploration, and Changing Worldviews", mcdougal: "Ch15 §1-3" },
        { label: "5-10", title: "Unit 5 Review: Renaissance and Reformation", kind: "review",
          leif: "U5 L10: Review of Renaissance and Reformation", mcdougal: null },
      ],
    },

    /* ══ THE FOUR REGIONS LEIF NEVER REACHES ════════════════════════════════
       Every lesson below has `leif: null`, and that is the whole point of the
       merge. Paul cannot print these from the workbook, so they will be built
       pages or nothing. */
    {
      n: 6, grade: 7, title: "The Kingdoms of West and Southern Africa",
      note: "McDougal Ch5 and Ch6. NOTHING in Leif. Six numbered sections.",
      items: [
        { label: "6-1", title: "Daily Life and Culture in West Africa", kind: "lesson", leif: null, mcdougal: "Ch5 §1" },
        { label: "6-2", title: "The Empire of Ghana", kind: "lesson", leif: null, mcdougal: "Ch5 §2" },
        { label: "6-3", title: "The Empire of Mali", kind: "lesson", leif: null, mcdougal: "Ch5 §3" },
        { label: "6-4", title: "The Coastal Trading Cities", kind: "lesson", leif: null, mcdougal: "Ch6 §1" },
        { label: "6-5", title: "Empires Built on Gold and Trade", kind: "lesson", leif: null, mcdougal: "Ch6 §2" },
        { label: "6-6", title: "The Kingdom of Kongo", kind: "lesson", leif: null, mcdougal: "Ch6 §3" },
        { label: "6-7", title: "Unit 6 Review: The Kingdoms of West and Southern Africa", kind: "review", leif: null, mcdougal: null },
      ],
    },
    {
      n: 7, grade: 7, title: "China, Japan, and the Lands Between",
      note: "McDougal Ch7 and Ch8. NOTHING in Leif except its Mongol lesson, which " +
            "is unit 4 L5 and deliberately left there rather than moved.",
      items: [
        { label: "7-1", title: "China Reunited", kind: "lesson", leif: null, mcdougal: "Ch7 §1" },
        { label: "7-2", title: "The Tang and the Song: A Golden Age", kind: "lesson", leif: null, mcdougal: "Ch7 §2" },
        { label: "7-1", title: "China Reunited", kind: "lesson",
          leif: "U4 L5 covers the same ground", mcdougal: "Ch7 §3" },
        { label: "7-4", title: "A Return to Chinese Rule", kind: "lesson", leif: null, mcdougal: "Ch7 §4" },
        { label: "7-5", title: "Japan, the Land of the Rising Sun", kind: "lesson", leif: null, mcdougal: "Ch8 §1" },
        { label: "7-6", title: "The Growth of Japanese Culture", kind: "lesson", leif: null, mcdougal: "Ch8 §2" },
        { label: "7-7", title: "Samurai and Shoguns", kind: "lesson", leif: null, mcdougal: "Ch8 §3" },
        { label: "7-8", title: "Korea and Southeast Asia", kind: "lesson", leif: null, mcdougal: "Ch8 §4" },
        { label: "7-9", title: "Unit 7 Review: China, Japan, and the Lands Between", kind: "review", leif: null, mcdougal: null },
      ],
    },
    {
      n: 8, grade: 7, title: "The Civilizations of the Americas",
      note: "McDougal Ch11 and Ch12. NOTHING in Leif. Five numbered sections.",
      items: [
        { label: "8-1", title: "Geography and Farming in Mesoamerica", kind: "lesson", leif: null, mcdougal: "Ch11 §1" },
        { label: "8-2", title: "The Olmec", kind: "lesson", leif: null, mcdougal: "Ch11 §2" },
        { label: "8-3", title: "The Maya", kind: "lesson", leif: null, mcdougal: "Ch11 §3" },
        { label: "8-4", title: "The Aztec", kind: "lesson", leif: null, mcdougal: "Ch12 §1" },
        { label: "8-5", title: "The Inca", kind: "lesson", leif: null, mcdougal: "Ch12 §2" },
        { label: "8-6", title: "Unit 8 Review: The Civilizations of the Americas", kind: "review", leif: null, mcdougal: null },
      ],
    },
    {
      n: 9, grade: 7, title: "New Questions, New Worlds, and the Age of Reason",
      note: "McDougal Ch15 and Ch16. Leif reaches this only in its very last content " +
            "lesson, U5 L9, so effectively a new unit.",
      items: [
        { label: "9-1", title: "Where Scientific Thinking Came From", kind: "lesson", leif: null, mcdougal: "Ch15 §1" },
        { label: "9-1", title: "Where Scientific Thinking Came From", kind: "lesson",
          leif: "U5 L9 touches this", mcdougal: "Ch15 §2" },
        { label: "9-2", title: "The Scientific Revolution", kind: "lesson",
          leif: "U5 L9 touches this", mcdougal: "Ch15 §3" },
        { label: "9-4", title: "What Exploration Changed", kind: "lesson", leif: null, mcdougal: "Ch15 §4" },
        { label: "9-5", title: "The Enlightenment", kind: "lesson", leif: null, mcdougal: "Ch16 §1" },
        { label: "9-6", title: "Democratic Ideas Take Hold", kind: "lesson", leif: null, mcdougal: "Ch16 §2" },
        { label: "9-7", title: "Unit 9 Review: New Questions, New Worlds, and the Age of Reason", kind: "review", leif: null, mcdougal: null },
      ],
    },
    {
      n: 10, grade: 7, title: "How We Know What Happened",
      note: "McDougal Ch1, its opening chapter on geography, evidence and reading the " +
            "past. ⚠️ LAST in the list and that is deliberate - see below.",
      items: [
        { label: "10-1", title: "Geography: Reading the World", kind: "lesson", leif: null, mcdougal: "Ch1 §1" },
        { label: "10-2", title: "Mapping the World", kind: "lesson", leif: null, mcdougal: "Ch1 §2" },
        { label: "10-3", title: "How the Past Is Discovered", kind: "lesson", leif: null, mcdougal: "Ch1 §3" },
        { label: "10-4", title: "How the Past Is Interpreted", kind: "lesson", leif: null, mcdougal: "Ch1 §4" },
        { label: "10-5", title: "Unit 10 Review: How We Know What Happened", kind: "review", leif: null, mcdougal: null },
      ],
    },
  ],
};

/* 🚨 UNIT 10 SITS LAST AND IT IS A REAL QUESTION, NOT AN OVERSIGHT.
   McDougal opens with it, and there is a good argument for teaching how history is
   known BEFORE teaching any history. There is an equally good argument that it
   means nothing until a student has some history to apply it to. The order here
   keeps Leif's spine intact, which was the decision Paul actually made today.
   ⚠️ Moving it to the front is a one-line change and is his call, not mine. */

const NOTES = [
  "Leif is the spine because Paul OWNS it and can print a page today. McDougal is " +
    "borrow-only, so nothing from it can be handed to Kolten on paper.",
  "Units 6, 7, 8 and 9 are 25 lessons that exist in NEITHER the workbook nor the " +
    "current site. They are the actual gap this merge found: a year of world history " +
    "that skips Africa, Asia and the Americas entirely.",
  "Two lessons are built, both in unit 1, both Rome.",
  "Every `title` except those two is null. Names get written when lessons get built.",
];

const tally = () => ({
  units: WORLD.units.length,
  lessons: WORLD.units.reduce((n, u) => n + u.items.filter((i) => i.kind === "lesson").length, 0),
  reviews: WORLD.units.reduce((n, u) => n + u.items.filter((i) => i.kind === "review").length, 0),
  built: WORLD.units.reduce((n, u) => n + u.items.filter((i) => i.slug).length, 0),
  fromLeif: WORLD.units.reduce((n, u) => n + u.items.filter((i) => i.leif).length, 0),
  leifCannotCover: WORLD.units.reduce((n, u) => n + u.items.filter((i) => !i.leif).length, 0),
});

module.exports = { WORLD, NOTES, tally };
