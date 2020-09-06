// Add the inequality operator != in the if statement so that the function will return "Not Equal" when val is not equivalent to 99

// Setup
function testNotEqual(val) { // function created, function takes a value
    if (val != 99) { // Change this line. // if the value passed in does not equal 99 then execute the following.
      return "Not Equal"; // if the value passed in does not equal 99 then return this.
    }
    return "Equal"; // if the value passed in DOES equal 99 then return this.
  }
  
  testNotEqual(10); // this will return "Not Equal" because it DOES NOT equal 99.