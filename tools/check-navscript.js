#!/usr/bin/env node
/* ============================================================================
   check-navscript.js — the script every page ships must actually PARSE

   2026-09-11: nav.js's navScript is one big template literal, and a template
   literal quietly turns "\/" into "/". A regex written /^\/lessons\// shipped
   as /^/lessons// — a SyntaxError — so the WHOLE account panel, the cart
   drawer and the menu were dead on every page. Every other check passed,
   because none of them runs the script. CLAUDE.md already said "node --check
   the shipped script after any nav change"; it was skipped. So it is a build
   step now, not a habit.

   Parses, exactly as a browser receives them:
     navScript()  - the per-page nav/panel/cart script (comment-stripped)
     modeBoot()   - the tiny <head> script (theme + profile accent)
   Usage:  node tools/check-navscript.js .
           node tools/check-navscript.js --self-test   (proves it can fail)
   ============================================================================ */
const vm = require("vm"), path = require("path");

function body(html) {
  const m = /<script>([\s\S]*)<\/script>\s*$/.exec(html.trim());
  return m ? m[1] : html;
}
function parse(label, src) {
  try { new vm.Script(src, { filename: label }); return null; }
  catch (e) { return label + ": " + e.message; }
}

if (process.argv.includes("--self-test")) {
  /* The exact fault that shipped: must be caught, or this check is decoration. */
  const bad = parse("self-test", "if(/^/lessons//.test(location.pathname)) location.reload();");
  if (!bad) { console.error("FAIL — the self-test did not catch the broken regex"); process.exit(1); }
  console.log("OK — self-test caught it: " + bad);
  process.exit(0);
}

const nav = require(path.join(__dirname, "nav.js"));
const fails = [
  parse("navScript", body(nav.navScript())),
  parse("modeBoot", body(nav.modeBoot()))
].filter(Boolean);

if (fails.length) {
  console.error("FAIL — a script every page ships does not parse:\n  " + fails.join("\n  "));
  console.error("  Hint: inside the nav.js template literal, \\/ \\d \\s become / d s. Write \\\\/ or avoid the escape.");
  process.exit(1);
}
console.log("OK — navScript (" + (body(nav.navScript()).length / 1024).toFixed(1) + " KB) and modeBoot both parse.");
