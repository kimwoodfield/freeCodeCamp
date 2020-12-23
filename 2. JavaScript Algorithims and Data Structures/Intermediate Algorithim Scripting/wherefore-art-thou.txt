function whatIsInAName(collection, source) {

    //create a variable to store the key from 'source' into
    var keys = Object.keys(source);
  
    // filter the collection
    return collection.filter(function(obj) {

        // loop through until we reach the length of the keys array, which is one in this case.
        for (var i = 0; i < keys.length; i++) {
        
        if (
            !obj.hasOwnProperty(keys[i]) || // if the loop does not find a property that matches value stored in keys OR
            obj[keys[i]] !== source[keys[i]] // the value stored in keys does not match the value stored in the same index in source
        ) {
            return false; // return as false
        }
        }
        return true; // return true if the value in the keys does not meet the above requirements
    });
  }

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });