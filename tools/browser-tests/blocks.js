(() => {
  const out = [];
  const ok = (c, m) => out.push((c ? "PASS " : "FAIL ") + m);
  const cols = (g) => [...g.querySelectorAll(".bk-col")];
  const hts = (g) => cols(g).map((c) => c.querySelectorAll(".bk-b").length);
  const msg = (g) => g.querySelector(".bk-msg").textContent;
  const tap = (g, k) => cols(g)[k].click();
  const games = [...document.querySelectorAll(".bk")];
  ok(games.length === 4, "four games on the page (" + games.length + ")");

  // MEAN
  const mean = games.find((g) => g.dataset.kind === "mean");
  const start = hts(mean), tot = start.reduce((a, b) => a + b, 0), n = start.length;
  let guard = 0;
  while (!mean.querySelector(".bk-msg.good") && guard++ < 50) {
    const h = hts(mean); const hi = h.indexOf(Math.max(...h)), lo = h.indexOf(Math.min(...h));
    tap(mean, hi); tap(mean, lo);
  }
  ok(hts(mean).every((x) => x === tot / n), "mean: stacks level at " + tot / n + " -> " + hts(mean));
  ok(/mean/.test(msg(mean)) && msg(mean).includes(tot + " ÷ " + n + " = " + tot / n), "mean: message says " + msg(mean));
  ok(mean.querySelectorAll(".bk-col.is-glow").length === n, "mean: every stack glows");
  ok(hts(mean).reduce((a, b) => a + b, 0) === tot, "mean: no blocks lost or made");
  [...mean.querySelectorAll(".bk-btn")].find((b) => /Start Over/.test(b.textContent)).click();
  ok(String(hts(mean)) === String(start) && !mean.querySelector(".bk-msg.good"), "mean: Start Over resets");
  tap(mean, 0); tap(mean, 0);
  ok(/Put it back/.test(msg(mean)) && String(hts(mean)) === String(start), "mean: tapping the same stack twice puts the block back");

  // MEDIAN (odd and even)
  const meds = games.filter((g) => g.dataset.kind === "median");
  meds.forEach((g, gi) => {
    tap(g, 1);
    ok(/Line them up first/.test(msg(g)), "median " + gi + ": refuses before lining up");
    g.querySelector(".bk-go").click();
    const h = hts(g);
    ok(h.every((x, i) => i === 0 || h[i - 1] <= x), "median " + gi + ": sorted " + h);
    if (h.length > 2) { tap(g, 1); ok(/END stack/.test(msg(g)), "median " + gi + ": refuses a middle stack"); }
    tap(g, 0); tap(g, 1);
    ok(/tall end/.test(msg(g)), "median " + gi + ": refuses two from the same side");
    let L = 1, R = h.length - 1, side = 1;
    while (!g.querySelector(".bk-msg.good") && L <= R) { if (side) { tap(g, R); R--; } else { tap(g, L); L++; } side = 1 - side; }
    const s = h.slice().sort((a, b) => a - b);
    const want = s.length % 2 ? s[(s.length - 1) / 2] : (s[s.length / 2 - 1] + s[s.length / 2]) / 2;
    ok(msg(g).includes("median is " + want) || msg(g).includes("= " + want + "."), "median " + gi + ": answer " + want + " -> " + msg(g));
    ok(g.querySelectorAll(".bk-col.is-glow").length === (s.length % 2 ? 1 : 2), "median " + gi + ": right stacks glow");
  });

  // MODE
  const mode = games.find((g) => g.dataset.kind === "mode");
  const mh = hts(mode); const c = {}; mh.forEach((x) => (c[x] = (c[x] || 0) + 1));
  const best = Math.max(...Object.values(c)); const m = +Object.keys(c).find((k) => c[k] === best);
  tap(mode, mh.findIndex((x) => x !== m));
  ok(!mode.querySelector(".bk-msg.good") && /Look for a height/.test(msg(mode)), "mode: a wrong height is refused");
  tap(mode, mh.indexOf(m));
  ok(msg(mode).includes("mode is " + m) && msg(mode).includes("not the " + best), "mode: " + msg(mode));
  ok(mode.querySelectorAll(".bk-col.is-glow").length === best, "mode: all " + best + " stacks glow");
  return out.join("\n");
})()
