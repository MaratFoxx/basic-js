const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if (!Array.isArray(arr)) {
    throw new Error
  }

  let newArr = [];
  
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-prev':
        if (newArr.length && arr[i - 2] !== '--discard-next') newArr.pop();
      continue;
      case '--double-prev':
        if (i && arr[i - 2] !== '--discard-next') newArr.push(arr[i - 1]);
      continue;
      case '--discard-next':
        i++;
      continue;
      case '--double-next':
        if (i < arr.length - 1) newArr.push(arr[i + 1]);
      continue;
      default:
        newArr.push(arr[i]);
    }
  }
  return newArr;
}