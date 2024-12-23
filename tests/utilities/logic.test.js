import { describe, it, expect } from 'vitest';
import { xor, nand } from '../../src/utilities/logic.js';

describe('xor', () => {
  it('returns true if one value is true and the other is false', () => {
    expect(xor(true, false)).toBe(true);
    expect(xor(false, true)).toBe(true);
  });

  it('returns false if both values are the same', () => {
    expect(xor(true, true)).toBe(false);
    expect(xor(false, false)).toBe(false);
  });
});

describe('nand', () => {
  it('returns false if both values are true', () => {
    expect(nand(true, true)).toBe(false);
  });

  it('returns true otherwise', () => {
    expect(nand(true, false)).toBe(true);
    expect(nand(false, true)).toBe(true);
    expect(nand(false, false)).toBe(true);
  });
});
