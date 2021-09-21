// Write a function named makeMultipleLister that you can call with a number as an argument. 
// The function should return a new function that, when invoked, 
// logs every positive integer multiple of that number less than 100. 
// It should work like this:

function makeMultipleLister(num) {
  return function() {
    let curntMultNum = num;
    while (curntMultNum < 100) {
      console.log(curntMultNum)
      curntMultNum += num;
    }
  }
}

let lister = makeMultipleLister(17);
lister();