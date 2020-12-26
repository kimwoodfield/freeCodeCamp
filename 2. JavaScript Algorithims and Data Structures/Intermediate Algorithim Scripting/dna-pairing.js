function pairElement(str) {
    
    let strArray = [...str];

    let newArray = [];

    for (let i = 0; i < strArray.length; i++) {
        let newerArray = [];
        if (strArray[i] === "G") {
            newerArray.push(strArray[i]);
            newerArray.push("C")
        } else if (strArray[i] === "C") {
            newerArray.push(strArray[i]);
            newerArray.push("G")
        } else if (strArray[i] === "T") {
            newerArray.push(strArray[i]);
            newerArray.push("A")
        } else if (strArray[i] === "A") {
            newerArray.push(strArray[i]);
            newerArray.push("T")
        }
        newArray.push(newerArray);
    }

    let newerArray = newArray;
    console.log(newerArray);
    
    return newerArray;
  }
  
  pairElement("ATCGA");

  console.log(pairElement("ATGCA"))