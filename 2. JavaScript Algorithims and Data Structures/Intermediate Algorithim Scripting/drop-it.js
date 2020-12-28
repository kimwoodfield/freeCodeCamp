function dropElements(arr, func) {

    // store a copy of the array argument
    let copyArgs = [...arr];
    console.log(copyArgs);

    // create an empty array to return if the function never evaluates to true
    let emptyArray = [];

    // create a counter / checkpoints to determine whether or not the function evaluated to true
    let counter = 0;
    for (let i = 0; i < copyArgs.length; i++) {
        // if the function doesn't evaluate to true on an iteration, increment the counter by 1
        if (func(arr[i]) !== true) {
            counter++;
            console.log(counter);
        }
    }
    // check if the value stored in counter matches the length of the array, if it matches then it means the function evaluated to false to every value in the array argument so we need to return an empty array.
    if (counter === arr.length) {
        return emptyArray;
    }
  
    // loop through each value in the copied array argument
    for (let i = 0; i <= copyArgs.length; i++) {
        // if a value evaluated to false in the func:
        if (func(arr[i]) !== true) {
            copyArgs.shift(); // remove it from the copyArgs
            console.log(copyArgs);
            // if a value evaluated to true in the func:
        } else if (func(arr[i]) === true) {
            console.log(copyArgs);
            return copyArgs; // return what values are stored in the copyArgs array
        } else {
            return emptyArray; // otherwise return an empty array
        }
    }

    return copyArgs;
  
  }
  
  dropElements([1, 2, 3, 4], function(n) {return n > 5;})
