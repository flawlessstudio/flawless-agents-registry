# Contributing to Flawless Agents Registry

## How to add a new tool

1. Identify the correct layer (L1–L12) for the tool
2. Determine initial status: `core` or `monitoring`
3. Add the tool to the appropriate `core.json` or `watchlist.json` file
4. Follow the standard candidate schema:

```json
{
  "id": "tool-slug",
  "name": "Tool Display Name",
  "status": "core | monitoring | deprecated",
  "category": "Category label",
  "source": "https://official-url.com",
  "pricing": "oss | free | freemium | paid | enterprise",
  "deployment": "cloud | self-hosted | hybrid",
  "api": true | false
}
```

## How to add a new vertical (L12)

1. Add the vertical name to `L12/core.json` → `verticals` array
2. Create `L12/{vertical}/core.json` with the vertical's initial tools
3. Add a stack recipe in `L12/{vertical}/stack_recipes.json`

## Stack Recipes

Stack recipes are curated combinations of 2–4 tools that solve a specific use case.
Each recipe must include:
- `id`: kebab-case identifier
- `name`: short descriptive name
- `stack`: array of tool IDs
- `use_case`: single-sentence description

## Review process

1. Open a PR with your changes
2. CI validates schema consistency
3. A maintainer reviews and merges

## Schema validation

All JSON files are validated by the CI workflow on every PR.
Run locally:
```bash
npx ajv validate -s schemas/candidate.schema.json -d registry/layers/**/*.json
```
