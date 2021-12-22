function bar() {
  var foo;
  if (foo > 20) {
    foo = 50;
  }

  console.log(foo);
  foo += 10;
}

var foo;
foo = 10;


bar(); //undefined
bar(); //NaN
bar(); //NaN