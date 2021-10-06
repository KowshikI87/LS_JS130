function later2(func, arg1) {
  return function(arg2) {
    func(arg1, arg2)
  }
}

