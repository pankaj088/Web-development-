const fs = require("fs");
let text = fs.readFileSync("red.txt", "utf-8");
text = text.replace("browser", "pankaj");

console.log("The content of file is ")
console.log(text);

console.log("creating a new file ")
fs.writeFileSync("pan,txt", text);