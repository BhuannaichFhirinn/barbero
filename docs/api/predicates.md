# API Reference — Predicates

The predicates module provides higher-order functions for composing and combining predicate functions. Each factory returns a **function** — and that returned function returns a `boolean`.

**Source**: `src/utilities/predicate.js`

---

## allPass

```typescript
allPass(...predicates: Function[]): (input: any) => boolean
```

Returns a new function that returns `true` only if **every** supplied predicate passes for the given input. Equivalent to a logical AND across all predicates.

**Implementation**: `(...predicates) => (input) => predicates.every(p => p(input))`

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `...predicates` | `Function[]` | One or more predicate functions, each taking a single input and returning a boolean |

### Returns

A function `(input) => boolean` that returns `true` if all predicates return `true` for `input`.

### Examples

```javascript
import { allPass } from 'barbero';

const isPositive = (x) => x > 0;
const isEven = (x) => x % 2 === 0;
const isLessThan100 = (x) => x < 100;

const isPositiveAndEven = allPass(isPositive, isEven);

isPositiveAndEven(4);   // true  — positive and even
isPositiveAndEven(3);   // false — positive but not even
isPositiveAndEven(-2);  // false — even but not positive

// Three predicates
const check = allPass(isPositive, isEven, isLessThan100);
check(50);  // true
check(100); // false — not less than 100
```

### Notes

- Short-circuits on the first failing predicate (via `Array.every`)
- Passing zero predicates returns a function that always returns `true`

---

## anyPass

```typescript
anyPass(...predicates: Function[]): (input: any) => boolean
```

Returns a new function that returns `true` if **at least one** supplied predicate passes for the given input. Equivalent to a logical OR across all predicates.

**Implementation**: `(...predicates) => (input) => predicates.some(p => p(input))`

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `...predicates` | `Function[]` | One or more predicate functions, each taking a single input and returning a boolean |

### Returns

A function `(input) => boolean` that returns `true` if any predicate returns `true` for `input`.

### Examples

```javascript
import { anyPass } from 'barbero';

const isPositive = (x) => x > 0;
const isEven = (x) => x % 2 === 0;

const isPositiveOrEven = anyPass(isPositive, isEven);

isPositiveOrEven(3);   // true  — positive (not even)
isPositiveOrEven(-2);  // true  — even (not positive)
isPositiveOrEven(4);   // true  — both
isPositiveOrEven(-3);  // false — neither
```

### Notes

- Short-circuits on the first passing predicate (via `Array.some`)
- Passing zero predicates returns a function that always returns `false`

---

## nonePass

```typescript
nonePass(...predicates: Function[]): (input: any) => boolean
```

Returns a new function that returns `true` if **no** supplied predicates pass for the given input. Equivalent to a logical NOR across all predicates.

**Implementation**: `(...predicates) => (input) => !predicates.some(p => p(input))`

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `...predicates` | `Function[]` | One or more predicate functions, each taking a single input and returning a boolean |

### Returns

A function `(input) => boolean` that returns `true` only if every predicate returns `false` for `input`.

### Examples

```javascript
import { nonePass } from 'barbero';

const isPositive = (x) => x > 0;
const isEven = (x) => x % 2 === 0;

const isNeitherPositiveNorEven = nonePass(isPositive, isEven);

isNeitherPositiveNorEven(-3); // true  — not positive, not even
isNeitherPositiveNorEven(-2); // false — even
isNeitherPositiveNorEven(1);  // false — positive
isNeitherPositiveNorEven(4);  // false — both
```

### Notes

- `nonePass` is the logical inverse of `anyPass`: `nonePass(f)(x) === !anyPass(f)(x)`
- Passing zero predicates returns a function that always returns `true`

---

## composePredicates

```typescript
composePredicates(...predicates: Function[]): (input: any) => boolean
```

Composes multiple predicates into a single predicate function that applies them **sequentially** using a logical AND reduction. Returns `true` only if all predicates pass, stopping as soon as one fails.

**Implementation**: `(...predicates) => (input) => predicates.reduce((result, p) => result && p(input), true)`

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `...predicates` | `Function[]` | One or more predicate functions to compose |

### Returns

A function `(input) => boolean` that applies all predicates in order and returns `true` only if all pass.

### Examples

```javascript
import { composePredicates } from 'barbero';

const isPositive = (x) => x > 0;
const isEven = (x) => x % 2 === 0;

const check = composePredicates(isPositive, isEven);

check(4);  // true  — positive and even
check(3);  // false — positive but not even
check(-2); // false — even but not positive
```

### Notes

`composePredicates` and `allPass` produce the same result for any input. The distinction is one of intent:

- Use `allPass` when you want to **combine** independent predicates into a test
- Use `composePredicates` when you want to express a **sequential pipeline** of conditions, where the order of evaluation is meaningful

Both will short-circuit once a failing predicate is encountered (`allPass` via `Array.every`, `composePredicates` via `&&` in `reduce`).

---

## Combining Predicate Utilities

The predicate utilities are designed to be composed together:

```javascript
import { allPass, anyPass, nonePass } from 'barbero';

const isString = (x) => typeof x === 'string';
const isNonEmpty = (x) => x.length > 0;
const isShort = (x) => x.length <= 10;

// A valid short string
const isValidShortString = allPass(isString, isNonEmpty, isShort);

isValidShortString('hello');       // true
isValidShortString('');            // false — empty
isValidShortString('hello world'); // false — too long
isValidShortString(42);            // false — not a string
```
