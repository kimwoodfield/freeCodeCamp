// Add ["Paul",35] to the beginning of the myArray variable using unshift().

/* // Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line */

var myArray = [ ["John", 23], ["dog", 3] ];
myArray.shift();

myArray.unshift(["Paul", 35]);

// You guessed it. Just as something can be taken away, it can also be given. We use Unshift() to add something to the beginning. Here we are accessing the variable 'myArray' and then using .unshift() to push a new array '["Paul", 35] into the 'myArray' variable.
// myArray should now hold the value [ ["Paul", 35], ["dog", 3] ]

// Unshift() adds to the beginning.