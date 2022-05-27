const fibonacci = function(input) {
  let inputNumber = +input;
  if (inputNumber <= 0) {
    return "OOPS";
  }

  let fib = [0, 1];

  for (let i = 2; i <= inputNumber; i++) {
    fib[i] = fib[i -2] + fib[i - 1];
  }

  return fib[inputNumber];
};

// Do not edit below this line
module.exports = fibonacci;
