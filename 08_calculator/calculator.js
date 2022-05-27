const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arrayList) {
	let arraySum = arrayList.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  }, 0);
  return arraySum;
};

const multiply = function(arrayList) {
  let arrayMultiply = arrayList.reduce((previousValue, currentValue) => {
    return previousValue * currentValue;
  });
  return arrayMultiply;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
	if (num < 0) return undefined;
  if (num === 0) return 1;
  let x = num - 1;
  while (x > 1) {
    num *= x;
    x--;
  }
  return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
