// In the checkSign function, use multiple conditional operators - following the recommended format used in findGreaterOrEqual - to check if a number is positive, negative or zero. The function should return "positive", "negative" or "zero".

function checkSign(num) { // function created

    return (num > 0) ? "positive" // is num more than 0? return positive if so.
    : (num < 0) ? "negative" // else if number less than 0? return negative if so.
    : "zero" // else if number is 0 return zero.

}

checkSign(10); // function call
