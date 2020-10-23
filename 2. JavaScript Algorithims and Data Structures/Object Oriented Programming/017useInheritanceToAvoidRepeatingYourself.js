// The eat method is repeated in both Cat and Bear. Edit the code in the sprit of DRY by moving the eat method to the Animal supertype.

function Cat(name) {
    this.name = name;
  }
  
  Cat.prototype = {
    constructor: Cat,
  };
  
  function Bear(name) {
    this.name = name;
  }
  
  Bear.prototype = {
    constructor: Bear,
  };
  
  function Animal() { }
  
  Animal.prototype = {
    constructor: Animal,
    eat: function() { // this method was removed from the Bear and Cat instance so that it only appears one and is passed down using inheritance as these instances originated from Animal.
      console.log("nom nom nom");
    }
  };