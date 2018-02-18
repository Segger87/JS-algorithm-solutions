/* You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments. */


function destroyer(arr) {
  //creates a variable that contains an array of arguments
 var args = Array.prototype.slice.call(arguments);
 //loops through arr
  for (var i = 0; i < arr.length; i++){
    //loops through arguments
    for(var j = 0; j < args.length; j++){
      //checks if they are the same
      if(arr[i] === args[j]){
        //removes from the original arr
        delete arr[i];
      }
    }
  }
  //filters out any booleans
   return arr.filter(Boolean);
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
