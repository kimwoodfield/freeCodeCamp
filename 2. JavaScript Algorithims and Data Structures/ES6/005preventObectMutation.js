// In this challenge you are going to use Object.freeze to prevent mathematical constants from changing. You need to freeze the MATH_CONSTANTS object so that no one is able to alter the value of PI, add, or delete properties.

function freezeObj() { // function created
    'use strict'; // use strict mode
    const MATH_CONSTANTS = { // variable created with object
      PI: 3.14 // object contents is key value pair of string and number
    };
    // Only change code below this line
  
  Object.freeze(MATH_CONSTANTS); // freeze the object where the object name is 'MATH_CONSTANTS'.
  
    // Only change code above this line
    try { // test this code for errors while executing
      MATH_CONSTANTS.PI = 99; // change value of the object contents to 99.
    } catch(ex) { // if an error occurs execute this..
      console.log(ex); //
    }
    return MATH_CONSTANTS.PI; // return the value of the contents of the MATHS_CONSTANTS object.
  }
  const PI = freezeObj(); // variable created called PI which stores the function above
  