/*

Problem
- given: dimension of 3 sides of a triangle
- output: type of triangle: equilateral/isosceles/scalene
  - equilateral: all sides are the same
  - isoceles: two sides have same length
  - scalene: all sides have different lengths

Example/Test Cases
- given


Data Structure
- integer and string


Algorithm
- side1 == side2 && side2 == side3 ==> equilateral
- side1 == side2 || side1 == side3 || side2 == side3 ==> isoceles
- else:scalene


Code


*/

class Triangle {
  constructor(side1, side2, side3) {

    if (!(side1 > 0) && !(side2 > 0) && !(side3 > 0)) throw new Error();

    if (((side1 + side2) <= side3) ||
       ((side2 + side3) <= side1)  ||
       ((side1 + side3) <= side2)) throw new Error();

    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  kind() {
    if (this.side1 === this.side2 && this.side2 === this.side3) {
      return "equilateral";
    } else if (this.side1 === this.side2 ||
              this.side1 === this.side3 ||
              this.side2 === this.side3) {
      return "isosceles";
    } else {
      return "scalene";
    }
  }
}

module.exports = Triangle;