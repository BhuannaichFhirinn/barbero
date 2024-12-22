/**
 * @file Comparison Utilities Module
 * @description Provides utility functions for comparing values.
 * 
 * Functions:
 * - isEqual: Performs a deep equality check.
 * - isStrictEqual: Performs a strict equality check.
 * 
 * Usage:
 * Use these functions to compare primitive values or complex objects:
 * 
 *   import { isEqual } from './compare';
 *   const areEqual = isEqual(obj1, obj2);
 */

/**
 * Performs a deep equality check between two values.
 * @param {*} a - The first value to compare.
 * @param {*} b - The second value to compare.
 * @returns {boolean} - True if the values are deeply equal, false otherwise.
 * @example
 * isEqual({ x: 1 }, { x: 1 }); // true
 * isEqual([1, 2], [1, 2]); // true
 * isEqual(1, '1'); // false
 */
export const isEqual = (a, b) => {
  if (a === b) return true;

  if (typeof a !== typeof b) return false;

  if (typeof a === 'object' && a !== null && b !== null) {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) return false;

    for (const key of keysA) {
      if (!keysB.includes(key) || !isEqual(a[key], b[key])) {
        return false;
      }
    }

    return true;
  }

  return false;
};

/**
 * Performs a strict equality check between two values.
 * @param {*} a - The first value to compare.
 * @param {*} b - The second value to compare.
 * @returns {boolean} - True if the values are strictly equal, false otherwise.
 * @example
 * isStrictEqual(1, 1); // true
 * isStrictEqual(1, '1'); // false
 * isStrictEqual(NaN, NaN); // true
 */
export const isStrictEqual = (a, b) => Object.is(a, b);
