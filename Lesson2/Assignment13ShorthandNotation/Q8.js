function testFunc([first, last, ...middle]) {
  return {
    first,
    last,
    middle: middle.sort()
  };
}

let { first, last, middle } = testFunc(["Hi", "Hello", "Test1" , "Test2", "Test3"]);
console.log("stop");

//LS solution also works but don't stress over it