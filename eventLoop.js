// const fs=require("fs")

// const a=100;

// // A task
//  setImmediate(()=>console.log("setImmediate"))

//  Promise.resolve().then(() => console.log("Promise"));

//  //C task file is reading in the next loop
//  fs.readFile("./file.txt", "utf8" , ()=>{
//     console.log("file reading CB")
//  })

// //B task
//  setTimeout(()=>{
//     console.log("setTimeout time expired")
//  },0)

// process.nextTick(()=> console.log("process.nextTick"))

//  function printA(){
//     console.log("a=",a)
//  }

//  printA()
//  console.log("Last line of the file")

//  a= 100
//  Last line of the file
//  process.nextTick
//  Promise
//  setTimeout time expired
//  setImmediate
//  file reading CB

//second output task

// const fs = require("fs");

// setImmediate(() => console.log("setImmediate"));
// setTimeout(() => {
//   console.log("setTimeout time expired");
// }, 0);

// Promise.resolve().then(() => console.log("Promise"));

// fs.readFile("./file.txt", "utf8", () => {
//   setTimeout(() => console.log("2nd Timer"), 0);
//   process.nextTick(() => console.log("2nd process.nextTick"));

//   setImmediate(() => console.log("2nd setImmediate"));

//   console.log("file reading CB");
// });

// process.nextTick(() => console.log("process.nextTick"));

// console.log("Last line of the file");


// // output:
// // Last line of the file
// // process.nextTick
// // Promise
// // setTimeout time expired
// // setImmediate
// // file reading CB
// // 2nd process.nextTick
// // 2nd setImmediate
// // 2nd Timer

//third output question:
const fs=require("fs")
setImmediate(()=>console.log("set immediate"))
Promise.resolve().then(()=>console.log("Promise"))
fs.readFile("./file.txt","utf8", ()=>{
  console.log("file reading CB");
})
process.nextTick(()=>{
  process.nextTick(()=> console.log("Inner newtikc"))
  console.log("newTick")
})

console.log("Last line of the file ")

// output:
// Last line of the file
// newTick
// Inner newtikc
// Promise
// set immediate
// file reading CB