/* Builds every inner page for NexStudents from one shell, so the nav and the
   slide-out drawer are identical on every page and there is exactly one place
   to change them. Guarded: refuses to write if the shared stylesheet is gone. */
const fs = require("fs");
const path = require("path");

const ROOT = process.argv[2];
if (!ROOT) { console.error("usage: node build-pages.js <site root>"); process.exit(1); }
if (!fs.existsSync(path.join(ROOT, "assets/ns.css"))) {
  console.error("FAIL: assets/ns.css missing - pages would render unstyled");
  process.exit(1);
}

/* Cache buster: changes whenever the stylesheet changes, and only then. */
const CSS_V = require("crypto")
  .createHash("sha1")
  .update(fs.readFileSync(path.join(ROOT, "assets/ns.css")))
  .digest("hex")
  .slice(0, 8);

/* The nav moved to tools/nav.js so the WORKSHEET generator can use the same
   one. It lived here under a comment promising "ONE nav definition", which was
   only ever true of the pages this file builds - worksheet pages had no nav at
   all, and a parent landing on one from a search could not reach the site. */
const { NAV, tabs, drawerLinks, navMarkup, navScript, modeBoot } = require("./nav.js");

/* The live origin. Canonicals and the sitemap are absolute URLs by spec. */
const SITE = "https://nexstudents.org";

function shell(o) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- DO NOT REMOVE: Google Search Console verification. Google re-checks
     periodically and the property silently drops if this disappears. -->
<meta name="google-site-verification" content="bsZnURtv4LFARU3XuxGED8inYJB45arSOPHbTJSqgIQ">
<link rel="canonical" href="${SITE}/${o.dir}/">
<title>${o.title}</title>
<meta name="description" content="${o.desc}">
<meta name="theme-color" content="#0a0b0d">
<link rel="stylesheet" href="/assets/ns.css?v=${CSS_V}">
${modeBoot()}
</head>
<body>

${navMarkup(o.active)}

<div class="wrap phead">
  <p class="crumb"><a href="/">Home</a> &rsaquo; ${o.crumb}</p>
  <h1>${o.h1}</h1>
  <p>${o.lead}</p>
</div>

${o.body}

<footer><div class="wrap">
  <div class="fbot">
    <span>&copy; 2026 NexEdge Studios</span>
  </div>
</div></footer>

${navScript()}
</body>
</html>
`;
}

/* Comics: a SERIES SELECTOR, because there will be several strips. Adding one
   is a single entry in SERIES below - the picker and the episode panels both
   build from it. Only real series are listed; inventing titles for comics that
   do not exist would put fake products on the site. */
const SERIES = [
  { id: "donut",
    title: "The Adventures of Donut Boy: The Hole Wonder",
    blurb: "Our first strip. A hero with a hole in the middle and a habit of falling through things.",
    status: "8 episodes",
    cover: "/assets/comics/donut-boy-cover",   // .webp with a .jpg fallback
    /* One page per episode. `img` is the path WITHOUT extension - the reader
       adds .webp with a .jpg fallback. Leave img null and the reader shows an
       honest "being drawn" panel instead of a broken image.
       `title` is left blank deliberately: naming each episode is Paul's call,
       not mine to invent. */
    episodes: [
      { n: "Episode 1", title: "", img: "/assets/comics/donut-boy-ep1" },
      { n: "Episode 2", title: "", img: "/assets/comics/donut-boy-ep2" },
      { n: "Episode 3", title: "", img: "/assets/comics/donut-boy-ep3" },
      { n: "Episode 4", title: "", img: "/assets/comics/donut-boy-ep4" },
      { n: "Episode 5", title: "", img: "/assets/comics/donut-boy-ep5" },
      { n: "Episode 6", title: "", img: "/assets/comics/donut-boy-ep6" },
      { n: "Episode 7", title: "", img: "/assets/comics/donut-boy-ep7" },
      { n: "Episode 8", title: "", img: "/assets/comics/donut-boy-ep8" },
    ] },
];

const comicsPage = () => {
  const cards = SERIES.map((s, i) =>
    '<button class="ser" data-ser="' + s.id + '" aria-pressed="' + (i === 0) + '">' +
      (s.cover
        ? '<picture class="cover art">' +
            '<source srcset="' + s.cover + '.webp" type="image/webp">' +
            '<img src="' + s.cover + '.jpg" alt="' + s.title + ' cover art" ' +
              'width="960" height="640" loading="lazy" decoding="async">' +
          '</picture>'
        : '<div class="cover">Cover</div>') +
      '<h3>' + s.title + '</h3>' +
      '<p>' + s.blurb + '</p>' +
      '<span class="st">' + s.status + '</span>' +
    '</button>'
  ).join("\n    ") +
  '\n    <div class="ser" aria-disabled="true" style="opacity:.45">' +
    '<div class="cover">More soon</div>' +
    '<h3>More strips</h3>' +
    '<p>Other series will appear here as they are drawn.</p>' +
    '<span class="st">Not started</span>' +
  '</div>';

  /* One reader per series. Episodes are one page each, so this is a simple
     prev/next flip rather than a scrolling page stack. */
  const panels = SERIES.map((s, i) =>
    '<div class="reader" data-eps="' + s.id + '"' + (i === 0 ? '' : ' hidden') + '>' +
      '<div class="rframe"><div class="rslot"></div></div>' +
      '<div class="rbar">' +
        '<button class="rnav" data-go="-1" aria-label="Previous episode">&#8249;</button>' +
        '<div class="rmeta"><b></b><span></span></div>' +
        '<button class="rnav" data-go="1" aria-label="Next episode">&#8250;</button>' +
      '</div>' +
    '</div>'
  ).join("\n  ");

  return '<div class="band"><div class="wrap">\n' +
    '  <p class="kick">Pick a comic</p>\n' +
    '  <div class="series" id="series">\n    ' + cards + '\n  </div>\n  ' +
    panels + '\n' +
    '  <p class="h2s" style="margin-top:30px">Episodes read straight on the page. Nothing to ' +
    'download and no account to make &mdash; your student just reads the next one.</p>\n' +
    '</div></div>\n\n' +
    '<scr' + 'ipt>\n' +
    'const SERIES = ' + JSON.stringify(SERIES.map(s => ({ id: s.id, title: s.title, episodes: s.episodes }))) + ';\n' +
    'const at = {};   // current episode index per series\n' +
    '\n' +
    'function render(id){\n' +
    '  const s = SERIES.find(x => x.id === id); if(!s) return;\n' +
    '  const box = document.querySelector(\'[data-eps="\' + id + \'"]\');\n' +
    '  const i = at[id] || 0, ep = s.episodes[i];\n' +
    '  const slot = box.querySelector(".rslot");\n' +
    '  slot.innerHTML = ep.img\n' +
    '    ? \'<picture><source srcset="\' + ep.img + \'.webp" type="image/webp">\' +\n' +
    '      \'<img src="\' + ep.img + \'.jpg" alt="\' + s.title + \', \' + ep.n + \'" decoding="async"></picture>\'\n' +
    '    : \'<div class="rsoon">Being drawn</div>\';\n' +
    '  box.querySelector(".rmeta b").textContent = ep.n;\n' +
    '  box.querySelector(".rmeta span").textContent =\n' +
    '    (ep.title ? ep.title + " \\u00b7 " : "") + (i+1) + " of " + s.episodes.length;\n' +
    '  box.querySelectorAll(".rnav").forEach(btn => {\n' +
    '    const next = i + Number(btn.dataset.go);\n' +
    '    btn.disabled = next < 0 || next >= s.episodes.length;\n' +
    '  });\n' +
    '  /* preload the next page so the flip is instant */\n' +
    '  const nxt = s.episodes[i+1];\n' +
    '  if (nxt && nxt.img) { const p = new Image(); p.src = nxt.img + ".webp"; }\n' +
    '}\n' +
    '\n' +
    'function step(id, dir){\n' +
    '  const s = SERIES.find(x => x.id === id);\n' +
    '  const n = (at[id] || 0) + dir;\n' +
    '  if (n < 0 || n >= s.episodes.length) return;\n' +
    '  at[id] = n; render(id);\n' +
    '}\n' +
    '\n' +
    'function current(){\n' +
    '  const open = [...document.querySelectorAll("[data-eps]")].find(p => !p.hidden);\n' +
    '  return open ? open.dataset.eps : null;\n' +
    '}\n' +
    '\n' +
    'document.getElementById("series").addEventListener("click", e => {\n' +
    '  const b = e.target.closest("button.ser"); if(!b) return;\n' +
    '  document.querySelectorAll("button.ser").forEach(x => x.setAttribute("aria-pressed", x===b));\n' +
    '  document.querySelectorAll("[data-eps]").forEach(p => p.hidden = p.dataset.eps !== b.dataset.ser);\n' +
    '  render(b.dataset.ser);\n' +
    '});\n' +
    '\n' +
    'document.addEventListener("click", e => {\n' +
    '  const btn = e.target.closest(".rnav"); if(!btn) return;\n' +
    '  step(btn.closest("[data-eps]").dataset.eps, Number(btn.dataset.go));\n' +
    '});\n' +
    '\n' +
    '/* arrow keys flip pages, which is what anyone reading a comic reaches for */\n' +
    'addEventListener("keydown", e => {\n' +
    '  const id = current(); if(!id) return;\n' +
    '  if (e.key === "ArrowLeft")  step(id, -1);\n' +
    '  if (e.key === "ArrowRight") step(id,  1);\n' +
    '});\n' +
    '\n' +
    '/* swipe on touch */\n' +
    'document.querySelectorAll(".rframe").forEach(f => {\n' +
    '  let x0 = null;\n' +
    '  f.addEventListener("touchstart", e => { x0 = e.changedTouches[0].clientX; }, {passive:true});\n' +
    '  f.addEventListener("touchend", e => {\n' +
    '    if (x0 === null) return;\n' +
    '    const dx = e.changedTouches[0].clientX - x0; x0 = null;\n' +
    '    if (Math.abs(dx) < 45) return;\n' +
    '    step(f.closest("[data-eps]").dataset.eps, dx < 0 ? 1 : -1);\n' +
    '  }, {passive:true});\n' +
    '});\n' +
    '\n' +
    'SERIES.forEach(s => render(s.id));\n' +
    '</scr' + 'ipt>';
};

/* Honest empty state - better than fake cards implying content exists. */
const empty = (line) => `<div class="band"><div class="wrap">
  <div class="tile" style="min-height:230px;align-items:center;justify-content:center;text-align:center">
    <div>
      <h4 style="font-size:1.35rem">Nothing here yet</h4>
      <p style="max-width:46ch;margin-top:8px">${line}</p>
    </div>
  </div>
