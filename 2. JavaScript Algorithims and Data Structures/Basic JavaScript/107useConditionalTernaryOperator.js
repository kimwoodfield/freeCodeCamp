// Use the conditional operator in the checkEqual function to check if two numbers are equal or not. The function should return either "Equal" or "Not Equal".

function checkEqual(a, b) { // function created, takes two values

    return a === b ? "Equal" : "Not Equal";
    // does a strictly equal b?
    // if true, return "Equal"
    // if false, return "Not Equal";

}

checkEqual(1, 2); // returns "Not Equal"
