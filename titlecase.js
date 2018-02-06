/* Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".*/


function titleCase(str) {
 return str.toLowerCase() //converts string to lower case
   .split(' ') //converts string to an array
   .map(function(word){
     return word[0].toUpperCase() + word.substr(1); //map function cycles through the array to capitalise first letter and concatenates the rest of the word
   })
.join(' '); //converts back to a string
}

titleCase("I'm a little tea pot");
