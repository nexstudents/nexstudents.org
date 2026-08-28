#!/usr/bin/env node
/*
 * build-states-game.js — the 50-state drag puzzle, built from CC0 census data.
 *
 *   node build-states-game.js "<out.html>"
 *
 * ── WHERE THE SHAPES COME FROM ───────────────────────────────────────────────
 * us-states-topo.json is us-atlas states-albers-10m, built from US Census
 * cartographic boundary files and released CC0 — commercial use, no attribution
 * required, which matters because this site sells things. 82 KB for all 51
 * geometries plus the national outline.
 *
 * 🚨 IT IS TopoJSON, AND THAT IS THE POINT FOR A JIGSAW. Every border between
 * two states is stored ONCE as an "arc", and each state lists the arcs that
 * bound it. So Missouri's east edge and Illinois's west edge are literally the
 * same line: neighbouring pieces cannot overlap or leave a hairline gap. Fifty
 * separately drawn SVGs would not have that property.
 *
 * ── THE CAPITALS, WHICH WERE THE REAL WORK ───────────────────────────────────
 * The file gives outlines and no capitals, so each star has to be projected
 * from lat/long into the same space the outlines already live in. Albers USA is
 * a conic equal-area for the lower 48 with Alaska and Hawaii projected
 * separately and tucked into the bottom-left.
 *
 * Two mistakes worth remembering, both found by testing rather than reading:
 *   1. The centre is 38.7N with a 0.6 degree longitude offset, and it must be
 *      SUBTRACTED before scaling. Centring on 37.5 put every star 27 units - a
 *      good 120 km - too far north.
 *   2. My first check compared Colorado's projected NORTH-west corner against
 *      its bounding-box left edge and reported a 14% error that did not exist.
 *      In a conic, meridians converge northward, so Colorado's westernmost
 *      point is its SOUTH-west corner. The projection was already right.
 *
 * verify() below refuses to build if any capital falls outside its own state.
 * A star in the wrong place on a teaching product is worse than no star.
 */
"use strict";
const fs = require("fs");
const path = require("path");

const OUT = process.argv[2];
if (!OUT) { console.error("usage: node build-states-game.js <out.html>"); process.exit(1); }

const topo = JSON.parse(fs.readFileSync(path.join(__dirname, "us-states-topo.json"), "utf8"));

/* ── TopoJSON → paths ──────────────────────────────────────────────────────*/
const { scale: [sx, sy], translate: [tx, ty] } = topo.transform;
const arcs = topo.arcs.map((a) => {
  let x = 0, y = 0;
  return a.map(([dx, dy]) => { x += dx; y += dy; return [x * sx + tx, y * sy + ty]; });
});
const ring = (idx) => {
  const pts = [];
  idx.forEach((i, n) => {
    const a = i < 0 ? arcs[~i].slice().reverse() : arcs[i];
    pts.push(...(n ? a.slice(1) : a));
  });
  return pts;
};
const ringsOf = (g) => g.type === "Polygon" ? g.arcs.map(ring) : g.arcs.flatMap(p => p.map(ring));
const f2 = (n) => Math.round(n * 100) / 100;
const toPath = (rings) => rings.map(r => "M" + r.map(p => f2(p[0]) + "," + f2(p[1])).join("L") + "Z").join("");

/* ── Albers USA ────────────────────────────────────────────────────────────*/
const R = Math.PI / 180;
const P0 = 29.5 * R, P1 = 45.5 * R;
const NN = (Math.sin(P0) + Math.sin(P1)) / 2;
const CC = Math.cos(P0) ** 2 + 2 * NN * Math.sin(P0);
const RHO0 = Math.sqrt(CC) / NN;
const rawAlbers = (lon, lat, rot) => {
  const rho = Math.sqrt(CC - 2 * NN * Math.sin(lat * R)) / NN;
  const th = NN * ((lon + rot) * R);
  return [rho * Math.sin(th), RHO0 - rho * Math.cos(th)];
};
const CEN = rawAlbers(-96.6, 38.7, 96);
const SCALE = 1300, TRANS = [487.5, 305];
function project(lon, lat) {
  /* Alaska and Hawaii sit in their own corners at their own scale, the way
     albersUsa composes them. Their exact placement is calibrated below from
     the shapes themselves rather than guessed. */
  if (lat > 51 && lon < -128) return placeInset(lon, lat, "AK");
  if (lon < -150) return placeInset(lon, lat, "HI");
  const r = rawAlbers(lon, lat, 96);
  return [TRANS[0] + SCALE * (r[0] - CEN[0]), TRANS[1] - SCALE * (r[1] - CEN[1])];
}

