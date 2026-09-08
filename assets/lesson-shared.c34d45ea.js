
(function(){

var burger=document.getElementById("burger"),drawer=document.getElementById("drawer"),
    scrim=document.getElementById("scrim"),dClose=document.getElementById("drawerClose");

/* 🚨 THE SCROLL LOCK GOES ON <html>, NOT <body>, AND THAT IS THE WHOLE BUG.
   Paul, 2026-09-07, of the cart drawer: "they have a x that prevents the user
   from scrolling when the draw is open" - ours did not.
   Measured with the drawer open: document.scrollingElement is HTML, body's
   computed overflow-y was already "hidden" (the old line worked), html's was
   "visible", and the page still scrolled 0 -> 576.
   ⚠️ Setting overflow on BODY does nothing here because html carries
   overflow-x clip and is therefore the scroll container - the same reason
   already written up in CLAUDE.md for why window scroll events died when
   overflow-x sat on body.
   ⚠️ KNOWN SIDE EFFECT, MEASURED AND ACCEPTED: while locked, html's overflow-x
   computes from clip to hidden. That is the CSS rule, not a bug - clip paired
   with a non-clip value computes to hidden - and it lasts only while a drawer
   is open. The sticky nav was checked in that state and still computes sticky.
   If it ever does bite, the alternative is a position:fixed body lock, which
   costs a saved scroll offset to restore.

   ⚠️ NO BACKTICKS IN THIS COMMENT. It lives inside a template literal and one
   backtick closes the string - the trap already documented for pagerScript and
   progressScript, hit again here on 2026-09-07.

   ⚠️ AND DO NOT VERIFY THIS WITH window.scrollBy. A programmatic scroll moves a
   container with overflow:hidden anyway; only wheel, touch and the scrollbar
   are blocked. Read the computed overflow-y instead. The first test here said
   the lock had failed when it had not.
   ⚠️ overflow-Y ONLY. The shorthand would reset html's overflow-x to hidden and
   quietly undo that fix.
   ⚠️ Both drawers share this. The menu drawer carried the identical dead line,
   so it never locked scrolling either. */
var nsLocks=0;
function nsLockScroll(on){
  nsLocks=Math.max(0,nsLocks+(on?1:-1));
  document.documentElement.style.overflowY=nsLocks?"hidden":"";
}

function setNav(o){
  /* Same no-op guard as nsCartOpen: the lock counts, so a repeated call in the
     state it is already in would leak one. */
  if(document.body.classList.contains("nav-open")===o) return;
  document.body.classList.toggle("nav-open",o);
  burger.setAttribute("aria-expanded",o);drawer.setAttribute("aria-hidden",!o);
  nsLockScroll(o);
  if(!o) nsCloseSubs();}
burger.onclick=function(){setNav(!document.body.classList.contains("nav-open"));};
scrim.onclick=dClose.onclick=function(){setNav(false);};
var nav=document.getElementById("nav");
addEventListener("scroll",function(){nav.classList.toggle("stuck",scrollY>16);},{passive:true});

/* ── day and night ── */
function nsMode(){ return document.documentElement.getAttribute("data-theme")==="light"?"light":"dark"; }
function nsPaintMode(){
  var light=nsMode()==="light";
  document.querySelectorAll("[data-mode-icon]").forEach(function(e){ e.innerHTML=light?"&#9788;":"&#9790;"; });
  document.querySelectorAll("[data-mode-label]").forEach(function(e){ e.textContent=light?"Day Mode":"Night Mode"; });
  document.querySelectorAll("[data-mode-toggle]").forEach(function(e){
    e.setAttribute("aria-label", light?"Switch to night mode":"Switch to day mode"); });
}
document.querySelectorAll("[data-mode-toggle]").forEach(function(btn){
  btn.addEventListener("click",function(){
    var next=nsMode()==="light"?"dark":"light";
    document.documentElement.setAttribute("data-theme",next);
    try{localStorage.setItem("ns:mode",next);}catch(e){}
    nsPaintMode();
  });
});
nsPaintMode();

/* ── phone sheets: a STACK, not a pile ───────────────────────────────────
   Levels move together. Opening a child slides the level above it out to the
   left while the child comes in from the right; Back reverses it. A stack of
   ids is the whole state, so any depth unwinds correctly. */
var subStack=[];
function nsRender(){
  document.querySelectorAll("[data-subpanel]").forEach(function(p){
    var id=p.getAttribute("data-subpanel");
    var i=subStack.indexOf(id);
    p.classList.toggle("open", i>=0);
    /* every level except the top one has moved off to the left */
    p.classList.toggle("exit", i>=0 && i<subStack.length-1);
    p.setAttribute("aria-hidden", i>=0 ? "false" : "true");
  });
  /* the drawer is level zero, so it leaves the moment any sheet is up */
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

/* ── ONE mega panel ──────────────────────────────────────────────────────
   Stays open while the pointer moves along the bar; only the contents
   cross-fade and the height eases. Closing is on a timer that any tab or the
   panel cancels, because the pointer crosses dead space on the way down and a
   hard mouseleave kills the menu mid-reach. */
var panel=document.getElementById("megapanel");
var tabEls=[].slice.call(document.querySelectorAll(".mg-top[data-menu]"));
var onTab=document.querySelector(".mg-top.on");
var closeTimer=null,current=null;

function nsMark(el){
  document.querySelectorAll(".mg-top.mg-live").forEach(function(t){ t.classList.remove("mg-live"); });
  if(el) el.classList.add("mg-live");
}
/* ONE height for every section, measured from the tallest.
   Paul, 2026-08-26: "the dropdown for games is shorter in height than the
   rest and its noticable." Animating height per section also meant the first
   hover measured BEFORE the promo image had loaded and the panel jumped a
   moment later - the glitch that cleared itself on reload. A fixed height
   removes both: nothing resizes, so nothing can resize wrongly. */
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
      /* the label drives the panel; it is not a click-through */
      t.addEventListener("click",function(e){ e.preventDefault(); });
    });
    var tabsBox=document.querySelector(".tabs");
    if(tabsBox){ tabsBox.addEventListener("mouseenter",nsKeep); tabsBox.addEventListener("mouseleave",nsLater); }
    panel.addEventListener("mouseenter",nsKeep);
    panel.addEventListener("mouseleave",nsLater);
    addEventListener("keydown",function(e){ if(e.key==="Escape") nsHide(); });
    addEventListener("resize",function(){ panelH=0; nsMeasure(); });
    /* the promo images decide the height, so re-measure as each one lands */
    panel.querySelectorAll("img").forEach(function(im){
      if(!im.complete) im.addEventListener("load",function(){ panelH=0; nsMeasure(); });
    });
    addEventListener("load",function(){ panelH=0; nsMeasure(); });
  }
}

