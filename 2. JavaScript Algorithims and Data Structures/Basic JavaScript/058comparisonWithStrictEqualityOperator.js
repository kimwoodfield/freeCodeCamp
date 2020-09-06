// Use the strict equality operator in the if statement so the function will return "Equal" when val is strictly equal to 7

// Use the strict equality operator in the if statement so the function will return "Equal" when val is strictly equal to 7

// Setup
function testStrict(val) { // function created, function takes a value
    if (val === 7) { // Change this line // if statement created, if the value passed in strictly equals 7 then execute this
      return "Equal"; // if the value passed in strictly equals 7, return this.
    }
    return "Not Equal"; // if the value passed in does not strictly equal 7, return this.
  }
  
  testStrict(10);


  // It's worth mentioning that in the previous example, an equality operator == would still accept 7 if it was in a string like "7", but the strict equality operator expects the same data type. Since a string and a number are different data types, "7" will be false.