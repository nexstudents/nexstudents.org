/* ─────────────────────────────────────────────────────────────────────────
   THE SITE NAV — one definition, shared by all four generators
   (build-pages, build-worksheets, build-lessons, build-math).

   ══ THE 2026-08-26 REWRITE ══
   The first version gave every tab its own <details> holding its own panel.
   That is what made it feel broken: moving toward the panel left the element
   controlling it, so the menu vanished before you could reach it, and moving
   between tabs closed one and opened another with a visible jump.

   Watching lttstore with Paul settled the architecture:

     ONE panel, which stays open while you move along the bar. Only its
     CONTENTS change, cross-fading, and its height eases to the new content.
     Nothing closes until you actually leave.

   So: one `.mg-panel` inside the nav holding one `.mg-inner` per section, and
   hovering a tab swaps which inner shows. Closing is on a short TIMER that any
   tab or the panel cancels, because the pointer crosses dead space on the way
   down and a hard mouseleave kills the menu mid-reach.

   On the phone the same data renders as a STACK OF SHEETS. Paul, 2026-08-26:
   "i asked that you use the arrows to open a sub menu in the side menu screen
   but you instead chose to go to a different page entirely." The whole row
   opens the sheet now; the section's own page is a "View …" row INSIDE it,
   which is how lttstore keeps the destination reachable without the label
   stealing the tap.
   ───────────────────────────────────────────────────────────────────────── */
"use strict";

/* `href: null` means the section has no page of its own, so the panel IS the
   destination. Grades is the first: /grades/ was deleted on 2026-08-26 and the
   dropdown replaced it. `fallback` is where a no-JS visitor goes instead.

   `top:false` keeps an entry out of the desktop bar while leaving it in the
   drawer and the footer. */
/* Paul's own PayPal donate button, the same one MyWika uses. Verified in
   Projects/mywika/mywika-app/index.html - not a placeholder. */
const SUPPORT_URL = "https://www.paypal.com/donate/?hosted_button_id=PZ9D8N9KVURDA";

const NAV = [
  { href: "/",             label: "Home",        note: "Start here",          key: "h",  top: true },
  { href: null,            label: "Grades",      note: "K through 8",         key: "gr", top: true,
    fallback: "/#grades" },
  { href: "/resources/",   label: "Resources",   note: "Tools we use",        key: "r",  top: true },
  { href: "/games/",       label: "Games",       note: "Play in the browser", key: "g",  top: true },
  { href: "/comics/",      label: "Comics",      note: "Read on the site",    key: "c",  top: true },
  { href: "/for-parents/", label: "For Parents", note: "Placement exams",     key: "p",  top: true },
  { href: "/about/",       label: "About",       note: "Who makes this",      key: "a",  top: false },
  { href: "/contact/",     label: "Contact",     note: "Get in touch",        key: "ct", top: false },
];

/* ⚠️ SUBJECTS and LIVE_GRADES live here because the NAV needs them on every
   page. build-pages.js imports SUBJECTS and FAILS THE BUILD if its own derived
   live-grade list disagrees with LIVE_GRADES, so the menu can never point at a
   grade with nothing in it. */
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

const LIVE_GRADES = ["3", "6", "7", "8"];
const ALL_GRADES = ["K", "1", "2", "3", "4", "5", "6", "7", "8"];
const gradeName = (g) => (g === "K" ? "Kindergarten" : "Grade " + g);

const gradeTiles = () => ALL_GRADES.map(g => LIVE_GRADES.includes(g)
  ? '<a class="mg-grade live" href="/grade-' + g + '/"><b>' + g + '</b><span>Live</span></a>'
  : '<span class="mg-grade soon"><b>' + g + '</b><span>Soon</span></span>'
).join("");

const col = (heading, links) =>
  '<div class="mg-col"><h4>' + heading + "</h4><ul>" +
  links.map(l => l.href
    ? '<li><a href="' + l.href + '">' + l.label + "</a></li>"
    : '<li><span class="mg-soon">' + l.label + "</span></li>").join("") +
  "</ul></div>";

/* The promo. Caption sits OVER the picture, as on lttstore, so the panel does
   not grow a text row under every image. Only ever points at something real. */
const promo = (p) => p
  ? '<a class="mg-promo" href="' + p.href + '"' +
    (p.ratio ? ' style="--promo-ratio:' + p.ratio + '"' : '') + '>' +
    '<img src="' + p.img + '" alt="' + p.alt + '" decoding="async">' +
    "<b>" + p.label + "</b></a>"
  : "";

