const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  sampleActivity = typeof sampleActivity === 'string' ? parseFloat(sampleActivity) : false;
  if (sampleActivity && sampleActivity < 15 && sampleActivity > 0) {
    return Math.ceil((Math.log(MODERN_ACTIVITY / sampleActivity) * HALF_LIFE_PERIOD) / 0.693);
  }
  return false;
};
