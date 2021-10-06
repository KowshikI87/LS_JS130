(function countDown(number) {
  if (number === 0) {
    console.log(number);
    return undefined;
  } else {
    console.log(number);
    return countDown(number - 1);
  }
})(7);

//LS Solution is better

//we are assuming that start is always > 0
//we are just letting all function call return undefind

(function recursiveCounter(number) {
  console.log(number);

  if (number !== 0) {
    recursiveCounter(number - 1);
  }
})(7);