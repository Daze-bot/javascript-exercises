const palindromes = function (str) {
  let result = str.toLowerCase();
  result = result.replace(/[^\w\s\']|_/g, "").replace(/\s+/g, "");
  let splitString = result.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  if (joinArray === result) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
