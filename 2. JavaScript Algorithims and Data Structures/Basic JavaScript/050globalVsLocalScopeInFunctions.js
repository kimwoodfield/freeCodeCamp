// Add a local variable to myOutfit function to override the value of outerWear with "sweater".


// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line



    var outerWear = "sweater" // the variable 'outerWear' has been declared again inside of the function. While inside of the function, its scope is considered LOCAL and as a result, the value of the local scoped variable will take precedence over the 'outerWear' declared outside of the function.
    // However, if 'outerWear' is logged to the console, 'T-Shirt' will be the value presented because it exists outside of the function.



  // Only change code above this line
  return outerWear;
}

myOutfit();
