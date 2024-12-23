import { describe, it, expect, vi } from 'vitest';
import {
  allPass,
  anyPass,
  nonePass,
  composePredicates,
} from '../../src/utilities/predicate.js';

describe('allPass', () => {
  const isPositive = (x) => x > 0;
  const isEven = (x) => x % 2 === 0;

  it('returns true if all predicates pass', () => {
    const allPositiveAndEven = allPass(isPositive, isEven);
    expect(allPositiveAndEven(4)).toBe(true);
  });

  it('returns false if any predicate fails', () => {
    const allPositiveAndEven = allPass(isPositive, isEven);
    expect(allPositiveAndEven(-2)).toBe(false); // Negative number
    expect(allPositiveAndEven(3)).toBe(false); // Odd number
  });

  it('handles no predicates gracefully', () => {
    const noPredicates = allPass();
    expect(noPredicates(10)).toBe(true); // No predicates to fail
  });
});

describe('anyPass', () => {
  const isPositive = (x) => x > 0;
  const isEven = (x) => x % 2 === 0;

  it('returns true if any predicate passes', () => {
    const anyPositiveOrEven = anyPass(isPositive, isEven);
    expect(anyPositiveOrEven(-2)).toBe(true); // Even
    expect(anyPositiveOrEven(3)).toBe(true);  // Positive
  });

  it('returns false if all predicates fail', () => {
    const anyPositiveOrEven = anyPass(isPositive, isEven);
    expect(anyPositiveOrEven(-3)).toBe(false); // Negative and odd
  });

  it('handles no predicates gracefully', () => {
    const noPredicates = anyPass();
    expect(noPredicates(10)).toBe(false); // No predicates to pass
  });
});

describe('nonePass', () => {
  const isPositive = (x) => x > 0;
  const isEven = (x) => x % 2 === 0;

  it('returns true if no predicates pass', () => {
    const nonePositiveAndEven = nonePass(isPositive, isEven);
    expect(nonePositiveAndEven(-3)).toBe(true); // Negative and odd
  });

  it('returns false if any predicate passes', () => {
    const nonePositiveAndEven = nonePass(isPositive, isEven);
    expect(nonePositiveAndEven(2)).toBe(false); // Even
    expect(nonePositiveAndEven(3)).toBe(false); // Positive
  });

  it('handles no predicates gracefully', () => {
    const noPredicates = nonePass();
    expect(noPredicates(10)).toBe(true); // No predicates to pass
  });
});

describe('composePredicates', () => {
  const isPositive = (x) => x > 0;
  const isEven = (x) => x % 2 === 0;

  it('returns true if all predicates pass sequentially', () => {
    const positiveAndEven = composePredicates(isPositive, isEven);
    expect(positiveAndEven(4)).toBe(true); // Positive and even
  });

  it('returns false if any predicate fails sequentially', () => {
    const positiveAndEven = composePredicates(isPositive, isEven);
    expect(positiveAndEven(-4)).toBe(false); // Not positive
    expect(positiveAndEven(3)).toBe(false); // Not even
  });

  it('handles no predicates gracefully', () => {
    const noPredicates = composePredicates();
    expect(noPredicates(10)).toBe(true); // Nothing to invalidate the result
  });

  it('tests predicates sequentially', () => {
    const passesFirst = vi.fn(() => true);
    const failsSecond = vi.fn(() => false);

    const testSequential = composePredicates(passesFirst, failsSecond);
    expect(testSequential(5)).toBe(false);

    expect(passesFirst).toHaveBeenCalledWith(5);
    expect(failsSecond).toHaveBeenCalledWith(5);
  });
});
