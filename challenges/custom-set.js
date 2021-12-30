/* eslint-disable max-len */
/*

Problem

Example/Test Cases

Data Structure


Algorithm


Code


*/

class CustomSet {
  constructor(arr) {
    if (arr === undefined) {
      this.data = [];
    } else {
      let setArr = [];
      for (let idx = 0; idx < arr.length; idx++) {
        if (!setArr.includes(arr[idx])) {
          setArr.push(arr[idx]);
        }
      }
      this.data = setArr;
    }
  }

  isEmpty() {
    return this.data.length === 0;
  }

  contains(value) {
    return this.data.includes(value);
  }

  isSubset(anotherCustomSet) {
    return (this.isEmpty() ||
           this.data.every(element => anotherCustomSet.data.includes(element)));
  }

  isDisjoint(anotherCustomSet) {
    return (this.isEmpty() ||
            anotherCustomSet.isEmpty() ||
            !this.data.some(elem => anotherCustomSet.data.includes(elem)));
  }

  isSame(anotherCustomSet) {
    if (this.isEmpty() && anotherCustomSet.isEmpty()) return true;

    return (this.data.length === anotherCustomSet.data.length &&
            this.data.every(elem => anotherCustomSet.data.includes(elem)));
  }

  add(element) {
    if (!this.data.includes(element)) {
      this.data.push(element);
    }
    return this;
  }

  intersection(anotherCustomSet) {
    let data =  this.data.filter(elem => anotherCustomSet.data.includes(elem));
    return new CustomSet(data);
  }

  difference(anotherCustomSet) {
    let diffSet = this.data.filter(elem => !anotherCustomSet.data.includes(elem));
    return new CustomSet(diffSet);
  }

  union(anotherCustomSet) {
    let newCustomSet = new CustomSet(this.data);
    anotherCustomSet.data.forEach(element => newCustomSet.add(element));
    return newCustomSet;
  }
}

module.exports = CustomSet;