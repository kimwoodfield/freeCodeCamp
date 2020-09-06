// Combine the two if statements into one statement which returns "Outside" if val is not between 10 and 20, inclusive. Otherwise, return "Inside".

function testLogicalOr(val) { // function created, takes a value
    // Only change code below this line
  
    if (val < 10 || val > 20) { // if the value passed into the function is not between 10-20, execute the followiing. 
      return "Outside";
    }
  
    // Only change code above this line
    return "Inside"; // if the value passed into the function falls between 10-20, return this.
  }
  
  testLogicalOr(15); // This will return "Inside" because 15 is in between 10 and 20.