// Push the odd numbers from 1 through 9 to myArray using a for loop.

// Setup
var myArray = [];

// Only change code below this line


for (var i = 1; i < 10; i+= 2) { //for loop created
    // variable 'i' stores 1.
    // 1 is less than 10, so push 1 onto the array in 'myArray'.
    // Now increase i by 2. i = 1 + 2, i now = 3.
    // Now run the loop again, is 3 less than 10? Yes, so repeat the loop and push the new value into the array again.
    // continue until the value of 'i' is still less than 10.
    // once the value is 10 or greater, stop the loop.

    myArray.push(i);
}