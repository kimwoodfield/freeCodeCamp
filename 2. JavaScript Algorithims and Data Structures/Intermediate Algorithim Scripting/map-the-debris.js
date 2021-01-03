function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    
    // create an empty array
    let newArr = [];

    // iterate through the array parameter passed in as the argument
    for (let i = 0; i < arr.length; i++) {

        // the equation provided to us by freeCodeCamp
        let results = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + arr[i].avgAlt, 3) / GM));

        // we push each new object into the array during each iteration
        newArr.push({name: arr[i].name, orbitalPeriod: results}); 
    }

    // then returning the new array
    return newArr;

  }
  
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);