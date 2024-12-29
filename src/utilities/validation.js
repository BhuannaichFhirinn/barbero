/**
 * @file Validation Utilities Module
 * @description  Provides utility functions for validating values, arrays, and objects.
 * 
 * Functions:
 * - isNullOrUndefined: Checks if a value is null or undefined.
 * - isUndefinedNullOrEmpty: Checks if a value is undefined, null, NaN, or empty.
 * - isEmptyArray: Checks if an array is empty.
 * - isEmptyObject: Checks if an object is empty.
 * - isArray: Checks if a value is an array.
 * - isObject: Checks if a value is an object (excluding arrays).
 * - isFunction: Checks if a value is a function.
 * - isDate: Checks if a value is a Date object.
 * - isRegExp: Checks if a value is a regular expression.
 * 
 * Usage:
 * Use these functions for common validation tasks:
 * 
 *   import { isUndefinedNullOrEmpty } from './validation';
 *   const isValid = isUndefinedNullOrEmpty(value);
 */

/**
 * Checks if a value is null or undefined.
 * @param {*} value - The value to check.
 * @returns {boolean} - True if the value is null or undefined, false otherwise.
 * @example
 * isNullOrUndefined(null); // true
 * isNullOrUndefined(undefined); // true
 * isNullOrUndefined(0); // false
 */
export const isNullOrUndefined = (value) => value === null || value === undefined;

/**
 * Checks if a value is undefined, null, NaN, an empty string, array, or object.
 * @param {*} object - The value to check.
 * @returns {boolean} - True if the value is considered empty, false otherwise.
 * @example
 * isUndefinedNullOrEmpty(''); // true
 * isUndefinedNullOrEmpty([]); // true
 * isUndefinedNullOrEmpty({}); // true
 */
export const isUndefinedNullOrEmpty = (object) => {
  if (object === undefined || object === null || Number.isNaN(object)) return true;
  if (typeof object === 'string' && object.trim().length === 0) return true;
  if (Array.isArray(object) && object.length === 0) return true;
  if (typeof object === 'object' && object.constructor === Object && Object.keys(object).length === 0) return true;
  return false;
};

/**
 * Checks if an array is empty.
 * @param {Array} array - The array to check.
 * @returns {boolean} - True if the array is empty, false otherwise.
 * @example
 * isEmptyArray([]); // true
 * isEmptyArray([1, 2]); // false
 */
export const isEmptyArray = (array) => Array.isArray(array) && array.length === 0;

/**
 * Checks if an object is empty.
 * @param {Object} object - The object to check.
 * @returns {boolean} - True if the object is empty, false otherwise.
 * @example
 * isEmptyObject({}); // true
 * isEmptyObject({ key: 'value' }); // false
 */
export const isEmptyObject = (object) =>
  object && typeof object === 'object' && Object.keys(object).length === 0;

/**
 * Checks if a value is an array.
 * @param {*} value - The value to check.
 * @returns {boolean} - True if the value is an array, false otherwise.
 * @example
 * isArray([1, 2, 3]); // true
 * isArray('hello'); // false
 */
export const isArray = (value) => Array.isArray(value);

/**
 * Checks if a value is an object (excluding arrays).
 * @param {*} value - The value to check.
 * @returns {boolean} - True if the value is an object, false otherwise.
 * @example
 * isObject({ key: 'value' }); // true
 * isObject([1, 2, 3]); // false
 */
export const isObject = (value) =>
  value !== null && typeof value === 'object' && !Array.isArray(value);

/**
 * Checks if a value is a function.
 * @param {*} value - The value to check.
 * @returns {boolean} - True if the value is a function, false otherwise.
 * @example
 * isFunction(function() {}); // true
 * isFunction(123); // false
 */
export const isFunction = (value) => typeof value === 'function';

/**
 * Checks if a value is a Date object.
 * @param {*} value - The value to check.
 * @returns {boolean} - True if the value is a Date object, false otherwise.
 * @example
 * isDate(new Date()); // true
 * isDate('2023-01-01'); // false
 */
export const isDate = (value) =>
  Object.prototype.toString.call(value) === '[object Date]';

/**
 * Checks if a value is a regular expression.
 * @param {*} value - The value to check.
 * @returns {boolean} - True if the value is a regular expression, false otherwise.
 * @example
 * isRegExp(/abc/); // true
 * isRegExp('abc'); // false
 */
export const isRegExp = (value) =>
  Object.prototype.toString.call(value) === '[object RegExp]';
