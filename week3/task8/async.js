const fs = require("fs");
const path = require("path");

const filepath = path.join(__dirname, "source.txt");

console.log("start");

fs.readFile(filepath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File data:", data);
});

setTimeout(() => console.log("setTimeout executed"), 0);

new Promise((resolve) => {
  console.log("Promise started");
  resolve("Promise resolved");
}).then(console.log);

console.log("end");
