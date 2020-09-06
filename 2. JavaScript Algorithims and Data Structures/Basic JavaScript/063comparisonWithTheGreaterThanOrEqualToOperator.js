// Add the greater than or equal to operator to the indicated lines so that the return statements make sense.



function testGreaterOrEqual(val) { // function created, function takes a value
    if (val >= 20) {  // Change this line. // if the value passed into the function is GREATER THAN OR EQUAL TO 20, then execute the following.
      return "20 or Over"; // if value passed into function is 20 or over, return this.
    }
  
    if (val >= 10) {  // Change this line. // if value passed into the function is 10 or more, but less than 20, execute the following.
      return "10 or Over"; // if value passed into function is 10 or more, but under 20, return this.
    }
  
    return "Less than 10"; // if value is less than 10 or empty than return this.
  }
  
  testGreaterOrEqual(10); // this will return "10 or over".