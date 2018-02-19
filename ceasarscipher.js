/* One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on. */

function rot13(str){
  var output = str.split('');
  for(var i = 0; i < output.length; i++){
    //loop through each array item and log the charcode
    var charCodeNum = output[i].charCodeAt(0);
    //check that the charcode value is a letter between A - Z
    if(charCodeNum < 65 || charCodeNum > 90){
      continue; //continue to the next iteration of the loop without executing the rest of the code below
    }
    //move charcode to the right if it is less than halfway through the alphabet
    if (charCodeNum < 78){
      output[i] = String.fromCharCode(charCodeNum + 13);
    //move charcode to the left if it is more than halfway through the alphabet
    } else {
      output[i] = String.fromCharCode(charCodeNum - 13);
    }
  }
  return output.join('');
}

rot13("SERR PBQR PNZC");
