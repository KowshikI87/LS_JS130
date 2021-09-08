function objForEach(object, callback) {
  //similar to an array, we interate over the keys
  //of an object

  //using hasOwnProperty so we are only iterating
  //over the object's own properties
  for (let property in object) {
    if (object.hasOwnProperty(property)) {
      //it kind of makes sense that we pass
      //both key and values to callback
      //with array, by default we jsut pass value
      //because the keys (numbers) are not that useful
      callback(property, object[property]);
    }
  }
}

let obj = { foo: 1, bar: 2, qux: 3 };
objForEach(obj, (property, value) => {
  console.log(`the value of ${property} is ${value}`);
});