# API Reference — Number / Math

The number module provides pure boolean predicates for numeric checks. All functions return a `boolean`.

**Source**: `src/utilities/number.js`

---

## isInteger

```typescript
isInteger(value: any): boolean
```

Returns `true` if the value is an integer. Does not coerce — strings and floats return `false`.

**Implementation**: `Number.isInteger(value)`

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `any` | The value to check |

### Examples

```javascript
import { isInteger } from 'barbero';

isInteger(4);         // true
isInteger(0);         // true
isInteger(-10);       // true

isInteger(4.5);       // false
isInteger(NaN);       // false
isInteger(Infinity);  // false
isInteger('4');       // false
```

---

## isFloat

```typescript
isFloat(value: any): boolean
```

Returns `true` if the value is a finite number that is not an integer. `Infinity` and `-Infinity` are not considered floats.

**Implementation**: `Number.isFinite(value) && !Number.isInteger(value)`

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `any` | The value to check |

### Examples

```javascript
import { isFloat } from 'barbero';

isFloat(4.5);      // true
isFloat(-0.1);     // true

isFloat(4);        // false — is an integer
isFloat(Infinity); // false — not finite
isFloat(NaN);      // false
isFloat('4.5');    // false
```

---

## isPositive

```typescript
isPositive(value: any): boolean
```

Returns `true` if the value is a number strictly greater than zero. `0`, `-0`, and `NaN` all return `false`.

**Implementation**: `typeof value === 'number' && value > 0`

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `any` | The value to check |

### Examples

```javascript
import { isPositive } from 'barbero';

isPositive(1);    // true
isPositive(0.1);  // true

isPositive(0);    // false — zero is not positive
isPositive(-1);   // false
isPositive(NaN);  // false
```

---

## isNegative

```typescript
isNegative(value: any): boolean
```

Returns `true` if the value is a number strictly less than zero. `-0` returns `false` because `-0 < 0` evaluates to `false` in JavaScript.

**Implementation**: `typeof value === 'number' && value < 0`

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `any` | The value to check |

### Examples

```javascript
import { isNegative } from 'barbero';

isNegative(-1);   // true
isNegative(-0.1); // true

isNegative(0);    // false
isNegative(-0);   // false — -0 < 0 is false in JavaScript
isNegative(NaN);  // false
```

---

## isZero

```typescript
isZero(value: any): boolean
```

Returns `true` if the value is `0` or `-0`. Both are considered zero because `-0 === 0` is `true` in JavaScript.

**Implementation**: `value === 0`

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `any` | The value to check |

### Examples

```javascript
import { isZero } from 'barbero';

isZero(0);   // true
isZero(-0);  // true — -0 === 0

isZero(1);   // false
isZero('0'); // false
```

---

## isEven

```typescript
isEven(value: any): boolean
```

Returns `true` if the value is an integer divisible by 2. Non-integers always return `false`.

**Implementation**: `Number.isInteger(value) && value % 2 === 0`

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `any` | The value to check |

### Examples

```javascript
import { isEven } from 'barbero';

isEven(4);    // true
isEven(0);    // true
isEven(-2);   // true

isEven(3);    // false
isEven(2.5);  // false — not an integer
isEven(NaN);  // false
```

---

## isOdd

```typescript
isOdd(value: any): boolean
```

Returns `true` if the value is an integer not divisible by 2. Non-integers always return `false`.

**Implementation**: `Number.isInteger(value) && value % 2 !== 0`

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `any` | The value to check |

### Examples

```javascript
import { isOdd } from 'barbero';

isOdd(3);    // true
isOdd(-1);   // true

isOdd(4);    // false
isOdd(3.1);  // false — not an integer
isOdd(NaN);  // false
```

---

## isInRange

```typescript
isInRange(value: any, min: number, max: number): boolean
```

Returns `true` if the value is a number within `[min, max]` (inclusive on both bounds).

**Implementation**: `typeof value === 'number' && value >= min && value <= max`

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `any` | The value to check |
| `min` | `number` | Lower bound (inclusive) |
| `max` | `number` | Upper bound (inclusive) |

### Examples

```javascript
import { isInRange } from 'barbero';

isInRange(5, 1, 10);   // true
isInRange(1, 1, 10);   // true  — inclusive lower bound
isInRange(10, 1, 10);  // true  — inclusive upper bound

isInRange(11, 1, 10);  // false
isInRange(0, 1, 10);   // false
isInRange('5', 1, 10); // false — not a number
```

---

## isDivisibleBy

```typescript
isDivisibleBy(value: any, divisor: any): boolean
```

Returns `true` if `value` is an integer evenly divisible by `divisor`. Guards against non-integer inputs and division by zero — both return `false`.

**Implementation**: `Number.isInteger(value) && Number.isInteger(divisor) && divisor !== 0 && value % divisor === 0`

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `any` | The value to check |
| `divisor` | `any` | The divisor |

### Examples

```javascript
import { isDivisibleBy } from 'barbero';

isDivisibleBy(9, 3);    // true
isDivisibleBy(10, 2);   // true

isDivisibleBy(10, 3);   // false
isDivisibleBy(9, 0);    // false — division by zero guard
isDivisibleBy(9.5, 3);  // false — non-integer value
isDivisibleBy(9, 1.5);  // false — non-integer divisor
```

---

## isFiniteNumber

```typescript
isFiniteNumber(value: any): boolean
```

Returns `true` if the value is a finite number. Returns `false` for `NaN`, `Infinity`, `-Infinity`, and any non-number type.

**Implementation**: `Number.isFinite(value)`

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `any` | The value to check |

### Examples

```javascript
import { isFiniteNumber } from 'barbero';

isFiniteNumber(42);       // true
isFiniteNumber(3.14);     // true
isFiniteNumber(-100);     // true

isFiniteNumber(Infinity); // false
isFiniteNumber(-Infinity);// false
isFiniteNumber(NaN);      // false
isFiniteNumber('42');     // false
```

---

## isNaNValue

```typescript
isNaNValue(value: any): boolean
```

Returns `true` if the value is exactly `NaN`. Uses `Number.isNaN` — unlike the global `isNaN`, this does not coerce the value, so `isNaNValue(undefined)` returns `false`.

**Implementation**: `Number.isNaN(value)`

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `any` | The value to check |

### Examples

```javascript
import { isNaNValue } from 'barbero';

isNaNValue(NaN);        // true
isNaNValue(0 / 0);      // true

isNaNValue(42);         // false
isNaNValue(undefined);  // false — unlike global isNaN, no coercion
isNaNValue('NaN');      // false
```

### Notes

- `isNaNValue` is named to avoid collision with the global `isNaN` function. It uses `Number.isNaN`, which is stricter and does not coerce.
- To check whether a value is a number type (which includes `NaN`), use `isNumber` from the Type System module.