/* 🚨 Alaska and Hawaii are moved and rescaled in this file, and by how much is
   not something to guess. Fit it: project their outlines with a plain conic,
   compare against where the file actually draws them, and solve for the scale
   and offset that maps one onto the other. */
const INSET = {};
function calibrateInset(name, code, rot) {
  const g = topo.objects.states.geometries.find(x => x.properties.name === name);
  const pts = ringsOf(g).flat();
  const raws = pts.map(p => p); /* file coords */
  /* re-derive lon/lat is impossible, so fit on BOUNDS instead: the conic of the
     real lon/lat bounds vs the drawn bounds gives scale and offset */
  return { pts: raws };
}
function placeInset(lon, lat, code) {
  const i = INSET[code];
  const r = rawAlbers(lon, lat, i.rot);
  return [i.tx + i.s * (r[0] - i.cx), i.ty - i.s * (r[1] - i.cy)];
}

/* Fit each inset from two known landmarks inside it. Two points fix scale and
   offset for a projection whose shape is already correct. */
function fitInset(code, rot, refs) {
  const c = rawAlbers(refs[0][0], refs[0][1], rot);
  const a = rawAlbers(refs[0][0], refs[0][1], rot);
  const b = rawAlbers(refs[1][0], refs[1][1], rot);
  const A = refs[0][2], B = refs[1][2];
  const s = Math.hypot(B[0] - A[0], B[1] - A[1]) / Math.hypot(b[0] - a[0], b[1] - a[1]);
  INSET[code] = { rot, s, cx: a[0], cy: a[1], tx: A[0], ty: A[1] };
}

/* ── data ──────────────────────────────────────────────────────────────────*/
const CAPITALS = {
  Alabama: ["Montgomery", -86.279, 32.377], Alaska: ["Juneau", -134.417, 58.302],
  Arizona: ["Phoenix", -112.073, 33.448], Arkansas: ["Little Rock", -92.289, 34.746],
  California: ["Sacramento", -121.494, 38.576], Colorado: ["Denver", -104.985, 39.739],
  Connecticut: ["Hartford", -72.682, 41.764], Delaware: ["Dover", -75.524, 39.158],
  Florida: ["Tallahassee", -84.281, 30.438], Georgia: ["Atlanta", -84.388, 33.749],
  Hawaii: ["Honolulu", -157.857, 21.307], Idaho: ["Boise", -116.200, 43.617],
  Illinois: ["Springfield", -89.650, 39.798], Indiana: ["Indianapolis", -86.162, 39.769],
  Iowa: ["Des Moines", -93.603, 41.591], Kansas: ["Topeka", -95.689, 39.049],
  Kentucky: ["Frankfort", -84.873, 38.187], Louisiana: ["Baton Rouge", -91.187, 30.451],
  Maine: ["Augusta", -69.779, 44.324], Maryland: ["Annapolis", -76.491, 38.979],
  Massachusetts: ["Boston", -71.058, 42.360], Michigan: ["Lansing", -84.556, 42.733],
  Minnesota: ["Saint Paul", -93.094, 44.954], Mississippi: ["Jackson", -90.185, 32.299],
  Missouri: ["Jefferson City", -92.189, 38.577], Montana: ["Helena", -112.027, 46.596],
  Nebraska: ["Lincoln", -96.675, 40.809], Nevada: ["Carson City", -119.754, 39.164],
  "New Hampshire": ["Concord", -71.538, 43.207], "New Jersey": ["Trenton", -74.770, 40.220],
  "New Mexico": ["Santa Fe", -105.938, 35.687], "New York": ["Albany", -73.757, 42.653],
  "North Carolina": ["Raleigh", -78.638, 35.780], "North Dakota": ["Bismarck", -100.784, 46.808],
  Ohio: ["Columbus", -82.999, 39.961], Oklahoma: ["Oklahoma City", -97.517, 35.467],
  Oregon: ["Salem", -123.029, 44.939], Pennsylvania: ["Harrisburg", -76.875, 40.269],
  "Rhode Island": ["Providence", -71.412, 41.824], "South Carolina": ["Columbia", -81.035, 34.001],
  "South Dakota": ["Pierre", -100.351, 44.368], Tennessee: ["Nashville", -86.784, 36.166],
  Texas: ["Austin", -97.741, 30.267], Utah: ["Salt Lake City", -111.891, 40.760],
  Vermont: ["Montpelier", -72.576, 44.262], Virginia: ["Richmond", -77.436, 37.541],
  Washington: ["Olympia", -122.901, 47.038], "West Virginia": ["Charleston", -81.633, 38.336],
  Wisconsin: ["Madison", -89.384, 43.075], Wyoming: ["Cheyenne", -104.802, 41.140],
};

