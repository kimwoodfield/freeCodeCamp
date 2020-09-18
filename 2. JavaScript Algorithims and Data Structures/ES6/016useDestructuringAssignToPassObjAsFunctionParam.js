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
  // declare variable of 'half'
  // variable 'half' stores a function that takes two values from an object.
  // the two values are then added together.
  // the sum of the two values are then divided by 2.
  // Only change code above this line