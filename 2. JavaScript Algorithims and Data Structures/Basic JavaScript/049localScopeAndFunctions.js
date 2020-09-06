/* The editor has two console.logs to help you see what is happening. Check the console as you code to see how it changes. Declare a local variable myVar inside myLocalScope and run the tests.

Note: The console will still have 'ReferenceError: myVar is not defined', but this will not cause the tests to fail. */

function myLocalScope() {
    'use strict';
  
    // Only change code below this line
    var myVar = "foo"; // I have declared the variable of 'myVar' with a value of "foo" that exists inside of the function 'myLocalScope'. If 'myVar' is typed into the console it will return as undefined, because it has only been defined INSIDE of the function, it doesn't exist outside the confines of the function.


    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);
  