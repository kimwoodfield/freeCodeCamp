// Add a numLegs property to the prototype of Dog.

function Dog(name) {
    this.name = name;
  }
  
  // This was the code I added, now all instances of the Dog class will have a numLegs value of 4.
  
  Dog.prototype.numLegs = 4;
  
  // Only change code above this line
  let beagle = new Dog("Snoopy");