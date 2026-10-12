
/* TEACHER NOTES, THE CLIENT HALF (2026-10-12, ROADMAP 92)
   Inlined into every lesson page by lesson-notes.js, through lessonFoot(), so all five
   engines get the same code and none of them carries a copy.

   WHAT IT DOES
   1. VIDEOS. A parent adds YouTube links PER STUDENT inside Teacher Notes (table
      lesson_videos, migration 021). The lesson stops shipping a video of its own.
   2. THE PANEL. It publishes the ACTIVE student's saved videos as
      window.NSLessonVideos and the document event "ns:videos". The reading engine
      listens and shows them in the Visual Panel. Nothing here touches the panel.
   3. THE PIN. Opening Teacher Notes asks for the teacher PIN, see needsPin() below.
   4. LESSON SECTIONS (ROADMAP 92, migration 023). Per student, a checkbox for each section
      the lesson has (question sets, word cards, Your Turn, homework), saved for THIS lesson
      or for EVERY lesson of the subject at that grade. The active STUDENT's Off sections are
      handed to the engine (window.NSLessonSections, event "ns:sections") which hides them and
      scores only what is left. A lesson row beats a subject row, see effectiveHidden().

   HOW IT IS BUILT
   This is a plain file, read off disk by lesson-notes.js. It is NOT a template literal, so
   backticks and backslashes are safe here. It is also loaded by node for the unit test
   (module.exports at the bottom), so the pure functions stay free of the DOM.

   🚨 THE PIN IS A HOUSEHOLD COURTESY, NOT SECURITY, exactly like the profile PIN
   (BEHAVIOR.md: WHO IS ACTIVE IS A PER-DEVICE HOUSEHOLD SETTING). It keeps a child
   from wandering into the answer key and the reset; a determined one can read the page
   source. The SERVER still checks the PIN (check_pin) and still counts wrong tries
   toward the five-try lock, so a guess is never free. Public lessons stay readable:
   signed out, or no PIN set, or the teacher turned the setting off = Teacher Notes
   opens freely.

   ⚠️ Until migration 021 is applied every videos call fails (and 023 for sections: "Lesson
   sections aren't switched on yet.", the lesson shows everything). That is expected: the
   Teacher Notes section says "Videos aren't switched on yet." and the panel behaves as
   it always did. */
