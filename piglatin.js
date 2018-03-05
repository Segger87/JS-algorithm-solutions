/*Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.*/

function translatePigLatin(str) {
  var strArr = str.split("");

  var r = new RegExp(/[aeiou]/gi);

  var words = str.toLowerCase();

  if (r.test(words[0])) {
    //returns a boolean if the word  begins with a vowel

    return str + "way";
  } else {
    //checks for consonants

    var consonants = str.indexOf(str.match(r)[0]);
    //uses substr to return the matching consonants, add the first letter and the consonants and concatenate 'ay' on the end
    return str.substr(consonants) + str.substr(0, consonants) + "ay";
  }
}

translatePigLatin("glove");
