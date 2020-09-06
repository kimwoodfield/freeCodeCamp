// Convert the switch statement into an object called lookup. Use it to look up val and assign the associated string to the result variable.

// Setup
function phoneticLookup(val) { // function created, takes a value

    var result = ""; // variable created called 'result' which stores an empty string
  
    // Only change code below this line
    var lookup = { // variable converted from switch statement, called 'lookup' stores an object
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    }

    result = lookup[val]; // uses the value passed into the function to find the respective propertie's contents and store them inside the 'result' variable.
  
    // Only change code above this line
    return result; // the updated 'result' variable will be returned with the a string according to the value that was passed into the function.
  }
  
  phoneticLookup("charlie"); // will return "Chicago", because charlie was cross referenced in the 'lookup' variable, and the contents of the property 'charlie' was stored in the 'result' variable and then returned.