function printAsyncName(name, callback) {
    setInterval(function () {
        console.log(name);


    }, 2000)
    setInterval(function () {
        console.log("Hello");
        callback()
    }, 1000)
}

printAsyncName("Aisha", function () { })