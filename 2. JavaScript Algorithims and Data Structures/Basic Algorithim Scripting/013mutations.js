// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.



function mutation(arr) {
  
    // copy the array passed into the func
    let copiedArr = [...arr];
  
    // store each string passed in as separate variables and in lowercase characters.
    let firstStr = copiedArr[0].toLowerCase();
    let secondStr = copiedArr[1].toLowerCase();
  
    // loop through the secondStr variable
    for (let i = 0; i < secondStr.length; i++) {
  
      // if the indexed character in the secondStr variable cannot be located in the firstStr variable then return false
    if (firstStr.indexOf(secondStr[i]) < 0) {
      return false;
    }
  }
  return true; // in any other scenario, return true.
  
  }
  
  mutation(["hello", "hey"]);
  