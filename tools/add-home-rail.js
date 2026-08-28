/* 🚨 THE HOME CAROUSEL WAS ENTIRELY FICTIONAL.

   Found on 2026-08-27 while adding the free section Paul asked for: all eight
   cards on the home page were mockup copy left over from the original design.
   "Long division with remainders", "Book report template", "Kitchen density
   experiment", "The Constitution, one page", "7th Grade Maths Quarter 1 - $9" -
   none of it exists, and not one card carried an href. The shelf a visitor
   lands on first advertised five products the site does not have and led
   nowhere.

   That is worse than the page being empty, and it is the sixth hand-written
   block on this page to go wrong. So the rail is GENERATED from the same
   registries that build every shelf: real titles, real thumbnails, real links,
   real prices. It cannot advertise something that does not exist, because it
   can only list what does.

   Paul, 2026-08-27: "we also need to start adding more things on our homepage
   especially like free worksheets and courses", and free goes first because six
   of the seven printables are free and the page never said so above the fold.

   ⚠️ The filter buttons were spliced too. They used data-f="ela" and "math"
   from before the ELA to English rename, and a filter whose token does not
   match the cards silently shows nothing. */
const fs = require("fs");
let s = fs.readFileSync("build-pages.js", "utf8");
let n = 0;
const sub = (a, b) => {
  if (!s.includes(a)) { console.error("MISS: " + a.slice(0, 62)); process.exitCode = 1; return; }
  s = s.replace(a, b); n++;
};

/* the builders, dropped in beside the other home-page splices */
sub("/* The grade picker, as its own page.", `/* ── THE HOME RAIL ────────────────────────────────────────────────────────
   Free first, then paid, so the strongest thing the site has leads. Only ever
   what exists - see tools/add-home-rail.js for what this replaced. */
const SUBJ_TOKEN = { English: "english", History: "history", Maths: "maths", Science: "science" };

const railCard = (x) => {
  const free = (x.price || "$0") === "$0";
  return '<a class="res" href="' + x.href + '" data-kind="' + (free ? "free" : "paid") +
    '" data-subject="' + (SUBJ_TOKEN[x.subject] || "") + '">' +
    '<div class="thumb">' +
    '<span class="badge ' + (free ? "free" : "paid") + '">' + (free ? "Free" : "Packet") + "</span>" +
    (x.thumb ? '<img src="' + x.thumb + '" alt="" loading="lazy" decoding="async">' : "<u>Preview</u>") +
    "</div>" +
    '<div class="body"><h4>' + x.title + "</h4>" +
    "<p>" + x.blurb + "</p>" +
    '<div class="meta"><span>' + x.meta + "</span><b>" +
    (free ? "Free" : x.price) + "</b></div></div></a>";
};

/* free first, then paid - the order IS the message */
const railCards = () => {
  const items = WORKSHEETS.slice().sort((a, b) => {
    const fa = (a.price || "$0") === "$0", fb = (b.price || "$0") === "$0";
    return fa === fb ? 0 : fa ? -1 : 1;
  });
  return items.map(railCard).join("\\n    ");
};

const railFilters = () => {
  const live = [...new Set(WORKSHEETS.map(w => w.subject))];
  return ['<button aria-pressed="true" data-f="all">Everything</button>',
    '<button aria-pressed="false" data-f="free">Free</button>',
    '<button aria-pressed="false" data-f="paid">Packets</button>']
    .concat(SUBJECTS.filter(s => live.includes(s.name))
      .map(s => '<button aria-pressed="false" data-f="' + SUBJ_TOKEN[s.name] + '">' + s.name + "</button>"))
    .join("\\n    ");
};

/* The grade picker, as its own page.`);

/* splice both blocks into the hand-written home page */
sub("  if (!newHome.includes(\"ns:ann\")) {", `  /* THE RAIL. Sentinel-delimited and REPLACED, never appended - the nav script
     taught us that an append-if-missing splice leaves the broken copy in place
     and looks like the fix did not work. */
  const R_OPEN = "<!-- ns:rail -->", R_END = "<!-- /ns:rail -->";
  const railBlock = R_OPEN + "\\n    " + railCards() + "\\n  " + R_END;
  if (newHome.includes(R_OPEN)) {
    newHome = newHome.replace(new RegExp(R_OPEN + "[\\\\s\\\\S]*?" + R_END), railBlock);
  } else {
    newHome = newHome.replace(/(<div class="rail rv d1" id="rail">)[\\s\\S]*?(\\n  <\\/div>)/,
      "$1\\n  " + railBlock + "$2");
  }

  const F_OPEN = "<!-- ns:filters -->", F_END = "<!-- /ns:filters -->";
  const filterBlock = F_OPEN + "\\n    " + railFilters() + "\\n  " + F_END;
  if (newHome.includes(F_OPEN)) {
    newHome = newHome.replace(new RegExp(F_OPEN + "[\\\\s\\\\S]*?" + F_END), filterBlock);
  } else {
    newHome = newHome.replace(/(<div class="filters rv" id="filters">)[\\s\\S]*?(\\n  <\\/div>)/,
      "$1\\n  " + filterBlock + "$2");
  }

  /* GUARD: the rail must hold only real, linked items. A card with no href is
     how the fictional shelf survived for months. */
  const cards = (newHome.match(/class="res"/g) || []).length;
  const linked = (newHome.match(/<a class="res" href="\\//g) || []).length;
  if (!cards || cards !== linked) {
    console.error("FAIL: home rail has " + cards + " cards but " + linked + " links");
    process.exit(1);
  }

  if (!newHome.includes("ns:ann")) {`);

fs.writeFileSync("build-pages.js", s, "utf8");
console.log("applied " + n + " of 2");
