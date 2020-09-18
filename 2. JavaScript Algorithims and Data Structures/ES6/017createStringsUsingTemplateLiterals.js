/* Use template literal syntax with backticks to create an array of list element (li) strings. Each list element's text should be one of the array elements from the failure property on the result object and have a class attribute with the value text-warning. The makeList function should return the array of list item strings.

Use an iterator method (any kind of loop) to get the desired output (shown below). */


const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {

    // Only change code below this line
    const failureItems = []; // variable declaration
    for (var i = 0; i == failureItems.length; i++) { // loop created
    // while i is equal to the length of the array, run the loop.
      failureItems.push(`<li class="text-warning">${result.failure[0]}</li>`); // push this to the array.
      failureItems.push(`<li class="text-warning">${result.failure[1]}</li>`); // push this to the array.
      failureItems.push(`<li class="text-warning">${result.failure[2]}</li>`); // push this to the array.
    }
    // Only change code above this line
  
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);