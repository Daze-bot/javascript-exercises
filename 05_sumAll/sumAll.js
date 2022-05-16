const sumAll = function(startNum, endNum) {
  let finalSum = 0;
  let largerNum;
  let smallerNum;

  if (startNum < 0 || endNum < 0) {
    return "ERROR";
  } else if (typeof startNum !== "number" || typeof endNum !== "number") {
    return "ERROR";
  } else {
    if (endNum >= startNum) {
      largerNum = endNum;
      smallerNum = startNum;
    } else {
      largerNum = startNum;
      smallerNum = endNum;
    }
    for (i = smallerNum; i <= largerNum; i++) {
      finalSum += i;
    }
    return finalSum;
  }
};

// Do not edit below this line
module.exports = sumAll;
