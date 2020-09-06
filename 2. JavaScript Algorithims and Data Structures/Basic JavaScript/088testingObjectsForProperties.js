// Modify the function checkObj to test if an object passed to the function (obj) contains a specific property (checkProp). If the property is found, return that property's value. If not, return "Not Found".

function checkObj(obj, checkProp) { // function created, takes in two values, an object and a value (property name)

    // Only change code below this line

    if (obj.hasOwnProperty(checkProp)) { // if statement created. does the variable 'obj' have a property with the value of what's inside the parentheses.

        return obj[checkProp]; // If so, return what the value arrives with when cross referenced within the object.

    } else {

        return "Not Found"; // otherwise, if the property doesn't exist within the object, return "Not Found".

    }

    return "Change Me!";

    // Only change code above this line
  }
  