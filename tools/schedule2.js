/* Week-by-week 7th grade history calendar, with breaks aligned to unit
   boundaries. A unit is never allowed to straddle a break: if it would, the
   days before the break become a review block instead, and the unit starts
   fresh afterwards. Coming back from twelve days off mid-unit is the worst
   place to resume; coming back to a new unit is the best. */
"use strict";

const START = "2026-08-24";
const STOP  = "2027-06-11";

const BREAKS = [
  ["Labor Day",      "2026-09-07", "2026-09-07"],
  ["Thanksgiving",   "2026-11-23", "2026-11-27"],
  ["Winter break",   "2026-12-21", "2027-01-01"],
  ["MLK Day",        "2027-01-18", "2027-01-18"],
  ["Presidents Day", "2027-02-15", "2027-02-15"],
  ["Spring break",   "2027-03-29", "2027-04-02"],
  ["Memorial Day",   "2027-05-31", "2027-05-31"],
];
/* Only the long breaks are worth aligning to. A Monday holiday does not
   disrupt a unit; twelve days off does. */
const LONG = ["Thanksgiving", "Winter break", "Spring break"];

const d = (s) => new Date(s + "T00:00:00");
const iso = (x) => x.toISOString().slice(0, 10);
const md = (x) => x.toLocaleDateString("en-US", { month: "short", day: "numeric" });
const full = (x) => x.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" });
const onBreak = (x) => (BREAKS.find(([, a, b]) => iso(x) >= a && iso(x) <= b) || [null])[0];

const days = [];
let c = d(START);
while (c < d(STOP)) {
  const w = c.getDay();
  if (w >= 1 && w <= 4 && !onBreak(c)) days.push(new Date(c));
  c.setDate(c.getDate() + 1);
}

/* index of the last school day before each long break */
const cuts = [];
for (const [name, a] of BREAKS.filter(([n]) => LONG.includes(n))) {
  let last = -1;
  days.forEach((x, k) => { if (iso(x) < a) last = k; });
  cuts.push({ name, lastIdx: last });
}
const crossesBreak = (start, end) => cuts.find((c) => start <= c.lastIdx && end > c.lastIdx);

const PLAN = [
  { src: "Leif", unit: "U1 Rome and Early Christianity", n: 10, each: 2 },
  { src: "Leif", unit: "U2 Byzantium and Islam",          n: 10, each: 2 },
  { src: "Ours", unit: "West Africa",                     n: 3,  each: 3 },
  { src: "Ours", unit: "Imperial China",                  n: 3,  each: 3 },
  { src: "Ours", unit: "Medieval Japan",                  n: 2,  each: 3 },
  { src: "Leif", unit: "U3 Feudal Europe",                n: 10, each: 2 },
  { src: "Leif", unit: "U4 High Middle Ages",             n: 10, each: 2 },
  { src: "Ours", unit: "The Americas",                    n: 2,  each: 3 },
  { src: "Leif", unit: "U5 Renaissance and Reformation",  n: 10, each: 2 },
  { src: "Ours", unit: "Age of Exploration",              n: 3,  each: 3 },
];

const rows = [];
let i = 0;
for (const p of PLAN) {
  const need = p.n * p.each;
  const hit = crossesBreak(i, i + need - 1);
  if (hit && i <= hit.lastIdx) {
    const pad = hit.lastIdx - i + 1;            // days left before the break
    rows.push({ src: "—", unit: "Review and catch-up", n: "", need: pad,
                first: days[i], last: days[hit.lastIdx], pause: hit.name });
    i = hit.lastIdx + 1;
  }
  rows.push({ ...p, need, first: days[i], last: days[i + need - 1] });
  i += need;
}

const used = i;
console.log("School days in the year  : " + days.length);
console.log("School days the plan uses: " + used + (used <= days.length ? "  (fits)" : "  DOES NOT FIT"));
console.log("Spare                    : " + (days.length - used) + "\n");

const pad = (s, n) => String(s).padEnd(n);
console.log(pad("Src", 6) + pad("Unit", 34) + pad("Items", 7) + pad("Days", 6) + pad("Starts", 9) + "Ends");
console.log("-".repeat(80));
for (const r of rows) {
  console.log(pad(r.src, 6) + pad(r.unit, 34) + pad(r.n, 7) + pad(r.need, 6) +
    pad(r.first ? md(r.first) : "-", 9) + (r.last ? md(r.last) : "PAST THE YEAR"));
  if (r.pause) console.log("       " + "── " + r.pause + " ──");
}
console.log("-".repeat(80));
console.log("\nFINISHES: " + (days[used - 1] ? full(days[used - 1]) : "past the school year"));
console.log("Last school day: " + full(days[days.length - 1]));
console.log("\nUnits straddling a long break: " +
  (rows.some(r => r.n && crossesBreak(days.indexOf(r.first), days.indexOf(r.last))) ? "STILL SOME" : "none"));
