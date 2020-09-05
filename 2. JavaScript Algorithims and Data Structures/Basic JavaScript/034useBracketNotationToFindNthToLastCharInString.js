// Use bracket notation to find the second-to-last character in the lastName string.

/* // Setup
var lastName = "Lovelace";

// Only change code below this line
var secondToLastLetterOfLastName = lastName; // Change this line
 */

 var secondToLastLetterOfLastName = lastName[lastName.length - 2];
 // Lovelace has 8 letters.
 // 8 - 2 = 6.
 // The computer counts Lovelace as 7 letters due to starting at 0 instead of 1.
 // The 6th letter in Lovelace is counted by the computer as the second last letter which is 'c'.