/**
 * @file index.js
 * @description Main entry point for the Barbero library. Provides named exports for individual utilities
 * and a default export containing all utilities in a single object.
 * 
 * @module Barbero
 * @see {@link https://github.com/BhuannaichFhirinn/barbero|GitHub Repository}
 * @see Individual modules for detailed function documentation.
 */

// Import utilities
import {
  isTruthy,
  isFalsey,
} from './core/truthy.js';
import {
  isNullOrUndefined,
  isUndefinedNullOrEmpty,
  isEmptyArray,
  isEmptyObject,
  isArray,
  isObject,
  isFunction,
  isDate,
  isRegExp,
} from './utilities/validation.js';
import {
  isEqual,
  isStrictEqual,
} from './core/compare.js';
import {
  xor,
  nand,
} from './utilities/logic.js';
import {
  allPass,
  anyPass,
  nonePass,
  composePredicates,
} from './utilities/predicate.js';

// Default export (combining all utilities)
const Barbero = {
  isTruthy,
  isFalsey,
  isNullOrUndefined,
  isUndefinedNullOrEmpty,
  isEmptyArray,
  isEmptyObject,
  isArray,
  isObject,
  isFunction,
  isDate,
  isRegExp,
  isEqual,
  isStrictEqual,
  xor,
  nand,
  allPass,
  anyPass,
  nonePass,
  composePredicates,
};

// Named exports
export {
  isTruthy,
  isFalsey,
  isNullOrUndefined,
  isUndefinedNullOrEmpty,
  isEmptyArray,
  isEmptyObject,
  isArray,
  isObject,
  isFunction,
  isDate,
  isRegExp,
  isEqual,
  isStrictEqual,
  xor,
  nand,
  allPass,
  anyPass,
  nonePass,
  composePredicates,
};

// Default export
export default Barbero;
