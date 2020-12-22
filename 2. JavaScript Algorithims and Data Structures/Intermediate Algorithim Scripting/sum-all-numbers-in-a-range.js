function sumAll(arr) {

    // create variables that store the lowest and largest value from the argument
    const min = Math.min(arr[0], arr[1]);
    const max = Math.max(arr[0], arr[1]);

    // create a variable to store the result of each value summed
    let resultingSum = 0;

    // create a loop that can loop through numbers starting from the min and ending at the max
    for (let i = min; i <= max; i++) {
        resultingSum += i;
    }

    return resultingSum;
}

sumAll([1, 4]);