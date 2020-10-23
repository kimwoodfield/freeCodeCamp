// Add all of the own properties of beagle to the array ownProps. Add all of the prototype properties of Dog to the array prototypeProps.

function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  let beagle = new Dog("Snoopy");
  
  let ownProps = [];
  let prototypeProps = [];
  
  // Only change code below this line
  
  // My Code starts here
  
  // Creates a loop to loop through the beagle variable
  for (let property in beagle) {
    
    // if the variable of beagle has its own property then push it to the ownProps array.
    if (beagle.hasOwnProperty(property)) {
      ownProps.push(property);
      // if beagle has been given a property through the prototype method, then push that property into the prototypeProps array.
    } else {
      prototypeProps.push(property);
    }
  }