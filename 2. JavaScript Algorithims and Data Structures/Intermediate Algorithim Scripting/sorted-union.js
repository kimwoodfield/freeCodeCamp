function uniteUnique(arr) {

    // get access to all other arguments
    let args = Array.prototype.slice.call(arguments);
    console.log(args);

    // create an empty array
    let arrays = [];
    console.log(arrays);

    // push all of the values into an aray
    for (let i = 0; i < args.length; i++) {
        for (let j = 0; j < args[i].length; j++) {
            arrays.push(args[i][j]);
        }
    }
    console.log(arrays);

    // sort the array in order from lowest to highest value
    // arrays = arrays.sort();
    // console.log(arrays);

    let tempArr = [];
    // remove any duplicates
    for (let i = 0; i < arrays.length; i++) {
        if (!tempArr.includes(arrays[i])) {
            tempArr.push(arrays[i]);
        }
    }

    return tempArr;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);