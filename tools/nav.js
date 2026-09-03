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
  /* ⭐ EXTRAS, added 2026-09-03. Paul: "I am considering making an Extras page
     for many things like coding, reading, even electives we can offer possibly
     in the future." It holds the reading log today and is the home for anything
     that is not one of the four subjects.
     🚨 THIS IS A SEVENTH DRAWER ROW AND THE DRAWER MUST NOT SCROLL. See the
     note below: About and Contact were REMOVED to get it down to six, and at
     360x640 six was clearing by only 20px. Measured after adding this one. */
  { href: "/extras/",      label: "Extras",      note: "Reading log and more", key: "x",  top: true },
  /* ⚠️ ABOUT AND CONTACT ARE NOT HERE EITHER, 2026-09-02. Paul: "you can also
     probably remove about AND CONTACT MAYBE" - and the measurement agreed. The
     drawer must not scroll, and with these two it was 633px inside a 560px
     phone and 636 inside a 600. Without them it fits every size tested.
     At 360x640 it had been clearing by 20px, which is not clearance, it is
     luck: one more row, or a slightly taller Support button, and it scrolls.
     ⚠️ Both pages are still in the footer - Contact under Help, About under
     Company - and both are still built and in the sitemap. The drawer is the
     list of PLACES TO GO; the footer is where you look something up. */
  /* ⚠️ THE THREE LEGAL PAGES ARE NOT IN THIS LIST, 2026-09-02. Paul: "i dont
     think you need to add refund policy, terms, and privacy in the side menu."
     They were here when the footer had no links at all, so the drawer was the
     only place they existed. The footer carries them now, under Help, which is
     where a person looks for a policy - so listing them again in the menu just
     pads a list of destinations with three pages nobody browses to.
     ⚠️ /terms/, /privacy/ and /refund/ are still BUILT, still in the sitemap
     and still linked from the footer and from each other. Removing a nav entry
     must never mean removing the page. */
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
  /* Live from 2026-08-30, when the first science worksheet shipped (Newton's
     Three Laws of Motion, grade 8). Every grade had a science worksheets page
     built, linked and empty since 2026-08-29, so the shelf was promising
     something that did not exist. It does now.
     ⚠️ This blurb claims a creation lens and the first sheet on the shelf is
     worldview-neutral physics. That is Paul's copy to keep or change - see
     ROADMAP item 18, which is still open. */
  { name: "Science", slug: "science", live: true,
    blurb: "Experiments you can run at home, taught through a creation lens, with video walkthroughs and record sheets." },
];

/* 4 and 5 joined the list on 2026-08-29, when the lessons were re-shelved by
   the level of the skill rather than the age of the student reading them:
   verbs to 3-4, long division to 4-5, Rome to 6-7. */
/* ⚠️ 5 came OFF on 2026-08-30. Long division was the only thing on it, and it
   was there as a duplicate of the grade 4 lesson. Paul, same day: one grade
   per item. Grade 5 gets its own shelf back the moment it has content of its
   own - a real grade 5 lesson, not a grade 4 one relisted. Showing an empty
   grade is worse than not showing it. */
const LIVE_GRADES = ["K", "3", "4", "6", "7", "8"];
const ALL_GRADES = ["K", "1", "2", "3", "4", "5", "6", "7", "8"];
const gradeName = (g) => (g === "K" ? "Kindergarten" : "Grade " + g);

/* A grade's URL is its label lowercased: "K" lives at /grade-k/. */
const gslug = (g) => String(g).toLowerCase();

/* 🚨 EVERY GRADE IS TAPPABLE. Paul, 2026-08-29: "why is 1, 2, 4, and 5 not
   tappable on the homepage? i want this the entire site."

   Every grade x subject shelf is now built, so all nine tiles are real links.
   The Live / Soon badge still tells the truth about what is IN a year — a
   parent can see at a glance where the depth is — but nothing on this site is
   a dead tile any more. Nothing in ALL_GRADES may be unlinked. */
/* No Soon badge and no dimming here either — the dropdown and the home page
   picker have to agree, and both tiles go to a real page. */
/* Every grade reads Live here too, so the dropdown and the home picker match.
   Paul, 2026-08-29. */
