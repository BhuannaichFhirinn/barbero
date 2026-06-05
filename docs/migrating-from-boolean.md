# Migrating from `boolean` to Barbero

The [`boolean`](https://www.npmjs.com/package/boolean) npm package was officially deprecated in 2022. Its GitHub repository is no longer accessible, meaning security audits and dependency reviews cannot inspect the source. Barbero is a zero-dependency, actively maintained successor that covers the same functional ground — and extends it.

This guide covers everything you need to migrate.

---

## Why migrate?

| Issue | Detail |
|-------|--------|
| **Deprecated** | Officially deprecated with no recommended successor |
| **Source inaccessible** | GitHub repository returns 404 — source cannot be audited |
| **Supply chain risk** | Active packages depending on an inaccessible, deprecated library is a recognised supply chain risk |
| **No ESM** | `boolean` ships CommonJS only; Barbero ships CJS, ESM, and UMD |
| **No TypeScript declarations** | `boolean` declarations use `any`; Barbero uses `unknown` (stricter, safer) |

---

## Install

```bash
npm install barbero
npm uninstall boolean
```

---

## Import changes

```javascript
// Before (boolean)
const { boolean, isBooleanable } = require('boolean');
import { boolean, isBooleanable } from 'boolean';

// After (barbero)
const { parseBoolean, isBooleanable } = require('barbero');
import { parseBoolean, isBooleanable } from 'barbero';
```

The only rename is `boolean` → `parseBoolean`. `isBooleanable` is identical.

---

## Function mapping

| `boolean` | `barbero` | Notes |
|-----------|-----------|-------|
| `boolean(value)` | `parseBoolean(value)` | Functionally identical for all inputs. Renamed to avoid collision with the `boolean` TypeScript keyword. |
| `isBooleanable(value)` | `isBooleanable(value)` | Exact match — same name, same behaviour. |
| _(none)_ | `isTruthyString(value)` | New — returns `true` for recognised truthy representations only. |
| _(none)_ | `isFalseyString(value)` | New — returns `true` for recognised falsy representations only. |

---

## Behavioural parity

| Feature | `boolean` | `barbero` |
|---------|-----------|----------|
| Core truthy strings | `'true'`, `'t'`, `'yes'`, `'y'`, `'on'`, `'1'` | Same, plus extended vocabulary |
| Core falsy strings | `'false'`, `'f'`, `'no'`, `'n'`, `'off'`, `'0'` | Same, plus extended vocabulary |
| Case-insensitive matching | Yes (`.trim().toLowerCase()`) | Yes (same) |
| Whitespace trimming | Yes | Yes |
| Boxed primitives (`new Boolean()`, `new String()`, `new Number()`) | Yes | Yes (same technique) |
| `null` / `undefined` → `false` | Yes | Yes |
| Unrecognised values → `false` | Yes | Yes |
| TypeScript declarations | `(value: any) => boolean` | `(value: unknown) => boolean` — stricter |
| CJS output | Yes | Yes |
| ESM output | No | Yes — addition |
| UMD / browser `<script>` output | No | Yes — addition |
| Zero dependencies | Yes | Yes |

---

## Extended semantic values

Barbero recognises 42 semantic boolean representations (21 truthy, 21 falsy) compared to the 12 in `boolean`. All original values are included — Barbero is a strict superset.

### Truthy (21)

`true`, `1`, `'t'`, `'yes'`, `'y'`, `'on'`, `'enabled'`, `'active'`, `'allow'`, `'up'`, `'online'`, `'open'`, `'pass'`, `'ok'`, `'success'`, `'positive'`, `'valid'`, `'accepted'`, `'running'`, `'connected'`, `'available'`

### Falsy (21)

`false`, `0`, `'f'`, `'no'`, `'n'`, `'off'`, `'disabled'`, `'inactive'`, `'deny'`, `'down'`, `'offline'`, `'closed'`, `'fail'`, `'nok'`, `'failure'`, `'negative'`, `'invalid'`, `'rejected'`, `'stopped'`, `'disconnected'`, `'unavailable'`

All matching is case-insensitive and whitespace-trimmed, identical to `boolean`'s behaviour.

---

## TypeScript note

`boolean` declared its functions as `(value: any) => boolean`. Barbero uses `unknown` — a deliberate upgrade. `any` disables TypeScript's type checking at the call site; `unknown` preserves it. This is strictly safer and aligns with modern TypeScript best practice.

This is not a breaking change for migrating consumers — `unknown` is assignable from any value at the call site.

---

## New functions not in `boolean`

### `isTruthyString(value)`

Returns `true` if the value is one of the 24 recognised truthy representations. Complements `isTruthy` for string/number input forms.

```javascript
import { isTruthyString } from 'barbero';

isTruthyString('yes');      // true
isTruthyString('enabled');  // true
isTruthyString('no');       // false
```

### `isFalseyString(value)`

Returns `true` if the value is one of the 24 recognised falsy representations.

```javascript
import { isFalseyString } from 'barbero';

isFalseyString('no');        // true
isFalseyString('disabled');  // true
isFalseyString('yes');       // false
```