</div></div>`;

/* The grade picker, as its own page. Each grade needs a real URL eventually -
   /grade-7/ is exactly the sort of page that can rank against nexstudent.org. */
/* Which grades are live, derived from the two registries rather than listed by
   hand. Used by /grades/ and by the home page picker, so the two can never
   disagree the way they did before 2026-08-26 (home said 7 only). */
const liveGrades = () => [...new Set(
  LESSONS.map(l => l.grade).concat(WORKSHEETS.flatMap(w => w.grades))
)].sort((a, b) => a - b).map(String);

const gradeCells = (live, cls) => ["K","1","2","3","4","5","6","7","8"].map(g =>
  live.includes(g)
    ? '<a class="gr live" href="/grade-' + g + '/"><b>' + g + '</b><span>Live</span></a>'
    : '<span class="gr soon"><b>' + g + '</b><span>Soon</span></span>'
).join("\n    " + (cls || ""));

const gradeGrid = () => {
  const cells = gradeCells(liveGrades());
  return `<div class="band"><div class="wrap">
  <div class="grades">
    ${cells}
  </div>
  <p class="h2s" style="margin-top:28px">7th grade is up first because that is the year being
    taught in our own house right now. The grades either side follow, then outward. A grade goes
    live when it has enough in it to be worth your time, not before.</p>
