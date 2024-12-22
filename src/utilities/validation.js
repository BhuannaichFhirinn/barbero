/**
 * @file Validation Utilities Module
 * @description  Provides utility functions for validating values, arrays, and objects.
 * 
 * Functions:
 * - isNullOrUndefined: Checks if a value is null or undefined.
 * - isUndefinedNullOrEmpty: Checks if a value is undefined, null, NaN, or empty.
 * - isEmptyArray: Checks if an array is empty.
 * - isEmptyObject: Checks if an object is empty.
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
