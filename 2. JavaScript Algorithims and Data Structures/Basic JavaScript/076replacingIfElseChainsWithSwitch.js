// Change the chained if/else if statements into a switch statement.

function chainToSwitch(val) { // function is created, takes a value

    var answer = ""; // variable is created called 'answer' and stores an empty string.

    // Only change code below this line
  
    switch(val) { // switch statement created, takes the value passed into the function

        case "bob": // if the value passed into the function was "bob", execute.
            answer = "Marley"; // if value passed in was "bob", the variable 'answer' now holds the string "Marley".
            break; // if value passed was "bob" break out of the switch statement now.
        
        case 42: // if the value passed into the function was 42, execute.
            answer = "The Answer"; // if value passed in was 42, the variable 'answer' now holds the string "The Answer".
            break; // if value passed was 42 break out of the switch statement now.
        
        case 1: // if the value passed into the function was 1, execute.
            answer = "There is no #1"; // if value passed in was 1, the variable 'answer' now holds the string "There is no #1".
            break; // if value passed was 1 break out of the switch statement now.
        
        case 99: // if the value passed into the function was 99, execute.
            answer = "Missed me by this much!"; // if value passed in was 99, the variable 'answer' now holds the string "Missed me by this much!".
            break; // if value passed was 99 break out of the switch statement now.
        
        case 7: // if the value passed into the function was 7, execute.
            answer = "Ate Nine"; // if value passed in was 7, the variable 'answer' now holds the string "Ate Nine".
            break; // if value passed was 7 break out of the switch statement now.
    }
  
    // Only change code above this line
    return answer; // if the value passed into the function was covered in the switch statement, the variable 'answer' is returned with its new string.
  }
  
  chainToSwitch(7); // This will return "Ate Nine", as 7 is picked up in the last range within the switch statement.
  