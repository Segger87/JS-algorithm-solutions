// Return the length of the longest word in the provided sentence.

function findLongestWord(str) {
  //the words const will turn the string into an array, the wordLength variable will collate the word lengths
    const words = str.split(" ");
    let wordLength = 0;

  //loop goes through each array items length and adds that value to the wordLength variable, but only if the value is greater than the variable itself.
  for (i = 0; i < words.length; i++){
    if (words[i].length > wordLength) {
      wordLength = words[i].length;
    }

  }
 return wordLength;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