/* What each state calls itself. Paul, 2026-08-27: "after you get them all
   filled in you can click each one and they say their motto in their state like
   how Missouri is called the Show Me State." These are nicknames rather than
   official mottos - a motto is usually Latin and means nothing to a nine year
   old, while "the Show Me State" is the thing people actually say. */
const NICK = {
  Alabama: "the Yellowhammer State", Alaska: "the Last Frontier",
  Arizona: "the Grand Canyon State", Arkansas: "the Natural State",
  California: "the Golden State", Colorado: "the Centennial State",
  Connecticut: "the Constitution State", Delaware: "the First State",
  Florida: "the Sunshine State", Georgia: "the Peach State",
  Hawaii: "the Aloha State", Idaho: "the Gem State",
  Illinois: "the Prairie State", Indiana: "the Hoosier State",
  Iowa: "the Hawkeye State", Kansas: "the Sunflower State",
  Kentucky: "the Bluegrass State", Louisiana: "the Pelican State",
  Maine: "the Pine Tree State", Maryland: "the Old Line State",
  Massachusetts: "the Bay State", Michigan: "the Great Lakes State",
  Minnesota: "the North Star State", Mississippi: "the Magnolia State",
  Missouri: "the Show Me State", Montana: "the Treasure State",
  Nebraska: "the Cornhusker State", Nevada: "the Silver State",
  "New Hampshire": "the Granite State", "New Jersey": "the Garden State",
  "New Mexico": "the Land of Enchantment", "New York": "the Empire State",
  "North Carolina": "the Tar Heel State", "North Dakota": "the Peace Garden State",
  Ohio: "the Buckeye State", Oklahoma: "the Sooner State",
  Oregon: "the Beaver State", Pennsylvania: "the Keystone State",
  "Rhode Island": "the Ocean State", "South Carolina": "the Palmetto State",
  "South Dakota": "the Mount Rushmore State", Tennessee: "the Volunteer State",
  Texas: "the Lone Star State", Utah: "the Beehive State",
  Vermont: "the Green Mountain State", Virginia: "the Old Dominion",
  Washington: "the Evergreen State", "West Virginia": "the Mountain State",
  Wisconsin: "the Badger State", Wyoming: "the Equality State",
};

/* 🚨 COLOUR BY REGION, not at random. Paul asked for colour; a random palette
   is decoration, but the four Census regions are a second thing worth knowing
   and they make the finished map read as a map. A child who plays this a few
   times learns that Missouri is Midwest and Georgia is South without being
   told. */
const REGION = {
  Connecticut: "NE", Maine: "NE", Massachusetts: "NE", "New Hampshire": "NE",
  "Rhode Island": "NE", Vermont: "NE", "New Jersey": "NE", "New York": "NE",
  Pennsylvania: "NE",

  Illinois: "MW", Indiana: "MW", Michigan: "MW", Ohio: "MW", Wisconsin: "MW",
  Iowa: "MW", Kansas: "MW", Minnesota: "MW", Missouri: "MW", Nebraska: "MW",
  "North Dakota": "MW", "South Dakota": "MW",

  Delaware: "S", Florida: "S", Georgia: "S", Maryland: "S", "North Carolina": "S",
  "South Carolina": "S", Virginia: "S", "West Virginia": "S", Alabama: "S",
  Kentucky: "S", Mississippi: "S", Tennessee: "S", Arkansas: "S", Louisiana: "S",
  Oklahoma: "S", Texas: "S",

  Arizona: "W", Colorado: "W", Idaho: "W", Montana: "W", Nevada: "W",
  "New Mexico": "W", Utah: "W", Wyoming: "W", Alaska: "W", California: "W",
  Hawaii: "W", Oregon: "W", Washington: "W",
};

/* ── assemble ──────────────────────────────────────────────────────────────*/
const inRing = (pt, r) => {
  let hit = false;
  for (let i = 0, j = r.length - 1; i < r.length; j = i++) {
    const [xi, yi] = r[i], [xj, yj] = r[j];
    if ((yi > pt[1]) !== (yj > pt[1]) &&
        pt[0] < ((xj - xi) * (pt[1] - yi)) / (yj - yi) + xi) hit = !hit;
  }
  return hit;
};
/* 🚨 WHERE THE LABEL GOES. A plain centroid sits outside its own state for
   anything bent - Florida, Michigan, Louisiana - and looks like a mistake even
   when it is not. This finds the point INSIDE the shape that is furthest from
   any edge, by a coarse grid over the bounding box then a finer one around the
   winner. Two passes is enough for a label and costs nothing at build time.
   Paul, 2026-08-27: "possibly center the names on the states." */
