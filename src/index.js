// Import utilities
import { isTruthy, isFalsey } from './core/truthy.js';
import { isNullOrUndefined, isEmptyArray, isEmptyObject } from './utils/validation.js';
import { isEqual, isStrictEqual } from './core/compare.js';
import { xor, nand } from './utils/logic.js';

// Export utilities
export {
  isTruthy,
  isFalsey,
  isNullOrUndefined,
  isEmptyArray,
  isEmptyObject,
  isEqual,
  isStrictEqual,
  xor,
  nand,
};

// Default export (optional for consumers who prefer this style)
export default {
  isTruthy,
  isFalsey,
  isNullOrUndefined,
  isEmptyArray,
  isEmptyObject,
  isEqual,
  isStrictEqual,
  xor,
  nand,
};
