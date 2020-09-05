// Using bracket notation select an element from myArray such that myData is equal to 8.

/* // Setup
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

// Only change code below this line
var myData = myArray[0][0]; */

var myArray = [ [1,2,3], [4,5,6], [7,8,9], [[10,11,12],13,14] ];

var myData = myArray[2][1];
// In this challenge we use bracket notation again to retrieve 8 and store it in myData.
// The logic behind accessing this value is as follows.
// we write 'myArray' to show that's what variable we want to access. We then write [2], because the first array is counted as 0. So the computer counts to 2 which lands on [7,8,9] and then we write [1] because the computer counts 7 as 0 and 8 as 1.