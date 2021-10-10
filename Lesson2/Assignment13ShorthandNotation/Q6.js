// function product(numbers) {
//   return numbers.reduce((total, number) => total * number);
// }

// let result = product([2, 3, 4, 5]);
// console.log("stop");

function product() {
  let args = Array.from(arguments);
  return args.reduce((total, number) => total * number);
}

let result = product(2, 3, 4, 5);
console.log("stop");

// //LS solution also works
// function product() {
//   let args = Array.from(arguments);
//   return args.reduce((total, number) => total * number);
// }

// let result = product(2, 3, 4, 5);
// console.log(stop);