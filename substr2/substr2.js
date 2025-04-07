/// https://github.com/guntherwillems/javascript-substr2
/// Author: Gunther Willems
/// Version: 1.0.0 04/04/2025
/// License: MIT

'use strict';

/**
 * substr2
 * The '2' after substr is to not conflict with String.prototype.substr() that could exist.
 * A second version of substr.
 *
 * Definition:
 *
 * - Implements substr with substring.
 * - Extract a part of a string, starting at position 'start' and take 'length' characters.
 * - It gives the same result as the original (deprecated) JavaScript String.prototype.substr().
 * - If 'start' is negative, count backwards from the end of the string.
 * - If 'length' is negative, an empty string is returned.
 * - If 'length' is undefined, take the substring until the end of the string.
 *
 * - If the calculated start index is greater than the length of the string, an empty string is returned.
 * - If the calculated start index is negative, start counting from the first character.
 * - If the calculated end index is past the end of the string boundary, stop at the end of the string.
 *
 * - Index of the first character is 0.
 *
 * Examples:
 *   substr2('0123456789', 2) // '23456789'
 *   substr2('0123456789', 2, 3) // '234'
 *   substr2('0123456789', -4) // '6789'
 *   substr2('0123456789', -5, 3) // '567'
 *   substr2('0123456789', 5, -3) // ''
 *   substr2('0123456789', -5, -3) // ''
 *   substr2('0123456789', 5, 100) // '56789'
 *
 * @param {string} s
 * @param {number} start
 * @param {number} [length=undefined] - default undefined = until end of string
 * @returns {string}
 */
function substr2 (s, start, length = undefined) {
  if (length < 0) return '';

  const sLength = s.length;
  // Adjust start position. No need to declare a new variable.
  if ((start < 0) && (-start > sLength)) start = 0;

  if (start >= 0) {
    return length === undefined ? s.substring(start) : s.substring(start, start + length);
  } else {
    return length === undefined ? s.substring(sLength + start) : s.substring(sLength + start, sLength + start + length);
  }
}

// -----------------------------------------------------------------------------

/**
 * Extend the String prototype with substr2
 * Using substr2 to not conflict with String.prototype.substr that could exist.
 * Example:
 *   '0123456789'.substr2(5, 3) // '567'
 *
 * @param start
 * @param {number} [length=undefined] - default undefined = until end of string
 * @return {string}
 */
// eslint-disable-next-line no-extend-native
String.prototype.substr2 = function (start, length = undefined) {
  return substr2(this, start, length);
};

// -----------------------------------------------------------------------------
