// Use the .pop() function to remove the last item from myArray, assigning the "popped off" value to removedFromMyArray.

/* // Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
var removedFromMyArray; */

var myArray = [ ["John", 23], ["cat", 2], ];

var removedFromMyArray = myArray.pop();
// Just as we can push something onto the end of an array, we can also pop something off.
// In this example we are accessing the 'myArray' variable and popping off the last value in that array which happens to be an array - ["cat", 2]. So now the 'removedFromMyArray' variable will have ["cat", 2] stored inside.

// Pop() takes off from the end.