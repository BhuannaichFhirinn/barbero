import { describe, it, expect } from 'vitest';
import { isTruthy, isFalsey } from '../../src/core/truthy.js';

describe('isTruthy', () => {
  it('returns true for truthy values', () => {
    expect(isTruthy(1)).toBe(true);
    expect(isTruthy('hello')).toBe(true);
    expect(isTruthy([])).toBe(true);
  });

  it('returns false for falsy values', () => {
    expect(isTruthy(0)).toBe(false);
    expect(isTruthy(null)).toBe(false);
  });
});

describe('isFalsey', () => {
  it('returns true for falsy values', () => {
    expect(isFalsey(0)).toBe(true);
    expect(isFalsey(null)).toBe(true);
  });

  it('returns false for truthy values', () => {
    expect(isFalsey(1)).toBe(false);
    expect(isFalsey('hello')).toBe(false);
  });
});
