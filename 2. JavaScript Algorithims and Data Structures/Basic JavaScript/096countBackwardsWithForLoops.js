// Push the odd numbers from 9 through 1 to myArray using a for loop.

// Setup
var myArray = []; // variable created called 'myArray' which stores an empty array.

// Only change code below this line
for (var i = 9; i > 0; i-=2) {
    //for loop created
    // variable of 'i' which is assigned '9'
    // if i (9) is more than 0, push the value of 'i' into the variable 'myArray's array.
    // now decrement the value of 'i' (9) by 2 
    // now check if 'i' (9-2=7) is more than 0. is it? if so, perform the action again etc.

    myArray.push(i);
}