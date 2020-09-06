// Add the greater than operator to the indicated lines so that the return statements make sense.

function testGreaterThan(val) { // function created, function takes a value
    if (val > 100) {  // Change this line. // if statement created, if the value passed into the function is GREATER THAN 100, execute the following.
      return "Over 100"; // if value passed into function is more than 100, return this.
    }
  
    if (val > 10) {  // Change this line. // If statement created, if the value passed into the function is GREATER THAN 10, but less than 100, execute the following.
      return "Over 10"; // if value passed into the function is over 10 but less than 100, return this.
    }
  
    return "10 or Under"; // if the value passed in was 10 or below then return this.
  }
  
  testGreaterThan(10);