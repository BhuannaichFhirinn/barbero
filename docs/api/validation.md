# API Reference — Validation

The validation module provides type-checking and emptiness utilities. All functions return a `boolean`.

**Source**: `src/utilities/validation.js`

---

## isNullOrUndefined

```typescript
isNullOrUndefined(value: any): boolean
```

Returns `true` if the value is strictly `null` or strictly `undefined`.

**Implementation**: `value === null || value === undefined`

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `any` | The value to check |

### Examples

```javascript
import { isNullOrUndefined } from 'barbero';

isNullOrUndefined(null);      // true
isNullOrUndefined(undefined); // true

isNullOrUndefined(0);         // false
isNullOrUndefined('');        // false
isNullOrUndefined(false);     // false
isNullOrUndefined(NaN);       // false
```

---

## isUndefinedNullOrEmpty

```typescript
isUndefinedNullOrEmpty(value: any): boolean
```

Returns `true` if the value is `undefined`, `null`, `NaN`, an empty string (or whitespace-only), an empty array, or an empty plain object. This is the broadest "is this value meaningless?" check in the library.

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `any` | The value to check |

### Returns

`true` for any of the following:
- `undefined`
- `null`
- `NaN`
- A string containing only whitespace (including `''`)
- An array with zero elements
- A plain object (`{}`) with no keys

### Examples

```javascript
import { isUndefinedNullOrEmpty } from 'barbero';

// Empty / absent values
isUndefinedNullOrEmpty(undefined);  // true
isUndefinedNullOrEmpty(null);       // true
isUndefinedNullOrEmpty(NaN);        // true
isUndefinedNullOrEmpty('');         // true
isUndefinedNullOrEmpty('   ');      // true — whitespace-only
isUndefinedNullOrEmpty([]);         // true
isUndefinedNullOrEmpty({});         // true

// Non-empty values
isUndefinedNullOrEmpty(0);          // false — 0 is a meaningful value
isUndefinedNullOrEmpty(false);      // false — false is a meaningful value
isUndefinedNullOrEmpty('hello');    // false
isUndefinedNullOrEmpty([1, 2]);     // false
isUndefinedNullOrEmpty({ a: 1 });   // false
```

### Notes

- `0` and `false` return `false` — they are meaningful values, not "empty"
- Only plain objects (`{}` constructor) trigger the empty-object check; class instances are not treated as empty even if they have no enumerable keys

---

## isEmptyArray

```typescript
isEmptyArray(array: any): boolean
```

Returns `true` if the value is an array with zero elements.

**Implementation**: `Array.isArray(array) && array.length === 0`

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `array` | `any` | The value to check |

### Examples

```javascript
import { isEmptyArray } from 'barbero';

isEmptyArray([]);          // true

isEmptyArray([1, 2, 3]);   // false
isEmptyArray('');          // false — not an array
isEmptyArray({});          // false — not an array
isEmptyArray(null);        // false
```

---

## isEmptyObject

```typescript
isEmptyObject(object: any): boolean
```

Returns `true` if the value is an object with no enumerable keys.

**Implementation**: `object && typeof object === 'object' && Object.keys(object).length === 0`

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `object` | `any` | The value to check |

### Examples

```javascript
import { isEmptyObject } from 'barbero';

isEmptyObject({});            // true

isEmptyObject({ a: 1 });      // false
isEmptyObject([]);            // false — arrays are not plain objects here
isEmptyObject(null);          // false
isEmptyObject('');            // false
```

---

## isArray

```typescript
isArray(value: any): boolean
```

Returns `true` if the value is an array.

**Implementation**: `Array.isArray(value)`

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `any` | The value to check |

### Examples

```javascript
import { isArray } from 'barbero';

isArray([]);           // true
isArray([1, 2, 3]);    // true

isArray({});           // false
isArray('hello');      // false
isArray(null);         // false
```

---

## isObject

```typescript
isObject(value: any): boolean
```

Returns `true` if the value is a non-null object and **not** an array.

**Implementation**: `value !== null && typeof value === 'object' && !Array.isArray(value)`

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `any` | The value to check |

### Examples

```javascript
import { isObject } from 'barbero';

isObject({ a: 1 });     // true
isObject({});           // true
isObject(new Date());   // true — Date is an object

isObject([1, 2, 3]);    // false — arrays are excluded
isObject(null);         // false — null is excluded
isObject('hello');      // false
isObject(42);           // false
```

---

## isFunction

```typescript
isFunction(value: any): boolean
```

Returns `true` if the value is a function.

**Implementation**: `typeof value === 'function'`

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `any` | The value to check |

### Examples

```javascript
import { isFunction } from 'barbero';

isFunction(() => {});          // true
isFunction(function() {});     // true
isFunction(Math.max);          // true
isFunction(class MyClass {});  // true — classes are functions

isFunction(123);               // false
isFunction({});                // false
isFunction(null);              // false
```

---

## isDate

```typescript
isDate(value: any): boolean
```

Returns `true` if the value is a `Date` object.

**Implementation**: `Object.prototype.toString.call(value) === '[object Date]'`

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `any` | The value to check |

### Examples

```javascript
import { isDate } from 'barbero';

isDate(new Date());             // true
isDate(new Date('2024-01-01')); // true

isDate('2024-01-01');           // false — string, not a Date
isDate(1234567890);             // false — timestamp number, not a Date
isDate(null);                   // false
```

---

## isRegExp

```typescript
isRegExp(value: any): boolean
```

Returns `true` if the value is a regular expression.

**Implementation**: `Object.prototype.toString.call(value) === '[object RegExp]'`

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `any` | The value to check |

### Examples

```javascript
import { isRegExp } from 'barbero';

isRegExp(/abc/);          // true
isRegExp(new RegExp('abc')); // true

isRegExp('abc');          // false — string, not a RegExp
isRegExp({});             // false
isRegExp(null);           // false
```
