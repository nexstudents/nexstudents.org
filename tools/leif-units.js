/* ─────────────────────────────────────────────────────────────────────────
   LEIF THE LION — world history, book one, straight off the contents pages
   Paul photographed. Five units, ten lessons each, fifty in all.

   The shelf shows ONE unit at a time with a pager, so fifty cards never land
   on the page at once. `slug` is set only for lessons that have been built;
   everything else renders as a named slot.

   🚨 THIS COURSE SPANS TWO GRADES. IT IS NOT A GRADE 7 COURSE.
   Settled 2026-09-03 from the textbooks themselves, after Paul asked:
   "go and look at a 6th grade textbook in the early 2000s and compare it to
   the 7th grade one that we have. and decide where you think it should go."

   The two McDougal Littell volumes state their own grade in their metadata:
     World History: Ancient Civilizations         Grade 6   through Rome
       `mcdougallittellw00mcdo` · ISBN 0618531246 · 756pp
     World History: Medieval and Early Modern Times   Grade 7
       `worldhistorymedi00houg` · ISBN 0618532943 · 794pp
       Islam, African and Asian civilisations, Medieval Europe, the Americas,
       Renaissance and Reformation, Early Modern Europe

   That is the standard California split, and Leif lands on both sides of it:
     Unit 1  Rome and Early Christianity      ANCIENT  -> grade 6
     Units 2-5  Byzantium through Reformation MEDIEVAL -> grade 7

   ⚠️ SO `grade` ON A UNIT IS LOAD-BEARING, not a label. `COURSE_SHELVES` in
   build-pages.js filters on it, which is what puts Unit 1 on the grade 6
   shelf beside the two built Rome lessons and Units 2-5 on grade 7. Before
   this, the pager showed all five units on grade 7 while the Rome lessons
   were shelved at grade 6 — the spine and the shelving disagreed, and Paul
   spotted it. Do not "tidy" the grades to make one course one grade.
   ───────────────────────────────────────────────────────────────────────── */

const UNITS = [
  { n: 1, grade: 6, name: "Roman Republic, Empire, and Early Christianity", lessons: [
    "From Republic to Empire",
    "Roman Government and Citizenship",
    "Engineering, Roads, and Military Power",
    "Conquest, Provinces, and Daily Life",
    "Social Class, Slavery, and Daily Life",
    "Judea Under Rome",
    "Jesus and the Early Church",
    "Paul, Persecution, and the Early Church",
    "Crisis and Reform in the Late Empire",
    "Review of Rome and Early Christianity",
  ]},
  { n: 2, grade: 7, name: "Byzantium, Islam, and the Shaping of Medieval Worlds", lessons: [
    "Constantinople and the Byzantine Legacy",
    "Justinian and Roman Law",
    "The Christian Church in East and West",
    "The Rise of Islam",
    "Trade, Learning, and the Islamic Golden Age",
    "Conflict and Contact Across the Mediterranean",
    "Monasteries, Missionaries, and Medieval Faith",
    "The Franks and the Carolingian World",
    "Geography of Europe, North Africa, and Southwest Asia",
    "Review of Byzantium, Islam, and Medieval Worlds",
  ]},
  { n: 3, grade: 7, name: "Feudal Europe and Expanding Societies", lessons: [
    "The Feudal Order",
    "Lords, Vassals, and Oaths",
    "Manors, Peasants, and Agricultural Change",
    "Castles, Knights, and Warfare",
    "The Power of the Medieval Church",
    "Towns, Guilds, and Trade Routes",
    "Viking Expansion and State Formation",
    "The Norman Conquest",
    "Kingship, Law, and Magna Carta",
    "Review of Feudal Europe",
  ]},
  { n: 4, grade: 7, name: "High Middle Ages, Crisis, and Change", lessons: [
    "Universities and Scholastic Thought",
    "Gothic Cathedrals and Medieval Culture",
    "The Crusades",
    "Christian, Muslim, and Jewish Contact",
    "The Mongol Empire and Eurasian Exchange",
    "The Black Death",
    "Peasant Revolts and Social Strain",
    "The Hundred Years' War",
    "Joan of Arc and the Growth of National Identity",
    "Review of Crisis and Change",
  ]},
  { n: 5, grade: 7, name: "Renaissance and Reformation", lessons: [
    "Italian City-States and the Renaissance",
    "Humanism and Classical Learning",
    "Art, Patronage, and Power",
    "Printing and the Spread of Ideas",
    "Northern Renaissance",
    "Martin Luther and the Reformation",
    "Calvin, Henry VIII, and Protestant Movements",
    "Catholic Reformation and Religious Conflict",
    "Science, Exploration, and Changing Worldviews",
    "Review of Renaissance and Reformation",
  ]},
];

/* Lessons that actually exist. Everything else is a named slot. */
const BUILT = {
  "1:1": "republic-to-empire",
  "1:2": "roman-government",
};

module.exports = { UNITS, BUILT };
