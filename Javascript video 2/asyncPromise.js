const fs = require("fs")

function customReadFile(){
 return new Promise (function (resolve){
    fs.readFile("a.txt","utf-8",(err,data)=>{
        resolve(data);
    })
 })

}

function operation(data) {
    console.log(data);
}
 
customReadFile().then(operation); //using .then

//Using Async Await
async function main(){
    let value = await customReadFile();
    console.log(value);
}

main();