(function(root){
"use strict";

var VIDEO_CAP = 12;                      /* the same cap the database trigger enforces */

/* ── pure helpers (unit-tested in node) ─────────────────────────────────── */

/* "90", "90s", "1m30s", "1h2m3s" -> seconds. Anything else -> 0. */
function parseStart(raw){
  var s = String(raw == null ? "" : raw).trim().toLowerCase();
  if (!s) return 0;
  if (/^\d+$/.test(s)) return parseInt(s, 10);
  var m = /^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/.exec(s);
  if (!m || !(m[1] || m[2] || m[3])) return 0;
  return (+m[1] || 0) * 3600 + (+m[2] || 0) * 60 + (+m[3] || 0);
}

/* A pasted link -> { id, start } or null. Accepts watch?v=, youtu.be/, /shorts/ and
   /embed/ on youtube.com (and youtube-nocookie.com), with an optional t= or start=. */
function parseYouTube(raw){
  var s = String(raw == null ? "" : raw).trim();
  if (!s) return null;
  if (!/^[a-z][a-z0-9+.\-]*:\/\//i.test(s)) s = "https://" + s;
  var u;
  try { u = new URL(s); } catch (e) { return null; }
  if (u.protocol !== "https:" && u.protocol !== "http:") return null;
  var host = u.hostname.toLowerCase().replace(/^(www\.|m\.)/, "");
  var id = "", m;
  if (host === "youtu.be") {
    id = u.pathname.split("/")[1] || "";
  } else if (host === "youtube.com" || host === "youtube-nocookie.com") {
    if (u.pathname === "/watch") id = u.searchParams.get("v") || "";
    else if ((m = /^\/(?:shorts|embed)\/([^\/?#]+)/.exec(u.pathname))) id = m[1];
  } else {
    return null;
  }
  if (!/^[A-Za-z0-9_\-]{11}$/.test(id)) return null;
  return { kind: "youtube", id: id, start: parseStart(u.searchParams.get("t") || u.searchParams.get("start")) };
}

/* 🎬 ANY VIDEO, NOT ONLY YOUTUBE (Paul, 2026-10-12: "technically I think it can be any kind
   of video not just YouTube videos"). What a parent is likely to have: YouTube, Vimeo, a
   Google Drive file shared as "anyone with the link", or a direct link to a video file.
   -> { kind, id, start } or null. `id` is what the player needs for that kind; for a
   "file" it is the whole https address. The database re-checks every shape (migration 022). */
function parseVideo(raw){
  var yt = parseYouTube(raw);
  if (yt) return yt;
  var s = String(raw == null ? "" : raw).trim();
  if (!s) return null;
  if (!/^[a-z][a-z0-9+.\-]*:\/\//i.test(s)) s = "https://" + s;
  var u;
  try { u = new URL(s); } catch (e) { return null; }
  if (u.protocol !== "https:") return null;
  var host = u.hostname.toLowerCase().replace(/^www\./, "");
  var m;
  if (host === "vimeo.com" || host === "player.vimeo.com") {
    /* vimeo.com/123456789, vimeo.com/123456789/abcdef1234 (unlisted), player.vimeo.com/video/123456789?h=abc */
    m = /^\/(?:video\/)?(\d{6,12})(?:\/([0-9a-f]{6,20}))?\/?$/.exec(u.pathname);
    if (!m) return null;
    var h = m[2] || u.searchParams.get("h") || "";
    if (h && !/^[0-9a-f]{6,20}$/.test(h)) h = "";
    return { kind: "vimeo", id: m[1] + (h ? "/" + h : ""), start: parseStart((u.hash.match(/t=([0-9hms]+)/) || [])[1]) };
  }
  if (host === "drive.google.com") {
    m = /^\/file\/d\/([A-Za-z0-9_\-]{20,80})/.exec(u.pathname);
    var did = m ? m[1] : (u.searchParams.get("id") || "");
    if (!/^[A-Za-z0-9_\-]{20,80}$/.test(did)) return null;
    return { kind: "drive", id: did, start: 0 };
  }
  if (/\.(mp4|webm|m4v|mov)$/i.test(u.pathname) && s.length <= 800 && !/[\s"'<>]/.test(s))
    return { kind: "file", id: u.href, start: 0 };
  return null;
}

/* The picture for a tile or a list row. Only YouTube hands one out by address; the rest
   get a plain play box (CSS), so nothing is fetched from a host the page doesn't use. */
function thumbFor(kind, id){
  return kind === "youtube" || !kind ? "https://i.ytimg.com/vi/" + id + "/mqdefault.jpg" : "";
}

/* "subject/slug" from the page address, the same id progress uses. */
function lessonIdFrom(pathname){
  var m = /^\/lessons\/(.+?)\/?(?:index\.html)?$/.exec(String(pathname || ""));
  return m ? m[1].replace(/\/$/, "") : "";
}

/* Which saved videos the panel should show: the active profile's, and only if that
   profile is a STUDENT. The account holder and a second parent get nothing, so the
   panel behaves as it did before. */
function videosForActive(rows, profiles, activeId){
  var kid = (profiles || []).filter(function(p){ return p.id === activeId && p.kind === "student"; })[0];
  if (!kid) return { student: null, items: [] };
  var items = (rows || []).filter(function(r){ return r.student_id === kid.id; })
    .sort(function(a, b){ return (a.position - b.position) || String(a.created_at || "").localeCompare(String(b.created_at || "")); })
    .map(function(r, i){
      return { kind: r.kind || "youtube", id: r.video_id, start: r.start_s || 0, label: r.label || ("Video " + (i + 1)), rowId: r.id };
    });
  return { student: kid, items: items };
}

/* Does opening Teacher Notes ask for the PIN, and whose? Returns { ask, key }.
   ask  = signed in AND somebody has a PIN AND the teacher did not turn it off.
   key  = which PIN to check, in the form checkPin() takes: null = the account holder,
          else a parent row id. The active parent's own PIN wins; otherwise the
          account holder's; otherwise the first parent who has one. */
function needsPin(info){
  if (!info || !info.signedIn) return { ask: false, key: null };
  var settings = (info.me && info.me.user_metadata && info.me.user_metadata.settings) || {};
  if (settings.notesPin === false) return { ask: false, key: null };
  var pins = info.pins || {};
  var ids = Object.keys(pins).filter(function(k){ return pins[k] && k !== "owner"; });
  var active = info.activeId;
  var mine = (info.profiles || []).filter(function(p){ return p.id === active && p.kind === "parent"; })[0];
  if (mine && pins[mine.id]) return { ask: true, key: mine.id };
  if (pins.owner) return { ask: true, key: null };
  if (ids.length) return { ask: true, key: ids[0] };
  return { ask: false, key: null };
}

/* ── lesson sections: pure helpers ──────────────────────────────────────────
   Keys are generic across a subject: set1..set9 question sets in page order, vocab, work,
   homework. Anything else is ignored, which is also what the database check enforces. */
var SECTION_KEY = /^(set[1-9]|vocab|work|homework)$/;
function cleanKeys(list){
  var seen = {}, out = [];
  (list || []).forEach(function(k){
    k = String(k);
    if (SECTION_KEY.test(k) && !seen[k]) { seen[k] = true; out.push(k); }
  });
  return out.slice(0, 12);
}

/* What is Off for ONE student in THIS lesson, and where that came from.
   🚨 A LESSON ROW OVERRIDES THE SUBJECT ROW WHOLE (Paul: "only to this lesson or this entire
   subject"). A lesson row that says [] means "everything On here" even when the subject row
   hides something: that is how a parent exempts one lesson. -> { hidden, from } with from
   "lesson", "subject" or null. */
function effectiveHidden(rows, studentId, lessonKey, subjectKey){
  var mine = (rows || []).filter(function(r){ return r.student_id === studentId; });
  var les = mine.filter(function(r){ return r.scope === "lesson" && r.scope_key === lessonKey; })[0];
  if (les) return { hidden: cleanKeys(les.hidden), from: "lesson" };
  var sub = subjectKey ? mine.filter(function(r){ return r.scope === "subject" && r.scope_key === subjectKey; })[0] : null;
  if (sub) return { hidden: cleanKeys(sub.hidden), from: "subject" };
  return { hidden: [], from: null };
}

/* What the page hides right now: only when the ACTIVE profile is a student. The account
   holder and a second parent see the whole lesson, so they can always undo a switch. */
function hiddenForActive(rows, profiles, activeId, lessonKey, subjectKey){
  var kid = (profiles || []).filter(function(p){ return p.id === activeId && p.kind === "student"; })[0];
  return kid ? effectiveHidden(rows, kid.id, lessonKey, subjectKey).hidden : [];
}

var api = { cleanKeys: cleanKeys, effectiveHidden: effectiveHidden, hiddenForActive: hiddenForActive,
            parseYouTube: parseYouTube, parseVideo: parseVideo, thumbFor: thumbFor, parseStart: parseStart, lessonIdFrom: lessonIdFrom,
            videosForActive: videosForActive, needsPin: needsPin, VIDEO_CAP: VIDEO_CAP };
if (typeof module !== "undefined" && module.exports) { module.exports = api; }
if (typeof document === "undefined") { return; }

/* ── the page half ──────────────────────────────────────────────────────── */

var LESSON = lessonIdFrom(location.pathname);
var S = { secRows: [], secOff: false, draft: {}, secMsg: {}, signedIn: false, ready: false, failed: false, off: false, me: null, profiles: [], pins: {}, videos: [], unlocked: false, loading: null };

function acct(){ return window.NSAccount || null; }
function el(tag, cls, text){
  var e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text != null) e.textContent = text;
  return e;
}
function students(){ return S.profiles.filter(function(p){ return p.kind === "student"; }); }
function activeId(){ var a = acct(); return a && a.who ? a.who() : "parent"; }

/* Tell the panel. window.NSLessonVideos is there for an engine that boots later. */
function publish(){
  var v = videosForActive(S.videos, S.profiles, activeId());
  window.NSLessonVideos = v;
  try { document.dispatchEvent(new CustomEvent("ns:videos", { detail: v })); } catch (e) {}
}

/* ── lesson sections: what the page offers and what it hides ────────────── */
function scopeInfo(){
  var f = document.querySelector(".lfoot");
  var key = f && f.getAttribute("data-ns-subject-key");
  if (!key) return null;
  return { key: key, subject: f.getAttribute("data-ns-subject") || "", grade: f.getAttribute("data-ns-grade") || "" };
}
/* The engine knows its sections (window.NSLessonSections, reading lessons only). The homework
   button belongs to the footer, so it is added here, and only when a real sheet is linked. */
function sectionList(){
  var eng = window.NSLessonSections;
  if (!eng || !eng.list) return null;
  var out = eng.list().slice();
  if (document.querySelector(".lfoot-hw:not(.is-off)")) out.push({ key: "homework", label: "Homework Sheet" });
  return out;
}
function publishSections(){
  var eng = window.NSLessonSections;
  var si = scopeInfo();
  var hidden = eng ? hiddenForActive(S.secRows, S.profiles, activeId(), LESSON, si && si.key) : [];
  window.NSHiddenSections = hidden;
  var hw = document.querySelector(".lfoot-hw");
  if (hw) { if (hidden.indexOf("homework") !== -1) hw.setAttribute("data-ns-off", ""); else hw.removeAttribute("data-ns-off"); }
  try { document.dispatchEvent(new CustomEvent("ns:sections", { detail: { hidden: hidden } })); } catch (e) {}
}

function paintSections(box, k){
  var wrap = el("div", "gv-sec");
  wrap.appendChild(el("p", "gv-sub", "Lesson Sections"));
  box.appendChild(wrap);
  if (S.secOff) { wrap.appendChild(el("p", "gv-note", "Lesson sections aren't switched on yet.")); return; }
  var list = sectionList();
  if (!list) { wrap.appendChild(el("p", "gv-note", "Section switches work on reading lessons.")); return; }
  var si = scopeInfo();
  var eff = effectiveHidden(S.secRows, k.id, LESSON, si && si.key);
  /* The draft keeps unsaved ticks alive when the notes repaint (a video was added meanwhile). */
  var draft = S.draft[k.id] || (S.draft[k.id] = { hidden: eff.hidden.slice(), scope: eff.from === "subject" ? "subject" : "lesson" });
  var where = eff.from === "subject" ? "every " + si.subject + " lesson in " + si.grade : "this lesson only";
  wrap.appendChild(el("p", "gv-note", "Turn a section off and " + k.name + " won't see it, and it won't count toward the score."));
  var ul = el("ul", "gv-secs");
  list.forEach(function(sec){
    var li = el("li", "gv-sec-i");
    var lab = el("label", "gv-chk");
    var cb = el("input"); cb.type = "checkbox"; cb.checked = draft.hidden.indexOf(sec.key) === -1;
    lab.appendChild(cb); lab.appendChild(el("span", null, sec.label));
    li.appendChild(lab);
    /* Which scope a saved Off comes from, so the parent knows what Save will change. */
    function why(){ return cb.checked ? "" : (eff.hidden.indexOf(sec.key) !== -1 ? "Off for " + where : "Off"); }
    var note = el("small", "gv-sec-n", why());
    li.appendChild(note);
    cb.onchange = function(){
      var i = draft.hidden.indexOf(sec.key);
      if (cb.checked && i !== -1) draft.hidden.splice(i, 1);
      if (!cb.checked && i === -1) draft.hidden.push(sec.key);
      note.textContent = why();
    };
    ul.appendChild(li);
  });
  wrap.appendChild(ul);
  if (si) {
    var sc = el("div", "gv-scope");
    sc.setAttribute("role", "radiogroup"); sc.setAttribute("aria-label", "Where this applies");
    [["lesson", "This Lesson Only"], ["subject", "Every " + si.subject + " Lesson in " + si.grade]].forEach(function(o){
      var lab = el("label", "gv-chk");
      var r = el("input"); r.type = "radio"; r.name = "gs-scope-" + k.id; r.value = o[0]; r.checked = draft.scope === o[0];
      r.onchange = function(){ if (r.checked) draft.scope = o[0]; };
      lab.appendChild(r); lab.appendChild(el("span", null, o[1]));
      sc.appendChild(lab);
    });
    wrap.appendChild(sc);
  } else draft.scope = "lesson";
  var save = el("button", "btn gv-go", "Save"); save.type = "button";
  var msg = el("p", "gv-msg"); msg.setAttribute("aria-live", "polite");
  msg.textContent = S.secMsg[k.id] || "";
  delete S.secMsg[k.id];
  save.onclick = function(){
    var scope = draft.scope === "subject" && si ? "subject" : "lesson";
    var scopeKey = scope === "subject" ? si.key : LESSON;
    function isRow(r, sc2, key){ return r.student_id === k.id && r.scope === sc2 && r.scope_key === key; }
    /* Keys this lesson doesn't have (a subject row can hold more) are kept as they were. */
    var old = S.secRows.filter(function(r){ return isRow(r, scope, scopeKey); })[0];
    var keep = ((old && old.hidden) || []).filter(function(h){ return !list.some(function(x){ return x.key === h; }); });
    var hidden = cleanKeys(keep.concat(draft.hidden.filter(function(h){ return list.some(function(x){ return x.key === h; }); })));
    save.disabled = true; msg.textContent = "Saving...";
    acct().saveSectionPrefs(k.id, scope, scopeKey, hidden).then(function(row){
      S.secRows = S.secRows.filter(function(r){ return !isRow(r, scope, scopeKey); });
      S.secRows.push(row);
      /* Saved for the whole subject from this page: this lesson's own row would still win and the
         save would look like it did nothing here, so it goes. */
      var own = scope === "subject" && S.secRows.some(function(r){ return isRow(r, "lesson", LESSON); });
      if (!own) return null;
      return acct().deleteSectionPrefs(k.id, "lesson", LESSON).then(function(){
        S.secRows = S.secRows.filter(function(r){ return !isRow(r, "lesson", LESSON); });
      });
    }).then(function(){
      delete S.draft[k.id];
      S.secMsg[k.id] = "Saved.";
      paint(); publishSections();
    }).catch(function(e){
      save.disabled = false;
      if (acct().sectionsOff && acct().sectionsOff(e)) { S.secOff = true; paint(); publishSections(); return; }
      msg.textContent = (e && e.message) || "Could not save that.";
    });
  };
  wrap.appendChild(save); wrap.appendChild(msg);
}

/* ── Teacher Notes: the videos section ──────────────────────────────────── */
var host = null;
function mountHost(){
  if (host) return host;
  var body = document.querySelector(".ground .gbody");
  if (!body) return null;
  host = el("div", "gv");
  host.id = "gvideos";
  var after = body.querySelector(".gscore");
  if (after && after.nextSibling) body.insertBefore(host, after.nextSibling); else body.insertBefore(host, body.firstChild);
  return host;
}

function line(host, text, href, linkText){
  var p = el("p", "gv-note");
  if (href && linkText) {
    var i = text.indexOf(linkText);
    p.appendChild(document.createTextNode(text.slice(0, i)));
    var a = el("a", null, linkText); a.href = href;
    p.appendChild(a);
    p.appendChild(document.createTextNode(text.slice(i + linkText.length)));
  } else p.textContent = text;
  host.appendChild(p);
}

function avatar(k){
  var i = el("i", "gv-av", String(k.name || "?").charAt(0).toUpperCase());
  i.setAttribute("aria-hidden", "true");
  try {
    if (typeof AD_THEMES !== "undefined") {
      var t = AD_THEMES.filter(function(x){ return x.k === k.theme; })[0];
      if (t && t.box) i.style.background = t.box;
    }
  } catch (e) {}
  return i;
}

function paintKid(host, k){
  var rows = videosForActive(S.videos, S.profiles, k.id).items;
  var box = el("div", "gv-kid");
  var who = el("p", "gv-who");
  who.appendChild(avatar(k));
  var a = el("a", null, k.name); a.href = "/account/";
  who.appendChild(a);
  box.appendChild(who);
  if (S.off) { paintSections(box, k); host.appendChild(box); return; }
  if (rows.length) {
    var ul = el("ul", "gv-list");
    rows.forEach(function(r){
      var li = el("li", "gv-item");
      var src = thumbFor(r.kind, r.id);
      if (src) {
        var img = el("img"); img.src = src;
        img.alt = ""; img.width = 96; img.height = 54; img.loading = "lazy";
        li.appendChild(img);
      } else li.appendChild(el("span", "gv-play", "▶"));
      li.appendChild(el("span", "gv-lab", r.label));
      var rm = el("button", "btn ghost gv-rm", "Remove"); rm.type = "button";
      rm.setAttribute("aria-label", "Remove " + r.label + " for " + k.name);
      rm.onclick = function(){
        rm.disabled = true; rm.textContent = "Removing...";
        acct().deleteLessonVideo(r.rowId).then(function(){
          S.videos = S.videos.filter(function(x){ return x.id !== r.rowId; });
          paint(); publish();
        }).catch(function(e){ rm.disabled = false; rm.textContent = "Remove"; msg.textContent = e.message || "Could not remove that."; });
      };
      li.appendChild(rm);
      ul.appendChild(li);
    });
    box.appendChild(ul);
  }
  var add = el("div", "gv-add");
  var url = el("input"); url.type = "text"; url.placeholder = "Paste a video link";
  url.setAttribute("aria-label", "YouTube link for " + k.name); url.autocomplete = "off"; url.spellcheck = false;
  var lab = el("input"); lab.type = "text"; lab.placeholder = "Label (optional)"; lab.maxLength = 80;
  lab.setAttribute("aria-label", "Label for the video"); lab.autocomplete = "off";
  var go = el("button", "btn gv-go", "Add Video"); go.type = "button";
  var msg = el("p", "gv-msg"); msg.setAttribute("aria-live", "polite");
  add.appendChild(url); add.appendChild(lab); add.appendChild(go);
  go.onclick = function(){
    var p = parseVideo(url.value);
    if (!p) { msg.textContent = "That link didn't work. Paste a YouTube, Vimeo or Google Drive video link, or a link that ends in .mp4."; return; }
    if (rows.length >= VIDEO_CAP) { msg.textContent = "That's the most, " + VIDEO_CAP + " videos for one lesson. Remove one to add another."; return; }
    var pos = S.videos.filter(function(r){ return r.student_id === k.id; })
      .reduce(function(m, r){ return Math.max(m, r.position || 0); }, 0) + 1;
    go.disabled = true; msg.textContent = "Saving...";
    acct().addLessonVideo(k.id, LESSON, p.id, p.start, lab.value.trim(), pos, p.kind).then(function(row){
      if (row) S.videos.push(row);
      paint(); publish();
    }).catch(function(e){
      go.disabled = false;
      if (acct().videosOff && acct().videosOff(e)) { S.off = true; paint(); publish(); return; }
      msg.textContent = /video limit/i.test(e && e.raw && e.raw.message || "") ? "That's the most, " + VIDEO_CAP + " videos for one lesson." : (e.message || "Could not save that video.");
    });
  };
  box.appendChild(add); box.appendChild(msg);
  paintSections(box, k);
  host.appendChild(box);
}

function paint(){
  var h = mountHost();
  if (!h) return;
  h.textContent = "";
  h.appendChild(el("h3", null, "Videos And Sections For Your Students"));
  if (!S.signedIn) return line(h, "Sign in to add videos for your students.", "/account/", "Sign in");
  if (!S.ready) return line(h, "Loading your students...");
  if (S.failed) return line(h, "Couldn't load your students right now. Try again in a minute.");
  var kids = students();
  if (!kids.length) return line(h, "Add a student profile to give them videos.", "/account/", "Add a student profile");
  if (S.off) line(h, "Videos aren't switched on yet.");
  else line(h, "Each student sees their own videos in the Visual Panel, in the order you add them.");
  kids.forEach(function(k){ paintKid(h, k); });
}

/* ── the PIN gate ───────────────────────────────────────────────────────── */
function locked(){
  if (S.unlocked) return false;
  var a = acct();
  if (!a || !a.isSignedIn || !a.isSignedIn()) return false;
  if (!S.ready) return true;                 /* decided once the account answers */
  if (S.failed) return false;                /* a courtesy lock never traps a teacher out */
  return needsPin({ signedIn: true, me: S.me, pins: S.pins, profiles: S.profiles, activeId: activeId() }).ask;
}

function unlock(det){
  S.unlocked = true;
  var pad = document.querySelector(".gpin");
  if (pad) pad.remove();
  det.open = true;
}

function showPad(det){
  if (document.querySelector(".gpin")) { var old = document.querySelector(".gpin input"); if (old) old.focus(); return; }
  var need = needsPin({ signedIn: true, me: S.me, pins: S.pins, profiles: S.profiles, activeId: activeId() });
  var pad = el("div", "gpin");
  pad.setAttribute("role", "group"); pad.setAttribute("aria-label", "Teacher PIN");
  pad.appendChild(el("p", "gpin-t", "Enter the Parent/Teacher PIN to open Teacher Notes."));
  var box = el("div", "gpin-box");
  for (var i = 0; i < 4; i++) box.appendChild(el("span"));
  var inp = el("input"); inp.type = "password"; inp.setAttribute("inputmode", "numeric"); inp.pattern = "[0-9]*";
  inp.maxLength = 4; inp.autocomplete = "off"; inp.setAttribute("aria-label", "PIN");
  box.appendChild(inp);
  var msg = el("p", "gpin-msg"); msg.setAttribute("aria-live", "polite");
  var cancel = el("button", "gpin-x", "Cancel"); cancel.type = "button";
  pad.appendChild(box); pad.appendChild(msg); pad.appendChild(cancel);
  det.parentNode.insertBefore(pad, det.nextSibling);
  var dots = box.querySelectorAll("span");
  function dot(){ for (var j = 0; j < dots.length; j++) { dots[j].className = j < inp.value.length ? "is-on" : (j === inp.value.length ? "is-cur" : ""); } }
  function bad(t){ inp.value = ""; dot(); msg.textContent = t; box.classList.remove("is-shake"); void box.offsetWidth; box.classList.add("is-shake"); inp.focus(); }
  inp.addEventListener("input", function(){
    inp.value = inp.value.replace(/[^0-9]/g, "").slice(0, 4); dot();
    if (inp.value.length < 4) return;
    inp.disabled = true; msg.textContent = "Checking...";
    /* The SAME server check the profile PIN uses; its words (the lock, the wrong try) come back as the error. */
    acct().checkPin(inp.value, need.key).then(function(ok){
      inp.disabled = false;
      if (ok === true) unlock(det); else bad("That PIN isn't right. Try again.");
    }).catch(function(e){ inp.disabled = false; bad(e.message || "Could not check the PIN."); });
  });
  cancel.onclick = function(){ pad.remove(); };
  dot(); inp.focus();
}

function wireGate(){
  var det = document.querySelector("details.ground");
  if (!det) return;
  var sum = det.querySelector("summary");
  function gate(){
    if (!locked()) { det.open = true; return; }
    if (!S.ready && S.loading) { S.loading.then(function(){ if (locked()) showPad(det); else det.open = true; }); return; }
    showPad(det);
  }
  if (sum) sum.addEventListener("click", function(e){
    if (det.open || !locked()) return;       /* closing, or free: the browser does its normal thing */
    e.preventDefault();
    gate();
  });
  /* Something else opened it (a link to #ground, find in page): close it and ask. */
  det.addEventListener("toggle", function(){
    if (det.open && locked()) { det.open = false; gate(); }
  });
}

/* ── boot ───────────────────────────────────────────────────────────────── */
function boot(){
  var a = acct();
  wireGate();
  S.signedIn = !!(a && a.isSignedIn && a.isSignedIn());
  paint();
  if (!S.signedIn) { S.ready = true; return; }
  S.loading = a.bootstrap().then(function(b){
    S.me = b.me; S.profiles = b.profiles || []; S.pins = b.pins || {};
  }).catch(function(){ S.failed = true; }).then(function(){
    if (S.failed || !LESSON) return;
    var si = scopeInfo();
    var vids = a.lessonVideos(LESSON).then(function(rows){ S.videos = rows || []; }, function(e){
      /* Table missing (migration 021 not run): switched off, quietly. Any other failure leaves the list empty. */
      S.off = !!(a.videosOff && a.videosOff(e));
    });
    var secs = a.sectionPrefs ? a.sectionPrefs(LESSON, si && si.key).then(function(rows){ S.secRows = rows || []; }, function(e){
      /* Same quiet rule for migration 023: switched off, and the lesson shows everything. */
      S.secOff = !!(a.sectionsOff && a.sectionsOff(e));
    }) : Promise.resolve();
    return Promise.all([vids, secs]);
  }).then(function(){
    S.ready = true; paint(); publish(); publishSections();
  });
  /* Another profile became active: the panel shows THEIR videos, and the page hides THEIR Off sections. */
  document.addEventListener("ns:who", function(){ if (S.ready) { publish(); publishSections(); } });
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();

})(typeof window !== "undefined" ? window : this);