/* ── WHAT IS IN EACH PANEL ─────────────────────────────────────────────────
   EVERY top-level section has one. Paul, 2026-08-26: "i also asked for the
   dropdown for all the selections but you only did it for some of them."
   ------------------------------------------------------------------------ */
const MENUS = {
  gr: {
    body: '<div class="mg-grades">' + gradeTiles() + "</div>" +
          '<p class="mg-note">Organised by grade first, then subject. A grade goes live when there is enough in it to be worth your time.</p>',
    promo: { href: "/worksheets/history/us-history-semester-1/",
             img: "/worksheets/history/us-history-semester-1/thumb.jpg",
             alt: "Complete 8th Grade US History, Units 1 to 5 bundle",
             ratio: "1/1", label: "8th Grade US History" },
  },
  r: {
    body: '<div class="mg-cols">' + SUBJECTS.map(s => col(s.name, s.live
      ? [{ label: "Lessons", href: "/" + s.slug + "/lessons/" },
         { label: "Worksheets", href: "/" + s.slug + "/worksheets/" }]
      : [{ label: "Being Built" }])).join("") +
      col("Everything", [
        { label: "All Worksheets", href: "/worksheets/" },
        { label: "What We Use", href: "/resources/" },
      ]) + "</div>",
    promo: { href: "/worksheets/history/lewis-and-clark/",
             img: "/worksheets/history/lewis-and-clark/thumb.jpg",
             alt: "Lewis and Clark, the Corps of Discovery worksheet",
             ratio: "1/1", label: "Free &middot; Lewis and Clark" },
  },
  g: {
    /* The six the home page already lists. None are built, and every one says
       so rather than pretending to be a link. */
    body: '<div class="mg-cols">' +
      col("Maths", [{ label: "Remainder race" }, { label: "Fraction match" }]) +
      col("English", [{ label: "Spelling ladder" }, { label: "Comma catcher" }]) +
      col("History", [{ label: "Place the state" }]) +
      col("Science", [{ label: "Sort the mixture" }]) + "</div>" +
      '<p class="mg-note">None of these are playable yet. They go up as they are built.</p>',
  },
  c: {
    body: '<div class="mg-cols">' +
      col("Donut Boy", [
        { label: "Start at Episode 1", href: "/comics/" },
        { label: "All 8 Episodes", href: "/comics/" },
      ]) +
      col("More strips", [{ label: "Being drawn" }]) + "</div>" +
      '<p class="mg-note">The Adventures of Donut Boy: The Hole Wonder. Read on the site, nothing to download.</p>',
    promo: { href: "/comics/", img: "/assets/comics/donut-boy-cover.jpg",
             alt: "The Adventures of Donut Boy cover",
             ratio: "3/2", label: "Donut Boy &middot; 8 episodes" },
  },
  p: {
    body: '<div class="mg-cols">' +
      col("Placement", [{ label: "Reading Placement Exam", href: "/placement-exam.html" }]) +
      col("Planning", [
        { label: "What We Use", href: "/resources/" },
        { label: "About NexStudents", href: "/about/" },
        { label: "Contact", href: "/contact/" },
      ]) + "</div>",
  },
};

/* ── THE DESKTOP BAR ──────────────────────────────────────────────────────
   A tab that drives a panel keeps an href for the no-JS case, and JS
   suppresses the jump so hovering is the whole interaction.
   ------------------------------------------------------------------------ */
const tabs = (active) => NAV.filter(n => n.top).map(n => {
  const on = active === n.key ? " on" : "";
  const href = n.href || n.fallback;
  if (!MENUS[n.key]) return '<a class="mg-top' + on + '" href="' + href + '">' + n.label + "</a>";
  return '<a class="mg-top' + on + '" href="' + href + '" data-menu="' + n.key +
         '" aria-haspopup="true" aria-expanded="false">' + n.label + "</a>";
}).join("");

/* ONE panel, one inner per section. Only the inner changes. */
const megaPanel = () => '<div class="mg-panel" id="megapanel" aria-hidden="true">' +
  Object.keys(MENUS).map(k => {
    const n = NAV.filter(x => x.key === k)[0];
    return '<div class="mg-inner" data-for="' + k + '">' +
      '<div class="mg-body">' + MENUS[k].body +
      (n.href ? '<p class="mg-all"><a href="' + n.href + '">All ' + n.label.toLowerCase() + " &rarr;</a></p>" : "") +
      "</div>" + promo(MENUS[k].promo) + "</div>";
  }).join("") + "</div>";

