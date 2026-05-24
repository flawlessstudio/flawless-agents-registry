# AGENTS.md — Registry ↔ Agents Ecosystem Bridge

> This file documents how **flawless-agents-registry** connects to the active agent implementations in the Flawless ecosystem.

---

## Architecture

```
flawless-agents-registry        (this repo — public)
  └── Source of truth for all infrastructure candidates
  └── Each candidate is evaluated, versioned, and schema-validated

flawless-agents                 (private repo)
  └── Active agent implementations using candidates from this registry
  └── Each agent declares its registry dependencies via agentfile.json
```

---

## How agents consume this registry

Each agent in `flawless-agents` declares its stack in an `agentfile.json`:

```json
{
  "agent": "NCIntake",
  "version": "2.1.0",
  "registry_version": "1.0.0",
  "stack": {
    "L1": "twilio-voice",
    "L2": "deepgram-nova",
    "L3": "anthropic-claude-4",
    "L4": "elevenlabs",
    "L5": "vapi",
    "L9": "nemo-guardrails",
    "L11": "pindrop"
  }
}
```

The `registry_version` field pins the registry version this agent was validated against.

---

## Active Agents (reference, not exhaustive)

| Agent | Domain | Primary Stack Layers |
|-------|--------|---------------------|
| NCIntake | Healthcare intake | L1, L2, L3, L4, L5, L9, L11 |
| MRReporter | Medical records | L2, L3, L5, L8, L10 |
| SchemaGuard | QA / compliance | L5, L7, L9, L10 |

---

## Update Contract

When upgrading a candidate in this registry (e.g. `deepgram-nova` → `deepgram-nova-4`):

1. Bump the registry version in `registry.core.json` and `CHANGELOG.md`.
2. Create a git tag for the new version.
3. Open an issue in `flawless-agents` to update `agentfile.json` references.

---

*Maintained by [Flawless Studio](https://github.com/flawlessstudio).*
