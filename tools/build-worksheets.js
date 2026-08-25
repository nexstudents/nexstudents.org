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
<meta name="robots" content="noindex,nofollow">
<title>${s.title} — NexStudents</title>
<meta name="description" content="${s.blurb}">
<link rel="stylesheet" href="/assets/ns.css?v=${CSS_V}">
<link rel="stylesheet" href="/assets/worksheet.css?v=${CSS_V}">
</head>
<body>

<div class="bar">
  <a class="back" href="/${subjectSlug}/worksheets/">&larr; ${s.subject} Worksheets</a>
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
<meta name="robots" content="noindex,nofollow">
<title>${s.title} — NexStudents</title>
<meta name="description" content="${s.blurb}">
<link rel="stylesheet" href="/assets/ns.css?v=${CSS_V}">
<link rel="stylesheet" href="/assets/worksheet.css?v=${CSS_V}">
</head>
<body>

<div class="bar">
  <a class="back" href="/${subjectSlug}/worksheets/">&larr; ${s.subject} Worksheets</a>
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
<meta name="robots" content="noindex,nofollow">
<title>${s.title} — NexStudents</title>
<meta name="description" content="A printable grade ${s.grade} ${s.subject.toLowerCase()} worksheet. ${s.blurb}">
<link rel="stylesheet" href="/assets/ns.css?v=${CSS_V}">
<link rel="stylesheet" href="/assets/worksheet.css?v=${CSS_V}">
</head>
<body>

<div class="bar">
  <a class="back" href="/${subjectSlug}/worksheets/">&larr; ${s.subject} Worksheets</a>
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

  const html = s.kind === "blank" ? blankHtml(s)
             : isPaid(s)          ? bundleHtml(s)
             :                      sheetHtml(s);
  if (html.includes("undefined")) { console.error("FAIL: undefined in " + s.slug); process.exit(1); }
  fs.writeFileSync(path.join(dir, "index.html"), html, "utf8");
  written.push(s.slug);
}
console.log(JSON.stringify({ written, cssV: CSS_V }, null, 1));
