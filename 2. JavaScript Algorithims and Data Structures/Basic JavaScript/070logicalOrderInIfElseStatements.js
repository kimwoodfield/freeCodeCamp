// Change the order of logic in the function so that it will return the correct statements in all cases.

function orderMyLogic(val) { //function created, takes a value
    if (val < 5) { // if value passed into function is less than 5, execute the following.
        return "Less than 5";
      }
    else if (val < 10) {// else if statement created. if value passed into function is less than 10, but greater than 5, execute the following.
      return "Less than 10";
    }  else { // if value passed into the function is greater than 10, execute the following.
      return "Greater than or equal to 10";
    }
  }
  
  orderMyLogic(7); // This will return as "Less than 10" because it is more than 5, which means it passed the first if statement and is picked up in the else if statement.