const leapYears = function(calendarYear) {
  if (calendarYear % 100 === 0 && calendarYear % 400 !== 0) {
    return false;
  } else {
    if (calendarYear % 4 === 0) {
      return true;
    } else {
      return false;
    }
  }
};

// Do not edit below this line
module.exports = leapYears;
