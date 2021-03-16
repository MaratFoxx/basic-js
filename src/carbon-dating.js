const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  
  if (typeof sampleActivity != 'string') {
  return false;
  }
  let data = parseFloat(sampleActivity);
  if (isNaN(data) || data <= 0 || data > 15) {
  return false
  }
  let approximateAge = Math.log(MODERN_ACTIVITY / data) / (0.693 / HALF_LIFE_PERIOD);
  return Math.ceil(approximateAge)
  };
