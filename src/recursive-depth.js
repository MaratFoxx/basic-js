const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
calculateDepth(arr) {
throw new CustomError('Not implemented');
let data = 1;

for (let i = 0; i < arr.length; i++) {
if (Array.isArray(arr[i])) {
let znach = this.calculateDepth(arr[i]);
if (data < (znach += 1)) {
data = znach;
}
}
}
return data;
}
};