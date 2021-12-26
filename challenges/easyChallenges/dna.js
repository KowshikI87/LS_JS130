/*

Problem
- Input: given two string (they could be equal or uneven length)
- Output: compute the number of characters mismatch at same index
over the length of the shorter string
- assume: strands are all capital letters

- class called DNA
  - constructor function: one string argument (strand)
    - this.strand = strand
  - hammingdistance: accepts another string argument (anotherSrand).
    - returns number of mismatch of characters at same index between this.strand
    and anotheRStrand


Example/Test Cases
- given


Data Structure
- classes, strings (convert to array to use array's methods)


Algorithm
- get shorter and longer string
- loop over the shorter string character by character and count number of
mismatches between shorter string and longer string

Code

*/

class DNA {
  constructor(strand) {
    this.strand = strand;
  }
  hammingDistance(anotherStand) {
    let [shortrStr, longerStr] = [this.strand, anotherStand].sort((a,b) => {
      return a.length - b.length;
    });

    return shortrStr.split('').reduce((accum, _, currentIdx) => {
      return accum + Number(shortrStr[currentIdx] !== longerStr[currentIdx]);
    }, 0);
  }
}

let testDna1 = new DNA("HELLO");
console.log("hi");
console.log(testDna1.hammingDistance("HI"));

module.exports = DNA;

