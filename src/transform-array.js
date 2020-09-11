const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (arr.every(item => item === undefined)) {
    return arr;
  } else if (arr.find((item) => {
    if (typeof item === 'string') {
      return item === '--discard-next' || item === '--discard-prev' || item === '--double-next' || item === '--double-prev'
    }
  }) === undefined) {
    return arr;
  }
  const arrRes = [];
  let arrWork = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      if (i !== arr.length - 1) {
        arrWork = arr.slice(i + 2);
        arrRes.push(...transform(arrWork))
        return arrRes;
      } else {
        continue;
      }
    } else if (arr[i] === '--discard-prev') {
      if (i !== 0) {
        arrRes.pop();
        arrWork = arr.slice(i + 1);
        arrRes.push(...transform(arrWork))
        return arrRes;
      } else {
        continue
      }
    } else if (arr[i] === '--double-next') {
      if (i !== arr.length - 1) {
        arrRes.push(arr[i + 1]);
        arrWork = arr.slice(i + 1);
        arrRes.push(...transform(arrWork))
        return arrRes;
      } else {
        continue;
      }
    } else if (arr[i] === '--double-prev') {
      if (i !== 0) {
        arrRes.push(arr[i - 1]);
        arrWork = arr.slice(i + 1);
        arrRes.push(...transform(arrWork))
        return arrRes;
      } else {
        continue;
      }
    } else {
      arrRes.push(arr[i]);
    }
  }
  return arrRes;
};
