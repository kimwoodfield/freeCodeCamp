// Change how weight is declared in the Bird function so it is a private variable. Then, create a method getWeight that returns the value of weight 15.

// create bird constructor 
function Bird() {
    // has 15 stored in a variable
    let weight = 15; // private var
  
    // has a method that calls upon the value stored in the variable stored above.
    this.getWeight = function() {
      return weight;
    }
  }
  
  // declare a new instance from Bird
  let birdy = new Bird();
  
  // access the variable on the Bird constructor by calling the method that returns it.
  birdy.getWeight();