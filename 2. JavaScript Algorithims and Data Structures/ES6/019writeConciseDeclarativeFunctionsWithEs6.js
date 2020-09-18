// Refactor the function setGear inside the object bicycle to use the shorthand syntax described above.

// Only change code below this line
const bicycle = { // variable declaration, stores an object with 2 properties
    gear: 2, // property 1
    setGear(newGear) { // propert 2 which is a function that takes a value.
      this.gear = newGear; 
    }
  };
  // Only change code above this line
  bicycle.setGear(3);
  console.log(bicycle.gear);