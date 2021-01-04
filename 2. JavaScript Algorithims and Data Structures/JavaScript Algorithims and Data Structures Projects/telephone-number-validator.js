function telephoneCheck(str) {

    // the regex we will compare the arguments against
    let firstPass = /^1?[\s\-\(]*\d{3}[\)\s\-]*\d{3}[\s\-]*\d{4}$/

    // if the string includes one side of a bracket but not the other then return as false
    if (str.includes('(') && !str.includes(')')) {
        return false;
    } else if (str.includes(')') && !str.includes('(')) {
        return false;
    }
  
    // if the regex matches the argument then return true, otherwise return false
    if (str.match(firstPass)) {
      return true;
    } else {
      return false;
    }
  
  }
  
//   telephoneCheck("555-555-5555");
  telephoneCheck("(555-555-5555");