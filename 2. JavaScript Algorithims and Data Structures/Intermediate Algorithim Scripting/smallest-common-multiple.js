function smallestCommons(arr) {

    // store a copy of the argument
    let copy = [...arr];
    console.log(copy);

    // sort the copy from smallest to largest 
    if (arr[0] > arr[1]) {
        copy.sort();
        console.log(copy);
    } 

    // store the lowest and highest number in separate variables
    let lowerNum = copy[0];
    let higherNum = copy[1];
    console.log(lowerNum);
    console.log(higherNum);

    // store the range of the numbers between the lowest and highest arguments
    const range = [];
    for (let i = lowerNum; i <= higherNum; i++) {
        range.push(i);
    }
    console.log(range);

    let multiple = 1;
    while (multiple < 1000000) {
        multiple += 1;
        let higherCommonMultiple = (lowerNum * multiple) * higherNum;
        // console.log(higherCommonMultiple);

        let trueCount = 0;
        for (let i = 0; i < range.length; i += 1) {
            range[i];
            // console.log(range[i]);

            if (higherCommonMultiple % range[i] === 0) {
                trueCount += 1;

                // console.log(higherCommonMultiple, range, trueCount);

                if (trueCount === range.length) {
                    console.log(higherCommonMultiple);
                    return higherCommonMultiple;
                    
                }
            }
        }
    }


    

    // // Grab the lowest and highest value
    // let min = Math.min(...copy);
    // let max = Math.max(...copy);
    // console.log(min);
    // console.log(max);

    // // Create an array with the entire range
    // let tempArr = [];
    // for (let i = 1; i <= max; i++) {
    //     tempArr.push(i);
    // }
    // console.log(tempArr);

    


    return arr;
  }
  
  
//   smallestCommons([1,5]);
  // smallestCommons([5, 1])
  smallestCommons([2, 10])
  // smallestCommons([1, 13])
  // smallestCommons([23, 18])