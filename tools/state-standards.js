/* ────────────────────────────────────────────────────────────────────────
   state-standards.js — the State Standards resource page, /state-standards/.

   Paul, 2026-09-25: "we don't need to build our lessons to those state
   standards. this is just a page to get that information ... a drop-down by
   state selection and a grade level selection and it shows that exactly
   standard outline ... people can join our website and see the standards for
   their state."

   🚨 IT IS A RESOURCE, NOT OUR PLAN. It shows a state's standards exactly as
   the state publishes them. It does not say which of our lessons meet them.
   (The year plans do that, from the same Missouri file, for our own use.)

   🚨 THE DATES ARE THE POINT. Paul: "that stuff gets updated often so having a
   last updated note in the page would help." Each state carries:
     adopted   when the state approved the standards
     revised   anything the state has reviewed since, per subject
     checked   when WE last pulled the state's files. Update it on every re-pull.

   ⚠️ ADDING A STATE: give it `data` (rows shaped like mls-k8.json) and flip
   `live`. Every state is in the dropdown today; only live ones can be chosen.
   ────────────────────────────────────────────────────────────────────── */
"use strict";

const MISSOURI = {
  slug: "missouri", name: "Missouri", live: true,
  title: "Missouri Learning Standards",
  agency: "Missouri Department of Elementary and Secondary Education (DESE)",
  adopted: "2016",
  revised: [
    { what: "Science", when: "September 2024", note: "DESE's reviewed file" },
  ],
  checked: "2026-09-25",
  home: "https://dese.mo.gov/college-career-readiness/curriculum/missouri-learning-standards",
  sources: [
    { label: "English Language Arts, K-12", href: "https://dese.mo.gov/media/file/curr-mls-standards-ela-k-12-sboe-2016" },
    { label: "Mathematics, K-12",          href: "https://dese.mo.gov/media/file/curr-mls-standards-math-k-12-sboe-2016" },
    { label: "Science, K-12",              href: "https://dese.mo.gov/media/file/curr-mls-standards-sci-k-12-sboe-2016" },
    { label: "Social Studies, K-12",       href: "https://dese.mo.gov/media/file/curr-mls-standards-ss-k-12-sboe-2016" },
  ],
  data: () => require("./mls-k8.json"),
  /* How Missouri names its own subjects. Our data files say English/History. */
  subjects: [
    { key: "English", name: "English Language Arts" },
    { key: "Math",    name: "Mathematics" },
    { key: "Science", name: "Science" },
    { key: "History", name: "Social Studies" },
  ],
  /* Missouri does not split these by grade, so a 6-8 page shows the whole band
     and says so, rather than pretending the state assigned a grade. */
  bands: {
    Science: "Missouri writes middle school science as one grade 6-8 band. Every grade 6, 7 and 8 page shows the whole band.",
    History: "Missouri writes middle school social studies as three courses, not grades. Every grade 6, 7 and 8 page shows all three.",
  },
  courses: { GEO: "World Geography", WH: "World History", AH: "American History" },
};

const OTHER = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
  "Connecticut", "Delaware", "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho",
  "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
  "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Montana", "Nebraska", "Nevada",
  "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota",
  "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
  "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
  "West Virginia", "Wisconsin", "Wyoming"];

const STATES = [MISSOURI, ...OTHER.map((name) => ({
  slug: name.toLowerCase().replace(/[^a-z]+/g, "-"), name, live: false,
}))].sort((a, b) => a.name.localeCompare(b.name));

const GRADES = ["K", "1", "2", "3", "4", "5", "6", "7", "8"];

module.exports = { STATES, GRADES };
