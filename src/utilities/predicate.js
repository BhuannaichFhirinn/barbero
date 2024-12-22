/**
 * @file Predicate Utilities Module
 * @description Provides utilities for working with predicates and logical conditions.
 * 
 * Functions:
 * - allPass: Returns a function that checks if all predicates pass for the given input.
 * - anyPass: Returns a function that checks if any predicate passes for the given input.
 * - nonePass: Returns a function that checks if no predicates pass for the given input.
 * - composePredicates: Composes multiple predicates into a single predicate function.
 * 
 * Usage:
 * Import the module and use its predicate utilities to build logical expressions:
 * 
 *   import { allPass, anyPass } from './predicates';
 * 
 *   const isPositive = (x) => x > 0;
 *   const isEven = (x) => x % 2 === 0;
 * 
 *   const isPositiveAndEven = allPass(isPositive, isEven);
 *   console.log(isPositiveAndEven(4)); // true
 *   console.log(isPositiveAndEven(-2)); // false
 */

/**
 * allPass: Returns a function that checks if all predicates pass for the given input.
 * @param {...Function} predicates - The predicates to test.
 * @returns {Function} - A function that takes an input and returns true if all predicates pass.
 */
export const allPass = (...predicates) => (input) => {
  return predicates.every((predicate) => predicate(input));
};

/**
 * anyPass: Returns a function that checks if any predicate passes for the given input.
 * @param {...Function} predicates - The predicates to test.
 * @returns {Function} - A function that takes an input and returns true if any predicate passes.
 */
export const anyPass = (...predicates) => (input) => {
  return predicates.some((predicate) => predicate(input));
};

/**
 * nonePass: Returns a function that checks if no predicates pass for the given input.
 * @param {...Function} predicates - The predicates to test.
 * @returns {Function} - A function that takes an input and returns true if no predicates pass.
 */
export const nonePass = (...predicates) => (input) => {
  return !predicates.some((predicate) => predicate(input));
};

/**
 * composePredicates: Composes multiple predicates into a single predicate function.
 * @param {...Function} predicates - The predicates to compose.
 * @returns {Function} - A function that takes an input and applies all predicates in sequence.
 */
export const composePredicates = (...predicates) => (input) => {
  return predicates.reduce((result, predicate) => result && predicate(input), true);
};
