/* ─────────────────────────────────────────────────────────────────────────
   THE SITE NAV — one definition, shared by BOTH generators.

   It used to live inside build-pages.js, which carried a comment promising
   "ONE nav definition". That was true only of the pages that file builds. The
   worksheet pages come out of build-worksheets.js and had no nav at all: a
   parent who landed on a worksheet from a search could not reach the rest of
   the site, and Paul found it by looking at a live sheet. Moving it here is
   what that comment was always claiming.

   Every entry is a real page - no in-page anchors, because a slide-out menu
   that scrolls instead of navigating is what Paul kept hitting.

   `active` is the key of the current section, or null on a page that is not
   one of them (a worksheet is under Worksheets, so it passes "w").
   ───────────────────────────────────────────────────────────────────────── */
"use strict";

/* Paul, 2026-08-26:
   - **Home belongs in the list**, not only on the wordmark. It is the first
     entry in both the top bar and the drawer now.
   - **Worksheets came out and Resources went in.** Worksheets already live
     inside Grades, beside Lessons. `/worksheets/` is still a real page and
     still linked from every grade and subject page; it just stopped being a
     top-level destination. `/resources/` is the new one, for affiliate links.
   - **About and Contact** are what make it read as a site rather than a pile
     of pages.

   `top:false` keeps an entry out of the desktop tab bar while leaving it in
   the drawer and the footer. Eight tabs across the top is a scroll bar, not a
   nav; About and Contact are the two that belong further down. */
const NAV = [
  { href: "/",             label: "Home",        note: "Start here",          key: "h",  top: true },
  { href: "/grades/",      label: "Grades",      note: "K through 8",         key: "gr", top: true },
  { href: "/resources/",   label: "Resources",   note: "Tools we use",        key: "r",  top: true },
  { href: "/games/",       label: "Games",       note: "Play in the browser", key: "g",  top: true },
  { href: "/comics/",      label: "Comics",      note: "Read on the site",    key: "c",  top: true },
  { href: "/for-parents/", label: "For Parents", note: "Placement exams",     key: "p",  top: true },
  { href: "/about/",       label: "About",       note: "Who makes this",      key: "a",  top: false },
  { href: "/contact/",     label: "Contact",     note: "Get in touch",        key: "ct", top: false },
];

/* ── THE DROPDOWN PANELS ───────────────────────────────────────────────────
   Paul, 2026-08-26, after studying lttstore: a band that opens under the nav
   on hover, each section showing its own contents, with a promo picture on the
   right. Built here rather than copied: the disclosure is a native
   <details>/<summary>, so it works with a keyboard and without JavaScript.

   Only sections with REAL second-level structure get one. A dropdown holding
   one link is worse than no dropdown.

   ⚠️ SUBJECTS and LIVE_GRADES live here because the NAV is what needs them on
   every page. build-pages.js imports SUBJECTS from here and asserts its own
   derived live-grade list matches LIVE_GRADES, so these cannot drift apart
   silently - the build fails instead.
   ------------------------------------------------------------------------ */
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

/* Which grades have something real in them. Derived in build-pages.js from the
   lesson and worksheet registries; mirrored here for the nav, and checked. */
const LIVE_GRADES = ["3", "6", "7", "8"];

const ALL_GRADES = ["K", "1", "2", "3", "4", "5", "6", "7", "8"];

const gradeTiles = () => ALL_GRADES.map(g => LIVE_GRADES.includes(g)
  ? '<a class="mg-grade live" href="/grade-' + g + '/"><b>' + g + '</b><span>Live</span></a>'
  : '<span class="mg-grade soon"><b>' + g + '</b><span>Soon</span></span>'
).join("");

const col = (heading, links) =>
  '<div class="mg-col"><h4>' + heading + '</h4><ul>' +
  links.map(l => l.href
    ? '<li><a href="' + l.href + '">' + l.label + '</a></li>'
    : '<li><span class="mg-soon">' + l.label + '</span></li>').join("") +
  "</ul></div>";

/* A promo is optional per panel, and only ever points at something real. */
const promo = (p) => p
  ? '<a class="mg-promo" href="' + p.href + '">' +
    '<img src="' + p.img + '" alt="' + p.alt + '" decoding="async">' +
    "<b>" + p.label + "</b></a>"
  : "";

