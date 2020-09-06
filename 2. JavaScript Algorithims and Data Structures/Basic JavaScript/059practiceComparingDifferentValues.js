// The compareEquality function in the editor compares two values using the equality operator. Modify the function so that it returns "Equal" only when the values are strictly equal.

// Setup
function compareEquality(a, b) { // function created, pass in two values.
    if (a === b) { // Change this line. // if statement created, if the two values passed in strictly equal the same amount, execute the following.
      return "Equal"; // if both values passed in strictly equal the same value then return this.
    }
    return "Not Equal"; // if both values passed in do not strictly equal the same value, or nothing was passed through the function then return this.
  }
  
  compareEquality(10, "10"); // this will return false, as the first value is a number data type and the second value is a string data type.
  