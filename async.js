const fs=require("fs")
const https=require("https");


console.log("hello world!")
 
var a=8098098;
var b=797987;

fs.readFileSync("./file.txt","utf-8")
console.log("this will execute after read of file there is I/O blocking")

https.get("https://dummyjson.com/products/1",(res)=>{
console.log("fetched data sucessfully!")
// console.log(JSON.stringify(res))
})

setTimeout(() => {
    console.log("setTimeout is called after 5 seconds!")
}, 5000);


//asycn function 
fs.readFile('./file.txt',"utf-8",(err,data)=>{
    console.log("file Data",data)
})

function multiplyFn(a,b){
    const result=a*b;
    return result
}

console.log(multiplyFn(a,b))

//hello world
//mutltiply results 4646465
// filereading very fast because it don't have to call the api 5 sec ms
// api call 200-400 ms
// setTimeout 5sec