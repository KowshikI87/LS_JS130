function logIt(string) {
  console.log(string);
}

function logIt2(string) {
  console.log(`logging2 ${string}`);
}

function logIt3(string) {
  console.log(`logging3 ${string}`);
}

module.exports = logIt;
module.exports = {
  logIt2,
  logIt3
};


