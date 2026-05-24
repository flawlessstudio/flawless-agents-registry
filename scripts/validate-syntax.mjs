#!/usr/bin/env node
/**
 * validate-syntax.mjs
 * Validates JSON syntax for all *.json files in registry/ and schemas/.
 * Exits 1 if any file fails. Mirrors the CI shell step as a portable Node script.
 */

import { readFileSync, readdirSync, statSync } from 'fs';
import { join, relative } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const SCAN_DIRS = ['registry', 'schemas'];

/** Recursively collect all *.json file paths under a directory. */
function collectJson(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      results.push(...collectJson(full));
    } else if (entry.endsWith('.json')) {
      results.push(full);
    }
  }
  return results;
}

const files = SCAN_DIRS.flatMap(d => collectJson(join(ROOT, d)));

let failed = 0;
const results = [];

for (const file of files) {
  const rel = relative(ROOT, file);
  try {
    JSON.parse(readFileSync(file, 'utf8'));
    results.push({ status: 'OK', file: rel });
  } catch (err) {
    results.push({ status: 'FAIL', file: rel, error: err.message });
    failed++;
  }
}

console.log('=== JSON Syntax Validation ===\n');
for (const r of results) {
  const icon = r.status === 'OK' ? '\u2713' : '\u2717';
  const line = `  ${icon}  ${r.file}`;
  console.log(r.status === 'FAIL' ? `${line}\n     → ${r.error}` : line);
}

console.log(`\n--- ${results.length} files checked · ${failed} failed ---`);

if (failed > 0) {
  console.error(`\nvalidate-syntax: ${failed} file(s) contain invalid JSON. Aborting.`);
  process.exit(1);
}

console.log('\nvalidate-syntax: all files valid.');
