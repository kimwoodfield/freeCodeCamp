/* Write chained if/else if statements to fulfill the following conditions:

num < 5 - return "Tiny"
num < 10 - return "Small"
num < 15 - return "Medium"
num < 20 - return "Large"
num >= 20 - return "Huge" */



function testSize(num) { // function created, takes a value

    // Only change code below this line
  
    if (num < 5) { // if value passed into function is less than 5, execute.
        return "Tiny"; // if value passed into function is less than 5, return this.
    } else if (num < 10) { // value passed in is less than 10 but more than 5? execute.
        return "Small"; // return if passed value is less than 10.
    } else if (num < 15) { // value passed in is less than 15 but more than 10? execute.
        return "Medium";
    } else if (num < 20) { // value passed in is less than 20 but more than 15? execute.
        return "Large";
    } else if (num >= 20) { // value passed in is 20 or more? execute.
        return "Huge";
    }

  
    return "Change Me"; // if no value is entered, or the value is not covered by one of the if/else if statements then return this.

    // Only change code above this line
  }
  
  testSize(7); // This will return "Small" as it passes the first if statement, but fails at the second.