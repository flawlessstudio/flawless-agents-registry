# Contributing to Flawless Agents Registry

## Prerequisites

```bash
node --version  # >= 20
npm install     # installs ajv, ajv-cli, ajv-formats
```

---

## How to add a candidate

1. Identify the correct layer (`L1`–`L12`) using [`taxonomy.md`](./taxonomy.md).
2. Determine initial status: `core` (production-verified) or `monitoring` (emerging).
3. Add the candidate to the appropriate file:
   - **Core**: `registry/layers/{layer}/core.json` → `candidates` array
   - **Watchlist**: `registry/layers/{layer}/watchlist.json` → `candidates` array (HYBRID layers only)
4. Use the canonical candidate schema:

```json
{
  "id": "tool-slug",
  "name": "Tool Display Name",
  "status": "core | monitoring | deprecated",
  "category": "Short category label",
  "source": "https://official-url.com",
  "pricing": "oss | free | freemium | paid | enterprise",
  "deployment": "cloud | self-hosted | hybrid",
  "api": true,
  "benchmark": "Optional: key performance claim",
  "tags": ["optional", "filter-tags"],
  "notes": "Optional: use case fit or caveats"
}
```

5. Run validation locally before opening a PR:

```bash
npm run validate
```

---

## How to add a new vertical (L12)

1. Add the vertical name to `registry/layers/L12.domain-vertical/core.json` → `verticals` array.
2. Create the vertical sub-registry directory:
   ```
   registry/layers/L12.domain-vertical/{vertical}/
     core.json
     stack_recipes.json
   ```
3. Seed at least 3 candidates in the new `core.json`.
4. Add at least 1 stack recipe in `stack_recipes.json`.
5. Update `taxonomy.md` → Vertical Sub-registries table.
6. Run `npm run validate`.

---

## How to add a stack recipe

Recipes live in:
- `registry/layers/{layer}/stack_recipes.json` — single-layer recipes
- `registry/stack_recipes.global.json` — cross-layer end-to-end recipes

A valid recipe:
```json
{
  "id": "l3-oss-rag-stack",
  "name": "OSS RAG Stack",
  "stack": ["meta-llama-4", "cohere-command-r"],
  "use_case": "Self-hosted retrieval-augmented generation with open-source LLMs."
}
```

Cross-layer recipes must also include a `layers` array.

---

## Review process

1. Open a PR against `main`.
2. CI runs full schema validation (`npm run validate`) — must pass.
3. A maintainer reviews against the Quality Gates checklist.
4. Merge squash only.

---

## Quality Gates checklist

Before requesting review, confirm:

- [ ] Production usage verified
- [ ] Public benchmark or pricing available
- [ ] API or SDK documented
- [ ] `last_reviewed` date set in the layer file
- [ ] `tier` and `status` fields populated
- [ ] `npm run validate` passes locally
- [ ] No approximate counts introduced in README files
