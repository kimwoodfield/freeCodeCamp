// Use destructuring assignment with the rest parameter to perform an effective Array.prototype.slice() so that arr is a sub-array of the original array source with the first two elements omitted.

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // Only change code below this line
  const [a,b,...arr] = list; // Change this line
  // constant variable of a and b which take the first two values of the array and then the remainder of the array is stored in the variable 'list'.
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);