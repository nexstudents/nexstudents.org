/* ─────────────────────────────────────────────────────────────────────────
   coding-plan.js — the Game Coding elective, dealt into one SEMESTER.

   Paul, 2026-10-13: "put a full semester just like the year long lesson
   planner we made for all the grades." So this hands back the SAME shape as
   year-plan.js (weeks → days → slots), and build-pages.js renders it with the
   same planBody. No dates, ever: the plan counts weeks, Kolten runs on a week
   number (BEHAVIOR.md, ONE LESSON YEAR PLAN PER GRADE).

   18 weeks, TWO lessons a week, Monday and Wednesday. An elective sits beside
   four core subjects, and his typing is still slow, so two short sessions a
   week is the pace. 36 lessons / 2 = 18 weeks, one semester exactly.
   ───────────────────────────────────────────────────────────────────────── */
"use strict";

const fs = require("fs");
const path = require("path");
const { GODOT7 } = require("./coding-units.js");

const WEEKS = 18;
const DAYS = ["Mon", "Tue", "Wed", "Thu"];
const LESSON_DAYS = ["Mon", "Wed"];

/* Lessons Kolten has finished, as a count from the start. Bump it as they are
   graded in HomeschoolGrades, the same way DONE_THROUGH works for the year. */
const DONE_THROUGH = 0;

/* A slot is "built" only when its page exists on disk, never on the slug
   alone - the same test the year plan uses. */
const hrefOf = (slug) => slug &&
  fs.existsSync(path.join(__dirname, "..", "lessons", slug, "index.html"))
  ? "/lessons/" + slug + "/" : null;

function build() {
  const flat = [];
  for (const u of GODOT7.units) u.lessons.forEach((l, i) => flat.push({
    subject: "Coding", unit: u.n, unitTitle: u.name,
    label: u.n + "-" + (i + 1), title: l.title,
    state: hrefOf(l.slug) ? "built" : "todo", href: hrefOf(l.slug),
  }));
  flat.forEach((sl, i) => { sl.done = i < DONE_THROUGH; });

  const weeks = [];
  let k = 0;
  for (let n = 1; n <= WEEKS; n++) {
    /* Only the two coding days are drawn; Tue and Thu would be empty columns. */
    const days = LESSON_DAYS.map((day) => ({ day, holiday: null,
      slots: k < flat.length ? [flat[k++]] : [] }));
    weeks.push({ kind: "week", n, days });
  }
  if (k !== flat.length) throw new Error("coding-plan: " + (flat.length - k) + " lessons did not fit in " + WEEKS + " weeks");
  return { weeks, schoolDays: WEEKS * DAYS.length, perDay: flat.length / (WEEKS * DAYS.length) };
}

module.exports = { build, WEEKS, DONE_THROUGH };
