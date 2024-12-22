/**
 * @file Truthy and Falsey Utilities Module
 * @description Provides utility functions to determine the truthiness or falseyness of values.
 * 
 * Functions:
 * - isTruthy: Checks if a value is truthy.
 * - isFalsey: Checks if a value is falsey.
 * 
 * Usage:
 * Use these functions to simplify truthy/falsey checks:
 * 
 *   import { isTruthy } from './truthy';
 *   const result = isTruthy(value);
 */

/**
 * Checks if a value is truthy.
 * @param {*} value - The value to check.
 * @returns {boolean} - True if the value is truthy, false otherwise.
 * @example
 * isTruthy(1); // true
 * isTruthy('hello'); // true
 * isTruthy(0); // false
 */
export const isTruthy = (value) => !!value;

/**
 * Checks if a value is falsey.
 * @param {*} value - The value to check.
 * @returns {boolean} - True if the value is falsey, false otherwise.
 * @example
 * isFalsey(0); // true
 * isFalsey(''); // true
 * isFalsey(1); // false
 */
export const isFalsey = (value) => !value;
