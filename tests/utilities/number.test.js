import { describe, it, expect } from 'vitest';
import {
  isInteger,
  isFloat,
  isPositive,
  isNegative,
  isZero,
  isEven,
  isOdd,
  isInRange,
  isDivisibleBy,
  isFiniteNumber,
  isNaNValue,
} from '../../src/utilities/number.js';

describe('isInteger', () => {
  it('returns true for integers', () => {
    expect(isInteger(4)).toBe(true);
    expect(isInteger(0)).toBe(true);
    expect(isInteger(-10)).toBe(true);
  });

  it('returns false for non-integers', () => {
    expect(isInteger(4.5)).toBe(false);
    expect(isInteger('4')).toBe(false);
  });

  it('returns false for NaN and Infinity', () => {
    expect(isInteger(NaN)).toBe(false);
    expect(isInteger(Infinity)).toBe(false);
  });
});

describe('isFloat', () => {
  it('returns true for finite non-integer numbers', () => {
    expect(isFloat(4.5)).toBe(true);
    expect(isFloat(-0.1)).toBe(true);
  });

  it('returns false for integers', () => {
    expect(isFloat(4)).toBe(false);
  });

  it('returns false for Infinity and NaN', () => {
    expect(isFloat(Infinity)).toBe(false);
    expect(isFloat(NaN)).toBe(false);
    expect(isFloat('4.5')).toBe(false);
  });
});

describe('isPositive', () => {
  it('returns true for values strictly greater than zero', () => {
    expect(isPositive(1)).toBe(true);
    expect(isPositive(0.1)).toBe(true);
  });

  it('returns false for negative values', () => {
    expect(isPositive(-1)).toBe(false);
  });

  it('returns false for zero and NaN', () => {
    expect(isPositive(0)).toBe(false);
    expect(isPositive(NaN)).toBe(false);
  });

  it('returns false for non-numbers', () => {
    expect(isPositive('1')).toBe(false);
  });
});

describe('isNegative', () => {
  it('returns true for values strictly less than zero', () => {
    expect(isNegative(-1)).toBe(true);
    expect(isNegative(-0.1)).toBe(true);
  });

  it('returns false for positive values', () => {
    expect(isNegative(1)).toBe(false);
  });

  it('returns false for zero, -0, and NaN', () => {
    expect(isNegative(0)).toBe(false);
    expect(isNegative(-0)).toBe(false);
    expect(isNegative(NaN)).toBe(false);
  });
});

describe('isZero', () => {
  it('returns true for 0', () => {
    expect(isZero(0)).toBe(true);
  });

  it('returns true for -0', () => {
    expect(isZero(-0)).toBe(true);
  });

  it('returns false for non-zero values', () => {
    expect(isZero(1)).toBe(false);
    expect(isZero(-1)).toBe(false);
    expect(isZero('0')).toBe(false);
  });
});

describe('isEven', () => {
  it('returns true for even integers', () => {
    expect(isEven(4)).toBe(true);
    expect(isEven(0)).toBe(true);
    expect(isEven(-2)).toBe(true);
  });

  it('returns false for odd integers', () => {
    expect(isEven(3)).toBe(false);
  });

  it('returns false for non-integers', () => {
    expect(isEven(2.5)).toBe(false);
    expect(isEven(NaN)).toBe(false);
  });
});

describe('isOdd', () => {
  it('returns true for odd integers', () => {
    expect(isOdd(3)).toBe(true);
    expect(isOdd(-1)).toBe(true);
  });

  it('returns false for even integers', () => {
    expect(isOdd(4)).toBe(false);
  });

  it('returns false for non-integers', () => {
    expect(isOdd(3.1)).toBe(false);
    expect(isOdd(NaN)).toBe(false);
  });
});

describe('isInRange', () => {
  it('returns true for values within range', () => {
    expect(isInRange(5, 1, 10)).toBe(true);
  });

  it('returns true for values on the inclusive bounds', () => {
    expect(isInRange(1, 1, 10)).toBe(true);
    expect(isInRange(10, 1, 10)).toBe(true);
  });

  it('returns false for values outside range', () => {
    expect(isInRange(11, 1, 10)).toBe(false);
    expect(isInRange(0, 1, 10)).toBe(false);
  });

  it('returns false for non-numbers', () => {
    expect(isInRange('5', 1, 10)).toBe(false);
  });
});

describe('isDivisibleBy', () => {
  it('returns true when value is divisible by divisor', () => {
    expect(isDivisibleBy(9, 3)).toBe(true);
    expect(isDivisibleBy(10, 2)).toBe(true);
  });

  it('returns false when value is not divisible by divisor', () => {
    expect(isDivisibleBy(10, 3)).toBe(false);
  });

  it('returns false for division by zero', () => {
    expect(isDivisibleBy(9, 0)).toBe(false);
  });

  it('returns false for non-integer inputs', () => {
    expect(isDivisibleBy(9.5, 3)).toBe(false);
    expect(isDivisibleBy(9, 1.5)).toBe(false);
  });
});

describe('isFiniteNumber', () => {
  it('returns true for finite numbers', () => {
    expect(isFiniteNumber(42)).toBe(true);
    expect(isFiniteNumber(3.14)).toBe(true);
    expect(isFiniteNumber(-100)).toBe(true);
  });

  it('returns false for Infinity and -Infinity', () => {
    expect(isFiniteNumber(Infinity)).toBe(false);
    expect(isFiniteNumber(-Infinity)).toBe(false);
  });

  it('returns false for NaN and non-numbers', () => {
    expect(isFiniteNumber(NaN)).toBe(false);
    expect(isFiniteNumber('42')).toBe(false);
  });
});

describe('isNaNValue', () => {
  it('returns true for NaN', () => {
    expect(isNaNValue(NaN)).toBe(true);
    expect(isNaNValue(0 / 0)).toBe(true);
  });

  it('returns false for regular numbers', () => {
    expect(isNaNValue(42)).toBe(false);
  });

  it('returns false for undefined (unlike global isNaN)', () => {
    expect(isNaNValue(undefined)).toBe(false);
  });

  it('returns false for string NaN', () => {
    expect(isNaNValue('NaN')).toBe(false);
  });
});