/* ── THE CART DRAWER ──────────────────────────────────────────────────────
   NSAccount comes from ns-account.js, loaded just above this by navScript.
   ⚠️ EVERY ENTRY POINT IS GUARDED. A page can be opened before that script
   parses, or with it blocked outright, and a throw here would take the nav
   and the mega menu down with it. */
var cdrawer=document.getElementById("cdrawer"),cscrim=document.getElementById("cscrim"),
    cdBody=document.getElementById("cdBody"),cdTotal=document.getElementById("cdTotal"),
    cdN=document.getElementById("cdN"),cartn=document.getElementById("cartn"),
    cdClose=document.getElementById("cdClose");

/* 🚨 A REAL PRICE, NEVER THE WORD "Free". Paul, 2026-09-07: "subtotal should
   not say free but $0 having an actual price." Kept identical to the cart
   page's money() - one cart must not show two money formats depending on
   whether you are looking at the drawer or the page. */
function nsMoney(c){ return "$" + ((c||0)/100).toFixed(2); }

function nsCartOpen(o){
  if(!cdrawer) return;
  /* ⚠️ NO-OP IF ALREADY IN THAT STATE. nsLockScroll counts, and opening an
     already-open drawer would take a second lock that nothing releases. */
  if(document.body.classList.contains("cart-open")===o) return;
  document.body.classList.toggle("cart-open",o);
  cdrawer.setAttribute("aria-hidden",!o);
  nsLockScroll(o);
}

/* The badge is the only part that paints on EVERY page. It reads localStorage
   and nothing else, so it is instant and needs no network. */
function nsCartBadge(){
  if(!cartn||!window.NSAccount) return;
  var n=NSAccount.cart().length;
  cartn.textContent=n;
  cartn.hidden = n===0;
  if(cdN) cdN.textContent=n;
}

/* 🚨 TITLES AND PRICES COME FROM THE DATABASE, NEVER FROM THE CART. The cart
   holds slugs. Only the thumbnail is taken from the local hint, because a
   wrong picture is a cosmetic bug and a wrong price is a refund. */
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
      /* Offline, or a slug that is no longer for sale. Say so rather than
         showing an empty drawer that looks like the add failed. */
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
        /* 🚨 QUANTITY BOX OVER REMOVE, the way the reference stacks them.
           A BOX, NOT AN INPUT: a download is bought once, so a stepper here
           would be a way to pay twice for the same PDF. Same reasoning as the
           cart page - see .ck-qbox in ns.css. */
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
  /* 🚨 THE CART ICON OPENS THE DRAWER. Paul, 2026-09-07: "our right drawer
     doesnt popout when you press the cart." It was a plain link to /cart/,
     which worked but made the drawer reachable only by adding something.
     ⚠️ MODIFIED CLICKS ARE LEFT ALONE. Ctrl-click, middle-click and shift-click
     must still open the cart page in a tab or window - swallowing those breaks
     an ordinary browser habit, and the href is right there for them to use.
     It opens even on an empty cart: "Nothing in your cart yet" is an answer,
     and a control that does nothing reads as broken. */
  var cartLink=document.getElementById("cartLink");
  if(cartLink) cartLink.addEventListener("click",function(e){
    if(e.button!==0||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey) return;
    e.preventDefault();
    nsCartPaint();
    nsCartOpen(true);
  });
  cscrim.onclick=cdClose.onclick=function(){ nsCartOpen(false); };
  /* Escape closes it. A fixed overlay with no keyboard exit is a trap. */
  addEventListener("keydown",function(e){
    if(e.key==="Escape"&&document.body.classList.contains("cart-open")) nsCartOpen(false);
  });
  /* ns-account.js fires this on every add, remove and clear. The drawer OPENS
     only on an add - a remove repaints it where it already is, and clearing it
     at checkout must not pop it back up on the confirmation page. */
  document.addEventListener("ns:cart",function(e){
    nsCartPaint();
    if(e.detail&&e.detail.added) nsCartOpen(true);
  });
  nsCartBadge();
}

})();
