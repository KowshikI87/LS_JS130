function foo() {
  // All code here runs in sloppy mode
  console.log(this);
}

function bar() {
  "use strict";
  // All code here runs in strict mode
  foo(); // This invocation is strict mode, but `foo` runs in sloppy mode
  // All code here runs in strict mode
}

bar();