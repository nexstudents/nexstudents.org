#!/usr/bin/env node
/*
 * wrap-lesson.js — turn an artifact lesson page into a standalone site page.
 *
 * The artifact publisher supplies the doctype/head/body skeleton and a CSS reset.
 * A page served from nexstudents.org gets none of that, so we add it here, plus a
 * back link to the subject hub. The lesson's own <style>/<script> are untouched.
 *
 *   node wrap-lesson.js <source.html> <dest/index.html> --back=/history/ --backLabel="History"
 */
"use strict";
const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);
const opt = (n, d) => {
  const h = args.find((a) => a.startsWith("--" + n + "="));
  return h ? h.slice(n.length + 3) : d;
};
const files = args.filter((a) => !a.startsWith("--"));
if (files.length < 2) { console.error("usage: wrap-lesson.js <src> <dest> [--back=/history/]"); process.exit(1); }

const [src, dest] = files;
const BACK = opt("back", "/history/");
const BACK_LABEL = opt("backLabel", "History");

let body = fs.readFileSync(src, "utf8");

// Pull the <title> and the font <link>s up into the head we are about to build.
const titleMatch = body.match(/<title>([\s\S]*?)<\/title>/i);
const title = titleMatch ? titleMatch[1].trim() : "Lesson";
body = body.replace(/<title>[\s\S]*?<\/title>\s*/i, "");

const links = [];
body = body.replace(/<link\b[^>]*>\s*/gi, (m) => { links.push(m.trim()); return ""; });

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex,nofollow">
<title>${title} | NexStudents</title>
<meta name="description" content="A NexStudents history lesson: read along, then find the answers in the text.">
${links.join("\n")}
<style>
  /* the reset the artifact host normally provides */
  *,*::before,*::after{box-sizing:border-box}
  html{-webkit-text-size-adjust:100%}
  img,svg{max-width:100%}
  /* back link to the subject hub, in the lesson's own palette */
  .ns-back{
    font-family:"IBM Plex Sans",system-ui,sans-serif;
    max-width:660px;margin:0 auto;padding:18px 22px 0;
    font-size:13px;font-weight:600;letter-spacing:.04em;
  }
  .ns-back a{color:var(--verdigris);text-decoration:none;display:inline-flex;gap:7px;align-items:center}
  .ns-back a:hover{text-decoration:underline}
  .ns-back a:focus-visible{outline:2px solid var(--verdigris);outline-offset:3px;border-radius:2px}
</style>
</head>
<body>
<div class="ns-back"><a href="${BACK}">&larr; ${BACK_LABEL}</a></div>
${body}
</body>
</html>
`;

fs.mkdirSync(path.dirname(dest), { recursive: true });
fs.writeFileSync(dest, html, "utf8");
console.log(`wrote ${dest}  (${(Buffer.byteLength(html) / 1024).toFixed(0)} KB, title "${title}")`);
