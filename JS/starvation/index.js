function waitFor(milliseconds) {
    const start = new Date().getTime();
    while (new Date().getTime() - start < milliseconds) {
        // Do nothing
    }
    return "completed high CPU intensive work";
}

setTimeout(() => console.log("Function 1"), 0);
// waitFor(10000); // Wait for 10 seconds
setTimeout(() => console.log("Function 2"), 0);


function call() {
    console.log("clicked");
}