/* Fix the code so that i declared in the if statement is a separate variable than i declared in the first line of the function. Be certain not to use the var keyword anywhere in your code.

This exercise is designed to illustrate the difference between how var and let keywords assign scope to the declared variable. When programming a function similar to the one used in this exercise, it is often better to use different variable names to avoid confusion. */

function checkScope() { // function created 
    'use strict'; // code should be executed in 'strict mode'
    let i = 'function scope'; // create variable i
    if (true) { // if function is true..
      let i = 'block scope'; // variable i inside this if stateement is assigned the string 'block scope'.
      console.log('Block scope i is: ', i); // log the concatenated value of 'Block scope i is: block scope'.
    }
    console.log('Function scope i is: ', i); // log the concatenated string and variable - 'Function scope i is; function scope'.
    return i; // return the variable 'i' - 'function scope'
  }
  