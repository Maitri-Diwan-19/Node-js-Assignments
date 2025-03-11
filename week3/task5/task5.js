const fs = require("fs");
const path = require("path");

const sourcepath = path.join(__dirname, "source.txt");
const destpath = path.join(__dirname, "destination.txt");

fs.readFile(sourcepath, "utf8", (err, data) => {
  if (err) {
    console.log("error reading file ", err);
    return;
  }
  console.log("file content is ", data);


fs.writeFile(destpath, data,(error) => {
  if (error) {
    console.log("error writting file", error);
    return;
  }
  console.log("writing file succesfully");
});

});
