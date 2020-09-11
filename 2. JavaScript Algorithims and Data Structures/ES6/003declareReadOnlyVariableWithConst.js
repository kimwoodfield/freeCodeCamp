// Change the code so that all variables are declared using let or const. Use let when you want the variable to change, and const when you want the variable to remain constant. Also, rename variables declared with const to conform to common practices, meaning constants should be in all caps.

function printManyTimes(str) { // function created
    "use strict"; // use strict mode
  
    // Only change code below this line
  
    const SENTENCE = str + " is cool!";  //variable created
    for (let i = 0; i < str.length; i+=2) { // while i is less than string length, log the below to the console. then increments the 'i' variable by 2
      console.log(SENTENCE); // logs the value of the sentence variable to the console.
    }
  
    // Only change code above this line
  
  }
  printManyTimes("freeCodeCamp"); // function call, will print the string 12 times because there are 12 letters in the string
   