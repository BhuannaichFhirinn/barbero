/**
 * @file Type System Utilities Module
 * @description Provides utility functions for identifying JavaScript primitive and structural types.
 *
 * Functions:
 * - isNumber: Checks if a value has type 'number' (including NaN).
 * - isString: Checks if a value is a primitive string.
 * - isBoolean: Checks if a value is a primitive boolean.
 * - isSymbol: Checks if a value is a Symbol.
 * - isBigInt: Checks if a value is a BigInt.
 * - isPrimitive: Checks if a value is any primitive type.
 * - isClassInstance: Checks if a value is an instance of a non-Object constructor.
 *
 * Usage:
 * Use these functions for type identity checks:
 *
 *   import { isNumber } from './types';
 *   const valid = isNumber(42); // true
 */

/**
 * Checks if a value has type 'number'. Note: returns true for NaN, as NaN has typeof 'number'.
 * For a NaN-excluding check, use isFiniteNumber (Area 2).
 * @param {*} value - The value to check.
 * @returns {boolean} - True if typeof value is 'number', false otherwise.
 * @example
 * isNumber(42);    // true
 * isNumber(NaN);   // true  — NaN has type 'number'
 * isNumber('42');  // false
 */
export const isNumber = (value) => typeof value === 'number';

/**
 * Checks if a value is a primitive string. Returns false for boxed String objects.
 * @param {*} value - The value to check.
 * @returns {boolean} - True if typeof value is 'string', false otherwise.
 * @example
 * isString('hello');          // true
 * isString('');               // true
 * isString(new String('hi')); // false — boxed String is an object
 * isString(42);               // false
 */
export const isString = (value) => typeof value === 'string';

/**
 * Checks if a value is a primitive boolean. Returns false for boxed Boolean objects.
 * @param {*} value - The value to check.
 * @returns {boolean} - True if typeof value is 'boolean', false otherwise.
 * @example
 * isBoolean(true);                // true
 * isBoolean(false);               // true
 * isBoolean(new Boolean(false));  // false — boxed Boolean is an object
 * isBoolean(1);                   // false
 */
export const isBoolean = (value) => typeof value === 'boolean';

/**
 * Checks if a value is a Symbol.
 * @param {*} value - The value to check.
 * @returns {boolean} - True if typeof value is 'symbol', false otherwise.
 * @example
 * isSymbol(Symbol());        // true
 * isSymbol(Symbol('label')); // true
 * isSymbol('symbol');        // false
 */
export const isSymbol = (value) => typeof value === 'symbol';

/**
 * Checks if a value is a BigInt.
 * @param {*} value - The value to check.
 * @returns {boolean} - True if typeof value is 'bigint', false otherwise.
 * @example
 * isBigInt(9n);         // true
 * isBigInt(BigInt(9));  // true
 * isBigInt(9);          // false
 */
export const isBigInt = (value) => typeof value === 'bigint';

/**
 * Checks if a value is a primitive. Returns true for string, number, boolean, symbol,
 * bigint, null, and undefined. Returns false for objects, arrays, and functions.
 * @param {*} value - The value to check.
 * @returns {boolean} - True if the value is a primitive, false otherwise.
 * @example
 * isPrimitive(1);         // true
 * isPrimitive('hello');   // true
 * isPrimitive(null);      // true  — null is a primitive
 * isPrimitive(undefined); // true
 * isPrimitive({});        // false
 * isPrimitive([]);        // false
 */
export const isPrimitive = (value) => value !== Object(value);

/**
 * Checks if a value is an instance of a non-Object constructor class.
 * Returns true for instances such as new Date() or new MyClass().
 * Returns false for plain objects ({}), arrays, null, and primitives.
 * @param {*} value - The value to check.
 * @returns {boolean} - True if the value is a class instance, false otherwise.
 * @example
 * isClassInstance(new Date());   // true
 * isClassInstance(new Map());    // true
 * isClassInstance({});           // false — plain object
 * isClassInstance([]);           // false — array
 * isClassInstance(null);         // false
 */
export const isClassInstance = (value) =>
  value !== null &&
  typeof value === 'object' &&
  value.constructor !== Object &&
  !Array.isArray(value);
