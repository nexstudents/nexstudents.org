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
const { navMarkup, navScript , modeBoot, faviconTags, socialTags, breadcrumbLd } = require("./nav.js");
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

/* 🚨 THE URL IS NOT THE LABEL. Every worksheet path used to be built with
   `subjSlug(s.subject)`, in nine places, so the DISPLAY NAME was also the
   FOLDER NAME. Renaming the subject label therefore moved
   /worksheets/maths/... to /worksheets/math/... and broke every link to it.
   Found the hard way on 2026-09-06 while renaming Math to Math.
   The slug is now looked up, so a label can be changed without moving a single
   file. ⚠️ Math stays mapped to "maths" until the directories are actually
   migrated with redirects -- the ELA to English recipe in build-pages.js. */
const SUBJ_SLUG = { English: "english", History: "history",
                    Math: "maths", Science: "science" };
const subjSlug = (name) => {
  const v = SUBJ_SLUG[name];
  if (!v) { console.error("FAIL: no URL slug for subject " + name); process.exit(1); }
  return v;
};

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

/* EIGHT worksheet shapes each wrote their own <head>, so the canonical was
   pasted eight times and the share card would have been too. One helper. */
function sheetHead(s) {
  const url = "/worksheets/" + subjSlug(s.subject) + "/" + s.slug + "/";
  const back = backTarget(s);
  return [
    '<link rel="canonical" href="https://nexstudents.org' + url + '">',
    socialTags({ path: url, title: s.title + " | NexStudents", desc: s.blurb, type: "article",
                 image: s.thumb ? "https://nexstudents.org" + url + "thumb.jpg" : null }),
    breadcrumbLd([{ name: "Home", path: "/" }, { name: back.label, path: back.href }], s.title),
  ].join("\n");
}

function backTarget(s) {
  const subjectSlug = subjSlug(s.subject);
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
  return { href, label };
}

function backLink(s) {
  const { href, label } = backTarget(s);
  return `<a class="back" href="${href}">&larr; ${label}</a>`;
}

const ICON_CART = '<svg viewBox="0 0 20 20" width="15" height="15" aria-hidden="true" fill="none" ' +
  'stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
  '<path d="M2.5 3h1.8l1.7 9.2h8.3l1.7-6.7H5.3"/><circle cx="8" cy="16" r="1.2"/>' +
  '<circle cx="14.2" cy="16" r="1.2"/></svg>';

/* ── ADD TO CART, ON THE FREE SHEETS ───────────────────────────────────────
   Paul, 2026-09-06: "even if a free item is purchased it goes to the cart and
   they have to check it out either as guest or logged in." A free download
   stops being anonymous and becomes a known customer with an email.

   🚨 NOTHING ON THIS SITE COULD ADD TO THE CART BEFORE THIS. `cartAdd` existed
   in ns-account.js and was called by no page at all, so the cart shipped with
   no way for a reader to put anything in it.

   ⚠️ IT DOES NOT REPLACE PRINT OR DOWNLOAD. Those still work, unchanged, and
   removing them to force people through a checkout is not what was asked for.
   This is a third door, for someone who wants the sheet kept on their account.

   🚨 PAID ITEMS GET NOTHING HERE. checkout_free() re-reads the price and
   refuses anything non-zero, so an Add to Cart on the bundle would walk a
   customer into a dead end. The bundle keeps its honest "Coming Soon" until
   Stripe is wired -- see buyBlock below. */
function cartBtn(s) {
  if (isPaid(s)) return "";
  /* The thumbnail is a display hint only; the title and the price always come
     back from the products table. A sheet with no thumb passes nothing and the
     drawer draws a plain tile. */
  const thumb = s.thumb ? `/worksheets/${subjSlug(s.subject)}/${s.slug}/thumb.jpg` : "";
  const meta = thumb ? `,{thumb:'${thumb}'}` : "";
  return `<button class="btn ghost" type="button" data-cart="${s.slug}"
      title="Save this sheet to your cart" aria-label="Add this sheet to your cart"
      onclick="window.NSAccount&&NSAccount.cartAdd('${s.slug}'${meta})">
      ${ICON_CART}<span class="lbl">Add to Cart</span>
    </button>`;
}

