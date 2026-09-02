#!/usr/bin/env node
/*
 * build-worksheets.js — render every printable worksheet from worksheets.js.
 *
 * One shell for all of them, same reason the inner pages have one: a fix
 * applied here reaches every sheet, and a sheet cannot quietly drift from its
 * siblings. Adding a worksheet means adding content to worksheets.js only.
 *
 *   node build-worksheets.js "<site root>"
 */
"use strict";
const fs = require("fs");
const path = require("path");
const { SHEETS } = require("./worksheets.js");
/* The same nav the site pages use. A worksheet lives under Worksheets, so it
   passes "w" and that tab shows as current. */
const { navMarkup, navScript , modeBoot, faviconTags } = require("./nav.js");
const HW = require("./handwriting/build-handwriting.js");

const ROOT = process.argv[2];
if (!ROOT) { console.error("usage: node build-worksheets.js <site root>"); process.exit(1); }
if (!fs.existsSync(path.join(ROOT, "assets/ns.css"))) {
  console.error("FAIL: assets/ns.css missing - sheets would render unstyled");
  process.exit(1);
}

/* Cache buster, same scheme as build-pages.js.
   BOTH stylesheets go into the hash. It used to hash ns.css alone and stamp
   that same ?v= on the worksheet.css link too, so a change to worksheet.css
   shipped behind an unchanged version string and every returning visitor kept
   the old one out of cache. GitHub Pages caches hard, so that is invisible
   locally and wrong in production. */
const CSS_V = require("crypto")
  .createHash("sha1")
  .update(fs.readFileSync(path.join(ROOT, "assets/ns.css")))
  .update(fs.readFileSync(path.join(ROOT, "assets/worksheet.css")))
  .digest("hex").slice(0, 8);

/* Print is the solid button and Download is the outlined one, in that order of
   weight: these are sheets whose whole purpose is to come out of a printer.
   Download is the second door, for saving the PDF once and printing it again
   later without coming back to the site. */
const ICON_PRINT ='<svg viewBox="0 0 20 20" width="15" height="15" aria-hidden="true" fill="currentColor"><path d="M6 3h8v3H6V3zm-3 5h14a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-2v-3H5v3H3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1zm3 6h8v3H6v-3z"/></svg>';
const ICON_DL = '<svg viewBox="0 0 20 20" width="15" height="15" aria-hidden="true" fill="currentColor"><path d="M9 2h2v7h3l-4 5-4-5h3V2zM3 15h14v3H3v-3z"/></svg>';

const lines = (n) => '<span class="lines">' + '<i></i>'.repeat(n) + '</span>';

const isPaid = (s) => (s.price || "$0") !== "$0";

/* The buy control. With a real Stripe Payment Link it is a button. Without
   one it says so plainly - never a placeholder URL, never a dead button. */
/* ─────────────────────────────────────────────────────────────────────────
   🚨 THE BACK LINK GOES TO THE GRADE SHELF, NOT THE SUBJECT-WIDE ONE.

   Paul, 2026-09-02, on opening the cursive sheet: "if I hit back from this
   worksheet the back button is English worksheets not what I wanted and I want
   it to go to 4th grade English worksheets. I don't know why you keep trying
   to combine all of the sheets together? this doesn't feel like a proper site."

   He is right, and it was the SAME bug the lesson template had on 2026-08-31,
   where every lesson said "History" because the back link was hardcoded. All
   six builders here carried an identical hardcoded /<subject>/worksheets/.

   The hierarchy the site is supposed to read as:
     4th Grade  ->  4th Grade English  ->  Worksheets  ->  this sheet
   so the way out of a sheet is the shelf you came in through.

   ⚠️ A sheet listed on SEVERAL grades (grades: [3, 7]) has no single shelf to
   return to, so it falls back to the subject page. That is the honest answer
   rather than picking one at random.
   ⚠️ FAILS THE BUILD if the target has no index.html - same discipline as
   build-lessons.js, because a back link to nowhere is worse than none. */
const gradeSlug = (g) => "grade-" + String(g).toLowerCase();
const gradeWord = (g) => (g === "K" || g === "k")
  ? "Kindergarten"
  : ({ 1: "1st", 2: "2nd", 3: "3rd" }[g] || g + "th") + " Grade";

