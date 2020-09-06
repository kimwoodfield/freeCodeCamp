// Change the while loop in the code to a do...while loop so the loop will push only the number 10 to myArray, and i will be equal to 11 when your code has finished running.

// Setup
var myArray = []; // variable 'myArray' is created and assigned an empty array

var i = 10; // variable i is created and assigned a value of 10

// Only change code below this line
do { // start do while loop. 
    myArray.push(i); // push the value of i into the array.
    i++ // now increment value of i by 1.
}
while (i < 5); // now check if i is less than 5.
// do while executes before checking so regardless the loop will be executed once.