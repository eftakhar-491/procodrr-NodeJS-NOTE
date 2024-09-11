// fs can access normal text file
const fs = require("fs");
const text = fs.readFileSync("./07_Running Our First Node.js Code.txt");

console.log(global);
console.log(text.toString());
