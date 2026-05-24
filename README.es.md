# flawless-agents-registry

> **Flawless Agents Registry** — Fuente de verdad para todos los candidatos del stack de agentes de IA en 12 capas.

---

## Resumen

Este registro define la lista **canónica, auditada y versionada** de candidatos de infraestructura para agentes de IA en el ecosistema Flawless. Está estructurado en 12 capas, cada una con una **estrategia de tier** según la madurez del mercado.

| Tier | Significado |
|------|-------------|
| `APEX` | Mercado estable — core cerrado, production-ready, benchmark verificable |
| `HYBRID` | Frontera activa — core auditado + watchlist viva, actualizable vía PR |

---

## Mapa de Capas

| Capa | Nombre | Tier | Core | Watchlist |
|------|--------|------|------|-----------|
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

## Política de Actualización

- **Capas APEX**: Actualización trimestral vía PR + revisión de auditoría.
- **Core HYBRID**: Actualización mensual o ante cambio significativo de mercado.
- **Watchlist HYBRID**: Actualización libre vía PR; sin gate de auditoría requerido.
- **L12**: Sub-registros por vertical. Cada vertical es un directorio independiente.

---

*Parte del [ecosistema Flawless](https://github.com/flawlessstudio). Bilingüe: [README.md](./README.md)*