function backLink(s) {
  const subjectSlug = s.subject.toLowerCase();
  const grades = s.grades && s.grades.length ? s.grades : [s.grade];
  let href, label;
  if (grades.length === 1 && grades[0] != null) {
    href = "/" + gradeSlug(grades[0]) + "/" + subjectSlug + "/worksheets/";
    label = gradeWord(grades[0]) + " " + s.subject + " Worksheets";
  } else {
    href = "/" + subjectSlug + "/worksheets/";
    label = s.subject + " Worksheets";
  }
  const target = path.join(ROOT, href.replace(/^\/|\/$/g, ""), "index.html");
  if (!fs.existsSync(target)) {
    console.error("FAIL: " + s.slug + " back link points at " + href +
      " but " + target + " does not exist.");
    process.exit(1);
  }
  return `<a class="back" href="${href}">&larr; ${label}</a>`;
}

function buyBlock(s) {
  if (s.buy) {
    return `<a class="btn buy" href="${s.buy}">Buy &mdash; ${s.price}</a>
      <p class="buynote">Secure checkout by Stripe. The download is emailed to you the moment payment clears.</p>`;
  }
  return `<span class="btn buy is-off" aria-disabled="true">${s.price} &mdash; Coming Soon</span>
      <p class="buynote">Not on sale yet. This page is the finished layout; checkout is wired once the units are complete.</p>`;
}

/* PAID PAGE. Only the preview paragraphs are emitted. The remaining reading,
   every question and every answer key are simply not in this file. Hiding
   them with CSS would ship them to anyone who opens the page source. */
