# CompKit

**CompKit** is a lightweight JavaScript utility library providing tools for Boolean evaluations, comparisons, and logical utilities. Simplify your true/false logic with this modern, easy-to-use toolkit.

---

## Features

- **Lightweight**: Small and efficient, designed to integrate seamlessly with your projects.
- **Boolean Utilities**: Perform truthy/falsey checks, comparisons, and validations.
- **Easy to Use**: Clear and intuitive functions for common tasks.
- **Tree-shakable**: Import only what you need to minimize bundle size.

---

## Installation

Install CompKit via NPM:

```bash
npm install compkit
```

Or using Yarn:

```bash
yarn add compkit
```

---

## Usage

Import and use individual functions or the entire library:

### Example 1: Truthy/Falsey Checks

```javascript
import { isTruthy, isFalsey } from 'compkit';

console.log(isTruthy(1)); // true
console.log(isFalsey(0)); // true
```

### Example 2: Null/Undefined/Empty Checks

```javascript
import { isNullOrUndefined, isEmptyArray } from 'compkit';

console.log(isNullOrUndefined(null)); // true
console.log(isEmptyArray([])); // true
console.log(isEmptyArray([1, 2])); // false
```

### Example 3: Comparisons

```javascript
import { isEqual, isStrictEqual } from 'compkit';

console.log(isEqual({ a: 1 }, { a: 1 })); // true
console.log(isStrictEqual(1, '1')); // false
```

### Example 4: Logical Operations

```javascript
import { xor, nand } from 'compkit';

console.log(xor(true, false)); // true
console.log(nand(true, true)); // false
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

---

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on [GitHub](https://github.com/your-username/compkit).

---

## License

CompKit is licensed under the [MIT License](LICENSE).

---

## Acknowledgements

Inspired by the need for clear and simple Boolean utilities in JavaScript.
