// Override the fly() method for Penguin so that it returns "Alas, this is a flightless bird."

function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line

// Here we override the fly method that was included in the Bird prototype, and we update it with the new string. This only applies to Penguin.
Penguin.prototype.fly = function() {
    return "Alas, this is a flightless bird.";
}

// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());