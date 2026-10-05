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
   per-week numbers are fractions: English 2.4, History 2.3, Math 3.4, Science
   3.7. Over 8 school days those become whole numbers with no awkward remainder:

     Math 7 · Science 8 · English 5 · History 5  =  25 per 8 days  =  3.1 a day

   ⚠️ Science gets the most because Merrill has the most sections (134 with
   reviews). It is also the subject most able to double up - a reading lesson and
   its vocabulary sit together, which is why the two-day split was collapsed on
   2026-09-04.
   ───────────────────────────────────────────────────────────────────────── */
"use strict";

const { LIFE } = require("./science-units.js");
const { WORLD } = require("./history-units.js");
const { GRADE7, HOLT7 } = require("./english-units.js");

/* 🚨 ENGLISH IS HOLT FROM WEEK 1. Paul, 2026-10-05: "don't start Kolten on
   middle lesson units. he needs to start in the beginning ... build all previous
   five weeks and start with him on the first week."
   ⚠️ A first pass kept the Houghton Mifflin lessons he did in weeks 1-5 and
   began Holt at week 6. Wrong: the plan is the COURSE, and the course begins at
   Unit 1, Lesson 1 in week 1. Kolten simply starts English at week 1 while his
   other subjects carry on where they are - being behind in one subject is fine
   ("I don't mind that Kolten is behind"). HM stays in HG as his record.
   Set above 1 only to keep HM lessons at the front again. */
const HOLT_FROM_WEEK = 1;
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

/* 🚨 WHAT KOLTEN HAS FINISHED, BY WEEK NUMBER - not by date. Paul, 2026-10-05:
   "let's get rid of the dates. just Mark what is done and what is not done ...
   what confuses you is that the date doesn't match what Kolten is on."
   One number per subject: every lesson in that week or earlier is DONE. Bump it
   when a week is graded in HomeschoolGrades. English is 0 because Holt starts
   at Unit 1 on week 1; the Houghton Mifflin weeks he did are in HG, not here. */
const DONE_THROUGH = { English: 0, History: 4, Math: 4, Science: 4 };

/* Per two-week cycle. Change these four numbers to re-balance the year. */
const CYCLE = { Math: 7, Science: 8, English: 5, History: 5 };

/* ── THE FOUR COURSES, FLATTENED INTO ORDERED LESSON LISTS ────────────────
   Each entry: { subject, unit, unitTitle, label, title, state, href }
   `href` is set only when the lesson page exists on disk (hrefOf below).
   `state` is what EXISTS today, and it is the honest column:
     "built"    a real page under /lessons/
     "todo"     nothing exists yet
   ⚠️ There is no "paper" state any more. Removed 2026-09-13 - see the History
   flattener below for why. */

const BUILT = new Set(require("./lessons.js").LESSONS
  ? require("./lessons.js").LESSONS.map((l) => l.id)
  : []);

/* A built slot links to its lesson. Paul, 2026-09-25: "I want that yearly plan
   clickable ... right now I have to go back to the 7th grade page just to click
   the lesson." The page on DISK is the test, not the slug alone, so a slug set
   ahead of its build never ships a dead link. */
const fs = require("fs");
const path = require("path");
const hrefOf = (slug) => slug &&
  fs.existsSync(path.join(__dirname, "..", "lessons", slug, "index.html"))
  ? "/lessons/" + slug + "/" : null;