/* ── THE PHONE SHEETS ─────────────────────────────────────────────────────
   A stack, not a drawer with a grid stapled on. The row opens the sheet; the
   section's page is a "View …" row inside it.
   ------------------------------------------------------------------------ */
const dsRow = (r) => {
  if (r.soon) return '<span class="dsr soon">' + r.label + "<small>Being built</small></span>";
  if (r.sub) return '<button class="dsr dsr-open" type="button" data-sub="' + r.sub + '">' +
    r.label + (r.note ? "<small>" + r.note + "</small>" : "") + '<i aria-hidden="true">&#8250;</i></button>';
  return '<a class="dsr" href="' + r.href + '">' + r.label +
    (r.note ? "<small>" + r.note + "</small>" : "") + "</a>";
};

const SHEETS = {};

SHEETS.gr = { title: "Grades", parent: null, promo: MENUS.gr.promo, rows:
  ALL_GRADES.map(g => LIVE_GRADES.includes(g)
    ? { label: gradeName(g), sub: "gr-" + g }
    : { label: gradeName(g), soon: true })
};

SHEETS.r = { title: "Resources", parent: null, view: "/resources/", promo: MENUS.r.promo, rows:
  SUBJECTS.map(s => s.live ? { label: s.name, sub: "r-" + s.slug } : { label: s.name, soon: true })
    .concat([{ label: "All Worksheets", href: "/worksheets/", note: "Every Printable" }])
};

SHEETS.g = { title: "Games", parent: null, view: "/games/", rows: [
  { label: "Remainder race", soon: true }, { label: "Fraction match", soon: true },
  { label: "Spelling ladder", soon: true }, { label: "Comma catcher", soon: true },
  { label: "Place the state", soon: true }, { label: "Sort the mixture", soon: true },
]};

SHEETS.c = { title: "Comics", parent: null, view: "/comics/", promo: MENUS.c.promo, rows: [
  { label: "Donut Boy", href: "/comics/", note: "8 episodes" },
  { label: "More Strips", soon: true },
]};