const MENUS = {
  gr: {
    body: '<div class="mg-grades">' + gradeTiles() + "</div>" +
          '<p class="mg-note">Everything is organised by grade first, then subject. ' +
          "A grade goes live when there is enough in it to be worth your time.</p>",
    promo: { href: "/worksheets/history/us-history-semester-1/",
             img: "/worksheets/history/us-history-semester-1/thumb.jpg",
             alt: "Complete 8th Grade US History, Units 1 to 5 bundle",
             label: "8th Grade US History &middot; Units 1-5" },
  },
  r: {
    body: '<div class="mg-cols">' + SUBJECTS.map(s => col(s.name, s.live
      ? [{ label: "Lessons", href: "/" + s.slug + "/lessons/" },
         { label: "Worksheets", href: "/" + s.slug + "/worksheets/" }]
      : [{ label: "Being built" }])).join("") +
      col("Everything", [
        { label: "All worksheets", href: "/worksheets/" },
        { label: "What we use", href: "/resources/" },
        { label: "Pick a grade", href: "/grades/" },
      ]) + "</div>",
  },
  g: {
    /* The same six the home page already lists. None are built; every one
       says so rather than pretending to be a link. */
    body: '<div class="mg-cols">' +
      col("Maths", [{ label: "Remainder race" }, { label: "Fraction match" }]) +
      col("English", [{ label: "Spelling ladder" }, { label: "Comma catcher" }]) +
      col("History", [{ label: "Place the state" }]) +
      col("Science", [{ label: "Sort the mixture" }]) + "</div>" +
      '<p class="mg-note">None of these are playable yet. They go up as they are built.</p>',
  },
};

const tabs = (active) => NAV
  .filter(n => n.top)
  .map(n => {
    const on = active === n.key ? " on" : "";
    const m = MENUS[n.key];
    if (!m) return '<a class="mg-top' + on + '" href="' + n.href + '">' + n.label + "</a>";
    return '<details class="mega"><summary class="mg-top' + on + '">' + n.label +
      '</summary><div class="mg-panel"><div class="mg-inner">' +
      '<div class="mg-body">' + m.body +
      '<p class="mg-all"><a href="' + n.href + '">All ' + n.label.toLowerCase() + " &rarr;</a></p></div>" +
      promo(m.promo) +
      "</div></div></details>";
  })
  .join("");

/* On a phone an item with a panel gets a chevron and pushes a SECOND sheet in
   from the left, rather than trying to squeeze a mega menu onto a 390px
   screen. The link itself still goes to the section, so nothing is trapped
   behind the chevron. */
const drawerLinks = (active) => NAV
  .map(n => {
    const on = active === n.key ? " on" : "";
    if (!MENUS[n.key]) {
      return '  <a class="dl' + on + '" href="' + n.href + '">' + n.label +
             "<small>" + n.note + "</small></a>";
    }
    return '  <div class="dl-row">' +
      '<a class="dl' + on + '" href="' + n.href + '">' + n.label +
      "<small>" + n.note + "</small></a>" +
      '<button class="dl-more" type="button" data-sub="' + n.key + '" ' +
      'aria-label="Open ' + n.label + '">&#8250;</button></div>';
  })
  .join("\n");

/* The second sheets themselves. They sit beside the drawer and slide over it. */
/* ── THE PHONE SHEETS ──────────────────────────────────────────────────────
   Paul, 2026-08-26: "it shows another side menu after you click the arrow like
   grades and has like a sub menu on the side ... this will cut down on the
   different pages we dont really need if they can navigate to the right grade
   menu."

   So the drawer is a STACK of sheets, not a drawer with one tile grid stapled
   to it. Grades opens a list of grades; a grade opens its own doors. Every row
   that goes deeper carries a chevron, and every row that is a destination is a
   plain link, so nothing is reachable only by disclosure.

   SHEETS is a flat map of id -> { title, parent, rows }. `parent` is what Back
   returns to, which is what makes the stack work without tracking history.
   ------------------------------------------------------------------------ */
const row = (r) => {
  if (r.soon) return '<span class="dsr soon">' + r.label + "<small>Being built</small></span>";
  const link = '<a class="dsr" href="' + r.href + '">' + r.label +
    (r.note ? "<small>" + r.note + "</small>" : "") + "</a>";
  return r.sub
    ? '<div class="dsr-row">' + link +
      '<button class="dsr-more" type="button" data-sub="' + r.sub +
      '" aria-label="Open ' + r.label + '">&#8250;</button></div>'
    : link;
};

const SHEETS = {};

/* Level 2: the three sections. */
SHEETS.gr = { title: "Grades", parent: null, all: "/grades/", rows:
  ALL_GRADES.map(g => LIVE_GRADES.includes(g)
    ? { label: g === "K" ? "Kindergarten" : "Grade " + g, href: "/grade-" + g + "/", sub: "gr-" + g }
    : { label: g === "K" ? "Kindergarten" : "Grade " + g, soon: true })
};

SHEETS.r = { title: "Resources", parent: null, all: "/resources/", rows:
  SUBJECTS.map(s => s.live
    ? { label: s.name, href: "/" + s.slug + "/", sub: "r-" + s.slug }
    : { label: s.name, soon: true })
  .concat([{ label: "What we use", href: "/resources/", note: "Books and tools" },
           { label: "All worksheets", href: "/worksheets/", note: "Every printable" }])
};

