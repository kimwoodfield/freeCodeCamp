// Let's try to set thirdLetterOfLastName to equal the third letter of the lastName variable using bracket notation.

/* // Setup
var lastName = "Lovelace";

// Only change code below this line
var thirdLetterOfLastName = lastName; // Change this line */

var thirdLetterOfLastName = lastName[2];
// When using bracket notation, you have to remember that zero-based indexing applies. 1 does not mean the FIRST letter. Computers start counting at zero so if you want to select the first item, you have to use 0.