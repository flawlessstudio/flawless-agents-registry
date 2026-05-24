#!/usr/bin/env node
// validate-schema.mjs — validates all layer files against layer.schema.json
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import { readFileSync, readdirSync, existsSync } from 'fs';
import { join, resolve } from 'path';

const ajv = new Ajv({ strict: false, allErrors: true });
addFormats(ajv);

const root = resolve('.');
const candidateSchema = JSON.parse(readFileSync(join(root, 'schemas/candidate.schema.json'), 'utf8'));
const layerSchema = JSON.parse(readFileSync(join(root, 'schemas/layer.schema.json'), 'utf8'));

ajv.addSchema(candidateSchema);
const validateLayer = ajv.compile(layerSchema);

const layersDir = join(root, 'registry/layers');
const layers = readdirSync(layersDir, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name);

let failed = 0;
for (const layer of layers) {
  for (const file of ['core.json', 'watchlist.json']) {
    const path = join(layersDir, layer, file);
    if (!existsSync(path)) continue;
    const data = JSON.parse(readFileSync(path, 'utf8'));
    const valid = validateLayer(data);
    if (valid) {
      console.log(`  ✅ ${layer}/${file}`);
    } else {
      console.error(`  ❌ ${layer}/${file}`);
      for (const err of validateLayer.errors) {
        console.error(`     ${err.instancePath} ${err.message}`);
      }
      failed++;
    }
  }
}

if (failed > 0) {
  console.error(`\n${failed} file(s) failed schema validation.`);
  process.exit(1);
} else {
  console.log('\nAll layer files pass schema validation.');
}
