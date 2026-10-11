/* Browser test for an ONLINE homework sheet (homework-sheet.js onlineBlock).
   Run on a sheet's /print/ page through the Claude-in-Chrome javascript tool,
   or paste into DevTools. Returns PASS/FAIL lines. It clears the sheet's saved
   record before and after, so it never leaves a fake score behind.
   Companion: blocks.js (the lesson block games). 2026-10-11. */
(() => {
  const out = [];
  const ok = (c, m) => out.push((c ? "PASS " : "FAIL ") + m);
  const box = document.getElementById("hwcheck");
  if (!box) return "FAIL no #hwcheck: this sheet is not online";
  const KEY = "ns:done:" + box.getAttribute("data-hw"), DRAFT = box.getAttribute("data-draft");
  const clear = () => { localStorage.removeItem(KEY); localStorage.removeItem(DRAFT); };
  clear();
  const ins = [...document.querySelectorAll(".hwin")], rows = document.querySelectorAll(".hwitem");
  const go = () => document.getElementById("hwgo").click();
  const score = () => document.getElementById("hwscore").textContent;
  const good = (c) => typeof c === "number" ? String(c) : Array.isArray(c) ? c.slice().reverse().join(" and ")
    : c === "none" ? "no mode" : c.charAt(0).toUpperCase() + c.slice(1);
  const key = document.querySelector(".key");
  ok(getComputedStyle(key).display === "none", "key hidden on screen");
  ins.forEach((i) => { const c = JSON.parse(i.getAttribute("data-check"));
    i.value = typeof c === "object" && !Array.isArray(c) ? "" : good(c); });
  go();
  ok(score().startsWith(rows.length + " of " + rows.length + " right (100%)"), "all right: " + score());
  ok(document.querySelectorAll(".hwin.is-right").length === ins.length, "every box green");
  const rec = JSON.parse(localStorage.getItem(KEY) || "null");
  ok(rec && rec.complete === true && rec.score === rows.length && rec.answers.length === ins.length, "record saved as complete");
  ok(!!document.getElementById("hwauto"), "auto score line for print: " + (document.getElementById("hwauto") || {}).textContent);
  ins[0].value = "999"; const blankI = ins[1]; blankI.value = ""; go();
  ok(ins[0].classList.contains("is-wrong"), "wrong answer red");
  ok(!blankI.classList.contains("is-wrong") && !blankI.classList.contains("is-right"), "blank left unmarked");
  const rec2 = JSON.parse(localStorage.getItem(KEY));
  ok(rec2.complete === false && rec2.score === rows.length - 2, "record updated: " + rec2.score + "/" + rec2.total);
  document.getElementById("hwkey").click();
  ok(getComputedStyle(key).display === "block", "Show Answer Key shows it");
  document.getElementById("hwkey").click();
  clear();
  return out.join("\n");
})()
