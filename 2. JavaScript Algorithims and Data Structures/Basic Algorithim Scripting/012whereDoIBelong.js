// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

function getIndexToIns(arr, num) {

    // create a copy of the passed in array
    let copiedArr = [...arr];
  
    // push the num passed in into the array
    copiedArr.push(num);
  
    // sort the copied array numerically to see where the value of 'num' should appear.
    copiedArr.sort(function(a, b) {
      return a - b;
    });
  
    // store the location of where num is in the numerically sorted array
    let correctIndex = copiedArr.indexOf(num);
  
    // return the location of where num would be stored numerically if the original array was resorted.
    return correctIndex;
  
  }
  
  getIndexToIns([40, 60], 50);