const gradeTiles = () => ALL_GRADES.map(g =>
  '<a class="mg-grade live" href="/grade-' + gslug(g) + '/"><b>' + g +
  "</b><span>Live</span></a>"
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
    /* Extras only. Lessons and printables live under Grades - see the note at
       the top of tools/fix-resources-menu.js. */
    body: '<div class="mg-cols">' +
      col("What We Use", [
        { label: "Books and Readers", href: "/resources/books-and-readers/" },
        { label: "Tools and Supplies", href: "/resources/tools-and-supplies/" },
      ]) +
      col("Extras", [
        { label: "Science Experiments", href: "/resources/science-experiments/" },
        { label: "Reading Lists", href: "/resources/reading-lists/" },
      ]) +
      col("Writing", [
        { label: "Blog", href: "/blog/" },
        { label: "Placement Tests", href: "/resources/placement-tests/" },
      ]) + "</div>" +
      '<p class="mg-note">Things we actually use, not a list copied off somebody else&rsquo;s blog. Any affiliate link is marked as one. Lessons and printables are not here &mdash; they live under each grade.</p>',
    promo: { href: "/worksheets/history/lewis-and-clark/",
             img: "/worksheets/history/lewis-and-clark/thumb.jpg",
             alt: "Lewis and Clark, the Corps of Discovery worksheet",
             ratio: "1/1", label: "Free &middot; Lewis and Clark" },
  },
  g: {
    /* Every game has a page. Two are playable; the other five open a page that
       says what the game will be and what it is for, rather than a dead label.
       Paul, 2026-08-29: "i want this the entire site." */
    body: '<div class="mg-cols">' +
      col("Maths", [{ label: "Speed Run Math", href: "/games/speed-run-math/" },
               { label: "Remainder Race", href: "/games/remainder-race/" },
               { label: "Fraction Match", href: "/games/fraction-match/" }]) +
      col("English", [{ label: "Spelling Ladder", href: "/games/spelling-ladder/" },
               { label: "Comma Catcher", href: "/games/comma-catcher/" }]) +
      col("History", [{ label: "Show Me The States", href: "/games/show-me-the-states/" }]) +
      col("Science", [{ label: "Sort the Mixture", href: "/games/sort-the-mixture/" }]) + "</div>" +
      '<p class="mg-note">Two are playable now. The rest have a page saying what they will be.</p>',
  },
  c: {
    body: '<div class="mg-cols">' +
      col("Donut Boy", [
        { label: "Start at Episode 1", href: "/comics/" },
        { label: "All 8 Episodes", href: "/comics/" },
      ]) +
      col("More strips", [{ label: "What Is Coming", href: "/comics/more-strips/" }]) + "</div>" +
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
/* Same rule as dsTile: a row with an href is a link, whatever its badge says. */
const dsRow = (r) => {
  if (!r.href && !r.sub) return '<span class="dsr soon">' + r.label + "<small>Being built</small></span>";
  if (r.sub) return '<button class="dsr dsr-open" type="button" data-sub="' + r.sub + '">' +
    r.label + (r.note ? "<small>" + r.note + "</small>" : "") + '<i aria-hidden="true">&#8250;</i></button>';
  return '<a class="dsr" href="' + r.href + '">' + r.label +
    (r.note ? "<small>" + r.note + "</small>" : "") + "</a>";
};

/* A tile is a LINK when it has an href and a sub-sheet button when it has a
   sub. It only knew how to be a button, so pointing the grades straight at
   their pages produced data-sub="undefined" on every tile - caught by the
   build-worksheets guard that fails on the word undefined in a page. */
/* 🚨 href WINS OVER soon. `soon` is a BADGE describing how much is in there,
   not a decision about whether you can go. It used to be tested first, which
   silently swallowed the href on every grade tile and left them as dead
   spans — the phone half of what Paul found on the home page 2026-08-29:
   "why is 1, 2, 4, and 5 not tappable ... i want this the entire site." */
const dsTile = (r) => r.href
  ? '<a class="dst" href="' + r.href +
    '" aria-label="' + r.label + '"><b>' + r.short + "</b></a>"
  : r.sub
  ? '<button class="dst" type="button" data-sub="' + r.sub + '" aria-label="' +
    r.label + '"><b>' + r.short + "</b></button>"
  : '<span class="dst soon"><b>' + r.short + "</b></span>";

const SHEETS = {};

/* grid:true renders these as tiles, not rows. Nine full-width rows did not
   fit a phone and the panel grew a scrollbar, which then slid along with the
   panel and broke the hand-off. Paul, 2026-08-27. */
/* 🚨 A GRADE GOES STRAIGHT TO ITS PAGE. Paul, 2026-08-27: "you are creating a
   side tab that isnt needed after you select grades ... you select the grade and
   it directs you to the page for all the subjects with both lessons and
   worksheets."

   It used to open a SECOND sheet listing that grade shelves, which is a step
   that answers nothing - the year page already lists every subject with its
   lessons and its worksheets, and it does it better than a menu can. The tile
   is a link now, exactly as it already was on desktop, so the two behave the
   same and the menu stops competing with the page it leads to. */
/* Every grade is a link on the phone too. Same rule as gradeTiles: the badge
   reports depth, the tile always opens. */
SHEETS.gr = { title: "Grades", parent: null, grid: true, promo: MENUS.gr.promo, rows:
  ALL_GRADES.map(g => ({
    label: gradeName(g), short: g,
    href: "/grade-" + gslug(g) + "/",
    soon: !LIVE_GRADES.includes(g),
  }))
};

SHEETS.r = { title: "Resources", parent: null, view: "/resources/", promo: MENUS.r.promo, rows: [
  { label: "What We Use", href: "/resources/", note: "Books, tools and supplies" },
  { label: "Books and Readers", href: "/resources/books-and-readers/", note: "What he actually reads" },
  { label: "Tools and Supplies", href: "/resources/tools-and-supplies/", note: "Paper, pencils, the desk" },
  { label: "Science Experiments", href: "/resources/science-experiments/", note: "Run them at home" },
  { label: "Reading Lists", href: "/resources/reading-lists/", note: "By grade" },
  { label: "Blog", href: "/blog/", note: "How we teach it" },
  { label: "Placement Tests", href: "/resources/placement-tests/", note: "Free, and not ours" },
]};

SHEETS.g = { title: "Games", parent: null, view: "/games/", rows: [
  { label: "Speed Run Math", href: "/games/speed-run-math/", note: "Multiplication, timed" },
  { label: "Remainder Race", href: "/games/remainder-race/", note: "Being built" },
  { label: "Fraction Match", href: "/games/fraction-match/", note: "Being built" },
  { label: "Spelling Ladder", href: "/games/spelling-ladder/", note: "Being built" },
  { label: "Comma Catcher", href: "/games/comma-catcher/", note: "Being built" },
  { label: "Show Me The States", href: "/games/show-me-the-states/", note: "Fifty states and capitals" },
  { label: "Sort the Mixture", href: "/games/sort-the-mixture/", note: "Being built" },
]};

SHEETS.c = { title: "Comics", parent: null, view: "/comics/", promo: MENUS.c.promo, rows: [
  { label: "Donut Boy", href: "/comics/", note: "8 episodes" },
  { label: "More Strips", href: "/comics/more-strips/", note: "What is coming" },
]};

SHEETS.p = { title: "For Parents", parent: null, view: "/for-parents/", rows: [
  { label: "Reading Placement Exam", href: "/placement-exam.html" },
  { label: "What We Use", href: "/resources/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
]};


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
      (sh.grid
        ? '<div class="dst-grid">' + sh.rows.map(dsTile).join("") + "</div>"
        : sh.rows.map(dsRow).join("")) +
    "</div>" +
    (sh.promo ? promo(sh.promo) : "") +
    "</aside>";
}).join("\n") + "</div>";

