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

const NAV = [
  { href: "/grades/",      label: "Grades",      note: "K through 8",         key: "gr" },
  { href: "/worksheets/",  label: "Worksheets",  note: "Free and packets",    key: "w"  },
  { href: "/games/",       label: "Games",       note: "Play in the browser", key: "g"  },
  { href: "/comics/",      label: "Comics",      note: "Read on the site",    key: "c"  },
  { href: "/for-parents/", label: "For Parents", note: "Placement exams",     key: "p"  },
];

const tabs = (active) => NAV
  .map(n => '<a href="' + n.href + '"' + (active === n.key ? ' class="on"' : '') + '>' + n.label + '</a>')
  .join("");

const drawerLinks = (active) => NAV
  .map(n => '  <a href="' + n.href + '"' + (active === n.key ? ' class="on"' : '') +
            '>' + n.label + '<small>' + n.note + '</small></a>')
  .join("\n");

/* The drawer, the scrim and the top bar, in the order they must appear. */
const navMarkup = (active) => `<div class="scrim" id="scrim"></div>
<aside class="drawer" id="drawer" aria-label="Menu" aria-hidden="true">
  <button class="x" id="drawerClose" aria-label="Close menu">&times;</button>
  <a href="/">Home</a>
${drawerLinks(active)}
  <a class="btn" href="/grades/">Pick a grade</a>
</aside>

<nav id="nav"><div class="nv">
  <button class="burger" id="burger" aria-label="Open menu" aria-expanded="false" aria-controls="drawer">
    <i></i><i></i><i></i>
  </button>
  <a class="word" href="/">Nex<b>Students</b></a>
  <div class="tabs">${tabs(active)}</div>
  <a class="btn" href="/grades/">Pick a grade</a>
</div></nav>`;

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
` + "</scr" + "ipt>";

module.exports = { NAV, tabs, drawerLinks, navMarkup, navScript };
