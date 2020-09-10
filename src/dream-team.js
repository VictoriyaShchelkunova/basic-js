const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)){
    return false;
  }  
  return members.filter((item => typeof item === 'string')).
  map((item) => item.trim()[0].toUpperCase()).sort().join('');
};
