function fearNotLetter(str) {

    
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetArray = alphabetString.split('');


    // If all letters are present in the range, return undefined.
    if (str === alphabetString) {
        return undefined;
    }

    // find where the argument starts in the alphabet
    let index;
    for (let i = 0; i < alphabetString.length; i++) {
        if (alphabetString.indexOf(str[0]) >= 0) {
            index = alphabetString.indexOf(str[0]);
            break;
        }
    }


    // loop through the alphabet
    let correctString = alphabetArray.splice(index, str.length);
    for (let i = 0; i < correctString.length; i++) {
        if (!str.includes(correctString[i])) {
            return correctString[i];
        }
    }


  }
  
  fearNotLetter("stvwx");