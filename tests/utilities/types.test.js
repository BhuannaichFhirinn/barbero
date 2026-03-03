import { describe, it, expect } from 'vitest';
import {
  isNumber,
  isString,
  isBoolean,
  isSymbol,
  isBigInt,
  isPrimitive,
  isClassInstance,
} from '../../src/utilities/types.js';

describe('isNumber', () => {
  it('returns true for an integer', () => {
    expect(isNumber(1)).toBe(true);
  });

  it('returns true for a float', () => {
    expect(isNumber(3.14)).toBe(true);
  });

  it('returns true for NaN — NaN has type number', () => {
    expect(isNumber(NaN)).toBe(true);
  });

  it('returns true for Infinity', () => {
    expect(isNumber(Infinity)).toBe(true);
  });

  it('returns false for a numeric string', () => {
    expect(isNumber('1')).toBe(false);
  });

  it('returns false for a boolean', () => {
    expect(isNumber(true)).toBe(false);
  });

  it('returns false for null', () => {
    expect(isNumber(null)).toBe(false);
  });

  it('returns false for undefined', () => {
    expect(isNumber(undefined)).toBe(false);
  });
});

describe('isString', () => {
  it('returns true for a non-empty string', () => {
    expect(isString('hello')).toBe(true);
  });

  it('returns true for an empty string', () => {
    expect(isString('')).toBe(true);
  });

  it('returns false for a number', () => {
    expect(isString(1)).toBe(false);
  });

  it('returns false for a boxed String object', () => {
    expect(isString(new String(''))).toBe(false);
  });

  it('returns false for null', () => {
    expect(isString(null)).toBe(false);
  });
});

describe('isBoolean', () => {
  it('returns true for true', () => {
    expect(isBoolean(true)).toBe(true);
  });

  it('returns true for false', () => {
    expect(isBoolean(false)).toBe(true);
  });

  it('returns false for 1', () => {
    expect(isBoolean(1)).toBe(false);
  });

  it('returns false for 0', () => {
    expect(isBoolean(0)).toBe(false);
  });

  it('returns false for a boxed Boolean object', () => {
    expect(isBoolean(new Boolean(false))).toBe(false);
  });

  it('returns false for a string', () => {
    expect(isBoolean('true')).toBe(false);
  });
});

describe('isSymbol', () => {
  it('returns true for a Symbol', () => {
    expect(isSymbol(Symbol())).toBe(true);
  });

  it('returns true for a labelled Symbol', () => {
    expect(isSymbol(Symbol('label'))).toBe(true);
  });

  it('returns false for a string', () => {
    expect(isSymbol('sym')).toBe(false);
  });

  it('returns false for a number', () => {
    expect(isSymbol(1)).toBe(false);
  });

  it('returns false for null', () => {
    expect(isSymbol(null)).toBe(false);
  });
});

describe('isBigInt', () => {
  it('returns true for a BigInt literal', () => {
    expect(isBigInt(9n)).toBe(true);
  });

  it('returns true for BigInt() constructor', () => {
    expect(isBigInt(BigInt(9))).toBe(true);
  });

  it('returns false for a regular number', () => {
    expect(isBigInt(9)).toBe(false);
  });

  it('returns false for a string', () => {
    expect(isBigInt('9')).toBe(false);
  });

  it('returns false for null', () => {
    expect(isBigInt(null)).toBe(false);
  });
});

describe('isPrimitive', () => {
  it('returns true for a number', () => {
    expect(isPrimitive(1)).toBe(true);
  });

  it('returns true for a string', () => {
    expect(isPrimitive('hello')).toBe(true);
  });

  it('returns true for a boolean', () => {
    expect(isPrimitive(true)).toBe(true);
  });

  it('returns true for a Symbol', () => {
    expect(isPrimitive(Symbol())).toBe(true);
  });

  it('returns true for a BigInt', () => {
    expect(isPrimitive(9n)).toBe(true);
  });

  it('returns true for null — null is a primitive', () => {
    expect(isPrimitive(null)).toBe(true);
  });

  it('returns true for undefined', () => {
    expect(isPrimitive(undefined)).toBe(true);
  });

  it('returns false for a plain object', () => {
    expect(isPrimitive({})).toBe(false);
  });

  it('returns false for an array', () => {
    expect(isPrimitive([])).toBe(false);
  });

  it('returns false for a function', () => {
    expect(isPrimitive(() => {})).toBe(false);
  });
});

describe('isClassInstance', () => {
  it('returns true for a Date instance', () => {
    expect(isClassInstance(new Date())).toBe(true);
  });

  it('returns true for a Map instance', () => {
    expect(isClassInstance(new Map())).toBe(true);
  });

  it('returns true for a custom class instance', () => {
    class MyClass {}
    expect(isClassInstance(new MyClass())).toBe(true);
  });

  it('returns false for a plain object', () => {
    expect(isClassInstance({})).toBe(false);
  });

  it('returns false for an array', () => {
    expect(isClassInstance([])).toBe(false);
  });

  it('returns false for null', () => {
    expect(isClassInstance(null)).toBe(false);
  });

  it('returns false for a primitive', () => {
    expect(isClassInstance(42)).toBe(false);
  });

  it('returns false for undefined', () => {
    expect(isClassInstance(undefined)).toBe(false);
  });
});