function bundleHtml(s) {
  const subjectSlug = s.subject.toLowerCase();
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="canonical" href="https://nexstudents.org/worksheets/${s.subject.toLowerCase()}/${s.slug}/">
${modeBoot()}
${faviconTags()}
<title>${s.title} — NexStudents</title>
<meta name="description" content="${s.blurb}">
<link rel="stylesheet" href="/assets/ns.css?v=${CSS_V}">
<link rel="stylesheet" href="/assets/worksheet.css?v=${CSS_V}">
</head>
<body>

${navMarkup("w")}

<div class="bar">
  ${backLink(s)}
</div>

<div class="sheet">

  <div class="head">
    <p class="eyebrow">${s.subject} &middot; Grade ${s.grade} &middot; ${s.tagline}</p>
    <h1>${s.title}</h1>
    <p class="dek">${s.dek}</p>
  </div>

  <div class="buybar">
    <div class="buyleft">
      <span class="price">${s.price}</span>
      <span class="pricenote">One download &middot; yours to keep &middot; print as often as you like</span>
    </div>
    <div class="buyright">${buyBlock(s)}</div>
  </div>

  <h2>What You Get</h2>
  <ul class="gets">
    ${s.contains.map((c) => "<li>" + c + "</li>").join("\n    ")}
  </ul>

  <h2>The Five Units</h2>
  <ol class="units">
    ${s.units.map(([u, t]) => `<li><b>${u}</b><span>${t}</span></li>`).join("\n    ")}
  </ol>

  <h2>Sample &mdash; ${s.previewOf}</h2>
  <div class="passage preview">
    ${s.passage.map((x) => "<p>" + x + "</p>").join("\n    ")}
  </div>

  <div class="locked">
    <p class="lockhead">The rest is in the bundle</p>
    <p>This sample stops partway through one worksheet's reading. The full download continues it, and adds the vocabulary list, the five questions and the answer key for this sheet and fourteen others.</p>
    <ul>
      <li>The complete reading for all 15 worksheets</li>
      <li>90 vocabulary words with writing space</li>
      <li>75 questions, four of every five answerable from the text</li>
      <li>15 answer keys, each citing where the answer is found</li>
    </ul>
  </div>

  <div class="buybar bottom">
    <div class="buyleft">
      <span class="price">${s.price}</span>
      <span class="pricenote">Semester 1 &middot; 15 worksheets &middot; 15 answer keys</span>
    </div>
    <div class="buyright">${buyBlock(s)}</div>
  </div>

</div>
${navScript()}
</body>
</html>
`;
}

/* BLANK SHEET. A reusable sheet with nothing written on it: the parent supplies
   the words, the student fills the lines. It has no passage, no vocabulary and
   no answer key, so it takes the shell and the ruled lines and nothing else.

   The numbered lines run DOWN each column, not across the row, because a
   student reads 1-2-3-4-5 down the left before crossing to 6. The CSS grid
   fills across, so the markup is interleaved 1,6,2,7 to come out right. */
function blankHtml(s) {
  const subjectSlug = s.subject.toLowerCase();
  const half = Math.ceil(s.count / 2);
  const cells = [];
  for (let i = 0; i < half; i++) {
    cells.push(i + 1);
    if (i + half < s.count) cells.push(i + half + 1);
  }
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="canonical" href="https://nexstudents.org/worksheets/${s.subject.toLowerCase()}/${s.slug}/">
${modeBoot()}
${faviconTags()}
<title>${s.title} — NexStudents</title>
<meta name="description" content="${s.blurb}">
<link rel="stylesheet" href="/assets/ns.css?v=${CSS_V}">
<link rel="stylesheet" href="/assets/worksheet.css?v=${CSS_V}">
</head>
<body>

${navMarkup("w")}

<div class="bar">
  ${backLink(s)}
  <div class="acts">
    <button class="btn" type="button" onclick="window.print()" title="Print this sheet" aria-label="Print this sheet">
      ${ICON_PRINT}<span class="lbl">Print</span>
    </button>
    <a class="btn ghost" href="${s.slug}.pdf" download title="Save the PDF so you can print it again without coming back" aria-label="Download the PDF">
      ${ICON_DL}<span class="lbl">Download</span>
    </a>
  </div>
</div>

<div class="sheet">

  <div class="head">
    <p class="eyebrow">${s.subject} &middot; ${s.eyebrow}</p>
    <h1>${s.title}</h1>
    <p class="dek">${s.dek}</p>
  </div>

  <div class="namebar">
    <span>Name <u></u></span>
    <span>Date <u></u></span>
    <span>Week # <u style="min-width:58px"></u></span>
  </div>

  <h2 class="scored">${s.heading} <span class="pts"><u></u> / ${s.count}</span></h2>
  <ul class="words">
    ${cells.map((n) => `<li><b>${n}.</b><u></u></li>`).join("\n    ")}
  </ul>

  <div class="bonus">
    <div class="top">
      <h3>${s.bonus.label}</h3>
      <span class="pts"><u></u> / 1</span>
    </div>
    <p class="why">${s.bonus.why}</p>
    <div class="row"><b>${s.count + 1}.</b><u></u></div>
  </div>

  <div class="notes">
    <b>Notes</b>
    ${lines(s.notesLines)}
  </div>

  <p class="signoff"><em>${s.signoff}</em>
    <small>Copyright &copy; NexEdge Studios</small></p>

</div>
${navScript()}
</body>
</html>
`;
}

/* FLASHCARDS. One page holding every week, showing one at a time.
   36 near-identical cards on the shelf would be 36 things to scroll past for
   one thing to print, so the week is a control on the page instead: pick it,
   press Print, get that sheet. The PDF is built with ?print=all so the
   download is the whole year while the button stays one page. */
