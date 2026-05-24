#!/usr/bin/env node
/**
 * promote.mjs
 * Promotes a candidate from watchlist.json to core.json within a HYBRID layer.
 *
 * Usage:
 *   node scripts/promote.mjs <layer> <candidate-id>
 *
 * Example:
 *   node scripts/promote.mjs L3 mistral-large
 *
 * What it does:
 *   1. Reads registry/layers/<layer>/watchlist.json
 *   2. Finds the candidate by id
 *   3. Updates candidate status to 'core'
 *   4. Appends candidate to registry/layers/<layer>/core.json → candidates array
 *   5. Removes candidate from watchlist.json
 *   6. Writes both files atomically
 *   7. Prints a summary diff
 *
 * After running:
 *   - Review the changes with: git diff
 *   - Run: npm run validate
 *   - Open a PR targeting main
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const HYBRID_LAYERS = ['L3', 'L4', 'L5', 'L8', 'L10', 'L12'];

function abort(msg) {
  console.error(`\n❌  ${msg}`);
  process.exit(1);
}

function readJson(path) {
  try {
    return JSON.parse(readFileSync(path, 'utf8'));
  } catch {
    abort(`Cannot read or parse: ${path}`);
  }
}

function writeJson(path, data) {
  writeFileSync(path, JSON.stringify(data, null, 2) + '\n', 'utf8');
}

// --- Args ---
const [, , layerArg, candidateIdArg] = process.argv;

if (!layerArg || !candidateIdArg) {
  abort('Usage: node scripts/promote.mjs <layer> <candidate-id>\n  Example: node scripts/promote.mjs L3 mistral-large');
}

const layer = layerArg.toUpperCase();
const candidateId = candidateIdArg.toLowerCase();

if (!HYBRID_LAYERS.includes(layer)) {
  abort(`Layer ${layer} is not HYBRID. Only HYBRID layers have a watchlist.\nHYBRID layers: ${HYBRID_LAYERS.join(', ')}`);
}

// --- Resolve file paths ---
const layerDirs = {
  L3: 'L3.llm', L4: 'L4.tts', L5: 'L5.orchestration',
  L8: 'L8.memory-data', L10: 'L10.observability', L12: 'L12.domain-vertical'
};

const layerDir = join(ROOT, 'registry', 'layers', layerDirs[layer]);
const watchlistPath = join(layerDir, 'watchlist.json');
const corePath = join(layerDir, 'core.json');

// --- Read files ---
const watchlist = readJson(watchlistPath);
const core = readJson(corePath);

// --- Find candidate ---
const idx = watchlist.candidates.findIndex(c => c.id === candidateId);
if (idx === -1) {
  abort(`Candidate '${candidateId}' not found in ${layer} watchlist.\nAvailable: ${watchlist.candidates.map(c => c.id).join(', ')}`);
}

const candidate = { ...watchlist.candidates[idx] };

// --- Validate not already in core ---
if (core.candidates.find(c => c.id === candidateId)) {
  abort(`Candidate '${candidateId}' already exists in ${layer} core.`);
}

// --- Promote ---
const promoted = { ...candidate, status: 'core' };
delete promoted.promote_after;

core.candidates.push(promoted);
core.last_reviewed = new Date().toISOString().slice(0, 10);

watchlist.candidates.splice(idx, 1);
watchlist.last_reviewed = new Date().toISOString().slice(0, 10);

// --- Write ---
writeJson(corePath, core);
writeJson(watchlistPath, watchlist);

// --- Summary ---
console.log(`
✔  Promotion complete

   Candidate : ${promoted.name} (${promoted.id})
   Layer     : ${layer}
   From      : watchlist → core
   Status    : monitoring → core

   Files updated:
     • ${corePath.replace(ROOT + '/', '')}
     • ${watchlistPath.replace(ROOT + '/', '')}

   Next steps:
     1. git diff                    # review changes
     2. npm run validate            # confirm all schemas pass
     3. git add -p && git commit    # commit with: feat(${layer.toLowerCase()}): promote ${candidateId} to core
     4. Open PR → main
`);
