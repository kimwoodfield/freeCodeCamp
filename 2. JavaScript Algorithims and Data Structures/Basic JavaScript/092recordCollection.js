/* You are given a JSON object representing a part of your musical album collection. Each album has a unique id number as its key and several other properties. Not all albums have complete information.

You start with an updateRecords function that takes an object like collection, an id, a prop (like artist or tracks), and a value. Complete the function using the rules below to modify the object passed to the function.

Your function must always return the entire object.
If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
If value is an empty string, delete the given prop property from the album.
Note: A copy of the collection object is used for the tests. */

// Setup
var collection = { // variable called 'collection' is created and stores an object with four properties.
    2548: { // property 1
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: { // property 2
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: { // property 3
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: { // property 4
      albumTitle: 'ABBA Gold'
    }
  };
  



  // Only change code below this line

  function updateRecords(object, id, prop, value) { //function created called 'updateRecords', takes four values. An object, an id, a property and a value.


  if (value === "") { //if statement created, if no value was passed through the function, execute

    delete object[id][prop]; // if no value was passed into the function, delete the property from the object.

  } else if (prop === "tracks") { // otherwise, if the property passed through has a value of "tracks", execute

    object[id][prop] = object[id][prop] || []; // have the property equal itself or create a new array.

    object[id][prop].push(value); // push the value passed through the function into the new array.

  } else { // otherwise , have the property equal to the value that was passed through the function.

    object[id][prop] = value;

  }



    return object; // return the object passed through the function.
  }
  





  updateRecords(collection, 5439, 'artist', 'ABBA'); // calls the function 'updateRecords', accessses the variable 'collection', accesses the property '5439' (the last property in the object), creates a new property of 'artist' inside 5439 object with a value of 'ABBA'.
  