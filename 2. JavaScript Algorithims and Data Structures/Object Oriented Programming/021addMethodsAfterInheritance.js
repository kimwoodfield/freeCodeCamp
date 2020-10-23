// Add all necessary code so the Dog object inherits from Animal and the Dog's prototype constructor is set to Dog. Then add a bark() method to the Dog object so that beagle can both eat() and bark(). The bark() method should print "Woof!" to the console.

function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line
// Here we are saying that Dog stores an object which is the Animal prototype.
Dog.prototype = Object.create(Animal.prototype);

// Here we are saying that any instances of Dog share a prototype that holds a function of bark, which logs "Woof!" to the console.
Dog.prototype.bark = function() {
    console.log("Woof!");
};

// Here we are saying that any instance of the Dog constructor will list so.
Dog.prototype.constructor = Dog;



// Only change code above this line

let beagle = new Dog();