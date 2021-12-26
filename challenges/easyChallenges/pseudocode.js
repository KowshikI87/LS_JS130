/* eslint-disable max-len */
/*

Problem
- input: given an integer < 3000
- output: give the roman numerals version of that number


Example/Test Cases
- given


Data Structure


Algorithm
- from first look, it looks like we should use recursion
  - Similar to problem Tony gave for practice problem of CPS109
- but not good enough to use recursion for that. So let's try a loop


----Initial Algorithm----

- given inputNumber
- another variable to keep track of how much of number left to convert


Example: 48
- first find number from  I, V, X(10), L(50), C(100), D(500), M(1000)
  - that is closest to given number
  - if for any case, the absolute difference is 0 then
      result = preset roman numeral
  - else
    - remaining number = abs(closest number - input number)
      - if closest number > input number then add rest of numerals to front
        initial closest to number
      - otherwise, add rest of numerals to end of initial cloest number
    - then again, find the numeral closet to the given numbers
        result = newNumeral + oldNumeral or
        result = oldResult + newNumeral
        - if absolute difference is 0 then just break out of while loop

  - II: 2 //have to include II and III because otherwise
  - III:3

----Refined Algorithm----

- object: romanNumeralVals
  - I: 1
  - II: 2
  - III: 3
  - V: 5
  - X: 10
  - L: 50
  - C: 100
  - D: 500
  - M: 1000


input: initialNumber
another variable: numberRemaining = initialNumber
result array: romanNumeralResult
- maybe can use push and pop operation and keep roman numerals in an array
while(true) {
  closestRomanNumeral = returnClosestPresetNumeral(romanNumeralVals, Abs(numberRemaining))

  if numberRemaining > 0 then romanNumeralResult.push(closestRomanNumeral)
  else romanNumeralResult.shift(closestRomanNumeral)

  - update numberRemaining
    - if numberReamining > 0 then numberRemaining  - closestRomanNumeral
    - else if nubmerRemaining < 0: closestRomanNumeral( + numberRemaining


  if numberRemaining = 0 then return romanNumeralResult.join('')
}

function returnClosestPresetNumeral(romanNumeralVals, number) {
  return the roman numeral key: Abs(romanNumerals[numeral] - number) is lowest
}

----Test Case Runthrough----

function getRomanNumeralToNumber() ---> complicated.

//Example: 47
  - first iteration:
    - closestRomanNumeral: L: 50
    - numberRemaining = 47 > 0 so result = L
    - update numberRemaining
      - --> if numberReamining > 0 then numberRemaining  - closestRomanNumeral(50) = -3
      - else if nubmerRemaining < 0: closestRomanNumeral(50) + numberRemaining

  - second iteration
    - closetRomanNumeral: coin toss between I and V. Let's say V wins
    - numberRemaining = -3 < 0 so result = VL
    - update numberRemaining
      - numberRemaining < 0: cloestNumeral(5) + numberRemaining (-3) = 2

  - third iteratoin
    - cloestRomanNumeral: I
    - numberRemaining = 2 > 0 so result = VLI
    - update numberRemaining
      - numberRemaining > 0: numbeRemaining(2) - cloestRomanNumeralValue(1) = 1
  - fourth iteration
    - closetRomanNUmeral: I
    - numberRemaining = 1 > 0 so result = VLII
    - update numberRemaining
      - numberRemaining > 0: numberRemaining(1) - cloestRomanNumeralVAlue(1) = 0

    - numberRemaning = 0 so return VLII --> wrong result

- Only way to correct it is using II,and III as well in value dictionary

----------------------------------
Code

*/
//inputting II: 2 as otherwise converting 2 to roman numeral would require special processing (could pick III as initial guess)
//inputting III: 3 as otherwise converting 3 to roman numeral would require special processing (could pick I or IV as initial guess)
//inputting IV: 4 manually. Converting 4 to roman numeral would require special processing otherwise
let romanNumeralVals = {
  I : 1,
  II: 2,
  III: 3,
  IV: 4, 
  V : 5,
  X : 10,
  L : 50,
  C : 100,
  D : 500,
  M : 1000,
};

//return the roman numeral key: Abs(romanNumerals[numeral] - number) is lowest
function returnClosestPresetNumeral(romanNumeralVals, number) {
  let lowestAbsDiff = Object.values(romanNumeralVals).map((value) => Math.abs(value - number)).sort((num1, num2) => num1 - num2)[0];
  return Object.keys(romanNumeralVals).find(romanNumeral => Math.Abs(romanNumeralVals[romanNumeral] - number) === lowestAbsDiff);
}


class RomanNumeral {
  constructor(number) {
    this.number = number;
  }

  toRoman() {



    //have to serach the roman numeral. Anytime, I h


  }
}