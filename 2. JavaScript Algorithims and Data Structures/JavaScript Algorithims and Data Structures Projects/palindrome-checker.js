function palindrome(str) {

  // Our regular expression
  const regex = /[^a-zA-Z\d]+/gi;

  // Use our regex as a reference to replace anything that does not match with an empty string
  str = str.replace(regex, '');

  // Convert the current string to all lowercase
  str = str.toLowerCase();

  // Reverse the string's characters and join any characters separated by a space and then store inside the new reversedArr variable
  let reversedArr = [...str].reverse().join('');

  // If both the reversed string and original string match in length and contain characters in the same places
  if (str.length === reversedArr.length && str === reversedArr) {
    return true; // return true to being a palindrome
  } else {
    return false; // or return false 
  }
}

palindrome("eye");