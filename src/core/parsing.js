/**
 * @file parsing.js
 * @description Boolean parsing and semantic recognition utilities.
 * Fills the gap left by the deprecated `boolean` npm package (6.46M weekly downloads).
 *
 * String matching is case-insensitive after trimming.
 * Boxed primitives (new Boolean(), new String(), new Number()) are handled
 * identically to their primitive counterparts via Object.prototype.toString.call().
 *
 * @module parsing
 */

const TRUTHY_SET = new Set([
  'true', 't', '1',
  'yes', 'y',
  'on',
  'enabled',
  'active',
  'allow',
  'up',
  'online',
  'open',
  'pass',
  'ok',
  'success',
  'positive',
  'valid',
  'accepted',
  'running',
  'connected',
  'available',
]);

const FALSY_SET = new Set([
  'false', 'f', '0',
  'no', 'n',
  'off',
  'disabled',
  'inactive',
  'deny',
  'down',
  'offline',
  'closed',
  'fail',
  'nok',
  'failure',
  'negative',
  'invalid',
  'rejected',
  'stopped',
  'disconnected',
  'unavailable',
]);

/**
 * Normalise a value to a string key suitable for set lookup, or return null
 * if the value is not a recognised input type (boolean, number, or string —
 * including their boxed equivalents).
 *
 * Uses Object.prototype.toString.call() rather than typeof so that boxed
 * primitives (new Boolean(), new String(), new Number()) are handled
 * identically to their primitive counterparts.
 *
 * @param {*} value - The value to normalise.
 * @returns {string|null} A normalised string key, or null.
 */
const normalise = (value) => {
  switch (Object.prototype.toString.call(value)) {
    case '[object Boolean]':
      return String(value.valueOf());
    case '[object Number]':
      return String(value.valueOf());
    case '[object String]':
      return value.valueOf().trim().toLowerCase();
    default:
      return null;
  }
};

/**
 * Returns true if the value is a recognised truthy semantic representation.
 * Accepted truthy forms include: true, 1, 'true', 't', '1', 'yes', 'y', 'on',
 * 'enabled', 'active', 'allow', 'up', 'online', 'open', 'pass', 'ok',
 * 'success', 'positive', 'valid', 'accepted', 'running', 'connected', 'available'
 * (and their case variants). Returns false for everything else.
 *
 * Direct replacement for the deprecated `boolean()` function from the `boolean` package.
 *
 * @param {*} value - The value to parse.
 * @returns {boolean} True if the value is a recognised truthy representation.
 * @example
 * parseBoolean('yes');   // true
 * parseBoolean('no');    // false
 * parseBoolean('maybe'); // false
 */
export const parseBoolean = (value) => {
  const key = normalise(value);
  return key !== null && TRUTHY_SET.has(key);
};

/**
 * Returns true if the value is any recognised boolean representation —
 * either truthy or falsy. Note that 'no', 'false', '0' etc. are booleanable
 * even though they represent false.
 *
 * Direct replacement for the deprecated `isBooleanable()` function from the
 * `boolean` package.
 *
 * @param {*} value - The value to test.
 * @returns {boolean} True if the value is a recognised boolean representation.
 * @example
 * isBooleanable('yes'); // true
 * isBooleanable('no');  // true  — 'no' is booleanable even though it's falsy
 * isBooleanable('maybe'); // false
 */
export const isBooleanable = (value) => {
  const key = normalise(value);
  return key !== null && (TRUTHY_SET.has(key) || FALSY_SET.has(key));
};

/**
 * Returns true if the value is one of the recognised truthy semantic
 * representations. Complements isTruthy for string/number input forms.
 *
 * @param {*} value - The value to test.
 * @returns {boolean} True if the value is a recognised truthy representation.
 * @example
 * isTruthyString('yes');  // true
 * isTruthyString('no');   // false
 * isTruthyString(1);      // true
 */
export const isTruthyString = (value) => {
  const key = normalise(value);
  return key !== null && TRUTHY_SET.has(key);
};

/**
 * Returns true if the value is one of the recognised falsy semantic
 * representations. Complements isFalsey for string/number input forms.
 *
 * @param {*} value - The value to test.
 * @returns {boolean} True if the value is a recognised falsy representation.
 * @example
 * isFalseyString('no');   // true
 * isFalseyString('yes');  // false
 * isFalseyString(0);      // true
 */
export const isFalseyString = (value) => {
  const key = normalise(value);
  return key !== null && FALSY_SET.has(key);
};
