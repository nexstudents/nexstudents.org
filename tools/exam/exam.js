/* ---- ITEM BANK -------------------------------------------------------------
   skill tags drive the breakdown. a = index of correct option.
   ANSWER SPREAD (checked, do not let this drift): A×3, B×3, C×3, D×3.
   Sequence: C D A B A C B D D B C A  — deliberately irregular.
   TWO ways to get this wrong, both of which happened here:
     1. a first draft landed on B seven times out of twelve, with D never correct at all;
     2. the fix spread it evenly but produced DACBDACBDACB, a repeating cycle — just as guessable.
   Re-check BOTH the counts and the sequence any time an item is reworded or replaced.      */
/* Item bank, encoded. NOT security — scoring happens in the browser, so a determined viewer can
   still recover the key. This only stops casual View Source. Real fix is server-side scoring,
   which lands when NexStudents has a backend. To edit items: decode, change, re-run
   scratchpad/encode_items.js, which re-checks the 3/3/3/3 spread and the sequence. */
const Q = JSON.parse(new TextDecoder().decode(
  Uint8Array.from(atob("W3sicyI6Ik1haW4gaWRlYSIsInEiOiJXaGljaCBzZW50ZW5jZSBiZXN0IHN0YXRlcyB0aGUgY2VudHJhbCBpZGVhIG9mIHRoZSBwYXNzYWdlPyIsImEiOjIsIm8iOlsiT2N0b3B1c2VzIGFyZSBhbW9uZyB0aGUgbW9zdCBkYW5nZXJvdXMgcHJlZGF0b3JzIGluIHRoZSBvY2Vhbi4iLCJTY2llbnRpc3RzIGhhdmUgZmluYWxseSBleHBsYWluZWQgaG93IG9jdG9wdXMgY2Ftb3VmbGFnZSB3b3Jrcy4iLCJPY3RvcHVzZXMgc3Vydml2ZSBieSBoaWRpbmcgYW5kIGVzY2FwaW5nIHJhdGhlciB0aGFuIGJ5IGZpZ2h0aW5nLiIsIk9jdG9wdXNlcyBsaXZlIHNob3J0IGxpdmVzIGFuZCBkaWUgc29vbiBhZnRlciByZXByb2R1Y2luZy4iXX0seyJzIjoiVm9jYWJ1bGFyeSBpbiBjb250ZXh0IiwicSI6IkluIHBhcmFncmFwaCAxLCDigJxkZWNlcHRpb27igJ0gbW9zdCBuZWFybHkgbWVhbnMiLCJhIjozLCJvIjpbInN0cmVuZ3RoIiwicGF0aWVuY2UiLCJzcGVlZCIsInRyaWNrZXJ5Il19LHsicyI6IlN1cHBvcnRpbmcgZGV0YWlsIiwicSI6IkFjY29yZGluZyB0byB0aGUgcGFzc2FnZSwgd2hhdCBtYWtlcyBhIGNocm9tYXRvcGhvcmXigJlzIGNvbG9yIHNwcmVhZCBhY3Jvc3MgdGhlIHNraW4/IiwiYSI6MCwibyI6WyJNdXNjbGVzIGFyb3VuZCB0aGUgc2FjIHB1bGwgaXQgb3BlbiIsIlBhcGlsbGFlIHJpc2UgdXAgYW5kIHB1c2ggdGhlIGNvbG9yIG91dHdhcmQiLCJMaWdodC1zZW5zaXRpdmUgcHJvdGVpbnMgaW4gdGhlIHNraW4gc3dpdGNoIG9uIiwiSW5rIGZyb20gdGhlIHNhYyBtaXhlcyB3aXRoIHNlYXdhdGVyIl19LHsicyI6IkluZmVyZW5jZSIsInEiOiJXaHkgZG9lcyB0aGUgYXV0aG9yIGNhbGwgdGhlIG9jdG9wdXPigJlzIGNvbG9yYmxpbmRuZXNzIOKAnHRoZSBzdHJhbmdlc3QgcGFydOKAnT8iLCJhIjoxLCJvIjpbIkJlY2F1c2UgY29sb3JibGluZCBhbmltYWxzIHVzdWFsbHkgY2Fubm90IHN1cnZpdmUgaW4gdGhlIG9jZWFuIiwiQmVjYXVzZSB0aGUgb2N0b3B1cyBzaG91bGQgbm90IGJlIGFibGUgdG8gZG8gdGhlIHZlcnkgdGhpbmcgaXQgaXMgYmVzdCBhdCIsIkJlY2F1c2Ugc2NpZW50aXN0cyBoYXZlIHByb3ZlZCB0aGUgb2N0b3B1cyBpcyBub3QgcmVhbGx5IGNvbG9yYmxpbmQiLCJCZWNhdXNlIGh1bWFucyB3aXRoIHRocmVlIGNlbGwgdHlwZXMgY2Fubm90IG1hdGNoIGNvbG9ycyBhcyB3ZWxsIl19LHsicyI6IlRleHQgc3RydWN0dXJlIiwicSI6IlBhcmFncmFwaCAzIGJlZ2lucywg4oCcQ29sb3IgYWxvbmUgd291bGQgbm90IGJlIGVub3VnaC7igJ0gV2hhdCBqb2IgZG9lcyB0aGF0IHNlbnRlbmNlIGRvPyIsImEiOjAsIm8iOlsiSXQgc2lnbmFscyBhIHNoaWZ0IHRvIGEgc2Vjb25kIGNhbW91ZmxhZ2UgdG9vbCB0aGUgb2N0b3B1cyBuZWVkcy4iLCJJdCBpbnRyb2R1Y2VzIHRoZSBkaXNhZ3JlZW1lbnQgYW1vbmcgcmVzZWFyY2hlcnMuIiwiSXQgZ2l2ZXMgYW4gZXhhbXBsZSB0aGF0IHN1cHBvcnRzIHRoZSBwcmV2aW91cyBwYXJhZ3JhcGguIiwiSXQgcmVwZWF0cyB0aGUgbWFpbiBpZGVhIG9mIHBhcmFncmFwaCAyIGluIHNpbXBsZXIgd29yZHMuIl19LHsicyI6IkF1dGhvcuKAmXMgcHVycG9zZSIsInEiOiJUaGUgYXV0aG9yIHdyb3RlIHRoaXMgcGFzc2FnZSBtYWlubHkgdG8iLCJhIjoyLCJvIjpbImNvbXBhcmUgb2N0b3B1cyBleWVzIHdpdGggaHVtYW4gZXllcyIsInBlcnN1YWRlIHJlYWRlcnMgdG8gcHJvdGVjdCBvY3RvcHVzZXMgZnJvbSBwcmVkYXRvcnMiLCJleHBsYWluIGhvdyBhbiBvY3RvcHVzIGhpZGVzIGFuZCB3aHkgdGhhdCBpcyBwdXp6bGluZyIsImRlc2NyaWJlIGEgc2NpZW50aXN04oCZcyBkYWlseSB3b3JrIHN0dWR5aW5nIHRoZSBvY2VhbiJdfSx7InMiOiJJbmZlcmVuY2UiLCJxIjoiVGhlIHBhc3NhZ2Ugc2F5cyB0aGUgaW5rIOKAnGRvZXMgbW9yZSB0aGFuIGJsaW5kLuKAnSBXaGF0IGNhbiB5b3UgY29uY2x1ZGUgZnJvbSB0aGlzPyIsImEiOjEsIm8iOlsiVGhlIGluayBpcyBwb2lzb25vdXMgZW5vdWdoIHRvIGtpbGwgYSBzaGFyay4iLCJBIHByZWRhdG9yIGh1bnRpbmcgYnkgc21lbGwgY291bGQgc3RpbGwgYmUgZm9vbGVkIGJ5IHRoZSBpbmsuIiwiT2N0b3B1c2VzIHVzZSBpbmsgbW9yZSBvZnRlbiB0aGFuIHRoZXkgdXNlIGNhbW91ZmxhZ2UuIiwiVGhlIGluayBwZXJtYW5lbnRseSBkYW1hZ2VzIGEgcHJlZGF0b3LigJlzIHNlbnNlIG9mIHNtZWxsLiJdfSx7InMiOiJWb2NhYnVsYXJ5IGluIGNvbnRleHQiLCJxIjoiSW4gdGhlIGxhc3QgcGFyYWdyYXBoLCDigJxqZXRzIGF3YXnigJ0gbWVhbnMgdGhlIG9jdG9wdXMiLCJhIjozLCJvIjpbImdsb3dzIGJyaWdodGx5IGFuZCB0aGVuIGZhZGVzIiwiaGFyZGVucyBpdHMgc2tpbiBmb3IgcHJvdGVjdGlvbiIsInNpbmtzIHNsb3dseSB0byB0aGUgc2VhZmxvb3IiLCJzaG9vdHMgYXdheSBxdWlja2x5Il19LHsicyI6IlN1cHBvcnRpbmcgZGV0YWlsIiwicSI6IkhvdyBtYW55IGtpbmRzIG9mIGxpZ2h0LWRldGVjdGluZyBjZWxscyBkb2VzIHRoZSBwYXNzYWdlIHNheSBhbiBvY3RvcHVzIGV5ZSBoYXM/IiwiYSI6MywibyI6WyJOb25lIiwiVGhyZWUiLCJNaWxsaW9ucyIsIk9uZSJdfSx7InMiOiJJbmZlcmVuY2UiLCJxIjoiV2h5IHdvdWxkIGEgYnJvd24gb2N0b3B1cyBvbiBhIGNvcmFsIHJlZWYgc3RpbGwgYmUgbm90aWNlZCB3aXRob3V0IGNoYW5naW5nIGl0cyB0ZXh0dXJlPyIsImEiOjEsIm8iOlsiQnJvd24gaXMgYSBjb2xvciB0aGF0IHJlZWZzIG5ldmVyIGNvbnRhaW4uIiwiQSBzbW9vdGggc3VyZmFjZSBsb29rcyB3cm9uZyBhZ2FpbnN0IGEgcm91Z2ggb25lLiIsIlByZWRhdG9ycyBhcmUgZHJhd24gdG8gbW92ZW1lbnQgbW9yZSB0aGFuIGNvbG9yLiIsIlRoZSBvY3RvcHVzIGNhbm5vdCBob2xkIG9uZSBjb2xvciBmb3IgdmVyeSBsb25nLiJdfSx7InMiOiJUZXh0IHN0cnVjdHVyZSIsInEiOiJXaGljaCBiZXN0IGRlc2NyaWJlcyBob3cgdGhlIHdob2xlIHBhc3NhZ2UgaXMgb3JnYW5pemVkPyIsImEiOjIsIm8iOlsiRXZlbnRzIHRvbGQgaW4gdGhlIG9yZGVyIHRoZXkgaGFwcGVuZWQiLCJUd28gYW5pbWFscyBjb21wYXJlZCBzaWRlIGJ5IHNpZGUiLCJBIHByb2JsZW0sIHRoZW4gdGhlIGRlZmVuc2VzIHRoYXQgYW5zd2VyIGl0IiwiQSBjbGFpbSBmb2xsb3dlZCBieSByZWFzb25zIHRvIGRpc2FncmVlIHdpdGggaXQiXX0seyJzIjoiTWFpbiBpZGVhIiwicSI6IldoaWNoIHRpdGxlIGZpdHMgdGhlIHBhc3NhZ2UgYmVzdD8iLCJhIjowLCJvIjpbIlZhbmlzaGluZzogSG93IGEgU29mdCBBbmltYWwgU3Vydml2ZXMgYSBIYXJkIE9jZWFuIiwiSW5rOiBUaGUgT2NlYW7igJlzIERlYWRsaWVzdCBXZWFwb24iLCJXaHkgT2N0b3B1c2VzIERvIE5vdCBMaXZlIExvbmciLCJJbnNpZGUgdGhlIEV5ZSBvZiB0aGUgT2N0b3B1cyJdfV0="), c => c.charCodeAt(0))));

