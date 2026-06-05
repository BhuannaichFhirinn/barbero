# Barbero — Overview

## What is Barbero?

**Barbero** is a lightweight, zero-dependency JavaScript utility library that provides a focused collection of functions for Boolean logic. Every function in the library returns a `boolean` value — `true` or `false`. This is the fundamental design contract of the library.

Barbero is published to NPM and supports CommonJS, ES Module, and UMD consumption patterns.

- **NPM**: https://www.npmjs.com/package/barbero
- **Repository**: https://github.com/BhuannaichFhirinn/barbero
- **License**: MIT

---

## Core Design Contract

> Every function in Barbero **must** return a `boolean`. This is the non-negotiable design principle of the library.

This constraint keeps the library focused, predictable, and trivially composable. Any function that cannot satisfy this contract does not belong in Barbero.

The one exception in spirit are the higher-order predicate factories (`allPass`, `anyPass`, etc.) — these return a **function**, but that function itself returns a `boolean`.

---

## Installation

```bash
npm install barbero
```

```bash
yarn add barbero
```

---

## Quick Start

### Named imports (recommended — tree-shakable)

```javascript
import { isTruthy, isEqual, allPass } from 'barbero';

isTruthy(1);             // true
isEqual({ a: 1 }, { a: 1 }); // true

const isPositive = (x) => x > 0;
const isEven = (x) => x % 2 === 0;
const check = allPass(isPositive, isEven);
check(4);  // true
check(-2); // false
```

### Default import

```javascript
import Barbero from 'barbero';

Barbero.isFalsey(0);    // true
Barbero.xor(true, false); // true
```

### CommonJS (Node.js)

```javascript
const { isNullOrUndefined, isEmptyArray } = require('barbero');

isNullOrUndefined(null); // true
isEmptyArray([]);        // true
```

### Browser (UMD)

```html
<script src="https://unpkg.com/barbero/dist/index.umd.js"></script>
<script>
  Barbero.isTruthy(1); // true
</script>
```

---

## Further Reading

Full API reference for each module:

- [Core](api/core.md) — `isTruthy`, `isFalsey`, `isEqual`, `isStrictEqual`
- [Validation](api/validation.md) — `isNullOrUndefined`, `isUndefinedNullOrEmpty`, `isEmptyArray`, `isEmptyObject`, `isArray`, `isObject`, `isFunction`, `isDate`, `isRegExp`
- [Type System](api/types.md) — `isNumber`, `isString`, `isBoolean`, `isSymbol`, `isBigInt`, `isPrimitive`, `isClassInstance`
- [Logic](api/logic.md) — `xor`, `nand`
- [Predicates](api/predicates.md) — `allPass`, `anyPass`, `nonePass`, `composePredicates`
- [Number / Math](api/number.md) — `isInteger`, `isFloat`, `isPositive`, `isNegative`, `isZero`, `isEven`, `isOdd`, `isInRange`, `isDivisibleBy`, `isFiniteNumber`, `isNaNValue`
- [Boolean Parsing](api/parsing.md) — `parseBoolean`, `isBooleanable`, `isTruthyString`, `isFalseyString`
- [String Content](api/string.md) — `isNumericString`, `isAlpha`, `isAlphanumeric`, `isUpperCase`, `isLowerCase`, `isPalindrome`, `isBlankString`, `stringStartsWith`, `stringEndsWith`, `stringIncludes`

---

## Module Overview

| Module | Functions | Description |
|--------|-----------|-------------|
| **Core** | `isTruthy`, `isFalsey`, `isEqual`, `isStrictEqual` | Fundamental truthiness and equality checks |
| **Validation** | `isNullOrUndefined`, `isUndefinedNullOrEmpty`, `isEmptyArray`, `isEmptyObject`, `isArray`, `isObject`, `isFunction`, `isDate`, `isRegExp` | Type and emptiness checks |
| **Type System** | `isNumber`, `isString`, `isBoolean`, `isSymbol`, `isBigInt`, `isPrimitive`, `isClassInstance` | Primitive and structural type identity checks |
| **Logic** | `xor`, `nand` | Boolean logical gate operations |
| **Predicates** | `allPass`, `anyPass`, `nonePass`, `composePredicates` | Higher-order predicate combinators |
| **Number / Math** | `isInteger`, `isFloat`, `isPositive`, `isNegative`, `isZero`, `isEven`, `isOdd`, `isInRange`, `isDivisibleBy`, `isFiniteNumber`, `isNaNValue` | Pure boolean predicates for numeric checks |
| **Boolean Parsing** | `parseBoolean`, `isBooleanable`, `isTruthyString`, `isFalseyString` | Semantic boolean recognition from strings and numbers |
| **String Content** | `isNumericString`, `isAlpha`, `isAlphanumeric`, `isUpperCase`, `isLowerCase`, `isPalindrome`, `isBlankString`, `stringStartsWith`, `stringEndsWith`, `stringIncludes` | Boolean predicates for string content and structure |

---

## Further Reading

- [Architecture](./architecture.md) — module structure, build system, and design decisions
- [API: Core](./api/core.md) — `isTruthy`, `isFalsey`, `isEqual`, `isStrictEqual`
- [API: Validation](./api/validation.md) — type and emptiness utilities
- [API: Types](./api/types.md) — primitive and structural type identity checks
- [API: Logic](./api/logic.md) — `xor`, `nand`
- [API: Predicates](./api/predicates.md) — `allPass`, `anyPass`, `nonePass`, `composePredicates`
- [API: Number / Math](./api/number.md) — numeric boolean predicates
- [API: Boolean Parsing](./api/parsing.md) — semantic boolean recognition
- [API: String Content](./api/string.md) — string content boolean predicates
- [Contributing](./contributing.md) — adding functions, testing, publishing
- [Migrating from `boolean`](./migrating-from-boolean.md) — drop-in replacement guide
