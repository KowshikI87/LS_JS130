function bar() {
  console.log(foo);
}

var foo;
bar();          // logs undefined
foo = 'hello';