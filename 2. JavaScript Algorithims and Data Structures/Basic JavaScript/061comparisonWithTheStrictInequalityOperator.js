// Add the strict inequality operator to the if statement so the function will return "Not Equal" when val is not strictly equal to 17

// Setup
function testStrictNotEqual(val) { //function is created, the function takes a value
    if (val !== 17) { // Change this line. // if statement created, if the value passed in does not equal 17 with the same data type then execute the following.
      return "Not Equal"; // if the value passed in does not strictly equal 17 with the same data type then return this.
    }
    return "Equal"; // if the value passed into the function strictly equals 17 with the same data type then return this.
  }
  
  testStrictNotEqual(10); // This will return "Not Equal" because it does not equal 17.