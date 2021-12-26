/*

Problem
- Given a number in octal base (number)
- convert it to base 10 equivalent (number)

- If not valid octal number is given then return 0

Example / Test Cases
- given

Data Structure
- array and number


Algorithm
- get a list of digits and reverse the list of digits (easier to process)
- loop over the list of digits (first digit has highest power of 8)
  - idx = 0 to numDigits - 1
- result = result + digits[idx] * Math.Pow(8, idx)

Code

*/

const BASE = 8;

class Octal {
  constructor(number) {
    this.number = number;
  }

  toDecimal() {
    //if not valid octal number then return 0
    if (!this.isValidOctalNumber()) return 0;

    return String(this.number).split('').reverse().reduce((total, curntDigit, index) => {
      return total + (curntDigit * Math.pow(BASE, index));
    }, 0);
  }

  isValidOctalNumber() {
    return String(this.number).split('').every(digit => {
      return digit <= '7' && digit >= '0';
    });
  }
}

module.exports = Octal;

