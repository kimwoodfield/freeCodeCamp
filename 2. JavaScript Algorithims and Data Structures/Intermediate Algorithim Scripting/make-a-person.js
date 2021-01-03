var Person = function(firstAndLast) {
  
  // store the full name in a variable
  let fullName = firstAndLast;
  
  // create a method that returns the full name
  this.getFullName = function() {
    return fullName;
  };

  // create a method that returns the first name
  this.getFirstName = function() {
    return fullName.split(" ")[0];
  }

  // create a method that returns the last name
  this.getLastName = function() {
    return fullName.split(" ")[1];
  }

  // create a method that changes the first name
  this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  }

  // create a method that changes the last name
  this.setLastName = function(name) {
    fullName = fullName.split(" ")[0] + " " + name;
  }

  // create a method that changes the full name
  this.setFullName = function(name) {
    fullName = name;
  }
  

};

var bob = new Person('Bob Ross');
bob.getFullName();