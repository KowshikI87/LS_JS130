function startCounting() {
    let count = 0;
    let counterId = setInterval(function() {
      count += 1;
      console.log(count);
    }, 1000);

    return counterId; //did not include in solution
  }

  function stopCounting(id) {
    clearInterval(id);
  }

  //did not include these lines in my solution
  let counterId = startCounting();
  //some time later
  stopCounting(counterId);