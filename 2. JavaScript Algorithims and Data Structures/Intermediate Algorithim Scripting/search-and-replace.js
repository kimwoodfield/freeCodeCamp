function myReplace(str, before, after) {

    console.log(str)
    console.log(before)
    console.log(after)

    let beforeCopy = [...before];
    let afterCopy = [...after];

    console.log(beforeCopy);
    console.log(afterCopy);


    // create an array and store each word from the original str argument inside
    let copiedStr = str.split(' ');
    console.log(copiedStr);

    // match the cases
    console.log(beforeCopy[0]);
    console.log(afterCopy[0]);

    if (beforeCopy[0] === beforeCopy[0].toUpperCase()) {
        afterCopy[0] = afterCopy[0].toUpperCase();
    } else if (beforeCopy[0] === beforeCopy[0].toLowerCase()) {
        afterCopy[0] = afterCopy[0].toLowerCase();
    }

    console.log(beforeCopy);
    console.log(afterCopy);

    beforeCopy = beforeCopy.join("");
    afterCopy = afterCopy.join("");

    console.log(beforeCopy);
    console.log(afterCopy);



    // loop through each word of the string
    for (let i = 0; i <= copiedStr.length; i++) {
        // if the index is equal to the before argument, replace it with the after argument
        if (copiedStr[i] === before) {
            copiedStr[i] = afterCopy; 
        }
    }


    
    // create a variable that stores the copiedStr array as a
    let newString = copiedStr.join(' ')

    console.log(copiedStr);
    console.log(newString);

    
    return newString;


  }
  
  myReplace("He is Sleeping on the couch", "Sleeping", "sitting")