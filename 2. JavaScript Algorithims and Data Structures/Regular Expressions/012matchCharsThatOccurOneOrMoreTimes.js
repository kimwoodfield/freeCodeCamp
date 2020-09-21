// You want to find matches when the letter s occurs one or more times in "Mississippi". Write a regex that uses the + sign.

let difficultSpelling = "Mississippi";
let myRegex = /ss+/gi; // Change this line
let result = difficultSpelling.match(myRegex);