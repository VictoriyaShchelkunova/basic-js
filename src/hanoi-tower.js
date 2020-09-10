const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  return {
    turns: Math.pow(2, disksNumber) - 1,
    seconds: Math.trunc((Math.pow(2, disksNumber) - 1) * 3600 / turnsSpeed)
  }
};
