// Use bracket notation to find the last character in the lastName variable.

/* // Setup
var lastName = "Lovelace";

// Only change code below this line
var lastLetterOfLastName = lastName; // Change this line */

var lastLetterOfLastName = lastName[lastName.length - 1];
// lastName.length is 8 because Lovelace has 8 letters.
// 8 - 1 is 7.
// The computer starts counting at 0 so in this case, the 7th letter that the computer reads in Lovelace is e.