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

/* ONE nav definition. Every entry is a real page - no in-page anchors, because
   a slide-out menu that scrolls instead of navigating is what Paul kept hitting. */
const NAV = [
  { href: "/grades/",           label: "Grades",     note: "K through 8",        key: "gr" },
  { href: "/worksheets/",       label: "Worksheets", note: "Free and packets",   key: "w"  },
  { href: "/games/",            label: "Games",      note: "Play in the browser",key: "g"  },
  { href: "/comics/",           label: "Comics",     note: "Read on the site",   key: "c"  },
  { href: "/for-parents/",      label: "For Parents",note: "Placement exams",    key: "p"  },
];

const tabs = (active) => NAV
  .map(n => '<a href="' + n.href + '"' + (active === n.key ? ' class="on"' : '') + '>' + n.label + '</a>')
  .join("");

const drawerLinks = (active) => NAV
  .map(n => '  <a href="' + n.href + '"' + (active === n.key ? ' class="on"' : '') +
            '>' + n.label + '<small>' + n.note + '</small></a>')
  .join("\n");

function shell(o) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex,nofollow">
<title>${o.title}</title>
<meta name="description" content="${o.desc}">
<meta name="theme-color" content="#0a0b0d">
<link rel="stylesheet" href="/assets/ns.css?v=${CSS_V}">
</head>
<body>

<div class="scrim" id="scrim"></div>
<aside class="drawer" id="drawer" aria-label="Menu" aria-hidden="true">
  <button class="x" id="drawerClose" aria-label="Close menu">&times;</button>
  <a href="/">Home</a>
${drawerLinks(o.active)}
  <a class="btn" href="/grades/">Pick a grade</a>
</aside>

<nav id="nav"><div class="nv">
  <button class="burger" id="burger" aria-label="Open menu" aria-expanded="false" aria-controls="drawer">
    <i></i><i></i><i></i>
  </button>
  <a class="word" href="/">Nex<b>Students</b></a>
  <div class="tabs">${tabs(o.active)}</div>
  <a class="btn" href="/grades/">Pick a grade</a>
</div></nav>

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

<script>
const burger=document.getElementById("burger"),drawer=document.getElementById("drawer"),
      scrim=document.getElementById("scrim"),dClose=document.getElementById("drawerClose");
function setNav(o){document.body.classList.toggle("nav-open",o);
  burger.setAttribute("aria-expanded",o);drawer.setAttribute("aria-hidden",!o);
  document.body.style.overflow=o?"hidden":"";}
burger.onclick=()=>setNav(!document.body.classList.contains("nav-open"));
scrim.onclick=dClose.onclick=()=>setNav(false);
addEventListener("keydown",e=>{if(e.key==="Escape")setNav(false)});
const nav=document.getElementById("nav");
addEventListener("scroll",()=>nav.classList.toggle("stuck",scrollY>16),{passive:true});
</script>
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
const gradeGrid = () => {
  const LIVE = ["3", "7", "8"];
  const cells = ["K","1","2","3","4","5","6","7","8"].map(g =>
    LIVE.includes(g)
      ? '<a class="gr live" href="/grade-' + g + '/"><b>' + g + '</b><span>Live</span></a>'
      : '<span class="gr soon"><b>' + g + '</b><span>Soon</span></span>'
  ).join("\n    ");
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
const SUBJECTS = [
  { name: "History", slug: "history", live: true,
    blurb: "American and Biblical history, taught properly rather than skipped over." },
  { name: "ELA", slug: "ela", live: true,
    blurb: "Spelling, book reports, comprehension and reading lists worth actually reading." },
  { name: "Science", slug: "science", live: false,
    blurb: "Experiments you can run at home, taught through a creation lens, with video walkthroughs and record sheets." },
  { name: "Maths", slug: "maths", live: false,
    blurb: "Practice that teaches, without punishing a student for getting things wrong." },
];

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
const subjectLanding = (s) => {
  const slug = s.toLowerCase();
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
  const rows = [...SUBJECTS].sort((a, b) => (b.live ? 1 : 0) - (a.live ? 1 : 0));
  return `<div class="subj-list">
  ${rows.map((s, i) => {
    const nLes = bySubject(s.name).filter(l => grade == null || l.grade === grade).length;
    const nWk  = sheetsBySubject(s.name).filter(w => grade == null || w.grades.includes(grade)).length;
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
    lead: "Free printables and term packets across ELA, History, Science and Maths. Filter by grade, by subject, or by whether it costs anything. Answer keys are always included free.",
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

  { dir: "ela", active: "w",
    title: "ELA — NexStudents",
    desc: "Spelling, reading and writing worksheets you print and work on paper.",
    crumb: "ELA", h1: "ELA.",
    lead: "Spelling, book reports, comprehension and reading lists worth actually reading. The spelling test is blank on purpose, so it works with whatever list you are teaching from.",
    body: subjectLanding("ELA") },

  { dir: "ela/lessons", active: "w",
    title: "ELA Lessons — NexStudents",
    desc: "ELA lessons worked through on screen.",
    crumb: '<a href="/ela/">ELA</a> &rsaquo; Lessons', h1: "ELA Lessons.",
    lead: "Nothing on screen for ELA yet. The printables came first, because spelling and writing are worked on paper.",
    body: subjectLessons("ELA") },

  { dir: "ela/worksheets", active: "w",
    title: "ELA Worksheets — NexStudents",
    desc: "Printable ELA worksheets, including a blank weekly spelling test.",
    crumb: '<a href="/ela/">ELA</a> &rsaquo; Worksheets', h1: "ELA Worksheets.",
    lead: "Printables for working on paper. A blank sheet is one you print once a week and fill with your own words.",
    body: subjectSheets("ELA") },

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
console.log(JSON.stringify({ written, navEntries: NAV.length }, null, 1));