const pick = new Array(Q.length).fill(null);
let i = 0;

const $ = id => document.getElementById(id);
const LET = ["A","B","C","D"];

/* 🚨 START DOES NOT JUMP TO THE QUESTIONS. Paul, 2026-09-02: "when i start the
   test it right away drops me down to the questions before i can read the
   story." draw() used to scroll on EVERY call, including the first, so the
   passage was skipped past the instant the exam opened - and the page own
   instructions say "Read the passage all the way through before you answer
   anything." The exam was contradicting itself.
   ⚠️ The scroll is right when MOVING BETWEEN questions and wrong when entering
   the test or when picking an option. Only go() passes jump now. */
function start(){
  $("s-intro").classList.add("hide");
  $("s-test").classList.remove("hide");
  draw();
  /* ⚠️ SCROLL TO THE PASSAGE ITSELF, AND ALLOW FOR THE STICKY NAV. Paul,
     second look: "no it lands closer to the top but not the top of the story."
     scrollIntoView on the SECTION lands on the section box, which starts above
     the passage - and block:"start" puts that edge at y=0, where the sticky
     header is already sitting, so the story heading hides underneath it.
     Measuring the nav at run time rather than hardcoding a number: it is a
     different height on a phone, and it changes again if a row is ever added. */
  const story = document.querySelector(".exam .passage");
  const nav = document.getElementById("nav");
  const navH = nav ? nav.getBoundingClientRect().height : 0;
  const top = story.getBoundingClientRect().top + window.scrollY - navH - 14;
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}