</div></div>`;
};

/* A subject hub: Lessons on top, Worksheets under it. Both groups are real or
   honestly empty - never a fake card implying something is there.
   HISTORY_LESSONS is the list to add to as each lesson goes up. */
/* ONE registry. The subject hub and the grade page are both views of it, so a
   lesson is added in exactly one place and shows up on both. */

/* The lessons named on the booklet's contents page but not built yet. Order is
   the booklet's order, so the shelf reads as the unit does. */
const PLANNED = [
  { kind: "lesson", subject: "History", grade: 7, unit: "Unit 1 &middot; Lesson 3",  title: "Engineering, Roads, and Military Power" },
  { kind: "lesson", subject: "History", grade: 7, unit: "Unit 1 &middot; Lesson 4",  title: "Conquest, Provinces, and Daily Life" },
  { kind: "lesson", subject: "History", grade: 7, unit: "Unit 1 &middot; Lesson 5",  title: "Social Class, Slavery, and Daily Life" },
  { kind: "lesson", subject: "History", grade: 7, unit: "Unit 1 &middot; Lesson 6",  title: "Judea Under Rome" },
  { kind: "lesson", subject: "History", grade: 7, unit: "Unit 1 &middot; Lesson 7",  title: "Jesus and the Early Church" },
  { kind: "lesson", subject: "History", grade: 7, unit: "Unit 1 &middot; Lesson 8",  title: "Paul, Persecution, and the Early Church" },
  { kind: "lesson", subject: "History", grade: 7, unit: "Unit 1 &middot; Lesson 9",  title: "Crisis and Reform in the Late Empire" },
  { kind: "lesson", subject: "History", grade: 7, unit: "Unit 1 &middot; Lesson 10", title: "Review of Rome and Early Christianity" },
];

/* Grade 8 US history: the Colonies to Reconstruction sequence, thirty sheets
   across ten units. Three are built; these are the rest, in teaching order. */
const PLANNED_8 = [
  ["Unit 1", "Two Worlds Meet",        ["Before Columbus", "Why Europe Sailed", "Jamestown and Plymouth"]],
  ["Unit 2", "The Thirteen Colonies",  ["Life in the Colonies", "Who Governed the Colonies"]],
  ["Unit 3", "Road to Revolution",     ["Taxes and Protest", "The Intolerable Acts"]],
  ["Unit 4", "War for Independence",   ["The Declaration", "Fighting the War", "Winning Independence"]],
  ["Unit 5", "Building a Government",  ["Articles to Constitution", "How the Government Works", "The Bill of Rights"]],
  ["Unit 6", "The New Republic",       ["Washington's Precedents", "The War of 1812"]],
  ["Unit 7", "Expansion and Reform",   ["Jackson and Removal", "Manifest Destiny", "The Reformers"]],
  ["Unit 8", "A Nation Dividing",      ["Two Economies", "The Compromises", "Secession"]],
  ["Unit 9", "The Civil War",          ["Two Sides, Two Plans", "Turning Points", "The War Ends"]],
  ["Unit 10", "Reconstruction",        ["Three Amendments", "Reconstruction and Its End", "Unit Review"]],
].flatMap(([u, name, sheets]) => sheets.map(t => ({
  kind: "worksheet", subject: "History", grade: 8,
  unit: u + " &middot; " + name, title: t
})));

const ALL_PLANNED = PLANNED.concat(PLANNED_8);
const plannedFor = (subject, grade, kind) => ALL_PLANNED.filter(x =>
  (subject == null || x.subject === subject) &&
  (grade == null || x.grade === grade) &&
  (kind == null || x.kind === kind));

const LESSONS = [
  { href: "/lessons/history/republic-to-empire/",
    id: "history/republic-to-empire",
    contains: [
      "A story-form reading, read aloud with the words highlighted",
      "Four vocabulary words the textbooks list but never define",
      "Five questions, four with the answer hidden in the text",
      "A printable answer sheet with a parent signature line",
    ],
    subject: "History", grade: 7,
    unit: "Unit 1 &middot; Lesson 1",
    title: "From Republic to Empire",
    blurb: "Republic to empire, read aloud, then five questions hidden in the text.",
    meta: "Interactive", price: "$0" },

  { href: "/lessons/history/roman-government/",
    id: "history/roman-government",
    contains: [
      "A story-form reading, read aloud with the words highlighted",
      "Four vocabulary words, each one defined inside the story",
      "Day 1: four questions with the answer findable in the text",
      "Day 2: a vocabulary check and a printable answer sheet",
    ],
    subject: "History", grade: 7,
    unit: "Unit 1 &middot; Lesson 2",
    title: "Roman Government and Citizenship",
    blurb: "Offices, consuls and citizenship, and why one-year terms mattered.",
    meta: "Interactive", price: "$0" },

  /* Maths starts in grade 6 on purpose: the foundations unit is the catch-up
     set that grade 7 leans on. See tools/curriculum/. */
  { href: "/lessons/maths/long-division/",
    id: "maths/long-division",
    contains: [
      "A worked example that fills the bracket in step by step, read aloud",
      "Back a step and next step, so a step can be replayed as often as needed",
      "Five problems in a real division bracket, new ones every day",
      "Every row typed in: the quotient, the multiply, the subtract",
    ],
    subject: "Maths", grade: 6,
    unit: "Foundations &middot; Unit 0 &middot; Lesson 1",
    title: "Long Division",
    blurb: "Divide, multiply, subtract, bring down. Worked through one digit at a time.",
    meta: "Interactive", price: "$0" },
];

/* Printables. Empty on purpose - an honest empty state beats a fake card. */
/* Derived from worksheets.js, the same file build-worksheets.js renders the
   sheets from, so a sheet and its shelf card can never disagree. */
const WORKSHEETS = require("./worksheets.js").SHEETS.map(w => ({
  href: "/worksheets/" + w.subject.toLowerCase() + "/" + w.slug + "/",
  id: w.subject.toLowerCase() + "/" + w.slug,
  subject: w.subject, grade: w.grade,
  /* A blank sheet serves more than one year. grades is every shelf it belongs
     on; grade stays the primary one, so nothing that reads it has to change. */
  grades: w.grades || [w.grade],
  /* A blank sheet has no answer key, so it says so rather than claiming one. */
  unit: w.unit || "Printable &middot; answer key included",
  title: w.title, blurb: w.blurb, contains: w.contains,
  thumb: w.thumb ? "/worksheets/" + w.subject.toLowerCase() + "/" + w.slug + "/thumb.jpg" : null,
  meta: "Print or PDF", price: w.price,
}));

/* The core subjects, in the order they appear everywhere on the site.
   `live` gates whether the subject gets its own pages: a subject with nothing
   in it gets a Soon badge and no link, rather than three empty pages. */
/* Fixed order, alphabetical: English, History, Maths, Science. Paul,
   2026-08-26. It used to sort live subjects to the top, which meant the list
   reshuffled itself every time something went live.

   Paul, 2026-08-26: "I really don't like the ELA name", then "change Ela to
   English across the board of the whole website." So the label, the data tag
   and the URL all say English, and every old /ela/ path is left behind as a
   redirect rather than a 404. */
const SUBJECTS = [
  { name: "English", slug: "english", live: true,
    blurb: "Spelling, book reports, comprehension and reading lists worth actually reading." },
  { name: "History", slug: "history", live: true,
    blurb: "American and Biblical history, taught properly rather than skipped over." },
  { name: "Maths", slug: "maths", live: true,
    blurb: "Practice that teaches, without punishing a student for getting things wrong." },
  { name: "Science", slug: "science", live: false,
    blurb: "Experiments you can run at home, taught through a creation lens, with video walkthroughs and record sheets." },
];
const keyOf = (s) => s.key || s.name;

const bySubject = (s) => LESSONS.filter(l => l.subject === s);
const byGrade   = (g) => LESSONS.filter(l => l.grade === g);
const sheetsByGrade   = (g) => WORKSHEETS.filter(w => w.grades.includes(g));
const sheetsBySubject = (s) => WORKSHEETS.filter(w => w.subject === s);

const group = (heading, note, cards) => `<h2 class="h2s" style="margin:0 0 4px">${heading}</h2>
  <p style="margin:0 0 20px;color:var(--dim);font-size:.9rem;max-width:56ch">${note}</p>
  ${cards}`;


/* Compact cards, several to a row. The short line always shows; a native
   <details> lists what the item actually contains. No JS, keyboard accessible.
   The card is a div rather than an anchor - a disclosure control cannot
   legally sit inside a link. */
const SLOT_LABEL = "Being Built";

/* One card. Shared by the flat shelves and the unit pager so they cannot
   drift apart. `eyebrow` is whatever label suits that shelf. */
const oneCard = (l, eyebrow) => `<div class="card${l.thumb ? " has-thumb" : ""}" data-lesson="${l.id}">
      <span class="tick-done" aria-hidden="true">&check;</span>
      <a class="clink" href="${l.href}">
        <span class="cthumb">${l.thumb ? `<img src="${l.thumb}" alt="" loading="lazy" decoding="async">` : ""}</span>
        <span class="cbody">
          <em>${eyebrow}</em>
          <b class="ctitle">${l.title}</b>
          <span class="cblurb">${l.blurb}</span>
        </span>
      </a>
      ${(l.contains && l.contains.length) ? `<details class="cmore">
        <summary>What's inside</summary>
        <ul>${l.contains.map(c => "<li>" + c + "</li>").join("")}</ul>
      </details>` : ""}
      <div class="cmeta">
        <span>${l.meta}</span>
        <u class="${(l.price || "$0") === "$0" ? "free" : "paid"}">${l.price || "$0"}</u>
      </div>
      <span class="tick-score"></span>
    </div>`;

const slotCard = (eyebrow, title, blurb) => `<div class="card is-slot" aria-hidden="true">
      <span class="cthumb"></span>
      <span class="cbody">
        <em>${eyebrow}</em>
        <b class="ctitle">${title}</b>
        <span class="cblurb">${blurb}</span>
      </span>
    </div>`;

const lessonCards = (list, showSubject, slots) => {
  const blanks = Math.max(0, (slots == null ? 3 : slots));
  const real = list.map(l => oneCard(l, showSubject ? l.subject + " &middot; " + l.unit : l.unit)).join("\n    ");

  const named = Array.isArray(slots) ? slots : [];
  const generic = Array.isArray(slots) ? 0 : blanks;
  const empty =
    named.map(x => slotCard(x.unit, x.title, SLOT_LABEL)).join("\n    ") +
    (named.length && generic ? "\n    " : "") +
    Array.from({ length: generic }, () => slotCard(SLOT_LABEL, "Coming Soon", "Another one is on the way.")).join("\n    ");

  return `<div class="cardgrid">
    ${real}
    ${empty}
  </div>
  ${progressScript}`;
};

/* ── the unit pager ── */
const { UNITS, BUILT } = require("./leif-units.js");

const unitPager = (shelfKey) => {
  const panels = UNITS.map((u) => {
    const cards = u.lessons.map((title, i) => {
      const slug = BUILT[u.n + ":" + (i + 1)];
      const label = "Unit " + u.n + " &middot; Lesson " + (i + 1);
      const L = slug ? LESSONS.find((x) => x.href.indexOf("/" + slug + "/") !== -1) : null;
      return L ? oneCard(L, label) : slotCard(label, title, "Not built yet.");
    }).join("\n        ");
    const built = u.lessons.filter((_, i) => BUILT[u.n + ":" + (i + 1)]).length;
    return `<section class="unitpanel" data-unit="${u.n}" data-built="${built}" data-total="${u.lessons.length}" hidden>
      <div class="cardgrid">
        ${cards}
      </div>
    </section>`;
  }).join("\n    ");

  const dots = UNITS.map((u) =>
    `<button type="button" class="unitdot" data-go="${u.n}" title="${u.name}">${u.n}</button>`).join("");

  return `<div class="unitpager" data-shelf="${shelfKey}">
    <div class="unithead">
      <button type="button" class="unitnav" data-step="-1" aria-label="Previous unit">&#8249;</button>
      <div class="unitmid">
        <p class="unittag" id="utag"></p>
        <h3 class="unitname" id="uname"></h3>
        <p class="unitcount" id="ucount"></p>
      </div>
      <button type="button" class="unitnav" data-step="1" aria-label="Next unit">&#8250;</button>
    </div>
    ${panels}
    <div class="unitdots">${dots}</div>
  </div>
  ${pagerScript}
  ${progressScript}`;
};

const pagerScript = `<script>
(function(){
  var wrap = document.querySelector(".unitpager");
  if (!wrap) return;
  var key = "ns:unit:" + wrap.dataset.shelf;
  var panels = [].slice.call(wrap.querySelectorAll(".unitpanel"));
  var NAMES = ${JSON.stringify(Object.fromEntries(UNITS.map(u => [u.n, u.name])))};
  var prev = wrap.querySelectorAll(".unitnav")[0];
  var next = wrap.querySelectorAll(".unitnav")[1];

  function show(n){
    panels.forEach(function(p){ p.hidden = (p.dataset.unit !== String(n)); });
    [].forEach.call(wrap.querySelectorAll(".unitdot"), function(b){
      b.setAttribute("aria-current", b.dataset.go === String(n) ? "true" : "false");
    });
    var cur = panels.filter(function(x){ return x.dataset.unit === String(n); })[0];
    wrap.querySelector("#utag").textContent = "Unit " + n + " of " + panels.length;
    wrap.querySelector("#uname").textContent = NAMES[n] || "";
    if (cur) wrap.querySelector("#ucount").textContent = cur.dataset.built + " of " + cur.dataset.total + " built";
    try { localStorage.setItem(key, n); } catch(e){}
    prev.disabled = (n <= 1);
    next.disabled = (n >= panels.length);
  }

  // last unit viewed, else the first unit with unfinished work, else unit 1
  var start = null;
  try { start = parseInt(localStorage.getItem(key), 10) || null; } catch(e){}
  if (!start){
    for (var i = 0; i < panels.length && !start; i++){
      var cards = panels[i].querySelectorAll("[data-lesson]");
      for (var j = 0; j < cards.length; j++){
        var d = null;
        try { d = JSON.parse(localStorage.getItem("ns:done:" + cards[j].dataset.lesson)); } catch(e){}
        if (!d || d.complete === false){ start = parseInt(panels[i].dataset.unit, 10); break; }
      }
    }
  }
  show(start || 1);

  wrap.addEventListener("click", function(e){
    var nav = e.target.closest(".unitnav");
    if (nav && !nav.disabled){
      var cur = panels.filter(function(x){ return !x.hidden; })[0];
      var n = parseInt(cur.dataset.unit, 10) + parseInt(nav.dataset.step, 10);
      if (n >= 1 && n <= panels.length) show(n);
      return;
    }
    var dot = e.target.closest(".unitdot");
    if (dot) show(parseInt(dot.dataset.go, 10));
  });
})();
<\/script>`;

/* Reads the same localStorage the lesson page writes, so finishing a lesson
   ticks it off here. Same origin, so no server and nothing to sign in to. */
const progressScript = `<script>
(function(){
  var cards = document.querySelectorAll("[data-lesson]");
  for (var i = 0; i < cards.length; i++){
    var c = cards[i], d = null, pr = null;
    try { d = JSON.parse(localStorage.getItem("ns:done:" + c.dataset.lesson)); } catch(e){}
    try { pr = JSON.parse(localStorage.getItem("ns:prog:" + c.dataset.lesson)); } catch(e){}

    // part-finished: show how far in, and stop before the completed styling
    var finished = d && d.complete !== false;
    if (!finished && pr && pr.done > 0){
      c.classList.add("is-part");
      var ps = c.querySelector(".tick-score");
      if (ps) ps.textContent = pr.done + " of " + pr.total + " answered";
      var pb = document.createElement("span");
      pb.className = "cbar";
      pb.innerHTML = '<i style="width:' + Math.round(pr.done / pr.total * 100) + '%"></i>';
      var body = c.querySelector(".cbody");
      if (body) body.appendChild(pb);
      continue;
    }
    if (!finished) continue;

    c.classList.add("is-done");
    var s = c.querySelector(".tick-score");
    if (s) s.textContent = "Completed \\u00b7 best " + d.score + "/" + d.total + " (" + d.pct + "%)";
    var t = c.querySelector(".tick-done");
    if (t) t.setAttribute("title", "Completed");
  }
})();
<\/script>`;

/* Subject landing: same two doors as a grade landing, so both paths through the
   site have the same shape. Lessons and worksheets are different jobs. */
const subjectLanding = (s, slugIn) => {
  const slug = slugIn || s.toLowerCase();
  const lessons = bySubject(s), sheets = sheetsBySubject(s);
  const grades = [...new Set(lessons.map(l => l.grade))].sort((a, b) => a - b);
  return `<div class="band"><div class="wrap">
  <div class="two">
    <a class="tile" href="/${slug}/lessons/" style="min-height:210px">
      <em>Worked through on screen</em>
      <h4 style="font-size:1.5rem">Lessons</h4>
      <p>The reading is built in and read aloud, then questions with the answers hidden in the text. Nothing to print.</p>
      <p style="margin-top:16px;font-size:.78rem;font-weight:800;color:var(--a)">${countLabel(lessons.length, "lesson", "lessons")} &rarr;</p>
    </a>
    <a class="tile" href="/${slug}/worksheets/" style="min-height:210px">
      <em>Printed and written on</em>
      <h4 style="font-size:1.5rem">Worksheets</h4>
      <p>Printables and term packets to work through on paper. Answer keys are always included free.</p>
      <p style="margin-top:16px;font-size:.78rem;font-weight:800;color:var(--a)">${countLabel(sheets.length, "sheet", "sheets")} &rarr;</p>
    </a>
  </div>
