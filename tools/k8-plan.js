/* ────────────────────────────────────────────────────────────────────────
   k8-plan.js — a year plan for EVERY grade, K to 8, built from Missouri's
   own standards. Paul, 2026-09-25: "I want a full lesson plan for k - 8 ...
   we cannot figure out where the other lessons go without having an entire
   k through 8 full lesson plan. we can update this and change it when we
   find textbooks and even rename them."

   ⚠️ DESE REUSES TWO CODES: 6-8.LS2.C.1 and 6-8.LS2.C.2 each name TWO different
   standards in their own file. All four are real and all four are kept.

   🚨 THE STANDARDS ARE COPIED, NOT DERIVED. mls-k8.json is DESE's four
   board-approved Excel exports (ELA, Math, Science, Social Studies, 2016),
   read cell for cell on 2026-09-25. Re-pull them from
   dese.mo.gov/college-career-readiness/curriculum/missouri-learning-standards
   rather than editing a row by hand.

   ⭐ ONE STANDARD = ONE LESSON SLOT, and every unit ends in a Unit Review
   (BEHAVIOR.md: every unit ends with a review, and the review is a test).
   A unit is one Missouri cluster, in DESE's order.

   ⚠️ THE TITLES ARE PLACEHOLDERS on purpose. They are the standard's own
   words, trimmed. Renaming happens when a textbook is chosen, per Paul.

   ⚠️ THREE THINGS MISSOURI DOES NOT WRITE PER GRADE, and the call made here:
     · Science 6-8 is one band. Split by strand: 6 Earth and Space,
       7 Life (what grade 7 already teaches), 8 Physical + Engineering.
     · Social studies 6-8 is three COURSES. 6 World Geography,
       7 World History (grade 7 already), 8 American History (grade 8 already).
     · Grammar is ONLY in K-5 (the Language strand). Grades 6-8 say
       "conventions ... should expand upon what was taught during grades K-5."
       So a grammar lesson belongs where its K-5 row is.

   ⚠️ SOME GRADES ARE THIN IN A SUBJECT, and that is Missouri, not a bug.
   Paul: "if there's a certain subject like you're not learning about science
   in kindergarten that's fine just figure out what the Missouri standard is
   and put it in the proper grade."
   ────────────────────────────────────────────────────────────────────── */
"use strict";

const fs = require("fs");
const path = require("path");
const MLS = require("./mls-k8.json");
const { calendar } = require("./year-plan.js");
const { ATTACH } = require("./k8-attach.js");

/* A slot links only when its page is on disk, same test as year-plan.js. */
const hrefOf = (slug) => slug &&
  fs.existsSync(path.join(__dirname, "..", "lessons", slug, "index.html"))
  ? "/lessons/" + slug + "/" : null;

const GRADES = ["K", "1", "2", "3", "4", "5", "6", "7", "8"];
const SUBJECTS = ["English", "History", "Math", "Science"];

const SCIENCE_6_8 = {
  6: ["Earth and Space Sciences"],
  7: ["Life Sciences"],
  8: ["Physical Sciences", "Engineering, Technology, and Application of Science"],
};
const HISTORY_6_8 = { 6: "GEO", 7: "WH", 8: "AH" };

/* Which rows belong to a grade and subject. */
function rowsFor(grade, subject) {
  const g = String(grade);
  const n = Number(g);
  if (subject === "Science" && n >= 6) {
    return MLS.filter((r) => r.subject === "Science" && r.grade === "6-8" &&
                             SCIENCE_6_8[n].includes(r.strand));
  }
  if (subject === "History" && n >= 6) {
    return MLS.filter((r) => r.subject === "History" && r.grade === "6-8" &&
                             r.course === HISTORY_6_8[n]);
  }
  return MLS.filter((r) => r.subject === subject && r.grade === g);
}

/* A short title from the standard's own words. Placeholder until a book names it. */
function titleOf(r) {
  let t = (r.text || "").replace(/\[[^\]]*\]/g, " ")
    .replace(/^(with (prompting and support|assistance|guidance and support),?\s*)/i, "")
    .replace(/\s+/g, " ").trim();
  /* Cut at the first full stop or semicolon. A colon only ends the title when
     what comes before it is long enough to stand alone - "Narrative: Develop
     narratives ..." would otherwise become the one word "Narrative". */
  t = t.split(/(?<=[a-z0-9)])[.;](\s|$)/)[0];
  const colon = t.indexOf(": ");
  if (colon > 25) t = t.slice(0, colon);
  if (t.length > 90) t = t.slice(0, 90).replace(/\s+\S*$/, "") + "…";
  return t.charAt(0).toUpperCase() + t.slice(1);
}