/* The game names are the ones already listed on the home page. Not invented
   here, and not built yet either - every row says so. */
SHEETS.g = { title: "Games", parent: null, all: "/games/", rows: [
  { label: "Remainder race", soon: true },
  { label: "Fraction match", soon: true },
  { label: "Spelling ladder", soon: true },
  { label: "Comma catcher", soon: true },
  { label: "Place the state", soon: true },
  { label: "Sort the mixture", soon: true },
]};

/* Level 3: one sheet per live grade, and one per live subject. */
LIVE_GRADES.forEach(g => {
  SHEETS["gr-" + g] = {
    title: g === "K" ? "Kindergarten" : "Grade " + g,
    parent: "gr", all: "/grade-" + g + "/",
    rows: [
      { label: "Lessons", href: "/grade-" + g + "/lessons/", note: "Worked through on screen" },
      { label: "Worksheets", href: "/grade-" + g + "/worksheets/", note: "Printed and written on" },
    ],
  };
});
SUBJECTS.filter(s => s.live).forEach(s => {
  SHEETS["r-" + s.slug] = {
    title: s.name, parent: "r", all: "/" + s.slug + "/",
    rows: [
      { label: "Lessons", href: "/" + s.slug + "/lessons/", note: "Worked through on screen" },
      { label: "Worksheets", href: "/" + s.slug + "/worksheets/", note: "Printed and written on" },
    ],
  };
});

const drawerSubs = () => Object.keys(SHEETS).map(id => {
  const sh = SHEETS[id];
  const backLabel = sh.parent ? SHEETS[sh.parent].title : "Menu";
  return '<aside class="dsub" data-subpanel="' + id + '" aria-hidden="true">' +
    '<button class="dsub-back" type="button" data-sub-back="' + (sh.parent || "") + '">' +
    "&#8249; " + backLabel + "</button>" +
    "<h3>" + sh.title + "</h3>" +
    '<div class="dsub-body">' + sh.rows.map(row).join("") + "</div>" +
    '<a class="dsub-all" href="' + sh.all + '">Open ' + sh.title.toLowerCase() + " &rarr;</a>" +
    "</aside>";
}).join("\n");

/* The drawer, the scrim and the top bar, in the order they must appear.

   `btn` is the class the button takes. Pages built on ns.css want ".btn";
   lesson pages carry their own design systems and want ".navbtn", styled by
   assets/lesson-nav.css. Same markup either way, so the nav can never drift
   between a lesson and the rest of the site. */
const navMarkup = (active, btn) => {
  const b = btn || "btn";
  return `<div class="scrim" id="scrim"></div>
<aside class="drawer" id="drawer" aria-label="Menu" aria-hidden="true">
  <button class="x" id="drawerClose" aria-label="Close menu">&times;</button>
${drawerLinks(active)}
  <a class="${b}" href="/grades/">Pick a grade</a>
  ${modeButton(true)}
</aside>
${drawerSubs()}

<nav id="nav" class="ns-nav"><div class="nv">
  <button class="burger" id="burger" aria-label="Open menu" aria-expanded="false" aria-controls="drawer">
    <i></i><i></i><i></i>
  </button>
  <a class="word" href="/">Nex<b>Students</b></a>
  <div class="tabs">${tabs(active)}</div>
  ${modeButton()}
  <a class="${b}" href="/grades/">Pick a grade</a>
</div></nav>`;
};

/* Day and night. One button, in the nav and again at the bottom of the drawer,
   because on a phone the nav one is easy to miss. It writes `data-theme` on
   <html>, which is the SAME attribute the lesson pages already read for their
   own palettes, so one toggle moves the whole site including a lesson. */
const modeButton = (inDrawer) => inDrawer
  ? '<button class="modetog" type="button" data-mode-toggle aria-label="Switch between day and night">' +
    '<span data-mode-icon>&#9790;</span><span data-mode-label>Night mode</span></button>'
  : '<button class="modetog" type="button" data-mode-toggle aria-label="Switch between day and night" title="Day or night">' +
    '<span data-mode-icon>&#9790;</span></button>';

/* Runs BEFORE the body paints, so a reader who chose light never sees a flash
   of the dark page first. Inlined in <head> by every generator. */
const modeBoot = () => "<scr" + "ipt>" +
  '(function(){try{var m=localStorage.getItem("ns:mode");' +
  'if(m==="light"||m==="dark")document.documentElement.setAttribute("data-theme",m);}catch(e){}})();' +
  "</scr" + "ipt>";

/* Split so a page can put the script at the end of the body, where it belongs.
   The tag is broken up because this string is embedded in template literals
   that themselves sit inside generated HTML. */
