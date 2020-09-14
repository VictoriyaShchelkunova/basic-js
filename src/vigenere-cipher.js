const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(value) {
    this.value = value;
    this.alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  }
  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error();
    }
    key = key.toLowerCase();
    let stringMessage = message.toLowerCase().split('').filter(item => this.alphabet.indexOf(item) !== -1).join('');
    let def = stringMessage.length - key.length;

    if (def > 0 && def < key.length) {
      key = key + key.slice(0, def);
    } else if (def > key.length) {
      for (let i = 0; i < def; i++) {
        key += key[i];
      }
    } else if (def < 0) {
      key = key.slice(0, stringMessage.length);
    }

    let currentKey = [];
    for (let i = 0, j = 0; i < message.length, j < key.length; i++, j++) {
      if (this.alphabet.indexOf(message.toLowerCase()[i]) !== -1) {
        currentKey[i] = key[j];
      } else {
        currentKey[i] = message.toLowerCase()[i];
        j--;
      }
    }

    let strResult = [];
    for (let i = 0; i < message.length; i++) {
      let messageCurrent = message.toLowerCase();
      let indexString = this.alphabet.indexOf(messageCurrent[i]);
      
      if (indexString !== -1) {
        strResult[i] = this.alphabet.find((elem, idx) => {
          let currentIndex = indexString + this.alphabet.indexOf(currentKey[i]);
          if (currentIndex >= 26) {
            currentIndex = currentIndex - 26;
          };
          return idx === currentIndex;
        })
      } else {
        strResult[i] = messageCurrent[i];
      }
    }
    if (this.value === false) {
      return strResult.reverse().join('').toUpperCase();

    }
    return strResult.join('').toUpperCase();
    
  }
  decrypt(encrypteMessage, key) {
    if (encrypteMessage === undefined || key === undefined) {
      throw new Error();
    }
    key = key.toLowerCase();
    let stringEncrypteMessage = encrypteMessage.toLowerCase().split('').filter(item => this.alphabet.indexOf(item) !== -1).join('');
    let def = stringEncrypteMessage.length - key.length;
    if (def > 0 && def < key.length) {
      key = key + key.slice(0, def);
    } else if (def >= key.length) {
      for (let i = 0; i < def; i++) {
        key += key[i];
      }
    } else if (def < 0) {
      key = key.slice(0, stringEncrypteMessage.length);
    }
    let currentKey = [];
    for (let i = 0, j = 0; i < encrypteMessage.length, j < key.length; i++, j++) {
      if (this.alphabet.indexOf(encrypteMessage.toLowerCase()[i]) !== -1) {
        currentKey[i] = key[j];
      } else {
        currentKey[i] = encrypteMessage.toLowerCase()[i];
        j--;
      }
    }
    let strResult = [];
    for (let i = 0; i < encrypteMessage.length; i++) {
      let messageCurrent = encrypteMessage.toLowerCase();
      let indexString = this.alphabet.indexOf(messageCurrent[i]);
      if (indexString !== -1) {
        strResult[i] = this.alphabet.find((elem, idx) => {
          let currentIndex = indexString - this.alphabet.indexOf(currentKey[i]);
          if (currentIndex < 0) {
            currentIndex = currentIndex + 26;
          };
          return idx === currentIndex;
        })
      } else {
        strResult[i] = messageCurrent[i];
      }
    }
    if (this.value === false) {
      return strResult.reverse().join('').toUpperCase();
    }
    
    return strResult.join('').toUpperCase();

  }
}

module.exports = VigenereCipheringMachine;
