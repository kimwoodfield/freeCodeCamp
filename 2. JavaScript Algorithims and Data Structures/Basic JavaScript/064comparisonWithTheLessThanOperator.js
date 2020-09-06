// Add the less than operator to the indicated lines so that the return statements make sense.

function testLessThan(val) { // function created, takes a value
    if (val < 25) {  // Change this line. // if statement created, if value passed into the function is less than 25, execute the following.
      return "Under 25"; // if value passed into function is under 25, return this.
    }
  
    if (val < 55) {  // Change this line. // if value passed into function is less than 55, but greater than 25, execute the following.
      return "Under 55"; 
    }
  
    return "55 or Over"; // if value passed into the function is over 55 or empty, return this.
  }
  
  testLessThan(10); // this will be return as "under 25" because it is less than 25.
  