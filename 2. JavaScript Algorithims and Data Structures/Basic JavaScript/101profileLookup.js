/* We have an array of objects representing different people in our contacts lists.

A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If name does not correspond to any contacts then return "No such contact".

If prop does not correspond to any valid properties of a contact found to match name then return "No such property". */

// Setup
var contacts = [ // variable created called 'contacts' which stores an array. the array stores 4 objects
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){ // function created called lookUpProfile, takes in two values

// Only change code below this line

for (var i = 0; i < contacts.length; i++) { // for loop created, loop through the array until you reach the end.

    if (contacts[i].firstName === name) { // if the firstName property in any of the objects looped through is the same as the name value passed in, move onto the next if statement

        if (contacts[i].hasOwnProperty(prop)) { // if the array has a property with the name of the property passed in then..

            return contacts[i][prop]; // break out of the function and return the value stored inside of the property passed into the function.

        } else { // otherwise,

            return "No such property" // break out of the function and return this string
        }
    }
}
return "No such contact"; // if the name passed into the function does not match with any of the values stored in any object's 'firstName' variable, and the prop value passed into the function does not match up with any of the properties stored in any of the objects within the array then break out of the function and return this string.



// Only change code above this line

}

lookUpProfile("Akira", "likes");