# Flawless Agents Registry — Taxonomy

## Overview

This registry maps the complete AI agents ecosystem across **12 architectural layers**. Each layer is independently maintained and tiered.

## Layer Map

| ID | Name | Tier | Role |
|----|------|------|------|
| L1 | Foundation Models | APEX | Core LLM intelligence |
| L2 | Voice & STT | APEX | Audio input processing |
| L3 | TTS & Voice Synthesis | HYBRID | Audio output generation |
| L4 | Knowledge & RAG | HYBRID | Context retrieval and grounding |
| L5 | Orchestration | HYBRID | Agent flow and multi-agent coordination |
| L6 | Integration | APEX | CRM, automation, external systems |
| L7 | Analytics/QA | APEX | Post-call analysis, revenue intelligence |
| L8 | Memory & Data | HYBRID | Vector DBs, agent memory persistence |
| L9 | Security | APEX | LLM safety, secrets, network security |
| L10 | Observability | HYBRID | LLM tracing, evals, monitoring |
| L11 | Identity/Fraud | APEX | Caller auth, KYC, fraud detection |
| L12 | Domain Vertical | HYBRID | Industry-specific AI platforms |

## Tier Definitions

- **APEX** — Best-in-class. Recommended for production. Tools here have been validated at scale.
- **HYBRID** — Context-dependent. Includes both managed and OSS options. Selection depends on budget, control requirements, and deployment model.

## Candidate Statuses

- `core` — Production-validated. Actively maintained in the registry.
- `monitoring` — Tracking. Not yet validated for production.
- `deprecated` — Archived. No longer recommended.

## File Structure per Layer

```
LX.layer-name/
  core.json          # Production-validated candidates
  watchlist.json     # Monitoring candidates (not all layers have this)
  stack_recipes.json # Curated multi-tool stack combinations
```

## Update Cadence

- APEX layers: quarterly review
- HYBRID layers: monthly review
- Watchlist: continuous, community-driven
