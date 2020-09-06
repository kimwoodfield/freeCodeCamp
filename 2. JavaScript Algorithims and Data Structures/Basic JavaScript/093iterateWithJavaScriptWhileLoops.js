// Add the numbers 5 through 0 (inclusive) in descending order to myArray using a while loop.

// Setup
var myArray = []; // variable created called 'myArray' which stores an empty array.

// Only change code below this line
var i = 5; // variable created called 'i' which stores the number 5.

while (i >= 0) { //while loop created. while i (which is 5) is more than 0 or equal to 0, execute.

    myArray.push(i); // access the variable 'myArray' and push the value stored in i into the array.

    i--; // once the value has been pushed into the array, decrease the value of i by 1.
}