/* Paul picked the name: Show Me The States. Renaming now, while it is cheap -
   the old URL went live minutes ago and nothing outside the site links to it.
   A redirect still goes in at the old address, because it is in the sitemap and
   may already have been crawled, and GitHub Pages has no redirect rules - a
   real HTML page is the only way to do it here. */
const fs = require("fs");
const sub = (f, pairs) => {
  let s = fs.readFileSync(f, "utf8");
  pairs.forEach(([a, b]) => {
    if (!s.includes(a)) { console.error("MISS " + f + ": " + a.slice(0, 44)); process.exitCode = 1; return; }
    s = s.split(a).join(b);
  });
  fs.writeFileSync(f, s, "utf8");
};

sub("games/states-template.html".replace("games/", "games/"), []);   /* no-op guard */

sub("games/states-template.html", [
  ["<title>Place the State | NexStudents</title>", "<title>Show Me The States | NexStudents</title>"],
  ["<h1>Place the State</h1>", "<h1>Show Me The States</h1>"],
]);

sub("build-pages.js", [
  ['{ title: "Place the State", href: "/games/place-the-state/", subject: "History",',
   '{ title: "Show Me The States", href: "/games/show-me-the-states/", subject: "History",'],
]);

sub("nav.js", [
  ['{ label: "Place the State", href: "/games/place-the-state/" }',
   '{ label: "Show Me The States", href: "/games/show-me-the-states/" }'],
  ['{ label: "Place the State", href: "/games/place-the-state/", note: "Fifty states and capitals" },',
   '{ label: "Show Me The States", href: "/games/show-me-the-states/", note: "Fifty states and capitals" },'],
  ["Place the State is playable now.", "Show Me The States is playable now."],
]);

console.log("renamed");
