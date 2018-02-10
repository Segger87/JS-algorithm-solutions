/* Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.*/


function chunkArrayInGroups(arr, size) {
  var newArray = [];
  //creates an empty array

  for(var i = 0; i < arr.length; i+=size) { //loops through the array and increments i by size
     newArray.push(arr.slice(i, i+size)); //slice method cuts the array up and push adds it into the empty array
  }
return newArray;


}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);
