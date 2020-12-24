function translatePigLatin(str) {

    // Really proud of solving this algorithim. I didn't want to have to use regex at all but for handling words without vowels I just couldn't get it to work! To be fair, I think if I'd used regex from the beginning I would have had a much easier time completing this one but what can you do but learn from your experiences  ¯\_(ツ)_/¯

    // create an array and regex that covers vowels
    const vowels = ['a', 'e', 'i', 'o', 'u']
    const regexVowels = /[aeiouAEIOU]+/

    // If a word begins with a vowel, just add "way" at the end.
    for (let i = 0; i < vowels.length; i++) {
        if (vowels[i] === str[0]) {
            return str + "way";
        }
    }

    // Should handle words without vowels.
    let thirdCopy = [...str].join("");
    if (!thirdCopy.match(regexVowels)) {
        return str += "ay";
    }

    // If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.
    let copiedStr = [...str];
    let pigLatinString;

    for (let i = 0; i < copiedStr.length; i++) {
        // if the vowels array includes a letter from the copiedStr array
        if (vowels.includes(copiedStr[i])) {
            // then remove every letter before that vowel and store it inside a new array
            let slicedString = copiedStr.splice(0, i);
            // then concatenate the new new array with the one that was modified with splice
            let appendedString = copiedStr.concat(slicedString);
            // now join the individual characters together again into a string and add "ay" to the end and pass it back up to the pigLatin variable we created outside the loop
            pigLatinString = appendedString.join("") + "ay"
            break;
        }
    }
    if (str !== pigLatinString) {
        str = pigLatinString;
    } else {
        str = str + "ay";
    }

    return str;




}

translatePigLatin("consonant");