function flashHtml(s) {
  const subjectSlug = s.subject.toLowerCase();
  const { WEEKS } = require("./" + s.source);

  const picker = WEEKS.map((w) =>
    `<button type="button" data-wk="${w.n}" aria-pressed="${w.n === 1}">${w.n}</button>`
  ).join("\n    ");

  const sheets = WEEKS.map((w) => {
    /* The label card first, then the ten, then the bonus: twelve on a page. */
    const cards = [
      `<div class="fc label"><b>Week ${w.n}</b><span>${w.focus}</span></div>`,
      ...w.words.map((x) => `<div class="fc"><span>${x}</span></div>`),
      `<div class="fc is-bonus"><em>Bonus</em><span>${w.bonus}</span></div>`,
    ].join("\n      ");
    return `<section class="wk" data-wk="${w.n}"${w.n === 1 ? "" : " hidden"}>
    <h2 class="wkhead">Week ${w.n} Flashcards</h2>
    <p class="wkfocus">${w.focus}</p>
    <p class="cutline">&#9986;&#65039; Cut on the dashed lines &mdash; 12 cards:
      ${w.words.length} spelling words, 1 bonus, 1 week label.</p>
    <div class="cards">
      ${cards}
    </div>
  </section>`;
  }).join("\n  ");

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="canonical" href="https://nexstudents.org/worksheets/${s.subject.toLowerCase()}/${s.slug}/">
${modeBoot()}
${faviconTags()}
<title>${s.title} — NexStudents</title>
<meta name="description" content="${s.blurb}">
<link rel="stylesheet" href="/assets/ns.css?v=${CSS_V}">
<link rel="stylesheet" href="/assets/worksheet.css?v=${CSS_V}">
</head>
<body>

${navMarkup("w")}

<div class="bar">
  ${backLink(s)}
  <div class="acts">
    <button class="btn" type="button" onclick="window.print()" title="Print the week you picked" aria-label="Print this sheet">
      ${ICON_PRINT}<span class="lbl">Print</span>
    </button>
    <a class="btn ghost" id="dl" href="week-01.pdf" download title="Save the week you picked as a PDF" aria-label="Download this week">
      ${ICON_DL}<span class="lbl">Download</span>
    </a>
  </div>
</div>

<div class="sheet">

  <div class="head is-flash">
    <p class="eyebrow">${s.subject} &middot; ${s.eyebrow}</p>
    <h1>${s.title}</h1>
    <p class="dek">${s.dek}</p>
  </div>

  <div class="teach">
    <h3>Teaching note &mdash; marking words the McGuffey way</h3>
    <p>McGuffey&rsquo;s revised Readers printed marks so a student could <b>sound a word out</b>
      instead of memorising its shape. These cards are plain on purpose &mdash; mark them by hand,
      in front of your student, as you teach each word.</p>
    <p class="howto"><b>How to use them.</b> Hold up a card and have your student sound it out,
      then <b>write it three times in a row</b> while saying each sound. Work the stack through
      the week. On the last day, print the <b>Weekly Spelling Test</b> and read the words aloud
      to test what stuck.</p>
    <ul class="keys">
      <li><span class="eg">br<span class="mk long">a</span>ve</span>
        <span><b>Long vowel</b>says its own name</span></li>
      <li><span class="eg">l<span class="mk short">a</span>st</span>
        <span><b>Short vowel</b>the short sound</span></li>
      <li><span class="eg"><span class="sil">k</span>nife</span>
        <span><b>Silent letter</b>makes no sound</span></li>
    </ul>
  </div>
  <div class="weekpick" role="group" aria-label="Pick a week">
    ${picker}
  </div>

  <p class="allyear">Select your lesson, then print or download that week&rsquo;s sheet.
    <a href="${s.slug}.pdf" download>Or save all ${WEEKS.length} weeks as one file.</a></p>

  ${sheets}

</div>

<script>
/* Pick a week, print that week. Print takes whatever is on screen, so
   showing one week IS the print selection - no separate print setting to get
   out of step with what the parent is looking at.
   ?print=all is how the PDF build asks for every week at once. */
(function(){
  var qs = new URLSearchParams(location.search);
  var picks = document.querySelectorAll(".weekpick button");
  var weeks = document.querySelectorAll(".wk");
  var dl = document.getElementById("dl");

  /* ?print=all lays every week out at once. Only the PDF build asks for it. */
  if (qs.get("print") === "all") {
    document.body.classList.add("print-all");
    return;
  }

  function show(n){
    picks.forEach(function(x){ x.setAttribute("aria-pressed", x.dataset.wk === String(n)); });
    weeks.forEach(function(w){ w.hidden = w.dataset.wk !== String(n); });
    /* Download hands over the week on screen, not the whole year. A parent who
       picked week 4 and got 36 pages has been handed the wrong thing. */
    dl.setAttribute("href", "week-" + String(n).padStart(2, "0") + ".pdf");
  }

  picks.forEach(function(b){
    b.onclick = function(){ show(b.dataset.wk); scrollTo({ top: 0, behavior: "smooth" }); };
  });

  /* ?week=N picks a week from the address, which is how the per-week PDFs are
     built and how a link to one week can be shared. */
  var w = parseInt(qs.get("week"), 10);
  show(w >= 1 && w <= weeks.length ? w : 1);
})();
</script>
${navScript()}
</body>
</html>
`;
}

function sheetHtml(s) {
  const subjectSlug = s.subject.toLowerCase();
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="canonical" href="https://nexstudents.org/worksheets/${s.subject.toLowerCase()}/${s.slug}/">
${modeBoot()}
${faviconTags()}
<title>${s.title} — NexStudents</title>
<meta name="description" content="A printable grade ${s.grade} ${s.subject.toLowerCase()} worksheet. ${s.blurb}">
<link rel="stylesheet" href="/assets/ns.css?v=${CSS_V}">
<link rel="stylesheet" href="/assets/worksheet.css?v=${CSS_V}">
</head>
<body>

${navMarkup("w")}

<div class="bar">
  ${backLink(s)}
  <div class="acts">
    <button class="btn" type="button" onclick="window.print()" title="Print this sheet" aria-label="Print this sheet">
      ${ICON_PRINT}<span class="lbl">Print</span>
    </button>
    <a class="btn ghost" href="${s.slug}.pdf" download title="Save the PDF so you can print it again without coming back" aria-label="Download the PDF">
      ${ICON_DL}<span class="lbl">Download</span>
    </a>
  </div>
</div>

<div class="sheet">

  <div class="head">
    <p class="eyebrow">${s.subject} &middot; Grade ${s.grade} &middot; Worksheet</p>
    <h1>${s.title}</h1>
    <p class="dek">${s.dek}</p>
  </div>

  <div class="namebar">
    <span>Name <u></u></span>
    <span>Date <u></u></span>
    <span>Score <u></u></span>
  </div>
${s.art ? `
  <figure class="art">
    <img src="art.jpg" alt="">
  </figure>
` : ""}
  <h2>A Brief History</h2>
  <div class="passage">
    ${s.passage.map((p) => "<p>" + p + "</p>").join("\n    ")}
  </div>

${s.scripture ? `
  <h2>Biblical Connection</h2>
  <blockquote class="verse">
    <p>&ldquo;${s.scripture.text}&rdquo;</p>
    <cite>${s.scripture.ref}</cite>
  </blockquote>
  <p class="verse-note">${s.scripture.connection}</p>
` : ""}
  <h2>Vocabulary &mdash; write what each word means</h2>
  <ul class="vocab">
    ${s.vocab.map(([t]) => `<li><b>${t}</b><u></u></li>`).join("\n    ")}
  </ul>

  <h2>Five Questions &mdash; answer in your own words</h2>
  <ol class="qs">
    ${s.questions.map(([q, , , n]) => `<li>${q}${lines(n)}</li>`).join("\n    ")}
  </ol>

  <p class="note">${s.note}</p>

  <div class="key">
    <h2>Answer Key</h2>

    <p class="kv"><b>Vocabulary.</b> ${s.vocab.map(([t, d]) => `<b>${t}</b> ${d}`).join(" &nbsp; ")}</p>

    <p class="kv" style="margin-top:14px"><b>Five Questions.</b> Accept answers in the student's own words that carry the sense below. The place each answer comes from is noted, so you can check it was found rather than guessed.</p>
    <ol>
      ${s.questions.map(([, a, src]) => `<li>${a} <i>(${src})</i></li>`).join("\n      ")}
    </ol>
  </div>

</div>
${navScript()}
</body>
</html>
`;
}

