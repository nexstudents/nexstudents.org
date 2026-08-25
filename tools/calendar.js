/* Kolten's 7th grade history calendar.
   School days are Monday to Thursday. Breaks below are the common pattern and
   are ASSUMPTIONS until Paul confirms his district's dates. */
"use strict";

const START = "2026-08-24";          // Paul: 7th grade started this Monday

const BREAKS = [
  ["Labor Day",        "2026-09-07", "2026-09-07"],
  ["Thanksgiving",     "2026-11-23", "2026-11-27"],
  ["Winter break",     "2026-12-21", "2027-01-01"],
  ["MLK Day",          "2027-01-18", "2027-01-18"],
  ["Presidents Day",   "2027-02-15", "2027-02-15"],
  ["Spring break",     "2027-03-29", "2027-04-02"],
  ["Memorial Day",     "2027-05-31", "2027-05-31"],
];

const d = (s) => new Date(s + "T00:00:00");
const iso = (x) => x.toISOString().slice(0, 10);
const pretty = (x) => x.toLocaleDateString("en-US",
  { weekday: "short", month: "short", day: "numeric", year: "numeric" });

function inBreak(x) {
  const t = iso(x);
  for (const [name, a, b] of BREAKS) if (t >= a && t <= b) return name;
  return null;
}

/* Every Mon-Thu school day from START for two years. */
const days = [];
let cur = d(START);
const stop = d("2027-05-28");   // a normal year ends here
while (cur < stop) {
  const dow = cur.getDay();                  // 1 Mon .. 4 Thu
  if (dow >= 1 && dow <= 4 && !inBreak(cur)) days.push(new Date(cur));
  cur.setDate(cur.getDate() + 1);
}

/* Weeks that contain at least one school day. */
const weekKey = (x) => { const m = new Date(x); m.setDate(m.getDate() - (m.getDay() - 1)); return iso(m); };
const weeks = [...new Set(days.map(weekKey))];

console.log("School days available:", days.length);
console.log("School weeks:", weeks.length);
console.log("First day:", pretty(days[0]));
console.log("");

/* ── the content ──
   Leif book 1: 5 units x 10 lessons = 50 lessons.
   Our gap worksheets: units 4, 5, 6, 8 plus a closing unit 10 = 15 sheets.
   A Leif lesson takes 2 school days; one of our worksheets takes 4. */
const PLANS = [
  { name: "Leif only, 2 days a lesson",        items: 50, daysEach: 2 },
  { name: "Leif + our 15 gap sheets",          items: 50, daysEach: 2, extra: 15, extraDays: 4 },
  { name: "Leif at 1 lesson a week (4 days)",  items: 50, daysEach: 4 },
];

for (const p of PLANS) {
  const need = p.items * p.daysEach + (p.extra ? p.extra * p.extraDays : 0);
  const end = days[need - 1];
  console.log(p.name);
  console.log("  school days needed: " + need + "  (of " + days.length + " available)");
  console.log("  finishes: " + (end ? pretty(end) : "RUNS PAST the school year"));
  if (!end) {
    const over = need - days.length;
    console.log("  short by " + over + " school days, about " + Math.ceil(over / 4) + " weeks");
  }
  console.log("");
}

console.log("Breaks assumed:");
for (const [n, a, b] of BREAKS) console.log("  " + n.padEnd(16) + a + (a === b ? "" : "  to  " + b));
