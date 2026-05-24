# flawless-agents-registry

> **Flawless Agents Registry** — Source of truth for all AI agent stack candidates across 12 layers.

[![Status](https://img.shields.io/badge/status-active-brightgreen)](https://github.com/flawlessstudio/flawless-agents-registry)
[![Version](https://img.shields.io/badge/version-1.0.0-blue)](https://github.com/flawlessstudio/flawless-agents-registry/releases)
[![Layers](https://img.shields.io/badge/layers-12-orange)](./registry/layers/)
[![Candidates](https://img.shields.io/badge/core~140%20%7C%20watchlist~60-purple)](./registry/)

---

## Overview

This registry defines the **canonical, audited, versioned** list of AI agent infrastructure candidates for the Flawless ecosystem. It is structured across 12 layers, each assigned a **tier strategy** based on market maturity.

| Tier | Meaning |
|------|---------|
| `APEX` | Stable market — closed core, production-ready, benchmark-verified |
| `HYBRID` | Active frontier — audited core + live watchlist, updated via PR |

---

## Layer Map

| Layer | Name | Tier | Core | Watchlist |
|-------|------|------|------|-----------|
| L1 | Telephony | APEX | ~15 | — |
| L2 | STT | APEX | ~10 | — |
| L3 | LLM | HYBRID | ~15 | ~12 |
| L4 | TTS | HYBRID | ~12 | ~8 |
| L5 | Orchestration | HYBRID | ~12 | ~10 |
| L6 | Integration | APEX | ~18 | — |
| L7 | Analytics/QA | APEX | ~12 | — |
| L8 | Memory & Data | HYBRID | ~12 | ~8 |
| L9 | Security | APEX | ~14 | — |
| L10 | Observability | HYBRID | ~10 | ~8 |
| L11 | Identity/Fraud | APEX | ~10 | — |
| L12 | Domain Vertical | HYBRID | ~10 | ~14 |
| **TOTAL** | | | **~140** | **~60** |

---

## Registry Structure

```
registry/
  registry.core.json        # All audited core candidates
  registry.watchlist.json   # All monitoring candidates
  layers/
    L1.telephony/
    L2.stt/
    ...L12.domain-vertical/
      core.json
      watchlist.json        # Only in HYBRID layers
      stack_recipes.json
```

---

## Update Policy

- **APEX layers**: Updated quarterly via PR + audit review.
- **HYBRID core**: Updated monthly or on major market shift.
- **HYBRID watchlist**: Updated freely via PR; no audit gate required.
- **L12**: Sub-registries per vertical. Each vertical is a separate directory.

---

## Quality Gates

Every core candidate must pass:
- [ ] Production usage verified
- [ ] Public benchmark or pricing available
- [ ] API/SDK documented
- [ ] Last reviewed within 90 days
- [ ] TIER and STATUS fields populated

---

*Part of the [Flawless ecosystem](https://github.com/flawlessstudio). Bilingual: [README.es.md](./README.es.md)*
