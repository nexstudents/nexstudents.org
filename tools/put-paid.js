#!/usr/bin/env node
/* put-paid.js — push a PAID product file into the R2 bucket.
 * ─────────────────────────────────────────────────────────────────────────
 *   node tools/put-paid.js <local file> <slug>
 *
 * The file lands at paid/<slug><ext>, which is exactly what the Worker's
 * /download path fetches. Nothing else in the bucket uses `paid/`.
 *
 * 🚨 THE PRODUCT MUST NEVER ENTER THE REPO. build-worksheets.js fails the
 * build if it finds any .pdf beside a paid page, because GitHub Pages serves
 * whatever the repo holds. So the source of this upload is a file OUTSIDE the
 * working tree - generate it with `node tools/build-cell.js "<out dir>"` and
 * print from there. This script refuses a path inside the repo rather than
 * trusting the operator to remember.
 *
 * 🚨 CREDENTIALS COME FROM THE ENVIRONMENT AND NOWHERE ELSE, the rule
 * media-store.js already sets: "Nothing is written to disk. Do not paste
 * these into a file or chat." Set them in your own shell, run this, and let
 * the shell forget them.
 */
"use strict";
const fs = require("fs");
const path = require("path");
const store = require("./media-store.js");

const TYPES = { ".pdf": "application/pdf", ".zip": "application/zip",
                ".png": "image/png", ".jpg": "image/jpeg" };

async function main() {
  const [src, slug] = process.argv.slice(2);
  if (!src || !slug) {
    console.error("usage: node tools/put-paid.js <local file> <slug>");
    process.exit(2);
  }
  const abs = path.resolve(src);
  if (!fs.existsSync(abs)) { console.error("FAIL: no such file: " + abs); process.exit(1); }

  /* ⚠️ THIS RUNS BEFORE THE CREDENTIAL CHECK, DELIBERATELY. It is the guard
     that matters, it needs no configuration to answer, and behind the
     credential check it could never be tested without live keys. A product
     generated into the working tree by mistake would be committed by the next
     `git add -A` and served free forever after. */
  const repo = path.resolve(__dirname, "..");
  if (abs.startsWith(repo + path.sep)) {
    console.error("FAIL: " + abs + " is inside the repo.\n" +
                  "      A paid file must be generated outside the working tree.");
    process.exit(1);
  }

  if (!store.configured()) { console.error(store.help()); process.exit(2); }

  const ext = path.extname(abs).toLowerCase();
  /* 🚨 THE KEY IS `paid/<slug><ext>`, NOT `paid/<slug>/<basename>`.
     This was `paid/<slug>/<basename>` and r2-worker.js has always fetched
     `PAID + slug + ".pdf"`, so the two never agreed. Nothing caught it because
     neither side had ever run: the first customer to pay would have been told
     "your purchase is valid but the file is not ready yet" while the file sat
     in the bucket one path segment away. Found 2026-09-09, before any sale.
     ⚠️ The basename is deliberately DISCARDED. It is whatever the file was
     called on Paul's desktop, and the Worker has no way to learn it. */
  const key = "paid/" + slug + ext;
  const body = fs.readFileSync(abs);
  await store.put(key, body, TYPES[ext] || "application/octet-stream");

  console.log("uploaded  " + key + "  (" + (body.length / 1024).toFixed(0) + " KB)");
  console.log("public    " + store.publicUrl(key));
  console.log("\nThe public URL is for checking the upload landed. Paid delivery\n" +
              "goes through redeem_download, not this link.");
}

main().catch((e) => { console.error("FAIL: " + e.message); process.exit(1); });
