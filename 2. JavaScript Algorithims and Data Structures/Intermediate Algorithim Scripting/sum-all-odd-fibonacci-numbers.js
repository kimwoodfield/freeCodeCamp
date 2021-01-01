function sumFibs(num) {

    // create variables to store the previous and the current numbers
    let previous = 0;
    let current = 1;
    let total = 0;

    // loop while the current value is less than or equal to argument
    while (current <= num) {
        // if the current value is not an odd number
        if (current % 2 !== 0) {
            total += current; // add it to the total 
        }

        // keep working through the fib sequence
        current += previous;
        previous = current - previous;
    }

    return total;
  }
  
  sumFibs(10);