// Convert the logic to use else if statements.

function testElseIf(val) { // function created, takes in a value
    if (val > 10) { //if statement created. if the value passed into the function is more than 10, execute the following.
      return "Greater than 10"; // if value passed into function is more than 10, return this.
    } else if (val < 5) { // else if created. Otherwise, if the value passed in is smaller then 5, execute the following.
      return "Smaller than 5"; // if value passed into function is less than 5, return this.
    } else { // else statement created. if the value passed into the function is not covered by the above, execute the following.
        return "Between 5 and 10"; // if the value passed into function is between 5-10, return this.
    }
  }
  
  testElseIf(7); // This will return as "Between 5 and 10" because 7 is not more than 10 and not less than 5.