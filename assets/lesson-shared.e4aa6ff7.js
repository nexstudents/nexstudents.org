
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
var AD_THEMES=[{"k":"forest","name":"Forest","box":"#25664A"},{"k":"ocean","name":"Ocean","box":"#1F5E80"},{"k":"ember","name":"Ember","box":"#96441C"},{"k":"violet","name":"Violet","box":"#553093"},{"k":"graphite","name":"Graphite","box":"#3A4A63"},{"k":"rose","name":"Rose","box":"#9A2A5E"},{"k":"gold","name":"Gold","box":"#6F5100"},{"k":"teal","name":"Teal","box":"#0C625D"}];
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
var AD_GRADES=["K","1","2","3","4","5","6","7","8"];
var AD_MAX={student:10,parent:1};   
var adKids=null,adPins=null;        
var AD_LOCK="<svg class='ad-lock' viewBox='0 0 20 20' width='11' height='11' aria-hidden='true' fill='none' "+
  "stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>"+
  "<rect x='4' y='9' width='12' height='8' rx='1.6'/><path d='M7 9V6.5a3 3 0 0 1 6 0V9'/></svg>";
function adKid(id){ return (adKids||[]).filter(function(k){ return k.id===id; })[0]||null; }
function adOf(kind){ return (adKids||[]).filter(function(k){ return k.kind===kind; }); }
function adTheme(k){ return AD_THEMES.filter(function(t){ return t.k===k; })[0]||null; }
function adHasPin(key){ return !!(adPins&&adPins[key||"owner"]); }
var AD_PENDING={pending:true};
function adActive(){
  var w=window.NSAccount?NSAccount.who():"parent";
  if(w==="parent") return null;
  if(adKids===null) return AD_PENDING;
  return adKid(w);
}
function adParentSide(a){ return a===null||(a&&a!==AD_PENDING&&a.kind==="parent"); }
function adAv(name,theme){
  var t=adTheme(theme);
  return "<i"+(t?" style='background:"+t.box+"'":"")+" aria-hidden='true'>"+adEsc(String(name||"?").charAt(0).toUpperCase())+"</i>";
}
function adMe(){
  var md=(adUser&&adUser.user_metadata)||{};
  return md.first_name||(adUser&&adUser.email?adUser.email.split("@")[0]:"You");
}
function adFull(){ return adOf("student").length>=AD_MAX.student&&adOf("parent").length>=AD_MAX.parent; }
function adStrip(a){
  var me=adMe();
  function tile(id,name,theme,pinKey,on){
    var lock=pinKey!==false&&adHasPin(pinKey);
    return "<button class='ad-pro-i"+(on?" is-me":"")+"' type='button' data-who='"+adEsc(id)+"' aria-label='"+
      adEsc(name)+(lock?", locked with a PIN":"")+"'>"+adAv(name,theme)+"<b>"+(lock?AD_LOCK:"")+adEsc(name)+"</b></button>";
  }
  return "<div class='ad-pro'>"+
    tile("parent",me,null,null,a===null)+
    adOf("parent").map(function(p){ return tile(p.id,p.name,p.theme,p.id,a&&a.id===p.id); }).join("")+
    adOf("student").map(function(k){ return tile(k.id,k.name,k.theme,false,a&&a.id===k.id); }).join("")+
    (adParentSide(a)&&!adFull()?"<button class='ad-pro-i is-add' type='button' data-go='add' aria-label='Add Profile'><i aria-hidden='true'>+</i></button>":"")+
    "</div>";
}
function adSetWho(id){
  NSAccount.setWho(id);
  nsWhoIcon();
}
function nsApplyAccent(){
  if(!window.NSAccount) return;
  var a=NSAccount.isSignedIn()?adActive():null;
  if(a===AD_PENDING) return;
  var t=a?adTheme(a.theme):null,d=document.documentElement;
  try{ if(t) localStorage.setItem("ns:accent",t.box); else localStorage.removeItem("ns:accent"); }catch(e){}
  if(t){ d.style.setProperty("--me",t.box); d.classList.add("has-me"); }
  else { d.style.removeProperty("--me"); d.classList.remove("has-me"); }
}
function adMain(H){
  adFrame(H,"Account",null,"main");
  var a=adActive();
  if(a===AD_PENDING){ H.body.innerHTML="<p class='ad-empty ad-mid'>Loading…</p>"; return; }
  if(!adParentSide(a)){
    var anyPin=adHasPin(null)||adOf("parent").some(function(p){ return adHasPin(p.id); });
    H.body.innerHTML="<div class='ad-hi'><h3>Hi, "+adEsc(a.name)+"</h3></div>"+adStrip(a)+
      "<button class='ad-row' type='button' data-go='settings'><b>Settings</b><span data-mode-label>Night Mode</span></button>"+
      "<p class='ad-note ad-mid'>Grown-ups: tap your profile"+(anyPin?" and enter your PIN":"")+" to get back to the account.</p>";
    if(typeof nsPaintMode==="function") nsPaintMode();
    return;
  }
  var md=(adUser&&adUser.user_metadata)||{};
  var hiName=a?a.name:md.first_name;
  var last=adOrders&&adOrders.length?"Last order "+(adOrders[0].no!=null?"#"+adOrders[0].no+" ":"")+"is completed":
           (adOrders?"No orders yet":"Loading…");
  var ns=adKids?adOf("student").length:-1,np=adKids?adOf("parent").length+1:-1;
  var kidsLine=ns<0?"Loading…":np+" parent"+(np===1?"":"s")+" · "+ns+" student"+(ns===1?"":"s");
  H.body.innerHTML="<div class='ad-hi'><h3>"+(hiName?"Hi, "+adEsc(hiName):"Hi there")+"</h3></div>"+
    adStrip(a)+
    "<button class='ad-row' type='button' data-go='profiles'><b>Manage Profiles</b><span>"+adEsc(kidsLine)+"</span></button>"+
    "<button class='ad-row' type='button' data-go='orders'><b>Orders</b><span>"+adEsc(last)+"</span></button>"+
    "<button class='ad-row' type='button' data-go='settings'><b>Settings</b><span data-mode-label>Night Mode</span></button>"+
    "<button class='ad-row' type='button' data-go='account'><b>Account</b><span>"+
      adEsc(adUser&&adUser.email||"")+"</span></button>"+
    "<button class='ad-signout' type='button' data-out>Sign Out</button>";
  if(typeof nsPaintMode==="function") nsPaintMode();
}
function adSwitch(H,id){
  if(id===NSAccount.who()) return;
  var row=id==="parent"?null:adKid(id);
  var isParent=id==="parent"||(row&&row.kind==="parent");
  var key=id==="parent"?null:id;
  if(isParent&&adHasPin(key)) return adPinView(H,"unlock",{key:key,name:row?row.name:adMe()});
  adSetWho(id); adMain(H);
}
function adGradeLine(k){ return k.grade?(k.grade==="K"?"Kindergarten":"Grade "+adEsc(k.grade)):"No grade set"; }
function adRow(go,id,avatar,title,sub){
  return "<button class='ad-ord ad-kidrow' type='button' data-go='"+go+"'"+(id?" data-id='"+adEsc(id)+"'":"")+">"+avatar+
    "<span class='ad-ord-t'><b>"+title+"</b><span>"+sub+"</span></span><span class='ad-chev' aria-hidden='true'>&rsaquo;</span></button>";
}
function adProfiles(H){
  adFrame(H,"Manage Profiles",adMain,"profiles");
  if(adKids===null){ H.body.innerHTML="<p class='ad-empty ad-mid'>Loading…</p>"; return; }
  var me=adMe(),kids=adOf("student");
  function pinLine(key){ return adHasPin(key)?"PIN on":"No PIN"; }
  H.body.innerHTML=
    "<p class='ad-cap'>Parents · "+(adOf("parent").length+1)+" of 2</p>"+
    adRow("owner",null,adAv(me,null),adEsc(me),"Account holder · "+pinLine(null))+
    adOf("parent").map(function(p){ return adRow("edit",p.id,adAv(p.name,p.theme),adEsc(p.name),"Parent · "+pinLine(p.id)); }).join("")+
    "<p class='ad-cap'>Students · "+kids.length+" of 10</p>"+
    (kids.length?"":"<p class='ad-note'>Give each student their own profile, so their lessons and progress stay separate.</p>")+
    kids.map(function(k){ return adRow("edit",k.id,adAv(k.name,k.theme),adEsc(k.name),adGradeLine(k)); }).join("")+
    (adFull()?"<p class='ad-note'>This account is full: 2 parents and 10 students.</p>":
      "<button class='ad-ord ad-kidrow is-add' type='button' data-go='add'><i aria-hidden='true'>+</i>"+
      "<span class='ad-ord-t'><b>Add Profile</b></span><span class='ad-chev' aria-hidden='true'>&rsaquo;</span></button>")+
    "<p class='ad-note'>Each parent can set their own PIN. Students need it to open that parent's profile, so Orders, Account and these settings stay with the grown-ups.</p>";
}
function adAddPick(H){
  adFrame(H,"Add Profile",adProfiles,"add");
  var np=adOf("parent").length,ns=adOf("student").length;
  function opt(kind,label,used,max){
    var full=used>=max;
    return "<button class='ad-row' type='button' data-kind='"+kind+"'"+(full?" disabled":"")+"><b>"+label+"</b><span>"+
      (full?"Full":(used+(kind==="parent"?1:0))+" of "+(kind==="parent"?2:10)+" used")+"</span></button>";
  }
  H.body.innerHTML="<p class='ad-empty ad-mid'>Who is this profile for?</p>"+
    opt("parent","Parent",np,AD_MAX.parent)+opt("student","Student",ns,AD_MAX.student);
  H.body.querySelectorAll("[data-kind]").forEach(function(b){
    b.onclick=function(){ if(!b.disabled) adEdit(H,null,b.getAttribute("data-kind")); };
  });
}
function adOwner(H){
  adFrame(H,adMe(),adProfiles,"owner");
  H.body.innerHTML="<div class='ad-hi ad-edit-av'>"+adAv(adMe(),null)+"</div>"+
    "<p class='ad-cap'>PIN</p>"+
    "<button class='ad-kv ad-go' type='button' data-pin><span>PIN</span><span class='ad-dim'>"+
      (adHasPin(null)?"On":"Not set")+"<i aria-hidden='true'>&rsaquo;</i></span></button>"+
    "<p class='ad-note'>Your name, email and password are under Account.</p>";
  H.body.querySelector("[data-pin]").onclick=function(){ adPinView(H,"change",{key:null,name:adMe()}); };
}
function adEdit(H,row,kindIn){
  var kind=row?row.kind:kindIn;
  var isKid=kind==="student";
  adFrame(H,row?"Edit Profile":(isKid?"Add Student":"Add Parent"),row?adProfiles:adAddPick,"edit");
  var used=(adKids||[]).map(function(k){ return k.theme; });
  var fresh=AD_THEMES.filter(function(t){ return used.indexOf(t.k)<0; })[0]||AD_THEMES[0];
  var bd=row&&row.birthday?String(row.birthday).split("-"):["","",""];
  var f={name:row?row.name:"",grade:row?row.grade||"":"",theme:row?row.theme:fresh.k,gender:row?row.gender||"":""};
  function chips(attr,list,cur,label,cls){
    return "<div class='ad-chips"+(cls?" "+cls:"")+"' role='group' aria-label='"+label+"'>"+list.map(function(g){
      return "<button type='button' data-"+attr+"='"+g[0]+"' aria-pressed='"+(cur===g[0])+"'>"+g[1]+"</button>";
    }).join("")+"</div>";
  }
  H.body.innerHTML=
    "<div class='ad-hi ad-edit-av'>"+adAv(f.name||"?",f.theme)+"</div>"+
    "<p class='ad-cap'>Name</p>"+
    "<label class='ad-kv'><span>Name</span><input class='ad-in' data-f='name' maxlength='30' autocomplete='off' value='"+adEsc(f.name)+"'></label>"+
    (isKid?
      "<p class='ad-cap'>Birthday <em class='ad-opt'>Optional</em></p>"+
      "<div class='ad-kv ad-bday'><span>Birthday</span><span>"+
        "<input class='ad-in' data-f='mm' inputmode='numeric' maxlength='2' placeholder='MM' aria-label='Birth month' value='"+adEsc(bd[1]||"")+"'>/"+
        "<input class='ad-in' data-f='dd' inputmode='numeric' maxlength='2' placeholder='DD' aria-label='Birth day' value='"+adEsc(bd[2]||"")+"'>/"+
        "<input class='ad-in ad-yyyy' data-f='yy' inputmode='numeric' maxlength='4' placeholder='YYYY' aria-label='Birth year' value='"+adEsc(bd[0]||"")+"'>"+
      "</span></div>"+
      "<p class='ad-cap'>Male or Female <em class='ad-opt'>Optional</em></p>"+
      chips("gender",[["male","Male"],["female","Female"]],f.gender,"Male or female","is-center")+
      "<p class='ad-cap'>Grade Level</p>"+
      chips("grade",AD_GRADES.map(function(g){ return [g,g]; }),f.grade,"Grade level")
    :"")+
    "<p class='ad-cap'>Theme Color · <span data-tname>"+adEsc((adTheme(f.theme)||{}).name||"")+"</span></p>"+
    "<div class='ad-sw' role='group' aria-label='Theme color'>"+AD_THEMES.map(function(t){
      return "<button type='button' style='background:"+t.box+"' data-theme-k='"+t.k+"' aria-label='"+t.name+"' title='"+t.name+"' aria-pressed='"+(f.theme===t.k)+"'></button>";
    }).join("")+"</div>"+
    "<p class='ad-note'>Colors "+(f.name?adEsc(f.name)+"&#39;s":"their")+" profile box, the buttons and the menu bar while they&#39;re on.</p>"+
    (!isKid&&row?"<p class='ad-cap'>PIN</p><button class='ad-kv ad-go' type='button' data-pin><span>PIN</span><span class='ad-dim'>"+
      (adHasPin(row.id)?"On":"Not set")+"<i aria-hidden='true'>&rsaquo;</i></span></button>":"")+
    "<p class='ad-msg'></p>"+
    (row?"<button class='ad-signout ad-del' type='button' data-del>"+(isKid?"Remove Student":"Remove Parent")+"</button>":"");
  var q=function(s){ return H.body.querySelector(s); };
  var msg=q(".ad-msg"),nameIn=q("[data-f=name]"),big=q(".ad-edit-av");
  function paintBig(){ big.innerHTML=adAv(nameIn.value.trim()||"?",f.theme); }
  function dirty(){ if(H.save) return; H.save=doSave; if(H.x){ H.x.textContent="Save"; H.x.hidden=false; } }
  H.body.querySelectorAll(".ad-in").forEach(function(i){
    i.addEventListener("input",function(){
      if(i!==nameIn) i.value=i.value.replace(/[^0-9]/g,"");
      paintBig(); dirty();
    });
    i.addEventListener("keydown",function(e){ if(e.key==="Enter"){ e.preventDefault(); if(H.save) H.save(); } });
  });
  function chipGroup(attr,field){
    H.body.querySelectorAll("[data-"+attr+"]").forEach(function(b){
      b.onclick=function(){
        var v=b.getAttribute("data-"+attr); f[field]=f[field]===v?"":v;
        H.body.querySelectorAll("[data-"+attr+"]").forEach(function(x){ x.setAttribute("aria-pressed",x.getAttribute("data-"+attr)===f[field]); });
        dirty();
      };
    });
  }
  chipGroup("grade","grade"); chipGroup("gender","gender");
  H.body.querySelectorAll("[data-theme-k]").forEach(function(b){
    b.onclick=function(){
      f.theme=b.getAttribute("data-theme-k");
      H.body.querySelectorAll("[data-theme-k]").forEach(function(x){ x.setAttribute("aria-pressed",x===b); });
      q("[data-tname]").textContent=(adTheme(f.theme)||{}).name||"";
      paintBig(); dirty();
    };
  });
  var pinRow=q("[data-pin]");
  if(pinRow) pinRow.onclick=function(){ adPinView(H,"change",{key:row.id,name:row.name}); };
  function birthday(){
    if(!isKid) return "";
    var m=q("[data-f=mm]").value,d=q("[data-f=dd]").value,y=q("[data-f=yy]").value;
    if(!m&&!d&&!y) return "";
    if(!m||!d||y.length!==4) return null;
    var iso=y+"-"+("0"+m).slice(-2)+"-"+("0"+d).slice(-2),dt=new Date(iso+"T00:00:00");
    if(isNaN(dt)||dt.getDate()!==+d||dt.getMonth()+1!==+m) return null;
    return iso;
  }
  var busy=false;
  var doSave=function(){
    if(busy) return;
    var name=nameIn.value.trim(),b=birthday();
    if(!name){ msg.textContent="Give the profile a name."; nameIn.focus(); return; }
    if(b===null){ msg.textContent="Finish the birthday as MM / DD / YYYY, or leave it blank."; return; }
    if(b&&new Date(b+"T00:00:00")>new Date()){ msg.textContent="Check the birthday. It can't be in the future."; return; }
    busy=true; msg.textContent="Saving…";
    var body={name:name,theme:f.theme,grade:isKid?f.grade:null,gender:isKid?f.gender:null,birthday:b||null,kind:kind};
    var job=row?NSAccount.updateStudent(row.id,body):NSAccount.addStudent(body);
    job.then(function(saved){
      busy=false;
      if(!saved) throw new Error("Could not save that profile.");
      var firstKid=!row&&isKid&&adOf("student").length===0;
      if(row) adKids=adKids.map(function(k){ return k.id===saved.id?saved:k; });
      else adKids=(adKids||[]).concat([saved]);
      if(row&&NSAccount.who()===row.id) adSetWho(row.id); else nsWhoIcon();
      if(!row&&!isKid) adPinView(H,"first",{key:saved.id,name:saved.name,forParent:true});
      else if(firstKid&&!adHasPin(null)) adPinView(H,"first",{key:null,name:adMe(),kid:saved.name});
      else adProfiles(H);
    }).catch(function(e){ busy=false; msg.textContent=e.message||"Could not save that profile."; });
  };
  if(!row){ H.save=doSave; if(H.x){ H.x.textContent="Save"; H.x.hidden=false; } nameIn.focus(); }
  var del=q("[data-del]");
  if(del) del.onclick=function(){ adRemove(H,row); };
}
function adRemove(H,row){
  var isKid=row.kind==="student",n=adEsc(row.name);
  adFrame(H,isKid?"Remove Student":"Remove Parent",function(){ adEdit(H,row); },"remove");
  H.body.innerHTML="<div class='ad-hi ad-edit-av'>"+adAv(row.name,row.theme)+"</div>"+
    "<div class='ad-warn'><b>This can&#39;t be undone.</b>"+
    (isKid?"<p>Removing "+n+" deletes their profile and <strong>wipes all of their progress</strong>: every lesson they&#39;ve finished and every score.</p>":
           "<p>Removing "+n+" deletes their profile and their PIN.</p>")+
    "<p>Your orders and downloads are not affected.</p></div>"+
    "<p class='ad-msg'></p>"+
    "<button class='ad-danger' type='button' data-yes>Remove "+n+"</button>"+
    "<button class='ad-link' type='button' data-no>Cancel</button>";
  var msg=H.body.querySelector(".ad-msg"),yes=H.body.querySelector("[data-yes]");
  H.body.querySelector("[data-no]").onclick=function(){ adEdit(H,row); };
  yes.onclick=function(){
    yes.disabled=true; yes.textContent="Removing…";
    NSAccount.deleteStudent(row.id).then(function(){
      adKids=adKids.filter(function(k){ return k.id!==row.id; });
      if(adPins) delete adPins[row.id];
      nsWhoIcon(); adProfiles(H);
    }).catch(function(e){ yes.disabled=false; yes.textContent="Remove "+row.name; msg.textContent=e.message; });
  };
}
function adPinView(H,mode,ctx){
  ctx=ctx||{};
  var key=ctx.key||null,who=ctx.name||"your";
  var up=mode==="unlock"?adMain:adProfiles;
  var steps=mode==="unlock"?["check"]:(mode==="change"&&adHasPin(key)?["old","new","again"]:["new","again"]);
  var i=0,vals={};
  var WORDS={
    check:"Enter "+who+"'s PIN to open their profile.",
    old:"Enter "+who+"'s current PIN.",
    "new":mode==="first"?(ctx.forParent?"Set a 4-number PIN for "+who+". Students will need it to open "+who+"'s profile.":
      "Set a 4-number PIN for "+who+". "+(ctx.kid||"Your student")+" will need it to get back to your profile."):
      "Pick a new 4-number PIN for "+who+".",
    again:"Type the same PIN again."
  };
  function draw(note){
    adFrame(H,mode==="unlock"?"Enter PIN":"Parent/Teacher PIN",up,"pin");
    H.body.innerHTML="<p class='ad-empty ad-mid'>"+adEsc(WORDS[steps[i]])+"</p>"+
      "<div class='ad-pinbox'><span></span><span></span><span></span><span></span>"+
      "<input type='password' inputmode='numeric' pattern='[0-9]*' maxlength='4' autocomplete='off' aria-label='PIN'></div>"+
      "<p class='ad-msg'>"+adEsc(note||"")+"</p>"+
      (mode==="unlock"||steps[i]==="old"?"<button class='ad-link' type='button' data-forgot>Forgot PIN?</button>":"")+
      (mode==="first"?"<button class='ad-link' type='button' data-skip>Not Now</button>":"");
    var box=H.body.querySelector(".ad-pinbox"),inp=box.querySelector("input"),
        dots=box.querySelectorAll("span"),msg=H.body.querySelector(".ad-msg");
    function paint(){ dots.forEach(function(d,j){ d.classList.toggle("is-on",j<inp.value.length); d.classList.toggle("is-cur",j===inp.value.length); }); }
    inp.addEventListener("input",function(){
      inp.value=inp.value.replace(/[^0-9]/g,"").slice(0,4); paint();
      if(inp.value.length===4) done(inp.value);
    });
    function wrong(t){ inp.value=""; paint(); msg.textContent=t; box.classList.remove("is-shake"); void box.offsetWidth; box.classList.add("is-shake"); inp.focus(); }
    function done(v){
      var step=steps[i];
      if(step==="check"){
        inp.disabled=true; msg.textContent="Checking…";
        NSAccount.checkPin(v,key).then(function(ok){
          inp.disabled=false;
          if(ok===true){ adSetWho(key||"parent"); adMain(H); }
          else wrong("That PIN isn't right. Try again.");
        }).catch(function(e){ inp.disabled=false; wrong(e.message); });
        return;
      }
      if(step==="again"&&v!==vals["new"]){ i=steps.indexOf("new"); vals={old:vals.old}; draw("Those didn't match. Start the new PIN again."); return; }
      vals[step]=v;
      if(i<steps.length-1){ i++; draw(); return; }
      inp.disabled=true; msg.textContent="Saving…";
      NSAccount.setPin(vals["new"],vals.old==null?null:vals.old,key).then(function(){
        adPins=adPins||{}; adPins[key||"owner"]=true; adProfiles(H);
      }).catch(function(e){
        inp.disabled=false;
        if(steps[0]==="old"){ i=0; vals={}; draw(e.message); } else wrong(e.message);
      });
    }
    paint(); inp.focus();
    var fg=H.body.querySelector("[data-forgot]"); if(fg) fg.onclick=function(){ adForgotPin(H,ctx); };
    var sk=H.body.querySelector("[data-skip]"); if(sk) sk.onclick=function(){ adProfiles(H); };
  }
  draw();
}
function adForgotPin(H,ctx){
  adFrame(H,"Forgot PIN",adMain,"pin");
  var em=adUser&&adUser.email||"";
  H.body.innerHTML="<p class='ad-empty ad-mid'>Sign in with the account password to pick a new PIN"+
    (ctx&&ctx.name?" for "+adEsc(ctx.name):"")+".</p>"+
    "<div class='ad-kv'><span>Email</span><span>"+adEsc(em)+"</span></div>"+
    "<label class='ad-kv'><span>Password</span><input class='ad-in' type='password' data-f='pw' autocomplete='current-password'></label>"+
    "<p class='ad-msg'></p><button class='ad-link' type='button' data-go-pw>Continue</button>";
  var pw=H.body.querySelector("[data-f=pw]"),msg=H.body.querySelector(".ad-msg");
  function go(){
    if(!pw.value){ msg.textContent="Type your password."; pw.focus(); return; }
    msg.textContent="Checking…";
    NSAccount.logIn(em,pw.value).then(function(){
      NSAccount.pickerShown(); nsWhoIcon();
      adPinView(H,"reset",ctx);
    }).catch(function(e){ msg.textContent=e.message||"That password isn't right."; });
  }
  H.body.querySelector("[data-go-pw]").onclick=go;
  pw.addEventListener("keydown",function(e){ if(e.key==="Enter"){ e.preventDefault(); go(); } });
  pw.focus();
}
var AD_ICON=acctLink?acctLink.innerHTML:"";
function nsWhoIcon(){
  nsApplyAccent();
  if(!acctLink||!window.NSAccount) return;
  var k=NSAccount.isSignedIn()?adActive():null;
  if(k&&k!==AD_PENDING){
    var t=adTheme(k.theme);
    acctLink.innerHTML="<span class='nv-av'"+(t?" style='background:"+t.box+"'":"")+" aria-hidden='true'>"+adEsc(k.name.charAt(0).toUpperCase())+"</span>";
    acctLink.setAttribute("aria-label","Account, "+k.name);
  } else if(acctLink.innerHTML!==AD_ICON){
    acctLink.innerHTML=AD_ICON; acctLink.setAttribute("aria-label","Account");
  }
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
    else if(H.view==="profiles") adProfiles(H);
  });
}
function adLoad(){
  if(adLoading) return; adLoading=true;
  var a=NSAccount.getUser().then(function(u){ adUser=u; adRefresh(); }).catch(function(){});
  var b=NSAccount.myDownloads().then(function(rows){ adOrders=adGroup(rows||[]); adRefresh(); })
    .catch(function(){ adOrders=[]; adRefresh(); });
  var c=NSAccount.students().then(function(k){ adKids=k||[]; adRefresh(); nsWhoIcon(); })
    .catch(function(){ adKids=[]; adRefresh(); nsWhoIcon(); });
  var d=NSAccount.pinMap().then(function(p){ adPins=p||{}; adRefresh(); })
    .catch(function(){ adPins={}; });
  Promise.all([a,b,c,d]).then(function(){ adLoading=false; });
}
function nsWhoPicker(){
  if(!window.NSAccount||!NSAccount.wantsPicker()) return;
  NSAccount.pickerShown();
  Promise.all([NSAccount.getUser(),NSAccount.students(),NSAccount.pinMap().catch(function(){ return {}; })]).then(function(r){
    var rows=r[1]||[];
    if(!rows.length) return;
    adUser=adUser||r[0]; adKids=rows; adPins=r[2]||{};
    var me=adMe();
    function tile(id,name,theme){
      return "<button type='button' class='whop-i' data-who='"+adEsc(id)+"'>"+adAv(name,theme)+"<b>"+adEsc(name)+"</b></button>";
    }
    var o=document.createElement("div");
    o.className="whop"; o.setAttribute("role","dialog"); o.setAttribute("aria-modal","true");
    o.setAttribute("aria-labelledby","whopH");
    o.innerHTML="<div class='whop-in'><h2 id='whopH'>Who&#39;s learning?</h2><div class='whop-row'>"+
      tile("parent",me,null)+
      adOf("parent").map(function(p){ return tile(p.id,p.name,p.theme); }).join("")+
      adOf("student").map(function(k){ return tile(k.id,k.name,k.theme); }).join("")+
      "</div><button type='button' class='whop-manage' data-manage>Manage Profiles</button></div>";
    document.body.appendChild(o);
    nsLockScroll(true);
    requestAnimationFrame(function(){ o.classList.add("is-in"); });
    function close(){ o.remove(); nsLockScroll(false); nsWhoIcon(); }
    o.addEventListener("click",function(e){
      var b=e.target.closest("[data-who]");
      if(b){
        var id=b.getAttribute("data-who");
        adSetWho(id); close();
        if(!adParentSide(adActive())) adOpen(false); else if(adD) adMain(adD);
        return;
      }
      if(e.target.closest("[data-manage]")){
        adSetWho("parent"); close();
        if(adD){ adProfiles(adD); adLoad(); adOpen(true); }
      }
    });
    addEventListener("keydown",function esc(e){
      if(e.key!=="Escape"||!o.isConnected) return;
      removeEventListener("keydown",esc); close();
    });
    var first=o.querySelector(".whop-i"); if(first) first.focus();
  }).catch(function(){});
}
function adWire(H){
  adHosts.push(H);
  H.back.onclick=function(){ if(H.up) H.up(H); };
  if(H.x) H.x.onclick=function(){ if(H.save) H.save(); else if(H===adD) adOpen(false); };
  H.body.addEventListener("click",function(e){
    if(e.target.closest("[data-out]")){ NSAccount.signOut(); location.reload(); return; }
    var w=e.target.closest("[data-who]");
    if(w){ adSwitch(H,w.getAttribute("data-who")); nsWhoIcon(); return; }
    var b=e.target.closest("[data-go]"); if(!b) return;
    var g=b.getAttribute("data-go");
    if(g!=="settings"&&!adParentSide(adActive())) return adMain(H);
    if(g==="orders") adList(H);
    else if(g==="profiles") adProfiles(H);
    else if(g==="add") adAddPick(H);
    else if(g==="owner") adOwner(H);
    else if(g==="edit") adEdit(H,adKid(b.getAttribute("data-id")));
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
if(window.NSAccount&&NSAccount.isSignedIn()){
  nsWhoPicker();
  if(NSAccount.who()!=="parent"&&adKids===null){
    NSAccount.students().then(function(k){ if(adKids===null) adKids=k||[]; nsWhoIcon(); }).catch(function(){});
  }
}
})();
