const CustomError = require("../extensions/custom-error");

function filterKey(key) {
  let result = [];
  for (let i = 0; i < key.length; i++) {
    let c = key.charCodeAt(i);
    if (isLetter(c))
      result.push((c - 65) % 32);
  }
  return result;
}
function isLetter(c) {
  return isUppercase(c) || isLowercase(c);
}
function isUppercase(c) {
  return 65 <= c && c <= 90; 
}
function isLowercase(c) {
  return 97 <= c && c <= 122; 
}
class VigenereCipheringMachine {

  constructor(isReversed) {
    this.isReversed = isReversed;
  }
  crypt(input, key) {
    if (input === 'undefined' || key === 'undefined') {
      throw new CustomError('error');
    }
    let output = "";
    for (let i = 0, j = 0; i < input.length; i++) {
      let c = input.charCodeAt(i);
      if (isUppercase(c)) {
        output += String.fromCharCode((c - 65 + key[j % key.length]) % 26 + 65);
        j++;
      } else if (isLowercase(c)) {
        output += String.fromCharCode((c - 97 + key[j % key.length]) % 26 + 97);
        j++;
      } else {
        output += input.charAt(i);
      }
    }
    return output;
  }

  encrypt(message, key) {
    if (message === 'undefined' || key === 'undefined') {
      throw new CustomError('error arguments');
    }

    let keyArr = filterKey(key);

    if (this.isReversed === false) {
      return (this.crypt(message.split('').reverse().join(''), keyArr).toUpperCase());
    } else {
      return (this.crypt(message, keyArr).toUpperCase());
    }

  }

  decrypt(message, key) {
    if (message === 'undefined' || key === 'undefined') {
      throw CustomError('error arguments');
    }

    let keyArr = filterKey(key);

    for (let i = 0; i < keyArr.length; i++)
      keyArr[i] = (26 - keyArr[i]) % 26;
    if (this.isReversed === false) {
      return (this.crypt(message.split('').reverse().join(''), keyArr));
    } else {
      return (this.crypt(message, keyArr));
    }
  }
}
module.exports = VigenereCipheringMachine;