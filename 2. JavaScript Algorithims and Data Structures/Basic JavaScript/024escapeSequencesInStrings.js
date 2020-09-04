/* Assign the following three lines of text into the single variable myStr using escape sequences.

FirstLine
    \SecondLine
ThirdLine

You will need to use escape sequences to insert special characters correctly. You will also need to follow the spacing as it looks above, with no spaces between escape sequences or words.

Here is the text with the escape sequences written out.

FirstLinenewlinetabbackslashSecondLinenewlineThirdLine

var myStr; // Change this line*/

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";

// Other things can be escape inside of a string, escaping characters allow:
// a) To allow you to use characters you may not otherwise be able to type out, such as a carriage return.
// b) To allow you to represent multiple quotes in a string without JavaScript misinterpreting what you mean.