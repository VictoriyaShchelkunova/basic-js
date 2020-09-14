const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (options.separator === undefined) {
    options.separator = '+';
  }
  if (options.additionSeparator === undefined) {
    options.additionSeparator = '|';
  }
  if (options.addition === undefined) {
    options.addition = '';
  }
  let resultString = '';
  let repeatedString = '';
  str = String(str);
  options.addition = String(options.addition);
  if (options.repeatTimes === undefined && options.additionRepeatTimes) {
    for (let j = 0; j < options.additionRepeatTimes; j++) {
      repeatedString += options.addition + options.additionSeparator;
    }
    return str + repeatedString.slice(0, -2);
  };

  if (options.additionRepeatTimes === undefined && options.repeatTimes) {
    for (let i = 0; i < options.repeatTimes; i++) {
      if (options.addition) {
        resultString += str + options.addition + options.additionSeparator + options.separator;
      } else {
        resultString += str + options.separator;
      }
    }
    return resultString.slice(0, -options.separator.length);
  }

  if (options.repeatTimes === undefined && options.additionRepeatTimes === undefined) {
    return str + options.addition;
  } else {
    for (let i = 0; i < options.repeatTimes; i++) {
      for (let j = 0; j < options.additionRepeatTimes; j++) {
        repeatedString += options.addition + options.additionSeparator;
      }
      resultString += str + repeatedString.slice(0, -options.additionSeparator.length) + options.separator;
      repeatedString = '';
    }
  }
  return resultString.slice(0, -options.separator.length);
};