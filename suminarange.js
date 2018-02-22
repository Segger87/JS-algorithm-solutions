/* We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first. */

//function uses math min and max to determine the highest and lowest num in the array
function sumAll(arr) {
  var min = Math.min(arr[0], arr[1]);
  var max = Math.max(arr[0], arr[1]);
  var answer = 0;
  for (var i = min; i <= max; i++){
    answer += i;
  }
  return answer;
}

sumAll([10, 5]);
