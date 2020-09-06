// Retrieve the second tree from the variable myPlants using object dot and array bracket notation.

// Setup
var myPlants = [ // variable called 'myPlants' is created which stores an array with two objects inside.
    {
      type: "flowers", // object 1, property 1
      list: [ // object 1, property 2
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees", // object 2, property 1
      list: [ // object 2, property 2
        "fir",
        "pine",
        "birch"
      ]
    }
  ];
  
  // Only change code below this line
  
  var secondTree = myPlants[1].list[1]; // Change this line
  // variable is created called 'secondTree'
  // to give 'secondTree' a value, we access the 'myPlants' variable. 
  // we choose the second property by using [1] (computer starts counting at 0)
  // we choose .list as the second property of the second object
  // we use [1] to select the second value from the array.