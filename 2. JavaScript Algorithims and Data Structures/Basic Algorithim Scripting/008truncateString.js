// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

// function created, takes in a string and number
function truncateString(str, num) {

    // if the length of the string, is greater than the number passed in, enter the if statement.
    if (str.length > num) {

      // create a substring of the string passed in starting at the 0th position and ending at the position equal to 'num' that was passed in and store it in a variable.  
      let leftOverString = str.substring(0, num);

      // return the variable and add "..." to the end of it.
      return leftOverString + "...";

      // if the above case doesn't apply, execute this else statement.
    } else {

      // Which returns the string as is.  
      return str;
    }
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);