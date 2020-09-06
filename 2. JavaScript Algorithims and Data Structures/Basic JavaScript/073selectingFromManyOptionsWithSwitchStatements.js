/* Write a switch statement which tests val and sets answer for the following conditions:
1 - "alpha"
2 - "beta"
3 - "gamma"
4 - "delta" */

function caseInSwitch(val) { // function created, takes a value

    var answer = ""; // a variable is created within the function called 'answer' and stores an empty string.

    // Only change code below this line

  switch(val) { // switch statement is created and takes the value passed into the function.
    case 1: // the first if statement, if the value passed into the function equals 1, run this.
        return "alpha";
        break; // if this was correct, break out of the switch statement.

    case 2: // the else if statement, if the value passed into the function equals 2, run this.
        return "beta"; 
        break; // if this was correct, break out of the switch statement.

    case 3: // the next else if statement, if the value passed into the function equals 3, run this.
        return "gamma";
        break; // if this was correct, break out of the switch statement.

    case 4: // the final else if statement, if the value passed into the function equals 4, run this.
        return "delta";
        break; // if this was correct, break out of the switch statement.
  }
  
  
    // Only change code above this line
    return answer; 
  }
  
  caseInSwitch(1); // this will return "alpha" because 1 was passed into the function, and picked up in the first case in the switch statement.