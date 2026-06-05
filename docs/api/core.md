# API Reference — Core

The core module provides the fundamental Boolean and equality utilities. All functions return a `boolean`.

**Source**: `src/core/truthy.js`, `src/core/compare.js`

---

## isTruthy

```typescript
isTruthy(value: any): boolean
```

Returns `true` if the value is [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) — i.e. any value that JavaScript considers `true` in a boolean context.

**Implementation**: `!!value`

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `any` | The value to evaluate |

### Returns

`true` if the value is truthy, `false` otherwise.

### Examples

```javascript
import { isTruthy } from 'barbero';

// Truthy values
isTruthy(1);          // true
isTruthy('hello');    // true
isTruthy([]);         // true  — empty array is truthy in JS
isTruthy({});         // true  — empty object is truthy in JS
isTruthy(true);       // true

// Falsey values
isTruthy(0);          // false
isTruthy('');         // false
isTruthy(null);       // false
isTruthy(undefined);  // false
isTruthy(false);      // false
isTruthy(NaN);        // false
```

---

## isFalsey

```typescript
isFalsey(value: any): boolean
```

Returns `true` if the value is [falsey](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) — i.e. any value that JavaScript considers `false` in a boolean context.

**Implementation**: `!value`

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `any` | The value to evaluate |

### Returns

`true` if the value is falsey, `false` otherwise.

### Examples

```javascript
import { isFalsey } from 'barbero';

// Falsey values
isFalsey(0);          // true
isFalsey('');         // true
isFalsey(null);       // true
isFalsey(undefined);  // true
isFalsey(false);      // true
isFalsey(NaN);        // true

// Truthy values
isFalsey(1);          // false
isFalsey('hello');    // false
isFalsey([]);         // false
isFalsey({});         // false
```

### Notes

`isFalsey` is the exact inverse of `isTruthy`. For any value `v`, `isFalsey(v) === !isTruthy(v)`.

---

## isEqual

```typescript
isEqual(a: any, b: any): boolean
```

Performs a **deep equality** check between two values. Objects and arrays are compared recursively by structure and value, not by reference.

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `a` | `any` | The first value |
| `b` | `any` | The second value |

### Returns

`true` if the values are deeply equal, `false` otherwise.

### Examples

```javascript
import { isEqual } from 'barbero';

// Primitives
isEqual(1, 1);          // true
isEqual(1, '1');        // false — different types
isEqual(null, null);    // true

// Objects — compared by structure, not reference
isEqual({ a: 1 }, { a: 1 }); // true
isEqual({ a: 1 }, { a: 2 }); // false
isEqual({ a: 1, b: 2 }, { a: 1 }); // false — different key counts

// Arrays — compared by structure, not reference
isEqual([1, 2, 3], [1, 2, 3]); // true
isEqual([1, 2], [1, 2, 3]);    // false

// Nested structures
isEqual({ a: { b: 1 } }, { a: { b: 1 } }); // true
isEqual({ a: { b: 1 } }, { a: { b: 2 } }); // false
```

### Notes

- Two separate object references with the same shape and values return `true`
- Type is checked first — `isEqual(1, '1')` returns `false` without inspecting further
- For primitive strict equality (including `NaN` handling), use `isStrictEqual` instead

---

## isStrictEqual

```typescript
isStrictEqual(a: any, b: any): boolean
```

Performs a **strict equality** check using [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is). This is similar to `===` but correctly handles `NaN` and distinguishes `+0` from `-0`.

**Implementation**: `Object.is(a, b)`

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `a` | `any` | The first value |
| `b` | `any` | The second value |

### Returns

`true` if the values are strictly equal by `Object.is` semantics, `false` otherwise.

### Examples

```javascript
import { isStrictEqual } from 'barbero';

isStrictEqual(1, 1);        // true
isStrictEqual(1, '1');      // false — no type coercion
isStrictEqual(NaN, NaN);    // true  — unlike ===, Object.is handles NaN
isStrictEqual(+0, -0);      // false — unlike ===, Object.is distinguishes these
isStrictEqual(null, null);  // true
isStrictEqual(null, undefined); // false
```

### Notes

- Objects and arrays are compared **by reference**, not by value. Use `isEqual` for deep comparison.
- `isStrictEqual({}, {})` returns `false` because they are different object references.
