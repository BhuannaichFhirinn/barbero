# Contributing to Barbero

Thank you for your interest in contributing. This document covers how to work with the codebase, add new functions, write tests, and publish releases.

---

## Core Design Contract

> **Every function in Barbero must return a `boolean`.**

Before proposing or implementing anything, ask: *"Does this return `true` or `false`?"* If not, it does not belong in this library.

---

## Development Setup

```bash
git clone https://github.com/BhuannaichFhirinn/barbero.git
cd barbero
npm install
```

### Available Commands

```bash
# Run tests once
npm test

# Run tests in watch mode (re-runs on file changes)
npm run test:watch

# Build distribution files to dist/
npm run build
```

---

## Adding a New Function

Follow these steps in order when adding a new exported function:

### 1. Choose the right module

| Module | When to use |
|--------|-------------|
| `src/core/` | Fundamental Boolean/truthiness/equality primitives |
| `src/utilities/validation.js` | Type guards and emptiness checks |
| `src/utilities/types.js` | Primitive and structural type identity checks |
| `src/utilities/logic.js` | Boolean gate / logical operations |
| `src/utilities/predicate.js` | Higher-order predicate combinators, predicate factories, and composition utilities |
| `src/utilities/number.js` | Pure boolean predicates for numeric checks |
| `src/utilities/string.js` | Pure boolean predicates for string content and structure |

If none of the existing files are a clear fit, discuss before creating a new module.

### 2. Implement the function

- **Pure function only** — no side effects, no mutation of inputs
- **Arrow function** syntax with `export const`
- Handle all relevant edge cases
- No stub implementations, hardcoded returns, or `// TODO` comments

```javascript
/**
 * Checks if a number is within a range (inclusive).
 * @param {number} value - The number to check.
 * @param {number} min - The minimum value (inclusive).
 * @param {number} max - The maximum value (inclusive).
 * @returns {boolean} - True if value is within [min, max], false otherwise.
 * @example
 * isInRange(5, 1, 10); // true
 * isInRange(0, 1, 10); // false
 */
export const isInRange = (value, min, max) => value >= min && value <= max;
```

### 3. Export from `src/index.js`

Add the function in **two** places in `src/index.js`:

```javascript
// 1. Add to the import block at the top
import { isInRange } from './utilities/number.js';

// 2. Add to the Barbero default export object
const Barbero = {
  // ... existing functions ...
  isInRange,
};

// 3. Add to the named exports block
export {
  // ... existing exports ...
  isInRange,
};
```

### 4. Write tests

Create or update the corresponding test file under `tests/`, mirroring the source path.

```javascript
// tests/utilities/number.test.js

import { isInRange } from '../../src/utilities/number.js';

describe('isInRange', () => {
  it('returns true when value is within range', () => {
    expect(isInRange(5, 1, 10)).toBe(true);
    expect(isInRange(1, 1, 10)).toBe(true);  // inclusive lower bound
    expect(isInRange(10, 1, 10)).toBe(true); // inclusive upper bound
  });

  it('returns false when value is outside range', () => {
    expect(isInRange(0, 1, 10)).toBe(false);
    expect(isInRange(11, 1, 10)).toBe(false);
  });
});
```

**Test coverage requirements:**
- At least one positive case (function returns `true`)
- At least one negative case (function returns `false`)
- Edge cases for boundary values where applicable

### 5. Update `README.md`

Add the new function to the appropriate section of the API table and add a minimal reference entry with an example.

---

## Removing a Function

When a function is removed:

1. Remove the implementation from its module file
2. Remove the import, named export, and `Barbero` object entry from `src/index.js`
3. Remove the corresponding tests
4. Remove the function from `README.md`

> **Breaking change warning**: Removing a function is a breaking change. Do not remove exported functions without explicit agreement, given the library has active NPM consumers.

---

## Breaking Changes Policy

Barbero has active weekly downloads. The following are **breaking changes** and must not be introduced without explicit agreement:

- Removing or renaming an exported function
- Changing the number or order of parameters
- Changing the return type or semantics of an existing function
- Altering documented behaviour in a way that would break existing callers

New behaviour must be **strictly additive** — existing callers must be unaffected.

---

## Publishing a Release

Follow these steps in order for every new version published to NPM.

### 1. Bump the version in `package.json`

Barbero follows [Semantic Versioning](https://semver.org/). New functions are a minor bump; bug fixes are a patch:

```json
"version": "1.3.0"
```

### 2. Run tests and build

```bash
npm test
npm run build
```

Both must succeed with no errors before continuing.

### 3. Publish to NPM

The `prepublishOnly` script ensures a clean build is always run before publish.

```bash
npm publish
```

### 4. Commit the version bump

```bash
git add package.json
git commit -m "chore: bump version to 1.3.0"
```

### 5. Tag the release

```bash
git tag v1.3.0
git push origin main --tags
```

---

## Versioning

Barbero follows [Semantic Versioning](https://semver.org/):

| Change type | Version bump |
|-------------|-------------|
| Bug fix (no behaviour change) | Patch: `1.x.y` → `1.x.(y+1)` |
| New function added | Minor: `1.x.0` → `1.(x+1).0` |
| Any breaking change | Major: `x.0.0` → `(x+1).0.0` |

---

## Naming Conventions

### Predicate functions
Functions that directly return a `boolean` use the `is` prefix:

```javascript
isTruthy(value)       // → boolean
isEmptyArray(array)   // → boolean
isPositive(value)     // → boolean
```

### Predicate factories
Functions that **return a predicate** (a configured single-argument function that itself returns a boolean) do **not** use the `is` prefix. They are named as verbs or adjectives describing the test being configured:

```javascript
inRange(1, 10)         // → (value) => boolean
divisibleBy(3)         // → (value) => boolean
greaterThan(0)         // → (value) => boolean
startsWith('foo')      // → (value) => boolean
```

This distinction is important: `is` prefix signals an immediate boolean result; no `is` prefix signals a factory that produces a predicate for later composition.

### Composition utilities
Higher-order functions that combine or transform predicates are named as verbs:

```javascript
not(predicate)         // → negated predicate function
where(spec)            // → object shape predicate function
on(transform, pred)    // → transform-then-test predicate function
```

---

## Code Style

- **ES Module syntax** throughout (`export const`, `import`)
- **Arrow functions** for all exported utilities
- **No classes**
- **No TypeScript** — use JSDoc for type annotations
- **JSDoc required** on every exported function: `@param`, `@returns`, `@example`
- **Pure functions only** — no side effects, no input mutation
