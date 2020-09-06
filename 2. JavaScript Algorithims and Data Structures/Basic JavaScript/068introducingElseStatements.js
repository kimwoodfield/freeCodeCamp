// Combine the if statements into a single if/else statement.

function testElse(val) { // function created, takes a value
    var result = ""; // a variable named 'result' is created and has the value of an empty string.

    // Only change code below this line
  
    if (val > 5) { // if statement created, if the value passed into the function is GREATER THAN 5, the variable 'result' will now store the string "Bigger than 5".
      result = "Bigger than 5";
    } else { // else statement created, if the value is NOT GREATER THAN 5, the variable 'result' will store the string "5 or smaller".
      result = "5 or Smaller";
    }
  
    // Only change code above this line
    return result; // once the value is evaluated, the variable 'result' will be returned with it's new string.
  }
  
  testElse(4); // This should return "5 or smaller", as the number passed into the function was NOT bigger than 5.
  