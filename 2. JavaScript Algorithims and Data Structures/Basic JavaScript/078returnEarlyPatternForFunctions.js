// Modify the function abTest so that if a or b are less than 0 the function will immediately exit with a value of undefined.

// Setup

function abTest(a, b) { // function created, takes two values

    // Only change code below this line
  
    if (a < 0 || b < 0) { // if statement created. if the value passed first is less than zero, OR the value passed second is less than 0, execute.
        return undefined; // if either value passed into the function was less than zero, 'undefined' is returned.
    }
  
    // Only change code above this line
  
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
    // returns the following.
    // The positive square root of a PLUS the positive square root of b.
    // Returns the total of the above to the exponent power.
    // Returns the value of a number rounded to the nearest integer.
  }
  
  abTest(2,2); 
