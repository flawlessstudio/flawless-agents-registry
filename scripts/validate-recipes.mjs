#!/usr/bin/env node
// validate-recipes.mjs — validates all stack_recipes.json files
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import { readFileSync, readdirSync, existsSync } from 'fs';
import { join, resolve } from 'path';

const ajv = new Ajv({ strict: false, allErrors: true });
addFormats(ajv);

const root = resolve('.');
const recipesSchema = JSON.parse(readFileSync(join(root, 'schemas/stack_recipes.schema.json'), 'utf8'));
const validateRecipes = ajv.compile(recipesSchema);

const files = [];
const layersDir = join(root, 'registry/layers');
const layers = readdirSync(layersDir, { withFileTypes: true })
  .filter(d => d.isDirectory()).map(d => d.name);
for (const layer of layers) {
  const p = join(layersDir, layer, 'stack_recipes.json');
  if (existsSync(p)) files.push(p);
}
const globalRecipes = join(root, 'registry/stack_recipes.global.json');
if (existsSync(globalRecipes)) files.push(globalRecipes);

let failed = 0;
for (const file of files) {
  const data = JSON.parse(readFileSync(file, 'utf8'));
  const valid = validateRecipes(data);
  const label = file.replace(root + '/', '');
  if (valid) {
    console.log(`  ✅ ${label}`);
  } else {
    console.error(`  ❌ ${label}`);
    for (const err of validateRecipes.errors) {
      console.error(`     ${err.instancePath} ${err.message}`);
    }
    failed++;
  }
}
if (failed > 0) {
  console.error(`\n${failed} recipe file(s) failed validation.`);
  process.exit(1);
} else {
  console.log('\nAll stack recipe files pass validation.');
}
