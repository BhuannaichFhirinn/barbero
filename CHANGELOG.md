# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.2.0] - 2026-05-08

### Added

- `parseBoolean(value)` — returns `true` if the value is a recognised truthy semantic representation; direct replacement for the deprecated `boolean` package's `boolean()` function
- `isBooleanable(value)` — returns `true` if the value is any recognised boolean representation, truthy or falsy; direct replacement for the deprecated `boolean` package's `isBooleanable()` function
- `isTruthyString(value)` — returns `true` if the value is one of the recognised truthy semantic representations
- `isFalseyString(value)` — returns `true` if the value is one of the recognised falsy semantic representations
- `dist/index.d.ts` — TypeScript declaration file, generated from JSDoc annotations via `tsc --emitDeclarationOnly`
- `tsconfig.declarations.json` — TypeScript compiler configuration for declaration generation

### Changed

- Build script updated to `rollup -c && tsc --project tsconfig.declarations.json` to produce declarations alongside JS outputs
- `package.json` `"types"` field added pointing to `dist/index.d.ts`

---

## [1.1.0] - 2026-04-08

### Added

- `isInteger(value)` — returns `true` if the value is an integer; does not coerce
- `isFloat(value)` — returns `true` if the value is a finite non-integer number
- `isPositive(value)` — returns `true` if the value is strictly greater than zero
- `isNegative(value)` — returns `true` if the value is strictly less than zero; `-0` returns `false`
- `isZero(value)` — returns `true` if the value is `0` or `-0`
- `isEven(value)` — returns `true` if the value is an even integer
- `isOdd(value)` — returns `true` if the value is an odd integer
- `isInRange(value, min, max)` — returns `true` if the value is within `[min, max]`, inclusive
- `isDivisibleBy(value, divisor)` — returns `true` if `value` is evenly divisible by `divisor`; guards against division by zero
- `isFiniteNumber(value)` — returns `true` if the value is a finite number
- `isNaNValue(value)` — returns `true` if the value is exactly `NaN`; uses `Number.isNaN`, no coercion

---

## [1.0.0] - 2026-03-08

Initial stable release. Semver guarantees begin from this version.

### Added

#### Core
- `isTruthy(value)` — `!!value`
- `isFalsey(value)` — `!value`
- `isEqual(a, b)` — deep recursive equality comparison
- `isStrictEqual(a, b)` — `Object.is` equality

#### Validation
- `isNullOrUndefined(value)`
- `isUndefinedNullOrEmpty(value)` — covers `undefined`, `null`, `NaN`, empty string/array/object
- `isEmptyArray(value)`
- `isEmptyObject(value)`
- `isArray(value)`
- `isObject(value)`
- `isFunction(value)`
- `isDate(value)`
- `isRegExp(value)`

#### Type System
- `isNumber(value)`
- `isString(value)`
- `isBoolean(value)`
- `isSymbol(value)`
- `isBigInt(value)`
- `isPrimitive(value)`
- `isClassInstance(value)`

#### Logic
- `xor(a, b)` — exclusive OR
- `nand(a, b)` — NOT AND

#### Predicates
- `allPass(...predicates)`
- `anyPass(...predicates)`
- `nonePass(...predicates)`
- `composePredicates(...predicates)`

---

*Pre-release alpha versions (`0.1.0-alpha.1` through `0.1.0-alpha.7`) were published during initial development and are not documented here.*

[1.2.0]: https://github.com/BhuannaichFhirinn/barbero/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/BhuannaichFhirinn/barbero/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/BhuannaichFhirinn/barbero/releases/tag/v1.0.0
