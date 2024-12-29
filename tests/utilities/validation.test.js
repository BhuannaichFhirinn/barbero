import { describe, it, expect } from 'vitest';
import {
  isNullOrUndefined,
  isEmptyArray,
  isEmptyObject,
  isArray,
  isObject,
  isFunction,
  isDate,
  isRegExp,
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

describe('isArray', () => {
  it('returns true for arrays', () => {
    expect(isArray([1, 2, 3])).toBe(true);
  });

  it('returns false for non-arrays', () => {
    expect(isArray('hello')).toBe(false);
    expect(isArray({})).toBe(false);
  });
});

describe('isObject', () => {
  it('returns true for objects', () => {
    expect(isObject({ key: 'value' })).toBe(true);
  });

  it('returns false for non-objects', () => {
    expect(isObject([1, 2, 3])).toBe(false);
    expect(isObject(null)).toBe(false);
  });
});

describe('isFunction', () => {
  it('returns true for functions', () => {
    expect(isFunction(() => {})).toBe(true);
  });

  it('returns false for non-functions', () => {
    expect(isFunction(123)).toBe(false);
    expect(isFunction({})).toBe(false);
  });
});

describe('isDate', () => {
  it('returns true for Date objects', () => {
    expect(isDate(new Date())).toBe(true);
  });

  it('returns false for non-Date objects', () => {
    expect(isDate('2023-01-01')).toBe(false);
    expect(isDate({})).toBe(false);
  });
});

describe('isRegExp', () => {
  it('returns true for regular expressions', () => {
    expect(isRegExp(/abc/)).toBe(true);
  });

  it('returns false for non-regular expressions', () => {
    expect(isRegExp('abc')).toBe(false);
    expect(isRegExp({})).toBe(false);
  });
});
