import { describe, it, expect } from 'vitest';
import {
  isNumericString,
  isAlpha,
  isAlphanumeric,
  isUpperCase,
  isLowerCase,
  isPalindrome,
  isBlankString,
  stringStartsWith,
  stringEndsWith,
  stringIncludes,
} from '../../src/utilities/string.js';

describe('isNumericString', () => {
  it('returns true for numeric strings', () => {
    expect(isNumericString('42')).toBe(true);
    expect(isNumericString('3.14')).toBe(true);
    expect(isNumericString('-7')).toBe(true);
  });

  it('returns false for non-numeric strings', () => {
    expect(isNumericString('abc')).toBe(false);
    expect(isNumericString('12abc')).toBe(false);
  });

  it('returns false for empty and whitespace-only strings', () => {
    expect(isNumericString('')).toBe(false);
    expect(isNumericString(' ')).toBe(false);
  });

  it('returns false for non-strings', () => {
    expect(isNumericString(42)).toBe(false);
    expect(isNumericString(null)).toBe(false);
  });
});

describe('isAlpha', () => {
  it('returns true for alphabetic strings', () => {
    expect(isAlpha('hello')).toBe(true);
    expect(isAlpha('Hello')).toBe(true);
    expect(isAlpha('ABC')).toBe(true);
  });

  it('returns false for strings containing non-letter characters', () => {
    expect(isAlpha('hello1')).toBe(false);
    expect(isAlpha('hello!')).toBe(false);
    expect(isAlpha('hello world')).toBe(false);
  });

  it('returns false for empty string', () => {
    expect(isAlpha('')).toBe(false);
  });

  it('returns false for non-strings', () => {
    expect(isAlpha(123)).toBe(false);
    expect(isAlpha(null)).toBe(false);
  });
});

describe('isAlphanumeric', () => {
  it('returns true for alphanumeric strings', () => {
    expect(isAlphanumeric('hello1')).toBe(true);
    expect(isAlphanumeric('abc123')).toBe(true);
    expect(isAlphanumeric('ABC')).toBe(true);
  });

  it('returns false for strings containing special characters or spaces', () => {
    expect(isAlphanumeric('hello!')).toBe(false);
    expect(isAlphanumeric('hello world')).toBe(false);
  });

  it('returns false for empty string', () => {
    expect(isAlphanumeric('')).toBe(false);
  });

  it('returns false for non-strings', () => {
    expect(isAlphanumeric(123)).toBe(false);
    expect(isAlphanumeric(null)).toBe(false);
  });
});

describe('isUpperCase', () => {
  it('returns true for upper-case strings', () => {
    expect(isUpperCase('HELLO')).toBe(true);
    expect(isUpperCase('ABC')).toBe(true);
  });

  it('returns true for strings with no alphabetical characters', () => {
    expect(isUpperCase('123')).toBe(true);
  });

  it('returns false for mixed or lower-case strings', () => {
    expect(isUpperCase('Hello')).toBe(false);
    expect(isUpperCase('hello')).toBe(false);
  });

  it('returns false for empty string', () => {
    expect(isUpperCase('')).toBe(false);
  });

  it('returns false for non-strings', () => {
    expect(isUpperCase(123)).toBe(false);
    expect(isUpperCase(null)).toBe(false);
  });
});

describe('isLowerCase', () => {
  it('returns true for lower-case strings', () => {
    expect(isLowerCase('hello')).toBe(true);
    expect(isLowerCase('abc')).toBe(true);
  });

  it('returns true for strings with no alphabetical characters', () => {
    expect(isLowerCase('123')).toBe(true);
  });

  it('returns false for mixed or upper-case strings', () => {
    expect(isLowerCase('Hello')).toBe(false);
    expect(isLowerCase('HELLO')).toBe(false);
  });

  it('returns false for empty string', () => {
    expect(isLowerCase('')).toBe(false);
  });

  it('returns false for non-strings', () => {
    expect(isLowerCase(123)).toBe(false);
    expect(isLowerCase(null)).toBe(false);
  });
});

