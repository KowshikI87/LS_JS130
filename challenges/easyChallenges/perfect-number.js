/*

Problem
- input: given a number
- output: output if the number is perfect / abundant number / deficient number
- definition
  - perfect number = sum of positive divisors = input number
  - abundant number = sum of positive divisors > input number
  - deficient number = sum of positive divisors < input number

- Extra Conditions
  - negative number raises an exception


Example/Test Cases
- given


Data Struture
- we will just use numbers

Algorithm
- if number is negative then throw error
- use a loop that starts at 1 and goes to round down (input number / 2)
- sum up the divisors (remainder = 0)


Code


*/

class PerfectNumber {
  static classify(number) {
    if (number < 0) throw new Error();

    let aliquotSum = 0;
    for (let divisor = 1; divisor <= Math.round(number / 2); divisor++) {
      if (number % divisor === 0) aliquotSum += divisor;
    }

    if (aliquotSum === number) {
      return "perfect";
    } else if (aliquotSum < number) {
      return "deficient";
    } else {
      return "abundant";
    }
  }
}

module.exports = PerfectNumber;

