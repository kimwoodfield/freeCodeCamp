// Add the less than or equal to operator to the indicated lines so that the return statements make sense.

function testLessOrEqual(val) { // function created, takes a value
    if (val <= 12) {  // Change this line. // if statement created, if the value passed into the function is LESS THAN OR EQUAL TO 12 then execute the following.
      return "Smaller Than or Equal to 12";
    }
  
    if (val <= 24) {  // Change this line. // if statement created, if the value passed into the function is LESS THAN OR EQUAL TO 24, but more than 12, execute the following.
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24"; // if the value passed into the function is more than 24 or empty, then return this.
  }
  
  testLessOrEqual(10); // This will return "smaller than or equal to 12", because it does not exceed the first if statement.