/* In the game of golf each hole has a par meaning the average number of strokes a golfer is expected to make in order to sink the ball in a hole to complete the play. Depending on how far above or below par your strokes are, there is a different nickname.

Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):

Strokes	- Return
1 : "Hole-in-one!"
<= par - 2 : "Eagle"
par - 1	: "Birdie"
par	: "Par"
par + 1	: "Bogey"
par + 2 : "Double Bogey"
>= par + 3 : "Go Home!"
par and strokes will always be numeric and positive. We have added an array of all the names for your convenience. */



var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"]; // a variable called 'names' is created and stores an array.

function golfScore(par, strokes) { // function created, takes two values.

  // Only change code below this line

if (strokes == 1) { // if the second value passed is equal to '1', execute the following.
      return names[0]; // if this is executed, access the array stored in the variable 'names' and return the first value. Remember 0 is the first value the computer counts.
} 

else if (strokes <= par - 2) { // if the second value passed into the array is LESS THAN OR EQUAL TO the first number passed in, minus 2, then execute the following.
      return names[1]; // return the second value in the variable 'names' array.
  }


else if (strokes == par - 1) { // otherwise, if the second value passed equals the first number minus 1, then execute.
      return names[2]; // return the third value in the variable 'names' array.
  } 
  

else if (strokes == par) { // otherwise, if both values passed into the function are the same, execute.
      return names[3]; // return the fourth value in the variable 'names' array.
  } 
  

else if (strokes == par + 1) { // otherwise if the second value passed into the function is equal to the first number plus one then execute.
      return names[4]; // return the fifth value in the variable 'names' array.
  } 
  

else if (strokes == par + 2) { // otherwise if the second value passed into the function is equal to the first value with 2 added then execute.
      return names[5]; // return the sixth value in the variable 'names' array.
  } 
  

else if (strokes >= par + 3) { // otherwise, if the second value passed into the function is more than or equal to the first value with 3 added then execute.
      return names[6]; // return the seventh/last value in the variable 'names' array.
  }


  return "Change Me"; // if the values passd into the function are not covered in the if or else if statements or is blank then return this.

  // Only change code above this line
}

golfScore(5, 4); // This will return as "Birdie" because strokes is 4, par is 5 and 5 take 1 means both are the same. Meaning it would be covered under the second else if statement.