function draw(jump){
  const q = Q[i];
  $("prog").textContent = `Question ${i+1} of ${Q.length}`;
  $("ans").textContent  = `${pick.filter(v=>v!==null).length} answered`;
  $("progbar").style.width = ((i)/Q.length*100) + "%";
  $("qtext").textContent = q.q;
  $("opts").innerHTML = "";
  q.o.forEach((t,n)=>{
    const b = document.createElement("button");
    b.className = "opt" + (pick[i]===n ? " sel" : "");
    b.innerHTML = `<b>${LET[n]}</b>${t.replace(/&/g,"&amp;").replace(/</g,"&lt;")}`;
    b.onclick = ()=>{ pick[i]=n; draw(); };
    $("opts").appendChild(b);
  });
  $("back").disabled = i===0;
  $("next").disabled = pick[i]===null;
  $("next").textContent = i===Q.length-1 ? "Finish" : "Next";
  /* Only when stepping between questions. The passage stays one scroll away
     for re-reading, and re-drawing after an option is picked must not move the
     page under the reader s finger. */
  if (jump) $("qtext").closest(".card").scrollIntoView({block:"start",behavior:"smooth"});
}

function go(d){
  if(d===1 && i===Q.length-1) return finish();
  i += d; draw(true);
}

function finish(){
  let right = 0;
  const by = {};
  Q.forEach((q,n)=>{
    const ok = pick[n]===q.a;
    if(ok) right++;
    (by[q.s] = by[q.s] || {ok:0,total:0}).total++;
    if(ok) by[q.s].ok++;
  });
  const pct = Math.round(right/Q.length*100);

  $("s-test").classList.add("hide");
  $("s-done").classList.remove("hide");

  /* score AND percentage — standing rule */
  $("scoreline").innerHTML = `${right} / ${Q.length} <span>&middot; ${pct}%</span>`;

  let v;
  if(pct >= 85){
    v = `<b>Grade 6 comprehension is solid.</b> This score does not place a student yet — it only
         rules out grade 6 as the ceiling. The next level up is not built yet, so treat this as
         a floor: grade 6 material is not the right challenge.`;
  } else if(pct >= 60){
    v = `<b>Placed at grade 6.</b> This is a real reading level, not a failure. Look at the skill
         rows below to see what to teach — the total on its own does not tell you.`;
  } else {
    v = `<b>Below grade 6.</b> Do not conclude a grade level from this alone. A low score here can
         mean grade 6 is above the student, or that one skill collapsed and dragged the rest down.
         The skill rows tell you which — read them before deciding anything.`;
  }
  $("verdict").innerHTML = v;

  const order = ["Main idea","Inference","Vocabulary in context","Supporting detail","Text structure","Author’s purpose"];
  $("skills").innerHTML = order.filter(k=>by[k]).map(k=>{
    const d = by[k], p = d.ok/d.total*100;
    /* ⚠️ --ex-* not --good/--warn/--bad: those were site.css names and resolve to
       nothing on ns.css. Defined per theme in exam.css. */
    const c = p>=80 ? "var(--ex-good)" : p>=50 ? "var(--ex-warn)" : "var(--ex-bad)";
    return `<tr><td>${k}</td>
      <td><div class="sk"><i style="width:${p}%;background:${c}"></i></div></td>
      <td class="n">${d.ok} / ${d.total}</td></tr>`;
  }).join("");

  $("readnote").innerHTML = `<b>Read the rows, not the total.</b> Missing every inference question
    while scoring everything else means something completely different from scattered misses.
    Supporting detail and vocabulary teach back quickly. Inference and text structure are the two
    that decide 9th-grade re-entry.`;

  const missed = Q.map((q,n)=>({q,n})).filter(({q,n})=>pick[n]!==q.a);
  if(!missed.length){
    $("missbox").innerHTML = "<h2>Questions missed</h2><p class='miss'>None. Every question correct.</p>";
  } else {
    $("misses").innerHTML = missed.map(({q,n})=>`
      <div class="missq">
        <span class="tag">${q.s}</span>
        <div>${q.q}</div>
        <p class="miss">Chose <b>${LET[pick[n]]}. ${q.o[pick[n]]}</b><br>
           Correct <b>${LET[q.a]}. ${q.o[q.a]}</b></p>
      </div>`).join("");
  }

  /* keep the result so it is not lost if the tab closes */
  try{
    localStorage.setItem("nexstudents.placement.readingB", JSON.stringify({
      date:new Date().toISOString(), right, total:Q.length, pct,
      skills:by, answers:pick
    }));
  }catch(e){}

  window.scrollTo({top:0,behavior:"smooth"});
}
