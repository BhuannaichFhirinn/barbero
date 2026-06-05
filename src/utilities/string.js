/**
 * @file String Content Utilities Module
 * @description Provides pure boolean predicates for string content checks.
 * Covers structural and character-set properties of strings.
 * Format validation (email, URL, UUID, etc.) is out of scope — use validator.js for that.
 *
 * All functions return false for non-string input rather than throwing.
 *
 * Functions:
 * - isNumericString: Returns true if the string is non-empty and converts to a valid number.
 * - isAlpha: Returns true if the string contains only ASCII letters.
 * - isAlphanumeric: Returns true if the string contains only ASCII letters and digits.
 * - isUpperCase: Returns true if the string is non-empty and all characters are upper case.
 * - isLowerCase: Returns true if the string is non-empty and all characters are lower case.
 * - isPalindrome: Returns true if the string reads the same forwards and backwards.
 * - isBlankString: Returns true if the string is empty or whitespace-only.
 * - stringStartsWith: Returns true if the string begins with the given prefix.
 * - stringEndsWith: Returns true if the string ends with the given suffix.
 * - stringIncludes: Returns true if the string contains the given substring.
 */

/**
 * Checks if a value is a non-empty string that converts to a valid number.
 * Whitespace-only strings return false (trimmed before conversion check).
 * Note: hex strings like `'0x10'` return true because `Number('0x10')` is 16.
 * @param {*} value - The value to check.
 * @returns {boolean} - True if the value is a non-empty numeric string, false otherwise.
 * @example
 * isNumericString('42');    // true
 * isNumericString('3.14');  // true
 * isNumericString('-7');    // true
 * isNumericString('abc');   // false
 * isNumericString('');      // false
 * isNumericString(' ');     // false
 */
export const isNumericString = (value) =>
  typeof value === 'string' && value.trim().length > 0 && !Number.isNaN(Number(value));

/**
 * Checks if a value is a string containing only ASCII letters (a-z, A-Z).
 * Empty string returns false.
 * @param {*} value - The value to check.
 * @returns {boolean} - True if the value is a non-empty alpha-only string, false otherwise.
 * @example
 * isAlpha('hello');   // true
 * isAlpha('Hello');   // true
 * isAlpha('hello1');  // false
 * isAlpha('');        // false
 */
export const isAlpha = (value) => typeof value === 'string' && /^[a-zA-Z]+$/.test(value);

/**
 * Checks if a value is a string containing only ASCII letters and digits (a-z, A-Z, 0-9).
 * Empty string returns false.
 * @param {*} value - The value to check.
 * @returns {boolean} - True if the value is a non-empty alphanumeric string, false otherwise.
 * @example
 * isAlphanumeric('hello1');  // true
 * isAlphanumeric('abc123');  // true
 * isAlphanumeric('hello!');  // false
 * isAlphanumeric('');        // false
 */
export const isAlphanumeric = (value) => typeof value === 'string' && /^[a-zA-Z0-9]+$/.test(value);

/**
 * Checks if a value is a non-empty string where all characters are upper case.
 * Strings with no alphabetical characters (e.g. '123') return true because they
 * have no lower-case characters — `'123' === '123'.toUpperCase()`.
 * @param {*} value - The value to check.
 * @returns {boolean} - True if the value is a non-empty upper-case string, false otherwise.
 * @example
 * isUpperCase('HELLO');  // true
 * isUpperCase('123');    // true  — no lower-case characters present
 * isUpperCase('Hello');  // false
 * isUpperCase('');       // false
 */
export const isUpperCase = (value) =>
  typeof value === 'string' && value.length > 0 && value === value.toUpperCase();

/**
 * Checks if a value is a non-empty string where all characters are lower case.
 * Strings with no alphabetical characters (e.g. '123') return true because they
 * have no upper-case characters — `'123' === '123'.toLowerCase()`.
 * @param {*} value - The value to check.
 * @returns {boolean} - True if the value is a non-empty lower-case string, false otherwise.
 * @example
 * isLowerCase('hello');  // true
 * isLowerCase('123');    // true  — no upper-case characters present
 * isLowerCase('Hello');  // false
 * isLowerCase('');       // false
 */
export const isLowerCase = (value) =>
  typeof value === 'string' && value.length > 0 && value === value.toLowerCase();

/**
 * Checks if a value is a string that reads the same forwards and backwards.
 * Comparison is case-sensitive — 'Racecar' returns false, 'racecar' returns true.
 * Empty string returns true (vacuously a palindrome).
 * @param {*} value - The value to check.
 * @returns {boolean} - True if the value is a palindromic string, false otherwise.
 * @example
 * isPalindrome('racecar');  // true
 * isPalindrome('A');        // true  — single character
 * isPalindrome('');         // true  — empty string is vacuously a palindrome
 * isPalindrome('Racecar');  // false — case-sensitive
 * isPalindrome('hello');    // false
 */
export const isPalindrome = (value) =>
  typeof value === 'string' && value === value.split('').reverse().join('');

/**
 * Checks if a value is a string that is empty or contains only whitespace.
 * @param {*} value - The value to check.
 * @returns {boolean} - True if the value is a blank string, false otherwise.
 * @example
 * isBlankString('');      // true
 * isBlankString('   ');   // true
 * isBlankString('hello'); // false
 * isBlankString(null);    // false
 */
export const isBlankString = (value) => typeof value === 'string' && value.trim().length === 0;

/**
 * Checks if a string begins with a given prefix. Both arguments must be strings.
 * An empty prefix always returns true — native `String.prototype.startsWith` behaviour.
 * @param {*} value - The string to check.
 * @param {*} prefix - The prefix to look for.
 * @returns {boolean} - True if value starts with prefix, false otherwise.
 * @example
 * stringStartsWith('hello', 'hel');    // true
 * stringStartsWith('hello', '');      // true  — empty prefix matches everything
 * stringStartsWith('hello', 'world'); // false
 * stringStartsWith(123, 'hel');       // false — non-string value
 */
export const stringStartsWith = (value, prefix) =>
  typeof value === 'string' && typeof prefix === 'string' && value.startsWith(prefix);

/**
 * Checks if a string ends with a given suffix. Both arguments must be strings.
 * An empty suffix always returns true — native `String.prototype.endsWith` behaviour.
 * @param {*} value - The string to check.
 * @param {*} suffix - The suffix to look for.
 * @returns {boolean} - True if value ends with suffix, false otherwise.
 * @example
 * stringEndsWith('hello', 'llo');    // true
 * stringEndsWith('hello', '');      // true  — empty suffix matches everything
 * stringEndsWith('hello', 'world'); // false
 * stringEndsWith(123, 'llo');       // false — non-string value
 */
export const stringEndsWith = (value, suffix) =>
  typeof value === 'string' && typeof suffix === 'string' && value.endsWith(suffix);

/**
 * Checks if a string contains a given substring. Both arguments must be strings.
 * An empty substring always returns true — native `String.prototype.includes` behaviour.
 * @param {*} value - The string to check.
 * @param {*} substring - The substring to search for.
 * @returns {boolean} - True if value contains substring, false otherwise.
 * @example
 * stringIncludes('hello', 'ell');  // true
 * stringIncludes('hello', '');    // true  — empty substring matches everything
 * stringIncludes('hello', 'xyz'); // false
 * stringIncludes(123, 'ell');     // false — non-string value
 */
export const stringIncludes = (value, substring) =>
  typeof value === 'string' && typeof substring === 'string' && value.includes(substring);
