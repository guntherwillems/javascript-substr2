// Gunther Willems 03/2025
// Unit testing with substr2(). Depricated function substr implemented with subString.

/* global substr2 */
'use strict';

const output = document.getElementById('output');
const newline = '<br>\n';

// -------------------------------- Events -------------------------------------

// When the 'Run' button is clicked.
document.getElementById('buttonRun').onclick = function buttonRun () {
  let result = '';
  const s = '0123456789';

  // Start >= 0
  result += testSubstr(s, 0, 0); // ''
  result += testSubstr(s, 0, 1); // '0'
  result += testSubstr(s, 0, 9); // '012345678'
  result += testSubstr(s, 0, 10); // '0123456789'
  result += testSubstr(s, 0, 11); // '0123456789'
  result += testSubstr(s, 9, 1); // '9'
  result += testSubstr(s, 9, 2); // '9'
  result += testSubstr(s, 8, 2); // '89'
  result += testSubstr(s, 2, 3); // '234'
  result += testSubstr(s, 5, 3); // '567'
  result += testSubstr(s, 5, 11); // '56789'
  result += testSubstr(s, 5, 0); // ''

  // start < 0
  result += testSubstr(s, -5, 3); // '567'
  result += testSubstr(s, -10, 3); // '012' Same as 0, 3
  result += testSubstr(s, -10, 1); // '0' Same as 0, 1

  // Past string boundaries
  result += testSubstr(s, 0, 11); // '0123456789'
  result += testSubstr(s, 0, 100); // '0123456789'
  result += testSubstr(s, 5, 100); // '56789'
  result += testSubstr(s, 100, 1); // ''
  result += testSubstr(s, -100, 1); // '0'
  result += testSubstr(s, -100, 3); // '012'

  result += testSubstr(s, -11, 3); // '012'
  result += testSubstr(s, -100, 100); // '0123456789'
  result += testSubstr(s, 100, -100); // ''

  // length < 0, new functionality
  result += testSubstr(s, 5, -3); // ''
  result += testSubstr(s, -5, -3); // ''
  result += testSubstr(s, 0, -5); // ''
  result += testSubstr(s, -11, -5); // ''

  // Without length
  result += testSubstr(s, 0); // '0123456789'
  result += testSubstr(s, 2); // '23456789'
  result += testSubstr(s, -4); // '6789'
  result += testSubstr(s, -1); // '9'
  result += testSubstr(s, 100); // ''
  result += testSubstr(s, 9); // '9'
  result += testSubstr(s, 10); // ''
  result += testSubstr(s, 11); // ''

  if (result === '') {
    result = 'No errors found.';
  }

  result += newline + newline;
  result += 'Test s.substr2(5, 3): ' + s.substr2(5, 3);

  output.innerHTML = result;
};

// ------------------------------- Functions -----------------------------------

/**
 * Test if substr(s, start, length) equals the depricated s.substr(start, length), otherwise eeturn an error string.
 * @param {string} s
 * @param {number} start
 * @param {number} [length=undefined] - default undefined
 * @return {string}
 */
function testSubstr (s, start, length = undefined) {
  const str = substr2(s, start, length);
  const strSubstr = s.substr(start, length);

  if (str !== strSubstr) {
    return '<strong>Error for</strong> ' + start + ', ' + length + ': ' + str + ': ' + strSubstr + newline;
  }

  // Also show correct results
  // return start + ', ' + length + ': ' + str + ': ' + strSubstr + newline;

  return '';
}

// -----------------------------------------------------------------------------
