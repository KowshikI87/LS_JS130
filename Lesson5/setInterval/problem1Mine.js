let number = 1;

function startCounting() {
    console.log(number);
    number++;
}

var id = setInterval(startCounting, 1000);

//This solution won't work. Since te function does not do
//what it should: it only logs a number
//but not at certain interval




