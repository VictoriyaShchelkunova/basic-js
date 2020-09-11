const CustomError = require("../extensions/custom-error");

const chainMaker = {
  this: this,
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {

    if (value === undefined) {
      value === ' '
    }
    this.chain = [...this.chain, '( ' + value + ' )~~'];
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || position === '' || this.chain[position] === undefined) {
      this.chain = [];
      throw new TypeError('this is not a number.')
    }
    this.chain = [...this.chain.filter((item, index) => index !== position - 1)];
    return this;
  },
  reverseChain() {
    this.value = this.chain.reverse();
    return this;
  },
  finishChain() {
    let str = '';
    str = this.chain.join('').slice(0, -2);
    this.chain = [];
    return str;
  }
};
module.exports = chainMaker;