/* ── EMBEDDED CHECKOUT ──────────────────────────────────────────────────────
   Paul, 2026-09-09: "I want it embedded into the checkout."

   This used to be `<a href="{buy}">` pointing at a Stripe Payment Link, which
   sent the buyer to buy.stripe.com and off the site. Now `buy: true` means "on
   sale", and Stripe's card form is mounted in a div ON THIS PAGE.

   🚨 `buy` IS A BOOLEAN NOW, NOT A URL. The price is not here either - it lives
   in the `products` table in Postgres, which is what /checkout reads. `price` in
   worksheets.js is the SHOP WINDOW only, the number a visitor sees before the
   form loads. ⚠️ Change a price in both, or the page advertises one number and
   charges another.

   ⚠️ THE OLD "the download is emailed to you" LINE IS GONE, and it had to go:
   nothing on this site sends email. The buyer downloads on the return page. */
const STRIPE_PK = process.env.STRIPE_PK || "";
const PAYPAL_ID = process.env.PAYPAL_CLIENT_ID || "";

/* 🚨 EITHER KEY IS ENOUGH, NEITHER IS "COMING SOON". Paul, 2026-09-09: "I think
   i like the option to just give a choice regardless i gotta deal with two
   different options." So the page offers whichever processors are configured -
   both, or one, or none - and never renders a control that cannot work.
   ⚠️ Mounting a payment SDK without its key draws an empty box, which reads as
   a broken shop rather than a shut one. That is why these are guards and not
   defaults. */
function buyBlock(s) {
  if (s.buy && (STRIPE_PK || PAYPAL_ID)) {
    const card = STRIPE_PK
      ? `<button class="btn buy" type="button" data-buy="${s.slug}">Pay by Card &mdash; ${s.price}</button>`
      : "";
    const pp = PAYPAL_ID ? `<div class="ppbtn" id="paypal-buttons"></div>` : "";
    /* ⚠️ Only say "or" when there are genuinely two things to choose between. */
    const orRule = (STRIPE_PK && PAYPAL_ID)
      ? `<p class="payor"><span>or</span></p>` : "";

    return `<div class="paychoice">${card}${orRule}${pp}</div>
      <div class="checkout" id="checkout" hidden></div>
      <p class="buynote">Secure checkout on this page. Your download appears the moment payment clears.</p>
      ${STRIPE_PK ? `<script async src="https://js.stripe.com/v3/"></script>` : ""}
      ${PAYPAL_ID ? `<script src="https://www.paypal.com/sdk/js?client-id=${PAYPAL_ID}&currency=USD"></script>` : ""}
      <script>${checkoutScript(s.slug)}</script>`;
  }
  return `<span class="btn buy is-off" aria-disabled="true">${s.price} &mdash; Coming Soon</span>
      <p class="buynote">Not on sale yet. This page is the finished layout; checkout is wired once the units are complete.</p>`;
}

/* ⚠️ NO BACKTICKS ANYWHERE IN HERE, comments included. This string is returned
   into a template literal, the same trap that has killed this build twice
   before - see the note at the top of reading-log.js. */
