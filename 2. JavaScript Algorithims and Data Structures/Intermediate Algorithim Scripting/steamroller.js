function steamrollArray(arr) {

    // create a copy of the argument
    let copy = [...arr];

    // create an array to store the values found into
    let flattenedArray = [];

    // create our own flatten array function
    let flatten = function(arg) {
        // if the argument is not an array
        if (!Array.isArray(arg)) {
            // push the value stored in this array into our flattenedArray above
            flattenedArray.push(arg);
        } else {
            // otherwise loop through each value in the argument
            for (let a in arg) {
                // and perform the function again but on the value of the original argument
                flatten(arg[a]);
            }
        }
    };

    // function call on each element in the argument's array
    arr.forEach(flatten);

    // return the results
    return flattenedArray;
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);