/* Units in DESE's order. A unit is one cluster; its lessons are its rows. */
function unitsFor(grade, subject) {
  const units = [];
  const byKey = new Map();
  /* ⚠️ SCIENCE UNITS ARE A WHOLE STRAND. A science standard is a big
     performance expectation, one or two per core idea, so clustering the way
     the other subjects do left kindergarten with one-lesson units. */
  for (const r of rowsFor(grade, subject)) {
    const key = subject === "Science" ? r.strand : r.strand + "|" + r.group + "|" + r.cluster;
    let u = byKey.get(key);
    if (!u) {
      u = { strand: r.strand,
            title: subject === "Science" ? r.strand : (r.cluster || r.group || r.strand), rows: [] };
      byKey.set(key, u);
      units.push(u);
    }
    u.rows.push(r);
  }
  /* ⚠️ A ONE-LESSON UNIT IS MERGED UPWARD. Grades 6-8 English carry one
     standard per cluster, which made every lesson its own unit with its own
     review test - 33 tests in 73 slots. Neighbouring small clusters under the
     same strand and theme join into one unit named for the theme. */
  const MIN = 3;
  const merged = [];
  for (const u of units) {
    const prev = merged[merged.length - 1];
    const g = u.rows[0].group;
    if (prev && prev.strand === u.strand && prev.group === g &&
        (prev.rows.length < MIN || u.rows.length < MIN)) {
      prev.rows.push(...u.rows);
      prev.title = g;
      continue;
    }
    merged.push(Object.assign(u, { group: g }));
  }
  const seen = {};
  for (const u of merged) {
    const t = unitTitle(subject, u);
    seen[t] = (seen[t] || 0) + 1;
    u.title = seen[t] > 1 ? t + ", Part " + seen[t] : t;
  }
  return merged;
}

/* Tidy DESE's cluster wording into a unit name a parent can read. */
const ENGLISH_STRAND = {
  "Reading": "Reading", "Reading Foundations": "Phonics",
  "Reading Literary Text": "Literature", "Reading Informational Text": "Informational Text",
  "Writing": "Writing", "Language": "Grammar and Spelling",
  "Speaking/Listening": "Speaking and Listening", "Speaking and Listening": "Speaking and Listening",
};
function unitTitle(subject, u) {
  let t = String(u.title)
    .replace(/^\d+\s+/, "")
    .replace(/\s*\([^)]*\)\s*$/, "")
    .replace(/^knowledge of (the )?/i, "")
    .replace(/\.$/, "").trim();
  t = t.charAt(0).toUpperCase() + t.slice(1);
  if (subject === "English") {
    const s = ENGLISH_STRAND[u.strand] || u.strand;
    if (s.toLowerCase() !== t.toLowerCase()) t = s + ": " + t;
  }
  return t;
}

/* The ordered queue for one subject: every lesson, then that unit's review.
   ⚠️ ENGLISH INTERLEAVES ITS STRANDS. DESE lists all of Reading, then all of
   Writing, then Language. Taught in that order a child would not write until
   spring. So English deals one unit from each strand in turn. */
function queueFor(grade, subject) {
  let units = unitsFor(grade, subject);
  if (subject === "English") {
    const tracks = [];
    for (const u of units) {
      let t = tracks.find((x) => x[0].strand === u.strand);
      if (!t) tracks.push((t = []));
      t.push(u);
    }
    units = [];
    for (let i = 0; units.length < tracks.flat().length; i++) {
      for (const t of tracks) if (t[i]) units.push(t[i]);
    }
  }
  /* A standard with our lessons attached shows those lessons in its place
     → k8-attach.js. Otherwise it is one slot in the standard's own words. */
  const out = [];
  units.forEach((u, ui) => {
    const n = ui + 1;
    const items = [];
    for (const r of u.rows) {
      const mine = ATTACH[r.code];
      if (mine) for (const a of mine) items.push({ title: a.title, slug: a.slug || null, r });
      else items.push({ title: titleOf(r), slug: null, r });
    }
    items.forEach((it, li) => {
      const href = hrefOf(it.slug);
      out.push({
        subject, unit: n, unitTitle: u.title, strand: u.strand,
        label: n + "-" + (li + 1), title: it.title, code: it.r.code, text: it.r.text,
        slug: it.slug, state: href ? "built" : "todo", href,
      });
    });
    out.push({
      subject, unit: n, unitTitle: u.title, strand: u.strand,
      label: n + "-" + (items.length + 1), title: "Unit " + n + " Review: " + u.title,
      code: "", text: "", review: true, slug: null, state: "todo", href: null,
    });
  });
  return out;
}

/* Deal every subject evenly across the teaching days of the same calendar
   the grade 7 plan uses, so all nine grades share one school year. */
function build(grade) {
  const weeks = calendar();
  const days = [];
  for (const w of weeks) if (w.kind === "week") for (const d of w.days) if (!d.holiday) days.push(d);

  const totals = {};
  for (const subject of SUBJECTS) {
    const q = queueFor(grade, subject);
    totals[subject] = q.length;
    q.forEach((sl, i) => days[Math.floor(i * days.length / q.length)].slots.push(sl));
  }
  for (const d of days) d.slots.sort((a, b) => SUBJECTS.indexOf(a.subject) - SUBJECTS.indexOf(b.subject));

  const teach = weeks.filter((w) => w.kind === "week");
  const last = teach[teach.length - 1];
  const lessons = Object.values(totals).reduce((a, b) => a + b, 0);
  return {
    grade: String(grade), weeks, totals, lessons,
    firstDay: teach[0].days[0].date,
    lastDay: last.days[last.days.length - 1].date,
    schoolDays: days.length,
    perDay: Math.round(lessons / days.length * 10) / 10,
  };
}

module.exports = { build, GRADES, SUBJECTS, rowsFor, unitsFor, queueFor, titleOf };

if (require.main === module) {
  for (const g of GRADES) {
    const p = build(g);
    console.log("grade " + g.padEnd(2) + " lessons " + String(p.lessons).padStart(4) +
      "  per day " + p.perDay + "  " +
      SUBJECTS.map((s) => s + " " + p.totals[s]).join(" · "));
  }
}
