# Changelog

All notable changes to this registry are documented here.  
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).  
Versioning follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

---

## [1.0.1] — 2026-05-24

### Added
- `scripts/validate-syntax.mjs` — portable Node.js JSON syntax validator (resolves broken `validate:syntax` script reference)
- `scripts/promote.mjs` — CLI helper to promote a candidate from watchlist to core
- `schemas/watchlist.schema.json` — dedicated JSON Schema for all `watchlist.json` files
- `LICENSE` — MIT license file (aligns with `package.json` declaration)
- `SECURITY.md` — vulnerability reporting policy and response SLA
- `ROADMAP.md` — versioned evolution plan: v1.x patch cadence, v1.1 tooling, v1.2 ecosystem, v2.0 gates, L12 expansion plan

### Changed
- `README.md` — added CI badge, license badge, taxonomy link, ROADMAP/SECURITY links, full scripts reference, promoting section
- `CHANGELOG.md` — added [Unreleased] section and post-v1.0.0 entries

---

## [1.0.0] — 2026-05-24

### Added
- 12-layer registry structure (L1 Telephony → L12 Domain Vertical)
- 140 audited core candidates across all layers
- 60 monitoring candidates across 6 HYBRID layers (L3, L4, L5, L8, L10, L12)
- Tier model: `APEX` (6 layers, closed core) and `HYBRID` (6 layers, core + watchlist)
- JSON Schema validation: `candidate.schema.json`, `layer.schema.json`, `registry.schema.json`, `stack_recipes.schema.json`
- CI workflow: full AJV schema validation on every PR and push to `main`
- Per-layer `stack_recipes.json` for all 12 layers
- Cross-layer `stack_recipes.global.json` with 8 end-to-end agent stack recipes
- Root index files: `registry.core.json` and `registry.watchlist.json`
- `taxonomy.md` — canonical layer naming authority
- `CONTRIBUTING.md` — contribution guide with quality gates
- `CODEOWNERS` — ownership and review routing
- PR template and candidate promotion issue template
- `AGENTS.md` — connection to the Flawless agents ecosystem
- Bilingual documentation: `README.md` (EN) + `README.es.md` (ES)

### Layers seeded

| Layer | Core | Watchlist |
|-------|------|-----------|
| L1 Telephony | 15 | — |
| L2 STT | 10 | — |
| L3 LLM | 15 | 12 |
| L4 TTS | 12 | 8 |
| L5 Orchestration | 12 | 10 |
| L6 Integration | 18 | — |
| L7 Analytics/QA | 12 | — |
| L8 Memory & Data | 12 | 8 |
| L9 Security | 14 | — |
| L10 Observability | 10 | 8 |
| L11 Identity/Fraud | 10 | — |
| L12 Domain Vertical | 10 | 14 |

---

## Versioning Policy

| Change type | Version bump |
|-------------|-------------|
| New candidate added to core | PATCH |
| Candidate promoted from watchlist to core | PATCH |
| Candidate deprecated | PATCH |
| New layer added | MINOR |
| Schema breaking change | MAJOR |
| Tier model change | MAJOR |
