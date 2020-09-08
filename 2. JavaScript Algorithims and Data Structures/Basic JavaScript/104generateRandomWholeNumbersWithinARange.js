// Create a function called randomRange that takes a range myMin and myMax and returns a random whole number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive.

function randomRange(myMin, myMax) { //function created, takes two values

    // Only change code below this line

    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin); 
    // randomRange(5, 10) // function call
    // here we go!
    // Math.floor(Math.random() * (10 - 5 + 1) + 5) // fill in the variables
    // Math.floor(0.1 * (10 - 5 + 1) + 5)
    // Math.floor(0.1 * (6) + 5)
    // Math.floor(0.6 + 5)
    // Math.floor(5.6)
    // 5 - ta da!

    // Only change code above this line
  }