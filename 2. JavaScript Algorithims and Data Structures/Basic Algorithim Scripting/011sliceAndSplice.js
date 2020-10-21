/* Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs. */

function frankenSplice(arr1, arr2, n) {

    // create a copy of the second array
    let copiedSecondArr = arr2.slice(0, arr2.length);
  
    // go through the first array and send each item into the copy of the second array where the position matches the 'n' passed into the function
    for (let i = 0; i < arr1.length; i++) { 
      copiedSecondArr.splice(n, 0, arr1[i]);
      n++;
    }
  
  return copiedSecondArr;
  
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);