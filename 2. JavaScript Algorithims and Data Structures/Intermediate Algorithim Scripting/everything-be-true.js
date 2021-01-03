function truthCheck(collection, pre) {

    // create a variable where we will store the falsy count
    let falsyCounter = 0;

    // loop through each object
    for (let object of collection) {

        // if the object's value is falsy, increment the counter
        if (!!object[pre] === false) {
            falsyCounter++;
        } 
    }

    // if the counter found any falsy values, return false. Return true otherwise
    if (falsyCounter > 0) {
        return false;
    } else {
        return true;
    }

  }
  
  truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");