const navScript = () => "<scr" + "ipt>\n" + `
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

/* Day and night. Default is dark: no attribute means dark, which is how the
   site was drawn. The lesson pages watch this same attribute. */
function nsMode(){ return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark"; }
function nsPaintMode(){
  var light = nsMode() === "light";
  document.querySelectorAll("[data-mode-icon]").forEach(function(e){ e.innerHTML = light ? "&#9788;" : "&#9790;"; });
  document.querySelectorAll("[data-mode-label]").forEach(function(e){ e.textContent = light ? "Day mode" : "Night mode"; });
  document.querySelectorAll("[data-mode-toggle]").forEach(function(e){
    e.setAttribute("aria-label", light ? "Switch to night mode" : "Switch to day mode");
  });
}
document.querySelectorAll("[data-mode-toggle]").forEach(function(btn){
  btn.addEventListener("click", function(){
    var next = nsMode() === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("ns:mode", next); } catch (e) {}
    nsPaintMode();
  });
});
nsPaintMode();

/* The drawer second sheets. Opening one covers the drawer; Back and Escape
   close it. The chevron only opens the sheet - the label beside it is still a
   plain link to the section, so nothing is trapped behind a disclosure. */
function nsCloseSubs(){
  document.querySelectorAll("[data-subpanel]").forEach(function(p){
    p.classList.remove("open"); p.setAttribute("aria-hidden", "true");
  });
}
function nsOpenSub(id){
  var p = document.querySelector('[data-subpanel="' + id + '"]');
  if (!p) return;
  nsCloseSubs();
  p.classList.add("open"); p.setAttribute("aria-hidden", "false");
}
document.querySelectorAll("[data-sub]").forEach(function(btn){
  btn.addEventListener("click", function(){ nsOpenSub(btn.getAttribute("data-sub")); });
});
document.querySelectorAll("[data-sub-back]").forEach(function(b){
  b.addEventListener("click", function(){
    var parent = b.getAttribute("data-sub-back");
    nsCloseSubs();
    if (parent) nsOpenSub(parent);   /* step back up the stack, not all the way out */
  });
});
addEventListener("keydown", function(e){ if (e.key === "Escape") nsCloseSubs(); });
scrim.addEventListener("click", nsCloseSubs);

/* A mega panel is a <details>, so it works with a keyboard and with JS off.
   On a pointer device it should open on HOVER, which is the whole point.
   Paul, 2026-08-26: "i wanted it to open after highlighting the nav tabs but
   you have it when i click on it".

   Listening on the NAV rather than on each <details> is what makes that
   reliable: one mouseover handler sees every crossing, including the moment
   the pointer slides from one tab straight onto the next, which per-element
   mouseenter misses often enough to feel broken. */
var megas = [].slice.call(document.querySelectorAll("details.mega"));
function nsCloseMegas(except){ megas.forEach(function(d){ if (d !== except) d.open = false; }); }
if (megas.length){
  var bar = megas[0].closest("nav");
  var fine = matchMedia("(hover:hover)").matches;
  megas.forEach(function(d){
    d.addEventListener("toggle", function(){ if (d.open) nsCloseMegas(d); });
    if (fine) d.querySelector("summary").addEventListener("click", function(e){
      /* the label is a destination, not just a toggle */
      e.preventDefault();
      location.href = d.querySelector(".mg-all a").getAttribute("href");
    });
  });
  /* One class decides which tab is underlined, so there is no specificity
     race between "page you are on" and "tab you are pointing at". The nav is
     tagged js-nav, which is also what tells CSS to stop drawing the .on line
     by itself. Without JS, .on keeps working on its own. */
  if (bar) bar.classList.add("js-nav");
  var onTab = document.querySelector(".mg-top.on");
  function nsMark(el){
    document.querySelectorAll(".mg-top.mg-live").forEach(function(t){ t.classList.remove("mg-live"); });
    if (el) el.classList.add("mg-live");
  }
  nsMark(onTab);
  if (fine && bar){
    bar.addEventListener("mouseover", function(e){
      var d = e.target.closest ? e.target.closest("details.mega") : null;
      var top = e.target.closest ? e.target.closest(".mg-top") : null;
      if (d){ if (!d.open) d.open = true; nsCloseMegas(d); nsMark(d.querySelector(".mg-top")); }
      else if (top){ nsCloseMegas(null); nsMark(top); }
      else { nsCloseMegas(null); nsMark(onTab); }   /* over the bar but not a tab */
    });
    bar.addEventListener("mouseleave", function(){ nsCloseMegas(null); nsMark(onTab); });
  }
}
addEventListener("keydown", function(e){ if (e.key === "Escape") nsCloseMegas(null); });
` + "</scr" + "ipt>";

module.exports = { NAV, SUBJECTS, LIVE_GRADES, MENUS, tabs, drawerLinks, drawerSubs,
                   navMarkup, navScript, modeButton, modeBoot };
