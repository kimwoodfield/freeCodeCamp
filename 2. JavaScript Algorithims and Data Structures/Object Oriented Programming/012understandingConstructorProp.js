// Write a joinDogFraternity function that takes a candidate parameter and, using the constructor property, return true if the candidate is a Dog, otherwise return false.

function Dog(name) {
    this.name = name;
  }
  
  // Only change code below this line
  
  // my code starts here
  
  // function created that takes a variable and in this case a dog's name
  function joinDogFraternity(candidate) {
    
    // if the dog passed into the function was created as an instance of the Dog class then
    if (candidate.constructor === Dog) {
      return true; // return true
    } else { // or 
      return false; // return false
    }
  }
  
  // a better way to do this would be to use the instanceof method.