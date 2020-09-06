/* Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

Add the number to the end of the array, then remove the first element of the array.

The nextInLine function should then return the element that was removed.

*/

function nextInLine(arr, item) { // a function is created called 'nextInLine' that takes an array and a number / value.
    // Only change code below this line
    arr.push(item); // the number / value is pushed onto the end of an array.
    return arr.shift(); // the first number / value in the existing array is taken off.

    return item; // because a function can only return once, this return never happens.
    // Only change code above this line
    
  
  }
  
  // Setup
  var testArr = [1,2,3,4,5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));