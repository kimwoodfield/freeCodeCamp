/* Basic JavaScript: Counting CardsPassed
In the casino game Blackjack, a player can gain an advantage over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.

Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.

Count Change	Cards
+1	2, 3, 4, 5, 6
0	7, 8, 9
-1	10, 'J', 'Q', 'K', 'A'
You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.

Example Output
-3 Hold
5 Bet

Hint
Do NOT reset count to 0 when value is 7, 8, or 9.
Do NOT return an array.
Do NOT include quotes (single or double) in the output. */





var count = 0; // a variable called 'count' is created and assigned the value of 0.

function cc(card) { // a function is created called 'cc' which takes a value.

  // Only change code below this line

  switch(card) { // switch statement created which takes the value passed into the function.

    case 2: // if the value passed in is 2, execute.
    case 3: // if the value passed in is 3, execute.
    case 4: // if the value passed in is 4, execute.
    case 5: // if the value passed in is 5, execute.
    case 6: // if the value passed in is 6, execute.
      count++; // if the value passed into the function was any of the above, increment the value stored in the variable 'count' by 1.
      break; // if the value passed into the function was any of the above, break out of the switch statement.

    case 10: // if the value passed in is 10, execute.
    case 'J': // if the value passed in is 'J', execute.
    case 'Q': // if the value passed in is 'Q', execute.
    case 'K': // if the value passed in is 'K', execute.
    case 'A': // if the value passed in is 'A', execute.
      count--; // if the value passed into the function was any of the above, decrease the value stored in the variable 'count' by 1.
      break; // if the value passed into the function was any of the above, break out of the switch statement.
  }

  if (count > 0) { // if statement created. if the new value stored in the variable 'count' is more than it was originally (0), execute the following.

    return count + " Bet"; // exit the function and return the value stored in the variable 'count' plus the string " Bet" so what will be turned would be "1 Bet".

  } else { // else statement created. if the new value stored in the variable 'count' is less than or equal to 0, execute the following.

    return count + " Hold"; // exit the function and return the value stored in the variable 'count' plus the string " Hold" so what will be returned would be "0 Hold".

  }

  return "Change Me";
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
// cc(2) will be returned as "1 Bet"
// cc(3) will be returned as "2 Bet" because the variable 'count' has been incremented twice now.
// cc(7) will be returned as "2 Bet" because 7 is not covered in the switch statement, so the value stored in 'count' does not change.
// cc('K') will be returned as "1 Bet" because it has decremented by 1 by passing through 'K'.
// cc('A') will be returned as "0 Hold" because it was decremented again by 1 by passing through 'A'.