# Security Policy

## Scope

This document covers the security policy for the **Flawless Agents Registry** repository.  
The registry is a data and tooling repository — it does not run production services. Security concerns are scoped to:

- **Registry data integrity** — malicious or tampered candidate entries
- **Supply chain** — compromised dependencies (`ajv`, `ajv-formats`)
- **CI/CD** — unauthorized workflow modifications or secret exposure
- **Schema validation bypass** — inputs that circumvent JSON Schema gates

---

## Supported Versions

| Version | Supported |
|---------|-----------|
| `1.x`   | ✅ Yes     |
| `< 1.0` | ❌ No      |

---

## Reporting a Vulnerability

**Do not open a public GitHub issue for security vulnerabilities.**

Report vulnerabilities by emailing:

> **security@flawlessstudio.com**

Include:

1. A clear description of the vulnerability
2. The affected file(s) or component(s)
3. Steps to reproduce or a proof-of-concept
4. Potential impact assessment

We will acknowledge receipt within **48 hours** and provide an initial assessment within **7 days**.

---

## Response Process

| Step | Timeline |
|------|----------|
| Acknowledgement | ≤ 48 hours |
| Initial triage | ≤ 7 days |
| Fix or mitigation | ≤ 30 days for critical, ≤ 90 days for moderate |
| Public disclosure | Coordinated after fix is merged |

---

## Security Best Practices for Contributors

- Never include API keys, tokens, or credentials in any registry file or PR
- Do not add candidates with `source` URLs pointing to unofficial or mirrored endpoints
- All `source` fields must resolve to official vendor domains
- Report any suspicious candidate entries via the process above

---

*Part of the [Flawless ecosystem](https://github.com/flawlessstudio).*
