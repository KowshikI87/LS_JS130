function later(func, arg1) {
  return function() {
    func(arg1)
  }
}

const logger = message => console.log(message);
let logWarning = later(logger, "The system is shutting down!");
logWarning(); // The system is shutting down!