/// https://github.com/guntherwillems/javascript-substr2
/// Author: Gunther Willems
/// Version: 1.0.0 04/04/2025
/// License: MIT

'use strict';

/**
 * subsctrc
 * The 'c' after substr indicates it works like c++ std::substr().
 *
 * Definition:
 *
 * - Implements substr with substring.
 * - Extract a part of a string, starting at position 'start' and take 'length' characters.
 * - It gives the same result as the c++ std::substr() function. With added functionality, length can be negative to count backwards.
 * - If 'start' is negative, count backwards from the end of the string.
 * - If 'length' is negative, count backwards from the 'start' index.
 * - If no 'length' is given, take the substring until the end of the string.
 *
 * - If the calculated start index exceeds the string boundary limits, an empty string is returned.
 * - If the calculated end index is past the end of the string, stop at the end of the string.
 *
 * - Index of the first character is 0.
 *
 * Examples:
 *   substrc('0123456789', 2) // '23456789'
 *   substrc('0123456789', 2, 3) // '234'
 *   substrc('0123456789', -4) // '6789'
 *   substrc('0123456789', -5, 3) // '567'
 *   substrc('0123456789', 5, -3) // '345'
 *   substrc('0123456789', -5, -3) // '345'
 *   substrc('0123456789', 5, 100) // '56789'
 *
 * @param {string} s - the input string
 * @param {number} start - start index
 * @param {number} [length=undefined] - default undefined = until end of string
 * @returns {string}
 */
function substrc (s, start, length = undefined) {
  const sLength = s.length;

  // If start exceeds the string boundary limits, return an empty string
  if (start < -sLength || start >= sLength) {
    return '';
  }

  // Adjust start position. No need to declare a new variable.
  if (length < 0) {
    start++;
  } else if (length === undefined && start < 0) {
    start--;
  }

  if (start >= 0) {
    return length === undefined ? s.substring(start) : s.substring(start, start + length);
  } else { // start is negative
    return length === undefined
      ? s.substring(sLength + start + 1)
      : s.substring(sLength + start, sLength + start + length);
  }
}

// -----------------------------------------------------------------------------

/**
 * Extend the String prototype with substrc
 * Example:
 *   '0123456789'.substrc(5, 3) // '567'
 * @param start
 * @param {number} [length=undefined] - default undefined = until end of string
 * @return {string}
 */
// eslint-disable-next-line no-extend-native
String.prototype.substrc = function (start, length = undefined) {
  return substrc(this, start, length);
};

// -----------------------------------------------------------------------------
