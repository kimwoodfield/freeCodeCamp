function addTogether() {

    // create a function that checks if the argument is actually a number
    const checkNum = (num) => {
        if (typeof num !== "number") {
            return undefined;
        } else {
            return num;
        }
    }


    // If the argument has more than 1 value
    if (arguments.length > 1) {

        // store each argument in variables if returned as numbers
        let a = checkNum(arguments[0]); 
        let b = checkNum(arguments[1]); 

        // if either arguments are not numbers, return an undefined
        if (a === undefined || b === undefined) {
            return undefined;
        // otherwise return both the sum of both values
        } else {
            return a + b;
        }
        
    } else {
        let c = arguments[0];
        
        // check if the argument is a number
        if (checkNum(c)) {
            return function(arg2) {
            
            // check if either values are numbers, if not return undefined
            if (c === undefined || checkNum(arg2) === undefined) {
                return undefined;

            // If both values are numbers, return their sum.
            } else {
                return c + arg2;
            }
        }
    }
}

}

addTogether(2,3);