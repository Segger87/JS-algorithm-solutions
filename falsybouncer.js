/* Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN*/


//using the filter method the Boolean argument is passed which removes any falsy's
function bouncer(arr) {
   return arr.filter(Boolean);
}

bouncer([7, "ate", "", true, 9]);
