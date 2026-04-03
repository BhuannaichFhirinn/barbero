# Barbero

**Barbero** is a lightweight JavaScript utility library providing tools for Boolean evaluations, comparisons, logical operations, and predicate utilities. Simplify your true/false logic with this modern, easy-to-use toolkit.

---

## Features

- **Lightweight**: Small and efficient, designed to integrate seamlessly with your projects.
- **Boolean Utilities**: Perform truthy/falsey checks, comparisons, validations, and predicate compositions.
- **Easy to Use**: Clear and intuitive functions for common tasks.
- **Tree-shakable**: Import only what you need to minimize bundle size.

---

## Installation

Install Barbero via NPM:

```bash
npm install barbero
```

Or using Yarn:

```bash
yarn add barbero
```

---

## Usage

Import and use individual functions or the entire library:

### Example 1: Truthy/Falsey Checks

```javascript
import { isTruthy, isFalsey } from 'barbero';

console.log(isTruthy(1)); // true
console.log(isFalsey(0)); // true
```

### Example 2: Null/Undefined/Empty Checks

```javascript
import { isNullOrUndefined, isEmptyArray } from 'barbero';

console.log(isNullOrUndefined(null)); // true
console.log(isEmptyArray([])); // true
console.log(isEmptyArray([1, 2])); // false
```

### Example 3: Comparisons

```javascript
import { isEqual, isStrictEqual } from 'barbero';

console.log(isEqual({ a: 1 }, { a: 1 })); // true
console.log(isStrictEqual(1, '1')); // false
```

### Example 4: Logical Operations

```javascript
import { xor, nand } from 'barbero';

console.log(xor(true, false)); // true
console.log(nand(true, true)); // false
```

### Example 5: Predicate Utilities

```javascript
import { allPass, anyPass, nonePass, composePredicates } from 'barbero';

const isPositive = (x) => x > 0;
const isEven = (x) => x % 2 === 0;

const isPositiveAndEven = allPass(isPositive, isEven);
console.log(isPositiveAndEven(4)); // true
console.log(isPositiveAndEven(-2)); // false

const isPositiveOrEven = anyPass(isPositive, isEven);
console.log(isPositiveOrEven(-2)); // true

const isNeitherPositiveNorEven = nonePass(isPositive, isEven);
console.log(isNeitherPositiveNorEven(-3)); // true

const customCheck = composePredicates(isPositive, isEven);
console.log(customCheck(4)); // true
console.log(customCheck(3)); // false
```

---

## API

### Core Functions

#### `isTruthy(value)`
Returns `true` if the value is truthy.

```javascript
isTruthy(1); // true
isTruthy(0); // false
```

#### `isFalsey(value)`
Returns `true` if the value is falsey.

```javascript
isFalsey(0); // true
isFalsey('hello'); // false
```

### Validation Functions

#### `isNullOrUndefined(value)`
Returns `true` if the value is `null` or `undefined`.

```javascript
isNullOrUndefined(null); // true
isNullOrUndefined(undefined); // true
isNullOrUndefined(''); // false
```

#### `isUndefinedNullOrEmpty(value)`
Returns `true` if the value is `undefined`, `null`, `NaN`, an empty string (including whitespace-only), an empty array, or an empty plain object.

```javascript
isUndefinedNullOrEmpty(null);    // true
isUndefinedNullOrEmpty('');      // true
isUndefinedNullOrEmpty([]);      // true
isUndefinedNullOrEmpty({});      // true
isUndefinedNullOrEmpty(0);       // false
isUndefinedNullOrEmpty(false);   // false
```

#### `isEmptyArray(array)`
Returns `true` if the array is empty.

```javascript
isEmptyArray([]); // true
isEmptyArray([1]); // false
```

#### `isEmptyObject(object)`
Returns `true` if the object has no keys.

```javascript
isEmptyObject({}); // true
isEmptyObject({ a: 1 }); // false
```

#### `isArray(value)`
Returns `true` if the value is an array.

```javascript
isArray([1, 2, 3]); // true
isArray('hello');   // false
```

#### `isObject(value)`
Returns `true` if the value is a non-null, non-array object.

```javascript
isObject({ key: 'value' }); // true
isObject([1, 2, 3]);        // false
isObject(null);             // false
```

#### `isFunction(value)`
Returns `true` if the value is a function.

```javascript
isFunction(() => {});  // true
isFunction(123);       // false
```

#### `isDate(value)`
Returns `true` if the value is a `Date` instance.

```javascript
isDate(new Date());    // true
isDate('2026-01-01'); // false
```

#### `isRegExp(value)`
Returns `true` if the value is a regular expression.

```javascript
isRegExp(/abc/);  // true
isRegExp('abc');  // false
```

### Type System Functions

#### `isNumber(value)`
Returns `true` if the value has type `'number'` (including `NaN`).

```javascript
isNumber(42);    // true
isNumber(NaN);   // true
isNumber('42');  // false
```

#### `isString(value)`
Returns `true` for primitive strings. Returns `false` for boxed `String` objects.

```javascript
isString('hello');          // true
isString(new String('hi')); // false
```

#### `isBoolean(value)`
Returns `true` for primitive booleans. Returns `false` for boxed `Boolean` objects.

```javascript
isBoolean(true);               // true
isBoolean(new Boolean(false)); // false
```

#### `isSymbol(value)`
Returns `true` for Symbol values.

```javascript
isSymbol(Symbol());       // true
isSymbol('symbol');       // false
```

#### `isBigInt(value)`
Returns `true` for BigInt values.

