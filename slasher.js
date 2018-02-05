/* Return the remaining elements of an array after chopping off n elements from the head.
The head means the beginning of the array, or the zeroth index.*/

//this function uses howMany as the argument within the slice method to remove the desired amount off the array

function slasher(arr, howMany) {
  return arr.slice(howMany);
}

slasher([1, 2, 3], 2);