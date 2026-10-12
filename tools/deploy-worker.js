#!/usr/bin/env node
/*
 * deploy-worker.js — deploy tools/r2-worker.js as the nexstudents-media worker.
 *
 *   node tools/deploy-worker.js      (Paul runs it: Claude Code won't deploy to production itself)
 *
 * It copies the worker into a temp folder OUTSIDE the repo (wrangler leaves a
 * .wrangler folder behind) with the config the live worker already has, read from
 * the Cloudflare API 2026-10-12: compatibility 2025-09-01, R2 binding MEDIA, logs on.
 * 🚨 --keep-vars is not optional: without it every secret is wiped.
 * 🚨 observability must be declared or logs silently turn off.
 */
"use strict";
const fs = require("fs");
const os = require("os");
const path = require("path");
const { execSync } = require("child_process");

const dir = path.join(os.tmpdir(), "ns-worker-deploy");
fs.mkdirSync(dir, { recursive: true });
fs.copyFileSync(path.join(__dirname, "r2-worker.js"), path.join(dir, "worker.js"));
fs.writeFileSync(path.join(dir, "wrangler.json"), JSON.stringify({
  name: "nexstudents-media", main: "worker.js", compatibility_date: "2025-09-01",
  r2_buckets: [{ binding: "MEDIA", bucket_name: "nexstudents-media" }],
  observability: { enabled: true, logs: { enabled: true } },
}, null, 2));
execSync("wrangler deploy --keep-vars", { cwd: dir, stdio: "inherit" });
