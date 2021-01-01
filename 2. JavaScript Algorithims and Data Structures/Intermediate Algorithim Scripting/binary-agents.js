function binaryAgent(str) {
    
    let copy = str;
    console.log(copy);

    // split the string so each word is separate
    let splitCopy = copy.split(" ");
    console.log(splitCopy);

    // convert from binary to decimal
    let convertedDecimal = splitCopy.map(element => {
        return parseInt(element, 2);
    });
    console.log(convertedDecimal);

    // convert from decimal to text
    let convertedText = convertedDecimal.map(element => {
        return String.fromCharCode(element);
    });
    console.log(convertedText);

    // now that the numbers have been converted, join them back together into a string 
    let joined = convertedText.join("");
    console.log(joined);

    // now return the new string we created
    return joined;

    // return str;
  }
  
  binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");