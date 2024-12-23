import { describe, it, expect } from 'vitest';
import {
  isNullOrUndefined,
  isEmptyArray,
  isEmptyObject,
} from '../../src/utilities/validation.js';

describe('isNullOrUndefined', () => {
  it('returns true for null or undefined', () => {
    expect(isNullOrUndefined(null)).toBe(true);
    expect(isNullOrUndefined(undefined)).toBe(true);
  });

  it('returns false for other values', () => {
    expect(isNullOrUndefined(0)).toBe(false);
    expect(isNullOrUndefined('')).toBe(false);
  });
});

describe('isEmptyArray', () => {
  it('returns true for empty arrays', () => {
    expect(isEmptyArray([])).toBe(true);
  });

  it('returns false for non-empty arrays', () => {
    expect(isEmptyArray([1])).toBe(false);
  });
});

describe('isEmptyObject', () => {
  it('returns true for empty objects', () => {
    expect(isEmptyObject({})).toBe(true);
  });

  it('returns false for non-empty objects', () => {
    expect(isEmptyObject({ key: 'value' })).toBe(false);
  });
});
