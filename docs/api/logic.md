# API Reference — Logic

The logic module provides Boolean gate operations. All functions return a `boolean`.

**Source**: `src/utilities/logic.js`

---

## xor

```typescript
xor(a: any, b: any): boolean
```

Performs an **XOR (exclusive OR)** operation. Returns `true` if exactly one of the two values is truthy — i.e. they differ in truthiness.

**Implementation**: `!!a !== !!b`

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `a` | `any` | The first value |
| `b` | `any` | The second value |

### Returns

`true` if exactly one of `a` or `b` is truthy, `false` if both are truthy or both are falsey.

### Truth Table

| `a` | `b` | `xor(a, b)` |
|-----|-----|-------------|
| `true` | `true` | `false` |
| `true` | `false` | `true` |
| `false` | `true` | `true` |
| `false` | `false` | `false` |

### Examples

```javascript
import { xor } from 'barbero';

xor(true, false);  // true  — one truthy, one falsey
xor(false, true);  // true  — one truthy, one falsey

xor(true, true);   // false — both truthy
xor(false, false); // false — both falsey

// Works with any truthy/falsey values, not just booleans
xor(1, 0);         // true
xor(1, 1);         // false
xor('', 'hello');  // true
xor('a', 'b');     // false — both truthy
```

---

## nand

```typescript
nand(a: any, b: any): boolean
```

Performs a **NAND (NOT AND)** operation. Returns `true` unless **both** values are truthy. NAND is the logical inverse of AND.

**Implementation**: `!(a && b)`

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `a` | `any` | The first value |
| `b` | `any` | The second value |

### Returns

`true` if at least one of `a` or `b` is falsey, `false` only when both are truthy.

### Truth Table

| `a` | `b` | `nand(a, b)` |
|-----|-----|--------------|
| `true` | `true` | `false` |
| `true` | `false` | `true` |
| `false` | `true` | `true` |
| `false` | `false` | `true` |

### Examples

```javascript
import { nand } from 'barbero';

nand(true, true);   // false — both truthy, NAND returns false
nand(true, false);  // true
nand(false, true);  // true
nand(false, false); // true

// Works with any truthy/falsey values
nand(1, 1);         // false
nand(1, 0);         // true
nand(0, 0);         // true
```

### Notes

NAND is a **functionally complete** logical gate — any Boolean function can be expressed using only NAND operations. In practice within Barbero it provides a convenient single-call alternative to `!(a && b)`.
