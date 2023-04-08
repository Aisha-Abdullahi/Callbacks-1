function printAsyncName(name, callback) {
    setInterval(function () {
        console.log(name);

        setInterval(function () {
            console.log("Hello");
            callback()
        }, 1000)

    }, 2000)
}

printAsyncName("Aisha", function () { })