SHEETS.p = { title: "For Parents", parent: null, view: "/for-parents/", rows: [
  { label: "Reading Placement Exam", href: "/placement-exam.html" },
  { label: "What We Use", href: "/resources/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
]};

LIVE_GRADES.forEach(g => {
  SHEETS["gr-" + g] = { title: gradeName(g), parent: "gr", view: "/grade-" + g + "/", rows: [
    { label: "Lessons", href: "/grade-" + g + "/lessons/", note: "Worked through on screen" },
    { label: "Worksheets", href: "/grade-" + g + "/worksheets/", note: "Printed and written on" },
  ]};
});
SUBJECTS.filter(s => s.live).forEach(s => {
  SHEETS["r-" + s.slug] = { title: s.name, parent: "r", view: "/" + s.slug + "/", rows: [
    { label: "Lessons", href: "/" + s.slug + "/lessons/", note: "Worked through on screen" },
    { label: "Worksheets", href: "/" + s.slug + "/worksheets/", note: "Printed and written on" },
  ]};
});

/* A section with a panel is a BUTTON in the drawer, never a link: tapping the
   label must open the sheet, not navigate away. */
const drawerLinks = (active) => NAV.map(n => {
  const on = active === n.key ? " on" : "";
  if (!MENUS[n.key]) {
    return '  <a class="dl' + on + '" href="' + n.href + '">' + n.label +
           "<small>" + n.note + "</small></a>";
  }
  return '  <button class="dl dl-open' + on + '" type="button" data-sub="' + n.key + '">' +
    n.label + "<small>" + n.note + '</small><i aria-hidden="true">&#8250;</i></button>';
}).join("\n");

const drawerSubs = () => '<div class="dsubs" id="dsubs">' + Object.keys(SHEETS).map(id => {
  const sh = SHEETS[id];
  const back = sh.parent ? SHEETS[sh.parent].title : "Menu";
  return '<aside class="dsub" data-subpanel="' + id + '" aria-hidden="true">' +
    '<button class="dsub-back" type="button" data-sub-back="' + (sh.parent || "") + '">&#8249; ' + back + "</button>" +
    "<h3>" + sh.title + "</h3>" +
    '<div class="dsub-body">' +
      (sh.view ? '<a class="dsr view" href="' + sh.view + '">View ' + sh.title + "</a>" : "") +
      sh.rows.map(dsRow).join("") +
    "</div>" +
    (sh.promo ? promo(sh.promo) : "") +
    "</aside>";
}).join("\n") + "</div>";

/* ── MARKUP ─────────────────────────────────────────────────────────────── */
const navMarkup = (active, btn) => {
  const b = btn || "btn";
  return `<div class="scrim" id="scrim"></div>
<aside class="drawer" id="drawer" aria-label="Menu" aria-hidden="true">
  <button class="x" id="drawerClose" aria-label="Close menu">&times;</button>
${drawerLinks(active)}
  <a class="${b}" href="${SUPPORT_URL}" target="_blank" rel="noopener">Support Us</a>
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
  <a class="${b}" href="/#grades">Pick a Grade</a>
</div>
${megaPanel()}
</nav>`;
};

const modeButton = (inDrawer) => inDrawer
  ? '<button class="modetog" type="button" data-mode-toggle aria-label="Switch between day and night">' +
    "<span data-mode-icon>&#9790;</span><span data-mode-label>Night Mode</span></button>"
  : '<button class="modetog" type="button" data-mode-toggle aria-label="Switch between day and night" title="Day or night">' +
    "<span data-mode-icon>&#9790;</span></button>";

/* Runs BEFORE the body paints so a reader who chose light never sees the dark
   page flash first. Inlined in <head> by every generator. */
const modeBoot = () => "<scr" + "ipt>" +
  '(function(){try{var m=localStorage.getItem("ns:mode");' +
  'if(m==="light"||m==="dark")document.documentElement.setAttribute("data-theme",m);}catch(e){}})();' +
  "</scr" + "ipt>";

/* 🚨 WRAPPED IN AN IIFE, and it must stay that way.
   Its top-level names would otherwise land in the global scope and collide
   with whatever the host page already declared. The home page declares its
   own `burger`, and a redeclaration is a PARSE error, so the whole nav script
   silently never ran there: the markup was present, every chevron was dead,
   and nothing showed in the console until it was looked for. Paul,
   2026-08-26: "the sub nav are not opening when i press the right arrows." */
const navScript = () => "<scr" + "ipt>\n" + "(function(){\n" + `
var burger=document.getElementById("burger"),drawer=document.getElementById("drawer"),
    scrim=document.getElementById("scrim"),dClose=document.getElementById("drawerClose");
function setNav(o){document.body.classList.toggle("nav-open",o);
  burger.setAttribute("aria-expanded",o);drawer.setAttribute("aria-hidden",!o);
  document.body.style.overflow=o?"hidden":"";
  if(!o) nsCloseSubs();}
burger.onclick=function(){setNav(!document.body.classList.contains("nav-open"));};
scrim.onclick=dClose.onclick=function(){setNav(false);};
var nav=document.getElementById("nav");
addEventListener("scroll",function(){nav.classList.toggle("stuck",scrollY>16);},{passive:true});

/* ── day and night ── */
function nsMode(){ return document.documentElement.getAttribute("data-theme")==="light"?"light":"dark"; }
function nsPaintMode(){
  var light=nsMode()==="light";
  document.querySelectorAll("[data-mode-icon]").forEach(function(e){ e.innerHTML=light?"&#9788;":"&#9790;"; });
  document.querySelectorAll("[data-mode-label]").forEach(function(e){ e.textContent=light?"Day Mode":"Night Mode"; });
  document.querySelectorAll("[data-mode-toggle]").forEach(function(e){
    e.setAttribute("aria-label", light?"Switch to night mode":"Switch to day mode"); });
}
document.querySelectorAll("[data-mode-toggle]").forEach(function(btn){
  btn.addEventListener("click",function(){
    var next=nsMode()==="light"?"dark":"light";
    document.documentElement.setAttribute("data-theme",next);
    try{localStorage.setItem("ns:mode",next);}catch(e){}
    nsPaintMode();
  });
});
nsPaintMode();

/* ── phone sheets ── */
function nsCloseSubs(){
  document.querySelectorAll("[data-subpanel]").forEach(function(p){
    p.classList.remove("open"); p.setAttribute("aria-hidden","true"); });
}
function nsOpenSub(id){
  var p=document.querySelector('[data-subpanel="'+id+'"]');
  if(!p) return;
  nsCloseSubs();
  p.classList.add("open"); p.setAttribute("aria-hidden","false");
}
document.querySelectorAll("[data-sub]").forEach(function(b){
  b.addEventListener("click",function(){ nsOpenSub(b.getAttribute("data-sub")); });
});
document.querySelectorAll("[data-sub-back]").forEach(function(b){
  b.addEventListener("click",function(){
    var parent=b.getAttribute("data-sub-back");
    nsCloseSubs();
    if(parent) nsOpenSub(parent);   /* step up one level, not all the way out */
  });
});

/* ── ONE mega panel ──────────────────────────────────────────────────────
   Stays open while the pointer moves along the bar; only the contents
   cross-fade and the height eases. Closing is on a timer that any tab or the
   panel cancels, because the pointer crosses dead space on the way down and a
   hard mouseleave kills the menu mid-reach. */
var panel=document.getElementById("megapanel");
var tabEls=[].slice.call(document.querySelectorAll(".mg-top[data-menu]"));
var onTab=document.querySelector(".mg-top.on");
var closeTimer=null,current=null;

function nsMark(el){
  document.querySelectorAll(".mg-top.mg-live").forEach(function(t){ t.classList.remove("mg-live"); });
  if(el) el.classList.add("mg-live");
}
/* ONE height for every section, measured from the tallest.
   Paul, 2026-08-26: "the dropdown for games is shorter in height than the
   rest and its noticable." Animating height per section also meant the first
   hover measured BEFORE the promo image had loaded and the panel jumped a
   moment later - the glitch that cleared itself on reload. A fixed height
   removes both: nothing resizes, so nothing can resize wrongly. */
var panelH=0;
function nsMeasure(){
  if(!panel) return;
  var was=panel.className;
  panel.classList.add("measuring");
  var max=0;
  panel.querySelectorAll(".mg-inner").forEach(function(i){ max=Math.max(max,i.offsetHeight); });
  panel.className=was;
  if(max>0){ panelH=max; if(panel.classList.contains("open")) panel.style.height=panelH+"px"; }
}
function nsShow(key){
  if(!panel) return;
  clearTimeout(closeTimer);
  var inner=panel.querySelector('[data-for="'+key+'"]');
  if(!inner) return;
  if(!panelH) nsMeasure();
  panel.classList.add("open");
  panel.setAttribute("aria-hidden","false");
  panel.style.height=panelH+"px";
  if(current!==key){
    current=key;
    panel.querySelectorAll(".mg-inner").forEach(function(i){ i.classList.toggle("on", i===inner); });
    tabEls.forEach(function(t){ t.setAttribute("aria-expanded", String(t.getAttribute("data-menu")===key)); });
    nsMark(document.querySelector('.mg-top[data-menu="'+key+'"]'));
  }
}
function nsHide(){
  if(!panel) return;
  current=null;
  panel.classList.remove("open");
  panel.setAttribute("aria-hidden","true");
  panel.style.height="";
  panel.querySelectorAll(".mg-inner").forEach(function(i){ i.classList.remove("on"); });
  tabEls.forEach(function(t){ t.setAttribute("aria-expanded","false"); });
  nsMark(onTab);
}
function nsLater(){ clearTimeout(closeTimer); closeTimer=setTimeout(nsHide,220); }
function nsKeep(){ clearTimeout(closeTimer); }

if(panel){
  nav.classList.add("js-nav");
  nsMark(onTab);
  if(matchMedia("(hover:hover)").matches){
    tabEls.forEach(function(t){
      t.addEventListener("mouseenter",function(){ nsShow(t.getAttribute("data-menu")); });
      t.addEventListener("focus",function(){ nsShow(t.getAttribute("data-menu")); });
      /* the label drives the panel; it is not a click-through */
      t.addEventListener("click",function(e){ e.preventDefault(); });
    });
    var tabsBox=document.querySelector(".tabs");
    if(tabsBox){ tabsBox.addEventListener("mouseenter",nsKeep); tabsBox.addEventListener("mouseleave",nsLater); }
    panel.addEventListener("mouseenter",nsKeep);
    panel.addEventListener("mouseleave",nsLater);
    addEventListener("keydown",function(e){ if(e.key==="Escape") nsHide(); });
    addEventListener("resize",function(){ panelH=0; nsMeasure(); });
    /* the promo images decide the height, so re-measure as each one lands */
    panel.querySelectorAll("img").forEach(function(im){
      if(!im.complete) im.addEventListener("load",function(){ panelH=0; nsMeasure(); });
    });
    addEventListener("load",function(){ panelH=0; nsMeasure(); });
  }
}
` + "\n})();\n" + "</scr" + "ipt>";

module.exports = { NAV, SUBJECTS, LIVE_GRADES, MENUS, SHEETS, tabs, drawerLinks, drawerSubs,
                   megaPanel, navMarkup, navScript, modeButton, modeBoot };
