const ftoc = function(fahrenheitTemp) {
  celsiusTemp = (+fahrenheitTemp - 32) * (5 / 9);
  return Math.round(celsiusTemp * 10) / 10;
};

const ctof = function(celsiusTemp) {
  fahrenheitTemp = (+celsiusTemp * (9 / 5)) + 32;
  return Math.round(fahrenheitTemp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
