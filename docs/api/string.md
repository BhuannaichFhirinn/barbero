# API Reference — String Content

The string module provides pure boolean predicates for string content checks. All functions return a `boolean`. Format validation (email, URL, UUID, IP address, credit card) is out of scope — use [validator.js](https://github.com/validatorjs/validator.js) for that.

All functions return `false` for non-string input rather than throwing.

**Source**: `src/utilities/string.js`

---

## isNumericString

```typescript
isNumericString(value: any): boolean
```

Returns `true` if the value is a non-empty string that converts to a valid number. Whitespace-only strings return `false` (trimmed before conversion check).

> **Note**: Hex strings like `'0x10'` return `true` because `Number('0x10')` evaluates to `16`.

**Implementation**: `typeof value === 'string' && value.trim().length > 0 && !Number.isNaN(Number(value))`

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `any` | The value to check |

### Examples

```javascript
import { isNumericString } from 'barbero';

isNumericString('42');    // true
isNumericString('3.14');  // true
isNumericString('-7');    // true

isNumericString('abc');   // false
isNumericString('');      // false
isNumericString(' ');     // false
isNumericString(42);      // false — not a string
```

---

## isAlpha

```typescript
isAlpha(value: any): boolean
```

Returns `true` if the value is a string containing only ASCII letters (`a-z`, `A-Z`). Empty string returns `false`.

**Implementation**: `typeof value === 'string' && /^[a-zA-Z]+$/.test(value)`

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `any` | The value to check |

### Examples

```javascript
import { isAlpha } from 'barbero';

isAlpha('hello');   // true
isAlpha('Hello');   // true

isAlpha('hello1');  // false — contains a digit
isAlpha('hello!');  // false — contains punctuation
isAlpha('');        // false — empty string
```

---

## isAlphanumeric

```typescript
isAlphanumeric(value: any): boolean
```

Returns `true` if the value is a string containing only ASCII letters and digits (`a-z`, `A-Z`, `0-9`). Empty string returns `false`.

**Implementation**: `typeof value === 'string' && /^[a-zA-Z0-9]+$/.test(value)`

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `any` | The value to check |

### Examples

```javascript
import { isAlphanumeric } from 'barbero';

isAlphanumeric('hello1');   // true
isAlphanumeric('abc123');   // true

isAlphanumeric('hello!');   // false — contains punctuation
isAlphanumeric('hello world'); // false — contains a space
isAlphanumeric('');         // false — empty string
```

---

## isUpperCase

```typescript
isUpperCase(value: any): boolean
```

Returns `true` if the value is a non-empty string where all characters are upper case. Strings with no alphabetical characters (e.g. `'123'`) return `true` because `'123' === '123'.toUpperCase()`.

**Implementation**: `typeof value === 'string' && value.length > 0 && value === value.toUpperCase()`

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `any` | The value to check |

### Examples

```javascript
import { isUpperCase } from 'barbero';

isUpperCase('HELLO');  // true
isUpperCase('123');    // true  — no lower-case characters present

isUpperCase('Hello');  // false
isUpperCase('hello');  // false
isUpperCase('');       // false — guarded by length check
```

---

## isLowerCase

```typescript
isLowerCase(value: any): boolean
```

Returns `true` if the value is a non-empty string where all characters are lower case. Strings with no alphabetical characters (e.g. `'123'`) return `true` because `'123' === '123'.toLowerCase()`.

**Implementation**: `typeof value === 'string' && value.length > 0 && value === value.toLowerCase()`

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `any` | The value to check |

### Examples

```javascript
import { isLowerCase } from 'barbero';

isLowerCase('hello');  // true
isLowerCase('123');    // true  — no upper-case characters present

isLowerCase('Hello');  // false
isLowerCase('HELLO');  // false
isLowerCase('');       // false — guarded by length check
```

---

## isPalindrome

```typescript
isPalindrome(value: any): boolean
```

Returns `true` if the value is a string that reads the same forwards and backwards. Comparison is case-sensitive. Empty string returns `true` (vacuously a palindrome).

**Implementation**: `typeof value === 'string' && value === value.split('').reverse().join('')`

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `any` | The value to check |

### Examples

```javascript
import { isPalindrome } from 'barbero';

isPalindrome('racecar');  // true
isPalindrome('madam');    // true
isPalindrome('A');        // true  — single character
isPalindrome('');         // true  — empty string is vacuously a palindrome

isPalindrome('Racecar');  // false — case-sensitive
isPalindrome('hello');    // false
```

---

## isBlankString

```typescript
isBlankString(value: any): boolean
```

Returns `true` if the value is a string that is empty or contains only whitespace.

**Implementation**: `typeof value === 'string' && value.trim().length === 0`

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `any` | The value to check |

### Examples

```javascript
import { isBlankString } from 'barbero';

isBlankString('');     // true
isBlankString('   ');  // true
isBlankString('\t');   // true

isBlankString('hello');    // false
isBlankString(' hello ');  // false
isBlankString(null);       // false — not a string
```

---

## stringStartsWith

```typescript
stringStartsWith(value: any, prefix: any): boolean
```

Returns `true` if `value` begins with `prefix`. Both arguments must be strings. An empty prefix always returns `true` — native `String.prototype.startsWith` behaviour.

**Implementation**: `typeof value === 'string' && typeof prefix === 'string' && value.startsWith(prefix)`

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `any` | The string to check |
| `prefix` | `any` | The prefix to look for |

### Examples

```javascript
import { stringStartsWith } from 'barbero';

stringStartsWith('hello', 'hel');    // true
stringStartsWith('hello', '');      // true  — empty prefix matches everything

stringStartsWith('hello', 'world'); // false
stringStartsWith(123, 'hel');       // false — non-string value
stringStartsWith('hello', 123);     // false — non-string prefix
```

---

## stringEndsWith

```typescript
stringEndsWith(value: any, suffix: any): boolean
```

Returns `true` if `value` ends with `suffix`. Both arguments must be strings. An empty suffix always returns `true` — native `String.prototype.endsWith` behaviour.

**Implementation**: `typeof value === 'string' && typeof suffix === 'string' && value.endsWith(suffix)`

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `any` | The string to check |
| `suffix` | `any` | The suffix to look for |

### Examples

```javascript
import { stringEndsWith } from 'barbero';

stringEndsWith('hello', 'llo');    // true
stringEndsWith('hello', '');      // true  — empty suffix matches everything

stringEndsWith('hello', 'world'); // false
stringEndsWith(123, 'llo');       // false — non-string value
stringEndsWith('hello', 123);     // false — non-string suffix
```

---

## stringIncludes

```typescript
stringIncludes(value: any, substring: any): boolean
```

Returns `true` if `value` contains `substring`. Both arguments must be strings. An empty substring always returns `true` — native `String.prototype.includes` behaviour.

**Implementation**: `typeof value === 'string' && typeof substring === 'string' && value.includes(substring)`

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `any` | The string to check |
| `substring` | `any` | The substring to search for |

### Examples

```javascript
import { stringIncludes } from 'barbero';

stringIncludes('hello', 'ell');  // true
stringIncludes('hello', '');    // true  — empty substring matches everything

stringIncludes('hello', 'xyz'); // false
stringIncludes(123, 'ell');     // false — non-string value
stringIncludes('hello', 123);   // false — non-string substring
```
