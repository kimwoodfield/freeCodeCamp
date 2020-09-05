// Use the .shift() function to remove the first item from myArray, assigning the "shifted off" value to removedFromMyArray.

/* // Setup
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
var removedFromMyArray;
*/ 

var myArray = [ ["John", 23], ["dog", 3] ];

var removedFromMyArray = myArray.shift();

// Just as things can be added to the end of an array with Push() and things can be taken off the end with Pop(), things can also be taken off the beginning with Shift().
// In this example, we are using .shift() to take the first value off the 'myArray' variable which happens to be an array - ["John", 23]. 
// This means the array 'removedFromMyArray' has the value of ["John", 23];

// Shift() removes the first value.