//************************************************************
// Use the Node REPL for this example.
// Type the commands one at a time - don't use copy and paste.
//************************************************************

var bar = 42;
console.log(global.bar); // 42
bar += 1;
console.log(global.bar); // 43

let foo = 86;
console.log(global.foo); // undefined