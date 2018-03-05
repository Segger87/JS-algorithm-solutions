//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  //adds space between capital letters
  var addSpace = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  //replaces whitespace and underscores with -
  return addSpace.replace(/( )|(_)/gi, "-").toLowerCase();
}

spinalCase("TheAndy_Griffith_Show");
