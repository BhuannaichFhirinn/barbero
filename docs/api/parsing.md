# API Reference — Boolean Parsing

The parsing module provides semantic boolean recognition from strings, numbers, and booleans. All functions return a `boolean`. String matching is case-insensitive after trimming. Boxed primitives (`new Boolean()`, `new String()`, `new Number()`) are handled identically to their primitive counterparts.

This module is the direct successor to the deprecated [`boolean`](https://www.npmjs.com/package/boolean) npm package. See the [migration guide](../migrating-from-boolean.md) for a full comparison.

**Source**: `src/core/parsing.js`

---

## Recognised values

The module recognises 42 semantic boolean representations (21 truthy, 21 falsy). All matching is performed after `.trim().toLowerCase()`.

### Truthy (21)

| Value | Type |
|-------|------|
| `true` | boolean / string |
| `1` | number / string |
| `'t'` | string |
| `'yes'` | string |
| `'y'` | string |
| `'on'` | string |
| `'enabled'` | string |
| `'active'` | string |
| `'allow'` | string |
| `'up'` | string |
| `'online'` | string |
| `'open'` | string |
| `'pass'` | string |
| `'ok'` | string |
| `'success'` | string |
| `'positive'` | string |
| `'valid'` | string |
| `'accepted'` | string |
| `'running'` | string |
| `'connected'` | string |
| `'available'` | string |

### Falsy (21)

| Value | Type |
|-------|------|
| `false` | boolean / string |
| `0` | number / string |
| `'f'` | string |
| `'no'` | string |
| `'n'` | string |
| `'off'` | string |
| `'disabled'` | string |
| `'inactive'` | string |
| `'deny'` | string |
| `'down'` | string |
| `'offline'` | string |
| `'closed'` | string |
| `'fail'` | string |
| `'nok'` | string |
| `'failure'` | string |
| `'negative'` | string |
| `'invalid'` | string |
| `'rejected'` | string |
| `'stopped'` | string |
| `'disconnected'` | string |
| `'unavailable'` | string |

---

## parseBoolean

```typescript
parseBoolean(value: any): boolean
```

Returns `true` if the value is a recognised truthy semantic representation. Returns `false` for everything else, including unrecognised strings, `null`, `undefined`, and arrays.

Direct replacement for the deprecated `boolean()` function from the [`boolean`](https://www.npmjs.com/package/boolean) package. The only change is the name — `boolean()` → `parseBoolean()`.

**Implementation**: normalise value → check against `TRUTHY_SET`

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `any` | The value to parse |

### Examples

```javascript
import { parseBoolean } from 'barbero';

parseBoolean(true);        // true
parseBoolean(1);           // true
parseBoolean('yes');       // true
parseBoolean('YES');       // true  — case-insensitive
parseBoolean('  yes  ');   // true  — whitespace trimmed
parseBoolean('enabled');   // true
parseBoolean('running');   // true

parseBoolean(false);       // false
parseBoolean(0);           // false
parseBoolean('no');        // false
parseBoolean('maybe');     // false — unrecognised
parseBoolean(null);        // false
parseBoolean(undefined);   // false
```

---

## isBooleanable

```typescript
isBooleanable(value: any): boolean
```

Returns `true` if the value is any recognised boolean representation — either truthy or falsy. Note that `'no'`, `'false'`, `'0'` etc. return `true` because they are recognised boolean forms even though they represent false.

Direct replacement for the deprecated `isBooleanable()` from the [`boolean`](https://www.npmjs.com/package/boolean) package. Name and behaviour are identical.

**Implementation**: normalise value → check against `TRUTHY_SET` or `FALSY_SET`

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `any` | The value to test |

### Examples

```javascript
import { isBooleanable } from 'barbero';

isBooleanable(true);     // true
isBooleanable(false);    // true
isBooleanable('yes');    // true
isBooleanable('no');     // true  — 'no' is booleanable even though it's falsy
isBooleanable(1);        // true
isBooleanable(0);        // true

isBooleanable('maybe');  // false — unrecognised
isBooleanable(null);     // false
isBooleanable([]);       // false
```

---

## isTruthyString

```typescript
isTruthyString(value: any): boolean
```

Returns `true` if the value is one of the 21 recognised truthy representations. Complements `isTruthy` for string and number input forms — `isTruthy('yes')` returns `true` because `'yes'` is truthy in JavaScript, but `isTruthyString('yes')` returns `true` because `'yes'` is a recognised semantic truthy value.

**Implementation**: normalise value → check against `TRUTHY_SET`

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `any` | The value to test |

### Examples

```javascript
import { isTruthyString } from 'barbero';

isTruthyString('yes');      // true
isTruthyString('enabled');  // true
isTruthyString(1);          // true
isTruthyString(true);       // true

isTruthyString('no');       // false — falsy representation
isTruthyString('maybe');    // false — unrecognised
isTruthyString(null);       // false
```

### Notes

- `isTruthyString` and `parseBoolean` are functionally identical — both check against `TRUTHY_SET`. `parseBoolean` is the name to use when the intent is conversion; `isTruthyString` is the name to use when the intent is a predicate check.

---

## isFalseyString

```typescript
isFalseyString(value: any): boolean
```

Returns `true` if the value is one of the 21 recognised falsy representations. Complements `isFalsey` for string and number input forms.

**Implementation**: normalise value → check against `FALSY_SET`

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `any` | The value to test |

### Examples

```javascript
import { isFalseyString } from 'barbero';

isFalseyString('no');          // true
isFalseyString('disabled');    // true
isFalseyString('rejected');    // true
isFalseyString(0);             // true
isFalseyString(false);         // true

isFalseyString('yes');         // false — truthy representation
isFalseyString('maybe');       // false — unrecognised
isFalseyString(null);          // false
```
