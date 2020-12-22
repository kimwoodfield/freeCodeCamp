// Only change code below this line
function urlSlug(title) {

    // turn all characters to lowercase and split each word and store it as a string in an array
    const newTitle = title.toLowerCase();

    // split each word and store it as a string in an array
    const joinedTitle = newTitle.split(" ");

    // create a new array that only contains strings that are not empty and then join each word with a '-' symbol
    const newString = joinedTitle.filter(item => item != '').join("-");

    return newString;

}
// Only change code above this line

urlSlug("Winter Is Coming")