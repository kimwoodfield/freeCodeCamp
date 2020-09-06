// Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.

function multiplyAll(arr) { //function created, takes the value of an array

    var product = 1; // variable is created called product and assigned a value of 1.

    // Only change code below this line
  
    for (var i = 0; i < arr.length; i++) {
        //for loop created
        // i loops through the array from start to finish

        for (var j = 0; j < arr[i].length; j++) {
            // second for loop created
            // j loops through the sub arrays
            

            product *= arr[i][j]; // for each element of the sub array, the value is multiplied with the value of product by the element in the array.

        }
    }

    // Only change code above this line
    return product;
  }
  
  multiplyAll([[1,2],[3,4],[5,6,7]]);
  