function checkoutScript(slug) {
  const parts = [
    '(function(){',
    '  var WORKER = "https://nexstudents-media.nexedgetech.workers.dev";',
    '  var SLUG = "' + slug + '";',
    '  var box = document.getElementById("checkout");',
    /* ⚠️ THIS IS THE PAYPAL SUCCESS PATH ONLY, and it is worth being clear
       about why the two differ. Stripe's embedded form finishes by REDIRECTING
       to return_url, so a card buyer lands on /thank-you/ and is served there.
       PayPal finishes in a popup with the buyer still on this page, so there is
       nowhere to send them - the download has to appear right here.
       Both end at the same /download?t= link built from the same token. */
    '  function showDownload(token, note){',
    '    var wrap = document.querySelector(".paychoice");',
    '    if (wrap) wrap.hidden = true;',
    '    if (box) box.hidden = true;',
    '    var p = document.querySelector(".buynote");',
    '    if (!p) return;',
    '    if (token) {',
    '      p.innerHTML = "<strong>Thank you. Your download is ready.</strong><br>"',
    '        + "<a class=\\"btn\\" href=\\"" + WORKER + "/download?t=" + encodeURIComponent(token) + "\\">Download the PDF</a>";',
    '    } else {',
    '      p.textContent = note || "Payment received. Your download is being prepared.";',
    '    }',
    '  }',
  ];

  if (STRIPE_PK) parts.push(...[
    '  var btn = document.querySelector(\'[data-buy="' + slug + '"]\');',
    '  if (btn && box) stripeCard(btn);',
    '  function stripeCard(btn){',
    '  var mounted = false;',
    '  btn.addEventListener("click", function(){',
    '    if (mounted) return;',
    '    mounted = true;',
    '    btn.disabled = true;',
    '    btn.textContent = "Loading checkout...";',
    /* Stripe.js is loaded async, so it may not be there on a fast click. */
    /* ⚠️ `!window.Stripe`, not a typeof test. The build guard at the bottom of
       this file fails on the literal string "undefined" anywhere in a page, and
       it is right to - that is how a template slot resolving to nothing gets
       caught. Truthiness says the same thing and keeps the guard useful. */
    '    if (!window.Stripe) {',
    '      fail("Checkout could not load. Please refresh and try again.");',
    '      return;',
    '    }',
    '    var stripe = Stripe("' + STRIPE_PK + '");',
    '    fetch(WORKER + "/checkout", {',
    '      method: "POST",',
    '      headers: { "Content-Type": "application/json" },',
    '      body: JSON.stringify({ slug: "' + slug + '" })',
    '    }).then(function(r){ return r.json(); }).then(function(d){',
    '      if (!d || !d.clientSecret) throw new Error(d && d.error || "no client secret");',
    '      box.hidden = false;',
    '      btn.hidden = true;',
    '      return stripe.initEmbeddedCheckout({ clientSecret: d.clientSecret })',
    '        .then(function(c){ c.mount("#checkout"); });',
    '    }).catch(function(e){',
    '      fail("Checkout is unavailable right now. Please try again shortly.");',
    '    });',
    '  });',
    /* 🚨 A FAILED CHECKOUT MUST GIVE THE BUTTON BACK. Leaving it disabled and
       reading "Loading checkout..." forever is how a customer decides the site
       is broken and leaves, on the one page that was meant to take money. */
    '  function fail(msg){',
    '    mounted = false;',
    '    btn.disabled = false;',
    '    btn.hidden = false;',
    '    btn.textContent = "Buy - try again";',
    '    var p = document.querySelector(".buynote");',
    '    if (p) { p.textContent = msg; }',
    '  }',
    '  }',
  ]);

  if (PAYPAL_ID) parts.push(...[
    /* ⚠️ The SDK is loaded without `async`, so `paypal` is defined by the time
       this runs. Guarded anyway: a blocked script must not throw and take the
       card button down with it. */
    '  if (window.paypal && document.getElementById("paypal-buttons")) {',
    '    paypal.Buttons({',
    '      style: { layout: "horizontal", height: 44, tagline: false },',
    /* 🚨 THE AMOUNT IS NEVER SENT FROM HERE. The Worker reads the price out of
       Postgres. All the browser may say is which product it wants. */
    '      createOrder: function(){',
    '        return fetch(WORKER + "/paypal/create", {',
    '          method: "POST",',
    '          headers: { "Content-Type": "application/json" },',
    '          body: JSON.stringify({ slug: SLUG })',
    '        }).then(function(r){ return r.json(); }).then(function(d){',
    '          if (!d || !d.id) throw new Error(d && d.error || "no order id");',
    '          return d.id;',
    '        });',
    '      },',
    '      onApprove: function(data){',
    '        return fetch(WORKER + "/paypal/capture", {',
    '          method: "POST",',
    '          headers: { "Content-Type": "application/json" },',
    '          body: JSON.stringify({ orderID: data.orderID })',
    '        }).then(function(r){ return r.json(); }).then(function(d){',
    /* 🚨 d.ok WITH A NULL TOKEN STILL MEANS PAID. The capture succeeded and only
       the filing failed, so the buyer must never be told the payment did not
       work - d.error carries what to do next. */
    '          if (d && d.ok) return showDownload(d.token, d.error);',
    '          throw new Error(d && d.error || "capture failed");',
    '        });',
    '      },',
    '      onError: function(){',
    '        var p = document.querySelector(".buynote");',
    '        if (p) p.textContent = "PayPal could not complete that. Please try again, or pay by card.";',
    '      }',
    '    }).render("#paypal-buttons");',
    '  }',
  ]);

  parts.push('}());');
  return parts.join("\n");
}

