# flawless-agents-registry

> **Flawless Agents Registry** — Source of truth for all AI agent stack candidates across 12 layers.

[![Status](https://img.shields.io/badge/status-active-brightgreen)](https://github.com/flawlessstudio/flawless-agents-registry)
[![Version](https://img.shields.io/badge/version-1.0.0-blue)](https://github.com/flawlessstudio/flawless-agents-registry/releases/tag/v1.0.0)
[![Layers](https://img.shields.io/badge/layers-12-orange)](./registry/layers/)
[![Core](https://img.shields.io/badge/core-140-green)](./registry/registry.core.json)
[![Watchlist](https://img.shields.io/badge/watchlist-60-purple)](./registry/registry.watchlist.json)

---

## Overview

This registry defines the **canonical, audited, versioned** list of AI agent infrastructure candidates for the Flawless ecosystem. It is structured across 12 layers, each assigned a **tier strategy** based on market maturity.

| Tier | Meaning |
|------|---------|
| `APEX` | Stable market — closed core, production-ready, quarterly-reviewed |
| `HYBRID` | Active frontier — audited core + live watchlist, updated via PR |

---

## Layer Map

| Layer | Name | Tier | Core | Watchlist |
|-------|------|------|------|-----------|
| L1 | Telephony | APEX | 15 | — |
| L2 | STT | APEX | 10 | — |
| L3 | LLM | HYBRID | 15 | 12 |
| L4 | TTS | HYBRID | 12 | 8 |
| L5 | Orchestration | HYBRID | 12 | 10 |
| L6 | Integration | APEX | 18 | — |
| L7 | Analytics/QA | APEX | 12 | — |
| L8 | Memory & Data | HYBRID | 12 | 8 |
| L9 | Security | APEX | 14 | — |
| L10 | Observability | HYBRID | 10 | 8 |
| L11 | Identity/Fraud | APEX | 10 | — |
| L12 | Domain Vertical | HYBRID | 10 | 14 |
| **TOTAL** | | | **140** | **60** |

*Counts are verified by CI on every merge. Do not edit manually.*

---

## Registry Structure

```
registry/
  registry.core.json          # Layer index → refs to each layer's core.json
  registry.watchlist.json     # Layer index → refs to each HYBRID layer's watchlist.json
  stack_recipes.global.json   # Cross-layer end-to-end stack recipes
  layers/
    L1.telephony/
      core.json
      stack_recipes.json
    L2.stt/ ... L12.domain-vertical/
      core.json
      watchlist.json          # HYBRID layers only
      stack_recipes.json
schemas/
  candidate.schema.json       # Schema for each candidate entry
  layer.schema.json           # Schema for layer-level files
  registry.schema.json        # Schema for root index files
  stack_recipes.schema.json   # Schema for stack recipe files
```

---

## Update Policy

| Tier | Core | Watchlist |
|------|------|-----------|
| APEX | Quarterly via PR + audit review | — |
| HYBRID | Monthly or on major market shift | Freely via PR, no audit gate |

---

## Quality Gates

Every core candidate must pass:

- [ ] Production usage verified (public case study or known production deployment)
- [ ] Public benchmark or pricing available
- [ ] API or SDK documented
- [ ] Last reviewed within 90 days
- [ ] `tier` and `status` fields populated
- [ ] Schema validation passes CI

---

## Local Validation

```bash
npm install
npm run validate       # full: syntax + schema + recipes
npm run validate:schema  # only schema validation
npm run stats          # count all candidates by layer
```

---

## Stack Recipes

Cross-layer end-to-end recipes are in [`registry/stack_recipes.global.json`](./registry/stack_recipes.global.json).  
Per-layer recipes are in each `registry/layers/{layer}/stack_recipes.json`.

---

*Part of the [Flawless ecosystem](https://github.com/flawlessstudio). Bilingual: [README.es.md](./README.es.md)*
