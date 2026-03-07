# Security Policy

## Supported Versions

Barbero `1.0.0` is the current stable release. Security fixes are delivered as patch releases on the current stable line.

| Version | Supported |
|---------|-----------|
| `1.x.x` (latest stable) | ✅ |
| `0.1.x-alpha` and older | ❌ |

Patch releases (`1.0.x`) carry security fixes. The current minor line is always supported.

## Scope

Barbero is a zero-dependency, pure-function utility library with no network access, no I/O, no authentication, and no external integrations. The attack surface is intentionally minimal.

Security issues most likely to be relevant:

- **Prototype pollution** — via `isEqual` or `isEmptyObject` accepting user-supplied objects
- **ReDoS** — if any future `isRegExp`-based function accepts user-supplied patterns
- **Unexpected type coercion** — behaviour that could mislead callers into making incorrect security decisions based on a function's return value

If you are unsure whether something qualifies, report it anyway.

## Reporting a Vulnerability

**Do not open a public GitHub issue for security vulnerabilities.**

Please report privately using one of the following methods:

1. **GitHub Private Advisory** (preferred): [Open a draft security advisory](https://github.com/BhuannaichFhirinn/barbero/security/advisories/new)
2. **Direct contact**: Message the maintainer via GitHub ([@BhuannaichFhirinn](https://github.com/BhuannaichFhirinn))

### What to include

- A clear description of the vulnerability
- Steps to reproduce or a minimal code example
- The potential impact you see
- The version(s) affected

### What to expect

- Acknowledgement within **5 business days**
- A status update within **14 days** indicating whether the report has been accepted
- Credit in the release notes if a fix is shipped (unless you prefer to remain anonymous)

Barbero has no bug bounty programme at this time.
