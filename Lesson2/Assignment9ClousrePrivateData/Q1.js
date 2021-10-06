//just use LS solutoin (I had that in mind as it is simpler)
function makeCounterLogger(start) {
  return function(end) {
    let step = start > end ? -1 : 1
    let num = start
    do {
      console.log(num)
      num += step;
    } while(num !== end)
    console.log(num)
  }
}

let countlog = makeCounterLogger(5);
countlog(8);
countlog(2);