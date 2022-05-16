const removeFromArray = function(...args) {
  let mainArray = args[0];
  let remove = args.slice(1);
  let newArray = [];
  mainArray.forEach((arrayItem) => {
    if (!remove.includes(arrayItem)) {
      newArray.push(arrayItem);
    }
  });
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
