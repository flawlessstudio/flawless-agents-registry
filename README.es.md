# flawless-agents-registry

> **Flawless Agents Registry** — Fuente de verdad para todos los candidatos del stack de agentes de IA en 12 capas.

[![Status](https://img.shields.io/badge/status-activo-brightgreen)](https://github.com/flawlessstudio/flawless-agents-registry)
[![Version](https://img.shields.io/badge/versión-1.0.0-blue)](https://github.com/flawlessstudio/flawless-agents-registry/releases/tag/v1.0.0)
[![Layers](https://img.shields.io/badge/capas-12-orange)](./registry/layers/)
[![Core](https://img.shields.io/badge/core-140-green)](./registry/registry.core.json)
[![Watchlist](https://img.shields.io/badge/watchlist-60-purple)](./registry/registry.watchlist.json)

---

## Resumen

Este registro define la lista **canónica, auditada y versionada** de candidatos de infraestructura para agentes de IA en el ecosistema Flawless. Está estructurado en 12 capas, cada una con una **estrategia de tier** según la madurez del mercado.

| Tier | Significado |
|------|-------------|
| `APEX` | Mercado estable — core cerrado, production-ready, revisión trimestral |
| `HYBRID` | Frontera activa — core auditado + watchlist viva, actualizable vía PR |

---

## Mapa de Capas

| Capa | Nombre | Tier | Core | Watchlist |
|------|--------|------|------|-----------|
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

*Los conteos son verificados por CI en cada merge. No editar manualmente.*

---

## Estructura del Registry

```
registry/
  registry.core.json          # Índice de layers → refs a cada core.json
  registry.watchlist.json     # Índice de layers HYBRID → refs a cada watchlist.json
  stack_recipes.global.json   # Recetas cross-layer end-to-end
  layers/
    L1.telephony/
      core.json
      stack_recipes.json
    L2.stt/ ... L12.domain-vertical/
      core.json
      watchlist.json          # Solo en layers HYBRID
      stack_recipes.json
schemas/
  candidate.schema.json
  layer.schema.json
  registry.schema.json
  stack_recipes.schema.json
```

---

## Política de Actualización

| Tier | Core | Watchlist |
|------|------|-----------|
| APEX | Trimestral vía PR + revisión de auditoría | — |
| HYBRID | Mensual o ante cambio de mercado | Libre vía PR, sin gate de auditoría |

---

## Quality Gates

Todo candidato core debe cumplir:

- [ ] Uso en producción verificado (caso público o deployment conocido)
- [ ] Benchmark público o pricing documentado disponible
- [ ] API o SDK documentados
- [ ] Revisado en los últimos 90 días
- [ ] Campos `tier` y `status` poblados
- [ ] Validación de schema pasa en CI

---

## Validación Local

```bash
npm install
npm run validate       # completo: syntax + schema + recipes
npm run validate:schema  # solo validación de schema
npm run stats          # contar candidatos por capa
```

---

## Stack Recipes

Las recetas cross-layer end-to-end están en [`registry/stack_recipes.global.json`](./registry/stack_recipes.global.json).  
Las recetas por capa están en cada `registry/layers/{capa}/stack_recipes.json`.

---

*Parte del [ecosistema Flawless](https://github.com/flawlessstudio). Bilingüe: [README.md](./README.md)*
