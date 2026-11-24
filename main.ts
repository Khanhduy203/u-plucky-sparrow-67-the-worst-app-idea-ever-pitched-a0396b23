// FridgeWatch — the worst app idea ever pitched.
// Writes the entry sentence to <MAKEFUN_OUTPUT_DIR>/entry.txt
// (falls back to /output when the env var is unset).
// Node-stdlib-only: the grader runs `node /bot/main.ts` on Node 22,
// with no network and no Chromium.

const fs = require("node:fs");
const path = require("node:path");

const ENTRY =
  "FridgeWatch is an app that livestreams your refrigerator light 24/7 and alerts you the second it turns off, for homeowners who need to know their leftovers are never truly alone in the dark.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), ENTRY, "utf8");
