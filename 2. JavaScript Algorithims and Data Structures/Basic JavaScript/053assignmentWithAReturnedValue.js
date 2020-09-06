// Call the processArg function with an argument of 7 and assign its return value to the variable processed.

// Setup
var processed = 0; // Variable 'processed' is given the value of 0.

function processArg(num) { // Function 'processArg' is created that takes in a single number, indicated by the paranetheses.
  return (num + 3) / 5; // When the function is called, 3 is added to the value passed into the parentheses and then the equaling number is divided by 5. The brackets indicated that the 'num + 3' needs to be calculated first, just like in mathematics. 
  // The return indicates that the resulting value is to be returned.
}

// Only change code below this line
var processed = processArg(7); 
// the variable 'processed' is created that stores the function 'processArg' from above with the number '7' passed through. This means that 'processed' will hold the value of 2 as that is the resulting value.