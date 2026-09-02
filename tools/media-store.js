/* media-store.js — where the AUDIO lives, and how it gets there.
   ─────────────────────────────────────────────────────────────────────────
   ROADMAP 27. The site stays on GitHub Pages; only the media moves, to
   Cloudflare R2. This file is the whole of "moves".

   🚨 WHY THIS EXISTS, AND WHY IT SHIPPED BEFORE THE FIRST SCIENCE BAKE.
   GitHub Pages serves from the repo, and git keeps every version of every
   binary FOREVER. Every re-bake of a lesson leaves mp3 blobs that can never
   be removed without rewriting history. `.git` already exceeded the working
   tree because of this. The four science lessons have NO baked audio yet, so
   setting this up first means that audio never enters the repo at all.
   Paul, 2026-08-31: "we need to prevent things from breaking before we get
   that big."

   ── CONFIGURATION, ALL FROM THE ENVIRONMENT ──────────────────────────────
     R2_ACCOUNT_ID          the Cloudflare account id
     R2_ACCESS_KEY_ID       from an R2 API token
     R2_SECRET_ACCESS_KEY   from the same token
     R2_BUCKET              the bucket name
     MEDIA_BASE             public URL the site reads clips from, with a
                            trailing slash. Starts as the free
                            https://<name>.<account>.workers.dev/ and becomes
                            https://media.nexstudents.org/ later.

   🚨 NOTHING HERE IS EVER WRITTEN TO DISK, THE REPO OR A BUILT PAGE — the
   same rule GOOGLE_TTS_KEY already follows. Do not add a config file "for
   convenience"; an R2 token can write to the bucket the whole site reads.

   ⭐ MEDIA_BASE IS THE ONLY THING THAT CHANGES WHEN THE HOST CHANGES.
   Clip paths in voice.json are stored RELATIVE for exactly this reason.
   Store full URLs and switching to media.nexstudents.org later means
   rewriting every voice.json on every lesson — which is the migration pain
   this whole item exists to avoid, just moved to a different day.

   ── ZERO DEPENDENCIES, ON PURPOSE ────────────────────────────────────────
   The AWS SDK would do this in three lines and pull in ~40 MB. Everything in
   tools/ is plain node, and the S3 signature is about sixty lines, so it is
   written out below. Same reasoning as "CSS + vanilla JS only" on the site.
   ───────────────────────────────────────────────────────────────────────── */
"use strict";
const crypto = require("crypto");
const https = require("https");

const ACCOUNT = process.env.R2_ACCOUNT_ID || "";
const KEY_ID = process.env.R2_ACCESS_KEY_ID || "";
const SECRET = process.env.R2_SECRET_ACCESS_KEY || "";
const BUCKET = process.env.R2_BUCKET || "";
const BASE = process.env.MEDIA_BASE || "";

/* Configured means ALL FIVE are present. Partial config is the dangerous
   state: four set and MEDIA_BASE missing would upload happily and then write
   a manifest the page cannot resolve, so the lesson would go silent with no
   error anywhere. Refuse that outright. */
function configured() {
  return !!(ACCOUNT && KEY_ID && SECRET && BUCKET && BASE);
}

function partial() {
  const have = [ACCOUNT, KEY_ID, SECRET, BUCKET, BASE].filter(Boolean).length;
  return have > 0 && have < 5;
}

/* The public URL a stored key resolves to. Kept here so the build and any
   future tool agree, rather than each concatenating strings its own way. */
function publicUrl(key) {
  return BASE.replace(/\/+$/, "") + "/" + String(key).replace(/^\/+/, "");
}

function sha256hex(buf) {
  return crypto.createHash("sha256").update(buf).digest("hex");
}
function hmac(key, str) {
  return crypto.createHmac("sha256", key).update(str, "utf8").digest();
}

/* ── AWS Signature Version 4, the subset R2 needs for a PUT ───────────────
   R2 is S3-compatible, so this is the standard algorithm. Region is the
   literal string "auto" for R2 — not a real region, and getting it wrong
   returns a signature mismatch that reads like a bad key. */
