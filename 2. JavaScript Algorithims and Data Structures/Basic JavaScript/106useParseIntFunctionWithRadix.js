// Use parseInt() in the convertToInteger function so it converts a binary number to an integer and returns it.

function convertToInteger(str) { // declare a function that takes a string

    return parseInt(str, 2); // returns the string and converts it from base 2
  
  }
  
  convertToInteger("10011");// function call, passes in the integer, converts to 19 because (binary because "10011" only has 0s and 1s to base 10 because JavaScript traditionally converts to base 10)