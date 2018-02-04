/* Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.*/


//If the number is greater than or = to 0 the repeat method multiplies the string by the num value, if num is less than 0 it returns an empty string.

function repeatStringNumTimes(str, num) {
  if (num >= 0) {
    return str.repeat(num);
  }
  else {
    return '';
  }
}

repeatStringNumTimes("abc", 3);
