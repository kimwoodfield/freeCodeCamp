// We have defined a function named rangeOfNumbers with two parameters. The function should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. The starting number will always be less than or equal to the ending number. Your function must use recursion by calling itself and not use loops of any kind. It should also work for cases where both startNum and endNum are the same.

function rangeOfNumbers(startNum, endNum) { // function created, takes in two values
    if (endNum - startNum === 0) { // base case - if the second value passed minus the first value passed strictly equals 0..
      return [startNum]; 
    } else { // ..otherwise..
    var numbers = rangeOfNumbers(startNum, endNum - 1); // create a variable called numbers that stores the function but instead of passing through the same values, the second value is decreased by 1.
    numbers.push(endNum); // the decremented second value is pushed in
    return numbers;
    }
  };