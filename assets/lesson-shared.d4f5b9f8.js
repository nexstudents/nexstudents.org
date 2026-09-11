
(function(){
var burger=document.getElementById("burger"),drawer=document.getElementById("drawer"),
    scrim=document.getElementById("scrim"),dClose=document.getElementById("drawerClose");
var nsLocks=0;
function nsLockScroll(on){
  nsLocks=Math.max(0,nsLocks+(on?1:-1));
  document.documentElement.style.overflowY=nsLocks?"hidden":"";
}
function setNav(o){
  if(document.body.classList.contains("nav-open")===o) return;
  document.body.classList.toggle("nav-open",o);
  burger.setAttribute("aria-expanded",o);drawer.setAttribute("aria-hidden",!o);
  nsLockScroll(o);
  if(!o) nsCloseSubs();}
burger.onclick=function(){setNav(!document.body.classList.contains("nav-open"));};
scrim.onclick=dClose.onclick=function(){setNav(false);};
var nav=document.getElementById("nav");
addEventListener("scroll",function(){nav.classList.toggle("stuck",scrollY>16);},{passive:true});
function nsMode(){ return document.documentElement.getAttribute("data-theme")==="light"?"light":"dark"; }
function nsPaintMode(){
  var light=nsMode()==="light";
  document.querySelectorAll("[data-mode-icon]").forEach(function(e){ e.innerHTML=light?"&#9788;":"&#9790;"; });
  document.querySelectorAll("[data-mode-label]").forEach(function(e){ e.textContent=light?"Day Mode":"Night Mode"; });
  document.querySelectorAll("[data-mode-toggle]").forEach(function(e){
    e.setAttribute("aria-label", light?"Switch to night mode":"Switch to day mode"); });
}
document.addEventListener("click",function(e){
  if(!e.target.closest("[data-mode-toggle]")) return;
  var next=nsMode()==="light"?"dark":"light";
  document.documentElement.setAttribute("data-theme",next);
  try{localStorage.setItem("ns:mode",next);}catch(err){}
  nsPaintMode();
});
nsPaintMode();
var subStack=[];
function nsRender(){
  document.querySelectorAll("[data-subpanel]").forEach(function(p){
    var id=p.getAttribute("data-subpanel");
    var i=subStack.indexOf(id);
    p.classList.toggle("open", i>=0);
    p.classList.toggle("exit", i>=0 && i<subStack.length-1);
    p.setAttribute("aria-hidden", i>=0 ? "false" : "true");
  });
  document.body.classList.toggle("sub-open", subStack.length>0);
}
function nsOpenSub(id){
  var p=document.querySelector('[data-subpanel="'+id+'"]');
  if(!p) return;
  var back=p.querySelector("[data-sub-back]");
  var parent=back?back.getAttribute("data-sub-back"):"";
  var at=parent?subStack.indexOf(parent):-1;
  subStack = parent && at>=0 ? subStack.slice(0,at+1) : (parent?[parent]:[]);
  subStack.push(id);
  nsRender();
}
function nsCloseSubs(){ subStack=[]; nsRender(); }
function nsBack(){ subStack.pop(); nsRender(); }
document.querySelectorAll("[data-sub]").forEach(function(b){
  b.addEventListener("click",function(){ nsOpenSub(b.getAttribute("data-sub")); });
});
document.querySelectorAll("[data-sub-back]").forEach(function(b){
  b.addEventListener("click", nsBack);
});
var panel=document.getElementById("megapanel");
var tabEls=[].slice.call(document.querySelectorAll(".mg-top[data-menu]"));
var onTab=document.querySelector(".mg-top.on");
var closeTimer=null,current=null;
function nsMark(el){
  document.querySelectorAll(".mg-top.mg-live").forEach(function(t){ t.classList.remove("mg-live"); });
  if(el) el.classList.add("mg-live");
}
var panelH=0;
function nsMeasure(){
  if(!panel) return;
  var was=panel.className;
  panel.classList.add("measuring");
  var max=0;
  panel.querySelectorAll(".mg-inner").forEach(function(i){ max=Math.max(max,i.offsetHeight); });
  panel.className=was;
  if(max>0){ panelH=max; if(panel.classList.contains("open")) panel.style.height=panelH+"px"; }
}
function nsShow(key){
  if(!panel) return;
  clearTimeout(closeTimer);
  var inner=panel.querySelector('[data-for="'+key+'"]');
  if(!inner) return;
  if(!panelH) nsMeasure();
  panel.classList.add("open");
  panel.setAttribute("aria-hidden","false");
  panel.style.height=panelH+"px";
  if(current!==key){
    current=key;
    panel.querySelectorAll(".mg-inner").forEach(function(i){ i.classList.toggle("on", i===inner); });
    tabEls.forEach(function(t){ t.setAttribute("aria-expanded", String(t.getAttribute("data-menu")===key)); });
    nsMark(document.querySelector('.mg-top[data-menu="'+key+'"]'));
  }
}
function nsHide(){
  if(!panel) return;
  current=null;
  panel.classList.remove("open");
  panel.setAttribute("aria-hidden","true");
  panel.style.height="";
  panel.querySelectorAll(".mg-inner").forEach(function(i){ i.classList.remove("on"); });
  tabEls.forEach(function(t){ t.setAttribute("aria-expanded","false"); });
  nsMark(onTab);
}
function nsLater(){ clearTimeout(closeTimer); closeTimer=setTimeout(nsHide,220); }
function nsKeep(){ clearTimeout(closeTimer); }
if(panel){
  nav.classList.add("js-nav");
  nsMark(onTab);
  if(matchMedia("(hover:hover)").matches){
    tabEls.forEach(function(t){
      t.addEventListener("mouseenter",function(){ nsShow(t.getAttribute("data-menu")); });
      t.addEventListener("focus",function(){ nsShow(t.getAttribute("data-menu")); });
      t.addEventListener("click",function(e){ e.preventDefault(); });
    });
    var tabsBox=document.querySelector(".tabs");
    if(tabsBox){ tabsBox.addEventListener("mouseenter",nsKeep); tabsBox.addEventListener("mouseleave",nsLater); }
    panel.addEventListener("mouseenter",nsKeep);
    panel.addEventListener("mouseleave",nsLater);
    addEventListener("keydown",function(e){ if(e.key==="Escape") nsHide(); });
    addEventListener("resize",function(){ panelH=0; nsMeasure(); });
    panel.querySelectorAll("img").forEach(function(im){
      if(!im.complete) im.addEventListener("load",function(){ panelH=0; nsMeasure(); });
    });
    addEventListener("load",function(){ panelH=0; nsMeasure(); });
  }
}
var cdrawer=document.getElementById("cdrawer"),cscrim=document.getElementById("cscrim"),
    cdBody=document.getElementById("cdBody"),cdTotal=document.getElementById("cdTotal"),
    cdN=document.getElementById("cdN"),cartn=document.getElementById("cartn"),
    cdClose=document.getElementById("cdClose");
function nsMoney(c){ return "$" + ((c||0)/100).toFixed(2); }
function nsCartOpen(o){
  if(!cdrawer) return;
  if(document.body.classList.contains("cart-open")===o) return;
  document.body.classList.toggle("cart-open",o);
  cdrawer.setAttribute("aria-hidden",!o);
  nsLockScroll(o);
}
function nsCartBadge(){
  if(!cartn||!window.NSAccount) return;
  var n=NSAccount.cart().length;
  cartn.textContent=n;
  cartn.hidden = n===0;
  if(cdN) cdN.textContent=n;
}
function nsCartPaint(){
  if(!cdBody||!window.NSAccount) return;
  nsCartBadge();
  var items=NSAccount.cart();
  if(!items.length){
    cdBody.innerHTML="<p class='cd-empty'>Nothing in your cart yet.</p>";
    if(cdTotal) cdTotal.textContent=nsMoney(0);
    return;
  }
  cdBody.innerHTML="<p class='cd-empty'>Loading&hellip;</p>";
  NSAccount.priceList(items).then(function(rows){
    if(!rows.length){
      cdBody.innerHTML="<p class='cd-empty'>Could not load your cart just now. "+
        "It is still saved &mdash; try again in a moment.</p>";
      return;
    }
    var total=0,html="";
    rows.forEach(function(r){
      total+=r.price_cents;
      var img=NSAccount.cartThumb(r.slug);
      html+="<div class='cd-row'>"+
        (img?"<img class='cd-th' src='"+img+"' alt='' width='56' height='56' loading='lazy'>"
            :"<span class='cd-th cd-noth' aria-hidden='true'></span>")+
        "<div class='cd-info'><b>"+r.title+"</b>"+
        "<span class='cd-price'>"+nsMoney(r.price_cents)+"</span></div>"+
        "<div class='cd-qty'><span class='cd-qbox'>1</span>"+
        "<button class='cd-rm' type='button' data-rm='"+r.slug+"'>Remove</button></div></div>";
    });
    cdBody.innerHTML=html;
    if(cdTotal) cdTotal.textContent=nsMoney(total);
    cdBody.querySelectorAll("[data-rm]").forEach(function(b){
      b.onclick=function(){ NSAccount.cartRemove(b.getAttribute("data-rm")); };
    });
  });
}
if(cdrawer){
  var cartLink=document.getElementById("cartLink");
  if(cartLink) cartLink.addEventListener("click",function(e){
    if(e.button!==0||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey) return;
    e.preventDefault();
    nsCartPaint();
    nsCartOpen(true);
  });
  cscrim.onclick=cdClose.onclick=function(){ nsCartOpen(false); };
  addEventListener("keydown",function(e){
    if(e.key==="Escape"&&document.body.classList.contains("cart-open")) nsCartOpen(false);
  });
  document.addEventListener("ns:cart",function(e){
    nsCartPaint();
    if(e.detail&&e.detail.added) nsCartOpen(true);
  });
  nsCartBadge();
}
var adrawer=document.getElementById("adrawer"),ascrim=document.getElementById("ascrim"),
    adClose=document.getElementById("adClose"),acctLink=document.getElementById("acctLink");
var AD_ITEMS={"manuscript-alphabet":{"th":"/worksheets/english/manuscript-alphabet/thumb.jpg","open":"/worksheets/english/manuscript-alphabet/print/"},"cursive-alphabet":{"th":"/worksheets/english/cursive-alphabet/thumb.jpg","open":"/worksheets/english/cursive-alphabet/print/"},"multiplication-drill-100":{"th":"/worksheets/maths/multiplication-drill-100/thumb.jpg","open":"/worksheets/maths/multiplication-drill-100/print/"},"division-drill-100":{"th":"/worksheets/maths/division-drill-100/thumb.jpg","open":"/worksheets/maths/division-drill-100/print/"},"lewis-and-clark":{"th":"/worksheets/history/lewis-and-clark/thumb.jpg","open":"/worksheets/history/lewis-and-clark/print/"},"thirteen-colonies":{"th":"/worksheets/history/thirteen-colonies/thumb.jpg","open":"/worksheets/history/thirteen-colonies/print/"},"boston-tea-party":{"th":"","open":"/worksheets/history/boston-tea-party/print/"},"animal-cell":{"th":"/worksheets/science/animal-cell/thumb.jpg","open":"/worksheets/science/animal-cell/"},"plant-cell":{"th":"/worksheets/science/plant-cell/thumb.jpg","open":"/worksheets/science/plant-cell/"},"us-history-semester-1":{"th":"/worksheets/history/us-history-semester-1/thumb.jpg","open":"/worksheets/history/us-history-semester-1/"},"complete-subjects-and-predicates":{"th":"/worksheets/english/complete-subjects-and-predicates/thumb.jpg","open":"/worksheets/english/complete-subjects-and-predicates/print/"},"weekly-spelling-test":{"th":"/worksheets/english/weekly-spelling-test/thumb.jpg","open":"/worksheets/english/weekly-spelling-test/print/"},"spelling-flashcards":{"th":"/worksheets/english/spelling-flashcards/thumb.jpg","open":"/worksheets/english/spelling-flashcards/print/"},"newtons-laws-of-motion":{"th":"/worksheets/science/newtons-laws-of-motion/thumb.jpg","open":"/worksheets/science/newtons-laws-of-motion/print/"}};
var AD_WORKER="https://nexstudents-media.nexedgetech.workers.dev";
var adUser=null,adOrders=null,adLoading=false;
var adHosts=[];
function adHostOf(root){
  return {root:root,body:root.querySelector(".ad-body"),h:root.querySelector(".ad-h"),
          back:root.querySelector(".ad-back"),x:root.querySelector(".ad-x"),
          xLabel:root.querySelector(".ad-x")?root.querySelector(".ad-x").textContent:"",
          up:null,view:"main",save:null};
}
function adEsc(s){ var d=document.createElement("div"); d.textContent=s==null?"":String(s); return d.innerHTML; }
function adDate(w,long){
  var d=new Date(w); if(isNaN(d)) return "";
  return d.toLocaleDateString([],long?{month:"short",day:"numeric",year:"numeric"}:{month:"short",day:"numeric"});
}
function adOpen(o){
  if(!adrawer) return;
  if(document.body.classList.contains("acct-open")===o) return;
  document.body.classList.toggle("acct-open",o);
  adrawer.setAttribute("aria-hidden",!o);
  nsLockScroll(o);
}
function adGroup(rows){
  var list=[],seen={};
  rows.forEach(function(r){
    var k=r.order_no!=null?"n"+r.order_no:"t"+String(r.bought_at||"").slice(0,16);
    if(!seen[k]){ seen[k]={no:r.order_no,when:r.bought_at,rows:[],total:0}; list.push(seen[k]); }
    seen[k].rows.push(r); seen[k].total+=(r.amount_cents||0);
  });
  return list;
}
function adTitle(o){ return o.no!=null?"Order #"+o.no:"Order"; }
function adFrame(H,title,up,view){
  H.h.textContent=title; H.up=up||null; H.back.hidden=!up; H.view=view; H.save=null;
  if(H.x){ H.x.textContent=H.xLabel; H.x.hidden=!H.xLabel; }
  H.body.scrollTop=0;
}
function adMain(H){
  adFrame(H,"Account",null,"main");
  var md=(adUser&&adUser.user_metadata)||{};
  var last=adOrders&&adOrders.length?"Last order "+(adOrders[0].no!=null?"#"+adOrders[0].no+" ":"")+"is completed":
           (adOrders?"No orders yet":"Loading…");
  
  var who=md.first_name||(adUser&&adUser.email?adUser.email.split("@")[0]:"You");
  H.body.innerHTML="<div class='ad-hi'><h3>"+(md.first_name?"Hi, "+adEsc(md.first_name):"Hi there")+"</h3></div>"+
    "<div class='ad-pro'>"+
      "<span class='ad-pro-i is-me'><i aria-hidden='true'>"+adEsc(who.charAt(0).toUpperCase())+"</i><b>"+adEsc(who)+"</b></span>"+
      "<button class='ad-pro-i is-add' type='button' data-go='profiles'><i aria-hidden='true'>+</i><b>Add Profile</b></button>"+
    "</div>"+
    "<button class='ad-row' type='button' data-go='profiles'><b>Manage Profiles</b><span>Student profiles, coming soon</span></button>"+
    "<button class='ad-row' type='button' data-go='orders'><b>Orders</b><span>"+adEsc(last)+"</span></button>"+
    "<button class='ad-row' type='button' data-go='settings'><b>Settings</b><span data-mode-label>Night Mode</span></button>"+
    "<button class='ad-row' type='button' data-go='account'><b>Account</b><span>"+
      adEsc(adUser&&adUser.email||"")+"</span></button>"+
    "<button class='ad-signout' type='button' data-out>Sign Out</button>";
  if(typeof nsPaintMode==="function") nsPaintMode();
}
function adProfiles(H){
  adFrame(H,"Manage Profiles",adMain,"profiles");
  H.body.innerHTML="<p class='ad-empty'>Student profiles are on the way. Each student in your "+
    "home will get their own profile under this account, so their lessons and progress stay "+
    "separate, with a parent PIN for the grown-up settings.</p>";
}
function adSettings(H){
  adFrame(H,"Settings",adMain,"settings");
  H.body.innerHTML="<p class='ad-cap'>Display</p>"+
    "<div class='ad-kv'><span>Theme</span>"+
    "<button class='mswitch' type='button' data-mode-toggle aria-label='Switch between day and night'>"+
    "<span class='mswitch-track'><span class='mswitch-knob'></span></span>"+
    "<span data-mode-label>Night Mode</span></button></div>";
  if(typeof nsPaintMode==="function") nsPaintMode();
}
function adList(H){
  adFrame(H,"Orders",adMain,"orders");
  if(!adOrders||!adOrders.length){
    H.body.innerHTML="<p class='ad-empty'>"+(adOrders?"No orders yet. Everything on this site goes through the "+
      "cart, free sheets included, so each one shows up here once you check out.":"Loading…")+"</p>";
    return;
  }
  H.body.innerHTML=adOrders.map(function(o,i){
    return "<button class='ad-ord' type='button' data-go='order' data-i='"+i+"'><span class='ad-ord-t'>"+
      "<b>"+adTitle(o)+"</b><span>"+adDate(o.when)+" &middot; "+nsMoney(o.total)+"</span>"+
      "<span class='ad-ths'>"+o.rows.map(function(r){
        var it=AD_ITEMS[r.product];
        return it&&it.th?"<img src='"+it.th+"' alt='' width='42' height='42' loading='lazy'>":"<i></i>";
      }).join("")+"</span></span><span class='ad-chev' aria-hidden='true'>&rsaquo;</span></button>";
  }).join("");
}
function adOrder(H,i){
  var o=adOrders&&adOrders[i]; if(!o) return adList(H);
  adFrame(H,adTitle(o),adList,"order");
  var items=o.rows.map(function(r){
    var it=AD_ITEMS[r.product]||{};
    var paid=(r.amount_cents||0)>0;
    var href=paid?AD_WORKER+"/download?t="+encodeURIComponent(r.token):(it.open||"");
    return "<div class='ad-item'><div class='ad-item-t'><b>"+adEsc(r.title||r.product)+"</b>"+
      "<span>"+nsMoney(r.amount_cents)+"</span></div><span class='ad-q'>Qty: 1</span>"+
      (href?"<a class='ad-dl' href='"+href+"'"+(paid?"":" target='_blank' rel='noopener'")+">"+
        (paid?"Download item":"Open item")+"<span aria-hidden='true'>&rsaquo;</span></a>":"")+"</div>";
  }).join("");
  H.body.innerHTML=
    "<div class='ad-kv'><span>Order Date</span><span>"+adDate(o.when,true)+"</span></div>"+
    "<div class='ad-kv'><span>Status</span><span>Completed</span></div>"+
    "<p class='ad-cap'>Items</p>"+items+
    "<p class='ad-cap'>Summary</p>"+
    "<div class='ad-kv'><span>Subtotal</span><span>"+nsMoney(o.total)+"</span></div>"+
    "<div class='ad-kv'><span>Tax</span><span>"+nsMoney(0)+"</span></div>"+
    "<div class='ad-kv ad-tot'><span>Total</span><span>"+nsMoney(o.total)+"</span></div>";
}
function adProfile(H){
  adFrame(H,"Account",adMain,"account");
  var md=(adUser&&adUser.user_metadata)||{};
  H.body.innerHTML=
    "<p class='ad-cap'>Name</p>"+
    "<label class='ad-kv'><span>First</span><input class='ad-in' data-f='first' autocomplete='given-name' value='"+adEsc(md.first_name||"")+"'></label>"+
    "<label class='ad-kv'><span>Last</span><input class='ad-in' data-f='last' autocomplete='family-name' value='"+adEsc(md.last_name||"")+"'></label>"+
    "<p class='ad-cap'>Email</p>"+
    "<button class='ad-kv ad-go' type='button' data-open='em'><span>Email</span><span class='ad-dim'>"+
      adEsc(adUser&&adUser.email||"")+
      (adUser&&adUser.email_confirmed_at?" <em class='ad-ok'>Verified</em>":"")+
      "<i aria-hidden='true'>&rsaquo;</i></span></button>"+
    (adUser&&adUser.new_email?"<p class='ad-note'>Waiting on the confirm link sent to "+adEsc(adUser.new_email)+
      ". Until it is pressed you still sign in with the address above.</p>":"")+
    "<div class='ad-open hidden' data-box='em'>"+
      "<input class='ad-in ad-box' type='email' data-f='em' autocomplete='email' placeholder='New Email' aria-label='New email'></div>"+
    "<p class='ad-cap'>Password</p>"+
    "<button class='ad-kv ad-go' type='button' data-open='pw'><span>Password</span><span class='ad-dim'>"+
      "&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;<i aria-hidden='true'>&rsaquo;</i></span></button>"+
    "<div class='ad-open hidden' data-box='pw'>"+
      "<input class='ad-in ad-box' type='password' data-f='pw1' autocomplete='new-password' placeholder='New Password' aria-label='New password'>"+
      "<input class='ad-in ad-box' type='password' data-f='pw2' autocomplete='new-password' placeholder='Re-type New Password' aria-label='Re-type new password'>"+
      "</div>"+
    "<p class='ad-msg'></p>";
  var q=function(s){ return H.body.querySelector(s); };
  var msg=q(".ad-msg"),first=q("[data-f=first]"),lastIn=q("[data-f=last]"),
      em=q("[data-f=em]"),pw1=q("[data-f=pw1]"),pw2=q("[data-f=pw2]");
  H.body.querySelectorAll("[data-open]").forEach(function(row){
    row.onclick=function(){
      var box=q("[data-box="+row.getAttribute("data-open")+"]");
      var opening=box.classList.contains("hidden");
      box.classList.toggle("hidden",!opening);
      row.classList.toggle("is-open",opening);
      if(opening){ var i=box.querySelector("input"); if(i) i.focus(); }
      else box.querySelectorAll("input").forEach(function(i){ i.value=""; });
    };
  });
  function saved(){
    H.save=null;
    if(H.x){ H.x.textContent=H.xLabel; H.x.hidden=!H.xLabel; }
  }
  function dirty(){
    if(H.save) return;
    H.save=doSave;
    if(H.x){ H.x.textContent="Save"; H.x.hidden=false; }
  }
  var doSave=function(){
    var f=first.value.trim(),l=lastIn.value.trim(),a=pw1.value,b=pw2.value;
    var newEm=em.value.trim().toLowerCase(),oldEm=String(adUser&&adUser.email||"").toLowerCase();
    var nameChanged=f!==(md.first_name||"")||l!==(md.last_name||"");
    var pwTyped=a.length||b.length;
    var emTyped=newEm.length>0&&newEm!==oldEm;
    if(emTyped&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEm)){ msg.textContent="Type the new email address in full."; return; }
    if(pwTyped&&a.length<8){ msg.textContent="Pick a password with at least 8 characters."; return; }
    if(pwTyped&&a!==b){ msg.textContent="The two passwords do not match."; return; }
    if(!nameChanged&&!pwTyped&&!emTyped){ msg.textContent="Nothing to save yet."; return; }
    msg.textContent="Saving…";
    var jobs=[],said=[];
    if(nameChanged) jobs.push(NSAccount.updateProfile(f,l).then(function(u){
      md.first_name=f; md.last_name=l;
      if(u&&u.user_metadata) adUser=u; else if(adUser){ adUser.user_metadata=md; }
      said.push("Name saved.");
    }));
    if(pwTyped) jobs.push(NSAccount.newPassword(a).then(function(){
      pw1.value=pw2.value=""; q("[data-box=pw]").classList.add("hidden");
      said.push("Password saved.");
    }));
    if(emTyped) jobs.push(NSAccount.changeEmail(newEm).then(function(u){
      if(u&&u.id) adUser=u;
      em.value=""; q("[data-box=em]").classList.add("hidden");
      said.push("Check your email: press the link we sent to "+newEm+" to finish the change.");
    }));
    Promise.all(jobs).then(function(){
      msg.textContent=said.join(" ");
      saved();
    }).catch(function(e){ msg.textContent=e.message||"Could not save that. Try again."; });
  };
  H.body.querySelectorAll(".ad-in").forEach(function(i){
    i.addEventListener("input",dirty);
    i.addEventListener("keydown",function(e){ if(e.key==="Enter"){ e.preventDefault(); if(H.save) H.save(); } });
  });
}
function adRefresh(){
  adHosts.forEach(function(H){
    if(H.view==="main") adMain(H); else if(H.view==="orders") adList(H);
  });
}
function adLoad(){
  if(adLoading) return; adLoading=true;
  NSAccount.getUser().then(function(u){ adUser=u; adRefresh(); }).catch(function(){});
  NSAccount.myDownloads().then(function(rows){ adOrders=adGroup(rows||[]); adRefresh(); })
    .catch(function(){ adOrders=[]; adRefresh(); })
    .then(function(){ adLoading=false; });
}
function adWire(H){
  adHosts.push(H);
  H.back.onclick=function(){ if(H.up) H.up(H); };
  if(H.x) H.x.onclick=function(){ if(H.save) H.save(); else if(H===adD) adOpen(false); };
  H.body.addEventListener("click",function(e){
    if(e.target.closest("[data-out]")){ NSAccount.signOut(); location.reload(); return; }
    var b=e.target.closest("[data-go]"); if(!b) return;
    var g=b.getAttribute("data-go");
    if(g==="orders") adList(H);
    else if(g==="profiles") adProfiles(H);
    else if(g==="settings") adSettings(H);
    else if(g==="account") adProfile(H);
    else if(g==="order") adOrder(H,+b.getAttribute("data-i"));
  });
  adMain(H);
}
var adD=adrawer?adHostOf(adrawer):null;
if(adD) adWire(adD);
if(adD&&window.NSAccount&&NSAccount.isSignedIn()&&/[?&]panel=account\b/.test(location.search)){
  history.replaceState(null,"",location.pathname+location.hash);
  adMain(adD); adLoad(); adOpen(true);
}
if(adrawer&&acctLink){
  acctLink.addEventListener("click",function(e){
    if(!window.NSAccount||!NSAccount.isSignedIn()) return;
    if(e.button!==0||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey) return;
    e.preventDefault();
    adMain(adD);
    adLoad();
    adOpen(true);
  });
  ascrim.onclick=function(){ adOpen(false); };
  addEventListener("keydown",function(e){
    if(e.key==="Escape"&&document.body.classList.contains("acct-open")) adOpen(false);
  });
}
})();
