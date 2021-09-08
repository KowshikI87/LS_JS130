function reduce(array, callback, initialValue) {
  let accumulator;
  let currentValue;
  let startingIndex;
  if (initialValue === undefined) {
    accumulator = array[0];
    startingIndex = 1;
  } else {
    accumulator = initialValue;
    startingIndex = 0;
  }

  for (let index = startingIndex; index < array.length; index++) {
    currentValue = array[index];
    accumulator = callback(accumulator, currentValue);
  }
  return accumulator;
}


let numbers = [1, 2, 3, 4, 5];
console.log(reduce(numbers, (accum, number) => accum + number));   // => 15
console.log(reduce(numbers, (prod, number) => prod * number));     // => 120
console.log(reduce(numbers, (prod, number) => prod * number, 3));  // => 360
console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
console.log(reduce([], (accum, number) => accum + number));
// // => undefined

let stooges = ["Mo", "Larry", "Curly"];
console.log(reduce(stooges, (reversedStooges, stooge) => {
  reversedStooges.unshift(stooge);
  return reversedStooges;
}, []));
// => ["Curly", "Larry", "Mo"]