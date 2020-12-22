var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Only change code below this line

  let tempArr = [];
  arr.map(val => tempArr.push(val));
  return tempArr.sort();

  // Only change code above this line
}
nonMutatingSort(globalArray);