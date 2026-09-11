#!/usr/bin/env node
/* ============================================================================
   check-escape.js — text into the account panel is escaped for WHERE it lands

   Paul, 2026-09-11: "this seem to be a regular bug for you i think again."
   The panel's adEsc() escaped & < > but not quotes, and fed value='...'
   attributes, so "I'm good at chess" or a last name like O'Brien cut the box
   short. The same family shipped twice before (&minus; printed raw in an
   escaped table cell; the word "undefined" in a built page). This is the
   check the recurring-mistakes list said was owed (row 17).

   Two rules, both read from tools/nav.js:
   1. adEsc() itself must still escape BOTH quote characters.
   2. Every value / placeholder / aria-label / title attribute the panel builds
      from a variable must pass that variable through adEsc() first.
   Usage:  node tools/check-escape.js .
   ============================================================================ */
const fs = require("fs"), path = require("path");
const root = process.argv[2] || ".";
const src = fs.readFileSync(path.join(root, "tools", "nav.js"), "utf8");
const fail = [];

const esc = /function adEsc\(s\)\{[\s\S]*?\n?\s*return[\s\S]*?;\s*\}/.exec(src);
if (!esc) fail.push("adEsc() not found in tools/nav.js");
else {
  if (!/&quot;/.test(esc[0])) fail.push("adEsc() no longer escapes \" (&quot;)");
  if (!/&#39;/.test(esc[0])) fail.push("adEsc() no longer escapes ' (&#39;)");
}

/* An attribute opened with a quote, closed off by the string, then a variable
   spliced in: value='"+x+"'. The spliced expression must start with adEsc(.
   A literal like title='"+t.name+"' is flagged too unless it is on the
   ALLOW list below, each with its reason. */
const ALLOW = {
  "t.name": "a theme name read from lesson-template THEMES at build time, never user text",
  "g": "a grade key from AD_GRADES, K-8, never user text",
  "a": "a theme key from AD_THEMES, never user text",
  "label": "chips() group label, a literal written in nav.js (Male or female, Grade level)"
};
const re = /\b(value|placeholder|aria-label|title)='"\+\s*([^+]+?)\s*\+/g;
let m, seen = 0;
while ((m = re.exec(src))) {
  seen++;
  const expr = m[2].trim();
  if (/^adEsc\(/.test(expr) || ALLOW[expr]) continue;
  const line = src.slice(0, m.index).split("\n").length;
  fail.push(`nav.js:${line} ${m[1]}='"+${expr}+"' is not passed through adEsc()`);
}

if (fail.length) {
  console.error("FAIL — panel text not escaped for its attribute:\n  " + fail.join("\n  "));
  process.exit(1);
}
console.log(`OK — adEsc escapes both quotes, and all ${seen} spliced attributes are escaped or allow-listed.`);