/* ── MARKUP ─────────────────────────────────────────────────────────────── */
const navMarkup = (active, btn) => {
  const b = btn || "btn";
  /* 🚨 The drawer AND every sheet live in ONE clipped column.
     Paul, 2026-08-27: "it feels like the previous menu is moving away to the
     right and the new menu moves in ... you seem to be layering one over the
     other." He was right. Sliding a new sheet OVER a stationary drawer reads
     as a stack; the levels have to move together, and both have to be masked
     by the same column or the motion spills onto the page. */
  return `<div class="scrim" id="scrim"></div>
<div class="menucol" id="menucol">
<aside class="drawer" id="drawer" aria-label="Menu" aria-hidden="true">
  <button class="x" id="drawerClose" aria-label="Close menu">&times;</button>
${drawerLinks(active)}
  <a class="${b}" href="${SUPPORT_URL}" target="_blank" rel="noopener">Support Us</a>
  ${modeSwitch("mswitch-drawer")}
</aside>
${drawerSubs()}
</div>

<nav id="nav" class="ns-nav"><div class="nv">
  <!-- 🚨 BURGER AND HOME SHARE ONE GRID CELL.
       On mobile .nv is a THREE column grid - 1fr auto 1fr - so the logo sits
       dead centre. Adding the home icon as a fourth grid item pushed the
       logo, account and cart onto a second row. Paul saw it immediately:
       "well you moved all the logo cart and login".
       Wrapping both controls in .navleft keeps the grid at three items, so
       the logo stays centred and the icon still sits beside the burger. -->
  <div class="navleft">
    <button class="burger" id="burger" aria-label="Open menu" aria-expanded="false" aria-controls="drawer">
      <i></i><i></i><i></i>
    </button>
    <!-- 🚨 HOME IS AN ICON IN THE HEADER, NOT A BREADCRUMB CRUTCH.
         Paul, 2026-09-02: "i dont even like how that is even an option on that
         home name being the home button. can we just add a home icon on the
         header next to the hamburger?" and "we dont need Home> Terms of Use".
         A breadcrumb whose only rung is Home is not navigation, it is a link
         wearing a costume. The icon is always there, on every page, in the same
         place - which is what a reader actually wants from a way home.
         ⚠️ The wordmark also links home; that is deliberate redundancy, not a
         duplicate to clean up. The icon is a target, the wordmark is a brand. -->
    <a class="homeb" href="/" aria-label="Home" title="Home">
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5.5 9.5V20h13V9.5"/></svg>
    </a>
  </div>
  <a class="word" href="/"><img src="/assets/brand/logo.png" alt="" width="512" height="512" decoding="async"><span class="wordtext">Nex<b>Students</b></span></a>
  <div class="tabs">${tabs(active)}</div>
  ${/* Sign in and cart sit where "Pick a Grade" used to. Paul, 2026-08-29.
       The button was redundant anyway: Grades is a nav tab with its own mega
       panel holding all nine years, so the page already had two doors to the
       same room and none to an account. */""}
  ${navIcons()}
</div>
${megaPanel()}
</nav>`;
};

