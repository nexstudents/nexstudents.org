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
  /* 🚨 THE OLD BLURB WAS REMOVED BY PAUL, 2026-09-03: "American and Biblical history taught
     properly rather than skipped over ... i would remove this because this is a bold claim."
     It was also inaccurate - the lessons are Rome to the Reformation, the American material
     is worksheets, and no Biblical history strand is built. Same wording was on /history/. */
  { name: "History", slug: "history", live: true,
    blurb: "Rome to the Reformation on screen, with American history on the worksheet shelf." },
  { name: "Math", slug: "maths", live: true,
    blurb: "Practice that teaches, without punishing a student for getting things wrong." },
  /* Live from 2026-08-30, when the first science worksheet shipped (Newton's
     Three Laws of Motion, grade 8). Every grade had a science worksheets page
     built, linked and empty since 2026-08-29, so the shelf was promising
     something that did not exist. It does now.
     ⚠️ This blurb claims a creation lens and the first sheet on the shelf is
     worldview-neutral physics. That is Paul's copy to keep or change - see
     ROADMAP item 18, which is still open. */
  /* 🚨 THIS PROMISED THREE THINGS THAT DO NOT EXIST - experiments to run at home, video
     walkthroughs, and record sheets. None are built. Rewritten 2026-09-03 in the same pass
     as the history blurb, after Paul: "i would remove this because this is a bold claim ...
     check other ones too." A blurb that promises features is a worse overclaim than one that
     takes a stance, because a parent can click through and find nothing.
     ⚠️ The creation lens is REAL and stays - it is the side-by-side rule in BEHAVIOR.md and
     it is in all four live lessons. It is the video and the record sheets that were fiction.
     ⚠️ Paul's copy. Say so and change it back if he wants the original. */
  { name: "Science", slug: "science", live: true,
    blurb: "Life science read on screen, with the origin question handled side by side rather than skipped." },
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
      col("Math", [{ label: "Speed Run Math", href: "/games/speed-run-math/" },
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
</nav>
${cartDrawer(b)}
${accountDrawer()}`;
};

/* Favicon set. One source image, three sizes, so a browser tab, an Android
   home screen and an iOS bookmark each get something sharp instead of a
   1500px PNG scaled down on the fly. */
const faviconTags = () =>
  '<link rel="icon" href="/assets/brand/logo-32.png" sizes="32x32" type="image/png">\n' +
  '<link rel="icon" href="/assets/brand/logo.png" sizes="512x512" type="image/png">\n' +
  '<link rel="apple-touch-icon" href="/assets/brand/logo-180.png">';

/* ── SHARE CARDS AND BREADCRUMBS ──────────────────────────────────────────
   Both of these were on ONE page out of 184: the hand-written root index.html.
   Every generated page - every lesson, worksheet, grade and subject shelf -
   shipped with no Open Graph at all, so a link pasted into Messenger, X or a
   Facebook group rendered as a bare URL with no title and no picture. Sharing
   a lesson is how this site is meant to spread, so that was the whole channel.

   They live in nav.js for the same reason faviconTags and modeBoot do: FOUR
   generators build pages, and anything pasted into four files drifts. That is
   not a hypothetical here - it is exactly how the nav, the footer and the
   cache-buster each went stale, and it is why ROADMAP 34 exists. */

const SITE_ORIGIN = "https://nexstudents.org";

/* Paul's own share card, made in Canva 2026-09-04: 1200x630, the red logo and
   NEXSTUDENTS wordmark on solid black, 192 KB, indexed PNG with NO tRNS chunk -
   verified opaque, because a transparent PNG gets flattened onto WHITE by most
   readers and this artwork is built for the dark site.

   🚨 THESE TWO CHANGE TOGETHER. The card size and the image have to agree:
   "summary_large_image" with a square image gets centre-cropped, and it was
   previously the reverse mistake - the root index.html declared the large card
   while supplying no image at all, which renders as a blank slab. */
const SHARE_IMAGE = SITE_ORIGIN + "/assets/brand/share.png";
const TWITTER_CARD = "summary_large_image";

/* `path` is root-absolute and starts with "/". `type` is "website" for a shelf
   or an index and "article" for a lesson or a worksheet. */
const socialTags = (o) => {
  const url = SITE_ORIGIN + (o.path || "/");
  const esc = (s) => String(s == null ? "" : s).replace(/&(?!#?\w+;)/g, "&amp;").replace(/"/g, "&quot;");
  return [
    '<meta property="og:site_name" content="NexStudents">',
    '<meta property="og:type" content="' + (o.type || "website") + '">',
    '<meta property="og:url" content="' + url + '">',
    '<meta property="og:title" content="' + esc(o.title) + '">',
    '<meta property="og:description" content="' + esc(o.desc) + '">',
    '<meta property="og:image" content="' + (o.image || SHARE_IMAGE) + '">',
    '<meta name="twitter:card" content="' + TWITTER_CARD + '">',
    '<meta name="twitter:title" content="' + esc(o.title) + '">',
    '<meta name="twitter:description" content="' + esc(o.desc) + '">',
    '<meta name="twitter:image" content="' + (o.image || SHARE_IMAGE) + '">',
  ].join("\n");
};

/* BreadcrumbList, and it is the strongest thing available against the name
   collision: a result with breadcrumbs prints "nexstudents.org > 7th Grade >
   Science" under the title instead of a bare URL, so our own name is on screen
   next to the singular-name company's.

   `trail` is [{ name, path }] in order, WITHOUT the current page - the page
   itself is appended as the last, link-free item, which is what the spec asks
   for. Pass [] on a top-level page and nothing is emitted, because a one-item
   breadcrumb is noise. */
const breadcrumbLd = (trail, currentName) => {
  if (!Array.isArray(trail) || !trail.length) return "";
  /* 🚨 ONLY THE LAST ITEM MAY OMIT `item`. A middle entry with no URL is
     invalid and Google reports the whole breadcrumb as an error, so an
     unlinked middle segment is DROPPED here rather than emitted broken.
     That is why the JSON can be one step shorter than the crumb on screen:
     "7th Grade > Science > Lessons" has no /grade-7/science/ page - the real
     shelf is /grade-7/science/lessons/ - so Science is a label, not a place.
     The visible crumb keeps it because it tells the reader where they are. */
  const linked = trail.filter((it, i) => i === 0 || it.path);
  const items = linked.concat([{ name: currentName }]).map((it, i) => {
    const e = { "@type": "ListItem", position: i + 1, name: it.name };
    if (it.path) e.item = SITE_ORIGIN + it.path;
    return e;
  });
  return '<script type="application/ld+json">\n' +
    JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items }, null, 2) +
    "\n</script>";
};

/* What goes in a LESSON page's __CANONICAL__ slot. Four generators fill that
   slot - build-lessons, build-math, build-english, build-integers - so the
   canonical, the share card and the breadcrumb are built here once instead of
   in four places. `back` is the shelf the lesson returns to, which is already
   derived per lesson by lesson-back.js, so the breadcrumb cannot disagree with
   the back link the student actually sees. */
const lessonHead = (o) => {
  const path = "/lessons/" + o.id + "/";
  const desc = o.desc || ("A NexStudents lesson: " + o.title + ". Read along, then answer in your notebook.");
  const trail = [{ name: "Home", path: "/" }];
  if (o.backLabel && o.backHref) trail.push({ name: o.backLabel, path: o.backHref });
  return '<link rel="canonical" href="' + SITE_ORIGIN + path + '">\n' +
    socialTags({ path, title: o.title + " | NexStudents", desc, type: "article", image: o.image }) +
    (trail.length > 1 ? "\n" + breadcrumbLd(trail, o.title) : "");
};

/* The crumb line a page already prints is the breadcrumb, so PARSE it rather
   than asking every page to declare its trail twice. Two sources for one path
   is how the nav and the drawer drifted, and a breadcrumb that disagrees with
   the visible one is worse than none - Google treats that as a mismatch.

   A crumb is anchors joined by &rsaquo; with the current page as plain text at
   the end: '<a href="/grade-k/">Kindergarten</a> &rsaquo; Lessons'. */
const crumbTrail = (crumbHtml) => {
  if (!crumbHtml) return { trail: [], current: "" };
  const parts = String(crumbHtml).split(/&rsaquo;|&rarr;|›/);
  const clean = (s) => s.replace(/<[^>]*>/g, "").replace(/&amp;/g, "&").replace(/&rsquo;/g, "’").trim();
  const trail = [{ name: "Home", path: "/" }];
  let current = "";
  parts.forEach((seg, i) => {
    const a = seg.match(/<a[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/i);
    if (i === parts.length - 1 && !a) current = clean(seg);
    else if (a) trail.push({ name: clean(a[2]), path: a[1] });
    else trail.push({ name: clean(seg) });
  });
  /* An all-anchor crumb has no plain tail; the last link IS the current page. */
  if (!current && trail.length > 1) current = trail.pop().name;
  return { trail, current };
};

/* 🚨 SIGN IN AND CART, and they are LINKS. Paul, 2026-08-29: "remove pick a
   grade from the homepage and put in that spot the login and shopping cart."

   They used to be aria-disabled buttons that did nothing. Neither the accounts
   backend nor the cart exists yet (ROADMAP items 6 and 7), so each one opens a
   page that says plainly where it stands and what it will do, rather than
   being a control that visibly ignores you. A dead button is worse than an
   honest page — that is the same rule that put a page behind every game. */
const navIcons = () =>
  '<div class="navicons">' +
  /* Signed in, the script opens the account panel instead; signed out, or with
     JavaScript off, this is a plain link to the sign-in page. Same as the cart. */
  '<a class="navicon" id="acctLink" href="/account/" aria-label="Account" title="Account">' +
  '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" ' +
  'stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
  '<circle cx="12" cy="8" r="3.6"/><path d="M4.5 20a7.5 7.5 0 0 1 15 0"/></svg></a>' +
  /* 🚨 STILL A REAL LINK TO /cart/, AND THAT IS THE POINT. The script below
     intercepts the click to open the drawer instead, but with JavaScript off,
     or before it parses, this is an ordinary anchor that lands on the cart
     page. A cart icon that only works once a script has run is a dead control
     for the reader who arrives early. */
  '<a class="navicon" id="cartLink" href="/cart/" aria-label="Cart" title="Cart">' +
  '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" ' +
  'stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
  '<path d="M3 4h2.2l2 11h9.9l2-8H6.4"/><circle cx="9.5" cy="19" r="1.4"/>' +
  '<circle cx="17" cy="19" r="1.4"/></svg>' +
  /* 🚨 SHIPS EMPTY AND HIDDEN. The count is written by JavaScript from
     localStorage, so it CANNOT be rendered at build time — every page is a
     static file served to everyone. A number baked in here would be one
     visitor's cart shown to all of them. */
  '<span class="cartn" id="cartn" hidden aria-hidden="true"></span></a>' +
  "</div>";

/* ── THE CART DRAWER ───────────────────────────────────────────────────────
   Paul, 2026-09-07, pointing at two lttstore product pages: "add it to the cart
   also to see what it looks like so we can get the structure." Technique
   theirs, markup ours — the same borrowing as the mega menu.

   🚨 IT EXISTS BECAUSE ADDING TO THE CART GAVE NO FEEDBACK AT ALL. Before this,
   pressing a button that silently wrote to localStorage was indistinguishable
   from a dead button, which is the exact fault the "no dead buttons" rule in
   navIcons above was written for.

   ⚠️ IT IS NOT THE CART PAGE IN A NARROWER BOX. /cart/ is the table with the
   summary card; this is a confirmation that also happens to be editable. Keep
   the two different on purpose.

   ⚠️ Rendered on EVERY page including lesson pages, so its rules live in BOTH
   ns.css and lesson-nav.css — see the drift machine in CLAUDE.md. A lesson page
   has no Add to Cart control, but it does carry the nav, so it must not show an
   unstyled drawer if one is ever opened from it. */
/* ⚠️ TAKES THE BUTTON CLASS, exactly as navMarkup does. A lesson page styles
   .navbtn and a site page styles .btn; hardcoding either ships an unstyled
   button on half the site. That is the drift this file exists to prevent. */
const cartDrawer = (btn) =>
  '<div class="cscrim" id="cscrim"></div>' +
  '<aside class="cdrawer" id="cdrawer" aria-hidden="true" aria-label="Cart">' +
  '<div class="cd-top"><h2 class="cd-h">Cart <span class="cd-n" id="cdN">0</span></h2>' +
  '<button class="cd-x" id="cdClose" type="button" aria-label="Close cart">&times;</button></div>' +
  '<div class="cd-body" id="cdBody"></div>' +
  '<div class="cd-foot">' +
  '<div class="cd-tot"><span>Total</span><span id="cdTotal">&mdash;</span></div>' +
  /* 🚨 BOTH BUTTONS ARE SOLID, THE SAME COLOUR. Paul, 2026-09-07: "did you see
     how you made one icon black and one white for the view cart and checkout
     ... both of theirs is orange so both of ours should be white."
     The reference had no primary/secondary split and I invented one anyway.
     ⚠️ Do not "improve" this back into a ghost button for View Cart. Both are
     ways out of the drawer and neither is the lesser one. */
  /* 🚨 THE PADLOCK IS ON CHECK OUT ONLY, AND IT MEANS SECURE CHECKOUT. Paul,
     2026-09-07: "the icon is suppose to mean secure checkout" and "they also
     have the icon on the checkout on both mobile and on the side menu."
     View Cart does not get one - it is navigation, not a payment step, and a
     padlock on it would be decoration that waters the real signal down. */
  /* ⚠️ THE LABEL IS WRAPPED EVEN THOUGH THIS BUTTON HAS NO ICON. The rule puts
     the label in grid column 2 of a 1fr auto 1fr grid; a BARE TEXT NODE becomes
     an anonymous item in column 1 instead and sits left of centre. That shipped
     once - Check Out was wrapped, View Cart was not, and only Check Out came
     out centred. Both get a span. */
  '<div class="cd-acts"><a class="' + (btn || "btn") + '" href="/cart/">' +
  '<span>View Cart</span></a>' +
  '<a class="' + (btn || "btn") + '" href="/cart/">' +
  '<svg viewBox="0 0 20 20" width="15" height="15" aria-hidden="true" fill="none" ' +
  'stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
  '<rect x="4" y="9" width="12" height="8" rx="1.6"/>' +
  '<path d="M7 9V6.5a3 3 0 0 1 6 0V9"/></svg><span>Check Out</span></a></div>' +
  "</div></aside>";

/* ── THE ACCOUNT PANEL ─────────────────────────────────────────────────────
   Paul, 2026-09-10, of the Lizzie Peirce account: "i want it to match for the
   type of downloads, the checkout and even the side account and order
   history". Hers slides in from the right: BACK, a centred title, CLOSE; then
   "Hi, Paul" / Sign out and rows with a grey line under each. Orders opens the
   list, an order opens its items with a "Download item" row under each, and
   Profile shows the name, email and password.
   ⚠️ Orders and Profile only. Her Payment Methods and Address rows hold nothing
   here: Stripe keeps the cards and a download needs no address.
   ⚠️ The view is drawn by navScript into #adBody; only the frame is markup.
   Its rules live in BOTH ns.css and lesson-nav.css, like the cart drawer. */
const accountDrawer = () =>
  '<div class="ascrim" id="ascrim"></div>' +
  '<aside class="adrawer" id="adrawer" aria-hidden="true" aria-label="Account">' +
  '<div class="ad-top">' +
  '<button class="ad-back" id="adBack" type="button" hidden>' +
  '<svg viewBox="0 0 20 20" width="13" height="13" aria-hidden="true" fill="none" stroke="currentColor" ' +
  'stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.5 4 6.5 10l6 6"/></svg>' +
  '<span>Back</span></button>' +
  '<h2 class="ad-h" id="adH">Account</h2>' +
  '<button class="ad-x" id="adClose" type="button">Close</button></div>' +
  '<div class="ad-body" id="adBody"></div>' +
  "</aside>";

/* 🎨 THE EIGHT THEME COLORS, LIFTED FROM THE LESSON TEMPLATE, NEVER COPIED.
   Paul, 2026-09-11: "i do want 8 differnt theme color types including the
   graphite color we made", one shared set for the lessons AND the profile
   boxes. A profile box is that theme's LIGHT accent (all eight carry white
   text at 6:1 or better). Same rule the lesson generators follow for THEMES:
   one source, read at build time, and the build fails if it cannot read it. */
const AD_THEMES = (() => {
  const fs = require("fs"), path = require("path");
  const src = fs.readFileSync(path.join(__dirname, "lesson-template.html"), "utf8");
  const out = [];
  const re = /(\w+): \{ name:"([^"]+)",\s*light:\{[^}]*?accent:"(#[0-9A-Fa-f]{6})"/g;
  let m;
  while ((m = re.exec(src))) out.push({ k: m[1], name: m[2], box: m[3] });
  if (out.length < 8) {
    console.error("nav.js: expected 8 lesson THEMES in lesson-template.html, read " + out.length);
    process.exit(1);
  }
  return out;
})();

/* slug -> the sheet's thumbnail and where a FREE one opens (its print/ page).
   Built from worksheets.js, the same list the sheets are rendered from, so the
   panel cannot point at a sheet that is not there. A paid item downloads
   through the Worker with its own token instead. */
const AD_ITEMS = (() => {
  const fs = require("fs"), path = require("path");
  const URL_OF = { English: "english", History: "history", Math: "maths", Maths: "maths", Science: "science" };
  const root = path.join(__dirname, "..");
  const out = {};
  for (const w of require("./worksheets.js").SHEETS) {
    if (!URL_OF[w.subject]) continue;
    const base = "/worksheets/" + URL_OF[w.subject] + "/" + w.slug + "/";
    const paid = /[1-9]/.test(String(w.price || ""));
    out[w.slug] = {
      th: fs.existsSync(path.join(root, base, "thumb.jpg")) ? base + "thumb.jpg" : "",
      open: base + (paid ? "" : "print/"),
    };
  }
  return out;
})();

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
/* Also paints the active profile's accent BEFORE first paint (2026-09-11):
   ns:accent is a hex the account panel writes (nsApplyAccent). Checked as a
   6-digit hex so a tampered value cannot inject CSS. */
const modeBoot = () => "<scr" + "ipt>" +
  '(function(){try{var d=document.documentElement,m=localStorage.getItem("ns:mode");' +
  'if(m==="light"||m==="dark")d.setAttribute("data-theme",m);' +
  'var c=localStorage.getItem("ns:accent");' +
  'if(c&&/^#[0-9a-fA-F]{6}$/.test(c)){d.style.setProperty("--me",c);d.classList.add("has-me");}}catch(e){}})();' +
  "</scr" + "ipt>";

/* 🚨 WRAPPED IN AN IIFE, and it must stay that way.
   Its top-level names would otherwise land in the global scope and collide
   with whatever the host page already declared. The home page declares its
   own `burger`, and a redeclaration is a PARSE error, so the whole nav script
   silently never ran there: the markup was present, every chevron was dead,
   and nothing showed in the console until it was looked for. Paul,
   2026-08-26: "the sub nav are not opening when i press the right arrows." */
/* 🚨 THE ACCOUNT SCRIPTS LOAD ON EVERY PAGE, and they must load HERE, before
   the inline script below. Classic in-body scripts run in document order, so a
   plain src tag is enough — no defer, which would postpone them past the inline
   block that needs NSAccount.

   ⚠️ THEY USED TO LOAD ON /account/ AND /cart/ ONLY, which is why the cart
   count could not be shown anywhere else. Both files are local and small; no
   third-party script is added to any page by this. See ns-account.js for why
   supabase-js itself is deliberately not used. */
/* 🗜️ COMMENTS STAY IN THIS FILE, NOT IN EVERY PAGE. Paul, 2026-09-10: "we
   still need to keep the tokens usage down so helping the site stay compact
   ... is a priority." The notes below are for us; shipped, they were 10.6 KB of
   the 33.6 KB script on EVERY page. navScript() strips block comments and blank
   lines on the way out. ⚠️ Safe only while no string in the script contains
   the two characters slash-star. Checked 2026-09-10; node --check passed. */
const navScript = () => navScriptRaw()
  .replace(/\/\*[\s\S]*?\*\//g, "")
  .replace(/\n[ \t]*\n+/g, "\n");
const navScriptRaw = () =>
  '<scr' + 'ipt src="/assets/supabase-config.js"></scr' + 'ipt>\n' +
  '<scr' + 'ipt src="/assets/ns-account.js"></scr' + 'ipt>\n' +
  "<scr" + "ipt>\n" + "(function(){\n" + `
var burger=document.getElementById("burger"),drawer=document.getElementById("drawer"),
    scrim=document.getElementById("scrim"),dClose=document.getElementById("drawerClose");

/* 🚨 THE SCROLL LOCK GOES ON <html>, NOT <body>, AND THAT IS THE WHOLE BUG.
   Paul, 2026-09-07, of the cart drawer: "they have a x that prevents the user
   from scrolling when the draw is open" - ours did not.
   Measured with the drawer open: document.scrollingElement is HTML, body's
   computed overflow-y was already "hidden" (the old line worked), html's was
   "visible", and the page still scrolled 0 -> 576.
   ⚠️ Setting overflow on BODY does nothing here because html carries
   overflow-x clip and is therefore the scroll container - the same reason
   already written up in CLAUDE.md for why window scroll events died when
   overflow-x sat on body.
   ⚠️ KNOWN SIDE EFFECT, MEASURED AND ACCEPTED: while locked, html's overflow-x
   computes from clip to hidden. That is the CSS rule, not a bug - clip paired
   with a non-clip value computes to hidden - and it lasts only while a drawer
   is open. The sticky nav was checked in that state and still computes sticky.
   If it ever does bite, the alternative is a position:fixed body lock, which
   costs a saved scroll offset to restore.

   ⚠️ NO BACKTICKS IN THIS COMMENT. It lives inside a template literal and one
   backtick closes the string - the trap already documented for pagerScript and
   progressScript, hit again here on 2026-09-07.

   ⚠️ AND DO NOT VERIFY THIS WITH window.scrollBy. A programmatic scroll moves a
   container with overflow:hidden anyway; only wheel, touch and the scrollbar
   are blocked. Read the computed overflow-y instead. The first test here said
   the lock had failed when it had not.
   ⚠️ overflow-Y ONLY. The shorthand would reset html's overflow-x to hidden and
   quietly undo that fix.
   ⚠️ Both drawers share this. The menu drawer carried the identical dead line,
   so it never locked scrolling either. */
var nsLocks=0;
function nsLockScroll(on){
  nsLocks=Math.max(0,nsLocks+(on?1:-1));
  document.documentElement.style.overflowY=nsLocks?"hidden":"";
}

function setNav(o){
  /* Same no-op guard as nsCartOpen: the lock counts, so a repeated call in the
     state it is already in would leak one. */
  if(document.body.classList.contains("nav-open")===o) return;
  document.body.classList.toggle("nav-open",o);
  burger.setAttribute("aria-expanded",o);drawer.setAttribute("aria-hidden",!o);
  nsLockScroll(o);
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
/* ⚠️ ONE DELEGATED LISTENER, not one per switch found at load. The account
   panel's Settings view draws its Night Mode switch AFTER load, and a
   per-element binding would leave that copy dead (2026-09-10). */
document.addEventListener("click",function(e){
  if(!e.target.closest("[data-mode-toggle]")) return;
  var next=nsMode()==="light"?"dark":"light";
  document.documentElement.setAttribute("data-theme",next);
  try{localStorage.setItem("ns:mode",next);}catch(err){}
  nsPaintMode();
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

/* ── THE CART DRAWER ──────────────────────────────────────────────────────
   NSAccount comes from ns-account.js, loaded just above this by navScript.
   ⚠️ EVERY ENTRY POINT IS GUARDED. A page can be opened before that script
   parses, or with it blocked outright, and a throw here would take the nav
   and the mega menu down with it. */
var cdrawer=document.getElementById("cdrawer"),cscrim=document.getElementById("cscrim"),
    cdBody=document.getElementById("cdBody"),cdTotal=document.getElementById("cdTotal"),
    cdN=document.getElementById("cdN"),cartn=document.getElementById("cartn"),
    cdClose=document.getElementById("cdClose");

/* 🚨 A REAL PRICE, NEVER THE WORD "Free". Paul, 2026-09-07: "subtotal should
   not say free but $0 having an actual price." Kept identical to the cart
   page's money() - one cart must not show two money formats depending on
   whether you are looking at the drawer or the page. */
function nsMoney(c){ return "$" + ((c||0)/100).toFixed(2); }

function nsCartOpen(o){
  if(!cdrawer) return;
  /* ⚠️ NO-OP IF ALREADY IN THAT STATE. nsLockScroll counts, and opening an
     already-open drawer would take a second lock that nothing releases. */
  if(document.body.classList.contains("cart-open")===o) return;
  document.body.classList.toggle("cart-open",o);
  cdrawer.setAttribute("aria-hidden",!o);
  nsLockScroll(o);
}

/* The badge is the only part that paints on EVERY page. It reads localStorage
   and nothing else, so it is instant and needs no network. */
function nsCartBadge(){
  if(!cartn||!window.NSAccount) return;
  var n=NSAccount.cart().length;
  cartn.textContent=n;
  cartn.hidden = n===0;
  if(cdN) cdN.textContent=n;
}

/* 🚨 TITLES AND PRICES COME FROM THE DATABASE, NEVER FROM THE CART. The cart
   holds slugs. Only the thumbnail is taken from the local hint, because a
   wrong picture is a cosmetic bug and a wrong price is a refund. */
function nsCartPaint(){
  if(!cdBody||!window.NSAccount) return;
  nsCartBadge();
  var items=NSAccount.cart();
  if(!items.length){
    cdBody.innerHTML="<p class='cd-empty'>Nothing in your cart yet.</p>";
    if(cdTotal) cdTotal.textContent=nsMoney(0);
    return;
  }
  cdBody.innerHTML="<p class='cd-empty'>Loading&hellip;</p>";
  NSAccount.priceList(items).then(function(rows){
    if(!rows.length){
      /* Offline, or a slug that is no longer for sale. Say so rather than
         showing an empty drawer that looks like the add failed. */
      cdBody.innerHTML="<p class='cd-empty'>Could not load your cart just now. "+
        "It is still saved &mdash; try again in a moment.</p>";
      return;
    }
    var total=0,html="";
    rows.forEach(function(r){
      total+=r.price_cents;
      var img=NSAccount.cartThumb(r.slug);
      html+="<div class='cd-row'>"+
        (img?"<img class='cd-th' src='"+img+"' alt='' width='56' height='56' loading='lazy'>"
            :"<span class='cd-th cd-noth' aria-hidden='true'></span>")+
        "<div class='cd-info'><b>"+r.title+"</b>"+
        "<span class='cd-price'>"+nsMoney(r.price_cents)+"</span></div>"+
        /* 🚨 QUANTITY BOX OVER REMOVE, the way the reference stacks them.
           A BOX, NOT AN INPUT: a download is bought once, so a stepper here
           would be a way to pay twice for the same PDF. Same reasoning as the
           cart page - see .ck-qbox in ns.css. */
        "<div class='cd-qty'><span class='cd-qbox'>1</span>"+
        "<button class='cd-rm' type='button' data-rm='"+r.slug+"'>Remove</button></div></div>";
    });
    cdBody.innerHTML=html;
    if(cdTotal) cdTotal.textContent=nsMoney(total);
    cdBody.querySelectorAll("[data-rm]").forEach(function(b){
      b.onclick=function(){ NSAccount.cartRemove(b.getAttribute("data-rm")); };
    });
  });
}

if(cdrawer){
  /* 🚨 THE CART ICON OPENS THE DRAWER. Paul, 2026-09-07: "our right drawer
     doesnt popout when you press the cart." It was a plain link to /cart/,
     which worked but made the drawer reachable only by adding something.
     ⚠️ MODIFIED CLICKS ARE LEFT ALONE. Ctrl-click, middle-click and shift-click
     must still open the cart page in a tab or window - swallowing those breaks
     an ordinary browser habit, and the href is right there for them to use.
     It opens even on an empty cart: "Nothing in your cart yet" is an answer,
     and a control that does nothing reads as broken. */
  var cartLink=document.getElementById("cartLink");
  if(cartLink) cartLink.addEventListener("click",function(e){
    if(e.button!==0||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey) return;
    e.preventDefault();
    nsCartPaint();
    nsCartOpen(true);
  });
  cscrim.onclick=cdClose.onclick=function(){ nsCartOpen(false); };
  /* Escape closes it. A fixed overlay with no keyboard exit is a trap. */
  addEventListener("keydown",function(e){
    if(e.key==="Escape"&&document.body.classList.contains("cart-open")) nsCartOpen(false);
  });
  /* ns-account.js fires this on every add, remove and clear. The drawer OPENS
     only on an add - a remove repaints it where it already is, and clearing it
     at checkout must not pop it back up on the confirmation page. */
  document.addEventListener("ns:cart",function(e){
    nsCartPaint();
    if(e.detail&&e.detail.added) nsCartOpen(true);
  });
  nsCartBadge();
}

/* ── THE ACCOUNT PANEL ─────────────────────────────────────────────────────
   Four views in one panel, like the Lizzie Peirce account: main, orders, one
   order, profile. BACK steps up one level; CLOSE and Escape shut it.
   ⚠️ NO BACKTICKS HERE, this is inside a template literal. */
var adrawer=document.getElementById("adrawer"),ascrim=document.getElementById("ascrim"),
    adClose=document.getElementById("adClose"),acctLink=document.getElementById("acctLink");
var AD_ITEMS=${JSON.stringify(AD_ITEMS)};
var AD_THEMES=${JSON.stringify(AD_THEMES)};
var AD_WORKER="https://nexstudents-media.nexedgetech.workers.dev";
var adUser=null,adOrders=null,adLoading=false;
/* The views draw into a HOST: {body, h, back, x, up, view, save}. Today the
   drawer is the only host (the /account/ card that was a second one is gone,
   see panel=account below). Nothing inside a view uses an id, so a second host
   could be added without two elements sharing one. */
var adHosts=[];
function adHostOf(root){
  return {root:root,body:root.querySelector(".ad-body"),h:root.querySelector(".ad-h"),
          back:root.querySelector(".ad-back"),x:root.querySelector(".ad-x"),
          xLabel:root.querySelector(".ad-x")?root.querySelector(".ad-x").textContent:"",
          up:null,view:"main",save:null};
}

function adEsc(s){ var d=document.createElement("div"); d.textContent=s==null?"":String(s); return d.innerHTML; }
function adDate(w,long){
  var d=new Date(w); if(isNaN(d)) return "";
  /* [] = the reader's own locale. */
  return d.toLocaleDateString([],long?{month:"short",day:"numeric",year:"numeric"}:{month:"short",day:"numeric"});
}
function adOpen(o){
  if(!adrawer) return;
  if(document.body.classList.contains("acct-open")===o) return;
  document.body.classList.toggle("acct-open",o);
  adrawer.setAttribute("aria-hidden",!o);
  nsLockScroll(o);
}
/* One order = one order number (migration 012). Rows from before that migration
   has run carry none, so they fall back to the minute they were bought, which
   is how the account page grouped them. Newest first, as my_downloads sends. */
function adGroup(rows){
  var list=[],seen={};
  rows.forEach(function(r){
    var k=r.order_no!=null?"n"+r.order_no:"t"+String(r.bought_at||"").slice(0,16);
    if(!seen[k]){ seen[k]={no:r.order_no,when:r.bought_at,rows:[],total:0}; list.push(seen[k]); }
    seen[k].rows.push(r); seen[k].total+=(r.amount_cents||0);
  });
  return list;
}
function adTitle(o){ return o.no!=null?"Order #"+o.no:"Order"; }
/* 🚨 THE TOP-RIGHT BUTTON BECOMES SAVE ONCE A PROFILE FIELD CHANGES. Paul,
   2026-09-10: "on the profile where you have close it needs to have a save",
   then of the reference: "after you change your details it says save then it
   switches to close." Its own label otherwise: CLOSE in the drawer, nothing on
   the /account/ page (a page has nothing to close). */
function adFrame(H,title,up,view){
  H.h.textContent=title; H.up=up||null; H.back.hidden=!up; H.view=view; H.save=null;
  /* Every view opens on the host's own label. Profile swaps it for SAVE only
     once a field is changed - see dirty() in adProfile. */
  if(H.x){ H.x.textContent=H.xLabel; H.x.hidden=!H.xLabel; }
  H.body.scrollTop=0;
}
/* ── STUDENT PROFILES AND THE PARENT/TEACHER PIN (2026-09-11, ROADMAP 50) ──
   Paul: "should feel a bit like Netflix accounts ... a parent or teacher pin."
   His two calls, same day:
   - THE PIN GUARDS THE PARENT SIDE ONLY. A student profile sees the strip and
     Settings; getting back to the parent profile (and so to Manage Profiles,
     Orders, Account, Sign Out) asks for the PIN. Students have no PIN.
   - A full-screen "Who's learning?" picker once after sign-in (nsWhoPicker).
   Paul, later the same evening (migration 014):
   - UP TO 2 PARENT PROFILES AND 10 STUDENTS. The account holder is parent 1
     and has no row; parent 2 is a row with kind "parent". EACH PARENT HAS
     THEIR OWN PIN. One + box that asks Parent or Student.
   - Students get birthday (optional), male/female, grade and ONE Theme
     Color from the eight lesson palettes, which colors their box AND their
     lessons.
   🚨 WHO IS ACTIVE IS NSAccount.who(), PER DEVICE, AND IT IS NOT A PERMISSION.
   "parent" = the account holder, otherwise a row id. The session is the
   account holder's either way. See migration 013's header.
   ⚠️ The account holder's box keeps the old red; no theme is red, so a
   child's box can never be mistaken for it. */
var AD_GRADES=["K","1","2","3","4","5","6","7","8"];
var AD_MAX={student:10,parent:1};   /* ROWS. Parents = the account holder + 1 */
var adKids=null,adPins=null;        /* adKids holds EVERY profile row, both kinds */
var AD_LOCK="<svg class='ad-lock' viewBox='0 0 20 20' width='11' height='11' aria-hidden='true' fill='none' "+
  "stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>"+
  "<rect x='4' y='9' width='12' height='8' rx='1.6'/><path d='M7 9V6.5a3 3 0 0 1 6 0V9'/></svg>";
function adKid(id){ return (adKids||[]).filter(function(k){ return k.id===id; })[0]||null; }
function adOf(kind){ return (adKids||[]).filter(function(k){ return k.kind===kind; }); }
function adTheme(k){ return AD_THEMES.filter(function(t){ return t.k===k; })[0]||null; }
/* A parent's PIN key: null for the account holder, else the parent row id. */
function adHasPin(key){ return !!(adPins&&adPins[key||"owner"]); }
/* null = the account holder. PENDING while a profile is set but the list has
   not loaded, so the panel never flashes the parent rows at a child. */
var AD_PENDING={pending:true};
function adActive(){
  var w=window.NSAccount?NSAccount.who():"parent";
  if(w==="parent") return null;
  if(adKids===null) return AD_PENDING;
  return adKid(w);
}
function adParentSide(a){ return a===null||(a&&a!==AD_PENDING&&a.kind==="parent"); }
function adAv(name,theme){
  var t=adTheme(theme);
  return "<i"+(t?" style='background:"+t.box+"'":"")+" aria-hidden='true'>"+adEsc(String(name||"?").charAt(0).toUpperCase())+"</i>";
}
function adMe(){
  var md=(adUser&&adUser.user_metadata)||{};
  return md.first_name||(adUser&&adUser.email?adUser.email.split("@")[0]:"You");
}
function adFull(){ return adOf("student").length>=AD_MAX.student&&adOf("parent").length>=AD_MAX.parent; }
/* 🧒 THE PROFILE STRIP, like the top of Netflix's account menu (Paul,
   2026-09-10: "maybe at the top like add profile box"). Parents, then
   students, then the + square (parent side only, gone when both caps are
   full). Paul: "we will just have an add box button like a square with a plus
   sign in the middle" - so the + carries no label under it. */
function adStrip(a){
  var me=adMe();
  /* pinKey false = a student, never locked. ⚠️ Not the word for "no value":
     build-worksheets fails any page containing it, as a broken-template net. */
  function tile(id,name,theme,pinKey,on){
    var lock=pinKey!==false&&adHasPin(pinKey);
    return "<button class='ad-pro-i"+(on?" is-me":"")+"' type='button' data-who='"+adEsc(id)+"' aria-label='"+
      adEsc(name)+(lock?", locked with a PIN":"")+"'>"+adAv(name,theme)+"<b>"+(lock?AD_LOCK:"")+adEsc(name)+"</b></button>";
  }
  return "<div class='ad-pro'>"+
    tile("parent",me,null,null,a===null)+
    adOf("parent").map(function(p){ return tile(p.id,p.name,p.theme,p.id,a&&a.id===p.id); }).join("")+
    adOf("student").map(function(k){ return tile(k.id,k.name,k.theme,false,a&&a.id===k.id); }).join("")+
    (adParentSide(a)&&!adFull()?"<button class='ad-pro-i is-add' type='button' data-go='add' aria-label='Add Profile'><i aria-hidden='true'>+</i></button>":"")+
    "</div>";
}
/* Switch who is on. Their theme color follows as an ACCENT (buttons and nav
   bar, Paul's pick), never as a repaint of the lesson: see nsApplyAccent.
   ⚠️ The first version wrote ns:theme and turned a whole lesson teal. Paul:
   "certain elements instead of the entire color of the site." The lesson
   colour picker (ns:theme) is the student's own per-device choice again. */
function adSetWho(id){
  NSAccount.setWho(id);
  nsWhoIcon();
}
/* html.has-me + --me on the live page, and ns:accent so modeBoot paints it
   before first paint on the next page. Cleared for the account holder, a
   visitor, and anyone signed out. */
function nsApplyAccent(){
  if(!window.NSAccount) return;
  var a=NSAccount.isSignedIn()?adActive():null;
  if(a===AD_PENDING) return;
  var t=a?adTheme(a.theme):null,d=document.documentElement;
  try{ if(t) localStorage.setItem("ns:accent",t.box); else localStorage.removeItem("ns:accent"); }catch(e){}
  if(t){ d.style.setProperty("--me",t.box); d.classList.add("has-me"); }
  else { d.style.removeProperty("--me"); d.classList.remove("has-me"); }
}
function adMain(H){
  adFrame(H,"Account",null,"main");
  var a=adActive();
  if(a===AD_PENDING){ H.body.innerHTML="<p class='ad-empty ad-mid'>Loading…</p>"; return; }
  /* A STUDENT'S PANEL: the strip and Settings, nothing that belongs to a
     parent. The note says how a grown-up gets back. */
  if(!adParentSide(a)){
    var anyPin=adHasPin(null)||adOf("parent").some(function(p){ return adHasPin(p.id); });
    H.body.innerHTML="<div class='ad-hi'><h3>Hi, "+adEsc(a.name)+"</h3></div>"+adStrip(a)+
      "<button class='ad-row' type='button' data-go='settings'><b>Settings</b><span data-mode-label>Night Mode</span></button>"+
      "<p class='ad-note ad-mid'>Grown-ups: tap your profile"+(anyPin?" and enter your PIN":"")+" to get back to the account.</p>";
    if(typeof nsPaintMode==="function") nsPaintMode();
    return;
  }
  var md=(adUser&&adUser.user_metadata)||{};
  var hiName=a?a.name:md.first_name;
  var last=adOrders&&adOrders.length?"Last order "+(adOrders[0].no!=null?"#"+adOrders[0].no+" ":"")+"is completed":
           (adOrders?"No orders yet":"Loading…");
  var ns=adKids?adOf("student").length:-1,np=adKids?adOf("parent").length+1:-1;
  var kidsLine=ns<0?"Loading…":np+" parent"+(np===1?"":"s")+" · "+ns+" student"+(ns===1?"":"s");
  /* 🚨 THE ORDER IS PAUL'S. 2026-09-10: "i want the Hi, Username still but in
     order I want Manage Profiles first then orders, the settings, then
     account, then Sign out." */
  H.body.innerHTML="<div class='ad-hi'><h3>"+(hiName?"Hi, "+adEsc(hiName):"Hi there")+"</h3></div>"+
    adStrip(a)+
    "<button class='ad-row' type='button' data-go='profiles'><b>Manage Profiles</b><span>"+adEsc(kidsLine)+"</span></button>"+
    "<button class='ad-row' type='button' data-go='orders'><b>Orders</b><span>"+adEsc(last)+"</span></button>"+
    "<button class='ad-row' type='button' data-go='settings'><b>Settings</b><span data-mode-label>Night Mode</span></button>"+
    "<button class='ad-row' type='button' data-go='account'><b>Account</b><span>"+
      adEsc(adUser&&adUser.email||"")+"</span></button>"+
    /* Paul: "maybe just put Sign Out instead" of "Sign out of NexStudents". */
    "<button class='ad-signout' type='button' data-out>Sign Out</button>";
  if(typeof nsPaintMode==="function") nsPaintMode();
}
/* Tapping a box in the strip. A PARENT box asks for THAT parent's PIN when it
   has one, whoever is asking (each parent has their own, Paul's call). A
   student box -> straight in. */
function adSwitch(H,id){
  if(id===NSAccount.who()) return;
  var row=id==="parent"?null:adKid(id);
  var isParent=id==="parent"||(row&&row.kind==="parent");
  var key=id==="parent"?null:id;
  if(isParent&&adHasPin(key)) return adPinView(H,"unlock",{key:key,name:row?row.name:adMe()});
  adSetWho(id); adMain(H);
}
function adGradeLine(k){ return k.grade?(k.grade==="K"?"Kindergarten":"Grade "+adEsc(k.grade)):"No grade set"; }
function adRow(go,id,avatar,title,sub){
  return "<button class='ad-ord ad-kidrow' type='button' data-go='"+go+"'"+(id?" data-id='"+adEsc(id)+"'":"")+">"+avatar+
    "<span class='ad-ord-t'><b>"+title+"</b><span>"+sub+"</span></span><span class='ad-chev' aria-hidden='true'>&rsaquo;</span></button>";
}
/* 👨‍👩‍👧 MANAGE PROFILES. Paul: "i thought about putting it also in the side
   panel." Parents, then students, then Add Profile until both caps are full.
   Each parent's PIN lives on that parent's own row. */
function adProfiles(H){
  adFrame(H,"Manage Profiles",adMain,"profiles");
  if(adKids===null){ H.body.innerHTML="<p class='ad-empty ad-mid'>Loading…</p>"; return; }
  var me=adMe(),kids=adOf("student");
  function pinLine(key){ return adHasPin(key)?"PIN on":"No PIN"; }
  H.body.innerHTML=
    "<p class='ad-cap'>Parents · "+(adOf("parent").length+1)+" of 2</p>"+
    adRow("owner",null,adAv(me,null),adEsc(me),"Account holder · "+pinLine(null))+
    adOf("parent").map(function(p){ return adRow("edit",p.id,adAv(p.name,p.theme),adEsc(p.name),"Parent · "+pinLine(p.id)); }).join("")+
    "<p class='ad-cap'>Students · "+kids.length+" of 10</p>"+
    (kids.length?"":"<p class='ad-note'>Give each student their own profile, so their lessons and progress stay separate.</p>")+
    kids.map(function(k){ return adRow("edit",k.id,adAv(k.name,k.theme),adEsc(k.name),adGradeLine(k)); }).join("")+
    (adFull()?"<p class='ad-note'>This account is full: 2 parents and 10 students.</p>":
      "<button class='ad-ord ad-kidrow is-add' type='button' data-go='add'><i aria-hidden='true'>+</i>"+
      "<span class='ad-ord-t'><b>Add Profile</b></span><span class='ad-chev' aria-hidden='true'>&rsaquo;</span></button>")+
    "<p class='ad-note'>Each parent can set their own PIN. Students need it to open that parent's profile, so Orders, Account and these settings stay with the grown-ups.</p>";
}
/* THE + BOX asks which kind (Paul picked that). A kind that is full says so
   and cannot be pressed. */
function adAddPick(H){
  adFrame(H,"Add Profile",adProfiles,"add");
  var np=adOf("parent").length,ns=adOf("student").length;
  function opt(kind,label,used,max){
    var full=used>=max;
    return "<button class='ad-row' type='button' data-kind='"+kind+"'"+(full?" disabled":"")+"><b>"+label+"</b><span>"+
      (full?"Full":(used+(kind==="parent"?1:0))+" of "+(kind==="parent"?2:10)+" used")+"</span></button>";
  }
  H.body.innerHTML="<p class='ad-empty ad-mid'>Who is this profile for?</p>"+
    opt("parent","Parent",np,AD_MAX.parent)+opt("student","Student",ns,AD_MAX.student);
  H.body.querySelectorAll("[data-kind]").forEach(function(b){
    b.onclick=function(){ if(!b.disabled) adEdit(H,null,b.getAttribute("data-kind")); };
  });
}
/* THE ACCOUNT HOLDER'S ROW: their name and email live under Account, so this
   is only their PIN. */
function adOwner(H){
  adFrame(H,adMe(),adProfiles,"owner");
  H.body.innerHTML="<div class='ad-hi ad-edit-av'>"+adAv(adMe(),null)+"</div>"+
    "<p class='ad-cap'>PIN</p>"+
    "<button class='ad-kv ad-go' type='button' data-pin><span>PIN</span><span class='ad-dim'>"+
      (adHasPin(null)?"On":"Not set")+"<i aria-hidden='true'>&rsaquo;</i></span></button>"+
    "<p class='ad-note'>Your name, email and password are under Account.</p>";
  H.body.querySelector("[data-pin]").onclick=function(){ adPinView(H,"change",{key:null,name:adMe()}); };
}
/* ADD / EDIT ONE PROFILE. SAVE in the header, like Account: CLOSE until
   something changes (a new profile starts on SAVE).
     student  Name · Birthday (optional) · Male/Female (optional) · Grade · Theme Color
     parent   Name · Theme Color · their own PIN
   Paul on the birthday: "they can choose not to add the age and it should be
   an optional feature." Male/Female is optional the same way; tapping the
   chosen one again clears it, like the grade chips.
   ⚠️ The birthday is three number boxes, MM DD YYYY, not <input type=date>:
   that one opens the phone's own picker, which Paul has rejected before for
   the voice dropdown. */
function adEdit(H,row,kindIn){
  var kind=row?row.kind:kindIn;
  var isKid=kind==="student";
  adFrame(H,row?"Edit Profile":(isKid?"Add Student":"Add Parent"),row?adProfiles:adAddPick,"edit");
  var used=(adKids||[]).map(function(k){ return k.theme; });
  var fresh=AD_THEMES.filter(function(t){ return used.indexOf(t.k)<0; })[0]||AD_THEMES[0];
  var bd=row&&row.birthday?String(row.birthday).split("-"):["","",""];
  var f={name:row?row.name:"",grade:row?row.grade||"":"",theme:row?row.theme:fresh.k,gender:row?row.gender||"":""};
  function chips(attr,list,cur,label,cls){
    return "<div class='ad-chips"+(cls?" "+cls:"")+"' role='group' aria-label='"+label+"'>"+list.map(function(g){
      return "<button type='button' data-"+attr+"='"+g[0]+"' aria-pressed='"+(cur===g[0])+"'>"+g[1]+"</button>";
    }).join("")+"</div>";
  }
  H.body.innerHTML=
    "<div class='ad-hi ad-edit-av'>"+adAv(f.name||"?",f.theme)+"</div>"+
    "<p class='ad-cap'>Name</p>"+
    "<label class='ad-kv'><span>Name</span><input class='ad-in' data-f='name' maxlength='30' autocomplete='off' value='"+adEsc(f.name)+"'></label>"+
    (isKid?
      "<p class='ad-cap'>Birthday <em class='ad-opt'>Optional</em></p>"+
      "<div class='ad-kv ad-bday'><span>Birthday</span><span>"+
        "<input class='ad-in' data-f='mm' inputmode='numeric' maxlength='2' placeholder='MM' aria-label='Birth month' value='"+adEsc(bd[1]||"")+"'>/"+
        "<input class='ad-in' data-f='dd' inputmode='numeric' maxlength='2' placeholder='DD' aria-label='Birth day' value='"+adEsc(bd[2]||"")+"'>/"+
        "<input class='ad-in ad-yyyy' data-f='yy' inputmode='numeric' maxlength='4' placeholder='YYYY' aria-label='Birth year' value='"+adEsc(bd[0]||"")+"'>"+
      "</span></div>"+
      "<p class='ad-cap'>Male or Female <em class='ad-opt'>Optional</em></p>"+
      /* Centred - Paul, 2026-09-11: "that male and female choice if you can
         center it", then "center also the grade level k-8". The color row
         was not named and stays left. */
      chips("gender",[["male","Male"],["female","Female"]],f.gender,"Male or female","is-center")+
      "<p class='ad-cap'>Grade Level</p>"+
      chips("grade",AD_GRADES.map(function(g){ return [g,g]; }),f.grade,"Grade level","is-center")
    :"")+
    "<p class='ad-cap'>Theme Color · <span data-tname>"+adEsc((adTheme(f.theme)||{}).name||"")+"</span></p>"+
    "<div class='ad-sw' role='group' aria-label='Theme color'>"+AD_THEMES.map(function(t){
      return "<button type='button' style='background:"+t.box+"' data-theme-k='"+t.k+"' aria-label='"+t.name+"' title='"+t.name+"' aria-pressed='"+(f.theme===t.k)+"'></button>";
    }).join("")+"</div>"+
    "<p class='ad-note'>Colors "+(f.name?adEsc(f.name)+"&#39;s":"their")+" profile box, the buttons and the menu bar while they&#39;re on.</p>"+
    (!isKid&&row?"<p class='ad-cap'>PIN</p><button class='ad-kv ad-go' type='button' data-pin><span>PIN</span><span class='ad-dim'>"+
      (adHasPin(row.id)?"On":"Not set")+"<i aria-hidden='true'>&rsaquo;</i></span></button>":"")+
    "<p class='ad-msg'></p>"+
    (row?"<button class='ad-signout ad-del' type='button' data-del>"+(isKid?"Remove Student":"Remove Parent")+"</button>":"");
  var q=function(s){ return H.body.querySelector(s); };
  var msg=q(".ad-msg"),nameIn=q("[data-f=name]"),big=q(".ad-edit-av");
  function paintBig(){ big.innerHTML=adAv(nameIn.value.trim()||"?",f.theme); }
  function dirty(){ if(H.save) return; H.save=doSave; if(H.x){ H.x.textContent="Save"; H.x.hidden=false; } }
  H.body.querySelectorAll(".ad-in").forEach(function(i){
    i.addEventListener("input",function(){
      if(i!==nameIn) i.value=i.value.replace(/[^0-9]/g,"");
      paintBig(); dirty();
    });
    i.addEventListener("keydown",function(e){ if(e.key==="Enter"){ e.preventDefault(); if(H.save) H.save(); } });
  });
  function chipGroup(attr,field){
    H.body.querySelectorAll("[data-"+attr+"]").forEach(function(b){
      b.onclick=function(){
        var v=b.getAttribute("data-"+attr); f[field]=f[field]===v?"":v;
        H.body.querySelectorAll("[data-"+attr+"]").forEach(function(x){ x.setAttribute("aria-pressed",x.getAttribute("data-"+attr)===f[field]); });
        dirty();
      };
    });
  }
  chipGroup("grade","grade"); chipGroup("gender","gender");
  H.body.querySelectorAll("[data-theme-k]").forEach(function(b){
    b.onclick=function(){
      f.theme=b.getAttribute("data-theme-k");
      H.body.querySelectorAll("[data-theme-k]").forEach(function(x){ x.setAttribute("aria-pressed",x===b); });
      q("[data-tname]").textContent=(adTheme(f.theme)||{}).name||"";
      paintBig(); dirty();
    };
  });
  /* 🎂 THE BIRTHDAY BOXES MOVE ON THEIR OWN. Paul, 2026-09-11: "make it so it
     tabs over automatically i have to click the next row just to put day and
     year. then also backspace needs to remove each section."
     - A box that is FULL moves to the next: 2 digits, or 1 digit that cannot
       start a 2-digit value (month 2-9, day 4-9). A typed "/" also moves on.
     - Backspace in an EMPTY box goes back one and removes its last digit, so
       holding it down clears the whole date without a click. */
  var BD=["mm","dd","yy"].map(function(k){ return q("[data-f="+k+"]"); }).filter(Boolean);
  BD.forEach(function(inp,n){
    var next=BD[n+1],prev=BD[n-1];
    function full(v){
      if(n===2) return false;
      return v.length>=2||(v.length===1&&+v>(n===0?1:3));
    }
    inp.addEventListener("input",function(){
      if(next&&full(inp.value)){ next.focus(); next.select(); }
    });
    inp.addEventListener("keydown",function(e){
      if((e.key==="/"||e.key==="-"||e.key===".")&&next){ e.preventDefault(); if(inp.value) { next.focus(); next.select(); } return; }
      if(e.key==="Backspace"&&!inp.value&&prev){
        e.preventDefault();
        prev.focus();
        prev.value=prev.value.slice(0,-1);
        prev.dispatchEvent(new Event("input",{bubbles:true}));
        var L=prev.value.length; try{ prev.setSelectionRange(L,L); }catch(x){}
      }
    });
  });
  var pinRow=q("[data-pin]");
  if(pinRow) pinRow.onclick=function(){ adPinView(H,"change",{key:row.id,name:row.name}); };
  /* "" when left blank, the ISO date when whole, null when half filled in. */
  function birthday(){
    if(!isKid) return "";
    var m=q("[data-f=mm]").value,d=q("[data-f=dd]").value,y=q("[data-f=yy]").value;
    if(!m&&!d&&!y) return "";
    if(!m||!d||y.length!==4) return null;
    var iso=y+"-"+("0"+m).slice(-2)+"-"+("0"+d).slice(-2),dt=new Date(iso+"T00:00:00");
    if(isNaN(dt)||dt.getDate()!==+d||dt.getMonth()+1!==+m) return null;
    return iso;
  }
  var busy=false;
  var doSave=function(){
    if(busy) return;
    var name=nameIn.value.trim(),b=birthday();
    if(!name){ msg.textContent="Give the profile a name."; nameIn.focus(); return; }
    if(b===null){ msg.textContent="Finish the birthday as MM / DD / YYYY, or leave it blank."; return; }
    if(b&&new Date(b+"T00:00:00")>new Date()){ msg.textContent="Check the birthday. It can't be in the future."; return; }
    busy=true; msg.textContent="Saving…";
    var body={name:name,theme:f.theme,grade:isKid?f.grade:null,gender:isKid?f.gender:null,birthday:b||null,kind:kind};
    var job=row?NSAccount.updateStudent(row.id,body):NSAccount.addStudent(body);
    job.then(function(saved){
      busy=false;
      if(!saved) throw new Error("Could not save that profile.");
      var firstKid=!row&&isKid&&adOf("student").length===0;
      if(row) adKids=adKids.map(function(k){ return k.id===saved.id?saved:k; });
      else adKids=(adKids||[]).concat([saved]);
      /* The profile that is ON right now changed its theme: carry it. */
      if(row&&NSAccount.who()===row.id) adSetWho(row.id); else nsWhoIcon();
      /* A NEW PARENT is offered their own PIN straight away. The FIRST student
         is the moment the account holder's PIN starts to matter. Both have a
         Not Now - it is the grown-up's call. */
      if(!row&&!isKid) adPinView(H,"first",{key:saved.id,name:saved.name,forParent:true});
      else if(firstKid&&!adHasPin(null)) adPinView(H,"first",{key:null,name:adMe(),kid:saved.name});
      else adProfiles(H);
    }).catch(function(e){ busy=false; msg.textContent=e.message||"Could not save that profile."; });
  };
  if(!row){ H.save=doSave; if(H.x){ H.x.textContent="Save"; H.x.hidden=false; } nameIn.focus(); }
  var del=q("[data-del]");
  if(del) del.onclick=function(){ adRemove(H,row); };
}
/* 🗑️ REMOVE A PROFILE: ITS OWN WARNING SCREEN. Paul, 2026-09-11: "you need a
   way to remove a student so you can deactivate their account and it gives a
   warning it will wipe their progress." A student's progress goes with the
   row (on delete cascade), so the warning says so in plain words before the
   red button is even on screen.
   ⚠️ Never a browser confirm(): it freezes the page for anything automated
   and looks nothing like the rest of the panel. */
function adRemove(H,row){
  var isKid=row.kind==="student",n=adEsc(row.name);
  adFrame(H,isKid?"Remove Student":"Remove Parent",function(){ adEdit(H,row); },"remove");
  H.body.innerHTML="<div class='ad-hi ad-edit-av'>"+adAv(row.name,row.theme)+"</div>"+
    "<div class='ad-warn'><b>This can&#39;t be undone.</b>"+
    (isKid?"<p>Removing "+n+" deletes their profile and <strong>wipes all of their progress</strong>: every lesson they&#39;ve finished and every score.</p>":
           "<p>Removing "+n+" deletes their profile and their PIN.</p>")+
    "<p>Your orders and downloads are not affected.</p></div>"+
    "<p class='ad-msg'></p>"+
    "<button class='ad-danger' type='button' data-yes>Remove "+n+"</button>"+
    "<button class='ad-link' type='button' data-no>Cancel</button>";
  var msg=H.body.querySelector(".ad-msg"),yes=H.body.querySelector("[data-yes]");
  H.body.querySelector("[data-no]").onclick=function(){ adEdit(H,row); };
  yes.onclick=function(){
    yes.disabled=true; yes.textContent="Removing…";
    NSAccount.deleteStudent(row.id).then(function(){
      adKids=adKids.filter(function(k){ return k.id!==row.id; });
      if(adPins) delete adPins[row.id];
      nsWhoIcon(); adProfiles(H);
    }).catch(function(e){ yes.disabled=false; yes.textContent="Remove "+row.name; msg.textContent=e.message; });
  };
}
/* 🔢 THE PIN PAD. Four boxes over one real input, so a phone shows its number
   keyboard and paste works. Modes:
     unlock  a student tapped the parent's box
     first   straight after the first student is added (skippable)
     change  from Manage Profiles; asks the current PIN first
     reset   after Forgot PIN? proved the password; no current PIN needed
   A set is always typed twice. Five wrong tries lock it for five minutes on
   the SERVER (migration 013), not here. */
function adPinView(H,mode,ctx){
  ctx=ctx||{};
  /* ctx.key = WHICH parent: null for the account holder, else their row id.
     ctx.name = that parent's name, so the words say whose PIN it is. */
  var key=ctx.key||null,who=ctx.name||"your";
  var up=mode==="unlock"?adMain:adProfiles;
  var steps=mode==="unlock"?["check"]:(mode==="change"&&adHasPin(key)?["old","new","again"]:["new","again"]);
  var i=0,vals={};
  var WORDS={
    check:"Enter "+who+"'s PIN to open their profile.",
    old:"Enter "+who+"'s current PIN.",
    "new":mode==="first"?(ctx.forParent?"Set a 4-number PIN for "+who+". Students will need it to open "+who+"'s profile.":
      "Set a 4-number PIN for "+who+". "+(ctx.kid||"Your student")+" will need it to get back to your profile."):
      "Pick a new 4-number PIN for "+who+".",
    again:"Type the same PIN again."
  };
  function draw(note){
    adFrame(H,mode==="unlock"?"Enter PIN":"Parent/Teacher PIN",up,"pin");
    H.body.innerHTML="<p class='ad-empty ad-mid'>"+adEsc(WORDS[steps[i]])+"</p>"+
      "<div class='ad-pinbox'><span></span><span></span><span></span><span></span>"+
      "<input type='password' inputmode='numeric' pattern='[0-9]*' maxlength='4' autocomplete='off' aria-label='PIN'></div>"+
      "<p class='ad-msg'>"+adEsc(note||"")+"</p>"+
      (mode==="unlock"||steps[i]==="old"?"<button class='ad-link' type='button' data-forgot>Forgot PIN?</button>":"")+
      (mode==="first"?"<button class='ad-link' type='button' data-skip>Not Now</button>":"");
    var box=H.body.querySelector(".ad-pinbox"),inp=box.querySelector("input"),
        dots=box.querySelectorAll("span"),msg=H.body.querySelector(".ad-msg");
    function paint(){ dots.forEach(function(d,j){ d.classList.toggle("is-on",j<inp.value.length); d.classList.toggle("is-cur",j===inp.value.length); }); }
    inp.addEventListener("input",function(){
      inp.value=inp.value.replace(/[^0-9]/g,"").slice(0,4); paint();
      if(inp.value.length===4) done(inp.value);
    });
    function wrong(t){ inp.value=""; paint(); msg.textContent=t; box.classList.remove("is-shake"); void box.offsetWidth; box.classList.add("is-shake"); inp.focus(); }
    function done(v){
      var step=steps[i];
      if(step==="check"){
        inp.disabled=true; msg.textContent="Checking…";
        NSAccount.checkPin(v,key).then(function(ok){
          inp.disabled=false;
          if(ok===true){ adSetWho(key||"parent"); adMain(H); }
          else wrong("That PIN isn't right. Try again.");
        }).catch(function(e){ inp.disabled=false; wrong(e.message); });
        return;
      }
      if(step==="again"&&v!==vals["new"]){ i=steps.indexOf("new"); vals={old:vals.old}; draw("Those didn't match. Start the new PIN again."); return; }
      vals[step]=v;
      if(i<steps.length-1){ i++; draw(); return; }
      inp.disabled=true; msg.textContent="Saving…";
      NSAccount.setPin(vals["new"],vals.old==null?null:vals.old,key).then(function(){
        adPins=adPins||{}; adPins[key||"owner"]=true; adProfiles(H);
      }).catch(function(e){
        inp.disabled=false;
        if(steps[0]==="old"){ i=0; vals={}; draw(e.message); } else wrong(e.message);
      });
    }
    paint(); inp.focus();
    var fg=H.body.querySelector("[data-forgot]"); if(fg) fg.onclick=function(){ adForgotPin(H,ctx); };
    var sk=H.body.querySelector("[data-skip]"); if(sk) sk.onclick=function(){ adProfiles(H); };
  }
  draw();
}
/* FORGOT PIN? The Netflix route: prove it is the parent with the account
   PASSWORD, then pick a new PIN. set_pin() accepts a new PIN without the old
   one only when the login token says a password sign-in happened in the last
   ten minutes, so this signs in again rather than trusting the page. */
function adForgotPin(H,ctx){
  adFrame(H,"Forgot PIN",adMain,"pin");
  var em=adUser&&adUser.email||"";
  /* The ACCOUNT password resets either parent's PIN: whoever holds the
     password holds the account (migration 014, set_pin). */
  H.body.innerHTML="<p class='ad-empty ad-mid'>Sign in with the account password to pick a new PIN"+
    (ctx&&ctx.name?" for "+adEsc(ctx.name):"")+".</p>"+
    "<div class='ad-kv'><span>Email</span><span>"+adEsc(em)+"</span></div>"+
    "<label class='ad-kv'><span>Password</span><input class='ad-in' type='password' data-f='pw' autocomplete='current-password'></label>"+
    "<p class='ad-msg'></p><button class='ad-link' type='button' data-go-pw>Continue</button>";
  var pw=H.body.querySelector("[data-f=pw]"),msg=H.body.querySelector(".ad-msg");
  function go(){
    if(!pw.value){ msg.textContent="Type your password."; pw.focus(); return; }
    msg.textContent="Checking…";
    NSAccount.logIn(em,pw.value).then(function(){
      NSAccount.pickerShown(); nsWhoIcon();
      adPinView(H,"reset",ctx);
    }).catch(function(e){ msg.textContent=e.message||"That password isn't right."; });
  }
  H.body.querySelector("[data-go-pw]").onclick=go;
  pw.addEventListener("keydown",function(e){ if(e.key==="Enter"){ e.preventDefault(); go(); } });
  pw.focus();
}
/* 🧒 THE NAV ICON SHOWS WHO IS ON, like Netflix's top-right avatar. The
   parent (or signed out) keeps the plain person icon; a student shows their
   own coloured box. */
var AD_ICON=acctLink?acctLink.innerHTML:"";
function nsWhoIcon(){
  nsApplyAccent();
  if(!acctLink||!window.NSAccount) return;
  var k=NSAccount.isSignedIn()?adActive():null;
  if(k&&k!==AD_PENDING){
    var t=adTheme(k.theme);
    acctLink.innerHTML="<span class='nv-av'"+(t?" style='background:"+t.box+"'":"")+" aria-hidden='true'>"+adEsc(k.name.charAt(0).toUpperCase())+"</span>";
    acctLink.setAttribute("aria-label","Account, "+k.name);
  } else if(acctLink.innerHTML!==AD_ICON){
    acctLink.innerHTML=AD_ICON; acctLink.setAttribute("aria-label","Account");
  }
}
/* ⚙️ SETTINGS. Night Mode today - the same data-mode-toggle switch as the
   drawer and the footer, so all three stay in step. */
function adSettings(H){
  adFrame(H,"Settings",adMain,"settings");
  H.body.innerHTML="<p class='ad-cap'>Display</p>"+
    "<div class='ad-kv'><span>Theme</span>"+
    "<button class='mswitch' type='button' data-mode-toggle aria-label='Switch between day and night'>"+
    "<span class='mswitch-track'><span class='mswitch-knob'></span></span>"+
    "<span data-mode-label>Night Mode</span></button></div>";
  if(typeof nsPaintMode==="function") nsPaintMode();
}
function adList(H){
  adFrame(H,"Orders",adMain,"orders");
  if(!adOrders||!adOrders.length){
    H.body.innerHTML="<p class='ad-empty'>"+(adOrders?"No orders yet. Everything on this site goes through the "+
      "cart, free sheets included, so each one shows up here once you check out.":"Loading…")+"</p>";
    return;
  }
  H.body.innerHTML=adOrders.map(function(o,i){
    return "<button class='ad-ord' type='button' data-go='order' data-i='"+i+"'><span class='ad-ord-t'>"+
      "<b>"+adTitle(o)+"</b><span>"+adDate(o.when)+" &middot; "+nsMoney(o.total)+"</span>"+
      "<span class='ad-ths'>"+o.rows.map(function(r){
        var it=AD_ITEMS[r.product];
        return it&&it.th?"<img src='"+it.th+"' alt='' width='42' height='42' loading='lazy'>":"<i></i>";
      }).join("")+"</span></span><span class='ad-chev' aria-hidden='true'>&rsaquo;</span></button>";
  }).join("");
}
function adOrder(H,i){
  var o=adOrders&&adOrders[i]; if(!o) return adList(H);
  adFrame(H,adTitle(o),adList,"order");
  var items=o.rows.map(function(r){
    var it=AD_ITEMS[r.product]||{};
    var paid=(r.amount_cents||0)>0;
    /* Paid: the Worker, with this row's own token. Free: the printable page,
       where Print and Download live. Same two routes as the order page. */
    var href=paid?AD_WORKER+"/download?t="+encodeURIComponent(r.token):(it.open||"");
    return "<div class='ad-item'><div class='ad-item-t'><b>"+adEsc(r.title||r.product)+"</b>"+
      "<span>"+nsMoney(r.amount_cents)+"</span></div><span class='ad-q'>Qty: 1</span>"+
      (href?"<a class='ad-dl' href='"+href+"'"+(paid?"":" target='_blank' rel='noopener'")+">"+
        (paid?"Download item":"Open item")+"<span aria-hidden='true'>&rsaquo;</span></a>":"")+"</div>";
  }).join("");
  H.body.innerHTML=
    "<div class='ad-kv'><span>Order Date</span><span>"+adDate(o.when,true)+"</span></div>"+
    "<div class='ad-kv'><span>Status</span><span>Completed</span></div>"+
    "<p class='ad-cap'>Items</p>"+items+
    "<p class='ad-cap'>Summary</p>"+
    "<div class='ad-kv'><span>Subtotal</span><span>"+nsMoney(o.total)+"</span></div>"+
    "<div class='ad-kv'><span>Tax</span><span>"+nsMoney(0)+"</span></div>"+
    "<div class='ad-kv ad-tot'><span>Total</span><span>"+nsMoney(o.total)+"</span></div>";
}
/* ACCOUNT: name, email, password. Was "Profile" until Paul's 2026-09-10
   order, where Manage Profiles means the students. */
function adProfile(H){
  adFrame(H,"Account",adMain,"account");
  var md=(adUser&&adUser.user_metadata)||{};
  H.body.innerHTML=
    "<p class='ad-cap'>Name</p>"+
    "<label class='ad-kv'><span>First</span><input class='ad-in' data-f='first' autocomplete='given-name' value='"+adEsc(md.first_name||"")+"'></label>"+
    "<label class='ad-kv'><span>Last</span><input class='ad-in' data-f='last' autocomplete='family-name' value='"+adEsc(md.last_name||"")+"'></label>"+
    /* 🚨 EMAIL AND PASSWORD ARE ROWS YOU PRESS, with a chevron, like the
       Lizzie Peirce profile. Paul, 2026-09-10: "i cant change the email and
       password. we can also verify the email like on lizzie website. password
       will open the box to update password like the reset does by email."
       Email -> a box for the new address; SAVE emails a confirm link to it and
       nothing changes until it is pressed. VERIFIED shows once confirmed.
       Password -> the same New / Re-type pair the reset screen uses. */
    "<p class='ad-cap'>Email</p>"+
    "<button class='ad-kv ad-go' type='button' data-open='em'><span>Email</span><span class='ad-dim'>"+
      adEsc(adUser&&adUser.email||"")+
      (adUser&&adUser.email_confirmed_at?" <em class='ad-ok'>Verified</em>":"")+
      "<i aria-hidden='true'>&rsaquo;</i></span></button>"+
    (adUser&&adUser.new_email?"<p class='ad-note'>Waiting on the confirm link sent to "+adEsc(adUser.new_email)+
      ". Until it is pressed you still sign in with the address above.</p>":"")+
    "<div class='ad-open hidden' data-box='em'>"+
      "<input class='ad-in ad-box' type='email' data-f='em' autocomplete='email' placeholder='New Email' aria-label='New email'></div>"+
    "<p class='ad-cap'>Password</p>"+
    "<button class='ad-kv ad-go' type='button' data-open='pw'><span>Password</span><span class='ad-dim'>"+
      "&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;<i aria-hidden='true'>&rsaquo;</i></span></button>"+
    "<div class='ad-open hidden' data-box='pw'>"+
      "<input class='ad-in ad-box' type='password' data-f='pw1' autocomplete='new-password' placeholder='New Password' aria-label='New password'>"+
      "<input class='ad-in ad-box' type='password' data-f='pw2' autocomplete='new-password' placeholder='Re-type New Password' aria-label='Re-type new password'>"+
      "</div>"+
    "<p class='ad-msg'></p>";
  var q=function(s){ return H.body.querySelector(s); };
  var msg=q(".ad-msg"),first=q("[data-f=first]"),lastIn=q("[data-f=last]"),
      em=q("[data-f=em]"),pw1=q("[data-f=pw1]"),pw2=q("[data-f=pw2]");
  /* A row opens its box; pressing it again closes it and forgets what was
     typed there, so a half-typed password cannot ride along with a name save. */
  H.body.querySelectorAll("[data-open]").forEach(function(row){
    row.onclick=function(){
      var box=q("[data-box="+row.getAttribute("data-open")+"]");
      var opening=box.classList.contains("hidden");
      box.classList.toggle("hidden",!opening);
      row.classList.toggle("is-open",opening);
      if(opening){ var i=box.querySelector("input"); if(i) i.focus(); }
      else box.querySelectorAll("input").forEach(function(i){ i.value=""; });
    };
  });
  /* ONE SAVE, in the header: the name if it changed, and the new password if
     one was typed. Enter in a field does the same. Nothing saves on its own.
     Paul: "its after you change your details it says save then it switches to
     close." So Profile opens on CLOSE, the first change turns it into SAVE, and
     a good save turns it back (on the page, where there is no CLOSE, it hides). */
  function saved(){
    H.save=null;
    if(H.x){ H.x.textContent=H.xLabel; H.x.hidden=!H.xLabel; }
  }
  function dirty(){
    if(H.save) return;
    H.save=doSave;
    if(H.x){ H.x.textContent="Save"; H.x.hidden=false; }
  }
  var doSave=function(){
    var f=first.value.trim(),l=lastIn.value.trim(),a=pw1.value,b=pw2.value;
    var newEm=em.value.trim().toLowerCase(),oldEm=String(adUser&&adUser.email||"").toLowerCase();
    var nameChanged=f!==(md.first_name||"")||l!==(md.last_name||"");
    var pwTyped=a.length||b.length;
    var emTyped=newEm.length>0&&newEm!==oldEm;
    if(emTyped&&!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(newEm)){ msg.textContent="Type the new email address in full."; return; }
    if(pwTyped&&a.length<8){ msg.textContent="Pick a password with at least 8 characters."; return; }
    if(pwTyped&&a!==b){ msg.textContent="The two passwords do not match."; return; }
    if(!nameChanged&&!pwTyped&&!emTyped){ msg.textContent="Nothing to save yet."; return; }
    msg.textContent="Saving…";
    var jobs=[],said=[];
    if(nameChanged) jobs.push(NSAccount.updateProfile(f,l).then(function(u){
      md.first_name=f; md.last_name=l;
      if(u&&u.user_metadata) adUser=u; else if(adUser){ adUser.user_metadata=md; }
      said.push("Name saved.");
    }));
    if(pwTyped) jobs.push(NSAccount.newPassword(a).then(function(){
      pw1.value=pw2.value=""; q("[data-box=pw]").classList.add("hidden");
      said.push("Password saved.");
    }));
    if(emTyped) jobs.push(NSAccount.changeEmail(newEm).then(function(u){
      if(u&&u.id) adUser=u;
      em.value=""; q("[data-box=em]").classList.add("hidden");
      said.push("Check your email: press the link we sent to "+newEm+" to finish the change.");
    }));
    Promise.all(jobs).then(function(){
      msg.textContent=said.join(" ");
      saved();
    }).catch(function(e){ msg.textContent=e.message||"Could not save that. Try again."; });
  };
  H.body.querySelectorAll(".ad-in").forEach(function(i){
    i.addEventListener("input",dirty);
    i.addEventListener("keydown",function(e){ if(e.key==="Enter"){ e.preventDefault(); if(H.save) H.save(); } });
  });
}
/* Repaint whichever hosts are showing something the new data changes. A host
   the reader has moved into (an order, their profile) is left where it is. */
function adRefresh(){
  adHosts.forEach(function(H){
    if(H.view==="main") adMain(H); else if(H.view==="orders") adList(H);
    else if(H.view==="profiles") adProfiles(H);
  });
}
function adLoad(){
  if(adLoading) return; adLoading=true;
  var a=NSAccount.getUser().then(function(u){ adUser=u; adRefresh(); }).catch(function(){});
  var b=NSAccount.myDownloads().then(function(rows){ adOrders=adGroup(rows||[]); adRefresh(); })
    .catch(function(){ adOrders=[]; adRefresh(); });
  var c=NSAccount.students().then(function(k){ adKids=k||[]; adRefresh(); nsWhoIcon(); })
    .catch(function(){ adKids=[]; adRefresh(); nsWhoIcon(); });
  var d=NSAccount.pinMap().then(function(p){ adPins=p||{}; adRefresh(); })
    .catch(function(){ adPins={}; });
  Promise.all([a,b,c,d]).then(function(){ adLoading=false; });
}
/* ── "WHO'S LEARNING?" (2026-09-11) ─────────────────────────────────────────
   Paul picked it: a full-screen picker once after sign-in, like Netflix's
   "Who's watching?". Shown only when there is more than one profile to pick;
   an account holder on their own goes straight on. Parents first, then
   students. Whoever is here just typed the PASSWORD, which can reset any PIN,
   so no tile asks for one here and none carries a padlock.
   Built in JS, once, the same way the card window is: nothing to render for a
   static page that does not know who is signed in. */
function nsWhoPicker(){
  if(!window.NSAccount||!NSAccount.wantsPicker()) return;
  NSAccount.pickerShown();
  Promise.all([NSAccount.getUser(),NSAccount.students(),NSAccount.pinMap().catch(function(){ return {}; })]).then(function(r){
    var rows=r[1]||[];
    if(!rows.length) return;
    adUser=adUser||r[0]; adKids=rows; adPins=r[2]||{};
    var me=adMe();
    function tile(id,name,theme){
      return "<button type='button' class='whop-i' data-who='"+adEsc(id)+"'>"+adAv(name,theme)+"<b>"+adEsc(name)+"</b></button>";
    }
    var o=document.createElement("div");
    o.className="whop"; o.setAttribute("role","dialog"); o.setAttribute("aria-modal","true");
    o.setAttribute("aria-labelledby","whopH");
    o.innerHTML="<div class='whop-in'><h2 id='whopH'>Who&#39;s learning?</h2><div class='whop-row'>"+
      tile("parent",me,null)+
      adOf("parent").map(function(p){ return tile(p.id,p.name,p.theme); }).join("")+
      adOf("student").map(function(k){ return tile(k.id,k.name,k.theme); }).join("")+
      "</div><button type='button' class='whop-manage' data-manage>Manage Profiles</button></div>";
    document.body.appendChild(o);
    nsLockScroll(true);
    requestAnimationFrame(function(){ o.classList.add("is-in"); });
    function close(){ o.remove(); nsLockScroll(false); nsWhoIcon(); }
    o.addEventListener("click",function(e){
      var b=e.target.closest("[data-who]");
      if(b){
        var id=b.getAttribute("data-who");
        adSetWho(id); close();
        /* A student has no use for the account panel a sign-in opens. */
        if(!adParentSide(adActive())) adOpen(false); else if(adD) adMain(adD);
        return;
      }
      if(e.target.closest("[data-manage]")){
        adSetWho("parent"); close();
        if(adD){ adProfiles(adD); adLoad(); adOpen(true); }
      }
    });
    addEventListener("keydown",function esc(e){
      if(e.key!=="Escape"||!o.isConnected) return;
      removeEventListener("keydown",esc); close();
    });
    var first=o.querySelector(".whop-i"); if(first) first.focus();
  }).catch(function(){});
}
function adWire(H){
  adHosts.push(H);
  H.back.onclick=function(){ if(H.up) H.up(H); };
  /* Save on Profile; otherwise the drawer's CLOSE. */
  if(H.x) H.x.onclick=function(){ if(H.save) H.save(); else if(H===adD) adOpen(false); };
  H.body.addEventListener("click",function(e){
    if(e.target.closest("[data-out]")){ NSAccount.signOut(); location.reload(); return; }
    var w=e.target.closest("[data-who]");
    if(w){ adSwitch(H,w.getAttribute("data-who")); nsWhoIcon(); return; }
    var b=e.target.closest("[data-go]"); if(!b) return;
    var g=b.getAttribute("data-go");
    /* 🚨 PARENT-SIDE VIEWS REFUSE A STUDENT. The student panel draws no row
       for them, but a stale view or a console click must not open one. */
    if(g!=="settings"&&!adParentSide(adActive())) return adMain(H);
    if(g==="orders") adList(H);
    else if(g==="profiles") adProfiles(H);
    else if(g==="add") adAddPick(H);
    else if(g==="owner") adOwner(H);
    else if(g==="edit") adEdit(H,adKid(b.getAttribute("data-id")));
    else if(g==="settings") adSettings(H);
    else if(g==="account") adProfile(H);
    else if(g==="order") adOrder(H,+b.getAttribute("data-i"));
  });
  adMain(H);
}
var adD=adrawer?adHostOf(adrawer):null;
if(adD) adWire(adD);

/* 🚨 THE PANEL IS THE ACCOUNT. THERE IS NO SIGNED-IN ACCOUNT PAGE. Paul,
   2026-09-10: "there is still this card in the middle and it doesnt need to be
   here since we have its own panel in the account in the top right." Like the
   Lizzie Peirce /account, which is her home page with the panel open: a
   signed-in visit to /account/ is sent to /?panel=account, and this opens it.
   The query is stripped straight away so a reload or a shared link does not
   keep reopening it. */
if(adD&&window.NSAccount&&NSAccount.isSignedIn()&&/[?&]panel=account\\b/.test(location.search)){
  history.replaceState(null,"",location.pathname+location.hash);
  adMain(adD); adLoad(); adOpen(true);
}

if(adrawer&&acctLink){
  /* Signed out: the icon stays a plain link to the sign-in page. Signed in: it
     opens the panel. Modified clicks are left alone, as on the cart icon. */
  acctLink.addEventListener("click",function(e){
    if(!window.NSAccount||!NSAccount.isSignedIn()) return;
    if(e.button!==0||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey) return;
    e.preventDefault();
    adMain(adD);
    adLoad();
    adOpen(true);
  });
  ascrim.onclick=function(){ adOpen(false); };
  addEventListener("keydown",function(e){
    if(e.key==="Escape"&&document.body.classList.contains("acct-open")) adOpen(false);
  });
}
/* On every page: the picker after a fresh sign-in, and the nav icon for a
   student already on this device (it needs the list to know their colour). */
if(window.NSAccount&&NSAccount.isSignedIn()){
  nsWhoPicker();
  if(NSAccount.who()!=="parent"&&adKids===null){
    NSAccount.students().then(function(k){ if(adKids===null) adKids=k||[]; nsWhoIcon(); }).catch(function(){});
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

/* 🚨 `lesson-nav.css` WAS THE ONE STYLESHEET ON THE SITE WITH NO CACHE-BUSTER.
   Paul, 2026-09-09, on a fix that was live and correct: "did you fix the blue
   under writing good sentences i dont see it changed. perhaps you didnt push
   this yet." It WAS pushed. His browser was holding the old file, because every
   other stylesheet here is either hash-named or carries `?v=`, and this one was
   linked bare - and GitHub Pages caches CSS hard.
   That made every future edit to the lesson nav invisible to anyone who had
   already visited, with no error and no symptom except "you didn't push it".
   ⚠️ Keyed on the file's own CONTENTS, so it only changes when the CSS does. */
function navCssTag(ROOT) {
  const fs = require("fs"), path = require("path");
  const v = require("crypto").createHash("sha1")
    .update(fs.readFileSync(path.join(ROOT, "assets/lesson-nav.css")))
    .digest("hex").slice(0, 8);
  return '<link rel="stylesheet" href="/assets/lesson-nav.css?v=' + v + '">';
}

module.exports = { NAV, navCssTag, SUBJECTS, LIVE_GRADES, ALL_GRADES, MENUS, SHEETS, tabs, drawerLinks, drawerSubs, faviconTags,
                   megaPanel, navMarkup, navScript, modeSwitch, modeBoot, footerMarkup, FOOTER_COLS,
                   socialTags, breadcrumbLd, crumbTrail, lessonHead, SITE_ORIGIN };