</div></div>

<div class="wrap" style="padding-top:56px;padding-bottom:56px">
  ${group("Or Jump to a Grade", "The years this subject has something built for so far.",
    grades.length
      ? `<div class="grades">
    ${grades.map(g => `<a class="gr live" href="/grade-${g}/"><b>${g}</b><span>Live</span></a>`).join("\n    ")}
    </div>`
      : emptyTile("Grades appear here as lessons are added."))}
</div>`;
};

const subjectLessons = (s) => s === "History"
  ? `<div class="band"><div class="wrap">${unitPager("history-lessons")}</div></div>`
  : `<div class="band"><div class="wrap">
  ${bySubject(s).length ? lessonCards(bySubject(s), false, plannedFor(s, null, "lesson"))
    : emptyTile("The first lessons for this subject are being built.")}
</div></div>`;

const subjectSheets = (s) => `<div class="band"><div class="wrap">
  ${sheetsBySubject(s).length ? lessonCards(sheetsBySubject(s), false, plannedFor(s, null, "worksheet"))
    : emptyTile("The printables follow the lessons. They go up as each unit is finished.")}
</div></div>`;

const countLabel = (n, one, many) => n + " " + (n === 1 ? one : many);

const emptyTile = (line) => `<div class="tile" style="min-height:170px;align-items:center;justify-content:center;text-align:center">
      <div><h4 style="font-size:1.2rem">Nothing here yet</h4>
      <p style="max-width:44ch;margin-top:8px">${line}</p></div></div>`;

/* The grade landing: pick a grade, then pick lessons or worksheets.
   Two doors, because a lesson and a printable are different jobs -
   one is worked through on screen, the other gets printed. */
const gradeLanding = (g) => `<div class="band"><div class="wrap">
  ${group("Pick a Subject", "All four core subjects. Each one opens its lessons or its printables for this year.", subjectRows(g))}
