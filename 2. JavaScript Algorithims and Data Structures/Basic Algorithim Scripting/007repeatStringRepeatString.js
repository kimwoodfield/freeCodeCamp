// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
    let newArray = [];
      if (num <= 0) {
        return "";
      } else {
        
        for (let i = 0; i <= num - 1; i++) {
          newArray.push(str);
        }
      }
      const newString = newArray.join('');
      return newString;
    }
    
    repeatStringNumTimes("abc", 3);
  