/* Favicon set. One source image, three sizes, so a browser tab, an Android
   home screen and an iOS bookmark each get something sharp instead of a
   1500px PNG scaled down on the fly. */
const faviconTags = () =>
  '<link rel="icon" href="/assets/brand/logo-32.png" sizes="32x32" type="image/png">\n' +
  '<link rel="icon" href="/assets/brand/logo.png" sizes="512x512" type="image/png">\n' +
  '<link rel="apple-touch-icon" href="/assets/brand/logo-180.png">';

/* 🚨 SIGN IN AND CART, and they are LINKS. Paul, 2026-08-29: "remove pick a
   grade from the homepage and put in that spot the login and shopping cart."

   They used to be aria-disabled buttons that did nothing. Neither the accounts
   backend nor the cart exists yet (ROADMAP items 6 and 7), so each one opens a
   page that says plainly where it stands and what it will do, rather than
   being a control that visibly ignores you. A dead button is worse than an
   honest page — that is the same rule that put a page behind every game. */
const navIcons = () =>
  '<div class="navicons">' +
  '<a class="navicon" href="/account/" aria-label="Sign in" title="Sign in">' +
  '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" ' +
  'stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
  '<circle cx="12" cy="8" r="3.6"/><path d="M4.5 20a7.5 7.5 0 0 1 15 0"/></svg></a>' +
  '<a class="navicon" href="/cart/" aria-label="Cart" title="Cart">' +
  '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" ' +
  'stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
  '<path d="M3 4h2.2l2 11h9.9l2-8H6.4"/><circle cx="9.5" cy="19" r="1.4"/>' +
  '<circle cx="17" cy="19" r="1.4"/></svg></a>' +
  "</div>";

/* ── THE DAY/NIGHT SWITCH, ONE DEFINITION, TWO PLACES ──────────────────────
   The slim slider modelled on lttstore's. It lives at the BOTTOM OF THE DRAWER
   and in the FOOTER. Paul, 2026-09-02: "i like that better now and you can
   remove the old one and add it to the bottom of the side menu."

   ⚠️ THE ROUND MOON BUTTON IN THE NAV BAR IS GONE, on purpose. It was a
   third-of-a-second decision sitting in the most valuable strip on the page,
   next to Sign in and the cart. The setting is not something a reader changes
   often, so it belongs where the other settings-shaped things are.
   ⚠️ modeButton() and the .modetog styles went with it. Do not reintroduce a
   second control shape for one setting.

   🚨 EVERY COPY CARRIES data-mode-toggle AND NOTHING ELSE. navScript's single
   listener drives all of them, so the drawer and the footer cannot disagree.
   No per-control handler, no second storage key. */
