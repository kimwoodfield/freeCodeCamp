// Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.

function sum(arr, n) { // function is created that takes an array and a number (must be the same length or less than length of the array passed in)
    // Only change code below this line

    if (n <= 0) {  // if the number passed in is less than or equal to 0, return the following.

        return 0; // break out of the function and return this if the number passed in is 0 or less than 0.

      } else { // otherwise,

        return sum(arr, n - 1) + arr[n - 1];   

      }
  
    // Only change code above this line
  }
  