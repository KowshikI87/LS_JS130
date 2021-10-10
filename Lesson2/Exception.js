class newClass {
  constructor(arg1) {
    this.arg1 = arg1;
  }
}


function div(first, second) {
  if (second === 0) {
    //throw new Error("Divide by zero!");
    throw new newClass(5);
  }

  return first / second;
}


let result = div(1, 0);
console.log(result);