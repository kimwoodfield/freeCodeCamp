/* Using var, declare a global variable named myGlobal outside of any function. Initialize it with a value of 10.

Inside function fun1, assign 5 to oopsGlobal without using the var keyword. */

/* // Declare the myGlobal variable below this line


function fun1() {
  // Assign 5 to oopsGlobal Here

}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}*/


// Declare the myGlobal variable below this line
var myGlobal = 10; // The variable 'myGlobal' now holds the value of 10. This variable has global scope and can be accessed anywhere.

function fun1() {
    // Assign 5 to oopsGlobal Here
    oopsGlobal = 5; // the Variable 'oopsGlobal' now holds the value of 5, but only within the function. If called outside of the function, oopsGlobal has not been created as a variable or given a value.
  }
  
  // Only change code above this line
  
  function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
      output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
      output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
  }