/* THE HANDWRITING SHEET. The letters come from tools/handwriting/, which is the
   single source for all 52 forms and for their stroke order - see the note at
   the top of that file. This function only supplies the page around them, so
   the sheet gets the same nav, the same canonical and the same print behaviour
   as every other printable. */
function handwritingHtml(s) {
  const subjectSlug = s.subject.toLowerCase();
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="canonical" href="https://nexstudents.org/worksheets/${subjectSlug}/${s.slug}/">
${modeBoot()}
${faviconTags()}
<title>${s.title} — NexStudents</title>
<meta name="description" content="${s.blurb}">
<link rel="stylesheet" href="/assets/ns.css?v=${CSS_V}">
<link rel="stylesheet" href="/assets/worksheet.css?v=${CSS_V}">
<style>${HW.LETTER_CSS}</style>
</head>
<body>

${navMarkup("w")}

<div class="bar">
  ${backLink(s)}
  <div class="acts">
    <button class="btn" type="button" onclick="window.print()" title="Print this sheet" aria-label="Print this sheet">
      ${ICON_PRINT}<span class="lbl">Print</span>
    </button>
    <a class="btn ghost" href="${s.slug}.pdf" download title="Save the PDF so you can print it again without coming back" aria-label="Download the PDF">
      ${ICON_DL}<span class="lbl">Download</span>
    </a>
  </div>
</div>

<div class="sheet hwsheet">

  <div class="head">
    <p class="eyebrow">${s.subject} &middot; Kindergarten &middot; Handwriting</p>
    <h1>${s.title}</h1>
    <p class="dek">${s.dek}</p>
  </div>

  <div class="note">
    <p><b>Tip:</b> say each stroke out loud together while they trace &mdash;
    &ldquo;down, around, down again&rdquo; &mdash; and follow the arrows in order.
    Hearing the moves helps as much as seeing them.</p>
  </div>

  ${HW.DEFS}
  <div class="hw">
    ${HW.wsRows()}
  </div>


  <h2 class="hwh">Put this one on the fridge</h2>
  <div class="hw"><div class="grid">
    ${HW.AZ.map(HW.chartCell).join("")}
  </div></div>

  <h2 class="hwh">Practice sheet</h2>
  <p class="dek">Ruled the same way as the letters above, so nothing changes under them
  when they stop tracing and start writing.</p>
  <div class="hw">
    ${HW.practiceRows()}
  </div>

  <p class="dek" style="margin-top:18px"><b>Tip:</b> alphabetical is not the easiest
  order. The straight-line letters &mdash; l, t, i, L, T, I, F, E, H &mdash; make the
  gentlest start, the round ones come next, and diagonals like v, w, x, K, M and N are
  worth saving for last.</p>

</div>

${navScript()}
</body>
</html>
`;
}

/* ─────────────────────────────────────────────────────────────────────────
   kind "image" — the sheet is a PICTURE, not generated markup.

   🚨 EVERY OTHER SHEET ON THIS SITE IS BUILT FROM DATA and prints as real
   text at printer resolution. This one cannot: it arrives as a finished
   image, so its resolution is fixed at whatever it was made at. Paul,
   2026-09-02, made the cursive alphabet in ChatGPT because hand-plotted
   letterforms failed twice → [[feedback-never-hand-draw-letterforms]].

   ⚠️ CHECK THE PIXEL SIZE BEFORE ADDING ONE. Letter at 300 DPI is
   2550x3300. At 1103x1426 the cursive sheet is about 130 DPI, which is fine
   for tracing big letter shapes and soft on small print. Do not add an image
   sheet whose value depends on fine detail.

   ⭐ THE PAGE IS INSTRUCTIONS + THE SHEET, which is what Paul asked for:
   "when they open the worksheet file it has some instructions and the sheet
   for them to download or print." So the picture is NOT the whole page —
   the teaching wrapper around it is ours even when the sheet is not.

   `file` is the image beside index.html. `steps` is the instruction list. */
function imageHtml(s) {
  const subjectSlug = s.subject.toLowerCase();
  const gradeLabel = s.grade === "K" ? "Kindergarten" : "Grade " + s.grade;
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="canonical" href="https://nexstudents.org/worksheets/${subjectSlug}/${s.slug}/">
${modeBoot()}
${faviconTags()}
<title>${s.title} — NexStudents</title>
<meta name="description" content="${s.blurb}">
<link rel="stylesheet" href="/assets/ns.css?v=${CSS_V}">
<link rel="stylesheet" href="/assets/worksheet.css?v=${CSS_V}">
<style>
  /* The sheet is capped on screen so the page reads as a page, not a wall of
     paper. ⚠️ It is NOT the print source - printing uses the same image at
     its full pixel size, so shrinking it here costs nothing on paper. */
  /* 🚨 ALL THE READING SITS ABOVE THE SHEET. Paul, 2026-09-02: there was a
     block under the worksheet too and it was not wanted - "honestly maybe we
     don't need the content below the worksheet." One place to read, then the
     thing you came for. Do not reintroduce a section after the image. */
  /* ⚠️ `.note` in worksheet.css has only 12px of top padding, which is fine
     when its first child brings its own margin. Zeroing every p inside it -
     which an earlier version of this block did with `.note p { margin: 0 }` -
     left the heading hard against the top border while the foot still had
     padding plus a divider. Paul, 2026-09-02: "the top of the instructions on
     this worksheet looks cut off." Set the padding here rather than fighting
     margins, and never blanket-zero margins inside a shared component. */
  .note { padding: 16px 16px 14px; }
  .note > p:first-child { margin: 0 0 4px; }
  .note ol { margin: 0; padding-left: 20px; }
  .note li { font-size: 13.5px; line-height: 1.5; margin: 2px 0; }
  .note .later { font-size: 12.5px; color: var(--muted); margin: 12px 0 0;
                 padding-top: 10px; border-top: 1px solid var(--line); }
  .imgwrap { margin: 30px 0 6px; text-align: center; }
  .imgwrap img { width: 100%; max-width: 620px; height: auto;
                 border: 1px solid var(--line); border-radius: 6px; background: #fff; }
  .imgcap { font-size: 12.5px; color: var(--muted); margin: 8px 0 0; }
  @media print {
    /* Everything except the sheet itself is screen furniture. */
    nav, .bar, .head, .note, .imgcap { display: none !important; }
    .sheet { border: 0; padding: 0; margin: 0; box-shadow: none; }
    .imgwrap { margin: 0; }
    .imgwrap img { max-width: 100%; width: 100%; border: 0; border-radius: 0; }
  }
</style>
</head>
<body>

${navMarkup("w")}

<div class="bar">
  ${backLink(s)}
  <div class="acts">
    <button class="btn" type="button" onclick="window.print()" title="Print this sheet" aria-label="Print this sheet">
      ${ICON_PRINT}<span class="lbl">Print</span>
    </button>
    <a class="btn ghost" href="${s.file}" download title="Save the sheet so you can print it again without coming back" aria-label="Download the sheet">
      ${ICON_DL}<span class="lbl">Download</span>
    </a>
  </div>
</div>

<div class="sheet">

  <div class="head">
    <p class="eyebrow">${s.subject} &middot; ${gradeLabel} &middot; Handwriting</p>
    <h1>${s.title}</h1>
    <p class="dek">${s.dek}</p>
  </div>

  <div class="note">
    <p><b>Before you start</b></p>
    <ol>${s.steps.map((t) => "<li>" + t + "</li>").join("")}</ol>
    <p class="later">${s.after}</p>
  </div>

  <div class="imgwrap">
    <img src="${s.file}" alt="${s.title}" width="1103" height="1426">
    <p class="imgcap">Print at full size, portrait, with margins set to none so nothing is cut off.</p>
  </div>

</div>

${navScript()}
</body>
</html>
`;
}

