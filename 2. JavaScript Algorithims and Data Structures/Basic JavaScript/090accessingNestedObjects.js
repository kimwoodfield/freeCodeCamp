// Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable. Use dot notation for all properties where possible, otherwise use bracket notation.

// Setup
var myStorage = { // variable called 'myStorage' is created and stores an object with two properties.
    "car": { // property 1
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": { // property 2
        "trunk": "jack"
      }
    }
  };
  
  var gloveBoxContents = myStorage.car.inside["glove box"]; // Change this line
  // variable called gloveBoxContents is created
  // to give the requested value to 'gloveBoxContents', we access the myStorage variable, then the first property 'car' and then the next value 'glove box' which then contains what were looking for.