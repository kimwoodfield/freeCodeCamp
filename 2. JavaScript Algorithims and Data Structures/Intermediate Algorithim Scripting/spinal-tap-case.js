function spinalCase(str) {

    // create space between any lower/uppercase character that has the opposite immediately following
    const makeSpace = str.replace(/([a-z])([A-Z])/g, "$1 $2");

    // create a regex to remove spaces and underscores
    const regex = /\s+|_+/g

    // implement the regex, convert the new string to lowercase and return it
    return makeSpace.replace(regex, "-").toLowerCase();

  }

spinalCase('This Is Spinal Tap');