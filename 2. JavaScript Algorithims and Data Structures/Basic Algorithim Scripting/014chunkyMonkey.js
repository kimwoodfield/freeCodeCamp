// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {

    // create a new array to store the chunks into
    let newArr = [];
  
    // loop through each item in the array, after indexing over a position, i will equal to itself added with the size value passed in.
    for (let i = 0; i < arr.length; i += size) {
  
      // remove elements between the position that matches the value of i and the position that matches the value stored in i plus the value passed in as size. after these elements have been removed, push them into the new array we created in newArr.
      newArr.push(arr.slice(i, i + size));
    }
  
    // then return the new array we created and stored in the newArr variable.
    return newArr;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);