/* kind "paid-sheet" — a PAID SINGLE SHEET whose product is a finished PDF.
   ⭐ THE KIND THAT `pdf` AND `bundle` COULD NOT COVER BETWEEN THEM.
   `pdf` requires the file to sit in the folder; the paid guard forbids exactly
   that. So a priced single sheet had no renderer at all until this one. Here
   the PDF is NEVER in the repo: it lives in R2 behind the redeem_download
   worker, and this page only advertises it.

   🚨 WHAT MAY GO ON THIS PAGE. The card art and nothing else pictorial. The
   art is a marketing mockup - too small and too styled to work from - so it
   sells the sheet without being the sheet. Never embed the printable itself,
   not even downscaled: a determined buyer would just print the preview.
   `sample` lists a handful of the parts, never all of them, because the full
   list IS half the worksheet. */
function paidSheetHtml(s) {
  const subjectSlug = subjSlug(s.subject);
  const art = `/worksheets/${subjectSlug}/${s.slug}/thumb.jpg`;
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
${sheetHead(s)}
${modeBoot()}
${faviconTags()}
<title>${s.title} | NexStudents</title>
<meta name="description" content="${s.blurb}">
<link rel="stylesheet" href="/assets/ns.css?v=${CSS_V}">
<link rel="stylesheet" href="/assets/worksheet.css?v=${CSS_V}">
<style>
  .shot { margin: 26px 0 6px; text-align: center; }
  .shot img { width: 100%; max-width: 420px; height: auto; border-radius: 8px;
              border: 1px solid var(--line); background: #fff; }
  .shot figcaption { font-size: 12.5px; color: var(--dim); margin-top: 8px; }
</style>
</head>
<body>

${navMarkup("w")}

<div class="bar">
  ${backLink(s)}
</div>

<div class="sheet">

  <div class="head">
    <p class="eyebrow">${s.subject} &middot; ${gradeWord(s.grade)}${s.tagline ? " &middot; " + s.tagline : ""}</p>
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

  <figure class="shot">
    <img src="${art}" alt="${s.title}" width="420" height="420">
    <figcaption>Two pages, US Letter. The worksheet, then its answer key.</figcaption>
  </figure>

  <h2>What You Get</h2>
  <ul class="gets">
    ${s.contains.map((c) => "<li>" + c + "</li>").join("\n    ")}
  </ul>

  <div class="locked">
    <p class="lockhead">What is on the sheet</p>
    <p>${s.lockNote}</p>
    <ul>
      ${s.sample.map((x) => "<li>" + x + "</li>").join("\n      ")}
    </ul>
  </div>

  <div class="buybar bottom">
    <div class="buyleft">
      <span class="price">${s.price}</span>
      <span class="pricenote">Worksheet &middot; answer key &middot; instant download</span>
    </div>
    <div class="buyright">${buyBlock(s)}</div>
  </div>

</div>
<div class="wrap"><p class="useline">Free to print and use with your own students. Please do not repost, resell, or republish these sheets &mdash; <a href="/terms/">terms of use</a>.</p></div>

${navScript()}
</body>
</html>
`;
}

/* PAID PAGE. Only the preview paragraphs are emitted. The remaining reading,
   every question and every answer key are simply not in this file. Hiding
   them with CSS would ship them to anyone who opens the page source. */
function bundleHtml(s) {
  const subjectSlug = subjSlug(s.subject);
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
${sheetHead(s)}
${modeBoot()}
${faviconTags()}
<title>${s.title} | NexStudents</title>
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
<div class="wrap"><p class="useline">Free to print and use with your own students. Please do not repost, resell, or republish these sheets &mdash; <a href="/terms/">terms of use</a>.</p></div>

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
/* 🚨 THE SPLIT SHEET IS THE PAPER HALF OF A SPLIT LESSON, and its sentences are
   READ FROM THE LESSON, never retyped here. tools/split-sheet.js does that. */
function splitHtml(s) {
  const { splitSheetBody } = require("./split-sheet.js");
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
${sheetHead(s)}
${modeBoot()}
${faviconTags()}
<title>${s.title} | NexStudents</title>
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
    ${cartBtn(s)}
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
  </div>
${splitSheetBody(s)}
  <p class="signoff"><em>${s.signoff}</em>
    <small>Copyright &copy; NexEdge Studios</small></p>

</div>
<div class="wrap"><p class="useline">Free to print and use with your own students. Please do not repost, resell, or republish these sheets &mdash; <a href="/terms/">terms of use</a>.</p></div>

${navScript()}
</body>
</html>
`;
}

function blankHtml(s) {
  const subjectSlug = subjSlug(s.subject);
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
${sheetHead(s)}
${modeBoot()}
${faviconTags()}
<title>${s.title} | NexStudents</title>
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
    ${cartBtn(s)}
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
<div class="wrap"><p class="useline">Free to print and use with your own students. Please do not repost, resell, or republish these sheets &mdash; <a href="/terms/">terms of use</a>.</p></div>

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
  const subjectSlug = subjSlug(s.subject);
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
${sheetHead(s)}
${modeBoot()}
${faviconTags()}
<title>${s.title} | NexStudents</title>
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
    ${cartBtn(s)}
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
<div class="wrap"><p class="useline">Free to print and use with your own students. Please do not repost, resell, or republish these sheets &mdash; <a href="/terms/">terms of use</a>.</p></div>

${navScript()}
</body>
</html>
`;
}

function sheetHtml(s) {
  const subjectSlug = subjSlug(s.subject);
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
${sheetHead(s)}
${modeBoot()}
${faviconTags()}
<title>${s.title} | NexStudents</title>
<meta name="description" content="A printable grade ${s.grade} ${subjSlug(s.subject)} worksheet. ${s.blurb}">
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
    ${cartBtn(s)}
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
<div class="wrap"><p class="useline">Free to print and use with your own students. Please do not repost, resell, or republish these sheets &mdash; <a href="/terms/">terms of use</a>.</p></div>

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
  const subjectSlug = subjSlug(s.subject);
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
${sheetHead(s)}
${modeBoot()}
${faviconTags()}
<title>${s.title} | NexStudents</title>
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
    ${cartBtn(s)}
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

<div class="wrap"><p class="useline">Free to print and use with your own students. Please do not repost, resell, or republish these sheets &mdash; <a href="/terms/">terms of use</a>.</p></div>

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
  const subjectSlug = subjSlug(s.subject);
  const gradeLabel = s.grade === "K" ? "Kindergarten" : "Grade " + s.grade;
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
${sheetHead(s)}
${modeBoot()}
${faviconTags()}
<title>${s.title} | NexStudents</title>
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
  /* WARNING: .note in worksheet.css has only 12px of top padding, which is
     fine while its first child brings its own margin. Zeroing every p inside
     it - which an earlier version of this block did - left the heading hard
     against the top border while the foot still had padding plus a divider.
     Paul, 2026-09-02: "the top of the instructions on this worksheet looks cut
     off." Set the padding here rather than fighting margins, and never
     blanket-zero margins inside a shared component.

     NO BACKTICKS IN THIS COMMENT. It lives inside a JS template literal, so a
     backtick closes the string and the build dies on the next word. That is
     already recorded in CLAUDE.md for progressScript and it caught me here
     too - and because the build was piped to /dev/null, the crash was silent
     and a "fix" was pushed that never built. Never hide build stderr. */
  .note { padding: 16px 16px 14px; }
  .note > p:first-child { margin: 0 0 4px; }
  .note ol { margin: 0; padding-left: 20px; }
  .note li { font-size: 13.5px; line-height: 1.5; margin: 2px 0; }
  .note .later { font-size: 12.5px; color: var(--dim); margin: 12px 0 0;
                 padding-top: 10px; border-top: 1px solid var(--line); }
  .imgwrap { margin: 30px 0 6px; text-align: center; }
  .imgwrap img { width: 100%; max-width: 620px; height: auto;
                 border: 1px solid var(--line); border-radius: 6px; background: #fff; }
  .imgcap { font-size: 12.5px; color: var(--dim); margin: 8px 0 0; }
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
    ${cartBtn(s)}
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

<div class="wrap"><p class="useline">Free to print and use with your own students. Please do not repost, resell, or republish these sheets &mdash; <a href="/terms/">terms of use</a>.</p></div>

${navScript()}
</body>
</html>
`;
}

/* ─────────────────────────────────────────────────────────────────────────
   kind "pdf" — the sheet arrives as a finished PDF.

   ⭐ BETTER THAN kind "image", and the reason is resolution. A PDF made of
   real text prints at printer resolution, the same as our generated sheets.
   The cursive PNG is stuck at ~130 DPI forever. So when ChatGPT can produce a
   PDF instead of a picture, take the PDF.

   🚨 PRINT GOES TO THE FILE, NOT THE PAGE. window.print() here would print
   this wrapper - nav, instructions and a squashed embed. The Print button
   opens the PDF itself so the browser's own PDF viewer does the printing at
   full size. That is the "pull it from a different location to print" idea
   Paul asked about on 2026-09-02, applied properly.

   The preview is an <object>. It is a real embed, so it needs a fallback for
   phones that refuse to render PDFs inline - which is most of them. The
   fallback is the thumbnail plus the same two buttons, never a blank box. */
function pdfHtml(s) {
  const subjectSlug = subjSlug(s.subject);
  const gradeLabel = s.grade === "K" ? "Kindergarten" : "Grade " + s.grade;
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
${sheetHead(s)}
${modeBoot()}
${faviconTags()}
<title>${s.title} | NexStudents</title>
<meta name="description" content="${s.blurb}">
<link rel="stylesheet" href="/assets/ns.css?v=${CSS_V}">
<link rel="stylesheet" href="/assets/worksheet.css?v=${CSS_V}">
<style>
  .note { padding: 16px 16px 14px; }
  .note > p:first-child { margin: 0 0 4px; }
  .note ol { margin: 0; padding-left: 20px; }
  .note li { font-size: 13.5px; line-height: 1.5; margin: 2px 0; }
  .note .later { font-size: 12.5px; color: var(--dim); margin: 12px 0 0;
                 padding-top: 10px; border-top: 1px solid var(--line); }
  .pdfwrap { margin: 30px 0 6px; }
  /* Tall enough to show the whole sheet without the reader scrolling inside a
     scroller, which is the worst thing an embedded PDF can do on a phone. */
  .pdfwrap object { display: block; width: 100%; height: 78vh; min-height: 520px;
                    border: 1px solid var(--line); border-radius: 6px; background: #fff; }
  .pdffall { text-align: center; padding: 18px; border: 1px solid var(--line);
             border-radius: 6px; background: var(--panel-2); }
  .pdffall img { width: 100%; max-width: 380px; height: auto; border-radius: 4px;
                 border: 1px solid var(--line); background: #fff; }
  .pdffall p { font-size: 13px; color: var(--dim); margin: 10px 0 0; }
  .imgcap { font-size: 12.5px; color: var(--dim); margin: 8px 0 0; text-align: center; }
</style>
</head>
<body>

${navMarkup("w")}

<div class="bar">
  ${backLink(s)}
  <div class="acts">
    <a class="btn" href="${s.file}" target="_blank" rel="noopener" title="Open the sheet to print it at full size" aria-label="Open the sheet to print">
      ${ICON_PRINT}<span class="lbl">Print</span>
    </a>
    <a class="btn ghost" href="${s.file}" download title="Save the sheet so you can print it again without coming back" aria-label="Download the sheet">
      ${ICON_DL}<span class="lbl">Download</span>
    </a>
    ${cartBtn(s)}
  </div>
</div>

<div class="sheet">

  <div class="head">
    <p class="eyebrow">${s.subject} &middot; ${gradeLabel} &middot; ${s.tagline || "Drill"}</p>
    <h1>${s.title}</h1>
    <p class="dek">${s.dek}</p>
  </div>

  <div class="note">
    <p><b>How to use this drill</b></p>
    <ol>${s.steps.map((t) => "<li>" + t + "</li>").join("")}</ol>
    <p class="later">${s.after}</p>
  </div>

  <div class="pdfwrap">
    <object data="${s.file}" type="application/pdf">
      <div class="pdffall">
        <img src="thumb.jpg" alt="${s.title}" width="700" height="700">
        <p>Your browser will not show the sheet here. Use Download or Print above.</p>
      </div>
    </object>
    <p class="imgcap">Print at full size, portrait, with margins set to none.</p>
  </div>

</div>

<div class="wrap"><p class="useline">Free to print and use with your own students. Please do not repost, resell, or republish these sheets &mdash; <a href="/terms/">terms of use</a>.</p></div>

${navScript()}
</body>
</html>
`;
}

const written = [];
for (const s of SHEETS) {
  const dir = path.join(ROOT, "worksheets", subjSlug(s.subject), s.slug);
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

  /* GUARD: a paid single sheet sells a PDF that must not be in the repo at
     all - not under any name. The guard above only catches <slug>.pdf, which
     is the name the free build writes; a hand-copied "animal-cell-final.pdf"
     would sail past it and Pages would hand out the product for nothing. */
  if (s.kind === "paid-sheet") {
    if (!isPaid(s)) {
      console.error("FAIL: " + s.slug + " is kind:paid-sheet but priced " +
                    (s.price || "$0") + ". Use kind:pdf for a free sheet.");
      process.exit(1);
    }
    const pdfs = fs.existsSync(dir)
      ? fs.readdirSync(dir).filter((f) => f.toLowerCase().endsWith(".pdf")) : [];
    if (pdfs.length) {
      console.error("FAIL: " + s.slug + " is paid but the repo holds " +
                    pdfs.join(", ") + ". Pages would serve the product free.");
      process.exit(1);
    }
    if (!fs.existsSync(path.join(dir, "thumb.jpg"))) {
      console.error("FAIL: " + s.slug + " is kind:paid-sheet but thumb.jpg is missing - " +
                    "it is the only picture the page has to sell with.");
      process.exit(1);
    }
  }

  /* GUARD: an image sheet is nothing without its image. The page would build
     clean and show a broken picture, which is the kind of failure nobody
     notices until a parent hits Print. */
  if (s.kind === "image" || s.kind === "pdf") {
    const asset = path.join(dir, s.file);
    if (!fs.existsSync(asset)) {
      console.error("FAIL: " + s.slug + " is kind:" + s.kind + " but " + s.file + " is missing from " + dir);
      process.exit(1);
    }
    /* The <object> fallback shows thumb.jpg, so a pdf sheet without one would
       leave phones staring at nothing when the embed is refused. */
    if (s.kind === "pdf" && !fs.existsSync(path.join(dir, "thumb.jpg"))) {
      console.error("FAIL: " + s.slug + " is kind:pdf but thumb.jpg is missing - it is the fallback when a browser will not embed the PDF.");
      process.exit(1);
    }
  }

  const html = s.kind === "handwriting" ? handwritingHtml(s)
             : s.kind === "image"      ? imageHtml(s)
             : s.kind === "paid-sheet" ? paidSheetHtml(s)
             : s.kind === "pdf"        ? pdfHtml(s)
             : s.kind === "blank"      ? blankHtml(s)
             : s.kind === "split"      ? splitHtml(s)
             : s.kind === "flashcards" ? flashHtml(s)
             : isPaid(s)               ? bundleHtml(s)
             :                           sheetHtml(s);
  if (html.includes("undefined")) { console.error("FAIL: undefined in " + s.slug); process.exit(1); }
  fs.writeFileSync(path.join(dir, "index.html"), html, "utf8");
  written.push(s.slug);
}
console.log(JSON.stringify({ written, cssV: CSS_V }, null, 1));
