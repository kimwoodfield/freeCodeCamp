// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

// function created, takes an array and a function.
function findElement(arr, func) {

    // store 0 in a variable - 'num'
    let num = 0;
  
    // loop through the array while 0 is less than the length of the array.
    for (let i = 0; i < arr.length; i++) {

      // store the indexed number in the array inside the 'num' variable.  
      let num = arr[i];

      // if the value stored in the 'num' variable is passed into the function,
      if (func(num)) {

        // then return that value.
        return num;
      }
    }
  
    // if the value isn't in the array, return undefined.
    return undefined;
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);
  