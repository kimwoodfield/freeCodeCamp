// Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.

// Setup
var myArr = [ 2, 3, 4, 5, 6]; // variable myArr is created and is assigned an array.

// Only change code below this line

var total = 0; // variable 'total' is created and assigned the value of 0.

for (var i = 0; i < myArr.length; i++) {
    // for loop created
    // var i declared and assigned value of 0
    // while i's value is less than the length of myArr's array, execute the following.

    total += myArr[i]; 
    // update the variable 'total'
    // every time the loop passes through the array, it adds a value from the array to 'total'. This ends up adding every value in myArr's array together to get 20.

}