const written = [];
for (const s of SHEETS) {
  const dir = path.join(ROOT, "worksheets", s.subject.toLowerCase(), s.slug);
  fs.mkdirSync(dir, { recursive: true });

  /* GUARD: a paid item must never have its PDF sitting in the repo. GitHub
     Pages serves any file it holds to anybody with the URL, so a paid PDF in
     git is a free PDF. Fail loudly rather than ship one by accident. */
  const stray = path.join(dir, s.slug + ".pdf");
  if (isPaid(s) && fs.existsSync(stray)) {
    console.error("FAIL: " + s.slug + " is priced " + s.price + " but " + s.slug +
                  ".pdf is in the repo. Delete it - Pages would serve it free.");
    process.exit(1);
  }

  /* GUARD: an image sheet is nothing without its image. The page would build
     clean and show a broken picture, which is the kind of failure nobody
     notices until a parent hits Print. */
  if (s.kind === "image") {
    const img = path.join(dir, s.file);
    if (!fs.existsSync(img)) {
      console.error("FAIL: " + s.slug + " is kind:image but " + s.file + " is missing from " + dir);
      process.exit(1);
    }
  }

  const html = s.kind === "handwriting" ? handwritingHtml(s)
             : s.kind === "image"      ? imageHtml(s)
             : s.kind === "blank"      ? blankHtml(s)
             : s.kind === "flashcards" ? flashHtml(s)
             : isPaid(s)               ? bundleHtml(s)
             :                           sheetHtml(s);
  if (html.includes("undefined")) { console.error("FAIL: undefined in " + s.slug); process.exit(1); }
  fs.writeFileSync(path.join(dir, "index.html"), html, "utf8");
  written.push(s.slug);
}
console.log(JSON.stringify({ written, cssV: CSS_V }, null, 1));
