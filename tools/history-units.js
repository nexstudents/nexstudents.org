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
        { label: "Lesson 1", title: "From Republic to Empire", kind: "lesson",
          leif: "U1 L1: From Republic to Empire", mcdougal: "Ch2 §1",
          slug: "history/republic-to-empire" },
        /* ⚠️ Leif L2 is the built `roman-government` lesson. McDougal has no
           matching numbered section - its Ch2 runs rise, decline, Byzantium,
           legacy - so the reference is the chapter, not a section. Do not invent
           a section number to make the row look complete. */
        { label: "Lesson 2", title: "Roman Government and Citizenship", kind: "lesson",
          leif: "U1 L2: Roman Government and Citizenship", mcdougal: "Ch2 (no matching section)",
          slug: "history/roman-government" },
        { label: "Lesson 3", title: null, kind: "lesson",
          leif: "U1 L3: Engineering, Roads, and Military Power", mcdougal: "Ch2 §1" },
        { label: "Lesson 4", title: null, kind: "lesson",
          leif: "U1 L4: Conquest, Provinces, and Urban Life", mcdougal: "Ch2 §1" },
        { label: "Lesson 5", title: null, kind: "lesson",
          leif: "U1 L5: Social Class, Slavery, and Daily Life", mcdougal: "Ch2 §1" },
        { label: "Lesson 6", title: null, kind: "lesson",
          leif: "U1 L6: Judea Under the Roman Order", mcdougal: null },
        { label: "Lesson 7", title: null, kind: "lesson",
          leif: "U1 L7: Jesus and the Early Church", mcdougal: null },
        { label: "Lesson 8", title: null, kind: "lesson",
          leif: "U1 L8: Paul, Persecution, and the Early Church", mcdougal: null },
        { label: "Lesson 9", title: null, kind: "lesson",
          leif: "U1 L9: Crisis and Reform in the Late Empire", mcdougal: "Ch2 §2" },
        { label: "Review", title: null, kind: "review",
          leif: "U1 L10: Review of Rome and Early Christianity", mcdougal: null },
      ],
    },
    {
      n: 2, grade: 7, title: "The East Endures, and Islam Rises",
      note: "Leif Unit 2, deepened by McDougal Ch3 and Ch4, which give Islam two full " +
            "chapters where Leif gives it two lessons.",
      items: [
        { label: "Lesson 1", title: null, kind: "lesson",
          leif: "U2 L1: Constantinople and the Byzantine Legacy", mcdougal: "Ch2 §3" },
        { label: "Lesson 2", title: null, kind: "lesson",
          leif: "U2 L2: Justinian and Roman Law", mcdougal: "Ch2 §3" },
        { label: "Lesson 3", title: null, kind: "lesson",
          leif: "U2 L3: The Christian Church in East and West", mcdougal: "Ch9 §1" },
        { label: "Lesson 4", title: null, kind: "lesson",
          leif: "U2 L4: The Rise of Islam", mcdougal: "Ch3 §1-2" },
        { label: "Lesson 5", title: null, kind: "lesson",
          leif: "U2 L5: Trade, Learning, and the Islamic Golden Age", mcdougal: "Ch4 §2" },
        { label: "Lesson 6", title: null, kind: "lesson",
          leif: "U2 L6: Conflict and Contact Across the Mediterranean", mcdougal: "Ch4 §3" },
        { label: "Lesson 7", title: null, kind: "lesson",
          leif: "U2 L7: Monasteries, Missionaries, and Medieval Faith", mcdougal: "Ch9 §1" },
        { label: "Lesson 8", title: null, kind: "lesson",
          leif: "U2 L8: The Franks and the Carolingian World", mcdougal: "Ch9 §1" },
        { label: "Lesson 9", title: null, kind: "lesson",
          leif: "U2 L9: Geography of Europe, North Africa, and Southwest Asia",
          mcdougal: "Ch1 §1-2" },
        { label: "Review", title: null, kind: "review",
          leif: "U2 L10: Review of Byzantium, Islam, and Medieval Worlds", mcdougal: null },
      ],
    },
    {
      n: 3, grade: 7, title: "Life Under Feudalism",
      note: "Leif Unit 3, against McDougal Ch9.",
      items: [
        { label: "Lesson 1", title: null, kind: "lesson",
          leif: "U3 L1: The Feudal Order", mcdougal: "Ch9 §1" },
        { label: "Lesson 2", title: null, kind: "lesson",
          leif: "U3 L2: Lords, Vassals, and Oaths", mcdougal: "Ch9 §1" },
        { label: "Lesson 3", title: null, kind: "lesson",
          leif: "U3 L3: Manors, Peasants, and Agricultural Change", mcdougal: "Ch9 §2" },
        { label: "Lesson 4", title: null, kind: "lesson",
          leif: "U3 L4: Castles, Knights, and Warfare", mcdougal: "Ch9 §2" },
        { label: "Lesson 5", title: null, kind: "lesson",
          leif: "U3 L5: The Power of the Medieval Church", mcdougal: "Ch10 §1" },
        { label: "Lesson 6", title: null, kind: "lesson",
          leif: "U3 L6: Towns, Guilds, and Trade Routes", mcdougal: "Ch10 §4" },
        { label: "Lesson 7", title: null, kind: "lesson",
          leif: "U3 L7: Viking Expansion and State Formation", mcdougal: null },
        { label: "Lesson 8", title: null, kind: "lesson",
          leif: "U3 L8: The Norman Conquest", mcdougal: null },
        { label: "Lesson 9", title: null, kind: "lesson",
          leif: "U3 L9: Kingship, Law, and Magna Carta", mcdougal: "Ch10 §4" },
        { label: "Review", title: null, kind: "review",
          leif: "U3 L10: Review of Feudal Europe", mcdougal: null },
      ],
    },
    {
      n: 4, grade: 7, title: "Plague, War, and the End of the Middle Ages",
      note: "Leif Unit 4, against McDougal Ch10. Leif's Mongol lesson is the natural " +
            "bridge into unit 7 - McDougal puts the Mongols in its China chapter.",
      items: [
        { label: "Lesson 1", title: null, kind: "lesson",
          leif: "U4 L1: Universities and Scholastic Thought", mcdougal: null },
        { label: "Lesson 2", title: null, kind: "lesson",
          leif: "U4 L2: Gothic Cathedrals and Medieval Culture", mcdougal: "Ch10 §1" },
        { label: "Lesson 3", title: null, kind: "lesson",
          leif: "U4 L3: The Crusades", mcdougal: "Ch10 §2" },
        { label: "Lesson 4", title: null, kind: "lesson",
          leif: "U4 L4: Christian, Muslim, and Jewish Contact", mcdougal: "Ch10 §2" },
        { label: "Lesson 5", title: null, kind: "lesson",
          leif: "U4 L5: The Mongol Empire and Eurasian Exchange", mcdougal: "Ch7 §3" },
        { label: "Lesson 6", title: null, kind: "lesson",
          leif: "U4 L6: The Black Death", mcdougal: "Ch10 §3" },
        { label: "Lesson 7", title: null, kind: "lesson",
          leif: "U4 L7: Peasant Revolts and Social Strain", mcdougal: "Ch10 §3" },
        { label: "Lesson 8", title: null, kind: "lesson",
          leif: "U4 L8: The Hundred Years' War", mcdougal: "Ch10 §3" },
        { label: "Lesson 9", title: null, kind: "lesson",
          leif: "U4 L9: Joan of Arc and the Growth of National Identity", mcdougal: "Ch10 §4" },
        { label: "Review", title: null, kind: "review",
          leif: "U4 L10: Review of Crisis and Change", mcdougal: null },
      ],
    },
    {
      n: 5, grade: 7, title: "The Renaissance, and the Church Divided",
      note: "Leif Unit 5, against McDougal Ch13 and Ch14. ⚠️ Leif's L9 (science and " +
            "exploration) is where this unit hands over to unit 9.",
      items: [
        { label: "Lesson 1", title: null, kind: "lesson",
          leif: "U5 L1: Italian City-States and the Renaissance", mcdougal: "Ch13 §1-2" },
        { label: "Lesson 2", title: null, kind: "lesson",
          leif: "U5 L2: Humanism and Classical Learning", mcdougal: "Ch13 §1" },
        { label: "Lesson 3", title: null, kind: "lesson",
          leif: "U5 L3: Art, Patronage, and Power", mcdougal: "Ch13 §2" },
        { label: "Lesson 4", title: null, kind: "lesson",
          leif: "U5 L4: Printing and the Spread of Ideas", mcdougal: "Ch13 §3" },
        { label: "Lesson 5", title: null, kind: "lesson",
          leif: "U5 L5: Northern Renaissance", mcdougal: "Ch13 §3" },
        { label: "Lesson 6", title: null, kind: "lesson",
          leif: "U5 L6: Martin Luther and the Reformation", mcdougal: "Ch14 §1" },
        { label: "Lesson 7", title: null, kind: "lesson",
          leif: "U5 L7: Calvin, Henry VIII, and Protestant Movements", mcdougal: "Ch14 §2" },
        { label: "Lesson 8", title: null, kind: "lesson",
          leif: "U5 L8: Catholic Reformation and Religious Conflict", mcdougal: "Ch14 §2" },
        { label: "Lesson 9", title: null, kind: "lesson",
          leif: "U5 L9: Science, Exploration, and Changing Worldviews", mcdougal: "Ch15 §1-3" },
        { label: "Review", title: null, kind: "review",
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
        { label: "Lesson 1", title: null, kind: "lesson", leif: null, mcdougal: "Ch5 §1" },
        { label: "Lesson 2", title: null, kind: "lesson", leif: null, mcdougal: "Ch5 §2" },
        { label: "Lesson 3", title: null, kind: "lesson", leif: null, mcdougal: "Ch5 §3" },
        { label: "Lesson 4", title: null, kind: "lesson", leif: null, mcdougal: "Ch6 §1" },
        { label: "Lesson 5", title: null, kind: "lesson", leif: null, mcdougal: "Ch6 §2" },
        { label: "Lesson 6", title: null, kind: "lesson", leif: null, mcdougal: "Ch6 §3" },
      ],
    },
    {
      n: 7, grade: 7, title: "China, Japan, and the Lands Between",
      note: "McDougal Ch7 and Ch8. NOTHING in Leif except its Mongol lesson, which " +
            "is unit 4 L5 and deliberately left there rather than moved.",
      items: [
        { label: "Lesson 1", title: null, kind: "lesson", leif: null, mcdougal: "Ch7 §1" },
        { label: "Lesson 2", title: null, kind: "lesson", leif: null, mcdougal: "Ch7 §2" },
        { label: "Lesson 3", title: null, kind: "lesson",
          leif: "U4 L5 covers the same ground", mcdougal: "Ch7 §3" },
        { label: "Lesson 4", title: null, kind: "lesson", leif: null, mcdougal: "Ch7 §4" },
        { label: "Lesson 5", title: null, kind: "lesson", leif: null, mcdougal: "Ch8 §1" },
        { label: "Lesson 6", title: null, kind: "lesson", leif: null, mcdougal: "Ch8 §2" },
        { label: "Lesson 7", title: null, kind: "lesson", leif: null, mcdougal: "Ch8 §3" },
        { label: "Lesson 8", title: null, kind: "lesson", leif: null, mcdougal: "Ch8 §4" },
      ],
    },
    {
      n: 8, grade: 7, title: "The Civilizations of the Americas",
      note: "McDougal Ch11 and Ch12. NOTHING in Leif. Five numbered sections.",
      items: [
        { label: "Lesson 1", title: null, kind: "lesson", leif: null, mcdougal: "Ch11 §1" },
        { label: "Lesson 2", title: null, kind: "lesson", leif: null, mcdougal: "Ch11 §2" },
        { label: "Lesson 3", title: null, kind: "lesson", leif: null, mcdougal: "Ch11 §3" },
        { label: "Lesson 4", title: null, kind: "lesson", leif: null, mcdougal: "Ch12 §1" },
        { label: "Lesson 5", title: null, kind: "lesson", leif: null, mcdougal: "Ch12 §2" },
      ],
    },
    {
      n: 9, grade: 7, title: "New Questions, New Worlds, and the Age of Reason",
      note: "McDougal Ch15 and Ch16. Leif reaches this only in its very last content " +
            "lesson, U5 L9, so effectively a new unit.",
      items: [
        { label: "Lesson 1", title: null, kind: "lesson", leif: null, mcdougal: "Ch15 §1" },
        { label: "Lesson 2", title: null, kind: "lesson",
          leif: "U5 L9 touches this", mcdougal: "Ch15 §2" },
        { label: "Lesson 3", title: null, kind: "lesson",
          leif: "U5 L9 touches this", mcdougal: "Ch15 §3" },
        { label: "Lesson 4", title: null, kind: "lesson", leif: null, mcdougal: "Ch15 §4" },
        { label: "Lesson 5", title: null, kind: "lesson", leif: null, mcdougal: "Ch16 §1" },
        { label: "Lesson 6", title: null, kind: "lesson", leif: null, mcdougal: "Ch16 §2" },
      ],
    },
    {
      n: 10, grade: 7, title: "How We Know What Happened",
      note: "McDougal Ch1, its opening chapter on geography, evidence and reading the " +
            "past. ⚠️ LAST in the list and that is deliberate - see below.",
      items: [
        { label: "Lesson 1", title: null, kind: "lesson", leif: null, mcdougal: "Ch1 §1" },
        { label: "Lesson 2", title: null, kind: "lesson", leif: null, mcdougal: "Ch1 §2" },
        { label: "Lesson 3", title: null, kind: "lesson", leif: null, mcdougal: "Ch1 §3" },
        { label: "Lesson 4", title: null, kind: "lesson", leif: null, mcdougal: "Ch1 §4" },
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
