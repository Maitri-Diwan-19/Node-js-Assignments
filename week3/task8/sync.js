const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname,"source.txt");
console.log("start");
try {
    const data= fs.readFileSync(filepath,"utf8");
    console.log("File data",data);
} catch (error) {
    console.error("error reading file",error); 
}

setTimeout(()=>console.log("setTimeout executed"),0);

new Promise((resolve)=>{
    console.log("promise started");
    resolve("promise resolved");
}).then(console.log);

console.log("end");