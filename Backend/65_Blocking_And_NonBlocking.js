

// synchronous or blocking - Line by line execution

// Asynchronous or non-blocking- Line by line execution not guarateed
// - Callbacks will fire


const fs = require("fs");
fs.readFile("red.txt", "utf-8", (err, data) => {
    console.log(data);

});
console.log("this is a message");