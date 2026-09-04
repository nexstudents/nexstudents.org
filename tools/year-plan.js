/* ─────────────────────────────────────────────────────────────────────────
   year-plan.js — the 7th grade year, dealt into real dates.

   Paul, 2026-09-04: "build a plan structure for everything including holidays
   and time off. I want you to get as close as possible to the end of May."

   🚨 THIS SCHEDULES THE CURRICULUM, NOT THE BUILD. A slot says what Kolten does
   that day. Whether it is a built NexStudents page, a printed Leif page, or
   nothing yet is a SEPARATE fact, carried as `state`. Confusing the two is how a
   lesson gets assigned that does not exist
   → [[feedback-never-assign-an-unbuilt-lesson]].

   ══ THE SHAPE ══
   Monday to Thursday, because that is the week Kolten already runs in HG and
   Paul asked to keep it. 36 teaching weeks, four calendar weeks off, five
   holidays that turn a 4-day week into 3.

   Lessons are dealt on a TWO-WEEK CYCLE rather than a weekly one, because the
   per-week numbers are fractions: English 2.4, History 2.3, Maths 3.4, Science
   3.7. Over 8 school days those become whole numbers with no awkward remainder:

     Maths 7 · Science 8 · English 5 · History 5  =  25 per 8 days  =  3.1 a day

   ⚠️ Science gets the most because Merrill has the most sections (134 with
   reviews). It is also the subject most able to double up - a reading lesson and
   its vocabulary sit together, which is why the two-day split was collapsed on
   2026-09-04.
   ───────────────────────────────────────────────────────────────────────── */
"use strict";

const { LIFE } = require("./science-units.js");
const { WORLD } = require("./history-units.js");
const { GRADE7 } = require("./english-units.js");
const { COURSE2 } = require("./maths-units.js");

const D = (y, m, d) => new Date(Date.UTC(y, m - 1, d));
const iso = (x) => x.toISOString().slice(0, 10);
const addDays = (x, n) => new Date(+x + n * 86400000);

/* 🚨 THE YEAR. Kolten's 7th grade started 2026-08-25, a Tuesday, so week 1 is the
   week beginning Monday 2026-08-24. */
const FIRST_MONDAY = D(2026, 8, 24);
const TEACHING_WEEKS = 36;

/* Whole weeks off. A break week is SKIPPED, not taught short. */
const BREAK_WEEKS = [
  { name: "Thanksgiving", monday: D(2026, 11, 23), weeks: 1 },
  { name: "Winter break", monday: D(2026, 12, 21), weeks: 2 },
  { name: "Spring break", monday: D(2027, 3, 22), weeks: 1 },
];

/* Single days off inside a teaching week. That week runs 3 days instead of 4. */
const HOLIDAYS = [
  { name: "Labor Day", date: D(2026, 9, 7) },
  { name: "Martin Luther King Jr. Day", date: D(2027, 1, 18) },
  { name: "Presidents Day", date: D(2027, 2, 15) },
  { name: "Memorial Day", date: D(2027, 5, 31) },
  /* ⚠️ Good Friday 2027 is 26 March, which falls INSIDE spring break week, so it
     is NOT listed here. Easter 2027 is 28 March - computed, not guessed. Check
     this every year; Easter moves and the break week may not follow it. */
];

/* Per two-week cycle. Change these four numbers to re-balance the year. */
const CYCLE = { Maths: 7, Science: 8, English: 5, History: 5 };

/* ── THE FOUR COURSES, FLATTENED INTO ORDERED LESSON LISTS ────────────────
   Each entry: { subject, unit, unitTitle, label, title, state }
   `state` is what EXISTS today, and it is the honest column:
     "built"    a real page under /lessons/
     "paper"    Paul owns a printed page for it (Leif units 1-5)
     "todo"     nothing exists yet */

const BUILT = new Set(require("./lessons.js").LESSONS
  ? require("./lessons.js").LESSONS.map((l) => l.id)
  : []);

const flatten = {
  Science: () => LIFE.units.flatMap((u) => u.items
    .filter((i) => i.kind === "lesson" || i.kind === "review")
    .map((i) => ({
      subject: "Science", unit: u.n, unitTitle: u.title,
      label: i.label, title: i.title,
      state: i.slug ? "built" : "todo",
    }))),
  History: () => WORLD.units.flatMap((u) => u.items.map((i) => ({
    subject: "History", unit: u.n, unitTitle: u.title,
    label: i.label, title: i.title,
    /* 🚨 A Leif reference means Paul can PRINT it today. That is the difference
       between a lesson Kolten can do this week and one he cannot. */
    state: i.slug ? "built" : (i.leif ? "paper" : "todo"),
  }))),
  English: () => GRADE7.units.flatMap((u) => (u.lessons || u.items || []).map((l, idx) => ({
    subject: "English", unit: u.n, unitTitle: u.name || u.title,
    label: u.n + "-" + (idx + 1), title: typeof l === "string" ? l : l.title,
    state: (typeof l === "object" && l.slug) ? "built" : "todo",
  }))),
  Maths: () => COURSE2.units.flatMap((u) => u.items
    .filter((i) => i.kind === "lesson")
    .map((i) => ({
      subject: "Maths", unit: u.n, unitTitle: u.title,
      label: i.label, title: i.title,
      state: i.slug ? "built" : "todo",
    }))),
};

