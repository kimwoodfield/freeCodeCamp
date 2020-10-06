// Remove all falsy values from an array.

function bouncer(arr) {

    // create a new array
    let truthArray = [];
    
    // loop through each item in the array
    for (let i = 0; i < arr.length; i++) {
  
      // store the boolean value of each item in a variable
      let newBool = Boolean(arr[i]);
  
      // if the boolean value evaluates to true, push it to the truthArray
      if (newBool == true) {
        truthArray.push(arr[i]);
      }
    }
    // return the truthArray
    return truthArray;
  }
  
  bouncer([7, "ate", "", false, 9]);