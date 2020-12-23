function destroyer(arr) {
  // stores all of the arguments in an array, even the arguments that are not included in the parameters
      var args = Array.prototype.slice.call(arguments);
  
      // remove the first item (the array argument) from the args variable so we are left with the values we want to reference against
      args.shift();
  
      // make a copy of the array argument
      let copiedArr = [...arr];

      return arr = copiedArr.filter(num => !args.includes(num));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);