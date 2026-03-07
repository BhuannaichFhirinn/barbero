---
name: Bug Report
about: Report incorrect or unexpected behaviour in an existing Barbero function
title: "bug: <function name> — <short description>"
labels: bug
assignees: ''
---

## Function

Which exported function is affected?

```
e.g. isEqual, isEmptyObject, allPass
```

## Current Behaviour

What does the function currently return?

```javascript
// Example that reproduces the bug
import { isEqual } from 'barbero';

isEqual(/* your input */); // returns: ???
```

## Expected Behaviour

What should the function return, and why?

```javascript
isEqual(/* your input */); // should return: true / false
```

## Barbero Version

```
e.g. 0.1.0-alpha.7
```

## Environment

- **Runtime**: Node.js / Browser / Other
- **Module format**: ESM / CJS / UMD
- **Node version** (if applicable):

## Additional Context

Any other detail that might be relevant — edge cases, related functions, links to the spec you are following.
