# javascript-substr2

The JavaScript substr method is not part of the core JavaScript language and is not recommended to use.  
In this project I define substr using the standard substring method.

There are 2 versions.

- substr2 gives the exact same result as the original (deprecated) JavaScript String.prototype.substr().

- substrc gives the same result as C++ std::substr(). With added functionality, length can be negative to count backwards.


## substr2
 
The '2' after substr is to not conflict with String.prototype.substr that could exist.
A second version of substr.

substr2/substr2.js : defines substr2() and String.prototype.substr2()  
substr2/index.html : unit testing substr2

Definition:

- Implements substr with substring.
- Extract a part of a string, starting at position 'start' and take 'length' characters.
- It gives the same result as the original (deprecated) JavaScript String.prototype.substr().
- If 'start' is negative, count backwards from the end of the string.
- If 'length' is negative, an empty string is returned.
- If 'length' is undefined, take the substring until the end of the string.

- If the calculated start index is greater than the length of the string, an empty string is returned.
- If the calculated start index is negative, start counting from the first character.
- If the calculated end index is past the end of the string boundary, stop at the end of the string.

- Index of the first character is 0.

Examples:

~~~~javascript
substr2('0123456789', 2) // '23456789'
substr2('0123456789', 2, 3) // '234'
substr2('0123456789', -4) // '6789'
substr2('0123456789', -5, 3) // '567'
substr2('0123456789', 5, -3) // ''
substr2('0123456789', -5, -3) // ''

'0123456789'.substr2(5, 3) // '567'
~~~~


## substrc

The 'c' after substr indicates it works like c++ std::substr().
A c++ version of substr.

substrc/substrc.js : defines substrc() and String.prototype.substrc()  
substrc/index.html : unit testing substrc

Definition:

- Implements substr with substring.
- Extract a part of a string, starting at position 'start' and take 'length' characters.
- It gives the same result as the c++ std::substr() function. With added functionality, length can be negative to count backwards.
- If 'start' is negative, count backwards from the end of the string.
- If 'length' is negative, count backwards from the 'start' index.
- If no 'length' is given, take the substring until the end of the string.

- If the calculated start index exceeds the string boundary limits, an empty string is returned.
- If the calculated end index is past the end of the string, stop at the end of the string.

- Index of the first character is 0.

Examples:

~~~~javascript
substrc('0123456789', 2) // '23456789'
substrc('0123456789', 2, 3) // '234'
substrc('0123456789', -4) // '6789'
substrc('0123456789', -5, 3) // '567'
substrc('0123456789', 5, -3) // '345'
substrc('0123456789', -5, -3) // '345'

'0123456789'.substrc(5, 3) // '567'
~~~~
