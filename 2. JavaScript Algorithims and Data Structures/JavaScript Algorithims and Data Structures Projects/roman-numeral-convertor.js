function convertToRoman(num) {
    
        // Create checkpoints in Roman Numerals
        const comparisons = {
            'M': 1000,
            'CM': 900,
            'DCCC': 800,
            'DCC': 700,
            'DC': 600,
            'D': 500,
            'CD': 400,
            'CCC': 300,
            'CC': 200,
            'C': 100,
            'XC': 90,
            'LXXX': 80,
            'LXX': 70,
            'LX': 60,
            'L': 50,
            'XL': 40,
            'XXX': 30,
            'XX': 20,
            'X': 10,
            'IX':9,
            'V': 5,
            'IV': 4,
            'I': 1
        };
    
        // Create something to store the new roman numeral values into
        let romanNumeral = '';

        // Loop through all of the comparisons in the object above
        for (let i in comparisons) {
            
            // While the argument is more than, or equal to, the key value pair:
            while (num >= comparisons[i]) {
                
                // If there is no value stored in the romanNumeral variable, add it. Otherwise, increment it by itself and i 
                romanNumeral += i;

                // Then decrease the value of the argument by the value associated with that key
                num -= comparisons[i];
            }
        }

        // Return the value stored in the romanNumeral variable
        return romanNumeral;
       }
       
       convertToRoman(36);