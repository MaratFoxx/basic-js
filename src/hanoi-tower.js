const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  throw new CustomError('Not implemented');
  let turns = (Math.pow(2,disksNumber)-1);
  let time = Math.floor((60 / turnsSpeed) * turns * 60);
  return {turns: turns, seconds: time};
  };