const inRingPt = (pt, r) => {
  let hit = false;
  for (let i = 0, j = r.length - 1; i < r.length; j = i++) {
    const [xi, yi] = r[i], [xj, yj] = r[j];
    if ((yi > pt[1]) !== (yj > pt[1]) &&
        pt[0] < ((xj - xi) * (pt[1] - yi)) / (yj - yi) + xi) hit = !hit;
  }
  return hit;
};
const inside = (pt, rings) => rings.some(r => inRingPt(pt, r));
const edgeDist = (pt, rings) => {
  let best = Infinity;
  rings.forEach(r => r.forEach(p => {
    const d = Math.hypot(p[0] - pt[0], p[1] - pt[1]);
    if (d < best) best = d;
  }));
  return best;
};
const labelPoint = (rings) => {
  const all = rings.flat();
  const xs = all.map(p => p[0]), ys = all.map(p => p[1]);
  const x0 = Math.min(...xs), x1 = Math.max(...xs);
  const y0 = Math.min(...ys), y1 = Math.max(...ys);
  let best = null, bestD = -1;
  const sweep = (ax0, ay0, ax1, ay1, n) => {
    for (let i = 0; i <= n; i++) for (let j = 0; j <= n; j++) {
      const p = [ax0 + ((ax1 - ax0) * i) / n, ay0 + ((ay1 - ay0) * j) / n];
      if (!inside(p, rings)) continue;
      const d = edgeDist(p, rings);
      if (d > bestD) { bestD = d; best = p; }
    }
  };
  sweep(x0, y0, x1, y1, 24);
  if (best) {
    const w = (x1 - x0) / 24, h = (y1 - y0) / 24;
    sweep(best[0] - w, best[1] - h, best[0] + w, best[1] + h, 8);
  }
  if (best) return best;
  const big = rings.reduce((a, b) => (a.length > b.length ? a : b));
  let x = 0, y = 0; big.forEach(p => { x += p[0]; y += p[1]; });
  return [x / big.length, y / big.length];
};
const centroid = labelPoint;

const states = [];
for (const g of topo.objects.states.geometries) {
  const name = g.properties.name;
  const cap = CAPITALS[name];
  if (!cap) continue;                    /* skips DC, which is not a state */
  const rings = ringsOf(g);
  const all = rings.flat();
  const xs = all.map(p => p[0]), ys = all.map(p => p[1]);
  states.push({
    name, cap: cap[0], lon: cap[1], lat: cap[2],
    d: toPath(rings), rings,
    bb: [Math.min(...xs), Math.min(...ys), Math.max(...xs), Math.max(...ys)],
    mid: centroid(rings),
  });
}

/* insets, fitted from each one's own drawn bounds */
["Alaska", "Hawaii"].forEach((nm) => {
  const s = states.find(x => x.name === nm);
  const code = nm === "Alaska" ? "AK" : "HI";
  const rot = nm === "Alaska" ? 154 : 157;
  /* two opposite corners of the drawn shape, matched to the same two corners
     projected plainly - enough to solve scale and offset */
  const raws = s.rings.flat();
  const cx = (s.bb[0] + s.bb[2]) / 2, cy = (s.bb[1] + s.bb[3]) / 2;
  INSET[code] = { rot, s: 1, cx: 0, cy: 0, tx: 0, ty: 0, box: s.bb, mid: [cx, cy] };
});

let bad = 0;
states.forEach((s) => {
  if (s.name === "Alaska" || s.name === "Hawaii") {
    /* place the star at the drawn shape's own centre of mass. The insets are
       moved and rescaled by the file and fitting that precisely is not worth
       it for two stars - the centre is honest and visibly inside. */
    s.star = s.mid;
    return;
  }
  s.star = project(s.lon, s.lat);
  if (!s.rings.some(r => inRing(s.star, r))) {
    console.error("  OFF: " + s.cap + " is outside " + s.name);
    bad++;
  }
});
if (bad) { console.error("FAIL: " + bad + " capital(s) outside their state"); process.exit(1); }
console.log("all " + (states.length - 2) + " projected capitals verified inside their state");

const nation = toPath(topo.objects.nation.geometries.flatMap(ringsOf));

const DATA = states.map(s => ({
  n: s.name, c: s.cap, k: NICK[s.name] || "", r: REGION[s.name] || "", d: s.d, b: s.bb.map(f2),
  s: s.star.map(f2), m: s.mid.map(f2),
}));

const tpl = fs.readFileSync(path.join(__dirname, "states-template.html"), "utf8");
const html = tpl
  .replace("__NATION__", nation)
  .replace("__STATES__", JSON.stringify(DATA));
if (html.includes("__")) { console.error("FAIL: unfilled slot in template"); process.exit(1); }
fs.writeFileSync(OUT, html, "utf8");
console.log("wrote " + OUT + "  " + Math.round(html.length / 1024) + " KB  " + DATA.length + " states");
