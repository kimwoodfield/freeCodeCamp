/* Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string. */

function reverseString(str) {
    let newArray = [];
    for (let i = str.length - 1; i >= 0; i--) {
      newArray.push(str[i]);
    }
    str = newArray.join("");
    return str;
  }
  
  reverseString("hello");