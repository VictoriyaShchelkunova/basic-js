const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }

  const seasons = ['winter', 'spring', 'summer', 'autumn'];
  try {
    if (!(date.__proto__.getMonth === date.getMonth)) {
      throw new TypeError("this is not a Date object.");
    }

    const month = date.getMonth();
    if (month === 0 || month === 1 || month === 11) {
      return seasons[0];
    } else if (month === 2 || month === 3 || month === 4) {
      return seasons[1];
    } else if (month === 5 || month === 6 || month === 7) {
      return seasons[2];
    } else if (month === 8 || month === 9 || month === 10) {
      return seasons[3];
    }

  } catch (error) {
    throw new Error(error);
  }
};
