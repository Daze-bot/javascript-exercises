const repeatString = function(word, num) {
  let answer = "";
  for (i = 0; i < num; i++) {
    answer += word;
  }
  if (num < 0) {
    return "ERROR";
  } else {
    return answer;
  }
};

// Do not edit below this line
module.exports = repeatString;
