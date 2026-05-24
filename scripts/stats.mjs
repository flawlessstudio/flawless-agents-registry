#!/usr/bin/env node
// stats.mjs — prints candidate counts per layer
import { readFileSync, readdirSync, existsSync } from 'fs';
import { join, resolve } from 'path';

const root = resolve('.');
const layersDir = join(root, 'registry/layers');
const layers = readdirSync(layersDir, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name)
  .sort();

let coreTotal = 0, watchTotal = 0;
console.log('\n=== Flawless Agents Registry Stats ===\n');
console.log(`${'Layer'.padEnd(30)} ${'Core'.padStart(6)} ${'Watch'.padStart(7)}`);
console.log('─'.repeat(46));
for (const layer of layers) {
  const corePath = join(layersDir, layer, 'core.json');
  const watchPath = join(layersDir, layer, 'watchlist.json');
  const core = existsSync(corePath)
    ? JSON.parse(readFileSync(corePath)).candidates?.length ?? 0 : 0;
  const watch = existsSync(watchPath)
    ? JSON.parse(readFileSync(watchPath)).candidates?.length ?? 0 : 0;
  coreTotal += core; watchTotal += watch;
  console.log(`${layer.padEnd(30)} ${String(core).padStart(6)} ${watch ? String(watch).padStart(7) : '      —'}`);
}
console.log('─'.repeat(46));
console.log(`${'TOTAL'.padEnd(30)} ${String(coreTotal).padStart(6)} ${String(watchTotal).padStart(7)}`);
console.log(`${'GRAND TOTAL'.padEnd(30)} ${String(coreTotal + watchTotal).padStart(14)}\n`);
