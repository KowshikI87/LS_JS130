/* eslint-disable max-len */
/* eslint-disable no-empty */
class Element {
  constructor(value, nextElement) {
    this.value = value;
    if (nextElement === undefined) {
      this.nextElement = null;
    } else {
      this.nextElement = nextElement;
    }
  }

  datum() {
    return this.value;
  }

  next() {
    return this.nextElement;
  }

  isTail() {
    return (this.nextElement === null);
  }
}

class SimpleLinkedList {

  static fromArray(arr) {
    if (arr === null || arr.length < 1) {
      return new SimpleLinkedList();
    } else {
      let newLinkedList = new SimpleLinkedList();
      for (let idx = arr.length - 1; idx >= 0; idx--) {
        newLinkedList.push(arr[idx]);
      }
      return newLinkedList;
    }
  }

  constructor() {
    this.listSize = 0;
    this.listHead = null;
  }

  toArray() {
    if (this.isEmpty()) {
      return [];
    } else {
      let arrList = [];
      for (let element = this.head(); element !== null; element = element.next()) {
        arrList.push(element.datum());
      }
      return arrList;
    }
  }

  push(value) {
    /*
    //new element is inserted begining of list
      //new element points to old listHead()
      //listHead points to newElement (begining of the list now)
    */
    let newElement = new Element(value, this.head());
    this.listHead = newElement;
    this.listSize += 1;
  }

  pop() {
    /*
    remove the element on top of the list
      - this.listHead points to listHead.next
      - listSize goes down by 1
    */
    let poppedValue = this.head().datum();
    this.listHead = this.head().next();
    this.listSize -= 1;
    return poppedValue;
  }

  size() {
    return this.listSize;
  }

  isEmpty() {
    return this.size() === 0;
  }

  head() {
    return this.listHead;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.head().datum();
    }
  }

  reverse() {
    let newList = new SimpleLinkedList();
    for (let element = this.head(); element !== null; element = element.next()) {
      newList.push(element.datum());
    }
    return newList;

    // //using array ---> bad solution
    // let arrList = this.toArray();
    // arrList.reverse();
    // return SimpleLinkedList.fromArray(arrList);
  }
}

module.exports = {
  Element,
  SimpleLinkedList
};