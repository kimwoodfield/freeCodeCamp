function sumPrimes(num) {

    let copy = num;
    console.log(copy);

    let container = [];
    console.log(container);

    for (let i = 0; i <= num; i++) {
        container.push(i);
    }
    console.log(container);


    // get the prime numbers
    var sieve = [], i, j, primes = [];
    for (i = 2; i <= num; ++i) {
        if (!sieve[i]) {
            // i has not been marked -- it is prime
            primes.push(i);
            for (j = i << 1; j <= num; j += i) {
                sieve[j] = true;
            }
        }
    }
    console.log(primes);

    // add all of the prime numbers together
    let total = 0;
    for (let i in primes) {
        total += primes[i];
    }
    
    return total;


  }
  
  sumPrimes(10);