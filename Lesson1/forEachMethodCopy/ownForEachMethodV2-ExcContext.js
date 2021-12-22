//My solution to defining the execution context
// function forEach(array, callback, context = global) {
//   for (let index = 0; index < array.length; index += 1) {
//     callback.call(context, array[index]);
//   }
// }

/*
//LS Solution
//better because they are using "thisArg" for parameter
//also if we don't supply thisArg then they just undefined (implicit)
  //the output before the solution hinted toward that
*/

function forEach(array, callback, thisArg) {
  for (let index = 0; index < array.length; index += 1) {
    callback.call(thisArg, array[index]);
  }
}


class Foo {
  constructor(prefix) {
    this.prefix = prefix;
  }

  showItem(item) {
    //console.log(this);
    console.log(this.prefix, item);
  }
}

let foo = new Foo("Item: ");
forEach(["a", "b", "c"], item => console.log(item));
forEach([1, 2, 3], foo.showItem, foo);
forEach([4, 5, 6], foo.showItem);