</div></div>

<div class="wrap" style="padding-top:56px;padding-bottom:56px">
  ${group("Or Take the Whole Year at Once", "Everything built for this grade, all subjects together.",
    `<div class="subj-sub">
      <a class="minibox" href="/grade-${g}/lessons/">
        <b>All lessons</b><span>Worked through on screen</span>
        <u>${countLabel(byGrade(g).length, "lesson", "lessons")} &rarr;</u>
      </a>
      <a class="minibox" href="/grade-${g}/worksheets/">
        <b>All worksheets</b><span>Printed and written on</span>
        <u>${countLabel(sheetsByGrade(g).length, "sheet", "sheets")} &rarr;</u>
      </a>
    </div>`)}
</div>`;

/* Grade -> Lessons */
const gradeLessons = (g) => {
  const list = byGrade(g);
  if (g === 7) return `<div class="band"><div class="wrap">${unitPager("g7-lessons")}</div></div>`;
  return `<div class="band"><div class="wrap">
  ${list.length ? lessonCards(list, true, plannedFor(null, g, "lesson"))
    : emptyTile("The first lessons for this year are being built.")}
</div></div>`;
};

/* Grade -> Worksheets */
const gradeSheets = (g) => `<div class="band"><div class="wrap">
  ${sheetsByGrade(g).length ? lessonCards(sheetsByGrade(g), true, plannedFor(null, g, "worksheet"))
    : emptyTile("The printables follow the lessons. They go up as each unit is finished.")}
</div></div>`;

/* The subjects index: each subject as a row, with two smaller boxes under it
   for Lessons and Worksheets. Live subjects first, so what actually exists is
   at the top rather than buried under things that do not. */
/* One component, used by /subjects/ and by every grade page, so "pick a subject,
   then pick lessons or worksheets" looks the same wherever you meet it.
   grade = null means every grade; a number scopes the counts to that year. */
const subjectRows = (grade) => {
  const rows = SUBJECTS;          /* fixed order, never re-sorted by liveness */
  return `<div class="subj-list">
  ${rows.map((s, i) => {
    const nLes = bySubject(keyOf(s)).filter(l => grade == null || l.grade === grade).length;
    const nWk  = sheetsBySubject(keyOf(s)).filter(w => grade == null || w.grades.includes(grade)).length;
    const box = (label, note, n, one, many, href) => href
      ? `<a class="minibox" href="${href}">
          <b>${label}</b><span>${note}</span>
          <u>${countLabel(n, one, many)} &rarr;</u>
        </a>`
      : `<div class="minibox is-soon" aria-disabled="true">
          <b>${label}</b><span>${note}</span>
          <u>Not built yet</u>
        </div>`;
    return `<section class="subj-row${s.live ? "" : " is-soon"}">
      <div class="subj-head">
        <n>${String(i + 1).padStart(2, "0")}</n>
        <div>
          <h3>${s.name} <i>${s.live ? "Live" : "Soon"}</i></h3>
          <p>${s.blurb}</p>
        </div>
      </div>
      <div class="subj-sub">
        ${box("Lessons", "Worked through on screen", nLes, "lesson", "lessons", s.live ? "/" + s.slug + "/lessons/" : null)}
        ${box("Worksheets", "Printed and written on", nWk, "sheet", "sheets", s.live ? "/" + s.slug + "/worksheets/" : null)}
      </div>
    </section>`;
  }).join("\n  ")}
  </div>`;
};

const subjectsPage = () => `<div class="band"><div class="wrap">
  ${subjectRows(null)}
  <p class="h2s" style="margin-top:30px">A subject goes live when it has enough in it to be worth
    your time, not before. History is first because it is the one being taught in our own house
    right now.</p>
</div></div>`;

/* The two placement exams, moved off the homepage onto their own page. */
const parents = () => `<div class="band"><div class="wrap">
  <div class="two">
    <div class="plan free">
      <span class="tag">Free</span>
      <h3>Short placement</h3>
      <div class="price">$0</div>
      <ul>
        <li>One subject, about twenty minutes</li>
        <li>A grade level and the skill that gave way</li>
        <li>Results on screen and by email</li>
        <li>No account needed</li>
      </ul>
      <a class="btn ghost" href="/placement-exam.html">Take the short exam</a>
    </div>
    <div class="plan pro pick">
      <span class="tag">Extensive</span>
      <h3>Full placement</h3>
      <div class="price">$9 <s>one student</s></div>
      <ul>
        <li>All four subjects</li>
        <li>Skill-by-skill breakdown for each</li>
        <li>A recommended grade and starting packet</li>
        <li>Printable report to keep on file</li>
      </ul>
      <a class="btn" href="/placement-exam.html">See the exams</a>
    </div>
  </div>
  <p class="h2s" style="margin-top:34px">The full exam is not built yet. The short reading
    placement is live now and is genuinely free &mdash; no card, no account.</p>