describe('isPalindrome', () => {
  it('returns true for palindromic strings', () => {
    expect(isPalindrome('racecar')).toBe(true);
    expect(isPalindrome('madam')).toBe(true);
    expect(isPalindrome('abba')).toBe(true);
  });

  it('returns true for single characters', () => {
    expect(isPalindrome('A')).toBe(true);
  });

  it('returns true for empty string', () => {
    expect(isPalindrome('')).toBe(true);
  });

  it('returns false for non-palindromic strings', () => {
    expect(isPalindrome('hello')).toBe(false);
  });

  it('is case-sensitive', () => {
    expect(isPalindrome('Racecar')).toBe(false);
  });

  it('returns false for non-strings', () => {
    expect(isPalindrome(12321)).toBe(false);
    expect(isPalindrome(null)).toBe(false);
  });
});

describe('isBlankString', () => {
  it('returns true for empty string', () => {
    expect(isBlankString('')).toBe(true);
  });

  it('returns true for whitespace-only strings', () => {
    expect(isBlankString('   ')).toBe(true);
    expect(isBlankString('\t')).toBe(true);
    expect(isBlankString('\n')).toBe(true);
  });

  it('returns false for strings with content', () => {
    expect(isBlankString('hello')).toBe(false);
    expect(isBlankString(' hello ')).toBe(false);
  });

  it('returns false for non-strings', () => {
    expect(isBlankString(null)).toBe(false);
    expect(isBlankString(undefined)).toBe(false);
  });
});

describe('stringStartsWith', () => {
  it('returns true when string starts with prefix', () => {
    expect(stringStartsWith('hello', 'hel')).toBe(true);
    expect(stringStartsWith('hello', 'hello')).toBe(true);
  });

  it('returns true for empty prefix', () => {
    expect(stringStartsWith('hello', '')).toBe(true);
  });

  it('returns false when string does not start with prefix', () => {
    expect(stringStartsWith('hello', 'world')).toBe(false);
    expect(stringStartsWith('hello', 'llo')).toBe(false);
  });

  it('returns false when either argument is not a string', () => {
    expect(stringStartsWith(123, 'hel')).toBe(false);
    expect(stringStartsWith('hello', 123)).toBe(false);
    expect(stringStartsWith(null, 'hel')).toBe(false);
  });
});

describe('stringEndsWith', () => {
  it('returns true when string ends with suffix', () => {
    expect(stringEndsWith('hello', 'llo')).toBe(true);
    expect(stringEndsWith('hello', 'hello')).toBe(true);
  });

  it('returns true for empty suffix', () => {
    expect(stringEndsWith('hello', '')).toBe(true);
  });

  it('returns false when string does not end with suffix', () => {
    expect(stringEndsWith('hello', 'world')).toBe(false);
    expect(stringEndsWith('hello', 'hel')).toBe(false);
  });

  it('returns false when either argument is not a string', () => {
    expect(stringEndsWith(123, 'llo')).toBe(false);
    expect(stringEndsWith('hello', 123)).toBe(false);
    expect(stringEndsWith(null, 'llo')).toBe(false);
  });
});

describe('stringIncludes', () => {
  it('returns true when string contains substring', () => {
    expect(stringIncludes('hello', 'ell')).toBe(true);
    expect(stringIncludes('hello', 'hello')).toBe(true);
  });

  it('returns true for empty substring', () => {
    expect(stringIncludes('hello', '')).toBe(true);
  });

  it('returns false when string does not contain substring', () => {
    expect(stringIncludes('hello', 'xyz')).toBe(false);
  });

  it('returns false when either argument is not a string', () => {
    expect(stringIncludes(123, 'ell')).toBe(false);
    expect(stringIncludes('hello', 123)).toBe(false);
    expect(stringIncludes(null, 'ell')).toBe(false);
  });
});
