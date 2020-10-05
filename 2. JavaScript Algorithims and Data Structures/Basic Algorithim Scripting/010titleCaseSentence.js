// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

function titleCase(str) {

    // Convert the characters in the string that was passed to lowercase.
    str = str.toLowerCase();
    
    // Turn the string into an array
    let newArray = str.split(" ");
  
    // Create a for loop to index over each word in the array
    for (let i = 0; i < newArray.length; i++) {
  
      // Grab the word that is being passed over, select the first character of that word and make it uppercase. Then, add the rest of the letters to the end of that letter and store the new word in place of the word that was being passed over.
      newArray[i] = newArray[i].charAt(0).toUpperCase() + newArray[i].substr(1);
    }
  
    // Go into the array and join each string in the array together with a space between them and store the resulting string in the 'str' variable.
    return newArray.join(' ');
    
  }
  
  titleCase("I'm a little tea pot");