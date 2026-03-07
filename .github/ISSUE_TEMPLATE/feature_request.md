---
name: Feature Request
about: Propose a new function for Barbero
title: "feat: <proposed function name>"
labels: enhancement
assignees: ''
---

## Proposed Function

What is the function name and signature?

```javascript
// e.g.
isInRange(value, min, max)
```

## Boolean Return

> Barbero's core contract: every function must return `true` or `false`.

Confirm that the proposed function always returns a boolean:

- [ ] Yes — this function always returns `true` or `false`

## Description

What does the function do? Describe its behaviour, including edge cases.

## Use Case

Why is this useful? What problem does it solve that existing Barbero functions do not?

## Proposed Implementation

If you have a suggested implementation, share it here. This is optional but speeds up review.

```javascript
/**
 * <description>
 * @param {*} value
 * @returns {boolean}
 * @example
 * myFunc(x); // true
 */
export const myFunc = (value) => /* ... */;
```

## Out-of-Scope Check

Please confirm the proposal does not fall into a category Barbero explicitly does not cover:

- [ ] Not a date comparison (use date-fns / dayjs)
- [ ] Not a string format validator (email, URL, UUID — use validator.js)
- [ ] Not DOM / browser-environment dependent
- [ ] Not async / Promise state dependent
- [ ] Does not duplicate an existing Barbero function

## Additional Context

Any other context, links, or examples that support this proposal.
