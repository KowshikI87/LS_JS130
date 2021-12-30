/*

Problem
- input: a letter
- output: outupt the letter in diamond shape

- starting space for each line:
  - charCode(inputLetter) - charCode(A) - 1
- space between each letter = charCode(letterAtThatLine) - charCode(A)

Example/Test Cases
- given

Data Structure

Algorithm
- numSpaceLetterA = charCode(inputLetter) - charCode(A)

- print top A
  " ".repeat(numSpaceLetterA)  + "A" +
  " ".repeat(numSpaceLetterA)\n

- print rest of upper half of diamond
  - one loop that loops from startCharCode + 1 to endCharCode  (inclusive)
      --> print top of diamond

    - numSpacesStartEnd = charCode(diamondLetter) - charCode(currentLetter)
    - numSpacesBetweenLtr = 2 * (charCode(currentLetter) - charCode(A)) - 1
    - diamondPtrn += " ".repeat(numSpacesStartEnd) +
                    curntLetter +
                    " ".repeat(numSpacesBetweenLtr) +
                    curntLetter +
                    " ".repeat(numSpacesStartEnd) +
                    "\n";

- print bottom part of diamond -->
    loop from endCharCode - 1 to startCharCode + 1 (inclusve)
  - same logic as above

- print bottom A: same logic as above

*/

class Diamond {

  static makeDiamond(diamondLetter) {
    let diamondPattern = '';

    let startCharCode = "A".charCodeAt(0);
    let endCharCode = diamondLetter.charCodeAt(0);

    //top of diamond
    diamondPattern += Diamond.getDiamondTopBtmPattern(diamondLetter);

    //get rest of upper half of diamond
    for (let chCode = startCharCode + 1; chCode <= endCharCode; chCode++) {
      diamondPattern += Diamond.getNonTopBtmPattern(diamondLetter, chCode);
    }

    //rest of bottom half diamond pattern
    for (let chCode = endCharCode - 1; chCode >= startCharCode + 1; chCode--) {
      diamondPattern += Diamond.getNonTopBtmPattern(diamondLetter, chCode);
    }
    //bottom of diamond
    if (diamondLetter !== 'A') diamondPattern += Diamond.getDiamondTopBtmPattern(diamondLetter);

    return diamondPattern;
  }

  static getDiamondTopBtmPattern(endLetter) {
    let startCharCode = "A".charCodeAt(0);
    let endCharCode = endLetter.charCodeAt(0);

    let numSpaceLetterA = endCharCode - startCharCode;
    return " ".repeat(numSpaceLetterA) + "A" + " ".repeat(numSpaceLetterA) + "\n";
  }

  static getNonTopBtmPattern(endLetter, curntLetterCharCode) {
    let startCharCode = "A".charCodeAt(0);
    let endCharCode = endLetter.charCodeAt(0);

    let numSpacesStartEnd = endCharCode - curntLetterCharCode;
    let numSpacesBetweenLtr = (2 * (curntLetterCharCode - startCharCode)) - 1;
    return " ".repeat(numSpacesStartEnd) +
                    String.fromCharCode(curntLetterCharCode) +
                    " ".repeat(numSpacesBetweenLtr) +
                    String.fromCharCode(curntLetterCharCode) +
                    " ".repeat(numSpacesStartEnd) +
                    "\n";
  }
}

module.exports = Diamond;