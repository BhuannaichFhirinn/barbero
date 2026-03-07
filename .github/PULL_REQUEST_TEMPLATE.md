## Summary

What does this PR do? Link to the relevant issue if one exists.

Closes #

---

## Type of Change

- [ ] Bug fix
- [ ] New function
- [ ] Documentation update
- [ ] Refactor / internal improvement
- [ ] Release / version bump

---

## Checklist

### Boolean Return Contract
- [ ] Every new or modified function returns `true` or `false` — no exceptions

### Implementation
- [ ] Pure function — no side effects, no mutation of inputs
- [ ] Arrow function with `export const`
- [ ] All relevant edge cases handled
- [ ] No stub implementations, hardcoded returns, or `// TODO` comments

### Documentation
- [ ] JSDoc added with `@param`, `@returns`, and at least one `@example`
- [ ] `README.md` API section updated (if adding a publicly documented function)

### Exports
- [ ] Named export added to `src/index.js`
- [ ] Function added to the `Barbero` default export object in `src/index.js`

### Tests
- [ ] Test file exists in `tests/` mirroring the source path
- [ ] Positive case covered
- [ ] Negative / edge cases covered
- [ ] `npm test` passes locally

### Breaking Changes
- [ ] This PR contains no breaking changes to existing exported functions
- [ ] If it does, breaking changes are explicitly described below

---

## Breaking Changes (if any)

_Describe any breaking changes here, or delete this section._

---

## Additional Notes

_Anything else the reviewer should know._
