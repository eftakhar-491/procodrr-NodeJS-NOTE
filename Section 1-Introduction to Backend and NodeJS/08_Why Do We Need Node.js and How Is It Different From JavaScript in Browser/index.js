// fs can access normal text file
const fs = require("fs");
const text = fs.readFileSync(
  "./Why Do We Need Node.js and How Is It Different From JavaScript in Browser.txt"
);
console.log(text.toString());
const textWrite = fs.writeFileSync(
  "./Why Do We Need Node.js and How Is It Different From JavaScript in Browser.txt",
  "hii , hello"
);
console.log(text.toString());
