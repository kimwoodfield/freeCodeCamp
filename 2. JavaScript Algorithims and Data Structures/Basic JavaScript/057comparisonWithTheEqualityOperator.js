// Add the equality operator to the indicated line so that the function will return "Equal" when val is equivalent to 12.

// Setup
function testEqual(val) { // a function is created that takes a value.
    if (val == 12) { // Change this line. // if the value passed in is 12 or equals 12, execute whats in this.
      return "Equal"; // if the value passed in was 12 or equal to 12, return this.
    }
    return "Not Equal"; // if nothing was passed in or the value passed in was not 12 or equal to 12, return this.
  }
  
  testEqual(10);
  