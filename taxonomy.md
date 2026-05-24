# Flawless Agents Registry — Layer Taxonomy

> Canonical taxonomy for the 12-layer AI agent infrastructure model.  
> All names in this file are authoritative. `index.json`, `core.json`, and `README` files must match exactly.

---

## Layer Map

| Layer | Name | Tier | Role |
|-------|------|------|------|
| L1 | Telephony | APEX | Voice transport and SIP/WebRTC infrastructure |
| L2 | STT | APEX | Speech-to-text transcription (streaming and batch) |
| L3 | LLM | HYBRID | Foundation language models and inference platforms |
| L4 | TTS | HYBRID | Text-to-speech synthesis |
| L5 | Orchestration | HYBRID | Agent frameworks, voice pipelines, multi-agent systems |
| L6 | Integration | APEX | CRMs, automation platforms, databases, messaging |
| L7 | Analytics/QA | APEX | Call analytics, revenue intelligence, conversation QA |
| L8 | Memory & Data | HYBRID | Vector databases and agent memory layers |
| L9 | Security | APEX | LLM safety, secrets management, auth, policy engines |
| L10 | Observability | HYBRID | LLM tracing, evals, and monitoring |
| L11 | Identity/Fraud | APEX | KYC, voice biometrics, fraud detection, enterprise IAM |
| L12 | Domain Vertical | HYBRID | Industry-specific AI tools and vertical sub-registries |

---

## Tier Definitions

| Tier | Meaning |
|------|---------|
| `APEX` | Market-stable layer. Core is closed and quarterly-reviewed. No watchlist. |
| `HYBRID` | Active frontier. Core is audited monthly. Watchlist updated freely via PR. |

---

## Naming Rules

- Layer names are **fixed** and must not be paraphrased in any registry file, README, or documentation.
- The canonical source for layer names is this file and the `core.json` files within each `registry/layers/` directory.
- `index.json`, `taxonomy.md`, `README.md`, and `README.es.md` must reflect the exact names from the table above.
- Categories within layers are free-form but must be descriptive and consistent across updates.

---

## Vertical Sub-registries (L12)

| Vertical | Directory | Status |
|----------|-----------|--------|
| healthcare | `registry/layers/L12.domain-vertical/healthcare/` | seeded |
| legal | `registry/layers/L12.domain-vertical/legal/` | seeded |
| fintech | `registry/layers/L12.domain-vertical/fintech/` | seeded |
| real-estate | `registry/layers/L12.domain-vertical/real-estate/` | seeded |
| hospitality | `registry/layers/L12.domain-vertical/hospitality/` | seeded |
| ecommerce | `registry/layers/L12.domain-vertical/ecommerce/` | seeded |
| education | `registry/layers/L12.domain-vertical/education/` | seeded |
| insurance | `registry/layers/L12.domain-vertical/insurance/` | seeded |
| logistics | `registry/layers/L12.domain-vertical/logistics/` | seeded |
| hr-recruiting | `registry/layers/L12.domain-vertical/hr-recruiting/` | seeded |

*Sub-registry directories are created as candidates accumulate. See `CONTRIBUTING.md` for the seeding procedure.*

---

*Part of the [Flawless ecosystem](https://github.com/flawlessstudio). Maintained in sync with `README.md`.*
