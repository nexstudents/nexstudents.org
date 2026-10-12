#!/usr/bin/env node
/*
 * upload-gated.js — send every gated sheet's real page to R2 (ROADMAP 42).
 *
 *   node tools/upload-gated.js            (from the repo root, after build-worksheets)
 *
 * build-worksheets.js writes a gated sheet's full page to .private/sheets/<slug>.html
 * and the scopes that cover it to <slug>.scopes. Both go to the bucket under
 * paid/sheets/, which the worker's plain media route refuses; only /sheet hands
 * them out, and only to an account that owns one of those scopes.
 * Needs `wrangler login` (it is, as nexedgetech@gmail.com). Run it after every
 * build that changes a gated sheet, or the owners keep getting the old page.
 */
"use strict";
const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const DIR = path.join(".private", "sheets");
if (!fs.existsSync(DIR)) { console.error("FAIL: no " + DIR + " - run build-worksheets.js first"); process.exit(1); }
const files = fs.readdirSync(DIR).filter((f) => /\.(html|scopes)$/.test(f));
if (!files.length) { console.log("no gated sheets"); process.exit(0); }
for (const f of files) {
  /* no "; charset" - shell:true would split it; the worker sets the real header */
  const type = f.endsWith(".html") ? "text/html" : "text/plain";
  execFileSync("wrangler", ["r2", "object", "put", "nexstudents-media/paid/sheets/" + f,
    "--file", path.join(DIR, f), "--content-type", type, "--remote"], { stdio: "inherit", shell: true });
}
console.log("uploaded " + files.length + " files");
