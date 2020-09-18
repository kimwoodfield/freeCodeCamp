// Use destructuring assignment within the argument to the function half to send only max and min inside the function.

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
  // Only change code below this line
  const half = ({max, min}) => (max + min) / 2.0;
  // declares a constant variable of 'half'
  // variable 'half' stores a function where two properties of an object can be passed in
  // function call - the two values taken from the object are added together
  // the sum of this is then divided by two, effectively halving the total.
  // Only change code above this line