const flatten = {
  Science: () => LIFE.units.flatMap((u) => u.items
    .filter((i) => i.kind === "lesson" || i.kind === "review")
    .map((i) => ({
      subject: "Science", unit: u.n, unitTitle: u.title,
      label: i.label, title: i.title,
      state: i.slug ? "built" : "todo", href: hrefOf(i.slug),
    }))),
  History: () => WORLD.units.flatMap((u) => u.items.map((i) => ({
    subject: "History", unit: u.n, unitTitle: u.title,
    label: i.label, title: i.title,
    /* 🚨 "paper" IS GONE, 2026-09-13. Paul: "we are not building paper pages.
       we already talked about how leif the lion was not good. we are taking his
       examples and building lessons on top of them along with the history book."

       This used to read `i.leif ? "paper" : "todo"`, which treated a Leif
       reference as a DELIVERABLE - 51 slots across the year said Kolten could
       just be handed a printed page. That was wrong twice over:
         · the Leif booklets carry the defect we already diagnosed, where a
           vocabulary word is never defined in the story, only on a card
           → [[project-kolten-history-build-system]]
         · and it quietly excused 51 lessons from ever being built

       ⚠️ `leif` STAYS ON THE DATA. It is a build NOTE - which booklet to draw
       examples from - exactly like `page` on a Merrill or Glencoe row. It is a
       SOURCE, not a state. History lessons are built from Leif's examples plus
       McDougal, the same way the other four units already are. */
    state: i.slug ? "built" : "todo", href: hrefOf(i.slug),
  }))),
  Holt: () => HOLT7.units.flatMap((u) => u.lessons.map((l, idx) => ({
    subject: "English", unit: u.n, unitTitle: u.name, course: "Holt",
    label: u.n + "-" + (idx + 1), title: l.title, book: l.book, page: l.page,
    state: l.slug ? "built" : "todo", href: hrefOf(l.slug),
  }))),
  English: () => GRADE7.units.flatMap((u) => (u.lessons || u.items || []).map((l, idx) => ({
    subject: "English", unit: u.n, unitTitle: u.name || u.title,
    label: u.n + "-" + (idx + 1), title: typeof l === "string" ? l : l.title,
    state: (typeof l === "object" && l.slug) ? "built" : "todo",
    href: hrefOf(typeof l === "object" && l.slug),
  }))),
  /* 🚨 THE END-OF-CHAPTER REVIEW IS SCHEDULED. THE HALFWAY CHECK IS NOT.
     Paul, 2026-09-04: "I still want to make it easy on him. but I also want him
     to have some kind of a review. I want to make sure that all of the stuff
     sticks."

     Those are two different jobs and only one of them needs a day:
       Unit Review   proves he learned THIS chapter. A test. Scheduled - 14 of them.
       Halfway Check a mid-chapter pulse. Kept in the data, NOT scheduled, so a
                     parent can reach for it when a chapter is going badly.
       Mixed Review  what actually makes material stick, because it returns to
                     EARLIER lessons after he has moved on. It belongs INSIDE a
                     lesson, costs no extra day, and is ROADMAP 36's missing part.

     ⚠️ Adding the 14 reviews takes the year from 429 to 443, 3.04 -> 3.14 a day.
     That was a deliberate call, not a tidy-up. Do not quietly add the 14 halfway
     checks as well without re-running the deal and re-checking the fit. */
  Math: () => COURSE2.units.flatMap((u) => u.items
    .filter((i) => i.kind === "lesson" ||
                   (i.kind === "review" && !/^Halfway Check/.test(i.title)))
    .map((i) => ({
      subject: "Math", unit: u.n, unitTitle: u.title,
      label: i.label, title: i.title,
      state: i.slug ? "built" : "todo", href: hrefOf(i.slug),
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
   ⚠️ Math is on EVERY teaching day on purpose: it is the subject that decays
   fastest without daily contact. */
/* 🚨 A TWO-WEEK PATTERN, not a one-week one, and this is why: the per-week need
   is fractional - English 2.4, History 2.3, Math 3.4, Science 3.7. A fixed weekly
   grid cannot hit those, and the first attempt proved it: Math and Science ran out
   with 27 empty days left while English still had 20 lessons and History 16.
   Over EIGHT days the numbers land whole: Math 7 · Science 8 · English 5 · History 5.
   ⚠️ Week B Thursday carries four slots. That is the one uneven day in the fortnight
   and it is deliberate - 25 does not divide by 8. */
const WEEK_A = [
  ["Math", "Science", "English"],   /* Mon */
  ["Math", "Science", "History"],   /* Tue */
  ["Math", "Science", "English"],   /* Wed */
  ["Math", "Science", "History"],   /* Thu */
];
const WEEK_B = [
  ["Math", "Science", "English"],                 /* Mon */
  ["Math", "Science", "History"],                 /* Tue */
  ["Math", "Science", "English"],                 /* Wed */
  ["Science", "History", "History", "English"],    /* Thu - the four-slot day */
];
const patternFor = (weekNumber) => (weekNumber % 2 === 1 ? WEEK_A : WEEK_B);

function build() {
  const weeks = calendar();
  const queue = {};
  for (const s of Object.keys(flatten)) if (s !== "Holt") queue[s] = flatten[s]();

  /* HM fills only the English slots before HOLT_FROM_WEEK; Holt takes the rest. */
  let hmSlots = 0;
  for (const w of weeks) {
    if (w.kind !== "week" || w.n >= HOLT_FROM_WEEK) continue;
    w.days.forEach((day, di) => {
      if (!day.holiday) hmSlots += patternFor(w.n)[di].filter((x) => x === "English").length;
    });
  }
  queue.English = queue.English.slice(0, hmSlots).concat(flatten.Holt());

  const totals = {};
  for (const s of Object.keys(queue)) totals[s] = queue[s].length;

  const placed = { Math: 0, Science: 0, English: 0, History: 0 };
  let unplaced = 0;

  /* 🚨 FROM WEEK 6 THE SUBJECTS ARE PACED, NOT PATTERNED. Paul, 2026-10-05:
     "fix all of the math lessons on weeks 35 and 36 ... the rest is all math."
     The fixed fortnight gave Math 7 slots per 8 days for 137 lessons, so 13
     piled into the last two weeks while Science and History ran out early.
     From PACE_FROM_WEEK on, each day keeps the pattern's SIZE (3, or 4 on the
     long Thursday) but its subjects go to whoever is furthest behind an even
     pace to the finish, so all four end in Week 36 together. Weeks before it
     stay exactly as Kolten did them. */
  const PACE_FROM_WEEK = 6;
  const ORDER = ["Math", "Science", "English", "History"];
  let pace = null;                           /* set on the first paced day */

  for (const w of weeks) {
    if (w.kind !== "week") continue;
    w.days.forEach((day, di) => {
      if (day.holiday) return;               /* no work on a holiday */
      let todays = patternFor(w.n)[di];
      if (w.n >= PACE_FROM_WEEK) {
        if (!pace) {
          let slots = 0;
          for (const w2 of weeks) if (w2.kind === "week" && w2.n >= PACE_FROM_WEEK)
            w2.days.forEach((d2, i2) => { if (!d2.holiday) slots += patternFor(w2.n)[i2].length; });
          pace = { slots, used: 0, start: {}, got: {} };
          for (const s of ORDER) { pace.start[s] = queue[s].length - placed[s]; pace.got[s] = 0; }
        }
        const k = todays.length, pick = [];
        pace.used += k;
        /* behind = where an even pace says this subject should be by the end of
           today, minus what it has had. Biggest gap first, one slot each. */
        const behind = (s) => pace.start[s] * pace.used / pace.slots - pace.got[s];
        const open = ORDER.filter((s) => placed[s] < queue[s].length)
          .sort((a, b) => behind(b) - behind(a));
        for (const s of open) if (pick.length < k) pick.push(s);
        while (pick.length < k && open.length) pick.push(open[0]);   /* a short list late in the year */
        pick.forEach((s) => pace.got[s]++);
        todays = ORDER.filter((s) => pick.includes(s))
          .flatMap((s) => Array(pick.filter((x) => x === s).length).fill(s));
      }
      for (const subject of todays) {
        const next = queue[subject][placed[subject]];
        if (!next) { unplaced++; continue; } /* course finished early */
        placed[subject]++;
        next.done = w.n <= (DONE_THROUGH[subject] || 0);
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
    /* 🚨 ENGLISH IS NEVER SWEPT. Holt is a full 36-week course and Kolten
       starts it at week 6, so it is ~4 weeks longer than what is left of the
       year. Sweeping crammed 11 English lessons into the final week. Paul,
       2026-10-05: "I don't mind that Kolten is behind we can try to catch him
       up." The overflow stays in `leftover` as catch-up, not a fake May week. */
    if (subject === "English") continue;
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

module.exports = { build, calendar, DONE_THROUGH, CYCLE, WEEK_A, WEEK_B, patternFor, BREAK_WEEKS, HOLIDAYS,
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