</div></div>`;

const pages = [
  { dir: "grades", active: "gr",
    title: "Grades — NexStudents",
    desc: "Free printable resources for K-8, organised by grade.",
    crumb: "Grades", h1: "Pick a Grade.",
    lead: "Everything on the site is organised by grade first, then subject. Pick the year your student is working in and you will see every worksheet, packet, game and reading list for it.",
    body: gradeGrid() },

  { dir: "worksheets", active: "w",
    title: "Worksheets — NexStudents",
    desc: "Every free worksheet and term packet, all grades and subjects, in one place.",
    crumb: "Worksheets", h1: "Every Sheet, in One Place.",
    lead: "Free printables and term packets across English, History, Maths and Science. Filter by grade, by subject, or by whether it costs anything. Answer keys are always included free.",
    body: empty("The shelf is being built. 7th grade goes up first, then the grades either side of it.") },

  { dir: "games", active: "g",
    title: "Games — NexStudents",
    desc: "Browser games that practise the same skills as the worksheets.",
    crumb: "Games", h1: "Practice that does not feel like a worksheet.",
    lead: "Short browser games built around the same skills the worksheets cover. Nothing to install and nothing to sign up for, and getting one wrong never sends a student back to the start.",
    body: empty("The first games are being built. They will appear here as they are finished.") },

  { dir: "comics", active: "c",
    title: "Comics — NexStudents",
    desc: "The Adventures of Donut Boy: The Hole Wonder, and more to follow.",
    crumb: "Comics", h1: "Comics worth coming back for.",
    lead: "Short strips your student reads right here on the page. Pick a series and read straight through - no download, no account, and no reason to stop at one.",
    body: comicsPage() },

  { dir: "subjects", active: "w",
    title: "Subjects — NexStudents",
    desc: "Every subject on NexStudents, with its lessons and worksheets.",
    crumb: "Subjects", h1: "Subjects.",
    lead: "Four core subjects. Each one holds lessons that are worked through on screen and worksheets that get printed. What is built is at the top.",
    body: subjectsPage() },

  /* Grade 3 exists for the spelling sheet. It is deliberately thin: the sheet
     is blank, so it serves any year, and a 3rd grade shelf is where a parent
     looking for spelling practice actually goes. */
  { dir: "grade-3", active: "gr",
    title: "3rd Grade — NexStudents",
    desc: "3rd grade worksheets and printables, organised by subject.",
    crumb: "3rd Grade", h1: "3rd Grade.",
    lead: "The 3rd grade shelf is just getting started. What is here now is spelling practice you can use with any word list, week after week.",
    body: gradeLanding(3) },

  { dir: "grade-3/lessons", active: "gr",
    title: "3rd Grade Lessons — NexStudents",
    desc: "Every 3rd grade lesson, worked through on screen.",
    crumb: '<a href="/grade-3/">3rd Grade</a> &rsaquo; Lessons', h1: "3rd Grade Lessons.",
    lead: "Nothing on screen for this year yet. The printables came first, because spelling is worked on paper.",
    body: gradeLessons(3) },

  { dir: "grade-3/worksheets", active: "gr",
    title: "3rd Grade Worksheets — NexStudents",
    desc: "Every 3rd grade printable worksheet.",
    crumb: '<a href="/grade-3/">3rd Grade</a> &rsaquo; Worksheets', h1: "3rd Grade Worksheets.",
    lead: "Printables for working on paper. A blank sheet is one you print once a week and fill with your own words.",
    body: gradeSheets(3) },

  { dir: "grade-6", active: "gr",
    title: "6th Grade — NexStudents",
    desc: "Every 6th grade lesson and worksheet on NexStudents.",
    crumb: "6th Grade", h1: "6th Grade.",
    lead: "The year before 7th, and the one worth going back to when something is still shaky. Lessons are worked through on screen; worksheets get printed. Pick whichever you need.",
    body: gradeLanding(6) },

  { dir: "grade-6/lessons", active: "gr",
    title: "6th Grade Lessons — NexStudents",
    desc: "Every 6th grade lesson, worked through on screen.",
    crumb: '<a href="/grade-6/">6th Grade</a> &rsaquo; Lessons', h1: "6th Grade Lessons.",
    lead: "Each one opens straight away. The reading is read aloud with the words highlighted, and the questions send your student back into the text to find the answer rather than guess it.",
    body: gradeLessons(6) },

  { dir: "grade-6/worksheets", active: "gr",
    title: "6th Grade Worksheets — NexStudents",
    desc: "Every 6th grade printable worksheet and term packet.",
    crumb: '<a href="/grade-6/">6th Grade</a> &rsaquo; Worksheets', h1: "6th Grade Worksheets.",
    lead: "Printables and term packets for working on paper. Answer keys are always included free.",
    body: gradeSheets(6) },

  { dir: "grade-7", active: "gr",
    title: "7th Grade — NexStudents",
    desc: "Every 7th grade lesson and worksheet on NexStudents.",
    crumb: "7th Grade", h1: "7th Grade.",
    lead: "The year being taught in our own house right now, which is why it went up first. Lessons are worked through on screen; worksheets get printed. Pick whichever you need.",
    body: gradeLanding(7) },

  { dir: "grade-7/lessons", active: "gr",
    title: "7th Grade Lessons — NexStudents",
    desc: "Every 7th grade lesson, worked through on screen.",
    crumb: '<a href="/grade-7/">7th Grade</a> &rsaquo; Lessons', h1: "7th Grade Lessons.",
    lead: "Each one opens straight away. The reading is read aloud with the words highlighted, and the questions send your student back into the text to find the answer rather than guess it.",
    body: gradeLessons(7) },

  { dir: "grade-7/worksheets", active: "gr",
    title: "7th Grade Worksheets — NexStudents",
    desc: "Every 7th grade printable worksheet and term packet.",
    crumb: '<a href="/grade-7/">7th Grade</a> &rsaquo; Worksheets', h1: "7th Grade Worksheets.",
    lead: "Printables and term packets for working on paper. Answer keys are always included free.",
    body: gradeSheets(7) },

  { dir: "grade-8", active: "gr",
    title: "8th Grade — NexStudents",
    desc: "Every 8th grade lesson and worksheet on NexStudents.",
    crumb: "8th Grade", h1: "8th Grade.",
    lead: "American history, the course usually taught the year before high school. Lessons are worked through on screen; worksheets get printed. Pick whichever you need.",
    body: gradeLanding(8) },

  { dir: "grade-8/lessons", active: "gr",
    title: "8th Grade Lessons — NexStudents",
    desc: "Every 8th grade lesson, worked through on screen.",
    crumb: '<a href="/grade-8/">8th Grade</a> &rsaquo; Lessons', h1: "8th Grade Lessons.",
    lead: "Each one opens straight away. The reading is read aloud with the words highlighted, and the questions send your student back into the text to find the answer rather than guess it.",
    body: gradeLessons(8) },

  { dir: "grade-8/worksheets", active: "gr",
    title: "8th Grade Worksheets — NexStudents",
    desc: "Every 8th grade printable worksheet and term packet.",
    crumb: '<a href="/grade-8/">8th Grade</a> &rsaquo; Worksheets', h1: "8th Grade Worksheets.",
    lead: "Printables and term packets for working on paper. Answer keys are always included free.",
    body: gradeSheets(8) },

  { dir: "english", active: "w",
    title: "English — NexStudents",
    desc: "Spelling, reading and writing worksheets you print and work on paper.",
    crumb: "English", h1: "English.",
    lead: "Spelling, book reports, comprehension and reading lists worth actually reading. The spelling test is blank on purpose, so it works with whatever list you are teaching from.",
    body: subjectLanding("English") },

  { dir: "english/lessons", active: "w",
    title: "English Lessons — NexStudents",
    desc: "English lessons worked through on screen.",
    crumb: '<a href="/english/">English</a> &rsaquo; Lessons', h1: "English Lessons.",
    lead: "Nothing on screen for English yet. The printables came first, because spelling and writing are worked on paper.",
    body: subjectLessons("English") },

  { dir: "english/worksheets", active: "w",
    title: "English Worksheets — NexStudents",
    desc: "Printable English worksheets, including a blank weekly spelling test.",
    crumb: '<a href="/english/">English</a> &rsaquo; Worksheets', h1: "English Worksheets.",
    lead: "Printables for working on paper. A blank sheet is one you print once a week and fill with your own words.",
    body: subjectSheets("English") },

  { dir: "history", active: "w",
    title: "History — NexStudents",
    desc: "History lessons and worksheets, worked through on screen.",
    crumb: "History", h1: "History.",
    lead: "American and Biblical history, taught properly rather than skipped over. Lessons are worked through on screen with the reading built in; worksheets get printed.",
    body: subjectLanding("History") },

  { dir: "history/lessons", active: "w",
    title: "History Lessons — NexStudents",
    desc: "Every history lesson on NexStudents, worked through on screen.",
    crumb: '<a href="/history/">History</a> &rsaquo; Lessons', h1: "History Lessons.",
    lead: "Each one opens straight away. The reading is read aloud with the words highlighted, and the questions send your student back into the text to find the answer rather than guess it.",
    body: subjectLessons("History") },

  { dir: "history/worksheets", active: "w",
    title: "History Worksheets — NexStudents",
    desc: "Printable history worksheets and term packets.",
    crumb: '<a href="/history/">History</a> &rsaquo; Worksheets', h1: "History Worksheets.",
    lead: "Printables and term packets for working on paper. Answer keys are always included free.",
    body: subjectSheets("History") },

  { dir: "maths", active: "w",
    title: "Maths — NexStudents",
    desc: "Maths lessons and worksheets, worked through on screen.",
    crumb: "Maths", h1: "Maths.",
    lead: "Practice that teaches, without punishing a student for getting things wrong. Lessons are worked through on screen with the explanation read aloud; worksheets get printed.",
    body: subjectLanding("Maths") },

  { dir: "maths/lessons", active: "w",
    title: "Maths Lessons — NexStudents",
    desc: "Every maths lesson on NexStudents, worked through on screen.",
    crumb: '<a href="/maths/">Maths</a> &rsaquo; Lessons', h1: "Maths Lessons.",
    lead: "Each one opens straight away. The method is read aloud one step at a time, with a full worked example, and the questions send your student back into the steps rather than leaving them to guess.",
    body: subjectLessons("Maths") },

  { dir: "maths/worksheets", active: "w",
    title: "Maths Worksheets — NexStudents",
    desc: "Printable maths worksheets and practice sets.",
    crumb: '<a href="/maths/">Maths</a> &rsaquo; Worksheets', h1: "Maths Worksheets.",
    lead: "Printables and practice sets for working on paper. Answer keys are always included free.",
    body: subjectSheets("Maths") },

  /* Three new top-level pages, 2026-08-26. Real pages from the start, even
     while two of them are empty, because a nav link to nowhere is worse than
     an honest empty page. */
  { dir: "resources", active: "r",
    title: "Resources — NexStudents",
    desc: "The books, tools and supplies we actually use for homeschooling.",
    crumb: "Resources", h1: "What We Actually Use.",
    lead: "Books, tools and supplies from our own shelf, not a list copied off somebody else's blog. Worksheets and lessons are not here; those live under each grade, beside one another.",
    body: empty("The first recommendations are being written up. Anything listed here will be something used in this house, and any affiliate link will be marked as one.") },

  { dir: "about", active: "a",
    title: "About — NexStudents",
    desc: "Who makes NexStudents, and why.",
    crumb: "About", h1: "About NexStudents.",
    lead: "A homeschool family building the resources it needed and could not find, then leaving them up for everyone else.",
    body: empty("This page is being written.") },

  { dir: "contact", active: "ct",
    title: "Contact — NexStudents",
    desc: "How to reach NexStudents.",
    crumb: "Contact", h1: "Get in Touch.",
    lead: "Questions about a worksheet, a broken link, or something you would like built. We read everything.",
    body: empty("The contact form is being set up. An address will go here as soon as there is one worth publishing.") },

  { dir: "for-parents", active: "p",
    title: "For Parents — NexStudents",
    desc: "Placement exams and planning tools for the parent doing the teaching.",
    crumb: "For Parents", h1: "Not sure which grade to start at?",
    lead: "A placement exam, taken online, marked the moment your student finishes. Results appear on screen and land in your inbox. One short version that costs nothing, one fuller version that covers every subject.",
    body: parents() },
];

const written = [];
for (const p of pages) {
  const dir = path.join(ROOT, p.dir);
  fs.mkdirSync(dir, { recursive: true });
  const html = shell(p);
  if (html.includes("undefined")) { console.error("FAIL: undefined in " + p.dir); process.exit(1); }
  if (/href="#"/.test(html)) { console.error("FAIL: dead link in " + p.dir); process.exit(1); }
  fs.writeFileSync(path.join(dir, "index.html"), html, "utf8");
  written.push(p.dir);
}
/* The home page is hand-written except for its grade picker, which is spliced
   from liveGrades() so it matches /grades/. Paul, 2026-08-26: he could not
   navigate from home because the picker still showed 7 as the only live year. */
const homeFile = path.join(ROOT, "index.html");
const home = fs.readFileSync(homeFile, "utf8");
const OPEN = '<div class="grades rv d1">', CLOSE = "</div>";
const a = home.indexOf(OPEN);
if (a < 0) { console.error("FAIL: home grade picker not found"); process.exit(1); }
const b = home.indexOf(CLOSE, a + OPEN.length);
if (b < 0) { console.error("FAIL: home grade picker not closed"); process.exit(1); }
const picker = OPEN + "\n    " + gradeCells(liveGrades()) + "\n  ";
let newHome = home.slice(0, a) + picker + home.slice(b);

/* The home subject tiles were hand-kept too, and had gone stale the same way:
   English and Maths both said "Soon" long after they went live, and it still
   said ELA. Generated from SUBJECTS now, in the same fixed order. */
const S_OPEN = '<div class="subs">', S_CLOSE = "\n</div>";
const sa = newHome.indexOf(S_OPEN);
if (sa < 0) { console.error("FAIL: home subject tiles not found"); process.exit(1); }
const sb = newHome.indexOf(S_CLOSE, sa + S_OPEN.length);
if (sb < 0) { console.error("FAIL: home subject tiles not closed"); process.exit(1); }
const tiles = SUBJECTS.map((s, i) =>
  `  <a class="sub-t is-${s.live ? "live" : "soon"}" href="${s.live ? "/" + s.slug + "/" : "/subjects/"}">` +
  `<n>${String(i + 1).padStart(2, "0")} <i>${s.live ? "Live" : "Soon"}</i></n><div><h3>${s.name}</h3>\n` +
  `    <p>${s.blurb}</p></div></a>`
).join("\n");
newHome = newHome.slice(0, sa) + S_OPEN + "\n" + tiles + newHome.slice(sb);

/* The home page kept its OWN copy of the nav, hand-written, so it still had
   Worksheets in the tab bar and no Home, About or Contact. Paul, 2026-08-26:
   "so the homepage still is set up for the old layout not the new one."
   Spliced from nav.js now, like the grade picker and the subject tiles. */
const N_OPEN = '<div class="scrim" id="scrim"></div>', N_CLOSE = "</div></nav>";
const na = newHome.indexOf(N_OPEN);
if (na < 0) { console.error("FAIL: home nav not found"); process.exit(1); }
const nb = newHome.indexOf(N_CLOSE, na);
if (nb < 0) { console.error("FAIL: home nav not closed"); process.exit(1); }
newHome = newHome.slice(0, na) + navMarkup("h") + newHome.slice(nb + N_CLOSE.length);

/* The footer link columns, same reason: hand-kept and stale. Science is not a
   live subject, so it points at /subjects/ rather than pretending. */
const F_OPEN = '<div><h5>Resources</h5>', F_CLOSE = "</ul></div>\n    <div><h5>Studios</h5>";
const fa = newHome.indexOf(F_OPEN);
const fb2 = newHome.indexOf(F_CLOSE, fa);
if (fa >= 0 && fb2 >= 0) {
  newHome = newHome.slice(0, fa) +
    '<div><h5>Resources</h5><ul>\n' +
    '      <li><a href="/resources/">What we use</a></li><li><a href="/worksheets/">Worksheets</a></li>\n' +
    '      <li><a href="/games/">Games</a></li><li><a href="/comics/">Comics</a></li></ul></div>\n' +
    '    <div><h5>Subjects</h5><ul>\n' +
    '      <li><a href="/english/">English</a></li><li><a href="/history/">History</a></li>\n' +
    '      <li><a href="/maths/">Maths</a></li><li><a href="/subjects/">Science</a></li>' +
    newHome.slice(fb2);
}
newHome = newHome
  .split('<li><a href="mailto:contact@nexedgestudios.com">Contact</a></li>')
  .join('<li><a href="/contact/">Contact</a></li>\n      <li><a href="/about/">About</a></li>');

/* Day and night on the hand-written home page. It needs two things the shell
   gets for free: the boot script in <head>, so a reader who chose light never
   sees the dark page flash first, and the toggle behaviour, since the home
   carries its own nav script rather than the shared one. */
/* 🚨 The home page's cache-buster was hand-written and had gone stale, so
   browsers kept serving the OLD ns.css. That is how day/night shipped working
   on every generated page and dead on the home page: the attribute flipped,
   the stylesheet that knew what to do with it was months out of date. The
   generator owns this now. */
newHome = newHome.replace(/(\/assets\/ns\.css\?v=)[a-f0-9]+/g, "$1" + CSS_V);

{
  const cssLink = newHome.match(/<link rel="stylesheet" href="\/assets\/ns\.css[^>]*>/);
  if (!cssLink) { console.error("FAIL: home has no ns.css link to anchor the mode boot"); process.exit(1); }
  if (!newHome.includes('localStorage.getItem("ns:mode")')) {
    newHome = newHome.replace(cssLink[0], cssLink[0] + "\n" + modeBoot());
  }
  /* The toggle logic, appended inside the home's own closing script. */
  if (!newHome.includes("nsPaintMode")) {
    const toggleJs = navScript()
      .replace(/^<script>\n/, "")
      .replace(/<\/script>$/, "");
    const cut = toggleJs.indexOf("/* Day and night.");
    if (cut < 0) { console.error("FAIL: could not lift the toggle out of navScript"); process.exit(1); }
    newHome = newHome.replace(/<\/script>\s*<\/body>/, "\n" + toggleJs.slice(cut) + "\n</script>\n</body>");
  }
  if (!newHome.includes("nsPaintMode")) {
    console.error("FAIL: the home page did not get the day/night toggle");
    process.exit(1);
  }
}

/* "Resources" now means the recommendations page, so the shelf CTA that still
   pointed at the worksheet shelf had to stop calling itself that. */
newHome = newHome.split('<a class="btn rv d2" href="/worksheets/">Browse all resources</a>')
  .join('<a class="btn rv d2" href="/worksheets/">Browse all worksheets</a>');

/* The verification tag on the home page itself. Google checks the URL the
   property was created with, so the home page is the one that must carry it. */
{
  const VIEWPORT = '<meta name="viewport" content="width=device-width, initial-scale=1">';
  const GSC = '<!-- DO NOT REMOVE: Google Search Console verification. Google re-checks\n' +
              '     periodically and the property silently drops if this disappears. -->\n' +
              '<meta name="google-site-verification" content="bsZnURtv4LFARU3XuxGED8inYJB45arSOPHbTJSqgIQ">';
  if (!newHome.includes("google-site-verification")) {
    newHome = newHome.replace(VIEWPORT, VIEWPORT + "\n" + GSC);
  }
  if (!newHome.includes("google-site-verification")) {
    console.error("FAIL: could not place the Search Console tag on the home page");
    process.exit(1);
  }
}

/* Everything else on the hand-written home that still said ELA. */
newHome = newHome
  .split('data-f="ela">ELA<').join('data-f="ela">English<')
  .split("<em>ELA</em>").join("<em>English</em>")
  .split('<li><a href="/worksheets/">ELA</a></li>').join('<li><a href="/english/">English</a></li>')
  .split("across ELA, History, Science and Maths").join("across English, History, Maths and Science");
if (newHome !== home) fs.writeFileSync(homeFile, newHome, "utf8");

/* ELA became English on 2026-08-26. Anything already pointing at /ela/ - a
   bookmark, a search result, a printed worksheet footer - is redirected rather
   than 404'd. GitHub Pages has no redirect rules, so these are real pages. */
const REDIRECTS = [
  ["ela", "/english/"],
  ["ela/lessons", "/english/lessons/"],
  ["ela/worksheets", "/english/worksheets/"],
  ["worksheets/ela/weekly-spelling-test", "/worksheets/english/weekly-spelling-test/"],
  ["worksheets/ela/spelling-flashcards", "/worksheets/english/spelling-flashcards/"],
];
/* GitHub Pages serves /404.html for any path it does not have. Without one it
   shows its own generic page, which has no nav, so a bad link is a dead end.
   Built from the same shell, so it carries the drawer like everything else.
   noindex on purpose: a 404 must never be in the index. */
{
  const page = {
    dir: "", active: null,
    title: "Page not found — NexStudents",
    desc: "That page does not exist.",
    crumb: "Not found", h1: "That page is not here.",
    lead: "The link may be old, or something moved. Everything on the site is reachable from the menu, or start with a grade.",
    body: empty('Try <a href="/grades/">picking a grade</a>, or <a href="/">go back to the home page</a>.'),
  };
  let h = shell(page)
    .replace('<link rel="canonical" href="' + SITE + '//">',
             '<meta name="robots" content="noindex">');
  if (h.includes("canonical")) { console.error("FAIL: 404 kept a canonical"); process.exit(1); }
  fs.writeFileSync(path.join(ROOT, "404.html"), h, "utf8");
}

const redirects = [];
for (const [from, to] of REDIRECTS) {
  const dir = path.join(ROOT, from);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"),
`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="robots" content="noindex">
<link rel="canonical" href="${to}">
<meta http-equiv="refresh" content="0;url=${to}">
<title>Moved to ${to}</title>
</head>
<body>
<p>This page is now at <a href="${to}">${to}</a>.</p>
<script>location.replace(${JSON.stringify(to)});</script>
</body>
</html>
`, "utf8");
  redirects.push(from + " -> " + to);
}

console.log(JSON.stringify({ written, redirects, navEntries: NAV.length,
  liveGrades: liveGrades(), homePickerUpdated: newHome !== home }, null, 1));
