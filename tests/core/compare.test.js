import { describe, it, expect } from 'vitest';
import { isEqual, isStrictEqual } from '../../src/core/compare.js';

describe('isEqual', () => {
  it('returns true for loosely equal values', () => {
    expect(isEqual(1, '1')).toBe(false);
    expect(isEqual('true', true)).toBe(false);
  });

  it('returns false for non-equal values', () => {
    expect(isEqual(1, 2)).toBe(false);
  });
});

describe('isStrictEqual', () => {
  it('returns true for strictly equal values', () => {
    expect(isStrictEqual(1, 1)).toBe(true);
  });

  it('returns false for loosely equal values', () => {
    expect(isStrictEqual(1, '1')).toBe(false);
  });
});
