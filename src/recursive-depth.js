const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let result = 0;
    let level = 1;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (count > 0) {
        level = 1;
      }
      if (Array.isArray(arr[i])) {
        count += 1;
        level += this.calculateDepth(arr[i]);
        if (result < level) {
          result = level;
        }
      } else {
        continue;
      }
    }
    if (level > result) {
      return level;
    } else {
      return result;
    }
  }
};