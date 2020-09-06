// Create a function addFive without any arguments. This function adds 5 to the sum variable, but its returned value is undefined.

// Setup
var sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line


function addFive() { // a function called 'addFive' is created.
    sum = sum + 5; // when executed, the variable 'sum' is called and the number 5 is added to it. The variable 'sum' then holds the value of '5' because it was originally 0. However, because the value is not returned, it does not leave the function. Therefore, sum will still be 0 if the end value is not returned. Adding 'return sum' after the 'sum = sum + 5' (also written as 'sum += 5') will mean that the new value will be carried outside of the function.
}


// Only change code above this line

addThree();
addFive();