function rot13(str) {

    // create a variable to store an uppercase alphabet into
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
    console.log(alphabet);

    // create a copy of the argument and split it into separate letters
    let copy = str.split('');
    console.log(copy);

    // find the index of the current letter
    let index = alphabet.indexOf(copy[0]);
    console.log(index);

    // create a variable to store the converted word and each letter
    let newWord = [];
    let newLetter;
    
    // loop through the copy of the argument
    for (let i = 0; i < copy.length; i++) {
        console.log(alphabet.indexOf(copy[i]));

        console.log(copy[i]);

        // if the index appears as a position in the alphabet
        if (alphabet.indexOf(copy[i]) >= 0) {

            // save the index into this variable
            let index = alphabet.indexOf(copy[i]);

            // add 13 to the index position
            let newIndex = index + 13;
            console.log(newIndex);

            // ensure that when the index goes past the alphabet's length it starts again from the beginning
            newLetter = alphabet[newIndex % alphabet.length];
            console.log(newLetter);

            // push each new letter into the newWord array
            newWord.push(newLetter);

        // these else if conditionals will handle the symbols from the other argument variations
        } else if (copy[i] === "!") {
            newWord.push("!");
        } else if (copy[i] === " ") {
            newWord.push(" ");
        } else if (copy[i] === "?") {
            newWord.push("?");
        } else if (copy[i] === ".") {
            newWord.push(".");
        } 
    }
    console.log(newWord);

    // now we have all brand new letters, rejoin them to make a string then return it
    return newWord.join("");

  }
  
//   rot13("SERR PBQR PNZC");
  rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")