// Gunther Willems 04/2025
// Unit testing with substrc(). Depricated function substr implemented with subString.
// Gives the same result as the c++ std::substr() function. With added functionality,
// length can be negative.

/* global substrc */
'use strict';

const output = document.getElementById('output');
const newline = '<br>';

// -------------------------------- Events -------------------------------------

// When the 'Run' button is clicked.
document.getElementById('buttonRun').onclick = function buttonRun () {
  let result = '';
  const s = '0123456789';

  // Start >= 0
  result += testSubstr(s, 0, 0, '');
  result += testSubstr(s, 0, 1, '0');
  result += testSubstr(s, 0, 9, '012345678');
  result += testSubstr(s, 0, 10, s);
  result += testSubstr(s, 9, 1, '9');
  result += testSubstr(s, 9, 2, '9');
  result += testSubstr(s, 8, 2, '89');
  result += testSubstr(s, 2, 3, '234');
  result += testSubstr(s, 5, 3, '567');
  result += testSubstr(s, 5, 0, '');

  // start < 0
  result += testSubstr(s, -5, 3, '567');
  result += testSubstr(s, -10, 3, '012'); // Same as 0, 3
  result += testSubstr(s, -10, 1, '0'); // Same as 0, 1

  // Past string boundaries
  result += testSubstr(s, 0, 11, s);
  result += testSubstr(s, 0, 100, s);
  result += testSubstr(s, 5, 100, '56789');
  result += testSubstr(s, 100, 1, '');
  result += testSubstr(s, -100, 1, '');
  result += testSubstr(s, -100, 3, '');

  result += testSubstr(s, -11, 3, '');
  result += testSubstr(s, -100, 100, '');

  // length < 0
  result += testSubstr(s, 5, -3, '345');
  result += testSubstr(s, -5, -3, '345');
  result += testSubstr(s, 0, -5, '0');

  // Without length
  result += testSubstr(s, 0, undefined, s);
  result += testSubstr(s, 0, undefined, s);
  result += testSubstr(s, 2, undefined, '23456789');
  result += testSubstr(s, -4, undefined, '6789');
  result += testSubstr(s, -1, undefined, '9');
  result += testSubstr(s, 0, undefined, s);
  result += testSubstr(s, 100, undefined, '');
  result += testSubstr(s, 9, undefined, '9');
  result += testSubstr(s, 10, undefined, '');
  result += testSubstr(s, 11, undefined, '');

  if (result === '') {
    result = 'No errors found.';
  }

  result += newline + newline;
  result += 'Test s.substrc(5, 3): ' + s.substrc(5, 3);

  output.innerHTML = result;
};

// ------------------------------- Functions -----------------------------------

/**
 * Test if substr(s, start, length) equals result, otherwise eeturn an error string.
 * @param {string} s
 * @param {number} start
 * @param {number} length
 * @param {string} result
 * @return {string}
 */
function testSubstr (s, start, length, result) {
  const str = substrc(s, start, length);

  if (str !== result) {
    return '<strong>Error for</strong> ' + start + ', ' + length + ': ' + str + ': ' + result + newline;
  }

  // Also show correct results
  // return '  ' + start + ', ' + length + ': ' + str + ': ' + result + newline;

  return '';
}

// -----------------------------------------------------------------------------
