// Replace the two if statements with one statement, using the && operator, which will return "Yes" if val is less than or equal to 50 and greater than or equal to 25. Otherwise, will return "No".

function testLogicalAnd(val) { // function created, takes a value.
    // Only change code below this line
  
    if (val <= 50 && val >= 25) { // if statement created. If the value passed into the function is LESS THAN OR EQUAL TO 50 ANDDDD the value is GREATER THAN OR EQUAL TO 25, execute the following.
        return "Yes";
    }
  
    // Only change code above this line
    return "No"; // If the value passed into the function is not anything between 25-50, return this.
  }
  
  testLogicalAnd(10); // This will be returned as "NO" because it does not fall between 25-50.