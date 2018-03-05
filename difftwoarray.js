/* Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.*/

function diffArray(arr1, arr2) {
  //combines into one big array
  var newArr = arr1.concat(arr2);
  //checks if the combined array has any matching content using the filter method
  var newList = newArr.filter(function(word) {
    return !arr1.includes(word) || !arr2.includes(word);
  });

  return newList;
}

diffArray([1, "calf", 3, "piglet"], [7, "filly"]);
