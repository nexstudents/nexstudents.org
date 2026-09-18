/* preview-1.jpg ... preview-N.jpg for an HTML worksheet: one square image per
   printed page, so the product page carousel works the way cursive-alphabet's
   does. Run from nexstudents.org/ :  node make-previews.js <slug> [<slug>...] */
const fs = require("fs");
const path = require("path");
const os = require("os");
const http = require("http");
const { spawn, execFile } = require("child_process");

const ROOT = process.cwd();
const PAGE_W = 816, PAGE_H = 1056, DSF = 2;
const CHROME = ["C:/Program Files/Google/Chrome/Application/chrome.exe"].find((p) => fs.existsSync(p));
const TYPES = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript",
  ".jpg": "image/jpeg", ".png": "image/png", ".svg": "image/svg+xml", ".woff2": "font/woff2" };
const nap = (ms) => new Promise((r) => setTimeout(r, ms));

/* Show the sheet, hide everything else - the same treatment make-cover uses.
   A preview is the sheet, never the site around it. */
const STRIP = "(function(){var st=document.createElement('style');" +
  "st.textContent='body>*:not(.sheet){display:none!important}'+" +
  "'html,body{background:#fff!important;margin:0!important;padding:0!important}'+" +
  "'.sheet{margin:0!important;box-shadow:none!important;border:0!important}';" +
  "document.head.appendChild(st);" +
  "var s=document.querySelector('.sheet');" +
  "if(s&&s.parentElement&&s.parentElement!==document.body){document.body.appendChild(s);}" +
  "})()";

const server = http.createServer((q, r) => {
  let f = path.join(ROOT, decodeURIComponent(q.url.split("?")[0]));
  if (fs.existsSync(f) && fs.statSync(f).isDirectory()) f = path.join(f, "index.html");
  if (!fs.existsSync(f)) { r.writeHead(404); return r.end(); }
  r.writeHead(200, { "Content-Type": TYPES[path.extname(f).toLowerCase()] || "application/octet-stream" });
  fs.createReadStream(f).pipe(r);
});

function ff(args) {
  return new Promise((ok, no) => execFile("ffmpeg", args, (e) => (e ? no(e) : ok())));
}

async function previews(slug, port) {
  const dir = path.join(ROOT, "worksheets", "english", slug);
  const url = "http://127.0.0.1:" + port + "/worksheets/english/" + slug + "/print/index.html";
  const cdp = 9950 + Math.floor(Math.random() * 40);
  const profile = fs.mkdtempSync(path.join(os.tmpdir(), "ns-pv-"));
  const proc = spawn(CHROME, ["--headless", "--disable-gpu", "--no-first-run", "--hide-scrollbars",
    "--remote-debugging-port=" + cdp, "--user-data-dir=" + profile, "about:blank"], { stdio: "ignore" });

  let ws = ""; const until = Date.now() + 20000;
  while (Date.now() < until && !ws) {
    try { const r = await fetch("http://127.0.0.1:" + cdp + "/json");
      if (r.ok) { const l = await r.json(); const p = (l || []).find((t) => t.type === "page" && t.webSocketDebuggerUrl); ws = p ? p.webSocketDebuggerUrl : ""; } } catch (e) {}
    if (!ws) await nap(200);
  }
  if (!ws) { proc.kill(); throw new Error("no port"); }

  const sock = new WebSocket(ws); let id = 0; const pend = new Map();
  await new Promise((ok) => { sock.onopen = ok; });
  sock.onmessage = (m) => { const d = JSON.parse(m.data); if (d.id && pend.has(d.id)) { pend.get(d.id)(d.result || {}); pend.delete(d.id); } };
  const send = (me, pa) => new Promise((ok) => { const n = ++id; pend.set(n, ok); sock.send(JSON.stringify({ id: n, method: me, params: pa || {} })); });

  await send("Page.enable");
  await send("Page.navigate", { url });
  await nap(3200);
  await send("Emulation.setEmulatedMedia", { media: "print" });
  await send("Runtime.evaluate", { expression: STRIP });
  await nap(1000);

  const met = await send("Page.getLayoutMetrics");
  const full = Math.min(Math.ceil((met.cssContentSize && met.cssContentSize.height) || PAGE_H), 20000);
  await send("Emulation.setDeviceMetricsOverride", { width: PAGE_W, height: full, deviceScaleFactor: DSF, mobile: false });
  await nap(500);
  const shot = await send("Page.captureScreenshot", { format: "png", captureBeyondViewport: true });
  sock.close(); proc.kill();
  if (!shot || !shot.data) throw new Error("no image");

  const tmp = path.join(os.tmpdir(), "ns-pv-" + slug + ".png");
  fs.writeFileSync(tmp, Buffer.from(shot.data, "base64"));

  const pages = Math.max(1, Math.min(Math.ceil(full / PAGE_H), 6));
  for (let i = 1; i <= pages; i++) {
    const y = (i - 1) * PAGE_H * DSF;
    const h = Math.min(PAGE_H * DSF, full * DSF - y);
    if (h < PAGE_H * DSF * 0.25) break;   /* a sliver of trailing white is not a page */
    const out = path.join(dir, "preview-" + i + ".jpg");
    await ff(["-y", "-loglevel", "error", "-i", tmp,
      /* 🚨 8.5x11, NOT A SQUARE. Paul, 2026-09-17: "you could just make the
         preview for all the worksheets 8.5x11." A worksheet IS a page, and a
         square either crops it or floats it in white. Letter is 0.7727 wide to
         tall; 800x1035 is the same ratio, so nothing is stretched.
         The pad adds the white margin that @page gives on paper and a
         screenshot never does. */
      "-vf", `crop=${PAGE_W * DSF}:${h}:0:${y},` +
             `pad=${PAGE_W * DSF + 96}:${PAGE_H * DSF + 96}:48:48:white,` +
             `scale=800:1035`,
      "-q:v", "4", out]);
    process.stdout.write("  preview-" + i + ".jpg");
  }
  fs.unlinkSync(tmp);
  console.log("   <- " + slug);
}

server.listen(0, "127.0.0.1", async () => {
  const port = server.address().port;
  for (const s of process.argv.slice(2)) {
    try { await previews(s, port); } catch (e) { console.error(s + ": " + e.message); }
  }
  server.close();
});