function sign(method, key, body, contentType) {
  const host = ACCOUNT + ".r2.cloudflarestorage.com";
  const canonicalUri = "/" + BUCKET + "/" + String(key).replace(/^\/+/, "")
    .split("/").map(encodeURIComponent).join("/");

  const now = new Date();
  const amzDate = now.toISOString().replace(/[:-]|\.\d{3}/g, "");   // 20260902T070000Z
  const dateStamp = amzDate.slice(0, 8);                            // 20260902
  const payloadHash = sha256hex(body);

  /* Headers must be signed in lowercase alphabetical order, and the list in
     SignedHeaders must match the canonical block exactly. */
  const canonicalHeaders =
    "content-type:" + contentType + "\n" +
    "host:" + host + "\n" +
    "x-amz-content-sha256:" + payloadHash + "\n" +
    "x-amz-date:" + amzDate + "\n";
  const signedHeaders = "content-type;host;x-amz-content-sha256;x-amz-date";

  const canonicalRequest = [
    method, canonicalUri, "", canonicalHeaders, signedHeaders, payloadHash,
  ].join("\n");

  const scope = dateStamp + "/auto/s3/aws4_request";
  const stringToSign = [
    "AWS4-HMAC-SHA256", amzDate, scope, sha256hex(Buffer.from(canonicalRequest, "utf8")),
  ].join("\n");

  const kDate = hmac("AWS4" + SECRET, dateStamp);
  const kRegion = hmac(kDate, "auto");
  const kService = hmac(kRegion, "s3");
  const kSigning = hmac(kService, "aws4_request");
  const signature = crypto.createHmac("sha256", kSigning)
    .update(stringToSign, "utf8").digest("hex");

  return {
    host: host,
    pathname: canonicalUri,
    headers: {
      "Content-Type": contentType,
      "Content-Length": body.length,
      "x-amz-content-sha256": payloadHash,
      "x-amz-date": amzDate,
      "Authorization": "AWS4-HMAC-SHA256 Credential=" + KEY_ID + "/" + scope +
        ", SignedHeaders=" + signedHeaders + ", Signature=" + signature,
    },
  };
}

/* PUT one object. Resolves with the key on success, rejects with the body R2
   returned on failure — R2's XML errors name the actual problem
   (SignatureDoesNotMatch, NoSuchBucket, AccessDenied) and swallowing them
   turns a five-second fix into an afternoon. */
function put(key, body, contentType) {
  return new Promise(function (resolve, reject) {
    const s = sign("PUT", key, body, contentType || "application/octet-stream");
    const req = https.request({
      method: "PUT", host: s.host, path: s.pathname, headers: s.headers,
    }, function (res) {
      let out = "";
      res.on("data", function (d) { out += d; });
      res.on("end", function () {
        if (res.statusCode >= 200 && res.statusCode < 300) return resolve(key);
        reject(new Error("R2 PUT " + key + " -> HTTP " + res.statusCode + " " +
          out.replace(/\s+/g, " ").slice(0, 300)));
      });
    });
    req.on("error", reject);
    req.end(body);
  });
}

/* A one-object round trip, so a misconfiguration is caught BEFORE a bake
   spends money at Google and then fails to store what it bought. Called by
   bake-voice.js before the first synth. */
async function preflight() {
  const key = "_preflight/ok.txt";
  const body = Buffer.from("nexstudents media store reachable\n", "utf8");
  await put(key, body, "text/plain; charset=utf-8");
  return publicUrl(key);
}

/* The message shown when config is missing or half-present. Kept next to the
   variables it names so the two cannot drift. */
function help() {
  return [
    "",
    "  R2 is not configured. Set all five, then re-run:",
    "",
    "    R2_ACCOUNT_ID          Cloudflare account id",
    "    R2_ACCESS_KEY_ID       from an R2 API token",
    "    R2_SECRET_ACCESS_KEY   from the same token",
    "    R2_BUCKET              bucket name",
    "    MEDIA_BASE             public base URL, trailing slash",
    "",
    "  PowerShell:  $env:R2_BUCKET = \"nexstudents-media\"",
    "  Git Bash:    export R2_BUCKET=\"nexstudents-media\"",
    "",
    "  Nothing is written to disk. Do not paste these into a file or chat.",
    "",
  ].join("\n");
}

module.exports = { configured, partial, publicUrl, put, preflight, help, BASE };
