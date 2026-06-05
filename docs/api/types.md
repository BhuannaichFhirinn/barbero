# API Reference — Type System

The type system module provides type identity predicates for all JavaScript primitive and structural types. All functions return a `boolean`.

**Source**: `src/utilities/types.js`

---

## isNumber

```typescript
isNumber(value: any): boolean
```

Returns `true` if the value has type `'number'`. This includes `NaN` — `NaN` has `typeof 'number'` in JavaScript. For a check that excludes `NaN`, use `isFiniteNumber` (Area 2).

**Implementation**: `typeof value === 'number'`

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `any` | The value to check |

### Examples

```javascript
import { isNumber } from 'barbero';

isNumber(42);       // true
isNumber(3.14);     // true
isNumber(NaN);      // true  — NaN has type 'number'
isNumber(Infinity); // true

isNumber('42');     // false
isNumber(true);     // false
isNumber(null);     // false
```

---

## isString

```typescript
isString(value: any): boolean
```

Returns `true` if the value is a primitive string. Returns `false` for boxed `String` objects — a `new String('x')` has `typeof 'object'`, not `'string'`.

**Implementation**: `typeof value === 'string'`

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `any` | The value to check |

### Examples

```javascript
import { isString } from 'barbero';

isString('hello');          // true
isString('');               // true

isString(new String('hi')); // false — boxed String is an object
isString(42);               // false
isString(null);             // false
```

---

## isBoolean

```typescript
isBoolean(value: any): boolean
```

Returns `true` if the value is a primitive boolean. Returns `false` for boxed `Boolean` objects — a `new Boolean(true)` has `typeof 'object'`, not `'boolean'`.

**Implementation**: `typeof value === 'boolean'`

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `any` | The value to check |

### Examples

```javascript
import { isBoolean } from 'barbero';

isBoolean(true);                // true
isBoolean(false);               // true

isBoolean(new Boolean(false));  // false — boxed Boolean is an object
isBoolean(1);                   // false
isBoolean(0);                   // false
isBoolean('true');              // false
```

---

## isSymbol

```typescript
isSymbol(value: any): boolean
```

Returns `true` if the value is a `Symbol`. Symbols cannot be created implicitly; `typeof` is the correct and only reliable check.

**Implementation**: `typeof value === 'symbol'`

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `any` | The value to check |

### Examples

```javascript
import { isSymbol } from 'barbero';

isSymbol(Symbol());         // true
isSymbol(Symbol('label'));  // true

isSymbol('symbol');         // false
isSymbol(1);                // false
isSymbol(null);             // false
```

---

## isBigInt

```typescript
isBigInt(value: any): boolean
```

Returns `true` if the value is a `BigInt`. Both the `BigInt()` constructor and the `n` literal suffix satisfy this check.

**Implementation**: `typeof value === 'bigint'`

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `any` | The value to check |

### Examples

```javascript
import { isBigInt } from 'barbero';

isBigInt(9n);         // true
isBigInt(BigInt(9));  // true

isBigInt(9);          // false
isBigInt('9');        // false
isBigInt(null);       // false
```

---

## isPrimitive

```typescript
isPrimitive(value: any): boolean
```

Returns `true` if the value is any JavaScript primitive: `string`, `number`, `boolean`, `symbol`, `bigint`, `null`, or `undefined`. Returns `false` for objects, arrays, and functions.

Note that `null` returns `true` — despite `typeof null === 'object'`, `null` is a primitive by specification.

**Implementation**: `value !== Object(value)`

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `any` | The value to check |

### Examples

```javascript
import { isPrimitive } from 'barbero';

isPrimitive(1);          // true
isPrimitive('hello');    // true
isPrimitive(true);       // true
isPrimitive(Symbol());   // true
isPrimitive(9n);         // true
isPrimitive(null);       // true  — null is a primitive
isPrimitive(undefined);  // true

isPrimitive({});         // false
isPrimitive([]);         // false
isPrimitive(() => {});   // false
```

---

## isClassInstance

```typescript
isClassInstance(value: any): boolean
```

Returns `true` if the value is an instance of a class whose constructor is not the base `Object`. This includes built-in types like `Date`, `Map`, `Set`, `RegExp`, and instances of user-defined classes. Returns `false` for plain objects (`{}`), arrays, `null`, and primitives.

**Implementation**: `value !== null && typeof value === 'object' && value.constructor !== Object && !Array.isArray(value)`

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `any` | The value to check |

### Examples

```javascript
import { isClassInstance } from 'barbero';

isClassInstance(new Date());   // true
isClassInstance(new Map());    // true
isClassInstance(new Set());    // true

class MyClass {}
isClassInstance(new MyClass()); // true

isClassInstance({});            // false — plain object (constructor is Object)
isClassInstance([]);            // false — arrays are excluded
isClassInstance(null);          // false
isClassInstance(42);            // false — primitive
```
