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
/* ── 2. EVERY PAGE SHIPS THE CURRENT ONE (2026-09-11) ─────────────────────
   build-split.js was missing from the README's rebuild list, so its lesson
   kept a week-old account panel (no Delete Account, no password eye) while
   every other page had the new one, and every check passed. The README had
   already warned about exactly this after 2026-09-02. So now any built page
   carrying the panel must carry TODAY's navScript, byte for byte, in the page
   or in the lesson-shared bundle it loads. */
const fs = require("fs");
const ROOT = path.resolve(process.argv[2] || ".");
const cur = body(nav.navScript());
const MARK = "function adFrame(";
const bundles = {};
function bundle(name) {
  if (!(name in bundles)) { try { bundles[name] = fs.readFileSync(path.join(ROOT, "assets", name), "utf8"); } catch (e) { bundles[name] = ""; } }
  return bundles[name];
}
const stale = [];
let pages = 0;
(function walk(dir) {
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    if (f.name.startsWith(".") || f.name === "node_modules" || f.name === "tools") continue;
    const p = path.join(dir, f.name);
    if (f.isDirectory()) { walk(p); continue; }
    if (!f.name.endsWith(".html")) continue;
    let txt = fs.readFileSync(p, "utf8");
    for (const m of txt.matchAll(/\/assets\/(lesson-shared\.[^"']+\.js)/g)) {
      /* A page pointing at a bundle that is gone has no panel at all. */
      if (!bundle(m[1])) { stale.push(path.relative(ROOT, p) + " (loads missing " + m[1] + ")"); continue; }
      txt += bundle(m[1]);
    }
    if (txt.indexOf(MARK) < 0) continue;
    pages++;
    if (txt.indexOf(cur) < 0) stale.push(path.relative(ROOT, p));
  }
})(ROOT);
if (stale.length) {
  console.error("FAIL — " + stale.length + " page(s) ship an OLD account panel / nav script:\n  " + stale.slice(0, 20).join("\n  "));
  console.error("  Hint: a generator that uses nav.js was not re-run. Check tools/README.md's rebuild list.");
  process.exit(1);
}
console.log("OK — navScript (" + (cur.length / 1024).toFixed(1) + " KB) and modeBoot both parse, and all " + pages + " pages carrying the panel ship the current one.");
