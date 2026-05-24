# Roadmap

> This roadmap tracks planned evolution of the Flawless Agents Registry.  
> Versioning follows [Semantic Versioning](https://semver.org). See [CHANGELOG.md](./CHANGELOG.md) for the versioning policy.

---

## Current: v1.0.0 — Foundation

- [x] 12-layer registry structure (L1–L12)
- [x] 140 audited core candidates
- [x] 60 monitoring candidates across 6 HYBRID layers
- [x] Full JSON Schema validation (candidate, layer, registry, recipes)
- [x] CI workflow on every PR and push to `main`
- [x] 8 cross-layer stack recipes
- [x] Bilingual documentation (EN / ES)
- [x] `CONTRIBUTING.md`, `CODEOWNERS`, PR template, issue templates

---

## v1.x — Patch Cadence (ongoing)

Patches are released when:

- A new candidate is added to any `core.json`
- A candidate is promoted from `watchlist.json` to `core.json`
- A candidate is deprecated
- A documentation correction is applied

**Target frequency**: Monthly for HYBRID layers, quarterly for APEX layers.

---

## v1.1 — Tooling & Coverage Expansion

| Item | Status | Priority |
|------|--------|----------|
| `scripts/promote.mjs` — watchlist-to-core promotion helper | ✅ Done | P0 |
| `schemas/watchlist.schema.json` — dedicated watchlist schema | ✅ Done | P0 |
| `scripts/validate-syntax.mjs` — portable JSON syntax validator | ✅ Done | P0 |
| CI badge in `README.md` | 🔴 Planned | P1 |
| `scripts/stats.mjs` — per-layer count table in CI output | 🟡 In progress | P1 |
| L12 sub-registry expansion: `government`, `proptech`, `energy` | 🔴 Planned | P2 |
| `scripts/deprecate.mjs` — mark candidates as deprecated | 🔴 Planned | P2 |
| Per-candidate `last_reviewed` enforcement in CI | 🔴 Planned | P2 |
| Watchlist age alert: flag candidates not promoted after 60 days | 🔴 Planned | P3 |

---

## v1.2 — Ecosystem Integration

| Item | Description |
|------|-------------|
| **flawless-ecosystem link** | Register this repo in the Flawless monorepo index |
| **npm package** | Publish registry data as `@flawlessstudio/agents-registry` for programmatic consumption |
| **GitHub Pages** | Auto-generated registry browser from `core.json` files |
| **Webhook / dispatch** | Trigger downstream repos when a new core candidate is merged |

---

## v2.0 — Breaking Change Gates

A MAJOR version bump will be triggered only by:

| Change | Notes |
|--------|-------|
| JSON Schema breaking change | Field rename, type change, or removal |
| Tier model restructure | Adding/removing tiers or changing tier semantics |
| Layer model restructure | Adding, removing, or renaming layers |
| Registry file format change | Root index structure change |

**No v2.0 work is planned at this time.** The current model is considered stable.

---

## L12 Domain Vertical Expansion Plan

| Vertical | Status | Next action |
|----------|--------|-------------|
| healthcare | 🟡 Seeded | Expand to 10 core candidates |
| legal | 🟡 Seeded | Expand to 10 core candidates |
| fintech | 🟡 Seeded | Expand to 10 core candidates |
| real-estate | 🟡 Seeded | Expand to 8 core candidates |
| hospitality | 🟡 Seeded | Expand to 8 core candidates |
| ecommerce | 🟡 Seeded | Expand to 8 core candidates |
| education | 🟡 Seeded | Expand to 8 core candidates |
| insurance | 🟡 Seeded | Expand to 8 core candidates |
| logistics | 🟡 Seeded | Expand to 8 core candidates |
| hr-recruiting | 🟡 Seeded | Expand to 8 core candidates |
| government | 🔴 Planned | Seed 3+ candidates |
| proptech | 🔴 Planned | Seed 3+ candidates |
| energy | 🔴 Planned | Seed 3+ candidates |

---

*Part of the [Flawless ecosystem](https://github.com/flawlessstudio).*
