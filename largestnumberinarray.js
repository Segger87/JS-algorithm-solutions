/*Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.*/

function largestOfFour(arr) {
  //this variable will return an array
  var arrayResult = [];
  //loop to work through the outer array and add the largest outer number to the highestNumber variable
  for(i = 0; i < arr.length; i++){
    var highestNumber = arr[i][0];
    //loop to work through the sub array and check if it is larger than the number on the outer array - if it is update the highestNumber variable to that value
    for(j = 1; j < arr[i].length; j++){
      if(arr[i][j] > highestNumber){
        highestNumber = arr[i][j];
      }
    }
    //place the variable inside an array
    arrayResult[i] = highestNumber;
  }
  return arrayResult;
}

  largestOfFour([[400, 5, 9000000, 3], [13, 27, 18, 26], [320000, 35, 37, 39], [1000, 1001, 857, 1]]);
