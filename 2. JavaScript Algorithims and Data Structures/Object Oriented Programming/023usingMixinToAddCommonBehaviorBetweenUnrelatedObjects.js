// Create a mixin named glideMixin that defines a method named glide. Then use the glideMixin to give both bird and boat the ability to glide.

// Here we define a bird object, it has two properties.
let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  // Here we define a boat object, it also has two properties.
  let boat = {
    name: "Warrior",
    type: "race-boat"
  };
  
  // Only change code below this line
  // Here we create a Mixin that stores a function that takes in an object within its parameters
  let glideMixin = function(obj) {
    // the object passed in will be given the glide method
    obj.glide = function() {
      // which logs this string to the console when called.
      console.log("Look, I'm gliding!");
    }
  }
  
  // Here we call the function and pass both of these objects in as parameters.
  glideMixin(bird);
  glideMixin(boat);
  // Once this function has been executed, both bird and boat objects will share the 'glide' method.