// Check if a value is classified as a boolean primitive. Return true or false.

// function created, takes a value
function booWho(bool) {

    // if the type of input is a boolean,
    if (typeof bool == "boolean") {
  
      // then return true
      return true;
  
      // otherwise,
    } else {
  
      // return false
      return false;
    }
  }
  
  booWho(null);