/* ── THE CALENDAR ─────────────────────────────────────────────────────────── */
function calendar() {
  const weeks = [];
  let monday = new Date(FIRST_MONDAY);
  let taught = 0;

  const breakAt = (m) => BREAK_WEEKS.find((b) =>
    +m >= +b.monday && +m < +addDays(b.monday, b.weeks * 7));

  while (taught < TEACHING_WEEKS) {
    const br = breakAt(monday);
    if (br) {
      weeks.push({ kind: "break", name: br.name, monday: iso(monday) });
      monday = addDays(monday, 7);
      continue;
    }
    const days = [];
    for (let d = 0; d < 4; d++) {
      const date = addDays(monday, d);
      const hol = HOLIDAYS.find((h) => +h.date === +date);
      days.push({ date: iso(date), day: ["Mon", "Tue", "Wed", "Thu"][d],
                  holiday: hol ? hol.name : null, slots: [] });
    }
    taught++;
    weeks.push({ kind: "week", n: taught, monday: iso(monday), days });
    monday = addDays(monday, 7);
  }
  return weeks;
}

/* ── DEALING THE LESSONS ──────────────────────────────────────────────────
   Two-week cycle, subjects laid down in a fixed daily pattern so a parent sees
   the same rhythm every week rather than a shuffled list.
   ⚠️ Maths is on EVERY teaching day on purpose: it is the subject that decays
   fastest without daily contact. */
/* 🚨 A TWO-WEEK PATTERN, not a one-week one, and this is why: the per-week need
   is fractional - English 2.4, History 2.3, Maths 3.4, Science 3.7. A fixed weekly
   grid cannot hit those, and the first attempt proved it: Maths and Science ran out
   with 27 empty days left while English still had 20 lessons and History 16.
   Over EIGHT days the numbers land whole: Maths 7 · Science 8 · English 5 · History 5.
   ⚠️ Week B Thursday carries four slots. That is the one uneven day in the fortnight
   and it is deliberate - 25 does not divide by 8. */
const WEEK_A = [
  ["Maths", "Science", "English"],   /* Mon */
  ["Maths", "Science", "History"],   /* Tue */
  ["Maths", "Science", "English"],   /* Wed */
  ["Maths", "Science", "History"],   /* Thu */
];
const WEEK_B = [
  ["Maths", "Science", "English"],                 /* Mon */
  ["Maths", "Science", "History"],                 /* Tue */
  ["Maths", "Science", "English"],                 /* Wed */
  ["Science", "History", "History", "English"],    /* Thu - the four-slot day */
];
const patternFor = (weekNumber) => (weekNumber % 2 === 1 ? WEEK_A : WEEK_B);

function build() {
  const weeks = calendar();
  const queue = {};
  for (const s of Object.keys(flatten)) queue[s] = flatten[s]();

  const totals = {};
  for (const s of Object.keys(queue)) totals[s] = queue[s].length;

  const placed = { Maths: 0, Science: 0, English: 0, History: 0 };
  let unplaced = 0;

  for (const w of weeks) {
    if (w.kind !== "week") continue;
    w.days.forEach((day, di) => {
      if (day.holiday) return;               /* no work on a holiday */
      for (const subject of patternFor(w.n)[di]) {
        const next = queue[subject][placed[subject]];
        if (!next) { unplaced++; continue; } /* course finished early */
        placed[subject]++;
        day.slots.push(next);
      }
    });
  }

  /* 🚨 THE SWEEP. The fortnight pattern gets within a lesson or two, never exact -
     429 lessons do not divide evenly by anything. Rather than leave one English
     lesson stranded in May, any leftover is swept into the first day that still
     has room. A parent should never reach the last week and find an orphan. */
  /* 🚨 SWEEP FROM THE END OF THE YEAR, NOT THE START. A leftover is always the
     LAST lesson of its course, so dropping it into the first day with room puts
     "Unit 8 Checkup" on the first Monday of September - which is exactly what the
     first version did. Filling backwards keeps every course in sequence. */
  const roomLast = [];
  for (const w of weeks) {
    if (w.kind !== "week") continue;
    for (const d of w.days) if (!d.holiday && d.slots.length < 4) roomLast.push(d);
  }
  roomLast.reverse();
  let sweep = 0;
  for (const subject of Object.keys(queue)) {
    while (placed[subject] < queue[subject].length && sweep < roomLast.length) {
      const day = roomLast[sweep];
      if (day.slots.length >= 4) { sweep++; continue; }
      day.slots.push(queue[subject][placed[subject]]);
      placed[subject]++;
    }
  }

  const leftover = {};
  for (const s of Object.keys(queue)) leftover[s] = queue[s].length - placed[s];

  const last = weeks.filter((w) => w.kind === "week").pop();
  return {
    weeks, totals, placed, leftover,
    firstDay: weeks.find((w) => w.kind === "week").days[0].date,
    lastDay: last.days[last.days.length - 1].date,
    schoolDays: weeks.filter((w) => w.kind === "week")
      .reduce((n, w) => n + w.days.filter((d) => !d.holiday).length, 0),
    emptySlots: unplaced,
  };
}

module.exports = { build, calendar, CYCLE, WEEK_A, WEEK_B, patternFor, BREAK_WEEKS, HOLIDAYS,
                   FIRST_MONDAY, TEACHING_WEEKS };

if (require.main === module) {
  const p = build();
  console.log("first day  " + p.firstDay);
  console.log("last day   " + p.lastDay);
  console.log("school days " + p.schoolDays);
  console.log("\nsubject      total  placed  left over");
  for (const s of Object.keys(p.totals)) {
    console.log("  " + s.padEnd(10) + String(p.totals[s]).padStart(4) +
      String(p.placed[s]).padStart(8) + String(p.leftover[s]).padStart(10));
  }
  console.log("\nempty slots (course ran out): " + p.emptySlots);
}
