let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, [2, 3], 4, 5];


// let arr3 = [ ...arr1 ];
// let arr4 = [ ... arr2 ];
// console.log(arr1 === arr3); //false
// console.log(arr2 === arr4); //false
// console.log(arr2[1] === arr4[1]); //true
// console.log("stop");

// let arr3 = { ...arr1 };
// let arr4 = { ...arr2 };
// console.log(arr1 === arr3); //false
// console.log(arr2 === arr4); //false
// console.log(arr2[1] === arr4[1]); //true
// console.log("stop");


let [ ...arr3 ] = arr1;
let [ ...arr4 ] = arr2;
console.log(arr1 === arr3); //false
console.log(arr2 === arr4); //false
console.log(arr2[1] === arr4[1]); //true
console.log("stop");
