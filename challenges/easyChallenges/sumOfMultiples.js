/* eslint-disable indent */
/* eslint-disable max-len */
/*

Problem
- input: number, list of numbers (one or more)
  - if list of numbers not given then default to [3, 5]
- output: sum (list of numbers that are multiples of list of numbers
  and < original number)

- class SumOfMultiples
- static method: to(number)
  - return sum of multiples
  - assume that default list is [3, 5]
- construtor(listOfNum)
- instance method: to(number)
  - assumes that listOfNum is set before;

Example / Test Cases
- 10, none: 3, 6, 9, 5 ==> Sum = 23

Data Structure
- probably will need arrays

Algorithm
- one array: list of numbers: listOfNum
- another array: Math.floor(original number / number in list of number):
  - variable: listOfMaxFactor
- run reduce method on listOfNum (total, curntNumber, index)
  - start a loop that starts at 1 to <= listOfMaxFactor
    - if curntNumber * factor < inputNumber, the nadd to total
  - return total

Code

*/


class SumOfMultiples {
  constructor(...listOfNum) {
    if (listOfNum === undefined) this.listOfNum = [3, 5];
    this.listOfNum = listOfNum;
  }

  static to(number) {
    let newSumOfMultiple = new SumOfMultiples(3,5);
    return newSumOfMultiple.to(number);
  }

  to(inputNumber) {
    let numsMaxFactor = this.listOfNum.map(num => Math.floor(inputNumber / num));
    let validMultpNumbers = [];
    validMultpNumbers = this.listOfNum.reduce((numbers, curntNumber, index) => {
                              for (let factor = 1; factor <= numsMaxFactor[index]; factor++) {
                                let multipleNum = factor * curntNumber;
                                if ((multipleNum < inputNumber) && !numbers.includes(multipleNum)) numbers.push(multipleNum);
                              }
                              return numbers;
                            }, []);
    return validMultpNumbers.reduce((total, curntNum) => {
      return total + curntNum;
    }, 0);
  }
}

module.exports = SumOfMultiples;
