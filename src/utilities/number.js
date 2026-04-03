/**
 * @file Number / Math Utilities Module
 * @description Provides pure boolean predicates for numeric checks.
 *
 * Functions:
 * - isInteger: Returns true if the value is an integer.
 * - isFloat: Returns true if the value is a finite non-integer number.
 * - isPositive: Returns true if the value is strictly greater than zero.
 * - isNegative: Returns true if the value is strictly less than zero.
 * - isZero: Returns true if the value is 0 or -0.
 * - isEven: Returns true if the value is an even integer.
 * - isOdd: Returns true if the value is an odd integer.
 * - isInRange: Returns true if the value is within [min, max] inclusive.
 * - isDivisibleBy: Returns true if value is an integer divisible by divisor.
 * - isFiniteNumber: Returns true if the value is a finite number.
 * - isNaNValue: Returns true if the value is exactly NaN.
 *
 * Usage:
 *   import { isInteger } from './number';
 *   isInteger(4); // true
 */

/**
 * Checks if a value is an integer. Does not coerce — strings and floats return false.
 * @param {*} value - The value to check.
 * @returns {boolean} - True if the value is an integer, false otherwise.
 * @example
 * isInteger(4);        // true
 * isInteger(0);        // true
 * isInteger(-10);      // true
 * isInteger(4.5);      // false
 * isInteger(NaN);      // false
 * isInteger(Infinity); // false
 * isInteger('4');      // false
 */
export const isInteger = (value) => Number.isInteger(value);

/**
 * Checks if a value is a finite number that is not an integer.
 * Infinity and -Infinity are not considered floats.
 * @param {*} value - The value to check.
 * @returns {boolean} - True if the value is a finite non-integer number, false otherwise.
 * @example
 * isFloat(4.5);      // true
 * isFloat(-0.1);     // true
 * isFloat(4);        // false — is an integer
 * isFloat(Infinity); // false — not finite
 * isFloat(NaN);      // false
 * isFloat('4.5');    // false
 */
export const isFloat = (value) => Number.isFinite(value) && !Number.isInteger(value);

/**
 * Checks if a value is a number strictly greater than zero.
 * 0, -0, and NaN all return false.
 * @param {*} value - The value to check.
 * @returns {boolean} - True if the value is strictly positive, false otherwise.
 * @example
 * isPositive(1);    // true
 * isPositive(0.1);  // true
 * isPositive(0);    // false — zero is not positive
 * isPositive(-1);   // false
 * isPositive(NaN);  // false
 */
export const isPositive = (value) => typeof value === 'number' && value > 0;

/**
 * Checks if a value is a number strictly less than zero.
 * -0 returns false because -0 < 0 evaluates to false in JavaScript.
 * @param {*} value - The value to check.
 * @returns {boolean} - True if the value is strictly negative, false otherwise.
 * @example
 * isNegative(-1);   // true
 * isNegative(-0.1); // true
 * isNegative(0);    // false
 * isNegative(-0);   // false — -0 < 0 is false in JavaScript
 * isNegative(NaN);  // false
 */
export const isNegative = (value) => typeof value === 'number' && value < 0;

/**
 * Checks if a value is zero. Matches both 0 and -0 because -0 === 0 is true in JavaScript.
 * @param {*} value - The value to check.
 * @returns {boolean} - True if the value is 0 or -0, false otherwise.
 * @example
 * isZero(0);   // true
 * isZero(-0);  // true — -0 === 0
 * isZero(1);   // false
 * isZero('0'); // false
 */
export const isZero = (value) => value === 0;

/**
 * Checks if a value is an even integer. Non-integers always return false.
 * @param {*} value - The value to check.
 * @returns {boolean} - True if the value is an even integer, false otherwise.
 * @example
 * isEven(4);    // true
 * isEven(0);    // true
 * isEven(-2);   // true
 * isEven(3);    // false
 * isEven(2.5);  // false — not an integer
 * isEven(NaN);  // false
 */
export const isEven = (value) => Number.isInteger(value) && value % 2 === 0;

/**
 * Checks if a value is an odd integer. Non-integers always return false.
 * @param {*} value - The value to check.
 * @returns {boolean} - True if the value is an odd integer, false otherwise.
 * @example
 * isOdd(3);    // true
 * isOdd(-1);   // true
 * isOdd(4);    // false
 * isOdd(3.1);  // false — not an integer
 * isOdd(NaN);  // false
 */
export const isOdd = (value) => Number.isInteger(value) && value % 2 !== 0;

/**
 * Checks if a value is a number within [min, max], inclusive on both bounds.
 * @param {*} value - The value to check.
 * @param {number} min - Lower bound (inclusive).
 * @param {number} max - Upper bound (inclusive).
 * @returns {boolean} - True if value is a number within the range, false otherwise.
 * @example
 * isInRange(5, 1, 10);   // true
 * isInRange(1, 1, 10);   // true  — inclusive lower bound
 * isInRange(10, 1, 10);  // true  — inclusive upper bound
 * isInRange(11, 1, 10);  // false
 * isInRange('5', 1, 10); // false — not a number
 */
export const isInRange = (value, min, max) => typeof value === 'number' && value >= min && value <= max;

/**
 * Checks if an integer value is evenly divisible by an integer divisor.
 * Returns false for non-integer inputs and for a divisor of zero.
 * @param {*} value - The value to check.
 * @param {*} divisor - The divisor.
 * @returns {boolean} - True if value is divisible by divisor, false otherwise.
 * @example
 * isDivisibleBy(9, 3);    // true
 * isDivisibleBy(10, 2);   // true
 * isDivisibleBy(10, 3);   // false
 * isDivisibleBy(9, 0);    // false — division by zero guard
 * isDivisibleBy(9.5, 3);  // false — non-integer value
 * isDivisibleBy(9, 1.5);  // false — non-integer divisor
 */
export const isDivisibleBy = (value, divisor) =>
  Number.isInteger(value) && Number.isInteger(divisor) && divisor !== 0 && value % divisor === 0;

/**
 * Checks if a value is a finite number. Returns false for NaN, Infinity, -Infinity,
 * and any non-number type.
 * @param {*} value - The value to check.
 * @returns {boolean} - True if the value is a finite number, false otherwise.
 * @example
 * isFiniteNumber(42);        // true
 * isFiniteNumber(3.14);      // true
 * isFiniteNumber(-100);      // true
 * isFiniteNumber(Infinity);  // false
 * isFiniteNumber(-Infinity); // false
 * isFiniteNumber(NaN);       // false
 * isFiniteNumber('42');      // false
 */
export const isFiniteNumber = (value) => Number.isFinite(value);

/**
 * Checks if a value is exactly NaN. Uses Number.isNaN — unlike the global isNaN,
 * this does not coerce the value, so isNaNValue(undefined) returns false.
 * @param {*} value - The value to check.
 * @returns {boolean} - True if the value is NaN, false otherwise.
 * @example
 * isNaNValue(NaN);        // true
 * isNaNValue(0 / 0);      // true
 * isNaNValue(42);         // false
 * isNaNValue(undefined);  // false — unlike global isNaN, no coercion
 * isNaNValue('NaN');      // false
 */
export const isNaNValue = (value) => Number.isNaN(value);
