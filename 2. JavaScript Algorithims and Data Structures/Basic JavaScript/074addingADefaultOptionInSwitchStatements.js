/* Write a switch statement to set answer for the following conditions:
"a" - "apple"
"b" - "bird"
"c" - "cat"
default - "stuff" */


function switchOfStuff(val) { // function created, takes a value

    var answer = ""; // a variable is created inside the function called 'answer' which stores an empty string.

    // Only change code below this line
  
  switch(val) { // switch statement is created that takes the value passed into the function.

    case "a": // IF "a" was passed into the function, execute.
        answer = "apple"; // if "a" was passed into the function, the variable 'answer' created above will now hold the string value of "apple".
        break; // if "a" was passed into the function, break out of the switch statement now.

    case "b": // ELSE IF "b" was passed into the function, execute.
        answer = "bird"; // if "b" was passed into the function, 'answer' now holds the value of "bird".
        break; // if "b" was passed into function, break out of switch statement now.

    case "c": // ELSE IF "c" was passed into function, execute this.
        answer = "cat"; // if "c" was passed int function, variable 'answer' now holds the value "cat".
        break; // if "c" was passed into function, break out of switch statement now.

    default: // ELSE, if the value passed into the function is anything other then what was mentioned above or an empty value, execute.
        answer = "stuff"; 
        break; // if anything other than what was covered above is passed into the function, or nothing was passed into the function, break out of the switch statement with the variable 'answer' now storing the string of "stuff". AKA answer = "stuff" instead of answer = "";
  }
  
    // Only change code above this line
    return answer; // after the switch statement is broken out of, the variable 'answer' will now hold whichever was covered by the switch statement and be returned.
  }
  
  switchOfStuff(1); // This will return "stuff" because it was not "a", "b" or "c".