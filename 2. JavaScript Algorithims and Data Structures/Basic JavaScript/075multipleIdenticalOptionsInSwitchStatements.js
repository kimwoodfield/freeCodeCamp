/* Write a switch statement to set answer for the following ranges:
1-3 - "Low"
4-6 - "Mid"
7-9 - "High"

Note
You will need to have a case statement for each number in the range. */


function sequentialSizes(val) { // function created, takes a value
    var answer = ""; // a variable inside the function is created called 'answer' and holds an empty string.

    // Only change code below this line
  
    switch(val) { // switch statement is created and takes in the value which was passed into the function.
        case 1: // if the value passed in is 1, continue.
        case 2: // if the value passed in is 2, continue.
        case 3: // if the value passed in is 3, continue.
            answer = "Low"; // if the value passed in was 1, 2 or 3, the variable created above called 'answer' will now hold the string "Low". answer = "Low".
            break; // if the value passed into the function was 1, 2 or 3, break out of the switch statement now.
        
        case 4: // if the value passed in is 4, continue.
        case 5: // if the value passed in is 5, continue.
        case 6: // if the value passed in is 6, continue.
            answer = "Mid"; // if the value passed in was 4, 5 or 6, the variable created above called 'answer' will now hold the string "Mid". answer = "Mid".
            break; // if the value passed into the function was 4, 5 or 6, break out of the switch statement now.
        
        case 7: // if the value passed in is 7, continue.
        case 8: // if the value passed in is 8, continue.
        case 9: // if the value passed in is 9, continue.
            answer = "High"; // if the value passed in was 7, 8 or 9, the variable created above called 'answer' will now hold the string "High". answer = "High".
            break; // if the value passed into the function was 7, 8 or 9, break out of the switch statement now.
    }

  
    // Only change code above this line
    return answer; // once the switch statement has been broken out of, return what string the variable 'answer' now holds.
  }
  
  sequentialSizes(1); // This will return "Low" as the contents of the 'answer' variable because 1 is picked up in the first range of the switch statement.