```javascript
isBigInt(9n);        // true
isBigInt(BigInt(9)); // true
isBigInt(9);         // false
```

#### `isPrimitive(value)`
Returns `true` for all primitive types including `null` and `undefined`.

```javascript
isPrimitive(1);         // true
isPrimitive(null);      // true
isPrimitive(undefined); // true
isPrimitive({});        // false
```

#### `isClassInstance(value)`
Returns `true` for instances of non-`Object` constructors (e.g. `Date`, `Map`, custom classes).

```javascript
isClassInstance(new Date()); // true
isClassInstance({});         // false
isClassInstance([]);         // false
```

### Number / Math Functions

#### `isInteger(value)`
Returns `true` if the value is an integer. Does not coerce — strings and floats return `false`.

```javascript
isInteger(4);        // true
isInteger(4.5);      // false
isInteger(NaN);      // false
```

#### `isFloat(value)`
Returns `true` if the value is a finite number that is not an integer.

```javascript
isFloat(4.5);      // true
isFloat(4);        // false
isFloat(Infinity); // false
```

#### `isPositive(value)`
Returns `true` if the value is strictly greater than zero. `0`, `-0`, and `NaN` return `false`.

```javascript
isPositive(1);    // true
isPositive(0);    // false
isPositive(NaN);  // false
```

#### `isNegative(value)`
Returns `true` if the value is strictly less than zero. `-0` returns `false`.

```javascript
isNegative(-1);  // true
isNegative(0);   // false
isNegative(-0);  // false — -0 < 0 is false in JavaScript
```

#### `isZero(value)`
Returns `true` if the value is `0` or `-0`.

```javascript
isZero(0);   // true
isZero(-0);  // true
isZero(1);   // false
```

#### `isEven(value)`
Returns `true` if the value is an even integer. Non-integers return `false`.

```javascript
isEven(4);    // true
isEven(3);    // false
isEven(2.5);  // false
```

#### `isOdd(value)`
Returns `true` if the value is an odd integer. Non-integers return `false`.

```javascript
isOdd(3);    // true
isOdd(4);    // false
isOdd(3.1);  // false
```

#### `isInRange(value, min, max)`
Returns `true` if the value is within `[min, max]`, inclusive on both bounds.

```javascript
isInRange(5, 1, 10);  // true
isInRange(1, 1, 10);  // true  — inclusive
isInRange(11, 1, 10); // false
```

#### `isDivisibleBy(value, divisor)`
Returns `true` if `value` is an integer evenly divisible by `divisor`. Guards against division by zero and non-integer inputs.

```javascript
isDivisibleBy(9, 3);   // true
isDivisibleBy(9, 0);   // false — division by zero guard
isDivisibleBy(9.5, 3); // false — non-integer value
```

#### `isFiniteNumber(value)`
Returns `true` if the value is a finite number. Returns `false` for `NaN`, `Infinity`, `-Infinity`, and non-numbers.

```javascript
isFiniteNumber(42);       // true
isFiniteNumber(Infinity); // false
isFiniteNumber(NaN);      // false
```

#### `isNaNValue(value)`
Returns `true` if the value is exactly `NaN`. Uses `Number.isNaN` — does not coerce, so `isNaNValue(undefined)` returns `false`.

```javascript
isNaNValue(NaN);        // true
isNaNValue(undefined);  // false — unlike global isNaN, no coercion
isNaNValue(42);         // false
```

### Comparison Functions

#### `isEqual(a, b)`
Performs deep equality comparison between two values.

```javascript
isEqual({ a: 1 }, { a: 1 }); // true
isEqual([1, 2], [1, 2]); // true
isEqual(1, '1'); // false
```

#### `isStrictEqual(a, b)`
Performs strict equality comparison (no type coercion).

```javascript
isStrictEqual(1, 1); // true
isStrictEqual(1, '1'); // false
```

### Logical Functions

#### `xor(a, b)`
Returns `true` if only one of the arguments is `true`.

```javascript
xor(true, false); // true
xor(true, true); // false
```

#### `nand(a, b)`
Returns `true` if **not both** arguments are `true`.

```javascript
nand(true, true); // false
nand(true, false); // true
```

### Predicate Utilities

#### `allPass(...predicates)`
Returns a function that checks if all predicates pass for the given input.

```javascript
const isPositive = (x) => x > 0;
const isEven = (x) => x % 2 === 0;
const isPositiveAndEven = allPass(isPositive, isEven);
console.log(isPositiveAndEven(4)); // true
console.log(isPositiveAndEven(-2)); // false
```

#### `anyPass(...predicates)`
Returns a function that checks if any predicate passes for the given input.

```javascript
const isPositiveOrEven = anyPass(isPositive, isEven);
console.log(isPositiveOrEven(-2)); // true
console.log(isPositiveOrEven(-3)); // false
```

#### `nonePass(...predicates)`
Returns a function that checks if no predicates pass for the given input.

```javascript
const isNeitherPositiveNorEven = nonePass(isPositive, isEven);
console.log(isNeitherPositiveNorEven(-3)); // true
console.log(isNeitherPositiveNorEven(4)); // false
```

#### `composePredicates(...predicates)`
Composes multiple predicates into a single predicate function that tests them sequentially.

```javascript
const customCheck = composePredicates(isPositive, isEven);
console.log(customCheck(4)); // true
console.log(customCheck(3)); // false
```

---

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on [GitHub](https://github.com/BhuannaichFhirinn/barbero).

---

## License

Barbero is licensed under the [MIT License](LICENSE).

---

## Acknowledgements

Inspired by the need for clear and simple Boolean utilities in JavaScript.

