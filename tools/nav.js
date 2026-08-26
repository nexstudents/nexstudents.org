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

const tabs = (active) => NAV
  .filter(n => n.top)
  .map(n => '<a href="' + n.href + '"' + (active === n.key ? ' class="on"' : '') + '>' + n.label + '</a>')
  .join("");

const drawerLinks = (active) => NAV
  .map(n => '  <a href="' + n.href + '"' + (active === n.key ? ' class="on"' : '') +
            '>' + n.label + '<small>' + n.note + '</small></a>')
  .join("\n");

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
` + "</scr" + "ipt>";

module.exports = { NAV, tabs, drawerLinks, navMarkup, navScript, modeButton, modeBoot };
