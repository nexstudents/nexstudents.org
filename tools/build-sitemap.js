/* build-sitemap.js — walk the built site and write sitemap.xml + robots.txt.

   Run LAST, after every other generator, so it sees the finished site:

     node tools/build-sitemap.js .

   It reads the actual files on disk rather than a hand-kept list, which is the
   only way a sitemap stays true. A page added by any generator appears here
   without anyone remembering to add it.

   Two things are deliberately EXCLUDED:
     - anything carrying a `noindex` meta (the /ela/ redirect stubs)
     - anything under a directory named in SKIP (dead previews)

   Paul, 2026-08-26: the site had noindex on 44 of 46 pages and no sitemap at
   all, so Google had been told to ignore everything but the home page.
*/
"use strict";
const fs = require("fs");
const path = require("path");

const ROOT = process.argv[2];
if (!ROOT) { console.error("usage: build-sitemap.js <site root>"); process.exit(1); }

const SITE = "https://nexstudents.org";

/* Directories that hold real files but no page worth listing. */
const SKIP = new Set(["assets", "preview", "preview-home", "tools", ".git", "node_modules"]);

function walk(dir, out) {
  for (const name of fs.readdirSync(dir)) {
    if (SKIP.has(name)) continue;
    const full = path.join(dir, name);
    const st = fs.statSync(full);
    if (st.isDirectory()) walk(full, out);
    /* index.html is a directory URL. A few real pages are standalone files
       instead - placement-exam.html is one - so those count too. Anything
       starting with _ or . is a working file, never a page, and 404.html is
       excluded by name because it must not be listed. */
    else if (name === "index.html") out.push(full);
    else if (name.endsWith(".html") && name !== "404.html" && !/^[_.]/.test(name)) out.push(full);
  }
  return out;
}

const files = walk(ROOT, []);
const pages = [];
let skipped = 0;

for (const f of files) {
  const html = fs.readFileSync(f, "utf8");
  if (/name=["']robots["'][^>]*noindex/i.test(html)) { skipped++; continue; }

  /* An index.html is a directory URL ending in a slash; anything else is the
     file's own path. The root index becomes "/". */
  const base = path.basename(f);
  let loc;
  if (base === "index.html") {
    const rel = path.relative(ROOT, path.dirname(f)).split(path.sep).join("/");
    loc = SITE + "/" + (rel ? rel + "/" : "");
  } else {
    loc = SITE + "/" + path.relative(ROOT, f).split(path.sep).join("/");
  }

  pages.push({ loc, lastmod: fs.statSync(f).mtime.toISOString().slice(0, 10) });
}

/* Home first, then shortest paths first, so the file reads like the site. */
pages.sort((a, b) => a.loc.length - b.loc.length || a.loc.localeCompare(b.loc));

const xml =
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  pages.map(p =>
    "  <url>\n    <loc>" + p.loc + "</loc>\n    <lastmod>" + p.lastmod + "</lastmod>\n  </url>"
  ).join("\n") +
  "\n</urlset>\n";

fs.writeFileSync(path.join(ROOT, "sitemap.xml"), xml, "utf8");

/* robots.txt. Everything is public, so this is short on purpose: the only job
   that matters is pointing at the sitemap. It must be plain text at the root -
   with no file there, GitHub Pages serves the 404 PAGE at /robots.txt, which
   is HTML where a crawler expects text. That exact thing was reported as a
   critical error on nexedgestudios.com. */
const robots =
  "User-agent: *\n" +
  "Allow: /\n" +
  "\n" +
  "Sitemap: " + SITE + "/sitemap.xml\n";

fs.writeFileSync(path.join(ROOT, "robots.txt"), robots, "utf8");

console.log(JSON.stringify({
  listed: pages.length,
  skippedNoindex: skipped,
  first: pages.slice(0, 3).map(p => p.loc),
}, null, 1));
