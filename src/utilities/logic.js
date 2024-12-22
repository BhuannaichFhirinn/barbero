/**
 * @file Logical Operation Utilities Module
 * @description Provides utility functions for logical operations like XOR and NAND.
 * 
 * Functions:
 * - xor: Performs an XOR (exclusive OR) operation.
 * - nand: Performs a NAND (NOT AND) operation.
 * 
 * Usage:
 * Use these functions to handle advanced logical operations:
 * 
 *   import { xor } from './logic';
 *   const result = xor(a, b);
 */

/**
 * Performs an XOR (exclusive OR) operation between two values.
 * @param {*} a - The first value.
 * @param {*} b - The second value.
 * @returns {boolean} - True if one value is truthy and the other is falsey, false otherwise.
 * @example
 * xor(true, false); // true
 * xor(true, true); // false
 * xor(false, false); // false
 */
export const xor = (a, b) => !!a !== !!b;

/**
 * Performs a NAND (NOT AND) operation between two values.
 * @param {*} a - The first value.
 * @param {*} b - The second value.
 * @returns {boolean} - True if not both values are truthy, false otherwise.
 * @example
 * nand(true, false); // true
 * nand(true, true); // false
 * nand(false, false); // true
 */
export const nand = (a, b) => !(a && b);
