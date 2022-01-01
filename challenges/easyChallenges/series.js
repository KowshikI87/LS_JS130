/*

Problem
- Input: string of digits (not in any order)
- Output: all possible consecutive number series of
  a specified length in that string

- if slice length > digits length then throw new error

- output simplified: let's say length of series is 3 ----> wrong
  - then let's say we have a length of 3 series
    - second number >= first number and third number >= second number
    or
    - second number <= first number and third number <= second number

  - does all series have to point in the same direction? --> NO
    - see Test CASE: 982347 and series length is 3


Test Cases / Examples
- given


Data Structure
- need arrays


Algorithm
- input: digits, seriesLength
- variables: allSeries
- start looping from idx of 0 to <= (digitsLength - seriesLength)
  - curntSeries = digits.slice(curntIdx, curntIdx + seriesLength)
  - allSeries.push(curntSeries.split('').map(digit => Number(digit)));

- return allSeries.filter --> don't need at all
  - run all method on each of the inner list and return true if condition
  specified in "input" part of PEDAC is satisfied

Code


*/

class Series {
  constructor(digits) {
    this.digits = digits;
  }

  slices(seriesLength) {
    if (seriesLength > this.digits.length) throw new Error();
    let allSeries = [];
    for (let idx = 0; idx <= (this.digits.length - seriesLength); idx++) {
      let curntSeries = this.digits.slice(idx, idx + seriesLength);
      allSeries.push(curntSeries.split('').map(digit => Number(digit)));
    }

    return allSeries;
  }
}

module.exports = Series;