// Check if a string (first argument, str) ends with the given target string (second argument, target).

function confirmEnding(str, target) {
  
    const stringLength = str.length;
    const targetLength = target.length;
    const leftOvers = stringLength - targetLength;
    const remainingChars = str.substr(leftOvers);
  
    if (remainingChars === target) {
      return true;
    } else {
      return false;
    }
  }
  
  confirmEnding("Bastian", "n");