const modeSwitch = (extra) => '<button class="mswitch' + (extra ? " " + extra : "") +
  '" type="button" data-mode-toggle aria-label="Switch between day and night">' +
  '<span class="mswitch-track"><span class="mswitch-knob"></span></span>' +
  "<span data-mode-label>Night Mode</span></button>";

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

/* ── phone sheets: a STACK, not a pile ───────────────────────────────────
   Levels move together. Opening a child slides the level above it out to the
   left while the child comes in from the right; Back reverses it. A stack of
   ids is the whole state, so any depth unwinds correctly. */
var subStack=[];
function nsRender(){
  document.querySelectorAll("[data-subpanel]").forEach(function(p){
    var id=p.getAttribute("data-subpanel");
    var i=subStack.indexOf(id);
    p.classList.toggle("open", i>=0);
    /* every level except the top one has moved off to the left */
    p.classList.toggle("exit", i>=0 && i<subStack.length-1);
    p.setAttribute("aria-hidden", i>=0 ? "false" : "true");
  });
  /* the drawer is level zero, so it leaves the moment any sheet is up */
  document.body.classList.toggle("sub-open", subStack.length>0);
}
function nsOpenSub(id){
  var p=document.querySelector('[data-subpanel="'+id+'"]');
  if(!p) return;
  var back=p.querySelector("[data-sub-back]");
  var parent=back?back.getAttribute("data-sub-back"):"";
  var at=parent?subStack.indexOf(parent):-1;
  subStack = parent && at>=0 ? subStack.slice(0,at+1) : (parent?[parent]:[]);
  subStack.push(id);
  nsRender();
}
function nsCloseSubs(){ subStack=[]; nsRender(); }
function nsBack(){ subStack.pop(); nsRender(); }
document.querySelectorAll("[data-sub]").forEach(function(b){
  b.addEventListener("click",function(){ nsOpenSub(b.getAttribute("data-sub")); });
});
document.querySelectorAll("[data-sub-back]").forEach(function(b){
  b.addEventListener("click", nsBack);
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

/* ── THE FOOTER, ONE DEFINITION ────────────────────────────────────────────
   🚨 THERE USED TO BE TWO FOOTERS AND NEITHER WAS RIGHT. The home page had a
   hand-written four-column footer; every generated page had a bare copyright
   line and nothing else. So Terms, Privacy and Refund were reachable only from
   the drawer, and Paul went looking for them exactly where a person looks for
   a policy - the footer - and found nothing. "i dont see any of these option
   on the main homepage in the dropdown or the footer", 2026-09-02.

   ⚠️ THIS IS THE SAME DRIFT THE NAV ALREADY TAUGHT US. The top nav and the
   drawer were once separate and silently disagreed; that is why NAV lives here
   and both generators read it. The footer was the last hand-kept copy on the
   home page, and it went stale the same way. It is generated now. Do not
   hand-edit a footer in a built page or in index.html - the next build wipes
   it, and if it does not, the two have already drifted.

   STRUCTURE IS LTTSTORE'S, the reference Paul named for the legal pages and
   then for this: https://www.lttstore.com/. Their footer is three link columns
   under a brand block, and the policies live INSIDE Customer Service rather
   than in a small legal strip at the very bottom. Help is our version of that
   column. The technique, not their content.

   ⚠️ THE AMAZON DISCLOSURE MOVES WITH THIS FOOTER, so it now appears on every
   page rather than on the home page alone. That is the correct direction: the
   affiliate links are on /resources/, not on the home page, and the Refund
   Policy now has a section pointing at them. */
const FOOTER_COLS = [
  { title: "Help", links: [
    { label: "Contact", href: "/contact/" },
    { label: "Terms of Use", href: "/terms/" },
    { label: "Privacy Policy", href: "/privacy/" },
    { label: "Refund Policy", href: "/refund/" },
  ]},
  { title: "Resources", links: [
    { label: "What we use", href: "/resources/" },
    { label: "Worksheets", href: "/worksheets/" },
    { label: "Games", href: "/games/" },
    { label: "Comics", href: "/comics/" },
  ]},
  /* ⚠️ "Studios" until 2026-09-02, and only because that was the heading on the
     old hand-written home footer. Paul: "why did we call it studios". It was
     standing in for "NexEdge Studios, the company behind this", which is not
     something one word conveys - and it read like a section about a studio.
     Company is what lttstore calls the same column, and it is plain. */
  { title: "Company", links: [
    { label: "About", href: "/about/" },
    { label: "For parents", href: "/for-parents/" },
    { label: "Placement exams", href: "/placement-exam.html" },
    { label: "NexEdge Studios", href: "https://nexedgestudios.com/" },
  ]},
];

/* ⚠️ NO SUBJECTS COLUMN, and it is not an oversight. Paul, 2026-09-02:
   "thats too much." Every subject already has a mega-menu panel and a row in
   the Grades sheets, so a fourth column repeated links the reader passes on
   the way down the page. The footer exists for the things that live NOWHERE
   else - the policies, the company, the help - which is how lttstore's is
   built too. Adding it back means adding a fifth column; do not. */

const footerMarkup = () => `<footer><div class="wrap">
  <div class="fgrid">
    <div>
      <div class="word" style="margin-bottom:12px">Nex<b>Students</b></div>
      <p class="disc">Free printable homeschool resources for K-8. A brand of NexEdge Studios.</p>
    </div>
${FOOTER_COLS.map(c => '    <details class="fcol" open><summary><h5>' + c.title + "</h5></summary><ul>\n" +
    c.links.map(l => '      <li><a href="' + l.href + '">' + l.label + "</a></li>").join("\n") +
    "\n    </ul></details>").join("\n")}
  </div>
  <div class="fbot">
    ${/* 🚨 A THIRD CONTROL, NOT A THIRD MECHANISM. It carries data-mode-toggle,
         so navScript's existing listener picks it up with no new code, writes
         ns:mode and repaints every control at once. The nav button and the
         drawer row stay in step with it for free.
         ⚠️ Do NOT give this its own click handler or its own storage key. Two
         sources of truth for one setting is how a theme toggle starts
         disagreeing with itself between the header and the footer.
         Paul, 2026-09-02, on lttstore: "there is an icon at the bottom for
         darkmode thet have that looks like a very slim slider." Theirs
         measures 40x13 with a ~9px knob; so does this. */""}
    <button class="mswitch" type="button" data-mode-toggle aria-label="Switch between day and night">
      <span class="mswitch-track"><span class="mswitch-knob"></span></span>
      <span data-mode-label>Night Mode</span>
    </button>
    <span>&copy; 2026 NexEdge Studios</span>
    ${/* ⚠️ ONE LINE, not the old three-line paragraph. The disclosure has to be
         present and plain - it is an FTC requirement and it is on every page
         now - but it was taking more room than the links it sat under. The
         long version moved to /resources/, where the affiliate links actually
         are, and to the Refund Policy. Never delete this line to save space. */""}
    <span class="disc">As an Amazon Associate we earn from qualifying purchases.</span>
  </div>
</div>
${/* 🚨 THE COLUMNS COLLAPSE ON A PHONE, and the open state is set HERE rather
     than in CSS, because a <details> cannot be forced open with CSS. The UA
     hides everything but the summary through a mechanism display cannot
     override, so "always open above 820px" has to be the open ATTRIBUTE.

     ⚠️ THEY SHIP OPEN. With JS off, or before this runs, the footer is exactly
     what it was: three visible lists. Closing is the enhancement, never the
     default - a link that needs a script to become reachable is not a link.

     ⚠️ ONE LISTENER, and it only ever writes when the state actually changes,
     so dragging a desktop window across the breakpoint cannot fight a reader
     who has opened a column by hand. Paul, 2026-09-02, on lttstore: "they
     actually have arrow dropdowns to compact it on the f12 screen for mobile."
     Technique theirs, markup ours. */""}
<script>(function(){
  var cols = document.querySelectorAll("footer .fcol");
  if (!cols.length || !window.matchMedia) return;
  var mq = matchMedia("(max-width: 820px)"), was = null;
  function sync(){
    var small = mq.matches;
    if (small === was) return;
    was = small;
    for (var i = 0; i < cols.length; i++) cols[i].open = !small;
  }
  sync();
  if (mq.addEventListener) mq.addEventListener("change", sync);
  else mq.addListener(sync);
})();</scr` + `ipt>
</footer>`;

module.exports = { NAV, SUBJECTS, LIVE_GRADES, ALL_GRADES, MENUS, SHEETS, tabs, drawerLinks, drawerSubs, faviconTags,
                   megaPanel, navMarkup, navScript, modeSwitch, modeBoot, footerMarkup, FOOTER_COLS };
