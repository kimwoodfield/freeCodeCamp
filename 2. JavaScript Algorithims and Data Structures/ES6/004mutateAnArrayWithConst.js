// An array is declared as const s = [5, 7, 2]. Change the array to [2, 5, 7] using various element assignment.

const s = [5, 7, 2]; // variable created which is an array
function editInPlace() { // function created to edit array
  'use strict';
  // Only change code below this line

  s[0] = 2; // changes the value of the first value in the array with the variable of 's' to 2. the array in 's' is now [2, 7, 2];
  s[1] = 5; // changes the value of the second value in the array with the variable of 's' to 5. the array in 's' is now [2, 5, 2];
  s[2] = 7; // changes the value of the third value in the array with the variable of 's' to 7. the array in 's' is now [2, 5, 7];

  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace(); // function call