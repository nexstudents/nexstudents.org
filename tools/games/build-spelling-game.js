#!/usr/bin/env node
/*
 * build-spelling-game.js — Spelling Ladder, from the site's own word lists.
 *
 *   node tools/games/build-spelling-game.js
 *
 * Reads spelling-template.html, injects every grade's weeks, and writes
 * games/spelling-ladder/index.html. The words live ONCE, in the word-list
 * files; the game never carries its own copy to drift out of date.
 *
 * ADDING A GRADE: write tools/spelling-words-grade-N.js in the same shape as
 * spelling-words.js (36 weeks, `words` + `bonus`) and add it to GRADES below.
 * The grade picker fills itself from whatever is here.
 */
"use strict";
const fs = require("fs");
const path = require("path");

const GRADES = {
  3: require("../spelling-words.js").WEEKS,
};

const lists = {};
for (const [g, weeks] of Object.entries(GRADES)) {
  lists[g] = weeks.map(w => {
    if (!w.words || !w.bonus) throw new Error(`grade ${g} week ${w.n} has no words or bonus`);
    return { n: w.n, focus: w.focus, words: w.words, bonus: w.bonus };
  });
}

const tpl = fs.readFileSync(path.join(__dirname, "spelling-template.html"), "utf8");
if (!tpl.includes("/*LISTS*/null")) throw new Error("template has no /*LISTS*/null marker");
/* `<` escaped so no word can ever close the script tag */
const json = JSON.stringify(lists).replace(/</g, "\\u003c");
const out = path.join(__dirname, "..", "..", "games", "spelling-ladder", "index.html");
fs.writeFileSync(out, tpl.replace("/*LISTS*/null", json), "utf8");
console.log("wrote " + path.relative(process.cwd(), out) + " · grades " +
  Object.keys(lists).join(", ") + " · " +
  Object.values(lists).reduce((t, w) => t + w.length, 0) + " weeks");
