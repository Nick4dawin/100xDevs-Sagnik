const fs = require("fs"); //requiring external library fs
fs.readFile("a.txt","utf-8",(err,data)=>{ 
console.log(data);
})

console.log("hi");
let a = 0;
for (let i=0;i<10000000000;i++){
    a++;
} //Since this is syncronous, 
//the thread will be busy,
// so when the thread becomes ideal  ,
// the call then goes to the pending callbacks.

console.log("hi again");
