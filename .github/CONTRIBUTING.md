# Contributing to Barbero

Thank you for considering a contribution to Barbero. This guide covers everything you need to get started.

For full implementation detail — module placement rules, JSDoc requirements, and the release process — see [docs/contributing.md](../docs/contributing.md).

---

## The One Rule

> **Every function in Barbero must return a `boolean`.**

Before proposing or implementing anything, ask: *"Does this return `true` or `false`?"* If not, it does not belong in this library. See [docs/overview.md](../docs/overview.md) for the reasoning behind this constraint.

---

## Ways to Contribute

- **Bug reports** — open an issue using the Bug Report template
- **Feature requests** — open an issue using the Feature Request template
- **Code** — bug fixes or new functions that satisfy the boolean return contract
- **Documentation** — corrections and improvements to docs or JSDoc

---

## Getting Started

```bash
git clone https://github.com/BhuannaichFhirinn/barbero.git
cd barbero
npm install
```

```bash
npm test            # run all tests
npm run test:watch  # watch mode
npm run build       # build dist/
```

---

## Submitting a Pull Request

1. Fork the repository and create your branch from `main`
2. Make your changes following the conventions in [docs/contributing.md](../docs/contributing.md)
3. Ensure all tests pass: `npm test`
4. Open a pull request — fill in the PR template completely

Every PR is reviewed against the checklist in the PR template. The key requirements are:

- The function returns a `boolean`
- Full JSDoc (`@param`, `@returns`, `@example`)
- Tests cover positive and negative/edge cases
- `src/index.js` named export and `Barbero` object updated
- No breaking changes to existing functions

---

## Scope and Out-of-Scope

Barbero will not accept functions in the following areas regardless of how well they are implemented:

| Area | Reason |
|------|--------|
| Date comparisons | Covered by date-fns, dayjs, moment.js |
| String format validation (email, URL, UUID) | Covered by validator.js |
| Deep schema validation | Covered by lodash, ajv |
| DOM / UI state | Requires browser environment |
| Promise / async state | Not a pure value |
| Environment / platform detection | Platform-specific |

When in doubt, open a Feature Request issue before writing code.

---

## Code of Conduct

All contributors are expected to follow the [Code of Conduct](CODE_OF_CONDUCT.md).
