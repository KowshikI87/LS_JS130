function delayLog() {
    for (let count = 1; count <= 10; count++) {
        setTimeout(function() {
            console.log(count);
        }, count * 1000)
    }
}

delayLog();
